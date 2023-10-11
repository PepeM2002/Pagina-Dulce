if (!self.define) {
  let e,
    i = {};
  const s = (s, r) => (
    (s = new URL(s + ".js", r).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );  
  self.define = (r, o) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[n]) return;
    let t = {};
    const c = (e) => s(e, n),
      d = { module: { uri: n }, exports: t, require: c };
    i[n] = Promise.all(r.map((e) => d[e] || c(e))).then((e) => (o(...e), t));
  };
}
define(["./workbox-50dcdd21"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "Css/stylos.css", revision: "b934646084af69c5c308a0ad5081ae75" },
        { url: "img/9ZZJ.gif", revision: "07e7228b8991e6c1f0cb8fddbd73a394" },
        {
          url: "img/logo192.png",
          revision: "33dbdd0177549353eeeb785d02c294af",
        },
        { url: "index.html", revision: "77ebae51c677b9a4e8478cf9e1323180" },
        { url: "manifest.json", revision: "a12d6c687ff0d2197fbc89e64dd22ec0" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    );
});
//# sourceMappingURL=sw.js.map
