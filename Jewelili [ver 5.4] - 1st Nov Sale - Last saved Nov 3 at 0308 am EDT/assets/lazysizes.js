/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function (d) { b(a.lazySizes, d), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c, d) { "use strict"; function e(a) { var b = getComputedStyle(a, null) || {}, c = b.fontFamily || "", d = c.match(j) || "", e = d && c.match(k) || ""; return e && (e = e[1]), { fit: d && d[1] || "", position: n[e] || e || "center" } } function f(a, b) { var d, e, f = c.cfg, g = a.cloneNode(!1), h = g.style, i = function () { var b = a.currentSrc || a.src; b && e !== b && (e = b, h.backgroundImage = "url(" + (m.test(b) ? JSON.stringify(b) : b) + ")", d || (d = !0, c.rC(g, f.loadingClass), c.aC(g, f.loadedClass))) }, j = function () { c.rAF(i) }; a._lazysizesParentFit = b.fit, a.addEventListener("lazyloaded", j, !0), a.addEventListener("load", j, !0), g.addEventListener("load", function () { var a = g.currentSrc || g.src; a && a != l && (g.src = l, g.srcset = "") }), c.rAF(function () { var d = a, e = a.parentNode; "PICTURE" == e.nodeName.toUpperCase() && (d = e, e = e.parentNode), c.rC(g, f.loadedClass), c.rC(g, f.lazyClass), c.aC(g, f.loadingClass), c.aC(g, f.objectFitClass || "lazysizes-display-clone"), g.getAttribute(f.srcsetAttr) && g.setAttribute(f.srcsetAttr, ""), g.getAttribute(f.srcAttr) && g.setAttribute(f.srcAttr, ""), g.src = l, g.srcset = "", h.backgroundRepeat = "no-repeat", h.backgroundPosition = b.position, h.backgroundSize = b.fit, d.style.display = "none", a.setAttribute("data-parent-fit", b.fit), a.setAttribute("data-parent-container", "prev"), e.insertBefore(g, d), a._lazysizesParentFit && delete a._lazysizesParentFit, a.complete && i() }) } var g = b.createElement("a").style, h = "objectFit" in g, i = h && "objectPosition" in g, j = /object-fit["']*\s*:\s*["']*(contain|cover)/, k = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/, l = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", m = /\(|\)|'/, n = { center: "center", "50% 50%": "center" }; if (!h || !i) { var o = function (a) { if (a.detail.instance == c) { var b = a.target, d = e(b); !d.fit || h && "center" == d.position || f(b, d) } }; a.addEventListener("lazyunveilread", o, !0), d && d.detail && o(d) } });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; function d(b, c) { var d, e, f, g, h = a.getComputedStyle(b); e = b.parentNode, g = { isPicture: !(!e || !m.test(e.nodeName || "")) }, f = function (a, c) { var d = b.getAttribute("data-" + a); if (!d) { var e = h.getPropertyValue("--ls-" + a); e && (d = e.trim()) } if (d) { if ("true" == d) d = !0; else if ("false" == d) d = !1; else if (l.test(d)) d = parseFloat(d); else if ("function" == typeof j[a]) d = j[a](b, d); else if (q.test(d)) try { d = JSON.parse(d) } catch (a) { } g[a] = d } else a in j && "function" != typeof j[a] ? g[a] = j[a] : c && "function" == typeof j[a] && (g[a] = j[a](b, d)) }; for (d in j) f(d); return c.replace(p, function (a, b) { b in g || f(b, !0) }), g } function e(a, b) { var c = [], d = function (a, c) { return k[typeof b[c]] ? b[c] : a }; return c.srcset = [], b.absUrl && (s.setAttribute("href", a), a = s.href), a = ((b.prefix || "") + a + (b.postfix || "")).replace(p, d), b.widths.forEach(function (d) { var e = b.widthmap[d] || d, f = b.aspectratio || b.ratio, g = !b.aspectratio && j.traditionalRatio, h = { u: a.replace(n, e).replace(o, f ? g ? Math.round(d * f) : Math.round(d / f) : ""), w: d }; c.push(h), c.srcset.push(h.c = h.u + " " + d + "w") }), c } function f(a, c, d) { var f = 0, g = 0, h = d; if (a) { if ("container" === c.ratio) { for (f = h.scrollWidth, g = h.scrollHeight; !(f && g || h === b);)h = h.parentNode, f = h.scrollWidth, g = h.scrollHeight; f && g && (c.ratio = g / f) } a = e(a, c), a.isPicture = c.isPicture, u && "IMG" == d.nodeName.toUpperCase() ? d.removeAttribute(i.srcsetAttr) : d.setAttribute(i.srcsetAttr, a.srcset.join(", ")), Object.defineProperty(d, "_lazyrias", { value: a, writable: !0 }) } } function g(a, b) { var e = d(a, b); return j.modifyOptions.call(a, { target: a, details: e, detail: e }), c.fire(a, "lazyriasmodifyoptions", e), e } function h(a) { return a.getAttribute(a.getAttribute("data-srcattr") || j.srcAttr) || a.getAttribute(i.srcsetAttr) || a.getAttribute(i.srcAttr) || a.getAttribute("data-pfsrcset") || "" } var i, j, k = { string: 1, number: 1 }, l = /^\-*\+*\d+\.*\d*$/, m = /^picture$/i, n = /\s*\{\s*width\s*\}\s*/i, o = /\s*\{\s*height\s*\}\s*/i, p = /\s*\{\s*([a-z0-9]+)\s*\}\s*/gi, q = /^\[.*\]|\{.*\}$/, r = /^(?:auto|\d+(px)?)$/, s = b.createElement("a"), t = b.createElement("img"), u = "srcset" in t && !("sizes" in t), v = !!a.HTMLPictureElement && !u; !function () { var b, d = function () { }, e = { prefix: "", postfix: "", srcAttr: "data-src", absUrl: !1, modifyOptions: d, widthmap: {}, ratio: !1, traditionalRatio: !1, aspectratio: !1 }; i = c && c.cfg || a.lazySizesConfig, i || (i = {}, a.lazySizesConfig = i), i.supportsType || (i.supportsType = function (a) { return !a }), i.rias || (i.rias = {}), "widths" in (j = i.rias) || (j.widths = [], function (a) { for (var b, c = 0; !b || b < 3e3;)c += 5, c > 30 && (c += 1), b = 36 * c, a.push(b) }(j.widths)); for (b in e) b in j || (j[b] = e[b]) }(), addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c) { var b, d, e, k, l, m, o, p, q, s, t, u, x; if (b = a.target, a.detail.dataAttr && !a.defaultPrevented && !j.disabled && (q = b.getAttribute(i.sizesAttr) || b.getAttribute("sizes")) && r.test(q)) { if (d = h(b), e = g(b, d), t = n.test(e.prefix) || n.test(e.postfix), e.isPicture && (k = b.parentNode)) for (l = k.getElementsByTagName("source"), m = 0, o = l.length; m < o; m++)(t || n.test(p = h(l[m]))) && (f(p, e, l[m]), u = !0); t || n.test(d) ? (f(d, e, b), u = !0) : u && (x = [], x.srcset = [], x.isPicture = !0, Object.defineProperty(b, "_lazyrias", { value: x, writable: !0 })), u && (v ? b.removeAttribute(i.srcAttr) : "auto" != q && (s = { width: parseInt(q, 10) }, w({ target: b, detail: s }))) } } }, !0); var w = function () { var d = function (a, b) { return a.w - b.w }, e = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, f = function (a, b) { var d; return !a._lazyrias && c.pWS && (d = c.pWS(a.getAttribute(i.srcsetAttr || ""))).length && (Object.defineProperty(a, "_lazyrias", { value: d, writable: !0 }), b && a.parentNode && (d.isPicture = "PICTURE" == a.parentNode.nodeName.toUpperCase())), a._lazyrias }, g = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.4, d) }, h = function (b, c) { var h, i, j, k, l, m; if (l = b._lazyrias, l.isPicture && a.matchMedia) for (i = 0, h = b.parentNode.getElementsByTagName("source"), j = h.length; i < j; i++)if (f(h[i]) && !h[i].getAttribute("type") && (!(k = h[i].getAttribute("media")) || (matchMedia(k) || {}).matches)) { l = h[i]._lazyrias; break } return (!l.w || l.w < c) && (l.w = c, l.d = g(b), m = e(l.sort(d))), m }, j = function (d) { if (d.detail.instance == c) { var e, g = d.target; if (!u && (a.respimage || a.picturefill || lazySizesConfig.pf)) return void b.removeEventListener("lazybeforesizes", j); ("_lazyrias" in g || d.detail.dataAttr && f(g, !0)) && (e = h(g, d.detail.width)) && e.u && g._lazyrias.cur != e.u && (g._lazyrias.cur = e.u, e.cached = !0, c.rAF(function () { g.setAttribute(i.srcAttr, e.u), g.setAttribute("src", e.u) })) } }; return v ? j = function () { } : addEventListener("lazybeforesizes", j), j }() });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = b(a, a.document); a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c) }(window, function (a, b) { "use strict"; if (b.getElementsByClassName) { var c, d, e = b.documentElement, f = a.Date, g = a.HTMLPictureElement, h = "addEventListener", i = "getAttribute", j = a[h], k = a.setTimeout, l = a.requestAnimationFrame || k, m = a.requestIdleCallback, n = /^picture$/i, o = ["load", "error", "lazyincluded", "_lazyloaded"], p = {}, q = Array.prototype.forEach, r = function (a, b) { return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b] }, s = function (a, b) { r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b) }, t = function (a, b) { var c; (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " ")) }, u = function (a, b, c) { var d = c ? h : "removeEventListener"; c && u(a, b), o.forEach(function (c) { a[d](c, b) }) }, v = function (a, d, e, f, g) { var h = b.createEvent("Event"); return e || (e = {}), e.instance = c, h.initEvent(d, !f, !g), h.detail = e, a.dispatchEvent(h), h }, w = function (b, c) { var e; !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({ reevaluate: !0, elements: [b] })) : c && c.src && (b.src = c.src) }, x = function (a, b) { return (getComputedStyle(a, null) || {})[b] }, y = function (a, b, c) { for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;)c = b.offsetWidth, b = b.parentNode; return c }, z = function () { var a, c, d = [], e = [], f = d, g = function () { var b = f; for (f = d.length ? e : d, a = !0, c = !1; b.length;)b.shift()(); a = !1 }, h = function (d, e) { a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g))) }; return h._lsFlush = g, h }(), A = function (a, b) { return b ? function () { z(a) } : function () { var b = this, c = arguments; z(function () { a.apply(b, c) }) } }, B = function (a) { var b, c = 0, e = d.throttleDelay, g = d.ricTimeout, h = function () { b = !1, c = f.now(), a() }, i = m && g > 49 ? function () { m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout) } : A(function () { k(h) }, !0); return function (a) { var d; (a = !0 === a) && (g = 33), b || (b = !0, d = e - (f.now() - c), d < 0 && (d = 0), a || d < 9 ? i() : k(i, d)) } }, C = function (a) { var b, c, d = 99, e = function () { b = null, a() }, g = function () { var a = f.now() - c; a < d ? k(g, d - a) : (m || e)(e) }; return function () { c = f.now(), b || (b = k(g, d)) } }; !function () { var b, c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 0, throttleDelay: 125 }; d = a.lazySizesConfig || a.lazysizesConfig || {}; for (b in c) b in d || (d[b] = c[b]); a.lazySizesConfig = d, k(function () { d.init && F() }) }(); var D = function () { var g, l, m, o, p, y, D, F, G, H, I, J, K = /^img$/i, L = /^iframe$/i, M = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent), N = 0, O = 0, P = 0, Q = -1, R = function (a) { P-- , (!a || P < 0 || !a.target) && (P = 0) }, S = function (a) { return null == J && (J = "hidden" == x(b.body, "visibility")), J || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility") }, T = function (a, c) { var d, f = a, g = S(a); for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;)(g = (x(f, "opacity") || 1) > 0) && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1); return g }, U = function () { var a, f, h, j, k, m, n, p, q, r, s, t, u = c.elements; if ((o = d.loadMode) && P < 8 && (a = u.length)) { for (f = 0, Q++; f < a; f++)if (u[f] && !u[f]._lazyRace) if (!M || c.prematureUnveil && c.prematureUnveil(u[f])) aa(u[f]); else if ((p = u[f][i]("data-expand")) && (m = 1 * p) || (m = O), r || (r = !d.expand || d.expand < 1 ? e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370 : d.expand, c._defEx = r, s = r * d.expFactor, t = d.hFac, J = null, O < s && P < 1 && Q > 2 && o > 2 && !b.hidden ? (O = s, Q = 0) : O = o > 1 && Q > 1 && P < 6 ? r : N), q !== m && (y = innerWidth + m * t, D = innerHeight + m, n = -1 * m, q = m), h = u[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * t && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || S(u[f])) && (l && P < 3 && !p && (o < 3 || Q < 4) || T(u[f], m))) { if (aa(u[f]), k = !0, P > 9) break } else !k && l && !j && P < 4 && Q < 4 && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != u[f][i](d.sizesAttr))) && (j = g[0] || u[f]); j && !k && aa(j) } }, V = B(U), W = function (a) { var b = a.target; if (b._lazyCache) return void delete b._lazyCache; R(a), s(b, d.loadedClass), t(b, d.loadingClass), u(b, Y), v(b, "lazyloaded") }, X = A(W), Y = function (a) { X({ target: a.target }) }, Z = function (a, b) { try { a.contentWindow.location.replace(b) } catch (c) { a.src = b } }, $ = function (a) { var b, c = a[i](d.srcsetAttr); (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c) }, _ = A(function (a, b, c, e, f) { var g, h, j, l, o, p; (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, s(a, d.loadingClass), p && (clearTimeout(m), m = k(R, 2500), u(a, Y, !0)), l && q.call(j.getElementsByTagName("source"), $), h ? a.setAttribute("srcset", h) : g && !l && (L.test(a.nodeName) ? Z(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () { var b = a.complete && a.naturalWidth > 1; p && !b || (b && s(a, "ls-is-cached"), W(o), a._lazyCache = !0, k(function () { "_lazyCache" in a && delete a._lazyCache }, 9)), "lazy" == a.loading && P-- }, !0) }), aa = function (a) { if (!a._lazyRace) { var b, c = K.test(a.nodeName), e = c && (a[i](d.sizesAttr) || a[i]("sizes")), f = "auto" == e; (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, P++ , _(a, b, f, e, c)) } }, ba = C(function () { d.loadMode = 3, V() }), ca = function () { 3 == d.loadMode && (d.loadMode = 2), ba() }, da = function () { if (!l) { if (f.now() - p < 999) return void k(da, 999); l = !0, d.loadMode = 3, V(), j("scroll", ca, !0) } }; return { _: function () { p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), j("scroll", V, !0), j("resize", V, !0), a.MutationObserver ? new MutationObserver(V).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", V, !0), e[h]("DOMAttrModified", V, !0), setInterval(V, 999)), j("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) { b[h](a, V, !0) }), /d$|^c/.test(b.readyState) ? da() : (j("load", da), b[h]("DOMContentLoaded", V), k(da, 2e4)), c.elements.length ? (U(), z._lsFlush()) : V() }, checkElems: V, unveil: aa, _aLSL: ca } }(), E = function () { var a, c = A(function (a, b, c, d) { var e, f, g; if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; f < g; f++)e[f].setAttribute("sizes", d); c.detail.dataAttr || w(a, c.detail) }), e = function (a, b, d) { var e, f = a.parentNode; f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width) && d !== a._lazysizesWidth && c(a, f, e, d)) }, f = function () { var b, c = a.length; if (c) for (b = 0; b < c; b++)e(a[b]) }, g = C(f); return { _: function () { a = b.getElementsByClassName(d.autosizesClass), j("resize", g) }, checkElems: g, updateElem: e } }(), F = function () { F.i || (F.i = !0, E._(), D._()) }; return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z } } });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; if (a.addEventListener) { var d = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, e = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/, f = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, g = /^picture$/i, h = function (a) { return getComputedStyle(a, null) || {} }, i = { getParent: function (b, c) { var d = b, e = b.parentNode; return c && "prev" != c || !e || !g.test(e.nodeName || "") || (e = e.parentNode), "self" != c && (d = "prev" == c ? b.previousElementSibling : c && (e.closest || a.jQuery) ? (e.closest ? e.closest(c) : jQuery(e).closest(c)[0]) || e : e), d }, getFit: function (a) { var b, c, d = h(a), g = d.content || d.fontFamily, j = { fit: a._lazysizesParentFit || a.getAttribute("data-parent-fit") }; return !j.fit && g && (b = g.match(e)) && (j.fit = b[1]), j.fit ? (c = a._lazysizesParentContainer || a.getAttribute("data-parent-container"), !c && g && (b = g.match(f)) && (c = b[1]), j.parent = i.getParent(a, c)) : j.fit = d.objectFit, j }, getImageRatio: function (b) { var c, e, f, h, i, j, k, l = b.parentNode, m = l && g.test(l.nodeName || "") ? l.querySelectorAll("source, img") : [b]; for (c = 0; c < m.length; c++)if (b = m[c], e = b.getAttribute(lazySizesConfig.srcsetAttr) || b.getAttribute("srcset") || b.getAttribute("data-pfsrcset") || b.getAttribute("data-risrcset") || "", f = b._lsMedia || b.getAttribute("media"), f = lazySizesConfig.customMedia[b.getAttribute("data-media") || f] || f, e && (!f || (a.matchMedia && matchMedia(f) || {}).matches)) { h = parseFloat(b.getAttribute("data-aspectratio")), h || (i = e.match(d), i ? "w" == i[2] ? (j = i[1], k = i[3]) : (j = i[3], k = i[1]) : (j = b.getAttribute("width"), k = b.getAttribute("height")), h = j / k); break } return h }, calculateSize: function (a, b) { var c, d, e, f, g = this.getFit(a), h = g.fit, i = g.parent; return "width" == h || ("contain" == h || "cover" == h) && (e = this.getImageRatio(a)) ? (i ? b = i.clientWidth : i = a, f = b, "width" == h ? f = b : (d = i.clientHeight) > 40 && (c = b / d) && ("cover" == h && c < e || "contain" == h && c > e) && (f = b * (e / c)), f) : b } }; c.parentFit = i, b.addEventListener("lazybeforesizes", function (a) { if (!a.defaultPrevented && a.detail.instance == c) { var b = a.target; a.detail.width = i.calculateSize(b, a.detail.width) } }) } });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; var d, e = c && c.cfg, f = b.createElement("img"), g = "sizes" in f && "srcset" in f, h = /\s+\d+h/g, i = function () { var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, d = Array.prototype.forEach; return function () { var e = b.createElement("img"), f = function (b) { var c, d, e = b.getAttribute(lazySizesConfig.srcsetAttr); e && (d = e.match(a)) && (c = "w" == d[2] ? d[1] / d[3] : d[3] / d[1], c && b.setAttribute("data-aspectratio", c), b.setAttribute(lazySizesConfig.srcsetAttr, e.replace(h, ""))) }, g = function (a) { if (a.detail.instance == c) { var b = a.target.parentNode; b && "PICTURE" == b.nodeName && d.call(b.getElementsByTagName("source"), f), f(a.target) } }, i = function () { e.currentSrc && b.removeEventListener("lazybeforeunveil", g) }; b.addEventListener("lazybeforeunveil", g), e.onload = i, e.onerror = i, e.srcset = "data:,a 1w 1h", e.complete && i() } }(); if (e.supportsType || (e.supportsType = function (a) { return !a }), a.HTMLPictureElement && g) return void (!c.hasHDescriptorFix && b.msElementsFromPoint && (c.hasHDescriptorFix = !0, i())); a.picturefill || e.pf || (e.pf = function (b) { var c, e; if (!a.picturefill) for (c = 0, e = b.elements.length; c < e; c++)d(b.elements[c]) }, d = function () { var f = function (a, b) { return a.w - b.w }, i = /^\s*\d+\.*\d*px\s*$/, j = function (a) { var b, c, d = a.length, e = a[d - 1], f = 0; for (f; f < d; f++)if (e = a[f], e.d = e.w / a.w, e.d >= a.d) { !e.cached && (b = a[f - 1]) && b.d > a.d - .13 * Math.pow(a.d, 2.2) && (c = Math.pow(b.d - .6, 1.6), b.cached && (b.d += .15 * c), b.d + (e.d - a.d) * c > a.d && (e = b)); break } return e }, k = function () { var a, b = /(([^,\s].[^\s]+)\s+(\d+)w)/g, c = /\s/, d = function (b, c, d, e) { a.push({ c: c, u: d, w: 1 * e }) }; return function (e) { return a = [], e = e.trim(), e.replace(h, "").replace(b, d), a.length || !e || c.test(e) || a.push({ c: e, u: e, w: 99 }), a } }(), l = function () { l.init || (l.init = !0, addEventListener("resize", function () { var a, c = b.getElementsByClassName("lazymatchmedia"), e = function () { var a, b; for (a = 0, b = c.length; a < b; a++)d(c[a]) }; return function () { clearTimeout(a), a = setTimeout(e, 66) } }())) }, m = function (b, d) { var f, g = b.getAttribute("srcset") || b.getAttribute(e.srcsetAttr); !g && d && (g = b._lazypolyfill ? b._lazypolyfill._set : b.getAttribute(e.srcAttr) || b.getAttribute("src")), b._lazypolyfill && b._lazypolyfill._set == g || (f = k(g || ""), d && b.parentNode && (f.isPicture = "PICTURE" == b.parentNode.nodeName.toUpperCase(), f.isPicture && a.matchMedia && (c.aC(b, "lazymatchmedia"), l())), f._set = g, Object.defineProperty(b, "_lazypolyfill", { value: f, writable: !0 })) }, n = function (b) { var d = a.devicePixelRatio || 1, e = c.getX && c.getX(b); return Math.min(e || d, 2.5, d) }, o = function (b) { return a.matchMedia ? (o = function (a) { return !a || (matchMedia(a) || {}).matches })(b) : !b }, p = function (a) { var b, d, g, h, k, l, p; if (h = a, m(h, !0), k = h._lazypolyfill, k.isPicture) for (d = 0, b = a.parentNode.getElementsByTagName("source"), g = b.length; d < g; d++)if (e.supportsType(b[d].getAttribute("type"), a) && o(b[d].getAttribute("media"))) { h = b[d], m(h), k = h._lazypolyfill; break } return k.length > 1 ? (p = h.getAttribute("sizes") || "", p = i.test(p) && parseInt(p, 10) || c.gW(a, a.parentNode), k.d = n(a), !k.src || !k.w || k.w < p ? (k.w = p, l = j(k.sort(f)), k.src = l) : l = k.src) : l = k[0], l }, q = function (a) { if (!g || !a.parentNode || "PICTURE" == a.parentNode.nodeName.toUpperCase()) { var b = p(a); b && b.u && a._lazypolyfill.cur != b.u && (a._lazypolyfill.cur = b.u, b.cached = !0, a.setAttribute(e.srcAttr, b.u), a.setAttribute("src", b.u)) } }; return q.parse = k, q }(), e.loadedClass && e.loadingClass && function () { var a = [];['img[sizes$="px"][srcset].', "picture > img:not([srcset])."].forEach(function (b) { a.push(b + e.loadedClass), a.push(b + e.loadingClass) }), e.pf({ elements: b.querySelectorAll(a.join(", ")) }) }()) });
/*! lazysizes - v4.1.8 */
!function (a, b) { var c = function () { b(a.lazySizes), a.removeEventListener("lazyunveilread", c, !0) }; b = b.bind(null, a, a.document), "object" == typeof module && module.exports ? b(require("lazysizes")) : a.lazySizes ? c() : a.addEventListener("lazyunveilread", c, !0) }(window, function (a, b, c) { "use strict"; if (a.addEventListener) { var d = /\s+/g, e = /\s*\|\s+|\s+\|\s*/g, f = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/, g = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/, h = /\(|\)|'/, i = { contain: 1, cover: 1 }, j = function (a) { var b = c.gW(a, a.parentNode); return (!a._lazysizesWidth || b > a._lazysizesWidth) && (a._lazysizesWidth = b), a._lazysizesWidth }, k = function (a) { var b; return b = (getComputedStyle(a) || { getPropertyValue: function () { } }).getPropertyValue("background-size"), !i[b] && i[a.style.backgroundSize] && (b = a.style.backgroundSize), b }, l = function (a, b) { if (b) { var c = b.match(g); c && c[1] ? a.setAttribute("type", c[1]) : a.setAttribute("media", lazySizesConfig.customMedia[b] || b) } }, m = function (a, c, g) { var h = b.createElement("picture"), i = c.getAttribute(lazySizesConfig.sizesAttr), j = c.getAttribute("data-ratio"), k = c.getAttribute("data-optimumx"); c._lazybgset && c._lazybgset.parentNode == c && c.removeChild(c._lazybgset), Object.defineProperty(g, "_lazybgset", { value: c, writable: !0 }), Object.defineProperty(c, "_lazybgset", { value: h, writable: !0 }), a = a.replace(d, " ").split(e), h.style.display = "none", g.className = lazySizesConfig.lazyClass, 1 != a.length || i || (i = "auto"), a.forEach(function (a) { var c, d = b.createElement("source"); i && "auto" != i && d.setAttribute("sizes", i), (c = a.match(f)) ? (d.setAttribute(lazySizesConfig.srcsetAttr, c[1]), l(d, c[2]), l(d, c[3])) : d.setAttribute(lazySizesConfig.srcsetAttr, a), h.appendChild(d) }), i && (g.setAttribute(lazySizesConfig.sizesAttr, i), c.removeAttribute(lazySizesConfig.sizesAttr), c.removeAttribute("sizes")), k && g.setAttribute("data-optimumx", k), j && g.setAttribute("data-ratio", j), h.appendChild(g), c.appendChild(h) }, n = function (a) { if (a.target._lazybgset) { var b = a.target, d = b._lazybgset, e = b.currentSrc || b.src; if (e) { var f = c.fire(d, "bgsetproxy", { src: e, useSrc: h.test(e) ? JSON.stringify(e) : e }); f.defaultPrevented || (d.style.backgroundImage = "url(" + f.detail.useSrc + ")") } b._lazybgsetLoading && (c.fire(d, "_lazyloaded", {}, !1, !0), delete b._lazybgsetLoading) } }; addEventListener("lazybeforeunveil", function (a) { var d, e, f; !a.defaultPrevented && (d = a.target.getAttribute("data-bgset")) && (f = a.target, e = b.createElement("img"), e.alt = "", e._lazybgsetLoading = !0, a.detail.firesLoad = !0, m(d, f, e), setTimeout(function () { c.loader.unveil(e), c.rAF(function () { c.fire(e, "_lazyloaded", {}, !0, !0), e.complete && n({ target: e }) }) })) }), b.addEventListener("load", n, !0), a.addEventListener("lazybeforesizes", function (a) { if (a.detail.instance == c && a.target._lazybgset && a.detail.dataAttr) { var b = a.target._lazybgset, d = k(b); i[d] && (a.target._lazysizesParentFit = d, c.rAF(function () { a.target.setAttribute("data-parent-fit", d), a.target._lazysizesParentFit && delete a.target._lazysizesParentFit })) } }, !0), b.documentElement.addEventListener("lazybeforesizes", function (a) { !a.defaultPrevented && a.target._lazybgset && a.detail.instance == c && (a.detail.width = j(a.target._lazybgset)) }) } });



(function(window, factory) {
  var globalInstall = function(){
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if(typeof module == 'object' && module.exports){
    factory(require('lazysizes'));
  } else if (typeof define == 'function' && define.amd) {
    define(['lazysizes'], factory);
  } else if(window.lazySizes) {
    globalInstall();
  } else {
    window.addEventListener('lazyunveilread', globalInstall, true);
  }
}(window, function(window, document, lazySizes) {
  /*jshint eqnull:true */
  'use strict';
  var bgLoad, regBgUrlEscape;
  var uniqueUrls = {};

  if(document.addEventListener){
    regBgUrlEscape = /\(|\)|\s|'/;

    bgLoad = function (url, cb){
      var img = document.createElement('img');
      img.onload = function(){
        img.onload = null;
        img.onerror = null;
        img = null;
        cb();
      };
      img.onerror = img.onload;

      img.src = url;

      if(img && img.complete && img.onload){
        img.onload();
      }
    };

    addEventListener('lazybeforeunveil', function(e){
      if(e.detail.instance != lazySizes){return;}

      var tmp, load, bg, poster;
      if(!e.defaultPrevented) {

        var target = e.target;

        if(target.preload == 'none'){
          target.preload = target.getAttribute('data-preload') || 'auto';
        }

        if (target.getAttribute('data-autoplay') != null) {
          if (target.getAttribute('data-expand') && !target.autoplay) {
            try {
              target.play();
            } catch (er) {}
          } else {
            requestAnimationFrame(function () {
              target.setAttribute('data-expand', '-10');
              lazySizes.aC(target, lazySizes.cfg.lazyClass);
            });
          }
        }

        tmp = target.getAttribute('data-link');
        if(tmp){
          addStyleScript(tmp, true);
        }

        // handle data-script
        tmp = target.getAttribute('data-script');
        if(tmp){
          e.detail.firesLoad = true;
          load = function(){
            e.detail.firesLoad = false;
            lazySizes.fire(target, '_lazyloaded', {}, true, true);
          };
          addStyleScript(tmp, null, load);
        }

        // handle data-require
        tmp = target.getAttribute('data-require');
        if(tmp){
          if(lazySizes.cfg.requireJs){
            lazySizes.cfg.requireJs([tmp]);
          } else {
            addStyleScript(tmp);
          }
        }

        // handle data-bg
        bg = target.getAttribute('data-bg');
        if (bg) {
          e.detail.firesLoad = true;
          load = function(){
            target.style.backgroundImage = 'url(' + (regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg ) + ')';
            e.detail.firesLoad = false;
            lazySizes.fire(target, '_lazyloaded', {}, true, true);
          };

          bgLoad(bg, load);
        }

        // handle data-poster
        poster = target.getAttribute('data-poster');
        if(poster){
          e.detail.firesLoad = true;
          load = function(){
            target.poster = poster;
            e.detail.firesLoad = false;
            lazySizes.fire(target, '_lazyloaded', {}, true, true);
          };

          bgLoad(poster, load);

        }
      }
    }, false);

  }

  function addStyleScript(src, style, cb){
    if(uniqueUrls[src]){
      return;
    }
    var elem = document.createElement(style ? 'link' : 'script');
    var insertElem = document.getElementsByTagName('script')[0];

    if(style){
      elem.rel = 'stylesheet';
      elem.href = src;
    } else {
      elem.onload = function(){
        elem.onerror = null;
        elem.onload = null;
        cb();
      };
      elem.onerror = elem.onload;

      elem.src = src;
    }
    uniqueUrls[src] = true;
    uniqueUrls[elem.src || elem.href] = true;
    insertElem.parentNode.insertBefore(elem, insertElem);
  }
}));