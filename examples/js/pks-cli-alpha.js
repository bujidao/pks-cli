/*! pks-cli version：1.0.0 */
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
function getJsFun() {
}
exports.default = otherFunc;


/***/ }),

/***/ "./src/modules/tsfile.ts":
/*!*******************************!*\
  !*** ./src/modules/tsfile.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getJs = exports.tsConst = exports.tsFunc = void 0;
var jsFile_1 = __webpack_require__(/*! ./jsFile */ "./src/modules/jsFile.js");
function tsFunc(msg) {
    console.log("Ts say: this is a function, i just want to tell you: " + msg);
}
exports.tsFunc = tsFunc;
function getJs() {
    console.log("Ts say: this is a function, i just want to tell you: " + jsFile_1.jsConst);
}
exports.getJs = getJs;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWppZGFvL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9idWppZGFvLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2J1amlkYW8vLi9zcmMvbW9kdWxlcy9vdGhlckZpbGUudHMiLCJ3ZWJwYWNrOi8vYnVqaWRhby8uL3NyYy9tb2R1bGVzL3RzZmlsZS50cyIsIndlYnBhY2s6Ly9idWppZGFvLy4vc3JjL21vZHVsZXMvanNGaWxlLmpzIiwid2VicGFjazovL2J1amlkYW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVqaWRhby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnVqaWRhby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2J1amlkYW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9idWppZGFvL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7QUNWQSxJQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLGlEQUFrQixDQUFDLENBQUM7QUFLekMsd0JBQU07QUFKUixJQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLGlEQUFrQixDQUFDLENBQUM7QUFLekMsd0JBQU07QUFKUiwrRkFBMkM7QUFLekMsb0JBTEssbUJBQVMsQ0FLTDs7Ozs7Ozs7Ozs7OztBQ1BYLFNBQVMsU0FBUztJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0FBQzVDLENBQUM7QUFFRCxTQUFTLFFBQVE7QUFFakIsQ0FBQztBQUVELGtCQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDUnhCLDhFQUFnQztBQUVoQyxTQUFTLE1BQU0sQ0FBRSxHQUFXO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMERBQXdELEdBQUssQ0FBQztBQUM1RSxDQUFDO0FBU0Msd0JBQU07QUFQUixTQUFTLEtBQUs7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLDBEQUF3RCxnQkFBUyxDQUFDO0FBQ2hGLENBQUM7QUFPQyxzQkFBSztBQUxQLElBQU0sT0FBTyxHQUFHLFdBQVc7QUFJekIsMEJBQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNkVDtBQUNBLHNFQUFzRSxJQUFJO0FBQzFFOztBQUVBOztBQUtDOzs7Ozs7O1VDVEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InBrcy1jbGktYWxwaGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJidWppZGFvXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJ1amlkYW9cIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJjb25zdCB0c0ZpbGUgPSByZXF1aXJlKCcuL21vZHVsZXMvdHNmaWxlJyk7XHJcbmNvbnN0IGpzRmlsZSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9qc0ZpbGUnKTtcclxuaW1wb3J0IG90aGVyRmlsZSBmcm9tICcuL21vZHVsZXMvb3RoZXJGaWxlJ1xyXG5cclxuZXhwb3J0IHtcclxuICB0c0ZpbGUsXHJcbiAganNGaWxlLFxyXG4gIG90aGVyRmlsZVxyXG59XHJcbiIsImZ1bmN0aW9uIG90aGVyRnVuYygpIHtcclxuICBjb25zb2xlLmxvZygnb3RoZXJGdW5jIHNheTogaGVsbG8gd29ybGQhJylcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SnNGdW4oKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvdGhlckZ1bmMiLCJpbXBvcnQge2pzQ29uc3R9IGZyb20gJy4vanNGaWxlJ1xyXG5cclxuZnVuY3Rpb24gdHNGdW5jIChtc2c6IHN0cmluZykge1xyXG4gIGNvbnNvbGUubG9nKGBUcyBzYXk6IHRoaXMgaXMgYSBmdW5jdGlvbiwgaSBqdXN0IHdhbnQgdG8gdGVsbCB5b3U6ICR7bXNnfWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEpzKCkge1xyXG4gIGNvbnNvbGUubG9nKGBUcyBzYXk6IHRoaXMgaXMgYSBmdW5jdGlvbiwgaSBqdXN0IHdhbnQgdG8gdGVsbCB5b3U6ICR7anNDb25zdH1gKVxyXG59XHJcblxyXG5jb25zdCB0c0NvbnN0ID0gJ0hlbGxvIFRTOydcclxuXHJcbmV4cG9ydCB7XHJcbiAgdHNGdW5jLFxyXG4gIHRzQ29uc3QsXHJcbiAgZ2V0SnNcclxufVxyXG4iLCJmdW5jdGlvbiBqc0Z1bmMgKG1zZykge1xyXG4gIGNvbnNvbGUubG9nKGBKcyBzYXk6IHRoaXMgaXMgYSBmdW5jdGlvbiwgaSBqdXN0IHdhbnQgdG8gdGVsbCB5b3U6ICR7bXNnfWApXHJcbn1cclxuXHJcbmNvbnN0IGpzQ29uc3QgPSAnSGVsbG8gSnMnXHJcblxyXG5leHBvcnQge1xyXG4gIGpzRnVuYyxcclxuICBqc0NvbnN0XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9