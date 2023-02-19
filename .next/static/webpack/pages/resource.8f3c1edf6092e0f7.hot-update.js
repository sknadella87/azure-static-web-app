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

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondaryButton */ \"./components/SecondaryButton.js\");\n\n\nconst Card = (param)=>{\n    let { children , title , subtitle  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-4 mb-4 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-72 flex flex-col \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"capitalize title text-left text-xl font-bold mb-8\",\n                children: [\n                    \" \",\n                    title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/Card.js\",\n                lineNumber: 6,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/Card.js\",\n                lineNumber: 7,\n                columnNumber: 6\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex flex-col\",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/Card.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SecondaryButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: \"Download Guide\",\n                className: \"secondary\"\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/Card.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/components/Card.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFDL0MsTUFBTUMsT0FBTSxTQUFpQztRQUFoQyxFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBQ0MsU0FBUSxFQUFDO0lBQ3BDLHFCQUVGLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFvRDtvQkFBRUg7Ozs7Ozs7MEJBQ3BFLDhEQUFDSzswQkFBSUo7Ozs7OzswQkFDSiw4REFBQ0s7Z0JBQUVILFdBQVU7MEJBQWlCSjs7Ozs7OzBCQUM5Qiw4REFBQ0Ysd0RBQWVBO2dCQUFDRSxVQUFTO2dCQUFpQkksV0FBVTs7Ozs7Ozs7Ozs7O0FBS3pEO0tBWklMO0FBYUosK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2Q2MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlY29uZGFyeUJ1dHRvbiBmcm9tICcuL1NlY29uZGFyeUJ1dHRvbidcbmNvbnN0IENhcmQ9ICh7IGNoaWxkcmVuLCB0aXRsZSxzdWJ0aXRsZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IG1iLTQgc2hhZG93LVswcHhfNHB4XzhweF9yZ2JhKDAsMCwwLDAuMjUpXSBoLTcyIGZsZXggZmxleC1jb2wgXCI+XG4gICAgIDxoMyBjbGFzc05hbWU9XCJjYXBpdGFsaXplIHRpdGxlIHRleHQtbGVmdCB0ZXh0LXhsIGZvbnQtYm9sZCBtYi04XCI+IHt0aXRsZX08L2gzPlxuICAgICA8aDQ+e3N1YnRpdGxlfTwvaDQ+XG4gICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+e2NoaWxkcmVufTwvcD5cbiAgICAgIDxTZWNvbmRhcnlCdXR0b24gY2hpbGRyZW49XCJEb3dubG9hZCBHdWlkZVwiIGNsYXNzTmFtZT1cInNlY29uZGFyeVwiLz5cbiAgIDwvZGl2PlxuXG4gICBcbiAgICApXG4gIH1cbiAgZXhwb3J0IGRlZmF1bHQgQ2FyZCJdLCJuYW1lcyI6WyJTZWNvbmRhcnlCdXR0b24iLCJDYXJkIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInN1YnRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJoNCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n"));

/***/ })

});