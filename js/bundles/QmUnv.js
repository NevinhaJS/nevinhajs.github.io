var pageComponent =
webpackJsonppageComponent([2],{

/***/ 289:
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

var _secondStepSoy = __webpack_require__(290);

var _secondStepSoy2 = _interopRequireDefault(_secondStepSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QmUnv = function (_Component) {
  _inherits(QmUnv, _Component);

  function QmUnv() {
    _classCallCheck(this, QmUnv);

    return _possibleConstructorReturn(this, (QmUnv.__proto__ || Object.getPrototypeOf(QmUnv)).apply(this, arguments));
  }

  return QmUnv;
}(_metalComponent2.default);

;

_metalSoy2.default.register(QmUnv, _secondStepSoy2.default);

exports.default = QmUnv;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.QmUnv = undefined;

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

  // This file was automatically generated from second-step.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace QmUnv.
   * @public
   */

  goog.module('QmUnv.incrementaldom');

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
    var param552 = function param552() {
      ie_open('h2');
      var dyn34 = opt_data.page.title;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h2');
      ie_open('p');
      itext('Now that we have all of our environment configurated, we can follow creating our components. But before we do it, we need to create a folder called ');
      ie_open('code');
      itext('src');
      ie_close('code');
      itext(' and another folder called ');
      ie_open('code');
      itext('public');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('First, let\'s create a ');
      ie_open('code');
      itext('index.html');
      ie_close('code');
      itext(' file in our ');
      ie_open('code');
      itext('public');
      ie_close('code');
      itext(' folder:');
      ie_close('p');
      $templateAlias2({ code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <link rel="stylesheet" type="text/css" href="./style.css">\n    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">\n</head>\n<body>\n    <div id="my-app" class="height"></div>\n    <script src="./bundle.js"><\/script>\n</body>\n</html>', mode: 'html' }, null, opt_ijData);
      ie_open('p');
      itext('Now, let\'s create our app component. Inside of ');
      ie_open('code');
      itext('src');
      ie_close('code');
      itext(' folder, we\'ll create a ');
      ie_open('code');
      itext('app.js');
      ie_close('code');
      itext(' file, witch extends of NevinhaCompnonent and will be our app component file.');
      ie_close('p');
      ie_open('p');
      itext('Every NevinhaJs component needs to extends ');
      ie_open('code');
      itext('NevinhaComponent');
      ie_close('code');
      itext(' class, you don\'t need to extend from ');
      ie_open('code');
      itext('NevinhaComponent');
      ie_close('code');
      itext(' just if your component is a state-less component. Knowing that, let\'s import ');
      ie_open('code');
      itext('NevinhaComponent');
      ie_close('code');
      itext(', the ');
      ie_open('code');
      itext('render');
      ie_close('code');
      itext(' to render our NevinhaJs application in the ');
      ie_open('code');
      itext('#my-app');
      ie_close('code');
      itext(' element, and ');
      ie_open('code');
      itext('NevinhaDOM');
      ie_close('code');
      itext(', wich we won\'t use in the code but remember that we have put NevinhaDOM as a pragma of the ');
      ie_open('code');
      itext('transform-react-jsx');
      ie_close('code');
      itext(' babel plugin and every we will use JSX sintaxe, we\'ll need to import NevinhaDOM.');
      ie_close('p');
      ie_open('p');
      itext('So our first app component, will look something like this:');
      ie_close('p');
      $templateAlias2({ code: 'import {NevinhaComponent, render, NevinhaDOM} from \'nevinha-js\';\n\nclass App extends NevinhaComponent {\n    render() {\n        return (\n            <div>\n                some code come here!\n            </div>\n        );\n    }\n}\n\nconst $root = document.querySelector(\'#my-app\');\nrender(App, $root);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Now you can follow for the next section, where we\'ll see how to update our components state, use props and animations.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param552 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'QmUnv.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var QmUnv = function (_Component) {
  _inherits(QmUnv, _Component);

  function QmUnv() {
    _classCallCheck(this, QmUnv);

    return _possibleConstructorReturn(this, (QmUnv.__proto__ || Object.getPrototypeOf(QmUnv)).apply(this, arguments));
  }

  return QmUnv;
}(_metalComponent2.default);

_metalSoy2.default.register(QmUnv, templates);
exports.QmUnv = QmUnv;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[289]);