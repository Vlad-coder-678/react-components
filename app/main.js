/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/App.jsx":
/*!****************************!*\
  !*** ./components/App.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SectionFirstScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SectionFirstScreen */ "./components/SectionFirstScreen.jsx");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-width: 1170px;\n  margin: 0 auto;\n"])));

var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SectionFirstScreen__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./components/CardComponent.jsx":
/*!**************************************!*\
  !*** ./components/CardComponent.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Card = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex-basis: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-radius: 10px;\n  overflow: hidden;\n  background-color: #f2f2f2;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 10px 0 rgba(0, 0, 0, 0.3), 0 0 30px 0 rgba(0, 0, 0, 0.15);\n\n  &:hover {\n    transition: all 0.3s ease-in-out;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 25px 0 rgba(0, 0, 0, 0.3), 0 0 50px 0 rgba(0, 0, 0, 0.15);\n  }\n  &:active {\n    transition: all 0.2s ease-in-out;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 1), 0 0 10px 0 rgba(0, 0, 0, 0.3), 0 0 30px 0 rgba(0, 0, 0, 0.15);\n  }\n"])));
var CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n"])));
var AvaWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden;\n  margin: 10px;\n"])));
var Ava = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"])));
var AuthorDesc = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"])));
var AuthorName = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h3(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  color: blue;\n"])));
var AuthorStatus = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: #aaa;\n"])));
var CardBody = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 98%;\n  margin: 0 auto;\n  border-bottom: 1px solid #ddd;\n\n  h3 {\n    text-align: center;\n    text-transform: uppercase;\n    margin: 5px;\n  }\n\n  p {\n    margin: 5px;\n  }\n"])));
var WrapImg = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 0 auto;\n  height: 250px;\n  border-radius: 10px;\n  overflow: hidden;\n"])));
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"])));
var CardFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"])));
var FooterLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px;\n"])));
var FooterRight = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px;\n"])));

var CardComponent = function CardComponent(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardHeader, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AvaWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ava, {
    src: data.avaPath,
    alt: data.avaAlt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthorDesc, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthorName, null, data.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthorStatus, null, data.status))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrapImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Img, {
    src: data.imagePath,
    alt: data.imageAlt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, data.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CardFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterLeft, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data.views)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FooterRight, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M21.216 8h-2.216v-1.75l1-3.095v-3.155h-5.246c-2.158 6.369-4.252 9.992-6.754 10v-1h-8v13h8v-1h2l2.507 2h8.461l3.032-2.926v-10.261l-2.784-1.813zm.784 11.225l-1.839 1.775h-6.954l-2.507-2h-2.7v-7c3.781 0 6.727-5.674 8.189-10h1.811v.791l-1 3.095v4.114h3.623l1.377.897v8.328z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, data.likes))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardComponent);

/***/ }),

/***/ "./components/SearchBar.jsx":
/*!**********************************!*\
  !*** ./components/SearchBar.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 30px 0;\n  margin: 10px;\n  text-align: center;\n"])));
var VisualHidden = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));

var SearchBar = function SearchBar(_ref) {
  var searchQuery = _ref.searchQuery,
      setSearchQuery = _ref.setSearchQuery;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: "/",
    method: "get"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "header-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VisualHidden, null, "Search posts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: searchQuery,
    onInput: function onInput(e) {
      return setSearchQuery(e.target.value);
    },
    type: "text",
    id: "header-search",
    placeholder: "Search posts",
    name: "inputS"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit"
  }, "Search")));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./components/SectionFirstScreen.jsx":
/*!*******************************************!*\
  !*** ./components/SectionFirstScreen.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar */ "./components/SearchBar.jsx");
/* harmony import */ var _CardComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardComponent */ "./components/CardComponent.jsx");
/* harmony import */ var _data_cardsData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/cardsData.js */ "./data/cardsData.js");
var _templateObject;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




 // eslint-disable-next-line import/extensions


var Cards = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 15px;\n"])));

var SectionFirstScreen = function SectionFirstScreen() {
  var search = window.location.search;
  var query = new URLSearchParams(search).get('inputS');

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(query || ''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      searchQuery = _React$useState2[0],
      setSearchQuery = _React$useState2[1];

  var filterCards = function filterCards(cards, q) {
    if (!q) {
      return cards;
    }

    return cards.filter(function (card) {
      var cardName = card.title.toLowerCase() + card.text.toLowerCase();
      return cardName.includes(q);
    });
  };

  var filteredCards = filterCards(_data_cardsData_js__WEBPACK_IMPORTED_MODULE_3__.cardsData, searchQuery);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_1__.default, {
    searchQuery: searchQuery,
    setSearchQuery: setSearchQuery
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Cards, null, filteredCards.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CardComponent__WEBPACK_IMPORTED_MODULE_2__.default, {
      data: item,
      key: item.author
    });
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionFirstScreen);

/***/ }),

/***/ "./data/cardsData.js":
/*!***************************!*\
  !*** ./data/cardsData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardsData": () => (/* binding */ cardsData)
/* harmony export */ });
/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/logo.jpg */ "./assets/logo.jpg");
/* harmony import */ var _assets_poster_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/poster.jpg */ "./assets/poster.jpg");

 // eslint-disable-next-line import/prefer-default-export

var cardsData = [{
  avaPath: _assets_poster_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  avaAlt: 'avatar',
  author: 'Kiril Pichurin',
  status: 'I love webpack',
  title: 'react-component-card-1',
  imagePath: _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__.default,
  imageAlt: 'imgDesc',
  text: 'This first post is about React.',
  date: '30.07.2021',
  likes: '123',
  views: '523'
}, {
  avaPath: _assets_poster_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  avaAlt: 'avatar',
  author: 'Mary Cranberry',
  status: 'I love webpack',
  title: 'react-component-card-2',
  imagePath: _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__.default,
  imageAlt: 'imgDesc',
  text: 'This next post is about Preact',
  date: '30.07.2021',
  likes: '123',
  views: '523'
}, {
  avaPath: _assets_poster_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  avaAlt: 'avatar',
  author: 'Kiril Matveich',
  status: 'I love webpack',
  title: 'react-component-card-3',
  imagePath: _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__.default,
  imageAlt: 'imgDesc',
  text: 'We have yet another React post!',
  date: '30.07.2021',
  likes: '123',
  views: '523'
}, {
  avaPath: _assets_poster_jpg__WEBPACK_IMPORTED_MODULE_1__.default,
  avaAlt: 'avatar',
  author: 'Stepan Polyckarpovich',
  status: 'I love webpack',
  title: 'react-component-card-4',
  imagePath: _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_0__.default,
  imageAlt: 'imgDesc',
  text: 'This is the fourth and final post',
  date: '30.07.2021',
  likes: '123',
  views: '523'
}];

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/main.scss */ "./scss/main.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./components/App.jsx");





(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/logo.jpg":
/*!*************************!*\
  !*** ./assets/logo.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./assets/logo.jpg");

/***/ }),

/***/ "./assets/poster.jpg":
/*!***************************!*\
  !*** ./assets/poster.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./assets/poster.jpg");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-dom_index_js-node_modules-9c551c"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_react-dom_index_js-node_modules-9c551c"], () => (__webpack_require__("./index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map