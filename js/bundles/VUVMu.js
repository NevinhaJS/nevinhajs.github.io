var pageComponent =
webpackJsonppageComponent([14],{

/***/ 273:
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

var _indexSoy = __webpack_require__(274);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VUVMu = function (_Component) {
  _inherits(VUVMu, _Component);

  function VUVMu() {
    _classCallCheck(this, VUVMu);

    return _possibleConstructorReturn(this, (VUVMu.__proto__ || Object.getPrototypeOf(VUVMu)).apply(this, arguments));
  }

  return VUVMu;
}(_metalComponent2.default);

;

_metalSoy2.default.register(VUVMu, _indexSoy2.default);

exports.default = VUVMu;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.VUVMu = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace VUVMu.
   * @public
   */

  goog.module('VUVMu.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

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
    var param369 = function param369() {
      ie_open('h2');
      itext('What\'s NevinhaJs');
      ie_close('h2');
      ie_open('p');
      itext('NevinhaJs is an inteligent javascript framework that helps developers to create components and motions in a very simple and fast way.');
      ie_close('p');
      ie_open('p');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('p');
      ie_open('article', null, null, 'id', '1');
      ie_open('div', null, null, 'class', 'guide-btn-cta');
      ie_open('a', null, null, 'class', 'btn btn-accent btn-lg', 'href', 'http://github.com.br/nevinhajs/boirlaplate', 'target', '_blank');
      ie_void('span', null, null, 'class', 'icon-16-external download-btn');
      itext('NevinhaJS Boirlaplate');
      ie_close('a');
      ie_close('div');
      ie_open('p');
      ie_open('br');
      ie_close('br');
      ie_close('p');
      ie_open('h2');
      itext('Configuring');
      ie_close('h2');
      ie_open('p');
      itext('Assuming that you already have your ES6 environment configured with babel (if you dont know how to configure a babel environment, you can download our ');
      ie_open('a', null, null, 'href', 'http://github.com.br/nevinhajs/boirlaplate');
      itext('NevinhaJS Boirlaplate');
      ie_close('a');
      itext(' \u2B06), you just need to add in your package.json the nevinhajs through the command:');
      ie_close('p');
      $templateAlias2({ code: 'yarn add nevinha-js', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('if you don\'t have yarn, you can use the npm command:');
      ie_close('p');
      $templateAlias2({ code: 'npm install nevinha-js', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We use JSX syntaxe by default, so you\'ll need to add the ');
      ie_open('code');
      itext('transform-react-jsx');
      ie_close('code');
      itext(' babel plugin to convert the JSX to javascript:');
      ie_close('p');
      $templateAlias2({ code: 'yarn add -D babel-plugin-transform-react-jsx', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('After that in your .babelrc file, you have to put the follow lines:');
      ie_close('p');
      $templateAlias2({ code: '"plugins": [\n  [\n  "transform-react-jsx",\n    { "pragma": "NevinhaDOM" }\n  ]\n]', mode: 'javascript' }, null, opt_ijData);
      ie_open('h3');
      itext('What\'s next?');
      ie_close('h3');
      ie_open('p');
      itext('Now you know how to setup NevinhaJs in your project, let\'s see how to ');
      ie_open('a', null, null, 'href', '/docs/basics/creating-your-fisrt-component.html');
      itext('create our first component');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param369 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'VUVMu.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var VUVMu = function (_Component) {
  _inherits(VUVMu, _Component);

  function VUVMu() {
    _classCallCheck(this, VUVMu);

    return _possibleConstructorReturn(this, (VUVMu.__proto__ || Object.getPrototypeOf(VUVMu)).apply(this, arguments));
  }

  return VUVMu;
}(_metalComponent2.default);

_metalSoy2.default.register(VUVMu, templates);
exports.VUVMu = VUVMu;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[273]);