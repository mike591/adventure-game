webpackHotUpdate_N_E("pages/_app",{

/***/ "./hooks/useAuth.js":
/*!**************************!*\
  !*** ./hooks/useAuth.js ***!
  \**************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useAuth\", function() { return useAuth; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_michaelmach_Projects_adventure_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/michaelmach/Projects/adventure-game/hooks/useAuth.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\n\n\n\nvar AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(); // const protectedRoutes = [];\n\nvar useAuthProvider = function useAuthProvider() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),\n      _React$useState2 = Object(_Users_michaelmach_Projects_adventure_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      user = _React$useState2[0],\n      setUser = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState4 = Object(_Users_michaelmach_Projects_adventure_game_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      isLoadingAuth = _React$useState4[0],\n      setIsLoadingAuth = _React$useState4[1];\n\n  var refContainer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();\n\n  var handleSetLoading = function handleSetLoading(isLoading) {\n    if (!isLoading) {\n      window.clearTimeout(refContainer.current);\n      refContainer.current = window.setTimeout(function () {\n        setIsLoadingAuth(isLoading);\n      }, 1000);\n    } else {\n      setIsLoadingAuth(isLoading);\n    }\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    handleSetLoading(true);\n    var unsubscribe = firebase_app__WEBPACK_IMPORTED_MODULE_3__[\"default\"].auth().onAuthStateChanged(function (user) {\n      if (user) {\n        setUser(user);\n      } else {\n        setUser(false);\n      }\n\n      handleSetLoading(false);\n    });\n    return function () {\n      return unsubscribe();\n    };\n  }, []);\n  return {\n    user: user,\n    isLoadingAuth: isLoadingAuth\n  };\n};\n\n_s(useAuthProvider, \"S6Boj96IMTwGLNrwkuH5cmMtVUM=\");\n\nvar AuthProvider = function AuthProvider(_ref) {\n  _s2();\n\n  var children = _ref.children;\n  var authProvider = useAuthProvider();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: authProvider,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(AuthProvider, \"O+XkjrM8G7+PKzmdo2L05Lrb1Yg=\", false, function () {\n  return [useAuthProvider];\n});\n\n_c = AuthProvider;\nvar useAuth = function useAuth() {\n  _s3();\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(AuthContext);\n};\n\n_s3(useAuth, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlQXV0aC5qcz9kYmUwIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQXV0aFByb3ZpZGVyIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZ0F1dGgiLCJzZXRJc0xvYWRpbmdBdXRoIiwicmVmQ29udGFpbmVyIiwidXNlUmVmIiwiaGFuZGxlU2V0TG9hZGluZyIsImlzTG9hZGluZyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0IiwidW5zdWJzY3JpYmUiLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixFQUFwQixDLENBRUE7O0FBRUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsd0JBQ0pGLDRDQUFLLENBQUNHLFFBQU4sRUFESTtBQUFBO0FBQUEsTUFDckJDLElBRHFCO0FBQUEsTUFDZkMsT0FEZTs7QUFBQSx5QkFFY0wsNENBQUssQ0FBQ0csUUFBTixDQUFlLEtBQWYsQ0FGZDtBQUFBO0FBQUEsTUFFckJHLGFBRnFCO0FBQUEsTUFFTkMsZ0JBRk07O0FBRzVCLE1BQU1DLFlBQVksR0FBR1IsNENBQUssQ0FBQ1MsTUFBTixFQUFyQjs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLFNBQUQsRUFBZTtBQUN0QyxRQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZEMsWUFBTSxDQUFDQyxZQUFQLENBQW9CTCxZQUFZLENBQUNNLE9BQWpDO0FBQ0FOLGtCQUFZLENBQUNNLE9BQWIsR0FBdUJGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixZQUFNO0FBQzdDUix3QkFBZ0IsQ0FBQ0ksU0FBRCxDQUFoQjtBQUNELE9BRnNCLEVBRXBCLElBRm9CLENBQXZCO0FBR0QsS0FMRCxNQUtPO0FBQ0xKLHNCQUFnQixDQUFDSSxTQUFELENBQWhCO0FBQ0Q7QUFDRixHQVREOztBQVdBWCw4Q0FBSyxDQUFDZ0IsU0FBTixDQUFnQixZQUFNO0FBQ3BCTixvQkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBQ0EsUUFBTU8sV0FBVyxHQUFHQyxvREFBUSxDQUFDQyxJQUFULEdBQWdCQyxrQkFBaEIsQ0FBbUMsVUFBQ2hCLElBQUQsRUFBVTtBQUMvRCxVQUFJQSxJQUFKLEVBQVU7QUFDUkMsZUFBTyxDQUFDRCxJQUFELENBQVA7QUFDRCxPQUZELE1BRU87QUFDTEMsZUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEOztBQUNESyxzQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0QsS0FQbUIsQ0FBcEI7QUFRQSxXQUFPO0FBQUEsYUFBTU8sV0FBVyxFQUFqQjtBQUFBLEtBQVA7QUFDRCxHQVhELEVBV0csRUFYSDtBQWFBLFNBQU87QUFBRWIsUUFBSSxFQUFKQSxJQUFGO0FBQVFFLGlCQUFhLEVBQWJBO0FBQVIsR0FBUDtBQUNELENBOUJEOztHQUFNSixlOztBQWdDQyxJQUFNbUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUMsTUFBTUMsWUFBWSxHQUFHckIsZUFBZSxFQUFwQztBQUNBLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRXFCLFlBQTdCO0FBQUEsY0FBNENEO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUdELENBTE07O0lBQU1ELFk7VUFDVW5CLGU7OztLQURWbUIsWTtBQU9OLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDM0IsU0FBT3hCLDRDQUFLLENBQUN5QixVQUFOLENBQWlCMUIsV0FBakIsQ0FBUDtBQUNELENBRk07O0lBQU15QixPIiwiZmlsZSI6Ii4vaG9va3MvdXNlQXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG4vLyBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBbXTtcblxuY29uc3QgdXNlQXV0aFByb3ZpZGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBjb25zdCBbaXNMb2FkaW5nQXV0aCwgc2V0SXNMb2FkaW5nQXV0aF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGNvbnN0IGhhbmRsZVNldExvYWRpbmcgPSAoaXNMb2FkaW5nKSA9PiB7XG4gICAgaWYgKCFpc0xvYWRpbmcpIHtcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQocmVmQ29udGFpbmVyLmN1cnJlbnQpO1xuICAgICAgcmVmQ29udGFpbmVyLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZ0F1dGgoaXNMb2FkaW5nKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0xvYWRpbmdBdXRoKGlzTG9hZGluZyk7XG4gICAgfVxuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaGFuZGxlU2V0TG9hZGluZyh0cnVlKTtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZVNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHsgdXNlciwgaXNMb2FkaW5nQXV0aCB9O1xufTtcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgYXV0aFByb3ZpZGVyID0gdXNlQXV0aFByb3ZpZGVyKCk7XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXthdXRoUHJvdmlkZXJ9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

/***/ })

})