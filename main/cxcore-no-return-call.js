"use strict"
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var a62 = Math.imul
var a63 = Math.fround
var oSlot = 0
var nullArray = [null]
var nullObj = { d: nullArray, o: 0 }
function a7r(p) {
    var b = null
    if (typeof self === "object") b = fetch(p).then((r) => r.arrayBuffer())
    else if (typeof require === "function") {
        p = require("path").join(__dirname, p)
        b = new Promise((y, n) => {
            require("fs").readFile(p, (e, d) => {
                if (e) n(e)
                else y(d)
            })
        })
    } else
        b = new Promise((y, n) => {
            y(read(p, "binary"))
        })
    return b
}
var a7k = 2097152 | 0
function aZD() {
    var g = 0,
        e = 0,
        c = 0,
        a = 0
    a = HEAP32[815258] | 0
    g = HEAP8[(33 + (HEAP32[(16 + a) >> 2] | 0)) >> 0] | 0
    e = HEAP32[(12 + a) >> 2] | 0
    aR6(e | 0)
    rw(HEAP32[(16 + a) >> 2] | 0, e | 0, HEAP32[(36 + e) >> 2] | 0)
    a = HEAP32[(HEAP32[(472 + e) >> 2] | 0) >> 2] | 0
    c = HEAP32[(36 + e) >> 2] | 0
    if ((g & 255) === 16) au6(e | 0, a, c)
    else MG(e | 0, a, c)
    aR5(e | 0)
}
function qS() {
    var e = 0,
        a = 0,
        c = null
    a = 3185160
    HEAP8[(27 + a) >> 0] = 0
    if ((HEAP8[(24 + a) >> 0] & 255) !== 0) HEAP8[(26 + a) >> 0] = 1
    else {
        a = HEAP32[797837] | 0
        if ((a | 0) !== 0) {
            clearTimeout(+(a >>> 0))
            HEAP32[797837] = 0
        }
        a = uP() | 0
        c = aZD
        try {
            c()
        } catch (e) {
            if (e != "CheerpJContinue") debugger
        }
        uO(a)
        a = HEAP32[815258] | 0
        e = HEAP32[(592 + (HEAP32[(12 + a) >> 2] | 0)) >> 2] | 0
        if ((e | 0) !== 0) {
            if ((e | 0) === 1) {
                a = HEAP32[(28 + a) >> 2] | 0
                if ((a | 0) > -1) {
                    c = aR3
                    HEAP32[797837] = ~~+setTimeout(c, +(a | 0))
                }
            } else debugger
        } else fZ()
    }
}
function aR3() {
    var a = 0
    HEAP32[797837] = 0
    a = HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0
    if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
    qS()
}
function aR0(u, t, s, q) {
    var n = 0,
        o = 0,
        a = 0,
        e = 0,
        m = null,
        c = 0,
        k = 0,
        i = 0,
        g = 0
    a = K(32) | 0
    Wa(a)
    HEAP32[815258] = a
    a = HEAP32[a >> 2] | 0
    uN(a, 0, 655360, 1) | 0
    e = uN(a, 786432, ((t << 20) - 786432) | 0, 1) | 0
    m = HEAP8
    n = HEAP32[e >> 2] | 0
    e = (1048576 + (-s.length | 0)) | 0
    c = s.length
    if ((c | 0) !== 0) {
        o = c & 7
        if ((o | 0) !== 0) {
            i = e
            g = 0
            k = 0
            while (1) {
                m[(n + i) | 0] = s[(0 + k) | 0] | 0
                g = (g + 1) | 0
                i = (i + 1) | 0
                k = (k + 1) | 0
                if ((g | 0) !== (o | 0)) continue
                break
            }
        } else {
            i = e
            k = 0
        }
        if (c >>> 0 >= 8)
            while (1) {
                m[(n + i) | 0] = s[(0 + k) | 0] | 0
                m[(((n + i) | 0) + 1) | 0] = s[(((0 + k) | 0) + 1) | 0] | 0
                m[(((n + i) | 0) + 2) | 0] = s[(((0 + k) | 0) + 2) | 0] | 0
                m[(((n + i) | 0) + 3) | 0] = s[(((0 + k) | 0) + 3) | 0] | 0
                m[(((n + i) | 0) + 4) | 0] = s[(((0 + k) | 0) + 4) | 0] | 0
                m[(((n + i) | 0) + 5) | 0] = s[(((0 + k) | 0) + 5) | 0] | 0
                m[(((n + i) | 0) + 6) | 0] = s[(((0 + k) | 0) + 6) | 0] | 0
                m[(((n + i) | 0) + 7) | 0] = s[(((0 + k) | 0) + 7) | 0] | 0
                i = (i + 8) | 0
                if (m !== m || ((((n + e) | 0) + c) | 0) !== ((n + i) | 0)) {
                    k = (k + 8) | 0
                    continue
                }
                break
            }
    }
    e = K(28) | 0
    Vi(e)
    aRX(a, e | 0)
    a = uN(a, -131072, 131072, 0) | 0
    m = HEAP8
    i = HEAP32[a >> 2] | 0
    a = HEAP32[(8 + a) >> 2] | 0
    c = 0
    e = 0
    while (1) {
        m[(((i + a) | 0) + c) | 0] = s[(0 + e) | 0] | 0
        m[(((i + a) | 0) + ((c + 1) | 0)) | 0] = s[(((0 + e) | 0) + 1) | 0] | 0
        m[(((i + a) | 0) + ((c + 2) | 0)) | 0] = s[(((0 + e) | 0) + 2) | 0] | 0
        g = (c + 3) | 0
        if ((g | 0) === 131071) {
            a = v8((q.length + 4095) & -4096) | 0
            HEAP32[(24 + (HEAP32[815258] | 0)) >> 2] = a
            m = HEAP8
            k = HEAP32[(4 + a) >> 2] | 0
            a = q.length
            if ((a | 0) !== 0) {
                i = a & 7
                if ((i | 0) !== 0) {
                    e = 0
                    c = 0
                    g = 0
                    while (1) {
                        m[(k + c) | 0] = q[(0 + g) | 0] | 0
                        e = (e + 1) | 0
                        c = (c + 1) | 0
                        g = (g + 1) | 0
                        if ((e | 0) !== (i | 0)) continue
                        break
                    }
                } else {
                    c = 0
                    g = 0
                }
                if (a >>> 0 >= 8)
                    while (1) {
                        m[(k + c) | 0] = q[(0 + g) | 0] | 0
                        m[(((k + c) | 0) + 1) | 0] = q[(((0 + g) | 0) + 1) | 0] | 0
                        m[(((k + c) | 0) + 2) | 0] = q[(((0 + g) | 0) + 2) | 0] | 0
                        m[(((k + c) | 0) + 3) | 0] = q[(((0 + g) | 0) + 3) | 0] | 0
                        m[(((k + c) | 0) + 4) | 0] = q[(((0 + g) | 0) + 4) | 0] | 0
                        m[(((k + c) | 0) + 5) | 0] = q[(((0 + g) | 0) + 5) | 0] | 0
                        m[(((k + c) | 0) + 6) | 0] = q[(((0 + g) | 0) + 6) | 0] | 0
                        m[(((k + c) | 0) + 7) | 0] = q[(((0 + g) | 0) + 7) | 0] | 0
                        c = (c + 8) | 0
                        if (m !== m || ((k + a) | 0) !== ((k + c) | 0)) {
                            g = (g + 8) | 0
                            continue
                        }
                        break
                    }
            }
            a = v8(262144) | 0
            HEAP32[(20 + (HEAP32[815258] | 0)) >> 2] = a
            a = K(1536) | 0
            e = HEAP32[815258] | 0
            Wx(a, HEAP32[(12 + e) >> 2] | 0, HEAP32[e >> 2] | 0, u, t, +HEAPF64[398492])
            HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] = a
            WD()
            QL()
            MC()
            RI()
            a = HEAP32[815258] | 0
            Vv((208 + (HEAP32[(16 + a) >> 2] | 0)) | 0, HEAP32[(24 + a) >> 2] | 0)
            a = HEAP32[815258] | 0
            aRV((208 + (HEAP32[(16 + a) >> 2] | 0)) | 0, HEAP32[(20 + a) >> 2] | 0)
            e = HEAP32[(20 + a) >> 2] | 0
            m = HEAP8
            c = HEAP32[(4 + e) >> 2] | 0
            e = c
            m = { type: 3, vgaRamOffset: e, vgaDevice: (352 + (HEAP32[(16 + a) >> 2] | 0)) | 0 | 0 }
            postMessage(m)
            return
        }
        m[(((i + a) | 0) + g) | 0] = s[(((0 + e) | 0) + 3) | 0] | 0
        e = (e + 4) | 0
        c = (c + 4) | 0
        continue
    }
}
function aRU() {
    var c = null,
        e = null,
        a = 0
    a = HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0
    HEAP16[(42 + a) >> 1] = 61440
    HEAP32[(56 + a) >> 2] = -65536
    HEAP32[(36 + a) >> 2] = 65520
    HEAP32[(76 + a) >> 2] = 65535
    c = new MessageChannel()
    e = qS
    c.port2.onmessage = e
    gA = c.port1
    a = HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0
    if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
    qS()
}
function aRT(c) {
    var a = 0
    a = 3185160
    if ((HEAP32[a >> 2] | 0) === -2) HEAP32[a >> 2] = 0
    a: {
        if ((HEAP8[(24 + a) >> 0] & 255) !== 0) {
            HEAP8[(24 + a) >> 0] = 0
            if ((HEAP8[(26 + a) >> 0] & 255) !== 0) {
                HEAP8[(26 + a) >> 0] = 0
                uM(c.data)
                EC()
                break a
            }
        }
        uM(c.data)
    }
}
function uM(t) {
    var x = null,
        F = 0,
        A = null,
        q = null,
        u = -0,
        g = null,
        a = 0,
        c = 0,
        e = 0,
        i = 0,
        k = 0,
        o = 0,
        n = 0,
        s = 0,
        m = null
    x = dX()
    g = (-264 + x) | 0
    bc(g)
    a: switch (t.type | 0) {
        case 8:
            a = t.mhz
            c = t.mem
            g = t.bios
            aR0(a, c, g, t.vgaBios)
            break a
        case 2:
            aRU()
            break a
        case 7:
            a = HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0
            km(a, 0, t.value)
            a = HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0
            if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
            qS()
            break a
        case 9:
            if ((t.diskType | 0) !== 0) {
                if ((t.diskType | 0) === 1) {
                    a = t.index
                    c = HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0
                    e = t.devId
                    i = t.len
                    a = ((a62(a, 12) | 0) + 1452 + c) | 0
                    HEAP32[a >> 2] = e
                    HEAP32[(4 + a) >> 2] = i >>> 9
                    HEAP8[(8 + a) >> 0] = 1
                    break a
                }
                debugger
                break a
            }
            a = t.index
            c = HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0
            e = t.devId
            i = t.len
            a = ((a62(a, 12) | 0) + 1452 + c) | 0
            HEAP32[a >> 2] = e
            HEAP32[(4 + a) >> 2] = i >>> 9
            HEAP8[(8 + a) >> 0] = 0
            break a
        case 41:
            a = t.index
            Wc(HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0, a, Vg(t.len) | 0)
            break a
        case 45:
            a = t.index
            t.len
            c = HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0
            e = t.devId
            i = t.writeProtected
            a = ((a62(a, 12) | 0) + 144 + c) | 0
            HEAP32[(8 + a) >> 2] = e
            HEAP8[(7 + a) >> 0] = (i | 0) !== 0 ? 1 : 0
            break a
        case 13:
            aIC(i_() | 0 | 0)
            break a
        case 20:
            a = t.tid
            c = t.fd
            e = t.devId
            i = t.inodeId
            k = t.permType
            o = t.len
            n = t.lastModified
            s = t.uid
            abs(a, c, e, i, k, o, n, s, t.gid)
            break a
        case 71:
            a = t.tid
            g = t.value
            c = t.devId
            e = t.inodeId
            i = t.permType
            k = t.len
            o = t.lastModified
            n = t.uid
            aby(a, g, c, e, i, k, o, n, t.gid)
            break a
        case 16:
            abt(t.value)
            break a
        case 18:
            a = t.tid
            g = t.path
            c = t.devId
            e = t.parentInodeId
            i = t.inodeId
            k = t.permType
            o = t.fileSize
            n = t.lastModified
            s = t.promoteReadToExec
            m = t.value
            F = t.uid
            abI(a, g, c, e, i, k, o, n, (s | 0) !== 0 ? 1 : 0, m, F, t.gid)
            break a
        case 85:
            a = t.tid
            c = t.devId
            abx(a, c, t.permType)
            break a
        case 69:
            a = t.tid
            c = t.devId
            e = t.inodeId
            abw(a, c, e, t.files)
            break a
        case 24:
            abJ(t.tid)
            break a
        case 62:
            a = t.tid
            abO(a, t.value)
            break a
        case 60:
            abK(t.tid)
            break a
        case 59:
            a = (248 + g) | 0
            uJ(a)
            c = (232 + g) | 0
            hz(c, t.path)
            qK(a, c)
            f9(c)
            if ((t.args.length | 0) !== 0) {
                c = (216 + g) | 0
                e = 0
                while (1) {
                    hz(c, t.args[+(e >>> 0)])
                    qK(a, c)
                    f9(c)
                    e = (e + 1) | 0
                    if (e >>> 0 < t.args.length >>> 0) continue
                    break
                }
            }
            c = (200 + g) | 0
            uJ(c)
            if ((t.env.length | 0) !== 0) {
                e = (184 + g) | 0
                i = 0
                while (1) {
                    m = t.env[+(i >>> 0)]
                    hz(e, m)
                    qK(c, e)
                    f9(e)
                    i = (i + 1) | 0
                    if (i >>> 0 < t.env.length >>> 0) continue
                    break
                }
            }
            e = (120 + g) | 0
            b: {
                if (t.handlers.length >>> 0 < 64) {
                    i = t.handlers.length
                    if ((i | 0) === 0) break b
                } else {
                    i = 64
                }
                k = 0
                while (1) {
                    m = t.handlers
                    HEAP8[(k + e) >> 0] = m[(0 + k) | 0] | 0
                    k = (k + 1) | 0
                    if ((k | 0) !== (i | 0)) continue
                    break
                }
            }
            i = (104 + g) | 0
            uF(i)
            if (t.cwd !== null) {
                k = (88 + g) | 0
                hz(k, t.cwd)
                uq(i, k) | 0
                f9(k)
            }
            k = t.tid
            o = t.index
            n = t.uid
            abN(a, c, k, o, e, i, n, t.gid)
            f9(i)
            ny(c)
            ny(a)
            break a
        case 27:
            a = i_() | 0
            c = t.ctxType
            aIy(a, c, t.value)
            break a
        case 28:
            a = i_() | 0
            c = t.ctxType
            if (!(aIx(a, c, t.value) | 0)) break a
            fZ()
            break a
        case 30:
            a = i_() | 0
            c = t.ctxType
            a = nC(a, c, t.value) | 0
            if ((a | 0) == (0 | 0)) break a
            i_() | 0
            a = HEAP32[(HEAP32[(472 + a) >> 2] | 0) >> 2] | 0
            g = { type: 32, text: RN(a, t.addr, 16) }
            postMessage(g)
            break a
        case 31:
            a = i_() | 0
            c = t.ctxType
            a = nC(a, c, t.value) | 0
            if ((a | 0) == (0 | 0)) break a
            i_() | 0
            a = HEAP32[(HEAP32[(472 + a) >> 2] | 0) >> 2] | 0
            g = { type: 32, text: RN(a, t.addr, 32) }
            postMessage(g)
            break a
        case 51:
            a = i_() | 0
            c = t.ctxType
            a = nC(a, c, t.value) | 0
            if ((a | 0) == (0 | 0)) break a
            a = HEAP32[(HEAP32[(472 + a) >> 2] | 0) >> 2] | 0
            a = uo((8 + a) | 0, t.addr) | 0
            if ((a | 0) == (0 | 0)) break a
            aGC(a)
            break a
        case 44:
            console.log("JIT bisecting not available")
            break a
        case 78:
            console.log("JIT bisecting not available")
            break a
        case 33:
            a = (72 + g) | 0
            du(a, 2119868 | 0)
            c = ur(0, a) | 0
            f9(a)
            HEAP32[(32 + c) >> 2] = 2
            g = { type: 34, tid: -1, value: HEAP32[(436 + (HEAP32[(12 + c) >> 2] | 0)) >> 2] | 0 }
            postMessage(g)
            break a
        case 35:
            c = t.tid
            e = HEAP32[814992] | 0
            while (1) {
                a = HEAP32[(12 + e) >> 2] | 0
                if ((a | 0) != (0 | 0))
                    while (1) {
                        if ((HEAP32[(436 + a) >> 2] | 0) === (c | 0)) {
                            c = HEAP32[(472 + a) >> 2] | 0
                            e = t.arg0
                            i = t.arg1
                            c = jv(c | 0, e, i, t.arg2) | 0
                            g = dX()
                            m = (-8 + g) | 0
                            bc(m)
                            HEAP32[m >> 2] = c
                            aI(a, 2119504 | 0)
                            bc(g)
                            g = { type: 34, tid: t.tid, value: c }
                            postMessage(g)
                            break a
                        }
                        a = HEAP32[(488 + a) >> 2] | 0
                        if ((a | 0) != (0 | 0)) continue
                        break
                    }
                e = HEAP32[(92 + e) >> 2] | 0
                continue
            }
        case 36:
            e = t.tid
            c = HEAP32[814992] | 0
            b: if ((c | 0) != (0 | 0)) {
                while (1) {
                    a = HEAP32[(12 + c) >> 2] | 0
                    if ((a | 0) != (0 | 0))
                        while (1) {
                            if ((HEAP32[(436 + a) >> 2] | 0) === (e | 0)) break b
                            a = HEAP32[(488 + a) >> 2] | 0
                            if ((a | 0) != (0 | 0)) continue
                            break
                        }
                    c = HEAP32[(92 + c) >> 2] | 0
                    if ((c | 0) != (0 | 0)) continue
                    break
                }
                a = 0 | 0
            } else {
                a = 0 | 0
            }
            m = t.arg1
            c = (64 + g) | 0
            un(c, m.length)
            e = Q6(c) | 0
            i = m.length
            A = (i + e) | 0
            if ((i | 0) !== 0) {
                k = i & 7
                if ((k | 0) !== 0) {
                    s = 0
                    n = 0
                    o = 0
                    while (1) {
                        HEAP8[(n + e) >> 0] = m[(0 + o) | 0] | 0
                        s = (s + 1) | 0
                        n = (n + 1) | 0
                        o = (o + 1) | 0
                        if ((s | 0) !== (k | 0)) continue
                        break
                    }
                } else {
                    n = 0
                    o = 0
                }
                if (i >>> 0 >= 8)
                    while (1) {
                        q = (n + e) | 0
                        HEAP8[q >> 0] = m[(0 + o) | 0] | 0
                        HEAP8[(1 + q) >> 0] = m[(((0 + o) | 0) + 1) | 0] | 0
                        HEAP8[(2 + q) >> 0] = m[(((0 + o) | 0) + 2) | 0] | 0
                        HEAP8[(3 + q) >> 0] = m[(((0 + o) | 0) + 3) | 0] | 0
                        HEAP8[(4 + q) >> 0] = m[(((0 + o) | 0) + 4) | 0] | 0
                        HEAP8[(5 + q) >> 0] = m[(((0 + o) | 0) + 5) | 0] | 0
                        HEAP8[(6 + q) >> 0] = m[(((0 + o) | 0) + 6) | 0] | 0
                        HEAP8[(7 + q) >> 0] = m[(((0 + o) | 0) + 7) | 0] | 0
                        n = (n + 8) | 0
                        if ((A | 0) != ((n + e) | 0)) {
                            o = (o + 8) | 0
                            continue
                        }
                        break
                    }
            }
            e = t.arg0
            i = (56 + g) | 0
            aHw(i, c)
            abp(a, e, i)
            qt(i)
            qt(c)
            break a
        case 37:
            c = t.tid
            e = HEAP32[814992] | 0
            while (1) {
                a = HEAP32[(12 + e) >> 2] | 0
                if ((a | 0) != (0 | 0))
                    while (1) {
                        if ((HEAP32[(436 + a) >> 2] | 0) === (c | 0)) {
                            c = HEAP32[(472 + a) >> 2] | 0
                            e = HEAP32[(Rz(c | 0, t.value) | 0) >> 2] | 0
                            t.arg1
                            if ((aHv(e) | 0 | 0) !== 0) {
                                a = rC(a, e | 0) | 0
                                e = (48 + g) | 0
                                aRK(e, aRL(a | 0) | 0 | 0)
                                a = dW(c | 0, e, 0) | 0
                                g = { type: 34, tid: t.tid, value: a }
                                postMessage(g)
                                fZ()
                                break a
                            }
                            aa3(a, t)
                            fB((548 + a) | 0, e)
                            break a
                        }
                        a = HEAP32[(488 + a) >> 2] | 0
                        if ((a | 0) != (0 | 0)) continue
                        break
                    }
                e = HEAP32[(92 + e) >> 2] | 0
                continue
            }
        case 52:
            a = t.tid
            c = HEAP32[814992] | 0
            while (1) {
                e = HEAP32[(12 + c) >> 2] | 0
                if ((e | 0) != (0 | 0))
                    while (1) {
                        if ((HEAP32[(436 + e) >> 2] | 0) === (a | 0)) {
                            a = HEAP32[(472 + e) >> 2] | 0
                            g = fj
                            a = HEAP32[(88 + (HEAP32[(Rz(a | 0, t.value) | 0) >> 2] | 0)) >> 2] | 0
                            g = g[(0 + a) | 0].port2
                            m = { type: 34, tid: t.tid, value: g }
                            postMessage(m, new Array(g))
                            break a
                        }
                        e = HEAP32[(488 + e) >> 2] | 0
                        if ((e | 0) != (0 | 0)) continue
                        break
                    }
                c = HEAP32[(92 + c) >> 2] | 0
                continue
            }
        case 84:
            a = t.tid
            c = HEAP32[814992] | 0
            while (1) {
                e = HEAP32[(12 + c) >> 2] | 0
                if ((e | 0) != (0 | 0))
                    while (1) {
                        if ((HEAP32[(436 + e) >> 2] | 0) === (a | 0)) {
                            a = HEAP32[(472 + e) >> 2] | 0
                            c = t.arg0
                            a = ((c << 3) + (HEAP32[(52 + a) >> 2] | 0)) | 0
                            aRJ(HEAP32[a >> 2] | 0)
                            aRI(a)
                            break a
                        }
                        e = HEAP32[(488 + e) >> 2] | 0
                        if ((e | 0) != (0 | 0)) continue
                        break
                    }
                c = HEAP32[(92 + c) >> 2] | 0
                continue
            }
        case 48:
            aHc(t.wasmModule)
            break a
        case 39:
            aGc(t.wasmModule)
            break a
        case 49:
            console.profile("CX")
            break a
        case 50:
            console.profileEnd("CX")
            debugger
            break a
        case 56:
            a = hf(t.arg1) | 0
            EB(a | 0, t.value)
            fZ()
            break a
        case 38:
            HEAP32[529851] = t.value
            break a
        case 87:
            a = t.columns
            c = t.rows
            e = 2104448
            HEAP16[(2 + e) >> 1] = a
            HEAP16[e >> 1] = c
            break a
        case 95:
            a = t.width
            alK(a, t.height)
            break a
        case 76:
            a = t.value
            c = t.button
            e = t.x
            i = t.y
            abR(a, c, e, i, +t.timeStamp)
            break a
        case 94:
            a = t.value
            c = t.keyCode
            abS(a, c, +t.timeStamp)
            break a
        case 43:
            g = new MessageChannel()
            m = EC
            g.port2.onmessage = m
            gA = g.port1
            aa6()
            u = +performance.timeOrigin
            a = ~~(u / 1000)
            HEAP32[815257] = a
            HEAP32[815256] = ~~((u - +(a >>> 0) * 1000) * 1000)
            aa5(~~+new Date().getTimezoneOffset())
            QL()
            MC()
            g = { type: 34, tid: t.tid, value: 0 }
            postMessage(g)
            break a
        case 15:
            a = t.tid
            c = (32 + g) | 0
            hz(c, t.mountType)
            e = (16 + g) | 0
            hz(e, t.path)
            abg(a, c, e, t.devId)
            f9(e)
            f9(c)
            break a
        case 81:
            a = t.devId
            abh(a, t.len)
            g = { type: 34, tid: t.tid, value: 0 }
            postMessage(g)
            break a
        case 83:
            a = t.localPort
            abd(t.tid, a)
            break a
        case 86:
            g = aHi
            t.value.onmessage = g
            break a
        case 88:
            e = t.tid
            c = HEAP32[814992] | 0
            b: if ((c | 0) != (0 | 0)) {
                while (1) {
                    a = HEAP32[(12 + c) >> 2] | 0
                    if ((a | 0) != (0 | 0))
                        while (1) {
                            if ((HEAP32[(436 + a) >> 2] | 0) === (e | 0)) break b
                            a = HEAP32[(488 + a) >> 2] | 0
                            if ((a | 0) != (0 | 0)) continue
                            break
                        }
                    c = HEAP32[(92 + c) >> 2] | 0
                    if ((c | 0) != (0 | 0)) continue
                    break
                }
                a = 0 | 0
            } else {
                a = 0 | 0
            }
            HEAP32[a >> 2] = t.arg0
            if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
            fZ()
            break a
        case 92:
            a = HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0
            Ve((76 + a) | 0, t.value)
            fZ()
            break a
        case 93:
            a = HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0
            Vd((76 + a) | 0, t.value)
            fZ()
            break a
        case 12:
            aai(t.ioTransaction | 0)
            break a
        case 57:
            a = t.eventType
            HEAP32[815331] = HEAP32[815331] | (1 << a)
            break a
        case 80:
            a = t.eventType
            HEAP32[815331] = HEAP32[815331] & ((1 << a) ^ -1)
            break a
        case 96:
            a = t.tid
            c = t.devId
            e = g | 0
            hz(e, t.path)
            aba(a, c, e)
            f9(e)
            break a
        default:
            debugger
    }
    bc(x)
}
function c5(a, b) {
    var g = 0,
        k = 0,
        c = null,
        i = 0,
        e = 0
    c = String()
    i = 0
    while (1) {
        g = a[(b + i) | 0] | 0
        if ((g & 255) !== 0) {
            k = g & 255
            if (g << 24 > -16777216) {
                e = k
            } else if ((g & 255) < 192) {
                e = ((k & 63) + (e << 6)) | 0
            } else if ((g & 255) < 224) {
                e = k & 31
            } else if ((g & 255) < 240) {
                e = k & 15
            } else {
                e = k & 7
            }
            i = (i + 1) | 0
            a: {
                if ((i | 0) !== -1) if ((a[(b + i) | 0] & 192) === 128) break a
                if (e >>> 0 < 65536) c = c.concat(String.fromCharCode(e))
                else {
                    c = c.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                    c = c.concat(String.fromCharCode((e & 1023) | 56320))
                }
            }
            if ((i | 0) !== -1) continue
            return c
        }
        break
    }
    return c
}
function aHi() {
    fZ()
}
function aHg() {
    var c = null,
        a = null
    RI()
    a = "message"
    c = aRT
    addEventListener(a, c)
    HEAPF64[398492] = +performance.timeOrigin
    a = HEAP8
    a = a.buffer
    a = { type: 0, buffer: a, asyncPtrOffset: 3185160 | 0 | 0, startRealTime: +HEAPF64[398492] }
    postMessage(a)
}
function QU(a) {
    var c = null
    c = l2
    uM(c[(0 + a) | 0])
    c = l2
    c[(0 + a) | 0] = null
}
function aHc(c) {
    var k = null,
        i = 0,
        g = null,
        e = 0,
        a = 0
    a = 3185160
    HEAP8[(25 + a) >> 0] = 0
    HEAP32[(20 + a) >> 2] = 1
    aHb()
    QR(c, HEAP32[797836] | 0)
    QQ(HEAP32[797836] | 0)
    HEAP32[797836] = 0
    a = 3185856
    k = HEAP32
    i = (HEAP32[a >> 2] >> 2) | 0
    g = HEAP32
    e = (HEAP32[(4 + a) >> 2] >> 2) | 0
    if (k !== g || i !== e) tR(0)
}
function QR(A, F) {
    var x = null,
        J = null,
        i = null,
        s = 0,
        u = 0,
        n = null,
        g = null,
        e = 0,
        m = 0,
        q = null,
        t = null,
        c = 0,
        a = 0,
        o = 0,
        k = 0
    x = dX()
    n = (-32 + x) | 0
    bc(n)
    g = new WebAssembly.Instance(A, nQ)
    aE$(F | 0, g)
    J = __asm
    i = J.tbl
    g = g.exports.tbl
    s = HEAP32[(4 + F) >> 2] | 0
    e = (24 + F) | 0
    m = uf(e) | 0
    q = i.get(1168 | 0 | 0)
    g.set(0, i.get(d4(0) | 0))
    g.set(1, i.get(d4(1) | 0))
    g.set(2, i.get(d4(2) | 0))
    g.set(3, i.get(d4(3) | 0))
    g.set(4, i.get(d4(4) | 0))
    g.set(5, i.get(d4(5) | 0))
    g.set(6, i.get(d4(6) | 0))
    g.set(7, i.get(d4(7) | 0))
    u = (m + ((8 - s) | 0)) | 0
    if (u >>> 0 > 8) {
        m = 8
        while (1) {
            t = HEAP32
            c = ue(e, (m - 8) | 0) >> 2
            c = t[c] | 0
            if ((c | 0) != (0 | 0)) {
                c = HEAP32[(32 + c) >> 2] | 0
                if ((c | 0) > 0) t = i.get(c)
                else {
                    t = q
                }
                g.set(m, t)
            }
            m = (m + 1) | 0
            if ((m | 0) !== (u | 0)) continue
            break
        }
    }
    m = (24 + n) | 0
    c = (16 + n) | 0
    QP(c, e)
    aG9(m, c, s)
    if ((s | 0) !== 0) {
        c = 0
        while (1) {
            q = HEAP32
            e = (HEAP32[m >> 2] >> 2) | 0
            e = q[e] | 0
            if ((e | 0) != (0 | 0)) {
                a = HEAP32[(20 + e) >> 2] | 0
                HEAP32[(24 + a) >> 2] = HEAP32[(24 + a) >> 2] & -9
                q = g.get((c + u) | 0)
                l4(e, 0, 0, 0)
                a = HEAP16[(54 + e) >> 1] | 0
                if ((a & 8) !== 0) {
                    o = a & 65527
                    HEAP16[(54 + e) >> 1] = o
                    if ((HEAP32[(32 + e) >> 2] | 0) !== 0)
                        if ((a & 4) === 0) {
                            a = HEAP32[(20 + e) >> 2] | 0
                            k = HEAP32[(24 + a) >> 2] | 0
                            if (((k & 1) | 0) === 0) {
                                HEAP16[(54 + e) >> 1] = o | 4
                                HEAP32[(24 + a) >> 2] = k | 8
                                P_(e)
                            }
                        }
                } else {
                    k = HEAP32[797809] | 0
                    if ((k | 0) != (0 | 0)) {
                        a = HEAP32[k >> 2] | 0
                        o = (a + 1) | 0
                        HEAP32[k >> 2] = o
                        if ((o | 0) === (HEAP32[(4 + k) >> 2] | 0)) {
                            HEAP32[797809] = HEAP32[(8 + k) >> 2] | 0
                            Pb(HEAP8, k >> 0)
                        }
                    } else {
                        a = J.tbl.grow(1000)
                        k = K(12) | 0
                        aG7(k, (a + 1) | 0, (a + 1000) | 0)
                        HEAP32[797809] = k
                    }
                    i.set(a, q)
                    aG3(e, a, F | 0, q)
                }
                HEAP16[(16 + e) >> 1] = 270
                a = (88 + e) | 0
                aG6((84 + e) | 0, a)
                QN(a)
            }
            QM(m) | 0
            c = (c + 1) | 0
            if ((c | 0) !== (s | 0)) continue
            break
        }
    }
    c = (8 + n) | 0
    aG5(c)
    e = n | 0
    QP(e, 3185856 | 0)
    n = HEAP32
    a = (HEAP32[c >> 2] >> 2) | 0
    g = HEAP32
    k = (HEAP32[e >> 2] >> 2) | 0
    if (n !== g || a !== k)
        while (1) {
            a = n[a] | 0
            if ((a | 0) != (0 | 0)) {
                a = HEAP32[(20 + a) >> 2] | 0
                HEAP32[(24 + a) >> 2] = HEAP32[(24 + a) >> 2] | 8
            }
            QM(c) | 0
            n = HEAP32
            a = (HEAP32[c >> 2] >> 2) | 0
            if (n !== g || a !== k) continue
            break
        }
    bc(x)
}
function QL() {
    var e = null,
        c = null,
        a = 0
    e = dX()
    c = (-4360 + e) | 0
    bc(c)
    nQ = { i: { m: __asm.memory } }
    a = c | 0
    gv(a)
    aGt(a)
    f8(a)
    aGa()
    uX = __asm.tbl.get(1168 | 0 | 0)
    bc(e)
}
function aG3(q, o, n, m) {
    var k = null,
        g = null,
        c = 0,
        e = 0,
        i = 0,
        a = 0
    k = dX()
    g = (-16 + k) | 0
    bc(g)
    HEAP32[(24 + q) >> 2] = n | 0
    HEAP32[n >> 2] = ((HEAP32[n >> 2] | 0) + 1) | 0
    HEAP32[(32 + q) >> 2] = o
    c = (8 + g) | 0
    QJ(c, (28 + q) | 0)
    e = g | 0
    QI(e)
    a = HEAP32[c >> 2] | 0
    i = HEAP32[e >> 2] | 0
    if ((a | 0) != (i | 0))
        while (1) {
            PY(HEAP32[(4 + a) >> 2] | 0, q | 0, m)
            QH(c) | 0
            a = HEAP32[c >> 2] | 0
            if ((a | 0) != (i | 0)) continue
            break
        }
    bc(k)
}
function l4(i, g, e, c) {
    var s = null,
        n = null,
        m = 0,
        q = 0,
        o = null,
        a = 0,
        k = 0
    s = dX()
    n = (-16 + s) | 0
    bc(n)
    if (c) {
        o = HEAP8
        a = HEAP32[(68 + i) >> 2] | 0
        if (o !== nullArray || a !== 0) {
            HEAP16[(54 + i) >> 1] = HEAP16[(54 + i) >> 1] | 2
            aG2(i | 0)
        }
    }
    if ((HEAP32[(32 + i) >> 2] | 0) > 0) {
        o = __asm.tbl
        aG4(HEAP32[(32 + i) >> 2] | 0)
        o.set(HEAP32[(32 + i) >> 2] | 0, null)
    }
    a: {
        if (!g) {
            a = HEAP32[(32 + i) >> 2] | 0
            if ((a | 0) === -3) break a
            if ((a | 0) !== -1) {
                if ((HEAP16[(54 + i) >> 1] & 4) !== 0) {
                    HEAP32[(32 + i) >> 2] = -2
                    break a
                }
                HEAP32[(32 + i) >> 2] = 0
                break a
            }
        }
        HEAP32[(32 + i) >> 2] = -1
    }
    a = (8 + n) | 0
    QJ(a, (28 + i) | 0)
    m = n | 0
    QI(m)
    k = HEAP32[a >> 2] | 0
    q = HEAP32[m >> 2] | 0
    if ((k | 0) != (q | 0))
        while (1) {
            PY(HEAP32[(4 + k) >> 2] | 0, i | 0, uX)
            QH(a) | 0
            k = HEAP32[a >> 2] | 0
            if ((k | 0) != (q | 0)) continue
            break
        }
    if (e) {
        HEAP16[(54 + i) >> 1] = HEAP16[(54 + i) >> 1] | 8
        QN((88 + i) | 0)
    }
    a = HEAP32[(24 + i) >> 2] | 0
    if ((a | 0) != (0 | 0)) {
        QQ(a)
        HEAP32[(24 + i) >> 2] = 0
    }
    bc(s)
}
function aGH() {
    return +Date.now()
}
function aGE(i) {
    var g = null,
        a = 0,
        k = null,
        c = null,
        e = 0
    g = dX()
    c = (-8 + g) | 0
    bc(c)
    a = c | 0
    no(a, (4228 + i) | 0)
    c = HEAP8
    e = HEAP32[a >> 2] | 0
    k = c
    e = e
    c = new WebAssembly.Module(new Uint8Array(k.subarray(+(e >>> 0), +(((HEAP32[(4236 + i) >> 2] | 0) + e) >>> 0))))
    nn(a)
    QR(c, HEAP32[(4340 + i) >> 2] | 0)
    bc(g)
}
function aGD(c, d, a) {
    var g = 0,
        e = null
    g = d
    e = { type: 47, replyType: 48, start: g, len: a }
    postMessage(e)
}
function aGA(e) {
    var c = null,
        a = null
    c = dX()
    a = (-8 + c) | 0
    bc(a)
    HEAP32[a >> 2] = e
    dj(2125020 | 0)
    bc(c)
    debugger
}
function aGz(a, b) {
    var c = null
    c = "IP: "
    console.log(c.concat(c5(a, b)))
}
function P3() {
    return ~~(+__asm.memory.buffer.byteLength * 1.52587890625e-5) | 0
}
function aGo(k, i) {
    var g = null,
        m = null,
        c = null,
        a = 0,
        e = 0
    g = dX()
    c = (-8 + g) | 0
    bc(c)
    a = c | 0
    no(a, (4228 + k) | 0)
    c = HEAP8
    e = HEAP32[a >> 2] | 0
    m = c
    e = e
    c = new WebAssembly.Module(new Uint8Array(m.subarray(+(e >>> 0), +(((HEAP32[(4236 + k) >> 2] | 0) + e) >>> 0))))
    nn(a)
    a = aE5(i | 0, c) | 0
    bc(g)
    return a | 0
}
function aGn(m, k, i) {
    var g = null,
        a = 0,
        n = null,
        c = null,
        e = 0
    g = dX()
    c = (-8 + g) | 0
    bc(c)
    a = c | 0
    no(a, (4228 + m) | 0)
    c = HEAP8
    e = HEAP32[a >> 2] | 0
    n = c
    e = e
    c = new WebAssembly.Module(new Uint8Array(n.subarray(+(e >>> 0), +(((HEAP32[(4236 + m) >> 2] | 0) + e) >>> 0))))
    nn(a)
    aE4(k, c, i)
    bc(g)
}
function aGm(i, g) {
    var e = null,
        k = 0,
        c = null,
        a = 0
    e = dX()
    c = (-8 + e) | 0
    bc(c)
    a = c | 0
    no(a, (4228 + i) | 0)
    k = aGl(g | 0, a) | 0
    nn(a)
    c = HEAP8
    a = HEAP32[k >> 2] | 0
    a = a
    c = { type: 47, replyType: 39, start: a, len: HEAP32[(4236 + i) >> 2] | 0 }
    postMessage(c)
    bc(e)
}
function aGk(g, h, e) {
    var c = 0,
        i = null,
        a = null
    a = g
    c = h
    a = new Blob(new Array(new Uint8Array(a.subarray(+(c >>> 0), +((c + e) >>> 0)))))
    i = URL.createObjectURL(a)
    a = { type: 42, path: i, value: "dump.wasm" }
    postMessage(a)
}
function aGc(c) {
    var a = 0
    a = HEAP32[815330] | 0
    PX(a, c, 0, tB(a | 0) | 0)
    a = HEAP32[815330] | 0
    if ((a | 0) != (0 | 0)) {
        aGb(a)
        Pb(HEAP8, a >> 0)
    }
    HEAP32[815330] = 0
}
function aGa() {
    var n = null,
        i = 0,
        m = 0,
        k = 0,
        e = null,
        c = 0,
        g = null,
        a = 0
    n = dX()
    e = (-4400 + n) | 0
    bc(e)
    i = (40 + e) | 0
    gv(i)
    nm(i, 1, 1, 0, 1)
    m = (24 + e) | 0
    nk(m, i, 1)
    k = (8 + e) | 0
    aF$(k, i)
    aGp(i)
    bW(i)
    c = ((HEAP32[(4236 + (HEAP32[k >> 2] | 0)) >> 2] | 0) - (HEAP32[(8 + k) >> 2] | 0)) | 0
    g = HEAP8
    a = HEAP32[(4 + k) >> 2] | 0
    g[a] = c | 128
    g[(a + 1) | 0] = (c >>> 7) | 128
    g[(a + 2) | 0] = (c >>> 14) | 128
    g[(a + 3) | 0] = (c >>> 21) & 127
    c = ((HEAP32[(4236 + (HEAP32[m >> 2] | 0)) >> 2] | 0) - (HEAP32[(8 + m) >> 2] | 0)) | 0
    g = HEAP8
    a = HEAP32[(4 + m) >> 2] | 0
    g[a] = c | 128
    g[(a + 1) | 0] = (c >>> 7) | 128
    g[(a + 2) | 0] = (c >>> 14) | 128
    g[(a + 3) | 0] = (c >>> 21) & 127
    c = e | 0
    no(c, (4228 + i) | 0)
    e = HEAP8
    a = HEAP32[c >> 2] | 0
    g = e
    a = a
    e = new Uint8Array(g.subarray(+(a >>> 0), +(((HEAP32[(4236 + i) >> 2] | 0) + a) >>> 0)))
    a = WebAssembly.validate(e)
    if (a) {
        g = new WebAssembly.Module(e)
        e = new WebAssembly.Instance(g, nQ).exports.tbl
        e.set(0, e.get(0))
        if (e.get(0) !== null) HEAP8[3260508] = 1
    }
    nn(c)
    f8(i)
    bc(n)
}
function aFa(a) {
    var e = 0,
        c = null
    e = HEAP32[(20 + a) >> 2] | 0
    c = k4
    c[(0 + ((e - 1) | 0)) | 0] = null
}
function aE$(g, e) {
    var c = 0,
        a = null
    a = k4
    if (a === null) {
        a = new Array()
        k4 = a
        a = a
    }
    c = a.indexOf(null)
    a = k4
    if ((c | 0) > -1) {
        a[(0 + c) | 0] = e
        HEAP32[(20 + g) >> 2] = (c + 1) | 0
        return
    }
    ;+a.push(e)
    HEAP32[(20 + g) >> 2] = k4.length
}
function PY(i, g, e) {
    var m = 0,
        n = 0,
        c = 0,
        a = 0,
        k = null
    c = (24 + i) | 0
    m = uf(c) | 0
    if ((m | 0) !== 0) {
        a = 0
        while (1) {
            k = HEAP32
            n = ue(c, a) >> 2
            if ((k[n] | 0 | 0) == (g | 0)) {
                c = HEAP32[(20 + i) >> 2] | 0
                if ((c | 0) !== 0) {
                    k = k4
                    k[(0 + ((c - 1) | 0)) | 0].exports.tbl.set((a + 8) | 0, e)
                }
            } else {
                a = (a + 1) | 0
                if ((a | 0) !== (m | 0)) continue
            }
            break
        }
    }
}
function aE7(m, k) {
    var i = 0,
        g = 0,
        n = null,
        c = 0,
        a = 0,
        e = null
    c = (24 + m) | 0
    i = uf(c) | 0
    if ((i | 0) !== 0) {
        a = 0
        while (1) {
            e = HEAP32
            g = ue(c, a) >> 2
            if ((e[g] | 0 | 0) == (k | 0)) {
                e[g] = 0
                c = HEAP32[(20 + m) >> 2] | 0
                if ((c | 0) !== 0) {
                    e = uX
                    n = k4
                    n[(0 + ((c - 1) | 0)) | 0].exports.tbl.set((a + 8) | 0, e)
                }
            } else {
                a = (a + 1) | 0
                if ((a | 0) !== (i | 0)) continue
            }
            break
        }
    }
}
function aE6(k, i) {
    var q = null,
        g = 0,
        o = 0,
        e = 0,
        n = 0,
        m = 0,
        c = 0,
        a = 0
    q = __asm.tbl.get(i)
    c = HEAP32[(8 + k) >> 2] | 0
    g = HEAP16[(6 + k) >> 1] & c & 65535
    c &= 65535
    o = c ^ -1
    e = HEAP32[(16 + k) >> 2] & 65535
    n = (e | 0) !== 0 ? (HEAP32[(24 + k) >> 2] & 65535) | 0 : 1 | 0
    a = g
    while (1) {
        if (((a & e) | 0) !== (n | 0)) {
            m = HEAP16[(4 + k) >> 1] | 0
            q2[m & 65535].set((a + 8) | 0, q)
        }
        a = (((a | c) + 1) & o) | g
        if (a >>> 0 < 65536) continue
        break
    }
}
function PX(q, o, n, m) {
    var F = 0,
        k = 0,
        t = 0,
        s = 0,
        A = 0,
        x = 0,
        u = 0,
        a = null,
        c = null,
        g = 0,
        i = 0,
        e = 0
    a = new WebAssembly.Instance(o, nQ)
    c = __asm.tbl
    a = a.exports.tbl
    a.set(0, c.get(d4(9) | 0))
    a.set(1, c.get(d4(1) | 0))
    a.set(2, c.get(d4(2) | 0))
    a.set(3, c.get(d4(3) | 0))
    a.set(4, c.get(d4(4) | 0))
    a.set(5, c.get(d4(5) | 0))
    a.set(6, c.get(d4(6) | 0))
    a.set(7, c.get(d4(7) | 0))
    if (n >>> 0 < m >>> 0) {
        F = (8 - n) | 0
        g = n
        while (1) {
            c = a.get((F + g) | 0)
            k = ((a62(g, 56) | 0) + (HEAP32[q >> 2] | 0)) | 0
            i = HEAP32[(8 + k) >> 2] | 0
            t = HEAP16[(6 + k) >> 1] & i & 65535
            s = HEAP32[(16 + k) >> 2] & 65535
            A = (s | 0) !== 0 ? (HEAP32[(24 + k) >> 2] & 65535) | 0 : 1 | 0
            i &= 65535
            x = i ^ -1
            e = t
            while (1) {
                if (((e & s) | 0) !== (A | 0)) {
                    u = HEAP16[(4 + k) >> 1] | 0
                    q2[u & 65535].set((e + 8) | 0, c)
                }
                e = (((e | i) + 1) & x) | t
                if (e >>> 0 < 65536) continue
                break
            }
            g = (g + 1) | 0
            if ((g | 0) !== (m | 0)) continue
            break
        }
    }
}
function aE5(e, c) {
    var a = 0
    a = tB(e | 0) | 0
    PX(e | 0, c, (a - 1) | 0, a)
    return ((tB(e | 0) | 0) >>> 0 > 100 ? 1 : 0) | 0
}
function p8(e, c, a) {
    var k = null,
        i = null,
        g = 0
    aGd(e, a)
    i = __asm.tbl
    k = q2[e]
    i = i.get(c)
    g = 0
    while (1) {
        k.set((g + 8) | 0, i)
        g = (g + 1) | 0
        if ((g | 0) !== 65536) continue
        break
    }
}
function aE4(k, i, g) {
    var c = null,
        a = null,
        e = 0
    a = new WebAssembly.Instance(i, nQ)
    c = __asm.tbl
    a = a.exports.tbl
    a.set(0, c.get(d4(9) | 0))
    a.set(1, c.get(d4(1) | 0))
    a.set(2, c.get(d4(2) | 0))
    a.set(3, c.get(d4(3) | 0))
    a.set(4, c.get(d4(4) | 0))
    a.set(5, c.get(d4(5) | 0))
    a.set(6, c.get(d4(6) | 0))
    a.set(7, c.get(d4(7) | 0))
    e = c.grow((g | 0) === 2 ? 4 | 0 : 5 | 0)
    c.set(e, a.get(8))
    c.set((e + 1) | 0, a.get(9))
    c.set((e + 2) | 0, a.get(10))
    c.set((e + 3) | 0, a.get(11))
    HEAP32[((k << 2) + 8 + 2135152) >> 2] = e
    if ((g | 0) !== 2) {
        e = (e + 4) | 0
        c.set(e, a.get(12))
        HEAP32[((g << 2) + 2135152) >> 2] = e
    }
    q2[k] = a
}
function any(a, b) {
    console.log(c5(a, b))
}
function au7() {
    return +Date.now()
}
function RN(k, i, g) {
    var m = null,
        c = 0,
        e = null,
        a = 0
    m = dX()
    e = (-8 + m) | 0
    bc(e)
    k6 = String()
    c = e | 0
    HEAP8[(4 + c) >> 0] = 0
    HEAP8[(5 + c) >> 0] = g
    HEAP8[(6 + c) >> 0] = g
    HEAP8[(7 + c) >> 0] = g & 48
    HEAP32[c >> 2] = i
    a = ig(c, k | 0, i) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    a = ig(c, k | 0, a) | 0
    HEAP32[c >> 2] = a
    ig(c, k | 0, a) | 0
    e = k6
    k6 = null
    bc(m)
    return e
}
function aII() {
    var c = null,
        a = null
    c = k6
    a = c5(HEAP8, 3191244 >> 0)
    k6 = c.concat(a, "\n")
}
function uv(i, g, e, c) {
    var m = null,
        a = 0,
        k = null
    m = dX()
    k = (-16 + m) | 0
    bc(k)
    a = k | 0
    aIG(a, g | 0, e, c)
    aIF(i | 0, a)
    if ((HEAP8[(16 + i) >> 0] & 255) !== 0) {
        k = { type: 25, ctxType: e, value: c, dbgState: HEAP32[(492 + g) >> 2] | 0 }
        postMessage(k)
    }
    bc(m)
}
function aID(c, a) {
    var e = null
    e = { type: 46, ctxType: c, value: a }
    postMessage(e)
}
function aIC(m) {
    var k = null,
        c = 0,
        g = 0,
        i = 0,
        e = null,
        a = 0
    k = dX()
    e = (-16 + k) | 0
    bc(e)
    HEAP8[(16 + m) >> 0] = 1
    c = (8 + e) | 0
    aIB(c, m | 0)
    g = e | 0
    aIA(g, m | 0)
    a = HEAP32[c >> 2] | 0
    i = HEAP32[g >> 2] | 0
    if ((a | 0) != (i | 0))
        while (1) {
            e = { type: 25, ctxType: HEAP32[(4 + a) >> 2] | 0, value: HEAP32[(8 + a) >> 2] | 0, dbgState: HEAP32[(492 + (HEAP32[a >> 2] | 0)) >> 2] | 0 }
            postMessage(e)
            aIz(c) | 0
            a = HEAP32[c >> 2] | 0
            if ((a | 0) != (i | 0)) continue
            break
        }
    bc(k)
}
function aIy(g, e, c) {
    var a = 0,
        i = null
    a = nC(g | 0, e, c) | 0
    if ((a | 0) != (0 | 0)) {
        HEAP32[(492 + a) >> 2] = 1
        i = { type: 26, ctxType: e, value: c, dbgState: 1 }
        postMessage(i)
    }
}
function aIx(i, g, e) {
    var c = 0,
        a = 0,
        k = null
    c = nC(i | 0, g, e) | 0
    a = (c | 0) == (0 | 0) ? 1 : 0
    if (!a) {
        HEAP32[(492 + c) >> 2] = 0
        k = { type: 26, ctxType: g, value: e, dbgState: 0 }
        postMessage(k)
    }
    return (a ^ 1 ? 1 : 0) | 0
}
function a6I(k) {
    var i = 0,
        c = 0,
        a = 0,
        g = 0,
        e = null
    c = HEAP32[814992] | 0
    if ((c | 0) != (0 | 0))
        while (1) {
            a = HEAP32[(8 + c) >> 2] | 0
            g = HEAP32[(32 + c) >> 2] | 0
            e = "Process"
            console.log(e, a, "State:", g)
            a = HEAP32[(12 + c) >> 2] | 0
            if ((a | 0) != (0 | 0))
                while (1) {
                    g = HEAP32[(436 + a) >> 2] | 0
                    i = HEAP32[(592 + a) >> 2] | 0
                    e = "Thread"
                    console.log(e, g, "State:", i)
                    a = HEAP32[(488 + a) >> 2] | 0
                    if ((a | 0) != (0 | 0)) continue
                    break
                }
            c = HEAP32[(92 + c) >> 2] | 0
            if ((c | 0) != (0 | 0)) continue
            break
        }
}
function a6H(o, n, m) {
    var k = null,
        i = null,
        c = 0,
        a = 0,
        g = 0,
        e = 0
    k = dX()
    i = (-8 + k) | 0
    bc(i)
    a = HEAP32[814992] | 0
    if ((HEAP32[(8 + a) >> 2] | 0) !== (o | 0))
        while (1) {
            a = HEAP32[(92 + a) >> 2] | 0
            if ((HEAP32[(8 + a) >> 2] | 0) !== (o | 0)) continue
            break
        }
    i_() | 0
    a = HEAP32[a >> 2] | 0
    c = i | 0
    k6 = String()
    HEAP8[(4 + c) >> 0] = 0
    HEAP8[(5 + c) >> 0] = 32
    HEAP8[(6 + c) >> 0] = 32
    HEAP8[(7 + c) >> 0] = 32
    if ((m | 0) !== 0) {
        e = n
        g = 0
        while (1) {
            HEAP32[c >> 2] = e
            e = ig(c, a, e) | 0
            g = (g + 1) | 0
            if ((g | 0) !== (m | 0)) continue
            break
        }
    }
    k6 = null
    bc(k)
}
function a6G(t, s, q) {
    var o = 0,
        i = 0,
        n = 0,
        m = null,
        k = null,
        a = 0,
        c = null,
        e = 0,
        g = null
    a = HEAP32[814992] | 0
    if ((a | 0) != (0 | 0))
        while (1) {
            if ((HEAP32[(8 + a) >> 2] | 0) !== (t | 0)) {
                a = HEAP32[(92 + a) >> 2] | 0
                if ((a | 0) != (0 | 0)) continue
                a = 0 | 0
            }
            break
        }
    else {
        a = 0 | 0
    }
    c = String()
    if ((q | 0) === 0) {
        console.log(c)
        return
    }
    e = 0
    while (1) {
        o = HEAP32[a >> 2] | 0
        i = (e + s) | 0
        g = HEAP32
        n = aIu(o, i) >> 2
        m = Rx(i)
        g = Rx(g[n] | 0)
        k = ":"
        c = c.concat(m, k, g, "\n")
        e = (e + 4) | 0
        if (e >>> 0 < q >>> 0) continue
        break
    }
    console.log(c)
}
function a6F(c) {
    var a = 0
    a = HEAP32[814992] | 0
    if ((a | 0) != (0 | 0))
        while (1) {
            if ((HEAP32[(8 + a) >> 2] | 0) !== (c | 0)) {
                a = HEAP32[(92 + a) >> 2] | 0
                if ((a | 0) != (0 | 0)) continue
                a = 0 | 0
            }
            break
        }
    else {
        a = 0 | 0
    }
    aIq(HEAP32[a >> 2] | 0)
    aIp(HEAP32[a >> 2] | 0)
}
function aIr() {
    HEAP32[530566] = 3259988 | 0 | 0
    throw "CheerpJContinue"
}
function aIl() {
    return +Date.now()
}
function Rx(c) {
    var e = null,
        a = null
    a = new Number(+(c >>> 0)).toString(16)
    e = "0"
    if ((a.length | 0) >= 0) return a
    while (1) {
        a = e.concat(a)
        if ((a.length | 0) < 0) continue
        break
    }
    return a
}
function aHP(g) {
    var e = null,
        c = 0,
        a = null
    c = mw | 0
    e = k8
    a: {
        if ((g | 0) > -1)
            if ((c | 0) > (g | 0))
                if ((e[g] & 255) !== 0) {
                    a = kj
                    c = ((a62(g, 24) | 0) / 24) | 0
                    break a
                }
        a = kj
        c = -1
    }
    a = a
    a[c].a1 = null
    a[c].a2 = null
    a[c].a3 = null
    a[c].a4 = null
    e[c] = 0
}
function acC() {
    var a = null
    a = { type: 74 }
    postMessage(a)
}
function acB(e, c, a) {
    var g = null
    g = { type: 72, addr: e, width: c, height: a }
    postMessage(g)
}
function F1() {
    var a = null
    a = { type: 75 }
    postMessage(a)
}
function alI() {
    var g = null,
        c = 0,
        e = null,
        a = null
    a = alH
    g = [null]
    g[0] = a
    a = alE(g, 0)
    c = oSlot
    if (a !== nullArray || c !== 0) {
        e = kj
        return (((a62(c, 24) - a62(0, 24)) | 0) / 24) | 0
    }
    return -1 | 0
}
function alH(a) {
    var c = null
    c = { type: 91, arg1: a }
    postMessage(c, new Array(a))
}
function alE(g, h) {
    var i = null,
        e = 0,
        c = null,
        a = 0
    e = mw | 0
    a: {
        b: {
            if ((e | 0) > 1) {
                c = k8
                a = 1
                while (1) {
                    if ((c[a] & 255) !== 0) {
                        a = (a + 1) | 0
                        if ((a | 0) === (e | 0)) break b
                        continue
                    }
                    break
                }
            } else {
                a = 1
            }
            if ((a | 0) !== (e | 0)) {
                e = a
                break a
            }
        }
        a = e << 1
        mw = a
        c = kj
        if (c !== nullArray || 0 !== 0) c = a6x(c, c.length, (a / 24) | 0)
        else c = a6v((a / 24) | 0)
        kj = c
        a = mw | 0
        c = k8
        if (c !== nullArray || 0 !== 0)
            c = (function () {
                var __old__ = c
                var __ret__ = new Uint8Array((a / 1) | 0)
                __ret__.set(__old__.subarray(0, Math.min(__ret__.length, __old__.length)))
                return __ret__
            })()
        else c = new Uint8Array((a / 1) | 0)
        k8 = c
    }
    c = kj
    c[e].a0 = g[h]
    c[e].a1 = null
    c[e].a2 = null
    c[e].a3 = new Array()
    c[e].a4 = null
    c[e].i5 = 0
    i = k8
    i[e] = 1
    oSlot = (0 + e) | 0
    return c
}
function alB(F, J, L, O) {
    var c = null,
        t = 0,
        i = null,
        e = 0,
        a = null,
        g = null,
        n = null,
        s = -0,
        k = 0,
        m = 0,
        o = null,
        u = 0,
        x = 0,
        q = 0,
        A = 0
    c = dX()
    i = (-16 + c) | 0
    bc(i)
    e = mw | 0
    if ((F | 0) > -1) {
        if ((e | 0) > (F | 0)) {
            a = k8
            if ((a[F] & 255) !== 0) {
                a = kj
                a = a[F]
            } else {
                a = null
            }
        } else {
            a = null
        }
    } else {
        a = null
    }
    g = a.a2
    e = HEAP32[J >> 2] | 0
    switch (e | 0) {
        case 2:
            g = new OffscreenCanvas(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0))
            a.a1 = g
            i = { preserveDrawingBuffer: false, alpha: false, antialias: false }
            n = "webgl2"
            a.a2 = g.getContext(n, i)
            bc(c)
            return 0 | 0
        case 5:
            i = "OffscreenCanvas"
            a = self[i]
            e = IT(a) | 0
            bc(c)
            return ((e | 0) !== 4 ? 1 : 0) | 0
        case 1:
            if ((PG | 0) === (F | 0)) {
                g = a.a1.transferToImageBitmap()
                a.a0(g)
                bc(c)
                return 0 | 0
            }
            bc(c)
            return 0 | 0
        case 4:
            a.a1.width = +(HEAP32[(4 + J) >> 2] >>> 0)
            a.a1.height = +(HEAP32[(8 + J) >> 2] >>> 0)
            bc(c)
            return 0 | 0
        case 0:
            PG = F
            bc(c)
            return 0 | 0
        case 16:
            e = so(a, g.createShader(+(HEAP32[(4 + J) >> 2] >>> 0))) | 0
            bc(c)
            return e | 0
        case 17:
            i = o0(L | 0)
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.shaderSource(a[(0 + ((e - 1) | 0)) | 0], i)
            bc(c)
            return 0 | 0
        case 18:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.compileShader(a[(0 + ((e - 1) | 0)) | 0])
            bc(c)
            return 0 | 0
        case 19:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            s = +g.getShaderParameter(a[(0 + ((e - 1) | 0)) | 0], +(HEAP32[(8 + J) >> 2] >>> 0))
            bc(c)
            return ~~s | 0
        case 74:
            e = HEAP32[(4 + J) >> 2] | 0
            i = a.a3
            g.deleteShader(i[(0 + ((e - 1) | 0)) | 0])
            e = HEAP32[(4 + J) >> 2] | 0
            i = a.a3
            i[(0 + ((e - 1) | 0)) | 0] = null
            bc(c)
            return 0 | 0
        case 20:
            e = so(a, g.createProgram()) | 0
            bc(c)
            return e | 0
        case 21:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            k = HEAP32[(8 + J) >> 2] | 0
            g.attachShader(a[(0 + ((k - 1) | 0)) | 0], a[(0 + ((e - 1) | 0)) | 0])
            bc(c)
            return 0 | 0
        case 22:
            i = o0(L | 0)
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.bindAttribLocation(a[(0 + ((e - 1) | 0)) | 0], +(HEAP32[(8 + J) >> 2] >>> 0), i)
            bc(c)
            return 0 | 0
        case 23:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.linkProgram(a[(0 + ((e - 1) | 0)) | 0])
            bc(c)
            return 0 | 0
        case 24:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            s = +g.getProgramParameter(a[(0 + ((e - 1) | 0)) | 0], +(HEAP32[(8 + J) >> 2] >>> 0))
            bc(c)
            return ~~s | 0
        case 25:
            e = HEAP32[(4 + J) >> 2] | 0
            if ((e | 0) !== 0) {
                a = a.a3
                a = a[(0 + ((e - 1) | 0)) | 0]
                a = a
            } else {
                a = null
            }
            g.useProgram(a)
            bc(c)
            return 0 | 0
        case 26:
            n = o0(L | 0)
            e = HEAP32[(4 + J) >> 2] | 0
            i = a.a3
            g = g.getUniformLocation(i[(0 + ((e - 1) | 0)) | 0], n)
            if (g !== null) {
                e = so(a, g) | 0
                bc(c)
                return e | 0
            }
            bc(c)
            return -1 | 0
        case 27:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.uniform1i(a[(0 + ((e - 1) | 0)) | 0], +(HEAP32[(8 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 55:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.uniform2f(a[(0 + ((e - 1) | 0)) | 0], +HEAPF32[(8 + J) >> 2], +HEAPF32[(12 + J) >> 2])
            bc(c)
            return 0 | 0
        case 54:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.uniform1f(a[(0 + ((e - 1) | 0)) | 0], +HEAPF32[(8 + J) >> 2])
            bc(c)
            return 0 | 0
        case 29:
            i = g.getParameter(+(HEAP32[(4 + J) >> 2] >>> 0))
            e = IT(i) | 0
            if ((e | 0) === 2) {
                kD(O | 0, 8)
                a = ir(O | 0)
                i = i
                a[0] = i[0] | 0
                a[(0 + 1) | 0] = i[(0 + 1) | 0] | 0
            } else if (e >>> 0 < 2) {
                kD(O | 0, 4)
                a = ir(O | 0)
                a[0] = ~~+i
            } else console.log("unexpected parameter i")
            e = lI(O | 0) | 0
            bc(c)
            return e | 0
        case 60:
            g.activeTexture(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 65:
            g.renderbufferStorage(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), +(HEAP32[(16 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 66:
            g.scissor(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), +(HEAP32[(16 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 30:
            e = HEAP32[(4 + J) >> 2] << 2
            kD(O | 0, e)
            i = ir(O | 0)
            if ((HEAP32[(4 + J) >> 2] | 0) === 0) {
                bc(c)
                return e | 0
            }
            k = 0
            while (1) {
                n = g.createTexture()
                m = a.a3.indexOf(null)
                o = a.a3
                if ((m | 0) === -1) {
                    ;+o.push(n)
                    m = a.a3.length
                } else {
                    o[(0 + m) | 0] = n
                    m = (m + 1) | 0
                }
                i[(0 + k) | 0] = m
                k = (k + 1) | 0
                if (k >>> 0 < HEAP32[(4 + J) >> 2] >>> 0) continue
                break
            }
            bc(c)
            return e | 0
        case 33:
            e = HEAP32[(4 + J) >> 2] << 2
            kD(O | 0, e)
            i = ir(O | 0)
            if ((HEAP32[(4 + J) >> 2] | 0) === 0) {
                bc(c)
                return e | 0
            }
            k = 0
            while (1) {
                n = g.createBuffer()
                m = a.a3.indexOf(null)
                o = a.a3
                if ((m | 0) === -1) {
                    ;+o.push(n)
                    m = a.a3.length
                } else {
                    o[(0 + m) | 0] = n
                    m = (m + 1) | 0
                }
                i[(0 + k) | 0] = m
                k = (k + 1) | 0
                if (k >>> 0 < HEAP32[(4 + J) >> 2] >>> 0) continue
                break
            }
            bc(c)
            return e | 0
        case 34:
            e = HEAP32[(4 + J) >> 2] << 2
            kD(O | 0, e)
            i = ir(O | 0)
            if ((HEAP32[(4 + J) >> 2] | 0) === 0) {
                bc(c)
                return e | 0
            }
            k = 0
            while (1) {
                n = g.createFramebuffer()
                m = a.a3.indexOf(null)
                o = a.a3
                if ((m | 0) === -1) {
                    ;+o.push(n)
                    m = a.a3.length
                } else {
                    o[(0 + m) | 0] = n
                    m = (m + 1) | 0
                }
                i[(0 + k) | 0] = m
                k = (k + 1) | 0
                if (k >>> 0 < HEAP32[(4 + J) >> 2] >>> 0) continue
                break
            }
            bc(c)
            return e | 0
        case 35:
            e = HEAP32[(4 + J) >> 2] << 2
            kD(O | 0, e)
            i = ir(O | 0)
            if ((HEAP32[(4 + J) >> 2] | 0) === 0) {
                bc(c)
                return e | 0
            }
            k = 0
            while (1) {
                n = g.createRenderbuffer()
                m = a.a3.indexOf(null)
                o = a.a3
                if ((m | 0) === -1) {
                    ;+o.push(n)
                    m = a.a3.length
                } else {
                    o[(0 + m) | 0] = n
                    m = (m + 1) | 0
                }
                i[(0 + k) | 0] = m
                k = (k + 1) | 0
                if (k >>> 0 < HEAP32[(4 + J) >> 2] >>> 0) continue
                break
            }
            bc(c)
            return e | 0
        case 38:
            s = +g.checkFramebufferStatus(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return ~~s | 0
        case 37:
            e = HEAP32[(16 + J) >> 2] | 0
            a = a.a3
            g.framebufferRenderbuffer(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), a[(0 + ((e - 1) | 0)) | 0])
            bc(c)
            return 0 | 0
        case 36:
            e = HEAP32[(16 + J) >> 2] | 0
            if ((e | 0) !== 0) {
                a = a.a3
                a = a[(0 + ((e - 1) | 0)) | 0]
                a = a
            } else {
                a = null
            }
            g.framebufferTexture2D(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), a, +(HEAP32[(20 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 31:
            e = HEAP32[(8 + J) >> 2] | 0
            a: {
                if ((e | 0) !== 0) {
                    i = a.a3
                    i = i[(0 + ((e - 1) | 0)) | 0]
                    if (i !== null) {
                        i = i
                        break a
                    }
                }
                i = a.a4
                if (i === null) {
                    a.i5 = HEAP32[(4 + J) >> 2] | 0
                    i = g.createTexture()
                    a.a4 = i
                }
            }
            g.bindTexture(+(HEAP32[(4 + J) >> 2] >>> 0), i)
            bc(c)
            return 0 | 0
        case 39:
            e = HEAP32[(8 + J) >> 2] | 0
            if ((e | 0) !== 0) {
                a = a.a3
                a = a[(0 + ((e - 1) | 0)) | 0]
                a = a
            } else {
                a = null
            }
            g.bindBuffer(+(HEAP32[(4 + J) >> 2] >>> 0), a)
            bc(c)
            return 0 | 0
        case 40:
            a = oZ(L | 0)
            s = +(HEAP32[(4 + J) >> 2] >>> 0)
            if (a !== null) {
                g.bufferData(s, a, +(HEAP32[(8 + J) >> 2] >>> 0))
                bc(c)
                return 0 | 0
            }
            g.bufferData(s, +(HEAP32[(12 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 41:
            a = oZ(L | 0)
            if (a !== null) {
                g.bufferSubData(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), a)
                bc(c)
                return 0 | 0
            }
            console.log("null subdata")
            g.bufferSubData(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), null)
            bc(c)
            return 0 | 0
        case 63:
            e = HEAP32[(8 + J) >> 2] | 0
            if ((e | 0) !== 0) {
                a = a.a3
                a = a[(0 + ((e - 1) | 0)) | 0]
                a = a
            } else {
                a = null
            }
            g.bindFramebuffer(+(HEAP32[(4 + J) >> 2] >>> 0), a)
            bc(c)
            return 0 | 0
        case 64:
            e = HEAP32[(8 + J) >> 2] | 0
            if ((e | 0) !== 0) {
                a = a.a3
                a = a[(0 + ((e - 1) | 0)) | 0]
                a = a
            } else {
                a = null
            }
            g.bindRenderbuffer(+(HEAP32[(4 + J) >> 2] >>> 0), a)
            bc(c)
            return 0 | 0
        case 71:
            g.texParameteri(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 42:
            g.vertexAttribPointer(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), !!((HEAP32[(16 + J) >> 2] | 0) !== 0 ? 1 : 0), +(HEAP32[(20 + J) >> 2] >>> 0), +(HEAP32[(24 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 43:
            g.enableVertexAttribArray(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 44:
            g.blendFunc(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 32:
            a = oZ(L | 0)
            if (a !== null) {
                e = HEAP32[(28 + J) >> 2] | 0
                if (+g.UNSIGNED_BYTE === +(e >>> 0)) {
                    a = a
                } else {
                    i = a.buffer
                    s = +a.byteOffset
                    a = new Uint16Array(i, s, +(((a.length | 0) / 2) | 0))
                    a = a
                }
            } else {
                a = null
            }
            g.texImage2D(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] | 0), +(HEAP32[(12 + J) >> 2] | 0), +(HEAP32[(16 + J) >> 2] | 0), +(HEAP32[(20 + J) >> 2] | 0), 0, +(HEAP32[(24 + J) >> 2] >>> 0), +(HEAP32[(28 + J) >> 2] >>> 0), a)
            bc(c)
            return 0 | 0
        case 45:
            a = oZ(L | 0)
            g.texSubImage2D(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] | 0), +(HEAP32[(12 + J) >> 2] >>> 0), +(HEAP32[(16 + J) >> 2] >>> 0), +(HEAP32[(20 + J) >> 2] | 0), +(HEAP32[(24 + J) >> 2] | 0), +(HEAP32[(28 + J) >> 2] >>> 0), +(HEAP32[(32 + J) >> 2] >>> 0), a)
            bc(c)
            return 0 | 0
        case 70:
            i = ir(L | 0)
            if ((i.length | 0) === 0) {
                bc(c)
                return 0 | 0
            }
            e = 0
            while (1) {
                k = i[(0 + e) | 0] | 0
                n = a.a3
                g.deleteTexture(n[(0 + ((k - 1) | 0)) | 0])
                k = i[(0 + e) | 0] | 0
                n = a.a3
                n[(0 + ((k - 1) | 0)) | 0] = null
                e = (e + 1) | 0
                if (e >>> 0 < i.length >>> 0) continue
                break
            }
            bc(c)
            return 0 | 0
        case 67:
            i = ir(L | 0)
            if ((i.length | 0) === 0) {
                bc(c)
                return 0 | 0
            }
            e = 0
            while (1) {
                k = i[(0 + e) | 0] | 0
                n = a.a3
                g.deleteBuffer(n[(0 + ((k - 1) | 0)) | 0])
                k = i[(0 + e) | 0] | 0
                n = a.a3
                n[(0 + ((k - 1) | 0)) | 0] = null
                e = (e + 1) | 0
                if (e >>> 0 < i.length >>> 0) continue
                break
            }
            bc(c)
            return 0 | 0
        case 69:
            i = ir(L | 0)
            if ((i.length | 0) === 0) {
                bc(c)
                return 0 | 0
            }
            e = 0
            while (1) {
                k = i[(0 + e) | 0] | 0
                n = a.a3
                g.deleteRenderbuffer(n[(0 + ((k - 1) | 0)) | 0])
                k = i[(0 + e) | 0] | 0
                n = a.a3
                n[(0 + ((k - 1) | 0)) | 0] = null
                e = (e + 1) | 0
                if (e >>> 0 < i.length >>> 0) continue
                break
            }
            bc(c)
            return 0 | 0
        case 68:
            i = ir(L | 0)
            if ((i.length | 0) === 0) {
                bc(c)
                return 0 | 0
            }
            e = 0
            while (1) {
                k = i[(0 + e) | 0] | 0
                n = a.a3
                g.deleteFramebuffer(n[(0 + ((k - 1) | 0)) | 0])
                k = i[(0 + e) | 0] | 0
                n = a.a3
                n[(0 + ((k - 1) | 0)) | 0] = null
                e = (e + 1) | 0
                if (e >>> 0 < i.length >>> 0) continue
                break
            }
            bc(c)
            return 0 | 0
        case 61:
            g.drawArrays(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 62:
            g.drawElements(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), +(HEAP32[(16 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 8:
            g.cullFace(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 9:
            g.depthFunc(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 10:
            g.depthMask(!!((HEAP32[(4 + J) >> 2] | 0) !== 0 ? 1 : 0))
            bc(c)
            return 0 | 0
        case 12:
            g.stencilFunc(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 13:
            g.stencilOp(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 11:
            g.stencilMask(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 14:
            g.disableVertexAttribArray(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 6:
            e = HEAP32[(4 + J) >> 2] | 0
            if ((e | 0) === 7938) a = "OpenGL ES 2.0 Chromium"
            else if ((e | 0) === 7939) a = ""
            else {
                a = g.getParameter(+(e >>> 0))
                a = a
            }
            e = i | 0
            aaP(e, a)
            k = HEAP32[(4 + e) >> 2] | 0
            kD(O | 0, k)
            if ((k | 0) !== 0) {
                i = HEAP8
                t = HEAP32[(8 + e) >> 2] | 0
                if (k >>> 0 < 4) {
                    m = 0
                } else {
                    u = k & -4
                    x = 0
                    m = 0
                    while (1) {
                        a = HEAP8
                        q = HEAP32[O >> 2] | 0
                        a[(q + m) | 0] = i[(t + m) | 0] | 0
                        q = (m + 1) | 0
                        a = HEAP8
                        A = HEAP32[O >> 2] | 0
                        a[(A + q) | 0] = i[(t + q) | 0] | 0
                        q = (m + 2) | 0
                        a = HEAP8
                        A = HEAP32[O >> 2] | 0
                        a[(A + q) | 0] = i[(t + q) | 0] | 0
                        q = (m + 3) | 0
                        a = HEAP8
                        A = HEAP32[O >> 2] | 0
                        a[(A + q) | 0] = i[(t + q) | 0] | 0
                        x = (x + 4) | 0
                        m = (m + 4) | 0
                        if ((x | 0) !== (u | 0)) continue
                        break
                    }
                }
                k &= 3
                if ((k | 0) !== 0) {
                    u = 0
                    while (1) {
                        a = HEAP8
                        x = HEAP32[O >> 2] | 0
                        a[(x + m) | 0] = i[(t + m) | 0] | 0
                        u = (u + 1) | 0
                        if ((u | 0) !== (k | 0)) {
                            m = (m + 1) | 0
                            continue
                        }
                        break
                    }
                }
            }
            k = lI(O | 0) | 0
            ay4(e)
            bc(c)
            return k | 0
        case 73:
            e = HEAP32[(4 + J) >> 2] | 0
            a = [null]
            a[0] = HEAP32[(8 + J) >> 2] | 0
            a = a[0]
            g.pixelStorei(+(e >>> 0), a)
            bc(c)
            return 0 | 0
        case 46:
            g.disable(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 52:
            g.enable(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 47:
            g.colorMask(!!((HEAP32[(4 + J) >> 2] | 0) !== 0 ? 1 : 0), !!((HEAP32[(8 + J) >> 2] | 0) !== 0 ? 1 : 0), !!((HEAP32[(12 + J) >> 2] | 0) !== 0 ? 1 : 0), !!((HEAP32[(16 + J) >> 2] | 0) !== 0 ? 1 : 0))
            bc(c)
            return 0 | 0
        case 49:
            g.clearColor(+HEAPF32[(4 + J) >> 2], +HEAPF32[(8 + J) >> 2], +HEAPF32[(12 + J) >> 2], +HEAPF32[(16 + J) >> 2])
            bc(c)
            return 0 | 0
        case 48:
            g.clear(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 50:
            g.clearDepth(+HEAPF32[(4 + J) >> 2])
            bc(c)
            return 0 | 0
        case 51:
            g.clearStencil(+(HEAP32[(4 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 53:
            g.viewport(+(HEAP32[(4 + J) >> 2] >>> 0), +(HEAP32[(8 + J) >> 2] >>> 0), +(HEAP32[(12 + J) >> 2] >>> 0), +(HEAP32[(16 + J) >> 2] >>> 0))
            bc(c)
            return 0 | 0
        case 56:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.uniform4f(a[(0 + ((e - 1) | 0)) | 0], +HEAPF32[(8 + J) >> 2], +HEAPF32[(12 + J) >> 2], +HEAPF32[(16 + J) >> 2], +HEAPF32[(20 + J) >> 2])
            bc(c)
            return 0 | 0
        case 57:
            i = Es(L | 0)
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.uniform4fv(a[(0 + ((e - 1) | 0)) | 0], i)
            bc(c)
            return 0 | 0
        case 58:
            i = Es(L | 0)
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            g.uniformMatrix4fv(a[(0 + ((e - 1) | 0)) | 0], !!((HEAP32[(8 + J) >> 2] | 0) !== 0 ? 1 : 0), i)
            bc(c)
            return 0 | 0
        case 59:
            g.vertexAttrib4f(+(HEAP32[(4 + J) >> 2] >>> 0), +HEAPF32[(8 + J) >> 2], +HEAPF32[(12 + J) >> 2], +HEAPF32[(16 + J) >> 2], +HEAPF32[(20 + J) >> 2])
            bc(c)
            return 0 | 0
        case 15:
            e = HEAP32[(4 + J) >> 2] | 0
            a = a.a3
            a = a[(0 + ((e - 1) | 0)) | 0]
            i = o0(L | 0)
            s = +g.getAttribLocation(a, i)
            bc(c)
            return ~~s | 0
        case 28:
            e = ~~+g.getError()
            if ((e | 0) !== 0) {
                console.warn("GLES2 ERROR:", e)
                bc(c)
                return e | 0
            }
            bc(c)
            return 0 | 0
        case 72:
            g.flush()
            bc(c)
            return 0 | 0
        default:
            console.log("TODO: Offscreen ioctl ", e)
    }
}
function IT(g) {
    var e = null,
        i = 0,
        a = null,
        c = -0
    e = typeof g
    a = "number"
    c = +e.localeCompare(a)
    if (c === 0) return 0 | 0
    a = "boolean"
    c = +e.localeCompare(a)
    if (c === 0) return 1 | 0
    a = "undefined"
    c = +e.localeCompare(a)
    if (c === 0) return 4 | 0
    a = "object"
    c = +e.localeCompare(a)
    if (c === 0) {
        i = (g instanceof Int32Array) | 0
        return ((i & 1) !== 0 ? 2 | 0 : 3 | 0) | 0
    }
    return 5 | 0
}
function so(c, a) {
    var e = 0,
        g = null
    e = c.a3.indexOf(null)
    g = c.a3
    if ((e | 0) === -1) {
        ;+g.push(a)
        return c.a3.length | 0
    }
    g[(0 + e) | 0] = a
    return (e + 1) | 0
}
function o0(k) {
    var o = null,
        n = 0,
        e = 0,
        i = 0,
        a = null,
        m = 0,
        g = 0,
        c = 0
    o = HEAP8
    n = HEAP32[k >> 2] | 0
    a = HEAP8
    m = HEAP32[(4 + k) >> 2] | 0
    if (o === a && n === m) return null
    m = lI(k | 0) | 0
    a = String()
    if ((m | 0) === 0) return a
    g = 0
    while (1) {
        e = o[(n + g) | 0] | 0
        if ((e & 255) !== 0) {
            i = e & 255
            if (e << 24 > -16777216) {
                c = i
            } else if ((e & 255) < 192) {
                c = ((i & 63) + (c << 6)) | 0
            } else if ((e & 255) < 224) {
                c = i & 31
            } else if ((e & 255) < 240) {
                c = i & 15
            } else {
                c = i & 7
            }
            g = (g + 1) | 0
            a: {
                if ((g | 0) !== (m | 0)) if ((o[(n + g) | 0] & 192) === 128) break a
                if (c >>> 0 < 65536) a = a.concat(String.fromCharCode(c))
                else {
                    a = a.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                    a = a.concat(String.fromCharCode((c & 1023) | 56320))
                }
            }
            if ((g | 0) !== (m | 0)) continue
            return a
        }
        break
    }
    return a
}
function ir(c) {
    var k = 0,
        g = 0,
        m = -0,
        a = null,
        i = null,
        e = 0
    a = HEAP8
    k = HEAP32[c >> 2] | 0
    i = HEAP8
    e = HEAP32[(4 + c) >> 2] | 0
    if (a === i && k === e) return null
    e = lI(c | 0) | 0
    g = k
    a = a
    a = a
    a: if ((e | 0) !== 0) {
        if ((g | 0) === 0) if ((a.length | 0) === (e | 0)) break a
        a = a.subarray(+(g >>> 0), +((g + e) >>> 0))
    } else if ((g | 0) !== 0) a = a.subarray(+(g >>> 0))
    i = a.buffer
    m = +a.byteOffset
    a = new Uint32Array(i, m, +(((a.length | 0) / 4) | 0))
    return a
}
function oZ(c) {
    var i = 0,
        k = null,
        g = 0,
        a = null,
        e = 0
    a = HEAP8
    i = HEAP32[c >> 2] | 0
    k = HEAP8
    e = HEAP32[(4 + c) >> 2] | 0
    if (a === k && i === e) return null
    e = lI(c | 0) | 0
    g = i
    a = a
    a = a
    if ((e | 0) !== 0) {
        if ((g | 0) === 0) if ((a.length | 0) === (e | 0)) return a
        return a.subarray(+(g >>> 0), +((g + e) >>> 0))
    }
    if ((g | 0) === 0) return a
    return a.subarray(+(g >>> 0))
}
function aaP(k, i) {
    var g = 0,
        e = 0,
        a = 0,
        c = 0
    aau(k | 0)
    g = i.length
    if ((g | 0) !== 0) {
        e = 0
        while (1) {
            c = i.charCodeAt(+(e >>> 0))
            if ((c - 57344) >>> 0 < 4294965248) {
                a = c
            } else if (c >>> 0 < 56320) {
                a = (c << 10) & 1047552
            } else {
                a = (((c & 1023) | a) + 65536) | 0
            }
            e = (e + 1) | 0
            a: {
                if ((e | 0) !== (g | 0)) if (((c & 56320) | 0) === 55296) break a
                if (a >>> 0 < 128) {
                    c = a
                } else if (a >>> 0 < 2048) {
                    d_(k | 0, (a >>> 6) | 192)
                    c = (a & 63) | 128
                } else if (a >>> 0 < 65536) {
                    d_(k | 0, (a >>> 12) | 224)
                    d_(k | 0, ((a >>> 6) & 63) | 128)
                    c = (a & 63) | 128
                } else {
                    d_(k | 0, (a >>> 18) | 240)
                    d_(k | 0, ((a >>> 12) & 63) | 128)
                    d_(k | 0, ((a >>> 6) & 63) | 128)
                    c = (a & 63) | 128
                }
                d_(k | 0, c)
            }
            if ((e | 0) !== (g | 0)) continue
            break
        }
    }
}
function Es(k) {
    var i = 0,
        e = 0,
        m = -0,
        a = null,
        g = null,
        c = 0
    a = HEAP8
    i = HEAP32[k >> 2] | 0
    g = HEAP8
    c = HEAP32[(4 + k) >> 2] | 0
    if (a === g && i === c) return null
    c = lI(k | 0) | 0
    e = i
    a = a
    a = a
    a: if ((c | 0) !== 0) {
        if ((e | 0) === 0) if ((a.length | 0) === (c | 0)) break a
        a = a.subarray(+(e >>> 0), +((e + c) >>> 0))
    } else if ((e | 0) !== 0) a = a.subarray(+(e >>> 0))
    g = a.buffer
    m = +a.byteOffset
    a = new Float32Array(g, m, +(((a.length | 0) / 4) | 0))
    return a
}
function Ep(e, c, a) {
    var k = 0,
        g = 0,
        i = null
    aan(e | 0, a)
    k = HEAP32[((a62(((HEAP8[(86 + e) >> 0] & 255) >>> 4) & 1, 12) | 0) + 48 + e) >> 2] | 0
    Eo(e | 0)
    g = (32 + e) | 0
    i = { type: 10, devId: k, start: c, len: a, ioTransaction: g | 0, value: rK(g) | 0 }
    postMessage(i)
}
function aal(e) {
    var n = 0,
        c = 0,
        m = 0,
        k = 0,
        i = 0,
        a = 0,
        g = null
    n = HEAP8[(87 + e) >> 0] | 0
    c = HEAP8[(86 + e) >> 0] | 0
    m = HEAP16[(84 + e) >> 1] | 0
    k = HEAP8[(88 + e) >> 0] | 0
    i = HEAP32[((a62(((c & 255) >>> 4) & 1, 12) | 0) + 48 + e) >> 2] | 0
    Eo(e | 0)
    a = (32 + e) | 0
    g = { type: 11, devId: i, start: (((((m & 65535) << 8) + ((c & 15) << 24)) | 0) + (k & 255)) << 9, len: (n & 255) << 9, ioTransaction: a | 0, value: rK(a) | 0 }
    postMessage(g)
}
function aak() {
    var a = null
    if (((HEAP32[815331] & 1) | 0) !== 0) {
        a = { type: 58, eventType: 0, value: null }
        postMessage(a)
    }
}
function gr() {
    return +Date.now()
}
function eT() {
    return +Date.now()
}
function avr(m, k, i, g, e, c, d) {
    var n = 0,
        a = null
    a = new Array()
    n = d
    ;+a.push({ bufOffset: n, len: 131072 })
    a = { type: k, replyType: i, tid: m, fd: g, fileOffset: e, slices: a }
    postMessage(a)
}
function avp(k, i, g, e, f, c) {
    var m = 0,
        a = null
    a = new Array()
    m = f
    ;+a.push({ bufOffset: m, len: c })
    a = { type: k, replyType: 21, tid: 0, fd: i, fileOffset: g, slices: a }
    postMessage(a)
}
function avk(u, t, s) {
    var q = null,
        m = 0,
        o = 0,
        n = 0,
        e = 0,
        k = 0,
        i = null,
        a = null,
        g = 0,
        c = 0
    q = dX()
    i = (-16 + q) | 0
    bc(i)
    m = i | 0
    te(m, u | 0, HEAP32[(92 + u) >> 2] | 0)
    i = HEAP8
    o = HEAP32[(8 + m) >> 2] | 0
    n = HEAP32[(4 + m) >> 2] | 0
    a = String()
    if ((n | 0) !== 0) {
        g = 0
        while (1) {
            e = i[(o + g) | 0] | 0
            if ((e & 255) !== 0) {
                k = e & 255
                if (e << 24 > -16777216) {
                    c = k
                } else if ((e & 255) < 192) {
                    c = ((k & 63) + (c << 6)) | 0
                } else if ((e & 255) < 224) {
                    c = k & 31
                } else if ((e & 255) < 240) {
                    c = k & 15
                } else {
                    c = k & 7
                }
                g = (g + 1) | 0
                a: {
                    if ((g | 0) !== (n | 0)) if ((i[(o + g) | 0] & 192) === 128) break a
                    if (c >>> 0 < 65536) a = a.concat(String.fromCharCode(c))
                    else {
                        a = a.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((c & 1023) | 56320))
                    }
                }
                if ((g | 0) !== (n | 0)) continue
            }
            break
        }
    }
    tc(u | 0)
    i = { type: 68, replyType: 69, tid: t, path: a, devId: HEAP32[s >> 2] | 0, inodeId: HEAP32[(4 + s) >> 2] | 0 }
    postMessage(i)
    f9(m)
    bc(q)
}
function tb(a) {
    var c = null
    c = { type: 22, replyType: 16, fd: HEAP32[a >> 2] | 0, value: a | 0 | 0 }
    postMessage(c)
}
function ko(a) {
    var c = 0
    c = HEAP32[814992] | 0
    if ((c | 0) == (0 | 0)) return 0 | 0
    while (1) {
        if ((HEAP32[(8 + c) >> 2] | 0) === (a | 0)) return c | 0
        c = HEAP32[(92 + c) >> 2] | 0
        if ((c | 0) != (0 | 0)) continue
        break
    }
    return 0 | 0
}
function as$(a) {
    var e = null,
        c = 0
    e = fj
    c = HEAP32[(88 + a) >> 2] | 0
    e[(0 + c) | 0].port1.postMessage(null)
}
function m4(a) {
    var c = null
    c = fj
    c[(0 + a) | 0].port1.postMessage(null)
    c = fj
    c[(0 + a) | 0].port1.onmessage = null
    c = fj
    c[(0 + a) | 0] = null
}
function Lm(c) {
    var g = 0,
        e = 0,
        a = null
    g = HEAP32[(HEAP32[(472 + c) >> 2] | 0) >> 2] | 0
    e = uP() | 0
    a = [{ a0: 0, a1: 0 }]
    a[0].a0 = g
    a[0].a1 = c | 0
    a = a7h(asP, a[0])
    try {
        a()
    } catch (e) {
        if (e != "CheerpJContinue") {
            debugger
            console.log("Unexpected exit", e.stack)
        }
    }
    uO(e)
}
function asP(a) {
    asN(a.a0 | 0, a.a1 | 0)
}
function ar1(i, g, h, e) {
    var c = 0,
        k = null,
        a = null
    a = g
    c = h
    a = new Uint8Array(a.subarray(+(c >>> 0), +((c + e) >>> 0)))
    k = { type: 53, arg1: a, arg2: HEAP32[(5272 + i) >> 2] | 0 }
    postMessage(k, new Array(a.buffer))
}
function ar0(a) {
    var c = null
    c = { type: 29, arg1: a }
    postMessage(c)
}
function KY(s, q, o, n, m) {
    var u = 0,
        t = 0,
        e = 0,
        i = 0,
        k = null,
        a = null,
        g = 0,
        c = 0
    k = HEAP8
    u = HEAP32[(8 + o) >> 2] | 0
    t = HEAP32[(4 + o) >> 2] | 0
    a = String()
    if ((t | 0) !== 0) {
        g = 0
        while (1) {
            e = k[(u + g) | 0] | 0
            if ((e & 255) !== 0) {
                i = e & 255
                if (e << 24 > -16777216) {
                    c = i
                } else if ((e & 255) < 192) {
                    c = ((i & 63) + (c << 6)) | 0
                } else if ((e & 255) < 224) {
                    c = i & 31
                } else if ((e & 255) < 240) {
                    c = i & 15
                } else {
                    c = i & 7
                }
                g = (g + 1) | 0
                a: {
                    if ((g | 0) !== (t | 0)) if ((k[(u + g) | 0] & 192) === 128) break a
                    if (c >>> 0 < 65536) a = a.concat(String.fromCharCode(c))
                    else {
                        a = a.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((c & 1023) | 56320))
                    }
                }
                if ((g | 0) !== (t | 0)) continue
            }
            break
        }
    }
    k = { type: 17, replyType: m, tid: q, path: a, devId: HEAP32[(36 + s) >> 2] | 0, parentInodeId: HEAP32[(4 + n) >> 2] | 0 }
    postMessage(k)
}
function KR(o, n, m) {
    var s = 0,
        q = 0,
        e = 0,
        i = 0,
        k = null,
        a = null,
        g = 0,
        c = 0
    k = HEAP8
    s = HEAP32[(8 + m) >> 2] | 0
    q = HEAP32[(4 + m) >> 2] | 0
    a = String()
    if ((q | 0) !== 0) {
        g = 0
        while (1) {
            e = k[(s + g) | 0] | 0
            if ((e & 255) !== 0) {
                i = e & 255
                if (e << 24 > -16777216) {
                    c = i
                } else if ((e & 255) < 192) {
                    c = ((i & 63) + (c << 6)) | 0
                } else if ((e & 255) < 224) {
                    c = i & 31
                } else if ((e & 255) < 240) {
                    c = i & 15
                } else {
                    c = i & 7
                }
                g = (g + 1) | 0
                a: {
                    if ((g | 0) !== (q | 0)) if ((k[(s + g) | 0] & 192) === 128) break a
                    if (c >>> 0 < 65536) a = a.concat(String.fromCharCode(c))
                    else {
                        a = a.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((c & 1023) | 56320))
                    }
                }
                if ((g | 0) !== (q | 0)) continue
            }
            break
        }
    }
    k = { type: 64, replyType: 21, tid: n, path: a, devId: HEAP32[(36 + o) >> 2] | 0 }
    postMessage(k)
}
function KO(u, t, s, q) {
    var m = null,
        o = 0,
        n = 0,
        g = null,
        k = 0,
        e = 0,
        c = 0,
        i = 0,
        a = null
    m = HEAP8
    o = HEAP32[(8 + s) >> 2] | 0
    n = HEAP32[(4 + s) >> 2] | 0
    g = String()
    if ((n | 0) !== 0) {
        k = 0
        while (1) {
            c = m[(o + k) | 0] | 0
            if ((c & 255) !== 0) {
                i = c & 255
                if (c << 24 > -16777216) {
                    e = i
                } else if ((c & 255) < 192) {
                    e = ((i & 63) + (e << 6)) | 0
                } else if ((c & 255) < 224) {
                    e = i & 31
                } else if ((c & 255) < 240) {
                    e = i & 15
                } else {
                    e = i & 7
                }
                k = (k + 1) | 0
                a: {
                    if ((k | 0) !== (n | 0)) if ((m[(o + k) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) g = g.concat(String.fromCharCode(e))
                    else {
                        g = g.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        g = g.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((k | 0) !== (n | 0)) continue
            }
            break
        }
    }
    m = HEAP8
    o = HEAP32[(8 + q) >> 2] | 0
    n = HEAP32[(4 + q) >> 2] | 0
    a = String()
    if ((n | 0) !== 0) {
        k = 0
        while (1) {
            c = m[(o + k) | 0] | 0
            if ((c & 255) !== 0) {
                i = c & 255
                if (c << 24 > -16777216) {
                    e = i
                } else if ((c & 255) < 192) {
                    e = ((i & 63) + (e << 6)) | 0
                } else if ((c & 255) < 224) {
                    e = i & 31
                } else if ((c & 255) < 240) {
                    e = i & 15
                } else {
                    e = i & 7
                }
                k = (k + 1) | 0
                a: {
                    if ((k | 0) !== (n | 0)) if ((m[(o + k) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) a = a.concat(String.fromCharCode(e))
                    else {
                        a = a.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((k | 0) !== (n | 0)) continue
            }
            break
        }
    }
    m = { type: 65, replyType: 21, tid: t, oldPath: g, newPath: a, devId: HEAP32[(36 + u) >> 2] | 0 }
    postMessage(m)
}
function KJ(u, t, s, q) {
    var m = null,
        o = 0,
        n = 0,
        g = null,
        k = 0,
        e = 0,
        c = 0,
        i = 0,
        a = null
    m = HEAP8
    o = HEAP32[(8 + s) >> 2] | 0
    n = HEAP32[(4 + s) >> 2] | 0
    g = String()
    if ((n | 0) !== 0) {
        k = 0
        while (1) {
            c = m[(o + k) | 0] | 0
            if ((c & 255) !== 0) {
                i = c & 255
                if (c << 24 > -16777216) {
                    e = i
                } else if ((c & 255) < 192) {
                    e = ((i & 63) + (e << 6)) | 0
                } else if ((c & 255) < 224) {
                    e = i & 31
                } else if ((c & 255) < 240) {
                    e = i & 15
                } else {
                    e = i & 7
                }
                k = (k + 1) | 0
                a: {
                    if ((k | 0) !== (n | 0)) if ((m[(o + k) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) g = g.concat(String.fromCharCode(e))
                    else {
                        g = g.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        g = g.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((k | 0) !== (n | 0)) continue
            }
            break
        }
    }
    m = HEAP8
    o = HEAP32[(8 + q) >> 2] | 0
    n = HEAP32[(4 + q) >> 2] | 0
    a = String()
    if ((n | 0) !== 0) {
        k = 0
        while (1) {
            c = m[(o + k) | 0] | 0
            if ((c & 255) !== 0) {
                i = c & 255
                if (c << 24 > -16777216) {
                    e = i
                } else if ((c & 255) < 192) {
                    e = ((i & 63) + (e << 6)) | 0
                } else if ((c & 255) < 224) {
                    e = i & 31
                } else if ((c & 255) < 240) {
                    e = i & 15
                } else {
                    e = i & 7
                }
                k = (k + 1) | 0
                a: {
                    if ((k | 0) !== (n | 0)) if ((m[(o + k) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) a = a.concat(String.fromCharCode(e))
                    else {
                        a = a.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((k | 0) !== (n | 0)) continue
            }
            break
        }
    }
    m = { type: 63, replyType: 62, tid: t, devId: HEAP32[(36 + u) >> 2] | 0, oldPath: g, newPath: a }
    postMessage(m)
}
function aru(u, t, s, q, r, o) {
    var g = 0,
        m = 0,
        n = null,
        k = 0,
        c = 0,
        a = null,
        i = 0,
        e = 0
    n = HEAP8
    k = HEAP32[(8 + t) >> 2] | 0
    c = HEAP32[(4 + t) >> 2] | 0
    a = String()
    if ((c | 0) !== 0) {
        i = 0
        while (1) {
            g = n[(k + i) | 0] | 0
            if ((g & 255) !== 0) {
                m = g & 255
                if (g << 24 > -16777216) {
                    e = m
                } else if ((g & 255) < 192) {
                    e = ((m & 63) + (e << 6)) | 0
                } else if ((g & 255) < 224) {
                    e = m & 31
                } else if ((g & 255) < 240) {
                    e = m & 15
                } else {
                    e = m & 7
                }
                i = (i + 1) | 0
                a: {
                    if ((i | 0) !== (c | 0)) if ((n[(k + i) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) a = a.concat(String.fromCharCode(e))
                    else {
                        a = a.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((i | 0) !== (c | 0)) continue
            }
            break
        }
    }
    n = c5(q, r)
    k = HEAP32[814992] | 0
    while (1) {
        c = HEAP32[(12 + k) >> 2] | 0
        if ((c | 0) != (0 | 0))
            while (1) {
                if ((HEAP32[(436 + c) >> 2] | 0) === (u | 0)) {
                    k = HEAP32[(472 + c) >> 2] | 0
                    n = { type: 70, replyType: 71, tid: u, path: a, permType: s, value: n, devId: o, uid: HEAP32[(9608 + k) >> 2] | 0, gid: HEAP32[(9608 + k) >> 2] | 0 }
                    postMessage(n)
                    return
                }
                c = HEAP32[(488 + c) >> 2] | 0
                if ((c | 0) != (0 | 0)) continue
                break
            }
        k = HEAP32[(92 + k) >> 2] | 0
        continue
    }
}
function KE(u, t, s, q, o) {
    var g = 0,
        m = 0,
        n = null,
        k = 0,
        c = 0,
        a = null,
        i = 0,
        e = 0
    n = HEAP8
    k = HEAP32[(8 + t) >> 2] | 0
    c = HEAP32[(4 + t) >> 2] | 0
    a = String()
    if ((c | 0) !== 0) {
        i = 0
        while (1) {
            g = n[(k + i) | 0] | 0
            if ((g & 255) !== 0) {
                m = g & 255
                if (g << 24 > -16777216) {
                    e = m
                } else if ((g & 255) < 192) {
                    e = ((m & 63) + (e << 6)) | 0
                } else if ((g & 255) < 224) {
                    e = m & 31
                } else if ((g & 255) < 240) {
                    e = m & 15
                } else {
                    e = m & 7
                }
                i = (i + 1) | 0
                a: {
                    if ((i | 0) !== (c | 0)) if ((n[(k + i) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) a = a.concat(String.fromCharCode(e))
                    else {
                        a = a.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((i | 0) !== (c | 0)) continue
            }
            break
        }
    }
    n = new Number(+(q >>> 0))
    k = HEAP32[814992] | 0
    while (1) {
        c = HEAP32[(12 + k) >> 2] | 0
        if ((c | 0) != (0 | 0))
            while (1) {
                if ((HEAP32[(436 + c) >> 2] | 0) === (u | 0)) {
                    k = HEAP32[(472 + c) >> 2] | 0
                    n = { type: 70, replyType: 71, tid: u, path: a, permType: s, value: n, devId: o, uid: HEAP32[(9608 + k) >> 2] | 0, gid: HEAP32[(9608 + k) >> 2] | 0 }
                    postMessage(n)
                    return
                }
                c = HEAP32[(488 + c) >> 2] | 0
                if ((c | 0) != (0 | 0)) continue
                break
            }
        k = HEAP32[(92 + k) >> 2] | 0
        continue
    }
}
function KB(t, s, q, o, n, m) {
    var x = 0,
        u = 0,
        e = 0,
        i = 0,
        k = null,
        a = null,
        g = 0,
        c = 0
    k = HEAP8
    x = HEAP32[(8 + q) >> 2] | 0
    u = HEAP32[(4 + q) >> 2] | 0
    a = String()
    if ((u | 0) !== 0) {
        g = 0
        while (1) {
            e = k[(x + g) | 0] | 0
            if ((e & 255) !== 0) {
                i = e & 255
                if (e << 24 > -16777216) {
                    c = i
                } else if ((e & 255) < 192) {
                    c = ((i & 63) + (c << 6)) | 0
                } else if ((e & 255) < 224) {
                    c = i & 31
                } else if ((e & 255) < 240) {
                    c = i & 15
                } else {
                    c = i & 7
                }
                g = (g + 1) | 0
                a: {
                    if ((g | 0) !== (u | 0)) if ((k[(x + g) | 0] & 192) === 128) break a
                    if (c >>> 0 < 65536) a = a.concat(String.fromCharCode(c))
                    else {
                        a = a.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((c & 1023) | 56320))
                    }
                }
                if ((g | 0) !== (u | 0)) continue
            }
            break
        }
    }
    k = { type: 66, replyType: 62, tid: s, path: a, permType: o, devId: HEAP32[(36 + t) >> 2] | 0, uid: n, gid: m }
    postMessage(k)
}
function Ia(c, a) {
    var e = null
    e = { type: 61, replyType: 21, tid: 0, fd: c, permType: a }
    postMessage(e)
}
function ahF(u, t, s, q, o) {
    var g = 0,
        m = 0,
        n = null,
        k = 0,
        c = 0,
        a = null,
        i = 0,
        e = 0
    n = HEAP8
    k = HEAP32[(8 + t) >> 2] | 0
    c = HEAP32[(4 + t) >> 2] | 0
    a = String()
    if ((c | 0) !== 0) {
        i = 0
        while (1) {
            g = n[(k + i) | 0] | 0
            if ((g & 255) !== 0) {
                m = g & 255
                if (g << 24 > -16777216) {
                    e = m
                } else if ((g & 255) < 192) {
                    e = ((m & 63) + (e << 6)) | 0
                } else if ((g & 255) < 224) {
                    e = m & 31
                } else if ((g & 255) < 240) {
                    e = m & 15
                } else {
                    e = m & 7
                }
                i = (i + 1) | 0
                a: {
                    if ((i | 0) !== (c | 0)) if ((n[(k + i) | 0] & 192) === 128) break a
                    if (e >>> 0 < 65536) a = a.concat(String.fromCharCode(e))
                    else {
                        a = a.concat(String.fromCharCode(((e - 65536) >>> 10) | 55296))
                        a = a.concat(String.fromCharCode((e & 1023) | 56320))
                    }
                }
                if ((i | 0) !== (c | 0)) continue
            }
            break
        }
    }
    k = HEAP32[814992] | 0
    while (1) {
        c = HEAP32[(12 + k) >> 2] | 0
        if ((c | 0) != (0 | 0))
            while (1) {
                if ((HEAP32[(436 + c) >> 2] | 0) === (u | 0)) {
                    k = HEAP32[(472 + c) >> 2] | 0
                    n = { type: 19, replyType: 20, tid: u, path: a, flags: s, permType: q, devId: o, uid: HEAP32[(9608 + k) >> 2] | 0, gid: HEAP32[(9620 + k) >> 2] | 0 }
                    postMessage(n)
                    return
                }
                c = HEAP32[(488 + c) >> 2] | 0
                if ((c | 0) != (0 | 0)) continue
                break
            }
        k = HEAP32[(92 + k) >> 2] | 0
        continue
    }
}
function ajK(a) {
    var c = 0
    c = HEAP32[815260] | 0
    if ((HEAP32[(500 + c) >> 2] | 0) !== 0) {
        HEAP32[(500 + c) >> 2] = 0
        ie(a | 0)
    }
}
function oB(c) {
    var g = null,
        a = 0,
        e = null
    a = HEAP32[(472 + (HEAP32[815260] | 0)) >> 2] | 0
    a = adW(HEAP32[(9608 + a) >> 2] | 0, HEAP32[(9620 + a) >> 2] | 0, HEAP32[(8 + a) >> 2] | 0) | 0
    oA(a | 0, c | 0)
    oA(c | 0, a | 0)
    e = fj
    a = HEAP32[(88 + a) >> 2] | 0
    e = e[(0 + a) | 0].port2
    g = { type: 90, localPort: HEAP32[(64 + c) >> 2] | 0, arg1: e }
    postMessage(g, new Array(e))
}
function adV(i) {
    var e = null,
        g = null,
        c = null,
        a = 0
    e = new MessageChannel()
    g = e.port1
    c = [{ a0: 0, a1: null }]
    c[0].a0 = i | 0
    c[0].a1 = e
    c = a7h(adT, c[0])
    g.onmessage = c
    a = fj.indexOf(null)
    g = fj
    if ((a | 0) < 0) {
        a = g.length
        ;+fj.push(e)
        return a | 0
    }
    g[(0 + a) | 0] = e
    return a | 0
}
function adT(c, a) {
    adR(c.a0 | 0, a)
}
function adR(x, u) {
    var t = null,
        g = 0,
        n = null,
        s = 0,
        m = null,
        q = null,
        k = null,
        c = 0,
        i = 0,
        e = 0,
        a = 0,
        o = 0
    t = dX()
    m = (-144 + t) | 0
    bc(m)
    q = u.data
    if (q !== null) {
        k = q.data
        g = (136 + m) | 0
        un(g, k.length)
        n = HEAP8
        c = rZ(g) | 0
        i = k.length
        if ((i | 0) !== 0) {
            s = i & 7
            if ((s | 0) !== 0) {
                o = 0
                a = 0
                e = 0
                while (1) {
                    n[(c + a) | 0] = k[(0 + e) | 0] | 0
                    o = (o + 1) | 0
                    a = (a + 1) | 0
                    e = (e + 1) | 0
                    if ((o | 0) !== (s | 0)) continue
                    break
                }
            } else {
                a = 0
                e = 0
            }
            if (i >>> 0 >= 8)
                while (1) {
                    n[(c + a) | 0] = k[(0 + e) | 0] | 0
                    n[(((c + a) | 0) + 1) | 0] = k[(((0 + e) | 0) + 1) | 0] | 0
                    n[(((c + a) | 0) + 2) | 0] = k[(((0 + e) | 0) + 2) | 0] | 0
                    n[(((c + a) | 0) + 3) | 0] = k[(((0 + e) | 0) + 3) | 0] | 0
                    n[(((c + a) | 0) + 4) | 0] = k[(((0 + e) | 0) + 4) | 0] | 0
                    n[(((c + a) | 0) + 5) | 0] = k[(((0 + e) | 0) + 5) | 0] | 0
                    n[(((c + a) | 0) + 6) | 0] = k[(((0 + e) | 0) + 6) | 0] | 0
                    n[(((c + a) | 0) + 7) | 0] = k[(((0 + e) | 0) + 7) | 0] | 0
                    a = (a + 8) | 0
                    if (n !== n || ((c + i) | 0) !== ((c + a) | 0)) {
                        e = (e + 8) | 0
                        continue
                    }
                    break
                }
        }
        c = m | 0
        i = q.addr
        adN(c, i, q.port)
        adM(HEAP32[(72 + x) >> 2] | 0, g, c)
        qt(g)
    } else {
        console.warn("TODO close socket\n")
        Gu(x | 0)
    }
    m = [null]
    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
        HEAP8[(27 + 3185160) >> 0] = 1
        q = gA
        m[0] = 0
        k = m[0]
        q.postMessage(k)
    }
    bc(t)
}
function adC(m, k, l, i, g) {
    var n = null,
        c = null,
        a = 0,
        e = null
    c = k
    a = l
    c = new Uint8Array(c.subarray(+(a >>> 0), +((a + i) >>> 0)))
    a = HEAP16[(2 + g) >> 1] | 0
    n = { addr: HEAP32[(4 + g) >> 2] | 0, port: ((a << 8) + ((a & 65535) >>> 8)) & 65535, data: c }
    e = fj
    a = HEAP32[(88 + m) >> 2] | 0
    e = e[(0 + a) | 0].port1
    e.postMessage(n, new Array(c.buffer))
}
function oy(a) {
    var g = null,
        i = null,
        e = null,
        c = 0
    g = new MessageChannel()
    i = g.port1
    e = [{ a0: 0, a1: null }]
    e[0].a0 = a | 0
    e[0].a1 = g
    e = a7h(adg, e[0])
    i.onmessage = e
    c = fj.indexOf(null)
    i = fj
    if ((c | 0) < 0) {
        c = i.length
        ;+fj.push(g)
        return c | 0
    }
    i[(0 + c) | 0] = g
    return c | 0
}
function adi(g, e, c) {
    var k = 0,
        i = null,
        a = null
    a = fj
    k = HEAP32[(88 + g) >> 2] | 0
    a = a[(0 + k) | 0].port2
    i = { type: 88, tid: HEAP32[(436 + c) >> 2] | 0, localPort: e, port: HEAP32[(64 + g) >> 2] | 0, addr: HEAP32[(68 + g) >> 2] | 0, arg1: a }
    postMessage(i, new Array(a))
}
function adg(c, a) {
    ade(c.a0 | 0, a)
}
function ade(u, t) {
    var s = null,
        g = 0,
        m = 0,
        q = 0,
        o = null,
        e = null,
        k = null,
        i = 0,
        c = 0,
        a = 0,
        n = 0
    s = dX()
    e = (-8 + s) | 0
    bc(e)
    k = t.data
    a: {
        if (k !== null) {
            g = e | 0
            un(g, k.length)
            e = HEAP8
            i = rZ(g) | 0
            m = k.length
            if ((m | 0) !== 0) {
                q = m & 7
                if ((q | 0) !== 0) {
                    n = 0
                    a = 0
                    c = 0
                    while (1) {
                        e[(i + a) | 0] = k[(0 + c) | 0] | 0
                        n = (n + 1) | 0
                        a = (a + 1) | 0
                        c = (c + 1) | 0
                        if ((n | 0) !== (q | 0)) continue
                        break
                    }
                } else {
                    a = 0
                    c = 0
                }
                if (m >>> 0 >= 8)
                    while (1) {
                        e[(i + a) | 0] = k[(0 + c) | 0] | 0
                        e[(((i + a) | 0) + 1) | 0] = k[(((0 + c) | 0) + 1) | 0] | 0
                        e[(((i + a) | 0) + 2) | 0] = k[(((0 + c) | 0) + 2) | 0] | 0
                        e[(((i + a) | 0) + 3) | 0] = k[(((0 + c) | 0) + 3) | 0] | 0
                        e[(((i + a) | 0) + 4) | 0] = k[(((0 + c) | 0) + 4) | 0] | 0
                        e[(((i + a) | 0) + 5) | 0] = k[(((0 + c) | 0) + 5) | 0] | 0
                        e[(((i + a) | 0) + 6) | 0] = k[(((0 + c) | 0) + 6) | 0] | 0
                        e[(((i + a) | 0) + 7) | 0] = k[(((0 + c) | 0) + 7) | 0] | 0
                        a = (a + 8) | 0
                        if (e !== e || ((i + m) | 0) !== ((i + a) | 0)) {
                            c = (c + 8) | 0
                            continue
                        }
                        break
                    }
            }
            i = add(u | 0, g) | 0
            qt(g)
            if ((i | 0) <= -1) break a
        } else Gu(u | 0)
        e = [null]
        if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
            HEAP8[(27 + 3185160) >> 0] = 1
            k = gA
            e[0] = 0
            o = e[0]
            k.postMessage(o)
        }
    }
    bc(s)
}
function ac6(k, i, j, g) {
    var c = null,
        a = 0,
        e = null
    c = i
    a = j
    c = new Uint8Array(c.subarray(+(a >>> 0), +((a + g) >>> 0)))
    e = fj
    a = HEAP32[(88 + k) >> 2] | 0
    e = e[(0 + a) | 0].port1
    e.postMessage(c, new Array(c.buffer))
}
function Z9(q, r, o) {
    var e = 0,
        n = null,
        m = 0,
        k = 0,
        a = 0,
        g = 0,
        c = 0,
        i = 0
    if ((o | 0) !== 0) {
        g = o
        a = 0
        while (1) {
            e = g >>> 0 < 65536 ? g | 0 : 65536 | 0
            n = new Uint8Array(+(e >>> 0))
            crypto.getRandomValues(n)
            m = (a + e) | 0
            if ((e | 0) !== 0) {
                k = e & 7
                if ((k | 0) !== 0) {
                    i = 0
                    c = 0
                    while (1) {
                        q[(r + a) | 0] = n[(0 + c) | 0] | 0
                        i = (i + 1) | 0
                        a = (a + 1) | 0
                        c = (c + 1) | 0
                        if ((i | 0) !== (k | 0)) continue
                        break
                    }
                } else {
                    c = 0
                }
                if (e >>> 0 >= 8)
                    while (1) {
                        q[(r + a) | 0] = n[(0 + c) | 0] | 0
                        q[(((r + a) | 0) + 1) | 0] = n[(((0 + c) | 0) + 1) | 0] | 0
                        q[(((r + a) | 0) + 2) | 0] = n[(((0 + c) | 0) + 2) | 0] | 0
                        q[(((r + a) | 0) + 3) | 0] = n[(((0 + c) | 0) + 3) | 0] | 0
                        q[(((r + a) | 0) + 4) | 0] = n[(((0 + c) | 0) + 4) | 0] | 0
                        q[(((r + a) | 0) + 5) | 0] = n[(((0 + c) | 0) + 5) | 0] | 0
                        q[(((r + a) | 0) + 6) | 0] = n[(((0 + c) | 0) + 6) | 0] | 0
                        q[(((r + a) | 0) + 7) | 0] = n[(((0 + c) | 0) + 7) | 0] | 0
                        a = (a + 8) | 0
                        if (q !== q || ((r + m) | 0) !== ((r + a) | 0)) {
                            c = (c + 8) | 0
                            continue
                        }
                        break
                    }
            }
            g = (g - e) | 0
            if ((g | 0) !== 0) {
                a = m
                continue
            }
            break
        }
    }
}
function rE() {
    return +performance.now()
}
function AX(e) {
    var m = -0,
        k = -0,
        i = 0,
        g = null,
        c = null,
        a = 0
    m = +HEAPF64[(520 + (HEAP32[815260] | 0)) >> 3]
    k = +HEAPF64[398492]
    a = 3185160
    i = ~~(m - k)
    if (((HEAP32[(12 + a) >> 2] | 0) - i) >>> 0 > 50) {
        g = (8 + a) | 0
        c = HEAP32
        a = g >> 2
        Atomics.store(c, (a + 1) | 0, (i + 50) | 0)
        Atomics.store(c, (a + 2) | 0, 0)
        if ((Atomics.notify(c, a, 1) | 0) === 0) {
            Atomics.store(c, a, 1)
            Atomics.notify(c, a, 1)
        }
    }
    if ((HEAP32[(592 + e) >> 2] | 0) !== 0) HEAP32[(592 + e) >> 2] = 0
}
function yt(g, e) {
    var i = null,
        a = 0,
        c = null
    a = HEAP32[(472 + g) >> 2] | 0
    a = W0(HEAP32[(9608 + a) >> 2] | 0, HEAP32[(9620 + a) >> 2] | 0, HEAP32[(8 + a) >> 2] | 0) | 0
    oA(e | 0, a | 0)
    oA(a | 0, e | 0)
    c = fj
    a = HEAP32[(88 + a) >> 2] | 0
    c = c[(0 + a) | 0].port2
    i = { type: 89, tid: HEAP32[(436 + g) >> 2] | 0, localPort: HEAP32[(64 + e) >> 2] | 0, arg1: c }
    postMessage(i, new Array(c))
}
function acc(c, a) {
    var e = null
    e = { type: 77, pid: c, value: a }
    postMessage(e)
}
function fZ() {
    var c = null,
        a = null
    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
        HEAP8[(27 + 3185160) >> 0] = 1
        c = gA
        a = [null]
        a[0] = 0
        a = a[0]
        c.postMessage(a)
    }
}
function abO(i, g) {
    var e = 0,
        m = null,
        k = null,
        c = null,
        a = 0
    e = HEAP32[814992] | 0
    while (1) {
        a = HEAP32[(12 + e) >> 2] | 0
        if ((a | 0) != (0 | 0))
            while (1) {
                if ((HEAP32[(436 + a) >> 2] | 0) === (i | 0)) {
                    HEAP32[a >> 2] = g
                    if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
                    HEAP32[(544 + a) >> 2] = g
                    m = [null]
                    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
                        HEAP8[(27 + 3185160) >> 0] = 1
                        k = gA
                        m[0] = 0
                        c = m[0]
                        k.postMessage(c)
                    }
                    return
                }
                a = HEAP32[(488 + a) >> 2] | 0
                if ((a | 0) != (0 | 0)) continue
                break
            }
        e = HEAP32[(92 + e) >> 2] | 0
        continue
    }
}
function abL(c, a) {
    var e = null
    e = { type: 55, index: c, value: a }
    postMessage(e)
}
function abK(g) {
    var e = 0,
        k = null,
        i = null,
        c = null,
        a = 0
    e = HEAP32[814992] | 0
    while (1) {
        a = HEAP32[(12 + e) >> 2] | 0
        if ((a | 0) != (0 | 0))
            while (1) {
                if ((HEAP32[(436 + a) >> 2] | 0) === (g | 0)) {
                    if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
                    k = [null]
                    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
                        HEAP8[(27 + 3185160) >> 0] = 1
                        i = gA
                        k[0] = 0
                        c = k[0]
                        i.postMessage(c)
                    }
                    return
                }
                a = HEAP32[(488 + a) >> 2] | 0
                if ((a | 0) != (0 | 0)) continue
                break
            }
        e = HEAP32[(92 + e) >> 2] | 0
        continue
    }
}
function abJ(g) {
    var e = 0,
        k = null,
        i = null,
        c = null,
        a = 0
    e = HEAP32[814992] | 0
    while (1) {
        a = HEAP32[(12 + e) >> 2] | 0
        if ((a | 0) != (0 | 0))
            while (1) {
                if ((HEAP32[(436 + a) >> 2] | 0) === (g | 0)) {
                    if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
                    k = [null]
                    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
                        HEAP8[(27 + 3185160) >> 0] = 1
                        i = gA
                        k[0] = 0
                        c = k[0]
                        i.postMessage(c)
                    }
                    return
                }
                a = HEAP32[(488 + a) >> 2] | 0
                if ((a | 0) != (0 | 0)) continue
                break
            }
        e = HEAP32[(92 + e) >> 2] | 0
        continue
    }
}
function abI(bI, bC, bp, bl, bh, a0, aL, aF, az, $, V, L) {
    var F = null,
        q = 0,
        O = 0,
        A = 0,
        o = 0,
        s = 0,
        af = 0,
        am = 0,
        t = -0,
        u = 0,
        b0 = null,
        J = null,
        a = null,
        c = 0,
        g = 0,
        i = 0,
        x = 0,
        e = 0,
        m = 0,
        n = 0,
        k = 0
    F = dX()
    a = (-104 + F) | 0
    bc(a)
    c = HEAP32[814992] | 0
    a: if ((c | 0) != (0 | 0)) {
        while (1) {
            g = HEAP32[(12 + c) >> 2] | 0
            if ((g | 0) != (0 | 0))
                while (1) {
                    if ((HEAP32[(436 + g) >> 2] | 0) === (bI | 0)) break a
                    g = HEAP32[(488 + g) >> 2] | 0
                    if ((g | 0) != (0 | 0)) continue
                    break
                }
            c = HEAP32[(92 + c) >> 2] | 0
            if ((c | 0) != (0 | 0)) continue
            break
        }
        g = 0 | 0
    } else {
        g = 0 | 0
    }
    c = (88 + a) | 0
    abH(c)
    q = (72 + a) | 0
    hz(q, bC)
    O = op(bp) | 0
    i = (64 + a) | 0
    Nf(i, q)
    b1(c, i)
    if ((a0 | 0) !== 0) {
        if (((a0 & 61440) | 0) === 32768) {
            if (az) {
                A = ((a0 >>> 2) & 73) | a0
            } else {
                A = a0
            }
        } else {
            A = a0
        }
        o = (48 + a) | 0
        uF(o)
        x = A & 61440
        if ((x | 0) === 40960) {
            e = (32 + a) | 0
            hz(e, $)
            uq(o, e) | 0
            f9(e)
        }
        e = (24 + a) | 0
        HEAP32[e >> 2] = bp
        HEAP32[(4 + e) >> 2] = bh
        i = (16 + a) | 0
        HEAP32[i >> 2] = 0
        HEAP32[(4 + i) >> 2] = 0
        s = HEAP32[(4 + c) >> 2] | 0
        m = (HEAP32[c >> 2] | 0 | 0) == (s | 0) ? 1 : 0
        if (m) {
            am = 0
            af = 0
        } else {
            HEAP32[i >> 2] = bp
            HEAP32[(4 + i) >> 2] = bl
            am = bp
            af = bl
        }
        t = +Date.now()
        n = ~~((t < 0 ? -t : t) % 4294967296)
        u = t < 0 ? -n | 0 : n | 0
        k = dT(2133472 | 0, e, u) | 0
        if ((k | 0) == (0 | 0)) {
            n = (8 + a) | 0
            HEAP32[n >> 2] = 0
            HEAP32[(4 + n) >> 2] = 0
            k = a | 0
            Nf(k, o)
            if ((x | 0) === 16384) {
                if (!m) abG(k, (-8 + s) | 0) | 0
                HEAP32[n >> 2] = am
                HEAP32[(4 + n) >> 2] = af
            }
            x = rT(O | 0, n, e, A, aL, aF, k, u, V, L) | 0
            lO(e, x | 0)
            k = x | 0
        }
        a: {
            if (m) {
                HEAP32[(48 + O) >> 2] = k
                tc(k | 0)
            } else {
                m = dT(2133472 | 0, i, u) | 0
                abF(m | 0)
                pf(m, (-8 + s) | 0, e)
                if ((HEAP8[(64 + m) >> 0] & 255) === 0)
                    if ((abE((104 + m) | 0) | 0) >>> 0 > 3) {
                        tc(m | 0)
                        a = EX(c, ((EY(c | 0) | 0) - 1) | 0)
                        a = { type: 68, replyType: 69, tid: HEAP32[(436 + g) >> 2] | 0, path: a, devId: bp, inodeId: bl }
                        postMessage(a)
                        break a
                    }
            }
            if ((HEAP32[(592 + g) >> 2] | 0) !== 0) HEAP32[(592 + g) >> 2] = 0
            a = [null]
            if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
                HEAP8[(27 + 3185160) >> 0] = 1
                b0 = gA
                a[0] = 0
                J = a[0]
                b0.postMessage(J)
            }
        }
        f9(o)
    } else {
        a = EX(c, ((EY(c | 0) | 0) - 1) | 0)
        a = { type: 68, replyType: 69, tid: HEAP32[(436 + g) >> 2] | 0, path: a, devId: bp, inodeId: bl }
        postMessage(a)
    }
    f9(q)
    abD(c)
    bc(F)
}
function hz(e, c) {
    var q = null,
        m = null,
        k = 0,
        i = 0,
        a = 0,
        n = 0,
        o = 0,
        g = 0
    q = new TextEncoder().encode(c)
    uF(e | 0)
    abz(e | 0, q.length)
    i = HEAP32[(4 + e) >> 2] | 0
    if ((i | 0) !== 0) {
        m = HEAP8
        k = HEAP32[(8 + e) >> 2] | 0
        if (i >>> 0 < 4) {
            a = 0
        } else {
            n = i & -4
            o = 0
            a = 0
            while (1) {
                m[(k + a) | 0] = q[(0 + a) | 0] | 0
                g = (a + 1) | 0
                m[(k + g) | 0] = q[(0 + g) | 0] | 0
                g = (a + 2) | 0
                m[(k + g) | 0] = q[(0 + g) | 0] | 0
                g = (a + 3) | 0
                m[(k + g) | 0] = q[(0 + g) | 0] | 0
                o = (o + 4) | 0
                a = (a + 4) | 0
                if ((o | 0) !== (n | 0)) continue
                break
            }
        }
        i &= 3
        if ((i | 0) !== 0) {
            n = 0
            while (1) {
                m[(k + a) | 0] = q[(0 + a) | 0] | 0
                n = (n + 1) | 0
                if ((n | 0) !== (i | 0)) {
                    a = (a + 1) | 0
                    continue
                }
                break
            }
        }
    }
}
function EX(q, o) {
    var u = null,
        t = null,
        s = 0,
        e = 0,
        k = 0,
        i = null,
        n = 0,
        m = 0,
        a = null,
        g = 0,
        c = 0
    i = String()
    if ((o | 0) === 0) return i
    u = String.fromCharCode(47)
    n = 0
    while (1) {
        m = ((n << 3) + (HEAP32[q >> 2] | 0)) | 0
        t = HEAP8
        s = HEAP32[m >> 2] | 0
        m = HEAP32[(4 + m) >> 2] | 0
        a = String()
        if ((m | 0) !== 0) {
            g = 0
            while (1) {
                e = t[(s + g) | 0] | 0
                if ((e & 255) !== 0) {
                    k = e & 255
                    if (e << 24 > -16777216) {
                        c = k
                    } else if ((e & 255) < 192) {
                        c = ((k & 63) + (c << 6)) | 0
                    } else if ((e & 255) < 224) {
                        c = k & 31
                    } else if ((e & 255) < 240) {
                        c = k & 15
                    } else {
                        c = k & 7
                    }
                    g = (g + 1) | 0
                    a: {
                        if ((g | 0) !== (m | 0)) if ((t[(s + g) | 0] & 192) === 128) break a
                        if (c >>> 0 < 65536) a = a.concat(String.fromCharCode(c))
                        else {
                            a = a.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                            a = a.concat(String.fromCharCode((c & 1023) | 56320))
                        }
                    }
                    if ((g | 0) !== (m | 0)) continue
                }
                break
            }
        }
        i = i.concat(u, a)
        n = (n + 1) | 0
        if ((n | 0) !== (o | 0)) continue
        break
    }
    return i
}
function aby(t, s, q, u, x, A, F, J, L) {
    var o = null,
        m = -0,
        V = null,
        n = null,
        O = 0,
        i = null,
        a = 0,
        g = 0,
        e = 0,
        k = 0,
        c = 0
    o = dX()
    i = (-40 + o) | 0
    bc(i)
    a = HEAP32[814992] | 0
    a: if ((a | 0) != (0 | 0)) {
        while (1) {
            g = HEAP32[(12 + a) >> 2] | 0
            if ((g | 0) != (0 | 0))
                while (1) {
                    if ((HEAP32[(436 + g) >> 2] | 0) === (t | 0)) break a
                    g = HEAP32[(488 + g) >> 2] | 0
                    if ((g | 0) != (0 | 0)) continue
                    break
                }
            a = HEAP32[(92 + a) >> 2] | 0
            if ((a | 0) != (0 | 0)) continue
            break
        }
        g = 0 | 0
    } else {
        g = 0 | 0
    }
    a = (32 + i) | 0
    HEAP32[a >> 2] = q
    HEAP32[(4 + a) >> 2] = u
    m = +Date.now()
    e = ~~((m < 0 ? -m : m) % 4294967296)
    k = m < 0 ? -e | 0 : e | 0
    e = dT(2133472 | 0, a, k) | 0
    if ((e | 0) == (0 | 0)) {
        O = op(q) | 0
        c = (24 + i) | 0
        HEAP32[c >> 2] = 0
        HEAP32[(4 + c) >> 2] = 0
        e = (16 + i) | 0
        EW(e)
        k = rT(O | 0, c, a, x, A, F, e, k, J, L) | 0
        lO(a, k | 0)
        e = k | 0
    }
    c = x & 61440
    if (c === 40960) {
        c = i | 0
        hz(c, s)
        uq((68 + e) | 0, c) | 0
        f9(c)
    } else if (c === 49152) HEAP32[(80 + e) >> 2] = ~~+s | 0
    HEAP32[g >> 2] = 0
    if ((HEAP32[(592 + g) >> 2] | 0) !== 0) HEAP32[(592 + g) >> 2] = 0
    i = [null]
    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
        HEAP8[(27 + 3185160) >> 0] = 1
        V = gA
        i[0] = 0
        n = i[0]
        V.postMessage(n)
    }
    bc(o)
}
function abx(k, i, g) {
    var n = null,
        m = null,
        e = null,
        c = 0,
        a = 0
    c = HEAP32[814992] | 0
    a: if ((c | 0) != (0 | 0)) {
        while (1) {
            a = HEAP32[(12 + c) >> 2] | 0
            if ((a | 0) != (0 | 0))
                while (1) {
                    if ((HEAP32[(436 + a) >> 2] | 0) === (k | 0)) break a
                    a = HEAP32[(488 + a) >> 2] | 0
                    if ((a | 0) != (0 | 0)) continue
                    break
                }
            c = HEAP32[(92 + c) >> 2] | 0
            if ((c | 0) != (0 | 0)) continue
            break
        }
        a = 0 | 0
    } else {
        a = 0 | 0
    }
    HEAP32[(52 + (op(i) | 0)) >> 2] = (g | 0) !== 0 ? 1 | 0 : 2 | 0
    if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
    n = [null]
    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
        HEAP8[(27 + 3185160) >> 0] = 1
        m = gA
        n[0] = 0
        e = n[0]
        m.postMessage(e)
    }
}
function abw(s, q, o, n) {
    var m = null,
        e = 0,
        t = null,
        k = null,
        i = null,
        a = 0,
        c = 0,
        g = 0
    m = dX()
    i = (-32 + m) | 0
    bc(i)
    a = HEAP32[814992] | 0
    a: if ((a | 0) != (0 | 0)) {
        while (1) {
            c = HEAP32[(12 + a) >> 2] | 0
            if ((c | 0) != (0 | 0))
                while (1) {
                    if ((HEAP32[(436 + c) >> 2] | 0) === (s | 0)) break a
                    c = HEAP32[(488 + c) >> 2] | 0
                    if ((c | 0) != (0 | 0)) continue
                    break
                }
            a = HEAP32[(92 + a) >> 2] | 0
            if ((a | 0) != (0 | 0)) continue
            break
        }
        c = 0 | 0
    } else {
        c = 0 | 0
    }
    a = (16 + i) | 0
    uJ(a)
    if ((n.length | 0) !== 0) {
        e = i | 0
        g = 0
        while (1) {
            hz(e, n[+(g >>> 0)])
            qK(a, e)
            f9(e)
            g = (g + 1) | 0
            if (g >>> 0 < n.length >>> 0) continue
            break
        }
    }
    abv(q, o, a)
    if ((HEAP32[(592 + c) >> 2] | 0) !== 0) HEAP32[(592 + c) >> 2] = 0
    i = [null]
    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
        HEAP8[(27 + 3185160) >> 0] = 1
        t = gA
        i[0] = 0
        k = i[0]
        t.postMessage(k)
    }
    ny(a)
    bc(m)
}
function abs(t, s, q, u, x, A, F, J, L) {
    var o = null,
        m = -0,
        V = null,
        n = null,
        O = 0,
        i = null,
        a = 0,
        c = 0,
        e = 0,
        k = 0,
        g = 0
    o = dX()
    i = (-24 + o) | 0
    bc(i)
    a = HEAP32[814992] | 0
    a: if ((a | 0) != (0 | 0)) {
        while (1) {
            c = HEAP32[(12 + a) >> 2] | 0
            if ((c | 0) != (0 | 0))
                while (1) {
                    if ((HEAP32[(436 + c) >> 2] | 0) === (t | 0)) break a
                    c = HEAP32[(488 + c) >> 2] | 0
                    if ((c | 0) != (0 | 0)) continue
                    break
                }
            a = HEAP32[(92 + a) >> 2] | 0
            if ((a | 0) != (0 | 0)) continue
            break
        }
        c = 0 | 0
    } else {
        c = 0 | 0
    }
    a = (16 + i) | 0
    HEAP32[a >> 2] = q
    HEAP32[(4 + a) >> 2] = u
    m = +Date.now()
    e = ~~((m < 0 ? -m : m) % 4294967296)
    k = m < 0 ? -e | 0 : e | 0
    e = dT(2133472 | 0, a, k) | 0
    if ((e | 0) == (0 | 0)) {
        O = op(q) | 0
        g = (8 + i) | 0
        HEAP32[g >> 2] = 0
        HEAP32[(4 + g) >> 2] = 0
        e = i | 0
        EW(e)
        k = rT(O | 0, g, a, x, A, F, e, k, J, L) | 0
        lO(a, k | 0)
        e = k | 0
    }
    g = K(24) | 0
    abq(g, s)
    HEAP32[(124 + e) >> 2] = g
    HEAP32[(544 + c) >> 2] = 0
    if ((HEAP32[(592 + c) >> 2] | 0) !== 0) HEAP32[(592 + c) >> 2] = 0
    i = [null]
    if ((HEAP8[(27 + 3185160) >> 0] & 255) === 0) {
        HEAP8[(27 + 3185160) >> 0] = 1
        V = gA
        i[0] = 0
        n = i[0]
        V.postMessage(n)
    }
    bc(o)
}
function ES(c, a) {
    var e = null
    e = { type: 34, tid: c, value: a }
    postMessage(e)
}
function abl(m, k, i) {
    var g = null,
        c = null,
        a = 0,
        e = -0
    e = +((i >>> 0 > 1 ? 50 | 0 : 1000 | 0) | 0) + m
    if (e > k) {
        e = k
    }
    g = (8 + 3185160) | 0
    c = HEAP32
    a = g >> 2
    Atomics.store(c, (a + 1) | 0, ~~(e - +HEAPF64[398492]))
    Atomics.store(c, (a + 2) | 0, 0)
    if ((Atomics.notify(c, a, 1) | 0) === 0) {
        Atomics.store(c, a, 1)
        Atomics.notify(c, a, 1)
    }
}
function rS(e) {
    var g = null,
        c = null,
        a = 0
    g = (8 + 3185160) | 0
    c = HEAP32
    a = g >> 2
    Atomics.store(c, (a + 1) | 0, e)
    Atomics.store(c, (a + 2) | 0, 0)
    if ((Atomics.notify(c, a, 1) | 0) === 0) {
        Atomics.store(c, a, 1)
        Atomics.notify(c, a, 1)
    }
}
function EG(c, a) {
    var e = null
    e = { type: 34, tid: c, value: a }
    postMessage(e)
}
function abc(a) {
    var c = null
    c = { type: 34, tid: a, value: null }
    HEAP8[3261312] = 1
    postMessage(c)
}
function ED(e, c) {
    var i = 0,
        g = null,
        a = null
    a = fj
    i = HEAP32[(88 + c) >> 2] | 0
    a = a[(0 + i) | 0].port2
    g = { type: 34, tid: e, value: a }
    postMessage(g, new Array(a))
}
function aa$(c, a) {
    var e = null
    e = { type: 34, tid: c, value: a }
    postMessage(e)
}
function aa_(c) {
    var g = 0,
        e = null,
        a = null
    g = uP() | 0
    a = [{ a0: 0 }]
    a[0].a0 = c | 0
    a = a7h(aa8, a[0])
    e = 2
    try {
        a()
    } catch (e) {
        if (e != "CheerpJContinue") {
            debugger
            console.log("Unexpected exit", e.stack)
            e()
        }
    }
    uO(g)
}
function aa8(c) {
    var a = 0
    a = c.a0 | 0
    MG(a | 0, HEAP32[(HEAP32[(472 + a) >> 2] | 0) >> 2] | 0, HEAP32[(36 + a) >> 2] | 0)
}
function EC() {
    var k = 0,
        m = null,
        e = -0,
        a = 0,
        c = 0,
        i = null,
        g = null
    HEAP8[3261312] = 0
    k = 3185160
    HEAP8[(27 + k) >> 0] = 0
    if ((HEAP8[(24 + k) >> 0] & 255) !== 0) HEAP8[(26 + k) >> 0] = 1
    else {
        e = +Date.now()
        abn()
        a = abm(e) | 0
        c = ~~((e < 0 ? -e : e) % 4294967296)
        abu(e < 0 ? -c | 0 : c | 0)
        if ((a | 0) != (0 | 0)) {
            if ((HEAP32[(592 + a) >> 2] | 0) !== 0) {
                i = (8 + k) | 0
                g = HEAP32
                c = i >> 2
                Atomics.store(g, (c + 1) | 0, ~~(+HEAPF64[(512 + a) >> 3] - +HEAPF64[398492]))
                Atomics.store(g, (c + 2) | 0, 1)
                if ((Atomics.notify(g, c, 1) | 0) === 0) {
                    Atomics.store(g, c, 1)
                    Atomics.notify(g, c, 1)
                }
                a = 0
                while (1) {
                    a = qb(a) | 0
                    if ((a | 0) !== 0) if ((HEAP32[k >> 2] | 0) >= 0) continue
                    break
                }
                if (HEAP8[3261308] | 0) {
                    HEAP8[3261308] = 0
                    if (((HEAP32[815331] & 2) | 0) !== 0) {
                        i = { type: 58, eventType: 1, value: 1 }
                        postMessage(i)
                    }
                }
            } else {
                a: {
                    while (1) {
                        aa4(a)
                        e = +Date.now()
                        e -= +HEAPF64[(520 + a) >> 3]
                        if (e < 50)
                            if ((HEAP32[(592 + a) >> 2] | 0) === 0) {
                                if ((HEAP8[(25 + k) >> 0] & 255) === 0) continue
                                HEAP32[815346] = a
                                break a
                            }
                        break
                    }
                    HEAPF64[(504 + a) >> 3] = e + +HEAPF64[(504 + a) >> 3]
                }
                tR(1)
                if (!(HEAP8[3261308] | 0)) {
                    HEAP8[3261308] = 1
                    if (((HEAP32[815331] & 2) | 0) !== 0) {
                        i = { type: 58, eventType: 1, value: 0 }
                        postMessage(i)
                    }
                }
                i = [null]
                if ((HEAP8[(27 + k) >> 0] & 255) === 0) {
                    HEAP8[(27 + k) >> 0] = 1
                    g = gA
                    i[0] = 0
                    m = i[0]
                    g.postMessage(m)
                }
            }
        } else {
            a = 0
            while (1) {
                a = qb(a) | 0
                if ((a | 0) !== 0) if ((HEAP32[k >> 2] | 0) >= 0) continue
                break
            }
            if (HEAP8[3261308] | 0) {
                HEAP8[3261308] = 0
                if (((HEAP32[815331] & 2) | 0) !== 0) {
                    i = { type: 58, eventType: 1, value: 1 }
                    postMessage(i)
                }
            }
        }
    }
}
function aa3(g, e) {
    var a = null,
        c = 0
    a = l2
    if (a === null) {
        a = new Array()
        l2 = a
        a = a
    }
    c = a.indexOf(null)
    a = l2
    if ((c | 0) < 0) {
        c = a.length
        ;+l2.push(e)
        QX(g | 0, c)
        return
    }
    a[(0 + c) | 0] = e
    QX(g | 0, c)
}
function v_() {
    return +Date.now()
}
function WA(e) {
    var c = 0,
        a = 0
    c = Wz(e | 0) | 0
    Wy(e | 0, HEAP32[(36 + (HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0)) >> 2] | 0, c)
    a = HEAP32[(16 + e) >> 2] | 0
    if ((a | 0) == (HEAP32[(20 + e) >> 2] | 0 | 0)) {
        console.log("Master clock: No events")
        return -1 | 0
    }
    return ((HEAP32[a >> 2] | 0) - c) | 0
}
function Ww() {
    return ~~+new Date().getSeconds() | 0
}
function Wv() {
    return ~~+new Date().getMinutes() | 0
}
function Wu() {
    return ~~+new Date().getHours() | 0
}
function Wt() {
    return ~~+new Date().getDay() | 0
}
function Ws() {
    return ~~+new Date().getDate() | 0
}
function Wr() {
    return ~~+new Date().getMonth() | 0
}
function Wq() {
    return ~~+new Date().getFullYear() | 0
}
function Wp() {
    return ~~+new Date().getFullYear() | 0
}
function v1() {
    return +performance.now()
}
function v0() {
    return +Date.now()
}
function kl() {
    ie(HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0)
}
function ru(a) {
    var c = null
    c = { type: 6, value: a }
    postMessage(c)
}
function Vx(a) {
    var c = null
    c = { type: 4, value: a }
    postMessage(c)
}
function Vw(a) {
    var c = null
    c = { type: 5, value: a }
    postMessage(c)
}
function vV(a) {
    Vh(a | 0)
}
function Vh(k) {
    var t = 0,
        i = 0,
        s = 0,
        q = 0,
        o = 0,
        a = 0,
        n = 0,
        g = 0,
        e = 0,
        m = null,
        c = 0
    t = HEAP8[(16 + k) >> 0] | 0
    i = (20 + k) | 0
    c = ((a62(HEAP8[(18 + k) >> 0] & 255, 12) | 0) + i) | 0
    s = HEAP8[(4 + c) >> 0] | 0
    c = HEAP8[(6 + c) >> 0] | 0
    q = HEAP8[(15 + k) >> 0] | 0
    o = HEAP8[(17 + k) >> 0] | 0
    a = HEAP32[(48 + k) >> 2] | 0
    n = HEAP8[(3 + a) >> 0] | 0
    g = (52 + k) | 0
    e = ((HEAP16[(6 + a) >> 1] | 0) + 1) & 65535
    aaj(g, HEAP32[(HEAP32[815258] | 0) >> 2] | 0, ((HEAP8[(2 + a) >> 0] & 255) << 16) | (HEAP16[(4 + a) >> 1] & 65535), e, ((n & 12) === 8 ? 1 : 0) ^ 1 ? 1 : 0)
    HEAP8[(12 + k) >> 0] = 0
    HEAP8[(13 + k) >> 0] = 7
    HEAP8[(4 + k) >> 0] = 0
    HEAP8[(5 + k) >> 0] = 0
    HEAP8[(6 + k) >> 0] = 0
    HEAP8[(7 + k) >> 0] = 0
    HEAP8[(8 + k) >> 0] = 0
    HEAP8[(9 + k) >> 0] = 0
    HEAP8[(10 + k) >> 0] = 0
    HEAP8[(7 + k) >> 0] = HEAP8[(16 + k) >> 0] | 0
    HEAP8[(8 + k) >> 0] = HEAP8[(15 + k) >> 0] | 0
    HEAP8[(9 + k) >> 0] = ((HEAP8[(17 + k) >> 0] | 0) + ((e + 131071) >>> 9)) | 0
    m = { type: (n & 12) === 8 ? 11 | 0 : 10 | 0, devId: HEAP32[((a62(HEAP8[(18 + k) >> 0] & 255, 12) | 0) + 8 + i) >> 2] | 0, start: ((((a62(((a62(s & 255, t & 255) | 0) + (q & 255)) | 0, c & 255) | 0) + (o & 255)) << 9) - 512) | 0, len: e, ioTransaction: g | 0, value: rK(g) | 0 }
    postMessage(m)
}
function vU(a) {
    var c = 0
    c = (a - 48) | 0
    if (c >>> 0 < 43) return HEAP8[(c + 2119360) >> 0] | 0
    switch (a | 0) {
        case 8:
            return 14 | 0
        case 13:
            return 28 | 0
        case 16:
            return 54 | 0
        case 17:
            return 29 | 0
        case 27:
            return 1 | 0
        case 32:
            return 57 | 0
        case 37:
            return 331 | 0
        case 38:
            return 328 | 0
        case 39:
            return 333 | 0
        case 40:
            return 336 | 0
        case 186:
            return 39 | 0
        case 191:
            return 53 | 0
        default:
            console.log("Support PS/2 scan code for keycode", a)
            return 0 | 0
    }
}
function Ve(i, g) {
    var e = null,
        c = 0,
        a = 0
    c = vU(g) | 0
    a: if ((c & 65535) !== 0) {
        a = HEAP8[(9 + i) >> 0] | 0
        if ((c & 65535) < 256) {
            a = (a + 1) & 7
            if (a === (HEAP8[(8 + i) >> 0] & 255)) break a
            HEAP8[((HEAP8[(9 + i) >> 0] & 255) + i) >> 0] = c
            HEAP8[(9 + i) >> 0] = a
        } else {
            if ((((((((a & 255) + 8) | 0) - (HEAP8[(8 + i) >> 0] & 255)) << 16) >> 16) % 8 & 254) > 5) break a
            a = HEAP8[(9 + i) >> 0] | 0
            e = i | 0
            HEAP8[((a & 255) + e) >> 0] = 224
            HEAP8[(((a + 1) & 7) + e) >> 0] = c
            HEAP8[(9 + i) >> 0] = (a + 2) & 7
        }
        km(HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0, 0, 1)
        c = HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0
        if ((HEAP32[(592 + c) >> 2] | 0) !== 0) HEAP32[(592 + c) >> 2] = 0
    }
}
function Vd(k, i) {
    var g = 0,
        e = 0,
        c = null,
        a = 0
    a = vU(i) | 0
    a: if ((a & 65535) !== 0) {
        g = HEAP8[(9 + k) >> 0] | 0
        e = a | 128
        if ((a & 65535) < 256) {
            a = (g + 1) & 7
            if (a === (HEAP8[(8 + k) >> 0] & 255)) break a
            HEAP8[((HEAP8[(9 + k) >> 0] & 255) + k) >> 0] = e
            HEAP8[(9 + k) >> 0] = a
        } else {
            if ((((((((g & 255) + 8) | 0) - (HEAP8[(8 + k) >> 0] & 255)) << 16) >> 16) % 8 & 254) > 5) break a
            a = HEAP8[(9 + k) >> 0] | 0
            c = k | 0
            HEAP8[((a & 255) + c) >> 0] = 224
            HEAP8[(((a + 1) & 7) + c) >> 0] = e
            HEAP8[(9 + k) >> 0] = (a + 2) & 7
        }
        km(HEAP32[(16 + (HEAP32[815258] | 0)) >> 2] | 0, 0, 1)
        a = HEAP32[(12 + (HEAP32[815258] | 0)) >> 2] | 0
        if ((HEAP32[(592 + a) >> 2] | 0) !== 0) HEAP32[(592 + a) >> 2] = 0
    }
}
function Uh(i, g, e) {
    var c = null,
        a = null
    a = [0]
    a[0] = g | 0
    c = new Int32Array(2)
    c[0] = e
    c[1] = i
    a = Ug(c, 1, a, 0, c, 0)
    Uf(a)
}
function Ug(i, j, g, h, e, f) {
    var k = 0,
        a = null,
        c = null
    a = TC
    if (a !== null) return vK(a, i, j, g, h, e, f)
    a = { a0: nullArray, a1: nullArray, i2: 0 }
    a.i2 = 16
    c = a6w(16)
    a.a0 = c
    k = a.i2 | 0
    c = new Uint8Array((k / 1) | 0)
    a.a1 = c
    TC = a
    return vK(a, i, j, g, h, e, f)
}
function Uf(e) {
    var i = 0,
        g = 0,
        c = null,
        a = null
    vo = ((vo | 0) + 1) | 0
    i = e.a4 | 0
    a = HEAP8
    g = HEAP32[(4 + i) >> 2] | 0
    a = c5(a, g)
    c = new CheerpException(a)
    e.a0 = c
    throw c
}
function vK(m, k, l, i, j, g, h) {
    var q = null,
        o = 0,
        n = 0,
        e = 0,
        a = null,
        c = 0
    e = m.i2 | 0
    a: {
        b: {
            if ((e | 0) > 1) {
                a = m.a1
                c = 1
                while (1) {
                    if ((a[c] & 255) !== 0) {
                        c = (c + 1) | 0
                        if ((c | 0) === (e | 0)) break b
                        continue
                    }
                    break
                }
            } else {
                c = 1
            }
            if ((c | 0) !== (e | 0)) {
                a = m.a1
                e = c
                break a
            }
        }
        m.i2 = e << 1
        a = m.a0
        c = a62(e, 96) | 0
        if (a !== nullArray || 0 !== 0) a = a6y(a, a.length, (c / 48) | 0)
        else a = a6w((c / 48) | 0)
        m.a0 = a
        c = m.i2 | 0
        a = m.a1
        if (a !== nullArray || 0 !== 0)
            a = (function () {
                var __old__ = a
                var __ret__ = new Uint8Array((c / 1) | 0)
                __ret__.set(__old__.subarray(0, Math.min(__ret__.length, __old__.length)))
                return __ret__
            })()
        else a = new Uint8Array((c / 1) | 0)
        m.a1 = a
    }
    q = m.a0
    c = k[l] | 0
    o = i[j] | 0
    n = g[h] | 0
    q[e].a1 = null
    q[e].i2 = c
    q[e].a3 = null
    q[e].a4 = o
    q[e].a5 = null
    q[e].i6 = n
    q[e].i7 = 1
    q[e].i8 = 0
    q[e].a10 = null
    q[e].a11 = null
    a[e] = 1
    return q[e]
}
function ay_() {
    return vo | 0
}
function ayW() {
    throw new Error("Cheerp: Signal raised")
}
function ayV(i) {
    var g = null,
        c = null,
        e = null,
        a = 0
    g = ayT()
    c = (typeof process == "undefined" ? [] : process.argv) || []
    if ((c.length | 0) !== 0) {
        a = 0
        while (1) {
            e = c[+(a >>> 0)]
            if (e.startsWith(i)) +g.push(e.substr(+(i.length | 0)))
            a = (a + 1) | 0
            if (a >>> 0 < c.length >>> 0) continue
            break
        }
    }
    return g
}
function Pf(i, j, g, e, c) {
    var a = 0
    if (e.length >>> 0 > c >>> 0) {
        a = ayU(i, j, g, e[+(c >>> 0)]) | 0
        if (a >>> 0 < g >>> 0) i[(j + a) | 0] = 0
        return (a + 1) | 0
    }
    return 0 | 0
}
function ayU(o, p, n, m) {
    var k = 0,
        i = 0,
        e = 0,
        c = 0,
        g = 0,
        a = 0
    k = m.length
    if ((k | 0) === 0) return 0 | 0
    g = 0
    c = 0
    e = 0
    while (1) {
        a = m.charCodeAt(+(c >>> 0))
        a: {
            if (((a & -2048) | 0) === 55296) {
                i = (c + 1) | 0
                if (i >>> 0 < k >>> 0) {
                    c = m.charCodeAt(+(i >>> 0))
                    a = (((c | a) & 1023) + 65536) | 0
                    c = i
                } else {
                    a = -1
                }
            } else if (a >>> 0 > 1114111) {
                a = -1
            } else {
                if (a >>> 0 < 128) {
                    if (g >>> 0 < n >>> 0) {
                        o[(p + e) | 0] = a
                        e = (e + 1) | 0
                        a = 1
                        break a
                    }
                    a = 1
                    break a
                }
                if (a >>> 0 < 2048) {
                    if ((g + 1) >>> 0 < n >>> 0) {
                        o[(p + e) | 0] = (a >>> 6) | 192
                        o[(((p + e) | 0) + 1) | 0] = (a & 63) | 128
                        e = (e + 2) | 0
                        a = 2
                        break a
                    }
                    a = 2
                    break a
                }
                if (a >>> 0 < 65536) {
                    if ((g + 2) >>> 0 < n >>> 0) {
                        o[(p + e) | 0] = (a >>> 12) | 224
                        o[(((p + e) | 0) + 1) | 0] = ((a >>> 6) & 63) | 128
                        o[(((p + e) | 0) + 2) | 0] = (a & 63) | 128
                        e = (e + 3) | 0
                        a = 3
                        break a
                    }
                    a = 3
                    break a
                }
            }
            if ((g + 3) >>> 0 < n >>> 0) {
                o[(p + e) | 0] = (a >>> 18) | 240
                o[(((p + e) | 0) + 1) | 0] = ((a >>> 12) & 63) | 128
                o[(((p + e) | 0) + 2) | 0] = ((a >>> 6) & 63) | 128
                o[(((p + e) | 0) + 3) | 0] = (a & 63) | 128
                e = (e + 4) | 0
                a = 4
            } else {
                a = 4
            }
        }
        g = (g + a) | 0
        c = (c + 1) | 0
        if (c >>> 0 < k >>> 0) continue
        break
    }
    return g | 0
}
function ayT() {
    return new Array()
}
function ayO(g, h, e, c) {
    var a = null
    if (SA | 0) return Pf(g, h, e, Sz, c) | 0 | 0
    a = typeof CHEERP_ENV == "undefined" ? null : CHEERP_ENV
    if (a !== null) a = typeof CHEERP_ENV == "undefined" ? null : CHEERP_ENV
    else a = ayV("--cheerp-env=")
    Sz = a
    SA = 1
    return Pf(g, h, e, a, c) | 0 | 0
}
function ayN(o, n) {
    var c = null,
        m = null,
        i = 0,
        g = 0,
        a = 0,
        e = 0,
        k = 0
    if (Tk | 0) {
        c = vd
    } else {
        c = String()
        vd = c
        Tk = 1
    }
    m = [null]
    ayM(m, 0, c)
    if ((n | 0) > 0) {
        g = 0
        i = 0
        while (1) {
            a = ((g << 3) + o) | 0
            e = HEAP32[(4 + a) >> 2] | 0
            if ((e | 0) !== 0) {
                i = (e + i) | 0
                c = HEAP8
                k = HEAP32[a >> 2] | 0
                if ((e | 0) > 0) {
                    a = 0
                    while (1) {
                        ayL(m, 0, c[(k + a) | 0] | 0)
                        a = (a + 1) | 0
                        if ((a | 0) !== (e | 0)) continue
                        break
                    }
                }
            }
            g = (g + 1) | 0
            if ((g | 0) !== (n | 0)) continue
            break
        }
    } else {
        i = 0
    }
    c = ayK(m, 0)
    c = c.split("\n")
    g = c.length
    if ((g | 0) > 1) {
        k = 0
        e = 1
        while (1) {
            m = Pc(c, +(k | 0))
            a = oSlot
            console.log(m[a])
            k = (e + 1) | 0
            if ((k | 0) !== (g | 0)) {
                a = k
                k = e
                e = a
                continue
            }
            break
        }
    }
    m = Pc(c, +((g - 1) | 0))
    e = oSlot
    vd = m[e]
    return i | 0
}
function ayM(c, d, a) {
    c[d] = a
}
function ayL(g, h, e) {
    var i = 0,
        c = 0,
        a = 0
    c = vc | 0
    a = e & 255
    a: if ((e & 255) < 192) {
        if ((c | 0) === 0) {
            if (e << 24 <= -16777216) tp(2129412 | 0, 77)
            q5 = a
        } else {
            if (((a & 192) | 0) !== 128) tp(2129424 | 0, 63)
            a = ((q5 << 6) + (a & 63)) | 0
            q5 = a
            c = (c - 1) | 0
            vc = c
            if ((c | 0) !== 0) break a
        }
        ayH(g, h, a)
    } else {
        if ((c | 0) !== 0) tp(2129384 | 0, 88)
        if ((e & 255) < 224) {
            i = 31
            c = 1
        } else {
            i = (e & 255) < 240 ? 15 | 0 : 7 | 0
            c = (e & 255) < 240 ? 2 | 0 : 3 | 0
        }
        vc = c
        q5 = i & a
    }
}
function ayK(a, b) {
    return a[b]
}
function Pc(c, a) {
    oSlot = (0 + ~~a) | 0
    return c
}
function ayH(e, f, c) {
    var a = null
    a: {
        if (c >>> 0 < 65536) {
            if ((c | 0) === 0) break a
            a = e[f]
            a = a.concat(String.fromCharCode(c))
        } else {
            a = e[f]
            a = a.concat(String.fromCharCode((((c - 65536) >>> 10) + 55296) | 0))
            e[f] = a
            a = a.concat(String.fromCharCode(((c & 1023) + 56320) | 0))
        }
        e[f] = a
    }
}
function ayG() {
    var a = 0,
        c = null
    ayF()
    ayP()
    Va()
    aF7()
    a = 3185160
    HEAP32[a >> 2] = 0
    HEAP32[(4 + a) >> 2] = 0
    HEAP32[(8 + a) >> 2] = 0
    HEAP32[(12 + a) >> 2] = 0
    HEAP32[(16 + a) >> 2] = 0
    HEAP32[(20 + a) >> 2] = 1
    HEAP32[(24 + a) >> 2] = 0
    c = new Uint8Array(16)
    k8 = c
    mw = 16
    c = a6v(16)
    kj = c
    ajV()
    ajU()
    ajT()
    ajS()
    ajR()
    ajQ()
    ajP()
    ajO()
    ajN()
    ajM()
    fj = new Array()
}
function Pb(a, b) {
    var e = 0,
        c = 0
    c = a.buffer === __heap
    if (c) {
        c = b
        e = a.BYTES_PER_ELEMENT
        B(a62(e, c) | 0)
    }
}
function TU(e, c, a) {
    return ayO(HEAP8, e >> 0, c, a) | 0 | 0
}
function Y(a) {
    aGz(HEAP8, a >> 0)
}
function g3(a) {
    any(HEAP8, a >> 0)
}
function TT(c, a) {
    aGD(HEAP8, c >> 0, a)
}
function nZ(e, c, a) {
    ac6(e | 0, HEAP8, c >> 0, a)
}
function TS(k, i, g, e, c, a) {
    avr(k, i, g, e, c, HEAP8, a >> 0)
}
function dN(i, g, e, c, a) {
    avp(i, g, e, HEAP8, c >> 0, a)
}
function rf(c, a) {
    Z9(HEAP8, c >> 0, a)
}
function vy(i, g, e, c, a) {
    aru(i, g | 0, e, HEAP8, c >> 0, a)
}
function TR(e, c, a) {
    ar1(e | 0, HEAP8, c >> 0, a)
}
function vx(g, e, c, a) {
    adC(g | 0, HEAP8, e >> 0, c, a | 0)
}
function TQ(c, a) {
    aGk(HEAP8, c >> 0, a)
}
var k8 = nullArray
var mw = 0
var kj = nullArray
var fj = null
var vo = 0
var TC = null
var Tk = 0
var vd = null
var vc = 0
var q5 = 0
var SA = 0
var Sz = null
var k6 = null
var q2 = a7j([], 0, 72, null)
var nQ = null
var uX = null
var k4 = null
var gA
var PG = 0
var l2 = null
function a6u() {
    this.a0 = null
    this.a1 = null
    this.i2 = 0
    this.a3 = null
    this.a4 = 0
    this.a5 = null
    this.i6 = 0
    this.i7 = 0
    this.i8 = 0
    this.a9 = null
    this.a10 = null
    this.a11 = null
}
function a4n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4r(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ1(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ5(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ8(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ9(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0p(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0r(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0t(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0u(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0x(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0C(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0E(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0D(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0F(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0H(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0M(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0P(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0O(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0R(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0Y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0X(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a02(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a04(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a03(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4A(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4E(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4H(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4G(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4J(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4I(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4K(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4N(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4P(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a06(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a09(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ3(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1v(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1s(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1u(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1t(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1w(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1D(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1A(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1B(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1E(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1G(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1F(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1K(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1I(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ4(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1L(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1N(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1P(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4M(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZT(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZS(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1R(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0Z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1V(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1X(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1Y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a10(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a11(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a17(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a14(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a13(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a16(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a15(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0K(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a19(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a18(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3S(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3U(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1H(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2F(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3T(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2P(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3F(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a33(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3X(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5M(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3w(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZU(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3s(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a57(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3V(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4v(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZO(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3t(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3v(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3p(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3N(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5J(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3G(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5L(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5P(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5R(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5U(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a53(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a48(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a12
    obj.a12.o = 1
    obj.a12.a = a
    return obj
}
function aZ7(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZR(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a41(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a07(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2E(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a37(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ2(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3C(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a38(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a18
    obj.a18.o = 1
    obj.a18.a = a
    a[2] = obj.a20
    obj.a20.o = 2
    obj.a20.a = a
    return obj
}
function a3o(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0U(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5A(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3E(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5Y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2o(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1p(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a50(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a08(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a32(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a45(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a34(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a31(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4x(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0Q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5F(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4t(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0w(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5S(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5B(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1T(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5r(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3J(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1x(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a51(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2D(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0I(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5G(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2O(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2x(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5Z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a01(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3B(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZX(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0B(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5I(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    a[2] = obj.a4
    obj.a4.o = 2
    obj.a4.a = a
    return obj
}
function a0V(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2L(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1J(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4T(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3Z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0N(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    a[2] = obj.a3
    obj.a3.o = 2
    obj.a3.a = a
    return obj
}
function a56(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2Q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a00(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4R(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5N(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a55(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3K(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0J(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5D(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a58(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a05(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4D(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a21(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3r(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3A(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3Y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a59(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0L(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1U(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ0(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3P(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5T(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a52(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4w(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5H(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1C(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a36(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3g(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a49(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a44(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2N(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5Q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0G(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0S(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2J(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5X(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3I(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5O(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4p(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4S(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2G(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZV(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a54(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1Q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZP(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5s(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4U(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3u(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4L(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5o(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4Q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2s(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3M(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4s(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a43(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZZ(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0A(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2X(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2W(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a20(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0o(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2V(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1o(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3W(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a35(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4X(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a46(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a22(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3O(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5W(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a25(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2U(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2T(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a28(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2R(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1r(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5K(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2S(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4m(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a42(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ6(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a47(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a40(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2Z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5w(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1M(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4Y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4Z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4O(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0W(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2M(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2Y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZ_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3D(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0a(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4V(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a29(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0v(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5V(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a26(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a27(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a24(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1S(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a12(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2K(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2H(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0s(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3L(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3x(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2I(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2C(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2A(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a23(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2B(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4C(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2y(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5v(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5p(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2w(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1O(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4B(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5x(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1Z(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZQ(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2t(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5E(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZW(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3H(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4u(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2u(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a0T(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2v(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2i(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3Q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4F(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5C(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5u(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5t(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3R(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5k(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a30(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5j(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function aZY(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4W(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2r(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5e(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3b(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a5c(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2f(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2p(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a1W(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a39(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2n(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a4o(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3h(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2l(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a3q(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a2d(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function a6w(e) {
    var r = []
    for (var i = 0; i < e; i++) r[i] = new a6u()
    return r
}
function a6v(e) {
    var r = []
    for (var i = 0; i < e; i++) r[i] = { a0: null, a1: null, a2: null, a3: null, a4: null, i5: 0 }
    return r
}
function a6x(r, s, e) {
    for (var i = s; i < e; i++) r[i] = { a0: null, a1: null, a2: null, a3: null, a4: null, i5: 0 }
    return r
}
function a6y(r, s, e) {
    for (var i = s; i < e; i++) r[i] = new a6u()
    return r
}
function a7j(r, s, e, v) {
    for (var i = s; i < e; i++) r[i] = v
    return r
}
function a7h(func, obj) {
    return function () {
        var a = Array.prototype.slice.call(arguments)
        a.unshift(obj)
        return func.apply(null, a)
    }
}
function a7i(func, obj, objo) {
    return function () {
        var a = Array.prototype.slice.call(arguments)
        a.unshift(obj, objo)
        return func.apply(null, a)
    }
}
function CheerpException(m) {
    var instance = new Error("Uncaught C++ exception: " + m)
    instance.name = "CheerpException"
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this))
    if (Error.captureStackTrace) {
        Error.captureStackTrace(instance, CheerpException)
    }
    return instance
}
CheerpException.prototype = Object.create(Error.prototype)
function a7l(pages) {
    try {
        var ret = memory.grow(pages)
        __heap = memory.buffer
        a7m(__heap)
        return ret
    } catch (e) {
        return -1
    }
}
var HEAP8 = null,
    HEAP16 = null,
    HEAP32 = null,
    HEAPF32 = null,
    HEAPF64 = null,
    __asm = null,
    __heap = null
function a7n() {
    throw new Error("this should be unreachable")
}
var memory = new WebAssembly.Memory({ initial: 11200, maximum: 11200, shared: true })
var a6E = null
var ayF = null
var ayP = null
var Va = null
var aF7 = null
var ajV = null
var ajU = null
var ajT = null
var ajS = null
var ajR = null
var ajQ = null
var ajP = null
var ajO = null
var ajN = null
var ajM = null
var tp = null
var aIq = null
var aIp = null
var aIu = null
var i_ = null
var ig = null
var aGd = null
var no = null
var nn = null
var d4 = null
var aG2 = null
var aG4 = null
var QJ = null
var QI = null
var QH = null
var QN = null
var QQ = null
var uf = null
var ue = null
var dj = null
var QP = null
var aG9 = null
var P_ = null
var K = null
var aG7 = null
var aG6 = null
var QM = null
var aG5 = null
var B = null
var aGl = null
var tB = null
var RI = null
var abn = null
var abm = null
var abu = null
var qb = null
var aa4 = null
var tR = null
var uP = null
var uO = null
var MG = null
var asN = null
var km = null
var Vg = null
var Wc = null
var abt = null
var uJ = null
var qK = null
var f9 = null
var uF = null
var uq = null
var abN = null
var ny = null
var nC = null
var uo = null
var aGC = null
var du = null
var ur = null
var jv = null
var aI = null
var un = null
var Q6 = null
var aHw = null
var abp = null
var qt = null
var Rz = null
var aHv = null
var fB = null
var rC = null
var aRL = null
var aRK = null
var dW = null
var aRJ = null
var aRI = null
var hf = null
var EB = null
var alK = null
var abR = null
var abS = null
var aa6 = null
var aa5 = null
var MC = null
var abg = null
var abh = null
var abd = null
var aai = null
var aba = null
var Gu = null
var rZ = null
var add = null
var kD = null
var lI = null
var ay4 = null
var aau = null
var d_ = null
var gv = null
var aGt = null
var f8 = null
var nm = null
var nk = null
var aF$ = null
var aGp = null
var bW = null
var aGb = null
var aHb = null
var QX = null
var adW = null
var oA = null
var adN = null
var adM = null
var aIG = null
var aIF = null
var ie = null
var W0 = null
var abz = null
var abv = null
var op = null
var abH = null
var Nf = null
var b1 = null
var EY = null
var dT = null
var abG = null
var rT = null
var lO = null
var tc = null
var abF = null
var pf = null
var abE = null
var abD = null
var te = null
var EW = null
var abq = null
var aIB = null
var aIA = null
var aIz = null
var aR6 = null
var rw = null
var au6 = null
var aR5 = null
var Wa = null
var uN = null
var Vi = null
var aRX = null
var v8 = null
var Wx = null
var WD = null
var Vv = null
var aRV = null
var Wz = null
var Wy = null
var Eo = null
var rK = null
var aan = null
var aaj = null
var dX = null
var bc = null
var cxCoreInit = a7n
var dbgDisassemblyAt = a7n
var dbgDumpAddressSpace = a7n
var dbgDumpMem = a7n
// FIXME: hardcoded localhost 127.0.0.1
var dbgDumpThreads = a7n
a7n.promise = a7r(`http://127.0.0.1:8080/cxcore-no-return-call.wasm`)
    .then((a) => WebAssembly.instantiate(a, { i: { memory: memory, Uh: Uh, ayN: ayN, ayW: ayW, TQ: TQ, p8: p8, aGn: aGn, l4: l4, aFa: aFa, aGA: aGA, vx: vx, aII: aII, TR: TR, aGH: aGH, rS: rS, aGE: aGE, vy: vy, aIl: aIl, aE6: aE6, aGo: aGo, aGm: aGm, aHg: aHg, aa_: aa_, au7: au7, aE7: aE7, Lm: Lm, ay9: a7n, abl: abl, aID: aID, ko: ko, abL: abL, aa$: aa$, abc: abc, oy: oy, ED: ED, fZ: fZ, rf: rf, as$: as$, m4: m4, EG: EG, eT: eT, ay_: ay_, dN: dN, gr: gr, TS: TS, acC: acC, acB: acB, F1: F1, nZ: nZ, alI: alI, alB: alB, aHP: aHP, ahF: ahF, KY: KY, KR: KR, KO: KO, KJ: KJ, TT: TT, KE: KE, KB: KB, Ia: Ia, tb: tb, P3: P3, aIr: aIr, g3: g3, ar0: ar0, QU: QU, ES: ES, oB: oB, adV: adV, Y: Y, adi: adi, uv: uv, aak: aak, TU: TU, ajK: ajK, dz: Date.now, rE: rE, AX: AX, yt: yt, acc: acc, avk: avk, kl: kl, v0: v0, v_: v_, Ww: Ww, Wv: Wv, Wu: Wu, Wt: Wt, Ws: Ws, Wr: Wr, Wq: Wq, Wp: Wp, WA: WA, Ep: Ep, aal: aal, v1: v1, Vw: Vw, ru: ru, vV: vV, Vx: Vx, a68: Math.atan2, a7c: Math.pow, a7l: a7l } }))
    .then((a) => {
        __asm = a.instance.exports
        __heap = memory.buffer
        a7m(__heap)
        a6E = __asm.a6E
        ayF = __asm.ayF
        ayP = __asm.ayP
        Va = __asm.Va
        aF7 = __asm.aF7
        ajV = __asm.ajV
        ajU = __asm.ajU
        ajT = __asm.ajT
        ajS = __asm.ajS
        ajR = __asm.ajR
        ajQ = __asm.ajQ
        ajP = __asm.ajP
        ajO = __asm.ajO
        ajN = __asm.ajN
        ajM = __asm.ajM
        tp = __asm.tp
        aIq = __asm.aIq
        aIp = __asm.aIp
        aIu = __asm.aIu
        i_ = __asm.i_
        ig = __asm.ig
        aGd = __asm.aGd
        no = __asm.no
        nn = __asm.nn
        d4 = __asm.d4
        aG2 = __asm.aG2
        aG4 = __asm.aG4
        QJ = __asm.QJ
        QI = __asm.QI
        QH = __asm.QH
        QN = __asm.QN
        QQ = __asm.QQ
        uf = __asm.uf
        ue = __asm.ue
        dj = __asm.dj
        QP = __asm.QP
        aG9 = __asm.aG9
        P_ = __asm.P_
        K = __asm.K
        aG7 = __asm.aG7
        aG6 = __asm.aG6
        QM = __asm.QM
        aG5 = __asm.aG5
        B = __asm.B
        aGl = __asm.aGl
        tB = __asm.tB
        RI = __asm.RI
        abn = __asm.abn
        abm = __asm.abm
        abu = __asm.abu
        qb = __asm.qb
        aa4 = __asm.aa4
        tR = __asm.tR
        uP = __asm.uP
        uO = __asm.uO
        MG = __asm.MG
        asN = __asm.asN
        km = __asm.km
        Vg = __asm.Vg
        Wc = __asm.Wc
        abt = __asm.abt
        uJ = __asm.uJ
        qK = __asm.qK
        f9 = __asm.f9
        uF = __asm.uF
        uq = __asm.uq
        abN = __asm.abN
        ny = __asm.ny
        nC = __asm.nC
        uo = __asm.uo
        aGC = __asm.aGC
        du = __asm.du
        ur = __asm.ur
        jv = __asm.jv
        aI = __asm.aI
        un = __asm.un
        Q6 = __asm.Q6
        aHw = __asm.aHw
        abp = __asm.abp
        qt = __asm.qt
        Rz = __asm.Rz
        aHv = __asm.aHv
        fB = __asm.fB
        rC = __asm.rC
        aRL = __asm.aRL
        aRK = __asm.aRK
        dW = __asm.dW
        aRJ = __asm.aRJ
        aRI = __asm.aRI
        hf = __asm.hf
        EB = __asm.EB
        alK = __asm.alK
        abR = __asm.abR
        abS = __asm.abS
        aa6 = __asm.aa6
        aa5 = __asm.aa5
        MC = __asm.MC
        abg = __asm.abg
        abh = __asm.abh
        abd = __asm.abd
        aai = __asm.aai
        aba = __asm.aba
        Gu = __asm.Gu
        rZ = __asm.rZ
        add = __asm.add
        kD = __asm.kD
        lI = __asm.lI
        ay4 = __asm.ay4
        aau = __asm.aau
        d_ = __asm.d_
        gv = __asm.gv
        aGt = __asm.aGt
        f8 = __asm.f8
        nm = __asm.nm
        nk = __asm.nk
        aF$ = __asm.aF$
        aGp = __asm.aGp
        bW = __asm.bW
        aGb = __asm.aGb
        aHb = __asm.aHb
        QX = __asm.QX
        adW = __asm.adW
        oA = __asm.oA
        adN = __asm.adN
        adM = __asm.adM
        aIG = __asm.aIG
        aIF = __asm.aIF
        ie = __asm.ie
        W0 = __asm.W0
        abz = __asm.abz
        abv = __asm.abv
        op = __asm.op
        abH = __asm.abH
        Nf = __asm.Nf
        b1 = __asm.b1
        EY = __asm.EY
        dT = __asm.dT
        abG = __asm.abG
        rT = __asm.rT
        lO = __asm.lO
        tc = __asm.tc
        abF = __asm.abF
        pf = __asm.pf
        abE = __asm.abE
        abD = __asm.abD
        te = __asm.te
        EW = __asm.EW
        abq = __asm.abq
        aIB = __asm.aIB
        aIA = __asm.aIA
        aIz = __asm.aIz
        aR6 = __asm.aR6
        rw = __asm.rw
        au6 = __asm.au6
        aR5 = __asm.aR5
        Wa = __asm.Wa
        uN = __asm.uN
        Vi = __asm.Vi
        aRX = __asm.aRX
        v8 = __asm.v8
        Wx = __asm.Wx
        WD = __asm.WD
        Vv = __asm.Vv
        aRV = __asm.aRV
        Wz = __asm.Wz
        Wy = __asm.Wy
        Eo = __asm.Eo
        rK = __asm.rK
        aan = __asm.aan
        aaj = __asm.aaj
        dX = __asm.dX
        bc = __asm.bc
        cxCoreInit = a6E
        dbgDisassemblyAt = a6H
        dbgDumpAddressSpace = a6F
        dbgDumpMem = a6G
        dbgDumpThreads = a6I
        cxCoreInit.promise = dbgDisassemblyAt.promise = dbgDumpAddressSpace.promise = dbgDumpMem.promise = dbgDumpThreads.promise = Promise.resolve()
        ayG()
    })
function a7m(a) {
    HEAP8 = new Uint8Array(a)
    HEAP16 = new Uint16Array(a)
    HEAP32 = new Int32Array(a)
    HEAPF32 = new Float32Array(a)
    HEAPF64 = new Float64Array(a)
}
