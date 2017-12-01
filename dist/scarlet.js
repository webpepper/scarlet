(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Scarlet"] = factory();
	else
		root["Scarlet"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(1);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(14);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(15);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6), __webpack_require__(7)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function ObjectExtended() {

	"use strict";

	var self = this;
	var enumerable = __webpack_require__(3);
	self.__typename__ = "scarlet.lib.extensions.Object";

	self.has = function(obj, key) {
		return hasOwnProperty.call(obj, key);
	};

	self.isObject = function(obj) {
		return obj instanceof Object;
	};

	self.isFunction = function(obj) {
		return obj instanceof Function;
	};

	self.isNull = function(obj) {
		if (typeof(obj) === "object")
			return obj === null;
		return typeof(obj) === "undefined";
	};

	self.inherit = function(child, parent) {
		child.__super__ = parent;
		child.prototype = Object.create(parent.prototype, {
			constructor: {
				value: child,
				writable: true,
				enumerable: false,
				configurable: true
			}
		});
	};

	self.name = function(obj) {
		if (!obj)
			return "undefined";

		if (obj.name)
			return obj.name;

		if (obj.constructor) {
			if (obj.constructor.name)
				return obj.constructor.name;
		}

		var funcNameRegex = /function\s([^(]{1,})\(/;
		var results = (funcNameRegex).exec((obj).toString());
		if ((results && results.length > 1))
			return results[1].trim();

		if (obj instanceof Function)
			return "Function";

		return "Object";
	};
	
	self.objectHasFunction = function(object, objectFunction) {
		for (var property in object) {
			if (object[property] == objectFunction)
				return true;
		}
		return false;
	};
	
	self.extend = function(fromObject, toObject) {
		for (var property in fromObject) {
			toObject[property] = fromObject[property];
		}
	};

}

module.exports = new ObjectExtended();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);

function Enumerable() {

	"use strict";

	var self = this;
	self.__typename__ = "scarlet.lib.extensions.Enumerable";

	self.arrayFor = function(array, callback) {
		for (var i = 0; i < array.length; i++) {
			callback(array[i], i, array);
		}
	};

	self.funcFor = function(object, callback) {
		for (var key in object) {
			callback(object[key], key, object);
		}
	};

	self.stringFor = function(string, callback) {
		self.arrayFor(string.split(""), function(chr, index) {
			callback(chr, index, string);
		});
	};

	self.allEach = function(object, callback) {
		Object.getOwnPropertyNames(object).forEach(function(property) {
			callback(object[property], property, object);
		});
	};

	self.forEach = function(object, callback) {
		if (object) {
			var resolve = self.funcFor;
			if (object instanceof Function) {
				resolve = self.funcFor;
			} else if (typeof object == "string") {
				resolve = self.stringFor;
			} else if (typeof object.length == "number") {
				resolve = self.arrayFor;
			}
			resolve(object, callback);
		}
	};
	self.any = function(object, predicateCallback) {
		var isTrue = false;
		self.forEach(object, function(element, index) {
			if (!predicateCallback(element, index))
				return;
			isTrue = true;
			return;
		});
		return isTrue;
	};
	self.where = function(object, predicateCallback) {
		var results = [];
		self.forEach(object, function(element) {
			if (predicateCallback(element))
				results.push(element);
		});
		return results;
	};

	self.first = function(object, predicateCallback) {
		if (typeof(predicateCallback) == "undefined" && typeof(object) != "undefined" && object.length > 0) {
			return object[0];
		}
		var results = self.where(object, predicateCallback);
		if (results.length > 0)
			return results[0];
		return null;
	};

	self.mapSeries = function(functions, onEach, onComplete) {
		assert(typeof functions.length === "number", "Object to map must be an array");

		if (!this)
			return new self.mapSeries(functions, onEach, onComplete);

		var results = [];
		var thisContext = this;
		var functionNumber = 0;

		var next = function() {
			var nextfunction = functions[functionNumber];
			functionNumber++;
			return nextfunction;
		};

		var finalResult = null;

		thisContext._proceed = function(error, result) {
			if (result !== undefined)
				results.push(result);
			var nextfunction = next();
			if (nextfunction)
				onEach(error, nextfunction, thisContext._proceed);
			else if (onComplete)
				finalResult = onComplete(error, results);
			return finalResult;
		};

		thisContext._proceed();
	};
}

module.exports = new Enumerable();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var object = __webpack_require__(2);
var logger = __webpack_require__(8);

module.exports = function ProxyMetadata(instanceOrType, memberName) {
	"use strict";

	if (!(this instanceof ProxyMetadata))
		return new ProxyMetadata(instanceOrType, memberName);

	assert(instanceOrType);

	this.__typename__ = "scarlet.lib.proxies.ProxyMetadata";
	this.reflection = {};

	this.hasShadow = function() {
		return object.has(instanceOrType, "__scarlet__");
	};
	this.ensureShadow = function() {
		if (!this.hasShadow())
			instanceOrType.__scarlet__ = {};

		logger.debug(ProxyMetadata, "ensureShadow", "Shadow Object Created", [instanceOrType]);
		return this;
	};

	this.reflection.isAllowed = function() {
		var result = memberName != "__scarlet__";
		logger.debug(ProxyMetadata, "isAllowed", "Is Allowed For Proxy?", [result]);
		return result;
	};

	this.reflection.isMethod = function() {
		var result = !object.isNull(instanceOrType) && !object.isNull(memberName) && !object.isNull(instanceOrType[memberName]) && object.isFunction(instanceOrType[memberName]);
		logger.info(ProxyMetadata, "isMethod", "Is Method?", [result]);
		return result;
	};

	this.reflection.isFunction = function() {
		var result = object.isNull(memberName) && object.isFunction(instanceOrType);
		logger.info(ProxyMetadata, "isFunction", "Is Function?", [result]);
		return result;
	};

	this.reflection.isProperty = function() {
		var result = !object.isFunction(instanceOrType[memberName]);
		logger.info(ProxyMetadata, "isProperty", "Is Property?", [result]);
		return result;
	};

	this.reflection.isInstance = function() {
		this.isFunction();
		var result = object.isNull(memberName) && object.isObject(instanceOrType);
		logger.info(ProxyMetadata, "isInstance", "Is Instance?", [result]);
		return result;
	};

	this.reflection.isPrototype = function() {
		var result = object.isNull(memberName) && object.isFunction(instanceOrType) && !object.isNull(instanceOrType.prototype);
		logger.info(ProxyMetadata, "isPrototype", "Is Prototype?", [result]);
		return result;
	};

	this.reflection.hasMember = function() {
		return !object.isNull(memberName);
	};

	return this;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(22);
var assert = __webpack_require__(0);

function PluginManager() {

	"use strict";

	var self = this;
	self.directoryPath = __dirname + "/../../../";

	self.setDirectory = function(directoryPath) {
		self.directoryPath = directoryPath;
	};

	self.load = function(scarlet, pluginDirectoryPath) {
		assert(scarlet);
		var fullPath = path.normalize(self.directoryPath + pluginDirectoryPath);
		var ScarletPlugin = __webpack_require__(23)(fullPath + ""); // "" silences webpack's complaining
		var pluginObject = new ScarletPlugin(scarlet);
		pluginObject.initialize();
		return pluginObject;
	};

}

module.exports = PluginManager;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var inspect = util.inspect;
var assert = __webpack_require__(0);
var object = __webpack_require__(2);
var ll = function(val) {
	self.log(inspect(val));
};

function Logger() {

	"use strict";

	var self = this;
	self.DEBUG = 4;
	self.INFO = 3;
	self.WARN = 2;
	self.ERROR = 1;
	self.NONE = 0;
	self.logLevel = self.NONE;

	self.log = console.log;

	var getFunctionName = function(func) {

		if (typeof(func) == "string")
			return func;

		var ret = func.toString();
		ret = ret.substr("function ".length);
		ret = ret.substr(0, ret.indexOf("("));

		if (ret === "" || ret === null || typeof(ret) === "undefined")
			ret = "function<anonymous>";

		return ret;
	};

	var getParamNames = function(func) {

		var ret = "";

		if (typeof(func) === "string") {
			ret += func;
		} else if (typeof(func) !== "string") {
			ret = func.toString();
		}

		if (ret == "[object Object]")
			ret += "";

		var firstBracketIndex = ret.indexOf("(");
		var lastBracketIndex = ret.indexOf(")");

		if (firstBracketIndex === -1 || lastBracketIndex === -1)
			return [];

		ret = ret.slice(ret.indexOf("(") + 1, ret.indexOf(")"));
		return ret.split(",");
	};

	self.print = function(type, obj, func, msg, args) {

		if (args === null)
			args = "";
		else
			args = "\n" + inspect(args).replace(/\n/g, "\n");

		if (typeof(msg) == "object" || typeof(msg) == "function")
			msg = inspect(msg, {
				depth: 10,
				showHidden: true
			});

		if (typeof(func) == "string" && !object.isNull(obj) && !object.isNull(obj[func])) {
			var funcName = func;
			var actualFunc = obj[func];
			self.log(type + getFunctionName(obj) + "::" + funcName + "(" + getParamNames(actualFunc).join(",") + ") - " + msg + args + "\n");
			return;
		}

		if (!object.isNull(obj) && object.isNull(func)) {
			self.log(type + getFunctionName(func) + "(" + getParamNames(obj).join(",") + ") - " + msg + args + "\n");
			return;
		}

		if (object.isNull(obj) && !object.isNull(func)) {
			self.log(type + getFunctionName(func) + "(" + getParamNames(func).join(",") + ") - " + msg + args + "\n");
			return;
		}

		if (!object.isNull(obj) && !object.isNull(func)) {
			self.log(type + getFunctionName(obj) + "::" + getFunctionName(func) + "(" + getParamNames(func).join(",") + ") - " + msg + args + "\n");
			return;
		}
	};

	self.debug = function(obj, func, msg, args) {
		if (self.logLevel == self.DEBUG)
			self.print("DEBUG @ [" + new Date().toString() + "] -> ", obj, func, msg, args);
	};

	self.info = function(obj, func, msg, args) {
		if (self.logLevel >= self.INFO)
			self.print("INFO  @ [" + new Date().toString() + "] -> ", obj, func, msg, args);
	};

	self.warn = function(obj, func, msg, args) {
		if (self.logLevel >= self.WARN)
			self.print("WARN  @ [" + new Date().toString() + "] -> ", obj, func, msg, args);
	};

	self.error = function(obj, func, msg, args) {
		if (self.logLevel >= self.ERROR)
			self.print("ERROR @ [" + new Date().toString() + "] -> ", obj, func, msg, args);
	};

}

module.exports = new Logger();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);

module.exports = function ProxyMethod(methodThisContext, methodName) {
	"use strict";

	assert(methodName);
	assert(methodThisContext);

	var actualMethod = methodThisContext[methodName];
	this.__typename__ = "scarlet.lib.proxies.ProxyMethod";

	this.wrap = function(whenCalled) {
		assert(whenCalled);
		methodThisContext[methodName] = function() {
			var args = Array.prototype.slice.call(arguments);
			return whenCalled.call(methodThisContext,
				methodName,
				actualMethod,
				args);
		};
		return this;
	};

	this.unwrap = function() {
		methodThisContext[methodName] = actualMethod;
		return this;
	};
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);

module.exports = function ProxyProperty(properyThisContext, propertyName) {
	"use strict";

	assert(propertyName);
	assert(properyThisContext);

	var actualValue = properyThisContext[propertyName];
	this.__typename__ = "scarlet.lib.proxies.ProxyProperty";

	this.wrap = function(whenCalled) {
		assert(whenCalled);
		Object.defineProperty(
			properyThisContext,
			propertyName, {
				get: function() {
					return invokeWhenCalledForGet(whenCalled);
				},
				set: function(value) {
					invokeWhenCalledForSet(whenCalled, value);
				}
			});
		return this;
	};

	var invokeWhenCalledForGet = function(whenCalled) {
		return whenCalled.call(properyThisContext,
			propertyName,
			function() {
				return actualValue;
			});
	};

	var invokeWhenCalledForSet = function(whenCalled, value) {
		return whenCalled.call(
			properyThisContext,
			propertyName,
			function() {
				actualValue = value;
			});
	};

	this.unwrap = function() {
		delete properyThisContext[propertyName];
		properyThisContext[propertyName] = actualValue;
		return this;
	};
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var ProxyMethod = __webpack_require__(9);
var ProxyMetadata = __webpack_require__(4);
var ProxyProperty = __webpack_require__(10);
var enumerable = __webpack_require__(3);

module.exports = function ProxyInstance(instance) {
	"use strict";

	if (!(this instanceof ProxyInstance))
		return new ProxyInstance(instance);

	assert(instance);

	var proxies = [];
	this.__typename__ = "scarlet.lib.proxies.ProxyInstance";

	this.wrap = function(whenCalled) {
		assert(whenCalled);
		proxyEachInstanceMember(instance, function(proxy) {
			proxy.wrap(whenCalled);
			proxies.push(proxy);
		});
		return this;
	};

	this.unwrap = function() {
		enumerable.forEach(proxies, function(proxy) {
			proxy.unwrap();
		});
		return this;
	};

	var proxyEachInstanceMember = function(instanceToProxy, onEach) {
		if (!onEach) return;
		enumerable.forEach(instanceToProxy, function(member, memberName) {
			assert(memberName);

			var proxyMetadata = new ProxyMetadata(instanceToProxy, memberName).ensureShadow();
			if (!proxyMetadata.reflection.isAllowed()) return;

			if (proxyMetadata.reflection.isMethod())
				return onEach(new ProxyMethod(instanceToProxy, memberName));

			if (proxyMetadata.reflection.isProperty())
				return onEach(new ProxyProperty(instanceToProxy, memberName));
		});
	};
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var events = __webpack_require__(16);
var assert = __webpack_require__(0);
var logger = __webpack_require__(8);
var Interceptor = __webpack_require__(17);
var PluginManager = __webpack_require__(5);
var ScarletTrace = __webpack_require__(24);

/**
For creating a new instance of Scarlet
@namespace scarlet.lib
@method ctor
@param {array|string} pluginArr
@return scarlet.lib.Scarlet
@example
	
	var Scarlet = require("scarlet");
	var scarlet = new Scarlet();

	// A function that does addition
	function add(arg1, arg2){
		return arg1 + arg2;
	}

	// Log arguments and result of add
	add = scarlet
		.intercept(add)
		.using(function(info, method, args){
			console.log("Adding '" + args[0] + "'' and '" + args[1] + "'");
			var result = method.call(this, info, method, args);
			console.log("Result is '" + result + "'");
			return result;
		}).proxy();

	add(1,2); // Output -> Adding '1' and '2'\n Result is '3'
	add(3,5); // Output -> Adding '3' and '5'\n Result is '8'
*/
function Scarlet(pluginArr) {

	"use strict";

	if (!(this instanceof Scarlet))
		return new Scarlet(pluginArr);

	var interceptor = null;
	var pluginManager = new PluginManager();

	var self = this;
	self.plugins = {};
	self.__typename__ = "scarlet.lib.Scarlet";

	/**
		Method for proxying types, functions and instances
		@method intercept
		@param {object} typeOrInstance
		@return {scarlet.lib.Scarlet}
		@chainable
		@example

			var Scarlet = require("scarlet");
			var scarlet = new Scarlet();

			// Type for that we would like to intercept
			function MyClass(){
				var self = this;
				self.myMethod = function(arg1, arg2){
					return arg1 + arg2;
				};
			}

			// First instantiate the type
			var instance = new MyClass();

			// Scarlet will only intercept the instance
			instance = scarlet
				.intercept(instance)
				.using(function(info, method, args){
					return method.call(this, info, method, args);
				}).proxy();

			// Invoke
			var result = instance.myMethod(1,2);
	*/
	self.intercept = function(typeOrInstance, memberName) {
		assert(typeOrInstance, "Please make sure you supply a typeOrInstance parameter. eg. scarlet.intercept(MyFunc, scarlet.type.asInstance());");

		logger.info(Scarlet, "intercept", "For Type Or Instance", [typeOrInstance]);
		interceptor = new Interceptor();
		interceptor.observable = typeOrInstance;
		interceptor.intercept(typeOrInstance,
			memberName,
			function(observable) {
				interceptor.observable = observable;
			});
		interceptor.using(self.beforeEventEmitterInterceptor);
		return self;
	};

	/**
		Method for chaining interceptors onto a proxied type or function
		@method using
		@param {Function} callback
		@return {scarlet.lib.Scarlet}
		@chainable
		@example

			var Scarlet = require("scarlet");
			var scarlet = new Scarlet();

			// Type for that we would like to intercept
			function MyClass(){
				var self = this;
				self.myMethod = function(arg1, arg2){
					return arg1 + arg2;
				};
			}

			// First instantiate the type
			var instance = new MyClass();

			// Scarlet will only intercept the instance
			instance = scarlet
				.intercept(instance)
				.using(function(info, method, args){ // Interceptor 1
					return method.call(this, info, method, args);
				})
				.using(function(info, method, args){ // Interceptor 2
					return method.call(this, info, method, args);
				})
				.using(function(info, method, args){ // Interceptor 3
					return method.call(this, info, method, args);
				}).proxy();

			// Invoke
			var result = instance.myMethod(1,2);
	*/
	self.using = function(callback) {
		assert(callback);
		assert(interceptor);
		logger.info(Scarlet, "using", "Using Interceptor", [callback]);
		interceptor.using(callback);
		return self;
	};

	self.beforeEventEmitterInterceptor = function(info, proceed) {
		assert(interceptor);
		self.emit("before", info);
		proceed();
	};


	self.afterEventEmitterInterceptor = function(error, info, proceed) {
		assert(interceptor);
		if (error !== undefined && error !== null) {
			info.error = error;
			self.emit("error", info);
			throw error;
		}

		var result = null;
		try {
			result = proceed();
			self.emit("after", info);
		} catch (exception) {
			info.error = exception;
			self.emit("error", info);
			throw exception;
		}
		self.emit("done", info);
		return result;
	};

	/**
		Method for retrieving a reference to a proxy type, this is for types that need to be instantiated using 'new'
		@method proxy
		@return {Object}
	*/
	self.proxy = function() {
		assert(interceptor);
		assert(interceptor.observable);
		logger.info(Scarlet, "proxy", "As Proxied Type Or Instance", [interceptor.observable]);
		interceptor.using(self.afterEventEmitterInterceptor);
		return interceptor.observable;
	};

	/**
		Method for loading a plugin into scarlet
		@param {String} pluginPath
		@method load
		@return {scarlet.lib.Scarlet}
	*/
	self.load = function(pluginPath) {
		assert(pluginPath);
		pluginManager.load(self, pluginPath);
		return self;
	};

	self.interceptQuery = function(proceed, info) {
		return new ScarletTrace(proceed, info);
	};

	var initializePlugins = function() {
		if (typeof(pluginArr) === "string")
			pluginArr = [pluginArr];
		if (pluginArr) {
			if (pluginArr.length) {
				pluginArr.forEach(function(plugin) {
					self.load(plugin);
				});
			}
		}
	};

	self.on("error", function(error) {
		logger.error(Scarlet, "Event", "error event", [error]);
	});

	initializePlugins();

	events.EventEmitter.call(self);
}

util.inherits(Scarlet, events.EventEmitter);

module.exports = Scarlet;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var Invocation = __webpack_require__(18);
var enumerable = __webpack_require__(3);
var ProxyInterceptor = __webpack_require__(19);

module.exports = function Interceptor() {
	"use strict";

	var self = this;
	self.proxy = null;
	self.interceptors = [];
	self.__typename__ = "scarlet.lib.interceptors.Interceptor";

	self.intercept = function(typeOrInstance, memberName, replaceTypeCallback) {
		assert(typeOrInstance);
		assert(replaceTypeCallback);
		self.proxy = new ProxyInterceptor(typeOrInstance, memberName);
		self.proxy.intercept(whenProxyCalled, replaceTypeCallback);
		return self;
	};

	self.using = function(interceptor) {
		assert(self.proxy, "Please make sure you are intercepting something first");
		self.interceptors.push(interceptor);
		return self;
	};

	var whenProxyCalled = function(invocationName, invocationMethod, args) {
		assert(self.interceptors.length > 0, "Please make sure you add an interceptor");
		var thisContext = this;
		var invocation = new Invocation(thisContext, invocationName, invocationMethod, args);
		callEachInterceptor(thisContext,
			invocation,
			function(error, interceptorResults) {
				if (error) throw error;
				invocation.result = invocation.proceed();
				if (interceptorResults.length > 0)
					invocation.result = interceptorResults[interceptorResults.length - 1];
				return invocation.result;
			});
		return invocation.result;
	};

	var callEachInterceptor = function(thisContext, invocation, onAllCalled) {
		enumerable.mapSeries(self.interceptors,
			function(error, nextInterceptor, callback) {
				if (error && numberOfParameters(nextInterceptor) < 3)
					return callback(error);
				if (numberOfParameters(nextInterceptor) === 1)
					return nextInterceptor.call(thisContext, callback);
				if (numberOfParameters(nextInterceptor) === 2)
					return nextInterceptor.call(thisContext, invocation, callback);
				return nextInterceptor.call(thisContext, error, invocation, callback);
			},
			onAllCalled);
	};
};

var numberOfParameters = function(functionWithParameters) {
	if (typeof functionWithParameters !== "function")
		return 0;

	return functionWithParameters.length;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var objectExt = __webpack_require__(2);

module.exports = function Invocation(context, invocationName, invocationMethod, args) {
	"use strict";

	assert(invocationMethod, "invocationMethod == null");

	var self = this;
	
	if (!args)
		args = [];

	/**
	 * The original arguments passed into the function being intercepted
	 *
	 * @category Invocation Attributes
	 * @type {Object} - the argument object based into objects
	 */
	self.args = args;

	/**
	 * The reference to self for the original/called methd
	 *
	 * @category Invocation Attributes
	 * @type {Object}
	 */
	self.context = context;

	/**
	 * The result of the method being intercepted
	 *
	 * @category Invocation Attributes
	 * @type {Any}
	 */
	self.result = null;

	/**
	 * The method being intercepted
	 *
	 * @category Invocation Attributes
	 * @type {Function}
	 */
	self.method = invocationMethod;

	/**
	 * Gets the name of the intercepted context
	 *
	 * @category Invocation Attributes
	 * @type {String}
	 */
	self.contextName = function() {
		return objectExt.name(self.context);
	};

	/**
	 * Gets the name of the intercepted member
	 *
	 * @category Invocation Attributes
	 * @type {String}
	 */
	self.memberName = function() {
		if (invocationName)
			return invocationName;
		return objectExt.name(self.method);
	};

	/**
	 * The start date time when the method was invoked
	 *
	 * @category Invocation Attributes
	 * @type {Date}
	 */
	self.executionStartDate = null;

	/**
	 * The end date time when the method was invoked
	 *
	 * @category Invocation Attributes
	 * @type {Date}
	 */
	self.executionEndDate = null;

	/**
	 * Calls the intercepted method
	 *
	 * @category Invocation Attributes
	 * @method proceed
	 * @return Function|Object of the result of the original method call
	 */
	self.proceed = function() {
		var parameters = Array.prototype.slice.call(self.args);
		self.executionStartDate = new Date();
		self.result = self.method.apply(self.context, parameters);
		self.executionEndDate = new Date();
		return self.result;
	};
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);
var ProxyMethod = __webpack_require__(9);
var proxyMetadata = __webpack_require__(4);
var ProxyProperty = __webpack_require__(10);
var ProxyInstance = __webpack_require__(11);
var ProxyFunction = __webpack_require__(20);
var ProxyPrototype = __webpack_require__(21);

module.exports = function ProxyInterceptor(typeOrInstance, memberName) {
	"use strict";

	assert(typeOrInstance);

	this.proxy = null;
	this.__typename__ = "scarlet.lib.proxies.ProxyInterceptor";

	this.intercept = function(whenCalledCallback, replaceClassCallback) {
		assert(whenCalledCallback);
		assert(replaceClassCallback);

		proxyMetadata(typeOrInstance, memberName).ensureShadow();
		this.proxy = proxyForTypeOrInstance().wrap(whenCalledCallback, replaceClassCallback);
	};

	this.release = function() {
		if (this.proxy)
			this.proxy.unwrap();
	};

	var proxyForTypeOrInstance = function() {
		if (memberName)
			return proxyForMember();
		if (typeOrInstance.prototype)
			return new ProxyPrototype(typeOrInstance);
		if (typeof typeOrInstance === "function")
			return new ProxyFunction(typeOrInstance);
		return new ProxyInstance(typeOrInstance);
	};

	var proxyForMember = function() {
		if (!memberName) return;

		if (typeof typeOrInstance[memberName] === "function")
			return new ProxyMethod(typeOrInstance, memberName);

		return new ProxyProperty(typeOrInstance, memberName);
	};
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);

module.exports = function ProxyFunction(actualFunction) {
	"use strict";

	assert(actualFunction);
	this.__typename__ = "scarlet.lib.proxies.ProxyFunction";

	this.wrap = function(whenCalled, replaceFunctionCallback) {
		assert(whenCalled);

		var proxiedFunction = function() {
			var args = Array.prototype.slice.call(arguments);
			return whenCalled.call(this,
				actualFunction.name,
				actualFunction,
				args);
		};

		if (replaceFunctionCallback)
			replaceFunctionCallback(proxiedFunction);

		return this;
	};

	this.unwrap = function() {
		return actualFunction;
	};

};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1);
var assert = __webpack_require__(0);
var object = __webpack_require__(2);
var proxyMetadata = __webpack_require__(4);
var proxyInstance = __webpack_require__(11);
var enumerable = __webpack_require__(3);

module.exports = function ProxyPrototype(type) {
	"use strict";

	assert(type);
	assert(type.prototype);

	var self = this;
	self.whenCalled = null;
	self.__typename__ = "scarlet.lib.proxies.ProxyPrototype";

	self.wrap = function(whenCalled, replaceClassCallback) {
		assert(whenCalled);
		self.whenCalled = whenCalled;
		util.inherits(inheritor, type);

		if (replaceClassCallback)
			replaceClassCallback(inheritor);
		return self;
	};

	self.unwrap = function() {
		return type;
	};

	var inheritor = function() {
		var thisContext = this || {};
		var callArguments = Array.prototype.slice.call(arguments);
		var proceed = buildProceed(thisContext);
		return self.whenCalled.call(
			type.name,
			thisContext,
			proceed,
			callArguments);
	};

	var buildProceed = function(thisContext) {
		return function() {
			var callArguments = Array.prototype.slice.call(arguments);
			var result = type.apply(thisContext, callArguments);
			initializeShadow(thisContext);
			return result;
		};
	};

	var initializeShadow = function(thisContext) {
		if (proxyMetadata(thisContext).hasShadow())
			return;

		proxyMetadata(thisContext).ensureShadow();
		if (!object.objectHasFunction(thisContext, inheritor))
			proxyInstance(thisContext).wrap(self.whenCalled);
	};
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./plugin-manager": 5,
	"./plugin-manager.js": 5
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 23;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var assert = __webpack_require__(0);

var ScarletTrace = function(proceed, info) {
	"use strict";

	assert(info, "info=null");
	assert(proceed, "proceed=null");

	var self = this;
	self.args = info.args;
	self.result = info.result;
	self.memberName = info.memberName;
	self.hasResult = typeof(info.result) !== "undefined";
	self.hasArgs = typeof(info.args) !== "undefined";
	self.argsEmpty = info.args !== null && typeof(info.args) !== "undefined" && info.args.length === 0;

	self.traceTo = function(io) {
		var formattedResult = (!self.hasResult) ? "void" : info.result;
		var formattedName = (!info.memberName) ? "" : info.memberName;
		var formattedArgs = ((!self.hasArgs) || (self.argsEmpty)) ? "" : JSON.stringify(info.args);
		io(formattedName + "(" + formattedArgs + "):" + formattedResult);
	};
};

module.exports = ScarletTrace;

/***/ })
/******/ ]);
});