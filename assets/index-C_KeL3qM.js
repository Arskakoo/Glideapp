function hm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Qc = { exports: {} },
  Wl = {},
  Yc = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xo = Symbol.for("react.element"),
  vm = Symbol.for("react.portal"),
  gm = Symbol.for("react.fragment"),
  ym = Symbol.for("react.strict_mode"),
  wm = Symbol.for("react.profiler"),
  xm = Symbol.for("react.provider"),
  Sm = Symbol.for("react.context"),
  Em = Symbol.for("react.forward_ref"),
  Cm = Symbol.for("react.suspense"),
  km = Symbol.for("react.memo"),
  $m = Symbol.for("react.lazy"),
  lu = Symbol.iterator;
function bm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xc = Object.assign,
  Zc = {};
function Er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Gc);
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jc() {}
Jc.prototype = Er.prototype;
function Ys(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zc),
    (this.updater = n || Gc);
}
var Gs = (Ys.prototype = new Jc());
Gs.constructor = Ys;
Xc(Gs, Er.prototype);
Gs.isPureReactComponent = !0;
var iu = Array.isArray,
  qc = Object.prototype.hasOwnProperty,
  Xs = { current: null },
  ed = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      qc.call(t, r) && !ed.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: xo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Xs.current,
  };
}
function Pm(e, t) {
  return {
    $$typeof: xo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xo;
}
function _m(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var su = /\/+/g;
function pi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _m("" + e.key)
    : t.toString(36);
}
function el(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xo:
          case vm:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + pi(i, 0) : r),
      iu(o)
        ? ((n = ""),
          e != null && (n = e.replace(su, "$&/") + "/"),
          el(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Zs(o) &&
            (o = Pm(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(su, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), iu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + pi(l, s);
      i += el(l, t, n, a, o);
    }
  else if (((a = bm(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + pi(l, s++)), (i += el(l, t, n, a, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function _o(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    el(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Nm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ze = { current: null },
  tl = { transition: null },
  Tm = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: tl,
    ReactCurrentOwner: Xs,
  };
Q.Children = {
  map: _o,
  forEach: function (e, t, n) {
    _o(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      _o(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      _o(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = Er;
Q.Fragment = gm;
Q.Profiler = wm;
Q.PureComponent = Ys;
Q.StrictMode = ym;
Q.Suspense = Cm;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tm;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xc({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Xs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      qc.call(t, a) &&
        !ed.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: xo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: xm, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = td;
Q.createFactory = function (e) {
  var t = td.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: Em, render: e };
};
Q.isValidElement = Zs;
Q.lazy = function (e) {
  return { $$typeof: $m, _payload: { _status: -1, _result: e }, _init: Nm };
};
Q.memo = function (e, t) {
  return { $$typeof: km, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = tl.transition;
  tl.transition = {};
  try {
    e();
  } finally {
    tl.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return ze.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
Q.useId = function () {
  return ze.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return ze.current.useRef(e);
};
Q.useState = function (e) {
  return ze.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return ze.current.useTransition();
};
Q.version = "18.2.0";
Yc.exports = Q;
var h = Yc.exports;
const _ = Kc(h),
  Rm = hm({ __proto__: null, default: _ }, [h]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om = h,
  Lm = Symbol.for("react.element"),
  Mm = Symbol.for("react.fragment"),
  Im = Object.prototype.hasOwnProperty,
  Am = Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zm = { key: !0, ref: !0, __self: !0, __source: !0 };
function nd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Im.call(t, r) && !zm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Lm,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Am.current,
  };
}
Wl.Fragment = Mm;
Wl.jsx = nd;
Wl.jsxs = nd;
Qc.exports = Wl;
var O = Qc.exports,
  Qi = {},
  rd = { exports: {} },
  qe = {},
  od = { exports: {} },
  ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, N) {
    var j = b.length;
    b.push(N);
    e: for (; 0 < j; ) {
      var I = (j - 1) >>> 1,
        z = b[I];
      if (0 < o(z, N)) (b[I] = N), (b[j] = z), (j = I);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var N = b[0],
      j = b.pop();
    if (j !== N) {
      b[0] = j;
      e: for (var I = 0, z = b.length, G = z >>> 1; I < G; ) {
        var re = 2 * (I + 1) - 1,
          ve = b[re],
          K = re + 1,
          D = b[K];
        if (0 > o(ve, j))
          K < z && 0 > o(D, ve)
            ? ((b[I] = D), (b[K] = j), (I = K))
            : ((b[I] = ve), (b[re] = j), (I = re));
        else if (K < z && 0 > o(D, j)) (b[I] = D), (b[K] = j), (I = K);
        else break e;
      }
    }
    return N;
  }
  function o(b, N) {
    var j = b.sortIndex - N.sortIndex;
    return j !== 0 ? j : b.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    m = 1,
    p = null,
    c = 3,
    y = !1,
    w = !1,
    g = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(b) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= b)
        r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function x(b) {
    if (((g = !1), v(b), !w))
      if (n(a) !== null) (w = !0), V(E);
      else {
        var N = n(u);
        N !== null && F(x, N.startTime - b);
      }
  }
  function E(b, N) {
    (w = !1), g && ((g = !1), f(C), (C = -1)), (y = !0);
    var j = c;
    try {
      for (
        v(N), p = n(a);
        p !== null && (!(p.expirationTime > N) || (b && !A()));

      ) {
        var I = p.callback;
        if (typeof I == "function") {
          (p.callback = null), (c = p.priorityLevel);
          var z = I(p.expirationTime <= N);
          (N = e.unstable_now()),
            typeof z == "function" ? (p.callback = z) : p === n(a) && r(a),
            v(N);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var G = !0;
      else {
        var re = n(u);
        re !== null && F(x, re.startTime - N), (G = !1);
      }
      return G;
    } finally {
      (p = null), (c = j), (y = !1);
    }
  }
  var $ = !1,
    k = null,
    C = -1,
    L = 5,
    R = -1;
  function A() {
    return !(e.unstable_now() - R < L);
  }
  function T() {
    if (k !== null) {
      var b = e.unstable_now();
      R = b;
      var N = !0;
      try {
        N = k(!0, b);
      } finally {
        N ? Y() : (($ = !1), (k = null));
      }
    } else $ = !1;
  }
  var Y;
  if (typeof d == "function")
    Y = function () {
      d(T);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      B = W.port2;
    (W.port1.onmessage = T),
      (Y = function () {
        B.postMessage(null);
      });
  } else
    Y = function () {
      S(T, 0);
    };
  function V(b) {
    (k = b), $ || (($ = !0), Y());
  }
  function F(b, N) {
    C = S(function () {
      b(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), V(E));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (L = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (b) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = c;
      }
      var j = c;
      c = N;
      try {
        return b();
      } finally {
        c = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, N) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var j = c;
      c = b;
      try {
        return N();
      } finally {
        c = j;
      }
    }),
    (e.unstable_scheduleCallback = function (b, N, j) {
      var I = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? I + j : I))
          : (j = I),
        b)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = j + z),
        (b = {
          id: m++,
          callback: N,
          priorityLevel: b,
          startTime: j,
          expirationTime: z,
          sortIndex: -1,
        }),
        j > I
          ? ((b.sortIndex = j),
            t(u, b),
            n(a) === null &&
              b === n(u) &&
              (g ? (f(C), (C = -1)) : (g = !0), F(x, j - I)))
          : ((b.sortIndex = z), t(a, b), w || y || ((w = !0), V(E))),
        b
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (b) {
      var N = c;
      return function () {
        var j = c;
        c = N;
        try {
          return b.apply(this, arguments);
        } finally {
          c = j;
        }
      };
    });
})(ld);
od.exports = ld;
var Dm = od.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id = h,
  Je = Dm;
function P(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sd = new Set(),
  eo = {};
function Mn(e, t) {
  fr(e, t), fr(e + "Capture", t);
}
function fr(e, t) {
  for (eo[e] = t, e = 0; e < t.length; e++) sd.add(t[e]);
}
var It = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yi = Object.prototype.hasOwnProperty,
  jm =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  au = {},
  uu = {};
function Fm(e) {
  return Yi.call(uu, e)
    ? !0
    : Yi.call(au, e)
    ? !1
    : jm.test(e)
    ? (uu[e] = !0)
    : ((au[e] = !0), !1);
}
function Bm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Vm(e, t, n, r) {
  if (t === null || typeof t > "u" || Bm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    be[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  be[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  be[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  be[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    be[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  be[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  be[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  be[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  be[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function qs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, qs);
    be[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, qs);
    be[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Js, qs);
  be[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  be[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  be[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ea(e, t, n, r) {
  var o = be.hasOwnProperty(t) ? be[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vm(t, n, o, r) && (n = null),
    r || o === null
      ? Fm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  No = Symbol.for("react.element"),
  Un = Symbol.for("react.portal"),
  Kn = Symbol.for("react.fragment"),
  ta = Symbol.for("react.strict_mode"),
  Gi = Symbol.for("react.profiler"),
  ad = Symbol.for("react.provider"),
  ud = Symbol.for("react.context"),
  na = Symbol.for("react.forward_ref"),
  Xi = Symbol.for("react.suspense"),
  Zi = Symbol.for("react.suspense_list"),
  ra = Symbol.for("react.memo"),
  Zt = Symbol.for("react.lazy"),
  cd = Symbol.for("react.offscreen"),
  cu = Symbol.iterator;
function Rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cu && e[cu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  mi;
function Br(e) {
  if (mi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      mi = (t && t[1]) || "";
    }
  return (
    `
` +
    mi +
    e
  );
}
var hi = !1;
function vi(e, t) {
  if (!e || hi) return "";
  hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (hi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Br(e) : "";
}
function Wm(e) {
  switch (e.tag) {
    case 5:
      return Br(e.type);
    case 16:
      return Br("Lazy");
    case 13:
      return Br("Suspense");
    case 19:
      return Br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vi(e.type, !1)), e;
    case 11:
      return (e = vi(e.type.render, !1)), e;
    case 1:
      return (e = vi(e.type, !0)), e;
    default:
      return "";
  }
}
function Ji(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kn:
      return "Fragment";
    case Un:
      return "Portal";
    case Gi:
      return "Profiler";
    case ta:
      return "StrictMode";
    case Xi:
      return "Suspense";
    case Zi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ud:
        return (e.displayName || "Context") + ".Consumer";
      case ad:
        return (e._context.displayName || "Context") + ".Provider";
      case na:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ra:
        return (
          (t = e.displayName || null), t !== null ? t : Ji(e.type) || "Memo"
        );
      case Zt:
        (t = e._payload), (e = e._init);
        try {
          return Ji(e(t));
        } catch {}
    }
  return null;
}
function Hm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ji(t);
    case 8:
      return t === ta ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function dd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Um(e) {
  var t = dd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function To(e) {
  e._valueTracker || (e._valueTracker = Um(e));
}
function fd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = dd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qi(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function du(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = fn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pd(e, t) {
  (t = t.checked), t != null && ea(e, "checked", t, !1);
}
function es(e, t) {
  pd(e, t);
  var n = fn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ts(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ts(e, t.type, fn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ts(e, t, n) {
  (t !== "number" || hl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vr = Array.isArray;
function or(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + fn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ns(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function pu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(P(92));
      if (Vr(n)) {
        if (1 < n.length) throw Error(P(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: fn(n) };
}
function md(e, t) {
  var n = fn(t.value),
    r = fn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function mu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ro,
  vd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ro = Ro || document.createElement("div"),
          Ro.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ro.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function to(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Km = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ur).forEach(function (e) {
  Km.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function gd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ("" + t).trim()
    : t + "px";
}
function yd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = gd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Qm = me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function os(e, t) {
  if (t) {
    if (Qm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(P(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(P(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(P(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(P(62));
  }
}
function ls(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var is = null;
function oa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ss = null,
  lr = null,
  ir = null;
function hu(e) {
  if ((e = Co(e))) {
    if (typeof ss != "function") throw Error(P(280));
    var t = e.stateNode;
    t && ((t = Yl(t)), ss(e.stateNode, e.type, t));
  }
}
function wd(e) {
  lr ? (ir ? ir.push(e) : (ir = [e])) : (lr = e);
}
function xd() {
  if (lr) {
    var e = lr,
      t = ir;
    if (((ir = lr = null), hu(e), t)) for (e = 0; e < t.length; e++) hu(t[e]);
  }
}
function Sd(e, t) {
  return e(t);
}
function Ed() {}
var gi = !1;
function Cd(e, t, n) {
  if (gi) return e(t, n);
  gi = !0;
  try {
    return Sd(e, t, n);
  } finally {
    (gi = !1), (lr !== null || ir !== null) && (Ed(), xd());
  }
}
function no(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(P(231, t, typeof n));
  return n;
}
var as = !1;
if (It)
  try {
    var Or = {};
    Object.defineProperty(Or, "passive", {
      get: function () {
        as = !0;
      },
    }),
      window.addEventListener("test", Or, Or),
      window.removeEventListener("test", Or, Or);
  } catch {
    as = !1;
  }
function Ym(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var Kr = !1,
  vl = null,
  gl = !1,
  us = null,
  Gm = {
    onError: function (e) {
      (Kr = !0), (vl = e);
    },
  };
function Xm(e, t, n, r, o, l, i, s, a) {
  (Kr = !1), (vl = null), Ym.apply(Gm, arguments);
}
function Zm(e, t, n, r, o, l, i, s, a) {
  if ((Xm.apply(this, arguments), Kr)) {
    if (Kr) {
      var u = vl;
      (Kr = !1), (vl = null);
    } else throw Error(P(198));
    gl || ((gl = !0), (us = u));
  }
}
function In(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function vu(e) {
  if (In(e) !== e) throw Error(P(188));
}
function Jm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = In(e)), t === null)) throw Error(P(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return vu(o), e;
        if (l === r) return vu(o), t;
        l = l.sibling;
      }
      throw Error(P(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(P(189));
      }
    }
    if (n.alternate !== r) throw Error(P(190));
  }
  if (n.tag !== 3) throw Error(P(188));
  return n.stateNode.current === n ? e : t;
}
function $d(e) {
  return (e = Jm(e)), e !== null ? bd(e) : null;
}
function bd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = bd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pd = Je.unstable_scheduleCallback,
  gu = Je.unstable_cancelCallback,
  qm = Je.unstable_shouldYield,
  eh = Je.unstable_requestPaint,
  ge = Je.unstable_now,
  th = Je.unstable_getCurrentPriorityLevel,
  la = Je.unstable_ImmediatePriority,
  _d = Je.unstable_UserBlockingPriority,
  yl = Je.unstable_NormalPriority,
  nh = Je.unstable_LowPriority,
  Nd = Je.unstable_IdlePriority,
  Hl = null,
  kt = null;
function rh(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(Hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : ih,
  oh = Math.log,
  lh = Math.LN2;
function ih(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((oh(e) / lh) | 0)) | 0;
}
var Oo = 64,
  Lo = 4194304;
function Wr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function wl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Wr(s)) : ((l &= i), l !== 0 && (r = Wr(l)));
  } else (i = n & ~o), i !== 0 ? (r = Wr(i)) : l !== 0 && (r = Wr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function sh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ah(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - pt(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = sh(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function cs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Td() {
  var e = Oo;
  return (Oo <<= 1), !(Oo & 4194240) && (Oo = 64), e;
}
function yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function So(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function uh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - pt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ia(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function Rd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Od,
  sa,
  Ld,
  Md,
  Id,
  ds = !1,
  Mo = [],
  rn = null,
  on = null,
  ln = null,
  ro = new Map(),
  oo = new Map(),
  qt = [],
  ch =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function yu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      on = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      ro.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oo.delete(t.pointerId);
  }
}
function Lr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Co(t)), t !== null && sa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function dh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (rn = Lr(rn, e, t, n, r, o)), !0;
    case "dragenter":
      return (on = Lr(on, e, t, n, r, o)), !0;
    case "mouseover":
      return (ln = Lr(ln, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ro.set(l, Lr(ro.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), oo.set(l, Lr(oo.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ad(e) {
  var t = En(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kd(n)), t !== null)) {
          (e.blockedOn = t),
            Id(e.priority, function () {
              Ld(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function nl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (is = r), n.target.dispatchEvent(r), (is = null);
    } else return (t = Co(n)), t !== null && sa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function wu(e, t, n) {
  nl(e) && n.delete(t);
}
function fh() {
  (ds = !1),
    rn !== null && nl(rn) && (rn = null),
    on !== null && nl(on) && (on = null),
    ln !== null && nl(ln) && (ln = null),
    ro.forEach(wu),
    oo.forEach(wu);
}
function Mr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ds ||
      ((ds = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, fh)));
}
function lo(e) {
  function t(o) {
    return Mr(o, e);
  }
  if (0 < Mo.length) {
    Mr(Mo[0], e);
    for (var n = 1; n < Mo.length; n++) {
      var r = Mo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Mr(rn, e),
      on !== null && Mr(on, e),
      ln !== null && Mr(ln, e),
      ro.forEach(t),
      oo.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    Ad(n), n.blockedOn === null && qt.shift();
}
var sr = Wt.ReactCurrentBatchConfig,
  xl = !0;
function ph(e, t, n, r) {
  var o = ne,
    l = sr.transition;
  sr.transition = null;
  try {
    (ne = 1), aa(e, t, n, r);
  } finally {
    (ne = o), (sr.transition = l);
  }
}
function mh(e, t, n, r) {
  var o = ne,
    l = sr.transition;
  sr.transition = null;
  try {
    (ne = 4), aa(e, t, n, r);
  } finally {
    (ne = o), (sr.transition = l);
  }
}
function aa(e, t, n, r) {
  if (xl) {
    var o = fs(e, t, n, r);
    if (o === null) _i(e, t, r, Sl, n), yu(e, r);
    else if (dh(o, e, t, n, r)) r.stopPropagation();
    else if ((yu(e, r), t & 4 && -1 < ch.indexOf(e))) {
      for (; o !== null; ) {
        var l = Co(o);
        if (
          (l !== null && Od(l),
          (l = fs(e, t, n, r)),
          l === null && _i(e, t, r, Sl, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else _i(e, t, r, null, n);
  }
}
var Sl = null;
function fs(e, t, n, r) {
  if (((Sl = null), (e = oa(r)), (e = En(e)), e !== null))
    if (((t = In(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Sl = e), null;
}
function zd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (th()) {
        case la:
          return 1;
        case _d:
          return 4;
        case yl:
        case nh:
          return 16;
        case Nd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  ua = null,
  rl = null;
function Dd() {
  if (rl) return rl;
  var e,
    t = ua,
    n = t.length,
    r,
    o = "value" in tn ? tn.value : tn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (rl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ol(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Io() {
  return !0;
}
function xu() {
  return !1;
}
function et(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Io
        : xu),
      (this.isPropagationStopped = xu),
      this
    );
  }
  return (
    me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Io));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Io));
      },
      persist: function () {},
      isPersistent: Io,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ca = et(Cr),
  Eo = me({}, Cr, { view: 0, detail: 0 }),
  hh = et(Eo),
  wi,
  xi,
  Ir,
  Ul = me({}, Eo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: da,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ir &&
            (Ir && e.type === "mousemove"
              ? ((wi = e.screenX - Ir.screenX), (xi = e.screenY - Ir.screenY))
              : (xi = wi = 0),
            (Ir = e)),
          wi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xi;
    },
  }),
  Su = et(Ul),
  vh = me({}, Ul, { dataTransfer: 0 }),
  gh = et(vh),
  yh = me({}, Eo, { relatedTarget: 0 }),
  Si = et(yh),
  wh = me({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xh = et(wh),
  Sh = me({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Eh = et(Sh),
  Ch = me({}, Cr, { data: 0 }),
  Eu = et(Ch),
  kh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  $h = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  bh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Ph(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bh[e]) ? !!t[e] : !1;
}
function da() {
  return Ph;
}
var _h = me({}, Eo, {
    key: function (e) {
      if (e.key) {
        var t = kh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ol(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? $h[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: da,
    charCode: function (e) {
      return e.type === "keypress" ? ol(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ol(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Nh = et(_h),
  Th = me({}, Ul, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Cu = et(Th),
  Rh = me({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: da,
  }),
  Oh = et(Rh),
  Lh = me({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mh = et(Lh),
  Ih = me({}, Ul, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Ah = et(Ih),
  zh = [9, 13, 27, 32],
  fa = It && "CompositionEvent" in window,
  Qr = null;
It && "documentMode" in document && (Qr = document.documentMode);
var Dh = It && "TextEvent" in window && !Qr,
  jd = It && (!fa || (Qr && 8 < Qr && 11 >= Qr)),
  ku = " ",
  $u = !1;
function Fd(e, t) {
  switch (e) {
    case "keyup":
      return zh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Bd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Qn = !1;
function jh(e, t) {
  switch (e) {
    case "compositionend":
      return Bd(t);
    case "keypress":
      return t.which !== 32 ? null : (($u = !0), ku);
    case "textInput":
      return (e = t.data), e === ku && $u ? null : e;
    default:
      return null;
  }
}
function Fh(e, t) {
  if (Qn)
    return e === "compositionend" || (!fa && Fd(e, t))
      ? ((e = Dd()), (rl = ua = tn = null), (Qn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bh[e.type] : t === "textarea";
}
function Vd(e, t, n, r) {
  wd(r),
    (t = El(t, "onChange")),
    0 < t.length &&
      ((n = new ca("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Yr = null,
  io = null;
function Vh(e) {
  qd(e, 0);
}
function Kl(e) {
  var t = Xn(e);
  if (fd(t)) return e;
}
function Wh(e, t) {
  if (e === "change") return t;
}
var Wd = !1;
if (It) {
  var Ei;
  if (It) {
    var Ci = "oninput" in document;
    if (!Ci) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"),
        (Ci = typeof Pu.oninput == "function");
    }
    Ei = Ci;
  } else Ei = !1;
  Wd = Ei && (!document.documentMode || 9 < document.documentMode);
}
function _u() {
  Yr && (Yr.detachEvent("onpropertychange", Hd), (io = Yr = null));
}
function Hd(e) {
  if (e.propertyName === "value" && Kl(io)) {
    var t = [];
    Vd(t, io, e, oa(e)), Cd(Vh, t);
  }
}
function Hh(e, t, n) {
  e === "focusin"
    ? (_u(), (Yr = t), (io = n), Yr.attachEvent("onpropertychange", Hd))
    : e === "focusout" && _u();
}
function Uh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Kl(io);
}
function Kh(e, t) {
  if (e === "click") return Kl(t);
}
function Qh(e, t) {
  if (e === "input" || e === "change") return Kl(t);
}
function Yh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ht = typeof Object.is == "function" ? Object.is : Yh;
function so(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Yi.call(t, o) || !ht(e[o], t[o])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = Nu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Nu(n);
  }
}
function Ud(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ud(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Kd() {
  for (var e = window, t = hl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hl(e.document);
  }
  return t;
}
function pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Gh(e) {
  var t = Kd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ud(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Tu(n, l));
        var i = Tu(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Xh = It && "documentMode" in document && 11 >= document.documentMode,
  Yn = null,
  ps = null,
  Gr = null,
  ms = !1;
function Ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ms ||
    Yn == null ||
    Yn !== hl(r) ||
    ((r = Yn),
    "selectionStart" in r && pa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gr && so(Gr, r)) ||
      ((Gr = r),
      (r = El(ps, "onSelect")),
      0 < r.length &&
        ((t = new ca("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yn))));
}
function Ao(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gn = {
    animationend: Ao("Animation", "AnimationEnd"),
    animationiteration: Ao("Animation", "AnimationIteration"),
    animationstart: Ao("Animation", "AnimationStart"),
    transitionend: Ao("Transition", "TransitionEnd"),
  },
  ki = {},
  Qd = {};
It &&
  ((Qd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gn.animationend.animation,
    delete Gn.animationiteration.animation,
    delete Gn.animationstart.animation),
  "TransitionEvent" in window || delete Gn.transitionend.transition);
function Ql(e) {
  if (ki[e]) return ki[e];
  if (!Gn[e]) return e;
  var t = Gn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Qd) return (ki[e] = t[n]);
  return e;
}
var Yd = Ql("animationend"),
  Gd = Ql("animationiteration"),
  Xd = Ql("animationstart"),
  Zd = Ql("transitionend"),
  Jd = new Map(),
  Ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vn(e, t) {
  Jd.set(e, t), Mn(t, [e]);
}
for (var $i = 0; $i < Ou.length; $i++) {
  var bi = Ou[$i],
    Zh = bi.toLowerCase(),
    Jh = bi[0].toUpperCase() + bi.slice(1);
  vn(Zh, "on" + Jh);
}
vn(Yd, "onAnimationEnd");
vn(Gd, "onAnimationIteration");
vn(Xd, "onAnimationStart");
vn("dblclick", "onDoubleClick");
vn("focusin", "onFocus");
vn("focusout", "onBlur");
vn(Zd, "onTransitionEnd");
fr("onMouseEnter", ["mouseout", "mouseover"]);
fr("onMouseLeave", ["mouseout", "mouseover"]);
fr("onPointerEnter", ["pointerout", "pointerover"]);
fr("onPointerLeave", ["pointerout", "pointerover"]);
Mn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Mn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Mn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Mn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Hr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  qh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zm(r, t, void 0, e), (e.currentTarget = null);
}
function qd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          Lu(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Lu(o, s, u), (l = a);
        }
    }
  }
  if (gl) throw ((e = us), (gl = !1), (us = null), e);
}
function ae(e, t) {
  var n = t[ws];
  n === void 0 && (n = t[ws] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ef(t, e, 2, !1), n.add(r));
}
function Pi(e, t, n) {
  var r = 0;
  t && (r |= 4), ef(n, e, r, t);
}
var zo = "_reactListening" + Math.random().toString(36).slice(2);
function ao(e) {
  if (!e[zo]) {
    (e[zo] = !0),
      sd.forEach(function (n) {
        n !== "selectionchange" && (qh.has(n) || Pi(n, !1, e), Pi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zo] || ((t[zo] = !0), Pi("selectionchange", !1, t));
  }
}
function ef(e, t, n, r) {
  switch (zd(t)) {
    case 1:
      var o = ph;
      break;
    case 4:
      o = mh;
      break;
    default:
      o = aa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !as ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function _i(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = En(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Cd(function () {
    var u = l,
      m = oa(n),
      p = [];
    e: {
      var c = Jd.get(e);
      if (c !== void 0) {
        var y = ca,
          w = e;
        switch (e) {
          case "keypress":
            if (ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Nh;
            break;
          case "focusin":
            (w = "focus"), (y = Si);
            break;
          case "focusout":
            (w = "blur"), (y = Si);
            break;
          case "beforeblur":
          case "afterblur":
            y = Si;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Su;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = gh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Oh;
            break;
          case Yd:
          case Gd:
          case Xd:
            y = xh;
            break;
          case Zd:
            y = Mh;
            break;
          case "scroll":
            y = hh;
            break;
          case "wheel":
            y = Ah;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Eh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Cu;
        }
        var g = (t & 4) !== 0,
          S = !g && e === "scroll",
          f = g ? (c !== null ? c + "Capture" : null) : c;
        g = [];
        for (var d = u, v; d !== null; ) {
          v = d;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              f !== null && ((x = no(d, f)), x != null && g.push(uo(d, x, v)))),
            S)
          )
            break;
          d = d.return;
        }
        0 < g.length &&
          ((c = new y(c, w, null, n, m)), p.push({ event: c, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          c &&
            n !== is &&
            (w = n.relatedTarget || n.fromElement) &&
            (En(w) || w[At]))
        )
          break e;
        if (
          (y || c) &&
          ((c =
            m.window === m
              ? m
              : (c = m.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? En(w) : null),
              w !== null &&
                ((S = In(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((g = Su),
            (x = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Cu),
              (x = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (S = y == null ? c : Xn(y)),
            (v = w == null ? c : Xn(w)),
            (c = new g(x, d + "leave", y, n, m)),
            (c.target = S),
            (c.relatedTarget = v),
            (x = null),
            En(m) === u &&
              ((g = new g(f, d + "enter", w, n, m)),
              (g.target = v),
              (g.relatedTarget = S),
              (x = g)),
            (S = x),
            y && w)
          )
            t: {
              for (g = y, f = w, d = 0, v = g; v; v = Bn(v)) d++;
              for (v = 0, x = f; x; x = Bn(x)) v++;
              for (; 0 < d - v; ) (g = Bn(g)), d--;
              for (; 0 < v - d; ) (f = Bn(f)), v--;
              for (; d--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = Bn(g)), (f = Bn(f));
              }
              g = null;
            }
          else g = null;
          y !== null && Mu(p, c, y, g, !1),
            w !== null && S !== null && Mu(p, S, w, g, !0);
        }
      }
      e: {
        if (
          ((c = u ? Xn(u) : window),
          (y = c.nodeName && c.nodeName.toLowerCase()),
          y === "select" || (y === "input" && c.type === "file"))
        )
          var E = Wh;
        else if (bu(c))
          if (Wd) E = Qh;
          else {
            E = Uh;
            var $ = Hh;
          }
        else
          (y = c.nodeName) &&
            y.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (E = Kh);
        if (E && (E = E(e, u))) {
          Vd(p, E, n, m);
          break e;
        }
        $ && $(e, c, u),
          e === "focusout" &&
            ($ = c._wrapperState) &&
            $.controlled &&
            c.type === "number" &&
            ts(c, "number", c.value);
      }
      switch ((($ = u ? Xn(u) : window), e)) {
        case "focusin":
          (bu($) || $.contentEditable === "true") &&
            ((Yn = $), (ps = u), (Gr = null));
          break;
        case "focusout":
          Gr = ps = Yn = null;
          break;
        case "mousedown":
          ms = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ms = !1), Ru(p, n, m);
          break;
        case "selectionchange":
          if (Xh) break;
        case "keydown":
        case "keyup":
          Ru(p, n, m);
      }
      var k;
      if (fa)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Qn
          ? Fd(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (jd &&
          n.locale !== "ko" &&
          (Qn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Qn && (k = Dd())
            : ((tn = m),
              (ua = "value" in tn ? tn.value : tn.textContent),
              (Qn = !0))),
        ($ = El(u, C)),
        0 < $.length &&
          ((C = new Eu(C, e, null, n, m)),
          p.push({ event: C, listeners: $ }),
          k ? (C.data = k) : ((k = Bd(n)), k !== null && (C.data = k)))),
        (k = Dh ? jh(e, n) : Fh(e, n)) &&
          ((u = El(u, "onBeforeInput")),
          0 < u.length &&
            ((m = new Eu("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: u }),
            (m.data = k)));
    }
    qd(p, t);
  });
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function El(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = no(e, n)),
      l != null && r.unshift(uo(e, l, o)),
      (l = no(e, t)),
      l != null && r.push(uo(e, l, o))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = no(n, l)), a != null && i.unshift(uo(n, a, s)))
        : o || ((a = no(n, l)), a != null && i.push(uo(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var e0 = /\r\n?/g,
  t0 = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      e0,
      `
`
    )
    .replace(t0, "");
}
function Do(e, t, n) {
  if (((t = Iu(t)), Iu(e) !== t && n)) throw Error(P(425));
}
function Cl() {}
var hs = null,
  vs = null;
function gs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ys = typeof setTimeout == "function" ? setTimeout : void 0,
  n0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Au = typeof Promise == "function" ? Promise : void 0,
  r0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Au < "u"
      ? function (e) {
          return Au.resolve(null).then(e).catch(o0);
        }
      : ys;
function o0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ni(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), lo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  lo(t);
}
function sn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kr = Math.random().toString(36).slice(2),
  St = "__reactFiber$" + kr,
  co = "__reactProps$" + kr,
  At = "__reactContainer$" + kr,
  ws = "__reactEvents$" + kr,
  l0 = "__reactListeners$" + kr,
  i0 = "__reactHandles$" + kr;
function En(e) {
  var t = e[St];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[At] || n[St])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[St])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Co(e) {
  return (
    (e = e[St] || e[At]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(P(33));
}
function Yl(e) {
  return e[co] || null;
}
var xs = [],
  Zn = -1;
function gn(e) {
  return { current: e };
}
function ue(e) {
  0 > Zn || ((e.current = xs[Zn]), (xs[Zn] = null), Zn--);
}
function le(e, t) {
  Zn++, (xs[Zn] = e.current), (e.current = t);
}
var pn = {},
  Oe = gn(pn),
  Ve = gn(!1),
  _n = pn;
function pr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function We(e) {
  return (e = e.childContextTypes), e != null;
}
function kl() {
  ue(Ve), ue(Oe);
}
function Du(e, t, n) {
  if (Oe.current !== pn) throw Error(P(168));
  le(Oe, t), le(Ve, n);
}
function tf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(P(108, Hm(e) || "Unknown", o));
  return me({}, n, r);
}
function $l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pn),
    (_n = Oe.current),
    le(Oe, e),
    le(Ve, Ve.current),
    !0
  );
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(P(169));
  n
    ? ((e = tf(e, t, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(Ve),
      ue(Oe),
      le(Oe, e))
    : ue(Ve),
    le(Ve, n);
}
var Rt = null,
  Gl = !1,
  Ti = !1;
function nf(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function s0(e) {
  (Gl = !0), nf(e);
}
function yn() {
  if (!Ti && Rt !== null) {
    Ti = !0;
    var e = 0,
      t = ne;
    try {
      var n = Rt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Rt = null), (Gl = !1);
    } catch (o) {
      throw (Rt !== null && (Rt = Rt.slice(e + 1)), Pd(la, yn), o);
    } finally {
      (ne = t), (Ti = !1);
    }
  }
  return null;
}
var Jn = [],
  qn = 0,
  bl = null,
  Pl = 0,
  nt = [],
  rt = 0,
  Nn = null,
  Ot = 1,
  Lt = "";
function xn(e, t) {
  (Jn[qn++] = Pl), (Jn[qn++] = bl), (bl = e), (Pl = t);
}
function rf(e, t, n) {
  (nt[rt++] = Ot), (nt[rt++] = Lt), (nt[rt++] = Nn), (Nn = e);
  var r = Ot;
  e = Lt;
  var o = 32 - pt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - pt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ot = (1 << (32 - pt(t) + o)) | (n << o) | r),
      (Lt = l + e);
  } else (Ot = (1 << l) | (n << o) | r), (Lt = e);
}
function ma(e) {
  e.return !== null && (xn(e, 1), rf(e, 1, 0));
}
function ha(e) {
  for (; e === bl; )
    (bl = Jn[--qn]), (Jn[qn] = null), (Pl = Jn[--qn]), (Jn[qn] = null);
  for (; e === Nn; )
    (Nn = nt[--rt]),
      (nt[rt] = null),
      (Lt = nt[--rt]),
      (nt[rt] = null),
      (Ot = nt[--rt]),
      (nt[rt] = null);
}
var Xe = null,
  Ge = null,
  de = !1,
  ft = null;
function of(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Xe = e), (Ge = sn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Xe = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Nn !== null ? { id: Ot, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Xe = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ss(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Es(e) {
  if (de) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!Fu(e, t)) {
        if (Ss(e)) throw Error(P(418));
        t = sn(n.nextSibling);
        var r = Xe;
        t && Fu(e, t)
          ? of(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (Xe = e));
      }
    } else {
      if (Ss(e)) throw Error(P(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (Xe = e);
    }
  }
}
function Bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Xe = e;
}
function jo(e) {
  if (e !== Xe) return !1;
  if (!de) return Bu(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gs(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (Ss(e)) throw (lf(), Error(P(418)));
    for (; t; ) of(e, t), (t = sn(t.nextSibling));
  }
  if ((Bu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(P(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = sn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Xe ? sn(e.stateNode.nextSibling) : null;
  return !0;
}
function lf() {
  for (var e = Ge; e; ) e = sn(e.nextSibling);
}
function mr() {
  (Ge = Xe = null), (de = !1);
}
function va(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var a0 = Wt.ReactCurrentBatchConfig;
function ct(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _l = gn(null),
  Nl = null,
  er = null,
  ga = null;
function ya() {
  ga = er = Nl = null;
}
function wa(e) {
  var t = _l.current;
  ue(_l), (e._currentValue = t);
}
function Cs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ar(e, t) {
  (Nl = e),
    (ga = er = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Be = !0), (e.firstContext = null));
}
function it(e) {
  var t = e._currentValue;
  if (ga !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), er === null)) {
      if (Nl === null) throw Error(P(308));
      (er = e), (Nl.dependencies = { lanes: 0, firstContext: e });
    } else er = er.next = e;
  return t;
}
var Cn = null;
function xa(e) {
  Cn === null ? (Cn = [e]) : Cn.push(e);
}
function sf(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), xa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Jt = !1;
function Sa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function af(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), xa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function ll(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n);
  }
}
function Vu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Tl(e, t, n, r) {
  var o = e.updateQueue;
  Jt = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== i &&
        (s === null ? (m.firstBaseUpdate = u) : (s.next = u),
        (m.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var p = o.baseState;
    (i = 0), (m = u = a = null), (s = l);
    do {
      var c = s.lane,
        y = s.eventTime;
      if ((r & c) === c) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var w = e,
            g = s;
          switch (((c = t), (y = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == "function")) {
                p = w.call(y, p, c);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = g.payload),
                (c = typeof w == "function" ? w.call(y, p, c) : w),
                c == null)
              )
                break e;
              p = me({}, p, c);
              break e;
            case 2:
              Jt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (c = o.effects),
          c === null ? (o.effects = [s]) : c.push(s));
      } else
        (y = {
          eventTime: y,
          lane: c,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((u = m = y), (a = p)) : (m = m.next = y),
          (i |= c);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (c = s),
          (s = c.next),
          (c.next = null),
          (o.lastBaseUpdate = c),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Rn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function Wu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(P(191, o));
        o.call(r);
      }
    }
}
var uf = new id.Component().refs;
function ks(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = cn(e),
      l = Mt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = an(e, l, o)),
      t !== null && (mt(t, e, o, r), ll(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ae(),
      o = cn(e),
      l = Mt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = an(e, l, o)),
      t !== null && (mt(t, e, o, r), ll(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ae(),
      r = cn(e),
      o = Mt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = an(e, o, r)),
      t !== null && (mt(t, e, r, n), ll(t, e, r));
  },
};
function Hu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !so(n, r) || !so(o, l)
      : !0
  );
}
function cf(e, t, n) {
  var r = !1,
    o = pn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = it(l))
      : ((o = We(t) ? _n : Oe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? pr(e, o) : pn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Uu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xl.enqueueReplaceState(t, t.state, null);
}
function $s(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = uf), Sa(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = it(l))
    : ((l = We(t) ? _n : Oe.current), (o.context = pr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ks(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Xl.enqueueReplaceState(o, o.state, null),
      Tl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(P(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(P(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            s === uf && (s = o.refs = {}),
              i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(P(284));
    if (!n._owner) throw Error(P(290, e));
  }
  return e;
}
function Fo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      P(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ku(e) {
  var t = e._init;
  return t(e._payload);
}
function df(e) {
  function t(f, d) {
    if (e) {
      var v = f.deletions;
      v === null ? ((f.deletions = [d]), (f.flags |= 16)) : v.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function o(f, d) {
    return (f = dn(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, v) {
    return (
      (f.index = v),
      e
        ? ((v = f.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((f.flags |= 2), d) : v)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, v, x) {
    return d === null || d.tag !== 6
      ? ((d = zi(v, f.mode, x)), (d.return = f), d)
      : ((d = o(d, v)), (d.return = f), d);
  }
  function a(f, d, v, x) {
    var E = v.type;
    return E === Kn
      ? m(f, d, v.props.children, x, v.key)
      : d !== null &&
        (d.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Zt &&
            Ku(E) === d.type))
      ? ((x = o(d, v.props)), (x.ref = Ar(f, d, v)), (x.return = f), x)
      : ((x = dl(v.type, v.key, v.props, null, f.mode, x)),
        (x.ref = Ar(f, d, v)),
        (x.return = f),
        x);
  }
  function u(f, d, v, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = Di(v, f.mode, x)), (d.return = f), d)
      : ((d = o(d, v.children || [])), (d.return = f), d);
  }
  function m(f, d, v, x, E) {
    return d === null || d.tag !== 7
      ? ((d = Pn(v, f.mode, x, E)), (d.return = f), d)
      : ((d = o(d, v)), (d.return = f), d);
  }
  function p(f, d, v) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = zi("" + d, f.mode, v)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case No:
          return (
            (v = dl(d.type, d.key, d.props, null, f.mode, v)),
            (v.ref = Ar(f, null, d)),
            (v.return = f),
            v
          );
        case Un:
          return (d = Di(d, f.mode, v)), (d.return = f), d;
        case Zt:
          var x = d._init;
          return p(f, x(d._payload), v);
      }
      if (Vr(d) || Rr(d))
        return (d = Pn(d, f.mode, v, null)), (d.return = f), d;
      Fo(f, d);
    }
    return null;
  }
  function c(f, d, v, x) {
    var E = d !== null ? d.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return E !== null ? null : s(f, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case No:
          return v.key === E ? a(f, d, v, x) : null;
        case Un:
          return v.key === E ? u(f, d, v, x) : null;
        case Zt:
          return (E = v._init), c(f, d, E(v._payload), x);
      }
      if (Vr(v) || Rr(v)) return E !== null ? null : m(f, d, v, x, null);
      Fo(f, v);
    }
    return null;
  }
  function y(f, d, v, x, E) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (f = f.get(v) || null), s(d, f, "" + x, E);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case No:
          return (f = f.get(x.key === null ? v : x.key) || null), a(d, f, x, E);
        case Un:
          return (f = f.get(x.key === null ? v : x.key) || null), u(d, f, x, E);
        case Zt:
          var $ = x._init;
          return y(f, d, v, $(x._payload), E);
      }
      if (Vr(x) || Rr(x)) return (f = f.get(v) || null), m(d, f, x, E, null);
      Fo(d, x);
    }
    return null;
  }
  function w(f, d, v, x) {
    for (
      var E = null, $ = null, k = d, C = (d = 0), L = null;
      k !== null && C < v.length;
      C++
    ) {
      k.index > C ? ((L = k), (k = null)) : (L = k.sibling);
      var R = c(f, k, v[C], x);
      if (R === null) {
        k === null && (k = L);
        break;
      }
      e && k && R.alternate === null && t(f, k),
        (d = l(R, d, C)),
        $ === null ? (E = R) : ($.sibling = R),
        ($ = R),
        (k = L);
    }
    if (C === v.length) return n(f, k), de && xn(f, C), E;
    if (k === null) {
      for (; C < v.length; C++)
        (k = p(f, v[C], x)),
          k !== null &&
            ((d = l(k, d, C)), $ === null ? (E = k) : ($.sibling = k), ($ = k));
      return de && xn(f, C), E;
    }
    for (k = r(f, k); C < v.length; C++)
      (L = y(k, f, C, v[C], x)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? C : L.key),
          (d = l(L, d, C)),
          $ === null ? (E = L) : ($.sibling = L),
          ($ = L));
    return (
      e &&
        k.forEach(function (A) {
          return t(f, A);
        }),
      de && xn(f, C),
      E
    );
  }
  function g(f, d, v, x) {
    var E = Rr(v);
    if (typeof E != "function") throw Error(P(150));
    if (((v = E.call(v)), v == null)) throw Error(P(151));
    for (
      var $ = (E = null), k = d, C = (d = 0), L = null, R = v.next();
      k !== null && !R.done;
      C++, R = v.next()
    ) {
      k.index > C ? ((L = k), (k = null)) : (L = k.sibling);
      var A = c(f, k, R.value, x);
      if (A === null) {
        k === null && (k = L);
        break;
      }
      e && k && A.alternate === null && t(f, k),
        (d = l(A, d, C)),
        $ === null ? (E = A) : ($.sibling = A),
        ($ = A),
        (k = L);
    }
    if (R.done) return n(f, k), de && xn(f, C), E;
    if (k === null) {
      for (; !R.done; C++, R = v.next())
        (R = p(f, R.value, x)),
          R !== null &&
            ((d = l(R, d, C)), $ === null ? (E = R) : ($.sibling = R), ($ = R));
      return de && xn(f, C), E;
    }
    for (k = r(f, k); !R.done; C++, R = v.next())
      (R = y(k, f, C, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? C : R.key),
          (d = l(R, d, C)),
          $ === null ? (E = R) : ($.sibling = R),
          ($ = R));
    return (
      e &&
        k.forEach(function (T) {
          return t(f, T);
        }),
      de && xn(f, C),
      E
    );
  }
  function S(f, d, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Kn &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case No:
          e: {
            for (var E = v.key, $ = d; $ !== null; ) {
              if ($.key === E) {
                if (((E = v.type), E === Kn)) {
                  if ($.tag === 7) {
                    n(f, $.sibling),
                      (d = o($, v.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  $.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Zt &&
                    Ku(E) === $.type)
                ) {
                  n(f, $.sibling),
                    (d = o($, v.props)),
                    (d.ref = Ar(f, $, v)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, $);
                break;
              } else t(f, $);
              $ = $.sibling;
            }
            v.type === Kn
              ? ((d = Pn(v.props.children, f.mode, x, v.key)),
                (d.return = f),
                (f = d))
              : ((x = dl(v.type, v.key, v.props, null, f.mode, x)),
                (x.ref = Ar(f, d, v)),
                (x.return = f),
                (f = x));
          }
          return i(f);
        case Un:
          e: {
            for ($ = v.key; d !== null; ) {
              if (d.key === $)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(f, d.sibling),
                    (d = o(d, v.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = Di(v, f.mode, x)), (d.return = f), (f = d);
          }
          return i(f);
        case Zt:
          return ($ = v._init), S(f, d, $(v._payload), x);
      }
      if (Vr(v)) return w(f, d, v, x);
      if (Rr(v)) return g(f, d, v, x);
      Fo(f, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = o(d, v)), (d.return = f), (f = d))
          : (n(f, d), (d = zi(v, f.mode, x)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return S;
}
var hr = df(!0),
  ff = df(!1),
  ko = {},
  $t = gn(ko),
  fo = gn(ko),
  po = gn(ko);
function kn(e) {
  if (e === ko) throw Error(P(174));
  return e;
}
function Ea(e, t) {
  switch ((le(po, t), le(fo, e), le($t, ko), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = rs(t, e));
  }
  ue($t), le($t, t);
}
function vr() {
  ue($t), ue(fo), ue(po);
}
function pf(e) {
  kn(po.current);
  var t = kn($t.current),
    n = rs(t, e.type);
  t !== n && (le(fo, e), le($t, n));
}
function Ca(e) {
  fo.current === e && (ue($t), ue(fo));
}
var fe = gn(0);
function Rl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ri = [];
function ka() {
  for (var e = 0; e < Ri.length; e++)
    Ri[e]._workInProgressVersionPrimary = null;
  Ri.length = 0;
}
var il = Wt.ReactCurrentDispatcher,
  Oi = Wt.ReactCurrentBatchConfig,
  Tn = 0,
  pe = null,
  we = null,
  Se = null,
  Ol = !1,
  Xr = !1,
  mo = 0,
  u0 = 0;
function Ne() {
  throw Error(P(321));
}
function $a(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ht(e[n], t[n])) return !1;
  return !0;
}
function ba(e, t, n, r, o, l) {
  if (
    ((Tn = l),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (il.current = e === null || e.memoizedState === null ? p0 : m0),
    (e = n(r, o)),
    Xr)
  ) {
    l = 0;
    do {
      if (((Xr = !1), (mo = 0), 25 <= l)) throw Error(P(301));
      (l += 1),
        (Se = we = null),
        (t.updateQueue = null),
        (il.current = h0),
        (e = n(r, o));
    } while (Xr);
  }
  if (
    ((il.current = Ll),
    (t = we !== null && we.next !== null),
    (Tn = 0),
    (Se = we = pe = null),
    (Ol = !1),
    t)
  )
    throw Error(P(300));
  return e;
}
function Pa() {
  var e = mo !== 0;
  return (mo = 0), e;
}
function xt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (pe.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function st() {
  if (we === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Se === null ? pe.memoizedState : Se.next;
  if (t !== null) (Se = t), (we = e);
  else {
    if (e === null) throw Error(P(310));
    (we = e),
      (e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null,
      }),
      Se === null ? (pe.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function ho(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Li(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = we,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
    do {
      var m = u.lane;
      if ((Tn & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = p), (i = r)) : (a = a.next = p),
          (pe.lanes |= m),
          (Rn |= m);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      ht(r, t.memoizedState) || (Be = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (pe.lanes |= l), (Rn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Mi(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(P(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    ht(l, t.memoizedState) || (Be = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function mf() {}
function hf(e, t) {
  var n = pe,
    r = st(),
    o = t(),
    l = !ht(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Be = !0)),
    (r = r.queue),
    _a(yf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vo(9, gf.bind(null, n, r, o, t), void 0, null),
      Ce === null)
    )
      throw Error(P(349));
    Tn & 30 || vf(n, t, o);
  }
  return o;
}
function vf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function gf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wf(t) && xf(e);
}
function yf(e, t, n) {
  return n(function () {
    wf(t) && xf(e);
  });
}
function wf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function xf(e) {
  var t = zt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Qu(e) {
  var t = xt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ho,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = f0.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function vo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sf() {
  return st().memoizedState;
}
function sl(e, t, n, r) {
  var o = xt();
  (pe.flags |= e),
    (o.memoizedState = vo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Zl(e, t, n, r) {
  var o = st();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (we !== null) {
    var i = we.memoizedState;
    if (((l = i.destroy), r !== null && $a(r, i.deps))) {
      o.memoizedState = vo(t, n, l, r);
      return;
    }
  }
  (pe.flags |= e), (o.memoizedState = vo(1 | t, n, l, r));
}
function Yu(e, t) {
  return sl(8390656, 8, e, t);
}
function _a(e, t) {
  return Zl(2048, 8, e, t);
}
function Ef(e, t) {
  return Zl(4, 2, e, t);
}
function Cf(e, t) {
  return Zl(4, 4, e, t);
}
function kf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $f(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Zl(4, 4, kf.bind(null, t, e), n)
  );
}
function Na() {}
function bf(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $a(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pf(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $a(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _f(e, t, n) {
  return Tn & 21
    ? (ht(n, t) || ((n = Td()), (pe.lanes |= n), (Rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Be = !0)), (e.memoizedState = n));
}
function c0(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Oi.transition;
  Oi.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (Oi.transition = r);
  }
}
function Nf() {
  return st().memoizedState;
}
function d0(e, t, n) {
  var r = cn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Tf(e))
  )
    Rf(t, n);
  else if (((n = sf(e, t, n, r)), n !== null)) {
    var o = Ae();
    mt(n, e, r, o), Of(n, t, r);
  }
}
function f0(e, t, n) {
  var r = cn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tf(e)) Rf(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), ht(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), xa(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = sf(e, t, o, r)),
      n !== null && ((o = Ae()), mt(n, e, r, o), Of(n, t, r));
  }
}
function Tf(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Rf(e, t) {
  Xr = Ol = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ia(e, n);
  }
}
var Ll = {
    readContext: it,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  p0 = {
    readContext: it,
    useCallback: function (e, t) {
      return (xt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: it,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        sl(4194308, 4, kf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return sl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return sl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = xt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = xt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = d0.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = xt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qu,
    useDebugValue: Na,
    useDeferredValue: function (e) {
      return (xt().memoizedState = e);
    },
    useTransition: function () {
      var e = Qu(!1),
        t = e[0];
      return (e = c0.bind(null, e[1])), (xt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = xt();
      if (de) {
        if (n === void 0) throw Error(P(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(P(349));
        Tn & 30 || vf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Yu(yf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        vo(9, gf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = xt(),
        t = Ce.identifierPrefix;
      if (de) {
        var n = Lt,
          r = Ot;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = mo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = u0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  m0 = {
    readContext: it,
    useCallback: bf,
    useContext: it,
    useEffect: _a,
    useImperativeHandle: $f,
    useInsertionEffect: Ef,
    useLayoutEffect: Cf,
    useMemo: Pf,
    useReducer: Li,
    useRef: Sf,
    useState: function () {
      return Li(ho);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = st();
      return _f(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Li(ho)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: mf,
    useSyncExternalStore: hf,
    useId: Nf,
    unstable_isNewReconciler: !1,
  },
  h0 = {
    readContext: it,
    useCallback: bf,
    useContext: it,
    useEffect: _a,
    useImperativeHandle: $f,
    useInsertionEffect: Ef,
    useLayoutEffect: Cf,
    useMemo: Pf,
    useReducer: Mi,
    useRef: Sf,
    useState: function () {
      return Mi(ho);
    },
    useDebugValue: Na,
    useDeferredValue: function (e) {
      var t = st();
      return we === null ? (t.memoizedState = e) : _f(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = Mi(ho)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: mf,
    useSyncExternalStore: hf,
    useId: Nf,
    unstable_isNewReconciler: !1,
  };
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var v0 = typeof WeakMap == "function" ? WeakMap : Map;
function Lf(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Il || ((Il = !0), (As = r)), bs(e, t);
    }),
    n
  );
}
function Mf(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        bs(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        bs(e, t),
          typeof r != "function" &&
            (un === null ? (un = new Set([this])) : un.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Gu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new v0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = T0.bind(null, e, t, n)), t.then(e, e));
}
function Xu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Mt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var g0 = Wt.ReactCurrentOwner,
  Be = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? ff(t, null, n, r) : hr(t, e.child, n, r);
}
function Ju(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    ar(t, o),
    (r = ba(e, t, n, r, l, o)),
    (n = Pa()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dt(e, t, o))
      : (de && n && ma(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function qu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !za(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), If(e, t, l, r, o))
      : ((e = dl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : so), n(i, r) && e.ref === t.ref)
    )
      return Dt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = dn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function If(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (so(l, r) && e.ref === t.ref)
      if (((Be = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Be = !0);
      else return (t.lanes = e.lanes), Dt(e, t, o);
  }
  return Ps(e, t, n, r, o);
}
function Af(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(nr, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          le(nr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        le(nr, Qe),
        (Qe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(nr, Qe),
      (Qe |= r);
  return Ie(e, t, o, n), t.child;
}
function zf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ps(e, t, n, r, o) {
  var l = We(n) ? _n : Oe.current;
  return (
    (l = pr(t, l)),
    ar(t, o),
    (n = ba(e, t, n, r, l, o)),
    (r = Pa()),
    e !== null && !Be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Dt(e, t, o))
      : (de && r && ma(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function ec(e, t, n, r, o) {
  if (We(n)) {
    var l = !0;
    $l(t);
  } else l = !1;
  if ((ar(t, o), t.stateNode === null))
    al(e, t), cf(t, n, r), $s(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = it(u))
      : ((u = We(n) ? _n : Oe.current), (u = pr(t, u)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Uu(t, i, r, u)),
      (Jt = !1);
    var c = t.memoizedState;
    (i.state = c),
      Tl(t, r, i, o),
      (a = t.memoizedState),
      s !== r || c !== a || Ve.current || Jt
        ? (typeof m == "function" && (ks(t, n, m, r), (a = t.memoizedState)),
          (s = Jt || Hu(t, n, s, r, c, a, u))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      af(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : ct(t.type, s)),
      (i.props = u),
      (p = t.pendingProps),
      (c = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = it(a))
        : ((a = We(n) ? _n : Oe.current), (a = pr(t, a)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== p || c !== a) && Uu(t, i, r, a)),
      (Jt = !1),
      (c = t.memoizedState),
      (i.state = c),
      Tl(t, r, i, o);
    var w = t.memoizedState;
    s !== p || c !== w || Ve.current || Jt
      ? (typeof y == "function" && (ks(t, n, y, r), (w = t.memoizedState)),
        (u = Jt || Hu(t, n, u, r, c, w, a) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _s(e, t, n, r, l, o);
}
function _s(e, t, n, r, o, l) {
  zf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ju(t, n, !1), Dt(e, t, l);
  (r = t.stateNode), (g0.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hr(t, e.child, null, l)), (t.child = hr(t, null, s, l)))
      : Ie(e, t, s, l),
    (t.memoizedState = r.state),
    o && ju(t, n, !0),
    t.child
  );
}
function Df(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Du(e, t.context, !1),
    Ea(e, t.containerInfo);
}
function tc(e, t, n, r, o) {
  return mr(), va(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var Ns = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ts(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jf(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(fe, o & 1),
    e === null)
  )
    return (
      Es(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = ei(i, r, 0, null)),
              (e = Pn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Ts(n)),
              (t.memoizedState = Ns),
              e)
            : Ta(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return y0(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = dn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = dn(s, l)) : ((l = Pn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ts(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ns),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = dn(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ta(e, t) {
  return (
    (t = ei({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Bo(e, t, n, r) {
  return (
    r !== null && va(r),
    hr(t, e.child, null, n),
    (e = Ta(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function y0(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ii(Error(P(422)))), Bo(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = ei({ mode: "visible", children: r.children }, o, 0, null)),
        (l = Pn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, i),
        (t.child.memoizedState = Ts(i)),
        (t.memoizedState = Ns),
        l);
  if (!(t.mode & 1)) return Bo(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(P(419))), (r = Ii(l, r, void 0)), Bo(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Be || s)) {
    if (((r = Ce), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), zt(e, o), mt(r, e, o, -1));
    }
    return Aa(), (r = Ii(Error(P(421)))), Bo(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = R0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ge = sn(o.nextSibling)),
      (Xe = t),
      (de = !0),
      (ft = null),
      e !== null &&
        ((nt[rt++] = Ot),
        (nt[rt++] = Lt),
        (nt[rt++] = Nn),
        (Ot = e.id),
        (Lt = e.overflow),
        (Nn = t)),
      (t = Ta(t, r.children)),
      (t.flags |= 4096),
      t);
}
function nc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cs(e.return, t, n);
}
function Ai(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Ff(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ie(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && nc(e, n, t);
        else if (e.tag === 19) nc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((le(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Rl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Ai(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Rl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Ai(t, !0, n, null, l);
        break;
      case "together":
        Ai(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Dt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(P(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function w0(e, t, n) {
  switch (t.tag) {
    case 3:
      Df(t), mr();
      break;
    case 5:
      pf(t);
      break;
    case 1:
      We(t.type) && $l(t);
      break;
    case 4:
      Ea(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      le(_l, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? jf(e, t, n)
          : (le(fe, fe.current & 1),
            (e = Dt(e, t, n)),
            e !== null ? e.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ff(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        le(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Af(e, t, n);
  }
  return Dt(e, t, n);
}
var Bf, Rs, Vf, Wf;
Bf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Rs = function () {};
Vf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), kn($t.current);
    var l = null;
    switch (n) {
      case "input":
        (o = qi(e, o)), (r = qi(e, r)), (l = []);
        break;
      case "select":
        (o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ns(e, o)), (r = ns(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Cl);
    }
    os(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (eo.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (eo.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ae("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Wf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zr(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function x0(e, t, n) {
  var r = t.pendingProps;
  switch ((ha(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return We(t.type) && kl(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        ue(Ve),
        ue(Oe),
        ka(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (js(ft), (ft = null)))),
        Rs(e, t),
        Te(t),
        null
      );
    case 5:
      Ca(t);
      var o = kn(po.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(P(166));
          return Te(t), null;
        }
        if (((e = kn($t.current)), jo(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[St] = t), (r[co] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ae("cancel", r), ae("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ae("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Hr.length; o++) ae(Hr[o], r);
              break;
            case "source":
              ae("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ae("error", r), ae("load", r);
              break;
            case "details":
              ae("toggle", r);
              break;
            case "input":
              du(r, l), ae("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                ae("invalid", r);
              break;
            case "textarea":
              pu(r, l), ae("invalid", r);
          }
          os(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Do(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : eo.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  ae("scroll", r);
            }
          switch (n) {
            case "input":
              To(r), fu(r, l, !0);
              break;
            case "textarea":
              To(r), mu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Cl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[St] = t),
            (e[co] = r),
            Bf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ls(n, r)), n)) {
              case "dialog":
                ae("cancel", e), ae("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ae("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Hr.length; o++) ae(Hr[o], e);
                o = r;
                break;
              case "source":
                ae("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ae("error", e), ae("load", e), (o = r);
                break;
              case "details":
                ae("toggle", e), (o = r);
                break;
              case "input":
                du(e, r), (o = qi(e, r)), ae("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  ae("invalid", e);
                break;
              case "textarea":
                pu(e, r), (o = ns(e, r)), ae("invalid", e);
                break;
              default:
                o = r;
            }
            os(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? yd(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && vd(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && to(e, a)
                    : typeof a == "number" && to(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (eo.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && ae("scroll", e)
                      : a != null && ea(e, l, a, i));
              }
            switch (n) {
              case "input":
                To(e), fu(e, r, !1);
                break;
              case "textarea":
                To(e), mu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? or(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      or(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Cl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) Wf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(P(166));
        if (((n = kn(po.current)), kn($t.current), jo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[St] = t),
            (l = r.nodeValue !== n) && ((e = Xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Do(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[St] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (ue(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && Ge !== null && t.mode & 1 && !(t.flags & 128))
          lf(), mr(), (t.flags |= 98560), (l = !1);
        else if (((l = jo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(P(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(P(317));
            l[St] = t;
          } else
            mr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (l = !1);
        } else ft !== null && (js(ft), (ft = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? xe === 0 && (xe = 3) : Aa())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        vr(), Rs(e, t), e === null && ao(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return wa(t.type._context), Te(t), null;
    case 17:
      return We(t.type) && kl(), Te(t), null;
    case 19:
      if ((ue(fe), (l = t.memoizedState), l === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) zr(l, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Rl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    zr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return le(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            ge() > yr &&
            ((t.flags |= 128), (r = !0), zr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Rl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !de)
            )
              return Te(t), null;
          } else
            2 * ge() - l.renderingStartTime > yr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), zr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = ge()),
          (t.sibling = null),
          (n = fe.current),
          le(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        Ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(P(156, t.tag));
}
function S0(e, t) {
  switch ((ha(t), t.tag)) {
    case 1:
      return (
        We(t.type) && kl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        ue(Ve),
        ue(Oe),
        ka(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ca(t), null;
    case 13:
      if (
        (ue(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(P(340));
        mr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(fe), null;
    case 4:
      return vr(), null;
    case 10:
      return wa(t.type._context), null;
    case 22:
    case 23:
      return Ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Vo = !1,
  Re = !1,
  E0 = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function tr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function Os(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var rc = !1;
function C0(e, t) {
  if (((hs = xl), (e = Kd()), pa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            m = 0,
            p = e,
            c = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = i + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (a = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (c = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (c === n && ++u === o && (s = i),
                c === l && ++m === r && (a = i),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = c), (c = p.parentNode);
            }
            p = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vs = { focusedElem: e, selectionRange: n }, xl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    S = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : ct(t.type, g),
                      S
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(P(163));
            }
        } catch (x) {
          he(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (w = rc), (rc = !1), w;
}
function Zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Os(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ls(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Hf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[St], delete t[co], delete t[ws], delete t[l0], delete t[i0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ms(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Cl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ms(e, t, n), e = e.sibling; e !== null; ) Ms(e, t, n), (e = e.sibling);
}
function Is(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Is(e, t, n), e = e.sibling; e !== null; ) Is(e, t, n), (e = e.sibling);
}
var ke = null,
  dt = !1;
function Qt(e, t, n) {
  for (n = n.child; n !== null; ) Kf(e, t, n), (n = n.sibling);
}
function Kf(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(Hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Re || tr(n, t);
    case 6:
      var r = ke,
        o = dt;
      (ke = null),
        Qt(e, t, n),
        (ke = r),
        (dt = o),
        ke !== null &&
          (dt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (dt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ni(e.parentNode, n)
              : e.nodeType === 1 && Ni(e, n),
            lo(e))
          : Ni(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (o = dt),
        (ke = n.stateNode.containerInfo),
        (dt = !0),
        Qt(e, t, n),
        (ke = r),
        (dt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Os(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Qt(e, t, n);
      break;
    case 1:
      if (
        !Re &&
        (tr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          he(n, t, s);
        }
      Qt(e, t, n);
      break;
    case 21:
      Qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Re = (r = Re) || n.memoizedState !== null), Qt(e, t, n), (Re = r))
        : Qt(e, t, n);
      break;
    default:
      Qt(e, t, n);
  }
}
function lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new E0()),
      t.forEach(function (r) {
        var o = O0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ke = s.stateNode), (dt = !1);
              break e;
            case 3:
              (ke = s.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (ke = s.stateNode.containerInfo), (dt = !0);
              break e;
          }
          s = s.return;
        }
        if (ke === null) throw Error(P(160));
        Kf(l, i, o), (ke = null), (dt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        he(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qf(t, e), (t = t.sibling);
}
function Qf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ut(t, e), wt(e), r & 4)) {
        try {
          Zr(3, e, e.return), Jl(3, e);
        } catch (g) {
          he(e, e.return, g);
        }
        try {
          Zr(5, e, e.return);
        } catch (g) {
          he(e, e.return, g);
        }
      }
      break;
    case 1:
      ut(t, e), wt(e), r & 512 && n !== null && tr(n, n.return);
      break;
    case 5:
      if (
        (ut(t, e),
        wt(e),
        r & 512 && n !== null && tr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          to(o, "");
        } catch (g) {
          he(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && pd(o, l),
              ls(s, i);
            var u = ls(s, l);
            for (i = 0; i < a.length; i += 2) {
              var m = a[i],
                p = a[i + 1];
              m === "style"
                ? yd(o, p)
                : m === "dangerouslySetInnerHTML"
                ? vd(o, p)
                : m === "children"
                ? to(o, p)
                : ea(o, m, p, u);
            }
            switch (s) {
              case "input":
                es(o, l);
                break;
              case "textarea":
                md(o, l);
                break;
              case "select":
                var c = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? or(o, !!l.multiple, y, !1)
                  : c !== !!l.multiple &&
                    (l.defaultValue != null
                      ? or(o, !!l.multiple, l.defaultValue, !0)
                      : or(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[co] = l;
          } catch (g) {
            he(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ut(t, e), wt(e), r & 4)) {
        if (e.stateNode === null) throw Error(P(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (g) {
          he(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ut(t, e), wt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          lo(t.containerInfo);
        } catch (g) {
          he(e, e.return, g);
        }
      break;
    case 4:
      ut(t, e), wt(e);
      break;
    case 13:
      ut(t, e),
        wt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (La = ge())),
        r & 4 && lc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Re = (u = Re) || m), ut(t, e), (Re = u)) : ut(t, e),
        wt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !m && e.mode & 1)
        )
          for (M = e, m = e.child; m !== null; ) {
            for (p = M = m; M !== null; ) {
              switch (((c = M), (y = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Zr(4, c, c.return);
                  break;
                case 1:
                  tr(c, c.return);
                  var w = c.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (g) {
                      he(r, n, g);
                    }
                  }
                  break;
                case 5:
                  tr(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    sc(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = c), (M = y)) : sc(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = p.stateNode),
                      (a = p.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = gd("display", i)));
              } catch (g) {
                he(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (g) {
                he(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ut(t, e), wt(e), r & 4 && lc(e);
      break;
    case 21:
      break;
    default:
      ut(t, e), wt(e);
  }
}
function wt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(P(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (to(o, ""), (r.flags &= -33));
          var l = oc(e);
          Is(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = oc(e);
          Ms(e, s, i);
          break;
        default:
          throw Error(P(161));
      }
    } catch (a) {
      he(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function k0(e, t, n) {
  (M = e), Yf(e);
}
function Yf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Vo;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Re;
        s = Vo;
        var u = Re;
        if (((Vo = i), (Re = a) && !u))
          for (M = o; M !== null; )
            (i = M),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ac(o)
                : a !== null
                ? ((a.return = i), (M = a))
                : ac(o);
        for (; l !== null; ) (M = l), Yf(l), (l = l.sibling);
        (M = o), (Vo = s), (Re = u);
      }
      ic(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (M = l)) : ic(e);
  }
}
function ic(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Re || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Re)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Wu(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var m = u.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && lo(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(P(163));
          }
        Re || (t.flags & 512 && Ls(t));
      } catch (c) {
        he(t, t.return, c);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function sc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function ac(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jl(4, t);
          } catch (a) {
            he(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              he(t, o, a);
            }
          }
          var l = t.return;
          try {
            Ls(t);
          } catch (a) {
            he(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ls(t);
          } catch (a) {
            he(t, i, a);
          }
      }
    } catch (a) {
      he(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (M = s);
      break;
    }
    M = t.return;
  }
}
var $0 = Math.ceil,
  Ml = Wt.ReactCurrentDispatcher,
  Ra = Wt.ReactCurrentOwner,
  lt = Wt.ReactCurrentBatchConfig,
  X = 0,
  Ce = null,
  ye = null,
  $e = 0,
  Qe = 0,
  nr = gn(0),
  xe = 0,
  go = null,
  Rn = 0,
  ql = 0,
  Oa = 0,
  Jr = null,
  Fe = null,
  La = 0,
  yr = 1 / 0,
  Nt = null,
  Il = !1,
  As = null,
  un = null,
  Wo = !1,
  nn = null,
  Al = 0,
  qr = 0,
  zs = null,
  ul = -1,
  cl = 0;
function Ae() {
  return X & 6 ? ge() : ul !== -1 ? ul : (ul = ge());
}
function cn(e) {
  return e.mode & 1
    ? X & 2 && $e !== 0
      ? $e & -$e
      : a0.transition !== null
      ? (cl === 0 && (cl = Td()), cl)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : zd(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < qr) throw ((qr = 0), (zs = null), Error(P(185)));
  So(e, n, r),
    (!(X & 2) || e !== Ce) &&
      (e === Ce && (!(X & 2) && (ql |= n), xe === 4 && en(e, $e)),
      He(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((yr = ge() + 500), Gl && yn()));
}
function He(e, t) {
  var n = e.callbackNode;
  ah(e, t);
  var r = wl(e, e === Ce ? $e : 0);
  if (r === 0)
    n !== null && gu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gu(n), t === 1))
      e.tag === 0 ? s0(uc.bind(null, e)) : nf(uc.bind(null, e)),
        r0(function () {
          !(X & 6) && yn();
        }),
        (n = null);
    else {
      switch (Rd(r)) {
        case 1:
          n = la;
          break;
        case 4:
          n = _d;
          break;
        case 16:
          n = yl;
          break;
        case 536870912:
          n = Nd;
          break;
        default:
          n = yl;
      }
      n = np(n, Gf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gf(e, t) {
  if (((ul = -1), (cl = 0), X & 6)) throw Error(P(327));
  var n = e.callbackNode;
  if (ur() && e.callbackNode !== n) return null;
  var r = wl(e, e === Ce ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zl(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var l = Zf();
    (Ce !== e || $e !== t) && ((Nt = null), (yr = ge() + 500), bn(e, t));
    do
      try {
        _0();
        break;
      } catch (s) {
        Xf(e, s);
      }
    while (!0);
    ya(),
      (Ml.current = l),
      (X = o),
      ye !== null ? (t = 0) : ((Ce = null), ($e = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = cs(e)), o !== 0 && ((r = o), (t = Ds(e, o)))), t === 1)
    )
      throw ((n = go), bn(e, 0), en(e, r), He(e, ge()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !b0(o) &&
          ((t = zl(e, r)),
          t === 2 && ((l = cs(e)), l !== 0 && ((r = l), (t = Ds(e, l)))),
          t === 1))
      )
        throw ((n = go), bn(e, 0), en(e, r), He(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(P(345));
        case 2:
          Sn(e, Fe, Nt);
          break;
        case 3:
          if (
            (en(e, r), (r & 130023424) === r && ((t = La + 500 - ge()), 10 < t))
          ) {
            if (wl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ae(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ys(Sn.bind(null, e, Fe, Nt), t);
            break;
          }
          Sn(e, Fe, Nt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - pt(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * $0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ys(Sn.bind(null, e, Fe, Nt), r);
            break;
          }
          Sn(e, Fe, Nt);
          break;
        case 5:
          Sn(e, Fe, Nt);
          break;
        default:
          throw Error(P(329));
      }
    }
  }
  return He(e, ge()), e.callbackNode === n ? Gf.bind(null, e) : null;
}
function Ds(e, t) {
  var n = Jr;
  return (
    e.current.memoizedState.isDehydrated && (bn(e, t).flags |= 256),
    (e = zl(e, t)),
    e !== 2 && ((t = Fe), (Fe = n), t !== null && js(t)),
    e
  );
}
function js(e) {
  Fe === null ? (Fe = e) : Fe.push.apply(Fe, e);
}
function b0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!ht(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~Oa,
      t &= ~ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function uc(e) {
  if (X & 6) throw Error(P(327));
  ur();
  var t = wl(e, 0);
  if (!(t & 1)) return He(e, ge()), null;
  var n = zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cs(e);
    r !== 0 && ((t = r), (n = Ds(e, r)));
  }
  if (n === 1) throw ((n = go), bn(e, 0), en(e, t), He(e, ge()), n);
  if (n === 6) throw Error(P(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Sn(e, Fe, Nt),
    He(e, ge()),
    null
  );
}
function Ma(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((yr = ge() + 500), Gl && yn());
  }
}
function On(e) {
  nn !== null && nn.tag === 0 && !(X & 6) && ur();
  var t = X;
  X |= 1;
  var n = lt.transition,
    r = ne;
  try {
    if (((lt.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (lt.transition = n), (X = t), !(X & 6) && yn();
  }
}
function Ia() {
  (Qe = nr.current), ue(nr);
}
function bn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), n0(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((ha(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && kl();
          break;
        case 3:
          vr(), ue(Ve), ue(Oe), ka();
          break;
        case 5:
          Ca(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          ue(fe);
          break;
        case 19:
          ue(fe);
          break;
        case 10:
          wa(r.type._context);
          break;
        case 22:
        case 23:
          Ia();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ye = e = dn(e.current, null)),
    ($e = Qe = t),
    (xe = 0),
    (go = null),
    (Oa = ql = Rn = 0),
    (Fe = Jr = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Cn = null;
  }
  return e;
}
function Xf(e, t) {
  do {
    var n = ye;
    try {
      if ((ya(), (il.current = Ll), Ol)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ol = !1;
      }
      if (
        ((Tn = 0),
        (Se = we = pe = null),
        (Xr = !1),
        (mo = 0),
        (Ra.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (go = t), (ye = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = $e),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            m = s,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var c = m.alternate;
            c
              ? ((m.updateQueue = c.updateQueue),
                (m.memoizedState = c.memoizedState),
                (m.lanes = c.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = Xu(i);
          if (y !== null) {
            (y.flags &= -257),
              Zu(y, i, s, l, t),
              y.mode & 1 && Gu(l, u, t),
              (t = y),
              (a = u);
            var w = t.updateQueue;
            if (w === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Gu(l, u, t), Aa();
              break e;
            }
            a = Error(P(426));
          }
        } else if (de && s.mode & 1) {
          var S = Xu(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Zu(S, i, s, l, t),
              va(gr(a, s));
            break e;
          }
        }
        (l = a = gr(a, s)),
          xe !== 4 && (xe = 2),
          Jr === null ? (Jr = [l]) : Jr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Lf(l, a, t);
              Vu(l, f);
              break e;
            case 1:
              s = a;
              var d = l.type,
                v = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (un === null || !un.has(v))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var x = Mf(l, s, t);
                Vu(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      qf(n);
    } catch (E) {
      (t = E), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Zf() {
  var e = Ml.current;
  return (Ml.current = Ll), e === null ? Ll : e;
}
function Aa() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(Rn & 268435455) && !(ql & 268435455)) || en(Ce, $e);
}
function zl(e, t) {
  var n = X;
  X |= 2;
  var r = Zf();
  (Ce !== e || $e !== t) && ((Nt = null), bn(e, t));
  do
    try {
      P0();
      break;
    } catch (o) {
      Xf(e, o);
    }
  while (!0);
  if ((ya(), (X = n), (Ml.current = r), ye !== null)) throw Error(P(261));
  return (Ce = null), ($e = 0), xe;
}
function P0() {
  for (; ye !== null; ) Jf(ye);
}
function _0() {
  for (; ye !== null && !qm(); ) Jf(ye);
}
function Jf(e) {
  var t = tp(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? qf(e) : (ye = t),
    (Ra.current = null);
}
function qf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = S0(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ye = null);
        return;
      }
    } else if (((n = x0(n, t, Qe)), n !== null)) {
      ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ye = t;
      return;
    }
    ye = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function Sn(e, t, n) {
  var r = ne,
    o = lt.transition;
  try {
    (lt.transition = null), (ne = 1), N0(e, t, n, r);
  } finally {
    (lt.transition = o), (ne = r);
  }
  return null;
}
function N0(e, t, n, r) {
  do ur();
  while (nn !== null);
  if (X & 6) throw Error(P(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(P(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (uh(e, l),
    e === Ce && ((ye = Ce = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wo ||
      ((Wo = !0),
      np(yl, function () {
        return ur(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = lt.transition), (lt.transition = null);
    var i = ne;
    ne = 1;
    var s = X;
    (X |= 4),
      (Ra.current = null),
      C0(e, n),
      Qf(n, e),
      Gh(vs),
      (xl = !!hs),
      (vs = hs = null),
      (e.current = n),
      k0(n),
      eh(),
      (X = s),
      (ne = i),
      (lt.transition = l);
  } else e.current = n;
  if (
    (Wo && ((Wo = !1), (nn = e), (Al = o)),
    (l = e.pendingLanes),
    l === 0 && (un = null),
    rh(n.stateNode),
    He(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Il) throw ((Il = !1), (e = As), (As = null), e);
  return (
    Al & 1 && e.tag !== 0 && ur(),
    (l = e.pendingLanes),
    l & 1 ? (e === zs ? qr++ : ((qr = 0), (zs = e))) : (qr = 0),
    yn(),
    null
  );
}
function ur() {
  if (nn !== null) {
    var e = Rd(Al),
      t = lt.transition,
      n = ne;
    try {
      if (((lt.transition = null), (ne = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (Al = 0), X & 6)) throw Error(P(331));
        var o = X;
        for (X |= 4, M = e.current; M !== null; ) {
          var l = M,
            i = l.child;
          if (M.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (M = u; M !== null; ) {
                  var m = M;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zr(8, m, l);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (M = p);
                  else
                    for (; M !== null; ) {
                      m = M;
                      var c = m.sibling,
                        y = m.return;
                      if ((Hf(m), m === u)) {
                        M = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = y), (M = c);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var g = w.child;
                if (g !== null) {
                  w.child = null;
                  do {
                    var S = g.sibling;
                    (g.sibling = null), (g = S);
                  } while (g !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (M = i);
          else
            e: for (; M !== null; ) {
              if (((l = M), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Zr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (M = f);
                break e;
              }
              M = l.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          i = M;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (M = v);
          else
            e: for (i = d; M !== null; ) {
              if (((s = M), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jl(9, s);
                  }
                } catch (E) {
                  he(s, s.return, E);
                }
              if (s === i) {
                M = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (M = x);
                break e;
              }
              M = s.return;
            }
        }
        if (
          ((X = o), yn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(Hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (lt.transition = t);
    }
  }
  return !1;
}
function cc(e, t, n) {
  (t = gr(n, t)),
    (t = Lf(e, t, 1)),
    (e = an(e, t, 1)),
    (t = Ae()),
    e !== null && (So(e, 1, t), He(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) cc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        cc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (un === null || !un.has(r)))
        ) {
          (e = gr(n, e)),
            (e = Mf(t, e, 1)),
            (t = an(t, e, 1)),
            (e = Ae()),
            t !== null && (So(t, 1, e), He(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function T0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ae()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      ($e & n) === n &&
      (xe === 4 || (xe === 3 && ($e & 130023424) === $e && 500 > ge() - La)
        ? bn(e, 0)
        : (Oa |= n)),
    He(e, t);
}
function ep(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Lo), (Lo <<= 1), !(Lo & 130023424) && (Lo = 4194304))
      : (t = 1));
  var n = Ae();
  (e = zt(e, t)), e !== null && (So(e, t, n), He(e, n));
}
function R0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ep(e, n);
}
function O0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(P(314));
  }
  r !== null && r.delete(t), ep(e, n);
}
var tp;
tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) Be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Be = !1), w0(e, t, n);
      Be = !!(e.flags & 131072);
    }
  else (Be = !1), de && t.flags & 1048576 && rf(t, Pl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      al(e, t), (e = t.pendingProps);
      var o = pr(t, Oe.current);
      ar(t, n), (o = ba(null, t, r, e, o, n));
      var l = Pa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            We(r) ? ((l = !0), $l(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Sa(t),
            (o.updater = Xl),
            (t.stateNode = o),
            (o._reactInternals = t),
            $s(t, r, e, n),
            (t = _s(null, t, r, !0, l, n)))
          : ((t.tag = 0), de && l && ma(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (al(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = M0(r)),
          (e = ct(r, e)),
          o)
        ) {
          case 0:
            t = Ps(null, t, r, e, n);
            break e;
          case 1:
            t = ec(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, ct(r.type, e), n);
            break e;
        }
        throw Error(P(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        Ps(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        ec(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Df(t), e === null)) throw Error(P(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          af(e, t),
          Tl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = gr(Error(P(423)), t)), (t = tc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = gr(Error(P(424)), t)), (t = tc(e, t, r, n, o));
            break e;
          } else
            for (
              Ge = sn(t.stateNode.containerInfo.firstChild),
                Xe = t,
                de = !0,
                ft = null,
                n = ff(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mr(), r === o)) {
            t = Dt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pf(t),
        e === null && Es(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        gs(r, o) ? (i = null) : l !== null && gs(r, l) && (t.flags |= 32),
        zf(e, t),
        Ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Es(t), null;
    case 13:
      return jf(e, t, n);
    case 4:
      return (
        Ea(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        Ju(e, t, r, o, n)
      );
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          le(_l, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (ht(l.value, i)) {
            if (l.children === o.children && !Ve.current) {
              t = Dt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Mt(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var m = u.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Cs(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(P(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Cs(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ie(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ar(t, n),
        (o = it(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ct(r, t.pendingProps)),
        (o = ct(r.type, o)),
        qu(e, t, r, o, n)
      );
    case 15:
      return If(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ct(r, o)),
        al(e, t),
        (t.tag = 1),
        We(r) ? ((e = !0), $l(t)) : (e = !1),
        ar(t, n),
        cf(t, r, o),
        $s(t, r, o, n),
        _s(null, t, r, !0, e, n)
      );
    case 19:
      return Ff(e, t, n);
    case 22:
      return Af(e, t, n);
  }
  throw Error(P(156, t.tag));
};
function np(e, t) {
  return Pd(e, t);
}
function L0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, r) {
  return new L0(e, t, n, r);
}
function za(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function M0(e) {
  if (typeof e == "function") return za(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === na)) return 11;
    if (e === ra) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function dl(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) za(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Kn:
        return Pn(n.children, o, l, t);
      case ta:
        (i = 8), (o |= 8);
        break;
      case Gi:
        return (
          (e = ot(12, n, t, o | 2)), (e.elementType = Gi), (e.lanes = l), e
        );
      case Xi:
        return (e = ot(13, n, t, o)), (e.elementType = Xi), (e.lanes = l), e;
      case Zi:
        return (e = ot(19, n, t, o)), (e.elementType = Zi), (e.lanes = l), e;
      case cd:
        return ei(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ad:
              i = 10;
              break e;
            case ud:
              i = 9;
              break e;
            case na:
              i = 11;
              break e;
            case ra:
              i = 14;
              break e;
            case Zt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(P(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ot(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Pn(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function ei(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = cd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function zi(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function Di(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function I0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yi(0)),
    (this.expirationTimes = yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Da(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new I0(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ot(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Sa(l),
    e
  );
}
function A0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rp(e) {
  if (!e) return pn;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(P(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (We(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(P(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (We(n)) return tf(e, n, t);
  }
  return t;
}
function op(e, t, n, r, o, l, i, s, a) {
  return (
    (e = Da(n, r, !0, e, o, l, i, s, a)),
    (e.context = rp(null)),
    (n = e.current),
    (r = Ae()),
    (o = cn(n)),
    (l = Mt(r, o)),
    (l.callback = t ?? null),
    an(n, l, o),
    (e.current.lanes = o),
    So(e, o, r),
    He(e, r),
    e
  );
}
function ti(e, t, n, r) {
  var o = t.current,
    l = Ae(),
    i = cn(o);
  return (
    (n = rp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(o, t, i)),
    e !== null && (mt(e, o, i, l), ll(e, o, i)),
    i
  );
}
function Dl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ja(e, t) {
  dc(e, t), (e = e.alternate) && dc(e, t);
}
function z0() {
  return null;
}
var lp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fa(e) {
  this._internalRoot = e;
}
ni.prototype.render = Fa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(P(409));
  ti(e, t, null, null);
};
ni.prototype.unmount = Fa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function () {
      ti(null, e, null, null);
    }),
      (t[At] = null);
  }
};
function ni(e) {
  this._internalRoot = e;
}
ni.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Md();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && Ad(e);
  }
};
function Ba(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ri(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fc() {}
function D0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Dl(i);
        l.call(u);
      };
    }
    var i = op(t, r, e, 0, null, !1, !1, "", fc);
    return (
      (e._reactRootContainer = i),
      (e[At] = i.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      On(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Dl(a);
      s.call(u);
    };
  }
  var a = Da(e, 0, !1, null, null, !1, !1, "", fc);
  return (
    (e._reactRootContainer = a),
    (e[At] = a.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      ti(t, a, n, r);
    }),
    a
  );
}
function oi(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Dl(i);
        s.call(a);
      };
    }
    ti(t, i, e, o);
  } else i = D0(n, t, e, o, r);
  return Dl(i);
}
Od = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wr(t.pendingLanes);
        n !== 0 &&
          (ia(t, n | 1), He(t, ge()), !(X & 6) && ((yr = ge() + 500), yn()));
      }
      break;
    case 13:
      On(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Ae();
          mt(r, e, 1, o);
        }
      }),
        ja(e, 1);
  }
};
sa = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Ae();
      mt(t, e, 134217728, n);
    }
    ja(e, 134217728);
  }
};
Ld = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Ae();
      mt(n, e, t, r);
    }
    ja(e, t);
  }
};
Md = function () {
  return ne;
};
Id = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
ss = function (e, t, n) {
  switch (t) {
    case "input":
      if ((es(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Yl(r);
            if (!o) throw Error(P(90));
            fd(r), es(r, o);
          }
        }
      }
      break;
    case "textarea":
      md(e, n);
      break;
    case "select":
      (t = n.value), t != null && or(e, !!n.multiple, t, !1);
  }
};
Sd = Ma;
Ed = On;
var j0 = { usingClientEntryPoint: !1, Events: [Co, Xn, Yl, wd, xd, Ma] },
  Dr = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  F0 = {
    bundleType: Dr.bundleType,
    version: Dr.version,
    rendererPackageName: Dr.rendererPackageName,
    rendererConfig: Dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = $d(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Dr.findFiberByHostInstance || z0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ho.isDisabled && Ho.supportsFiber)
    try {
      (Hl = Ho.inject(F0)), (kt = Ho);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j0;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ba(t)) throw Error(P(200));
  return A0(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!Ba(e)) throw Error(P(299));
  var n = !1,
    r = "",
    o = lp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Da(e, 1, !1, null, null, n, !1, r, o)),
    (e[At] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new Fa(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(P(188))
      : ((e = Object.keys(e).join(",")), Error(P(268, e)));
  return (e = $d(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return On(e);
};
qe.hydrate = function (e, t, n) {
  if (!ri(t)) throw Error(P(200));
  return oi(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!Ba(e)) throw Error(P(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = lp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = op(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[At] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ni(t);
};
qe.render = function (e, t, n) {
  if (!ri(t)) throw Error(P(200));
  return oi(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!ri(e)) throw Error(P(40));
  return e._reactRootContainer
    ? (On(function () {
        oi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[At] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = Ma;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ri(n)) throw Error(P(200));
  if (e == null || e._reactInternals === void 0) throw Error(P(38));
  return oi(e, t, n, !1, r);
};
qe.version = "18.2.0-next-9e3b772b8-20220608";
function ip() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ip);
    } catch (e) {
      console.error(e);
    }
}
ip(), (rd.exports = qe);
var $r = rd.exports;
const sp = Kc($r);
var pc = $r;
(Qi.createRoot = pc.createRoot), (Qi.hydrateRoot = pc.hydrateRoot);
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    te.apply(this, arguments)
  );
}
function mc(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Va(e, t = []) {
  let n = [];
  function r(l, i) {
    const s = h.createContext(i),
      a = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: c, children: y, ...w } = p,
        g = (c == null ? void 0 : c[e][a]) || s,
        S = h.useMemo(() => w, Object.values(w));
      return h.createElement(g.Provider, { value: S }, y);
    }
    function m(p, c) {
      const y = (c == null ? void 0 : c[e][a]) || s,
        w = h.useContext(y);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return (u.displayName = l + "Provider"), [u, m];
  }
  const o = () => {
    const l = n.map((i) => h.createContext(i));
    return function (s) {
      const a = (s == null ? void 0 : s[e]) || l;
      return h.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: a } }), [s, a]);
    };
  };
  return (o.scopeName = e), [r, B0(o, ...t)];
}
function B0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((s, { useScope: a, scopeName: u }) => {
        const p = a(l)[`__scope${u}`];
        return { ...s, ...p };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function V0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function ap(...e) {
  return (t) => e.forEach((n) => V0(n, t));
}
function Le(...e) {
  return h.useCallback(ap(...e), e);
}
const wr = h.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = h.Children.toArray(n),
    l = o.find(H0);
  if (l) {
    const i = l.props.children,
      s = o.map((a) =>
        a === l
          ? h.Children.count(i) > 1
            ? h.Children.only(null)
            : h.isValidElement(i)
            ? i.props.children
            : null
          : a
      );
    return h.createElement(
      Fs,
      te({}, r, { ref: t }),
      h.isValidElement(i) ? h.cloneElement(i, void 0, s) : null
    );
  }
  return h.createElement(Fs, te({}, r, { ref: t }), n);
});
wr.displayName = "Slot";
const Fs = h.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return h.isValidElement(n)
    ? h.cloneElement(n, { ...U0(r, n.props), ref: t ? ap(t, n.ref) : n.ref })
    : h.Children.count(n) > 1
    ? h.Children.only(null)
    : null;
});
Fs.displayName = "SlotClone";
const W0 = ({ children: e }) => h.createElement(h.Fragment, null, e);
function H0(e) {
  return h.isValidElement(e) && e.type === W0;
}
function U0(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...s) => {
            l(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...l })
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function K0(e) {
  const t = e + "CollectionProvider",
    [n, r] = Va(t),
    [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: w, children: g } = y,
        S = _.useRef(null),
        f = _.useRef(new Map()).current;
      return _.createElement(o, { scope: w, itemMap: f, collectionRef: S }, g);
    },
    s = e + "CollectionSlot",
    a = _.forwardRef((y, w) => {
      const { scope: g, children: S } = y,
        f = l(s, g),
        d = Le(w, f.collectionRef);
      return _.createElement(wr, { ref: d }, S);
    }),
    u = e + "CollectionItemSlot",
    m = "data-radix-collection-item",
    p = _.forwardRef((y, w) => {
      const { scope: g, children: S, ...f } = y,
        d = _.useRef(null),
        v = Le(w, d),
        x = l(u, g);
      return (
        _.useEffect(
          () => (
            x.itemMap.set(d, { ref: d, ...f }), () => void x.itemMap.delete(d)
          )
        ),
        _.createElement(wr, { [m]: "", ref: v }, S)
      );
    });
  function c(y) {
    const w = l(e + "CollectionConsumer", y);
    return _.useCallback(() => {
      const S = w.collectionRef.current;
      if (!S) return [];
      const f = Array.from(S.querySelectorAll(`[${m}]`));
      return Array.from(w.itemMap.values()).sort(
        (x, E) => f.indexOf(x.ref.current) - f.indexOf(E.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: i, Slot: a, ItemSlot: p }, c, r];
}
const Q0 = h.createContext(void 0);
function Y0(e) {
  const t = h.useContext(Q0);
  return e || t || "ltr";
}
const G0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Pe = G0.reduce((e, t) => {
    const n = h.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        s = l ? wr : t;
      return (
        h.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        h.createElement(s, te({}, i, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function X0(e, t) {
  e && $r.flushSync(() => e.dispatchEvent(t));
}
function jt(e) {
  const t = h.useRef(e);
  return (
    h.useEffect(() => {
      t.current = e;
    }),
    h.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Z0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jt(e);
  h.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Bs = "dismissableLayer.update",
  J0 = "dismissableLayer.pointerDownOutside",
  q0 = "dismissableLayer.focusOutside";
let hc;
const ev = h.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  tv = h.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: l,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: a,
        ...u
      } = e,
      m = h.useContext(ev),
      [p, c] = h.useState(null),
      y =
        (n = p == null ? void 0 : p.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, w] = h.useState({}),
      g = Le(t, (C) => c(C)),
      S = Array.from(m.layers),
      [f] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      d = S.indexOf(f),
      v = p ? S.indexOf(p) : -1,
      x = m.layersWithOutsidePointerEventsDisabled.size > 0,
      E = v >= d,
      $ = nv((C) => {
        const L = C.target,
          R = [...m.branches].some((A) => A.contains(L));
        !E ||
          R ||
          (l == null || l(C),
          s == null || s(C),
          C.defaultPrevented || a == null || a());
      }, y),
      k = rv((C) => {
        const L = C.target;
        [...m.branches].some((A) => A.contains(L)) ||
          (i == null || i(C),
          s == null || s(C),
          C.defaultPrevented || a == null || a());
      }, y);
    return (
      Z0((C) => {
        v === m.layers.size - 1 &&
          (o == null || o(C),
          !C.defaultPrevented && a && (C.preventDefault(), a()));
      }, y),
      h.useEffect(() => {
        if (p)
          return (
            r &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((hc = y.body.style.pointerEvents),
                (y.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(p)),
            m.layers.add(p),
            vc(),
            () => {
              r &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (y.body.style.pointerEvents = hc);
            }
          );
      }, [p, y, r, m]),
      h.useEffect(
        () => () => {
          p &&
            (m.layers.delete(p),
            m.layersWithOutsidePointerEventsDisabled.delete(p),
            vc());
        },
        [p, m]
      ),
      h.useEffect(() => {
        const C = () => w({});
        return (
          document.addEventListener(Bs, C),
          () => document.removeEventListener(Bs, C)
        );
      }, []),
      h.createElement(
        Pe.div,
        te({}, u, {
          ref: g,
          style: {
            pointerEvents: x ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: Ee(e.onFocusCapture, k.onFocusCapture),
          onBlurCapture: Ee(e.onBlurCapture, k.onBlurCapture),
          onPointerDownCapture: Ee(
            e.onPointerDownCapture,
            $.onPointerDownCapture
          ),
        })
      )
    );
  });
function nv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jt(e),
    r = h.useRef(!1),
    o = h.useRef(() => {});
  return (
    h.useEffect(() => {
      const l = (s) => {
          if (s.target && !r.current) {
            let m = function () {
              up(J0, n, u, { discrete: !0 });
            };
            var a = m;
            const u = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = m),
                t.addEventListener("click", o.current, { once: !0 }))
              : m();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", l),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function rv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = jt(e),
    r = h.useRef(!1);
  return (
    h.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          up(q0, n, { originalEvent: l }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function vc() {
  const e = new CustomEvent(Bs);
  document.dispatchEvent(e);
}
function up(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? X0(o, l) : o.dispatchEvent(l);
}
let ji = 0;
function ov() {
  h.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : gc()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : gc()
      ),
      ji++,
      () => {
        ji === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ji--;
      }
    );
  }, []);
}
function gc() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const Fi = "focusScope.autoFocusOnMount",
  Bi = "focusScope.autoFocusOnUnmount",
  yc = { bubbles: !1, cancelable: !0 },
  lv = h.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...i
      } = e,
      [s, a] = h.useState(null),
      u = jt(o),
      m = jt(l),
      p = h.useRef(null),
      c = Le(t, (g) => a(g)),
      y = h.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    h.useEffect(() => {
      if (r) {
        let d = function ($) {
            if (y.paused || !s) return;
            const k = $.target;
            s.contains(k) ? (p.current = k) : Xt(p.current, { select: !0 });
          },
          v = function ($) {
            if (y.paused || !s) return;
            const k = $.relatedTarget;
            k !== null && (s.contains(k) || Xt(p.current, { select: !0 }));
          },
          x = function ($) {
            if (document.activeElement === document.body)
              for (const C of $) C.removedNodes.length > 0 && Xt(s);
          };
        var g = d,
          S = v,
          f = x;
        document.addEventListener("focusin", d),
          document.addEventListener("focusout", v);
        const E = new MutationObserver(x);
        return (
          s && E.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", d),
              document.removeEventListener("focusout", v),
              E.disconnect();
          }
        );
      }
    }, [r, s, y.paused]),
      h.useEffect(() => {
        if (s) {
          xc.add(y);
          const g = document.activeElement;
          if (!s.contains(g)) {
            const f = new CustomEvent(Fi, yc);
            s.addEventListener(Fi, u),
              s.dispatchEvent(f),
              f.defaultPrevented ||
                (iv(dv(cp(s)), { select: !0 }),
                document.activeElement === g && Xt(s));
          }
          return () => {
            s.removeEventListener(Fi, u),
              setTimeout(() => {
                const f = new CustomEvent(Bi, yc);
                s.addEventListener(Bi, m),
                  s.dispatchEvent(f),
                  f.defaultPrevented || Xt(g ?? document.body, { select: !0 }),
                  s.removeEventListener(Bi, m),
                  xc.remove(y);
              }, 0);
          };
        }
      }, [s, u, m, y]);
    const w = h.useCallback(
      (g) => {
        if ((!n && !r) || y.paused) return;
        const S = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          f = document.activeElement;
        if (S && f) {
          const d = g.currentTarget,
            [v, x] = sv(d);
          v && x
            ? !g.shiftKey && f === x
              ? (g.preventDefault(), n && Xt(v, { select: !0 }))
              : g.shiftKey &&
                f === v &&
                (g.preventDefault(), n && Xt(x, { select: !0 }))
            : f === d && g.preventDefault();
        }
      },
      [n, r, y.paused]
    );
    return h.createElement(
      Pe.div,
      te({ tabIndex: -1 }, i, { ref: c, onKeyDown: w })
    );
  });
function iv(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Xt(r, { select: t }), document.activeElement !== n)) return;
}
function sv(e) {
  const t = cp(e),
    n = wc(t, e),
    r = wc(t.reverse(), e);
  return [n, r];
}
function cp(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wc(e, t) {
  for (const n of e) if (!av(n, { upTo: t })) return n;
}
function av(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function uv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Xt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && uv(e) && t && e.select();
  }
}
const xc = cv();
function cv() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Sc(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Sc(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Sc(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function dv(e) {
  return e.filter((t) => t.tagName !== "A");
}
const at =
    globalThis != null && globalThis.document ? h.useLayoutEffect : () => {},
  fv = Rm.useId || (() => {});
let pv = 0;
function dp(e) {
  const [t, n] = h.useState(fv());
  return (
    at(() => {
      n((r) => r ?? String(pv++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const mv = ["top", "right", "bottom", "left"],
  Ct = Math.min,
  Ye = Math.max,
  jl = Math.round,
  Uo = Math.floor,
  mn = (e) => ({ x: e, y: e }),
  hv = { left: "right", right: "left", bottom: "top", top: "bottom" },
  vv = { start: "end", end: "start" };
function Vs(e, t, n) {
  return Ye(e, Ct(t, n));
}
function Ft(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Bt(e) {
  return e.split("-")[0];
}
function br(e) {
  return e.split("-")[1];
}
function Wa(e) {
  return e === "x" ? "y" : "x";
}
function Ha(e) {
  return e === "y" ? "height" : "width";
}
function Pr(e) {
  return ["top", "bottom"].includes(Bt(e)) ? "y" : "x";
}
function Ua(e) {
  return Wa(Pr(e));
}
function gv(e, t, n) {
  n === void 0 && (n = !1);
  const r = br(e),
    o = Ua(e),
    l = Ha(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[l] > t.floating[l] && (i = Fl(i)), [i, Fl(i)];
}
function yv(e) {
  const t = Fl(e);
  return [Ws(e), t, Ws(t)];
}
function Ws(e) {
  return e.replace(/start|end/g, (t) => vv[t]);
}
function wv(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    l = ["top", "bottom"],
    i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? l : i;
    default:
      return [];
  }
}
function xv(e, t, n, r) {
  const o = br(e);
  let l = wv(Bt(e), n === "start", r);
  return (
    o && ((l = l.map((i) => i + "-" + o)), t && (l = l.concat(l.map(Ws)))), l
  );
}
function Fl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => hv[t]);
}
function Sv(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function fp(e) {
  return typeof e != "number"
    ? Sv(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Bl(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Ec(e, t, n) {
  let { reference: r, floating: o } = e;
  const l = Pr(t),
    i = Ua(t),
    s = Ha(i),
    a = Bt(t),
    u = l === "y",
    m = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    c = r[s] / 2 - o[s] / 2;
  let y;
  switch (a) {
    case "top":
      y = { x: m, y: r.y - o.height };
      break;
    case "bottom":
      y = { x: m, y: r.y + r.height };
      break;
    case "right":
      y = { x: r.x + r.width, y: p };
      break;
    case "left":
      y = { x: r.x - o.width, y: p };
      break;
    default:
      y = { x: r.x, y: r.y };
  }
  switch (br(t)) {
    case "start":
      y[i] -= c * (n && u ? -1 : 1);
      break;
    case "end":
      y[i] += c * (n && u ? -1 : 1);
      break;
  }
  return y;
}
const Ev = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: l = [],
      platform: i,
    } = n,
    s = l.filter(Boolean),
    a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: m, y: p } = Ec(u, r, a),
    c = r,
    y = {},
    w = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: S, fn: f } = s[g],
      {
        x: d,
        y: v,
        data: x,
        reset: E,
      } = await f({
        x: m,
        y: p,
        initialPlacement: r,
        placement: c,
        strategy: o,
        middlewareData: y,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (m = d ?? m),
      (p = v ?? p),
      (y = { ...y, [S]: { ...y[S], ...x } }),
      E &&
        w <= 50 &&
        (w++,
        typeof E == "object" &&
          (E.placement && (c = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: m, y: p } = Ec(u, c, a))),
        (g = -1));
  }
  return { x: m, y: p, placement: c, strategy: o, middlewareData: y };
};
async function yo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: l, rects: i, elements: s, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: m = "viewport",
      elementContext: p = "floating",
      altBoundary: c = !1,
      padding: y = 0,
    } = Ft(t, e),
    w = fp(y),
    S = s[c ? (p === "floating" ? "reference" : "floating") : p],
    f = Bl(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(S))) == null ||
          n
            ? S
            : S.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: m,
        strategy: a,
      })
    ),
    d =
      p === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    v = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(s.floating)),
    x = (await (l.isElement == null ? void 0 : l.isElement(v)))
      ? (await (l.getScale == null ? void 0 : l.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Bl(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: d,
            offsetParent: v,
            strategy: a,
          })
        : d
    );
  return {
    top: (f.top - E.top + w.top) / x.y,
    bottom: (E.bottom - f.bottom + w.bottom) / x.y,
    left: (f.left - E.left + w.left) / x.x,
    right: (E.right - f.right + w.right) / x.x,
  };
}
const Cv = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: l,
          platform: i,
          elements: s,
          middlewareData: a,
        } = t,
        { element: u, padding: m = 0 } = Ft(e, t) || {};
      if (u == null) return {};
      const p = fp(m),
        c = { x: n, y: r },
        y = Ua(o),
        w = Ha(y),
        g = await i.getDimensions(u),
        S = y === "y",
        f = S ? "top" : "left",
        d = S ? "bottom" : "right",
        v = S ? "clientHeight" : "clientWidth",
        x = l.reference[w] + l.reference[y] - c[y] - l.floating[w],
        E = c[y] - l.reference[y],
        $ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let k = $ ? $[v] : 0;
      (!k || !(await (i.isElement == null ? void 0 : i.isElement($)))) &&
        (k = s.floating[v] || l.floating[w]);
      const C = x / 2 - E / 2,
        L = k / 2 - g[w] / 2 - 1,
        R = Ct(p[f], L),
        A = Ct(p[d], L),
        T = R,
        Y = k - g[w] - A,
        W = k / 2 - g[w] / 2 + C,
        B = Vs(T, W, Y),
        V =
          !a.arrow &&
          br(o) != null &&
          W !== B &&
          l.reference[w] / 2 - (W < T ? R : A) - g[w] / 2 < 0,
        F = V ? (W < T ? W - T : W - Y) : 0;
      return {
        [y]: c[y] + F,
        data: {
          [y]: B,
          centerOffset: W - B - F,
          ...(V && { alignmentOffset: F }),
        },
        reset: V,
      };
    },
  }),
  kv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: l,
              rects: i,
              initialPlacement: s,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: m = !0,
              crossAxis: p = !0,
              fallbackPlacements: c,
              fallbackStrategy: y = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: g = !0,
              ...S
            } = Ft(e, t);
          if ((n = l.arrow) != null && n.alignmentOffset) return {};
          const f = Bt(o),
            d = Bt(s) === s,
            v = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            x = c || (d || !g ? [Fl(s)] : yv(s));
          !c && w !== "none" && x.push(...xv(s, g, w, v));
          const E = [s, ...x],
            $ = await yo(t, S),
            k = [];
          let C = ((r = l.flip) == null ? void 0 : r.overflows) || [];
          if ((m && k.push($[f]), p)) {
            const T = gv(o, i, v);
            k.push($[T[0]], $[T[1]]);
          }
          if (
            ((C = [...C, { placement: o, overflows: k }]),
            !k.every((T) => T <= 0))
          ) {
            var L, R;
            const T = (((L = l.flip) == null ? void 0 : L.index) || 0) + 1,
              Y = E[T];
            if (Y)
              return {
                data: { index: T, overflows: C },
                reset: { placement: Y },
              };
            let W =
              (R = C.filter((B) => B.overflows[0] <= 0).sort(
                (B, V) => B.overflows[1] - V.overflows[1]
              )[0]) == null
                ? void 0
                : R.placement;
            if (!W)
              switch (y) {
                case "bestFit": {
                  var A;
                  const B =
                    (A = C.map((V) => [
                      V.placement,
                      V.overflows
                        .filter((F) => F > 0)
                        .reduce((F, b) => F + b, 0),
                    ]).sort((V, F) => V[1] - F[1])[0]) == null
                      ? void 0
                      : A[0];
                  B && (W = B);
                  break;
                }
                case "initialPlacement":
                  W = s;
                  break;
              }
            if (o !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function Cc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function kc(e) {
  return mv.some((t) => e[t] >= 0);
}
const $v = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Ft(e, t);
        switch (r) {
          case "referenceHidden": {
            const l = await yo(t, { ...o, elementContext: "reference" }),
              i = Cc(l, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: kc(i) },
            };
          }
          case "escaped": {
            const l = await yo(t, { ...o, altBoundary: !0 }),
              i = Cc(l, n.floating);
            return { data: { escapedOffsets: i, escaped: kc(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function bv(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Bt(n),
    s = br(n),
    a = Pr(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    m = l && a ? -1 : 1,
    p = Ft(t, e);
  let {
    mainAxis: c,
    crossAxis: y,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
  return (
    s && typeof w == "number" && (y = s === "end" ? w * -1 : w),
    a ? { x: y * m, y: c * u } : { x: c * u, y: y * m }
  );
}
const Pv = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: l, placement: i, middlewareData: s } = t,
            a = await bv(t, e);
          return i === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: l + a.y, data: { ...a, placement: i } };
        },
      }
    );
  },
  _v = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: l = !0,
              crossAxis: i = !1,
              limiter: s = {
                fn: (S) => {
                  let { x: f, y: d } = S;
                  return { x: f, y: d };
                },
              },
              ...a
            } = Ft(e, t),
            u = { x: n, y: r },
            m = await yo(t, a),
            p = Pr(Bt(o)),
            c = Wa(p);
          let y = u[c],
            w = u[p];
          if (l) {
            const S = c === "y" ? "top" : "left",
              f = c === "y" ? "bottom" : "right",
              d = y + m[S],
              v = y - m[f];
            y = Vs(d, y, v);
          }
          if (i) {
            const S = p === "y" ? "top" : "left",
              f = p === "y" ? "bottom" : "right",
              d = w + m[S],
              v = w - m[f];
            w = Vs(d, w, v);
          }
          const g = s.fn({ ...t, [c]: y, [p]: w });
          return { ...g, data: { x: g.x - n, y: g.y - r } };
        },
      }
    );
  },
  Nv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: l, middlewareData: i } = t,
            { offset: s = 0, mainAxis: a = !0, crossAxis: u = !0 } = Ft(e, t),
            m = { x: n, y: r },
            p = Pr(o),
            c = Wa(p);
          let y = m[c],
            w = m[p];
          const g = Ft(s, t),
            S =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (a) {
            const v = c === "y" ? "height" : "width",
              x = l.reference[c] - l.floating[v] + S.mainAxis,
              E = l.reference[c] + l.reference[v] - S.mainAxis;
            y < x ? (y = x) : y > E && (y = E);
          }
          if (u) {
            var f, d;
            const v = c === "y" ? "width" : "height",
              x = ["top", "left"].includes(Bt(o)),
              E =
                l.reference[p] -
                l.floating[v] +
                ((x && ((f = i.offset) == null ? void 0 : f[p])) || 0) +
                (x ? 0 : S.crossAxis),
              $ =
                l.reference[p] +
                l.reference[v] +
                (x ? 0 : ((d = i.offset) == null ? void 0 : d[p]) || 0) -
                (x ? S.crossAxis : 0);
            w < E ? (w = E) : w > $ && (w = $);
          }
          return { [c]: y, [p]: w };
        },
      }
    );
  },
  Tv = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: l } = t,
            { apply: i = () => {}, ...s } = Ft(e, t),
            a = await yo(t, s),
            u = Bt(n),
            m = br(n),
            p = Pr(n) === "y",
            { width: c, height: y } = r.floating;
          let w, g;
          u === "top" || u === "bottom"
            ? ((w = u),
              (g =
                m ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = u), (w = m === "end" ? "top" : "bottom"));
          const S = y - a.top - a.bottom,
            f = c - a.left - a.right,
            d = Ct(y - a[w], S),
            v = Ct(c - a[g], f),
            x = !t.middlewareData.shift;
          let E = d,
            $ = v;
          if (
            (p ? ($ = m || x ? Ct(v, f) : f) : (E = m || x ? Ct(d, S) : S),
            x && !m)
          ) {
            const C = Ye(a.left, 0),
              L = Ye(a.right, 0),
              R = Ye(a.top, 0),
              A = Ye(a.bottom, 0);
            p
              ? ($ = c - 2 * (C !== 0 || L !== 0 ? C + L : Ye(a.left, a.right)))
              : (E =
                  y - 2 * (R !== 0 || A !== 0 ? R + A : Ye(a.top, a.bottom)));
          }
          await i({ ...t, availableWidth: $, availableHeight: E });
          const k = await o.getDimensions(l.floating);
          return c !== k.width || y !== k.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function _r(e) {
  return pp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ze(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Ht(e) {
  var t;
  return (t = (pp(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function pp(e) {
  return e instanceof Node || e instanceof Ze(e).Node;
}
function bt(e) {
  return e instanceof Element || e instanceof Ze(e).Element;
}
function Pt(e) {
  return e instanceof HTMLElement || e instanceof Ze(e).HTMLElement;
}
function $c(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ze(e).ShadowRoot;
}
function $o(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = vt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function Rv(e) {
  return ["table", "td", "th"].includes(_r(e));
}
function Ka(e) {
  const t = Qa(),
    n = vt(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Ov(e) {
  let t = hn(e);
  for (; Pt(t) && !xr(t); ) {
    if (Ka(t)) return t;
    t = hn(t);
  }
  return null;
}
function Qa() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function xr(e) {
  return ["html", "body", "#document"].includes(_r(e));
}
function vt(e) {
  return Ze(e).getComputedStyle(e);
}
function li(e) {
  return bt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function hn(e) {
  if (_r(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || ($c(e) && e.host) || Ht(e);
  return $c(t) ? t.host : t;
}
function mp(e) {
  const t = hn(e);
  return xr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Pt(t) && $o(t)
    ? t
    : mp(t);
}
function wo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = mp(e),
    l = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = Ze(o);
  return l
    ? t.concat(
        i,
        i.visualViewport || [],
        $o(o) ? o : [],
        i.frameElement && n ? wo(i.frameElement) : []
      )
    : t.concat(o, wo(o, [], n));
}
function hp(e) {
  const t = vt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Pt(e),
    l = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    s = jl(n) !== l || jl(r) !== i;
  return s && ((n = l), (r = i)), { width: n, height: r, $: s };
}
function Ya(e) {
  return bt(e) ? e : e.contextElement;
}
function cr(e) {
  const t = Ya(e);
  if (!Pt(t)) return mn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: l } = hp(t);
  let i = (l ? jl(n.width) : n.width) / r,
    s = (l ? jl(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: i, y: s }
  );
}
const Lv = mn(0);
function vp(e) {
  const t = Ze(e);
  return !Qa() || !t.visualViewport
    ? Lv
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Mv(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ze(e)) ? !1 : t;
}
function Ln(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    l = Ya(e);
  let i = mn(1);
  t && (r ? bt(r) && (i = cr(r)) : (i = cr(e)));
  const s = Mv(l, n, r) ? vp(l) : mn(0);
  let a = (o.left + s.x) / i.x,
    u = (o.top + s.y) / i.y,
    m = o.width / i.x,
    p = o.height / i.y;
  if (l) {
    const c = Ze(l),
      y = r && bt(r) ? Ze(r) : r;
    let w = c,
      g = w.frameElement;
    for (; g && r && y !== w; ) {
      const S = cr(g),
        f = g.getBoundingClientRect(),
        d = vt(g),
        v = f.left + (g.clientLeft + parseFloat(d.paddingLeft)) * S.x,
        x = f.top + (g.clientTop + parseFloat(d.paddingTop)) * S.y;
      (a *= S.x),
        (u *= S.y),
        (m *= S.x),
        (p *= S.y),
        (a += v),
        (u += x),
        (w = Ze(g)),
        (g = w.frameElement);
    }
  }
  return Bl({ width: m, height: p, x: a, y: u });
}
const Iv = [":popover-open", ":modal"];
function Ga(e) {
  return Iv.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Av(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const l = o === "fixed",
    i = Ht(r),
    s = t ? Ga(t.floating) : !1;
  if (r === i || (s && l)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = mn(1);
  const m = mn(0),
    p = Pt(r);
  if (
    (p || (!p && !l)) &&
    ((_r(r) !== "body" || $o(i)) && (a = li(r)), Pt(r))
  ) {
    const c = Ln(r);
    (u = cr(r)), (m.x = c.x + r.clientLeft), (m.y = c.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + m.x,
    y: n.y * u.y - a.scrollTop * u.y + m.y,
  };
}
function zv(e) {
  return Array.from(e.getClientRects());
}
function gp(e) {
  return Ln(Ht(e)).left + li(e).scrollLeft;
}
function Dv(e) {
  const t = Ht(e),
    n = li(e),
    r = e.ownerDocument.body,
    o = Ye(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    l = Ye(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + gp(e);
  const s = -n.scrollTop;
  return (
    vt(r).direction === "rtl" && (i += Ye(t.clientWidth, r.clientWidth) - o),
    { width: o, height: l, x: i, y: s }
  );
}
function jv(e, t) {
  const n = Ze(e),
    r = Ht(e),
    o = n.visualViewport;
  let l = r.clientWidth,
    i = r.clientHeight,
    s = 0,
    a = 0;
  if (o) {
    (l = o.width), (i = o.height);
    const u = Qa();
    (!u || (u && t === "fixed")) && ((s = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: l, height: i, x: s, y: a };
}
function Fv(e, t) {
  const n = Ln(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    l = Pt(e) ? cr(e) : mn(1),
    i = e.clientWidth * l.x,
    s = e.clientHeight * l.y,
    a = o * l.x,
    u = r * l.y;
  return { width: i, height: s, x: a, y: u };
}
function bc(e, t, n) {
  let r;
  if (t === "viewport") r = jv(e, n);
  else if (t === "document") r = Dv(Ht(e));
  else if (bt(t)) r = Fv(t, n);
  else {
    const o = vp(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Bl(r);
}
function yp(e, t) {
  const n = hn(e);
  return n === t || !bt(n) || xr(n)
    ? !1
    : vt(n).position === "fixed" || yp(n, t);
}
function Bv(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = wo(e, [], !1).filter((s) => bt(s) && _r(s) !== "body"),
    o = null;
  const l = vt(e).position === "fixed";
  let i = l ? hn(e) : e;
  for (; bt(i) && !xr(i); ) {
    const s = vt(i),
      a = Ka(i);
    !a && s.position === "fixed" && (o = null),
      (
        l
          ? !a && !o
          : (!a &&
              s.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            ($o(i) && !a && yp(e, i))
      )
        ? (r = r.filter((m) => m !== i))
        : (o = s),
      (i = hn(i));
  }
  return t.set(e, r), r;
}
function Vv(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Ga(t)
          ? []
          : Bv(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = i[0],
    a = i.reduce((u, m) => {
      const p = bc(t, m, o);
      return (
        (u.top = Ye(p.top, u.top)),
        (u.right = Ct(p.right, u.right)),
        (u.bottom = Ct(p.bottom, u.bottom)),
        (u.left = Ye(p.left, u.left)),
        u
      );
    }, bc(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function Wv(e) {
  const { width: t, height: n } = hp(e);
  return { width: t, height: n };
}
function Hv(e, t, n) {
  const r = Pt(t),
    o = Ht(t),
    l = n === "fixed",
    i = Ln(e, !0, l, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const a = mn(0);
  if (r || (!r && !l))
    if (((_r(t) !== "body" || $o(o)) && (s = li(t)), r)) {
      const p = Ln(t, !0, l, t);
      (a.x = p.x + t.clientLeft), (a.y = p.y + t.clientTop);
    } else o && (a.x = gp(o));
  const u = i.left + s.scrollLeft - a.x,
    m = i.top + s.scrollTop - a.y;
  return { x: u, y: m, width: i.width, height: i.height };
}
function Vi(e) {
  return vt(e).position === "static";
}
function Pc(e, t) {
  return !Pt(e) || vt(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function wp(e, t) {
  const n = Ze(e);
  if (Ga(e)) return n;
  if (!Pt(e)) {
    let o = hn(e);
    for (; o && !xr(o); ) {
      if (bt(o) && !Vi(o)) return o;
      o = hn(o);
    }
    return n;
  }
  let r = Pc(e, t);
  for (; r && Rv(r) && Vi(r); ) r = Pc(r, t);
  return r && xr(r) && Vi(r) && !Ka(r) ? n : r || Ov(e) || n;
}
const Uv = async function (e) {
  const t = this.getOffsetParent || wp,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Hv(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Kv(e) {
  return vt(e).direction === "rtl";
}
const Qv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Av,
  getDocumentElement: Ht,
  getClippingRect: Vv,
  getOffsetParent: wp,
  getElementRects: Uv,
  getClientRects: zv,
  getDimensions: Wv,
  getScale: cr,
  isElement: bt,
  isRTL: Kv,
};
function Yv(e, t) {
  let n = null,
    r;
  const o = Ht(e);
  function l() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function i(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), l();
    const { left: u, top: m, width: p, height: c } = e.getBoundingClientRect();
    if ((s || t(), !p || !c)) return;
    const y = Uo(m),
      w = Uo(o.clientWidth - (u + p)),
      g = Uo(o.clientHeight - (m + c)),
      S = Uo(u),
      d = {
        rootMargin: -y + "px " + -w + "px " + -g + "px " + -S + "px",
        threshold: Ye(0, Ct(1, a)) || 1,
      };
    let v = !0;
    function x(E) {
      const $ = E[0].intersectionRatio;
      if ($ !== a) {
        if (!v) return i();
        $
          ? i(!1, $)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      v = !1;
    }
    try {
      n = new IntersectionObserver(x, { ...d, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(x, d);
    }
    n.observe(e);
  }
  return i(!0), l;
}
function Gv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: l = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = Ya(e),
    m = o || l ? [...(u ? wo(u) : []), ...wo(t)] : [];
  m.forEach((f) => {
    o && f.addEventListener("scroll", n, { passive: !0 }),
      l && f.addEventListener("resize", n);
  });
  const p = u && s ? Yv(u, n) : null;
  let c = -1,
    y = null;
  i &&
    ((y = new ResizeObserver((f) => {
      let [d] = f;
      d &&
        d.target === u &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(c),
        (c = requestAnimationFrame(() => {
          var v;
          (v = y) == null || v.observe(t);
        }))),
        n();
    })),
    u && !a && y.observe(u),
    y.observe(t));
  let w,
    g = a ? Ln(e) : null;
  a && S();
  function S() {
    const f = Ln(e);
    g &&
      (f.x !== g.x ||
        f.y !== g.y ||
        f.width !== g.width ||
        f.height !== g.height) &&
      n(),
      (g = f),
      (w = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      var f;
      m.forEach((d) => {
        o && d.removeEventListener("scroll", n),
          l && d.removeEventListener("resize", n);
      }),
        p == null || p(),
        (f = y) == null || f.disconnect(),
        (y = null),
        a && cancelAnimationFrame(w);
    }
  );
}
const Xv = Pv,
  Zv = _v,
  Jv = kv,
  qv = Tv,
  eg = $v,
  _c = Cv,
  tg = Nv,
  ng = (e, t, n) => {
    const r = new Map(),
      o = { platform: Qv, ...n },
      l = { ...o.platform, _c: r };
    return Ev(e, t, { ...o, platform: l });
  };
var fl = typeof document < "u" ? h.useLayoutEffect : h.useEffect;
function Vl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Vl(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const l = o[r];
      if (!(l === "_owner" && e.$$typeof) && !Vl(e[l], t[l])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function xp(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nc(e, t) {
  const n = xp(e);
  return Math.round(t * n) / n;
}
function Tc(e) {
  const t = h.useRef(e);
  return (
    fl(() => {
      t.current = e;
    }),
    t
  );
}
function rg(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: l, floating: i } = {},
      transform: s = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [m, p] = h.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [c, y] = h.useState(r);
  Vl(c, r) || y(r);
  const [w, g] = h.useState(null),
    [S, f] = h.useState(null),
    d = h.useCallback((F) => {
      F !== $.current && (($.current = F), g(F));
    }, []),
    v = h.useCallback((F) => {
      F !== k.current && ((k.current = F), f(F));
    }, []),
    x = l || w,
    E = i || S,
    $ = h.useRef(null),
    k = h.useRef(null),
    C = h.useRef(m),
    L = a != null,
    R = Tc(a),
    A = Tc(o),
    T = h.useCallback(() => {
      if (!$.current || !k.current) return;
      const F = { placement: t, strategy: n, middleware: c };
      A.current && (F.platform = A.current),
        ng($.current, k.current, F).then((b) => {
          const N = { ...b, isPositioned: !0 };
          Y.current &&
            !Vl(C.current, N) &&
            ((C.current = N),
            $r.flushSync(() => {
              p(N);
            }));
        });
    }, [c, t, n, A]);
  fl(() => {
    u === !1 &&
      C.current.isPositioned &&
      ((C.current.isPositioned = !1), p((F) => ({ ...F, isPositioned: !1 })));
  }, [u]);
  const Y = h.useRef(!1);
  fl(
    () => (
      (Y.current = !0),
      () => {
        Y.current = !1;
      }
    ),
    []
  ),
    fl(() => {
      if ((x && ($.current = x), E && (k.current = E), x && E)) {
        if (R.current) return R.current(x, E, T);
        T();
      }
    }, [x, E, T, R, L]);
  const W = h.useMemo(
      () => ({ reference: $, floating: k, setReference: d, setFloating: v }),
      [d, v]
    ),
    B = h.useMemo(() => ({ reference: x, floating: E }), [x, E]),
    V = h.useMemo(() => {
      const F = { position: n, left: 0, top: 0 };
      if (!B.floating) return F;
      const b = Nc(B.floating, m.x),
        N = Nc(B.floating, m.y);
      return s
        ? {
            ...F,
            transform: "translate(" + b + "px, " + N + "px)",
            ...(xp(B.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: b, top: N };
    }, [n, s, B.floating, m.x, m.y]);
  return h.useMemo(
    () => ({ ...m, update: T, refs: W, elements: B, floatingStyles: V }),
    [m, T, W, B, V]
  );
}
const og = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? _c({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? _c({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  lg = (e, t) => ({ ...Xv(e), options: [e, t] }),
  ig = (e, t) => ({ ...Zv(e), options: [e, t] }),
  sg = (e, t) => ({ ...tg(e), options: [e, t] }),
  ag = (e, t) => ({ ...Jv(e), options: [e, t] }),
  ug = (e, t) => ({ ...qv(e), options: [e, t] }),
  cg = (e, t) => ({ ...eg(e), options: [e, t] }),
  dg = (e, t) => ({ ...og(e), options: [e, t] });
function fg(e) {
  const [t, n] = h.useState(void 0);
  return (
    at(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const l = o[0];
          let i, s;
          if ("borderBoxSize" in l) {
            const a = l.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (i = u.inlineSize), (s = u.blockSize);
          } else (i = e.offsetWidth), (s = e.offsetHeight);
          n({ width: i, height: s });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const Sp = "Popper",
  [Ep, Cp] = Va(Sp),
  [pg, kp] = Ep(Sp),
  mg = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = h.useState(null);
    return h.createElement(pg, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  hg = "PopperAnchor",
  vg = h.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      l = kp(hg, n),
      i = h.useRef(null),
      s = Le(t, i);
    return (
      h.useEffect(() => {
        l.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : h.createElement(Pe.div, te({}, o, { ref: s }))
    );
  }),
  $p = "PopperContent",
  [gg, gw] = Ep($p),
  yg = h.forwardRef((e, t) => {
    var n, r, o, l, i, s, a, u;
    const {
        __scopePopper: m,
        side: p = "bottom",
        sideOffset: c = 0,
        align: y = "center",
        alignOffset: w = 0,
        arrowPadding: g = 0,
        avoidCollisions: S = !0,
        collisionBoundary: f = [],
        collisionPadding: d = 0,
        sticky: v = "partial",
        hideWhenDetached: x = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: $,
        ...k
      } = e,
      C = kp($p, m),
      [L, R] = h.useState(null),
      A = Le(t, (tt) => R(tt)),
      [T, Y] = h.useState(null),
      W = fg(T),
      B = (n = W == null ? void 0 : W.width) !== null && n !== void 0 ? n : 0,
      V = (r = W == null ? void 0 : W.height) !== null && r !== void 0 ? r : 0,
      F = p + (y !== "center" ? "-" + y : ""),
      b =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      N = Array.isArray(f) ? f : [f],
      j = N.length > 0,
      I = { padding: b, boundary: N.filter(wg), altBoundary: j },
      {
        refs: z,
        floatingStyles: G,
        placement: re,
        isPositioned: ve,
        middlewareData: K,
      } = rg({
        strategy: "fixed",
        placement: F,
        whileElementsMounted: (...tt) =>
          Gv(...tt, { animationFrame: E === "always" }),
        elements: { reference: C.anchor },
        middleware: [
          lg({ mainAxis: c + V, alignmentAxis: w }),
          S &&
            ig({
              mainAxis: !0,
              crossAxis: !1,
              limiter: v === "partial" ? sg() : void 0,
              ...I,
            }),
          S && ag({ ...I }),
          ug({
            ...I,
            apply: ({
              elements: tt,
              rects: Ue,
              availableWidth: wn,
              availableHeight: ci,
            }) => {
              const { width: je, height: Ut } = Ue.reference,
                Dn = tt.floating.style;
              Dn.setProperty("--radix-popper-available-width", `${wn}px`),
                Dn.setProperty("--radix-popper-available-height", `${ci}px`),
                Dn.setProperty("--radix-popper-anchor-width", `${je}px`),
                Dn.setProperty("--radix-popper-anchor-height", `${Ut}px`);
            },
          }),
          T && dg({ element: T, padding: g }),
          xg({ arrowWidth: B, arrowHeight: V }),
          x && cg({ strategy: "referenceHidden", ...I }),
        ],
      }),
      [D, J] = bp(re),
      ce = jt($);
    at(() => {
      ve && (ce == null || ce());
    }, [ve, ce]);
    const q = (o = K.arrow) === null || o === void 0 ? void 0 : o.x,
      ee = (l = K.arrow) === null || l === void 0 ? void 0 : l.y,
      Z =
        ((i = K.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !==
        0,
      [Me, _e] = h.useState();
    return (
      at(() => {
        L && _e(window.getComputedStyle(L).zIndex);
      }, [L]),
      h.createElement(
        "div",
        {
          ref: z.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...G,
            transform: ve ? G.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Me,
            "--radix-popper-transform-origin": [
              (s = K.transformOrigin) === null || s === void 0 ? void 0 : s.x,
              (a = K.transformOrigin) === null || a === void 0 ? void 0 : a.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        h.createElement(
          gg,
          {
            scope: m,
            placedSide: D,
            onArrowChange: Y,
            arrowX: q,
            arrowY: ee,
            shouldHideArrow: Z,
          },
          h.createElement(
            Pe.div,
            te({ "data-side": D, "data-align": J }, k, {
              ref: A,
              style: {
                ...k.style,
                animation: ve ? void 0 : "none",
                opacity:
                  (u = K.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function wg(e) {
  return e !== null;
}
const xg = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, l, i;
    const { placement: s, rects: a, middlewareData: u } = t,
      p =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      c = p ? 0 : e.arrowWidth,
      y = p ? 0 : e.arrowHeight,
      [w, g] = bp(s),
      S = { start: "0%", center: "50%", end: "100%" }[g],
      f =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        c / 2,
      d =
        ((l = (i = u.arrow) === null || i === void 0 ? void 0 : i.y) !== null &&
        l !== void 0
          ? l
          : 0) +
        y / 2;
    let v = "",
      x = "";
    return (
      w === "bottom"
        ? ((v = p ? S : `${f}px`), (x = `${-y}px`))
        : w === "top"
        ? ((v = p ? S : `${f}px`), (x = `${a.floating.height + y}px`))
        : w === "right"
        ? ((v = `${-y}px`), (x = p ? S : `${d}px`))
        : w === "left" &&
          ((v = `${a.floating.width + y}px`), (x = p ? S : `${d}px`)),
      { data: { x: v, y: x } }
    );
  },
});
function bp(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Sg = mg,
  Eg = vg,
  Cg = yg,
  kg = h.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...o
    } = e;
    return r
      ? sp.createPortal(h.createElement(Pe.div, te({}, o, { ref: t })), r)
      : null;
  });
function Rc({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = $g({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    s = jt(n),
    a = h.useCallback(
      (u) => {
        if (l) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && s(p);
        } else o(u);
      },
      [l, e, o, s]
    );
  return [i, a];
}
function $g({ defaultProp: e, onChange: t }) {
  const n = h.useState(e),
    [r] = n,
    o = h.useRef(r),
    l = jt(t);
  return (
    h.useEffect(() => {
      o.current !== r && (l(r), (o.current = r));
    }, [r, o, l]),
    n
  );
}
function bg(e) {
  const t = h.useRef({ value: e, previous: e });
  return h.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const Pg = h.forwardRef((e, t) =>
  h.createElement(
    Pe.span,
    te({}, e, {
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    })
  )
);
var _g = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Vn = new WeakMap(),
  Ko = new WeakMap(),
  Qo = {},
  Wi = 0,
  Pp = function (e) {
    return e && (e.host || Pp(e.parentNode));
  },
  Ng = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Pp(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Tg = function (e, t, n, r) {
    var o = Ng(t, Array.isArray(e) ? e : [e]);
    Qo[n] || (Qo[n] = new WeakMap());
    var l = Qo[n],
      i = [],
      s = new Set(),
      a = new Set(o),
      u = function (p) {
        !p || s.has(p) || (s.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var m = function (p) {
      !p ||
        a.has(p) ||
        Array.prototype.forEach.call(p.children, function (c) {
          if (s.has(c)) m(c);
          else
            try {
              var y = c.getAttribute(r),
                w = y !== null && y !== "false",
                g = (Vn.get(c) || 0) + 1,
                S = (l.get(c) || 0) + 1;
              Vn.set(c, g),
                l.set(c, S),
                i.push(c),
                g === 1 && w && Ko.set(c, !0),
                S === 1 && c.setAttribute(n, "true"),
                w || c.setAttribute(r, "true");
            } catch (f) {
              console.error("aria-hidden: cannot operate on ", c, f);
            }
        });
    };
    return (
      m(t),
      s.clear(),
      Wi++,
      function () {
        i.forEach(function (p) {
          var c = Vn.get(p) - 1,
            y = l.get(p) - 1;
          Vn.set(p, c),
            l.set(p, y),
            c || (Ko.has(p) || p.removeAttribute(r), Ko.delete(p)),
            y || p.removeAttribute(n);
        }),
          Wi--,
          Wi ||
            ((Vn = new WeakMap()),
            (Vn = new WeakMap()),
            (Ko = new WeakMap()),
            (Qo = {}));
      }
    );
  },
  Rg = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = _g(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        Tg(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Et = function () {
    return (
      (Et =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
          }
          return t;
        }),
      Et.apply(this, arguments)
    );
  };
function _p(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Og(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, l; r < o; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var pl = "right-scroll-bar-position",
  ml = "width-before-scroll-bar",
  Lg = "with-scroll-bars-hidden",
  Mg = "--removed-body-scroll-bar-size";
function Hi(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Ig(e, t) {
  var n = h.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Ag = typeof window < "u" ? h.useLayoutEffect : h.useEffect,
  Oc = new WeakMap();
function zg(e, t) {
  var n = Ig(null, function (r) {
    return e.forEach(function (o) {
      return Hi(o, r);
    });
  });
  return (
    Ag(
      function () {
        var r = Oc.get(n);
        if (r) {
          var o = new Set(r),
            l = new Set(e),
            i = n.current;
          o.forEach(function (s) {
            l.has(s) || Hi(s, null);
          }),
            l.forEach(function (s) {
              o.has(s) || Hi(s, i);
            });
        }
        Oc.set(n, e);
      },
      [e]
    ),
    n
  );
}
function Dg(e) {
  return e;
}
function jg(e, t) {
  t === void 0 && (t = Dg);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (l) {
        var i = t(l, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (s) {
              return s !== i;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(l);
        }
        n = {
          push: function (s) {
            return l(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (l) {
        r = !0;
        var i = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(l), (i = n);
        }
        var a = function () {
            var m = i;
            (i = []), m.forEach(l);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (m) {
              i.push(m), u();
            },
            filter: function (m) {
              return (i = i.filter(m)), n;
            },
          });
      },
    };
  return o;
}
function Fg(e) {
  e === void 0 && (e = {});
  var t = jg(null);
  return (t.options = Et({ async: !0, ssr: !1 }, e)), t;
}
var Np = function (e) {
  var t = e.sideCar,
    n = _p(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return h.createElement(r, Et({}, n));
};
Np.isSideCarExport = !0;
function Bg(e, t) {
  return e.useMedium(t), Np;
}
var Tp = Fg(),
  Ui = function () {},
  ii = h.forwardRef(function (e, t) {
    var n = h.useRef(null),
      r = h.useState({
        onScrollCapture: Ui,
        onWheelCapture: Ui,
        onTouchMoveCapture: Ui,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      s = e.children,
      a = e.className,
      u = e.removeScrollBar,
      m = e.enabled,
      p = e.shards,
      c = e.sideCar,
      y = e.noIsolation,
      w = e.inert,
      g = e.allowPinchZoom,
      S = e.as,
      f = S === void 0 ? "div" : S,
      d = _p(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      v = c,
      x = zg([n, t]),
      E = Et(Et({}, d), o);
    return h.createElement(
      h.Fragment,
      null,
      m &&
        h.createElement(v, {
          sideCar: Tp,
          removeScrollBar: u,
          shards: p,
          noIsolation: y,
          inert: w,
          setCallbacks: l,
          allowPinchZoom: !!g,
          lockRef: n,
        }),
      i
        ? h.cloneElement(h.Children.only(s), Et(Et({}, E), { ref: x }))
        : h.createElement(f, Et({}, E, { className: a, ref: x }), s)
    );
  });
ii.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ii.classNames = { fullWidth: ml, zeroRight: pl };
var Vg = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Wg() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Vg();
  return t && e.setAttribute("nonce", t), e;
}
function Hg(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Ug(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Kg = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Wg()) && (Hg(t, n), Ug(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Qg = function () {
    var e = Kg();
    return function (t, n) {
      h.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Rp = function () {
    var e = Qg(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Yg = { left: 0, top: 0, right: 0, gap: 0 },
  Ki = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Gg = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Ki(n), Ki(r), Ki(o)];
  },
  Xg = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Yg;
    var t = Gg(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Zg = Rp(),
  dr = "data-scroll-locked",
  Jg = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      i = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Lg,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          dr,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  l,
                  `px;
    padding-right: `
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          pl,
          ` {
    right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          ml,
          ` {
    margin-right: `
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(pl, " .")
        .concat(
          pl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ml, " .")
        .concat(
          ml,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          dr,
          `] {
    `
        )
        .concat(Mg, ": ")
        .concat(
          s,
          `px;
  }
`
        )
    );
  },
  Lc = function () {
    var e = parseInt(document.body.getAttribute(dr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  qg = function () {
    h.useEffect(function () {
      return (
        document.body.setAttribute(dr, (Lc() + 1).toString()),
        function () {
          var e = Lc() - 1;
          e <= 0
            ? document.body.removeAttribute(dr)
            : document.body.setAttribute(dr, e.toString());
        }
      );
    }, []);
  },
  ey = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    qg();
    var l = h.useMemo(
      function () {
        return Xg(o);
      },
      [o]
    );
    return h.createElement(Zg, { styles: Jg(l, !t, o, n ? "" : "!important") });
  },
  Hs = !1;
if (typeof window < "u")
  try {
    var Yo = Object.defineProperty({}, "passive", {
      get: function () {
        return (Hs = !0), !0;
      },
    });
    window.addEventListener("test", Yo, Yo),
      window.removeEventListener("test", Yo, Yo);
  } catch {
    Hs = !1;
  }
var Wn = Hs ? { passive: !1 } : !1,
  ty = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Op = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !ty(e) && n[t] === "visible")
    );
  },
  ny = function (e) {
    return Op(e, "overflowY");
  },
  ry = function (e) {
    return Op(e, "overflowX");
  },
  Mc = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = Lp(e, n);
      if (r) {
        var o = Mp(e, n),
          l = o[1],
          i = o[2];
        if (l > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  oy = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  ly = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Lp = function (e, t) {
    return e === "v" ? ny(t) : ry(t);
  },
  Mp = function (e, t) {
    return e === "v" ? oy(t) : ly(t);
  },
  iy = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  sy = function (e, t, n, r, o) {
    var l = iy(e, window.getComputedStyle(t).direction),
      i = l * r,
      s = n.target,
      a = t.contains(s),
      u = !1,
      m = i > 0,
      p = 0,
      c = 0;
    do {
      var y = Mp(e, s),
        w = y[0],
        g = y[1],
        S = y[2],
        f = g - S - l * w;
      (w || f) && Lp(e, s) && ((p += f), (c += w)), (s = s.parentNode);
    } while ((!a && s !== document.body) || (a && (t.contains(s) || t === s)));
    return ((m && (p === 0 || !o)) || (!m && (c === 0 || !o))) && (u = !0), u;
  },
  Go = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Ic = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ac = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ay = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  uy = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  cy = 0,
  Hn = [];
function dy(e) {
  var t = h.useRef([]),
    n = h.useRef([0, 0]),
    r = h.useRef(),
    o = h.useState(cy++)[0],
    l = h.useState(function () {
      return Rp();
    })[0],
    i = h.useRef(e);
  h.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    h.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = Og([e.lockRef.current], (e.shards || []).map(Ac), !0).filter(
            Boolean
          );
          return (
            g.forEach(function (S) {
              return S.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (S) {
                  return S.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var s = h.useCallback(function (g, S) {
      if ("touches" in g && g.touches.length === 2)
        return !i.current.allowPinchZoom;
      var f = Go(g),
        d = n.current,
        v = "deltaX" in g ? g.deltaX : d[0] - f[0],
        x = "deltaY" in g ? g.deltaY : d[1] - f[1],
        E,
        $ = g.target,
        k = Math.abs(v) > Math.abs(x) ? "h" : "v";
      if ("touches" in g && k === "h" && $.type === "range") return !1;
      var C = Mc(k, $);
      if (!C) return !0;
      if ((C ? (E = k) : ((E = k === "v" ? "h" : "v"), (C = Mc(k, $))), !C))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (v || x) && (r.current = E), !E)
      )
        return !0;
      var L = r.current || E;
      return sy(L, S, g, L === "h" ? v : x, !0);
    }, []),
    a = h.useCallback(function (g) {
      var S = g;
      if (!(!Hn.length || Hn[Hn.length - 1] !== l)) {
        var f = "deltaY" in S ? Ic(S) : Go(S),
          d = t.current.filter(function (E) {
            return E.name === S.type && E.target === S.target && ay(E.delta, f);
          })[0];
        if (d && d.should) {
          S.cancelable && S.preventDefault();
          return;
        }
        if (!d) {
          var v = (i.current.shards || [])
              .map(Ac)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(S.target);
              }),
            x = v.length > 0 ? s(S, v[0]) : !i.current.noIsolation;
          x && S.cancelable && S.preventDefault();
        }
      }
    }, []),
    u = h.useCallback(function (g, S, f, d) {
      var v = { name: g, delta: S, target: f, should: d };
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== v;
          });
        }, 1);
    }, []),
    m = h.useCallback(function (g) {
      (n.current = Go(g)), (r.current = void 0);
    }, []),
    p = h.useCallback(function (g) {
      u(g.type, Ic(g), g.target, s(g, e.lockRef.current));
    }, []),
    c = h.useCallback(function (g) {
      u(g.type, Go(g), g.target, s(g, e.lockRef.current));
    }, []);
  h.useEffect(function () {
    return (
      Hn.push(l),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: c,
      }),
      document.addEventListener("wheel", a, Wn),
      document.addEventListener("touchmove", a, Wn),
      document.addEventListener("touchstart", m, Wn),
      function () {
        (Hn = Hn.filter(function (g) {
          return g !== l;
        })),
          document.removeEventListener("wheel", a, Wn),
          document.removeEventListener("touchmove", a, Wn),
          document.removeEventListener("touchstart", m, Wn);
      }
    );
  }, []);
  var y = e.removeScrollBar,
    w = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    w ? h.createElement(l, { styles: uy(o) }) : null,
    y ? h.createElement(ey, { gapMode: "margin" }) : null
  );
}
const fy = Bg(Tp, dy);
var Ip = h.forwardRef(function (e, t) {
  return h.createElement(ii, Et({}, e, { ref: t, sideCar: fy }));
});
Ip.classNames = ii.classNames;
const py = [" ", "Enter", "ArrowUp", "ArrowDown"],
  my = [" ", "Enter"],
  si = "Select",
  [ai, ui, hy] = K0(si),
  [Nr, yw] = Va(si, [hy, Cp]),
  Xa = Cp(),
  [vy, An] = Nr(si),
  [gy, yy] = Nr(si),
  wy = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        value: i,
        defaultValue: s,
        onValueChange: a,
        dir: u,
        name: m,
        autoComplete: p,
        disabled: c,
        required: y,
      } = e,
      w = Xa(t),
      [g, S] = h.useState(null),
      [f, d] = h.useState(null),
      [v, x] = h.useState(!1),
      E = Y0(u),
      [$ = !1, k] = Rc({ prop: r, defaultProp: o, onChange: l }),
      [C, L] = Rc({ prop: i, defaultProp: s, onChange: a }),
      R = h.useRef(null),
      A = g ? !!g.closest("form") : !0,
      [T, Y] = h.useState(new Set()),
      W = Array.from(T)
        .map((B) => B.props.value)
        .join(";");
    return h.createElement(
      Sg,
      w,
      h.createElement(
        vy,
        {
          required: y,
          scope: t,
          trigger: g,
          onTriggerChange: S,
          valueNode: f,
          onValueNodeChange: d,
          valueNodeHasChildren: v,
          onValueNodeHasChildrenChange: x,
          contentId: dp(),
          value: C,
          onValueChange: L,
          open: $,
          onOpenChange: k,
          dir: E,
          triggerPointerDownPosRef: R,
          disabled: c,
        },
        h.createElement(
          ai.Provider,
          { scope: t },
          h.createElement(
            gy,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: h.useCallback((B) => {
                Y((V) => new Set(V).add(B));
              }, []),
              onNativeOptionRemove: h.useCallback((B) => {
                Y((V) => {
                  const F = new Set(V);
                  return F.delete(B), F;
                });
              }, []),
            },
            n
          )
        ),
        A
          ? h.createElement(
              Fp,
              {
                key: W,
                "aria-hidden": !0,
                required: y,
                tabIndex: -1,
                name: m,
                autoComplete: p,
                value: C,
                onChange: (B) => L(B.target.value),
                disabled: c,
              },
              C === void 0 ? h.createElement("option", { value: "" }) : null,
              Array.from(T)
            )
          : null
      )
    );
  },
  xy = "SelectTrigger",
  Sy = h.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      l = Xa(n),
      i = An(xy, n),
      s = i.disabled || r,
      a = Le(t, i.onTriggerChange),
      u = ui(n),
      [m, p, c] = Bp((w) => {
        const g = u().filter((d) => !d.disabled),
          S = g.find((d) => d.value === i.value),
          f = Vp(g, w, S);
        f !== void 0 && i.onValueChange(f.value);
      }),
      y = () => {
        s || (i.onOpenChange(!0), c());
      };
    return h.createElement(
      Eg,
      te({ asChild: !0 }, l),
      h.createElement(
        Pe.button,
        te(
          {
            type: "button",
            role: "combobox",
            "aria-controls": i.contentId,
            "aria-expanded": i.open,
            "aria-required": i.required,
            "aria-autocomplete": "none",
            dir: i.dir,
            "data-state": i.open ? "open" : "closed",
            disabled: s,
            "data-disabled": s ? "" : void 0,
            "data-placeholder": jp(i.value) ? "" : void 0,
          },
          o,
          {
            ref: a,
            onClick: Ee(o.onClick, (w) => {
              w.currentTarget.focus();
            }),
            onPointerDown: Ee(o.onPointerDown, (w) => {
              const g = w.target;
              g.hasPointerCapture(w.pointerId) &&
                g.releasePointerCapture(w.pointerId),
                w.button === 0 &&
                  w.ctrlKey === !1 &&
                  (y(),
                  (i.triggerPointerDownPosRef.current = {
                    x: Math.round(w.pageX),
                    y: Math.round(w.pageY),
                  }),
                  w.preventDefault());
            }),
            onKeyDown: Ee(o.onKeyDown, (w) => {
              const g = m.current !== "";
              !(w.ctrlKey || w.altKey || w.metaKey) &&
                w.key.length === 1 &&
                p(w.key),
                !(g && w.key === " ") &&
                  py.includes(w.key) &&
                  (y(), w.preventDefault());
            }),
          }
        )
      )
    );
  }),
  Ey = "SelectValue",
  Cy = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: l,
        placeholder: i = "",
        ...s
      } = e,
      a = An(Ey, n),
      { onValueNodeHasChildrenChange: u } = a,
      m = l !== void 0,
      p = Le(t, a.onValueNodeChange);
    return (
      at(() => {
        u(m);
      }, [u, m]),
      h.createElement(
        Pe.span,
        te({}, s, { ref: p, style: { pointerEvents: "none" } }),
        jp(a.value) ? h.createElement(h.Fragment, null, i) : l
      )
    );
  }),
  ky = h.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return h.createElement(
      Pe.span,
      te({ "aria-hidden": !0 }, o, { ref: t }),
      r || "▼"
    );
  }),
  $y = (e) => h.createElement(kg, te({ asChild: !0 }, e)),
  Sr = "SelectContent",
  by = h.forwardRef((e, t) => {
    const n = An(Sr, e.__scopeSelect),
      [r, o] = h.useState();
    if (
      (at(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const l = r;
      return l
        ? $r.createPortal(
            h.createElement(
              Ap,
              { scope: e.__scopeSelect },
              h.createElement(
                ai.Slot,
                { scope: e.__scopeSelect },
                h.createElement("div", null, e.children)
              )
            ),
            l
          )
        : null;
    }
    return h.createElement(Py, te({}, e, { ref: t }));
  }),
  Tt = 10,
  [Ap, zn] = Nr(Sr),
  Py = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: l,
        onPointerDownOutside: i,
        side: s,
        sideOffset: a,
        align: u,
        alignOffset: m,
        arrowPadding: p,
        collisionBoundary: c,
        collisionPadding: y,
        sticky: w,
        hideWhenDetached: g,
        avoidCollisions: S,
        ...f
      } = e,
      d = An(Sr, n),
      [v, x] = h.useState(null),
      [E, $] = h.useState(null),
      k = Le(t, (D) => x(D)),
      [C, L] = h.useState(null),
      [R, A] = h.useState(null),
      T = ui(n),
      [Y, W] = h.useState(!1),
      B = h.useRef(!1);
    h.useEffect(() => {
      if (v) return Rg(v);
    }, [v]),
      ov();
    const V = h.useCallback(
        (D) => {
          const [J, ...ce] = T().map((Z) => Z.ref.current),
            [q] = ce.slice(-1),
            ee = document.activeElement;
          for (const Z of D)
            if (
              Z === ee ||
              (Z == null || Z.scrollIntoView({ block: "nearest" }),
              Z === J && E && (E.scrollTop = 0),
              Z === q && E && (E.scrollTop = E.scrollHeight),
              Z == null || Z.focus(),
              document.activeElement !== ee)
            )
              return;
        },
        [T, E]
      ),
      F = h.useCallback(() => V([C, v]), [V, C, v]);
    h.useEffect(() => {
      Y && F();
    }, [Y, F]);
    const { onOpenChange: b, triggerPointerDownPosRef: N } = d;
    h.useEffect(() => {
      if (v) {
        let D = { x: 0, y: 0 };
        const J = (q) => {
            var ee, Z, Me, _e;
            D = {
              x: Math.abs(
                Math.round(q.pageX) -
                  ((ee =
                    (Z = N.current) === null || Z === void 0 ? void 0 : Z.x) !==
                    null && ee !== void 0
                    ? ee
                    : 0)
              ),
              y: Math.abs(
                Math.round(q.pageY) -
                  ((Me =
                    (_e = N.current) === null || _e === void 0
                      ? void 0
                      : _e.y) !== null && Me !== void 0
                    ? Me
                    : 0)
              ),
            };
          },
          ce = (q) => {
            D.x <= 10 && D.y <= 10
              ? q.preventDefault()
              : v.contains(q.target) || b(!1),
              document.removeEventListener("pointermove", J),
              (N.current = null);
          };
        return (
          N.current !== null &&
            (document.addEventListener("pointermove", J),
            document.addEventListener("pointerup", ce, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", J),
              document.removeEventListener("pointerup", ce, { capture: !0 });
          }
        );
      }
    }, [v, b, N]),
      h.useEffect(() => {
        const D = () => b(!1);
        return (
          window.addEventListener("blur", D),
          window.addEventListener("resize", D),
          () => {
            window.removeEventListener("blur", D),
              window.removeEventListener("resize", D);
          }
        );
      }, [b]);
    const [j, I] = Bp((D) => {
        const J = T().filter((ee) => !ee.disabled),
          ce = J.find((ee) => ee.ref.current === document.activeElement),
          q = Vp(J, D, ce);
        q && setTimeout(() => q.ref.current.focus());
      }),
      z = h.useCallback(
        (D, J, ce) => {
          const q = !B.current && !ce;
          ((d.value !== void 0 && d.value === J) || q) &&
            (L(D), q && (B.current = !0));
        },
        [d.value]
      ),
      G = h.useCallback(() => (v == null ? void 0 : v.focus()), [v]),
      re = h.useCallback(
        (D, J, ce) => {
          const q = !B.current && !ce;
          ((d.value !== void 0 && d.value === J) || q) && A(D);
        },
        [d.value]
      ),
      ve = r === "popper" ? zc : _y,
      K =
        ve === zc
          ? {
              side: s,
              sideOffset: a,
              align: u,
              alignOffset: m,
              arrowPadding: p,
              collisionBoundary: c,
              collisionPadding: y,
              sticky: w,
              hideWhenDetached: g,
              avoidCollisions: S,
            }
          : {};
    return h.createElement(
      Ap,
      {
        scope: n,
        content: v,
        viewport: E,
        onViewportChange: $,
        itemRefCallback: z,
        selectedItem: C,
        onItemLeave: G,
        itemTextRefCallback: re,
        focusSelectedItem: F,
        selectedItemText: R,
        position: r,
        isPositioned: Y,
        searchRef: j,
      },
      h.createElement(
        Ip,
        { as: wr, allowPinchZoom: !0 },
        h.createElement(
          lv,
          {
            asChild: !0,
            trapped: d.open,
            onMountAutoFocus: (D) => {
              D.preventDefault();
            },
            onUnmountAutoFocus: Ee(o, (D) => {
              var J;
              (J = d.trigger) === null ||
                J === void 0 ||
                J.focus({ preventScroll: !0 }),
                D.preventDefault();
            }),
          },
          h.createElement(
            tv,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: l,
              onPointerDownOutside: i,
              onFocusOutside: (D) => D.preventDefault(),
              onDismiss: () => d.onOpenChange(!1),
            },
            h.createElement(
              ve,
              te(
                {
                  role: "listbox",
                  id: d.contentId,
                  "data-state": d.open ? "open" : "closed",
                  dir: d.dir,
                  onContextMenu: (D) => D.preventDefault(),
                },
                f,
                K,
                {
                  onPlaced: () => W(!0),
                  ref: k,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...f.style,
                  },
                  onKeyDown: Ee(f.onKeyDown, (D) => {
                    const J = D.ctrlKey || D.altKey || D.metaKey;
                    if (
                      (D.key === "Tab" && D.preventDefault(),
                      !J && D.key.length === 1 && I(D.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(D.key))
                    ) {
                      let q = T()
                        .filter((ee) => !ee.disabled)
                        .map((ee) => ee.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(D.key) &&
                          (q = q.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(D.key))
                      ) {
                        const ee = D.target,
                          Z = q.indexOf(ee);
                        q = q.slice(Z + 1);
                      }
                      setTimeout(() => V(q)), D.preventDefault();
                    }
                  }),
                }
              )
            )
          )
        )
      )
    );
  }),
  _y = h.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      l = An(Sr, n),
      i = zn(Sr, n),
      [s, a] = h.useState(null),
      [u, m] = h.useState(null),
      p = Le(t, (k) => m(k)),
      c = ui(n),
      y = h.useRef(!1),
      w = h.useRef(!0),
      {
        viewport: g,
        selectedItem: S,
        selectedItemText: f,
        focusSelectedItem: d,
      } = i,
      v = h.useCallback(() => {
        if (l.trigger && l.valueNode && s && u && g && S && f) {
          const k = l.trigger.getBoundingClientRect(),
            C = u.getBoundingClientRect(),
            L = l.valueNode.getBoundingClientRect(),
            R = f.getBoundingClientRect();
          if (l.dir !== "rtl") {
            const ee = R.left - C.left,
              Z = L.left - ee,
              Me = k.left - Z,
              _e = k.width + Me,
              tt = Math.max(_e, C.width),
              Ue = window.innerWidth - Tt,
              wn = mc(Z, [Tt, Ue - tt]);
            (s.style.minWidth = _e + "px"), (s.style.left = wn + "px");
          } else {
            const ee = C.right - R.right,
              Z = window.innerWidth - L.right - ee,
              Me = window.innerWidth - k.right - Z,
              _e = k.width + Me,
              tt = Math.max(_e, C.width),
              Ue = window.innerWidth - Tt,
              wn = mc(Z, [Tt, Ue - tt]);
            (s.style.minWidth = _e + "px"), (s.style.right = wn + "px");
          }
          const A = c(),
            T = window.innerHeight - Tt * 2,
            Y = g.scrollHeight,
            W = window.getComputedStyle(u),
            B = parseInt(W.borderTopWidth, 10),
            V = parseInt(W.paddingTop, 10),
            F = parseInt(W.borderBottomWidth, 10),
            b = parseInt(W.paddingBottom, 10),
            N = B + V + Y + b + F,
            j = Math.min(S.offsetHeight * 5, N),
            I = window.getComputedStyle(g),
            z = parseInt(I.paddingTop, 10),
            G = parseInt(I.paddingBottom, 10),
            re = k.top + k.height / 2 - Tt,
            ve = T - re,
            K = S.offsetHeight / 2,
            D = S.offsetTop + K,
            J = B + V + D,
            ce = N - J;
          if (J <= re) {
            const ee = S === A[A.length - 1].ref.current;
            s.style.bottom = "0px";
            const Z = u.clientHeight - g.offsetTop - g.offsetHeight,
              Me = Math.max(ve, K + (ee ? G : 0) + Z + F),
              _e = J + Me;
            s.style.height = _e + "px";
          } else {
            const ee = S === A[0].ref.current;
            s.style.top = "0px";
            const Me = Math.max(re, B + g.offsetTop + (ee ? z : 0) + K) + ce;
            (s.style.height = Me + "px"), (g.scrollTop = J - re + g.offsetTop);
          }
          (s.style.margin = `${Tt}px 0`),
            (s.style.minHeight = j + "px"),
            (s.style.maxHeight = T + "px"),
            r == null || r(),
            requestAnimationFrame(() => (y.current = !0));
        }
      }, [c, l.trigger, l.valueNode, s, u, g, S, f, l.dir, r]);
    at(() => v(), [v]);
    const [x, E] = h.useState();
    at(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const $ = h.useCallback(
      (k) => {
        k && w.current === !0 && (v(), d == null || d(), (w.current = !1));
      },
      [v, d]
    );
    return h.createElement(
      Ny,
      {
        scope: n,
        contentWrapper: s,
        shouldExpandOnScrollRef: y,
        onScrollButtonChange: $,
      },
      h.createElement(
        "div",
        {
          ref: a,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: x,
          },
        },
        h.createElement(
          Pe.div,
          te({}, o, {
            ref: p,
            style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
          })
        )
      )
    );
  }),
  zc = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Tt,
        ...l
      } = e,
      i = Xa(n);
    return h.createElement(
      Cg,
      te({}, i, l, {
        ref: t,
        align: r,
        collisionPadding: o,
        style: {
          boxSizing: "border-box",
          ...l.style,
          "--radix-select-content-transform-origin":
            "var(--radix-popper-transform-origin)",
          "--radix-select-content-available-width":
            "var(--radix-popper-available-width)",
          "--radix-select-content-available-height":
            "var(--radix-popper-available-height)",
          "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
        },
      })
    );
  }),
  [Ny, Za] = Nr(Sr, {}),
  Dc = "SelectViewport",
  Ty = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = zn(Dc, n),
      l = Za(Dc, n),
      i = Le(t, o.onViewportChange),
      s = h.useRef(0);
    return h.createElement(
      h.Fragment,
      null,
      h.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      h.createElement(
        ai.Slot,
        { scope: n },
        h.createElement(
          Pe.div,
          te({ "data-radix-select-viewport": "", role: "presentation" }, r, {
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...r.style,
            },
            onScroll: Ee(r.onScroll, (a) => {
              const u = a.currentTarget,
                { contentWrapper: m, shouldExpandOnScrollRef: p } = l;
              if (p != null && p.current && m) {
                const c = Math.abs(s.current - u.scrollTop);
                if (c > 0) {
                  const y = window.innerHeight - Tt * 2,
                    w = parseFloat(m.style.minHeight),
                    g = parseFloat(m.style.height),
                    S = Math.max(w, g);
                  if (S < y) {
                    const f = S + c,
                      d = Math.min(y, f),
                      v = f - d;
                    (m.style.height = d + "px"),
                      m.style.bottom === "0px" &&
                        ((u.scrollTop = v > 0 ? v : 0),
                        (m.style.justifyContent = "flex-end"));
                  }
                }
              }
              s.current = u.scrollTop;
            }),
          })
        )
      )
    );
  }),
  Ry = "SelectGroup",
  [ww, Oy] = Nr(Ry),
  Ly = "SelectLabel",
  My = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Oy(Ly, n);
    return h.createElement(Pe.div, te({ id: o.id }, r, { ref: t }));
  }),
  Us = "SelectItem",
  [Iy, zp] = Nr(Us),
  Ay = h.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: l,
        ...i
      } = e,
      s = An(Us, n),
      a = zn(Us, n),
      u = s.value === r,
      [m, p] = h.useState(l ?? ""),
      [c, y] = h.useState(!1),
      w = Le(t, (f) => {
        var d;
        return (d = a.itemRefCallback) === null || d === void 0
          ? void 0
          : d.call(a, f, r, o);
      }),
      g = dp(),
      S = () => {
        o || (s.onValueChange(r), s.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return h.createElement(
      Iy,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: u,
        onItemTextChange: h.useCallback((f) => {
          p((d) => {
            var v;
            return (
              d ||
              ((v = f == null ? void 0 : f.textContent) !== null && v !== void 0
                ? v
                : ""
              ).trim()
            );
          });
        }, []),
      },
      h.createElement(
        ai.ItemSlot,
        { scope: n, value: r, disabled: o, textValue: m },
        h.createElement(
          Pe.div,
          te(
            {
              role: "option",
              "aria-labelledby": g,
              "data-highlighted": c ? "" : void 0,
              "aria-selected": u && c,
              "data-state": u ? "checked" : "unchecked",
              "aria-disabled": o || void 0,
              "data-disabled": o ? "" : void 0,
              tabIndex: o ? void 0 : -1,
            },
            i,
            {
              ref: w,
              onFocus: Ee(i.onFocus, () => y(!0)),
              onBlur: Ee(i.onBlur, () => y(!1)),
              onPointerUp: Ee(i.onPointerUp, S),
              onPointerMove: Ee(i.onPointerMove, (f) => {
                if (o) {
                  var d;
                  (d = a.onItemLeave) === null || d === void 0 || d.call(a);
                } else f.currentTarget.focus({ preventScroll: !0 });
              }),
              onPointerLeave: Ee(i.onPointerLeave, (f) => {
                if (f.currentTarget === document.activeElement) {
                  var d;
                  (d = a.onItemLeave) === null || d === void 0 || d.call(a);
                }
              }),
              onKeyDown: Ee(i.onKeyDown, (f) => {
                var d;
                (((d = a.searchRef) === null || d === void 0
                  ? void 0
                  : d.current) !== "" &&
                  f.key === " ") ||
                  (my.includes(f.key) && S(),
                  f.key === " " && f.preventDefault());
              }),
            }
          )
        )
      )
    );
  }),
  Xo = "SelectItemText",
  zy = h.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...l } = e,
      i = An(Xo, n),
      s = zn(Xo, n),
      a = zp(Xo, n),
      u = yy(Xo, n),
      [m, p] = h.useState(null),
      c = Le(
        t,
        (f) => p(f),
        a.onItemTextChange,
        (f) => {
          var d;
          return (d = s.itemTextRefCallback) === null || d === void 0
            ? void 0
            : d.call(s, f, a.value, a.disabled);
        }
      ),
      y = m == null ? void 0 : m.textContent,
      w = h.useMemo(
        () =>
          h.createElement(
            "option",
            { key: a.value, value: a.value, disabled: a.disabled },
            y
          ),
        [a.disabled, a.value, y]
      ),
      { onNativeOptionAdd: g, onNativeOptionRemove: S } = u;
    return (
      at(() => (g(w), () => S(w)), [g, S, w]),
      h.createElement(
        h.Fragment,
        null,
        h.createElement(Pe.span, te({ id: a.textId }, l, { ref: c })),
        a.isSelected && i.valueNode && !i.valueNodeHasChildren
          ? $r.createPortal(l.children, i.valueNode)
          : null
      )
    );
  }),
  Dy = "SelectItemIndicator",
  jy = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return zp(Dy, n).isSelected
      ? h.createElement(Pe.span, te({ "aria-hidden": !0 }, r, { ref: t }))
      : null;
  }),
  jc = "SelectScrollUpButton",
  Fy = h.forwardRef((e, t) => {
    const n = zn(jc, e.__scopeSelect),
      r = Za(jc, e.__scopeSelect),
      [o, l] = h.useState(!1),
      i = Le(t, r.onScrollButtonChange);
    return (
      at(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const m = a.scrollTop > 0;
            l(m);
          };
          var s = u;
          const a = n.viewport;
          return (
            u(),
            a.addEventListener("scroll", u),
            () => a.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? h.createElement(
            Dp,
            te({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: a } = n;
                s && a && (s.scrollTop = s.scrollTop - a.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  Fc = "SelectScrollDownButton",
  By = h.forwardRef((e, t) => {
    const n = zn(Fc, e.__scopeSelect),
      r = Za(Fc, e.__scopeSelect),
      [o, l] = h.useState(!1),
      i = Le(t, r.onScrollButtonChange);
    return (
      at(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const m = a.scrollHeight - a.clientHeight,
              p = Math.ceil(a.scrollTop) < m;
            l(p);
          };
          var s = u;
          const a = n.viewport;
          return (
            u(),
            a.addEventListener("scroll", u),
            () => a.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? h.createElement(
            Dp,
            te({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: s, selectedItem: a } = n;
                s && a && (s.scrollTop = s.scrollTop + a.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  Dp = h.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      l = zn("SelectScrollButton", n),
      i = h.useRef(null),
      s = ui(n),
      a = h.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      h.useEffect(() => () => a(), [a]),
      at(() => {
        var u;
        const m = s().find((p) => p.ref.current === document.activeElement);
        m == null ||
          (u = m.ref.current) === null ||
          u === void 0 ||
          u.scrollIntoView({ block: "nearest" });
      }, [s]),
      h.createElement(
        Pe.div,
        te({ "aria-hidden": !0 }, o, {
          ref: t,
          style: { flexShrink: 0, ...o.style },
          onPointerDown: Ee(o.onPointerDown, () => {
            i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerMove: Ee(o.onPointerMove, () => {
            var u;
            (u = l.onItemLeave) === null || u === void 0 || u.call(l),
              i.current === null && (i.current = window.setInterval(r, 50));
          }),
          onPointerLeave: Ee(o.onPointerLeave, () => {
            a();
          }),
        })
      )
    );
  }),
  Vy = h.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return h.createElement(Pe.div, te({ "aria-hidden": !0 }, r, { ref: t }));
  });
function jp(e) {
  return e === "" || e === void 0;
}
const Fp = h.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = h.useRef(null),
    l = Le(t, o),
    i = bg(n);
  return (
    h.useEffect(() => {
      const s = o.current,
        a = window.HTMLSelectElement.prototype,
        m = Object.getOwnPropertyDescriptor(a, "value").set;
      if (i !== n && m) {
        const p = new Event("change", { bubbles: !0 });
        m.call(s, n), s.dispatchEvent(p);
      }
    }, [i, n]),
    h.createElement(
      Pg,
      { asChild: !0 },
      h.createElement("select", te({}, r, { ref: l, defaultValue: n }))
    )
  );
});
Fp.displayName = "BubbleSelect";
function Bp(e) {
  const t = jt(e),
    n = h.useRef(""),
    r = h.useRef(0),
    o = h.useCallback(
      (i) => {
        const s = n.current + i;
        t(s),
          (function a(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
          })(s);
      },
      [t]
    ),
    l = h.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, l];
}
function Vp(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    l = n ? e.indexOf(n) : -1;
  let i = Wy(e, Math.max(l, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const a = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function Wy(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const Hy = wy,
  Wp = Sy,
  Uy = Cy,
  Ky = ky,
  Qy = $y,
  Hp = by,
  Yy = Ty,
  Up = My,
  Kp = Ay,
  Gy = zy,
  Xy = jy,
  Qp = Fy,
  Yp = By,
  Gp = Vy;
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Zy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ja = (e, t) => {
  const n = h.forwardRef(
    (
      {
        color: r = "currentColor",
        size: o = 24,
        strokeWidth: l = 2,
        absoluteStrokeWidth: i,
        className: s = "",
        children: a,
        ...u
      },
      m
    ) =>
      h.createElement(
        "svg",
        {
          ref: m,
          ...Zy,
          width: o,
          height: o,
          stroke: r,
          strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
          className: ["lucide", `lucide-${Jy(e)}`, s].join(" "),
          ...u,
        },
        [
          ...t.map(([p, c]) => h.createElement(p, c)),
          ...(Array.isArray(a) ? a : [a]),
        ]
      )
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qy = Ja("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xp = Ja("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e1 = Ja("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
function Zp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Zp(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function t1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Zp(e)) && (r && (r += " "), (r += t));
  return r;
}
const qa = "-";
function n1(e) {
  const t = o1(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const s = i.split(qa);
    return s[0] === "" && s.length !== 1 && s.shift(), Jp(s, t) || r1(i);
  }
  function l(i, s) {
    const a = n[i] || [];
    return s && r[i] ? [...a, ...r[i]] : a;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: l };
}
function Jp(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Jp(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const l = e.join(qa);
  return (i = t.validators.find(({ validator: s }) => s(l))) == null
    ? void 0
    : i.classGroupId;
}
const Bc = /^\[(.+)\]$/;
function r1(e) {
  if (Bc.test(e)) {
    const t = Bc.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function o1(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    i1(Object.entries(e.classGroups), n).forEach(([l, i]) => {
      Ks(i, r, l, t);
    }),
    r
  );
}
function Ks(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : Vc(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (l1(o)) {
        Ks(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([l, i]) => {
      Ks(i, Vc(t, l), n, r);
    });
  });
}
function Vc(e, t) {
  let n = e;
  return (
    t.split(qa).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function l1(e) {
  return e.isThemeGetter;
}
function i1(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((l) =>
          typeof l == "string"
            ? t + l
            : typeof l == "object"
            ? Object.fromEntries(Object.entries(l).map(([i, s]) => [t + i, s]))
            : l
        );
        return [n, o];
      })
    : e;
}
function s1(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(l, i) {
    n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(l) {
      let i = n.get(l);
      if (i !== void 0) return i;
      if ((i = r.get(l)) !== void 0) return o(l, i), i;
    },
    set(l, i) {
      n.has(l) ? n.set(l, i) : o(l, i);
    },
  };
}
const qp = "!";
function a1(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (i) {
    const s = [];
    let a = 0,
      u = 0,
      m;
    for (let g = 0; g < i.length; g++) {
      let S = i[g];
      if (a === 0) {
        if (S === r && (n || i.slice(g, g + o) === t)) {
          s.push(i.slice(u, g)), (u = g + o);
          continue;
        }
        if (S === "/") {
          m = g;
          continue;
        }
      }
      S === "[" ? a++ : S === "]" && a--;
    }
    const p = s.length === 0 ? i : i.substring(u),
      c = p.startsWith(qp),
      y = c ? p.substring(1) : p,
      w = m && m > u ? m - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: c,
      baseClassName: y,
      maybePostfixModifierPosition: w,
    };
  };
}
function u1(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function c1(e) {
  return { cache: s1(e.cacheSize), splitModifiers: a1(e), ...n1(e) };
}
const d1 = /\s+/;
function f1(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    l = new Set();
  return e
    .trim()
    .split(d1)
    .map((i) => {
      const {
        modifiers: s,
        hasImportantModifier: a,
        baseClassName: u,
        maybePostfixModifierPosition: m,
      } = n(i);
      let p = r(m ? u.substring(0, m) : u),
        c = !!m;
      if (!p) {
        if (!m) return { isTailwindClass: !1, originalClassName: i };
        if (((p = r(u)), !p))
          return { isTailwindClass: !1, originalClassName: i };
        c = !1;
      }
      const y = u1(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: a ? y + qp : y,
        classGroupId: p,
        originalClassName: i,
        hasPostfixModifier: c,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: a, hasPostfixModifier: u } = i,
        m = s + a;
      return l.has(m)
        ? !1
        : (l.add(m), o(a, u).forEach((p) => l.add(s + p)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function p1() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = em(t)) && (r && (r += " "), (r += n));
  return r;
}
function em(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = em(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function m1(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(a) {
    const u = t.reduce((m, p) => p(m), e());
    return (n = c1(u)), (r = n.cache.get), (o = n.cache.set), (l = s), s(a);
  }
  function s(a) {
    const u = r(a);
    if (u) return u;
    const m = f1(a, n);
    return o(a, m), m;
  }
  return function () {
    return l(p1.apply(null, arguments));
  };
}
function se(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const tm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  h1 = /^\d+\/\d+$/,
  v1 = new Set(["px", "full", "screen"]),
  g1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  y1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  w1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  x1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  S1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function _t(e) {
  return $n(e) || v1.has(e) || h1.test(e);
}
function Yt(e) {
  return Tr(e, "length", N1);
}
function $n(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Zo(e) {
  return Tr(e, "number", $n);
}
function jr(e) {
  return !!e && Number.isInteger(Number(e));
}
function E1(e) {
  return e.endsWith("%") && $n(e.slice(0, -1));
}
function U(e) {
  return tm.test(e);
}
function Gt(e) {
  return g1.test(e);
}
const C1 = new Set(["length", "size", "percentage"]);
function k1(e) {
  return Tr(e, C1, nm);
}
function $1(e) {
  return Tr(e, "position", nm);
}
const b1 = new Set(["image", "url"]);
function P1(e) {
  return Tr(e, b1, R1);
}
function _1(e) {
  return Tr(e, "", T1);
}
function Fr() {
  return !0;
}
function Tr(e, t, n) {
  const r = tm.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function N1(e) {
  return y1.test(e) && !w1.test(e);
}
function nm() {
  return !1;
}
function T1(e) {
  return x1.test(e);
}
function R1(e) {
  return S1.test(e);
}
function O1() {
  const e = se("colors"),
    t = se("spacing"),
    n = se("blur"),
    r = se("brightness"),
    o = se("borderColor"),
    l = se("borderRadius"),
    i = se("borderSpacing"),
    s = se("borderWidth"),
    a = se("contrast"),
    u = se("grayscale"),
    m = se("hueRotate"),
    p = se("invert"),
    c = se("gap"),
    y = se("gradientColorStops"),
    w = se("gradientColorStopPositions"),
    g = se("inset"),
    S = se("margin"),
    f = se("opacity"),
    d = se("padding"),
    v = se("saturate"),
    x = se("scale"),
    E = se("sepia"),
    $ = se("skew"),
    k = se("space"),
    C = se("translate"),
    L = () => ["auto", "contain", "none"],
    R = () => ["auto", "hidden", "clip", "visible", "scroll"],
    A = () => ["auto", U, t],
    T = () => [U, t],
    Y = () => ["", _t, Yt],
    W = () => ["auto", $n, U],
    B = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    V = () => ["solid", "dashed", "dotted", "double", "none"],
    F = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    b = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    N = () => ["", "0", U],
    j = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    I = () => [$n, Zo],
    z = () => [$n, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Fr],
      spacing: [_t, Yt],
      blur: ["none", "", Gt, U],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Gt, U],
      borderSpacing: T(),
      borderWidth: Y(),
      contrast: I(),
      grayscale: N(),
      hueRotate: z(),
      invert: N(),
      gap: T(),
      gradientColorStops: [e],
      gradientColorStopPositions: [E1, Yt],
      inset: A(),
      margin: A(),
      opacity: I(),
      padding: T(),
      saturate: I(),
      scale: I(),
      sepia: N(),
      skew: z(),
      space: T(),
      translate: T(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", U] }],
      container: ["container"],
      columns: [{ columns: [Gt] }],
      "break-after": [{ "break-after": j() }],
      "break-before": [{ "break-before": j() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...B(), U] }],
      overflow: [{ overflow: R() }],
      "overflow-x": [{ "overflow-x": R() }],
      "overflow-y": [{ "overflow-y": R() }],
      overscroll: [{ overscroll: L() }],
      "overscroll-x": [{ "overscroll-x": L() }],
      "overscroll-y": [{ "overscroll-y": L() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [g] }],
      "inset-x": [{ "inset-x": [g] }],
      "inset-y": [{ "inset-y": [g] }],
      start: [{ start: [g] }],
      end: [{ end: [g] }],
      top: [{ top: [g] }],
      right: [{ right: [g] }],
      bottom: [{ bottom: [g] }],
      left: [{ left: [g] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", jr, U] }],
      basis: [{ basis: A() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", U] }],
      grow: [{ grow: N() }],
      shrink: [{ shrink: N() }],
      order: [{ order: ["first", "last", "none", jr, U] }],
      "grid-cols": [{ "grid-cols": [Fr] }],
      "col-start-end": [{ col: ["auto", { span: ["full", jr, U] }, U] }],
      "col-start": [{ "col-start": W() }],
      "col-end": [{ "col-end": W() }],
      "grid-rows": [{ "grid-rows": [Fr] }],
      "row-start-end": [{ row: ["auto", { span: [jr, U] }, U] }],
      "row-start": [{ "row-start": W() }],
      "row-end": [{ "row-end": W() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
      gap: [{ gap: [c] }],
      "gap-x": [{ "gap-x": [c] }],
      "gap-y": [{ "gap-y": [c] }],
      "justify-content": [{ justify: ["normal", ...b()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...b(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...b(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [d] }],
      px: [{ px: [d] }],
      py: [{ py: [d] }],
      ps: [{ ps: [d] }],
      pe: [{ pe: [d] }],
      pt: [{ pt: [d] }],
      pr: [{ pr: [d] }],
      pb: [{ pb: [d] }],
      pl: [{ pl: [d] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [k] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [k] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t] }],
      "min-w": [{ "min-w": [U, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            U,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [Gt] },
            Gt,
          ],
        },
      ],
      h: [{ h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [U, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", Gt, Yt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Zo,
          ],
        },
      ],
      "font-family": [{ font: [Fr] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            U,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", $n, Zo] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            _t,
            U,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", U] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [f] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [f] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...V(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", _t, Yt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", _t, U] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: T() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            U,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", U] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [f] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...B(), $1] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", k1] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            P1,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [y] }],
      "gradient-via": [{ via: [y] }],
      "gradient-to": [{ to: [y] }],
      rounded: [{ rounded: [l] }],
      "rounded-s": [{ "rounded-s": [l] }],
      "rounded-e": [{ "rounded-e": [l] }],
      "rounded-t": [{ "rounded-t": [l] }],
      "rounded-r": [{ "rounded-r": [l] }],
      "rounded-b": [{ "rounded-b": [l] }],
      "rounded-l": [{ "rounded-l": [l] }],
      "rounded-ss": [{ "rounded-ss": [l] }],
      "rounded-se": [{ "rounded-se": [l] }],
      "rounded-ee": [{ "rounded-ee": [l] }],
      "rounded-es": [{ "rounded-es": [l] }],
      "rounded-tl": [{ "rounded-tl": [l] }],
      "rounded-tr": [{ "rounded-tr": [l] }],
      "rounded-br": [{ "rounded-br": [l] }],
      "rounded-bl": [{ "rounded-bl": [l] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [f] }],
      "border-style": [{ border: [...V(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [f] }],
      "divide-style": [{ divide: V() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...V()] }],
      "outline-offset": [{ "outline-offset": [_t, U] }],
      "outline-w": [{ outline: [_t, Yt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: Y() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [f] }],
      "ring-offset-w": [{ "ring-offset": [_t, Yt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", Gt, _1] }],
      "shadow-color": [{ shadow: [Fr] }],
      opacity: [{ opacity: [f] }],
      "mix-blend": [{ "mix-blend": [...F(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": F() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [a] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", Gt, U] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [m] }],
      invert: [{ invert: [p] }],
      saturate: [{ saturate: [v] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [a] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [m] }],
      "backdrop-invert": [{ "backdrop-invert": [p] }],
      "backdrop-opacity": [{ "backdrop-opacity": [f] }],
      "backdrop-saturate": [{ "backdrop-saturate": [v] }],
      "backdrop-sepia": [{ "backdrop-sepia": [E] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [i] }],
      "border-spacing-x": [{ "border-spacing-x": [i] }],
      "border-spacing-y": [{ "border-spacing-y": [i] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            U,
          ],
        },
      ],
      duration: [{ duration: z() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
      delay: [{ delay: z() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [x] }],
      "scale-x": [{ "scale-x": [x] }],
      "scale-y": [{ "scale-y": [x] }],
      rotate: [{ rotate: [jr, U] }],
      "translate-x": [{ "translate-x": [C] }],
      "translate-y": [{ "translate-y": [C] }],
      "skew-x": [{ "skew-x": [$] }],
      "skew-y": [{ "skew-y": [$] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            U,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            U,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": T() }],
      "scroll-mx": [{ "scroll-mx": T() }],
      "scroll-my": [{ "scroll-my": T() }],
      "scroll-ms": [{ "scroll-ms": T() }],
      "scroll-me": [{ "scroll-me": T() }],
      "scroll-mt": [{ "scroll-mt": T() }],
      "scroll-mr": [{ "scroll-mr": T() }],
      "scroll-mb": [{ "scroll-mb": T() }],
      "scroll-ml": [{ "scroll-ml": T() }],
      "scroll-p": [{ "scroll-p": T() }],
      "scroll-px": [{ "scroll-px": T() }],
      "scroll-py": [{ "scroll-py": T() }],
      "scroll-ps": [{ "scroll-ps": T() }],
      "scroll-pe": [{ "scroll-pe": T() }],
      "scroll-pt": [{ "scroll-pt": T() }],
      "scroll-pr": [{ "scroll-pr": T() }],
      "scroll-pb": [{ "scroll-pb": T() }],
      "scroll-pl": [{ "scroll-pl": T() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", U] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [_t, Yt, Zo] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const L1 = m1(O1);
function Vt(...e) {
  return L1(t1(e));
}
const M1 = Hy,
  I1 = Uy,
  rm = h.forwardRef(({ className: e, children: t, ...n }, r) =>
    O.jsxs(Wp, {
      ref: r,
      className: Vt(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300",
        e
      ),
      ...n,
      children: [
        t,
        O.jsx(Ky, {
          asChild: !0,
          children: O.jsx(Xp, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
rm.displayName = Wp.displayName;
const om = h.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(Qp, {
    ref: n,
    className: Vt("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: O.jsx(e1, { className: "h-4 w-4" }),
  })
);
om.displayName = Qp.displayName;
const lm = h.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(Yp, {
    ref: n,
    className: Vt("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: O.jsx(Xp, { className: "h-4 w-4" }),
  })
);
lm.displayName = Yp.displayName;
const im = h.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    O.jsx(Qy, {
      children: O.jsxs(Hp, {
        ref: o,
        className: Vt(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          O.jsx(om, {}),
          O.jsx(Yy, {
            className: Vt(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          O.jsx(lm, {}),
        ],
      }),
    })
);
im.displayName = Hp.displayName;
const A1 = h.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(Up, {
    ref: n,
    className: Vt("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
A1.displayName = Up.displayName;
const sm = h.forwardRef(({ className: e, children: t, ...n }, r) =>
  O.jsxs(Kp, {
    ref: r,
    className: Vt(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    ...n,
    children: [
      O.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: O.jsx(Xy, { children: O.jsx(qy, { className: "h-4 w-4" }) }),
      }),
      O.jsx(Gy, { children: t }),
    ],
  })
);
sm.displayName = Kp.displayName;
const z1 = h.forwardRef(({ className: e, ...t }, n) =>
  O.jsx(Gp, {
    ref: n,
    className: Vt("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e),
    ...t,
  })
);
z1.displayName = Gp.displayName;
function am(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = am(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function D1() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = am(e)) && (r && (r += " "), (r += t));
  return r;
}
const Wc = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Hc = D1,
  j1 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Hc(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: l } = t,
      i = Object.keys(o).map((u) => {
        const m = n == null ? void 0 : n[u],
          p = l == null ? void 0 : l[u];
        if (m === null) return null;
        const c = Wc(m) || Wc(p);
        return o[u][c];
      }),
      s =
        n &&
        Object.entries(n).reduce((u, m) => {
          let [p, c] = m;
          return c === void 0 || (u[p] = c), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, m) => {
              let { class: p, className: c, ...y } = m;
              return Object.entries(y).every((w) => {
                let [g, S] = w;
                return Array.isArray(S)
                  ? S.includes({ ...l, ...s }[g])
                  : { ...l, ...s }[g] === S;
              })
                ? [...u, p, c]
                : u;
            }, []);
    return Hc(
      e,
      i,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  F1 = j1(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
    {
      variants: {
        variant: {
          default:
            "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
          destructive:
            "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
          outline:
            "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          secondary:
            "bg-slate-100 text-slate-900  dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
          ghost:
            "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  rr = h.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const i = r ? wr : "button";
      return O.jsx(i, {
        className: Vt(F1({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    }
  );
rr.displayName = "Button";
const B1 = ({ onStart: e }) => {
    const [t, n] = h.useState([]),
      [r, o] = h.useState(!0),
      [l, i] = h.useState(null),
      [s, a] = h.useState(null);
    h.useEffect(() => {
      fetch("./tracks.json")
        .then((p) => {
          if (!p.ok) throw new Error(`HTTP error! status: ${p.status}`);
          return p.json();
        })
        .then((p) => {
          if (p && Array.isArray(p.courses)) n(p.courses);
          else throw new Error("Data is not in the expected format");
        })
        .catch((p) => i(p.message))
        .finally(() => o(!1));
    }, []);
    const u = (p) => {
        a(p);
      },
      m = () => {
        s
          ? (console.log("Starting with Course ID:", s), e(s))
          : console.log("No course selected!");
      };
    return r
      ? O.jsx("div", {})
      : l
      ? O.jsxs("div", { children: ["Error: ", l] })
      : O.jsxs("div", {
          className: "flex h-screen items-center justify-center flex-col",
          children: [
            O.jsx("div", {
              className: "flex justify-center opacity-90 -mt-20",
              children: O.jsx("img", {
                src: "./glide-logo.png",
                className: "w-2/3",
              }),
            }),
            O.jsxs("div", {
              className: "mt-10",
              children: [
                O.jsxs(M1, {
                  onValueChange: u,
                  children: [
                    O.jsx(rm, {
                      className: "w-[300px]",
                      children: O.jsx(I1, { placeholder: "Valitse rata" }),
                    }),
                    O.jsx(im, {
                      children: t.map((p) =>
                        O.jsx(sm, { value: p.id, children: p.name }, p.id)
                      ),
                    }),
                  ],
                }),
                O.jsx(rr, {
                  variant: "secondary",
                  className: "w-full my-4 bg-green-700 text-white",
                  onClick: m,
                  children: "Aloita",
                }),
              ],
            }),
            O.jsx("p", {
              className: "text-xs text-slate-500",
              children: "Version 0.2",
            }),
          ],
        });
  },
  V1 = [
    {
      id: 1,
      name: "Nokia keskuskenttä",
      location: "Nokia",
      holes: {
        1: { par: 3, length: 97 },
        2: { par: 3, length: 116 },
        3: { par: 4, length: 169 },
        4: { par: 3, length: 100 },
        5: { par: 4, length: 170 },
        6: { par: 3, length: 100 },
        7: { par: 3, length: 79 },
        8: { par: 3, length: 99 },
        9: { par: 4, length: 49 },
        10: { par: 3, length: 68 },
        11: { par: 3, length: 67 },
        12: { par: 3, length: 72 },
        13: { par: 3, length: 87 },
        14: { par: 3, length: 93 },
        15: { par: 3, length: 114 },
        16: { par: 3, length: 83 },
        17: { par: 3, length: 96 },
        18: { par: 3, length: 86 },
      },
      total: { par: 56, length: 1717 },
    },
    {
      id: 2,
      name: "Eden Nokia",
      location: "Nokia",
      holes: {
        1: { par: 3, length: 56 },
        2: { par: 3, length: 72 },
        3: { par: 2, length: 56 },
        4: { par: 2, length: 52 },
        5: { par: 3, length: 78 },
        6: { par: 3, length: 44 },
      },
      total: { par: 18, length: 358 },
    },
  ],
  W1 = { courses: V1 };
var H1 = (e) => {
    switch (e) {
      case "success":
        return Q1;
      case "info":
        return G1;
      case "warning":
        return Y1;
      case "error":
        return X1;
      default:
        return null;
    }
  },
  U1 = Array(12).fill(0),
  K1 = ({ visible: e }) =>
    _.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      _.createElement(
        "div",
        { className: "sonner-spinner" },
        U1.map((t, n) =>
          _.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Q1 = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Y1 = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  G1 = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  X1 = _.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    _.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  Z1 = () => {
    let [e, t] = _.useState(document.hidden);
    return (
      _.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Qs = 1,
  J1 = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Qs++,
            l = this.toasts.find((s) => s.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            l
              ? (this.toasts = this.toasts.map((s) =>
                  s.id === o
                    ? (this.publish({ ...s, ...e, id: o, title: n }),
                      { ...s, ...e, id: o, dismissible: i, title: n })
                    : s
                ))
              : this.addToast({ title: n, ...r, dismissible: i, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0;
          return (
            r
              .then(async (l) => {
                if (ew(l) && !l.ok) {
                  o = !1;
                  let i =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    s =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: s,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let i =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    s =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: i,
                    description: s,
                  });
                }
              })
              .catch(async (l) => {
                if (t.error !== void 0) {
                  o = !1;
                  let i =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    s =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: s,
                  });
                }
              })
              .finally(() => {
                var l;
                o && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            n
          );
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Qs++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Ke = new J1(),
  q1 = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Qs++;
    return Ke.addToast({ title: e, ...t, id: n }), n;
  },
  ew = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  tw = q1,
  nw = () => Ke.toasts,
  rw = Object.assign(
    tw,
    {
      success: Ke.success,
      info: Ke.info,
      warning: Ke.warning,
      error: Ke.error,
      custom: Ke.custom,
      message: Ke.message,
      promise: Ke.promise,
      dismiss: Ke.dismiss,
      loading: Ke.loading,
    },
    { getHistory: nw }
  );
function ow(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
ow(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Jo(e) {
  return e.label !== void 0;
}
var lw = 3,
  iw = "32px",
  sw = 4e3,
  aw = 356,
  uw = 14,
  cw = 20,
  dw = 200;
function fw(...e) {
  return e.filter(Boolean).join(" ");
}
var pw = (e) => {
  var t, n, r, o, l, i, s, a, u, m;
  let {
      invert: p,
      toast: c,
      unstyled: y,
      interacting: w,
      setHeights: g,
      visibleToasts: S,
      heights: f,
      index: d,
      toasts: v,
      expanded: x,
      removeToast: E,
      defaultRichColors: $,
      closeButton: k,
      style: C,
      cancelButtonStyle: L,
      actionButtonStyle: R,
      className: A = "",
      descriptionClassName: T = "",
      duration: Y,
      position: W,
      gap: B,
      loadingIcon: V,
      expandByDefault: F,
      classNames: b,
      icons: N,
      closeButtonAriaLabel: j = "Close toast",
      pauseWhenPageIsHidden: I,
      cn: z,
    } = e,
    [G, re] = _.useState(!1),
    [ve, K] = _.useState(!1),
    [D, J] = _.useState(!1),
    [ce, q] = _.useState(!1),
    [ee, Z] = _.useState(0),
    [Me, _e] = _.useState(0),
    tt = _.useRef(null),
    Ue = _.useRef(null),
    wn = d === 0,
    ci = d + 1 <= S,
    je = c.type,
    Ut = c.dismissible !== !1,
    Dn = c.className || "",
    um = c.descriptionClassName || "",
    bo = _.useMemo(
      () => f.findIndex((H) => H.toastId === c.id) || 0,
      [f, c.id]
    ),
    cm = _.useMemo(() => {
      var H;
      return (H = c.closeButton) != null ? H : k;
    }, [c.closeButton, k]),
    eu = _.useMemo(() => c.duration || Y || sw, [c.duration, Y]),
    di = _.useRef(0),
    jn = _.useRef(0),
    tu = _.useRef(0),
    Fn = _.useRef(null),
    [nu, dm] = W.split("-"),
    ru = _.useMemo(
      () => f.reduce((H, ie, oe) => (oe >= bo ? H : H + ie.height), 0),
      [f, bo]
    ),
    ou = Z1(),
    fm = c.invert || p,
    fi = je === "loading";
  (jn.current = _.useMemo(() => bo * B + ru, [bo, ru])),
    _.useEffect(() => {
      re(!0);
    }, []),
    _.useLayoutEffect(() => {
      if (!G) return;
      let H = Ue.current,
        ie = H.style.height;
      H.style.height = "auto";
      let oe = H.getBoundingClientRect().height;
      (H.style.height = ie),
        _e(oe),
        g((gt) =>
          gt.find((yt) => yt.toastId === c.id)
            ? gt.map((yt) => (yt.toastId === c.id ? { ...yt, height: oe } : yt))
            : [{ toastId: c.id, height: oe, position: c.position }, ...gt]
        );
    }, [G, c.title, c.description, g, c.id]);
  let Kt = _.useCallback(() => {
    K(!0),
      Z(jn.current),
      g((H) => H.filter((ie) => ie.toastId !== c.id)),
      setTimeout(() => {
        E(c);
      }, dw);
  }, [c, E, g, jn]);
  _.useEffect(() => {
    if (
      (c.promise && je === "loading") ||
      c.duration === 1 / 0 ||
      c.type === "loading"
    )
      return;
    let H,
      ie = eu;
    return (
      x || w || (I && ou)
        ? (() => {
            if (tu.current < di.current) {
              let oe = new Date().getTime() - di.current;
              ie = ie - oe;
            }
            tu.current = new Date().getTime();
          })()
        : ie !== 1 / 0 &&
          ((di.current = new Date().getTime()),
          (H = setTimeout(() => {
            var oe;
            (oe = c.onAutoClose) == null || oe.call(c, c), Kt();
          }, ie))),
      () => clearTimeout(H)
    );
  }, [x, w, F, c, eu, Kt, c.promise, je, I, ou]),
    _.useEffect(() => {
      let H = Ue.current;
      if (H) {
        let ie = H.getBoundingClientRect().height;
        return (
          _e(ie),
          g((oe) => [
            { toastId: c.id, height: ie, position: c.position },
            ...oe,
          ]),
          () => g((oe) => oe.filter((gt) => gt.toastId !== c.id))
        );
      }
    }, [g, c.id]),
    _.useEffect(() => {
      c.delete && Kt();
    }, [Kt, c.delete]);
  function pm() {
    return N != null && N.loading
      ? _.createElement(
          "div",
          { className: "sonner-loader", "data-visible": je === "loading" },
          N.loading
        )
      : V
      ? _.createElement(
          "div",
          { className: "sonner-loader", "data-visible": je === "loading" },
          V
        )
      : _.createElement(K1, { visible: je === "loading" });
  }
  return _.createElement(
    "li",
    {
      "aria-live": c.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: Ue,
      className: z(
        A,
        Dn,
        b == null ? void 0 : b.toast,
        (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast,
        b == null ? void 0 : b.default,
        b == null ? void 0 : b[je],
        (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[je]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = c.richColors) != null ? r : $,
      "data-styled": !(c.jsx || c.unstyled || y),
      "data-mounted": G,
      "data-promise": !!c.promise,
      "data-removed": ve,
      "data-visible": ci,
      "data-y-position": nu,
      "data-x-position": dm,
      "data-index": d,
      "data-front": wn,
      "data-swiping": D,
      "data-dismissible": Ut,
      "data-type": je,
      "data-invert": fm,
      "data-swipe-out": ce,
      "data-expanded": !!(x || (F && G)),
      style: {
        "--index": d,
        "--toasts-before": d,
        "--z-index": v.length - d,
        "--offset": `${ve ? ee : jn.current}px`,
        "--initial-height": F ? "auto" : `${Me}px`,
        ...C,
        ...c.style,
      },
      onPointerDown: (H) => {
        fi ||
          !Ut ||
          ((tt.current = new Date()),
          Z(jn.current),
          H.target.setPointerCapture(H.pointerId),
          H.target.tagName !== "BUTTON" &&
            (J(!0), (Fn.current = { x: H.clientX, y: H.clientY })));
      },
      onPointerUp: () => {
        var H, ie, oe, gt;
        if (ce || !Ut) return;
        Fn.current = null;
        let yt = Number(
            ((H = Ue.current) == null
              ? void 0
              : H.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          Po =
            new Date().getTime() -
            ((ie = tt.current) == null ? void 0 : ie.getTime()),
          mm = Math.abs(yt) / Po;
        if (Math.abs(yt) >= cw || mm > 0.11) {
          Z(jn.current),
            (oe = c.onDismiss) == null || oe.call(c, c),
            Kt(),
            q(!0);
          return;
        }
        (gt = Ue.current) == null ||
          gt.style.setProperty("--swipe-amount", "0px"),
          J(!1);
      },
      onPointerMove: (H) => {
        var ie;
        if (!Fn.current || !Ut) return;
        let oe = H.clientY - Fn.current.y,
          gt = H.clientX - Fn.current.x,
          yt = (nu === "top" ? Math.min : Math.max)(0, oe),
          Po = H.pointerType === "touch" ? 10 : 2;
        Math.abs(yt) > Po
          ? (ie = Ue.current) == null ||
            ie.style.setProperty("--swipe-amount", `${oe}px`)
          : Math.abs(gt) > Po && (Fn.current = null);
      },
    },
    cm && !c.jsx
      ? _.createElement(
          "button",
          {
            "aria-label": j,
            "data-disabled": fi,
            "data-close-button": !0,
            onClick:
              fi || !Ut
                ? () => {}
                : () => {
                    var H;
                    Kt(), (H = c.onDismiss) == null || H.call(c, c);
                  },
            className: z(
              b == null ? void 0 : b.closeButton,
              (o = c == null ? void 0 : c.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          _.createElement(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "12",
              height: "12",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            },
            _.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            _.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    c.jsx || _.isValidElement(c.title)
      ? c.jsx || c.title
      : _.createElement(
          _.Fragment,
          null,
          je || c.icon || c.promise
            ? _.createElement(
                "div",
                {
                  "data-icon": "",
                  className: z(
                    b == null ? void 0 : b.icon,
                    (l = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : l.icon
                  ),
                },
                c.promise || (c.type === "loading" && !c.icon)
                  ? c.icon || pm()
                  : null,
                c.type !== "loading"
                  ? c.icon || (N == null ? void 0 : N[je]) || H1(je)
                  : null
              )
            : null,
          _.createElement(
            "div",
            {
              "data-content": "",
              className: z(
                b == null ? void 0 : b.content,
                (i = c == null ? void 0 : c.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            _.createElement(
              "div",
              {
                "data-title": "",
                className: z(
                  b == null ? void 0 : b.title,
                  (s = c == null ? void 0 : c.classNames) == null
                    ? void 0
                    : s.title
                ),
              },
              c.title
            ),
            c.description
              ? _.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: z(
                      T,
                      um,
                      b == null ? void 0 : b.description,
                      (a = c == null ? void 0 : c.classNames) == null
                        ? void 0
                        : a.description
                    ),
                  },
                  c.description
                )
              : null
          ),
          _.isValidElement(c.cancel)
            ? c.cancel
            : c.cancel && Jo(c.cancel)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: c.cancelButtonStyle || L,
                  onClick: (H) => {
                    var ie, oe;
                    Jo(c.cancel) &&
                      Ut &&
                      ((oe = (ie = c.cancel).onClick) == null || oe.call(ie, H),
                      Kt());
                  },
                  className: z(
                    b == null ? void 0 : b.cancelButton,
                    (u = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                c.cancel.label
              )
            : null,
          _.isValidElement(c.action)
            ? c.action
            : c.action && Jo(c.action)
            ? _.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: c.actionButtonStyle || R,
                  onClick: (H) => {
                    var ie, oe;
                    Jo(c.action) &&
                      (H.defaultPrevented ||
                        ((oe = (ie = c.action).onClick) == null ||
                          oe.call(ie, H),
                        Kt()));
                  },
                  className: z(
                    b == null ? void 0 : b.actionButton,
                    (m = c == null ? void 0 : c.classNames) == null
                      ? void 0
                      : m.actionButton
                  ),
                },
                c.action.label
              )
            : null
        )
  );
};
function Uc() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var mw = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: l,
      className: i,
      offset: s,
      theme: a = "light",
      richColors: u,
      duration: m,
      style: p,
      visibleToasts: c = lw,
      toastOptions: y,
      dir: w = Uc(),
      gap: g = uw,
      loadingIcon: S,
      icons: f,
      containerAriaLabel: d = "Notifications",
      pauseWhenPageIsHidden: v,
      cn: x = fw,
    } = e,
    [E, $] = _.useState([]),
    k = _.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(E.filter((I) => I.position).map((I) => I.position))
          )
        ),
      [E, n]
    ),
    [C, L] = _.useState([]),
    [R, A] = _.useState(!1),
    [T, Y] = _.useState(!1),
    [W, B] = _.useState(
      a !== "system"
        ? a
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    V = _.useRef(null),
    F = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    b = _.useRef(null),
    N = _.useRef(!1),
    j = _.useCallback(
      (I) => {
        var z;
        ((z = E.find((G) => G.id === I.id)) != null && z.delete) ||
          Ke.dismiss(I.id),
          $((G) => G.filter(({ id: re }) => re !== I.id));
      },
      [E]
    );
  return (
    _.useEffect(
      () =>
        Ke.subscribe((I) => {
          if (I.dismiss) {
            $((z) => z.map((G) => (G.id === I.id ? { ...G, delete: !0 } : G)));
            return;
          }
          setTimeout(() => {
            sp.flushSync(() => {
              $((z) => {
                let G = z.findIndex((re) => re.id === I.id);
                return G !== -1
                  ? [...z.slice(0, G), { ...z[G], ...I }, ...z.slice(G + 1)]
                  : [I, ...z];
              });
            });
          });
        }),
      []
    ),
    _.useEffect(() => {
      if (a !== "system") {
        B(a);
        return;
      }
      a === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? B("dark")
          : B("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: I }) => {
              B(I ? "dark" : "light");
            });
    }, [a]),
    _.useEffect(() => {
      E.length <= 1 && A(!1);
    }, [E]),
    _.useEffect(() => {
      let I = (z) => {
        var G, re;
        r.every((ve) => z[ve] || z.code === ve) &&
          (A(!0), (G = V.current) == null || G.focus()),
          z.code === "Escape" &&
            (document.activeElement === V.current ||
              ((re = V.current) != null &&
                re.contains(document.activeElement))) &&
            A(!1);
      };
      return (
        document.addEventListener("keydown", I),
        () => document.removeEventListener("keydown", I)
      );
    }, [r]),
    _.useEffect(() => {
      if (V.current)
        return () => {
          b.current &&
            (b.current.focus({ preventScroll: !0 }),
            (b.current = null),
            (N.current = !1));
        };
    }, [V.current]),
    E.length
      ? _.createElement(
          "section",
          { "aria-label": `${d} ${F}`, tabIndex: -1 },
          k.map((I, z) => {
            var G;
            let [re, ve] = I.split("-");
            return _.createElement(
              "ol",
              {
                key: I,
                dir: w === "auto" ? Uc() : w,
                tabIndex: -1,
                ref: V,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": W,
                "data-y-position": re,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${
                    ((G = C[0]) == null ? void 0 : G.height) || 0
                  }px`,
                  "--offset": typeof s == "number" ? `${s}px` : s || iw,
                  "--width": `${aw}px`,
                  "--gap": `${g}px`,
                  ...p,
                },
                onBlur: (K) => {
                  N.current &&
                    !K.currentTarget.contains(K.relatedTarget) &&
                    ((N.current = !1),
                    b.current &&
                      (b.current.focus({ preventScroll: !0 }),
                      (b.current = null)));
                },
                onFocus: (K) => {
                  (K.target instanceof HTMLElement &&
                    K.target.dataset.dismissible === "false") ||
                    N.current ||
                    ((N.current = !0), (b.current = K.relatedTarget));
                },
                onMouseEnter: () => A(!0),
                onMouseMove: () => A(!0),
                onMouseLeave: () => {
                  T || A(!1);
                },
                onPointerDown: (K) => {
                  (K.target instanceof HTMLElement &&
                    K.target.dataset.dismissible === "false") ||
                    Y(!0);
                },
                onPointerUp: () => Y(!1),
              },
              E.filter((K) => (!K.position && z === 0) || K.position === I).map(
                (K, D) => {
                  var J, ce;
                  return _.createElement(pw, {
                    key: K.id,
                    icons: f,
                    index: D,
                    toast: K,
                    defaultRichColors: u,
                    duration:
                      (J = y == null ? void 0 : y.duration) != null ? J : m,
                    className: y == null ? void 0 : y.className,
                    descriptionClassName:
                      y == null ? void 0 : y.descriptionClassName,
                    invert: t,
                    visibleToasts: c,
                    closeButton:
                      (ce = y == null ? void 0 : y.closeButton) != null
                        ? ce
                        : l,
                    interacting: T,
                    position: I,
                    style: y == null ? void 0 : y.style,
                    unstyled: y == null ? void 0 : y.unstyled,
                    classNames: y == null ? void 0 : y.classNames,
                    cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                    actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                    removeToast: j,
                    toasts: E.filter((q) => q.position == K.position),
                    heights: C.filter((q) => q.position == K.position),
                    setHeights: L,
                    expandByDefault: o,
                    gap: g,
                    loadingIcon: S,
                    expanded: R,
                    pauseWhenPageIsHidden: v,
                    cn: x,
                  });
                }
              )
            );
          })
        )
      : null
  );
};
const qo = {
    over_par: {
      bogey: "+1",
      double_bogey: "+2",
      triple_bogey: "+3",
      quadruple_bogey: "+4",
    },
    down_par: { birdie: "-1", eagle: "-2", albatross: "-3", condor: "-4" },
  },
  hw = ({ courseId: e, onBack: t }) => {
    const [n, r] = h.useState(null),
      [o, l] = h.useState(!0),
      [i, s] = h.useState(null),
      [a, u] = h.useState(1),
      [m, p] = h.useState(0),
      [c, y] = h.useState(0),
      [w, g] = h.useState([]),
      [S, f] = h.useState(!1);
    h.useEffect(() => {
      (async () => {
        try {
          l(!0);
          const L = W1.courses.find((R) => R.id === e);
          L
            ? (p(0), y(0), u(1), r(L), g([]), f(!1))
            : s(`Course with id ${e} not found.`);
        } catch (C) {
          s(C.message), console.error("Error fetching course data:", C);
        } finally {
          l(!1);
        }
      })();
    }, [e]);
    const d = () => {
        p(m + 1);
      },
      v = () => {
        const k = n.holes[a].par,
          C = m - k;
        let L = "Par";
        C > 0
          ? (L =
              Object.keys(qo.over_par).find(
                (T) => qo.over_par[T] === `+${C}`
              ) || `+${C}`)
          : C < 0 &&
            (L =
              Object.keys(qo.down_par).find((T) => qo.down_par[T] === `${C}`) ||
              `${C}`),
          g([...w, { hole: a, throws: m, result: L }]);
        const R = m,
          A = JSON.parse(localStorage.getItem("roundsData")) || {};
        (A[e] = A[e] || []),
          A[e].push(R),
          localStorage.setItem("roundsData", JSON.stringify(A)),
          p(0),
          y(c + 1),
          rw(`Väylä ${a}: ${m} heittoa (${L})`),
          a < Object.keys(n.holes).length ? u(a + 1) : f(!0);
      },
      x = () => {
        t();
      },
      E = () => {
        localStorage.removeItem("roundsData"), t();
      };
    if (o) return O.jsx("div", {});
    if (i) return O.jsxs("div", { children: ["Error: ", i] });
    if (!n) return O.jsx("div", { children: "No course data available." });
    const $ = a === Object.keys(n.holes).length;
    return O.jsxs("div", {
      className: "m-6",
      children: [
        O.jsx(mw, { position: "top-center" }),
        O.jsxs("div", {
          className: "text-center font-bold text-2xl flex",
          children: [
            O.jsx("p", { className: "", children: n.name }),
            O.jsx(rr, {
              onClick: x,
              className: "ml-auto",
              variant: "ghost",
              children: "Takaisin",
            }),
          ],
        }),
        O.jsx("div", {
          className: "mt-10",
          children: O.jsx("ul", {
            children: O.jsxs("li", {
              children: [
                O.jsxs("p", {
                  className: "font-semibold text-xl",
                  children: ["Väylä ", O.jsx("span", { children: a })],
                }),
                O.jsxs("p", {
                  children: [
                    "Par: ",
                    O.jsx("span", { children: n.holes[a].par }),
                  ],
                }),
                O.jsxs("p", {
                  children: [
                    "Matka: ",
                    O.jsxs("span", { children: [n.holes[a].length, "m"] }),
                  ],
                }),
              ],
            }),
          }),
        }),
        O.jsxs("div", {
          className: "my-5 -mt-20 text-green-700 text-center m-auto w-fit",
          children: [
            O.jsx("p", { className: "throws", children: m }),
            O.jsx("p", {
              className:
                "text-xs -mt-12 text-black border-t-2 border-green-700 p-2",
              children: "Heittoa",
            }),
          ],
        }),
        O.jsx("div", {
          className: "fixed flex w-full bottom-10 mb-5",
          children:
            $ && S
              ? O.jsx(rr, {
                  onClick: E,
                  className:
                    "bg-red-700 mr-10 w-1/3 ml-auto text-white font-semibold",
                  variant: "secondary",
                  children: "Poistu",
                })
              : O.jsxs("div", {
                  className: "flex w-full gap-3",
                  children: [
                    O.jsx(rr, {
                      onClick: d,
                      className: "w-2/4 bg-green-700 text-white font-semibold",
                      variant: "secondary",
                      children: "Heitto",
                    }),
                    O.jsx(rr, {
                      onClick: v,
                      className: "ml-2 w-2/6",
                      variant: "secondary",
                      children: "Koriin",
                    }),
                  ],
                }),
        }),
        O.jsxs("div", {
          className: "",
          children: [
            O.jsx("p", {
              className: "font-bold text-xl",
              children: "Tulokset",
            }),
            O.jsx("ul", {
              children: w.map((k, C) =>
                O.jsx(
                  "li",
                  {
                    children: O.jsxs("p", {
                      className: "text-xs",
                      children: [
                        O.jsxs("span", {
                          className: "font-semibold",
                          children: ["Väylä ", k.hole, ":"],
                        }),
                        " ",
                        k.throws,
                        " heittoa (",
                        k.result,
                        ")",
                      ],
                    }),
                  },
                  C
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  vw = () => {
    const [e, t] = h.useState(null),
      n = (o) => {
        t(o);
      },
      r = () => {
        t(null);
      };
    return O.jsx("div", {
      children: e
        ? O.jsx(hw, { courseId: e, onBack: r })
        : O.jsx(B1, { onStart: n }),
    });
  };
Qi.createRoot(document.getElementById("root")).render(
  O.jsx(_.StrictMode, { children: O.jsx(vw, {}) })
);
