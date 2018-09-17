var pageComponent =
webpackJsonppageComponent([12],{

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

var ISfWI = function (_Component) {
  _inherits(ISfWI, _Component);

  function ISfWI() {
    _classCallCheck(this, ISfWI);

    return _possibleConstructorReturn(this, (ISfWI.__proto__ || Object.getPrototypeOf(ISfWI)).apply(this, arguments));
  }

  return ISfWI;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ISfWI, _indexSoy2.default);

exports.default = ISfWI;

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ISfWI = undefined;

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
   * @fileoverview Templates in namespace ISfWI.
   * @public
   */

  goog.module('ISfWI.incrementaldom');

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
    var param389 = function param389() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('State and how to update');
      ie_close('h2');
      ie_open('p');
      itext('have the control of your components is primordial in any web application, knowing that, we have developed a very simple way to control and update your component state.');
      ie_close('p');
      ie_open('p');
      itext('You just need to call the ');
      ie_open('code');
      itext('setState()');
      ie_close('code');
      itext(' method to delete, update or add a new state:');
      ie_close('p');
      $templateAlias2({ code: 'handleKeyPress(){\n  setState({\n    fooValue: \'foo\'\n  })\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the example above, we are adding or updating the state of ');
      ie_open('code');
      itext('fooValue');
      ie_close('code');
      itext(' of our component when the ');
      ie_open('code');
      itext('handleKeyPress');
      ie_close('code');
      itext(' method is called. If the fooValue state is used in the ');
      ie_open('code');
      itext('render');
      ie_close('code');
      itext(' method of our component, this component will call the render method again, to update the HTML tag or the value that was changed.');
      ie_close('p');
      ie_open('p');
      itext('Now if you use ');
      ie_open('code');
      itext('this.state.fooValue');
      ie_close('code');
      itext(' in your component, you will get the new or the updated value of foo. You can also edit more than one state in the ');
      ie_open('code');
      itext('setState');
      ie_close('code');
      itext(' method, you just need to parse the ');
      ie_open('code');
      itext('object: value');
      ie_close('code');
      itext(' follow by ');
      ie_open('code');
      itext(',');
      ie_close('code');
      itext(' in the ');
      ie_open('code');
      itext('setState');
      ie_close('code');
      itext(' method.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Props, context and children');
      ie_close('h2');
      ie_open('p');
      itext('When you share values between components, we call it props, or if you are parsing a HTML markup by the component declaration, we call it children.');
      ie_close('p');
      ie_open('p');
      itext('A very simple way to parse props or children for some component is using a state-less component, for example:');
      ie_close('p');
      $templateAlias2({ code: 'const WelcomeMessage = ({userName}, children) => {\n  return (\n    <p>\n      Welcome MR. {userName}\n    </p>\n  )\n}\n\nclass MyCompnoent extends NevinhaComponent {\n  render() {\n    return (\n      <div scaleBounce>\n        <p>This component bellow shows a welcome message:</p>\n\n        <WelcomeMessage userName="Cl\xF3vis" />\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('You can also parse a HTML markup for your component and access it using the ');
      ie_open('code');
      itext('children');
      ie_close('code');
      itext(' paramiter');
      ie_close('p');
      $templateAlias2({ code: 'const WelcomeMessage = ({userName}, children) => {\n  return (\n    <div>\n      <p>\n        Welcome MR. {userName}\n      </p>\n\n      <p>These are my children:</p>\n\n      <br />\n\n      {children}\n    </div>\n  )\n}\n\nclass MyCompnoent extends NevinhaComponent {\n  render() {\n    return (\n      <div scaleBounce>\n        <p>This component bellow shows a welcome message:</p>\n\n        <WelcomeMessage userName="Cl\xF3vis">\n          <p>Github User: clovisdasilvaneto</p>\n          <p>Age: 23</p>\n        </WelcomeMessage>\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If you needs to have a state and props in your child component, you can use a state-full component, like bellow:');
      ie_close('p');
      $templateAlias2({ code: 'class WelcomeMessage extends NevinhaComponent {\n  constructor(props, context){\n    super(props, context);\n\n    this.state.someState = \'NevinhaJS\';\n  }\n\n  render() {\n    const {userName} = this.props;\n    const {someState} = this.state;\n\n    return (\n      <div>\n        <p>\n          Welcome MR. {userName}\n        </p>\n\n        <p>My state is: {someState}</p>\n\n        <p>These are my children:</p>\n\n        <br />\n\n        {this.children}\n      </div>\n    )\n  }\n}\n\nclass MyCompnoent extends NevinhaComponent {\n  render() {\n    return (\n      <div scaleBounce>\n        <p>This component bellow shows a welcome message:</p>\n\n        <WelcomeMessage userName="Cl\xF3vis">\n          <p>Github User: clovisdasilvaneto</p>\n          <p>Age: 23</p>\n        </WelcomeMessage>\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('em');
      ie_open('strong');
      itext('ps');
      ie_close('strong');
      itext(': You don\'t need to call the constructor method to use props or children in your state-full component, but if you call the constructor method to initialize something like a state property, you will need to parse the ');
      ie_open('code');
      itext('props');
      ie_close('code');
      itext(' and the ');
      ie_open('code');
      itext('context');
      ie_close('code');
      itext(' as paramiters of your ');
      ie_open('code');
      itext('super()');
      ie_close('code');
      itext(' call.');
      ie_close('em');
      ie_close('p');
      ie_open('h4');
      itext('Using refs');
      ie_close('h4');
      ie_open('p');
      itext('Some times we want to manipulate some rendered node in our component without needs to select it by using querySelector or some related thing. In NevinhaJs it\'s possible using the ');
      ie_open('code');
      itext('ref');
      ie_close('code');
      itext(' attribute:');
      ie_close('p');
      $templateAlias2({ code: 'class MyCompnoent extends NevinhaComponent {\n  constructor(props, children){\n    super(props, children);\n    this.handleClick = this.handleClick.bind(this);\n  }\n\n  handleClick(){\n    console.log(this.context.github.element);\n  }\n\n  render() {\n    return (\n      <div scaleBounce>\n        <p onClick={this.handleClick.bind(this)}>Click and get the reference of the span bellow in your browser console</p>\n\n        <span ref="github"><b>Gtihub Username:</b> clovisdasilvaneto</span>\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Lifecycle');
      ie_close('h2');
      ie_open('p');
      itext('Lifecycle is one thing that we are working to extend your component controll possibilities. At momment, we just have one lifecycle, wich is ');
      ie_open('code');
      itext('componentWillMount');
      ie_close('code');
      itext(' and it\'s called when your component will be attached on the DOM.');
      ie_close('p');
      ie_open('p');
      itext('We are finishing the following lifecycles:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('ComponentDidMount');
      ie_close('li');
      ie_open('li');
      itext('componentWillUnmount');
      ie_close('li');
      ie_open('li');
      itext('WillReceiveProps');
      ie_close('li');
      ie_open('li');
      itext('WillReceiveAnimation');
      ie_close('li');
      ie_open('li');
      itext('AnimationEnd');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('We are so excited to finish that lifecycles and offer to you a better API to manipulate your animations.');
      ie_close('p');
      ie_open('p');
      itext('To use a lifecycle is very simple, you just need to create a method with the lifecycle name in your state-full component:');
      ie_close('p');
      $templateAlias2({ code: 'class MyCompnoent extends NevinhaComponent {\n  componentWillMount(){\n    console.log(\'The component will mount\');\n  }\n\n  render() {\n    return (\n      <div scaleBounce>\n        <span ref="github"><b>Gtihub Username:</b> clovisdasilvaneto</span>\n      </div>\n    );\n  }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param389 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ISfWI.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ISfWI = function (_Component) {
  _inherits(ISfWI, _Component);

  function ISfWI() {
    _classCallCheck(this, ISfWI);

    return _possibleConstructorReturn(this, (ISfWI.__proto__ || Object.getPrototypeOf(ISfWI)).apply(this, arguments));
  }

  return ISfWI;
}(_metalComponent2.default);

_metalSoy2.default.register(ISfWI, templates);
exports.ISfWI = ISfWI;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[273]);