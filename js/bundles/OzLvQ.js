var pageComponent =
webpackJsonppageComponent([4],{

/***/ 285:
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

var _firstStepSoy = __webpack_require__(286);

var _firstStepSoy2 = _interopRequireDefault(_firstStepSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OzLvQ = function (_Component) {
  _inherits(OzLvQ, _Component);

  function OzLvQ() {
    _classCallCheck(this, OzLvQ);

    return _possibleConstructorReturn(this, (OzLvQ.__proto__ || Object.getPrototypeOf(OzLvQ)).apply(this, arguments));
  }

  return OzLvQ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(OzLvQ, _firstStepSoy2.default);

exports.default = OzLvQ;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.OzLvQ = undefined;

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

  // This file was automatically generated from first-step.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace OzLvQ.
   * @public
   */

  goog.module('OzLvQ.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param516 = function param516() {
      ie_open('h2');
      var dyn33 = opt_data.page.title;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h2');
      ie_open('p');
      itext('First, lets create our enviromment configuration, we can start creating our package.json, something like this:');
      ie_close('p');
      $templateAlias2({ code: '{\n  "name": "nevinha-js-basic-example",\n  "version": "1.0.0",\n  "scripts": {\n    "start": "webpack-dev-server --content-base public --inline --hot",\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Next you\'ll need to install webpack for creatting a local server and the babel dependecies to transpile your code:');
      ie_close('p');
      $templateAlias2({ code: '  yarn add webpack webpack-dev-server babel-core babel-eslint babel-loader babel-plugin-transform-react-jsx babel-preset-es2015 babel-preset-stage-0', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('After that, let\'s create a .babelrc file in our project, to configure the babel transpile and allow us to use es6 syntaxe:');
      ie_close('p');
      $templateAlias2({ code: '{\n  "presets": [\n    "es2015",\n    "stage-0"\n  ],\n  "plugins": [\n    [\n      "transform-react-jsx",\n      { "pragma": "NevinhaDOM" }\n    ]\n  ]\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Finally, let\'s create our webpack.config file:');
      ie_close('p');
      $templateAlias2({ code: 'const path = require(\'path\');\n\nfunction resolveModule(name) {\n    return path.resolve(__dirname, `src/${name}`);\n}\n\nmodule.exports = {\n    entry: [\n        \'core-js/es6/symbol\',\n        \'core-js/fn/array/find\',\n        \'core-js/fn/object/assign\',\n        \'core-js/fn/string/ends-with\',\n        resolveModule(\'index.js\')\n    ],\n\n    module: {\n        loaders: [\n            {exclude: /node_modules/, loader: \'babel-loader\', test: /\\.js$/}\n        ]\n    },\n\n    output: {\n        filename: \'bundle.js\',\n        path: path.resolve(\'./dist\')\n    },\n};', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Now that you have completed the step 1, you can follow to the next section.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param516 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'OzLvQ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var OzLvQ = function (_Component) {
  _inherits(OzLvQ, _Component);

  function OzLvQ() {
    _classCallCheck(this, OzLvQ);

    return _possibleConstructorReturn(this, (OzLvQ.__proto__ || Object.getPrototypeOf(OzLvQ)).apply(this, arguments));
  }

  return OzLvQ;
}(_metalComponent2.default);

_metalSoy2.default.register(OzLvQ, templates);
exports.OzLvQ = OzLvQ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[285]);