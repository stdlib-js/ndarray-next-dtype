// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).nextDataType=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&i.call(t,n)}var c="function"==typeof Symbol?Symbol.toStringTag:"";var f,l=r()?function(t){var n,e,r;if(null==t)return o.call(t);e=t[c],n=u(t,c);try{t[c]=void 0}catch(n){return o.call(t)}return r=o.call(t),n?t[c]=e:delete t[c],r}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}f=function(){return a(arguments)}();var p=f,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,b=Object.defineProperty,v=Object.prototype,g=v.toString,m=v.__defineGetter__,d=v.__defineSetter__,h=v.__lookupGetter__,j=v.__lookupSetter__;s=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?b:function(t,n,e){var r,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(h.call(t,n)||j.call(t,n)?(r=t.__proto__,t.__proto__=v,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&m&&m.call(t,n,e.get),u&&d&&d.call(t,n,e.set),t};var w=s;function _(t,n,e){w(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function O(t){return"string"==typeof t}var x=String.prototype.valueOf;var S=r();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function T(t){return O(t)||E(t)}function P(t){return"number"==typeof t}_(T,"isPrimitive",O),_(T,"isObject",E);var I=Number,A=I.prototype.toString;var V=r();function k(t){return"object"==typeof t&&(t instanceof I||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function N(t){return P(t)||k(t)}function B(t){return t!=t}function F(t){return P(t)&&B(t)}function L(t){return k(t)&&B(t.valueOf())}function G(t){return F(t)||L(t)}_(N,"isPrimitive",P),_(N,"isObject",k),_(G,"isPrimitive",F),_(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=I.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function D(t){return t<Y&&t>C&&X(t)}function H(t){return P(t)&&D(t)}function W(t){return k(t)&&D(t.valueOf())}function R(t){return H(t)||W(t)}_(R,"isPrimitive",H),_(R,"isObject",W);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,n){var e;return null!=t&&(!(e=U.call(t,n))&&q&&T(t)?!F(n=+n)&&H(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}_(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!J(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,n,e){var r,o;if(!nt(t)&&!O(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!H(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(G(n)){for(;o<r;o++)if(G(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var rt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=r();function ct(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ft(t){return ot(t)||ct(t)}function lt(){return new Function("return this;")()}_(ft,"isPrimitive",ot),_(ft,"isObject",ct);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,yt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},st="object"==typeof yt?yt:null;var bt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=bt.document&&bt.document.childNodes,gt=Int8Array;function mt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function ht(t){var n,e,r,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=dt.exec(r.toString()))return n[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}_(mt,"REGEXP",dt);var jt="function"==typeof rt||"object"==typeof gt||"function"==typeof vt?function(t){return ht(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?ht(t).toLowerCase():n};function wt(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ot="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===jt(Ot))return!1;for(t in Ot)try{-1===et(_t,t)&&u(Ot,t)&&null!==Ot[t]&&"object"===jt(Ot[t])&&wt(Ot[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et,Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Et=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return K(n)?t(Q.call(n)):t(n)}:t:function(t){var n,e,r,o,i,c,f;if(o=[],K(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(r="function"==typeof t)&&!Z(t))return o;e=$&&r}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(n=function(t){if(!1===St&&!xt)return wt(t);try{return wt(t)}catch(t){return!1}}(t),f=0;f<Tt.length;f++)c=Tt[f],n&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var Pt=Et;function It(t){return"function"===jt(t)}var At,Vt=Object.getPrototypeOf;At=It(Object.getPrototypeOf)?Vt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var kt=At;var Nt=Object.prototype;function Bt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),kt(t))}(t),!n||!u(t,"constructor")&&u(n,"constructor")&&It(n.constructor)&&"[object Function]"===l(n.constructor)&&u(n,"isPrototypeOf")&&It(n.isPrototypeOf)&&(n===Nt||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}var Ft=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Ft.slice()}var Gt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Yt(){return Gt.slice()}function Ct(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Mt(t,n,e){w(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}_(Yt,"enum",Ct),function(t,n){var e,r,o;for(e=Pt(n),o=0;o<e.length;o++)Mt(t,r=e[o],n[r])}(Yt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Xt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Dt(){return{bool:Xt.bool,int8:Xt.int8,uint8:Xt.uint8,uint8c:Xt.uint8c,int16:Xt.int16,uint16:Xt.uint16,int32:Xt.int32,uint32:Xt.uint32,int64:Xt.int64,uint64:Xt.uint64,float32:Xt.float32,float64:Xt.float64,complex64:Xt.complex64,complex128:Xt.complex128,binary:Xt.binary,generic:Xt.generic,notype:Xt.notype,userdefined_type:Xt.userdefined_type}}_(Lt,"enum",Dt),function(t,n){var e,r,o;for(e=Pt(n),o=0;o<e.length;o++)Mt(t,r=e[o],n[r])}(Lt,Dt());var Ht=function(t,n){var e,r,o,i,c,f,l,a=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Bt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(u(n,"duplicates")&&!ot(a=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(r=(e=Pt(t)).length,c={},a)for(l=0;l<r;l++)u(c,i=t[o=e[l]])?(f=c[i],J(f)?c[i].push(o):c[i]=[f,o]):c[i]=o;else for(l=0;l<r;l++)c[t[o=e[l]]]=o;return c}(Dt(),{duplicates:!1});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Rt(t){var n=typeof t;return"string"===n?null===function(t){var n=Wt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Ht[t];return"string"==typeof n?n:null}(t):null}var Ut={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1};function qt(){var t,n,e,r;for(e={},n=(t=Pt(Ut)).length,r=0;r<n;r++)e[t[r]]=Ut[t[r]];return e}return function(t){return 0===arguments.length?qt():(t=Rt(t),u(Ut,t)?Ut[t]:null)}}));
//# sourceMappingURL=browser.js.map
