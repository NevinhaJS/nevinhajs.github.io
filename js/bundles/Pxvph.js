var pageComponent =
webpackJsonppageComponent([15],{

/***/ 269:
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

var _creatingYourFisrtComponentSoy = __webpack_require__(270);

var _creatingYourFisrtComponentSoy2 = _interopRequireDefault(_creatingYourFisrtComponentSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pxvph = function (_Component) {
  _inherits(Pxvph, _Component);

  function Pxvph() {
    _classCallCheck(this, Pxvph);

    return _possibleConstructorReturn(this, (Pxvph.__proto__ || Object.getPrototypeOf(Pxvph)).apply(this, arguments));
  }

  return Pxvph;
}(_metalComponent2.default);

;

_metalSoy2.default.register(Pxvph, _creatingYourFisrtComponentSoy2.default);

exports.default = Pxvph;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Pxvph = undefined;

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

  // This file was automatically generated from creating-your-fisrt-component.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Pxvph.
   * @public
   */

  goog.module('Pxvph.incrementaldom');

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
    var param316 = function param316() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Importing NevinhaJs');
      ie_close('h2');
      ie_open('p');
      itext('NevinhaJS works following the architecture  of components (lifecycles, states ands props), motions and providers. By default we exports NevinhaComponent, render, NevinhaDOM and ParallaxProvider.');
      ie_close('p');
      ie_open('p');
      itext('For starting to use, the basics exported variables that you\'ll need to import, are:');
      ie_close('p');
      $templateAlias2({ code: 'import {NevinhaComponent, render, NevinhaDOM} from \'nevinha-js\';', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('strong');
      itext('Where:');
      ie_close('strong');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('strong');
      itext('NevinhaComponent');
      ie_close('strong');
      itext(': The component class that is responsible to render your component instance. Every NevinhaComponent instance has it own lifecycle and state methods.');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('render');
      ie_close('strong');
      itext(': The render method responsable for rendering your component, basically it takes your component markup and send for the Nevinha Js virtual DOM algorithm');
      ie_close('li');
      ie_open('li');
      ie_open('strong');
      itext('NevinhaDOM');
      ie_close('strong');
      itext(' The method that converts JSX syntaxe to javascript object literal language. Every JS file that uses JSX syntaxe, needs to import NevinhaDOM method.');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('The App component');
      ie_close('h2');
      ie_open('p');
      itext('As we said, create a nevinha component is so easy, all that you need is create a class extending NevinhaComponent class and parse your HTML markup in the ');
      ie_open('code');
      itext('render');
      ie_close('code');
      itext(' method.');
      ie_close('p');
      ie_open('p');
      itext('Let\'s see how it\'s in the code:');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('app.js');
      ie_close('strong');
      ie_close('p');
      $templateAlias2({ code: 'class App extends NevinhaComponent {\n    render() {\n        return (\n            <div scaleBounce>\n                <h1 className="introduction-text">\n                    <p> Hello I\'m a Nevinha component and I\'m using the scaleBounce animation effect</p>\n                </h1>\n            </div>\n        );\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If you have already used any component library like ');
      ie_open('a', null, null, 'href', 'https://reactjs.org/');
      itext('React');
      ie_close('a');
      itext(' you are used to use JSX language and our lifecycles methods is so similar to ');
      ie_open('a', null, null, 'href', 'https://reactjs.org/');
      itext('React');
      ie_close('a');
      itext(' lifecycles. You can see more details about states and components lifecycle in the ');
      ie_open('a', null, null, 'href', '/docs/lifecycle-state-props/');
      itext('Lifecycles, states and props section');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Problably you noticed that our App component is using a motion prop called ');
      ie_open('code');
      itext('scaleBounce');
      ie_close('code');
      itext(', wich makes your element be animated with a scale effect. You can see more details about motions animation props in the ');
      ie_open('a', null, null, 'href', '/docs/motions');
      itext('Motions');
      ie_close('a');
      itext(' section.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('State-full and State-less components');
      ie_close('h2');
      ie_open('p');
      itext('We also have state-full and state-less components as React has, our App Component for example, is a state-full component, and you also can have methods and markup logic inside it, like the example bellow:');
      ie_close('p');
      $templateAlias2({ code: 'class App extends NevinhaComponent {\n  constructor() {\n    super();\n\n    this.handleKeyPress = this.handleKeyPress.bind(this);\n  }\n\n  handleKeyPress({target}) {\n    this.setState({\n      name: target.value\n    });\n  }\n\n  render() {\n    const {name} = this.state;\n\n    return (\n      <div scaleBounce>\n        <h1 className="hello">\n          <p className="margin-hello">Hello! This is the new: </p>\n          {name ? name : \'NevinhaJS\'}\n        </h1>\n\n        <Form handleKeyPress={this.handleKeyPress} />\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this example above, we are using the constructor method to bind the App context into the handleKeyPress method (to avoid the inline bind in the JSX markup), as we aren\'t receiving props and children, we don\'t need to parse them in the ');
      ie_open('code');
      itext('super()');
      ie_close('code');
      itext(' call.');
      ie_close('p');
      ie_open('p');
      itext('In this example above, we are receiving a target object that contains a value of the inputed information in the ');
      ie_open('code');
      itext('Form');
      ie_close('code');
      itext(' component. When this information is typed, we updated the state with the new value, wich will triger the NevinhaJs Diff algorithm, and will or wont display the name that is compared in the render condition ');
      ie_open('code');
      itext('name ? name : \'NevinhaJS\'');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('To create a state-less component, you just need to create a anonymous function returning a JSX syntaxe, like the example bellow:');
      ie_close('p');
      $templateAlias2({ code: 'const someComponent = ({name}, children) => {\n  return (\n    <div>\n      <p>Hello, my name is {name}</p>\n    </div>\n  );\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('The render method');
      ie_close('h2');
      ie_open('p');
      itext('Now that we have our App component created, we just need to create a HTML file with the element wich will have our NevinhaJs application running and our render method.');
      ie_close('p');
      ie_open('p');
      itext('Let\'s create a very simple html file:');
      ie_close('p');
      $templateAlias2({ code: '<body>\n  <div id="my-app"></div>\n\n  <!-- my nevinha js bundle -->\n  <script src="./bundle.js"><\/script>\n</body>', mode: 'xml' }, null, opt_ijData);
      ie_open('p');
      itext('After we created our HTML file, we can call the render method in the end of our App.js file:');
      ie_close('p');
      ie_open('p');
      ie_open('strong');
      itext('app.js');
      ie_close('strong');
      ie_close('p');
      $templateAlias2({ code: '  const $root = document.querySelector(\'#my-app\');\n  render(App, $root);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h3');
      itext('What\'s next?');
      ie_close('h3');
      ie_open('p');
      itext('Now that you have completed the basics steps to create a simple NevinhaJs component, you can follow reading about ');
      ie_open('a', null, null, 'href', '/docs/lifecycle-state-props/');
      itext('Lifecycle, states and props');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param316 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Pxvph.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var Pxvph = function (_Component) {
  _inherits(Pxvph, _Component);

  function Pxvph() {
    _classCallCheck(this, Pxvph);

    return _possibleConstructorReturn(this, (Pxvph.__proto__ || Object.getPrototypeOf(Pxvph)).apply(this, arguments));
  }

  return Pxvph;
}(_metalComponent2.default);

_metalSoy2.default.register(Pxvph, templates);
exports.Pxvph = Pxvph;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[269]);