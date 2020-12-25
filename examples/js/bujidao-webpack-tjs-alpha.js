/*! bujidao-webpack-tjs version：1.0.0 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bujidao"] = factory();
	else
		root["bujidao"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.otherFile = exports.jsFile = exports.tsFile = void 0;
var tsFile = __webpack_require__(/*! ./modules/tsfile */ "./src/modules/tsfile.ts");
exports.tsFile = tsFile;
var jsFile = __webpack_require__(/*! ./modules/jsFile */ "./src/modules/jsFile.js");
exports.jsFile = jsFile;
var otherFile_1 = __webpack_require__(/*! ./modules/otherFile */ "./src/modules/otherFile.ts");
exports.otherFile = otherFile_1.default;


/***/ }),

/***/ "./src/modules/otherFile.ts":
/*!**********************************!*\
  !*** ./src/modules/otherFile.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function otherFunc() {
    console.log('otherFunc say: hello world!');
}
exports.default = otherFunc;


/***/ }),

/***/ "./src/modules/tsfile.ts":
/*!*******************************!*\
  !*** ./src/modules/tsfile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tsConst = exports.tsFunc = void 0;
function tsFunc(msg) {
    console.log("Ts say: this is a function, i just want to tell you: " + msg);
}
exports.tsFunc = tsFunc;
var tsConst = 'Hello TS;';
exports.tsConst = tsConst;


/***/ }),

/***/ "./src/modules/jsFile.js":
/*!*******************************!*\
  !*** ./src/modules/jsFile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jsFunc": () => /* binding */ jsFunc,
/* harmony export */   "jsConst": () => /* binding */ jsConst
/* harmony export */ });
function jsFunc (msg) {
  console.log(`Js say: this is a function, i just want to tell you: ${msg}`)
}

const jsConst = 'Hello Js'




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWppZGFvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9idWppZGFvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2J1amlkYW8vLi9zcmMvbW9kdWxlcy9vdGhlckZpbGUudHMiLCJ3ZWJwYWNrOi8vYnVqaWRhby8uL3NyYy9tb2R1bGVzL3RzZmlsZS50cyIsIndlYnBhY2s6Ly9idWppZGFvLy4vc3JjL21vZHVsZXMvanNGaWxlLmpzIiwid2VicGFjazovL2J1amlkYW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVqaWRhby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnVqaWRhby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1amlkYW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWppZGFvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7QUNWQSxJQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLGlEQUFrQixDQUFDLENBQUM7QUFLekMsd0JBQU07QUFKUixJQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLGlEQUFrQixDQUFDLENBQUM7QUFLekMsd0JBQU07QUFKUiwrRkFBMkM7QUFLekMsb0JBTEssbUJBQVMsQ0FLTDs7Ozs7Ozs7Ozs7OztBQ1BYLFNBQVMsU0FBUztJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0FBQzVDLENBQUM7QUFFRCxrQkFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQ0p4QixTQUFTLE1BQU0sQ0FBRSxHQUFXO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQXdELEdBQUssQ0FBQztBQUM1RSxDQUFDO0FBS0Msd0JBQU07QUFIUixJQUFNLE9BQU8sR0FBRyxXQUFXO0FBSXpCLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7O0FDUlQ7QUFDQSxzRUFBc0UsSUFBSTtBQUMxRTs7QUFFQTs7QUFLQzs7Ozs7OztVQ1REO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidWppZGFvLXdlYnBhY2stdGpzLWFscGhhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYnVqaWRhb1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJidWppZGFvXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiY29uc3QgdHNGaWxlID0gcmVxdWlyZSgnLi9tb2R1bGVzL3RzZmlsZScpO1xyXG5jb25zdCBqc0ZpbGUgPSByZXF1aXJlKCcuL21vZHVsZXMvanNGaWxlJyk7XHJcbmltcG9ydCBvdGhlckZpbGUgZnJvbSAnLi9tb2R1bGVzL290aGVyRmlsZSdcclxuXHJcbmV4cG9ydCB7XHJcbiAgdHNGaWxlLFxyXG4gIGpzRmlsZSxcclxuICBvdGhlckZpbGVcclxufVxyXG4iLCJmdW5jdGlvbiBvdGhlckZ1bmMoKSB7XHJcbiAgY29uc29sZS5sb2coJ290aGVyRnVuYyBzYXk6IGhlbGxvIHdvcmxkIScpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG90aGVyRnVuYyIsImZ1bmN0aW9uIHRzRnVuYyAobXNnOiBzdHJpbmcpIHtcclxuICBjb25zb2xlLmxvZyhgVHMgc2F5OiB0aGlzIGlzIGEgZnVuY3Rpb24sIGkganVzdCB3YW50IHRvIHRlbGwgeW91OiAke21zZ31gKVxyXG59XHJcblxyXG5jb25zdCB0c0NvbnN0ID0gJ0hlbGxvIFRTOydcclxuXHJcbmV4cG9ydCB7XHJcbiAgdHNGdW5jLFxyXG4gIHRzQ29uc3RcclxufVxyXG4iLCJmdW5jdGlvbiBqc0Z1bmMgKG1zZykge1xyXG4gIGNvbnNvbGUubG9nKGBKcyBzYXk6IHRoaXMgaXMgYSBmdW5jdGlvbiwgaSBqdXN0IHdhbnQgdG8gdGVsbCB5b3U6ICR7bXNnfWApXHJcbn1cclxuXHJcbmNvbnN0IGpzQ29uc3QgPSAnSGVsbG8gSnMnXHJcblxyXG5leHBvcnQge1xyXG4gIGpzRnVuYyxcclxuICBqc0NvbnN0XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9