import * as CheerpX from "./cx.esm.js";
// I think this is only needed for giving the system internet access
const cloudDevice = await CheerpX.CloudDevice.create(
    "wss://disks.webvm.io/debian_large_20230522_5044875331.ext2"
)
console.debug(`cloudDevice is:`,cloudDevice)
// Read-write local storage for disk blocks, it is used both as a cache and as persisteny writable storage
const idbDevice = await CheerpX.IDBDevice.create("block1")
// A device to overlay the local changes to the disk with the remote read-only image
const overlayDevice = await CheerpX.OverlayDevice.create(
    cloudDevice,
    idbDevice
)

// Direct acces to files in your HTTP server
const webDevice = await CheerpX.WebDevice.create("")
// Convenient access to JavaScript binary data and strings
const dataDevice = await CheerpX.DataDevice.create()
const filesDevice = await CheerpX.IDBDevice.create("files")
window.filesDevice  =   filesDevice
const cx = await CheerpX.Linux.create({
    mounts: [
        {type: "ext2", path: "/", dev: overlayDevice},
        {type: "dir", path: "/app", dev: webDevice},
        // {type: "dir", path: "/data", dev: dataDevice},
        {type: "dir", path: "/data", dev: filesDevice},
        {type: "devs", path: "/dev"},
    ],
})

cx.setConsole(document.getElementById("console"))
await cx.run("/bin/bash", ["--login"], {
    env: [
        "HOME=/home/user",
        "USER=user",
        "SHELL=/bin/bash",
        "EDITOR=vim",
        "LANG=en_US.UTF-8",
        "LC_ALL=C",
    ],
    cwd: "/home/user",
    uid: 1000,
    gid: 1000,
})

// TODO: how to install stuff and create a image

// 
// helpers
// 
    async function readDataFile(path) {
        if (path.startsWith("/data/")) {
            path = path.slice(("/data").length)
        }
        const outputBlob = await filesDevice.readFileAsBlob(path)
        return new Response(blob).arrayBuffer().then(buffer=>new Uint8Array(buffer)) 
    }
    
    function readDataTextFile(path) {
        return readDataFile(path).then(each=>new TextDecoder().decode(each))
    }