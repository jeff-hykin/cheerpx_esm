#!/usr/bin/env -S deno run --allow-all
import { getReplacementNames } from "../support/gather_var_renames.js"

await getReplacementNames(
    Deno.readTextFileSync('/Users/jeffhykin/repos/cheerpx_esm/main/cx.esm.js'),
    {
        onProgress: (index, total, badName, newName)=>console.log(`${(index/total*100).toFixed(2)}% ${index}/${total}, ${badName} -> ${newName}`)
    }
)