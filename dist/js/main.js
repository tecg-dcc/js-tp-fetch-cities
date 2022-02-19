/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar endpoint = \"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json\";\nvar cities = [];\nvar searchForm = document.querySelector(\".search-form\");\nvar suggestions = document.querySelector(\".suggestions\");\n\nif (window.fetch) {\n  // exécuter ma requête fetch ici\n  fetch(endpoint).then(function (response) {\n    if (response.status === 200) {\n      response.json().then(function (responseJSON) {\n        cities.push.apply(cities, _toConsumableArray(responseJSON));\n        console.log(cities);\n      });\n    } else {\n      console.error(\"Oups ! \".concat(response.status));\n    }\n  })[\"catch\"](function (error) {\n    console.log(\"Aie !! \".concat(error));\n  });\n} else {// Faire quelque chose avec XMLHttpRequest?\n}\n\nfunction findMatches(wordToMatch) {\n  return cities.filter(function (place) {\n    var regex = new RegExp(wordToMatch, 'gi');\n    return place.city.match(regex) || place.state.match(regex);\n  });\n}\n\nfunction numberWithSpace(x) {\n  return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ' ');\n}\n\nfunction displayMatches(wordToMatch) {\n  suggestions.innerHTML = findMatches(wordToMatch).map(function (item) {\n    var regex = new RegExp(wordToMatch, 'gi');\n    return \"<li>\\n        <span class=\\\"name\\\">\".concat(item.city.replace(regex, \"<span class=\\\"hl\\\">\".concat(wordToMatch, \"</span>\")), \",\").concat(item.state.replace(regex, \"<span class=\\\"hl\\\">\".concat(wordToMatch, \"</span>\")), \"</span>\\n        <span class=\\\"population\\\">\").concat(numberWithSpace(item.population), \"</span></li>\");\n  }).join('');\n}\n\nsearchForm.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n});\nsearchForm.querySelector(\"#search\").addEventListener(\"keyup\", function (event) {\n  displayMatches(event.currentTarget.value);\n}); // const data = fetch(\"\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10cC1mZXRjaC1jaXRpZXMvLi9zcmMvanMvbWFpbi5qcz81Njg3Il0sIm5hbWVzIjpbImVuZHBvaW50IiwiY2l0aWVzIiwic2VhcmNoRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN1Z2dlc3Rpb25zIiwid2luZG93IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwicmVzcG9uc2VKU09OIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZpbmRNYXRjaGVzIiwid29yZFRvTWF0Y2giLCJmaWx0ZXIiLCJwbGFjZSIsInJlZ2V4IiwiUmVnRXhwIiwiY2l0eSIsIm1hdGNoIiwic3RhdGUiLCJudW1iZXJXaXRoU3BhY2UiLCJ4IiwidG9TdHJpbmciLCJyZXBsYWNlIiwiZGlzcGxheU1hdGNoZXMiLCJpbm5lckhUTUwiLCJtYXAiLCJpdGVtIiwicG9wdWxhdGlvbiIsImpvaW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHLDJIQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBRyxFQUFmO0FBQ0EsSUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFwQjs7QUFFQSxJQUFJRSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDZDtBQUNBQSxFQUFBQSxLQUFLLENBQUNQLFFBQUQsQ0FBTCxDQUNLUSxJQURMLENBQ1UsVUFBQUMsUUFBUSxFQUFJO0FBQ2QsUUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCRCxNQUFBQSxRQUFRLENBQUNFLElBQVQsR0FBZ0JILElBQWhCLENBQXFCLFVBQUFJLFlBQVksRUFBSTtBQUM3QlgsUUFBQUEsTUFBTSxDQUFDWSxJQUFQLE9BQUFaLE1BQU0scUJBQVNXLFlBQVQsRUFBTjtBQUNBRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsTUFBWjtBQUNILE9BSEw7QUFLSCxLQU5ELE1BTU87QUFDSGEsTUFBQUEsT0FBTyxDQUFDRSxLQUFSLGtCQUF3QlAsUUFBUSxDQUFDQyxNQUFqQztBQUNIO0FBQ0osR0FYTCxXQVdhLFVBQUFNLEtBQUssRUFBSTtBQUNsQkYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLGtCQUFzQkMsS0FBdEI7QUFDSCxHQWJEO0FBY0gsQ0FoQkQsTUFnQk8sQ0FDSDtBQUNIOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJDLFdBQXJCLEVBQWtDO0FBQzlCLFNBQU9qQixNQUFNLENBQUNrQixNQUFQLENBQWMsVUFBQUMsS0FBSyxFQUFJO0FBQzFCLFFBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVdKLFdBQVgsRUFBd0IsSUFBeEIsQ0FBZDtBQUNBLFdBQU9FLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLENBQWlCSCxLQUFqQixLQUEyQkQsS0FBSyxDQUFDSyxLQUFOLENBQVlELEtBQVosQ0FBa0JILEtBQWxCLENBQWxDO0FBQ0gsR0FITSxDQUFQO0FBSUg7O0FBRUQsU0FBU0ssZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEI7QUFDeEIsU0FBT0EsQ0FBQyxDQUFDQyxRQUFGLEdBQWFDLE9BQWIsQ0FBcUIsdUJBQXJCLEVBQThDLEdBQTlDLENBQVA7QUFDSDs7QUFFRCxTQUFTQyxjQUFULENBQXdCWixXQUF4QixFQUFxQztBQUNqQ2IsRUFBQUEsV0FBVyxDQUFDMEIsU0FBWixHQUF3QmQsV0FBVyxDQUFDQyxXQUFELENBQVgsQ0FBeUJjLEdBQXpCLENBQTZCLFVBQUFDLElBQUksRUFBSTtBQUN6RCxRQUFNWixLQUFLLEdBQUcsSUFBSUMsTUFBSixDQUFXSixXQUFYLEVBQXdCLElBQXhCLENBQWQ7QUFDQSx3REFDcUJlLElBQUksQ0FBQ1YsSUFBTCxDQUFVTSxPQUFWLENBQWtCUixLQUFsQiwrQkFBNkNILFdBQTdDLGFBRHJCLGNBQzJGZSxJQUFJLENBQUNSLEtBQUwsQ0FBV0ksT0FBWCxDQUFtQlIsS0FBbkIsK0JBQThDSCxXQUE5QyxhQUQzRix5REFFMkJRLGVBQWUsQ0FBQ08sSUFBSSxDQUFDQyxVQUFOLENBRjFDO0FBR0gsR0FMdUIsRUFLckJDLElBTHFCLENBS2hCLEVBTGdCLENBQXhCO0FBT0g7O0FBRURqQyxVQUFVLENBQUNrQyxnQkFBWCxDQUE0QixRQUE1QixFQUFzQyxVQUFDQyxLQUFELEVBQVc7QUFDN0NBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNILENBRkQ7QUFJQXBDLFVBQVUsQ0FBQ0UsYUFBWCxDQUF5QixTQUF6QixFQUFvQ2dDLGdCQUFwQyxDQUFxRCxPQUFyRCxFQUE4RCxVQUFDQyxLQUFELEVBQVc7QUFDckVQLEVBQUFBLGNBQWMsQ0FBQ08sS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxLQUFyQixDQUFkO0FBQ0gsQ0FGRCxFLENBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbmRwb2ludCA9IFwiaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9NaXNlcmxvdS9jNWNkODM2NGJmOWIyNDIwYmIyOS9yYXcvMmJmMjU4NzYzY2RkZGQ3MDRmOGZmZDNlYTlhM2U4MWQyNWUyYzZmNi9jaXRpZXMuanNvblwiXG5jb25zdCBjaXRpZXMgPSBbXTtcbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1mb3JtXCIpO1xuY29uc3Qgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Z2dlc3Rpb25zXCIpO1xuXG5pZiAod2luZG93LmZldGNoKSB7XG4gICAgLy8gZXjDqWN1dGVyIG1hIHJlcXXDqnRlIGZldGNoIGljaVxuICAgIGZldGNoKGVuZHBvaW50KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihyZXNwb25zZUpTT04gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2l0aWVzLnB1c2goLi4ucmVzcG9uc2VKU09OKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNpdGllcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYE91cHMgISAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWllICEhICR7ZXJyb3J9YCk7XG4gICAgfSk7XG59IGVsc2Uge1xuICAgIC8vIEZhaXJlIHF1ZWxxdWUgY2hvc2UgYXZlYyBYTUxIdHRwUmVxdWVzdD9cbn1cblxuZnVuY3Rpb24gZmluZE1hdGNoZXMod29yZFRvTWF0Y2gpIHtcbiAgICByZXR1cm4gY2l0aWVzLmZpbHRlcihwbGFjZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh3b3JkVG9NYXRjaCwgJ2dpJyk7XG4gICAgICAgIHJldHVybiBwbGFjZS5jaXR5Lm1hdGNoKHJlZ2V4KSB8fCBwbGFjZS5zdGF0ZS5tYXRjaChyZWdleCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG51bWJlcldpdGhTcGFjZSh4KSB7XG4gICAgcmV0dXJuIHgudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnICcpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWF0Y2hlcyh3b3JkVG9NYXRjaCkge1xuICAgIHN1Z2dlc3Rpb25zLmlubmVySFRNTCA9IGZpbmRNYXRjaGVzKHdvcmRUb01hdGNoKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh3b3JkVG9NYXRjaCwgJ2dpJyk7XG4gICAgICAgIHJldHVybiBgPGxpPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2l0ZW0uY2l0eS5yZXBsYWNlKHJlZ2V4LCBgPHNwYW4gY2xhc3M9XCJobFwiPiR7d29yZFRvTWF0Y2h9PC9zcGFuPmApfSwke2l0ZW0uc3RhdGUucmVwbGFjZShyZWdleCwgYDxzcGFuIGNsYXNzPVwiaGxcIj4ke3dvcmRUb01hdGNofTwvc3Bhbj5gKX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwicG9wdWxhdGlvblwiPiR7bnVtYmVyV2l0aFNwYWNlKGl0ZW0ucG9wdWxhdGlvbil9PC9zcGFuPjwvbGk+YDtcbiAgICB9KS5qb2luKCcnKTtcblxufVxuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbnNlYXJjaEZvcm0ucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIikuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChldmVudCkgPT4ge1xuICAgIGRpc3BsYXlNYXRjaGVzKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xufSlcblxuXG4vLyBjb25zdCBkYXRhID0gZmV0Y2goXCJcIik7XG5cblxuIl0sImZpbGUiOiIuL3NyYy9qcy9tYWluLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtdHAtZmV0Y2gtY2l0aWVzLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2E3NjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjs_tp_fetch_cities"] = self["webpackChunkjs_tp_fetch_cities"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;