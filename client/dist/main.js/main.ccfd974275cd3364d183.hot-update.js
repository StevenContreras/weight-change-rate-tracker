/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatemy_webpack_project"]("main",{

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _login_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.jsx */ \"./client/src/components/login.jsx\");\n/* harmony import */ var _signUp_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signUp.jsx */ \"./client/src/components/signUp.jsx\");\n\n\n\n\nfunction App() {\n  const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n\n  function handleLogin(e) {\n    let num = parseInt(e);\n    console.log(typeof num, num);\n    setLogin(num);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Slim Wel\")), login === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_login_jsx__WEBPACK_IMPORTED_MODULE_1__.default, {\n    handleLogin: handleLogin\n  }) : login === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_signUp_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n    handleLogin: handleLogin\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"Profile\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://my-webpack-project/./client/src/components/app.jsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "f570ce40672e113009ce"
/******/ 	})();
/******/ 	
/******/ }
);