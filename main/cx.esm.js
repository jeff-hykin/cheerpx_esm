"use strict"
var intMultiply_1 = Math.imul
var oSlot = 0
var nullArray = [null]
var nullObj = {
    d: nullArray,
    o: 0,
}
var CHEERP_ENV = null,
    CHEERP_ARGV = null
function vE(a) {
    return 0 | 0
}
function vD(l, j, h) {
    var f = null,
        n = null,
        a = null,
        c = 0
    a = wQ({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
        a3: null,
        i4: 0,
    })
    a = a
    a.a0 = uh
    a.a1 = ug
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    n = f.a
    c = f.o - 1
    l.a0 = n
    l.a0o = c
    a.a3 = f
    a.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function uw(a) {
    return 0 | 0
}
function uv(j, h, f, c, a) {}
function uu(C, E, G, H, K, M, O) {
    var n = null,
        x = null,
        p = 0,
        L = 0,
        A = 0,
        h = null,
        a = null,
        r = null,
        c = 0,
        j = null,
        l = 0,
        f = 0,
        u = 0
    h = new Am().a
    a = h[0]
    a.a0 = uq
    a.a1 = up
    a.i7 = O
    a.a6 = M
    a.i5 = K
    n = a.a2
    n.a0 = nullArray
    n.a0o = 0
    x = n.a1
    x.i0 = 0
    r = n.a
    c = n.o - 1
    C.a0 = r
    C.a0o = c
    r = a.a3
    eg(r, E, G, H, K)
    j = r.a0
    c = r.a0o | 0
    a: {
        if (j !== nullArray || c !== 0) {
            if (j[c].a0 !== null) {
                a.i4 = 0
                a = j[c].a[j[c].o - -1]
                a.a0 = h
                a.a0o = 0
                break a
            }
        }
        j = j[c].a[j[c].o - -1]
        j = j.a1.a1
        h = r.a0
        c = r.a0o | 0
        if (h !== nullArray || c !== 0) h[c].a1(h, c)
        c = a.i7 | 0
        h = a.a6
        p = a.i5 | 0
        L = j.length
        if ((p | 0) !== 0) {
            A = p & 7
            if ((A | 0) !== 0) {
                u = 0
                f = 0
                l = 0
                while (1) {
                    h[(c + f) | 0] = j[(0 + l) | 0] | 0
                    u = (u + 1) | 0
                    f = (f + 1) | 0
                    l = (l + 1) | 0
                    if ((u | 0) !== (A | 0)) continue
                    break
                }
            } else {
                f = 0
                l = 0
            }
            if (p >>> 0 >= 8)
                while (1) {
                    h[(c + f) | 0] = j[(0 + l) | 0] | 0
                    h[(((c + f) | 0) + 1) | 0] = j[(((0 + l) | 0) + 1) | 0] | 0
                    h[(((c + f) | 0) + 2) | 0] = j[(((0 + l) | 0) + 2) | 0] | 0
                    h[(((c + f) | 0) + 3) | 0] = j[(((0 + l) | 0) + 3) | 0] | 0
                    h[(((c + f) | 0) + 4) | 0] = j[(((0 + l) | 0) + 4) | 0] | 0
                    h[(((c + f) | 0) + 5) | 0] = j[(((0 + l) | 0) + 5) | 0] | 0
                    h[(((c + f) | 0) + 6) | 0] = j[(((0 + l) | 0) + 6) | 0] | 0
                    h[(((c + f) | 0) + 7) | 0] = j[(((0 + l) | 0) + 7) | 0] | 0
                    f = (f + 8) | 0
                    if (h !== h || ((c + p) | 0) !== ((c + f) | 0)) {
                        l = (l + 8) | 0
                        continue
                    }
                    break
                }
        }
        x.i0 = 256
        x.i1 = L
        a.a8 = n
        a.a0 = null
        h = n.a0
        c = n.a0o | 0
        ;(h !== nullArray || c !== 0 ? h : W)[h !== nullArray || c !== 0 ? c : X].a0(h !== nullArray || c !== 0 ? h : W, h !== nullArray || c !== 0 ? c : X)
    }
}
function ut(n, l, j, h, f, c, a) {}
function uq(r, s) {
    r = r[s]
    var l = 0,
        u = 0,
        p = 0,
        h = null,
        j = 0,
        f = null,
        c = 0,
        a = 0,
        n = 0
    h = r.a3.a0
    j = r.a3.a0o | 0
    h = h[j].a[h[j].o - -1]
    h = h.a1.a1
    f = r.a3.a0
    j = r.a3.a0o | 0
    if (f !== nullArray || j !== 0) f[j].a1(f, j)
    j = r.i7 | 0
    f = r.a6
    l = r.i5 | 0
    u = h.length
    if ((l | 0) !== 0) {
        p = l & 7
        if ((p | 0) !== 0) {
            n = 0
            a = 0
            c = 0
            while (1) {
                f[(j + a) | 0] = h[(0 + c) | 0] | 0
                n = (n + 1) | 0
                a = (a + 1) | 0
                c = (c + 1) | 0
                if ((n | 0) !== (p | 0)) continue
                break
            }
        } else {
            a = 0
            c = 0
        }
        if (l >>> 0 >= 8)
            while (1) {
                f[(j + a) | 0] = h[(0 + c) | 0] | 0
                f[(((j + a) | 0) + 1) | 0] = h[(((0 + c) | 0) + 1) | 0] | 0
                f[(((j + a) | 0) + 2) | 0] = h[(((0 + c) | 0) + 2) | 0] | 0
                f[(((j + a) | 0) + 3) | 0] = h[(((0 + c) | 0) + 3) | 0] | 0
                f[(((j + a) | 0) + 4) | 0] = h[(((0 + c) | 0) + 4) | 0] | 0
                f[(((j + a) | 0) + 5) | 0] = h[(((0 + c) | 0) + 5) | 0] | 0
                f[(((j + a) | 0) + 6) | 0] = h[(((0 + c) | 0) + 6) | 0] | 0
                f[(((j + a) | 0) + 7) | 0] = h[(((0 + c) | 0) + 7) | 0] | 0
                a = (a + 8) | 0
                if (f !== f || ((j + l) | 0) !== ((j + a) | 0)) {
                    c = (c + 8) | 0
                    continue
                }
                break
            }
    }
    h = r.a2
    f = h.a1
    f.i0 = 256
    f.i1 = u
    r.a8 = h
    r.a0 = null
    f = h.a0
    j = h.a0o | 0
    ;(f !== nullArray || j !== 0 ? f : W)[f !== nullArray || j !== 0 ? j : X].a0(f !== nullArray || j !== 0 ? f : W, f !== nullArray || j !== 0 ? j : X)
}
function up(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function eg(x, u, r, p, n) {
    var l = null,
        C = null,
        h = null,
        c = null,
        f = null,
        a = 0,
        A = -0,
        j = null
    h = wR({
        a0: null,
        a1: null,
        a2: (h = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        d5: -0,
        a6: null,
        a7: null,
    }).a
    c = h[0]
    c.a0 = ul
    c.a1 = uk
    l = c.a2
    l.a0 = nullArray
    l.a0o = 0
    C = l.a1
    C.i0 = 0
    f = l.a
    a = l.o - 1
    x.a0 = f
    x.a0o = a
    f = aR[3]
    c.a6 = f
    if (f !== null) A = +performance.now()
    else {
        A = 0
    }
    c.d5 = A
    f = c.a3
    u.a0.a5(f, u, r, p, n)
    j = f.a0
    a = f.a0o | 0
    a: {
        if (j !== nullArray || a !== 0) {
            if (j[a].a0 !== null) {
                c.i4 = 0
                c = j[a].a[j[a].o - -1]
                c.a0 = h
                c.a0o = 0
                break a
            }
        }
        j = j[a].a[j[a].o - -1]
        j = j.a1.a1
        h = f.a0
        a = f.a0o | 0
        if (h !== nullArray || a !== 0) h[a].a1(h, a)
        h = c.a6
        if (h !== null) {
            A = +c.d5
            f = [null]
            f[0] = ~~(+performance.now() - A)
            f = f[0]
            aJ(h, f)
        }
        C.i0 = 256
        C.a1 = j
        c.a7 = l
        c.a0 = null
        h = l.a0
        a = l.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : W)[h !== nullArray || a !== 0 ? a : X].a0(h !== nullArray || a !== 0 ? h : W, h !== nullArray || a !== 0 ? a : X)
    }
}
function h8(a) {}
function ul(j, k) {
    j = j[k]
    var l = -0,
        h = null,
        f = 0,
        c = null,
        a = null
    h = j.a3.a0
    f = j.a3.a0o | 0
    h = h[f].a[h[f].o - -1]
    h = h.a1.a1
    c = j.a3.a0
    f = j.a3.a0o | 0
    if (c !== nullArray || f !== 0) c[f].a1(c, f)
    c = j.a6
    if (c !== null) {
        l = +j.d5
        a = [null]
        a[0] = ~~(+performance.now() - l)
        a = a[0]
        aJ(c, a)
    }
    c = j.a2
    a = c.a1
    a.i0 = 256
    a.a1 = h
    j.a7 = c
    j.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : W)[a !== nullArray || f !== 0 ? f : X].a0(a !== nullArray || f !== 0 ? a : W, a !== nullArray || f !== 0 ? f : X)
}
function uk(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function uh(a, b) {}
function ug(a, b) {}
function uf(l, j, h) {
    var f = null,
        n = null,
        a = null,
        c = 0
    a = wP({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
        a3: null,
        i4: 0,
    })
    a = a
    a.a0 = uc
    a.a1 = ub
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    n = f.a
    c = f.o - 1
    l.a0 = n
    l.a0o = c
    j.a4 = h
    a.a3 = f
    a.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function uc(a, b) {}
function ub(a, b) {}
function uo(l, j) {
    var f = null,
        h = null,
        n = null,
        a = null,
        c = 0
    a = xk({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (a = {
                i0: 0,
                i1: 0,
            }),
        },
        i3: 0,
        a4: null,
    })
    a = a
    a.a0 = tP
    a.a1 = tO
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    h = f.a1
    h.i0 = 0
    n = f.a
    c = f.o - 1
    l.a0 = n
    l.a0o = c
    c = h.i0 | 0
    h.i1 = 0
    if ((c & 65535) < 256) h.i0 = c | 256
    a.a4 = f
    a.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function ua(C, A, x, u, r) {
    var l = null,
        n = null,
        p = null,
        j = null,
        f = null,
        a = null,
        h = 0,
        c = null
    j = wO({
        a0: null,
        a1: null,
        a2: (j = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        a5: null,
        a6: null,
    }).a
    f = j[0]
    f.a0 = t9
    f.a1 = t8
    l = f.a2
    l.a0 = nullArray
    l.a0o = 0
    n = l.a1
    n.i0 = 0
    a = l.a
    h = l.o - 1
    C.a0 = a
    C.a0o = h
    a = new XMLHttpRequest()
    f.a5 = a
    c = "GET"
    a.open(c, A.a5)
    c = "bytes=".concat(u)
    c = c.concat("-").concat((((u - 1) | 0) + r) | 0)
    p = "Range"
    a.setRequestHeader(p, c)
    c = "arraybuffer"
    a.responseType = c
    c = f.a3
    b6(c, a)
    a = c.a0
    h = c.a0o | 0
    a: {
        if (a !== nullArray || h !== 0) {
            if (a[h].a0 !== null) {
                f.i4 = 0
                f = a[h].a[a[h].o - -1]
                f.a0 = j
                f.a0o = 0
                break a
            }
            a[h].a1(a, h)
        }
        j = f.a5.response
        a = new Uint8Array(j)
        n.i0 = 256
        n.a1 = a
        f.a6 = l
        f.a0 = null
        j = l.a0
        h = l.a0o | 0
        ;(j !== nullArray || h !== 0 ? j : W)[j !== nullArray || h !== 0 ? h : X].a0(j !== nullArray || h !== 0 ? j : W, j !== nullArray || h !== 0 ? h : X)
    }
}
function t9(h, i) {
    h = h[i]
    var j = null,
        a = null,
        f = 0,
        c = null
    a = h.a3.a0
    f = h.a3.a0o | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = h.a5.response
    j = new Uint8Array(a)
    a = h.a2
    c = a.a1
    c.i0 = 256
    c.a1 = j
    h.a6 = a
    h.a0 = null
    c = a.a0
    f = a.a0o | 0
    ;(c !== nullArray || f !== 0 ? c : W)[c !== nullArray || f !== 0 ? f : X].a0(c !== nullArray || f !== 0 ? c : W, c !== nullArray || f !== 0 ? f : X)
}
function t8(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function z(a, b) {
    var h = 0,
        l = 0,
        c = null,
        j = 0,
        f = 0
    c = String()
    j = 0
    while (1) {
        h = a[(b + j) | 0] | 0
        if ((h & 255) !== 0) {
            l = h & 255
            if (h << 24 > -16777216) {
                f = l
            } else if ((h & 255) < 192) {
                f = ((l & 63) + (f << 6)) | 0
            } else if ((h & 255) < 224) {
                f = l & 31
            } else if ((h & 255) < 240) {
                f = l & 15
            } else {
                f = l & 7
            }
            j = (j + 1) | 0
            a: {
                if ((j | 0) !== -1) {
                    if ((a[(b + j) | 0] & 192) === 128) break a
                }
                if (f >>> 0 < 65536) c = c.concat(String.fromCharCode(f))
                else {
                    c = c.concat(String.fromCharCode(((f - 65536) >>> 10) | 55296))
                    c = c.concat(String.fromCharCode((f & 1023) | 56320))
                }
            }
            if ((j | 0) !== -1) continue
            return c
        }
        break
    }
    return c
}
function b6(h, f) {
    var c = null,
        p = null,
        j = null,
        a = null,
        n = 0,
        l = null
    j = xl({
        a0: null,
        a1: null,
        a2: (j = {
            a0: nullArray,
            a0o: 0,
        }),
        a3: null,
        a4: null,
        a5: null,
        a6: (j = {
            i0: 0,
            a1: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i7: 0,
    }).a
    c = j[0]
    c.a0 = tY
    c.a1 = tX
    p = c.a2
    p.a0 = nullArray
    p.a0o = 0
    a = p.a
    n = p.o - 1
    h.a0 = a
    h.a0o = n
    a = aR[2]
    c.a3 = a
    l = "wait"
    c.a4 = "ready"
    if (a !== null) aJ(a, l)
    a = c.a6
    a.i0 = 0
    a.a1.a0 = nullArray
    a.a1.a0o = 0
    l = [
        {
            a0: null,
        },
    ]
    l[0].a0 = a
    l = DB(tV, l[0])
    f.onload = l
    f.send()
    if ((a.i0 & 255) !== 0) {
        j = c.a3
        if (j !== null) {
            a = c.a4
            aJ(j, a)
        }
        c.a5 = p
        c.a0 = null
        j = p.a0
        n = p.a0o | 0
        ;(j !== nullArray || n !== 0 ? j : W)[j !== nullArray || n !== 0 ? n : X].a0(j !== nullArray || n !== 0 ? j : W, j !== nullArray || n !== 0 ? n : X)
    } else {
        c.i7 = 0
        a.a1.a0 = j
        a.a1.a0o = 0
    }
}
function tY(h, i) {
    h = h[i]
    var f = 0,
        a = null,
        c = null
    a = h.a3
    if (a !== null) {
        c = h.a4
        aJ(a, c)
    }
    a = h.a2
    h.a5 = a
    h.a0 = null
    c = a.a0
    f = a.a0o | 0
    ;(c !== nullArray || f !== 0 ? c : W)[c !== nullArray || f !== 0 ? f : X].a0(c !== nullArray || f !== 0 ? c : W, c !== nullArray || f !== 0 ? f : X)
}
function tX(a, b) {}
function tV(h) {
    var f = null,
        c = null,
        a = 0
    f = h.a0
    f.i0 = 1
    c = f.a1.a0
    a = f.a1.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a0(c, a)
}
function tP(a, b) {}
function tO(a, b) {}
function tN(l, j) {
    var f = null,
        h = null,
        n = null,
        a = null,
        c = 0
    a = wI({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (a = {
                i0: 0,
                i1: 0,
            }),
        },
        i3: 0,
        a4: null,
    })
    a = a
    a.a0 = tD
    a.a1 = tC
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    h = f.a1
    h.i0 = 0
    n = f.a
    c = f.o - 1
    l.a0 = n
    l.a0o = c
    c = h.i0 | 0
    h.i1 = 0
    if ((c & 65535) < 256) h.i0 = c | 256
    a.a4 = f
    a.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function tM(G, E, C, A, x) {
    var p = null,
        n = null,
        u = null,
        l = null,
        c = null,
        a = null,
        j = 0,
        h = null,
        f = null,
        r = null
    l = new B1().a
    c = l[0]
    c.a0 = tJ
    c.a1 = tI
    c.a5 = E
    p = c.a2
    p.a0 = nullArray
    p.a0o = 0
    n = p.a1
    n.i0 = 0
    a = p.a
    j = p.o - 1
    G.a0 = a
    G.a0o = j
    j = (((A - 1) | 0) + x) | 0
    a: {
        b: if (E.a6 !== null) {
            a = String(A)
            a = a.concat("-", j)
            c.a6 = a
            u = c.a4
            h = c.a3
            while (1) {
                c.a7 = f
                f = c.a5
                h.i0 = 0
                h.a2.a0 = nullArray
                h.a2.a0o = 0
                f = f.a6
                r = [
                    {
                        a0: null,
                    },
                ]
                r[0].a0 = h
                r = DB(h5, r[0])
                f.onmessage = r
                if (a !== null) f.send(a)
                if ((h.i0 & 255) !== 0) {
                    a = h.a1.data
                    if (+a.byteLength === 0) {
                        f = c.a7
                        a = null
                    } else {
                        if (!(+a.byteLength === 1)) {
                            f = new Uint8Array(a)
                            n.i0 = 256
                            n.a1 = f
                            break b
                        }
                        a = c.a7
                        f = new WebSocket(c.a5.a5)
                        c.a8 = f
                        a = "arraybuffer"
                        c.a9 = a
                        f.binaryType = a
                        u.i0 = 0
                        u.a2.a0 = nullArray
                        u.a2.a0o = 0
                        a = [
                            {
                                a0: null,
                            },
                        ]
                        a[0].a0 = u
                        a = DB(h1, a[0])
                        f.onmessage = a
                        if ((u.i0 & 255) === 0) {
                            c.i13 = 1
                            u.a2.a0 = l
                            u.a2.a0o = 0
                            break a
                        }
                        a = c.a8
                        f = c.a5
                        f.a6.close()
                        f.a6 = a
                        a = c.a6
                        f = c.a9
                    }
                    continue
                }
                break
            }
            c.i13 = 0
            h.a2.a0 = l
            h.a2.a0o = 0
            break a
        } else {
            a = new XMLHttpRequest()
            c.a10 = a
            h = E.a5
            f = "?s="
            h = h.concat(f, A, "&e=", j)
            f = "GET"
            a.open(f, h)
            h = "arraybuffer"
            a.responseType = h
            h = c.a12
            b6(h, a)
            a = h.a0
            j = h.a0o | 0
            if (a !== nullArray || j !== 0) {
                if (a[j].a0 !== null) {
                    c.i13 = 2
                    c = a[j].a[a[j].o - -1]
                    c.a0 = l
                    c.a0o = 0
                    break a
                }
                a[j].a1(a, j)
            }
            l = c.a10.response
            a = new Uint8Array(l)
            n.i0 = 256
            n.a1 = a
        }
        c.a11 = p
        c.a0 = null
        l = p.a0
        j = p.a0o | 0
        ;(l !== nullArray || j !== 0 ? l : W)[l !== nullArray || j !== 0 ? j : X].a0(l !== nullArray || j !== 0 ? l : W, l !== nullArray || j !== 0 ? j : X)
    }
}
function tJ(p, q) {
    var l = null,
        h = 0,
        c = null,
        j = null,
        a = null,
        f = null,
        n = null
    h = p[q].i13 | 0
    l = p[q].a2
    a: {
        b: if (h << 30 > -1073741824) {
            c = p[q].a4
            j = p[q].a3
            if ((h & 3) !== 0) {
                h = -1
            } else {
                h = 0
            }
            c: while (1) {
                switch (h | 0) {
                    case 0:
                        a = j.a1.data
                        if (+a.byteLength === 0) {
                            f = p[q].a7
                            a = null
                            break
                        }
                        if (+a.byteLength === 1) {
                            a = p[q].a7
                            f = new WebSocket(p[q].a5.a5)
                            p[q].a8 = f
                            a = "arraybuffer"
                            p[q].a9 = a
                            f.binaryType = a
                            c.i0 = 0
                            c.a2.a0 = nullArray
                            c.a2.a0o = 0
                            a = [
                                {
                                    a0: null,
                                },
                            ]
                            a[0].a0 = c
                            a = DB(h1, a[0])
                            f.onmessage = a
                            if ((c.i0 & 255) !== 0) {
                                h = -1
                                continue c
                            }
                            p[q].i13 = 1
                            c.a2.a0 = p
                            c.a2.a0o = q
                            break a
                        }
                        f = new Uint8Array(a)
                        a = l.a1
                        a.i0 = 256
                        a.a1 = f
                        break b
                    default:
                        a = p[q].a8
                        f = p[q].a5
                        f.a6.close()
                        f.a6 = a
                        a = p[q].a6
                        f = p[q].a9
                }
                p[q].a7 = f
                f = p[q].a5
                j.i0 = 0
                j.a2.a0 = nullArray
                j.a2.a0o = 0
                f = f.a6
                n = [
                    {
                        a0: null,
                    },
                ]
                n[0].a0 = j
                n = DB(h5, n[0])
                f.onmessage = n
                if (a !== null) f.send(a)
                if ((j.i0 & 255) !== 0) {
                    h = 0
                    continue c
                }
                break
            }
            p[q].i13 = 0
            j.a2.a0 = p
            j.a2.a0o = q
            break a
        } else {
            c = p[q].a12.a0
            h = p[q].a12.a0o | 0
            if (c !== nullArray || h !== 0) c[h].a1(c, h)
            c = p[q].a10.response
            j = new Uint8Array(c)
            c = l.a1
            c.i0 = 256
            c.a1 = j
        }
        p[q].a11 = l
        p[q].a0 = null
        c = l.a0
        h = l.a0o | 0
        ;(c !== nullArray || h !== 0 ? c : W)[c !== nullArray || h !== 0 ? h : X].a0(c !== nullArray || h !== 0 ? c : W, c !== nullArray || h !== 0 ? h : X)
    }
}
function tI(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        if (f.i13 << 30 <= -1073741824) {
            c = f.a12.a0
            a = f.a12.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        }
    }
}
function h5(f, c) {
    var a = null,
        j = null,
        h = 0
    a = f.a0
    a.a1 = c
    a.i0 = 1
    j = a.a2.a0
    h = a.a2.a0o | 0
    if (j !== nullArray || h !== 0) j[h].a0(j, h)
}
function h1(f, c) {
    var a = null,
        j = null,
        h = 0
    a = f.a0
    a.a1 = c
    a.i0 = 1
    j = a.a2.a0
    h = a.a2.a0o | 0
    if (j !== nullArray || h !== 0) j[h].a0(j, h)
}
function tD(a, b) {}
function tC(a, b) {}
function tB(l, j) {
    var f = null,
        h = null,
        n = null,
        a = null,
        c = 0
    a = wG({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (a = {
                i0: 0,
                i1: 0,
            }),
        },
        i3: 0,
        a4: null,
    })
    a = a
    a.a0 = t3
    a.a1 = t2
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    h = f.a1
    h.i0 = 0
    n = f.a
    c = f.o - 1
    l.a0 = n
    l.a0o = c
    c = h.i0 | 0
    h.i1 = 0
    if ((c & 65535) < 256) h.i0 = c | 256
    a.a4 = f
    a.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function vl(C, A, x, u, r) {
    var n = null,
        p = null,
        j = null,
        f = null,
        c = null,
        h = 0,
        a = null,
        l = null
    j = wH({
        a0: null,
        a1: null,
        a2: (j = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: new Uint8Array(7),
        a4: (j = {
            a0: nullArray,
            a0o: 0,
        }),
        i5: 0,
        a6: null,
        a7: null,
    }).a
    f = j[0]
    f.a0 = t7
    f.a1 = t6
    n = f.a2
    n.a0 = nullArray
    n.a0o = 0
    p = n.a1
    p.i0 = 0
    c = n.a
    h = n.o - 1
    C.a0 = c
    C.a0o = h
    c = new XMLHttpRequest()
    f.a6 = c
    a = A.a5
    a = a.concat(".c")
    l = f.a3
    jp(l, 0, u >>> 17)
    l[6] = 0
    a = a.concat(z(l, 0))
    a = a.concat(".txt")
    l = "GET"
    c.open(l, a)
    a = "arraybuffer"
    c.responseType = a
    a = f.a4
    b6(a, c)
    c = a.a0
    h = a.a0o | 0
    a: {
        if (c !== nullArray || h !== 0) {
            if (c[h].a0 !== null) {
                f.i5 = 0
                f = c[h].a[c[h].o - -1]
                f.a0 = j
                f.a0o = 0
                break a
            }
            c[h].a1(c, h)
        }
        j = f.a6.response
        c = new Uint8Array(j)
        p.i0 = 256
        p.a1 = c
        f.a7 = n
        f.a0 = null
        j = n.a0
        h = n.a0o | 0
        ;(j !== nullArray || h !== 0 ? j : W)[j !== nullArray || h !== 0 ? h : X].a0(j !== nullArray || h !== 0 ? j : W, j !== nullArray || h !== 0 ? h : X)
    }
}
function t7(h, i) {
    h = h[i]
    var j = null,
        a = null,
        f = 0,
        c = null
    a = h.a4.a0
    f = h.a4.a0o | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = h.a6.response
    j = new Uint8Array(a)
    a = h.a2
    c = a.a1
    c.i0 = 256
    c.a1 = j
    h.a7 = a
    h.a0 = null
    c = a.a0
    f = a.a0o | 0
    ;(c !== nullArray || f !== 0 ? c : W)[c !== nullArray || f !== 0 ? f : X].a0(c !== nullArray || f !== 0 ? c : W, c !== nullArray || f !== 0 ? f : X)
}
function t6(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a4.a0
        a = f.a4.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function t3(a, b) {}
function t2(a, b) {}
function t1(r, p, n) {
    var l = null,
        j = null,
        f = null,
        a = null,
        h = null,
        c = 0
    f = new zQ().a
    a = f[0]
    a.a0 = uZ
    a.a1 = uY
    a.a4 = n
    a.a3 = p
    l = a.a2
    l.a0 = nullArray
    l.a0o = 0
    h = l.a
    c = l.o - 1
    r.a0 = h
    r.a0o = c
    h = a.a6
    j0(h, n, p.i2 | 0, p.i3 | 0)
    j = h.a0
    c = h.a0o | 0
    a: {
        if (j !== nullArray || c !== 0) {
            if (j[c].a0 !== null) {
                a.i8 = 0
                a = j[c].a[j[c].o - -1]
                a.a0 = f
                a.a0o = 0
                break a
            }
            j[c].a1(j, c)
        }
        eT(a.a7, a.a3, a.a4)
        a.a5 = l
        a.a0 = null
        f = l.a0
        c = l.a0o | 0
        ;(f !== nullArray || c !== 0 ? f : W)[f !== nullArray || c !== 0 ? c : X].a0(f !== nullArray || c !== 0 ? f : W, f !== nullArray || c !== 0 ? c : X)
    }
}
function vB(c) {
    var a = null,
        l = null,
        j = 0,
        h = null,
        f = 0
    a = c.a10
    l = a.a0
    j = a.a0o | 0
    h = a.a1
    f = a.a1o | 0
    if (l === h && j === f) return ((c.i11 & 65535) > 255 ? 1 : 0) | 0
    return 1 | 0
}
function vA(u, r) {
    var j = null,
        l = null,
        p = null,
        n = 0,
        h = null,
        f = null,
        a = null,
        c = 0
    h = wF({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
    }).a
    f = h[0]
    f.a0 = vx
    f.a1 = vw
    j = f.a2
    j.a0 = nullArray
    j.a0o = 0
    l = j.a1
    l.i0 = 0
    a = j.a
    c = j.o - 1
    u.a0 = a
    u.a0o = c
    a = r.a5
    p = f.a3
    a.a0.a4(p, a)
    a = p.a0
    c = p.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        c = a.a1.i1 | 0
        a = p.a0
        n = p.a0o | 0
        if (a !== nullArray || n !== 0) a[n].a1(a, n)
        l.i0 = 256
        l.i1 = c | 2
        f.a5 = j
        f.a0 = null
        h = j.a0
        c = j.a0o | 0
        ;(h !== nullArray || c !== 0 ? h : W)[h !== nullArray || c !== 0 ? c : X].a0(h !== nullArray || c !== 0 ? h : W, h !== nullArray || c !== 0 ? c : X)
    }
}
function vx(j, k) {
    j = j[k]
    var h = 0,
        a = null,
        f = 0,
        c = null
    a = j.a3.a0
    f = j.a3.a0o | 0
    a = a[f].a[a[f].o - -1]
    f = a.a1.i1 | 0
    a = j.a3.a0
    h = j.a3.a0o | 0
    if (a !== nullArray || h !== 0) a[h].a1(a, h)
    a = j.a2
    c = a.a1
    c.i0 = 256
    c.i1 = f | 2
    j.a5 = a
    j.a0 = null
    c = a.a0
    f = a.a0o | 0
    ;(c !== nullArray || f !== 0 ? c : W)[c !== nullArray || f !== 0 ? f : X].a0(c !== nullArray || f !== 0 ? c : W, c !== nullArray || f !== 0 ? f : X)
}
function vw(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function uZ(h, i) {
    h = h[i]
    var f = null,
        c = null,
        a = 0
    c = h.a6.a0
    a = h.a6.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    eT(h.a7, h.a3, h.a4)
    c = h.a2
    h.a5 = c
    h.a0 = null
    f = c.a0
    a = c.a0o | 0
    ;(f !== nullArray || a !== 0 ? f : W)[f !== nullArray || a !== 0 ? a : X].a0(f !== nullArray || a !== 0 ? f : W, f !== nullArray || a !== 0 ? a : X)
}
function uY(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a6.a0
        a = f.a6.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function s$(x, u) {
    var l = null,
        r = null,
        p = null,
        n = 0,
        j = null,
        f = null,
        c = null,
        a = 0,
        h = null
    j = xh({
        a0: null,
        a1: null,
        a2: (j = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                i1: 0,
            },
        }),
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        a5: null,
        a6: null,
    }).a
    f = j[0]
    f.a0 = sn
    f.a1 = sm
    l = f.a2
    l.a0 = nullArray
    l.a0o = 0
    r = l.a1
    r.i0 = 0
    c = l.a
    a = l.o - 1
    x.a0 = c
    x.a0o = a
    c = u.a5
    h = u.a6
    f.a5 = h
    p = f.a3
    a4(p, c, h)
    c = p.a0
    a = p.a0o | 0
    a: {
        if (c !== nullArray || a !== 0) {
            if (c[a].a0 !== null) {
                f.i4 = 0
                f = c[a].a[c[a].o - -1]
                f.a0 = j
                f.a0o = 0
                break a
            }
        }
        c = c[a].a[c[a].o - -1]
        c = c.a1.a1
        h = p.a0
        a = p.a0o | 0
        if (h !== nullArray || a !== 0) h[a].a1(h, a)
        h = f.a5
        a = c.permType
        n = r.i0 | 0
        r.i1 = a
        if ((n & 65535) < 256) r.i0 = n | 256
        f.a6 = l
        f.a0 = null
        j = l.a0
        a = l.a0o | 0
        ;(j !== nullArray || a !== 0 ? j : W)[j !== nullArray || a !== 0 ? a : X].a0(j !== nullArray || a !== 0 ? j : W, j !== nullArray || a !== 0 ? a : X)
    }
}
function s_(x, A, C, E, H, K, L) {
    var l = null,
        u = null,
        p = null,
        r = null,
        G = 0,
        n = null,
        a = null,
        f = null,
        c = 0,
        h = null,
        j = 0
    n = new zC().a
    a = n[0]
    a.a0 = sw
    a.a1 = sv
    a.i9 = L
    a.a8 = K
    a.i7 = H
    a.i6 = E
    l = a.a2
    l.a0 = nullArray
    l.a0o = 0
    u = l.a1
    u.i0 = 0
    f = l.a
    c = l.o - 1
    x.a0 = f
    x.a0o = c
    f = A.a5
    h = A.a6
    a.a10 = h
    p = "r"
    a.a11 = p
    r = a.a3
    aB(r, f, h, p, 0, 0)
    f = r.a0
    c = r.a0o | 0
    a: {
        if (f !== nullArray || c !== 0) {
            if (f[c].a0 !== null) {
                a.i5 = 0
                a = f[c].a[f[c].o - -1]
                a.a0 = n
                a.a0o = 0
                break a
            }
        }
        f = f[c].a[f[c].o - -1]
        c = f.a1.i1 | 0
        f = r.a0
        j = r.a0o | 0
        if (f !== nullArray || j !== 0) f[j].a1(f, j)
        f = a.a11
        h = a.a10
        j = a.i9 | 0
        h = a.a8
        G = a.i7 | 0
        f = ap
        f[(0 + c) | 0].offset = a.i6 | 0
        f = a.a4
        bq(f, c, h, j, G)
        h = f.a0
        c = f.a0o | 0
        if (h !== nullArray || c !== 0) {
            if (h[c].a0 !== null) {
                a.i5 = 1
                a = h[c].a[h[c].o - -1]
                a.a0 = n
                a.a0o = 0
                break a
            }
        }
        h = h[c].a[h[c].o - -1]
        c = h.a1.i1 | 0
        h = f.a0
        j = f.a0o | 0
        if (h !== nullArray || j !== 0) h[j].a1(h, j)
        j = u.i0 | 0
        u.i1 = c
        if ((j & 65535) < 256) u.i0 = j | 256
        a.a12 = l
        a.a0 = null
        n = l.a0
        c = l.a0o | 0
        ;(n !== nullArray || c !== 0 ? n : W)[n !== nullArray || c !== 0 ? c : X].a0(n !== nullArray || c !== 0 ? n : W, n !== nullArray || c !== 0 ? c : X)
    }
}
function s9(C, E, G, H, K, L, O) {
    var l = null,
        A = null,
        M = 0,
        r = null,
        n = null,
        c = null,
        f = null,
        a = 0,
        h = null,
        j = null,
        x = null,
        p = 0,
        u = null
    n = new zN().a
    c = n[0]
    c.a0 = s6
    c.a1 = s5
    c.i10 = O
    c.a9 = L
    c.i8 = K
    c.i7 = H
    l = c.a2
    l.a0 = nullArray
    l.a0o = 0
    A = l.a1
    A.i0 = 0
    f = l.a
    a = l.o - 1
    C.a0 = f
    C.a0o = a
    f = E.a5
    h = E.a6
    c.a11 = h
    j = "r"
    c.a12 = j
    x = c.a3
    aB(x, f, h, j, 0, 0)
    f = x.a0
    a = x.a0o | 0
    a: {
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                c.i6 = 0
                c = f[a].a[f[a].o - -1]
                c.a0 = n
                c.a0o = 0
                break a
            }
        }
        f = f[a].a[f[a].o - -1]
        a = f.a1.i1 | 0
        c.i13 = a
        f = x.a0
        p = x.a0o | 0
        if (f !== nullArray || p !== 0) f[p].a1(f, p)
        f = c.a12
        h = c.a11
        p = c.i10 | 0
        h = c.a9
        M = c.i8 | 0
        f = ap
        f[(0 + a) | 0].offset = c.i7 | 0
        f = c.a4
        aX(f, a, h, p, M)
        h = f.a0
        a = f.a0o | 0
        if (h !== nullArray || a !== 0) {
            if (h[a].a0 !== null) {
                c.i6 = 1
                c = h[a].a[h[a].o - -1]
                c.a0 = n
                c.a0o = 0
                break a
            }
        }
        h = h[a].a[h[a].o - -1]
        c.i14 = h.a1.i1 | 0
        h = f.a0
        a = f.a0o | 0
        if (h !== nullArray || a !== 0) h[a].a1(h, a)
        f = wC({
            a0: null,
            a1: null,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
            a3: null,
            a4: (f = {
                i0: 0,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            }),
            i5: 0,
        }).a
        a = c.i13 | 0
        h = f[0]
        h.a0 = by
        h.a1 = bx
        r = h.a2
        r.a0 = nullArray
        r.a0o = 0
        j = r.a
        p = r.o - 1
        c.a5.a0 = j
        c.a5.a0o = p
        j = h.a4
        j.i0 = 0
        j.a1.a0 = nullArray
        j.a1.a0o = 0
        x = ap
        u = [
            {
                a0: null,
            },
        ]
        u[0].a0 = j
        u = DB(bv, u[0])
        cheerpOSClose(x, a, u)
        if ((j.i0 & 255) !== 0) {
            h.a3 = r
            h.a0 = null
            f = r.a0
            a = r.a0o | 0
            ;(f !== nullArray || a !== 0 ? f : W)[f !== nullArray || a !== 0 ? a : X].a0(f !== nullArray || a !== 0 ? f : W, f !== nullArray || a !== 0 ? a : X)
        } else {
            h.i5 = 0
            j.a1.a0 = f
            j.a1.a0o = 0
        }
        f = c.a5.a0
        a = c.a5.a0o | 0
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                c.i6 = 2
                c = f[a].a[f[a].o - -1]
                c.a0 = n
                c.a0o = 0
                break a
            }
            f[a].a1(f, a)
        }
        a = A.i0 | 0
        A.i1 = c.i14 | 0
        if ((a & 65535) < 256) A.i0 = a | 256
        c.a15 = l
        c.a0 = null
        n = l.a0
        a = l.a0o | 0
        ;(n !== nullArray || a !== 0 ? n : W)[n !== nullArray || a !== 0 ? a : X].a0(n !== nullArray || a !== 0 ? n : W, n !== nullArray || a !== 0 ? a : X)
    }
}
function s6(r, s) {
    var p = null,
        x = null,
        u = 0,
        a = 0,
        h = null,
        f = null,
        c = null,
        j = null,
        l = 0,
        n = null
    a = r[s].i6 | 0
    h = r[s].a5
    a: {
        b: {
            if (a << 30 > -1073741824) {
                f = r[s].a4
                if ((a & 3) !== 0) {
                    c = f.a0
                    a = f.a0o | 0
                    c = c[a]
                } else {
                    c = r[s].a3.a0
                    a = r[s].a3.a0o | 0
                    c = c[a].a[c[a].o - -1]
                    a = c.a1.i1 | 0
                    r[s].i13 = a
                    c = r[s].a3.a0
                    l = r[s].a3.a0o | 0
                    if (c !== nullArray || l !== 0) c[l].a1(c, l)
                    c = r[s].a12
                    j = r[s].a11
                    l = r[s].i10 | 0
                    c = r[s].a9
                    u = r[s].i8 | 0
                    j = ap
                    j[(0 + a) | 0].offset = r[s].i7 | 0
                    aX(f, a, c, l, u)
                    c = f.a0
                    a = f.a0o | 0
                    if (c !== nullArray || a !== 0) {
                        if (c[a].a0 !== null) {
                            r[s].i6 = 1
                            h = c[a].a[c[a].o - -1]
                            h.a0 = r
                            h.a0o = s
                            break a
                        }
                        c = c[a]
                    } else {
                        c = null
                    }
                }
                c = c.a[c.o - -1]
                r[s].i14 = c.a1.i1 | 0
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                f = wC({
                    a0: null,
                    a1: null,
                    a2: {
                        a0: nullArray,
                        a0o: 0,
                    },
                    a3: null,
                    a4: (f = {
                        i0: 0,
                        a1: {
                            a0: nullArray,
                            a0o: 0,
                        },
                    }),
                    i5: 0,
                }).a
                a = r[s].i13 | 0
                c = f[0]
                c.a0 = by
                c.a1 = bx
                p = c.a2
                p.a0 = nullArray
                p.a0o = 0
                j = p.a
                l = p.o - 1
                h.a0 = j
                h.a0o = l
                j = c.a4
                j.i0 = 0
                j.a1.a0 = nullArray
                j.a1.a0o = 0
                x = ap
                n = [
                    {
                        a0: null,
                    },
                ]
                n[0].a0 = j
                n = DB(bv, n[0])
                cheerpOSClose(x, a, n)
                if ((j.i0 & 255) !== 0) {
                    c.a3 = p
                    c.a0 = null
                    f = p.a0
                    a = p.a0o | 0
                    ;(f !== nullArray || a !== 0 ? f : W)[f !== nullArray || a !== 0 ? a : X].a0(f !== nullArray || a !== 0 ? f : W, f !== nullArray || a !== 0 ? a : X)
                } else {
                    c.i5 = 0
                    j.a1.a0 = f
                    j.a1.a0o = 0
                }
                f = h.a0
                a = h.a0o | 0
                if (f === nullArray && a === 0) break b
                if (f[a].a0 !== null) {
                    r[s].i6 = 2
                    h = f[a].a[f[a].o - -1]
                    h.a0 = r
                    h.a0o = s
                    break a
                }
                a = a
                h = f
            } else {
                f = h.a0
                a = h.a0o | 0
                if (f === nullArray && a === 0) break b
                a = a
                h = f
            }
            h[a].a1(h, a)
        }
        h = r[s].a2
        f = h.a1
        a = f.i0 | 0
        f.i1 = r[s].i14 | 0
        if ((a & 65535) < 256) f.i0 = a | 256
        r[s].a15 = h
        r[s].a0 = null
        f = h.a0
        a = h.a0o | 0
        ;(f !== nullArray || a !== 0 ? f : W)[f !== nullArray || a !== 0 ? a : X].a0(f !== nullArray || a !== 0 ? f : W, f !== nullArray || a !== 0 ? a : X)
    }
}
function s5(f, g) {
    f = f[g]
    var h = null,
        a = 0,
        c = null
    if (f.a0 !== null) {
        a = f.i6 | 0
        if (a << 30 > -1073741824) {
            if ((a & 3) !== 0) {
                c = f.a4.a0
                a = f.a4.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            } else {
                c = f.a3.a0
                a = f.a3.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                c = f.a12
                h = f.a11
            }
        } else {
            c = f.a5.a0
            a = f.a5.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        }
    }
}
function aB(l, j, h, f, c, a) {
    var n = null,
        x = null,
        C = null,
        G = null,
        E = null,
        u = null,
        p = null,
        r = 0,
        A = null
    u = wA({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (u = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (u = {
            i0: 0,
            i1: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    n = u[0]
    n.a0 = sE
    n.a1 = sD
    x = n.a2
    x.a0 = nullArray
    x.a0o = 0
    C = x.a1
    C.i0 = 0
    p = x.a
    r = x.o - 1
    l.a0 = p
    l.a0o = r
    p = n.a3
    p.i0 = 0
    p.a2.a0 = nullArray
    p.a2.a0o = 0
    G = j.a3
    E = ap
    A = [
        {
            a0: null,
        },
    ]
    A[0].a0 = p
    A = DB(sB, A[0])
    cheerpOSOpenMain(h, G, E, f, c, a, A)
    if ((p.i0 & 255) !== 0) {
        r = p.i1 | 0
        C.i0 = 256
        C.i1 = r
        n.a5 = x
        n.a0 = null
        u = x.a0
        r = x.a0o | 0
        ;(u !== nullArray || r !== 0 ? u : W)[u !== nullArray || r !== 0 ? r : X].a0(u !== nullArray || r !== 0 ? u : W, u !== nullArray || r !== 0 ? r : X)
    } else {
        n.i4 = 0
        p.a2.a0 = u
        p.a2.a0o = 0
    }
}
function aX(j, h, f, c, a) {
    var l = null,
        u = null,
        A = null,
        C = null,
        r = null,
        n = null,
        p = 0,
        x = null
    r = wB({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (r = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (r = {
            i0: 0,
            i1: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    l = r[0]
    l.a0 = vq
    l.a1 = vp
    u = l.a2
    u.a0 = nullArray
    u.a0o = 0
    A = u.a1
    A.i0 = 0
    n = u.a
    p = u.o - 1
    j.a0 = n
    j.a0o = p
    n = l.a3
    n.i0 = 0
    n.a2.a0 = nullArray
    n.a2.a0o = 0
    C = ap
    x = [
        {
            a0: null,
        },
    ]
    x[0].a0 = n
    x = DB(iu, x[0])
    cheerpOSWrite(C, h, f, c, a, x)
    if ((n.i0 & 255) !== 0) {
        p = n.i1 | 0
        A.i0 = 256
        A.i1 = p
        l.a5 = u
        l.a0 = null
        r = u.a0
        p = u.a0o | 0
        ;(r !== nullArray || p !== 0 ? r : W)[r !== nullArray || p !== 0 ? p : X].a0(r !== nullArray || p !== 0 ? r : W, r !== nullArray || p !== 0 ? p : X)
    } else {
        l.i4 = 0
        n.a2.a0 = r
        n.a2.a0o = 0
    }
}
function by(a, b) {
    a = a[b]
    var h = null,
        f = null,
        c = 0
    h = a.a2
    a.a3 = h
    a.a0 = null
    f = h.a0
    c = h.a0o | 0
    ;(f !== nullArray || c !== 0 ? f : W)[f !== nullArray || c !== 0 ? c : X].a0(f !== nullArray || c !== 0 ? f : W, f !== nullArray || c !== 0 ? c : X)
}
function bx(a, b) {}
function bv(a) {
    var h = null,
        f = null,
        c = 0
    h = a.a0
    h.i0 = 1
    f = h.a1.a0
    c = h.a1.a0o | 0
    if (f !== nullArray || c !== 0) f[c].a0(f, c)
}
function vq(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    c = h.a3.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function vp(a, b) {}
function iu(f, c) {
    var a = null,
        j = null,
        h = 0
    a = f.a0
    a.i1 = c
    a.i0 = 1
    j = a.a2.a0
    h = a.a2.a0o | 0
    if (j !== nullArray || h !== 0) j[h].a0(j, h)
}
function sE(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    c = h.a3.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function sD(a, b) {}
function sB(j, h) {
    var a = null,
        f = null,
        c = 0
    a = j.a0
    a.i1 = h
    a.i0 = 1
    f = a.a2.a0
    c = a.a2.a0o | 0
    if (f !== nullArray || c !== 0) f[c].a0(f, c)
}
function sw(l, m) {
    var n = 0,
        f = null,
        a = null,
        c = 0,
        h = 0,
        j = null
    f = l[m].a4
    a: {
        if ((l[m].i5 & 3) !== 0) {
            a = f.a0
            c = f.a0o | 0
            a = a[c]
        } else {
            a = l[m].a3.a0
            c = l[m].a3.a0o | 0
            a = a[c].a[a[c].o - -1]
            c = a.a1.i1 | 0
            a = l[m].a3.a0
            h = l[m].a3.a0o | 0
            if (a !== nullArray || h !== 0) a[h].a1(a, h)
            a = l[m].a11
            j = l[m].a10
            h = l[m].i9 | 0
            a = l[m].a8
            n = l[m].i7 | 0
            j = ap
            j[(0 + c) | 0].offset = l[m].i6 | 0
            bq(f, c, a, h, n)
            a = f.a0
            c = f.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    l[m].i5 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = l
                    f.a0o = m
                    break a
                }
                a = a[c]
            } else {
                a = null
            }
        }
        a = a.a[a.o - -1]
        c = a.a1.i1 | 0
        a = f.a0
        h = f.a0o | 0
        if (a !== nullArray || h !== 0) a[h].a1(a, h)
        f = l[m].a2
        a = f.a1
        h = a.i0 | 0
        a.i1 = c
        if ((h & 65535) < 256) a.i0 = h | 256
        l[m].a12 = f
        l[m].a0 = null
        a = f.a0
        c = f.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
    }
}
function sv(f, g) {
    f = f[g]
    var h = null,
        a = null,
        c = 0
    if (f.a0 !== null)
        if ((f.i5 & 3) !== 0) {
            a = f.a4.a0
            c = f.a4.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
        } else {
            a = f.a3.a0
            c = f.a3.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a11
            h = f.a10
        }
}
function bq(j, h, f, c, a) {
    var l = null,
        u = null,
        A = null,
        C = null,
        r = null,
        n = null,
        p = 0,
        x = null
    r = xi({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (r = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (r = {
            i0: 0,
            i1: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    l = r[0]
    l.a0 = ss
    l.a1 = sr
    u = l.a2
    u.a0 = nullArray
    u.a0o = 0
    A = u.a1
    A.i0 = 0
    n = u.a
    p = u.o - 1
    j.a0 = n
    j.a0o = p
    n = l.a3
    n.i0 = 0
    n.a2.a0 = nullArray
    n.a2.a0o = 0
    C = ap
    x = [
        {
            a0: null,
        },
    ]
    x[0].a0 = n
    x = DB(iu, x[0])
    cheerpOSRead(C, h, f, c, a, x)
    if ((n.i0 & 255) !== 0) {
        p = n.i1 | 0
        A.i0 = 256
        A.i1 = p
        l.a5 = u
        l.a0 = null
        r = u.a0
        p = u.a0o | 0
        ;(r !== nullArray || p !== 0 ? r : W)[r !== nullArray || p !== 0 ? p : X].a0(r !== nullArray || p !== 0 ? r : W, r !== nullArray || p !== 0 ? p : X)
    } else {
        l.i4 = 0
        n.a2.a0 = r
        n.a2.a0o = 0
    }
}
function ss(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    c = h.a3.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function sr(a, b) {}
function sn(j, k) {
    j = j[k]
    var h = 0,
        f = null,
        c = 0,
        a = null
    f = j.a3.a0
    c = j.a3.a0o | 0
    f = f[c].a[f[c].o - -1]
    f = f.a1.a1
    a = j.a3.a0
    c = j.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = j.a5
    c = f.permType
    f = j.a2
    a = f.a1
    h = a.i0 | 0
    a.i1 = c
    if ((h & 65535) < 256) a.i0 = h | 256
    j.a6 = f
    j.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function sm(f, g) {
    f = f[g]
    var c = 0,
        a = null
    if (f.a0 !== null) {
        a = f.a3.a0
        c = f.a3.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a5
    }
}
function a4(f, c, a) {
    var h = null,
        l = null,
        x = null,
        u = null,
        A = null,
        j = null,
        r = null,
        p = 0,
        n = null
    j = xg({
        a0: null,
        a1: null,
        a2: (j = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: (j = {
            i0: 0,
            a1: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
        a6: null,
    }).a
    h = j[0]
    h.a0 = sj
    h.a1 = si
    l = h.a2
    l.a0 = nullArray
    l.a0o = 0
    x = l.a1
    x.i0 = 0
    r = l.a
    p = l.o - 1
    f.a0 = r
    f.a0o = p
    r = new Object()
    h.a5 = r
    u = h.a3
    u.i0 = 0
    u.a1.a0 = nullArray
    u.a1.a0o = 0
    A = c.a3
    n = [
        {
            a0: null,
        },
    ]
    n[0].a0 = u
    n = DB(sg, n[0])
    cheerpOSStatMain(A, a, r, n)
    if ((u.i0 & 255) !== 0) {
        j = h.a5
        x.i0 = 256
        x.a1 = j
        h.a6 = l
        h.a0 = null
        j = l.a0
        p = l.a0o | 0
        ;(j !== nullArray || p !== 0 ? j : W)[j !== nullArray || p !== 0 ? p : X].a0(j !== nullArray || p !== 0 ? j : W, j !== nullArray || p !== 0 ? p : X)
    } else {
        h.i4 = 0
        u.a1.a0 = j
        u.a1.a0o = 0
    }
}
function sj(j, k) {
    j = j[k]
    var c = null,
        h = null,
        f = 0,
        a = null
    a = j.a5
    c = j.a2
    h = c.a1
    h.i0 = 256
    h.a1 = a
    j.a6 = c
    j.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : W)[a !== nullArray || f !== 0 ? f : X].a0(a !== nullArray || f !== 0 ? a : W, a !== nullArray || f !== 0 ? f : X)
}
function si(a, b) {}
function sg(h) {
    var f = null,
        c = null,
        a = 0
    f = h.a0
    f.i0 = 1
    c = f.a1.a0
    a = f.a1.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a0(c, a)
}
function C0(c) {
    var a = null
    a = {
        i0: 0,
        a1: DD([], 0, 32, null),
    }
    q3(a, c)
    return a
}
function CZ(a) {}
function CY() {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    s2(c, a.a1)
    c = a.a0
    return c
}
function CX(a) {}
function CW(l, j, h) {
    var a = null,
        c = null,
        f = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    c.a0 = l
    f = {
        a0: null,
    }
    r3(f, c, l.a4, j, h, a.a1, a.a2)
    f = a.a0
    return f
}
function CV(c) {
    var a = null
    a = {
        a0: null,
    }
    r9(a, c)
}
function CU(h, f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    sc(c, h, f, a.a1, a.a2)
    c = a.a0
    return c
}
function CT(a) {}
function CR(a) {}
function CQ(f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    pP(c, f, a.a1, a.a2)
    c = a.a0
    return c
}
function CP(a) {}
function CO(f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    pU(c, f, a.a1, a.a2)
    c = a.a0
    return c
}
function CN(a) {}
function CM(c) {
    var a = null
    a = {
        a0: null,
    }
    pZ(a, c)
}
function CL(h, f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    p4(c, h, f, a.a1, a.a2)
    c = a.a0
    return c
}
function CK(h) {
    var f = null,
        c = null,
        a = 0
    h.a0 = ep
    f = h.a10
    c = f.a0
    a = f.a0o | 0
    if (c !== nullArray || a !== 0) {
        f.a1 = c
        f.a1o = a
    }
    f = h.a9
    c = f.a0
    a = f.a0o | 0
    if (c !== nullArray || a !== 0) {
        f.a1 = c
        f.a1o = a
    }
    f = h.a8
    c = f.a0
    a = f.a0o | 0
    if (c !== nullArray || a !== 0) {
        f.a1 = c
        f.a1o = a
    }
}
function Dj() {
    var l = null,
        r = null,
        p = 0,
        c = null,
        u = null,
        n = 0,
        a = 0,
        j = null,
        h = 0,
        f = null
    l = {
        a0: null,
        i1: 0,
        i2: 0,
        a3: null,
    }
    l.a0 = at
    l.i1 = 0
    a = ac | 0
    ac = (a + 1) | 0
    l.i2 = a
    j = N.a1
    h = N.a1o | 0
    r = N.a2
    f = r.a0
    p = r.a0o | 0
    if (h < p) {
        j[h] = l
        N.a1 = j
        N.a1o = (h + 1) | 0
    } else {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        u = N.a0
        a = N.a0o | 0
        a = intMultiply_1(a, 4)
        h = (intMultiply_1(h, 4) - a) >> 2
        n = (h + 1) | 0
        if (n >>> 0 > 1073741823) ab()
        a = (intMultiply_1(p, 4) - a) | 0
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > n >>> 0 ? a | 0 : n | 0
        } else {
            a = 1073741823
        }
        j = c.a3
        j.a1.a0 = r
        if ((a | 0) !== 0) f = DD([], 0, ((a << 2) / 4) | 0, null)
        else {
            f = nullArray
        }
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + h) | 0
        j.a0 = f
        j.a0o = (0 + a) | 0
        f[h] = l
        c.a2 = f
        c.a2o = (((0 + h) | 0) + 1) | 0
        av(c)
    }
    l.a0 = at
    l.a3 = null
    return l
}
function Di(a) {}
function Dh(f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    p_(c, f, a.a1, a.a2)
    c = a.a0
    return c
}
function C9(a) {}
function C8(c, a) {
    c.a5 = a
}
function C7(c, a) {
    c.a39 = a
}
function C6(a) {
    return a
}
function C5(h) {
    var c = null,
        a = null,
        f = 0
    h.a0 = eu
    c = h.a48
    a = c.a0
    f = c.a0o | 0
    if (a !== nullArray || f !== 0) {
        c.a1 = a
        c.a1o = f
    }
    c = h.a47
    a = c.a0
    f = c.a0o | 0
    if (a !== nullArray || f !== 0) {
        c.a1 = a
        c.a1o = f
    }
    qf(h.a45)
    c = h.a44
    a = c.a0
    if (a !== nullArray || 0 !== 0) c.a1 = a[0]
    c = h.a43
    a = c.a0
    f = c.a0o | 0
    if (a !== nullArray || f !== 0) {
        c.a1 = a
        c.a1o = f
    }
    qe(h.a40.a2)
    c = h.a38
    a = c.a0
    f = c.a0o | 0
    if (a !== nullArray || f !== 0) {
        c.a1 = a
        c.a1o = f
    }
    h.a0 = de
    c = h.a24
    a = c.a0
    f = c.a0o | 0
    if (a !== nullArray || f !== 0) {
        c.a1 = a
        c.a1o = f
    }
    c = h.a23
    a = c.a0
    f = c.a0o | 0
    if (a !== nullArray || f !== 0) {
        c.a1 = a
        c.a1o = f
    }
}
function C4(a) {
    fR(a)
}
function C3(x) {
    var l = null,
        r = null,
        p = 0,
        c = null,
        u = null,
        n = 0,
        a = 0,
        j = null,
        h = 0,
        f = null
    l = {
        a0: null,
        i1: 0,
        i2: 0,
    }
    l.a0 = at
    l.i1 = x
    a = ac | 0
    ac = (a + 1) | 0
    l.i2 = a
    j = N.a1
    h = N.a1o | 0
    r = N.a2
    f = r.a0
    p = r.a0o | 0
    if (h < p) {
        j[h] = l
        N.a1 = j
        N.a1o = (h + 1) | 0
    } else {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        u = N.a0
        a = N.a0o | 0
        a = intMultiply_1(a, 4)
        h = (intMultiply_1(h, 4) - a) >> 2
        n = (h + 1) | 0
        if (n >>> 0 > 1073741823) ab()
        a = (intMultiply_1(p, 4) - a) | 0
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > n >>> 0 ? a | 0 : n | 0
        } else {
            a = 1073741823
        }
        j = c.a3
        j.a1.a0 = r
        if ((a | 0) !== 0) f = DD([], 0, ((a << 2) / 4) | 0, null)
        else {
            f = nullArray
        }
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + h) | 0
        j.a0 = f
        j.a0o = (0 + a) | 0
        f[h] = l
        c.a2 = f
        c.a2o = (((0 + h) | 0) + 1) | 0
        av(c)
    }
    return l
}
function C2(a) {
    return a
}
function Dg(a) {}
function Df(u, r) {
    var h = null,
        l = null,
        p = null,
        n = 0,
        j = null,
        f = null,
        a = null,
        c = 0
    j = wq({
        a0: null,
        a1: null,
        a2: (j = {
            a0: null,
        }),
        a3: null,
        a4: null,
        a5: (j = {
            a0: nullArray,
            a0o: 0,
        }),
        a6: (j = {
            a0: nullArray,
            a0o: 0,
        }),
        i7: 0,
    }).a
    h = j[0]
    h.a0 = qm
    h.a1 = ql
    h.a3 = r
    f = [
        {
            a0: null,
        },
    ]
    l = h.a2
    f[0].a0 = l
    f = DB(qj, f[0])
    p = new Promise(f)
    a = "r"
    h.a4 = a
    f = h.a5
    aB(f, u, r, a, 0, 0)
    a = f.a0
    c = f.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                h.i7 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = j
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        c = a.a1.i1 | 0
        a = f.a0
        n = f.a0o | 0
        if (a !== nullArray || n !== 0) a[n].a1(a, n)
        f = h.a4
        a = h.a3
        if ((c | 0) < 0) l.a0.call(null, null)
        else {
            a = h.a3
            f = h.a6
            b$(f, c, a)
            a = f.a0
            c = f.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    h.i7 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = j
                    f.a0o = 0
                    break a
                }
            }
            j = a[c].a[a[c].o - -1]
            j = j.a1.a1
            a = f.a0
            c = f.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            f = h.a3
            l.a0.call(null, j)
        }
    }
    return p
}
function De(G, H, K) {
    var h = null,
        C = null,
        E = null,
        A = 0,
        u = 0,
        p = null,
        f = null,
        c = null,
        j = null,
        a = 0,
        l = null,
        n = 0,
        x = null,
        r = null
    p = new yV().a
    h = p[0]
    h.a0 = qu
    h.a1 = qt
    h.i5 = K
    h.a4 = H
    h.a3 = G
    f = [
        {
            a0: null,
        },
    ]
    C = h.a2
    f[0].a0 = C
    f = DB(qr, f[0])
    E = new Promise(f)
    f = "/".concat(H)
    h.a6 = f
    c = "w"
    h.a7 = c
    j = h.a11
    aB(j, G, f, c, 0, 0)
    f = j.a0
    a = j.a0o | 0
    a: {
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                h.i14 = 0
                f = f[a].a[f[a].o - -1]
                f.a0 = p
                f.a0o = 0
                break a
            }
        }
        f = f[a].a[f[a].o - -1]
        h.i8 = f.a1.i1 | 0
        f = j.a0
        a = j.a0o | 0
        if (f !== nullArray || a !== 0) f[a].a1(f, a)
        f = h.a7
        c = h.a6
        a = h.i5 | 0
        h.a9 = new Uint8Array(4096)
        a <<= 20
        h.i10 = a
        if ((a | 0) !== 0) {
            f = h.a12
            while (1) {
                aX(f, h.i8 | 0, h.a9, 0, 4096)
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) {
                    if (c[a].a0 !== null) {
                        h.i14 = 1
                        f = c[a].a[c[a].o - -1]
                        f.a0 = p
                        f.a0o = 0
                        break a
                    }
                }
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                a = ((h.i10 | 0) - 4096) | 0
                h.i10 = a
                if ((a | 0) !== 0) continue
                break
            }
        }
        f = wC({
            a0: null,
            a1: null,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
            a3: null,
            a4: (f = {
                i0: 0,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            }),
            i5: 0,
        }).a
        a = h.i8 | 0
        c = f[0]
        c.a0 = by
        c.a1 = bx
        j = c.a2
        j.a0 = nullArray
        j.a0o = 0
        l = j.a
        n = j.o - 1
        h.a13.a0 = l
        h.a13.a0o = n
        l = c.a4
        l.i0 = 0
        l.a1.a0 = nullArray
        l.a1.a0o = 0
        x = ap
        r = [
            {
                a0: null,
            },
        ]
        r[0].a0 = l
        r = DB(bv, r[0])
        cheerpOSClose(x, a, r)
        if ((l.i0 & 255) !== 0) {
            c.a3 = j
            c.a0 = null
            f = j.a0
            a = j.a0o | 0
            ;(f !== nullArray || a !== 0 ? f : W)[f !== nullArray || a !== 0 ? a : X].a0(f !== nullArray || a !== 0 ? f : W, f !== nullArray || a !== 0 ? a : X)
        } else {
            c.i5 = 0
            l.a1.a0 = f
            l.a1.a0o = 0
        }
        f = h.a13.a0
        a = h.a13.a0o | 0
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                h.i14 = 2
                f = f[a].a[f[a].o - -1]
                f.a0 = p
                f.a0o = 0
                break a
            }
            f[a].a1(f, a)
        }
        c = h.a4
        p = h.a3
        f = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
            a6: null,
        }
        f.a0 = at
        f.i1 = 1
        a = ac | 0
        ac = (a + 1) | 0
        f.i2 = a
        l = N.a1
        n = N.a1o | 0
        c = N.a2
        x = c.a0
        A = c.a0o | 0
        if (n < A) {
            l[n] = f
            N.a1 = l
            N.a1o = (n + 1) | 0
        } else {
            j = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (j = {
                        a0: null,
                    }),
                },
            }
            r = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            n = (intMultiply_1(n, 4) - a) >> 2
            u = (n + 1) | 0
            if (u >>> 0 > 1073741823) ab()
            a = (intMultiply_1(A, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > u >>> 0 ? a | 0 : u | 0
            } else {
                a = 1073741823
            }
            l = j.a3
            l.a1.a0 = c
            if ((a | 0) !== 0) c = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                c = nullArray
            }
            j.a0 = c[0]
            j.a1 = c
            j.a1o = (0 + n) | 0
            l.a0 = c
            l.a0o = (0 + a) | 0
            c[n] = f
            j.a2 = c
            j.a2o = (((0 + n) | 0) + 1) | 0
            av(j)
        }
        c = h.a4
        f.i3 = h.i5 << 20
        f.a4 = c
        f.a0 = ct
        f.a5 = p
        p = "/"
        p = p.concat(c)
        p = p
        f.a6 = p
        C.a0.call(
            null,
            Object.create(CheerpX.Device.prototype, {
                this: {
                    value: f,
                },
            })
        )
    }
    return E
}
function Dd(n) {
    var f = null,
        l = null,
        a = null,
        j = null,
        h = 0,
        c = null
    f = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(f)
    c = f.a1
    l = wK({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        a5: null,
    }).a
    a = l[0]
    a.a0 = qS
    a.a1 = qR
    a.a5 = c
    c = a.a3
    d3(c, n)
    j = c.a0
    h = c.a0o | 0
    a: {
        if (j !== nullArray || h !== 0) {
            if (j[h].a0 !== null) {
                a.i4 = 0
                c = j[h].a[j[h].o - -1]
                c.a0 = l
                c.a0o = 0
                break a
            }
            j[h].a1(j, h)
        }
        a.a5(null)
    }
    c = f.a0
    return c
}
function Dc(f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    uB(c, f, a.a1, a.a2)
    c = a.a0
    return c
}
function Db(a) {}
function Da(f, c) {
    var a = null
    if (undefined !== c) {
        a = {
            a0: null,
        }
        uU(a, f, c)
    }
}
function C$(n) {
    var j = null,
        c = null,
        h = null,
        a = null,
        l = null,
        f = 0
    j = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(j)
    h = j.a1
    a = j.a2
    l = xf({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: (l = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
        a6: null,
    }).a
    c = l[0]
    c.a0 = rO
    c.a1 = rN
    c.a6 = a
    c.a5 = h
    h = c.a3
    hz(h, n)
    a = h.a0
    f = h.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i4 = 0
                h = a[f].a[a[f].o - -1]
                h.a0 = l
                h.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        a = a.a1.a1
        l = h.a0
        f = h.a0o | 0
        if (l !== nullArray || f !== 0) l[f].a1(l, f)
        if (a !== null) {
            l = c.a5
            l(
                CheerpX.Linux.wrap(
                    Object.create(CheerpX.WebDevice.prototype, {
                        this: {
                            value: a,
                        },
                    })
                )
            )
        } else {
            h = c.a6
            a = "Initialization failed for 'WebDevice'"
            h(a)
        }
    }
    h = j.a0
    return h
}
function C_(a) {}
function rO(h, i) {
    h = h[i]
    var f = 0,
        c = null,
        a = null
    c = h.a3.a0
    f = h.a3.a0o | 0
    a = c[f].a[c[f].o - -1]
    a = a.a1.a1
    if (c !== nullArray || f !== 0) c[f].a1(c, f)
    if (a !== null) {
        c = h.a5
        c(
            CheerpX.Linux.wrap(
                Object.create(CheerpX.WebDevice.prototype, {
                    this: {
                        value: a,
                    },
                })
            )
        )
    } else {
        c = h.a6
        a = "Initialization failed for 'WebDevice'"
        c(a)
    }
}
function rN(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function hz(A, x) {
    var E = null,
        C = 0,
        j = null,
        G = null,
        u = 0,
        h = null,
        c = null,
        l = null,
        r = null,
        f = null,
        a = 0,
        p = 0,
        n = null
    h = xe({
        a0: null,
        a1: null,
        a2: (h = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: (h = {
            a0: null,
            a1: null,
        }),
        i4: 0,
        a5: null,
        a6: null,
        a7: null,
    }).a
    c = h[0]
    c.a0 = uX
    c.a1 = uW
    c.a5 = x
    l = c.a2
    l.a0 = nullArray
    l.a0o = 0
    r = l.a1
    r.i0 = 0
    f = l.a
    a = l.o - 1
    A.a0 = f
    A.a0o = a
    if ((aQ | 0) !== 0) {
        h = {
            a0: null,
            i1: 0,
            i2: 0,
            a3: null,
            a4: null,
        }
        h.a0 = at
        h.i1 = 0
        a = ac | 0
        ac = (a + 1) | 0
        h.i2 = a
        f = N.a1
        p = N.a1o | 0
        E = N.a2
        n = E.a0
        C = E.a0o | 0
        if (p < C) {
            f[p] = h
            N.a1 = f
            N.a1o = (p + 1) | 0
        } else {
            j = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (j = {
                        a0: null,
                    }),
                },
            }
            G = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            p = (intMultiply_1(p, 4) - a) >> 2
            u = (p + 1) | 0
            if (u >>> 0 > 1073741823) ab()
            a = (intMultiply_1(C, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > u >>> 0 ? a | 0 : u | 0
            } else {
                a = 1073741823
            }
            f = j.a3
            f.a1.a0 = E
            if ((a | 0) !== 0) n = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                n = nullArray
            }
            j.a0 = n[0]
            j.a1 = n
            j.a1o = (0 + p) | 0
            f.a0 = n
            f.a0o = (0 + a) | 0
            n[p] = h
            j.a2 = n
            j.a2o = (((0 + p) | 0) + 1) | 0
            av(j)
        }
        f = c.a5
        h.a3 = null
        h.a0 = eA
        h.a4 = f
        h.a3 = cheerpOSCreateWebFolder(f)
        r.i0 = 256
        r.a1 = h
        c.a7 = l
        c.a0 = null
        h = l.a0
        a = l.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : W)[h !== nullArray || a !== 0 ? a : X].a0(h !== nullArray || a !== 0 ? h : W, h !== nullArray || a !== 0 ? a : X)
    } else {
        l = cH()
        c.a6 = l
        r = c.a3
        r.a0 = l
        c.i4 = 0
        c = [
            {
                a0: null,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            },
        ]
        c[0].a0 = r
        c[0].a1.a0 = h
        c[0].a1.a0o = 0
        r = DB(ek, c[0])
        l.then(r)
    }
}
function uX(u, v) {
    u = u[v]
    var n = null,
        r = 0,
        f = null,
        x = null,
        p = 0,
        a = 0,
        c = null,
        l = 0,
        j = null,
        h = null
    n = {
        a0: null,
        i1: 0,
        i2: 0,
        a3: null,
        a4: null,
    }
    n.a0 = at
    n.i1 = 0
    a = ac | 0
    ac = (a + 1) | 0
    n.i2 = a
    c = N.a1
    l = N.a1o | 0
    j = N.a2
    h = j.a0
    r = j.a0o | 0
    if (l < r) {
        c[l] = n
        N.a1 = c
        N.a1o = (l + 1) | 0
    } else {
        f = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (f = {
                    a0: null,
                }),
            },
        }
        x = N.a0
        a = N.a0o | 0
        a = intMultiply_1(a, 4)
        l = (intMultiply_1(l, 4) - a) >> 2
        p = (l + 1) | 0
        if (p >>> 0 > 1073741823) ab()
        a = (intMultiply_1(r, 4) - a) | 0
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > p >>> 0 ? a | 0 : p | 0
        } else {
            a = 1073741823
        }
        c = f.a3
        c.a1.a0 = j
        if ((a | 0) !== 0) h = DD([], 0, ((a << 2) / 4) | 0, null)
        else {
            h = nullArray
        }
        f.a0 = h[0]
        f.a1 = h
        f.a1o = (0 + l) | 0
        c.a0 = h
        c.a0o = (0 + a) | 0
        h[l] = n
        f.a2 = h
        f.a2o = (((0 + l) | 0) + 1) | 0
        av(f)
    }
    c = u.a5
    n.a3 = null
    n.a0 = eA
    n.a4 = c
    n.a3 = cheerpOSCreateWebFolder(c)
    c = u.a2
    j = c.a1
    j.i0 = 256
    j.a1 = n
    u.a7 = c
    u.a0 = null
    j = c.a0
    a = c.a0o | 0
    ;(j !== nullArray || a !== 0 ? j : W)[j !== nullArray || a !== 0 ? a : X].a0(j !== nullArray || a !== 0 ? j : W, j !== nullArray || a !== 0 ? a : X)
}
function uW(a, b) {}
function ek(c, a) {
    var h = null,
        f = 0
    c.a0.a1 = a
    h = c.a1.a0
    f = c.a1.a0o | 0
    h[f].a0(h, f)
}
function uV(a) {
    return 1 | 0
}
function av(c) {
    var r = 0,
        n = null,
        j = null,
        f = 0,
        l = 0,
        p = 0,
        C = null,
        a = 0,
        h = 0,
        x = 0,
        u = 0,
        A = 0
    n = N.a0
    r = N.a0o | 0
    j = N.a1
    f = N.a1o | 0
    f = (intMultiply_1(f, 4) - intMultiply_1(r, 4)) | 0
    j = c.a1
    l = c.a1o | 0
    p = -(f >> 2) | 0
    if (f >>> 0 >= 4) {
        a = f >>> 2
        h = (p + a) | 0
        if (r < ((l + p) | 0)) {
            x = (f - 4) | 0
            f = ((x >>> 2) + 1) & 3
            if ((f | 0) !== 0) {
                u = 0
                while (1) {
                    a = (a - 1) | 0
                    h = (h - 1) | 0
                    j[(l + h) | 0] = n[(r + a) | 0]
                    u = (u + 1) | 0
                    if ((u | 0) !== (f | 0)) continue
                    break
                }
            }
            if (x >>> 0 >= 12)
                while (1) {
                    j[(((l + h) | 0) + -1) | 0] = n[(((r + a) | 0) + -1) | 0]
                    j[(((l + h) | 0) + -2) | 0] = n[(((r + a) | 0) + -2) | 0]
                    j[(((l + h) | 0) + -3) | 0] = n[(((r + a) | 0) + -3) | 0]
                    a = (a - 4) | 0
                    h = (h - 4) | 0
                    j[(l + h) | 0] = n[(r + a) | 0]
                    if (j !== j || ((l + p) | 0) !== ((l + h) | 0)) continue
                    break
                }
        } else {
            x = (f - 4) | 0
            u = ((x >>> 2) + 1) & 7
            if ((u | 0) !== 0) {
                a = p
                A = 0
                f = 0
                while (1) {
                    j[(l + a) | 0] = n[(r + f) | 0]
                    A = (A + 1) | 0
                    a = (a + 1) | 0
                    f = (f + 1) | 0
                    if ((A | 0) !== (u | 0)) continue
                    break
                }
            } else {
                a = p
                f = 0
            }
            if (x >>> 0 >= 28)
                while (1) {
                    j[(l + a) | 0] = n[(r + f) | 0]
                    j[(((l + a) | 0) + 1) | 0] = n[(((r + f) | 0) + 1) | 0]
                    j[(((l + a) | 0) + 2) | 0] = n[(((r + f) | 0) + 2) | 0]
                    j[(((l + a) | 0) + 3) | 0] = n[(((r + f) | 0) + 3) | 0]
                    j[(((l + a) | 0) + 4) | 0] = n[(((r + f) | 0) + 4) | 0]
                    j[(((l + a) | 0) + 5) | 0] = n[(((r + f) | 0) + 5) | 0]
                    j[(((l + a) | 0) + 6) | 0] = n[(((r + f) | 0) + 6) | 0]
                    j[(((l + a) | 0) + 7) | 0] = n[(((r + f) | 0) + 7) | 0]
                    a = (a + 8) | 0
                    if (j !== j || ((l + h) | 0) !== ((l + a) | 0)) {
                        f = (f + 8) | 0
                        continue
                    }
                    break
                }
        }
    }
    n = N.a0
    f = N.a0o | 0
    N.a0 = j
    N.a0o = (l + ((p << 2) >> 2)) | 0
    c.a1 = n
    c.a1o = f
    j = N.a1
    l = N.a1o | 0
    C = c.a2
    p = c.a2o | 0
    N.a1 = C
    N.a1o = p
    c.a2 = j
    c.a2o = l
    j = N.a2.a0
    l = N.a2.a0o | 0
    C = c.a3.a0
    p = c.a3.a0o | 0
    N.a2.a0 = C
    N.a2.a0o = p
    c.a3.a0 = j
    c.a3.a0o = l
    c.a0 = n[f]
}
function uU(r, p, n) {
    var l = 0,
        j = null,
        c = null,
        a = null,
        h = null,
        f = 0
    j = new Aa().a
    c = j[0]
    c.a0 = uR
    c.a1 = uQ
    c.a7 = n
    c.a6 = p
    a = c.a2.a[c.a2.o - 1]
    r.a0 = a
    a = "r"
    c.a8 = a
    h = c.a3
    aB(h, p, n, a, 0, 0)
    a = h.a0
    f = h.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i5 = 0
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        f = a.a1.i1 | 0
        a = h.a0
        l = h.a0o | 0
        if (a !== nullArray || l !== 0) a[l].a1(a, l)
        a = c.a8
        h = c.a7
        a = c.a7
        h = c.a4
        b$(h, f, a)
        a = h.a0
        f = h.a0o | 0
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i5 = 1
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        a = a.a1.a1
        j = h.a0
        f = h.a0o | 0
        if (j !== nullArray || f !== 0) j[f].a1(j, f)
        j = c.a7
        b_(a, c.a7)
    }
}
function uR(l, m) {
    var j = 0,
        f = null,
        a = null,
        c = 0,
        h = null
    f = l[m].a4
    a: {
        if (l[m].i5 | 0) {
            a = f.a0
            c = f.a0o | 0
            a = a[c]
        } else {
            a = l[m].a3.a0
            c = l[m].a3.a0o | 0
            a = a[c].a[a[c].o - -1]
            c = a.a1.i1 | 0
            a = l[m].a3.a0
            j = l[m].a3.a0o | 0
            if (a !== nullArray || j !== 0) a[j].a1(a, j)
            a = l[m].a8
            h = l[m].a7
            a = l[m].a7
            b$(f, c, a)
            a = f.a0
            c = f.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    l[m].i5 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = l
                    f.a0o = m
                    break a
                }
                a = a[c]
            } else {
                a = null
            }
        }
        a = a.a[a.o - -1]
        a = a.a1.a1
        h = f.a0
        c = f.a0o | 0
        if (h !== nullArray || c !== 0) h[c].a1(h, c)
        h = l[m].a7
        b_(a, l[m].a7)
    }
}
function uQ(f, g) {
    f = f[g]
    var h = null,
        a = null,
        c = 0
    if (f.i5 | 0) {
        a = f.a4.a0
        c = f.a4.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a7
        return
    }
    a = f.a3.a0
    c = f.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = f.a8
    h = f.a7
}
function b$(f, c, a) {
    var h = null,
        n = null,
        u = null,
        x = null,
        l = null,
        j = null,
        r = 0,
        p = null
    l = wM({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (l = {
                i0: 0,
                a1: null,
            }),
        },
        a3: (l = {
            i0: 0,
            a1: null,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    h = l[0]
    h.a0 = uN
    h.a1 = uM
    n = h.a2
    n.a0 = nullArray
    n.a0o = 0
    u = n.a1
    u.i0 = 0
    j = n.a
    r = n.o - 1
    f.a0 = j
    f.a0o = r
    j = h.a3
    j.i0 = 0
    j.a2.a0 = nullArray
    j.a2.a0o = 0
    x = ap
    p = [
        {
            a0: null,
        },
    ]
    p[0].a0 = j
    p = DB(uK, p[0])
    cheerpOSGetFileBlobFd(x, c, a, p)
    if ((j.i0 & 255) !== 0) {
        l = j.a1
        u.i0 = 256
        u.a1 = l
        h.a5 = n
        h.a0 = null
        l = n.a0
        r = n.a0o | 0
        ;(l !== nullArray || r !== 0 ? l : W)[l !== nullArray || r !== 0 ? r : X].a0(l !== nullArray || r !== 0 ? l : W, l !== nullArray || r !== 0 ? r : X)
    } else {
        h.i4 = 0
        j.a2.a0 = l
        j.a2.a0o = 0
    }
}
function b_(c, a) {
    var h = null,
        l = null,
        j = null,
        f = null
    h = URL.createObjectURL(c)
    f = "a"
    l = document.createElement(f)
    f = "href"
    l.setAttribute(f, h)
    f = "download"
    j = a.concat(".dump")
    l.setAttribute(f, j)
    l.click()
    URL.revokeObjectURL(h)
}
function uN(j, k) {
    j = j[k]
    var c = null,
        h = null,
        f = 0,
        a = null
    a = j.a3.a1
    c = j.a2
    h = c.a1
    h.i0 = 256
    h.a1 = a
    j.a5 = c
    j.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : W)[a !== nullArray || f !== 0 ? f : X].a0(a !== nullArray || f !== 0 ? a : W, a !== nullArray || f !== 0 ? f : X)
}
function uM(a, b) {}
function uK(j, h) {
    var a = null,
        f = null,
        c = 0
    a = j.a0
    a.a1 = h
    a.i0 = 1
    f = a.a2.a0
    c = a.a2.a0o | 0
    if (f !== nullArray || c !== 0) f[c].a0(f, c)
}
function uB(G, E, C, A) {
    var r = null,
        x = 0,
        j = null,
        H = null,
        u = 0,
        f = null,
        a = null,
        n = null,
        p = null,
        c = 0,
        l = 0,
        h = null
    f = new z5().a
    a = f[0]
    a.a0 = uy
    a.a1 = ux
    a.a7 = A
    a.a6 = C
    a.a5 = E
    n = a.a2.a[a.a2.o - 1]
    G.a0 = n
    if ((aQ | 0) !== 0) {
        p = a.a5
        if (undefined === p) {
            f = a.a7
            a = "Initialization failed for 'IDBDevice'"
            f(a)
        } else {
            r = {
                a0: null,
                i1: 0,
                i2: 0,
                a3: null,
                a4: null,
            }
            f = "/"
            p = f.concat(p, "/")
            r.a0 = at
            r.i1 = 0
            c = ac | 0
            ac = (c + 1) | 0
            r.i2 = c
            f = N.a1
            l = N.a1o | 0
            n = N.a2
            h = n.a0
            x = n.a0o | 0
            if (l < x) {
                f[l] = r
                N.a1 = f
                N.a1o = (l + 1) | 0
            } else {
                j = {
                    a0: null,
                    a1: nullArray,
                    a1o: 0,
                    a2: nullArray,
                    a2o: 0,
                    a3: {
                        a0: nullArray,
                        a0o: 0,
                        a1: (j = {
                            a0: null,
                        }),
                    },
                }
                H = N.a0
                c = N.a0o | 0
                c = intMultiply_1(c, 4)
                l = (intMultiply_1(l, 4) - c) >> 2
                u = (l + 1) | 0
                if (u >>> 0 > 1073741823) ab()
                c = (intMultiply_1(x, 4) - c) | 0
                if (c >>> 0 < 2147483644) {
                    c >>>= 1
                    c = c >>> 0 > u >>> 0 ? c | 0 : u | 0
                } else {
                    c = 1073741823
                }
                f = j.a3
                f.a1.a0 = n
                if ((c | 0) !== 0) h = DD([], 0, ((c << 2) / 4) | 0, null)
                else {
                    h = nullArray
                }
                j.a0 = h[0]
                j.a1 = h
                j.a1o = (0 + l) | 0
                f.a0 = h
                f.a0o = (0 + c) | 0
                h[l] = r
                j.a2 = h
                j.a2o = (((0 + l) | 0) + 1) | 0
                av(j)
            }
            f = a.a6
            r.a3 = null
            r.a0 = at
            r.a4 = p
            r.a3 = new CheerpJIndexedDBFolder(p)
            f(
                CheerpX.Device.wrap(
                    Object.create(CheerpX.IDBDevice.prototype, {
                        this: {
                            value: r,
                        },
                    })
                )
            )
        }
    } else {
        n = cH()
        a.a8 = n
        h = a.a3
        h.a0 = n
        a.i4 = 0
        a = [
            {
                a0: null,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            },
        ]
        a[0].a0 = h
        a[0].a1.a0 = f
        a[0].a1.a0o = 0
        h = DB(ek, a[0])
        n.then(h)
    }
}
function uy(x, y) {
    x = x[y]
    var n = null,
        u = null,
        r = 0,
        f = null,
        A = null,
        p = 0,
        l = null,
        c = null,
        a = 0,
        j = 0,
        h = null
    l = x.a5
    if (undefined === l) {
        l = x.a7
        c = "Initialization failed for 'IDBDevice'"
        l(c)
    } else {
        n = {
            a0: null,
            i1: 0,
            i2: 0,
            a3: null,
            a4: null,
        }
        c = "/"
        l = c.concat(l, "/")
        n.a0 = at
        n.i1 = 0
        a = ac | 0
        ac = (a + 1) | 0
        n.i2 = a
        c = N.a1
        j = N.a1o | 0
        u = N.a2
        h = u.a0
        r = u.a0o | 0
        if (j < r) {
            c[j] = n
            N.a1 = c
            N.a1o = (j + 1) | 0
        } else {
            f = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (f = {
                        a0: null,
                    }),
                },
            }
            A = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            j = (intMultiply_1(j, 4) - a) >> 2
            p = (j + 1) | 0
            if (p >>> 0 > 1073741823) ab()
            a = (intMultiply_1(r, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > p >>> 0 ? a | 0 : p | 0
            } else {
                a = 1073741823
            }
            c = f.a3
            c.a1.a0 = u
            if ((a | 0) !== 0) h = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                h = nullArray
            }
            f.a0 = h[0]
            f.a1 = h
            f.a1o = (0 + j) | 0
            c.a0 = h
            c.a0o = (0 + a) | 0
            h[j] = n
            f.a2 = h
            f.a2o = (((0 + j) | 0) + 1) | 0
            av(f)
        }
        c = x.a6
        n.a3 = null
        n.a0 = at
        n.a4 = l
        n.a3 = new CheerpJIndexedDBFolder(l)
        c(
            CheerpX.Device.wrap(
                Object.create(CheerpX.IDBDevice.prototype, {
                    this: {
                        value: n,
                    },
                })
            )
        )
    }
}
function ux(a, b) {}
function qS(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    f.a5(null)
}
function qR(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function d3(p, n) {
    var r = null,
        x = null,
        u = null,
        l = null,
        c = null,
        h = null,
        a = 0,
        f = null,
        j = null
    l = new z3().a
    c = l[0]
    c.a0 = qO
    c.a1 = qN
    c.a3 = n
    r = c.a2
    r.a0 = nullArray
    r.a0o = 0
    h = r.a
    a = r.o - 1
    p.a0 = h
    p.a0o = a
    h = ""
    c.a4 = h
    f = c.a9
    hd(f, n, h)
    h = f.a0
    a = f.a0o | 0
    a: {
        if (h !== nullArray || a !== 0) {
            if (h[a].a0 !== null) {
                c.i11 = 0
                c = h[a].a[h[a].o - -1]
                c.a0 = l
                c.a0o = 0
                break a
            }
        }
        h = h[a].a[h[a].o - -1]
        h = h.a1.a1
        c.a5 = h
        j = f.a0
        a = f.a0o | 0
        if (j !== nullArray || a !== 0) j[a].a1(j, a)
        j = c.a4
        if ((h.length | 0) > 0) {
            j = c.a3
            f = {
                i0: 0,
                i1: 0,
                a2: nullArray,
            }
            c3(f, j.a4)
            j = f.a2
            bd(eo, 0, {
                d: j,
                o: 0,
            })
            if ((h.length | 0) !== 0) {
                h = c.a10
                a = 0
                while (1) {
                    c.i6 = a
                    j = c.a5
                    x = c.a3
                    u = "/"
                    j = u.concat(j[(0 + a) | 0])
                    c.a7 = j
                    c2(h, x, j)
                    f = h.a0
                    a = h.a0o | 0
                    if (f !== nullArray || a !== 0) {
                        if (f[a].a0 !== null) {
                            c.i11 = 1
                            c = f[a].a[f[a].o - -1]
                            c.a0 = l
                            c.a0o = 0
                            break a
                        }
                    }
                    f = h.a0
                    a = h.a0o | 0
                    if (f !== nullArray || a !== 0) f[a].a1(f, a)
                    f = c.a7
                    a = c.i6 | 0
                    j = c.a5
                    a = (a + 1) | 0
                    if (a >>> 0 < j.length >>> 0) {
                        f = c.a7
                        continue
                    }
                    break
                }
            }
        }
        c.a8 = r
        c.a0 = null
        l = r.a0
        a = r.a0o | 0
        ;(l !== nullArray || a !== 0 ? l : W)[l !== nullArray || a !== 0 ? a : X].a0(l !== nullArray || a !== 0 ? l : W, l !== nullArray || a !== 0 ? a : X)
    }
}
function qO(p, q) {
    var l = null,
        a = null,
        j = 0,
        h = 0,
        f = null,
        c = null,
        n = null
    l = p[q].a10
    a: {
        b: {
            if ((p[q].i11 & 3) !== 0) {
                a = l.a0
                j = l.a0o | 0
                a = a[j]
                h = -1
            } else {
                a = p[q].a9.a0
                h = p[q].a9.a0o | 0
                a = a[h].a[a[h].o - -1]
                a = a.a1.a1
                p[q].a5 = a
                f = p[q].a9.a0
                h = p[q].a9.a0o | 0
                if (f !== nullArray || h !== 0) f[h].a1(f, h)
                f = p[q].a4
                if ((a.length | 0) <= 0) break b
                f = p[q].a3
                c = {
                    i0: 0,
                    i1: 0,
                    a2: nullArray,
                }
                c3(c, f.a4)
                n = c.a2
                bd(eo, 0, {
                    d: n,
                    o: 0,
                })
                if ((a.length | 0) === 0) break b
                j = 0
                h = 0
            }
            c: while (1) {
                switch (h | 0) {
                    case 0:
                        p[q].i6 = j
                        a = p[q].a5
                        n = "/"
                        a = n.concat(a[(0 + j) | 0])
                        p[q].a7 = a
                        c2(l, f, a)
                        a = l.a0
                        h = l.a0o | 0
                        if (a !== nullArray || h !== 0) {
                            if (a[h].a0 !== null) {
                                p[q].i11 = 1
                                l = a[h].a[a[h].o - -1]
                                l.a0 = p
                                l.a0o = q
                                break a
                            }
                            a = a[h]
                            h = -1
                            continue c
                        }
                        a = null
                        h = -1
                        continue c
                    default:
                        c = l.a0
                        j = l.a0o | 0
                        if (c !== nullArray || j !== 0) c[j].a1(c, j)
                        f = p[q].a7
                        j = p[q].i6 | 0
                        c = p[q].a5
                        j = (j + 1) | 0
                        if (j >>> 0 < c.length >>> 0) {
                            c = p[q].a7
                            f = p[q].a3
                            h = 0
                            continue c
                        }
                }
                break
            }
        }
        l = p[q].a2
        p[q].a8 = l
        p[q].a0 = null
        a = l.a0
        h = l.a0o | 0
        ;(a !== nullArray || h !== 0 ? a : W)[a !== nullArray || h !== 0 ? h : X].a0(a !== nullArray || h !== 0 ? a : W, a !== nullArray || h !== 0 ? h : X)
    }
}
function qN(f, g) {
    f = f[g]
    var a = null,
        c = 0
    if (f.a0 !== null)
        if ((f.i11 & 3) !== 0) {
            a = f.a10.a0
            c = f.a10.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a7
        } else {
            a = f.a9.a0
            c = f.a9.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a4
        }
}
function hd(x, u, r) {
    var a = null,
        f = null,
        p = null,
        n = null,
        A = null,
        c = null,
        l = null,
        j = 0,
        h = null
    c = ws({
        a0: null,
        a1: null,
        a2: (c = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: (c = {
            i0: 0,
            a1: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
        a6: null,
    }).a
    a = c[0]
    a.a0 = qC
    a.a1 = qB
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    p = f.a1
    p.i0 = 0
    l = f.a
    j = f.o - 1
    x.a0 = l
    x.a0o = j
    l = new Array()
    a.a5 = l
    n = a.a3
    n.i0 = 0
    n.a1.a0 = nullArray
    n.a1.a0o = 0
    A = u.a3
    h = [
        {
            a0: null,
        },
    ]
    h[0].a0 = n
    h = DB(qz, h[0])
    cheerpOSListFilesMain(A, r, l, h)
    if ((n.i0 & 255) !== 0) {
        c = a.a5
        p.i0 = 256
        p.a1 = c
        a.a6 = f
        a.a0 = null
        c = f.a0
        j = f.a0o | 0
        ;(c !== nullArray || j !== 0 ? c : W)[c !== nullArray || j !== 0 ? j : X].a0(c !== nullArray || j !== 0 ? c : W, c !== nullArray || j !== 0 ? j : X)
    } else {
        a.i4 = 0
        n.a1.a0 = c
        n.a1.a0o = 0
    }
}
function c3(h, f) {
    var l = 0,
        j = 0,
        a = 0,
        c = 0
    h.i0 = 0
    h.i1 = 0
    h.a2 = nullArray
    l = f.length
    if ((l | 0) !== 0) {
        j = 0
        while (1) {
            c = f.charCodeAt(+(j >>> 0))
            if ((c - 57344) >>> 0 < 4294965248) {
                a = c
            } else if (c >>> 0 < 56320) {
                a = (c << 10) & 1047552
            } else {
                a = (((c & 1023) | a) + 65536) | 0
            }
            j = (j + 1) | 0
            a: {
                if ((j | 0) !== (l | 0)) {
                    if (((c & 56320) | 0) === 55296) break a
                }
                if (a >>> 0 < 128) {
                    c = a
                } else if (a >>> 0 < 2048) {
                    bc(h, (a >>> 6) | 192)
                    c = (a & 63) | 128
                } else if (a >>> 0 < 65536) {
                    bc(h, (a >>> 12) | 224)
                    bc(h, ((a >>> 6) & 63) | 128)
                    c = (a & 63) | 128
                } else {
                    bc(h, (a >>> 18) | 240)
                    bc(h, ((a >>> 12) & 63) | 128)
                    bc(h, ((a >>> 6) & 63) | 128)
                    c = (a & 63) | 128
                }
                bc(h, c)
            }
            if ((j | 0) !== (l | 0)) continue
            break
        }
    }
}
function c2(j, h, f) {
    var a = null,
        p = null,
        u = null,
        x = null,
        n = null,
        c = null,
        l = 0,
        r = null
    n = wt({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (n = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (n = {
            i0: 0,
            i1: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    a = n[0]
    a.a0 = qK
    a.a1 = qJ
    p = a.a2
    p.a0 = nullArray
    p.a0o = 0
    u = p.a1
    u.i0 = 0
    c = p.a
    l = p.o - 1
    j.a0 = c
    j.a0o = l
    c = a.a3
    c.i0 = 0
    c.a2.a0 = nullArray
    c.a2.a0o = 0
    x = h.a3
    r = [
        {
            a0: null,
        },
    ]
    r[0].a0 = c
    r = DB(qH, r[0])
    cheerpOSUnlinkMain(x, f, r)
    if ((c.i0 & 255) !== 0) {
        l = c.i1 | 0
        u.i0 = 256
        u.i1 = l
        a.a5 = p
        a.a0 = null
        n = p.a0
        l = p.a0o | 0
        ;(n !== nullArray || l !== 0 ? n : W)[n !== nullArray || l !== 0 ? l : X].a0(n !== nullArray || l !== 0 ? n : W, n !== nullArray || l !== 0 ? l : X)
    } else {
        a.i4 = 0
        c.a2.a0 = n
        c.a2.a0o = 0
    }
}
function qK(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    c = h.a3.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function qJ(a, b) {}
function qH(j, h) {
    var a = null,
        f = null,
        c = 0
    a = j.a0
    a.i1 = h
    a.i0 = 1
    f = a.a2.a0
    c = a.a2.a0o | 0
    if (f !== nullArray || c !== 0) f[c].a0(f, c)
}
function qC(j, k) {
    j = j[k]
    var c = null,
        h = null,
        f = 0,
        a = null
    a = j.a5
    c = j.a2
    h = c.a1
    h.i0 = 256
    h.a1 = a
    j.a6 = c
    j.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : W)[a !== nullArray || f !== 0 ? f : X].a0(a !== nullArray || f !== 0 ? a : W, a !== nullArray || f !== 0 ? f : X)
}
function qB(a, b) {}
function qz(h) {
    var f = null,
        c = null,
        a = 0
    f = h.a0
    f.i0 = 1
    c = f.a1.a0
    a = f.a1.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a0(c, a)
}
function qu(A, B) {
    var x = 0,
        u = 0,
        a = 0,
        c = null,
        h = null,
        f = null,
        j = 0,
        p = null,
        r = null,
        l = null,
        n = null
    a = A[B].i14 | 0
    c = A[B].a13
    a: {
        b: {
            c: if (a << 30 > -1073741824) {
                h = A[B].a12
                if ((a & 3) !== 0) {
                    f = h.a0
                    a = h.a0o | 0
                    f = f[a]
                    a = -1
                } else {
                    f = A[B].a11.a0
                    a = A[B].a11.a0o | 0
                    f = f[a].a[f[a].o - -1]
                    A[B].i8 = f.a1.i1 | 0
                    f = A[B].a11.a0
                    a = A[B].a11.a0o | 0
                    if (f !== nullArray || a !== 0) f[a].a1(f, a)
                    f = A[B].a7
                    p = A[B].a6
                    a = A[B].i5 | 0
                    A[B].a9 = new Uint8Array(4096)
                    j = a << 20
                    a = 0
                }
                d: while (1) {
                    switch (a | 0) {
                        case 0:
                            A[B].i10 = j
                            if ((j | 0) !== 0) {
                                aX(h, A[B].i8 | 0, A[B].a9, 0, 4096)
                                f = h.a0
                                a = h.a0o | 0
                                if (f !== nullArray || a !== 0) {
                                    if (f[a].a0 !== null) {
                                        A[B].i14 = 1
                                        c = f[a].a[f[a].o - -1]
                                        c.a0 = A
                                        c.a0o = B
                                        break a
                                    }
                                    f = f[a]
                                    a = -1
                                    continue d
                                }
                                f = null
                                a = -1
                                continue d
                            }
                            h = wC({
                                a0: null,
                                a1: null,
                                a2: {
                                    a0: nullArray,
                                    a0o: 0,
                                },
                                a3: null,
                                a4: (h = {
                                    i0: 0,
                                    a1: {
                                        a0: nullArray,
                                        a0o: 0,
                                    },
                                }),
                                i5: 0,
                            }).a
                            a = A[B].i8 | 0
                            f = h[0]
                            f.a0 = by
                            f.a1 = bx
                            r = f.a2
                            r.a0 = nullArray
                            r.a0o = 0
                            p = r.a
                            j = r.o - 1
                            c.a0 = p
                            c.a0o = j
                            p = f.a4
                            p.i0 = 0
                            p.a1.a0 = nullArray
                            p.a1.a0o = 0
                            l = ap
                            n = [
                                {
                                    a0: null,
                                },
                            ]
                            n[0].a0 = p
                            n = DB(bv, n[0])
                            cheerpOSClose(l, a, n)
                            if ((p.i0 & 255) !== 0) {
                                f.a3 = r
                                f.a0 = null
                                h = r.a0
                                a = r.a0o | 0
                                ;(h !== nullArray || a !== 0 ? h : W)[h !== nullArray || a !== 0 ? a : X].a0(h !== nullArray || a !== 0 ? h : W, h !== nullArray || a !== 0 ? a : X)
                            } else {
                                f.i5 = 0
                                p.a1.a0 = h
                                p.a1.a0o = 0
                            }
                            h = c.a0
                            a = c.a0o | 0
                            if (h === nullArray && a === 0) break b
                            if (h[a].a0 !== null) {
                                A[B].i14 = 2
                                c = h[a].a[h[a].o - -1]
                                c.a0 = A
                                c.a0o = B
                                break a
                            }
                            a = a
                            c = h
                            break c
                        default:
                            p = h.a0
                            a = h.a0o | 0
                            if (p !== nullArray || a !== 0) p[a].a1(p, a)
                            a = A[B].i10 | 0
                            j = (a - 4096) | 0
                            a = 0
                            continue d
                    }
                    break
                }
            } else {
                h = c.a0
                a = c.a0o | 0
                if (h === nullArray && a === 0) break b
                a = a
                c = h
            }
            c[a].a1(c, a)
        }
        c = A[B].a4
        h = A[B].a3
        r = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
            a6: null,
        }
        r.a0 = at
        r.i1 = 1
        a = ac | 0
        ac = (a + 1) | 0
        r.i2 = a
        c = N.a1
        j = N.a1o | 0
        p = N.a2
        n = p.a0
        x = p.a0o | 0
        if (j < x) {
            c[j] = r
            N.a1 = c
            N.a1o = (j + 1) | 0
        } else {
            l = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (l = {
                        a0: null,
                    }),
                },
            }
            f = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            j = (intMultiply_1(j, 4) - a) >> 2
            u = (j + 1) | 0
            if (u >>> 0 > 1073741823) ab()
            a = (intMultiply_1(x, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > u >>> 0 ? a | 0 : u | 0
            } else {
                a = 1073741823
            }
            c = l.a3
            c.a1.a0 = p
            if ((a | 0) !== 0) n = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                n = nullArray
            }
            l.a0 = n[0]
            l.a1 = n
            l.a1o = (0 + j) | 0
            c.a0 = n
            c.a0o = (0 + a) | 0
            n[j] = r
            l.a2 = n
            l.a2o = (((0 + j) | 0) + 1) | 0
            av(l)
        }
        c = A[B].a4
        r.i3 = A[B].i5 << 20
        r.a4 = c
        r.a0 = ct
        r.a5 = h
        h = "/"
        h = h.concat(c)
        h = h
        r.a6 = h
        A[B].a2.a0.call(
            null,
            Object.create(CheerpX.Device.prototype, {
                this: {
                    value: r,
                },
            })
        )
    }
}
function qt(f, g) {
    f = f[g]
    var h = null,
        a = 0,
        c = null
    a = f.i14 | 0
    if (a << 30 > -1073741824) {
        if ((a & 3) !== 0) {
            c = f.a12.a0
            a = f.a12.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        } else {
            c = f.a11.a0
            a = f.a11.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
            c = f.a7
            h = f.a6
        }
    } else {
        c = f.a13.a0
        a = f.a13.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function qr(c, a) {
    c.a0.a0 = a
}
function qm(n, o) {
    var h = null,
        l = 0,
        j = null,
        a = null,
        c = 0,
        f = null
    j = n[o].a2
    h = n[o].a6
    a: {
        if (n[o].i7 | 0) {
            a = h.a0
            c = h.a0o | 0
            a = a[c]
        } else {
            a = n[o].a5.a0
            c = n[o].a5.a0o | 0
            a = a[c].a[a[c].o - -1]
            c = a.a1.i1 | 0
            a = n[o].a5.a0
            l = n[o].a5.a0o | 0
            if (a !== nullArray || l !== 0) a[l].a1(a, l)
            a = n[o].a4
            f = n[o].a3
            if ((c | 0) < 0) {
                j.a0.call(null, null)
                break a
            }
            a = n[o].a3
            b$(h, c, a)
            a = h.a0
            c = h.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    n[o].i7 = 1
                    j = a[c].a[a[c].o - -1]
                    j.a0 = n
                    j.a0o = o
                    break a
                }
                a = a[c]
            } else {
                a = null
            }
        }
        a = a.a[a.o - -1]
        a = a.a1.a1
        f = h.a0
        c = h.a0o | 0
        if (f !== nullArray || c !== 0) f[c].a1(f, c)
        f = n[o].a3
        j.a0.call(null, a)
    }
}
function ql(f, g) {
    f = f[g]
    var h = null,
        a = null,
        c = 0
    if (f.i7 | 0) {
        a = f.a6.a0
        c = f.a6.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a3
        return
    }
    a = f.a5.a0
    c = f.a5.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = f.a4
    h = f.a3
}
function qj(c, a) {
    c.a0.a0 = a
}
function qf(p) {
    var n = null,
        l = 0,
        h = null,
        f = 0,
        j = 0,
        a = 0,
        c = 0
    p.i5 = 0
    n = p.a2
    l = p.a2o | 0
    h = p.a1
    f = p.a1o | 0
    j = intMultiply_1(l, 4)
    a = (j - intMultiply_1(f, 4)) | 0
    if (a >>> 0 > 8) {
        c = 0
        while (1) {
            c = (c + 1) | 0
            a = (j - intMultiply_1((f + c) | 0, 4)) | 0
            if (a >>> 0 > 8) continue
            break
        }
        p.a1 = h
        p.a1o = (f + c) | 0
    } else {
        c = 0
    }
    a >>>= 2
    if ((a | 0) === 1) p.i4 = 512
    else if ((a | 0) === 2) p.i4 = 1024
    if (h !== n || ((f + c) | 0) !== l) {
        p.a2 = h
        p.a2o = (f + c) | 0
    }
}
function qe(p) {
    var n = null,
        l = 0,
        h = null,
        f = 0,
        j = 0,
        a = 0,
        c = 0
    p.i5 = 0
    n = p.a2
    l = p.a2o | 0
    h = p.a1
    f = p.a1o | 0
    j = intMultiply_1(l, 4)
    a = (j - intMultiply_1(f, 4)) | 0
    if (a >>> 0 > 8) {
        c = 0
        while (1) {
            c = (c + 1) | 0
            a = (j - intMultiply_1((f + c) | 0, 4)) | 0
            if (a >>> 0 > 8) continue
            break
        }
        p.a1 = h
        p.a1o = (f + c) | 0
    } else {
        c = 0
    }
    a >>>= 2
    if ((a | 0) === 1) p.i4 = 256
    else if ((a | 0) === 2) p.i4 = 512
    if (h !== n || ((f + c) | 0) !== l) {
        p.a2 = h
        p.a2o = (f + c) | 0
    }
}
function qd(l, j) {
    var f = null,
        h = null,
        n = null,
        a = null,
        c = 0
    a = wp({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (a = {
                i0: 0,
                a1: null,
            }),
        },
        i3: 0,
        a4: null,
    })
    a = a
    a.a0 = qa
    a.a1 = p$
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    h = f.a1
    h.i0 = 0
    n = f.a
    c = f.o - 1
    l.a0 = n
    l.a0o = c
    c = h.i0 | 0
    h.a1 = null
    if ((c & 65535) < 256) h.i0 = c | 256
    a.a4 = f
    a.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function qa(a, b) {}
function p$(a, b) {}
function p_(C, E, G, K) {
    var u = null,
        A = 0,
        H = null,
        r = 0,
        f = null,
        j = null,
        c = null,
        a = null,
        l = null,
        h = 0,
        n = null,
        x = -0,
        p = 0
    f = new yM().a
    j = f[0]
    j.a0 = p7
    j.a1 = p6
    j.a7 = K
    j.a6 = G
    j.a5 = E
    c = j.a2.a[j.a2.o - 1]
    C.a0 = c
    c = new XMLHttpRequest()
    j.a8 = c
    a = "GET"
    c.open(a, E)
    a = "Range"
    l = "bytes=0-1"
    c.setRequestHeader(a, l)
    a = j.a3
    b6(a, c)
    c = a.a0
    h = a.a0o | 0
    a: {
        if (c !== nullArray || h !== 0) {
            if (c[h].a0 !== null) {
                j.i4 = 0
                j = c[h].a[c[h].o - -1]
                j.a0 = f
                j.a0o = 0
                break a
            }
            c[h].a1(c, h)
        }
        if (!(+j.a8.status === 200)) {
            if (!(+j.a8.status === 206)) {
                c = j.a8
                j = j.a7
                f = "Initialization failed for 'HttpBytesDevice': Server returned "
                j(f.concat(+c.status))
                break a
            }
        }
        c = j.a8
        a = "Last-Modified"
        f = c.getResponseHeader(a)
        a = "Etag"
        c = c.getResponseHeader(a)
        h = c !== null ? 1 : 0
        if (f === null) {
            if (!h) {
                f = j.a7
                j = "Initialization failed for 'HttpBytesDevice': Server didn't include header `Last-Modified` nor header `Etag`"
                f(j)
                break a
            }
        }
        a = j.a8
        l = "Content-Range"
        a = a.getResponseHeader(l)
        if (a !== null) {
            if (h) {
                a = "%"
                l = "g"
                f = new RegExp(a, l)
                n = "%25"
                f = c.replace(f, n)
                c = "/"
                a = "g"
                l = new RegExp(c, a)
                n = "%2F"
                f = f.replace(l, n)
            } else {
                x = +Date.parse(f)
                f = "/"
                c = a.split(f)
                f = c[(0 + 1) | 0]
                f = f.concat("-").concat(~~(x / 1000))
            }
            c = {
                a0: null,
                i1: 0,
                i2: 0,
                i3: 0,
                a4: null,
                a5: null,
            }
            x = +parseInt(f)
            c.a0 = at
            c.i1 = 1
            h = ac | 0
            ac = (h + 1) | 0
            c.i2 = h
            n = N.a1
            p = N.a1o | 0
            a = N.a2
            u = a.a0
            A = a.a0o | 0
            if (p < A) {
                n[p] = c
                N.a1 = n
                N.a1o = (p + 1) | 0
            } else {
                l = {
                    a0: null,
                    a1: nullArray,
                    a1o: 0,
                    a2: nullArray,
                    a2o: 0,
                    a3: {
                        a0: nullArray,
                        a0o: 0,
                        a1: (l = {
                            a0: null,
                        }),
                    },
                }
                H = N.a0
                h = N.a0o | 0
                h = intMultiply_1(h, 4)
                p = (intMultiply_1(p, 4) - h) >> 2
                r = (p + 1) | 0
                if (r >>> 0 > 1073741823) ab()
                h = (intMultiply_1(A, 4) - h) | 0
                if (h >>> 0 < 2147483644) {
                    h >>>= 1
                    h = h >>> 0 > r >>> 0 ? h | 0 : r | 0
                } else {
                    h = 1073741823
                }
                n = l.a3
                n.a1.a0 = a
                if ((h | 0) !== 0) a = DD([], 0, ((h << 2) / 4) | 0, null)
                else {
                    a = nullArray
                }
                l.a0 = a[0]
                l.a1 = a
                l.a1o = (0 + p) | 0
                n.a0 = a
                n.a0o = (0 + h) | 0
                a[p] = c
                l.a2 = a
                l.a2o = (((0 + p) | 0) + 1) | 0
                av(l)
            }
            a = j.a6
            j = j.a5
            c.i3 = ~~x
            c.a4 = f
            c.a0 = es
            c.a5 = j
            a(
                CheerpX.Device.wrap(
                    Object.create(CheerpX.HttpBytesDevice.prototype, {
                        this: {
                            value: c,
                        },
                    })
                )
            )
        } else {
            f = j.a7
            j = "Initialization failed for 'HttpBytesDevice': Server didn't include header `Content-Range`"
            f(j)
        }
    }
}
function p7(A, B) {
    A = A[B]
    var x = 0,
        l = null,
        C = null,
        r = 0,
        c = null,
        f = 0,
        a = null,
        h = null,
        j = null,
        n = null,
        u = -0,
        p = 0
    c = A.a3.a0
    f = A.a3.a0o | 0
    if (c !== nullArray || f !== 0) c[f].a1(c, f)
    c = A.a8
    a: {
        if (!(+c.status === 200)) {
            if (!(+c.status === 206)) {
                a = A.a7
                h = "Initialization failed for 'HttpBytesDevice': Server returned "
                a(h.concat(+c.status))
                break a
            }
        }
        a = "Last-Modified"
        h = c.getResponseHeader(a)
        a = "Etag"
        j = c.getResponseHeader(a)
        f = j !== null ? 1 : 0
        if (h === null) {
            if (!f) {
                c = A.a7
                a = "Initialization failed for 'HttpBytesDevice': Server didn't include header `Last-Modified` nor header `Etag`"
                c(a)
                break a
            }
        }
        a = "Content-Range"
        c = c.getResponseHeader(a)
        if (c !== null) {
            if (f) {
                a = "%"
                n = "g"
                c = new RegExp(a, n)
                h = "%25"
                c = j.replace(c, h)
                a = "/"
                n = "g"
                h = new RegExp(a, n)
                j = "%2F"
                c = c.replace(h, j)
            } else {
                u = +Date.parse(h)
                a = "/"
                c = c.split(a)
                c = c[(0 + 1) | 0]
                c = c.concat("-").concat(~~(u / 1000))
            }
            h = {
                a0: null,
                i1: 0,
                i2: 0,
                i3: 0,
                a4: null,
                a5: null,
            }
            u = +parseInt(c)
            h.a0 = at
            h.i1 = 1
            f = ac | 0
            ac = (f + 1) | 0
            h.i2 = f
            a = N.a1
            p = N.a1o | 0
            n = N.a2
            j = n.a0
            x = n.a0o | 0
            if (p < x) {
                a[p] = h
                N.a1 = a
                N.a1o = (p + 1) | 0
            } else {
                l = {
                    a0: null,
                    a1: nullArray,
                    a1o: 0,
                    a2: nullArray,
                    a2o: 0,
                    a3: {
                        a0: nullArray,
                        a0o: 0,
                        a1: (l = {
                            a0: null,
                        }),
                    },
                }
                C = N.a0
                f = N.a0o | 0
                f = intMultiply_1(f, 4)
                p = (intMultiply_1(p, 4) - f) >> 2
                r = (p + 1) | 0
                if (r >>> 0 > 1073741823) ab()
                f = (intMultiply_1(x, 4) - f) | 0
                if (f >>> 0 < 2147483644) {
                    f >>>= 1
                    f = f >>> 0 > r >>> 0 ? f | 0 : r | 0
                } else {
                    f = 1073741823
                }
                a = l.a3
                a.a1.a0 = n
                if ((f | 0) !== 0) j = DD([], 0, ((f << 2) / 4) | 0, null)
                else {
                    j = nullArray
                }
                l.a0 = j[0]
                l.a1 = j
                l.a1o = (0 + p) | 0
                a.a0 = j
                a.a0o = (0 + f) | 0
                j[p] = h
                l.a2 = j
                l.a2o = (((0 + p) | 0) + 1) | 0
                av(l)
            }
            a = A.a6
            n = A.a5
            h.i3 = ~~u
            h.a4 = c
            h.a0 = es
            h.a5 = n
            a(
                CheerpX.Device.wrap(
                    Object.create(CheerpX.HttpBytesDevice.prototype, {
                        this: {
                            value: h,
                        },
                    })
                )
            )
        } else {
            c = A.a7
            a = "Initialization failed for 'HttpBytesDevice': Server didn't include header `Content-Range`"
            c(a)
        }
    }
}
function p6(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function p4(C, A, x, u, r) {
    var p = null,
        n = 0,
        j = null,
        c = null,
        a = null,
        f = 0,
        h = null,
        l = null
    j = new yL().a
    c = j[0]
    c.a0 = p1
    c.a1 = p0
    c.a11 = r
    c.a10 = u
    c.a9 = x
    c.a8 = A
    a = c.a2.a[c.a2.o - 1]
    C.a0 = a
    a: {
        if (A !== null) {
            f = A.i1 | 0
            if (x !== null) {
                if ((f | 0) === 1) {
                    if ((x.i1 | 0) === 0) {
                        a = "/meta_"
                        h = A.a4
                        a = a.concat(h)
                        a = a
                        c.a12 = a
                        h = c.a3
                        a4(h, x, a)
                        a = h.a0
                        f = h.a0o | 0
                        if (a !== nullArray || f !== 0) {
                            if (a[f].a0 !== null) {
                                c.i7 = 0
                                c = a[f].a[a[f].o - -1]
                                c.a0 = j
                                c.a0o = 0
                                break a
                            }
                        }
                        a = a[f].a[a[f].o - -1]
                        a = a.a1.a1
                        l = h.a0
                        f = h.a0o | 0
                        if (l !== nullArray || f !== 0) l[f].a1(l, f)
                        l = c.a12
                        if ((a.permType | 0) === 0) {
                            a = aR[2]
                            c.a13 = a
                            h = "wait"
                            c.a14 = "ready"
                            if (a !== null) aJ(a, h)
                            a = c.a4
                            d3(a, c.a9)
                            h = a.a0
                            f = a.a0o | 0
                            if (h !== nullArray || f !== 0) {
                                if (h[f].a0 !== null) {
                                    c.i7 = 1
                                    c = h[f].a[h[f].o - -1]
                                    c.a0 = j
                                    c.a0o = 0
                                    break a
                                }
                                h[f].a1(h, f)
                            }
                            a = c.a12
                            h = c.a9
                            l = "w"
                            c.a15 = l
                            p = c.a5
                            aB(p, h, a, l, 0, 0)
                            a = p.a0
                            f = p.a0o | 0
                            if (a !== nullArray || f !== 0) {
                                if (a[f].a0 !== null) {
                                    c.i7 = 2
                                    c = a[f].a[a[f].o - -1]
                                    c.a0 = j
                                    c.a0o = 0
                                    break a
                                }
                            }
                            a = a[f].a[a[f].o - -1]
                            f = a.a1.i1 | 0
                            a = p.a0
                            n = p.a0o | 0
                            if (a !== nullArray || n !== 0) a[n].a1(a, n)
                            a = c.a15
                            h = c.a12
                            if ((f | 0) < 0) {
                                j = c.a11
                                c = "Initialization failed for 'OverlayDevice'"
                                j(c)
                                break a
                            }
                            a = c.a6
                            aV(a, f)
                            h = a.a0
                            f = a.a0o | 0
                            if (h !== nullArray || f !== 0) {
                                if (h[f].a0 !== null) {
                                    c.i7 = 3
                                    c = h[f].a[h[f].o - -1]
                                    c.a0 = j
                                    c.a0o = 0
                                    break a
                                }
                                h[f].a1(h, f)
                            }
                            j = c.a13
                            if (j !== null) {
                                a = c.a14
                                aJ(j, a)
                            }
                        }
                        a = c.a10
                        h = c.a9
                        c = c.a8
                        j = h.a4
                        j = j.concat("_overlay")
                        l = new zS()
                        g9(l, c, h, j, c.i3 | 0)
                        a(
                            CheerpX.Device.wrap(
                                Object.create(CheerpX.OverlayDevice.prototype, {
                                    this: {
                                        value: l,
                                    },
                                })
                            )
                        )
                        break a
                    }
                }
            }
        }
        j = "Initialization failed for 'OverlayDevice'"
        r(j)
    }
}
function p1(u, v) {
    var r = null,
        a = 0,
        j = null,
        h = null,
        c = null,
        p = 0,
        f = null,
        l = null,
        n = null
    a = u[v].i7 | 0
    j = u[v].a6
    h = u[v].a5
    a: {
        b: {
            c: {
                d: {
                    if (a << 30 < 0) {
                        if ((a & 3) !== 2) {
                            h = j.a0
                            a = j.a0o | 0
                            if (h === nullArray && a === 0) break c
                            a = a
                            j = h
                            break d
                        }
                        c = h.a0
                        a = h.a0o | 0
                        c = c[a]
                    } else {
                        c = u[v].a4
                        e: {
                            if ((a & 3) !== 0) {
                                f = c.a0
                                a = c.a0o | 0
                                if (f === nullArray && a === 0) break e
                                a = a
                                c = f
                            } else {
                                f = u[v].a3.a0
                                a = u[v].a3.a0o | 0
                                f = f[a].a[f[a].o - -1]
                                f = f.a1.a1
                                l = u[v].a3.a0
                                a = u[v].a3.a0o | 0
                                if (l !== nullArray || a !== 0) l[a].a1(l, a)
                                l = u[v].a12
                                if ((f.permType | 0) !== 0) break b
                                f = aR[2]
                                u[v].a13 = f
                                l = "wait"
                                u[v].a14 = "ready"
                                if (f !== null) aJ(f, l)
                                d3(c, u[v].a9)
                                f = c.a0
                                a = c.a0o | 0
                                if (f === nullArray && a === 0) break e
                                if (f[a].a0 !== null) {
                                    u[v].i7 = 1
                                    j = f[a].a[f[a].o - -1]
                                    j.a0 = u
                                    j.a0o = v
                                    break a
                                }
                                a = a
                                c = f
                            }
                            c[a].a1(c, a)
                        }
                        c = u[v].a12
                        f = u[v].a9
                        l = "w"
                        u[v].a15 = l
                        aB(h, f, c, l, 0, 0)
                        c = h.a0
                        a = h.a0o | 0
                        if (c !== nullArray || a !== 0) {
                            if (c[a].a0 !== null) {
                                u[v].i7 = 2
                                j = c[a].a[c[a].o - -1]
                                j.a0 = u
                                j.a0o = v
                                break a
                            }
                            c = c[a]
                        } else {
                            c = null
                        }
                    }
                    c = c.a[c.o - -1]
                    a = c.a1.i1 | 0
                    c = h.a0
                    p = h.a0o | 0
                    if (c !== nullArray || p !== 0) c[p].a1(c, p)
                    h = u[v].a15
                    c = u[v].a12
                    if ((a | 0) < 0) {
                        j = u[v].a11
                        h = "Initialization failed for 'OverlayDevice'"
                        j(h)
                        break a
                    }
                    h = wC({
                        a0: null,
                        a1: null,
                        a2: {
                            a0: nullArray,
                            a0o: 0,
                        },
                        a3: null,
                        a4: (h = {
                            i0: 0,
                            a1: {
                                a0: nullArray,
                                a0o: 0,
                            },
                        }),
                        i5: 0,
                    }).a
                    c = h[0]
                    c.a0 = by
                    c.a1 = bx
                    r = c.a2
                    r.a0 = nullArray
                    r.a0o = 0
                    f = r.a
                    p = r.o - 1
                    j.a0 = f
                    j.a0o = p
                    f = c.a4
                    f.i0 = 0
                    f.a1.a0 = nullArray
                    f.a1.a0o = 0
                    l = ap
                    n = [
                        {
                            a0: null,
                        },
                    ]
                    n[0].a0 = f
                    n = DB(bv, n[0])
                    cheerpOSClose(l, a, n)
                    if ((f.i0 & 255) !== 0) {
                        c.a3 = r
                        c.a0 = null
                        h = r.a0
                        a = r.a0o | 0
                        ;(h !== nullArray || a !== 0 ? h : W)[h !== nullArray || a !== 0 ? a : X].a0(h !== nullArray || a !== 0 ? h : W, h !== nullArray || a !== 0 ? a : X)
                    } else {
                        c.i5 = 0
                        f.a1.a0 = h
                        f.a1.a0o = 0
                    }
                    h = j.a0
                    a = j.a0o | 0
                    if (h === nullArray && a === 0) break c
                    if (h[a].a0 !== null) {
                        u[v].i7 = 3
                        j = h[a].a[h[a].o - -1]
                        j.a0 = u
                        j.a0o = v
                        break a
                    }
                    a = a
                    j = h
                }
                j[a].a1(j, a)
            }
            j = u[v].a13
            if (j !== null) {
                h = u[v].a14
                aJ(j, h)
            }
        }
        j = u[v].a10
        h = u[v].a9
        c = u[v].a8
        f = h.a4
        f = f.concat("_overlay")
        l = new zS()
        g9(l, c, h, f, c.i3 | 0)
        j(
            CheerpX.Device.wrap(
                Object.create(CheerpX.OverlayDevice.prototype, {
                    this: {
                        value: l,
                    },
                })
            )
        )
    }
}
function p0(f, g) {
    f = f[g]
    var h = null,
        a = 0,
        c = null
    a = f.i7 | 0
    if (a << 30 < 0) {
        if ((a & 3) === 2) {
            c = f.a5.a0
            a = f.a5.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
            c = f.a15
            h = f.a12
        } else {
            c = f.a6.a0
            a = f.a6.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        }
    } else if ((a & 3) !== 0) {
        c = f.a4.a0
        a = f.a4.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    } else {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
        c = f.a12
    }
}
function aV(c, a) {
    var f = null,
        p = null,
        r = null,
        j = null,
        h = null,
        n = 0,
        l = null
    j = wC({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
        a3: null,
        a4: (j = {
            i0: 0,
            a1: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i5: 0,
    }).a
    f = j[0]
    f.a0 = by
    f.a1 = bx
    p = f.a2
    p.a0 = nullArray
    p.a0o = 0
    h = p.a
    n = p.o - 1
    c.a0 = h
    c.a0o = n
    h = f.a4
    h.i0 = 0
    h.a1.a0 = nullArray
    h.a1.a0o = 0
    r = ap
    l = [
        {
            a0: null,
        },
    ]
    l[0].a0 = h
    l = DB(bv, l[0])
    cheerpOSClose(r, a, l)
    if ((h.i0 & 255) !== 0) {
        f.a3 = p
        f.a0 = null
        j = p.a0
        n = p.a0o | 0
        ;(j !== nullArray || n !== 0 ? j : W)[j !== nullArray || n !== 0 ? n : X].a0(j !== nullArray || n !== 0 ? j : W, j !== nullArray || n !== 0 ? n : X)
    } else {
        f.i5 = 0
        h.a1.a0 = j
        h.a1.a0o = 0
    }
}
function g9(x, u, r, p, n) {
    var C = null,
        A = 0,
        f = null,
        E = null,
        l = 0,
        c = 0,
        a = null,
        j = 0,
        h = null
    x.a0 = at
    x.i1 = 1
    c = ac | 0
    ac = (c + 1) | 0
    x.i2 = c
    a = N.a1
    j = N.a1o | 0
    C = N.a2
    h = C.a0
    A = C.a0o | 0
    if (j < A) {
        a[j] = x
        N.a1 = a
        N.a1o = (j + 1) | 0
    } else {
        f = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (f = {
                    a0: null,
                }),
            },
        }
        E = N.a0
        c = N.a0o | 0
        c = intMultiply_1(c, 4)
        j = (intMultiply_1(j, 4) - c) >> 2
        l = (j + 1) | 0
        if (l >>> 0 > 1073741823) ab()
        c = (intMultiply_1(A, 4) - c) | 0
        if (c >>> 0 < 2147483644) {
            c >>>= 1
            c = c >>> 0 > l >>> 0 ? c | 0 : l | 0
        } else {
            c = 1073741823
        }
        a = f.a3
        a.a1.a0 = C
        if ((c | 0) !== 0) h = DD([], 0, ((c << 2) / 4) | 0, null)
        else {
            h = nullArray
        }
        f.a0 = h[0]
        f.a1 = h
        f.a1o = (0 + j) | 0
        a.a0 = h
        a.a0o = (0 + c) | 0
        h[j] = x
        f.a2 = h
        f.a2o = (((0 + j) | 0) + 1) | 0
        av(f)
    }
    x.i3 = n
    x.a4 = p
    x.a0 = ep
    x.a5 = u
    x.a6 = r
    a = x.a7
    a.a0 = nullArray
    a.a0o = 0
    a.i1 = a.i1 & 65280
    a = x.a8
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = x.a9
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = x.a10
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    x.i11 = x.i11 & 255
}
function pZ(p, n) {
    var l = null,
        r = 0,
        j = null,
        a = null,
        f = null,
        c = 0,
        h = null
    j = new yK().a
    a = j[0]
    a.a0 = pW
    a.a1 = pV
    a.a5 = n
    f = a.a2.a[a.a2.o - 1]
    p.a0 = f
    f = new Array()
    a.a6 = f
    c = n.i3 | 0
    a.i7 = c
    a: {
        if ((c + 131071) >>> 0 >= 131072) {
            f = a.a3
            c = 0
            while (1) {
                a.i8 = c
                h = a.a5
                l = new Uint8Array(131072)
                a.a9 = l
                be(f, h, null, c, l, 0, null)
                h = f.a0
                c = f.a0o | 0
                if (h !== nullArray || c !== 0) {
                    if (h[c].a0 !== null) {
                        a.i4 = 0
                        a = h[c].a[h[c].o - -1]
                        a.a0 = j
                        a.a0o = 0
                        break a
                    }
                    h[c].a1(h, c)
                }
                c = a.i8 | 0
                r = a.i7 | 0
                ;+a.a6.push(a.a9)
                c = (c + 1) | 0
                if ((c | 0) !== (((r + 131071) >>> 17) | 0)) continue
                break
            }
            f = a.a6
        }
        j = a.a5
        f = new Blob(f)
        b_(f, j.a6.a4)
    }
}
function pW(j, k) {
    var l = 0,
        h = null,
        f = null,
        c = null,
        a = 0
    f = j[k].a3
    c = f.a0
    a = f.a0o | 0
    a: {
        while (1) {
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
            a = j[k].i8 | 0
            l = j[k].i7 | 0
            c = j[k].a6
            ;+c.push(j[k].a9)
            a = (a + 1) | 0
            if ((a | 0) !== (((l + 131071) >>> 17) | 0)) {
                j[k].i8 = a
                c = j[k].a5
                h = new Uint8Array(131072)
                j[k].a9 = h
                be(f, c, null, a, h, 0, null)
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) {
                    if (c[a].a0 !== null) {
                        j[k].i4 = 0
                        f = c[a].a[c[a].o - -1]
                        f.a0 = j
                        f.a0o = k
                        break a
                    }
                }
                continue
            }
            break
        }
        f = j[k].a5
        c = new Blob(c)
        b_(c, f.a6.a4)
    }
}
function pV(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function pU(E, G, H, K) {
    var r = null,
        p = null,
        C = 0,
        l = null,
        x = 0,
        c = null,
        f = null,
        j = null,
        h = null,
        u = null,
        a = 0,
        A = -0,
        n = 0
    c = new yJ().a
    f = c[0]
    f.a0 = pR
    f.a1 = pQ
    f.a7 = K
    f.a6 = H
    f.a5 = G
    j = f.a2.a[f.a2.o - 1]
    E.a0 = j
    j = new XMLHttpRequest()
    f.a8 = j
    h = "GET"
    u = G.concat(".meta")
    j.open(h, u)
    h = f.a3
    b6(h, j)
    j = h.a0
    a = h.a0o | 0
    a: {
        if (j !== nullArray || a !== 0) {
            if (j[a].a0 !== null) {
                f.i4 = 0
                f = j[a].a[j[a].o - -1]
                f.a0 = c
                f.a0o = 0
                break a
            }
            j[a].a1(j, a)
        }
        if (!(+f.a8.status === 200)) {
            if (!(+f.a8.status === 206)) {
                c = f.a7
                f = "Initialization failed for 'GitHubDevice'"
                c(f)
                break a
            }
        }
        c = f.a8
        j = "Last-Modified"
        h = c.getResponseHeader(j)
        A = +Date.parse(h)
        c = c.responseText
        r = c.concat("-").concat(~~(A / 1000))
        p = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
        }
        A = +parseInt(r)
        p.a0 = at
        p.i1 = 1
        a = ac | 0
        ac = (a + 1) | 0
        p.i2 = a
        c = N.a1
        n = N.a1o | 0
        j = N.a2
        h = j.a0
        C = j.a0o | 0
        if (n < C) {
            c[n] = p
            N.a1 = c
            N.a1o = (n + 1) | 0
        } else {
            l = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (l = {
                        a0: null,
                    }),
                },
            }
            u = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            n = (intMultiply_1(n, 4) - a) >> 2
            x = (n + 1) | 0
            if (x >>> 0 > 1073741823) ab()
            a = (intMultiply_1(C, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > x >>> 0 ? a | 0 : x | 0
            } else {
                a = 1073741823
            }
            c = l.a3
            c.a1.a0 = j
            if ((a | 0) !== 0) h = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                h = nullArray
            }
            l.a0 = h[0]
            l.a1 = h
            l.a1o = (0 + n) | 0
            c.a0 = h
            c.a0o = (0 + a) | 0
            h[n] = p
            l.a2 = h
            l.a2o = (((0 + n) | 0) + 1) | 0
            av(l)
        }
        c = f.a6
        f = f.a5
        p.i3 = ~~A
        p.a4 = r
        p.a0 = en
        p.a5 = f
        c(
            CheerpX.Device.wrap(
                Object.create(CheerpX.GitHubDevice.prototype, {
                    this: {
                        value: p,
                    },
                })
            )
        )
    }
}
function pR(A, B) {
    A = A[B]
    var x = null,
        u = 0,
        j = null,
        C = null,
        p = 0,
        c = null,
        a = 0,
        h = null,
        f = null,
        r = -0,
        n = 0,
        l = null
    c = A.a3.a0
    a = A.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    c = A.a8
    a: {
        if (!(+c.status === 200)) {
            if (!(+c.status === 206)) {
                c = A.a7
                h = "Initialization failed for 'GitHubDevice'"
                c(h)
                break a
            }
        }
        h = "Last-Modified"
        f = c.getResponseHeader(h)
        r = +Date.parse(f)
        c = c.responseText
        c = c.concat("-").concat(~~(r / 1000))
        h = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
        }
        r = +parseInt(c)
        h.a0 = at
        h.i1 = 1
        a = ac | 0
        ac = (a + 1) | 0
        h.i2 = a
        f = N.a1
        n = N.a1o | 0
        x = N.a2
        l = x.a0
        u = x.a0o | 0
        if (n < u) {
            f[n] = h
            N.a1 = f
            N.a1o = (n + 1) | 0
        } else {
            j = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (j = {
                        a0: null,
                    }),
                },
            }
            C = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            n = (intMultiply_1(n, 4) - a) >> 2
            p = (n + 1) | 0
            if (p >>> 0 > 1073741823) ab()
            a = (intMultiply_1(u, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > p >>> 0 ? a | 0 : p | 0
            } else {
                a = 1073741823
            }
            f = j.a3
            f.a1.a0 = x
            if ((a | 0) !== 0) l = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                l = nullArray
            }
            j.a0 = l[0]
            j.a1 = l
            j.a1o = (0 + n) | 0
            f.a0 = l
            f.a0o = (0 + a) | 0
            l[n] = h
            j.a2 = l
            j.a2o = (((0 + n) | 0) + 1) | 0
            av(j)
        }
        f = A.a6
        l = A.a5
        h.i3 = ~~r
        h.a4 = c
        h.a0 = en
        h.a5 = l
        f(
            CheerpX.Device.wrap(
                Object.create(CheerpX.GitHubDevice.prototype, {
                    this: {
                        value: h,
                    },
                })
            )
        )
    }
}
function pQ(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function pP(E, G, K, L) {
    var n = null,
        C = 0,
        l = null,
        H = null,
        x = 0,
        j = null,
        f = null,
        a = null,
        c = null,
        p = null,
        A = -0,
        h = 0,
        u = 0,
        r = null
    j = new yI().a
    f = j[0]
    f.a0 = pM
    f.a1 = pL
    f.a8 = L
    f.a7 = K
    f.a6 = G
    a = f.a2.a[f.a2.o - 1]
    E.a0 = a
    a = "ws:"
    a: {
        b: {
            if (!G.startsWith(a)) {
                c = "wss:"
                h = G.startsWith(c)
                if (!h) {
                    a = new XMLHttpRequest()
                    f.a12 = a
                    c = "HEAD"
                    a.open(c, G)
                    c = f.a4
                    b6(c, a)
                    a = c.a0
                    h = c.a0o | 0
                    if (a !== nullArray || h !== 0) {
                        if (a[h].a0 !== null) {
                            f.i5 = 1
                            f = a[h].a[a[h].o - -1]
                            f.a0 = j
                            f.a0o = 0
                            break a
                        }
                        a[h].a1(a, h)
                    }
                    if (!(+f.a12.status === 200)) {
                        if (!(+f.a12.status === 206)) {
                            j = f.a8
                            f = "Initialization failed for 'CloudDevice'"
                            j(f)
                            break a
                        }
                    }
                    j = f.a12
                    a = "Last-Modified"
                    c = j.getResponseHeader(a)
                    A = +Date.parse(c)
                    a = "Content-Length"
                    j = j.getResponseHeader(a)
                    a = j.concat("-").concat(~~(A / 1000))
                    j = null
                    break b
                }
            }
            a = new WebSocket(G)
            f.a9 = a
            c = "arraybuffer"
            a.binaryType = c
            c = aR[2]
            f.a10 = c
            p = "wait"
            f.a11 = "ready"
            if (c !== null) aJ(c, p)
            c = f.a3
            c.i0 = 0
            c.a2.a0 = nullArray
            c.a2.a0o = 0
            p = [
                {
                    a0: null,
                },
            ]
            p[0].a0 = c
            p = DB(pJ, p[0])
            a.onmessage = p
            a.onerror = p
            if ((c.i0 & 255) === 0) {
                f.i5 = 0
                c.a2.a0 = j
                c.a2.a0o = 0
                break a
            }
            j = c.a1
            a = j.type
            c = "message"
            A = +a.localeCompare(c)
            if (!(A === 0)) {
                j = f.a8
                f = "Initialization failed for 'CloudDevice'"
                j(f)
                break a
            }
            a = f.a10
            if (a !== null) {
                c = f.a11
                aJ(a, c)
            }
            a = j.data
            if ((a.length | 0) === 0) {
                j = f.a8
                f = "Initialization failed for 'CloudDevice'"
                j(f)
                break a
            }
            j = f.a9
        }
        n = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
            a6: null,
        }
        A = +parseInt(a)
        n.a0 = at
        n.i1 = 1
        h = ac | 0
        ac = (h + 1) | 0
        n.i2 = h
        c = N.a1
        u = N.a1o | 0
        p = N.a2
        r = p.a0
        C = p.a0o | 0
        if (u < C) {
            c[u] = n
            N.a1 = c
            N.a1o = (u + 1) | 0
        } else {
            l = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (l = {
                        a0: null,
                    }),
                },
            }
            H = N.a0
            h = N.a0o | 0
            h = intMultiply_1(h, 4)
            u = (intMultiply_1(u, 4) - h) >> 2
            x = (u + 1) | 0
            if (x >>> 0 > 1073741823) ab()
            h = (intMultiply_1(C, 4) - h) | 0
            if (h >>> 0 < 2147483644) {
                h >>>= 1
                h = h >>> 0 > x >>> 0 ? h | 0 : x | 0
            } else {
                h = 1073741823
            }
            c = l.a3
            c.a1.a0 = p
            if ((h | 0) !== 0) r = DD([], 0, ((h << 2) / 4) | 0, null)
            else {
                r = nullArray
            }
            l.a0 = r[0]
            l.a1 = r
            l.a1o = (0 + u) | 0
            c.a0 = r
            c.a0o = (0 + h) | 0
            r[u] = n
            l.a2 = r
            l.a2o = (((0 + u) | 0) + 1) | 0
            av(l)
        }
        c = f.a6
        n.i3 = ~~A
        n.a4 = a
        n.a0 = em
        n.a5 = c
        n.a6 = j
        if (j !== null) {
            j = "beforeunload"
            a = [
                {
                    a0: null,
                },
            ]
            a[0].a0 = n
            a = DB(hH, a[0])
            window.addEventListener(j, a)
        }
        j = f.a7
        j(
            CheerpX.Device.wrap(
                Object.create(CheerpX.CloudDevice.prototype, {
                    this: {
                        value: n,
                    },
                })
            )
        )
    }
}
function pM(C, D) {
    C = C[D]
    var A = null,
        x = 0,
        j = null,
        E = null,
        u = 0,
        c = null,
        f = 0,
        a = null,
        h = null,
        r = -0,
        l = null,
        p = 0,
        n = null
    a: {
        if (C.i5 | 0) {
            c = C.a4.a0
            f = C.a4.a0o | 0
            if (c !== nullArray || f !== 0) c[f].a1(c, f)
            c = C.a12
            if (!(+c.status === 200)) {
                if (!(+c.status === 206)) {
                    c = C.a8
                    a = "Initialization failed for 'CloudDevice'"
                    c(a)
                    break a
                }
            }
            a = "Last-Modified"
            h = c.getResponseHeader(a)
            r = +Date.parse(h)
            a = "Content-Length"
            c = c.getResponseHeader(a)
            a = c.concat("-").concat(~~(r / 1000))
            c = null
        } else {
            c = C.a3.a1
            a = c.type
            h = "message"
            r = +a.localeCompare(h)
            if (!(r === 0)) {
                c = C.a8
                a = "Initialization failed for 'CloudDevice'"
                c(a)
                break a
            }
            a = C.a10
            if (a !== null) {
                h = C.a11
                aJ(a, h)
            }
            a = c.data
            if ((a.length | 0) === 0) {
                c = C.a8
                a = "Initialization failed for 'CloudDevice'"
                c(a)
                break a
            }
            c = C.a9
        }
        h = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
            a6: null,
        }
        r = +parseInt(a)
        h.a0 = at
        h.i1 = 1
        f = ac | 0
        ac = (f + 1) | 0
        h.i2 = f
        l = N.a1
        p = N.a1o | 0
        A = N.a2
        n = A.a0
        x = A.a0o | 0
        if (p < x) {
            l[p] = h
            N.a1 = l
            N.a1o = (p + 1) | 0
        } else {
            j = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (j = {
                        a0: null,
                    }),
                },
            }
            E = N.a0
            f = N.a0o | 0
            f = intMultiply_1(f, 4)
            p = (intMultiply_1(p, 4) - f) >> 2
            u = (p + 1) | 0
            if (u >>> 0 > 1073741823) ab()
            f = (intMultiply_1(x, 4) - f) | 0
            if (f >>> 0 < 2147483644) {
                f >>>= 1
                f = f >>> 0 > u >>> 0 ? f | 0 : u | 0
            } else {
                f = 1073741823
            }
            l = j.a3
            l.a1.a0 = A
            if ((f | 0) !== 0) n = DD([], 0, ((f << 2) / 4) | 0, null)
            else {
                n = nullArray
            }
            j.a0 = n[0]
            j.a1 = n
            j.a1o = (0 + p) | 0
            l.a0 = n
            l.a0o = (0 + f) | 0
            n[p] = h
            j.a2 = n
            j.a2o = (((0 + p) | 0) + 1) | 0
            av(j)
        }
        l = C.a6
        h.i3 = ~~r
        h.a4 = a
        h.a0 = em
        h.a5 = l
        h.a6 = c
        if (c !== null) {
            c = "beforeunload"
            a = [
                {
                    a0: null,
                },
            ]
            a[0].a0 = h
            a = DB(hH, a[0])
            window.addEventListener(c, a)
        }
        c = C.a7
        c(
            CheerpX.Device.wrap(
                Object.create(CheerpX.CloudDevice.prototype, {
                    this: {
                        value: h,
                    },
                })
            )
        )
    }
}
function pL(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.i5 | 0) {
        c = f.a4.a0
        a = f.a4.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function pJ(j, h) {
    var a = null,
        f = null,
        c = 0
    a = j.a0
    a.a1 = h
    a.i0 = 1
    f = a.a2.a0
    c = a.a2.a0o | 0
    if (f !== nullArray || c !== 0) f[c].a0(f, c)
}
function hH(c, a) {
    var h = null,
        f = null
    h = c.a0.a6
    f = ""
    h.send(f)
}
function sc(A, C, E, G, K) {
    var u = null,
        x = 0,
        H = null,
        r = 0,
        f = null,
        c = null,
        h = null,
        a = null,
        l = 0,
        j = 0,
        p = null,
        n = 0
    f = new yF().a
    c = f[0]
    c.a0 = r$
    c.a1 = r_
    c.a8 = K
    c.a7 = G
    c.a6 = E
    c.a5 = C
    h = c.a2.a[c.a2.o - 1]
    A.a0 = h
    a: if ((C.i1 | 0) !== 0) {
        f = "Initialization failed for 'FileDevice'"
        K(f)
    } else {
        h = "/"
        h = h.concat(E)
        a = h
        c.a9 = a
        h = c.a3
        a4(h, C, a)
        a = h.a0
        l = h.a0o | 0
        if (a !== nullArray || l !== 0) {
            if (a[l].a0 !== null) {
                c.i4 = 0
                c = a[l].a[a[l].o - -1]
                c.a0 = f
                c.a0o = 0
                break a
            }
        }
        f = a[l].a[a[l].o - -1]
        f = f.a1.a1
        a = h.a0
        l = h.a0o | 0
        if (a !== nullArray || l !== 0) a[l].a1(a, l)
        h = c.a9
        if ((f.permType | 0) !== 0) {
            a = c.a6
            h = {
                a0: null,
                i1: 0,
                i2: 0,
                i3: 0,
                a4: null,
                a5: null,
                a6: null,
            }
            l = f.fileLength
            h.a0 = at
            h.i1 = 1
            j = ac | 0
            ac = (j + 1) | 0
            h.i2 = j
            p = N.a1
            n = N.a1o | 0
            f = N.a2
            u = f.a0
            x = f.a0o | 0
            if (n < x) {
                p[n] = h
                N.a1 = p
                N.a1o = (n + 1) | 0
            } else {
                a = {
                    a0: null,
                    a1: nullArray,
                    a1o: 0,
                    a2: nullArray,
                    a2o: 0,
                    a3: {
                        a0: nullArray,
                        a0o: 0,
                        a1: (a = {
                            a0: null,
                        }),
                    },
                }
                H = N.a0
                j = N.a0o | 0
                j = intMultiply_1(j, 4)
                n = (intMultiply_1(n, 4) - j) >> 2
                r = (n + 1) | 0
                if (r >>> 0 > 1073741823) ab()
                j = (intMultiply_1(x, 4) - j) | 0
                if (j >>> 0 < 2147483644) {
                    j >>>= 1
                    j = j >>> 0 > r >>> 0 ? j | 0 : r | 0
                } else {
                    j = 1073741823
                }
                p = a.a3
                p.a1.a0 = f
                if ((j | 0) !== 0) f = DD([], 0, ((j << 2) / 4) | 0, null)
                else {
                    f = nullArray
                }
                a.a0 = f[0]
                a.a1 = f
                a.a1o = (0 + n) | 0
                p.a0 = f
                p.a0o = (0 + j) | 0
                f[n] = h
                a.a2 = f
                a.a2o = (((0 + n) | 0) + 1) | 0
                av(a)
            }
            f = c.a7
            a = c.a6
            c = c.a5
            h.i3 = l
            h.a4 = a
            h.a0 = ct
            h.a5 = c
            c = "/"
            c = c.concat(a)
            c = c
            h.a6 = c
            f(
                CheerpX.Device.wrap(
                    Object.create(CheerpX.FileDevice.prototype, {
                        this: {
                            value: h,
                        },
                    })
                )
            )
        } else {
            f = c.a8
            c = "Initialization failed for 'FileDevice'"
            f(c)
        }
    }
}
function r$(A, B) {
    A = A[B]
    var j = null,
        p = null,
        x = 0,
        h = null,
        C = null,
        u = 0,
        c = null,
        r = 0,
        f = null,
        a = 0,
        n = 0,
        l = null
    c = A.a3.a0
    r = A.a3.a0o | 0
    f = c[r].a[c[r].o - -1]
    f = f.a1.a1
    if (c !== nullArray || r !== 0) c[r].a1(c, r)
    c = A.a9
    if ((f.permType | 0) !== 0) {
        j = A.a6
        p = {
            a0: null,
            i1: 0,
            i2: 0,
            i3: 0,
            a4: null,
            a5: null,
            a6: null,
        }
        r = f.fileLength
        p.a0 = at
        p.i1 = 1
        a = ac | 0
        ac = (a + 1) | 0
        p.i2 = a
        f = N.a1
        n = N.a1o | 0
        c = N.a2
        l = c.a0
        x = c.a0o | 0
        if (n < x) {
            f[n] = p
            N.a1 = f
            N.a1o = (n + 1) | 0
        } else {
            h = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (h = {
                        a0: null,
                    }),
                },
            }
            C = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            n = (intMultiply_1(n, 4) - a) >> 2
            u = (n + 1) | 0
            if (u >>> 0 > 1073741823) ab()
            a = (intMultiply_1(x, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > u >>> 0 ? a | 0 : u | 0
            } else {
                a = 1073741823
            }
            f = h.a3
            f.a1.a0 = c
            if ((a | 0) !== 0) l = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                l = nullArray
            }
            h.a0 = l[0]
            h.a1 = l
            h.a1o = (0 + n) | 0
            f.a0 = l
            f.a0o = (0 + a) | 0
            l[n] = p
            h.a2 = l
            h.a2o = (((0 + n) | 0) + 1) | 0
            av(h)
        }
        f = A.a7
        c = A.a5
        p.i3 = r
        p.a4 = j
        p.a0 = ct
        p.a5 = c
        c = "/"
        c = c.concat(j)
        c = c
        p.a6 = c
        f(
            CheerpX.Device.wrap(
                Object.create(CheerpX.FileDevice.prototype, {
                    this: {
                        value: p,
                    },
                })
            )
        )
    } else {
        f = A.a8
        c = "Initialization failed for 'FileDevice'"
        f(c)
    }
}
function r_(f, g) {
    f = f[g]
    var c = 0,
        a = null
    a = f.a3.a0
    c = f.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = f.a9
}
function r9(u, r) {
    var p = null,
        n = null,
        l = 0,
        j = null,
        c = null,
        a = null,
        h = null,
        f = 0
    j = new yE().a
    c = j[0]
    c.a0 = r6
    c.a1 = r5
    c.a6 = r
    a = c.a2.a[c.a2.o - 1]
    u.a0 = a
    new Array()
    a = r.a5
    h = r.a6
    c.a7 = h
    p = "r"
    c.a8 = p
    n = c.a3
    aB(n, a, h, p, 0, 0)
    a = n.a0
    f = n.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i5 = 0
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        f = a.a1.i1 | 0
        a = n.a0
        l = n.a0o | 0
        if (a !== nullArray || l !== 0) a[l].a1(a, l)
        a = c.a8
        h = c.a7
        a = c.a6.a6
        c.a9 = a
        h = c.a4
        b$(h, f, a)
        a = h.a0
        f = h.a0o | 0
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i5 = 1
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        a = a.a1.a1
        j = h.a0
        f = h.a0o | 0
        if (j !== nullArray || f !== 0) j[f].a1(j, f)
        j = c.a9
        b_(a, c.a6.a6)
    }
}
function r6(l, m) {
    var j = 0,
        f = null,
        a = null,
        c = 0,
        h = null
    f = l[m].a4
    a: {
        if (l[m].i5 | 0) {
            a = f.a0
            c = f.a0o | 0
            a = a[c]
        } else {
            a = l[m].a3.a0
            c = l[m].a3.a0o | 0
            a = a[c].a[a[c].o - -1]
            c = a.a1.i1 | 0
            a = l[m].a3.a0
            j = l[m].a3.a0o | 0
            if (a !== nullArray || j !== 0) a[j].a1(a, j)
            a = l[m].a8
            h = l[m].a7
            a = l[m].a6.a6
            l[m].a9 = a
            b$(f, c, a)
            a = f.a0
            c = f.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    l[m].i5 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = l
                    f.a0o = m
                    break a
                }
                a = a[c]
            } else {
                a = null
            }
        }
        a = a.a[a.o - -1]
        a = a.a1.a1
        h = f.a0
        c = f.a0o | 0
        if (h !== nullArray || c !== 0) h[c].a1(h, c)
        h = l[m].a9
        b_(a, l[m].a6.a6)
    }
}
function r5(f, g) {
    f = f[g]
    var h = null,
        a = null,
        c = 0
    if (f.i5 | 0) {
        a = f.a4.a0
        c = f.a4.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a9
        return
    }
    a = f.a3.a0
    c = f.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = f.a8
    h = f.a7
}
function r3(E, C, A, x, u, r, p) {
    var c = null,
        G = null,
        n = null,
        l = 0,
        a = null,
        j = null,
        h = null,
        f = 0
    a = C.a0
    j = new yC().a
    c = j[0]
    c.a0 = rZ
    c.a1 = s3
    c.a9 = a
    c.a8 = p
    c.a7 = r
    c.a6 = u
    c.a5 = x
    h = c.a2.a[c.a2.o - 1]
    E.a0 = h
    h = "/"
    a: {
        if (x.startsWith(h)) {
            G = x.substring(1)
            n = "/"
            f = G.indexOf(n)
            if ((f | 0) === -1) {
                if (A !== null) {
                    f = a.i2 | 0
                    a = x.substring(1)
                    c.a10 = a
                    h = c.a3
                    jV(h, A, f, a)
                    a = h.a0
                    f = h.a0o | 0
                    if (a !== nullArray || f !== 0) {
                        if (a[f].a0 !== null) {
                            c.i4 = 0
                            a = a[f].a[a[f].o - -1]
                            a.a0 = j
                            a.a0o = 0
                            break a
                        }
                    }
                    a = a[f].a[a[f].o - -1]
                    f = a.a1.i1 | 0
                    a = h.a0
                    l = h.a0o | 0
                    if (a !== nullArray || l !== 0) a[l].a1(a, l)
                    a = c.a10
                    if ((f | 0) === 0) {
                        a = c.a8
                        j = "Unable to add file"
                        a(j)
                        break a
                    }
                }
                a = c.a7
                cheerpOSAddStringFileMain(c.a9.a3, c.a5, c.a6)
                a(null)
                break a
            }
        }
        a = "Invalid fileName"
        p(a)
    }
}
function rZ(h, i) {
    h = h[i]
    var f = 0,
        j = 0,
        a = null,
        c = null
    a = h.a3.a0
    f = h.a3.a0o | 0
    c = a[f].a[a[f].o - -1]
    j = c.a1.i1 | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = h.a10
    if ((j | 0) !== 0) {
        a = h.a7
        cheerpOSAddStringFileMain(h.a9.a3, h.a5, h.a6)
        a(null)
    } else {
        a = h.a8
        c = "Unable to add file"
        a(c)
    }
}
function s3(f, g) {
    f = f[g]
    var c = 0,
        a = null
    a = f.a3.a0
    c = f.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = f.a10
}
function s2(A, x) {
    var u = 0,
        j = null,
        C = null,
        r = 0,
        l = null,
        f = null,
        c = null,
        a = 0,
        n = 0,
        p = null,
        h = null
    l = wX({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: (l = {
            a0: null,
            a1: null,
        }),
        i4: 0,
        a5: null,
        a6: null,
    }).a
    f = l[0]
    f.a0 = sZ
    f.a1 = sY
    f.a5 = x
    c = f.a2.a[f.a2.o - 1]
    A.a0 = c
    if ((aQ | 0) !== 0) {
        l = {
            a0: null,
            i1: 0,
            i2: 0,
            a3: null,
            a4: null,
        }
        l.a0 = at
        l.i1 = 0
        a = ac | 0
        ac = (a + 1) | 0
        l.i2 = a
        c = N.a1
        n = N.a1o | 0
        p = N.a2
        h = p.a0
        u = p.a0o | 0
        if (n < u) {
            c[n] = l
            N.a1 = c
            N.a1o = (n + 1) | 0
        } else {
            j = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (j = {
                        a0: null,
                    }),
                },
            }
            C = N.a0
            a = N.a0o | 0
            a = intMultiply_1(a, 4)
            n = (intMultiply_1(n, 4) - a) >> 2
            r = (n + 1) | 0
            if (r >>> 0 > 1073741823) ab()
            a = (intMultiply_1(u, 4) - a) | 0
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > r >>> 0 ? a | 0 : r | 0
            } else {
                a = 1073741823
            }
            c = j.a3
            c.a1.a0 = p
            if ((a | 0) !== 0) h = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                h = nullArray
            }
            j.a0 = h[0]
            j.a1 = h
            j.a1o = (0 + n) | 0
            c.a0 = h
            c.a0o = (0 + a) | 0
            h[n] = l
            j.a2 = h
            j.a2o = (((0 + n) | 0) + 1) | 0
            av(j)
        }
        c = f.a5
        l.a3 = null
        l.a0 = er
        l.a4 = null
        p = "/str"
        l.a3 = new CheerpJDataFolder(p)
        c(
            CheerpX.Device.wrap(
                Object.create(CheerpX.DataDevice.prototype, {
                    this: {
                        value: l,
                    },
                })
            )
        )
    } else {
        c = cH()
        f.a6 = c
        h = f.a3
        h.a0 = c
        f.i4 = 0
        f = [
            {
                a0: null,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            },
        ]
        f[0].a0 = h
        f[0].a1.a0 = l
        f[0].a1.a0o = 0
        h = DB(ek, f[0])
        c.then(h)
    }
}
function sZ(u, v) {
    u = u[v]
    var l = null,
        r = null,
        p = 0,
        c = null,
        x = null,
        n = 0,
        a = 0,
        h = null,
        j = 0,
        f = null
    l = {
        a0: null,
        i1: 0,
        i2: 0,
        a3: null,
        a4: null,
    }
    l.a0 = at
    l.i1 = 0
    a = ac | 0
    ac = (a + 1) | 0
    l.i2 = a
    h = N.a1
    j = N.a1o | 0
    r = N.a2
    f = r.a0
    p = r.a0o | 0
    if (j < p) {
        h[j] = l
        N.a1 = h
        N.a1o = (j + 1) | 0
    } else {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        x = N.a0
        a = N.a0o | 0
        a = intMultiply_1(a, 4)
        j = (intMultiply_1(j, 4) - a) >> 2
        n = (j + 1) | 0
        if (n >>> 0 > 1073741823) ab()
        a = (intMultiply_1(p, 4) - a) | 0
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > n >>> 0 ? a | 0 : n | 0
        } else {
            a = 1073741823
        }
        h = c.a3
        h.a1.a0 = r
        if ((a | 0) !== 0) f = DD([], 0, ((a << 2) / 4) | 0, null)
        else {
            f = nullArray
        }
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + j) | 0
        h.a0 = f
        h.a0o = (0 + a) | 0
        f[j] = l
        c.a2 = f
        c.a2o = (((0 + j) | 0) + 1) | 0
        av(c)
    }
    h = u.a5
    l.a3 = null
    l.a0 = er
    l.a4 = null
    f = "/str"
    l.a3 = new CheerpJDataFolder(f)
    h(
        CheerpX.Device.wrap(
            Object.create(CheerpX.DataDevice.prototype, {
                this: {
                    value: l,
                },
            })
        )
    )
}
function sY(a, b) {}
function hN(E, C, A, x, u, r) {
    var a = null,
        f = null,
        p = null,
        n = null,
        G = null,
        c = null,
        l = null,
        j = 0,
        h = null
    c = wW({
        a0: null,
        a1: null,
        a2: (c = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: (c = {
            i0: 0,
            a1: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
        a6: null,
    }).a
    a = c[0]
    a.a0 = sU
    a.a1 = sT
    f = a.a2
    f.a0 = nullArray
    f.a0o = 0
    p = f.a1
    p.i0 = 0
    l = f.a
    j = f.o - 1
    E.a0 = l
    E.a0o = j
    l = new Object()
    a.a5 = l
    n = a.a3
    n.i0 = 0
    n.a1.a0 = nullArray
    n.a1.a0o = 0
    G = C.a3
    h = [
        {
            a0: null,
        },
    ]
    h[0].a0 = n
    h = DB(sR, h[0])
    cheerpOSCreateDirMain(G, A, l, x, u, r, h)
    if ((n.i0 & 255) !== 0) {
        c = a.a5
        p.i0 = 256
        p.a1 = c
        a.a6 = f
        a.a0 = null
        c = f.a0
        j = f.a0o | 0
        ;(c !== nullArray || j !== 0 ? c : W)[c !== nullArray || j !== 0 ? j : X].a0(c !== nullArray || j !== 0 ? c : W, c !== nullArray || j !== 0 ? j : X)
    } else {
        a.i4 = 0
        n.a1.a0 = c
        n.a1.a0o = 0
    }
}
function sU(j, k) {
    j = j[k]
    var c = null,
        h = null,
        f = 0,
        a = null
    a = j.a5
    c = j.a2
    h = c.a1
    h.i0 = 256
    h.a1 = a
    j.a6 = c
    j.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : W)[a !== nullArray || f !== 0 ? f : X].a0(a !== nullArray || f !== 0 ? a : W, a !== nullArray || f !== 0 ? f : X)
}
function sT(a, b) {}
function sR(h) {
    var f = null,
        c = null,
        a = 0
    f = h.a0
    f.i0 = 1
    c = f.a1.a0
    a = f.a1.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a0(c, a)
}
function rW(x, u, r, p) {
    var a = null,
        j = null,
        n = null,
        A = null,
        h = null,
        c = null,
        f = 0,
        l = null
    h = wV({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            i0: 0,
            i1: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    a = h[0]
    a.a0 = rT
    a.a1 = rS
    j = a.a2
    j.a0 = nullArray
    j.a0o = 0
    n = j.a1
    n.i0 = 0
    c = j.a
    f = j.o - 1
    x.a0 = c
    x.a0o = f
    c = a.a3
    c.i0 = 0
    c.a2.a0 = nullArray
    c.a2.a0o = 0
    A = u.a3
    l = [
        {
            a0: null,
        },
    ]
    l[0].a0 = c
    l = DB(hB, l[0])
    cheerpOSLinkMain(A, r, p, l)
    if ((c.i0 & 255) !== 0) {
        f = c.i1 | 0
        n.i0 = 256
        n.i1 = f
        a.a5 = j
        a.a0 = null
        h = j.a0
        f = j.a0o | 0
        ;(h !== nullArray || f !== 0 ? h : W)[h !== nullArray || f !== 0 ? f : X].a0(h !== nullArray || f !== 0 ? h : W, h !== nullArray || f !== 0 ? f : X)
    } else {
        a.i4 = 0
        c.a2.a0 = h
        c.a2.a0o = 0
    }
}
function rT(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    c = h.a3.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function rS(a, b) {}
function hB(f, c) {
    var a = null,
        j = null,
        h = 0
    a = f.a0
    a.i1 = c
    a.i0 = 1
    j = a.a2.a0
    h = a.a2.a0o | 0
    if (j !== nullArray || h !== 0) j[h].a0(j, h)
}
function rQ(x, u, r, p) {
    var a = null,
        j = null,
        n = null,
        A = null,
        h = null,
        c = null,
        f = 0,
        l = null
    h = wU({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            i0: 0,
            i1: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
        }),
        i4: 0,
        a5: null,
    }).a
    a = h[0]
    a.a0 = sO
    a.a1 = sN
    j = a.a2
    j.a0 = nullArray
    j.a0o = 0
    n = j.a1
    n.i0 = 0
    c = j.a
    f = j.o - 1
    x.a0 = c
    x.a0o = f
    c = a.a3
    c.i0 = 0
    c.a2.a0 = nullArray
    c.a2.a0o = 0
    A = u.a3
    l = [
        {
            a0: null,
        },
    ]
    l[0].a0 = c
    l = DB(hB, l[0])
    cheerpOSRenameMain(A, r, p, l)
    if ((c.i0 & 255) !== 0) {
        f = c.i1 | 0
        n.i0 = 256
        n.i1 = f
        a.a5 = j
        a.a0 = null
        h = j.a0
        f = j.a0o | 0
        ;(h !== nullArray || f !== 0 ? h : W)[h !== nullArray || f !== 0 ? f : X].a0(h !== nullArray || f !== 0 ? h : W, h !== nullArray || f !== 0 ? f : X)
    } else {
        a.i4 = 0
        c.a2.a0 = h
        c.a2.a0o = 0
    }
}
function sO(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    c = h.a3.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : W)[a !== nullArray || c !== 0 ? c : X].a0(a !== nullArray || c !== 0 ? a : W, a !== nullArray || c !== 0 ? c : X)
}
function sN(a, b) {}
function sL(a) {
    var c = null
    if ((a | 0) < 0) return null
    if ((ap.length | 0) > (a | 0)) {
        c = ap
        return c[(0 + a) | 0]
    }
    return null
}
function C1(h, f) {
    var a = null,
        c = null
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    c = {
        a0: null,
    }
    sK(c, h, f, a.a1, a.a2)
    c = a.a0
    return c
}
function sK(G, E, C, A, x) {
    var u = null,
        n = null,
        c = null,
        f = null,
        l = null,
        h = null,
        j = null,
        a = 0,
        r = null,
        p = 0
    n = new Ap().a
    c = n[0]
    c.a0 = sH
    c.a1 = sG
    c.a12 = x
    c.a11 = A
    f = c.a2.a[c.a2.o - 1]
    G.a0 = f
    f = "dev"
    a: {
        b: if (E.hasOwnProperty(f)) {
            l = "dev"
            if (C.hasOwnProperty(l)) {
                h = "path"
                if (E.hasOwnProperty(h)) {
                    j = "path"
                    a = C.hasOwnProperty(j)
                    if (!a) break b
                    h = E.dev.this
                    u = C.dev.this
                    l = E.path
                    c.a13 = l
                    j = C.path
                    c.a14 = j
                    c: if ((h.i1 | 0) === 0) {
                        if ((u.i1 | 0) === 0) {
                            f = "/"
                            if (l.startsWith(f)) {
                                r = "/"
                                a = j.startsWith(r)
                                if (!a) break c
                                c.a15 = u
                                f = "r"
                                c.a16 = f
                                r = c.a3
                                aB(r, h, l, f, 0, 0)
                                f = r.a0
                                a = r.a0o | 0
                                if (f !== nullArray || a !== 0) {
                                    if (f[a].a0 !== null) {
                                        c.i9 = 0
                                        c = f[a].a[f[a].o - -1]
                                        c.a0 = n
                                        c.a0o = 0
                                        break a
                                    }
                                }
                                f = f[a].a[f[a].o - -1]
                                a = f.a1.i1 | 0
                                c.i17 = a
                                f = r.a0
                                p = r.a0o | 0
                                if (f !== nullArray || p !== 0) f[p].a1(f, p)
                                f = c.a16
                                j = c.a13
                                if ((a | 0) === -1) {
                                    n = c.a12
                                    c = "File not found"
                                    n(c)
                                    break a
                                }
                                f = c.a15
                                j = c.a14
                                h = "w"
                                c.a18 = h
                                l = c.a4
                                aB(l, f, j, h, 0, 0)
                                f = l.a0
                                a = l.a0o | 0
                                if (f !== nullArray || a !== 0) {
                                    if (f[a].a0 !== null) {
                                        c.i9 = 1
                                        c = f[a].a[f[a].o - -1]
                                        c.a0 = n
                                        c.a0o = 0
                                        break a
                                    }
                                }
                                f = f[a].a[f[a].o - -1]
                                c.i19 = f.a1.i1 | 0
                                f = l.a0
                                a = l.a0o | 0
                                if (f !== nullArray || a !== 0) f[a].a1(f, a)
                                f = c.a18
                                j = c.a14
                                a = sL(c.i17 | 0).fileData.length
                                c.a20 = new Uint8Array(4096)
                                c.i10 = 0
                                c.i21 = a
                                if ((a | 0) !== 0) {
                                    f = c.a6
                                    j = c.a5
                                    while (1) {
                                        h = c.a20
                                        p = c.i17 | 0
                                        a = a >>> 0 < 4096 ? a | 0 : 4096 | 0
                                        c.i22 = a
                                        bq(j, p, h, 0, a)
                                        h = j.a0
                                        a = j.a0o | 0
                                        if (h !== nullArray || a !== 0) {
                                            if (h[a].a0 !== null) {
                                                c.i9 = 2
                                                c = h[a].a[h[a].o - -1]
                                                c.a0 = n
                                                c.a0o = 0
                                                break a
                                            }
                                        }
                                        h = j.a0
                                        a = j.a0o | 0
                                        if (h !== nullArray || a !== 0) h[a].a1(h, a)
                                        aX(f, c.i19 | 0, c.a20, 0, c.i22 | 0)
                                        h = f.a0
                                        a = f.a0o | 0
                                        if (h !== nullArray || a !== 0) {
                                            if (h[a].a0 !== null) {
                                                c.i9 = 3
                                                c = h[a].a[h[a].o - -1]
                                                c.a0 = n
                                                c.a0o = 0
                                                break a
                                            }
                                        }
                                        h = h[a].a[h[a].o - -1]
                                        a = h.a1.i1 | 0
                                        h = f.a0
                                        p = f.a0o | 0
                                        if (h !== nullArray || p !== 0) h[p].a1(h, p)
                                        if ((a | 0) === -1) {
                                            n = c.a12
                                            c = "Write failed"
                                            n(c)
                                            break a
                                        }
                                        a = ((c.i21 | 0) - (c.i22 | 0)) | 0
                                        c.i10 = 0
                                        c.i21 = a
                                        if ((a | 0) !== 0) continue
                                        break
                                    }
                                }
                                f = c.a7
                                aV(f, c.i17 | 0)
                                j = f.a0
                                a = f.a0o | 0
                                if (j !== nullArray || a !== 0) {
                                    if (j[a].a0 !== null) {
                                        c.i9 = 4
                                        c = j[a].a[j[a].o - -1]
                                        c.a0 = n
                                        c.a0o = 0
                                        break a
                                    }
                                    j[a].a1(j, a)
                                }
                                f = c.a8
                                aV(f, c.i19 | 0)
                                j = f.a0
                                a = f.a0o | 0
                                if (j !== nullArray || a !== 0) {
                                    if (j[a].a0 !== null) {
                                        c.i9 = 5
                                        c = j[a].a[j[a].o - -1]
                                        c.a0 = n
                                        c.a0o = 0
                                        break a
                                    }
                                    j[a].a1(j, a)
                                }
                                c.a11(null)
                                break a
                            }
                        }
                    }
                    n = "Bad parameters"
                    x(n)
                    break a
                }
            }
        }
        n = "Bad parameters"
        x(n)
    }
}
function sH(A, B) {
    var x = 0,
        a = 0,
        r = null,
        j = null,
        h = null,
        n = null,
        f = null,
        c = null,
        l = 0,
        p = null,
        u = null
    a = A[B].i9 | 0
    r = A[B].a8
    j = A[B].a7
    h = A[B].a6
    n = A[B].a5
    a: {
        b: {
            c: {
                d: {
                    e: {
                        f: if ((a & 7) < 3) {
                            f = A[B].a4
                            if ((a & 7) !== 0) {
                                if ((a & 7) !== 1) {
                                    c = n.a0
                                    a = n.a0o | 0
                                    c = c[a]
                                    a = 0
                                    break f
                                }
                                c = f.a0
                                a = f.a0o | 0
                                c = c[a]
                            } else {
                                c = A[B].a3.a0
                                a = A[B].a3.a0o | 0
                                c = c[a].a[c[a].o - -1]
                                a = c.a1.i1 | 0
                                A[B].i17 = a
                                c = A[B].a3.a0
                                l = A[B].a3.a0o | 0
                                if (c !== nullArray || l !== 0) c[l].a1(c, l)
                                c = A[B].a16
                                p = A[B].a13
                                if ((a | 0) === -1) {
                                    r = A[B].a12
                                    j = "File not found"
                                    r(j)
                                    break a
                                }
                                c = A[B].a15
                                p = A[B].a14
                                u = "w"
                                A[B].a18 = u
                                aB(f, c, p, u, 0, 0)
                                c = f.a0
                                a = f.a0o | 0
                                if (c !== nullArray || a !== 0) {
                                    if (c[a].a0 !== null) {
                                        A[B].i9 = 1
                                        r = c[a].a[c[a].o - -1]
                                        r.a0 = A
                                        r.a0o = B
                                        break a
                                    }
                                    c = c[a]
                                } else {
                                    c = null
                                }
                            }
                            c = c.a[c.o - -1]
                            A[B].i19 = c.a1.i1 | 0
                            c = f.a0
                            a = f.a0o | 0
                            if (c !== nullArray || a !== 0) c[a].a1(c, a)
                            f = A[B].a18
                            c = A[B].a14
                            a = A[B].i17 | 0
                            f = ap
                            l = f[(0 + a) | 0].fileData.length
                            A[B].a20 = new Uint8Array(4096)
                            a = 1
                        } else {
                            if (a << 29 < -1073741824) {
                                if ((a & 7) === 4) {
                                    h = j.a0
                                    a = j.a0o | 0
                                    if (h === nullArray && a === 0) break d
                                    a = a
                                    j = h
                                    break e
                                }
                                j = r.a0
                                a = r.a0o | 0
                                if (j === nullArray && a === 0) break b
                                a = a
                                r = j
                                break c
                            }
                            f = h.a0
                            a = h.a0o | 0
                            f = f[a]
                            a = -1
                        }
                        f: while (1) {
                            switch (a | 0) {
                                case 0:
                                    f = n.a0
                                    a = n.a0o | 0
                                    if (f !== nullArray || a !== 0) f[a].a1(f, a)
                                    aX(h, A[B].i19 | 0, A[B].a20, 0, A[B].i22 | 0)
                                    f = h.a0
                                    a = h.a0o | 0
                                    if (f !== nullArray || a !== 0) {
                                        if (f[a].a0 !== null) {
                                            A[B].i9 = 3
                                            r = f[a].a[f[a].o - -1]
                                            r.a0 = A
                                            r.a0o = B
                                            break a
                                        }
                                        f = f[a]
                                        a = -1
                                        continue f
                                    }
                                    f = null
                                    a = -1
                                    continue f
                                case 1:
                                    A[B].i10 = 0
                                    A[B].i21 = l
                                    if ((l | 0) !== 0) {
                                        c = A[B].a20
                                        a = A[B].i17 | 0
                                        x = l >>> 0 < 4096 ? l | 0 : 4096 | 0
                                        A[B].i22 = x
                                        bq(n, a, c, 0, x)
                                        c = n.a0
                                        a = n.a0o | 0
                                        if (c !== nullArray || a !== 0) {
                                            if (c[a].a0 !== null) {
                                                A[B].i9 = 2
                                                r = c[a].a[c[a].o - -1]
                                                r.a0 = A
                                                r.a0o = B
                                                break a
                                            }
                                            c = c[a]
                                            a = 0
                                            continue f
                                        }
                                        c = null
                                        a = 0
                                        continue f
                                    }
                                    a = A[B].i17 | 0
                                    h = wC({
                                        a0: null,
                                        a1: null,
                                        a2: {
                                            a0: nullArray,
                                            a0o: 0,
                                        },
                                        a3: null,
                                        a4: (h = {
                                            i0: 0,
                                            a1: {
                                                a0: nullArray,
                                                a0o: 0,
                                            },
                                        }),
                                        i5: 0,
                                    }).a
                                    n = h[0]
                                    n.a0 = by
                                    n.a1 = bx
                                    u = n.a2
                                    u.a0 = nullArray
                                    u.a0o = 0
                                    f = u.a
                                    l = u.o - 1
                                    j.a0 = f
                                    j.a0o = l
                                    f = n.a4
                                    f.i0 = 0
                                    f.a1.a0 = nullArray
                                    f.a1.a0o = 0
                                    c = ap
                                    p = [
                                        {
                                            a0: null,
                                        },
                                    ]
                                    p[0].a0 = f
                                    p = DB(bv, p[0])
                                    cheerpOSClose(c, a, p)
                                    if ((f.i0 & 255) !== 0) {
                                        n.a3 = u
                                        n.a0 = null
                                        h = u.a0
                                        a = u.a0o | 0
                                        ;(h !== nullArray || a !== 0 ? h : W)[h !== nullArray || a !== 0 ? a : X].a0(h !== nullArray || a !== 0 ? h : W, h !== nullArray || a !== 0 ? a : X)
                                    } else {
                                        n.i5 = 0
                                        f.a1.a0 = h
                                        f.a1.a0o = 0
                                    }
                                    h = j.a0
                                    a = j.a0o | 0
                                    if (h === nullArray && a === 0) break d
                                    if (h[a].a0 !== null) {
                                        A[B].i9 = 4
                                        r = h[a].a[h[a].o - -1]
                                        r.a0 = A
                                        r.a0o = B
                                        break a
                                    }
                                    a = a
                                    j = h
                                    break e
                                default:
                                    p = f.a[f.o - -1]
                                    a = p.a1.i1 | 0
                                    p = h.a0
                                    l = h.a0o | 0
                                    if (p !== nullArray || l !== 0) p[l].a1(p, l)
                                    if ((a | 0) === -1) {
                                        r = A[B].a12
                                        j = "Write failed"
                                        r(j)
                                        break a
                                    }
                                    a = A[B].i22 | 0
                                    l = A[B].i21 | 0
                                    l = (l - a) | 0
                                    a = 1
                                    continue f
                            }
                            break
                        }
                    }
                    j[a].a1(j, a)
                }
                a = A[B].i19 | 0
                j = wC({
                    a0: null,
                    a1: null,
                    a2: {
                        a0: nullArray,
                        a0o: 0,
                    },
                    a3: null,
                    a4: (j = {
                        i0: 0,
                        a1: {
                            a0: nullArray,
                            a0o: 0,
                        },
                    }),
                    i5: 0,
                }).a
                h = j[0]
                h.a0 = by
                h.a1 = bx
                p = h.a2
                p.a0 = nullArray
                p.a0o = 0
                n = p.a
                l = p.o - 1
                r.a0 = n
                r.a0o = l
                n = h.a4
                n.i0 = 0
                n.a1.a0 = nullArray
                n.a1.a0o = 0
                f = ap
                c = [
                    {
                        a0: null,
                    },
                ]
                c[0].a0 = n
                c = DB(bv, c[0])
                cheerpOSClose(f, a, c)
                if ((n.i0 & 255) !== 0) {
                    h.a3 = p
                    h.a0 = null
                    j = p.a0
                    a = p.a0o | 0
                    ;(j !== nullArray || a !== 0 ? j : W)[j !== nullArray || a !== 0 ? a : X].a0(j !== nullArray || a !== 0 ? j : W, j !== nullArray || a !== 0 ? a : X)
                } else {
                    h.i5 = 0
                    n.a1.a0 = j
                    n.a1.a0o = 0
                }
                j = r.a0
                a = r.a0o | 0
                if (j === nullArray && a === 0) break b
                if (j[a].a0 !== null) {
                    A[B].i9 = 5
                    r = j[a].a[j[a].o - -1]
                    r.a0 = A
                    r.a0o = B
                    break a
                }
                a = a
                r = j
            }
            r[a].a1(r, a)
        }
        A[B].a11(null)
    }
}
function sG(h, i) {
    h = h[i]
    var a = 0,
        c = null,
        f = null
    a = h.i9 | 0
    if ((a & 7) < 3) {
        if ((a & 7) !== 0) {
            if ((a & 7) === 1) {
                c = h.a4.a0
                a = h.a4.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                c = h.a18
                f = h.a14
            } else {
                c = h.a5.a0
                a = h.a5.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            }
        } else {
            c = h.a3.a0
            a = h.a3.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
            c = h.a16
            f = h.a13
        }
    } else if (a << 29 < -1073741824) {
        if ((a & 7) === 4) {
            c = h.a7.a0
            a = h.a7.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        } else {
            c = h.a8.a0
            a = h.a8.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        }
    } else {
        c = h.a6.a0
        a = h.a6.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function sF(n, l) {
    var c = null,
        h = null,
        a = null,
        j = null,
        f = 0
    a = wg({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (a = {
                i0: 0,
                a1: null,
            }),
        },
        i3: 0,
        a4: null,
    })
    a = a
    a.a0 = oc
    a.a1 = ob
    c = a.a2
    c.a0 = nullArray
    c.a0o = 0
    h = c.a1
    h.i0 = 0
    j = c.a
    f = c.o - 1
    n.a0 = j
    n.a0o = f
    j = CheerpX.System.wrap(
        Object.create(CheerpX.System.prototype, {
            this: {
                value: l,
            },
        })
    )
    h.i0 = 256
    h.a1 = j
    a.a4 = c
    a.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : db)[a !== nullArray || f !== 0 ? f : dc].a0(a !== nullArray || f !== 0 ? a : db, a !== nullArray || f !== 0 ? f : dc)
}
function oc(a, b) {}
function ob(a, b) {}
function gs(a) {}
function Cu() {
    var c = null,
        a = null
    c = new yB()
    c.a1 = null
    c.a2 = null
    c.a3 = null
    c.a4 = null
    c.a5 = null
    c.a6 = null
    c.i7 = 0
    c.a8 = null
    c.a9 = null
    c.a10[0] = null
    c.a11 = null
    c.a12 = null
    c.a13 = null
    c.a14 = null
    c.a15 = null
    c.a16 = null
    c.a17 = null
    c.a18 = null
    c.a19 = null
    c.a20 = null
    a = c.a23
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = c.a24
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    c.a25 = null
    c.a0 = ev
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = c
    a = DB(gq, a[0])
    c.a2 = a
    return c
}
function Ct(f, c) {
    var a = null
    a = {
        a0: null,
    }
    ms(a, f, c)
}
function Cs(a) {
    return a
}
function Cr() {
    var c = null,
        h = null,
        f1 = null,
        a = null
    c = new yB()
    c.a1 = null
    c.a2 = null
    c.a3 = null
    c.a4 = null
    c.a5 = null
    c.a6 = null
    c.i7 = 0
    c.a8 = null
    c.a9 = null
    c.a10[0] = null
    c.a11 = null
    c.a12 = null
    c.a13 = null
    c.a14 = null
    c.a15 = null
    c.a16 = null
    c.a17 = null
    c.a18 = null
    c.a19 = null
    c.a20 = null
    a = c.a23
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = c.a24
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    c.a25 = null
    c.a0 = ev
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = c
    a = DB(gq, a[0])
    c.a2 = a
    a = new Object()
    h = new Promise(function (f, r) {
        a.fullfill = f
        a.reject = r
    })
    f1 = a.fullfill
    dw(c, f1, a.reject)
    return h
}
function Cq(h) {
    var f = null,
        c = null,
        a = 0
    h.a0 = de
    f = h.a24
    c = f.a0
    a = f.a0o | 0
    if (c !== nullArray || a !== 0) {
        f.a1 = c
        f.a1o = a
    }
    f = h.a23
    c = f.a0
    a = f.a0o | 0
    if (c !== nullArray || a !== 0) {
        f.a1 = c
        f.a1o = a
    }
}
function Cp(a) {
    fR(a)
}
function gq(c, a) {
    var f = null
    f = c.a0
    tA(f, a.data)
}
function tA(p, n) {
    var r = null,
        a = null,
        f = 0,
        h = 0,
        c = null,
        l = 0,
        j = 0
    if ((n.type | 0) === 3) {
        a = HEAP8.buffer
        r = new DataView(a)
        f = n.vgaDevice
        a = HEAP8
        h = n.vgaRamOffset
        c = new Bm()
        jn(c, a, h, {
            d: r,
            o: f,
        })
        bA = c
        a = "keydown"
        c = [
            {
                a0: null,
            },
        ]
        c[0].a0 = p
        c = DB(th, c[0])
        document.addEventListener(a, c)
        a = "keyup"
        c = [
            {
                a0: null,
            },
        ]
        c[0].a0 = p
        c = DB(te, c[0])
        document.addEventListener(a, c)
    } else if ((n.type | 0) === 4) n5(n.value)
    else if ((n.type | 0) === 5) {
        f = n.value
        a = bA
        a.i6 = f
        gk(a)
    } else if ((n.type | 0) === 6) {
        f = n.value
        a = bA
        a.i7 = f
        gk(a)
    } else {
        a = {
            a0: null,
        }
        if ((n.type | 0) === 10) {
            f = n.devId
            h = n.start
            l = n.len
            j = n.ioTransaction
            tc(a, p, f, h, l, j, n.value)
        } else if ((n.type | 0) === 11) {
            f = n.devId
            h = n.start
            l = n.len
            j = n.ioTransaction
            tb(a, p, f, h, l, j, n.value)
        } else d9(p, n)
    }
}
function th(c, a) {
    var l = null,
        j = null,
        h = null,
        f = 0
    l = c.a0
    a: {
        if (a.ctrlKey) {
            if (a.shiftKey) break a
        }
        a.preventDefault()
        j = {
            type: 92,
            value: +a.keyCode,
        }
        h = HEAP32
        f = l.i7 | 0
        h[(0 + f) | 0] = -2
        l.a6.postMessage(j)
    }
}
function te(c, a) {
    var l = null,
        j = null,
        h = null,
        f = 0
    l = c.a0
    a: {
        if (a.ctrlKey) {
            if (a.shiftKey) break a
        }
        a.preventDefault()
        j = {
            type: 93,
            value: +a.keyCode,
        }
        h = HEAP32
        f = l.i7 | 0
        h[(0 + f) | 0] = -2
        l.a6.postMessage(j)
    }
}
function tc(C, A, x, u, r, p, n) {
    var l = null,
        f = null,
        a = null,
        h = null,
        c = 0,
        j = 0
    l = wu({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: (l = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
        i6: 0,
    }).a
    f = l[0]
    f.a0 = mX
    f.a1 = mW
    f.i6 = p
    f.a5 = A
    a = f.a2.a[f.a2.o - 1]
    C.a0 = a
    h = N.a0
    c = N.a0o | 0
    a = h[c]
    if ((a.i2 | 0) !== (x | 0)) {
        j = 0
        while (1) {
            j = (j + 1) | 0
            a = h[(c + j) | 0]
            if ((a.i2 | 0) !== (x | 0)) continue
            break
        }
    }
    h = f.a3
    a.a0.a6(h, a, A, u, r, HEAP8, n)
    a = h.a0
    c = h.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = l
                f.a0o = 0
                break a
            }
        }
        a = h.a0
        c = h.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a5
        f = {
            type: 12,
            ioTransaction: f.i6 | 0,
        }
        l = HEAP32
        c = a.i7 | 0
        l[(0 + c) | 0] = -2
        a.a6.postMessage(f)
    }
}
function tb(C, A, x, u, r, p, n) {
    var l = null,
        f = null,
        a = null,
        h = null,
        c = 0,
        j = 0
    l = wv({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: (l = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
        i6: 0,
    }).a
    f = l[0]
    f.a0 = m1
    f.a1 = m0
    f.i6 = p
    f.a5 = A
    a = f.a2.a[f.a2.o - 1]
    C.a0 = a
    h = N.a0
    c = N.a0o | 0
    a = h[c]
    if ((a.i2 | 0) !== (x | 0)) {
        j = 0
        while (1) {
            j = (j + 1) | 0
            a = h[(c + j) | 0]
            if ((a.i2 | 0) !== (x | 0)) continue
            break
        }
    }
    h = f.a3
    a.a0.a7(h, a, A, u, r, HEAP8, n)
    a = h.a0
    c = h.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = l
                f.a0o = 0
                break a
            }
        }
        a = h.a0
        c = h.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a5
        f = {
            type: 12,
            ioTransaction: f.i6 | 0,
        }
        l = HEAP32
        c = a.i7 | 0
        l[(0 + c) | 0] = -2
        a.a6.postMessage(f)
    }
}
function d9(x, u) {
    var E = null,
        C = null,
        G = null,
        a = null,
        c = null,
        j = 0,
        n = 0,
        h = null,
        l = null,
        f = null,
        p = 0,
        A = 0,
        r = 0
    a = {
        a0: null,
    }
    a: if ((u.type | 0) !== 0) {
        if ((u.type | 0) === 1) {
            c = "cxcore-no-return-call.js"
            ii(a, x, c, 40)
        } else if ((u.type | 0) === 40) {
            a = "CheerpX initialization failed: "
            a = a.concat(u.value)
            x.a4(a)
            x.a4 = null
        } else {
            a = [null]
            if ((u.type | 0) === 47) {
                j = u.start
                n = u.len
                h = HEAP8.subarray(+(j >>> 0), +((n + j) >>> 0))
                j = u.replyType
                a[0] = h
                l = WebAssembly.compile(h)
                c = [
                    {
                        a0: null,
                        i1: 0,
                        a2: null,
                    },
                ]
                c[0].a0 = x
                c[0].i1 = j
                c[0].a2 = h
                c = DB(vc, c[0])
                f = [
                    {
                        a0: null,
                        a1: null,
                    },
                ]
                f[0].a0 = x
                f[0].a1 = h
                f = DB(u$, f[0])
                l.then(c, f)
                a = a[0]
            } else if ((u.type | 0) === 14) {
                c = HEAP32
                j = u.intWrapper
                a[0] = {
                    d: c,
                    o: j >>> 2,
                }
                f = [null]
                h = u.statName
                f[0] = h
                l = [0]
                n = u.statType
                l[0] = n
                E = x.a23
                C = E.a1
                p = E.a1o | 0
                G = E.a2.a0
                A = E.a2.a0o | 0
                if (p < A) {
                    ig(C[p], x.a10[0], h, c, j >>> 2, n)
                    E.a1 = C
                    E.a1o = (p + 1) | 0
                } else nA(E, x.a10, 0, f, 0, a, 0, l, 0)
            } else if ((u.type | 0) === 25) {
                c = {
                    i0: 0,
                    i1: 0,
                    a2: null,
                    i3: 0,
                }
                j = u.ctxType
                n = u.value
                gd(c, j, n, u.dbgState)
                a[0] = c
                nw(x.a24, a, 0)
                dL(x)
            } else if ((u.type | 0) === 46) {
                a = {
                    i0: 0,
                    i1: 0,
                    a2: null,
                    i3: 0,
                }
                j = u.ctxType
                n = u.value
                gd(a, j, n, u.dbgState)
                a = {
                    a0: nullArray,
                    a0o: 0,
                }
                c = x.a24
                f = c.a0
                j = c.a0o | 0
                h = c.a1
                n = c.a1o | 0
                l = {
                    a0: nullArray,
                    a0o: 0,
                }
                l.a0 = f
                l.a0o = j
                f = {
                    a0: nullArray,
                    a0o: 0,
                }
                f.a0 = h
                f.a0o = n
                nu(a, l, f, u)
                f = c.a1
                j = c.a1o | 0
                h = a.a0
                n = a.a0o | 0
                if (h !== f || n !== j) {
                    l = {
                        a0: nullArray,
                        a0o: 0,
                    }
                    l.a0 = h
                    l.a0o = n
                    h = {
                        a0: nullArray,
                        a0o: 0,
                    }
                    h.a0 = f
                    h.a0o = j
                    nt(a, c, l, h)
                    dL(x)
                }
            } else if ((u.type | 0) === 26) {
                j = u.ctxType
                n = u.value
                a = x.a24
                c = a.a0
                p = a.a0o | 0
                f = a.a1
                A = a.a1o | 0
                if (c !== f || p !== A) {
                    r = 0
                    while (1) {
                        a = c[(p + r) | 0]
                        if ((a.i0 | 0) === (j | 0)) {
                            if ((a.i1 | 0) === (n | 0)) {
                                a.i3 = u.dbgState
                                bU(x, x.a25)
                                break a
                            }
                        }
                        r = (r + 1) | 0
                        if (c !== f || ((p + r) | 0) !== A) continue
                        break
                    }
                }
            } else if ((u.type | 0) === 32) {
                a = x.a19
                c = u.text
                a.textContent = c
            } else if ((u.type | 0) === 78) {
                a = String()
                c = u.traces
                if ((c.length | 0) > 0) {
                    j = 0
                    while (1) {
                        a = a.concat(new Number(+(c[(0 + j) | 0] >>> 0)).toString(16))
                        a = a.concat("\n")
                        j = (j + 1) | 0
                        if ((j | 0) < (c.length | 0)) continue
                        break
                    }
                }
                a = a.trim()
                x.a20.value = a
            } else if ((u.type | 0) === 42) {
                a = u.path
                u.value
                c = "a"
                h = document.createElement(c)
                c = "href"
                h.setAttribute(c, a)
                c = "download"
                f = u.value
                h.setAttribute(c, f)
                h.click()
                URL.revokeObjectURL(a)
            } else debugger
        }
    } else {
        c = u.buffer
        HEAP8 = new Uint8Array(c)
        c = u.buffer
        HEAP16 = new Uint16Array(c)
        c = u.buffer
        HEAP32 = new Int32Array(c)
        x.i7 = u.asyncPtrOffset >>> 2
        if (+u.startRealTime >= 0) {
            a = {
                a0: null,
                a1: null,
            }
            a.a0 = x
            a.a1 = u
            c = new yv().a
            f = c[0]
            f.a0 = vh
            f.a1 = vg
            f.a7 = x
            f.a6 = a
            h = cu()
            h = h.concat("workerclock.js")
            f.a8 = h
            h = fetch(h)
            f.a9 = h
            l = f.a3
            l.a0 = h
            f.i5 = 0
            f = [
                {
                    a0: null,
                    a1: {
                        a0: nullArray,
                        a0o: 0,
                    },
                },
            ]
            f[0].a0 = l
            f[0].a1.a0 = c
            f[0].a1.a0o = 0
            l = DB(io, f[0])
            h.then(l)
        } else ij(a, x)
    }
}
function vh(l, m) {
    var r = null,
        p = null,
        n = 0,
        f = null,
        a = null,
        c = null,
        h = null,
        j = null
    f = l[m].a4
    if (l[m].i5 | 0) {
        a = l[m].a7
        c = l[m].a6
        f = new Blob(new Array(f.a1))
        h = URL.createObjectURL(f)
        f = new Worker(h)
        h = new MessageChannel()
        j = h.port1
        r = {
            type: 86,
            value: j,
        }
        p = a.a6
        p.postMessage(r, new Array(j))
        j = [
            {
                a0: null,
            },
        ]
        j[0].a0 = a
        a = DB(m5, j[0])
        f.onmessage = a
        a = h.port2
        h = c.a1.buffer
        n = c.a1.asyncPtrOffset
        c = {
            kind: 1,
            buffer: h,
            basePtr: n,
            startRealTime: +c.a1.startRealTime,
            port: a,
        }
        f.postMessage(c, new Array(a))
    } else {
        a = l[m].a8
        c = l[m].a3.a1
        a = c.text()
        l[m].a10 = a
        f.a0 = a
        l[m].i5 = 1
        c = [
            {
                a0: null,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            },
        ]
        c[0].a0 = f
        c[0].a1.a0 = l
        c[0].a1.a0o = m
        c = DB(f0, c[0])
        a.then(c)
    }
}
function vg(a, b) {
    a = a[b]
    var c = null
    if (!(a.i5 | 0)) c = a.a8
}
function cu() {
    var l = 0,
        h = -0,
        j = 0,
        f = null,
        a = null,
        c = 0
    f = new Array()
    try {
        throw new Error()
    } catch (e) {
        f.push(e.stack)
    }
    f = f[0]
    a = "/cx_esm.js"
    l = f.indexOf(a)
    a = "http:"
    h = +(l | 0)
    c = f.lastIndexOf(a, h)
    a = "https:"
    j = f.lastIndexOf(a, h)
    c = (c | 0) > (j | 0) ? c | 0 : j | 0
    if ((c | 0) < 0) {
        a = "chrome-extension:"
        c = f.lastIndexOf(a, h)
    }
    return f.substring(+(c | 0), +((l + 1) | 0))
}
function io(c, a) {
    var h = null,
        f = 0
    c.a0.a1 = a
    h = c.a1.a0
    f = c.a1.a0o | 0
    h[f].a0(h, f)
}
function ij(n, l) {
    var f = null,
        a = null,
        j = null,
        c = null,
        h = 0
    f = ww({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        a5: null,
    }).a
    a = f[0]
    a.a0 = m9
    a.a1 = m8
    a.a5 = l
    j = a.a2.a[a.a2.o - 1]
    n.a0 = j
    j = a.a3
    l.a0.a1(j, l)
    c = j.a0
    h = j.a0o | 0
    a: {
        if (c !== nullArray || h !== 0) {
            if (c[h].a0 !== null) {
                a.i4 = 0
                a = c[h].a[c[h].o - -1]
                a.a0 = f
                a.a0o = 0
                break a
            }
        }
        c = c[h].a[c[h].o - -1]
        c = c.a1.a1
        f = j.a0
        h = j.a0o | 0
        if (f !== nullArray || h !== 0) f[h].a1(f, h)
        f = a.a5
        if (c !== null) {
            f.a3(c)
            f.a3 = null
        } else {
            f = f.a4
            a = "CheerpX initialization failed"
            f(a)
        }
    }
}
function ii(n, l, j, h) {
    var p = null,
        a = null,
        c = null,
        f = null
    p = new zd().a
    a = p[0]
    a.a0 = ne
    a.a1 = nd
    a.i8 = h
    a.a7 = j
    a.a6 = l
    c = a.a2.a[a.a2.o - 1]
    n.a0 = c
    c = cu()
    a.a9 = c
    c = c.concat(j)
    c = c
    a.a10 = c
    c = fetch(c)
    a.a11 = c
    f = a.a3
    f.a0 = c
    a.i5 = 0
    a = [
        {
            a0: null,
            a1: {
                a0: nullArray,
                a0o: 0,
            },
        },
    ]
    a[0].a0 = f
    a[0].a1.a0 = p
    a[0].a1.a0o = 0
    f = DB(io, a[0])
    c.then(f)
}
function vc(j, h) {
    var f = null,
        l = null,
        c = null,
        a = 0
    f = j.a0
    a = j.i1 | 0
    l = {
        type: a,
        wasmModule: h,
    }
    c = HEAP32
    if ((a | 0) === 48) {
        a = f.i7 | 0
        c[(0 + ((a + 5) | 0)) | 0] = 2
    }
    a = f.i7 | 0
    c[(0 + a) | 0] = -2
    f.a6.postMessage(l)
}
function u$(h, f) {
    var c = null,
        j = null,
        a = null
    c = h.a0
    console.log(f)
    a = c.a5
    if (a !== null) a(f)
    a = new Blob(new Array(new Uint8Array(h.a1)))
    j = URL.createObjectURL(a)
    d9(c, {
        type: 42,
        path: j,
        value: "fail.wasm",
    })
}
function ig(l, j, h, f, g, c) {
    var p = null,
        n = null,
        a = null
    l.a0 = h
    l.a1 = f
    l.a1o = g
    l.i2 = 0
    l.i3 = c
    l.a4 = null
    a = "p"
    p = document.createElement(a)
    a = "span"
    n = document.createElement(a)
    a = l.a0
    a = a.concat(": ")
    n.textContent = a
    p.appendChild(n)
    a = "span"
    l.a4 = document.createElement(a)
    p.appendChild(l.a4)
    j.appendChild(p)
}
function nA(x, u, v, r, s, p, q, n, o) {
    var f = null,
        l = 0,
        A = 0,
        h = null,
        j = 0,
        c = null,
        a = 0
    f = {
        a0: null,
        a1: nullArray,
        a1o: 0,
        a2: nullArray,
        a2o: 0,
        a3: {
            a0: nullArray,
            a0o: 0,
            a1: (f = {
                a0: null,
            }),
        },
    }
    h = x.a1
    j = x.a1o | 0
    c = x.a0
    a = x.a0o | 0
    a = intMultiply_1(a, 20)
    j = (((intMultiply_1(j, 20) - a) | 0) / 20) | 0
    l = (j + 1) | 0
    if (l >>> 0 > 214748364) ab()
    c = x.a2
    h = c.a0
    A = c.a0o | 0
    a = (((intMultiply_1(A, 20) - a) | 0) / 20) | 0
    if (a >>> 0 < 107374182) {
        a <<= 1
        a = a >>> 0 > l >>> 0 ? a | 0 : l | 0
    } else {
        a = 214748364
    }
    h = f.a3
    h.a1.a0 = c
    if ((a | 0) !== 0) c = Cn(((intMultiply_1(a, 20) | 0) / 20) | 0)
    else {
        c = nullArray
    }
    f.a0 = c[0]
    f.a1 = c
    f.a1o = (0 + j) | 0
    h.a0 = c
    h.a0o = (0 + a) | 0
    h = p[q]
    ig(c[j], u[v], r[s], h.d, h.o, n[o] | 0)
    f.a2 = c
    f.a2o = (((0 + j) | 0) + 1) | 0
    nj(x, f)
}
function gd(h, f, c, a) {
    var j = null
    h.i0 = f
    h.i1 = c
    h.a2 = null
    h.i3 = a
    j = z((f | 0) !== 0 ? iy : iz, (f | 0) !== 0 ? 0 : 0)
    h.a2 = j
    h.a2 = j.concat(h.i1 | 0)
}
function nw(p, n, o) {
    var r = null,
        l = 0,
        h = null,
        a = 0,
        f = null,
        c = null,
        j = 0
    h = p.a1
    a = p.a1o | 0
    f = p.a2
    c = f.a0
    j = f.a0o | 0
    if (h === c && a === j) {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        r = p.a0
        j = p.a0o | 0
        a = (intMultiply_1(a, 4) - intMultiply_1(j, 4)) | 0
        l = a >> 2
        j = (l + 1) | 0
        if (j >>> 0 > 1073741823) ab()
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > j >>> 0 ? a | 0 : j | 0
        } else {
            a = 1073741823
        }
        h = c.a3
        h.a1.a0 = f
        if ((a | 0) !== 0) f = DD([], 0, ((a << 2) / 4) | 0, null)
        else {
            f = nullArray
        }
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + l) | 0
        h.a0 = f
        h.a0o = (0 + a) | 0
        f[l] = n[o]
        c.a2 = f
        c.a2o = (((0 + l) | 0) + 1) | 0
        nm(p, c)
    } else {
        h[a] = n[o]
        p.a1 = h
        p.a1o = (a + 1) | 0
    }
}
function dL(n) {
    var u = null,
        r = 0,
        A = null,
        x = 0,
        f = null,
        a = null,
        c = null,
        p = null,
        l = null,
        j = null,
        h = 0
    a = n.a13
    if (a !== null) {
        a = a.firstChild
        if (a !== null)
            while (1) {
                if (a !== null) {
                    n.a13.removeChild(a)
                    a = n.a13.firstChild
                    if (a !== null) continue
                }
                break
            }
        a = n.a13
        c = "<none>"
        p = ""
        l = "option"
        j = document.createElement(l)
        j.textContent = c
        j.value = p
        a.appendChild(j)
        a = n.a24
        u = a.a0
        r = a.a0o | 0
        A = a.a1
        x = a.a1o | 0
        if (u !== A || r !== x) {
            h = 0
            while (1) {
                j = u[(r + h) | 0]
                f = j.a2
                c = "option"
                l = document.createElement(c)
                l.textContent = f
                l.value = f
                n.a13.appendChild(l)
                a = "cxLastCtx"
                c = localStorage.getItem(a)
                p = j.a2
                if (c === p) {
                    l.selected = 1
                    bU(n, j)
                }
                h = (h + 1) | 0
                if (u !== A || ((r + h) | 0) !== x) {
                    c = f
                    continue
                }
                break
            }
        }
    }
}
function nu(A, x, u, r) {
    var l = null,
        j = 0,
        h = null,
        f = 0,
        a = 0,
        n = null,
        c = 0,
        p = 0
    l = x.a0
    j = x.a0o | 0
    h = u.a0
    f = u.a0o | 0
    if (l !== h || j !== f) {
        a = 0
        while (1) {
            n = l[(j + a) | 0]
            c = n.i0 | 0
            if ((c | 0) === (r.ctxType | 0)) {
                c = n.i1 | 0
                if ((c | 0) === (r.value | 0)) {
                    x.a0 = l
                    x.a0o = (j + a) | 0
                    if (l === h && ((j + a) | 0) === f) {
                        A.a0 = h
                        A.a0o = f
                        return
                    }
                    c = (a + 1) | 0
                    if (l !== h || ((j + c) | 0) !== f)
                        while (1) {
                            n = l[(j + c) | 0]
                            p = n.i0 | 0
                            a: {
                                if ((p | 0) === (r.ctxType | 0)) {
                                    p = n.i1 | 0
                                    if ((p | 0) === (r.value | 0)) break a
                                }
                                l[(j + a) | 0] = l[(j + c) | 0]
                                a = (a + 1) | 0
                            }
                            c = (c + 1) | 0
                            if (l !== h || ((j + c) | 0) !== f) continue
                            break
                        }
                    x.a0 = l
                    x.a0o = (j + a) | 0
                    A.a0 = l
                    A.a0o = (j + a) | 0
                    return
                }
            }
            a = (a + 1) | 0
            if (l !== h || ((j + a) | 0) !== f) continue
            break
        }
    }
    x.a0 = h
    x.a0o = f
    A.a0 = h
    A.a0o = f
}
function nt(H, G, E, C) {
    var f = null,
        c = 0,
        p = 0,
        A = null,
        x = null,
        l = 0,
        a = 0,
        j = 0,
        n = 0,
        h = 0,
        r = 0,
        u = 0
    f = G.a0
    c = G.a0o | 0
    x = E.a0
    l = E.a0o | 0
    a = intMultiply_1(l, 4)
    p = (a - intMultiply_1(c, 4)) >> 2
    A = C.a0
    j = C.a0o | 0
    if (x !== A || l !== j) {
        n = (intMultiply_1(j, 4) - a) | 0
        h = (p + (n >> 2)) | 0
        x = G.a1
        l = G.a1o | 0
        l = (intMultiply_1(l, 4) - intMultiply_1((c + h) | 0, 4)) | 0
        if (l >>> 0 >= 4) {
            a = l >>> 2
            j = (p + a) | 0
            if ((n | 0) < 0) {
                a = (h + a) | 0
                r = (l - 4) | 0
                n = ((r >>> 2) + 1) & 3
                if ((n | 0) !== 0) {
                    h = 0
                    while (1) {
                        a = (a - 1) | 0
                        j = (j - 1) | 0
                        f[(c + j) | 0] = f[(c + a) | 0]
                        h = (h + 1) | 0
                        if ((h | 0) !== (n | 0)) continue
                        break
                    }
                }
                if (r >>> 0 >= 12)
                    while (1) {
                        f[(((c + j) | 0) + -1) | 0] = f[(((c + a) | 0) + -1) | 0]
                        f[(((c + j) | 0) + -2) | 0] = f[(((c + a) | 0) + -2) | 0]
                        f[(((c + j) | 0) + -3) | 0] = f[(((c + a) | 0) + -3) | 0]
                        a = (a - 4) | 0
                        j = (j - 4) | 0
                        f[(c + j) | 0] = f[(c + a) | 0]
                        if (f !== f || ((c + p) | 0) !== ((c + j) | 0)) continue
                        break
                    }
            } else {
                r = (l - 4) | 0
                n = ((r >>> 2) + 1) & 7
                if ((n | 0) !== 0) {
                    a = p
                    u = 0
                    while (1) {
                        f[(c + a) | 0] = f[(c + h) | 0]
                        u = (u + 1) | 0
                        a = (a + 1) | 0
                        h = (h + 1) | 0
                        if ((u | 0) !== (n | 0)) continue
                        break
                    }
                } else {
                    a = p
                }
                if (r >>> 0 >= 28)
                    while (1) {
                        f[(c + a) | 0] = f[(c + h) | 0]
                        f[(((c + a) | 0) + 1) | 0] = f[(((c + h) | 0) + 1) | 0]
                        f[(((c + a) | 0) + 2) | 0] = f[(((c + h) | 0) + 2) | 0]
                        f[(((c + a) | 0) + 3) | 0] = f[(((c + h) | 0) + 3) | 0]
                        f[(((c + a) | 0) + 4) | 0] = f[(((c + h) | 0) + 4) | 0]
                        f[(((c + a) | 0) + 5) | 0] = f[(((c + h) | 0) + 5) | 0]
                        f[(((c + a) | 0) + 6) | 0] = f[(((c + h) | 0) + 6) | 0]
                        f[(((c + a) | 0) + 7) | 0] = f[(((c + h) | 0) + 7) | 0]
                        a = (a + 8) | 0
                        if (f !== f || ((c + j) | 0) !== ((c + a) | 0)) {
                            h = (h + 8) | 0
                            continue
                        }
                        break
                    }
            }
        }
        G.a1 = f
        G.a1o = (((c + p) | 0) + (l >> 2)) | 0
    }
    H.a0 = f
    H.a0o = (c + p) | 0
}
function bU(f, c) {
    var j = 0,
        h = null,
        a = null
    f.a25 = c
    f.a16.disabled = 1
    f.a17.disabled = 1
    f.a18.disabled = 1
    h = f.a19
    a = ""
    h.textContent = a
    if (c !== null) {
        f.a20.disabled = 0
        f.a21.disabled = 0
        h = "cxLastCtx"
        a = c.a2
        localStorage.setItem(h, a)
        j = c.i3 | 0
        if (j >>> 0 < 2) {
            h = f.a14
            if ((j | 0) !== 0) {
                a = "Detach"
                h.textContent = a
                f.a14.disabled = 0
                f.a16.disabled = 0
                f.a17.disabled = 0
                f.a18.disabled = 0
            } else {
                a = "Attach"
                h.textContent = a
                f.a14.disabled = 0
            }
        } else if ((j | 0) === 2) {
            h = f.a14
            a = "Stepping"
            h.textContent = a
            f.a14.disabled = 1
        }
    } else {
        h = f.a14
        a = "Invalid"
        h.textContent = a
        f.a14.disabled = 1
        f.a20.disabled = 1
        f.a21.disabled = 1
    }
}
function nm(C, A) {
    var n = 0,
        r = 0,
        l = null,
        h = null,
        c = 0,
        j = 0,
        a = 0,
        f = 0,
        u = 0,
        p = 0,
        x = 0
    l = C.a0
    n = C.a0o | 0
    h = C.a1
    c = C.a1o | 0
    c = (intMultiply_1(c, 4) - intMultiply_1(n, 4)) | 0
    h = A.a1
    j = A.a1o | 0
    r = -(c >> 2) | 0
    if (c >>> 0 >= 4) {
        a = c >>> 2
        f = (r + a) | 0
        if (n < ((j + r) | 0)) {
            u = (c - 4) | 0
            c = ((u >>> 2) + 1) & 3
            if ((c | 0) !== 0) {
                p = 0
                while (1) {
                    a = (a - 1) | 0
                    f = (f - 1) | 0
                    h[(j + f) | 0] = l[(n + a) | 0]
                    p = (p + 1) | 0
                    if ((p | 0) !== (c | 0)) continue
                    break
                }
            }
            if (u >>> 0 >= 12)
                while (1) {
                    h[(((j + f) | 0) + -1) | 0] = l[(((n + a) | 0) + -1) | 0]
                    h[(((j + f) | 0) + -2) | 0] = l[(((n + a) | 0) + -2) | 0]
                    h[(((j + f) | 0) + -3) | 0] = l[(((n + a) | 0) + -3) | 0]
                    a = (a - 4) | 0
                    f = (f - 4) | 0
                    h[(j + f) | 0] = l[(n + a) | 0]
                    if (h !== h || ((j + r) | 0) !== ((j + f) | 0)) continue
                    break
                }
        } else {
            u = (c - 4) | 0
            p = ((u >>> 2) + 1) & 7
            if ((p | 0) !== 0) {
                a = r
                x = 0
                c = 0
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0]
                    x = (x + 1) | 0
                    a = (a + 1) | 0
                    c = (c + 1) | 0
                    if ((x | 0) !== (p | 0)) continue
                    break
                }
            } else {
                a = r
                c = 0
            }
            if (u >>> 0 >= 28)
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0]
                    h[(((j + a) | 0) + 1) | 0] = l[(((n + c) | 0) + 1) | 0]
                    h[(((j + a) | 0) + 2) | 0] = l[(((n + c) | 0) + 2) | 0]
                    h[(((j + a) | 0) + 3) | 0] = l[(((n + c) | 0) + 3) | 0]
                    h[(((j + a) | 0) + 4) | 0] = l[(((n + c) | 0) + 4) | 0]
                    h[(((j + a) | 0) + 5) | 0] = l[(((n + c) | 0) + 5) | 0]
                    h[(((j + a) | 0) + 6) | 0] = l[(((n + c) | 0) + 6) | 0]
                    h[(((j + a) | 0) + 7) | 0] = l[(((n + c) | 0) + 7) | 0]
                    a = (a + 8) | 0
                    if (h !== h || ((j + f) | 0) !== ((j + a) | 0)) {
                        c = (c + 8) | 0
                        continue
                    }
                    break
                }
        }
    }
    A.a1 = h
    A.a1o = (j + ((r << 2) >> 2)) | 0
    l = C.a0
    c = C.a0o | 0
    C.a0 = h
    C.a0o = (j + ((r << 2) >> 2)) | 0
    A.a1 = l
    A.a1o = c
    l = C.a1
    c = C.a1o | 0
    h = A.a2
    j = A.a2o | 0
    C.a1 = h
    C.a1o = j
    A.a2 = l
    A.a2o = c
    l = C.a2.a0
    c = C.a2.a0o | 0
    h = A.a3.a0
    j = A.a3.a0o | 0
    C.a2.a0 = h
    C.a2.a0o = j
    A.a3.a0 = l
    A.a3.a0o = c
    l = A.a1
    c = A.a1o | 0
    A.a0 = l[c]
}
function nj(A, x) {
    var f = 0,
        p = null,
        u = 0,
        C = 0,
        c = null,
        l = null,
        a = 0,
        h = 0,
        r = 0,
        n = 0,
        j = 0
    c = A.a0
    f = A.a0o | 0
    l = A.a1
    a = A.a1o | 0
    a = (intMultiply_1(a, 20) - intMultiply_1(f, 20)) | 0
    p = x.a1
    h = x.a1o | 0
    u = ((a | 0) / -20) | 0
    if (a >>> 0 >= 20) {
        a = ((a >>> 0) / 20) | 0
        r = (u + a) | 0
        if (f < ((h + u) | 0))
            while (1) {
                n = (a - 1) | 0
                j = (r - 1) | 0
                p[(h + j) | 0].a0 = c[(f + n) | 0].a0
                l = c[(((f + a) | 0) + -1) | 0].a1
                C = c[(((f + a) | 0) + -1) | 0].a1o | 0
                p[(((h + r) | 0) + -1) | 0].a1 = l
                p[(((h + r) | 0) + -1) | 0].a1o = C
                p[(((h + r) | 0) + -1) | 0].i2 = c[(((f + a) | 0) + -1) | 0].i2 | 0
                p[(((h + r) | 0) + -1) | 0].i3 = c[(((f + a) | 0) + -1) | 0].i3 | 0
                p[(((h + r) | 0) + -1) | 0].a4 = c[(((f + a) | 0) + -1) | 0].a4
                if (p !== p || ((h + u) | 0) !== ((h + j) | 0)) {
                    a = n
                    r = j
                    continue
                }
                break
            }
        else {
            if (((a & 1) | 0) !== 0) {
                p[(h + u) | 0].a0 = c[f].a0
                l = c[f].a1
                n = c[f].a1o | 0
                p[(h + u) | 0].a1 = l
                p[(h + u) | 0].a1o = n
                p[(h + u) | 0].i2 = c[f].i2 | 0
                p[(h + u) | 0].i3 = c[f].i3 | 0
                p[(h + u) | 0].a4 = c[f].a4
                j = (u + 1) | 0
                n = 1
            } else {
                j = u
                n = 0
            }
            if ((((a + 1073741823) & 1073741823) | 0) !== 0)
                while (1) {
                    p[(h + j) | 0].a0 = c[(f + n) | 0].a0
                    l = c[(f + n) | 0].a1
                    a = c[(f + n) | 0].a1o | 0
                    p[(h + j) | 0].a1 = l
                    p[(h + j) | 0].a1o = a
                    p[(h + j) | 0].i2 = c[(f + n) | 0].i2 | 0
                    p[(h + j) | 0].i3 = c[(f + n) | 0].i3 | 0
                    p[(h + j) | 0].a4 = c[(f + n) | 0].a4
                    p[(((h + j) | 0) + 1) | 0].a0 = c[(((f + n) | 0) + 1) | 0].a0
                    l = c[(((f + n) | 0) + 1) | 0].a1
                    a = c[(((f + n) | 0) + 1) | 0].a1o | 0
                    p[(((h + j) | 0) + 1) | 0].a1 = l
                    p[(((h + j) | 0) + 1) | 0].a1o = a
                    p[(((h + j) | 0) + 1) | 0].i2 = c[(((f + n) | 0) + 1) | 0].i2 | 0
                    p[(((h + j) | 0) + 1) | 0].i3 = c[(((f + n) | 0) + 1) | 0].i3 | 0
                    p[(((h + j) | 0) + 1) | 0].a4 = c[(((f + n) | 0) + 1) | 0].a4
                    j = (j + 2) | 0
                    if (p !== p || ((h + r) | 0) !== ((h + j) | 0)) {
                        n = (n + 2) | 0
                        continue
                    }
                    break
                }
        }
    }
    x.a1 = p
    x.a1o = (h + u) | 0
    c = A.a0
    a = A.a0o | 0
    A.a0 = p
    A.a0o = (h + u) | 0
    x.a1 = c
    x.a1o = a
    c = A.a1
    a = A.a1o | 0
    l = x.a2
    h = x.a2o | 0
    A.a1 = l
    A.a1o = h
    x.a2 = c
    x.a2o = a
    c = A.a2.a0
    a = A.a2.a0o | 0
    l = x.a3.a0
    h = x.a3.a0o | 0
    A.a2.a0 = l
    A.a2.a0o = h
    x.a3.a0 = c
    x.a3.a0o = a
    c = x.a1
    a = x.a1o | 0
    x.a0 = c[a]
}
function ne(n, o) {
    var p = 0,
        l = null,
        h = null,
        c = null,
        a = null,
        f = null,
        j = null
    h = n[o].a4
    if (n[o].i5 | 0) {
        c = n[o].a9
        p = n[o].i8 | 0
        a = n[o].a7
        l = n[o].a6
        h = h.a1
        f = ".js"
        j = ".wasm"
        a = a.replace(f, j)
        f = c.concat(a)
        j = h.replace(a, f)
        f = "cxCoreInit.promise.then(function(){cxCoreInit();}).catch(function(e){postMessage({type:"
        h = new Blob(new Array(j.concat(f, p, ",value:e.toString()});})")))
        c = URL.createObjectURL(h)
        l.a6 = new Worker(c)
        l.a6.onmessage = l.a2
    } else {
        c = n[o].a10
        a = n[o].a3.a1
        c = a.text()
        n[o].a12 = c
        h.a0 = c
        n[o].i5 = 1
        a = [
            {
                a0: null,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                },
            },
        ]
        a[0].a0 = h
        a[0].a1.a0 = n
        a[0].a1.a0o = o
        a = DB(f0, a[0])
        c.then(a)
    }
}
function nd(a, b) {
    a = a[b]
    var c = null
    if (!(a.i5 | 0)) c = a.a10
}
function f0(c, a) {
    var h = null,
        f = 0
    c.a0.a1 = a
    h = c.a1.a0
    f = c.a1.a0o | 0
    h[f].a0(h, f)
}
function m9(h, i) {
    h = h[i]
    var f = 0,
        a = null,
        c = null
    a = h.a3.a0
    f = h.a3.a0o | 0
    c = a[f].a[a[f].o - -1]
    c = c.a1.a1
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = h.a5
    if (c !== null) {
        a.a3(c)
        a.a3 = null
    } else {
        a = a.a4
        c = "CheerpX initialization failed"
        a(c)
    }
}
function m8(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function m5(c) {
    var f = null,
        a = null
    f = c.a0
    a = {
        a0: null,
    }
    ij(a, f)
}
function m1(f, g) {
    f = f[g]
    var j = null,
        h = null,
        c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    c = f.a5
    j = {
        type: 12,
        ioTransaction: f.i6 | 0,
    }
    h = HEAP32
    a = c.i7 | 0
    h[(0 + a) | 0] = -2
    c.a6.postMessage(j)
}
function m0(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function mX(f, g) {
    f = f[g]
    var j = null,
        h = null,
        c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    c = f.a5
    j = {
        type: 12,
        ioTransaction: f.i6 | 0,
    }
    h = HEAP32
    a = c.i7 | 0
    h[(0 + a) | 0] = -2
    c.a6.postMessage(j)
}
function mW(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function fR(l) {
    var n = 0,
        a = null,
        c = null,
        f = null,
        j = null,
        h = null
    a = "div"
    l.a9 = document.createElement(a)
    a = l.a9
    c = "keydown"
    f = mV
    a.addEventListener(c, f)
    a = l.a9
    c = "keyup"
    a.addEventListener(c, f)
    a = l.a9
    c = "keypress"
    a.addEventListener(c, f)
    a = l.a9
    c = "style"
    f = "position:absolute;width:25%;height:100%;top:0;right:0;overflow-y:scroll;"
    a.setAttribute(c, f)
    a = "div"
    l.a10[0] = document.createElement(a)
    a = "Global stats"
    cf(l, a, l.a10[0])
    a = "div"
    l.a11 = document.createElement(a)
    a = "Debugger - Contexts"
    cf(l, a, l.a11)
    a = "select"
    l.a13 = document.createElement(a)
    l.a11.appendChild(l.a13)
    a = l.a13
    f = "50%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = "div"
    l.a12 = document.createElement(a)
    a = "Debugger - Control"
    cf(l, a, l.a12)
    a = "button"
    l.a14 = document.createElement(a)
    a = l.a14
    f = "50%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    l.a12.appendChild(l.a14)
    a = "div"
    l.a15 = document.createElement(a)
    a = "Debugger - Disassembly"
    cf(l, a, l.a15)
    a = "select"
    l.a16 = document.createElement(a)
    a = l.a16
    c = "16-bit"
    f = "0"
    j = "option"
    h = document.createElement(j)
    h.textContent = c
    h.value = f
    a.appendChild(h)
    a = l.a16
    c = "32-bit"
    f = "1"
    j = "option"
    h = document.createElement(j)
    h.textContent = c
    h.value = f
    a.appendChild(h)
    a = l.a16
    c = "Wasm (dump)"
    f = "2"
    j = "option"
    h = document.createElement(j)
    h.textContent = c
    h.value = f
    a.appendChild(h)
    a = l.a16
    f = "20%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = "input"
    l.a17 = document.createElement(a)
    a = l.a17
    f = "20%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = "button"
    l.a18 = document.createElement(a)
    a = l.a18
    f = "20%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = l.a18
    c = "Show"
    a.textContent = c
    a = "pre"
    l.a19 = document.createElement(a)
    l.a15.appendChild(l.a16)
    l.a15.appendChild(l.a17)
    l.a15.appendChild(l.a18)
    l.a15.appendChild(l.a19)
    a = l.a18
    c = [
        {
            a0: null,
        },
    ]
    c[0].a0 = l
    c = DB(mT, c[0])
    a.onclick = c
    a = "div"
    c = document.createElement(a)
    a = "JIT - Bisect"
    cf(l, a, c)
    a = "textarea"
    l.a20 = document.createElement(a)
    a = "button"
    l.a21 = document.createElement(a)
    a = "button"
    l.a22 = document.createElement(a)
    c.appendChild(l.a20)
    c.appendChild(l.a21)
    c.appendChild(l.a22)
    a = l.a20
    f = "100%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = l.a21
    f = "50%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = l.a22
    f = "50%"
    a.style.width = f
    a = a.style
    c = "border-box"
    a.boxSizing = c
    a = l.a21
    c = "Apply"
    a.textContent = c
    a = l.a22
    c = "Load Current"
    a.textContent = c
    a = "cxLastBisect"
    c = localStorage.getItem(a)
    if (c !== null) {
        l.a20.value = c
        if ((c.length | 0) !== 0) fN(l)
    }
    a = l.a21
    c = [
        {
            a0: null,
        },
    ]
    c[0].a0 = l
    c = DB(mQ, c[0])
    a.onclick = c
    a = l.a22
    c = [
        {
            a0: null,
        },
    ]
    c[0].a0 = l
    c = DB(mN, c[0])
    a.onclick = c
    bU(l, null)
    a = document.body
    a.appendChild(l.a9)
    a = l.a14
    c = [
        {
            a0: null,
        },
    ]
    c[0].a0 = l
    c = DB(mK, c[0])
    a.onclick = c
    a = l.a13
    c = [
        {
            a0: null,
        },
    ]
    c[0].a0 = l
    c = DB(uH, c[0])
    a.onchange = c
    dL(l)
    a = {
        type: 13,
    }
    c = HEAP32
    n = l.i7 | 0
    c[(0 + n) | 0] = -2
    l.a6.postMessage(a)
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = l
    a = DB(mG, a[0])
    ;+setInterval(a, 1000)
}
function mV(a) {
    a.stopPropagation()
}
function cf(f, c, a) {
    var n = null,
        j = null,
        l = null,
        h = null
    h = "div"
    n = document.createElement(h)
    h = "p"
    j = document.createElement(h)
    h = j.style
    l = "bold"
    h.fontWeight = l
    j.textContent = c
    n.appendChild(j)
    n.appendChild(a)
    f.a9.appendChild(n)
}
function mT(h) {
    var f = null,
        n = -0,
        l = -0,
        j = null,
        a = null,
        c = 0
    f = h.a0
    a = f.a16.value
    n = +parseInt(a)
    a = f.a17.value
    a: if ((a.length | 0) !== 0) {
        l = +parseInt(a, 16)
        c = ~~n
        b: if (c >>> 0 < 2) {
            if ((c | 0) === 0) {
                c = 30
                break b
            }
            c = 31
        } else {
            if ((c | 0) !== 2) break a
            c = 51
        }
        a = f.a25
        a = {
            type: c,
            ctxType: a.i0 | 0,
            value: a.i1 | 0,
            addr: ~~l,
        }
        j = HEAP32
        c = f.i7 | 0
        j[(0 + c) | 0] = -2
        f.a6.postMessage(a)
    }
}
function fN(j) {
    var a = null,
        c = null,
        f = 0,
        h = null
    a = "cxLastBisect"
    c = j.a20.value
    localStorage.setItem(a, c)
    a = j.a20.value.trim()
    if ((a.length | 0) !== 0) {
        c = "\n"
        a = a.split(c)
        c = new Uint32Array(+(a.length | 0))
        if ((a.length | 0) > 0) {
            f = 0
            while (1) {
                h = a[(0 + f) | 0]
                c[(0 + f) | 0] = ~~+parseInt(h, 16)
                f = (f + 1) | 0
                if ((f | 0) < (a.length | 0)) continue
                break
            }
        }
        a = {
            type: 44,
            traces: c,
        }
        c = HEAP32
        f = j.i7 | 0
        c[(0 + f) | 0] = -2
        j.a6.postMessage(a)
    }
}
function mQ(a) {
    fN(a.a0)
}
function mN(c) {
    var a = null,
        j = null,
        h = null,
        f = 0
    a = c.a0
    j = {
        type: 78,
    }
    h = HEAP32
    f = a.i7 | 0
    h[(0 + f) | 0] = -2
    a.a6.postMessage(j)
}
function mK(f) {
    var c = null,
        j = null,
        h = 0,
        a = null
    c = f.a0
    a = c.a25
    a = {
        type: (a.i3 | 0) !== 0 ? 28 | 0 : 27 | 0,
        ctxType: a.i0 | 0,
        value: a.i1 | 0,
    }
    j = HEAP32
    h = c.i7 | 0
    j[(0 + h) | 0] = -2
    c.a6.postMessage(a)
}
function uH(p) {
    var a = null,
        r = null,
        j = null,
        h = 0,
        n = null,
        l = 0,
        f = null,
        c = 0
    a = p.a0
    r = a.a13.value
    f = a.a24
    j = f.a0
    h = f.a0o | 0
    n = f.a1
    l = f.a1o | 0
    if (j === n && h === l) {
        bU(a, null)
        return
    }
    c = 0
    while (1) {
        f = j[(h + c) | 0]
        if (+f.a2.localeCompare(r) === 0) {
            bU(a, f)
            return
        }
        c = (c + 1) | 0
        if (j !== n || ((h + c) | 0) !== l) continue
        break
    }
    bU(a, null)
}
function mG(r) {
    var j = null,
        h = 0,
        p = null,
        n = 0,
        l = null,
        c = null,
        a = 0,
        f = 0
    c = r.a0.a23
    j = c.a0
    h = c.a0o | 0
    p = c.a1
    n = c.a1o | 0
    if (j !== p || h !== n) {
        a = 0
        while (1) {
            c = j[(h + a) | 0].a1
            f = j[(h + a) | 0].a1o | 0
            f = c[f] | 0
            c = j[(h + a) | 0].a4
            l = String((f - (j[(h + a) | 0].i2 | 0)) | 0)
            c.textContent = l
            if ((j[(h + a) | 0].i3 | 0) === 1) j[(h + a) | 0].i2 = f
            a = (a + 1) | 0
            if (j !== p || ((h + a) | 0) !== n) continue
            break
        }
    }
}
function dw(h, f, c) {
    var l = null,
        j = 0,
        a = null
    h.a3 = f
    h.a4 = c
    j = aQ | 0
    if ((j | 0) === 0) {
        cH()
        j = aQ | 0
    }
    a: {
        if ((j | 0) !== 3) {
            a = cu()
            a = a.concat("./tun/tailscale_tun_auto.js")
            l = import(a)
            a = mA
            l.then(a)
            if ((aQ | 0) !== 3) {
                h.a1 = ca
                ca = h
                break a
            }
        }
        dv(h)
    }
}
function cH() {
    var h = null,
        l = null,
        j = null,
        f2 = null,
        c = null,
        a = null
    a = new Object()
    h = new Promise(function (f, r) {
        a.fullfill = f
        a.reject = r
    })
    l = a.fullfill
    j = a.reject
    a = cu()
    aQ = 1
    a = a.concat("cheerpOS.js")
    f2 = "script"
    c = document.createElement(f2)
    c.src = a
    a = [
        {
            a0: null,
            a1: null,
            a2: null,
        },
    ]
    a[0].a0 = h
    a[0].a1 = l
    a[0].a2 = j
    a = DB(mw, a[0])
    c.onload = a
    document.head.appendChild(c)
    return h
}
function mA(h) {
    var f = 0,
        c = null,
        a = null
    iO = h
    f = aQ | 0
    if ((f | 0) === 1) aQ = 2
    else if ((f | 0) === 2) {
        aQ = 3
        a = ca
        ca = null
        if (a !== null)
            while (1) {
                dv(a)
                c = a.a1
                a.a1 = null
                if (c !== null) {
                    a = c
                    continue
                }
                break
            }
    }
}
function dv(c) {
    var f = null,
        a = null
    if (c.a8 !== null) {
        a = cu()
        a = a.concat("cxbridge.js")
        c.a6 = new Worker(a)
        c.a6.onmessage = c.a2
    } else {
        a = "cxcore.js"
        f = {
            a0: null,
        }
        ii(f, c, a, 1)
    }
}
function mw(h) {
    var f = 0,
        c = null,
        a = null
    f = aQ | 0
    if ((f | 0) === 1) aQ = 2
    else if ((f | 0) === 2) {
        aQ = 3
        a = ca
        ca = null
        if (a !== null)
            while (1) {
                dv(a)
                c = a.a1
                a.a1 = null
                if (c !== null) {
                    a = c
                    continue
                }
                break
            }
    }
    h.a1(null)
}
function ms(E, C, A) {
    var G = 0,
        u = null,
        f = null,
        a = null,
        h = null,
        c = 0,
        j = null,
        p = null,
        n = null,
        x = null,
        l = 0,
        r = -0
    u = new AP().a
    f = u[0]
    f.a0 = mp
    f.a1 = mo
    f.a14 = A
    f.a13 = C
    a = f.a2.a[f.a2.o - 1]
    E.a0 = a
    a = "bios"
    a: {
        if (A.hasOwnProperty(a)) {
            h = "vgaBios"
            c = A.hasOwnProperty(h)
            if (c) {
                a = f.a13
                h = f.a14.bios.this
                j = new Uint8Array(+(h.i3 >>> 0))
                f.a15 = j
                p = f.a7
                h.a0.a6(p, h, a, 0, h.i3 | 0, j, 0)
                a = p.a0
                c = p.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        f.i11 = 1
                        a = a[c].a[a[c].o - -1]
                        a.a0 = u
                        a.a0o = 0
                        break a
                    }
                }
                a = p.a0
                c = p.a0o | 0
                if (a !== nullArray || c !== 0) a[c].a1(a, c)
                a = f.a13
                h = f.a14.vgaBios.this
                j = new Uint8Array(+(h.i3 >>> 0))
                f.a16 = j
                p = f.a8
                h.a0.a6(p, h, a, 0, h.i3 | 0, j, 0)
                a = p.a0
                c = p.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        f.i11 = 2
                        a = a[c].a[a[c].o - -1]
                        a.a0 = u
                        a.a0o = 0
                        break a
                    }
                }
                a = p.a0
                c = p.a0o | 0
                if (a !== nullArray || c !== 0) a[c].a1(a, c)
                a = f.a14
                n = new Array()
                h = "MhZ"
                c = a.hasOwnProperty(h)
                if (c) c = f.a14.MhZ
                else {
                    c = 0
                }
                a = f.a16
                h = f.a15
                j = f.a14
                p = f.a13
                x = {
                    type: 8,
                    mhz: c,
                    mem: j.mem,
                    bios: h,
                    vgaBios: a,
                }
                ;+n.push(h.buffer)
                ;+n.push(a.buffer)
                p.a6.postMessage(x, n)
                a = "floppies"
                if (j.hasOwnProperty(a)) {
                    j = f.a14.floppies
                    c = Array.isArray(j)
                    if (c) {
                        a = f.a14.floppies
                        f.a17 = a
                        if ((a.length | 0) !== 0) {
                            a = f.a9
                            c = 0
                            while (1) {
                                f.i18 = c
                                h = f.a13
                                fy(a, h, c, f.a17[+(c >>> 0)])
                                h = a.a0
                                c = a.a0o | 0
                                if (h !== nullArray || c !== 0) {
                                    if (h[c].a0 !== null) {
                                        f.i11 = 3
                                        a = h[c].a[h[c].o - -1]
                                        a.a0 = u
                                        a.a0o = 0
                                        break a
                                    }
                                    h[c].a1(h, c)
                                }
                                c = f.i18 | 0
                                c = (c + 1) | 0
                                if (c >>> 0 < f.a17.length >>> 0) continue
                                break
                            }
                        }
                    }
                }
                a = f.a14
                h = "disks"
                if (a.hasOwnProperty(h)) {
                    a = f.a14.disks
                    c = Array.isArray(a)
                    if (c) {
                        j = f.a14.disks
                        f.a19 = j
                        n = f.a10
                        c = 0
                        while (1) {
                            n[c] = 0
                            c = (c + 1) | 0
                            if (n !== n || 2 !== ((0 + c) | 0)) continue
                            break
                        }
                        if ((j.length | 0) !== 0) {
                            l = 0
                            while (1) {
                                f.a23 = j
                                f.a22 = h
                                f.i21 = l
                                f.i20 = c
                                h = f.a19
                                r = +(l >>> 0)
                                f.a24 = h[r].dev.this
                                h = h[r]
                                a = "id"
                                f.a25 = a
                                c = h.hasOwnProperty(a)
                                if (c) l = f.a19[r].id
                                f.i26 = l
                                if (l >>> 0 > 1) {
                                    console.log("Invalid disk id", l)
                                    a = f.a4
                                    a.a1.i0 = 0
                                    f.i11 = 4
                                    a.a0 = u
                                    a.a0o = 0
                                    break a
                                }
                                if ((n[l] | 0) !== 0) {
                                    console.log("Overwriting disk id", l)
                                    a = f.a5
                                    a.a1.i0 = 0
                                    f.i11 = 5
                                    a.a0 = u
                                    a.a0o = 0
                                    break a
                                }
                                a = f.a22
                                c = f.i21 | 0
                                h = f.a19
                                n[l] = 1
                                h = h[+(c >>> 0)].type
                                a = "ata"
                                f.a27 = a
                                r = +h.localeCompare(a)
                                j = f.a23
                                if (r === 0) {
                                    c = 0
                                } else {
                                    a = f.a19[+(f.i21 >>> 0)].type
                                    j = "atapi"
                                    f.a28 = j
                                    r = +a.localeCompare(j)
                                    if (!(r === 0)) {
                                        console.log("Unknown disk type")
                                        a = f.a6
                                        a.a1.i0 = 0
                                        f.i11 = 6
                                        a.a0 = u
                                        a.a0o = 0
                                        break a
                                    }
                                    c = 1
                                }
                                l = f.i26 | 0
                                a = f.a24
                                G = f.i21 | 0
                                h = f.a19
                                x = f.a13.a6
                                p = f.a12[0]
                                a = {
                                    type: 9,
                                    diskType: c,
                                    index: l,
                                    devId: a.i2 | 0,
                                    len: a.i3 | 0,
                                }
                                f.a12[0] = a
                                x.postMessage(a)
                                l = (G + 1) | 0
                                if (l >>> 0 < h.length >>> 0) {
                                    a = f.a25
                                    h = f.a27
                                    continue
                                }
                                break
                            }
                        }
                    }
                }
                u = f.a13
                f = {
                    type: 2,
                }
                u.a6.postMessage(f)
                break a
            }
        }
        console.log("bios and vgaBios must be defined")
        a = f.a3
        a.a1.i0 = 0
        f.i11 = 0
        a.a0 = u
        a.a0o = 0
    }
}
function mp(H, I) {
    var G = null,
        E = null,
        a = 0,
        C = null,
        A = null,
        h = null,
        f = null,
        c = null,
        j = null,
        n = null,
        u = null,
        p = 0,
        l = 0,
        r = 0,
        x = -0
    a = H[I].i11 | 0
    C = H[I].a6
    A = H[I].a5
    G = H[I].a4
    a: {
        b: {
            if (a << 29 > -536870912) {
                h = H[I].a9
                f = H[I].a8
                c: {
                    d: {
                        if ((a & 7) < 2) {
                            c = H[I].a7
                            if ((a & 7) !== 0) {
                                j = c.a0
                                a = c.a0o | 0
                                j = j[a]
                            } else {
                                a = H[I].a3.a1.i0 | 0
                                if ((a & 65535) >= 256) H[I].a3.a1.i0 = a & 255
                                j = H[I].a13
                                n = H[I].a14.bios.this
                                u = new Uint8Array(+(n.i3 >>> 0))
                                H[I].a15 = u
                                n.a0.a6(c, n, j, 0, n.i3 | 0, u, 0)
                                j = c.a0
                                a = c.a0o | 0
                                if (j !== nullArray || a !== 0) {
                                    if (j[a].a0 !== null) {
                                        H[I].i11 = 1
                                        c = j[a].a[j[a].o - -1]
                                        c.a0 = H
                                        c.a0o = I
                                        break a
                                    }
                                    j = j[a]
                                } else {
                                    j = null
                                }
                            }
                            j = c.a0
                            a = c.a0o | 0
                            if (j !== nullArray || a !== 0) j[a].a1(j, a)
                            c = H[I].a13
                            j = H[I].a14.vgaBios.this
                            n = new Uint8Array(+(j.i3 >>> 0))
                            H[I].a16 = n
                            j.a0.a6(f, j, c, 0, j.i3 | 0, n, 0)
                            c = f.a0
                            a = f.a0o | 0
                            if (c !== nullArray || a !== 0) {
                                if (c[a].a0 !== null) {
                                    H[I].i11 = 2
                                    c = c[a].a[c[a].o - -1]
                                    c.a0 = H
                                    c.a0o = I
                                    break a
                                }
                                c = c[a]
                            } else {
                                c = null
                            }
                        } else {
                            if ((a & 7) !== 2) {
                                c = h.a0
                                a = h.a0o | 0
                                if (c !== nullArray || a !== 0) {
                                    f = c
                                    p = a
                                    a = -1
                                    break d
                                }
                                a = 0
                                break d
                            }
                            c = f.a0
                            a = f.a0o | 0
                            c = c[a]
                        }
                        c = f.a0
                        a = f.a0o | 0
                        if (c !== nullArray || a !== 0) c[a].a1(c, a)
                        f = H[I].a14
                        E = new Array()
                        c = "MhZ"
                        a = f.hasOwnProperty(c)
                        if (a) a = H[I].a14.MhZ
                        else {
                            a = 0
                        }
                        f = H[I].a16
                        c = H[I].a15
                        j = H[I].a14
                        n = H[I].a13
                        u = {
                            type: 8,
                            mhz: a,
                            mem: j.mem,
                            bios: c,
                            vgaBios: f,
                        }
                        ;+E.push(c.buffer)
                        ;+E.push(f.buffer)
                        n.a6.postMessage(u, E)
                        f = "floppies"
                        if (!j.hasOwnProperty(f)) break c
                        j = H[I].a14.floppies
                        a = Array.isArray(j)
                        if (!a) break c
                        c = H[I].a14.floppies
                        H[I].a17 = c
                        if ((c.length | 0) === 0) break c
                        l = 0
                        a = 1
                    }
                    d: while (1) {
                        switch (a | 0) {
                            case 0:
                                l = H[I].i18 | 0
                                l = (l + 1) | 0
                                if (l >>> 0 >= H[I].a17.length >>> 0) break c
                                a = 1
                                continue d
                            case 1:
                                H[I].i18 = l
                                c = H[I].a13
                                fy(h, c, l, H[I].a17[+(l >>> 0)])
                                c = h.a0
                                a = h.a0o | 0
                                if (c !== nullArray || a !== 0) {
                                    if (c[a].a0 !== null) {
                                        H[I].i11 = 3
                                        c = c[a].a[c[a].o - -1]
                                        c.a0 = H
                                        c.a0o = I
                                        break a
                                    }
                                    f = c
                                    p = a
                                    a = -1
                                    continue d
                                }
                                a = 0
                                continue d
                            default:
                                f[p].a1(f, p)
                                a = 0
                                continue d
                        }
                        break
                    }
                }
                h = H[I].a14
                f = "disks"
                if (!h.hasOwnProperty(f)) break b
                h = H[I].a14.disks
                a = Array.isArray(h)
                if (!a) break b
                h = H[I].a14.disks
                H[I].a19 = h
                f = H[I].a10
                a = 0
                while (1) {
                    f[a] = 0
                    a = (a + 1) | 0
                    if (f !== f || 2 !== ((0 + a) | 0)) continue
                    break
                }
                if ((h.length | 0) === 0) break b
                r = 0
                a = 2
            } else if ((a & 7) < 6) {
                if ((a & 7) === 4) {
                    a = G.a1.i0 | 0
                    if ((a & 65535) < 256) {
                        a = 1
                    } else {
                        G.a1.i0 = a & 255
                        a = 1
                    }
                } else {
                    a = A.a1.i0 | 0
                    if ((a & 65535) < 256) {
                        a = 0
                    } else {
                        A.a1.i0 = a & 255
                        a = 0
                    }
                }
            } else {
                a = C.a1.i0 | 0
                if ((a & 65535) >= 256) C.a1.i0 = a & 255
                h = H[I].a28
                p = H[I].i20 | 0
                a = -1
            }
            c: while (1) {
                switch (a | 0) {
                    case 0:
                        a = H[I].i26 | 0
                        h = H[I].a22
                        p = H[I].i21 | 0
                        n = H[I].a19
                        H[I].a10[a] = 1
                        n = n[+(p >>> 0)].type
                        h = "ata"
                        H[I].a27 = h
                        x = +n.localeCompare(h)
                        h = H[I].a23
                        if (x === 0) {
                            p = 0
                            a = -1
                            continue c
                        }
                        n = H[I].a19[+(H[I].i21 >>> 0)].type
                        h = "atapi"
                        H[I].a28 = h
                        x = +n.localeCompare(h)
                        if (x === 0) {
                            p = 1
                            a = -1
                            continue c
                        }
                        console.log("Unknown disk type")
                        C.a1.i0 = 0
                        H[I].i11 = 6
                        C.a0 = H
                        C.a0o = I
                        break a
                    case 1:
                        a = H[I].i26 | 0
                        if ((H[I].a10[a] | 0) !== 0) {
                            console.log("Overwriting disk id", a)
                            A.a1.i0 = 0
                            H[I].i11 = 5
                            A.a0 = H
                            A.a0o = I
                            break a
                        }
                        a = 0
                        continue c
                    case 2:
                        H[I].a23 = j
                        H[I].a22 = c
                        H[I].i21 = r
                        H[I].i20 = l
                        n = H[I].a19
                        x = +(r >>> 0)
                        H[I].a24 = n[x].dev.this
                        n = n[x]
                        u = "id"
                        H[I].a25 = u
                        a = n.hasOwnProperty(u)
                        if (a) a = H[I].a19[x].id
                        else {
                            a = r
                        }
                        H[I].i26 = a
                        if (a >>> 0 > 1) {
                            console.log("Invalid disk id", a)
                            G.a1.i0 = 0
                            H[I].i11 = 4
                            G.a0 = H
                            G.a0o = I
                            break a
                        }
                        a = 1
                        continue c
                    default:
                        a = H[I].i26 | 0
                        f = H[I].a24
                        l = H[I].i21 | 0
                        c = H[I].a19
                        j = H[I].a13.a6
                        n = H[I].a12[0]
                        f = {
                            type: 9,
                            diskType: p,
                            index: a,
                            devId: f.i2 | 0,
                            len: f.i3 | 0,
                        }
                        H[I].a12[0] = f
                        j.postMessage(f)
                        r = (l + 1) | 0
                        if (r >>> 0 < c.length >>> 0) {
                            c = H[I].a27
                            f = H[I].a25
                            l = p
                            j = h
                            a = 2
                            continue c
                        }
                }
                break
            }
        }
        C = H[I].a13
        A = {
            type: 2,
        }
        C.a6.postMessage(A)
    }
}
function mo(f, g) {
    f = f[g]
    var a = 0,
        c = null
    a = f.i11 | 0
    a: {
        if (((a + 7) & 7) < 2) {
            if ((a & 7) === 1) {
                c = f.a7.a0
                a = f.a7.a0o | 0
                if (c === nullArray && a === 0) break a
            } else {
                c = f.a8.a0
                a = f.a8.a0o | 0
                if (c === nullArray && a === 0) break a
            }
        } else {
            if ((a & 7) !== 3) break a
            c = f.a9.a0
            a = f.a9.a0o | 0
            if (c === nullArray && a === 0) break a
        }
        c[a].a1(c, a)
    }
}
function fy(A, x, u, r) {
    var h = null,
        c = null,
        l = null,
        a = null,
        f = 0,
        j = null,
        p = null,
        n = 0
    h = new AN().a
    c = h[0]
    c.a0 = ml
    c.a1 = mk
    c.a5 = r
    c.i4 = u
    c.a3 = x
    l = c.a2
    l.a0 = nullArray
    l.a0o = 0
    a = l.a
    f = l.o - 1
    A.a0 = a
    A.a0o = f
    a: if (u >>> 0 > 1) {
        console.log("Invalid floppy id", u)
        l = c.a8
        l.a1.i0 = 0
        c.i11 = 0
        l.a0 = h
        l.a0o = 0
    } else {
        a = c.a5
        j = "dev"
        f = a.hasOwnProperty(j)
        if (f) {
            a = c.a5
            j = a.dev.this
            c.a6 = j
            p = "size"
            if (a.hasOwnProperty(p)) {
                f = c.a5.size
                n = j.i3 | 0
                if (((f << 10) | 0) !== (n | 0)) {
                    console.log("Unexpected Floppy size")
                    l = c.a9
                    l.a1.i0 = 0
                    c.i11 = 1
                    l.a0 = h
                    l.a0o = 0
                    break a
                }
            }
            a = c.a6
            j = c.a10
            a.a0.a4(j, a)
            a = j.a0
            f = j.a0o | 0
            if (a !== nullArray || f !== 0) {
                if (a[f].a0 !== null) {
                    c.i11 = 2
                    c = a[f].a[a[f].o - -1]
                    c.a0 = h
                    c.a0o = 0
                    break a
                }
            }
            a = a[f].a[a[f].o - -1]
            f = a.a1.i1 | 0
            a = j.a0
            n = j.a0o | 0
            if (a !== nullArray || n !== 0) a[n].a1(a, n)
            h = c.a6
            n = c.i4 | 0
            a = c.a3
            p = a.a6
            j = {
                type: 41,
                index: n,
                len: h.i3 | 0,
            }
            p.postMessage(j)
            a = a.a6
            h = {
                type: 45,
                index: n,
                devId: h.i2 | 0,
                len: h.i3 | 0,
                writeProtected: ((f & 2) | 0) === 0 ? 1 : 0,
            }
            a.postMessage(h)
        }
        h = c.a5
        a = "size"
        f = h.hasOwnProperty(a)
        if (f) {
            h = c.a3.a6
            a = {
                type: 41,
                index: 1,
                len: c.a5.size << 10,
            }
            h.postMessage(a)
        }
        c.a7 = l
        c.a0 = null
        h = l.a0
        f = l.a0o | 0
        ;(h !== nullArray || f !== 0 ? h : db)[h !== nullArray || f !== 0 ? f : dc].a0(h !== nullArray || f !== 0 ? h : db, h !== nullArray || f !== 0 ? f : dc)
    }
}
function ml(p, q) {
    var n = null,
        c = 0,
        f = null,
        a = null,
        l = 0,
        j = null,
        h = null
    c = p[q].i11 | 0
    f = p[q].a10
    a: {
        b: {
            if (c << 30 > -1073741824) {
                a = p[q].a9
                if ((c & 3) !== 0) {
                    c = a.a1.i0 | 0
                    if ((c & 65535) >= 256) a.a1.i0 = c & 255
                } else {
                    c = p[q].a8.a1.i0 | 0
                    if ((c & 65535) >= 256) p[q].a8.a1.i0 = c & 255
                    j = p[q].a5
                    h = "dev"
                    c = j.hasOwnProperty(h)
                    if (!c) break b
                    j = p[q].a5
                    h = j.dev.this
                    p[q].a6 = h
                    n = "size"
                    if (j.hasOwnProperty(n)) {
                        c = j.size
                        l = h.i3 | 0
                        if (((c << 10) | 0) !== (l | 0)) {
                            console.log("Unexpected Floppy size")
                            a.a1.i0 = 0
                            p[q].i11 = 1
                            a.a0 = p
                            a.a0o = q
                            break a
                        }
                    }
                }
                a = p[q].a6
                a.a0.a4(f, a)
                a = f.a0
                c = f.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        p[q].i11 = 2
                        f = a[c].a[a[c].o - -1]
                        f.a0 = p
                        f.a0o = q
                        break a
                    }
                    a = a[c]
                } else {
                    a = null
                }
            } else {
                a = f.a0
                c = f.a0o | 0
                a = a[c]
            }
            a = a.a[a.o - -1]
            c = a.a1.i1 | 0
            a = f.a0
            l = f.a0o | 0
            if (a !== nullArray || l !== 0) a[l].a1(a, l)
            f = p[q].a6
            l = p[q].i4 | 0
            a = p[q].a3
            j = a.a6
            h = {
                type: 41,
                index: l,
                len: f.i3 | 0,
            }
            j.postMessage(h)
            a = a.a6
            f = {
                type: 45,
                index: l,
                devId: f.i2 | 0,
                len: f.i3 | 0,
                writeProtected: ((c & 2) | 0) === 0 ? 1 : 0,
            }
            a.postMessage(f)
        }
        f = p[q].a5
        a = "size"
        c = f.hasOwnProperty(a)
        if (c) {
            f = p[q].a3.a6
            a = {
                type: 41,
                index: 1,
                len: p[q].a5.size << 10,
            }
            f.postMessage(a)
        }
        f = p[q].a2
        p[q].a7 = f
        p[q].a0 = null
        a = f.a0
        c = f.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : db)[a !== nullArray || c !== 0 ? c : dc].a0(a !== nullArray || c !== 0 ? a : db, a !== nullArray || c !== 0 ? c : dc)
    }
}
function mk(f, g) {
    f = f[g]
    var c = null,
        a = 0
    a = f.i11 | 0
    if (f.a0 !== null) {
        if (a << 30 <= -1073741824) {
            c = f.a10.a0
            a = f.a10.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        }
    }
}
function aE(a) {
    var c = null
    c = new Object()
    a.a0 = new Promise(function (f, r) {
        c.fullfill = f
        c.reject = r
    })
    a.a1 = c.fullfill
    a.a2 = c.reject
}
function mj(c) {
    var a = null
    c.a0 = de
    c.a1 = null
    c.a2 = null
    c.a3 = null
    c.a4 = null
    c.a5 = null
    c.a6 = null
    c.i7 = 0
    c.a8 = null
    c.a9 = null
    c.a10[0] = null
    c.a11 = null
    c.a12 = null
    c.a13 = null
    c.a14 = null
    c.a15 = null
    c.a16 = null
    c.a17 = null
    c.a18 = null
    c.a19 = null
    c.a20 = null
    a = c.a23
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = c.a24
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    c.a25 = null
}
function mi(A, x) {
    var r = null,
        u = null,
        n = null,
        C = null,
        p = null,
        h = null,
        f = null,
        c = 0,
        a = null,
        l = null,
        j = 0
    p = new AM().a
    h = p[0]
    h.a0 = mf
    h.a1 = me
    h.a8 = x
    r = h.a2
    r.a0 = nullArray
    r.a0o = 0
    u = r.a1
    u.i0 = 0
    f = r.a
    c = r.o - 1
    A.a0 = f
    A.a0o = c
    f = new Bc()
    f.i0 = 0
    f.a1 = x
    f.a2 = null
    f.i5 = 0
    f.i6 = 0
    f.i7 = 1
    f.i8 = 0
    a = f.a9
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    f.a10[0] = 0
    a = f.a11
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    x.a26 = f
    n = h.a3
    fu(n, x)
    f = n.a0
    c = n.a0o | 0
    a: {
        if (f !== nullArray || c !== 0) {
            if (f[c].a0 !== null) {
                h.i6 = 0
                h = f[c].a[f[c].o - -1]
                h.a0 = p
                h.a0o = 0
                break a
            }
        }
        a = h.a8
        f = f[c].a[f[c].o - -1]
        a.i41 = f.a1.i1 | 0
        f = n.a0
        c = n.a0o | 0
        if (f !== nullArray || c !== 0) f[c].a1(f, c)
        hx(n, h.a8)
        f = n.a0
        c = n.a0o | 0
        if (f !== nullArray || c !== 0) {
            if (f[c].a0 !== null) {
                h.i6 = 1
                h = f[c].a[f[c].o - -1]
                h.a0 = p
                h.a0o = 0
                break a
            }
            f[c].a1(f, c)
        }
        f = h.a8
        hw(h.a4, f)
        l = f.a43
        a = l.a0
        c = l.a0o | 0
        f = l.a1
        j = l.a1o | 0
        h.a9 = f[j]
        b: {
            if (a !== f || c !== j) {
                f = h.a5
                while (1) {
                    h.a10 = a
                    h.a10o = c
                    h.i7 = 1
                    l = a[c].a3
                    if (l !== null) {
                        l.a0.a2(n, l, h.a8)
                        a = n.a0
                        c = n.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                h.i6 = 2
                                h = a[c].a[a[c].o - -1]
                                h.a0 = p
                                h.a0o = 0
                                break a
                            }
                            a[c].a1(a, c)
                        }
                        a = h.a10
                        c = h.a10o | 0
                        j = a[c].a3.i2 | 0
                        a = a[c]
                    } else {
                        j = ac | 0
                        ac = (j + 1) | 0
                        a = a[c]
                    }
                    l = h.a8
                    C = a.a2
                    bp(n, C, 0)
                    hv(f, l, n, a.a4, j)
                    a = f.a0
                    c = f.a0o | 0
                    if (a !== nullArray || c !== 0) {
                        if (a[c].a0 !== null) {
                            h.i6 = 3
                            h = a[c].a[a[c].o - -1]
                            h.a0 = p
                            h.a0o = 0
                            break a
                        }
                    }
                    a = a[c].a[a[c].o - -1]
                    c = a.a1.i1 | 0
                    a = f.a0
                    j = f.a0o | 0
                    if (a !== nullArray || j !== 0) a[j].a1(a, j)
                    a = h.a10
                    j = h.a10o | 0
                    if ((c | 0) === 0) {
                        f = a[j].a2
                        a = a[j].a4.a2
                        bd(
                            ew,
                            0,
                            {
                                d: f,
                                o: 0,
                            },
                            {
                                d: a,
                                o: 0,
                            }
                        )
                        c = u.i0 | 0
                        u.a1 = null
                        if ((c & 65535) >= 256) break b
                        u.i0 = c | 256
                        break b
                    }
                    if (a[(j + 1) | 0] !== h.a9) {
                        c = (j + 1) | 0
                        a = a
                        continue
                    }
                    break
                }
            }
            p = CheerpX.Linux.wrap(
                Object.create(CheerpX.Linux.prototype, {
                    this: {
                        value: h.a8,
                    },
                })
            )
            u.i0 = 256
            u.a1 = p
        }
        h.a11 = r
        h.a0 = null
        p = r.a0
        c = r.a0o | 0
        ;(p !== nullArray || c !== 0 ? p : $)[p !== nullArray || c !== 0 ? c : aa].a0(p !== nullArray || c !== 0 ? p : $, p !== nullArray || c !== 0 ? c : aa)
    }
}
function mf(A, B) {
    var u = null,
        l = null,
        r = null,
        p = 0,
        x = null,
        c = 0,
        n = null,
        a = null,
        f = null,
        h = 0,
        j = null
    c = A[B].i6 | 0
    n = A[B].a2
    u = A[B].a5
    l = A[B].a3
    a: {
        b: {
            c: {
                if ((c & 7) < 2) {
                    d: {
                        if ((c & 7) !== 0) {
                            a = l.a0
                            c = l.a0o | 0
                            if (a === nullArray && c === 0) break d
                            c = c
                            a = a
                        } else {
                            a = A[B].a8
                            j = l.a0
                            c = l.a0o | 0
                            j = j[c].a[j[c].o - -1]
                            a.i41 = j.a1.i1 | 0
                            a = l.a0
                            c = l.a0o | 0
                            if (a !== nullArray || c !== 0) a[c].a1(a, c)
                            hx(l, A[B].a8)
                            a = l.a0
                            c = l.a0o | 0
                            if (a === nullArray && c === 0) break d
                            if (a[c].a0 !== null) {
                                A[B].i6 = 1
                                n = a[c].a[a[c].o - -1]
                                n.a0 = A
                                n.a0o = B
                                break a
                            }
                            c = c
                            a = a
                        }
                        a[c].a1(a, c)
                    }
                    a = A[B].a8
                    hw(A[B].a4, a)
                    a = a.a43
                    f = a.a0
                    h = a.a0o | 0
                    j = a.a1
                    c = a.a1o | 0
                    A[B].a9 = j[c]
                    if (f === j && h === c) break c
                    c = 2
                } else if ((c & 7) === 2) {
                    a = l.a0
                    c = l.a0o | 0
                    if (a !== nullArray || c !== 0) {
                        r = a
                        p = c
                        c = -1
                    } else {
                        c = 0
                    }
                } else {
                    a = u.a0
                    c = u.a0o | 0
                    a = a[c]
                    c = 1
                }
                d: while (1) {
                    switch (c | 0) {
                        case 0:
                            a = A[B].a10
                            c = A[B].a10o | 0
                            x = a
                            a = x[c]
                            c = x[c].a3.i2 | 0
                            break
                        case 1:
                            f = a.a[a.o - -1]
                            c = f.a1.i1 | 0
                            f = u.a0
                            h = u.a0o | 0
                            if (f !== nullArray || h !== 0) f[h].a1(f, h)
                            f = A[B].a10
                            h = A[B].a10o | 0
                            if ((c | 0) !== 0) {
                                if (f[(h + 1) | 0] === A[B].a9) break c
                                f = f
                                h = (h + 1) | 0
                                c = 2
                                continue d
                            }
                            a = f[h].a2
                            f = f[h].a4.a2
                            bd(
                                ew,
                                0,
                                {
                                    d: a,
                                    o: 0,
                                },
                                {
                                    d: f,
                                    o: 0,
                                }
                            )
                            a = n.a1
                            c = a.i0 | 0
                            a.a1 = null
                            if ((c & 65535) >= 256) break b
                            a.i0 = c | 256
                            break b
                        case 2:
                            A[B].a10 = f
                            A[B].a10o = h
                            A[B].i7 = 1
                            j = f[h].a3
                            if (j !== null) {
                                j.a0.a2(l, j, A[B].a8)
                                j = l.a0
                                c = l.a0o | 0
                                if (j !== nullArray || c !== 0) {
                                    if (j[c].a0 !== null) {
                                        A[B].i6 = 2
                                        n = j[c].a[j[c].o - -1]
                                        n.a0 = A
                                        n.a0o = B
                                        break a
                                    }
                                    r = j
                                    p = c
                                    c = -1
                                    continue d
                                }
                                c = 0
                                continue d
                            }
                            c = ac | 0
                            ac = (c + 1) | 0
                            a = f[h]
                            break
                        default:
                            r[p].a1(r, p)
                            c = 0
                            continue d
                    }
                    j = A[B].a8
                    x = a.a2
                    bp(l, x, 0)
                    hv(u, j, l, a.a4, c)
                    a = u.a0
                    c = u.a0o | 0
                    if (a !== nullArray || c !== 0) {
                        if (a[c].a0 !== null) {
                            A[B].i6 = 3
                            n = a[c].a[a[c].o - -1]
                            n.a0 = A
                            n.a0o = B
                            break a
                        }
                        a = a[c]
                        c = 1
                        continue d
                    }
                    a = null
                    c = 1
                    continue d
                }
            }
            a = CheerpX.Linux.wrap(
                Object.create(CheerpX.Linux.prototype, {
                    this: {
                        value: A[B].a8,
                    },
                })
            )
            j = n.a1
            j.i0 = 256
            j.a1 = a
        }
        A[B].a11 = n
        A[B].a0 = null
        a = n.a0
        c = n.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
    }
}
function me(h, i) {
    h = h[i]
    var a = 0,
        f = null,
        c = null
    if (h.a0 !== null) {
        a = h.i6 | 0
        f = h.a3
        if ((a & 7) < 2) {
            if ((a & 7) !== 0) {
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            } else {
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            }
        } else if ((a & 7) === 2) {
            c = f.a0
            a = f.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        } else {
            f = h.a5.a0
            a = h.a5.a0o | 0
            if (f !== nullArray || a !== 0) f[a].a1(f, a)
        }
    }
}
function fu(r, p) {
    var j = null,
        n = null,
        h = null,
        f = null,
        l = null,
        a = 0,
        c = null
    h = wc({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
    }).a
    f = h[0]
    f.a0 = q5
    f.a1 = q4
    j = f.a2
    j.a0 = nullArray
    j.a0o = 0
    n = j.a1
    n.i0 = 0
    l = j.a
    a = j.o - 1
    r.a0 = l
    r.a0o = a
    l = f.a3
    b2(
        l,
        p,
        -1,
        {
            type: 33,
            arg1: p.a8,
        },
        1
    )
    c = l.a0
    a = l.a0o | 0
    a: {
        if (c !== nullArray || a !== 0) {
            if (c[a].a0 !== null) {
                f.i4 = 0
                f = c[a].a[c[a].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        c = c[a].a[c[a].o - -1]
        a = c.a1.i1 | 0
        n.i0 = 256
        n.i1 = a
        c = l.a0
        a = l.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
        f.a5 = j
        f.a0 = null
        h = j.a0
        a = j.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : $)[h !== nullArray || a !== 0 ? a : aa].a0(h !== nullArray || a !== 0 ? h : $, h !== nullArray || a !== 0 ? a : aa)
    }
}
function hx(p, n) {
    var l = null,
        h = null,
        c = null,
        j = null,
        a = 0,
        f = null
    h = we({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
        a3: null,
        a4: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i5: 0,
    }).a
    c = h[0]
    c.a0 = rb
    c.a1 = ra
    l = c.a2
    l.a0 = nullArray
    l.a0o = 0
    j = l.a
    a = l.o - 1
    p.a0 = j
    p.a0o = a
    a = n.i41 | 0
    j = c.a4
    hi(j, n, a, {
        type: 43,
        tid: a,
    })
    f = j.a0
    a = j.a0o | 0
    a: {
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                c.i5 = 0
                c = f[a].a[f[a].o - -1]
                c.a0 = h
                c.a0o = 0
                break a
            }
        }
        f = j.a0
        a = j.a0o | 0
        if (f !== nullArray || a !== 0) f[a].a1(f, a)
        c.a3 = l
        c.a0 = null
        h = l.a0
        a = l.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : $)[h !== nullArray || a !== 0 ? a : aa].a0(h !== nullArray || a !== 0 ? h : $, h !== nullArray || a !== 0 ? a : aa)
    }
}
function hw(A, x) {
    var C = null,
        G = 0,
        E = null,
        f = null,
        r = null,
        a = null,
        c = 0,
        h = null,
        n = null,
        j = 0,
        l = 0,
        p = 0,
        u = 0
    C = w_({
        a0: null,
        a1: null,
        a2: (C = {
            i0: 0,
        }),
        a3: (C = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
        a6: null,
        a7: null,
    }).a
    f = C[0]
    f.a0 = rA
    f.a1 = rz
    f.a5 = x
    r = f.a2.a[f.a2.o - 1]
    A.a0 = r
    r = f.a3
    a: while (1) {
        f.a6 = a
        hs(r, f.a5.a45)
        a = r.a0
        c = r.a0o | 0
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = C
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        a = a.a1.a1
        f.a7 = a
        h = r.a0
        c = r.a0o | 0
        if (h !== nullArray || c !== 0) h[c].a1(h, c)
        switch (a.type | 0) {
            case 19:
                h = f.a5
                n = a.path
                c = a.tid
                j = a.replyType
                l = a.flags
                p = a.permType
                u = a.devId
                G = a.uid
                hq(r, h, n, c, j, l, p, u, G, a.gid)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 66:
                h = f.a5
                n = a.path
                c = a.tid
                j = a.replyType
                l = a.permType
                p = a.devId
                u = a.uid
                hp(r, h, n, c, j, l, p, u, a.gid)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 2
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 70:
                h = f.a5
                n = a.path
                c = a.tid
                j = a.replyType
                l = a.permType
                E = a.value
                p = a.devId
                u = a.uid
                ho(r, h, n, c, j, l, E, p, u, a.gid)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 3
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 23:
                h = f.a5
                c = a.replyType
                j = a.tid
                l = a.fd
                p = a.fileOffset
                g3(r, h, c, j, l, p, a.slices)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 4
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 54:
                h = f.a5
                h.a45.i6 = 1
                c = a.replyType
                j = a.tid
                l = a.fd
                p = a.fileOffset
                g2(r, h, c, j, l, p, a.slices)
                a = r.a0
                c = r.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        f.i4 = 5
                        f = a[c].a[a[c].o - -1]
                        f.a0 = C
                        f.a0o = 0
                        break a
                    }
                    a[c].a1(a, c)
                }
                a = f.a5
                a.a45.i6 = 0
                bH(a)
                break
            case 22:
                h = f.a5
                h.a45.i6 = 1
                c = a.replyType
                j = a.fd
                g1(r, h, c, j, a.value)
                a = r.a0
                c = r.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        f.i4 = 6
                        f = a[c].a[a[c].o - -1]
                        f.a0 = C
                        f.a0o = 0
                        break a
                    }
                    a[c].a1(a, c)
                }
                a = f.a5
                a.a45.i6 = 0
                bH(a)
                break
            case 61:
                h = f.a5
                c = a.replyType
                j = a.tid
                l = a.fd
                g0(h, c, j, l, a.permType)
                break
            case 63:
                h = f.a5
                c = a.replyType
                j = a.tid
                l = a.devId
                n = a.oldPath
                gZ(r, h, c, j, l, n, a.newPath)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 7
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 17:
                h = f.a5
                c = a.replyType
                j = a.tid
                n = a.path
                l = a.devId
                gX(r, h, c, j, n, l, a.parentInodeId)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 8
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 68:
                h = f.a5
                c = a.replyType
                j = a.tid
                n = a.path
                l = a.devId
                gV(r, h, c, j, n, l, a.inodeId)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 9
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 65:
                h = f.a5
                c = a.replyType
                j = a.tid
                l = a.devId
                n = a.oldPath
                gU(r, h, c, j, l, n, a.newPath)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 10
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            case 64:
                h = f.a5
                c = a.replyType
                j = a.tid
                n = a.path
                gT(r, h, c, j, n, a.devId)
                a = r.a0
                c = r.a0o | 0
                if (a === nullArray && c === 0) break
                if (a[c].a0 !== null) {
                    f.i4 = 11
                    f = a[c].a[a[c].o - -1]
                    f.a0 = C
                    f.a0o = 0
                    break a
                }
                a[c].a1(a, c)
                break
            default:
        }
        a = f.a7
        continue a
    }
}
function bp(n, l, m) {
    var f = 0,
        h = null,
        a = 0,
        j = 0,
        c = 0,
        r = 0,
        p = 0
    if ((l[m] & 255) !== 0) {
        a = 0
        while (1) {
            a = (a + 1) | 0
            if ((l[(m + a) | 0] & 255) !== 0) continue
            break
        }
    } else {
        a = 0
    }
    j = m
    a = (m + a) | 0
    f = (a - j) | 0
    if (f >>> 0 > 2147483631) ab()
    c = ((f & -16) + 16) | 0
    h = new Uint8Array((c / 1) | 0)
    n.a2 = h
    n.i0 = ((c << 1) + 1) | 0
    n.i1 = f
    c = (a | 0) === (j | 0) ? 1 : 0
    if (((m + f) | 0 | 0) !== (j | 0)) {
        if (!c)
            if (0 > m) {
                r = ((j ^ -1) + a) | 0
                j = f & 3
                if ((j | 0) !== 0) {
                    a = f
                    c = f
                    p = 0
                    while (1) {
                        c = (c - 1) | 0
                        a = (a - 1) | 0
                        h[c] = l[(m + a) | 0] | 0
                        p = (p + 1) | 0
                        if ((p | 0) !== (j | 0)) continue
                        break
                    }
                } else {
                    a = f
                    c = f
                }
                if (r >>> 0 >= 3)
                    while (1) {
                        h[(((0 + c) | 0) + -1) | 0] = l[(((m + a) | 0) + -1) | 0] | 0
                        h[(((0 + c) | 0) + -2) | 0] = l[(((m + a) | 0) + -2) | 0] | 0
                        h[(((0 + c) | 0) + -3) | 0] = l[(((m + a) | 0) + -3) | 0] | 0
                        c = (c - 4) | 0
                        a = (a - 4) | 0
                        h[c] = l[(m + a) | 0] | 0
                        if (h !== h || 0 !== ((0 + c) | 0)) continue
                        break
                    }
            } else {
                r = ((j ^ -1) + a) | 0
                j = f & 7
                if ((j | 0) !== 0) {
                    p = 0
                    c = 0
                    a = 0
                    while (1) {
                        h[c] = l[(m + a) | 0] | 0
                        p = (p + 1) | 0
                        c = (c + 1) | 0
                        a = (a + 1) | 0
                        if ((p | 0) !== (j | 0)) continue
                        break
                    }
                } else {
                    c = 0
                    a = 0
                }
                if (r >>> 0 >= 7)
                    while (1) {
                        h[c] = l[(m + a) | 0] | 0
                        h[(((0 + c) | 0) + 1) | 0] = l[(((m + a) | 0) + 1) | 0] | 0
                        h[(((0 + c) | 0) + 2) | 0] = l[(((m + a) | 0) + 2) | 0] | 0
                        h[(((0 + c) | 0) + 3) | 0] = l[(((m + a) | 0) + 3) | 0] | 0
                        h[(((0 + c) | 0) + 4) | 0] = l[(((m + a) | 0) + 4) | 0] | 0
                        h[(((0 + c) | 0) + 5) | 0] = l[(((m + a) | 0) + 5) | 0] | 0
                        h[(((0 + c) | 0) + 6) | 0] = l[(((m + a) | 0) + 6) | 0] | 0
                        h[(((0 + c) | 0) + 7) | 0] = l[(((m + a) | 0) + 7) | 0] | 0
                        c = (c + 8) | 0
                        if (h !== h || ((0 + f) | 0) !== ((0 + c) | 0)) {
                            a = (a + 8) | 0
                            continue
                        }
                        break
                    }
            }
    }
    h[f] = 0
}
function hv(E, G, H, K, L) {
    var x = null,
        C = null,
        A = null,
        r = null,
        f = null,
        p = 0,
        u = 0,
        c = null,
        a = 0,
        j = 0,
        n = 0,
        l = 0,
        h = null
    A = xa({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (A = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (A = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
    }).a
    r = A[0]
    r.a0 = rI
    r.a1 = rH
    x = r.a2
    x.a0 = nullArray
    x.a0o = 0
    C = x.a1
    C.i0 = 0
    f = x.a
    p = x.o - 1
    E.a0 = f
    E.a0o = p
    p = G.i41 | 0
    f = H.a2
    u = H.i1 | 0
    c = String()
    a: if ((u | 0) !== 0) {
        a = f[0] | 0
        if ((a & 255) !== 0) {
            n = 0
            while (1) {
                l = a & 255
                if (a << 24 > -16777216) {
                    j = l
                } else if ((a & 255) < 192) {
                    j = ((j << 6) + (l & 63)) | 0
                } else if ((a & 255) < 224) {
                    j = l & 31
                } else if ((a & 255) < 240) {
                    j = l & 15
                } else {
                    j = l & 7
                }
                n = (n + 1) | 0
                b: {
                    if ((n | 0) !== (u | 0)) {
                        a = f[n] | 0
                        if ((a & 192) === 128) break b
                    }
                    if (j >>> 0 < 65536) c = c.concat(String.fromCharCode(j))
                    else {
                        c = c.concat(String.fromCharCode(((j - 65536) >>> 10) | 55296))
                        c = c.concat(String.fromCharCode((j & 1023) | 56320))
                    }
                    if ((n | 0) === (u | 0)) break a
                    a = f[n] | 0
                }
                if ((a & 255) !== 0) continue
                break
            }
        }
    }
    f = K.a2
    u = K.i1 | 0
    h = String()
    a: if ((u | 0) !== 0) {
        a = f[0] | 0
        if ((a & 255) !== 0) {
            n = 0
            while (1) {
                l = a & 255
                if (a << 24 > -16777216) {
                    j = l
                } else if ((a & 255) < 192) {
                    j = ((j << 6) + (l & 63)) | 0
                } else if ((a & 255) < 224) {
                    j = l & 31
                } else if ((a & 255) < 240) {
                    j = l & 15
                } else {
                    j = l & 7
                }
                n = (n + 1) | 0
                b: {
                    if ((n | 0) !== (u | 0)) {
                        a = f[n] | 0
                        if ((a & 192) === 128) break b
                    }
                    if (j >>> 0 < 65536) h = h.concat(String.fromCharCode(j))
                    else {
                        h = h.concat(String.fromCharCode(((j - 65536) >>> 10) | 55296))
                        h = h.concat(String.fromCharCode((j & 1023) | 56320))
                    }
                    if ((n | 0) === (u | 0)) break a
                    a = f[n] | 0
                }
                if ((a & 255) !== 0) continue
                break
            }
        }
    }
    f = {
        type: 15,
        tid: p,
        mountType: c,
        path: h,
        devId: L,
    }
    c = r.a3
    b2(c, G, G.i41 | 0, f, 1)
    f = c.a0
    p = c.a0o | 0
    a: {
        if (f !== nullArray || p !== 0) {
            if (f[p].a0 !== null) {
                r.i4 = 0
                r = f[p].a[f[p].o - -1]
                r.a0 = A
                r.a0o = 0
                break a
            }
        }
        f = f[p].a[f[p].o - -1]
        p = f.a1.i1 | 0
        f = c.a0
        u = c.a0o | 0
        if (f !== nullArray || u !== 0) f[u].a1(f, u)
        C.i0 = 256
        C.i1 = p
        r.a5 = x
        r.a0 = null
        A = x.a0
        p = x.a0o | 0
        ;(A !== nullArray || p !== 0 ? A : $)[A !== nullArray || p !== 0 ? p : aa].a0(A !== nullArray || p !== 0 ? A : $, A !== nullArray || p !== 0 ? p : aa)
    }
}
function ht(a) {}
function rI(j, k) {
    j = j[k]
    var h = 0,
        a = null,
        f = 0,
        c = null
    a = j.a3.a0
    f = j.a3.a0o | 0
    a = a[f].a[a[f].o - -1]
    f = a.a1.i1 | 0
    a = j.a3.a0
    h = j.a3.a0o | 0
    if (a !== nullArray || h !== 0) a[h].a1(a, h)
    a = j.a2
    c = a.a1
    c.i0 = 256
    c.i1 = f
    j.a5 = a
    j.a0 = null
    c = a.a0
    f = a.a0o | 0
    ;(c !== nullArray || f !== 0 ? c : $)[c !== nullArray || f !== 0 ? f : aa].a0(c !== nullArray || f !== 0 ? c : $, c !== nullArray || f !== 0 ? f : aa)
}
function rH(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function b2(l, n, p, r, u) {
    var H = null,
        A = null,
        O = null,
        G = 0,
        M = 0,
        L = 0,
        K = 0,
        a = null,
        E = null,
        c = 0,
        f = null,
        h = 0,
        j = null,
        C = 0,
        x = 0
    H = w$({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (H = {
                i0: 0,
                i1: 0,
            }),
        },
        i3: 0,
        a4: null,
        a5: null,
    }).a
    A = H[0]
    A.a0 = rE
    A.a1 = rD
    a = A.a2
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    E = a.a
    c = a.o - 1
    l.a0 = E
    l.a0o = c
    if (u) {
        a = HEAP32
        c = n.i7 | 0
        a[(0 + c) | 0] = -2
    }
    n.a6.postMessage(r)
    a = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            a1: null,
        },
    }
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    E = n.a48
    f = E.a1
    h = E.a1o | 0
    j = E.a2.a0
    C = E.a2.a0o | 0
    if (h < C) {
        f[h].i0 = p
        f[h].a1 = a
        E.a1 = f
        E.a1o = (h + 1) | 0
        f = f[h]
    } else {
        O = E.a0
        c = E.a0o | 0
        c = intMultiply_1(c, 8)
        h = (intMultiply_1(h, 8) - c) >> 3
        x = (h + 1) | 0
        if (x >>> 0 > 536870911) ab()
        c = (intMultiply_1(C, 8) - c) | 0
        if (c >>> 0 < 2147483640) {
            c >>>= 2
            c = c >>> 0 > x >>> 0 ? c | 0 : x | 0
        } else {
            c = 536870911
        }
        j = Ck(((c << 3) / 8) | 0)
        j[h].i0 = p
        j[h].a1 = a
        a = E.a0
        x = E.a0o | 0
        f = E.a1
        G = E.a1o | 0
        if (f === a && G === x) {
            E.a0 = j
            E.a0o = (0 + h) | 0
            E.a1 = j
            E.a1o = (((0 + h) | 0) + 1) | 0
            E.a2.a0 = j
            E.a2.a0o = (0 + c) | 0
            f = j[h]
        } else {
            C = h
            M = 0
            while (1) {
                L = (C - 1) | 0
                K = (M - 1) | 0
                j[L].i0 = f[(G + K) | 0].i0 | 0
                j[(((0 + C) | 0) + -1) | 0].a1 = f[(((G + M) | 0) + -1) | 0].a1
                if (f !== a || ((G + K) | 0) !== x) {
                    M = K
                    C = L
                    continue
                }
                break
            }
            E.a0 = j
            E.a0o = (0 + L) | 0
            E.a1 = j
            E.a1o = (((0 + h) | 0) + 1) | 0
            E.a2.a0 = j
            E.a2.a0o = (0 + c) | 0
            f = j[h]
        }
    }
    a = f.a1
    A.a4 = a
    A.i3 = 0
    a.a0 = H
    a.a0o = 0
}
function rE(h, i) {
    h = h[i]
    var a = null,
        f = null,
        c = 0
    a = h.a4
    a = a.a1
    f = a.a1
    c = a.i0 | 0
    if ((c & 65535) >= 256) a.i0 = c & 255
    c = f | 0
    a = h.a2
    f = a.a1
    f.i0 = 256
    f.i1 = c
    h.a5 = a
    h.a0 = null
    f = a.a0
    c = a.a0o | 0
    ;(f !== nullArray || c !== 0 ? f : $)[f !== nullArray || c !== 0 ? c : aa].a0(f !== nullArray || c !== 0 ? f : $, f !== nullArray || c !== 0 ? c : aa)
}
function rD(a, b) {}
function rA(bS, bT) {
    var P = 0,
        L = null,
        K = 0,
        H = null,
        G = 0,
        E = null,
        C = 0,
        A = null,
        x = 0,
        u = null,
        r = 0,
        p = null,
        n = 0,
        l = null,
        M = 0,
        j = null,
        O = 0,
        U = null,
        R = 0,
        S = null,
        T = 0,
        bB = 0,
        bR = null,
        V = null,
        h = null,
        c = 0,
        f = null,
        a = null,
        ah = null,
        ay = null,
        am = 0,
        aq = 0,
        aS = 0,
        aY = 0
    V = bS[bT].a3
    switch (bS[bT].i4 & 15) {
        case 0:
            h = V.a0
            c = V.a0o | 0
            h = h[c]
            c = 13
            break
        case 1:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                S = f
                T = c
                c = 11
                break
            }
            c = 12
            break
        case 2:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                U = f
                R = c
                c = 10
                break
            }
            c = 12
            break
        case 3:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                j = f
                O = c
                c = 9
                break
            }
            c = 12
            break
        case 4:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                l = f
                M = c
                c = 8
                break
            }
            c = 12
            break
        case 5:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                p = f
                n = c
                c = 6
                break
            }
            c = 7
            break
        case 6:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                u = f
                r = c
                c = 4
                break
            }
            c = 5
            break
        case 7:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                A = f
                x = c
                c = 3
                break
            }
            c = 12
            break
        case 8:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                E = f
                C = c
                c = 2
                break
            }
            c = 12
            break
        case 9:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                H = f
                G = c
                c = 1
                break
            }
            c = 12
            break
        case 10:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                L = f
                K = c
                c = 0
                break
            }
            c = 12
            break
        case 11:
            f = V.a0
            c = V.a0o | 0
            if (f !== nullArray || c !== 0) {
                P = c
                f = f
                c = -1
                break
            }
            c = 12
            break
        default:
    }
    a: while (1) {
        switch (c | 0) {
            case 0:
                L[K].a1(L, K)
                c = 12
                continue a
            case 1:
                H[G].a1(H, G)
                c = 12
                continue a
            case 2:
                E[C].a1(E, C)
                c = 12
                continue a
            case 3:
                A[x].a1(A, x)
                c = 12
                continue a
            case 4:
                u[r].a1(u, r)
                c = 5
                continue a
            case 5:
                a = bS[bT].a5
                a.a45.i6 = 0
                bH(a)
                c = 12
                continue a
            case 6:
                p[n].a1(p, n)
                c = 7
                continue a
            case 7:
                a = bS[bT].a5
                a.a45.i6 = 0
                bH(a)
                c = 12
                continue a
            case 8:
                l[M].a1(l, M)
                c = 12
                continue a
            case 9:
                j[O].a1(j, O)
                c = 12
                continue a
            case 10:
                U[R].a1(U, R)
                c = 12
                continue a
            case 11:
                S[T].a1(S, T)
                c = 12
                continue a
            case 12:
                bS[bT].a6 = bS[bT].a7
                hs(V, bS[bT].a5.a45)
                h = V.a0
                c = V.a0o | 0
                if (h !== nullArray || c !== 0) {
                    if (h[c].a0 !== null) {
                        bS[bT].i4 = 0
                        V = h[c].a[h[c].o - -1]
                        V.a0 = bS
                        V.a0o = bT
                        break a
                    }
                    h = h[c]
                    c = 13
                    continue a
                }
                h = null
                c = 13
                continue a
            case 13:
                a = h.a[h.o - -1]
                a = a.a1.a1
                bS[bT].a7 = a
                ah = V.a0
                c = V.a0o | 0
                if (ah !== nullArray || c !== 0) ah[c].a1(ah, c)
                switch (a.type | 0) {
                    case 19:
                        ah = bS[bT].a5
                        ay = a.path
                        c = a.tid
                        am = a.replyType
                        aq = a.flags
                        aS = a.permType
                        aY = a.devId
                        bB = a.uid
                        hq(V, ah, ay, c, am, aq, aS, aY, bB, a.gid)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 1
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            S = a
                            T = c
                            c = 11
                            continue a
                        }
                        c = 12
                        continue a
                    case 66:
                        ah = bS[bT].a5
                        ay = a.path
                        c = a.tid
                        am = a.replyType
                        aq = a.permType
                        aS = a.devId
                        aY = a.uid
                        hp(V, ah, ay, c, am, aq, aS, aY, a.gid)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 2
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            U = a
                            R = c
                            c = 10
                            continue a
                        }
                        c = 12
                        continue a
                    case 70:
                        ah = bS[bT].a5
                        ay = a.path
                        c = a.tid
                        am = a.replyType
                        aq = a.permType
                        bR = a.value
                        aS = a.devId
                        aY = a.uid
                        ho(V, ah, ay, c, am, aq, bR, aS, aY, a.gid)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 3
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            j = a
                            O = c
                            c = 9
                            continue a
                        }
                        c = 12
                        continue a
                    case 23:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        aq = a.fd
                        aS = a.fileOffset
                        g3(V, ah, c, am, aq, aS, a.slices)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 4
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            l = a
                            M = c
                            c = 8
                            continue a
                        }
                        c = 12
                        continue a
                    case 54:
                        ah = bS[bT].a5
                        ah.a45.i6 = 1
                        c = a.replyType
                        am = a.tid
                        aq = a.fd
                        aS = a.fileOffset
                        g2(V, ah, c, am, aq, aS, a.slices)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 5
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            p = a
                            n = c
                            c = 6
                            continue a
                        }
                        c = 7
                        continue a
                    case 22:
                        ah = bS[bT].a5
                        ah.a45.i6 = 1
                        c = a.replyType
                        am = a.fd
                        g1(V, ah, c, am, a.value)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 6
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            u = a
                            r = c
                            c = 4
                            continue a
                        }
                        c = 5
                        continue a
                    case 61:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        aq = a.fd
                        g0(ah, c, am, aq, a.permType)
                        c = 12
                        continue a
                    case 63:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        aq = a.devId
                        ay = a.oldPath
                        gZ(V, ah, c, am, aq, ay, a.newPath)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 7
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            A = a
                            x = c
                            c = 3
                            continue a
                        }
                        c = 12
                        continue a
                    case 17:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        ay = a.path
                        aq = a.devId
                        gX(V, ah, c, am, ay, aq, a.parentInodeId)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 8
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            E = a
                            C = c
                            c = 2
                            continue a
                        }
                        c = 12
                        continue a
                    case 68:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        ay = a.path
                        aq = a.devId
                        gV(V, ah, c, am, ay, aq, a.inodeId)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 9
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            H = a
                            G = c
                            c = 1
                            continue a
                        }
                        c = 12
                        continue a
                    case 65:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        aq = a.devId
                        ay = a.oldPath
                        gU(V, ah, c, am, aq, ay, a.newPath)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 10
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            L = a
                            K = c
                            c = 0
                            continue a
                        }
                        c = 12
                        continue a
                    case 64:
                        ah = bS[bT].a5
                        c = a.replyType
                        am = a.tid
                        ay = a.path
                        gT(V, ah, c, am, ay, a.devId)
                        a = V.a0
                        c = V.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                bS[bT].i4 = 11
                                V = a[c].a[a[c].o - -1]
                                V.a0 = bS
                                V.a0o = bT
                                break a
                            }
                            P = c
                            f = a
                            c = -1
                            continue a
                        }
                        c = 12
                        continue a
                    default:
                        c = 12
                        continue a
                }
            default:
                f[P].a1(f, P)
                c = 12
                continue a
        }
        break
    }
}
function rz(h, i) {
    h = h[i]
    var f = null,
        c = null,
        a = 0
    f = h.a3
    a: {
        switch (h.i4 & 15) {
            case 0:
                h.a7 = h.a6
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 1:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 2:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 3:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 4:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 5:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 6:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 7:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 8:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 9:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 10:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            case 11:
                c = f.a0
                a = f.a0o | 0
                if (c !== nullArray || a !== 0) break
                break a
            default:
        }
        c[a].a1(c, a)
    }
}
function hs(r, p) {
    var j = null,
        n = null,
        h = 0,
        x = 0,
        c = null,
        a = null,
        l = null,
        f = 0,
        u = null
    c = wY({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (c = {
                i0: 0,
                a1: null,
            }),
        },
        i3: 0,
        a4: null,
        a5: null,
    }).a
    a = c[0]
    a.a0 = rf
    a.a1 = re
    a.a4 = p
    j = a.a2
    j.a0 = nullArray
    j.a0o = 0
    n = j.a1
    n.i0 = 0
    l = j.a
    f = j.o - 1
    r.a0 = l
    r.a0o = f
    if ((p.i5 | 0) !== 0) {
        c = a.a4
        l = c.a1
        f = c.a1o | 0
        h = c.i4 | 0
        u = l[(f + (h >>> 10)) | 0]
        u = u.d[(u.o + (h & 1023)) | 0]
        c.i5 = ((c.i5 | 0) - 1) | 0
        x = (h + 1) | 0
        c.i4 = x
        if (x >>> 0 >= 2048) {
            c.a1 = l
            c.a1o = (f + 1) | 0
            c.i4 = (h - 1023) | 0
        }
        n.i0 = 256
        n.a1 = u
        a.a5 = j
        a.a0 = null
        c = j.a0
        f = j.a0o | 0
        ;(c !== nullArray || f !== 0 ? c : $)[c !== nullArray || f !== 0 ? f : aa].a0(c !== nullArray || f !== 0 ? c : $, c !== nullArray || f !== 0 ? f : aa)
    } else {
        a.i3 = 0
        a = a.a4
        a.a7.a0 = c
        a.a7.a0o = 0
    }
}
function hq(u, x, A, C, E, G, H, K, L, M) {
    var n = null,
        O = null,
        p = null,
        V = 0,
        U = 0,
        T = 0,
        S = 0,
        R = 0,
        P = 0,
        a = null,
        c = null,
        f = null,
        h = 0,
        l = null,
        j = 0,
        r = 0
    a = new Ax().a
    c = a[0]
    c.a0 = rj
    c.a1 = ri
    c.i8 = K
    c.i7 = H
    c.i6 = G
    c.i5 = E
    c.i4 = C
    c.a3 = x
    n = c.a2
    n.a0 = nullArray
    n.a0o = 0
    f = n.a
    h = n.o - 1
    u.a0 = f
    u.a0o = h
    f = N.a0
    h = N.a0o | 0
    l = f[h]
    if ((l.i2 | 0) !== (K | 0)) {
        j = 0
        while (1) {
            j = (j + 1) | 0
            l = f[(h + j) | 0]
            if ((l.i2 | 0) !== (K | 0)) continue
            break
        }
    }
    if ((l.i1 | 0) === 1) {
        f = l.a5
        O = l.a6
        l = f
    } else {
        O = A
    }
    c.a9 = O
    if (((G & 3) | 0) !== 0) {
        f = ((G & 512) | 0) !== 0 ? iR : iE
        h = ((G & 512) | 0) !== 0 ? 0 : 0
    } else {
        f = iS
        h = 0
    }
    f = z(f, h)
    c.a10 = f
    p = c.a12
    aB(p, l, O, f, L, M)
    f = p.a0
    h = p.a0o | 0
    a: {
        if (f !== nullArray || h !== 0) {
            if (f[h].a0 !== null) {
                c.i13 = 0
                c = f[h].a[f[h].o - -1]
                c.a0 = a
                c.a0o = 0
                break a
            }
        }
        f = f[h].a[f[h].o - -1]
        h = f.a1.i1 | 0
        f = p.a0
        j = p.a0o | 0
        if (f !== nullArray || j !== 0) f[j].a1(f, j)
        a = c.a10
        f = c.a9
        if ((h | 0) < 0)
            a = {
                type: 62,
                tid: c.i4 | 0,
                value: -30,
            }
        else {
            r = c.i6 | 0
            a = ap
            a = a[(0 + h) | 0].fileData
            a.parent
            V = a.inodeId
            U = a.length
            j = a.permType
            T = a.lastModified
            if (((r & 64) | 0) !== 0) {
                if ((a.dirty | 0) !== 0) {
                    j = (c.i7 & 511) | (j & -512)
                    a.permType = j
                }
            }
            r = c.i8 | 0
            S = c.i5 | 0
            R = c.i4 | 0
            P = a.uid
            a = {
                type: S,
                tid: R,
                fd: h,
                devId: r,
                inodeId: V,
                permType: j,
                len: U,
                lastModified: T,
                uid: P,
                gid: a.gid,
            }
        }
        c.a3.a6.postMessage(a)
        c.a11 = n
        c.a0 = null
        a = n.a0
        h = n.a0o | 0
        ;(a !== nullArray || h !== 0 ? a : $)[a !== nullArray || h !== 0 ? h : aa].a0(a !== nullArray || h !== 0 ? a : $, a !== nullArray || h !== 0 ? h : aa)
    }
}
function hp(L, u, x, A, C, E, G, H, K) {
    var r = null,
        j = null,
        c = null,
        f = null,
        a = 0,
        h = null,
        l = null,
        p = 0,
        n = 0
    j = new Ay().a
    c = j[0]
    c.a0 = rn
    c.a1 = rm
    c.i9 = K
    c.i8 = H
    c.i7 = E
    c.i6 = C
    c.i5 = A
    c.a4 = x
    c.a3 = u
    r = c.a2
    r.a0 = nullArray
    r.a0o = 0
    f = r.a
    a = r.o - 1
    L.a0 = f
    L.a0o = a
    h = N.a0
    a = N.a0o | 0
    l = N.a1
    p = N.a1o | 0
    if (h === l && a === p) {
        f = null
    } else {
        n = 0
        while (1) {
            f = h[(a + n) | 0]
            if ((f.i2 | 0) !== (G | 0)) {
                n = (n + 1) | 0
                if (h !== l || ((a + n) | 0) !== p) continue
                f = null
            }
            break
        }
    }
    c.a10 = f
    h = c.a13
    a4(h, f, x)
    f = h.a0
    a = h.a0o | 0
    a: {
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                c.i15 = 0
                c = f[a].a[f[a].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        f = f[a].a[f[a].o - -1]
        f = f.a1.a1
        c.a11 = f
        l = h.a0
        a = h.a0o | 0
        if (l !== nullArray || a !== 0) l[a].a1(l, a)
        if (((f.permType & 16384) | 0) !== 0)
            j = {
                type: c.i6 | 0,
                tid: c.i5 | 0,
                value: -17,
            }
        else {
            f = c.a10
            a = c.i9 | 0
            p = c.i8 | 0
            n = c.i7 | 0
            h = c.a4
            l = c.a14
            hN(l, f, h, n, p, a)
            f = l.a0
            a = l.a0o | 0
            if (f !== nullArray || a !== 0) {
                if (f[a].a0 !== null) {
                    c.i15 = 1
                    c = f[a].a[f[a].o - -1]
                    c.a0 = j
                    c.a0o = 0
                    break a
                }
            }
            f = f[a].a[f[a].o - -1]
            f = f.a1.a1
            h = l.a0
            a = l.a0o | 0
            if (h !== nullArray || a !== 0) h[a].a1(h, a)
            h = c.a4
            a = c.i6 | 0
            p = c.i5 | 0
            j = {
                type: a,
                tid: p,
                value: (((f.exists | 0) !== 5 ? 1 : 0) << 31) >> 31,
            }
        }
        c.a3.a6.postMessage(j)
        c.a12 = r
        c.a0 = null
        j = r.a0
        a = r.a0o | 0
        ;(j !== nullArray || a !== 0 ? j : $)[j !== nullArray || a !== 0 ? a : aa].a0(j !== nullArray || a !== 0 ? j : $, j !== nullArray || a !== 0 ? a : aa)
    }
}
function ho(M, u, x, A, C, E, G, H, K, L) {
    var r = null,
        l = null,
        a = null,
        c = null,
        f = 0,
        h = null,
        n = null,
        j = 0,
        p = 0
    l = new Az().a
    a = l[0]
    a.a0 = rr
    a.a1 = rq
    a.i11 = L
    a.i10 = K
    a.i9 = H
    a.a8 = G
    a.i7 = E
    a.i6 = C
    a.i5 = A
    a.a4 = x
    a.a3 = u
    r = a.a2
    r.a0 = nullArray
    r.a0o = 0
    c = r.a
    f = r.o - 1
    M.a0 = c
    M.a0o = f
    h = N.a0
    f = N.a0o | 0
    n = N.a1
    j = N.a1o | 0
    if (h === n && f === j) {
        c = null
    } else {
        p = 0
        while (1) {
            c = h[(f + p) | 0]
            if ((c.i2 | 0) !== (H | 0)) {
                p = (p + 1) | 0
                if (h !== n || ((f + p) | 0) !== j) continue
                c = null
            }
            break
        }
    }
    h = "s"
    a.a12 = h
    n = a.a17
    aB(n, c, x, h, K, L)
    c = n.a0
    f = n.a0o | 0
    a: {
        if (c !== nullArray || f !== 0) {
            if (c[f].a0 !== null) {
                a.i19 = 0
                a = c[f].a[c[f].o - -1]
                a.a0 = l
                a.a0o = 0
                break a
            }
        }
        c = c[f].a[c[f].o - -1]
        f = c.a1.i1 | 0
        c = n.a0
        j = n.a0o | 0
        if (c !== nullArray || j !== 0) c[j].a1(c, j)
        c = a.a12
        h = a.a4
        j = a.i7 | 0
        c = ap
        c = c[(0 + f) | 0].fileData
        c.parent
        a.i13 = c.inodeId
        a.i14 = c.length
        a.i15 = c.lastModified
        c.permType = j
        c.dirty = 1
        if (((j & 61440) | 0) === 40960) c.chunks = a.a8
        c = a.a18
        aV(c, f)
        h = c.a0
        f = c.a0o | 0
        if (h !== nullArray || f !== 0) {
            if (h[f].a0 !== null) {
                a.i19 = 1
                a = h[f].a[h[f].o - -1]
                a.a0 = l
                a.a0o = 0
                break a
            }
            h[f].a1(h, f)
        }
        l = a.a3
        c = {
            type: a.i6 | 0,
            tid: a.i5 | 0,
            value: a.a8,
            devId: a.i9 | 0,
            inodeId: a.i13 | 0,
            permType: a.i7 | 0,
            len: a.i14 | 0,
            lastModified: a.i15 | 0,
            uid: a.i10 | 0,
            gid: a.i11 | 0,
        }
        l.a6.postMessage(c)
        a.a16 = r
        a.a0 = null
        l = r.a0
        f = r.a0o | 0
        ;(l !== nullArray || f !== 0 ? l : $)[l !== nullArray || f !== 0 ? f : aa].a0(l !== nullArray || f !== 0 ? l : $, l !== nullArray || f !== 0 ? f : aa)
    }
}
function g3(G, E, C, A, x, u, r) {
    var p = null,
        H = -0,
        n = null,
        a = null,
        l = null,
        c = 0,
        h = 0,
        j = 0,
        f = null
    n = new AA().a
    a = n[0]
    a.a0 = rv
    a.a1 = ru
    a.a7 = r
    a.i6 = x
    a.i5 = A
    a.i4 = C
    a.a3 = E
    p = a.a2
    p.a0 = nullArray
    p.a0o = 0
    l = p.a
    c = p.o - 1
    G.a0 = l
    G.a0o = c
    l = ap
    l[(0 + x) | 0].offset = u
    a: {
        if ((r.length | 0) !== 0) {
            l = a.a13
            j = 0
            h = 0
            while (1) {
                a.i10 = j
                a.i9 = h
                a.i8 = c
                f = a.a7
                j = a.i6 | 0
                H = +(h >>> 0)
                h = f[H].bufOffset
                c = f[H].len
                a.i11 = c
                bq(l, j, HEAP8, h, c)
                f = l.a0
                c = l.a0o | 0
                if (f !== nullArray || c !== 0) {
                    if (f[c].a0 !== null) {
                        a.i14 = 0
                        a = f[c].a[f[c].o - -1]
                        a.a0 = n
                        a.a0o = 0
                        break a
                    }
                }
                f = f[c].a[f[c].o - -1]
                h = f.a1.i1 | 0
                f = l.a0
                j = l.a0o | 0
                if (f !== nullArray || j !== 0) f[j].a1(f, j)
                if ((h | 0) < 1) {
                    j = a.i10 | 0
                } else {
                    j = ((a.i10 | 0) + h) | 0
                    if ((h | 0) === (a.i11 | 0)) {
                        h = a.i9 | 0
                        h = (h + 1) | 0
                        if (h >>> 0 < a.a7.length >>> 0) {
                            c = a.i11 | 0
                            continue
                        }
                    }
                }
                break
            }
        } else {
            j = 0
        }
        n = a.a3
        l = {
            type: a.i4 | 0,
            tid: a.i5 | 0,
            value: j,
        }
        n.a6.postMessage(l)
        a.a12 = p
        a.a0 = null
        n = p.a0
        c = p.a0o | 0
        ;(n !== nullArray || c !== 0 ? n : $)[n !== nullArray || c !== 0 ? c : aa].a0(n !== nullArray || c !== 0 ? n : $, n !== nullArray || c !== 0 ? c : aa)
    }
}
function g2(G, E, C, A, x, u, r) {
    var p = null,
        H = -0,
        n = null,
        a = null,
        l = null,
        f = 0,
        c = 0,
        j = 0,
        h = null
    n = new AB().a
    a = n[0]
    a.a0 = pf
    a.a1 = ry
    a.a7 = r
    a.i6 = x
    a.i5 = A
    a.i4 = C
    a.a3 = E
    p = a.a2
    p.a0 = nullArray
    p.a0o = 0
    l = p.a
    f = p.o - 1
    G.a0 = l
    G.a0o = f
    l = ap
    l[(0 + x) | 0].offset = u
    a: {
        if ((r.length | 0) !== 0) {
            l = a.a13
            j = 0
            c = 0
            while (1) {
                a.i10 = j
                a.i9 = c
                a.i8 = f
                h = a.a7
                j = a.i6 | 0
                H = +(c >>> 0)
                c = h[H].bufOffset
                f = h[H].len
                a.i11 = f
                aX(l, j, HEAP8, c, f)
                h = l.a0
                f = l.a0o | 0
                if (h !== nullArray || f !== 0) {
                    if (h[f].a0 !== null) {
                        a.i14 = 0
                        a = h[f].a[h[f].o - -1]
                        a.a0 = n
                        a.a0o = 0
                        break a
                    }
                }
                h = h[f].a[h[f].o - -1]
                c = h.a1.i1 | 0
                h = l.a0
                j = l.a0o | 0
                if (h !== nullArray || j !== 0) h[j].a1(h, j)
                if ((c | 0) < 0) {
                    j = a.i10 | 0
                } else {
                    j = ((a.i10 | 0) + c) | 0
                    if ((c | 0) === (a.i11 | 0)) {
                        c = a.i9 | 0
                        c = (c + 1) | 0
                        if (c >>> 0 < a.a7.length >>> 0) {
                            f = a.i11 | 0
                            continue
                        }
                    }
                }
                break
            }
        } else {
            j = 0
        }
        c = a.i4 | 0
        if ((c | 0) !== 21) {
            n = a.a3
            l = {
                type: c,
                tid: a.i5 | 0,
                value: j,
            }
            n.a6.postMessage(l)
        }
        a.a12 = p
        a.a0 = null
        n = p.a0
        f = p.a0o | 0
        ;(n !== nullArray || f !== 0 ? n : $)[n !== nullArray || f !== 0 ? f : aa].a0(n !== nullArray || f !== 0 ? n : $, n !== nullArray || f !== 0 ? f : aa)
    }
}
function bH(f) {
    var n = null,
        l = 0,
        h = null,
        c = null,
        a = 0,
        j = 0
    h = f.a44
    c = h.a0
    h = h.a1
    a: {
        if (c[0] !== h) {
            a = 0
            while (1) {
                if (c[a].a0.a3(c[a]) | 0) break a
                a = (a + 1) | 0
                if (c[a] !== h) continue
                break
            }
        }
        if (!(pi(f.a45) | 0)) {
            h = f.a47
            c = h.a0
            a = h.a0o | 0
            n = h.a1
            l = h.a1o | 0
            if (c !== n || a !== l) {
                j = 0
                while (1) {
                    c[(a + j) | 0](null)
                    j = (j + 1) | 0
                    if (c !== n || ((a + j) | 0) !== l) continue
                    break
                }
                c = h.a0
                a = h.a0o | 0
            }
            h.a1 = c
            h.a1o = a
        }
    }
}
function g1(x, u, r, p, n) {
    var l = null,
        j = null,
        f = null,
        a = null,
        h = null,
        c = 0
    f = new AC().a
    a = f[0]
    a.a0 = pk
    a.a1 = pj
    a.i5 = n
    a.i4 = r
    a.a3 = u
    l = a.a2
    l.a0 = nullArray
    l.a0o = 0
    h = l.a
    c = l.o - 1
    x.a0 = h
    x.a0o = c
    h = a.a7
    aV(h, p)
    j = h.a0
    c = h.a0o | 0
    a: {
        if (j !== nullArray || c !== 0) {
            if (j[c].a0 !== null) {
                a.i8 = 0
                a = j[c].a[j[c].o - -1]
                a.a0 = f
                a.a0o = 0
                break a
            }
            j[c].a1(j, c)
        }
        f = a.a3
        h = {
            type: a.i4 | 0,
            value: a.i5 | 0,
        }
        f.a6.postMessage(h)
        a.a6 = l
        a.a0 = null
        f = l.a0
        c = l.a0o | 0
        ;(f !== nullArray || c !== 0 ? f : $)[f !== nullArray || c !== 0 ? c : aa].a0(f !== nullArray || c !== 0 ? f : $, f !== nullArray || c !== 0 ? c : aa)
    }
}
function g0(l, j, h, f, c) {
    var a = null
    a = ap
    a = a[(0 + f) | 0].fileData
    a.permType = (a.permType & -512) | (c & 511)
    a.dirty = 1
    if ((j | 0) !== 21) {
        a = {
            type: j,
            tid: h,
            value: 0,
        }
        l.a6.postMessage(a)
    }
}
function gZ(E, C, A, x, u, r, p) {
    var n = null,
        j = null,
        c = null,
        a = null,
        f = 0,
        l = null,
        h = 0
    j = new AD().a
    c = j[0]
    c.a0 = po
    c.a1 = pn
    c.a7 = p
    c.a6 = r
    c.i5 = x
    c.i4 = A
    c.a3 = C
    n = c.a2
    n.a0 = nullArray
    n.a0o = 0
    a = n.a
    f = n.o - 1
    E.a0 = a
    E.a0o = f
    l = N.a0
    f = N.a0o | 0
    a = l[f]
    if ((a.i2 | 0) !== (u | 0)) {
        h = 0
        while (1) {
            h = (h + 1) | 0
            a = l[(f + h) | 0]
            if ((a.i2 | 0) !== (u | 0)) continue
            break
        }
    }
    l = c.a9
    rW(l, a, r, p)
    a = l.a0
    f = l.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i10 = 0
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        f = a.a1.i1 | 0
        a = l.a0
        h = l.a0o | 0
        if (a !== nullArray || h !== 0) a[h].a1(a, h)
        j = c.a7
        a = c.a6
        h = c.i4 | 0
        if ((h | 0) !== 21) {
            j = c.a3
            a = {
                type: h,
                tid: c.i5 | 0,
                value: (((f | 0) === 0 ? 1 : 0) << 31) >> 31,
            }
            j.a6.postMessage(a)
        }
        c.a8 = n
        c.a0 = null
        j = n.a0
        f = n.a0o | 0
        ;(j !== nullArray || f !== 0 ? j : $)[j !== nullArray || f !== 0 ? f : aa].a0(j !== nullArray || f !== 0 ? j : $, j !== nullArray || f !== 0 ? f : aa)
    }
}
function gX(r, u, x, A, C, E, G) {
    var p = null,
        R = 0,
        P = 0,
        O = 0,
        M = 0,
        L = 0,
        K = 0,
        H = 0,
        j = null,
        c = null,
        a = null,
        f = 0,
        h = null,
        l = null,
        n = 0
    j = new AE().a
    c = j[0]
    c.a0 = ps
    c.a1 = pr
    c.i8 = G
    c.i7 = E
    c.a6 = C
    c.i5 = A
    c.i4 = x
    c.a3 = u
    p = c.a2
    p.a0 = nullArray
    p.a0o = 0
    a = p.a
    f = p.o - 1
    r.a0 = a
    r.a0o = f
    h = N.a0
    f = N.a0o | 0
    a = h[f]
    if ((a.i2 | 0) !== (E | 0)) {
        n = 0
        while (1) {
            n = (n + 1) | 0
            a = h[(f + n) | 0]
            if ((a.i2 | 0) !== (E | 0)) continue
            break
        }
    }
    if ((a.i1 | 0) === 1) {
        h = a.a5
        l = h
        h = a.a6
        a = l
    } else {
        h = C
    }
    c.a9 = a
    l = c.a11
    a4(l, a, h)
    a = l.a0
    f = l.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i12 = 0
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        a = a.a1.a1
        h = l.a0
        f = l.a0o | 0
        if (h !== nullArray || f !== 0) h[f].a1(h, f)
        h = c.a9
        f = c.i8 | 0
        n = c.i7 | 0
        j = c.a6
        R = c.i5 | 0
        P = c.i4 | 0
        l = c.a3
        O = h.a0.a1(h) | 0
        a.parent
        M = a.inodeId
        L = a.permType
        K = a.fileLength
        h = a.contents
        H = a.gid
        h = {
            type: P,
            tid: R,
            devId: n,
            inodeId: M,
            permType: L,
            fileSize: K,
            lastModified: 0,
            promoteReadToExec: O,
            path: j,
            parentInodeId: f,
            value: h,
            uid: H,
            gid: a.uid,
        }
        l.a6.postMessage(h)
        c.a10 = p
        c.a0 = null
        j = p.a0
        f = p.a0o | 0
        ;(j !== nullArray || f !== 0 ? j : $)[j !== nullArray || f !== 0 ? f : aa].a0(j !== nullArray || f !== 0 ? j : $, j !== nullArray || f !== 0 ? f : aa)
    }
}
function gV(E, C, A, x, u, r, p) {
    var n = null,
        h = null,
        c = null,
        a = null,
        f = 0,
        j = null,
        l = 0
    h = new AF().a
    c = h[0]
    c.a0 = pw
    c.a1 = pv
    c.i8 = p
    c.i7 = r
    c.a6 = u
    c.i5 = x
    c.i4 = A
    c.a3 = C
    n = c.a2
    n.a0 = nullArray
    n.a0o = 0
    a = n.a
    f = n.o - 1
    E.a0 = a
    E.a0o = f
    j = N.a0
    f = N.a0o | 0
    a = j[f]
    if ((a.i2 | 0) !== (r | 0)) {
        l = 0
        while (1) {
            l = (l + 1) | 0
            a = j[(f + l) | 0]
            if ((a.i2 | 0) !== (r | 0)) continue
            break
        }
    }
    j = c.a10
    hd(j, a, u)
    a = j.a0
    f = j.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i11 = 0
                c = a[f].a[a[f].o - -1]
                c.a0 = h
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        a = a.a1.a1
        h = j.a0
        f = j.a0o | 0
        if (h !== nullArray || f !== 0) h[f].a1(h, f)
        h = c.a6
        h = c.a3
        a = {
            type: c.i4 | 0,
            tid: c.i5 | 0,
            files: a,
            devId: c.i7 | 0,
            inodeId: c.i8 | 0,
        }
        h.a6.postMessage(a)
        c.a9 = n
        c.a0 = null
        h = n.a0
        f = n.a0o | 0
        ;(h !== nullArray || f !== 0 ? h : $)[h !== nullArray || f !== 0 ? f : aa].a0(h !== nullArray || f !== 0 ? h : $, h !== nullArray || f !== 0 ? f : aa)
    }
}
function gU(E, C, A, x, u, r, p) {
    var n = null,
        j = null,
        c = null,
        a = null,
        f = 0,
        l = null,
        h = 0
    j = new AG().a
    c = j[0]
    c.a0 = pA
    c.a1 = pz
    c.a7 = p
    c.a6 = r
    c.i5 = x
    c.i4 = A
    c.a3 = C
    n = c.a2
    n.a0 = nullArray
    n.a0o = 0
    a = n.a
    f = n.o - 1
    E.a0 = a
    E.a0o = f
    l = N.a0
    f = N.a0o | 0
    a = l[f]
    if ((a.i2 | 0) !== (u | 0)) {
        h = 0
        while (1) {
            h = (h + 1) | 0
            a = l[(f + h) | 0]
            if ((a.i2 | 0) !== (u | 0)) continue
            break
        }
    }
    l = c.a9
    rQ(l, a, r, p)
    a = l.a0
    f = l.a0o | 0
    a: {
        if (a !== nullArray || f !== 0) {
            if (a[f].a0 !== null) {
                c.i10 = 0
                c = a[f].a[a[f].o - -1]
                c.a0 = j
                c.a0o = 0
                break a
            }
        }
        a = a[f].a[a[f].o - -1]
        f = a.a1.i1 | 0
        a = l.a0
        h = l.a0o | 0
        if (a !== nullArray || h !== 0) a[h].a1(a, h)
        j = c.a7
        a = c.a6
        h = c.i4 | 0
        if ((h | 0) !== 21) {
            j = c.a3
            a = {
                type: h,
                tid: c.i5 | 0,
                value: (((f | 0) === 0 ? 1 : 0) << 31) >> 31,
            }
            j.a6.postMessage(a)
        }
        c.a8 = n
        c.a0 = null
        j = n.a0
        f = n.a0o | 0
        ;(j !== nullArray || f !== 0 ? j : $)[j !== nullArray || f !== 0 ? f : aa].a0(j !== nullArray || f !== 0 ? j : $, j !== nullArray || f !== 0 ? f : aa)
    }
}
function gT(G, E, C, A, x, u) {
    var r = null,
        h = null,
        f = null,
        a = null,
        c = 0,
        j = null,
        n = null,
        l = 0,
        p = 0
    h = new AH().a
    f = h[0]
    f.a0 = pE
    f.a1 = pD
    f.a6 = x
    f.i5 = A
    f.i4 = C
    f.a3 = E
    r = f.a2
    r.a0 = nullArray
    r.a0o = 0
    a = r.a
    c = r.o - 1
    G.a0 = a
    G.a0o = c
    j = N.a0
    c = N.a0o | 0
    n = N.a1
    l = N.a1o | 0
    if (j === n && c === l) {
        a = null
    } else {
        p = 0
        while (1) {
            a = j[(c + p) | 0]
            if ((a.i2 | 0) !== (u | 0)) {
                p = (p + 1) | 0
                if (j !== n || ((c + p) | 0) !== l) continue
                a = null
            }
            break
        }
    }
    f.a7 = a
    j = f.a9
    a4(j, a, x)
    a = j.a0
    c = j.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i11 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        a = a.a1.a1
        n = j.a0
        c = j.a0o | 0
        if (n !== nullArray || c !== 0) n[c].a1(n, c)
        b: {
            if ((a.permType | 0) !== 0) {
                a = f.a7
                j = f.a6
                n = f.a10
                c2(n, a, j)
                a = n.a0
                c = n.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        f.i11 = 1
                        f = a[c].a[a[c].o - -1]
                        f.a0 = h
                        f.a0o = 0
                        break a
                    }
                }
                a = a[c].a[a[c].o - -1]
                c = a.a1.i1 | 0
                a = n.a0
                l = n.a0o | 0
                if (a !== nullArray || l !== 0) a[l].a1(a, l)
                h = f.a6
                l = f.i4 | 0
                if ((l | 0) === 21) break b
                h = {
                    type: l,
                    tid: f.i5 | 0,
                    value: (((c | 0) === 0 ? 1 : 0) << 31) >> 31,
                }
            } else
                h = {
                    type: f.i4 | 0,
                    tid: f.i5 | 0,
                    value: -2,
                }
            f.a3.a6.postMessage(h)
        }
        f.a8 = r
        f.a0 = null
        h = r.a0
        c = r.a0o | 0
        ;(h !== nullArray || c !== 0 ? h : $)[h !== nullArray || c !== 0 ? c : aa].a0(h !== nullArray || c !== 0 ? h : $, h !== nullArray || c !== 0 ? c : aa)
    }
}
function pE(l, m) {
    var f = null,
        a = null,
        c = 0,
        j = 0,
        h = null
    f = l[m].a10
    a: {
        b: {
            c: {
                if ((l[m].i11 & 3) !== 0) {
                    a = f.a0
                    c = f.a0o | 0
                    a = a[c]
                } else {
                    a = l[m].a9.a0
                    c = l[m].a9.a0o | 0
                    a = a[c].a[a[c].o - -1]
                    a = a.a1.a1
                    h = l[m].a9.a0
                    c = l[m].a9.a0o | 0
                    if (h !== nullArray || c !== 0) h[c].a1(h, c)
                    if ((a.permType | 0) === 0) {
                        f = {
                            type: l[m].i4 | 0,
                            tid: l[m].i5 | 0,
                            value: -2,
                        }
                        break c
                    }
                    a = l[m].a7
                    h = l[m].a6
                    c2(f, a, h)
                    a = f.a0
                    c = f.a0o | 0
                    if (a !== nullArray || c !== 0) {
                        if (a[c].a0 !== null) {
                            l[m].i11 = 1
                            f = a[c].a[a[c].o - -1]
                            f.a0 = l
                            f.a0o = m
                            break a
                        }
                        a = a[c]
                    } else {
                        a = null
                    }
                }
                a = a.a[a.o - -1]
                c = a.a1.i1 | 0
                a = f.a0
                j = f.a0o | 0
                if (a !== nullArray || j !== 0) a[j].a1(a, j)
                f = l[m].a6
                j = l[m].i4 | 0
                if ((j | 0) === 21) break b
                f = {
                    type: j,
                    tid: l[m].i5 | 0,
                    value: (((c | 0) === 0 ? 1 : 0) << 31) >> 31,
                }
            }
            l[m].a3.a6.postMessage(f)
        }
        f = l[m].a2
        l[m].a8 = f
        l[m].a0 = null
        a = f.a0
        c = f.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
    }
}
function pD(f, g) {
    f = f[g]
    var a = null,
        c = 0
    if (f.a0 !== null)
        if ((f.i11 & 3) !== 0) {
            a = f.a10.a0
            c = f.a10.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a6
        } else {
            a = f.a9.a0
            c = f.a9.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
        }
}
function pA(j, k) {
    j = j[k]
    var a = null,
        h = 0,
        f = 0,
        c = null
    a = j.a9.a0
    h = j.a9.a0o | 0
    a = a[h].a[a[h].o - -1]
    h = a.a1.i1 | 0
    a = j.a9.a0
    f = j.a9.a0o | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = j.a7
    c = j.a6
    f = j.i4 | 0
    if ((f | 0) !== 21) {
        a = j.a3
        c = {
            type: f,
            tid: j.i5 | 0,
            value: (((h | 0) === 0 ? 1 : 0) << 31) >> 31,
        }
        a.a6.postMessage(c)
    }
    a = j.a2
    j.a8 = a
    j.a0 = null
    c = a.a0
    h = a.a0o | 0
    ;(c !== nullArray || h !== 0 ? c : $)[c !== nullArray || h !== 0 ? h : aa].a0(c !== nullArray || h !== 0 ? c : $, c !== nullArray || h !== 0 ? h : aa)
}
function pz(f, g) {
    f = f[g]
    var c = 0,
        h = null,
        a = null
    if (f.a0 !== null) {
        a = f.a9.a0
        c = f.a9.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a7
        h = f.a6
    }
}
function pw(h, i) {
    h = h[i]
    var c = null,
        f = 0,
        a = null
    c = h.a10.a0
    f = h.a10.a0o | 0
    c = c[f].a[c[f].o - -1]
    c = c.a1.a1
    a = h.a10.a0
    f = h.a10.a0o | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = h.a6
    a = h.a3
    c = {
        type: h.i4 | 0,
        tid: h.i5 | 0,
        files: c,
        devId: h.i7 | 0,
        inodeId: h.i8 | 0,
    }
    a.a6.postMessage(c)
    c = h.a2
    h.a9 = c
    h.a0 = null
    a = c.a0
    f = c.a0o | 0
    ;(a !== nullArray || f !== 0 ? a : $)[a !== nullArray || f !== 0 ? f : aa].a0(a !== nullArray || f !== 0 ? a : $, a !== nullArray || f !== 0 ? f : aa)
}
function pv(f, g) {
    f = f[g]
    var c = 0,
        a = null
    if (f.a0 !== null) {
        a = f.a10.a0
        c = f.a10.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a6
    }
}
function ps(j, k) {
    j = j[k]
    var c = null,
        E = 0,
        C = 0,
        A = 0,
        x = null,
        u = 0,
        r = 0,
        p = 0,
        n = 0,
        l = 0,
        a = null,
        f = 0,
        h = null
    a = j.a11.a0
    f = j.a11.a0o | 0
    a = a[f].a[a[f].o - -1]
    c = a.a1.a1
    a = j.a11.a0
    f = j.a11.a0o | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = j.a9
    f = j.i8 | 0
    E = j.i7 | 0
    h = j.a6
    C = j.i5 | 0
    A = j.i4 | 0
    x = j.a3
    u = a.a0.a1(a) | 0
    c.parent
    r = c.inodeId
    p = c.permType
    n = c.fileLength
    a = c.contents
    l = c.gid
    a = {
        type: A,
        tid: C,
        devId: E,
        inodeId: r,
        permType: p,
        fileSize: n,
        lastModified: 0,
        promoteReadToExec: u,
        path: h,
        parentInodeId: f,
        value: a,
        uid: l,
        gid: c.uid,
    }
    x.a6.postMessage(a)
    a = j.a2
    j.a10 = a
    j.a0 = null
    h = a.a0
    f = a.a0o | 0
    ;(h !== nullArray || f !== 0 ? h : $)[h !== nullArray || f !== 0 ? f : aa].a0(h !== nullArray || f !== 0 ? h : $, h !== nullArray || f !== 0 ? f : aa)
}
function pr(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a11.a0
        a = f.a11.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function po(j, k) {
    j = j[k]
    var a = null,
        h = 0,
        f = 0,
        c = null
    a = j.a9.a0
    h = j.a9.a0o | 0
    a = a[h].a[a[h].o - -1]
    h = a.a1.i1 | 0
    a = j.a9.a0
    f = j.a9.a0o | 0
    if (a !== nullArray || f !== 0) a[f].a1(a, f)
    a = j.a7
    c = j.a6
    f = j.i4 | 0
    if ((f | 0) !== 21) {
        a = j.a3
        c = {
            type: f,
            tid: j.i5 | 0,
            value: (((h | 0) === 0 ? 1 : 0) << 31) >> 31,
        }
        a.a6.postMessage(c)
    }
    a = j.a2
    j.a8 = a
    j.a0 = null
    c = a.a0
    h = a.a0o | 0
    ;(c !== nullArray || h !== 0 ? c : $)[c !== nullArray || h !== 0 ? h : aa].a0(c !== nullArray || h !== 0 ? c : $, c !== nullArray || h !== 0 ? h : aa)
}
function pn(f, g) {
    f = f[g]
    var c = 0,
        h = null,
        a = null
    if (f.a0 !== null) {
        a = f.a9.a0
        c = f.a9.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a7
        h = f.a6
    }
}
function pk(h, i) {
    h = h[i]
    var a = null,
        c = 0,
        f = null
    a = h.a7.a0
    c = h.a7.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = h.a3
    f = {
        type: h.i4 | 0,
        value: h.i5 | 0,
    }
    a.a6.postMessage(f)
    a = h.a2
    h.a6 = a
    h.a0 = null
    f = a.a0
    c = a.a0o | 0
    ;(f !== nullArray || c !== 0 ? f : $)[f !== nullArray || c !== 0 ? c : aa].a0(f !== nullArray || c !== 0 ? f : $, f !== nullArray || c !== 0 ? c : aa)
}
function pj(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a7.a0
        a = f.a7.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function pi(p) {
    var j = null,
        h = 0,
        n = 0,
        u = null,
        f = null,
        c = 0,
        a = 0,
        l = null,
        r = 0
    j = p.a1
    h = p.a1o | 0
    f = p.a2
    c = p.a2o | 0
    if (f !== j || c !== h) {
        c = p.i4 | 0
        a = c >>> 10
        f = j[(h + a) | 0]
        n = ((p.i5 | 0) + c) | 0
        u = j[(h + (n >>> 10)) | 0]
        if (f.d !== u.d || ((f.o + (c & 1023)) | 0) !== ((u.o + (n & 1023)) | 0)) {
            r = c
            c = (f.o + (r & 1023)) | 0
            f = f.d
            while (1) {
                l = f[c]
                if ((l.type | 0) === 54) return 1 | 0
                if ((l.type | 0) === 22) return 1 | 0
                l = j[(h + a) | 0]
                if (((intMultiply_1((c + 1) | 0, 4) - intMultiply_1(l.o, 4)) | 0) === 4096) {
                    a = (a + 1) | 0
                    f = j[(h + a) | 0]
                    c = f.o
                    f = f.d
                } else {
                    f = f
                    c = (c + 1) | 0
                }
                if (f !== u.d || c !== ((u.o + (n & 1023)) | 0)) continue
                break
            }
        }
    }
    return ((p.i6 & 255) !== 0 ? 1 : 0) | 0
}
function pf(n, o) {
    var l = -0,
        j = null,
        a = null,
        c = 0,
        h = 0,
        f = 0
    j = n[o].a13
    a = j.a0
    c = j.a0o | 0
    a = a[c]
    a: {
        while (1) {
            a = a.a[a.o - -1]
            h = a.a1.i1 | 0
            a = j.a0
            c = j.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            if ((h | 0) < 0) {
                c = n[o].i10 | 0
            } else {
                c = ((n[o].i10 | 0) + h) | 0
                if ((h | 0) === (n[o].i11 | 0)) {
                    f = n[o].i9 | 0
                    a = n[o].a7
                    f = (f + 1) | 0
                    if (f >>> 0 < a.length >>> 0) {
                        n[o].i10 = c
                        n[o].i9 = f
                        n[o].i8 = h
                        c = n[o].i6 | 0
                        l = +(f >>> 0)
                        f = a[l].bufOffset
                        h = a[l].len
                        n[o].i11 = h
                        aX(j, c, HEAP8, f, h)
                        a = j.a0
                        c = j.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                n[o].i14 = 0
                                j = a[c].a[a[c].o - -1]
                                j.a0 = n
                                j.a0o = o
                                break a
                            }
                        }
                        a = a[c]
                        continue
                    }
                }
            }
            break
        }
        f = n[o].i4 | 0
        if ((f | 0) !== 21) {
            j = n[o].a3
            a = {
                type: f,
                tid: n[o].i5 | 0,
                value: c,
            }
            j.a6.postMessage(a)
        }
        j = n[o].a2
        n[o].a12 = j
        n[o].a0 = null
        a = j.a0
        c = j.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
    }
}
function ry(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a13.a0
        a = f.a13.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function rv(n, o) {
    var l = -0,
        h = null,
        a = null,
        c = 0,
        f = 0,
        j = 0
    h = n[o].a13
    a = h.a0
    c = h.a0o | 0
    a = a[c]
    a: {
        while (1) {
            a = a.a[a.o - -1]
            f = a.a1.i1 | 0
            a = h.a0
            c = h.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            if ((f | 0) < 1) {
                c = n[o].i10 | 0
            } else {
                c = ((n[o].i10 | 0) + f) | 0
                if ((f | 0) === (n[o].i11 | 0)) {
                    j = n[o].i9 | 0
                    a = n[o].a7
                    j = (j + 1) | 0
                    if (j >>> 0 < a.length >>> 0) {
                        n[o].i10 = c
                        n[o].i9 = j
                        n[o].i8 = f
                        c = n[o].i6 | 0
                        l = +(j >>> 0)
                        j = a[l].bufOffset
                        f = a[l].len
                        n[o].i11 = f
                        bq(h, c, HEAP8, j, f)
                        a = h.a0
                        c = h.a0o | 0
                        if (a !== nullArray || c !== 0) {
                            if (a[c].a0 !== null) {
                                n[o].i14 = 0
                                h = a[c].a[a[c].o - -1]
                                h.a0 = n
                                h.a0o = o
                                break a
                            }
                        }
                        a = a[c]
                        continue
                    }
                }
            }
            break
        }
        h = n[o].a3
        a = {
            type: n[o].i4 | 0,
            tid: n[o].i5 | 0,
            value: c,
        }
        h.a6.postMessage(a)
        h = n[o].a2
        n[o].a12 = h
        n[o].a0 = null
        a = h.a0
        c = h.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
    }
}
function ru(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a13.a0
        a = f.a13.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function rr(j, k) {
    var l = null,
        f = null,
        a = null,
        c = 0,
        h = 0
    f = j[k].a18
    a: {
        b: {
            if ((j[k].i19 & 3) !== 0) {
                a = f.a0
                c = f.a0o | 0
                if (a === nullArray && c === 0) break b
                f = a
                c = c
            } else {
                a = j[k].a17.a0
                c = j[k].a17.a0o | 0
                a = a[c].a[a[c].o - -1]
                c = a.a1.i1 | 0
                a = j[k].a17.a0
                h = j[k].a17.a0o | 0
                if (a !== nullArray || h !== 0) a[h].a1(a, h)
                a = j[k].a12
                l = j[k].a4
                h = j[k].i7 | 0
                a = ap
                a = a[(0 + c) | 0].fileData
                a.parent
                j[k].i13 = a.inodeId
                j[k].i14 = a.length
                j[k].i15 = a.lastModified
                a.permType = h
                a.dirty = 1
                if (((h & 61440) | 0) === 40960) a.chunks = j[k].a8
                aV(f, c)
                a = f.a0
                c = f.a0o | 0
                if (a === nullArray && c === 0) break b
                if (a[c].a0 !== null) {
                    j[k].i19 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = j
                    f.a0o = k
                    break a
                }
                f = a
                c = c
            }
            f[c].a1(f, c)
        }
        f = j[k].a3
        a = {
            type: j[k].i6 | 0,
            tid: j[k].i5 | 0,
            value: j[k].a8,
            devId: j[k].i9 | 0,
            inodeId: j[k].i13 | 0,
            permType: j[k].i7 | 0,
            len: j[k].i14 | 0,
            lastModified: j[k].i15 | 0,
            uid: j[k].i10 | 0,
            gid: j[k].i11 | 0,
        }
        f.a6.postMessage(a)
        f = j[k].a2
        j[k].a16 = f
        j[k].a0 = null
        a = f.a0
        c = f.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
    }
}
function rq(f, g) {
    f = f[g]
    var h = null,
        a = null,
        c = 0
    if (f.a0 !== null)
        if ((f.i19 & 3) !== 0) {
            a = f.a18.a0
            c = f.a18.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
        } else {
            a = f.a17.a0
            c = f.a17.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a12
            h = f.a4
        }
}
function rn(l, m) {
    var n = 0,
        f = null,
        a = null,
        c = 0,
        h = null,
        j = 0
    f = l[m].a14
    a: {
        b: {
            if ((l[m].i15 & 3) !== 0) {
                a = f.a0
                c = f.a0o | 0
                a = a[c]
            } else {
                a = l[m].a13.a0
                c = l[m].a13.a0o | 0
                a = a[c].a[a[c].o - -1]
                a = a.a1.a1
                l[m].a11 = a
                h = l[m].a13.a0
                c = l[m].a13.a0o | 0
                if (h !== nullArray || c !== 0) h[c].a1(h, c)
                if (((a.permType & 16384) | 0) !== 0) {
                    f = {
                        type: l[m].i6 | 0,
                        tid: l[m].i5 | 0,
                        value: -17,
                    }
                    break b
                }
                a = l[m].a10
                c = l[m].i9 | 0
                j = l[m].i8 | 0
                n = l[m].i7 | 0
                h = l[m].a4
                hN(f, a, h, n, j, c)
                a = f.a0
                c = f.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        l[m].i15 = 1
                        f = a[c].a[a[c].o - -1]
                        f.a0 = l
                        f.a0o = m
                        break a
                    }
                    a = a[c]
                } else {
                    a = null
                }
            }
            a = a.a[a.o - -1]
            a = a.a1.a1
            h = f.a0
            c = f.a0o | 0
            if (h !== nullArray || c !== 0) h[c].a1(h, c)
            h = l[m].a4
            c = l[m].i6 | 0
            j = l[m].i5 | 0
            f = {
                type: c,
                tid: j,
                value: (((a.exists | 0) !== 5 ? 1 : 0) << 31) >> 31,
            }
        }
        l[m].a3.a6.postMessage(f)
        f = l[m].a2
        l[m].a12 = f
        l[m].a0 = null
        a = f.a0
        c = f.a0o | 0
        ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
    }
}
function rm(f, g) {
    f = f[g]
    var a = null,
        c = 0
    if (f.a0 !== null)
        if ((f.i15 & 3) !== 0) {
            a = f.a14.a0
            c = f.a14.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a4
        } else {
            a = f.a13.a0
            c = f.a13.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
        }
}
function rj(l, m) {
    l = l[m]
    var A = 0,
        x = 0,
        u = 0,
        r = 0,
        p = 0,
        n = 0,
        a = null,
        f = 0,
        c = 0,
        h = null,
        j = 0
    a = l.a12.a0
    f = l.a12.a0o | 0
    a = a[f].a[a[f].o - -1]
    f = a.a1.i1 | 0
    a = l.a12.a0
    c = l.a12.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = l.a10
    h = l.a9
    if ((f | 0) < 0)
        a = {
            type: 62,
            tid: l.i4 | 0,
            value: -30,
        }
    else {
        j = l.i6 | 0
        a = ap
        a = a[(0 + f) | 0].fileData
        a.parent
        A = a.inodeId
        x = a.length
        c = a.permType
        u = a.lastModified
        if (((j & 64) | 0) !== 0) {
            if ((a.dirty | 0) !== 0) {
                c = (l.i7 & 511) | (c & -512)
                a.permType = c
            }
        }
        j = l.i8 | 0
        r = l.i5 | 0
        p = l.i4 | 0
        n = a.uid
        a = {
            type: r,
            tid: p,
            fd: f,
            devId: j,
            inodeId: A,
            permType: c,
            len: x,
            lastModified: u,
            uid: n,
            gid: a.gid,
        }
    }
    l.a3.a6.postMessage(a)
    a = l.a2
    l.a11 = a
    l.a0 = null
    h = a.a0
    f = a.a0o | 0
    ;(h !== nullArray || f !== 0 ? h : $)[h !== nullArray || f !== 0 ? f : aa].a0(h !== nullArray || f !== 0 ? h : $, h !== nullArray || f !== 0 ? f : aa)
}
function ri(f, g) {
    f = f[g]
    var c = 0,
        h = null,
        a = null
    if (f.a0 !== null) {
        a = f.a12.a0
        c = f.a12.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        a = f.a10
        h = f.a9
    }
}
function rf(n, o) {
    n = n[o]
    var j = 0,
        l = 0,
        a = null,
        c = 0,
        h = null,
        f = null
    a = n.a4
    c = a.a7.a1.i0 | 0
    if ((c & 65535) >= 256) {
        a.a7.a1.i0 = c & 255
        a = n.a4
    }
    h = a.a1
    c = a.a1o | 0
    j = a.i4 | 0
    f = h[(c + (j >>> 10)) | 0]
    f = f.d[(f.o + (j & 1023)) | 0]
    a.i5 = ((a.i5 | 0) - 1) | 0
    l = (j + 1) | 0
    a.i4 = l
    if (l >>> 0 >= 2048) {
        a.a1 = h
        a.a1o = (c + 1) | 0
        a.i4 = (j - 1023) | 0
    }
    a = n.a2
    h = a.a1
    h.i0 = 256
    h.a1 = f
    n.a5 = a
    n.a0 = null
    f = a.a0
    c = a.a0o | 0
    ;(f !== nullArray || c !== 0 ? f : $)[f !== nullArray || c !== 0 ? c : aa].a0(f !== nullArray || c !== 0 ? f : $, f !== nullArray || c !== 0 ? c : aa)
}
function re(a, b) {}
function rb(h, i) {
    h = h[i]
    var f = null,
        c = null,
        a = 0
    c = h.a4.a0
    a = h.a4.a0o | 0
    c = h.a4.a0
    a = h.a4.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    c = h.a2
    h.a3 = c
    h.a0 = null
    f = c.a0
    a = c.a0o | 0
    ;(f !== nullArray || a !== 0 ? f : $)[f !== nullArray || a !== 0 ? a : aa].a0(f !== nullArray || a !== 0 ? f : $, f !== nullArray || a !== 0 ? a : aa)
}
function ra(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a4.a0
        a = f.a4.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function hi(x, A, C, E) {
    var L = null,
        n = null,
        M = null,
        u = 0,
        K = 0,
        H = 0,
        G = 0,
        a = null,
        r = null,
        c = 0,
        f = null,
        h = 0,
        j = null,
        p = 0,
        l = 0
    L = wd({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (L = {
                i0: 0,
                a1: null,
            }),
        },
        i3: 0,
        a4: null,
        a5: null,
    }).a
    n = L[0]
    n.a0 = q9
    n.a1 = q8
    a = n.a2
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    r = a.a
    c = a.o - 1
    x.a0 = r
    x.a0o = c
    a = HEAP32
    c = A.i7 | 0
    a[(0 + c) | 0] = -2
    A.a6.postMessage(E)
    a = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            a1: null,
        },
    }
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    r = A.a48
    f = r.a1
    h = r.a1o | 0
    j = r.a2.a0
    p = r.a2.a0o | 0
    if (h < p) {
        f[h].i0 = C
        f[h].a1 = a
        r.a1 = f
        r.a1o = (h + 1) | 0
        f = f[h]
    } else {
        M = r.a0
        c = r.a0o | 0
        c = intMultiply_1(c, 8)
        h = (intMultiply_1(h, 8) - c) >> 3
        l = (h + 1) | 0
        if (l >>> 0 > 536870911) ab()
        c = (intMultiply_1(p, 8) - c) | 0
        if (c >>> 0 < 2147483640) {
            c >>>= 2
            c = c >>> 0 > l >>> 0 ? c | 0 : l | 0
        } else {
            c = 536870911
        }
        j = Ck(((c << 3) / 8) | 0)
        j[h].i0 = C
        j[h].a1 = a
        a = r.a0
        l = r.a0o | 0
        f = r.a1
        u = r.a1o | 0
        if (f === a && u === l) {
            r.a0 = j
            r.a0o = (0 + h) | 0
            r.a1 = j
            r.a1o = (((0 + h) | 0) + 1) | 0
            r.a2.a0 = j
            r.a2.a0o = (0 + c) | 0
            f = j[h]
        } else {
            p = h
            K = 0
            while (1) {
                H = (p - 1) | 0
                G = (K - 1) | 0
                j[H].i0 = f[(u + G) | 0].i0 | 0
                j[(((0 + p) | 0) + -1) | 0].a1 = f[(((u + K) | 0) + -1) | 0].a1
                if (f !== a || ((u + G) | 0) !== l) {
                    K = G
                    p = H
                    continue
                }
                break
            }
            r.a0 = j
            r.a0o = (0 + H) | 0
            r.a1 = j
            r.a1o = (((0 + h) | 0) + 1) | 0
            r.a2.a0 = j
            r.a2.a0o = (0 + c) | 0
            f = j[h]
        }
    }
    a = f.a1
    n.a4 = a
    n.i3 = 0
    a.a0 = L
    a.a0o = 0
}
function q9(j, k) {
    j = j[k]
    var c = null,
        h = null,
        a = 0,
        f = null
    c = j.a4
    c = c.a1
    h = c.a1
    a = c.i0 | 0
    if ((a & 65535) >= 256) c.i0 = a & 255
    c = j.a2
    f = c.a1
    if (h !== null) {
        h = h
        f.i0 = 256
        f.a1 = h
    } else {
        a = f.i0 | 0
        f.a1 = null
        if ((a & 65535) < 256) f.i0 = a | 256
    }
    j.a5 = c
    j.a0 = null
    f = c.a0
    a = c.a0o | 0
    ;(f !== nullArray || a !== 0 ? f : $)[f !== nullArray || a !== 0 ? a : aa].a0(f !== nullArray || a !== 0 ? f : $, f !== nullArray || a !== 0 ? a : aa)
}
function q8(a, b) {}
function q5(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    f = h.a3.a0
    c = h.a3.a0o | 0
    f = f[c].a[f[c].o - -1]
    c = f.a1.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    a = h.a3.a0
    c = h.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
}
function q4(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function CJ(f, c) {
    var a = null
    a = c.SIGUSR1
    if (a !== undefined) f.a1[10] = a
}
function q3(h, f) {
    var c = null,
        a = null
    h.i0 = f
    c = undefined
    a = h.a1
    a[0] = c
    a[1] = c
    a[2] = c
    a[3] = c
    a[4] = c
    a[5] = c
    a[6] = c
    a[7] = c
    a[8] = c
    a[9] = c
    a[10] = c
    a[11] = c
    a[12] = c
    a[13] = c
    a[14] = c
    a[15] = c
    a[16] = c
    a[17] = c
    a[18] = c
    a[19] = c
    a[20] = c
    a[21] = c
    a[22] = c
    a[23] = c
    a[24] = c
    a[25] = c
    a[26] = c
    a[27] = c
    a[28] = c
    a[29] = c
    a[30] = c
    a[31] = c
}
function CI(f) {
    var c = null,
        a = null
    c = f.a2
    if (c.a8 === null) {
        a = {
            type: 84,
            tid: f.i0 | 0,
            arg0: f.i1 | 0,
        }
        c.a6.postMessage(a)
    }
    f.a2 = null
}
function CH(n) {
    var j = null,
        f = null,
        h = null,
        l = null,
        c = null,
        a = 0
    j = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(j)
    h = j.a1
    l = v7({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        a5: null,
    }).a
    f = l[0]
    f.a0 = kd
    f.a1 = kc
    f.a5 = h
    h = f.a3
    kb(h, n.a2, n.i0 | 0, n.i1 | 0)
    c = h.a0
    a = h.a0o | 0
    a: {
        if (c !== nullArray || a !== 0) {
            if (c[a].a0 !== null) {
                f.i4 = 0
                h = c[a].a[c[a].o - -1]
                h.a0 = l
                h.a0o = 0
                break a
            }
        }
        c = c[a].a[c[a].o - -1]
        c = c.a1.a1
        l = h.a0
        a = h.a0o | 0
        if (l !== nullArray || a !== 0) l[a].a1(l, a)
        f.a5(c)
    }
    h = j.a0
    return h
}
function CG(c, a) {
    jz(c.a26, a)
}
function CF(a) {
    return a.a46.up()
}
function CE(r, p, n, l) {
    var h = -0,
        j = null,
        c = null,
        f = null,
        a = null
    c = {
        alpha: false,
    }
    f = "2d"
    a = [null]
    a[0] = c
    r.a32 = p.getContext(f, c)
    c = a[0]
    if (r.a31 !== null) {
        c = document.body
        c.removeChild(r.a33)
        c = r.a31
        a = "mousemove"
        c.removeEventListener(a, r.a34)
        c = r.a31
        a = "mousedown"
        c.removeEventListener(a, r.a34)
        c = r.a31
        a = "mouseup"
        c.removeEventListener(a, r.a34)
        c = r.a31
        a = "contextmenu"
        c.removeEventListener(a, r.a35)
        c = r.a31
        a = "touchmove"
        c.removeEventListener(a, r.a36)
        c = r.a31
        a = "touchstart"
        c.removeEventListener(a, r.a36)
        c = r.a31
        a = "touchend"
        c.removeEventListener(a, r.a36)
        c = r.a31
        a = "click"
        c.removeEventListener(a, r.a37)
    }
    r.a31 = p
    c = "textarea"
    r.a33 = document.createElement(c)
    c = r.a33
    a = "off"
    c.autocapitalize = a
    r.a33.spellcheck = 1
    c = r.a33.style
    a = "fixed"
    c.position = a
    c = r.a33.style
    a = "0"
    c.opacity = a
    c = r.a33.style
    a = "0"
    c.padding = a
    c = r.a33.style
    a = "0"
    c.border = a
    c = r.a33.style
    a = "0px"
    c.top = a
    c = r.a33.style
    a = "0px"
    c.left = a
    c = r.a33
    a = "_"
    c.value = a
    c = document.body
    c.appendChild(r.a33)
    h = +performance.timeOrigin
    c = [
        {
            a0: null,
            d1: -0,
        },
    ]
    c[0].a0 = r
    c[0].d1 = h
    c = DB(kS, c[0])
    r.a34 = c
    c = kQ
    r.a35 = c
    c = [
        {
            a0: null,
            d1: -0,
        },
    ]
    c[0].a0 = r
    c[0].d1 = h
    c = DB(kO, c[0])
    r.a36 = c
    c = [
        {
            a0: null,
        },
    ]
    c[0].a0 = r
    c = DB(kL, c[0])
    r.a37 = c
    c = [
        {
            a0: null,
            d1: -0,
        },
    ]
    c[0].a0 = r
    c[0].d1 = h
    j = DB(kI, c[0])
    c = [
        {
            a0: null,
            d1: -0,
        },
    ]
    c[0].a0 = r
    c[0].d1 = h
    c = DB(kF, c[0])
    a = "mousemove"
    p.addEventListener(a, r.a34)
    a = "mousedown"
    p.addEventListener(a, r.a34)
    a = "mouseup"
    p.addEventListener(a, r.a34)
    a = "contextmenu"
    p.addEventListener(a, r.a35)
    a = "touchmove"
    p.addEventListener(a, r.a36)
    a = "touchstart"
    p.addEventListener(a, r.a36)
    a = "touchend"
    p.addEventListener(a, r.a36)
    a = "click"
    p.addEventListener(a, r.a37)
    a = r.a33
    f = "keydown"
    a.addEventListener(f, j)
    a = r.a33
    f = "keyup"
    a.addEventListener(f, c)
    c = {
        type: 95,
        width: n,
        height: l,
    }
    r.a6.postMessage(c)
}
function CD(x, u, r) {
    var p = null,
        n = 0,
        a = 0,
        c = null,
        h = null,
        j = null,
        f = null,
        l = 0
    a = gv(u) | 0
    if ((a | 0) !== 4) {
        c = aR[a]
        if (c === null) {
            c = {
                i0: 0,
                a1: {
                    a0: nullArray,
                    a0o: 0,
                    a1: nullArray,
                    a1o: 0,
                    a2: {
                        a0: nullArray,
                        a0o: 0,
                    },
                },
            }
            c.i0 = a
            h = c.a1
            h.a0 = nullArray
            h.a0o = 0
            h.a1 = nullArray
            h.a1o = 0
            h.a2.a0 = nullArray
            h.a2.a0o = 0
            aR[a] = c
            c = {
                type: 57,
                eventType: a,
            }
            x.a6.postMessage(c)
            c = aR[a]
        }
        c = c.a1
        h = c.a1
        a = c.a1o | 0
        j = c.a2
        f = j.a0
        l = j.a0o | 0
        if (h === f && a === l) {
            f = {
                a0: null,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (f = {
                        a0: null,
                    }),
                },
            }
            p = c.a0
            l = c.a0o | 0
            a = (intMultiply_1(a, 4) - intMultiply_1(l, 4)) | 0
            n = a >> 2
            l = (n + 1) | 0
            if (l >>> 0 > 1073741823) ab()
            if (a >>> 0 < 2147483644) {
                a >>>= 1
                a = a >>> 0 > l >>> 0 ? a | 0 : l | 0
            } else {
                a = 1073741823
            }
            h = f.a3
            h.a1.a0 = j
            if ((a | 0) !== 0) j = DD([], 0, ((a << 2) / 4) | 0, null)
            else {
                j = nullArray
            }
            f.a0 = j[0]
            f.a1 = j
            f.a1o = (0 + n) | 0
            h.a0 = j
            h.a0o = (0 + a) | 0
            j[n] = r
            f.a2 = j
            f.a2o = (((0 + n) | 0) + 1) | 0
            k4(c, f)
        } else {
            h[a] = r
            c.a1 = h
            c.a1o = (a + 1) | 0
        }
    }
}
function CC(j, h, f, c) {
    var a = null
    a = {
        type: 87,
        columns: f,
        rows: c,
    }
    j.a6.postMessage(a)
    j.a26.a3 = h
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = j
    a = DB(k8, a[0])
    return a
}
function CB(l, j, h, f) {
    var c = null,
        a = null
    c = {
        a0: null,
        a1: null,
        a2: null,
        a3: null,
        i4: 0,
        i5: 0,
    }
    c.a0 = l
    c.a1 = j
    c.a2 = f
    c.a3 = "https://portal.leaningtech.com/index.html"
    c.i4 = h
    c.i5 = 0
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = c
    a = DB(lu, a[0])
    j.onload = a
    a = c.a3
    j.src = a
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = c
    a = DB(lr, a[0])
    c.i5 = ~~+setInterval(a, 1.0e4)
}
function CA(l, j) {
    var c = null,
        f = null,
        h = null,
        a = null
    c = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(c)
    h = c.a1
    a = new TextEncoder()
    a = a.encode(j)
    if ((a[0] & 255) === 64) a[0] = 0
    f = new Uint8Array(+((a.length + 2) >>> 0))
    f[0] = 1
    f.set(a, 2)
    a = {
        a0: null,
    }
    oh(a, l, h, f)
    h = c.a0
    return h
}
function Cz(f, c) {
    var a = null
    f.a26.a4 = c
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = f
    a = DB(ok, a[0])
    return a
}
function Cy(n, l, j) {
    var c = 0,
        h = null,
        f = 0,
        a = null
    c = gv(l) | 0
    if ((c | 0) !== 4) {
        a = aR[c]
        if (a !== null) {
            if (on(a, j) | 0) {
                a = a.a1
                h = a.a0
                f = a.a0o | 0
                if (h !== nullArray || f !== 0) {
                    a.a1 = h
                    a.a1o = f
                }
                aR[c] = null
                a = {
                    type: 80,
                    eventType: c,
                }
                n.a6.postMessage(a)
            }
        }
    }
}
function Cx(G, H, K, L) {
    var r = null,
        E = 0,
        f = null,
        h = null,
        x = 0,
        l = 0,
        a = null,
        n = null,
        A = 0,
        u = 0,
        p = 0,
        j = null,
        c = null,
        C = 0
    r = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(r)
    if (undefined === K) {
        f = r.a2
        h = "The 'args' array is required"
        f(h)
        f = r.a0
        return f
    }
    x = G.a27.indexOf(null)
    if ((x | 0) < 0) {
        x = G.a27.length
        ;+G.a27.push(r.a1)
    } else {
        f = G.a27
        f[(0 + x) | 0] = r.a1
    }
    f = undefined
    h = new Array()
    a: {
        b: {
            c: {
                if (L !== null) {
                    if (f !== L) {
                        f = "env"
                        u = L.hasOwnProperty(f)
                        if (u) h = L.env
                        else {
                            h = h
                        }
                        a = "parent"
                        u = L.hasOwnProperty(a)
                        if (u) a = L.parent.this
                        else {
                            a = null
                        }
                        f = "cwd"
                        u = L.hasOwnProperty(f)
                        if (u) f = L.cwd
                        else {
                            f = null
                        }
                        n = "uid"
                        u = L.hasOwnProperty(n)
                        if (u) u = L.uid
                        else {
                            u = 1000
                        }
                        n = "gid"
                        A = L.hasOwnProperty(n)
                        if (A) A = L.gid
                        else {
                            A = 1000
                        }
                        p = G.a8 === null ? 1 : 0
                        d: {
                            if (a !== null) {
                                l = a.i0 | 0
                                if (!p) break d
                            } else {
                                l = G.i41 | 0
                                if (!p) break d
                            }
                            n = new Uint8Array(32)
                            j = "handlers"
                            p = L.hasOwnProperty(j)
                            if (!p) break c
                            j = L.handlers
                            a = DD([], 0, 32, null)
                            c = undefined
                            a[0] = c
                            a[1] = c
                            a[2] = c
                            a[3] = c
                            a[4] = c
                            a[5] = c
                            a[6] = c
                            a[7] = c
                            a[8] = c
                            a[9] = c
                            a[10] = c
                            a[11] = c
                            a[12] = c
                            a[13] = c
                            a[14] = c
                            a[15] = c
                            a[16] = c
                            a[17] = c
                            a[18] = c
                            a[19] = c
                            a[20] = c
                            a[21] = c
                            a[22] = c
                            a[23] = c
                            a[24] = c
                            a[25] = c
                            a[26] = c
                            a[27] = c
                            a[28] = c
                            a[29] = c
                            a[30] = c
                            a[31] = c
                            c = j.SIGUSR1
                            j = undefined
                            if (c !== j) a[10] = c
                            p = 0
                            while (1) {
                                C = a[p] !== null ? 1 : 0
                                if (j !== null) {
                                    if (!C) {
                                        n[(0 + p) | 0] = 1
                                        j = undefined
                                    }
                                }
                                C = (p + 1) | 0
                                E = a[C] !== null ? 1 : 0
                                if (j !== null) {
                                    if (!E) {
                                        n[(0 + C) | 0] = 1
                                        j = undefined
                                    }
                                }
                                p = (p + 2) | 0
                                if ((p | 0) === 32) break c
                                continue
                            }
                        }
                        f = L.stdout
                        a = L.stderr
                        break b
                    }
                }
                l = G.i41 | 0
                if (G.a8 !== null) {
                    f = undefined
                    a = f
                    h = h
                    break b
                }
                n = new Uint8Array(32)
                h = h
                f = null
                u = 1000
                A = 1000
            }
            h = {
                type: 59,
                path: H,
                args: K,
                env: h,
                tid: l,
                index: x,
                handlers: n,
                cwd: f,
                uid: u,
                gid: A,
            }
            break a
        }
        h = {
            type: 79,
            path: H,
            args: K,
            stdout: f,
            stderr: a,
            env: h,
            tid: l,
        }
    }
    G.a6.postMessage(h)
    f = r.a0
    return f
}
function Cw(M) {
    var E = null,
        x = null,
        h = null,
        K = null,
        H = 0,
        L = null,
        G = 0,
        a = null,
        n = 0,
        f = null,
        p = null,
        u = -0,
        A = null,
        r = null,
        C = null,
        c = 0,
        j = null,
        l = 0
    E = new Bj()
    lW(E)
    a = undefined
    if (M !== null) {
        if (a !== M) {
            a = "bridgeURL"
            n = M.hasOwnProperty(a)
            if (n) E.a8 = M.bridgeURL
            a = "mounts"
            n = M.hasOwnProperty(a)
            a: if (n) {
                a = M.mounts
                if ((a.length | 0) !== 0) {
                    f = a[0].path
                    p = "/"
                    u = +f.localeCompare(p)
                    if (u === 0) {
                        f = E.a43
                        p = f.a0
                        n = f.a0o | 0
                        f.a1 = p
                        f.a1o = n
                        if ((a.length | 0) === 0) break a
                        p = {
                            i0: 0,
                            i1: 0,
                            a2: nullArray,
                        }
                        x = {
                            i0: 0,
                            i1: 0,
                            a2: nullArray,
                        }
                        h = {
                            a0: null,
                            a1: nullArray,
                            a1o: 0,
                            a2: nullArray,
                            a2o: 0,
                            a3: {
                                a0: nullArray,
                                a0o: 0,
                                a1: (h = {
                                    a0: null,
                                }),
                            },
                        }
                        n = 0
                        while (1) {
                            u = +(n >>> 0)
                            r = a[u].type
                            C = a[u]
                            A = "dev"
                            c = C.hasOwnProperty(A)
                            if (c) C = a[u].dev.this
                            else {
                                C = null
                            }
                            j = a[u].path
                            c3(x, r)
                            c3(p, j)
                            j = f.a1
                            l = f.a1o | 0
                            r = f.a2
                            K = r.a0
                            H = r.a0o | 0
                            if (l < H) {
                                a0(j[l], x)
                                j[l].a3 = C
                                a0(j[l].a4, p)
                                f.a1 = j
                                f.a1o = (l + 1) | 0
                            } else {
                                L = f.a0
                                c = f.a0o | 0
                                c = intMultiply_1(c, 28)
                                l = (((intMultiply_1(l, 28) - c) | 0) / 28) | 0
                                G = (l + 1) | 0
                                if (G >>> 0 > 153391689) ab()
                                c = (((intMultiply_1(H, 28) - c) | 0) / 28) | 0
                                if (c >>> 0 < 76695844) {
                                    c <<= 1
                                    c = c >>> 0 > G >>> 0 ? c | 0 : G | 0
                                } else {
                                    c = 153391689
                                }
                                j = h.a3
                                j.a1.a0 = r
                                if ((c | 0) !== 0) r = Cl(((intMultiply_1(c, 28) | 0) / 28) | 0)
                                else {
                                    r = nullArray
                                }
                                h.a0 = r[0]
                                h.a1 = r
                                h.a1o = (0 + l) | 0
                                j.a0 = r
                                j.a0o = (0 + c) | 0
                                a0(r[l], x)
                                r[l].a3 = C
                                a0(r[l].a4, p)
                                h.a2 = r
                                h.a2o = (((0 + l) | 0) + 1) | 0
                                fn(f, h)
                            }
                            n = (n + 1) | 0
                            if (n >>> 0 < a.length >>> 0) continue
                            break
                        }
                        break a
                    } else {
                        a = iQ
                    }
                } else {
                    a = iP
                }
                console.log(z(a, 0))
            }
            a = "networkInterface"
            n = M.hasOwnProperty(a)
            if (n) a = M.networkInterface
            else {
                a = null
            }
        } else {
            a = null
        }
    } else {
        a = null
    }
    f = {
        a0: null,
        a1: null,
    }
    f.a0 = E
    f.a1 = a
    a = mb(f)
    return a
}
function Cv(x) {
    var l = null,
        n = null,
        u = null,
        r = 0,
        p = null,
        h = null,
        a = 0,
        f = null,
        c = null,
        j = 0
    l = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(l)
    p = l.a1
    n = x.a47
    h = n.a1
    a = n.a1o | 0
    f = n.a2
    c = f.a0
    j = f.a0o | 0
    if (h === c && a === j) {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        u = n.a0
        j = n.a0o | 0
        a = (intMultiply_1(a, 4) - intMultiply_1(j, 4)) | 0
        r = a >> 2
        j = (r + 1) | 0
        if (j >>> 0 > 1073741823) ab()
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > j >>> 0 ? a | 0 : j | 0
        } else {
            a = 1073741823
        }
        h = c.a3
        h.a1.a0 = f
        if ((a | 0) !== 0) f = DD([], 0, ((a << 2) / 4) | 0, null)
        else {
            f = nullArray
        }
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + r) | 0
        h.a0 = f
        h.a0o = (0 + a) | 0
        f[r] = p
        c.a2 = f
        c.a2o = (((0 + r) | 0) + 1) | 0
        q1(n, c)
    } else {
        h[a] = p
        n.a1 = h
        n.a1o = (a + 1) | 0
    }
    bH(x)
    p = l.a0
    return p
}
function q1(C, A) {
    var n = 0,
        r = 0,
        l = null,
        h = null,
        c = 0,
        j = 0,
        a = 0,
        f = 0,
        u = 0,
        p = 0,
        x = 0
    l = C.a0
    n = C.a0o | 0
    h = C.a1
    c = C.a1o | 0
    c = (intMultiply_1(c, 4) - intMultiply_1(n, 4)) | 0
    h = A.a1
    j = A.a1o | 0
    r = -(c >> 2) | 0
    if (c >>> 0 >= 4) {
        a = c >>> 2
        f = (r + a) | 0
        if (n < ((j + r) | 0)) {
            u = (c - 4) | 0
            c = ((u >>> 2) + 1) & 3
            if ((c | 0) !== 0) {
                p = 0
                while (1) {
                    a = (a - 1) | 0
                    f = (f - 1) | 0
                    h[(j + f) | 0] = l[(n + a) | 0]
                    p = (p + 1) | 0
                    if ((p | 0) !== (c | 0)) continue
                    break
                }
            }
            if (u >>> 0 >= 12)
                while (1) {
                    h[(((j + f) | 0) + -1) | 0] = l[(((n + a) | 0) + -1) | 0]
                    h[(((j + f) | 0) + -2) | 0] = l[(((n + a) | 0) + -2) | 0]
                    h[(((j + f) | 0) + -3) | 0] = l[(((n + a) | 0) + -3) | 0]
                    a = (a - 4) | 0
                    f = (f - 4) | 0
                    h[(j + f) | 0] = l[(n + a) | 0]
                    if (h !== h || ((j + r) | 0) !== ((j + f) | 0)) continue
                    break
                }
        } else {
            u = (c - 4) | 0
            p = ((u >>> 2) + 1) & 7
            if ((p | 0) !== 0) {
                a = r
                x = 0
                c = 0
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0]
                    x = (x + 1) | 0
                    a = (a + 1) | 0
                    c = (c + 1) | 0
                    if ((x | 0) !== (p | 0)) continue
                    break
                }
            } else {
                a = r
                c = 0
            }
            if (u >>> 0 >= 28)
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0]
                    h[(((j + a) | 0) + 1) | 0] = l[(((n + c) | 0) + 1) | 0]
                    h[(((j + a) | 0) + 2) | 0] = l[(((n + c) | 0) + 2) | 0]
                    h[(((j + a) | 0) + 3) | 0] = l[(((n + c) | 0) + 3) | 0]
                    h[(((j + a) | 0) + 4) | 0] = l[(((n + c) | 0) + 4) | 0]
                    h[(((j + a) | 0) + 5) | 0] = l[(((n + c) | 0) + 5) | 0]
                    h[(((j + a) | 0) + 6) | 0] = l[(((n + c) | 0) + 6) | 0]
                    h[(((j + a) | 0) + 7) | 0] = l[(((n + c) | 0) + 7) | 0]
                    a = (a + 8) | 0
                    if (h !== h || ((j + f) | 0) !== ((j + a) | 0)) {
                        c = (c + 8) | 0
                        continue
                    }
                    break
                }
        }
    }
    A.a1 = h
    A.a1o = (j + ((r << 2) >> 2)) | 0
    l = C.a0
    c = C.a0o | 0
    C.a0 = h
    C.a0o = (j + ((r << 2) >> 2)) | 0
    A.a1 = l
    A.a1o = c
    l = C.a1
    c = C.a1o | 0
    h = A.a2
    j = A.a2o | 0
    C.a1 = h
    C.a1o = j
    A.a2 = l
    A.a2o = c
    l = C.a2.a0
    c = C.a2.a0o | 0
    h = A.a3.a0
    j = A.a3.a0o | 0
    C.a2.a0 = h
    C.a2.a0o = j
    A.a3.a0 = l
    A.a3.a0o = c
    l = A.a1
    c = A.a1o | 0
    A.a0 = l[c]
}
function mb(u) {
    var r = null,
        x = null,
        c = null,
        j = null,
        a = null,
        f = null,
        h = 0,
        l = null,
        p = 0,
        n = null
    c = wb({
        a0: null,
        a1: null,
        a2: (c = {
            a0: null,
        }),
        a3: [null],
        a4: null,
        a5: null,
        a6: (c = {
            a0: nullArray,
            a0o: 0,
        }),
        i7: 0,
    }).a
    j = c[0]
    j.a0 = l9
    j.a1 = l8
    j.a4 = u
    r = j.a2
    r.a0 = null
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = r
    a = DB(l6, a[0])
    x = new Promise(a)
    a = u.a0.a43
    f = a.a1
    h = a.a1o | 0
    l = a.a0
    p = a.a0o | 0
    a: {
        if ((intMultiply_1(h, 28) | 0) === (intMultiply_1(p, 28) | 0)) {
            a = location.pathname
            f = "/"
            h = a.lastIndexOf(f)
            f = a.substr(0, +(h | 0))
            j.a5 = f
            a = j.a6
            hz(a, f)
            f = a.a0
            h = a.a0o | 0
            if (f !== nullArray || h !== 0) {
                if (f[h].a0 !== null) {
                    j.i7 = 0
                    j = f[h].a[f[h].o - -1]
                    j.a0 = c
                    j.a0o = 0
                    break a
                }
            }
            c = f[h].a[f[h].o - -1]
            c = c.a1.a1
            f = a.a0
            h = a.a0o | 0
            if (f !== nullArray || h !== 0) f[h].a1(f, h)
            a = j.a5
            a = j.a4
            j.a3[0] = c
            f = a.a0
            c = {
                i0: 0,
                i1: 0,
                a2: nullArray,
            }
            a = {
                i0: 0,
                i1: 0,
                a2: nullArray,
            }
            l = f.a43
            f = l.a1
            h = l.a1o | 0
            n = l.a2.a0
            p = l.a2.a0o | 0
            if (h < p) {
                bp(c, dg, 0)
                n = j.a3[0]
                bp(a, dh, 0)
                a0(f[h], c)
                f[h].a3 = n
                a0(f[h].a4, a)
                l.a1 = f
                l.a1o = (h + 1) | 0
            } else fp(l, j.a3, 0)
        }
        f = j.a4
        c = {
            a0: null,
            a1: null,
            a2: null,
        }
        aE(c)
        dw(f.a0, c.a1, c.a2)
        a = c.a0
        f = f.a1
        if (f !== null) {
            j = j.a4.a0
            l = [
                {
                    a0: null,
                    a1: null,
                    a2: null,
                },
            ]
            l[0].a0 = a
            l[0].a1 = j
            l[0].a2 = f
            j = DB(fs, l[0])
            a = a.then(j)
        }
        r.a0.call(null, a)
    }
    return x
}
function l9(p, q) {
    p = p[q]
    var u = null,
        r = 0,
        l = null,
        j = 0,
        n = null,
        h = null,
        a = null,
        c = null,
        f = null
    l = p.a6.a0
    j = p.a6.a0o | 0
    n = l[j].a[l[j].o - -1]
    n = n.a1.a1
    if (l !== nullArray || j !== 0) l[j].a1(l, j)
    l = p.a5
    l = p.a4
    p.a3[0] = n
    h = l.a0
    a = {
        i0: 0,
        i1: 0,
        a2: nullArray,
    }
    c = {
        i0: 0,
        i1: 0,
        a2: nullArray,
    }
    h = h.a43
    f = h.a1
    j = h.a1o | 0
    u = h.a2.a0
    r = h.a2.a0o | 0
    if (j < r) {
        bp(a, dg, 0)
        bp(c, dh, 0)
        a0(f[j], a)
        f[j].a3 = n
        a0(f[j].a4, c)
        h.a1 = f
        h.a1o = (j + 1) | 0
    } else fp(h, p.a3, 0)
    a = {
        a0: null,
        a1: null,
        a2: null,
    }
    aE(a)
    dw(l.a0, a.a1, a.a2)
    c = a.a0
    f = l.a1
    if (f !== null) {
        l = l.a0
        h = [
            {
                a0: null,
                a1: null,
                a2: null,
            },
        ]
        h[0].a0 = c
        h[0].a1 = l
        h[0].a2 = f
        f = DB(fs, h[0])
        c = c.then(f)
    }
    p.a2.a0.call(null, c)
}
function l8(f, g) {
    f = f[g]
    var c = 0,
        a = null
    a = f.a6.a0
    c = f.a6.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    a = f.a5
}
function l6(c, a) {
    c.a0.a0 = a
}
function fs(f, c) {
    var l = null,
        j = null,
        a = null,
        h = null
    l = iO.autoConf(f.a2)
    h = f.a1
    j = f.a0
    a = [
        {
            a0: null,
            a1: null,
        },
    ]
    a[0].a0 = h
    a[0].a1 = j
    h = DB(lY, a[0])
    return l.then(h)
}
function lY(c, a) {
    var f = null
    f = c.a1
    c.a0.a46 = a
    return f
}
function fp(r, p, q) {
    var j = null,
        n = 0,
        x = 0,
        f = null,
        u = null,
        a = null,
        l = 0,
        h = null,
        c = 0
    j = {
        a0: null,
        a1: nullArray,
        a1o: 0,
        a2: nullArray,
        a2o: 0,
        a3: {
            a0: nullArray,
            a0o: 0,
            a1: (j = {
                a0: null,
            }),
        },
    }
    a = r.a1
    l = r.a1o | 0
    h = r.a0
    c = r.a0o | 0
    c = intMultiply_1(c, 28)
    l = (((intMultiply_1(l, 28) - c) | 0) / 28) | 0
    n = (l + 1) | 0
    if (n >>> 0 > 153391689) ab()
    h = r.a2
    a = h.a0
    x = h.a0o | 0
    c = (((intMultiply_1(x, 28) - c) | 0) / 28) | 0
    if (c >>> 0 < 76695844) {
        c <<= 1
        c = c >>> 0 > n >>> 0 ? c | 0 : n | 0
    } else {
        c = 153391689
    }
    a = j.a3
    a.a1.a0 = h
    if ((c | 0) !== 0) h = Cl(((intMultiply_1(c, 28) | 0) / 28) | 0)
    else {
        h = nullArray
    }
    j.a0 = h[0]
    j.a2 = h
    j.a2o = (0 + l) | 0
    j.a1 = h
    j.a1o = (0 + l) | 0
    a.a0 = h
    a.a0o = (0 + c) | 0
    a = {
        i0: 0,
        i1: 0,
        a2: nullArray,
    }
    f = {
        i0: 0,
        i1: 0,
        a2: nullArray,
    }
    bp(a, dg, 0)
    u = p[q]
    bp(f, dh, 0)
    a0(h[l], a)
    h[l].a3 = u
    a0(h[l].a4, f)
    a = j.a2
    c = j.a2o | 0
    j.a2 = a
    j.a2o = (c + 1) | 0
    fn(r, j)
}
function fn(A, x) {
    var E = 0,
        u = 0,
        r = null,
        p = 0,
        C = 0,
        G = null,
        h = null,
        j = null,
        n = 0,
        f = 0,
        l = 0,
        a = null,
        c = null
    h = A.a0
    E = A.a0o | 0
    j = A.a1
    u = A.a1o | 0
    r = x.a1
    p = x.a1o | 0
    if (j === h && u === E) {
        n = 0
    } else {
        l = 0
        f = 0
        while (1) {
            n = (f - 1) | 0
            C = (l - 1) | 0
            a = r[(p + n) | 0]
            c = j[(u + C) | 0]
            a.i0 = c.i0 | 0
            a.i1 = c.i1 | 0
            c = c.a2
            a.a2 = c
            a = j[(u + C) | 0]
            a.i0 = 0
            a.i1 = 0
            a.a2 = nullArray
            r[(((p + f) | 0) + -1) | 0].a3 = j[(((u + l) | 0) + -1) | 0].a3
            a = j[(((u + l) | 0) + -1) | 0].a4
            c = r[(((p + f) | 0) + -1) | 0].a4
            c.i0 = a.i0 | 0
            c.i1 = a.i1 | 0
            G = a.a2
            c.a2 = G
            a.i0 = 0
            a.i1 = 0
            a.a2 = nullArray
            if (j !== h || ((u + C) | 0) !== E) {
                f = n
                l = C
                continue
            }
            break
        }
    }
    x.a1 = r
    x.a1o = (p + n) | 0
    h = A.a0
    f = A.a0o | 0
    A.a0 = r
    A.a0o = (p + n) | 0
    x.a1 = h
    x.a1o = f
    h = A.a1
    f = A.a1o | 0
    j = x.a2
    l = x.a2o | 0
    A.a1 = j
    A.a1o = l
    x.a2 = h
    x.a2o = f
    h = A.a2.a0
    f = A.a2.a0o | 0
    j = x.a3.a0
    l = x.a3.a0o | 0
    A.a2.a0 = j
    A.a2.a0o = l
    x.a3.a0 = h
    x.a3.a0o = f
    h = x.a1
    f = x.a1o | 0
    x.a0 = h[f]
}
function lW(f) {
    var c = null,
        a = null
    mj(f)
    f.a0 = eu
    f.a26 = null
    f.a27 = new Array()
    f.a28 = null
    f.a29 = null
    f.a30 = null
    f.a31 = null
    f.a32 = null
    f.a33 = null
    f.a34 = null
    f.a35 = null
    f.a36 = null
    f.a37 = null
    a = f.a38
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    f.a39 = null
    a = f.a40
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    a = a.a2
    a.a0 = null
    a.a1 = nullArray
    a.a1o = 0
    a.a2 = nullArray
    a.a2o = 0
    a.a3.a0 = null
    a.i4 = 0
    a.i5 = 0
    f.i41 = 0
    a = f.a42
    c = a.a1
    c.a0 = null
    a.i2 = 0
    a.a0 = c
    a = f.a43
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = f.a44
    a.a0 = nullArray
    a.a1 = null
    a.a2.a0 = null
    a = f.a45
    a.a0 = nullArray
    a.a1 = nullArray
    a.a1o = 0
    a.a2 = nullArray
    a.a2o = 0
    a.a3.a0 = nullArray
    a.a3.a0o = 0
    a.i4 = 0
    a.i5 = 0
    a.i6 = 0
    a = a.a7
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    f.a46 = null
    a = f.a47
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = f.a48
    a.a0 = nullArray
    a.a0o = 0
    a.a1 = nullArray
    a.a1o = 0
    a.a2.a0 = nullArray
    a.a2.a0o = 0
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = f
    a = DB(lU, a[0])
    f.a2 = a
}
function lU(c, a) {
    var f = null
    f = c.a0
    lS(f, a.data)
}
function lS(E, C) {
    var a = null,
        f = null,
        c = 0,
        j = null,
        h = 0,
        n = null,
        p = 0,
        A = null,
        r = null,
        l = 0,
        u = null,
        x = 0
    a = new Int32Array(3)
    f = [null]
    a: switch (C.type | 0) {
        case 19:
        case 66:
        case 70:
        case 23:
        case 54:
        case 22:
        case 61:
        case 63:
        case 17:
        case 68:
        case 65:
        case 64:
            lR(E.a45, C)
            break a
        case 67:
            c = C.fd
            j = N.a0
            h = N.a0o | 0
            n = N.a1
            p = N.a1o | 0
            if (j === n && h === p) {
                A = null
            } else {
                l = 0
                while (1) {
                    A = j[(h + l) | 0]
                    if ((A.i2 | 0) !== (c | 0)) {
                        l = (l + 1) | 0
                        if (j !== n || ((h + l) | 0) !== p) continue
                        A = null
                    }
                    break
                }
            }
            c = C.replyType
            a[0] = c
            h = C.tid
            a[1] = h
            p = C.fileOffset
            a[2] = p
            j = C.slices[0]
            f[0] = j
            n = A.a8
            r = n.a1
            l = n.a1o | 0
            u = n.a2.a0
            x = n.a2.a0o | 0
            if (l < x) {
                r[l].i0 = c
                r[l].i1 = h
                r[l].i2 = p
                r[l].a3 = j
                n.a1 = r
                n.a1o = (l + 1) | 0
            } else lQ(n, a, 0, a, 1, a, 2, f, 0)
            c = C.fileOffset
            a[0] = c
            j = A.a9
            n = j.a1
            h = j.a1o | 0
            r = j.a2.a0
            p = j.a2.a0o | 0
            if (h < p) {
                n[h] = c
                j.a1 = n
                j.a1o = (h + 1) | 0
            } else lP(j, a, 0)
            c = A.i11 | 0
            if ((c & 255) === 0) break a
            j = aR[2]
            if (j !== null) {
                n = "wait"
                aJ(j, n)
                c = A.i11 | 0
            }
            A.i11 = c & 65280
            a = A.a7
            a.i1 = 65536
            f = a.a0
            c = a.a0o | 0
            a.a0 = nullArray
            a.a0o = 0
            f[c].a0(f, c)
            break a
        case 82:
            c = C.fd
            n = N.a0
            h = N.a0o | 0
            u = N.a1
            p = N.a1o | 0
            if (n === u && h === p) {
                j = null
            } else {
                l = 0
                while (1) {
                    j = n[(h + l) | 0]
                    if ((j.i2 | 0) !== (c | 0)) {
                        l = (l + 1) | 0
                        if (n !== u || ((h + l) | 0) !== p) continue
                        j = null
                    }
                    break
                }
            }
            c = C.fileOffset
            a[0] = c
            n = C.slices[0]
            f[0] = n
            u = j.a10
            r = u.a0
            h = u.a0o | 0
            A = u.a1
            p = u.a1o | 0
            {
                if (r !== A || h !== p) {
                    l = 0
                    while (1) {
                        if ((r[(h + l) | 0].i2 | 0) === (c | 0)) break a
                        l = (l + 1) | 0
                        if (r !== A || ((h + l) | 0) !== p) continue
                        break
                    }
                }
                h = C.replyType
                a[1] = h
                p = C.tid
                a[2] = p
                r = u.a1
                l = u.a1o | 0
                A = u.a2.a0
                x = u.a2.a0o | 0
                if (l < x) {
                    r[l].i0 = h
                    r[l].i1 = p
                    r[l].i2 = c
                    r[l].a3 = n
                    u.a1 = r
                    u.a1o = (l + 1) | 0
                } else lO(u, a, 1, a, 2, a, 0, f, 0)
                c = j.i11 | 0
                if ((c & 255) !== 0) {
                    n = aR[2]
                    if (n !== null) {
                        u = "wait"
                        aJ(n, u)
                        c = j.i11 | 0
                    }
                    j.i11 = c & 65280
                    j = j.a7
                    j.i1 = 65536
                    n = j.a0
                    c = j.a0o | 0
                    j.a0 = nullArray
                    j.a0o = 0
                    n[c].a0(n, c)
                }
            }
            break a
        case 55:
            c = C.index
            a = E.a27
            f = a[(0 + c) | 0]
            a[(0 + c) | 0] = null
            f({
                status: C.value,
            })
            break a
        case 34:
            a = E.a48
            f = a.a0
            p = a.a0o | 0
            j = a.a1
            c = a.a1o | 0
            if (f === j && p === c) break a
            h = 0
            while (1) {
                c = f[(p + h) | 0].i0 | 0
                if ((c | 0) === (C.tid | 0)) {
                    j = f[(p + h) | 0].a1
                    n = a.a0
                    c = a.a0o | 0
                    h = (intMultiply_1((p + h) | 0, 8) - intMultiply_1(c, 8)) >> 3
                    p = (h + 1) | 0
                    f = a.a1
                    l = a.a1o | 0
                    if (n === f && ((c + p) | 0) === l) {
                        x = h
                    } else {
                        x = h
                        while (1) {
                            n[(c + x) | 0].i0 = n[(c + p) | 0].i0 | 0
                            n[(c + x) | 0].a1 = n[(c + p) | 0].a1
                            p = (p + 1) | 0
                            x = (x + 1) | 0
                            if (n !== f || ((c + p) | 0) !== l) continue
                            break
                        }
                    }
                    a.a1 = n
                    a.a1o = (((c + h) | 0) + ((intMultiply_1((c + x) | 0, 8) - intMultiply_1((c + h) | 0, 8)) >> 3)) | 0
                    n = C.value
                    f = j.a1
                    f.i0 = 256
                    f.a1 = n
                    n = j.a0
                    c = j.a0o | 0
                    j.a0 = nullArray
                    j.a0o = 0
                    n[c].a0(n, c)
                    break a
                }
                h = (h + 1) | 0
                j = a.a1
                c = a.a1o | 0
                if (f === j && ((p + h) | 0) === c) break a
                continue
            }
        case 53:
            a = C.arg1
            c = C.arg2
            f = E.a26
            jB(f, a, a.length, c)
            jq(E.a26)
            break a
        case 29:
            c = C.arg1
            a = E.a26.a4
            if (a === null) break a
            a(c)
            break a
        case 72:
            c = C.width
            h = C.height
            a = E.a31
            a.width = +(C.width >>> 0)
            a = E.a31
            a.height = +(C.height >>> 0)
            a = HEAP8.buffer
            E.a29 = new Uint8Array(a, +(C.addr >>> 0), +(intMultiply_1(c << 2, h) >>> 0))
            c = C.width
            a = new ImageData(+(c >>> 0), +(C.height >>> 0))
            E.a28 = a
            a = a.data.buffer
            E.a30 = new Uint8Array(a)
            break a
        case 74:
            E.a29 = null
            E.a28 = null
            E.a30 = null
            break a
        case 75:
            c = E.a30.length
            a = E.a29
            f = E.a30
            if ((c | 0) !== 0) {
                h = 0
                while (1) {
                    p = (h + 2) | 0
                    f[(0 + h) | 0] = a[(0 + p) | 0] | 0
                    l = (h + 1) | 0
                    f[(0 + l) | 0] = a[(0 + l) | 0] | 0
                    f[(0 + p) | 0] = a[(0 + h) | 0] | 0
                    f[(0 + ((h + 3) | 0)) | 0] = 255
                    h = (h + 4) | 0
                    if (h >>> 0 < c >>> 0) continue
                    break
                }
            }
            E.a32.putImageData(E.a28, 0, 0)
            break a
        case 77:
            c = C.pid
            a = E.a42.a1
            f = a.a0
            b: {
                if (f !== null) {
                    j = f
                    f = a
                    while (1) {
                        if (j.a4.i0 >>> 0 < c >>> 0) {
                            j = j.a1
                        } else {
                            f = j
                            j = j.a0
                        }
                        if (j !== null) {
                            j = j
                            continue
                        }
                        break
                    }
                    if (f !== a) {
                        if (c >>> 0 >= f.a4.i0 >>> 0) {
                            a = f
                            break b
                        }
                    }
                }
                a = a
            }
            a = a.a4.a1
            c = C.value
            a = a.a1[c]
            f = undefined
            if (a === null) break a
            if (a === f) break a
            a()
            break a
        case 88:
            j = C.arg1
            c = C.addr
            h = C.localPort
            p = C.port
            l = C.tid
            a = E.a46
            if (a !== null) {
                a = a.tcpSocket()
                if (a !== null) {
                    a.bind(h)
                    f = [
                        {
                            i0: 0,
                            a1: null,
                            a2: null,
                            a3: null,
                        },
                    ]
                    f[0].i0 = l
                    f[0].a1 = j
                    f[0].a2 = a
                    f[0].a3 = E
                    f = DB(pb, f[0])
                    a.connect(c, p, f)
                    break a
                }
            }
            a = {
                type: 88,
                tid: l,
                arg0: -101,
            }
            E.a6.postMessage(a)
            break a
        case 89:
            c = C.localPort
            a = C.arg1
            h = C.tid
            f = E.a46
            if (f === null) break a
            f = f.tcpSocket()
            if (f === null) break a
            f.bind(c)
            j = [
                {
                    i0: 0,
                    a1: null,
                    i2: 0,
                    a3: null,
                },
            ]
            j[0].i0 = h
            j[0].a1 = f
            j[0].i2 = c
            j[0].a3 = E
            j = DB(o9, j[0])
            f.listen(j)
            j = [null]
            j[0] = f
            f = DC(o6, j, 0)
            a.onmessage = f
            break a
        case 90:
            c = C.localPort
            a = E.a46
            if (a === null) break a
            a = a.udpSocket()
            if (a === null) break a
            if ((a.bind(c) | 0) !== 0) {
                a.close()
                break a
            }
            j = C.arg1
            f = [null]
            f[0] = j
            f = DC(o3, f, 0)
            a.recv(f)
            f = [null]
            f[0] = a
            a = DC(o1, f, 0)
            j.onmessage = a
            break a
        case 91:
            a = C.arg1
            f = E.a39
            if (f === null) break a
            f(a)
            break a
        case 58:
            c = C.eventType
            a = aR[c]
            if (a === null) break a
            u = C.value
            if ((a.i0 | 0) === 1) {
                if ((u | 0 | 0) === 1) {
                    f = "ready"
                    f = f
                } else {
                    f = "wait"
                    f = f
                }
            } else f = u
            a = a.a1
            n = a.a0
            c = a.a0o | 0
            j = a.a1
            h = a.a1o | 0
            if (n !== j || c !== h) {
                p = 0
                while (1) {
                    n[(c + p) | 0](f)
                    p = (p + 1) | 0
                    if (n !== j || ((c + p) | 0) !== h) continue
                    break
                }
            }
            break a
        default:
            d9(E, C)
    }
}
function lR(p, n) {
    var r = 0,
        l = null,
        j = null,
        a = 0,
        f = null,
        h = 0,
        c = 0
    j = p.a2
    a = p.a2o | 0
    f = p.a1
    h = p.a1o | 0
    c = intMultiply_1(h, 4)
    a = intMultiply_1(a, 4)
    if ((a | 0) === (c | 0)) {
        r = 0
    } else {
        r = (((a - c) << 8) - 1) | 0
    }
    c = p.i5 | 0
    a = (c + (p.i4 | 0)) | 0
    if ((r | 0) === (a | 0)) {
        oF(p)
        c = p.i5 | 0
        a = p.i4 | 0
        f = p.a1
        h = p.a1o | 0
        a = (a + c) | 0
    }
    f = f[(h + (a >>> 10)) | 0]
    f.d[(f.o + (a & 1023)) | 0] = n
    p.i5 = (c + 1) | 0
    if ((c | 0) === 0) {
        f = p.a7
        j = f.a0
        a = f.a0o | 0
        if (j !== nullArray || a !== 0) {
            l = f.a1
            l.i0 = 256
            l.i1 = 0
            f.a0 = nullArray
            f.a0o = 0
            j[a].a0(j, a)
        }
    }
}
function lQ(x, u, v, r, s, p, q, n, o) {
    var c = null,
        A = 0,
        h = null,
        l = 0,
        f = null,
        a = 0,
        j = 0
    c = {
        a0: null,
        a1: nullArray,
        a1o: 0,
        a2: nullArray,
        a2o: 0,
        a3: {
            a0: nullArray,
            a0o: 0,
            a1: (c = {
                a0: null,
            }),
        },
    }
    h = x.a1
    l = x.a1o | 0
    f = x.a0
    a = x.a0o | 0
    a = intMultiply_1(a, 16)
    l = (intMultiply_1(l, 16) - a) >> 4
    j = (l + 1) | 0
    if (j >>> 0 > 268435455) ab()
    f = x.a2
    h = f.a0
    A = f.a0o | 0
    a = (intMultiply_1(A, 16) - a) | 0
    if (a >>> 0 < 2147483632) {
        a >>>= 3
        a = a >>> 0 > j >>> 0 ? a | 0 : j | 0
    } else {
        a = 268435455
    }
    h = c.a3
    h.a1.a0 = f
    f = Ch(((a << 4) / 16) | 0)
    c.a0 = f[0]
    c.a1 = f
    c.a1o = (0 + l) | 0
    h.a0 = f
    h.a0o = (0 + a) | 0
    a = r[s] | 0
    j = p[q] | 0
    h = n[o]
    f[l].i0 = u[v] | 0
    f[l].i1 = a
    f[l].i2 = j
    f[l].a3 = h
    c.a2 = f
    c.a2o = (((0 + l) | 0) + 1) | 0
    gB(x, c)
}
function lP(p, n, o) {
    var f = null,
        l = 0,
        r = 0,
        h = null,
        j = 0,
        c = null,
        a = 0
    f = {
        a0: null,
        a1: nullArray,
        a1o: 0,
        a2: nullArray,
        a2o: 0,
        a3: {
            a0: nullArray,
            a0o: 0,
            a1: (f = {
                a0: null,
            }),
        },
    }
    h = p.a1
    j = p.a1o | 0
    c = p.a0
    a = p.a0o | 0
    a = intMultiply_1(a, 4)
    j = (intMultiply_1(j, 4) - a) >> 2
    l = (j + 1) | 0
    if (l >>> 0 > 1073741823) ab()
    c = p.a2
    h = c.a0
    r = c.a0o | 0
    a = (intMultiply_1(r, 4) - a) | 0
    if (a >>> 0 < 2147483644) {
        a >>>= 1
        a = a >>> 0 > l >>> 0 ? a | 0 : l | 0
    } else {
        a = 1073741823
    }
    h = f.a3
    h.a1.a0 = c
    if ((a | 0) !== 0) c = new Int32Array(((a << 2) / 4) | 0)
    else {
        c = nullArray
    }
    f.a0 = c[0]
    f.a1 = c
    f.a1o = (0 + j) | 0
    h.a0 = c
    h.a0o = (0 + a) | 0
    c[j] = n[o] | 0
    f.a2 = c
    f.a2o = (((0 + j) | 0) + 1) | 0
    gy(p, f)
}
function aJ(c, a) {
    var r = null,
        l = null,
        j = 0,
        p = null,
        n = 0,
        h = null,
        f = 0
    if ((c.i0 | 0) === 1) {
        if ((a | 0 | 0) === 1) {
            h = "ready"
            h = h
        } else {
            h = "wait"
            h = h
        }
    } else h = a
    r = c.a1
    l = r.a0
    j = r.a0o | 0
    p = r.a1
    n = r.a1o | 0
    if (l !== p || j !== n) {
        f = 0
        while (1) {
            l[(j + f) | 0](h)
            f = (f + 1) | 0
            if (l !== p || ((j + f) | 0) !== n) continue
            break
        }
    }
}
function lO(x, u, v, r, s, p, q, n, o) {
    var c = null,
        A = 0,
        h = null,
        l = 0,
        f = null,
        a = 0,
        j = 0
    c = {
        a0: null,
        a1: nullArray,
        a1o: 0,
        a2: nullArray,
        a2o: 0,
        a3: {
            a0: nullArray,
            a0o: 0,
            a1: (c = {
                a0: null,
            }),
        },
    }
    h = x.a1
    l = x.a1o | 0
    f = x.a0
    a = x.a0o | 0
    a = intMultiply_1(a, 16)
    l = (intMultiply_1(l, 16) - a) >> 4
    j = (l + 1) | 0
    if (j >>> 0 > 268435455) ab()
    f = x.a2
    h = f.a0
    A = f.a0o | 0
    a = (intMultiply_1(A, 16) - a) | 0
    if (a >>> 0 < 2147483632) {
        a >>>= 3
        a = a >>> 0 > j >>> 0 ? a | 0 : j | 0
    } else {
        a = 268435455
    }
    h = c.a3
    h.a1.a0 = f
    f = Ch(((a << 4) / 16) | 0)
    c.a0 = f[0]
    c.a1 = f
    c.a1o = (0 + l) | 0
    h.a0 = f
    h.a0o = (0 + a) | 0
    a = r[s] | 0
    j = p[q] | 0
    h = n[o]
    f[l].i0 = u[v] | 0
    f[l].i1 = a
    f[l].i2 = j
    f[l].a3 = h
    c.a2 = f
    c.a2o = (((0 + l) | 0) + 1) | 0
    gB(x, c)
}
function pb(j, h) {
    var l = null,
        c = null,
        f = null,
        a = null
    l = j.a3
    if ((h | 0) !== 0) j.a2.close()
    else {
        c = j.a1
        f = j.a2
        a = [
            {
                a0: null,
                a1: null,
            },
        ]
        a[0].a0 = c
        a[0].a1 = f
        f = DB(oK, a[0])
        c.onmessage = f
        c = j.a2
        f = j.a1
        a = [
            {
                a0: null,
                a1: null,
            },
        ]
        a[0].a0 = f
        a[0].a1 = c
        f = DB(oH, a[0])
        c.recv(f)
    }
    c = {
        type: 88,
        tid: j.i0 | 0,
        arg0: h,
    }
    l.a6.postMessage(c)
}
function o9(l, j, h, f, c) {
    var p = 0,
        n = null,
        a = null
    p = l.i2 | 0
    n = l.a3
    a = {
        a0: null,
    }
    oU(a, n, p, h, f, j)
}
function o6(a, b) {
    a[b].close()
}
function o3(j, k, h, f, c) {
    var a = null,
        l = null
    a = j[k]
    if (h !== null) {
        l = {
            data: h,
            addr: f,
            port: c,
        }
        a.postMessage(l)
    } else a.postMessage(null)
}
function o1(f, g, c) {
    var l = null,
        a = null,
        j = null,
        h = 0
    l = c.data
    a = f[g]
    if (l !== null) {
        j = l.data
        h = l.addr
        a.sendto(j, h, l.port)
    } else a.close()
}
function oU(x, u, r, p, n, l) {
    var f = null,
        j = null,
        a = null,
        h = 0,
        c = null
    f = wa({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        a5: null,
    }).a
    j = f[0]
    j.a0 = oR
    j.a1 = oQ
    j.a5 = l
    a = j.a2.a[j.a2.o - 1]
    x.a0 = a
    h = u.i41 | 0
    a = j.a3
    cT(
        a,
        u,
        h,
        {
            type: 83,
            tid: h,
            addr: p,
            port: n,
            localPort: r,
        },
        0
    )
    c = a.a0
    h = a.a0o | 0
    a: {
        if (c !== nullArray || h !== 0) {
            if (c[h].a0 !== null) {
                j.i4 = 0
                j = c[h].a[c[h].o - -1]
                j.a0 = f
                j.a0o = 0
                break a
            }
        }
        c = c[h].a[c[h].o - -1]
        c = c.a1.a1
        f = a.a0
        h = a.a0o | 0
        if (f !== nullArray || h !== 0) f[h].a1(f, h)
        f = j.a5
        if (c !== null) {
            a = [
                {
                    a0: null,
                    a1: null,
                },
            ]
            a[0].a0 = c
            a[0].a1 = f
            a = DB(gJ, a[0])
            f.recv(a)
            a = [
                {
                    a0: null,
                    a1: null,
                },
            ]
            a[0].a0 = c
            a[0].a1 = f
            f = DB(gG, a[0])
            c.onmessage = f
        } else {
            console.log("null port")
            f.close()
        }
    }
}
function oR(j, k) {
    j = j[k]
    var h = 0,
        a = null,
        f = null,
        c = null
    a = j.a3.a0
    h = j.a3.a0o | 0
    f = a[h].a[a[h].o - -1]
    f = f.a1.a1
    if (a !== nullArray || h !== 0) a[h].a1(a, h)
    a = j.a5
    if (f !== null) {
        c = [
            {
                a0: null,
                a1: null,
            },
        ]
        c[0].a0 = f
        c[0].a1 = a
        c = DB(gJ, c[0])
        a.recv(c)
        c = [
            {
                a0: null,
                a1: null,
            },
        ]
        c[0].a0 = f
        c[0].a1 = a
        a = DB(gG, c[0])
        f.onmessage = a
    } else {
        console.log("null port")
        a.close()
    }
}
function oQ(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function cT(r, u, x, A, E) {
    var M = null,
        n = null,
        O = null,
        G = 0,
        L = 0,
        K = 0,
        H = 0,
        a = null,
        C = null,
        c = 0,
        f = null,
        h = 0,
        j = null,
        p = 0,
        l = 0
    M = v$({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (M = {
                i0: 0,
                a1: null,
            }),
        },
        i3: 0,
        a4: null,
        a5: null,
    }).a
    n = M[0]
    n.a0 = oN
    n.a1 = oM
    a = n.a2
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    C = a.a
    c = a.o - 1
    r.a0 = C
    r.a0o = c
    if (E) {
        a = HEAP32
        c = u.i7 | 0
        a[(0 + c) | 0] = -2
    }
    u.a6.postMessage(A)
    a = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            a1: null,
        },
    }
    a.a0 = nullArray
    a.a0o = 0
    a.a1.i0 = 0
    C = u.a48
    f = C.a1
    h = C.a1o | 0
    j = C.a2.a0
    p = C.a2.a0o | 0
    if (h < p) {
        f[h].i0 = x
        f[h].a1 = a
        C.a1 = f
        C.a1o = (h + 1) | 0
        f = f[h]
    } else {
        O = C.a0
        c = C.a0o | 0
        c = intMultiply_1(c, 8)
        h = (intMultiply_1(h, 8) - c) >> 3
        l = (h + 1) | 0
        if (l >>> 0 > 536870911) ab()
        c = (intMultiply_1(p, 8) - c) | 0
        if (c >>> 0 < 2147483640) {
            c >>>= 2
            c = c >>> 0 > l >>> 0 ? c | 0 : l | 0
        } else {
            c = 536870911
        }
        j = Ck(((c << 3) / 8) | 0)
        j[h].i0 = x
        j[h].a1 = a
        a = C.a0
        l = C.a0o | 0
        f = C.a1
        G = C.a1o | 0
        if (f === a && G === l) {
            C.a0 = j
            C.a0o = (0 + h) | 0
            C.a1 = j
            C.a1o = (((0 + h) | 0) + 1) | 0
            C.a2.a0 = j
            C.a2.a0o = (0 + c) | 0
            f = j[h]
        } else {
            p = h
            L = 0
            while (1) {
                K = (p - 1) | 0
                H = (L - 1) | 0
                j[K].i0 = f[(G + H) | 0].i0 | 0
                j[(((0 + p) | 0) + -1) | 0].a1 = f[(((G + L) | 0) + -1) | 0].a1
                if (f !== a || ((G + H) | 0) !== l) {
                    L = H
                    p = K
                    continue
                }
                break
            }
            C.a0 = j
            C.a0o = (0 + K) | 0
            C.a1 = j
            C.a1o = (((0 + h) | 0) + 1) | 0
            C.a2.a0 = j
            C.a2.a0o = (0 + c) | 0
            f = j[h]
        }
    }
    a = f.a1
    n.a4 = a
    n.i3 = 0
    a.a0 = M
    a.a0o = 0
}
function gJ(c, a) {
    var f = null
    if (a !== null) {
        f = new Uint8Array(a)
        c.a0.postMessage(f, [f.buffer])
    } else {
        c.a0.postMessage(null)
        console.log("closed from peer!")
        c.a0.onmessage = null
        c.a1.recv(null)
        c.a1.close()
    }
}
function gG(c, a) {
    var f = null
    f = a.data
    if (f !== null) c.a1.send(f)
    else {
        c.a0.onmessage = null
        c.a1.recv(null)
        c.a1.close()
    }
}
function oN(j, k) {
    j = j[k]
    var c = null,
        h = null,
        a = 0,
        f = null
    c = j.a4
    c = c.a1
    h = c.a1
    a = c.i0 | 0
    if ((a & 65535) >= 256) c.i0 = a & 255
    c = j.a2
    f = c.a1
    if (h !== null) {
        h = h
        f.i0 = 256
        f.a1 = h
    } else {
        a = f.i0 | 0
        f.a1 = null
        if ((a & 65535) < 256) f.i0 = a | 256
    }
    j.a5 = c
    j.a0 = null
    f = c.a0
    a = c.a0o | 0
    ;(f !== nullArray || a !== 0 ? f : $)[f !== nullArray || a !== 0 ? a : aa].a0(f !== nullArray || a !== 0 ? f : $, f !== nullArray || a !== 0 ? a : aa)
}
function oM(a, b) {}
function oK(h, f) {
    var c = null,
        a = null
    c = f.data
    a = h.a1
    if (c !== null) a.send(c)
    else {
        a.recv(null)
        h.a0.onmessage = null
        h.a1.close()
    }
}
function oH(c, a) {
    var f = null
    if (a !== null) {
        f = new Uint8Array(a)
        c.a0.postMessage(f, [f.buffer])
    } else {
        c.a0.postMessage(null)
        c.a1.recv(null)
        c.a0.onmessage = null
        c.a1.close()
    }
}
function gB(x, u) {
    var l = 0,
        n = 0,
        c = null,
        f = null,
        a = 0,
        j = 0,
        h = 0,
        r = 0,
        p = 0
    c = x.a0
    l = x.a0o | 0
    f = x.a1
    a = x.a1o | 0
    a = (intMultiply_1(a, 16) - intMultiply_1(l, 16)) | 0
    f = u.a1
    j = u.a1o | 0
    n = -(a >> 4) | 0
    if (a >>> 0 >= 16) {
        h = a >>> 4
        r = (n + h) | 0
        if (l < ((j + n) | 0))
            while (1) {
                a = (h - 1) | 0
                p = (r - 1) | 0
                f[(j + p) | 0].i0 = c[(l + a) | 0].i0 | 0
                f[(((j + r) | 0) + -1) | 0].i1 = c[(((l + h) | 0) + -1) | 0].i1 | 0
                f[(((j + r) | 0) + -1) | 0].i2 = c[(((l + h) | 0) + -1) | 0].i2 | 0
                f[(((j + r) | 0) + -1) | 0].a3 = c[(((l + h) | 0) + -1) | 0].a3
                if (f !== f || ((j + n) | 0) !== ((j + p) | 0)) {
                    h = a
                    r = p
                    continue
                }
                break
            }
        else {
            p = (a - 16) | 0
            if (((p & 16) | 0) !== 0) {
                h = n
                a = 0
            } else {
                f[(j + n) | 0].i0 = c[l].i0 | 0
                f[(j + n) | 0].i1 = c[l].i1 | 0
                f[(j + n) | 0].i2 = c[l].i2 | 0
                f[(j + n) | 0].a3 = c[l].a3
                h = (n + 1) | 0
                a = 1
            }
            if (p >>> 0 >= 16)
                while (1) {
                    f[(j + h) | 0].i0 = c[(l + a) | 0].i0 | 0
                    f[(j + h) | 0].i1 = c[(l + a) | 0].i1 | 0
                    f[(j + h) | 0].i2 = c[(l + a) | 0].i2 | 0
                    f[(j + h) | 0].a3 = c[(l + a) | 0].a3
                    f[(((j + h) | 0) + 1) | 0].i0 = c[(((l + a) | 0) + 1) | 0].i0 | 0
                    f[(((j + h) | 0) + 1) | 0].i1 = c[(((l + a) | 0) + 1) | 0].i1 | 0
                    f[(((j + h) | 0) + 1) | 0].i2 = c[(((l + a) | 0) + 1) | 0].i2 | 0
                    f[(((j + h) | 0) + 1) | 0].a3 = c[(((l + a) | 0) + 1) | 0].a3
                    h = (h + 2) | 0
                    if (f !== f || ((j + r) | 0) !== ((j + h) | 0)) {
                        a = (a + 2) | 0
                        continue
                    }
                    break
                }
        }
    }
    u.a1 = f
    u.a1o = (j + ((n << 4) >> 4)) | 0
    c = x.a0
    a = x.a0o | 0
    x.a0 = f
    x.a0o = (j + ((n << 4) >> 4)) | 0
    u.a1 = c
    u.a1o = a
    c = x.a1
    a = x.a1o | 0
    f = u.a2
    j = u.a2o | 0
    x.a1 = f
    x.a1o = j
    u.a2 = c
    u.a2o = a
    c = x.a2.a0
    a = x.a2.a0o | 0
    f = u.a3.a0
    j = u.a3.a0o | 0
    x.a2.a0 = f
    x.a2.a0o = j
    u.a3.a0 = c
    u.a3.a0o = a
    c = u.a1
    a = u.a1o | 0
    u.a0 = c[a]
}
function gy(C, A) {
    var n = 0,
        r = 0,
        l = null,
        h = null,
        c = 0,
        j = 0,
        a = 0,
        f = 0,
        u = 0,
        p = 0,
        x = 0
    l = C.a0
    n = C.a0o | 0
    h = C.a1
    c = C.a1o | 0
    c = (intMultiply_1(c, 4) - intMultiply_1(n, 4)) | 0
    h = A.a1
    j = A.a1o | 0
    r = -(c >> 2) | 0
    if (c >>> 0 >= 4) {
        a = c >>> 2
        f = (r + a) | 0
        if (n < ((j + r) | 0)) {
            u = (c - 4) | 0
            c = ((u >>> 2) + 1) & 3
            if ((c | 0) !== 0) {
                p = 0
                while (1) {
                    a = (a - 1) | 0
                    f = (f - 1) | 0
                    h[(j + f) | 0] = l[(n + a) | 0] | 0
                    p = (p + 1) | 0
                    if ((p | 0) !== (c | 0)) continue
                    break
                }
            }
            if (u >>> 0 >= 12)
                while (1) {
                    h[(((j + f) | 0) + -1) | 0] = l[(((n + a) | 0) + -1) | 0] | 0
                    h[(((j + f) | 0) + -2) | 0] = l[(((n + a) | 0) + -2) | 0] | 0
                    h[(((j + f) | 0) + -3) | 0] = l[(((n + a) | 0) + -3) | 0] | 0
                    a = (a - 4) | 0
                    f = (f - 4) | 0
                    h[(j + f) | 0] = l[(n + a) | 0] | 0
                    if (h !== h || ((j + r) | 0) !== ((j + f) | 0)) continue
                    break
                }
        } else {
            u = (c - 4) | 0
            p = ((u >>> 2) + 1) & 7
            if ((p | 0) !== 0) {
                a = r
                x = 0
                c = 0
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0] | 0
                    x = (x + 1) | 0
                    a = (a + 1) | 0
                    c = (c + 1) | 0
                    if ((x | 0) !== (p | 0)) continue
                    break
                }
            } else {
                a = r
                c = 0
            }
            if (u >>> 0 >= 28)
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0] | 0
                    h[(((j + a) | 0) + 1) | 0] = l[(((n + c) | 0) + 1) | 0] | 0
                    h[(((j + a) | 0) + 2) | 0] = l[(((n + c) | 0) + 2) | 0] | 0
                    h[(((j + a) | 0) + 3) | 0] = l[(((n + c) | 0) + 3) | 0] | 0
                    h[(((j + a) | 0) + 4) | 0] = l[(((n + c) | 0) + 4) | 0] | 0
                    h[(((j + a) | 0) + 5) | 0] = l[(((n + c) | 0) + 5) | 0] | 0
                    h[(((j + a) | 0) + 6) | 0] = l[(((n + c) | 0) + 6) | 0] | 0
                    h[(((j + a) | 0) + 7) | 0] = l[(((n + c) | 0) + 7) | 0] | 0
                    a = (a + 8) | 0
                    if (h !== h || ((j + f) | 0) !== ((j + a) | 0)) {
                        c = (c + 8) | 0
                        continue
                    }
                    break
                }
        }
    }
    A.a1 = h
    A.a1o = (j + ((r << 2) >> 2)) | 0
    l = C.a0
    c = C.a0o | 0
    C.a0 = h
    C.a0o = (j + ((r << 2) >> 2)) | 0
    A.a1 = l
    A.a1o = c
    l = C.a1
    c = C.a1o | 0
    h = A.a2
    j = A.a2o | 0
    C.a1 = h
    C.a1o = j
    A.a2 = l
    A.a2o = c
    l = C.a2.a0
    c = C.a2.a0o | 0
    h = A.a3.a0
    j = A.a3.a0o | 0
    C.a2.a0 = h
    C.a2.a0o = j
    A.a3.a0 = l
    A.a3.a0o = c
    l = A.a1
    c = A.a1o | 0
    A.a0 = l[c]
}
function oF(x) {
    var u = null,
        r = 0,
        p = 0,
        a = 0,
        n = null,
        f = null,
        c = null,
        j = 0,
        h = null,
        l = 0
    a = x.i4 | 0
    n = [nullObj]
    if (a >>> 0 > 1023) {
        x.i4 = (a - 1024) | 0
        f = x.a1
        a = x.a1o | 0
        c = f[a]
        n[0] = c
        x.a1 = f
        x.a1o = (a + 1) | 0
        gx(x, n, 0)
    } else {
        f = x.a2
        a = x.a2o | 0
        c = x.a1
        j = x.a1o | 0
        a = intMultiply_1(a, 4)
        j = (a - intMultiply_1(j, 4)) | 0
        u = x.a3
        h = u.a0
        l = u.a0o | 0
        f = x.a0
        r = intMultiply_1(0, 4)
        l = intMultiply_1(l, 4)
        p = (l - r) | 0
        if (j >>> 0 < p >>> 0) {
            if ((l | 0) === (a | 0)) {
                f = DD([], 0, 1024, nullObj)
                n[0] = {
                    d: f,
                    o: 0,
                }
                oD(x, n, 0)
                f = x.a1
                a = x.a1o | 0
                c = f[a]
                n[0] = c
                x.a1 = f
                x.a1o = (a + 1) | 0
                gx(x, n, 0)
            } else {
                f = DD([], 0, 1024, nullObj)
                n[0] = {
                    d: f,
                    o: 0,
                }
                oE(x, n, 0)
            }
        } else {
            h = {
                a0: nullArray,
                a1: nullArray,
                a1o: 0,
                a2: nullArray,
                a2o: 0,
                a3: {
                    a0: nullArray,
                    a0o: 0,
                    a1: (h = {
                        a0: null,
                    }),
                },
            }
            a = (l | 0) === (r | 0) ? 1 | 0 : (p >> 1) | 0
            f = h.a3
            f.a1.a0 = u
            if (a >>> 0 > 1073741823) bj()
            c = DD([], 0, ((a << 2) / 4) | 0, null)
            h.a0 = c
            h.a2 = c
            h.a2o = (0 + (j >> 2)) | 0
            h.a1 = c
            h.a1o = (0 + (j >> 2)) | 0
            f.a0 = c
            f.a0o = (0 + a) | 0
            c = DD([], 0, 1024, nullObj)
            n[0] = {
                d: c,
                o: 0,
            }
            oB(h, n, 0)
            c = x.a2
            a = x.a2o | 0
            n = x.a1
            j = x.a1o | 0
            if (c !== n || a !== j) {
                j = 0
                while (1) {
                    j = (j - 1) | 0
                    oA(h, c, (a + j) | 0)
                    n = x.a1
                    l = x.a1o | 0
                    if (c !== n || ((a + j) | 0) !== l) continue
                    break
                }
            }
            c = h.a0
            x.a0 = c
            c = h.a1
            a = h.a1o | 0
            x.a1 = c
            x.a1o = a
            c = h.a2
            a = h.a2o | 0
            x.a2 = c
            x.a2o = a
            c = f.a0
            a = f.a0o | 0
            u.a0 = c
            u.a0o = a
        }
    }
}
function gx(E, C, D) {
    var r = null,
        p = 0,
        j = null,
        h = 0,
        a = null,
        f = 0,
        l = 0,
        u = 0,
        c = 0,
        n = 0,
        x = 0,
        A = 0
    r = E.a2
    p = E.a2o | 0
    j = E.a3.a0
    h = E.a3.a0o | 0
    if (r === j && p === h) {
        j = E.a1
        h = E.a1o | 0
        a = E.a0
        f = intMultiply_1(0, 4)
        if (h > 0) {
            l = intMultiply_1(h, 4)
            f = (l - f) | 0
            u = ((((f >> 2) + 1) | 0) / -2) | 0
            l = (intMultiply_1(p, 4) - l) | 0
            if (l >>> 0 >= 4) {
                c = l >>> 2
                n = (u + c) | 0
                if ((f | 0) < -8) {
                    x = (l - 4) | 0
                    f = ((x >>> 2) + 1) & 3
                    if ((f | 0) !== 0) {
                        p = 0
                        while (1) {
                            c = (c - 1) | 0
                            n = (n - 1) | 0
                            a = j[(h + c) | 0]
                            j[(h + n) | 0] = a
                            p = (p + 1) | 0
                            if ((p | 0) !== (f | 0)) continue
                            break
                        }
                    }
                    if (x >>> 0 >= 12)
                        while (1) {
                            a = j[(((h + c) | 0) + -1) | 0]
                            j[(((h + n) | 0) + -1) | 0] = a
                            a = j[(((h + c) | 0) + -2) | 0]
                            j[(((h + n) | 0) + -2) | 0] = a
                            a = j[(((h + c) | 0) + -3) | 0]
                            j[(((h + n) | 0) + -3) | 0] = a
                            c = (c - 4) | 0
                            n = (n - 4) | 0
                            a = j[(h + c) | 0]
                            j[(h + n) | 0] = a
                            if (j !== j || ((h + u) | 0) !== ((h + n) | 0)) continue
                            break
                        }
                } else {
                    x = (l - 4) | 0
                    p = ((x >>> 2) + 1) & 7
                    if ((p | 0) !== 0) {
                        c = u
                        A = 0
                        f = 0
                        while (1) {
                            a = j[(h + f) | 0]
                            j[(h + c) | 0] = a
                            A = (A + 1) | 0
                            c = (c + 1) | 0
                            f = (f + 1) | 0
                            if ((A | 0) !== (p | 0)) continue
                            break
                        }
                    } else {
                        c = u
                        f = 0
                    }
                    if (x >>> 0 >= 28)
                        while (1) {
                            a = j[(h + f) | 0]
                            j[(h + c) | 0] = a
                            a = j[(((h + f) | 0) + 1) | 0]
                            j[(((h + c) | 0) + 1) | 0] = a
                            a = j[(((h + f) | 0) + 2) | 0]
                            j[(((h + c) | 0) + 2) | 0] = a
                            a = j[(((h + f) | 0) + 3) | 0]
                            j[(((h + c) | 0) + 3) | 0] = a
                            a = j[(((h + f) | 0) + 4) | 0]
                            j[(((h + c) | 0) + 4) | 0] = a
                            a = j[(((h + f) | 0) + 5) | 0]
                            j[(((h + c) | 0) + 5) | 0] = a
                            a = j[(((h + f) | 0) + 6) | 0]
                            j[(((h + c) | 0) + 6) | 0] = a
                            a = j[(((h + f) | 0) + 7) | 0]
                            j[(((h + c) | 0) + 7) | 0] = a
                            c = (c + 8) | 0
                            if (j !== j || ((h + n) | 0) !== ((h + c) | 0)) {
                                f = (f + 8) | 0
                                continue
                            }
                            break
                        }
                }
            }
            E.a2 = j
            E.a2o = (((h + u) | 0) + (l >> 2)) | 0
            a = E.a1
            f = E.a1o | 0
            E.a1 = a
            E.a1o = (f + u) | 0
            r = j
            p = (((h + u) | 0) + (l >> 2)) | 0
        } else {
            h = intMultiply_1(p, 4)
            p = (h | 0) === (f | 0) ? 1 | 0 : ((h - f) >> 1) | 0
            if (p >>> 0 > 1073741823) bj()
            r = DD([], 0, ((p << 2) / 4) | 0, null)
            h = p >>> 2
            j = E.a1
            n = E.a1o | 0
            a = E.a2
            l = E.a2o | 0
            x = intMultiply_1(n, 4)
            l = intMultiply_1(l, 4)
            f = (l - x) | 0
            u = (h + (f >> 2)) | 0
            if ((l | 0) === (x | 0)) {
                u = h
            } else {
                A = (f - 4) | 0
                x = ((A >>> 2) + 1) & 7
                if ((x | 0) !== 0) {
                    l = h
                    c = 0
                    f = 0
                    while (1) {
                        a = j[(n + f) | 0]
                        r[l] = a
                        c = (c + 1) | 0
                        f = (f + 1) | 0
                        l = (l + 1) | 0
                        if ((c | 0) !== (x | 0)) continue
                        break
                    }
                } else {
                    l = h
                    f = 0
                }
                if (A >>> 0 >= 28)
                    while (1) {
                        a = j[(n + f) | 0]
                        r[l] = a
                        a = j[(((n + f) | 0) + 1) | 0]
                        r[(((0 + l) | 0) + 1) | 0] = a
                        a = j[(((n + f) | 0) + 2) | 0]
                        r[(((0 + l) | 0) + 2) | 0] = a
                        a = j[(((n + f) | 0) + 3) | 0]
                        r[(((0 + l) | 0) + 3) | 0] = a
                        a = j[(((n + f) | 0) + 4) | 0]
                        r[(((0 + l) | 0) + 4) | 0] = a
                        a = j[(((n + f) | 0) + 5) | 0]
                        r[(((0 + l) | 0) + 5) | 0] = a
                        a = j[(((n + f) | 0) + 6) | 0]
                        r[(((0 + l) | 0) + 6) | 0] = a
                        a = j[(((n + f) | 0) + 7) | 0]
                        r[(((0 + l) | 0) + 7) | 0] = a
                        l = (l + 8) | 0
                        if (r !== r || ((0 + l) | 0) !== ((0 + u) | 0)) {
                            f = (f + 8) | 0
                            continue
                        }
                        break
                    }
            }
            E.a0 = r
            E.a1 = r
            E.a1o = (0 + h) | 0
            E.a2 = r
            E.a2o = (0 + u) | 0
            E.a3.a0 = r
            E.a3.a0o = (0 + p) | 0
            p = (0 + u) | 0
            r = r
        }
    }
    j = C[D]
    r[p] = j
    r = E.a2
    p = E.a2o | 0
    E.a2 = r
    E.a2o = (p + 1) | 0
}
function oE(E, C, D) {
    var r = null,
        p = 0,
        j = null,
        h = 0,
        a = null,
        f = 0,
        l = 0,
        u = 0,
        c = 0,
        n = 0,
        x = 0,
        A = 0
    r = E.a2
    p = E.a2o | 0
    j = E.a3.a0
    h = E.a3.a0o | 0
    if (r === j && p === h) {
        j = E.a1
        h = E.a1o | 0
        a = E.a0
        f = intMultiply_1(0, 4)
        if (h > 0) {
            l = intMultiply_1(h, 4)
            f = (l - f) | 0
            u = ((((f >> 2) + 1) | 0) / -2) | 0
            l = (intMultiply_1(p, 4) - l) | 0
            if (l >>> 0 >= 4) {
                c = l >>> 2
                n = (u + c) | 0
                if ((f | 0) < -8) {
                    x = (l - 4) | 0
                    f = ((x >>> 2) + 1) & 3
                    if ((f | 0) !== 0) {
                        p = 0
                        while (1) {
                            c = (c - 1) | 0
                            n = (n - 1) | 0
                            a = j[(h + c) | 0]
                            j[(h + n) | 0] = a
                            p = (p + 1) | 0
                            if ((p | 0) !== (f | 0)) continue
                            break
                        }
                    }
                    if (x >>> 0 >= 12)
                        while (1) {
                            a = j[(((h + c) | 0) + -1) | 0]
                            j[(((h + n) | 0) + -1) | 0] = a
                            a = j[(((h + c) | 0) + -2) | 0]
                            j[(((h + n) | 0) + -2) | 0] = a
                            a = j[(((h + c) | 0) + -3) | 0]
                            j[(((h + n) | 0) + -3) | 0] = a
                            c = (c - 4) | 0
                            n = (n - 4) | 0
                            a = j[(h + c) | 0]
                            j[(h + n) | 0] = a
                            if (j !== j || ((h + u) | 0) !== ((h + n) | 0)) continue
                            break
                        }
                } else {
                    x = (l - 4) | 0
                    p = ((x >>> 2) + 1) & 7
                    if ((p | 0) !== 0) {
                        c = u
                        A = 0
                        f = 0
                        while (1) {
                            a = j[(h + f) | 0]
                            j[(h + c) | 0] = a
                            A = (A + 1) | 0
                            c = (c + 1) | 0
                            f = (f + 1) | 0
                            if ((A | 0) !== (p | 0)) continue
                            break
                        }
                    } else {
                        c = u
                        f = 0
                    }
                    if (x >>> 0 >= 28)
                        while (1) {
                            a = j[(h + f) | 0]
                            j[(h + c) | 0] = a
                            a = j[(((h + f) | 0) + 1) | 0]
                            j[(((h + c) | 0) + 1) | 0] = a
                            a = j[(((h + f) | 0) + 2) | 0]
                            j[(((h + c) | 0) + 2) | 0] = a
                            a = j[(((h + f) | 0) + 3) | 0]
                            j[(((h + c) | 0) + 3) | 0] = a
                            a = j[(((h + f) | 0) + 4) | 0]
                            j[(((h + c) | 0) + 4) | 0] = a
                            a = j[(((h + f) | 0) + 5) | 0]
                            j[(((h + c) | 0) + 5) | 0] = a
                            a = j[(((h + f) | 0) + 6) | 0]
                            j[(((h + c) | 0) + 6) | 0] = a
                            a = j[(((h + f) | 0) + 7) | 0]
                            j[(((h + c) | 0) + 7) | 0] = a
                            c = (c + 8) | 0
                            if (j !== j || ((h + n) | 0) !== ((h + c) | 0)) {
                                f = (f + 8) | 0
                                continue
                            }
                            break
                        }
                }
            }
            E.a2 = j
            E.a2o = (((h + u) | 0) + (l >> 2)) | 0
            a = E.a1
            f = E.a1o | 0
            E.a1 = a
            E.a1o = (f + u) | 0
            r = j
            p = (((h + u) | 0) + (l >> 2)) | 0
        } else {
            h = intMultiply_1(p, 4)
            p = (h | 0) === (f | 0) ? 1 | 0 : ((h - f) >> 1) | 0
            if (p >>> 0 > 1073741823) bj()
            r = DD([], 0, ((p << 2) / 4) | 0, null)
            h = p >>> 2
            j = E.a1
            n = E.a1o | 0
            a = E.a2
            l = E.a2o | 0
            x = intMultiply_1(n, 4)
            l = intMultiply_1(l, 4)
            f = (l - x) | 0
            u = (h + (f >> 2)) | 0
            if ((l | 0) === (x | 0)) {
                u = h
            } else {
                A = (f - 4) | 0
                x = ((A >>> 2) + 1) & 7
                if ((x | 0) !== 0) {
                    l = h
                    c = 0
                    f = 0
                    while (1) {
                        a = j[(n + f) | 0]
                        r[l] = a
                        c = (c + 1) | 0
                        f = (f + 1) | 0
                        l = (l + 1) | 0
                        if ((c | 0) !== (x | 0)) continue
                        break
                    }
                } else {
                    l = h
                    f = 0
                }
                if (A >>> 0 >= 28)
                    while (1) {
                        a = j[(n + f) | 0]
                        r[l] = a
                        a = j[(((n + f) | 0) + 1) | 0]
                        r[(((0 + l) | 0) + 1) | 0] = a
                        a = j[(((n + f) | 0) + 2) | 0]
                        r[(((0 + l) | 0) + 2) | 0] = a
                        a = j[(((n + f) | 0) + 3) | 0]
                        r[(((0 + l) | 0) + 3) | 0] = a
                        a = j[(((n + f) | 0) + 4) | 0]
                        r[(((0 + l) | 0) + 4) | 0] = a
                        a = j[(((n + f) | 0) + 5) | 0]
                        r[(((0 + l) | 0) + 5) | 0] = a
                        a = j[(((n + f) | 0) + 6) | 0]
                        r[(((0 + l) | 0) + 6) | 0] = a
                        a = j[(((n + f) | 0) + 7) | 0]
                        r[(((0 + l) | 0) + 7) | 0] = a
                        l = (l + 8) | 0
                        if (r !== r || ((0 + l) | 0) !== ((0 + u) | 0)) {
                            f = (f + 8) | 0
                            continue
                        }
                        break
                    }
            }
            E.a0 = r
            E.a1 = r
            E.a1o = (0 + h) | 0
            E.a2 = r
            E.a2o = (0 + u) | 0
            E.a3.a0 = r
            E.a3.a0o = (0 + p) | 0
            p = (0 + u) | 0
            r = r
        }
    }
    j = C[D]
    r[p] = j
    r = E.a2
    p = E.a2o | 0
    E.a2 = r
    E.a2o = (p + 1) | 0
}
function oD(G, E, F) {
    var l = null,
        j = 0,
        p = null,
        n = 0,
        c = null,
        f = 0,
        a = 0,
        A = 0,
        h = 0,
        r = 0,
        u = 0,
        x = 0,
        C = 0
    l = G.a1
    j = G.a1o | 0
    p = G.a0
    if (l === p && j === 0) {
        p = G.a2
        n = G.a2o | 0
        c = G.a3.a0
        f = G.a3.a0o | 0
        a = intMultiply_1(f, 4)
        if (n < f) {
            f = intMultiply_1(n, 4)
            A = (((((a - f) >> 2) + 1) | 0) / 2) | 0
            a = intMultiply_1(j, 4)
            if ((f | 0) === (a | 0)) {
                j = n
                c = p
                f = A
            } else {
                h = (f - a) | 0
                f = (A + (-(h >> 2) | 0)) | 0
                if (h >>> 0 >= 4) {
                    a = h >>> 2
                    r = (f + a) | 0
                    if (j < ((n + f) | 0)) {
                        h = (h - 4) | 0
                        u = ((h >>> 2) + 1) & 3
                        if ((u | 0) !== 0) {
                            x = 0
                            while (1) {
                                a = (a - 1) | 0
                                r = (r - 1) | 0
                                c = l[(j + a) | 0]
                                p[(n + r) | 0] = c
                                x = (x + 1) | 0
                                if ((x | 0) !== (u | 0)) continue
                                break
                            }
                        }
                        if (h >>> 0 >= 12)
                            while (1) {
                                c = l[(((j + a) | 0) + -1) | 0]
                                p[(((n + r) | 0) + -1) | 0] = c
                                c = l[(((j + a) | 0) + -2) | 0]
                                p[(((n + r) | 0) + -2) | 0] = c
                                c = l[(((j + a) | 0) + -3) | 0]
                                p[(((n + r) | 0) + -3) | 0] = c
                                a = (a - 4) | 0
                                r = (r - 4) | 0
                                c = l[(j + a) | 0]
                                p[(n + r) | 0] = c
                                if (p !== p || ((n + f) | 0) !== ((n + r) | 0)) continue
                                break
                            }
                    } else {
                        x = (h - 4) | 0
                        C = ((x >>> 2) + 1) & 7
                        if ((C | 0) !== 0) {
                            h = f
                            u = 0
                            a = 0
                            while (1) {
                                c = l[(j + a) | 0]
                                p[(n + h) | 0] = c
                                u = (u + 1) | 0
                                h = (h + 1) | 0
                                a = (a + 1) | 0
                                if ((u | 0) !== (C | 0)) continue
                                break
                            }
                        } else {
                            h = f
                            a = 0
                        }
                        if (x >>> 0 >= 28)
                            while (1) {
                                c = l[(j + a) | 0]
                                p[(n + h) | 0] = c
                                c = l[(((j + a) | 0) + 1) | 0]
                                p[(((n + h) | 0) + 1) | 0] = c
                                c = l[(((j + a) | 0) + 2) | 0]
                                p[(((n + h) | 0) + 2) | 0] = c
                                c = l[(((j + a) | 0) + 3) | 0]
                                p[(((n + h) | 0) + 3) | 0] = c
                                c = l[(((j + a) | 0) + 4) | 0]
                                p[(((n + h) | 0) + 4) | 0] = c
                                c = l[(((j + a) | 0) + 5) | 0]
                                p[(((n + h) | 0) + 5) | 0] = c
                                c = l[(((j + a) | 0) + 6) | 0]
                                p[(((n + h) | 0) + 6) | 0] = c
                                c = l[(((j + a) | 0) + 7) | 0]
                                p[(((n + h) | 0) + 7) | 0] = c
                                h = (h + 8) | 0
                                if (p !== p || ((n + r) | 0) !== ((n + h) | 0)) {
                                    a = (a + 8) | 0
                                    continue
                                }
                                break
                            }
                    }
                }
                c = G.a2
                j = G.a2o | 0
            }
            G.a1 = p
            G.a1o = (((n + A) | 0) + ((intMultiply_1((n + f) | 0, 4) - intMultiply_1((n + A) | 0, 4)) >> 2)) | 0
            G.a2 = c
            G.a2o = (j + A) | 0
            l = p
            j = (((n + A) | 0) + ((intMultiply_1((n + f) | 0, 4) - intMultiply_1((n + A) | 0, 4)) >> 2)) | 0
        } else {
            j = intMultiply_1(j, 4)
            j = (a | 0) === (j | 0) ? 1 | 0 : ((a - j) >> 1) | 0
            if (j >>> 0 > 1073741823) bj()
            l = DD([], 0, ((j << 2) / 4) | 0, null)
            n = (j + 3) >>> 2
            p = G.a1
            A = G.a1o | 0
            c = G.a2
            f = G.a2o | 0
            u = intMultiply_1(A, 4)
            f = intMultiply_1(f, 4)
            a = (f - u) | 0
            h = (n + (a >> 2)) | 0
            if ((f | 0) === (u | 0)) {
                h = n
            } else {
                x = (a - 4) | 0
                u = ((x >>> 2) + 1) & 7
                if ((u | 0) !== 0) {
                    f = n
                    C = 0
                    a = 0
                    while (1) {
                        c = p[(A + a) | 0]
                        l[f] = c
                        C = (C + 1) | 0
                        a = (a + 1) | 0
                        f = (f + 1) | 0
                        if ((C | 0) !== (u | 0)) continue
                        break
                    }
                } else {
                    f = n
                    a = 0
                }
                if (x >>> 0 >= 28)
                    while (1) {
                        c = p[(A + a) | 0]
                        l[f] = c
                        c = p[(((A + a) | 0) + 1) | 0]
                        l[(((0 + f) | 0) + 1) | 0] = c
                        c = p[(((A + a) | 0) + 2) | 0]
                        l[(((0 + f) | 0) + 2) | 0] = c
                        c = p[(((A + a) | 0) + 3) | 0]
                        l[(((0 + f) | 0) + 3) | 0] = c
                        c = p[(((A + a) | 0) + 4) | 0]
                        l[(((0 + f) | 0) + 4) | 0] = c
                        c = p[(((A + a) | 0) + 5) | 0]
                        l[(((0 + f) | 0) + 5) | 0] = c
                        c = p[(((A + a) | 0) + 6) | 0]
                        l[(((0 + f) | 0) + 6) | 0] = c
                        c = p[(((A + a) | 0) + 7) | 0]
                        l[(((0 + f) | 0) + 7) | 0] = c
                        f = (f + 8) | 0
                        if (l !== l || ((0 + f) | 0) !== ((0 + h) | 0)) {
                            a = (a + 8) | 0
                            continue
                        }
                        break
                    }
            }
            G.a0 = l
            G.a1 = l
            G.a1o = (0 + n) | 0
            G.a2 = l
            G.a2o = (0 + h) | 0
            G.a3.a0 = l
            G.a3.a0o = (0 + j) | 0
            j = (0 + n) | 0
            l = l
        }
    }
    p = E[F]
    l[(j + -1) | 0] = p
    l = G.a1
    j = G.a1o | 0
    G.a1 = l
    G.a1o = (j + -1) | 0
}
function bj() {
    ab()
}
function oB(E, C, D) {
    var r = null,
        p = 0,
        j = null,
        h = 0,
        a = null,
        f = 0,
        l = 0,
        u = 0,
        c = 0,
        n = 0,
        x = 0,
        A = 0
    r = E.a2
    p = E.a2o | 0
    j = E.a3.a0
    h = E.a3.a0o | 0
    if (r === j && p === h) {
        j = E.a1
        h = E.a1o | 0
        a = E.a0
        f = intMultiply_1(0, 4)
        if (h > 0) {
            l = intMultiply_1(h, 4)
            f = (l - f) | 0
            u = ((((f >> 2) + 1) | 0) / -2) | 0
            l = (intMultiply_1(p, 4) - l) | 0
            if (l >>> 0 >= 4) {
                c = l >>> 2
                n = (u + c) | 0
                if ((f | 0) < -8) {
                    x = (l - 4) | 0
                    f = ((x >>> 2) + 1) & 3
                    if ((f | 0) !== 0) {
                        p = 0
                        while (1) {
                            c = (c - 1) | 0
                            n = (n - 1) | 0
                            a = j[(h + c) | 0]
                            j[(h + n) | 0] = a
                            p = (p + 1) | 0
                            if ((p | 0) !== (f | 0)) continue
                            break
                        }
                    }
                    if (x >>> 0 >= 12)
                        while (1) {
                            a = j[(((h + c) | 0) + -1) | 0]
                            j[(((h + n) | 0) + -1) | 0] = a
                            a = j[(((h + c) | 0) + -2) | 0]
                            j[(((h + n) | 0) + -2) | 0] = a
                            a = j[(((h + c) | 0) + -3) | 0]
                            j[(((h + n) | 0) + -3) | 0] = a
                            c = (c - 4) | 0
                            n = (n - 4) | 0
                            a = j[(h + c) | 0]
                            j[(h + n) | 0] = a
                            if (j !== j || ((h + u) | 0) !== ((h + n) | 0)) continue
                            break
                        }
                } else {
                    x = (l - 4) | 0
                    p = ((x >>> 2) + 1) & 7
                    if ((p | 0) !== 0) {
                        c = u
                        A = 0
                        f = 0
                        while (1) {
                            a = j[(h + f) | 0]
                            j[(h + c) | 0] = a
                            A = (A + 1) | 0
                            c = (c + 1) | 0
                            f = (f + 1) | 0
                            if ((A | 0) !== (p | 0)) continue
                            break
                        }
                    } else {
                        c = u
                        f = 0
                    }
                    if (x >>> 0 >= 28)
                        while (1) {
                            a = j[(h + f) | 0]
                            j[(h + c) | 0] = a
                            a = j[(((h + f) | 0) + 1) | 0]
                            j[(((h + c) | 0) + 1) | 0] = a
                            a = j[(((h + f) | 0) + 2) | 0]
                            j[(((h + c) | 0) + 2) | 0] = a
                            a = j[(((h + f) | 0) + 3) | 0]
                            j[(((h + c) | 0) + 3) | 0] = a
                            a = j[(((h + f) | 0) + 4) | 0]
                            j[(((h + c) | 0) + 4) | 0] = a
                            a = j[(((h + f) | 0) + 5) | 0]
                            j[(((h + c) | 0) + 5) | 0] = a
                            a = j[(((h + f) | 0) + 6) | 0]
                            j[(((h + c) | 0) + 6) | 0] = a
                            a = j[(((h + f) | 0) + 7) | 0]
                            j[(((h + c) | 0) + 7) | 0] = a
                            c = (c + 8) | 0
                            if (j !== j || ((h + n) | 0) !== ((h + c) | 0)) {
                                f = (f + 8) | 0
                                continue
                            }
                            break
                        }
                }
            }
            E.a2 = j
            E.a2o = (((h + u) | 0) + (l >> 2)) | 0
            a = E.a1
            f = E.a1o | 0
            E.a1 = a
            E.a1o = (f + u) | 0
            r = j
            p = (((h + u) | 0) + (l >> 2)) | 0
        } else {
            h = intMultiply_1(p, 4)
            p = (h | 0) === (f | 0) ? 1 | 0 : ((h - f) >> 1) | 0
            if (p >>> 0 > 1073741823) bj()
            r = DD([], 0, ((p << 2) / 4) | 0, null)
            h = p >>> 2
            j = E.a1
            n = E.a1o | 0
            a = E.a2
            l = E.a2o | 0
            x = intMultiply_1(n, 4)
            l = intMultiply_1(l, 4)
            f = (l - x) | 0
            u = (h + (f >> 2)) | 0
            if ((l | 0) === (x | 0)) {
                u = h
            } else {
                A = (f - 4) | 0
                x = ((A >>> 2) + 1) & 7
                if ((x | 0) !== 0) {
                    l = h
                    c = 0
                    f = 0
                    while (1) {
                        a = j[(n + f) | 0]
                        r[l] = a
                        c = (c + 1) | 0
                        f = (f + 1) | 0
                        l = (l + 1) | 0
                        if ((c | 0) !== (x | 0)) continue
                        break
                    }
                } else {
                    l = h
                    f = 0
                }
                if (A >>> 0 >= 28)
                    while (1) {
                        a = j[(n + f) | 0]
                        r[l] = a
                        a = j[(((n + f) | 0) + 1) | 0]
                        r[(((0 + l) | 0) + 1) | 0] = a
                        a = j[(((n + f) | 0) + 2) | 0]
                        r[(((0 + l) | 0) + 2) | 0] = a
                        a = j[(((n + f) | 0) + 3) | 0]
                        r[(((0 + l) | 0) + 3) | 0] = a
                        a = j[(((n + f) | 0) + 4) | 0]
                        r[(((0 + l) | 0) + 4) | 0] = a
                        a = j[(((n + f) | 0) + 5) | 0]
                        r[(((0 + l) | 0) + 5) | 0] = a
                        a = j[(((n + f) | 0) + 6) | 0]
                        r[(((0 + l) | 0) + 6) | 0] = a
                        a = j[(((n + f) | 0) + 7) | 0]
                        r[(((0 + l) | 0) + 7) | 0] = a
                        l = (l + 8) | 0
                        if (r !== r || ((0 + l) | 0) !== ((0 + u) | 0)) {
                            f = (f + 8) | 0
                            continue
                        }
                        break
                    }
            }
            E.a0 = r
            E.a1 = r
            E.a1o = (0 + h) | 0
            E.a2 = r
            E.a2o = (0 + u) | 0
            E.a3.a0 = r
            E.a3.a0o = (0 + p) | 0
            p = (0 + u) | 0
            r = r
        }
    }
    j = C[D]
    r[p] = j
    r = E.a2
    p = E.a2o | 0
    E.a2 = r
    E.a2o = (p + 1) | 0
}
function oA(G, E, F) {
    var l = null,
        j = 0,
        p = null,
        n = 0,
        c = null,
        f = 0,
        a = 0,
        A = 0,
        h = 0,
        r = 0,
        u = 0,
        x = 0,
        C = 0
    l = G.a1
    j = G.a1o | 0
    p = G.a0
    if (l === p && j === 0) {
        p = G.a2
        n = G.a2o | 0
        c = G.a3.a0
        f = G.a3.a0o | 0
        a = intMultiply_1(f, 4)
        if (n < f) {
            f = intMultiply_1(n, 4)
            A = (((((a - f) >> 2) + 1) | 0) / 2) | 0
            a = intMultiply_1(j, 4)
            if ((f | 0) === (a | 0)) {
                j = n
                c = p
                f = A
            } else {
                h = (f - a) | 0
                f = (A + (-(h >> 2) | 0)) | 0
                if (h >>> 0 >= 4) {
                    a = h >>> 2
                    r = (f + a) | 0
                    if (j < ((n + f) | 0)) {
                        h = (h - 4) | 0
                        u = ((h >>> 2) + 1) & 3
                        if ((u | 0) !== 0) {
                            x = 0
                            while (1) {
                                a = (a - 1) | 0
                                r = (r - 1) | 0
                                c = l[(j + a) | 0]
                                p[(n + r) | 0] = c
                                x = (x + 1) | 0
                                if ((x | 0) !== (u | 0)) continue
                                break
                            }
                        }
                        if (h >>> 0 >= 12)
                            while (1) {
                                c = l[(((j + a) | 0) + -1) | 0]
                                p[(((n + r) | 0) + -1) | 0] = c
                                c = l[(((j + a) | 0) + -2) | 0]
                                p[(((n + r) | 0) + -2) | 0] = c
                                c = l[(((j + a) | 0) + -3) | 0]
                                p[(((n + r) | 0) + -3) | 0] = c
                                a = (a - 4) | 0
                                r = (r - 4) | 0
                                c = l[(j + a) | 0]
                                p[(n + r) | 0] = c
                                if (p !== p || ((n + f) | 0) !== ((n + r) | 0)) continue
                                break
                            }
                    } else {
                        x = (h - 4) | 0
                        C = ((x >>> 2) + 1) & 7
                        if ((C | 0) !== 0) {
                            h = f
                            u = 0
                            a = 0
                            while (1) {
                                c = l[(j + a) | 0]
                                p[(n + h) | 0] = c
                                u = (u + 1) | 0
                                h = (h + 1) | 0
                                a = (a + 1) | 0
                                if ((u | 0) !== (C | 0)) continue
                                break
                            }
                        } else {
                            h = f
                            a = 0
                        }
                        if (x >>> 0 >= 28)
                            while (1) {
                                c = l[(j + a) | 0]
                                p[(n + h) | 0] = c
                                c = l[(((j + a) | 0) + 1) | 0]
                                p[(((n + h) | 0) + 1) | 0] = c
                                c = l[(((j + a) | 0) + 2) | 0]
                                p[(((n + h) | 0) + 2) | 0] = c
                                c = l[(((j + a) | 0) + 3) | 0]
                                p[(((n + h) | 0) + 3) | 0] = c
                                c = l[(((j + a) | 0) + 4) | 0]
                                p[(((n + h) | 0) + 4) | 0] = c
                                c = l[(((j + a) | 0) + 5) | 0]
                                p[(((n + h) | 0) + 5) | 0] = c
                                c = l[(((j + a) | 0) + 6) | 0]
                                p[(((n + h) | 0) + 6) | 0] = c
                                c = l[(((j + a) | 0) + 7) | 0]
                                p[(((n + h) | 0) + 7) | 0] = c
                                h = (h + 8) | 0
                                if (p !== p || ((n + r) | 0) !== ((n + h) | 0)) {
                                    a = (a + 8) | 0
                                    continue
                                }
                                break
                            }
                    }
                }
                c = G.a2
                j = G.a2o | 0
            }
            G.a1 = p
            G.a1o = (((n + A) | 0) + ((intMultiply_1((n + f) | 0, 4) - intMultiply_1((n + A) | 0, 4)) >> 2)) | 0
            G.a2 = c
            G.a2o = (j + A) | 0
            l = p
            j = (((n + A) | 0) + ((intMultiply_1((n + f) | 0, 4) - intMultiply_1((n + A) | 0, 4)) >> 2)) | 0
        } else {
            j = intMultiply_1(j, 4)
            j = (a | 0) === (j | 0) ? 1 | 0 : ((a - j) >> 1) | 0
            if (j >>> 0 > 1073741823) bj()
            l = DD([], 0, ((j << 2) / 4) | 0, null)
            n = (j + 3) >>> 2
            p = G.a1
            A = G.a1o | 0
            c = G.a2
            f = G.a2o | 0
            u = intMultiply_1(A, 4)
            f = intMultiply_1(f, 4)
            a = (f - u) | 0
            h = (n + (a >> 2)) | 0
            if ((f | 0) === (u | 0)) {
                h = n
            } else {
                x = (a - 4) | 0
                u = ((x >>> 2) + 1) & 7
                if ((u | 0) !== 0) {
                    f = n
                    C = 0
                    a = 0
                    while (1) {
                        c = p[(A + a) | 0]
                        l[f] = c
                        C = (C + 1) | 0
                        a = (a + 1) | 0
                        f = (f + 1) | 0
                        if ((C | 0) !== (u | 0)) continue
                        break
                    }
                } else {
                    f = n
                    a = 0
                }
                if (x >>> 0 >= 28)
                    while (1) {
                        c = p[(A + a) | 0]
                        l[f] = c
                        c = p[(((A + a) | 0) + 1) | 0]
                        l[(((0 + f) | 0) + 1) | 0] = c
                        c = p[(((A + a) | 0) + 2) | 0]
                        l[(((0 + f) | 0) + 2) | 0] = c
                        c = p[(((A + a) | 0) + 3) | 0]
                        l[(((0 + f) | 0) + 3) | 0] = c
                        c = p[(((A + a) | 0) + 4) | 0]
                        l[(((0 + f) | 0) + 4) | 0] = c
                        c = p[(((A + a) | 0) + 5) | 0]
                        l[(((0 + f) | 0) + 5) | 0] = c
                        c = p[(((A + a) | 0) + 6) | 0]
                        l[(((0 + f) | 0) + 6) | 0] = c
                        c = p[(((A + a) | 0) + 7) | 0]
                        l[(((0 + f) | 0) + 7) | 0] = c
                        f = (f + 8) | 0
                        if (l !== l || ((0 + f) | 0) !== ((0 + h) | 0)) {
                            a = (a + 8) | 0
                            continue
                        }
                        break
                    }
            }
            G.a0 = l
            G.a1 = l
            G.a1o = (0 + n) | 0
            G.a2 = l
            G.a2o = (0 + h) | 0
            G.a3.a0 = l
            G.a3.a0o = (0 + j) | 0
            j = (0 + n) | 0
            l = l
        }
    }
    p = E[F]
    l[(j + -1) | 0] = p
    l = G.a1
    j = G.a1o | 0
    G.a1 = l
    G.a1o = (j + -1) | 0
}
function gv(f) {
    var a = null,
        c = -0
    a = "processCreated"
    c = +f.localeCompare(a)
    if (c === 0) return 0 | 0
    a = "cpuActivity"
    c = +f.localeCompare(a)
    if (c === 0) return 1 | 0
    a = "diskActivity"
    c = +f.localeCompare(a)
    if (c === 0) return 2 | 0
    a = "diskLatency"
    c = +f.localeCompare(a)
    if (c === 0) return 3 | 0
    console.warn("Invalid event:", f)
    return 4 | 0
}
function on(C, A) {
    var x = null,
        c = null,
        a = 0,
        u = 0,
        r = 0,
        n = null,
        l = 0,
        j = 0,
        f = 0,
        h = 0,
        p = 0
    x = C.a1
    c = x.a0
    a = x.a0o | 0
    n = x.a1
    l = x.a1o | 0
    if (c === n && a === l) return (c === c && a === a ? 1 : 0) | 0
    j = 0
    while (1) {
        if (c[(a + j) | 0] === A) {
            j = (intMultiply_1((a + j) | 0, 4) - intMultiply_1(a, 4)) >> 2
            f = (j + 1) | 0
            l = (intMultiply_1(l, 4) - intMultiply_1((a + f) | 0, 4)) | 0
            if (l >>> 0 < 4) {
                n = c
                f = a
            } else {
                u = (l - 4) | 0
                r = ((u >>> 2) + 1) & 7
                if ((r | 0) !== 0) {
                    h = j
                    p = 0
                    while (1) {
                        c[(a + h) | 0] = c[(a + f) | 0]
                        p = (p + 1) | 0
                        h = (h + 1) | 0
                        f = (f + 1) | 0
                        if ((p | 0) !== (r | 0)) continue
                        break
                    }
                } else {
                    h = j
                }
                if (u >>> 0 >= 28)
                    while (1) {
                        c[(a + h) | 0] = c[(a + f) | 0]
                        c[(((a + h) | 0) + 1) | 0] = c[(((a + f) | 0) + 1) | 0]
                        c[(((a + h) | 0) + 2) | 0] = c[(((a + f) | 0) + 2) | 0]
                        c[(((a + h) | 0) + 3) | 0] = c[(((a + f) | 0) + 3) | 0]
                        c[(((a + h) | 0) + 4) | 0] = c[(((a + f) | 0) + 4) | 0]
                        c[(((a + h) | 0) + 5) | 0] = c[(((a + f) | 0) + 5) | 0]
                        c[(((a + h) | 0) + 6) | 0] = c[(((a + f) | 0) + 6) | 0]
                        c[(((a + h) | 0) + 7) | 0] = c[(((a + f) | 0) + 7) | 0]
                        h = (h + 8) | 0
                        if (c !== c || ((((a + j) | 0) + (l >>> 2)) | 0) !== ((a + h) | 0)) {
                            f = (f + 8) | 0
                            continue
                        }
                        break
                    }
                n = x.a0
                f = x.a0o | 0
            }
            x.a1 = c
            x.a1o = (((a + j) | 0) + (l >> 2)) | 0
            return (n === c && f === ((((a + j) | 0) + (l >> 2)) | 0) ? 1 : 0) | 0
        }
        j = (j + 1) | 0
        if (c !== n || ((a + j) | 0) !== l) continue
        break
    }
    return (c === n && a === l ? 1 : 0) | 0
}
function ok(c, a) {
    var h = null,
        f = null
    h = c.a0.a26
    f = {
        type: 38,
        value: a,
    }
    h.a1.a6.postMessage(f)
}
function oh(u, r, p, n) {
    var x = null,
        l = null,
        f = null,
        j = null,
        a = null,
        c = 0,
        h = 0
    l = new xS().a
    f = l[0]
    f.a0 = lH
    f.a1 = lG
    f.a7 = n
    f.a6 = p
    f.a5 = r
    j = f.a2.a[f.a2.o - 1]
    u.a0 = j
    j = f.a3
    fu(j, r)
    a = j.a0
    c = j.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = l
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        c = a.a1.i1 | 0
        f.i8 = c
        a = j.a0
        h = j.a0o | 0
        if (a !== nullArray || h !== 0) a[h].a1(a, h)
        fi(j, f.a5, c)
        a = j.a0
        c = j.a0o | 0
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 1
                f = a[c].a[a[c].o - -1]
                f.a0 = l
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        c = a.a1.i1 | 0
        f.i9 = c
        a = j.a0
        h = j.a0o | 0
        if (a !== nullArray || h !== 0) a[h].a1(a, h)
        h = f.i8 | 0
        a = f.a7
        x = f.a5
        fh(j, x, h, c, a, 0, a.length)
        a = j.a0
        c = j.a0o | 0
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 2
                f = a[c].a[a[c].o - -1]
                f.a0 = l
                f.a0o = 0
                break a
            }
        }
        a = j.a0
        c = j.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        c = f.i9 | 0
        h = f.i8 | 0
        j = f.a6
        f = f.a5
        l = {
            i0: 0,
            i1: 0,
            a2: null,
        }
        l.i0 = h
        l.i1 = c
        l.a2 = f
        j(
            CheerpX.Linux.wrap(
                Object.create(CheerpX.UnixListener.prototype, {
                    this: {
                        value: l,
                    },
                })
            )
        )
    }
}
function lH(l, m) {
    var c = 0,
        h = null,
        a = null,
        f = 0,
        j = null
    c = l[m].i4 | 0
    h = l[m].a3
    a: {
        if (c << 30 > -1073741824) {
            a = h.a0
            f = h.a0o | 0
            if ((c & 3) !== 0) {
                a = a[f]
            } else {
                a = a[f].a[a[f].o - -1]
                c = a.a1.i1 | 0
                l[m].i8 = c
                a = h.a0
                f = h.a0o | 0
                if (a !== nullArray || f !== 0) a[f].a1(a, f)
                fi(h, l[m].a5, c)
                a = h.a0
                c = h.a0o | 0
                if (a !== nullArray || c !== 0) {
                    if (a[c].a0 !== null) {
                        l[m].i4 = 1
                        h = a[c].a[a[c].o - -1]
                        h.a0 = l
                        h.a0o = m
                        break a
                    }
                    a = a[c]
                } else {
                    a = null
                }
            }
            a = a.a[a.o - -1]
            c = a.a1.i1 | 0
            l[m].i9 = c
            a = h.a0
            f = h.a0o | 0
            if (a !== nullArray || f !== 0) a[f].a1(a, f)
            f = l[m].i8 | 0
            a = l[m].a7
            j = l[m].a5
            fh(h, j, f, c, a, 0, a.length)
            a = h.a0
            c = h.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    l[m].i4 = 2
                    h = a[c].a[a[c].o - -1]
                    h.a0 = l
                    h.a0o = m
                    break a
                }
                a = a[c]
            } else {
                a = null
            }
        } else {
            a = h.a0
            c = h.a0o | 0
            a = a[c]
        }
        a = h.a0
        c = h.a0o | 0
        if (a !== nullArray || c !== 0) a[c].a1(a, c)
        c = l[m].i9 | 0
        f = l[m].i8 | 0
        h = l[m].a6
        a = l[m].a5
        j = {
            i0: 0,
            i1: 0,
            a2: null,
        }
        j.i0 = f
        j.i1 = c
        j.a2 = a
        h(
            CheerpX.Linux.wrap(
                Object.create(CheerpX.UnixListener.prototype, {
                    this: {
                        value: j,
                    },
                })
            )
        )
    }
}
function lG(h, i) {
    h = h[i]
    var f = null,
        c = null,
        a = 0
    f = h.a3
    a: {
        if (h.i4 << 30 > -1073741824) {
            c = f.a0
            a = f.a0o | 0
            if (c === nullArray && a === 0) break a
        } else {
            c = f.a0
            a = f.a0o | 0
            if (c === nullArray && a === 0) break a
        }
        c[a].a1(c, a)
    }
}
function fi(u, r, p) {
    var j = null,
        n = null,
        h = null,
        f = null,
        l = null,
        a = 0,
        c = null
    h = v8({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
    }).a
    f = h[0]
    f.a0 = ly
    f.a1 = lx
    j = f.a2
    j.a0 = nullArray
    j.a0o = 0
    n = j.a1
    n.i0 = 0
    l = j.a
    a = j.o - 1
    u.a0 = l
    u.a0o = a
    l = f.a3
    b2(
        l,
        r,
        p,
        {
            type: 35,
            tid: p,
            arg0: 1,
            arg1: 1,
            arg2: 0,
        },
        1
    )
    c = l.a0
    a = l.a0o | 0
    a: {
        if (c !== nullArray || a !== 0) {
            if (c[a].a0 !== null) {
                f.i4 = 0
                f = c[a].a[c[a].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        c = c[a].a[c[a].o - -1]
        a = c.a1.i1 | 0
        n.i0 = 256
        n.i1 = a
        c = l.a0
        a = l.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
        f.a5 = j
        f.a0 = null
        h = j.a0
        a = j.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : $)[h !== nullArray || a !== 0 ? a : aa].a0(h !== nullArray || a !== 0 ? h : $, h !== nullArray || a !== 0 ? a : aa)
    }
}
function fh(A, x, u, r, p, q, n) {
    var j = null,
        l = null,
        C = null,
        h = null,
        f = null,
        c = null,
        a = 0
    h = v9({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
    }).a
    f = h[0]
    f.a0 = lD
    f.a1 = lC
    j = f.a2
    j.a0 = nullArray
    j.a0o = 0
    l = j.a1
    l.i0 = 0
    c = j.a
    a = j.o - 1
    A.a0 = c
    A.a0o = a
    a = q
    c = p
    C = f.a3
    b2(
        C,
        x,
        u,
        {
            type: 36,
            tid: u,
            arg0: r,
            arg1: c.subarray(+(a >>> 0), +((a + n) >>> 0)),
        },
        1
    )
    c = C.a0
    a = C.a0o | 0
    a: {
        if (c !== nullArray || a !== 0) {
            if (c[a].a0 !== null) {
                f.i4 = 0
                f = c[a].a[c[a].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        c = c[a].a[c[a].o - -1]
        a = c.a1.i1 | 0
        l.i0 = 256
        l.i1 = a
        c = C.a0
        a = C.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
        f.a5 = j
        f.a0 = null
        h = j.a0
        a = j.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : $)[h !== nullArray || a !== 0 ? a : aa].a0(h !== nullArray || a !== 0 ? h : $, h !== nullArray || a !== 0 ? a : aa)
    }
}
function lD(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    f = h.a3.a0
    c = h.a3.a0o | 0
    f = f[c].a[f[c].o - -1]
    c = f.a1.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    a = h.a3.a0
    c = h.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
}
function lC(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function ly(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    f = h.a3.a0
    c = h.a3.a0o | 0
    f = f[c].a[f[c].o - -1]
    c = f.a1.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    a = h.a3.a0
    c = h.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
}
function lx(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function lu(j) {
    var f = null,
        c = null,
        a = null,
        h = null
    f = new MessageChannel()
    c = f.port1
    a = j.a0
    h = [
        {
            a0: null,
        },
    ]
    h[0].a0 = a
    a = DB(lo, h[0])
    c.onmessage = a
    f = f.port2
    c = j.a0
    h = {
        port: f,
        url: c.a2,
    }
    c = c.a1.contentWindow
    a = "*"
    c.postMessage(h, a, new Array(f))
}
function lr(f) {
    var c = null,
        a = null
    c = f.a0
    a = c.a3
    c.a1.src = a
}
function lo(h, f) {
    var c = null,
        l = null,
        j = null,
        a = null
    c = {
        a0: null,
    }
    clearInterval(+(h.a0.i5 >>> 0))
    a = f.data
    l = a.port
    a = a.request
    j = new TextEncoder().encode(a)
    a = h.a0
    lh(c, a.a0, a.i4 | 0, l, j)
}
function lh(u, r, p, n, l) {
    var h = null,
        a = null,
        j = null,
        f = 0,
        c = null
    h = wy({
        a0: null,
        a1: null,
        a2: {
            i0: 0,
        },
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
        a6: null,
    }).a
    a = h[0]
    a.a0 = le
    a.a1 = ld
    a.a6 = l
    a.a5 = n
    j = a.a2.a[a.a2.o - 1]
    u.a0 = j
    f = r.i41 | 0
    j = a.a3
    cT(
        j,
        r,
        f,
        {
            type: 83,
            tid: f,
            addr: 0,
            port: 0,
            localPort: p,
        },
        0
    )
    c = j.a0
    f = j.a0o | 0
    a: {
        if (c !== nullArray || f !== 0) {
            if (c[f].a0 !== null) {
                a.i4 = 0
                a = c[f].a[c[f].o - -1]
                a.a0 = h
                a.a0o = 0
                break a
            }
        }
        h = c[f].a[c[f].o - -1]
        h = h.a1.a1
        c = j.a0
        f = j.a0o | 0
        if (c !== nullArray || f !== 0) c[f].a1(c, f)
        if (h !== null) {
            j = a.a6
            c = a.a5
            a = {
                a0: null,
                a1: null,
                a2: {
                    a0: nullArray,
                    a0o: 0,
                    a1: nullArray,
                    a1o: 0,
                    a2: (a = {
                        a0: nullArray,
                        a0o: 0,
                    }),
                },
                i3: 0,
            }
            a.a0 = c
            a.a1 = new Array()
            c = a.a2
            c.a0 = nullArray
            c.a0o = 0
            c.a1 = nullArray
            c.a1o = 0
            c.a2.a0 = nullArray
            c.a2.a0o = 0
            a.i3 = 0
            c = [
                {
                    a0: null,
                },
            ]
            c[0].a0 = a
            a = DB(fa, c[0])
            h.onmessage = a
            h.postMessage(j)
        } else a.a5.postMessage(null)
    }
}
function le(l, m) {
    l = l[m]
    var j = 0,
        c = null,
        h = null,
        f = null,
        a = null
    h = l.a3.a0
    j = l.a3.a0o | 0
    f = h[j].a[h[j].o - -1]
    f = f.a1.a1
    if (h !== nullArray || j !== 0) h[j].a1(h, j)
    if (f !== null) {
        h = l.a6
        a = l.a5
        c = {
            a0: null,
            a1: null,
            a2: {
                a0: nullArray,
                a0o: 0,
                a1: nullArray,
                a1o: 0,
                a2: (c = {
                    a0: nullArray,
                    a0o: 0,
                }),
            },
            i3: 0,
        }
        c.a0 = a
        c.a1 = new Array()
        a = c.a2
        a.a0 = nullArray
        a.a0o = 0
        a.a1 = nullArray
        a.a1o = 0
        a.a2.a0 = nullArray
        a.a2.a0o = 0
        c.i3 = 0
        a = [
            {
                a0: null,
            },
        ]
        a[0].a0 = c
        a = DB(fa, a[0])
        f.onmessage = a
        f.postMessage(h)
    } else l.a5.postMessage(null)
}
function ld(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function fa(c, a) {
    var h = null,
        f = null
    h = a.data
    f = c.a0
    if (h !== null) lc(f, h)
    else f.a0.postMessage(null)
}
function lc(K, L) {
    var G = 0,
        A = 0,
        r = null,
        E = 0,
        p = null,
        x = 0,
        j = 0,
        f = null,
        a = 0,
        H = null,
        u = 0,
        n = 0,
        c = 0,
        h = 0,
        C = 0,
        l = 0
    a: if ((K.i3 | 0) === 2) {
        p = K.a0
        p.postMessage(L, new Array(L.buffer))
        p = L
    } else {
        G = L.length
        if ((G | 0) === 0) break a
        x = 0
        while (1) {
            j = L[(0 + x) | 0] | 0
            if ((j & 255) === 10) {
                k$(K)
                if ((K.i3 | 0) === 2) {
                    p = K.a1
                    K.a0.postMessage(p)
                    x = (x + 1) | 0
                    if ((x | 0) === (G | 0)) break a
                    p = K.a0
                    f = L.subarray(+(x >>> 0))
                    p.postMessage(f)
                    p = f
                    break a
                }
                p = K.a2
                f = p.a0
                j = p.a0o | 0
                p.a1 = f
                p.a1o = j
            } else {
                p = K.a2
                f = p.a1
                a = p.a1o | 0
                H = p.a2.a0
                u = p.a2.a0o | 0
                if (f === H && a === u) {
                    H = p.a0
                    u = p.a0o | 0
                    A = (a - u) | 0
                    u = (A + 1) | 0
                    if ((u | 0) < 0) ab()
                    if (A >>> 0 < 1073741823) {
                        a = A << 1
                        u = a >>> 0 > u >>> 0 ? a | 0 : u | 0
                    } else {
                        u = 2147483647
                    }
                    f = new Uint8Array((u / 1) | 0)
                    f[A] = j
                    H = p.a1
                    a = p.a1o | 0
                    r = p.a0
                    j = p.a0o | 0
                    n = j
                    a = a
                    E = (A + ((n - a) | 0)) | 0
                    if ((a | 0) !== (n | 0)) {
                        c = (a - n) | 0
                        h = (E + c) | 0
                        if (j < ((0 + E) | 0)) {
                            n = ((n ^ -1) + a) | 0
                            a = c & 3
                            if ((a | 0) !== 0) {
                                C = 0
                                while (1) {
                                    c = (c - 1) | 0
                                    h = (h - 1) | 0
                                    f[h] = r[(j + c) | 0] | 0
                                    C = (C + 1) | 0
                                    if ((C | 0) !== (a | 0)) continue
                                    break
                                }
                            }
                            if (n >>> 0 >= 3)
                                while (1) {
                                    f[(((0 + h) | 0) + -1) | 0] = r[(((j + c) | 0) + -1) | 0] | 0
                                    f[(((0 + h) | 0) + -2) | 0] = r[(((j + c) | 0) + -2) | 0] | 0
                                    f[(((0 + h) | 0) + -3) | 0] = r[(((j + c) | 0) + -3) | 0] | 0
                                    c = (c - 4) | 0
                                    h = (h - 4) | 0
                                    f[h] = r[(j + c) | 0] | 0
                                    if (f !== f || ((0 + E) | 0) !== ((0 + h) | 0)) continue
                                    break
                                }
                        } else {
                            C = ((n ^ -1) + a) | 0
                            c &= 7
                            if ((c | 0) !== 0) {
                                l = E
                                n = 0
                                a = 0
                                while (1) {
                                    f[l] = r[(j + a) | 0] | 0
                                    n = (n + 1) | 0
                                    l = (l + 1) | 0
                                    a = (a + 1) | 0
                                    if ((n | 0) !== (c | 0)) continue
                                    break
                                }
                            } else {
                                l = E
                                a = 0
                            }
                            if (C >>> 0 >= 7)
                                while (1) {
                                    f[l] = r[(j + a) | 0] | 0
                                    f[(((0 + l) | 0) + 1) | 0] = r[(((j + a) | 0) + 1) | 0] | 0
                                    f[(((0 + l) | 0) + 2) | 0] = r[(((j + a) | 0) + 2) | 0] | 0
                                    f[(((0 + l) | 0) + 3) | 0] = r[(((j + a) | 0) + 3) | 0] | 0
                                    f[(((0 + l) | 0) + 4) | 0] = r[(((j + a) | 0) + 4) | 0] | 0
                                    f[(((0 + l) | 0) + 5) | 0] = r[(((j + a) | 0) + 5) | 0] | 0
                                    f[(((0 + l) | 0) + 6) | 0] = r[(((j + a) | 0) + 6) | 0] | 0
                                    f[(((0 + l) | 0) + 7) | 0] = r[(((j + a) | 0) + 7) | 0] | 0
                                    l = (l + 8) | 0
                                    if (f !== f || ((0 + h) | 0) !== ((0 + l) | 0)) {
                                        a = (a + 8) | 0
                                        continue
                                    }
                                    break
                                }
                        }
                    }
                    p.a0 = f
                    p.a0o = (0 + E) | 0
                    p.a1 = f
                    p.a1o = (((0 + A) | 0) + 1) | 0
                    p.a2.a0 = f
                    p.a2.a0o = (0 + u) | 0
                } else {
                    f[a] = j
                    p.a1 = f
                    p.a1o = (a + 1) | 0
                }
            }
            x = (x + 1) | 0
            if ((x | 0) === (G | 0)) break a
            continue
        }
    }
}
function k$(x) {
    var u = null,
        c = 0,
        f = null,
        a = null,
        l = 0,
        h = 0,
        j = 0,
        p = 0,
        n = 0,
        r = 0
    c = x.i3 | 0
    if ((c | 0) !== 0) {
        if ((c | 0) === 1) {
            u = x.a2
            f = u.a1
            c = u.a1o | 0
            a = u.a0
            l = u.a0o | 0
            h = l
            j = c
            p = (j - h) | 0
            if ((p | 0) === 1) x.i3 = 2
            else {
                if (a === f && l === c) {
                    f = String()
                    p = 0
                } else {
                    n = 0
                    while (1) {
                        if ((a[(l + n) | 0] & 255) === 58) {
                            j = (l + n) | 0
                            p = (j - h) | 0
                        } else {
                            n = (n + 1) | 0
                            if (a !== f || ((l + n) | 0) !== c) continue
                        }
                        break
                    }
                    f = String()
                    if ((j | 0) !== (h | 0)) {
                        j = 0
                        while (1) {
                            n = a[(l + j) | 0] | 0
                            if ((n & 255) !== 0) {
                                h = n & 255
                                if (n << 24 > -16777216) {
                                    c = h
                                } else if ((n & 255) < 192) {
                                    c = ((h & 63) + (c << 6)) | 0
                                } else if ((n & 255) < 224) {
                                    c = h & 31
                                } else if ((n & 255) < 240) {
                                    c = h & 15
                                } else {
                                    c = h & 7
                                }
                                j = (j + 1) | 0
                                a: {
                                    if ((j | 0) !== (p | 0)) {
                                        if ((a[(l + j) | 0] & 192) === 128) break a
                                    }
                                    if (c >>> 0 < 65536) f = f.concat(String.fromCharCode(c))
                                    else {
                                        f = f.concat(String.fromCharCode(((c - 65536) >>> 10) | 55296))
                                        f = f.concat(String.fromCharCode((c & 1023) | 56320))
                                    }
                                }
                                if ((j | 0) !== (p | 0)) continue
                            }
                            break
                        }
                    }
                }
                ;+x.a1.push(f)
                f = u.a0
                j = u.a0o | 0
                a = u.a1
                c = u.a1o | 0
                h = (p + j) | 0
                c = (c - 3) | 0
                n = (c - h) | 0
                a = String()
                if ((c | 0) !== (h | 0)) {
                    c = 0
                    while (1) {
                        l = f[(((((j + p) | 0) + 2) | 0) + c) | 0] | 0
                        if ((l & 255) !== 0) {
                            h = l & 255
                            if (l << 24 > -16777216) {
                                r = h
                            } else if ((l & 255) < 192) {
                                r = ((h & 63) + (r << 6)) | 0
                            } else if ((l & 255) < 224) {
                                r = h & 31
                            } else if ((l & 255) < 240) {
                                r = h & 15
                            } else {
                                r = h & 7
                            }
                            c = (c + 1) | 0
                            a: {
                                if ((c | 0) !== (n | 0)) {
                                    if ((f[(((((j + p) | 0) + 2) | 0) + c) | 0] & 192) === 128) break a
                                }
                                if (r >>> 0 < 65536) a = a.concat(String.fromCharCode(r))
                                else {
                                    a = a.concat(String.fromCharCode(((r - 65536) >>> 10) | 55296))
                                    a = a.concat(String.fromCharCode((r & 1023) | 56320))
                                }
                            }
                            if ((c | 0) !== (n | 0)) continue
                        }
                        break
                    }
                }
                ;+x.a1.push(a)
            }
        }
    } else x.i3 = 1
}
function k8(h, f, c) {
    var n = null,
        l = null,
        j = 0,
        a = null
    a = h.a0.a26
    n = {
        type: 56,
        value: f,
        arg1: c,
    }
    a = a.a1
    l = HEAP32
    j = a.i7 | 0
    l[(0 + j) | 0] = -2
    a.a6.postMessage(n)
}
function k4(C, A) {
    var n = 0,
        r = 0,
        l = null,
        h = null,
        c = 0,
        j = 0,
        a = 0,
        f = 0,
        u = 0,
        p = 0,
        x = 0
    l = C.a0
    n = C.a0o | 0
    h = C.a1
    c = C.a1o | 0
    c = (intMultiply_1(c, 4) - intMultiply_1(n, 4)) | 0
    h = A.a1
    j = A.a1o | 0
    r = -(c >> 2) | 0
    if (c >>> 0 >= 4) {
        a = c >>> 2
        f = (r + a) | 0
        if (n < ((j + r) | 0)) {
            u = (c - 4) | 0
            c = ((u >>> 2) + 1) & 3
            if ((c | 0) !== 0) {
                p = 0
                while (1) {
                    a = (a - 1) | 0
                    f = (f - 1) | 0
                    h[(j + f) | 0] = l[(n + a) | 0]
                    p = (p + 1) | 0
                    if ((p | 0) !== (c | 0)) continue
                    break
                }
            }
            if (u >>> 0 >= 12)
                while (1) {
                    h[(((j + f) | 0) + -1) | 0] = l[(((n + a) | 0) + -1) | 0]
                    h[(((j + f) | 0) + -2) | 0] = l[(((n + a) | 0) + -2) | 0]
                    h[(((j + f) | 0) + -3) | 0] = l[(((n + a) | 0) + -3) | 0]
                    a = (a - 4) | 0
                    f = (f - 4) | 0
                    h[(j + f) | 0] = l[(n + a) | 0]
                    if (h !== h || ((j + r) | 0) !== ((j + f) | 0)) continue
                    break
                }
        } else {
            u = (c - 4) | 0
            p = ((u >>> 2) + 1) & 7
            if ((p | 0) !== 0) {
                a = r
                x = 0
                c = 0
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0]
                    x = (x + 1) | 0
                    a = (a + 1) | 0
                    c = (c + 1) | 0
                    if ((x | 0) !== (p | 0)) continue
                    break
                }
            } else {
                a = r
                c = 0
            }
            if (u >>> 0 >= 28)
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0]
                    h[(((j + a) | 0) + 1) | 0] = l[(((n + c) | 0) + 1) | 0]
                    h[(((j + a) | 0) + 2) | 0] = l[(((n + c) | 0) + 2) | 0]
                    h[(((j + a) | 0) + 3) | 0] = l[(((n + c) | 0) + 3) | 0]
                    h[(((j + a) | 0) + 4) | 0] = l[(((n + c) | 0) + 4) | 0]
                    h[(((j + a) | 0) + 5) | 0] = l[(((n + c) | 0) + 5) | 0]
                    h[(((j + a) | 0) + 6) | 0] = l[(((n + c) | 0) + 6) | 0]
                    h[(((j + a) | 0) + 7) | 0] = l[(((n + c) | 0) + 7) | 0]
                    a = (a + 8) | 0
                    if (h !== h || ((j + f) | 0) !== ((j + a) | 0)) {
                        c = (c + 8) | 0
                        continue
                    }
                    break
                }
        }
    }
    A.a1 = h
    A.a1o = (j + ((r << 2) >> 2)) | 0
    l = C.a0
    c = C.a0o | 0
    C.a0 = h
    C.a0o = (j + ((r << 2) >> 2)) | 0
    A.a1 = l
    A.a1o = c
    l = C.a1
    c = C.a1o | 0
    h = A.a2
    j = A.a2o | 0
    C.a1 = h
    C.a1o = j
    A.a2 = l
    A.a2o = c
    l = C.a2.a0
    c = C.a2.a0o | 0
    h = A.a3.a0
    j = A.a3.a0o | 0
    C.a2.a0 = h
    C.a2.a0o = j
    A.a3.a0 = l
    A.a3.a0o = c
    l = A.a1
    c = A.a1o | 0
    A.a0 = l[c]
}
function kS(c, a) {
    kk(c, a)
}
function kQ(a) {
    a.preventDefault()
}
function kO(c, a) {
    kp(c, a)
}
function kL(h, f) {
    var n = null,
        l = -0,
        j = -0,
        c = null,
        a = null
    n = h.a0
    l = +f.pageX
    j = +f.pageY
    c = n.a33.style
    a = String(~~l)
    a = a.concat("px")
    c.left = a
    c = n.a33.style
    a = String(~~j)
    a = a.concat("px")
    c.top = a
    n.a33.focus()
}
function kI(c, a) {
    kD(c, a)
}
function kF(E, C) {
    var H = -0,
        A = null,
        G = null,
        u = 0,
        r = 0,
        x = 0,
        h = null,
        n = null,
        c = 0,
        l = null,
        f = 0,
        j = 0,
        a = 0,
        p = 0
    h = E.a0
    H = +C.keyCode
    A = h.a38
    n = A.a0
    c = A.a0o | 0
    l = A.a1
    f = A.a1o | 0
    if (n !== l || c !== f) {
        j = ~~H
        a = 0
        while (1) {
            if ((n[(c + a) | 0].i0 & 65535) === (j & 65535)) {
                if (n !== l || ((c + a) | 0) !== f) {
                    l = {
                        type: 94,
                        value: 0,
                        keyCode: j,
                        timeStamp: +n[(c + a) | 0].d1,
                    }
                    G = HEAP32
                    f = h.i7 | 0
                    G[(0 + f) | 0] = -2
                    h.a6.postMessage(l)
                    h = A.a0
                    f = A.a0o | 0
                    j = (((intMultiply_1((c + a) | 0, 11) - intMultiply_1(f, 11)) | 0) / 11) | 0
                    c = (j + 1) | 0
                    n = A.a1
                    a = A.a1o | 0
                    u = (intMultiply_1(a, 11) - intMultiply_1((f + c) | 0, 11)) | 0
                    if (u >>> 0 >= 11) {
                        r = ((u >>> 0) / 11) | 0
                        x = r & 3
                        if ((x | 0) !== 0) {
                            a = j
                            p = 0
                            while (1) {
                                h[(f + a) | 0].i0 = h[(f + c) | 0].i0 | 0
                                h[(f + a) | 0].d1 = +h[(f + c) | 0].d1
                                p = (p + 1) | 0
                                a = (a + 1) | 0
                                c = (c + 1) | 0
                                if ((p | 0) !== (x | 0)) continue
                                break
                            }
                        } else {
                            a = j
                        }
                        if ((r - 1) >>> 0 >= 3)
                            while (1) {
                                h[(f + a) | 0].i0 = h[(f + c) | 0].i0 | 0
                                h[(f + a) | 0].d1 = +h[(f + c) | 0].d1
                                h[(((f + a) | 0) + 1) | 0].i0 = h[(((f + c) | 0) + 1) | 0].i0 | 0
                                h[(((f + a) | 0) + 1) | 0].d1 = +h[(((f + c) | 0) + 1) | 0].d1
                                h[(((f + a) | 0) + 2) | 0].i0 = h[(((f + c) | 0) + 2) | 0].i0 | 0
                                h[(((f + a) | 0) + 2) | 0].d1 = +h[(((f + c) | 0) + 2) | 0].d1
                                h[(((f + a) | 0) + 3) | 0].i0 = h[(((f + c) | 0) + 3) | 0].i0 | 0
                                h[(((f + a) | 0) + 3) | 0].d1 = +h[(((f + c) | 0) + 3) | 0].d1
                                a = (a + 4) | 0
                                if (h !== h || ((((f + j) | 0) + r) | 0) !== ((f + a) | 0)) {
                                    c = (c + 4) | 0
                                    continue
                                }
                                break
                            }
                    }
                    A.a1 = h
                    A.a1o = (((f + j) | 0) + (((u | 0) / 11) | 0)) | 0
                }
            } else {
                a = (a + 1) | 0
                if (n !== l || ((c + a) | 0) !== f) continue
            }
            break
        }
    }
}
function kD(C, A) {
    var x = -0,
        u = null,
        r = 0,
        c = null,
        E = null,
        p = 0,
        l = null,
        f = null,
        n = -0,
        j = null,
        h = 0,
        a = 0
    l = C.a0
    f = [
        {
            a0: null,
        },
    ]
    f[0].a0 = l
    f = DB(kB, f[0])
    ;+setTimeout(f, 0)
    x = +A.keyCode
    n = +A.timeStamp
    l = l.a38
    j = l.a1
    h = l.a1o | 0
    f = l.a2
    u = f.a0
    r = f.a0o | 0
    n += +C.d1
    if (h < r) {
        j[h].i0 = ~~x & 65535
        j[h].d1 = n
        l.a1 = j
        l.a1o = (h + 1) | 0
    } else {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        E = l.a0
        a = l.a0o | 0
        a = intMultiply_1(a, 11)
        h = (((intMultiply_1(h, 11) - a) | 0) / 11) | 0
        p = (h + 1) | 0
        if (p >>> 0 > 390451572) ab()
        a = (((intMultiply_1(r, 11) - a) | 0) / 11) | 0
        if (a >>> 0 < 195225786) {
            a <<= 1
            a = a >>> 0 > p >>> 0 ? a | 0 : p | 0
        } else {
            a = 390451572
        }
        j = c.a3
        j.a1.a0 = f
        f = Ci(((intMultiply_1(a, 11) | 0) / 11) | 0)
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + h) | 0
        j.a0 = f
        j.a0o = (0 + a) | 0
        f[h].i0 = ~~x & 65535
        f[h].d1 = n
        c.a2 = f
        c.a2o = (((0 + h) | 0) + 1) | 0
        kw(l, c)
    }
    if (+A.keyCode === 9) A.preventDefault()
    a: {
        if (!A.altKey) {
            if (!A.ctrlKey) break a
        }
        A.preventDefault()
    }
}
function kB(c) {
    var a = null,
        h = null,
        f = 0
    a = c.a0
    h = a.a38.a0
    f = a.a38.a0o | 0
    kv(a, +h[f].d1)
}
function kw(C, A) {
    var p = 0,
        u = 0,
        x = 0,
        h = null,
        j = null,
        f = 0,
        l = 0,
        n = 0,
        r = 0,
        a = 0,
        c = 0
    h = C.a0
    p = C.a0o | 0
    j = C.a1
    f = C.a1o | 0
    f = (intMultiply_1(f, 11) - intMultiply_1(p, 11)) | 0
    j = A.a1
    l = A.a1o | 0
    u = ((f | 0) / -11) | 0
    if (f >>> 0 >= 11) {
        n = ((f >>> 0) / 11) | 0
        r = (u + n) | 0
        if (p < ((l + u) | 0)) {
            if (((n & 1) | 0) !== 0) {
                a = (n - 1) | 0
                c = (r - 1) | 0
                j[(l + c) | 0].i0 = h[(p + a) | 0].i0 | 0
                j[(((l + r) | 0) + -1) | 0].d1 = +h[(((p + n) | 0) + -1) | 0].d1
            } else {
                a = n
                c = r
            }
            if ((f - 11) >>> 0 >= 11)
                while (1) {
                    j[(((l + c) | 0) + -1) | 0].i0 = h[(((p + a) | 0) + -1) | 0].i0 | 0
                    j[(((l + c) | 0) + -1) | 0].d1 = +h[(((p + a) | 0) + -1) | 0].d1
                    n = (a - 2) | 0
                    r = (c - 2) | 0
                    j[(l + r) | 0].i0 = h[(p + n) | 0].i0 | 0
                    j[(((l + c) | 0) + -2) | 0].d1 = +h[(((p + a) | 0) + -2) | 0].d1
                    if (j !== j || ((l + u) | 0) !== ((l + r) | 0)) {
                        a = n
                        c = r
                        continue
                    }
                    break
                }
        } else {
            x = n & 3
            if ((x | 0) !== 0) {
                a = u
                f = 0
                c = 0
                while (1) {
                    j[(l + a) | 0].i0 = h[(p + c) | 0].i0 | 0
                    j[(l + a) | 0].d1 = +h[(p + c) | 0].d1
                    f = (f + 1) | 0
                    a = (a + 1) | 0
                    c = (c + 1) | 0
                    if ((f | 0) !== (x | 0)) continue
                    break
                }
            } else {
                a = u
                c = 0
            }
            if ((n - 1) >>> 0 >= 3)
                while (1) {
                    j[(l + a) | 0].i0 = h[(p + c) | 0].i0 | 0
                    j[(l + a) | 0].d1 = +h[(p + c) | 0].d1
                    j[(((l + a) | 0) + 1) | 0].i0 = h[(((p + c) | 0) + 1) | 0].i0 | 0
                    j[(((l + a) | 0) + 1) | 0].d1 = +h[(((p + c) | 0) + 1) | 0].d1
                    j[(((l + a) | 0) + 2) | 0].i0 = h[(((p + c) | 0) + 2) | 0].i0 | 0
                    j[(((l + a) | 0) + 2) | 0].d1 = +h[(((p + c) | 0) + 2) | 0].d1
                    j[(((l + a) | 0) + 3) | 0].i0 = h[(((p + c) | 0) + 3) | 0].i0 | 0
                    j[(((l + a) | 0) + 3) | 0].d1 = +h[(((p + c) | 0) + 3) | 0].d1
                    a = (a + 4) | 0
                    if (j !== j || ((l + r) | 0) !== ((l + a) | 0)) {
                        c = (c + 4) | 0
                        continue
                    }
                    break
                }
        }
    }
    A.a1 = j
    A.a1o = (l + u) | 0
    h = C.a0
    f = C.a0o | 0
    C.a0 = j
    C.a0o = (l + u) | 0
    A.a1 = h
    A.a1o = f
    h = C.a1
    f = C.a1o | 0
    j = A.a2
    l = A.a2o | 0
    C.a1 = j
    C.a1o = l
    A.a2 = h
    A.a2o = f
    h = C.a2.a0
    f = C.a2.a0o | 0
    j = A.a3.a0
    l = A.a3.a0o | 0
    C.a2.a0 = j
    C.a2.a0o = l
    A.a3.a0 = h
    A.a3.a0o = f
    h = A.a1
    f = A.a1o | 0
    A.a0 = h[f]
}
function kv(G, E) {
    var u = 0,
        C = 0,
        l = null,
        A = null,
        f = null,
        a = 0,
        h = 0,
        c = 0,
        n = 0,
        j = 0,
        p = null,
        r = 0,
        x = 0
    l = G.a33.value
    A = G.a33
    f = "_"
    A.value = f
    G.a33.selectionStart = 1
    G.a33.selectionEnd = 1
    A = G.a38
    a: {
        b: {
            if ((l.length | 0) === 2) {
                a = l.charCodeAt(1)
                if (a >>> 0 >= 33) {
                    if (a >>> 0 < 48) {
                        a = vR[(a - 33) | 0] | 0
                        a = a
                    } else if (a >>> 0 >= 58)
                        if (a >>> 0 < 65) {
                            a = vP[(a - 58) | 0] | 0
                            a = a
                        } else if (a >>> 0 < 91) {
                            a |= 32768
                        } else if (a >>> 0 < 97) {
                            a = vO[(a - 91) | 0] | 0
                            a = a
                        } else if (a >>> 0 < 123) {
                            a = (a - 32) | 0
                        } else {
                            if (a >>> 0 >= 127) {
                                f = A.a0
                                a = A.a0o | 0
                                A.a1 = f
                                A.a1o = a
                                break a
                            }
                            a = vN[(a - 123) | 0] | 0
                            a = a
                        }
                }
                h = a & 32768
                c = h >>> 15
                if ((h | 0) !== 0) {
                    f = A.a0
                    h = A.a0o | 0
                    l = A.a1
                    n = A.a1o | 0
                    if (f === l && h === n) {
                        f = f[h]
                    } else {
                        j = 0
                        while (1) {
                            if ((f[(h + j) | 0].i0 & 65535) === 16) {
                                f = f[(h + j) | 0]
                            } else {
                                j = (j + 1) | 0
                                if (f !== l || ((h + j) | 0) !== n) continue
                                f = l[n]
                            }
                            break
                        }
                    }
                    c = f === l[n] ? c | 0 : 0 | 0
                }
                a &= -32769
                if ((c & 1) !== 0) {
                    f = {
                        type: 94,
                        value: 1,
                        keyCode: 16,
                        timeStamp: E,
                    }
                    l = HEAP32
                    c = G.i7 | 0
                    l[(0 + c) | 0] = -2
                    G.a6.postMessage(f)
                    f = {
                        type: 94,
                        value: 1,
                        keyCode: a,
                        timeStamp: E,
                    }
                    l = HEAP32
                    c = G.i7 | 0
                    l[(0 + c) | 0] = -2
                    G.a6.postMessage(f)
                    f = {
                        type: 94,
                        value: 0,
                        keyCode: a,
                        timeStamp: E,
                    }
                    l = HEAP32
                    a = G.i7 | 0
                    l[(0 + a) | 0] = -2
                    G.a6.postMessage(f)
                    f = {
                        type: 94,
                        value: 0,
                        keyCode: 16,
                        timeStamp: E,
                    }
                    break b
                }
            } else if ((l.length | 0) !== 0) {
                f = A.a0
                a = A.a0o | 0
                l = A.a1
                h = A.a1o | 0
                if (f === l && a === h) break a
                h = 0
                while (1) {
                    l = {
                        type: 94,
                        value: 1,
                        keyCode: f[(a + h) | 0].i0 | 0,
                        timeStamp: +f[(a + h) | 0].d1,
                    }
                    p = HEAP32
                    c = G.i7 | 0
                    p[(0 + c) | 0] = -2
                    G.a6.postMessage(l)
                    f[(a + h) | 0].i0 = (f[(a + h) | 0].i0 & 65535) | 65536
                    h = (h + 1) | 0
                    l = A.a1
                    c = A.a1o | 0
                    if (f === l && ((a + h) | 0) === c) break a
                    continue
                }
            } else {
                a = 8
            }
            f = {
                type: 94,
                value: 1,
                keyCode: a,
                timeStamp: E,
            }
            l = HEAP32
            c = G.i7 | 0
            l[(0 + c) | 0] = -2
            G.a6.postMessage(f)
            f = {
                type: 94,
                value: 0,
                keyCode: a,
                timeStamp: E,
            }
        }
        l = HEAP32
        a = G.i7 | 0
        l[(0 + a) | 0] = -2
        G.a6.postMessage(f)
        f = A.a0
        a = A.a0o | 0
        l = A.a1
        h = A.a1o | 0
        if (f !== l || a !== h) {
            c = 0
            while (1) {
                if ((f[(a + c) | 0].i0 & 16777215) < 65536) {
                    if (f !== l || ((a + c) | 0) !== h) {
                        j = (c + 1) | 0
                        if (f !== l || ((a + j) | 0) !== h) {
                            n = c
                            while (1) {
                                if ((f[(((a + n) | 0) + 1) | 0].i0 & 16777215) >= 65536) {
                                    f[(a + c) | 0].i0 = f[(a + j) | 0].i0 | 0
                                    f[(a + c) | 0].d1 = +f[(a + j) | 0].d1
                                    c = (c + 1) | 0
                                }
                                n = (j + 1) | 0
                                if (f !== l || ((a + n) | 0) !== h) {
                                    u = j
                                    j = n
                                    n = u
                                    continue
                                }
                                break
                            }
                            l = A.a1
                            h = A.a1o | 0
                        }
                        if (f !== l || ((a + c) | 0) !== h) {
                            p = A.a0
                            j = A.a0o | 0
                            c = intMultiply_1((a + c) | 0, 11)
                            u = (((c - intMultiply_1(j, 11)) | 0) / 11) | 0
                            h = intMultiply_1(h, 11)
                            n = (h - c) | 0
                            r = (u + (((n | 0) / 11) | 0)) | 0
                            h = (h - intMultiply_1((j + r) | 0, 11)) | 0
                            if (h >>> 0 >= 11) {
                                c = ((h >>> 0) / 11) | 0
                                a = (u + c) | 0
                                if ((n | 0) < 0) {
                                    n = (r + c) | 0
                                    if (((c & 1) | 0) !== 0) {
                                        c = (n - 1) | 0
                                        r = (a - 1) | 0
                                        p[(j + r) | 0].i0 = p[(j + c) | 0].i0 | 0
                                        p[(((j + a) | 0) + -1) | 0].d1 = +p[(((j + n) | 0) + -1) | 0].d1
                                    } else {
                                        c = n
                                        r = a
                                    }
                                    if ((h - 11) >>> 0 >= 11)
                                        while (1) {
                                            p[(((j + r) | 0) + -1) | 0].i0 = p[(((j + c) | 0) + -1) | 0].i0 | 0
                                            p[(((j + r) | 0) + -1) | 0].d1 = +p[(((j + c) | 0) + -1) | 0].d1
                                            a = (c - 2) | 0
                                            n = (r - 2) | 0
                                            p[(j + n) | 0].i0 = p[(j + a) | 0].i0 | 0
                                            p[(((j + r) | 0) + -2) | 0].d1 = +p[(((j + c) | 0) + -2) | 0].d1
                                            if (p !== p || ((j + u) | 0) !== ((j + n) | 0)) {
                                                c = a
                                                r = n
                                                continue
                                            }
                                            break
                                        }
                                } else {
                                    C = c & 3
                                    if ((C | 0) !== 0) {
                                        n = u
                                        x = 0
                                        while (1) {
                                            p[(j + n) | 0].i0 = p[(j + r) | 0].i0 | 0
                                            p[(j + n) | 0].d1 = +p[(j + r) | 0].d1
                                            x = (x + 1) | 0
                                            n = (n + 1) | 0
                                            r = (r + 1) | 0
                                            if ((x | 0) !== (C | 0)) continue
                                            break
                                        }
                                    } else {
                                        n = u
                                    }
                                    if ((c - 1) >>> 0 >= 3)
                                        while (1) {
                                            p[(j + n) | 0].i0 = p[(j + r) | 0].i0 | 0
                                            p[(j + n) | 0].d1 = +p[(j + r) | 0].d1
                                            p[(((j + n) | 0) + 1) | 0].i0 = p[(((j + r) | 0) + 1) | 0].i0 | 0
                                            p[(((j + n) | 0) + 1) | 0].d1 = +p[(((j + r) | 0) + 1) | 0].d1
                                            p[(((j + n) | 0) + 2) | 0].i0 = p[(((j + r) | 0) + 2) | 0].i0 | 0
                                            p[(((j + n) | 0) + 2) | 0].d1 = +p[(((j + r) | 0) + 2) | 0].d1
                                            p[(((j + n) | 0) + 3) | 0].i0 = p[(((j + r) | 0) + 3) | 0].i0 | 0
                                            p[(((j + n) | 0) + 3) | 0].d1 = +p[(((j + r) | 0) + 3) | 0].d1
                                            n = (n + 4) | 0
                                            if (p !== p || ((j + a) | 0) !== ((j + n) | 0)) {
                                                r = (r + 4) | 0
                                                continue
                                            }
                                            break
                                        }
                                }
                            }
                            A.a1 = p
                            A.a1o = (((j + u) | 0) + (((h | 0) / 11) | 0)) | 0
                        }
                    }
                } else {
                    c = (c + 1) | 0
                    if (f !== l || ((a + c) | 0) !== h) continue
                }
                break
            }
        }
    }
}
function kp(p, n) {
    var C = null,
        A = -0,
        x = -0,
        u = -0,
        r = -0,
        c = null,
        h = -0,
        l = -0,
        a = null,
        f = -0,
        j = 0
    C = p.a0
    c = n.currentTarget.getBoundingClientRect()
    h = +c.left
    l = +c.top
    a = n.changedTouches
    a = a[0]
    A = +a.clientX
    x = +a.clientY
    u = +c.right
    r = +c.bottom
    c = n.type
    a = "touchmove"
    f = +c.localeCompare(a)
    if (f === 0) {
        j = 0
    } else {
        c = n.type
        a = "touchstart"
        f = +c.localeCompare(a)
        if (f === 0) {
            j = 1
        } else {
            c = n.type
            a = "touchend"
            ;+c.localeCompare(a)
            j = 2
        }
    }
    f = +(~~l | 0)
    h = +(~~h | 0)
    l = +n.timeStamp
    c = {
        type: 76,
        value: j,
        x: (((~~(A - h) << 14) | 0) / (~~(u - h) | 0)) | 0,
        y: (((~~(x - f) << 14) | 0) / (~~(r - f) | 0)) | 0,
        timeStamp: l + +p.d1,
    }
    a = HEAP32
    j = C.i7 | 0
    a[(0 + j) | 0] = -2
    C.a6.postMessage(c)
}
function kk(r, p) {
    var E = null,
        C = -0,
        A = -0,
        x = -0,
        u = -0,
        n = -0,
        c = null,
        h = -0,
        l = -0,
        a = null,
        f = -0,
        j = 0
    E = r.a0
    c = p.currentTarget.getBoundingClientRect()
    h = +c.left
    l = +c.top
    C = +p.clientX
    A = +p.clientY
    x = +c.right
    u = +c.bottom
    c = p.type
    a = "mousemove"
    f = +c.localeCompare(a)
    if (f === 0) {
        j = 0
    } else {
        c = p.type
        a = "mousedown"
        f = +c.localeCompare(a)
        if (f === 0) {
            j = 1
        } else {
            c = p.type
            a = "mouseup"
            ;+c.localeCompare(a)
            j = 2
        }
    }
    n = +(~~l | 0)
    h = +(~~h | 0)
    l = +p.button
    f = +p.timeStamp
    c = {
        type: 76,
        value: j,
        button: ~~l,
        x: (((~~(C - h) << 14) | 0) / (~~(x - h) | 0)) | 0,
        y: (((~~(A - n) << 14) | 0) / (~~(u - n) | 0)) | 0,
        timeStamp: f + +r.d1,
    }
    a = HEAP32
    j = E.i7 | 0
    a[(0 + j) | 0] = -2
    E.a6.postMessage(c)
}
function kd(h, i) {
    h = h[i]
    var c = null,
        a = 0,
        f = null
    c = h.a3.a0
    a = h.a3.a0o | 0
    f = c[a].a[c[a].o - -1]
    f = f.a1.a1
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    h.a5(f)
}
function kc(f, g) {
    f = f[g]
    var c = null,
        a = 0
    c = f.a3.a0
    a = f.a3.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
}
function kb(A, x, u, r) {
    var n = null,
        p = null,
        h = null,
        f = null,
        j = null,
        c = 0,
        a = null,
        l = 0
    h = v6({
        a0: null,
        a1: null,
        a2: (h = {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                a1: null,
            },
        }),
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
        i6: 0,
        a7: null,
    }).a
    f = h[0]
    f.a0 = j_
    f.a1 = j9
    f.i6 = u
    f.a5 = x
    n = f.a2
    n.a0 = nullArray
    n.a0o = 0
    p = n.a1
    p.i0 = 0
    j = n.a
    c = n.o - 1
    A.a0 = j
    A.a0o = c
    j = f.a3
    b2(
        j,
        x,
        u,
        {
            type: 37,
            tid: u,
            arg0: r,
            arg1: null,
        },
        1
    )
    a = j.a0
    c = j.a0o | 0
    a: {
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 0
                f = a[c].a[a[c].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        c = a.a1.i1 | 0
        a = j.a0
        l = j.a0o | 0
        if (a !== nullArray || l !== 0) a[l].a1(a, l)
        l = f.i6 | 0
        a = f.a5
        cT(
            j,
            a,
            l,
            {
                type: 52,
                tid: l,
                value: c,
            },
            1
        )
        a = j.a0
        c = j.a0o | 0
        if (a !== nullArray || c !== 0) {
            if (a[c].a0 !== null) {
                f.i4 = 1
                f = a[c].a[a[c].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        a = a[c].a[a[c].o - -1]
        a = a.a1.a1
        h = j.a0
        c = j.a0o | 0
        if (h !== nullArray || c !== 0) h[c].a1(h, c)
        p.i0 = 256
        p.a1 = a
        f.a7 = n
        f.a0 = null
        h = n.a0
        c = n.a0o | 0
        ;(h !== nullArray || c !== 0 ? h : $)[h !== nullArray || c !== 0 ? c : aa].a0(h !== nullArray || c !== 0 ? h : $, h !== nullArray || c !== 0 ? c : aa)
    }
}
function j_(l, m) {
    var f = null,
        a = null,
        c = 0,
        h = null,
        j = 0
    f = l[m].a3
    a: {
        if ((l[m].i4 & 3) !== 0) {
            a = f.a0
            c = f.a0o | 0
            a = a[c]
        } else {
            a = f.a0
            c = f.a0o | 0
            a = a[c].a[a[c].o - -1]
            c = a.a1.i1 | 0
            a = f.a0
            j = f.a0o | 0
            if (a !== nullArray || j !== 0) a[j].a1(a, j)
            j = l[m].i6 | 0
            a = l[m].a5
            cT(
                f,
                a,
                j,
                {
                    type: 52,
                    tid: j,
                    value: c,
                },
                1
            )
            a = f.a0
            c = f.a0o | 0
            if (a !== nullArray || c !== 0) {
                if (a[c].a0 !== null) {
                    l[m].i4 = 1
                    f = a[c].a[a[c].o - -1]
                    f.a0 = l
                    f.a0o = m
                    break a
                }
                a = a[c]
            } else {
                a = null
            }
        }
        a = a.a[a.o - -1]
        a = a.a1.a1
        h = f.a0
        c = f.a0o | 0
        if (h !== nullArray || c !== 0) h[c].a1(h, c)
        h = l[m].a2
        f = h.a1
        f.i0 = 256
        f.a1 = a
        l[m].a7 = h
        l[m].a0 = null
        f = h.a0
        c = h.a0o | 0
        ;(f !== nullArray || c !== 0 ? f : $)[f !== nullArray || c !== 0 ? c : aa].a0(f !== nullArray || c !== 0 ? f : $, f !== nullArray || c !== 0 ? c : aa)
    }
}
function j9(h, i) {
    h = h[i]
    var f = null,
        c = null,
        a = 0
    a: if (h.a0 !== null) {
        f = h.a3
        if ((h.i4 & 3) !== 0) {
            c = f.a0
            a = f.a0o | 0
            if (c === nullArray && a === 0) break a
        } else {
            c = f.a0
            a = f.a0o | 0
            if (c === nullArray && a === 0) break a
        }
        c[a].a1(c, a)
    }
}
function be(x, u, r, p, n, l, j) {
    var K = null,
        G = null,
        c = null,
        f = null,
        a = 0,
        h = null,
        A = null,
        H = null,
        E = 0,
        C = 0
    G = new xC().a
    c = G[0]
    c.a0 = j6
    c.a1 = j5
    c.a8 = j
    c.i7 = l
    c.a6 = n
    c.i5 = p
    c.a4 = r
    c.a3 = u
    K = c.a2
    K.a0 = nullArray
    K.a0o = 0
    f = K.a
    a = K.o - 1
    x.a0 = f
    x.a0o = a
    f = "/".concat(p)
    c.a9 = f
    h = u.a6
    A = "r"
    c.a10 = A
    H = c.a16
    aB(H, h, f, A, 0, 0)
    f = H.a0
    a = H.a0o | 0
    a: {
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                c.i23 = 0
                c = f[a].a[f[a].o - -1]
                c.a0 = G
                c.a0o = 0
                break a
            }
        }
        f = f[a].a[f[a].o - -1]
        a = f.a1.i1 | 0
        c.i11 = a
        f = H.a0
        E = H.a0o | 0
        if (f !== nullArray || E !== 0) f[E].a1(f, E)
        f = c.a10
        h = c.a9
        b: {
            if ((a | 0) > -1) {
                f = c.a17
                bq(f, a, c.a6, c.i7 | 0, 131072)
                h = f.a0
                a = f.a0o | 0
                if (h !== nullArray || a !== 0) {
                    if (h[a].a0 !== null) {
                        c.i23 = 1
                        c = h[a].a[h[a].o - -1]
                        c.a0 = G
                        c.a0o = 0
                        break a
                    }
                }
                h = f.a0
                a = f.a0o | 0
                if (h !== nullArray || a !== 0) h[a].a1(h, a)
                f = c.a8
                if (f !== null) c.a4.a6.postMessage(f)
                f = c.a18
                aV(f, c.i11 | 0)
                h = f.a0
                a = f.a0o | 0
                if (h === nullArray && a === 0) break b
                if (h[a].a0 !== null) {
                    c.i23 = 2
                    c = h[a].a[h[a].o - -1]
                    c.a0 = G
                    c.a0o = 0
                    break a
                }
                G = h
                a = a
            } else {
                f = c.a19
                eg(f, c.a3.a5, c.a4, c.i5 << 17, 131072)
                h = f.a0
                a = f.a0o | 0
                if (h !== nullArray || a !== 0) {
                    if (h[a].a0 !== null) {
                        c.i23 = 3
                        c = h[a].a[h[a].o - -1]
                        c.a0 = G
                        c.a0o = 0
                        break a
                    }
                }
                h = h[a].a[h[a].o - -1]
                h = h.a1.a1
                c.a12 = h
                A = f.a0
                a = f.a0o | 0
                if (A !== nullArray || a !== 0) A[a].a1(A, a)
                A = c.a6
                if (A !== null) {
                    a = c.i7 | 0
                    C = 0
                    E = 0
                    while (1) {
                        A[(a + C) | 0] = h[(0 + E) | 0] | 0
                        A[(a + ((C + 1) | 0)) | 0] = h[(((0 + E) | 0) + 1) | 0] | 0
                        A[(a + ((C + 2) | 0)) | 0] = h[(((0 + E) | 0) + 2) | 0] | 0
                        A[(a + ((C + 3) | 0)) | 0] = h[(((0 + E) | 0) + 3) | 0] | 0
                        C = (C + 4) | 0
                        if ((C | 0) !== 131072) {
                            E = (E + 4) | 0
                            continue
                        }
                        break
                    }
                }
                f = c.a8
                if (f !== null) c.a4.a6.postMessage(f)
                f = c.a9
                h = c.a3.a6
                A = "w"
                c.a13 = A
                H = c.a20
                aB(H, h, f, A, 0, 0)
                f = H.a0
                a = H.a0o | 0
                if (f !== nullArray || a !== 0) {
                    if (f[a].a0 !== null) {
                        c.i23 = 4
                        c = f[a].a[f[a].o - -1]
                        c.a0 = G
                        c.a0o = 0
                        break a
                    }
                }
                f = f[a].a[f[a].o - -1]
                a = f.a1.i1 | 0
                c.i14 = a
                f = H.a0
                E = H.a0o | 0
                if (f !== nullArray || E !== 0) f[E].a1(f, E)
                f = c.a13
                h = c.a9
                f = c.a21
                aX(f, a, c.a12, 0, 131072)
                h = f.a0
                a = f.a0o | 0
                if (h !== nullArray || a !== 0) {
                    if (h[a].a0 !== null) {
                        c.i23 = 5
                        c = h[a].a[h[a].o - -1]
                        c.a0 = G
                        c.a0o = 0
                        break a
                    }
                }
                h = f.a0
                a = f.a0o | 0
                if (h !== nullArray || a !== 0) h[a].a1(h, a)
                f = c.a22
                aV(f, c.i14 | 0)
                h = f.a0
                a = f.a0o | 0
                if (h === nullArray && a === 0) break b
                if (h[a].a0 !== null) {
                    c.i23 = 6
                    c = h[a].a[h[a].o - -1]
                    c.a0 = G
                    c.a0o = 0
                    break a
                }
                G = h
                a = a
            }
            G[a].a1(G, a)
        }
        c.a15 = K
        c.a0 = null
        G = K.a0
        a = K.a0o | 0
        ;(G !== nullArray || a !== 0 ? G : $)[G !== nullArray || a !== 0 ? a : aa].a0(G !== nullArray || a !== 0 ? G : $, G !== nullArray || a !== 0 ? a : aa)
    }
}
function j6(x, y) {
    var A = null,
        a = 0,
        c = null,
        r = null,
        j = null,
        h = null,
        f = null,
        l = null,
        u = null,
        p = 0,
        n = 0
    a = x[y].i23 | 0
    c = x[y].a22
    r = x[y].a21
    j = x[y].a20
    a: {
        b: {
            c: {
                d: {
                    if (a << 29 > -536870912) {
                        h = x[y].a19
                        f = x[y].a18
                        e: {
                            if ((a & 7) < 2) {
                                l = x[y].a17
                                if ((a & 7) !== 0) {
                                    c = l.a0
                                    a = l.a0o | 0
                                    c = c[a]
                                } else {
                                    u = x[y].a16.a0
                                    a = x[y].a16.a0o | 0
                                    u = u[a].a[u[a].o - -1]
                                    a = u.a1.i1 | 0
                                    x[y].i11 = a
                                    u = x[y].a16.a0
                                    p = x[y].a16.a0o | 0
                                    if (u !== nullArray || p !== 0) u[p].a1(u, p)
                                    u = x[y].a10
                                    A = x[y].a9
                                    if ((a | 0) <= -1) {
                                        eg(h, x[y].a3.a5, x[y].a4, x[y].i5 << 17, 131072)
                                        f = h.a0
                                        a = h.a0o | 0
                                        if (f !== nullArray || a !== 0) {
                                            if (f[a].a0 !== null) {
                                                x[y].i23 = 3
                                                c = f[a].a[f[a].o - -1]
                                                c.a0 = x
                                                c.a0o = y
                                                break a
                                            }
                                            f = f[a]
                                            break e
                                        }
                                        f = null
                                        break e
                                    }
                                    bq(l, a, x[y].a6, x[y].i7 | 0, 131072)
                                    c = l.a0
                                    a = l.a0o | 0
                                    if (c !== nullArray || a !== 0) {
                                        if (c[a].a0 !== null) {
                                            x[y].i23 = 1
                                            c = c[a].a[c[a].o - -1]
                                            c.a0 = x
                                            c.a0o = y
                                            break a
                                        }
                                        c = c[a]
                                    } else {
                                        c = null
                                    }
                                }
                                c = l.a0
                                a = l.a0o | 0
                                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                                c = x[y].a8
                                if (c !== null) x[y].a4.a6.postMessage(c)
                                aV(f, x[y].i11 | 0)
                                c = f.a0
                                a = f.a0o | 0
                                if (c === nullArray && a === 0) break b
                                if (c[a].a0 !== null) {
                                    x[y].i23 = 2
                                    c = c[a].a[c[a].o - -1]
                                    c.a0 = x
                                    c.a0o = y
                                    break a
                                }
                                f = c
                                break c
                            }
                            if ((a & 7) === 2) {
                                c = f.a0
                                a = f.a0o | 0
                                if (c === nullArray && a === 0) break b
                                f = c
                                break c
                            }
                            f = h.a0
                            a = h.a0o | 0
                            f = f[a]
                        }
                        f = f.a[f.o - -1]
                        f = f.a1.a1
                        x[y].a12 = f
                        l = h.a0
                        a = h.a0o | 0
                        if (l !== nullArray || a !== 0) l[a].a1(l, a)
                        l = x[y].a6
                        if (l !== null) {
                            a = x[y].i7 | 0
                            n = 0
                            p = 0
                            while (1) {
                                l[(a + n) | 0] = f[(0 + p) | 0] | 0
                                l[(a + ((n + 1) | 0)) | 0] = f[(((0 + p) | 0) + 1) | 0] | 0
                                l[(a + ((n + 2) | 0)) | 0] = f[(((0 + p) | 0) + 2) | 0] | 0
                                l[(a + ((n + 3) | 0)) | 0] = f[(((0 + p) | 0) + 3) | 0] | 0
                                n = (n + 4) | 0
                                if ((n | 0) !== 131072) {
                                    p = (p + 4) | 0
                                    continue
                                }
                                break
                            }
                        }
                        h = x[y].a8
                        if (h !== null) x[y].a4.a6.postMessage(h)
                        h = x[y].a9
                        f = x[y].a3.a6
                        l = "w"
                        x[y].a13 = l
                        aB(j, f, h, l, 0, 0)
                        h = j.a0
                        a = j.a0o | 0
                        if (h !== nullArray || a !== 0) {
                            if (h[a].a0 !== null) {
                                x[y].i23 = 4
                                c = h[a].a[h[a].o - -1]
                                c.a0 = x
                                c.a0o = y
                                break a
                            }
                            h = h[a]
                        } else {
                            h = null
                        }
                    } else {
                        if ((a & 7) >= 6) {
                            f = c.a0
                            a = c.a0o | 0
                            if (f !== nullArray || a !== 0) break c
                            break b
                        }
                        if ((a & 7) !== 4) {
                            j = r.a0
                            a = r.a0o | 0
                            j = j[a]
                            break d
                        }
                        h = j.a0
                        a = j.a0o | 0
                        h = h[a]
                    }
                    h = h.a[h.o - -1]
                    a = h.a1.i1 | 0
                    x[y].i14 = a
                    h = j.a0
                    p = j.a0o | 0
                    if (h !== nullArray || p !== 0) h[p].a1(h, p)
                    j = x[y].a13
                    h = x[y].a9
                    aX(r, a, x[y].a12, 0, 131072)
                    j = r.a0
                    a = r.a0o | 0
                    if (j !== nullArray || a !== 0) {
                        if (j[a].a0 !== null) {
                            x[y].i23 = 5
                            c = j[a].a[j[a].o - -1]
                            c.a0 = x
                            c.a0o = y
                            break a
                        }
                        j = j[a]
                    } else {
                        j = null
                    }
                }
                j = r.a0
                a = r.a0o | 0
                if (j !== nullArray || a !== 0) j[a].a1(j, a)
                aV(c, x[y].i14 | 0)
                f = c.a0
                a = c.a0o | 0
                if (f === nullArray && a === 0) break b
                if (f[a].a0 !== null) {
                    x[y].i23 = 6
                    c = f[a].a[f[a].o - -1]
                    c.a0 = x
                    c.a0o = y
                    break a
                }
            }
            f[a].a1(f, a)
        }
        c = x[y].a2
        x[y].a15 = c
        x[y].a0 = null
        r = c.a0
        a = c.a0o | 0
        ;(r !== nullArray || a !== 0 ? r : $)[r !== nullArray || a !== 0 ? a : aa].a0(r !== nullArray || a !== 0 ? r : $, r !== nullArray || a !== 0 ? a : aa)
    }
}
function j5(h, i) {
    h = h[i]
    var a = 0,
        c = null,
        f = null
    if (h.a0 !== null) {
        a = h.i23 | 0
        if (a << 29 > -536870912) {
            if ((a & 7) < 2) {
                if ((a & 7) !== 0) {
                    c = h.a17.a0
                    a = h.a17.a0o | 0
                    if (c !== nullArray || a !== 0) c[a].a1(c, a)
                } else {
                    c = h.a16.a0
                    a = h.a16.a0o | 0
                    if (c !== nullArray || a !== 0) c[a].a1(c, a)
                    c = h.a10
                    f = h.a9
                }
            } else if ((a & 7) === 2) {
                c = h.a18.a0
                a = h.a18.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            } else {
                c = h.a19.a0
                a = h.a19.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            }
        } else if ((a & 7) < 6) {
            if ((a & 7) === 4) {
                h.i14 = h.i11 | 0
                c = h.a20.a0
                a = h.a20.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                c = h.a13
                f = h.a9
            } else {
                c = h.a21.a0
                a = h.a21.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
            }
        } else {
            c = h.a22.a0
            a = h.a22.a0o | 0
            if (c !== nullArray || a !== 0) c[a].a1(c, a)
        }
    }
}
function eT(am, ah, ay) {
    var aq = null,
        f = null,
        M = null,
        O = null,
        P = null,
        R = null,
        S = null,
        T = null,
        U = null,
        V = null,
        G = 0,
        c = null,
        l = null,
        r = null,
        L = null,
        p = null,
        h = null,
        a = 0,
        u = null,
        H = null,
        j = 0,
        E = 0,
        x = 0,
        n = 0,
        A = 0,
        C = 0,
        K = 0
    aq = new xB().a
    f = aq[0]
    f.a0 = j2
    f.a1 = j1
    f.a15 = ay
    f.a14 = ah
    c = f.a2.a[f.a2.o - 1]
    am.a0 = c
    M = f.a11
    O = f.a10
    P = f.a9
    R = f.a8
    S = f.a7
    T = f.a6
    U = f.a5
    V = f.a4
    while (1) {
        f.i22 = a
        f.a21 = h
        f.a20 = p
        f.a19 = L
        f.a18 = r
        f.a17 = c
        f.a16 = l
        u = f.a14
        c = u.a8
        h = c.a0
        a = c.a0o | 0
        H = c.a1
        j = c.a1o | 0
        if (h === H && a === j) {
            c = u.a9
            h = c.a0
            a = c.a0o | 0
            H = c.a1
            E = c.a1o | 0
            if (h === H && a === E) {
                l = u.a10
                h = l.a0
                a = l.a0o | 0
                p = l.a1
                x = l.a1o | 0
                if (h === p && a === x) {
                    c = aR[2]
                    if (c !== null) {
                        h = f.a13[0]
                        H = "ready"
                        f.a13[0] = H
                        if ((c.i0 | 0) === 1) {
                            if ((H | 0 | 0) === 1) {
                                h = "ready"
                                h = h
                            } else {
                                h = "wait"
                                h = h
                            }
                        } else h = H
                        c = c.a1
                        u = c.a0
                        a = c.a0o | 0
                        p = c.a1
                        j = c.a1o | 0
                        if (u !== p || a !== j) {
                            n = 0
                            while (1) {
                                u[(a + n) | 0](h)
                                n = (n + 1) | 0
                                if (u !== p || ((a + n) | 0) !== j) continue
                                break
                            }
                        }
                        u = f.a14
                    }
                    bH(f.a15)
                    u.i11 = (u.i11 & 65280) | 1
                    f.i12 = 8
                    c = f.a14
                    c.a7.a0 = aq
                    c.a7.a0o = 0
                    break
                }
                u.i11 = (u.i11 & 255) | 256
                p = f.a3
                p.i0 = h[a].i0 | 0
                p.i1 = h[a].i1 | 0
                x = h[a].i2 | 0
                p.i2 = x
                p.a3 = h[a].a3
                c = l.a0
                A = l.a0o | 0
                a = (intMultiply_1(a, 16) - intMultiply_1(A, 16)) >> 4
                j = (a + 1) | 0
                h = l.a1
                n = l.a1o | 0
                n = (intMultiply_1(n, 16) - intMultiply_1((A + j) | 0, 16)) | 0
                if (n >>> 0 >= 16) {
                    x = (n - 16) | 0
                    if (((x & 16) | 0) !== 0) {
                        C = a
                    } else {
                        c[(A + a) | 0].i0 = c[(A + j) | 0].i0 | 0
                        c[(A + a) | 0].i1 = c[(A + j) | 0].i1 | 0
                        c[(A + a) | 0].i2 = c[(A + j) | 0].i2 | 0
                        c[(A + a) | 0].a3 = c[(A + j) | 0].a3
                        C = j
                        j = (j + 1) | 0
                    }
                    if (x >>> 0 >= 16)
                        while (1) {
                            c[(A + C) | 0].i0 = c[(A + j) | 0].i0 | 0
                            c[(A + C) | 0].i1 = c[(A + j) | 0].i1 | 0
                            c[(A + C) | 0].i2 = c[(A + j) | 0].i2 | 0
                            c[(A + C) | 0].a3 = c[(A + j) | 0].a3
                            c[(((A + C) | 0) + 1) | 0].i0 = c[(((A + j) | 0) + 1) | 0].i0 | 0
                            c[(((A + C) | 0) + 1) | 0].i1 = c[(((A + j) | 0) + 1) | 0].i1 | 0
                            c[(((A + C) | 0) + 1) | 0].i2 = c[(((A + j) | 0) + 1) | 0].i2 | 0
                            c[(((A + C) | 0) + 1) | 0].a3 = c[(((A + j) | 0) + 1) | 0].a3
                            C = (C + 2) | 0
                            if (c !== c || ((((A + a) | 0) + (n >>> 4)) | 0) !== ((A + C) | 0)) {
                                j = (j + 2) | 0
                                continue
                            }
                            break
                        }
                    x = p.i2 | 0
                }
                h = f.a14
                l.a1 = c
                l.a1o = (((A + a) | 0) + (n >> 4)) | 0
                l = "/".concat(x >>> 17)
                f.a30 = l
                c = h.a6
                r = "w"
                f.a31 = r
                aB(P, c, l, r, 0, 0)
                l = P.a0
                a = P.a0o | 0
                if (l !== nullArray || a !== 0) {
                    if (l[a].a0 !== null) {
                        f.i12 = 5
                        c = l[a].a[l[a].o - -1]
                        c.a0 = aq
                        c.a0o = 0
                        break
                    }
                }
                l = l[a].a[l[a].o - -1]
                a = l.a1.i1 | 0
                f.i32 = a
                l = P.a0
                j = P.a0o | 0
                if (l !== nullArray || j !== 0) l[j].a1(l, j)
                c = f.a31
                h = f.a30
                c = p.a3
                n = c.len
                j = c.bufOffset
                aX(O, a, HEAP8, j, n)
                c = O.a0
                a = O.a0o | 0
                if (c !== nullArray || a !== 0) {
                    if (c[a].a0 !== null) {
                        f.i12 = 6
                        c = c[a].a[c[a].o - -1]
                        c.a0 = aq
                        c.a0o = 0
                        break
                    }
                }
                c = O.a0
                a = O.a0o | 0
                if (c !== nullArray || a !== 0) c[a].a1(c, a)
                aV(M, f.i32 | 0)
                c = M.a0
                a = M.a0o | 0
                if (c !== nullArray || a !== 0) {
                    if (c[a].a0 !== null) {
                        f.i12 = 7
                        c = c[a].a[c[a].o - -1]
                        c.a0 = aq
                        c.a0o = 0
                        break
                    }
                    c[a].a1(c, a)
                }
                c = f.a14
                c.i11 = c.i11 & 255
                c = f.a17
                l = f.a16
                r = f.a30
                L = f.a31
                p = f.a20
                h = f.a21
                a = f.i32 | 0
            } else {
                E = h[a] | 0
                f.i23 = E
                r = c.a0
                G = c.a0o | 0
                a = (intMultiply_1(a, 4) - intMultiply_1(G, 4)) >> 2
                j = (a + 1) | 0
                h = c.a1
                K = c.a1o | 0
                K = (intMultiply_1(K, 4) - intMultiply_1((G + j) | 0, 4)) | 0
                if (K >>> 0 >= 4) {
                    A = (K - 4) | 0
                    x = ((A >>> 2) + 1) & 7
                    if ((x | 0) !== 0) {
                        n = a
                        C = 0
                        while (1) {
                            r[(G + n) | 0] = r[(G + j) | 0] | 0
                            C = (C + 1) | 0
                            n = (n + 1) | 0
                            j = (j + 1) | 0
                            if ((C | 0) !== (x | 0)) continue
                            break
                        }
                    } else {
                        n = a
                    }
                    if (A >>> 0 >= 28)
                        while (1) {
                            r[(G + n) | 0] = r[(G + j) | 0] | 0
                            r[(((G + n) | 0) + 1) | 0] = r[(((G + j) | 0) + 1) | 0] | 0
                            r[(((G + n) | 0) + 2) | 0] = r[(((G + j) | 0) + 2) | 0] | 0
                            r[(((G + n) | 0) + 3) | 0] = r[(((G + j) | 0) + 3) | 0] | 0
                            r[(((G + n) | 0) + 4) | 0] = r[(((G + j) | 0) + 4) | 0] | 0
                            r[(((G + n) | 0) + 5) | 0] = r[(((G + j) | 0) + 5) | 0] | 0
                            r[(((G + n) | 0) + 6) | 0] = r[(((G + j) | 0) + 6) | 0] | 0
                            r[(((G + n) | 0) + 7) | 0] = r[(((G + j) | 0) + 7) | 0] | 0
                            n = (n + 8) | 0
                            if (r !== r || ((((G + a) | 0) + (K >>> 2)) | 0) !== ((G + n) | 0)) {
                                j = (j + 8) | 0
                                continue
                            }
                            break
                        }
                    u = f.a14
                }
                c.a1 = r
                c.a1o = (((G + a) | 0) + (K >> 2)) | 0
                if (E >>> 0 < u.i3 >>> 0) {
                    c = f.a14
                    r = "/".concat(((E >>> 17) + 1) | 0)
                    f.a24 = r
                    c = c.a6
                    a4(U, c, r)
                    c = U.a0
                    a = U.a0o | 0
                    if (c !== nullArray || a !== 0) {
                        if (c[a].a0 !== null) {
                            f.i12 = 1
                            c = c[a].a[c[a].o - -1]
                            c.a0 = aq
                            c.a0o = 0
                            break
                        }
                    }
                    c = c[a].a[c[a].o - -1]
                    p = c.a1.a1
                    f.a25 = p
                    l = U.a0
                    a = U.a0o | 0
                    if (l !== nullArray || a !== 0) l[a].a1(l, a)
                    l = f.a24
                    if ((p.permType | 0) === 0) {
                        be(T, f.a14, f.a15, ((f.i23 >>> 17) + 1) | 0, null, 0, null)
                        c = T.a0
                        a = T.a0o | 0
                        if (c !== nullArray || a !== 0) {
                            if (c[a].a0 !== null) {
                                f.i12 = 2
                                c = c[a].a[c[a].o - -1]
                                c.a0 = aq
                                c.a0o = 0
                                break
                            }
                            c[a].a1(c, a)
                        }
                        c = f.a17
                        l = f.a24
                        r = f.a18
                        L = f.a19
                        p = f.a25
                        h = f.a21
                        a = f.i22 | 0
                        continue
                    }
                    l = f.a24
                }
                f.a27 = p
                f.a26 = l
                a = f.i23 | 0
                if ((a | 0) !== 0) {
                    c = f.a17
                    l = f.a14
                    r = "/".concat(((a >>> 17) - 1) | 0)
                    f.a28 = r
                    l = l.a6
                    a4(S, l, r)
                    c = S.a0
                    a = S.a0o | 0
                    if (c !== nullArray || a !== 0) {
                        if (c[a].a0 !== null) {
                            f.i12 = 3
                            c = c[a].a[c[a].o - -1]
                            c.a0 = aq
                            c.a0o = 0
                            break
                        }
                    }
                    c = c[a].a[c[a].o - -1]
                    h = c.a1.a1
                    f.a29 = h
                    l = S.a0
                    a = S.a0o | 0
                    if (l !== nullArray || a !== 0) l[a].a1(l, a)
                    l = f.a28
                    if ((h.permType | 0) !== 0) {
                        c = f.a28
                        l = f.a26
                        r = f.a18
                        L = f.a19
                        p = f.a27
                        a = f.i22 | 0
                    } else {
                        be(R, f.a14, f.a15, ((f.i23 >>> 17) - 1) | 0, null, 0, null)
                        c = R.a0
                        a = R.a0o | 0
                        if (c !== nullArray || a !== 0) {
                            if (c[a].a0 !== null) {
                                f.i12 = 4
                                c = c[a].a[c[a].o - -1]
                                c.a0 = aq
                                c.a0o = 0
                                break
                            }
                            c[a].a1(c, a)
                        }
                        c = f.a28
                        l = f.a26
                        r = f.a18
                        L = f.a19
                        p = f.a27
                        h = f.a29
                        a = f.i22 | 0
                    }
                } else {
                    c = f.a17
                    r = f.a18
                    L = f.a19
                    h = f.a21
                    a = f.i22 | 0
                }
            }
        } else {
            C = h[a].i0 | 0
            A = h[a].i1 | 0
            K = h[a].i2 | 0
            p = h[a].a3
            E = (intMultiply_1(j, 16) - intMultiply_1((a + 1) | 0, 16)) | 0
            if (E >>> 0 >= 16) {
                x = (E - 16) | 0
                if (((x & 16) | 0) !== 0) {
                    n = 0
                    j = 1
                } else {
                    h[a].i0 = h[(a + 1) | 0].i0 | 0
                    h[a].i1 = h[(a + 1) | 0].i1 | 0
                    h[a].i2 = h[(a + 1) | 0].i2 | 0
                    h[a].a3 = h[(a + 1) | 0].a3
                    n = 1
                    j = 2
                }
                if (x >>> 0 >= 16)
                    while (1) {
                        h[(a + n) | 0].i0 = h[(a + j) | 0].i0 | 0
                        h[(a + n) | 0].i1 = h[(a + j) | 0].i1 | 0
                        h[(a + n) | 0].i2 = h[(a + j) | 0].i2 | 0
                        h[(a + n) | 0].a3 = h[(a + j) | 0].a3
                        h[(((a + n) | 0) + 1) | 0].i0 = h[(((a + j) | 0) + 1) | 0].i0 | 0
                        h[(((a + n) | 0) + 1) | 0].i1 = h[(((a + j) | 0) + 1) | 0].i1 | 0
                        h[(((a + n) | 0) + 1) | 0].i2 = h[(((a + j) | 0) + 1) | 0].i2 | 0
                        h[(((a + n) | 0) + 1) | 0].a3 = h[(((a + j) | 0) + 1) | 0].a3
                        n = (n + 2) | 0
                        if (h !== h || ((a + (E >>> 4)) | 0) !== ((a + n) | 0)) {
                            j = (j + 2) | 0
                            continue
                        }
                        break
                    }
                u = f.a14
            }
            H = f.a15
            c.a1 = h
            c.a1o = (a + (E >> 4)) | 0
            p.len
            j = p.bufOffset
            p = {
                type: C,
                tid: A,
            }
            be(V, u, H, K >>> 17, HEAP8, j, p)
            c = V.a0
            a = V.a0o | 0
            if (c !== nullArray || a !== 0) {
                if (c[a].a0 !== null) {
                    f.i12 = 0
                    c = c[a].a[c[a].o - -1]
                    c.a0 = aq
                    c.a0o = 0
                    break
                }
                c[a].a1(c, a)
            }
            c = f.a17
            l = f.a16
            r = f.a18
            L = f.a19
            p = f.a20
            h = f.a21
            a = f.i22 | 0
        }
        continue
    }
}
function j2(v0, v1) {
    var eF = null,
        dj = null,
        eE = null,
        P = null,
        R = 0,
        L = null,
        M = 0,
        K = null,
        H = 0,
        aY = 0,
        aS = null,
        ay = null,
        cb = null,
        bS = null,
        bR = null,
        j = null,
        h = 0,
        a = 0,
        p = null,
        l = null,
        r = null,
        n = null,
        E = 0,
        c = null,
        G = null,
        u = null,
        x = null,
        C = null,
        A = null,
        f = null,
        U = null,
        S = 0,
        O = 0,
        T = null,
        V = null,
        ah = 0,
        di = 0,
        am = 0,
        aq = 0,
        bB = 0
    aS = v0[v1].a11
    ay = v0[v1].a10
    cb = v0[v1].a9
    bS = v0[v1].a8
    bR = v0[v1].a7
    eF = v0[v1].a6
    dj = v0[v1].a5
    eE = v0[v1].a4
    switch (v0[v1].i12 & 15) {
        case 0:
            j = eE.a0
            h = eE.a0o | 0
            a = 10
            break
        case 1:
            l = dj.a0
            a = dj.a0o | 0
            l = l[a]
            a = 4
            break
        case 2:
            c = eF.a0
            a = eF.a0o | 0
            if (c !== nullArray || a !== 0) {
                L = c
                M = a
                a = 2
                break
            }
            a = 3
            break
        case 3:
            p = bR.a0
            a = bR.a0o | 0
            p = p[a]
            a = 1
            break
        case 4:
            c = bS.a0
            a = bS.a0o | 0
            if (c !== nullArray || a !== 0) {
                P = c
                R = a
                a = -1
                break
            }
            a = 0
            break
        case 5:
            n = cb.a0
            a = cb.a0o | 0
            n = n[a]
            a = 8
            break
        case 6:
            r = ay.a0
            a = ay.a0o | 0
            r = r[a]
            a = 7
            break
        case 7:
            c = aS.a0
            a = aS.a0o | 0
            if (c !== nullArray || a !== 0) {
                K = c
                H = a
                a = 5
                break
            }
            a = 6
            break
        case 8:
            c = v0[v1].a14
            a = c.a7.i1 | 0
            if ((a & 16777215) < 65536) {
                E = v0[v1].i22 | 0
                c = v0[v1].a21
                G = v0[v1].a20
                u = v0[v1].a19
                x = v0[v1].a18
                C = v0[v1].a17
                A = v0[v1].a16
                a = 9
                break
            }
            c.a7.i1 = a & 65535
            E = v0[v1].i22 | 0
            c = v0[v1].a21
            G = v0[v1].a20
            u = v0[v1].a19
            x = v0[v1].a18
            C = v0[v1].a17
            A = v0[v1].a16
            a = 9
            break
        default:
    }
    a: {
        b: while (1) {
            switch (a | 0) {
                case 0:
                    c = v0[v1].a29
                    C = v0[v1].a28
                    G = v0[v1].a27
                    A = v0[v1].a26
                    E = v0[v1].i22 | 0
                    u = v0[v1].a19
                    x = v0[v1].a18
                    a = 9
                    continue b
                case 1:
                    f = p.a[p.o - -1]
                    f = f.a1.a1
                    v0[v1].a29 = f
                    U = bR.a0
                    a = bR.a0o | 0
                    if (U !== nullArray || a !== 0) U[a].a1(U, a)
                    U = v0[v1].a28
                    if ((f.permType | 0) !== 0) {
                        C = v0[v1].a28
                        G = v0[v1].a27
                        A = v0[v1].a26
                        E = v0[v1].i22 | 0
                        u = v0[v1].a19
                        x = v0[v1].a18
                        c = f
                        a = 9
                        continue b
                    }
                    be(bS, v0[v1].a14, v0[v1].a15, ((v0[v1].i23 >>> 17) - 1) | 0, null, 0, null)
                    f = bS.a0
                    a = bS.a0o | 0
                    if (f !== nullArray || a !== 0) {
                        if (f[a].a0 !== null) {
                            v0[v1].i12 = 4
                            c = f[a].a[f[a].o - -1]
                            c.a0 = v0
                            c.a0o = v1
                            break a
                        }
                        P = f
                        R = a
                        a = -1
                        continue b
                    }
                    a = 0
                    continue b
                case 2:
                    L[M].a1(L, M)
                    a = 3
                    continue b
                case 3:
                    G = v0[v1].a25
                    A = v0[v1].a24
                    E = v0[v1].i22 | 0
                    c = v0[v1].a21
                    u = v0[v1].a19
                    x = v0[v1].a18
                    C = v0[v1].a17
                    a = 9
                    continue b
                case 4:
                    f = l.a[l.o - -1]
                    U = f.a1.a1
                    v0[v1].a25 = U
                    f = dj.a0
                    a = dj.a0o | 0
                    if (f !== nullArray || a !== 0) f[a].a1(f, a)
                    f = v0[v1].a24
                    if ((U.permType | 0) !== 0) {
                        f = v0[v1].a24
                        break
                    }
                    be(eF, v0[v1].a14, v0[v1].a15, ((v0[v1].i23 >>> 17) + 1) | 0, null, 0, null)
                    f = eF.a0
                    a = eF.a0o | 0
                    if (f !== nullArray || a !== 0) {
                        if (f[a].a0 !== null) {
                            v0[v1].i12 = 2
                            c = f[a].a[f[a].o - -1]
                            c.a0 = v0
                            c.a0o = v1
                            break a
                        }
                        L = f
                        M = a
                        a = 2
                        continue b
                    }
                    a = 3
                    continue b
                case 5:
                    K[H].a1(K, H)
                    a = 6
                    continue b
                case 6:
                    c = v0[v1].a14
                    c.i11 = c.i11 & 255
                    E = v0[v1].i32 | 0
                    u = v0[v1].a31
                    x = v0[v1].a30
                    c = v0[v1].a21
                    G = v0[v1].a20
                    C = v0[v1].a17
                    A = v0[v1].a16
                    a = 9
                    continue b
                case 7:
                    f = ay.a0
                    a = ay.a0o | 0
                    if (f !== nullArray || a !== 0) f[a].a1(f, a)
                    aV(aS, v0[v1].i32 | 0)
                    f = aS.a0
                    a = aS.a0o | 0
                    if (f !== nullArray || a !== 0) {
                        if (f[a].a0 !== null) {
                            v0[v1].i12 = 7
                            c = f[a].a[f[a].o - -1]
                            c.a0 = v0
                            c.a0o = v1
                            break a
                        }
                        K = f
                        H = a
                        a = 5
                        continue b
                    }
                    a = 6
                    continue b
                case 8:
                    f = n.a[n.o - -1]
                    S = f.a1.i1 | 0
                    v0[v1].i32 = S
                    f = cb.a0
                    a = cb.a0o | 0
                    if (f !== nullArray || a !== 0) f[a].a1(f, a)
                    r = v0[v1].a31
                    U = v0[v1].a30
                    f = v0[v1].a3.a3
                    O = f.len
                    a = f.bufOffset
                    aX(ay, S, HEAP8, a, O)
                    r = ay.a0
                    a = ay.a0o | 0
                    if (r !== nullArray || a !== 0) {
                        if (r[a].a0 !== null) {
                            v0[v1].i12 = 6
                            c = r[a].a[r[a].o - -1]
                            c.a0 = v0
                            c.a0o = v1
                            break a
                        }
                        r = r[a]
                        a = 7
                        continue b
                    }
                    r = null
                    a = 7
                    continue b
                case 9:
                    v0[v1].i22 = E
                    v0[v1].a21 = c
                    v0[v1].a20 = G
                    v0[v1].a19 = u
                    v0[v1].a18 = x
                    v0[v1].a17 = C
                    v0[v1].a16 = A
                    U = v0[v1].a14
                    f = U.a8
                    T = f.a0
                    O = f.a0o | 0
                    V = f.a1
                    ah = f.a1o | 0
                    if (T === V && O === ah) {
                        f = U.a9
                        T = f.a0
                        a = f.a0o | 0
                        V = f.a1
                        di = f.a1o | 0
                        if (T === V && a === di) {
                            n = U.a10
                            f = n.a0
                            a = n.a0o | 0
                            T = n.a1
                            am = n.a1o | 0
                            if (f === T && a === am) {
                                aS = aR[2]
                                if (aS !== null) {
                                    ay = v0[v1].a13[0]
                                    cb = "ready"
                                    v0[v1].a13[0] = cb
                                    if ((aS.i0 | 0) === 1) {
                                        if ((cb | 0 | 0) === 1) {
                                            ay = "ready"
                                            ay = ay
                                        } else {
                                            ay = "wait"
                                            ay = ay
                                        }
                                    } else ay = cb
                                    aS = aS.a1
                                    bS = aS.a0
                                    h = aS.a0o | 0
                                    bR = aS.a1
                                    a = aS.a1o | 0
                                    if (bS !== bR || h !== a) {
                                        S = 0
                                        while (1) {
                                            bS[(h + S) | 0](ay)
                                            S = (S + 1) | 0
                                            if (bS !== bR || ((h + S) | 0) !== a) continue
                                            break
                                        }
                                    }
                                    U = v0[v1].a14
                                }
                                bH(v0[v1].a15)
                                U.i11 = (U.i11 & 65280) | 1
                                v0[v1].i12 = 8
                                c = v0[v1].a14
                                c.a7.a0 = v0
                                c.a7.a0o = v1
                                break a
                            }
                            U.i11 = (U.i11 & 255) | 256
                            T = v0[v1].a3
                            T.i0 = f[a].i0 | 0
                            T.i1 = f[a].i1 | 0
                            ah = f[a].i2 | 0
                            T.i2 = ah
                            T.a3 = f[a].a3
                            V = n.a0
                            am = n.a0o | 0
                            a = (intMultiply_1(a, 16) - intMultiply_1(am, 16)) >> 4
                            S = (a + 1) | 0
                            f = n.a1
                            O = n.a1o | 0
                            O = (intMultiply_1(O, 16) - intMultiply_1((am + S) | 0, 16)) | 0
                            if (O >>> 0 >= 16) {
                                ah = (O - 16) | 0
                                if (((ah & 16) | 0) !== 0) {
                                    aq = a
                                } else {
                                    V[(am + a) | 0].i0 = V[(am + S) | 0].i0 | 0
                                    V[(am + a) | 0].i1 = V[(am + S) | 0].i1 | 0
                                    V[(am + a) | 0].i2 = V[(am + S) | 0].i2 | 0
                                    V[(am + a) | 0].a3 = V[(am + S) | 0].a3
                                    aq = S
                                    S = (S + 1) | 0
                                }
                                if (ah >>> 0 >= 16)
                                    while (1) {
                                        V[(am + aq) | 0].i0 = V[(am + S) | 0].i0 | 0
                                        V[(am + aq) | 0].i1 = V[(am + S) | 0].i1 | 0
                                        V[(am + aq) | 0].i2 = V[(am + S) | 0].i2 | 0
                                        V[(am + aq) | 0].a3 = V[(am + S) | 0].a3
                                        V[(((am + aq) | 0) + 1) | 0].i0 = V[(((am + S) | 0) + 1) | 0].i0 | 0
                                        V[(((am + aq) | 0) + 1) | 0].i1 = V[(((am + S) | 0) + 1) | 0].i1 | 0
                                        V[(((am + aq) | 0) + 1) | 0].i2 = V[(((am + S) | 0) + 1) | 0].i2 | 0
                                        V[(((am + aq) | 0) + 1) | 0].a3 = V[(((am + S) | 0) + 1) | 0].a3
                                        aq = (aq + 2) | 0
                                        if (V !== V || ((((am + a) | 0) + (O >>> 4)) | 0) !== ((am + aq) | 0)) {
                                            S = (S + 2) | 0
                                            continue
                                        }
                                        break
                                    }
                                ah = T.i2 | 0
                            }
                            T = v0[v1].a14
                            n.a1 = V
                            n.a1o = (((am + a) | 0) + (O >> 4)) | 0
                            V = "/".concat(ah >>> 17)
                            v0[v1].a30 = V
                            T = T.a6
                            f = "w"
                            v0[v1].a31 = f
                            aB(cb, T, V, f, 0, 0)
                            n = cb.a0
                            a = cb.a0o | 0
                            if (n !== nullArray || a !== 0) {
                                if (n[a].a0 !== null) {
                                    v0[v1].i12 = 5
                                    c = n[a].a[n[a].o - -1]
                                    c.a0 = v0
                                    c.a0o = v1
                                    break a
                                }
                                n = n[a]
                                a = 8
                                continue b
                            }
                            n = null
                            a = 8
                            continue b
                        }
                        di = T[a] | 0
                        v0[v1].i23 = di
                        V = f.a0
                        aY = f.a0o | 0
                        a = (intMultiply_1(a, 4) - intMultiply_1(aY, 4)) >> 2
                        S = (a + 1) | 0
                        T = f.a1
                        bB = f.a1o | 0
                        bB = (intMultiply_1(bB, 4) - intMultiply_1((aY + S) | 0, 4)) | 0
                        if (bB >>> 0 >= 4) {
                            am = (bB - 4) | 0
                            ah = ((am >>> 2) + 1) & 7
                            if ((ah | 0) !== 0) {
                                O = a
                                aq = 0
                                while (1) {
                                    V[(aY + O) | 0] = V[(aY + S) | 0] | 0
                                    aq = (aq + 1) | 0
                                    O = (O + 1) | 0
                                    S = (S + 1) | 0
                                    if ((aq | 0) !== (ah | 0)) continue
                                    break
                                }
                            } else {
                                O = a
                            }
                            if (am >>> 0 >= 28)
                                while (1) {
                                    V[(aY + O) | 0] = V[(aY + S) | 0] | 0
                                    V[(((aY + O) | 0) + 1) | 0] = V[(((aY + S) | 0) + 1) | 0] | 0
                                    V[(((aY + O) | 0) + 2) | 0] = V[(((aY + S) | 0) + 2) | 0] | 0
                                    V[(((aY + O) | 0) + 3) | 0] = V[(((aY + S) | 0) + 3) | 0] | 0
                                    V[(((aY + O) | 0) + 4) | 0] = V[(((aY + S) | 0) + 4) | 0] | 0
                                    V[(((aY + O) | 0) + 5) | 0] = V[(((aY + S) | 0) + 5) | 0] | 0
                                    V[(((aY + O) | 0) + 6) | 0] = V[(((aY + S) | 0) + 6) | 0] | 0
                                    V[(((aY + O) | 0) + 7) | 0] = V[(((aY + S) | 0) + 7) | 0] | 0
                                    O = (O + 8) | 0
                                    if (V !== V || ((((aY + a) | 0) + (bB >>> 2)) | 0) !== ((aY + O) | 0)) {
                                        S = (S + 8) | 0
                                        continue
                                    }
                                    break
                                }
                            U = v0[v1].a14
                        }
                        f.a1 = V
                        f.a1o = (((aY + a) | 0) + (bB >> 2)) | 0
                        if (di >>> 0 < U.i3 >>> 0) {
                            l = v0[v1].a14
                            U = "/".concat(((di >>> 17) + 1) | 0)
                            v0[v1].a24 = U
                            l = l.a6
                            a4(dj, l, U)
                            l = dj.a0
                            a = dj.a0o | 0
                            if (l !== nullArray || a !== 0) {
                                if (l[a].a0 !== null) {
                                    v0[v1].i12 = 1
                                    c = l[a].a[l[a].o - -1]
                                    c.a0 = v0
                                    c.a0o = v1
                                    break a
                                }
                                l = l[a]
                                a = 4
                                continue b
                            }
                            l = null
                            a = 4
                            continue b
                        }
                        f = A
                        U = G
                        break
                    }
                    h = T[O].i0 | 0
                    a = T[O].i1 | 0
                    S = T[O].i2 | 0
                    j = T[O].a3
                    ah = (intMultiply_1(ah, 16) - intMultiply_1((O + 1) | 0, 16)) | 0
                    if (ah >>> 0 >= 16) {
                        bB = (ah - 16) | 0
                        if (((bB & 16) | 0) !== 0) {
                            am = 0
                            aq = 1
                        } else {
                            T[O].i0 = T[(O + 1) | 0].i0 | 0
                            T[O].i1 = T[(O + 1) | 0].i1 | 0
                            T[O].i2 = T[(O + 1) | 0].i2 | 0
                            T[O].a3 = T[(O + 1) | 0].a3
                            am = 1
                            aq = 2
                        }
                        if (bB >>> 0 >= 16)
                            while (1) {
                                T[(O + am) | 0].i0 = T[(O + aq) | 0].i0 | 0
                                T[(O + am) | 0].i1 = T[(O + aq) | 0].i1 | 0
                                T[(O + am) | 0].i2 = T[(O + aq) | 0].i2 | 0
                                T[(O + am) | 0].a3 = T[(O + aq) | 0].a3
                                T[(((O + am) | 0) + 1) | 0].i0 = T[(((O + aq) | 0) + 1) | 0].i0 | 0
                                T[(((O + am) | 0) + 1) | 0].i1 = T[(((O + aq) | 0) + 1) | 0].i1 | 0
                                T[(((O + am) | 0) + 1) | 0].i2 = T[(((O + aq) | 0) + 1) | 0].i2 | 0
                                T[(((O + am) | 0) + 1) | 0].a3 = T[(((O + aq) | 0) + 1) | 0].a3
                                am = (am + 2) | 0
                                if (T !== T || ((O + (ah >>> 4)) | 0) !== ((O + am) | 0)) {
                                    aq = (aq + 2) | 0
                                    continue
                                }
                                break
                            }
                        U = v0[v1].a14
                    }
                    V = v0[v1].a15
                    f.a1 = T
                    f.a1o = (O + (ah >> 4)) | 0
                    j.len
                    ah = j.bufOffset
                    T = {
                        type: h,
                        tid: a,
                    }
                    be(eE, U, V, S >>> 17, HEAP8, ah, T)
                    j = eE.a0
                    h = eE.a0o | 0
                    if (j !== nullArray || h !== 0) {
                        if (j[h].a0 !== null) {
                            v0[v1].i12 = 0
                            c = j[h].a[j[h].o - -1]
                            c.a0 = v0
                            c.a0o = v1
                            break a
                        }
                        a = 10
                        continue b
                    }
                    h = 0
                    j = nullArray
                    a = 10
                    continue b
                case 10:
                    if (j !== nullArray || h !== 0) j[h].a1(j, h)
                    E = v0[v1].i22 | 0
                    c = v0[v1].a21
                    G = v0[v1].a20
                    u = v0[v1].a19
                    x = v0[v1].a18
                    C = v0[v1].a17
                    A = v0[v1].a16
                    a = 9
                    continue b
                default:
                    P[R].a1(P, R)
                    a = 0
                    continue b
            }
            v0[v1].a27 = U
            v0[v1].a26 = f
            a = v0[v1].i23 | 0
            if ((a | 0) === 0) {
                E = v0[v1].i22 | 0
                c = v0[v1].a21
                u = v0[v1].a19
                x = v0[v1].a18
                C = v0[v1].a17
                G = U
                A = f
                a = 9
                continue b
            }
            p = v0[v1].a17
            f = v0[v1].a14
            U = "/".concat(((a >>> 17) - 1) | 0)
            v0[v1].a28 = U
            f = f.a6
            a4(bR, f, U)
            p = bR.a0
            a = bR.a0o | 0
            if (p === nullArray && a === 0) {
                p = null
                a = 1
                continue b
            }
            if (p[a].a0 === null) {
                p = p[a]
                a = 1
                continue b
            }
            break
        }
        v0[v1].i12 = 3
        c = p[a].a[p[a].o - -1]
        c.a0 = v0
        c.a0o = v1
    }
}
function j1(f, g) {
    f = f[g]
    var h = null,
        a = null,
        c = 0
    switch (f.i12 & 15) {
        case 0:
            a = f.a4.a0
            c = f.a4.a0o | 0
            if (a === nullArray && c === 0) break
            a[c].a1(a, c)
            break
        case 1:
            f.a25 = f.a20
            a = f.a5.a0
            c = f.a5.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a24
            break
        case 2:
            a = f.a6.a0
            c = f.a6.a0o | 0
            if (a === nullArray && c === 0) break
            a[c].a1(a, c)
            break
        case 3:
            f.a29 = f.a21
            a = f.a7.a0
            c = f.a7.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a28
            break
        case 4:
            a = f.a8.a0
            c = f.a8.a0o | 0
            if (a === nullArray && c === 0) break
            a[c].a1(a, c)
            break
        case 5:
            f.i32 = f.i22 | 0
            a = f.a9.a0
            c = f.a9.a0o | 0
            if (a !== nullArray || c !== 0) a[c].a1(a, c)
            a = f.a31
            h = f.a30
            break
        case 6:
            a = f.a10.a0
            c = f.a10.a0o | 0
            if (a === nullArray && c === 0) break
            a[c].a1(a, c)
            break
        case 7:
            a = f.a11.a0
            c = f.a11.a0o | 0
            if (a === nullArray && c === 0) break
            a[c].a1(a, c)
            break
        case 8:
            break
        default:
    }
}
function j0(u, r, p, n) {
    var l = null,
        h = null,
        c = null,
        j = null,
        a = 0,
        f = null
    h = v3({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
        a3: null,
        a4: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i5: 0,
    }).a
    c = h[0]
    c.a0 = jX
    c.a1 = jW
    l = c.a2
    l.a0 = nullArray
    l.a0o = 0
    j = l.a
    a = l.o - 1
    u.a0 = j
    u.a0o = a
    a = r.i41 | 0
    j = c.a4
    hi(j, r, a, {
        type: 81,
        tid: a,
        devId: p,
        len: n,
    })
    f = j.a0
    a = j.a0o | 0
    a: {
        if (f !== nullArray || a !== 0) {
            if (f[a].a0 !== null) {
                c.i5 = 0
                c = f[a].a[f[a].o - -1]
                c.a0 = h
                c.a0o = 0
                break a
            }
        }
        f = j.a0
        a = j.a0o | 0
        if (f !== nullArray || a !== 0) f[a].a1(f, a)
        c.a3 = l
        c.a0 = null
        h = l.a0
        a = l.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : $)[h !== nullArray || a !== 0 ? a : aa].a0(h !== nullArray || a !== 0 ? h : $, h !== nullArray || a !== 0 ? a : aa)
    }
}
function jX(h, i) {
    h = h[i]
    var f = null,
        c = null,
        a = 0
    c = h.a4.a0
    a = h.a4.a0o | 0
    c = h.a4.a0
    a = h.a4.a0o | 0
    if (c !== nullArray || a !== 0) c[a].a1(c, a)
    c = h.a2
    h.a3 = c
    h.a0 = null
    f = c.a0
    a = c.a0o | 0
    ;(f !== nullArray || a !== 0 ? f : $)[f !== nullArray || a !== 0 ? a : aa].a0(f !== nullArray || a !== 0 ? f : $, f !== nullArray || a !== 0 ? a : aa)
}
function jW(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a4.a0
        a = f.a4.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function jV(x, u, r, p) {
    var j = null,
        n = null,
        h = null,
        f = null,
        l = null,
        a = 0,
        c = null
    h = v2({
        a0: null,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
            a1: (h = {
                i0: 0,
                i1: 0,
            }),
        },
        a3: (h = {
            a0: nullArray,
            a0o: 0,
        }),
        i4: 0,
        a5: null,
    }).a
    f = h[0]
    f.a0 = jS
    f.a1 = jR
    j = f.a2
    j.a0 = nullArray
    j.a0o = 0
    n = j.a1
    n.i0 = 0
    l = j.a
    a = j.o - 1
    x.a0 = l
    x.a0o = a
    a = u.i41 | 0
    l = f.a3
    b2(
        l,
        u,
        a,
        {
            type: 96,
            tid: a,
            devId: r,
            path: p,
        },
        0
    )
    c = l.a0
    a = l.a0o | 0
    a: {
        if (c !== nullArray || a !== 0) {
            if (c[a].a0 !== null) {
                f.i4 = 0
                f = c[a].a[c[a].o - -1]
                f.a0 = h
                f.a0o = 0
                break a
            }
        }
        c = c[a].a[c[a].o - -1]
        a = c.a1.i1 | 0
        n.i0 = 256
        n.i1 = a
        c = l.a0
        a = l.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
        f.a5 = j
        f.a0 = null
        h = j.a0
        a = j.a0o | 0
        ;(h !== nullArray || a !== 0 ? h : $)[h !== nullArray || a !== 0 ? a : aa].a0(h !== nullArray || a !== 0 ? h : $, h !== nullArray || a !== 0 ? a : aa)
    }
}
function jS(h, i) {
    h = h[i]
    var f = null,
        c = 0,
        a = null
    f = h.a3.a0
    c = h.a3.a0o | 0
    f = f[c].a[f[c].o - -1]
    c = f.a1.i1 | 0
    f = h.a2
    a = f.a1
    a.i0 = 256
    a.i1 = c
    a = h.a3.a0
    c = h.a3.a0o | 0
    if (a !== nullArray || c !== 0) a[c].a1(a, c)
    h.a5 = f
    h.a0 = null
    a = f.a0
    c = f.a0o | 0
    ;(a !== nullArray || c !== 0 ? a : $)[a !== nullArray || c !== 0 ? c : aa].a0(a !== nullArray || c !== 0 ? a : $, a !== nullArray || c !== 0 ? c : aa)
}
function jR(f, g) {
    f = f[g]
    var c = null,
        a = 0
    if (f.a0 !== null) {
        c = f.a3.a0
        a = f.a3.a0o | 0
        if (c !== nullArray || a !== 0) c[a].a1(c, a)
    }
}
function jQ(C, A) {
    var f = null,
        c = 0,
        x = null,
        r = 0,
        u = 0,
        l = 0,
        n = 0,
        h = 0,
        a = 0,
        j = 0,
        p = 0
    f = C.a0
    c = C.a0o | 0
    x = C.a1
    l = C.a1o | 0
    if (f !== x || ((c + A) | 0) !== l) {
        r = (A << 1) >> 1
        l = intMultiply_1(l, 2)
        n = (l - intMultiply_1((c + A) | 0, 2)) | 0
        h = (r + (n >> 1)) | 0
        l = (l - intMultiply_1((c + h) | 0, 2)) | 0
        if (l >>> 0 >= 2) {
            a = l >>> 1
            j = (r + a) | 0
            if ((n | 0) < 0) {
                a = (h + a) | 0
                p = (l - 2) | 0
                h = ((p >>> 1) + 1) & 3
                if ((h | 0) !== 0) {
                    n = 0
                    while (1) {
                        a = (a - 1) | 0
                        j = (j - 1) | 0
                        f[(c + j) | 0] = f[(c + a) | 0] | 0
                        n = (n + 1) | 0
                        if ((n | 0) !== (h | 0)) continue
                        break
                    }
                }
                if (p >>> 0 >= 6)
                    while (1) {
                        f[(((c + j) | 0) + -1) | 0] = f[(((c + a) | 0) + -1) | 0] | 0
                        f[(((c + j) | 0) + -2) | 0] = f[(((c + a) | 0) + -2) | 0] | 0
                        f[(((c + j) | 0) + -3) | 0] = f[(((c + a) | 0) + -3) | 0] | 0
                        a = (a - 4) | 0
                        j = (j - 4) | 0
                        f[(c + j) | 0] = f[(c + a) | 0] | 0
                        if (f !== f || ((c + r) | 0) !== ((c + j) | 0)) continue
                        break
                    }
            } else {
                u = (l - 2) | 0
                n = ((u >>> 1) + 1) & 7
                if ((n | 0) !== 0) {
                    a = r
                    p = 0
                    while (1) {
                        f[(c + a) | 0] = f[(c + h) | 0] | 0
                        p = (p + 1) | 0
                        a = (a + 1) | 0
                        h = (h + 1) | 0
                        if ((p | 0) !== (n | 0)) continue
                        break
                    }
                } else {
                    a = r
                }
                if (u >>> 0 >= 14)
                    while (1) {
                        f[(c + a) | 0] = f[(c + h) | 0] | 0
                        f[(((c + a) | 0) + 1) | 0] = f[(((c + h) | 0) + 1) | 0] | 0
                        f[(((c + a) | 0) + 2) | 0] = f[(((c + h) | 0) + 2) | 0] | 0
                        f[(((c + a) | 0) + 3) | 0] = f[(((c + h) | 0) + 3) | 0] | 0
                        f[(((c + a) | 0) + 4) | 0] = f[(((c + h) | 0) + 4) | 0] | 0
                        f[(((c + a) | 0) + 5) | 0] = f[(((c + h) | 0) + 5) | 0] | 0
                        f[(((c + a) | 0) + 6) | 0] = f[(((c + h) | 0) + 6) | 0] | 0
                        f[(((c + a) | 0) + 7) | 0] = f[(((c + h) | 0) + 7) | 0] | 0
                        a = (a + 8) | 0
                        if (f !== f || ((c + j) | 0) !== ((c + a) | 0)) {
                            h = (h + 8) | 0
                            continue
                        }
                        break
                    }
            }
        }
        C.a1 = f
        C.a1o = (((c + r) | 0) + (l >> 1)) | 0
    }
    C.i4 = 1
}
function jP(r) {
    var j = null,
        n = 0,
        p = 0,
        h = null,
        f = 0,
        a = null,
        c = 0,
        l = 0
    j = {
        i0: 0,
        i1: 0,
        a2: nullArray,
    }
    j.i0 = 0
    j.i1 = 0
    j.a2 = nullArray
    h = r.a1
    f = r.a1o | 0
    a = r.a0
    c = r.a0o | 0
    jk(j, (intMultiply_1(f, 2) - intMultiply_1(c, 2)) >> 1)
    a = r.a1
    c = r.a1o | 0
    h = r.a0
    f = r.a0o | 0
    if ((intMultiply_1(c, 2) | 0) !== (intMultiply_1(f, 2) | 0)) {
        c = 0
        while (1) {
            bc(j, (h[(f + c) | 0] & 65535) >>> 8)
            a = r.a1
            l = r.a1o | 0
            h = r.a0
            f = r.a0o | 0
            c = (c + 1) | 0
            if (c >>> 0 < ((intMultiply_1(l, 2) - intMultiply_1(f, 2)) >> 1) >>> 0) continue
            break
        }
    }
    h = j.a2
    f = j.i1 | 0
    a = String()
    if ((f | 0) === 0) return a
    c = 0
    while (1) {
        n = h[c] | 0
        if ((n & 255) !== 0) {
            p = n & 255
            if (n << 24 > -16777216) {
                l = p
            } else if ((n & 255) < 192) {
                l = ((p & 63) + (l << 6)) | 0
            } else if ((n & 255) < 224) {
                l = p & 31
            } else if ((n & 255) < 240) {
                l = p & 15
            } else {
                l = p & 7
            }
            c = (c + 1) | 0
            a: {
                if ((c | 0) !== (f | 0)) {
                    if ((h[c] & 192) === 128) break a
                }
                if (l >>> 0 < 65536) a = a.concat(String.fromCharCode(l))
                else {
                    a = a.concat(String.fromCharCode(((l - 65536) >>> 10) | 55296))
                    a = a.concat(String.fromCharCode((l & 1023) | 56320))
                }
            }
            if ((c | 0) !== (f | 0)) continue
            return a
        }
        break
    }
    return a
}
function jO(A, x, u, r) {
    var f = null,
        h = null,
        a = 0,
        l = null,
        c = 0,
        j = 0,
        n = null,
        p = null
    h = A.a1
    a = A.a1o | 0
    l = A.a0
    c = A.a0o | 0
    j = (intMultiply_1(a, 2) - intMultiply_1(c, 2)) >> 1
    if (j >>> 0 > x >>> 0) l[(c + x) | 0] = (((u & 255) << 8) + (r & 255)) | 0
    else {
        n = A.a2
        f = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (f = {
                    a0: null,
                }),
            },
        }
        if (j >>> 0 < x >>> 0)
            while (1) {
                p = n.a0
                j = n.a0o | 0
                if (a < j) {
                    h[a] = 8193
                    A.a1 = h
                    A.a1o = (a + 1) | 0
                    h = h
                    a = (a + 1) | 0
                } else {
                    c = intMultiply_1(c, 2)
                    a = (intMultiply_1(a, 2) - c) | 0
                    if ((a | 0) < -2) ab()
                    c = (intMultiply_1(j, 2) - c) | 0
                    a >>= 1
                    j = (a + 1) | 0
                    j = c >>> 0 < 2147483646 ? (c >>> 0 > j >>> 0 ? c | 0 : j | 0) | 0 : 2147483647 | 0
                    h = f.a3
                    h.a1.a0 = n
                    if ((j | 0) !== 0) {
                        if ((j | 0) < 0) bj()
                        l = new Uint16Array(((j << 1) / 2) | 0)
                        f.a0 = l[0]
                    } else {
                        f.a0 = null
                        l = nullArray
                    }
                    f.a1 = l
                    f.a1o = (0 + a) | 0
                    h.a0 = l
                    h.a0o = (0 + j) | 0
                    l[a] = 8193
                    f.a2 = l
                    f.a2o = (((0 + a) | 0) + 1) | 0
                    eS(A, f)
                    h = A.a1
                    a = A.a1o | 0
                }
                l = A.a0
                c = A.a0o | 0
                if (((intMultiply_1(a, 2) - intMultiply_1(c, 2)) >> 1) >>> 0 < x >>> 0) continue
                break
            }
        p = n.a0
        j = n.a0o | 0
        if (a < j) {
            h[a] = (((u & 255) << 8) + (r & 255)) | 0
            A.a1 = h
            A.a1o = (a + 1) | 0
        } else {
            c = intMultiply_1(c, 2)
            a = (intMultiply_1(a, 2) - c) | 0
            if ((a | 0) < -2) ab()
            j = (intMultiply_1(j, 2) - c) | 0
            a >>= 1
            c = (a + 1) | 0
            c = j >>> 0 < 2147483646 ? (j >>> 0 > c >>> 0 ? j | 0 : c | 0) | 0 : 2147483647 | 0
            h = f.a3
            h.a1.a0 = n
            if ((c | 0) !== 0) {
                if ((c | 0) < 0) bj()
                n = new Uint16Array(((c << 1) / 2) | 0)
                f.a0 = n[0]
            } else {
                f.a0 = null
                n = nullArray
            }
            f.a1 = n
            f.a1o = (0 + a) | 0
            h.a0 = n
            h.a0o = (0 + c) | 0
            n[a] = (((u & 255) << 8) + (r & 255)) | 0
            f.a2 = n
            f.a2o = (((0 + a) | 0) + 1) | 0
            eS(A, f)
        }
    }
    A.i4 = 1
}
function eS(C, A) {
    var n = 0,
        r = 0,
        l = null,
        h = null,
        c = 0,
        j = 0,
        a = 0,
        f = 0,
        u = 0,
        p = 0,
        x = 0
    l = C.a0
    n = C.a0o | 0
    h = C.a1
    c = C.a1o | 0
    c = (intMultiply_1(c, 2) - intMultiply_1(n, 2)) | 0
    h = A.a1
    j = A.a1o | 0
    r = -(c >> 1) | 0
    if (c >>> 0 >= 2) {
        a = c >>> 1
        f = (r + a) | 0
        if (n < ((j + r) | 0)) {
            u = (c - 2) | 0
            c = ((u >>> 1) + 1) & 3
            if ((c | 0) !== 0) {
                p = 0
                while (1) {
                    a = (a - 1) | 0
                    f = (f - 1) | 0
                    h[(j + f) | 0] = l[(n + a) | 0] | 0
                    p = (p + 1) | 0
                    if ((p | 0) !== (c | 0)) continue
                    break
                }
            }
            if (u >>> 0 >= 6)
                while (1) {
                    h[(((j + f) | 0) + -1) | 0] = l[(((n + a) | 0) + -1) | 0] | 0
                    h[(((j + f) | 0) + -2) | 0] = l[(((n + a) | 0) + -2) | 0] | 0
                    h[(((j + f) | 0) + -3) | 0] = l[(((n + a) | 0) + -3) | 0] | 0
                    a = (a - 4) | 0
                    f = (f - 4) | 0
                    h[(j + f) | 0] = l[(n + a) | 0] | 0
                    if (h !== h || ((j + r) | 0) !== ((j + f) | 0)) continue
                    break
                }
        } else {
            u = (c - 2) | 0
            p = ((u >>> 1) + 1) & 7
            if ((p | 0) !== 0) {
                a = r
                x = 0
                c = 0
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0] | 0
                    x = (x + 1) | 0
                    a = (a + 1) | 0
                    c = (c + 1) | 0
                    if ((x | 0) !== (p | 0)) continue
                    break
                }
            } else {
                a = r
                c = 0
            }
            if (u >>> 0 >= 14)
                while (1) {
                    h[(j + a) | 0] = l[(n + c) | 0] | 0
                    h[(((j + a) | 0) + 1) | 0] = l[(((n + c) | 0) + 1) | 0] | 0
                    h[(((j + a) | 0) + 2) | 0] = l[(((n + c) | 0) + 2) | 0] | 0
                    h[(((j + a) | 0) + 3) | 0] = l[(((n + c) | 0) + 3) | 0] | 0
                    h[(((j + a) | 0) + 4) | 0] = l[(((n + c) | 0) + 4) | 0] | 0
                    h[(((j + a) | 0) + 5) | 0] = l[(((n + c) | 0) + 5) | 0] | 0
                    h[(((j + a) | 0) + 6) | 0] = l[(((n + c) | 0) + 6) | 0] | 0
                    h[(((j + a) | 0) + 7) | 0] = l[(((n + c) | 0) + 7) | 0] | 0
                    a = (a + 8) | 0
                    if (h !== h || ((j + f) | 0) !== ((j + a) | 0)) {
                        c = (c + 8) | 0
                        continue
                    }
                    break
                }
        }
    }
    A.a1 = h
    A.a1o = (j + ((r << 1) >> 1)) | 0
    l = C.a0
    c = C.a0o | 0
    C.a0 = h
    C.a0o = (j + ((r << 1) >> 1)) | 0
    A.a1 = l
    A.a1o = c
    l = C.a1
    c = C.a1o | 0
    h = A.a2
    j = A.a2o | 0
    C.a1 = h
    C.a1o = j
    A.a2 = l
    A.a2o = c
    l = C.a2.a0
    c = C.a2.a0o | 0
    h = A.a3.a0
    j = A.a3.a0o | 0
    C.a2.a0 = h
    C.a2.a0o = j
    A.a3.a0 = l
    A.a3.a0o = c
    l = A.a1
    c = A.a1o | 0
    A.a0 = l[c]
}
function jN(A, x) {
    var n = null,
        f = null,
        c = 0,
        l = 0,
        u = null,
        r = null,
        p = 0,
        j = null,
        h = 0,
        a = 0
    n = A.a9
    j = n.a1
    h = n.a1o | 0
    f = n.a0
    c = n.a0o | 0
    a = (((intMultiply_1(h, 17) - intMultiply_1(c, 17)) | 0) / 17) | 0
    if (a >>> 0 > x >>> 0) return f[(c + x) | 0]
    l = (x + 1) | 0
    if (l >>> 0 > a >>> 0) {
        dl(n, (l - a) | 0)
        j = n.a0
        h = n.a0o | 0
        return j[(h + x) | 0]
    }
    if (l >>> 0 < a >>> 0) {
        if (j !== f || h !== ((c + l) | 0)) {
            a = 0
            while (1) {
                a = (a - 1) | 0
                u = j[(h + a) | 0]
                r = u.a0
                p = u.a0o | 0
                if (r !== nullArray || p !== 0) {
                    u.a1 = r
                    u.a1o = p
                }
                if (j !== f || ((h + a) | 0) !== ((c + l) | 0)) continue
                break
            }
        }
        n.a1 = f
        n.a1o = (c + l) | 0
        return f[(c + x) | 0]
    }
    return f[(c + x) | 0]
}
function dl(r, p) {
    var x = null,
        u = null,
        f = null,
        j = null,
        a = 0,
        c = null,
        h = 0,
        l = 0,
        n = 0
    f = r.a2
    j = f.a0
    a = f.a0o | 0
    c = r.a1
    h = r.a1o | 0
    l = intMultiply_1(h, 17)
    n = intMultiply_1(a, 17)
    if ((((n - l) | 0) / 17) >>> 0 < p >>> 0) {
        j = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (j = {
                    a0: null,
                }),
            },
        }
        c = r.a0
        a = r.a0o | 0
        a = intMultiply_1(a, 17)
        l = (((l - a) | 0) / 17) | 0
        h = (l + p) | 0
        if (h >>> 0 > 252645135) ab()
        a = (((n - a) | 0) / 17) | 0
        if (a >>> 0 < 126322567) {
            a <<= 1
            a = a >>> 0 > h >>> 0 ? a | 0 : h | 0
        } else {
            a = 252645135
        }
        c = j.a3
        c.a1.a0 = f
        if ((a | 0) !== 0) f = Cj(((intMultiply_1(a, 17) | 0) / 17) | 0)
        else {
            f = nullArray
        }
        j.a0 = f[0]
        j.a1 = f
        j.a1o = (0 + l) | 0
        c.a0 = f
        c.a0o = (0 + a) | 0
        if (((p & 1) | 0) !== 0) {
            c = f[l]
            c.a0 = nullArray
            c.a0o = 0
            c.a1 = nullArray
            c.a1o = 0
            c.a2.a0 = nullArray
            c.a2.a0o = 0
            f[l].a3 = null
            f[l].i4 = 0
            a = 1
        } else {
            a = 0
        }
        if ((p | 0) !== 1)
            while (1) {
                c = f[(((0 + l) | 0) + a) | 0]
                c.a0 = nullArray
                c.a0o = 0
                c.a1 = nullArray
                c.a1o = 0
                c.a2.a0 = nullArray
                c.a2.a0o = 0
                f[(((0 + l) | 0) + a) | 0].a3 = null
                f[(((0 + l) | 0) + a) | 0].i4 = 0
                c = f[(((((0 + l) | 0) + a) | 0) + 1) | 0]
                c.a0 = nullArray
                c.a0o = 0
                c.a1 = nullArray
                c.a1o = 0
                c.a2.a0 = nullArray
                c.a2.a0o = 0
                f[(((((0 + l) | 0) + a) | 0) + 1) | 0].a3 = null
                f[(((((0 + l) | 0) + a) | 0) + 1) | 0].i4 = 0
                a = (a + 2) | 0
                if (f !== f || ((((0 + l) | 0) + a) | 0) !== ((((0 + l) | 0) + p) | 0)) continue
                break
            }
        j.a2 = f
        j.a2o = (((0 + l) | 0) + p) | 0
        jK(r, j)
        c = j.a1
        a = j.a1o | 0
        f = j.a2
        h = j.a2o | 0
        if (f !== c || h !== a) {
            l = 0
            while (1) {
                l = (l - 1) | 0
                x = f[(h + l) | 0]
                u = x.a0
                n = x.a0o | 0
                if (u !== nullArray || n !== 0) {
                    x.a1 = u
                    x.a1o = n
                }
                if (f !== c || ((h + l) | 0) !== a) continue
                break
            }
        }
    } else {
        if ((p | 0) !== 0) {
            if (((p & 1) | 0) !== 0) {
                c[h].a0 = nullArray
                c[h].a0o = 0
                c[h].a1 = nullArray
                c[h].a1o = 0
                c[h].a2.a0 = nullArray
                c[h].a2.a0o = 0
                c[h].a3 = null
                c[h].i4 = 0
                a = 1
            } else {
                a = 0
            }
            if ((p | 0) === 1) {
                a = p
            } else {
                while (1) {
                    f = c[(h + a) | 0]
                    f.a0 = nullArray
                    f.a0o = 0
                    f.a1 = nullArray
                    f.a1o = 0
                    f.a2.a0 = nullArray
                    f.a2.a0o = 0
                    c[(h + a) | 0].a3 = null
                    c[(h + a) | 0].i4 = 0
                    f = c[(((h + a) | 0) + 1) | 0]
                    f.a0 = nullArray
                    f.a0o = 0
                    f.a1 = nullArray
                    f.a1o = 0
                    f.a2.a0 = nullArray
                    f.a2.a0o = 0
                    c[(((h + a) | 0) + 1) | 0].a3 = null
                    c[(((h + a) | 0) + 1) | 0].i4 = 0
                    a = (a + 2) | 0
                    if (c !== c || ((h + a) | 0) !== ((h + p) | 0)) continue
                    break
                }
                a = p
            }
        } else {
            a = 0
        }
        r.a1 = c
        r.a1o = (h + a) | 0
    }
}
function jK(H, G) {
    var E = 0,
        A = 0,
        x = null,
        u = 0,
        C = 0,
        r = null,
        p = null,
        c = null,
        f = null,
        j = 0,
        a = 0,
        h = 0,
        n = null,
        l = 0
    c = H.a0
    E = H.a0o | 0
    f = H.a1
    A = H.a1o | 0
    x = G.a1
    u = G.a1o | 0
    if (f === c && A === E) {
        j = 0
    } else {
        h = 0
        a = 0
        while (1) {
            j = (a - 1) | 0
            C = (h - 1) | 0
            r = x[(u + j) | 0]
            p = f[(A + C) | 0]
            r.a0 = nullArray
            r.a0o = 0
            r.a1 = nullArray
            r.a1o = 0
            r.a2.a0 = nullArray
            r.a2.a0o = 0
            n = p.a0
            l = p.a0o | 0
            r.a0 = n
            r.a0o = l
            n = p.a1
            l = p.a1o | 0
            r.a1 = n
            r.a1o = l
            n = p.a2.a0
            l = p.a2.a0o | 0
            r.a2.a0 = n
            r.a2.a0o = l
            p.a2.a0 = nullArray
            p.a2.a0o = 0
            p.a1 = nullArray
            p.a1o = 0
            p.a0 = nullArray
            p.a0o = 0
            x[(((u + a) | 0) + -1) | 0].a3 = f[(((A + h) | 0) + -1) | 0].a3
            x[(((u + a) | 0) + -1) | 0].i4 = f[(((A + h) | 0) + -1) | 0].i4 | 0
            if (f !== c || ((A + C) | 0) !== E) {
                a = j
                h = C
                continue
            }
            break
        }
    }
    G.a1 = x
    G.a1o = (u + j) | 0
    c = H.a0
    a = H.a0o | 0
    H.a0 = x
    H.a0o = (u + j) | 0
    G.a1 = c
    G.a1o = a
    c = H.a1
    a = H.a1o | 0
    f = G.a2
    h = G.a2o | 0
    H.a1 = f
    H.a1o = h
    G.a2 = c
    G.a2o = a
    c = H.a2.a0
    a = H.a2.a0o | 0
    f = G.a3.a0
    h = G.a3.a0o | 0
    H.a2.a0 = f
    H.a2.a0o = h
    G.a3.a0 = c
    G.a3.a0o = a
    c = G.a1
    a = G.a1o | 0
    G.a0 = c[a]
}
function eR(E) {
    var C = null,
        G = null,
        h = 0,
        A = null,
        r = null,
        c = null,
        l = null,
        u = 0,
        f = 0,
        j = 0,
        a = 0,
        p = null,
        x = null,
        n = 0
    if (E.a2 === null) {
        h = E.i6 | 0
        A = E.a9
        r = A.a1
        u = A.a1o | 0
        c = A.a0
        f = A.a0o | 0
        a = (((intMultiply_1(u, 17) - intMultiply_1(f, 17)) | 0) / 17) | 0
        if (a >>> 0 <= h >>> 0) {
            n = (h + 1) | 0
            if (n >>> 0 > a >>> 0) {
                dl(A, (n - a) | 0)
                c = A.a0
                f = A.a0o | 0
            } else if (n >>> 0 < a >>> 0) {
                if (r !== c || u !== ((f + n) | 0)) {
                    a = 0
                    while (1) {
                        a = (a - 1) | 0
                        l = r[(u + a) | 0]
                        p = l.a0
                        j = l.a0o | 0
                        if (p !== nullArray || j !== 0) {
                            l.a1 = p
                            l.a1o = j
                        }
                        if (r !== c || ((u + a) | 0) !== ((f + n) | 0)) continue
                        break
                    }
                }
                A.a1 = c
                A.a1o = (f + n) | 0
            }
        }
        console.log(jP(c[(f + h) | 0]))
    }
    E.i5 = 0
    h = ((E.i6 | 0) + 1) | 0
    E.i6 = h
    if (h >>> 0 > 24) {
        A = E.a9
        while (1) {
            r = A.a0
            h = A.a0o | 0
            c = E.a2
            if (c !== null) {
                l = r[h].a3
                if (l !== null) {
                    c.removeChild(l)
                    c = A.a0
                    u = A.a0o | 0
                } else {
                    c = r
                    u = h
                }
            } else {
                c = r
                u = h
            }
            l = A.a1
            f = A.a1o | 0
            if (c === l && ((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + 1) | 0) === f) {
                l = c
                j = (((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + 1) | 0
                a = 0
            } else {
                j = 1
                a = 0
                while (1) {
                    p = c[(((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + a) | 0]
                    C = c[(((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + j) | 0]
                    x = p.a0
                    n = p.a0o | 0
                    G = p.a2
                    if (x !== nullArray || n !== 0) {
                        G.a0 = nullArray
                        G.a0o = 0
                    }
                    x = C.a0
                    n = C.a0o | 0
                    p.a0 = x
                    p.a0o = n
                    x = C.a1
                    n = C.a1o | 0
                    p.a1 = x
                    p.a1o = n
                    p = C.a2.a0
                    n = C.a2.a0o | 0
                    G.a0 = p
                    G.a0o = n
                    C.a2.a0 = nullArray
                    C.a2.a0o = 0
                    C.a1 = nullArray
                    C.a1o = 0
                    C.a0 = nullArray
                    C.a0o = 0
                    c[(((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + a) | 0].a3 = c[(((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + j) | 0].a3
                    c[(((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + a) | 0].i4 = c[(((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + j) | 0].i4 | 0
                    j = (j + 1) | 0
                    a = (a + 1) | 0
                    if (c !== l || ((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + j) | 0) !== f) continue
                    break
                }
                l = A.a1
                j = A.a1o | 0
            }
            if (l !== c || j !== ((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + ((((intMultiply_1((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + a) | 0, 17) - intMultiply_1((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0, 17)) | 0) / 17) | 0)) | 0))
                while (1) {
                    p = l[(j + -1) | 0]
                    x = p.a0
                    f = p.a0o | 0
                    if (x !== nullArray || f !== 0) {
                        p.a1 = x
                        p.a1o = f
                    }
                    if (l !== c || ((j + -1) | 0) !== ((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + ((((intMultiply_1((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + a) | 0, 17) - intMultiply_1((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0, 17)) | 0) / 17) | 0)) | 0)) {
                        l = l
                        j = (j + -1) | 0
                        continue
                    }
                    break
                }
            A.a1 = c
            A.a1o = (((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + ((((intMultiply_1((((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0) + a) | 0, 17) - intMultiply_1((u + ((((intMultiply_1(h, 17) - intMultiply_1(u, 17)) | 0) / 17) | 0)) | 0, 17)) | 0) / 17) | 0)) | 0
            h = ((E.i6 | 0) - 1) | 0
            E.i6 = h
            if (h >>> 0 > 24) continue
            break
        }
    }
}
function eQ(l, j, h) {
    var c = null,
        a = null,
        f = null
    a = "span"
    c = document.createElement(a)
    a: if ((h & 254) === 2) {
        f = c.style
        if ((h & 255) === 2) {
            a = "yellow"
            f.color = a
        } else {
            a = "green"
            f.color = a
        }
    } else if ((h & 255) === 4) {
        f = c.style
        a = "cyan"
        f.color = a
    } else {
        if ((h & 255) !== 5) break a
        f = c.style
        a = "gray"
        f.color = a
    }
    c.textContent = j
    l.a3.appendChild(c)
}
function jH(r, p, n) {
    var u = 0,
        a = null,
        h = 0,
        f = null,
        c = 0,
        j = null,
        l = 0
    if (r.a3 === null) {
        a = "p"
        r.a3 = document.createElement(a)
        a = r.a3.style
        f = "0"
        a.margin = f
        a = r.a3.style
        f = "1em"
        a.height = f
        a = r.a3
        if (n !== null) p.insertBefore(a, n.nextSibling)
        else p.appendChild(a)
    }
    if ((r.i4 & 255) !== 0) {
        r.i4 = 0
        a = r.a3.firstChild
        if (a !== null)
            while (1) {
                if (a !== null) {
                    r.a3.removeChild(a)
                    a = r.a3.firstChild
                    if (a !== null) continue
                }
                break
            }
        a = r.a0
        h = r.a0o | 0
        f = r.a1
        c = r.a1o | 0
        if (a === f && h === c) return r.a3
        a = String.fromCharCode((a[h] & 65535) >>> 8)
        j = r.a0
        h = r.a0o | 0
        c = j[h] | 0
        f = r.a1
        l = r.a1o | 0
        if ((intMultiply_1(l, 2) - intMultiply_1(h, 2)) >>> 0 > 2) {
            l = 1
            while (1) {
                f = String.fromCharCode((j[(h + l) | 0] & 65535) >>> 8)
                if ((c & 255) === (j[(h + l) | 0] & 255)) a = a.concat(f)
                else {
                    eQ(r, a, c)
                    c = j[(h + l) | 0] | 0
                    a = f
                }
                f = r.a1
                u = r.a1o | 0
                j = r.a0
                h = r.a0o | 0
                l = (l + 1) | 0
                if (l >>> 0 < ((intMultiply_1(u, 2) - intMultiply_1(h, 2)) >> 1) >>> 0) continue
                break
            }
        }
        eQ(r, a, c)
        return r.a3
    }
    return r.a3
}
function jD(C, A) {
    var p = null,
        n = null,
        l = 0,
        j = 0,
        x = null,
        u = null,
        r = 0,
        h = 0,
        f = null,
        c = 0,
        a = 0
    if (((A + 249) & 255) < 2) {
        if ((A & 255) !== 7) C.i5 = ((C.i5 | 0) - 1) | 0
    } else if ((((A ^ 1) + 245) & 255) < 2) {
        if ((A & 255) === 10) eR(C)
        else C.i5 = 0
    } else if ((A & 255) === 27) C.i0 = 1
    else {
        h = C.i6 | 0
        p = C.a9
        n = p.a1
        l = p.a1o | 0
        f = p.a0
        c = p.a0o | 0
        a = (((intMultiply_1(l, 17) - intMultiply_1(c, 17)) | 0) / 17) | 0
        if (a >>> 0 <= h >>> 0) {
            j = (h + 1) | 0
            if (j >>> 0 > a >>> 0) {
                dl(p, (j - a) | 0)
                f = p.a0
                c = p.a0o | 0
            } else if (j >>> 0 < a >>> 0) {
                if (n !== f || l !== ((c + j) | 0)) {
                    a = 0
                    while (1) {
                        a = (a - 1) | 0
                        x = n[(l + a) | 0]
                        u = x.a0
                        r = x.a0o | 0
                        if (u !== nullArray || r !== 0) {
                            x.a1 = u
                            x.a1o = r
                        }
                        if (n !== f || ((l + a) | 0) !== ((c + j) | 0)) continue
                        break
                    }
                }
                p.a1 = f
                p.a1o = (c + j) | 0
            }
        }
        C.i8 = A
        jO(f[(c + h) | 0], C.i5 | 0, A, C.i7 | 0)
        h = ((C.i5 | 0) + 1) | 0
        C.i5 = h
        if (h >>> 0 > 79) eR(C)
    }
}
function jC(c) {
    var a = 0
    a = c.a10[0] | 0
    if (((a & -2) | 0) === 32) {
        if ((a | 0) === 32) c.i7 = 3
        else c.i7 = 2
    } else if (((a ^ 1) - 37) >>> 0 < 2) {
        if ((a | 0) === 36) c.i7 = 4
        else c.i7 = 1
    } else if ((a | 0) === 90) c.i7 = 5
    else bd(et, 0, a)
}
function jB(l, j, h, f) {
    var c = null,
        a = 0
    c = l.a3
    if (c !== null) c(j.subarray(0, +(h >>> 0)), f)
    else if ((h | 0) !== 0) {
        a = 0
        while (1) {
            eN(l, j[(0 + a) | 0] | 0, f)
            a = (a + 1) | 0
            if ((a | 0) !== (h | 0)) continue
            break
        }
    }
}
function eN(u, r, p) {
    var j = 0,
        f = null,
        a = 0,
        n = null,
        l = null,
        c = 0,
        h = 0
    a: if (u.a3 !== null) {
        f = new Uint8Array(1)
        f[0] = r
        u.a3(f, p)
    } else {
        a = u.i0 | 0
        if (a >>> 0 < 2) {
            if ((a | 0) !== 0) {
                if ((r & 255) === 91) u.i0 = 2
                else {
                    bd(ix, 0, r & 255)
                    u.i0 = 0
                }
            } else jD(u, r)
        } else if ((a | 0) === 2) {
            a = r & 255
            if (((r + 208) & 255) < 10) u.a10[0] = (((a - 48) | 0) + (intMultiply_1(u.a10[0] | 0, 10) | 0)) | 0
            else {
                switch (r & 255) {
                    case 71:
                        u.i5 = ((u.a10[0] | 0) - 1) | 0
                        u.a10[0] = 0
                        u.i0 = 0
                        break a
                    case 74:
                        f = jN(u, u.i6 | 0)
                        jQ(f, u.i5 | 0)
                        u.a10[0] = 0
                        u.i0 = 0
                        break a
                    case 109:
                        f = u.a11
                        n = f.a0
                        a = f.a0o | 0
                        l = f.a1
                        c = f.a1o | 0
                        if (n !== l || a !== c) {
                            h = 0
                            while (1) {
                                j = u.a10[0] | 0
                                if (((j & -2) | 0) === 32) {
                                    if ((j | 0) === 32) u.i7 = 3
                                    else u.i7 = 2
                                } else if (((j ^ 1) - 37) >>> 0 < 2) {
                                    if ((j | 0) === 36) u.i7 = 4
                                    else u.i7 = 1
                                } else if ((j | 0) === 90) u.i7 = 5
                                else bd(et, 0, j)
                                h = (h + 1) | 0
                                if (n !== l || ((a + h) | 0) !== c) continue
                                break
                            }
                        }
                        jC(u)
                        u.a10[0] = 0
                        n = f.a0
                        a = f.a0o | 0
                        f.a1 = n
                        f.a1o = a
                        u.i0 = 0
                        break a
                    case 72:
                        f = u.a11
                        n = f.a1
                        a = f.a1o | 0
                        l = f.a0
                        h = f.a0o | 0
                        if (((intMultiply_1(a, 4) - intMultiply_1(h, 4)) | 0) === 4) {
                            a = l[h] | 0
                        } else {
                            a = 1
                        }
                        c = u.a10[0] | 0
                        u.i5 = (c | 0) !== 0 ? (c - 1) | 0 : 0 | 0
                        u.i6 = (a | 0) !== 0 ? (a - 1) | 0 : 0 | 0
                        u.a10[0] = 0
                        f.a1 = l
                        f.a1o = h
                        u.i0 = 0
                        break a
                    case 98:
                        a = u.a10[0] | 0
                        u.a10[0] = 0
                        u.i0 = 0
                        if ((a | 0) === 0) break a
                        c = 0
                        while (1) {
                            eN(u, u.i8 | 0, p)
                            c = (c + 1) | 0
                            if ((c | 0) === (a | 0)) break a
                            continue
                        }
                    case 100:
                        a = u.a10[0] | 0
                        u.i6 = (a | 0) !== 0 ? (a - 1) | 0 : 0 | 0
                        u.a10[0] = 0
                        u.i0 = 0
                        break a
                    case 66:
                        a = u.a10[0] | 0
                        u.i6 = ((u.i6 | 0) + ((a | 0) !== 0 ? a | 0 : 1 | 0)) | 0
                        u.a10[0] = 0
                        u.i0 = 0
                        break a
                    case 59:
                        jA(u.a11, u.a10, 0)
                        u.a10[0] = 0
                        break a
                    default:
                        bd(iw, 0, a)
                        u.i0 = 0
                }
            }
        }
    }
}
function jA(p, n, o) {
    var r = null,
        l = 0,
        h = null,
        a = 0,
        f = null,
        c = null,
        j = 0
    h = p.a1
    a = p.a1o | 0
    f = p.a2
    c = f.a0
    j = f.a0o | 0
    if (h === c && a === j) {
        c = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: nullArray,
                a0o: 0,
                a1: (c = {
                    a0: null,
                }),
            },
        }
        r = p.a0
        j = p.a0o | 0
        a = (intMultiply_1(a, 4) - intMultiply_1(j, 4)) | 0
        l = a >> 2
        j = (l + 1) | 0
        if (j >>> 0 > 1073741823) ab()
        if (a >>> 0 < 2147483644) {
            a >>>= 1
            a = a >>> 0 > j >>> 0 ? a | 0 : j | 0
        } else {
            a = 1073741823
        }
        h = c.a3
        h.a1.a0 = f
        if ((a | 0) !== 0) f = new Int32Array(((a << 2) / 4) | 0)
        else {
            f = nullArray
        }
        c.a0 = f[0]
        c.a1 = f
        c.a1o = (0 + l) | 0
        h.a0 = f
        h.a0o = (0 + a) | 0
        f[l] = n[o] | 0
        c.a2 = f
        c.a2o = (((0 + l) | 0) + 1) | 0
        gy(p, c)
    } else {
        h[a] = n[o] | 0
        p.a1 = h
        p.a1o = (a + 1) | 0
    }
}
function jz(h, f) {
    var c = null,
        a = null
    h.a2 = f
    c = "tabindex"
    a = "0"
    f.setAttribute(c, a)
    c = f.style
    a = "0"
    c.outline = a
    a = "rgb(10,10,10)"
    c.background = a
    a = "rgb(250,250,250)"
    c.color = a
    f.focus()
    c = "keypress"
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = h
    a = DB(jv, a[0])
    f.addEventListener(c, a)
    c = "keydown"
    a = [
        {
            a0: null,
        },
    ]
    a[0].a0 = h
    a = DB(js, a[0])
    f.addEventListener(c, a)
}
function jv(f, c) {
    var l = null,
        j = null,
        h = 0,
        a = null
    a = f.a0
    l = {
        type: 56,
        value: ~~+c.keyCode,
        arg1: 0,
    }
    a = a.a1
    j = HEAP32
    h = a.i7 | 0
    j[(0 + h) | 0] = -2
    a.a6.postMessage(l)
    c.preventDefault()
}
function js(f, c) {
    var l = null,
        j = null,
        h = 0,
        a = null
    a = f.a0
    if ((~~+c.keyCode | 0) === 8) {
        l = {
            type: 56,
            value: 8,
            arg1: 0,
        }
        a = a.a1
        j = HEAP32
        h = a.i7 | 0
        j[(0 + h) | 0] = -2
        a.a6.postMessage(l)
        c.preventDefault()
    }
}
function jq(l) {
    var j = null,
        p = null,
        n = 0,
        h = null,
        f = 0,
        c = null,
        a = 0
    if (l.a2 !== null) {
        j = l.a9
        h = j.a1
        f = j.a1o | 0
        c = j.a0
        a = j.a0o | 0
        if ((intMultiply_1(f, 17) | 0) !== (intMultiply_1(a, 17) | 0)) {
            h = null
            f = 0
            while (1) {
                h = jH(c[(a + f) | 0], l.a2, h)
                p = j.a1
                n = j.a1o | 0
                c = j.a0
                a = j.a0o | 0
                f = (f + 1) | 0
                if (f >>> 0 < (((intMultiply_1(n, 17) - intMultiply_1(a, 17)) | 0) / 17) >>> 0) continue
                break
            }
        }
    }
}
function jp(f, g, c) {
    var a = 0
    a = c & 15
    f[(g + 5) | 0] = ((a >>> 0 < 10 ? 48 | 0 : 87 | 0) + a) | 0
    a = (c >>> 4) & 15
    f[(g + 4) | 0] = ((a >>> 0 < 10 ? 48 | 0 : 87 | 0) + a) | 0
    a = (c >>> 8) & 15
    f[(g + 3) | 0] = ((a >>> 0 < 10 ? 48 | 0 : 87 | 0) + a) | 0
    a = (c >>> 12) & 15
    f[(g + 2) | 0] = ((a >>> 0 < 10 ? 48 | 0 : 87 | 0) + a) | 0
    a = (c >>> 16) & 15
    f[(g + 1) | 0] = ((a >>> 0 < 10 ? 48 | 0 : 87 | 0) + a) | 0
    a = (c >>> 20) & 15
    f[g] = ((a >>> 0 < 10 ? 48 | 0 : 87 | 0) + a) | 0
}
function jn(l, j, k, h) {
    var f = 0,
        a = null,
        c = null
    l.a0 = j
    l.a0o = k
    l.a1 = null
    l.a2 = nullArray
    l.a2o = 0
    l.a3 = null
    l.a4 = null
    l.i5 = 0
    l.i6 = 0
    l.i7 = 0
    l.a8 = h
    a = "canvas"
    l.a4 = document.createElement(a)
    l.a4.width = 800
    l.a4.height = 600
    a = document.body
    a.appendChild(l.a4)
    a = l.a4
    c = "2d"
    l.a3 = a.getContext(c)
    l.i6 = ~~+l.a4.width
    f = ~~+l.a4.height
    l.i7 = f
    a = l.a3.getImageData(0, 0, +(l.i6 | 0), +(f | 0))
    l.a1 = a
    a = a.data.buffer
    c = new Int32Array(a)
    l.a2 = c
    l.a2o = 0
    a = dS
    l.i5 = ~~+requestAnimationFrame(a)
}
function dS() {
    n9(bA)
}
function n9(am) {
    var T = 0,
        aq = 0,
        H = 0,
        r = 0,
        P = 0,
        O = 0,
        S = 0,
        U = 0,
        V = 0,
        ah = 0,
        R = null,
        p = null,
        c = 0,
        l = null,
        f = 0,
        K = 0,
        j = 0,
        a = 0,
        n = 0,
        G = 0,
        h = 0,
        L = 0,
        E = 0,
        C = 0,
        A = 0,
        M = 0,
        x = 0,
        u = 0
    p = am.a8
    c = p.d.getUint8(1051 + p.o) | 0
    l = am.a0
    T = am.a0o | 0
    aq = p.d.getUint16(1046 + p.o, true) | 0
    f = am.i6 | 0
    H = p.d.getUint8(1050 + p.o) | 0
    r = H & 255
    P = intMultiply_1(f, r) | 0
    O = c & 255
    K = (r - (intMultiply_1(P, O) | 0)) | 0
    S = (P - r) | 0
    j = intMultiply_1(f, ((am.i7 | 0) / (O | 0)) | 0) | 0
    if ((j | 0) > 0) {
        a = (H & 255) === 1 ? 1 : 0
        n = (H & 255) !== 0 ? 1 : 0
        U = (c & 255) !== 0 ? 1 : 0
        V = ((r & 1) | 0) !== 0 ? 1 : 0
        ah = r & 254
        h = 0
        c = 0
        G = 0
        while (1) {
            L = l[(((T + (aq & 65535)) | 0) + G) | 0] | 0
            E = l[(((((T + (aq & 65535)) | 0) + 65536) | 0) + G) | 0] & 255
            C = p.d.getInt32((p.d.getUint8((E & 15) * 1 + 4 + p.o) | 0) * 4 + 20 + p.o, true) | 0
            E = p.d.getInt32((p.d.getUint8((E >>> 4) * 1 + 4 + p.o) | 0) * 4 + 20 + p.o, true) | 0
            if (U) {
                A = 0
                while (1) {
                    if (n) {
                        M = l[(((((T + 131072) | 0) + ((L & 255) << 5)) | 0) + A) | 0] & 255
                        R = am.a2
                        x = am.a2o | 0
                        if (a) {
                            f = c
                            u = 128
                        } else {
                            f = 0
                            u = 128
                            while (1) {
                                R[(x + c) | 0] = ((u & M) | 0) !== 0 ? C | 0 : E | 0
                                R[(x + ((c + 1) | 0)) | 0] = (((u >>> 1) & M) | 0) !== 0 ? C | 0 : E | 0
                                f = (f + 2) | 0
                                u >>>= 2
                                c = (c + 2) | 0
                                if ((f | 0) !== (ah | 0)) continue
                                break
                            }
                            f = c
                        }
                        if (V) {
                            R[(x + f) | 0] = ((u & M) | 0) !== 0 ? C | 0 : E | 0
                            c = (f + 1) | 0
                        }
                    }
                    c = (c + S) | 0
                    A = (A + 1) | 0
                    if ((A | 0) !== (O | 0)) continue
                    break
                }
                f = am.i6 | 0
            }
            h = (h + 1) | 0
            if ((h | 0) === (f | 0)) {
                c = (c - S) | 0
                h = 0
            } else {
                c = (K + c) | 0
            }
            G = (G + 1) | 0
            if ((G | 0) !== (j | 0)) continue
            break
        }
    }
    c = p.d.getUint8(0 + p.o) | 0
    if ((p.d.getUint8(1 + p.o) & 255) !== 0) {
        if ((c & 16) !== 0) {
            j = p.d.getUint16(1044 + p.o, true) & 65535
            h = p.d.getInt32(20 + (p.d.getUint8(4 + (l[(((((T + (aq & 65535)) | 0) + 65536) | 0) + j) | 0] & 15) * 1 + p.o) | 0) * 4 + p.o, true) | 0
            L = p.d.getUint8(2 + p.o) | 0
            C = p.d.getUint8(3 + p.o) | 0
            if ((C & 255) >= (L & 255)) {
                a = L & 255
                L = (((1 - a) | 0) + (C & 255)) | 0
                C = (H & 255) < 4 ? 1 : 0
                E = (H & 255) !== 0 ? 1 : 0
                A = r & 3
                M = (A | 0) !== 0 ? 1 : 0
                K = (r - 4) | 0
                x = ((K >>> 2) + 1) | 0
                u = ((x & 1) | 0) !== 0 ? 1 : 0
                x &= -2
                K = K >>> 0 < 4 ? 1 : 0
                a = ((intMultiply_1(((intMultiply_1(intMultiply_1(((j | 0) / (f | 0)) | 0, (O - 1) | 0) | 0, f) | 0) + j) | 0, r) | 0) + (intMultiply_1(P, a) | 0)) | 0
                f = 0
                while (1) {
                    if (E) {
                        l = am.a2
                        n = am.a2o | 0
                        if (!C) {
                            if (!K) {
                                j = 0
                                while (1) {
                                    l[(n + a) | 0] = h
                                    l[(n + ((a + 1) | 0)) | 0] = h
                                    l[(n + ((a + 2) | 0)) | 0] = h
                                    l[(n + ((a + 3) | 0)) | 0] = h
                                    l[(n + ((a + 4) | 0)) | 0] = h
                                    l[(n + ((a + 5) | 0)) | 0] = h
                                    l[(n + ((a + 6) | 0)) | 0] = h
                                    l[(n + ((a + 7) | 0)) | 0] = h
                                    j = (j + 2) | 0
                                    a = (a + 8) | 0
                                    if ((j | 0) !== (x | 0)) continue
                                    break
                                }
                                j = a
                            }
                            if (u) {
                                l[(n + a) | 0] = h
                                l[(n + ((a + 1) | 0)) | 0] = h
                                l[(n + ((a + 2) | 0)) | 0] = h
                                l[(n + ((a + 3) | 0)) | 0] = h
                                j = (a + 4) | 0
                                a = j
                            } else {
                                a = j
                            }
                        }
                        if (M) {
                            j = 0
                            while (1) {
                                l[(n + a) | 0] = h
                                j = (j + 1) | 0
                                a = (a + 1) | 0
                                if ((j | 0) !== (A | 0)) continue
                                break
                            }
                        } else {
                            a = j
                        }
                    }
                    f = (f + 1) | 0
                    if ((f | 0) !== (L | 0)) {
                        a = (a + S) | 0
                        continue
                    }
                    break
                }
            }
        }
    }
    p.d.setInt8(0 + p.o, (c + 1) | 0)
    am.a3.putImageData(am.a1, 0, 0)
    p = dS
    am.i5 = ~~+requestAnimationFrame(p)
}
function n8(L) {
    var r = null,
        A = 0,
        f = null,
        G = 0,
        E = 0,
        l = null,
        u = 0,
        K = 0,
        c = 0,
        n = 0,
        x = 0,
        a = 0,
        C = 0,
        p = 0,
        h = 0,
        H = 0,
        j = 0
    l = L.a8
    u = L.i6 | 0
    K = l.d.getUint8(1050 + l.o) | 0
    c = L.i7 | 0
    if ((c | 0) > 0) {
        r = L.a0
        A = L.a0o | 0
        n = l.d.getUint16(1046 + l.o, true) & 65535
        u = intMultiply_1(u, K & 255) | 0
        K = (u | 0) > 0 ? 1 : 0
        x = (n + 65536) | 0
        C = 0
        a = 0
        while (1) {
            if (K) {
                f = L.a2
                c = L.a2o | 0
                G = n
                E = x
                p = 0
                while (1) {
                    h = r[(A + G) | 0] | 0
                    f[(c + a) | 0] = l.d.getInt32((l.d.getUint8(((h & 255) >>> 6) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 1) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((h & 255) >>> 4) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 2) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((h & 255) >>> 2) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 3) | 0)) | 0] = l.d.getInt32((l.d.getUint8((h & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    h = r[(A + E) | 0] | 0
                    f[(c + ((a + 4) | 0)) | 0] = l.d.getInt32((l.d.getUint8(((h & 255) >>> 6) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 5) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((h & 255) >>> 4) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 6) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((h & 255) >>> 2) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 7) | 0)) | 0] = l.d.getInt32((l.d.getUint8((h & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    p = (p + 8) | 0
                    a = (a + 8) | 0
                    if ((p | 0) < (u | 0)) {
                        G = (G + 1) | 0
                        E = (E + 1) | 0
                        continue
                    }
                    break
                }
                H = 0
                h = 0
                p = 0
                while (1) {
                    j = r[(((((A + n) | 0) + 4096) | 0) + p) | 0] | 0
                    f[(c + a) | 0] = l.d.getInt32((l.d.getUint8(((j & 255) >>> 6) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 1) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((j & 255) >>> 4) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 2) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((j & 255) >>> 2) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 3) | 0)) | 0] = l.d.getInt32((l.d.getUint8((j & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    j = r[(((((A + x) | 0) + 4096) | 0) + h) | 0] | 0
                    f[(c + ((a + 4) | 0)) | 0] = l.d.getInt32((l.d.getUint8(((j & 255) >>> 6) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 5) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((j & 255) >>> 4) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 6) | 0)) | 0] = l.d.getInt32((l.d.getUint8((((j & 255) >>> 2) & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    f[(c + ((a + 7) | 0)) | 0] = l.d.getInt32((l.d.getUint8((j & 3) * 1 + 4 + l.o) | 0) * 4 + 20 + l.o, true) | 0
                    H = (H + 8) | 0
                    a = (a + 8) | 0
                    if ((H | 0) < (u | 0)) {
                        p = (p + 1) | 0
                        h = (h + 1) | 0
                        continue
                    }
                    break
                }
                c = L.i7 | 0
                n = (G + 1) | 0
                x = (E + 1) | 0
            }
            C = (C + 2) | 0
            if ((C | 0) < (c | 0)) continue
            break
        }
    }
    l.d.setInt8(0 + l.o, ((l.d.getUint8(0 + l.o) | 0) + 1) | 0)
    L.a3.putImageData(L.a1, 0, 0)
    l = gn
    L.i5 = ~~+requestAnimationFrame(l)
}
function gn() {
    n8(bA)
}
function n7(L) {
    var A = null,
        C = 0,
        K = 0,
        H = 0,
        G = 0,
        h = null,
        n = 0,
        l = 0,
        j = 0,
        u = null,
        x = 0,
        f = 0,
        r = 0,
        c = 0,
        a = 0,
        E = 0,
        p = 0
    u = L.a8
    x = u.d.getUint16(1048 + u.o, true) | 0
    f = L.i7 | 0
    if ((f | 0) > 0) {
        A = L.a0
        C = L.a0o | 0
        r = u.d.getUint16(1046 + u.o, true) & 65535
        x = x & 65535
        G = (r + 196608) | 0
        H = (r + 131072) | 0
        K = (r + 65536) | 0
        c = L.i6 | 0
        E = 0
        a = 0
        while (1) {
            if ((c | 0) > 0) {
                h = L.a2
                f = L.a2o | 0
                p = 0
                while (1) {
                    c = A[(((C + r) | 0) + p) | 0] | 0
                    n = A[(((C + K) | 0) + p) | 0] | 0
                    l = A[(((C + H) | 0) + p) | 0] | 0
                    j = A[(((C + G) | 0) + p) | 0] | 0
                    h[(f + a) | 0] = u.d.getInt32((u.d.getUint8(((((n & 255) >>> 6) & 2) | ((c & 255) >>> 7) | (((l & 255) >>> 5) & 4) | (((j & 255) >>> 4) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 1) | 0)) | 0] = u.d.getInt32((u.d.getUint8(((((n & 255) >>> 5) & 2) | (((c & 255) >>> 6) & 1) | (((l & 255) >>> 4) & 4) | (((j & 255) >>> 3) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 2) | 0)) | 0] = u.d.getInt32((u.d.getUint8(((((n & 255) >>> 4) & 2) | (((c & 255) >>> 5) & 1) | (((l & 255) >>> 3) & 4) | (((j & 255) >>> 2) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 3) | 0)) | 0] = u.d.getInt32((u.d.getUint8(((((n & 255) >>> 3) & 2) | (((c & 255) >>> 4) & 1) | (((l & 255) >>> 2) & 4) | (((j & 255) >>> 1) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 4) | 0)) | 0] = u.d.getInt32((u.d.getUint8(((((n & 255) >>> 2) & 2) | (((c & 255) >>> 3) & 1) | (((l & 255) >>> 1) & 4) | (j & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 5) | 0)) | 0] = u.d.getInt32((u.d.getUint8(((((n & 255) >>> 1) & 2) | (((c & 255) >>> 2) & 1) | (l & 4) | ((j << 1) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 6) | 0)) | 0] = u.d.getInt32((u.d.getUint8(((n & 2) | (((c & 255) >>> 1) & 1) | ((l << 1) & 4) | ((j << 2) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    h[(f + ((a + 7) | 0)) | 0] = u.d.getInt32((u.d.getUint8((((n << 1) & 2) | (c & 1) | ((l << 2) & 4) | ((j << 3) & 8)) * 1 + 4 + u.o) | 0) * 4 + 20 + u.o, true) | 0
                    c = L.i6 | 0
                    p = (p + 1) | 0
                    a = (a + 8) | 0
                    if ((p | 0) < (c | 0)) continue
                    break
                }
                f = L.i7 | 0
            }
            E = (E + 1) | 0
            if ((E | 0) < (f | 0)) {
                K = (K + x) | 0
                H = (H + x) | 0
                G = (G + x) | 0
                r = (r + x) | 0
                continue
            }
            break
        }
    }
    u.d.setInt8(0 + u.o, ((u.d.getUint8(0 + u.o) | 0) + 1) | 0)
    L.a3.putImageData(L.a1, 0, 0)
    u = gm
    L.i5 = ~~+requestAnimationFrame(u)
}
function gm() {
    n7(bA)
}
function n6(O) {
    var p = null,
        u = 0,
        H = 0,
        K = 0,
        r = 0,
        G = 0,
        E = 0,
        f = null,
        h = 0,
        L = 0,
        P = 0,
        M = 0,
        n = null,
        x = 0,
        c = 0,
        j = 0,
        a = 0,
        A = 0,
        C = 0,
        l = 0
    n = O.a8
    x = n.d.getUint16(1048 + n.o, true) | 0
    c = O.i7 | 0
    if ((c | 0) > 0) {
        p = O.a0
        u = O.a0o | 0
        j = n.d.getUint8(1051 + n.o) | 0
        H = (j & 255) !== 0 ? 1 : 0
        K = j & 255
        j = n.d.getUint16(1046 + n.o, true) & 65535
        r = x & 65535
        x = (j + 65536) | 0
        E = (j + 196608) | 0
        G = (j + 131072) | 0
        A = 0
        a = 0
        while (1) {
            if (H) {
                c = O.i6 | 0
                C = 0
                while (1) {
                    if ((c | 0) > 0) {
                        f = O.a2
                        h = O.a2o | 0
                        l = 0
                        while (1) {
                            c = p[(((u + j) | 0) + l) | 0] | 0
                            L = p[(((u + x) | 0) + l) | 0] | 0
                            P = p[(((u + G) | 0) + l) | 0] | 0
                            M = p[(((u + E) | 0) + l) | 0] | 0
                            f[(h + a) | 0] = n.d.getInt32((c & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 1) | 0)) | 0] = n.d.getInt32((c & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 2) | 0)) | 0] = n.d.getInt32((L & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 3) | 0)) | 0] = n.d.getInt32((L & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 4) | 0)) | 0] = n.d.getInt32((P & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 5) | 0)) | 0] = n.d.getInt32((P & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 6) | 0)) | 0] = n.d.getInt32((M & 255) * 4 + 20 + n.o, true) | 0
                            f[(h + ((a + 7) | 0)) | 0] = n.d.getInt32((M & 255) * 4 + 20 + n.o, true) | 0
                            c = O.i6 | 0
                            l = (l + 1) | 0
                            a = (a + 8) | 0
                            if ((l | 0) < (c | 0)) continue
                            break
                        }
                    }
                    C = (C + 1) | 0
                    if ((C | 0) !== (K | 0)) continue
                    break
                }
                c = O.i7 | 0
            }
            A = (A + 1) | 0
            if ((A | 0) < (c | 0)) {
                G = (G + r) | 0
                E = (E + r) | 0
                x = (x + r) | 0
                j = (j + r) | 0
                continue
            }
            break
        }
    }
    n.d.setInt8(0 + n.o, ((n.d.getUint8(0 + n.o) | 0) + 1) | 0)
    O.a3.putImageData(O.a1, 0, 0)
    n = gl
    O.i5 = ~~+requestAnimationFrame(n)
}
function gl() {
    n6(bA)
}
function gk(l) {
    var h = 0,
        n = -0,
        a = null,
        j = 0,
        c = null,
        f = null
    a = l.a8
    h = intMultiply_1(l.i6 | 0, a.d.getUint8(1050 + a.o) & 255) | 0
    n = +(h >>> 0)
    l.a4.width = n
    l.a4.height = +(l.i7 | 0)
    j = l.i7 | 0
    a = l.a4.style
    c = String((h | 0) === 320 ? 640 | 0 : h | 0)
    f = c.concat("px")
    a.width = f
    a = l.a4.style
    c = String(j << ((h | 0) === 320 ? 1 : 0))
    f = c.concat("px")
    a.height = f
    j = l.i7 | 0
    if ((h | 0) !== 0) {
        if ((j | 0) !== 0) {
            a = l.a3.getImageData(0, 0, n, +(j | 0))
            l.a1 = a
            a = a.data.buffer
            c = new Int32Array(a)
            l.a2 = c
            l.a2o = 0
        }
    }
}
function n5(c) {
    var f = null,
        a = null
    f = bA
    cancelAnimationFrame(+(f.i5 >>> 0))
    if (c >>> 0 < 2) {
        if ((c | 0) !== 0) {
            a = gn
            f.i5 = ~~+requestAnimationFrame(a)
        } else {
            a = dS
            f.i5 = ~~+requestAnimationFrame(a)
        }
    } else if ((c | 0) === 2) {
        a = gm
        f.i5 = ~~+requestAnimationFrame(a)
    } else if ((c | 0) === 3) {
        a = gl
        f.i5 = ~~+requestAnimationFrame(a)
    }
}
function gj(a) {
    var c = 0
    c = a.i15 | 0
    if ((vK | 0) !== 0) {
        a6.i7 = 2
        n3(c)
    }
    return 0 | 0
}
function dR(r, p, q, n) {
    var u = null,
        A = null,
        x = 0,
        f = null,
        a = 0,
        c = 0,
        j = 0,
        h = 0,
        l = 0
    u = [
        {
            a0: nullArray,
            a0o: 0,
            i1: 0,
        },
        {
            a0: nullArray,
            a0o: 0,
            i1: 0,
        },
    ]
    f = r.a7
    a = r.a7o | 0
    u[0].a0 = f
    u[0].a0o = a
    A = r.a5
    c = r.a5o | 0
    c = (c - a) | 0
    u[0].i1 = c
    f = u[1]
    f.a0 = p
    f.a0o = q
    f.i1 = n
    a = eI(u, 0, 2) | 0
    if (a >>> 0 > 4294963200) {
        a6.i7 = -a | 0
        a = -1
    }
    c = (c + n) | 0
    if ((c | 0) !== (a | 0)) {
        h = 0
        j = 2
        while (1) {
            if ((a | 0) < 0) {
                r.a4 = nullArray
                r.a4o = 0
                r.a7 = nullArray
                r.a7o = 0
                r.a5 = nullArray
                r.a5o = 0
                r.i0 = r.i0 | 32
                if ((j | 0) === 2) return 0 | 0
                a = u[h].i1 | 0
                return (n - a) | 0
            }
            c = (c - a) | 0
            l = u[h].i1 | 0
            if (a >>> 0 > l >>> 0) {
                a = (a - l) | 0
                l = u[(((0 + h) | 0) + 1) | 0].i1 | 0
                h = (h + 1) | 0
                j = (j - 1) | 0
            }
            f = u[h].a0
            x = u[h].a0o | 0
            u[h].a0 = f
            u[h].a0o = (x + a) | 0
            u[h].i1 = (l - a) | 0
            a = eI(u, (0 + h) | 0, j) | 0
            if (a >>> 0 > 4294963200) {
                a6.i7 = -a | 0
                a = -1
            }
            if ((c | 0) !== (a | 0)) continue
            break
        }
    }
    f = r.a11
    a = r.a11o | 0
    c = r.i12 | 0
    r.a4 = f
    r.a4o = (a + c) | 0
    r.a7 = f
    r.a7o = a
    r.a5 = f
    r.a5o = a
    return n | 0
}
function gi(h, f, c, a) {
    dd = -1
    return -1 | 0
}
function n3(c) {
    var a = 0
    if ((c | 0) < 0) a6.i7 = 9
    else {
        n2()
        a = ex.a0[8] | 0
        ex.a0[8] = (((((((a & 2147483647) - 1073741825) | 0) ^ 1073741822) + 2) & -3) | 0) !== 0 ? (a - 1) | 0 : 0 | 0
    }
}
function n2() {
    var a = 0,
        c = 0
    a = ex.a0[8] | 0
    c = a & 2147483647
    a: if ((c | 0) !== 2147483646) {
        if ((c | 0) === 2147483647) {
            a = 100
            while (1) {
                if ((a | 0) !== 0) {
                    if ((ex.a0[8] | 0) !== 0) {
                        if ((ex.a0[9] | 0) === 0) {
                            a = (a - 1) | 0
                            continue
                        }
                    }
                }
                break
            }
            a = ex.a0[8] | 0
            c = a & 2147483647
            if ((c | 0) === 2147483646) break a
            if ((c | 0) === 2147483647)
                while (1) {
                    a = ex.a0[8] | 0
                    if (((a & 2147483647) | 0) === 2147483647) {
                        c = ex.a0[9] | 0
                        ex.a0[8] = a | -2147483648
                        a = a6.i10 | 0
                        a6.i10 = (a & 16776960) | 1
                        if ((a & 255) <= 2) a6.i10 = a
                        ex.a0[9] = c
                    }
                    a = ex.a0[8] | 0
                    c = a & 2147483647
                    if ((c | 0) === 2147483646) break a
                    if ((c | 0) === 2147483647) continue
                    break
                }
        }
        ex.a0[8] = (a + 1) | 0
    }
}
function n1(f, c, d, a) {
    f.a9 = dR
    return dR(f, c, d, a) | 0 | 0
}
function n0(a) {}
function nZ(a) {}
function nY(a) {}
function nX(a) {}
function nW(n, l, j, k, h) {
    var c = null,
        a = null,
        f = 0
    c = n.a1
    a = l.a1
    if (c === a && 0 === 0) return 1 | 0
    c = l.a0
    f = l.o | 0
    f = nR((f + 1) | 0, c.a0) | 0
    if ((f | 0) === -2147483648) return 0 | 0
    if ((f | 0) !== 0) c = l.a[l.o - f]
    else {
        c = l
    }
    if (c !== null) {
        a = new xq()
        a.a0 = c
        a.i1 = 0
        a.a2 = n
        a.i3 = 0
        a.a4 = c
        a.i5 = -1
        a.i6 = 0
        a.i7 = 0
        a.i8 = 0
        a.i9 = 0
        a.i10 = 0
        a.i11 = 0
        a.i12 = 0
        a.i13 = 0
        a.i15 = 0
        a.i14 = 1
        c.a0.a8(c, a, j[k] | 0, 1)
        f = a.i8 | 0
        if ((f | 0) === 1) j[k] = a.i6 | 0
        return ((f | 0) === 1 ? 1 : 0) | 0
    }
    return 0 | 0
}
function nV(A, x, u, r, p, n) {
    var C = 0,
        h = null,
        a = 0,
        l = null,
        c = 0,
        f = 0,
        j = 0
    h = x.a2
    a: {
        if (n) {
            if (A !== h) {
                l = A.a1
                h = h.a1
                c = l[0] | 0
                a = h[0] | 0
                f = (c & 255) !== (a & 255) ? 1 : 0
                if ((c & 255) !== 0) {
                    if (!f) {
                        f = 0
                        j = 0
                        while (1) {
                            j = (j + 1) | 0
                            f = (f + 1) | 0
                            c = l[j] | 0
                            a = h[f] | 0
                            C = (c & 255) !== (a & 255) ? 1 : 0
                            if ((c & 255) !== 0) {
                                if (!C) continue
                            }
                            break
                        }
                    }
                }
                if ((c & 255) !== (a & 255)) break a
            }
        } else {
            l = A.a1
            h = h.a1
            if (l !== h || 0 !== 0) break a
        }
        a = (x.i15 & 16711935) | 256
        x.i15 = a
        if ((x.i1 | 0) === (r | 0)) {
            x.i15 = (a & 16711936) | 1
            a = x.i6 | 0
            if ((a | 0) !== 0) {
                if ((a | 0) === (u | 0)) {
                    a = x.i8 | 0
                    if ((a | 0) === 2) {
                        x.i8 = p
                        a = p
                    }
                    if ((((x.i14 | 0) ^ 1) | (a ^ 1) | 0) === 0) x.i15 = 65793
                } else {
                    x.i11 = ((x.i11 | 0) + 1) | 0
                    x.i15 = 65793
                }
            } else {
                x.i6 = u
                x.i8 = p
                x.i11 = 1
                if (((p ^ 1) | ((x.i14 | 0) ^ 1) | 0) === 0) x.i15 = 65793
            }
        }
    }
}
function nU(A, x, u, r, p) {
    var C = 0,
        h = null,
        l = null,
        c = 0,
        a = 0,
        f = 0,
        j = 0,
        n = 0
    h = x.a2
    a: {
        b: {
            if (p) {
                if (A === h) break b
                l = A.a1
                h = h.a1
                c = l[0] | 0
                a = h[0] | 0
                f = (c & 255) !== (a & 255) ? 1 : 0
                if ((c & 255) === 0) {
                    f = c
                } else if (f) {
                    f = c
                } else {
                    j = 0
                    n = 0
                    while (1) {
                        n = (n + 1) | 0
                        j = (j + 1) | 0
                        f = l[n] | 0
                        a = h[j] | 0
                        C = (f & 255) !== (a & 255) ? 1 : 0
                        if ((f & 255) !== 0) {
                            if (!C) continue
                        }
                        break
                    }
                }
                if ((f & 255) === (a & 255)) break b
                h = x.a0
                if (A !== h) {
                    h = h.a1
                    a = h[0] | 0
                    f = (c & 255) !== (a & 255) ? 1 : 0
                    if ((c & 255) !== 0) {
                        if (!f) {
                            f = 0
                            j = 0
                            while (1) {
                                j = (j + 1) | 0
                                f = (f + 1) | 0
                                c = l[j] | 0
                                a = h[f] | 0
                                n = (c & 255) !== (a & 255) ? 1 : 0
                                if ((c & 255) !== 0) {
                                    if (!n) continue
                                }
                                break
                            }
                        }
                    }
                    if ((c & 255) !== (a & 255)) break a
                }
            } else {
                l = A.a1
                h = h.a1
                if (l === h && 0 === 0) break b
                h = x.a0.a1
                if (l !== h || 0 !== 0) break a
            }
            if ((x.i6 | 0) !== (u | 0)) {
                if ((x.i7 | 0) !== (u | 0)) {
                    x.i10 = r
                    x.i7 = u
                    x.i12 = ((x.i12 | 0) + 1) | 0
                    if ((x.i11 | 0) === 1) {
                        if ((x.i8 | 0) === 2) x.i15 = (x.i15 & 65535) | 65536
                    }
                    x.i13 = 4
                    break a
                }
            }
            if ((r | 0) !== 1) break a
            x.i10 = 1
            break a
        }
        if ((x.i1 | 0) === (u | 0)) {
            if ((x.i9 | 0) !== 1) x.i9 = r
        }
    }
}
function nT(j, h, f, c) {
    var n = null,
        l = null,
        a = 0
    n = j.a1
    l = h.a2.a1
    if (n === l && 0 === 0) {
        a = h.i6 | 0
        if ((a | 0) !== 0) {
            if ((a | 0) === (f | 0)) {
                if ((h.i8 | 0) === 2) h.i8 = c
            } else {
                h.i11 = ((h.i11 | 0) + 1) | 0
                h.i8 = 2
                h.i15 = (h.i15 & 65535) | 65536
            }
        } else {
            h.i6 = f
            h.i8 = c
            h.i11 = 1
        }
    }
}
function nR(h, f) {
    var a = null,
        j = null,
        c = 0
    a = new xq()
    a.a0 = eC
    a.i1 = h
    a.a2 = eD
    a.i3 = 1
    a.a4 = f
    a.i5 = 0
    a.i6 = 0
    a.i7 = 0
    a.i8 = 0
    a.i9 = 0
    a.i10 = 0
    a.i11 = 0
    a.i12 = 0
    a.i13 = 0
    a.i14 = 0
    a.i15 = 0
    j = f.a1
    a: if (j === iD && 0 === 0) {
        a.i14 = 1
        f.a0.a6(f, a, 1, 1, 1, 0)
        if ((a.i8 | 0) === 1) return (h - 1) | 0
    } else {
        f.a0.a7(f, a, 1, 1, 0)
        c = a.i11 | 0
        if ((c | 0) !== 0) {
            if ((c | 0) !== 1) break a
            if ((a.i8 | 0) !== 1) {
                if ((a.i12 | ((a.i9 | 0) ^ 1) | ((a.i10 | 0) ^ 1) | 0) !== 0) break a
            }
            c = a.i6 | 0
        } else {
            if ((((a.i12 | 0) ^ 1) | ((a.i9 | 0) ^ 1) | ((a.i10 | 0) ^ 1) | 0) !== 0) break a
            c = a.i7 | 0
        }
        if ((c | 0) !== -2147483648) return (h - c) | 0
    }
    return -2147483648 | 0
}
function nP(a) {}
function nO(a) {}
function nN(A, x, u, r, p, n) {
    var C = 0,
        f = null,
        a = 0,
        l = null,
        c = 0,
        h = 0,
        j = 0
    f = x.a2
    a: {
        b: {
            if (n) {
                if (A !== f) {
                    l = A.a1
                    f = f.a1
                    c = l[0] | 0
                    a = f[0] | 0
                    h = (c & 255) !== (a & 255) ? 1 : 0
                    if ((c & 255) !== 0) {
                        if (!h) {
                            h = 0
                            j = 0
                            while (1) {
                                j = (j + 1) | 0
                                h = (h + 1) | 0
                                c = l[j] | 0
                                a = f[h] | 0
                                C = (c & 255) !== (a & 255) ? 1 : 0
                                if ((c & 255) !== 0) {
                                    if (!C) continue
                                }
                                break
                            }
                        }
                    }
                    if ((c & 255) !== (a & 255)) break b
                }
            } else {
                l = A.a1
                f = f.a1
                if (l !== f || 0 !== 0) break b
            }
            a = (x.i15 & 16711935) | 256
            x.i15 = a
            if ((x.i1 | 0) !== (r | 0)) break a
            x.i15 = (a & 16711936) | 1
            a = x.i6 | 0
            if ((a | 0) !== 0) {
                if ((a | 0) === (u | 0)) {
                    a = x.i8 | 0
                    if ((a | 0) === 2) {
                        x.i8 = p
                        a = p
                    }
                    if ((((x.i14 | 0) ^ 1) | (a ^ 1) | 0) !== 0) break a
                    x.i15 = 65793
                    break a
                }
                x.i11 = ((x.i11 | 0) + 1) | 0
                x.i15 = 65793
                break a
            }
            x.i6 = u
            x.i8 = p
            x.i11 = 1
            if (((p ^ 1) | ((x.i14 | 0) ^ 1) | 0) !== 0) break a
            x.i15 = 65793
            break a
        }
        f = A.a2
        f.a0.a6(f, x, u, r, p, n)
    }
}
function nM(A, x, u, r, p) {
    var C = 0,
        f = null,
        l = null,
        c = 0,
        a = 0,
        h = 0,
        j = 0,
        n = 0
    f = x.a2
    a: {
        b: {
            c: {
                if (p) {
                    if (A === f) break b
                    l = A.a1
                    f = f.a1
                    c = l[0] | 0
                    a = f[0] | 0
                    h = (c & 255) !== (a & 255) ? 1 : 0
                    if ((c & 255) === 0) {
                        h = c
                    } else if (h) {
                        h = c
                    } else {
                        j = 0
                        n = 0
                        while (1) {
                            n = (n + 1) | 0
                            j = (j + 1) | 0
                            h = l[n] | 0
                            a = f[j] | 0
                            C = (h & 255) !== (a & 255) ? 1 : 0
                            if ((h & 255) !== 0) {
                                if (!C) continue
                            }
                            break
                        }
                    }
                    if ((h & 255) === (a & 255)) break b
                    f = x.a0
                    if (A !== f) {
                        f = f.a1
                        a = f[0] | 0
                        h = (c & 255) !== (a & 255) ? 1 : 0
                        if ((c & 255) !== 0) {
                            if (!h) {
                                h = 0
                                j = 0
                                while (1) {
                                    j = (j + 1) | 0
                                    h = (h + 1) | 0
                                    c = l[j] | 0
                                    a = f[h] | 0
                                    n = (c & 255) !== (a & 255) ? 1 : 0
                                    if ((c & 255) !== 0) {
                                        if (!n) continue
                                    }
                                    break
                                }
                            }
                        }
                        if ((c & 255) !== (a & 255)) break c
                    }
                } else {
                    l = A.a1
                    f = f.a1
                    if (l === f && 0 === 0) break b
                    f = x.a0.a1
                    if (l !== f || 0 !== 0) break c
                }
                if ((x.i6 | 0) !== (u | 0)) {
                    if ((x.i7 | 0) !== (u | 0)) {
                        x.i10 = r
                        if ((x.i13 | 0) !== 4) {
                            x.i15 = x.i15 & 16711680
                            f = A.a2
                            f.a0.a6(f, x, u, u, 1, p)
                            c = x.i15 | 0
                            if ((c & 65280) !== 0) {
                                x.i13 = 3
                                if ((c & 255) !== 0) break a
                            } else x.i13 = 4
                        }
                        x.i7 = u
                        x.i12 = ((x.i12 | 0) + 1) | 0
                        if ((x.i11 | 0) !== 1) break a
                        if ((x.i8 | 0) !== 2) break a
                        x.i15 = (x.i15 & 65535) | 65536
                        break a
                    }
                }
                if ((r | 0) !== 1) break a
                x.i10 = 1
                break a
            }
            f = A.a2
            f.a0.a7(f, x, u, r, p)
            break a
        }
        if ((x.i1 | 0) === (u | 0)) {
            if ((x.i9 | 0) !== 1) x.i9 = r
        }
    }
}
function nL(l, j, h, f) {
    var n = null,
        c = 0,
        a = null
    a = l.a1
    n = j.a2.a1
    if (a === n && 0 === 0) {
        c = j.i6 | 0
        if ((c | 0) !== 0) {
            if ((c | 0) === (h | 0)) {
                if ((j.i8 | 0) === 2) j.i8 = f
            } else {
                j.i11 = ((j.i11 | 0) + 1) | 0
                j.i8 = 2
                j.i15 = (j.i15 & 65535) | 65536
            }
        } else {
            j.i6 = h
            j.i8 = f
            j.i11 = 1
        }
    } else {
        a = l.a2
        a.a0.a8(a, j, h, f)
    }
}
function nG(a) {
    var c = null
    c = a.a1.a0
    return null
}
function nF(a) {
    var c = null
    a.a0 = bQ
    c = a.a1.a0
    c.setInt32(8 + intMultiply_1(0, 12), ((c.getInt32(8 + intMultiply_1(0, 12), true) | 0) - 1) | 0, true)
}
function nE(a) {
    var c = null
    a.a0 = bQ
    c = a.a1.a0
    c.setInt32(8 + intMultiply_1(0, 12), ((c.getInt32(8 + intMultiply_1(0, 12), true) | 0) - 1) | 0, true)
}
function ab() {
    jj()
}
function nC(x, u, r, p) {
    var j = null,
        h = null,
        n = 0,
        c = 0,
        l = 0,
        a = 0,
        f = 0
    if ((u | 0) === 2147483631) dN()
    j = x.a2
    if (u >>> 0 < 1073741799) {
        n = u << 1
        c = (u + 1) | 0
        n = (((c >>> 0 > n >>> 0 ? c | 0 : n | 0) & -16) + 16) | 0
    } else {
        n = 2147483631
    }
    h = new Uint8Array((n / 1) | 0)
    if ((p | 0) !== 0) {
        if (((0 + p) | 0 | 0) !== (0 | 0))
            if (0 < 0) {
                l = p & 3
                if ((l | 0) !== 0) {
                    f = 0
                    a = p
                    c = p
                    while (1) {
                        c = (c - 1) | 0
                        a = (a - 1) | 0
                        h[a] = j[c] | 0
                        f = (f + 1) | 0
                        if ((f | 0) !== (l | 0)) continue
                        break
                    }
                } else {
                    a = p
                    c = p
                }
                if (p >>> 0 >= 4)
                    while (1) {
                        h[(((0 + a) | 0) + -1) | 0] = j[(((0 + c) | 0) + -1) | 0] | 0
                        h[(((0 + a) | 0) + -2) | 0] = j[(((0 + c) | 0) + -2) | 0] | 0
                        h[(((0 + a) | 0) + -3) | 0] = j[(((0 + c) | 0) + -3) | 0] | 0
                        c = (c - 4) | 0
                        a = (a - 4) | 0
                        h[a] = j[c] | 0
                        if (h !== h || 0 !== ((0 + a) | 0)) continue
                        break
                    }
            } else {
                l = p & 7
                if ((l | 0) !== 0) {
                    c = 0
                    a = 0
                    f = 0
                    while (1) {
                        h[a] = j[f] | 0
                        c = (c + 1) | 0
                        a = (a + 1) | 0
                        f = (f + 1) | 0
                        if ((c | 0) !== (l | 0)) continue
                        break
                    }
                } else {
                    a = 0
                    f = 0
                }
                if (p >>> 0 >= 8)
                    while (1) {
                        h[a] = j[f] | 0
                        h[(((0 + a) | 0) + 1) | 0] = j[(((0 + f) | 0) + 1) | 0] | 0
                        h[(((0 + a) | 0) + 2) | 0] = j[(((0 + f) | 0) + 2) | 0] | 0
                        h[(((0 + a) | 0) + 3) | 0] = j[(((0 + f) | 0) + 3) | 0] | 0
                        h[(((0 + a) | 0) + 4) | 0] = j[(((0 + f) | 0) + 4) | 0] | 0
                        h[(((0 + a) | 0) + 5) | 0] = j[(((0 + f) | 0) + 5) | 0] | 0
                        h[(((0 + a) | 0) + 6) | 0] = j[(((0 + f) | 0) + 6) | 0] | 0
                        h[(((0 + a) | 0) + 7) | 0] = j[(((0 + f) | 0) + 7) | 0] | 0
                        a = (a + 8) | 0
                        if (h !== h || ((0 + p) | 0) !== ((0 + a) | 0)) {
                            f = (f + 8) | 0
                            continue
                        }
                        break
                    }
            }
    }
    if ((r | 0) !== (p | 0)) {
        if (((0 + r) | 0 | 0) !== ((0 + p) | 0 | 0)) {
            if (!0)
                if (0 < 0) {
                    l = (r - p) & 3
                    if ((l | 0) !== 0) {
                        f = 0
                        a = r
                        c = r
                        while (1) {
                            c = (c - 1) | 0
                            a = (a - 1) | 0
                            h[a] = j[c] | 0
                            f = (f + 1) | 0
                            if ((f | 0) !== (l | 0)) continue
                            break
                        }
                    } else {
                        a = r
                        c = r
                    }
                    if (((p ^ -1) + r) >>> 0 >= 3)
                        while (1) {
                            h[(((0 + a) | 0) + -1) | 0] = j[(((0 + c) | 0) + -1) | 0] | 0
                            h[(((0 + a) | 0) + -2) | 0] = j[(((0 + c) | 0) + -2) | 0] | 0
                            h[(((0 + a) | 0) + -3) | 0] = j[(((0 + c) | 0) + -3) | 0] | 0
                            c = (c - 4) | 0
                            a = (a - 4) | 0
                            h[a] = j[c] | 0
                            if (h !== h || ((0 + p) | 0) !== ((0 + a) | 0)) continue
                            break
                        }
                } else {
                    l = (r - p) & 7
                    if ((l | 0) !== 0) {
                        c = 0
                        a = p
                        f = p
                        while (1) {
                            h[a] = j[f] | 0
                            c = (c + 1) | 0
                            a = (a + 1) | 0
                            f = (f + 1) | 0
                            if ((c | 0) !== (l | 0)) continue
                            break
                        }
                    } else {
                        a = p
                        f = p
                    }
                    if (((p ^ -1) + r) >>> 0 >= 7)
                        while (1) {
                            h[a] = j[f] | 0
                            h[(((0 + a) | 0) + 1) | 0] = j[(((0 + f) | 0) + 1) | 0] | 0
                            h[(((0 + a) | 0) + 2) | 0] = j[(((0 + f) | 0) + 2) | 0] | 0
                            h[(((0 + a) | 0) + 3) | 0] = j[(((0 + f) | 0) + 3) | 0] | 0
                            h[(((0 + a) | 0) + 4) | 0] = j[(((0 + f) | 0) + 4) | 0] | 0
                            h[(((0 + a) | 0) + 5) | 0] = j[(((0 + f) | 0) + 5) | 0] | 0
                            h[(((0 + a) | 0) + 6) | 0] = j[(((0 + f) | 0) + 6) | 0] | 0
                            h[(((0 + a) | 0) + 7) | 0] = j[(((0 + f) | 0) + 7) | 0] | 0
                            a = (a + 8) | 0
                            if (h !== h || ((0 + r) | 0) !== ((0 + a) | 0)) {
                                f = (f + 8) | 0
                                continue
                            }
                            break
                        }
                }
        }
    }
    x.a2 = h
    x.i0 = ((n << 1) + 1) | 0
}
function dN() {
    nB()
}
function nB() {
    var a = null,
        c = null
    a = [
        {
            a0: null,
            a1: {
                a0: nullObj,
            },
        },
    ]
    c = a[0]
    tx(c)
    tv(a)
}
function tx(c) {
    var a = null
    c.a0 = bQ
    a = new DataView(new ArrayBuffer((25 + 7) & ~7))
    a.setInt32(0 + intMultiply_1(0, 12), 12, true)
    a.setInt32(4 + intMultiply_1(0, 12), 12, true)
    a.setInt32(8 + intMultiply_1(0, 12), 0, true)
    a.setInt8(12 + intMultiply_1(0, 12), 98)
    a.setInt8(1 * 1 + 12 + intMultiply_1(0, 12), 97)
    a.setInt8(2 * 1 + 12 + intMultiply_1(0, 12), 115)
    a.setInt8(3 * 1 + 12 + intMultiply_1(0, 12), 105)
    a.setInt8(4 * 1 + 12 + intMultiply_1(0, 12), 99)
    a.setInt8(5 * 1 + 12 + intMultiply_1(0, 12), 95)
    a.setInt8(6 * 1 + 12 + intMultiply_1(0, 12), 115)
    a.setInt8(7 * 1 + 12 + intMultiply_1(0, 12), 116)
    a.setInt8(8 * 1 + 12 + intMultiply_1(0, 12), 114)
    a.setInt8(9 * 1 + 12 + intMultiply_1(0, 12), 105)
    a.setInt8(10 * 1 + 12 + intMultiply_1(0, 12), 110)
    a.setInt8(11 * 1 + 12 + intMultiply_1(0, 12), 103)
    a.setInt8(12 * 1 + 12 + intMultiply_1(0, 12), 0)
    c.a1.a0 = a
    c.a0 = iA
}
function tw(a) {
    var c = null
    a.a0 = bQ
    c = a.a1.a0
    c.setInt32(8 + intMultiply_1(0, 12), ((c.getInt32(8 + intMultiply_1(0, 12), true) | 0) - 1) | 0, true)
}
function tv(a) {
    var h = null,
        f = null,
        c = null
    h = [nullObj]
    h[0] = {
        d: a,
        o: 0,
    }
    f = [null]
    f[0] = iC
    c = [null]
    c[0] = tw
    tt(tu(h, 0, f, 0, c, 0))
}
function tu(j, k, h, i, f, g) {
    var l = 0,
        a = null,
        c = null
    a = iB
    if (a !== null) return hY(a, j, k, h, i, f, g)
    a = {
        a0: nullArray,
        a1: nullArray,
        i2: 0,
    }
    a.i2 = 16
    c = Cm(16)
    a.a0 = c
    l = a.i2 | 0
    c = new Uint8Array((l / 1) | 0)
    a.a1 = c
    iB = a
    return hY(a, j, k, h, i, f, g)
}
function tt(f) {
    var c = null,
        a = null
    a = f.a4.a1
    a = z(a, 0)
    c = new CheerpException(a)
    f.a0 = c
    throw c
}
function hY(n, l, m, j, k, h, i) {
    var A = null,
        p = null,
        x = null,
        u = null,
        r = null,
        f = 0,
        a = null,
        c = 0
    f = n.i2 | 0
    a: {
        b: {
            if ((f | 0) > 1) {
                a = n.a1
                c = 1
                while (1) {
                    if ((a[c] & 255) !== 0) {
                        c = (c + 1) | 0
                        if ((c | 0) === (f | 0)) break b
                        continue
                    }
                    break
                }
            } else {
                c = 1
            }
            if ((c | 0) !== (f | 0)) {
                a = n.a1
                f = c
                break a
            }
        }
        n.i2 = f << 1
        a = n.a0
        c = intMultiply_1(f, 88) | 0
        if (a !== nullArray || 0 !== 0) a = Co(a, a.length, (c / 44) | 0)
        else a = Cm((c / 44) | 0)
        n.a0 = a
        c = n.i2 | 0
        a = n.a1
        if (a !== nullArray || 0 !== 0)
            a = (function () {
                var __old__ = a
                var __ret__ = new Uint8Array((c / 1) | 0)
                __ret__.set(__old__.subarray(0, Math.min(__ret__.length, __old__.length)))
                return __ret__
            })()
        else a = new Uint8Array((c / 1) | 0)
        n.a1 = a
    }
    A = n.a0
    p = l[m]
    x = j[k]
    u = h[i]
    r = p.d
    c = p.o
    A[f].a1 = r
    A[f].i2 = c
    A[f].a3 = null
    A[f].a4 = x
    A[f].a5 = u
    A[f].i6 = 1
    A[f].i7 = 0
    A[f].a9 = null
    A[f].a10 = null
    a[f] = 1
    return A[f]
}
function tq(a) {
    var c = null
    a.a0 = bQ
    c = a.a1.a0
    c.setInt32(8 + intMultiply_1(0, 12), ((c.getInt32(8 + intMultiply_1(0, 12), true) | 0) - 1) | 0, true)
}
function to(a) {
    var c = null
    a.a0 = bQ
    c = a.a1.a0
    c.setInt32(8 + intMultiply_1(0, 12), ((c.getInt32(8 + intMultiply_1(0, 12), true) | 0) - 1) | 0, true)
}
function cr(n, o, l, j) {
    var r = 0,
        h = null,
        a = 0,
        f = null,
        c = 0,
        p = 0
    h = j.a4
    a = j.a4o | 0
    a: {
        if (h === nullArray && a === 0) {
            if ((fM(j) | 0 | 0) !== 0) break a
            h = j.a4
            a = j.a4o | 0
        }
        f = j.a5
        c = j.a5o | 0
        if ((a - c) >>> 0 < l >>> 0) j.a9(j, n, o, l) | 0
        else {
            if ((j.i20 | 0) > -1) {
                a = l
                while (1) {
                    if ((a | 0) !== 0) {
                        p = (a - 1) | 0
                        if ((n[(o + p) | 0] & 255) !== 10) {
                            a = p
                            continue
                        }
                        if ((j.a9(j, n, o, a) | 0) >>> 0 < a >>> 0) break a
                        f = j.a5
                        c = j.a5o | 0
                        p = (l - a) | 0
                    } else {
                        a = 0
                        p = l
                    }
                    break
                }
            } else {
                a = 0
                p = l
            }
            if ((p | 0) !== 0) {
                r = c
                h = f
                while (1) {
                    h[r] = n[(o + a) | 0] | 0
                    if (f !== h || ((c + p) | 0) !== ((r + 1) | 0)) {
                        r = (r + 1) | 0
                        h = h
                        a = (a + 1) | 0
                        continue
                    }
                    break
                }
                f = j.a5
                c = j.a5o | 0
            }
            j.a5 = f
            j.a5o = (c + p) | 0
        }
    }
}
function hX(h) {
    var f = 0,
        c = 0,
        a = 0
    c = h.i19 | 0
    f = a6.i6 | 0
    if (((c & -1073741825) | 0) === (f | 0)) return 0 | 0
    a = (c | 0) === 0 ? f | 0 : c | 0
    h.i19 = a
    if ((c | 0) === 0) return 1 | 0
    h.i19 = (a | 0) === 0 ? f | 1073741824 | 0 : a | 0
    if ((a | 0) === 0) return 1 | 0
    while (1) {
        if (((c & 1073741824) | 0) !== 0) {
            c = a
            continue
        }
        a = (a | 0) === (c | 0) ? c | 1073741824 | 0 : a | 0
        c = a
        continue
    }
}
function fM(f) {
    var c = null,
        h = 0,
        a = 0
    a = f.i18 | 0
    f.i18 = (a - 1) | a
    a = f.i0 | 0
    if (((a & 8) | 0) !== 0) {
        f.i0 = a | 32
        return -1 | 0
    }
    f.a2 = nullArray
    f.a1 = nullArray
    c = f.a11
    a = f.a11o | 0
    f.a7 = c
    f.a7o = a
    f.a5 = c
    f.a5o = a
    h = f.i12 | 0
    f.a4 = c
    f.a4o = (a + h) | 0
    return 0 | 0
}
function mJ() {
    var j = 0,
        h = 0,
        c = null,
        a = 0,
        f = null
    if ((ax.i19 | 0) > -1) h = hX(ax) | 0
    else {
        h = 0
    }
    c = ax.a5
    a = ax.a5o | 0
    f = ax.a7
    j = ax.a7o | 0
    a: {
        b: {
            if (c !== f || a !== j) {
                ax.a9(ax, nullArray, 0, 0) | 0
                c = ax.a5
                a = ax.a5o | 0
                if (c === nullArray && a === 0) {
                    if ((h | 0) !== 0) break b
                    break a
                }
            }
            c = ax.a1
            f = ax.a2
            if (c !== f || 0 !== 0) {
                a = (0 - 0) | 0
                ax.a10(ax, a, a >> 31, 1) | 0
            }
            ax.a4 = nullArray
            ax.a4o = 0
            ax.a7 = nullArray
            ax.a7o = 0
            ax.a5 = nullArray
            ax.a5o = 0
            ax.a2 = nullArray
            ax.a1 = nullArray
            if ((h | 0) === 0) break a
        }
        ax.i19 = 0
    }
}
function a0(j, h) {
    var p = null,
        f = 0,
        n = null,
        c = 0,
        r = 0,
        a = 0,
        l = 0
    p = h.a2
    f = h.i1 | 0
    if (f >>> 0 > 2147483631) dN()
    c = ((f & -16) + 16) | 0
    n = new Uint8Array((c / 1) | 0)
    j.a2 = n
    j.i0 = ((c << 1) + 1) | 0
    j.i1 = f
    if (((0 + f) | 0 | 0) !== (0 | 0)) {
        if ((f | 0) !== 0)
            if (0 < 0) {
                r = f & 3
                if ((r | 0) !== 0) {
                    c = f
                    a = f
                    l = 0
                    while (1) {
                        c = (c - 1) | 0
                        a = (a - 1) | 0
                        n[a] = p[c] | 0
                        l = (l + 1) | 0
                        if ((l | 0) !== (r | 0)) continue
                        break
                    }
                } else {
                    c = f
                    a = f
                }
                if ((f - 1) >>> 0 >= 3)
                    while (1) {
                        n[(((0 + a) | 0) + -1) | 0] = p[(((0 + c) | 0) + -1) | 0] | 0
                        n[(((0 + a) | 0) + -2) | 0] = p[(((0 + c) | 0) + -2) | 0] | 0
                        n[(((0 + a) | 0) + -3) | 0] = p[(((0 + c) | 0) + -3) | 0] | 0
                        c = (c - 4) | 0
                        a = (a - 4) | 0
                        n[a] = p[c] | 0
                        if (n !== n || 0 !== ((0 + a) | 0)) continue
                        break
                    }
            } else {
                r = f & 7
                if ((r | 0) !== 0) {
                    c = 0
                    a = 0
                    l = 0
                    while (1) {
                        n[a] = p[l] | 0
                        c = (c + 1) | 0
                        a = (a + 1) | 0
                        l = (l + 1) | 0
                        if ((c | 0) !== (r | 0)) continue
                        break
                    }
                } else {
                    a = 0
                    l = 0
                }
                if ((f - 1) >>> 0 >= 7)
                    while (1) {
                        n[a] = p[l] | 0
                        n[(((0 + a) | 0) + 1) | 0] = p[(((0 + l) | 0) + 1) | 0] | 0
                        n[(((0 + a) | 0) + 2) | 0] = p[(((0 + l) | 0) + 2) | 0] | 0
                        n[(((0 + a) | 0) + 3) | 0] = p[(((0 + l) | 0) + 3) | 0] | 0
                        n[(((0 + a) | 0) + 4) | 0] = p[(((0 + l) | 0) + 4) | 0] | 0
                        n[(((0 + a) | 0) + 5) | 0] = p[(((0 + l) | 0) + 5) | 0] | 0
                        n[(((0 + a) | 0) + 6) | 0] = p[(((0 + l) | 0) + 6) | 0] | 0
                        n[(((0 + a) | 0) + 7) | 0] = p[(((0 + l) | 0) + 7) | 0] | 0
                        a = (a + 8) | 0
                        if (n !== n || ((0 + f) | 0) !== ((0 + a) | 0)) {
                            l = (l + 8) | 0
                            continue
                        }
                        break
                    }
            }
    }
    n[f] = 0
}
function fL(n, l, m, j, k) {
    j = {
        d: j,
        o: k,
    }
    var u = null,
        r = null,
        A = null,
        p = 0,
        x = 0,
        a = 0,
        c = null,
        h = null,
        f = 0
    u = [nullObj, nullObj]
    u[0] = j
    r = new Int32Array(10)
    a = 0
    while (1) {
        r[a] = 0
        a = (a + 1) | 0
        if (r !== r || 10 !== ((0 + a) | 0)) continue
        break
    }
    c = Cg(10)
    c = c[0]
    A = new Uint8Array(80)
    u[1] = {
        d: u[0].d,
        o: u[0].o,
    }
    if ((fK(null, l, m, u[1], c, r[0]) | 0 | 0) >= 0) {
        if ((n.i19 | 0) > -1) a = hX(n) | 0
        else {
            a = 0
        }
        p = n.i0 | 0
        if ((n.i18 | 0) < 1) n.i0 = p & -33
        if ((n.i12 | 0) !== 0) {
            h = n.a4
            f = n.a4o | 0
            x = h === nullArray && f === 0 ? 1 : 0
            f = 0
            h = nullArray
        } else {
            h = n.a11
            f = n.a11o | 0
            n.a11 = A
            n.a11o = 0
            n.i12 = 80
            n.a4 = nullArray
            n.a4o = 0
            n.a7 = nullArray
            n.a7o = 0
            n.a5 = nullArray
            n.a5o = 0
            x = 1
        }
        a: {
            if (x) {
                if ((fM(n) | 0 | 0) !== 0) break a
            }
            fK(n, l, m, u[1], c, r[0]) | 0
        }
        if (h !== nullArray || f !== 0) {
            n.a9(n, nullArray, 0, 0) | 0
            n.a11 = h
            n.a11o = f
            n.i12 = 0
            n.a4 = nullArray
            n.a4o = 0
            n.a7 = nullArray
            n.a7o = 0
            n.a5 = nullArray
            n.a5o = 0
        }
        n.i0 = n.i0 | (p & 32)
        if ((a | 0) !== 0) n.i19 = 0
    }
    u[1] = null
}
function fK(G, H, I, K, L, M) {
    var l = null,
        A = null,
        C = 0,
        c = 0,
        a = 0,
        n = 0,
        u = 0,
        r = 0,
        h = 0,
        E = null,
        f = 0,
        j = null,
        x = 0,
        p = 0
    l = {
        a0: new Int32Array(2),
        d1: -0,
        a2: nullArray,
        a2o: 0,
    }
    A = new Uint8Array(40)
    C = G === null ? 1 : 0
    n = 0
    a = 0
    c = 0
    a: while (1) {
        while (1) {
            if ((a | 0) <= ((2147483647 - n) | 0)) {
                n = (n + a) | 0
                u = H[(I + c) | 0] | 0
                if ((u & 255) === 0) return (C ? 0 | 0 : n | 0) | 0
                r = c
                while (1) {
                    if ((u & 255) !== 0) {
                        if ((u & 255) !== 37) {
                            r = (r + 1) | 0
                            u = H[(I + r) | 0] | 0
                            continue
                        }
                    }
                    break
                }
                a = (((I + r) | 0) - ((I + c) | 0)) | 0
                u = (2147483647 - n) | 0
                if ((a | 0) <= (u | 0)) {
                    if (!C) {
                        if (((G.i0 & 32) | 0) === 0) cr(H, (I + c) | 0, a, G)
                    }
                    if ((a | 0) !== 0) {
                        c = r
                        continue
                    }
                    if (C) return 0 | 0
                    h = H[(((I + r) | 0) + 1) | 0] | 0
                    mH(l, vt[(((h << 24) >> 24) - 65) | 0] | 0, K)
                    h = (H[(((I + r) | 0) + 1) | 0] << 24) >> 24
                    if ((h | 0) === 99) {
                        A[39] = l.a0[0] | 0
                        c = 39
                        E = A
                        f = 40
                        j = A
                        h = 0
                        a = 1
                    } else if (((((h - 103) | 0) ^ 2) + 1) >>> 0 <= 1) {
                        j = l.a0
                        c = j[0] | 0
                        f = j[1] | 0
                        if ((f | 0) < 0) {
                            f = (c | 0) !== 0 ? (f ^ -1) | 0 : -f | 0
                            c = -c | 0
                            j[0] = c
                            j[1] = f
                            h = 1
                        } else {
                            h = 0
                        }
                        if ((f | 0) !== 0) {
                            x = c
                            a = 0
                            while (1) {
                                c = i5(x, f, 10) | 0
                                p = dd | 0
                                a = (a - 1) | 0
                                A[(40 + a) | 0] = ((((intMultiply_1(c, 246) | 0) + x) | 0) + 48) | 0
                                if (f >>> 0 > 9) {
                                    f = p
                                    x = c
                                    continue
                                }
                                break
                            }
                        } else {
                            a = 0
                        }
                        if ((c | 0) !== 0)
                            while (1) {
                                f = ((c >>> 0) / 10) | 0
                                a = (a - 1) | 0
                                A[(40 + a) | 0] = ((((intMultiply_1(f, 246) | 0) + c) | 0) + 48) | 0
                                if (c >>> 0 >= 10) {
                                    c = f
                                    continue
                                }
                                break
                            }
                        if (1) {
                            f = (((40 - ((40 + a) | 0)) | 0) + ((j[1] | j[0] | 0) === 0 ? 1 : 0)) | 0
                            j = A
                            c = (40 + a) | 0
                            a = (f | 0) > -1 ? f | 0 : -1 | 0
                            f = 40
                            E = A
                        }
                    } else {
                        E = l.a2
                        h = l.a2o | 0
                        j = E !== nullArray || h !== 0 ? E : iM
                        c = E !== nullArray || h !== 0 ? h : 0
                        {
                            h = 2147483647
                            f = 0
                            while (1) {
                                if ((j[(c + f) | 0] & 255) !== 0) {
                                    h = (h - 1) | 0
                                    if ((h | 0) !== 0) {
                                        f = (f + 1) | 0
                                        continue
                                    }
                                    a = 2147483647
                                } else {
                                    a = (((c + f) | 0) - c) | 0
                                }
                                break
                            }
                        }
                        if ((j[(c + a) | 0] & 255) !== 0) break a
                        f = (c + a) | 0
                        E = j
                        h = 0
                    }
                    f = (f - c) | 0
                    x = (a | 0) > (f | 0) ? a | 0 : f | 0
                    if ((x | 0) <= ((2147483647 - h) | 0)) {
                        p = (x + h) | 0
                        a = (p | 0) > 0 ? p | 0 : 0 | 0
                        if ((a | 0) <= (u | 0)) {
                            cJ(G, 32, a, p, 0)
                            if (((G.i0 & 32) | 0) === 0) cr(iN, 0, h, G)
                            cJ(G, 48, a, p, 65536)
                            cJ(G, 48, x, f, 0)
                            if (((G.i0 & 32) | 0) === 0) cr(j, c, f, G)
                            cJ(G, 32, a, p, 8192)
                            c = (r + 2) | 0
                            continue a
                        }
                    }
                }
            }
            break
        }
        break
    }
    a6.i7 = 75
    return -1 | 0
}
function mH(p, n, l) {
    var j = null,
        a = null,
        c = 0,
        f = 0,
        h = -0
    switch (n | 0) {
        case 9:
            a = DJ(l)
            a = a === 0 ? nullObj : a
            p.a2 = a.d
            p.a2o = a.o
            break
        case 10:
            c = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = c >> 31
            break
        case 11:
            c = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = 0
            break
        case 13:
            c = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = c >> 31
            break
        case 14:
            c = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = 0
            break
        case 12:
            c = DJ(l)
            f = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = f
            break
        case 15:
            c = DJ(l)
            a = p.a0
            c <<= 16
            a[0] = c >> 16
            a[1] = c >> 31
            break
        case 16:
            c = DJ(l)
            a = p.a0
            a[0] = c & 65535
            a[1] = 0
            break
        case 17:
            c = DJ(l)
            a = p.a0
            c <<= 24
            a[0] = c >> 24
            a[1] = c >> 31
            break
        case 18:
            c = DJ(l)
            a = p.a0
            a[0] = c & 255
            a[1] = 0
            break
        case 19:
            c = DJ(l)
            f = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = f
            break
        case 20:
            c = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = 0
            break
        case 21:
            c = DJ(l)
            f = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = f
            break
        case 22:
            c = DJ(l)
            f = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = f
            break
        case 23:
            c = DJ(l)
            a = p.a0
            a[0] = c
            a[1] = c >> 31
            break
        case 24:
            a = DJ(l)
            a = a === 0 ? nullObj : a
            j = p.a0
            j[0] = a.o
            j[1] = 0
            break
        case 25:
            h = DJ(l)
            p.d1 = h
            break
        case 26:
            h = DJ(l)
            p.d1 = h
            break
        default:
    }
}
function cJ(l, j, h, f, c) {
    var r = null,
        p = 0,
        a = 0,
        n = 0
    r = new Uint8Array(256)
    if ((h | 0) > (f | 0)) {
        if (((c & 73728) | 0) === 0) {
            a = (h - f) | 0
            p = a >>> 0 < 256 ? a | 0 : 256 | 0
            if ((p | 0) !== 0) {
                n = 0
                while (1) {
                    r[n] = j
                    n = (n + 1) | 0
                    if (r !== r || p !== ((0 + n) | 0)) continue
                    break
                }
            }
            if (a >>> 0 > 255)
                while (1) {
                    if (((l.i0 & 32) | 0) === 0) cr(r, 0, 256, l)
                    a = (a - 256) | 0
                    if (a >>> 0 > 255) continue
                    break
                }
            if (((l.i0 & 32) | 0) === 0) cr(r, 0, a, l)
        }
    }
}
function ea(c, d, a) {
    c = {
        d: c,
        o: d,
    }
    mJ()
    tn(
        null,
        nullObj,
        c,
        {
            d: iJ,
            o: 0,
        },
        {
            d: iI,
            o: 0,
        },
        a
    )
    ab()
}
function tn(c, a, ...args) {
    var h = null,
        f = null
    h = [nullObj]
    h[0] = {
        d: [c, a, ...args],
        o: tn.length,
    }
    f = h[0]
    fL(vL, iF, 0, f.d, f.o)
    h[0] = null
}
function bd(a, b, ...args) {
    var f = null,
        c = null
    f = [nullObj]
    f[0] = {
        d: [a, b, ...args],
        o: bd.length,
    }
    c = f[0]
    fL(ax, a, b, c.d, c.o)
    f[0] = null
}
function jk(A, x) {
    var f = null,
        j = null,
        l = 0,
        u = 0,
        r = 0,
        a = 0,
        p = 0,
        c = 0,
        n = 0,
        h = 0
    if (x >>> 0 > 2147483631) dN()
    l = A.i0 | 0
    if (l >>> 0 < 2) {
        u = 0
    } else {
        u = ((l >>> 1) - 1) | 0
    }
    a: if (u >>> 0 < x >>> 0) {
        u = A.i1 | 0
        r = (u >>> 0 > x >>> 0 ? u | 0 : x | 0) & -16
        if (l >>> 0 >= 2) {
            if ((r | 0) === (((l >>> 1) - 16) | 0)) break a
        }
        r = (r + 16) | 0
        f = new Uint8Array((r / 1) | 0)
        j = A.a2
        if (j !== nullArray || 0 !== 0) {
            l = A.i1 | 0
            a = (l + 1) | 0
            if (((0 + a) | 0 | 0) !== (0 | 0)) {
                if ((a | 0) !== 0)
                    if (0 < 0) {
                        p = a & 3
                        if ((p | 0) !== 0) {
                            c = a
                            n = 0
                            while (1) {
                                c = (c - 1) | 0
                                a = (a - 1) | 0
                                f[a] = j[c] | 0
                                n = (n + 1) | 0
                                if ((n | 0) !== (p | 0)) continue
                                break
                            }
                        } else {
                            c = a
                        }
                        if (l >>> 0 >= 3)
                            while (1) {
                                f[(((0 + a) | 0) + -1) | 0] = j[(((0 + c) | 0) + -1) | 0] | 0
                                f[(((0 + a) | 0) + -2) | 0] = j[(((0 + c) | 0) + -2) | 0] | 0
                                f[(((0 + a) | 0) + -3) | 0] = j[(((0 + c) | 0) + -3) | 0] | 0
                                c = (c - 4) | 0
                                a = (a - 4) | 0
                                f[a] = j[c] | 0
                                if (f !== f || 0 !== ((0 + a) | 0)) continue
                                break
                            }
                    } else {
                        n = a & 7
                        if ((n | 0) !== 0) {
                            p = 0
                            h = 0
                            c = 0
                            while (1) {
                                f[h] = j[c] | 0
                                p = (p + 1) | 0
                                h = (h + 1) | 0
                                c = (c + 1) | 0
                                if ((p | 0) !== (n | 0)) continue
                                break
                            }
                        } else {
                            h = 0
                            c = 0
                        }
                        if (l >>> 0 >= 7)
                            while (1) {
                                f[h] = j[c] | 0
                                f[(((0 + h) | 0) + 1) | 0] = j[(((0 + c) | 0) + 1) | 0] | 0
                                f[(((0 + h) | 0) + 2) | 0] = j[(((0 + c) | 0) + 2) | 0] | 0
                                f[(((0 + h) | 0) + 3) | 0] = j[(((0 + c) | 0) + 3) | 0] | 0
                                f[(((0 + h) | 0) + 4) | 0] = j[(((0 + c) | 0) + 4) | 0] | 0
                                f[(((0 + h) | 0) + 5) | 0] = j[(((0 + c) | 0) + 5) | 0] | 0
                                f[(((0 + h) | 0) + 6) | 0] = j[(((0 + c) | 0) + 6) | 0] | 0
                                f[(((0 + h) | 0) + 7) | 0] = j[(((0 + c) | 0) + 7) | 0] | 0
                                h = (h + 8) | 0
                                if (f !== f || ((0 + a) | 0) !== ((0 + h) | 0)) {
                                    c = (c + 8) | 0
                                    continue
                                }
                                break
                            }
                    }
            }
        }
        A.i0 = ((r << 1) + 1) | 0
        A.i1 = u
        A.a2 = f
    }
}
function bc(c, a) {
    var h = 0,
        j = null,
        f = 0
    f = c.i0 | 0
    if (f >>> 0 < 2) {
        f = 0
    } else {
        f = ((f >>> 1) - 1) | 0
    }
    h = c.i1 | 0
    if ((h | 0) === (f | 0)) nC(c, f, f, f)
    j = c.a2
    c.i1 = (h + 1) | 0
    j[h] = a
    j[(((0 + h) | 0) + 1) | 0] = 0
}
function jj() {
    ji()
}
function ji() {
    jh()
}
function jh() {
    throw new Error("Cheerp: Signal raised")
}
function jg(j) {
    var h = null,
        c = null,
        f = null,
        a = 0
    h = je()
    c = (typeof process == "undefined" ? [] : process.argv) || []
    if ((c.length | 0) !== 0) {
        a = 0
        while (1) {
            f = c[+(a >>> 0)]
            if (f.startsWith(j)) +h.push(f.substr(+(j.length | 0)))
            a = (a + 1) | 0
            if (a >>> 0 < c.length >>> 0) continue
            break
        }
    }
    return h
}
function eL(j, k, h, f, c) {
    var a = 0
    if (f.length >>> 0 > c >>> 0) {
        a = jf(j, k, h, f[+(c >>> 0)]) | 0
        if (a >>> 0 < h >>> 0) j[(k + a) | 0] = 0
        return (a + 1) | 0
    }
    return 0 | 0
}
function jf(r, s, p, n) {
    var l = 0,
        j = 0,
        f = 0,
        c = 0,
        h = 0,
        a = 0
    l = n.length
    if ((l | 0) === 0) return 0 | 0
    h = 0
    c = 0
    f = 0
    while (1) {
        a = n.charCodeAt(+(c >>> 0))
        a: {
            if (((a & -2048) | 0) === 55296) {
                j = (c + 1) | 0
                if (j >>> 0 < l >>> 0) {
                    c = n.charCodeAt(+(j >>> 0))
                    a = (((c | a) & 1023) + 65536) | 0
                    c = j
                } else {
                    a = -1
                }
            } else if (a >>> 0 > 1114111) {
                a = -1
            } else {
                if (a >>> 0 < 128) {
                    if (h >>> 0 < p >>> 0) {
                        r[(s + f) | 0] = a
                        f = (f + 1) | 0
                        a = 1
                        break a
                    }
                    a = 1
                    break a
                }
                if (a >>> 0 < 2048) {
                    if ((h + 1) >>> 0 < p >>> 0) {
                        r[(s + f) | 0] = (a >>> 6) | 192
                        r[(((s + f) | 0) + 1) | 0] = (a & 63) | 128
                        f = (f + 2) | 0
                        a = 2
                        break a
                    }
                    a = 2
                    break a
                }
                if (a >>> 0 < 65536) {
                    if ((h + 2) >>> 0 < p >>> 0) {
                        r[(s + f) | 0] = (a >>> 12) | 224
                        r[(((s + f) | 0) + 1) | 0] = ((a >>> 6) & 63) | 128
                        r[(((s + f) | 0) + 2) | 0] = (a & 63) | 128
                        f = (f + 3) | 0
                        a = 3
                        break a
                    }
                    a = 3
                    break a
                }
            }
            if ((h + 3) >>> 0 < p >>> 0) {
                r[(s + f) | 0] = (a >>> 18) | 240
                r[(((s + f) | 0) + 1) | 0] = ((a >>> 12) & 63) | 128
                r[(((s + f) | 0) + 2) | 0] = ((a >>> 6) & 63) | 128
                r[(((s + f) | 0) + 3) | 0] = (a & 63) | 128
                f = (f + 4) | 0
                a = 4
            } else {
                a = 4
            }
        }
        h = (h + a) | 0
        c = (c + 1) | 0
        if (c >>> 0 < l >>> 0) continue
        break
    }
    return h | 0
}
function je() {
    return new Array()
}
function jb() {
    var f = 0,
        a = 0,
        c = 0
    a = eB | 0
    c = 0
    while (1) {
        f = (65536 - a) | 0
        a = ja(vT, a, f, c) | 0
        if ((a | 0) !== 0) {
            if (a >>> 0 > f >>> 0) ab()
            a = ((eB | 0) + a) | 0
            eB = a
            c = (c + 1) | 0
            if ((c | 0) !== 64) continue
            ab()
        }
        break
    }
}
function ja(h, i, f, c) {
    var a = null
    if (iU | 0) return eL(h, i, f, iT, c) | 0 | 0
    a = CHEERP_ENV
    if (a !== null) a = CHEERP_ENV
    else a = jg("--cheerp-env=")
    iT = a
    iU = 1
    return eL(h, i, f, a, c) | 0 | 0
}
function eI(c, d, a) {
    return i$(c, d, a) | 0 | 0
}
function i$(r, s, p) {
    var a = null,
        n = null,
        h = 0,
        f = 0,
        j = 0,
        l = 0,
        c = 0
    if (iL | 0) {
        a = ez
    } else {
        a = String()
        ez = a
        iL = 1
    }
    n = [null]
    i_(n, 0, a)
    if ((p | 0) > 0) {
        f = 0
        h = 0
        while (1) {
            j = r[(s + f) | 0].i1 | 0
            if ((j | 0) !== 0) {
                h = (j + h) | 0
                a = r[(s + f) | 0].a0
                l = r[(s + f) | 0].a0o | 0
                if ((j | 0) > 0) {
                    c = 0
                    while (1) {
                        i9(n, 0, a[(l + c) | 0] | 0)
                        c = (c + 1) | 0
                        if ((c | 0) !== (j | 0)) continue
                        break
                    }
                }
            }
            f = (f + 1) | 0
            if ((f | 0) !== (p | 0)) continue
            break
        }
    } else {
        h = 0
    }
    a = i8(n, 0)
    a = a.split("\n")
    f = a.length
    if ((f | 0) > 1) {
        c = 0
        l = 1
        while (1) {
            n = eH(a, +(c | 0))
            j = oSlot
            console.log(n[j])
            c = (l + 1) | 0
            if ((c | 0) !== (f | 0)) {
                j = c
                c = l
                l = j
                continue
            }
            break
        }
    }
    n = eH(a, +((f - 1) | 0))
    l = oSlot
    ez = n[l]
    return h | 0
}
function i_(c, d, a) {
    c[d] = a
}
function i9(h, i, f) {
    var j = 0,
        c = 0,
        a = 0
    c = ey | 0
    a = f & 255
    a: if ((f & 255) < 192) {
        if ((c | 0) === 0) {
            if (f << 24 <= -16777216) ea(iH, 0, 77)
            df = a
        } else {
            if (((a & 192) | 0) !== 128) ea(iK, 0, 63)
            a = ((df << 6) + (a & 63)) | 0
            df = a
            c = (c - 1) | 0
            ey = c
            if ((c | 0) !== 0) break a
        }
        i7(h, i, a)
    } else {
        if ((c | 0) !== 0) ea(iG, 0, 88)
        if ((f & 255) < 224) {
            j = 31
            c = 1
        } else {
            j = (f & 255) < 240 ? 15 | 0 : 7 | 0
            c = (f & 255) < 240 ? 2 | 0 : 3 | 0
        }
        ey = c
        df = j & a
    }
}
function i8(a, b) {
    return a[b]
}
function eH(c, a) {
    oSlot = (0 + ~~a) | 0
    return c
}
function i7(f, g, c) {
    var a = null
    a: {
        if (c >>> 0 < 65536) {
            if ((c | 0) === 0) break a
            a = f[g]
            a = a.concat(String.fromCharCode(c))
        } else {
            a = f[g]
            a = a.concat(String.fromCharCode((((c - 65536) >>> 10) + 55296) | 0))
            f[g] = a
            a = a.concat(String.fromCharCode(((c & 1023) + 56320) | 0))
        }
        f[g] = a
    }
}
function i6(x, u, r) {
    var C = 0,
        A = 0,
        a = 0,
        h = 0,
        f = 0,
        c = 0,
        j = 0,
        p = 0,
        n = 0,
        l = 0
    a: {
        if ((u | 0) !== 0) {
            c = 1
            f = 0
            h = r
            a = 0
        } else {
            if (r >>> 0 >= x >>> 0) {
                a = 0
                h = r
                f = 0
                c = 1
                break a
            }
            c = 1
            f = 0
            h = r
            a = 0
        }
        while (1) {
            a = ((a << 1) + (h >>> 31)) | 0
            f = ((f << 1) + (c >>> 31)) | 0
            c <<= 1
            j = (f | c | 0) !== 0 ? 1 : 0
            h <<= 1
            if (a >>> 0 >= u >>> 0) {
                if (h >>> 0 >= x >>> 0) break a
                if ((a | 0) !== (u | 0)) break a
            }
            if (j) {
                if ((a | 0) > -1) continue
            }
            break
        }
    }
    if ((f | c | 0) === 0) {
        dd = 0
        return 0 | 0
    }
    j = x
    l = u
    n = 0
    p = 0
    while (1) {
        C = (l | 0) === (a | 0) ? 1 : 0
        A = j >>> 0 >= h >>> 0 ? 1 : 0
        a: {
            if (l >>> 0 <= a >>> 0) {
                if (!A) break a
                if (!C) break a
            }
            l = (((l - a) | 0) + (((j >>> 0 < h >>> 0 ? 1 : 0) << 31) >> 31)) | 0
            j = (j - h) | 0
            p |= f
            n |= c
        }
        c = ((f << 31) + (c >>> 1)) | 0
        h = ((a << 31) + (h >>> 1)) | 0
        f >>>= 1
        if ((f | c | 0) !== 0) {
            a >>>= 1
            continue
        }
        break
    }
    dd = p
    return n | 0
}
function i5(f, c, a) {
    return i6(f, c, a) | 0 | 0
}
function i4() {
    jb()
    ap = new Array()
}
var ap = null
var eB = 0
var vT = new Uint8Array(65536)
var iU = 0
var iT = null
var aR = [null, null, null, null]
var $ = [
    {
        a0: ht,
        a1: ht,
    },
]
var aa = 0
var HEAP32 = null
var vR = new Uint16Array([32817, 32990, 32819, 32820, 32821, 32823, 222, 32825, 32816, 32824, 32955, 188, 189, 190, 191])
var vP = new Uint16Array([32954, 186, 32956, 187, 32958, 32959, 32818])
var vO = new Uint16Array([219, 220, 221, 32822, 32957, 192])
var vN = new Uint16Array([32987, 32988, 32989, 32960])
var iQ = new Uint8Array([73, 103, 110, 111, 114, 105, 110, 103, 32, 105, 110, 118, 97, 108, 105, 100, 32, 39, 109, 111, 117, 110, 116, 115, 39, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 44, 32, 102, 105, 114, 115, 116, 32, 101, 110, 116, 114, 121, 32, 105, 115, 32, 110, 111, 116, 32, 116, 104, 101, 32, 114, 111, 111, 116, 0])
var iP = new Uint8Array([73, 103, 110, 111, 114, 105, 110, 103, 32, 105, 110, 118, 97, 108, 105, 100, 32, 48, 45, 108, 101, 110, 103, 116, 104, 32, 39, 109, 111, 117, 110, 116, 115, 39, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 0])
var dg = new Uint8Array([100, 105, 114, 0])
var dh = new Uint8Array([47, 0])
var iO = null
var aQ = 0
var ca = null
var at = {
    a0: null,
    a1: vE,
    a2: vD,
    a3: uw,
}
var ac = 1
var N = {
    a0: nullArray,
    a0o: 0,
    a1: nullArray,
    a1o: 0,
    a2: {
        a0: nullArray,
        a0o: 0,
    },
}
var eA = {
    a0: null,
    a1: uV,
    a2: vD,
    a3: uw,
}
var W = [
    {
        a0: h8,
        a1: h8,
    },
]
var X = 0
var vQ = new Uint8Array([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 50, 48, 95, 95, 115, 105, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0])
var iD = new Uint8Array([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95, 99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0])
var vJ = new Uint8Array([78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 54, 95, 95, 115, 104, 105, 109, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0])
var vI = {
    a0: undefined,
    a1: n0,
    a2: nZ,
    a3: nY,
    a4: nX,
    a5: nW,
    a6: nV,
    a7: nU,
    a8: nT,
}
var vZ = new Uint8Array([83, 116, 57, 116, 121, 112, 101, 95, 105, 110, 102, 111, 0])
var vY = {
    a0: vI,
    a1: vZ,
}
var eD = {
    a0: undefined,
    a1: vJ,
    a2: vY,
}
var eC = {
    a0: undefined,
    a1: iD,
    a2: eD,
}
vI.a0 = eC
var vX = {
    a0: undefined,
    a1: vQ,
    a2: eC,
}
var vW = {
    a0: vX,
    a1: nP,
    a2: nO,
    a3: nY,
    a4: nX,
    a5: nW,
    a6: nN,
    a7: nM,
    a8: nL,
}
eD.a0 = vW
eC.a0 = vW
vX.a0 = vW
var vV = new Uint8Array([83, 116, 49, 50, 108, 101, 110, 103, 116, 104, 95, 101, 114, 114, 111, 114, 0])
var vU = new Uint8Array([83, 116, 49, 49, 108, 111, 103, 105, 99, 95, 101, 114, 114, 111, 114, 0])
var vH = new Uint8Array([83, 116, 57, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0])
var vG = {
    a0: vI,
    a1: vH,
}
var vF = {
    a0: vW,
    a1: vU,
    a2: vG,
}
var iC = {
    a0: vW,
    a1: vV,
    a2: vF,
}
var iB = null
var bQ = {
    a0: vF,
    a1: nE,
    a2: nF,
    a3: nG,
}
var iA = {
    a0: iC,
    a1: tq,
    a2: to,
    a3: nG,
}
var eu = {
    a0: null,
    a1: mi,
}
var HEAP8 = null
var HEAP16 = null
var iz = new Uint8Array([67, 112, 117, 32, 45, 32, 0])
var iy = new Uint8Array([84, 104, 114, 101, 97, 100, 32, 45, 32, 0])
var ix = new Uint8Array([84, 79, 68, 79, 58, 32, 83, 117, 112, 112, 111, 114, 116, 32, 101, 115, 99, 97, 112, 101, 32, 99, 111, 100, 101, 32, 37, 99, 10, 0])
var et = new Uint8Array([84, 79, 68, 79, 58, 32, 83, 117, 112, 112, 111, 114, 116, 32, 83, 71, 82, 32, 37, 105, 10, 0])
var iw = new Uint8Array([84, 79, 68, 79, 58, 32, 83, 117, 112, 112, 111, 114, 116, 32, 67, 83, 73, 32, 112, 97, 114, 97, 109, 32, 37, 99, 10, 0])
var vu = new Uint8Array(1032)
var ax = {
    i0: 5,
    a1: nullArray,
    a2: nullArray,
    a3: gj,
    a4: nullArray,
    a4o: 0,
    a5: nullArray,
    a5o: 0,
    a6: null,
    a7: nullArray,
    a7o: 0,
    a8: null,
    a9: n1,
    a10: gi,
    a11: vu,
    a11o: 8,
    i12: 1024,
    a13: null,
    a14: null,
    i15: 1,
    i16: 0,
    i17: 0,
    i18: 0,
    i19: -1,
    i20: 10,
    a21: null,
    a22: new Int32Array(6),
    a23: null,
    a24: null,
    a25: null,
    a26: null,
    a27: null,
    a28: null,
}
var vS = [null, null, null, null, null, null]
var a6 = {
    a0: null,
    a1: null,
    a2: null,
    a3: null,
    i4: 0,
    i5: 0,
    i6: 0,
    i7: 0,
    i8: 0,
    i9: 0,
    i10: 0,
    a11: null,
    i12: 0,
    a13: null,
    i14: 0,
    i15: 0,
    a16: null,
    a17: null,
    a18: null,
    a19: {
        a0: null,
        i1: 0,
        a2: null,
    },
    i20: 0,
    i21: 0,
    a22: vS[0],
    a23: [0],
    a24: null,
    a25: null,
}
var vt = new Uint8Array([25, 0, 10, 0, 25, 25, 25, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 17, 10, 25, 25, 25, 3, 10, 7, 0, 1, 27, 9, 11, 24, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 25, 0, 0, 0, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 10, 13, 25, 25, 25, 0, 13, 0, 0, 2, 0, 9, 14, 0, 0, 0, 9, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 19, 0, 0, 0, 0, 9, 12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 4, 15, 0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 0, 17, 0, 0, 0, 0, 9, 18, 0, 0, 0, 0, 0, 18, 0, 0, 18, 0, 0, 26, 0, 0, 0, 26, 26, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 0, 0, 0, 26, 26, 26, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 0, 0, 0, 0, 23, 0, 0, 0, 0, 9, 20, 0, 0, 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 0, 21, 0, 0, 0, 0, 9, 22, 0, 0, 0, 0, 0, 22, 0, 0, 22, 0, 0])
var dd = 0
var iM = new Uint8Array([40, 110, 117, 108, 108, 41, 0])
var iN = new Uint8Array([45, 43, 32, 32, 32, 48, 88, 48, 120, 0])
var iL = 0
var ez = null
var ey = 0
var iK = new Uint8Array([40, 99, 104, 32, 38, 32, 49, 57, 50, 41, 32, 61, 61, 32, 49, 50, 56, 0])
var df = 0
var iH = new Uint8Array([99, 104, 32, 60, 32, 49, 50, 56, 117, 0])
var iG = new Uint8Array([114, 101, 109, 97, 105, 110, 105, 110, 103, 32, 61, 61, 32, 48, 0])
var iJ = new Uint8Array([47, 98, 117, 105, 108, 100, 47, 99, 104, 101, 101, 114, 112, 45, 99, 111, 114, 101, 45, 118, 69, 72, 80, 101, 121, 47, 99, 104, 101, 101, 114, 112, 45, 99, 111, 114, 101, 45, 49, 55, 51, 50, 55, 56, 56, 56, 53, 53, 47, 99, 104, 101, 101, 114, 112, 45, 108, 105, 98, 115, 47, 115, 121, 115, 116, 101, 109, 47, 98, 114, 111, 119, 115, 101, 114, 46, 99, 112, 112, 0])
var iI = new Uint8Array([112, 114, 111, 99, 101, 115, 115, 67, 104, 97, 114, 0])
var vM = new Uint8Array(8)
var vL = {
    i0: 5,
    a1: nullArray,
    a2: nullArray,
    a3: gj,
    a4: nullArray,
    a4o: 0,
    a5: nullArray,
    a5o: 0,
    a6: null,
    a7: nullArray,
    a7o: 0,
    a8: null,
    a9: dR,
    a10: gi,
    a11: vM,
    a11o: 8,
    i12: 0,
    a13: null,
    a14: null,
    i15: 2,
    i16: 0,
    i17: 0,
    i18: 0,
    i19: -1,
    i20: -1,
    a21: null,
    a22: new Int32Array(6),
    a23: null,
    a24: null,
    a25: null,
    a26: null,
    a27: null,
    a28: null,
}
var iF = new Uint8Array([65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105, 108, 101, 100, 58, 32, 37, 115, 32, 40, 37, 115, 58, 32, 37, 115, 58, 32, 37, 100, 41, 10, 0])
var vK = 0
var ex = {
    a0: new Int32Array(16),
    a1: [nullObj, nullObj, nullObj, nullObj, nullObj, nullObj, nullObj, nullObj],
}
var ew = new Uint8Array([67, 111, 117, 108, 100, 32, 110, 111, 116, 32, 109, 111, 117, 110, 116, 32, 70, 83, 32, 116, 121, 112, 101, 58, 32, 37, 115, 44, 32, 109, 111, 117, 110, 116, 32, 112, 97, 116, 104, 58, 32, 37, 115, 10, 0])
var iE = new Uint8Array([114, 43, 0])
var iR = new Uint8Array([119, 0])
var iS = new Uint8Array([114, 0])
var de = {
    a0: null,
    a1: qd,
}
var ev = {
    a0: null,
    a1: sF,
}
var bA = null
var db = [
    {
        a0: gs,
        a1: gs,
    },
]
var dc = 0
var ct = {
    a0: null,
    a1: vE,
    a2: vD,
    a3: uw,
    a4: s$,
    a5: uv,
    a6: s_,
    a7: s9,
}
var ep = {
    a0: null,
    a1: vE,
    a2: t1,
    a3: vB,
    a4: vA,
    a5: uv,
    a6: uu,
    a7: ut,
}
var eo = new Uint8Array([67, 108, 101, 97, 114, 105, 110, 103, 32, 108, 111, 99, 97, 108, 32, 99, 97, 99, 104, 101, 32, 102, 111, 114, 32, 100, 101, 118, 105, 99, 101, 58, 32, 37, 115, 10, 0])
var en = {
    a0: null,
    a1: vE,
    a2: vD,
    a3: uw,
    a4: tB,
    a5: vl,
    a6: uu,
    a7: ut,
}
var em = {
    a0: null,
    a1: vE,
    a2: vD,
    a3: uw,
    a4: tN,
    a5: tM,
    a6: uu,
    a7: ut,
}
var es = {
    a0: null,
    a1: vE,
    a2: vD,
    a3: uw,
    a4: uo,
    a5: ua,
    a6: uu,
    a7: ut,
}
var er = {
    a0: null,
    a1: vE,
    a2: uf,
    a3: uw,
}
function yV() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: null,
    }
    this.a3 = null
    this.a4 = null
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.i8 = 0
    this.a9 = null
    this.i10 = 0
    this.a11 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a12 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a13 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i14 = 0
    wr(this)
}
function Aa() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    wN(this)
}
function yM() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = null
    wo(this)
}
function B1() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            a1: null,
        },
    }
    this.a3 = {
        i0: 0,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a4 = {
        i0: 0,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = null
    this.a10 = null
    this.a11 = null
    this.a12 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i13 = 0
    xj(this)
}
function yJ() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = null
    wl(this)
}
function z3() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.a4 = null
    this.a5 = null
    this.i6 = 0
    this.a7 = null
    this.a8 = null
    this.a9 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a10 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i11 = 0
    wJ(this)
}
function xB() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        i0: 0,
        i1: 0,
        i2: 0,
        a3: null,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a5 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a6 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a7 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a8 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a9 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a10 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a11 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i12 = 0
    this.a13 = [null]
    this.a14 = null
    this.a15 = null
    this.a16 = null
    this.a17 = null
    this.a18 = null
    this.a19 = null
    this.a20 = null
    this.a21 = null
    this.i22 = 0
    this.i23 = 0
    this.a24 = null
    this.a25 = null
    this.a26 = null
    this.a27 = null
    this.a28 = null
    this.a29 = null
    this.a30 = null
    this.a31 = null
    this.i32 = 0
    v4(this)
}
function Am() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.i7 = 0
    this.a8 = null
    wS(this)
}
function yL() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a5 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a6 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i7 = 0
    this.a8 = null
    this.a9 = null
    this.a10 = null
    this.a11 = null
    this.a12 = null
    this.a13 = null
    this.a14 = null
    this.a15 = null
    wn(this)
}
function yI() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        i0: 0,
        a1: null,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = null
    this.a10 = null
    this.a11 = null
    this.a12 = null
    wk(this)
}
function yK() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.i7 = 0
    this.i8 = 0
    this.a9 = null
    wm(this)
}
function zC() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.a8 = null
    this.i9 = 0
    this.a10 = null
    this.a11 = null
    this.a12 = null
    wz(this)
}
function zN() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a5 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i6 = 0
    this.i7 = 0
    this.i8 = 0
    this.a9 = null
    this.i10 = 0
    this.a11 = null
    this.a12 = null
    this.i13 = 0
    this.i14 = 0
    this.a15 = null
    wD(this)
}
function yF() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = null
    wj(this)
}
function zd() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: null,
        a1: null,
    }
    this.a4 = {
        a0: null,
        a1: null,
    }
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.i8 = 0
    this.a9 = null
    this.a10 = null
    this.a11 = null
    this.a12 = null
    wx(this)
}
function BP() {
    this.a0 = null
    this.a1 = null
    this.i2 = 0
    this.a3 = null
    this.a4 = null
    this.a5 = null
    this.i6 = 0
    this.i7 = 0
    this.a8 = null
    this.a9 = null
    this.a10 = null
}
function AB() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.i6 = 0
    this.a7 = null
    this.i8 = 0
    this.i9 = 0
    this.i10 = 0
    this.i11 = 0
    this.a12 = null
    this.a13 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i14 = 0
    w3(this)
}
function AE() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.i7 = 0
    this.i8 = 0
    this.a9 = null
    this.a10 = null
    this.a11 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i12 = 0
    w6(this)
}
function Ay() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.a4 = null
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.i8 = 0
    this.i9 = 0
    this.a10 = null
    this.a11 = null
    this.a12 = null
    this.a13 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a14 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i15 = 0
    w0(this)
}
function yE() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = null
    wi(this)
}
function AN() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a9 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a10 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i11 = 0
    xc(this)
}
function yB() {
    this.a0 = null
    this.a1 = null
    this.a2 = null
    this.a3 = null
    this.a4 = null
    this.a5 = null
    this.a6 = null
    this.i7 = 0
    this.a8 = null
    this.a9 = null
    this.a10 = [null]
    this.a11 = null
    this.a12 = null
    this.a13 = null
    this.a14 = null
    this.a15 = null
    this.a16 = null
    this.a17 = null
    this.a18 = null
    this.a19 = null
    this.a20 = null
    this.a21 = null
    this.a22 = null
    this.a23 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a24 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a25 = null
}
function Bc() {
    this.i0 = 0
    this.a1 = null
    this.a2 = null
    this.a3 = null
    this.a4 = null
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.i8 = 0
    this.a9 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a10 = [0]
    this.a11 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
}
function AP() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a5 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a6 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
    }
    this.a7 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a8 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a9 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a10 = new Uint8Array(2)
    this.i11 = 0
    this.a12 = [null]
    this.a13 = null
    this.a14 = null
    this.a15 = null
    this.a16 = null
    this.a17 = null
    this.i18 = 0
    this.a19 = null
    this.i20 = 0
    this.i21 = 0
    this.a22 = null
    this.a23 = null
    this.a24 = null
    this.a25 = null
    this.i26 = 0
    this.a27 = null
    this.a28 = null
    this.a29 = {
        i0: 0,
    }
    xd(this)
}
function Bj() {
    this.a0 = null
    this.a1 = null
    this.a2 = null
    this.a3 = null
    this.a4 = null
    this.a5 = null
    this.a6 = null
    this.i7 = 0
    this.a8 = null
    this.a9 = null
    this.a10 = [null]
    this.a11 = null
    this.a12 = null
    this.a13 = null
    this.a14 = null
    this.a15 = null
    this.a16 = null
    this.a17 = null
    this.a18 = null
    this.a19 = null
    this.a20 = null
    this.a21 = null
    this.a22 = null
    this.a23 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a24 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a25 = null
    this.a26 = null
    this.a27 = null
    this.a28 = null
    this.a29 = null
    this.a30 = null
    this.a31 = null
    this.a32 = null
    this.a33 = null
    this.a34 = null
    this.a35 = null
    this.a36 = null
    this.a37 = null
    this.a38 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a39 = null
    this.a40 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            i1: 0,
        },
        a2: {
            a0: null,
            a1: nullArray,
            a1o: 0,
            a2: nullArray,
            a2o: 0,
            a3: {
                a0: null,
            },
            i4: 0,
            i5: 0,
        },
    }
    this.i41 = 0
    this.a42 = {
        a0: null,
        a1: {
            a0: null,
        },
        i2: 0,
    }
    this.a43 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a44 = {
        a0: nullArray,
        a1: null,
        a2: {
            a0: null,
        },
    }
    this.a45 = {
        a0: nullArray,
        a1: nullArray,
        a1o: 0,
        a2: nullArray,
        a2o: 0,
        a3: {
            a0: nullArray,
            a0o: 0,
        },
        i4: 0,
        i5: 0,
        i6: 0,
        a7: {
            a0: nullArray,
            a0o: 0,
            a1: {
                i0: 0,
                i1: 0,
            },
        },
    }
    this.a46 = null
    this.a47 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a48 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
}
function xS() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.i8 = 0
    this.i9 = 0
    v_(this)
}
function AM() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
        a1: {
            i0: 0,
            a1: null,
        },
    }
    this.a3 = {
        i0: 0,
        i1: 0,
        a2: nullArray,
    }
    this.a4 = {
        a0: null,
    }
    this.a5 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i6 = 0
    this.i7 = 0
    this.a8 = null
    this.a9 = null
    this.a10 = nullArray
    this.a10o = 0
    this.a11 = null
    xb(this)
}
function zQ() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.a4 = null
    this.a5 = null
    this.a6 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a7 = {
        a0: null,
    }
    this.i8 = 0
    wE(this)
}
function zS() {
    this.a0 = null
    this.i1 = 0
    this.i2 = 0
    this.i3 = 0
    this.a4 = null
    this.a5 = null
    this.a6 = null
    this.a7 = {
        a0: nullArray,
        a0o: 0,
        i1: 0,
    }
    this.a8 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a9 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.a10 = {
        a0: nullArray,
        a0o: 0,
        a1: nullArray,
        a1o: 0,
        a2: {
            a0: nullArray,
            a0o: 0,
        },
    }
    this.i11 = 0
}
function yC() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = null
    this.a10 = null
    wh(this)
}
function yv() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: null,
        a1: null,
    }
    this.a4 = {
        a0: null,
        a1: null,
    }
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = null
    this.a10 = null
    wf(this)
}
function AD() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i10 = 0
    w5(this)
}
function z5() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: null,
        a1: null,
    }
    this.i4 = 0
    this.a5 = null
    this.a6 = null
    this.a7 = null
    this.a8 = null
    wL(this)
}
function AA() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.i6 = 0
    this.a7 = null
    this.i8 = 0
    this.i9 = 0
    this.i10 = 0
    this.i11 = 0
    this.a12 = null
    this.a13 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i14 = 0
    w2(this)
}
function AG() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i10 = 0
    w8(this)
}
function AF() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.i7 = 0
    this.i8 = 0
    this.a9 = null
    this.a10 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i11 = 0
    w7(this)
}
function AC() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.a7 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i8 = 0
    w4(this)
}
function Az() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.a4 = null
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.a8 = null
    this.i9 = 0
    this.i10 = 0
    this.i11 = 0
    this.a12 = null
    this.i13 = 0
    this.i14 = 0
    this.i15 = 0
    this.a16 = null
    this.a17 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a18 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i19 = 0
    w1(this)
}
function Ax() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.i8 = 0
    this.a9 = null
    this.a10 = null
    this.a11 = null
    this.a12 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i13 = 0
    wZ(this)
}
function AH() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.i4 = 0
    this.i5 = 0
    this.a6 = null
    this.a7 = null
    this.a8 = null
    this.a9 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a10 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i11 = 0
    w9(this)
}
function Bm() {
    this.a0 = nullArray
    this.a0o = 0
    this.a1 = null
    this.a2 = nullArray
    this.a2o = 0
    this.a3 = null
    this.a4 = null
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.a8 = nullObj
}
function xC() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a3 = null
    this.a4 = null
    this.i5 = 0
    this.a6 = null
    this.i7 = 0
    this.a8 = null
    this.a9 = null
    this.a10 = null
    this.i11 = 0
    this.a12 = null
    this.a13 = null
    this.i14 = 0
    this.a15 = null
    this.a16 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a17 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a18 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a19 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a20 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a21 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a22 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i23 = 0
    v5(this)
}
function xq() {
    this.a0 = null
    this.i1 = 0
    this.a2 = null
    this.i3 = 0
    this.a4 = null
    this.i5 = 0
    this.i6 = 0
    this.i7 = 0
    this.i8 = 0
    this.i9 = 0
    this.i10 = 0
    this.i11 = 0
    this.i12 = 0
    this.i13 = 0
    this.i14 = 0
    this.i15 = 0
}
function Ap() {
    this.a0 = null
    this.a1 = null
    this.a2 = {
        i0: 0,
    }
    this.a3 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a4 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a5 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a6 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a7 = {
        a0: nullArray,
        a0o: 0,
    }
    this.a8 = {
        a0: nullArray,
        a0o: 0,
    }
    this.i9 = 0
    this.i10 = 0
    this.a11 = null
    this.a12 = null
    this.a13 = null
    this.a14 = null
    this.a15 = null
    this.a16 = null
    this.i17 = 0
    this.a18 = null
    this.i19 = 0
    this.a20 = null
    this.i21 = 0
    this.i22 = 0
    wT(this)
}
function wh(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wL(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wr(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wq(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xf(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wo(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wO(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wk(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wP(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xj(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wG(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wH(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wl(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wn(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wE(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v4(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wX(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wS(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wC(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w9(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w5(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wp(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wd(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xc(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w7(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xd(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v3(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w4(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wK(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w0(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wT(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wR(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wN(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xg(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wa(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wV(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v7(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w$(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xk(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v9(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wf(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wc(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wx(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function ww(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xa(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v6(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wF(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wb(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xl(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w6(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wv(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wt(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wi(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wy(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v8(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function we(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wQ(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wI(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wW(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wJ(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w8(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wZ(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wz(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wB(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v2(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wU(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w3(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w1(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xi(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wA(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xe(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wY(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w_(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xb(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wu(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function w2(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wg(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wM(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wD(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wj(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function v5(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function ws(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function xh(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function wm(obj) {
    var a = []
    a[0] = obj
    obj.o = 0
    obj.a = a
    a[1] = obj.a2
    obj.a2.o = 1
    obj.a2.a = a
    return obj
}
function Ch(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            i0: 0,
            i1: 0,
            i2: 0,
            a3: null,
        }
    return r
}
function Cg(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            a0: new Int32Array(2),
            d1: -0,
            a2: nullArray,
            a2o: 0,
        }
    return r
}
function Cj(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            a0: nullArray,
            a0o: 0,
            a1: nullArray,
            a1o: 0,
            a2: {
                a0: nullArray,
                a0o: 0,
            },
            a3: null,
            i4: 0,
        }
    return r
}
function Cn(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            a0: null,
            a1: nullArray,
            a1o: 0,
            i2: 0,
            i3: 0,
            a4: null,
        }
    return r
}
function Cm(e) {
    var r = []
    for (var i = 0; i < e; i++) r[i] = new BP()
    return r
}
function Cl(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            i0: 0,
            i1: 0,
            a2: nullArray,
            a3: null,
            a4: {
                i0: 0,
                i1: 0,
                a2: nullArray,
            },
        }
    return r
}
function Ci(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            i0: 0,
            d1: -0,
        }
    return r
}
function Ck(e) {
    var r = []
    for (var i = 0; i < e; i++)
        r[i] = {
            i0: 0,
            a1: null,
        }
    return r
}
function Co(r, s, e) {
    for (var i = s; i < e; i++) r[i] = new BP()
    return r
}
function DD(r, s, e, v) {
    for (var i = s; i < e; i++) r[i] = v
    return r
}
function DB(func, obj) {
    return function (...args) {
        var a = Array.prototype.slice.call(args)
        a.unshift(obj)
        return func.apply(null, a)
    }
}
function DC(func, obj, objo) {
    return function (...args) {
        var a = Array.prototype.slice.call(args)
        a.unshift(obj, objo)
        return func.apply(null, a)
    }
}
function DJ(ptr) {
    var ret = ptr.d[ptr.o]
    ptr.o++
    return ret
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
var CheerpX = {
    BlockDevice: null,
    CheerpOSDevice: null,
    CloudDevice: null,
    DataDevice: null,
    Device: null,
    FileDevice: null,
    GitHubDevice: null,
    HttpBytesDevice: null,
    IDBDevice: null,
    Linux: null,
    OverlayDevice: null,
    System: null,
    UnixListener: null,
    WebDevice: null,
    copyFile: null,
}
CheerpX.BlockDevice = {}
CheerpX.CheerpOSDevice = {}
CheerpX.CloudDevice = {}
CheerpX.DataDevice = {}
CheerpX.Device = {}
CheerpX.FileDevice = {}
CheerpX.GitHubDevice = {}
CheerpX.HttpBytesDevice = {}
CheerpX.IDBDevice = {}
CheerpX.Linux = {}
CheerpX.OverlayDevice = {}
CheerpX.System = {}
CheerpX.UnixListener = {}
CheerpX.WebDevice = {}
CheerpX.copyFile = {}
var CheerpXProcess = {}
function __default(a) {
    CHEERP_ENV = (typeof a == "undefined" ? null : a.env) || null
    CHEERP_ARGV = (typeof a == "undefined" ? null : a.argv) || null
    return Promise.resolve().then((_) => {
        CheerpX.BlockDevice = function () {
            throw new Error("Class/Struct CheerpX.BlockDevice is abstract")
        }
        CheerpX.BlockDevice.prototype.delete = function () {
            return CR(this.this)
        }
        CheerpX.CheerpOSDevice = function () {
            this.this = Dj()
        }
        CheerpX.CheerpOSDevice.prototype.delete = function () {
            return Di(this.this)
        }
        CheerpX.CloudDevice = function () {
            throw new Error("Class/Struct CheerpX.CloudDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.CloudDevice.create = CQ
        CheerpX.CloudDevice.prototype.delete = function () {
            return CP(this.this)
        }
        CheerpX.DataDevice = function () {
            throw new Error("Class/Struct CheerpX.DataDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.DataDevice.create = CY
        CheerpX.DataDevice.prototype.delete = function () {
            return CX(this.this)
        }
        CheerpX.DataDevice.prototype.writeFile = function (a01, a1) {
            return CW(this.this, a01, a1)
        }
        CheerpX.Device = function (a02) {
            this.this = C3(a02)
        }
        CheerpX.Device.prototype.delete = function () {
            return Dg(this.this)
        }
        CheerpX.Device.wrap = C2
        CheerpX.FileDevice = function () {
            throw new Error("Class/Struct CheerpX.FileDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.FileDevice.create = function (a03, a1) {
            return CU(a03.this, a1)
        }
        CheerpX.FileDevice.prototype.delete = function () {
            return CT(this.this)
        }
        CheerpX.FileDevice.prototype.dumpDevice = function () {
            return CV(this.this)
        }
        CheerpX.GitHubDevice = function () {
            throw new Error("Class/Struct CheerpX.GitHubDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.GitHubDevice.create = CO
        CheerpX.GitHubDevice.prototype.delete = function () {
            return CN(this.this)
        }
        CheerpX.HttpBytesDevice = function () {
            throw new Error("Class/Struct CheerpX.HttpBytesDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.HttpBytesDevice.create = Dh
        CheerpX.HttpBytesDevice.prototype.delete = function () {
            return C9(this.this)
        }
        CheerpX.IDBDevice = function () {
            throw new Error("Class/Struct CheerpX.IDBDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.IDBDevice.create = Dc
        CheerpX.IDBDevice.prototype.createEmptyFile = function (a04, a1) {
            return De(this.this, a04, a1)
        }
        CheerpX.IDBDevice.prototype.delete = function () {
            return Db(this.this)
        }
        CheerpX.IDBDevice.prototype.dumpFile = function (a05) {
            return Da(this.this, a05)
        }
        CheerpX.IDBDevice.prototype.readFileAsBlob = function (a06) {
            return Df(this.this, a06)
        }
        CheerpX.IDBDevice.prototype.reset = function () {
            return Dd(this.this)
        }
        CheerpX.Linux = function () {
            throw new Error("Class/Struct CheerpX.Linux do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.Linux.create = Cw
        CheerpX.Linux.prototype.createHud = function () {
            return C4(this.this)
        }
        CheerpX.Linux.prototype.createUnixListener = function (a07) {
            return CA(this.this, a07)
        }
        CheerpX.Linux.prototype.delete = function () {
            return C5(this.this)
        }
        CheerpX.Linux.prototype.flushIO = function () {
            return Cv(this.this)
        }
        CheerpX.Linux.prototype.networkLogin = function () {
            return CF(this.this)
        }
        CheerpX.Linux.prototype.registerCallback = function (a08, a1) {
            return CD(this.this, a08, a1)
        }
        CheerpX.Linux.prototype.run = function (a09, a1, a2) {
            return Cx(this.this, a09, a1, a2)
        }
        CheerpX.Linux.prototype.setActivateConsole = function (a010) {
            return Cz(this.this, a010)
        }
        CheerpX.Linux.prototype.setConsole = function (a011) {
            return CG(this.this, a011)
        }
        CheerpX.Linux.prototype.setCustomConsole = function (a012, a1, a2) {
            return CC(this.this, a012, a1, a2)
        }
        CheerpX.Linux.prototype.setJITErrorCallback = function (a013) {
            return C8(this.this, a013)
        }
        CheerpX.Linux.prototype.setKmsCanvas = function (a014, a1, a2) {
            return CE(this.this, a014, a1, a2)
        }
        CheerpX.Linux.prototype.setOffscreenCanvasCallback = function (a015) {
            return C7(this.this, a015)
        }
        CheerpX.Linux.prototype.unregisterCallback = function (a016, a1) {
            return Cy(this.this, a016, a1)
        }
        CheerpX.Linux.prototype.useIFrameAsPortal = function (a017, a1, a2) {
            return CB(this.this, a017, a1, a2)
        }
        CheerpX.Linux.wrap = C6
        CheerpX.OverlayDevice = function () {
            throw new Error("Class/Struct CheerpX.OverlayDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.OverlayDevice.create = function (a018, a1) {
            return CL(a018.this, a1.this)
        }
        CheerpX.OverlayDevice.prototype.delete = function () {
            return CK(this.this)
        }
        CheerpX.OverlayDevice.prototype.dumpDevice = function () {
            return CM(this.this)
        }
        CheerpX.System = function () {
            this.this = Cu()
        }
        CheerpX.System.create = Cr
        CheerpX.System.prototype.createHud = function () {
            return Cp(this.this)
        }
        CheerpX.System.prototype.delete = function () {
            return Cq(this.this)
        }
        CheerpX.System.prototype.run = function (a019) {
            return Ct(this.this, a019)
        }
        CheerpX.System.wrap = Cs
        CheerpX.UnixListener = function () {
            throw new Error("Class/Struct CheerpX.UnixListener do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.UnixListener.prototype.accept = function () {
            return CH(this.this)
        }
        CheerpX.UnixListener.prototype.close = function () {
            return CI(this.this)
        }
        CheerpX.WebDevice = function () {
            throw new Error("Class/Struct CheerpX.WebDevice do not have a [[cheerp::jsexport]]-ed constructor")
        }
        CheerpX.WebDevice.create = C$
        CheerpX.WebDevice.prototype.delete = function () {
            return C_(this.this)
        }
        CheerpX.copyFile = C1
        CheerpXProcess = function (a020) {
            this.this = C0(a020)
        }
        CheerpXProcess.prototype.delete = function () {
            return CZ(this.this)
        }
        CheerpXProcess.prototype.setSignalHandlers = function (a021) {
            return CJ(this.this, a021)
        }
        Object.setPrototypeOf(CheerpX.BlockDevice.prototype, CheerpX.Device.prototype)
        Object.setPrototypeOf(CheerpX.CheerpOSDevice.prototype, CheerpX.Device.prototype)
        Object.setPrototypeOf(CheerpX.CloudDevice.prototype, CheerpX.BlockDevice.prototype)
        Object.setPrototypeOf(CheerpX.DataDevice.prototype, CheerpX.CheerpOSDevice.prototype)
        Object.setPrototypeOf(CheerpX.FileDevice.prototype, CheerpX.BlockDevice.prototype)
        Object.setPrototypeOf(CheerpX.GitHubDevice.prototype, CheerpX.BlockDevice.prototype)
        Object.setPrototypeOf(CheerpX.HttpBytesDevice.prototype, CheerpX.BlockDevice.prototype)
        Object.setPrototypeOf(CheerpX.IDBDevice.prototype, CheerpX.CheerpOSDevice.prototype)
        Object.setPrototypeOf(CheerpX.OverlayDevice.prototype, CheerpX.BlockDevice.prototype)
        Object.setPrototypeOf(CheerpX.WebDevice.prototype, CheerpX.CheerpOSDevice.prototype)
        i4()
        var DI = {
            CheerpX: CheerpX,
            CheerpXProcess: CheerpXProcess,
        }
        return DI
    })
}
const CheerpX1 = (await __default()).CheerpX
const Linux = CheerpX1.Linux
const HttpBytesDevice = CheerpX1.HttpBytesDevice
const CloudDevice = CheerpX1.CloudDevice
const GitHubDevice = CheerpX1.GitHubDevice
const IDBDevice = CheerpX1.IDBDevice
const WebDevice = CheerpX1.WebDevice
const DataDevice = CheerpX1.DataDevice
const OverlayDevice = CheerpX1.OverlayDevice
const System = CheerpX1.System
export { Linux as Linux }
export { HttpBytesDevice as HttpBytesDevice }
export { CloudDevice as CloudDevice }
export { GitHubDevice as GitHubDevice }
export { IDBDevice as IDBDevice }
export { WebDevice as WebDevice }
export { DataDevice as DataDevice }
export { OverlayDevice as OverlayDevice }
export { System as System }