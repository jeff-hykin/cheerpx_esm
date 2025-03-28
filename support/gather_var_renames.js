#!/usr/bin/env -S deno run --allow-all

import { Parser, parserFromWasm } from "https://deno.land/x/deno_tree_sitter@0.2.8.5/main.js"
import javascript from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/676ffa3b93768b8ac628fd5c61656f7dc41ba413/main/javascript.js"
import { regex } from 'https://esm.sh/gh/jeff-hykin/good-js@1.14.6.0/source/flattened/regex.js'
import { frequencyCount } from 'https://esm.sh/gh/jeff-hykin/good-js@1.14.6.0/source/flattened/frequency_count.js'
import OpenAI from "jsr:@openai/openai"
import $ from "https://esm.sh/jsr/@david/dax@0.42.0/mod.ts"
var $$ = (...args)=>$(...args).noThrow()
// await $$`false`
// await $$`false`.text("stderr")
// await $$`false`.text("stdout")

const client = new OpenAI({
    apiKey: Deno.env.get('OPENAI_API_KEY'),
})

const parser = await parserFromWasm(javascript) // path or Uint8Array

export function getBadNames(code, {filter}={}) {
    if (filter == null) {
        filter = name=>name.length < 3
    }
    const tree = parser.parse(code)
    const identifiers = tree.rootNode.quickQuery(`(identifier)`).map(node => node.text).filter(filter)
    const functionCalls = tree.rootNode.quickQuery(`(call_expression (identifier) @output)`).map(node => node.output.text).filter(filter)
    const funcCallFreq = frequencyCount(functionCalls, {sort: 1})
    const identifierFreq = frequencyCount(identifiers, {sort: 1})
    const ordedBadNames = new Set([...funcCallFreq.keys(), ...identifierFreq.keys(), ])
    return [...ordedBadNames]
}

export async function executePromptDefault(prompt) {
    const output = await $$`ollama run deepseek-r1`.stdinText(prompt).text("stdout")
    return output
}

export async function executeOpenAiPrompt(prompt) {
    const response = await client.responses.create({
        model: 'gpt-4o-mini',
        instructions: 'You are a backend API with the skills of a senior developer. You are given a question and you need to answer with a brief formatted answer',
        input: prompt,
    })
    return response.output_text
}

export function getBadNamesAndContext(code, {filter}={}) {
    const badNames = getBadNames(code, {filter})
    const badNamesAndContexts = {}
    for (let each of badNames) {
        badNamesAndContexts[each] = [...code.matchAll(regex`((?:(?:\n|^).+){0,10}\\b${each}\\b(?:.+\n){0,10})`.g)].map(match => match[1])
    }
    return badNamesAndContexts
}

export function removeWhitespacePrefix(code) {
    const notAllWhitespaceLines = code.split("\n").filter(each=>!each.match(/^\s*$/))
    const prefixAmount = Math.min(...notAllWhitespaceLines.map(each=>each.match(/^(\s*)/)[1].length))
    return notAllWhitespaceLines.map(each=>each.slice(prefixAmount)).join("\n")
}

export async function getReplacementNames(code, {executePrompt=executePromptDefault, maxRetries=3, onProgress=(index, total, badName, newName)=>0, filter=name=>name.length < 3, contextCap=20}={}) {
    const badNamesAndContexts = getBadNamesAndContext(code, {filter})
    const replacementNames = {}
    let index = 0
    const entries = Object.entries(badNamesAndContexts)
    for (const [name, context] of entries) {
        const withoutWhitespacePrefix = context.slice(0,contextCap).map(removeWhitespacePrefix)
        const prompt = `Take a look at what "${name}" does in the following snippets.\n${withoutWhitespacePrefix.map((each,i)=>`snippet example of ${name} #${i+1}:\n\`\`\`\n${each}\n\`\`\`\n`).join("\n")}\n\nPlease suggest a better name for "${name}" and put your answer inside of brackets like this: {{BETTER_NAME}}`
        let newName = name
        let result = await executePrompt(prompt)
        let count = 0
        while (!result.match(/{{\w+}}/)) {
            if (count++ > maxRetries) {
                break
            }
            result = await executePrompt((prompt + "\nPlease make sure your answer is inside of brackets like this: {{BETTER_NAME}}"))
        }
        // use last match not first 
        let match = [...result.matchAll(/{{([\w]+)}}/g)].at(-1)
        if (match) {
            newName = match[1]
        }
        
        if (newName === "BETTER_NAME" || filter(newName)) {
            newName = name
        }
        replacementNames[name] = newName
        onProgress(++index, entries.length, name, newName)
    }
    return replacementNames
}