(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(11);

var _reactHelmet = __webpack_require__(41);

var _browser = __webpack_require__(9);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(23));

var _RouteData = _interopRequireWildcard(__webpack_require__(42));

var _SiteData = _interopRequireWildcard(__webpack_require__(43));

var _Prefetch = _interopRequireDefault(__webpack_require__(44));

var _Routes = _interopRequireDefault(__webpack_require__(25));

var _Root = _interopRequireDefault(__webpack_require__(45));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTemplateForPath = registerTemplateForPath;
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplates = exports.templateErrorByPath = exports.templatesByPath = exports.templateUpdated = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _axios = _interopRequireDefault(__webpack_require__(19));

var _utils = __webpack_require__(11);

var _Visibility = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = [];
exports.templates = templates;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;
var templateIndexByPath = {
  '404': 0
};
var templatesByPath = {
  '404': templates[0]
};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;

var registerTemplates = function registerTemplates(tmps) {
  templates.splice.apply(templates, [0, Infinity].concat(_toConsumableArray(tmps)));
  templatesByPath['404'] = templates[0];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');

        if (href) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function registerTemplateForPath(path, index) {
  path = (0, _utils.getRoutePath)(path);
  templateIndexByPath[path] = index;
  templatesByPath[path] = templates[index];
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 41;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true;
            return _context2.abrupt("return");

          case 41:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 44:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.fullData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return", routeInfo.fullData);

          case 8:
            // Request and build the props one by one
            routeInfo.fullData = _objectSpread({}, routeInfo.data || {}); // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.fullData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
            return _context4.abrupt("return", routeInfo.fullData);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              registerTemplateForPath(path, routeInfo.templateIndex);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (!(!routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 19;
              break;
            }

            if (!priority) {
              _context5.next = 16;
              break;
            }

            _context5.next = 14;
            return Template.preload();

          case 14:
            _context5.next = 18;
            break;

          case 16:
            _context5.next = 18;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 18:
            routeInfo.templateLoaded = true;

          case 19:
            return _context5.abrupt("return", Template);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        data,
        _ref13,
        _ref14,
        _args6 = arguments;

    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 10;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            data = _context6.sent;
            _context6.next = 21;
            break;

          case 10:
            if (!(type === 'template')) {
              _context6.next = 15;
              break;
            }

            _context6.next = 13;
            return prefetchTemplate(path, options);

          case 13:
            _context6.next = 21;
            break;

          case 15:
            ;
            _context6.next = 18;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 18:
            _ref13 = _context6.sent;
            _ref14 = _slicedToArray(_ref13, 1);
            data = _ref14[0];

          case 21:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

            return _context6.abrupt("return", data);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateIndexByPath, "templateIndexByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _swimmer = __webpack_require__(33);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(36);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(38);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(39);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(15);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(37)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(13);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(1));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/Users/michaelsmith/playground/external-techs/node_modules/react-static-plugin-styled-components",plugins:[],hooks:{}},{location:"/Users/michaelsmith/playground/external-techs",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(34); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/404.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-404 */).then(__webpack_require__.bind(null, 27))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/404.js');},resolve:function resolve(){return /*require.resolve*/(27);},chunkName:function chunkName(){return"src-pages-404";}}),universalOptions);var t_1=_Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/blog.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-blog */).then(__webpack_require__.bind(null, 28))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/blog.js');},resolve:function resolve(){return /*require.resolve*/(28);},chunkName:function chunkName(){return"src-pages-blog";}}),universalOptions);var t_2=_Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/containers/Post",load:function load(){return Promise.all([Promise.resolve(/* import() | src-containers-Post */).then(__webpack_require__.bind(null, 29))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/containers/Post');},resolve:function resolve(){return /*require.resolve*/(29);},chunkName:function chunkName(){return"src-containers-Post";}}),universalOptions);var t_3=_Users_michaelsmith_playground_external_techs_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/pages/index.js",load:function load(){return Promise.all([Promise.resolve(/* import() | src-pages-index */).then(__webpack_require__.bind(null, 30))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/pages/index.js');},resolve:function resolve(){return /*require.resolve*/(30);},chunkName:function chunkName(){return"src-pages-index";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ([t_0,t_1,t_2,t_3]);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(24));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireWildcard(__webpack_require__(1));

var _ = __webpack_require__(9);

var _StaticInfo = __webpack_require__(14);

var _utils = __webpack_require__(11);

var _Location = _interopRequireDefault(__webpack_require__(26));

var _Spinner = _interopRequireDefault(__webpack_require__(16));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();

      var getComponentForPath = function getComponentForPath(routePath) {
        // Clean the path
        routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

        var Comp = _.templatesByPath[routePath]; // Detect a 404

        var is404 = routePath === '404'; // Detect a failed template

        if (_.templateErrorByPath[routePath]) {
          is404 = true;
          Comp = _.templatesByPath['404'];
        } // Detect an unloaded template
        // TODO:suspense - This will become a suspense resource


        if (!Comp) {
          if (is404) {
            throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
          }

          ;

          _asyncToGenerator(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee() {
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.all([(0, _.prefetch)(routePath, {
                      priority: true
                    }), new Promise(function (resolve) {
                      return setTimeout(resolve, "200");
                    })]);

                  case 2:
                    _this3.safeForceUpdate();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }))();

          return Loader;
        }

        return function () {
          var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Comp ? _react.default.createElement(Comp, _extends({}, newProps, is404 ? {
            is404: true
          } : {}, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          })) : null;
        };
      };

      var Comp = getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"404 - Oh no's! We couldn't find that page :("));});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject5(){var data=_taggedTemplateLiteral(["\n  margin-top: 0.3em;\n  margin-bottom: 0.3em;\n"]);_templateObject5=function _templateObject5(){return data;};return data;}function _templateObject4(){var data=_taggedTemplateLiteral(["\n  width: 100%;\n  // height: 5em;\n  overflow: hidden;\n"]);_templateObject4=function _templateObject4(){return data;};return data;}function _templateObject3(){var data=_taggedTemplateLiteral(["\n  list-style: none;\n  padding-left: 0;\n  margin: 0.7em;\n  li {\n    margin-bottom: 15px;\n    padding: 5px\n    border: 1px solid grey;\n    a {\n      text-decoration: none;\n      color: black;\n      display: inline-block;\n      width: 100%;\n    }\n  }\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  font-size: 1.5em;\n  font-family: 'Roboto', sans-serif;\n  margin: 0.7em;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  font-family: 'Montserrat', sans-serif;\n  font-size: 3em;\n  display: block;\n  background: #83c0fd7d;\n  padding: 10px;\n  text-align: center;\n  margin: 0;\n  color: white;\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),\n    url(https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)\n      no-repeat;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Name=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1(_templateObject());var Intro=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2(_templateObject2());var BlogList=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul(_templateObject3());var BlogSummary=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());var BlogTitle=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3(_templateObject5());/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var posts=_ref.posts;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name,null,"Blog"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Intro,null,"Welcome to the External Techs blog!"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogList,null,posts.map(function(post){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:post.id},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/blog/post/".concat(post.id,"/")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogSummary,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BlogTitle,null,post.title))));})));}));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject2(){var data=_taggedTemplateLiteral(["\n  font-family: 'Roboto', sans-serif;\n  margin: 0.7em;\n  margin-left: 10px;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  font-size: 1.5em;\n  font-family: 'Montserrat', sans-serif;\n  margin: 0.7em;\n  margin-left: 10px;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Title=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2(_templateObject());var Copy=styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject2());/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withRouteData"])(function(_ref){var post=_ref.post;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/blog/"},'<'," Back"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title,null,post.title),post.body.map(function(copy){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Copy,null,copy);}));}));

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject3(){var data=_taggedTemplateLiteral(["\n  position: absolute;\n  font-size: 1.5em;\n  top: 500px;\n  font-family: 'Roboto', sans-serif;\n  margin: 0.7em;\n"]);_templateObject3=function _templateObject3(){return data;};return data;}function _templateObject2(){var data=_taggedTemplateLiteral(["\n  font-family: 'Montserrat', sans-serif;\n  font-size: 4em;\n  display: block;\n  background: #83c0fd7d;\n  padding: 10px;\n  text-align: center;\n  margin: 0;\n  margin-top: 100px;\n"]);_templateObject2=function _templateObject2(){return data;};return data;}function _templateObject(){var data=_taggedTemplateLiteral(["\n  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),\n    url(https://images.pexels.com/photos/239898/pexels-photo-239898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)\n      no-repeat;\n  height: 500px;\n  width: 100%;\n  position: absolute;\n  color: white;\n  background-size: cover;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Header=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());var Name=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject2());var About=styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());/* harmony default export */ __webpack_exports__["default"] = (Object(react_static__WEBPACK_IMPORTED_MODULE_1__["withSiteData"])(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name,null,"External Techs")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"External Techs is software consultancy based in London."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"We focus on Javascript, React and Node."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"If you need experts in Javascript look no further and contact us.")));}));

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
__webpack_require__(35);
module.exports = __webpack_require__(40);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(18).default;

var _require = __webpack_require__(9),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/michaelsmith/playground/external-techs/dist/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(18).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var templates = __webpack_require__(21).default;

var _require = __webpack_require__(9),
    registerTemplates = _require.registerTemplates;

registerTemplates(templates);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/michaelsmith/playground/external-techs/dist/react-static-templates.js", function () {
    registerTemplates(__webpack_require__(21).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapTemplates.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(15);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 13,
	"./": 13,
	"./index": 13,
	"./index.js": 13
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 37;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(22);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _StaticInfo = _interopRequireDefault(__webpack_require__(14));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(50).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(1));

var _ = __webpack_require__(9);

var _Spinner = _interopRequireDefault(__webpack_require__(16));

var _StaticInfo = __webpack_require__(14);

var _Routes = __webpack_require__(25);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath; // If there was an error reported for this path, throw an error

      if (_.routeErrorByPath[routePath]) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (!_.routeInfoByPath[routePath] || !_.routeInfoByPath[routePath].data) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)


      return children(_.routeInfoByPath[routePath].data);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));
var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(1));

var _axios = _interopRequireDefault(__webpack_require__(19));

var _Spinner = _interopRequireDefault(__webpack_require__(16));

var _StaticInfo = __webpack_require__(14);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(10));

var _react = _interopRequireDefault(__webpack_require__(1));

var _utils = __webpack_require__(11);

var _ = __webpack_require__(9);

var _Visibility = _interopRequireDefault(__webpack_require__(20));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _router = __webpack_require__(8);

var _ = __webpack_require__(9);

var _utils = __webpack_require__(11);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(46));

var _HashScroller = _interopRequireDefault(__webpack_require__(47));

var _StaticInfo = __webpack_require__(14);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath;
  return _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          templateIndex = staticInfo.templateIndex; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the templateIndex for the
      // initial path

      (0, _.registerTemplateForPath)(path, templateIndex);
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _utils = __webpack_require__(11);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(4);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _raf = _interopRequireDefault(__webpack_require__(24));

var _Location = _interopRequireDefault(__webpack_require__(26));

var _scrollTo = _interopRequireDefault(__webpack_require__(23));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(0).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(0).default;

  var leaveModule = __webpack_require__(0).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat|Roboto);", ""]);

// Module
exports.push([module.i, "body {\n  margin: 0;\n}\n\nnav a {\n  color: white;\n  text-decoration: none;\n  padding: 5px;\n  font-family: 'Montserrat', sans-serif;\n}\n\na {\n  font-family: 'Montserrat', sans-serif;\n}\n", ""]);



/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(17);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(5);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(8);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(3);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/michaelsmith/playground/external-techs/src/app.css
var app = __webpack_require__(48);

// CONCATENATED MODULE: /Users/michaelsmith/playground/external-techs/src/App.js
function _templateObject(){var data=_taggedTemplateLiteral(["\n  background: #83c0fd7d;\n  position: absolute;\n  color: white;\n  background-size: cover;\n  z-index: 1;\n  right: 0;\n"]);_templateObject=function _templateObject(){return data;};return data;}function _taggedTemplateLiteral(strings,raw){if(!raw){raw=strings.slice(0);}return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Nav=external_styled_components_default.a.nav(_templateObject());function App(){return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement(Nav,null,external_react_default.a.createElement(router_["Link"],{to:"/"},"Home"),external_react_default.a.createElement(router_["Link"],{to:"/blog"},"Blog")),external_react_default.a.createElement(lib["Routes"],null));}/* harmony default export */ var src_App = (App);
// CONCATENATED MODULE: /Users/michaelsmith/playground/external-techs/src/index.js
// Your top level component
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var src = __webpack_exports__["default"] = (src_App);// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById('root'));};// Render!
src_render(src_App);// Hot Module Replacement
if(false){}}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.02afa08c.js.map