var pageComponent =
webpackJsonppageComponent([8],{

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _parallaxSoy = __webpack_require__(282);

var _parallaxSoy2 = _interopRequireDefault(_parallaxSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SalDZ = function (_Component) {
  _inherits(SalDZ, _Component);

  function SalDZ() {
    _classCallCheck(this, SalDZ);

    return _possibleConstructorReturn(this, (SalDZ.__proto__ || Object.getPrototypeOf(SalDZ)).apply(this, arguments));
  }

  return SalDZ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(SalDZ, _parallaxSoy2.default);

exports.default = SalDZ;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.SalDZ = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from parallax.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace SalDZ.
   * @public
   */

  goog.module('SalDZ.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param485 = function param485() {
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What\'s Providers');
      ie_close('h2');
      ie_open('p');
      itext('Providers are like NevinhaJs motions, they bring some pre defined behaviors for your application, but instead of just change your component, they changes your component and append another structure HTML in your parent component.');
      ie_close('p');
      ie_open('p');
      itext('So far we have two providers implemented, but we\'re work to implement more, and in the near future, we\'ll separate the providers from the core of NevinhaJS in a especif module, in the case of you don\'t want to use providers in your application, you won\'t need load the provider code in the core of NevinhaJS library.');
      ie_close('p');
      ie_open('h2');
      itext('What\'s next?');
      ie_close('h2');
      ie_open('p');
      itext('Now that you know the theory about providers, you can follow reading about our ');
      ie_open('a', null, null, 'href', '/docs/providers/sticky.html');
      itext('sticky');
      ie_close('a');
      itext(' provider and how to use providers in your NevinhaJs application.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param485 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'SalDZ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var SalDZ = function (_Component) {
  _inherits(SalDZ, _Component);

  function SalDZ() {
    _classCallCheck(this, SalDZ);

    return _possibleConstructorReturn(this, (SalDZ.__proto__ || Object.getPrototypeOf(SalDZ)).apply(this, arguments));
  }

  return SalDZ;
}(_metalComponent2.default);

_metalSoy2.default.register(SalDZ, templates);
exports.SalDZ = SalDZ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[281]);