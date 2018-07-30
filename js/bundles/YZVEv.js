var pageComponent =
webpackJsonppageComponent([10],{

/***/ 279:
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

var _motionsReferenceSoy = __webpack_require__(280);

var _motionsReferenceSoy2 = _interopRequireDefault(_motionsReferenceSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YZVEv = function (_Component) {
  _inherits(YZVEv, _Component);

  function YZVEv() {
    _classCallCheck(this, YZVEv);

    return _possibleConstructorReturn(this, (YZVEv.__proto__ || Object.getPrototypeOf(YZVEv)).apply(this, arguments));
  }

  return YZVEv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YZVEv, _motionsReferenceSoy2.default);

exports.default = YZVEv;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YZVEv = undefined;

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

  // This file was automatically generated from motions-reference.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace YZVEv.
   * @public
   */

  goog.module('YZVEv.incrementaldom');

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
    var param477 = function param477() {
      ie_open('h6');
      var dyn33 = opt_data.page.description;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Animations Set');
      ie_close('h2');
      ie_open('p');
      itext('So far these are the animations set that we have implemented of the All Animation CSS3 (separated by All Animations CSS3 category):');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('Specials');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Pulse');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('pulse');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Journal');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('journal');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Dance');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('dance');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Pulse Slow');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('pulseSlow');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Rotate Scale');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('rotateScale');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      ie_open('strong');
      itext('Bounce');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Enter Up Bounce');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('enterUpBounce');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Enter Down Bounce');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('enterDownBounce');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Enter Left Bounce');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('enterLeftBounce');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Scale Bounce');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('scaleBounce');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Jump Bounce');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('jumpBounce');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      ie_open('strong');
      itext('Fading Entrances');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Fade In');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('fadeIn');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Fade Out');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('fadeOut');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      ie_open('strong');
      itext('Agrecives');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('Flash Bang');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('flash');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('Bomb');
      ie_close('strong');
      ie_open('ul');
      ie_open('li');
      itext('Animation Name: ');
      ie_open('strong');
      itext('bomb');
      ie_close('strong');
      ie_close('li');
      ie_close('ul');
      ie_close('li');
      ie_close('ul');
      ie_open('h2');
      itext('What\'s next?');
      ie_close('h2');
      ie_open('p');
      itext('Now that you have completed the motions section, you can learn about providers in the ');
      ie_open('a', null, null, 'href', '/docs/providers/');
      itext('providers section');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param477 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YZVEv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YZVEv = function (_Component) {
  _inherits(YZVEv, _Component);

  function YZVEv() {
    _classCallCheck(this, YZVEv);

    return _possibleConstructorReturn(this, (YZVEv.__proto__ || Object.getPrototypeOf(YZVEv)).apply(this, arguments));
  }

  return YZVEv;
}(_metalComponent2.default);

_metalSoy2.default.register(YZVEv, templates);
exports.YZVEv = YZVEv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[279]);