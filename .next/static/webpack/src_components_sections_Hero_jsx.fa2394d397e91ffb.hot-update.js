"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_sections_Hero_jsx",{

/***/ "./src/components/sections/Hero.jsx":
/*!******************************************!*\
  !*** ./src/components/sections/Hero.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/sections/hero.json */ \"./src/data/sections/hero.json\");\n/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! splitting/dist/splitting.css */ \"./node_modules/splitting/dist/splitting.css\");\n/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! splitting/dist/splitting-cells.css */ \"./node_modules/splitting/dist/splitting-cells.css\");\n/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! splitting */ \"./node_modules/splitting/dist/splitting.js\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scroll-out */ \"./node_modules/scroll-out/lib/index.js\");\n/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ \"./src/components/sections/Modal.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        splitting__WEBPACK_IMPORTED_MODULE_5___default()({\n            by: \"lines\"\n        });\n        scroll_out__WEBPACK_IMPORTED_MODULE_6___default()({\n            targets: \"[data-onovo-scroll]\",\n            once: true\n        });\n        const allWrap = document.querySelectorAll(\".word\");\n        allWrap.forEach((item)=>{\n            if (!item.parentNode.classList.contains(\"span\")) {\n                let wrapper = document.createElement(\"span\");\n                wrapper.classList.add(\"span\");\n                item.parentNode.insertBefore(wrapper, item);\n                wrapper.appendChild(item);\n            }\n        });\n        const allOverlays = document.querySelectorAll(\"[data-onovo-overlay]\");\n        allOverlays.forEach((item)=>{\n            let overlay = document.createElement(\"div\");\n            overlay.classList.add(\"onovo-overlay\");\n            item.appendChild(overlay);\n        });\n    }, []);\n    const [mute, setMute] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const clickedMuteHeroVideo = (e)=>{\n        e.preventDefault();\n        setMute(!mute);\n    };\n    const [modal, setModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const Toggle = ()=>setModal(!modal);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"onovo-section onovo-hero\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"autotypecf\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-center \",\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            autoPlay: true,\n                            muted: !mute,\n                            loop: true,\n                            playsInline: true,\n                            id: \"heroVideo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.video,\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ovrl\",\n                            style: {\n                                \"opacity\": \"0.25\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"title onovo-text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"data-splitting\": true,\n                                \"data-onovo-scroll\": true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        dangerouslySetInnerHTML: {\n                                            __html: _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.title.text\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"onovo-sep word\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"sep-img\",\n                                            style: {\n                                                \"backgroundImage\": \"url(\" + _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.title.icon + \")\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"subtitle onovo-text-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    \"data-splitting\": true,\n                                    \"data-onovo-scroll\": true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        dangerouslySetInnerHTML: {\n                                            __html: _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.subtitle\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            show: modal,\n                            title: \"My Modal\",\n                            close: Toggle,\n                            children: \"This is Modal content\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                            lineNumber: 84,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Clients Stark\\\\Content Foundry\\\\githubcf\\\\shubhamweb\\\\src\\\\components\\\\sections\\\\Hero.jsx\",\n            lineNumber: 47,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(HeroSection, \"mEinq+pBVKTcT3nBpXouTo/UBk4=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyby5qc3g/NTdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBEYXRhIGZyb20gXCJAZGF0YS9zZWN0aW9ucy9oZXJvLmpzb25cIjtcblxuaW1wb3J0ICdzcGxpdHRpbmcvZGlzdC9zcGxpdHRpbmcuY3NzJ1xuaW1wb3J0ICdzcGxpdHRpbmcvZGlzdC9zcGxpdHRpbmctY2VsbHMuY3NzJ1xuaW1wb3J0IFNwbGl0dGluZyBmcm9tICdzcGxpdHRpbmcnXG5pbXBvcnQgU2Nyb2xsT3V0IGZyb20gJ3Njcm9sbC1vdXQnXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcblxuY29uc3QgSGVyb1NlY3Rpb24gPSAoKSA9PiB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0U3BsaXR0aW5nKHsgYnk6ICdsaW5lcycgfSk7XG5cdFx0U2Nyb2xsT3V0KHt0YXJnZXRzOiAnW2RhdGEtb25vdm8tc2Nyb2xsXScsIG9uY2U6IHRydWV9KTtcblx0XG5cdFx0Y29uc3QgYWxsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud29yZFwiKTtcblx0XHRhbGxXcmFwLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHQgIGlmICggIWl0ZW0ucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NwYW4nKSApIHtcblx0XHRcdGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0d3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzcGFuJyk7XG5cdFx0XHRpdGVtLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGl0ZW0pO1xuXHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChpdGVtKTtcblx0XHQgIH1cblx0XHR9KTtcblx0XG5cdFx0Y29uc3QgYWxsT3ZlcmxheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtb25vdm8tb3ZlcmxheV1cIik7XG5cdFx0YWxsT3ZlcmxheXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdCAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdCAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvbm92by1vdmVybGF5Jyk7XG5cdFx0ICBpdGVtLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHRcdH0pO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgW211dGUsIHNldE11dGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGNsaWNrZWRNdXRlSGVyb1ZpZGVvID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXHRzZXRNdXRlKCFtdXRlKTtcblx0fTtcblx0XG5cdGNvbnN0IFttb2RhbCwgc2V0TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBUb2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBPbm92byBIZXJvICovfVxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwib25vdm8tc2VjdGlvbiBvbm92by1oZXJvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0b3R5cGVjZlwiPlxuXHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiPkhlbGxvPC9oMz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbXV0ZWQ9eyFtdXRlfSBsb29wIHBsYXlzSW5saW5lIGlkPVwiaGVyb1ZpZGVvXCI+XG5cdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17RGF0YS52aWRlb30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG5cdFx0XHRcdFx0PC92aWRlbz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92cmxcIiBzdHlsZT17e1wib3BhY2l0eVwiOiBcIjAuMjVcIn19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBvbm92by10ZXh0LXdoaXRlXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBkYXRhLXNwbGl0dGluZyBkYXRhLW9ub3ZvLXNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogRGF0YS50aXRsZS50ZXh0fX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9ub3ZvLXNlcCB3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwic2VwLWltZ1wiIHN0eWxlPXt7XCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJ1cmwoXCIrRGF0YS50aXRsZS5pY29uK1wiKVwifX0gLz5cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlIG9ub3ZvLXRleHQtd2hpdGVcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBkYXRhLXNwbGl0dGluZyBkYXRhLW9ub3ZvLXNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogRGF0YS5zdWJ0aXRsZX19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e211dGUgPyBcIm9ub3ZvLXBsYXktYnRuIGFjdGl2ZVwiIDogXCJvbm92by1wbGF5LWJ0blwifSBvbkNsaWNrPXsoZSkgPT4gY2xpY2tlZE11dGVIZXJvVmlkZW8oZSkgfT4gKi99XG5cdFx0XHRcdFx0ey8qIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiY2xpY2ttZSBvbm92by1wbGF5LWJ0blwiIG9uQ2xpY2s9eygpID0+IFRvZ2dsZSgpfT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBsYXktY2lyY2xlc1wiIC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwbGF5LWxpbmVzXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9hPiAqL31cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8TW9kYWwgc2hvdz17bW9kYWx9IHRpdGxlPVwiTXkgTW9kYWxcIiBjbG9zZT17VG9nZ2xlfSA+XG5cdFx0XHRcdFx0XHRcdFRoaXMgaXMgTW9kYWwgY29udGVudFxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEYXRhIiwiU3BsaXR0aW5nIiwiU2Nyb2xsT3V0IiwiTW9kYWwiLCJIZXJvU2VjdGlvbiIsImJ5IiwidGFyZ2V0cyIsIm9uY2UiLCJhbGxXcmFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiYWxsT3ZlcmxheXMiLCJvdmVybGF5IiwibXV0ZSIsInNldE11dGUiLCJjbGlja2VkTXV0ZUhlcm9WaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1vZGFsIiwic2V0TW9kYWwiLCJUb2dnbGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDMiLCJ2aWRlbyIsImF1dG9QbGF5IiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiLCJpZCIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJzdHlsZSIsImgyIiwic3BhbiIsImRhdGEtc3BsaXR0aW5nIiwiZGF0YS1vbm92by1zY3JvbGwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRpdGxlIiwidGV4dCIsImkiLCJpY29uIiwic3VidGl0bGUiLCJzaG93IiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Hero.jsx\n"));

/***/ })

});