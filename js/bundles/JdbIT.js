var pageComponent =
webpackJsonppageComponent([8],{

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

var _stickySoy = __webpack_require__(286);

var _stickySoy2 = _interopRequireDefault(_stickySoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JdbIT = function (_Component) {
  _inherits(JdbIT, _Component);

  function JdbIT() {
    _classCallCheck(this, JdbIT);

    return _possibleConstructorReturn(this, (JdbIT.__proto__ || Object.getPrototypeOf(JdbIT)).apply(this, arguments));
  }

  return JdbIT;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JdbIT, _stickySoy2.default);

exports.default = JdbIT;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JdbIT = undefined;

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

  // This file was automatically generated from sticky.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JdbIT.
   * @public
   */

  goog.module('JdbIT.incrementaldom');

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
    var param506 = function param506() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('How to use');
      ie_close('h2');
      ie_open('p');
      itext('In NevinhaJs, there\'s two ways to use providers in your application. Depending on how the provider has been implemented, you can use it as a inline provider, or as a component provider.');
      ie_close('p');
      ie_open('p');
      itext('In the case of the sticky provider, it has been implemented as a inline provider, so the way for using it is very simple, you just need to parse ');
      ie_open('code');
      itext('sticky');
      ie_close('code');
      itext(' as a props of your component or HTML element. You can see a use case of the sticky provider in the code bellow:');
      ie_close('p');
      $templateAlias2({ code: 'const MyComponent = (props, children) => (\n  <section>\n    <header sticky>\n      This is my header fixed until the end of this section\n    </header>\n    <article>\n      <p>Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har v\xE6rt bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for \xE5 lage et pr\xF8veeksemplar av en bok. Lorem Ipsum har t\xE5lt tidens tann usedvanlig godt, og har i tillegg til \xE5 best\xE5 gjennom fem \xE5rhundrer ogs\xE5 t\xE5lt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-\xE5rene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst.</p>\n\n      <br />\n\n      <p>Det er et velkjent faktum at lesere distraheres av lesbart innhold p\xE5 en side n\xE5r man ser p\xE5 dens layout. Poenget med \xE5 bruke Lorem Ipsum er at det har en mer eller mindre normal fordeling av bokstaver i ord, i motsetning til \'Innhold her, innhold her\', og gir inntrykk av \xE5 v\xE6re lesbar tekst. Mange webside- og sideombrekkingsprogrammer bruker n\xE5 Lorem Ipsum som sin standard for provisorisk tekst, og et s\xF8k etter \'Lorem Ipsum\' vil avdekke mang en uferdig webside. Ulike versjoner har sprunget frem i senere \xE5r, noen ved rene uhell og andre mer planlagte (med humor o.l.).</p>\n    </article>\n  </section>\n)', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('em');
      ie_open('strong');
      itext('Ps');
      ie_close('strong');
      itext(': In that example above, we\'re using a state-less component, but you can use a state-full component as you prefer.');
      ie_close('em');
      ie_close('p');
      ie_open('h3');
      itext('Custom sticky configuration');
      ie_close('h3');
      ie_open('p');
      itext('You can also configure your sticky position, all that you need is informing an object as value of your sticky props with your configuration values. For example:');
      ie_close('p');
      $templateAlias2({ code: 'const MyComponent = (props, children) => (\n  <section>\n    <header sticky={{\n      top: "20px"\n    }}>\n      This is my header fixed until the end of this section\n    </header>\n    <article>(...)</article>\n  </section>\n)', mode: 'javascript' }, null, opt_ijData);
      ie_open('h3');
      itext('What\'s next?');
      ie_close('h3');
      ie_open('p');
      itext('Now that you know how to use Sticky Provider, you can learn about ');
      ie_open('a', null, null, 'href', '/docs/providers/parallax.html');
      itext('Parallax Provider in the next sextion');
      ie_close('a');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param506 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JdbIT.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JdbIT = function (_Component) {
  _inherits(JdbIT, _Component);

  function JdbIT() {
    _classCallCheck(this, JdbIT);

    return _possibleConstructorReturn(this, (JdbIT.__proto__ || Object.getPrototypeOf(JdbIT)).apply(this, arguments));
  }

  return JdbIT;
}(_metalComponent2.default);

_metalSoy2.default.register(JdbIT, templates);
exports.JdbIT = JdbIT;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[285]);