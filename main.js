/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* GENERAL */\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.container-fluid {\n  margin: 0 10px;\n}\n\n/* NAVIGATION */\nheader {\n  height: 10vh;\n}\nheader nav {\n  margin-top: 10px;\n}\nheader nav .main-nav {\n  display: flex;\n  justify-content: end;\n  gap: 10px;\n}\nheader nav .main-nav button {\n  padding: 10px 20px;\n  cursor: pointer;\n  border: 0px solid rgb(123, 123, 123);\n  border-radius: 5px;\n}\n\n/* CONTENT */\n#content .main-title {\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n}\n#content .content-image {\n  height: 50vh;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 10px;\n}\n#content .main-para {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n  font-size: 18px;\n}\n\n.active {\n  background-color: black;\n  color: white;\n}\n\n/* CONTENT */\n.main-menu {\n  display: grid;\n  gap: 15px;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n}\n.main-menu .menu-item {\n  height: 450px;\n  position: relative;\n  background-color: #9CC1D9;\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n}\n.main-menu .menu-item img {\n  height: 85%;\n  width: 100%;\n  object-fit: cover;\n}\n.main-menu .menu-item .menu-cost {\n  position: absolute;\n  bottom: 10px;\n  right: 8px;\n  font-size: 30px;\n}\n\n/* CONTACT FORM */\n.main-form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.main-form label {\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\n.main-form label:last-child {\n  margin-bottom: 0;\n}\n.main-form input {\n  border: 1px solid black;\n  border-radius: 10px;\n  height: 30px;\n  width: 30vw;\n  margin-bottom: 30px;\n  padding: 0 10px;\n}\n.main-form input:last-child {\n  margin-bottom: 0;\n}\n.main-form #message {\n  padding-bottom: 130px;\n}\n.main-form #submit {\n  width: 200px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n}\n\n/* FOOTER */\nfooter {\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img1.jpg */ \"./src/assets/img1.jpg\");\n\n\nconst contactPage = () => {\n    \n    const mainContent = document.getElementById('content');\n    // Create headline and create <h1>\n    let titleText = document.createTextNode('Contact Us');\n    const title = document.createElement('h1');\n    // Append title to <h1>\n    title.appendChild(titleText);\n    // Create <div> with a class name and append  <h1>\n    const mainTitle = document.createElement('div');\n    mainTitle.classList.add('main-title');\n    mainTitle.appendChild(title);\n    // Append <div> to main content\n    mainContent.appendChild(mainTitle);\n\n    createFormInputs(mainContent);\n}\n\n// Contact Form Class\nclass CreateInputs {\n    constructor(element, attribute, name, id, properties) {\n        this.element = element,\n        this.attribute = attribute,\n        this.name = name,\n        this.id = id;\n        this.properties = properties;\n    }\n}\n\n// Form Input boxes\nconst firstNameLabel = new CreateInputs('label', 'for', 'First Name', 'firstName', 'firstName');\nconst firstNameInput = new CreateInputs('input', 'type', 'First Name', 'firstName', 'text');\nconst lastNameLabel = new CreateInputs('label', 'for', 'Last Name', 'lastName', 'lastName');\nconst lastNameInput = new CreateInputs('input', 'type', 'Last Name', 'lastName', 'text');\nconst phoneLabel = new CreateInputs('label', 'for', 'Phone Number', 'phoneNumber', 'phoneNumber');\nconst phoneInput = new CreateInputs('input', 'type', 'Phone Number', 'phoneNumber', 'number');\nconst emailLabel = new CreateInputs('label', 'for', 'Email', 'email', 'email');\nconst emailInput = new CreateInputs('input', 'type', 'Email', 'email', 'email');\nconst messageLabel = new CreateInputs('label', 'for', 'Leave a message', 'message', 'message');\nconst messageInput = new CreateInputs('input', 'type', 'message', 'message', 'message');\nconst submitBtn = new CreateInputs('input', 'type', 'submit', 'submit', 'submit');\n\n// Form Array\nconst formArray = [firstNameLabel, firstNameInput, lastNameLabel, lastNameInput, phoneLabel, phoneInput,\n                   emailLabel, emailInput, messageLabel, messageInput, submitBtn];\n\n// Create form inputs and labels\nfunction createFormInputs(mainContent) {\n\n    // Create form container\n    const mainFormContainer = document.createElement('form');\n    mainFormContainer.classList.add('main-form');\n    mainContent.appendChild(mainFormContainer);\n\n    // Generate form inputs\n    formArray.forEach((formArrayItem) => {\n        if(formArrayItem.element === 'label') {\n            const formItem = document.createElement(formArrayItem.element);\n            const formText = document.createTextNode(formArrayItem.name);\n            formItem.setAttribute(formArrayItem.attribute, formArrayItem.properties);\n            mainFormContainer.appendChild(formItem);\n            formItem.appendChild(formText);\n        } else {\n            const formItem = document.createElement(formArrayItem.element);\n            const formText = document.createTextNode(formArrayItem.name);\n            formItem.setAttribute(formArrayItem.attribute, formArrayItem.properties);\n            formItem.setAttribute('name', formArrayItem.id);\n            formItem.setAttribute('id', formArrayItem.id);\n            mainFormContainer.appendChild(formItem);\n            formItem.appendChild(formText);\n        }\n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _initialPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPage */ \"./src/initialPage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n// Import CSS\n\n\n// Import function\n\n\n\n\nfunction component() {\n    const mainContent = document.getElementById('content');\n    const buttons = document.querySelectorAll('.main-nav button');\n\n    // Clicking menu tab\n    buttons.forEach((button) => {\n        button.addEventListener('click', (e) => {\n            addActiveClass(button);\n\n            if(e.target.textContent === 'Home') {\n                generatePage(mainContent, _initialPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n            } else if(e.target.textContent === 'Menu') {\n                generatePage(mainContent, _menuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n            } else if(e.target.textContent === 'Contact') {\n                generatePage(mainContent, _contactPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n            }\n        });\n    });\n\n    (0,_initialPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n// Add active class to buttons\nfunction addActiveClass(button) {\n    const activeClass = document.querySelector('.active');\n    if(activeClass) {\n        activeClass.classList.remove('active');\n    }\n    button.classList.add('active');\n}\n\n// Generate page function\nfunction generatePage(mainContent, pageModules) {\n    mainContent.innerHTML = '';\n    return pageModules();\n}\n\ncomponent();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialPage.js":
/*!****************************!*\
  !*** ./src/initialPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img1.jpg */ \"./src/assets/img1.jpg\");\n\n\nconst initialPage = () => {\n    \n    const mainContent = document.getElementById('content');\n    // Create headline and create <h1>\n    let titleText = document.createTextNode('Welcome to Kaligula Restaurant');\n    const title = document.createElement('h1');\n    // Append title to <h1>\n    title.appendChild(titleText);\n    // Create <div> with a class name and append  <h1>\n    const mainTitle = document.createElement('div');\n    mainTitle.classList.add('main-title');\n    mainTitle.appendChild(title);\n    // Append <div> to main content\n    mainContent.appendChild(mainTitle);\n\n    // Load image\n    const myImage = new Image();\n    myImage.src = _assets_img1_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    myImage.classList.add('content-image');\n    // Create container div with a class name and append <image>\n    const mainImageContainer = document.createElement('div');\n    mainImageContainer.classList.add('main-image');\n    mainImageContainer.appendChild(myImage);\n    // Append container div to main content\n    mainContent.appendChild(mainImageContainer);\n    \n    // Create text node and create <p>\n    let text = document.createTextNode(\"Where culinary excellence meets an inviting atmosphere. Here, we blend traditional flavors with modern culinary techniques to bring you an unforgettable dining experience.\");\n    const para = document.createElement('p');\n    // Append text node to <p> tag\n    para.appendChild(text);\n    // Append <p> to <div> with a class name\n    const mainPara = document.createElement('div');\n    mainPara.classList.add('main-para');\n    mainPara.appendChild(para);\n    // Append <div> to main content\n    mainContent.appendChild(mainPara);\n\n    return mainContent;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/img2.jpg */ \"./src/assets/img2.jpg\");\n/* harmony import */ var _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img3.jpg */ \"./src/assets/img3.jpg\");\n/* harmony import */ var _assets_img4_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img4.jpg */ \"./src/assets/img4.jpg\");\n/* harmony import */ var _assets_img5_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/img5.jpg */ \"./src/assets/img5.jpg\");\n/* harmony import */ var _assets_img6_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/img6.jpg */ \"./src/assets/img6.jpg\");\n/* harmony import */ var _assets_img7_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/img7.jpg */ \"./src/assets/img7.jpg\");\n/* harmony import */ var _assets_img8_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/img8.jpg */ \"./src/assets/img8.jpg\");\n/* harmony import */ var _assets_img9_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/img9.jpg */ \"./src/assets/img9.jpg\");\n\n\n\n\n\n\n\n\n\nconst menuPage = () => {\n    \n    const mainContent = document.getElementById('content');\n    // Create headline and create <h1>\n    let titleText = document.createTextNode('Browse our menu page');\n    const title = document.createElement('h1');\n    // Append title to <h1>\n    title.appendChild(titleText);\n    // Create <div> with a class name and append  <h1>\n    const mainTitle = document.createElement('div');\n    mainTitle.classList.add('main-title');\n    mainTitle.appendChild(title);\n    // Append <div> to main content\n    mainContent.appendChild(mainTitle);\n\n    // Menu Content\n    // Create and append main-menu div\n    const mainMenu = document.createElement('div');\n    mainMenu.classList.add('main-menu');\n    mainContent.appendChild(mainMenu);\n\n    menuLibrary.forEach((menuItem) => {\n        // Create a div for each menu item\n        const menuItemContainer = document.createElement('div');\n        menuItemContainer.classList.add('menu-item');\n        mainMenu.appendChild(menuItemContainer);\n\n        // Append Image\n        const menuImage = new Image();\n        menuImage.src = menuItem.img;\n        menuItemContainer.appendChild(menuImage);\n\n        // Append Title\n        const menuTitle = document.createElement('h2');\n        menuTitle.textContent = menuItem.title;\n        menuItemContainer.appendChild(menuTitle);\n\n        // Append Description\n        const menuDescription = document.createElement('p');\n        menuDescription.textContent = menuItem.description;\n        menuItemContainer.appendChild(menuDescription);\n\n        // Append Price\n        const menuCost = document.createElement('p');\n        menuCost.classList.add('menu-cost');\n        menuCost.textContent = `$${menuItem.price}`;\n        menuItemContainer.appendChild(menuCost);\n    });\n\n    return mainContent;\n}\n\nclass Menu {\n    constructor(title, description, img, price) {\n        this.title = title;\n        this.description = description;\n        this.img = img;\n        this.price = price;\n    }\n}\n\nlet menu001 = new Menu('Cheese Pasta', 'A pasta marinated in cheese', _assets_img2_jpg__WEBPACK_IMPORTED_MODULE_0__, 23);\nlet menu002 = new Menu('Rice Soup', 'Rice with soup', _assets_img3_jpg__WEBPACK_IMPORTED_MODULE_1__, 10);\nlet menu003 = new Menu('Nanaki Chicken', 'Grilled Chicken with sauce', _assets_img4_jpg__WEBPACK_IMPORTED_MODULE_2__, 12);\nlet menu004 = new Menu('Burito', 'A burito with lettice only', _assets_img5_jpg__WEBPACK_IMPORTED_MODULE_3__, 5);\nlet menu005 = new Menu('Orange Chicken', 'An actual live chicken', _assets_img6_jpg__WEBPACK_IMPORTED_MODULE_4__, 12);\nlet menu006 = new Menu('Aussie Pizza', 'Beef, fresh tomato, feta cheese and spinash', _assets_img7_jpg__WEBPACK_IMPORTED_MODULE_5__, 24);\nlet menu007 = new Menu('Tandoori Chicken', 'Marinated in yogurt and spices', _assets_img8_jpg__WEBPACK_IMPORTED_MODULE_6__, 15.90);\nlet menu008 = new Menu('Croissant', 'Filled with ham and cheese', _assets_img9_jpg__WEBPACK_IMPORTED_MODULE_7__, 8);\n\n// menu library\nlet menuLibrary = [menu001, menu002, menu003, menu004, menu005, menu006, menu007, menu008];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/assets/img1.jpg":
/*!*****************************!*\
  !*** ./src/assets/img1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed884300764e93e766ae.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img1.jpg?");

/***/ }),

/***/ "./src/assets/img2.jpg":
/*!*****************************!*\
  !*** ./src/assets/img2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f86bfe0e0bea62d75d06.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img2.jpg?");

/***/ }),

/***/ "./src/assets/img3.jpg":
/*!*****************************!*\
  !*** ./src/assets/img3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f418736838ccc58d9dd3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img3.jpg?");

/***/ }),

/***/ "./src/assets/img4.jpg":
/*!*****************************!*\
  !*** ./src/assets/img4.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b420fbecc86b2cffb838.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img4.jpg?");

/***/ }),

/***/ "./src/assets/img5.jpg":
/*!*****************************!*\
  !*** ./src/assets/img5.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"735870c9c23c36b618ee.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img5.jpg?");

/***/ }),

/***/ "./src/assets/img6.jpg":
/*!*****************************!*\
  !*** ./src/assets/img6.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c8a37d9cf362abb62f64.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img6.jpg?");

/***/ }),

/***/ "./src/assets/img7.jpg":
/*!*****************************!*\
  !*** ./src/assets/img7.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"57cb67be2da7d98b6e87.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img7.jpg?");

/***/ }),

/***/ "./src/assets/img8.jpg":
/*!*****************************!*\
  !*** ./src/assets/img8.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01b82472e92ea062b162.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img8.jpg?");

/***/ }),

/***/ "./src/assets/img9.jpg":
/*!*****************************!*\
  !*** ./src/assets/img9.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4066d9b3a894313a27ca.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/img9.jpg?");

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
/******/ 			id: moduleId,
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;