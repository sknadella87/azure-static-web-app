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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst useToggle = (target)=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const close = ()=>setOpen(false);\n        document.body.addEventListener(\"click\", ()=>close());\n        document.body.addEventListener(\"closeMenu\", (event)=>{\n            console.log({\n                event,\n                t: event.ignore\n            });\n        });\n    // return document.body.removeEventListener('click', close);\n    }, []);\n    const stopPropagation = (e)=>{\n        e.stopPropagation();\n        console.log({\n            target\n        });\n        const event = new CustomEvent(\"closeMenu\", {\n            ignore: target,\n            detail: {\n                text: target\n            }\n        });\n        document.body.dispatchEvent(event);\n    };\n    const toggle = ()=>setOpen((open)=>!open);\n    const containerProps = {\n        onClick: stopPropagation\n    };\n    return {\n        open,\n        setOpen,\n        toggle,\n        containerProps\n    };\n};\n_s(useToggle, \"e27cRtNMdAs0U0o1oHlS6A8OEBo=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useToggle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaG9va3MvdXNlVG9nZ2xlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMEM7QUFFMUMsTUFBTUUsWUFBWSxDQUFDQyxTQUFXOztJQUMxQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUV0Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1LLFFBQVEsSUFBTUQsUUFBUSxLQUFLO1FBQ2pDRSxTQUFTQyxJQUFJLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsSUFBTUg7UUFDOUNDLFNBQVNDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsYUFBYUMsQ0FBQUEsUUFBUztZQUNqREMsUUFBUUMsR0FBRyxDQUFDO2dCQUFFRjtnQkFBT0csR0FBR0gsTUFBTUksTUFBTTtZQUFDO1FBQ3pDO0lBQ0EsNERBQTREO0lBQ2hFLEdBQUcsRUFBRTtJQUVMLE1BQU1DLGtCQUFrQkMsQ0FBQUEsSUFBSztRQUN6QkEsRUFBRUQsZUFBZTtRQUNqQkosUUFBUUMsR0FBRyxDQUFDO1lBQUVUO1FBQU87UUFDckIsTUFBTU8sUUFBUSxJQUFJTyxZQUFZLGFBQWE7WUFDdkNILFFBQVFYO1lBQ1JlLFFBQVE7Z0JBQUVDLE1BQU1oQjtZQUFPO1FBQzNCO1FBQ0FJLFNBQVNDLElBQUksQ0FBQ1ksYUFBYSxDQUFDVjtJQUNoQztJQUVBLE1BQU1XLFNBQVMsSUFBTWhCLFFBQVFELENBQUFBLE9BQVEsQ0FBQ0E7SUFDdEMsTUFBTWtCLGlCQUFpQjtRQUFFQyxTQUFTUjtJQUFnQjtJQUVsRCxPQUFPO1FBQUVYO1FBQU1DO1FBQVNnQjtRQUFRQztJQUFlO0FBQ25EO0dBMUJNcEI7QUE0Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hvb2tzL3VzZVRvZ2dsZS5qcz8xMGQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB1c2VUb2dnbGUgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2xvc2UgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlKCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlTWVudScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgZXZlbnQsIHQ6IGV2ZW50Lmlnbm9yZSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2UpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IGUgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh7IHRhcmdldCB9KVxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2xvc2VNZW51Jywge1xuICAgICAgICAgICAgaWdub3JlOiB0YXJnZXQsXG4gICAgICAgICAgICBkZXRhaWw6IHsgdGV4dDogdGFyZ2V0IH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldE9wZW4ob3BlbiA9PiAhb3Blbik7XG4gICAgY29uc3QgY29udGFpbmVyUHJvcHMgPSB7IG9uQ2xpY2s6IHN0b3BQcm9wYWdhdGlvbiB9O1xuICAgIFxuICAgIHJldHVybiB7IG9wZW4sIHNldE9wZW4sIHRvZ2dsZSwgY29udGFpbmVyUHJvcHMgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVG9nZ2xlIiwidGFyZ2V0Iiwib3BlbiIsInNldE9wZW4iLCJjbG9zZSIsImRvY3VtZW50IiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0IiwiaWdub3JlIiwic3RvcFByb3BhZ2F0aW9uIiwiZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwidGV4dCIsImRpc3BhdGNoRXZlbnQiLCJ0b2dnbGUiLCJjb250YWluZXJQcm9wcyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/hooks/useToggle.js\n"));

/***/ })

});