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

/***/ "./lib/hooks/useToggle.js":
/*!********************************!*\
  !*** ./lib/hooks/useToggle.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useToggle = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const close = ()=>setOpen(false);\n        document.body.addEventListener(\"click\", ()=>{\n            console.log(\"click\", setOpen);\n            close();\n        });\n        return document.body.removeEventListener(\"click\", close);\n    }, []);\n    const stopPropagation = (e)=>e.stopPropagation();\n    const toggle = ()=>setOpen((open)=>!open);\n    const containerProps = {\n        onClick: stopPropagation\n    };\n    return {\n        open,\n        setOpen,\n        toggle,\n        containerProps\n    };\n};\n_s(useToggle, \"e27cRtNMdAs0U0o1oHlS6A8OEBo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useToggle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MvdXNlVG9nZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMEM7QUFFMUMsTUFBTUUsWUFBWSxJQUFNOztJQUNwQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUV0Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1JLFFBQVEsSUFBTUQsUUFBUSxLQUFLO1FBQ2pDRSxTQUFTQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsSUFBTTtZQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLFNBQVNOO1lBQ3JCQztRQUNKO1FBQ0EsT0FBT0MsU0FBU0MsSUFBSSxDQUFDSSxtQkFBbUIsQ0FBQyxTQUFTTjtJQUN0RCxHQUFHLEVBQUU7SUFFTCxNQUFNTyxrQkFBa0JDLENBQUFBLElBQUtBLEVBQUVELGVBQWU7SUFDOUMsTUFBTUUsU0FBUyxJQUFNVixRQUFRRCxDQUFBQSxPQUFRLENBQUNBO0lBQ3RDLE1BQU1ZLGlCQUFpQjtRQUFFQyxTQUFTSjtJQUFnQjtJQUVsRCxPQUFPO1FBQUVUO1FBQU1DO1FBQVNVO1FBQVFDO0lBQWU7QUFDbkQ7R0FqQk1iO0FBbUJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9ob29rcy91c2VUb2dnbGUuanM/MTBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgdXNlVG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snLCBzZXRPcGVuKVxuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRPcGVuKG9wZW4gPT4gIW9wZW4pO1xuICAgIGNvbnN0IGNvbnRhaW5lclByb3BzID0geyBvbkNsaWNrOiBzdG9wUHJvcGFnYXRpb24gfTtcbiAgICBcbiAgICByZXR1cm4geyBvcGVuLCBzZXRPcGVuLCB0b2dnbGUsIGNvbnRhaW5lclByb3BzIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRvZ2dsZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVRvZ2dsZSIsIm9wZW4iLCJzZXRPcGVuIiwiY2xvc2UiLCJkb2N1bWVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJlIiwidG9nZ2xlIiwiY29udGFpbmVyUHJvcHMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/hooks/useToggle.js\n"));

/***/ })

});