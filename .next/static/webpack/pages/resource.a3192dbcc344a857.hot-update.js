"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resource",{

/***/ "./components/LinkContainer.js":
/*!*************************************!*\
  !*** ./components/LinkContainer.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst LinkContainer = (param)=>{\n    let { subtitle , title , content , link  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"thin-border\"\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/LinkContainer.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"pt-4\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/LinkContainer.js\",\n                lineNumber: 7,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"py-2\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/LinkContainer.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"py-4\",\n                children: content\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/LinkContainer.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"underline text-purple-primary leading-6 py-4\",\n                href: \"./\",\n                children: link\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/LinkContainer.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/LinkContainer.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, undefined);\n};\n_c = LinkContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkContainer);\nvar _c;\n$RefreshReg$(_c, \"LinkContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtDb250YWluZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzRCO0FBQzVCLE1BQU1DLGdCQUFnQixTQUFrQztRQUFqQyxFQUFDQyxTQUFRLEVBQUNDLE1BQUssRUFBQ0MsUUFBTyxFQUFDQyxLQUFJLEVBQUM7SUFDaEQscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNqQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVFMOzs7Ozs7MEJBRXBCLDhEQUFDTztnQkFBR0YsV0FBVTswQkFBUUo7Ozs7OzswQkFDdEIsOERBQUNPO2dCQUFFSCxXQUFVOzBCQUFRSDs7Ozs7OzBCQUN2Qiw4REFBQ0osa0RBQUlBO2dCQUFDTyxXQUFVO2dCQUErQ0ksTUFBTTswQkFBT047Ozs7Ozs7Ozs7OztBQUl0RjtLQVpNSjtBQWFOLCtEQUFlQSxhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlua0NvbnRhaW5lci5qcz82ZDExIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuY29uc3QgTGlua0NvbnRhaW5lciA9ICh7c3VidGl0bGUsdGl0bGUsY29udGVudCxsaW5rfSkgPT57XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoaW4tYm9yZGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInB0LTRcIj57c3VidGl0bGV9PC9oNT5cbiAgICAgICBcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJweS0yXCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS00XCI+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LXB1cnBsZS1wcmltYXJ5IGxlYWRpbmctNiBweS00XCIgaHJlZj17Jy4vJ30+e2xpbmt9PC9MaW5rPlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExpbmtDb250YWluZXIiXSwibmFtZXMiOlsiTGluayIsIkxpbmtDb250YWluZXIiLCJzdWJ0aXRsZSIsInRpdGxlIiwiY29udGVudCIsImxpbmsiLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsImgzIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LinkContainer.js\n"));

/***/ })

});