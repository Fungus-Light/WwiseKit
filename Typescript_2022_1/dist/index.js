var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/object.js
var require_object = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/object.js"() {
    if (!Object.create) {
      Object.create = function() {
        function F() {
        }
        return function(o) {
          if (arguments.length != 1) {
            throw new Error("Object.create implementation only accepts one parameter.");
          }
          F.prototype = o;
          return new F();
        };
      }();
    }
    if (!Object.keys) {
      Object.keys = function() {
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"), dontEnums = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor"
        ], dontEnumsLength = dontEnums.length;
        return function(obj) {
          if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
            throw new TypeError("Object.keys called on non-object");
          }
          var result = [], prop, i;
          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }
          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }
          return result;
        };
      }();
    }
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/array.js
var require_array = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/array.js"() {
    if ("function" !== typeof Array.prototype.reduce) {
      Array.prototype.reduce = function(callback) {
        "use strict";
        var len, t, value, k;
        if (null === this || "undefined" === typeof this) {
          throw new TypeError(
            "Array.prototype.reduce called on null or undefined"
          );
        }
        if ("function" !== typeof callback) {
          throw new TypeError(callback + " is not a function");
        }
        t = Object(this);
        len = t.length >>> 0;
        k = 0;
        if (arguments.length >= 2) {
          value = arguments[1];
        } else {
          while (k < len && !k in t)
            k++;
          if (k >= len)
            throw new TypeError("Reduce of empty array with no initial value");
          value = t[k++];
        }
        for (; k < len; k++) {
          if (k in t) {
            value = callback(value, t[k], k, t);
          }
        }
        return value;
      };
    }
    if (!("indexOf" in Array.prototype)) {
      Array.prototype.indexOf = function(find, i) {
        if (i === void 0)
          i = 0;
        if (i < 0)
          i += this.length;
        if (i < 0)
          i = 0;
        for (var n = this.length; i < n; i++)
          if (i in this && this[i] === find)
            return i;
        return -1;
      };
    }
    if (!("lastIndexOf" in Array.prototype)) {
      Array.prototype.lastIndexOf = function(find, i) {
        if (i === void 0)
          i = this.length - 1;
        if (i < 0)
          i += this.length;
        if (i > this.length - 1)
          i = this.length - 1;
        for (i++; i-- > 0; )
          if (i in this && this[i] === find)
            return i;
        return -1;
      };
    }
    if (!("forEach" in Array.prototype)) {
      Array.prototype.forEach = function(action, that) {
        for (var i = 0, n = this.length; i < n; i++)
          if (i in this)
            action.call(that, this[i], i, this);
      };
    }
    if (!("map" in Array.prototype)) {
      Array.prototype.map = function(mapper, that) {
        var other = new Array(this.length);
        for (var i = 0, n = this.length; i < n; i++)
          if (i in this)
            other[i] = mapper.call(that, this[i], i, this);
        return other;
      };
    }
    if (!("filter" in Array.prototype)) {
      Array.prototype.filter = function(filter, that) {
        var other = [], v;
        for (var i = 0, n = this.length; i < n; i++)
          if (i in this && filter.call(that, v = this[i], i, this))
            other.push(v);
        return other;
      };
    }
    if (!("every" in Array.prototype)) {
      Array.prototype.every = function(tester, that) {
        for (var i = 0, n = this.length; i < n; i++)
          if (i in this && !tester.call(that, this[i], i, this))
            return false;
        return true;
      };
    }
    if (!("some" in Array.prototype)) {
      Array.prototype.some = function(tester, that) {
        for (var i = 0, n = this.length; i < n; i++)
          if (i in this && tester.call(that, this[i], i, this))
            return true;
        return false;
      };
    }
    if ("function" !== typeof Array.prototype.reduceRight) {
      Array.prototype.reduceRight = function(callback) {
        "use strict";
        if (null === this || "undefined" === typeof this) {
          throw new TypeError(
            "Array.prototype.reduce called on null or undefined"
          );
        }
        if ("function" !== typeof callback) {
          throw new TypeError(callback + " is not a function");
        }
        var t = Object(this), len = t.length >>> 0, k = len - 1, value;
        if (arguments.length >= 2) {
          value = arguments[1];
        } else {
          while (k >= 0 && !k in t)
            k--;
          if (k < 0)
            throw new TypeError("Reduce of empty array with no initial value");
          value = t[k--];
        }
        for (; k >= 0; k--) {
          if (k in t) {
            value = callback(value, t[k], k, t);
          }
        }
        return value;
      };
    }
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/string.js
var require_string = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/string.js"() {
    if (!("trim" in String.prototype)) {
      String.prototype.trim = function() {
        return this.replace(/^\s+/, "").replace(/\s+$/, "");
      };
    }
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/function.js
var require_function = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/function.js"() {
    if (!Function.prototype.bind) {
      Function.prototype.bind = function(context) {
        var fn = this, args = Array.prototype.slice.call(arguments, 1);
        return function() {
          return fn.apply(context, Array.prototype.concat.apply(args, arguments));
        };
      };
    }
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/console.js
var require_console = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/console.js"() {
    (function(console2) {
      console2 || (console2 = window.console = {
        log: function(a, b, c, d, e) {
        },
        info: function(a, b, c, d, e) {
        },
        warn: function(a, b, c, d, e) {
        },
        error: function(a, b, c, d, e) {
        },
        assert: function(test, message) {
        }
      });
      if (typeof console2.log === "object") {
        console2.log = Function.prototype.call.bind(console2.log, console2);
        console2.info = Function.prototype.call.bind(console2.info, console2);
        console2.warn = Function.prototype.call.bind(console2.warn, console2);
        console2.error = Function.prototype.call.bind(console2.error, console2);
        console2.debug = Function.prototype.call.bind(console2.info, console2);
      }
      "group" in console2 || (console2.group = function(msg) {
        console2.info("\n--- " + msg + " ---\n");
      });
      "groupEnd" in console2 || (console2.groupEnd = function() {
        console2.log("\n");
      });
      "assert" in console2 || (console2.assert = function(test, message) {
        if (!test) {
          try {
            throw new Error("assertion failed: " + message);
          } catch (error) {
            setTimeout(function() {
              throw error;
            }, 0);
          }
        }
      });
      "time" in console2 || function() {
        var trackedTimes = {};
        console2.time = function(msg) {
          trackedTimes[msg] = new Date().getTime();
        };
        console2.timeEnd = function(msg) {
          var end = new Date().getTime(), time = msg in trackedTimes ? end - trackedTimes[msg] : 0;
          console2.info(msg + ": " + time + "ms");
        };
      }();
    })(typeof console !== "undefined" ? console : void 0);
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/typedarray.js
var require_typedarray = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/typedarray.js"(exports2) {
    if (typeof Uint8Array === "undefined") {
      (function(global2, win) {
        "use strict";
        var undefined2 = void 0;
        var MAX_ARRAY_LENGTH = 1e5;
        function Type(v) {
          switch (typeof v) {
            case "undefined":
              return "undefined";
            case "boolean":
              return "boolean";
            case "number":
              return "number";
            case "string":
              return "string";
            default:
              return v === null ? "null" : "object";
          }
        }
        function Class(v) {
          return Object.prototype.toString.call(v).replace(/^\[object *|\]$/g, "");
        }
        function IsCallable(o) {
          return typeof o === "function";
        }
        function ToObject(v) {
          if (v === null || v === undefined2)
            throw TypeError();
          return Object(v);
        }
        function ToInt32(v) {
          return v >> 0;
        }
        function ToUint32(v) {
          return v >>> 0;
        }
        var LN2 = Math.LN2, abs = Math.abs, floor = Math.floor, log = Math.log, max = Math.max, min = Math.min, pow = Math.pow, round = Math.round;
        (function() {
          var orig = Object.defineProperty;
          var dom_only = !function() {
            try {
              return Object.defineProperty({}, "x", {});
            } catch (_) {
              return false;
            }
          }();
          if (!orig || dom_only) {
            Object.defineProperty = function(o, prop, desc) {
              if (orig) {
                try {
                  return orig(o, prop, desc);
                } catch (_) {
                }
              }
              if (o !== Object(o))
                throw TypeError("Object.defineProperty called on non-object");
              if (Object.prototype.__defineGetter__ && "get" in desc)
                Object.prototype.__defineGetter__.call(o, prop, desc.get);
              if (Object.prototype.__defineSetter__ && "set" in desc)
                Object.prototype.__defineSetter__.call(o, prop, desc.set);
              if ("value" in desc)
                o[prop] = desc.value;
              return o;
            };
          }
        })();
        function makeArrayAccessors(obj) {
          if (obj.length > MAX_ARRAY_LENGTH)
            throw RangeError("Array too large for polyfill");
          function makeArrayAccessor(index) {
            Object.defineProperty(obj, index, {
              "get": function() {
                return obj._getter(index);
              },
              "set": function(v) {
                obj._setter(index, v);
              },
              enumerable: true,
              configurable: false
            });
          }
          var i;
          for (i = 0; i < obj.length; i += 1) {
            makeArrayAccessor(i);
          }
        }
        function as_signed(value, bits) {
          var s = 32 - bits;
          return value << s >> s;
        }
        function as_unsigned(value, bits) {
          var s = 32 - bits;
          return value << s >>> s;
        }
        function packI8(n) {
          return [n & 255];
        }
        function unpackI8(bytes) {
          return as_signed(bytes[0], 8);
        }
        function packU8(n) {
          return [n & 255];
        }
        function unpackU8(bytes) {
          return as_unsigned(bytes[0], 8);
        }
        function packU8Clamped(n) {
          n = round(Number(n));
          return [n < 0 ? 0 : n > 255 ? 255 : n & 255];
        }
        function packI16(n) {
          return [n >> 8 & 255, n & 255];
        }
        function unpackI16(bytes) {
          return as_signed(bytes[0] << 8 | bytes[1], 16);
        }
        function packU16(n) {
          return [n >> 8 & 255, n & 255];
        }
        function unpackU16(bytes) {
          return as_unsigned(bytes[0] << 8 | bytes[1], 16);
        }
        function packI32(n) {
          return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255];
        }
        function unpackI32(bytes) {
          return as_signed(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32);
        }
        function packU32(n) {
          return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, n & 255];
        }
        function unpackU32(bytes) {
          return as_unsigned(bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], 32);
        }
        function packIEEE754(v, ebits, fbits) {
          var bias = (1 << ebits - 1) - 1, s, e, f2, ln, i, bits, str2, bytes;
          function roundToEven(n) {
            var w = floor(n), f3 = n - w;
            if (f3 < 0.5)
              return w;
            if (f3 > 0.5)
              return w + 1;
            return w % 2 ? w + 1 : w;
          }
          if (v !== v) {
            e = (1 << ebits) - 1;
            f2 = pow(2, fbits - 1);
            s = 0;
          } else if (v === Infinity || v === -Infinity) {
            e = (1 << ebits) - 1;
            f2 = 0;
            s = v < 0 ? 1 : 0;
          } else if (v === 0) {
            e = 0;
            f2 = 0;
            s = 1 / v === -Infinity ? 1 : 0;
          } else {
            s = v < 0;
            v = abs(v);
            if (v >= pow(2, 1 - bias)) {
              e = min(floor(log(v) / LN2), 1023);
              f2 = roundToEven(v / pow(2, e) * pow(2, fbits));
              if (f2 / pow(2, fbits) >= 2) {
                e = e + 1;
                f2 = 1;
              }
              if (e > bias) {
                e = (1 << ebits) - 1;
                f2 = 0;
              } else {
                e = e + bias;
                f2 = f2 - pow(2, fbits);
              }
            } else {
              e = 0;
              f2 = roundToEven(v / pow(2, 1 - bias - fbits));
            }
          }
          bits = [];
          for (i = fbits; i; i -= 1) {
            bits.push(f2 % 2 ? 1 : 0);
            f2 = floor(f2 / 2);
          }
          for (i = ebits; i; i -= 1) {
            bits.push(e % 2 ? 1 : 0);
            e = floor(e / 2);
          }
          bits.push(s ? 1 : 0);
          bits.reverse();
          str2 = bits.join("");
          bytes = [];
          while (str2.length) {
            bytes.push(parseInt(str2.substring(0, 8), 2));
            str2 = str2.substring(8);
          }
          return bytes;
        }
        function unpackIEEE754(bytes, ebits, fbits) {
          var bits = [], i, j2, b, str2, bias, s, e, f2;
          for (i = bytes.length; i; i -= 1) {
            b = bytes[i - 1];
            for (j2 = 8; j2; j2 -= 1) {
              bits.push(b % 2 ? 1 : 0);
              b = b >> 1;
            }
          }
          bits.reverse();
          str2 = bits.join("");
          bias = (1 << ebits - 1) - 1;
          s = parseInt(str2.substring(0, 1), 2) ? -1 : 1;
          e = parseInt(str2.substring(1, 1 + ebits), 2);
          f2 = parseInt(str2.substring(1 + ebits), 2);
          if (e === (1 << ebits) - 1) {
            return f2 !== 0 ? NaN : s * Infinity;
          } else if (e > 0) {
            return s * pow(2, e - bias) * (1 + f2 / pow(2, fbits));
          } else if (f2 !== 0) {
            return s * pow(2, -(bias - 1)) * (f2 / pow(2, fbits));
          } else {
            return s < 0 ? -0 : 0;
          }
        }
        function unpackF64(b) {
          return unpackIEEE754(b, 11, 52);
        }
        function packF64(v) {
          return packIEEE754(v, 11, 52);
        }
        function unpackF32(b) {
          return unpackIEEE754(b, 8, 23);
        }
        function packF32(v) {
          return packIEEE754(v, 8, 23);
        }
        (function() {
          function ArrayBuffer2(length) {
            length = ToInt32(length);
            if (length < 0)
              throw RangeError("ArrayBuffer size is not a small enough positive integer.");
            Object.defineProperty(this, "byteLength", { value: length });
            Object.defineProperty(this, "_bytes", { value: Array(length) });
            for (var i = 0; i < length; i += 1)
              this._bytes[i] = 0;
          }
          global2.ArrayBuffer = global2.ArrayBuffer || ArrayBuffer2;
          function $TypedArray$() {
            if (!arguments.length || typeof arguments[0] !== "object") {
              return function(length) {
                length = ToInt32(length);
                if (length < 0)
                  throw RangeError("length is not a small enough positive integer.");
                Object.defineProperty(this, "length", { value: length });
                Object.defineProperty(this, "byteLength", { value: length * this.BYTES_PER_ELEMENT });
                Object.defineProperty(this, "buffer", { value: new ArrayBuffer2(this.byteLength) });
                Object.defineProperty(this, "byteOffset", { value: 0 });
              }.apply(this, arguments);
            }
            if (arguments.length >= 1 && Type(arguments[0]) === "object" && arguments[0] instanceof $TypedArray$) {
              return function(typedArray) {
                if (this.constructor !== typedArray.constructor)
                  throw TypeError();
                var byteLength = typedArray.length * this.BYTES_PER_ELEMENT;
                Object.defineProperty(this, "buffer", { value: new ArrayBuffer2(byteLength) });
                Object.defineProperty(this, "byteLength", { value: byteLength });
                Object.defineProperty(this, "byteOffset", { value: 0 });
                Object.defineProperty(this, "length", { value: typedArray.length });
                for (var i = 0; i < this.length; i += 1)
                  this._setter(i, typedArray._getter(i));
              }.apply(this, arguments);
            }
            if (arguments.length >= 1 && Type(arguments[0]) === "object" && !(arguments[0] instanceof $TypedArray$) && !(arguments[0] instanceof ArrayBuffer2 || Class(arguments[0]) === "ArrayBuffer")) {
              return function(array) {
                var byteLength = array.length * this.BYTES_PER_ELEMENT;
                Object.defineProperty(this, "buffer", { value: new ArrayBuffer2(byteLength) });
                Object.defineProperty(this, "byteLength", { value: byteLength });
                Object.defineProperty(this, "byteOffset", { value: 0 });
                Object.defineProperty(this, "length", { value: array.length });
                for (var i = 0; i < this.length; i += 1) {
                  var s = array[i];
                  this._setter(i, Number(s));
                }
              }.apply(this, arguments);
            }
            if (arguments.length >= 1 && Type(arguments[0]) === "object" && (arguments[0] instanceof ArrayBuffer2 || Class(arguments[0]) === "ArrayBuffer")) {
              return function(buffer, byteOffset, length) {
                byteOffset = ToUint32(byteOffset);
                if (byteOffset > buffer.byteLength)
                  throw RangeError("byteOffset out of range");
                if (byteOffset % this.BYTES_PER_ELEMENT)
                  throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.");
                if (length === undefined2) {
                  var byteLength = buffer.byteLength - byteOffset;
                  if (byteLength % this.BYTES_PER_ELEMENT)
                    throw RangeError("length of buffer minus byteOffset not a multiple of the element size");
                  length = byteLength / this.BYTES_PER_ELEMENT;
                } else {
                  length = ToUint32(length);
                  byteLength = length * this.BYTES_PER_ELEMENT;
                }
                if (byteOffset + byteLength > buffer.byteLength)
                  throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
                Object.defineProperty(this, "buffer", { value: buffer });
                Object.defineProperty(this, "byteLength", { value: byteLength });
                Object.defineProperty(this, "byteOffset", { value: byteOffset });
                Object.defineProperty(this, "length", { value: length });
              }.apply(this, arguments);
            }
            throw TypeError();
          }
          Object.defineProperty($TypedArray$, "from", { value: function(iterable) {
            return new this(iterable);
          } });
          Object.defineProperty($TypedArray$, "of", { value: function() {
            return new this(arguments);
          } });
          var $TypedArrayPrototype$ = {};
          $TypedArray$.prototype = $TypedArrayPrototype$;
          Object.defineProperty($TypedArray$.prototype, "_getter", { value: function(index) {
            if (arguments.length < 1)
              throw SyntaxError("Not enough arguments");
            index = ToUint32(index);
            if (index >= this.length)
              return undefined2;
            var bytes = [], i, o;
            for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT; i < this.BYTES_PER_ELEMENT; i += 1, o += 1) {
              bytes.push(this.buffer._bytes[o]);
            }
            return this._unpack(bytes);
          } });
          Object.defineProperty($TypedArray$.prototype, "get", { value: $TypedArray$.prototype._getter });
          Object.defineProperty($TypedArray$.prototype, "_setter", { value: function(index, value) {
            if (arguments.length < 2)
              throw SyntaxError("Not enough arguments");
            index = ToUint32(index);
            if (index >= this.length)
              return;
            var bytes = this._pack(value), i, o;
            for (i = 0, o = this.byteOffset + index * this.BYTES_PER_ELEMENT; i < this.BYTES_PER_ELEMENT; i += 1, o += 1) {
              this.buffer._bytes[o] = bytes[i];
            }
          } });
          Object.defineProperty($TypedArray$.prototype, "constructor", { value: $TypedArray$ });
          Object.defineProperty($TypedArray$.prototype, "copyWithin", { value: function(m_target, m_start) {
            var m_end = arguments[2];
            var m_o = ToObject(this);
            var lenVal = m_o.length;
            var m_len = ToUint32(lenVal);
            m_len = max(m_len, 0);
            var relativeTarget = ToInt32(m_target);
            var m_to;
            if (relativeTarget < 0) {
              m_to = max(m_len + relativeTarget, 0);
            } else {
              m_to = min(relativeTarget, m_len);
            }
            var relativeStart = ToInt32(m_start);
            var m_from;
            if (relativeStart < 0) {
              m_from = max(m_len + relativeStart, 0);
            } else {
              m_from = min(relativeStart, m_len);
            }
            var relativeEnd;
            if (m_end === undefined2) {
              relativeEnd = m_len;
            } else {
              relativeEnd = ToInt32(m_end);
            }
            var m_final;
            if (relativeEnd < 0) {
              m_final = max(m_len + relativeEnd, 0);
            } else {
              m_final = min(relativeEnd, m_len);
            }
            var m_count = min(m_final - m_from, m_len - m_to);
            var direction;
            if (from < m_to && m_to < m_from + m_count) {
              direction = -1;
              m_from = m_from + m_count - 1;
              m_to = m_to + m_count - 1;
            } else {
              direction = 1;
            }
            while (count > 0) {
              m_o._setter(m_to, m_o._getter(m_from));
              m_from = m_from + direction;
              m_to = m_to + direction;
              m_count = m_count - 1;
            }
            return m_o;
          } });
          Object.defineProperty($TypedArray$.prototype, "every", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            var thisArg = arguments[1];
            for (var i = 0; i < len; i++) {
              if (!callbackfn.call(thisArg, t._getter(i), i, t))
                return false;
            }
            return true;
          } });
          Object.defineProperty($TypedArray$.prototype, "fill", { value: function(value) {
            var m_start = arguments[1], m_end = arguments[2];
            var m_o = ToObject(this);
            var lenVal = m_o.length;
            var m_len = ToUint32(lenVal);
            m_len = max(m_len, 0);
            var relativeStart = ToInt32(m_start);
            var m_k;
            if (relativeStart < 0) {
              m_k = max(m_len + relativeStart, 0);
            } else {
              m_k = min(relativeStart, m_len);
            }
            var relativeEnd;
            if (m_end === undefined2) {
              relativeEnd = m_len;
            } else {
              relativeEnd = ToInt32(m_end);
            }
            var m_final;
            if (relativeEnd < 0) {
              m_final = max(m_len + relativeEnd, 0);
            } else {
              m_final = min(relativeEnd, m_len);
            }
            while (m_k < m_final) {
              m_o._setter(m_k, value);
              m_k += 1;
            }
            return m_o;
          } });
          Object.defineProperty($TypedArray$.prototype, "filter", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            var res = [];
            var thisp = arguments[1];
            for (var i = 0; i < len; i++) {
              var val = t._getter(i);
              if (callbackfn.call(thisp, val, i, t))
                res.push(val);
            }
            return new this.constructor(res);
          } });
          Object.defineProperty($TypedArray$.prototype, "find", { value: function(predicate) {
            var o = ToObject(this);
            var lenValue = o.length;
            var len = ToUint32(lenValue);
            if (!IsCallable(predicate))
              throw TypeError();
            var t = arguments.length > 1 ? arguments[1] : undefined2;
            var k = 0;
            while (k < len) {
              var kValue = o._getter(k);
              var testResult = predicate.call(t, kValue, k, o);
              if (Boolean(testResult))
                return kValue;
              ++k;
            }
            return undefined2;
          } });
          Object.defineProperty($TypedArray$.prototype, "findIndex", { value: function(predicate) {
            var o = ToObject(this);
            var lenValue = o.length;
            var len = ToUint32(lenValue);
            if (!IsCallable(predicate))
              throw TypeError();
            var t = arguments.length > 1 ? arguments[1] : undefined2;
            var k = 0;
            while (k < len) {
              var kValue = o._getter(k);
              var testResult = predicate.call(t, kValue, k, o);
              if (Boolean(testResult))
                return k;
              ++k;
            }
            return -1;
          } });
          Object.defineProperty($TypedArray$.prototype, "forEach", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            var thisp = arguments[1];
            for (var i = 0; i < len; i++)
              callbackfn.call(thisp, t._getter(i), i, t);
          } });
          Object.defineProperty($TypedArray$.prototype, "indexOf", { value: function(searchElement) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (len === 0)
              return -1;
            var no = 0;
            var na;
            if (arguments.length > 0) {
              na = Number(arguments[1]);
              if (na !== no) {
                no = 0;
              } else if (na !== 0 && na !== 1 / 0 && na !== -(1 / 0)) {
                no = (na > 0 || -1) * floor(abs(na));
              }
            }
            if (no >= len)
              return -1;
            var k = no >= 0 ? no : max(len - abs(no), 0);
            for (; k < len; k++) {
              if (t._getter(k) === searchElement) {
                return k;
              }
            }
            return -1;
          } });
          Object.defineProperty($TypedArray$.prototype, "join", { value: function(separator) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            var tmp = Array(len);
            for (var i = 0; i < len; ++i)
              tmp[i] = t._getter(i);
            return tmp.join(separator === undefined2 ? "," : separator);
          } });
          Object.defineProperty($TypedArray$.prototype, "lastIndexOf", { value: function(searchElement) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (len === 0)
              return -1;
            var n = len;
            if (arguments.length > 1) {
              n = Number(arguments[1]);
              if (n !== n) {
                n = 0;
              } else if (n !== 0 && n !== 1 / 0 && n !== -(1 / 0)) {
                n = (n > 0 || -1) * floor(abs(n));
              }
            }
            var k = n >= 0 ? min(n, len - 1) : len - abs(n);
            for (; k >= 0; k--) {
              if (t._getter(k) === searchElement)
                return k;
            }
            return -1;
          } });
          Object.defineProperty($TypedArray$.prototype, "map", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            var res = [];
            res.length = len;
            var thisp = arguments[1];
            for (var i = 0; i < len; i++)
              res[i] = callbackfn.call(thisp, t._getter(i), i, t);
            return new this.constructor(res);
          } });
          Object.defineProperty($TypedArray$.prototype, "reduce", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            if (len === 0 && arguments.length === 1)
              throw TypeError();
            var k = 0;
            var accumulator;
            if (arguments.length >= 2) {
              accumulator = arguments[1];
            } else {
              accumulator = t._getter(k++);
            }
            while (k < len) {
              accumulator = callbackfn.call(undefined2, accumulator, t._getter(k), k, t);
              k++;
            }
            return accumulator;
          } });
          Object.defineProperty($TypedArray$.prototype, "reduceRight", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            if (len === 0 && arguments.length === 1)
              throw TypeError();
            var k = len - 1;
            var accumulator;
            if (arguments.length >= 2) {
              accumulator = arguments[1];
            } else {
              accumulator = t._getter(k--);
            }
            while (k >= 0) {
              accumulator = callbackfn.call(undefined2, accumulator, t._getter(k), k, t);
              k--;
            }
            return accumulator;
          } });
          Object.defineProperty($TypedArray$.prototype, "reverse", { value: function() {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            var half = floor(len / 2);
            for (var i = 0, j2 = len - 1; i < half; ++i, --j2) {
              var tmp = t._getter(i);
              t._setter(i, t._getter(j2));
              t._setter(j2, tmp);
            }
            return t;
          } });
          Object.defineProperty($TypedArray$.prototype, "set", { value: function(index, value) {
            if (arguments.length < 1)
              throw SyntaxError("Not enough arguments");
            var array, sequence, offset, len, i, s, d, byteOffset, byteLength, tmp;
            if (typeof arguments[0] === "object" && arguments[0].constructor === this.constructor) {
              array = arguments[0];
              offset = ToUint32(arguments[1]);
              if (offset + array.length > this.length) {
                throw RangeError("Offset plus length of array is out of range");
              }
              byteOffset = this.byteOffset + offset * this.BYTES_PER_ELEMENT;
              byteLength = array.length * this.BYTES_PER_ELEMENT;
              if (array.buffer === this.buffer) {
                tmp = [];
                for (i = 0, s = array.byteOffset; i < byteLength; i += 1, s += 1) {
                  tmp[i] = array.buffer._bytes[s];
                }
                for (i = 0, d = byteOffset; i < byteLength; i += 1, d += 1) {
                  this.buffer._bytes[d] = tmp[i];
                }
              } else {
                for (i = 0, s = array.byteOffset, d = byteOffset; i < byteLength; i += 1, s += 1, d += 1) {
                  this.buffer._bytes[d] = array.buffer._bytes[s];
                }
              }
            } else if (typeof arguments[0] === "object" && typeof arguments[0].length !== "undefined") {
              sequence = arguments[0];
              len = ToUint32(sequence.length);
              offset = ToUint32(arguments[1]);
              if (offset + len > this.length) {
                throw RangeError("Offset plus length of array is out of range");
              }
              for (i = 0; i < len; i += 1) {
                s = sequence[i];
                this._setter(offset + i, Number(s));
              }
            } else {
              throw TypeError("Unexpected argument type(s)");
            }
          } });
          Object.defineProperty($TypedArray$.prototype, "slice", { value: function(m_start, m_end) {
            var m_o = ToObject(this);
            var lenVal = m_o.length;
            var m_len = ToUint32(lenVal);
            var relativeStart = ToInt32(m_start);
            var m_k = relativeStart < 0 ? max(m_len + relativeStart, 0) : min(relativeStart, m_len);
            var relativeEnd = m_end === undefined2 ? m_len : ToInt32(m_end);
            var m_final = relativeEnd < 0 ? max(m_len + relativeEnd, 0) : min(relativeEnd, m_len);
            var m_count = m_final - m_k;
            var m_c = m_o.constructor;
            var m_a = new m_c(m_count);
            var m_n = 0;
            while (m_k < m_final) {
              var kValue = m_o._getter(m_k);
              m_a._setter(m_n, kValue);
              ++m_k;
              ++m_n;
            }
            return m_a;
          } });
          Object.defineProperty($TypedArray$.prototype, "some", { value: function(callbackfn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            if (!IsCallable(callbackfn))
              throw TypeError();
            var thisp = arguments[1];
            for (var i = 0; i < len; i++) {
              if (callbackfn.call(thisp, t._getter(i), i, t)) {
                return true;
              }
            }
            return false;
          } });
          Object.defineProperty($TypedArray$.prototype, "sort", { value: function(comparefn) {
            if (this === undefined2 || this === null)
              throw TypeError();
            var t = Object(this);
            var len = ToUint32(t.length);
            var tmp = Array(len);
            for (var i = 0; i < len; ++i)
              tmp[i] = t._getter(i);
            if (comparefn)
              tmp.sort(comparefn);
            else
              tmp.sort();
            for (i = 0; i < len; ++i)
              t._setter(i, tmp[i]);
            return t;
          } });
          Object.defineProperty($TypedArray$.prototype, "subarray", { value: function(start, end) {
            function clamp(v, min2, max2) {
              return v < min2 ? min2 : v > max2 ? max2 : v;
            }
            start = ToInt32(start);
            end = ToInt32(end);
            if (arguments.length < 1) {
              start = 0;
            }
            if (arguments.length < 2) {
              end = this.length;
            }
            if (start < 0) {
              start = this.length + start;
            }
            if (end < 0) {
              end = this.length + end;
            }
            start = clamp(start, 0, this.length);
            end = clamp(end, 0, this.length);
            var len = end - start;
            if (len < 0) {
              len = 0;
            }
            return new this.constructor(
              this.buffer,
              this.byteOffset + start * this.BYTES_PER_ELEMENT,
              len
            );
          } });
          function makeTypedArray(elementSize, pack, unpack) {
            var TypedArray = function() {
              Object.defineProperty(this, "constructor", { value: TypedArray });
              $TypedArray$.apply(this, arguments);
              makeArrayAccessors(this);
            };
            if ("__proto__" in TypedArray) {
              TypedArray.__proto__ = $TypedArray$;
            } else {
              TypedArray.from = $TypedArray$.from;
              TypedArray.of = $TypedArray$.of;
            }
            TypedArray.BYTES_PER_ELEMENT = elementSize;
            var TypedArrayPrototype = function() {
            };
            TypedArrayPrototype.prototype = $TypedArrayPrototype$;
            TypedArray.prototype = new TypedArrayPrototype();
            Object.defineProperty(TypedArray.prototype, "BYTES_PER_ELEMENT", { value: elementSize });
            Object.defineProperty(TypedArray.prototype, "_pack", { value: pack });
            Object.defineProperty(TypedArray.prototype, "_unpack", { value: unpack });
            return TypedArray;
          }
          var Int8Array2 = makeTypedArray(1, packI8, unpackI8);
          var Uint8Array2 = makeTypedArray(1, packU8, unpackU8);
          var Uint8ClampedArray2 = makeTypedArray(1, packU8Clamped, unpackU8);
          var Int16Array2 = makeTypedArray(2, packI16, unpackI16);
          var Uint16Array2 = makeTypedArray(2, packU16, unpackU16);
          var Int32Array2 = makeTypedArray(4, packI32, unpackI32);
          var Uint32Array2 = makeTypedArray(4, packU32, unpackU32);
          var Float32Array2 = makeTypedArray(4, packF32, unpackF32);
          var Float64Array2 = makeTypedArray(8, packF64, unpackF64);
          global2.Int8Array = win.Int8Array = global2.Int8Array || Int8Array2;
          global2.Uint8Array = win.Uint8Array = global2.Uint8Array || Uint8Array2;
          global2.Uint8ClampedArray = win.Uint8ClampedArray = global2.Uint8ClampedArray || Uint8ClampedArray2;
          global2.Int16Array = win.Int16Array = global2.Int16Array || Int16Array2;
          global2.Uint16Array = win.Uint16Array = global2.Uint16Array || Uint16Array2;
          global2.Int32Array = win.Int32Array = global2.Int32Array || Int32Array2;
          global2.Uint32Array = win.Uint32Array = global2.Uint32Array || Uint32Array2;
          global2.Float32Array = win.Float32Array = global2.Float32Array || Float32Array2;
          global2.Float64Array = win.Float64Array = global2.Float64Array || Float64Array2;
        })();
        (function() {
          function r(array, index) {
            return IsCallable(array.get) ? array.get(index) : array[index];
          }
          var IS_BIG_ENDIAN = function() {
            var u16array = new global2.Uint16Array([4660]), u8array = new global2.Uint8Array(u16array.buffer);
            return r(u8array, 0) === 18;
          }();
          function DataView2(buffer, byteOffset, byteLength) {
            if (!(buffer instanceof ArrayBuffer || Class(buffer) === "ArrayBuffer"))
              throw TypeError();
            byteOffset = ToUint32(byteOffset);
            if (byteOffset > buffer.byteLength)
              throw RangeError("byteOffset out of range");
            if (byteLength === undefined2)
              byteLength = buffer.byteLength - byteOffset;
            else
              byteLength = ToUint32(byteLength);
            if (byteOffset + byteLength > buffer.byteLength)
              throw RangeError("byteOffset and length reference an area beyond the end of the buffer");
            Object.defineProperty(this, "buffer", { value: buffer });
            Object.defineProperty(this, "byteLength", { value: byteLength });
            Object.defineProperty(this, "byteOffset", { value: byteOffset });
          }
          ;
          function makeGetter(arrayType) {
            return function GetViewValue(byteOffset, littleEndian) {
              byteOffset = ToUint32(byteOffset);
              if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
                throw RangeError("Array index out of range");
              byteOffset += this.byteOffset;
              var uint8Array = new global2.Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT), bytes = [];
              for (var i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
                bytes.push(r(uint8Array, i));
              if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
                bytes.reverse();
              return r(new arrayType(new global2.Uint8Array(bytes).buffer), 0);
            };
          }
          Object.defineProperty(DataView2.prototype, "getUint8", { value: makeGetter(global2.Uint8Array) });
          Object.defineProperty(DataView2.prototype, "getInt8", { value: makeGetter(global2.Int8Array) });
          Object.defineProperty(DataView2.prototype, "getUint16", { value: makeGetter(global2.Uint16Array) });
          Object.defineProperty(DataView2.prototype, "getInt16", { value: makeGetter(global2.Int16Array) });
          Object.defineProperty(DataView2.prototype, "getUint32", { value: makeGetter(global2.Uint32Array) });
          Object.defineProperty(DataView2.prototype, "getInt32", { value: makeGetter(global2.Int32Array) });
          Object.defineProperty(DataView2.prototype, "getFloat32", { value: makeGetter(global2.Float32Array) });
          Object.defineProperty(DataView2.prototype, "getFloat64", { value: makeGetter(global2.Float64Array) });
          function makeSetter(arrayType) {
            return function SetViewValue(byteOffset, value, littleEndian) {
              byteOffset = ToUint32(byteOffset);
              if (byteOffset + arrayType.BYTES_PER_ELEMENT > this.byteLength)
                throw RangeError("Array index out of range");
              var typeArray = new arrayType([value]), byteArray = new global2.Uint8Array(typeArray.buffer), bytes = [], i, byteView;
              for (i = 0; i < arrayType.BYTES_PER_ELEMENT; i += 1)
                bytes.push(r(byteArray, i));
              if (Boolean(littleEndian) === Boolean(IS_BIG_ENDIAN))
                bytes.reverse();
              byteView = new Uint8Array(this.buffer, byteOffset, arrayType.BYTES_PER_ELEMENT);
              byteView.set(bytes);
            };
          }
          Object.defineProperty(DataView2.prototype, "setUint8", { value: makeSetter(global2.Uint8Array) });
          Object.defineProperty(DataView2.prototype, "setInt8", { value: makeSetter(global2.Int8Array) });
          Object.defineProperty(DataView2.prototype, "setUint16", { value: makeSetter(global2.Uint16Array) });
          Object.defineProperty(DataView2.prototype, "setInt16", { value: makeSetter(global2.Int16Array) });
          Object.defineProperty(DataView2.prototype, "setUint32", { value: makeSetter(global2.Uint32Array) });
          Object.defineProperty(DataView2.prototype, "setInt32", { value: makeSetter(global2.Int32Array) });
          Object.defineProperty(DataView2.prototype, "setFloat32", { value: makeSetter(global2.Float32Array) });
          Object.defineProperty(DataView2.prototype, "setFloat64", { value: makeSetter(global2.Float64Array) });
          global2.DataView = global2.DataView || DataView2;
        })();
      })(exports2, window);
    }
    if (typeof window !== "undefined") {
      if (!("Uint8ClampedArray" in window)) {
        window.Uint8ClampedArray = window.Uint8Array;
      }
    }
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/json.js
var require_json = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill/json.js"(exports, module) {
    if (typeof JSON !== "object") {
      JSON = {};
    }
    (function() {
      "use strict";
      function f(n) {
        return n < 10 ? "0" + n : n;
      }
      if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
          return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
          return this.valueOf();
        };
      }
      var cx, escapable, gap, indent, meta, rep;
      function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
          var c = meta[a];
          return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
      }
      function str(key, holder) {
        var i, k, v, length, mind = gap, partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        if (typeof rep === "function") {
          value = rep.call(holder, key, value);
        }
        switch (typeof value) {
          case "string":
            return quote(value);
          case "number":
            return isFinite(value) ? String(value) : "null";
          case "boolean":
          case "null":
            return String(value);
          case "object":
            if (!value) {
              return "null";
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
              length = value.length;
              for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value) || "null";
              }
              v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
              gap = mind;
              return v;
            }
            if (rep && typeof rep === "object") {
              length = rep.length;
              for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === "string") {
                  k = rep[i];
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v);
                  }
                }
              }
            } else {
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = str(k, value);
                  if (v) {
                    partial.push(quote(k) + (gap ? ": " : ":") + v);
                  }
                }
              }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v;
        }
      }
      if (typeof JSON.stringify !== "function") {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {
          "\b": "\\b",
          "	": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\"
        };
        JSON.stringify = function(value, replacer, space) {
          var i;
          gap = "";
          indent = "";
          if (typeof space === "number") {
            for (i = 0; i < space; i += 1) {
              indent += " ";
            }
          } else if (typeof space === "string") {
            indent = space;
          }
          rep = replacer;
          if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
            throw new Error("JSON.stringify");
          }
          return str("", { "": value });
        };
      }
      if (typeof JSON.parse !== "function") {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function(text, reviver) {
          var j;
          function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === "object") {
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = walk(value, k);
                  if (v !== void 0) {
                    value[k] = v;
                  } else {
                    delete value[k];
                  }
                }
              }
            }
            return reviver.call(holder, key, value);
          }
          text = String(text);
          cx.lastIndex = 0;
          if (cx.test(text)) {
            text = text.replace(cx, function(a) {
              return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
            });
          }
          if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
            j = eval("(" + text + ")");
            return typeof reviver === "function" ? walk({ "": j }, "") : j;
          }
          throw new SyntaxError("JSON.parse");
        };
      }
    })();
    exports.JSON = JSON;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/polyfill.js"() {
    require_object();
    require_array();
    require_string();
    require_function();
    require_console();
    require_typedarray();
    require_json();
  }
});

// node_modules/_autobahn@19.12.1@autobahn/package.json
var require_package = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/package.json"(exports2, module2) {
    module2.exports = {
      name: "autobahn",
      version: "19.12.1",
      description: "An implementation of The Web Application Messaging Protocol (WAMP).",
      main: "index.js",
      files: [
        "index.js",
        "/lib"
      ],
      engines: {
        node: ">= 6.17.1"
      },
      dependencies: {
        cbor: ">= 3.0.0",
        "crypto-js": ">=3.1.8",
        msgpack5: ">= 3.6.0",
        tweetnacl: ">= 0.14.3",
        when: ">= 3.7.7",
        ws: ">= 1.1.4"
      },
      optionalDependencies: {
        bufferutil: ">= 1.2.1",
        "utf-8-validate": ">= 1.2.1"
      },
      devDependencies: {
        browserify: ">= 13.1.1",
        "deep-equal": ">= 1.0.1",
        "google-closure-compiler": ">= 20170218.0.0",
        nodeunit: ">= 0.11.3",
        "random-bytes-seed": ">=1.0.3"
      },
      browser: {
        cbor: false,
        ws: false,
        "./lib/transport/rawsocket.js": false
      },
      repository: {
        type: "git",
        url: "git://github.com/crossbario/autobahn-js.git"
      },
      keywords: [
        "WAMP",
        "WebSocket",
        "RPC",
        "PubSub",
        "ethereum",
        "solidity",
        "xbr",
        "crossbar",
        "autobahn",
        "wamp",
        "data-service",
        "data-monetization"
      ],
      author: "Crossbar.io Technologies GmbH",
      license: "MIT",
      __npminstall_done: true,
      _from: "autobahn@19.12.1",
      _resolved: "https://registry.npmmirror.com/autobahn/-/autobahn-19.12.1.tgz"
    };
  }
});

// node_modules/_when@3.7.8@when/when.js
var require_when = __commonJS({
  "node_modules/_when@3.7.8@when/when.js"(exports2, module2) {
    (function(define2) {
      "use strict";
      define2(function(require2) {
        var timed = require2("./lib/decorators/timed");
        var array = require2("./lib/decorators/array");
        var flow = require2("./lib/decorators/flow");
        var fold = require2("./lib/decorators/fold");
        var inspect = require2("./lib/decorators/inspect");
        var generate = require2("./lib/decorators/iterate");
        var progress = require2("./lib/decorators/progress");
        var withThis = require2("./lib/decorators/with");
        var unhandledRejection = require2("./lib/decorators/unhandledRejection");
        var TimeoutError = require2("./lib/TimeoutError");
        var Promise2 = [
          array,
          flow,
          fold,
          generate,
          progress,
          inspect,
          withThis,
          timed,
          unhandledRejection
        ].reduce(function(Promise3, feature) {
          return feature(Promise3);
        }, require2("./lib/Promise"));
        var apply = require2("./lib/apply")(Promise2);
        when.promise = promise;
        when.resolve = Promise2.resolve;
        when.reject = Promise2.reject;
        when.lift = lift;
        when["try"] = attempt;
        when.attempt = attempt;
        when.iterate = Promise2.iterate;
        when.unfold = Promise2.unfold;
        when.join = join;
        when.all = all;
        when.settle = settle;
        when.any = lift(Promise2.any);
        when.some = lift(Promise2.some);
        when.race = lift(Promise2.race);
        when.map = map;
        when.filter = filter;
        when.reduce = lift(Promise2.reduce);
        when.reduceRight = lift(Promise2.reduceRight);
        when.isPromiseLike = isPromiseLike;
        when.Promise = Promise2;
        when.defer = defer;
        when.TimeoutError = TimeoutError;
        function when(x, onFulfilled, onRejected, onProgress) {
          var p = Promise2.resolve(x);
          if (arguments.length < 2) {
            return p;
          }
          return p.then(onFulfilled, onRejected, onProgress);
        }
        function promise(resolver) {
          return new Promise2(resolver);
        }
        function lift(f2) {
          return function() {
            for (var i = 0, l = arguments.length, a = new Array(l); i < l; ++i) {
              a[i] = arguments[i];
            }
            return apply(f2, this, a);
          };
        }
        function attempt(f2) {
          for (var i = 0, l = arguments.length - 1, a = new Array(l); i < l; ++i) {
            a[i] = arguments[i + 1];
          }
          return apply(f2, this, a);
        }
        function defer() {
          return new Deferred();
        }
        function Deferred() {
          var p = Promise2._defer();
          function resolve(x) {
            p._handler.resolve(x);
          }
          function reject(x) {
            p._handler.reject(x);
          }
          function notify(x) {
            p._handler.notify(x);
          }
          this.promise = p;
          this.resolve = resolve;
          this.reject = reject;
          this.notify = notify;
          this.resolver = { resolve, reject, notify };
        }
        function isPromiseLike(x) {
          return x && typeof x.then === "function";
        }
        function join() {
          return Promise2.all(arguments);
        }
        function all(promises) {
          return when(promises, Promise2.all);
        }
        function settle(promises) {
          return when(promises, Promise2.settle);
        }
        function map(promises, mapFunc) {
          return when(promises, function(promises2) {
            return Promise2.map(promises2, mapFunc);
          });
        }
        function filter(promises, predicate) {
          return when(promises, function(promises2) {
            return Promise2.filter(promises2, predicate);
          });
        }
        return when;
      });
    })(typeof define === "function" && define.amd ? define : function(factory) {
      module2.exports = factory(require);
    });
  }
});

// node_modules/_safe-buffer@5.2.1@safe-buffer/index.js
var require_safe_buffer_5_2 = __commonJS({
  "node_modules/_safe-buffer@5.2.1@safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/stream.js"(exports2, module2) {
    module2.exports = require("stream");
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/buffer_list.js
var require_buffer_list = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/buffer_list.js"(exports2, module2) {
    "use strict";
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var _require = require("buffer");
    var Buffer2 = _require.Buffer;
    var _require2 = require("util");
    var inspect = _require2.inspect;
    var custom = inspect && inspect.custom || "inspect";
    function copyBuffer(src, target, offset) {
      Buffer2.prototype.copy.call(src, target, offset);
    }
    module2.exports = /* @__PURE__ */ function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      _createClass(BufferList, [{
        key: "push",
        value: function push(v) {
          var entry = {
            data: v,
            next: null
          };
          if (this.length > 0)
            this.tail.next = entry;
          else
            this.head = entry;
          this.tail = entry;
          ++this.length;
        }
      }, {
        key: "unshift",
        value: function unshift(v) {
          var entry = {
            data: v,
            next: this.head
          };
          if (this.length === 0)
            this.tail = entry;
          this.head = entry;
          ++this.length;
        }
      }, {
        key: "shift",
        value: function shift() {
          if (this.length === 0)
            return;
          var ret = this.head.data;
          if (this.length === 1)
            this.head = this.tail = null;
          else
            this.head = this.head.next;
          --this.length;
          return ret;
        }
      }, {
        key: "clear",
        value: function clear() {
          this.head = this.tail = null;
          this.length = 0;
        }
      }, {
        key: "join",
        value: function join(s) {
          if (this.length === 0)
            return "";
          var p = this.head;
          var ret = "" + p.data;
          while (p = p.next)
            ret += s + p.data;
          return ret;
        }
      }, {
        key: "concat",
        value: function concat(n) {
          if (this.length === 0)
            return Buffer2.alloc(0);
          var ret = Buffer2.allocUnsafe(n >>> 0);
          var p = this.head;
          var i = 0;
          while (p) {
            copyBuffer(p.data, ret, i);
            i += p.data.length;
            p = p.next;
          }
          return ret;
        }
      }, {
        key: "consume",
        value: function consume(n, hasStrings) {
          var ret;
          if (n < this.head.data.length) {
            ret = this.head.data.slice(0, n);
            this.head.data = this.head.data.slice(n);
          } else if (n === this.head.data.length) {
            ret = this.shift();
          } else {
            ret = hasStrings ? this._getString(n) : this._getBuffer(n);
          }
          return ret;
        }
      }, {
        key: "first",
        value: function first() {
          return this.head.data;
        }
      }, {
        key: "_getString",
        value: function _getString(n) {
          var p = this.head;
          var c = 1;
          var ret = p.data;
          n -= ret.length;
          while (p = p.next) {
            var str2 = p.data;
            var nb = n > str2.length ? str2.length : n;
            if (nb === str2.length)
              ret += str2;
            else
              ret += str2.slice(0, n);
            n -= nb;
            if (n === 0) {
              if (nb === str2.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = str2.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
      }, {
        key: "_getBuffer",
        value: function _getBuffer(n) {
          var ret = Buffer2.allocUnsafe(n);
          var p = this.head;
          var c = 1;
          p.data.copy(ret);
          n -= p.data.length;
          while (p = p.next) {
            var buf = p.data;
            var nb = n > buf.length ? buf.length : n;
            buf.copy(ret, ret.length - n, 0, nb);
            n -= nb;
            if (n === 0) {
              if (nb === buf.length) {
                ++c;
                if (p.next)
                  this.head = p.next;
                else
                  this.head = this.tail = null;
              } else {
                this.head = p;
                p.data = buf.slice(nb);
              }
              break;
            }
            ++c;
          }
          this.length -= c;
          return ret;
        }
      }, {
        key: custom,
        value: function value(_, options) {
          return inspect(this, _objectSpread(_objectSpread({}, options), {}, {
            depth: 0,
            customInspect: false
          }));
        }
      }]);
      return BufferList;
    }();
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
    "use strict";
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            process.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            process.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            process.nextTick(emitErrorAndCloseNT, _this, err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        } else if (cb) {
          process.nextTick(emitCloseNT, _this);
          cb(err2);
        } else {
          process.nextTick(emitCloseNT, _this);
        }
      });
      return this;
    }
    function emitErrorAndCloseNT(self2, err) {
      emitErrorNT(self2, err);
      emitCloseNT(self2);
    }
    function emitCloseNT(self2) {
      if (self2._writableState && !self2._writableState.emitClose)
        return;
      if (self2._readableState && !self2._readableState.emitClose)
        return;
      self2.emit("close");
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    function errorOrDestroy(stream, err) {
      var rState = stream._readableState;
      var wState = stream._writableState;
      if (rState && rState.autoDestroy || wState && wState.autoDestroy)
        stream.destroy(err);
      else
        stream.emit("error", err);
    }
    module2.exports = {
      destroy,
      undestroy,
      errorOrDestroy
    };
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/errors.js
var require_errors = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/errors.js"(exports2, module2) {
    "use strict";
    var codes = {};
    function createErrorType(code, message, Base) {
      if (!Base) {
        Base = Error;
      }
      function getMessage(arg1, arg2, arg3) {
        if (typeof message === "string") {
          return message;
        } else {
          return message(arg1, arg2, arg3);
        }
      }
      class NodeError extends Base {
        constructor(arg1, arg2, arg3) {
          super(getMessage(arg1, arg2, arg3));
        }
      }
      NodeError.prototype.name = Base.name;
      NodeError.prototype.code = code;
      codes[code] = NodeError;
    }
    function oneOf(expected, thing) {
      if (Array.isArray(expected)) {
        const len = expected.length;
        expected = expected.map((i) => String(i));
        if (len > 2) {
          return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
        } else if (len === 2) {
          return `one of ${thing} ${expected[0]} or ${expected[1]}`;
        } else {
          return `of ${thing} ${expected[0]}`;
        }
      } else {
        return `of ${thing} ${String(expected)}`;
      }
    }
    function startsWith(str2, search, pos) {
      return str2.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
    }
    function endsWith(str2, search, this_len) {
      if (this_len === void 0 || this_len > str2.length) {
        this_len = str2.length;
      }
      return str2.substring(this_len - search.length, this_len) === search;
    }
    function includes(str2, search, start) {
      if (typeof start !== "number") {
        start = 0;
      }
      if (start + search.length > str2.length) {
        return false;
      } else {
        return str2.indexOf(search, start) !== -1;
      }
    }
    createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
      return 'The value "' + value + '" is invalid for option "' + name + '"';
    }, TypeError);
    createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
      let determiner;
      if (typeof expected === "string" && startsWith(expected, "not ")) {
        determiner = "must not be";
        expected = expected.replace(/^not /, "");
      } else {
        determiner = "must be";
      }
      let msg;
      if (endsWith(name, " argument")) {
        msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
      } else {
        const type = includes(name, ".") ? "property" : "argument";
        msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
      }
      msg += `. Received type ${typeof actual}`;
      return msg;
    }, TypeError);
    createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
    createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
      return "The " + name + " method is not implemented";
    });
    createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
    createErrorType("ERR_STREAM_DESTROYED", function(name) {
      return "Cannot call " + name + " after a stream was destroyed";
    });
    createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
    createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
    createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
    createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
    createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
      return "Unknown encoding: " + arg;
    }, TypeError);
    createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
    module2.exports.codes = codes;
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/state.js
var require_state = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/state.js"(exports2, module2) {
    "use strict";
    var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
    function highWaterMarkFrom(options, isDuplex, duplexKey) {
      return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
    }
    function getHighWaterMark(state, options, duplexKey, isDuplex) {
      var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
      if (hwm != null) {
        if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
          var name = isDuplex ? duplexKey : "highWaterMark";
          throw new ERR_INVALID_OPT_VALUE(name, hwm);
        }
        return Math.floor(hwm);
      }
      return state.objectMode ? 16 : 16 * 1024;
    }
    module2.exports = {
      getHighWaterMark
    };
  }
});

// node_modules/_inherits@2.0.4@inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/_inherits@2.0.4@inherits/inherits_browser.js"(exports2, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/_inherits@2.0.4@inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/_inherits@2.0.4@inherits/inherits.js"(exports2, module2) {
    try {
      util = require("util");
      if (typeof util.inherits !== "function")
        throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/_util-deprecate@1.0.2@util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/_util-deprecate@1.0.2@util-deprecate/node.js"(exports2, module2) {
    module2.exports = require("util").deprecate;
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_writable.js"(exports2, module2) {
    "use strict";
    module2.exports = Writable;
    function CorkedRequest(state) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state);
      };
    }
    var Duplex;
    Writable.WritableState = WritableState;
    var internalUtil = {
      deprecate: require_node()
    };
    var Stream = require_stream();
    var Buffer2 = require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
    var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
    var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    require_inherits()(Writable, Stream);
    function nop() {
    }
    function WritableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.writableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function writableStateBufferGetter() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function value(object) {
          if (realHasInstance.call(this, object))
            return true;
          if (this !== Writable)
            return false;
          return object && object._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function realHasInstance2(object) {
        return object instanceof this;
      };
    }
    function Writable(options) {
      Duplex = Duplex || require_stream_duplex();
      var isDuplex = this instanceof Duplex;
      if (!isDuplex && !realHasInstance.call(Writable, this))
        return new Writable(options);
      this._writableState = new WritableState(options, this, isDuplex);
      this.writable = true;
      if (options) {
        if (typeof options.write === "function")
          this._write = options.write;
        if (typeof options.writev === "function")
          this._writev = options.writev;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
        if (typeof options.final === "function")
          this._final = options.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
    };
    function writeAfterEnd(stream, cb) {
      var er = new ERR_STREAM_WRITE_AFTER_END();
      errorOrDestroy(stream, er);
      process.nextTick(cb, er);
    }
    function validChunk(stream, state, chunk, cb) {
      var er;
      if (chunk === null) {
        er = new ERR_STREAM_NULL_VALUES();
      } else if (typeof chunk !== "string" && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
      }
      if (er) {
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
        return false;
      }
      return true;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state = this._writableState;
      var ret = false;
      var isBuf = !state.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf)
        encoding = "buffer";
      else if (!encoding)
        encoding = state.defaultEncoding;
      if (typeof cb !== "function")
        cb = nop;
      if (state.ending)
        writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state, chunk, cb)) {
        state.pendingcb++;
        ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      this._writableState.corked++;
    };
    Writable.prototype.uncork = function() {
      var state = this._writableState;
      if (state.corked) {
        state.corked--;
        if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
          clearBuffer(this, state);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string")
        encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
        throw new ERR_UNKNOWN_ENCODING(encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableBuffer", {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    function decodeChunk(state, chunk, encoding) {
      if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state.objectMode ? 1 : chunk.length;
      state.length += len;
      var ret = state.length < state.highWaterMark;
      if (!ret)
        state.needDrain = true;
      if (state.writing || state.corked) {
        var last = state.lastBufferedRequest;
        state.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state.lastBufferedRequest;
        } else {
          state.bufferedRequest = state.lastBufferedRequest;
        }
        state.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state, writev, len, chunk, encoding, cb) {
      state.writelen = len;
      state.writecb = cb;
      state.writing = true;
      state.sync = true;
      if (state.destroyed)
        state.onwrite(new ERR_STREAM_DESTROYED("write"));
      else if (writev)
        stream._writev(chunk, state.onwrite);
      else
        stream._write(chunk, encoding, state.onwrite);
      state.sync = false;
    }
    function onwriteError(stream, state, sync, er, cb) {
      --state.pendingcb;
      if (sync) {
        process.nextTick(cb, er);
        process.nextTick(finishMaybe, stream, state);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        errorOrDestroy(stream, er);
        finishMaybe(stream, state);
      }
    }
    function onwriteStateUpdate(state) {
      state.writing = false;
      state.writecb = null;
      state.length -= state.writelen;
      state.writelen = 0;
    }
    function onwrite(stream, er) {
      var state = stream._writableState;
      var sync = state.sync;
      var cb = state.writecb;
      if (typeof cb !== "function")
        throw new ERR_MULTIPLE_CALLBACK();
      onwriteStateUpdate(state);
      if (er)
        onwriteError(stream, state, sync, er, cb);
      else {
        var finished = needFinish(state) || stream.destroyed;
        if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
          clearBuffer(stream, state);
        }
        if (sync) {
          process.nextTick(afterWrite, stream, state, finished, cb);
        } else {
          afterWrite(stream, state, finished, cb);
        }
      }
    }
    function afterWrite(stream, state, finished, cb) {
      if (!finished)
        onwriteDrain(stream, state);
      state.pendingcb--;
      cb();
      finishMaybe(stream, state);
    }
    function onwriteDrain(stream, state) {
      if (state.length === 0 && state.needDrain) {
        state.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state) {
      state.bufferProcessing = true;
      var entry = state.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state.corkedRequestsFree;
        holder.entry = entry;
        var count2 = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count2] = entry;
          if (!entry.isBuf)
            allBuffers = false;
          entry = entry.next;
          count2 += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state, true, state.length, buffer, "", holder.finish);
        state.pendingcb++;
        state.lastBufferedRequest = null;
        if (holder.next) {
          state.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state.corkedRequestsFree = new CorkedRequest(state);
        }
        state.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state.objectMode ? 1 : chunk.length;
          doWrite(stream, state, false, len, chunk, encoding, cb);
          entry = entry.next;
          state.bufferedRequestCount--;
          if (state.writing) {
            break;
          }
        }
        if (entry === null)
          state.lastBufferedRequest = null;
      }
      state.bufferedRequest = entry;
      state.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0)
        this.write(chunk, encoding);
      if (state.corked) {
        state.corked = 1;
        this.uncork();
      }
      if (!state.ending)
        endWritable(this, state, cb);
      return this;
    };
    Object.defineProperty(Writable.prototype, "writableLength", {
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function needFinish(state) {
      return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
    }
    function callFinal(stream, state) {
      stream._final(function(err) {
        state.pendingcb--;
        if (err) {
          errorOrDestroy(stream, err);
        }
        state.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state);
      });
    }
    function prefinish(stream, state) {
      if (!state.prefinished && !state.finalCalled) {
        if (typeof stream._final === "function" && !state.destroyed) {
          state.pendingcb++;
          state.finalCalled = true;
          process.nextTick(callFinal, stream, state);
        } else {
          state.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state) {
      var need = needFinish(state);
      if (need) {
        prefinish(stream, state);
        if (state.pendingcb === 0) {
          state.finished = true;
          stream.emit("finish");
          if (state.autoDestroy) {
            var rState = stream._readableState;
            if (!rState || rState.autoDestroy && rState.endEmitted) {
              stream.destroy();
            }
          }
        }
      }
      return need;
    }
    function endWritable(stream, state, cb) {
      state.ending = true;
      finishMaybe(stream, state);
      if (cb) {
        if (state.finished)
          process.nextTick(cb);
        else
          stream.once("finish", cb);
      }
      state.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      enumerable: false,
      get: function get() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function set(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      cb(err);
    };
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_duplex.js"(exports2, module2) {
    "use strict";
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj)
        keys2.push(key);
      return keys2;
    };
    module2.exports = Duplex;
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    require_inherits()(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method])
          Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options) {
      if (!(this instanceof Duplex))
        return new Duplex(options);
      Readable.call(this, options);
      Writable.call(this, options);
      this.allowHalfOpen = true;
      if (options) {
        if (options.readable === false)
          this.readable = false;
        if (options.writable === false)
          this.writable = false;
        if (options.allowHalfOpen === false) {
          this.allowHalfOpen = false;
          this.once("end", onend);
        }
      }
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      enumerable: false,
      get: function get() {
        return this._writableState.highWaterMark;
      }
    });
    Object.defineProperty(Duplex.prototype, "writableBuffer", {
      enumerable: false,
      get: function get() {
        return this._writableState && this._writableState.getBuffer();
      }
    });
    Object.defineProperty(Duplex.prototype, "writableLength", {
      enumerable: false,
      get: function get() {
        return this._writableState.length;
      }
    });
    function onend() {
      if (this._writableState.ended)
        return;
      process.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function set(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
  }
});

// node_modules/_string_decoder@1.3.0@string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/_string_decoder@1.3.0@string_decoder/lib/string_decoder.js"(exports2) {
    "use strict";
    var Buffer2 = require_safe_buffer_5_2().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc)
        return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried)
              return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
        throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports2.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0)
        return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0)
          return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length)
        return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127)
        return 0;
      else if (byte >> 5 === 6)
        return 2;
      else if (byte >> 4 === 14)
        return 3;
      else if (byte >> 3 === 30)
        return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j2 = buf.length - 1;
      if (j2 < i)
        return 0;
      var nb = utf8CheckByte(buf[j2]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j2 < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j2]);
      if (nb >= 0) {
        if (nb > 0)
          self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j2 < i || nb === -2)
        return 0;
      nb = utf8CheckByte(buf[j2]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2)
            nb = 0;
          else
            self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0)
        return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed)
        return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0)
        return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed)
        return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/end-of-stream.js
var require_end_of_stream = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/end-of-stream.js"(exports2, module2) {
    "use strict";
    var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        callback.apply(this, args);
      };
    }
    function noop() {
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function eos(stream, opts, callback) {
      if (typeof opts === "function")
        return eos(stream, null, opts);
      if (!opts)
        opts = {};
      callback = once(callback || noop);
      var readable = opts.readable || opts.readable !== false && stream.readable;
      var writable = opts.writable || opts.writable !== false && stream.writable;
      var onlegacyfinish = function onlegacyfinish2() {
        if (!stream.writable)
          onfinish();
      };
      var writableEnded = stream._writableState && stream._writableState.finished;
      var onfinish = function onfinish2() {
        writable = false;
        writableEnded = true;
        if (!readable)
          callback.call(stream);
      };
      var readableEnded = stream._readableState && stream._readableState.endEmitted;
      var onend = function onend2() {
        readable = false;
        readableEnded = true;
        if (!writable)
          callback.call(stream);
      };
      var onerror = function onerror2(err) {
        callback.call(stream, err);
      };
      var onclose = function onclose2() {
        var err;
        if (readable && !readableEnded) {
          if (!stream._readableState || !stream._readableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
        if (writable && !writableEnded) {
          if (!stream._writableState || !stream._writableState.ended)
            err = new ERR_STREAM_PREMATURE_CLOSE();
          return callback.call(stream, err);
        }
      };
      var onrequest = function onrequest2() {
        stream.req.on("finish", onfinish);
      };
      if (isRequest(stream)) {
        stream.on("complete", onfinish);
        stream.on("abort", onclose);
        if (stream.req)
          onrequest();
        else
          stream.on("request", onrequest);
      } else if (writable && !stream._writableState) {
        stream.on("end", onlegacyfinish);
        stream.on("close", onlegacyfinish);
      }
      stream.on("end", onend);
      stream.on("finish", onfinish);
      if (opts.error !== false)
        stream.on("error", onerror);
      stream.on("close", onclose);
      return function() {
        stream.removeListener("complete", onfinish);
        stream.removeListener("abort", onclose);
        stream.removeListener("request", onrequest);
        if (stream.req)
          stream.req.removeListener("finish", onfinish);
        stream.removeListener("end", onlegacyfinish);
        stream.removeListener("close", onlegacyfinish);
        stream.removeListener("finish", onfinish);
        stream.removeListener("end", onend);
        stream.removeListener("error", onerror);
        stream.removeListener("close", onclose);
      };
    }
    module2.exports = eos;
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/async_iterator.js
var require_async_iterator = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/async_iterator.js"(exports2, module2) {
    "use strict";
    var _Object$setPrototypeO;
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var finished = require_end_of_stream();
    var kLastResolve = Symbol("lastResolve");
    var kLastReject = Symbol("lastReject");
    var kError = Symbol("error");
    var kEnded = Symbol("ended");
    var kLastPromise = Symbol("lastPromise");
    var kHandlePromise = Symbol("handlePromise");
    var kStream = Symbol("stream");
    function createIterResult(value, done) {
      return {
        value,
        done
      };
    }
    function readAndResolve(iter) {
      var resolve = iter[kLastResolve];
      if (resolve !== null) {
        var data = iter[kStream].read();
        if (data !== null) {
          iter[kLastPromise] = null;
          iter[kLastResolve] = null;
          iter[kLastReject] = null;
          resolve(createIterResult(data, false));
        }
      }
    }
    function onReadable(iter) {
      process.nextTick(readAndResolve, iter);
    }
    function wrapForNext(lastPromise, iter) {
      return function(resolve, reject) {
        lastPromise.then(function() {
          if (iter[kEnded]) {
            resolve(createIterResult(void 0, true));
            return;
          }
          iter[kHandlePromise](resolve, reject);
        }, reject);
      };
    }
    var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
    });
    var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
      get stream() {
        return this[kStream];
      },
      next: function next() {
        var _this = this;
        var error = this[kError];
        if (error !== null) {
          return Promise.reject(error);
        }
        if (this[kEnded]) {
          return Promise.resolve(createIterResult(void 0, true));
        }
        if (this[kStream].destroyed) {
          return new Promise(function(resolve, reject) {
            process.nextTick(function() {
              if (_this[kError]) {
                reject(_this[kError]);
              } else {
                resolve(createIterResult(void 0, true));
              }
            });
          });
        }
        var lastPromise = this[kLastPromise];
        var promise;
        if (lastPromise) {
          promise = new Promise(wrapForNext(lastPromise, this));
        } else {
          var data = this[kStream].read();
          if (data !== null) {
            return Promise.resolve(createIterResult(data, false));
          }
          promise = new Promise(this[kHandlePromise]);
        }
        this[kLastPromise] = promise;
        return promise;
      }
    }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
      return this;
    }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
      var _this2 = this;
      return new Promise(function(resolve, reject) {
        _this2[kStream].destroy(null, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(createIterResult(void 0, true));
        });
      });
    }), _Object$setPrototypeO), AsyncIteratorPrototype);
    var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
      var _Object$create;
      var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
        value: stream,
        writable: true
      }), _defineProperty(_Object$create, kLastResolve, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kLastReject, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kError, {
        value: null,
        writable: true
      }), _defineProperty(_Object$create, kEnded, {
        value: stream._readableState.endEmitted,
        writable: true
      }), _defineProperty(_Object$create, kHandlePromise, {
        value: function value(resolve, reject) {
          var data = iterator[kStream].read();
          if (data) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(data, false));
          } else {
            iterator[kLastResolve] = resolve;
            iterator[kLastReject] = reject;
          }
        },
        writable: true
      }), _Object$create));
      iterator[kLastPromise] = null;
      finished(stream, function(err) {
        if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
          var reject = iterator[kLastReject];
          if (reject !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            reject(err);
          }
          iterator[kError] = err;
          return;
        }
        var resolve = iterator[kLastResolve];
        if (resolve !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(void 0, true));
        }
        iterator[kEnded] = true;
      });
      stream.on("readable", onReadable.bind(null, iterator));
      return iterator;
    };
    module2.exports = createReadableStreamAsyncIterator;
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/from.js
var require_from = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/from.js"(exports2, module2) {
    "use strict";
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
    function from2(Readable, iterable, opts) {
      var iterator;
      if (iterable && typeof iterable.next === "function") {
        iterator = iterable;
      } else if (iterable && iterable[Symbol.asyncIterator])
        iterator = iterable[Symbol.asyncIterator]();
      else if (iterable && iterable[Symbol.iterator])
        iterator = iterable[Symbol.iterator]();
      else
        throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
      var readable = new Readable(_objectSpread({
        objectMode: true
      }, opts));
      var reading = false;
      readable._read = function() {
        if (!reading) {
          reading = true;
          next();
        }
      };
      function next() {
        return _next2.apply(this, arguments);
      }
      function _next2() {
        _next2 = _asyncToGenerator(function* () {
          try {
            var _yield$iterator$next = yield iterator.next(), value = _yield$iterator$next.value, done = _yield$iterator$next.done;
            if (done) {
              readable.push(null);
            } else if (readable.push(yield value)) {
              next();
            } else {
              reading = false;
            }
          } catch (err) {
            readable.destroy(err);
          }
        });
        return _next2.apply(this, arguments);
      }
      return readable;
    }
    module2.exports = from2;
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_readable.js"(exports2, module2) {
    "use strict";
    module2.exports = Readable;
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function EElistenerCount2(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream();
    var Buffer2 = require("buffer").Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var debugUtil = require("util");
    var debug;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function debug2() {
      };
    }
    var BufferList = require_buffer_list();
    var destroyImpl = require_destroy();
    var _require = require_state();
    var getHighWaterMark = _require.getHighWaterMark;
    var _require$codes = require_errors().codes;
    var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
    var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
    var StringDecoder;
    var createReadableStreamAsyncIterator;
    var from2;
    require_inherits()(Readable, Stream);
    var errorOrDestroy = destroyImpl.errorOrDestroy;
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function")
        return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event])
        emitter.on(event, fn);
      else if (Array.isArray(emitter._events[event]))
        emitter._events[event].unshift(fn);
      else
        emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options, stream, isDuplex) {
      Duplex = Duplex || require_stream_duplex();
      options = options || {};
      if (typeof isDuplex !== "boolean")
        isDuplex = stream instanceof Duplex;
      this.objectMode = !!options.objectMode;
      if (isDuplex)
        this.objectMode = this.objectMode || !!options.readableObjectMode;
      this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.paused = true;
      this.emitClose = options.emitClose !== false;
      this.autoDestroy = !!options.autoDestroy;
      this.destroyed = false;
      this.defaultEncoding = options.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options.encoding) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options.encoding);
        this.encoding = options.encoding;
      }
    }
    function Readable(options) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable))
        return new Readable(options);
      var isDuplex = this instanceof Duplex;
      this._readableState = new ReadableState(options, this, isDuplex);
      this.readable = true;
      if (options) {
        if (typeof options.read === "function")
          this._read = options.read;
        if (typeof options.destroy === "function")
          this._destroy = options.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      enumerable: false,
      get: function get() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function set(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state = this._readableState;
      var skipChunkCheck;
      if (!state.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state.defaultEncoding;
          if (encoding !== state.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      debug("readableAddChunk", chunk);
      var state = stream._readableState;
      if (chunk === null) {
        state.reading = false;
        onEofChunk(stream, state);
      } else {
        var er;
        if (!skipChunkCheck)
          er = chunkInvalid(state, chunk);
        if (er) {
          errorOrDestroy(stream, er);
        } else if (state.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state.endEmitted)
              errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
            else
              addChunk(stream, state, chunk, true);
          } else if (state.ended) {
            errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
          } else if (state.destroyed) {
            return false;
          } else {
            state.reading = false;
            if (state.decoder && !encoding) {
              chunk = state.decoder.write(chunk);
              if (state.objectMode || chunk.length !== 0)
                addChunk(stream, state, chunk, false);
              else
                maybeReadMore(stream, state);
            } else {
              addChunk(stream, state, chunk, false);
            }
          }
        } else if (!addToFront) {
          state.reading = false;
          maybeReadMore(stream, state);
        }
      }
      return !state.ended && (state.length < state.highWaterMark || state.length === 0);
    }
    function addChunk(stream, state, chunk, addToFront) {
      if (state.flowing && state.length === 0 && !state.sync) {
        state.awaitDrain = 0;
        stream.emit("data", chunk);
      } else {
        state.length += state.objectMode ? 1 : chunk.length;
        if (addToFront)
          state.buffer.unshift(chunk);
        else
          state.buffer.push(chunk);
        if (state.needReadable)
          emitReadable(stream);
      }
      maybeReadMore(stream, state);
    }
    function chunkInvalid(state, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
        er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
      }
      return er;
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder)
        StringDecoder = require_string_decoder().StringDecoder;
      var decoder = new StringDecoder(enc);
      this._readableState.decoder = decoder;
      this._readableState.encoding = this._readableState.decoder.encoding;
      var p = this._readableState.buffer.head;
      var content = "";
      while (p !== null) {
        content += decoder.write(p.data);
        p = p.next;
      }
      this._readableState.buffer.clear();
      if (content !== "")
        this._readableState.buffer.push(content);
      this._readableState.length = content.length;
      return this;
    };
    var MAX_HWM = 1073741824;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state) {
      if (n <= 0 || state.length === 0 && state.ended)
        return 0;
      if (state.objectMode)
        return 1;
      if (n !== n) {
        if (state.flowing && state.length)
          return state.buffer.head.data.length;
        else
          return state.length;
      }
      if (n > state.highWaterMark)
        state.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state.length)
        return n;
      if (!state.ended) {
        state.needReadable = true;
        return 0;
      }
      return state.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state = this._readableState;
      var nOrig = n;
      if (n !== 0)
        state.emittedReadable = false;
      if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
        debug("read: emitReadable", state.length, state.ended);
        if (state.length === 0 && state.ended)
          endReadable(this);
        else
          emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state);
      if (n === 0 && state.ended) {
        if (state.length === 0)
          endReadable(this);
        return null;
      }
      var doRead = state.needReadable;
      debug("need readable", doRead);
      if (state.length === 0 || state.length - n < state.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state.ended || state.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state.reading = true;
        state.sync = true;
        if (state.length === 0)
          state.needReadable = true;
        this._read(state.highWaterMark);
        state.sync = false;
        if (!state.reading)
          n = howMuchToRead(nOrig, state);
      }
      var ret;
      if (n > 0)
        ret = fromList(n, state);
      else
        ret = null;
      if (ret === null) {
        state.needReadable = state.length <= state.highWaterMark;
        n = 0;
      } else {
        state.length -= n;
        state.awaitDrain = 0;
      }
      if (state.length === 0) {
        if (!state.ended)
          state.needReadable = true;
        if (nOrig !== n && state.ended)
          endReadable(this);
      }
      if (ret !== null)
        this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state) {
      debug("onEofChunk");
      if (state.ended)
        return;
      if (state.decoder) {
        var chunk = state.decoder.end();
        if (chunk && chunk.length) {
          state.buffer.push(chunk);
          state.length += state.objectMode ? 1 : chunk.length;
        }
      }
      state.ended = true;
      if (state.sync) {
        emitReadable(stream);
      } else {
        state.needReadable = false;
        if (!state.emittedReadable) {
          state.emittedReadable = true;
          emitReadable_(stream);
        }
      }
    }
    function emitReadable(stream) {
      var state = stream._readableState;
      debug("emitReadable", state.needReadable, state.emittedReadable);
      state.needReadable = false;
      if (!state.emittedReadable) {
        debug("emitReadable", state.flowing);
        state.emittedReadable = true;
        process.nextTick(emitReadable_, stream);
      }
    }
    function emitReadable_(stream) {
      var state = stream._readableState;
      debug("emitReadable_", state.destroyed, state.length, state.ended);
      if (!state.destroyed && (state.length || state.ended)) {
        stream.emit("readable");
        state.emittedReadable = false;
      }
      state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
      flow(stream);
    }
    function maybeReadMore(stream, state) {
      if (!state.readingMore) {
        state.readingMore = true;
        process.nextTick(maybeReadMore_, stream, state);
      }
    }
    function maybeReadMore_(stream, state) {
      while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
        var len = state.length;
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state.length)
          break;
      }
      state.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state = this._readableState;
      switch (state.pipesCount) {
        case 0:
          state.pipes = dest;
          break;
        case 1:
          state.pipes = [state.pipes, dest];
          break;
        default:
          state.pipes.push(dest);
          break;
      }
      state.pipesCount += 1;
      debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state.endEmitted)
        process.nextTick(endFn);
      else
        src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
          ondrain();
      }
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        var ret = dest.write(chunk);
        debug("dest.write", ret);
        if (ret === false) {
          if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state.awaitDrain);
            state.awaitDrain++;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0)
          errorOrDestroy(dest, er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function pipeOnDrainFunctionResult() {
        var state = src._readableState;
        debug("pipeOnDrain", state.awaitDrain);
        if (state.awaitDrain)
          state.awaitDrain--;
        if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state = this._readableState;
      var unpipeInfo = {
        hasUnpiped: false
      };
      if (state.pipesCount === 0)
        return this;
      if (state.pipesCount === 1) {
        if (dest && dest !== state.pipes)
          return this;
        if (!dest)
          dest = state.pipes;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        if (dest)
          dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state.pipes;
        var len = state.pipesCount;
        state.pipes = null;
        state.pipesCount = 0;
        state.flowing = false;
        for (var i = 0; i < len; i++)
          dests[i].emit("unpipe", this, {
            hasUnpiped: false
          });
        return this;
      }
      var index = indexOf(state.pipes, dest);
      if (index === -1)
        return this;
      state.pipes.splice(index, 1);
      state.pipesCount -= 1;
      if (state.pipesCount === 1)
        state.pipes = state.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      var state = this._readableState;
      if (ev === "data") {
        state.readableListening = this.listenerCount("readable") > 0;
        if (state.flowing !== false)
          this.resume();
      } else if (ev === "readable") {
        if (!state.endEmitted && !state.readableListening) {
          state.readableListening = state.needReadable = true;
          state.flowing = false;
          state.emittedReadable = false;
          debug("on readable", state.length, state.reading);
          if (state.length) {
            emitReadable(this);
          } else if (!state.reading) {
            process.nextTick(nReadingNextTick, this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    Readable.prototype.removeListener = function(ev, fn) {
      var res = Stream.prototype.removeListener.call(this, ev, fn);
      if (ev === "readable") {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    Readable.prototype.removeAllListeners = function(ev) {
      var res = Stream.prototype.removeAllListeners.apply(this, arguments);
      if (ev === "readable" || ev === void 0) {
        process.nextTick(updateReadableListening, this);
      }
      return res;
    };
    function updateReadableListening(self2) {
      var state = self2._readableState;
      state.readableListening = self2.listenerCount("readable") > 0;
      if (state.resumeScheduled && !state.paused) {
        state.flowing = true;
      } else if (self2.listenerCount("data") > 0) {
        self2.resume();
      }
    }
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state = this._readableState;
      if (!state.flowing) {
        debug("resume");
        state.flowing = !state.readableListening;
        resume(this, state);
      }
      state.paused = false;
      return this;
    };
    function resume(stream, state) {
      if (!state.resumeScheduled) {
        state.resumeScheduled = true;
        process.nextTick(resume_, stream, state);
      }
    }
    function resume_(stream, state) {
      debug("resume", state.reading);
      if (!state.reading) {
        stream.read(0);
      }
      state.resumeScheduled = false;
      stream.emit("resume");
      flow(stream);
      if (state.flowing && !state.reading)
        stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (this._readableState.flowing !== false) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      this._readableState.paused = true;
      return this;
    };
    function flow(stream) {
      var state = stream._readableState;
      debug("flow", state.flowing);
      while (state.flowing && stream.read() !== null)
        ;
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state.decoder && !state.ended) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length)
            _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state.decoder)
          chunk = state.decoder.write(chunk);
        if (state.objectMode && (chunk === null || chunk === void 0))
          return;
        else if (!state.objectMode && (!chunk || !chunk.length))
          return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = function methodWrap(method) {
            return function methodWrapReturnFunction() {
              return stream[method].apply(stream, arguments);
            };
          }(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    if (typeof Symbol === "function") {
      Readable.prototype[Symbol.asyncIterator] = function() {
        if (createReadableStreamAsyncIterator === void 0) {
          createReadableStreamAsyncIterator = require_async_iterator();
        }
        return createReadableStreamAsyncIterator(this);
      };
    }
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      enumerable: false,
      get: function get() {
        return this._readableState.highWaterMark;
      }
    });
    Object.defineProperty(Readable.prototype, "readableBuffer", {
      enumerable: false,
      get: function get() {
        return this._readableState && this._readableState.buffer;
      }
    });
    Object.defineProperty(Readable.prototype, "readableFlowing", {
      enumerable: false,
      get: function get() {
        return this._readableState.flowing;
      },
      set: function set(state) {
        if (this._readableState) {
          this._readableState.flowing = state;
        }
      }
    });
    Readable._fromList = fromList;
    Object.defineProperty(Readable.prototype, "readableLength", {
      enumerable: false,
      get: function get() {
        return this._readableState.length;
      }
    });
    function fromList(n, state) {
      if (state.length === 0)
        return null;
      var ret;
      if (state.objectMode)
        ret = state.buffer.shift();
      else if (!n || n >= state.length) {
        if (state.decoder)
          ret = state.buffer.join("");
        else if (state.buffer.length === 1)
          ret = state.buffer.first();
        else
          ret = state.buffer.concat(state.length);
        state.buffer.clear();
      } else {
        ret = state.buffer.consume(n, state.decoder);
      }
      return ret;
    }
    function endReadable(stream) {
      var state = stream._readableState;
      debug("endReadable", state.endEmitted);
      if (!state.endEmitted) {
        state.ended = true;
        process.nextTick(endReadableNT, state, stream);
      }
    }
    function endReadableNT(state, stream) {
      debug("endReadableNT", state.endEmitted, state.length);
      if (!state.endEmitted && state.length === 0) {
        state.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
        if (state.autoDestroy) {
          var wState = stream._writableState;
          if (!wState || wState.autoDestroy && wState.finished) {
            stream.destroy();
          }
        }
      }
    }
    if (typeof Symbol === "function") {
      Readable.from = function(iterable, opts) {
        if (from2 === void 0) {
          from2 = require_from();
        }
        return from2(Readable, iterable, opts);
      };
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x)
          return i;
      }
      return -1;
    }
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_transform.js"(exports2, module2) {
    "use strict";
    module2.exports = Transform;
    var _require$codes = require_errors().codes;
    var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
    var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
    var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
    var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
    var Duplex = require_stream_duplex();
    require_inherits()(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (cb === null) {
        return this.emit("error", new ERR_MULTIPLE_CALLBACK());
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options) {
      if (!(this instanceof Transform))
        return new Transform(options);
      Duplex.call(this, options);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options) {
        if (typeof options.transform === "function")
          this._transform = options.transform;
        if (typeof options.flush === "function")
          this._flush = options.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function" && !this._readableState.destroyed) {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
          this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
      });
    };
    function done(stream, er, data) {
      if (er)
        return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length)
        throw new ERR_TRANSFORM_WITH_LENGTH_0();
      if (stream._transformState.transforming)
        throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
      return stream.push(null);
    }
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/_stream_passthrough.js"(exports2, module2) {
    "use strict";
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    require_inherits()(PassThrough, Transform);
    function PassThrough(options) {
      if (!(this instanceof PassThrough))
        return new PassThrough(options);
      Transform.call(this, options);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/pipeline.js
var require_pipeline = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/lib/internal/streams/pipeline.js"(exports2, module2) {
    "use strict";
    var eos;
    function once(callback) {
      var called = false;
      return function() {
        if (called)
          return;
        called = true;
        callback.apply(void 0, arguments);
      };
    }
    var _require$codes = require_errors().codes;
    var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
    var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
    function noop(err) {
      if (err)
        throw err;
    }
    function isRequest(stream) {
      return stream.setHeader && typeof stream.abort === "function";
    }
    function destroyer(stream, reading, writing, callback) {
      callback = once(callback);
      var closed = false;
      stream.on("close", function() {
        closed = true;
      });
      if (eos === void 0)
        eos = require_end_of_stream();
      eos(stream, {
        readable: reading,
        writable: writing
      }, function(err) {
        if (err)
          return callback(err);
        closed = true;
        callback();
      });
      var destroyed = false;
      return function(err) {
        if (closed)
          return;
        if (destroyed)
          return;
        destroyed = true;
        if (isRequest(stream))
          return stream.abort();
        if (typeof stream.destroy === "function")
          return stream.destroy();
        callback(err || new ERR_STREAM_DESTROYED("pipe"));
      };
    }
    function call(fn) {
      fn();
    }
    function pipe(from2, to) {
      return from2.pipe(to);
    }
    function popCallback(streams) {
      if (!streams.length)
        return noop;
      if (typeof streams[streams.length - 1] !== "function")
        return noop;
      return streams.pop();
    }
    function pipeline() {
      for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
        streams[_key] = arguments[_key];
      }
      var callback = popCallback(streams);
      if (Array.isArray(streams[0]))
        streams = streams[0];
      if (streams.length < 2) {
        throw new ERR_MISSING_ARGS("streams");
      }
      var error;
      var destroys = streams.map(function(stream, i) {
        var reading = i < streams.length - 1;
        var writing = i > 0;
        return destroyer(stream, reading, writing, function(err) {
          if (!error)
            error = err;
          if (err)
            destroys.forEach(call);
          if (reading)
            return;
          destroys.forEach(call);
          callback(error);
        });
      });
      return streams.reduce(pipe);
    }
    module2.exports = pipeline;
  }
});

// node_modules/_readable-stream@3.6.2@readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/_readable-stream@3.6.2@readable-stream/readable.js"(exports2, module2) {
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream.Readable;
      Object.assign(module2.exports, Stream);
      module2.exports.Stream = Stream;
    } else {
      exports2 = module2.exports = require_stream_readable();
      exports2.Stream = Stream || exports2;
      exports2.Readable = exports2;
      exports2.Writable = require_stream_writable();
      exports2.Duplex = require_stream_duplex();
      exports2.Transform = require_stream_transform();
      exports2.PassThrough = require_stream_passthrough();
      exports2.finished = require_end_of_stream();
      exports2.pipeline = require_pipeline();
    }
  }
});

// node_modules/_bl@5.1.0@bl/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/_bl@5.1.0@bl/BufferList.js"(exports2, module2) {
    "use strict";
    var { Buffer: Buffer2 } = require("buffer");
    var symbol = Symbol.for("BufferList");
    function BufferList(buf) {
      if (!(this instanceof BufferList)) {
        return new BufferList(buf);
      }
      BufferList._init.call(this, buf);
    }
    BufferList._init = function _init(buf) {
      Object.defineProperty(this, symbol, { value: true });
      this._bufs = [];
      this.length = 0;
      if (buf) {
        this.append(buf);
      }
    };
    BufferList.prototype._new = function _new(buf) {
      return new BufferList(buf);
    };
    BufferList.prototype._offset = function _offset(offset) {
      if (offset === 0) {
        return [0, 0];
      }
      let tot = 0;
      for (let i = 0; i < this._bufs.length; i++) {
        const _t = tot + this._bufs[i].length;
        if (offset < _t || i === this._bufs.length - 1) {
          return [i, offset - tot];
        }
        tot = _t;
      }
    };
    BufferList.prototype._reverseOffset = function(blOffset) {
      const bufferId = blOffset[0];
      let offset = blOffset[1];
      for (let i = 0; i < bufferId; i++) {
        offset += this._bufs[i].length;
      }
      return offset;
    };
    BufferList.prototype.get = function get(index) {
      if (index > this.length || index < 0) {
        return void 0;
      }
      const offset = this._offset(index);
      return this._bufs[offset[0]][offset[1]];
    };
    BufferList.prototype.slice = function slice(start, end) {
      if (typeof start === "number" && start < 0) {
        start += this.length;
      }
      if (typeof end === "number" && end < 0) {
        end += this.length;
      }
      return this.copy(null, 0, start, end);
    };
    BufferList.prototype.copy = function copy(dst, dstStart, srcStart, srcEnd) {
      if (typeof srcStart !== "number" || srcStart < 0) {
        srcStart = 0;
      }
      if (typeof srcEnd !== "number" || srcEnd > this.length) {
        srcEnd = this.length;
      }
      if (srcStart >= this.length) {
        return dst || Buffer2.alloc(0);
      }
      if (srcEnd <= 0) {
        return dst || Buffer2.alloc(0);
      }
      const copy2 = !!dst;
      const off = this._offset(srcStart);
      const len = srcEnd - srcStart;
      let bytes = len;
      let bufoff = copy2 && dstStart || 0;
      let start = off[1];
      if (srcStart === 0 && srcEnd === this.length) {
        if (!copy2) {
          return this._bufs.length === 1 ? this._bufs[0] : Buffer2.concat(this._bufs, this.length);
        }
        for (let i = 0; i < this._bufs.length; i++) {
          this._bufs[i].copy(dst, bufoff);
          bufoff += this._bufs[i].length;
        }
        return dst;
      }
      if (bytes <= this._bufs[off[0]].length - start) {
        return copy2 ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes) : this._bufs[off[0]].slice(start, start + bytes);
      }
      if (!copy2) {
        dst = Buffer2.allocUnsafe(len);
      }
      for (let i = off[0]; i < this._bufs.length; i++) {
        const l = this._bufs[i].length - start;
        if (bytes > l) {
          this._bufs[i].copy(dst, bufoff, start);
          bufoff += l;
        } else {
          this._bufs[i].copy(dst, bufoff, start, start + bytes);
          bufoff += l;
          break;
        }
        bytes -= l;
        if (start) {
          start = 0;
        }
      }
      if (dst.length > bufoff)
        return dst.slice(0, bufoff);
      return dst;
    };
    BufferList.prototype.shallowSlice = function shallowSlice(start, end) {
      start = start || 0;
      end = typeof end !== "number" ? this.length : end;
      if (start < 0) {
        start += this.length;
      }
      if (end < 0) {
        end += this.length;
      }
      if (start === end) {
        return this._new();
      }
      const startOffset = this._offset(start);
      const endOffset = this._offset(end);
      const buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1);
      if (endOffset[1] === 0) {
        buffers.pop();
      } else {
        buffers[buffers.length - 1] = buffers[buffers.length - 1].slice(0, endOffset[1]);
      }
      if (startOffset[1] !== 0) {
        buffers[0] = buffers[0].slice(startOffset[1]);
      }
      return this._new(buffers);
    };
    BufferList.prototype.toString = function toString(encoding, start, end) {
      return this.slice(start, end).toString(encoding);
    };
    BufferList.prototype.consume = function consume(bytes) {
      bytes = Math.trunc(bytes);
      if (Number.isNaN(bytes) || bytes <= 0)
        return this;
      while (this._bufs.length) {
        if (bytes >= this._bufs[0].length) {
          bytes -= this._bufs[0].length;
          this.length -= this._bufs[0].length;
          this._bufs.shift();
        } else {
          this._bufs[0] = this._bufs[0].slice(bytes);
          this.length -= bytes;
          break;
        }
      }
      return this;
    };
    BufferList.prototype.duplicate = function duplicate() {
      const copy = this._new();
      for (let i = 0; i < this._bufs.length; i++) {
        copy.append(this._bufs[i]);
      }
      return copy;
    };
    BufferList.prototype.append = function append(buf) {
      if (buf == null) {
        return this;
      }
      if (buf.buffer) {
        this._appendBuffer(Buffer2.from(buf.buffer, buf.byteOffset, buf.byteLength));
      } else if (Array.isArray(buf)) {
        for (let i = 0; i < buf.length; i++) {
          this.append(buf[i]);
        }
      } else if (this._isBufferList(buf)) {
        for (let i = 0; i < buf._bufs.length; i++) {
          this.append(buf._bufs[i]);
        }
      } else {
        if (typeof buf === "number") {
          buf = buf.toString();
        }
        this._appendBuffer(Buffer2.from(buf));
      }
      return this;
    };
    BufferList.prototype._appendBuffer = function appendBuffer(buf) {
      this._bufs.push(buf);
      this.length += buf.length;
    };
    BufferList.prototype.indexOf = function(search, offset, encoding) {
      if (encoding === void 0 && typeof offset === "string") {
        encoding = offset;
        offset = void 0;
      }
      if (typeof search === "function" || Array.isArray(search)) {
        throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
      } else if (typeof search === "number") {
        search = Buffer2.from([search]);
      } else if (typeof search === "string") {
        search = Buffer2.from(search, encoding);
      } else if (this._isBufferList(search)) {
        search = search.slice();
      } else if (Array.isArray(search.buffer)) {
        search = Buffer2.from(search.buffer, search.byteOffset, search.byteLength);
      } else if (!Buffer2.isBuffer(search)) {
        search = Buffer2.from(search);
      }
      offset = Number(offset || 0);
      if (isNaN(offset)) {
        offset = 0;
      }
      if (offset < 0) {
        offset = this.length + offset;
      }
      if (offset < 0) {
        offset = 0;
      }
      if (search.length === 0) {
        return offset > this.length ? this.length : offset;
      }
      const blOffset = this._offset(offset);
      let blIndex = blOffset[0];
      let buffOffset = blOffset[1];
      for (; blIndex < this._bufs.length; blIndex++) {
        const buff = this._bufs[blIndex];
        while (buffOffset < buff.length) {
          const availableWindow = buff.length - buffOffset;
          if (availableWindow >= search.length) {
            const nativeSearchResult = buff.indexOf(search, buffOffset);
            if (nativeSearchResult !== -1) {
              return this._reverseOffset([blIndex, nativeSearchResult]);
            }
            buffOffset = buff.length - search.length + 1;
          } else {
            const revOffset = this._reverseOffset([blIndex, buffOffset]);
            if (this._match(revOffset, search)) {
              return revOffset;
            }
            buffOffset++;
          }
        }
        buffOffset = 0;
      }
      return -1;
    };
    BufferList.prototype._match = function(offset, search) {
      if (this.length - offset < search.length) {
        return false;
      }
      for (let searchOffset = 0; searchOffset < search.length; searchOffset++) {
        if (this.get(offset + searchOffset) !== search[searchOffset]) {
          return false;
        }
      }
      return true;
    };
    (function() {
      const methods = {
        readDoubleBE: 8,
        readDoubleLE: 8,
        readFloatBE: 4,
        readFloatLE: 4,
        readInt32BE: 4,
        readInt32LE: 4,
        readUInt32BE: 4,
        readUInt32LE: 4,
        readInt16BE: 2,
        readInt16LE: 2,
        readUInt16BE: 2,
        readUInt16LE: 2,
        readInt8: 1,
        readUInt8: 1,
        readIntBE: null,
        readIntLE: null,
        readUIntBE: null,
        readUIntLE: null
      };
      for (const m in methods) {
        (function(m2) {
          if (methods[m2] === null) {
            BufferList.prototype[m2] = function(offset, byteLength) {
              return this.slice(offset, offset + byteLength)[m2](0, byteLength);
            };
          } else {
            BufferList.prototype[m2] = function(offset = 0) {
              return this.slice(offset, offset + methods[m2])[m2](0);
            };
          }
        })(m);
      }
    })();
    BufferList.prototype._isBufferList = function _isBufferList(b) {
      return b instanceof BufferList || BufferList.isBufferList(b);
    };
    BufferList.isBufferList = function isBufferList(b) {
      return b != null && b[symbol];
    };
    module2.exports = BufferList;
  }
});

// node_modules/_bl@5.1.0@bl/bl.js
var require_bl = __commonJS({
  "node_modules/_bl@5.1.0@bl/bl.js"(exports2, module2) {
    "use strict";
    var DuplexStream = require_readable().Duplex;
    var inherits = require_inherits();
    var BufferList = require_BufferList();
    function BufferListStream(callback) {
      if (!(this instanceof BufferListStream)) {
        return new BufferListStream(callback);
      }
      if (typeof callback === "function") {
        this._callback = callback;
        const piper = function piper2(err) {
          if (this._callback) {
            this._callback(err);
            this._callback = null;
          }
        }.bind(this);
        this.on("pipe", function onPipe(src) {
          src.on("error", piper);
        });
        this.on("unpipe", function onUnpipe(src) {
          src.removeListener("error", piper);
        });
        callback = null;
      }
      BufferList._init.call(this, callback);
      DuplexStream.call(this);
    }
    inherits(BufferListStream, DuplexStream);
    Object.assign(BufferListStream.prototype, BufferList.prototype);
    BufferListStream.prototype._new = function _new(callback) {
      return new BufferListStream(callback);
    };
    BufferListStream.prototype._write = function _write(buf, encoding, callback) {
      this._appendBuffer(buf);
      if (typeof callback === "function") {
        callback();
      }
    };
    BufferListStream.prototype._read = function _read(size) {
      if (!this.length) {
        return this.push(null);
      }
      size = Math.min(size, this.length);
      this.push(this.slice(0, size));
      this.consume(size);
    };
    BufferListStream.prototype.end = function end(chunk) {
      DuplexStream.prototype.end.call(this, chunk);
      if (this._callback) {
        this._callback(null, this.slice());
        this._callback = null;
      }
    };
    BufferListStream.prototype._destroy = function _destroy(err, cb) {
      this._bufs.length = 0;
      this.length = 0;
      cb(err);
    };
    BufferListStream.prototype._isBufferList = function _isBufferList(b) {
      return b instanceof BufferListStream || b instanceof BufferList || BufferListStream.isBufferList(b);
    };
    BufferListStream.isBufferList = BufferList.isBufferList;
    module2.exports = BufferListStream;
    module2.exports.BufferListStream = BufferListStream;
    module2.exports.BufferList = BufferList;
  }
});

// node_modules/_msgpack5@6.0.2@msgpack5/lib/streams.js
var require_streams = __commonJS({
  "node_modules/_msgpack5@6.0.2@msgpack5/lib/streams.js"(exports2, module2) {
    "use strict";
    var Transform = require_readable().Transform;
    var inherits = require_inherits();
    var bl = require_bl();
    function Base(opts) {
      opts = opts || {};
      opts.objectMode = true;
      opts.highWaterMark = 16;
      Transform.call(this, opts);
      this._msgpack = opts.msgpack;
    }
    inherits(Base, Transform);
    function Encoder(opts) {
      if (!(this instanceof Encoder)) {
        opts = opts || {};
        opts.msgpack = this;
        return new Encoder(opts);
      }
      Base.call(this, opts);
      this._wrap = "wrap" in opts && opts.wrap;
    }
    inherits(Encoder, Base);
    Encoder.prototype._transform = function(obj, enc, done) {
      let buf = null;
      try {
        buf = this._msgpack.encode(this._wrap ? obj.value : obj).slice(0);
      } catch (err) {
        this.emit("error", err);
        return done();
      }
      this.push(buf);
      done();
    };
    function Decoder(opts) {
      if (!(this instanceof Decoder)) {
        opts = opts || {};
        opts.msgpack = this;
        return new Decoder(opts);
      }
      Base.call(this, opts);
      this._chunks = bl();
      this._wrap = "wrap" in opts && opts.wrap;
    }
    inherits(Decoder, Base);
    Decoder.prototype._transform = function(buf, enc, done) {
      if (buf) {
        this._chunks.append(buf);
      }
      try {
        let result = this._msgpack.decode(this._chunks);
        if (this._wrap) {
          result = { value: result };
        }
        this.push(result);
      } catch (err) {
        if (err instanceof this._msgpack.IncompleteBufferError) {
          done();
        } else {
          this.emit("error", err);
        }
        return;
      }
      if (this._chunks.length > 0) {
        this._transform(null, enc, done);
      } else {
        done();
      }
    };
    module2.exports.decoder = Decoder;
    module2.exports.encoder = Encoder;
  }
});

// node_modules/_msgpack5@6.0.2@msgpack5/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/_msgpack5@6.0.2@msgpack5/lib/helpers.js"(exports2) {
    "use strict";
    var util = require("util");
    exports2.IncompleteBufferError = IncompleteBufferError;
    function IncompleteBufferError(message) {
      Error.call(this);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
      this.name = this.constructor.name;
      this.message = message || "unable to decode";
    }
    util.inherits(IncompleteBufferError, Error);
    exports2.isFloat = function isFloat(n) {
      return n % 1 !== 0;
    };
  }
});

// node_modules/_msgpack5@6.0.2@msgpack5/lib/decoder.js
var require_decoder = __commonJS({
  "node_modules/_msgpack5@6.0.2@msgpack5/lib/decoder.js"(exports2, module2) {
    "use strict";
    var bl = require_bl();
    var IncompleteBufferError = require_helpers().IncompleteBufferError;
    var SIZES = {
      196: 2,
      197: 3,
      198: 5,
      199: 3,
      200: 4,
      201: 6,
      202: 5,
      203: 9,
      204: 2,
      205: 3,
      206: 5,
      207: 9,
      208: 2,
      209: 3,
      210: 5,
      211: 9,
      212: 3,
      213: 4,
      214: 6,
      215: 10,
      216: 18,
      217: 2,
      218: 3,
      219: 5,
      222: 3,
      220: 3,
      221: 5
    };
    function isValidDataSize(dataLength, bufLength, headerLength) {
      return bufLength >= headerLength + dataLength;
    }
    module2.exports = function buildDecode(decodingTypes, options) {
      const context = { decodingTypes, options, decode };
      return decode;
      function decode(buf) {
        if (!bl.isBufferList(buf)) {
          buf = bl(buf);
        }
        const result = tryDecode(buf, 0, context);
        if (!result)
          throw new IncompleteBufferError();
        buf.consume(result[1]);
        return result[0];
      }
    };
    function decodeArray(buf, initialOffset, length, headerLength, context) {
      let offset = initialOffset;
      const result = [];
      let i = 0;
      while (i++ < length) {
        const decodeResult = tryDecode(buf, offset, context);
        if (!decodeResult)
          return null;
        result.push(decodeResult[0]);
        offset += decodeResult[1];
      }
      return [result, headerLength + offset - initialOffset];
    }
    function decodeMap(buf, offset, length, headerLength, context) {
      const _temp = decodeArray(buf, offset, 2 * length, headerLength, context);
      if (!_temp)
        return null;
      const [result, consumedBytes] = _temp;
      let isPlainObject = !context.options.preferMap;
      if (isPlainObject) {
        for (let i = 0; i < 2 * length; i += 2) {
          if (typeof result[i] !== "string") {
            isPlainObject = false;
            break;
          }
        }
      }
      if (isPlainObject) {
        const object = {};
        for (let i = 0; i < 2 * length; i += 2) {
          const key = result[i];
          const val = result[i + 1];
          if (key === "__proto__") {
            if (context.options.protoAction === "error") {
              throw new SyntaxError("Object contains forbidden prototype property");
            }
            if (context.options.protoAction === "remove") {
              continue;
            }
          }
          object[key] = val;
        }
        return [object, consumedBytes];
      } else {
        const mapping = /* @__PURE__ */ new Map();
        for (let i = 0; i < 2 * length; i += 2) {
          const key = result[i];
          const val = result[i + 1];
          mapping.set(key, val);
        }
        return [mapping, consumedBytes];
      }
    }
    function tryDecode(buf, initialOffset, context) {
      if (buf.length <= initialOffset)
        return null;
      const bufLength = buf.length - initialOffset;
      let offset = initialOffset;
      const first = buf.readUInt8(offset);
      offset += 1;
      const size = SIZES[first] || -1;
      if (bufLength < size)
        return null;
      if (first < 128)
        return [first, 1];
      if ((first & 240) === 128) {
        const length = first & 15;
        const headerSize = offset - initialOffset;
        return decodeMap(buf, offset, length, headerSize, context);
      }
      if ((first & 240) === 144) {
        const length = first & 15;
        const headerSize = offset - initialOffset;
        return decodeArray(buf, offset, length, headerSize, context);
      }
      if ((first & 224) === 160) {
        const length = first & 31;
        if (!isValidDataSize(length, bufLength, 1))
          return null;
        const result = buf.toString("utf8", offset, offset + length);
        return [result, length + 1];
      }
      if (first >= 192 && first <= 195)
        return decodeConstants(first);
      if (first >= 196 && first <= 198) {
        const length = buf.readUIntBE(offset, size - 1);
        offset += size - 1;
        if (!isValidDataSize(length, bufLength, size))
          return null;
        const result = buf.slice(offset, offset + length);
        return [result, size + length];
      }
      if (first >= 199 && first <= 201) {
        const length = buf.readUIntBE(offset, size - 2);
        offset += size - 2;
        const type = buf.readInt8(offset);
        offset += 1;
        if (!isValidDataSize(length, bufLength, size))
          return null;
        return decodeExt(buf, offset, type, length, size, context);
      }
      if (first >= 202 && first <= 203)
        return decodeFloat(buf, offset, size - 1);
      if (first >= 204 && first <= 207)
        return decodeUnsignedInt(buf, offset, size - 1);
      if (first >= 208 && first <= 211)
        return decodeSigned(buf, offset, size - 1);
      if (first >= 212 && first <= 216) {
        const type = buf.readInt8(offset);
        offset += 1;
        return decodeExt(buf, offset, type, size - 2, 2, context);
      }
      if (first >= 217 && first <= 219) {
        const length = buf.readUIntBE(offset, size - 1);
        offset += size - 1;
        if (!isValidDataSize(length, bufLength, size))
          return null;
        const result = buf.toString("utf8", offset, offset + length);
        return [result, size + length];
      }
      if (first >= 220 && first <= 221) {
        const length = buf.readUIntBE(offset, size - 1);
        offset += size - 1;
        return decodeArray(buf, offset, length, size, context);
      }
      if (first >= 222 && first <= 223) {
        let length;
        switch (first) {
          case 222:
            length = buf.readUInt16BE(offset);
            offset += 2;
            return decodeMap(buf, offset, length, 3, context);
          case 223:
            length = buf.readUInt32BE(offset);
            offset += 4;
            return decodeMap(buf, offset, length, 5, context);
        }
      }
      if (first >= 224)
        return [first - 256, 1];
      throw new Error("not implemented yet");
    }
    function decodeSigned(buf, offset, size) {
      let result;
      if (size === 1)
        result = buf.readInt8(offset);
      if (size === 2)
        result = buf.readInt16BE(offset);
      if (size === 4)
        result = buf.readInt32BE(offset);
      if (size === 8)
        result = readInt64BE(buf.slice(offset, offset + 8), 0);
      return [result, size + 1];
    }
    function decodeExt(buf, offset, type, size, headerSize, context) {
      const toDecode = buf.slice(offset, offset + size);
      const decode = context.decodingTypes.get(type);
      if (!decode)
        throw new Error("unable to find ext type " + type);
      const value = decode(toDecode);
      return [value, headerSize + size];
    }
    function decodeUnsignedInt(buf, offset, size) {
      const maxOffset = offset + size;
      let result = 0;
      while (offset < maxOffset) {
        result += buf.readUInt8(offset++) * Math.pow(256, maxOffset - offset);
      }
      return [result, size + 1];
    }
    function decodeConstants(first) {
      if (first === 192)
        return [null, 1];
      if (first === 194)
        return [false, 1];
      if (first === 195)
        return [true, 1];
    }
    function decodeFloat(buf, offset, size) {
      let result;
      if (size === 4)
        result = buf.readFloatBE(offset);
      if (size === 8)
        result = buf.readDoubleBE(offset);
      return [result, size + 1];
    }
    function readInt64BE(buf, offset) {
      var negate = (buf[offset] & 128) == 128;
      if (negate) {
        let carry = 1;
        for (let i = offset + 7; i >= offset; i--) {
          const v = (buf[i] ^ 255) + carry;
          buf[i] = v & 255;
          carry = v >> 8;
        }
      }
      const hi = buf.readUInt32BE(offset + 0);
      const lo = buf.readUInt32BE(offset + 4);
      return (hi * 4294967296 + lo) * (negate ? -1 : 1);
    }
  }
});

// node_modules/_msgpack5@6.0.2@msgpack5/lib/encoder.js
var require_encoder = __commonJS({
  "node_modules/_msgpack5@6.0.2@msgpack5/lib/encoder.js"(exports2, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer_5_2().Buffer;
    var bl = require_bl();
    var isFloat = require_helpers().isFloat;
    module2.exports = function buildEncode(encodingTypes, options) {
      function encode(obj) {
        if (obj === void 0)
          throw new Error("undefined is not encodable in msgpack!");
        if (obj === null)
          return Buffer2.from([192]);
        if (obj === true)
          return Buffer2.from([195]);
        if (obj === false)
          return Buffer2.from([194]);
        if (obj instanceof Map)
          return encodeMap(obj, options, encode);
        if (typeof obj === "string")
          return encodeString(obj, options);
        if (obj && (obj.readUInt32LE || obj instanceof Uint8Array)) {
          if (obj instanceof Uint8Array) {
            obj = Buffer2.from(obj);
          }
          const _getBufferHeader = options.compatibilityMode ? getCompatibleBufferHeader : getBufferHeader;
          return bl([_getBufferHeader(obj.length), obj]);
        }
        if (Array.isArray(obj))
          return encodeArray(obj, encode);
        if (typeof obj === "object")
          return encodeExt(obj, encodingTypes) || encodeObject(obj, options, encode);
        if (typeof obj === "number")
          return encodeNumber(obj, options);
        throw new Error("not implemented yet");
      }
      return function(obj) {
        return encode(obj).slice();
      };
    };
    function encodeArray(array, encode) {
      const acc = [getHeader(array.length, 144, 220)];
      array.forEach((item) => {
        acc.push(encode(item));
      });
      if (acc.length !== array.length + 1) {
        throw new Error("Sparse arrays are not encodable in msgpack");
      }
      return bl(acc);
    }
    function encodeMap(map, options, encode) {
      const acc = [getHeader(map.size, 128, 222)];
      const keys = [...map.keys()];
      if (!options.preferMap) {
        if (keys.every((item) => typeof item === "string")) {
          console.warn("Map with string only keys will be deserialized as an object!");
        }
      }
      keys.forEach((key) => {
        acc.push(encode(key), encode(map.get(key)));
      });
      return bl(acc);
    }
    function encodeObject(obj, options, encode) {
      const keys = [];
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== void 0 && typeof obj[key] !== "function") {
          keys.push(key);
        }
      }
      const acc = [getHeader(keys.length, 128, 222)];
      if (options.sortKeys)
        keys.sort();
      keys.forEach((key) => {
        acc.push(encode(key), encode(obj[key]));
      });
      return bl(acc);
    }
    function write64BitUint(buf, offset, num) {
      const lo = num % 4294967296;
      const hi = Math.floor(num / 4294967296);
      buf.writeUInt32BE(hi, offset + 0);
      buf.writeUInt32BE(lo, offset + 4);
    }
    function write64BitInt(buf, offset, num) {
      const negate = num < 0;
      num = Math.abs(num);
      write64BitUint(buf, offset, num);
      if (negate)
        negate64BitInt(buf, offset);
    }
    function negate64BitInt(buf, offset) {
      let i = offset + 8;
      while (i-- > offset) {
        if (buf[i] === 0)
          continue;
        buf[i] = (buf[i] ^ 255) + 1;
        break;
      }
      while (i-- > offset) {
        buf[i] = buf[i] ^ 255;
      }
    }
    var fround = Math.fround;
    function encodeFloat(obj, forceFloat64) {
      let buf;
      if (forceFloat64 || !fround || !Object.is(fround(obj), obj)) {
        buf = Buffer2.allocUnsafe(9);
        buf[0] = 203;
        buf.writeDoubleBE(obj, 1);
      } else {
        buf = Buffer2.allocUnsafe(5);
        buf[0] = 202;
        buf.writeFloatBE(obj, 1);
      }
      return buf;
    }
    function encodeExt(obj, encodingTypes) {
      const codec = encodingTypes.find((codec2) => codec2.check(obj));
      if (!codec)
        return null;
      const encoded = codec.encode(obj);
      if (!encoded)
        return null;
      return bl([getExtHeader(encoded.length - 1), encoded]);
    }
    function getExtHeader(length) {
      if (length === 1)
        return Buffer2.from([212]);
      if (length === 2)
        return Buffer2.from([213]);
      if (length === 4)
        return Buffer2.from([214]);
      if (length === 8)
        return Buffer2.from([215]);
      if (length === 16)
        return Buffer2.from([216]);
      if (length < 256)
        return Buffer2.from([199, length]);
      if (length < 65536)
        return Buffer2.from([200, length >> 8, length & 255]);
      return Buffer2.from([201, length >> 24, length >> 16 & 255, length >> 8 & 255, length & 255]);
    }
    function getHeader(length, tag1, tag2) {
      if (length < 16)
        return Buffer2.from([tag1 | length]);
      const size = length < 65536 ? 2 : 4;
      const buf = Buffer2.allocUnsafe(1 + size);
      buf[0] = length < 65536 ? tag2 : tag2 + 1;
      buf.writeUIntBE(length, 1, size);
      return buf;
    }
    function encodeString(obj, options) {
      const len = Buffer2.byteLength(obj);
      let buf;
      if (len < 32) {
        buf = Buffer2.allocUnsafe(1 + len);
        buf[0] = 160 | len;
        if (len > 0) {
          buf.write(obj, 1);
        }
      } else if (len <= 255 && !options.compatibilityMode) {
        buf = Buffer2.allocUnsafe(2 + len);
        buf[0] = 217;
        buf[1] = len;
        buf.write(obj, 2);
      } else if (len <= 65535) {
        buf = Buffer2.allocUnsafe(3 + len);
        buf[0] = 218;
        buf.writeUInt16BE(len, 1);
        buf.write(obj, 3);
      } else {
        buf = Buffer2.allocUnsafe(5 + len);
        buf[0] = 219;
        buf.writeUInt32BE(len, 1);
        buf.write(obj, 5);
      }
      return buf;
    }
    function getBufferHeader(length) {
      let header;
      if (length <= 255) {
        header = Buffer2.allocUnsafe(2);
        header[0] = 196;
        header[1] = length;
      } else if (length <= 65535) {
        header = Buffer2.allocUnsafe(3);
        header[0] = 197;
        header.writeUInt16BE(length, 1);
      } else {
        header = Buffer2.allocUnsafe(5);
        header[0] = 198;
        header.writeUInt32BE(length, 1);
      }
      return header;
    }
    function getCompatibleBufferHeader(length) {
      let header;
      if (length <= 31) {
        header = Buffer2.allocUnsafe(1);
        header[0] = 160 | length;
      } else if (length <= 65535) {
        header = Buffer2.allocUnsafe(3);
        header[0] = 218;
        header.writeUInt16BE(length, 1);
      } else {
        header = Buffer2.allocUnsafe(5);
        header[0] = 219;
        header.writeUInt32BE(length, 1);
      }
      return header;
    }
    function encodeNumber(obj, options) {
      let buf;
      if (isFloat(obj))
        return encodeFloat(obj, options.forceFloat64);
      if (Math.abs(obj) > 9007199254740991) {
        return encodeFloat(obj, true);
      }
      if (obj >= 0) {
        if (obj < 128) {
          return Buffer2.from([obj]);
        } else if (obj < 256) {
          return Buffer2.from([204, obj]);
        } else if (obj < 65536) {
          return Buffer2.from([205, 255 & obj >> 8, 255 & obj]);
        } else if (obj <= 4294967295) {
          return Buffer2.from([206, 255 & obj >> 24, 255 & obj >> 16, 255 & obj >> 8, 255 & obj]);
        } else if (obj <= 9007199254740991) {
          buf = Buffer2.allocUnsafe(9);
          buf[0] = 207;
          write64BitUint(buf, 1, obj);
        }
      } else {
        if (obj >= -32) {
          buf = Buffer2.allocUnsafe(1);
          buf[0] = 256 + obj;
        } else if (obj >= -128) {
          buf = Buffer2.allocUnsafe(2);
          buf[0] = 208;
          buf.writeInt8(obj, 1);
        } else if (obj >= -32768) {
          buf = Buffer2.allocUnsafe(3);
          buf[0] = 209;
          buf.writeInt16BE(obj, 1);
        } else if (obj > -214748365) {
          buf = Buffer2.allocUnsafe(5);
          buf[0] = 210;
          buf.writeInt32BE(obj, 1);
        } else if (obj >= -9007199254740991) {
          buf = Buffer2.allocUnsafe(9);
          buf[0] = 211;
          write64BitInt(buf, 1, obj);
        }
      }
      return buf;
    }
  }
});

// node_modules/_msgpack5@6.0.2@msgpack5/lib/codecs/DateCodec.js
var require_DateCodec = __commonJS({
  "node_modules/_msgpack5@6.0.2@msgpack5/lib/codecs/DateCodec.js"(exports2, module2) {
    var type = -1;
    function encode(dt) {
      if (dt === null) {
        return;
      }
      const millis = dt * 1;
      const seconds = Math.floor(millis / 1e3);
      const nanos = (millis - seconds * 1e3) * 1e6;
      if (seconds < 0 || seconds > 17179869184) {
        const encoded = Buffer.allocUnsafe(13);
        encoded[0] = -1;
        encoded.writeUInt32BE(nanos, 1);
        let hex = "";
        if (seconds >= 0) {
          const padhex = "0000000000000000";
          hex = seconds.toString(16);
          hex = padhex.slice(0, hex.length * -1) + hex;
        } else {
          let bin = (seconds * -1).toString(2);
          let i = bin.length - 1;
          while (bin[i] === "0") {
            i--;
          }
          bin = bin.slice(0, i).split("").map(function(bit) {
            return bit === "1" ? 0 : 1;
          }).join("") + bin.slice(i, bin.length);
          const pad64 = "1111111111111111111111111111111111111111111111111111111111111111";
          bin = pad64.slice(0, bin.length * -1) + bin;
          bin.match(/.{1,8}/g).forEach(function(byte) {
            byte = parseInt(byte, 2).toString(16);
            if (byte.length === 1) {
              byte = "0" + byte;
            }
            hex += byte;
          });
        }
        encoded.write(hex, 5, "hex");
        return encoded;
      } else if (nanos || seconds > 4294967295) {
        const encoded = Buffer.allocUnsafe(9);
        encoded[0] = -1;
        const upperNanos = nanos * 4;
        const upperSeconds = seconds / Math.pow(2, 32);
        const upper = upperNanos + upperSeconds & 4294967295;
        const lower = seconds & 4294967295;
        encoded.writeInt32BE(upper, 1);
        encoded.writeInt32BE(lower, 5);
        return encoded;
      } else {
        const encoded = Buffer.allocUnsafe(5);
        encoded[0] = -1;
        encoded.writeUInt32BE(Math.floor(millis / 1e3), 1);
        return encoded;
      }
    }
    function check(obj) {
      return typeof obj.getDate === "function";
    }
    function decode(buf) {
      let seconds;
      let nanoseconds = 0;
      let upper;
      let lower;
      let hex;
      switch (buf.length) {
        case 4:
          seconds = buf.readUInt32BE(0);
          break;
        case 8:
          upper = buf.readUInt32BE(0);
          lower = buf.readUInt32BE(4);
          nanoseconds = upper / 4;
          seconds = (upper & 3) * Math.pow(2, 32) + lower;
          break;
        case 12:
          hex = buf.toString("hex", 4, 12);
          if (parseInt(buf.toString("hex", 4, 6), 16) & 128) {
            let bin = "";
            const pad8 = "00000000";
            hex.match(/.{1,2}/g).forEach(function(byte) {
              byte = parseInt(byte, 16).toString(2);
              byte = pad8.slice(0, byte.length * -1) + byte;
              bin += byte;
            });
            seconds = -1 * parseInt(bin.split("").map(function(bit) {
              return bit === "1" ? 0 : 1;
            }).join(""), 2) - 1;
          } else {
            seconds = parseInt(hex, 16);
          }
          nanoseconds = buf.readUInt32BE(0);
      }
      const millis = seconds * 1e3 + Math.round(nanoseconds / 1e6);
      return new Date(millis);
    }
    module2.exports = { check, type, encode, decode };
  }
});

// node_modules/_msgpack5@6.0.2@msgpack5/index.js
var require_msgpack5_6_0 = __commonJS({
  "node_modules/_msgpack5@6.0.2@msgpack5/index.js"(exports2, module2) {
    "use strict";
    var Buffer2 = require_safe_buffer_5_2().Buffer;
    var assert = require("assert");
    var bl = require_bl();
    var streams = require_streams();
    var buildDecode = require_decoder();
    var buildEncode = require_encoder();
    var IncompleteBufferError = require_helpers().IncompleteBufferError;
    var DateCodec = require_DateCodec();
    function msgpack(options) {
      const encodingTypes = [];
      const decodingTypes = /* @__PURE__ */ new Map();
      options = options || {
        forceFloat64: false,
        compatibilityMode: false,
        disableTimestampEncoding: false,
        preferMap: false,
        protoAction: "error"
      };
      decodingTypes.set(DateCodec.type, DateCodec.decode);
      if (!options.disableTimestampEncoding) {
        encodingTypes.push(DateCodec);
      }
      function registerEncoder(check, encode) {
        assert(check, "must have an encode function");
        assert(encode, "must have an encode function");
        encodingTypes.push({ check, encode });
        return this;
      }
      function registerDecoder(type, decode) {
        assert(type >= 0, "must have a non-negative type");
        assert(decode, "must have a decode function");
        decodingTypes.set(type, decode);
        return this;
      }
      function register(type, constructor, encode, decode) {
        assert(constructor, "must have a constructor");
        assert(encode, "must have an encode function");
        assert(type >= 0, "must have a non-negative type");
        assert(decode, "must have a decode function");
        function check(obj) {
          return obj instanceof constructor;
        }
        function reEncode(obj) {
          const buf = bl();
          const header = Buffer2.allocUnsafe(1);
          header.writeInt8(type, 0);
          buf.append(header);
          buf.append(encode(obj));
          return buf;
        }
        this.registerEncoder(check, reEncode);
        this.registerDecoder(type, decode);
        return this;
      }
      return {
        encode: buildEncode(encodingTypes, options),
        decode: buildDecode(decodingTypes, options),
        register,
        registerEncoder,
        registerDecoder,
        encoder: streams.encoder,
        decoder: streams.decoder,
        buffer: true,
        type: "msgpack5",
        IncompleteBufferError
      };
    }
    module2.exports = msgpack;
  }
});

// node_modules/_nofilter@3.1.0@nofilter/lib/index.js
var require_lib = __commonJS({
  "node_modules/_nofilter@3.1.0@nofilter/lib/index.js"(exports2, module2) {
    "use strict";
    var stream = require("stream");
    var { Buffer: Buffer2 } = require("buffer");
    var td = new TextDecoder("utf8", { fatal: true, ignoreBOM: true });
    var NoFilter = class extends stream.Transform {
      constructor(input, inputEncoding, options = {}) {
        let inp = null;
        let inpE = null;
        switch (typeof input) {
          case "object":
            if (Buffer2.isBuffer(input)) {
              inp = input;
            } else if (input) {
              options = input;
            }
            break;
          case "string":
            inp = input;
            break;
          case "undefined":
            break;
          default:
            throw new TypeError("Invalid input");
        }
        switch (typeof inputEncoding) {
          case "object":
            if (inputEncoding) {
              options = inputEncoding;
            }
            break;
          case "string":
            inpE = inputEncoding;
            break;
          case "undefined":
            break;
          default:
            throw new TypeError("Invalid inputEncoding");
        }
        if (!options || typeof options !== "object") {
          throw new TypeError("Invalid options");
        }
        if (inp == null) {
          inp = options.input;
        }
        if (inpE == null) {
          inpE = options.inputEncoding;
        }
        delete options.input;
        delete options.inputEncoding;
        const watchPipe = options.watchPipe == null ? true : options.watchPipe;
        delete options.watchPipe;
        const readError = Boolean(options.readError);
        delete options.readError;
        super(options);
        this.readError = readError;
        if (watchPipe) {
          this.on("pipe", (readable) => {
            const om = readable._readableState.objectMode;
            if (this.length > 0 && om !== this._readableState.objectMode) {
              throw new Error(
                "Do not switch objectMode in the middle of the stream"
              );
            }
            this._readableState.objectMode = om;
            this._writableState.objectMode = om;
          });
        }
        if (inp != null) {
          this.end(inp, inpE);
        }
      }
      static isNoFilter(obj) {
        return obj instanceof this;
      }
      static compare(nf1, nf2) {
        if (!(nf1 instanceof this)) {
          throw new TypeError("Arguments must be NoFilters");
        }
        if (nf1 === nf2) {
          return 0;
        }
        return nf1.compare(nf2);
      }
      static concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError("list argument must be an Array of NoFilters");
        }
        if (list.length === 0 || length === 0) {
          return Buffer2.alloc(0);
        }
        if (length == null) {
          length = list.reduce((tot, nf) => {
            if (!(nf instanceof NoFilter)) {
              throw new TypeError("list argument must be an Array of NoFilters");
            }
            return tot + nf.length;
          }, 0);
        }
        let allBufs = true;
        let allObjs = true;
        const bufs = list.map((nf) => {
          if (!(nf instanceof NoFilter)) {
            throw new TypeError("list argument must be an Array of NoFilters");
          }
          const buf = nf.slice();
          if (Buffer2.isBuffer(buf)) {
            allObjs = false;
          } else {
            allBufs = false;
          }
          return buf;
        });
        if (allBufs) {
          return Buffer2.concat(bufs, length);
        }
        if (allObjs) {
          return [].concat(...bufs).slice(0, length);
        }
        throw new Error("Concatenating mixed object and byte streams not supported");
      }
      _transform(chunk, encoding, callback) {
        if (!this._readableState.objectMode && !Buffer2.isBuffer(chunk)) {
          chunk = Buffer2.from(chunk, encoding);
        }
        this.push(chunk);
        callback();
      }
      _bufArray() {
        let bufs = this._readableState.buffer;
        if (!Array.isArray(bufs)) {
          let b = bufs.head;
          bufs = [];
          while (b != null) {
            bufs.push(b.data);
            b = b.next;
          }
        }
        return bufs;
      }
      read(size) {
        const buf = super.read(size);
        if (buf != null) {
          this.emit("read", buf);
          if (this.readError && buf.length < size) {
            throw new Error(`Read ${buf.length}, wanted ${size}`);
          }
        } else if (this.readError) {
          throw new Error(`No data available, wanted ${size}`);
        }
        return buf;
      }
      readFull(size) {
        let onReadable = null;
        let onFinish = null;
        let onError = null;
        return new Promise((resolve, reject) => {
          if (this.length >= size) {
            resolve(this.read(size));
            return;
          }
          if (this.writableFinished) {
            reject(new Error(`Stream finished before ${size} bytes were available`));
            return;
          }
          onReadable = (chunk) => {
            if (this.length >= size) {
              resolve(this.read(size));
            }
          };
          onFinish = () => {
            reject(new Error(`Stream finished before ${size} bytes were available`));
          };
          onError = reject;
          this.on("readable", onReadable);
          this.on("error", onError);
          this.on("finish", onFinish);
        }).finally(() => {
          if (onReadable) {
            this.removeListener("readable", onReadable);
            this.removeListener("error", onError);
            this.removeListener("finish", onFinish);
          }
        });
      }
      promise(cb) {
        let done = false;
        return new Promise((resolve, reject) => {
          this.on("finish", () => {
            const data = this.read();
            if (cb != null && !done) {
              done = true;
              cb(null, data);
            }
            resolve(data);
          });
          this.on("error", (er) => {
            if (cb != null && !done) {
              done = true;
              cb(er);
            }
            reject(er);
          });
        });
      }
      compare(other) {
        if (!(other instanceof NoFilter)) {
          throw new TypeError("Arguments must be NoFilters");
        }
        if (this === other) {
          return 0;
        }
        const buf1 = this.slice();
        const buf2 = other.slice();
        if (Buffer2.isBuffer(buf1) && Buffer2.isBuffer(buf2)) {
          return buf1.compare(buf2);
        }
        throw new Error("Cannot compare streams in object mode");
      }
      equals(other) {
        return this.compare(other) === 0;
      }
      slice(start, end) {
        if (this._readableState.objectMode) {
          return this._bufArray().slice(start, end);
        }
        const bufs = this._bufArray();
        switch (bufs.length) {
          case 0:
            return Buffer2.alloc(0);
          case 1:
            return bufs[0].slice(start, end);
          default: {
            const b = Buffer2.concat(bufs);
            return b.slice(start, end);
          }
        }
      }
      get(index) {
        return this.slice()[index];
      }
      toJSON() {
        const b = this.slice();
        if (Buffer2.isBuffer(b)) {
          return b.toJSON();
        }
        return b;
      }
      toString(encoding, start, end) {
        const buf = this.slice(start, end);
        if (!Buffer2.isBuffer(buf)) {
          return JSON.stringify(buf);
        }
        if (!encoding || encoding === "utf8") {
          return td.decode(buf);
        }
        return buf.toString(encoding);
      }
      [Symbol.for("nodejs.util.inspect.custom")](depth, options) {
        const bufs = this._bufArray();
        const hex = bufs.map((b) => {
          if (Buffer2.isBuffer(b)) {
            return options.stylize(b.toString("hex"), "string");
          }
          return JSON.stringify(b);
        }).join(", ");
        return `${this.constructor.name} [${hex}]`;
      }
      get length() {
        return this._readableState.length;
      }
      writeBigInt(val) {
        let str2 = val.toString(16);
        if (val < 0) {
          const sz = BigInt(Math.floor(str2.length / 2));
          const mask = BigInt(1) << sz * BigInt(8);
          val = mask + val;
          str2 = val.toString(16);
        }
        if (str2.length % 2) {
          str2 = `0${str2}`;
        }
        return this.push(Buffer2.from(str2, "hex"));
      }
      readUBigInt(len) {
        const b = this.read(len);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return BigInt(`0x${b.toString("hex")}`);
      }
      readBigInt(len) {
        const b = this.read(len);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        let ret = BigInt(`0x${b.toString("hex")}`);
        if (b[0] & 128) {
          const mask = BigInt(1) << BigInt(b.length) * BigInt(8);
          ret -= mask;
        }
        return ret;
      }
      writeUInt8(value) {
        const b = Buffer2.from([value]);
        return this.push(b);
      }
      writeUInt16LE(value) {
        const b = Buffer2.alloc(2);
        b.writeUInt16LE(value);
        return this.push(b);
      }
      writeUInt16BE(value) {
        const b = Buffer2.alloc(2);
        b.writeUInt16BE(value);
        return this.push(b);
      }
      writeUInt32LE(value) {
        const b = Buffer2.alloc(4);
        b.writeUInt32LE(value);
        return this.push(b);
      }
      writeUInt32BE(value) {
        const b = Buffer2.alloc(4);
        b.writeUInt32BE(value);
        return this.push(b);
      }
      writeInt8(value) {
        const b = Buffer2.from([value]);
        return this.push(b);
      }
      writeInt16LE(value) {
        const b = Buffer2.alloc(2);
        b.writeUInt16LE(value);
        return this.push(b);
      }
      writeInt16BE(value) {
        const b = Buffer2.alloc(2);
        b.writeUInt16BE(value);
        return this.push(b);
      }
      writeInt32LE(value) {
        const b = Buffer2.alloc(4);
        b.writeUInt32LE(value);
        return this.push(b);
      }
      writeInt32BE(value) {
        const b = Buffer2.alloc(4);
        b.writeUInt32BE(value);
        return this.push(b);
      }
      writeFloatLE(value) {
        const b = Buffer2.alloc(4);
        b.writeFloatLE(value);
        return this.push(b);
      }
      writeFloatBE(value) {
        const b = Buffer2.alloc(4);
        b.writeFloatBE(value);
        return this.push(b);
      }
      writeDoubleLE(value) {
        const b = Buffer2.alloc(8);
        b.writeDoubleLE(value);
        return this.push(b);
      }
      writeDoubleBE(value) {
        const b = Buffer2.alloc(8);
        b.writeDoubleBE(value);
        return this.push(b);
      }
      writeBigInt64LE(value) {
        const b = Buffer2.alloc(8);
        b.writeBigInt64LE(value);
        return this.push(b);
      }
      writeBigInt64BE(value) {
        const b = Buffer2.alloc(8);
        b.writeBigInt64BE(value);
        return this.push(b);
      }
      writeBigUInt64LE(value) {
        const b = Buffer2.alloc(8);
        b.writeBigUInt64LE(value);
        return this.push(b);
      }
      writeBigUInt64BE(value) {
        const b = Buffer2.alloc(8);
        b.writeBigUInt64BE(value);
        return this.push(b);
      }
      readUInt8() {
        const b = this.read(1);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readUInt8();
      }
      readUInt16LE() {
        const b = this.read(2);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readUInt16LE();
      }
      readUInt16BE() {
        const b = this.read(2);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readUInt16BE();
      }
      readUInt32LE() {
        const b = this.read(4);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readUInt32LE();
      }
      readUInt32BE() {
        const b = this.read(4);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readUInt32BE();
      }
      readInt8() {
        const b = this.read(1);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readInt8();
      }
      readInt16LE() {
        const b = this.read(2);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readInt16LE();
      }
      readInt16BE() {
        const b = this.read(2);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readInt16BE();
      }
      readInt32LE() {
        const b = this.read(4);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readInt32LE();
      }
      readInt32BE() {
        const b = this.read(4);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readInt32BE();
      }
      readFloatLE() {
        const b = this.read(4);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readFloatLE();
      }
      readFloatBE() {
        const b = this.read(4);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readFloatBE();
      }
      readDoubleLE() {
        const b = this.read(8);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readDoubleLE();
      }
      readDoubleBE() {
        const b = this.read(8);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readDoubleBE();
      }
      readBigInt64LE() {
        const b = this.read(8);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readBigInt64LE();
      }
      readBigInt64BE() {
        const b = this.read(8);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readBigInt64BE();
      }
      readBigUInt64LE() {
        const b = this.read(8);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readBigUInt64LE();
      }
      readBigUInt64BE() {
        const b = this.read(8);
        if (!Buffer2.isBuffer(b)) {
          return null;
        }
        return b.readBigUInt64BE();
      }
    };
    module2.exports = NoFilter;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/constants.js
var require_constants = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/constants.js"(exports2) {
    "use strict";
    exports2.MT = {
      POS_INT: 0,
      NEG_INT: 1,
      BYTE_STRING: 2,
      UTF8_STRING: 3,
      ARRAY: 4,
      MAP: 5,
      TAG: 6,
      SIMPLE_FLOAT: 7
    };
    exports2.TAG = {
      DATE_STRING: 0,
      DATE_EPOCH: 1,
      POS_BIGINT: 2,
      NEG_BIGINT: 3,
      DECIMAL_FRAC: 4,
      BIGFLOAT: 5,
      BASE64URL_EXPECTED: 21,
      BASE64_EXPECTED: 22,
      BASE16_EXPECTED: 23,
      CBOR: 24,
      URI: 32,
      BASE64URL: 33,
      BASE64: 34,
      REGEXP: 35,
      MIME: 36,
      SET: 258
    };
    exports2.NUMBYTES = {
      ZERO: 0,
      ONE: 24,
      TWO: 25,
      FOUR: 26,
      EIGHT: 27,
      INDEFINITE: 31
    };
    exports2.SIMPLE = {
      FALSE: 20,
      TRUE: 21,
      NULL: 22,
      UNDEFINED: 23
    };
    exports2.SYMS = {
      NULL: Symbol.for("github.com/hildjj/node-cbor/null"),
      UNDEFINED: Symbol.for("github.com/hildjj/node-cbor/undef"),
      PARENT: Symbol.for("github.com/hildjj/node-cbor/parent"),
      BREAK: Symbol.for("github.com/hildjj/node-cbor/break"),
      STREAM: Symbol.for("github.com/hildjj/node-cbor/stream")
    };
    exports2.SHIFT32 = 4294967296;
    exports2.BI = {
      MINUS_ONE: BigInt(-1),
      NEG_MAX: BigInt(-1) - BigInt(Number.MAX_SAFE_INTEGER),
      MAXINT32: BigInt("0xffffffff"),
      MAXINT64: BigInt("0xffffffffffffffff"),
      SHIFT32: BigInt(exports2.SHIFT32)
    };
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/utils.js
var require_utils = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/utils.js"(exports2) {
    "use strict";
    var { Buffer: Buffer2 } = require("buffer");
    var NoFilter = require_lib();
    var stream = require("stream");
    var constants = require_constants();
    var { NUMBYTES, SHIFT32, BI, SYMS } = constants;
    var MAX_SAFE_HIGH = 2097151;
    var td = new TextDecoder("utf8", { fatal: true, ignoreBOM: true });
    exports2.utf8 = (buf) => td.decode(buf);
    exports2.utf8.checksUTF8 = true;
    function isReadable(s) {
      if (s instanceof stream.Readable) {
        return true;
      }
      return ["read", "on", "pipe"].every((f2) => typeof s[f2] === "function");
    }
    exports2.isBufferish = function isBufferish(b) {
      return b && typeof b === "object" && (Buffer2.isBuffer(b) || b instanceof Uint8Array || b instanceof Uint8ClampedArray || b instanceof ArrayBuffer || b instanceof DataView);
    };
    exports2.bufferishToBuffer = function bufferishToBuffer(b) {
      if (Buffer2.isBuffer(b)) {
        return b;
      } else if (ArrayBuffer.isView(b)) {
        return Buffer2.from(b.buffer, b.byteOffset, b.byteLength);
      } else if (b instanceof ArrayBuffer) {
        return Buffer2.from(b);
      }
      return null;
    };
    exports2.parseCBORint = function parseCBORint(ai, buf) {
      switch (ai) {
        case NUMBYTES.ONE:
          return buf.readUInt8(0);
        case NUMBYTES.TWO:
          return buf.readUInt16BE(0);
        case NUMBYTES.FOUR:
          return buf.readUInt32BE(0);
        case NUMBYTES.EIGHT: {
          const f2 = buf.readUInt32BE(0);
          const g = buf.readUInt32BE(4);
          if (f2 > MAX_SAFE_HIGH) {
            return BigInt(f2) * BI.SHIFT32 + BigInt(g);
          }
          return f2 * SHIFT32 + g;
        }
        default:
          throw new Error(`Invalid additional info for int: ${ai}`);
      }
    };
    exports2.writeHalf = function writeHalf(buf, half) {
      const u32 = Buffer2.allocUnsafe(4);
      u32.writeFloatBE(half, 0);
      const u = u32.readUInt32BE(0);
      if ((u & 8191) !== 0) {
        return false;
      }
      let s16 = u >> 16 & 32768;
      const exp = u >> 23 & 255;
      const mant = u & 8388607;
      if (exp >= 113 && exp <= 142) {
        s16 += (exp - 112 << 10) + (mant >> 13);
      } else if (exp >= 103 && exp < 113) {
        if (mant & (1 << 126 - exp) - 1) {
          return false;
        }
        s16 += mant + 8388608 >> 126 - exp;
      } else {
        return false;
      }
      buf.writeUInt16BE(s16);
      return true;
    };
    exports2.parseHalf = function parseHalf(buf) {
      const sign = buf[0] & 128 ? -1 : 1;
      const exp = (buf[0] & 124) >> 2;
      const mant = (buf[0] & 3) << 8 | buf[1];
      if (!exp) {
        return sign * 5960464477539063e-23 * mant;
      } else if (exp === 31) {
        return sign * (mant ? NaN : Infinity);
      }
      return sign * 2 ** (exp - 25) * (1024 + mant);
    };
    exports2.parseCBORfloat = function parseCBORfloat(buf) {
      switch (buf.length) {
        case 2:
          return exports2.parseHalf(buf);
        case 4:
          return buf.readFloatBE(0);
        case 8:
          return buf.readDoubleBE(0);
        default:
          throw new Error(`Invalid float size: ${buf.length}`);
      }
    };
    exports2.hex = function hex(s) {
      return Buffer2.from(s.replace(/^0x/, ""), "hex");
    };
    exports2.bin = function bin(s) {
      s = s.replace(/\s/g, "");
      let start = 0;
      let end = s.length % 8 || 8;
      const chunks = [];
      while (end <= s.length) {
        chunks.push(parseInt(s.slice(start, end), 2));
        start = end;
        end += 8;
      }
      return Buffer2.from(chunks);
    };
    exports2.arrayEqual = function arrayEqual(a, b) {
      if (a == null && b == null) {
        return true;
      }
      if (a == null || b == null) {
        return false;
      }
      return a.length === b.length && a.every((elem, i) => elem === b[i]);
    };
    exports2.bufferToBigInt = function bufferToBigInt(buf) {
      return BigInt(`0x${buf.toString("hex")}`);
    };
    exports2.cborValueToString = function cborValueToString(val, float_bytes = -1) {
      switch (typeof val) {
        case "symbol": {
          switch (val) {
            case SYMS.NULL:
              return "null";
            case SYMS.UNDEFINED:
              return "undefined";
            case SYMS.BREAK:
              return "BREAK";
          }
          if (val.description) {
            return val.description;
          }
          const s = val.toString();
          const m = s.match(/^Symbol\((?<name>.*)\)/);
          if (m && m.groups.name) {
            return m.groups.name;
          }
          return "Symbol";
        }
        case "string":
          return JSON.stringify(val);
        case "bigint":
          return val.toString();
        case "number": {
          const s = Object.is(val, -0) ? "-0" : String(val);
          return float_bytes > 0 ? `${s}_${float_bytes}` : s;
        }
        case "object": {
          const buf = exports2.bufferishToBuffer(val);
          if (buf) {
            const hex = buf.toString("hex");
            return float_bytes === -Infinity ? hex : `h'${hex}'`;
          }
          if (typeof val[Symbol.for("nodejs.util.inspect.custom")] === "function") {
            return val[Symbol.for("nodejs.util.inspect.custom")]();
          }
          if (Array.isArray(val)) {
            return "[]";
          }
          return "{}";
        }
      }
      return String(val);
    };
    exports2.guessEncoding = function guessEncoding(input, encoding) {
      if (typeof input === "string") {
        return new NoFilter(input, encoding == null ? "hex" : encoding);
      }
      const buf = exports2.bufferishToBuffer(input);
      if (buf) {
        return new NoFilter(buf);
      }
      if (isReadable(input)) {
        return input;
      }
      throw new Error("Unknown input type");
    };
    var B64URL_SWAPS = {
      "=": "",
      "+": "-",
      "/": "_"
    };
    exports2.base64url = function base64url(buf) {
      return exports2.bufferishToBuffer(buf).toString("base64").replace(/[=+/]/g, (c) => B64URL_SWAPS[c]);
    };
    exports2.base64 = function base64(buf) {
      return exports2.bufferishToBuffer(buf).toString("base64");
    };
    exports2.isBigEndian = function isBigEndian() {
      const array = new Uint8Array(4);
      const view = new Uint32Array(array.buffer);
      return !((view[0] = 1) & array[0]);
    };
  }
});

// node_modules/_cbor@9.0.1@cbor/vendor/binary-parse-stream/index.js
var require_binary_parse_stream = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/vendor/binary-parse-stream/index.js"(exports2, module2) {
    "use strict";
    var stream = require("stream");
    var NoFilter = require_lib();
    var BinaryParseStream = class extends stream.Transform {
      constructor(options) {
        super(options);
        this["_writableState"].objectMode = false;
        this["_readableState"].objectMode = true;
        this.bs = new NoFilter();
        this.__restart();
      }
      _transform(fresh, encoding, cb) {
        this.bs.write(fresh);
        while (this.bs.length >= this.__needed) {
          let ret = null;
          const chunk = this.__needed === null ? void 0 : this.bs.read(this.__needed);
          try {
            ret = this.__parser.next(chunk);
          } catch (e) {
            return cb(e);
          }
          if (this.__needed) {
            this.__fresh = false;
          }
          if (ret.done) {
            this.push(ret.value);
            this.__restart();
          } else {
            this.__needed = ret.value || Infinity;
          }
        }
        return cb();
      }
      *_parse() {
        throw new Error("Must be implemented in subclass");
      }
      __restart() {
        this.__needed = null;
        this.__parser = this._parse();
        this.__fresh = true;
      }
      _flush(cb) {
        cb(this.__fresh ? null : new Error("unexpected end of input"));
      }
    };
    module2.exports = BinaryParseStream;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/tagged.js
var require_tagged = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/tagged.js"(exports2, module2) {
    "use strict";
    var constants = require_constants();
    var utils = require_utils();
    var INTERNAL_JSON = Symbol("INTERNAL_JSON");
    function setBuffersToJSON(obj, fn) {
      if (utils.isBufferish(obj)) {
        obj.toJSON = fn;
      } else if (Array.isArray(obj)) {
        for (const v of obj) {
          setBuffersToJSON(v, fn);
        }
      } else if (obj && typeof obj === "object") {
        if (!(obj instanceof Tagged) || obj.tag < 21 || obj.tag > 23) {
          for (const v of Object.values(obj)) {
            setBuffersToJSON(v, fn);
          }
        }
      }
    }
    function b64this() {
      return utils.base64(this);
    }
    function b64urlThis() {
      return utils.base64url(this);
    }
    function hexThis() {
      return this.toString("hex");
    }
    function swapEndian(ab, size, byteOffset, byteLength) {
      const dv = new DataView(ab);
      const [getter, setter] = {
        2: [dv.getUint16, dv.setUint16],
        4: [dv.getUint32, dv.setUint32],
        8: [dv.getBigUint64, dv.setBigUint64]
      }[size];
      const end = byteOffset + byteLength;
      for (let offset = byteOffset; offset < end; offset += size) {
        setter.call(dv, offset, getter.call(dv, offset, true));
      }
    }
    var TAGS = {
      0: (v) => new Date(v),
      1: (v) => new Date(v * 1e3),
      2: (v) => utils.bufferToBigInt(v),
      3: (v) => constants.BI.MINUS_ONE - utils.bufferToBigInt(v),
      21: (v, tag) => {
        if (utils.isBufferish(v)) {
          tag[INTERNAL_JSON] = b64urlThis;
        } else {
          setBuffersToJSON(v, b64urlThis);
        }
        return tag;
      },
      22: (v, tag) => {
        if (utils.isBufferish(v)) {
          tag[INTERNAL_JSON] = b64this;
        } else {
          setBuffersToJSON(v, b64this);
        }
        return tag;
      },
      23: (v, tag) => {
        if (utils.isBufferish(v)) {
          tag[INTERNAL_JSON] = hexThis;
        } else {
          setBuffersToJSON(v, hexThis);
        }
        return tag;
      },
      32: (v) => new URL(v),
      33: (v, tag) => {
        if (!v.match(/^[a-zA-Z0-9_-]+$/)) {
          throw new Error("Invalid base64url characters");
        }
        const last = v.length % 4;
        if (last === 1) {
          throw new Error("Invalid base64url length");
        }
        if (last === 2) {
          if ("AQgw".indexOf(v[v.length - 1]) === -1) {
            throw new Error("Invalid base64 padding");
          }
        } else if (last === 3) {
          if ("AEIMQUYcgkosw048".indexOf(v[v.length - 1]) === -1) {
            throw new Error("Invalid base64 padding");
          }
        }
        return tag;
      },
      34: (v, tag) => {
        const m = v.match(/^[a-zA-Z0-9+/]+(?<padding>={0,2})$/);
        if (!m) {
          throw new Error("Invalid base64 characters");
        }
        if (v.length % 4 !== 0) {
          throw new Error("Invalid base64 length");
        }
        if (m.groups.padding === "=") {
          if ("AQgw".indexOf(v[v.length - 2]) === -1) {
            throw new Error("Invalid base64 padding");
          }
        } else if (m.groups.padding === "==") {
          if ("AEIMQUYcgkosw048".indexOf(v[v.length - 3]) === -1) {
            throw new Error("Invalid base64 padding");
          }
        }
        return tag;
      },
      35: (v) => new RegExp(v),
      258: (v) => new Set(v)
    };
    var TYPED_ARRAY_TAGS = {
      64: Uint8Array,
      65: Uint16Array,
      66: Uint32Array,
      68: Uint8ClampedArray,
      69: Uint16Array,
      70: Uint32Array,
      72: Int8Array,
      73: Int16Array,
      74: Int32Array,
      77: Int16Array,
      78: Int32Array,
      81: Float32Array,
      82: Float64Array,
      85: Float32Array,
      86: Float64Array
    };
    if (typeof BigUint64Array !== "undefined") {
      TYPED_ARRAY_TAGS[67] = BigUint64Array;
      TYPED_ARRAY_TAGS[71] = BigUint64Array;
    }
    if (typeof BigInt64Array !== "undefined") {
      TYPED_ARRAY_TAGS[75] = BigInt64Array;
      TYPED_ARRAY_TAGS[79] = BigInt64Array;
    }
    function _toTypedArray(val, tagged) {
      if (!utils.isBufferish(val)) {
        throw new TypeError("val not a buffer");
      }
      const { tag } = tagged;
      const TypedClass = TYPED_ARRAY_TAGS[tag];
      if (!TypedClass) {
        throw new Error(`Invalid typed array tag: ${tag}`);
      }
      const little = tag & 4;
      const float = (tag & 16) >> 4;
      const sz = 2 ** (float + (tag & 3));
      if (!little !== utils.isBigEndian() && sz > 1) {
        swapEndian(val.buffer, sz, val.byteOffset, val.byteLength);
      }
      const ab = val.buffer.slice(val.byteOffset, val.byteOffset + val.byteLength);
      return new TypedClass(ab);
    }
    for (const n of Object.keys(TYPED_ARRAY_TAGS)) {
      TAGS[n] = _toTypedArray;
    }
    var current_TAGS = {};
    var Tagged = class {
      constructor(tag, value, err) {
        this.tag = tag;
        this.value = value;
        this.err = err;
        if (typeof this.tag !== "number") {
          throw new Error(`Invalid tag type (${typeof this.tag})`);
        }
        if (this.tag < 0 || (this.tag | 0) !== this.tag) {
          throw new Error(`Tag must be a positive integer: ${this.tag}`);
        }
      }
      toJSON() {
        if (this[INTERNAL_JSON]) {
          return this[INTERNAL_JSON].call(this.value);
        }
        const ret = {
          tag: this.tag,
          value: this.value
        };
        if (this.err) {
          ret.err = this.err;
        }
        return ret;
      }
      toString() {
        return `${this.tag}(${JSON.stringify(this.value)})`;
      }
      encodeCBOR(gen) {
        gen._pushTag(this.tag);
        return gen.pushAny(this.value);
      }
      convert(converters) {
        let f2 = converters == null ? void 0 : converters[this.tag];
        if (f2 === null) {
          return this;
        }
        if (typeof f2 !== "function") {
          f2 = Tagged.TAGS[this.tag];
          if (typeof f2 !== "function") {
            return this;
          }
        }
        try {
          return f2.call(this, this.value, this);
        } catch (error) {
          if (error && error.message && error.message.length > 0) {
            this.err = error.message;
          } else {
            this.err = error;
          }
          return this;
        }
      }
      static get TAGS() {
        return current_TAGS;
      }
      static set TAGS(val) {
        current_TAGS = val;
      }
      static reset() {
        Tagged.TAGS = { ...TAGS };
      }
    };
    Tagged.INTERNAL_JSON = INTERNAL_JSON;
    Tagged.reset();
    module2.exports = Tagged;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/simple.js
var require_simple = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/simple.js"(exports2, module2) {
    "use strict";
    var { MT, SIMPLE, SYMS } = require_constants();
    var Simple = class {
      constructor(value) {
        if (typeof value !== "number") {
          throw new Error(`Invalid Simple type: ${typeof value}`);
        }
        if (value < 0 || value > 255 || (value | 0) !== value) {
          throw new Error(`value must be a small positive integer: ${value}`);
        }
        this.value = value;
      }
      toString() {
        return `simple(${this.value})`;
      }
      [Symbol.for("nodejs.util.inspect.custom")](depth, opts) {
        return `simple(${this.value})`;
      }
      encodeCBOR(gen) {
        return gen._pushInt(this.value, MT.SIMPLE_FLOAT);
      }
      static isSimple(obj) {
        return obj instanceof Simple;
      }
      static decode(val, has_parent = true, parent_indefinite = false) {
        switch (val) {
          case SIMPLE.FALSE:
            return false;
          case SIMPLE.TRUE:
            return true;
          case SIMPLE.NULL:
            if (has_parent) {
              return null;
            }
            return SYMS.NULL;
          case SIMPLE.UNDEFINED:
            if (has_parent) {
              return void 0;
            }
            return SYMS.UNDEFINED;
          case -1:
            if (!has_parent || !parent_indefinite) {
              throw new Error("Invalid BREAK");
            }
            return SYMS.BREAK;
          default:
            return new Simple(val);
        }
      }
    };
    module2.exports = Simple;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/decoder.js
var require_decoder2 = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/decoder.js"(exports2, module2) {
    "use strict";
    var BinaryParseStream = require_binary_parse_stream();
    var Tagged = require_tagged();
    var Simple = require_simple();
    var utils = require_utils();
    var NoFilter = require_lib();
    var stream = require("stream");
    var constants = require_constants();
    var { MT, NUMBYTES, SYMS, BI } = constants;
    var { Buffer: Buffer2 } = require("buffer");
    var COUNT = Symbol("count");
    var MAJOR = Symbol("major type");
    var ERROR = Symbol("error");
    var NOT_FOUND = Symbol("not found");
    function parentArray(parent, typ, count2) {
      const a = [];
      a[COUNT] = count2;
      a[SYMS.PARENT] = parent;
      a[MAJOR] = typ;
      return a;
    }
    function parentBufferStream(parent, typ) {
      const b = new NoFilter();
      b[COUNT] = -1;
      b[SYMS.PARENT] = parent;
      b[MAJOR] = typ;
      return b;
    }
    var UnexpectedDataError = class extends Error {
      constructor(byte, value) {
        super(`Unexpected data: 0x${byte.toString(16)}`);
        this.name = "UnexpectedDataError";
        this.byte = byte;
        this.value = value;
      }
    };
    function normalizeOptions(opts, cb) {
      switch (typeof opts) {
        case "function":
          return { options: {}, cb: opts };
        case "string":
          return { options: { encoding: opts }, cb };
        case "object":
          return { options: opts || {}, cb };
        default:
          throw new TypeError("Unknown option type");
      }
    }
    var Decoder = class extends BinaryParseStream {
      constructor(options = {}) {
        const {
          tags = {},
          max_depth = -1,
          preferWeb = false,
          required = false,
          encoding = "hex",
          extendedResults = false,
          preventDuplicateKeys = false,
          ...superOpts
        } = options;
        super({ defaultEncoding: encoding, ...superOpts });
        this.running = true;
        this.max_depth = max_depth;
        this.tags = tags;
        this.preferWeb = preferWeb;
        this.extendedResults = extendedResults;
        this.required = required;
        this.preventDuplicateKeys = preventDuplicateKeys;
        if (extendedResults) {
          this.bs.on("read", this._onRead.bind(this));
          this.valueBytes = new NoFilter();
        }
      }
      static nullcheck(val) {
        switch (val) {
          case SYMS.NULL:
            return null;
          case SYMS.UNDEFINED:
            return void 0;
          case NOT_FOUND:
            throw new Error("Value not found");
          default:
            return val;
        }
      }
      static decodeFirstSync(input, options = {}) {
        if (input == null) {
          throw new TypeError("input required");
        }
        ({ options } = normalizeOptions(options));
        const { encoding = "hex", ...opts } = options;
        const c = new Decoder(opts);
        const s = utils.guessEncoding(input, encoding);
        const parser = c._parse();
        let state = parser.next();
        while (!state.done) {
          const b = s.read(state.value);
          if (b == null || b.length !== state.value) {
            throw new Error("Insufficient data");
          }
          if (c.extendedResults) {
            c.valueBytes.write(b);
          }
          state = parser.next(b);
        }
        let val = null;
        if (c.extendedResults) {
          val = state.value;
          val.unused = s.read();
        } else {
          val = Decoder.nullcheck(state.value);
          if (s.length > 0) {
            const nextByte = s.read(1);
            s.unshift(nextByte);
            throw new UnexpectedDataError(nextByte[0], val);
          }
        }
        return val;
      }
      static decodeAllSync(input, options = {}) {
        if (input == null) {
          throw new TypeError("input required");
        }
        ({ options } = normalizeOptions(options));
        const { encoding = "hex", ...opts } = options;
        const c = new Decoder(opts);
        const s = utils.guessEncoding(input, encoding);
        const res = [];
        while (s.length > 0) {
          const parser = c._parse();
          let state = parser.next();
          while (!state.done) {
            const b = s.read(state.value);
            if (b == null || b.length !== state.value) {
              throw new Error("Insufficient data");
            }
            if (c.extendedResults) {
              c.valueBytes.write(b);
            }
            state = parser.next(b);
          }
          res.push(Decoder.nullcheck(state.value));
        }
        return res;
      }
      static decodeFirst(input, options = {}, cb = null) {
        if (input == null) {
          throw new TypeError("input required");
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const { encoding = "hex", required = false, ...opts } = options;
        const c = new Decoder(opts);
        let v = NOT_FOUND;
        const s = utils.guessEncoding(input, encoding);
        const p = new Promise((resolve, reject) => {
          c.on("data", (val) => {
            v = Decoder.nullcheck(val);
            c.close();
          });
          c.once("error", (er) => {
            if (c.extendedResults && er instanceof UnexpectedDataError) {
              v.unused = c.bs.slice();
              return resolve(v);
            }
            if (v !== NOT_FOUND) {
              er["value"] = v;
            }
            v = ERROR;
            c.close();
            return reject(er);
          });
          c.once("end", () => {
            switch (v) {
              case NOT_FOUND:
                if (required) {
                  return reject(new Error("No CBOR found"));
                }
                return resolve(v);
              case ERROR:
                return void 0;
              default:
                return resolve(v);
            }
          });
        });
        if (typeof cb === "function") {
          p.then((val) => cb(null, val), cb);
        }
        s.pipe(c);
        return p;
      }
      static decodeAll(input, options = {}, cb = null) {
        if (input == null) {
          throw new TypeError("input required");
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const { encoding = "hex", ...opts } = options;
        const c = new Decoder(opts);
        const vals = [];
        c.on("data", (val) => vals.push(Decoder.nullcheck(val)));
        const p = new Promise((resolve, reject) => {
          c.on("error", reject);
          c.on("end", () => resolve(vals));
        });
        if (typeof cb === "function") {
          p.then((v) => cb(void 0, v), (er) => cb(er, void 0));
        }
        utils.guessEncoding(input, encoding).pipe(c);
        return p;
      }
      close() {
        this.running = false;
        this.__fresh = true;
      }
      _onRead(data) {
        this.valueBytes.write(data);
      }
      *_parse() {
        let parent = null;
        let depth = 0;
        let val = null;
        while (true) {
          if (this.max_depth >= 0 && depth > this.max_depth) {
            throw new Error(`Maximum depth ${this.max_depth} exceeded`);
          }
          const [octet] = yield 1;
          if (!this.running) {
            this.bs.unshift(Buffer2.from([octet]));
            throw new UnexpectedDataError(octet);
          }
          const mt = octet >> 5;
          const ai = octet & 31;
          const parent_major = parent == null ? void 0 : parent[MAJOR];
          const parent_length = parent == null ? void 0 : parent.length;
          switch (ai) {
            case NUMBYTES.ONE:
              this.emit("more-bytes", mt, 1, parent_major, parent_length);
              [val] = yield 1;
              break;
            case NUMBYTES.TWO:
            case NUMBYTES.FOUR:
            case NUMBYTES.EIGHT: {
              const numbytes = 1 << ai - 24;
              this.emit("more-bytes", mt, numbytes, parent_major, parent_length);
              const buf = yield numbytes;
              val = mt === MT.SIMPLE_FLOAT ? buf : utils.parseCBORint(ai, buf);
              break;
            }
            case 28:
            case 29:
            case 30:
              this.running = false;
              throw new Error(`Additional info not implemented: ${ai}`);
            case NUMBYTES.INDEFINITE:
              switch (mt) {
                case MT.POS_INT:
                case MT.NEG_INT:
                case MT.TAG:
                  throw new Error(`Invalid indefinite encoding for MT ${mt}`);
              }
              val = -1;
              break;
            default:
              val = ai;
          }
          switch (mt) {
            case MT.POS_INT:
              break;
            case MT.NEG_INT:
              if (val === Number.MAX_SAFE_INTEGER) {
                val = BI.NEG_MAX;
              } else {
                val = typeof val === "bigint" ? BI.MINUS_ONE - val : -1 - val;
              }
              break;
            case MT.BYTE_STRING:
            case MT.UTF8_STRING:
              switch (val) {
                case 0:
                  this.emit("start-string", mt, val, parent_major, parent_length);
                  if (mt === MT.UTF8_STRING) {
                    val = "";
                  } else {
                    val = this.preferWeb ? new Uint8Array(0) : Buffer2.allocUnsafe(0);
                  }
                  break;
                case -1:
                  this.emit("start", mt, SYMS.STREAM, parent_major, parent_length);
                  parent = parentBufferStream(parent, mt);
                  depth++;
                  continue;
                default:
                  this.emit("start-string", mt, val, parent_major, parent_length);
                  val = yield val;
                  if (mt === MT.UTF8_STRING) {
                    val = utils.utf8(val);
                  } else if (this.preferWeb) {
                    val = new Uint8Array(val.buffer, val.byteOffset, val.length);
                  }
              }
              break;
            case MT.ARRAY:
            case MT.MAP:
              switch (val) {
                case 0:
                  val = mt === MT.MAP ? {} : [];
                  break;
                case -1:
                  this.emit("start", mt, SYMS.STREAM, parent_major, parent_length);
                  parent = parentArray(parent, mt, -1);
                  depth++;
                  continue;
                default:
                  this.emit("start", mt, val, parent_major, parent_length);
                  parent = parentArray(parent, mt, val * (mt - 3));
                  depth++;
                  continue;
              }
              break;
            case MT.TAG:
              this.emit("start", mt, val, parent_major, parent_length);
              parent = parentArray(parent, mt, 1);
              parent.push(val);
              depth++;
              continue;
            case MT.SIMPLE_FLOAT:
              if (typeof val === "number") {
                if (ai === NUMBYTES.ONE && val < 32) {
                  throw new Error(
                    `Invalid two-byte encoding of simple value ${val}`
                  );
                }
                const hasParent = parent != null;
                val = Simple.decode(
                  val,
                  hasParent,
                  hasParent && parent[COUNT] < 0
                );
              } else {
                val = utils.parseCBORfloat(val);
              }
          }
          this.emit("value", val, parent_major, parent_length, ai);
          let again = false;
          while (parent != null) {
            if (val === SYMS.BREAK) {
              parent[COUNT] = 1;
            } else if (Array.isArray(parent)) {
              parent.push(val);
            } else {
              const pm = parent[MAJOR];
              if (pm != null && pm !== mt) {
                this.running = false;
                throw new Error("Invalid major type in indefinite encoding");
              }
              parent.write(val);
            }
            if (--parent[COUNT] !== 0) {
              again = true;
              break;
            }
            --depth;
            delete parent[COUNT];
            if (Array.isArray(parent)) {
              switch (parent[MAJOR]) {
                case MT.ARRAY:
                  val = parent;
                  break;
                case MT.MAP: {
                  let allstrings = true;
                  if (parent.length % 2 !== 0) {
                    throw new Error(`Invalid map length: ${parent.length}`);
                  }
                  for (let i = 0, len = parent.length; i < len; i += 2) {
                    if (typeof parent[i] !== "string" || parent[i] === "__proto__") {
                      allstrings = false;
                      break;
                    }
                  }
                  if (allstrings) {
                    val = {};
                    for (let i = 0, len = parent.length; i < len; i += 2) {
                      if (this.preventDuplicateKeys && Object.prototype.hasOwnProperty.call(val, parent[i])) {
                        throw new Error("Duplicate keys in a map");
                      }
                      val[parent[i]] = parent[i + 1];
                    }
                  } else {
                    val = /* @__PURE__ */ new Map();
                    for (let i = 0, len = parent.length; i < len; i += 2) {
                      if (this.preventDuplicateKeys && val.has(parent[i])) {
                        throw new Error("Duplicate keys in a map");
                      }
                      val.set(parent[i], parent[i + 1]);
                    }
                  }
                  break;
                }
                case MT.TAG: {
                  const t = new Tagged(parent[0], parent[1]);
                  val = t.convert(this.tags);
                  break;
                }
              }
            } else if (parent instanceof NoFilter) {
              switch (parent[MAJOR]) {
                case MT.BYTE_STRING:
                  val = parent.slice();
                  if (this.preferWeb) {
                    val = new Uint8Array(
                      val.buffer,
                      val.byteOffset,
                      val.length
                    );
                  }
                  break;
                case MT.UTF8_STRING:
                  val = parent.toString("utf-8");
                  break;
              }
            }
            this.emit("stop", parent[MAJOR]);
            const old = parent;
            parent = parent[SYMS.PARENT];
            delete old[SYMS.PARENT];
            delete old[MAJOR];
          }
          if (!again) {
            if (this.extendedResults) {
              const bytes = this.valueBytes.slice();
              const ret = {
                value: Decoder.nullcheck(val),
                bytes,
                length: bytes.length
              };
              this.valueBytes = new NoFilter();
              return ret;
            }
            return val;
          }
        }
      }
    };
    Decoder.NOT_FOUND = NOT_FOUND;
    module2.exports = Decoder;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/commented.js
var require_commented = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/commented.js"(exports2, module2) {
    "use strict";
    var stream = require("stream");
    var utils = require_utils();
    var Decoder = require_decoder2();
    var NoFilter = require_lib();
    var { MT, NUMBYTES, SYMS } = require_constants();
    var { Buffer: Buffer2 } = require("buffer");
    function plural(c) {
      if (c > 1) {
        return "s";
      }
      return "";
    }
    function normalizeOptions(opts, cb) {
      switch (typeof opts) {
        case "function":
          return { options: {}, cb: opts };
        case "string":
          return { options: { encoding: opts }, cb };
        case "number":
          return { options: { max_depth: opts }, cb };
        case "object":
          return { options: opts || {}, cb };
        default:
          throw new TypeError("Unknown option type");
      }
    }
    var Commented = class extends stream.Transform {
      constructor(options = {}) {
        const {
          depth = 1,
          max_depth = 10,
          no_summary = false,
          tags = {},
          preferWeb,
          encoding,
          ...superOpts
        } = options;
        super({
          ...superOpts,
          readableObjectMode: false,
          writableObjectMode: false
        });
        this.depth = depth;
        this.max_depth = max_depth;
        this.all = new NoFilter();
        if (!tags[24]) {
          tags[24] = this._tag_24.bind(this);
        }
        this.parser = new Decoder({
          tags,
          max_depth,
          preferWeb,
          encoding
        });
        this.parser.on("value", this._on_value.bind(this));
        this.parser.on("start", this._on_start.bind(this));
        this.parser.on("start-string", this._on_start_string.bind(this));
        this.parser.on("stop", this._on_stop.bind(this));
        this.parser.on("more-bytes", this._on_more.bind(this));
        this.parser.on("error", this._on_error.bind(this));
        if (!no_summary) {
          this.parser.on("data", this._on_data.bind(this));
        }
        this.parser.bs.on("read", this._on_read.bind(this));
      }
      _tag_24(v) {
        const c = new Commented({ depth: this.depth + 1, no_summary: true });
        c.on("data", (b) => this.push(b));
        c.on("error", (er) => this.emit("error", er));
        c.end(v);
      }
      _transform(fresh, encoding, cb) {
        this.parser.write(fresh, encoding, cb);
      }
      _flush(cb) {
        return this.parser._flush(cb);
      }
      static comment(input, options = {}, cb = null) {
        if (input == null) {
          throw new Error("input required");
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const bs = new NoFilter();
        const { encoding = "hex", ...opts } = options;
        const d = new Commented(opts);
        let p = null;
        if (typeof cb === "function") {
          d.on("end", () => {
            cb(null, bs.toString("utf8"));
          });
          d.on("error", cb);
        } else {
          p = new Promise((resolve, reject) => {
            d.on("end", () => {
              resolve(bs.toString("utf8"));
            });
            d.on("error", reject);
          });
        }
        d.pipe(bs);
        utils.guessEncoding(input, encoding).pipe(d);
        return p;
      }
      _on_error(er) {
        this.push("ERROR: ");
        this.push(er.toString());
        this.push("\n");
      }
      _on_read(buf) {
        this.all.write(buf);
        const hex = buf.toString("hex");
        this.push(new Array(this.depth + 1).join("  "));
        this.push(hex);
        let ind = (this.max_depth - this.depth) * 2 - hex.length;
        if (ind < 1) {
          ind = 1;
        }
        this.push(new Array(ind + 1).join(" "));
        this.push("-- ");
      }
      _on_more(mt, len, parent_mt, pos) {
        let desc = "";
        this.depth++;
        switch (mt) {
          case MT.POS_INT:
            desc = "Positive number,";
            break;
          case MT.NEG_INT:
            desc = "Negative number,";
            break;
          case MT.ARRAY:
            desc = "Array, length";
            break;
          case MT.MAP:
            desc = "Map, count";
            break;
          case MT.BYTE_STRING:
            desc = "Bytes, length";
            break;
          case MT.UTF8_STRING:
            desc = "String, length";
            break;
          case MT.SIMPLE_FLOAT:
            if (len === 1) {
              desc = "Simple value,";
            } else {
              desc = "Float,";
            }
            break;
        }
        this.push(`${desc} next ${len} byte${plural(len)}
`);
      }
      _on_start_string(mt, len, parent_mt, pos) {
        let desc = "";
        this.depth++;
        switch (mt) {
          case MT.BYTE_STRING:
            desc = `Bytes, length: ${len}`;
            break;
          case MT.UTF8_STRING:
            desc = `String, length: ${len.toString()}`;
            break;
        }
        this.push(`${desc}
`);
      }
      _on_start(mt, tag, parent_mt, pos) {
        this.depth++;
        switch (parent_mt) {
          case MT.ARRAY:
            this.push(`[${pos}], `);
            break;
          case MT.MAP:
            if (pos % 2) {
              this.push(`{Val:${Math.floor(pos / 2)}}, `);
            } else {
              this.push(`{Key:${Math.floor(pos / 2)}}, `);
            }
            break;
        }
        switch (mt) {
          case MT.TAG:
            this.push(`Tag #${tag}`);
            if (tag === 24) {
              this.push(" Encoded CBOR data item");
            }
            break;
          case MT.ARRAY:
            if (tag === SYMS.STREAM) {
              this.push("Array (streaming)");
            } else {
              this.push(`Array, ${tag} item${plural(tag)}`);
            }
            break;
          case MT.MAP:
            if (tag === SYMS.STREAM) {
              this.push("Map (streaming)");
            } else {
              this.push(`Map, ${tag} pair${plural(tag)}`);
            }
            break;
          case MT.BYTE_STRING:
            this.push("Bytes (streaming)");
            break;
          case MT.UTF8_STRING:
            this.push("String (streaming)");
            break;
        }
        this.push("\n");
      }
      _on_stop(mt) {
        this.depth--;
      }
      _on_value(val, parent_mt, pos, ai) {
        if (val !== SYMS.BREAK) {
          switch (parent_mt) {
            case MT.ARRAY:
              this.push(`[${pos}], `);
              break;
            case MT.MAP:
              if (pos % 2) {
                this.push(`{Val:${Math.floor(pos / 2)}}, `);
              } else {
                this.push(`{Key:${Math.floor(pos / 2)}}, `);
              }
              break;
          }
        }
        const str2 = utils.cborValueToString(val, -Infinity);
        if (typeof val === "string" || Buffer2.isBuffer(val)) {
          if (val.length > 0) {
            this.push(str2);
            this.push("\n");
          }
          this.depth--;
        } else {
          this.push(str2);
          this.push("\n");
        }
        switch (ai) {
          case NUMBYTES.ONE:
          case NUMBYTES.TWO:
          case NUMBYTES.FOUR:
          case NUMBYTES.EIGHT:
            this.depth--;
        }
      }
      _on_data() {
        this.push("0x");
        this.push(this.all.read().toString("hex"));
        this.push("\n");
      }
    };
    module2.exports = Commented;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/diagnose.js
var require_diagnose = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/diagnose.js"(exports2, module2) {
    "use strict";
    var stream = require("stream");
    var Decoder = require_decoder2();
    var utils = require_utils();
    var NoFilter = require_lib();
    var { MT, SYMS } = require_constants();
    function normalizeOptions(opts, cb) {
      switch (typeof opts) {
        case "function":
          return { options: {}, cb: opts };
        case "string":
          return { options: { encoding: opts }, cb };
        case "object":
          return { options: opts || {}, cb };
        default:
          throw new TypeError("Unknown option type");
      }
    }
    var Diagnose = class extends stream.Transform {
      constructor(options = {}) {
        const {
          separator = "\n",
          stream_errors = false,
          tags,
          max_depth,
          preferWeb,
          encoding,
          ...superOpts
        } = options;
        super({
          ...superOpts,
          readableObjectMode: false,
          writableObjectMode: false
        });
        this.float_bytes = -1;
        this.separator = separator;
        this.stream_errors = stream_errors;
        this.parser = new Decoder({
          tags,
          max_depth,
          preferWeb,
          encoding
        });
        this.parser.on("more-bytes", this._on_more.bind(this));
        this.parser.on("value", this._on_value.bind(this));
        this.parser.on("start", this._on_start.bind(this));
        this.parser.on("stop", this._on_stop.bind(this));
        this.parser.on("data", this._on_data.bind(this));
        this.parser.on("error", this._on_error.bind(this));
      }
      _transform(fresh, encoding, cb) {
        this.parser.write(fresh, encoding, cb);
      }
      _flush(cb) {
        this.parser._flush((er) => {
          if (this.stream_errors) {
            if (er) {
              this._on_error(er);
            }
            return cb();
          }
          return cb(er);
        });
      }
      static diagnose(input, options = {}, cb = null) {
        if (input == null) {
          throw new TypeError("input required");
        }
        ({ options, cb } = normalizeOptions(options, cb));
        const { encoding = "hex", ...opts } = options;
        const bs = new NoFilter();
        const d = new Diagnose(opts);
        let p = null;
        if (typeof cb === "function") {
          d.on("end", () => cb(null, bs.toString("utf8")));
          d.on("error", cb);
        } else {
          p = new Promise((resolve, reject) => {
            d.on("end", () => resolve(bs.toString("utf8")));
            d.on("error", reject);
          });
        }
        d.pipe(bs);
        utils.guessEncoding(input, encoding).pipe(d);
        return p;
      }
      _on_error(er) {
        if (this.stream_errors) {
          this.push(er.toString());
        } else {
          this.emit("error", er);
        }
      }
      _on_more(mt, len, parent_mt, pos) {
        if (mt === MT.SIMPLE_FLOAT) {
          this.float_bytes = {
            2: 1,
            4: 2,
            8: 3
          }[len];
        }
      }
      _fore(parent_mt, pos) {
        switch (parent_mt) {
          case MT.BYTE_STRING:
          case MT.UTF8_STRING:
          case MT.ARRAY:
            if (pos > 0) {
              this.push(", ");
            }
            break;
          case MT.MAP:
            if (pos > 0) {
              if (pos % 2) {
                this.push(": ");
              } else {
                this.push(", ");
              }
            }
        }
      }
      _on_value(val, parent_mt, pos) {
        if (val === SYMS.BREAK) {
          return;
        }
        this._fore(parent_mt, pos);
        const fb = this.float_bytes;
        this.float_bytes = -1;
        this.push(utils.cborValueToString(val, fb));
      }
      _on_start(mt, tag, parent_mt, pos) {
        this._fore(parent_mt, pos);
        switch (mt) {
          case MT.TAG:
            this.push(`${tag}(`);
            break;
          case MT.ARRAY:
            this.push("[");
            break;
          case MT.MAP:
            this.push("{");
            break;
          case MT.BYTE_STRING:
          case MT.UTF8_STRING:
            this.push("(");
            break;
        }
        if (tag === SYMS.STREAM) {
          this.push("_ ");
        }
      }
      _on_stop(mt) {
        switch (mt) {
          case MT.TAG:
            this.push(")");
            break;
          case MT.ARRAY:
            this.push("]");
            break;
          case MT.MAP:
            this.push("}");
            break;
          case MT.BYTE_STRING:
          case MT.UTF8_STRING:
            this.push(")");
            break;
        }
      }
      _on_data() {
        this.push(this.separator);
      }
    };
    module2.exports = Diagnose;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/encoder.js
var require_encoder2 = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/encoder.js"(exports2, module2) {
    "use strict";
    var stream = require("stream");
    var NoFilter = require_lib();
    var utils = require_utils();
    var constants = require_constants();
    var {
      MT,
      NUMBYTES,
      SHIFT32,
      SIMPLE,
      SYMS,
      TAG,
      BI
    } = constants;
    var { Buffer: Buffer2 } = require("buffer");
    var HALF = MT.SIMPLE_FLOAT << 5 | NUMBYTES.TWO;
    var FLOAT = MT.SIMPLE_FLOAT << 5 | NUMBYTES.FOUR;
    var DOUBLE = MT.SIMPLE_FLOAT << 5 | NUMBYTES.EIGHT;
    var TRUE = MT.SIMPLE_FLOAT << 5 | SIMPLE.TRUE;
    var FALSE = MT.SIMPLE_FLOAT << 5 | SIMPLE.FALSE;
    var UNDEFINED = MT.SIMPLE_FLOAT << 5 | SIMPLE.UNDEFINED;
    var NULL = MT.SIMPLE_FLOAT << 5 | SIMPLE.NULL;
    var BREAK = Buffer2.from([255]);
    var BUF_NAN = Buffer2.from("f97e00", "hex");
    var BUF_INF_NEG = Buffer2.from("f9fc00", "hex");
    var BUF_INF_POS = Buffer2.from("f97c00", "hex");
    var BUF_NEG_ZERO = Buffer2.from("f98000", "hex");
    var SEMANTIC_TYPES = {};
    var current_SEMANTIC_TYPES = {};
    function parseDateType(str2) {
      if (!str2) {
        return "number";
      }
      switch (str2.toLowerCase()) {
        case "number":
          return "number";
        case "float":
          return "float";
        case "int":
        case "integer":
          return "int";
        case "string":
          return "string";
      }
      throw new TypeError(`dateType invalid, got "${str2}"`);
    }
    var Encoder = class extends stream.Transform {
      constructor(options = {}) {
        const {
          canonical = false,
          encodeUndefined,
          disallowUndefinedKeys = false,
          dateType = "number",
          collapseBigIntegers = false,
          detectLoops = false,
          omitUndefinedProperties = false,
          genTypes = [],
          ...superOpts
        } = options;
        super({
          ...superOpts,
          readableObjectMode: false,
          writableObjectMode: true
        });
        this.canonical = canonical;
        this.encodeUndefined = encodeUndefined;
        this.disallowUndefinedKeys = disallowUndefinedKeys;
        this.dateType = parseDateType(dateType);
        this.collapseBigIntegers = this.canonical ? true : collapseBigIntegers;
        this.detectLoops = void 0;
        if (typeof detectLoops === "boolean") {
          if (detectLoops) {
            this.detectLoops = /* @__PURE__ */ new WeakSet();
          }
        } else if (detectLoops instanceof WeakSet) {
          this.detectLoops = detectLoops;
        } else {
          throw new TypeError("detectLoops must be boolean or WeakSet");
        }
        this.omitUndefinedProperties = omitUndefinedProperties;
        this.semanticTypes = { ...Encoder.SEMANTIC_TYPES };
        if (Array.isArray(genTypes)) {
          for (let i = 0, len = genTypes.length; i < len; i += 2) {
            this.addSemanticType(genTypes[i], genTypes[i + 1]);
          }
        } else {
          for (const [k, v] of Object.entries(genTypes)) {
            this.addSemanticType(k, v);
          }
        }
      }
      _transform(fresh, encoding, cb) {
        const ret = this.pushAny(fresh);
        cb(ret === false ? new Error("Push Error") : void 0);
      }
      _flush(cb) {
        cb();
      }
      _pushUInt8(val) {
        const b = Buffer2.allocUnsafe(1);
        b.writeUInt8(val, 0);
        return this.push(b);
      }
      _pushUInt16BE(val) {
        const b = Buffer2.allocUnsafe(2);
        b.writeUInt16BE(val, 0);
        return this.push(b);
      }
      _pushUInt32BE(val) {
        const b = Buffer2.allocUnsafe(4);
        b.writeUInt32BE(val, 0);
        return this.push(b);
      }
      _pushFloatBE(val) {
        const b = Buffer2.allocUnsafe(4);
        b.writeFloatBE(val, 0);
        return this.push(b);
      }
      _pushDoubleBE(val) {
        const b = Buffer2.allocUnsafe(8);
        b.writeDoubleBE(val, 0);
        return this.push(b);
      }
      _pushNaN() {
        return this.push(BUF_NAN);
      }
      _pushInfinity(obj) {
        const half = obj < 0 ? BUF_INF_NEG : BUF_INF_POS;
        return this.push(half);
      }
      _pushFloat(obj) {
        if (this.canonical) {
          const b2 = Buffer2.allocUnsafe(2);
          if (utils.writeHalf(b2, obj)) {
            return this._pushUInt8(HALF) && this.push(b2);
          }
        }
        if (Math.fround(obj) === obj) {
          return this._pushUInt8(FLOAT) && this._pushFloatBE(obj);
        }
        return this._pushUInt8(DOUBLE) && this._pushDoubleBE(obj);
      }
      _pushInt(obj, mt, orig) {
        const m = mt << 5;
        if (obj < 24) {
          return this._pushUInt8(m | obj);
        }
        if (obj <= 255) {
          return this._pushUInt8(m | NUMBYTES.ONE) && this._pushUInt8(obj);
        }
        if (obj <= 65535) {
          return this._pushUInt8(m | NUMBYTES.TWO) && this._pushUInt16BE(obj);
        }
        if (obj <= 4294967295) {
          return this._pushUInt8(m | NUMBYTES.FOUR) && this._pushUInt32BE(obj);
        }
        let max = Number.MAX_SAFE_INTEGER;
        if (mt === MT.NEG_INT) {
          max--;
        }
        if (obj <= max) {
          return this._pushUInt8(m | NUMBYTES.EIGHT) && this._pushUInt32BE(Math.floor(obj / SHIFT32)) && this._pushUInt32BE(obj % SHIFT32);
        }
        if (mt === MT.NEG_INT) {
          return this._pushFloat(orig);
        }
        return this._pushFloat(obj);
      }
      _pushIntNum(obj) {
        if (Object.is(obj, -0)) {
          return this.push(BUF_NEG_ZERO);
        }
        if (obj < 0) {
          return this._pushInt(-obj - 1, MT.NEG_INT, obj);
        }
        return this._pushInt(obj, MT.POS_INT);
      }
      _pushNumber(obj) {
        if (isNaN(obj)) {
          return this._pushNaN();
        }
        if (!isFinite(obj)) {
          return this._pushInfinity(obj);
        }
        if (Math.round(obj) === obj) {
          return this._pushIntNum(obj);
        }
        return this._pushFloat(obj);
      }
      _pushString(obj) {
        const len = Buffer2.byteLength(obj, "utf8");
        return this._pushInt(len, MT.UTF8_STRING) && this.push(obj, "utf8");
      }
      _pushBoolean(obj) {
        return this._pushUInt8(obj ? TRUE : FALSE);
      }
      _pushUndefined(obj) {
        switch (typeof this.encodeUndefined) {
          case "undefined":
            return this._pushUInt8(UNDEFINED);
          case "function":
            return this.pushAny(this.encodeUndefined(obj));
          case "object": {
            const buf = utils.bufferishToBuffer(this.encodeUndefined);
            if (buf) {
              return this.push(buf);
            }
          }
        }
        return this.pushAny(this.encodeUndefined);
      }
      _pushNull(obj) {
        return this._pushUInt8(NULL);
      }
      _pushTag(tag) {
        return this._pushInt(tag, MT.TAG);
      }
      _pushJSBigint(obj) {
        let m = MT.POS_INT;
        let tag = TAG.POS_BIGINT;
        if (obj < 0) {
          obj = -obj + BI.MINUS_ONE;
          m = MT.NEG_INT;
          tag = TAG.NEG_BIGINT;
        }
        if (this.collapseBigIntegers && obj <= BI.MAXINT64) {
          if (obj <= 4294967295) {
            return this._pushInt(Number(obj), m);
          }
          return this._pushUInt8(m << 5 | NUMBYTES.EIGHT) && this._pushUInt32BE(Number(obj / BI.SHIFT32)) && this._pushUInt32BE(Number(obj % BI.SHIFT32));
        }
        let str2 = obj.toString(16);
        if (str2.length % 2) {
          str2 = `0${str2}`;
        }
        const buf = Buffer2.from(str2, "hex");
        return this._pushTag(tag) && Encoder._pushBuffer(this, buf);
      }
      _pushObject(obj, opts) {
        if (!obj) {
          return this._pushNull(obj);
        }
        opts = {
          indefinite: false,
          skipTypes: false,
          ...opts
        };
        if (!opts.indefinite) {
          if (this.detectLoops) {
            if (this.detectLoops.has(obj)) {
              throw new Error(`Loop detected while CBOR encoding.
Call removeLoopDetectors before resuming.`);
            } else {
              this.detectLoops.add(obj);
            }
          }
        }
        if (!opts.skipTypes) {
          const f2 = obj.encodeCBOR;
          if (typeof f2 === "function") {
            return f2.call(obj, this);
          }
          const converter = this.semanticTypes[obj.constructor.name];
          if (converter) {
            return converter.call(obj, this, obj);
          }
        }
        const keys = Object.keys(obj).filter((k) => {
          const tv = typeof obj[k];
          return tv !== "function" && (!this.omitUndefinedProperties || tv !== "undefined");
        });
        const cbor_keys = {};
        if (this.canonical) {
          keys.sort((a, b) => {
            const a_cbor = cbor_keys[a] || (cbor_keys[a] = Encoder.encode(a));
            const b_cbor = cbor_keys[b] || (cbor_keys[b] = Encoder.encode(b));
            return a_cbor.compare(b_cbor);
          });
        }
        if (opts.indefinite) {
          if (!this._pushUInt8(MT.MAP << 5 | NUMBYTES.INDEFINITE)) {
            return false;
          }
        } else if (!this._pushInt(keys.length, MT.MAP)) {
          return false;
        }
        let ck = null;
        for (let j2 = 0, len2 = keys.length; j2 < len2; j2++) {
          const k = keys[j2];
          if (this.canonical && (ck = cbor_keys[k])) {
            if (!this.push(ck)) {
              return false;
            }
          } else if (!this._pushString(k)) {
            return false;
          }
          if (!this.pushAny(obj[k])) {
            return false;
          }
        }
        if (opts.indefinite) {
          if (!this.push(BREAK)) {
            return false;
          }
        } else if (this.detectLoops) {
          this.detectLoops.delete(obj);
        }
        return true;
      }
      _encodeAll(objs) {
        const bs = new NoFilter({ highWaterMark: this.readableHighWaterMark });
        this.pipe(bs);
        for (const o of objs) {
          this.pushAny(o);
        }
        this.end();
        return bs.read();
      }
      addSemanticType(type, fun) {
        const typeName = typeof type === "string" ? type : type.name;
        const old = this.semanticTypes[typeName];
        if (fun) {
          if (typeof fun !== "function") {
            throw new TypeError("fun must be of type function");
          }
          this.semanticTypes[typeName] = fun;
        } else if (old) {
          delete this.semanticTypes[typeName];
        }
        return old;
      }
      pushAny(obj) {
        switch (typeof obj) {
          case "number":
            return this._pushNumber(obj);
          case "bigint":
            return this._pushJSBigint(obj);
          case "string":
            return this._pushString(obj);
          case "boolean":
            return this._pushBoolean(obj);
          case "undefined":
            return this._pushUndefined(obj);
          case "object":
            return this._pushObject(obj);
          case "symbol":
            switch (obj) {
              case SYMS.NULL:
                return this._pushNull(null);
              case SYMS.UNDEFINED:
                return this._pushUndefined(void 0);
              default:
                throw new TypeError(`Unknown symbol: ${obj.toString()}`);
            }
          default:
            throw new TypeError(
              `Unknown type: ${typeof obj}, ${typeof obj.toString === "function" ? obj.toString() : ""}`
            );
        }
      }
      static pushArray(gen, obj, opts) {
        opts = {
          indefinite: false,
          ...opts
        };
        const len = obj.length;
        if (opts.indefinite) {
          if (!gen._pushUInt8(MT.ARRAY << 5 | NUMBYTES.INDEFINITE)) {
            return false;
          }
        } else if (!gen._pushInt(len, MT.ARRAY)) {
          return false;
        }
        for (let j2 = 0; j2 < len; j2++) {
          if (!gen.pushAny(obj[j2])) {
            return false;
          }
        }
        if (opts.indefinite) {
          if (!gen.push(BREAK)) {
            return false;
          }
        }
        return true;
      }
      removeLoopDetectors() {
        if (!this.detectLoops) {
          return false;
        }
        this.detectLoops = /* @__PURE__ */ new WeakSet();
        return true;
      }
      static _pushDate(gen, obj) {
        switch (gen.dateType) {
          case "string":
            return gen._pushTag(TAG.DATE_STRING) && gen._pushString(obj.toISOString());
          case "int":
            return gen._pushTag(TAG.DATE_EPOCH) && gen._pushIntNum(Math.round(obj.getTime() / 1e3));
          case "float":
            return gen._pushTag(TAG.DATE_EPOCH) && gen._pushFloat(obj.getTime() / 1e3);
          case "number":
          default:
            return gen._pushTag(TAG.DATE_EPOCH) && gen.pushAny(obj.getTime() / 1e3);
        }
      }
      static _pushBuffer(gen, obj) {
        return gen._pushInt(obj.length, MT.BYTE_STRING) && gen.push(obj);
      }
      static _pushNoFilter(gen, obj) {
        return Encoder._pushBuffer(gen, obj.slice());
      }
      static _pushRegexp(gen, obj) {
        return gen._pushTag(TAG.REGEXP) && gen.pushAny(obj.source);
      }
      static _pushSet(gen, obj) {
        if (!gen._pushTag(TAG.SET)) {
          return false;
        }
        if (!gen._pushInt(obj.size, MT.ARRAY)) {
          return false;
        }
        for (const x of obj) {
          if (!gen.pushAny(x)) {
            return false;
          }
        }
        return true;
      }
      static _pushURL(gen, obj) {
        return gen._pushTag(TAG.URI) && gen.pushAny(obj.toString());
      }
      static _pushBoxed(gen, obj) {
        return gen.pushAny(obj.valueOf());
      }
      static _pushMap(gen, obj, opts) {
        opts = {
          indefinite: false,
          ...opts
        };
        let entries = [...obj.entries()];
        if (gen.omitUndefinedProperties) {
          entries = entries.filter(([k, v]) => v !== void 0);
        }
        if (opts.indefinite) {
          if (!gen._pushUInt8(MT.MAP << 5 | NUMBYTES.INDEFINITE)) {
            return false;
          }
        } else if (!gen._pushInt(entries.length, MT.MAP)) {
          return false;
        }
        if (gen.canonical) {
          const enc = new Encoder({
            genTypes: gen.semanticTypes,
            canonical: gen.canonical,
            detectLoops: Boolean(gen.detectLoops),
            dateType: gen.dateType,
            disallowUndefinedKeys: gen.disallowUndefinedKeys,
            collapseBigIntegers: gen.collapseBigIntegers
          });
          const bs = new NoFilter({ highWaterMark: gen.readableHighWaterMark });
          enc.pipe(bs);
          entries.sort(([a], [b]) => {
            enc.pushAny(a);
            const a_cbor = bs.read();
            enc.pushAny(b);
            const b_cbor = bs.read();
            return a_cbor.compare(b_cbor);
          });
          for (const [k, v] of entries) {
            if (gen.disallowUndefinedKeys && typeof k === "undefined") {
              throw new Error("Invalid Map key: undefined");
            }
            if (!(gen.pushAny(k) && gen.pushAny(v))) {
              return false;
            }
          }
        } else {
          for (const [k, v] of entries) {
            if (gen.disallowUndefinedKeys && typeof k === "undefined") {
              throw new Error("Invalid Map key: undefined");
            }
            if (!(gen.pushAny(k) && gen.pushAny(v))) {
              return false;
            }
          }
        }
        if (opts.indefinite) {
          if (!gen.push(BREAK)) {
            return false;
          }
        }
        return true;
      }
      static _pushTypedArray(gen, obj) {
        let typ = 64;
        let sz = obj.BYTES_PER_ELEMENT;
        const { name } = obj.constructor;
        if (name.startsWith("Float")) {
          typ |= 16;
          sz /= 2;
        } else if (!name.includes("U")) {
          typ |= 8;
        }
        if (name.includes("Clamped") || sz !== 1 && !utils.isBigEndian()) {
          typ |= 4;
        }
        typ |= {
          1: 0,
          2: 1,
          4: 2,
          8: 3
        }[sz];
        if (!gen._pushTag(typ)) {
          return false;
        }
        return Encoder._pushBuffer(
          gen,
          Buffer2.from(obj.buffer, obj.byteOffset, obj.byteLength)
        );
      }
      static _pushArrayBuffer(gen, obj) {
        return Encoder._pushBuffer(gen, Buffer2.from(obj));
      }
      static encodeIndefinite(gen, obj, options = {}) {
        if (obj == null) {
          if (this == null) {
            throw new Error("No object to encode");
          }
          obj = this;
        }
        const { chunkSize = 4096 } = options;
        let ret = true;
        const objType = typeof obj;
        let buf = null;
        if (objType === "string") {
          ret = ret && gen._pushUInt8(MT.UTF8_STRING << 5 | NUMBYTES.INDEFINITE);
          let offset = 0;
          while (offset < obj.length) {
            const endIndex = offset + chunkSize;
            ret = ret && gen._pushString(obj.slice(offset, endIndex));
            offset = endIndex;
          }
          ret = ret && gen.push(BREAK);
        } else if (buf = utils.bufferishToBuffer(obj)) {
          ret = ret && gen._pushUInt8(MT.BYTE_STRING << 5 | NUMBYTES.INDEFINITE);
          let offset = 0;
          while (offset < buf.length) {
            const endIndex = offset + chunkSize;
            ret = ret && Encoder._pushBuffer(gen, buf.slice(offset, endIndex));
            offset = endIndex;
          }
          ret = ret && gen.push(BREAK);
        } else if (Array.isArray(obj)) {
          ret = ret && Encoder.pushArray(gen, obj, {
            indefinite: true
          });
        } else if (obj instanceof Map) {
          ret = ret && Encoder._pushMap(gen, obj, {
            indefinite: true
          });
        } else {
          if (objType !== "object") {
            throw new Error("Invalid indefinite encoding");
          }
          ret = ret && gen._pushObject(obj, {
            indefinite: true,
            skipTypes: true
          });
        }
        return ret;
      }
      static encode(...objs) {
        return new Encoder()._encodeAll(objs);
      }
      static encodeCanonical(...objs) {
        return new Encoder({
          canonical: true
        })._encodeAll(objs);
      }
      static encodeOne(obj, options) {
        return new Encoder(options)._encodeAll([obj]);
      }
      static encodeAsync(obj, options) {
        return new Promise((resolve, reject) => {
          const bufs = [];
          const enc = new Encoder(options);
          enc.on("data", (buf) => bufs.push(buf));
          enc.on("error", reject);
          enc.on("finish", () => resolve(Buffer2.concat(bufs)));
          enc.pushAny(obj);
          enc.end();
        });
      }
      static get SEMANTIC_TYPES() {
        return current_SEMANTIC_TYPES;
      }
      static set SEMANTIC_TYPES(val) {
        current_SEMANTIC_TYPES = val;
      }
      static reset() {
        Encoder.SEMANTIC_TYPES = { ...SEMANTIC_TYPES };
      }
    };
    Object.assign(SEMANTIC_TYPES, {
      Array: Encoder.pushArray,
      Date: Encoder._pushDate,
      Buffer: Encoder._pushBuffer,
      [Buffer2.name]: Encoder._pushBuffer,
      Map: Encoder._pushMap,
      NoFilter: Encoder._pushNoFilter,
      [NoFilter.name]: Encoder._pushNoFilter,
      RegExp: Encoder._pushRegexp,
      Set: Encoder._pushSet,
      ArrayBuffer: Encoder._pushArrayBuffer,
      Uint8ClampedArray: Encoder._pushTypedArray,
      Uint8Array: Encoder._pushTypedArray,
      Uint16Array: Encoder._pushTypedArray,
      Uint32Array: Encoder._pushTypedArray,
      Int8Array: Encoder._pushTypedArray,
      Int16Array: Encoder._pushTypedArray,
      Int32Array: Encoder._pushTypedArray,
      Float32Array: Encoder._pushTypedArray,
      Float64Array: Encoder._pushTypedArray,
      URL: Encoder._pushURL,
      Boolean: Encoder._pushBoxed,
      Number: Encoder._pushBoxed,
      String: Encoder._pushBoxed
    });
    if (typeof BigUint64Array !== "undefined") {
      SEMANTIC_TYPES[BigUint64Array.name] = Encoder._pushTypedArray;
    }
    if (typeof BigInt64Array !== "undefined") {
      SEMANTIC_TYPES[BigInt64Array.name] = Encoder._pushTypedArray;
    }
    Encoder.reset();
    module2.exports = Encoder;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/map.js
var require_map = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/map.js"(exports2, module2) {
    "use strict";
    var { Buffer: Buffer2 } = require("buffer");
    var encoder = require_encoder2();
    var decoder = require_decoder2();
    var { MT } = require_constants();
    var CborMap = class extends Map {
      constructor(iterable) {
        super(iterable);
      }
      static _encode(key) {
        return encoder.encodeCanonical(key).toString("base64");
      }
      static _decode(key) {
        return decoder.decodeFirstSync(key, "base64");
      }
      get(key) {
        return super.get(CborMap._encode(key));
      }
      set(key, val) {
        return super.set(CborMap._encode(key), val);
      }
      delete(key) {
        return super.delete(CborMap._encode(key));
      }
      has(key) {
        return super.has(CborMap._encode(key));
      }
      *keys() {
        for (const k of super.keys()) {
          yield CborMap._decode(k);
        }
      }
      *entries() {
        for (const kv of super.entries()) {
          yield [CborMap._decode(kv[0]), kv[1]];
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      forEach(fun, thisArg) {
        if (typeof fun !== "function") {
          throw new TypeError("Must be function");
        }
        for (const kv of super.entries()) {
          fun.call(this, kv[1], CborMap._decode(kv[0]), this);
        }
      }
      encodeCBOR(gen) {
        if (!gen._pushInt(this.size, MT.MAP)) {
          return false;
        }
        if (gen.canonical) {
          const entries = Array.from(super.entries()).map((kv) => [Buffer2.from(kv[0], "base64"), kv[1]]);
          entries.sort((a, b) => a[0].compare(b[0]));
          for (const kv of entries) {
            if (!(gen.push(kv[0]) && gen.pushAny(kv[1]))) {
              return false;
            }
          }
        } else {
          for (const kv of super.entries()) {
            if (!(gen.push(Buffer2.from(kv[0], "base64")) && gen.pushAny(kv[1]))) {
              return false;
            }
          }
        }
        return true;
      }
    };
    module2.exports = CborMap;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/objectRecorder.js
var require_objectRecorder = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/objectRecorder.js"(exports2, module2) {
    "use strict";
    var ObjectRecorder = class {
      constructor() {
        this.clear();
      }
      clear() {
        this.map = /* @__PURE__ */ new WeakMap();
        this.count = 0;
        this.recording = true;
      }
      stop() {
        this.recording = false;
      }
      check(obj) {
        const val = this.map.get(obj);
        if (val) {
          if (val.length > 1) {
            if (val[0] || this.recording) {
              return val[1];
            }
            val[0] = true;
            return ObjectRecorder.FIRST;
          }
          if (!this.recording) {
            return ObjectRecorder.NEVER;
          }
          val.push(this.count++);
          return val[1];
        }
        if (!this.recording) {
          throw new Error("New object detected when not recording");
        }
        this.map.set(obj, [false]);
        return ObjectRecorder.NEVER;
      }
    };
    ObjectRecorder.NEVER = -1;
    ObjectRecorder.FIRST = -2;
    module2.exports = ObjectRecorder;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/sharedValueEncoder.js
var require_sharedValueEncoder = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/sharedValueEncoder.js"(exports2, module2) {
    "use strict";
    var Encoder = require_encoder2();
    var ObjectRecorder = require_objectRecorder();
    var { Buffer: Buffer2 } = require("buffer");
    var SharedValueEncoder = class extends Encoder {
      constructor(opts) {
        super(opts);
        this.valueSharing = new ObjectRecorder();
      }
      _pushObject(obj, opts) {
        if (obj !== null) {
          const shared = this.valueSharing.check(obj);
          switch (shared) {
            case ObjectRecorder.FIRST:
              this._pushTag(28);
              break;
            case ObjectRecorder.NEVER:
              break;
            default:
              return this._pushTag(29) && this._pushIntNum(shared);
          }
        }
        return super._pushObject(obj, opts);
      }
      stopRecording() {
        this.valueSharing.stop();
      }
      clearRecording() {
        this.valueSharing.clear();
      }
      static encode(...objs) {
        const enc = new SharedValueEncoder();
        enc.on("data", () => {
        });
        for (const o of objs) {
          enc.pushAny(o);
        }
        enc.stopRecording();
        enc.removeAllListeners("data");
        return enc._encodeAll(objs);
      }
      static encodeCanonical(...objs) {
        throw new Error("Cannot encode canonically in a SharedValueEncoder, which serializes objects multiple times.");
      }
      static encodeOne(obj, options) {
        const enc = new SharedValueEncoder(options);
        enc.on("data", () => {
        });
        enc.pushAny(obj);
        enc.stopRecording();
        enc.removeAllListeners("data");
        return enc._encodeAll([obj]);
      }
      static encodeAsync(obj, options) {
        return new Promise((resolve, reject) => {
          const bufs = [];
          const enc = new SharedValueEncoder(options);
          enc.on("data", () => {
          });
          enc.on("error", reject);
          enc.on("finish", () => resolve(Buffer2.concat(bufs)));
          enc.pushAny(obj);
          enc.stopRecording();
          enc.removeAllListeners("data");
          enc.on("data", (buf) => bufs.push(buf));
          enc.pushAny(obj);
          enc.end();
        });
      }
    };
    module2.exports = SharedValueEncoder;
  }
});

// node_modules/_cbor@9.0.1@cbor/lib/cbor.js
var require_cbor = __commonJS({
  "node_modules/_cbor@9.0.1@cbor/lib/cbor.js"(exports2, module2) {
    "use strict";
    var Commented = require_commented();
    var Diagnose = require_diagnose();
    var Decoder = require_decoder2();
    var Encoder = require_encoder2();
    var Simple = require_simple();
    var Tagged = require_tagged();
    var Map2 = require_map();
    var SharedValueEncoder = require_sharedValueEncoder();
    module2.exports = {
      Commented,
      Diagnose,
      Decoder,
      Encoder,
      Simple,
      Tagged,
      Map: Map2,
      SharedValueEncoder,
      comment: Commented.comment,
      decodeAll: Decoder.decodeAll,
      decodeFirst: Decoder.decodeFirst,
      decodeAllSync: Decoder.decodeAllSync,
      decodeFirstSync: Decoder.decodeFirstSync,
      diagnose: Diagnose.diagnose,
      encode: Encoder.encode,
      encodeCanonical: Encoder.encodeCanonical,
      encodeOne: Encoder.encodeOne,
      encodeAsync: Encoder.encodeAsync,
      decode: Decoder.decodeFirstSync,
      leveldb: {
        decode: Decoder.decodeFirstSync,
        encode: Encoder.encode,
        buffer: true,
        name: "cbor"
      },
      reset() {
        Encoder.reset();
        Tagged.reset();
      }
    };
  }
});

// node_modules/_tweetnacl@1.0.3@tweetnacl/nacl-fast.js
var require_nacl_fast = __commonJS({
  "node_modules/_tweetnacl@1.0.3@tweetnacl/nacl-fast.js"(exports2, module2) {
    (function(nacl) {
      "use strict";
      var gf = function(init) {
        var i, r = new Float64Array(16);
        if (init)
          for (i = 0; i < init.length; i++)
            r[i] = init[i];
        return r;
      };
      var randombytes = function() {
        throw new Error("no PRNG");
      };
      var _0 = new Uint8Array(16);
      var _9 = new Uint8Array(32);
      _9[0] = 9;
      var gf0 = gf(), gf1 = gf([1]), _121665 = gf([56129, 1]), D = gf([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), D2 = gf([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]), X = gf([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]), Y = gf([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]), I = gf([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
      function ts64(x, i, h, l) {
        x[i] = h >> 24 & 255;
        x[i + 1] = h >> 16 & 255;
        x[i + 2] = h >> 8 & 255;
        x[i + 3] = h & 255;
        x[i + 4] = l >> 24 & 255;
        x[i + 5] = l >> 16 & 255;
        x[i + 6] = l >> 8 & 255;
        x[i + 7] = l & 255;
      }
      function vn(x, xi, y, yi, n) {
        var i, d = 0;
        for (i = 0; i < n; i++)
          d |= x[xi + i] ^ y[yi + i];
        return (1 & d - 1 >>> 8) - 1;
      }
      function crypto_verify_16(x, xi, y, yi) {
        return vn(x, xi, y, yi, 16);
      }
      function crypto_verify_32(x, xi, y, yi) {
        return vn(x, xi, y, yi, 32);
      }
      function core_salsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        x0 = x0 + j0 | 0;
        x1 = x1 + j1 | 0;
        x2 = x2 + j2 | 0;
        x3 = x3 + j3 | 0;
        x4 = x4 + j4 | 0;
        x5 = x5 + j5 | 0;
        x6 = x6 + j6 | 0;
        x7 = x7 + j7 | 0;
        x8 = x8 + j8 | 0;
        x9 = x9 + j9 | 0;
        x10 = x10 + j10 | 0;
        x11 = x11 + j11 | 0;
        x12 = x12 + j12 | 0;
        x13 = x13 + j13 | 0;
        x14 = x14 + j14 | 0;
        x15 = x15 + j15 | 0;
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x1 >>> 0 & 255;
        o[5] = x1 >>> 8 & 255;
        o[6] = x1 >>> 16 & 255;
        o[7] = x1 >>> 24 & 255;
        o[8] = x2 >>> 0 & 255;
        o[9] = x2 >>> 8 & 255;
        o[10] = x2 >>> 16 & 255;
        o[11] = x2 >>> 24 & 255;
        o[12] = x3 >>> 0 & 255;
        o[13] = x3 >>> 8 & 255;
        o[14] = x3 >>> 16 & 255;
        o[15] = x3 >>> 24 & 255;
        o[16] = x4 >>> 0 & 255;
        o[17] = x4 >>> 8 & 255;
        o[18] = x4 >>> 16 & 255;
        o[19] = x4 >>> 24 & 255;
        o[20] = x5 >>> 0 & 255;
        o[21] = x5 >>> 8 & 255;
        o[22] = x5 >>> 16 & 255;
        o[23] = x5 >>> 24 & 255;
        o[24] = x6 >>> 0 & 255;
        o[25] = x6 >>> 8 & 255;
        o[26] = x6 >>> 16 & 255;
        o[27] = x6 >>> 24 & 255;
        o[28] = x7 >>> 0 & 255;
        o[29] = x7 >>> 8 & 255;
        o[30] = x7 >>> 16 & 255;
        o[31] = x7 >>> 24 & 255;
        o[32] = x8 >>> 0 & 255;
        o[33] = x8 >>> 8 & 255;
        o[34] = x8 >>> 16 & 255;
        o[35] = x8 >>> 24 & 255;
        o[36] = x9 >>> 0 & 255;
        o[37] = x9 >>> 8 & 255;
        o[38] = x9 >>> 16 & 255;
        o[39] = x9 >>> 24 & 255;
        o[40] = x10 >>> 0 & 255;
        o[41] = x10 >>> 8 & 255;
        o[42] = x10 >>> 16 & 255;
        o[43] = x10 >>> 24 & 255;
        o[44] = x11 >>> 0 & 255;
        o[45] = x11 >>> 8 & 255;
        o[46] = x11 >>> 16 & 255;
        o[47] = x11 >>> 24 & 255;
        o[48] = x12 >>> 0 & 255;
        o[49] = x12 >>> 8 & 255;
        o[50] = x12 >>> 16 & 255;
        o[51] = x12 >>> 24 & 255;
        o[52] = x13 >>> 0 & 255;
        o[53] = x13 >>> 8 & 255;
        o[54] = x13 >>> 16 & 255;
        o[55] = x13 >>> 24 & 255;
        o[56] = x14 >>> 0 & 255;
        o[57] = x14 >>> 8 & 255;
        o[58] = x14 >>> 16 & 255;
        o[59] = x14 >>> 24 & 255;
        o[60] = x15 >>> 0 & 255;
        o[61] = x15 >>> 8 & 255;
        o[62] = x15 >>> 16 & 255;
        o[63] = x15 >>> 24 & 255;
      }
      function core_hsalsa20(o, p, k, c) {
        var j0 = c[0] & 255 | (c[1] & 255) << 8 | (c[2] & 255) << 16 | (c[3] & 255) << 24, j1 = k[0] & 255 | (k[1] & 255) << 8 | (k[2] & 255) << 16 | (k[3] & 255) << 24, j2 = k[4] & 255 | (k[5] & 255) << 8 | (k[6] & 255) << 16 | (k[7] & 255) << 24, j3 = k[8] & 255 | (k[9] & 255) << 8 | (k[10] & 255) << 16 | (k[11] & 255) << 24, j4 = k[12] & 255 | (k[13] & 255) << 8 | (k[14] & 255) << 16 | (k[15] & 255) << 24, j5 = c[4] & 255 | (c[5] & 255) << 8 | (c[6] & 255) << 16 | (c[7] & 255) << 24, j6 = p[0] & 255 | (p[1] & 255) << 8 | (p[2] & 255) << 16 | (p[3] & 255) << 24, j7 = p[4] & 255 | (p[5] & 255) << 8 | (p[6] & 255) << 16 | (p[7] & 255) << 24, j8 = p[8] & 255 | (p[9] & 255) << 8 | (p[10] & 255) << 16 | (p[11] & 255) << 24, j9 = p[12] & 255 | (p[13] & 255) << 8 | (p[14] & 255) << 16 | (p[15] & 255) << 24, j10 = c[8] & 255 | (c[9] & 255) << 8 | (c[10] & 255) << 16 | (c[11] & 255) << 24, j11 = k[16] & 255 | (k[17] & 255) << 8 | (k[18] & 255) << 16 | (k[19] & 255) << 24, j12 = k[20] & 255 | (k[21] & 255) << 8 | (k[22] & 255) << 16 | (k[23] & 255) << 24, j13 = k[24] & 255 | (k[25] & 255) << 8 | (k[26] & 255) << 16 | (k[27] & 255) << 24, j14 = k[28] & 255 | (k[29] & 255) << 8 | (k[30] & 255) << 16 | (k[31] & 255) << 24, j15 = c[12] & 255 | (c[13] & 255) << 8 | (c[14] & 255) << 16 | (c[15] & 255) << 24;
        var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7, x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14, x15 = j15, u;
        for (var i = 0; i < 20; i += 2) {
          u = x0 + x12 | 0;
          x4 ^= u << 7 | u >>> 32 - 7;
          u = x4 + x0 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x4 | 0;
          x12 ^= u << 13 | u >>> 32 - 13;
          u = x12 + x8 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x1 | 0;
          x9 ^= u << 7 | u >>> 32 - 7;
          u = x9 + x5 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x9 | 0;
          x1 ^= u << 13 | u >>> 32 - 13;
          u = x1 + x13 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x6 | 0;
          x14 ^= u << 7 | u >>> 32 - 7;
          u = x14 + x10 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x14 | 0;
          x6 ^= u << 13 | u >>> 32 - 13;
          u = x6 + x2 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x11 | 0;
          x3 ^= u << 7 | u >>> 32 - 7;
          u = x3 + x15 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x3 | 0;
          x11 ^= u << 13 | u >>> 32 - 13;
          u = x11 + x7 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
          u = x0 + x3 | 0;
          x1 ^= u << 7 | u >>> 32 - 7;
          u = x1 + x0 | 0;
          x2 ^= u << 9 | u >>> 32 - 9;
          u = x2 + x1 | 0;
          x3 ^= u << 13 | u >>> 32 - 13;
          u = x3 + x2 | 0;
          x0 ^= u << 18 | u >>> 32 - 18;
          u = x5 + x4 | 0;
          x6 ^= u << 7 | u >>> 32 - 7;
          u = x6 + x5 | 0;
          x7 ^= u << 9 | u >>> 32 - 9;
          u = x7 + x6 | 0;
          x4 ^= u << 13 | u >>> 32 - 13;
          u = x4 + x7 | 0;
          x5 ^= u << 18 | u >>> 32 - 18;
          u = x10 + x9 | 0;
          x11 ^= u << 7 | u >>> 32 - 7;
          u = x11 + x10 | 0;
          x8 ^= u << 9 | u >>> 32 - 9;
          u = x8 + x11 | 0;
          x9 ^= u << 13 | u >>> 32 - 13;
          u = x9 + x8 | 0;
          x10 ^= u << 18 | u >>> 32 - 18;
          u = x15 + x14 | 0;
          x12 ^= u << 7 | u >>> 32 - 7;
          u = x12 + x15 | 0;
          x13 ^= u << 9 | u >>> 32 - 9;
          u = x13 + x12 | 0;
          x14 ^= u << 13 | u >>> 32 - 13;
          u = x14 + x13 | 0;
          x15 ^= u << 18 | u >>> 32 - 18;
        }
        o[0] = x0 >>> 0 & 255;
        o[1] = x0 >>> 8 & 255;
        o[2] = x0 >>> 16 & 255;
        o[3] = x0 >>> 24 & 255;
        o[4] = x5 >>> 0 & 255;
        o[5] = x5 >>> 8 & 255;
        o[6] = x5 >>> 16 & 255;
        o[7] = x5 >>> 24 & 255;
        o[8] = x10 >>> 0 & 255;
        o[9] = x10 >>> 8 & 255;
        o[10] = x10 >>> 16 & 255;
        o[11] = x10 >>> 24 & 255;
        o[12] = x15 >>> 0 & 255;
        o[13] = x15 >>> 8 & 255;
        o[14] = x15 >>> 16 & 255;
        o[15] = x15 >>> 24 & 255;
        o[16] = x6 >>> 0 & 255;
        o[17] = x6 >>> 8 & 255;
        o[18] = x6 >>> 16 & 255;
        o[19] = x6 >>> 24 & 255;
        o[20] = x7 >>> 0 & 255;
        o[21] = x7 >>> 8 & 255;
        o[22] = x7 >>> 16 & 255;
        o[23] = x7 >>> 24 & 255;
        o[24] = x8 >>> 0 & 255;
        o[25] = x8 >>> 8 & 255;
        o[26] = x8 >>> 16 & 255;
        o[27] = x8 >>> 24 & 255;
        o[28] = x9 >>> 0 & 255;
        o[29] = x9 >>> 8 & 255;
        o[30] = x9 >>> 16 & 255;
        o[31] = x9 >>> 24 & 255;
      }
      function crypto_core_salsa20(out, inp, k, c) {
        core_salsa20(out, inp, k, c);
      }
      function crypto_core_hsalsa20(out, inp, k, c) {
        core_hsalsa20(out, inp, k, c);
      }
      var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
      function crypto_stream_salsa20_xor(c, cpos, m, mpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++)
          z[i] = 0;
        for (i = 0; i < 8; i++)
          z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++)
            c[cpos + i] = m[mpos + i] ^ x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
          mpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++)
            c[cpos + i] = m[mpos + i] ^ x[i];
        }
        return 0;
      }
      function crypto_stream_salsa20(c, cpos, b, n, k) {
        var z = new Uint8Array(16), x = new Uint8Array(64);
        var u, i;
        for (i = 0; i < 16; i++)
          z[i] = 0;
        for (i = 0; i < 8; i++)
          z[i] = n[i];
        while (b >= 64) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < 64; i++)
            c[cpos + i] = x[i];
          u = 1;
          for (i = 8; i < 16; i++) {
            u = u + (z[i] & 255) | 0;
            z[i] = u & 255;
            u >>>= 8;
          }
          b -= 64;
          cpos += 64;
        }
        if (b > 0) {
          crypto_core_salsa20(x, z, k, sigma);
          for (i = 0; i < b; i++)
            c[cpos + i] = x[i];
        }
        return 0;
      }
      function crypto_stream(c, cpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++)
          sn[i] = n[i + 16];
        return crypto_stream_salsa20(c, cpos, d, sn, s);
      }
      function crypto_stream_xor(c, cpos, m, mpos, d, n, k) {
        var s = new Uint8Array(32);
        crypto_core_hsalsa20(s, n, k, sigma);
        var sn = new Uint8Array(8);
        for (var i = 0; i < 8; i++)
          sn[i] = n[i + 16];
        return crypto_stream_salsa20_xor(c, cpos, m, mpos, d, sn, s);
      }
      var poly1305 = function(key) {
        this.buffer = new Uint8Array(16);
        this.r = new Uint16Array(10);
        this.h = new Uint16Array(10);
        this.pad = new Uint16Array(8);
        this.leftover = 0;
        this.fin = 0;
        var t0, t1, t2, t3, t4, t5, t6, t7;
        t0 = key[0] & 255 | (key[1] & 255) << 8;
        this.r[0] = t0 & 8191;
        t1 = key[2] & 255 | (key[3] & 255) << 8;
        this.r[1] = (t0 >>> 13 | t1 << 3) & 8191;
        t2 = key[4] & 255 | (key[5] & 255) << 8;
        this.r[2] = (t1 >>> 10 | t2 << 6) & 7939;
        t3 = key[6] & 255 | (key[7] & 255) << 8;
        this.r[3] = (t2 >>> 7 | t3 << 9) & 8191;
        t4 = key[8] & 255 | (key[9] & 255) << 8;
        this.r[4] = (t3 >>> 4 | t4 << 12) & 255;
        this.r[5] = t4 >>> 1 & 8190;
        t5 = key[10] & 255 | (key[11] & 255) << 8;
        this.r[6] = (t4 >>> 14 | t5 << 2) & 8191;
        t6 = key[12] & 255 | (key[13] & 255) << 8;
        this.r[7] = (t5 >>> 11 | t6 << 5) & 8065;
        t7 = key[14] & 255 | (key[15] & 255) << 8;
        this.r[8] = (t6 >>> 8 | t7 << 8) & 8191;
        this.r[9] = t7 >>> 5 & 127;
        this.pad[0] = key[16] & 255 | (key[17] & 255) << 8;
        this.pad[1] = key[18] & 255 | (key[19] & 255) << 8;
        this.pad[2] = key[20] & 255 | (key[21] & 255) << 8;
        this.pad[3] = key[22] & 255 | (key[23] & 255) << 8;
        this.pad[4] = key[24] & 255 | (key[25] & 255) << 8;
        this.pad[5] = key[26] & 255 | (key[27] & 255) << 8;
        this.pad[6] = key[28] & 255 | (key[29] & 255) << 8;
        this.pad[7] = key[30] & 255 | (key[31] & 255) << 8;
      };
      poly1305.prototype.blocks = function(m, mpos, bytes) {
        var hibit = this.fin ? 0 : 1 << 11;
        var t0, t1, t2, t3, t4, t5, t6, t7, c;
        var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;
        var h0 = this.h[0], h1 = this.h[1], h2 = this.h[2], h3 = this.h[3], h4 = this.h[4], h5 = this.h[5], h6 = this.h[6], h7 = this.h[7], h8 = this.h[8], h9 = this.h[9];
        var r0 = this.r[0], r1 = this.r[1], r2 = this.r[2], r3 = this.r[3], r4 = this.r[4], r5 = this.r[5], r6 = this.r[6], r7 = this.r[7], r8 = this.r[8], r9 = this.r[9];
        while (bytes >= 16) {
          t0 = m[mpos + 0] & 255 | (m[mpos + 1] & 255) << 8;
          h0 += t0 & 8191;
          t1 = m[mpos + 2] & 255 | (m[mpos + 3] & 255) << 8;
          h1 += (t0 >>> 13 | t1 << 3) & 8191;
          t2 = m[mpos + 4] & 255 | (m[mpos + 5] & 255) << 8;
          h2 += (t1 >>> 10 | t2 << 6) & 8191;
          t3 = m[mpos + 6] & 255 | (m[mpos + 7] & 255) << 8;
          h3 += (t2 >>> 7 | t3 << 9) & 8191;
          t4 = m[mpos + 8] & 255 | (m[mpos + 9] & 255) << 8;
          h4 += (t3 >>> 4 | t4 << 12) & 8191;
          h5 += t4 >>> 1 & 8191;
          t5 = m[mpos + 10] & 255 | (m[mpos + 11] & 255) << 8;
          h6 += (t4 >>> 14 | t5 << 2) & 8191;
          t6 = m[mpos + 12] & 255 | (m[mpos + 13] & 255) << 8;
          h7 += (t5 >>> 11 | t6 << 5) & 8191;
          t7 = m[mpos + 14] & 255 | (m[mpos + 15] & 255) << 8;
          h8 += (t6 >>> 8 | t7 << 8) & 8191;
          h9 += t7 >>> 5 | hibit;
          c = 0;
          d0 = c;
          d0 += h0 * r0;
          d0 += h1 * (5 * r9);
          d0 += h2 * (5 * r8);
          d0 += h3 * (5 * r7);
          d0 += h4 * (5 * r6);
          c = d0 >>> 13;
          d0 &= 8191;
          d0 += h5 * (5 * r5);
          d0 += h6 * (5 * r4);
          d0 += h7 * (5 * r3);
          d0 += h8 * (5 * r2);
          d0 += h9 * (5 * r1);
          c += d0 >>> 13;
          d0 &= 8191;
          d1 = c;
          d1 += h0 * r1;
          d1 += h1 * r0;
          d1 += h2 * (5 * r9);
          d1 += h3 * (5 * r8);
          d1 += h4 * (5 * r7);
          c = d1 >>> 13;
          d1 &= 8191;
          d1 += h5 * (5 * r6);
          d1 += h6 * (5 * r5);
          d1 += h7 * (5 * r4);
          d1 += h8 * (5 * r3);
          d1 += h9 * (5 * r2);
          c += d1 >>> 13;
          d1 &= 8191;
          d2 = c;
          d2 += h0 * r2;
          d2 += h1 * r1;
          d2 += h2 * r0;
          d2 += h3 * (5 * r9);
          d2 += h4 * (5 * r8);
          c = d2 >>> 13;
          d2 &= 8191;
          d2 += h5 * (5 * r7);
          d2 += h6 * (5 * r6);
          d2 += h7 * (5 * r5);
          d2 += h8 * (5 * r4);
          d2 += h9 * (5 * r3);
          c += d2 >>> 13;
          d2 &= 8191;
          d3 = c;
          d3 += h0 * r3;
          d3 += h1 * r2;
          d3 += h2 * r1;
          d3 += h3 * r0;
          d3 += h4 * (5 * r9);
          c = d3 >>> 13;
          d3 &= 8191;
          d3 += h5 * (5 * r8);
          d3 += h6 * (5 * r7);
          d3 += h7 * (5 * r6);
          d3 += h8 * (5 * r5);
          d3 += h9 * (5 * r4);
          c += d3 >>> 13;
          d3 &= 8191;
          d4 = c;
          d4 += h0 * r4;
          d4 += h1 * r3;
          d4 += h2 * r2;
          d4 += h3 * r1;
          d4 += h4 * r0;
          c = d4 >>> 13;
          d4 &= 8191;
          d4 += h5 * (5 * r9);
          d4 += h6 * (5 * r8);
          d4 += h7 * (5 * r7);
          d4 += h8 * (5 * r6);
          d4 += h9 * (5 * r5);
          c += d4 >>> 13;
          d4 &= 8191;
          d5 = c;
          d5 += h0 * r5;
          d5 += h1 * r4;
          d5 += h2 * r3;
          d5 += h3 * r2;
          d5 += h4 * r1;
          c = d5 >>> 13;
          d5 &= 8191;
          d5 += h5 * r0;
          d5 += h6 * (5 * r9);
          d5 += h7 * (5 * r8);
          d5 += h8 * (5 * r7);
          d5 += h9 * (5 * r6);
          c += d5 >>> 13;
          d5 &= 8191;
          d6 = c;
          d6 += h0 * r6;
          d6 += h1 * r5;
          d6 += h2 * r4;
          d6 += h3 * r3;
          d6 += h4 * r2;
          c = d6 >>> 13;
          d6 &= 8191;
          d6 += h5 * r1;
          d6 += h6 * r0;
          d6 += h7 * (5 * r9);
          d6 += h8 * (5 * r8);
          d6 += h9 * (5 * r7);
          c += d6 >>> 13;
          d6 &= 8191;
          d7 = c;
          d7 += h0 * r7;
          d7 += h1 * r6;
          d7 += h2 * r5;
          d7 += h3 * r4;
          d7 += h4 * r3;
          c = d7 >>> 13;
          d7 &= 8191;
          d7 += h5 * r2;
          d7 += h6 * r1;
          d7 += h7 * r0;
          d7 += h8 * (5 * r9);
          d7 += h9 * (5 * r8);
          c += d7 >>> 13;
          d7 &= 8191;
          d8 = c;
          d8 += h0 * r8;
          d8 += h1 * r7;
          d8 += h2 * r6;
          d8 += h3 * r5;
          d8 += h4 * r4;
          c = d8 >>> 13;
          d8 &= 8191;
          d8 += h5 * r3;
          d8 += h6 * r2;
          d8 += h7 * r1;
          d8 += h8 * r0;
          d8 += h9 * (5 * r9);
          c += d8 >>> 13;
          d8 &= 8191;
          d9 = c;
          d9 += h0 * r9;
          d9 += h1 * r8;
          d9 += h2 * r7;
          d9 += h3 * r6;
          d9 += h4 * r5;
          c = d9 >>> 13;
          d9 &= 8191;
          d9 += h5 * r4;
          d9 += h6 * r3;
          d9 += h7 * r2;
          d9 += h8 * r1;
          d9 += h9 * r0;
          c += d9 >>> 13;
          d9 &= 8191;
          c = (c << 2) + c | 0;
          c = c + d0 | 0;
          d0 = c & 8191;
          c = c >>> 13;
          d1 += c;
          h0 = d0;
          h1 = d1;
          h2 = d2;
          h3 = d3;
          h4 = d4;
          h5 = d5;
          h6 = d6;
          h7 = d7;
          h8 = d8;
          h9 = d9;
          mpos += 16;
          bytes -= 16;
        }
        this.h[0] = h0;
        this.h[1] = h1;
        this.h[2] = h2;
        this.h[3] = h3;
        this.h[4] = h4;
        this.h[5] = h5;
        this.h[6] = h6;
        this.h[7] = h7;
        this.h[8] = h8;
        this.h[9] = h9;
      };
      poly1305.prototype.finish = function(mac, macpos) {
        var g = new Uint16Array(10);
        var c, mask, f2, i;
        if (this.leftover) {
          i = this.leftover;
          this.buffer[i++] = 1;
          for (; i < 16; i++)
            this.buffer[i] = 0;
          this.fin = 1;
          this.blocks(this.buffer, 0, 16);
        }
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        for (i = 2; i < 10; i++) {
          this.h[i] += c;
          c = this.h[i] >>> 13;
          this.h[i] &= 8191;
        }
        this.h[0] += c * 5;
        c = this.h[0] >>> 13;
        this.h[0] &= 8191;
        this.h[1] += c;
        c = this.h[1] >>> 13;
        this.h[1] &= 8191;
        this.h[2] += c;
        g[0] = this.h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 8191;
        for (i = 1; i < 10; i++) {
          g[i] = this.h[i] + c;
          c = g[i] >>> 13;
          g[i] &= 8191;
        }
        g[9] -= 1 << 13;
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++)
          g[i] &= mask;
        mask = ~mask;
        for (i = 0; i < 10; i++)
          this.h[i] = this.h[i] & mask | g[i];
        this.h[0] = (this.h[0] | this.h[1] << 13) & 65535;
        this.h[1] = (this.h[1] >>> 3 | this.h[2] << 10) & 65535;
        this.h[2] = (this.h[2] >>> 6 | this.h[3] << 7) & 65535;
        this.h[3] = (this.h[3] >>> 9 | this.h[4] << 4) & 65535;
        this.h[4] = (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14) & 65535;
        this.h[5] = (this.h[6] >>> 2 | this.h[7] << 11) & 65535;
        this.h[6] = (this.h[7] >>> 5 | this.h[8] << 8) & 65535;
        this.h[7] = (this.h[8] >>> 8 | this.h[9] << 5) & 65535;
        f2 = this.h[0] + this.pad[0];
        this.h[0] = f2 & 65535;
        for (i = 1; i < 8; i++) {
          f2 = (this.h[i] + this.pad[i] | 0) + (f2 >>> 16) | 0;
          this.h[i] = f2 & 65535;
        }
        mac[macpos + 0] = this.h[0] >>> 0 & 255;
        mac[macpos + 1] = this.h[0] >>> 8 & 255;
        mac[macpos + 2] = this.h[1] >>> 0 & 255;
        mac[macpos + 3] = this.h[1] >>> 8 & 255;
        mac[macpos + 4] = this.h[2] >>> 0 & 255;
        mac[macpos + 5] = this.h[2] >>> 8 & 255;
        mac[macpos + 6] = this.h[3] >>> 0 & 255;
        mac[macpos + 7] = this.h[3] >>> 8 & 255;
        mac[macpos + 8] = this.h[4] >>> 0 & 255;
        mac[macpos + 9] = this.h[4] >>> 8 & 255;
        mac[macpos + 10] = this.h[5] >>> 0 & 255;
        mac[macpos + 11] = this.h[5] >>> 8 & 255;
        mac[macpos + 12] = this.h[6] >>> 0 & 255;
        mac[macpos + 13] = this.h[6] >>> 8 & 255;
        mac[macpos + 14] = this.h[7] >>> 0 & 255;
        mac[macpos + 15] = this.h[7] >>> 8 & 255;
      };
      poly1305.prototype.update = function(m, mpos, bytes) {
        var i, want;
        if (this.leftover) {
          want = 16 - this.leftover;
          if (want > bytes)
            want = bytes;
          for (i = 0; i < want; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          bytes -= want;
          mpos += want;
          this.leftover += want;
          if (this.leftover < 16)
            return;
          this.blocks(this.buffer, 0, 16);
          this.leftover = 0;
        }
        if (bytes >= 16) {
          want = bytes - bytes % 16;
          this.blocks(m, mpos, want);
          mpos += want;
          bytes -= want;
        }
        if (bytes) {
          for (i = 0; i < bytes; i++)
            this.buffer[this.leftover + i] = m[mpos + i];
          this.leftover += bytes;
        }
      };
      function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
        var s = new poly1305(k);
        s.update(m, mpos, n);
        s.finish(out, outpos);
        return 0;
      }
      function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
        var x = new Uint8Array(16);
        crypto_onetimeauth(x, 0, m, mpos, n, k);
        return crypto_verify_16(h, hpos, x, 0);
      }
      function crypto_secretbox(c, m, d, n, k) {
        var i;
        if (d < 32)
          return -1;
        crypto_stream_xor(c, 0, m, 0, d, n, k);
        crypto_onetimeauth(c, 16, c, 32, d - 32, c);
        for (i = 0; i < 16; i++)
          c[i] = 0;
        return 0;
      }
      function crypto_secretbox_open(m, c, d, n, k) {
        var i;
        var x = new Uint8Array(32);
        if (d < 32)
          return -1;
        crypto_stream(x, 0, 32, n, k);
        if (crypto_onetimeauth_verify(c, 16, c, 32, d - 32, x) !== 0)
          return -1;
        crypto_stream_xor(m, 0, c, 0, d, n, k);
        for (i = 0; i < 32; i++)
          m[i] = 0;
        return 0;
      }
      function set25519(r, a) {
        var i;
        for (i = 0; i < 16; i++)
          r[i] = a[i] | 0;
      }
      function car25519(o) {
        var i, v, c = 1;
        for (i = 0; i < 16; i++) {
          v = o[i] + c + 65535;
          c = Math.floor(v / 65536);
          o[i] = v - c * 65536;
        }
        o[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(p, q, b) {
        var t, c = ~(b - 1);
        for (var i = 0; i < 16; i++) {
          t = c & (p[i] ^ q[i]);
          p[i] ^= t;
          q[i] ^= t;
        }
      }
      function pack25519(o, n) {
        var i, j2, b;
        var m = gf(), t = gf();
        for (i = 0; i < 16; i++)
          t[i] = n[i];
        car25519(t);
        car25519(t);
        car25519(t);
        for (j2 = 0; j2 < 2; j2++) {
          m[0] = t[0] - 65517;
          for (i = 1; i < 15; i++) {
            m[i] = t[i] - 65535 - (m[i - 1] >> 16 & 1);
            m[i - 1] &= 65535;
          }
          m[15] = t[15] - 32767 - (m[14] >> 16 & 1);
          b = m[15] >> 16 & 1;
          m[14] &= 65535;
          sel25519(t, m, 1 - b);
        }
        for (i = 0; i < 16; i++) {
          o[2 * i] = t[i] & 255;
          o[2 * i + 1] = t[i] >> 8;
        }
      }
      function neq25519(a, b) {
        var c = new Uint8Array(32), d = new Uint8Array(32);
        pack25519(c, a);
        pack25519(d, b);
        return crypto_verify_32(c, 0, d, 0);
      }
      function par25519(a) {
        var d = new Uint8Array(32);
        pack25519(d, a);
        return d[0] & 1;
      }
      function unpack25519(o, n) {
        var i;
        for (i = 0; i < 16; i++)
          o[i] = n[2 * i] + (n[2 * i + 1] << 8);
        o[15] &= 32767;
      }
      function A(o, a, b) {
        for (var i = 0; i < 16; i++)
          o[i] = a[i] + b[i];
      }
      function Z(o, a, b) {
        for (var i = 0; i < 16; i++)
          o[i] = a[i] - b[i];
      }
      function M(o, a, b) {
        var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        v = a[0];
        t0 += v * b0;
        t1 += v * b1;
        t2 += v * b2;
        t3 += v * b3;
        t4 += v * b4;
        t5 += v * b5;
        t6 += v * b6;
        t7 += v * b7;
        t8 += v * b8;
        t9 += v * b9;
        t10 += v * b10;
        t11 += v * b11;
        t12 += v * b12;
        t13 += v * b13;
        t14 += v * b14;
        t15 += v * b15;
        v = a[1];
        t1 += v * b0;
        t2 += v * b1;
        t3 += v * b2;
        t4 += v * b3;
        t5 += v * b4;
        t6 += v * b5;
        t7 += v * b6;
        t8 += v * b7;
        t9 += v * b8;
        t10 += v * b9;
        t11 += v * b10;
        t12 += v * b11;
        t13 += v * b12;
        t14 += v * b13;
        t15 += v * b14;
        t16 += v * b15;
        v = a[2];
        t2 += v * b0;
        t3 += v * b1;
        t4 += v * b2;
        t5 += v * b3;
        t6 += v * b4;
        t7 += v * b5;
        t8 += v * b6;
        t9 += v * b7;
        t10 += v * b8;
        t11 += v * b9;
        t12 += v * b10;
        t13 += v * b11;
        t14 += v * b12;
        t15 += v * b13;
        t16 += v * b14;
        t17 += v * b15;
        v = a[3];
        t3 += v * b0;
        t4 += v * b1;
        t5 += v * b2;
        t6 += v * b3;
        t7 += v * b4;
        t8 += v * b5;
        t9 += v * b6;
        t10 += v * b7;
        t11 += v * b8;
        t12 += v * b9;
        t13 += v * b10;
        t14 += v * b11;
        t15 += v * b12;
        t16 += v * b13;
        t17 += v * b14;
        t18 += v * b15;
        v = a[4];
        t4 += v * b0;
        t5 += v * b1;
        t6 += v * b2;
        t7 += v * b3;
        t8 += v * b4;
        t9 += v * b5;
        t10 += v * b6;
        t11 += v * b7;
        t12 += v * b8;
        t13 += v * b9;
        t14 += v * b10;
        t15 += v * b11;
        t16 += v * b12;
        t17 += v * b13;
        t18 += v * b14;
        t19 += v * b15;
        v = a[5];
        t5 += v * b0;
        t6 += v * b1;
        t7 += v * b2;
        t8 += v * b3;
        t9 += v * b4;
        t10 += v * b5;
        t11 += v * b6;
        t12 += v * b7;
        t13 += v * b8;
        t14 += v * b9;
        t15 += v * b10;
        t16 += v * b11;
        t17 += v * b12;
        t18 += v * b13;
        t19 += v * b14;
        t20 += v * b15;
        v = a[6];
        t6 += v * b0;
        t7 += v * b1;
        t8 += v * b2;
        t9 += v * b3;
        t10 += v * b4;
        t11 += v * b5;
        t12 += v * b6;
        t13 += v * b7;
        t14 += v * b8;
        t15 += v * b9;
        t16 += v * b10;
        t17 += v * b11;
        t18 += v * b12;
        t19 += v * b13;
        t20 += v * b14;
        t21 += v * b15;
        v = a[7];
        t7 += v * b0;
        t8 += v * b1;
        t9 += v * b2;
        t10 += v * b3;
        t11 += v * b4;
        t12 += v * b5;
        t13 += v * b6;
        t14 += v * b7;
        t15 += v * b8;
        t16 += v * b9;
        t17 += v * b10;
        t18 += v * b11;
        t19 += v * b12;
        t20 += v * b13;
        t21 += v * b14;
        t22 += v * b15;
        v = a[8];
        t8 += v * b0;
        t9 += v * b1;
        t10 += v * b2;
        t11 += v * b3;
        t12 += v * b4;
        t13 += v * b5;
        t14 += v * b6;
        t15 += v * b7;
        t16 += v * b8;
        t17 += v * b9;
        t18 += v * b10;
        t19 += v * b11;
        t20 += v * b12;
        t21 += v * b13;
        t22 += v * b14;
        t23 += v * b15;
        v = a[9];
        t9 += v * b0;
        t10 += v * b1;
        t11 += v * b2;
        t12 += v * b3;
        t13 += v * b4;
        t14 += v * b5;
        t15 += v * b6;
        t16 += v * b7;
        t17 += v * b8;
        t18 += v * b9;
        t19 += v * b10;
        t20 += v * b11;
        t21 += v * b12;
        t22 += v * b13;
        t23 += v * b14;
        t24 += v * b15;
        v = a[10];
        t10 += v * b0;
        t11 += v * b1;
        t12 += v * b2;
        t13 += v * b3;
        t14 += v * b4;
        t15 += v * b5;
        t16 += v * b6;
        t17 += v * b7;
        t18 += v * b8;
        t19 += v * b9;
        t20 += v * b10;
        t21 += v * b11;
        t22 += v * b12;
        t23 += v * b13;
        t24 += v * b14;
        t25 += v * b15;
        v = a[11];
        t11 += v * b0;
        t12 += v * b1;
        t13 += v * b2;
        t14 += v * b3;
        t15 += v * b4;
        t16 += v * b5;
        t17 += v * b6;
        t18 += v * b7;
        t19 += v * b8;
        t20 += v * b9;
        t21 += v * b10;
        t22 += v * b11;
        t23 += v * b12;
        t24 += v * b13;
        t25 += v * b14;
        t26 += v * b15;
        v = a[12];
        t12 += v * b0;
        t13 += v * b1;
        t14 += v * b2;
        t15 += v * b3;
        t16 += v * b4;
        t17 += v * b5;
        t18 += v * b6;
        t19 += v * b7;
        t20 += v * b8;
        t21 += v * b9;
        t22 += v * b10;
        t23 += v * b11;
        t24 += v * b12;
        t25 += v * b13;
        t26 += v * b14;
        t27 += v * b15;
        v = a[13];
        t13 += v * b0;
        t14 += v * b1;
        t15 += v * b2;
        t16 += v * b3;
        t17 += v * b4;
        t18 += v * b5;
        t19 += v * b6;
        t20 += v * b7;
        t21 += v * b8;
        t22 += v * b9;
        t23 += v * b10;
        t24 += v * b11;
        t25 += v * b12;
        t26 += v * b13;
        t27 += v * b14;
        t28 += v * b15;
        v = a[14];
        t14 += v * b0;
        t15 += v * b1;
        t16 += v * b2;
        t17 += v * b3;
        t18 += v * b4;
        t19 += v * b5;
        t20 += v * b6;
        t21 += v * b7;
        t22 += v * b8;
        t23 += v * b9;
        t24 += v * b10;
        t25 += v * b11;
        t26 += v * b12;
        t27 += v * b13;
        t28 += v * b14;
        t29 += v * b15;
        v = a[15];
        t15 += v * b0;
        t16 += v * b1;
        t17 += v * b2;
        t18 += v * b3;
        t19 += v * b4;
        t20 += v * b5;
        t21 += v * b6;
        t22 += v * b7;
        t23 += v * b8;
        t24 += v * b9;
        t25 += v * b10;
        t26 += v * b11;
        t27 += v * b12;
        t28 += v * b13;
        t29 += v * b14;
        t30 += v * b15;
        t0 += 38 * t16;
        t1 += 38 * t17;
        t2 += 38 * t18;
        t3 += 38 * t19;
        t4 += 38 * t20;
        t5 += 38 * t21;
        t6 += 38 * t22;
        t7 += 38 * t23;
        t8 += 38 * t24;
        t9 += 38 * t25;
        t10 += 38 * t26;
        t11 += 38 * t27;
        t12 += 38 * t28;
        t13 += 38 * t29;
        t14 += 38 * t30;
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        c = 1;
        v = t0 + c + 65535;
        c = Math.floor(v / 65536);
        t0 = v - c * 65536;
        v = t1 + c + 65535;
        c = Math.floor(v / 65536);
        t1 = v - c * 65536;
        v = t2 + c + 65535;
        c = Math.floor(v / 65536);
        t2 = v - c * 65536;
        v = t3 + c + 65535;
        c = Math.floor(v / 65536);
        t3 = v - c * 65536;
        v = t4 + c + 65535;
        c = Math.floor(v / 65536);
        t4 = v - c * 65536;
        v = t5 + c + 65535;
        c = Math.floor(v / 65536);
        t5 = v - c * 65536;
        v = t6 + c + 65535;
        c = Math.floor(v / 65536);
        t6 = v - c * 65536;
        v = t7 + c + 65535;
        c = Math.floor(v / 65536);
        t7 = v - c * 65536;
        v = t8 + c + 65535;
        c = Math.floor(v / 65536);
        t8 = v - c * 65536;
        v = t9 + c + 65535;
        c = Math.floor(v / 65536);
        t9 = v - c * 65536;
        v = t10 + c + 65535;
        c = Math.floor(v / 65536);
        t10 = v - c * 65536;
        v = t11 + c + 65535;
        c = Math.floor(v / 65536);
        t11 = v - c * 65536;
        v = t12 + c + 65535;
        c = Math.floor(v / 65536);
        t12 = v - c * 65536;
        v = t13 + c + 65535;
        c = Math.floor(v / 65536);
        t13 = v - c * 65536;
        v = t14 + c + 65535;
        c = Math.floor(v / 65536);
        t14 = v - c * 65536;
        v = t15 + c + 65535;
        c = Math.floor(v / 65536);
        t15 = v - c * 65536;
        t0 += c - 1 + 37 * (c - 1);
        o[0] = t0;
        o[1] = t1;
        o[2] = t2;
        o[3] = t3;
        o[4] = t4;
        o[5] = t5;
        o[6] = t6;
        o[7] = t7;
        o[8] = t8;
        o[9] = t9;
        o[10] = t10;
        o[11] = t11;
        o[12] = t12;
        o[13] = t13;
        o[14] = t14;
        o[15] = t15;
      }
      function S(o, a) {
        M(o, a, a);
      }
      function inv25519(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
          c[a] = i[a];
        for (a = 253; a >= 0; a--) {
          S(c, c);
          if (a !== 2 && a !== 4)
            M(c, c, i);
        }
        for (a = 0; a < 16; a++)
          o[a] = c[a];
      }
      function pow2523(o, i) {
        var c = gf();
        var a;
        for (a = 0; a < 16; a++)
          c[a] = i[a];
        for (a = 250; a >= 0; a--) {
          S(c, c);
          if (a !== 1)
            M(c, c, i);
        }
        for (a = 0; a < 16; a++)
          o[a] = c[a];
      }
      function crypto_scalarmult(q, n, p) {
        var z = new Uint8Array(32);
        var x = new Float64Array(80), r, i;
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f2 = gf();
        for (i = 0; i < 31; i++)
          z[i] = n[i];
        z[31] = n[31] & 127 | 64;
        z[0] &= 248;
        unpack25519(x, p);
        for (i = 0; i < 16; i++) {
          b[i] = x[i];
          d[i] = a[i] = c[i] = 0;
        }
        a[0] = d[0] = 1;
        for (i = 254; i >= 0; --i) {
          r = z[i >>> 3] >>> (i & 7) & 1;
          sel25519(a, b, r);
          sel25519(c, d, r);
          A(e, a, c);
          Z(a, a, c);
          A(c, b, d);
          Z(b, b, d);
          S(d, e);
          S(f2, a);
          M(a, c, a);
          M(c, b, e);
          A(e, a, c);
          Z(a, a, c);
          S(b, a);
          Z(c, d, f2);
          M(a, c, _121665);
          A(a, a, d);
          M(c, c, a);
          M(a, d, f2);
          M(d, b, x);
          S(b, e);
          sel25519(a, b, r);
          sel25519(c, d, r);
        }
        for (i = 0; i < 16; i++) {
          x[i + 16] = a[i];
          x[i + 32] = c[i];
          x[i + 48] = b[i];
          x[i + 64] = d[i];
        }
        var x32 = x.subarray(32);
        var x16 = x.subarray(16);
        inv25519(x32, x32);
        M(x16, x16, x32);
        pack25519(q, x16);
        return 0;
      }
      function crypto_scalarmult_base(q, n) {
        return crypto_scalarmult(q, n, _9);
      }
      function crypto_box_keypair(y, x) {
        randombytes(x, 32);
        return crypto_scalarmult_base(y, x);
      }
      function crypto_box_beforenm(k, y, x) {
        var s = new Uint8Array(32);
        crypto_scalarmult(s, x, y);
        return crypto_core_hsalsa20(k, _0, s, sigma);
      }
      var crypto_box_afternm = crypto_secretbox;
      var crypto_box_open_afternm = crypto_secretbox_open;
      function crypto_box(c, m, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_afternm(c, m, d, n, k);
      }
      function crypto_box_open(m, c, d, n, y, x) {
        var k = new Uint8Array(32);
        crypto_box_beforenm(k, y, x);
        return crypto_box_open_afternm(m, c, d, n, k);
      }
      var K = [
        1116352408,
        3609767458,
        1899447441,
        602891725,
        3049323471,
        3964484399,
        3921009573,
        2173295548,
        961987163,
        4081628472,
        1508970993,
        3053834265,
        2453635748,
        2937671579,
        2870763221,
        3664609560,
        3624381080,
        2734883394,
        310598401,
        1164996542,
        607225278,
        1323610764,
        1426881987,
        3590304994,
        1925078388,
        4068182383,
        2162078206,
        991336113,
        2614888103,
        633803317,
        3248222580,
        3479774868,
        3835390401,
        2666613458,
        4022224774,
        944711139,
        264347078,
        2341262773,
        604807628,
        2007800933,
        770255983,
        1495990901,
        1249150122,
        1856431235,
        1555081692,
        3175218132,
        1996064986,
        2198950837,
        2554220882,
        3999719339,
        2821834349,
        766784016,
        2952996808,
        2566594879,
        3210313671,
        3203337956,
        3336571891,
        1034457026,
        3584528711,
        2466948901,
        113926993,
        3758326383,
        338241895,
        168717936,
        666307205,
        1188179964,
        773529912,
        1546045734,
        1294757372,
        1522805485,
        1396182291,
        2643833823,
        1695183700,
        2343527390,
        1986661051,
        1014477480,
        2177026350,
        1206759142,
        2456956037,
        344077627,
        2730485921,
        1290863460,
        2820302411,
        3158454273,
        3259730800,
        3505952657,
        3345764771,
        106217008,
        3516065817,
        3606008344,
        3600352804,
        1432725776,
        4094571909,
        1467031594,
        275423344,
        851169720,
        430227734,
        3100823752,
        506948616,
        1363258195,
        659060556,
        3750685593,
        883997877,
        3785050280,
        958139571,
        3318307427,
        1322822218,
        3812723403,
        1537002063,
        2003034995,
        1747873779,
        3602036899,
        1955562222,
        1575990012,
        2024104815,
        1125592928,
        2227730452,
        2716904306,
        2361852424,
        442776044,
        2428436474,
        593698344,
        2756734187,
        3733110249,
        3204031479,
        2999351573,
        3329325298,
        3815920427,
        3391569614,
        3928383900,
        3515267271,
        566280711,
        3940187606,
        3454069534,
        4118630271,
        4000239992,
        116418474,
        1914138554,
        174292421,
        2731055270,
        289380356,
        3203993006,
        460393269,
        320620315,
        685471733,
        587496836,
        852142971,
        1086792851,
        1017036298,
        365543100,
        1126000580,
        2618297676,
        1288033470,
        3409855158,
        1501505948,
        4234509866,
        1607167915,
        987167468,
        1816402316,
        1246189591
      ];
      function crypto_hashblocks_hl(hh, hl, m, n) {
        var wh = new Int32Array(16), wl = new Int32Array(16), bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7, bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7, th, tl, i, j2, h, l, a, b, c, d;
        var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
        var pos = 0;
        while (n >= 128) {
          for (i = 0; i < 16; i++) {
            j2 = 8 * i + pos;
            wh[i] = m[j2 + 0] << 24 | m[j2 + 1] << 16 | m[j2 + 2] << 8 | m[j2 + 3];
            wl[i] = m[j2 + 4] << 24 | m[j2 + 5] << 16 | m[j2 + 6] << 8 | m[j2 + 7];
          }
          for (i = 0; i < 80; i++) {
            bh0 = ah0;
            bh1 = ah1;
            bh2 = ah2;
            bh3 = ah3;
            bh4 = ah4;
            bh5 = ah5;
            bh6 = ah6;
            bh7 = ah7;
            bl0 = al0;
            bl1 = al1;
            bl2 = al2;
            bl3 = al3;
            bl4 = al4;
            bl5 = al5;
            bl6 = al6;
            bl7 = al7;
            h = ah7;
            l = al7;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
            l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah4 & ah5 ^ ~ah4 & ah6;
            l = al4 & al5 ^ ~al4 & al6;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 65535 | d << 16;
            tl = a & 65535 | b << 16;
            h = th;
            l = tl;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
            l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            h = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
            l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = c & 65535 | d << 16;
            bl7 = a & 65535 | b << 16;
            h = bh3;
            l = bl3;
            a = l & 65535;
            b = l >>> 16;
            c = h & 65535;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 65535;
            b += l >>> 16;
            c += h & 65535;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = c & 65535 | d << 16;
            bl3 = a & 65535 | b << 16;
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
              for (j2 = 0; j2 < 16; j2++) {
                h = wh[j2];
                l = wl[j2];
                a = l & 65535;
                b = l >>> 16;
                c = h & 65535;
                d = h >>> 16;
                h = wh[(j2 + 9) % 16];
                l = wl[(j2 + 9) % 16];
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j2 + 1) % 16];
                tl = wl[(j2 + 1) % 16];
                h = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
                l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                th = wh[(j2 + 14) % 16];
                tl = wl[(j2 + 14) % 16];
                h = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
                l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
                a += l & 65535;
                b += l >>> 16;
                c += h & 65535;
                d += h >>> 16;
                b += a >>> 16;
                c += b >>> 16;
                d += c >>> 16;
                wh[j2] = c & 65535 | d << 16;
                wl[j2] = a & 65535 | b << 16;
              }
            }
          }
          h = ah0;
          l = al0;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[0];
          l = hl[0];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[0] = ah0 = c & 65535 | d << 16;
          hl[0] = al0 = a & 65535 | b << 16;
          h = ah1;
          l = al1;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[1];
          l = hl[1];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[1] = ah1 = c & 65535 | d << 16;
          hl[1] = al1 = a & 65535 | b << 16;
          h = ah2;
          l = al2;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[2];
          l = hl[2];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[2] = ah2 = c & 65535 | d << 16;
          hl[2] = al2 = a & 65535 | b << 16;
          h = ah3;
          l = al3;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[3];
          l = hl[3];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[3] = ah3 = c & 65535 | d << 16;
          hl[3] = al3 = a & 65535 | b << 16;
          h = ah4;
          l = al4;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[4];
          l = hl[4];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[4] = ah4 = c & 65535 | d << 16;
          hl[4] = al4 = a & 65535 | b << 16;
          h = ah5;
          l = al5;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[5];
          l = hl[5];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[5] = ah5 = c & 65535 | d << 16;
          hl[5] = al5 = a & 65535 | b << 16;
          h = ah6;
          l = al6;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[6];
          l = hl[6];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[6] = ah6 = c & 65535 | d << 16;
          hl[6] = al6 = a & 65535 | b << 16;
          h = ah7;
          l = al7;
          a = l & 65535;
          b = l >>> 16;
          c = h & 65535;
          d = h >>> 16;
          h = hh[7];
          l = hl[7];
          a += l & 65535;
          b += l >>> 16;
          c += h & 65535;
          d += h >>> 16;
          b += a >>> 16;
          c += b >>> 16;
          d += c >>> 16;
          hh[7] = ah7 = c & 65535 | d << 16;
          hl[7] = al7 = a & 65535 | b << 16;
          pos += 128;
          n -= 128;
        }
        return n;
      }
      function crypto_hash(out, m, n) {
        var hh = new Int32Array(8), hl = new Int32Array(8), x = new Uint8Array(256), i, b = n;
        hh[0] = 1779033703;
        hh[1] = 3144134277;
        hh[2] = 1013904242;
        hh[3] = 2773480762;
        hh[4] = 1359893119;
        hh[5] = 2600822924;
        hh[6] = 528734635;
        hh[7] = 1541459225;
        hl[0] = 4089235720;
        hl[1] = 2227873595;
        hl[2] = 4271175723;
        hl[3] = 1595750129;
        hl[4] = 2917565137;
        hl[5] = 725511199;
        hl[6] = 4215389547;
        hl[7] = 327033209;
        crypto_hashblocks_hl(hh, hl, m, n);
        n %= 128;
        for (i = 0; i < n; i++)
          x[i] = m[b - n + i];
        x[n] = 128;
        n = 256 - 128 * (n < 112 ? 1 : 0);
        x[n - 9] = 0;
        ts64(x, n - 8, b / 536870912 | 0, b << 3);
        crypto_hashblocks_hl(hh, hl, x, n);
        for (i = 0; i < 8; i++)
          ts64(out, 8 * i, hh[i], hl[i]);
        return 0;
      }
      function add(p, q) {
        var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f2 = gf(), g = gf(), h = gf(), t = gf();
        Z(a, p[1], p[0]);
        Z(t, q[1], q[0]);
        M(a, a, t);
        A(b, p[0], p[1]);
        A(t, q[0], q[1]);
        M(b, b, t);
        M(c, p[3], q[3]);
        M(c, c, D2);
        M(d, p[2], q[2]);
        A(d, d, d);
        Z(e, b, a);
        Z(f2, d, c);
        A(g, d, c);
        A(h, b, a);
        M(p[0], e, f2);
        M(p[1], h, g);
        M(p[2], g, f2);
        M(p[3], e, h);
      }
      function cswap(p, q, b) {
        var i;
        for (i = 0; i < 4; i++) {
          sel25519(p[i], q[i], b);
        }
      }
      function pack(r, p) {
        var tx = gf(), ty = gf(), zi = gf();
        inv25519(zi, p[2]);
        M(tx, p[0], zi);
        M(ty, p[1], zi);
        pack25519(r, ty);
        r[31] ^= par25519(tx) << 7;
      }
      function scalarmult(p, q, s) {
        var b, i;
        set25519(p[0], gf0);
        set25519(p[1], gf1);
        set25519(p[2], gf1);
        set25519(p[3], gf0);
        for (i = 255; i >= 0; --i) {
          b = s[i / 8 | 0] >> (i & 7) & 1;
          cswap(p, q, b);
          add(q, p);
          add(p, p);
          cswap(p, q, b);
        }
      }
      function scalarbase(p, s) {
        var q = [gf(), gf(), gf(), gf()];
        set25519(q[0], X);
        set25519(q[1], Y);
        set25519(q[2], gf1);
        M(q[3], X, Y);
        scalarmult(p, q, s);
      }
      function crypto_sign_keypair(pk, sk, seeded) {
        var d = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()];
        var i;
        if (!seeded)
          randombytes(sk, 32);
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        scalarbase(p, d);
        pack(pk, p);
        for (i = 0; i < 32; i++)
          sk[i + 32] = pk[i];
        return 0;
      }
      var L = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
      function modL(r, x) {
        var carry, i, j2, k;
        for (i = 63; i >= 32; --i) {
          carry = 0;
          for (j2 = i - 32, k = i - 12; j2 < k; ++j2) {
            x[j2] += carry - 16 * x[i] * L[j2 - (i - 32)];
            carry = Math.floor((x[j2] + 128) / 256);
            x[j2] -= carry * 256;
          }
          x[j2] += carry;
          x[i] = 0;
        }
        carry = 0;
        for (j2 = 0; j2 < 32; j2++) {
          x[j2] += carry - (x[31] >> 4) * L[j2];
          carry = x[j2] >> 8;
          x[j2] &= 255;
        }
        for (j2 = 0; j2 < 32; j2++)
          x[j2] -= carry * L[j2];
        for (i = 0; i < 32; i++) {
          x[i + 1] += x[i] >> 8;
          r[i] = x[i] & 255;
        }
      }
      function reduce(r) {
        var x = new Float64Array(64), i;
        for (i = 0; i < 64; i++)
          x[i] = r[i];
        for (i = 0; i < 64; i++)
          r[i] = 0;
        modL(r, x);
      }
      function crypto_sign(sm, m, n, sk) {
        var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
        var i, j2, x = new Float64Array(64);
        var p = [gf(), gf(), gf(), gf()];
        crypto_hash(d, sk, 32);
        d[0] &= 248;
        d[31] &= 127;
        d[31] |= 64;
        var smlen = n + 64;
        for (i = 0; i < n; i++)
          sm[64 + i] = m[i];
        for (i = 0; i < 32; i++)
          sm[32 + i] = d[32 + i];
        crypto_hash(r, sm.subarray(32), n + 32);
        reduce(r);
        scalarbase(p, r);
        pack(sm, p);
        for (i = 32; i < 64; i++)
          sm[i] = sk[i];
        crypto_hash(h, sm, n + 64);
        reduce(h);
        for (i = 0; i < 64; i++)
          x[i] = 0;
        for (i = 0; i < 32; i++)
          x[i] = r[i];
        for (i = 0; i < 32; i++) {
          for (j2 = 0; j2 < 32; j2++) {
            x[i + j2] += h[i] * d[j2];
          }
        }
        modL(sm.subarray(32), x);
        return smlen;
      }
      function unpackneg(r, p) {
        var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
        set25519(r[2], gf1);
        unpack25519(r[1], p);
        S(num, r[1]);
        M(den, num, D);
        Z(num, num, r[2]);
        A(den, r[2], den);
        S(den2, den);
        S(den4, den2);
        M(den6, den4, den2);
        M(t, den6, num);
        M(t, t, den);
        pow2523(t, t);
        M(t, t, num);
        M(t, t, den);
        M(t, t, den);
        M(r[0], t, den);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          M(r[0], r[0], I);
        S(chk, r[0]);
        M(chk, chk, den);
        if (neq25519(chk, num))
          return -1;
        if (par25519(r[0]) === p[31] >> 7)
          Z(r[0], gf0, r[0]);
        M(r[3], r[0], r[1]);
        return 0;
      }
      function crypto_sign_open(m, sm, n, pk) {
        var i;
        var t = new Uint8Array(32), h = new Uint8Array(64);
        var p = [gf(), gf(), gf(), gf()], q = [gf(), gf(), gf(), gf()];
        if (n < 64)
          return -1;
        if (unpackneg(q, pk))
          return -1;
        for (i = 0; i < n; i++)
          m[i] = sm[i];
        for (i = 0; i < 32; i++)
          m[i + 32] = pk[i];
        crypto_hash(h, m, n);
        reduce(h);
        scalarmult(p, q, h);
        scalarbase(q, sm.subarray(32));
        add(p, q);
        pack(t, p);
        n -= 64;
        if (crypto_verify_32(sm, 0, t, 0)) {
          for (i = 0; i < n; i++)
            m[i] = 0;
          return -1;
        }
        for (i = 0; i < n; i++)
          m[i] = sm[i + 64];
        return n;
      }
      var crypto_secretbox_KEYBYTES = 32, crypto_secretbox_NONCEBYTES = 24, crypto_secretbox_ZEROBYTES = 32, crypto_secretbox_BOXZEROBYTES = 16, crypto_scalarmult_BYTES = 32, crypto_scalarmult_SCALARBYTES = 32, crypto_box_PUBLICKEYBYTES = 32, crypto_box_SECRETKEYBYTES = 32, crypto_box_BEFORENMBYTES = 32, crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES, crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES, crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES, crypto_sign_BYTES = 64, crypto_sign_PUBLICKEYBYTES = 32, crypto_sign_SECRETKEYBYTES = 64, crypto_sign_SEEDBYTES = 32, crypto_hash_BYTES = 64;
      nacl.lowlevel = {
        crypto_core_hsalsa20,
        crypto_stream_xor,
        crypto_stream,
        crypto_stream_salsa20_xor,
        crypto_stream_salsa20,
        crypto_onetimeauth,
        crypto_onetimeauth_verify,
        crypto_verify_16,
        crypto_verify_32,
        crypto_secretbox,
        crypto_secretbox_open,
        crypto_scalarmult,
        crypto_scalarmult_base,
        crypto_box_beforenm,
        crypto_box_afternm,
        crypto_box,
        crypto_box_open,
        crypto_box_keypair,
        crypto_hash,
        crypto_sign,
        crypto_sign_keypair,
        crypto_sign_open,
        crypto_secretbox_KEYBYTES,
        crypto_secretbox_NONCEBYTES,
        crypto_secretbox_ZEROBYTES,
        crypto_secretbox_BOXZEROBYTES,
        crypto_scalarmult_BYTES,
        crypto_scalarmult_SCALARBYTES,
        crypto_box_PUBLICKEYBYTES,
        crypto_box_SECRETKEYBYTES,
        crypto_box_BEFORENMBYTES,
        crypto_box_NONCEBYTES,
        crypto_box_ZEROBYTES,
        crypto_box_BOXZEROBYTES,
        crypto_sign_BYTES,
        crypto_sign_PUBLICKEYBYTES,
        crypto_sign_SECRETKEYBYTES,
        crypto_sign_SEEDBYTES,
        crypto_hash_BYTES,
        gf,
        D,
        L,
        pack25519,
        unpack25519,
        M,
        A,
        S,
        Z,
        pow2523,
        add,
        set25519,
        modL,
        scalarmult,
        scalarbase
      };
      function checkLengths(k, n) {
        if (k.length !== crypto_secretbox_KEYBYTES)
          throw new Error("bad key size");
        if (n.length !== crypto_secretbox_NONCEBYTES)
          throw new Error("bad nonce size");
      }
      function checkBoxLengths(pk, sk) {
        if (pk.length !== crypto_box_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        if (sk.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
      }
      function checkArrayTypes() {
        for (var i = 0; i < arguments.length; i++) {
          if (!(arguments[i] instanceof Uint8Array))
            throw new TypeError("unexpected type, use Uint8Array");
        }
      }
      function cleanup(arr) {
        for (var i = 0; i < arr.length; i++)
          arr[i] = 0;
      }
      nacl.randomBytes = function(n) {
        var b = new Uint8Array(n);
        randombytes(b, n);
        return b;
      };
      nacl.secretbox = function(msg, nonce, key) {
        checkArrayTypes(msg, nonce, key);
        checkLengths(key, nonce);
        var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
        var c = new Uint8Array(m.length);
        for (var i = 0; i < msg.length; i++)
          m[i + crypto_secretbox_ZEROBYTES] = msg[i];
        crypto_secretbox(c, m, m.length, nonce, key);
        return c.subarray(crypto_secretbox_BOXZEROBYTES);
      };
      nacl.secretbox.open = function(box, nonce, key) {
        checkArrayTypes(box, nonce, key);
        checkLengths(key, nonce);
        var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
        var m = new Uint8Array(c.length);
        for (var i = 0; i < box.length; i++)
          c[i + crypto_secretbox_BOXZEROBYTES] = box[i];
        if (c.length < 32)
          return null;
        if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0)
          return null;
        return m.subarray(crypto_secretbox_ZEROBYTES);
      };
      nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
      nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
      nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;
      nacl.scalarMult = function(n, p) {
        checkArrayTypes(n, p);
        if (n.length !== crypto_scalarmult_SCALARBYTES)
          throw new Error("bad n size");
        if (p.length !== crypto_scalarmult_BYTES)
          throw new Error("bad p size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult(q, n, p);
        return q;
      };
      nacl.scalarMult.base = function(n) {
        checkArrayTypes(n);
        if (n.length !== crypto_scalarmult_SCALARBYTES)
          throw new Error("bad n size");
        var q = new Uint8Array(crypto_scalarmult_BYTES);
        crypto_scalarmult_base(q, n);
        return q;
      };
      nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
      nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;
      nacl.box = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox(msg, nonce, k);
      };
      nacl.box.before = function(publicKey, secretKey) {
        checkArrayTypes(publicKey, secretKey);
        checkBoxLengths(publicKey, secretKey);
        var k = new Uint8Array(crypto_box_BEFORENMBYTES);
        crypto_box_beforenm(k, publicKey, secretKey);
        return k;
      };
      nacl.box.after = nacl.secretbox;
      nacl.box.open = function(msg, nonce, publicKey, secretKey) {
        var k = nacl.box.before(publicKey, secretKey);
        return nacl.secretbox.open(msg, nonce, k);
      };
      nacl.box.open.after = nacl.secretbox.open;
      nacl.box.keyPair = function() {
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
        crypto_box_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.box.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_box_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
        crypto_scalarmult_base(pk, secretKey);
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
      nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
      nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
      nacl.box.nonceLength = crypto_box_NONCEBYTES;
      nacl.box.overheadLength = nacl.secretbox.overheadLength;
      nacl.sign = function(msg, secretKey) {
        checkArrayTypes(msg, secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var signedMsg = new Uint8Array(crypto_sign_BYTES + msg.length);
        crypto_sign(signedMsg, msg, msg.length, secretKey);
        return signedMsg;
      };
      nacl.sign.open = function(signedMsg, publicKey) {
        checkArrayTypes(signedMsg, publicKey);
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var tmp = new Uint8Array(signedMsg.length);
        var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
        if (mlen < 0)
          return null;
        var m = new Uint8Array(mlen);
        for (var i = 0; i < m.length; i++)
          m[i] = tmp[i];
        return m;
      };
      nacl.sign.detached = function(msg, secretKey) {
        var signedMsg = nacl.sign(msg, secretKey);
        var sig = new Uint8Array(crypto_sign_BYTES);
        for (var i = 0; i < sig.length; i++)
          sig[i] = signedMsg[i];
        return sig;
      };
      nacl.sign.detached.verify = function(msg, sig, publicKey) {
        checkArrayTypes(msg, sig, publicKey);
        if (sig.length !== crypto_sign_BYTES)
          throw new Error("bad signature size");
        if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
          throw new Error("bad public key size");
        var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
        var m = new Uint8Array(crypto_sign_BYTES + msg.length);
        var i;
        for (i = 0; i < crypto_sign_BYTES; i++)
          sm[i] = sig[i];
        for (i = 0; i < msg.length; i++)
          sm[i + crypto_sign_BYTES] = msg[i];
        return crypto_sign_open(m, sm, sm.length, publicKey) >= 0;
      };
      nacl.sign.keyPair = function() {
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        crypto_sign_keypair(pk, sk);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.keyPair.fromSecretKey = function(secretKey) {
        checkArrayTypes(secretKey);
        if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
          throw new Error("bad secret key size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        for (var i = 0; i < pk.length; i++)
          pk[i] = secretKey[32 + i];
        return { publicKey: pk, secretKey: new Uint8Array(secretKey) };
      };
      nacl.sign.keyPair.fromSeed = function(seed2) {
        checkArrayTypes(seed2);
        if (seed2.length !== crypto_sign_SEEDBYTES)
          throw new Error("bad seed size");
        var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
        var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
        for (var i = 0; i < 32; i++)
          sk[i] = seed2[i];
        crypto_sign_keypair(pk, sk, true);
        return { publicKey: pk, secretKey: sk };
      };
      nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
      nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
      nacl.sign.seedLength = crypto_sign_SEEDBYTES;
      nacl.sign.signatureLength = crypto_sign_BYTES;
      nacl.hash = function(msg) {
        checkArrayTypes(msg);
        var h = new Uint8Array(crypto_hash_BYTES);
        crypto_hash(h, msg, msg.length);
        return h;
      };
      nacl.hash.hashLength = crypto_hash_BYTES;
      nacl.verify = function(x, y) {
        checkArrayTypes(x, y);
        if (x.length === 0 || y.length === 0)
          return false;
        if (x.length !== y.length)
          return false;
        return vn(x, 0, y, 0, x.length) === 0 ? true : false;
      };
      nacl.setPRNG = function(fn) {
        randombytes = fn;
      };
      (function() {
        var crypto = typeof self !== "undefined" ? self.crypto || self.msCrypto : null;
        if (crypto && crypto.getRandomValues) {
          var QUOTA = 65536;
          nacl.setPRNG(function(x, n) {
            var i, v = new Uint8Array(n);
            for (i = 0; i < n; i += QUOTA) {
              crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
            }
            for (i = 0; i < n; i++)
              x[i] = v[i];
            cleanup(v);
          });
        } else if (typeof require !== "undefined") {
          crypto = require("crypto");
          if (crypto && crypto.randomBytes) {
            nacl.setPRNG(function(x, n) {
              var i, v = crypto.randomBytes(n);
              for (i = 0; i < n; i++)
                x[i] = v[i];
              cleanup(v);
            });
          }
        }
      })();
    })(typeof module2 !== "undefined" && module2.exports ? module2.exports : self.nacl = self.nacl || {});
  }
});

// node_modules/_when@3.7.8@when/monitor/console.js
var require_console2 = __commonJS({
  "node_modules/_when@3.7.8@when/monitor/console.js"(exports2, module2) {
    (function(define2) {
      "use strict";
      define2(function(require2) {
        var monitor = require2("../monitor");
        var Promise2 = require2("../when").Promise;
        return monitor(Promise2);
      });
    })(typeof define === "function" && define.amd ? define : function(factory) {
      module2.exports = factory(require);
    });
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/log.js
var require_log = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/log.js"(exports2) {
    var debug = function() {
    };
    if ("AUTOBAHN_DEBUG" in global && AUTOBAHN_DEBUG && "console" in global) {
      debug = function() {
        console.log.apply(console, arguments);
      };
    }
    var warn = console.warn;
    exports2.debug = debug;
    exports2.warn = warn;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/util.js
var require_util = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/util.js"(exports2) {
    var log = require_log();
    var when = require_when();
    function _atob(s) {
      if (s) {
        return new Uint8Array(atob(s).split("").map(function(c) {
          return c.charCodeAt(0);
        }));
      } else {
        return null;
      }
    }
    exports2.atob = _atob;
    function _btoa(b) {
      if (b) {
        return btoa(String.fromCharCode.apply(null, b));
      } else {
        return null;
      }
    }
    exports2.btoa = _btoa;
    function _btoh(bytes) {
      if (bytes) {
        var res = "";
        for (var i = 0; i < bytes.length; ++i) {
          res += ("0" + (bytes[i] & 255).toString(16)).slice(-2);
        }
        return res;
      } else {
        return null;
      }
    }
    exports2.btoh = _btoh;
    function _htob(hex) {
      if (hex) {
        if (typeof hex !== "string") {
          throw new TypeError("Expected input to be a string");
        }
        if (hex.length % 2 !== 0) {
          throw new RangeError("Expected string to be an even number of characters");
        }
        var view = new Uint8Array(hex.length / 2);
        for (var i = 0; i < hex.length; i += 2) {
          view[i / 2] = parseInt(hex.substring(i, i + 2), 16);
        }
        return view;
      } else {
        return null;
      }
    }
    exports2.htob = _htob;
    var rand_normal = function(mean, sd) {
      var x1, x2, rad;
      do {
        x1 = 2 * Math.random() - 1;
        x2 = 2 * Math.random() - 1;
        rad = x1 * x1 + x2 * x2;
      } while (rad >= 1 || rad == 0);
      var c = Math.sqrt(-2 * Math.log(rad) / rad);
      return (mean || 0) + x1 * c * (sd || 1);
    };
    var assert = function(cond, text2) {
      if (cond) {
        return;
      }
      if (assert.useDebugger || "AUTOBAHN_DEBUG" in global && AUTOBAHN_DEBUG) {
        debugger;
      }
      throw new Error(text2 || "Assertion failed!");
    };
    var http_post = function(url, data, timeout) {
      log.debug("new http_post request", url, data, timeout);
      var d = when.defer();
      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.onreadystatechange = function() {
        if (req.readyState === 4) {
          var status = req.status === 1223 ? 204 : req.status;
          if (status === 200) {
            d.resolve(req.responseText);
          }
          if (status === 204) {
            d.resolve();
          } else {
            var statusText = null;
            try {
              statusText = req.statusText;
            } catch (e) {
            }
            d.reject({ code: status, text: statusText });
          }
        }
      };
      req.open("POST", url, true);
      req.setRequestHeader("Content-type", "application/json; charset=utf-8");
      if (timeout > 0) {
        req.timeout = timeout;
        req.ontimeout = function() {
          d.reject({ code: 501, text: "request timeout" });
        };
      }
      if (data) {
        req.send(data);
      } else {
        req.send();
      }
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    var http_get_json = function(url, timeout) {
      var d = when.defer();
      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.onreadystatechange = function() {
        if (req.readyState === 4) {
          var status = req.status === 1223 ? 204 : req.status;
          if (status === 200) {
            var data = JSON.parse(req.responseText);
            d.resolve(data);
          }
          if (status === 204) {
            d.resolve();
          } else {
            var statusText = null;
            try {
              statusText = req.statusText;
            } catch (e) {
            }
            d.reject({ code: status, text: statusText });
          }
        }
      };
      req.open("GET", url, true);
      req.setRequestHeader("Content-type", "application/json; charset=utf-8");
      if (timeout > 0) {
        req.timeout = timeout;
        req.ontimeout = function() {
          d.reject({ code: 501, text: "request timeout" });
        };
      }
      req.send();
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    var defaults = function() {
      if (arguments.length === 0)
        return {};
      var base = arguments[0];
      var recursive = false;
      var len = arguments.length;
      if (typeof arguments[len - 1] === "boolean") {
        recursive = arguments[len - 1];
        len -= 1;
      }
      var do_merge = function(key) {
        var val = obj[key];
        if (!(key in base)) {
          base[key] = val;
        } else if (recursive && typeof val === "object" && typeof base[key] === "object") {
          defaults(base[key], val);
        }
      };
      for (var i = 1; i < len; i++) {
        var obj = arguments[i];
        if (!obj)
          continue;
        if (typeof obj !== "object") {
          throw new Error("Expected argument at index " + i + " to be an object");
        }
        Object.keys(obj).forEach(do_merge);
      }
      return base;
    };
    var handle_error = function(handler, error, error_message) {
      if (typeof handler === "function") {
        handler(error, error_message);
      } else {
        console.error(error_message || "Unhandled exception raised: ", error);
      }
    };
    var new_global_id = function() {
      return Math.floor(Math.random() * 9007199254740992) + 1;
    };
    var deferred_factory = function(options) {
      var defer = null;
      if (options && options.use_es6_promises) {
        if ("Promise" in global) {
          defer = function() {
            var deferred = {};
            deferred.promise = new Promise(function(resolve, reject) {
              deferred.resolve = resolve;
              deferred.reject = reject;
            });
            return deferred;
          };
        } else {
          log.debug("Warning: ES6 promises requested, but not found! Falling back to whenjs.");
          defer = when.defer;
        }
      } else if (options && options.use_deferred) {
        defer = options.use_deferred;
      } else {
        defer = when.defer;
      }
      return defer;
    };
    var promise = function(d) {
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    exports2.handle_error = handle_error;
    exports2.rand_normal = rand_normal;
    exports2.assert = assert;
    exports2.http_post = http_post;
    exports2.http_get_json = http_get_json;
    exports2.defaults = defaults;
    exports2.new_global_id = new_global_id;
    exports2.deferred_factory = deferred_factory;
    exports2.promise = promise;
  }
});

// node_modules/_when@3.7.8@when/function.js
var require_function2 = __commonJS({
  "node_modules/_when@3.7.8@when/function.js"(exports2, module2) {
    (function(define2) {
      define2(function(require2) {
        var when = require2("./when");
        var attempt = when["try"];
        var _liftAll = require2("./lib/liftAll");
        var _apply = require2("./lib/apply")(when.Promise);
        var slice = Array.prototype.slice;
        return {
          lift,
          liftAll,
          call: attempt,
          apply,
          compose
        };
        function apply(f2, args) {
          return _apply(f2, this, args == null ? [] : slice.call(args));
        }
        function lift(f2) {
          var args = arguments.length > 1 ? slice.call(arguments, 1) : [];
          return function() {
            return _apply(f2, this, args.concat(slice.call(arguments)));
          };
        }
        function liftAll(src, combine, dst) {
          return _liftAll(lift, combine, dst, src);
        }
        function compose(f2) {
          var funcs = slice.call(arguments, 1);
          return function() {
            var thisArg = this;
            var args = slice.call(arguments);
            var firstPromise = attempt.apply(thisArg, [f2].concat(args));
            return when.reduce(funcs, function(arg, func) {
              return func.call(thisArg, arg);
            }, firstPromise);
          };
        }
      });
    })(typeof define === "function" && define.amd ? define : function(factory) {
      module2.exports = factory(require);
    });
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/session.js
var require_session = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/session.js"(exports2) {
    var when = require_when();
    var when_fn = require_function2();
    var log = require_log();
    var util = require_util();
    Date.now = Date.now || function() {
      return +new Date();
    };
    var WAMP_FEATURES = {
      caller: {
        features: {
          caller_identification: true,
          call_canceling: true,
          progressive_call_results: true
        }
      },
      callee: {
        features: {
          caller_identification: true,
          pattern_based_registration: true,
          shared_registration: true,
          progressive_call_results: true,
          registration_revocation: true
        }
      },
      publisher: {
        features: {
          publisher_identification: true,
          subscriber_blackwhite_listing: true,
          publisher_exclusion: true
        }
      },
      subscriber: {
        features: {
          publisher_identification: true,
          pattern_based_subscription: true,
          subscription_revocation: true
        }
      }
    };
    var Invocation = function(procedure, progress, caller, caller_authid, caller_authrole) {
      var self2 = this;
      self2.procedure = procedure;
      self2.progress = progress;
      self2.caller = caller;
      self2.caller_authid = caller_authid;
      self2.caller_authrole = caller_authrole;
    };
    var Event = function(publication, topic, publisher, publisher_authid, publisher_authrole, retained, forward_for) {
      var self2 = this;
      self2.publication = publication;
      self2.topic = topic;
      self2.publisher = publisher;
      self2.publisher_authid = publisher_authid;
      self2.publisher_authrole = publisher_authrole;
      self2.retained = retained;
      self2.forward_for = forward_for;
    };
    var Result2 = function(args, kwargs) {
      var self2 = this;
      self2.args = args || [];
      self2.kwargs = kwargs || {};
    };
    var Error3 = function(error, args, kwargs) {
      var self2 = this;
      self2.error = error;
      self2.args = args || [];
      self2.kwargs = kwargs || {};
    };
    var Subscription = function(topic, handler, options, session, id) {
      var self2 = this;
      self2.topic = topic;
      self2.handler = handler;
      self2.options = options || {};
      self2.session = session;
      self2.id = id;
      self2.active = true;
      self2._on_unsubscribe = session._defer();
      if (self2._on_unsubscribe.promise.then) {
        self2.on_unsubscribe = self2._on_unsubscribe.promise;
      } else {
        self2.on_unsubscribe = self2._on_unsubscribe;
      }
    };
    Subscription.prototype.unsubscribe = function() {
      var self2 = this;
      return self2.session.unsubscribe(self2);
    };
    var Registration = function(procedure, endpoint, options, session, id) {
      var self2 = this;
      self2.procedure = procedure;
      self2.endpoint = endpoint;
      self2.options = options || {};
      self2.session = session;
      self2.id = id;
      self2.active = true;
      self2._on_unregister = session._defer();
      if (self2._on_unregister.promise.then) {
        self2.on_unregister = self2._on_unregister.promise;
      } else {
        self2.on_unregister = self2._on_unregister;
      }
    };
    Registration.prototype.unregister = function() {
      var self2 = this;
      return self2.session.unregister(self2);
    };
    var Publication = function(id) {
      var self2 = this;
      self2.id = id;
    };
    var MSG_TYPE = {
      HELLO: 1,
      WELCOME: 2,
      ABORT: 3,
      CHALLENGE: 4,
      AUTHENTICATE: 5,
      GOODBYE: 6,
      HEARTBEAT: 7,
      ERROR: 8,
      PUBLISH: 16,
      PUBLISHED: 17,
      SUBSCRIBE: 32,
      SUBSCRIBED: 33,
      UNSUBSCRIBE: 34,
      UNSUBSCRIBED: 35,
      EVENT: 36,
      CALL: 48,
      CANCEL: 49,
      RESULT: 50,
      REGISTER: 64,
      REGISTERED: 65,
      UNREGISTER: 66,
      UNREGISTERED: 67,
      INVOCATION: 68,
      INTERRUPT: 69,
      YIELD: 70
    };
    var Session2 = function(socket, defer, onchallenge, on_user_error, on_internal_error) {
      var self2 = this;
      self2._socket = socket;
      self2._defer = defer;
      self2._onchallenge = onchallenge;
      self2._on_user_error = on_user_error;
      self2._on_internal_error = on_internal_error;
      self2._id = null;
      self2._realm = null;
      self2._features = null;
      self2._goodbye_sent = false;
      self2._transport_is_closing = false;
      self2._publish_reqs = {};
      self2._subscribe_reqs = {};
      self2._unsubscribe_reqs = {};
      self2._call_reqs = {};
      self2._register_reqs = {};
      self2._unregister_reqs = {};
      self2._subscriptions = {};
      self2._registrations = {};
      self2._invocations = {};
      self2._prefixes = {};
      self2._caller_disclose_me = false;
      self2._publisher_disclose_me = false;
      self2._send_wamp = function(msg) {
        log.debug(msg);
        self2._socket.send(msg);
      };
      self2._protocol_violation = function(reason) {
        self2._socket.close(3002, "protocol violation: " + reason);
        util.handle_error(self2._on_internal_error, Error3("failing transport due to protocol violation: " + reason));
      };
      self2._MESSAGE_MAP = {};
      self2._MESSAGE_MAP[MSG_TYPE.ERROR] = {};
      var next_req_id = 0;
      self2._new_request_id = function() {
        if (next_req_id < 9007199254740992) {
          next_req_id += 1;
        } else {
          next_req_id = 1;
        }
        return next_req_id;
      };
      self2._process_SUBSCRIBED = function(msg) {
        var request = msg[1];
        var subscription = msg[2];
        if (request in self2._subscribe_reqs) {
          var r = self2._subscribe_reqs[request];
          var d = r[0];
          var topic = r[1];
          var handler = r[2];
          var options = r[3];
          if (!(subscription in self2._subscriptions)) {
            self2._subscriptions[subscription] = [];
          }
          var sub = new Subscription(topic, handler, options, self2, subscription);
          self2._subscriptions[subscription].push(sub);
          d.resolve(sub);
          delete self2._subscribe_reqs[request];
        } else {
          self2._protocol_violation("SUBSCRIBED received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.SUBSCRIBED] = self2._process_SUBSCRIBED;
      self2._process_SUBSCRIBE_ERROR = function(msg) {
        var request = msg[2];
        if (request in self2._subscribe_reqs) {
          var details = msg[3];
          var error = new Error3(msg[4], msg[5], msg[6]);
          var r = self2._subscribe_reqs[request];
          var d = r[0];
          d.reject(error);
          delete self2._subscribe_reqs[request];
        } else {
          self2._protocol_violation("SUBSCRIBE-ERROR received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.SUBSCRIBE] = self2._process_SUBSCRIBE_ERROR;
      self2._process_UNSUBSCRIBED = function(msg) {
        var request = msg[1];
        if (request in self2._unsubscribe_reqs) {
          var r = self2._unsubscribe_reqs[request];
          var d = r[0];
          var subscription_id = r[1];
          if (subscription_id in self2._subscriptions) {
            var subs = self2._subscriptions[subscription_id];
            for (var i = 0; i < subs.length; ++i) {
              subs[i].active = false;
              subs[i]._on_unsubscribe.resolve();
            }
            delete self2._subscriptions[subscription_id];
          }
          d.resolve(true);
          delete self2._unsubscribe_reqs[request];
        } else {
          if (request === 0) {
            var details = msg[2];
            var subscription_id = details.subscription;
            var reason = details.reason;
            if (subscription_id in self2._subscriptions) {
              var subs = self2._subscriptions[subscription_id];
              for (var i = 0; i < subs.length; ++i) {
                subs[i].active = false;
                subs[i]._on_unsubscribe.resolve(reason);
              }
              delete self2._subscriptions[subscription_id];
            } else {
              self2._protocol_violation("non-voluntary UNSUBSCRIBED received for non-existing subscription ID " + subscription_id);
            }
          } else {
            self2._protocol_violation("UNSUBSCRIBED received for non-pending request ID " + request);
          }
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.UNSUBSCRIBED] = self2._process_UNSUBSCRIBED;
      self2._process_UNSUBSCRIBE_ERROR = function(msg) {
        var request = msg[2];
        if (request in self2._unsubscribe_reqs) {
          var details = msg[3];
          var error = new Error3(msg[4], msg[5], msg[6]);
          var r = self2._unsubscribe_reqs[request];
          var d = r[0];
          var subscription = r[1];
          d.reject(error);
          delete self2._unsubscribe_reqs[request];
        } else {
          self2._protocol_violation("UNSUBSCRIBE-ERROR received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.UNSUBSCRIBE] = self2._process_UNSUBSCRIBE_ERROR;
      self2._process_PUBLISHED = function(msg) {
        var request = msg[1];
        var publication = msg[2];
        if (request in self2._publish_reqs) {
          var r = self2._publish_reqs[request];
          var d = r[0];
          var options = r[1];
          var pub = new Publication(publication);
          d.resolve(pub);
          delete self2._publish_reqs[request];
        } else {
          self2._protocol_violation("PUBLISHED received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.PUBLISHED] = self2._process_PUBLISHED;
      self2._process_PUBLISH_ERROR = function(msg) {
        var request = msg[2];
        if (request in self2._publish_reqs) {
          var details = msg[3];
          var error = new Error3(msg[4], msg[5], msg[6]);
          var r = self2._publish_reqs[request];
          var d = r[0];
          var options = r[1];
          d.reject(error);
          delete self2._publish_reqs[request];
        } else {
          self2._protocol_violation("PUBLISH-ERROR received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.PUBLISH] = self2._process_PUBLISH_ERROR;
      self2._process_EVENT = function(msg) {
        var subscription = msg[1];
        if (subscription in self2._subscriptions) {
          var publication = msg[2];
          var details = msg[3];
          var args = msg[4] || [];
          var kwargs = msg[5] || {};
          var subs = self2._subscriptions[subscription];
          var ed = new Event(
            publication,
            details.topic || subs[0] && subs[0].topic,
            details.publisher,
            details.publisher_authid,
            details.publisher_authrole,
            details.retained || false,
            details.forward_for
          );
          for (var i = 0; i < subs.length; ++i) {
            var sub = subs[i];
            try {
              sub.handler(args, kwargs, ed, sub);
            } catch (e) {
              util.handle_error(self2._on_user_error, e, "Exception raised in event handler:");
            }
          }
        } else {
          self2._protocol_violation("EVENT received for non-subscribed subscription ID " + subscription);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.EVENT] = self2._process_EVENT;
      self2._process_REGISTERED = function(msg) {
        var request = msg[1];
        var registration = msg[2];
        if (request in self2._register_reqs) {
          var r = self2._register_reqs[request];
          var d = r[0];
          var procedure = r[1];
          var endpoint = r[2];
          var options = r[3];
          var reg = new Registration(procedure, endpoint, options, self2, registration);
          self2._registrations[registration] = reg;
          d.resolve(reg);
          delete self2._register_reqs[request];
        } else {
          self2._protocol_violation("REGISTERED received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.REGISTERED] = self2._process_REGISTERED;
      self2._process_REGISTER_ERROR = function(msg) {
        var request = msg[2];
        if (request in self2._register_reqs) {
          var details = msg[3];
          var error = new Error3(msg[4], msg[5], msg[6]);
          var r = self2._register_reqs[request];
          var d = r[0];
          d.reject(error);
          delete self2._register_reqs[request];
        } else {
          self2._protocol_violation("REGISTER-ERROR received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.REGISTER] = self2._process_REGISTER_ERROR;
      self2._process_UNREGISTERED = function(msg) {
        var request = msg[1];
        if (request in self2._unregister_reqs) {
          var r = self2._unregister_reqs[request];
          var d = r[0];
          var registration = r[1];
          if (registration.id in self2._registrations) {
            delete self2._registrations[registration.id];
          }
          registration.active = false;
          d.resolve();
          delete self2._unregister_reqs[request];
        } else {
          if (request === 0) {
            var details = msg[2];
            var registration_id = details.registration;
            var reason = details.reason;
            if (registration_id in self2._registrations) {
              var registration = self2._registrations[registration_id];
              registration.active = false;
              registration._on_unregister.resolve(reason);
              delete self2._registrations[registration_id];
            } else {
              self2._protocol_violation("non-voluntary UNREGISTERED received for non-existing registration ID " + registration_id);
            }
          } else {
            self2._protocol_violation("UNREGISTERED received for non-pending request ID " + request);
          }
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.UNREGISTERED] = self2._process_UNREGISTERED;
      self2._process_UNREGISTER_ERROR = function(msg) {
        var request = msg[2];
        if (request in self2._unregister_reqs) {
          var details = msg[3];
          var error = new Error3(msg[4], msg[5], msg[6]);
          var r = self2._unregister_reqs[request];
          var d = r[0];
          var registration = r[1];
          d.reject(error);
          delete self2._unregister_reqs[request];
        } else {
          self2._protocol_violation("UNREGISTER-ERROR received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.UNREGISTER] = self2._process_UNREGISTER_ERROR;
      self2._process_RESULT = function(msg) {
        var request = msg[1];
        if (request in self2._call_reqs) {
          var details = msg[2];
          var args = msg[3] || [];
          var kwargs = msg[4] || {};
          var result = null;
          if (args.length > 1 || Object.keys(kwargs).length > 0) {
            result = new Result2(args, kwargs);
          } else if (args.length > 0) {
            result = args[0];
          }
          var r = self2._call_reqs[request];
          var d = r[0];
          var options = r[1];
          if (details.progress) {
            if (options && options.receive_progress) {
              d.notify(result);
            }
          } else {
            d.resolve(result);
            delete self2._call_reqs[request];
          }
        } else {
          self2._protocol_violation("CALL-RESULT received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.RESULT] = self2._process_RESULT;
      self2._process_CALL_ERROR = function(msg) {
        var request = msg[2];
        if (request in self2._call_reqs) {
          var details = msg[3];
          var error = new Error3(msg[4], msg[5], msg[6]);
          var r = self2._call_reqs[request];
          var d = r[0];
          var options = r[1];
          d.reject(error);
          delete self2._call_reqs[request];
        } else {
          self2._protocol_violation("CALL-ERROR received for non-pending request ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.ERROR][MSG_TYPE.CALL] = self2._process_CALL_ERROR;
      self2._process_INVOCATION = function(msg) {
        var request = msg[1];
        var registration = msg[2];
        var details = msg[3];
        if (registration in self2._registrations) {
          var reg = self2._registrations[registration];
          var args = msg[4] || [];
          var kwargs = msg[5] || {};
          var progress = null;
          if (details.receive_progress) {
            progress = function(args2, kwargs2) {
              var progress_msg = [MSG_TYPE.YIELD, request, { progress: true }];
              args2 = args2 || [];
              kwargs2 = kwargs2 || {};
              var kwargs_len = Object.keys(kwargs2).length;
              if (args2.length || kwargs_len) {
                progress_msg.push(args2);
                if (kwargs_len) {
                  progress_msg.push(kwargs2);
                }
              }
              self2._send_wamp(progress_msg);
            };
          }
          var cd = new Invocation(
            details.procedure || reg.procedure,
            progress,
            details.caller,
            details.caller_authid,
            details.caller_authrole
          );
          when_fn.call(reg.endpoint, args, kwargs, cd).then(
            function(res) {
              var reply = [MSG_TYPE.YIELD, request, {}];
              if (res instanceof Result2) {
                var kwargs_len = Object.keys(res.kwargs).length;
                if (res.args.length || kwargs_len) {
                  reply.push(res.args);
                  if (kwargs_len) {
                    reply.push(res.kwargs);
                  }
                }
              } else {
                reply.push([res]);
              }
              self2._send_wamp(reply);
            },
            function(err) {
              var reply = [MSG_TYPE.ERROR, MSG_TYPE.INVOCATION, request, {}];
              if (err instanceof Error3) {
                reply.push(err.error);
                var kwargs_len = Object.keys(err.kwargs).length;
                if (err.args.length || kwargs_len) {
                  reply.push(err.args);
                  if (kwargs_len) {
                    reply.push(err.kwargs);
                  }
                }
              } else {
                reply.push("wamp.error.runtime_error");
                reply.push([err]);
              }
              self2._send_wamp(reply);
              util.handle_error(self2._on_user_error, err, "Exception raised in invocation handler:");
            }
          );
        } else {
          self2._protocol_violation("INVOCATION received for non-registered registration ID " + request);
        }
      };
      self2._MESSAGE_MAP[MSG_TYPE.INVOCATION] = self2._process_INVOCATION;
      self2._socket.onmessage = function(msg) {
        var msg_type = msg[0];
        if (!self2._id) {
          if (msg_type === MSG_TYPE.WELCOME) {
            self2._id = msg[1];
            var rf = msg[2];
            self2._features = {};
            if (rf.roles.broker) {
              self2._features.subscriber = {};
              self2._features.publisher = {};
              if (rf.roles.broker.features) {
                for (var att in WAMP_FEATURES.publisher.features) {
                  self2._features.publisher[att] = WAMP_FEATURES.publisher.features[att] && rf.roles.broker.features[att];
                }
                for (var att in WAMP_FEATURES.subscriber.features) {
                  self2._features.subscriber[att] = WAMP_FEATURES.subscriber.features[att] && rf.roles.broker.features[att];
                }
              }
            }
            if (rf.roles.dealer) {
              self2._features.caller = {};
              self2._features.callee = {};
              if (rf.roles.dealer.features) {
                for (var att in WAMP_FEATURES.caller.features) {
                  self2._features.caller[att] = WAMP_FEATURES.caller.features[att] && rf.roles.dealer.features[att];
                }
                for (var att in WAMP_FEATURES.callee.features) {
                  self2._features.callee[att] = WAMP_FEATURES.callee.features[att] && rf.roles.dealer.features[att];
                }
              }
            }
            if (self2.onjoin) {
              self2.onjoin(msg[2]);
            }
          } else if (msg_type === MSG_TYPE.ABORT) {
            var details = msg[1];
            var reason = msg[2];
            if (self2.onleave) {
              self2.onleave(reason, details);
            }
          } else if (msg_type === MSG_TYPE.CHALLENGE) {
            if (self2._onchallenge) {
              var method = msg[1];
              var extra = msg[2];
              when_fn.call(self2._onchallenge, self2, method, extra).then(
                function(signature) {
                  if (typeof signature === "string") {
                    var msg2 = [MSG_TYPE.AUTHENTICATE, signature, {}];
                  } else if (typeof signature === "object") {
                    var signatureString = signature[0];
                    var authExtra = signature[1];
                    var msg2 = [MSG_TYPE.AUTHENTICATE, signatureString, authExtra];
                  }
                  self2._send_wamp(msg2);
                },
                function(err) {
                  util.handle_error(self2._on_user_error, err, "onchallenge() raised: ");
                  var msg2 = [MSG_TYPE.ABORT, { message: "sorry, I cannot authenticate (onchallenge handler raised an exception)" }, "wamp.error.cannot_authenticate"];
                  self2._send_wamp(msg2);
                  self2._socket.close(3e3);
                }
              );
            } else {
              util.handle_error(self2._on_internal_error, Error3("received WAMP challenge, but no onchallenge() handler set"));
              var msg = [MSG_TYPE.ABORT, { message: "sorry, I cannot authenticate (no onchallenge handler set)" }, "wamp.error.cannot_authenticate"];
              self2._send_wamp(msg);
              self2._socket.close(3e3);
            }
          } else {
            self2._protocol_violation("unexpected message type " + msg_type);
          }
        } else {
          if (msg_type === MSG_TYPE.GOODBYE) {
            if (!self2._goodbye_sent) {
              var reply = [MSG_TYPE.GOODBYE, {}, "wamp.error.goodbye_and_out"];
              self2._send_wamp(reply);
            }
            self2._id = null;
            self2._realm = null;
            self2._features = null;
            var details = msg[1];
            var reason = msg[2];
            if (self2.onleave) {
              self2.onleave(reason, details);
            }
          } else {
            if (msg_type === MSG_TYPE.ERROR) {
              var request_type = msg[1];
              if (request_type in self2._MESSAGE_MAP[MSG_TYPE.ERROR]) {
                self2._MESSAGE_MAP[msg_type][request_type](msg);
              } else {
                self2._protocol_violation("unexpected ERROR message with request_type " + request_type);
              }
            } else {
              if (msg_type in self2._MESSAGE_MAP) {
                self2._MESSAGE_MAP[msg_type](msg);
              } else {
                self2._protocol_violation("unexpected message type " + msg_type);
              }
            }
          }
        }
      };
      if ("performance" in global && "now" in performance) {
        self2._created = performance.now();
      } else {
        self2._created = Date.now();
      }
    };
    Object.defineProperty(Session2.prototype, "defer", {
      get: function() {
        return this._defer;
      }
    });
    Object.defineProperty(Session2.prototype, "id", {
      get: function() {
        return this._id;
      }
    });
    Object.defineProperty(Session2.prototype, "realm", {
      get: function() {
        return this._realm;
      }
    });
    Object.defineProperty(Session2.prototype, "isOpen", {
      get: function() {
        return this.id !== null;
      }
    });
    Object.defineProperty(Session2.prototype, "features", {
      get: function() {
        return this._features;
      }
    });
    Object.defineProperty(Session2.prototype, "caller_disclose_me", {
      get: function() {
        return this._caller_disclose_me;
      },
      set: function(newValue) {
        this._caller_disclose_me = newValue;
      }
    });
    Object.defineProperty(Session2.prototype, "publisher_disclose_me", {
      get: function() {
        return this._publisher_disclose_me;
      },
      set: function(newValue) {
        this._publisher_disclose_me = newValue;
      }
    });
    Object.defineProperty(Session2.prototype, "subscriptions", {
      get: function() {
        var keys = Object.keys(this._subscriptions);
        var vals = [];
        for (var i = 0; i < keys.length; ++i) {
          vals.push(this._subscriptions[keys[i]]);
        }
        return vals;
      }
    });
    Object.defineProperty(Session2.prototype, "registrations", {
      get: function() {
        var keys = Object.keys(this._registrations);
        var vals = [];
        for (var i = 0; i < keys.length; ++i) {
          vals.push(this._registrations[keys[i]]);
        }
        return vals;
      }
    });
    Session2.prototype.log = function() {
      var self2 = this;
      if ("console" in global) {
        var header = null;
        if (self2._id && self2._created) {
          var now = null;
          if ("performance" in global && "now" in performance) {
            now = performance.now() - self2._created;
          } else {
            now = Date.now() - self2._created;
          }
          header = "WAMP session " + self2._id + " on '" + self2._realm + "' at " + Math.round(now * 1e3) / 1e3 + " ms";
        } else {
          header = "WAMP session";
        }
        if ("group" in console) {
          console.group(header);
          for (var i = 0; i < arguments.length; i += 1) {
            console.log(arguments[i]);
          }
          console.groupEnd();
        } else {
          var items = [header + ": "];
          for (var i = 0; i < arguments.length; i += 1) {
            items.push(arguments[i]);
          }
          console.log.apply(console, items);
        }
      }
    };
    Session2.prototype.join = function(realm, authmethods, authid, authextra2) {
      util.assert(!realm || typeof realm === "string", "Session.join: <realm> must be a string");
      util.assert(!authmethods || Array.isArray(authmethods), "Session.join: <authmethods> must be an array []");
      util.assert(!authid || typeof authid === "string", "Session.join: <authid> must be a string");
      var self2 = this;
      if (self2.isOpen) {
        throw "session already open";
      }
      self2._goodbye_sent = false;
      self2._realm = realm;
      var details = {};
      details.roles = WAMP_FEATURES;
      if (authmethods) {
        details.authmethods = authmethods;
      }
      if (authid) {
        details.authid = authid;
      }
      if (authextra2) {
        details.authextra = authextra2;
      }
      var msg = [MSG_TYPE.HELLO, realm, details];
      self2._send_wamp(msg);
    };
    Session2.prototype.leave = function(reason, message) {
      util.assert(!reason || typeof reason === "string", "Session.leave: <reason> must be a string");
      util.assert(!message || typeof message === "string", "Session.leave: <message> must be a string");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      if (!reason) {
        reason = "wamp.close.normal";
      }
      var details = {};
      if (message) {
        details.message = message;
      }
      var msg = [MSG_TYPE.GOODBYE, details, reason];
      self2._send_wamp(msg);
      self2._goodbye_sent = true;
    };
    Session2.prototype.call = function(procedure, args, kwargs, options) {
      util.assert(typeof procedure === "string", "Session.call: <procedure> must be a string");
      util.assert(!args || Array.isArray(args), "Session.call: <args> must be an array []");
      util.assert(!kwargs || kwargs instanceof Object, "Session.call: <kwargs> must be an object {}");
      util.assert(!options || options instanceof Object, "Session.call: <options> must be an object {}");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      options = options || {};
      if (options.disclose_me === void 0 && self2._caller_disclose_me) {
        options.disclose_me = true;
      }
      var d = self2._defer();
      var request = self2._new_request_id();
      self2._call_reqs[request] = [d, options];
      var msg = [MSG_TYPE.CALL, request, options, self2.resolve(procedure)];
      if (args) {
        msg.push(args);
        if (kwargs) {
          msg.push(kwargs);
        }
      } else if (kwargs) {
        msg.push([]);
        msg.push(kwargs);
      }
      self2._send_wamp(msg);
      var userPromise;
      if (d.promise.then) {
        userPromise = d.promise;
      } else {
        userPromise = d;
      }
      userPromise.cancel = function(cancelOptions) {
        var cancelMsg = [MSG_TYPE.CANCEL, request, cancelOptions || {}];
        self2._send_wamp(cancelMsg);
        if (request in self2._call_reqs && (!cancelOptions || !cancelOptions.mode || cancelOptions.mode !== "kill")) {
          var cancelledDefer = self2._call_reqs[request][0];
          cancelledDefer.reject(new Error3("Cancelled"));
          delete self2._call_reqs[request];
        }
      };
      return userPromise;
    };
    Session2.prototype.publish = function(topic, args, kwargs, options) {
      util.assert(typeof topic === "string", "Session.publish: <topic> must be a string");
      util.assert(!args || Array.isArray(args), "Session.publish: <args> must be an array []");
      util.assert(!kwargs || kwargs instanceof Object, "Session.publish: <kwargs> must be an object {}");
      util.assert(!options || options instanceof Object, "Session.publish: <options> must be an object {}");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      options = options || {};
      if (options.disclose_me === void 0 && self2._publisher_disclose_me) {
        options.disclose_me = true;
      }
      var d = null;
      var request = self2._new_request_id();
      if (options.acknowledge) {
        d = self2._defer();
        self2._publish_reqs[request] = [d, options];
      }
      var msg = [MSG_TYPE.PUBLISH, request, options, self2.resolve(topic)];
      if (args) {
        msg.push(args);
        if (kwargs) {
          msg.push(kwargs);
        }
      } else if (kwargs) {
        msg.push([]);
        msg.push(kwargs);
      }
      self2._send_wamp(msg);
      if (d) {
        if (d.promise.then) {
          return d.promise;
        } else {
          return d;
        }
      }
    };
    Session2.prototype.subscribe = function(topic, handler, options) {
      util.assert(typeof topic === "string", "Session.subscribe: <topic> must be a string");
      util.assert(typeof handler === "function", "Session.subscribe: <handler> must be a function");
      util.assert(!options || options instanceof Object, "Session.subscribe: <options> must be an object {}");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      var request = self2._new_request_id();
      var d = self2._defer();
      self2._subscribe_reqs[request] = [d, topic, handler, options];
      var msg = [MSG_TYPE.SUBSCRIBE, request];
      if (options) {
        msg.push(options);
      } else {
        msg.push({});
      }
      msg.push(self2.resolve(topic));
      self2._send_wamp(msg);
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    Session2.prototype.register = function(procedure, endpoint, options) {
      util.assert(typeof procedure === "string", "Session.register: <procedure> must be a string");
      util.assert(typeof endpoint === "function", "Session.register: <endpoint> must be a function");
      util.assert(!options || options instanceof Object, "Session.register: <options> must be an object {}");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      var request = self2._new_request_id();
      var d = self2._defer();
      self2._register_reqs[request] = [d, procedure, endpoint, options];
      var msg = [MSG_TYPE.REGISTER, request];
      if (options) {
        msg.push(options);
      } else {
        msg.push({});
      }
      msg.push(self2.resolve(procedure));
      self2._send_wamp(msg);
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    Session2.prototype.unsubscribe = function(subscription) {
      util.assert(subscription instanceof Subscription, "Session.unsubscribe: <subscription> must be an instance of class autobahn.Subscription");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      if (!subscription.active || !(subscription.id in self2._subscriptions)) {
        throw "subscription not active";
      }
      var subs = self2._subscriptions[subscription.id];
      var i = subs.indexOf(subscription);
      if (i === -1) {
        throw "subscription not active";
      }
      subs.splice(i, 1);
      subscription.active = false;
      var d = self2._defer();
      if (subs.length) {
        d.resolve(false);
      } else {
        var request = self2._new_request_id();
        self2._unsubscribe_reqs[request] = [d, subscription.id];
        var msg = [MSG_TYPE.UNSUBSCRIBE, request, subscription.id];
        self2._send_wamp(msg);
      }
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    Session2.prototype.unregister = function(registration) {
      util.assert(registration instanceof Registration, "Session.unregister: <registration> must be an instance of class autobahn.Registration");
      var self2 = this;
      if (!self2.isOpen) {
        throw "session not open";
      }
      if (!registration.active || !(registration.id in self2._registrations)) {
        throw "registration not active";
      }
      var request = self2._new_request_id();
      var d = self2._defer();
      self2._unregister_reqs[request] = [d, registration];
      var msg = [MSG_TYPE.UNREGISTER, request, registration.id];
      self2._send_wamp(msg);
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    };
    Session2.prototype.prefix = function(prefix, uri) {
      util.assert(typeof prefix === "string", "Session.prefix: <prefix> must be a string");
      util.assert(!uri || typeof uri === "string", "Session.prefix: <uri> must be a string or falsy");
      var self2 = this;
      if (uri) {
        self2._prefixes[prefix] = uri;
      } else {
        if (prefix in self2._prefixes) {
          delete self2._prefixes[prefix];
        }
      }
    };
    Session2.prototype.resolve = function(curie) {
      util.assert(typeof curie === "string", "Session.resolve: <curie> must be a string");
      var self2 = this;
      var i = curie.indexOf(":");
      if (i >= 0) {
        var prefix = curie.substring(0, i);
        if (prefix in self2._prefixes) {
          return self2._prefixes[prefix] + "." + curie.substring(i + 1);
        } else {
          return curie;
        }
      } else {
        return curie;
      }
    };
    exports2.Session = Session2;
    exports2.Invocation = Invocation;
    exports2.Event = Event;
    exports2.Result = Result2;
    exports2.Error = Error3;
    exports2.Subscription = Subscription;
    exports2.Registration = Registration;
    exports2.Publication = Publication;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/connection.js
var require_connection = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/connection.js"(exports2) {
    var when = require_when();
    var session = require_session();
    var util = require_util();
    var log = require_log();
    var autobahn = require_autobahn();
    var Connection2 = function(options) {
      var self2 = this;
      self2._options = options;
      self2._defer = util.deferred_factory(options);
      if (!self2._options.transports) {
        self2._options.transports = [
          {
            type: "websocket",
            url: self2._options.url,
            tlsConfiguration: self2._options.tlsConfiguration
          }
        ];
      }
      self2._transport_factories = [];
      self2._init_transport_factories();
      self2._session = null;
      self2._session_close_reason = null;
      self2._session_close_message = null;
      if (self2._options.retry_if_unreachable !== void 0) {
        self2._retry_if_unreachable = self2._options.retry_if_unreachable;
      } else {
        self2._retry_if_unreachable = true;
      }
      self2._max_retries = typeof self2._options.max_retries !== "undefined" ? self2._options.max_retries : 15;
      self2._initial_retry_delay = typeof self2._options.initial_retry_delay !== "undefined" ? self2._options.initial_retry_delay : 1.5;
      self2._max_retry_delay = self2._options.max_retry_delay || 300;
      self2._retry_delay_growth = self2._options.retry_delay_growth || 1.5;
      self2._retry_delay_jitter = self2._options.retry_delay_jitter || 0.1;
      self2._connect_successes = 0;
      self2._retry = false;
      self2._retry_count = 0;
      self2._retry_delay = self2._initial_retry_delay;
      self2._is_retrying = false;
      self2._retry_timer = null;
    };
    Connection2.prototype._create_transport = function() {
      var self2 = this;
      for (var i = 0; i < this._transport_factories.length; ++i) {
        var transport_factory = this._transport_factories[i];
        log.debug("trying to create WAMP transport of type: " + transport_factory.type);
        try {
          var transport = transport_factory.create();
          if (transport) {
            log.debug("using WAMP transport type: " + transport_factory.type);
            return transport;
          }
        } catch (e) {
          var error_message = "could not create WAMP transport '" + transport_factory.type + "': ";
          util.handle_error(self2._options.on_internal_error, e, error_message);
        }
      }
      log.warn("could not create any WAMP transport");
      return null;
    };
    Connection2.prototype._init_transport_factories = function() {
      var self2 = this;
      var transports, transport_options, transport_factory, transport_factory_klass;
      util.assert(this._options.transports, "No transport.factory specified");
      transports = this._options.transports;
      for (var i = 0; i < this._options.transports.length; ++i) {
        transport_options = this._options.transports[i];
        if (!transport_options.url) {
          transport_options.url = this._options.url;
        }
        if (!transport_options.serializers) {
          transport_options.serializers = this._options.serializers;
        }
        if (!transport_options.protocols) {
          transport_options.protocols = this._options.protocols;
        }
        util.assert(transport_options.type, "No transport.type specified");
        util.assert(typeof transport_options.type === "string", "transport.type must be a string");
        try {
          transport_factory_klass = autobahn.transports.get(transport_options.type);
          if (transport_factory_klass) {
            transport_factory = new transport_factory_klass(transport_options);
            this._transport_factories.push(transport_factory);
          }
        } catch (exc) {
          util.handle_error(self2._options.on_internal_error, exc);
        }
      }
    };
    Connection2.prototype._autoreconnect_reset_timer = function() {
      var self2 = this;
      if (self2._retry_timer) {
        clearTimeout(self2._retry_timer);
      }
      self2._retry_timer = null;
    };
    Connection2.prototype._autoreconnect_reset = function() {
      var self2 = this;
      self2._autoreconnect_reset_timer();
      self2._retry_count = 0;
      self2._retry_delay = self2._initial_retry_delay;
      self2._is_retrying = false;
    };
    Connection2.prototype._autoreconnect_advance = function() {
      var self2 = this;
      if (self2._retry_delay_jitter) {
        self2._retry_delay = util.rand_normal(self2._retry_delay, self2._retry_delay * self2._retry_delay_jitter);
      }
      if (self2._retry_delay > self2._max_retry_delay) {
        self2._retry_delay = self2._max_retry_delay;
      }
      self2._retry_count += 1;
      var res;
      if (self2._retry && (self2._max_retries === -1 || self2._retry_count <= self2._max_retries)) {
        res = {
          count: self2._retry_count,
          delay: self2._retry_delay,
          will_retry: true
        };
      } else {
        res = {
          count: null,
          delay: null,
          will_retry: false
        };
      }
      if (self2._retry_delay_growth) {
        self2._retry_delay = self2._retry_delay * self2._retry_delay_growth;
      }
      return res;
    };
    Connection2.prototype.open = function() {
      var self2 = this;
      if (self2._transport) {
        throw "connection already open (or opening)";
      }
      self2._autoreconnect_reset();
      self2._retry = true;
      function retry() {
        try {
          self2._transport = self2._create_transport();
        } catch (e) {
          util.handle_error(self2._options.on_internal_error, e);
        }
        if (!self2._transport) {
          self2._retry = false;
          if (self2.onclose) {
            var details = {
              reason: null,
              message: null,
              retry_delay: null,
              retry_count: null,
              will_retry: false
            };
            self2.onclose("unsupported", details);
          }
          return;
        }
        self2._session = new session.Session(self2._transport, self2._defer, self2._options.onchallenge, self2._options.on_user_error, self2._options.on_internal_error);
        self2._session_close_reason = null;
        self2._session_close_message = null;
        self2._transport.onopen = function() {
          self2._autoreconnect_reset();
          self2._connect_successes += 1;
          self2._session.join(self2._options.realm, self2._options.authmethods, self2._options.authid, self2._options.authextra);
        };
        self2._session.onjoin = function(details2) {
          if (self2.onopen) {
            try {
              details2.transport = self2._transport.info;
              self2.onopen(self2._session, details2);
            } catch (e) {
              util.handle_error(self2._options.on_user_error, e, "Exception raised from app code while firing Connection.onopen()");
            }
          }
        };
        self2._session.onleave = function(reason, details2) {
          self2._session_close_reason = reason;
          self2._session_close_message = details2.message || "";
          self2._retry = false;
          self2._transport.close();
        };
        self2._transport.onclose = function(evt) {
          self2._autoreconnect_reset_timer();
          self2._transport = null;
          var reason = null;
          if (self2._connect_successes === 0) {
            reason = "unreachable";
            if (!self2._retry_if_unreachable) {
              self2._retry = false;
            }
          } else if (!evt.wasClean) {
            reason = "lost";
          } else {
            reason = "closed";
          }
          var next_retry = self2._autoreconnect_advance();
          var details2 = {
            reason: self2._session_close_reason,
            message: self2._session_close_message,
            retry_delay: next_retry.delay,
            retry_count: next_retry.count,
            will_retry: next_retry.will_retry
          };
          log.warn("connection closed", reason, details2);
          if (self2.onclose) {
            try {
              var stop_retrying = self2.onclose(reason, details2);
            } catch (e) {
              util.handle_error(self2._options.on_user_error, e, "Exception raised from app code while firing Connection.onclose()");
            }
          }
          if (self2._session) {
            self2._session._id = null;
            self2._session = null;
            self2._session_close_reason = null;
            self2._session_close_message = null;
          }
          if (self2._retry && !stop_retrying) {
            if (next_retry.will_retry) {
              self2._is_retrying = true;
              log.warn("auto-reconnecting in " + next_retry.delay + "s ..");
              self2._retry_timer = setTimeout(retry, next_retry.delay * 1e3);
            } else {
              log.warn("giving up trying to auto-reconnect!");
            }
          } else {
            log.warn("auto-reconnect disabled!", self2._retry, stop_retrying);
          }
        };
      }
      retry();
    };
    Connection2.prototype.close = function(reason, message) {
      var self2 = this;
      if (!self2._transport && !self2._is_retrying) {
        throw "connection already closed";
      }
      self2._retry = false;
      if (self2._session && self2._session.isOpen) {
        self2._session.leave(reason, message);
      } else if (self2._transport) {
        self2._transport.close();
      }
    };
    Object.defineProperty(Connection2.prototype, "defer", {
      get: function() {
        return this._defer;
      }
    });
    Object.defineProperty(Connection2.prototype, "session", {
      get: function() {
        return this._session;
      }
    });
    Object.defineProperty(Connection2.prototype, "isOpen", {
      get: function() {
        if (this._session && this._session.isOpen) {
          return true;
        } else {
          return false;
        }
      }
    });
    Object.defineProperty(Connection2.prototype, "isConnected", {
      get: function() {
        if (this._transport) {
          return true;
        } else {
          return false;
        }
      }
    });
    Object.defineProperty(Connection2.prototype, "transport", {
      get: function() {
        if (this._transport) {
          return this._transport;
        } else {
          return { info: { type: "none", url: null, protocol: null } };
        }
      }
    });
    Object.defineProperty(Connection2.prototype, "isRetrying", {
      get: function() {
        return this._is_retrying;
      }
    });
    exports2.Connection = Connection2;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/serializer.js
var require_serializer = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/serializer.js"(exports2) {
    var log = require_log();
    function JSONSerializer(replacer, reviver2) {
      this.replacer = replacer;
      this.reviver = reviver2;
      this.SERIALIZER_ID = "json";
      this.BINARY = false;
    }
    JSONSerializer.prototype.serialize = function(obj) {
      try {
        var payload = JSON.stringify(obj, this.replacer);
        return payload;
      } catch (e) {
        log.warn("JSON encoding error", e);
        throw e;
      }
    };
    JSONSerializer.prototype.unserialize = function(payload) {
      try {
        var obj = JSON.parse(payload, this.reviver);
        return obj;
      } catch (e) {
        log.warn("JSON decoding error", e);
        throw e;
      }
    };
    exports2.JSONSerializer = JSONSerializer;
    try {
      let MsgpackSerializer2 = function() {
        this.SERIALIZER_ID = "msgpack";
        this.BINARY = true;
      };
      MsgpackSerializer = MsgpackSerializer2;
      msgpack = require_msgpack5_6_0()({ forceFloat64: true });
      MsgpackSerializer2.prototype.serialize = function(obj) {
        try {
          var payload = msgpack.encode(obj);
          return payload;
        } catch (e) {
          log.warn("MessagePack encoding error", e);
          throw e;
        }
      };
      MsgpackSerializer2.prototype.unserialize = function(payload) {
        try {
          var obj = msgpack.decode(payload);
          return obj;
        } catch (e) {
          log.warn("MessagePack decoding error", e);
          throw e;
        }
      };
      exports2.MsgpackSerializer = MsgpackSerializer2;
    } catch (e) {
      log.warn("msgpack serializer not available", e);
    }
    var msgpack;
    var MsgpackSerializer;
    try {
      let CBORSerializer2 = function() {
        this.SERIALIZER_ID = "cbor";
        this.BINARY = true;
      };
      CBORSerializer = CBORSerializer2;
      cbor = require_cbor();
      CBORSerializer2.prototype.serialize = function(obj) {
        try {
          var payload = cbor.encode(obj);
          return payload;
        } catch (e) {
          log.warn("CBOR encoding error", e);
          throw e;
        }
      };
      CBORSerializer2.prototype.unserialize = function(payload) {
        try {
          var obj = cbor.decodeFirstSync(payload);
          return obj;
        } catch (e) {
          log.warn("CBOR decoding error", e);
          throw e;
        }
      };
      exports2.CBORSerializer = CBORSerializer2;
    } catch (e) {
      log.warn("cbor serializer not available", e);
    }
    var cbor;
    var CBORSerializer;
  }
});

// node_modules/_ws@8.14.2@ws/lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      BINARY_TYPES: ["nodebuffer", "arraybuffer", "fragments"],
      EMPTY_BUFFER: Buffer.alloc(0),
      GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
      kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
      kListener: Symbol("kListener"),
      kStatusCode: Symbol("status-code"),
      kWebSocket: Symbol("websocket"),
      NOOP: () => {
      }
    };
  }
});

// node_modules/_node-gyp-build@4.6.1@node-gyp-build/node-gyp-build.js
var require_node_gyp_build = __commonJS({
  "node_modules/_node-gyp-build@4.6.1@node-gyp-build/node-gyp-build.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    var os = require("os");
    var runtimeRequire = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
    var vars = process.config && process.config.variables || {};
    var prebuildsOnly = !!process.env.PREBUILDS_ONLY;
    var abi = process.versions.modules;
    var runtime = isElectron() ? "electron" : isNwjs() ? "node-webkit" : "node";
    var arch = process.env.npm_config_arch || os.arch();
    var platform = process.env.npm_config_platform || os.platform();
    var libc = process.env.LIBC || (isAlpine(platform) ? "musl" : "glibc");
    var armv = process.env.ARM_VERSION || (arch === "arm64" ? "8" : vars.arm_version) || "";
    var uv = (process.versions.uv || "").split(".")[0];
    module2.exports = load;
    function load(dir) {
      return runtimeRequire(load.resolve(dir));
    }
    load.resolve = load.path = function(dir) {
      dir = path.resolve(dir || ".");
      try {
        var name = runtimeRequire(path.join(dir, "package.json")).name.toUpperCase().replace(/-/g, "_");
        if (process.env[name + "_PREBUILD"])
          dir = process.env[name + "_PREBUILD"];
      } catch (err) {
      }
      if (!prebuildsOnly) {
        var release = getFirst(path.join(dir, "build/Release"), matchBuild);
        if (release)
          return release;
        var debug = getFirst(path.join(dir, "build/Debug"), matchBuild);
        if (debug)
          return debug;
      }
      var prebuild = resolve(dir);
      if (prebuild)
        return prebuild;
      var nearby = resolve(path.dirname(process.execPath));
      if (nearby)
        return nearby;
      var target = [
        "platform=" + platform,
        "arch=" + arch,
        "runtime=" + runtime,
        "abi=" + abi,
        "uv=" + uv,
        armv ? "armv=" + armv : "",
        "libc=" + libc,
        "node=" + process.versions.node,
        process.versions.electron ? "electron=" + process.versions.electron : "",
        typeof __webpack_require__ === "function" ? "webpack=true" : ""
      ].filter(Boolean).join(" ");
      throw new Error("No native build was found for " + target + "\n    loaded from: " + dir + "\n");
      function resolve(dir2) {
        var tuples = readdirSync(path.join(dir2, "prebuilds")).map(parseTuple);
        var tuple = tuples.filter(matchTuple(platform, arch)).sort(compareTuples)[0];
        if (!tuple)
          return;
        var prebuilds = path.join(dir2, "prebuilds", tuple.name);
        var parsed = readdirSync(prebuilds).map(parseTags);
        var candidates = parsed.filter(matchTags(runtime, abi));
        var winner = candidates.sort(compareTags(runtime))[0];
        if (winner)
          return path.join(prebuilds, winner.file);
      }
    };
    function readdirSync(dir) {
      try {
        return fs.readdirSync(dir);
      } catch (err) {
        return [];
      }
    }
    function getFirst(dir, filter) {
      var files = readdirSync(dir).filter(filter);
      return files[0] && path.join(dir, files[0]);
    }
    function matchBuild(name) {
      return /\.node$/.test(name);
    }
    function parseTuple(name) {
      var arr = name.split("-");
      if (arr.length !== 2)
        return;
      var platform2 = arr[0];
      var architectures = arr[1].split("+");
      if (!platform2)
        return;
      if (!architectures.length)
        return;
      if (!architectures.every(Boolean))
        return;
      return { name, platform: platform2, architectures };
    }
    function matchTuple(platform2, arch2) {
      return function(tuple) {
        if (tuple == null)
          return false;
        if (tuple.platform !== platform2)
          return false;
        return tuple.architectures.includes(arch2);
      };
    }
    function compareTuples(a, b) {
      return a.architectures.length - b.architectures.length;
    }
    function parseTags(file) {
      var arr = file.split(".");
      var extension = arr.pop();
      var tags = { file, specificity: 0 };
      if (extension !== "node")
        return;
      for (var i = 0; i < arr.length; i++) {
        var tag = arr[i];
        if (tag === "node" || tag === "electron" || tag === "node-webkit") {
          tags.runtime = tag;
        } else if (tag === "napi") {
          tags.napi = true;
        } else if (tag.slice(0, 3) === "abi") {
          tags.abi = tag.slice(3);
        } else if (tag.slice(0, 2) === "uv") {
          tags.uv = tag.slice(2);
        } else if (tag.slice(0, 4) === "armv") {
          tags.armv = tag.slice(4);
        } else if (tag === "glibc" || tag === "musl") {
          tags.libc = tag;
        } else {
          continue;
        }
        tags.specificity++;
      }
      return tags;
    }
    function matchTags(runtime2, abi2) {
      return function(tags) {
        if (tags == null)
          return false;
        if (tags.runtime !== runtime2 && !runtimeAgnostic(tags))
          return false;
        if (tags.abi !== abi2 && !tags.napi)
          return false;
        if (tags.uv && tags.uv !== uv)
          return false;
        if (tags.armv && tags.armv !== armv)
          return false;
        if (tags.libc && tags.libc !== libc)
          return false;
        return true;
      };
    }
    function runtimeAgnostic(tags) {
      return tags.runtime === "node" && tags.napi;
    }
    function compareTags(runtime2) {
      return function(a, b) {
        if (a.runtime !== b.runtime) {
          return a.runtime === runtime2 ? -1 : 1;
        } else if (a.abi !== b.abi) {
          return a.abi ? -1 : 1;
        } else if (a.specificity !== b.specificity) {
          return a.specificity > b.specificity ? -1 : 1;
        } else {
          return 0;
        }
      };
    }
    function isNwjs() {
      return !!(process.versions && process.versions.nw);
    }
    function isElectron() {
      if (process.versions && process.versions.electron)
        return true;
      if (process.env.ELECTRON_RUN_AS_NODE)
        return true;
      return typeof window !== "undefined" && window.process && window.process.type === "renderer";
    }
    function isAlpine(platform2) {
      return platform2 === "linux" && fs.existsSync("/etc/alpine-release");
    }
    load.parseTags = parseTags;
    load.matchTags = matchTags;
    load.compareTags = compareTags;
    load.parseTuple = parseTuple;
    load.matchTuple = matchTuple;
    load.compareTuples = compareTuples;
  }
});

// node_modules/_node-gyp-build@4.6.1@node-gyp-build/index.js
var require_node_gyp_build_4_6 = __commonJS({
  "node_modules/_node-gyp-build@4.6.1@node-gyp-build/index.js"(exports2, module2) {
    if (typeof process.addon === "function") {
      module2.exports = process.addon.bind(process);
    } else {
      module2.exports = require_node_gyp_build();
    }
  }
});

// node_modules/_bufferutil@4.0.7@bufferutil/fallback.js
var require_fallback = __commonJS({
  "node_modules/_bufferutil@4.0.7@bufferutil/fallback.js"(exports2, module2) {
    "use strict";
    var mask = (source, mask2, output, offset, length) => {
      for (var i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask2[i & 3];
      }
    };
    var unmask = (buffer, mask2) => {
      const length = buffer.length;
      for (var i = 0; i < length; i++) {
        buffer[i] ^= mask2[i & 3];
      }
    };
    module2.exports = { mask, unmask };
  }
});

// node_modules/_bufferutil@4.0.7@bufferutil/index.js
var require_bufferutil_4_0 = __commonJS({
  "node_modules/_bufferutil@4.0.7@bufferutil/index.js"(exports2, module2) {
    "use strict";
    try {
      module2.exports = require_node_gyp_build_4_6()(__dirname);
    } catch (e) {
      module2.exports = require_fallback();
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/buffer-util.js
var require_buffer_util = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/buffer-util.js"(exports2, module2) {
    "use strict";
    var { EMPTY_BUFFER } = require_constants2();
    var FastBuffer = Buffer[Symbol.species];
    function concat(list, totalLength) {
      if (list.length === 0)
        return EMPTY_BUFFER;
      if (list.length === 1)
        return list[0];
      const target = Buffer.allocUnsafe(totalLength);
      let offset = 0;
      for (let i = 0; i < list.length; i++) {
        const buf = list[i];
        target.set(buf, offset);
        offset += buf.length;
      }
      if (offset < totalLength) {
        return new FastBuffer(target.buffer, target.byteOffset, offset);
      }
      return target;
    }
    function _mask(source, mask, output, offset, length) {
      for (let i = 0; i < length; i++) {
        output[offset + i] = source[i] ^ mask[i & 3];
      }
    }
    function _unmask(buffer, mask) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] ^= mask[i & 3];
      }
    }
    function toArrayBuffer(buf) {
      if (buf.length === buf.buffer.byteLength) {
        return buf.buffer;
      }
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
    }
    function toBuffer(data) {
      toBuffer.readOnly = true;
      if (Buffer.isBuffer(data))
        return data;
      let buf;
      if (data instanceof ArrayBuffer) {
        buf = new FastBuffer(data);
      } else if (ArrayBuffer.isView(data)) {
        buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
      } else {
        buf = Buffer.from(data);
        toBuffer.readOnly = false;
      }
      return buf;
    }
    module2.exports = {
      concat,
      mask: _mask,
      toArrayBuffer,
      toBuffer,
      unmask: _unmask
    };
    if (!process.env.WS_NO_BUFFER_UTIL) {
      try {
        const bufferUtil = require_bufferutil_4_0();
        module2.exports.mask = function(source, mask, output, offset, length) {
          if (length < 48)
            _mask(source, mask, output, offset, length);
          else
            bufferUtil.mask(source, mask, output, offset, length);
        };
        module2.exports.unmask = function(buffer, mask) {
          if (buffer.length < 32)
            _unmask(buffer, mask);
          else
            bufferUtil.unmask(buffer, mask);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/limiter.js
var require_limiter = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/limiter.js"(exports2, module2) {
    "use strict";
    var kDone = Symbol("kDone");
    var kRun = Symbol("kRun");
    var Limiter = class {
      constructor(concurrency) {
        this[kDone] = () => {
          this.pending--;
          this[kRun]();
        };
        this.concurrency = concurrency || Infinity;
        this.jobs = [];
        this.pending = 0;
      }
      add(job) {
        this.jobs.push(job);
        this[kRun]();
      }
      [kRun]() {
        if (this.pending === this.concurrency)
          return;
        if (this.jobs.length) {
          const job = this.jobs.shift();
          this.pending++;
          job(this[kDone]);
        }
      }
    };
    module2.exports = Limiter;
  }
});

// node_modules/_ws@8.14.2@ws/lib/permessage-deflate.js
var require_permessage_deflate = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/permessage-deflate.js"(exports2, module2) {
    "use strict";
    var zlib = require("zlib");
    var bufferUtil = require_buffer_util();
    var Limiter = require_limiter();
    var { kStatusCode } = require_constants2();
    var FastBuffer = Buffer[Symbol.species];
    var TRAILER = Buffer.from([0, 0, 255, 255]);
    var kPerMessageDeflate = Symbol("permessage-deflate");
    var kTotalLength = Symbol("total-length");
    var kCallback = Symbol("callback");
    var kBuffers = Symbol("buffers");
    var kError = Symbol("error");
    var zlibLimiter;
    var PerMessageDeflate = class {
      constructor(options, isServer, maxPayload) {
        this._maxPayload = maxPayload | 0;
        this._options = options || {};
        this._threshold = this._options.threshold !== void 0 ? this._options.threshold : 1024;
        this._isServer = !!isServer;
        this._deflate = null;
        this._inflate = null;
        this.params = null;
        if (!zlibLimiter) {
          const concurrency = this._options.concurrencyLimit !== void 0 ? this._options.concurrencyLimit : 10;
          zlibLimiter = new Limiter(concurrency);
        }
      }
      static get extensionName() {
        return "permessage-deflate";
      }
      offer() {
        const params = {};
        if (this._options.serverNoContextTakeover) {
          params.server_no_context_takeover = true;
        }
        if (this._options.clientNoContextTakeover) {
          params.client_no_context_takeover = true;
        }
        if (this._options.serverMaxWindowBits) {
          params.server_max_window_bits = this._options.serverMaxWindowBits;
        }
        if (this._options.clientMaxWindowBits) {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        } else if (this._options.clientMaxWindowBits == null) {
          params.client_max_window_bits = true;
        }
        return params;
      }
      accept(configurations) {
        configurations = this.normalizeParams(configurations);
        this.params = this._isServer ? this.acceptAsServer(configurations) : this.acceptAsClient(configurations);
        return this.params;
      }
      cleanup() {
        if (this._inflate) {
          this._inflate.close();
          this._inflate = null;
        }
        if (this._deflate) {
          const callback = this._deflate[kCallback];
          this._deflate.close();
          this._deflate = null;
          if (callback) {
            callback(
              new Error(
                "The deflate stream was closed while data was being processed"
              )
            );
          }
        }
      }
      acceptAsServer(offers) {
        const opts = this._options;
        const accepted = offers.find((params) => {
          if (opts.serverNoContextTakeover === false && params.server_no_context_takeover || params.server_max_window_bits && (opts.serverMaxWindowBits === false || typeof opts.serverMaxWindowBits === "number" && opts.serverMaxWindowBits > params.server_max_window_bits) || typeof opts.clientMaxWindowBits === "number" && !params.client_max_window_bits) {
            return false;
          }
          return true;
        });
        if (!accepted) {
          throw new Error("None of the extension offers can be accepted");
        }
        if (opts.serverNoContextTakeover) {
          accepted.server_no_context_takeover = true;
        }
        if (opts.clientNoContextTakeover) {
          accepted.client_no_context_takeover = true;
        }
        if (typeof opts.serverMaxWindowBits === "number") {
          accepted.server_max_window_bits = opts.serverMaxWindowBits;
        }
        if (typeof opts.clientMaxWindowBits === "number") {
          accepted.client_max_window_bits = opts.clientMaxWindowBits;
        } else if (accepted.client_max_window_bits === true || opts.clientMaxWindowBits === false) {
          delete accepted.client_max_window_bits;
        }
        return accepted;
      }
      acceptAsClient(response) {
        const params = response[0];
        if (this._options.clientNoContextTakeover === false && params.client_no_context_takeover) {
          throw new Error('Unexpected parameter "client_no_context_takeover"');
        }
        if (!params.client_max_window_bits) {
          if (typeof this._options.clientMaxWindowBits === "number") {
            params.client_max_window_bits = this._options.clientMaxWindowBits;
          }
        } else if (this._options.clientMaxWindowBits === false || typeof this._options.clientMaxWindowBits === "number" && params.client_max_window_bits > this._options.clientMaxWindowBits) {
          throw new Error(
            'Unexpected or invalid parameter "client_max_window_bits"'
          );
        }
        return params;
      }
      normalizeParams(configurations) {
        configurations.forEach((params) => {
          Object.keys(params).forEach((key) => {
            let value = params[key];
            if (value.length > 1) {
              throw new Error(`Parameter "${key}" must have only a single value`);
            }
            value = value[0];
            if (key === "client_max_window_bits") {
              if (value !== true) {
                const num = +value;
                if (!Number.isInteger(num) || num < 8 || num > 15) {
                  throw new TypeError(
                    `Invalid value for parameter "${key}": ${value}`
                  );
                }
                value = num;
              } else if (!this._isServer) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else if (key === "server_max_window_bits") {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (key === "client_no_context_takeover" || key === "server_no_context_takeover") {
              if (value !== true) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
            } else {
              throw new Error(`Unknown parameter "${key}"`);
            }
            params[key] = value;
          });
        });
        return configurations;
      }
      decompress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._decompress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      compress(data, fin, callback) {
        zlibLimiter.add((done) => {
          this._compress(data, fin, (err, result) => {
            done();
            callback(err, result);
          });
        });
      }
      _decompress(data, fin, callback) {
        const endpoint = this._isServer ? "client" : "server";
        if (!this._inflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._inflate = zlib.createInflateRaw({
            ...this._options.zlibInflateOptions,
            windowBits
          });
          this._inflate[kPerMessageDeflate] = this;
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          this._inflate.on("error", inflateOnError);
          this._inflate.on("data", inflateOnData);
        }
        this._inflate[kCallback] = callback;
        this._inflate.write(data);
        if (fin)
          this._inflate.write(TRAILER);
        this._inflate.flush(() => {
          const err = this._inflate[kError];
          if (err) {
            this._inflate.close();
            this._inflate = null;
            callback(err);
            return;
          }
          const data2 = bufferUtil.concat(
            this._inflate[kBuffers],
            this._inflate[kTotalLength]
          );
          if (this._inflate._readableState.endEmitted) {
            this._inflate.close();
            this._inflate = null;
          } else {
            this._inflate[kTotalLength] = 0;
            this._inflate[kBuffers] = [];
            if (fin && this.params[`${endpoint}_no_context_takeover`]) {
              this._inflate.reset();
            }
          }
          callback(null, data2);
        });
      }
      _compress(data, fin, callback) {
        const endpoint = this._isServer ? "server" : "client";
        if (!this._deflate) {
          const key = `${endpoint}_max_window_bits`;
          const windowBits = typeof this.params[key] !== "number" ? zlib.Z_DEFAULT_WINDOWBITS : this.params[key];
          this._deflate = zlib.createDeflateRaw({
            ...this._options.zlibDeflateOptions,
            windowBits
          });
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          this._deflate.on("data", deflateOnData);
        }
        this._deflate[kCallback] = callback;
        this._deflate.write(data);
        this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
          if (!this._deflate) {
            return;
          }
          let data2 = bufferUtil.concat(
            this._deflate[kBuffers],
            this._deflate[kTotalLength]
          );
          if (fin) {
            data2 = new FastBuffer(data2.buffer, data2.byteOffset, data2.length - 4);
          }
          this._deflate[kCallback] = null;
          this._deflate[kTotalLength] = 0;
          this._deflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._deflate.reset();
          }
          callback(null, data2);
        });
      }
    };
    module2.exports = PerMessageDeflate;
    function deflateOnData(chunk) {
      this[kBuffers].push(chunk);
      this[kTotalLength] += chunk.length;
    }
    function inflateOnData(chunk) {
      this[kTotalLength] += chunk.length;
      if (this[kPerMessageDeflate]._maxPayload < 1 || this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload) {
        this[kBuffers].push(chunk);
        return;
      }
      this[kError] = new RangeError("Max payload size exceeded");
      this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
      this[kError][kStatusCode] = 1009;
      this.removeListener("data", inflateOnData);
      this.reset();
    }
    function inflateOnError(err) {
      this[kPerMessageDeflate]._inflate = null;
      err[kStatusCode] = 1007;
      this[kCallback](err);
    }
  }
});

// node_modules/_utf-8-validate@6.0.3@utf-8-validate/fallback.js
var require_fallback2 = __commonJS({
  "node_modules/_utf-8-validate@6.0.3@utf-8-validate/fallback.js"(exports2, module2) {
    "use strict";
    function isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    module2.exports = isValidUTF8;
  }
});

// node_modules/_utf-8-validate@6.0.3@utf-8-validate/index.js
var require_utf_8_validate_6_0 = __commonJS({
  "node_modules/_utf-8-validate@6.0.3@utf-8-validate/index.js"(exports2, module2) {
    "use strict";
    try {
      module2.exports = require_node_gyp_build_4_6()(__dirname);
    } catch (e) {
      module2.exports = require_fallback2();
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/validation.js
var require_validation = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/validation.js"(exports2, module2) {
    "use strict";
    var { isUtf8 } = require("buffer");
    var tokenChars = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0
    ];
    function isValidStatusCode(code) {
      return code >= 1e3 && code <= 1014 && code !== 1004 && code !== 1005 && code !== 1006 || code >= 3e3 && code <= 4999;
    }
    function _isValidUTF8(buf) {
      const len = buf.length;
      let i = 0;
      while (i < len) {
        if ((buf[i] & 128) === 0) {
          i++;
        } else if ((buf[i] & 224) === 192) {
          if (i + 1 === len || (buf[i + 1] & 192) !== 128 || (buf[i] & 254) === 192) {
            return false;
          }
          i += 2;
        } else if ((buf[i] & 240) === 224) {
          if (i + 2 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || buf[i] === 224 && (buf[i + 1] & 224) === 128 || buf[i] === 237 && (buf[i + 1] & 224) === 160) {
            return false;
          }
          i += 3;
        } else if ((buf[i] & 248) === 240) {
          if (i + 3 >= len || (buf[i + 1] & 192) !== 128 || (buf[i + 2] & 192) !== 128 || (buf[i + 3] & 192) !== 128 || buf[i] === 240 && (buf[i + 1] & 240) === 128 || buf[i] === 244 && buf[i + 1] > 143 || buf[i] > 244) {
            return false;
          }
          i += 4;
        } else {
          return false;
        }
      }
      return true;
    }
    module2.exports = {
      isValidStatusCode,
      isValidUTF8: _isValidUTF8,
      tokenChars
    };
    if (isUtf8) {
      module2.exports.isValidUTF8 = function(buf) {
        return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
      };
    } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
      try {
        const isValidUTF8 = require_utf_8_validate_6_0();
        module2.exports.isValidUTF8 = function(buf) {
          return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
        };
      } catch (e) {
      }
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/receiver.js
var require_receiver = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/receiver.js"(exports2, module2) {
    "use strict";
    var { Writable } = require("stream");
    var PerMessageDeflate = require_permessage_deflate();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      kStatusCode,
      kWebSocket
    } = require_constants2();
    var { concat, toArrayBuffer, unmask } = require_buffer_util();
    var { isValidStatusCode, isValidUTF8 } = require_validation();
    var FastBuffer = Buffer[Symbol.species];
    var promise = Promise.resolve();
    var queueTask = typeof queueMicrotask === "function" ? queueMicrotask : queueMicrotaskShim;
    var GET_INFO = 0;
    var GET_PAYLOAD_LENGTH_16 = 1;
    var GET_PAYLOAD_LENGTH_64 = 2;
    var GET_MASK = 3;
    var GET_DATA = 4;
    var INFLATING = 5;
    var WAIT_MICROTASK = 6;
    var Receiver = class extends Writable {
      constructor(options = {}) {
        super();
        this._binaryType = options.binaryType || BINARY_TYPES[0];
        this._extensions = options.extensions || {};
        this._isServer = !!options.isServer;
        this._maxPayload = options.maxPayload | 0;
        this._skipUTF8Validation = !!options.skipUTF8Validation;
        this[kWebSocket] = void 0;
        this._bufferedBytes = 0;
        this._buffers = [];
        this._compressed = false;
        this._payloadLength = 0;
        this._mask = void 0;
        this._fragmented = 0;
        this._masked = false;
        this._fin = false;
        this._opcode = 0;
        this._totalPayloadLength = 0;
        this._messageLength = 0;
        this._fragments = [];
        this._state = GET_INFO;
        this._loop = false;
      }
      _write(chunk, encoding, cb) {
        if (this._opcode === 8 && this._state == GET_INFO)
          return cb();
        this._bufferedBytes += chunk.length;
        this._buffers.push(chunk);
        this.startLoop(cb);
      }
      consume(n) {
        this._bufferedBytes -= n;
        if (n === this._buffers[0].length)
          return this._buffers.shift();
        if (n < this._buffers[0].length) {
          const buf = this._buffers[0];
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
          return new FastBuffer(buf.buffer, buf.byteOffset, n);
        }
        const dst = Buffer.allocUnsafe(n);
        do {
          const buf = this._buffers[0];
          const offset = dst.length - n;
          if (n >= buf.length) {
            dst.set(this._buffers.shift(), offset);
          } else {
            dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
            this._buffers[0] = new FastBuffer(
              buf.buffer,
              buf.byteOffset + n,
              buf.length - n
            );
          }
          n -= buf.length;
        } while (n > 0);
        return dst;
      }
      startLoop(cb) {
        let err;
        this._loop = true;
        do {
          switch (this._state) {
            case GET_INFO:
              err = this.getInfo();
              break;
            case GET_PAYLOAD_LENGTH_16:
              err = this.getPayloadLength16();
              break;
            case GET_PAYLOAD_LENGTH_64:
              err = this.getPayloadLength64();
              break;
            case GET_MASK:
              this.getMask();
              break;
            case GET_DATA:
              err = this.getData(cb);
              break;
            case INFLATING:
              this._loop = false;
              return;
            default:
              this._loop = false;
              queueTask(() => {
                this._state = GET_INFO;
                this.startLoop(cb);
              });
              return;
          }
        } while (this._loop);
        cb(err);
      }
      getInfo() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        const buf = this.consume(2);
        if ((buf[0] & 48) !== 0) {
          this._loop = false;
          return error(
            RangeError,
            "RSV2 and RSV3 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_2_3"
          );
        }
        const compressed = (buf[0] & 64) === 64;
        if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
          this._loop = false;
          return error(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
        }
        this._fin = (buf[0] & 128) === 128;
        this._opcode = buf[0] & 15;
        this._payloadLength = buf[1] & 127;
        if (this._opcode === 0) {
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
          }
          if (!this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              "invalid opcode 0",
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
          }
          this._opcode = this._fragmented;
        } else if (this._opcode === 1 || this._opcode === 2) {
          if (this._fragmented) {
            this._loop = false;
            return error(
              RangeError,
              `invalid opcode ${this._opcode}`,
              true,
              1002,
              "WS_ERR_INVALID_OPCODE"
            );
          }
          this._compressed = compressed;
        } else if (this._opcode > 7 && this._opcode < 11) {
          if (!this._fin) {
            this._loop = false;
            return error(
              RangeError,
              "FIN must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_FIN"
            );
          }
          if (compressed) {
            this._loop = false;
            return error(
              RangeError,
              "RSV1 must be clear",
              true,
              1002,
              "WS_ERR_UNEXPECTED_RSV_1"
            );
          }
          if (this._payloadLength > 125 || this._opcode === 8 && this._payloadLength === 1) {
            this._loop = false;
            return error(
              RangeError,
              `invalid payload length ${this._payloadLength}`,
              true,
              1002,
              "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
            );
          }
        } else {
          this._loop = false;
          return error(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
        }
        if (!this._fin && !this._fragmented)
          this._fragmented = this._opcode;
        this._masked = (buf[1] & 128) === 128;
        if (this._isServer) {
          if (!this._masked) {
            this._loop = false;
            return error(
              RangeError,
              "MASK must be set",
              true,
              1002,
              "WS_ERR_EXPECTED_MASK"
            );
          }
        } else if (this._masked) {
          this._loop = false;
          return error(
            RangeError,
            "MASK must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_MASK"
          );
        }
        if (this._payloadLength === 126)
          this._state = GET_PAYLOAD_LENGTH_16;
        else if (this._payloadLength === 127)
          this._state = GET_PAYLOAD_LENGTH_64;
        else
          return this.haveLength();
      }
      getPayloadLength16() {
        if (this._bufferedBytes < 2) {
          this._loop = false;
          return;
        }
        this._payloadLength = this.consume(2).readUInt16BE(0);
        return this.haveLength();
      }
      getPayloadLength64() {
        if (this._bufferedBytes < 8) {
          this._loop = false;
          return;
        }
        const buf = this.consume(8);
        const num = buf.readUInt32BE(0);
        if (num > Math.pow(2, 53 - 32) - 1) {
          this._loop = false;
          return error(
            RangeError,
            "Unsupported WebSocket frame: payload length > 2^53 - 1",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
          );
        }
        this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
        return this.haveLength();
      }
      haveLength() {
        if (this._payloadLength && this._opcode < 8) {
          this._totalPayloadLength += this._payloadLength;
          if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
            this._loop = false;
            return error(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
          }
        }
        if (this._masked)
          this._state = GET_MASK;
        else
          this._state = GET_DATA;
      }
      getMask() {
        if (this._bufferedBytes < 4) {
          this._loop = false;
          return;
        }
        this._mask = this.consume(4);
        this._state = GET_DATA;
      }
      getData(cb) {
        let data = EMPTY_BUFFER;
        if (this._payloadLength) {
          if (this._bufferedBytes < this._payloadLength) {
            this._loop = false;
            return;
          }
          data = this.consume(this._payloadLength);
          if (this._masked && (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0) {
            unmask(data, this._mask);
          }
        }
        if (this._opcode > 7)
          return this.controlMessage(data);
        if (this._compressed) {
          this._state = INFLATING;
          this.decompress(data, cb);
          return;
        }
        if (data.length) {
          this._messageLength = this._totalPayloadLength;
          this._fragments.push(data);
        }
        return this.dataMessage();
      }
      decompress(data, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        perMessageDeflate.decompress(data, this._fin, (err, buf) => {
          if (err)
            return cb(err);
          if (buf.length) {
            this._messageLength += buf.length;
            if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
              return cb(
                error(
                  RangeError,
                  "Max payload size exceeded",
                  false,
                  1009,
                  "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
                )
              );
            }
            this._fragments.push(buf);
          }
          const er = this.dataMessage();
          if (er)
            return cb(er);
          this.startLoop(cb);
        });
      }
      dataMessage() {
        if (this._fin) {
          const messageLength = this._messageLength;
          const fragments = this._fragments;
          this._totalPayloadLength = 0;
          this._messageLength = 0;
          this._fragmented = 0;
          this._fragments = [];
          if (this._opcode === 2) {
            let data;
            if (this._binaryType === "nodebuffer") {
              data = concat(fragments, messageLength);
            } else if (this._binaryType === "arraybuffer") {
              data = toArrayBuffer(concat(fragments, messageLength));
            } else {
              data = fragments;
            }
            this.emit("message", data, true);
          } else {
            const buf = concat(fragments, messageLength);
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              this._loop = false;
              return error(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            }
            this.emit("message", buf, false);
          }
        }
        this._state = WAIT_MICROTASK;
      }
      controlMessage(data) {
        if (this._opcode === 8) {
          this._loop = false;
          if (data.length === 0) {
            this.emit("conclude", 1005, EMPTY_BUFFER);
            this.end();
            this._state = GET_INFO;
          } else {
            const code = data.readUInt16BE(0);
            if (!isValidStatusCode(code)) {
              return error(
                RangeError,
                `invalid status code ${code}`,
                true,
                1002,
                "WS_ERR_INVALID_CLOSE_CODE"
              );
            }
            const buf = new FastBuffer(
              data.buffer,
              data.byteOffset + 2,
              data.length - 2
            );
            if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
              return error(
                Error,
                "invalid UTF-8 sequence",
                true,
                1007,
                "WS_ERR_INVALID_UTF8"
              );
            }
            this.emit("conclude", code, buf);
            this.end();
            this._state = GET_INFO;
          }
        } else if (this._opcode === 9) {
          this.emit("ping", data);
          this._state = WAIT_MICROTASK;
        } else {
          this.emit("pong", data);
          this._state = WAIT_MICROTASK;
        }
      }
    };
    module2.exports = Receiver;
    function error(ErrorCtor, message, prefix, statusCode, errorCode) {
      const err = new ErrorCtor(
        prefix ? `Invalid WebSocket frame: ${message}` : message
      );
      Error.captureStackTrace(err, error);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
    function queueMicrotaskShim(cb) {
      promise.then(cb).catch(throwErrorNextTick);
    }
    function throwError(err) {
      throw err;
    }
    function throwErrorNextTick(err) {
      process.nextTick(throwError, err);
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/sender.js
var require_sender = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/sender.js"(exports2, module2) {
    "use strict";
    var { Duplex } = require("stream");
    var { randomFillSync } = require("crypto");
    var PerMessageDeflate = require_permessage_deflate();
    var { EMPTY_BUFFER } = require_constants2();
    var { isValidStatusCode } = require_validation();
    var { mask: applyMask, toBuffer } = require_buffer_util();
    var kByteLength = Symbol("kByteLength");
    var maskBuffer = Buffer.alloc(4);
    var Sender = class {
      constructor(socket, extensions, generateMask) {
        this._extensions = extensions || {};
        if (generateMask) {
          this._generateMask = generateMask;
          this._maskBuffer = Buffer.alloc(4);
        }
        this._socket = socket;
        this._firstFragment = true;
        this._compress = false;
        this._bufferedBytes = 0;
        this._deflating = false;
        this._queue = [];
      }
      static frame(data, options) {
        let mask;
        let merge = false;
        let offset = 2;
        let skipMasking = false;
        if (options.mask) {
          mask = options.maskBuffer || maskBuffer;
          if (options.generateMask) {
            options.generateMask(mask);
          } else {
            randomFillSync(mask, 0, 4);
          }
          skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
          offset = 6;
        }
        let dataLength;
        if (typeof data === "string") {
          if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
            dataLength = options[kByteLength];
          } else {
            data = Buffer.from(data);
            dataLength = data.length;
          }
        } else {
          dataLength = data.length;
          merge = options.mask && options.readOnly && !skipMasking;
        }
        let payloadLength = dataLength;
        if (dataLength >= 65536) {
          offset += 8;
          payloadLength = 127;
        } else if (dataLength > 125) {
          offset += 2;
          payloadLength = 126;
        }
        const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
        target[0] = options.fin ? options.opcode | 128 : options.opcode;
        if (options.rsv1)
          target[0] |= 64;
        target[1] = payloadLength;
        if (payloadLength === 126) {
          target.writeUInt16BE(dataLength, 2);
        } else if (payloadLength === 127) {
          target[2] = target[3] = 0;
          target.writeUIntBE(dataLength, 4, 6);
        }
        if (!options.mask)
          return [target, data];
        target[1] |= 128;
        target[offset - 4] = mask[0];
        target[offset - 3] = mask[1];
        target[offset - 2] = mask[2];
        target[offset - 1] = mask[3];
        if (skipMasking)
          return [target, data];
        if (merge) {
          applyMask(data, mask, target, offset, dataLength);
          return [target];
        }
        applyMask(data, mask, data, 0, dataLength);
        return [target, data];
      }
      close(code, data, mask, cb) {
        let buf;
        if (code === void 0) {
          buf = EMPTY_BUFFER;
        } else if (typeof code !== "number" || !isValidStatusCode(code)) {
          throw new TypeError("First argument must be a valid error code number");
        } else if (data === void 0 || !data.length) {
          buf = Buffer.allocUnsafe(2);
          buf.writeUInt16BE(code, 0);
        } else {
          const length = Buffer.byteLength(data);
          if (length > 123) {
            throw new RangeError("The message must not be greater than 123 bytes");
          }
          buf = Buffer.allocUnsafe(2 + length);
          buf.writeUInt16BE(code, 0);
          if (typeof data === "string") {
            buf.write(data, 2);
          } else {
            buf.set(data, 2);
          }
        }
        const options = {
          [kByteLength]: buf.length,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 8,
          readOnly: false,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, buf, false, options, cb]);
        } else {
          this.sendFrame(Sender.frame(buf, options), cb);
        }
      }
      ping(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 9,
          readOnly,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(Sender.frame(data, options), cb);
        }
      }
      pong(data, mask, cb) {
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (byteLength > 125) {
          throw new RangeError("The data size must not be greater than 125 bytes");
        }
        const options = {
          [kByteLength]: byteLength,
          fin: true,
          generateMask: this._generateMask,
          mask,
          maskBuffer: this._maskBuffer,
          opcode: 10,
          readOnly,
          rsv1: false
        };
        if (this._deflating) {
          this.enqueue([this.dispatch, data, false, options, cb]);
        } else {
          this.sendFrame(Sender.frame(data, options), cb);
        }
      }
      send(data, options, cb) {
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        let opcode = options.binary ? 2 : 1;
        let rsv1 = options.compress;
        let byteLength;
        let readOnly;
        if (typeof data === "string") {
          byteLength = Buffer.byteLength(data);
          readOnly = false;
        } else {
          data = toBuffer(data);
          byteLength = data.length;
          readOnly = toBuffer.readOnly;
        }
        if (this._firstFragment) {
          this._firstFragment = false;
          if (rsv1 && perMessageDeflate && perMessageDeflate.params[perMessageDeflate._isServer ? "server_no_context_takeover" : "client_no_context_takeover"]) {
            rsv1 = byteLength >= perMessageDeflate._threshold;
          }
          this._compress = rsv1;
        } else {
          rsv1 = false;
          opcode = 0;
        }
        if (options.fin)
          this._firstFragment = true;
        if (perMessageDeflate) {
          const opts = {
            [kByteLength]: byteLength,
            fin: options.fin,
            generateMask: this._generateMask,
            mask: options.mask,
            maskBuffer: this._maskBuffer,
            opcode,
            readOnly,
            rsv1
          };
          if (this._deflating) {
            this.enqueue([this.dispatch, data, this._compress, opts, cb]);
          } else {
            this.dispatch(data, this._compress, opts, cb);
          }
        } else {
          this.sendFrame(
            Sender.frame(data, {
              [kByteLength]: byteLength,
              fin: options.fin,
              generateMask: this._generateMask,
              mask: options.mask,
              maskBuffer: this._maskBuffer,
              opcode,
              readOnly,
              rsv1: false
            }),
            cb
          );
        }
      }
      dispatch(data, compress, options, cb) {
        if (!compress) {
          this.sendFrame(Sender.frame(data, options), cb);
          return;
        }
        const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
        this._bufferedBytes += options[kByteLength];
        this._deflating = true;
        perMessageDeflate.compress(data, options.fin, (_, buf) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while data was being compressed"
            );
            if (typeof cb === "function")
              cb(err);
            for (let i = 0; i < this._queue.length; i++) {
              const params = this._queue[i];
              const callback = params[params.length - 1];
              if (typeof callback === "function")
                callback(err);
            }
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          this._deflating = false;
          options.readOnly = false;
          this.sendFrame(Sender.frame(buf, options), cb);
          this.dequeue();
        });
      }
      dequeue() {
        while (!this._deflating && this._queue.length) {
          const params = this._queue.shift();
          this._bufferedBytes -= params[3][kByteLength];
          Reflect.apply(params[0], this, params.slice(1));
        }
      }
      enqueue(params) {
        this._bufferedBytes += params[3][kByteLength];
        this._queue.push(params);
      }
      sendFrame(list, cb) {
        if (list.length === 2) {
          this._socket.cork();
          this._socket.write(list[0]);
          this._socket.write(list[1], cb);
          this._socket.uncork();
        } else {
          this._socket.write(list[0], cb);
        }
      }
    };
    module2.exports = Sender;
  }
});

// node_modules/_ws@8.14.2@ws/lib/event-target.js
var require_event_target = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/event-target.js"(exports2, module2) {
    "use strict";
    var { kForOnEventAttribute, kListener } = require_constants2();
    var kCode = Symbol("kCode");
    var kData = Symbol("kData");
    var kError = Symbol("kError");
    var kMessage = Symbol("kMessage");
    var kReason = Symbol("kReason");
    var kTarget = Symbol("kTarget");
    var kType = Symbol("kType");
    var kWasClean = Symbol("kWasClean");
    var Event = class {
      constructor(type) {
        this[kTarget] = null;
        this[kType] = type;
      }
      get target() {
        return this[kTarget];
      }
      get type() {
        return this[kType];
      }
    };
    Object.defineProperty(Event.prototype, "target", { enumerable: true });
    Object.defineProperty(Event.prototype, "type", { enumerable: true });
    var CloseEvent = class extends Event {
      constructor(type, options = {}) {
        super(type);
        this[kCode] = options.code === void 0 ? 0 : options.code;
        this[kReason] = options.reason === void 0 ? "" : options.reason;
        this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
      }
      get code() {
        return this[kCode];
      }
      get reason() {
        return this[kReason];
      }
      get wasClean() {
        return this[kWasClean];
      }
    };
    Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
    Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
    var ErrorEvent = class extends Event {
      constructor(type, options = {}) {
        super(type);
        this[kError] = options.error === void 0 ? null : options.error;
        this[kMessage] = options.message === void 0 ? "" : options.message;
      }
      get error() {
        return this[kError];
      }
      get message() {
        return this[kMessage];
      }
    };
    Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
    Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
    var MessageEvent = class extends Event {
      constructor(type, options = {}) {
        super(type);
        this[kData] = options.data === void 0 ? null : options.data;
      }
      get data() {
        return this[kData];
      }
    };
    Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
    var EventTarget = {
      addEventListener(type, handler, options = {}) {
        for (const listener of this.listeners(type)) {
          if (!options[kForOnEventAttribute] && listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            return;
          }
        }
        let wrapper;
        if (type === "message") {
          wrapper = function onMessage(data, isBinary) {
            const event = new MessageEvent("message", {
              data: isBinary ? data : data.toString()
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "close") {
          wrapper = function onClose(code, message) {
            const event = new CloseEvent("close", {
              code,
              reason: message.toString(),
              wasClean: this._closeFrameReceived && this._closeFrameSent
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "error") {
          wrapper = function onError(error) {
            const event = new ErrorEvent("error", {
              error,
              message: error.message
            });
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else if (type === "open") {
          wrapper = function onOpen() {
            const event = new Event("open");
            event[kTarget] = this;
            callListener(handler, this, event);
          };
        } else {
          return;
        }
        wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
        wrapper[kListener] = handler;
        if (options.once) {
          this.once(type, wrapper);
        } else {
          this.on(type, wrapper);
        }
      },
      removeEventListener(type, handler) {
        for (const listener of this.listeners(type)) {
          if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
            this.removeListener(type, listener);
            break;
          }
        }
      }
    };
    module2.exports = {
      CloseEvent,
      ErrorEvent,
      Event,
      EventTarget,
      MessageEvent
    };
    function callListener(listener, thisArg, event) {
      if (typeof listener === "object" && listener.handleEvent) {
        listener.handleEvent.call(listener, event);
      } else {
        listener.call(thisArg, event);
      }
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/extension.js
var require_extension = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/extension.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function push(dest, name, elem) {
      if (dest[name] === void 0)
        dest[name] = [elem];
      else
        dest[name].push(elem);
    }
    function parse(header) {
      const offers = /* @__PURE__ */ Object.create(null);
      let params = /* @__PURE__ */ Object.create(null);
      let mustUnescape = false;
      let isEscaping = false;
      let inQuotes = false;
      let extensionName;
      let paramName;
      let start = -1;
      let code = -1;
      let end = -1;
      let i = 0;
      for (; i < header.length; i++) {
        code = header.charCodeAt(i);
        if (extensionName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (i !== 0 && (code === 32 || code === 9)) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            const name = header.slice(start, end);
            if (code === 44) {
              push(offers, name, params);
              params = /* @__PURE__ */ Object.create(null);
            } else {
              extensionName = name;
            }
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (paramName === void 0) {
          if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (code === 32 || code === 9) {
            if (end === -1 && start !== -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            push(params, header.slice(start, end), true);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            start = end = -1;
          } else if (code === 61 && start !== -1 && end === -1) {
            paramName = header.slice(start, i);
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else {
          if (isEscaping) {
            if (tokenChars[code] !== 1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (start === -1)
              start = i;
            else if (!mustUnescape)
              mustUnescape = true;
            isEscaping = false;
          } else if (inQuotes) {
            if (tokenChars[code] === 1) {
              if (start === -1)
                start = i;
            } else if (code === 34 && start !== -1) {
              inQuotes = false;
              end = i;
            } else if (code === 92) {
              isEscaping = true;
            } else {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
          } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
            inQuotes = true;
          } else if (end === -1 && tokenChars[code] === 1) {
            if (start === -1)
              start = i;
          } else if (start !== -1 && (code === 32 || code === 9)) {
            if (end === -1)
              end = i;
          } else if (code === 59 || code === 44) {
            if (start === -1) {
              throw new SyntaxError(`Unexpected character at index ${i}`);
            }
            if (end === -1)
              end = i;
            let value = header.slice(start, end);
            if (mustUnescape) {
              value = value.replace(/\\/g, "");
              mustUnescape = false;
            }
            push(params, paramName, value);
            if (code === 44) {
              push(offers, extensionName, params);
              params = /* @__PURE__ */ Object.create(null);
              extensionName = void 0;
            }
            paramName = void 0;
            start = end = -1;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        }
      }
      if (start === -1 || inQuotes || code === 32 || code === 9) {
        throw new SyntaxError("Unexpected end of input");
      }
      if (end === -1)
        end = i;
      const token = header.slice(start, end);
      if (extensionName === void 0) {
        push(offers, token, params);
      } else {
        if (paramName === void 0) {
          push(params, token, true);
        } else if (mustUnescape) {
          push(params, paramName, token.replace(/\\/g, ""));
        } else {
          push(params, paramName, token);
        }
        push(offers, extensionName, params);
      }
      return offers;
    }
    function format(extensions) {
      return Object.keys(extensions).map((extension) => {
        let configurations = extensions[extension];
        if (!Array.isArray(configurations))
          configurations = [configurations];
        return configurations.map((params) => {
          return [extension].concat(
            Object.keys(params).map((k) => {
              let values = params[k];
              if (!Array.isArray(values))
                values = [values];
              return values.map((v) => v === true ? k : `${k}=${v}`).join("; ");
            })
          ).join("; ");
        }).join(", ");
      }).join(", ");
    }
    module2.exports = { format, parse };
  }
});

// node_modules/_ws@8.14.2@ws/lib/websocket.js
var require_websocket = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/websocket.js"(exports2, module2) {
    "use strict";
    var EventEmitter = require("events");
    var https = require("https");
    var http = require("http");
    var net = require("net");
    var tls = require("tls");
    var { randomBytes, createHash } = require("crypto");
    var { Duplex, Readable } = require("stream");
    var { URL: URL2 } = require("url");
    var PerMessageDeflate = require_permessage_deflate();
    var Receiver = require_receiver();
    var Sender = require_sender();
    var {
      BINARY_TYPES,
      EMPTY_BUFFER,
      GUID,
      kForOnEventAttribute,
      kListener,
      kStatusCode,
      kWebSocket,
      NOOP
    } = require_constants2();
    var {
      EventTarget: { addEventListener, removeEventListener }
    } = require_event_target();
    var { format, parse } = require_extension();
    var { toBuffer } = require_buffer_util();
    var closeTimeout = 30 * 1e3;
    var kAborted = Symbol("kAborted");
    var protocolVersions = [8, 13];
    var readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
    var subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
    var WebSocket = class extends EventEmitter {
      constructor(address, protocols, options) {
        super();
        this._binaryType = BINARY_TYPES[0];
        this._closeCode = 1006;
        this._closeFrameReceived = false;
        this._closeFrameSent = false;
        this._closeMessage = EMPTY_BUFFER;
        this._closeTimer = null;
        this._extensions = {};
        this._paused = false;
        this._protocol = "";
        this._readyState = WebSocket.CONNECTING;
        this._receiver = null;
        this._sender = null;
        this._socket = null;
        if (address !== null) {
          this._bufferedAmount = 0;
          this._isServer = false;
          this._redirects = 0;
          if (protocols === void 0) {
            protocols = [];
          } else if (!Array.isArray(protocols)) {
            if (typeof protocols === "object" && protocols !== null) {
              options = protocols;
              protocols = [];
            } else {
              protocols = [protocols];
            }
          }
          initAsClient(this, address, protocols, options);
        } else {
          this._isServer = true;
        }
      }
      get binaryType() {
        return this._binaryType;
      }
      set binaryType(type) {
        if (!BINARY_TYPES.includes(type))
          return;
        this._binaryType = type;
        if (this._receiver)
          this._receiver._binaryType = type;
      }
      get bufferedAmount() {
        if (!this._socket)
          return this._bufferedAmount;
        return this._socket._writableState.length + this._sender._bufferedBytes;
      }
      get extensions() {
        return Object.keys(this._extensions).join();
      }
      get isPaused() {
        return this._paused;
      }
      get onclose() {
        return null;
      }
      get onerror() {
        return null;
      }
      get onopen() {
        return null;
      }
      get onmessage() {
        return null;
      }
      get protocol() {
        return this._protocol;
      }
      get readyState() {
        return this._readyState;
      }
      get url() {
        return this._url;
      }
      setSocket(socket, head, options) {
        const receiver = new Receiver({
          binaryType: this.binaryType,
          extensions: this._extensions,
          isServer: this._isServer,
          maxPayload: options.maxPayload,
          skipUTF8Validation: options.skipUTF8Validation
        });
        this._sender = new Sender(socket, this._extensions, options.generateMask);
        this._receiver = receiver;
        this._socket = socket;
        receiver[kWebSocket] = this;
        socket[kWebSocket] = this;
        receiver.on("conclude", receiverOnConclude);
        receiver.on("drain", receiverOnDrain);
        receiver.on("error", receiverOnError);
        receiver.on("message", receiverOnMessage);
        receiver.on("ping", receiverOnPing);
        receiver.on("pong", receiverOnPong);
        if (socket.setTimeout)
          socket.setTimeout(0);
        if (socket.setNoDelay)
          socket.setNoDelay();
        if (head.length > 0)
          socket.unshift(head);
        socket.on("close", socketOnClose);
        socket.on("data", socketOnData);
        socket.on("end", socketOnEnd);
        socket.on("error", socketOnError);
        this._readyState = WebSocket.OPEN;
        this.emit("open");
      }
      emitClose() {
        if (!this._socket) {
          this._readyState = WebSocket.CLOSED;
          this.emit("close", this._closeCode, this._closeMessage);
          return;
        }
        if (this._extensions[PerMessageDeflate.extensionName]) {
          this._extensions[PerMessageDeflate.extensionName].cleanup();
        }
        this._receiver.removeAllListeners();
        this._readyState = WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
      }
      close(code, data) {
        if (this.readyState === WebSocket.CLOSED)
          return;
        if (this.readyState === WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this.readyState === WebSocket.CLOSING) {
          if (this._closeFrameSent && (this._closeFrameReceived || this._receiver._writableState.errorEmitted)) {
            this._socket.end();
          }
          return;
        }
        this._readyState = WebSocket.CLOSING;
        this._sender.close(code, data, !this._isServer, (err) => {
          if (err)
            return;
          this._closeFrameSent = true;
          if (this._closeFrameReceived || this._receiver._writableState.errorEmitted) {
            this._socket.end();
          }
        });
        this._closeTimer = setTimeout(
          this._socket.destroy.bind(this._socket),
          closeTimeout
        );
      }
      pause() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
          return;
        }
        this._paused = true;
        this._socket.pause();
      }
      ping(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.ping(data || EMPTY_BUFFER, mask, cb);
      }
      pong(data, mask, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof data === "function") {
          cb = data;
          data = mask = void 0;
        } else if (typeof mask === "function") {
          cb = mask;
          mask = void 0;
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        if (mask === void 0)
          mask = !this._isServer;
        this._sender.pong(data || EMPTY_BUFFER, mask, cb);
      }
      resume() {
        if (this.readyState === WebSocket.CONNECTING || this.readyState === WebSocket.CLOSED) {
          return;
        }
        this._paused = false;
        if (!this._receiver._writableState.needDrain)
          this._socket.resume();
      }
      send(data, options, cb) {
        if (this.readyState === WebSocket.CONNECTING) {
          throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
        }
        if (typeof options === "function") {
          cb = options;
          options = {};
        }
        if (typeof data === "number")
          data = data.toString();
        if (this.readyState !== WebSocket.OPEN) {
          sendAfterClose(this, data, cb);
          return;
        }
        const opts = {
          binary: typeof data !== "string",
          mask: !this._isServer,
          compress: true,
          fin: true,
          ...options
        };
        if (!this._extensions[PerMessageDeflate.extensionName]) {
          opts.compress = false;
        }
        this._sender.send(data || EMPTY_BUFFER, opts, cb);
      }
      terminate() {
        if (this.readyState === WebSocket.CLOSED)
          return;
        if (this.readyState === WebSocket.CONNECTING) {
          const msg = "WebSocket was closed before the connection was established";
          abortHandshake(this, this._req, msg);
          return;
        }
        if (this._socket) {
          this._readyState = WebSocket.CLOSING;
          this._socket.destroy();
        }
      }
    };
    Object.defineProperty(WebSocket, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket.prototype, "CONNECTING", {
      enumerable: true,
      value: readyStates.indexOf("CONNECTING")
    });
    Object.defineProperty(WebSocket, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket.prototype, "OPEN", {
      enumerable: true,
      value: readyStates.indexOf("OPEN")
    });
    Object.defineProperty(WebSocket, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket.prototype, "CLOSING", {
      enumerable: true,
      value: readyStates.indexOf("CLOSING")
    });
    Object.defineProperty(WebSocket, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    Object.defineProperty(WebSocket.prototype, "CLOSED", {
      enumerable: true,
      value: readyStates.indexOf("CLOSED")
    });
    [
      "binaryType",
      "bufferedAmount",
      "extensions",
      "isPaused",
      "protocol",
      "readyState",
      "url"
    ].forEach((property) => {
      Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
    });
    ["open", "error", "close", "message"].forEach((method) => {
      Object.defineProperty(WebSocket.prototype, `on${method}`, {
        enumerable: true,
        get() {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute])
              return listener[kListener];
          }
          return null;
        },
        set(handler) {
          for (const listener of this.listeners(method)) {
            if (listener[kForOnEventAttribute]) {
              this.removeListener(method, listener);
              break;
            }
          }
          if (typeof handler !== "function")
            return;
          this.addEventListener(method, handler, {
            [kForOnEventAttribute]: true
          });
        }
      });
    });
    WebSocket.prototype.addEventListener = addEventListener;
    WebSocket.prototype.removeEventListener = removeEventListener;
    module2.exports = WebSocket;
    function initAsClient(websocket, address, protocols, options) {
      const opts = {
        protocolVersion: protocolVersions[1],
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: true,
        followRedirects: false,
        maxRedirects: 10,
        ...options,
        createConnection: void 0,
        socketPath: void 0,
        hostname: void 0,
        protocol: void 0,
        timeout: void 0,
        method: "GET",
        host: void 0,
        path: void 0,
        port: void 0
      };
      if (!protocolVersions.includes(opts.protocolVersion)) {
        throw new RangeError(
          `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
        );
      }
      let parsedUrl;
      if (address instanceof URL2) {
        parsedUrl = address;
      } else {
        try {
          parsedUrl = new URL2(address);
        } catch (e) {
          throw new SyntaxError(`Invalid URL: ${address}`);
        }
      }
      if (parsedUrl.protocol === "http:") {
        parsedUrl.protocol = "ws:";
      } else if (parsedUrl.protocol === "https:") {
        parsedUrl.protocol = "wss:";
      }
      websocket._url = parsedUrl.href;
      const isSecure = parsedUrl.protocol === "wss:";
      const isIpcUrl = parsedUrl.protocol === "ws+unix:";
      let invalidUrlMessage;
      if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
        invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https", or "ws+unix:"`;
      } else if (isIpcUrl && !parsedUrl.pathname) {
        invalidUrlMessage = "The URL's pathname is empty";
      } else if (parsedUrl.hash) {
        invalidUrlMessage = "The URL contains a fragment identifier";
      }
      if (invalidUrlMessage) {
        const err = new SyntaxError(invalidUrlMessage);
        if (websocket._redirects === 0) {
          throw err;
        } else {
          emitErrorAndClose(websocket, err);
          return;
        }
      }
      const defaultPort = isSecure ? 443 : 80;
      const key = randomBytes(16).toString("base64");
      const request = isSecure ? https.request : http.request;
      const protocolSet = /* @__PURE__ */ new Set();
      let perMessageDeflate;
      opts.createConnection = isSecure ? tlsConnect : netConnect;
      opts.defaultPort = opts.defaultPort || defaultPort;
      opts.port = parsedUrl.port || defaultPort;
      opts.host = parsedUrl.hostname.startsWith("[") ? parsedUrl.hostname.slice(1, -1) : parsedUrl.hostname;
      opts.headers = {
        ...opts.headers,
        "Sec-WebSocket-Version": opts.protocolVersion,
        "Sec-WebSocket-Key": key,
        Connection: "Upgrade",
        Upgrade: "websocket"
      };
      opts.path = parsedUrl.pathname + parsedUrl.search;
      opts.timeout = opts.handshakeTimeout;
      if (opts.perMessageDeflate) {
        perMessageDeflate = new PerMessageDeflate(
          opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
          false,
          opts.maxPayload
        );
        opts.headers["Sec-WebSocket-Extensions"] = format({
          [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
        });
      }
      if (protocols.length) {
        for (const protocol of protocols) {
          if (typeof protocol !== "string" || !subprotocolRegex.test(protocol) || protocolSet.has(protocol)) {
            throw new SyntaxError(
              "An invalid or duplicated subprotocol was specified"
            );
          }
          protocolSet.add(protocol);
        }
        opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
      }
      if (opts.origin) {
        if (opts.protocolVersion < 13) {
          opts.headers["Sec-WebSocket-Origin"] = opts.origin;
        } else {
          opts.headers.Origin = opts.origin;
        }
      }
      if (parsedUrl.username || parsedUrl.password) {
        opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
      }
      if (isIpcUrl) {
        const parts = opts.path.split(":");
        opts.socketPath = parts[0];
        opts.path = parts[1];
      }
      let req;
      if (opts.followRedirects) {
        if (websocket._redirects === 0) {
          websocket._originalIpc = isIpcUrl;
          websocket._originalSecure = isSecure;
          websocket._originalHostOrSocketPath = isIpcUrl ? opts.socketPath : parsedUrl.host;
          const headers = options && options.headers;
          options = { ...options, headers: {} };
          if (headers) {
            for (const [key2, value] of Object.entries(headers)) {
              options.headers[key2.toLowerCase()] = value;
            }
          }
        } else if (websocket.listenerCount("redirect") === 0) {
          const isSameHost = isIpcUrl ? websocket._originalIpc ? opts.socketPath === websocket._originalHostOrSocketPath : false : websocket._originalIpc ? false : parsedUrl.host === websocket._originalHostOrSocketPath;
          if (!isSameHost || websocket._originalSecure && !isSecure) {
            delete opts.headers.authorization;
            delete opts.headers.cookie;
            if (!isSameHost)
              delete opts.headers.host;
            opts.auth = void 0;
          }
        }
        if (opts.auth && !options.headers.authorization) {
          options.headers.authorization = "Basic " + Buffer.from(opts.auth).toString("base64");
        }
        req = websocket._req = request(opts);
        if (websocket._redirects) {
          websocket.emit("redirect", websocket.url, req);
        }
      } else {
        req = websocket._req = request(opts);
      }
      if (opts.timeout) {
        req.on("timeout", () => {
          abortHandshake(websocket, req, "Opening handshake has timed out");
        });
      }
      req.on("error", (err) => {
        if (req === null || req[kAborted])
          return;
        req = websocket._req = null;
        emitErrorAndClose(websocket, err);
      });
      req.on("response", (res) => {
        const location = res.headers.location;
        const statusCode = res.statusCode;
        if (location && opts.followRedirects && statusCode >= 300 && statusCode < 400) {
          if (++websocket._redirects > opts.maxRedirects) {
            abortHandshake(websocket, req, "Maximum redirects exceeded");
            return;
          }
          req.abort();
          let addr;
          try {
            addr = new URL2(location, address);
          } catch (e) {
            const err = new SyntaxError(`Invalid URL: ${location}`);
            emitErrorAndClose(websocket, err);
            return;
          }
          initAsClient(websocket, addr, protocols, options);
        } else if (!websocket.emit("unexpected-response", req, res)) {
          abortHandshake(
            websocket,
            req,
            `Unexpected server response: ${res.statusCode}`
          );
        }
      });
      req.on("upgrade", (res, socket, head) => {
        websocket.emit("upgrade", res);
        if (websocket.readyState !== WebSocket.CONNECTING)
          return;
        req = websocket._req = null;
        if (res.headers.upgrade.toLowerCase() !== "websocket") {
          abortHandshake(websocket, socket, "Invalid Upgrade header");
          return;
        }
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        if (res.headers["sec-websocket-accept"] !== digest) {
          abortHandshake(websocket, socket, "Invalid Sec-WebSocket-Accept header");
          return;
        }
        const serverProt = res.headers["sec-websocket-protocol"];
        let protError;
        if (serverProt !== void 0) {
          if (!protocolSet.size) {
            protError = "Server sent a subprotocol but none was requested";
          } else if (!protocolSet.has(serverProt)) {
            protError = "Server sent an invalid subprotocol";
          }
        } else if (protocolSet.size) {
          protError = "Server sent no subprotocol";
        }
        if (protError) {
          abortHandshake(websocket, socket, protError);
          return;
        }
        if (serverProt)
          websocket._protocol = serverProt;
        const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
        if (secWebSocketExtensions !== void 0) {
          if (!perMessageDeflate) {
            const message = "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          let extensions;
          try {
            extensions = parse(secWebSocketExtensions);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          const extensionNames = Object.keys(extensions);
          if (extensionNames.length !== 1 || extensionNames[0] !== PerMessageDeflate.extensionName) {
            const message = "Server indicated an extension that was not requested";
            abortHandshake(websocket, socket, message);
            return;
          }
          try {
            perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Extensions header";
            abortHandshake(websocket, socket, message);
            return;
          }
          websocket._extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
        }
        websocket.setSocket(socket, head, {
          generateMask: opts.generateMask,
          maxPayload: opts.maxPayload,
          skipUTF8Validation: opts.skipUTF8Validation
        });
      });
      if (opts.finishRequest) {
        opts.finishRequest(req, websocket);
      } else {
        req.end();
      }
    }
    function emitErrorAndClose(websocket, err) {
      websocket._readyState = WebSocket.CLOSING;
      websocket.emit("error", err);
      websocket.emitClose();
    }
    function netConnect(options) {
      options.path = options.socketPath;
      return net.connect(options);
    }
    function tlsConnect(options) {
      options.path = void 0;
      if (!options.servername && options.servername !== "") {
        options.servername = net.isIP(options.host) ? "" : options.host;
      }
      return tls.connect(options);
    }
    function abortHandshake(websocket, stream, message) {
      websocket._readyState = WebSocket.CLOSING;
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshake);
      if (stream.setHeader) {
        stream[kAborted] = true;
        stream.abort();
        if (stream.socket && !stream.socket.destroyed) {
          stream.socket.destroy();
        }
        process.nextTick(emitErrorAndClose, websocket, err);
      } else {
        stream.destroy(err);
        stream.once("error", websocket.emit.bind(websocket, "error"));
        stream.once("close", websocket.emitClose.bind(websocket));
      }
    }
    function sendAfterClose(websocket, data, cb) {
      if (data) {
        const length = toBuffer(data).length;
        if (websocket._socket)
          websocket._sender._bufferedBytes += length;
        else
          websocket._bufferedAmount += length;
      }
      if (cb) {
        const err = new Error(
          `WebSocket is not open: readyState ${websocket.readyState} (${readyStates[websocket.readyState]})`
        );
        process.nextTick(cb, err);
      }
    }
    function receiverOnConclude(code, reason) {
      const websocket = this[kWebSocket];
      websocket._closeFrameReceived = true;
      websocket._closeMessage = reason;
      websocket._closeCode = code;
      if (websocket._socket[kWebSocket] === void 0)
        return;
      websocket._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket._socket);
      if (code === 1005)
        websocket.close();
      else
        websocket.close(code, reason);
    }
    function receiverOnDrain() {
      const websocket = this[kWebSocket];
      if (!websocket.isPaused)
        websocket._socket.resume();
    }
    function receiverOnError(err) {
      const websocket = this[kWebSocket];
      if (websocket._socket[kWebSocket] !== void 0) {
        websocket._socket.removeListener("data", socketOnData);
        process.nextTick(resume, websocket._socket);
        websocket.close(err[kStatusCode]);
      }
      websocket.emit("error", err);
    }
    function receiverOnFinish() {
      this[kWebSocket].emitClose();
    }
    function receiverOnMessage(data, isBinary) {
      this[kWebSocket].emit("message", data, isBinary);
    }
    function receiverOnPing(data) {
      const websocket = this[kWebSocket];
      websocket.pong(data, !websocket._isServer, NOOP);
      websocket.emit("ping", data);
    }
    function receiverOnPong(data) {
      this[kWebSocket].emit("pong", data);
    }
    function resume(stream) {
      stream.resume();
    }
    function socketOnClose() {
      const websocket = this[kWebSocket];
      this.removeListener("close", socketOnClose);
      this.removeListener("data", socketOnData);
      this.removeListener("end", socketOnEnd);
      websocket._readyState = WebSocket.CLOSING;
      let chunk;
      if (!this._readableState.endEmitted && !websocket._closeFrameReceived && !websocket._receiver._writableState.errorEmitted && (chunk = websocket._socket.read()) !== null) {
        websocket._receiver.write(chunk);
      }
      websocket._receiver.end();
      this[kWebSocket] = void 0;
      clearTimeout(websocket._closeTimer);
      if (websocket._receiver._writableState.finished || websocket._receiver._writableState.errorEmitted) {
        websocket.emitClose();
      } else {
        websocket._receiver.on("error", receiverOnFinish);
        websocket._receiver.on("finish", receiverOnFinish);
      }
    }
    function socketOnData(chunk) {
      if (!this[kWebSocket]._receiver.write(chunk)) {
        this.pause();
      }
    }
    function socketOnEnd() {
      const websocket = this[kWebSocket];
      websocket._readyState = WebSocket.CLOSING;
      websocket._receiver.end();
      this.end();
    }
    function socketOnError() {
      const websocket = this[kWebSocket];
      this.removeListener("error", socketOnError);
      this.on("error", NOOP);
      if (websocket) {
        websocket._readyState = WebSocket.CLOSING;
        this.destroy();
      }
    }
  }
});

// node_modules/_ws@8.14.2@ws/lib/stream.js
var require_stream2 = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/stream.js"(exports2, module2) {
    "use strict";
    var { Duplex } = require("stream");
    function emitClose(stream) {
      stream.emit("close");
    }
    function duplexOnEnd() {
      if (!this.destroyed && this._writableState.finished) {
        this.destroy();
      }
    }
    function duplexOnError(err) {
      this.removeListener("error", duplexOnError);
      this.destroy();
      if (this.listenerCount("error") === 0) {
        this.emit("error", err);
      }
    }
    function createWebSocketStream(ws, options) {
      let terminateOnDestroy = true;
      const duplex = new Duplex({
        ...options,
        autoDestroy: false,
        emitClose: false,
        objectMode: false,
        writableObjectMode: false
      });
      ws.on("message", function message(msg, isBinary) {
        const data = !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
        if (!duplex.push(data))
          ws.pause();
      });
      ws.once("error", function error(err) {
        if (duplex.destroyed)
          return;
        terminateOnDestroy = false;
        duplex.destroy(err);
      });
      ws.once("close", function close() {
        if (duplex.destroyed)
          return;
        duplex.push(null);
      });
      duplex._destroy = function(err, callback) {
        if (ws.readyState === ws.CLOSED) {
          callback(err);
          process.nextTick(emitClose, duplex);
          return;
        }
        let called = false;
        ws.once("error", function error(err2) {
          called = true;
          callback(err2);
        });
        ws.once("close", function close() {
          if (!called)
            callback(err);
          process.nextTick(emitClose, duplex);
        });
        if (terminateOnDestroy)
          ws.terminate();
      };
      duplex._final = function(callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._final(callback);
          });
          return;
        }
        if (ws._socket === null)
          return;
        if (ws._socket._writableState.finished) {
          callback();
          if (duplex._readableState.endEmitted)
            duplex.destroy();
        } else {
          ws._socket.once("finish", function finish() {
            callback();
          });
          ws.close();
        }
      };
      duplex._read = function() {
        if (ws.isPaused)
          ws.resume();
      };
      duplex._write = function(chunk, encoding, callback) {
        if (ws.readyState === ws.CONNECTING) {
          ws.once("open", function open() {
            duplex._write(chunk, encoding, callback);
          });
          return;
        }
        ws.send(chunk, callback);
      };
      duplex.on("end", duplexOnEnd);
      duplex.on("error", duplexOnError);
      return duplex;
    }
    module2.exports = createWebSocketStream;
  }
});

// node_modules/_ws@8.14.2@ws/lib/subprotocol.js
var require_subprotocol = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/subprotocol.js"(exports2, module2) {
    "use strict";
    var { tokenChars } = require_validation();
    function parse(header) {
      const protocols = /* @__PURE__ */ new Set();
      let start = -1;
      let end = -1;
      let i = 0;
      for (i; i < header.length; i++) {
        const code = header.charCodeAt(i);
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1)
            start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1)
            end = i;
        } else if (code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1)
            end = i;
          const protocol2 = header.slice(start, end);
          if (protocols.has(protocol2)) {
            throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
          }
          protocols.add(protocol2);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
      if (start === -1 || end !== -1) {
        throw new SyntaxError("Unexpected end of input");
      }
      const protocol = header.slice(start, i);
      if (protocols.has(protocol)) {
        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
      }
      protocols.add(protocol);
      return protocols;
    }
    module2.exports = { parse };
  }
});

// node_modules/_ws@8.14.2@ws/lib/websocket-server.js
var require_websocket_server = __commonJS({
  "node_modules/_ws@8.14.2@ws/lib/websocket-server.js"(exports2, module2) {
    "use strict";
    var EventEmitter = require("events");
    var http = require("http");
    var { Duplex } = require("stream");
    var { createHash } = require("crypto");
    var extension = require_extension();
    var PerMessageDeflate = require_permessage_deflate();
    var subprotocol = require_subprotocol();
    var WebSocket = require_websocket();
    var { GUID, kWebSocket } = require_constants2();
    var keyRegex = /^[+/0-9A-Za-z]{22}==$/;
    var RUNNING = 0;
    var CLOSING = 1;
    var CLOSED = 2;
    var WebSocketServer = class extends EventEmitter {
      constructor(options, callback) {
        super();
        options = {
          maxPayload: 100 * 1024 * 1024,
          skipUTF8Validation: false,
          perMessageDeflate: false,
          handleProtocols: null,
          clientTracking: true,
          verifyClient: null,
          noServer: false,
          backlog: null,
          server: null,
          host: null,
          path: null,
          port: null,
          WebSocket,
          ...options
        };
        if (options.port == null && !options.server && !options.noServer || options.port != null && (options.server || options.noServer) || options.server && options.noServer) {
          throw new TypeError(
            'One and only one of the "port", "server", or "noServer" options must be specified'
          );
        }
        if (options.port != null) {
          this._server = http.createServer((req, res) => {
            const body = http.STATUS_CODES[426];
            res.writeHead(426, {
              "Content-Length": body.length,
              "Content-Type": "text/plain"
            });
            res.end(body);
          });
          this._server.listen(
            options.port,
            options.host,
            options.backlog,
            callback
          );
        } else if (options.server) {
          this._server = options.server;
        }
        if (this._server) {
          const emitConnection = this.emit.bind(this, "connection");
          this._removeListeners = addListeners(this._server, {
            listening: this.emit.bind(this, "listening"),
            error: this.emit.bind(this, "error"),
            upgrade: (req, socket, head) => {
              this.handleUpgrade(req, socket, head, emitConnection);
            }
          });
        }
        if (options.perMessageDeflate === true)
          options.perMessageDeflate = {};
        if (options.clientTracking) {
          this.clients = /* @__PURE__ */ new Set();
          this._shouldEmitClose = false;
        }
        this.options = options;
        this._state = RUNNING;
      }
      address() {
        if (this.options.noServer) {
          throw new Error('The server is operating in "noServer" mode');
        }
        if (!this._server)
          return null;
        return this._server.address();
      }
      close(cb) {
        if (this._state === CLOSED) {
          if (cb) {
            this.once("close", () => {
              cb(new Error("The server is not running"));
            });
          }
          process.nextTick(emitClose, this);
          return;
        }
        if (cb)
          this.once("close", cb);
        if (this._state === CLOSING)
          return;
        this._state = CLOSING;
        if (this.options.noServer || this.options.server) {
          if (this._server) {
            this._removeListeners();
            this._removeListeners = this._server = null;
          }
          if (this.clients) {
            if (!this.clients.size) {
              process.nextTick(emitClose, this);
            } else {
              this._shouldEmitClose = true;
            }
          } else {
            process.nextTick(emitClose, this);
          }
        } else {
          const server = this._server;
          this._removeListeners();
          this._removeListeners = this._server = null;
          server.close(() => {
            emitClose(this);
          });
        }
      }
      shouldHandle(req) {
        if (this.options.path) {
          const index = req.url.indexOf("?");
          const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
          if (pathname !== this.options.path)
            return false;
        }
        return true;
      }
      handleUpgrade(req, socket, head, cb) {
        socket.on("error", socketOnError);
        const key = req.headers["sec-websocket-key"];
        const version = +req.headers["sec-websocket-version"];
        if (req.method !== "GET") {
          const message = "Invalid HTTP method";
          abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
          return;
        }
        if (req.headers.upgrade.toLowerCase() !== "websocket") {
          const message = "Invalid Upgrade header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (!key || !keyRegex.test(key)) {
          const message = "Missing or invalid Sec-WebSocket-Key header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (version !== 8 && version !== 13) {
          const message = "Missing or invalid Sec-WebSocket-Version header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
        if (!this.shouldHandle(req)) {
          abortHandshake(socket, 400);
          return;
        }
        const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
        let protocols = /* @__PURE__ */ new Set();
        if (secWebSocketProtocol !== void 0) {
          try {
            protocols = subprotocol.parse(secWebSocketProtocol);
          } catch (err) {
            const message = "Invalid Sec-WebSocket-Protocol header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
        const extensions = {};
        if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
          const perMessageDeflate = new PerMessageDeflate(
            this.options.perMessageDeflate,
            true,
            this.options.maxPayload
          );
          try {
            const offers = extension.parse(secWebSocketExtensions);
            if (offers[PerMessageDeflate.extensionName]) {
              perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
              extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
            }
          } catch (err) {
            const message = "Invalid or unacceptable Sec-WebSocket-Extensions header";
            abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
            return;
          }
        }
        if (this.options.verifyClient) {
          const info = {
            origin: req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
            secure: !!(req.socket.authorized || req.socket.encrypted),
            req
          };
          if (this.options.verifyClient.length === 2) {
            this.options.verifyClient(info, (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            });
            return;
          }
          if (!this.options.verifyClient(info))
            return abortHandshake(socket, 401);
        }
        this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
      }
      completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
        if (!socket.readable || !socket.writable)
          return socket.destroy();
        if (socket[kWebSocket]) {
          throw new Error(
            "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
          );
        }
        if (this._state > RUNNING)
          return abortHandshake(socket, 503);
        const digest = createHash("sha1").update(key + GUID).digest("base64");
        const headers = [
          "HTTP/1.1 101 Switching Protocols",
          "Upgrade: websocket",
          "Connection: Upgrade",
          `Sec-WebSocket-Accept: ${digest}`
        ];
        const ws = new this.options.WebSocket(null);
        if (protocols.size) {
          const protocol = this.options.handleProtocols ? this.options.handleProtocols(protocols, req) : protocols.values().next().value;
          if (protocol) {
            headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
            ws._protocol = protocol;
          }
        }
        if (extensions[PerMessageDeflate.extensionName]) {
          const params = extensions[PerMessageDeflate.extensionName].params;
          const value = extension.format({
            [PerMessageDeflate.extensionName]: [params]
          });
          headers.push(`Sec-WebSocket-Extensions: ${value}`);
          ws._extensions = extensions;
        }
        this.emit("headers", headers, req);
        socket.write(headers.concat("\r\n").join("\r\n"));
        socket.removeListener("error", socketOnError);
        ws.setSocket(socket, head, {
          maxPayload: this.options.maxPayload,
          skipUTF8Validation: this.options.skipUTF8Validation
        });
        if (this.clients) {
          this.clients.add(ws);
          ws.on("close", () => {
            this.clients.delete(ws);
            if (this._shouldEmitClose && !this.clients.size) {
              process.nextTick(emitClose, this);
            }
          });
        }
        cb(ws, req);
      }
    };
    module2.exports = WebSocketServer;
    function addListeners(server, map) {
      for (const event of Object.keys(map))
        server.on(event, map[event]);
      return function removeListeners() {
        for (const event of Object.keys(map)) {
          server.removeListener(event, map[event]);
        }
      };
    }
    function emitClose(server) {
      server._state = CLOSED;
      server.emit("close");
    }
    function socketOnError() {
      this.destroy();
    }
    function abortHandshake(socket, code, message, headers) {
      message = message || http.STATUS_CODES[code];
      headers = {
        Connection: "close",
        "Content-Type": "text/html",
        "Content-Length": Buffer.byteLength(message),
        ...headers
      };
      socket.once("finish", socket.destroy);
      socket.end(
        `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r
` + Object.keys(headers).map((h) => `${h}: ${headers[h]}`).join("\r\n") + "\r\n\r\n" + message
      );
    }
    function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
      if (server.listenerCount("wsClientError")) {
        const err = new Error(message);
        Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
        server.emit("wsClientError", err, socket, req);
      } else {
        abortHandshake(socket, code, message);
      }
    }
  }
});

// node_modules/_ws@8.14.2@ws/index.js
var require_ws_8_14 = __commonJS({
  "node_modules/_ws@8.14.2@ws/index.js"(exports2, module2) {
    "use strict";
    var WebSocket = require_websocket();
    WebSocket.createWebSocketStream = require_stream2();
    WebSocket.Server = require_websocket_server();
    WebSocket.Receiver = require_receiver();
    WebSocket.Sender = require_sender();
    WebSocket.WebSocket = WebSocket;
    WebSocket.WebSocketServer = WebSocket.Server;
    module2.exports = WebSocket;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/transport/websocket.js
var require_websocket2 = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/transport/websocket.js"(exports2) {
    var util = require_util();
    var log = require_log();
    var serializer = require_serializer();
    function Factory(options) {
      var self2 = this;
      util.assert(options.url !== void 0, "options.url missing");
      util.assert(typeof options.url === "string", "options.url must be a string");
      if (!options.serializers) {
        options.serializers = [new serializer.JSONSerializer()];
        if (serializer.MsgpackSerializer) {
          options.serializers.push(new serializer.MsgpackSerializer());
        }
      } else {
        util.assert(Array.isArray(options.serializers), "options.serializers must be an array");
      }
      if (!options.protocols) {
        options.protocols = [];
        options.serializers.forEach(function(ser) {
          options.protocols.push("wamp.2." + ser.SERIALIZER_ID);
        });
      } else {
        util.assert(Array.isArray(options.protocols), "options.protocols must be an array");
      }
      if (options.autoping_interval) {
        util.assert(options.autoping_interval > 0, "options.autoping_interval must be greater than 0");
        options.autoping_interval = options.autoping_interval * 1e3;
      } else {
        options.autoping_interval = 1e4;
      }
      if (options.autoping_timeout) {
        util.assert(options.autoping_timeout > 0, "options.autoping_timeout must be greater than 0");
        options.autoping_timeout = options.autoping_timeout * 1e3;
      } else {
        options.autoping_timeout = 5e3;
      }
      if (options.autoping_size) {
        util.assert(
          options.autoping_size >= 4 && options.autoping_size <= 125,
          "options.autoping_size must be between 4 and 125"
        );
      } else {
        options.autoping_size = 4;
      }
      self2._options = options;
    }
    Factory.prototype.type = "websocket";
    Factory.prototype.create = function() {
      var self2 = this;
      var transport = {};
      transport.protocol = void 0;
      transport.serializer = void 0;
      transport.send = void 0;
      transport.close = void 0;
      transport.onmessage = function() {
      };
      transport.onopen = function() {
      };
      transport.onclose = function() {
      };
      transport.info = {
        type: "websocket",
        url: self2._options.url,
        protocol: null
      };
      if ("WebSocket" in global) {
        (function() {
          var websocket;
          if (self2._options.protocols) {
            websocket = new global.WebSocket(self2._options.url, self2._options.protocols);
          } else {
            websocket = new global.WebSocket(self2._options.url);
          }
          websocket.binaryType = "arraybuffer";
          websocket.onmessage = function(evt) {
            log.debug("WebSocket transport receive", evt.data);
            var msg = transport.serializer.unserialize(evt.data);
            transport.onmessage(msg);
          };
          websocket.onopen = function() {
            var serializer_part = websocket.protocol.split(".")[2];
            for (var index in self2._options.serializers) {
              var serializer2 = self2._options.serializers[index];
              if (serializer2.SERIALIZER_ID == serializer_part) {
                transport.serializer = serializer2;
                break;
              }
            }
            transport.info.protocol = websocket.protocol;
            transport.onopen();
          };
          websocket.onclose = function(evt) {
            var details = {
              code: evt.code,
              reason: evt.message,
              wasClean: evt.wasClean
            };
            transport.onclose(details);
          };
          transport.send = function(msg) {
            var payload = transport.serializer.serialize(msg);
            log.debug("WebSocket transport send", payload);
            websocket.send(payload);
          };
          transport.close = function(code, reason) {
            websocket.close(code, reason);
          };
        })();
      } else {
        (function() {
          var WebSocket = require_ws_8_14();
          var randomBytes = require_nacl_fast().randomBytes;
          var websocket;
          var options = {
            agent: self2._options.agent,
            headers: self2._options.headers
          };
          var protocols;
          if (self2._options.protocols) {
            protocols = self2._options.protocols;
            if (Array.isArray(protocols)) {
              protocols = protocols.join(",");
            }
            options.protocol = protocols;
          }
          if (self2._options.url.startsWith("wss://") && self2._options.tlsConfiguration) {
            if (self2._options.tlsConfiguration.ca && self2._options.tlsConfiguration.cert && self2._options.tlsConfiguration.key) {
              log.debug("Using TLS Client Authentication.");
              options.ca = self2._options.tlsConfiguration.ca;
              options.cert = self2._options.tlsConfiguration.cert;
              options.key = self2._options.tlsConfiguration.key;
              options.rejectUnauthorized = false;
            } else {
              log.debug("Not using TLS Client Authentication. tlsConfiguration should include 'ca' 'cert' and 'key' parameters.");
            }
          } else {
            log.debug("Not using TLS Client Authentication.");
          }
          websocket = new WebSocket(self2._options.url, protocols, options);
          transport.send = function(msg) {
            var payload = transport.serializer.serialize(msg);
            websocket.send(payload, { binary: transport.serializer.BINARY });
          };
          transport.close = function(code, reason) {
            websocket.close();
          };
          var auto_ping_interval;
          var last_read_time;
          function update_last_read_time() {
            last_read_time = new Date();
          }
          function get_time_since_last_read() {
            return new Date() - last_read_time;
          }
          websocket.on("open", function() {
            update_last_read_time();
            var serializer_part = websocket.protocol.split(".")[2];
            for (var index in self2._options.serializers) {
              var serializer2 = self2._options.serializers[index];
              if (serializer2.SERIALIZER_ID == serializer_part) {
                transport.serializer = serializer2;
                break;
              }
            }
            transport.info.protocol = websocket.protocol;
            websocket.isAlive = true;
            auto_ping_interval = setInterval(function ping() {
              if (websocket.isAlive === false) {
                clearInterval(auto_ping_interval);
                return websocket.terminate();
              }
              if (get_time_since_last_read() < self2._options.autoping_interval) {
                return;
              }
              websocket.isAlive = false;
              websocket.ping(randomBytes(self2._options.autoping_size));
            }, self2._options.autoping_interval);
            transport.onopen();
          });
          websocket.on("pong", function() {
            update_last_read_time();
            this.isAlive = true;
          });
          websocket.on("message", function(data, flags) {
            update_last_read_time();
            var msg = transport.serializer.unserialize(data);
            transport.onmessage(msg);
          });
          websocket.on("close", function(code, message) {
            if (auto_ping_interval != null)
              clearInterval(auto_ping_interval);
            var details = {
              code,
              reason: message,
              wasClean: code === 1e3
            };
            transport.onclose(details);
          });
          websocket.on("error", function(error) {
            if (auto_ping_interval != null)
              clearInterval(auto_ping_interval);
            var details = {
              code: 1006,
              reason: "",
              wasClean: false
            };
            transport.onclose(details);
          });
        })();
      }
      return transport;
    };
    exports2.Factory = Factory;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/transport/longpoll.js
var require_longpoll = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/transport/longpoll.js"(exports2) {
    var when = require_when();
    var util = require_util();
    var log = require_log();
    var serializer = require_serializer();
    function Factory(options) {
      var self2 = this;
      util.assert(options.url !== void 0, "options.url missing");
      util.assert(typeof options.url === "string", "options.url must be a string");
      self2._options = options;
    }
    Factory.prototype.type = "longpoll";
    Factory.prototype.create = function() {
      var self2 = this;
      log.debug("longpoll.Factory.create");
      var transport = {};
      transport.protocol = void 0;
      transport.serializer = new serializer.JSONSerializer();
      transport.send = void 0;
      transport.close = void 0;
      transport.onmessage = function() {
      };
      transport.onopen = function() {
      };
      transport.onclose = function() {
      };
      transport.info = {
        type: "longpoll",
        url: null,
        protocol: "wamp.2.json"
      };
      transport._run = function() {
        var session_info = null;
        var send_buffer = [];
        var is_closing = false;
        var txseq = 0;
        var rxseq = 0;
        var options = { "protocols": ["wamp.2.json"] };
        var request_timeout = self2._options.request_timeout || 12e3;
        util.http_post(self2._options.url + "/open", JSON.stringify(options), request_timeout).then(
          function(payload) {
            session_info = JSON.parse(payload);
            var base_url = self2._options.url + "/" + session_info.transport;
            transport.info.url = base_url;
            log.debug("longpoll.Transport: open", session_info);
            transport.close = function(code, reason) {
              if (is_closing) {
                throw "transport is already closing";
              }
              is_closing = true;
              util.http_post(base_url + "/close", null, request_timeout).then(
                function() {
                  log.debug("longpoll.Transport: transport closed");
                  var details = {
                    code: 1e3,
                    reason: "transport closed",
                    wasClean: true
                  };
                  transport.onclose(details);
                },
                function(err) {
                  log.debug("longpoll.Transport: could not close transport", err.code, err.text);
                }
              );
            };
            transport.send = function(msg) {
              if (is_closing) {
                throw "transport is closing or closed already";
              }
              txseq += 1;
              log.debug("longpoll.Transport: sending message ...", msg);
              var payload2 = JSON.stringify(msg);
              util.http_post(base_url + "/send", payload2, request_timeout).then(
                function() {
                  log.debug("longpoll.Transport: message sent");
                },
                function(err) {
                  log.debug("longpoll.Transport: could not send message", err.code, err.text);
                  is_closing = true;
                  var details = {
                    code: 1001,
                    reason: "transport send failure (HTTP/POST status " + err.code + " - '" + err.text + "')",
                    wasClean: false
                  };
                  transport.onclose(details);
                }
              );
            };
            function receive() {
              rxseq += 1;
              log.debug("longpoll.Transport: polling for message ...");
              util.http_post(base_url + "/receive", null, request_timeout).then(
                function(payload2) {
                  if (payload2) {
                    var msg = JSON.parse(payload2);
                    log.debug("longpoll.Transport: message received", msg);
                    transport.onmessage(msg);
                  }
                  if (!is_closing) {
                    receive();
                  }
                },
                function(err) {
                  log.debug("longpoll.Transport: could not receive message", err.code, err.text);
                  is_closing = true;
                  var details = {
                    code: 1001,
                    reason: "transport receive failure (HTTP/POST status " + err.code + " - '" + err.text + "')",
                    wasClean: false
                  };
                  transport.onclose(details);
                }
              );
            }
            receive();
            transport.onopen();
          },
          function(err) {
            log.debug("longpoll.Transport: could not open transport", err.code, err.text);
            is_closing = true;
            var details = {
              code: 1001,
              reason: "transport open failure (HTTP/POST status " + err.code + " - '" + err.text + "')",
              wasClean: false
            };
            transport.onclose(details);
          }
        );
      };
      transport._run();
      return transport;
    };
    exports2.Factory = Factory;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/transport/rawsocket.js
var require_rawsocket = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/transport/rawsocket.js"(exports2) {
    var util = require_util();
    var log = require_log();
    var serializer = require_serializer();
    var EventEmitter = require("events").EventEmitter;
    function Factory(options) {
      var self2 = this;
      if (!options.protocols) {
        options.protocols = ["wamp.2.json"];
      } else {
        util.assert(Array.isArray(options.protocols), "options.protocols must be an array");
      }
      options.rawsocket_max_len_exp = options.rawsocket_max_len_exp || 24;
      self2._options = options;
    }
    Factory.prototype.type = "rawsocket";
    Factory.prototype.create = function() {
      var self2 = this;
      var transport = {};
      transport.protocol = void 0;
      transport.serializer = new serializer.JSONSerializer();
      transport.send = void 0;
      transport.close = void 0;
      transport.onmessage = function() {
      };
      transport.onopen = function() {
      };
      transport.onclose = function() {
      };
      transport.info = {
        type: "rawsocket",
        url: null,
        protocol: "wamp.2.json"
      };
      if (global.process && global.process.versions.node) {
        (function() {
          var net = require("net");
          var socket, protocol;
          if (self2._options.path) {
            connectionOptions = {
              path: self2._options.path,
              allowHalfOpen: true
            };
          } else if (self2._options.port) {
            connectionOptions = {
              port: self2._options.port || 8e3,
              host: self2._options.host || "localhost",
              allowHalfOpen: true
            };
          } else {
            throw "You must specify a host/port combination or a unix socket path to connect to";
          }
          socket = net.connect(connectionOptions);
          protocol = new Protocol(socket, {
            serializer: "json",
            max_len_exp: self2._options.rawsocket_max_len_exp
          });
          protocol.on("connect", function(msg) {
            log.debug("RawSocket transport negociated");
            transport.onopen(msg);
          });
          protocol.on("data", function(msg) {
            log.debug("RawSocket transport received", msg);
            transport.onmessage(msg);
          });
          protocol.on("close", function(had_error) {
            log.debug("RawSocket transport closed");
            transport.onclose({
              code: 999,
              reason: "",
              wasClean: !had_error
            });
          });
          protocol.on("error", function(error) {
            log.debug("RawSocket transport error", error);
          });
          transport.close = function(code, reason) {
            log.debug("RawSocket transport closing", code, reason);
            protocol.close();
          };
          transport.send = function(msg) {
            log.debug("RawSocket transport sending", msg);
            protocol.write(msg);
          };
        })();
      } else {
        throw "No RawSocket support in browser";
      }
      return transport;
    };
    function Protocol(stream, options) {
      this._options = {
        _peer_serializer: null,
        _peer_max_len_exp: 0
      };
      this._options = util.defaults(this._options, options, this.DEFAULT_OPTIONS);
      util.assert(
        this._options.serializer in this.SERIALIZERS,
        "Unsupported serializer: " + this._options.serializer
      );
      util.assert(
        this._options.max_len_exp >= 9 && this._options.max_len_exp <= 36,
        "Message length out of bounds [9, 36]: " + this._options.max_len_exp
      );
      util.assert(
        !this._options.autoping || Number.isInteger(this._options.autoping) && this._options.autoping >= 0,
        "Autoping interval must be positive"
      );
      util.assert(
        !this._options.ping_timeout || Number.isInteger(this._options.ping_timeout) && this._options.ping_timeout >= 0,
        "Ping timeout duration must be positive"
      );
      util.assert(
        !this._options.packet_timeout || Number.isInteger(this._options.packet_timeout) && this._options.packet_timeout >= 0,
        "Packet timeout duration must be positive"
      );
      util.assert(
        !this._options.autoping || !this._options.ping_timeout || this._options.autoping > this._options.ping_timeout,
        "Autoping interval (" + this._options.autoping + ") must be lower than ping timeout (" + this._options.ping_timeout + ")"
      );
      this._ping_timeout = null;
      this._ping_payload = null;
      this._ping_interval = null;
      this._status = this.STATUS.UNINITIATED;
      this._stream = stream;
      this._emitter = new EventEmitter();
      this._buffer = new Buffer(4);
      this._bufferLen = 0;
      this._msgLen = 0;
      var self2 = this;
      this._stream.on("data", function(data) {
        self2._read(data);
      });
      this._stream.on("connect", function() {
        self2._handshake();
      });
      var proxyEvents = [
        "close",
        "drain",
        "end",
        "error",
        "timeout"
      ];
      proxyEvents.forEach(function(evt) {
        self2._stream.on(evt, function(data) {
          self2._emitter.emit(evt, data);
        });
      });
    }
    Protocol.prototype._MAGIC_BYTE = 127;
    Protocol.prototype.SERIALIZERS = {
      json: 1
    };
    Protocol.prototype.STATUS = {
      CLOSED: -1,
      UNINITIATED: 0,
      NEGOCIATING: 1,
      NEGOCIATED: 2,
      RXHEAD: 3,
      RXDATA: 4,
      RXPING: 5,
      RXPONG: 6
    };
    Protocol.prototype.ERRORS = {
      0: "illegal (must not be used)",
      1: "serializer unsupported",
      2: "maximum message length unacceptable",
      3: "use of reserved bits (unsupported feature)",
      4: "maximum connection count reached"
    };
    Protocol.prototype.MSGTYPES = {
      WAMP: 0,
      PING: 1,
      PONG: 2
    };
    Protocol.prototype.DEFAULT_OPTIONS = {
      fail_on_ping_timeout: true,
      strict_pong: true,
      ping_timeout: 2e3,
      autoping: 0,
      max_len_exp: 24,
      serializer: "json",
      packet_timeout: 2e3
    };
    Protocol.prototype.close = function() {
      this._status = this.STATUS.CLOSED;
      this._stream.end();
      return this.STATUS.CLOSED;
    };
    Protocol.prototype.write = function(msg, type, callback) {
      type = type === void 0 ? 0 : type;
      if (type === this.MSGTYPES.WAMP) {
        msg = JSON.stringify(msg);
      }
      var msgLen = Buffer.byteLength(msg, "utf8");
      if (msgLen > Math.pow(2, this._options._peer_max_len_exp)) {
        this._emitter.emit("error", new ProtocolError("Frame too big"));
        return;
      }
      var frame = new Buffer(msgLen + 4);
      frame.writeUInt8(type, 0);
      frame.writeUIntBE(msgLen, 1, 3);
      frame.write(msg, 4);
      this._stream.write(frame, callback);
    };
    Protocol.prototype.ping = function(payload) {
      payload = payload || 255;
      if (Number.isInteger(payload)) {
        var base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&~\"#'{([-|`_\\^@)]=},?;.:/!*$<>";
        var len = Math.max(1, payload);
        for (var i = 0; i < len; i++)
          payload += base.charAt(Math.random() * base.length | 0);
      }
      this._ping_payload = payload;
      return this.write(payload, this.MSGTYPES.PING, this._setupPingTimeout.bind(this));
    };
    Protocol.prototype._setupPingTimeout = function() {
      if (this._options.ping_timeout) {
        this._ping_timeout = setTimeout(this._onPingTimeout.bind(this), this._options.ping_timeout);
      }
    };
    Protocol.prototype._clearPingTimeout = function() {
      if (this._ping_timeout) {
        clearTimeout(this._ping_timeout);
        this._ping_timeout = null;
      }
    };
    Protocol.prototype._setupAutoPing = function() {
      this._clearAutoPing();
      if (this._options.autoping) {
        this._autoping_interval = setInterval(this.ping.bind(this), this._options.autoping);
      }
    };
    Protocol.prototype._clearAutoPing = function() {
      if (this._autoping_interval) {
        clearInterval(this._autoping_interval);
        this._autoping_interval = null;
      }
    };
    Protocol.prototype._onPingTimeout = function() {
      this._emitter.emit("error", new ProtocolError("PING timeout"));
      if (this._options.fail_on_ping_timeout) {
        this.close();
      }
    };
    Protocol.prototype._read = function(data) {
      var handler, frame;
      switch (this._status) {
        case this.STATUS.CLOSED:
        case this.STATUS.UNINITIATED:
          this._emitter.emit("error", ProtocolError("Unexpected packet"));
          break;
        case this.STATUS.NEGOCIATING:
          handler = this._handleHandshake;
          frame = 4;
          break;
        case this.STATUS.NEGOCIATED:
        case this.STATUS.RXHEAD:
          this._status = this.STATUS.RXHEAD;
          handler = this._handleHeaderPacket;
          frame = 4;
          break;
        case this.STATUS.RXDATA:
          handler = this._handleDataPacket;
          frame = this._msgLen;
          break;
        case this.STATUS.RXPING:
          handler = this._handlePingPacket;
          frame = this._msgLen;
          break;
        case this.STATUS.RXPONG:
          handler = this._handlePongPacket;
          frame = this._msgLen;
          break;
      }
      var chunks = this._splitBytes(data, frame);
      if (!chunks)
        return;
      this._status = handler.call(this, chunks[0]);
      if (chunks[1].length > 0) {
        this._read(chunks[1]);
      }
    };
    Protocol.prototype._handshake = function() {
      if (this._status !== this.STATUS.UNINITIATED) {
        throw "Handshake packet already sent";
      }
      var gday = new Buffer(4);
      gday.writeUInt8(this._MAGIC_BYTE, 0);
      gday.writeUInt8(this._options.max_len_exp - 9 << 4 | this.SERIALIZERS[this._options.serializer], 1);
      gday.writeUInt8(0, 2);
      gday.writeUInt8(0, 3);
      this._stream.write(gday);
      this._status = this.STATUS.NEGOCIATING;
    };
    Protocol.prototype._splitBytes = function(data, len) {
      if (len !== this._buffer.length) {
        this._buffer = new Buffer(len);
        this._bufferLen = 0;
      }
      data.copy(this._buffer, this._bufferLen);
      if (this._bufferLen + data.length < len) {
        this._bufferLen += data.length;
        return null;
      } else {
        var bytes = this._buffer.slice();
        var extra = data.slice(len - this._bufferLen);
        this._bufferLen = 0;
        return [bytes, extra];
      }
    };
    Protocol.prototype._handleHandshake = function(int32) {
      if (int32[0] !== this._MAGIC_BYTE) {
        this._emitter.emit(
          "error",
          new ProtocolError(
            "Invalid magic byte. Expected 0x" + this._MAGIC_BYTE.toString(16) + ", got 0x" + int32[0].toString(16)
          )
        );
        return this.close();
      }
      if ((int32[1] & 15) === 0) {
        var errcode = int32[1] >> 4;
        this._emitter.emit("error", new ProtocolError("Peer failed handshake: " + (this.ERRORS[errcode] || "0x" + errcode.toString(16))));
        return this.close();
      }
      this._options._peer_max_len_exp = (int32[1] >> 4) + 9;
      this._options._peer_serializer = int32[1] & 15;
      if (this._options._peer_serializer !== this.SERIALIZERS.json) {
        this._emitter.emit(
          "error",
          new ProtocolError(
            "Unsupported serializer: 0x" + this._options._peer_serializer.toString(16)
          )
        );
        return this.close();
      }
      this._emitter.emit("connect");
      this._setupAutoPing();
      return this.STATUS.NEGOCIATED;
    };
    Protocol.prototype._handleHeaderPacket = function(int32) {
      var type = int32[0] & 15;
      this._msgLen = int32.readUIntBE(1, 3);
      switch (type) {
        case this.MSGTYPES.WAMP:
          return this.STATUS.RXDATA;
        case this.MSGTYPES.PING:
          return this.STATUS.RXPING;
        case this.MSGTYPES.PONG:
          return this.STATUS.RXPONG;
        default:
          this._emitter.emit(
            "error",
            new ProtocolError(
              "Invalid frame type: 0x" + type.toString(16)
            )
          );
          return this.close();
      }
    };
    Protocol.prototype._handleDataPacket = function(buffer) {
      var msg;
      try {
        msg = JSON.parse(buffer.toString("utf8"));
      } catch (e) {
        this._emitter.emit(
          "error",
          new ProtocolError("Invalid JSON frame")
        );
        return this.STATUS.RXHEAD;
      }
      this._emitter.emit("data", msg);
      return this.STATUS.RXHEAD;
    };
    Protocol.prototype._handlePingPacket = function(buffer) {
      this.write(buffer.toString("utf8"), this.MSGTYPES.PONG);
      return this.STATUS.RXHEAD;
    };
    Protocol.prototype._handlePongPacket = function(buffer) {
      this._clearPingTimeout();
      if (this._options.strict_pong && this._ping_payload !== buffer.toString("utf8")) {
        this._emitter.emit("error", new ProtocolError(
          "PONG response payload doesn't match PING."
        ));
        return this.close();
      }
      return this.STATUS.RXHEAD;
    };
    Protocol.prototype.on = function(evt, handler) {
      return this._emitter.on(evt, handler);
    };
    Protocol.prototype.once = function(evt, handler) {
      return this._emitter.once(evt, handler);
    };
    Protocol.prototype.removeListener = function(evt, handler) {
      return this._emitter.removeListener(evt, handler);
    };
    var ProtocolError = exports2.ProtocolError = function(msg) {
      Error.apply(this, Array.prototype.splice.call(arguments));
      Error.captureStackTrace(this, this.constructor);
      this.message = msg;
      this.name = "ProtocolError";
    };
    ProtocolError.prototype = Object.create(Error.prototype);
    exports2.Factory = Factory;
    exports2.Protocol = Protocol;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/configure.js
var require_configure = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/configure.js"(exports2) {
    function Transports() {
      this._repository = {};
    }
    Transports.prototype.register = function(name, factory) {
      this._repository[name] = factory;
    };
    Transports.prototype.isRegistered = function(name) {
      return this._repository[name] ? true : false;
    };
    Transports.prototype.get = function(name) {
      if (this._repository[name] !== void 0) {
        return this._repository[name];
      } else {
        throw "no such transport: " + name;
      }
    };
    Transports.prototype.list = function() {
      var items = [];
      for (var name in this._repository) {
        items.push(name);
      }
      return items;
    };
    var _transports = new Transports();
    var websocket = require_websocket2();
    _transports.register("websocket", websocket.Factory);
    var longpoll = require_longpoll();
    _transports.register("longpoll", longpoll.Factory);
    var rawsocket = require_rawsocket();
    _transports.register("rawsocket", rawsocket.Factory);
    exports2.transports = _transports;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/auth/persona.js
var require_persona = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/auth/persona.js"(exports2) {
    var when = require_when();
    var when_fn = require_function2();
    function auth(session, user, extra) {
      var d = session.defer();
      navigator.id.watch({
        loggedInUser: user,
        onlogin: function(assertion) {
          d.resolve(assertion);
        },
        onlogout: function() {
          session.leave("wamp.close.logout");
        }
      });
      if (d.promise.then) {
        return d.promise;
      } else {
        return d;
      }
    }
    exports2.auth = auth;
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/core.js
var require_core = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/core.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports2, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof require === "function") {
          try {
            crypto = require("crypto");
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            init: function() {
            },
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j2 = 0; j2 < thatSigBytes; j2 += 4) {
                thisWords[thisSigBytes + j2 >>> 2] = thatWords[j2 >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/x64-core.js
var require_x64_core = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/x64-core.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        var X64Word = C_x64.Word = Base.extend({
          init: function(high, low) {
            this.high = high;
            this.low = low;
          }
        });
        var X64WordArray = C_x64.WordArray = Base.extend({
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
          },
          toX32: function() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }
            return clone;
          }
        });
      })();
      return CryptoJS;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/lib-typedarrays.js
var require_lib_typedarrays = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/lib-typedarrays.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/enc-utf16.js
var require_enc_utf16 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/enc-utf16.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        C_enc.Utf16LE = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS.enc.Utf16;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/enc-base64.js
var require_enc_base64 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/enc-base64.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j2 = 0; j2 < 4 && i + j2 * 0.75 < sigBytes; j2++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j2) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j2 = 0; j2 < map.length; j2++) {
                reverseMap[map.charCodeAt(j2)] = j2;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/enc-base64url.js
var require_enc_base64url = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/enc-base64url.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64url = C_enc.Base64url = {
          stringify: function(wordArray, urlSafe = true) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j2 = 0; j2 < 4 && i + j2 * 0.75 < sigBytes; j2++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j2) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          parse: function(base64Str, urlSafe = true) {
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j2 = 0; j2 < map.length; j2++) {
                reverseMap[map.charCodeAt(j2)] = j2;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/md5.js
var require_md5 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/md5.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/sha1.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/sha256.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return (n2 - (n2 | 0)) * 4294967296 | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f2 = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f2 ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f2;
              f2 = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H2[0] = H2[0] + a | 0;
            H2[1] = H2[1] + b | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e | 0;
            H2[5] = H2[5] + f2 | 0;
            H2[6] = H2[6] + g | 0;
            H2[7] = H2[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/sha224.js
var require_sha224 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/sha224.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_sha256());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      return CryptoJS.SHA224;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/sha512.js
var require_sha512 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/sha512.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [
          X64Word_create(1116352408, 3609767458),
          X64Word_create(1899447441, 602891725),
          X64Word_create(3049323471, 3964484399),
          X64Word_create(3921009573, 2173295548),
          X64Word_create(961987163, 4081628472),
          X64Word_create(1508970993, 3053834265),
          X64Word_create(2453635748, 2937671579),
          X64Word_create(2870763221, 3664609560),
          X64Word_create(3624381080, 2734883394),
          X64Word_create(310598401, 1164996542),
          X64Word_create(607225278, 1323610764),
          X64Word_create(1426881987, 3590304994),
          X64Word_create(1925078388, 4068182383),
          X64Word_create(2162078206, 991336113),
          X64Word_create(2614888103, 633803317),
          X64Word_create(3248222580, 3479774868),
          X64Word_create(3835390401, 2666613458),
          X64Word_create(4022224774, 944711139),
          X64Word_create(264347078, 2341262773),
          X64Word_create(604807628, 2007800933),
          X64Word_create(770255983, 1495990901),
          X64Word_create(1249150122, 1856431235),
          X64Word_create(1555081692, 3175218132),
          X64Word_create(1996064986, 2198950837),
          X64Word_create(2554220882, 3999719339),
          X64Word_create(2821834349, 766784016),
          X64Word_create(2952996808, 2566594879),
          X64Word_create(3210313671, 3203337956),
          X64Word_create(3336571891, 1034457026),
          X64Word_create(3584528711, 2466948901),
          X64Word_create(113926993, 3758326383),
          X64Word_create(338241895, 168717936),
          X64Word_create(666307205, 1188179964),
          X64Word_create(773529912, 1546045734),
          X64Word_create(1294757372, 1522805485),
          X64Word_create(1396182291, 2643833823),
          X64Word_create(1695183700, 2343527390),
          X64Word_create(1986661051, 1014477480),
          X64Word_create(2177026350, 1206759142),
          X64Word_create(2456956037, 344077627),
          X64Word_create(2730485921, 1290863460),
          X64Word_create(2820302411, 3158454273),
          X64Word_create(3259730800, 3505952657),
          X64Word_create(3345764771, 106217008),
          X64Word_create(3516065817, 3606008344),
          X64Word_create(3600352804, 1432725776),
          X64Word_create(4094571909, 1467031594),
          X64Word_create(275423344, 851169720),
          X64Word_create(430227734, 3100823752),
          X64Word_create(506948616, 1363258195),
          X64Word_create(659060556, 3750685593),
          X64Word_create(883997877, 3785050280),
          X64Word_create(958139571, 3318307427),
          X64Word_create(1322822218, 3812723403),
          X64Word_create(1537002063, 2003034995),
          X64Word_create(1747873779, 3602036899),
          X64Word_create(1955562222, 1575990012),
          X64Word_create(2024104815, 1125592928),
          X64Word_create(2227730452, 2716904306),
          X64Word_create(2361852424, 442776044),
          X64Word_create(2428436474, 593698344),
          X64Word_create(2756734187, 3733110249),
          X64Word_create(3204031479, 2999351573),
          X64Word_create(3329325298, 3815920427),
          X64Word_create(3391569614, 3928383900),
          X64Word_create(3515267271, 566280711),
          X64Word_create(3940187606, 3454069534),
          X64Word_create(4118630271, 4000239992),
          X64Word_create(116418474, 1914138554),
          X64Word_create(174292421, 2731055270),
          X64Word_create(289380356, 3203993006),
          X64Word_create(460393269, 320620315),
          X64Word_create(685471733, 587496836),
          X64Word_create(852142971, 1086792851),
          X64Word_create(1017036298, 365543100),
          X64Word_create(1126000580, 2618297676),
          X64Word_create(1288033470, 3409855158),
          X64Word_create(1501505948, 4234509866),
          X64Word_create(1607167915, 987167468),
          X64Word_create(1816402316, 1246189591)
        ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(1779033703, 4089235720),
              new X64Word.init(3144134277, 2227873595),
              new X64Word.init(1013904242, 4271175723),
              new X64Word.init(2773480762, 1595750129),
              new X64Word.init(1359893119, 2917565137),
              new X64Word.init(2600822924, 725511199),
              new X64Word.init(528734635, 4215389547),
              new X64Word.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = M[offset + i * 2] | 0;
                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil = Wil + gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil = Wil + Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 1024 / 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS.SHA512;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/sha384.js
var require_sha384 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/sha384.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core(), require_sha512());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./sha512"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(3418070365, 3238371032),
              new X64Word.init(1654270250, 914150663),
              new X64Word.init(2438529370, 812702999),
              new X64Word.init(355462360, 4144912697),
              new X64Word.init(1731405415, 4290775857),
              new X64Word.init(2394180231, 1750603025),
              new X64Word.init(3675008525, 1694076839),
              new X64Word.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS.SHA384;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/sha3.js
var require_sha3 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/sha3.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          }
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j2 = 0; j2 < 7; j2++) {
              if (LFSR & 1) {
                var bitPosition = (1 << j2) - 1;
                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
              }
              if (LFSR & 128) {
                LFSR = LFSR << 1 ^ 113;
              } else {
                LFSR <<= 1;
              }
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS.SHA3;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/ripemd160.js
var require_ripemd160 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/ripemd160.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]);
        var _zr = WordArray.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]);
        var _sl = WordArray.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]);
        var _sr = WordArray.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]);
        var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                t += f5(bl, cl, dl) + hl[4];
              }
              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                t += f1(br, cr, dr) + hr[4];
              }
              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);
      return CryptoJS.RIPEMD160;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/hmac.js
var require_hmac = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/hmac.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/pbkdf2.js
var require_pbkdf2 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/pbkdf2.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_sha1(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA1 = C_algo.SHA1;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA1,
            iterations: 1
          }),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([1]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset();
                var intermediateWords = intermediate.words;
                for (var j2 = 0; j2 < blockWordsLength; j2++) {
                  blockWords[j2] ^= intermediateWords[j2];
                }
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.PBKDF2;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/evpkdf.js
var require_evpkdf = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/evpkdf.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_sha1(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
          }),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.EvpKDF;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/cipher-core.js
var require_cipher_core = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/cipher-core.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_evpkdf());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./evpkdf"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.lib.Cipher || function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          finalize: function(dataUpdate) {
            if (dataUpdate) {
              this._append(dataUpdate);
            }
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function() {
            function selectCipherStrategy(key) {
              if (typeof key == "string") {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC2 = BlockCipherMode.extend();
          CBC2.Encryptor = CBC2.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC2.Decryptor = CBC2.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined2;
            } else {
              block = this._prevBlock;
            }
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }
          return CBC2;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              modeCreator = mode.createEncryptor;
            } else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) {
              this._mode.init(this, iv && iv.words);
            } else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          init: function(cipherParams) {
            this.mixIn(cipherParams);
          },
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) {
              wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
            } else {
              wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
          },
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({ ciphertext, salt });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext,
              key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          _parse: function(ciphertext, format) {
            if (typeof ciphertext == "string") {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          execute: function(password, keySize, ivSize, salt) {
            if (!salt) {
              salt = WordArray.random(64 / 8);
            }
            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            return CipherParams.create({ key, iv, salt });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/mode-cfb.js
var require_mode_cfb = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/mode-cfb.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else {
            keystream = this._prevBlock;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }
        return CFB;
      }();
      return CryptoJS.mode.CFB;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/mode-ctr.js
var require_mode_ctr = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/mode-ctr.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS.mode.CTR;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/mode-ctr-gladman.js
var require_mode_ctr_gladman = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/mode-ctr-gladman.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if ((word >> 24 & 255) === 255) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = word & 255;
            if (b1 === 255) {
              b1 = 0;
              if (b2 === 255) {
                b2 = 0;
                if (b3 === 255) {
                  b3 = 0;
                } else {
                  ++b3;
                }
              } else {
                ++b2;
              }
            } else {
              ++b1;
            }
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 1 << 24;
          }
          return word;
        }
        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            counter[1] = incWord(counter[1]);
          }
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS.mode.CTRGladman;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/mode-ofb.js
var require_mode_ofb = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/mode-ofb.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS.mode.OFB;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/mode-ecb.js
var require_mode_ecb = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/mode-ecb.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS.mode.ECB;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/pad-ansix923.js
var require_pad_ansix923 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/pad-ansix923.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/pad-iso10126.js
var require_pad_iso10126 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/pad-iso10126.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/pad-iso97971.js
var require_pad_iso97971 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/pad-iso97971.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/pad-zeropadding.js
var require_pad_zeropadding = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/pad-zeropadding.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              data.sigBytes = i + 1;
              break;
            }
          }
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/pad-nopadding.js
var require_pad_nopadding = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/pad-nopadding.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      };
      return CryptoJS.pad.NoPadding;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/format-hex.js
var require_format_hex = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/format-hex.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          parse: function(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({ ciphertext });
          }
        };
      })();
      return CryptoJS.format.Hex;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/aes.js
var require_aes = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/aes.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 283;
            }
          }
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 255 ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = d[sx] * 257 ^ sx * 16843008;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })();
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = (nRounds + 1) * 4;
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                  t = t << 8 | t >>> 24;
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
              }
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
            var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
            var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
            var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS.AES;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/tripledes.js
var require_tripledes = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/tripledes.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ];
        var PC2 = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ];
        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var SBOX_P = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ];
        var SBOX_MASK = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f2 = 0;
              for (var i = 0; i < 8; i++) {
                f2 |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f2;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            }
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS.TripleDES;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/rc4.js
var require_rc4 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/rc4.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) {
              S[i] = i;
            }
            for (var i = 0, j2 = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j2 = (j2 + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j2];
              S[j2] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j2 = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j2 = (j2 + S[i]) % 256;
            var t = S[i];
            S[i] = S[j2];
            S[j2] = t;
            keystreamWord |= S[(S[i] + S[j2]) % 256] << 24 - n * 8;
          }
          this._i = i;
          this._j = j2;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS.RC4;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/rabbit.js
var require_rabbit = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/rabbit.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
            }
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS.Rabbit;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/rabbit-legacy.js
var require_rabbit_legacy = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/rabbit-legacy.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS.RabbitLegacy;
    });
  }
});

// node_modules/_crypto-js@4.1.1@crypto-js/index.js
var require_crypto_js_4_1 = __commonJS({
  "node_modules/_crypto-js@4.1.1@crypto-js/index.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core(), require_lib_typedarrays(), require_enc_utf16(), require_enc_base64(), require_enc_base64url(), require_md5(), require_sha1(), require_sha256(), require_sha224(), require_sha512(), require_sha384(), require_sha3(), require_ripemd160(), require_hmac(), require_pbkdf2(), require_evpkdf(), require_cipher_core(), require_mode_cfb(), require_mode_ctr(), require_mode_ctr_gladman(), require_mode_ofb(), require_mode_ecb(), require_pad_ansix923(), require_pad_iso10126(), require_pad_iso97971(), require_pad_zeropadding(), require_pad_nopadding(), require_format_hex(), require_aes(), require_tripledes(), require_rc4(), require_rabbit(), require_rabbit_legacy());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
      } else {
        root.CryptoJS = factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      return CryptoJS;
    });
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/auth/cra.js
var require_cra = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/auth/cra.js"(exports2) {
    var crypto = require_crypto_js_4_1();
    function derive_key(secret, salt, iterations, keylen) {
      var iterations = iterations || 1e3;
      var keylen = keylen || 32;
      var config = {
        keySize: keylen / 4,
        iterations,
        hasher: crypto.algo.SHA256
      };
      var key = crypto.PBKDF2(secret, salt, config);
      return key.toString(crypto.enc.Base64);
    }
    function sign(key, challenge) {
      return crypto.HmacSHA256(challenge, key).toString(crypto.enc.Base64);
    }
    exports2.sign = sign;
    exports2.derive_key = derive_key;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/auth/cryptosign.js
var require_cryptosign = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/auth/cryptosign.js"(exports2) {
    var nacl = require_nacl_fast();
    var util = require_util();
    var log = require_log();
    var connection = require_connection();
    function load_private_key(name, force_regenerate) {
      var seed2 = util.atob(localStorage.getItem(name));
      if (!seed2 || force_regenerate) {
        seed2 = nacl.randomBytes(nacl.sign.seedLength);
        localStorage.setItem(name, util.btoa(seed2));
        log.debug('new key seed "' + name + '" saved to local storage!');
      } else {
        log.debug('key seed "' + name + '" loaded from local storage!');
      }
      return nacl.sign.keyPair.fromSeed(seed2);
    }
    exports2.load_private_key = load_private_key;
    function delete_private_key(name) {
      for (var i = 0; i < 5; ++i) {
        seed = nacl.randomBytes(nacl.sign.seedLength);
        localStorage.setItem(name, util.btoa(seed));
        localStorage.setItem(name, "");
        localStorage.setItem(name, null);
      }
    }
    exports2.delete_private_key = delete_private_key;
    function sign_challenge(pkey, extra) {
      var challenge = util.htob(extra.challenge);
      var signature = nacl.sign.detached(challenge, pkey.secretKey);
      var res = util.btoh(signature) + util.btoh(challenge);
      return res;
    }
    exports2.sign_challenge = sign_challenge;
    function public_key(pkey) {
      return util.btoh(pkey.publicKey);
    }
    exports2.public_key = public_key;
    function create_connection(config) {
      var url = config.url;
      var realm = config.realm;
      var authid = config.authid;
      var pkey = config.pkey;
      var activation_code = config.activation_code;
      var request_new_activation_code = config.request_new_activation_code;
      var serializers = config.serializers;
      if (config.debug) {
        console.log(url);
        console.log(realm);
        console.log(authid);
        console.log(pkey);
        console.log(activation_code);
        console.log(request_new_activation_code);
        console.log(serializers);
      }
      function onchallenge(session, method, extra) {
        if (method == "cryptosign") {
          return sign_challenge(pkey, extra);
        } else {
          throw "don't know how to authenticate using '" + method + "'";
        }
      }
      authextra = {
        pubkey: public_key(pkey),
        trustroot: null,
        challenge: null,
        channel_binding: null,
        activation_code,
        request_new_activation_code
      };
      var _connection = new connection.Connection({
        url,
        realm,
        authid,
        authmethods: ["cryptosign"],
        onchallenge,
        authextra,
        serializers: config.serializers
      });
      return _connection;
    }
    exports2.create_connection = create_connection;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/lib/autobahn.js
var require_autobahn = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/lib/autobahn.js"(exports2) {
    require_polyfill();
    var pjson = require_package();
    var when = require_when();
    var msgpack = require_msgpack5_6_0();
    var cbor = require_cbor();
    var nacl = require_nacl_fast();
    if ("AUTOBAHN_DEBUG" in global && AUTOBAHN_DEBUG) {
      require_console2();
      if ("console" in global) {
        console.log("AutobahnJS debug enabled");
      }
    }
    var util = require_util();
    var log = require_log();
    var session = require_session();
    var connection = require_connection();
    var configure = require_configure();
    var serializer = require_serializer();
    var persona = require_persona();
    var cra = require_cra();
    var cryptosign = require_cryptosign();
    exports2.version = pjson.version;
    exports2.transports = configure.transports;
    exports2.Connection = connection.Connection;
    exports2.Session = session.Session;
    exports2.Invocation = session.Invocation;
    exports2.Event = session.Event;
    exports2.Result = session.Result;
    exports2.Error = session.Error;
    exports2.Subscription = session.Subscription;
    exports2.Registration = session.Registration;
    exports2.Publication = session.Publication;
    exports2.serializer = serializer;
    exports2.auth_persona = persona.auth;
    exports2.auth_cra = cra;
    exports2.auth_cryptosign = cryptosign;
    exports2.when = when;
    exports2.msgpack = msgpack;
    exports2.cbor = cbor;
    exports2.nacl = nacl;
    exports2.util = util;
    exports2.log = log;
  }
});

// node_modules/_autobahn@19.12.1@autobahn/index.js
var require_autobahn_19_12 = __commonJS({
  "node_modules/_autobahn@19.12.1@autobahn/index.js"(exports2, module2) {
    module2.exports = require_autobahn();
  }
});

// SRC/Wwise/Utils.ts
var import_autobahn = __toESM(require_autobahn_19_12());
function CallWaapiPromise(session, api, args, options, onComplete) {
  return new Promise((resolve, reject) => {
    session.call(api, [], args, options).then(
      function(res) {
        resolve(res);
      },
      function(error) {
        reject(error);
      }
    ).then(
      function() {
        onComplete?.call(this);
      }
    );
  });
}
function JoinArgs(args, exArgs) {
  for (const k in exArgs) {
    let v = exArgs[k];
    let newKey = k;
    if (k.startsWith("_")) {
      newKey = "@" + k.substring(1);
    } else {
      newKey = "@" + k;
    }
    args[newKey] = v;
  }
  return args;
}
function SimpleConnect(url, action) {
  let connection = new import_autobahn.Connection({
    url,
    realm: "realm1",
    protocols: ["wamp.2.json"]
  });
  connection.onopen = function(session) {
    action(session, connection);
  };
  connection.onclose = function(reason, details) {
    if (reason !== "lost") {
      console.log("Connection closed. Reason: " + reason);
    }
    process.exit();
  };
  connection.open();
}
var DEFAULT_URL = "ws://localhost:8080/waapi";
var Log = console.log;

// SRC/Wwise/waapi_apis_promise.ts
function P_ak_soundengine_executeActionOnEvent(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.executeActionOnEvent", args, options, onComplete);
}
function P_ak_soundengine_getState(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.getState", args, options, onComplete);
}
function P_ak_soundengine_getSwitch(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.getSwitch", args, options, onComplete);
}
function P_ak_soundengine_postEvent(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.postEvent", args, options, onComplete);
}
function P_ak_soundengine_postMsgMonitor(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.postMsgMonitor", args, options, onComplete);
}
function P_ak_soundengine_postTrigger(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.postTrigger", args, options, onComplete);
}
function P_ak_soundengine_registerGameObj(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.registerGameObj", args, options, onComplete);
}
function P_ak_soundengine_resetRTPCValue(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.resetRTPCValue", args, options, onComplete);
}
function P_ak_soundengine_seekOnEvent(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.seekOnEvent", args, options, onComplete);
}
function P_ak_soundengine_setDefaultListeners(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setDefaultListeners", args, options, onComplete);
}
function P_ak_soundengine_setGameObjectAuxSendValues(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setGameObjectAuxSendValues", args, options, onComplete);
}
function P_ak_soundengine_setGameObjectOutputBusVolume(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setGameObjectOutputBusVolume", args, options, onComplete);
}
function P_ak_soundengine_setListeners(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setListeners", args, options, onComplete);
}
function P_ak_soundengine_setListenerSpatialization(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setListenerSpatialization", args, options, onComplete);
}
function P_ak_soundengine_setMultiplePositions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setMultiplePositions", args, options, onComplete);
}
function P_ak_soundengine_setObjectObstructionAndOcclusion(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setObjectObstructionAndOcclusion", args, options, onComplete);
}
function P_ak_soundengine_setPosition(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setPosition", args, options, onComplete);
}
function P_ak_soundengine_setRTPCValue(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setRTPCValue", args, options, onComplete);
}
function P_ak_soundengine_setScalingFactor(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setScalingFactor", args, options, onComplete);
}
function P_ak_soundengine_setState(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setState", args, options, onComplete);
}
function P_ak_soundengine_setSwitch(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.setSwitch", args, options, onComplete);
}
function P_ak_soundengine_stopAll(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.stopAll", args, options, onComplete);
}
function P_ak_soundengine_stopPlayingID(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.stopPlayingID", args, options, onComplete);
}
function P_ak_soundengine_unregisterGameObj(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.soundengine.unregisterGameObj", args, options, onComplete);
}
function P_ak_wwise_core_audio_import(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audio.import", args, options, onComplete);
}
function P_ak_wwise_core_audio_importTabDelimited(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audio.importTabDelimited", args, options, onComplete);
}
function P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion", args, options, onComplete);
}
function P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion", args, options, onComplete);
}
function P_ak_wwise_core_getInfo(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.getInfo", null, null, onComplete);
}
function P_ak_wwise_core_getProjectInfo(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.getProjectInfo", null, null, onComplete);
}
function P_ak_wwise_core_log_get(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.log.get", args, options, onComplete);
}
function P_ak_wwise_core_object_copy(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.copy", args, options, onComplete);
}
function P_ak_wwise_core_object_create(session, args, exArgs, options, onComplete) {
  args = JoinArgs(args, exArgs);
  return CallWaapiPromise(session, "ak.wwise.core.object.create", args, options, onComplete);
}
function P_ak_wwise_core_object_delete(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.delete", args, options, onComplete);
}
function P_ak_wwise_core_object_diff(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.diff", args, options, onComplete);
}
function P_ak_wwise_core_object_get(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.get", args, options, onComplete);
}
function P_ak_wwise_core_object_getAttenuationCurve(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.getAttenuationCurve", args, options, onComplete);
}
function P_ak_wwise_core_object_getPropertyAndReferenceNames(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.getPropertyAndReferenceNames", args, options, onComplete);
}
function P_ak_wwise_core_object_getPropertyInfo(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.getPropertyInfo", args, options, onComplete);
}
function P_ak_wwise_core_object_isPropertyEnabled(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.isPropertyEnabled", args, options, onComplete);
}
function P_ak_wwise_core_object_move(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.move", args, options, onComplete);
}
function P_ak_wwise_core_object_pasteProperties(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.pasteProperties", args, options, onComplete);
}
function P_ak_wwise_core_object_set(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.set", args, options, onComplete);
}
function P_ak_wwise_core_object_setAttenuationCurve(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setAttenuationCurve", args, options, onComplete);
}
function P_ak_wwise_core_object_setName(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setName", args, options, onComplete);
}
function P_ak_wwise_core_object_setNotes(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setNotes", args, options, onComplete);
}
function P_ak_wwise_core_object_setProperty(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setProperty", args, options, onComplete);
}
function P_ak_wwise_core_object_setRandomizer(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setRandomizer", args, options, onComplete);
}
function P_ak_wwise_core_object_setReference(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.object.setReference", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getAudioObjects(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getAudioObjects", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getBusses(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getBusses", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getCursorTime(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getCursorTime", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getGameObjects(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getGameObjects", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getRTPCs(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getRTPCs", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getVoiceContributions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getVoiceContributions", args, options, onComplete);
}
function P_ak_wwise_core_profiler_getVoices(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.getVoices", args, options, onComplete);
}
function P_ak_wwise_core_profiler_startCapture(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.startCapture", null, null, onComplete);
}
function P_ak_wwise_core_profiler_stopCapture(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.profiler.stopCapture", null, null, onComplete);
}
function P_ak_wwise_core_project_save(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.project.save", null, null, onComplete);
}
function P_ak_wwise_core_remote_connect(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.connect", args, options, onComplete);
}
function P_ak_wwise_core_remote_disconnect(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.disconnect", null, null, onComplete);
}
function P_ak_wwise_core_remote_getAvailableConsoles(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.getAvailableConsoles", null, null, onComplete);
}
function P_ak_wwise_core_remote_getConnectionStatus(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.remote.getConnectionStatus", null, null, onComplete);
}
function P_ak_wwise_core_sound_setActiveSource(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.sound.setActiveSource", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_convertExternalSources(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.convertExternalSources", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_generate(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.generate", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_getInclusions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.getInclusions", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_processDefinitionFiles(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.processDefinitionFiles", args, options, onComplete);
}
function P_ak_wwise_core_soundbank_setInclusions(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.soundbank.setInclusions", args, options, onComplete);
}
function P_ak_wwise_core_switchContainer_addAssignment(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.switchContainer.addAssignment", args, options, onComplete);
}
function P_ak_wwise_core_switchContainer_getAssignments(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.switchContainer.getAssignments", args, options, onComplete);
}
function P_ak_wwise_core_switchContainer_removeAssignment(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.switchContainer.removeAssignment", args, options, onComplete);
}
function P_ak_wwise_core_transport_create(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.create", args, options, onComplete);
}
function P_ak_wwise_core_transport_destroy(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.destroy", args, options, onComplete);
}
function P_ak_wwise_core_transport_executeAction(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.executeAction", args, options, onComplete);
}
function P_ak_wwise_core_transport_getList(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.getList", null, null, onComplete);
}
function P_ak_wwise_core_transport_getState(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.getState", args, options, onComplete);
}
function P_ak_wwise_core_transport_prepare(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.transport.prepare", args, options, onComplete);
}
function P_ak_wwise_core_undo_beginGroup(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.beginGroup", null, null, onComplete);
}
function P_ak_wwise_core_undo_cancelGroup(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.cancelGroup", null, null, onComplete);
}
function P_ak_wwise_core_undo_endGroup(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.endGroup", args, options, onComplete);
}
function P_ak_wwise_core_undo_undo(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.core.undo.undo", null, null, onComplete);
}
function P_ak_wwise_debug_enableAsserts(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.enableAsserts", args, options, onComplete);
}
function P_ak_wwise_debug_enableAutomationMode(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.enableAutomationMode", args, options, onComplete);
}
function P_ak_wwise_debug_testAssert(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.testAssert", null, null, onComplete);
}
function P_ak_wwise_debug_testCrash(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.debug.testCrash", null, null, onComplete);
}
function P_ak_wwise_ui_bringToForeground(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.bringToForeground", null, null, onComplete);
}
function P_ak_wwise_ui_captureScreen(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.captureScreen", args, options, onComplete);
}
function P_ak_wwise_ui_commands_execute(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.execute", args, options, onComplete);
}
function P_ak_wwise_ui_commands_getCommands(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.getCommands", null, null, onComplete);
}
function P_ak_wwise_ui_commands_register(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.register", args, options, onComplete);
}
function P_ak_wwise_ui_commands_unregister(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.commands.unregister", args, options, onComplete);
}
function P_ak_wwise_ui_getSelectedObjects(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.getSelectedObjects", null, null, onComplete);
}
function P_ak_wwise_ui_project_close(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.project.close", args, options, onComplete);
}
function P_ak_wwise_ui_project_open(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.ui.project.open", args, options, onComplete);
}
function P_ak_wwise_waapi_getFunctions(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.waapi.getFunctions", null, null, onComplete);
}
function P_ak_wwise_waapi_getSchema(session, args, options, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.waapi.getSchema", args, options, onComplete);
}
function P_ak_wwise_waapi_getTopics(session, onComplete) {
  return CallWaapiPromise(session, "ak.wwise.waapi.getTopics", null, null, onComplete);
}
var APIs_Async = {
  ak: {
    soundengine: {
      executeActionOnEvent: P_ak_soundengine_executeActionOnEvent,
      getState: P_ak_soundengine_getState,
      getSwitch: P_ak_soundengine_getSwitch,
      postEvent: P_ak_soundengine_postEvent,
      postMsgMonitor: P_ak_soundengine_postMsgMonitor,
      postTrigger: P_ak_soundengine_postTrigger,
      registerGameObj: P_ak_soundengine_registerGameObj,
      resetRTPCValue: P_ak_soundengine_resetRTPCValue,
      seekOnEvent: P_ak_soundengine_seekOnEvent,
      setDefaultListeners: P_ak_soundengine_setDefaultListeners,
      setGameObjectAuxSendValues: P_ak_soundengine_setGameObjectAuxSendValues,
      setGameObjectOutputBusVolume: P_ak_soundengine_setGameObjectOutputBusVolume,
      setListeners: P_ak_soundengine_setListeners,
      setListenerSpatialization: P_ak_soundengine_setListenerSpatialization,
      setMultiplePositions: P_ak_soundengine_setMultiplePositions,
      setObjectObstructionAndOcclusion: P_ak_soundengine_setObjectObstructionAndOcclusion,
      setPosition: P_ak_soundengine_setPosition,
      setRTPCValue: P_ak_soundengine_setRTPCValue,
      setScalingFactor: P_ak_soundengine_setScalingFactor,
      setState: P_ak_soundengine_setState,
      setSwitch: P_ak_soundengine_setSwitch,
      stopAll: P_ak_soundengine_stopAll,
      stopPlayingID: P_ak_soundengine_stopPlayingID,
      unregisterGameObj: P_ak_soundengine_unregisterGameObj
    },
    wwise: {
      core: {
        audio: {
          import: P_ak_wwise_core_audio_import,
          importTabDelimited: P_ak_wwise_core_audio_importTabDelimited
        },
        audioSourcePeaks: {
          getMinMaxPeaksInRegion: P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInRegion,
          getMinMaxPeaksInTrimmedRegion: P_ak_wwise_core_audioSourcePeaks_getMinMaxPeaksInTrimmedRegion
        },
        getInfo: P_ak_wwise_core_getInfo,
        getProjectInfo: P_ak_wwise_core_getProjectInfo,
        log: {
          get: P_ak_wwise_core_log_get
        },
        object: {
          copy: P_ak_wwise_core_object_copy,
          create: P_ak_wwise_core_object_create,
          delete: P_ak_wwise_core_object_delete,
          diff: P_ak_wwise_core_object_diff,
          get: P_ak_wwise_core_object_get,
          getAttenuationCurve: P_ak_wwise_core_object_getAttenuationCurve,
          getPropertyAndReferenceNames: P_ak_wwise_core_object_getPropertyAndReferenceNames,
          getPropertyInfo: P_ak_wwise_core_object_getPropertyInfo,
          getPropertyNames: "This function is deprecated!!!  ak.wwise.core.object.getPropertyNames",
          isPropertyEnabled: P_ak_wwise_core_object_isPropertyEnabled,
          move: P_ak_wwise_core_object_move,
          pasteProperties: P_ak_wwise_core_object_pasteProperties,
          set: P_ak_wwise_core_object_set,
          setAttenuationCurve: P_ak_wwise_core_object_setAttenuationCurve,
          setName: P_ak_wwise_core_object_setName,
          setNotes: P_ak_wwise_core_object_setNotes,
          setProperty: P_ak_wwise_core_object_setProperty,
          setRandomizer: P_ak_wwise_core_object_setRandomizer,
          setReference: P_ak_wwise_core_object_setReference
        },
        plugin: {
          getList: "This function is deprecated!!!  ak.wwise.core.plugin.getList"
        },
        profiler: {
          getAudioObjects: P_ak_wwise_core_profiler_getAudioObjects,
          getBusses: P_ak_wwise_core_profiler_getBusses,
          getCursorTime: P_ak_wwise_core_profiler_getCursorTime,
          getGameObjects: P_ak_wwise_core_profiler_getGameObjects,
          getRTPCs: P_ak_wwise_core_profiler_getRTPCs,
          getVoiceContributions: P_ak_wwise_core_profiler_getVoiceContributions,
          getVoices: P_ak_wwise_core_profiler_getVoices,
          startCapture: P_ak_wwise_core_profiler_startCapture,
          stopCapture: P_ak_wwise_core_profiler_stopCapture
        },
        project: {
          save: P_ak_wwise_core_project_save
        },
        remote: {
          connect: P_ak_wwise_core_remote_connect,
          disconnect: P_ak_wwise_core_remote_disconnect,
          getAvailableConsoles: P_ak_wwise_core_remote_getAvailableConsoles,
          getConnectionStatus: P_ak_wwise_core_remote_getConnectionStatus
        },
        sound: {
          setActiveSource: P_ak_wwise_core_sound_setActiveSource
        },
        soundbank: {
          convertExternalSources: P_ak_wwise_core_soundbank_convertExternalSources,
          generate: P_ak_wwise_core_soundbank_generate,
          getInclusions: P_ak_wwise_core_soundbank_getInclusions,
          processDefinitionFiles: P_ak_wwise_core_soundbank_processDefinitionFiles,
          setInclusions: P_ak_wwise_core_soundbank_setInclusions
        },
        switchContainer: {
          addAssignment: P_ak_wwise_core_switchContainer_addAssignment,
          getAssignments: P_ak_wwise_core_switchContainer_getAssignments,
          removeAssignment: P_ak_wwise_core_switchContainer_removeAssignment
        },
        transport: {
          create: P_ak_wwise_core_transport_create,
          destroy: P_ak_wwise_core_transport_destroy,
          executeAction: P_ak_wwise_core_transport_executeAction,
          getList: P_ak_wwise_core_transport_getList,
          getState: P_ak_wwise_core_transport_getState,
          prepare: P_ak_wwise_core_transport_prepare
        },
        undo: {
          beginGroup: P_ak_wwise_core_undo_beginGroup,
          cancelGroup: P_ak_wwise_core_undo_cancelGroup,
          endGroup: P_ak_wwise_core_undo_endGroup,
          undo: P_ak_wwise_core_undo_undo
        }
      },
      debug: {
        enableAsserts: P_ak_wwise_debug_enableAsserts,
        enableAutomationMode: P_ak_wwise_debug_enableAutomationMode,
        testAssert: P_ak_wwise_debug_testAssert,
        testCrash: P_ak_wwise_debug_testCrash
      },
      ui: {
        bringToForeground: P_ak_wwise_ui_bringToForeground,
        captureScreen: P_ak_wwise_ui_captureScreen,
        commands: {
          execute: P_ak_wwise_ui_commands_execute,
          getCommands: P_ak_wwise_ui_commands_getCommands,
          register: P_ak_wwise_ui_commands_register,
          unregister: P_ak_wwise_ui_commands_unregister
        },
        getSelectedObjects: P_ak_wwise_ui_getSelectedObjects,
        project: {
          close: P_ak_wwise_ui_project_close,
          open: P_ak_wwise_ui_project_open
        }
      },
      waapi: {
        getFunctions: P_ak_wwise_waapi_getFunctions,
        getSchema: P_ak_wwise_waapi_getSchema,
        getTopics: P_ak_wwise_waapi_getTopics
      }
    }
  }
};

// SRC/index.ts
SimpleConnect(DEFAULT_URL, HelloWwise);
async function HelloWwise(session, connection) {
  let info = await APIs_Async.ak.wwise.core.getInfo(session);
  Log("Hello Wwise! Version: ", info.kwargs.version.displayName);
  connection.close();
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @license MIT License (c) copyright 2013-2014 original author or authors */
/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
