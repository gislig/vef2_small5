(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactComponentNpm"] = factory();
	else
		root["ReactComponentNpm"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(17);
} else {
  module.exports = __webpack_require__(18);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(19)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(20)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(23);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(26);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(9);
  var ReactPropTypesSecret = __webpack_require__(10);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = __webpack_require__(24);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper component, a pretty button!
 */
var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { onClick: onClick, className: '' + _button2.default['btn-wrapper'] },
            _react2.default.createElement('div', { className: '' + _button2.default['btn'] }),
            _react2.default.createElement(
                'a',
                { className: '' + _button2.default['btn-href'] },
                children
            )
        )
    );
};

// Takes in onclick function and
// children (i.e. whatever should be displayed within button)
Button.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.node.isRequired
};

exports.default = Button;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _glowbox = __webpack_require__(41);

var _glowbox2 = _interopRequireDefault(_glowbox);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a glowing input-like box with an onClick function
 * Has an icon to the right which hints user as to what that functionality is  
 */
var GlowBox = function GlowBox(_ref) {
    var _onClick = _ref.onClick,
        icon = _ref.icon,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: '' + _glowbox2.default.wrapper },
        _react2.default.createElement(
            'div',
            { className: '' + _glowbox2.default.content, onClick: function onClick() {
                    return _onClick();
                } },
            _react2.default.createElement(_reactFontawesome2.default, { className: '' + _glowbox2.default.icon, 'aria-hidden': 'false', name: icon }),
            children
        )
    );
};

// Props glowbox needs to function
GlowBox.propTypes = {
    /* Onclick action once box is clicked */
    onClick: _propTypes2.default.func.isRequired,
    /* Icon hinting user which action is taken on click */
    icon: _propTypes2.default.string.isRequired
};

exports.default = GlowBox;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(16);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Modal).default;
  }
});

var _ProgressBar = __webpack_require__(27);

Object.defineProperty(exports, 'ProgressBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProgressBar).default;
  }
});

var _NameCard = __webpack_require__(30);

Object.defineProperty(exports, 'NameCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NameCard).default;
  }
});

var _Carousel = __webpack_require__(33);

Object.defineProperty(exports, 'Carousel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Carousel).default;
  }
});

var _Row = __webpack_require__(36);

Object.defineProperty(exports, 'Row', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Row).default;
  }
});

var _Col = __webpack_require__(39);

Object.defineProperty(exports, 'Col', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Col).default;
  }
});

var _TimePicker = __webpack_require__(40);

Object.defineProperty(exports, 'TimePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TimePicker).default;
  }
});

var _DatePicker = __webpack_require__(49);

Object.defineProperty(exports, 'DatePicker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DatePicker).default;
  }
});

var _Tabs = __webpack_require__(56);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tabs).default;
  }
});

var _Tab = __webpack_require__(59);

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Tab).default;
  }
});

var _CartoonNetwork = __webpack_require__(60);

Object.defineProperty(exports, 'CartoonNetworkSpinner', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CartoonNetwork).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = __webpack_require__(21);

var _modal2 = _interopRequireDefault(_modal);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders an overlaying 'alert box' or modal
 * User provides modal body and title as children
 * and an optional footer
 * Modal can be closed by top right exit button 
 */
var Modal = function Modal(_ref) {
    var isOpen = _ref.isOpen,
        onClose = _ref.onClose,
        children = _ref.children;


    if (!isOpen) return _react2.default.createElement('div', null);

    return _react2.default.createElement(
        'div',
        { className: '' + _modal2.default.wrapcontent },
        _react2.default.createElement(
            'div',
            { className: '' + _modal2.default.background },
            _react2.default.createElement(
                'div',
                { className: '' + _modal2.default.wrapper },
                _react2.default.createElement(
                    'div',
                    { className: '' + _modal2.default.module },
                    _react2.default.createElement(
                        'div',
                        { className: '' + _modal2.default['module-content'] },
                        _react2.default.createElement(
                            'div',
                            { className: '' + _modal2.default.btn },
                            _react2.default.createElement(
                                _Button2.default,
                                { onClick: onClose },
                                _react2.default.createElement(_reactFontawesome2.default, { 'aria-hidden': 'false', size: '2x', name: 'times' })
                            )
                        ),
                        children
                    )
                )
            )
        )
    );
};

// Subcomponents of modal
Modal.Title = function (_ref2) {
    var children = _ref2.children;
    return _react2.default.createElement(
        'h1',
        { className: '' + _modal2.default.title },
        children
    );
};
Modal.Body = function (_ref3) {
    var children = _ref3.children;
    return _react2.default.createElement(
        'div',
        { className: '' + _modal2.default.body },
        children
    );
};
Modal.Footer = function (_ref4) {
    var children = _ref4.children;
    return _react2.default.createElement(
        'div',
        { className: '' + _modal2.default.footer },
        children
    );
};

// Props modal needs to function
Modal.propTypes = {
    /* states whether modal is open - defaults to false*/
    isOpen: _propTypes2.default.bool,
    /* specifies action when modal is closed */
    onClose: _propTypes2.default.func.isRequired
};

// Modal default props if not provided
Modal.defaultProps = {
    isOpen: false
};

exports.default = Modal;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var m=__webpack_require__(8),n=__webpack_require__(11),p=__webpack_require__(6),q="function"===typeof Symbol&&Symbol["for"],r=q?Symbol["for"]("react.element"):60103,t=q?Symbol["for"]("react.call"):60104,u=q?Symbol["for"]("react.return"):60105,v=q?Symbol["for"]("react.portal"):60106,w=q?Symbol["for"]("react.fragment"):60107,x="function"===typeof Symbol&&Symbol.iterator;
function y(a){for(var b=arguments.length-1,e="Minified React error #"+a+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d"+a,c=0;c<b;c++)e+="\x26args[]\x3d"+encodeURIComponent(arguments[c+1]);b=Error(e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name="Invariant Violation";b.framesToPop=1;throw b;}
var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function A(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}A.prototype.isReactComponent={};A.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?y("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};A.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function B(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}function C(){}C.prototype=A.prototype;var D=B.prototype=new C;D.constructor=B;m(D,A.prototype);D.isPureReactComponent=!0;function E(a,b,e){this.props=a;this.context=b;this.refs=n;this.updater=e||z}var F=E.prototype=new C;F.constructor=E;m(F,A.prototype);F.unstable_isAsyncReactComponent=!0;F.render=function(){return this.props.children};var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,e){var c,d={},g=null,k=null;if(null!=b)for(c in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)H.call(b,c)&&!I.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var h=Array(f),l=0;l<f;l++)h[l]=arguments[l+2];d.children=h}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:r,type:a,key:g,ref:k,props:d,_owner:G.current}}function K(a){return"object"===typeof a&&null!==a&&a.$$typeof===r}
function escape(a){var b={"\x3d":"\x3d0",":":"\x3d2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var L=/\/+/g,M=[];function N(a,b,e,c){if(M.length){var d=M.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}function O(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>M.length&&M.push(a)}
function P(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case r:case t:case u:case v:g=!0}}if(g)return e(c,a,""===b?"."+Q(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+Q(d,k);g+=P(d,f,e,c)}else if(null===a||"undefined"===typeof a?f=null:(f=x&&a[x]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=
f.call(a),k=0;!(d=a.next()).done;)d=d.value,f=b+Q(d,k++),g+=P(d,f,e,c);else"object"===d&&(e=""+a,y("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function R(a,b){a.func.call(a.context,b,a.count++)}
function S(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?T(a,c,e,p.thatReturnsArgument):null!=a&&(K(a)&&(b=d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(L,"$\x26/")+"/")+e,a={$$typeof:r,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}),c.push(a))}function T(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(L,"$\x26/")+"/");b=N(b,g,c,d);null==a||P(a,"",S,b);O(b)}
var U={Children:{map:function(a,b,e){if(null==a)return a;var c=[];T(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=N(null,null,b,e);null==a||P(a,"",R,b);O(b)},count:function(a){return null==a?0:P(a,"",p.thatReturnsNull,null)},toArray:function(a){var b=[];T(a,b,null,p.thatReturnsArgument);return b},only:function(a){K(a)?void 0:y("143");return a}},Component:A,PureComponent:B,unstable_AsyncComponent:E,Fragment:w,createElement:J,cloneElement:function(a,b,e){var c=m({},a.props),
d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)H.call(b,h)&&!I.hasOwnProperty(h)&&(c[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)c.children=e;else if(1<h){f=Array(h);for(var l=0;l<h;l++)f[l]=arguments[l+2];c.children=f}return{$$typeof:r,type:a.type,key:d,ref:g,props:c,_owner:k}},createFactory:function(a){var b=J.bind(null,a);b.type=a;return b},
isValidElement:K,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:G,assign:m}},V=Object.freeze({default:U}),W=V&&U||V;module.exports=W["default"]?W["default"]:W;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.2.0
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var _assign = __webpack_require__(8);
var emptyObject = __webpack_require__(11);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(9);
var emptyFunction = __webpack_require__(6);
var checkPropTypes = __webpack_require__(12);

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.2.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable === 'undefined') {
    return null;
  }
  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
Component.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
        return undefined;
      }
    });
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function PureComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = Component.prototype;
var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent;
// Avoid an extra prototype jump for these methods.
_assign(pureComponentPrototype, Component.prototype);
pureComponentPrototype.isPureReactComponent = true;

function AsyncComponent(props, context, updater) {
  // Duplicated from Component.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
asyncComponentPrototype.constructor = AsyncComponent;
// Avoid an extra prototype jump for these methods.
_assign(asyncComponentPrototype, Component.prototype);
asyncComponentPrototype.unstable_isAsyncReactComponent = true;
asyncComponentPrototype.render = function () {
  return this.props.children;
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    });
    // self and source are DEV only properties.
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    });
    // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */
function createElement(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}

/**
 * Return a function that produces ReactElements of a given type.
 * See https://reactjs.org/docs/react-api.html#createfactory
 */


function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
}

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */
function cloneElement(element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}

/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var ReactDebugCurrentFrame = {};

{
  // Component that is being worked on
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var impl = ReactDebugCurrentFrame.getCurrentStack;
    if (impl) {
      return impl();
    }
    return null;
  };
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];
function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;
  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_CALL_TYPE:
          case REACT_RETURN_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }
    }
  }

  if (invokeCallback) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (typeof iteratorFn === 'function') {
      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;
      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }
      var childrenString = '' + children;
      invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}

var describeComponentFrame = function (name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
};

function getComponentName(fiber) {
  var type = fiber.type;

  if (typeof type === 'string') {
    return type;
  }
  if (typeof type === 'function') {
    return type.displayName || type.name;
  }
  return null;
}

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

{
  var currentlyValidatingElement = null;

  var propTypesMisspellWarningShown = false;

  var getDisplayName = function (element) {
    if (element == null) {
      return '#empty';
    } else if (typeof element === 'string' || typeof element === 'number') {
      return '#text';
    } else if (typeof element.type === 'string') {
      return element.type;
    } else if (element.type === REACT_FRAGMENT_TYPE) {
      return 'React.Fragment';
    } else {
      return element.type.displayName || element.type.name || 'Unknown';
    }
  };

  var getStackAddendum = function () {
    var stack = '';
    if (currentlyValidatingElement) {
      var name = getDisplayName(currentlyValidatingElement);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
    }
    stack += ReactDebugCurrentFrame.getStackAddendum() || '';
    return stack;
  };

  var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current);
    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = '\n\nCheck the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }
  ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
  }

  currentlyValidatingElement = element;
  {
    warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
  }
  currentlyValidatingElement = null;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  var propTypes = componentClass.propTypes;
  if (propTypes) {
    currentlyValidatingElement = element;
    checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
    currentlyValidatingElement = null;
  } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    propTypesMisspellWarningShown = true;
    warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}

/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */
function validateFragmentProps(fragment) {
  currentlyValidatingElement = fragment;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (!VALID_FRAGMENT_PROPS.has(key)) {
        warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (fragment.ref !== null) {
    warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
  }

  currentlyValidatingElement = null;
}

function createElementWithValidation(type, props, children) {
  var validType = typeof type === 'string' || typeof type === 'function' || typeof type === 'symbol' || typeof type === 'number';
  // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.
  if (!validType) {
    var info = '';
    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendum(props);
    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    info += getStackAddendum() || '';

    warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
  }

  var element = createElement.apply(this, arguments);

  // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.
  if (element == null) {
    return element;
  }

  // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)
  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (typeof type === 'symbol' && type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}

function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  // Legacy hook TODO: Warn if this is accessed
  validatedFactory.type = type;

  {
    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}

function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);
  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }
  validatePropTypes(newElement);
  return newElement;
}

var React = {
  Children: {
    map: mapChildren,
    forEach: forEachChildren,
    count: countChildren,
    toArray: toArray,
    only: onlyChild
  },

  Component: Component,
  PureComponent: PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  Fragment: REACT_FRAGMENT_TYPE,

  createElement: createElementWithValidation,
  cloneElement: cloneElementWithValidation,
  createFactory: createFactoryWithValidation,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner: ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign: _assign
  }
};

{
  _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}



var React$2 = Object.freeze({
	default: React
});

var React$3 = ( React$2 && React ) || React$2;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest.
var react = React$3['default'] ? React$3['default'] : React$3;

module.exports = react;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(9);
var assign = __webpack_require__(8);

var ReactPropTypesSecret = __webpack_require__(10);
var checkPropTypes = __webpack_require__(12);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(10);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./modal.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./modal.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".PsNcEiGEvDKWWMP8NI_sO {\n    position: relative;\n}\n\n._1Sobd2Sd29qjg9e1Ub-tmf {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    overflow: auto;\n    background-color: #9c92928a;\n    z-index: 1000000000000;\n}\n._3buF5A4XoRqLNiz69cBhsb {\n    height: 100%;\n    margin-top: 5%;\n}\n._1O5PCa9Ys4I-ts29oOoa8v {\n    padding: 15px;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    vertical-align: middle;\n    align-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    width: 60%;\n    background-color: white;\n    border: 2px solid #00000049;  \n}\n._11m9mKs2RkuGiNfuhzYIox {\n    display: block;\n    width: 100%;\n}\n._3tX_HUb09djIyyDCj3iy99,\n._8N4rpC5XNfFXQvvlTTkZ7,\n._2VCILZETKDXCmYRMZQ5LFJ {\n    display: block;\n    margin: 10px;\n}\n._3tX_HUb09djIyyDCj3iy99 {\n    font-family: Helvetica, sans-serif;\n    font-size: 24px;\n    text-align: center;\n    text-transform: uppercase;\n    color: #5a4f4f;\n    padding-bottom: 20px;\n}\n._2VCILZETKDXCmYRMZQ5LFJ {\n    font-family: Helvetica, sans-serif;\n    font-size: 15px;\n    text-align: center;\n    color: #3f3737;\n    padding-bottom: 20px;\n}\n._3cGvauJcrGWpvv2lmCqHfE {\n    position: absolute;\n    width: 45%;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-self: center;\n    vertical-align: middle;\n    align-content: center;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    clear: both;\n}\n._8N4rpC5XNfFXQvvlTTkZ7 {\n    clear: both;\n    width: 100%;\n    font-family: Helvetica, sans-serif;\n    font-size: 12px;\n    font-style: italic;\n    color: #6b6363;\n}", ""]);

// exports
exports.locals = {
	"wrapcontent": "PsNcEiGEvDKWWMP8NI_sO",
	"background": "_1Sobd2Sd29qjg9e1Ub-tmf",
	"wrapper": "_3buF5A4XoRqLNiz69cBhsb",
	"module": "_1O5PCa9Ys4I-ts29oOoa8v",
	"module-content": "_11m9mKs2RkuGiNfuhzYIox",
	"title": "_3tX_HUb09djIyyDCj3iy99",
	"footer": "_8N4rpC5XNfFXQvvlTTkZ7",
	"body": "_2VCILZETKDXCmYRMZQ5LFJ",
	"btn": "_3cGvauJcrGWpvv2lmCqHfE"
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(25);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./button.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./button.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._17I8KZ4IlyRwH7gg22WlaQ{\n    display: block;\n    height: 30px;\n    border: 2px solid #34618d;\n    text-align: center;\n    cursor: pointer;\n    position: relative;\n    box-sizing: border-box;\n    overflow: hidden;\n  }\n._33ZW33AoM3a9BVPRqZ6ApB{\n    display: block;\n    font-family: Helvetica, sans-serif;\n    font-size: 14px;\n    font-weight: bolder;\n    color:#fff;\n    transition:all .5s ease;\n    z-index:2;\n    position:relative;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 0px 5px;\n}\n._30KE4IOgJCav72ofbztVvG{\n    padding: 10px;\n    width: 100%;\n    display: block;\n    padding: 3px;\n    height: 30px;\n    border: 70px solid #34618d;\n    position:absolute;\n    transition:all .2s ease;\n    z-index:1;\n    box-sizing:border-box;\n    padding: 10px;\n    padding-bottom: 20px;\n}\n._17I8KZ4IlyRwH7gg22WlaQ:hover ._30KE4IOgJCav72ofbztVvG{\n    border:0px solid #34618d;\n}\n._17I8KZ4IlyRwH7gg22WlaQ:hover a{\n    color:#34618d;\n}\n._17I8KZ4IlyRwH7gg22WlaQ a{\n    text-decoration: none;\n}", ""]);

// exports
exports.locals = {
	"btn-wrapper": "_17I8KZ4IlyRwH7gg22WlaQ",
	"btn-href": "_33ZW33AoM3a9BVPRqZ6ApB",
	"btn": "_30KE4IOgJCav72ofbztVvG"
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _progressbar = __webpack_require__(28);

var _progressbar2 = _interopRequireDefault(_progressbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Progress bar indicating progess by progress in %
 * Color specified by state (info, success, danger, warning)
 * Can be striped and animated (but not animated without being striped)
 */
var ProgressBar = function ProgressBar(_ref) {
    var progress = _ref.progress,
        state = _ref.state,
        striped = _ref.striped,
        animated = _ref.animated;

    return _react2.default.createElement(
        'div',
        { className: _progressbar2.default.progressbar + ' ' + _progressbar2.default['progressbar-' + state] + ' ' },
        _react2.default.createElement(
            'div',
            { style: { width: progress + '%' }, className: _progressbar2.default.progress + ' ' + _progressbar2.default['progress-' + state] + ' ' + (striped && _progressbar2.default.striped) + ' ' + (animated && _progressbar2.default.animated) },
            progress,
            '%'
        )
    );
};

// Props progressbar needs to function
ProgressBar.propTypes = {
    /* number 0-100 denoting progress in % */
    progress: function progress(props, propName) {
        var prop = props[propName];
        if (prop >= 0 && prop <= 100) {
            return;
        }
        return new Error('Progress should be between 0 and 100');
    },
    /* state specifying color of progress bar */
    state: _propTypes2.default.oneOf(['info', 'success', 'warning', 'danger']).isRequired,
    /* specifies whether progress bar is striped - defaults to false */
    striped: _propTypes2.default.bool,
    /* specifies whether progress bar is animated - defaults to false */
    animated: _propTypes2.default.bool
};

// Default props if not provided
ProgressBar.defaultProps = {
    striped: false,
    animated: false
};

exports.default = ProgressBar;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./progressbar.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./progressbar.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._2wFgQZEw1F5mxJXZKh-_e2 {\n    width: 30%;\n    height: 5.5vh;\n    background-color: #b1a6a621;\n    overflow: hidden;\n    line-height: 5vh;\n    border-radius: 10px;\n    border-color: #31383556;\n    /* box-shadow: 1px 1px 30px #00000017; */\n    outline: 0 none;\n    margin: 10px;\n    border: 2px solid #746d6d44;\n}\n\n._3AH2ooWIL-KFnsBcZfrKfM {\n    text-align: right;\n    font-family: Helvetica, sans-serif;\n    font-size: 12px;\n    font-weight: bold;\n    color: #f5f5f56b;\n    height: 100%;\n    text-shadow: 10px 5px 60px #000000;\n    border-radius: 10px;\n    letter-spacing: 2px;\n    padding-right: 1%;\n    border: 2px dashed #ffffff4d;\n}\n\n._1nJeB022DMygDCW7_qm9lh       { background-color: #0383d8;  }\n.sBd9pgrOUPfXX7Ia4BPXg    { background-color: #4CAF50; }\n._26K7vjyMdSy2vhIhyyK5gR    { background-color: #FFC107; }\n.Sn8ZfzkJELwlD0lQLRg7O     { background-color: #F44336; }\n\n._1eGBoFPPU3ygBaFR0wA9tS {\n    background-size: 30% 130%;\n    background-image: repeating-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%,\n    transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%,\n    transparent 75%, transparent);\n}\n._1NDBRowBc79eJi4aLvX5Z_ {\n    animation: _2_5-PmlOkrbkwmT9L6vx3R 2s linear infinite;\n}\n\n@keyframes _2_5-PmlOkrbkwmT9L6vx3R {\n    0% {background-position: 0 0;} 100% {background-position: 60px 0px;}\n}", ""]);

// exports
exports.locals = {
	"progressbar": "_2wFgQZEw1F5mxJXZKh-_e2",
	"progress": "_3AH2ooWIL-KFnsBcZfrKfM",
	"progress-info": "_1nJeB022DMygDCW7_qm9lh",
	"progress-success": "sBd9pgrOUPfXX7Ia4BPXg",
	"progress-warning": "_26K7vjyMdSy2vhIhyyK5gR",
	"progress-danger": "Sn8ZfzkJELwlD0lQLRg7O",
	"striped": "_1eGBoFPPU3ygBaFR0wA9tS",
	"animated": "_1NDBRowBc79eJi4aLvX5Z_",
	"animate-stripes": "_2_5-PmlOkrbkwmT9L6vx3R"
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _namecard = __webpack_require__(31);

var _namecard2 = _interopRequireDefault(_namecard);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders customized name card with user info provided,
 * takes in name, email, telephone and image url to render appropriate info
 */
var NameCard = function NameCard(_ref) {
    var name = _ref.name,
        email = _ref.email,
        telephone = _ref.telephone,
        imageUrl = _ref.imageUrl;

    return _react2.default.createElement(
        'div',
        { className: '' + _namecard2.default.container },
        _react2.default.createElement(
            'div',
            { className: '' + _namecard2.default.profilepic, style: { backgroundImage: 'url(' + imageUrl + ')' } },
            '\xA0'
        ),
        _react2.default.createElement(
            'div',
            { className: '' + _namecard2.default.wrapper },
            _react2.default.createElement(
                'div',
                { className: '' + _namecard2.default.info },
                _react2.default.createElement(
                    'p',
                    { className: '' + _namecard2.default.name },
                    name
                ),
                _react2.default.createElement(
                    'div',
                    { className: '' + _namecard2.default.email },
                    _react2.default.createElement(
                        'span',
                        { className: '' + _namecard2.default.icon },
                        _react2.default.createElement(_reactFontawesome2.default, { 'aria-hidden': 'false', name: 'envelope' })
                    ),
                    email
                ),
                _react2.default.createElement(
                    'div',
                    { className: '' + _namecard2.default.telephone },
                    _react2.default.createElement(
                        'span',
                        { className: '' + _namecard2.default.icon },
                        _react2.default.createElement(_reactFontawesome2.default, { 'aria-hidden': 'false', name: 'phone' })
                    ),
                    telephone
                )
            )
        )
    );
};

// Props namecard needs to function
NameCard.propTypes = {
    /* user information displayed on name card */
    name: _propTypes2.default.string.isRequired,
    email: _propTypes2.default.string.isRequired,
    telephone: _propTypes2.default.string.isRequired,
    imageUrl: _propTypes2.default.string.isRequired
};

exports.default = NameCard;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./namecard.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./namecard.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._35hlVI5hlvgbBi7ze7T6th {\n\ttransition: 2s;\n    perspective: 1000px;\n    background-image: url(\"http://ak0.picdn.net/shutterstock/videos/22045090/thumb/1.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 40%;\n    min-height: 250px;\n    display: flex;\n    background-color: white;\n    padding: 20px 0px;\n    border: 1px solid #1b1b1b;\n    box-shadow: 5px 5px 20px 2px #1b1b1b;\n    border-radius: 20px;\n}\n._35hlVI5hlvgbBi7ze7T6th:hover {\n\ttransition: 2s;\n    width: 42%;\n    box-shadow: 1px 1px 60px #01ff95, 1px 1px 40px #01ffdd;\n}\n\n._2kBoNsAjSgX4VobiqMU2_Y {\n    margin: 5px;\n    padding: 20px;\n    display: flex;\n    width: 100%;\n}\n\n._1cJ1Vi5mmhQvzIuoJfFJq5 {\n    opacity: 0.9;\n    border-radius: 100px;\n    margin: 10px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center; \n    overflow: hidden;\n    width: 250px;\n    height: 170px;\n}\n\n._2hKmQpif4WdMbNzDpNUFsq {\n    margin-left: 5%;\n    font-family: Helvetica, sans-serif\n}\n\n._2hKmQpif4WdMbNzDpNUFsq ._3ibMU2SujF1R5LfKtLKBZn {\n    color: #ffffffb2;\n    font-size: 30px;\n    font-weight: bolder;\n    text-transform: uppercase;\n    margin-bottom: 25px;\n}\n._2hKmQpif4WdMbNzDpNUFsq ._3eROppzTjl68R5iW8sTsxQ,\n._2hKmQpif4WdMbNzDpNUFsq ._3GaoyqrwQif7jb3x30FmNL {\n    margin-bottom: 15px;\n    color: #ffffff81;\n}\n\n._2hKmQpif4WdMbNzDpNUFsq ._3eROppzTjl68R5iW8sTsxQ ._3L7VuKhYlLNJylLYVteSU4 {\n    padding: 5px;\n    margin-right: 20px;\n    background-color: #00ffaa;\n    color: white;\n}\n\n._2hKmQpif4WdMbNzDpNUFsq ._3GaoyqrwQif7jb3x30FmNL ._3L7VuKhYlLNJylLYVteSU4 {\n    padding: 5px;\n    margin-right: 20px;\n    background-color: #ff9900;\n    color: white;\n}", ""]);

// exports
exports.locals = {
	"container": "_35hlVI5hlvgbBi7ze7T6th",
	"wrapper": "_2kBoNsAjSgX4VobiqMU2_Y",
	"profilepic": "_1cJ1Vi5mmhQvzIuoJfFJq5",
	"info": "_2hKmQpif4WdMbNzDpNUFsq",
	"name": "_3ibMU2SujF1R5LfKtLKBZn",
	"email": "_3eROppzTjl68R5iW8sTsxQ",
	"telephone": "_3GaoyqrwQif7jb3x30FmNL",
	"icon": "_3L7VuKhYlLNJylLYVteSU4"
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _carousel = __webpack_require__(34);

var _carousel2 = _interopRequireDefault(_carousel);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Displays a Carousel, i.e. a 'still slideshow' where user can navigate images
 * (front and back) in which case previous/next image renders
 */
var Carousel = function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel(props, ctx) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props, ctx));

        _this.state = { currentImage: 0 };
        return _this;
    }

    _createClass(Carousel, [{
        key: "changePicture",


        // Renders new picture (next or previous picture)
        value: function changePicture(event, idx) {
            this.setState({ currentImage: idx });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var images = this.props.images;

            // Construct 'squares' with which user can navigate images in carousel
            // I.e. each square has corresponding index to an image and changes picture
            // to that index in image array when clicked

            var squares;
            if (images.length > 1) {
                squares = images.map(function (i, idx) {
                    return _react2.default.createElement("span", {
                        className: "" + _carousel2.default.square + (_this2.state.currentImage === idx ? " " + _carousel2.default.selectedSquare : ""),
                        key: idx,
                        onClick: function onClick(e) {
                            return _this2.changePicture(e, idx);
                        }
                    });
                });
            }

            // Display carousel
            // Arrows can also be used instead of squares to navigate image
            var currentImage = this.state.currentImage;

            return _react2.default.createElement(
                "div",
                { className: _carousel2.default.carousel + " " + _carousel2.default["carousel-" + this.props.size] + " " },
                _react2.default.createElement(
                    "div",
                    { style: { backgroundImage: "url(" + images[currentImage] + ")" }, className: _carousel2.default.imageContainer + " " + _carousel2.default["image-" + this.props.size] },
                    _react2.default.createElement(_reactFontawesome2.default, { className: _carousel2.default.arrow + " " + _carousel2.default['arrow-left'], "aria-hidden": "false", size: "3x", name: "chevron-circle-left", onClick: function onClick() {
                            if (currentImage > 0) {
                                _this2.setState({ currentImage: currentImage - 1 });
                            }
                        } }),
                    _react2.default.createElement(_reactFontawesome2.default, { className: _carousel2.default.arrow + " " + _carousel2.default['arrow-right'], "aria-hidden": "false", size: "3x", name: "chevron-circle-right", onClick: function onClick() {
                            if (currentImage < images.length - 1) {
                                _this2.setState({ currentImage: currentImage + 1 });
                            }
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" + _carousel2.default.squares },
                    squares
                )
            );
        }
    }]);

    return Carousel;
}(_react2.default.Component);

;

// Props carousel needs to function
Carousel.propTypes = {
    /* Array of images carousel should display*/
    images: _propTypes2.default.array.isRequired,
    /* Carousel size (small, medium, large) */
    size: _propTypes2.default.oneOf(['small', 'medium', 'large'])
};

// Default props, if none are provided
Carousel.defaultProps = {
    size: 'medium'
};

exports.default = Carousel;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./carousel.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./carousel.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._2MVg2pONhDSVstktqC93yA {\n  position: relative;\n  display: block;\n}\n\n._3SZ_mFA1cHfLLIUDDG0tTa {\n  height: 220px;\n  width: 400px;\n}\n\n._20hU0v4ACbG_cXurDyzZ-t {\n  height: 420px;\n  width: 800px;\n}\n\n._3I5vdCTGEmNxFZNcY-aE_Y {\n  height: 520px;\n  width: 1000px;\n}\n\n._26QecSAmKQ5ePth6Ok7btZ {\n  height: 200px;\n  width: 400px;\n}\n\n._1-eDrnRhv8qCpjptHQ9gKM {\n  height: 400px;\n  width: 800px;\n}\n\n._309II1ibHktvbqc525R35t {\n  height: 500px;\n  width: 1000px;\n}\n\n._3x3viCnHbIamg1zA-8IH6D{\n  color: white;\n  position: absolute;\n  vertical-align: middle;\n  top:0;\n  bottom: 0;\n  margin: auto;\n  margin-right: 10px;\n  height: 30%;\n  text-shadow: 1px 1px 20px #000;\n  transition: 0.5s;\n}\n\n._3x3viCnHbIamg1zA-8IH6D:hover{\n  color: #82f7c6;\n  opacity: 0.5;\n}\n\n._3yNBWxGkbcD7uB6kNrJojr{\n  left: 0;\n  margin-left: 10px;\n}\n\n._33PdDzdAMEXMldlGWdDbt{\n  right: 0;\n  margin-right: 10px;\n}\n\n.qzMT4dz5SZwTQq4IlDoWl {\n  cursor: pointer;\n  height: 25px;\n  width: 25px;\n  margin: 0 8px;\n  border: 3px solid #01ffdd;\n  background-color: transparent;\n  display: inline-block;\n  transition: 0.6s ease;\n  position: relative;\n}\n.fL_-G6vfC5cahrKd0Ii6H {\n  background: linear-gradient(135deg,#01ffdd 0%,#01ff95 100%);\n}\n\n.qzMT4dz5SZwTQq4IlDoWl:hover {\n  background-color: #01ff95;\n  opacity: 0.6;\n}\n\n._2K8uHUgwc7ZDOcPV8W9b83{\n  text-align: center;\n  margin-top: 20px;\n}\n\n/* Fading animation */\n.tjpq-sQLiEfYjZb95zFW9 {\n  transition: 0.3s ease-in-out;\n  box-shadow: 1px 1px 40px #1b1818ea;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center; \n  overflow: hidden;\n}\n", ""]);

// exports
exports.locals = {
	"carousel": "_2MVg2pONhDSVstktqC93yA",
	"carousel-small": "_3SZ_mFA1cHfLLIUDDG0tTa",
	"carousel-medium": "_20hU0v4ACbG_cXurDyzZ-t",
	"carousel-large": "_3I5vdCTGEmNxFZNcY-aE_Y",
	"image-small": "_26QecSAmKQ5ePth6Ok7btZ",
	"image-medium": "_1-eDrnRhv8qCpjptHQ9gKM",
	"image-large": "_309II1ibHktvbqc525R35t",
	"arrow": "_3x3viCnHbIamg1zA-8IH6D",
	"arrow-left": "_3yNBWxGkbcD7uB6kNrJojr",
	"arrow-right": "_33PdDzdAMEXMldlGWdDbt",
	"square": "qzMT4dz5SZwTQq4IlDoWl",
	"selectedSquare": "fL_-G6vfC5cahrKd0Ii6H",
	"squares": "_2K8uHUgwc7ZDOcPV8W9b83",
	"imageContainer": "tjpq-sQLiEfYjZb95zFW9"
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _row = __webpack_require__(37);

var _row2 = _interopRequireDefault(_row);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Row component with bootstrap-like row behaviour
 *  Has Col components as children 
 *  Handles Col overflow such that overflowing component goes to next row
*/
var Row = function Row(_ref) {
  var children = _ref.children;

  return getRowContents(children);
};

// Gets row contents of rows: more than one row in case of overflow
var getRowContents = function getRowContents(children) {

  // Formats rows with respect to overflow
  var rows = formatOverflow(children);

  // Construct each row as JSX
  for (var i = 0; i < rows.length; i++) {
    rows[i] = _react2.default.createElement(
      "div",
      { key: i, className: "" + _row2.default.row },
      rows[i]
    );
  }

  return rows;
};

// Iterate through children cols to check for overflow
// New row is constructed for the overflowing col in case of overflow
var formatOverflow = function formatOverflow(children) {

  var sum = 0;var rowContent = [];var rows = [];

  _react2.default.Children.map(children, function (col) {

    sum = sum + col.props.size;

    // Place col in new row if there's no place for it in current row
    if (sum > 12) {
      rows.push(rowContent);
      sum = col.props.size;
      rowContent = []; // new row
    }

    rowContent.push(col);
  });rows.push(rowContent);

  return rows;
};

// Should contain children!
Row.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = Row;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./row.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./row.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".xkeQOgaL0xmtIB5-MwCON{\n    clear: both;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    min-height: 20px;\n    display: flex;\n}", ""]);

// exports
exports.locals = {
	"row": "xkeQOgaL0xmtIB5-MwCON"
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A single column within Row component
 * 12 size-unit columns make up a full row
 * (i.e. a single column with size 12 is a full row and
 * two of size six are full row as well)
 */
var Col = function Col(_ref) {
    var size = _ref.size,
        children = _ref.children;

    var colWidth = 100 / 12 * size + '%';
    return _react2.default.createElement(
        'span',
        { style: { width: colWidth, minHeight: '100%' } },
        children
    );
};

// Col needs to take in size, but size needs to be
// in specific range or an error is raised
Col.propTypes = {
    size: function size(props, propName) {
        var prop = props[propName];
        if (prop >= 1 && prop <= 12) {
            return;
        }
        return new Error('Column size should be between 1 and 12');
    }
};

// Col default props in case not provided
Col.defaultProps = {
    size: 1
};

exports.default = Col;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GlowBox = __webpack_require__(14);

var _GlowBox2 = _interopRequireDefault(_GlowBox);

var _TimePickerInterface = __webpack_require__(43);

var _TimePickerInterface2 = _interopRequireDefault(_TimePickerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains a pseudo-input box (Box component) to show user-inputted time
 * Once glowbox is clicked, the time picker interface component appears, prompting
 * user to choose his or her time. Can either take 12H form or military time form via prop 'format'
 */
var TimePicker = function (_React$Component) {
    _inherits(TimePicker, _React$Component);

    function TimePicker(props, ctx) {
        _classCallCheck(this, TimePicker);

        var _this = _possibleConstructorReturn(this, (TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call(this, props, ctx));

        _this.state = {
            time: _this.props.format === 24 ? '00:00' : '12:00',
            showPicker: false,
            am: true
        };
        _this.props.format === 12 ? _this.state.time = _this.state.time + (_this.state.am ? ' AM' : ' PM') : _this.state.time = _this.state.time;
        return _this;
    }

    _createClass(TimePicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _GlowBox2.default,
                    {
                        onClick: function onClick() {
                            return _this2.setState({ showPicker: !_this2.state.showPicker });
                        },
                        icon: 'clock-o'
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.time
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_TimePickerInterface2.default, {
                        show: this.state.showPicker,
                        closePicker: function closePicker(time, am) {
                            _this2.props.onTimePick(time);_this2.setState({ showPicker: false, time: time, am: am });
                        },
                        format: this.props.format
                    })
                )
            );
        }
    }]);

    return TimePicker;
}(_react2.default.Component);

;

// props timepicker needs to function
TimePicker.propTypes = {
    /* Action taken when user inputs time, takes time as parameter */
    onTimePick: _propTypes2.default.func.isRequired,
    /* format of timepicker; either military time or 12H format */
    format: _propTypes2.default.oneOf([24, 12])
};

// Default props if none are provided
TimePicker.defaultProps = {
    format: 24
};

exports.default = TimePicker;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./box.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./box.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".OjoPKXrhRIqxsqFdEZkco {\n    width: 27%;\n    height: 5vw;\n    border-radius: 25px;\n    position: relative;\n    text-transform: uppercase;\n    margin: 30px;\n    margin-bottom: 0px;\n    padding: 1%;\n    z-index:0;\n    position: relative;\n    display: table;\n}\n\n._2SKSrLV9h3H1CJuT0-ahvY {\n    display: table-cell;\n    vertical-align: middle;\n    background-color:white;\n    color: #251e1f4d;\n    overflow:hidden;\n    border: 4px solid #01e1ff;\n    border-radius: 20px;\n    z-index:10;\n    padding: 3%;\n    text-align: center;\n    cursor: pointer;\n    font-size: 25px;\n    letter-spacing: 10px;\n    transition: .5s;\n    border-color: #01ff95;\n    box-shadow: 1px 1px 20px #01ff95, 1px 1px 40px #01ffdd;\n    outline: 0 none;\n}\n\n._2SKSrLV9h3H1CJuT0-ahvY:hover {\n    color: #02e2ff;\n    box-shadow: 1px 1px 60px #01ff95, 1px 1px 40px #01ffdd;\n}\n\n._13e2rTIigHRE4dXcXlQUjC {\n    float: right;\n    font-size: 30px;\n    font-weight: bolder;\n    color: #01ffdd;\n    text-shadow: none;\n\n}", ""]);

// exports
exports.locals = {
	"wrapper": "OjoPKXrhRIqxsqFdEZkco",
	"content": "_2SKSrLV9h3H1CJuT0-ahvY",
	"icon": "_13e2rTIigHRE4dXcXlQUjC"
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _timepickerinterface = __webpack_require__(44);

var _timepickerinterface2 = _interopRequireDefault(_timepickerinterface);

var _Clock = __webpack_require__(46);

var _Clock2 = _interopRequireDefault(_Clock);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides a graphic interface prompting user to pick time
 * Renders which hour is chosen and minutes
 * Provides change by fontawesome arrow icons and onclick input boxes
 * and the clock showing time for better UX
 */
var TimePickerInterface = function (_React$Component) {
    _inherits(TimePickerInterface, _React$Component);

    function TimePickerInterface(props, ctx) {
        _classCallCheck(this, TimePickerInterface);

        var _this = _possibleConstructorReturn(this, (TimePickerInterface.__proto__ || Object.getPrototypeOf(TimePickerInterface)).call(this, props, ctx));

        _this.state = {
            hour: _this.props.format === 12 ? 12 : 0,
            minutes: 0,
            time: '',
            am: true,
            isInputtingHours: false,
            isInputtingMinutes: false,
            isInputtingAM: false,
            hoursInput: 0,
            minutesInput: 0
        };
        return _this;
    }

    _createClass(TimePickerInterface, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (!this.props.show) {
                return _react2.default.createElement('div', null);
            }

            var time = this.extrazero(this.state.hour) + this.state.hour + ':' + this.extrazero(this.state.minutes) + this.state.minutes;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: '' + _timepickerinterface2.default.wrapper },
                    _react2.default.createElement(
                        'span',
                        { className: '' + _timepickerinterface2.default.clockwrapper },
                        _react2.default.createElement(
                            'span',
                            { className: '' + _timepickerinterface2.default.clock },
                            _react2.default.createElement(_Clock2.default, { hour: this.state.hour, minutes: this.state.minutes })
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: '' + _timepickerinterface2.default.timepicker },
                        _react2.default.createElement(
                            'div',
                            { className: '' + _timepickerinterface2.default.controlpanel },
                            _react2.default.createElement(_reactFontawesome2.default, { className: '' + _timepickerinterface2.default.controls, 'aria-hidden': 'false', name: 'angle-up', onClick: function onClick() {
                                    return _this2.incrementHours();
                                } }),
                            _react2.default.createElement(_reactFontawesome2.default, { className: '' + _timepickerinterface2.default.controls, 'aria-hidden': 'false', name: 'angle-up', onClick: function onClick() {
                                    _this2.setState({ minutes: (_this2.state.minutes + 1) % 59 });
                                } })
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: '' + _timepickerinterface2.default.hours, onClick: function onClick() {
                                    return _this2.setState({ isInputtingHours: true });
                                } },
                            this.getHours()
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            ':'
                        ),
                        _react2.default.createElement(
                            'span',
                            { className: '' + _timepickerinterface2.default.minutes, onClick: function onClick() {
                                    return _this2.setState({ isInputtingMinutes: true });
                                } },
                            this.getMinutes()
                        ),
                        _react2.default.createElement(
                            'span',
                            { onClick: function onClick() {
                                    return _this2.setState({ isInputtingAM: true });
                                }, className: '' + _timepickerinterface2.default.ampm },
                            this.getAMIdentifier()
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: _timepickerinterface2.default.controlpanel + ' ' + _timepickerinterface2.default.decrement },
                            _react2.default.createElement(_reactFontawesome2.default, { className: '' + _timepickerinterface2.default.controls, 'aria-hidden': 'false', name: 'angle-down', onClick: function onClick() {
                                    return _this2.decrementHours();
                                } }),
                            _react2.default.createElement(_reactFontawesome2.default, { className: '' + _timepickerinterface2.default.controls, 'aria-hidden': 'false', name: 'angle-down', onClick: function onClick() {
                                    if (_this2.state.minutes > 0) _this2.setState({ minutes: _this2.state.minutes - 1 });else _this2.setState({ minutes: 59 });
                                } })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: '' + _timepickerinterface2.default.center },
                        _react2.default.createElement(
                            _Button2.default,
                            { onClick: function onClick() {
                                    return _this2.props.closePicker(time + (_this2.props.format === 12 ? _this2.state.am ? ' AM' : ' PM' : ''), _this2.state.am);
                                } },
                            'CHOOSE THIS TIME'
                        )
                    )
                )
            );
        }

        // Get input box for user to change hour value

    }, {
        key: 'getHours',
        value: function getHours() {
            var _this3 = this;

            if (this.state.isInputtingHours) {
                return _react2.default.createElement('input', {
                    type: 'number',
                    autoFocus: true,
                    className: '' + _timepickerinterface2.default.input,
                    onChange: function onChange(e) {
                        return _this3.setState({ hoursInput: e.target.value });
                    },
                    onKeyDown: function onKeyDown(e) {
                        return e.which === 13 ? _this3.changeHoursValue(_this3.state.hoursInput) : function () {};
                    },
                    onBlur: function onBlur() {
                        return _this3.changeHoursValue(_this3.state.hoursInput);
                    }
                });
            }

            return this.extrazero(this.state.hour) + this.state.hour;
        }

        // Get input box for user to change hour value

    }, {
        key: 'getMinutes',
        value: function getMinutes() {
            var _this4 = this;

            if (this.state.isInputtingMinutes) {
                return _react2.default.createElement('input', {
                    type: 'number',
                    autoFocus: true,
                    className: '' + _timepickerinterface2.default.input,
                    onChange: function onChange(e) {
                        return _this4.setState({ minutesInput: e.target.value });
                    },
                    onKeyDown: function onKeyDown(e) {
                        return e.which === 13 ? _this4.changeMinutesValue(_this4.state.minutesInput) : function () {};
                    },
                    onBlur: function onBlur() {
                        return _this4.changeMinutesValue(_this4.state.minutesInput);
                    }
                });
            }
            return this.extrazero(this.state.minutes) + this.state.minutes;
        }

        // Changes minute value to user-specified value if value is OK

    }, {
        key: 'changeMinutesValue',
        value: function changeMinutesValue(minutes) {
            if (minutes !== undefined && minutes !== ' ' && minutes !== '') {
                var changedVal = parseInt(minutes, 10);
                this.setState({ isInputtingMinutes: false });
                if (changedVal >= 0 && changedVal < 60) {
                    this.setState({ minutes: changedVal });
                } else {
                    this.setState({ minutes: 0 });
                }
            }
        }

        // Changes minute value to user-specified value if value is OK

    }, {
        key: 'changeHoursValue',
        value: function changeHoursValue(hours) {
            if (hours !== undefined && hours !== ' ' && hours !== '') {
                var changedVal = parseInt(hours, 10);
                this.setState({ isInputtingHours: false });
                if (this.props.format === 12) {
                    if (changedVal > 0 && changedVal <= 12) {
                        this.setState({ hour: changedVal });
                    } else {
                        this.setState({ hour: 12 });
                    }
                } else if (this.props.format === 24) {
                    if (changedVal >= 0 && changedVal < 24) {
                        this.setState({ hour: changedVal });
                    } else {
                        this.setState({ hour: 0 });
                    }
                }
            }
        }

        // Returns AM/PM identifier, if 12H format is applied

    }, {
        key: 'getAMIdentifier',
        value: function getAMIdentifier() {
            var _this5 = this;

            var AM = this.state.am === true;

            if (this.state.isInputtingAM) {
                return _react2.default.createElement(
                    'select',
                    {
                        className: '' + _timepickerinterface2.default.dropdown,
                        onChange: function onChange(e) {
                            return _this5.setState({ isInputtingAM: false, am: e.target.value === 'true' ? true : false });
                        },
                        name: 'ampm',
                        defaultValue: 1
                    },
                    _react2.default.createElement(
                        'option',
                        { disabled: true, key: 1, value: 1 },
                        '---'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: true },
                        'AM'
                    ),
                    _react2.default.createElement(
                        'option',
                        { value: false },
                        'PM'
                    )
                );
            }

            if (this.props.format === 12 && AM === true) {
                return ' AM';
            } else if (this.props.format === 12 && AM === false) {
                return ' PM';
            } else {
                return '';
            }
        }

        // Increment hours by icon arrow

    }, {
        key: 'incrementHours',
        value: function incrementHours() {
            if (this.props.format === 12 && this.state.hour + 1 === 12) {
                this.setState({ hour: 12, am: !this.state.am });
                return;
            }

            this.setState({ hour: (this.state.hour + 1) % this.props.format });
        }

        // Decrement hours by icon arrow

    }, {
        key: 'decrementHours',
        value: function decrementHours() {
            if (this.props.format === 12 && this.state.hour === 12) {
                this.setState({ am: !this.state.am });
            }

            if (this.state.hour > 0) {
                this.setState({ hour: this.state.hour - 1 });
            } else {
                this.setState({ hour: this.props.format - 1 });
            }
        }

        // Returns extra zero if appropriate

    }, {
        key: 'extrazero',
        value: function extrazero(unit) {
            if (unit < 10) {
                return '0';
            } else return '';
        }
    }]);

    return TimePickerInterface;
}(_react2.default.Component);

;

// Props time picker interface needs to function
TimePickerInterface.propTypes = {
    /* Action to take when picker closes */
    closePicker: _propTypes2.default.func.isRequired,
    /* Wheter the interface should show or not */
    show: _propTypes2.default.bool.isRequired,
    /* Time format (military or 12H format), defaults to military time */
    format: _propTypes2.default.oneOf([24, 12])
};

// Default props if none are provided
TimePickerInterface.defaultProps = {
    format: 24
};

exports.default = TimePickerInterface;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./timepickerinterface.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./timepickerinterface.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._1AwV9JL9YllKQJ149U-Hpj {\n    position: absolute;\n    width: 68%;\n    height: 100%;\n    color: white;\n    font-size: 60px;\n    font-weight: bolder;\n    background: linear-gradient(135deg,#01ffdd 0%,#01ff95 100%);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    margin: auto auto;\n    text-align: center;\n    letter-spacing: 15px;\n    text-shadow: 2px 2px 60px #0266669f;\n}\n._32wnmMy0XxHEIUu0KcQ6FV {\n    margin: 0px;\n    padding: 0px;\n    height: 30%;\n}\n\n._2TWpCvmTSnFkA4bepwlKk {\n    margin-top: -6%;\n}\n._3hjnfctGvwGkpyr1Rs48oH {\n    width: 60%;\n    box-shadow: 10px 5px 60px 5px #000000c4;\n    position: relative;\n    transition: all 0.3s ease-in-out;\n}\n\n._3hjnfctGvwGkpyr1Rs48oH:after {\n\ttransition: all 0.3s cubic-bezier(.55, 0, .1, 1) ease-in-out;\n}\n\n._1jtCneISQT2NS4x1R-KgQx {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 0%;\n    font-size: 55px;\n    margin-left: 45px;\n    margin-right: 45px;\n    margin-top: 25px;\n    transition: 0.5s;\n}\n\n._27_PYpOoOPJlAdGNZP5FcP {\n    margin: 18%;\n    margin-right: 5%;\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n}\n._27_PYpOoOPJlAdGNZP5FcP,\n._1sNObSRkoBNKbDY6HhbVcb,\n._2jl233dQciJUauQ9vIB8Ym {\n    cursor: pointer;\n    transition: 0.2s ease-in;\n}\n\n._1jtCneISQT2NS4x1R-KgQx:hover,\n._1sNObSRkoBNKbDY6HhbVcb:hover,\n._2jl233dQciJUauQ9vIB8Ym:hover,\n._27_PYpOoOPJlAdGNZP5FcP:hover {\n    color: #35313146;\n}\n\n.DxBsOr8zO6AwlhqaFhXAX {\n    width: 30%;\n    background-color: white;\n    height: fit-content;\n    margin-right: 68%;\n}\n\n._3n6WV2U_Troehd6FWEcs5 {\n    position: relative;\n    display: block;\n    width: 100%;\n    min-width: 60%;\n    background-color: #08b1db;\n    letter-spacing: 8px;\n    font-size: 20px;\n}\n\n._2Z5Yin7slQR2-51_U_ok2k {\n    width: 20%;\n    color: black;\n    padding: 5px;\n}\n\n._39vdeGp9QE_vMgpkaNXOnY {\n    width: 100%;\n    color: black;\n}", ""]);

// exports
exports.locals = {
	"timepicker": "_1AwV9JL9YllKQJ149U-Hpj",
	"controlpanel": "_32wnmMy0XxHEIUu0KcQ6FV",
	"decrement": "_2TWpCvmTSnFkA4bepwlKk",
	"wrapper": "_3hjnfctGvwGkpyr1Rs48oH",
	"controls": "_1jtCneISQT2NS4x1R-KgQx",
	"ampm": "_27_PYpOoOPJlAdGNZP5FcP",
	"hours": "_1sNObSRkoBNKbDY6HhbVcb",
	"minutes": "_2jl233dQciJUauQ9vIB8Ym",
	"clock": "DxBsOr8zO6AwlhqaFhXAX",
	"center": "_3n6WV2U_Troehd6FWEcs5",
	"input": "_2Z5Yin7slQR2-51_U_ok2k",
	"dropdown": "_39vdeGp9QE_vMgpkaNXOnY"
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clock = __webpack_require__(47);

var _clock2 = _interopRequireDefault(_clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A very very cool clock component THAT WE ARE SO PROUD OF!! 
 * Takes in hours and minutes and displays the time on a clock
 * Has a clock background and hours container, i.e. the hour hand
 * and minutes container, i.e. the minutes hand
 * Rotates the hands by appropriate degrees, given the time
 */
var Clock = function Clock(_ref) {
    var hour = _ref.hour,
        minutes = _ref.minutes;


    var hourAngle = hour * (360 / 12);
    var minuteAngle = minutes * (360 / 60);

    return _react2.default.createElement(
        'article',
        { className: '' + _clock2.default.clock },
        _react2.default.createElement(
            'div',
            { className: '' + _clock2.default['hours-container'], style: { transform: 'rotateZ(' + hourAngle + 'deg)' } },
            _react2.default.createElement('div', { className: '' + _clock2.default.hours })
        ),
        _react2.default.createElement(
            'div',
            { className: '' + _clock2.default['minutes-container'], style: { transform: 'rotateZ(' + minuteAngle + 'deg)' } },
            _react2.default.createElement('div', { className: '' + _clock2.default.minutes })
        ),
        _react2.default.createElement(
            'div',
            { className: '' + _clock2.default['center-container'] },
            _react2.default.createElement('div', { className: '' + _clock2.default.center })
        )
    );
};

// Props clock needs to function
/***** IDEA FROM: https://cssanimation.rocks/clocks/ !*************/
Clock.propTypes = {
    /* takes in hour, logically 0-12 or 0-24 but will just render the modulo value of {hour}%12 as hour*/
    hour: _propTypes2.default.number.isRequired,
    /* takes in hour, logically 0-59 but will just render the modulo value of {minutes}%59*/
    minutes: _propTypes2.default.number.isRequired
};

exports.default = Clock;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./clock.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./clock.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._1Z8SlnFjmpQ2i6WB9nYQ7h {\n    border-radius: 50%;\n    background: #fff url(https://image.ibb.co/kEEr4c/sku_220395_1.jpg) no-repeat center;\n    background-size: 100%;\n    height: 15em;\n    padding-bottom: 14%;\n    position: relative;\n    width: 15em;\n    overflow: visible;\n    transition: 2s;\n    display: inline-block;\n  }\n  \n  ._1Z8SlnFjmpQ2i6WB9nYQ7h._2AnLmD_LR-XAgbrB_Lid3y:after {\n    background: #000;\n    border-radius: 50%;\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 5%;\n    height: 5%;\n    z-index: 10;\n  }\n\n  ._2B6uqVjrx5XQW6i--MzRKn, ._37S6ulxNvmu6LrqbX_eu50, ._2pVcTfkAoMLQ8kdNRP6UkV {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: inline-block;\n  }\n\n  ._31K_-6YCEcHVcWnb7aEYWY {\n    background: #292525;\n    height: 20%;\n    left: 48%;\n    position: absolute;\n    top: 30%;\n    transform-origin: 50% 100%;\n    width: 2%;\n    display: inline-block;\n    border-radius: 100px;\n  }\n\n  ._2avLMtb-QQ6g5fBjF27uaw {\n    background: #ff0000;\n    height: 25%;\n    left: 49%;\n    position: absolute;\n    top: 25%;\n    transform-origin: 50% 100%;\n    width: 1%;\n    display: inline-block;\n    border-radius: 600px;\n  }\n\n  .xS0lI6Beglgh1N4HGMe4D {\n    background: #352f2f;\n    width: 5%;\n    height: 5%;\n    left: 47%;\n    top: 48%;\n    position: absolute;\n    display: inline-block;\n    border-radius: 40px;\n  }", ""]);

// exports
exports.locals = {
	"clock": "_1Z8SlnFjmpQ2i6WB9nYQ7h",
	"simple": "_2AnLmD_LR-XAgbrB_Lid3y",
	"minutes-container": "_2B6uqVjrx5XQW6i--MzRKn",
	"hours-container": "_37S6ulxNvmu6LrqbX_eu50",
	"center-container": "_2pVcTfkAoMLQ8kdNRP6UkV",
	"hours": "_31K_-6YCEcHVcWnb7aEYWY",
	"minutes": "_2avLMtb-QQ6g5fBjF27uaw",
	"center": "xS0lI6Beglgh1N4HGMe4D"
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GlowBox = __webpack_require__(14);

var _GlowBox2 = _interopRequireDefault(_GlowBox);

var _DatePickerInterface = __webpack_require__(50);

var _DatePickerInterface2 = _interopRequireDefault(_DatePickerInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains a pseudo-input box (Box component) to show user-inputted date
 * Once glowbox is clicked, the datepicker interface component appears, prompting
 * user to choose his or her date
 */
var DatePicker = function (_React$Component) {
    _inherits(DatePicker, _React$Component);

    function DatePicker(props, ctx) {
        _classCallCheck(this, DatePicker);

        var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props, ctx));

        _this.state = { showPicker: false, date: "Pick Date" };
        return _this;
    }

    _createClass(DatePicker, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _GlowBox2.default,
                    {
                        onClick: function onClick() {
                            return _this2.setState({ showPicker: !_this2.state.showPicker });
                        },
                        icon: 'calendar'
                    },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.date
                    )
                ),
                _react2.default.createElement(_DatePickerInterface2.default, {
                    onClose: function onClose() {
                        return _this2.setState({ showPicker: false });
                    },
                    locale: this.props.locale,
                    visible: this.state.showPicker,
                    onDatePick: function onDatePick(date) {
                        _this2.props.onDatePick(date);
                        _this2.setState({ date: date });
                    }
                })
            );
        }
    }]);

    return DatePicker;
}(_react2.default.Component);

;

// PropTypes datepicker needs to function
DatePicker.propTypes = {
    /* Action when user has inputted date; takes in date string as parameter */
    onDatePick: _propTypes2.default.func.isRequired,
    /* Specifies which format user wants string, defaults to is-IS (Icelandic date format)*/
    locale: _propTypes2.default.string
};

// Default props in case not provided
DatePicker.defaultProps = {
    locale: 'is-IS'
};

exports.default = DatePicker;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _datepickerinterface = __webpack_require__(51);

var _datepickerinterface2 = _interopRequireDefault(_datepickerinterface);

var _reactFontawesome = __webpack_require__(5);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _DateTable = __webpack_require__(53);

var _DateTable2 = _interopRequireDefault(_DateTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides a graphic interface prompting user to pick date
 * Renders feedback table (i.e. which month and year user currently sees)
 * and the table showing days in whatever month is displayed
 */
var DatePickerInterface = function (_React$Component) {
    _inherits(DatePickerInterface, _React$Component);

    function DatePickerInterface(props, ctx) {
        _classCallCheck(this, DatePickerInterface);

        var _this = _possibleConstructorReturn(this, (DatePickerInterface.__proto__ || Object.getPrototypeOf(DatePickerInterface)).call(this, props, ctx));

        _this.state = {
            showPicker: false,
            date: new Date()
        };
        return _this;
    }

    // Sets datepicker initially to today's date


    _createClass(DatePickerInterface, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateDateStrings();
        }

        // Updates current month string and current year string

    }, {
        key: 'updateDateStrings',
        value: function updateDateStrings() {
            this.setState({
                currMonth: String(this.state.date.getMonth() + 1),
                currYear: String(this.state.date.getFullYear())
            });
        }

        // Whenever the date object is changed, user has picked a date

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.date !== this.state.date) {
                this.updateDateStrings();
                this.props.onClose();
                this.props.onDatePick(this.state.date.toLocaleDateString(this.props.locale));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var currYear = this.state.currYear;
            var currMonth = this.state.currMonth;


            if (this.props.visible) {
                var firstDayInMonthWeekday = parseInt(new Date(parseInt(currYear, 10), parseInt(currMonth, 10) - 1, parseInt(1, 10)).getDay(), 10);
                return _react2.default.createElement(
                    'div',
                    { className: '' + _datepickerinterface2.default.wrapper },
                    _react2.default.createElement(
                        'div',
                        { className: '' + _datepickerinterface2.default.feedback },
                        _react2.default.createElement(
                            'div',
                            { className: '' + _datepickerinterface2.default.monthWrapper },
                            _react2.default.createElement(
                                'span',
                                { className: '' + _datepickerinterface2.default.decrement },
                                _react2.default.createElement(_reactFontawesome2.default, {
                                    onClick: function onClick() {
                                        return _this2.decrementMonth();
                                    },
                                    'aria-hidden': 'false',
                                    name: 'angle-left'
                                })
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: '' + _datepickerinterface2.default.month },
                                months[parseInt(this.state.currMonth, 10) - 1],
                                '\xA0',
                                this.state.currYear
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: '' + _datepickerinterface2.default.increment },
                                _react2.default.createElement(_reactFontawesome2.default, {
                                    onClick: function onClick() {
                                        return _this2.incrementMonth();
                                    },
                                    'aria-hidden': 'false',
                                    name: 'angle-right'
                                })
                            )
                        )
                    ),
                    _react2.default.createElement(_DateTable2.default, {
                        daysInMonth: this.getMonthDays(this.state.currMonth, this.state.currYear),
                        firstWeekdayOfMonth: firstDayInMonthWeekday,
                        onDayPick: function onDayPick(e) {
                            return _this2.setState({ date: new Date(parseInt(currYear, 10), parseInt(currMonth, 10) - 1, parseInt(e.target.innerHTML, 10)) });
                        }
                    })
                );
            } else return _react2.default.createElement('div', null);
        }

        // Increments month and date updates accordingly

    }, {
        key: 'incrementMonth',
        value: function incrementMonth() {
            if (parseInt(this.state.currMonth, 10) < 12) {
                this.setState({ currMonth: String(parseInt(this.state.currMonth, 10) + 1) });
                // Special case: increment to next year
            } else {
                this.setState({
                    currMonth: String(1),
                    currYear: String(parseInt(this.state.currYear, 10) + 1)
                });
            }
        }

        // Gets days in each month

    }, {
        key: 'getMonthDays',
        value: function getMonthDays(m, year) {
            var month = parseInt(m, 10);
            if (month === 2 && this.isLeapYear(year)) {
                return 29;
            } else {
                return monthdays[this.state.currMonth - 1];
            }
        }

        // Checks whether year is leap year

    }, {
        key: 'isLeapYear',
        value: function isLeapYear(y) {
            var year = parseInt(y, 10);
            if (year % 4 === 0) {
                if (year % 100 === 0) {
                    return year % 400 === 0;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        }

        // Decrements month and date updates accordingly

    }, {
        key: 'decrementMonth',
        value: function decrementMonth() {
            if (parseInt(this.state.currMonth, 10) > 1) {
                this.setState({ currMonth: String(parseInt(this.state.currMonth, 10) - 1) });
                // Special case: decrement to previous year
            } else {
                this.setState({
                    currMonth: String(12),
                    currYear: String(parseInt(this.state.currYear, 10) - 1)
                });
            }
        }
    }]);

    return DatePickerInterface;
}(_react2.default.Component);

;

// Months and number of days in each month,
// Both indices in array correspond to month number in a year
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// propTypes the interface needs to function
DatePickerInterface.propTypes = {
    /* Action to take when user picks a date, provides date string as parameter*/
    onDatePick: _propTypes2.default.func.isRequired,
    /* Action to take when datepicker interface is closed */
    onClose: _propTypes2.default.func.isRequired,
    /* Specifies whether the component should show */
    visible: _propTypes2.default.bool.isRequired,
    /* Locale for date fromat, defaults to is-IS */
    locale: _propTypes2.default.string
};

// Datepickerinterface default propes if none are provied
DatePickerInterface.defaultProps = {
    locale: 'is-IS'
};

exports.default = DatePickerInterface;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./datepickerinterface.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./datepickerinterface.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._21FhOYO5YJlKKdhXM16jnj {\n    position: relative;\n    display: block;\n    margin: 0px 30px;\n    width: 27%;\n    box-shadow: 10px 5px 60px 5px #000000c4;\n    transition: all 0.3s ease-in-out;\n    clear: both;\n}\n\n._21FhOYO5YJlKKdhXM16jnj:after {\n    letter-spacing: 10px;\n\ttransition: all 0.3s cubic-bezier(.55, 0, .1, 1) ease-in-out;\n}\n\n.fz6EDJdQ2ErpoWGFFCsf- {\n    position: relative;\n    min-width: 100%;\n    text-align: center;\n}\n\n.c4hfIXq28cH8zVzpkO0aE {\n    position: absolute;\n    min-width: 60%;\n    min-height: 100%;\n    padding-top: 5%;\n    left: 0;\n    right: 0;\n    z-index: 0;\n    margin: 0% 10%;\n}\n\n._1EX8_GHz6TGpmyy3VWqgo8 {\n    float: right;\n}\n\n.mmsvLVmNM6tF5rRqNBWbK {\n    float: left;\n}\n\n.mmsvLVmNM6tF5rRqNBWbK,\n._1EX8_GHz6TGpmyy3VWqgo8{\n    font-size: 40px;\n    min-height: 20%;\n    cursor: pointer;\n\ttransition: 0.3s ease-in-out;\n    z-index: 10;\n}\n\n.mmsvLVmNM6tF5rRqNBWbK:hover,\n._1EX8_GHz6TGpmyy3VWqgo8:hover {\n    background-color: #0000004f;\n    box-shadow: 1px 1px 40px #0000004f;\n    filter: blur(2px);\n    border: 5px solid #00000000;\n}\n\n._14BSL_vLqqG16rhsUlzIAH {\n    /* background-color: #673AB7; */\n    background: linear-gradient(135deg,#01ffdd 0%,#01ff95 100%);\n    width: 100%;\n    height: 5vw;\n    color: white;\n    font-size: 20px;\n    font-weight: bolder;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    box-shadow: 1px 1px 20px #683ab7ad;\n    text-shadow: 1px 1px 20px #683ab7c2;\n}", ""]);

// exports
exports.locals = {
	"wrapper": "_21FhOYO5YJlKKdhXM16jnj",
	"monthWrapper": "fz6EDJdQ2ErpoWGFFCsf-",
	"month": "c4hfIXq28cH8zVzpkO0aE",
	"increment": "_1EX8_GHz6TGpmyy3VWqgo8",
	"decrement": "mmsvLVmNM6tF5rRqNBWbK",
	"feedback": "_14BSL_vLqqG16rhsUlzIAH"
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _datetable = __webpack_require__(54);

var _datetable2 = _interopRequireDefault(_datetable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a day table for a month with given number of days
 * And on which weekday the first day in month is
 */
var DateTable = function DateTable(_ref) {
    var daysInMonth = _ref.daysInMonth,
        firstWeekdayOfMonth = _ref.firstWeekdayOfMonth,
        onDayPick = _ref.onDayPick;


    // Construct table before rendering
    var rows = [];
    rows = populateWeekdaysTableIdx(rows);
    rows = populateDaysInMonthEntries(rows, daysInMonth, firstWeekdayOfMonth, onDayPick);

    return _react2.default.createElement(
        'table',
        { className: '' + _datetable2.default.table },
        _react2.default.createElement(
            'tbody',
            null,
            rows
        )
    );
};

// Set up indices for table, i.e. weekdays
var populateWeekdaysTableIdx = function populateWeekdaysTableIdx(rows) {
    var weekdays = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
    for (var i = 0; i < weekdays.length; i++) {
        weekdays[i] = _react2.default.createElement(
            'td',
            { className: '' + _datetable2.default.index, key: weekdays[i], id: weekdays[i] },
            weekdays[i]
        );
    }
    rows.push(_react2.default.createElement(
        'tr',
        { key: rows.length, id: rows.length },
        weekdays
    ));
    var ret = rows;

    return ret;
};

// Places days in correct entry in table
// i.e. corresponding to indices/weekdays
// SUCH AI MUCH WOW!!!
var populateDaysInMonthEntries = function populateDaysInMonthEntries(rows, daysInMonth, firstWeekdayOfMonth, onDayPick) {

    // Get size of table, day index and populate array
    var maxMonthSize = 31;var numberOfWeekdays = 7;
    var size = maxMonthSize + numberOfWeekdays + 7;
    var monthDays = [];var daysIdx = 1;

    for (var i = 0; i < size; i++) {
        // Start a new row once monthdays has a week's worth of entry 
        if (monthDays.length === numberOfWeekdays) {
            rows.push(_react2.default.createElement(
                'tr',
                { key: rows.length, id: rows.length },
                monthDays
            ));
            monthDays = [];
        }
        // Push an empty entry before month 'starts' and after it has 'passed'
        if (i < firstWeekdayOfMonth || daysInMonth < daysIdx) {
            monthDays.push(_react2.default.createElement(
                'td',
                { key: monthDays.length * rows.length, id: monthDays.length * rows.length },
                '\xA0'
            ));

            // Otherwise push an actual day entry
        } else {
            monthDays.push(_react2.default.createElement(
                'td',
                { onClick: function onClick(e) {
                        return onDayPick(e);
                    }, className: '' + _datetable2.default.entry, key: monthDays.length * rows.length, id: monthDays.length * rows.length },
                String(daysIdx)
            ));
            daysIdx++;
        }
    }

    return rows;
};

// PropTypes date table needs to function
DateTable.propTypes = {

    /* Determines how many days are in month for dateTable */
    daysInMonth: _propTypes2.default.number.isRequired,
    /* Determines on which day the first day in month is*/
    firstWeekdayOfMonth: _propTypes2.default.number.isRequired,
    /* Defines action when a date is picked from table*/
    onDayPick: _propTypes2.default.func.isRequired
};

exports.default = DateTable;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./datetable.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./datetable.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._2kVYgeC_7KOj-qVxT4eamh {\n    width: 10%;\n    border-radius: 100px;\n    margin: 10px;\n    text-align: center;\n    cursor: pointer;\n    transition: 0.4s ease-in;\n}\n\n._2kVYgeC_7KOj-qVxT4eamh:hover {\n    box-shadow: 1px 1px 80px #01ff95;\n    background-color: #683ab7c7;\n    color: white;\n}\n\n._22yIkuqDNlslJtH7GFARNi {\n    width: 10%;\n    text-align: center;\n    border-bottom: 1px solid #683ab727;\n    background-color: #2e253227;\n    opacity: 0.5;\n}\n\n.EeL2FWDR53EDZ5j7fbKmP {\n    width: 100%;\n    height: 20vw;\n    color: #4b4040d0;\n    font-weight: 900;\n}\n\n", ""]);

// exports
exports.locals = {
	"entry": "_2kVYgeC_7KOj-qVxT4eamh",
	"index": "_22yIkuqDNlslJtH7GFARNi",
	"table": "EeL2FWDR53EDZ5j7fbKmP"
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tabs = __webpack_require__(57);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders tab bar with apparence theme and specific layout
 * Children are tabs and contain their own children as content
 */
var Tabs = function Tabs(_ref) {
    var theme = _ref.theme,
        layout = _ref.layout,
        onSelect = _ref.onSelect,
        currentSelectedTab = _ref.currentSelectedTab,
        children = _ref.children;

    return _react2.default.createElement(
        'div',
        { className: '' + _tabs2.default.tabbar },
        _react2.default.createElement(
            'div',
            { className: '' + (layout === 'vertical' && _tabs2.default.vertical) },
            _react2.default.Children.map(children, function (tab) {
                return _react2.default.createElement(
                    'span',
                    {
                        className: _tabs2.default['tabs-' + theme] + ' ' + (currentSelectedTab === tab.props.selectionKey && _tabs2.default['selected-' + theme]) + ' ' + _tabs2.default['item-' + layout],
                        key: tab.props.selectionKey,
                        onClick: function onClick() {
                            return onSelect(tab.props.selectionKey);
                        }
                    },
                    tab.props.title
                );
            })
        ),
        _react2.default.createElement(
            'div',
            { className: _tabs2.default.tabcontent + ' ' + _tabs2.default['tabcontent-' + theme] },
            children[currentSelectedTab - 1].props.children
        )
    );
};

// Props tabs need to function
Tabs.propTypes = {
    /* Tabs theme, effects apparence. Defaults to light*/
    theme: _propTypes2.default.oneOf(['dark', 'light']),
    /*  Layout; determines whether tabs are placed horizontally (above content)
        or vertically (to the left of content) - defaults to horizontal */
    layout: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    /* Action determining actions of tab selection */
    onSelect: _propTypes2.default.func.isRequired,
    /* Specifies which tab is open */
    currentSelectedTab: _propTypes2.default.number.isRequired
};

// Default props of tab bar
Tabs.defaultProps = {
    theme: 'light',
    layout: 'horizontal'
};

exports.default = Tabs;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./tabs.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./tabs.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._1u8Kvk3hO3LSdI8LcmhmTr {\n    margin: 30px;\n    height: fit-content;\n}\n\n._3EigQasmiV_j8rX5DaKFK2 {\n    position: relative;\n    display: block;\n    float: left;\n    z-index: 100;\n}\n\n._3w_xEGHMtyaxNSLIH1nhZE {\n    display: block;\n    padding: 15px;\n    text-transform: uppercase;\n    font-weight: bolder;\n    font-size: 12px;\n    border-radius: 10px 0px 0px 10px;\n    cursor: pointer;\n}\n\n.VgvYOA3RDbl3A_49g9LFP {\n    display: inline-block;\n    padding: 10px 30px;\n    text-transform: uppercase;\n    font-weight: bolder;\n    font-size: 12px;\n    border-radius: 10px 10px 0px 0px;\n    cursor: pointer;\n}\n\n._2YVtHh33X5-fMbUNUyurCf,\n._2HgbYuMU5kxqE8URz4RCVJ {\n    border-bottom: 4px solid transparent;\n    background: linear-gradient(135deg,#01ffc8 0%,#01ffaa 100%);\n    color: white;\n    letter-spacing: 0;\n    transition: .3s;\n}\n\n._2YVtHh33X5-fMbUNUyurCf:hover,\n._2HgbYuMU5kxqE8URz4RCVJ:hover {\n    transition: .3s;\n    opacity: 0.7;\n    color: #059eb9;\n}\n\n.Tv6_dZhS5lPmenO_BbFFz {\n    min-width: 70vw;\n    height: 45vh;\n    padding: 20px;\n    font-family: Helvetica, sans-serif;\n    font-size: 16px;\n    display: inline-block;\n    position: relative;\n    box-shadow: 10px 5px 40px 5px #0000002a;\n}\n._23tHTXCz0UzaQn57R35R4f {\n    background-color: black;\n    color: #d6d0d0;\n}\n._1FItXSFMBPeXj8QbT9Q_0Z {\n    color: #4c4545;\n}\n._2-pE3qXFuJXGF0hYno8UZW{\n    color: black;\n    background: white;\n    background-color: #ffffff;\n    box-shadow: -10px -10px 40px 1px #aaaaaa2d;\n    font-size: 14px;\n    border-bottom: 4px solid #00ffbf38;\n    cursor: auto;\n}\n._3bwPKXwn_0LTkuqNeH2OiC{\n    background: black;\n    background-color: black;\n    font-size: 14px;\n    border-bottom: 4px solid #00ffbf31;\n    cursor: auto;\n}\n._3bwPKXwn_0LTkuqNeH2OiC:hover,\n._2-pE3qXFuJXGF0hYno8UZW:hover,{\n    border: hidden;\n}", ""]);

// exports
exports.locals = {
	"tabbar": "_1u8Kvk3hO3LSdI8LcmhmTr",
	"vertical": "_3EigQasmiV_j8rX5DaKFK2",
	"item-vertical": "_3w_xEGHMtyaxNSLIH1nhZE",
	"item-horizontal": "VgvYOA3RDbl3A_49g9LFP",
	"tabs-dark": "_2YVtHh33X5-fMbUNUyurCf",
	"tabs-light": "_2HgbYuMU5kxqE8URz4RCVJ",
	"tabcontent": "Tv6_dZhS5lPmenO_BbFFz",
	"tabcontent-dark": "_23tHTXCz0UzaQn57R35R4f",
	"tabcontent-light": "_1FItXSFMBPeXj8QbT9Q_0Z",
	"selected-light": "_2-pE3qXFuJXGF0hYno8UZW",
	"selected-dark": "_3bwPKXwn_0LTkuqNeH2OiC"
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A single tab in a tab bar component (Tabs)
 * Very, very dumb practically unnecessary component,
 * Only enhances readability of using the tab bar component
 */
var Tab = function Tab(_ref) {
  var title = _ref.title;
  return { title: title };
};

// Props tabs needs to function; needs only title
Tab.propTypes = {
  title: _propTypes2.default.string.isRequired
};

exports.default = Tab;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cartoonnetwork = __webpack_require__(61);

var _cartoonnetwork2 = _interopRequireDefault(_cartoonnetwork);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Displays a CartoonNetworkSpinner Spinner: displays a cartoon network character
 * Spins in an even interval in a washer-machine effect,
 * Renders new character image when spinning
 */
var CartoonNetworkSpinner = function (_React$Component) {
  _inherits(CartoonNetworkSpinner, _React$Component);

  function CartoonNetworkSpinner(props) {
    _classCallCheck(this, CartoonNetworkSpinner);

    var _this = _possibleConstructorReturn(this, (CartoonNetworkSpinner.__proto__ || Object.getPrototypeOf(CartoonNetworkSpinner)).call(this, props));

    _this.state = {
      currentImage: 0,
      shouldSpin: false,
      interval: _this.props.interval,
      images: CartoonNetworkCharacters
    };
    return _this;
  }

  // Sets interval: image changes every {interval} seconds,
  // And spins happens every {interval}-0.5 seconds and lasts
  // until new image has rendered
  // Clears interval when unmounted, that does not happen automatically :(


  _createClass(CartoonNetworkSpinner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setIntervals();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearIntervals();
    }
  }, {
    key: "clearIntervals",


    // Clears intervals
    value: function clearIntervals() {
      clearInterval(this.changeImageInterval);
      clearInterval(this.spinImageInterval);
    }

    // Sets intervals

  }, {
    key: "setIntervals",
    value: function setIntervals() {
      this.changeImageInterval = setInterval(function () {
        this.increaseCurrentImage();
      }.bind(this), this.props.interval * 1000);
      this.spinImageInterval = setInterval(function () {
        this.spin();
      }.bind(this), this.props.interval * 1000 - 500);
    }

    // Triggers render for next image in spinner

  }, {
    key: "increaseCurrentImage",
    value: function increaseCurrentImage() {

      // When new image is rendered, spin stops
      this.setState({ shouldSpin: false });

      // Render next image
      if (this.state.images.length - 1 !== this.state.currentImage) {
        this.setState({ currentImage: this.state.currentImage + 1 });
      } else {
        this.setState({ currentImage: 0 });
      }

      // Intervals are resetted, in case
      this.clearIntervals();
      this.setIntervals();
    }

    // Triggers spin just before image change in spinner

  }, {
    key: "spin",
    value: function spin() {
      this.setState({ shouldSpin: true });

      // Interval resetted, in case
      clearInterval(this.changeImageInterval);
      clearInterval(this.spinImageInterval);
      this.changeImageInterval = setInterval(function () {
        this.increaseCurrentImage();
      }.bind(this), 500);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "" + _cartoonnetwork2.default.container },
        _react2.default.createElement("div", {
          className: _cartoonnetwork2.default.images + " " + (this.state.shouldSpin && _cartoonnetwork2.default.spin),
          style: { backgroundImage: "url(" + this.state.images[this.state.currentImage] + ")" }
        })
      );
    }
  }]);

  return CartoonNetworkSpinner;
}(_react2.default.Component);

// Hard-coded CartoonNetworkSpinner character avatar images


var CartoonNetworkCharacters = ["http://www.pngmart.com/files/4/Dexters-Laboratory-PNG-Transparent-Image.png", "https://vignette.wikia.nocookie.net/johnnybravo/images/b/bb/Johnnyb001.gif/revision/latest?cb=20120620184904", "https://vignette.wikia.nocookie.net/villains/images/b/b3/Mojo_Jojo_2016.png/revision/latest/scale-to-width-down/300?cb=20170613192420", "https://vignette.wikia.nocookie.net/powerpuff/images/2/23/Blossom-pic.png/revision/latest?cb=20130517081824", "https://i.pinimg.com/originals/58/68/e1/5868e1a03656470c1f15acde6c553693.jpg", "http://images2.fanpop.com/image/photos/11400000/Robin-teen-titans-boys-11494057-431-500.gif", "https://vignette.wikia.nocookie.net/teentitans/images/0/0a/Latest-2.png/revision/latest?cb=20150813183840", "https://www.wbkidsgo.com/Portals/4/Images/Content/Characters/Scooby/characterArt-scooby-SD.png", "https://vignette.wikia.nocookie.net/vsbattles/images/8/82/Shaggy_Rogers.png/revision/latest?cb=20180227172028", "https://vignette.wikia.nocookie.net/edwikia/images/0/0d/Plank.png/revision/latest?cb=20170726093347"];

// User-specified interval between image changes in Spinner
// Defaults to 3
CartoonNetworkSpinner.propTypes = {
  interval: _propTypes2.default.number
};

// Default props, if none are provided
CartoonNetworkSpinner.defaultProps = {
  interval: 3
};

exports.default = CartoonNetworkSpinner;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!./cartoonnetwork.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!./cartoonnetwork.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "._3L6uylf46f3tBQnjtdsDeX {\n    width: 20%;\n    height: 15vw;\n    margin-left: 75px;\n}\n\n._2tSso9NF9TqcNkNhSF5q5p{\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: 1s;\n}\n\n._3hhpfW4CF6vaUs5aRoqM9I {\n    transform-origin: center;\n    transform: rotateZ(1080deg);\n}", ""]);

// exports
exports.locals = {
	"container": "_3L6uylf46f3tBQnjtdsDeX",
	"images": "_2tSso9NF9TqcNkNhSF5q5p",
	"spin": "_3hhpfW4CF6vaUs5aRoqM9I"
};

/***/ })
/******/ ]);
});