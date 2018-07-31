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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(19)('wks');
var uid = __webpack_require__(8);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(7)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(26);
var toPrimitive = __webpack_require__(16);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(21);
var defined = __webpack_require__(22);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(18);
var ctx = __webpack_require__(28);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(30);
var enumBugKeys = __webpack_require__(24);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(11);
var has = __webpack_require__(4);
var SRC = __webpack_require__(8)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(2).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(14);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(31);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(7)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(41);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(46)(false);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(19)('keys');
var uid = __webpack_require__(8);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(14);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(30);
var hiddenKeys = __webpack_require__(24).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(22);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NevinhaComponent", function() { return NevinhaComponent$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxProvider", function() { return ParallaxProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NevinhaDOM", function() { return NevinhaDOM; });
var isEvent=function(e){return/^on/.test(e)},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},IsomorphicNevinhaComponent=function(){function e(t,n){classCallCheck(this,e),this.props=t||{},this.state=this.state||{},this.context={},this.children=n,this.componentWillMount()}return createClass(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"setState",value:function(){}}]),e}(),supportTypedOM=function(){return window.CSS&&CSS.number},fromPixelToFloat=function(e){return parseFloat(e.replace("px",""))},formatCSSValue=function(e){return"number"==typeof e?CSS.number(e):"string"==typeof e&&isPXUnit(e)?CSS.px(fromPixelToFloat(e)):e},blackPropsList=function(e){if("sticky"==e)return!0},setTypedStyle=function(e,t,n){if(!supportTypedOM())return blackPropsList(n)&&(e.style[t]="-webkit-"+n),e.style[t]=n;e.attributeStyleMap.set(t,formatCSSValue(n))},setVisibleState=function(e){setTypedStyle(e,"opacity",1),setTypedStyle(e,"display","inherit"),setTypedStyle(e,"visibility","visible")},setTransition=function(e,t,n,a){return setTypedStyle(e,"transition",t+" "+n+"s "+a)},requestTimeout=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,t);var n=(new Date).getTime();requestAnimationFrame(function a(){(new Date).getTime()-n>=t?e():requestAnimationFrame(a)})},hideElementToAnimate=function(e,t,n,a){setTypedStyle(e,"display","inherit"),setTypedStyle(e,"opacity",0),setTypedStyle(e,"visibility","hidden"),requestTimeout(function(){var o=e.animate(t,n);addComponentContextAnimation(o,a)},0)},addComponentContextAnimation=function(e,t,n){t&&(t.animation={config:e,infinite:n})},BOMB_MOTION="bomb",bombKeyFrames=[{opacity:1,transform:"rotateZ(0)",transformOrigin:"-50% 0%",visibility:"visible"},{opacity:0,transform:"rotateZ(-100deg)",transformOrigin:"-10% 0%",visibility:"hidden"}],setBombAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",BOMB_MOTION),o=e.animate(bombKeyFrames,{duration:a,easing:"cubic-bezier(0, 0.93, 1, 1)",fill:"forwards"});addComponentContextAnimation(o,n)},bomb={callFn:setBombAnimation,values:{speed:{defaultValue:.4}}},ENTER_DOWN_MOTION="enterDownBounce",enterDownKeyFrames=[{opacity:0,transform:"translateY(-120px)",visibility:"hidden"},{offset:.5,opacity:.5,transform:"translateY(0)",visibility:"visible"},{offset:.7,opacity:.7,transform:"translateY(-20px)",visibility:"visible"},{opacity:1,transform:"translateY(0)",visibility:"visible"}],setEnterDownBounce=function(e,t,n){var a=1e3*getValue(t,"speed",ENTER_DOWN_MOTION);hideElementToAnimate(e,enterDownKeyFrames,{duration:a,easing:"linear",fill:"forwards"},n)},enterDownBounce={callFn:setEnterDownBounce,values:{speed:{defaultValue:.7}}},ENTER_LEFT_MOTION="enterLeftBounce",enterLeftKeyFrames=[{opacity:0,transform:"translateX(-120px)",visibility:"hidden"},{offset:.5,opacity:.5,transform:"translateX(0px)",visibility:"visible"},{offset:.7,opacity:.7,transform:"translateX(-8px)",visibility:"visible"},{opacity:1,transform:"translateY(0)",visibility:"visible"}],setEnterLeftBounce=function(e,t,n){var a=1e3*getValue(t,"speed",ENTER_LEFT_MOTION);hideElementToAnimate(e,enterLeftKeyFrames,{duration:a,easing:"linear",fill:"forwards"},n)},enterLeftBounce={callFn:setEnterLeftBounce,values:{speed:{defaultValue:.7}}},ENTER_RIGHT_MOTION="enterRightBounce",enterRightKeyFrames=[{opacity:0,transform:"translateX(120px)",visibility:"hidden"},{offset:.5,opacity:.5,transform:"translateX(0px)",visibility:"visible"},{offset:.7,opacity:.7,transform:"translateX(8px)",visibility:"visible"},{opacity:1,transform:"translateY(0)",visibility:"visible"}],setEnterRightBounce=function(e,t,n){var a=1e3*getValue(t,"speed",ENTER_RIGHT_MOTION);hideElementToAnimate(e,enterRightKeyFrames,{duration:a,easing:"linear",fill:"forwards"},n)},enterRightBounce={callFn:setEnterRightBounce,values:{speed:{defaultValue:.7}}},ENTER_UP_MOTION="enterUpBounce",enterUpKeyFrames=[{opacity:0,transform:"translateY(120px)",visibility:"hidden"},{offset:.5,opacity:.5,transform:"translateY(0)",visibility:"visible"},{offset:.7,opacity:.7,transform:"translateY(20px)",visibility:"visible"},{opacity:1,transform:"translateY(0)",visibility:"visible"}],setEnterUpBounce=function(e,t,n){var a=1e3*getValue(t,"speed",ENTER_UP_MOTION);hideElementToAnimate(e,enterUpKeyFrames,{duration:a,easing:"linear",fill:"forwards"},n)},enterUpBounce={callFn:setEnterUpBounce,values:{speed:{defaultValue:.7}}},JUMP_BOUNCE_MOTION="jumpBounce",jumpBounceKeyFrames=[{transform:"translateY(0)"},{offset:.1,transform:"translateY(-100px)"},{offset:.4,transform:"translateY(20px)"},{offset:.6,transform:"translateY(-60px)"},{offset:.9,transform:"translateY(30px)"},{transform:"translateY(0)"}],setJumpBounce=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",JUMP_BOUNCE_MOTION),o=e.animate(jumpBounceKeyFrames,{duration:a,easing:"cubic-bezier(0.42, 0, 0.44, 1.21)",fill:"forwards"});addComponentContextAnimation(o,n)},jumpBounce={callFn:setJumpBounce,values:{speed:{defaultValue:1}}},FLASH_MOTION="flash",flashKeyFrames={offset:[0,.1,.2,.3,1],opacity:[0,1,0,1,1]},setFlashAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",FLASH_MOTION),o=e.animate(flashKeyFrames,{duration:a,easing:"linear"});addComponentContextAnimation(o,n)},flash={callFn:setFlashAnimation,values:{speed:{defaultValue:2}}},SCALE_BOUNCE_MOTION="scaleBounce",scaleBounceKeyFrames=[{opacity:0,transform:"scale(1.5)"},{offset:.5,opacity:.5,transform:"scale(1)"},{offset:.7,opacity:.7,transform:"scale(1.1)"},{opacity:1,transform:"scale(1)"}],setScaleBounce=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",SCALE_BOUNCE_MOTION),o=e.animate(scaleBounceKeyFrames,{duration:a,easing:"linear",fill:"forwards"});addComponentContextAnimation(o,n)},scaleBounce={callFn:setScaleBounce,values:{speed:{defaultValue:.7}}},DANCE_MOTION="dance",danceKeyFrames=[{boxShadow:"inset 0 0 0 0 transparent",transform:"scale(1) rotateZ(10deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.05,transform:"scale(1) rotateZ(-10deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.1,transform:"scale(1) rotateZ(10deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.15,transform:"scale(1) rotateZ(-10deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.2,transform:"scale(1) rotateZ(10deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.25,transform:"scale(1) rotateZ(-10deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.35,transform:"scale(1) rotateZ(0deg)"},{boxShadow:"0 0 10px rgba(0,0,0,0.2)",offset:.4,transform:"scale(1.3) rotateZ(0deg)"},{boxShadow:"inset 0 0 0 0 transparent",offset:.6,transform:"scale(1) rotateZ(0deg)"},{boxShadow:"inset 0 0 0 0 transparent",transform:"scale(1) rotateZ(0deg)"}],setDanceAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",DANCE_MOTION),o=e.animate(danceKeyFrames,{duration:a,easing:"linear",fill:"forwards"});addComponentContextAnimation(o,n)},dance={callFn:setDanceAnimation,values:{speed:{defaultValue:2}}},PULSE_MOTION="pulse",pulseKeyFrames=[{transform:"scale(1)"},{transform:"scale(1.5)"}],setPulseAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",PULSE_MOTION),o=e.animate(pulseKeyFrames,{direction:"alternate",duration:a,easing:"linear",iterations:1/0});addComponentContextAnimation(o,n,!0)},pulse={callFn:setPulseAnimation,values:{speed:{defaultValue:.5}}},ROTATE_SCALE_MOTION="rotateScale",rotateScaleKeyFrames=[{transform:"rotateZ(0) scale(1)"},{offset:.25,transform:"rotateZ(90deg) scale(0.4)"},{offset:.5,transform:"rotateZ(180deg) scale(1)"},{offset:.75,transform:"rotateZ(270deg) scale(0.4)"},{transform:"rotateZ(360deg) scale(1)"}],setRotateScaleAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",ROTATE_SCALE_MOTION),o=e.animate(rotateScaleKeyFrames,{duration:a,easing:"linear",iterations:1/0});addComponentContextAnimation(o,n,!0)},rotateScale={callFn:setRotateScaleAnimation,values:{speed:{defaultValue:3}}},PULSE_SLOW_MOTION="pulseSlow",pulseSlowKeyFrames=[{opacity:1,transform:"scale(1)"},{opacity:.5,transform:"scale(0.85)"}],setPulseSlowAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",PULSE_SLOW_MOTION),o=e.animate(pulseSlowKeyFrames,{direction:"alternate",duration:a,easing:"ease-in-out",iterations:1/0});addComponentContextAnimation(o,n,!0)},pulseSlow={callFn:setPulseSlowAnimation,values:{speed:{defaultValue:1}}},JOURNAL_MOTION="journal",journalKeyFrames=[{transform:"scale(0) rotate(-360deg)"},{offset:.8,transform:"scale(0.5) rotate(-180deg)"},{transform:"scale(1) rotate(0)"}],setJournalAnimation=function(e,t,n){setVisibleState(e);var a=1e3*getValue(t,"speed",JOURNAL_MOTION),o=e.animate(journalKeyFrames,{duration:a,easing:"linear",fill:"forwards"});addComponentContextAnimation(o,n)},journal={callFn:setJournalAnimation,values:{speed:{defaultValue:2}}},STICKY_MOTION="sticky",FADE_OUT_MOTION="fadeOut",FADE_IN_MOTION="fadeOut",PARALLAX_MOTION="parallax",setStickyPosition=function(e,t){setTypedStyle(e,"position",STICKY_MOTION),setTypedStyle(e,"top",getValue(t,"top",STICKY_MOTION))},setFadeOut=function(e,t){var n=getValue(t,"speed",FADE_OUT_MOTION),a=getValue(t,"timingFn",FADE_IN_MOTION);setTypedStyle(e,"display","inherit"),setTypedStyle(e,"opacity",1),setTypedStyle(e,"visibility","visible"),setTransition(e,"opacity",n,a),requestTimeout(function(){return setTypedStyle(e,"opacity",0)},100),requestTimeout(function(){return setTypedStyle(e,"display","none")},1e3*n+100)},setFadeIn=function(e,t){var n=getValue(t,"speed",FADE_IN_MOTION),a=getValue(t,"timingFn",FADE_IN_MOTION);setTypedStyle(e,"display","inherit"),setTypedStyle(e,"opacity",0),setTypedStyle(e,"visibility","visible"),setTransition(e,"opacity",n,a),requestTimeout(function(){return setTypedStyle(e,"opacity",1)},100)},setHide=function(e){setTypedStyle(e,"display","none")},setShow=function(e){setTypedStyle(e,"display","inherit")},setParallax=function(e,t){var n=getValue(t,"size",PARALLAX_MOTION);setTypedStyle(e,"transform","translateZ("+-1*n+"px)")},definedMotionsProps={bomb:bomb,dance:dance,enterDownBounce:enterDownBounce,enterLeftBounce:enterLeftBounce,enterRightBounce:enterRightBounce,enterUpBounce:enterUpBounce,fadeIn:{callFn:setFadeIn,values:{speed:{defaultValue:.5,rulesFn:function(){return[isNumber]}},timingFn:{defaultValue:"ease-out"}}},fadeOut:{callFn:setFadeOut,values:{speed:{defaultValue:.5,rulesFn:function(){return[isNumber]}},timingFn:{defaultValue:"ease-out"}}},flash:flash,hide:{callFn:setHide},journal:journal,jumpBounce:jumpBounce,parallax:{callFn:setParallax,values:{size:{defaultValue:1,rulesFn:function(){return[isNumber]}}}},pulse:pulse,pulseSlow:pulseSlow,rotateScale:rotateScale,scaleBounce:scaleBounce,show:{callFn:setShow},sticky:{callFn:setStickyPosition,values:{top:{defaultValue:"0px"}}}},getDefaultValues=function(e,t){return"object"!==(void 0===e?"undefined":_typeof(e))?definedMotionsProps[t].values:e},getValue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=arguments[2],a=getDefaultValues(!0,n)[t],o=e[t];return o?(a.rulesFn&&a.rulesFn().forEach(function(e){if(!e(o))throw new Error("Invalid CSS value parsed to "+n+" API. For more details, please read more about '"+e.name+"' function validation in NevinhaJS API",e)}),o):a.defaultValue},isClass=function(e){return e.prototype.render},isPXUnit=function(e){return/px$/.test(e)},isNumber=function(e){return"number"==typeof e},isCustomProp=function(e){if(definedMotionsProps[e])return!0},createVirtualElement=function e(t,n){var a=n.createTextNode,o=n.createInstance,r=n.parentComponent,i=t.type,s=t.attributes,l=t.children;if("string"==typeof t||"number"==typeof t)return a(t);if("function"==typeof i&&i.prototype.render){var u=new i(s,l),c=e(u.render(),{createInstance:o,createTextNode:a,parentComponent:u});return u.element=c,c}return"function"==typeof i?e(i(s,l),{createInstance:o,createTextNode:a}):l?o(i,s,l,r):void 0},setProps=function(e,t,n){Object.keys(t).forEach(function(a){if(isEvent(a)){var o=a.split("on")[1].toLowerCase();e.addEventListener(o,t[a])}else setProp(e,a,t[a],n)})},setProp=function(e,t,n,a){return isCustomProp(t)&&n?setCustomProp(e,t,n,a):"className"===t?e.setAttribute("class",n):"boolean"==typeof n?setBooleanProp(e,t,n):"value"===t?e.value=n:"ref"===t?addContextRef(a,n,{element:e}):e.setAttribute(t,n)},setBooleanProp=function(e,t,n){n?(e.setAttribute(t,n),e[t]=!0):e[t]=!1},removeBooleanProp=function(e,t){e.removeAttribute(t),e[t]=!1},removeProp=function(e,t,n){isCustomProp(t)||("className"===t?e.removeAttribute("class"):"boolean"==typeof n?removeBooleanProp(e,t):e.removeAttribute(t))},updateProp=function(e,t,n,a,o){if(!isEvent(t))return void 0===n||null==n?removeProp(e,t,a):a&&n===a?void 0:setProp(e,t,n,o)},updateProps=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments[3],o=Object.assign({},t,n);!t.ref&&n.ref&&removeContextRef(a,n.ref),Object.keys(o).forEach(function(o){updateProp(e,o,t[o],n[o],a)})},setStyleProps=function(e,t){var n=t.split(";");n[n.length-1].trim()||n.splice(-1,1),n.map(function(e){var t=e.split(":");return{property:t[0].trim(),value:t[1].trim()}}).forEach(function(t){return setTypedStyle(e,t.property,t.value)})},setCustomProp=function(e,t,n){return"style"==t?setStyleProps(e,n):definedMotionsProps[t].callFn(e,n)},render=function(e,t){var n=new e;n.element=createVirtualElement(n.render(),{createInstance:createInstance,createTextNode:createTextNode,parentComponent:n}),t.appendChild(n.element)},createTextNode=function(e){return document.createTextNode(e)},createInstance=function e(t,n,a,o){var r=document.createElement(t);return a.map(function(t){return createVirtualElement(t,{createInstance:e,createTextNode:createTextNode,parentComponent:o})}).forEach(function(e){e&&r.appendChild(e)}),setProps(r,n,o),r},diffDOM={addToDiff:function(e,t,n){e.appendChild(createVirtualElement(t,{createInstance:createInstance,createTextNode:createTextNode,parentComponent:n}))},removeFromDiff:function(e,t,n,a){return e.removeChild(e.childNodes[a]),a},replaceFromDiff:function(e,t,n,a,o){e.replaceChild(createVirtualElement(t,{createInstance:createInstance,createTextNode:createTextNode,parentComponent:a}),e.childNodes[o])},updatePropsFromDiff:function(e,t,n,a,o){updateProps(e.childNodes[o],t.attributes,n.attributes,a)}},updateElement=function e(t,n,a,o,r){var i=a.addToDiff,s=a.removeFromDiff,l=a.replaceFromDiff,u=a.updatePropsFromDiff,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,f=t;if(n||r){if(r&&"function"==typeof r.type){var p=updateComponentDiff(r),d=p.NodeComponent,m=p.NodeComponentInstance;r=d,m&&(f=m)}if(n&&"function"==typeof n.type)n=updateComponentDiff(n).NodeComponent;if(n){if(!r)return updateContext(f,n),s(o,r,n,c),!0;if(changed(r,n))updateContext(f,n),l(o,r,n,f,c);else if(r.type){var y=r.children.length,v=n.children.length;u(o,r,n,f,c);for(var b=0;b<y||b<v;b++){if(!o.childNodes[c].childNodes[b]&&v>y)return;e(f,n.children[b],{addToDiff:i,removeFromDiff:s,replaceFromDiff:l,updatePropsFromDiff:u},o.childNodes[c],r.children[b],b)&&v>y&&b--}}}else i(o,r,f)}},updateComponentDiff=function(e){var t=void 0;return isClass(e.type)?((t=new e.type(e.attributes,e.children)).element=createVirtualElement(e,{createInstance:createInstance,createTextNode:createTextNode,parentComponent:t}),e=t.render()):e=Object.assign(e.type(e.attributes,e.children)),{NodeComponent:e,NodeComponentInstance:t}},updateContext=function e(t,n){var a=n.attributes,o=n.children;if(a){var r=a.ref;r&&removeContextRef(t,r),o.length&&o.forEach(function(n){return e(t,n)})}},removeContextRef=function(e,t){delete e.context[t]},addContextRef=function(e,t,n){return e.context[t]=n},changed=function(e,t){return(void 0===e?"undefined":_typeof(e))!==(void 0===t?"undefined":_typeof(t))||"string"==typeof e&&e!==t||e.type!==t.type},NevinhaComponent$$1=function(e){function t(e,n){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return inherits(t,IsomorphicNevinhaComponent),createClass(t,[{key:"removeAnimation",value:function(e){e.animation&&(e.animation.infinite||e.animation.config.finish(),e.animation.config.cancel(),e.animation=null)}},{key:"setAnimation",value:function(e,t){var n=t.name,a=t.values;e.animation&&this.removeAnimation(e),definedMotionsProps[n].callFn(e.element,a,e)}},{key:"setState",value:function(e){var t=this,n=this.render();Object.keys(e).map(function(n){return t.state[n]=e[n]}),updateElement(this,n,diffDOM,this.element.parentNode,this.render())}}]),t}(),NevinhaDOM=function(e,t){for(var n=arguments.length,a=Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var r,i=a.length?(r=[]).concat.apply(r,a):[];return{type:e,attributes:t||{},children:i}},ParallaxProvider=function(e){function t(){return classCallCheck(this,t),possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return inherits(t,NevinhaComponent$$1),createClass(t,[{key:"render",value:function(){var e=this.children,t=this.props,n={attributes:{},children:e,type:"div"};return{attributes:_extends({style:"perspective: 1px; overflow: auto;"},t),children:[n],type:"div"}}}]),t}();


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var animations = exports.animations = {
  Specials: [{
    name: "Pulse",
    value: "pulse"
  }, {
    name: "Journal",
    value: "journal"
  }, {
    name: "Dance",
    value: "dance"
  }, {
    name: "Pulse Slow",
    value: "pulseSlow"
  }, {
    name: "Rotate Scale",
    value: "rotateScale"
  }],
  Bounce: [{
    name: "Enter Up Bounce",
    value: "enterUpBounce"
  }, {
    name: "Enter Down Bounce",
    value: "enterDownBounce"
  }, {
    name: "Enter Left Bounce",
    value: "enterLeftBounce"
  }, {
    name: "Enter Right Bounce",
    value: "enterRightBounce"
  }, {
    name: "Scale Bounce",
    value: "scaleBounce"
  }, {
    name: "Jump Bounce",
    value: "jumpBounce"
  }],
  "Fading Entrances": [{
    name: "Fade Out",
    value: "fadeOut"
  }, {
    name: "Fade In",
    value: "fadeIn"
  }],
  Agrecives: [{
    name: "Flash Bang",
    value: "flash"
  }, {
    name: "Bomb",
    value: "bomb"
  }]
};

var isSafari = exports.isSafari = function isSafari() {
  return (/constructor/i.test(window.HTMLElement) || function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification)
  );
};

var isFirefox = exports.isFirefox = typeof InstallTrigger !== 'undefined';

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(55);
__webpack_require__(61);
__webpack_require__(64);
module.exports = __webpack_require__(69);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
__webpack_require__(53);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(18);
var META = __webpack_require__(42).KEY;
var $fails = __webpack_require__(7);
var shared = __webpack_require__(19);
var setToStringTag = __webpack_require__(43);
var uid = __webpack_require__(8);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(29);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(45);
var isArray = __webpack_require__(33);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(3);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(16);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(51);
var $GOPD = __webpack_require__(52);
var $DP = __webpack_require__(6);
var $keys = __webpack_require__(13);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(34).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(15).f = $propertyIsEnumerable;
  __webpack_require__(25).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(8)('meta');
var isObject = __webpack_require__(3);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(6).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(7)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(29);
var defineProperty = __webpack_require__(6).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(13);
var gOPS = __webpack_require__(25);
var pIE = __webpack_require__(15);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(23);
var toAbsoluteIndex = __webpack_require__(47);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(31);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(49);
var enumBugKeys = __webpack_require__(24);
var IE_PROTO = __webpack_require__(32)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(50).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(13);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(34).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(15);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(16);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(26);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(54);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(18)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(14);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56);
module.exports = __webpack_require__(2).Array.find;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(10);
var $find = __webpack_require__(57)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(60)(KEY);


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(28);
var IObject = __webpack_require__(21);
var toObject = __webpack_require__(35);
var toLength = __webpack_require__(23);
var asc = __webpack_require__(58);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(59);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var isArray = __webpack_require__(33);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(63) });


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(13);
var gOPS = __webpack_require__(25);
var pIE = __webpack_require__(15);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(21);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(7)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
module.exports = __webpack_require__(2).String.endsWith;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(10);
var toLength = __webpack_require__(23);
var context = __webpack_require__(66);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(68)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(67);
var defined = __webpack_require__(22);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(3);
var cof = __webpack_require__(14);
var MATCH = __webpack_require__(0)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(0)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nevinhaJs = __webpack_require__(36);

var _motionsAnimations = __webpack_require__(70);

var _motionsAnimations2 = _interopRequireDefault(_motionsAnimations);

var _constants = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NevinhaApp = function (_NevinhaComponent) {
  _inherits(NevinhaApp, _NevinhaComponent);

  function NevinhaApp() {
    _classCallCheck(this, NevinhaApp);

    var _this = _possibleConstructorReturn(this, (NevinhaApp.__proto__ || Object.getPrototypeOf(NevinhaApp)).call(this));

    _this.state.motionsTab = true;
    _this.changeTab = _this.changeTab.bind(_this);
    return _this;
  }

  _createClass(NevinhaApp, [{
    key: 'changeTab',
    value: function changeTab() {
      this.setState({ motionsTab: !this.state.motionsTab });
      scrollTo(0, 820);
    }
  }, {
    key: 'render',
    value: function render() {
      var motionsTab = this.state.motionsTab;

      var btnText = "View animations demo";
      var appTitle = "Experiment the best of our live parallax provider demo";

      if (motionsTab) {
        appTitle = "Try to use our live animations demo";
        btnText = "View parallax provider demo";
      }

      return (0, _nevinhaJs.NevinhaDOM)(
        'div',
        null,
        (0, _nevinhaJs.NevinhaDOM)(
          'h3',
          { 'class': 'about-title z-mask' },
          appTitle
        ),
        motionsTab ? (0, _nevinhaJs.NevinhaDOM)(_motionsAnimations2.default, null) : (0, _nevinhaJs.NevinhaDOM)(
          'div',
          { className: 'parallax-container' },
          (0, _nevinhaJs.NevinhaDOM)(
            _nevinhaJs.ParallaxProvider,
            { className: 'parallax-provider-tab' },
            (0, _nevinhaJs.NevinhaDOM)('img', { src: './images/nevinha-js.png', className: 'parallax-biggest', parallax: {
                size: 1
              } }),
            (0, _nevinhaJs.NevinhaDOM)('img', { src: './images/nevinha-js.png', className: 'parallax-smaller', parallax: {
                size: 3
              } }),
            (0, _nevinhaJs.NevinhaDOM)('img', { src: './images/nevinha-js.png', className: 'parallax-medium', parallax: {
                size: 2
              } })
          )
        ),
        !_constants.isFirefox && (0, _nevinhaJs.NevinhaDOM)(
          'button',
          { className: 'btn btn-accent parallax-provider z-mask', onClick: this.changeTab },
          btnText
        )
      );
    }
  }]);

  return NevinhaApp;
}(_nevinhaJs.NevinhaComponent);

setTimeout(function () {
  var $root = document.querySelector('#nevinha-app');
  (0, _nevinhaJs.render)(NevinhaApp, $root);
}, 300);

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nevinhaJs = __webpack_require__(36);

var _constants = __webpack_require__(37);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MotionsAnimations = function (_NevinhaComponent) {
  _inherits(MotionsAnimations, _NevinhaComponent);

  function MotionsAnimations(props, children) {
    _classCallCheck(this, MotionsAnimations);

    var _this = _possibleConstructorReturn(this, (MotionsAnimations.__proto__ || Object.getPrototypeOf(MotionsAnimations)).call(this, props, children));

    _this.state.animations = _constants.animations;
    _this.handleAnimationClick = _this.handleAnimationClick.bind(_this);
    return _this;
  }

  _createClass(MotionsAnimations, [{
    key: 'handleAnimationClick',
    value: function handleAnimationClick(e) {
      var animationValue = e.target.dataset.animationValue;
      var nevinhaAppImage = this.context.nevinhaAppImage;


      this.setAnimation(nevinhaAppImage, {
        name: animationValue
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var animations = this.state.animations;


      return (0, _nevinhaJs.NevinhaDOM)(
        'div',
        { className: 'row' },
        (0, _nevinhaJs.NevinhaDOM)(
          'div',
          { className: 'col-md-12 col-md-offset-2' },
          (0, _nevinhaJs.NevinhaDOM)(
            'div',
            { className: 'live-demo' },
            (0, _nevinhaJs.NevinhaDOM)(
              'figure',
              { ref: 'nevinhaAppImage', sticky: {
                  top: '36%'
                } },
              (0, _nevinhaJs.NevinhaDOM)('img', { src: './images/nevinha-js.png', className: 'nevinha-app-logo' })
            ),
            Object.keys(animations).map(function (categoryName) {
              return (0, _nevinhaJs.NevinhaDOM)(
                'div',
                { className: 'nevinha-app-buttons' },
                (!(0, _constants.isSafari)() || safari && categoryName == "Fading Entrances") && (0, _nevinhaJs.NevinhaDOM)(
                  'div',
                  null,
                  (0, _nevinhaJs.NevinhaDOM)(
                    'h4',
                    { className: 'about-title' },
                    categoryName
                  ),
                  animations[categoryName].map(function (animation) {
                    return (0, _nevinhaJs.NevinhaDOM)(
                      'button',
                      {
                        className: 'btn btn-accent',
                        'data-animation-value': animation.value,
                        onClick: _this2.handleAnimationClick
                      },
                      animation.name
                    );
                  })
                )
              );
            })
          )
        )
      );
    }
  }]);

  return MotionsAnimations;
}(_nevinhaJs.NevinhaComponent);

exports.default = MotionsAnimations;

/***/ })
/******/ ]);