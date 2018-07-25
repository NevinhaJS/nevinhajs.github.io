var pageComponent =
webpackJsonppageComponent([5],{

/***/ 172:
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

var _indexSoy = __webpack_require__(262);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pageIndex = function (_Component) {
  _inherits(pageIndex, _Component);

  function pageIndex() {
    _classCallCheck(this, pageIndex);

    return _possibleConstructorReturn(this, (pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).apply(this, arguments));
  }

  return pageIndex;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pageIndex, _indexSoy2.default);

exports.default = pageIndex;

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pageIndex = undefined;

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
   * @fileoverview Templates in namespace pageIndex.
   * @public
   */

  goog.module('pageIndex.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('Footer.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {{
   *    site: (?),
   *    year: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param161 = function param161() {
      $header(opt_data, null, opt_ijData);
      $why(null, null, opt_ijData);
      $features(null, null, opt_ijData);
      $how(null, null, opt_ijData);
      $examples(null, null, opt_ijData);
      $templateAlias2(opt_data, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({ content: param161 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pageIndex.render';
  }

  /**
   * @param {{
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $header(opt_data, opt_ignored, opt_ijData) {
    ie_open('header', null, null, 'class', 'header presentation');
    ie_open('div', null, null, 'class', 'container');
    ie_open('figure');
    ie_open('img', null, null, 'src', './images/nevinha-js.png');
    ie_close('img');
    ie_close('figure');
    ie_open('h1', null, null, 'class', 'header-title');
    var dyn16 = opt_data.site.title;
    if (typeof dyn16 == 'function') dyn16();else if (dyn16 != null) itext(dyn16);
    ie_close('h1');
    ie_open('h2', null, null, 'class', 'header-subtitle');
    var dyn17 = opt_data.site.index.description;
    if (typeof dyn17 == 'function') dyn17();else if (dyn17 != null) itext(dyn17);
    ie_close('h2');
    ie_open('div', null, null, 'class', 'header-cta');
    ie_open('button', null, null, 'class', 'btn btn-accent copy-clipboard', 'data-clipboard-text', 'yarn add nevinha-js');
    itext('yarn add nevinha-js');
    ie_close('button');
    ie_open('a', null, null, 'href', '#', 'class', 'btn btn-default mt-2');
    itext('Get Started');
    ie_close('a');
    ie_open('span', null, null, 'class', 'bg-primary notification');
    itext('Copied to your clipboard!');
    ie_close('span');
    ie_close('div');
    ie_close('div');
    ie_close('header');
  }
  exports.header = $header;
  if (goog.DEBUG) {
    $header.soyTemplateName = 'pageIndex.header';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $why(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'about-title');
    itext('What\'s NevinhaJS?');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    itext('NevinhaJS is a component render based in React but beyond of static methods and component lifecycles (including state and props), we also have methods for make some animations and improve the UX.');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.why = $why;
  if (goog.DEBUG) {
    $why.soyTemplateName = 'pageIndex.why';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $features(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'features');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('section', null, null, 'class', 'feature col-md-6 col-md-offset-2');
    ie_void('span', null, null, 'class', 'icon-16-hammer');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Community Maintainence');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('We don\'t have any enterprise behind us, so you don\'t have to be care about license or any thing related to Copyright. Our license will be MIT ever.');
    ie_close('p');
    ie_close('section');
    ie_open('section', null, null, 'class', 'feature col-md-6');
    ie_void('span', null, null, 'class', 'icon-16-flash');
    ie_open('h3', null, null, 'class', 'feature-title');
    itext('Fast and easy to understand');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'feature-description');
    itext('NevinhaJS uses the virtual DOM and uses CSS Typed OM API, wich improves arround 30% of the performance of your browser css manipulations.');
    ie_close('p');
    ie_close('section');
    ie_close('div');
    ie_open('div', null, null, 'class', 'row');
    ie_open('section', null, null, 'class', 'col-md-12 col-md-offset-2 center-feature');
    ie_void('span', null, null, 'class', 'icon-16-circle-arrow');
    ie_open('h3', null, null, 'class', 'who-we-are-title');
    itext('We aren\'t another React');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'who-we-are-description feature-description');
    itext('We aren\'t another framework and no, we don\'t do the same thing like react does. Our focus is to make the development of animations or transitions easier. We are working to integrate NevinhaJS with popular frontend frameworks like react, for you can use the library that you like and enjoy the maximum of our best motion animations.');
    ie_close('p');
    ie_close('section');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.features = $features;
  if (goog.DEBUG) {
    $features.soyTemplateName = 'pageIndex.features';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $how(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'about');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'about-title');
    itext('It\'s easier than you think');
    ie_close('h3');
    ie_open('p', null, null, 'class', 'about-description');
    itext('We know how difficult is learning to use a new javascript framework and was because of it that we have created NevinhaJS in a very simple way, where all of you need to know is just ES6 and our very simple API.');
    ie_close('p');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.how = $how;
  if (goog.DEBUG) {
    $how.soyTemplateName = 'pageIndex.how';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $examples(opt_data, opt_ignored, opt_ijData) {
    ie_open('article', null, null, 'class', 'examples');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12 col-md-offset-2');
    ie_open('h3', null, null, 'class', 'feature-title text-center');
    itext('Featured Examples');
    ie_close('h3');
    ie_open('div', null, null, 'class', 'examples-images');
    ie_open('a', null, null, 'href', '#', 'title', 'Parallax');
    ie_open('img', null, null, 'src', './images/nevinha-parallax.gif');
    ie_close('img');
    ie_close('a');
    ie_open('a', null, null, 'href', '#', 'title', 'Todo list');
    ie_open('img', null, null, 'src', './images/nevinha-todo-list.gif');
    ie_close('img');
    ie_close('a');
    ie_open('a', null, null, 'href', '#', 'title', 'Basic example');
    ie_open('img', null, null, 'src', './images/nevinha-basic-example.gif');
    ie_close('img');
    ie_close('a');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('article');
  }
  exports.examples = $examples;
  if (goog.DEBUG) {
    $examples.soyTemplateName = 'pageIndex.examples';
  }

  exports.render.params = ["site"];
  exports.render.types = { "site": "?" };
  exports.header.params = ["site"];
  exports.header.types = { "site": "?" };
  exports.why.params = [];
  exports.why.types = {};
  exports.features.params = [];
  exports.features.types = {};
  exports.how.params = [];
  exports.how.types = {};
  exports.examples.params = [];
  exports.examples.types = {};
  exports.templates = templates = exports;
  return exports;
});

var pageIndex = function (_Component) {
  _inherits(pageIndex, _Component);

  function pageIndex() {
    _classCallCheck(this, pageIndex);

    return _possibleConstructorReturn(this, (pageIndex.__proto__ || Object.getPrototypeOf(pageIndex)).apply(this, arguments));
  }

  return pageIndex;
}(_metalComponent2.default);

_metalSoy2.default.register(pageIndex, templates);
exports.pageIndex = pageIndex;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[172]);