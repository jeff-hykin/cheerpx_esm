#!/usr/bin/env -S deno run --allow-all

/**
 * Renames variables in a JavaScript/TypeScript file using ts-morph
 *
 * @param {string} filePath - Path to the file to modify
 * @param {Object} nameMapping - Object mapping from old variable names to new names
 * @returns {Promise<void>}
 */
import { Project } from "npm:ts-morph"

export async function renameVariables(filePath, nameMapping) {
    // Create a new ts-morph Project
    const project = new Project({
        compilerOptions: {
            allowJs: true, // Allow JavaScript files
        },
    })

    // Add the source file to the project
    const sourceFile = project.addSourceFileAtPath(filePath)

    // Process each variable declaration in the file
    const decentants = [...sourceFile.getDescendants()]
    let index = 0
    for (let node of decentants) {
        console.log(`Processing: ${index++}/${decentants.length}\r`)
        const kind = node.getKindName()
        switch (kind) {
            case "VariableDeclaration":
                var name = node.getName()
                if (typeof nameMapping[name] === "string") {
                    node.rename(nameMapping[name])
                }
                break;
            case "FunctionDeclaration":
                var name = node.getName()
                if (typeof nameMapping[name] === "string") {
                    node.rename(nameMapping[name])
                }
                break;
            // case "Identifier":
            //     // Skip property accesses to avoid renaming object properties
            //     var parent = node.getParent()
            //     if (parent && parent.getKind() === parent.getKindName().indexOf("PropertyAccessExpression") >= 0 && parent.getName() === name) {
            //         return
            //     }

            //     if (typeof nameMapping[name] === "string") {
            //         node.replaceWithText(nameMapping[name])
            //     }
            //     break;
        
            default:
                break;
        }
    }

    // Save the changes to the file
    await sourceFile.save()

    console.log(`Successfully renamed variables in ${filePath}`)
}

// Define the mapping of old names to new names
const nameMapping = {
    Dk: "multiply",
    oSlot: "objectSlot",
    nullArray: "emptyArray",
    nullObj: "emptyObject",
    a0: "handleMessage",
    a1: "cleanupResources",
    vD: "initializeEnvironment",
    ek: "calculateBufferIndex",
    // Add more mappings as needed
}

// Run the renaming function
renameVariables("./main/cx.esm.js", nameMapping)
    .then((stats) => {
        console.log("Renaming statistics:", stats)
    })
    .catch((error) => {
        console.error("Error during renaming:", error)
    })
