"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Index\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.ts\");\n\nvar _s = $RefreshSig$();\n\nconst DashBoard = (param)=>{\n    let { code  } = param;\n    _s();\n    const token = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(code);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"THis is the dashboard with code: \",\n            code\n        ]\n    }, void 0, true);\n};\n_s(DashBoard, \"hSgveKuOUDJEpk4liIyctLrApis=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = DashBoard;\nlet codePrama;\nif (true) codePrama = new URLSearchParams(window === null || window === void 0 ? void 0 : window.location.search).get(\"code\");\nfunction Index() {\n    return codePrama ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashBoard, {\n        code: codePrama\n    }, void 0, false, {\n        fileName: \"/Users/joelevans/Projects/spotify-app/apps/spotify-app-client/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\"\n        },\n        children: \"This is a test\"\n    }, void 0, false, {\n        fileName: \"/Users/joelevans/Projects/spotify-app/apps/spotify-app-client/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1;\n$RefreshReg$(_c, \"DashBoard\");\n$RefreshReg$(_c1, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNzQztBQUV0QyxNQUFNQyxZQUFZLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ3pCLE1BQU1DLFFBQVFILDBEQUFPQSxDQUFDRTtJQUN0QixxQkFBTzs7WUFBRTtZQUFrQ0E7OztBQUM3QztHQUhNRDs7UUFDVUQsc0RBQU9BOzs7S0FEakJDO0FBS04sSUFBSUc7QUFDSixJQUFJLElBQWtCLEVBQ3BCQSxZQUFZLElBQUlDLGdCQUFnQkMsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRQyxRQUFRLENBQUNDLE1BQU0sRUFBRUMsR0FBRyxDQUFDO0FBRXhELFNBQVNDLFFBQVE7SUFDdEIsT0FBT04sMEJBQ0wsOERBQUNIO1FBQVVDLE1BQU1FOzs7Ozs2QkFFakIsOERBQUNPO1FBQ0NDLE9BQU87WUFDTEMsU0FBUztZQUNUQyxnQkFBZ0I7WUFDaEJDLFlBQVk7UUFDZDtrQkFDRDs7Ozs7WUFHRjtBQUNILENBQUM7TUFkZUw7QUFnQmhCLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi9ob29rcy91c2VBdXRoJ1xuXG5jb25zdCBEYXNoQm9hcmQgPSAoeyBjb2RlIH0pID0+IHtcbiAgY29uc3QgdG9rZW4gPSB1c2VBdXRoKGNvZGUpXG4gIHJldHVybiA8PlRIaXMgaXMgdGhlIGRhc2hib2FyZCB3aXRoIGNvZGU6IHtjb2RlfTwvPjtcbn07XG5cbmxldCBjb2RlUHJhbWE7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpXG4gIGNvZGVQcmFtYSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93Py5sb2NhdGlvbi5zZWFyY2gpLmdldCgnY29kZScpO1xuXG5leHBvcnQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiBjb2RlUHJhbWEgPyAoXG4gICAgPERhc2hCb2FyZCBjb2RlPXtjb2RlUHJhbWF9IC8+XG4gICkgOiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICA+XG4gICAgICBUaGlzIGlzIGEgdGVzdFxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJ1c2VBdXRoIiwiRGFzaEJvYXJkIiwiY29kZSIsInRva2VuIiwiY29kZVByYW1hIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJnZXQiLCJJbmRleCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});