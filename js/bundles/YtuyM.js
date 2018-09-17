var pageComponent =
webpackJsonppageComponent([11],{

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

var _indexSoy = __webpack_require__(282);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YtuyM = function (_Component) {
  _inherits(YtuyM, _Component);

  function YtuyM() {
    _classCallCheck(this, YtuyM);

    return _possibleConstructorReturn(this, (YtuyM.__proto__ || Object.getPrototypeOf(YtuyM)).apply(this, arguments));
  }

  return YtuyM;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YtuyM, _indexSoy2.default);

exports.default = YtuyM;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YtuyM = undefined;

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
   * @fileoverview Templates in namespace YtuyM.
   * @public
   */

  goog.module('YtuyM.incrementaldom');

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
    var param430 = function param430() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('The basic idea of motions');
      ie_close('h2');
      ie_open('p');
      itext('Creating a motion animation in your component is very simple, all that you need is put your animation name as a prop of your component or tag HTML. Like the example bellow:');
      ie_close('p');
      $templateAlias2({ code: 'class SomeComponent extends NevinhaComponent {\n  render() {\n    return (\n      <div>\n        <p>Here an component with a motion animation: </p>\n\n        <MyComponent journal />\n\n        <button scaleBounce>You also can animate HTML tags</button>\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the code above, we are using inline motions, wich is the most basic way to use our motions, but if you want to controll the state of your animation, we recommend that you use controlled motions.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Inline Motions');
      ie_close('h2');
      ie_open('p');
      itext('As we saw in the last example, you can use motions animations in components or in HTML tags. Each motion, has a default configuration for each property value and it is the reason of you don\'t need to inform anything when you are using some motion, but if you prefer to subscribe the default configuration of some property, you can parse the property name and value as a object config of your props, like the example bellow:');
      ie_close('p');
      $templateAlias2({ code: 'class SomeComponent extends NevinhaComponent {\n  render() {\n    return (\n      <div>\n        <p>Here an component with a custom configuration of some motion animation: </p>\n\n        <MyComponent journal={{\n          speed: 1.5\n        }} />\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the case above,our component will be animated using the ');
      ie_open('code');
      itext('journal');
      ie_close('code');
      itext(' animation in a time of 1500 milliseconds.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Controlled Motions');
      ie_close('h2');
      ie_open('p');
      itext('Controllod motions are recommended to use when you want to have a controll of your set of motions animations, for example, if you have a component that depending on the context it will use an specific animation to be animated.');
      ie_close('p');
      ie_open('p');
      itext('The basic way for using it, is just calling the ');
      ie_open('code');
      itext('setAnimation');
      ie_close('code');
      itext(' method with your element ref and the animation name as argument. As the code bellow:');
      ie_close('p');
      $templateAlias2({ code: 'class SomeComponent extends NevinhaComponent {\n  constructor(props, context){\n    super(props, context);\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick() {\n    this.setAnimation(this.context.message, {\n      name: "dance"\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <p ref="message">Hi, I\'ll be animated when the button bellow is clicked.</p>\n        <button onClick={this.handleClick}>Click to animate</button>\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The setAnimation method can also receives the configuration of your motion as a second argument:');
      ie_close('p');
      $templateAlias2({ code: 'handleClick() {\n  this.setAnimation(this.context.message, {\n    name: "dance",\n    values: {\n      speed: 0.5\n    }\n  });\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the code above, your component, will be animated using the ');
      ie_open('code');
      itext('dance');
      ie_close('code');
      itext(' animation, in the time of 500 milliseconds.');
      ie_close('p');
      ie_open('p');
      itext('When you are using controlled motions, you can remove an animation using ');
      ie_open('code');
      itext('removeAnimation');
      ie_close('code');
      itext(' method with your element ref as paramiter:');
      ie_close('p');
      $templateAlias2({ code: 'removeAnimation(this.context.message);', mode: 'javascript' }, null, opt_ijData);
      ie_open('h2');
      itext('What\'s next');
      ie_close('h2');
      ie_open('p');
      itext('Now that you know how to use our motions animations, problably you\'ll want to know what are the name and the configurations of our animations set, wich can be find in the ');
      ie_open('a', null, null, 'href', '/docs/motions/motions-reference.html');
      itext('motions reference section');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param430 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YtuyM.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YtuyM = function (_Component) {
  _inherits(YtuyM, _Component);

  function YtuyM() {
    _classCallCheck(this, YtuyM);

    return _possibleConstructorReturn(this, (YtuyM.__proto__ || Object.getPrototypeOf(YtuyM)).apply(this, arguments));
  }

  return YtuyM;
}(_metalComponent2.default);

_metalSoy2.default.register(YtuyM, templates);
exports.YtuyM = YtuyM;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[281]);