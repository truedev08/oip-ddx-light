webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/views/dumb/loginForm/LoginForm.js":
/*!******************************************************!*\
  !*** ./components/views/dumb/loginForm/LoginForm.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _shared_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/Alert */ \"./components/shared/Alert.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-jss */ \"./node_modules/react-jss/dist/react-jss.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var _redux_actions_Interface_creators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../redux/actions/Interface/creators */ \"./redux/actions/Interface/creators.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/martinadams/Desktop/FLO-OIP projects/DDX/oip-ddx-light/frontend/components/views/dumb/loginForm/LoginForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n //import { useHistory } from \"react-router-dom\";\n\n\n\n\n\n\n\n\n\n\n //const history = useHistory();\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      position: 'absolute',\n      top: '10%',\n      left: '40%'\n    },\n    signInButton: {\n      marginTop: 10,\n      backgroundColor: '#e7e7e7',\n      padding: '8px 32px',\n      borderRadius: '4px'\n    },\n    inputField: {\n      marginTop: 6\n    },\n    rememberMe: {\n      marginTop: 6\n    },\n    backgroundSlate: {\n      padding: 20,\n      borderRadius: 8,\n      backgroundColor: '#e7e7e7'\n    }\n  };\n};\n\nvar LoginForm = function LoginForm(_ref) {\n  _s();\n\n  var classes = _ref.classes;\n\n  //let history = useHistory();\n  //const dispatch = useDispatch();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      displayName = _useState[0],\n      setDisplayName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      email = _useState2[0],\n      setEmail = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      password = _useState3[0],\n      setPassword = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var onLogin = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(\"http://localhost:5000/api/users/login\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  displayName: displayName,\n                  password: password\n                })\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n              console.log(data);\n\n              if (data.msg === \"Please enter correct credentials\") {\n                setError(data.msg);\n                window.localStorage.removeItem(\"token\");\n              } else if (data.activated === false) {\n                window.localStorage.removeItem(\"token\");\n                setVerified(true);\n              } else {\n                window.localStorage.setItem(\"token\", JSON.stringify(data.token));\n                dispatch({\n                  type: \"LOGIN\",\n                  payload: true\n                }); //socket.emit(\"login\");\n                //history.push(\"/\");\n              } //const { mnemonic } = data;\n\n              /*\n              // handle error response\n              const createWalletData = await fetch(\"users/createWallet\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\",\n                },\n                body: JSON.stringify({\n                  mnemonic: mnemonic,\n                  password,\n                }),\n              });\n              \n               const wifJson = await createWalletData.json();\n              console.log(\"wifJson\", wifJson);\n               localStorage.setItem(\"userAddress\", JSON.stringify(wifJson.wif));\n              */\n\n\n              console.log(\"success\");\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"onLogin error\" + _context.t0);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n\n    return function onLogin() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var onFormSubmit = function onFormSubmit(e) {\n    e.preventDefault();\n    onLogin();\n    next_router__WEBPACK_IMPORTED_MODULE_12__[\"Router\"].push('/');\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: classes.backgroundSlate,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"card-header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }, \"Sign In\")), __jsx(\"form\", {\n    onSubmit: onFormSubmit,\n    href: \"https://google.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: classes.inputField,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"Display Name\",\n    className: \"form-control\",\n    onChange: function onChange(e) {\n      setDisplayName(e.target.value.trim());\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.inputField,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    placeholder: \"Password\",\n    className: \"form-control\",\n    onChange: function onChange(e) {\n      setPassword(e.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: classes.rememberMe,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: \"html1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 13\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"html1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }, \"Remember me\")), __jsx(\"div\", {\n    className: \"login-alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  }, error.length > 0 ? __jsx(_shared_Alert__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    content: error,\n    setAlert: function setAlert() {\n      setError(\"\");\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 15\n    }\n  }) : null), __jsx(\"button\", {\n    className: classes.signInButton,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 156,\n      columnNumber: 11\n    }\n  }, \"Sign in\"))));\n};\n\n_s(LoginForm, \"wG6YzNmLb0G5PzsrsbTKcGEWAPs=\");\n\n_c = LoginForm;\nLoginForm.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(styles, {\n  injectTheme: true\n})(LoginForm));\n\nvar _c;\n\n$RefreshReg$(_c, \"LoginForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3ZpZXdzL2R1bWIvbG9naW5Gb3JtL0xvZ2luRm9ybS5qcz84YzZiIl0sIm5hbWVzIjpbInN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInNpZ25JbkJ1dHRvbiIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJpbnB1dEZpZWxkIiwicmVtZW1iZXJNZSIsImJhY2tncm91bmRTbGF0ZSIsIkxvZ2luRm9ybSIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImRpc3BsYXlOYW1lIiwic2V0RGlzcGxheU5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVycm9yIiwic2V0RXJyb3IiLCJvbkxvZ2luIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1zZyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJhY3RpdmF0ZWQiLCJzZXRWZXJpZmllZCIsInNldEl0ZW0iLCJ0b2tlbiIsImRpc3BhdGNoIiwidHlwZSIsInBheWxvYWQiLCJvbkZvcm1TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJSb3V0ZXIiLCJwdXNoIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhTdHlsZXMiLCJpbmplY3RUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFB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QWYsQ0FBVCxDQUFWLENBQTJDaEQsU0FBM0MsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvdmlld3MvZHVtYi9sb2dpbkZvcm0vTG9naW5Gb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vL2ltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL0FsZXJ0XCI7XG5pbXBvcnQgeyBzb3J0ZWRMYXN0SW5kZXggfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAncmVhY3QtanNzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgTWRDcm9wU3F1YXJlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5pbXBvcnQgeyBBVVRPUEFZIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvSW50ZXJmYWNlL2NyZWF0b3JzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy9jb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMTAlJyxcbiAgICBsZWZ0OiAnNDAlJ1xuICB9LFxuICBzaWduSW5CdXR0b246IHtcbiAgICBtYXJnaW5Ub3A6IDEwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlN2U3ZTcnLFxuICAgIHBhZGRpbmc6ICc4cHggMzJweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4J1xuICB9LFxuICBpbnB1dEZpZWxkOiB7XG4gICAgbWFyZ2luVG9wOiA2XG4gIH0sXG4gIHJlbWVtYmVyTWU6IHtcbiAgICBtYXJnaW5Ub3A6IDZcbiAgfSxcbiAgYmFja2dyb3VuZFNsYXRlOiB7XG4gICAgcGFkZGluZzogMjAsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlN2U3ZTcnXG4gIH1cbn0pXG5cbmNvbnN0IExvZ2luRm9ybSA9ICh7XG4gIGNsYXNzZXMsXG59KSA9PiB7XG4gIC8vbGV0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIC8vY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IFtkaXNwbGF5TmFtZSwgc2V0RGlzcGxheU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25Mb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcnMvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgICAgXG4gICAgICBpZiAoZGF0YS5tc2cgPT09IFwiUGxlYXNlIGVudGVyIGNvcnJlY3QgY3JlZGVudGlhbHNcIikge1xuICAgICAgICBzZXRFcnJvcihkYXRhLm1zZyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmFjdGl2YXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIHNldFZlcmlmaWVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS50b2tlbikpO1xuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HSU5cIiwgcGF5bG9hZDogdHJ1ZSB9KTtcbiAgICAgICAgLy9zb2NrZXQuZW1pdChcImxvZ2luXCIpO1xuICAgICAgICAvL2hpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICB9XG5cblxuICAgICAgLy9jb25zdCB7IG1uZW1vbmljIH0gPSBkYXRhO1xuXG4gICAgICAvKlxuICAgICAgLy8gaGFuZGxlIGVycm9yIHJlc3BvbnNlXG4gICAgICBjb25zdCBjcmVhdGVXYWxsZXREYXRhID0gYXdhaXQgZmV0Y2goXCJ1c2Vycy9jcmVhdGVXYWxsZXRcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBtbmVtb25pYzogbW5lbW9uaWMsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBcblxuICAgICAgY29uc3Qgd2lmSnNvbiA9IGF3YWl0IGNyZWF0ZVdhbGxldERhdGEuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJ3aWZKc29uXCIsIHdpZkpzb24pO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJBZGRyZXNzXCIsIEpTT04uc3RyaW5naWZ5KHdpZkpzb24ud2lmKSk7XG4gICAgICAqL1xuICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIilcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwib25Mb2dpbiBlcnJvclwiICsgZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25Mb2dpbigpO1xuICAgIFJvdXRlci5wdXNoKCcvJylcbiAgfTtcblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kU2xhdGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDM+U2lnbiBJbjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fSBocmVmPVwiaHR0cHM6Ly9nb29nbGUuY29tXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRGaWVsZH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEaXNwbGF5IE5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBzZXREaXNwbGF5TmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dEZpZWxkfT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1lbWJlck1lfT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImh0bWwxXCIgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaHRtbDFcIj5SZW1lbWJlciBtZTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1hbGVydFwiPlxuICAgICAgICAgICAge2Vycm9yLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIDxBbGVydFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Vycm9yfVxuICAgICAgICAgICAgICAgIHNldEFsZXJ0PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRFcnJvcihcIlwiKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWduSW5CdXR0b259XG4gICAgICAgICAgPlxuICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG5Mb2dpbkZvcm0ucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7IGluamVjdFRoZW1lOiB0cnVlIH0pIChMb2dpbkZvcm0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/views/dumb/loginForm/LoginForm.js\n");

/***/ })

})