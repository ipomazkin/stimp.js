/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/apps/2-dom.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/stimp.js":
/*!***********************!*\
  !*** ./dist/stimp.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n!function (e, t) {\n  if (\"object\" == ( false ? undefined : _typeof(exports)) && \"object\" == ( false ? undefined : _typeof(module))) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var r, n; }\n}(this, function () {\n  return function (e) {\n    var t = {};\n\n    function n(r) {\n      if (t[r]) return t[r].exports;\n      var o = t[r] = {\n        i: r,\n        l: !1,\n        exports: {}\n      };\n      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n    }\n\n    return n.m = e, n.c = t, n.d = function (e, t, r) {\n      n.o(e, t) || Object.defineProperty(e, t, {\n        enumerable: !0,\n        get: r\n      });\n    }, n.r = function (e) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {\n        value: \"Module\"\n      }), Object.defineProperty(e, \"__esModule\", {\n        value: !0\n      });\n    }, n.t = function (e, t) {\n      if (1 & t && (e = n(e)), 8 & t) return e;\n      if (4 & t && \"object\" == _typeof(e) && e && e.__esModule) return e;\n      var r = Object.create(null);\n      if (n.r(r), Object.defineProperty(r, \"default\", {\n        enumerable: !0,\n        value: e\n      }), 2 & t && \"string\" != typeof e) for (var o in e) {\n        n.d(r, o, function (t) {\n          return e[t];\n        }.bind(null, o));\n      }\n      return r;\n    }, n.n = function (e) {\n      var t = e && e.__esModule ? function () {\n        return e[\"default\"];\n      } : function () {\n        return e;\n      };\n      return n.d(t, \"a\", t), t;\n    }, n.o = function (e, t) {\n      return Object.prototype.hasOwnProperty.call(e, t);\n    }, n.p = \"\", n(n.s = 5);\n  }([function (e, t, n) {\n    \"use strict\";\n\n    (function (e, r) {\n      var o,\n          i = n(2);\n      o = \"undefined\" != typeof self ? self : \"undefined\" != typeof window ? window : void 0 !== e ? e : r;\n      var u = Object(i.a)(o);\n      t.a = u;\n    }).call(this, n(3), n(4)(e));\n  }, function (e, t) {\n    function n(e, t) {\n      var n = e.length,\n          r = new Array(n),\n          o = {},\n          i = n,\n          u = function (e) {\n        for (var t = new Map(), n = 0, r = e.length; n < r; n++) {\n          var o = e[n];\n          t.has(o[0]) || t.set(o[0], new Set()), t.has(o[1]) || t.set(o[1], new Set()), t.get(o[0]).add(o[1]);\n        }\n\n        return t;\n      }(t),\n          c = function (e) {\n        for (var t = new Map(), n = 0, r = e.length; n < r; n++) {\n          t.set(e[n], n);\n        }\n\n        return t;\n      }(e);\n\n      for (t.forEach(function (e) {\n        if (!c.has(e[0]) || !c.has(e[1])) throw new Error(\"Unknown node. There is an unknown node in the supplied edges.\");\n      }); i--;) {\n        o[i] || a(e[i], i, new Set());\n      }\n\n      return r;\n\n      function a(e, t, i) {\n        if (i.has(e)) {\n          var f;\n\n          try {\n            f = \", node was:\" + JSON.stringify(e);\n          } catch (e) {\n            f = \"\";\n          }\n\n          throw new Error(\"Cyclic dependency\" + f);\n        }\n\n        if (!c.has(e)) throw new Error(\"Found unknown node. Make sure to provided all involved nodes. Unknown node: \" + JSON.stringify(e));\n\n        if (!o[t]) {\n          o[t] = !0;\n          var s = u.get(e) || new Set();\n\n          if (t = (s = Array.from(s)).length) {\n            i.add(e);\n\n            do {\n              var l = s[--t];\n              a(l, c.get(l), i);\n            } while (t);\n\n            i[\"delete\"](e);\n          }\n\n          r[--n] = e;\n        }\n      }\n    }\n\n    e.exports = function (e) {\n      return n(function (e) {\n        for (var t = new Set(), n = 0, r = e.length; n < r; n++) {\n          var o = e[n];\n          t.add(o[0]), t.add(o[1]);\n        }\n\n        return Array.from(t);\n      }(e), e);\n    }, e.exports.array = n;\n  }, function (e, t, n) {\n    \"use strict\";\n\n    function r(e) {\n      var t,\n          n = e.Symbol;\n      return \"function\" == typeof n ? n.observable ? t = n.observable : (t = n(\"observable\"), n.observable = t) : t = \"@@observable\", t;\n    }\n\n    n.d(t, \"a\", function () {\n      return r;\n    });\n  }, function (e, t) {\n    var n;\n\n    n = function () {\n      return this;\n    }();\n\n    try {\n      n = n || new Function(\"return this\")();\n    } catch (e) {\n      \"object\" == (typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) && (n = window);\n    }\n\n    e.exports = n;\n  }, function (e, t) {\n    e.exports = function (e) {\n      if (!e.webpackPolyfill) {\n        var t = Object.create(e);\n        t.children || (t.children = []), Object.defineProperty(t, \"loaded\", {\n          enumerable: !0,\n          get: function get() {\n            return t.l;\n          }\n        }), Object.defineProperty(t, \"id\", {\n          enumerable: !0,\n          get: function get() {\n            return t.i;\n          }\n        }), Object.defineProperty(t, \"exports\", {\n          enumerable: !0\n        }), t.webpackPolyfill = 1;\n      }\n\n      return t;\n    };\n  }, function (e, t, n) {\n    \"use strict\";\n\n    function r(e, t) {\n      for (var n = 0; n < t.length; n++) {\n        var r = t[n];\n        r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);\n      }\n    }\n\n    n.r(t);\n\n    var o = function () {\n      function e() {\n        !function (e, t) {\n          if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, e), this.name = \"\";\n      }\n\n      var t, n, o;\n      return t = e, (n = [{\n        key: \"log\",\n        value: function value() {\n          for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) {\n            n[r] = arguments[r];\n          }\n\n          (e = console).log.apply(e, [\"\".concat(this.name, \":\")].concat(n));\n        }\n      }, {\n        key: \"debug\",\n        value: function value() {}\n      }]) && r(t.prototype, n), o && r(t, o), e;\n    }();\n\n    function i(e) {\n      return (i = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n        return _typeof(e);\n      } : function (e) {\n        return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : _typeof(e);\n      })(e);\n    }\n\n    function u(e, t) {\n      var n = Object.keys(e);\n\n      if (Object.getOwnPropertySymbols) {\n        var r = Object.getOwnPropertySymbols(e);\n        t && (r = r.filter(function (t) {\n          return Object.getOwnPropertyDescriptor(e, t).enumerable;\n        })), n.push.apply(n, r);\n      }\n\n      return n;\n    }\n\n    function c(e) {\n      for (var t = 1; t < arguments.length; t++) {\n        var n = null != arguments[t] ? arguments[t] : {};\n        t % 2 ? u(Object(n), !0).forEach(function (t) {\n          a(e, t, n[t]);\n        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {\n          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));\n        });\n      }\n\n      return e;\n    }\n\n    function a(e, t, n) {\n      return t in e ? Object.defineProperty(e, t, {\n        value: n,\n        enumerable: !0,\n        configurable: !0,\n        writable: !0\n      }) : e[t] = n, e;\n    }\n\n    function f(e, t) {\n      for (var n = 0; n < t.length; n++) {\n        var r = t[n];\n        r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);\n      }\n    }\n\n    function s(e, t) {\n      return (s = Object.setPrototypeOf || function (e, t) {\n        return e.__proto__ = t, e;\n      })(e, t);\n    }\n\n    function l(e) {\n      var t = function () {\n        if (\"undefined\" == typeof Reflect || !Reflect.construct) return !1;\n        if (Reflect.construct.sham) return !1;\n        if (\"function\" == typeof Proxy) return !0;\n\n        try {\n          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;\n        } catch (e) {\n          return !1;\n        }\n      }();\n\n      return function () {\n        var n,\n            r = d(e);\n\n        if (t) {\n          var o = d(this).constructor;\n          n = Reflect.construct(r, arguments, o);\n        } else n = r.apply(this, arguments);\n\n        return p(this, n);\n      };\n    }\n\n    function p(e, t) {\n      return !t || \"object\" !== i(t) && \"function\" != typeof t ? function (e) {\n        if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n        return e;\n      }(e) : t;\n    }\n\n    function d(e) {\n      return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {\n        return e.__proto__ || Object.getPrototypeOf(e);\n      })(e);\n    }\n\n    var y = function (e) {\n      !function (e, t) {\n        if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function\");\n        e.prototype = Object.create(t && t.prototype, {\n          constructor: {\n            value: e,\n            writable: !0,\n            configurable: !0\n          }\n        }), t && s(e, t);\n      }(i, e);\n      var t,\n          n,\n          r,\n          o = l(i);\n\n      function i(e, t, n, r) {\n        var u;\n        !function (e, t) {\n          if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, i), (u = o.call(this)).app = e, u.name = t, u.depends = r, u.initState = n, u.prevState = n, u.utils = {}, u.beforeUpdateHooks = {}, u.afterUodateHooks = {}, u.initHooks = [], u.reducer = function () {\n          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c({}, n),\n              o = arguments.length > 1 ? arguments[1] : void 0;\n\n          for (var i in n) {\n            if (o.type === \"\".concat(e.name, \"/\").concat(t, \"/\").concat(i)) return r[i] = o.value, r;\n          }\n\n          return \"ACTION_TOGGLE_BULK\" === o.type ? c(c({}, r), o.nextState) : r;\n        };\n\n        var a = function a(e) {\n          u[i._getHandlerName(e, \"set\")] = function (t) {\n            u.app.store.dispatch({\n              type: \"\".concat(u.app.name, \"/\").concat(u.name, \"/\").concat(e),\n              value: t\n            });\n          }, u.beforeUpdateHooks[e] = [], u.afterUodateHooks[e] = [];\n        };\n\n        for (var f in n) {\n          a(f);\n        }\n\n        return u;\n      }\n\n      return t = i, r = [{\n        key: \"_getHandlerName\",\n        value: function value(e) {\n          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : \"onSet\";\n          return e = e.charAt(0).toUpperCase() + e.slice(1), \"\".concat(t).concat(e);\n        }\n      }], (n = [{\n        key: \"_getSortEdges\",\n        value: function value() {\n          var e = this,\n              t = [];\n          return this.depends.length > 0 && this.depends.forEach(function (n) {\n            return t.push([e.name, n]);\n          }), t;\n        }\n      }, {\n        key: \"_subscribeHandler\",\n        value: function value() {\n          var e = this,\n              t = this.getState(),\n              n = c({}, this.prevState),\n              r = c({}, t),\n              o = function o(r) {\n            if (t[r] !== n[r]) {\n              var o = i._getHandlerName(r, \"onUpdate\");\n\n              e.beforeUpdateHooks[r] && e.beforeUpdateHooks[r].forEach(function (e) {\n                return e(t[r], n[r]);\n              }), void 0 !== e[o] && e[o].apply(e, [t[r], n[r]]), e.afterUodateHooks[r] && e.afterUodateHooks[r].forEach(function (e) {\n                return e(t[r], n[r]);\n              });\n            }\n          };\n\n          for (var u in t) {\n            o(u);\n          }\n\n          this.prevState = r;\n        }\n      }, {\n        key: \"setState\",\n        value: function value() {\n          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};\n\n          for (var t in this.app.store.dispatch({\n            type: \"ACTION_TOGGLE_BULK\",\n            nextState: e\n          }), e) {\n            this.app.store.dispatch({\n              type: \"\".concat(this.app.name, \"/\").concat(this.name, \"/\").concat(t),\n              value: e[t]\n            });\n          }\n        }\n      }, {\n        key: \"getState\",\n        value: function value() {\n          return this.app.store.getState()[this.name];\n        }\n      }, {\n        key: \"onBeforeUpdate\",\n        value: function value(e, t) {\n          this.beforeUpdateHooks[e].push(t.bind(this));\n        }\n      }, {\n        key: \"onAfterUpdate\",\n        value: function value(e, t) {\n          this.afterUodateHooks[e].push(t.bind(this));\n        }\n      }, {\n        key: \"onInit\",\n        value: function value(e) {\n          this.initHooks.push(e.bind(this));\n        }\n      }, {\n        key: \"init\",\n        value: function value() {\n          var e = this;\n          this.app.store.subscribe(function () {\n            e._subscribeHandler();\n          }), this.initHooks.forEach(function (e) {\n            e();\n          });\n        }\n      }]) && f(t.prototype, n), r && f(t, r), i;\n    }(o),\n        h = n(1),\n        b = n.n(h),\n        v = n(0),\n        m = function m() {\n      return Math.random().toString(36).substring(7).split(\"\").join(\".\");\n    },\n        w = {\n      INIT: \"@@redux/INIT\" + m(),\n      REPLACE: \"@@redux/REPLACE\" + m(),\n      PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n        return \"@@redux/PROBE_UNKNOWN_ACTION\" + m();\n      }\n    };\n\n    function g(e) {\n      if (\"object\" != _typeof(e) || null === e) return !1;\n\n      for (var t = e; null !== Object.getPrototypeOf(t);) {\n        t = Object.getPrototypeOf(t);\n      }\n\n      return Object.getPrototypeOf(e) === t;\n    }\n\n    function O(e, t, n) {\n      var r;\n      if (\"function\" == typeof t && \"function\" == typeof n || \"function\" == typeof n && \"function\" == typeof arguments[3]) throw new Error(\"It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.\");\n\n      if (\"function\" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {\n        if (\"function\" != typeof n) throw new Error(\"Expected the enhancer to be a function.\");\n        return n(O)(e, t);\n      }\n\n      if (\"function\" != typeof e) throw new Error(\"Expected the reducer to be a function.\");\n      var o = e,\n          i = t,\n          u = [],\n          c = u,\n          a = !1;\n\n      function f() {\n        c === u && (c = u.slice());\n      }\n\n      function s() {\n        if (a) throw new Error(\"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.\");\n        return i;\n      }\n\n      function l(e) {\n        if (\"function\" != typeof e) throw new Error(\"Expected the listener to be a function.\");\n        if (a) throw new Error(\"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.\");\n        var t = !0;\n        return f(), c.push(e), function () {\n          if (t) {\n            if (a) throw new Error(\"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.\");\n            t = !1, f();\n            var n = c.indexOf(e);\n            c.splice(n, 1), u = null;\n          }\n        };\n      }\n\n      function p(e) {\n        if (!g(e)) throw new Error(\"Actions must be plain objects. Use custom middleware for async actions.\");\n        if (void 0 === e.type) throw new Error('Actions may not have an undefined \"type\" property. Have you misspelled a constant?');\n        if (a) throw new Error(\"Reducers may not dispatch actions.\");\n\n        try {\n          a = !0, i = o(i, e);\n        } finally {\n          a = !1;\n        }\n\n        for (var t = u = c, n = 0; n < t.length; n++) {\n          (0, t[n])();\n        }\n\n        return e;\n      }\n\n      function d(e) {\n        if (\"function\" != typeof e) throw new Error(\"Expected the nextReducer to be a function.\");\n        o = e, p({\n          type: w.REPLACE\n        });\n      }\n\n      function y() {\n        var e,\n            t = l;\n        return (e = {\n          subscribe: function subscribe(e) {\n            if (\"object\" != _typeof(e) || null === e) throw new TypeError(\"Expected the observer to be an object.\");\n\n            function n() {\n              e.next && e.next(s());\n            }\n\n            return n(), {\n              unsubscribe: t(n)\n            };\n          }\n        })[v.a] = function () {\n          return this;\n        }, e;\n      }\n\n      return p({\n        type: w.INIT\n      }), (r = {\n        dispatch: p,\n        subscribe: l,\n        getState: s,\n        replaceReducer: d\n      })[v.a] = y, r;\n    }\n\n    function j(e, t) {\n      var n = t && t.type;\n      return \"Given \" + (n && 'action \"' + String(n) + '\"' || \"an action\") + ', reducer \"' + e + '\" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';\n    }\n\n    function S(e) {\n      for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {\n        var o = t[r];\n        0, \"function\" == typeof e[o] && (n[o] = e[o]);\n      }\n\n      var i,\n          u = Object.keys(n);\n\n      try {\n        !function (e) {\n          Object.keys(e).forEach(function (t) {\n            var n = e[t];\n            if (void 0 === n(void 0, {\n              type: w.INIT\n            })) throw new Error('Reducer \"' + t + \"\\\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.\");\n            if (void 0 === n(void 0, {\n              type: w.PROBE_UNKNOWN_ACTION()\n            })) throw new Error('Reducer \"' + t + \"\\\" returned undefined when probed with a random type. Don't try to handle \" + w.INIT + ' or other actions in \"redux/*\" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');\n          });\n        }(n);\n      } catch (e) {\n        i = e;\n      }\n\n      return function (e, t) {\n        if (void 0 === e && (e = {}), i) throw i;\n\n        for (var r = !1, o = {}, c = 0; c < u.length; c++) {\n          var a = u[c],\n              f = n[a],\n              s = e[a],\n              l = f(s, t);\n\n          if (void 0 === l) {\n            var p = j(a, t);\n            throw new Error(p);\n          }\n\n          o[a] = l, r = r || l !== s;\n        }\n\n        return (r = r || u.length !== Object.keys(e).length) ? o : e;\n      };\n    }\n\n    function k(e, t) {\n      var n = Object.keys(e);\n\n      if (Object.getOwnPropertySymbols) {\n        var r = Object.getOwnPropertySymbols(e);\n        t && (r = r.filter(function (t) {\n          return Object.getOwnPropertyDescriptor(e, t).enumerable;\n        })), n.push.apply(n, r);\n      }\n\n      return n;\n    }\n\n    function E(e) {\n      for (var t = 1; t < arguments.length; t++) {\n        var n = null != arguments[t] ? arguments[t] : {};\n        t % 2 ? k(Object(n), !0).forEach(function (t) {\n          P(e, t, n[t]);\n        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function (t) {\n          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));\n        });\n      }\n\n      return e;\n    }\n\n    function P(e, t, n) {\n      return t in e ? Object.defineProperty(e, t, {\n        value: n,\n        enumerable: !0,\n        configurable: !0,\n        writable: !0\n      }) : e[t] = n, e;\n    }\n\n    function _(e) {\n      var t = O(x(e));\n      return t.asyncReducers = E({}, e), t.injectReducer = function (e, n) {\n        t.asyncReducers[e] = n, t.replaceReducer(x(t.asyncReducers));\n      }, t;\n    }\n\n    function x(e) {\n      return S(E({}, e));\n    }\n\n    function I(e) {\n      return (I = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n        return _typeof(e);\n      } : function (e) {\n        return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : _typeof(e);\n      })(e);\n    }\n\n    function R(e, t, n) {\n      return t in e ? Object.defineProperty(e, t, {\n        value: n,\n        enumerable: !0,\n        configurable: !0,\n        writable: !0\n      }) : e[t] = n, e;\n    }\n\n    function T(e, t) {\n      for (var n = 0; n < t.length; n++) {\n        var r = t[n];\n        r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);\n      }\n    }\n\n    function H(e, t) {\n      return (H = Object.setPrototypeOf || function (e, t) {\n        return e.__proto__ = t, e;\n      })(e, t);\n    }\n\n    function A(e) {\n      var t = function () {\n        if (\"undefined\" == typeof Reflect || !Reflect.construct) return !1;\n        if (Reflect.construct.sham) return !1;\n        if (\"function\" == typeof Proxy) return !0;\n\n        try {\n          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;\n        } catch (e) {\n          return !1;\n        }\n      }();\n\n      return function () {\n        var n,\n            r = N(e);\n\n        if (t) {\n          var o = N(this).constructor;\n          n = Reflect.construct(r, arguments, o);\n        } else n = r.apply(this, arguments);\n\n        return D(this, n);\n      };\n    }\n\n    function D(e, t) {\n      return !t || \"object\" !== I(t) && \"function\" != typeof t ? function (e) {\n        if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n        return e;\n      }(e) : t;\n    }\n\n    function N(e) {\n      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {\n        return e.__proto__ || Object.getPrototypeOf(e);\n      })(e);\n    }\n\n    var M = function (e) {\n      !function (e, t) {\n        if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function\");\n        e.prototype = Object.create(t && t.prototype, {\n          constructor: {\n            value: e,\n            writable: !0,\n            configurable: !0\n          }\n        }), t && H(e, t);\n      }(i, e);\n      var t,\n          n,\n          r,\n          o = A(i);\n\n      function i(e, t) {\n        var n;\n        return function (e, t) {\n          if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n        }(this, i), (n = o.call(this)).options = t, n.name = e, n.modules = {}, n.store = null, n;\n      }\n\n      return t = i, r = [{\n        key: \"_sortModulesByDepends\",\n        value: function value() {\n          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},\n              t = [],\n              n = [];\n\n          for (var r in e) {\n            var o = e[r]._getSortEdges();\n\n            o.length > 0 ? n = n.concat(e[r]._getSortEdges()) : t.push(e[r]);\n          }\n\n          return b()(n).reverse().forEach(function (n) {\n            return t.push(e[n]);\n          }), t;\n        }\n      }], (n = [{\n        key: \"addModule\",\n        value: function value(e, t) {\n          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},\n              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],\n              o = new e(this, t, n, r);\n          return this.modules[t] = o, null === this.store ? this.store = _(R({}, t, o.reducer)) : this.store.injectReducer(t, o.reducer), o;\n        }\n      }, {\n        key: \"init\",\n        value: function value() {\n          var e = this,\n              t = i._sortModulesByDepends(this.modules).filter(function (e) {\n            return void 0 !== e;\n          }).filter(function (t) {\n            for (var n = !0, r = 0; r < t.depends.length; r++) {\n              if (void 0 === e.modules[t.depends[r]]) {\n                n = !1;\n                break;\n              }\n            }\n\n            return n;\n          });\n\n          this.debug(\"init - modules\", t), t.forEach(function (t) {\n            e.debug(\"init - modules - module\", t), t.init();\n          });\n        }\n      }]) && T(t.prototype, n), r && T(t, r), i;\n    }(o);\n\n    function U(e) {\n      return (U = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (e) {\n        return _typeof(e);\n      } : function (e) {\n        return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : _typeof(e);\n      })(e);\n    }\n\n    function C(e, t) {\n      if (!(e instanceof t)) throw new TypeError(\"Cannot call a class as a function\");\n    }\n\n    function B(e, t) {\n      for (var n = 0; n < t.length; n++) {\n        var r = t[n];\n        r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);\n      }\n    }\n\n    function L(e, t) {\n      return (L = Object.setPrototypeOf || function (e, t) {\n        return e.__proto__ = t, e;\n      })(e, t);\n    }\n\n    function G(e) {\n      var t = function () {\n        if (\"undefined\" == typeof Reflect || !Reflect.construct) return !1;\n        if (Reflect.construct.sham) return !1;\n        if (\"function\" == typeof Proxy) return !0;\n\n        try {\n          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;\n        } catch (e) {\n          return !1;\n        }\n      }();\n\n      return function () {\n        var n,\n            r = Y(e);\n\n        if (t) {\n          var o = Y(this).constructor;\n          n = Reflect.construct(r, arguments, o);\n        } else n = r.apply(this, arguments);\n\n        return K(this, n);\n      };\n    }\n\n    function K(e, t) {\n      return !t || \"object\" !== U(t) && \"function\" != typeof t ? W(e) : t;\n    }\n\n    function W(e) {\n      if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n      return e;\n    }\n\n    function Y(e) {\n      return (Y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {\n        return e.__proto__ || Object.getPrototypeOf(e);\n      })(e);\n    }\n\n    var q = function (e) {\n      !function (e, t) {\n        if (\"function\" != typeof t && null !== t) throw new TypeError(\"Super expression must either be null or a function\");\n        e.prototype = Object.create(t && t.prototype, {\n          constructor: {\n            value: e,\n            writable: !0,\n            configurable: !0\n          }\n        }), t && L(e, t);\n      }(i, e);\n      var t,\n          n,\n          r,\n          o = G(i);\n\n      function i() {\n        var e;\n        C(this, i);\n\n        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) {\n          n[r] = arguments[r];\n        }\n\n        return (e = o.call.apply(o, [this].concat(n))).selectorModule = \"-m\", e.selectorPart = \"-ch\", e.selectorIterable = \"-i\", e.dom = {\n          root: null\n        }, e.isDOMHasBeenInit = !1, e.domHooksBeforeInit = [], e.domHooksAfterInit = [], e.onInit(e.initDOM.bind(W(e))), e;\n      }\n\n      return t = i, (n = [{\n        key: \"_initDOMChild\",\n        value: function value(e) {\n          var t = e.getAttribute(this.selectorPart),\n              n = e.getAttribute(this.selectorIterable);\n          null !== n ? (void 0 === this.dom[t] && (this.dom[t] = {}), this.dom[t][n] = e) : this.dom[t] = e;\n        }\n      }, {\n        key: \"initDOM\",\n        value: function value() {\n          if (this.domHooksBeforeInit.forEach(function (e) {\n            return e();\n          }), this.dom.root = document.querySelector(\"[\".concat(this.selectorModule, \"=\").concat(this.name, \"]\")), this.dom.root) {\n            for (var e = this.dom.root.querySelectorAll(\"[\".concat(this.selectorPart, \"]\")), t = 0, n = e.length; t < n; t++) {\n              for (var r = e[t], o = !1, i = !1, u = r; !o;) {\n                var c = u.parentNode.getAttribute(this.selectorModule);\n                null !== c ? (o = !0, i = c === this.name) : u = u.parentNode;\n              }\n\n              i && this._initDOMChild(r);\n            }\n\n            this.isDOMHasBeenInit = !0, this.domHooksAfterInit.forEach(function (e) {\n              return e();\n            });\n          } else this.isDOMHasBeenInit = !1;\n        }\n      }, {\n        key: \"onBeforeDomInit\",\n        value: function value(e) {\n          this.domHooksBeforeInit.push(e.bind(this));\n        }\n      }, {\n        key: \"onAfterDomInit\",\n        value: function value(e) {\n          this.domHooksAfterInit.push(e.bind(this));\n        }\n      }]) && B(t.prototype, n), r && B(t, r), i;\n    }(y);\n\n    t[\"default\"] = {\n      Abstract: o,\n      App: M,\n      Module: y,\n      DOMInteractModule: q\n    };\n  }]);\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./dist/stimp.js?");

/***/ }),

/***/ "./examples/apps/2-dom.js":
/*!********************************!*\
  !*** ./examples/apps/2-dom.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_stimp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/stimp */ \"./dist/stimp.js\");\n/* harmony import */ var _dist_stimp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_stimp__WEBPACK_IMPORTED_MODULE_0__);\n\nconsole.log(_dist_stimp__WEBPACK_IMPORTED_MODULE_0___default.a);\nvar app = new _dist_stimp__WEBPACK_IMPORTED_MODULE_0___default.a.App('main');\nvar menuModule = app.addModule(_dist_stimp__WEBPACK_IMPORTED_MODULE_0___default.a.DOMInteractModule, 'menu', {\n  isOpen: false\n});\nmenuModule.onAfterDomInit(function () {\n  var _this = this;\n\n  this.dom.burger.addEventListener('click', function () {\n    _this.setIsOpen(!_this.getState().isOpen);\n  });\n});\n\nmenuModule.onUpdateIsOpen = function (current, prev) {\n  console.log(\"now menu is \".concat(current ? 'open' : 'close', \", but before that menu was \").concat(prev ? 'opened' : 'closed'));\n  this.dom.burger.textContent = current ? 'close' : 'open';\n};\n\napp.init();\nwindow.app = app;\n\n//# sourceURL=webpack:///./examples/apps/2-dom.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (module) {\n  if (!module.webpackPolyfill) {\n    module.deprecate = function () {};\n\n    module.paths = []; // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function () {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function () {\n        return module.i;\n      }\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ })

/******/ });