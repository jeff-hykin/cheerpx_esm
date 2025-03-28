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
    for (const [key, value] of Object.entries(nameMapping)) {
        // ensure all are actually unique
        nameMapping[key] = `${value}_${Math.random().toString().substr(2, 9)}`
    }
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
        console.log(`Processing: ${((index/decentants.length)*100).toFixed(0)}% ${index++}/${decentants.length}`)
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
    a0: "handleMessage",
    a1: "cleanupResources",
    vD: "initializeEnvironment",
    ek: "calculateBufferIndex",
    vE: "returnZero",
    uw: "returnZero",
    uv: "emptyFunction",
    uu: "initializeDataStructure",
    ut: "emptyFunction",
    uq: "processArrayData",

    // Basic utility functions
    vE: 'returnZero',
    uw: 'returnZeroValue',
    
    // Empty/placeholder functions
    uv: 'emptyFunctionWithMultipleArgs',
    ut: 'emptyFunctionWithSevenParams',
    uh: 'emptyHandlerA',
    ug: 'emptyHandlerB',
    tX: 'emptyCallback',
    bx: 'emptyCleanupFunction',
    vp: 'emptyParameterHandler',
    tD: 'emptyParameterProcessorA',
    tC: 'emptyParameterProcessorB',
    sD: 'emptySignalHandler',
    
    // Data processing functions
    uu: 'initializeDataStructure',
    uq: 'processArrayData',
    up: 'cleanupArrayData',
    eg: 'setupEnvironmentAndCallback',
    ul: 'processEnvironmentCallback',
    uk: 'cleanupEnvironmentCallback',
    uf: 'initializeCallbackContext',
    uc: 'emptyCallbackHandlerA',
    ub: 'emptyCallbackHandlerB',
    uo: 'allocateBufferAndInitialize',
    ua: 'handleHttpRequest',
    
    // HTTP related functions
    t9: 'processHttpResponse',
    t8: 'cleanupHttpRequest',
    tY: 'completeAsyncRequest',
    tV: 'handleOnloadEvent',
    tP: 'emptyProcessorA',
    tO: 'emptyProcessorB',
    tN: 'initializeBuffer',
    tM: 'fetchResourceData',
    tJ: 'processResourceData',
    tI: 'cleanupResourceData',
    h5: 'handleMessageEvent',
    h1: 'processWebSocketMessage',
    
    // File system functions
    tB: 'initializeFileBuffer',
    vl: 'loadFileContents',
    t7: 'processFileContents',
    t6: 'cleanupFileRequest',
    t3: 'emptyBufferProcessor',
    t2: 'emptyBufferCleanup',
    
    // WebSocket related
    vB: 'checkConnectionStatus',
    vA: 'initializeWebSocketConnection',
    vx: 'processSocketData',
    vw: 'cleanupSocketConnection',
    uZ: 'processOverlayData',
    uY: 'cleanupOverlayData',
    
    // Process functions
    aB: 'openFileWithCallback',
    aX: 'writeFileWithCallback',
    by: 'finalizeFileOperation',
    bv: 'handleFileClosureCallback',
    vq: 'processWriteOperation',
    iu: 'handleIOCallback',
    sE: 'processOpenResult',
    sB: 'handleOpenFileCallback',
    sw: 'processReadResult',
    sv: 'cleanupReadOperation',
    bq: 'readFileWithCallback',
    ss: 'processReadFileResult',
    sr: 'cleanupReadFileResult',
    sn: 'processStatResult',
    sm: 'cleanupStatOperation',
    sj: 'processStatData',
    si: 'cleanupStatData',
    sg: 'handleStatCallback',
    
    // CheerpX related functions
    CZ: 'deleteProcess',
    CY: 'createEnvironment',
    CX: 'cleanupObject',
    CW: 'createProcessWithArgs',
    CV: 'terminateService',
    CU: 'createSyncObject',
    CT: 'cleanupResourceA',
    CR: 'cleanupResourceB',
    CQ: 'createAsyncProcess',
    CP: 'cleanupServiceA',
    CO: 'createServiceHandler',
    CN: 'cleanupServiceB',
    CM: 'initializeService',
    CL: 'createHandlerWithCallback',
    CK: 'initializePrototypes',
    
    // System functions
    Dj: 'createSystemProcess',
    Di: 'cleanupSystemResource',
    Dh: 'createDeviceHandler',
    Dg: 'cleanupDeviceResource',
    Df: 'readFileContent',
    De: 'writeFileContent',
    Dd: 'mountFilesystem',
    Dc: 'createBlob',
    Db: 'cleanupBlob',
    Da: 'setSignalHandlers',
    
    // HTTP/Network related functions
    rO: 'initializeWebDevice',
    rN: 'cleanupWebDevice',
    hz: 'createWebFolder',
    uX: 'setupWebDeviceFolder',
    uW: 'cleanupWebDeviceFolder',
    uV: 'checkAvailability',
    av: 'applyBufferChanges',
    uU: 'downloadFileContent',
    uR: 'processDownloadOperation',
    uQ: 'cleanupDownloadOperation',
    uN: 'setupBlobData',
    uM: 'cleanupBlobData',
    uK: 'handleFileBlob',
    uB: 'initializeIDBDevice',
    uy: 'setupIDBDeviceFolder',
    ux: 'cleanupIDBDevice',
    qS: 'cleanupOperationWithCallback',
    qR: 'cleanupOperation'
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
