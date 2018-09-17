var pageComponent =
webpackJsonppageComponent([1],{

/***/ 291:
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

var _thirdStepSoy = __webpack_require__(292);

var _thirdStepSoy2 = _interopRequireDefault(_thirdStepSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hwVLM = function (_Component) {
  _inherits(hwVLM, _Component);

  function hwVLM() {
    _classCallCheck(this, hwVLM);

    return _possibleConstructorReturn(this, (hwVLM.__proto__ || Object.getPrototypeOf(hwVLM)).apply(this, arguments));
  }

  return hwVLM;
}(_metalComponent2.default);

;

_metalSoy2.default.register(hwVLM, _thirdStepSoy2.default);

exports.default = hwVLM;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.hwVLM = undefined;

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

  // This file was automatically generated from third-step.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace hwVLM.
   * @public
   */

  goog.module('hwVLM.incrementaldom');

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
    var param573 = function param573() {
      ie_open('h2');
      var dyn35 = opt_data.page.title;
      if (typeof dyn35 == 'function') dyn35();else if (dyn35 != null) itext(dyn35);
      ie_close('h2');
      ie_open('p');
      itext('So far we have created a very basic app component, wich don\'t have any state and don\'t use any NevinhaJs animation. Now it\'s time to create a basic component, that will have an input field and a text wich will reflect the value of the input.');
      ie_close('p');
      ie_open('p');
      itext('First, we\'ll see how to use motions in a Nevinha component, let\'s update the render method in our App component:');
      ie_close('p');
      $templateAlias2({ code: '  class App extends NevinhaComponent {\n    render() {\n      const {name} = this.state;\n\n      return (\n        <section>\n          <article enterLeftBounce>\n            <h1 className="hello">\n              <p className="margin-hello">Hello! This is the new: </p>\n              {name ? name : \'NevinhaJS\'}\n            </h1>\n          </article>\n        </section>\n      );\n    }\n  }', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In the component above, we\'re using ');
      ie_open('code');
      itext('enterLeftBounce');
      ie_close('code');
      itext(' as animation, wich will animate our app in a fadeIn effect comming from the left side of our application. Notice that we are using an inline condition to check if the state ');
      ie_open('code');
      itext('name');
      ie_close('code');
      itext(' exists, if it\'s not, we will show \'NevinhaJs\' as a default value.');
      ie_close('p');
      ie_open('p');
      itext('Now we have to create the ');
      ie_open('code');
      itext('FormComponent');
      ie_close('code');
      itext(' wich will have an input and a footer message. The ');
      ie_open('code');
      itext('FormComponent');
      ie_close('code');
      itext(' will receives a ');
      ie_open('code');
      itext('handleKeyUp');
      ie_close('code');
      itext(' method as props for sendding our App component the value of the input when the user inputs something in our form. The ');
      ie_open('code');
      itext('FormComponent');
      ie_close('code');
      itext(' will be have the code bellow:');
      ie_close('p');
      $templateAlias2({ code: 'class FormComponent extends NevinhaComponent {\n    render() {\n        const {handleKeyPress} = this.props;\n\n        return (\n            <form class="app-form">\n                <input\n                    className="input"\n                    onKeyUp={handleKeyPress}\n                    placeholder="Edit page name"\n                    type="text"\n                />\n                <footer pulseSlow>\n                    <p className="footer">\n                        Type the page name in the input above\n                    </p>\n                </footer>\n            </form>\n        );\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If you have used some component framework like react, you probably are familiar with the code above, but the coll thing is that we aren\'t using react or any other component framework but even though, we are using states, props, animations and our components are using the virtual DOM algorithms.');
      ie_close('p');
      ie_open('p');
      itext('We need to call our ');
      ie_open('code');
      itext('FormComponent');
      ie_close('code');
      itext(' inside the ');
      ie_open('code');
      itext('App');
      ie_close('code');
      itext(' component, for using it, and we also need to create a constructor method in our ');
      ie_open('code');
      itext('App');
      ie_close('code');
      itext(' component to bind the instance in the ');
      ie_open('code');
      itext('handleKeyUp');
      ie_close('code');
      itext(' method. Like the example bellow:');
      ie_close('p');
      $templateAlias2({ code: 'lass App extends NevinhaComponent {\n    constructor() {\n        super();\n\n        this.handleKeyPress = this.handleKeyPress.bind(this);\n    }\n\n    handleKeyPress({target}) {\n        this.setState({\n            name: target.value\n        });\n    }\n\n    render() {\n        const {name} = this.state;\n\n        return (\n            <div enterLeftBounce>\n                <h1 className="hello">\n                    <p className="margin-hello">Hello! This is the new: </p>\n                    {name ? name : \'NevinhaJS\'}\n                </h1>\n\n                <FormComponent handleKeyPress={this.handleKeyPress} />\n            </div>\n        );\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Notice that we update our state through the ');
      ie_open('code');
      itext('setState');
      ie_close('code');
      itext(' method. This method will trigger our diff internally, wich checks wich changes in the virtual DOM and updates them.');
      ie_close('p');
      ie_open('p');
      itext('For finishing our app, you can create a ');
      ie_open('code');
      itext('style.css');
      ie_close('code');
      itext(' file in the ');
      ie_open('code');
      itext('public');
      ie_close('code');
      itext(' folder, just to stylize your app:');
      ie_close('p');
      $templateAlias2({ code: 'body {\n    background: #f5f5f5;\n    font: 24px \'Open Sans\', sans-serif;\n    margin: 0;\n}\n\n#my-app {\n    position: relative;\n}\n\n.height {\n    height: 100vh;\n    padding-top: 1px;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.margin-hello {\n    margin: 10px 0;\n    font-size: 2rem;\n}\n\n.form {\n    display: block;\n    text-align: center;\n    width: 500px;\n    margin: 0 auto;\n}\n.hello {\n    text-align: center;\n    color: rgba(175, 47, 47, 0.15);\n    font-size: 5rem;\n    min-height: 138px;\n}\n\ninput {\n    text-align: center;\n    font-size: 1.6rem;\n    padding: 24px 0;\n    width: 100%;\n    border: none;\n    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.22);\n}\n\nfooter {\n    font-size: 1rem;\n    color: #bfbfbf;\n    line-height: 2;\n}', mode: 'css' }, null, opt_ijData);
      ie_open('p');
      itext('Don\'t forget to call the ');
      ie_open('code');
      itext('style.css');
      ie_close('code');
      itext(' file in your ');
      ie_open('code');
      itext('index.html');
      ie_close('code');
      itext(' file:');
      ie_close('p');
      $templateAlias2({ code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n    <link rel="stylesheet" type="text/css" href="./style.css">\n    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">\n</head>\n<body>\n    <div id="my-app" class="height"></div>\n    <script src="./bundle.js"><\/script>\n</body>\n</html>', mode: 'html' }, null, opt_ijData);
      ie_open('p');
      itext('Now you can run in your terminal ');
      ie_open('code');
      itext('yarn start');
      ie_close('code');
      itext(' and see our example working.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param573 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'hwVLM.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var hwVLM = function (_Component) {
  _inherits(hwVLM, _Component);

  function hwVLM() {
    _classCallCheck(this, hwVLM);

    return _possibleConstructorReturn(this, (hwVLM.__proto__ || Object.getPrototypeOf(hwVLM)).apply(this, arguments));
  }

  return hwVLM;
}(_metalComponent2.default);

_metalSoy2.default.register(hwVLM, templates);
exports.hwVLM = hwVLM;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[291]);