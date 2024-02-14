/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/@miyi/dagger.js@0.9.18/dagger.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
export default ((
  { asserter: e, logger: t, groupStarter: s, groupEnder: i, warner: r } = ((
    e = (e, t, s) => {
      const i = e.startsWith('"') ? 1 : 0,
        r = [],
        n = [];
      return (
        w(
          e.split('"').filter((e) => e),
          (e, o) =>
            (o + i) % 2
              ? r.push(`%c"${e}"`) && n.push(s)
              : r.push(`%c${e}`) && n.push(t)
        ) || [r.join(""), ...n]
      );
    },
    t = (t, s, i, r, n, o = !1) => {
      if (s) return;
      const l = ", please double check.";
      if (Array.isArray(t)) {
        const [s, ...o] = t,
          a = '%c"%o"',
          c = o.length;
        let h = [],
          d = "";
        w(`${s}${l}`.split('"%o"'), (t, s) => {
          const [i, ...l] = e(t, r, n);
          (d += i),
            (h = [...h, ...l]),
            s < c && ((d += a), (h = [...h, n, o[s]]));
        }),
          i(d, ...h);
      } else i(...e(`${t}${l}`, r, n));
      if (o) throw new Error("dagger AssertionError occurred!");
    }
  ) => ({
    asserter: (e, s) =>
      t(
        e,
        s,
        console.assert.bind(console, !1),
        l.errorPlainStyle,
        l.errorHighlightStyle,
        !0
      ),
    logger: (t) =>
      l.log && console.log(...e(t, l.logPlainStyle, l.logHighlightStyle)),
    warner: (e, s) =>
      l.warning &&
      t(e, s, console.warn, l.warningPlainStyle, l.warningHighlightStyle),
    groupStarter: (e) => l.log && console.group(e),
    groupEnder: (e) => l.log && console.groupEnd(e),
  }))(),
  n = Symbol("context"),
  o = null,
  l = { integrity: !0 },
  a = [],
  c = {
    bubble: "bubble",
    self: "self",
    mutation: "mutation",
  },
  h = !1,
  d = /^[_a-z]{1}[\w]*$/,
  u = null,
  p = /^(http:\/\/|https:\/\/|\/|\.\/|\.\.\/)/i,
  m = null,
  f = null,
  b = null,
  v = [],
  g = (e) => (Array.isArray(e) ? e : [e]),
  y = () => Object.create(null),
  $ = y(),
  j = new Set(),
  O = (
    (
      e = new Set(),
      t = new Set(),
      s = (e, t, i, r = 0) => {
        const n = i[r++];
        if (!n) return;
        const o = n.$eventListenerMap && n.$eventListenerMap[e.type],
          l = o ? [...o].filter((e) => Object.is(e.decorators.capture, t)) : [];
        if (!l.length) return s(e, t, i, r);
        Object.defineProperty(e, "currentTarget", {
          configurable: !0,
          value: n,
        });
        for (const { decorators: t, handler: s } of l)
          if ((s(e), t.stopImmediate)) return e.stopImmediatePropagation();
        e.cancelBubble || s(e, t, i, r);
      }
    ) =>
    (i, r, n, o) => {
      r.$eventListenerMap || (r.$eventListenerMap = y());
      const l = r.$eventListenerMap[i] || new Set();
      n instanceof Function &&
        (n = {
          decorators: { capture: o },
          handler: n,
        }),
        H.call(l, n),
        (r.$eventListenerMap[i] = l),
        (o && t.has(i)) ||
          (!o && e.has(i)) ||
          ((o ? t : e).add(i),
          window.addEventListener(
            i,
            (e) =>
              s(e, o, o ? e.composedPath().reverse() : e.composedPath(), 0),
            o
          ));
    }
  )(),
  w = (e, t) => {
    if (!e) return;
    const s = e.length || 0;
    for (let i = 0; i < s; ++i) t(e[i], i);
  },
  S = (...e) => {
    const t = y();
    return w(e, (e) => (t[e] = !0)) || t;
  },
  T = Symbol("meta"),
  x = {
    json: "json",
    namespace: "namespace",
    script: "script",
    style: "style",
    string: "string",
    view: "view",
  },
  A = Promise.resolve(),
  C = null,
  E = new Set(),
  N = document.createTextNode(""),
  k = (
    (
      e = {
        options: {
          debugDirective: !0,
          integrity: !1,
          log: !0,
          warning: !0,
          logPlainStyle: "color: #337ab7",
          logHighlightStyle: "color: #9442d0",
          warningPlainStyle: "color: #ff0000",
          warningHighlightStyle: "color: #b22222",
          errorPlainStyle: "color: #ff0000",
          errorHighlightStyle: "color: #b22222",
          rootSelectors: ["title", "body"],
        },
        modules: {
          view: { uri: ["template#view"], type: x.view },
          script: {
            uri: ['script[type="dagger/script"]'],
            type: x.script,
            anonymous: !0,
          },
          style: {
            uri: ['style[type="dagger/style"]'],
            type: x.style,
            scoped: !0,
          },
        },
        routers: {
          mode: "hash",
          prefix: "",
          aliases: {},
          default: "",
          routing: null,
        },
      },
      t = (t, s, i, r) => ({
        base: t,
        content: r ? Object.assign({}, e[i], s) : s,
      })
    ) =>
    (s, i, r = "modules") => {
      const n = V(s, `script[type="dagger/${r}"]`, !1, !0);
      if (n) {
        const e = n.getAttribute("src"),
          s = !Object.is(r, "modules") || n.hasAttribute("extends");
        return (
          n.hasAttribute("base") &&
            (i = new URL(n.getAttribute("base") || "", i).href),
          e
            ? Y(new URL(e, i), n.integrity).then(({ content: e }) =>
                t(i, M(e), r, s)
              )
            : t(i, n.textContent.trim() ? M(n.textContent) : {}, r, s)
        );
      }
      return { base: i, content: e[r] };
    }
  )(),
  M = (t) => {
    if (!Reflect.has($, t))
      try {
        try {
          $[t] = new Function(`return (${t});`)();
        } catch (e) {
          $[t] = new Function(`return (() => {${t}})();`)();
        }
      } catch (s) {
        e(
          `The content "${t}" is not legal javaScript code, parsing with error "${s.message}"`
        );
      }
    return $[t];
  },
  P = (
    (e = "string") =>
    (t) =>
      Object.is(typeof t, e)
  )(),
  R = (
    (
      t = S(...Object.keys(x).map((e) => `@${e}`)),
      s = (t, s) => {
        const i = Array.isArray(t),
          r = t;
        if (
          (P(t) || (i && t.every(P))
            ? (t = { uri: t })
            : i && (t = { candidates: t }),
          t.candidates)
        ) {
          t.candidates = g(t.candidates);
          const s = t.candidates.find(
            (e) =>
              e instanceof Object &&
              (!Reflect.has(e, "media") || matchMedia(e.media).matches)
          );
          e(
            [
              'There is no matched config candidate within "%o" for the current runtime environment',
              r,
            ],
            s
          ),
            Object.assign(t, s);
        }
        return t.type || (t.type = s), t.uri && (t.uri = g(t.uri)), t;
      }
    ) =>
    (i) =>
      w(Object.keys(i), (r) =>
        t[r] && i[r] instanceof Object
          ? w(Object.entries(i[r]), ([t, n]) => {
              e(
                [`The module "${t}" already exists in "%o"`, i],
                !Reflect.has(i, t)
              ),
                (i[t] = s(n, r.substring(1)));
            }) || Reflect.deleteProperty(i, r)
          : (i[r] = s(i[r]))
      ) || i
  )(),
  L = (e) => Reflect.ownKeys(e).filter((e) => !Object.is(e, T)),
  I = async ([e, ...t], s = { stop: !1 }) => {
    if (!s.stop)
      return e instanceof Promise
        ? e.then((e) => I([e, ...t], s))
        : e instanceof Function
        ? I([e(null, s), ...t], s)
        : t.length
        ? I([t.shift()(e, s), ...t], s)
        : e;
  },
  U = JSON.stringify,
  H = Set.prototype.add,
  D = Set.prototype.clear,
  _ = Set.prototype.delete,
  F = Map.prototype.clear,
  W = Map.prototype.set,
  B = WeakMap.prototype.set,
  z = () => {
    a.length &&
      (w(M(`[${a.map((e) => e.processor).join(", ")}]`), (e, t) => {
        const s = a[t];
        ($[s.processor] = e), (s.processor = e);
      }),
      (a.length = 0));
  },
  q = (e) => {
    const t = function (...t) {
      const s = o;
      o = null;
      const i = e.apply(this, t);
      return (o = s), i;
    };
    return (t.prototype = e.prototype), t;
  },
  V = (t, s, i = !1, r = !1) => {
    try {
      const n = t[i ? "querySelectorAll" : "querySelector"](s);
      return (
        r ||
          e(`Failed to get element matched selector "${s}"`, i ? n.length : n),
        n
      );
    } catch (t) {
      e(`The string "${s}" is not a valid querySelector`, r);
    }
  },
  Y = (t, s = "") =>
    fetch(t, l.integrity && s ? { integrity: `sha256-${s}` } : {})
      .then((s) => {
        if (s.ok) {
          const i = s.headers.get("content-type");
          return (
            e(`Missing "content-type" for the response content of "${t}"`, i),
            s.text().then((e) => ({
              content: e,
              type: i,
            }))
          );
        }
        r(`❎ Failed to fetch remote resource from "${t}"`);
      })
      .catch(() => r(`❎ Failed to fetch remote resource from "${t}"`)),
  J = (e, t, s) => {
    const i = document.createElement("style");
    return (
      e && (i.textContent = e),
      document.head.appendChild(i),
      (i.disabled = s),
      i.setAttribute("name", t),
      i.setAttribute("router-debug", location.href),
      i.setAttribute("active-debug", !s),
      i
    );
  },
  K = (e) => {
    const t = document.createElement("template");
    return (t.innerHTML = e), t.content;
  },
  X = (e, t) =>
    w(e.children, (e) => {
      Object.is(e.tagName, "TEMPLATE")
        ? ((e.hasAttribute("@slot") || e.hasAttribute("$html")) &&
            (e.$tags = t),
          X(e.content, t))
        : e instanceof HTMLElement && w(t, (t) => e.setAttribute(t, ""));
    }),
  G = (e, t = !0) => {
    if (!P(e)) {
      if (null == e || Number.isNaN(e)) return "";
      if (e instanceof Object) return U(e);
      e = String(e);
    }
    return t ? e.trim() : e;
  },
  Q = (
    (
      t = Object.prototype.hasOwnProperty,
      s = new Set([
        ...Reflect.ownKeys(Symbol)
          .map((e) => Symbol[e])
          .filter((e) => Object.is(typeof e, "symbol")),
        n,
        T,
      ]),
      i = new WeakMap(),
      r = new Set([void 0, Array, Object]),
      l = {
        get: (e, i) => {
          const r = e[i];
          if (o && !s.has(i) && (Object.is(r) || t.call(e, i))) {
            const t = o.topologySet;
            w(
              [...e[T]].filter((e) => !e.parent || t.has(e)),
              (e) => e.fetch(i, r).subscribe()
            );
          }
          return r;
        },
        set: (i, r, n) => {
          if (
            (e(
              'It\'s illegal to overwrite "$router" of the rootScope',
              h || !Object.is(i, u) || !Object.is(r, "$router")
            ),
            (i[r] = n),
            !s.has(r) && t.call(i, r))
          ) {
            const e = i[T];
            o && e.forEach((e) => e.unsubscribe(o)),
              (n = Q(i, r)),
              e.forEach((e) => e.fetch(r).update(n, c.self));
          }
          return !0;
        },
        deleteProperty: (e, t) => {
          const s = Reflect.has(e, t);
          return (
            !!Reflect.deleteProperty(e, t) &&
            (s &&
              P(t) &&
              e[T].forEach((e) => e.fetch(t).update(void 0, c.self)),
            !0)
          );
        },
      }
    ) =>
    (e, t) => {
      const s = null == t;
      let n = s ? e : e[t];
      if (n instanceof Object || (n && !n.constructor)) {
        const e = i.get(n);
        if (e) n = e;
        else {
          if (((n[T] = new Set()), r.has(n.constructor))) {
            const e = new Proxy(n, l);
            B.call(i, n, e), w(L(n), (e) => Q(n, e)), (n = e);
          }
          B.call(i, n, n);
        }
      }
      return s ? n[T].add(new se(null, "", n)) : (e[t] = n), n;
    }
  )(),
  Z = ((
    s = new Map(),
    i = {
      json: "dagger/json",
      namespace: "dagger/modules",
      script: "dagger/script",
      style: "dagger/style",
      string: "dagger/string",
    },
    n = y(),
    o = {
      html: "text/html",
      json: "application/json",
      script: ["application/javascript", "javascript/esm", "text/javascript"],
      style: "text/css",
    },
    a = /(?:^|;|\s+)(?:export|import)\s*?(?:(?:(?:[$\w*\s{},]*)\s*from\s*?)|)(?:(?:"([^"]+)?")|(?:'([^']+)?'))[\s]*?(?:$|)/gm,
    c = new TextEncoder(),
    h = (
      (e = /([\s:+>~])/, t = [":root", ":scope", "html", "body"]) =>
      (s, i, r, n) => {
        if (i instanceof CSSKeyframesRule) {
          const e = i.name;
          (i.name = `${e}-${r}`),
            s.insertRule(i.cssText, n.index++),
            (i.name = e);
        }
        if ((i.cssRules || []).length) w(i.cssRules, (e) => h(s, e, r, n));
        else if (i.selectorText) {
          const o = i.style,
            l = o.animationName;
          l && (o.animationName = `${l}-${r}`),
            s.insertRule(
              `${i.selectorText
                .split(",")
                .map(
                  (s) =>
                    (s = s.trim()) &&
                    ((t.some((e) => s.startsWith(e)) && s) ||
                      `${
                        e.test(s) ? s.replace(e, `[${r}]$1`) : `${s}[${r}]`
                      }, [${r}] ${s}`)
                )
                .join(", ")}{${o.cssText}}`,
              n.index++
            ),
            l && (o.animationName = l);
        }
      }
    )(),
    u = (e, t) => {
      try {
        w(L(e), (s) => {
          const i = e[s],
            r = i instanceof Function;
          (t[s] = r ? q(i) : i), i instanceof Object && !r && u(i, i);
        });
      } catch (e) {
      } finally {
        return t;
      }
    },
    m = class {
      constructor(t = {}, s = "", i = "", r = null) {
        (i = i.trim()),
          e(
            `The module name should be valid string matched RegExp "${d.toString()}" instead of "${i}"`,
            !r || d.test(i)
          ),
          (this.layer = i ? ((r || {}).layer || 0) + 1 : 0),
          (this.space = new Array(4 * this.layer).fill(" ").join("")),
          (this.name = i),
          (this.state = "unresolved"),
          (this.valid = !0),
          (this.module =
            this.integrity =
            this.parent =
            this.children =
            this.type =
            this.content =
            this.resolvedContent =
              null),
          r
            ? ((this.parent = r),
              (this.path = r.path ? `${r.path}.${i}` : i),
              (this.tags = [...r.tags, this.path.replace(/\./g, "__")]),
              (this.baseElement = r.baseElement))
            : ((this.path = i),
              (this.tags = ["__"]),
              (this.baseElement = document));
        const { integrity: n, uri: o, type: l } = t;
        l &&
          (e(
            `${this.space}The type of module "${this.path}" should be one of "json, namespace, script, style, string, view" instead of "${l}"`,
            x[l]
          ),
          (this.type = l)),
          Reflect.has(t, "content")
            ? ((this.content = t.content),
              e(
                `${this.space}The type of module "${this.path}" should be specified as one of "json, namespace, script, style, string, view" instead of "${l}"`,
                l
              ))
            : o
            ? (this.URIs = o)
            : e([
                `${this.space}Failed to parse the config "%o" for module "${this.path}" as there is no valid "content" or "uri" definition`,
                t,
              ]),
          (this.integrity = n),
          (this.config = t),
          (this.promise = new Promise((e) => (this.resolver = e))),
          (this.base = new URL(
            t.base || s,
            (r || {}).base || document.baseURI
          ).href),
          t.prefetch && this.resolve();
      }

      fetch(e) {
        if (!e.length) return this;
        const t = e.shift();
        return this.fetchChild(t).fetch(e);
      }

      fetchChild(t, s = !1) {
        const i = (this.children || []).find(
          (e) => Object.is(e.name, t) && e.valid
        );
        if (i || !s)
          return (
            e(
              `${this.space}Failed to fetch module "${t}" within ${
                this.path ? `namespace "${this.path}"` : "the root namespace"
              }`,
              !Object.is(i)
            ),
            i
          );
      }

      fetchViewModule(t) {
        const s = this.fetchChild(t, !0);
        return s
          ? (e(
              `The module "${s.path}" is referenced but not declared in the "modules" field of the current router`,
              !Object.is(s.state, "unresolved")
            ),
            s)
          : (e(`There is no valid module named "${t}" found`, this.parent),
            this.parent.fetchViewModule(t));
      }

      resolve(s = null) {
        const i = this.type;
        if (!Object.is(this.state, "unresolved")) {
          if (!s)
            return (
              this.valid &&
                Object.is(this.state, "resolved") &&
                (Object.is(i, x.style)
                  ? H.call(j, this.module)
                  : Object.is(i, x.namespace) &&
                    w(this.children, (e) => e.resolve())),
              this.promise
            );
          this.promise = new Promise((e) => (this.resolver = e));
        }
        (this.state = "resolving"),
          t(
            `${this.space}⏳ resolving the ${
              this.path ? `module "${this.path}"` : "root module"
            }`
          ),
          this.verifyDependency();
        let r = null;
        if (null == this.content)
          r = [
            ...this.URIs.map(
              (t) => (
                e(
                  [
                    `${this.space}The "uri" of module "${this.path}" should be valid "string" instead of "%o"`,
                    t,
                  ],
                  P(t)
                ),
                (e, s) => (s.stop = !!e) || this.resolveURI(t)
              )
            ),
            (t) => {
              t ||
                (e([
                  `${this.space}Failed to resolve uri of module "${this.path}" from "%o"`,
                  this.URIs,
                ]),
                (this.valid = !1) || this.resolved(null));
            },
          ];
        else {
          const t = this.content;
          [x.namespace, x.json].includes(i)
            ? (e(
                [
                  `${this.space}The content of module "${this.path}" with type "${i}" should be valid "object" instead of "%o"`,
                  t,
                ],
                t && Object.is(typeof t, "object")
              ),
              (r = [
                (!this.path && this.integrity) || this.resolveIntegrity(t),
                () =>
                  Object.is(i, x.namespace)
                    ? this.resolveNamespace(t, this.base, s)
                    : t,
              ]))
            : (r = [this.resolveIntegrity(t), (e) => this.resolveContent(e)]),
            (r = [...r, (e) => this.resolveModule(e), (e) => this.resolved(e)]);
        }
        return A.then(() => I(r)), this.promise;
      }

      resolveCachedModuleProfile(e) {
        return (
          (this.integrity = e.integrity),
          this.verifyDependency(),
          this.type || (this.type = e.type),
          e.resolvedContent
        );
      }

      resolveContent(t) {
        P(t) || (t = U(t)), (this.content = t.trim());
        const s = this.type;
        if (Object.is(s, x.namespace))
          return (
            (this.baseElement = K(t)),
            I([
              k(this.baseElement, this.base),
              ({ base: e, content: t }) => this.resolveNamespace(t, e),
            ])
          );
        if (Object.is(s, x.script))
          return import(
            `data:text/javascript, ${encodeURIComponent(
              t.replace(a, (e, t, s) =>
                e.replace(t || s, new URL(t || s, this.base))
              )
            )}`
          ).catch(() =>
            e(
              `${this.space}Failed to import dynamic script module "${this.path}" with resolved content "${t}"`
            )
          );
        if (Object.is(s, x.view)) {
          const e = K(t);
          X(e, this.parent.tags);
          const s = new te(e, this.parent, null, null, !1, {});
          return Promise.all(s.promises || []).then(() => s);
        }
        return Object.is(s, x.style)
          ? J(t, `${this.path}-template`, !0)
          : Object.is(s, x.json)
          ? JSON.parse(t)
          : Object.is(s, x.string)
          ? this.content
          : void e(
              `${this.space}Failed to resolve module "${this.path}" of unknown type "${s}"`
            );
      }

      resolved(e) {
        return (
          (this.module = e),
          (this.state = "resolved"),
          this.resolver(this),
          t(
            `${this.space}✅ resolved the ${
              this.path ? `"${this.type}" module "${this.path}"` : "root module"
            }`
          ),
          this
        );
      }

      resolveEmbeddedType(t) {
        if (!this.type) {
          const { tagName: s, type: r } = t;
          if (Object.is(s, "TEMPLATE")) this.type = x.view;
          else if (Object.is(s, "STYLE") && Object.is(r, i.style))
            this.type = x.style;
          else if (Object.is(s, "SCRIPT")) {
            if (Object.is(r, i.namespace))
              return (
                (this.type = x.namespace),
                I([
                  this.resolveIntegrity(t.innerHTML),
                  (e) =>
                    this.resolveNamespace(
                      M(e),
                      t.getAttribute("base") || this.base
                    ),
                ])
              );
            Object.is(r, i.script)
              ? (this.type = x.script)
              : Object.is(r, i.json)
              ? (this.type = x.json)
              : Object.is(r, i.string) && (this.type = x.string);
          }
          e(
            [
              `The element "%o" of type "${r || "undefined"}" is not supported`,
              t,
            ],
            this.type
          );
        }
        return I([
          this.resolveIntegrity(t.innerHTML),
          (e) => this.resolveContent(e),
        ]);
      }

      resolveIntegrity(t) {
        return l.integrity
          ? crypto.subtle
              .digest("SHA-256", c.encode(P(t) ? t : U(t)))
              .then((s) => {
                const i = btoa(
                  [...new Uint8Array(s)]
                    .map((e) => String.fromCharCode(e))
                    .join("")
                );
                return (
                  e(
                    `The expected "SHA-256" integrity for module "${this.path}" is "${this.integrity}" while the computed integrity is "${i}"`,
                    !this.integrity || Object.is(this.integrity, i)
                  ),
                  n[i] || (n[i] = this),
                  (this.integrity = i),
                  this.verifyDependency(),
                  t
                );
              })
          : t;
      }

      resolveModule(t) {
        this.resolvedContent = t;
        let s = t;
        const i = this.type,
          r = Object.is(i, x.namespace);
        if (this.parent && (r || Object.is(i, x.view)))
          try {
            const t = document.createElement(this.name);
            e(
              [
                `${this.space}It's illegal to use "${this.name}" as a namespace or view module name as it's the tag name of builtin html element "%o"`,
                t.constructor,
              ],
              !Object.is(this.name, this.name.toLowerCase()) ||
                t instanceof HTMLUnknownElement
            );
          } catch (t) {
            e(
              `${this.space}It's illegal to use "${this.name}" as a namespace or view module name`
            );
          }
        if (r)
          (s = this.module),
            this.children || (this.children = t),
            this.config.explicit &&
              (this.config.anonymous
                ? Object.assign(this.parent.module, s)
                : (this.parent.module[this.name] = s)),
            this.parent &&
              this.parent
                .resolve()
                .then((e) => Object.setPrototypeOf(s, e.module));
        else if (Object.is(i, x.script))
          (s = u(s, y())),
            Object.is(this.config.anonymous, !1)
              ? (this.parent.module[this.name] = s)
              : Object.assign(this.parent.module, s);
        else if (Object.is(i, x.style)) {
          if (!Object.is(this.config.scoped, !1)) {
            const e = J("", this.path, !0),
              t = e.sheet,
              i = { index: 0 },
              r = this.parent.path
                ? this.parent.path.replace(/\./g, "__")
                : "__";
            w(s.sheet.cssRules, (e) => h(t, e, r, i)),
              e.setAttribute("based", `${this.path}-template`),
              (s = e);
          }
          H.call(j, s);
        } else
          Object.is(i, x.json)
            ? this.config.anonymous
              ? Object.assign(this.parent.module, s)
              : (this.parent.module[this.name] = s)
            : Object.is(i, x.string) && (this.parent.module[this.name] = s);
        return s;
      }

      resolveNamespace(t, s, i = null) {
        this.parent && R(t),
          this.children ||
            (this.children = Object.entries(t).map(
              ([e, t]) => new m(t, s, e, this)
            ));
        let r = this.children;
        return (
          i &&
            ((r = this.children.filter((e) => i.has(e.name))),
            Object.is(r.length, i.size) ||
              (w(r, (e) => _.call(i, e.name)),
              e(
                `The modules "${[...i].join(
                  ", "
                )}" is not declared in the root namespace`
              ))),
          (this.module = this.module || y()),
          Promise.all(r.map((e) => e.resolve()))
        );
      }

      resolveRemoteType(e, t, s) {
        (this.base = s),
          this.type ||
            (s.endsWith(".js") ||
            s.endsWith(".mjs") ||
            o.script.some((e) => t.includes(e))
              ? (this.type = x.script)
              : s.endsWith(".css") || t.includes(o.style)
              ? (this.type = x.style)
              : s.endsWith(".html") || t.includes(o.html)
              ? ((e = e.trim()),
                (this.type =
                  e.startsWith("<html>") || e.startsWith("<!DOCTYPE ")
                    ? x.namespace
                    : x.view))
              : s.endsWith(".json") || t.includes(o.json)
              ? (this.type = x.json)
              : (this.type = x.string));
      }

      resolveURI(e) {
        if (!(e = e.trim())) return;
        let t = null;
        if (p.test(e)) {
          const s = n[this.integrity];
          if (s) t = [s.resolve(), (e) => this.resolveCachedModuleProfile(e)];
          else {
            this.integrity && (n[this.integrity] = this);
            const s = new URL(e, this.base).href;
            t = [
              (e, t) => I([Y(s, this.integrity), (e) => e || (t.stop = !0)]),
              ({ content: e, type: t }) =>
                this.resolveRemoteType(e, t, s) || this.resolveIntegrity(e),
              (e) => this.resolveContent(e),
            ];
          }
        } else {
          const i = V(this.baseElement, e),
            n = s.get(i);
          n
            ? (r([
                `${this.space}❎ The module "${this.path}" and "${n.path}" reference the same embedded element "%o"`,
                i,
              ]),
              (t = [n.resolve(), (e) => this.resolveCachedModuleProfile(e)]))
            : (W.call(s, i, this), (t = [this.resolveEmbeddedType(i)]));
        }
        return (
          t && I([...t, (e) => this.resolveModule(e), (e) => this.resolved(e)])
        );
      }

      verifyDependency() {
        if (
          this.integrity &&
          (!this.type || Object.is(this.type, x.namespace))
        ) {
          let t = this.parent;
          for (; t; )
            e(
              `There is a circular reference between module "${this.path}" and module "${t.path}"`,
              !Object.is(t.integrity, this.integrity)
            ),
              (t = t.parent);
        }
      }
    }
  ) => m)(),
  ee = ((
    t = {
      checked: (e) => (Object.is(e.tagName, "OPTION") ? e.selected : e.checked),
      file: (e) => (e.multiple ? [...e.files] : e.files[0]) || null,
      focus: (e) => e.isSameNode(document.activeElement),
      result: (
        (
          e = (e, { buffer: t, data: s, encoding: i }) => {
            let r = {
              file: e,
              loaded: 0,
              progress: 0,
              state: "initialized",
              content: null,
            };
            const n = new FileReader();
            return (
              (n.onloadstart = () => (
                (r = (r && r[T] && [...r[T]][0].value) || r),
                (r.state = "loading")
              )),
              (n.onprogress = ({ loaded: t }) => (
                (r.loaded = t), (r.progress = Math.floor((t / e.size) * 100))
              )),
              (n.onload = () => ((r.state = "loaded"), (r.content = n.result))),
              (n.onerror = () => (r.state = "error")),
              (n.onabort = () => (r.state = "abort")),
              t
                ? n.readAsArrayBuffer(e)
                : s
                ? n.readAsDataURL(e)
                : n.readAsText(e, i || "utf-8"),
              r
            );
          }
        ) =>
        (t, s) =>
          t.multiple ? [...t.files].map((t) => e(t, s)) : e(t.files[0], s)
      )(),
      selected: (t) => {
        const { name: s, type: i, tagName: r } = t,
          n = Object.is(r, "SELECT");
        e(
          [
            'Please specify valid "name" attribute on input node "%o" to support "$selected" directive',
            t,
          ],
          n || s
        );
        const o = [
          ...(n
            ? t.selectedOptions
            : V(
                document.body,
                `input[type="${i}"][name="${s}"]:checked`,
                !0,
                !0
              )),
        ].map((e) => u(e));
        return (n ? t.multiple : Object.is(i, "checkbox")) ? o : o[0];
      },
      value: (
        { type: e, value: t, valueAsNumber: s },
        { number: i, trim: r },
        { detail: n }
      ) =>
        n
          ? null
          : ["date", "datetime-local"].includes(e)
          ? new Date(s || 0)
          : ["number", "range"].includes(e)
          ? s
          : i
          ? Number.parseFloat(t)
          : r
          ? t.trim()
          : t,
    },
    s = ["draggable"],
    i = (e, t, s, { name: i }) =>
      t && (null == e ? t.removeAttribute(i) : t.setAttribute(i, G(e))),
    l = ((t = new Event("change")) => ({
      $boolean: (e, t, s, { name: i }) => t.toggleAttribute(i, !!e),
      checked: (e, s, { parentNode: r }, { decorators: n }) => {
        const { tagName: o, type: l } = s,
          a = Object.is(o, "OPTION"),
          c = Object.is(l, "checkbox");
        if (a || (Object.is(o, "INPUT") && (c || Object.is(l, "radio")))) {
          let i = null;
          if (a) {
            s.selected = e;
            const n = r;
            n &&
              (!n.multiple && e && (i = V(n, "option", !0)),
              n.$changeEvent ||
                ((n.$changeEvent = !0),
                O("change", n, (e) =>
                  w(V(e.target, "option", !0), (e) => e.dispatchEvent(t))
                )));
          } else
            c && n.indeterminate && (s.indeterminate = null == e),
              s.indeterminate || (s.checked = e),
              c ||
                (e &&
                  (i = V(
                    document.body,
                    `input[type="radio"][name="${s.name}"]`,
                    !0
                  )));
          i && A.then(() => w(i, (e) => e.dispatchEvent(t)));
        } else i(e, s, null, { name: "checked" });
      },
      class: (e, t, { profile: { classNames: s } }) => {
        if (e) {
          const i = new Set(s);
          Array.isArray(e)
            ? w(e, (e) => H.call(i, G(e)))
            : e instanceof Object
            ? w(Object.keys(e), (t) => e[t] && H.call(i, t.trim()))
            : H.call(i, G(e)),
            t.setAttribute("class", [...i].join(" ").trim());
        } else
          s ? t.setAttribute("class", s.join(" ")) : t.removeAttribute("class");
      },
      each: (
        (
          e = (e, s, i, r, n, o, l, a, c, h, d, u) => {
            let m = null;
            const f = n.get(i);
            if (f) {
              if (
                ((m = f.shift()),
                f.length || t.call(n, i),
                !Object.is(e, m.index))
              ) {
                const { landmark: t, upperBoundary: s } = m,
                  i = [s];
                let n = s;
                for (; !Object.is(n, t); ) (n = n.nextSibling), i.push(n);
                w(i.reverse(), (t) =>
                  u.insertBefore(
                    t,
                    (e ? r[e - 1].landmark || {} : h.upperBoundary).nextSibling
                  )
                ),
                  r.includes(m) && r.splice(m.index, 1),
                  (m.index = e),
                  (r[e] = m);
              }
              (m.scope[a] = s), (m.scope[l] = e);
            } else m = new p(d, h, e, { [l]: e, [a]: s, [c]: i });
            const b = o.get(i);
            b ? b.push(m) : W.call(o, i, [m]);
          },
          t = Map.prototype.delete
        ) =>
        (s, i, n, { decorators: o }) => {
          s = s || {};
          const l = new Set(
              s.values instanceof Function ? s.values() : Object.values(s)
            ),
            a = [
              ...(s.entries instanceof Function
                ? s.entries()
                : Object.entries(s)),
            ],
            { children: c, childrenMap: h, profile: d, parentNode: u } = n,
            p = s[T];
          if (
            (p &&
              w(a, ([e, t]) => t && t[T] && p.forEach((s) => s.fetch(e, t))),
            !a.length)
          )
            return F.call(h) || n.removeChildren(!0);
          h.forEach(
            (e, s) => l.has(s) || w(e, (e) => e.destructor(!0)) || t.call(h, s)
          );
          const m = new Map(),
            { item: f = "item", key: b = "key", index: v = "index" } = o;
          r(
            [
              '❎ Duplication found in slice scope schemes "%o"',
              {
                item: f,
                key: b,
                index: v,
              },
            ],
            !Object.is(b, v) && !Object.is(b, f) && !Object.is(f, v)
          ),
            w(a, ([t, s], i) => e(i, t, s, c, h, m, v, b, f, n, d, u)),
            (c.length = a.length),
            h.forEach((e) =>
              w(e, (e) => ((e.parent = null), e.destructor(!0)))
            ),
            (n.childrenMap = m);
        }
      )(),
      exist: (e, t, s) =>
        e ? Object.is(s.state, "unloaded") && s.loading() : s.unloading(!0),
      file: (t, s) =>
        e(
          [
            `The data bound to directive "$file" of element "%o" should be "File${
              s.multiple ? " array" : ""
            }" instead of "%o"`,
            s,
            t,
          ],
          !t ||
            (s.multiple
              ? Array.isArray(t) && t.every((e) => e instanceof File)
              : t instanceof File)
        ),
      focus: (e, t, s, { decorators: { prevent: i = !1 } }) =>
        e ? t.focus({ preventScroll: i }) : t.blur(),
      html: (e, t, s, { decorators: { root: i = !1, strict: r = !1 } }) => {
        if (((e = G(e)), s.removeChildren(!0), !e)) return;
        !r && d.test(e) && (e = `<${e}></${e}>`);
        const n = [],
          o = s.profile,
          l = K(e);
        if (!t) {
          const e = o.node.$tags;
          e && X(l, e);
        }
        Reflect.construct(te, [l, i ? m : o.namespace, n, null, !0]),
          n.length &&
            (z(),
            Promise.all(n.map((e) => Promise.all(e.promises || []))).then(() =>
              w(
                n,
                (e, t) =>
                  s.profile &&
                  Reflect.construct(p, [
                    e,
                    i ? null : s,
                    t,
                    null,
                    (e.landmark || e.node).parentNode,
                  ])
              )
            )),
          t ? t.appendChild(l) : s.parentNode.insertBefore(l, s.landmark);
      },
      result: (t, s) =>
        e(
          [
            `The data bound to directive "$result" of element "%o" should be "object${
              s.multiple ? " array" : ""
            }" instead of "%o"`,
            s,
            t,
          ],
          !t ||
            (s.multiple
              ? Array.isArray(t) && t.every((e) => e instanceof Object)
              : t instanceof Object)
        ),
      selected: (
        (
          t = (e, t, s) => {
            const i = u(e);
            return s ? (t || []).some((e) => Object.is(e, i)) : Object.is(t, i);
          }
        ) =>
        (s, r) => {
          const { type: n, tagName: o } = r,
            l = Object.is(o, "SELECT");
          if (
            l ||
            (Object.is(o, "INPUT") &&
              (Object.is(n, "checkbox") || Object.is(n, "radio")))
          ) {
            const i = l ? r.multiple : Object.is(n, "checkbox");
            i &&
              e(
                [
                  'The data bound to directive "$selected" of element "%o" should be "array" instead of "%o"',
                  r,
                  s,
                ],
                null == s || Array.isArray(s)
              ),
              l
                ? A.then(() =>
                    w(V(r, "option", !0), (e) => (e.selected = t(e, s, i)))
                  )
                : (r.checked = t(r, s, i));
          } else i(s, r, null, { name: "selected" });
        }
      )(),
      style: (
        (
          t = (t, s) => {
            if (!s) return;
            const [i, r = ""] = s.split(":").map((e) => e.trim());
            e(`The content "${s}" is not a valid style declaration`, i && r),
              (t[i] = r);
          }
        ) =>
        (e, s, { profile: { inlineStyle: i, styles: r } }) => {
          if (e) {
            const i = Object.assign({}, r);
            Array.isArray(e)
              ? w(e, (e) => t(i, G(e)))
              : e instanceof Object
              ? w(Object.keys(e), (t) => (i[t.trim()] = G(e[t])))
              : w(G(e).split(";"), (e) => t(i, e.trim())),
              (s.style.cssText = Object.keys(i)
                .filter((e) => i[e])
                .map((e) => `${e}: ${i[e]}; `)
                .join("")
                .trim());
          } else i ? s.setAttribute("style", i) : s.removeAttribute("style");
        }
      )(),
      text: (e, t) => {
        (e = G(e)), Object.is(e, t.textContent) || (t.textContent = e);
      },
      value: (
        (t = (e, t = 2) => String(e).padStart(t, "0")) =>
        (s, i, r, { decorators: { trim: n = !1 } }) => {
          r.value = s;
          const { tagName: o, type: l } = i,
            a = Object.is(o, "INPUT");
          if (
            (e(
              ['It\'s illegal to use directive "$value" on element "%o"', i],
              !(a && Object.is(l, "file"))
            ),
            a)
          ) {
            const e = ["date", "datetime-local"].includes(l);
            if (s instanceof Date)
              if (e || Object.is(l, "week")) i.valueAsNumber = s;
              else if (Object.is(l, "month"))
                i.value = `${s.getUTCFullYear()}-${t(s.getUTCMonth() + 1)}`;
              else if (Object.is(l, "time")) {
                const e = i.step || 0;
                let r = `${t(s.getUTCHours())}:${t(s.getUTCMinutes())}`;
                e % 60 &&
                  ((r = `${r}:${t(s.getUTCSeconds())}`),
                  e % 1 && (r = `${r}.${t(s.getUTCMilliseconds(), 3)}`)),
                  (i.value = r);
              } else i.value = s;
            else
              (s = G(s, n)),
                e ? (i.valueAsNumber = new Date(s)) : (i.value = s);
          } else i.value = G(s, n);
        }
      )(),
    }))(),
    a = (
      (
        e = (e, t) => {
          const s = !(t = String(t)).startsWith("!");
          s || (t = t.substring(1));
          const i = new RegExp(t);
          return (
            s ==
            ((e.getModifierState && e.getModifierState(t)) ||
              [e.code, e.key, e.button].some((e) => i.test(e)))
          );
        }
      ) =>
      (t, s, i) =>
        !s || (s = g(s))[i]((s) => e(t, s))
    )(),
    c = (e, t, s) =>
      t &&
      w(
        t
          .filter(
            (t, s) =>
              t &&
              ((t.index = s), t.decorators && e.includes(t.decorators.name))
          )
          .reverse(),
        (e) => s(e) || t.splice(e.index, 1)
      ),
    h = ({ target: e, event: t, handler: s, options: i, listener: r }) =>
      r ? _.call(e.$eventListenerMap[t], r) : e.removeEventListener(t, s, i),
    u = (e) => (e && Reflect.has(e[n] || {}, "value") ? e[n].value : e.value),
    p = class {
      constructor(t, s = null, i = 0, r = null, n = null) {
        const {
          directives: o,
          dynamic: l,
          namespace: a,
          node: c,
          landmark: h,
          plain: d,
          text: u,
          html: p,
          raw: m,
        } = t;
        if (
          ((this.directives = o),
          (this.profile = t),
          (this.index = i),
          (this.state = "loaded"),
          (this.parent =
            this.children =
            this.childrenMap =
            this.existController =
            this.landmark =
            this.upperBoundary =
            this.childrenController =
            this.controller =
            this.controllers =
            this.eventHandlers =
            this.scope =
            this.sentry =
            this.node =
              null),
          s
            ? ((this.parent = s),
              (this.parentNode = n || s.node || s.parentNode),
              (this.scope = s.scope),
              s.children.splice(i, 0, this))
            : ((this.parentNode = c.parentNode || h.parentNode),
              (this.scope = f)),
          (this.module = a.module),
          p)
        )
          return this.loading();
        if (m || d)
          this.resolveNode(),
            this.node.removeAttribute && this.node.removeAttribute("dg-cloak"),
            d && this.resolveChildren();
        else if (u)
          this.resolveNode(() => (this.controller = this.resolveController(u)));
        else {
          const n = (this.directives || {}).each;
          if (((n || t.virtual) && this.resolveLandmark(r), r)) {
            const { plain: e, root: t } = n.decorators;
            (this.sliceScope = this.resolveScope(r, e, t)),
              s.children.length > i + 1 &&
                w(s.children, (e, t) => e && t > i && e.index++);
          } else if (
            (t.slotScope &&
              (this.slotScope = this.resolveScope(
                Object.assign({}, t.slotScope),
                !0
              )),
            n)
          )
            return (
              (this.children = []),
              (this.childrenMap = new Map()),
              (this.controller = this.resolveController(n)),
              this
            );
          if (l) {
            const s = l.processor(this.module, this.scope, this.parentNode),
              i = this.directives;
            (this.directives = Object.assign({}, i, {
              controllers: [...(i.controllers || [])],
              eventHandlers: [...(i.eventHandlers || [])],
            })),
              w(g(s), (i) => {
                if (P(i)) {
                  const e = i.indexOf("=");
                  i =
                    e < 0
                      ? { name: i, value: "" }
                      : { name: i.substring(0, e), value: i.substring(e + 1) };
                }
                e(
                  [
                    'The name of "@directive" expression should be "string" instead of "%o"',
                    i.name,
                  ],
                  P(i.name)
                ),
                  e(
                    [
                      'The value of "@directive" expression should be "string" instead of "%o"',
                      i.value,
                    ],
                    P(i.value)
                  );
                const r = i.name.trim();
                e(
                  [
                    'It\'s illegal to create "@raw", "@directive" or "$each" directive with the "@directive" expression "%o"',
                    s,
                  ],
                  !r.startsWith("@raw") &&
                    !r.startsWith("@directive") &&
                    !r.startsWith("$each")
                ),
                  t.resolveDirective(r, i.value, this.directives);
              }),
              z();
          }
          const o = (this.directives || {}).exist;
          o
            ? (this.lanmark || this.resolveLandmark(r),
              (this.state = "unloaded"),
              (this.existController = this.resolveController(o)))
            : this.loading();
        }
      }

      destructor(e) {
        this.unloading(e);
        const { plain: t, text: s } = this.profile;
        if (!t && !s) {
          e &&
            (this.landmark && this.landmark.remove(),
            this.upperBoundary && this.upperBoundary.remove()),
            this.existController && this.removeController(this.existController);
          const t = (this.parent || {}).children;
          e &&
            t &&
            (w(t, (e, t) => t > this.index && e.index--),
            t.splice(this.index, 1));
        }
        w(Reflect.ownKeys(this), (e) => {
          this[e] = null;
        });
      }

      initialize() {
        const { html: e, virtual: t } = this.profile;
        e ? (this.node = e) : t || this.resolveNode();
        const s = (this.directives || {}).loaded;
        this.resolvePromise(
          s && s.processor(this.module, this.scope, this.node),
          () => this.postLoaded()
        ),
          e || this.resolveChildren();
      }

      loading() {
        this.state = "loading";
        const e = (this.directives || {}).loading;
        e
          ? this.resolvePromise(
              e.processor(this.module, this.scope, null),
              (t) => {
                if (Object.is(this.state, "loading")) {
                  if (t) {
                    const s = t.constructor;
                    if (
                      Object.is(s, Object) ||
                      (!s && Object.is(typeof t, "object"))
                    ) {
                      const { init: s, plain: i, root: r } = e.decorators;
                      this.resolveScope(t, i, r, s);
                    }
                  }
                  this.initialize();
                }
              }
            )
          : this.initialize();
      }

      postLoaded() {
        if (
          ((this.state = "loaded"),
          this.node && this.node.removeAttribute("dg-cloak"),
          b)
        )
          b(this.scope), (b = null);
        else if (this.directives) {
          const {
            controllers: t,
            eventHandlers: s,
            sentry: i,
          } = this.directives;
          i &&
            ((this.sentry = Object.assign({}, i, {
              owner: this,
              processor: i.processor.bind(null, this.module, this.scope),
            })),
            H.call(E, this.sentry)),
            s &&
              (this.eventHandlers = s.map(
                ({ event: t, decorators: s = {}, processor: i, name: r }) => {
                  const {
                      capture: n,
                      outside: o,
                      once: l,
                      passive: a,
                      target: c,
                    } = s,
                    h = c ? window[c] || V(document, c) : this.node,
                    d = o ? window : h,
                    u = (e) =>
                      this.updateEventHandler(
                        e,
                        r,
                        i.bind(null, this.module, this.scope),
                        s,
                        h
                      );
                  if (
                    (e(
                      [
                        `The target of "+${t}" directive declared on element "%o" is invalid`,
                        this.node || this.profile.node,
                      ],
                      h
                    ),
                    l || a)
                  ) {
                    const e = { capture: n, once: l, passive: a };
                    return (
                      d.addEventListener(t, u, e),
                      { target: d, event: t, handler: u, options: e }
                    );
                  }
                  {
                    const e = { decorators: s, handler: u };
                    return O(t, d, e, n), { target: d, event: t, listener: e };
                  }
                }
              )),
            t &&
              (this.controllers = t
                .map((e) => this.resolveController(e))
                .filter((e) => e));
        }
      }

      removeChildren(e) {
        if (e)
          if (this.node) this.node.innerHTML = "";
          else if (this.upperBoundary) {
            let e = this.upperBoundary.nextSibling;
            for (; e && !Object.is(e, this.landmark); ) {
              const t = e.nextSibling;
              e.remove(), (e = t);
            }
          }
        (this.children || []).length &&
          (w(this.children, (e) => e && e.destructor(!1)),
          (this.children.length = 0));
      }

      removeController(e) {
        e.topologySet.forEach((t) => t.unsubscribe(e)),
          D.call(e.topologySet),
          e.observer && e.observer.disconnect(),
          Object.is(e, this.childrenController) &&
            (this.childrenController = null),
          Object.is(e, this.existController) && (this.existController = null);
      }

      removeDirectives(e, t) {
        e &&
          ((t = g(t)),
          c(
            t,
            [
              ...this.controllers,
              this.childrenController,
              this.existController,
            ],
            (e) => this.removeController(e)
          ),
          c(t, this.eventHandlers, h));
      }

      resolveChildren() {
        const e = this.profile.children,
          t = (this.directives || {}).child;
        !this.children &&
          (e || (t && Object.is(t.name, "html"))) &&
          (this.children = []),
          t
            ? (this.childrenController = this.resolveController(t))
            : w(e, (e, t) => new p(e, this, t));
      }

      resolveController({ name: e, decorators: t = {}, processor: r }) {
        const n = this.node,
          o = !t.once || t.lazy,
          a = {
            name: e,
            owner: this,
            decorators: t,
            processor: r.bind(null, this.module, this.scope),
            topologySet: o ? new Set() : null,
            observer: null,
            updater:
              e &&
              (l[e] ||
                (n &&
                  !s.includes(e) &&
                  Object.is(typeof n[e], "boolean") &&
                  l.$boolean) ||
                i),
          };
        return (
          o &&
            n &&
            Object.is(e, "selected") &&
            Object.is(n.tagName, "SELECT") &&
            (a.observer = new MutationObserver(() =>
              this.updateController(a, !0)
            )).observe(n, { childList: !0 }),
          this.updateController(a, !0),
          o && a
        );
      }

      resolveLandmark(e) {
        const {
          index: t,
          parent: s,
          parentNode: i,
          profile: { landmark: r, virtual: n },
        } = this;
        if (s) {
          let n = null;
          const o = s.children[t + 1];
          (n = o
            ? o.upperBoundary || o.node || o.landmark
            : e
            ? s.landmark
            : i.contains(r || null)
            ? r
            : s.node
            ? null
            : s.landmark),
            (this.landmark = i.insertBefore(N.cloneNode(!1), n));
        } else this.landmark = r;
        (n || (this.directives || {}).each) &&
          (this.upperBoundary = i.insertBefore(N.cloneNode(!1), this.landmark));
      }

      resolveNode(e) {
        const { node: t, unique: s, raw: i } = this.profile,
          r = s ? t : t.cloneNode(i);
        if (((this.node = r), (r[n] = this), e && e(), !r.isConnected)) {
          const e =
            this.landmark ||
            (this.parent && (this.parent.node ? null : this.parent.landmark));
          this.parentNode.insertBefore(
            r,
            e && Object.is(this.parentNode, e.parentNode) ? e : null
          );
        }
      }

      resolvePromise(e, t) {
        e instanceof Promise ? e.then(t) : t(e);
      }

      resolveScope(e, t, s, i) {
        if (i) {
          const i = this.profile.moduleProfile;
          if (i) {
            const r = i.config.init;
            if (r) return this.resolveScope(r, t, s), this.resolveScope(e, t);
          }
        }
        return (
          t || (e = Q(e)),
          (this.scope = Object.setPrototypeOf(e, s ? f : this.scope)),
          e
        );
      }

      unloading(e) {
        if (!Object.is(this.state, "unloaded"))
          if (
            (this.controller &&
              (this.removeController(this.controller) ||
                (this.controller = null)),
            this.profile.text)
          )
            this.state = "unloaded";
          else {
            if (
              ((this.state = "unloading"),
              this.profile.plain || this.childrenMap)
            )
              return this.removeChildren(e);
            this.childrenController &&
              this.removeController(this.childrenController),
              w(this.controllers, (e) => this.removeController(e)) ||
                (this.controllers = null),
              w(this.eventHandlers, h) ||
                (this.eventHandlers = null) ||
                (this.node && (this.node.$eventListenerMap = null)),
              this.sentry && (_.call(E, this.sentry), (this.sentry = null));
            const t = (this.directives || {}).unloading;
            t && t.processor(this.module, this.scope, this.node);
            const s = this.node;
            e && s && s.remove(),
              (this.node = null),
              this.removeChildren(e),
              (this.scope = this.sliceScope || (this.parent || {}).scope || f);
            const i = (this.directives || {}).unloaded;
            i && i.processor(this.module, this.scope, null),
              (this.state = "unloaded");
          }
      }

      updateEventHandler(e, s, i, n, l) {
        if (!s) {
          const {
              on: t,
              inside: s,
              outside: i,
              every: o,
              some: c,
              prevent: h,
              stop: d,
              stopImmediate: u,
            } = n,
            { type: p, target: m, currentTarget: f } = e,
            b = Object.is(m, f);
          if (
            (r(
              [
                `❎ Please avoid using "on", "inside" or "outside" decorators together on "+${p}" directive on element "%o".`,
                f,
              ],
              !!t + !!s + !!i < 2
            ),
            !(
              (!(t || s || i) ||
                (i && l.contains && !l.contains(m)) ||
                (t && b) ||
                (s && (!f.contains || (f.contains(m) && !b)))) &&
              a(e, o, "every") &&
              a(e, c, "some")
            ))
          )
            return;
          h && e.preventDefault(),
            d && e.stopPropagation(),
            u && e.stopImmediatePropagation();
        }
        const c = o,
          h = n.remove;
        o = null;
        const d = i(this.node, s ? t[s](this.node, n, e) : e);
        h &&
          (d instanceof Promise
            ? d.then((e) => this.removeDirectives(e, h))
            : this.removeDirectives(d, h)),
          (o = c);
      }
    }
  ) => (
    (p.prototype.updateController = ((
      e = new Set(),
      t = (e, t, s) => {
        if (!e.profile) return;
        const {
            decorators: { once: i, remove: r, router: n, lazy: l },
            topologySet: a,
            updater: c,
            name: h,
          } = t,
          d = !i || l;
        if (s || (a && [...a].some((e) => !Object.is(e.oldValue, e.value)))) {
          a && a.size && (a.forEach((e) => e.unsubscribe(t)), D.call(a));
          const s = o;
          o = d ? t : null;
          const i = t.processor(e.node);
          if ((d && n && C.subscribe(), (o = s), l && !h))
            return (t.processor = i), void (t.decorators.lazy = !1);
          i instanceof Promise
            ? i.then(
                (s) => (r && e.removeDirectives(s, r), c && c(s, e.node, e, t))
              )
            : (r && e.removeDirectives(i, r), c && c(i, e.node, e, t));
        }
      }
    ) =>
      function (s, i) {
        e.has(s) ||
          (H.call(e, s),
          A.then(() => {
            _.call(e, s), t(this, s, i);
          }));
      })()),
    p
  ))(),
  te = ((
    t = {
      $: "controller",
      "+": "event",
    },
    s = S("checked", "file", "focus", "result", "selected", "value"),
    i = S("loading", "loaded", "sentry", "unloading", "unloaded"),
    n = S("STYLE", "SCRIPT"),
    o = (e) =>
      e.includes("__") ? e.replace(/__[a-z]/g, (e) => e[2].toUpperCase()) : e,
    c = (e, t, s, i) =>
      e.eventHandlers.push(
        d(
          `Object.is(${t}, _$data_) || (${t} = _$data_)`,
          Object.assign({ event: i }, s),
          "$node, _$data_"
        )
      ),
    h = (e, s, i = "") => {
      l.debugDirective &&
        e.setAttribute(
          `${t[s[0]] || "meta"}-${decodeURIComponent(s.substring(1))
            .trim()
            .replace(/\#/g, "__")
            .replace(/:/g, "_")
            .replace(/[^\w]/g, "-")}-debug`,
          i
        );
    },
    d = (
      (e = "$module, $scope") =>
      (t, s = {}, i = "$node") => {
        const { clear: r, debug: n } = s.decorators || {},
          o =
            $[
              (t = `${
                i ? `(${e}, ${i})` : `(${e})`
              } => { with ($module) with ($scope) return (() => { 'use strict';\n ${
                n ? "debugger;\n\r" : ""
              }${r ? "console.clear();\n\r" : ""}return ${t}; })(); }`)
            ],
          l = Object.assign({}, s, { processor: o || t });
        return o || a.push(l), l;
      }
    )(),
    u = class {
      constructor(t, s = m, i = null, l = null, a = !1, c = null) {
        (this.node = t),
          (this.namespace = s),
          (this.unique = a),
          (this.defaultSlotScope = c || (l || {}).defaultSlotScope || null),
          (this.dynamic = this.plain = this.raw = this.virtual = !1),
          (this.text =
            this.inlineStyle =
            this.styles =
            this.directives =
            this.landmark =
            this.children =
            this.classNames =
            this.html =
            this.slotScope =
            this.moduleProfile =
              null);
        const u = t.nodeType;
        if (Object.is(u, Node.TEXT_NODE)) {
          const e = t.textContent.trim();
          if (!e) return;
          e.includes("${") && e.includes("}")
            ? (i && i.push(this),
              (this.text = d(`\`${e}\``, { name: "text" }, "")),
              (this.promises = []),
              (this.node = this.resolveLandmark(t, "string template replaced")))
            : (this.raw = !0),
            l.children.push(this);
        } else if (Object.is(u, Node.ELEMENT_NODE)) {
          this.promises = [];
          const a = "dg-cloak",
            { attributes: c, tagName: u } = t,
            p = "@raw",
            m = c[p];
          if (
            ((this.html = t.isSameNode(document.documentElement) && t),
            (this.raw = !(!m && !n[u])),
            this.raw)
          )
            m && (h(t, p), t.removeAttribute(p)), i && t.removeAttribute(a);
          else {
            const n = [],
              l = [],
              p = { controllers: n, eventHandlers: l },
              m = o(u.toLowerCase()),
              f =
                Object.is(t.constructor, HTMLUnknownElement) &&
                s.fetchViewModule(m.split(".")[0]),
              b = Object.is(f.state, "resolved"),
              v = "@directive",
              g = c[v],
              y = "@slot";
            if (
              (f &&
                e(
                  `It is illegal to use "$html" or "$text" directive on view module "${m}"`,
                  !t.hasAttribute("$html") && !t.hasAttribute("$text")
                ),
              f &&
                ((this.virtual = !0),
                this.resolveLandmark(t, "virtual node removed")),
              f && !b)
            )
              this.resolveDirective(
                "$html",
                `\`${t.outerHTML
                  .replace(/`/g, "\\`")
                  .replace(/\${/g, "\\${")}\``,
                p
              ),
                (this.directives = p);
            else {
              if (t.hasAttribute(y)) {
                const e = t.getAttribute(y).trim(),
                  s = `_$slot_${e}`;
                h(t, y, e),
                  t.removeAttribute(y),
                  this.defaultSlotScope &&
                    ((this.defaultSlotScope[s] = t.innerHTML),
                    r(
                      [
                        `❎ Please avoid adding "$html" or "$text" directive on element "%o" as it's declared "${y}" meta directive already`,
                        t,
                      ],
                      !t.hasAttribute("$html") && !t.hasAttribute("$text")
                    ),
                    t.removeAttribute("$html"),
                    t.removeAttribute("$text"),
                    this.resolveDirective("$html#strict", s, p));
              }
              if (
                (w([...c], ({ name: e, value: t }) =>
                  this.resolveDirective(e, t, p)
                ),
                g
                  ? ((this.directives = p),
                    (this.dynamic = d(g.value)),
                    t.removeAttribute(v))
                  : (n.length || (p.controllers = null),
                    l.length || (p.eventHandlers = null),
                    (p.controllers ||
                      p.eventHandlers ||
                      Object.values(p).length > 2) &&
                      (this.directives = p)),
                this.html)
              )
                return z();
              this.plain = !(this.directives || this.landmark);
            }
            i &&
              (this.plain
                ? (t.hasAttribute(a) &&
                    w(t.children, (e) => e.setAttribute(a, ""))) ||
                  t.removeAttribute(a)
                : i.push(this) && (i = null)),
              f
                ? b && this.resolveViewModule(f.fetch(m.split(".").slice(1)))
                : (Object.is(m, "template") &&
                    (this.plain
                      ? (this.raw = !0) && (this.plain = !1)
                      : ((this.virtual = !0),
                        this.resolveLandmark(t, "virtual node removed"))),
                  this.raw || p.child || this.resolveChildren(t, i));
          }
          l &&
            (l.children.push(this),
            this.promises.length &&
              l.promises.push(Promise.all(this.promises)));
        } else
          Object.is(u, Node.DOCUMENT_FRAGMENT_NODE)
            ? ((this.promises = []), this.resolveChildren(t, i))
            : Object.is(u, Node.COMMENT_NODE)
            ? (this.raw = !0)
            : e(`The node type "${u}" is not supported`);
      }

      resolveChildren(e, t) {
        const s = this.virtual ? e.content.childNodes : e.childNodes;
        return (
          s.length
            ? ((this.children = []),
              w(s, (e) =>
                Reflect.construct(u, [
                  e,
                  this.namespace,
                  t,
                  this,
                  !!this.unique,
                ])
              ),
              this.plain &&
                this.children.every((e) => e.raw) &&
                (this.raw = !0) &&
                (this.plain = !1))
            : this.plain && (this.raw = !0) && (this.plain = !1),
          this.raw && (this.children = null),
          this
        );
      }

      resolveDirective(n, l, a) {
        const u = t[n[0]];
        if (!u) return;
        const p = this.node;
        h(p, n, l), p.removeAttribute(n);
        const [m, ...f] = o(n.substring(1)).split("#"),
          b = y(),
          v = { decorators: b };
        if (
          (w(
            f.filter((e) => e),
            (e) => {
              const [t, s] = e
                .split(":")
                .map((e) => decodeURIComponent(e).trim());
              try {
                b[t] = s ? JSON.parse(s) : t;
              } catch (e) {
                b[t] = s;
              }
            }
          ),
          Object.is(u, "event"))
        )
          (v.event = m),
            i[m]
              ? (a[m] = d(
                  l,
                  v,
                  Object.is(m, "sentry") ? "$nextRouter" : "$node"
                ))
              : a.eventHandlers.push(d(l, v, "$node, $event"));
        else {
          const t = Object.is(m, "watch");
          t || (v.name = m),
            t &&
              b.lazy &&
              (l = `${
                l.substring(l.indexOf("(") + 1, l.lastIndexOf(")")).trim() ||
                "null"
              }, $node => ${l}`);
          const i = d(l, v);
          if (Object.is(m, "each"))
            e(
              [
                'It is illegal to use "$each" directive with "id" attribute together on node "%o"',
                p,
              ],
              !p.hasAttribute("id")
            ),
              (a.each = i),
              this.resolveLandmark(p, '"$each" node replaced'),
              (this.unique = !1);
          else if (Object.is(m, "exist"))
            (a.exist = i),
              this.resolveLandmark(p, '"$exist" node replaced'),
              (this.unique = !1);
          else if (Object.is(m, "html") || Object.is(m, "text"))
            r(
              [
                '❎ Please avoid adding "$html" and "$text" directives together on element "%o"',
                p,
              ],
              !a.child
            ),
              (a.child = i);
          else {
            if (Object.is(m, "class"))
              this.classNames ||
                (p.classList.length &&
                  (this.classNames = [...p.classList].map((e) => e.trim())));
            else if (Object.is(m, "style")) {
              if (!this.styles) {
                const e = p.style,
                  t = [...e];
                t.length &&
                  ((this.inlineStyle = p.getAttribute("style")),
                  (this.styles = y()),
                  w(t, (t) => {
                    const s = e[t],
                      i = e.getPropertyPriority(t);
                    this.styles[t] = i ? `${s} !${i}` : s;
                  }));
              }
            } else if (s[m]) {
              const e = Object.is(m, "value");
              if (!b.oneway) {
                b.capture = !0;
                const { tagName: t, type: s } = p,
                  i = Object.is(m, "checked"),
                  r = Object.is(m, "selected"),
                  n = Object.is(s, "checkbox") || Object.is(s, "radio"),
                  o = Object.is(s, "file");
                Object.is(m, "focus")
                  ? (c(a, l, v, "blur"), c(a, l, v, "focus"))
                  : ((Object.is(t, "INPUT") &&
                      ((o &&
                        (Object.is(m, "file") || Object.is(m, "result"))) ||
                        (n && (i || r)) ||
                        (!n && !o && e))) ||
                      (Object.is(t, "OPTION") && i) ||
                      (Object.is(t, "SELECT") && r) ||
                      (Object.is(t, "TEXTAREA") && e)) &&
                    c(a, l, v, b.input ? "input" : "change");
              }
              if (e) return a.controllers.unshift(i);
            }
            a.controllers.push(i);
          }
        }
      }

      resolveLandmark(e, t) {
        if (!this.landmark)
          return (
            (this.landmark = N.cloneNode(!1)),
            this.promises.push(A.then(() => e.replaceWith(this.landmark) || t)),
            this.landmark
          );
      }

      resolveViewModule(t) {
        const s = t.module,
          i = t.path,
          r = s instanceof u;
        r || (t = t.fetchChild("view"));
        const n = r ? s : t.module;
        if (
          (e(
            `"${i}" or "${i}.view" is not a valid view module`,
            n instanceof u
          ),
          (this.children = n.children),
          (this.moduleProfile = t),
          (this.defaultSlotScope = n.defaultSlotScope),
          Object.keys(this.defaultSlotScope).length)
        ) {
          const e = {},
            t = "_$slot_",
            s = "@slot";
          w(this.node.children, (i) => {
            if (i.hasAttribute(s)) {
              const r = i.getAttribute(s).trim(),
                n = `${t}${r}`;
              h(i, s, r),
                i.removeAttribute(s),
                (e[n] = Object.is(i.tagName, "TEMPLATE")
                  ? i.innerHTML
                  : i.outerHTML);
            }
          }),
            Reflect.has(this.defaultSlotScope, t) &&
              !Reflect.has(e, t) &&
              this.node.innerHTML &&
              (e[t] = this.node.innerHTML),
            (this.slotScope = Object.assign({}, this.defaultSlotScope, e));
        }
      }
    }
  ) => u)(),
  se = class {
    constructor(e, t, s) {
      (this.value = this.oldValue = s),
        (this.parent = null),
        (this.controllerSet = new Set()),
        (this.children = y()),
        (this.name = t),
        e && ((e.children[t] = this), (this.parent = e));
    }

    dispatch(t = c.bubble) {
      e(
        'It is illegal to modify fields under "$router" of the rootScope',
        h || !Object.is(C, this.parent)
      ),
        Object.is(t, c.mutation) ||
          (this.parent && this.parent.parent && this.parent.dispatch(c.bubble));
      const s = Object.is(t, c.bubble);
      this.value && this.value[T]
        ? this.value[T].forEach((e) => e.trigger(s))
        : this.trigger(s);
    }

    fetch(e, t) {
      const s = this.children[e] || new se(this, e, t);
      return t && t[T] && H.call(t[T], s), s;
    }

    subscribe() {
      if (o) {
        H.call(o.topologySet, this), H.call(this.controllerSet, o);
        const e = this.parent;
        e && e.parent && e.unsubscribe(o);
      }
      return this;
    }

    trigger(e) {
      this.controllerSet.size
        ? this.controllerSet.forEach((t) => t.owner.updateController(t, e)) ||
          A.then(() => (this.oldValue = this.value))
        : (this.oldValue = this.value);
    }

    unsubscribe(e) {
      _.call(e.topologySet, this), _.call(this.controllerSet, e);
    }

    update(e, t) {
      const s = this.value;
      Object.is(s, e) ||
        (s instanceof Object && Reflect.has(s, T) && _.call(s[T], this),
        e instanceof Object && Reflect.has(e, T) && H.call(e[T], this),
        (this.value = e),
        this.dispatch(t),
        Object.is(e) &&
          this.parent &&
          (Reflect.deleteProperty(this.parent.children, this.name),
          (this.parent = null)),
        w(L(this.children), (t) =>
          this.children[t].update((e || y())[t], c.mutation)
        ));
    }
  }
) =>
  J("[dg-cloak] { display: none !important; }", "dg-global-style", !1) &&
  document.addEventListener("DOMContentLoaded", () =>
    Promise.all(
      ["options", "modules", "routers"].map((e) =>
        k(document, document.baseURI, e)
      )
    ).then(
      ((
        n = "",
        o = history.pushState,
        a = history.replaceState,
        c = null,
        $ = null,
        S = { "": j },
        A = (e, t = null) => {
          try {
            const s =
              document.getElementById(e) || V(document, `a[name=${e}]`, !1, !0);
            if (!s) return;
            return (
              t && t.preventDefault(),
              s.scrollIntoView(),
              location.href.endsWith(`#@${e}`) ||
                o.call(history, null, "", `${location.href}#@${e}`),
              !0
            );
          } catch (e) {
            return;
          }
        },
        N = (
          (
            n = (
              (
                e = (e) => {
                  i(`resolving modules of the router "${e.path || "/"}"`),
                    t(
                      `✅ router has changed from "${
                        (f.$router || {}).path || "/"
                      }" to "${e.path || "/"}"`
                    ),
                    z();
                  const s = f.$router && S[f.$router.path];
                  (h = !0),
                    (f.$router = e),
                    (h = !1),
                    C || ((C = [...e[T]][0]), v.map((e) => new ee(e))),
                    Object.is(s, j) ||
                      (s &&
                        s.forEach(
                          (e) => (
                            (e.disabled = !j.has(e)),
                            e.setAttribute("active-debug", !e.disabled)
                          )
                        ),
                      j.forEach(
                        (e) => (
                          (e.disabled = !1), e.setAttribute("active-debug", !0)
                        )
                      )),
                    A(e.anchor);
                }
              ) =>
              (i) => {
                t(
                  `⏳ router is changing from "${
                    (f.$router || {}).path || "/"
                  }" to "${i.path || "/"}"...`
                );
                const r = i.path;
                return (
                  (j = S[r] || (S[r] = new Set())),
                  s(`resolving modules of the router "${i.path}"`),
                  m.resolve(i.modules).then(() => e(i))
                );
              }
            )()
          ) =>
          () => {
            const s = "/",
              i = location.hash.lastIndexOf("#@"),
              l = i >= 0 ? location.hash.substring(i + 2) : "";
            let a = (
              Object.is($.mode, "history")
                ? `${location.pathname}${location.search}`
                : location.hash.replace(l, "")
            ).replace($.prefix, "");
            a.startsWith(s) || (a = `${s}${a}`);
            const { mode: h, aliases: d, prefix: u } = $,
              [p = "", m = ""] = a.split("?"),
              b = p.substring(1),
              v = {},
              g = Object.is(p, s) ? [""] : p.split(s),
              y = [];
            let j = null;
            if (
              (Reflect.has(d, b)
                ? ((j = d[b]), t("🦘 router alias matched"))
                : c.match(y, v, g)
                ? (y.reverse(),
                  (j = (
                    y.find(
                      (e) => e.redirectPath || Object.is(e.redirectPath, "")
                    ) || {}
                  ).redirectPath))
                : Reflect.has($, "default")
                ? (e(`The router "${b}" is invalid`, !Object.is($.default, b)),
                  r(`❎ The router "${b}" is invalid`),
                  (j = $.default))
                : e(`The router "${b}" is invalid`),
              null != j)
            )
              return (
                t(`The router is redirecting from "${b}" to "${j || "/"}"`),
                history.replaceState(
                  null,
                  "",
                  `${m ? `${j}?${m}` : j}${l}` || $.prefix
                )
              );
            const O = {},
              S = Object.assign({}, ...y.map((e) => e.variables)),
              T = Object.assign({}, ...y.map((e) => e.constants));
            m && w([...new URLSearchParams(m)], ([e, t]) => (O[e] = t)),
              w(Object.keys(S), (t) => {
                if (Reflect.has(O, t) && !Reflect.has(T, t)) {
                  const s = typeof S[t],
                    i = O[t];
                  try {
                    S[t] = Object.is(s, "string")
                      ? i
                      : window[`${s[0].toUpperCase()}${s.substring(1)}`](
                          JSON.parse(i)
                        );
                  } catch (t) {
                    e(
                      `The expected variable type is "${s}" but the real queryString content is "${i}"`
                    );
                  }
                }
              });
            const x = {
              url: location.href,
              mode: h,
              prefix: u,
              path: b,
              paths: g,
              modules: new Set(y.map((e) => e.modules).flat()),
              query: m,
              queries: O,
              scenarios: v,
              variables: S,
              constants: T,
              anchor: l,
            };
            t(
              `⏳ resolving sentries within router "${
                (f.$router || {}).path || "/"
              }"...`
            ),
              Promise.all(
                [...E].map((e) =>
                  Promise.resolve(e.processor(x)).then((t) => ({
                    sentry: e,
                    prevent: t,
                  }))
                )
              ).then((e) => {
                t(
                  `✅ resolved sentries within router "${
                    (f.$router || {}).path || "/"
                  }"`
                );
                const s = e.filter((e) => e.prevent).map((e) => e.sentry.owner);
                s.length
                  ? w(s, (e) =>
                      r([
                        '❎ The router redirect is prevented by the "$sentry" directive declared on the "%o" element',
                        e.node || e.profile.node,
                      ])
                    ) || o.call(history, null, "", f.$router.url)
                  : n(x);
              });
          }
        )(),
        k = class {
          constructor(s, i = null) {
            const {
              children: n,
              constants: o = {},
              variables: l = {},
              modules: a = [],
              tailable: c = !1,
              redirect: h = "",
            } = s;
            this.layer = i ? i.layer + 1 : 0;
            const u = new Array(4 * this.layer).fill(" ").join("");
            let p = (s.path || "").trim();
            (this.modules = g(a)),
              e(
                [
                  `${u}The "modules" field of router should be either "string" or "string array" matched RegExp "${d.toString()}" instead of "%o"`,
                  a,
                ],
                this.modules.every((e) => P(e) && d.test(e))
              ),
              i
                ? ((!p || Object.is(p, "*")) && (p = ".+"),
                  (this.path = `${i.path}/${p}`))
                : (r(
                    `${u}❎ The "path" field of the root router will be ignored`,
                    !Reflect.has(s, "path")
                  ),
                  (p = ""),
                  (this.path = "")),
              t(
                `${u}⏳ resolving the ${
                  this.path ? `router with path "${this.path}"` : "root router"
                }`
              ),
              h &&
                (this.redirectPath =
                  h instanceof Function
                    ? h(f, m.module)
                    : M(
                        `($module, $scope) => { with ($module) with ($scope) return (() => { 'use strict'; return ${h}; })() }`
                      )(m.module, f)),
              (this.constants = o),
              (this.variables = l),
              (this.children = null),
              (this.parent = i),
              (this.scenarios =
                p instanceof Object
                  ? Object.keys(p).map((e) => ({
                      scenario: e,
                      regExp: new RegExp(p[e] || "^$"),
                    }))
                  : [
                      {
                        scenario: p,
                        regExp: new RegExp(`^${p}$`),
                      },
                    ]),
              n &&
                (e(
                  [
                    `${u}The router's "children" field should be "array" instead of "%o"`,
                    n,
                  ],
                  Array.isArray(n)
                ),
                (this.children = n.map((e) => new k(e, this)))),
              (this.tailable = c || !(this.children || []).length),
              t(
                `${u}✅ resolved the ${
                  this.path ? `router with path "${this.path}"` : "root router"
                }`
              );
          }

          match(e, t, s, i = s.length, r = 0) {
            const n = this.scenarios.length;
            if (
              i >= n &&
              this.scenarios.every(({ scenario: e, regExp: i }, n) => {
                const o = s[r + n];
                if (i.test(o)) return (t[e] = o), !0;
              })
            )
              return (
                (r += n),
                ((Object.is(i, r) && this.tailable) ||
                  (this.children || []).find((n) => n.match(e, t, s, i, r))) &&
                  e.push(this)
              );
          }
        }
      ) => {
        const L = (
          (
            t = (t, s) => {
              const i = (t || {})[s];
              e(
                [
                  `"${s}" is not a valid method name of prototype object "%o"`,
                  t,
                ],
                i && i instanceof Function
              );
              const r = function (...e) {
                const t = i.apply(this, e);
                return this[T] && this[T].forEach((e) => e.dispatch()), t;
              };
              Reflect.defineProperty(r, "name", { configurable: !0, value: s }),
                Reflect.defineProperty(t, s, { get: () => r });
            }
          ) =>
          (s, i) => {
            e(
              [
                'The 1st argument of "$dagger.register" should be valid "object" instead of "%o"',
                s,
              ],
              s instanceof Object
            ),
              e(
                [
                  'The 2nd argument of "$dagger.register" should be "string array" instead of "%o"',
                  i,
                ],
                Array.isArray(i) && i.every((e) => P(e))
              ),
              w(i, (e) => t(s.prototype, e));
          }
        )();
        O(
          "click",
          window,
          (e) => {
            let t = e.target;
            for (; t && !["A", "AREA"].includes(t.tagName); ) t = t.parentNode;
            if (!t || !t.hasAttribute("href")) return;
            const s = t.getAttribute("href").trim();
            (s.startsWith("#") && A(s.substring(1), e)) ||
              (s &&
                !p.test(s) &&
                (e.preventDefault(), history.pushState(null, "", s)));
          },
          !0
        );
        const I = { detail: !0 },
          U = new CustomEvent("change", I),
          H = new CustomEvent("input", I);
        O(
          "reset",
          window,
          () => (e) =>
            Object.is(e.target.tagName, "FORM") &&
            w(V(document.body, "input, textarea", !0, !0), (e) => {
              e.dispatchEvent(H), e.dispatchEvent(U);
            })
        ),
          L(Date, [
            "setDate",
            "setFullYear",
            "setHours",
            "setMilliseconds",
            "setMinutes",
            "setMonth",
            "setSeconds",
            "setTime",
            "setUTCDate",
            "setUTCFullYear",
            "setUTCHours",
            "setUTCMilliseconds",
            "setUTCMinutes",
            "setUTCMonth",
            "setUTCSeconds",
            "setYear",
          ]) ||
            L(Map, ["set", "delete", "clear"]) ||
            L(Set, ["add", "delete", "clear"]) ||
            L(WeakMap, ["set", "delete"]) ||
            L(WeakSet, ["add", "delete"]),
          (JSON.stringify = q(JSON.stringify)),
          w(
            [
              "concat",
              "copyWithin",
              "fill",
              "find",
              "findIndex",
              "lastIndexOf",
              "pop",
              "push",
              "reverse",
              "shift",
              "unshift",
              "slice",
              "sort",
              "splice",
              "includes",
              "indexOf",
              "join",
              "keys",
              "entries",
              "values",
              "forEach",
              "filter",
              "flat",
              "flatMap",
              "map",
              "every",
              "some",
              "reduce",
              "reduceRight",
              "toLocaleString",
              "toString",
              "at",
            ],
            (e) => (Array.prototype[e] = q(Array.prototype[e]))
          );
        const D = (e, t) => {
          const s = (t || [])[2],
            i = $.prefix;
          s && !s.startsWith(i) && (t[2] = `${i}${s}`),
            e.apply(history, t),
            N();
        };
        return (
          (history.pushState = (...e) => D(o, e)),
          (history.replaceState = (...e) => D(a, e)),
          (window.$dagger = Object.freeze(
            Object.assign(y(), {
              register: L,
              version: "1.0.0-RC-debug",
              validator: (t, s, { type: i, assert: r, required: n } = {}) => {
                (null == t || Number.isNaN(t)) &&
                  e(
                    [
                      `The data "${s}" should be assigned a valid value instead of "%o" before using`,
                      t,
                    ],
                    !n
                  ),
                  i &&
                    (Array.isArray(i)
                      ? e(
                          [
                            `The type of data "${s}" should be one of "%o" instead of "%o"`,
                            i,
                            (t.constructor || {}).name,
                          ],
                          i.some((e) => t instanceof e)
                        )
                      : e(
                          [
                            `The type of data "${s}" should be "%o" instead of "%o"`,
                            i,
                            (t.constructor || {}).name,
                          ],
                          t instanceof i
                        )),
                  r &&
                    (r instanceof Function
                      ? e(`The assert of "${s}" is falsy`, r(t))
                      : Array.isArray(r)
                      ? w(r, (i) => {
                          e(
                            `The type of assert should be "function" instead of "${typeof i}"`,
                            i instanceof Function
                          ),
                            e(`The assert of "${s}" is falsy`, i(t));
                        })
                      : e(
                          `The type of assert should be "function" or "function array" instead of "${typeof r}"`
                        ));
              },
            })
          )),
          ([o, a, h]) => {
            l = o.content;
            const d = new Array(141).fill("%").join("");
            t(d),
              t(
                `꧁ Powered by "🗡️ dagger V${$dagger.version} (https://daggerjs.org)". ꧂`
              ),
              t(d),
              e(
                `The integrity feature is available with "https" protocol or "localhost" host only, while the current origin is "${location.origin}"`,
                !l.integrity || crypto.subtle
              ),
              (n = a.base);
            const p = ($ = h.content).prefix.trim(),
              y = Object.is($.mode, "history");
            p
              ? y
                ? (e(
                    `In "history" router mode, it's illegal to use "${p}" as router prefix because it contains non-word character`,
                    /^\w*$/.test(p)
                  ),
                  ($.prefix = `/${p}/`))
                : (e(
                    `In "hash" router mode, it's illegal to use "${p}" as router prefix because it starts with "@"`,
                    !p.startsWith("@")
                  ),
                  ($.prefix = `#${p}/`))
              : ($.prefix = y ? "/" : "#"),
              (u = { $router: null }),
              (f = Object.seal(Q(u))),
              R(a.content);
            const S = document.documentElement,
              T = $.routing || { modules: Object.keys(a.content) };
            s("resolving top level modules"),
              (b = (t) => {
                (f = t),
                  s("resolving routers"),
                  (c = new k(T)),
                  i("resolving routers");
                const n = l.rootSelectors;
                e(
                  [
                    'The "rootSelectors" should be "string array" instead of "%o"',
                    n,
                  ],
                  Array.isArray(n) && n.every(P)
                ),
                  w(n, (e) =>
                    r(
                      `There is no element matching the rootSelector "${e}"`,
                      document.querySelector(e)
                    )
                  );
                const o = new Set(
                  n.map((e) => [...V(document, e, !0, !0)]).flat()
                );
                r(['❎ It\'s illegal to set "%o" as root node', S], !o.has(S)),
                  o.delete(S);
                const a = [...o];
                w(a, (e) => Reflect.construct(te, [e, m, v, null, !0])),
                  r(
                    [
                      '❎ No node with valid directive was detected under root elements "%o"',
                      a,
                    ],
                    v.length
                  ),
                  O("popstate", window, N),
                  history.replaceState(
                    null,
                    "",
                    y
                      ? `${location.pathname}${location.search}${location.hash}`
                      : location.hash
                  );
              }),
              (m = new Z(
                {
                  content: a.content,
                  type: x.namespace,
                },
                n
              ))
                .resolve(new Set(g(T.modules || [])))
                .then(
                  () =>
                    j.forEach((e) => (e.disabled = !1)) ||
                    i("resolving top level modules") ||
                    new ee(new te(S))
                );
          }
        );
      })()
    )
  ))();
//# sourceMappingURL=/sm/90eab55563502f625256b48a13887b3d600e367b67f4e564596839cddbe1a2b1.map
