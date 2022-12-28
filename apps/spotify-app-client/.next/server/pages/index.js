"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./hooks/useAuth.ts":
/*!**************************!*\
  !*** ./hooks/useAuth.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction useAuth(code) {\n    const [accessToken, setAccessToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const [refreshToken, setRefreshToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    const [expriseIn, setExpriseIn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:3001/login\", {\n            code: code\n        }).then((res)=>{\n            console.log(res.data);\n        });\n    // .catch((err) => {\n    //   window.location = '/' as unknown as Location;\n    // });\n    }, [\n        code\n    ]);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFFWCxTQUFTSSxRQUFRQyxJQUFJLEVBQUU7SUFDcEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQTtJQUM5QyxNQUFNLENBQUNNLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUE7SUFDaEQsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQTtJQUUxQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRSxrREFDTyxDQUFDLCtCQUErQjtZQUNuQ0UsTUFBTUE7UUFDUixHQUNDUSxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUk7UUFDdEI7SUFDRixvQkFBb0I7SUFDcEIsa0RBQWtEO0lBQ2xELE1BQU07SUFDUixHQUFHO1FBQUNaO0tBQUs7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQXV0aC50cz85Yzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aChjb2RlKSB7XG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3JlZnJlc2hUb2tlbiwgc2V0UmVmcmVzaFRva2VuXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtleHByaXNlSW4sIHNldEV4cHJpc2VJbl0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvbG9naW4nLCB7XG4gICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICB9KTtcbiAgICAvLyAuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgd2luZG93LmxvY2F0aW9uID0gJy8nIGFzIHVua25vd24gYXMgTG9jYXRpb247XG4gICAgLy8gfSk7XG4gIH0sIFtjb2RlXSk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlQXV0aCIsImNvZGUiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwic2V0UmVmcmVzaFRva2VuIiwiZXhwcmlzZUluIiwic2V0RXhwcmlzZUluIiwicG9zdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAuth.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": () => (/* binding */ Index),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__]);\n_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst DashBoard = ({ code  })=>{\n    const token = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(code);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"THis is the dashboard with code: \",\n            code\n        ]\n    }, void 0, true);\n};\nlet codePrama;\nif (false) {}\nfunction Index() {\n    return codePrama ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashBoard, {\n        code: codePrama\n    }, void 0, false, {\n        fileName: \"/Users/joelevans/Projects/spotify-app/apps/spotify-app-client/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: \"This is a test\"\n    }, void 0, false, {\n        fileName: \"/Users/joelevans/Projects/spotify-app/apps/spotify-app-client/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNzQztBQUV0QyxNQUFNQyxZQUFZLENBQUMsRUFBRUMsS0FBSSxFQUFFLEdBQUs7SUFDOUIsTUFBTUMsUUFBUUgsMERBQU9BLENBQUNFO0lBQ3RCLHFCQUFPOztZQUFFO1lBQWtDQTs7O0FBQzdDO0FBRUEsSUFBSUU7QUFDSixJQUFJLEtBQWtCLEVBQ3BCQSxFQUE2RDtBQUV4RCxTQUFTTSxRQUFRO0lBQ3RCLE9BQU9OLDBCQUNMLDhEQUFDSDtRQUFVQyxNQUFNRTs7Ozs7NkJBRWpCLDhEQUFDTztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVEMsZ0JBQWdCO1lBQ2hCQyxZQUFZO1FBQ2Q7a0JBQ0Q7Ozs7O1lBR0Y7QUFDSCxDQUFDO0FBRUQsaUVBQWVMLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHVzZUF1dGggZnJvbSAnLi4vaG9va3MvdXNlQXV0aCdcblxuY29uc3QgRGFzaEJvYXJkID0gKHsgY29kZSB9KSA9PiB7XG4gIGNvbnN0IHRva2VuID0gdXNlQXV0aChjb2RlKVxuICByZXR1cm4gPD5USGlzIGlzIHRoZSBkYXNoYm9hcmQgd2l0aCBjb2RlOiB7Y29kZX08Lz47XG59O1xuXG5sZXQgY29kZVByYW1hO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuICBjb2RlUHJhbWEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdz8ubG9jYXRpb24uc2VhcmNoKS5nZXQoJ2NvZGUnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gY29kZVByYW1hID8gKFxuICAgIDxEYXNoQm9hcmQgY29kZT17Y29kZVByYW1hfSAvPlxuICApIDogKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgVGhpcyBpcyBhIHRlc3RcbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlQXV0aCIsIkRhc2hCb2FyZCIsImNvZGUiLCJ0b2tlbiIsImNvZGVQcmFtYSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0IiwiSW5kZXgiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();