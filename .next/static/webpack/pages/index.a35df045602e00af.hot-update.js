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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ \"./components/Hero.js\");\n/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Table */ \"./components/Table.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ \"./data.js\");\n/* harmony import */ var _components_Sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Sorting */ \"./components/Sorting.js\");\n/* harmony import */ var _components_Filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Filter */ \"./components/Filter.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [viewAll, setViewAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const columns = [\n        {\n            field: \"name\",\n            header: \"File Name\"\n        },\n        {\n            field: \"status\",\n            header: \"Status\"\n        },\n        {\n            field: \"submitter\",\n            header: \"Submitter\"\n        },\n        {\n            field: \"date\",\n            header: \"Date\"\n        },\n        {\n            field: \"version\",\n            header: \"Version\"\n        },\n        {\n            field: \"source\",\n            header: \"Data Source\"\n        },\n        {\n            field: \"program\",\n            header: \"Program\"\n        },\n        {\n            field: \"modals\",\n            header: \"Loads Modal\"\n        },\n        {\n            field: \"file\",\n            header: \"File Type\"\n        }\n    ];\n    const toggleViewAll = ()=>setViewAll((viewAll)=>!viewAll);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Intake Process\"\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"uppercase max-w-screen-lg m-auto pt-[80px] pb-[16px]\",\n                children: \"File Library\"\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-screen-lg m-auto flex mb-4 justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        filter: filter,\n                        setFilter: setFilter\n                    }, void 0, false, {\n                        fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sorting__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        order: order,\n                        setOrder: setOrder\n                    }, void 0, false, {\n                        fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: _data__WEBPACK_IMPORTED_MODULE_4__.tableData,\n                viewAll: viewAll,\n                filter: filter,\n                order: order,\n                columns: columns,\n                toggleViewAll: toggleViewAll\n            }, void 0, false, {\n                fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 6\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/itroche001/Documents/dev-projects/virgin-galactic/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"g4wtX6eXV9dMORh3sRo6cbzebAM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDVjtBQUNFO0FBQ047QUFDVztBQUNIO0FBRTFCLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUE7SUFDcEMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQTtJQUVsQyxNQUFNYyxVQUFVO1FBQ2Q7WUFBQ0MsT0FBTTtZQUFPQyxRQUFPO1FBQVc7UUFDaEM7WUFBQ0QsT0FBTTtZQUFTQyxRQUFPO1FBQVE7UUFDL0I7WUFBQ0QsT0FBTTtZQUFZQyxRQUFPO1FBQVc7UUFDckM7WUFBQ0QsT0FBTTtZQUFPQyxRQUFPO1FBQU07UUFDM0I7WUFBQ0QsT0FBTTtZQUFVQyxRQUFPO1FBQVM7UUFDakM7WUFBQ0QsT0FBTTtZQUFTQyxRQUFPO1FBQWE7UUFDcEM7WUFBQ0QsT0FBTTtZQUFVQyxRQUFPO1FBQVM7UUFDakM7WUFBQ0QsT0FBTTtZQUFTQyxRQUFPO1FBQWE7UUFDcEM7WUFBQ0QsT0FBTTtZQUFPQyxRQUFPO1FBQVc7S0FDakM7SUFFRCxNQUFNQyxnQkFBZ0IsSUFBTVIsV0FBV0QsQ0FBQUEsVUFBVyxDQUFDQTtJQUVuRCxxQkFFRSw4REFBQ1U7OzBCQUNDLDhEQUFDaEIsd0RBQUlBO2dCQUFDaUIsT0FBTTs7Ozs7OzBCQUNaLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBdUQ7Ozs7OzswQkFDckUsOERBQUNIO2dCQUFJRyxXQUFVOztrQ0FDZiw4REFBQ2YsMERBQU1BO3dCQUFDSSxRQUFRQTt3QkFBUUMsV0FBV0E7Ozs7OztrQ0FDbkMsOERBQUNOLDJEQUFPQTt3QkFBQ08sT0FBT0E7d0JBQU9DLFVBQVVBOzs7Ozs7Ozs7Ozs7MEJBR2xDLDhEQUFDVix5REFBS0E7Z0JBQ0xtQixNQUFNbEIsNENBQVNBO2dCQUNmSSxTQUFTQTtnQkFDVEUsUUFBUUE7Z0JBQ1JFLE9BQU9BO2dCQUNQRSxTQUFTQTtnQkFDVEcsZUFBZUE7Ozs7Ozs7Ozs7OztBQUtyQixDQUFDO0dBeEN1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZSdcbmltcG9ydCB7dGFibGVEYXRhfSBmcm9tICcuLi9kYXRhJ1xuaW1wb3J0IFNvcnRpbmcgIGZyb20gJy4uL2NvbXBvbmVudHMvU29ydGluZydcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GaWx0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt2aWV3QWxsLCBzZXRWaWV3QWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBjb2x1bW5zID0gW1xuICAgIHtmaWVsZDpcIm5hbWVcIixoZWFkZXI6XCJGaWxlIE5hbWVcIn0sXG4gICAge2ZpZWxkOlwic3RhdHVzXCIsaGVhZGVyOlwiU3RhdHVzXCJ9LFxuICAgIHtmaWVsZDpcInN1Ym1pdHRlclwiLGhlYWRlcjpcIlN1Ym1pdHRlclwifSxcbiAgICB7ZmllbGQ6XCJkYXRlXCIsaGVhZGVyOlwiRGF0ZVwifSxcbiAgICB7ZmllbGQ6XCJ2ZXJzaW9uXCIsaGVhZGVyOlwiVmVyc2lvblwifSxcbiAgICB7ZmllbGQ6XCJzb3VyY2VcIixoZWFkZXI6XCJEYXRhIFNvdXJjZVwifSxcbiAgICB7ZmllbGQ6XCJwcm9ncmFtXCIsaGVhZGVyOlwiUHJvZ3JhbVwifSxcbiAgICB7ZmllbGQ6XCJtb2RhbHNcIixoZWFkZXI6XCJMb2FkcyBNb2RhbFwifSxcbiAgICB7ZmllbGQ6XCJmaWxlXCIsaGVhZGVyOlwiRmlsZSBUeXBlXCJ9LFxuICBdXG5cbiAgY29uc3QgdG9nZ2xlVmlld0FsbCA9ICgpID0+IHNldFZpZXdBbGwodmlld0FsbCA9PiAhdmlld0FsbClcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxIZXJvIHRpdGxlPVwiSW50YWtlIFByb2Nlc3NcIi8+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIG1heC13LXNjcmVlbi1sZyBtLWF1dG8gcHQtWzgwcHhdIHBiLVsxNnB4XVwiPkZpbGUgTGlicmFyeTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBtLWF1dG8gZmxleCBtYi00IGp1c3RpZnktZW5kIGdhcC00XCI+XG4gICAgICA8RmlsdGVyIGZpbHRlcj17ZmlsdGVyfSBzZXRGaWx0ZXI9e3NldEZpbHRlcn0gLz5cbiAgICAgIDxTb3J0aW5nIG9yZGVyPXtvcmRlcn0gc2V0T3JkZXI9e3NldE9yZGVyfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgPFRhYmxlXG4gICAgICBkYXRhPXt0YWJsZURhdGF9XG4gICAgICB2aWV3QWxsPXt2aWV3QWxsfVxuICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgdG9nZ2xlVmlld0FsbD17dG9nZ2xlVmlld0FsbH1cbiAgICAgIC8+XG4gICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVybyIsIlRhYmxlIiwidGFibGVEYXRhIiwiU29ydGluZyIsIkZpbHRlciIsIkhvbWUiLCJ2aWV3QWxsIiwic2V0Vmlld0FsbCIsImZpbHRlciIsInNldEZpbHRlciIsIm9yZGVyIiwic2V0T3JkZXIiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXIiLCJ0b2dnbGVWaWV3QWxsIiwiZGl2IiwidGl0bGUiLCJoMiIsImNsYXNzTmFtZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});