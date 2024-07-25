function V0(e, t) {
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
function cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var uf = { exports: {} },
  mi = {},
  df = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jo = Symbol.for("react.element"),
  U0 = Symbol.for("react.portal"),
  Y0 = Symbol.for("react.fragment"),
  K0 = Symbol.for("react.strict_mode"),
  X0 = Symbol.for("react.profiler"),
  Q0 = Symbol.for("react.provider"),
  G0 = Symbol.for("react.context"),
  Z0 = Symbol.for("react.forward_ref"),
  J0 = Symbol.for("react.suspense"),
  q0 = Symbol.for("react.memo"),
  ev = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function tv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ff = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  pf = Object.assign,
  mf = {};
function Ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mf),
    (this.updater = n || ff);
}
Ir.prototype.isReactComponent = {};
Ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hf() {}
hf.prototype = Ir.prototype;
function Os(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = mf),
    (this.updater = n || ff);
}
var As = (Os.prototype = new hf());
As.constructor = Os;
pf(As, Ir.prototype);
As.isPureReactComponent = !0;
var tu = Array.isArray,
  vf = Object.prototype.hasOwnProperty,
  Ls = { current: null },
  gf = { key: !0, ref: !0, __self: !0, __source: !0 };
function yf(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      vf.call(t, r) && !gf.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: jo,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ls.current,
  };
}
function nv(e, t) {
  return {
    $$typeof: jo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ds(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jo;
}
function rv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Wi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? rv("" + e.key)
    : t.toString(36);
}
function El(e, t, n, r, o) {
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
          case jo:
          case U0:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Wi(i, 0) : r),
      tu(o)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          El(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ds(o) &&
            (o = nv(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var s = r + Wi(l, a);
      i += El(l, t, n, s, o);
    }
  else if (((s = tv(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Wi(l, a++)), (i += El(l, t, n, s, o));
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
function Ko(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    El(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function ov(e) {
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
  Cl = { transition: null },
  lv = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: Cl,
    ReactCurrentOwner: Ls,
  };
X.Children = {
  map: Ko,
  forEach: function (e, t, n) {
    Ko(
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
      Ko(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ko(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ds(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Ir;
X.Fragment = Y0;
X.Profiler = X0;
X.PureComponent = Os;
X.StrictMode = K0;
X.Suspense = J0;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lv;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = pf({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Ls.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      vf.call(t, s) &&
        !gf.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: jo, type: e.type, key: o, ref: l, props: r, _owner: i };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: G0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Q0, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = yf;
X.createFactory = function (e) {
  var t = yf.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: Z0, render: e };
};
X.isValidElement = Ds;
X.lazy = function (e) {
  return { $$typeof: ev, _payload: { _status: -1, _result: e }, _init: ov };
};
X.memo = function (e, t) {
  return { $$typeof: q0, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Cl.transition;
  Cl.transition = {};
  try {
    e();
  } finally {
    Cl.transition = t;
  }
};
X.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
X.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
X.useContext = function (e) {
  return ze.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
X.useId = function () {
  return ze.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return ze.current.useRef(e);
};
X.useState = function (e) {
  return ze.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return ze.current.useTransition();
};
X.version = "18.2.0";
df.exports = X;
var c = df.exports;
const $ = cf(c),
  wf = V0({ __proto__: null, default: $ }, [c]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var iv = c,
  av = Symbol.for("react.element"),
  sv = Symbol.for("react.fragment"),
  cv = Object.prototype.hasOwnProperty,
  uv = iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dv = { key: !0, ref: !0, __self: !0, __source: !0 };
function xf(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) cv.call(t, r) && !dv.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: av,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: uv.current,
  };
}
mi.Fragment = sv;
mi.jsx = xf;
mi.jsxs = xf;
uf.exports = mi;
var C = uf.exports,
  $a = {},
  Sf = { exports: {} },
  tt = {},
  Ef = { exports: {} },
  Cf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, A) {
    var B = R.length;
    R.push(A);
    e: for (; 0 < B; ) {
      var M = (B - 1) >>> 1,
        I = R[M];
      if (0 < o(I, A)) (R[M] = A), (R[B] = I), (B = M);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var A = R[0],
      B = R.pop();
    if (B !== A) {
      R[0] = B;
      e: for (var M = 0, I = R.length, Q = I >>> 1; M < Q; ) {
        var re = 2 * (M + 1) - 1,
          ve = R[re],
          Y = re + 1,
          z = R[Y];
        if (0 > o(ve, B))
          Y < I && 0 > o(z, ve)
            ? ((R[M] = z), (R[Y] = B), (M = Y))
            : ((R[M] = ve), (R[re] = B), (M = re));
        else if (Y < I && 0 > o(z, B)) (R[M] = z), (R[Y] = B), (M = Y);
        else break e;
      }
    }
    return A;
  }
  function o(R, A) {
    var B = R.sortIndex - A.sortIndex;
    return B !== 0 ? B : R.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    p = null,
    d = 3,
    g = !1,
    w = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= R)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function S(R) {
    if (((v = !1), y(R), !w))
      if (n(s) !== null) (w = !0), H(E);
      else {
        var A = n(u);
        A !== null && j(S, A.startTime - R);
      }
  }
  function E(R, A) {
    (w = !1), v && ((v = !1), h(k), (k = -1)), (g = !0);
    var B = d;
    try {
      for (
        y(A), p = n(s);
        p !== null && (!(p.expirationTime > A) || (R && !L()));

      ) {
        var M = p.callback;
        if (typeof M == "function") {
          (p.callback = null), (d = p.priorityLevel);
          var I = M(p.expirationTime <= A);
          (A = e.unstable_now()),
            typeof I == "function" ? (p.callback = I) : p === n(s) && r(s),
            y(A);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var Q = !0;
      else {
        var re = n(u);
        re !== null && j(S, re.startTime - A), (Q = !1);
      }
      return Q;
    } finally {
      (p = null), (d = B), (g = !1);
    }
  }
  var P = !1,
    b = null,
    k = -1,
    _ = 5,
    T = -1;
  function L() {
    return !(e.unstable_now() - T < _);
  }
  function O() {
    if (b !== null) {
      var R = e.unstable_now();
      T = R;
      var A = !0;
      try {
        A = b(!0, R);
      } finally {
        A ? K() : ((P = !1), (b = null));
      }
    } else P = !1;
  }
  var K;
  if (typeof m == "function")
    K = function () {
      m(O);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      F = W.port2;
    (W.port1.onmessage = O),
      (K = function () {
        F.postMessage(null);
      });
  } else
    K = function () {
      x(O, 0);
    };
  function H(R) {
    (b = R), P || ((P = !0), K());
  }
  function j(R, A) {
    k = x(function () {
      R(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), H(E));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var B = d;
      d = A;
      try {
        return R();
      } finally {
        d = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, A) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = d;
      d = R;
      try {
        return A();
      } finally {
        d = B;
      }
    }),
    (e.unstable_scheduleCallback = function (R, A, B) {
      var M = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? M + B : M))
          : (B = M),
        R)
      ) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return (
        (I = B + I),
        (R = {
          id: f++,
          callback: A,
          priorityLevel: R,
          startTime: B,
          expirationTime: I,
          sortIndex: -1,
        }),
        B > M
          ? ((R.sortIndex = B),
            t(u, R),
            n(s) === null &&
              R === n(u) &&
              (v ? (h(k), (k = -1)) : (v = !0), j(S, B - M)))
          : ((R.sortIndex = I), t(s, R), w || g || ((w = !0), H(E))),
        R
      );
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (R) {
      var A = d;
      return function () {
        var B = d;
        d = A;
        try {
          return R.apply(this, arguments);
        } finally {
          d = B;
        }
      };
    });
})(Cf);
Ef.exports = Cf;
var fv = Ef.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bf = c,
  et = fv;
function N(e) {
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
var kf = new Set(),
  wo = {};
function Kn(e, t) {
  Pr(e, t), Pr(e + "Capture", t);
}
function Pr(e, t) {
  for (wo[e] = t, e = 0; e < t.length; e++) kf.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ra = Object.prototype.hasOwnProperty,
  pv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  ou = {};
function mv(e) {
  return Ra.call(ou, e)
    ? !0
    : Ra.call(ru, e)
    ? !1
    : pv.test(e)
    ? (ou[e] = !0)
    : ((ru[e] = !0), !1);
}
function hv(e, t, n, r) {
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
function vv(e, t, n, r) {
  if (t === null || typeof t > "u" || hv(e, t, n, r)) return !0;
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
function Fe(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Pe[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Pe[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Pe[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Pe[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Pe[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Pe[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Pe[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Pe[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ms = /[\-:]([a-z])/g;
function Is(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, Is);
    Pe[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ms, Is);
    Pe[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ms, Is);
  Pe[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Pe.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Pe[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function js(e, t, n, r) {
  var o = Pe.hasOwnProperty(t) ? Pe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (vv(t, n, o, r) && (n = null),
    r || o === null
      ? mv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Yt = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xo = Symbol.for("react.element"),
  ir = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  zs = Symbol.for("react.strict_mode"),
  Na = Symbol.for("react.profiler"),
  Pf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  Fs = Symbol.for("react.forward_ref"),
  Ta = Symbol.for("react.suspense"),
  _a = Symbol.for("react.suspense_list"),
  Bs = Symbol.for("react.memo"),
  nn = Symbol.for("react.lazy"),
  Rf = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function Kr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var me = Object.assign,
  Hi;
function ro(e) {
  if (Hi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Hi = (t && t[1]) || "";
    }
  return (
    `
` +
    Hi +
    e
  );
}
var Vi = !1;
function Ui(e, t) {
  if (!e || Vi) return "";
  Vi = !0;
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
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Vi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ro(e) : "";
}
function gv(e) {
  switch (e.tag) {
    case 5:
      return ro(e.type);
    case 16:
      return ro("Lazy");
    case 13:
      return ro("Suspense");
    case 19:
      return ro("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ui(e.type, !1)), e;
    case 11:
      return (e = Ui(e.type.render, !1)), e;
    case 1:
      return (e = Ui(e.type, !0)), e;
    default:
      return "";
  }
}
function Oa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case ir:
      return "Portal";
    case Na:
      return "Profiler";
    case zs:
      return "StrictMode";
    case Ta:
      return "Suspense";
    case _a:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $f:
        return (e.displayName || "Context") + ".Consumer";
      case Pf:
        return (e._context.displayName || "Context") + ".Provider";
      case Fs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Bs:
        return (
          (t = e.displayName || null), t !== null ? t : Oa(e.type) || "Memo"
        );
      case nn:
        (t = e._payload), (e = e._init);
        try {
          return Oa(e(t));
        } catch {}
    }
  return null;
}
function yv(e) {
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
      return Oa(t);
    case 8:
      return t === zs ? "StrictMode" : "Mode";
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
function wn(e) {
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
function Nf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function wv(e) {
  var t = Nf(e) ? "checked" : "value",
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
function Qo(e) {
  e._valueTracker || (e._valueTracker = wv(e));
}
function Tf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Nf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Dl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Aa(e, t) {
  var n = t.checked;
  return me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _f(e, t) {
  (t = t.checked), t != null && js(e, "checked", t, !1);
}
function La(e, t) {
  _f(e, t);
  var n = wn(t.value),
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
    ? Da(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Da(e, t.type, wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function au(e, t, n) {
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
function Da(e, t, n) {
  (t !== "number" || Dl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var oo = Array.isArray;
function yr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ma(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (oo(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wn(n) };
}
function Of(e, t) {
  var n = wn(t.value),
    r = wn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function cu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Af(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Af(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Go,
  Lf = (function (e) {
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
        Go = Go || document.createElement("div"),
          Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Go.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xo(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ao = {
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
  xv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ao).forEach(function (e) {
  xv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ao[t] = ao[e]);
  });
});
function Df(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ao.hasOwnProperty(e) && ao[e])
    ? ("" + t).trim()
    : t + "px";
}
function Mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Df(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Sv = me(
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
function ja(e, t) {
  if (t) {
    if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function za(e, t) {
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
var Fa = null;
function Ws(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ba = null,
  wr = null,
  xr = null;
function uu(e) {
  if ((e = Bo(e))) {
    if (typeof Ba != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = wi(t)), Ba(e.stateNode, e.type, t));
  }
}
function If(e) {
  wr ? (xr ? xr.push(e) : (xr = [e])) : (wr = e);
}
function jf() {
  if (wr) {
    var e = wr,
      t = xr;
    if (((xr = wr = null), uu(e), t)) for (e = 0; e < t.length; e++) uu(t[e]);
  }
}
function zf(e, t) {
  return e(t);
}
function Ff() {}
var Yi = !1;
function Bf(e, t, n) {
  if (Yi) return e(t, n);
  Yi = !0;
  try {
    return zf(e, t, n);
  } finally {
    (Yi = !1), (wr !== null || xr !== null) && (Ff(), jf());
  }
}
function So(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wi(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Wa = !1;
if (zt)
  try {
    var Xr = {};
    Object.defineProperty(Xr, "passive", {
      get: function () {
        Wa = !0;
      },
    }),
      window.addEventListener("test", Xr, Xr),
      window.removeEventListener("test", Xr, Xr);
  } catch {
    Wa = !1;
  }
function Ev(e, t, n, r, o, l, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var so = !1,
  Ml = null,
  Il = !1,
  Ha = null,
  Cv = {
    onError: function (e) {
      (so = !0), (Ml = e);
    },
  };
function bv(e, t, n, r, o, l, i, a, s) {
  (so = !1), (Ml = null), Ev.apply(Cv, arguments);
}
function kv(e, t, n, r, o, l, i, a, s) {
  if ((bv.apply(this, arguments), so)) {
    if (so) {
      var u = Ml;
      (so = !1), (Ml = null);
    } else throw Error(N(198));
    Il || ((Il = !0), (Ha = u));
  }
}
function Xn(e) {
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
function Wf(e) {
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
function du(e) {
  if (Xn(e) !== e) throw Error(N(188));
}
function Pv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xn(e)), t === null)) throw Error(N(188));
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
        if (l === n) return du(o), e;
        if (l === r) return du(o), t;
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Hf(e) {
  return (e = Pv(e)), e !== null ? Vf(e) : null;
}
function Vf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uf = et.unstable_scheduleCallback,
  fu = et.unstable_cancelCallback,
  $v = et.unstable_shouldYield,
  Rv = et.unstable_requestPaint,
  ge = et.unstable_now,
  Nv = et.unstable_getCurrentPriorityLevel,
  Hs = et.unstable_ImmediatePriority,
  Yf = et.unstable_UserBlockingPriority,
  jl = et.unstable_NormalPriority,
  Tv = et.unstable_LowPriority,
  Kf = et.unstable_IdlePriority,
  hi = null,
  $t = null;
function _v(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot(hi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : Lv,
  Ov = Math.log,
  Av = Math.LN2;
function Lv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ov(e) / Av) | 0)) | 0;
}
var Zo = 64,
  Jo = 4194304;
function lo(e) {
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
function zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = lo(a)) : ((l &= i), l !== 0 && (r = lo(l)));
  } else (i = n & ~o), i !== 0 ? (r = lo(i)) : l !== 0 && (r = lo(l));
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
      (n = 31 - vt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Dv(e, t) {
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
function Mv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - vt(l),
      a = 1 << i,
      s = o[i];
    s === -1
      ? (!(a & n) || a & r) && (o[i] = Dv(a, t))
      : s <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function Va(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Xf() {
  var e = Zo;
  return (Zo <<= 1), !(Zo & 4194240) && (Zo = 64), e;
}
function Ki(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function zo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n);
}
function Iv(e, t) {
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
    var o = 31 - vt(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Vs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ne = 0;
function Qf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Gf,
  Us,
  Zf,
  Jf,
  qf,
  Ua = !1,
  qo = [],
  un = null,
  dn = null,
  fn = null,
  Eo = new Map(),
  Co = new Map(),
  ln = [],
  jv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      un = null;
      break;
    case "dragenter":
    case "dragleave":
      dn = null;
      break;
    case "mouseover":
    case "mouseout":
      fn = null;
      break;
    case "pointerover":
    case "pointerout":
      Eo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Co.delete(t.pointerId);
  }
}
function Qr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Bo(t)), t !== null && Us(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function zv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (un = Qr(un, e, t, n, r, o)), !0;
    case "dragenter":
      return (dn = Qr(dn, e, t, n, r, o)), !0;
    case "mouseover":
      return (fn = Qr(fn, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Eo.set(l, Qr(Eo.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Co.set(l, Qr(Co.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function ep(e) {
  var t = On(e.target);
  if (t !== null) {
    var n = Xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wf(n)), t !== null)) {
          (e.blockedOn = t),
            qf(e.priority, function () {
              Zf(n);
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
function bl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ya(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fa = r), n.target.dispatchEvent(r), (Fa = null);
    } else return (t = Bo(n)), t !== null && Us(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  bl(e) && n.delete(t);
}
function Fv() {
  (Ua = !1),
    un !== null && bl(un) && (un = null),
    dn !== null && bl(dn) && (dn = null),
    fn !== null && bl(fn) && (fn = null),
    Eo.forEach(mu),
    Co.forEach(mu);
}
function Gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ua ||
      ((Ua = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Fv)));
}
function bo(e) {
  function t(o) {
    return Gr(o, e);
  }
  if (0 < qo.length) {
    Gr(qo[0], e);
    for (var n = 1; n < qo.length; n++) {
      var r = qo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && Gr(un, e),
      dn !== null && Gr(dn, e),
      fn !== null && Gr(fn, e),
      Eo.forEach(t),
      Co.forEach(t),
      n = 0;
    n < ln.length;
    n++
  )
    (r = ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
    ep(n), n.blockedOn === null && ln.shift();
}
var Sr = Yt.ReactCurrentBatchConfig,
  Fl = !0;
function Bv(e, t, n, r) {
  var o = ne,
    l = Sr.transition;
  Sr.transition = null;
  try {
    (ne = 1), Ys(e, t, n, r);
  } finally {
    (ne = o), (Sr.transition = l);
  }
}
function Wv(e, t, n, r) {
  var o = ne,
    l = Sr.transition;
  Sr.transition = null;
  try {
    (ne = 4), Ys(e, t, n, r);
  } finally {
    (ne = o), (Sr.transition = l);
  }
}
function Ys(e, t, n, r) {
  if (Fl) {
    var o = Ya(e, t, n, r);
    if (o === null) ra(e, t, r, Bl, n), pu(e, r);
    else if (zv(o, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < jv.indexOf(e))) {
      for (; o !== null; ) {
        var l = Bo(o);
        if (
          (l !== null && Gf(l),
          (l = Ya(e, t, n, r)),
          l === null && ra(e, t, r, Bl, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else ra(e, t, r, null, n);
  }
}
var Bl = null;
function Ya(e, t, n, r) {
  if (((Bl = null), (e = Ws(r)), (e = On(e)), e !== null))
    if (((t = Xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bl = e), null;
}
function tp(e) {
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
      switch (Nv()) {
        case Hs:
          return 1;
        case Yf:
          return 4;
        case jl:
        case Tv:
          return 16;
        case Kf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var sn = null,
  Ks = null,
  kl = null;
function np() {
  if (kl) return kl;
  var e,
    t = Ks,
    n = t.length,
    r,
    o = "value" in sn ? sn.value : sn.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (kl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Pl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function el() {
  return !0;
}
function hu() {
  return !1;
}
function nt(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? el
        : hu),
      (this.isPropagationStopped = hu),
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
          (this.isDefaultPrevented = el));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = el));
      },
      persist: function () {},
      isPersistent: el,
    }),
    t
  );
}
var jr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Xs = nt(jr),
  Fo = me({}, jr, { view: 0, detail: 0 }),
  Hv = nt(Fo),
  Xi,
  Qi,
  Zr,
  vi = me({}, Fo, {
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
    getModifierState: Qs,
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
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((Xi = e.screenX - Zr.screenX), (Qi = e.screenY - Zr.screenY))
              : (Qi = Xi = 0),
            (Zr = e)),
          Xi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qi;
    },
  }),
  vu = nt(vi),
  Vv = me({}, vi, { dataTransfer: 0 }),
  Uv = nt(Vv),
  Yv = me({}, Fo, { relatedTarget: 0 }),
  Gi = nt(Yv),
  Kv = me({}, jr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xv = nt(Kv),
  Qv = me({}, jr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gv = nt(Qv),
  Zv = me({}, jr, { data: 0 }),
  gu = nt(Zv),
  Jv = {
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
  qv = {
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
  eg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function tg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = eg[e]) ? !!t[e] : !1;
}
function Qs() {
  return tg;
}
var ng = me({}, Fo, {
    key: function (e) {
      if (e.key) {
        var t = Jv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Pl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qv[e.keyCode] || "Unidentified"
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
    getModifierState: Qs,
    charCode: function (e) {
      return e.type === "keypress" ? Pl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Pl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  rg = nt(ng),
  og = me({}, vi, {
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
  yu = nt(og),
  lg = me({}, Fo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qs,
  }),
  ig = nt(lg),
  ag = me({}, jr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sg = nt(ag),
  cg = me({}, vi, {
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
  ug = nt(cg),
  dg = [9, 13, 27, 32],
  Gs = zt && "CompositionEvent" in window,
  co = null;
zt && "documentMode" in document && (co = document.documentMode);
var fg = zt && "TextEvent" in window && !co,
  rp = zt && (!Gs || (co && 8 < co && 11 >= co)),
  wu = " ",
  xu = !1;
function op(e, t) {
  switch (e) {
    case "keyup":
      return dg.indexOf(t.keyCode) !== -1;
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
function lp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var sr = !1;
function pg(e, t) {
  switch (e) {
    case "compositionend":
      return lp(t);
    case "keypress":
      return t.which !== 32 ? null : ((xu = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && xu ? null : e;
    default:
      return null;
  }
}
function mg(e, t) {
  if (sr)
    return e === "compositionend" || (!Gs && op(e, t))
      ? ((e = np()), (kl = Ks = sn = null), (sr = !1), e)
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
      return rp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hg = {
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
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hg[e.type] : t === "textarea";
}
function ip(e, t, n, r) {
  If(r),
    (t = Wl(t, "onChange")),
    0 < t.length &&
      ((n = new Xs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var uo = null,
  ko = null;
function vg(e) {
  gp(e, 0);
}
function gi(e) {
  var t = dr(e);
  if (Tf(t)) return e;
}
function gg(e, t) {
  if (e === "change") return t;
}
var ap = !1;
if (zt) {
  var Zi;
  if (zt) {
    var Ji = "oninput" in document;
    if (!Ji) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"),
        (Ji = typeof Eu.oninput == "function");
    }
    Zi = Ji;
  } else Zi = !1;
  ap = Zi && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  uo && (uo.detachEvent("onpropertychange", sp), (ko = uo = null));
}
function sp(e) {
  if (e.propertyName === "value" && gi(ko)) {
    var t = [];
    ip(t, ko, e, Ws(e)), Bf(vg, t);
  }
}
function yg(e, t, n) {
  e === "focusin"
    ? (Cu(), (uo = t), (ko = n), uo.attachEvent("onpropertychange", sp))
    : e === "focusout" && Cu();
}
function wg(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gi(ko);
}
function xg(e, t) {
  if (e === "click") return gi(t);
}
function Sg(e, t) {
  if (e === "input" || e === "change") return gi(t);
}
function Eg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : Eg;
function Po(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ra.call(t, o) || !yt(e[o], t[o])) return !1;
  }
  return !0;
}
function bu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ku(e, t) {
  var n = bu(e);
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
    n = bu(n);
  }
}
function cp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function up() {
  for (var e = window, t = Dl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Dl(e.document);
  }
  return t;
}
function Zs(e) {
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
function Cg(e) {
  var t = up(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Zs(n)) {
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
          (o = ku(n, l));
        var i = ku(n, r);
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
var bg = zt && "documentMode" in document && 11 >= document.documentMode,
  cr = null,
  Ka = null,
  fo = null,
  Xa = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Xa ||
    cr == null ||
    cr !== Dl(r) ||
    ((r = cr),
    "selectionStart" in r && Zs(r)
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
    (fo && Po(fo, r)) ||
      ((fo = r),
      (r = Wl(Ka, "onSelect")),
      0 < r.length &&
        ((t = new Xs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cr))));
}
function tl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ur = {
    animationend: tl("Animation", "AnimationEnd"),
    animationiteration: tl("Animation", "AnimationIteration"),
    animationstart: tl("Animation", "AnimationStart"),
    transitionend: tl("Transition", "TransitionEnd"),
  },
  qi = {},
  dp = {};
zt &&
  ((dp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete ur.animationend.animation,
    delete ur.animationiteration.animation,
    delete ur.animationstart.animation),
  "TransitionEvent" in window || delete ur.transitionend.transition);
function yi(e) {
  if (qi[e]) return qi[e];
  if (!ur[e]) return e;
  var t = ur[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dp) return (qi[e] = t[n]);
  return e;
}
var fp = yi("animationend"),
  pp = yi("animationiteration"),
  mp = yi("animationstart"),
  hp = yi("transitionend"),
  vp = new Map(),
  $u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Cn(e, t) {
  vp.set(e, t), Kn(t, [e]);
}
for (var ea = 0; ea < $u.length; ea++) {
  var ta = $u[ea],
    kg = ta.toLowerCase(),
    Pg = ta[0].toUpperCase() + ta.slice(1);
  Cn(kg, "on" + Pg);
}
Cn(fp, "onAnimationEnd");
Cn(pp, "onAnimationIteration");
Cn(mp, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(hp, "onTransitionEnd");
Pr("onMouseEnter", ["mouseout", "mouseover"]);
Pr("onMouseLeave", ["mouseout", "mouseover"]);
Pr("onPointerEnter", ["pointerout", "pointerover"]);
Pr("onPointerLeave", ["pointerout", "pointerover"]);
Kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var io =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $g = new Set("cancel close invalid load scroll toggle".split(" ").concat(io));
function Ru(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kv(r, t, void 0, e), (e.currentTarget = null);
}
function gp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== l && o.isPropagationStopped())) break e;
          Ru(o, a, u), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          Ru(o, a, u), (l = s);
        }
    }
  }
  if (Il) throw ((e = Ha), (Il = !1), (Ha = null), e);
}
function se(e, t) {
  var n = t[qa];
  n === void 0 && (n = t[qa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (yp(t, e, 2, !1), n.add(r));
}
function na(e, t, n) {
  var r = 0;
  t && (r |= 4), yp(n, e, r, t);
}
var nl = "_reactListening" + Math.random().toString(36).slice(2);
function $o(e) {
  if (!e[nl]) {
    (e[nl] = !0),
      kf.forEach(function (n) {
        n !== "selectionchange" && ($g.has(n) || na(n, !1, e), na(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[nl] || ((t[nl] = !0), na("selectionchange", !1, t));
  }
}
function yp(e, t, n, r) {
  switch (tp(t)) {
    case 1:
      var o = Bv;
      break;
    case 4:
      o = Wv;
      break;
    default:
      o = Ys;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Wa ||
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
function ra(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = On(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Bf(function () {
    var u = l,
      f = Ws(n),
      p = [];
    e: {
      var d = vp.get(e);
      if (d !== void 0) {
        var g = Xs,
          w = e;
        switch (e) {
          case "keypress":
            if (Pl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = rg;
            break;
          case "focusin":
            (w = "focus"), (g = Gi);
            break;
          case "focusout":
            (w = "blur"), (g = Gi);
            break;
          case "beforeblur":
          case "afterblur":
            g = Gi;
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
            g = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Uv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ig;
            break;
          case fp:
          case pp:
          case mp:
            g = Xv;
            break;
          case hp:
            g = sg;
            break;
          case "scroll":
            g = Hv;
            break;
          case "wheel":
            g = ug;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Gv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = yu;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          h = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var S = y.stateNode;
          if (
            (y.tag === 5 &&
              S !== null &&
              ((y = S),
              h !== null && ((S = So(m, h)), S != null && v.push(Ro(m, S, y)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < v.length &&
          ((d = new g(d, w, null, n, f)), p.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Fa &&
            (w = n.relatedTarget || n.fromElement) &&
            (On(w) || w[Ft]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = u),
              (w = w ? On(w) : null),
              w !== null &&
                ((x = Xn(w)), w !== x || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = u)),
          g !== w)
        ) {
          if (
            ((v = vu),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = yu),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (m = "pointer")),
            (x = g == null ? d : dr(g)),
            (y = w == null ? d : dr(w)),
            (d = new v(S, m + "leave", g, n, f)),
            (d.target = x),
            (d.relatedTarget = y),
            (S = null),
            On(f) === u &&
              ((v = new v(h, m + "enter", w, n, f)),
              (v.target = y),
              (v.relatedTarget = x),
              (S = v)),
            (x = S),
            g && w)
          )
            t: {
              for (v = g, h = w, m = 0, y = v; y; y = er(y)) m++;
              for (y = 0, S = h; S; S = er(S)) y++;
              for (; 0 < m - y; ) (v = er(v)), m--;
              for (; 0 < y - m; ) (h = er(h)), y--;
              for (; m--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                (v = er(v)), (h = er(h));
              }
              v = null;
            }
          else v = null;
          g !== null && Nu(p, d, g, v, !1),
            w !== null && x !== null && Nu(p, x, w, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? dr(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var E = gg;
        else if (Su(d))
          if (ap) E = Sg;
          else {
            E = wg;
            var P = yg;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = xg);
        if (E && (E = E(e, u))) {
          ip(p, E, n, f);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            Da(d, "number", d.value);
      }
      switch (((P = u ? dr(u) : window), e)) {
        case "focusin":
          (Su(P) || P.contentEditable === "true") &&
            ((cr = P), (Ka = u), (fo = null));
          break;
        case "focusout":
          fo = Ka = cr = null;
          break;
        case "mousedown":
          Xa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Xa = !1), Pu(p, n, f);
          break;
        case "selectionchange":
          if (bg) break;
        case "keydown":
        case "keyup":
          Pu(p, n, f);
      }
      var b;
      if (Gs)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        sr
          ? op(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (rp &&
          n.locale !== "ko" &&
          (sr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && sr && (b = np())
            : ((sn = f),
              (Ks = "value" in sn ? sn.value : sn.textContent),
              (sr = !0))),
        (P = Wl(u, k)),
        0 < P.length &&
          ((k = new gu(k, e, null, n, f)),
          p.push({ event: k, listeners: P }),
          b ? (k.data = b) : ((b = lp(n)), b !== null && (k.data = b)))),
        (b = fg ? pg(e, n) : mg(e, n)) &&
          ((u = Wl(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new gu("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: u }),
            (f.data = b)));
    }
    gp(p, t);
  });
}
function Ro(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = So(e, n)),
      l != null && r.unshift(Ro(e, l, o)),
      (l = So(e, t)),
      l != null && r.push(Ro(e, l, o))),
      (e = e.return);
  }
  return r;
}
function er(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Nu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = So(n, l)), s != null && i.unshift(Ro(n, s, a)))
        : o || ((s = So(n, l)), s != null && i.push(Ro(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Rg = /\r\n?/g,
  Ng = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Rg,
      `
`
    )
    .replace(Ng, "");
}
function rl(e, t, n) {
  if (((t = Tu(t)), Tu(e) !== t && n)) throw Error(N(425));
}
function Hl() {}
var Qa = null,
  Ga = null;
function Za(e, t) {
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
var Ja = typeof setTimeout == "function" ? setTimeout : void 0,
  Tg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _u = typeof Promise == "function" ? Promise : void 0,
  _g =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _u < "u"
      ? function (e) {
          return _u.resolve(null).then(e).catch(Og);
        }
      : Ja;
function Og(e) {
  setTimeout(function () {
    throw e;
  });
}
function oa(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), bo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  bo(t);
}
function pn(e) {
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
function Ou(e) {
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
var zr = Math.random().toString(36).slice(2),
  kt = "__reactFiber$" + zr,
  No = "__reactProps$" + zr,
  Ft = "__reactContainer$" + zr,
  qa = "__reactEvents$" + zr,
  Ag = "__reactListeners$" + zr,
  Lg = "__reactHandles$" + zr;
function On(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[kt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[kt])) return n;
          e = Ou(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bo(e) {
  return (
    (e = e[kt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function wi(e) {
  return e[No] || null;
}
var es = [],
  fr = -1;
function bn(e) {
  return { current: e };
}
function ce(e) {
  0 > fr || ((e.current = es[fr]), (es[fr] = null), fr--);
}
function le(e, t) {
  fr++, (es[fr] = e.current), (e.current = t);
}
var xn = {},
  Ae = bn(xn),
  Ve = bn(!1),
  zn = xn;
function $r(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xn;
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
function Ue(e) {
  return (e = e.childContextTypes), e != null;
}
function Vl() {
  ce(Ve), ce(Ae);
}
function Au(e, t, n) {
  if (Ae.current !== xn) throw Error(N(168));
  le(Ae, t), le(Ve, n);
}
function wp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, yv(e) || "Unknown", o));
  return me({}, n, r);
}
function Ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xn),
    (zn = Ae.current),
    le(Ae, e),
    le(Ve, Ve.current),
    !0
  );
}
function Lu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = wp(e, t, zn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ce(Ve),
      ce(Ae),
      le(Ae, e))
    : ce(Ve),
    le(Ve, n);
}
var Dt = null,
  xi = !1,
  la = !1;
function xp(e) {
  Dt === null ? (Dt = [e]) : Dt.push(e);
}
function Dg(e) {
  (xi = !0), xp(e);
}
function kn() {
  if (!la && Dt !== null) {
    la = !0;
    var e = 0,
      t = ne;
    try {
      var n = Dt;
      for (ne = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Dt = null), (xi = !1);
    } catch (o) {
      throw (Dt !== null && (Dt = Dt.slice(e + 1)), Uf(Hs, kn), o);
    } finally {
      (ne = t), (la = !1);
    }
  }
  return null;
}
var pr = [],
  mr = 0,
  Yl = null,
  Kl = 0,
  ot = [],
  lt = 0,
  Fn = null,
  Mt = 1,
  It = "";
function Nn(e, t) {
  (pr[mr++] = Kl), (pr[mr++] = Yl), (Yl = e), (Kl = t);
}
function Sp(e, t, n) {
  (ot[lt++] = Mt), (ot[lt++] = It), (ot[lt++] = Fn), (Fn = e);
  var r = Mt;
  e = It;
  var o = 32 - vt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - vt(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Mt = (1 << (32 - vt(t) + o)) | (n << o) | r),
      (It = l + e);
  } else (Mt = (1 << l) | (n << o) | r), (It = e);
}
function Js(e) {
  e.return !== null && (Nn(e, 1), Sp(e, 1, 0));
}
function qs(e) {
  for (; e === Yl; )
    (Yl = pr[--mr]), (pr[mr] = null), (Kl = pr[--mr]), (pr[mr] = null);
  for (; e === Fn; )
    (Fn = ot[--lt]),
      (ot[lt] = null),
      (It = ot[--lt]),
      (ot[lt] = null),
      (Mt = ot[--lt]),
      (ot[lt] = null);
}
var Je = null,
  Ze = null,
  de = !1,
  ht = null;
function Ep(e, t) {
  var n = it(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Du(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Je = e), (Ze = pn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Je = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Fn !== null ? { id: Mt, overflow: It } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = it(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Je = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ts(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ns(e) {
  if (de) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!Du(e, t)) {
        if (ts(e)) throw Error(N(418));
        t = pn(n.nextSibling);
        var r = Je;
        t && Du(e, t)
          ? Ep(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), (Je = e));
      }
    } else {
      if (ts(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), (Je = e);
    }
  }
}
function Mu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Je = e;
}
function ol(e) {
  if (e !== Je) return !1;
  if (!de) return Mu(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Za(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (ts(e)) throw (Cp(), Error(N(418)));
    for (; t; ) Ep(e, t), (t = pn(t.nextSibling));
  }
  if ((Mu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ze = pn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = Je ? pn(e.stateNode.nextSibling) : null;
  return !0;
}
function Cp() {
  for (var e = Ze; e; ) e = pn(e.nextSibling);
}
function Rr() {
  (Ze = Je = null), (de = !1);
}
function ec(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var Mg = Yt.ReactCurrentBatchConfig;
function pt(e, t) {
  if (e && e.defaultProps) {
    (t = me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Xl = bn(null),
  Ql = null,
  hr = null,
  tc = null;
function nc() {
  tc = hr = Ql = null;
}
function rc(e) {
  var t = Xl.current;
  ce(Xl), (e._currentValue = t);
}
function rs(e, t, n) {
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
function Er(e, t) {
  (Ql = e),
    (tc = hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (He = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (tc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hr === null)) {
      if (Ql === null) throw Error(N(308));
      (hr = e), (Ql.dependencies = { lanes: 0, firstContext: e });
    } else hr = hr.next = e;
  return t;
}
var An = null;
function oc(e) {
  An === null ? (An = [e]) : An.push(e);
}
function bp(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), oc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
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
var rn = !1;
function lc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kp(e, t) {
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
function jt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), oc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function $l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
function Iu(e, t) {
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
function Gl(e, t, n, r) {
  var o = e.updateQueue;
  rn = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (l = u) : (i.next = u), (i = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var p = o.baseState;
    (i = 0), (f = u = s = null), (a = l);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((w = v.payload), typeof w == "function")) {
                p = w.call(g, p, d);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = v.payload),
                (d = typeof w == "function" ? w.call(g, p, d) : w),
                d == null)
              )
                break e;
              p = me({}, p, d);
              break e;
            case 2:
              rn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = g), (s = p)) : (f = f.next = g),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = p),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Wn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Pp = new bf.Component().refs;
function os(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Si = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = vn(e),
      l = jt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = mn(e, l, o)),
      t !== null && (gt(t, e, o, r), $l(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = vn(e),
      l = jt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = mn(e, l, o)),
      t !== null && (gt(t, e, o, r), $l(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = vn(e),
      o = jt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = mn(e, o, r)),
      t !== null && (gt(t, e, r, n), $l(t, e, r));
  },
};
function zu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Po(n, r) || !Po(o, l)
      : !0
  );
}
function $p(e, t, n) {
  var r = !1,
    o = xn,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = st(l))
      : ((o = Ue(t) ? zn : Ae.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? $r(e, o) : xn)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Si),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Fu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Si.enqueueReplaceState(t, t.state, null);
}
function ls(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Pp), lc(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = st(l))
    : ((l = Ue(t) ? zn : Ae.current), (o.context = $r(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (os(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Si.enqueueReplaceState(o, o.state, null),
      Gl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            a === Pp && (a = o.refs = {}),
              i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bu(e) {
  var t = e._init;
  return t(e._payload);
}
function Rp(e) {
  function t(h, m) {
    if (e) {
      var y = h.deletions;
      y === null ? ((h.deletions = [m]), (h.flags |= 16)) : y.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function o(h, m) {
    return (h = gn(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function l(h, m, y) {
    return (
      (h.index = y),
      e
        ? ((y = h.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((h.flags |= 2), m) : y)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, y, S) {
    return m === null || m.tag !== 6
      ? ((m = fa(y, h.mode, S)), (m.return = h), m)
      : ((m = o(m, y)), (m.return = h), m);
  }
  function s(h, m, y, S) {
    var E = y.type;
    return E === ar
      ? f(h, m, y.props.children, S, y.key)
      : m !== null &&
        (m.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === nn &&
            Bu(E) === m.type))
      ? ((S = o(m, y.props)), (S.ref = Jr(h, m, y)), (S.return = h), S)
      : ((S = Al(y.type, y.key, y.props, null, h.mode, S)),
        (S.ref = Jr(h, m, y)),
        (S.return = h),
        S);
  }
  function u(h, m, y, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = pa(y, h.mode, S)), (m.return = h), m)
      : ((m = o(m, y.children || [])), (m.return = h), m);
  }
  function f(h, m, y, S, E) {
    return m === null || m.tag !== 7
      ? ((m = In(y, h.mode, S, E)), (m.return = h), m)
      : ((m = o(m, y)), (m.return = h), m);
  }
  function p(h, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = fa("" + m, h.mode, y)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Xo:
          return (
            (y = Al(m.type, m.key, m.props, null, h.mode, y)),
            (y.ref = Jr(h, null, m)),
            (y.return = h),
            y
          );
        case ir:
          return (m = pa(m, h.mode, y)), (m.return = h), m;
        case nn:
          var S = m._init;
          return p(h, S(m._payload), y);
      }
      if (oo(m) || Kr(m))
        return (m = In(m, h.mode, y, null)), (m.return = h), m;
      ll(h, m);
    }
    return null;
  }
  function d(h, m, y, S) {
    var E = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return E !== null ? null : a(h, m, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Xo:
          return y.key === E ? s(h, m, y, S) : null;
        case ir:
          return y.key === E ? u(h, m, y, S) : null;
        case nn:
          return (E = y._init), d(h, m, E(y._payload), S);
      }
      if (oo(y) || Kr(y)) return E !== null ? null : f(h, m, y, S, null);
      ll(h, y);
    }
    return null;
  }
  function g(h, m, y, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(y) || null), a(m, h, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Xo:
          return (h = h.get(S.key === null ? y : S.key) || null), s(m, h, S, E);
        case ir:
          return (h = h.get(S.key === null ? y : S.key) || null), u(m, h, S, E);
        case nn:
          var P = S._init;
          return g(h, m, y, P(S._payload), E);
      }
      if (oo(S) || Kr(S)) return (h = h.get(y) || null), f(m, h, S, E, null);
      ll(m, S);
    }
    return null;
  }
  function w(h, m, y, S) {
    for (
      var E = null, P = null, b = m, k = (m = 0), _ = null;
      b !== null && k < y.length;
      k++
    ) {
      b.index > k ? ((_ = b), (b = null)) : (_ = b.sibling);
      var T = d(h, b, y[k], S);
      if (T === null) {
        b === null && (b = _);
        break;
      }
      e && b && T.alternate === null && t(h, b),
        (m = l(T, m, k)),
        P === null ? (E = T) : (P.sibling = T),
        (P = T),
        (b = _);
    }
    if (k === y.length) return n(h, b), de && Nn(h, k), E;
    if (b === null) {
      for (; k < y.length; k++)
        (b = p(h, y[k], S)),
          b !== null &&
            ((m = l(b, m, k)), P === null ? (E = b) : (P.sibling = b), (P = b));
      return de && Nn(h, k), E;
    }
    for (b = r(h, b); k < y.length; k++)
      (_ = g(b, h, k, y[k], S)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? k : _.key),
          (m = l(_, m, k)),
          P === null ? (E = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        b.forEach(function (L) {
          return t(h, L);
        }),
      de && Nn(h, k),
      E
    );
  }
  function v(h, m, y, S) {
    var E = Kr(y);
    if (typeof E != "function") throw Error(N(150));
    if (((y = E.call(y)), y == null)) throw Error(N(151));
    for (
      var P = (E = null), b = m, k = (m = 0), _ = null, T = y.next();
      b !== null && !T.done;
      k++, T = y.next()
    ) {
      b.index > k ? ((_ = b), (b = null)) : (_ = b.sibling);
      var L = d(h, b, T.value, S);
      if (L === null) {
        b === null && (b = _);
        break;
      }
      e && b && L.alternate === null && t(h, b),
        (m = l(L, m, k)),
        P === null ? (E = L) : (P.sibling = L),
        (P = L),
        (b = _);
    }
    if (T.done) return n(h, b), de && Nn(h, k), E;
    if (b === null) {
      for (; !T.done; k++, T = y.next())
        (T = p(h, T.value, S)),
          T !== null &&
            ((m = l(T, m, k)), P === null ? (E = T) : (P.sibling = T), (P = T));
      return de && Nn(h, k), E;
    }
    for (b = r(h, b); !T.done; k++, T = y.next())
      (T = g(b, h, k, T.value, S)),
        T !== null &&
          (e && T.alternate !== null && b.delete(T.key === null ? k : T.key),
          (m = l(T, m, k)),
          P === null ? (E = T) : (P.sibling = T),
          (P = T));
    return (
      e &&
        b.forEach(function (O) {
          return t(h, O);
        }),
      de && Nn(h, k),
      E
    );
  }
  function x(h, m, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ar &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Xo:
          e: {
            for (var E = y.key, P = m; P !== null; ) {
              if (P.key === E) {
                if (((E = y.type), E === ar)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (m = o(P, y.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === nn &&
                    Bu(E) === P.type)
                ) {
                  n(h, P.sibling),
                    (m = o(P, y.props)),
                    (m.ref = Jr(h, P, y)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            y.type === ar
              ? ((m = In(y.props.children, h.mode, S, y.key)),
                (m.return = h),
                (h = m))
              : ((S = Al(y.type, y.key, y.props, null, h.mode, S)),
                (S.ref = Jr(h, m, y)),
                (S.return = h),
                (h = S));
          }
          return i(h);
        case ir:
          e: {
            for (P = y.key; m !== null; ) {
              if (m.key === P)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  n(h, m.sibling),
                    (m = o(m, y.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                } else {
                  n(h, m);
                  break;
                }
              else t(h, m);
              m = m.sibling;
            }
            (m = pa(y, h.mode, S)), (m.return = h), (h = m);
          }
          return i(h);
        case nn:
          return (P = y._init), x(h, m, P(y._payload), S);
      }
      if (oo(y)) return w(h, m, y, S);
      if (Kr(y)) return v(h, m, y, S);
      ll(h, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = o(m, y)), (m.return = h), (h = m))
          : (n(h, m), (m = fa(y, h.mode, S)), (m.return = h), (h = m)),
        i(h))
      : n(h, m);
  }
  return x;
}
var Nr = Rp(!0),
  Np = Rp(!1),
  Wo = {},
  Rt = bn(Wo),
  To = bn(Wo),
  _o = bn(Wo);
function Ln(e) {
  if (e === Wo) throw Error(N(174));
  return e;
}
function ic(e, t) {
  switch ((le(_o, t), le(To, e), le(Rt, Wo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ia(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ia(t, e));
  }
  ce(Rt), le(Rt, t);
}
function Tr() {
  ce(Rt), ce(To), ce(_o);
}
function Tp(e) {
  Ln(_o.current);
  var t = Ln(Rt.current),
    n = Ia(t, e.type);
  t !== n && (le(To, e), le(Rt, n));
}
function ac(e) {
  To.current === e && (ce(Rt), ce(To));
}
var fe = bn(0);
function Zl(e) {
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
var ia = [];
function sc() {
  for (var e = 0; e < ia.length; e++)
    ia[e]._workInProgressVersionPrimary = null;
  ia.length = 0;
}
var Rl = Yt.ReactCurrentDispatcher,
  aa = Yt.ReactCurrentBatchConfig,
  Bn = 0,
  pe = null,
  we = null,
  Se = null,
  Jl = !1,
  po = !1,
  Oo = 0,
  Ig = 0;
function Ne() {
  throw Error(N(321));
}
function cc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function uc(e, t, n, r, o, l) {
  if (
    ((Bn = l),
    (pe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Rl.current = e === null || e.memoizedState === null ? Bg : Wg),
    (e = n(r, o)),
    po)
  ) {
    l = 0;
    do {
      if (((po = !1), (Oo = 0), 25 <= l)) throw Error(N(301));
      (l += 1),
        (Se = we = null),
        (t.updateQueue = null),
        (Rl.current = Hg),
        (e = n(r, o));
    } while (po);
  }
  if (
    ((Rl.current = ql),
    (t = we !== null && we.next !== null),
    (Bn = 0),
    (Se = we = pe = null),
    (Jl = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function dc() {
  var e = Oo !== 0;
  return (Oo = 0), e;
}
function bt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (pe.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function ct() {
  if (we === null) {
    var e = pe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = we.next;
  var t = Se === null ? pe.memoizedState : Se.next;
  if (t !== null) (Se = t), (we = e);
  else {
    if (e === null) throw Error(N(310));
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
function Ao(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function sa(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(N(311));
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
    var a = (i = null),
      s = null,
      u = l;
    do {
      var f = u.lane;
      if ((Bn & f) === f)
        s !== null &&
          (s = s.next =
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
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = p), (i = r)) : (s = s.next = p),
          (pe.lanes |= f),
          (Wn |= f);
      }
      u = u.next;
    } while (u !== null && u !== l);
    s === null ? (i = r) : (s.next = a),
      yt(r, t.memoizedState) || (He = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (pe.lanes |= l), (Wn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ca(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    yt(l, t.memoizedState) || (He = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function _p() {}
function Op(e, t) {
  var n = pe,
    r = ct(),
    o = t(),
    l = !yt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (He = !0)),
    (r = r.queue),
    fc(Dp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Lo(9, Lp.bind(null, n, r, o, t), void 0, null),
      Ce === null)
    )
      throw Error(N(349));
    Bn & 30 || Ap(n, t, o);
  }
  return o;
}
function Ap(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = pe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (pe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Mp(t) && Ip(e);
}
function Dp(e, t, n) {
  return n(function () {
    Mp(t) && Ip(e);
  });
}
function Mp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Ip(e) {
  var t = Bt(e, 1);
  t !== null && gt(t, e, 1, -1);
}
function Wu(e) {
  var t = bt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ao,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Fg.bind(null, pe, e)),
    [t.memoizedState, e]
  );
}
function Lo(e, t, n, r) {
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
function jp() {
  return ct().memoizedState;
}
function Nl(e, t, n, r) {
  var o = bt();
  (pe.flags |= e),
    (o.memoizedState = Lo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ei(e, t, n, r) {
  var o = ct();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (we !== null) {
    var i = we.memoizedState;
    if (((l = i.destroy), r !== null && cc(r, i.deps))) {
      o.memoizedState = Lo(t, n, l, r);
      return;
    }
  }
  (pe.flags |= e), (o.memoizedState = Lo(1 | t, n, l, r));
}
function Hu(e, t) {
  return Nl(8390656, 8, e, t);
}
function fc(e, t) {
  return Ei(2048, 8, e, t);
}
function zp(e, t) {
  return Ei(4, 2, e, t);
}
function Fp(e, t) {
  return Ei(4, 4, e, t);
}
function Bp(e, t) {
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
function Wp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ei(4, 4, Bp.bind(null, t, e), n)
  );
}
function pc() {}
function Hp(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Vp(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && cc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Up(e, t, n) {
  return Bn & 21
    ? (yt(n, t) || ((n = Xf()), (pe.lanes |= n), (Wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
}
function jg(e, t) {
  var n = ne;
  (ne = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = aa.transition;
  aa.transition = {};
  try {
    e(!1), t();
  } finally {
    (ne = n), (aa.transition = r);
  }
}
function Yp() {
  return ct().memoizedState;
}
function zg(e, t, n) {
  var r = vn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Kp(e))
  )
    Xp(t, n);
  else if (((n = bp(e, t, n, r)), n !== null)) {
    var o = je();
    gt(n, e, r, o), Qp(n, t, r);
  }
}
function Fg(e, t, n) {
  var r = vn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Kp(e)) Xp(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), yt(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), oc(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = bp(e, t, o, r)),
      n !== null && ((o = je()), gt(n, e, r, o), Qp(n, t, r));
  }
}
function Kp(e) {
  var t = e.alternate;
  return e === pe || (t !== null && t === pe);
}
function Xp(e, t) {
  po = Jl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Qp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Vs(e, n);
  }
}
var ql = {
    readContext: st,
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
  Bg = {
    readContext: st,
    useCallback: function (e, t) {
      return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nl(4194308, 4, Bp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = bt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = bt();
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
        (e = e.dispatch = zg.bind(null, pe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = bt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wu,
    useDebugValue: pc,
    useDeferredValue: function (e) {
      return (bt().memoizedState = e);
    },
    useTransition: function () {
      var e = Wu(!1),
        t = e[0];
      return (e = jg.bind(null, e[1])), (bt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = pe,
        o = bt();
      if (de) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ce === null)) throw Error(N(349));
        Bn & 30 || Ap(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Hu(Dp.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Lo(9, Lp.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = bt(),
        t = Ce.identifierPrefix;
      if (de) {
        var n = It,
          r = Mt;
        (n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Oo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ig++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Wg = {
    readContext: st,
    useCallback: Hp,
    useContext: st,
    useEffect: fc,
    useImperativeHandle: Wp,
    useInsertionEffect: zp,
    useLayoutEffect: Fp,
    useMemo: Vp,
    useReducer: sa,
    useRef: jp,
    useState: function () {
      return sa(Ao);
    },
    useDebugValue: pc,
    useDeferredValue: function (e) {
      var t = ct();
      return Up(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = sa(Ao)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: _p,
    useSyncExternalStore: Op,
    useId: Yp,
    unstable_isNewReconciler: !1,
  },
  Hg = {
    readContext: st,
    useCallback: Hp,
    useContext: st,
    useEffect: fc,
    useImperativeHandle: Wp,
    useInsertionEffect: zp,
    useLayoutEffect: Fp,
    useMemo: Vp,
    useReducer: ca,
    useRef: jp,
    useState: function () {
      return ca(Ao);
    },
    useDebugValue: pc,
    useDeferredValue: function (e) {
      var t = ct();
      return we === null ? (t.memoizedState = e) : Up(t, we.memoizedState, e);
    },
    useTransition: function () {
      var e = ca(Ao)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: _p,
    useSyncExternalStore: Op,
    useId: Yp,
    unstable_isNewReconciler: !1,
  };
function _r(e, t) {
  try {
    var n = "",
      r = t;
    do (n += gv(r)), (r = r.return);
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
function ua(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function is(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Vg = typeof WeakMap == "function" ? WeakMap : Map;
function Gp(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ti || ((ti = !0), (vs = r)), is(e, t);
    }),
    n
  );
}
function Zp(e, t, n) {
  (n = jt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        is(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        is(e, t),
          typeof r != "function" &&
            (hn === null ? (hn = new Set([this])) : hn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Vu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = oy.bind(null, e, t, n)), t.then(e, e));
}
function Uu(e) {
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
function Yu(e, t, n, r, o) {
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
              : ((t = jt(-1, 1)), (t.tag = 2), mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ug = Yt.ReactCurrentOwner,
  He = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? Np(t, null, n, r) : Nr(t, e.child, n, r);
}
function Ku(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Er(t, o),
    (r = uc(e, t, n, r, l, o)),
    (n = dc()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Wt(e, t, o))
      : (de && n && Js(t), (t.flags |= 1), Ie(e, t, r, o), t.child)
  );
}
function Xu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Sc(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Jp(e, t, l, r, o))
      : ((e = Al(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Po), n(i, r) && e.ref === t.ref)
    )
      return Wt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = gn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Jp(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Po(l, r) && e.ref === t.ref)
      if (((He = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (He = !0);
      else return (t.lanes = e.lanes), Wt(e, t, o);
  }
  return as(e, t, n, r, o);
}
function qp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        le(gr, Qe),
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
          le(gr, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        le(gr, Qe),
        (Qe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      le(gr, Qe),
      (Qe |= r);
  return Ie(e, t, o, n), t.child;
}
function em(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function as(e, t, n, r, o) {
  var l = Ue(n) ? zn : Ae.current;
  return (
    (l = $r(t, l)),
    Er(t, o),
    (n = uc(e, t, n, r, l, o)),
    (r = dc()),
    e !== null && !He
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Wt(e, t, o))
      : (de && r && Js(t), (t.flags |= 1), Ie(e, t, n, o), t.child)
  );
}
function Qu(e, t, n, r, o) {
  if (Ue(n)) {
    var l = !0;
    Ul(t);
  } else l = !1;
  if ((Er(t, o), t.stateNode === null))
    Tl(e, t), $p(t, n, r), ls(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = st(u))
      : ((u = Ue(n) ? zn : Ae.current), (u = $r(t, u)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Fu(t, i, r, u)),
      (rn = !1);
    var d = t.memoizedState;
    (i.state = d),
      Gl(t, r, i, o),
      (s = t.memoizedState),
      a !== r || d !== s || Ve.current || rn
        ? (typeof f == "function" && (os(t, n, f, r), (s = t.memoizedState)),
          (a = rn || zu(t, n, a, r, d, s, u))
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
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      kp(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pt(t.type, a)),
      (i.props = u),
      (p = t.pendingProps),
      (d = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = st(s))
        : ((s = Ue(n) ? zn : Ae.current), (s = $r(t, s)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || d !== s) && Fu(t, i, r, s)),
      (rn = !1),
      (d = t.memoizedState),
      (i.state = d),
      Gl(t, r, i, o);
    var w = t.memoizedState;
    a !== p || d !== w || Ve.current || rn
      ? (typeof g == "function" && (os(t, n, g, r), (w = t.memoizedState)),
        (u = rn || zu(t, n, u, r, d, w, s) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ss(e, t, n, r, l, o);
}
function ss(e, t, n, r, o, l) {
  em(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Lu(t, n, !1), Wt(e, t, l);
  (r = t.stateNode), (Ug.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Nr(t, e.child, null, l)), (t.child = Nr(t, null, a, l)))
      : Ie(e, t, a, l),
    (t.memoizedState = r.state),
    o && Lu(t, n, !0),
    t.child
  );
}
function tm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Au(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Au(e, t.context, !1),
    ic(e, t.containerInfo);
}
function Gu(e, t, n, r, o) {
  return Rr(), ec(o), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var cs = { dehydrated: null, treeContext: null, retryLane: 0 };
function us(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nm(e, t, n) {
  var r = t.pendingProps,
    o = fe.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    le(fe, o & 1),
    e === null)
  )
    return (
      ns(t),
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
                : (l = ki(i, r, 0, null)),
              (e = In(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = us(n)),
              (t.memoizedState = cs),
              e)
            : mc(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Yg(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = gn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = gn(a, l)) : ((l = In(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? us(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = cs),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = gn(l, { mode: "visible", children: r.children })),
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
function mc(e, t) {
  return (
    (t = ki({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function il(e, t, n, r) {
  return (
    r !== null && ec(r),
    Nr(t, e.child, null, n),
    (e = mc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Yg(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ua(Error(N(422)))), il(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = ki({ mode: "visible", children: r.children }, o, 0, null)),
        (l = In(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Nr(t, e.child, null, i),
        (t.child.memoizedState = us(i)),
        (t.memoizedState = cs),
        l);
  if (!(t.mode & 1)) return il(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(N(419))), (r = ua(l, r, void 0)), il(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), He || a)) {
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
          ((l.retryLane = o), Bt(e, o), gt(r, e, o, -1));
    }
    return xc(), (r = ua(Error(N(421)))), il(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ly.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ze = pn(o.nextSibling)),
      (Je = t),
      (de = !0),
      (ht = null),
      e !== null &&
        ((ot[lt++] = Mt),
        (ot[lt++] = It),
        (ot[lt++] = Fn),
        (Mt = e.id),
        (It = e.overflow),
        (Fn = t)),
      (t = mc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), rs(e.return, t, n);
}
function da(e, t, n, r, o) {
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
function rm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ie(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
        else if (e.tag === 19) Zu(e, n, t);
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
            e !== null && Zl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          da(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Zl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        da(t, !0, n, null, l);
        break;
      case "together":
        da(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kg(e, t, n) {
  switch (t.tag) {
    case 3:
      tm(t), Rr();
      break;
    case 5:
      Tp(t);
      break;
    case 1:
      Ue(t.type) && Ul(t);
      break;
    case 4:
      ic(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      le(Xl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (le(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? nm(e, t, n)
          : (le(fe, fe.current & 1),
            (e = Wt(e, t, n)),
            e !== null ? e.sibling : null);
      le(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rm(e, t, n);
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
      return (t.lanes = 0), qp(e, t, n);
  }
  return Wt(e, t, n);
}
var om, ds, lm, im;
om = function (e, t) {
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
ds = function () {};
lm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ln(Rt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Aa(e, o)), (r = Aa(e, r)), (l = []);
        break;
      case "select":
        (o = me({}, o, { value: void 0 })),
          (r = me({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Ma(e, o)), (r = Ma(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Hl);
    }
    ja(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (wo.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (l = l || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (wo.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && se("scroll", e),
                  l || a === s || (l = []))
                : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
im = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qr(e, t) {
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
function Xg(e, t, n) {
  var r = t.pendingProps;
  switch ((qs(t), t.tag)) {
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
      return Ue(t.type) && Vl(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Tr(),
        ce(Ve),
        ce(Ae),
        sc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ol(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (ws(ht), (ht = null)))),
        ds(e, t),
        Te(t),
        null
      );
    case 5:
      ac(t);
      var o = Ln(_o.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Te(t), null;
        }
        if (((e = Ln(Rt.current)), ol(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[kt] = t), (r[No] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < io.length; o++) se(io[o], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              iu(r, l), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              su(r, l), se("invalid", r);
          }
          ja(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      rl(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      rl(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : wo.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Qo(r), au(r, l, !0);
              break;
            case "textarea":
              Qo(r), cu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Hl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Af(n)),
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
            (e[kt] = t),
            (e[No] = r),
            om(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = za(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < io.length; o++) se(io[o], e);
                o = r;
                break;
              case "source":
                se("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (o = r);
                break;
              case "details":
                se("toggle", e), (o = r);
                break;
              case "input":
                iu(e, r), (o = Aa(e, r)), se("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = me({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                su(e, r), (o = Ma(e, r)), se("invalid", e);
                break;
              default:
                o = r;
            }
            ja(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var s = a[l];
                l === "style"
                  ? Mf(e, s)
                  : l === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Lf(e, s))
                  : l === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && xo(e, s)
                    : typeof s == "number" && xo(e, "" + s)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (wo.hasOwnProperty(l)
                      ? s != null && l === "onScroll" && se("scroll", e)
                      : s != null && js(e, l, s, i));
              }
            switch (n) {
              case "input":
                Qo(e), au(e, r, !1);
                break;
              case "textarea":
                Qo(e), cu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? yr(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      yr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Hl);
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
      if (e && t.stateNode != null) im(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Ln(_o.current)), Ln(Rt.current), ol(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[kt] = t),
            (l = r.nodeValue !== n) && ((e = Je), e !== null))
          )
            switch (e.tag) {
              case 3:
                rl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  rl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[kt] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (ce(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && Ze !== null && t.mode & 1 && !(t.flags & 128))
          Cp(), Rr(), (t.flags |= 98560), (l = !1);
        else if (((l = ol(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(N(317));
            l[kt] = t;
          } else
            Rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (l = !1);
        } else ht !== null && (ws(ht), (ht = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? xe === 0 && (xe = 3) : xc())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        Tr(), ds(e, t), e === null && $o(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return rc(t.type._context), Te(t), null;
    case 17:
      return Ue(t.type) && Vl(), Te(t), null;
    case 19:
      if ((ce(fe), (l = t.memoizedState), l === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) qr(l, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Zl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    qr(l, !1),
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
            ge() > Or &&
            ((t.flags |= 128), (r = !0), qr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Zl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !de)
            )
              return Te(t), null;
          } else
            2 * ge() - l.renderingStartTime > Or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qr(l, !1), (t.lanes = 4194304));
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
        wc(),
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
  throw Error(N(156, t.tag));
}
function Qg(e, t) {
  switch ((qs(t), t.tag)) {
    case 1:
      return (
        Ue(t.type) && Vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Tr(),
        ce(Ve),
        ce(Ae),
        sc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ac(t), null;
    case 13:
      if (
        (ce(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ce(fe), null;
    case 4:
      return Tr(), null;
    case 10:
      return rc(t.type._context), null;
    case 22:
    case 23:
      return wc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var al = !1,
  _e = !1,
  Gg = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function vr(e, t) {
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
function fs(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Ju = !1;
function Zg(e, t) {
  if (((Qa = Fl), (e = up()), Zs(e))) {
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
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            p = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              p !== n || (o !== 0 && p.nodeType !== 3) || (a = i + o),
                p !== l || (r !== 0 && p.nodeType !== 3) || (s = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (g = p.firstChild) !== null;

            )
              (d = p), (p = g);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++u === o && (a = i),
                d === l && ++f === r && (s = i),
                (g = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ga = { focusedElem: e, selectionRange: n }, Fl = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (D = e);
    else
      for (; D !== null; ) {
        t = D;
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
                  var v = w.memoizedProps,
                    x = w.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : pt(t.type, v),
                      x
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          he(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (D = e);
          break;
        }
        D = t.return;
      }
  return (w = Ju), (Ju = !1), w;
}
function mo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && fs(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ci(e, t) {
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
function ps(e) {
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
function am(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), am(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[kt], delete t[No], delete t[qa], delete t[Ag], delete t[Lg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sm(e.return)) return null;
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
function ms(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ms(e, t, n), e = e.sibling; e !== null; ) ms(e, t, n), (e = e.sibling);
}
function hs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), (e = e.sibling);
}
var be = null,
  mt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) cm(e, t, n), (n = n.sibling);
}
function cm(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount(hi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || vr(n, t);
    case 6:
      var r = be,
        o = mt;
      (be = null),
        Zt(e, t, n),
        (be = r),
        (mt = o),
        be !== null &&
          (mt
            ? ((e = be),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : be.removeChild(n.stateNode));
      break;
    case 18:
      be !== null &&
        (mt
          ? ((e = be),
            (n = n.stateNode),
            e.nodeType === 8
              ? oa(e.parentNode, n)
              : e.nodeType === 1 && oa(e, n),
            bo(e))
          : oa(be, n.stateNode));
      break;
    case 4:
      (r = be),
        (o = mt),
        (be = n.stateNode.containerInfo),
        (mt = !0),
        Zt(e, t, n),
        (be = r),
        (mt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && fs(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (vr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          he(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Zt(e, t, n), (_e = r))
        : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function ed(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gg()),
      t.forEach(function (r) {
        var o = iy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ft(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (be = a.stateNode), (mt = !1);
              break e;
            case 3:
              (be = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (be = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (be === null) throw Error(N(160));
        cm(l, i, o), (be = null), (mt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        he(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) um(t, e), (t = t.sibling);
}
function um(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ft(t, e), Ct(e), r & 4)) {
        try {
          mo(3, e, e.return), Ci(3, e);
        } catch (v) {
          he(e, e.return, v);
        }
        try {
          mo(5, e, e.return);
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 1:
      ft(t, e), Ct(e), r & 512 && n !== null && vr(n, n.return);
      break;
    case 5:
      if (
        (ft(t, e),
        Ct(e),
        r & 512 && n !== null && vr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          xo(o, "");
        } catch (v) {
          he(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && _f(o, l),
              za(a, i);
            var u = za(a, l);
            for (i = 0; i < s.length; i += 2) {
              var f = s[i],
                p = s[i + 1];
              f === "style"
                ? Mf(o, p)
                : f === "dangerouslySetInnerHTML"
                ? Lf(o, p)
                : f === "children"
                ? xo(o, p)
                : js(o, f, p, u);
            }
            switch (a) {
              case "input":
                La(o, l);
                break;
              case "textarea":
                Of(o, l);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? yr(o, !!l.multiple, g, !1)
                  : d !== !!l.multiple &&
                    (l.defaultValue != null
                      ? yr(o, !!l.multiple, l.defaultValue, !0)
                      : yr(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[No] = l;
          } catch (v) {
            he(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ft(t, e), Ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (v) {
          he(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ft(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          bo(t.containerInfo);
        } catch (v) {
          he(e, e.return, v);
        }
      break;
    case 4:
      ft(t, e), Ct(e);
      break;
    case 13:
      ft(t, e),
        Ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (gc = ge())),
        r & 4 && ed(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || f), ft(t, e), (_e = u)) : ft(t, e),
        Ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (D = e, f = e.child; f !== null; ) {
            for (p = D = f; D !== null; ) {
              switch (((d = D), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, d, d.return);
                  break;
                case 1:
                  vr(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (v) {
                      he(r, n, v);
                    }
                  }
                  break;
                case 5:
                  vr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    nd(p);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (D = g)) : nd(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = p.stateNode),
                      (s = p.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = Df("display", i)));
              } catch (v) {
                he(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (v) {
                he(e, e.return, v);
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
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ft(t, e), Ct(e), r & 4 && ed(e);
      break;
    case 21:
      break;
    default:
      ft(t, e), Ct(e);
  }
}
function Ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (xo(o, ""), (r.flags &= -33));
          var l = qu(e);
          hs(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = qu(e);
          ms(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      he(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jg(e, t, n) {
  (D = e), dm(e);
}
function dm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var o = D,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || al;
      if (!i) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || _e;
        a = al;
        var u = _e;
        if (((al = i), (_e = s) && !u))
          for (D = o; D !== null; )
            (i = D),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? rd(o)
                : s !== null
                ? ((s.return = i), (D = s))
                : rd(o);
        for (; l !== null; ) (D = l), dm(l), (l = l.sibling);
        (D = o), (al = a), (_e = u);
      }
      td(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (D = l)) : td(e);
  }
}
function td(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || Ci(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && ju(t, l, r);
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
                ju(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                  var f = u.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && bo(p);
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
              throw Error(N(163));
          }
        _e || (t.flags & 512 && ps(t));
      } catch (d) {
        he(t, t.return, d);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function nd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (D = n);
      break;
    }
    D = t.return;
  }
}
function rd(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ci(4, t);
          } catch (s) {
            he(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              he(t, o, s);
            }
          }
          var l = t.return;
          try {
            ps(t);
          } catch (s) {
            he(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ps(t);
          } catch (s) {
            he(t, i, s);
          }
      }
    } catch (s) {
      he(t, t.return, s);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (D = a);
      break;
    }
    D = t.return;
  }
}
var qg = Math.ceil,
  ei = Yt.ReactCurrentDispatcher,
  hc = Yt.ReactCurrentOwner,
  at = Yt.ReactCurrentBatchConfig,
  G = 0,
  Ce = null,
  ye = null,
  ke = 0,
  Qe = 0,
  gr = bn(0),
  xe = 0,
  Do = null,
  Wn = 0,
  bi = 0,
  vc = 0,
  ho = null,
  We = null,
  gc = 0,
  Or = 1 / 0,
  At = null,
  ti = !1,
  vs = null,
  hn = null,
  sl = !1,
  cn = null,
  ni = 0,
  vo = 0,
  gs = null,
  _l = -1,
  Ol = 0;
function je() {
  return G & 6 ? ge() : _l !== -1 ? _l : (_l = ge());
}
function vn(e) {
  return e.mode & 1
    ? G & 2 && ke !== 0
      ? ke & -ke
      : Mg.transition !== null
      ? (Ol === 0 && (Ol = Xf()), Ol)
      : ((e = ne),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tp(e.type))),
        e)
    : 1;
}
function gt(e, t, n, r) {
  if (50 < vo) throw ((vo = 0), (gs = null), Error(N(185)));
  zo(e, n, r),
    (!(G & 2) || e !== Ce) &&
      (e === Ce && (!(G & 2) && (bi |= n), xe === 4 && an(e, ke)),
      Ye(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((Or = ge() + 500), xi && kn()));
}
function Ye(e, t) {
  var n = e.callbackNode;
  Mv(e, t);
  var r = zl(e, e === Ce ? ke : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? Dg(od.bind(null, e)) : xp(od.bind(null, e)),
        _g(function () {
          !(G & 6) && kn();
        }),
        (n = null);
    else {
      switch (Qf(r)) {
        case 1:
          n = Hs;
          break;
        case 4:
          n = Yf;
          break;
        case 16:
          n = jl;
          break;
        case 536870912:
          n = Kf;
          break;
        default:
          n = jl;
      }
      n = wm(n, fm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fm(e, t) {
  if (((_l = -1), (Ol = 0), G & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Cr() && e.callbackNode !== n) return null;
  var r = zl(e, e === Ce ? ke : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ri(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var l = mm();
    (Ce !== e || ke !== t) && ((At = null), (Or = ge() + 500), Mn(e, t));
    do
      try {
        ny();
        break;
      } catch (a) {
        pm(e, a);
      }
    while (!0);
    nc(),
      (ei.current = l),
      (G = o),
      ye !== null ? (t = 0) : ((Ce = null), (ke = 0), (t = xe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Va(e)), o !== 0 && ((r = o), (t = ys(e, o)))), t === 1)
    )
      throw ((n = Do), Mn(e, 0), an(e, r), Ye(e, ge()), n);
    if (t === 6) an(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !ey(o) &&
          ((t = ri(e, r)),
          t === 2 && ((l = Va(e)), l !== 0 && ((r = l), (t = ys(e, l)))),
          t === 1))
      )
        throw ((n = Do), Mn(e, 0), an(e, r), Ye(e, ge()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Tn(e, We, At);
          break;
        case 3:
          if (
            (an(e, r), (r & 130023424) === r && ((t = gc + 500 - ge()), 10 < t))
          ) {
            if (zl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ja(Tn.bind(null, e, We, At), t);
            break;
          }
          Tn(e, We, At);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - vt(r);
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
                : 1960 * qg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ja(Tn.bind(null, e, We, At), r);
            break;
          }
          Tn(e, We, At);
          break;
        case 5:
          Tn(e, We, At);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ye(e, ge()), e.callbackNode === n ? fm.bind(null, e) : null;
}
function ys(e, t) {
  var n = ho;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = ri(e, t)),
    e !== 2 && ((t = We), (We = n), t !== null && ws(t)),
    e
  );
}
function ws(e) {
  We === null ? (We = e) : We.push.apply(We, e);
}
function ey(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!yt(l(), o)) return !1;
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
function an(e, t) {
  for (
    t &= ~vc,
      t &= ~bi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function od(e) {
  if (G & 6) throw Error(N(327));
  Cr();
  var t = zl(e, 0);
  if (!(t & 1)) return Ye(e, ge()), null;
  var n = ri(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Va(e);
    r !== 0 && ((t = r), (n = ys(e, r)));
  }
  if (n === 1) throw ((n = Do), Mn(e, 0), an(e, t), Ye(e, ge()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tn(e, We, At),
    Ye(e, ge()),
    null
  );
}
function yc(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((Or = ge() + 500), xi && kn());
  }
}
function Hn(e) {
  cn !== null && cn.tag === 0 && !(G & 6) && Cr();
  var t = G;
  G |= 1;
  var n = at.transition,
    r = ne;
  try {
    if (((at.transition = null), (ne = 1), e)) return e();
  } finally {
    (ne = r), (at.transition = n), (G = t), !(G & 6) && kn();
  }
}
function wc() {
  (Qe = gr.current), ce(gr);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Tg(n)), ye !== null))
    for (n = ye.return; n !== null; ) {
      var r = n;
      switch ((qs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vl();
          break;
        case 3:
          Tr(), ce(Ve), ce(Ae), sc();
          break;
        case 5:
          ac(r);
          break;
        case 4:
          Tr();
          break;
        case 13:
          ce(fe);
          break;
        case 19:
          ce(fe);
          break;
        case 10:
          rc(r.type._context);
          break;
        case 22:
        case 23:
          wc();
      }
      n = n.return;
    }
  if (
    ((Ce = e),
    (ye = e = gn(e.current, null)),
    (ke = Qe = t),
    (xe = 0),
    (Do = null),
    (vc = bi = Wn = 0),
    (We = ho = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((n = An[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    An = null;
  }
  return e;
}
function pm(e, t) {
  do {
    var n = ye;
    try {
      if ((nc(), (Rl.current = ql), Jl)) {
        for (var r = pe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Jl = !1;
      }
      if (
        ((Bn = 0),
        (Se = we = pe = null),
        (po = !1),
        (Oo = 0),
        (hc.current = null),
        n === null || n.return === null)
      ) {
        (xe = 1), (Do = t), (ye = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = ke),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = Uu(i);
          if (g !== null) {
            (g.flags &= -257),
              Yu(g, i, a, l, t),
              g.mode & 1 && Vu(l, u, t),
              (t = g),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Vu(l, u, t), xc();
              break e;
            }
            s = Error(N(426));
          }
        } else if (de && a.mode & 1) {
          var x = Uu(i);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Yu(x, i, a, l, t),
              ec(_r(s, a));
            break e;
          }
        }
        (l = s = _r(s, a)),
          xe !== 4 && (xe = 2),
          ho === null ? (ho = [l]) : ho.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var h = Gp(l, s, t);
              Iu(l, h);
              break e;
            case 1:
              a = s;
              var m = l.type,
                y = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (hn === null || !hn.has(y))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = Zp(l, a, t);
                Iu(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      vm(n);
    } catch (E) {
      (t = E), ye === n && n !== null && (ye = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function mm() {
  var e = ei.current;
  return (ei.current = ql), e === null ? ql : e;
}
function xc() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4),
    Ce === null || (!(Wn & 268435455) && !(bi & 268435455)) || an(Ce, ke);
}
function ri(e, t) {
  var n = G;
  G |= 2;
  var r = mm();
  (Ce !== e || ke !== t) && ((At = null), Mn(e, t));
  do
    try {
      ty();
      break;
    } catch (o) {
      pm(e, o);
    }
  while (!0);
  if ((nc(), (G = n), (ei.current = r), ye !== null)) throw Error(N(261));
  return (Ce = null), (ke = 0), xe;
}
function ty() {
  for (; ye !== null; ) hm(ye);
}
function ny() {
  for (; ye !== null && !$v(); ) hm(ye);
}
function hm(e) {
  var t = ym(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? vm(e) : (ye = t),
    (hc.current = null);
}
function vm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Qg(n, t)), n !== null)) {
        (n.flags &= 32767), (ye = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (ye = null);
        return;
      }
    } else if (((n = Xg(n, t, Qe)), n !== null)) {
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
function Tn(e, t, n) {
  var r = ne,
    o = at.transition;
  try {
    (at.transition = null), (ne = 1), ry(e, t, n, r);
  } finally {
    (at.transition = o), (ne = r);
  }
  return null;
}
function ry(e, t, n, r) {
  do Cr();
  while (cn !== null);
  if (G & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Iv(e, l),
    e === Ce && ((ye = Ce = null), (ke = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      sl ||
      ((sl = !0),
      wm(jl, function () {
        return Cr(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = at.transition), (at.transition = null);
    var i = ne;
    ne = 1;
    var a = G;
    (G |= 4),
      (hc.current = null),
      Zg(e, n),
      um(n, e),
      Cg(Ga),
      (Fl = !!Qa),
      (Ga = Qa = null),
      (e.current = n),
      Jg(n),
      Rv(),
      (G = a),
      (ne = i),
      (at.transition = l);
  } else e.current = n;
  if (
    (sl && ((sl = !1), (cn = e), (ni = o)),
    (l = e.pendingLanes),
    l === 0 && (hn = null),
    _v(n.stateNode),
    Ye(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ti) throw ((ti = !1), (e = vs), (vs = null), e);
  return (
    ni & 1 && e.tag !== 0 && Cr(),
    (l = e.pendingLanes),
    l & 1 ? (e === gs ? vo++ : ((vo = 0), (gs = e))) : (vo = 0),
    kn(),
    null
  );
}
function Cr() {
  if (cn !== null) {
    var e = Qf(ni),
      t = at.transition,
      n = ne;
    try {
      if (((at.transition = null), (ne = 16 > e ? 16 : e), cn === null))
        var r = !1;
      else {
        if (((e = cn), (cn = null), (ni = 0), G & 6)) throw Error(N(331));
        var o = G;
        for (G |= 4, D = e.current; D !== null; ) {
          var l = D,
            i = l.child;
          if (D.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (D = u; D !== null; ) {
                  var f = D;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(8, f, l);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (D = p);
                  else
                    for (; D !== null; ) {
                      f = D;
                      var d = f.sibling,
                        g = f.return;
                      if ((am(f), f === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (D = d);
                        break;
                      }
                      D = g;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var v = w.child;
                if (v !== null) {
                  w.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              D = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (D = i);
          else
            e: for (; D !== null; ) {
              if (((l = D), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mo(9, l, l.return);
                }
              var h = l.sibling;
              if (h !== null) {
                (h.return = l.return), (D = h);
                break e;
              }
              D = l.return;
            }
        }
        var m = e.current;
        for (D = m; D !== null; ) {
          i = D;
          var y = i.child;
          if (i.subtreeFlags & 2064 && y !== null) (y.return = i), (D = y);
          else
            e: for (i = m; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(9, a);
                  }
                } catch (E) {
                  he(a, a.return, E);
                }
              if (a === i) {
                D = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (D = S);
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((G = o), kn(), $t && typeof $t.onPostCommitFiberRoot == "function")
        )
          try {
            $t.onPostCommitFiberRoot(hi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ne = n), (at.transition = t);
    }
  }
  return !1;
}
function ld(e, t, n) {
  (t = _r(n, t)),
    (t = Gp(e, t, 1)),
    (e = mn(e, t, 1)),
    (t = je()),
    e !== null && (zo(e, 1, t), Ye(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) ld(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ld(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (hn === null || !hn.has(r)))
        ) {
          (e = _r(n, e)),
            (e = Zp(t, e, 1)),
            (t = mn(t, e, 1)),
            (e = je()),
            t !== null && (zo(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function oy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ce === e &&
      (ke & n) === n &&
      (xe === 4 || (xe === 3 && (ke & 130023424) === ke && 500 > ge() - gc)
        ? Mn(e, 0)
        : (vc |= n)),
    Ye(e, t);
}
function gm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Jo), (Jo <<= 1), !(Jo & 130023424) && (Jo = 4194304))
      : (t = 1));
  var n = je();
  (e = Bt(e, t)), e !== null && (zo(e, t, n), Ye(e, n));
}
function ly(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gm(e, n);
}
function iy(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), gm(e, n);
}
var ym;
ym = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), Kg(e, t, n);
      He = !!(e.flags & 131072);
    }
  else (He = !1), de && t.flags & 1048576 && Sp(t, Kl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Tl(e, t), (e = t.pendingProps);
      var o = $r(t, Ae.current);
      Er(t, n), (o = uc(null, t, r, e, o, n));
      var l = dc();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ue(r) ? ((l = !0), Ul(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            lc(t),
            (o.updater = Si),
            (t.stateNode = o),
            (o._reactInternals = t),
            ls(t, r, e, n),
            (t = ss(null, t, r, !0, l, n)))
          : ((t.tag = 0), de && l && Js(t), Ie(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Tl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = sy(r)),
          (e = pt(r, e)),
          o)
        ) {
          case 0:
            t = as(null, t, r, e, n);
            break e;
          case 1:
            t = Qu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, pt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        as(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Qu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((tm(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          kp(e, t),
          Gl(t, r, null, n);
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
            (o = _r(Error(N(423)), t)), (t = Gu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = _r(Error(N(424)), t)), (t = Gu(e, t, r, n, o));
            break e;
          } else
            for (
              Ze = pn(t.stateNode.containerInfo.firstChild),
                Je = t,
                de = !0,
                ht = null,
                n = Np(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rr(), r === o)) {
            t = Wt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Tp(t),
        e === null && ns(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Za(r, o) ? (i = null) : l !== null && Za(r, l) && (t.flags |= 32),
        em(e, t),
        Ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && ns(t), null;
    case 13:
      return nm(e, t, n);
    case 4:
      return (
        ic(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Nr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Ku(e, t, r, o, n)
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
          le(Xl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (yt(l.value, i)) {
            if (l.children === o.children && !Ve.current) {
              t = Wt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = jt(-1, n & -n)), (s.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      rs(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  rs(i, n, t),
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
        Er(t, n),
        (o = st(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = pt(r, t.pendingProps)),
        (o = pt(r.type, o)),
        Xu(e, t, r, o, n)
      );
    case 15:
      return Jp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pt(r, o)),
        Tl(e, t),
        (t.tag = 1),
        Ue(r) ? ((e = !0), Ul(t)) : (e = !1),
        Er(t, n),
        $p(t, r, o),
        ls(t, r, o, n),
        ss(null, t, r, !0, e, n)
      );
    case 19:
      return rm(e, t, n);
    case 22:
      return qp(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function wm(e, t) {
  return Uf(e, t);
}
function ay(e, t, n, r) {
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
function it(e, t, n, r) {
  return new ay(e, t, n, r);
}
function Sc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sy(e) {
  if (typeof e == "function") return Sc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Fs)) return 11;
    if (e === Bs) return 14;
  }
  return 2;
}
function gn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = it(e.tag, t, e.key, e.mode)),
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
function Al(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Sc(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case ar:
        return In(n.children, o, l, t);
      case zs:
        (i = 8), (o |= 8);
        break;
      case Na:
        return (
          (e = it(12, n, t, o | 2)), (e.elementType = Na), (e.lanes = l), e
        );
      case Ta:
        return (e = it(13, n, t, o)), (e.elementType = Ta), (e.lanes = l), e;
      case _a:
        return (e = it(19, n, t, o)), (e.elementType = _a), (e.lanes = l), e;
      case Rf:
        return ki(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Pf:
              i = 10;
              break e;
            case $f:
              i = 9;
              break e;
            case Fs:
              i = 11;
              break e;
            case Bs:
              i = 14;
              break e;
            case nn:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = it(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function In(e, t, n, r) {
  return (e = it(7, e, r, t)), (e.lanes = n), e;
}
function ki(e, t, n, r) {
  return (
    (e = it(22, e, r, t)),
    (e.elementType = Rf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function fa(e, t, n) {
  return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function pa(e, t, n) {
  return (
    (t = it(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cy(e, t, n, r, o) {
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
    (this.eventTimes = Ki(0)),
    (this.expirationTimes = Ki(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ki(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ec(e, t, n, r, o, l, i, a, s) {
  return (
    (e = new cy(e, t, n, a, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = it(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    lc(l),
    e
  );
}
function uy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ir,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xm(e) {
  if (!e) return xn;
  e = e._reactInternals;
  e: {
    if (Xn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ue(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ue(n)) return wp(e, n, t);
  }
  return t;
}
function Sm(e, t, n, r, o, l, i, a, s) {
  return (
    (e = Ec(n, r, !0, e, o, l, i, a, s)),
    (e.context = xm(null)),
    (n = e.current),
    (r = je()),
    (o = vn(n)),
    (l = jt(r, o)),
    (l.callback = t ?? null),
    mn(n, l, o),
    (e.current.lanes = o),
    zo(e, o, r),
    Ye(e, r),
    e
  );
}
function Pi(e, t, n, r) {
  var o = t.current,
    l = je(),
    i = vn(o);
  return (
    (n = xm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = jt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mn(o, t, i)),
    e !== null && (gt(e, o, i, l), $l(e, o, i)),
    i
  );
}
function oi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function id(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Cc(e, t) {
  id(e, t), (e = e.alternate) && id(e, t);
}
function dy() {
  return null;
}
var Em =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bc(e) {
  this._internalRoot = e;
}
$i.prototype.render = bc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Pi(e, t, null, null);
};
$i.prototype.unmount = bc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Hn(function () {
      Pi(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function $i(e) {
  this._internalRoot = e;
}
$i.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
    ln.splice(n, 0, e), n === 0 && ep(e);
  }
};
function kc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ri(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ad() {}
function fy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = oi(i);
        l.call(u);
      };
    }
    var i = Sm(t, r, e, 0, null, !1, !1, "", ad);
    return (
      (e._reactRootContainer = i),
      (e[Ft] = i.current),
      $o(e.nodeType === 8 ? e.parentNode : e),
      Hn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = oi(s);
      a.call(u);
    };
  }
  var s = Ec(e, 0, !1, null, null, !1, !1, "", ad);
  return (
    (e._reactRootContainer = s),
    (e[Ft] = s.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    Hn(function () {
      Pi(t, s, n, r);
    }),
    s
  );
}
function Ni(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = oi(i);
        a.call(s);
      };
    }
    Pi(t, i, e, o);
  } else i = fy(n, t, e, o, r);
  return oi(i);
}
Gf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = lo(t.pendingLanes);
        n !== 0 &&
          (Vs(t, n | 1), Ye(t, ge()), !(G & 6) && ((Or = ge() + 500), kn()));
      }
      break;
    case 13:
      Hn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var o = je();
          gt(r, e, 1, o);
        }
      }),
        Cc(e, 1);
  }
};
Us = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = je();
      gt(t, e, 134217728, n);
    }
    Cc(e, 134217728);
  }
};
Zf = function (e) {
  if (e.tag === 13) {
    var t = vn(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = je();
      gt(n, e, t, r);
    }
    Cc(e, t);
  }
};
Jf = function () {
  return ne;
};
qf = function (e, t) {
  var n = ne;
  try {
    return (ne = e), t();
  } finally {
    ne = n;
  }
};
Ba = function (e, t, n) {
  switch (t) {
    case "input":
      if ((La(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = wi(r);
            if (!o) throw Error(N(90));
            Tf(r), La(r, o);
          }
        }
      }
      break;
    case "textarea":
      Of(e, n);
      break;
    case "select":
      (t = n.value), t != null && yr(e, !!n.multiple, t, !1);
  }
};
zf = yc;
Ff = Hn;
var py = { usingClientEntryPoint: !1, Events: [Bo, dr, wi, If, jf, yc] },
  eo = {
    findFiberByHostInstance: On,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  my = {
    bundleType: eo.bundleType,
    version: eo.version,
    rendererPackageName: eo.rendererPackageName,
    rendererConfig: eo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Hf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: eo.findFiberByHostInstance || dy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var cl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!cl.isDisabled && cl.supportsFiber)
    try {
      (hi = cl.inject(my)), ($t = cl);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!kc(t)) throw Error(N(200));
  return uy(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!kc(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = Em;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ec(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    $o(e.nodeType === 8 ? e.parentNode : e),
    new bc(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Hf(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Hn(e);
};
tt.hydrate = function (e, t, n) {
  if (!Ri(t)) throw Error(N(200));
  return Ni(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!kc(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Em;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Sm(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Ft] = t.current),
    $o(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new $i(t);
};
tt.render = function (e, t, n) {
  if (!Ri(t)) throw Error(N(200));
  return Ni(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!Ri(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Hn(function () {
        Ni(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = yc;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ri(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ni(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function Cm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm);
    } catch (e) {
      console.error(e);
    }
}
Cm(), (Sf.exports = tt);
var Pn = Sf.exports;
const Pc = cf(Pn);
var sd = Pn;
($a.createRoot = sd.createRoot), ($a.hydrateRoot = sd.hydrateRoot);
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
function cd(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function $c(e, t = []) {
  let n = [];
  function r(l, i) {
    const a = c.createContext(i),
      s = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: d, children: g, ...w } = p,
        v = (d == null ? void 0 : d[e][s]) || a,
        x = c.useMemo(() => w, Object.values(w));
      return c.createElement(v.Provider, { value: x }, g);
    }
    function f(p, d) {
      const g = (d == null ? void 0 : d[e][s]) || a,
        w = c.useContext(g);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return (u.displayName = l + "Provider"), [u, f];
  }
  const o = () => {
    const l = n.map((i) => c.createContext(i));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || l;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
    };
  };
  return (o.scopeName = e), [r, hy(o, ...t)];
}
function hy(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((a, { useScope: s, scopeName: u }) => {
        const p = s(l)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function vy(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function bm(...e) {
  return (t) => e.forEach((n) => vy(n, t));
}
function Le(...e) {
  return c.useCallback(bm(...e), e);
}
const Ar = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    l = o.find(yy);
  if (l) {
    const i = l.props.children,
      a = o.map((s) =>
        s === l
          ? c.Children.count(i) > 1
            ? c.Children.only(null)
            : c.isValidElement(i)
            ? i.props.children
            : null
          : s
      );
    return c.createElement(
      xs,
      te({}, r, { ref: t }),
      c.isValidElement(i) ? c.cloneElement(i, void 0, a) : null
    );
  }
  return c.createElement(xs, te({}, r, { ref: t }), n);
});
Ar.displayName = "Slot";
const xs = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return c.isValidElement(n)
    ? c.cloneElement(n, { ...wy(r, n.props), ref: t ? bm(t, n.ref) : n.ref })
    : c.Children.count(n) > 1
    ? c.Children.only(null)
    : null;
});
xs.displayName = "SlotClone";
const gy = ({ children: e }) => c.createElement(c.Fragment, null, e);
function yy(e) {
  return c.isValidElement(e) && e.type === gy;
}
function wy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...a) => {
            l(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...l })
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function xy(e) {
  const t = e + "CollectionProvider",
    [n, r] = $c(t),
    [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (g) => {
      const { scope: w, children: v } = g,
        x = $.useRef(null),
        h = $.useRef(new Map()).current;
      return $.createElement(o, { scope: w, itemMap: h, collectionRef: x }, v);
    },
    a = e + "CollectionSlot",
    s = $.forwardRef((g, w) => {
      const { scope: v, children: x } = g,
        h = l(a, v),
        m = Le(w, h.collectionRef);
      return $.createElement(Ar, { ref: m }, x);
    }),
    u = e + "CollectionItemSlot",
    f = "data-radix-collection-item",
    p = $.forwardRef((g, w) => {
      const { scope: v, children: x, ...h } = g,
        m = $.useRef(null),
        y = Le(w, m),
        S = l(u, v);
      return (
        $.useEffect(
          () => (
            S.itemMap.set(m, { ref: m, ...h }), () => void S.itemMap.delete(m)
          )
        ),
        $.createElement(Ar, { [f]: "", ref: y }, x)
      );
    });
  function d(g) {
    const w = l(e + "CollectionConsumer", g);
    return $.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const h = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (S, E) => h.indexOf(S.ref.current) - h.indexOf(E.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: i, Slot: s, ItemSlot: p }, d, r];
}
const Sy = c.createContext(void 0);
function Ey(e) {
  const t = c.useContext(Sy);
  return e || t || "ltr";
}
const Cy = [
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
  $e = Cy.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        a = l ? Ar : t;
      return (
        c.useEffect(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        c.createElement(a, te({}, i, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function by(e, t) {
  e && Pn.flushSync(() => e.dispatchEvent(t));
}
function Ht(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
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
function ky(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ht(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Ss = "dismissableLayer.update",
  Py = "dismissableLayer.pointerDownOutside",
  $y = "dismissableLayer.focusOutside";
let ud;
const Ry = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ny = c.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: l,
        onFocusOutside: i,
        onInteractOutside: a,
        onDismiss: s,
        ...u
      } = e,
      f = c.useContext(Ry),
      [p, d] = c.useState(null),
      g =
        (n = p == null ? void 0 : p.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, w] = c.useState({}),
      v = Le(t, (k) => d(k)),
      x = Array.from(f.layers),
      [h] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = x.indexOf(h),
      y = p ? x.indexOf(p) : -1,
      S = f.layersWithOutsidePointerEventsDisabled.size > 0,
      E = y >= m,
      P = Ty((k) => {
        const _ = k.target,
          T = [...f.branches].some((L) => L.contains(_));
        !E ||
          T ||
          (l == null || l(k),
          a == null || a(k),
          k.defaultPrevented || s == null || s());
      }, g),
      b = _y((k) => {
        const _ = k.target;
        [...f.branches].some((L) => L.contains(_)) ||
          (i == null || i(k),
          a == null || a(k),
          k.defaultPrevented || s == null || s());
      }, g);
    return (
      ky((k) => {
        y === f.layers.size - 1 &&
          (o == null || o(k),
          !k.defaultPrevented && s && (k.preventDefault(), s()));
      }, g),
      c.useEffect(() => {
        if (p)
          return (
            r &&
              (f.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((ud = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              f.layersWithOutsidePointerEventsDisabled.add(p)),
            f.layers.add(p),
            dd(),
            () => {
              r &&
                f.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = ud);
            }
          );
      }, [p, g, r, f]),
      c.useEffect(
        () => () => {
          p &&
            (f.layers.delete(p),
            f.layersWithOutsidePointerEventsDisabled.delete(p),
            dd());
        },
        [p, f]
      ),
      c.useEffect(() => {
        const k = () => w({});
        return (
          document.addEventListener(Ss, k),
          () => document.removeEventListener(Ss, k)
        );
      }, []),
      c.createElement(
        $e.div,
        te({}, u, {
          ref: v,
          style: {
            pointerEvents: S ? (E ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: Ee(e.onFocusCapture, b.onFocusCapture),
          onBlurCapture: Ee(e.onBlurCapture, b.onBlurCapture),
          onPointerDownCapture: Ee(
            e.onPointerDownCapture,
            P.onPointerDownCapture
          ),
        })
      )
    );
  });
function Ty(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ht(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const l = (a) => {
          if (a.target && !r.current) {
            let f = function () {
              km(Py, n, u, { discrete: !0 });
            };
            var s = f;
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = f),
                t.addEventListener("click", o.current, { once: !0 }))
              : f();
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
function _y(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ht(e),
    r = c.useRef(!1);
  return (
    c.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          km($y, n, { originalEvent: l }, { discrete: !1 });
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
function dd() {
  const e = new CustomEvent(Ss);
  document.dispatchEvent(e);
}
function km(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? by(o, l) : o.dispatchEvent(l);
}
let ma = 0;
function Oy() {
  c.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : fd()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : fd()
      ),
      ma++,
      () => {
        ma === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          ma--;
      }
    );
  }, []);
}
function fd() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
const ha = "focusScope.autoFocusOnMount",
  va = "focusScope.autoFocusOnUnmount",
  pd = { bubbles: !1, cancelable: !0 },
  Ay = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...i
      } = e,
      [a, s] = c.useState(null),
      u = Ht(o),
      f = Ht(l),
      p = c.useRef(null),
      d = Le(t, (v) => s(v)),
      g = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (r) {
        let m = function (P) {
            if (g.paused || !a) return;
            const b = P.target;
            a.contains(b) ? (p.current = b) : en(p.current, { select: !0 });
          },
          y = function (P) {
            if (g.paused || !a) return;
            const b = P.relatedTarget;
            b !== null && (a.contains(b) || en(p.current, { select: !0 }));
          },
          S = function (P) {
            if (document.activeElement === document.body)
              for (const k of P) k.removedNodes.length > 0 && en(a);
          };
        var v = m,
          x = y,
          h = S;
        document.addEventListener("focusin", m),
          document.addEventListener("focusout", y);
        const E = new MutationObserver(S);
        return (
          a && E.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", y),
              E.disconnect();
          }
        );
      }
    }, [r, a, g.paused]),
      c.useEffect(() => {
        if (a) {
          hd.add(g);
          const v = document.activeElement;
          if (!a.contains(v)) {
            const h = new CustomEvent(ha, pd);
            a.addEventListener(ha, u),
              a.dispatchEvent(h),
              h.defaultPrevented ||
                (Ly(zy(Pm(a)), { select: !0 }),
                document.activeElement === v && en(a));
          }
          return () => {
            a.removeEventListener(ha, u),
              setTimeout(() => {
                const h = new CustomEvent(va, pd);
                a.addEventListener(va, f),
                  a.dispatchEvent(h),
                  h.defaultPrevented || en(v ?? document.body, { select: !0 }),
                  a.removeEventListener(va, f),
                  hd.remove(g);
              }, 0);
          };
        }
      }, [a, u, f, g]);
    const w = c.useCallback(
      (v) => {
        if ((!n && !r) || g.paused) return;
        const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          h = document.activeElement;
        if (x && h) {
          const m = v.currentTarget,
            [y, S] = Dy(m);
          y && S
            ? !v.shiftKey && h === S
              ? (v.preventDefault(), n && en(y, { select: !0 }))
              : v.shiftKey &&
                h === y &&
                (v.preventDefault(), n && en(S, { select: !0 }))
            : h === m && v.preventDefault();
        }
      },
      [n, r, g.paused]
    );
    return c.createElement(
      $e.div,
      te({ tabIndex: -1 }, i, { ref: d, onKeyDown: w })
    );
  });
function Ly(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((en(r, { select: t }), document.activeElement !== n)) return;
}
function Dy(e) {
  const t = Pm(e),
    n = md(t, e),
    r = md(t.reverse(), e);
  return [n, r];
}
function Pm(e) {
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
function md(e, t) {
  for (const n of e) if (!My(n, { upTo: t })) return n;
}
function My(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Iy(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function en(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Iy(e) && t && e.select();
  }
}
const hd = jy();
function jy() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = vd(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = vd(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function vd(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function zy(e) {
  return e.filter((t) => t.tagName !== "A");
}
const ut =
    globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  Fy = wf.useId || (() => {});
let By = 0;
function $m(e) {
  const [t, n] = c.useState(Fy());
  return (
    ut(() => {
      n((r) => r ?? String(By++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const Wy = ["top", "right", "bottom", "left"],
  Pt = Math.min,
  Ge = Math.max,
  li = Math.round,
  ul = Math.floor,
  Sn = (e) => ({ x: e, y: e }),
  Hy = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Vy = { start: "end", end: "start" };
function Es(e, t, n) {
  return Ge(e, Pt(t, n));
}
function Vt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ut(e) {
  return e.split("-")[0];
}
function Fr(e) {
  return e.split("-")[1];
}
function Rc(e) {
  return e === "x" ? "y" : "x";
}
function Nc(e) {
  return e === "y" ? "height" : "width";
}
function Br(e) {
  return ["top", "bottom"].includes(Ut(e)) ? "y" : "x";
}
function Tc(e) {
  return Rc(Br(e));
}
function Uy(e, t, n) {
  n === void 0 && (n = !1);
  const r = Fr(e),
    o = Tc(e),
    l = Nc(o);
  let i =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[l] > t.floating[l] && (i = ii(i)), [i, ii(i)];
}
function Yy(e) {
  const t = ii(e);
  return [Cs(e), t, Cs(t)];
}
function Cs(e) {
  return e.replace(/start|end/g, (t) => Vy[t]);
}
function Ky(e, t, n) {
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
function Xy(e, t, n, r) {
  const o = Fr(e);
  let l = Ky(Ut(e), n === "start", r);
  return (
    o && ((l = l.map((i) => i + "-" + o)), t && (l = l.concat(l.map(Cs)))), l
  );
}
function ii(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Hy[t]);
}
function Qy(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Rm(e) {
  return typeof e != "number"
    ? Qy(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ai(e) {
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
function gd(e, t, n) {
  let { reference: r, floating: o } = e;
  const l = Br(t),
    i = Tc(t),
    a = Nc(i),
    s = Ut(t),
    u = l === "y",
    f = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    d = r[a] / 2 - o[a] / 2;
  let g;
  switch (s) {
    case "top":
      g = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      g = { x: f, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: p };
      break;
    case "left":
      g = { x: r.x - o.width, y: p };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch (Fr(t)) {
    case "start":
      g[i] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      g[i] += d * (n && u ? -1 : 1);
      break;
  }
  return g;
}
const Gy = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: l = [],
      platform: i,
    } = n,
    a = l.filter(Boolean),
    s = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let u = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: f, y: p } = gd(u, r, s),
    d = r,
    g = {},
    w = 0;
  for (let v = 0; v < a.length; v++) {
    const { name: x, fn: h } = a[v],
      {
        x: m,
        y,
        data: S,
        reset: E,
      } = await h({
        x: f,
        y: p,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (f = m ?? f),
      (p = y ?? p),
      (g = { ...g, [x]: { ...g[x], ...S } }),
      E &&
        w <= 50 &&
        (w++,
        typeof E == "object" &&
          (E.placement && (d = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: f, y: p } = gd(u, d, s))),
        (v = -1));
  }
  return { x: f, y: p, placement: d, strategy: o, middlewareData: g };
};
async function Mo(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: l, rects: i, elements: a, strategy: s } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: p = "floating",
      altBoundary: d = !1,
      padding: g = 0,
    } = Vt(t, e),
    w = Rm(g),
    x = a[d ? (p === "floating" ? "reference" : "floating") : p],
    h = ai(
      await l.getClippingRect({
        element:
          (n = await (l.isElement == null ? void 0 : l.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (l.getDocumentElement == null
                ? void 0
                : l.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: s,
      })
    ),
    m =
      p === "floating"
        ? { x: r, y: o, width: i.floating.width, height: i.floating.height }
        : i.reference,
    y = await (l.getOffsetParent == null
      ? void 0
      : l.getOffsetParent(a.floating)),
    S = (await (l.isElement == null ? void 0 : l.isElement(y)))
      ? (await (l.getScale == null ? void 0 : l.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = ai(
      l.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: s,
          })
        : m
    );
  return {
    top: (h.top - E.top + w.top) / S.y,
    bottom: (E.bottom - h.bottom + w.bottom) / S.y,
    left: (h.left - E.left + w.left) / S.x,
    right: (E.right - h.right + w.right) / S.x,
  };
}
const Zy = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: l,
          platform: i,
          elements: a,
          middlewareData: s,
        } = t,
        { element: u, padding: f = 0 } = Vt(e, t) || {};
      if (u == null) return {};
      const p = Rm(f),
        d = { x: n, y: r },
        g = Tc(o),
        w = Nc(g),
        v = await i.getDimensions(u),
        x = g === "y",
        h = x ? "top" : "left",
        m = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        S = l.reference[w] + l.reference[g] - d[g] - l.floating[w],
        E = d[g] - l.reference[g],
        P = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
      let b = P ? P[y] : 0;
      (!b || !(await (i.isElement == null ? void 0 : i.isElement(P)))) &&
        (b = a.floating[y] || l.floating[w]);
      const k = S / 2 - E / 2,
        _ = b / 2 - v[w] / 2 - 1,
        T = Pt(p[h], _),
        L = Pt(p[m], _),
        O = T,
        K = b - v[w] - L,
        W = b / 2 - v[w] / 2 + k,
        F = Es(O, W, K),
        H =
          !s.arrow &&
          Fr(o) != null &&
          W !== F &&
          l.reference[w] / 2 - (W < O ? T : L) - v[w] / 2 < 0,
        j = H ? (W < O ? W - O : W - K) : 0;
      return {
        [g]: d[g] + j,
        data: {
          [g]: F,
          centerOffset: W - F - j,
          ...(H && { alignmentOffset: j }),
        },
        reset: H,
      };
    },
  }),
  Jy = function (e) {
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
              initialPlacement: a,
              platform: s,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: p = !0,
              fallbackPlacements: d,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: w = "none",
              flipAlignment: v = !0,
              ...x
            } = Vt(e, t);
          if ((n = l.arrow) != null && n.alignmentOffset) return {};
          const h = Ut(o),
            m = Ut(a) === a,
            y = await (s.isRTL == null ? void 0 : s.isRTL(u.floating)),
            S = d || (m || !v ? [ii(a)] : Yy(a));
          !d && w !== "none" && S.push(...Xy(a, v, w, y));
          const E = [a, ...S],
            P = await Mo(t, x),
            b = [];
          let k = ((r = l.flip) == null ? void 0 : r.overflows) || [];
          if ((f && b.push(P[h]), p)) {
            const O = Uy(o, i, y);
            b.push(P[O[0]], P[O[1]]);
          }
          if (
            ((k = [...k, { placement: o, overflows: b }]),
            !b.every((O) => O <= 0))
          ) {
            var _, T;
            const O = (((_ = l.flip) == null ? void 0 : _.index) || 0) + 1,
              K = E[O];
            if (K)
              return {
                data: { index: O, overflows: k },
                reset: { placement: K },
              };
            let W =
              (T = k
                .filter((F) => F.overflows[0] <= 0)
                .sort((F, H) => F.overflows[1] - H.overflows[1])[0]) == null
                ? void 0
                : T.placement;
            if (!W)
              switch (g) {
                case "bestFit": {
                  var L;
                  const F =
                    (L = k
                      .map((H) => [
                        H.placement,
                        H.overflows
                          .filter((j) => j > 0)
                          .reduce((j, R) => j + R, 0),
                      ])
                      .sort((H, j) => H[1] - j[1])[0]) == null
                      ? void 0
                      : L[0];
                  F && (W = F);
                  break;
                }
                case "initialPlacement":
                  W = a;
                  break;
              }
            if (o !== W) return { reset: { placement: W } };
          }
          return {};
        },
      }
    );
  };
function yd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function wd(e) {
  return Wy.some((t) => e[t] >= 0);
}
const qy = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Vt(e, t);
        switch (r) {
          case "referenceHidden": {
            const l = await Mo(t, { ...o, elementContext: "reference" }),
              i = yd(l, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: wd(i) },
            };
          }
          case "escaped": {
            const l = await Mo(t, { ...o, altBoundary: !0 }),
              i = yd(l, n.floating);
            return { data: { escapedOffsets: i, escaped: wd(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function e1(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    l = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Ut(n),
    a = Fr(n),
    s = Br(n) === "y",
    u = ["left", "top"].includes(i) ? -1 : 1,
    f = l && s ? -1 : 1,
    p = Vt(t, e);
  let {
    mainAxis: d,
    crossAxis: g,
    alignmentAxis: w,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
  return (
    a && typeof w == "number" && (g = a === "end" ? w * -1 : w),
    s ? { x: g * f, y: d * u } : { x: d * u, y: g * f }
  );
}
const t1 = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: l, placement: i, middlewareData: a } = t,
            s = await e1(t, e);
          return i === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + s.x, y: l + s.y, data: { ...s, placement: i } };
        },
      }
    );
  },
  n1 = function (e) {
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
              limiter: a = {
                fn: (x) => {
                  let { x: h, y: m } = x;
                  return { x: h, y: m };
                },
              },
              ...s
            } = Vt(e, t),
            u = { x: n, y: r },
            f = await Mo(t, s),
            p = Br(Ut(o)),
            d = Rc(p);
          let g = u[d],
            w = u[p];
          if (l) {
            const x = d === "y" ? "top" : "left",
              h = d === "y" ? "bottom" : "right",
              m = g + f[x],
              y = g - f[h];
            g = Es(m, g, y);
          }
          if (i) {
            const x = p === "y" ? "top" : "left",
              h = p === "y" ? "bottom" : "right",
              m = w + f[x],
              y = w - f[h];
            w = Es(m, w, y);
          }
          const v = a.fn({ ...t, [d]: g, [p]: w });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  r1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: l, middlewareData: i } = t,
            { offset: a = 0, mainAxis: s = !0, crossAxis: u = !0 } = Vt(e, t),
            f = { x: n, y: r },
            p = Br(o),
            d = Rc(p);
          let g = f[d],
            w = f[p];
          const v = Vt(a, t),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (s) {
            const y = d === "y" ? "height" : "width",
              S = l.reference[d] - l.floating[y] + x.mainAxis,
              E = l.reference[d] + l.reference[y] - x.mainAxis;
            g < S ? (g = S) : g > E && (g = E);
          }
          if (u) {
            var h, m;
            const y = d === "y" ? "width" : "height",
              S = ["top", "left"].includes(Ut(o)),
              E =
                l.reference[p] -
                l.floating[y] +
                ((S && ((h = i.offset) == null ? void 0 : h[p])) || 0) +
                (S ? 0 : x.crossAxis),
              P =
                l.reference[p] +
                l.reference[y] +
                (S ? 0 : ((m = i.offset) == null ? void 0 : m[p]) || 0) -
                (S ? x.crossAxis : 0);
            w < E ? (w = E) : w > P && (w = P);
          }
          return { [d]: g, [p]: w };
        },
      }
    );
  },
  o1 = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: l } = t,
            { apply: i = () => {}, ...a } = Vt(e, t),
            s = await Mo(t, a),
            u = Ut(n),
            f = Fr(n),
            p = Br(n) === "y",
            { width: d, height: g } = r.floating;
          let w, v;
          u === "top" || u === "bottom"
            ? ((w = u),
              (v =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((v = u), (w = f === "end" ? "top" : "bottom"));
          const x = g - s.top - s.bottom,
            h = d - s.left - s.right,
            m = Pt(g - s[w], x),
            y = Pt(d - s[v], h),
            S = !t.middlewareData.shift;
          let E = m,
            P = y;
          if (
            (p ? (P = f || S ? Pt(y, h) : h) : (E = f || S ? Pt(m, x) : x),
            S && !f)
          ) {
            const k = Ge(s.left, 0),
              _ = Ge(s.right, 0),
              T = Ge(s.top, 0),
              L = Ge(s.bottom, 0);
            p
              ? (P = d - 2 * (k !== 0 || _ !== 0 ? k + _ : Ge(s.left, s.right)))
              : (E =
                  g - 2 * (T !== 0 || L !== 0 ? T + L : Ge(s.top, s.bottom)));
          }
          await i({ ...t, availableWidth: P, availableHeight: E });
          const b = await o.getDimensions(l.floating);
          return d !== b.width || g !== b.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Wr(e) {
  return Nm(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function qe(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Kt(e) {
  var t;
  return (t = (Nm(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Nm(e) {
  return e instanceof Node || e instanceof qe(e).Node;
}
function Nt(e) {
  return e instanceof Element || e instanceof qe(e).Element;
}
function Tt(e) {
  return e instanceof HTMLElement || e instanceof qe(e).HTMLElement;
}
function xd(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof qe(e).ShadowRoot;
}
function Ho(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = wt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function l1(e) {
  return ["table", "td", "th"].includes(Wr(e));
}
function _c(e) {
  const t = Oc(),
    n = wt(e);
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
function i1(e) {
  let t = En(e);
  for (; Tt(t) && !Lr(t); ) {
    if (_c(t)) return t;
    t = En(t);
  }
  return null;
}
function Oc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Lr(e) {
  return ["html", "body", "#document"].includes(Wr(e));
}
function wt(e) {
  return qe(e).getComputedStyle(e);
}
function Ti(e) {
  return Nt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function En(e) {
  if (Wr(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (xd(e) && e.host) || Kt(e);
  return xd(t) ? t.host : t;
}
function Tm(e) {
  const t = En(e);
  return Lr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Tt(t) && Ho(t)
    ? t
    : Tm(t);
}
function Io(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Tm(e),
    l = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = qe(o);
  return l
    ? t.concat(
        i,
        i.visualViewport || [],
        Ho(o) ? o : [],
        i.frameElement && n ? Io(i.frameElement) : []
      )
    : t.concat(o, Io(o, [], n));
}
function _m(e) {
  const t = wt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Tt(e),
    l = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    a = li(n) !== l || li(r) !== i;
  return a && ((n = l), (r = i)), { width: n, height: r, $: a };
}
function Ac(e) {
  return Nt(e) ? e : e.contextElement;
}
function br(e) {
  const t = Ac(e);
  if (!Tt(t)) return Sn(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: l } = _m(t);
  let i = (l ? li(n.width) : n.width) / r,
    a = (l ? li(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: i, y: a }
  );
}
const a1 = Sn(0);
function Om(e) {
  const t = qe(e);
  return !Oc() || !t.visualViewport
    ? a1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function s1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== qe(e)) ? !1 : t;
}
function Vn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    l = Ac(e);
  let i = Sn(1);
  t && (r ? Nt(r) && (i = br(r)) : (i = br(e)));
  const a = s1(l, n, r) ? Om(l) : Sn(0);
  let s = (o.left + a.x) / i.x,
    u = (o.top + a.y) / i.y,
    f = o.width / i.x,
    p = o.height / i.y;
  if (l) {
    const d = qe(l),
      g = r && Nt(r) ? qe(r) : r;
    let w = d,
      v = w.frameElement;
    for (; v && r && g !== w; ) {
      const x = br(v),
        h = v.getBoundingClientRect(),
        m = wt(v),
        y = h.left + (v.clientLeft + parseFloat(m.paddingLeft)) * x.x,
        S = h.top + (v.clientTop + parseFloat(m.paddingTop)) * x.y;
      (s *= x.x),
        (u *= x.y),
        (f *= x.x),
        (p *= x.y),
        (s += y),
        (u += S),
        (w = qe(v)),
        (v = w.frameElement);
    }
  }
  return ai({ width: f, height: p, x: s, y: u });
}
const c1 = [":popover-open", ":modal"];
function Lc(e) {
  return c1.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function u1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const l = o === "fixed",
    i = Kt(r),
    a = t ? Lc(t.floating) : !1;
  if (r === i || (a && l)) return n;
  let s = { scrollLeft: 0, scrollTop: 0 },
    u = Sn(1);
  const f = Sn(0),
    p = Tt(r);
  if (
    (p || (!p && !l)) &&
    ((Wr(r) !== "body" || Ho(i)) && (s = Ti(r)), Tt(r))
  ) {
    const d = Vn(r);
    (u = br(r)), (f.x = d.x + r.clientLeft), (f.y = d.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - s.scrollLeft * u.x + f.x,
    y: n.y * u.y - s.scrollTop * u.y + f.y,
  };
}
function d1(e) {
  return Array.from(e.getClientRects());
}
function Am(e) {
  return Vn(Kt(e)).left + Ti(e).scrollLeft;
}
function f1(e) {
  const t = Kt(e),
    n = Ti(e),
    r = e.ownerDocument.body,
    o = Ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    l = Ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Am(e);
  const a = -n.scrollTop;
  return (
    wt(r).direction === "rtl" && (i += Ge(t.clientWidth, r.clientWidth) - o),
    { width: o, height: l, x: i, y: a }
  );
}
function p1(e, t) {
  const n = qe(e),
    r = Kt(e),
    o = n.visualViewport;
  let l = r.clientWidth,
    i = r.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (l = o.width), (i = o.height);
    const u = Oc();
    (!u || (u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: l, height: i, x: a, y: s };
}
function m1(e, t) {
  const n = Vn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    l = Tt(e) ? br(e) : Sn(1),
    i = e.clientWidth * l.x,
    a = e.clientHeight * l.y,
    s = o * l.x,
    u = r * l.y;
  return { width: i, height: a, x: s, y: u };
}
function Sd(e, t, n) {
  let r;
  if (t === "viewport") r = p1(e, n);
  else if (t === "document") r = f1(Kt(e));
  else if (Nt(t)) r = m1(t, n);
  else {
    const o = Om(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return ai(r);
}
function Lm(e, t) {
  const n = En(e);
  return n === t || !Nt(n) || Lr(n)
    ? !1
    : wt(n).position === "fixed" || Lm(n, t);
}
function h1(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Io(e, [], !1).filter((a) => Nt(a) && Wr(a) !== "body"),
    o = null;
  const l = wt(e).position === "fixed";
  let i = l ? En(e) : e;
  for (; Nt(i) && !Lr(i); ) {
    const a = wt(i),
      s = _c(i);
    !s && a.position === "fixed" && (o = null),
      (
        l
          ? !s && !o
          : (!s &&
              a.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ho(i) && !s && Lm(e, i))
      )
        ? (r = r.filter((f) => f !== i))
        : (o = a),
      (i = En(i));
  }
  return t.set(e, r), r;
}
function v1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [
      ...(n === "clippingAncestors"
        ? Lc(t)
          ? []
          : h1(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = i[0],
    s = i.reduce((u, f) => {
      const p = Sd(t, f, o);
      return (
        (u.top = Ge(p.top, u.top)),
        (u.right = Pt(p.right, u.right)),
        (u.bottom = Pt(p.bottom, u.bottom)),
        (u.left = Ge(p.left, u.left)),
        u
      );
    }, Sd(t, a, o));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top,
  };
}
function g1(e) {
  const { width: t, height: n } = _m(e);
  return { width: t, height: n };
}
function y1(e, t, n) {
  const r = Tt(t),
    o = Kt(t),
    l = n === "fixed",
    i = Vn(e, !0, l, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const s = Sn(0);
  if (r || (!r && !l))
    if (((Wr(t) !== "body" || Ho(o)) && (a = Ti(t)), r)) {
      const p = Vn(t, !0, l, t);
      (s.x = p.x + t.clientLeft), (s.y = p.y + t.clientTop);
    } else o && (s.x = Am(o));
  const u = i.left + a.scrollLeft - s.x,
    f = i.top + a.scrollTop - s.y;
  return { x: u, y: f, width: i.width, height: i.height };
}
function ga(e) {
  return wt(e).position === "static";
}
function Ed(e, t) {
  return !Tt(e) || wt(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function Dm(e, t) {
  const n = qe(e);
  if (Lc(e)) return n;
  if (!Tt(e)) {
    let o = En(e);
    for (; o && !Lr(o); ) {
      if (Nt(o) && !ga(o)) return o;
      o = En(o);
    }
    return n;
  }
  let r = Ed(e, t);
  for (; r && l1(r) && ga(r); ) r = Ed(r, t);
  return r && Lr(r) && ga(r) && !_c(r) ? n : r || i1(e) || n;
}
const w1 = async function (e) {
  const t = this.getOffsetParent || Dm,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: y1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function x1(e) {
  return wt(e).direction === "rtl";
}
const S1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: u1,
  getDocumentElement: Kt,
  getClippingRect: v1,
  getOffsetParent: Dm,
  getElementRects: w1,
  getClientRects: d1,
  getDimensions: g1,
  getScale: br,
  isElement: Nt,
  isRTL: x1,
};
function E1(e, t) {
  let n = null,
    r;
  const o = Kt(e);
  function l() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function i(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), l();
    const { left: u, top: f, width: p, height: d } = e.getBoundingClientRect();
    if ((a || t(), !p || !d)) return;
    const g = ul(f),
      w = ul(o.clientWidth - (u + p)),
      v = ul(o.clientHeight - (f + d)),
      x = ul(u),
      m = {
        rootMargin: -g + "px " + -w + "px " + -v + "px " + -x + "px",
        threshold: Ge(0, Pt(1, s)) || 1,
      };
    let y = !0;
    function S(E) {
      const P = E[0].intersectionRatio;
      if (P !== s) {
        if (!y) return i();
        P
          ? i(!1, P)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 1e3));
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(S, { ...m, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(S, m);
    }
    n.observe(e);
  }
  return i(!0), l;
}
function C1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: l = !0,
      elementResize: i = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = r,
    u = Ac(e),
    f = o || l ? [...(u ? Io(u) : []), ...Io(t)] : [];
  f.forEach((h) => {
    o && h.addEventListener("scroll", n, { passive: !0 }),
      l && h.addEventListener("resize", n);
  });
  const p = u && a ? E1(u, n) : null;
  let d = -1,
    g = null;
  i &&
    ((g = new ResizeObserver((h) => {
      let [m] = h;
      m &&
        m.target === u &&
        g &&
        (g.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var y;
          (y = g) == null || y.observe(t);
        }))),
        n();
    })),
    u && !s && g.observe(u),
    g.observe(t));
  let w,
    v = s ? Vn(e) : null;
  s && x();
  function x() {
    const h = Vn(e);
    v &&
      (h.x !== v.x ||
        h.y !== v.y ||
        h.width !== v.width ||
        h.height !== v.height) &&
      n(),
      (v = h),
      (w = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var h;
      f.forEach((m) => {
        o && m.removeEventListener("scroll", n),
          l && m.removeEventListener("resize", n);
      }),
        p == null || p(),
        (h = g) == null || h.disconnect(),
        (g = null),
        s && cancelAnimationFrame(w);
    }
  );
}
const b1 = t1,
  k1 = n1,
  P1 = Jy,
  $1 = o1,
  R1 = qy,
  Cd = Zy,
  N1 = r1,
  T1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: S1, ...n },
      l = { ...o.platform, _c: r };
    return Gy(e, t, { ...o, platform: l });
  };
var Ll = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
function si(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!si(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const l = o[r];
      if (!(l === "_owner" && e.$$typeof) && !si(e[l], t[l])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Mm(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bd(e, t) {
  const n = Mm(e);
  return Math.round(t * n) / n;
}
function kd(e) {
  const t = c.useRef(e);
  return (
    Ll(() => {
      t.current = e;
    }),
    t
  );
}
function _1(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: l, floating: i } = {},
      transform: a = !0,
      whileElementsMounted: s,
      open: u,
    } = e,
    [f, p] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [d, g] = c.useState(r);
  si(d, r) || g(r);
  const [w, v] = c.useState(null),
    [x, h] = c.useState(null),
    m = c.useCallback((j) => {
      j !== P.current && ((P.current = j), v(j));
    }, []),
    y = c.useCallback((j) => {
      j !== b.current && ((b.current = j), h(j));
    }, []),
    S = l || w,
    E = i || x,
    P = c.useRef(null),
    b = c.useRef(null),
    k = c.useRef(f),
    _ = s != null,
    T = kd(s),
    L = kd(o),
    O = c.useCallback(() => {
      if (!P.current || !b.current) return;
      const j = { placement: t, strategy: n, middleware: d };
      L.current && (j.platform = L.current),
        T1(P.current, b.current, j).then((R) => {
          const A = { ...R, isPositioned: !0 };
          K.current &&
            !si(k.current, A) &&
            ((k.current = A),
            Pn.flushSync(() => {
              p(A);
            }));
        });
    }, [d, t, n, L]);
  Ll(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), p((j) => ({ ...j, isPositioned: !1 })));
  }, [u]);
  const K = c.useRef(!1);
  Ll(
    () => (
      (K.current = !0),
      () => {
        K.current = !1;
      }
    ),
    []
  ),
    Ll(() => {
      if ((S && (P.current = S), E && (b.current = E), S && E)) {
        if (T.current) return T.current(S, E, O);
        O();
      }
    }, [S, E, O, T, _]);
  const W = c.useMemo(
      () => ({ reference: P, floating: b, setReference: m, setFloating: y }),
      [m, y]
    ),
    F = c.useMemo(() => ({ reference: S, floating: E }), [S, E]),
    H = c.useMemo(() => {
      const j = { position: n, left: 0, top: 0 };
      if (!F.floating) return j;
      const R = bd(F.floating, f.x),
        A = bd(F.floating, f.y);
      return a
        ? {
            ...j,
            transform: "translate(" + R + "px, " + A + "px)",
            ...(Mm(F.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: A };
    }, [n, a, F.floating, f.x, f.y]);
  return c.useMemo(
    () => ({ ...f, update: O, refs: W, elements: F, floatingStyles: H }),
    [f, O, W, F, H]
  );
}
const O1 = (e) => {
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
            ? Cd({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? Cd({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  A1 = (e, t) => ({ ...b1(e), options: [e, t] }),
  L1 = (e, t) => ({ ...k1(e), options: [e, t] }),
  D1 = (e, t) => ({ ...N1(e), options: [e, t] }),
  M1 = (e, t) => ({ ...P1(e), options: [e, t] }),
  I1 = (e, t) => ({ ...$1(e), options: [e, t] }),
  j1 = (e, t) => ({ ...R1(e), options: [e, t] }),
  z1 = (e, t) => ({ ...O1(e), options: [e, t] });
function F1(e) {
  const [t, n] = c.useState(void 0);
  return (
    ut(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const l = o[0];
          let i, a;
          if ("borderBoxSize" in l) {
            const s = l.borderBoxSize,
              u = Array.isArray(s) ? s[0] : s;
            (i = u.inlineSize), (a = u.blockSize);
          } else (i = e.offsetWidth), (a = e.offsetHeight);
          n({ width: i, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const Im = "Popper",
  [jm, zm] = $c(Im),
  [B1, Fm] = jm(Im),
  W1 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = c.useState(null);
    return c.createElement(B1, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  H1 = "PopperAnchor",
  V1 = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      l = Fm(H1, n),
      i = c.useRef(null),
      a = Le(t, i);
    return (
      c.useEffect(() => {
        l.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : c.createElement($e.div, te({}, o, { ref: a }))
    );
  }),
  Bm = "PopperContent",
  [U1, V2] = jm(Bm),
  Y1 = c.forwardRef((e, t) => {
    var n, r, o, l, i, a, s, u;
    const {
        __scopePopper: f,
        side: p = "bottom",
        sideOffset: d = 0,
        align: g = "center",
        alignOffset: w = 0,
        arrowPadding: v = 0,
        avoidCollisions: x = !0,
        collisionBoundary: h = [],
        collisionPadding: m = 0,
        sticky: y = "partial",
        hideWhenDetached: S = !1,
        updatePositionStrategy: E = "optimized",
        onPlaced: P,
        ...b
      } = e,
      k = Fm(Bm, f),
      [_, T] = c.useState(null),
      L = Le(t, (rt) => T(rt)),
      [O, K] = c.useState(null),
      W = F1(O),
      F = (n = W == null ? void 0 : W.width) !== null && n !== void 0 ? n : 0,
      H = (r = W == null ? void 0 : W.height) !== null && r !== void 0 ? r : 0,
      j = p + (g !== "center" ? "-" + g : ""),
      R =
        typeof m == "number"
          ? m
          : { top: 0, right: 0, bottom: 0, left: 0, ...m },
      A = Array.isArray(h) ? h : [h],
      B = A.length > 0,
      M = { padding: R, boundary: A.filter(K1), altBoundary: B },
      {
        refs: I,
        floatingStyles: Q,
        placement: re,
        isPositioned: ve,
        middlewareData: Y,
      } = _1({
        strategy: "fixed",
        placement: j,
        whileElementsMounted: (...rt) =>
          C1(...rt, { animationFrame: E === "always" }),
        elements: { reference: k.anchor },
        middleware: [
          A1({ mainAxis: d + H, alignmentAxis: w }),
          x &&
            L1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: y === "partial" ? D1() : void 0,
              ...M,
            }),
          x && M1({ ...M }),
          I1({
            ...M,
            apply: ({
              elements: rt,
              rects: Ke,
              availableWidth: Rn,
              availableHeight: zi,
            }) => {
              const { width: Be, height: Qt } = Ke.reference,
                Zn = rt.floating.style;
              Zn.setProperty("--radix-popper-available-width", `${Rn}px`),
                Zn.setProperty("--radix-popper-available-height", `${zi}px`),
                Zn.setProperty("--radix-popper-anchor-width", `${Be}px`),
                Zn.setProperty("--radix-popper-anchor-height", `${Qt}px`);
            },
          }),
          O && z1({ element: O, padding: v }),
          X1({ arrowWidth: F, arrowHeight: H }),
          S && j1({ strategy: "referenceHidden", ...M }),
        ],
      }),
      [z, J] = Wm(re),
      ue = Ht(P);
    ut(() => {
      ve && (ue == null || ue());
    }, [ve, ue]);
    const q = (o = Y.arrow) === null || o === void 0 ? void 0 : o.x,
      ee = (l = Y.arrow) === null || l === void 0 ? void 0 : l.y,
      Z =
        ((i = Y.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !==
        0,
      [Me, Re] = c.useState();
    return (
      ut(() => {
        _ && Re(window.getComputedStyle(_).zIndex);
      }, [_]),
      c.createElement(
        "div",
        {
          ref: I.setFloating,
          "data-radix-popper-content-wrapper": "",
          style: {
            ...Q,
            transform: ve ? Q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Me,
            "--radix-popper-transform-origin": [
              (a = Y.transformOrigin) === null || a === void 0 ? void 0 : a.x,
              (s = Y.transformOrigin) === null || s === void 0 ? void 0 : s.y,
            ].join(" "),
          },
          dir: e.dir,
        },
        c.createElement(
          U1,
          {
            scope: f,
            placedSide: z,
            onArrowChange: K,
            arrowX: q,
            arrowY: ee,
            shouldHideArrow: Z,
          },
          c.createElement(
            $e.div,
            te({ "data-side": z, "data-align": J }, b, {
              ref: L,
              style: {
                ...b.style,
                animation: ve ? void 0 : "none",
                opacity:
                  (u = Y.hide) !== null && u !== void 0 && u.referenceHidden
                    ? 0
                    : void 0,
              },
            })
          )
        )
      )
    );
  });
function K1(e) {
  return e !== null;
}
const X1 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, r, o, l, i;
    const { placement: a, rects: s, middlewareData: u } = t,
      p =
        ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      d = p ? 0 : e.arrowWidth,
      g = p ? 0 : e.arrowHeight,
      [w, v] = Wm(a),
      x = { start: "0%", center: "50%", end: "100%" }[v],
      h =
        ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        d / 2,
      m =
        ((l = (i = u.arrow) === null || i === void 0 ? void 0 : i.y) !== null &&
        l !== void 0
          ? l
          : 0) +
        g / 2;
    let y = "",
      S = "";
    return (
      w === "bottom"
        ? ((y = p ? x : `${h}px`), (S = `${-g}px`))
        : w === "top"
        ? ((y = p ? x : `${h}px`), (S = `${s.floating.height + g}px`))
        : w === "right"
        ? ((y = `${-g}px`), (S = p ? x : `${m}px`))
        : w === "left" &&
          ((y = `${s.floating.width + g}px`), (S = p ? x : `${m}px`)),
      { data: { x: y, y: S } }
    );
  },
});
function Wm(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
const Q1 = W1,
  G1 = V1,
  Z1 = Y1,
  J1 = c.forwardRef((e, t) => {
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
      ? Pc.createPortal(c.createElement($e.div, te({}, o, { ref: t })), r)
      : null;
  });
function Pd({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = q1({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    a = Ht(n),
    s = c.useCallback(
      (u) => {
        if (l) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && a(p);
        } else o(u);
      },
      [l, e, o, a]
    );
  return [i, s];
}
function q1({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    l = Ht(t);
  return (
    c.useEffect(() => {
      o.current !== r && (l(r), (o.current = r));
    }, [r, o, l]),
    n
  );
}
function ew(e) {
  const t = c.useRef({ value: e, previous: e });
  return c.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
const tw = c.forwardRef((e, t) =>
  c.createElement(
    $e.span,
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
var nw = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  tr = new WeakMap(),
  dl = new WeakMap(),
  fl = {},
  ya = 0,
  Hm = function (e) {
    return e && (e.host || Hm(e.parentNode));
  },
  rw = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Hm(n);
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
  ow = function (e, t, n, r) {
    var o = rw(t, Array.isArray(e) ? e : [e]);
    fl[n] || (fl[n] = new WeakMap());
    var l = fl[n],
      i = [],
      a = new Set(),
      s = new Set(o),
      u = function (p) {
        !p || a.has(p) || (a.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var f = function (p) {
      !p ||
        s.has(p) ||
        Array.prototype.forEach.call(p.children, function (d) {
          if (a.has(d)) f(d);
          else
            try {
              var g = d.getAttribute(r),
                w = g !== null && g !== "false",
                v = (tr.get(d) || 0) + 1,
                x = (l.get(d) || 0) + 1;
              tr.set(d, v),
                l.set(d, x),
                i.push(d),
                v === 1 && w && dl.set(d, !0),
                x === 1 && d.setAttribute(n, "true"),
                w || d.setAttribute(r, "true");
            } catch (h) {
              console.error("aria-hidden: cannot operate on ", d, h);
            }
        });
    };
    return (
      f(t),
      a.clear(),
      ya++,
      function () {
        i.forEach(function (p) {
          var d = tr.get(p) - 1,
            g = l.get(p) - 1;
          tr.set(p, d),
            l.set(p, g),
            d || (dl.has(p) || p.removeAttribute(r), dl.delete(p)),
            g || p.removeAttribute(n);
        }),
          ya--,
          ya ||
            ((tr = new WeakMap()),
            (tr = new WeakMap()),
            (dl = new WeakMap()),
            (fl = {}));
      }
    );
  },
  Vm = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = nw(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        ow(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Oe = function () {
    return (
      (Oe =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var l in n)
              Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
          }
          return t;
        }),
      Oe.apply(this, arguments)
    );
  };
function Dc(e, t) {
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
function Um(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, l; r < o; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var go = "right-scroll-bar-position",
  yo = "width-before-scroll-bar",
  lw = "with-scroll-bars-hidden",
  iw = "--removed-body-scroll-bar-size";
function wa(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function aw(e, t) {
  var n = c.useState(function () {
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
var sw = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  $d = new WeakMap();
function Ym(e, t) {
  var n = aw(null, function (r) {
    return e.forEach(function (o) {
      return wa(o, r);
    });
  });
  return (
    sw(
      function () {
        var r = $d.get(n);
        if (r) {
          var o = new Set(r),
            l = new Set(e),
            i = n.current;
          o.forEach(function (a) {
            l.has(a) || wa(a, null);
          }),
            l.forEach(function (a) {
              o.has(a) || wa(a, i);
            });
        }
        $d.set(n, e);
      },
      [e]
    ),
    n
  );
}
function cw(e) {
  return e;
}
function uw(e, t) {
  t === void 0 && (t = cw);
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
            n = n.filter(function (a) {
              return a !== i;
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
          push: function (a) {
            return l(a);
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
          var a = n;
          (n = []), a.forEach(l), (i = n);
        }
        var s = function () {
            var f = i;
            (i = []), f.forEach(l);
          },
          u = function () {
            return Promise.resolve().then(s);
          };
        u(),
          (n = {
            push: function (f) {
              i.push(f), u();
            },
            filter: function (f) {
              return (i = i.filter(f)), n;
            },
          });
      },
    };
  return o;
}
function Km(e) {
  e === void 0 && (e = {});
  var t = uw(null);
  return (t.options = Oe({ async: !0, ssr: !1 }, e)), t;
}
var Xm = function (e) {
  var t = e.sideCar,
    n = Dc(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, Oe({}, n));
};
Xm.isSideCarExport = !0;
function Qm(e, t) {
  return e.useMedium(t), Xm;
}
var Gm = Km(),
  xa = function () {},
  _i = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: xa,
        onWheelCapture: xa,
        onTouchMoveCapture: xa,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      a = e.children,
      s = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      d = e.sideCar,
      g = e.noIsolation,
      w = e.inert,
      v = e.allowPinchZoom,
      x = e.as,
      h = x === void 0 ? "div" : x,
      m = Dc(e, [
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
      y = d,
      S = Ym([n, t]),
      E = Oe(Oe({}, m), o);
    return c.createElement(
      c.Fragment,
      null,
      f &&
        c.createElement(y, {
          sideCar: Gm,
          removeScrollBar: u,
          shards: p,
          noIsolation: g,
          inert: w,
          setCallbacks: l,
          allowPinchZoom: !!v,
          lockRef: n,
        }),
      i
        ? c.cloneElement(c.Children.only(a), Oe(Oe({}, E), { ref: S }))
        : c.createElement(h, Oe({}, E, { className: s, ref: S }), a)
    );
  });
_i.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
_i.classNames = { fullWidth: yo, zeroRight: go };
var dw = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function fw() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = dw();
  return t && e.setAttribute("nonce", t), e;
}
function pw(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function mw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var hw = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = fw()) && (pw(t, n), mw(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  vw = function () {
    var e = hw();
    return function (t, n) {
      c.useEffect(
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
  Mc = function () {
    var e = vw(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  gw = { left: 0, top: 0, right: 0, gap: 0 },
  Sa = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  yw = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Sa(n), Sa(r), Sa(o)];
  },
  ww = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return gw;
    var t = yw(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  xw = Mc(),
  kr = "data-scroll-locked",
  Sw = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      i = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          lw,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          kr,
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
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          go,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          yo,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(go, " .")
        .concat(
          go,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(yo, " .")
        .concat(
          yo,
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
          kr,
          `] {
    `
        )
        .concat(iw, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Rd = function () {
    var e = parseInt(document.body.getAttribute(kr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Ew = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(kr, (Rd() + 1).toString()),
        function () {
          var e = Rd() - 1;
          e <= 0
            ? document.body.removeAttribute(kr)
            : document.body.setAttribute(kr, e.toString());
        }
      );
    }, []);
  },
  Zm = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Ew();
    var l = c.useMemo(
      function () {
        return ww(o);
      },
      [o]
    );
    return c.createElement(xw, { styles: Sw(l, !t, o, n ? "" : "!important") });
  },
  bs = !1;
if (typeof window < "u")
  try {
    var pl = Object.defineProperty({}, "passive", {
      get: function () {
        return (bs = !0), !0;
      },
    });
    window.addEventListener("test", pl, pl),
      window.removeEventListener("test", pl, pl);
  } catch {
    bs = !1;
  }
var nr = bs ? { passive: !1 } : !1,
  Cw = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Jm = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Cw(e) && n[t] === "visible")
    );
  },
  bw = function (e) {
    return Jm(e, "overflowY");
  },
  kw = function (e) {
    return Jm(e, "overflowX");
  },
  Nd = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = qm(e, n);
      if (r) {
        var o = eh(e, n),
          l = o[1],
          i = o[2];
        if (l > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  Pw = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  $w = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  qm = function (e, t) {
    return e === "v" ? bw(t) : kw(t);
  },
  eh = function (e, t) {
    return e === "v" ? Pw(t) : $w(t);
  },
  Rw = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Nw = function (e, t, n, r, o) {
    var l = Rw(e, window.getComputedStyle(t).direction),
      i = l * r,
      a = n.target,
      s = t.contains(a),
      u = !1,
      f = i > 0,
      p = 0,
      d = 0;
    do {
      var g = eh(e, a),
        w = g[0],
        v = g[1],
        x = g[2],
        h = v - x - l * w;
      (w || h) && qm(e, a) && ((p += h), (d += w)), (a = a.parentNode);
    } while ((!s && a !== document.body) || (s && (t.contains(a) || t === a)));
    return ((f && (p === 0 || !o)) || (!f && (d === 0 || !o))) && (u = !0), u;
  },
  ml = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Td = function (e) {
    return [e.deltaX, e.deltaY];
  },
  _d = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Tw = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  _w = function (e) {
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
  Ow = 0,
  rr = [];
function Aw(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(Ow++)[0],
    l = c.useState(function () {
      return Mc();
    })[0],
    i = c.useRef(e);
  c.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = Um([e.lockRef.current], (e.shards || []).map(_d), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = c.useCallback(function (v, x) {
      if ("touches" in v && v.touches.length === 2)
        return !i.current.allowPinchZoom;
      var h = ml(v),
        m = n.current,
        y = "deltaX" in v ? v.deltaX : m[0] - h[0],
        S = "deltaY" in v ? v.deltaY : m[1] - h[1],
        E,
        P = v.target,
        b = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in v && b === "h" && P.type === "range") return !1;
      var k = Nd(b, P);
      if (!k) return !0;
      if ((k ? (E = b) : ((E = b === "v" ? "h" : "v"), (k = Nd(b, P))), !k))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (y || S) && (r.current = E), !E)
      )
        return !0;
      var _ = r.current || E;
      return Nw(_, x, v, _ === "h" ? y : S, !0);
    }, []),
    s = c.useCallback(function (v) {
      var x = v;
      if (!(!rr.length || rr[rr.length - 1] !== l)) {
        var h = "deltaY" in x ? Td(x) : ml(x),
          m = t.current.filter(function (E) {
            return E.name === x.type && E.target === x.target && Tw(E.delta, h);
          })[0];
        if (m && m.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!m) {
          var y = (i.current.shards || [])
              .map(_d)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(x.target);
              }),
            S = y.length > 0 ? a(x, y[0]) : !i.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (v, x, h, m) {
      var y = { name: v, delta: x, target: h, should: m };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== y;
          });
        }, 1);
    }, []),
    f = c.useCallback(function (v) {
      (n.current = ml(v)), (r.current = void 0);
    }, []),
    p = c.useCallback(function (v) {
      u(v.type, Td(v), v.target, a(v, e.lockRef.current));
    }, []),
    d = c.useCallback(function (v) {
      u(v.type, ml(v), v.target, a(v, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      rr.push(l),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", s, nr),
      document.addEventListener("touchmove", s, nr),
      document.addEventListener("touchstart", f, nr),
      function () {
        (rr = rr.filter(function (v) {
          return v !== l;
        })),
          document.removeEventListener("wheel", s, nr),
          document.removeEventListener("touchmove", s, nr),
          document.removeEventListener("touchstart", f, nr);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    w = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    w ? c.createElement(l, { styles: _w(o) }) : null,
    g ? c.createElement(Zm, { gapMode: "margin" }) : null
  );
}
const Lw = Qm(Gm, Aw);
var th = c.forwardRef(function (e, t) {
  return c.createElement(_i, Oe({}, e, { ref: t, sideCar: Lw }));
});
th.classNames = _i.classNames;
const Dw = [" ", "Enter", "ArrowUp", "ArrowDown"],
  Mw = [" ", "Enter"],
  Oi = "Select",
  [Ai, Li, Iw] = xy(Oi),
  [Hr, U2] = $c(Oi, [Iw, zm]),
  Ic = zm(),
  [jw, Qn] = Hr(Oi),
  [zw, Fw] = Hr(Oi),
  Bw = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        value: i,
        defaultValue: a,
        onValueChange: s,
        dir: u,
        name: f,
        autoComplete: p,
        disabled: d,
        required: g,
      } = e,
      w = Ic(t),
      [v, x] = c.useState(null),
      [h, m] = c.useState(null),
      [y, S] = c.useState(!1),
      E = Ey(u),
      [P = !1, b] = Pd({ prop: r, defaultProp: o, onChange: l }),
      [k, _] = Pd({ prop: i, defaultProp: a, onChange: s }),
      T = c.useRef(null),
      L = v ? !!v.closest("form") : !0,
      [O, K] = c.useState(new Set()),
      W = Array.from(O)
        .map((F) => F.props.value)
        .join(";");
    return c.createElement(
      Q1,
      w,
      c.createElement(
        jw,
        {
          required: g,
          scope: t,
          trigger: v,
          onTriggerChange: x,
          valueNode: h,
          onValueNodeChange: m,
          valueNodeHasChildren: y,
          onValueNodeHasChildrenChange: S,
          contentId: $m(),
          value: k,
          onValueChange: _,
          open: P,
          onOpenChange: b,
          dir: E,
          triggerPointerDownPosRef: T,
          disabled: d,
        },
        c.createElement(
          Ai.Provider,
          { scope: t },
          c.createElement(
            zw,
            {
              scope: e.__scopeSelect,
              onNativeOptionAdd: c.useCallback((F) => {
                K((H) => new Set(H).add(F));
              }, []),
              onNativeOptionRemove: c.useCallback((F) => {
                K((H) => {
                  const j = new Set(H);
                  return j.delete(F), j;
                });
              }, []),
            },
            n
          )
        ),
        L
          ? c.createElement(
              ih,
              {
                key: W,
                "aria-hidden": !0,
                required: g,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: k,
                onChange: (F) => _(F.target.value),
                disabled: d,
              },
              k === void 0 ? c.createElement("option", { value: "" }) : null,
              Array.from(O)
            )
          : null
      )
    );
  },
  Ww = "SelectTrigger",
  Hw = c.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      l = Ic(n),
      i = Qn(Ww, n),
      a = i.disabled || r,
      s = Le(t, i.onTriggerChange),
      u = Li(n),
      [f, p, d] = ah((w) => {
        const v = u().filter((m) => !m.disabled),
          x = v.find((m) => m.value === i.value),
          h = sh(v, w, x);
        h !== void 0 && i.onValueChange(h.value);
      }),
      g = () => {
        a || (i.onOpenChange(!0), d());
      };
    return c.createElement(
      G1,
      te({ asChild: !0 }, l),
      c.createElement(
        $e.button,
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
            disabled: a,
            "data-disabled": a ? "" : void 0,
            "data-placeholder": lh(i.value) ? "" : void 0,
          },
          o,
          {
            ref: s,
            onClick: Ee(o.onClick, (w) => {
              w.currentTarget.focus();
            }),
            onPointerDown: Ee(o.onPointerDown, (w) => {
              const v = w.target;
              v.hasPointerCapture(w.pointerId) &&
                v.releasePointerCapture(w.pointerId),
                w.button === 0 &&
                  w.ctrlKey === !1 &&
                  (g(),
                  (i.triggerPointerDownPosRef.current = {
                    x: Math.round(w.pageX),
                    y: Math.round(w.pageY),
                  }),
                  w.preventDefault());
            }),
            onKeyDown: Ee(o.onKeyDown, (w) => {
              const v = f.current !== "";
              !(w.ctrlKey || w.altKey || w.metaKey) &&
                w.key.length === 1 &&
                p(w.key),
                !(v && w.key === " ") &&
                  Dw.includes(w.key) &&
                  (g(), w.preventDefault());
            }),
          }
        )
      )
    );
  }),
  Vw = "SelectValue",
  Uw = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: l,
        placeholder: i = "",
        ...a
      } = e,
      s = Qn(Vw, n),
      { onValueNodeHasChildrenChange: u } = s,
      f = l !== void 0,
      p = Le(t, s.onValueNodeChange);
    return (
      ut(() => {
        u(f);
      }, [u, f]),
      c.createElement(
        $e.span,
        te({}, a, { ref: p, style: { pointerEvents: "none" } }),
        lh(s.value) ? c.createElement(c.Fragment, null, i) : l
      )
    );
  }),
  Yw = c.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return c.createElement(
      $e.span,
      te({ "aria-hidden": !0 }, o, { ref: t }),
      r || "▼"
    );
  }),
  Kw = (e) => c.createElement(J1, te({ asChild: !0 }, e)),
  Dr = "SelectContent",
  Xw = c.forwardRef((e, t) => {
    const n = Qn(Dr, e.__scopeSelect),
      [r, o] = c.useState();
    if (
      (ut(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const l = r;
      return l
        ? Pn.createPortal(
            c.createElement(
              nh,
              { scope: e.__scopeSelect },
              c.createElement(
                Ai.Slot,
                { scope: e.__scopeSelect },
                c.createElement("div", null, e.children)
              )
            ),
            l
          )
        : null;
    }
    return c.createElement(Qw, te({}, e, { ref: t }));
  }),
  Lt = 10,
  [nh, Gn] = Hr(Dr),
  Qw = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: l,
        onPointerDownOutside: i,
        side: a,
        sideOffset: s,
        align: u,
        alignOffset: f,
        arrowPadding: p,
        collisionBoundary: d,
        collisionPadding: g,
        sticky: w,
        hideWhenDetached: v,
        avoidCollisions: x,
        ...h
      } = e,
      m = Qn(Dr, n),
      [y, S] = c.useState(null),
      [E, P] = c.useState(null),
      b = Le(t, (z) => S(z)),
      [k, _] = c.useState(null),
      [T, L] = c.useState(null),
      O = Li(n),
      [K, W] = c.useState(!1),
      F = c.useRef(!1);
    c.useEffect(() => {
      if (y) return Vm(y);
    }, [y]),
      Oy();
    const H = c.useCallback(
        (z) => {
          const [J, ...ue] = O().map((Z) => Z.ref.current),
            [q] = ue.slice(-1),
            ee = document.activeElement;
          for (const Z of z)
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
        [O, E]
      ),
      j = c.useCallback(() => H([k, y]), [H, k, y]);
    c.useEffect(() => {
      K && j();
    }, [K, j]);
    const { onOpenChange: R, triggerPointerDownPosRef: A } = m;
    c.useEffect(() => {
      if (y) {
        let z = { x: 0, y: 0 };
        const J = (q) => {
            var ee, Z, Me, Re;
            z = {
              x: Math.abs(
                Math.round(q.pageX) -
                  ((ee =
                    (Z = A.current) === null || Z === void 0 ? void 0 : Z.x) !==
                    null && ee !== void 0
                    ? ee
                    : 0)
              ),
              y: Math.abs(
                Math.round(q.pageY) -
                  ((Me =
                    (Re = A.current) === null || Re === void 0
                      ? void 0
                      : Re.y) !== null && Me !== void 0
                    ? Me
                    : 0)
              ),
            };
          },
          ue = (q) => {
            z.x <= 10 && z.y <= 10
              ? q.preventDefault()
              : y.contains(q.target) || R(!1),
              document.removeEventListener("pointermove", J),
              (A.current = null);
          };
        return (
          A.current !== null &&
            (document.addEventListener("pointermove", J),
            document.addEventListener("pointerup", ue, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", J),
              document.removeEventListener("pointerup", ue, { capture: !0 });
          }
        );
      }
    }, [y, R, A]),
      c.useEffect(() => {
        const z = () => R(!1);
        return (
          window.addEventListener("blur", z),
          window.addEventListener("resize", z),
          () => {
            window.removeEventListener("blur", z),
              window.removeEventListener("resize", z);
          }
        );
      }, [R]);
    const [B, M] = ah((z) => {
        const J = O().filter((ee) => !ee.disabled),
          ue = J.find((ee) => ee.ref.current === document.activeElement),
          q = sh(J, z, ue);
        q && setTimeout(() => q.ref.current.focus());
      }),
      I = c.useCallback(
        (z, J, ue) => {
          const q = !F.current && !ue;
          ((m.value !== void 0 && m.value === J) || q) &&
            (_(z), q && (F.current = !0));
        },
        [m.value]
      ),
      Q = c.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
      re = c.useCallback(
        (z, J, ue) => {
          const q = !F.current && !ue;
          ((m.value !== void 0 && m.value === J) || q) && L(z);
        },
        [m.value]
      ),
      ve = r === "popper" ? Od : Gw,
      Y =
        ve === Od
          ? {
              side: a,
              sideOffset: s,
              align: u,
              alignOffset: f,
              arrowPadding: p,
              collisionBoundary: d,
              collisionPadding: g,
              sticky: w,
              hideWhenDetached: v,
              avoidCollisions: x,
            }
          : {};
    return c.createElement(
      nh,
      {
        scope: n,
        content: y,
        viewport: E,
        onViewportChange: P,
        itemRefCallback: I,
        selectedItem: k,
        onItemLeave: Q,
        itemTextRefCallback: re,
        focusSelectedItem: j,
        selectedItemText: T,
        position: r,
        isPositioned: K,
        searchRef: B,
      },
      c.createElement(
        th,
        { as: Ar, allowPinchZoom: !0 },
        c.createElement(
          Ay,
          {
            asChild: !0,
            trapped: m.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: Ee(o, (z) => {
              var J;
              (J = m.trigger) === null ||
                J === void 0 ||
                J.focus({ preventScroll: !0 }),
                z.preventDefault();
            }),
          },
          c.createElement(
            Ny,
            {
              asChild: !0,
              disableOutsidePointerEvents: !0,
              onEscapeKeyDown: l,
              onPointerDownOutside: i,
              onFocusOutside: (z) => z.preventDefault(),
              onDismiss: () => m.onOpenChange(!1),
            },
            c.createElement(
              ve,
              te(
                {
                  role: "listbox",
                  id: m.contentId,
                  "data-state": m.open ? "open" : "closed",
                  dir: m.dir,
                  onContextMenu: (z) => z.preventDefault(),
                },
                h,
                Y,
                {
                  onPlaced: () => W(!0),
                  ref: b,
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    outline: "none",
                    ...h.style,
                  },
                  onKeyDown: Ee(h.onKeyDown, (z) => {
                    const J = z.ctrlKey || z.altKey || z.metaKey;
                    if (
                      (z.key === "Tab" && z.preventDefault(),
                      !J && z.key.length === 1 && M(z.key),
                      ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key))
                    ) {
                      let q = O()
                        .filter((ee) => !ee.disabled)
                        .map((ee) => ee.ref.current);
                      if (
                        (["ArrowUp", "End"].includes(z.key) &&
                          (q = q.slice().reverse()),
                        ["ArrowUp", "ArrowDown"].includes(z.key))
                      ) {
                        const ee = z.target,
                          Z = q.indexOf(ee);
                        q = q.slice(Z + 1);
                      }
                      setTimeout(() => H(q)), z.preventDefault();
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
  Gw = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      l = Qn(Dr, n),
      i = Gn(Dr, n),
      [a, s] = c.useState(null),
      [u, f] = c.useState(null),
      p = Le(t, (b) => f(b)),
      d = Li(n),
      g = c.useRef(!1),
      w = c.useRef(!0),
      {
        viewport: v,
        selectedItem: x,
        selectedItemText: h,
        focusSelectedItem: m,
      } = i,
      y = c.useCallback(() => {
        if (l.trigger && l.valueNode && a && u && v && x && h) {
          const b = l.trigger.getBoundingClientRect(),
            k = u.getBoundingClientRect(),
            _ = l.valueNode.getBoundingClientRect(),
            T = h.getBoundingClientRect();
          if (l.dir !== "rtl") {
            const ee = T.left - k.left,
              Z = _.left - ee,
              Me = b.left - Z,
              Re = b.width + Me,
              rt = Math.max(Re, k.width),
              Ke = window.innerWidth - Lt,
              Rn = cd(Z, [Lt, Ke - rt]);
            (a.style.minWidth = Re + "px"), (a.style.left = Rn + "px");
          } else {
            const ee = k.right - T.right,
              Z = window.innerWidth - _.right - ee,
              Me = window.innerWidth - b.right - Z,
              Re = b.width + Me,
              rt = Math.max(Re, k.width),
              Ke = window.innerWidth - Lt,
              Rn = cd(Z, [Lt, Ke - rt]);
            (a.style.minWidth = Re + "px"), (a.style.right = Rn + "px");
          }
          const L = d(),
            O = window.innerHeight - Lt * 2,
            K = v.scrollHeight,
            W = window.getComputedStyle(u),
            F = parseInt(W.borderTopWidth, 10),
            H = parseInt(W.paddingTop, 10),
            j = parseInt(W.borderBottomWidth, 10),
            R = parseInt(W.paddingBottom, 10),
            A = F + H + K + R + j,
            B = Math.min(x.offsetHeight * 5, A),
            M = window.getComputedStyle(v),
            I = parseInt(M.paddingTop, 10),
            Q = parseInt(M.paddingBottom, 10),
            re = b.top + b.height / 2 - Lt,
            ve = O - re,
            Y = x.offsetHeight / 2,
            z = x.offsetTop + Y,
            J = F + H + z,
            ue = A - J;
          if (J <= re) {
            const ee = x === L[L.length - 1].ref.current;
            a.style.bottom = "0px";
            const Z = u.clientHeight - v.offsetTop - v.offsetHeight,
              Me = Math.max(ve, Y + (ee ? Q : 0) + Z + j),
              Re = J + Me;
            a.style.height = Re + "px";
          } else {
            const ee = x === L[0].ref.current;
            a.style.top = "0px";
            const Me = Math.max(re, F + v.offsetTop + (ee ? I : 0) + Y) + ue;
            (a.style.height = Me + "px"), (v.scrollTop = J - re + v.offsetTop);
          }
          (a.style.margin = `${Lt}px 0`),
            (a.style.minHeight = B + "px"),
            (a.style.maxHeight = O + "px"),
            r == null || r(),
            requestAnimationFrame(() => (g.current = !0));
        }
      }, [d, l.trigger, l.valueNode, a, u, v, x, h, l.dir, r]);
    ut(() => y(), [y]);
    const [S, E] = c.useState();
    ut(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const P = c.useCallback(
      (b) => {
        b && w.current === !0 && (y(), m == null || m(), (w.current = !1));
      },
      [y, m]
    );
    return c.createElement(
      Zw,
      {
        scope: n,
        contentWrapper: a,
        shouldExpandOnScrollRef: g,
        onScrollButtonChange: P,
      },
      c.createElement(
        "div",
        {
          ref: s,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S,
          },
        },
        c.createElement(
          $e.div,
          te({}, o, {
            ref: p,
            style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
          })
        )
      )
    );
  }),
  Od = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Lt,
        ...l
      } = e,
      i = Ic(n);
    return c.createElement(
      Z1,
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
  [Zw, jc] = Hr(Dr, {}),
  Ad = "SelectViewport",
  Jw = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Gn(Ad, n),
      l = jc(Ad, n),
      i = Le(t, o.onViewportChange),
      a = c.useRef(0);
    return c.createElement(
      c.Fragment,
      null,
      c.createElement("style", {
        dangerouslySetInnerHTML: {
          __html:
            "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
        },
      }),
      c.createElement(
        Ai.Slot,
        { scope: n },
        c.createElement(
          $e.div,
          te({ "data-radix-select-viewport": "", role: "presentation" }, r, {
            ref: i,
            style: {
              position: "relative",
              flex: 1,
              overflow: "auto",
              ...r.style,
            },
            onScroll: Ee(r.onScroll, (s) => {
              const u = s.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: p } = l;
              if (p != null && p.current && f) {
                const d = Math.abs(a.current - u.scrollTop);
                if (d > 0) {
                  const g = window.innerHeight - Lt * 2,
                    w = parseFloat(f.style.minHeight),
                    v = parseFloat(f.style.height),
                    x = Math.max(w, v);
                  if (x < g) {
                    const h = x + d,
                      m = Math.min(g, h),
                      y = h - m;
                    (f.style.height = m + "px"),
                      f.style.bottom === "0px" &&
                        ((u.scrollTop = y > 0 ? y : 0),
                        (f.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = u.scrollTop;
            }),
          })
        )
      )
    );
  }),
  qw = "SelectGroup",
  [Y2, ex] = Hr(qw),
  tx = "SelectLabel",
  nx = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = ex(tx, n);
    return c.createElement($e.div, te({ id: o.id }, r, { ref: t }));
  }),
  ks = "SelectItem",
  [rx, rh] = Hr(ks),
  ox = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: l,
        ...i
      } = e,
      a = Qn(ks, n),
      s = Gn(ks, n),
      u = a.value === r,
      [f, p] = c.useState(l ?? ""),
      [d, g] = c.useState(!1),
      w = Le(t, (h) => {
        var m;
        return (m = s.itemRefCallback) === null || m === void 0
          ? void 0
          : m.call(s, h, r, o);
      }),
      v = $m(),
      x = () => {
        o || (a.onValueChange(r), a.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return c.createElement(
      rx,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: c.useCallback((h) => {
          p((m) => {
            var y;
            return (
              m ||
              ((y = h == null ? void 0 : h.textContent) !== null && y !== void 0
                ? y
                : ""
              ).trim()
            );
          });
        }, []),
      },
      c.createElement(
        Ai.ItemSlot,
        { scope: n, value: r, disabled: o, textValue: f },
        c.createElement(
          $e.div,
          te(
            {
              role: "option",
              "aria-labelledby": v,
              "data-highlighted": d ? "" : void 0,
              "aria-selected": u && d,
              "data-state": u ? "checked" : "unchecked",
              "aria-disabled": o || void 0,
              "data-disabled": o ? "" : void 0,
              tabIndex: o ? void 0 : -1,
            },
            i,
            {
              ref: w,
              onFocus: Ee(i.onFocus, () => g(!0)),
              onBlur: Ee(i.onBlur, () => g(!1)),
              onPointerUp: Ee(i.onPointerUp, x),
              onPointerMove: Ee(i.onPointerMove, (h) => {
                if (o) {
                  var m;
                  (m = s.onItemLeave) === null || m === void 0 || m.call(s);
                } else h.currentTarget.focus({ preventScroll: !0 });
              }),
              onPointerLeave: Ee(i.onPointerLeave, (h) => {
                if (h.currentTarget === document.activeElement) {
                  var m;
                  (m = s.onItemLeave) === null || m === void 0 || m.call(s);
                }
              }),
              onKeyDown: Ee(i.onKeyDown, (h) => {
                var m;
                (((m = s.searchRef) === null || m === void 0
                  ? void 0
                  : m.current) !== "" &&
                  h.key === " ") ||
                  (Mw.includes(h.key) && x(),
                  h.key === " " && h.preventDefault());
              }),
            }
          )
        )
      )
    );
  }),
  hl = "SelectItemText",
  lx = c.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...l } = e,
      i = Qn(hl, n),
      a = Gn(hl, n),
      s = rh(hl, n),
      u = Fw(hl, n),
      [f, p] = c.useState(null),
      d = Le(
        t,
        (h) => p(h),
        s.onItemTextChange,
        (h) => {
          var m;
          return (m = a.itemTextRefCallback) === null || m === void 0
            ? void 0
            : m.call(a, h, s.value, s.disabled);
        }
      ),
      g = f == null ? void 0 : f.textContent,
      w = c.useMemo(
        () =>
          c.createElement(
            "option",
            { key: s.value, value: s.value, disabled: s.disabled },
            g
          ),
        [s.disabled, s.value, g]
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: x } = u;
    return (
      ut(() => (v(w), () => x(w)), [v, x, w]),
      c.createElement(
        c.Fragment,
        null,
        c.createElement($e.span, te({ id: s.textId }, l, { ref: d })),
        s.isSelected && i.valueNode && !i.valueNodeHasChildren
          ? Pn.createPortal(l.children, i.valueNode)
          : null
      )
    );
  }),
  ix = "SelectItemIndicator",
  ax = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return rh(ix, n).isSelected
      ? c.createElement($e.span, te({ "aria-hidden": !0 }, r, { ref: t }))
      : null;
  }),
  Ld = "SelectScrollUpButton",
  sx = c.forwardRef((e, t) => {
    const n = Gn(Ld, e.__scopeSelect),
      r = jc(Ld, e.__scopeSelect),
      [o, l] = c.useState(!1),
      i = Le(t, r.onScrollButtonChange);
    return (
      ut(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const f = s.scrollTop > 0;
            l(f);
          };
          var a = u;
          const s = n.viewport;
          return (
            u(),
            s.addEventListener("scroll", u),
            () => s.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.createElement(
            oh,
            te({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: s } = n;
                a && s && (a.scrollTop = a.scrollTop - s.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  Dd = "SelectScrollDownButton",
  cx = c.forwardRef((e, t) => {
    const n = Gn(Dd, e.__scopeSelect),
      r = jc(Dd, e.__scopeSelect),
      [o, l] = c.useState(!1),
      i = Le(t, r.onScrollButtonChange);
    return (
      ut(() => {
        if (n.viewport && n.isPositioned) {
          let u = function () {
            const f = s.scrollHeight - s.clientHeight,
              p = Math.ceil(s.scrollTop) < f;
            l(p);
          };
          var a = u;
          const s = n.viewport;
          return (
            u(),
            s.addEventListener("scroll", u),
            () => s.removeEventListener("scroll", u)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.createElement(
            oh,
            te({}, e, {
              ref: i,
              onAutoScroll: () => {
                const { viewport: a, selectedItem: s } = n;
                a && s && (a.scrollTop = a.scrollTop + s.offsetHeight);
              },
            })
          )
        : null
    );
  }),
  oh = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      l = Gn("SelectScrollButton", n),
      i = c.useRef(null),
      a = Li(n),
      s = c.useCallback(() => {
        i.current !== null &&
          (window.clearInterval(i.current), (i.current = null));
      }, []);
    return (
      c.useEffect(() => () => s(), [s]),
      ut(() => {
        var u;
        const f = a().find((p) => p.ref.current === document.activeElement);
        f == null ||
          (u = f.ref.current) === null ||
          u === void 0 ||
          u.scrollIntoView({ block: "nearest" });
      }, [a]),
      c.createElement(
        $e.div,
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
            s();
          }),
        })
      )
    );
  }),
  ux = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return c.createElement($e.div, te({ "aria-hidden": !0 }, r, { ref: t }));
  });
function lh(e) {
  return e === "" || e === void 0;
}
const ih = c.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = c.useRef(null),
    l = Le(t, o),
    i = ew(n);
  return (
    c.useEffect(() => {
      const a = o.current,
        s = window.HTMLSelectElement.prototype,
        f = Object.getOwnPropertyDescriptor(s, "value").set;
      if (i !== n && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(a, n), a.dispatchEvent(p);
      }
    }, [i, n]),
    c.createElement(
      tw,
      { asChild: !0 },
      c.createElement("select", te({}, r, { ref: l, defaultValue: n }))
    )
  );
});
ih.displayName = "BubbleSelect";
function ah(e) {
  const t = Ht(e),
    n = c.useRef(""),
    r = c.useRef(0),
    o = c.useCallback(
      (i) => {
        const a = n.current + i;
        t(a),
          (function s(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => s(""), 1e3));
          })(a);
      },
      [t]
    ),
    l = c.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, l];
}
function sh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    l = n ? e.indexOf(n) : -1;
  let i = dx(e, Math.max(l, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const s = i.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return s !== n ? s : void 0;
}
function dx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const fx = Bw,
  ch = Hw,
  px = Uw,
  mx = Yw,
  hx = Kw,
  uh = Xw,
  vx = Jw,
  dh = nx,
  fh = ox,
  gx = lx,
  yx = ax,
  ph = sx,
  mh = cx,
  hh = ux;
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var wx = {
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
 */ const xx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Di = (e, t) => {
  const n = c.forwardRef(
    (
      {
        color: r = "currentColor",
        size: o = 24,
        strokeWidth: l = 2,
        absoluteStrokeWidth: i,
        className: a = "",
        children: s,
        ...u
      },
      f
    ) =>
      c.createElement(
        "svg",
        {
          ref: f,
          ...wx,
          width: o,
          height: o,
          stroke: r,
          strokeWidth: i ? (Number(l) * 24) / Number(o) : l,
          className: ["lucide", `lucide-${xx(e)}`, a].join(" "),
          ...u,
        },
        [
          ...t.map(([p, d]) => c.createElement(p, d)),
          ...(Array.isArray(s) ? s : [s]),
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
 */ const Sx = Di("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vh = Di("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = Di("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = Di("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function gh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = gh(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function bx() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = gh(e)) && (r && (r += " "), (r += t));
  return r;
}
const zc = "-";
function kx(e) {
  const t = $x(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const a = i.split(zc);
    return a[0] === "" && a.length !== 1 && a.shift(), yh(a, t) || Px(i);
  }
  function l(i, a) {
    const s = n[i] || [];
    return a && r[i] ? [...s, ...r[i]] : s;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: l };
}
function yh(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? yh(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const l = e.join(zc);
  return (i = t.validators.find(({ validator: a }) => a(l))) == null
    ? void 0
    : i.classGroupId;
}
const Md = /^\[(.+)\]$/;
function Px(e) {
  if (Md.test(e)) {
    const t = Md.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function $x(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    Nx(Object.entries(e.classGroups), n).forEach(([l, i]) => {
      Ps(i, r, l, t);
    }),
    r
  );
}
function Ps(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const l = o === "" ? t : Id(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Rx(o)) {
        Ps(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([l, i]) => {
      Ps(i, Id(t, l), n, r);
    });
  });
}
function Id(e, t) {
  let n = e;
  return (
    t.split(zc).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function Rx(e) {
  return e.isThemeGetter;
}
function Nx(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((l) =>
          typeof l == "string"
            ? t + l
            : typeof l == "object"
            ? Object.fromEntries(Object.entries(l).map(([i, a]) => [t + i, a]))
            : l
        );
        return [n, o];
      })
    : e;
}
function Tx(e) {
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
const wh = "!";
function _x(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (i) {
    const a = [];
    let s = 0,
      u = 0,
      f;
    for (let v = 0; v < i.length; v++) {
      let x = i[v];
      if (s === 0) {
        if (x === r && (n || i.slice(v, v + o) === t)) {
          a.push(i.slice(u, v)), (u = v + o);
          continue;
        }
        if (x === "/") {
          f = v;
          continue;
        }
      }
      x === "[" ? s++ : x === "]" && s--;
    }
    const p = a.length === 0 ? i : i.substring(u),
      d = p.startsWith(wh),
      g = d ? p.substring(1) : p,
      w = f && f > u ? f - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: d,
      baseClassName: g,
      maybePostfixModifierPosition: w,
    };
  };
}
function Ox(e) {
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
function Ax(e) {
  return { cache: Tx(e.cacheSize), splitModifiers: _x(e), ...kx(e) };
}
const Lx = /\s+/;
function Dx(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    l = new Set();
  return e
    .trim()
    .split(Lx)
    .map((i) => {
      const {
        modifiers: a,
        hasImportantModifier: s,
        baseClassName: u,
        maybePostfixModifierPosition: f,
      } = n(i);
      let p = r(f ? u.substring(0, f) : u),
        d = !!f;
      if (!p) {
        if (!f) return { isTailwindClass: !1, originalClassName: i };
        if (((p = r(u)), !p))
          return { isTailwindClass: !1, originalClassName: i };
        d = !1;
      }
      const g = Ox(a).join(":");
      return {
        isTailwindClass: !0,
        modifierId: s ? g + wh : g,
        classGroupId: p,
        originalClassName: i,
        hasPostfixModifier: d,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: a, classGroupId: s, hasPostfixModifier: u } = i,
        f = a + s;
      return l.has(f)
        ? !1
        : (l.add(f), o(s, u).forEach((p) => l.add(a + p)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(" ");
}
function Mx() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = xh(t)) && (r && (r += " "), (r += n));
  return r;
}
function xh(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = xh(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function Ix(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(s) {
    const u = t.reduce((f, p) => p(f), e());
    return (n = Ax(u)), (r = n.cache.get), (o = n.cache.set), (l = a), a(s);
  }
  function a(s) {
    const u = r(s);
    if (u) return u;
    const f = Dx(s, n);
    return o(s, f), f;
  }
  return function () {
    return l(Mx.apply(null, arguments));
  };
}
function ae(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const Sh = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  jx = /^\d+\/\d+$/,
  zx = new Set(["px", "full", "screen"]),
  Fx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Bx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Wx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Hx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Vx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ot(e) {
  return Dn(e) || zx.has(e) || jx.test(e);
}
function Jt(e) {
  return Vr(e, "length", Jx);
}
function Dn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function vl(e) {
  return Vr(e, "number", Dn);
}
function to(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ux(e) {
  return e.endsWith("%") && Dn(e.slice(0, -1));
}
function U(e) {
  return Sh.test(e);
}
function qt(e) {
  return Fx.test(e);
}
const Yx = new Set(["length", "size", "percentage"]);
function Kx(e) {
  return Vr(e, Yx, Eh);
}
function Xx(e) {
  return Vr(e, "position", Eh);
}
const Qx = new Set(["image", "url"]);
function Gx(e) {
  return Vr(e, Qx, eS);
}
function Zx(e) {
  return Vr(e, "", qx);
}
function no() {
  return !0;
}
function Vr(e, t, n) {
  const r = Sh.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Jx(e) {
  return Bx.test(e) && !Wx.test(e);
}
function Eh() {
  return !1;
}
function qx(e) {
  return Hx.test(e);
}
function eS(e) {
  return Vx.test(e);
}
function tS() {
  const e = ae("colors"),
    t = ae("spacing"),
    n = ae("blur"),
    r = ae("brightness"),
    o = ae("borderColor"),
    l = ae("borderRadius"),
    i = ae("borderSpacing"),
    a = ae("borderWidth"),
    s = ae("contrast"),
    u = ae("grayscale"),
    f = ae("hueRotate"),
    p = ae("invert"),
    d = ae("gap"),
    g = ae("gradientColorStops"),
    w = ae("gradientColorStopPositions"),
    v = ae("inset"),
    x = ae("margin"),
    h = ae("opacity"),
    m = ae("padding"),
    y = ae("saturate"),
    S = ae("scale"),
    E = ae("sepia"),
    P = ae("skew"),
    b = ae("space"),
    k = ae("translate"),
    _ = () => ["auto", "contain", "none"],
    T = () => ["auto", "hidden", "clip", "visible", "scroll"],
    L = () => ["auto", U, t],
    O = () => [U, t],
    K = () => ["", Ot, Jt],
    W = () => ["auto", Dn, U],
    F = () => [
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
    H = () => ["solid", "dashed", "dotted", "double", "none"],
    j = () => [
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
    R = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    A = () => ["", "0", U],
    B = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    M = () => [Dn, vl],
    I = () => [Dn, U];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [no],
      spacing: [Ot, Jt],
      blur: ["none", "", qt, U],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", qt, U],
      borderSpacing: O(),
      borderWidth: K(),
      contrast: M(),
      grayscale: A(),
      hueRotate: I(),
      invert: A(),
      gap: O(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ux, Jt],
      inset: L(),
      margin: L(),
      opacity: M(),
      padding: O(),
      saturate: M(),
      scale: M(),
      sepia: A(),
      skew: I(),
      space: O(),
      translate: O(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", U] }],
      container: ["container"],
      columns: [{ columns: [qt] }],
      "break-after": [{ "break-after": B() }],
      "break-before": [{ "break-before": B() }],
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
      "object-position": [{ object: [...F(), U] }],
      overflow: [{ overflow: T() }],
      "overflow-x": [{ "overflow-x": T() }],
      "overflow-y": [{ "overflow-y": T() }],
      overscroll: [{ overscroll: _() }],
      "overscroll-x": [{ "overscroll-x": _() }],
      "overscroll-y": [{ "overscroll-y": _() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [v] }],
      "inset-x": [{ "inset-x": [v] }],
      "inset-y": [{ "inset-y": [v] }],
      start: [{ start: [v] }],
      end: [{ end: [v] }],
      top: [{ top: [v] }],
      right: [{ right: [v] }],
      bottom: [{ bottom: [v] }],
      left: [{ left: [v] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", to, U] }],
      basis: [{ basis: L() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", U] }],
      grow: [{ grow: A() }],
      shrink: [{ shrink: A() }],
      order: [{ order: ["first", "last", "none", to, U] }],
      "grid-cols": [{ "grid-cols": [no] }],
      "col-start-end": [{ col: ["auto", { span: ["full", to, U] }, U] }],
      "col-start": [{ "col-start": W() }],
      "col-end": [{ "col-end": W() }],
      "grid-rows": [{ "grid-rows": [no] }],
      "row-start-end": [{ row: ["auto", { span: [to, U] }, U] }],
      "row-start": [{ "row-start": W() }],
      "row-end": [{ "row-end": W() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", U] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", U] }],
      gap: [{ gap: [d] }],
      "gap-x": [{ "gap-x": [d] }],
      "gap-y": [{ "gap-y": [d] }],
      "justify-content": [{ justify: ["normal", ...R()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...R(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...R(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [m] }],
      px: [{ px: [m] }],
      py: [{ py: [m] }],
      ps: [{ ps: [m] }],
      pe: [{ pe: [m] }],
      pt: [{ pt: [m] }],
      pr: [{ pr: [m] }],
      pb: [{ pb: [m] }],
      pl: [{ pl: [m] }],
      m: [{ m: [x] }],
      mx: [{ mx: [x] }],
      my: [{ my: [x] }],
      ms: [{ ms: [x] }],
      me: [{ me: [x] }],
      mt: [{ mt: [x] }],
      mr: [{ mr: [x] }],
      mb: [{ mb: [x] }],
      ml: [{ ml: [x] }],
      "space-x": [{ "space-x": [b] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [b] }],
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
            { screen: [qt] },
            qt,
          ],
        },
      ],
      h: [{ h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [U, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", qt, Jt] }],
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
            vl,
          ],
        },
      ],
      "font-family": [{ font: [no] }],
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
      "line-clamp": [{ "line-clamp": ["none", Dn, vl] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Ot,
            U,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", U] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", U] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [h] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [h] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Ot, Jt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Ot, U] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: O() }],
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
      "bg-opacity": [{ "bg-opacity": [h] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...F(), Xx] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Kx] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Gx,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [w] }],
      "gradient-via-pos": [{ via: [w] }],
      "gradient-to-pos": [{ to: [w] }],
      "gradient-from": [{ from: [g] }],
      "gradient-via": [{ via: [g] }],
      "gradient-to": [{ to: [g] }],
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
      "border-w": [{ border: [a] }],
      "border-w-x": [{ "border-x": [a] }],
      "border-w-y": [{ "border-y": [a] }],
      "border-w-s": [{ "border-s": [a] }],
      "border-w-e": [{ "border-e": [a] }],
      "border-w-t": [{ "border-t": [a] }],
      "border-w-r": [{ "border-r": [a] }],
      "border-w-b": [{ "border-b": [a] }],
      "border-w-l": [{ "border-l": [a] }],
      "border-opacity": [{ "border-opacity": [h] }],
      "border-style": [{ border: [...H(), "hidden"] }],
      "divide-x": [{ "divide-x": [a] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [a] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [h] }],
      "divide-style": [{ divide: H() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...H()] }],
      "outline-offset": [{ "outline-offset": [Ot, U] }],
      "outline-w": [{ outline: [Ot, Jt] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: K() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [h] }],
      "ring-offset-w": [{ "ring-offset": [Ot, Jt] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", qt, Zx] }],
      "shadow-color": [{ shadow: [no] }],
      opacity: [{ opacity: [h] }],
      "mix-blend": [{ "mix-blend": [...j(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": j() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [s] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", qt, U] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [f] }],
      invert: [{ invert: [p] }],
      saturate: [{ saturate: [y] }],
      sepia: [{ sepia: [E] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [s] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [f] }],
      "backdrop-invert": [{ "backdrop-invert": [p] }],
      "backdrop-opacity": [{ "backdrop-opacity": [h] }],
      "backdrop-saturate": [{ "backdrop-saturate": [y] }],
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
      duration: [{ duration: I() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", U] }],
      delay: [{ delay: I() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", U] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [S] }],
      "scale-x": [{ "scale-x": [S] }],
      "scale-y": [{ "scale-y": [S] }],
      rotate: [{ rotate: [to, U] }],
      "translate-x": [{ "translate-x": [k] }],
      "translate-y": [{ "translate-y": [k] }],
      "skew-x": [{ "skew-x": [P] }],
      "skew-y": [{ "skew-y": [P] }],
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
      "scroll-m": [{ "scroll-m": O() }],
      "scroll-mx": [{ "scroll-mx": O() }],
      "scroll-my": [{ "scroll-my": O() }],
      "scroll-ms": [{ "scroll-ms": O() }],
      "scroll-me": [{ "scroll-me": O() }],
      "scroll-mt": [{ "scroll-mt": O() }],
      "scroll-mr": [{ "scroll-mr": O() }],
      "scroll-mb": [{ "scroll-mb": O() }],
      "scroll-ml": [{ "scroll-ml": O() }],
      "scroll-p": [{ "scroll-p": O() }],
      "scroll-px": [{ "scroll-px": O() }],
      "scroll-py": [{ "scroll-py": O() }],
      "scroll-ps": [{ "scroll-ps": O() }],
      "scroll-pe": [{ "scroll-pe": O() }],
      "scroll-pt": [{ "scroll-pt": O() }],
      "scroll-pr": [{ "scroll-pr": O() }],
      "scroll-pb": [{ "scroll-pb": O() }],
      "scroll-pl": [{ "scroll-pl": O() }],
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
      "stroke-w": [{ stroke: [Ot, Jt, vl] }],
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
const nS = Ix(tS);
function De(...e) {
  return nS(bx(e));
}
const rS = fx,
  oS = px,
  Ch = c.forwardRef(({ className: e, children: t, ...n }, r) =>
    C.jsxs(ch, {
      ref: r,
      className: De(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none",
        e
      ),
      ...n,
      children: [
        t,
        C.jsx(mx, {
          asChild: !0,
          children: C.jsx(vh, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
Ch.displayName = ch.displayName;
const bh = c.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(ph, {
    ref: n,
    className: De("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: C.jsx(Ex, { className: "h-4 w-4" }),
  })
);
bh.displayName = ph.displayName;
const kh = c.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(mh, {
    ref: n,
    className: De("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: C.jsx(vh, { className: "h-4 w-4" }),
  })
);
kh.displayName = mh.displayName;
const Ph = c.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    C.jsx(hx, {
      children: C.jsxs(uh, {
        ref: o,
        className: De(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          C.jsx(bh, {}),
          C.jsx(vx, {
            className: De(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          C.jsx(kh, {}),
        ],
      }),
    })
);
Ph.displayName = uh.displayName;
const lS = c.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(dh, {
    ref: n,
    className: De("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
lS.displayName = dh.displayName;
const $h = c.forwardRef(({ className: e, children: t, ...n }, r) =>
  C.jsxs(fh, {
    ref: r,
    className: De(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    ...n,
    children: [
      C.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: C.jsx(yx, { children: C.jsx(Sx, { className: "h-4 w-4" }) }),
      }),
      C.jsx(gx, { children: t }),
    ],
  })
);
$h.displayName = fh.displayName;
const iS = c.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(hh, {
    ref: n,
    className: De("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e),
    ...t,
  })
);
iS.displayName = hh.displayName;
function Rh(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Rh(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function aS() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Rh(e)) && (r && (r += " "), (r += t));
  return r;
}
const jd = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  zd = aS,
  sS = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return zd(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: l } = t,
      i = Object.keys(o).map((u) => {
        const f = n == null ? void 0 : n[u],
          p = l == null ? void 0 : l[u];
        if (f === null) return null;
        const d = jd(f) || jd(p);
        return o[u][d];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [p, d] = f;
          return d === void 0 || (u[p] = d), u;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: p, className: d, ...g } = f;
              return Object.entries(g).every((w) => {
                let [v, x] = w;
                return Array.isArray(x)
                  ? x.includes({ ...l, ...a }[v])
                  : { ...l, ...a }[v] === x;
              })
                ? [...u, p, d]
                : u;
            }, []);
    return zd(
      e,
      i,
      s,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  },
  cS = sS(
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
  on = c.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const i = r ? Ar : "button";
      return C.jsx(i, {
        className: De(cS({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    }
  );
on.displayName = "Button";
const uS = ({ onStart: e }) => {
    const [t, n] = c.useState([]),
      [r, o] = c.useState(!0),
      [l, i] = c.useState(null),
      [a, s] = c.useState(null);
    c.useEffect(() => {
      fetch("/tracks.json")
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
        s(p);
      },
      f = () => {
        a
          ? (console.log("Starting with Course ID:", a), e(a))
          : console.log("No course selected!");
      };
    return r
      ? C.jsx("div", { children: "Loading..." })
      : l
      ? C.jsxs("div", { children: ["Error: ", l] })
      : C.jsxs("div", {
          className: "flex h-screen items-center justify-center flex-col",
          children: [
            C.jsx("div", {
              className: "flex justify-center opacity-90 -mt-20",
              children: C.jsx("img", {
                src: "./glide-logo.png",
                className: "w-2/4",
                alt: "Logo",
              }),
            }),
            C.jsxs("div", {
              className: "mt-10",
              children: [
                C.jsxs(rS, {
                  onValueChange: u,
                  children: [
                    C.jsx(Ch, {
                      className: "w-[300px]",
                      children: C.jsx(oS, { placeholder: "Valitse rata" }),
                    }),
                    C.jsx(Ph, {
                      className: "overflow-auto",
                      children: t.map((p) =>
                        C.jsx($h, { value: p.id, children: p.name }, p.id)
                      ),
                    }),
                  ],
                }),
                C.jsx(on, {
                  variant: "secondary",
                  className: "w-full my-3 bg-green-700 text-white",
                  onClick: f,
                  children: "Aloita",
                }),
              ],
            }),
            C.jsx("p", {
              className: "text-xs text-slate-500",
              children: "Version 0.3",
            }),
          ],
        });
  },
  dS = [
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
  fS = { courses: dS };
var pS = (e) => {
    switch (e) {
      case "success":
        return vS;
      case "info":
        return yS;
      case "warning":
        return gS;
      case "error":
        return wS;
      default:
        return null;
    }
  },
  mS = Array(12).fill(0),
  hS = ({ visible: e }) =>
    $.createElement(
      "div",
      { className: "sonner-loading-wrapper", "data-visible": e },
      $.createElement(
        "div",
        { className: "sonner-spinner" },
        mS.map((t, n) =>
          $.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  vS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  gS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  yS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  wS = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  xS = () => {
    let [e, t] = $.useState(document.hidden);
    return (
      $.useEffect(() => {
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
  $s = 1,
  SS = class {
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
                : $s++,
            l = this.toasts.find((a) => a.id === o),
            i = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            l
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === o
                    ? (this.publish({ ...a, ...e, id: o, title: n }),
                      { ...a, ...e, id: o, dismissible: i, title: n })
                    : a
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
                if (CS(l) && !l.ok) {
                  o = !1;
                  let i =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    a =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: a,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let i =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    a =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: i,
                    description: a,
                  });
                }
              })
              .catch(async (l) => {
                if (t.error !== void 0) {
                  o = !1;
                  let i =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    a =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: i,
                    description: a,
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
          let n = (t == null ? void 0 : t.id) || $s++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.subscribers = []),
        (this.toasts = []);
    }
  },
  Xe = new SS(),
  ES = (e, t) => {
    let n = (t == null ? void 0 : t.id) || $s++;
    return Xe.addToast({ title: e, ...t, id: n }), n;
  },
  CS = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  bS = ES,
  kS = () => Xe.toasts,
  Fd = Object.assign(
    bS,
    {
      success: Xe.success,
      info: Xe.info,
      warning: Xe.warning,
      error: Xe.error,
      custom: Xe.custom,
      message: Xe.message,
      promise: Xe.promise,
      dismiss: Xe.dismiss,
      loading: Xe.loading,
    },
    { getHistory: kS }
  );
function PS(e, { insertAt: t } = {}) {
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
PS(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function gl(e) {
  return e.label !== void 0;
}
var $S = 3,
  RS = "32px",
  NS = 4e3,
  TS = 356,
  _S = 14,
  OS = 20,
  AS = 200;
function LS(...e) {
  return e.filter(Boolean).join(" ");
}
var DS = (e) => {
  var t, n, r, o, l, i, a, s, u, f;
  let {
      invert: p,
      toast: d,
      unstyled: g,
      interacting: w,
      setHeights: v,
      visibleToasts: x,
      heights: h,
      index: m,
      toasts: y,
      expanded: S,
      removeToast: E,
      defaultRichColors: P,
      closeButton: b,
      style: k,
      cancelButtonStyle: _,
      actionButtonStyle: T,
      className: L = "",
      descriptionClassName: O = "",
      duration: K,
      position: W,
      gap: F,
      loadingIcon: H,
      expandByDefault: j,
      classNames: R,
      icons: A,
      closeButtonAriaLabel: B = "Close toast",
      pauseWhenPageIsHidden: M,
      cn: I,
    } = e,
    [Q, re] = $.useState(!1),
    [ve, Y] = $.useState(!1),
    [z, J] = $.useState(!1),
    [ue, q] = $.useState(!1),
    [ee, Z] = $.useState(0),
    [Me, Re] = $.useState(0),
    rt = $.useRef(null),
    Ke = $.useRef(null),
    Rn = m === 0,
    zi = m + 1 <= x,
    Be = d.type,
    Qt = d.dismissible !== !1,
    Zn = d.className || "",
    j0 = d.descriptionClassName || "",
    Uo = $.useMemo(
      () => h.findIndex((V) => V.toastId === d.id) || 0,
      [h, d.id]
    ),
    z0 = $.useMemo(() => {
      var V;
      return (V = d.closeButton) != null ? V : b;
    }, [d.closeButton, b]),
    Qc = $.useMemo(() => d.duration || K || NS, [d.duration, K]),
    Fi = $.useRef(0),
    Jn = $.useRef(0),
    Gc = $.useRef(0),
    qn = $.useRef(null),
    [Zc, F0] = W.split("-"),
    Jc = $.useMemo(
      () => h.reduce((V, ie, oe) => (oe >= Uo ? V : V + ie.height), 0),
      [h, Uo]
    ),
    qc = xS(),
    B0 = d.invert || p,
    Bi = Be === "loading";
  (Jn.current = $.useMemo(() => Uo * F + Jc, [Uo, Jc])),
    $.useEffect(() => {
      re(!0);
    }, []),
    $.useLayoutEffect(() => {
      if (!Q) return;
      let V = Ke.current,
        ie = V.style.height;
      V.style.height = "auto";
      let oe = V.getBoundingClientRect().height;
      (V.style.height = ie),
        Re(oe),
        v((St) =>
          St.find((Et) => Et.toastId === d.id)
            ? St.map((Et) => (Et.toastId === d.id ? { ...Et, height: oe } : Et))
            : [{ toastId: d.id, height: oe, position: d.position }, ...St]
        );
    }, [Q, d.title, d.description, v, d.id]);
  let Gt = $.useCallback(() => {
    Y(!0),
      Z(Jn.current),
      v((V) => V.filter((ie) => ie.toastId !== d.id)),
      setTimeout(() => {
        E(d);
      }, AS);
  }, [d, E, v, Jn]);
  $.useEffect(() => {
    if (
      (d.promise && Be === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let V,
      ie = Qc;
    return (
      S || w || (M && qc)
        ? (() => {
            if (Gc.current < Fi.current) {
              let oe = new Date().getTime() - Fi.current;
              ie = ie - oe;
            }
            Gc.current = new Date().getTime();
          })()
        : ie !== 1 / 0 &&
          ((Fi.current = new Date().getTime()),
          (V = setTimeout(() => {
            var oe;
            (oe = d.onAutoClose) == null || oe.call(d, d), Gt();
          }, ie))),
      () => clearTimeout(V)
    );
  }, [S, w, j, d, Qc, Gt, d.promise, Be, M, qc]),
    $.useEffect(() => {
      let V = Ke.current;
      if (V) {
        let ie = V.getBoundingClientRect().height;
        return (
          Re(ie),
          v((oe) => [
            { toastId: d.id, height: ie, position: d.position },
            ...oe,
          ]),
          () => v((oe) => oe.filter((St) => St.toastId !== d.id))
        );
      }
    }, [v, d.id]),
    $.useEffect(() => {
      d.delete && Gt();
    }, [Gt, d.delete]);
  function W0() {
    return A != null && A.loading
      ? $.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Be === "loading" },
          A.loading
        )
      : H
      ? $.createElement(
          "div",
          { className: "sonner-loader", "data-visible": Be === "loading" },
          H
        )
      : $.createElement(hS, { visible: Be === "loading" });
  }
  return $.createElement(
    "li",
    {
      "aria-live": d.important ? "assertive" : "polite",
      "aria-atomic": "true",
      role: "status",
      tabIndex: 0,
      ref: Ke,
      className: I(
        L,
        Zn,
        R == null ? void 0 : R.toast,
        (t = d == null ? void 0 : d.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[Be],
        (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[Be]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = d.richColors) != null ? r : P,
      "data-styled": !(d.jsx || d.unstyled || g),
      "data-mounted": Q,
      "data-promise": !!d.promise,
      "data-removed": ve,
      "data-visible": zi,
      "data-y-position": Zc,
      "data-x-position": F0,
      "data-index": m,
      "data-front": Rn,
      "data-swiping": z,
      "data-dismissible": Qt,
      "data-type": Be,
      "data-invert": B0,
      "data-swipe-out": ue,
      "data-expanded": !!(S || (j && Q)),
      style: {
        "--index": m,
        "--toasts-before": m,
        "--z-index": y.length - m,
        "--offset": `${ve ? ee : Jn.current}px`,
        "--initial-height": j ? "auto" : `${Me}px`,
        ...k,
        ...d.style,
      },
      onPointerDown: (V) => {
        Bi ||
          !Qt ||
          ((rt.current = new Date()),
          Z(Jn.current),
          V.target.setPointerCapture(V.pointerId),
          V.target.tagName !== "BUTTON" &&
            (J(!0), (qn.current = { x: V.clientX, y: V.clientY })));
      },
      onPointerUp: () => {
        var V, ie, oe, St;
        if (ue || !Qt) return;
        qn.current = null;
        let Et = Number(
            ((V = Ke.current) == null
              ? void 0
              : V.style.getPropertyValue("--swipe-amount").replace("px", "")) ||
              0
          ),
          Yo =
            new Date().getTime() -
            ((ie = rt.current) == null ? void 0 : ie.getTime()),
          H0 = Math.abs(Et) / Yo;
        if (Math.abs(Et) >= OS || H0 > 0.11) {
          Z(Jn.current),
            (oe = d.onDismiss) == null || oe.call(d, d),
            Gt(),
            q(!0);
          return;
        }
        (St = Ke.current) == null ||
          St.style.setProperty("--swipe-amount", "0px"),
          J(!1);
      },
      onPointerMove: (V) => {
        var ie;
        if (!qn.current || !Qt) return;
        let oe = V.clientY - qn.current.y,
          St = V.clientX - qn.current.x,
          Et = (Zc === "top" ? Math.min : Math.max)(0, oe),
          Yo = V.pointerType === "touch" ? 10 : 2;
        Math.abs(Et) > Yo
          ? (ie = Ke.current) == null ||
            ie.style.setProperty("--swipe-amount", `${oe}px`)
          : Math.abs(St) > Yo && (qn.current = null);
      },
    },
    z0 && !d.jsx
      ? $.createElement(
          "button",
          {
            "aria-label": B,
            "data-disabled": Bi,
            "data-close-button": !0,
            onClick:
              Bi || !Qt
                ? () => {}
                : () => {
                    var V;
                    Gt(), (V = d.onDismiss) == null || V.call(d, d);
                  },
            className: I(
              R == null ? void 0 : R.closeButton,
              (o = d == null ? void 0 : d.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          $.createElement(
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
            $.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            $.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        )
      : null,
    d.jsx || $.isValidElement(d.title)
      ? d.jsx || d.title
      : $.createElement(
          $.Fragment,
          null,
          Be || d.icon || d.promise
            ? $.createElement(
                "div",
                {
                  "data-icon": "",
                  className: I(
                    R == null ? void 0 : R.icon,
                    (l = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : l.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || W0()
                  : null,
                d.type !== "loading"
                  ? d.icon || (A == null ? void 0 : A[Be]) || pS(Be)
                  : null
              )
            : null,
          $.createElement(
            "div",
            {
              "data-content": "",
              className: I(
                R == null ? void 0 : R.content,
                (i = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : i.content
              ),
            },
            $.createElement(
              "div",
              {
                "data-title": "",
                className: I(
                  R == null ? void 0 : R.title,
                  (a = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              d.title
            ),
            d.description
              ? $.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: I(
                      O,
                      j0,
                      R == null ? void 0 : R.description,
                      (s = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : s.description
                    ),
                  },
                  d.description
                )
              : null
          ),
          $.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && gl(d.cancel)
            ? $.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || _,
                  onClick: (V) => {
                    var ie, oe;
                    gl(d.cancel) &&
                      Qt &&
                      ((oe = (ie = d.cancel).onClick) == null || oe.call(ie, V),
                      Gt());
                  },
                  className: I(
                    R == null ? void 0 : R.cancelButton,
                    (u = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : u.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          $.isValidElement(d.action)
            ? d.action
            : d.action && gl(d.action)
            ? $.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || T,
                  onClick: (V) => {
                    var ie, oe;
                    gl(d.action) &&
                      (V.defaultPrevented ||
                        ((oe = (ie = d.action).onClick) == null ||
                          oe.call(ie, V),
                        Gt()));
                  },
                  className: I(
                    R == null ? void 0 : R.actionButton,
                    (f = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : f.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function Bd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
var MS = (e) => {
  let {
      invert: t,
      position: n = "bottom-right",
      hotkey: r = ["altKey", "KeyT"],
      expand: o,
      closeButton: l,
      className: i,
      offset: a,
      theme: s = "light",
      richColors: u,
      duration: f,
      style: p,
      visibleToasts: d = $S,
      toastOptions: g,
      dir: w = Bd(),
      gap: v = _S,
      loadingIcon: x,
      icons: h,
      containerAriaLabel: m = "Notifications",
      pauseWhenPageIsHidden: y,
      cn: S = LS,
    } = e,
    [E, P] = $.useState([]),
    b = $.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(E.filter((M) => M.position).map((M) => M.position))
          )
        ),
      [E, n]
    ),
    [k, _] = $.useState([]),
    [T, L] = $.useState(!1),
    [O, K] = $.useState(!1),
    [W, F] = $.useState(
      s !== "system"
        ? s
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    H = $.useRef(null),
    j = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = $.useRef(null),
    A = $.useRef(!1),
    B = $.useCallback(
      (M) => {
        var I;
        ((I = E.find((Q) => Q.id === M.id)) != null && I.delete) ||
          Xe.dismiss(M.id),
          P((Q) => Q.filter(({ id: re }) => re !== M.id));
      },
      [E]
    );
  return (
    $.useEffect(
      () =>
        Xe.subscribe((M) => {
          if (M.dismiss) {
            P((I) => I.map((Q) => (Q.id === M.id ? { ...Q, delete: !0 } : Q)));
            return;
          }
          setTimeout(() => {
            Pc.flushSync(() => {
              P((I) => {
                let Q = I.findIndex((re) => re.id === M.id);
                return Q !== -1
                  ? [...I.slice(0, Q), { ...I[Q], ...M }, ...I.slice(Q + 1)]
                  : [M, ...I];
              });
            });
          });
        }),
      []
    ),
    $.useEffect(() => {
      if (s !== "system") {
        F(s);
        return;
      }
      s === "system" &&
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? F("dark")
          : F("light")),
        typeof window < "u" &&
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", ({ matches: M }) => {
              F(M ? "dark" : "light");
            });
    }, [s]),
    $.useEffect(() => {
      E.length <= 1 && L(!1);
    }, [E]),
    $.useEffect(() => {
      let M = (I) => {
        var Q, re;
        r.every((ve) => I[ve] || I.code === ve) &&
          (L(!0), (Q = H.current) == null || Q.focus()),
          I.code === "Escape" &&
            (document.activeElement === H.current ||
              ((re = H.current) != null &&
                re.contains(document.activeElement))) &&
            L(!1);
      };
      return (
        document.addEventListener("keydown", M),
        () => document.removeEventListener("keydown", M)
      );
    }, [r]),
    $.useEffect(() => {
      if (H.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (A.current = !1));
        };
    }, [H.current]),
    E.length
      ? $.createElement(
          "section",
          { "aria-label": `${m} ${j}`, tabIndex: -1 },
          b.map((M, I) => {
            var Q;
            let [re, ve] = M.split("-");
            return $.createElement(
              "ol",
              {
                key: M,
                dir: w === "auto" ? Bd() : w,
                tabIndex: -1,
                ref: H,
                className: i,
                "data-sonner-toaster": !0,
                "data-theme": W,
                "data-y-position": re,
                "data-x-position": ve,
                style: {
                  "--front-toast-height": `${
                    ((Q = k[0]) == null ? void 0 : Q.height) || 0
                  }px`,
                  "--offset": typeof a == "number" ? `${a}px` : a || RS,
                  "--width": `${TS}px`,
                  "--gap": `${v}px`,
                  ...p,
                },
                onBlur: (Y) => {
                  A.current &&
                    !Y.currentTarget.contains(Y.relatedTarget) &&
                    ((A.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (Y) => {
                  (Y.target instanceof HTMLElement &&
                    Y.target.dataset.dismissible === "false") ||
                    A.current ||
                    ((A.current = !0), (R.current = Y.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  O || L(!1);
                },
                onPointerDown: (Y) => {
                  (Y.target instanceof HTMLElement &&
                    Y.target.dataset.dismissible === "false") ||
                    K(!0);
                },
                onPointerUp: () => K(!1),
              },
              E.filter((Y) => (!Y.position && I === 0) || Y.position === M).map(
                (Y, z) => {
                  var J, ue;
                  return $.createElement(DS, {
                    key: Y.id,
                    icons: h,
                    index: z,
                    toast: Y,
                    defaultRichColors: u,
                    duration:
                      (J = g == null ? void 0 : g.duration) != null ? J : f,
                    className: g == null ? void 0 : g.className,
                    descriptionClassName:
                      g == null ? void 0 : g.descriptionClassName,
                    invert: t,
                    visibleToasts: d,
                    closeButton:
                      (ue = g == null ? void 0 : g.closeButton) != null
                        ? ue
                        : l,
                    interacting: O,
                    position: M,
                    style: g == null ? void 0 : g.style,
                    unstyled: g == null ? void 0 : g.unstyled,
                    classNames: g == null ? void 0 : g.classNames,
                    cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                    actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                    removeToast: B,
                    toasts: E.filter((q) => q.position == Y.position),
                    heights: k.filter((q) => q.position == Y.position),
                    setHeights: _,
                    expandByDefault: o,
                    gap: v,
                    loadingIcon: x,
                    expanded: T,
                    pauseWhenPageIsHidden: y,
                    cn: S,
                  });
                }
              )
            );
          })
        )
      : null
  );
};
function IS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Nh(...e) {
  return (t) => e.forEach((n) => IS(n, t));
}
function Ur(...e) {
  return c.useCallback(Nh(...e), e);
}
var Th = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    l = o.find(zS);
  if (l) {
    const i = l.props.children,
      a = o.map((s) =>
        s === l
          ? c.Children.count(i) > 1
            ? c.Children.only(null)
            : c.isValidElement(i)
            ? i.props.children
            : null
          : s
      );
    return C.jsx(Rs, {
      ...r,
      ref: t,
      children: c.isValidElement(i) ? c.cloneElement(i, void 0, a) : null,
    });
  }
  return C.jsx(Rs, { ...r, ref: t, children: n });
});
Th.displayName = "Slot";
var Rs = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (c.isValidElement(n)) {
    const o = BS(n);
    return c.cloneElement(n, { ...FS(r, n.props), ref: t ? Nh(t, o) : o });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Rs.displayName = "SlotClone";
var jS = ({ children: e }) => C.jsx(C.Fragment, { children: e });
function zS(e) {
  return c.isValidElement(e) && e.type === jS;
}
function FS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...a) => {
            l(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...l })
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function BS(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var WS = [
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
  Vo = WS.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        a = l ? Th : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        C.jsx(a, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function HS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function VS(...e) {
  return (t) => e.forEach((n) => HS(n, t));
}
function US(...e) {
  return c.useCallback(VS(...e), e);
}
var Wd =
  globalThis != null && globalThis.document ? c.useLayoutEffect : () => {};
function YS(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var $n = (e) => {
  const { present: t, children: n } = e,
    r = KS(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n),
    l = US(r.ref, XS(o));
  return typeof n == "function" || r.isPresent
    ? c.cloneElement(o, { ref: l })
    : null;
};
$n.displayName = "Presence";
function KS(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    l = c.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [a, s] = YS(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    c.useEffect(() => {
      const u = yl(r.current);
      l.current = a === "mounted" ? u : "none";
    }, [a]),
    Wd(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const d = l.current,
          g = yl(u);
        e
          ? s("MOUNT")
          : g === "none" || (u == null ? void 0 : u.display) === "none"
          ? s("UNMOUNT")
          : s(f && d !== g ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    Wd(() => {
      if (t) {
        const u = (p) => {
            const g = yl(r.current).includes(p.animationName);
            p.target === t && g && Pn.flushSync(() => s("ANIMATION_END"));
          },
          f = (p) => {
            p.target === t && (l.current = yl(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: c.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function yl(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function XS(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function QS(e, t = []) {
  let n = [];
  function r(l, i) {
    const a = c.createContext(i),
      s = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: d, children: g, ...w } = p,
        v = (d == null ? void 0 : d[e][s]) || a,
        x = c.useMemo(() => w, Object.values(w));
      return C.jsx(v.Provider, { value: x, children: g });
    }
    function f(p, d) {
      const g = (d == null ? void 0 : d[e][s]) || a,
        w = c.useContext(g);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return (u.displayName = l + "Provider"), [u, f];
  }
  const o = () => {
    const l = n.map((i) => c.createContext(i));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || l;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
    };
  };
  return (o.scopeName = e), [r, GS(o, ...t)];
}
function GS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((a, { useScope: s, scopeName: u }) => {
        const p = s(l)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function _n(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
var ZS = c.createContext(void 0);
function JS(e) {
  const t = c.useContext(ZS);
  return e || t || "ltr";
}
var qS =
  globalThis != null && globalThis.document ? c.useLayoutEffect : () => {};
function eE(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function jn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function tE(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fc = "ScrollArea",
  [_h, K2] = QS(Fc),
  [nE, dt] = _h(Fc),
  Oh = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: r = "hover",
        dir: o,
        scrollHideDelay: l = 600,
        ...i
      } = e,
      [a, s] = c.useState(null),
      [u, f] = c.useState(null),
      [p, d] = c.useState(null),
      [g, w] = c.useState(null),
      [v, x] = c.useState(null),
      [h, m] = c.useState(0),
      [y, S] = c.useState(0),
      [E, P] = c.useState(!1),
      [b, k] = c.useState(!1),
      _ = Ur(t, (L) => s(L)),
      T = JS(o);
    return C.jsx(nE, {
      scope: n,
      type: r,
      dir: T,
      scrollHideDelay: l,
      scrollArea: a,
      viewport: u,
      onViewportChange: f,
      content: p,
      onContentChange: d,
      scrollbarX: g,
      onScrollbarXChange: w,
      scrollbarXEnabled: E,
      onScrollbarXEnabledChange: P,
      scrollbarY: v,
      onScrollbarYChange: x,
      scrollbarYEnabled: b,
      onScrollbarYEnabledChange: k,
      onCornerWidthChange: m,
      onCornerHeightChange: S,
      children: C.jsx(Vo.div, {
        dir: T,
        ...i,
        ref: _,
        style: {
          position: "relative",
          "--radix-scroll-area-corner-width": h + "px",
          "--radix-scroll-area-corner-height": y + "px",
          ...e.style,
        },
      }),
    });
  });
Oh.displayName = Fc;
var Ah = "ScrollAreaViewport",
  Lh = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...l } = e,
      i = dt(Ah, n),
      a = c.useRef(null),
      s = Ur(t, a, i.onViewportChange);
    return C.jsxs(C.Fragment, {
      children: [
        C.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: o,
        }),
        C.jsx(Vo.div, {
          "data-radix-scroll-area-viewport": "",
          ...l,
          ref: s,
          style: {
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style,
          },
          children: C.jsx("div", {
            ref: i.onContentChange,
            style: { minWidth: "100%", display: "table" },
            children: r,
          }),
        }),
      ],
    });
  });
Lh.displayName = Ah;
var _t = "ScrollAreaScrollbar",
  Bc = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = dt(_t, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: l, onScrollbarYEnabledChange: i } = o,
      a = e.orientation === "horizontal";
    return (
      c.useEffect(
        () => (
          a ? l(!0) : i(!0),
          () => {
            a ? l(!1) : i(!1);
          }
        ),
        [a, l, i]
      ),
      o.type === "hover"
        ? C.jsx(rE, { ...r, ref: t, forceMount: n })
        : o.type === "scroll"
        ? C.jsx(oE, { ...r, ref: t, forceMount: n })
        : o.type === "auto"
        ? C.jsx(Dh, { ...r, ref: t, forceMount: n })
        : o.type === "always"
        ? C.jsx(Wc, { ...r, ref: t })
        : null
    );
  });
Bc.displayName = _t;
var rE = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = dt(_t, e.__scopeScrollArea),
      [l, i] = c.useState(!1);
    return (
      c.useEffect(() => {
        const a = o.scrollArea;
        let s = 0;
        if (a) {
          const u = () => {
              window.clearTimeout(s), i(!0);
            },
            f = () => {
              s = window.setTimeout(() => i(!1), o.scrollHideDelay);
            };
          return (
            a.addEventListener("pointerenter", u),
            a.addEventListener("pointerleave", f),
            () => {
              window.clearTimeout(s),
                a.removeEventListener("pointerenter", u),
                a.removeEventListener("pointerleave", f);
            }
          );
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      C.jsx($n, {
        present: n || l,
        children: C.jsx(Dh, {
          "data-state": l ? "visible" : "hidden",
          ...r,
          ref: t,
        }),
      })
    );
  }),
  oE = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = dt(_t, e.__scopeScrollArea),
      l = e.orientation === "horizontal",
      i = Ii(() => s("SCROLL_END"), 100),
      [a, s] = tE("hidden", {
        hidden: { SCROLL: "scrolling" },
        scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" },
        interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" },
        idle: {
          HIDE: "hidden",
          SCROLL: "scrolling",
          POINTER_ENTER: "interacting",
        },
      });
    return (
      c.useEffect(() => {
        if (a === "idle") {
          const u = window.setTimeout(() => s("HIDE"), o.scrollHideDelay);
          return () => window.clearTimeout(u);
        }
      }, [a, o.scrollHideDelay, s]),
      c.useEffect(() => {
        const u = o.viewport,
          f = l ? "scrollLeft" : "scrollTop";
        if (u) {
          let p = u[f];
          const d = () => {
            const g = u[f];
            p !== g && (s("SCROLL"), i()), (p = g);
          };
          return (
            u.addEventListener("scroll", d),
            () => u.removeEventListener("scroll", d)
          );
        }
      }, [o.viewport, l, s, i]),
      C.jsx($n, {
        present: n || a !== "hidden",
        children: C.jsx(Wc, {
          "data-state": a === "hidden" ? "hidden" : "visible",
          ...r,
          ref: t,
          onPointerEnter: jn(e.onPointerEnter, () => s("POINTER_ENTER")),
          onPointerLeave: jn(e.onPointerLeave, () => s("POINTER_LEAVE")),
        }),
      })
    );
  }),
  Dh = c.forwardRef((e, t) => {
    const n = dt(_t, e.__scopeScrollArea),
      { forceMount: r, ...o } = e,
      [l, i] = c.useState(!1),
      a = e.orientation === "horizontal",
      s = Ii(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            f = n.viewport.offsetHeight < n.viewport.scrollHeight;
          i(a ? u : f);
        }
      }, 10);
    return (
      Mr(n.viewport, s),
      Mr(n.content, s),
      C.jsx($n, {
        present: r || l,
        children: C.jsx(Wc, {
          "data-state": l ? "visible" : "hidden",
          ...o,
          ref: t,
        }),
      })
    );
  }),
  Wc = c.forwardRef((e, t) => {
    const { orientation: n = "vertical", ...r } = e,
      o = dt(_t, e.__scopeScrollArea),
      l = c.useRef(null),
      i = c.useRef(0),
      [a, s] = c.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = Fh(a.viewport, a.content),
      f = {
        ...r,
        sizes: a,
        onSizesChange: s,
        hasThumb: u > 0 && u < 1,
        onThumbChange: (d) => (l.current = d),
        onThumbPointerUp: () => (i.current = 0),
        onThumbPointerDown: (d) => (i.current = d),
      };
    function p(d, g) {
      return uE(d, i.current, a, g);
    }
    return n === "horizontal"
      ? C.jsx(lE, {
          ...f,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && l.current) {
              const d = o.viewport.scrollLeft,
                g = Hd(d, a, o.dir);
              l.current.style.transform = `translate3d(${g}px, 0, 0)`;
            }
          },
          onWheelScroll: (d) => {
            o.viewport && (o.viewport.scrollLeft = d);
          },
          onDragScroll: (d) => {
            o.viewport && (o.viewport.scrollLeft = p(d, o.dir));
          },
        })
      : n === "vertical"
      ? C.jsx(iE, {
          ...f,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && l.current) {
              const d = o.viewport.scrollTop,
                g = Hd(d, a);
              l.current.style.transform = `translate3d(0, ${g}px, 0)`;
            }
          },
          onWheelScroll: (d) => {
            o.viewport && (o.viewport.scrollTop = d);
          },
          onDragScroll: (d) => {
            o.viewport && (o.viewport.scrollTop = p(d));
          },
        })
      : null;
  }),
  lE = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      l = dt(_t, e.__scopeScrollArea),
      [i, a] = c.useState(),
      s = c.useRef(null),
      u = Ur(t, s, l.onScrollbarXChange);
    return (
      c.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      C.jsx(Ih, {
        "data-orientation": "horizontal",
        ...o,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: l.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: l.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": Mi(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
        onDragScroll: (f) => e.onDragScroll(f.x),
        onWheelScroll: (f, p) => {
          if (l.viewport) {
            const d = l.viewport.scrollLeft + f.deltaX;
            e.onWheelScroll(d), Wh(d, p) && f.preventDefault();
          }
        },
        onResize: () => {
          s.current &&
            l.viewport &&
            i &&
            r({
              content: l.viewport.scrollWidth,
              viewport: l.viewport.offsetWidth,
              scrollbar: {
                size: s.current.clientWidth,
                paddingStart: ui(i.paddingLeft),
                paddingEnd: ui(i.paddingRight),
              },
            });
        },
      })
    );
  }),
  iE = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      l = dt(_t, e.__scopeScrollArea),
      [i, a] = c.useState(),
      s = c.useRef(null),
      u = Ur(t, s, l.onScrollbarYChange);
    return (
      c.useEffect(() => {
        s.current && a(getComputedStyle(s.current));
      }, [s]),
      C.jsx(Ih, {
        "data-orientation": "vertical",
        ...o,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: l.dir === "ltr" ? 0 : void 0,
          left: l.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": Mi(n) + "px",
          ...e.style,
        },
        onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
        onDragScroll: (f) => e.onDragScroll(f.y),
        onWheelScroll: (f, p) => {
          if (l.viewport) {
            const d = l.viewport.scrollTop + f.deltaY;
            e.onWheelScroll(d), Wh(d, p) && f.preventDefault();
          }
        },
        onResize: () => {
          s.current &&
            l.viewport &&
            i &&
            r({
              content: l.viewport.scrollHeight,
              viewport: l.viewport.offsetHeight,
              scrollbar: {
                size: s.current.clientHeight,
                paddingStart: ui(i.paddingTop),
                paddingEnd: ui(i.paddingBottom),
              },
            });
        },
      })
    );
  }),
  [aE, Mh] = _h(_t),
  Ih = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: o,
        onThumbChange: l,
        onThumbPointerUp: i,
        onThumbPointerDown: a,
        onThumbPositionChange: s,
        onDragScroll: u,
        onWheelScroll: f,
        onResize: p,
        ...d
      } = e,
      g = dt(_t, n),
      [w, v] = c.useState(null),
      x = Ur(t, (_) => v(_)),
      h = c.useRef(null),
      m = c.useRef(""),
      y = g.viewport,
      S = r.content - r.viewport,
      E = _n(f),
      P = _n(s),
      b = Ii(p, 10);
    function k(_) {
      if (h.current) {
        const T = _.clientX - h.current.left,
          L = _.clientY - h.current.top;
        u({ x: T, y: L });
      }
    }
    return (
      c.useEffect(() => {
        const _ = (T) => {
          const L = T.target;
          (w == null ? void 0 : w.contains(L)) && E(T, S);
        };
        return (
          document.addEventListener("wheel", _, { passive: !1 }),
          () => document.removeEventListener("wheel", _, { passive: !1 })
        );
      }, [y, w, S, E]),
      c.useEffect(P, [r, P]),
      Mr(w, b),
      Mr(g.content, b),
      C.jsx(aE, {
        scope: n,
        scrollbar: w,
        hasThumb: o,
        onThumbChange: _n(l),
        onThumbPointerUp: _n(i),
        onThumbPositionChange: P,
        onThumbPointerDown: _n(a),
        children: C.jsx(Vo.div, {
          ...d,
          ref: x,
          style: { position: "absolute", ...d.style },
          onPointerDown: jn(e.onPointerDown, (_) => {
            _.button === 0 &&
              (_.target.setPointerCapture(_.pointerId),
              (h.current = w.getBoundingClientRect()),
              (m.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = "none"),
              g.viewport && (g.viewport.style.scrollBehavior = "auto"),
              k(_));
          }),
          onPointerMove: jn(e.onPointerMove, k),
          onPointerUp: jn(e.onPointerUp, (_) => {
            const T = _.target;
            T.hasPointerCapture(_.pointerId) &&
              T.releasePointerCapture(_.pointerId),
              (document.body.style.webkitUserSelect = m.current),
              g.viewport && (g.viewport.style.scrollBehavior = ""),
              (h.current = null);
          }),
        }),
      })
    );
  }),
  ci = "ScrollAreaThumb",
  jh = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Mh(ci, e.__scopeScrollArea);
    return C.jsx($n, {
      present: n || o.hasThumb,
      children: C.jsx(sE, { ref: t, ...r }),
    });
  }),
  sE = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e,
      l = dt(ci, n),
      i = Mh(ci, n),
      { onThumbPositionChange: a } = i,
      s = Ur(t, (p) => i.onThumbChange(p)),
      u = c.useRef(),
      f = Ii(() => {
        u.current && (u.current(), (u.current = void 0));
      }, 100);
    return (
      c.useEffect(() => {
        const p = l.viewport;
        if (p) {
          const d = () => {
            if ((f(), !u.current)) {
              const g = dE(p, a);
              (u.current = g), a();
            }
          };
          return (
            a(),
            p.addEventListener("scroll", d),
            () => p.removeEventListener("scroll", d)
          );
        }
      }, [l.viewport, f, a]),
      C.jsx(Vo.div, {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: s,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r,
        },
        onPointerDownCapture: jn(e.onPointerDownCapture, (p) => {
          const g = p.target.getBoundingClientRect(),
            w = p.clientX - g.left,
            v = p.clientY - g.top;
          i.onThumbPointerDown({ x: w, y: v });
        }),
        onPointerUp: jn(e.onPointerUp, i.onThumbPointerUp),
      })
    );
  });
jh.displayName = ci;
var Hc = "ScrollAreaCorner",
  zh = c.forwardRef((e, t) => {
    const n = dt(Hc, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? C.jsx(cE, { ...e, ref: t }) : null;
  });
zh.displayName = Hc;
var cE = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e,
    o = dt(Hc, n),
    [l, i] = c.useState(0),
    [a, s] = c.useState(0),
    u = !!(l && a);
  return (
    Mr(o.scrollbarX, () => {
      var p;
      const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
      o.onCornerHeightChange(f), s(f);
    }),
    Mr(o.scrollbarY, () => {
      var p;
      const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
      o.onCornerWidthChange(f), i(f);
    }),
    u
      ? C.jsx(Vo.div, {
          ...r,
          ref: t,
          style: {
            width: l,
            height: a,
            position: "absolute",
            right: o.dir === "ltr" ? 0 : void 0,
            left: o.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  );
});
function ui(e) {
  return e ? parseInt(e, 10) : 0;
}
function Fh(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Mi(e) {
  const t = Fh(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function uE(e, t, n, r = "ltr") {
  const o = Mi(n),
    l = o / 2,
    i = t || l,
    a = o - i,
    s = n.scrollbar.paddingStart + i,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - a,
    f = n.content - n.viewport,
    p = r === "ltr" ? [0, f] : [f * -1, 0];
  return Bh([s, u], p)(e);
}
function Hd(e, t, n = "ltr") {
  const r = Mi(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    l = t.scrollbar.size - o,
    i = t.content - t.viewport,
    a = l - r,
    s = n === "ltr" ? [0, i] : [i * -1, 0],
    u = eE(e, s);
  return Bh([0, i], [0, a])(u);
}
function Bh(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Wh(e, t) {
  return e > 0 && e < t;
}
var dE = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0;
  return (
    (function o() {
      const l = { left: e.scrollLeft, top: e.scrollTop },
        i = n.left !== l.left,
        a = n.top !== l.top;
      (i || a) && t(), (n = l), (r = window.requestAnimationFrame(o));
    })(),
    () => window.cancelAnimationFrame(r)
  );
};
function Ii(e, t) {
  const n = _n(e),
    r = c.useRef(0);
  return (
    c.useEffect(() => () => window.clearTimeout(r.current), []),
    c.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t));
    }, [n, t])
  );
}
function Mr(e, t) {
  const n = _n(t);
  qS(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n));
      });
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e);
        }
      );
    }
  }, [e, n]);
}
var Hh = Oh,
  fE = Lh,
  pE = zh;
const Vh = c.forwardRef(({ className: e, children: t, ...n }, r) =>
  C.jsxs(Hh, {
    ref: r,
    className: De("relative overflow-hidden", e),
    ...n,
    children: [
      C.jsx(fE, { className: "h-full w-full rounded-[inherit]", children: t }),
      C.jsx(Uh, {}),
      C.jsx(pE, {}),
    ],
  })
);
Vh.displayName = Hh.displayName;
const Uh = c.forwardRef(
  ({ className: e, orientation: t = "vertical", ...n }, r) =>
    C.jsx(Bc, {
      ref: r,
      orientation: t,
      className: De(
        "flex touch-none select-none transition-colors",
        t === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent p-[1px]",
        t === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        e
      ),
      ...n,
      children: C.jsx(jh, {
        className:
          "relative flex-1 rounded-full bg-slate-200 dark:bg-slate-800",
      }),
    })
);
Uh.displayName = Bc.displayName;
function yn(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function mE(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Yh(...e) {
  return (t) => e.forEach((n) => mE(n, t));
}
function Yr(...e) {
  return c.useCallback(Yh(...e), e);
}
function hE(e, t) {
  const n = c.createContext(t);
  function r(l) {
    const { children: i, ...a } = l,
      s = c.useMemo(() => a, Object.values(a));
    return C.jsx(n.Provider, { value: s, children: i });
  }
  function o(l) {
    const i = c.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function vE(e, t = []) {
  let n = [];
  function r(l, i) {
    const a = c.createContext(i),
      s = n.length;
    n = [...n, i];
    function u(p) {
      const { scope: d, children: g, ...w } = p,
        v = (d == null ? void 0 : d[e][s]) || a,
        x = c.useMemo(() => w, Object.values(w));
      return C.jsx(v.Provider, { value: x, children: g });
    }
    function f(p, d) {
      const g = (d == null ? void 0 : d[e][s]) || a,
        w = c.useContext(g);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${l}\``);
    }
    return (u.displayName = l + "Provider"), [u, f];
  }
  const o = () => {
    const l = n.map((i) => c.createContext(i));
    return function (a) {
      const s = (a == null ? void 0 : a[e]) || l;
      return c.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: s } }), [a, s]);
    };
  };
  return (o.scopeName = e), [r, gE(o, ...t)];
}
function gE(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((a, { useScope: s, scopeName: u }) => {
        const p = s(l)[`__scope${u}`];
        return { ...a, ...p };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Kh =
    globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  yE = wf.useId || (() => {}),
  wE = 0;
function Ea(e) {
  const [t, n] = c.useState(yE());
  return (
    Kh(() => {
      e || n((r) => r ?? String(wE++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Un(e) {
  const t = c.useRef(e);
  return (
    c.useEffect(() => {
      t.current = e;
    }),
    c.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function xE({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = SE({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    a = Un(n),
    s = c.useCallback(
      (u) => {
        if (l) {
          const p = typeof u == "function" ? u(e) : u;
          p !== e && a(p);
        } else o(u);
      },
      [l, e, o, a]
    );
  return [i, s];
}
function SE({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    l = Un(t);
  return (
    c.useEffect(() => {
      o.current !== r && (l(r), (o.current = r));
    }, [r, o, l]),
    n
  );
}
var Vc = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    l = o.find(CE);
  if (l) {
    const i = l.props.children,
      a = o.map((s) =>
        s === l
          ? c.Children.count(i) > 1
            ? c.Children.only(null)
            : c.isValidElement(i)
            ? i.props.children
            : null
          : s
      );
    return C.jsx(Ns, {
      ...r,
      ref: t,
      children: c.isValidElement(i) ? c.cloneElement(i, void 0, a) : null,
    });
  }
  return C.jsx(Ns, { ...r, ref: t, children: n });
});
Vc.displayName = "Slot";
var Ns = c.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (c.isValidElement(n)) {
    const o = kE(n);
    return c.cloneElement(n, { ...bE(r, n.props), ref: t ? Yh(t, o) : o });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Ns.displayName = "SlotClone";
var EE = ({ children: e }) => C.jsx(C.Fragment, { children: e });
function CE(e) {
  return c.isValidElement(e) && e.type === EE;
}
function bE(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...a) => {
            l(...a), o(...a);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...l })
      : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kE(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var PE = [
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
  Xt = PE.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        a = l ? Vc : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        C.jsx(a, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function $E(e, t) {
  e && Pn.flushSync(() => e.dispatchEvent(t));
}
function RE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Un(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var NE = "DismissableLayer",
  Ts = "dismissableLayer.update",
  TE = "dismissableLayer.pointerDownOutside",
  _E = "dismissableLayer.focusOutside",
  Vd,
  Xh = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Qh = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: a,
        ...s
      } = e,
      u = c.useContext(Xh),
      [f, p] = c.useState(null),
      d =
        (f == null ? void 0 : f.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, g] = c.useState({}),
      w = Yr(t, (b) => p(b)),
      v = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      h = v.indexOf(x),
      m = f ? v.indexOf(f) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = m >= h,
      E = LE((b) => {
        const k = b.target,
          _ = [...u.branches].some((T) => T.contains(k));
        !S ||
          _ ||
          (o == null || o(b),
          i == null || i(b),
          b.defaultPrevented || a == null || a());
      }, d),
      P = DE((b) => {
        const k = b.target;
        [...u.branches].some((T) => T.contains(k)) ||
          (l == null || l(b),
          i == null || i(b),
          b.defaultPrevented || a == null || a());
      }, d);
    return (
      RE((b) => {
        m === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && a && (b.preventDefault(), a()));
      }, d),
      c.useEffect(() => {
        if (f)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Vd = d.body.style.pointerEvents),
                (d.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            Ud(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (d.body.style.pointerEvents = Vd);
            }
          );
      }, [f, d, n, u]),
      c.useEffect(
        () => () => {
          f &&
            (u.layers.delete(f),
            u.layersWithOutsidePointerEventsDisabled.delete(f),
            Ud());
        },
        [f, u]
      ),
      c.useEffect(() => {
        const b = () => g({});
        return (
          document.addEventListener(Ts, b),
          () => document.removeEventListener(Ts, b)
        );
      }, []),
      C.jsx(Xt.div, {
        ...s,
        ref: w,
        style: {
          pointerEvents: y ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: yn(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: yn(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: yn(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        ),
      })
    );
  });
Qh.displayName = NE;
var OE = "DismissableLayerBranch",
  AE = c.forwardRef((e, t) => {
    const n = c.useContext(Xh),
      r = c.useRef(null),
      o = Yr(t, r);
    return (
      c.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      C.jsx(Xt.div, { ...e, ref: o })
    );
  });
AE.displayName = OE;
function LE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Un(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return (
    c.useEffect(() => {
      const l = (a) => {
          if (a.target && !r.current) {
            let s = function () {
              Gh(TE, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = s),
                t.addEventListener("click", o.current, { once: !0 }))
              : s();
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
function DE(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Un(e),
    r = c.useRef(!1);
  return (
    c.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          Gh(_E, n, { originalEvent: l }, { discrete: !1 });
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
function Ud() {
  const e = new CustomEvent(Ts);
  document.dispatchEvent(e);
}
function Gh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? $E(o, l) : o.dispatchEvent(l);
}
var Ca = "focusScope.autoFocusOnMount",
  ba = "focusScope.autoFocusOnUnmount",
  Yd = { bubbles: !1, cancelable: !0 },
  ME = "FocusScope",
  Zh = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...i
      } = e,
      [a, s] = c.useState(null),
      u = Un(o),
      f = Un(l),
      p = c.useRef(null),
      d = Yr(t, (v) => s(v)),
      g = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    c.useEffect(() => {
      if (r) {
        let v = function (y) {
            if (g.paused || !a) return;
            const S = y.target;
            a.contains(S) ? (p.current = S) : tn(p.current, { select: !0 });
          },
          x = function (y) {
            if (g.paused || !a) return;
            const S = y.relatedTarget;
            S !== null && (a.contains(S) || tn(p.current, { select: !0 }));
          },
          h = function (y) {
            if (document.activeElement === document.body)
              for (const E of y) E.removedNodes.length > 0 && tn(a);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", x);
        const m = new MutationObserver(h);
        return (
          a && m.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", x),
              m.disconnect();
          }
        );
      }
    }, [r, a, g.paused]),
      c.useEffect(() => {
        if (a) {
          Xd.add(g);
          const v = document.activeElement;
          if (!a.contains(v)) {
            const h = new CustomEvent(Ca, Yd);
            a.addEventListener(Ca, u),
              a.dispatchEvent(h),
              h.defaultPrevented ||
                (IE(WE(Jh(a)), { select: !0 }),
                document.activeElement === v && tn(a));
          }
          return () => {
            a.removeEventListener(Ca, u),
              setTimeout(() => {
                const h = new CustomEvent(ba, Yd);
                a.addEventListener(ba, f),
                  a.dispatchEvent(h),
                  h.defaultPrevented || tn(v ?? document.body, { select: !0 }),
                  a.removeEventListener(ba, f),
                  Xd.remove(g);
              }, 0);
          };
        }
      }, [a, u, f, g]);
    const w = c.useCallback(
      (v) => {
        if ((!n && !r) || g.paused) return;
        const x = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          h = document.activeElement;
        if (x && h) {
          const m = v.currentTarget,
            [y, S] = jE(m);
          y && S
            ? !v.shiftKey && h === S
              ? (v.preventDefault(), n && tn(y, { select: !0 }))
              : v.shiftKey &&
                h === y &&
                (v.preventDefault(), n && tn(S, { select: !0 }))
            : h === m && v.preventDefault();
        }
      },
      [n, r, g.paused]
    );
    return C.jsx(Xt.div, { tabIndex: -1, ...i, ref: d, onKeyDown: w });
  });
Zh.displayName = ME;
function IE(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((tn(r, { select: t }), document.activeElement !== n)) return;
}
function jE(e) {
  const t = Jh(e),
    n = Kd(t, e),
    r = Kd(t.reverse(), e);
  return [n, r];
}
function Jh(e) {
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
function Kd(e, t) {
  for (const n of e) if (!zE(n, { upTo: t })) return n;
}
function zE(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function FE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function tn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && FE(e) && t && e.select();
  }
}
var Xd = BE();
function BE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Qd(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Qd(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Qd(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function WE(e) {
  return e.filter((t) => t.tagName !== "A");
}
var HE = "Portal",
  qh = c.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [o, l] = c.useState(!1);
    Kh(() => l(!0), []);
    const i =
      n ||
      (o &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return i ? Pc.createPortal(C.jsx(Xt.div, { ...r, ref: t }), i) : null;
  });
qh.displayName = HE;
var ka = 0;
function VE() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Gd()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Gd()),
      ka++,
      () => {
        ka === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          ka--;
      }
    );
  }, []);
}
function Gd() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var e0 = Km(),
  Pa = function () {},
  ji = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: Pa,
        onWheelCapture: Pa,
        onTouchMoveCapture: Pa,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      a = e.children,
      s = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      d = e.sideCar,
      g = e.noIsolation,
      w = e.inert,
      v = e.allowPinchZoom,
      x = e.as,
      h = x === void 0 ? "div" : x,
      m = e.gapMode,
      y = Dc(e, [
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
        "gapMode",
      ]),
      S = d,
      E = Ym([n, t]),
      P = Oe(Oe({}, y), o);
    return c.createElement(
      c.Fragment,
      null,
      f &&
        c.createElement(S, {
          sideCar: e0,
          removeScrollBar: u,
          shards: p,
          noIsolation: g,
          inert: w,
          setCallbacks: l,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: m,
        }),
      i
        ? c.cloneElement(c.Children.only(a), Oe(Oe({}, P), { ref: E }))
        : c.createElement(h, Oe({}, P, { className: s, ref: E }), a)
    );
  });
ji.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
ji.classNames = { fullWidth: yo, zeroRight: go };
var _s = !1;
if (typeof window < "u")
  try {
    var wl = Object.defineProperty({}, "passive", {
      get: function () {
        return (_s = !0), !0;
      },
    });
    window.addEventListener("test", wl, wl),
      window.removeEventListener("test", wl, wl);
  } catch {
    _s = !1;
  }
var or = _s ? { passive: !1 } : !1,
  UE = function (e) {
    return e.tagName === "TEXTAREA";
  },
  t0 = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !UE(e) && n[t] === "visible")
    );
  },
  YE = function (e) {
    return t0(e, "overflowY");
  },
  KE = function (e) {
    return t0(e, "overflowX");
  },
  Zd = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = n0(e, r);
      if (o) {
        var l = r0(e, r),
          i = l[1],
          a = l[2];
        if (i > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  XE = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  QE = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  n0 = function (e, t) {
    return e === "v" ? YE(t) : KE(t);
  },
  r0 = function (e, t) {
    return e === "v" ? XE(t) : QE(t);
  },
  GE = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  ZE = function (e, t, n, r, o) {
    var l = GE(e, window.getComputedStyle(t).direction),
      i = l * r,
      a = n.target,
      s = t.contains(a),
      u = !1,
      f = i > 0,
      p = 0,
      d = 0;
    do {
      var g = r0(e, a),
        w = g[0],
        v = g[1],
        x = g[2],
        h = v - x - l * w;
      (w || h) && n0(e, a) && ((p += h), (d += w)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!s && a !== document.body) || (s && (t.contains(a) || t === a)));
    return (
      ((f && (Math.abs(p) < 1 || !o)) || (!f && (Math.abs(d) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  xl = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Jd = function (e) {
    return [e.deltaX, e.deltaY];
  },
  qd = function (e) {
    return e && "current" in e ? e.current : e;
  },
  JE = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  qE = function (e) {
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
  e2 = 0,
  lr = [];
function t2(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(e2++)[0],
    l = c.useState(Mc)[0],
    i = c.useRef(e);
  c.useEffect(
    function () {
      i.current = e;
    },
    [e]
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = Um([e.lockRef.current], (e.shards || []).map(qd), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = c.useCallback(function (v, x) {
      if ("touches" in v && v.touches.length === 2)
        return !i.current.allowPinchZoom;
      var h = xl(v),
        m = n.current,
        y = "deltaX" in v ? v.deltaX : m[0] - h[0],
        S = "deltaY" in v ? v.deltaY : m[1] - h[1],
        E,
        P = v.target,
        b = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in v && b === "h" && P.type === "range") return !1;
      var k = Zd(b, P);
      if (!k) return !0;
      if ((k ? (E = b) : ((E = b === "v" ? "h" : "v"), (k = Zd(b, P))), !k))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (y || S) && (r.current = E), !E)
      )
        return !0;
      var _ = r.current || E;
      return ZE(_, x, v, _ === "h" ? y : S, !0);
    }, []),
    s = c.useCallback(function (v) {
      var x = v;
      if (!(!lr.length || lr[lr.length - 1] !== l)) {
        var h = "deltaY" in x ? Jd(x) : xl(x),
          m = t.current.filter(function (E) {
            return (
              E.name === x.type &&
              (E.target === x.target || x.target === E.shadowParent) &&
              JE(E.delta, h)
            );
          })[0];
        if (m && m.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!m) {
          var y = (i.current.shards || [])
              .map(qd)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(x.target);
              }),
            S = y.length > 0 ? a(x, y[0]) : !i.current.noIsolation;
          S && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (v, x, h, m) {
      var y = { name: v, delta: x, target: h, should: m, shadowParent: n2(h) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== y;
          });
        }, 1);
    }, []),
    f = c.useCallback(function (v) {
      (n.current = xl(v)), (r.current = void 0);
    }, []),
    p = c.useCallback(function (v) {
      u(v.type, Jd(v), v.target, a(v, e.lockRef.current));
    }, []),
    d = c.useCallback(function (v) {
      u(v.type, xl(v), v.target, a(v, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return (
      lr.push(l),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: d,
      }),
      document.addEventListener("wheel", s, or),
      document.addEventListener("touchmove", s, or),
      document.addEventListener("touchstart", f, or),
      function () {
        (lr = lr.filter(function (v) {
          return v !== l;
        })),
          document.removeEventListener("wheel", s, or),
          document.removeEventListener("touchmove", s, or),
          document.removeEventListener("touchstart", f, or);
      }
    );
  }, []);
  var g = e.removeScrollBar,
    w = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    w ? c.createElement(l, { styles: qE(o) }) : null,
    g ? c.createElement(Zm, { gapMode: e.gapMode }) : null
  );
}
function n2(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const r2 = Qm(e0, t2);
var o0 = c.forwardRef(function (e, t) {
  return c.createElement(ji, Oe({}, e, { ref: t, sideCar: r2 }));
});
o0.classNames = ji.classNames;
var Uc = "Dialog",
  [l0, X2] = vE(Uc),
  [o2, xt] = l0(Uc),
  i0 = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        modal: i = !0,
      } = e,
      a = c.useRef(null),
      s = c.useRef(null),
      [u = !1, f] = xE({ prop: r, defaultProp: o, onChange: l });
    return C.jsx(o2, {
      scope: t,
      triggerRef: a,
      contentRef: s,
      contentId: Ea(),
      titleId: Ea(),
      descriptionId: Ea(),
      open: u,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((p) => !p), [f]),
      modal: i,
      children: n,
    });
  };
i0.displayName = Uc;
var a0 = "DialogTrigger",
  s0 = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = xt(a0, n),
      l = Yr(t, o.triggerRef);
    return C.jsx(Xt.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Xc(o.open),
      ...r,
      ref: l,
      onClick: yn(e.onClick, o.onOpenToggle),
    });
  });
s0.displayName = a0;
var Yc = "DialogPortal",
  [l2, c0] = l0(Yc, { forceMount: void 0 }),
  u0 = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      l = xt(Yc, t);
    return C.jsx(l2, {
      scope: t,
      forceMount: n,
      children: c.Children.map(r, (i) =>
        C.jsx($n, {
          present: n || l.open,
          children: C.jsx(qh, { asChild: !0, container: o, children: i }),
        })
      ),
    });
  };
u0.displayName = Yc;
var di = "DialogOverlay",
  d0 = c.forwardRef((e, t) => {
    const n = c0(di, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = xt(di, e.__scopeDialog);
    return l.modal
      ? C.jsx($n, {
          present: r || l.open,
          children: C.jsx(i2, { ...o, ref: t }),
        })
      : null;
  });
d0.displayName = di;
var i2 = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = xt(di, n);
    return C.jsx(o0, {
      as: Vc,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: C.jsx(Xt.div, {
        "data-state": Xc(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Yn = "DialogContent",
  f0 = c.forwardRef((e, t) => {
    const n = c0(Yn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = xt(Yn, e.__scopeDialog);
    return C.jsx($n, {
      present: r || l.open,
      children: l.modal
        ? C.jsx(a2, { ...o, ref: t })
        : C.jsx(s2, { ...o, ref: t }),
    });
  });
f0.displayName = Yn;
var a2 = c.forwardRef((e, t) => {
    const n = xt(Yn, e.__scopeDialog),
      r = c.useRef(null),
      o = Yr(t, n.contentRef, r);
    return (
      c.useEffect(() => {
        const l = r.current;
        if (l) return Vm(l);
      }, []),
      C.jsx(p0, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: yn(e.onCloseAutoFocus, (l) => {
          var i;
          l.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: yn(e.onPointerDownOutside, (l) => {
          const i = l.detail.originalEvent,
            a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && l.preventDefault();
        }),
        onFocusOutside: yn(e.onFocusOutside, (l) => l.preventDefault()),
      })
    );
  }),
  s2 = c.forwardRef((e, t) => {
    const n = xt(Yn, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return C.jsx(p0, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (l) => {
        var i, a;
        (i = e.onCloseAutoFocus) == null || i.call(e, l),
          l.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            l.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (l) => {
        var s, u;
        (s = e.onInteractOutside) == null || s.call(e, l),
          l.defaultPrevented ||
            ((r.current = !0),
            l.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const i = l.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) &&
          l.preventDefault(),
          l.detail.originalEvent.type === "focusin" &&
            o.current &&
            l.preventDefault();
      },
    });
  }),
  p0 = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: l,
        ...i
      } = e,
      a = xt(Yn, n),
      s = c.useRef(null),
      u = Yr(t, s);
    return (
      VE(),
      C.jsxs(C.Fragment, {
        children: [
          C.jsx(Zh, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: l,
            children: C.jsx(Qh, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Xc(a.open),
              ...i,
              ref: u,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          C.jsxs(C.Fragment, {
            children: [
              C.jsx(c2, { titleId: a.titleId }),
              C.jsx(d2, { contentRef: s, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Kc = "DialogTitle",
  m0 = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = xt(Kc, n);
    return C.jsx(Xt.h2, { id: o.titleId, ...r, ref: t });
  });
m0.displayName = Kc;
var h0 = "DialogDescription",
  v0 = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = xt(h0, n);
    return C.jsx(Xt.p, { id: o.descriptionId, ...r, ref: t });
  });
v0.displayName = h0;
var g0 = "DialogClose",
  y0 = c.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = xt(g0, n);
    return C.jsx(Xt.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: yn(e.onClick, () => o.onOpenChange(!1)),
    });
  });
y0.displayName = g0;
function Xc(e) {
  return e ? "open" : "closed";
}
var w0 = "DialogTitleWarning",
  [Q2, x0] = hE(w0, { contentName: Yn, titleName: Kc, docsSlug: "dialog" }),
  c2 = ({ titleId: e }) => {
    const t = x0(w0),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      c.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  u2 = "DialogDescriptionWarning",
  d2 = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      x0(u2).contentName
    }}.`;
    return (
      c.useEffect(() => {
        var l;
        const o =
          (l = e.current) == null ? void 0 : l.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  f2 = i0,
  p2 = s0,
  m2 = u0,
  S0 = d0,
  E0 = f0,
  C0 = m0,
  b0 = v0,
  h2 = y0;
const v2 = f2,
  g2 = p2,
  y2 = m2,
  k0 = c.forwardRef(({ className: e, ...t }, n) =>
    C.jsx(S0, {
      ref: n,
      className: De(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
k0.displayName = S0.displayName;
const P0 = c.forwardRef(({ className: e, children: t, ...n }, r) =>
  C.jsxs(y2, {
    children: [
      C.jsx(k0, {}),
      C.jsxs(E0, {
        ref: r,
        className: De(
          "fixed left-[50%] top-[45%] rounded-xl z-50 grid w-5/6 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-1 bg-white py-5 px-3 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
          e
        ),
        ...n,
        children: [
          t,
          C.jsx(h2, {
            className:
              "absolute right-4 top-4 opacity-30 transition-opacity hover:opacity-100 outline-none ",
            children: C.jsx(Cx, { className: "h-6 w-6 " }),
          }),
        ],
      }),
    ],
  })
);
P0.displayName = E0.displayName;
const $0 = ({ className: e, ...t }) =>
  C.jsx("div", {
    className: De("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
$0.displayName = "DialogHeader";
const R0 = c.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(C0, {
    ref: n,
    className: De("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
R0.displayName = C0.displayName;
const N0 = c.forwardRef(({ className: e, ...t }, n) =>
  C.jsx(b0, {
    ref: n,
    className: De("text-sm text-slate-500 dark:text-slate-400", e),
    ...t,
  })
);
N0.displayName = b0.displayName;
var w2 = Object.defineProperty,
  fi = Object.getOwnPropertySymbols,
  T0 = Object.prototype.hasOwnProperty,
  _0 = Object.prototype.propertyIsEnumerable,
  ef = (e, t, n) =>
    t in e
      ? w2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  x2 = (e, t) => {
    for (var n in t || (t = {})) T0.call(t, n) && ef(e, n, t[n]);
    if (fi) for (var n of fi(t)) _0.call(t, n) && ef(e, n, t[n]);
    return e;
  },
  S2 = (e, t) => {
    var n = {};
    for (var r in e) T0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && fi)
      for (var r of fi(e)) t.indexOf(r) < 0 && _0.call(e, r) && (n[r] = e[r]);
    return n;
  };
const O0 = c.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o = "currentColor",
      size: l = "1em",
      weight: i = "regular",
      mirrored: a = !1,
      children: s,
      weights: u,
    } = n,
    f = S2(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]);
  return $.createElement(
    "svg",
    x2(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: l,
        height: l,
        fill: o,
        viewBox: "0 0 256 256",
        transform: a ? "scale(-1, 1)" : void 0,
      },
      f
    ),
    !!r && $.createElement("title", null, r),
    s,
    u.get(i)
  );
});
O0.displayName = "SSRBase";
const E2 = O0,
  C2 = new Map([
    [
      "bold",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M228,128a100,100,0,0,1-98.66,100H128a99.39,99.39,0,0,1-68.62-27.29,12,12,0,0,1,16.48-17.45,76,76,0,1,0-1.57-109c-.13.13-.25.25-.39.37L54.89,92H72a12,12,0,0,1,0,24H24a12,12,0,0,1-12-12V56a12,12,0,0,1,24,0V76.72L57.48,57.06A100,100,0,0,1,228,128Z",
        })
      ),
    ],
    [
      "duotone",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",
          opacity: "0.2",
        }),
        $.createElement("path", {
          d: "M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "fill",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L60.63,81.29l17,17A8,8,0,0,1,72,112H24a8,8,0,0,1-8-8V56A8,8,0,0,1,29.66,50.3L49.31,70,60.25,60A96,96,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "light",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M222,128a94,94,0,0,1-92.74,94H128a93.43,93.43,0,0,1-64.5-25.65,6,6,0,1,1,8.24-8.72A82,82,0,1,0,70,70l-.19.19L39.44,98H72a6,6,0,0,1,0,12H24a6,6,0,0,1-6-6V56a6,6,0,0,1,12,0V90.34L61.63,61.4A94,94,0,0,1,222,128Z",
        })
      ),
    ],
    [
      "regular",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "thin",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M220,128a92,92,0,0,1-90.77,92H128a91.47,91.47,0,0,1-63.13-25.1,4,4,0,1,1,5.5-5.82A84,84,0,1,0,68.6,68.57l-.13.12L34.3,100H72a4,4,0,0,1,0,8H24a4,4,0,0,1-4-4V56a4,4,0,0,1,8,0V94.89l35-32A92,92,0,0,1,220,128Z",
        })
      ),
    ],
  ]),
  b2 = new Map([
    [
      "bold",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z",
        })
      ),
    ],
    [
      "duotone",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
          opacity: "0.2",
        }),
        $.createElement("path", {
          d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z",
        })
      ),
    ],
    [
      "fill",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z",
        })
      ),
    ],
    [
      "light",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z",
        })
      ),
    ],
    [
      "regular",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z",
        })
      ),
    ],
    [
      "thin",
      $.createElement(
        $.Fragment,
        null,
        $.createElement("path", {
          d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z",
        })
      ),
    ],
  ]);
var k2 = Object.defineProperty,
  P2 = Object.defineProperties,
  $2 = Object.getOwnPropertyDescriptors,
  tf = Object.getOwnPropertySymbols,
  R2 = Object.prototype.hasOwnProperty,
  N2 = Object.prototype.propertyIsEnumerable,
  nf = (e, t, n) =>
    t in e
      ? k2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  T2 = (e, t) => {
    for (var n in t || (t = {})) R2.call(t, n) && nf(e, n, t[n]);
    if (tf) for (var n of tf(t)) N2.call(t, n) && nf(e, n, t[n]);
    return e;
  },
  _2 = (e, t) => P2(e, $2(t));
const A0 = c.forwardRef((e, t) =>
  $.createElement(E2, _2(T2({ ref: t }, e), { weights: b2 }))
);
A0.displayName = "SignOut";
const O2 = c.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var A2 = Object.defineProperty,
  pi = Object.getOwnPropertySymbols,
  L0 = Object.prototype.hasOwnProperty,
  D0 = Object.prototype.propertyIsEnumerable,
  rf = (e, t, n) =>
    t in e
      ? A2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  of = (e, t) => {
    for (var n in t || (t = {})) L0.call(t, n) && rf(e, n, t[n]);
    if (pi) for (var n of pi(t)) D0.call(t, n) && rf(e, n, t[n]);
    return e;
  },
  lf = (e, t) => {
    var n = {};
    for (var r in e) L0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && pi)
      for (var r of pi(e)) t.indexOf(r) < 0 && D0.call(e, r) && (n[r] = e[r]);
    return n;
  };
const M0 = c.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o,
      size: l,
      weight: i,
      mirrored: a,
      children: s,
      weights: u,
    } = n,
    f = lf(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    p = c.useContext(O2),
    {
      color: d = "currentColor",
      size: g,
      weight: w = "regular",
      mirrored: v = !1,
    } = p,
    x = lf(p, ["color", "size", "weight", "mirrored"]);
  return $.createElement(
    "svg",
    of(
      of(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: l ?? g,
          height: l ?? g,
          fill: o ?? d,
          viewBox: "0 0 256 256",
          transform: a || v ? "scale(-1, 1)" : void 0,
        },
        x
      ),
      f
    ),
    !!r && $.createElement("title", null, r),
    s,
    u.get(i ?? w)
  );
});
M0.displayName = "IconBase";
const L2 = M0;
var D2 = Object.defineProperty,
  M2 = Object.defineProperties,
  I2 = Object.getOwnPropertyDescriptors,
  af = Object.getOwnPropertySymbols,
  j2 = Object.prototype.hasOwnProperty,
  z2 = Object.prototype.propertyIsEnumerable,
  sf = (e, t, n) =>
    t in e
      ? D2(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  F2 = (e, t) => {
    for (var n in t || (t = {})) j2.call(t, n) && sf(e, n, t[n]);
    if (af) for (var n of af(t)) z2.call(t, n) && sf(e, n, t[n]);
    return e;
  },
  B2 = (e, t) => M2(e, I2(t));
const I0 = c.forwardRef((e, t) =>
  $.createElement(L2, B2(F2({ ref: t }, e), { weights: C2 }))
);
I0.displayName = "ArrowCounterClockwise";
const Sl = {
    over_par: {
      Bogey: "+1",
      Double_Bogey: "+2",
      Triple_Bogey: "+3",
      Quadruple_Bogey: "+4",
    },
    down_par: { Birdie: "-1", Eagle: "-2", Albatross: "-3", Condor: "-4" },
  },
  W2 = ({ courseId: e, onBack: t }) => {
    const [n, r] = c.useState(null),
      [o, l] = c.useState(!0),
      [i, a] = c.useState(null),
      [s, u] = c.useState(1),
      [f, p] = c.useState(0),
      [d, g] = c.useState(0),
      [w, v] = c.useState([]),
      [x, h] = c.useState(!1);
    c.useEffect(() => {
      (async () => {
        try {
          l(!0);
          const L = fS.courses.find((O) => O.id === e);
          L
            ? (p(0), g(0), u(1), r(L), v([]), h(!1))
            : a(`Course with id ${e} not found.`);
        } catch (T) {
          a(T.message), console.error("Error fetching course data:", T);
        } finally {
          l(!1);
        }
      })();
    }, [e]);
    const m = () => {
        p(f + 1);
      },
      y = () => {
        f > 0 && p(f - 1);
      },
      S = () => {
        var F, H;
        const T = n.holes[s].par,
          L = f - T;
        let O = "Par";
        L > 0
          ? (O =
              ((F = Object.keys(Sl.over_par).find(
                (j) => Sl.over_par[j] === `+${L}`
              )) == null
                ? void 0
                : F.replace(/_/g, " ")) || `+${L}`)
          : L < 0 &&
            (O =
              ((H = Object.keys(Sl.down_par).find(
                (j) => Sl.down_par[j] === `${L}`
              )) == null
                ? void 0
                : H.replace(/_/g, " ")) || `${L}`),
          v([...w, { hole: s, throws: f, result: O }]);
        const K = f,
          W = JSON.parse(localStorage.getItem("roundsData")) || {};
        (W[e] = W[e] || []),
          W[e].push(K),
          localStorage.setItem("roundsData", JSON.stringify(W)),
          Fd(`Väylä ${s}: ${f} heittoa (${O})${O === "Par" ? "🎉" : ""}`),
          p(0),
          g(d + 1),
          s < Object.keys(n.holes).length
            ? u(s + 1)
            : (h(!0), Fd("Muista tarkistaa tuloksesi!"));
      },
      E = () => {
        t();
      },
      P = () => {
        localStorage.removeItem("roundsData"), t();
      };
    if (o) return C.jsx("div", { children: "Loading..." });
    if (i) return C.jsxs("div", { children: ["Error: ", i] });
    if (!n) return C.jsx("div", { children: "No course data available." });
    const b = s === Object.keys(n.holes).length,
      k = n.holes[s];
    return C.jsxs("div", {
      className: "m-6",
      children: [
        C.jsx(MS, { position: "top-center" }),
        C.jsxs("div", {
          className: "text-center font-bold text-2xl flex",
          children: [
            C.jsx("p", { children: n.name }),
            C.jsx(on, {
              onClick: E,
              className: "ml-auto my-auto -mt-1",
              variant: "none",
              children: C.jsx(A0, { size: 22 }),
            }),
          ],
        }),
        C.jsx("div", {
          class: "bgborder bg-green-500/10 shadow shadow-green-700/20",
          children: C.jsxs("div", {
            className: "my-10 py-4 flex  text-green-700 px-8 ",
            children: [
              C.jsxs("div", {
                className: "text-center w-2/3",
                children: [
                  C.jsx("p", { className: "text-9xl font-bold", children: f }),
                  C.jsx("p", { className: "text-xs", children: "Heittoa" }),
                ],
              }),
              C.jsxs("div", {
                className: "ml-auto flex flex-col mt-auto text-center",
                children: [
                  C.jsx(on, {
                    onClick: y,
                    variant: "none",
                    children: C.jsx(I0, { size: 30 }),
                  }),
                  C.jsx("p", { className: "text-xs", children: "Peruuta" }),
                ],
              }),
            ],
          }),
        }),
        C.jsx("div", {
          children: C.jsx("ul", {
            children: C.jsxs("li", {
              children: [
                C.jsxs("p", {
                  className: "font-semibold text-xl",
                  children: ["Väylä ", C.jsx("span", { children: s })],
                }),
                C.jsxs("p", {
                  className: "",
                  children: ["Par: ", C.jsx("span", { children: k.par })],
                }),
                C.jsxs("p", {
                  children: [
                    "Matka: ",
                    C.jsxs("span", { children: [k.length, "m"] }),
                  ],
                }),
              ],
            }),
          }),
        }),
        C.jsx("div", {
          children: C.jsxs(v2, {
            children: [
              C.jsx(g2, {
                children: C.jsx(on, {
                  variant: "",
                  className: "font-semibold bg-green-700/80 mt-2",
                  children: "Näytä tulokset",
                }),
              }),
              C.jsx(P0, {
                children: C.jsxs($0, {
                  children: [
                    C.jsx(R0, { children: n.name }),
                    C.jsx(N0, {
                      children: C.jsx(Vh, {
                        className: "w-full mt-2 p-2 text-black text-left",
                        children: C.jsx("ul", {
                          children:
                            w.length > 0
                              ? w.map((_, T) =>
                                  C.jsx(
                                    "li",
                                    {
                                      children: C.jsxs("p", {
                                        className: "text-xs",
                                        children: [
                                          C.jsxs("span", {
                                            className: "font-semibold",
                                            children: ["Väylä ", _.hole, ":"],
                                          }),
                                          " ",
                                          _.throws,
                                          " heittoa (",
                                          _.result,
                                          ")",
                                        ],
                                      }),
                                    },
                                    T
                                  )
                                )
                              : C.jsx("p", {
                                  className: "text-xs",
                                  children: "Ei merkattuja tuloksia",
                                }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        C.jsx("div", {
          className: "fixed flex w-full bottom-10 mb-5",
          children:
            b && x
              ? C.jsx(on, {
                  onClick: P,
                  className:
                    "bg-red-700 mr-10 w-1/3 ml-auto text-white font-semibold",
                  variant: "secondary",
                  children: "Poistu",
                })
              : C.jsxs("div", {
                  className: "flex w-full gap-3",
                  children: [
                    C.jsx(on, {
                      onClick: m,
                      className: "w-2/4 bg-green-700 text-white font-semibold",
                      variant: "secondary",
                      children: "Merkkaa heitto",
                    }),
                    C.jsx(on, {
                      onClick: S,
                      className: "ml-2 w-2/6 bg-orange-700 text-white",
                      variant: "secondary",
                      children: "Kori",
                    }),
                  ],
                }),
        }),
      ],
    });
  },
  H2 = () => {
    const [e, t] = c.useState(null),
      n = (o) => {
        t(o);
      },
      r = () => {
        t(null);
      };
    return C.jsx("div", {
      children: e
        ? C.jsx(W2, { courseId: e, onBack: r })
        : C.jsx(uS, { onStart: n }),
    });
  };
$a.createRoot(document.getElementById("root")).render(
  C.jsx($.StrictMode, { children: C.jsx(H2, {}) })
);
