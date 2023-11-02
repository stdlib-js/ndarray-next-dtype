// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).nextDataType=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l,f=n()?function(t){var e,r,n;if(null==t)return o.call(t);r=t[a],e=u(t,a);try{t[a]=void 0}catch(e){return o.call(t)}return n=o.call(t),e?t[a]=r:delete t[a],n}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function d(t,e,r){var n=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+v(o):v(o)+t,n&&(t="-"+t)),t}var m=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!b(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=d(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=d(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===h.call(t.specifier)?h.call(r):m.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function j(t){return"string"==typeof t}var _=Math.abs,O=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,x=/e\+(\d)$/,T=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":_(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=E.call(r,V,"$1e"),r=E.call(r,k,"e"),r=E.call(r,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=E.call(r,x,"e+0$1"),r=E.call(r,T,"e-0$1"),t.alternate&&(r=E.call(r,I,"$1."),r=E.call(r,P,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===S.call(t.specifier)?S.call(r):O.call(r)}function F(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function B(t,e,r){var n=e-t.length;return n<0?t:t=r?t+F(n):F(n)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function X(t){var e,r,n,o,i,u,c,a,l;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(j(n=t[a]))u+=n;else{if(e=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,l=0;l<r.length;l++)switch(o=r.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=B(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function $(t){var e,r,n,o;for(r=[],o=0,n=M.exec(t);n;)(e=t.slice(o,M.lastIndex-n[0].length)).length&&r.push(e),r.push(W(n)),o=M.lastIndex,n=M.exec(t);return(e=t.slice(o)).length&&r.push(e),r}function R(t){return"string"==typeof t}function H(t){var e,r,n;if(!R(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=$(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return X.apply(null,r)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,q=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((o="value"in r)&&(J.call(t,e)||K.call(t,e)?(n=t.__proto__,t.__proto__=Z,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,e,r.get),u&&q&&q.call(t,e,r.set),t};var Q=U;function tt(t,e,r){Q(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function et(t){return"string"==typeof t}var rt=String.prototype.valueOf;var nt=n();function ot(t){return"object"==typeof t&&(t instanceof String||(nt?function(t){try{return rt.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function it(t){return et(t)||ot(t)}function ut(t){return"number"==typeof t}tt(it,"isPrimitive",et),tt(it,"isObject",ot);var ct=Number,at=ct.prototype.toString;var lt=n();function ft(t){return"object"==typeof t&&(t instanceof ct||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function gt(t){return ft(t)&&st(t.valueOf())}function bt(t){return yt(t)||gt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",yt),tt(bt,"isObject",gt);var vt=Number.POSITIVE_INFINITY,dt=ct.NEGATIVE_INFINITY,mt=Math.floor;function ht(t){return mt(t)===t}function wt(t){return t<vt&&t>dt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function Ot(t){return jt(t)||_t(t)}tt(Ot,"isPrimitive",jt),tt(Ot,"isObject",_t);var St=Object.prototype.propertyIsEnumerable;var Et=!St.call("beep","0");function xt(t,e){var r;return null!=t&&(!(r=St.call(t,e))&&Et&&it(t)?!yt(e=+e)&&jt(e)&&e>=0&&e<t.length:r)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var It=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!xt(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Tt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(At));var kt=xt((function(){}),"prototype"),Vt=!xt({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,e,r){var n,o;if(!Nt(t)&&!et(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!jt(r))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(bt(e)){for(;o<n;o++)if(bt(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=n();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Wt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var $t="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Ht="object"==typeof globalThis?globalThis:null;var Ut=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Ht)return Ht;if($t)return $t;if(Rt)return Rt;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Ut.document&&Ut.document.childNodes,Dt=Int8Array;function zt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Jt(t){var e,r,n,o;if(("Object"===(r=f(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=qt.exec(n.toString()))return e[1]}return At(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}tt(zt,"REGEXP",qt);var Kt="function"==typeof Bt||"object"==typeof Dt||"function"==typeof Zt?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Jt(t).toLowerCase():e};function Qt(t){return t.constructor&&t.constructor.prototype===t}var te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ee="undefined"==typeof window?void 0:window;var re=function(){var t;if("undefined"===Kt(ee))return!1;for(t in ee)try{-1===Ft(te,t)&&u(ee,t)&&null!==ee[t]&&"object"===Kt(ee[t])&&Qt(ee[t])}catch(t){return!0}return!1}(),ne="undefined"!=typeof window;var oe,ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];oe=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return It(e)?t(Pt.call(e)):t(e)}:t:function(t){var e,r,n,o,i,c,a;if(o=[],It(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!At(t))return o;r=kt&&n}for(i in t)r&&"prototype"===i||!u(t,i)||o.push(String(i));if(Vt)for(e=function(t){if(!1===ne&&!re)return Qt(t);try{return Qt(t)}catch(t){return!1}}(t),a=0;a<ie.length;a++)c=ie[a],e&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var ue=oe;function ce(t){return Object.keys(Object(t))}var ae=void 0!==Object.keys;var le="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function fe(){return le&&"symbol"==typeof Symbol.toStringTag}var pe=Object.prototype.toString;var se=Object.prototype.hasOwnProperty;function ye(t,e){return null!=t&&se.call(t,e)}var ge="function"==typeof Symbol?Symbol.toStringTag:"";var be,ve=fe()?function(t){var e,r,n;if(null==t)return pe.call(t);r=t[ge],e=ye(t,ge);try{t[ge]=void 0}catch(e){return pe.call(t)}return n=pe.call(t),e?t[ge]=r:delete t[ge],n}:function(t){return pe.call(t)};function de(t){return"[object Arguments]"===ve(t)}be=function(){return de(arguments)}();var me=be,he="function"==typeof Object.defineProperty?Object.defineProperty:null;var we,je=Object.defineProperty,_e=Object.prototype,Oe=_e.toString,Se=_e.__defineGetter__,Ee=_e.__defineSetter__,xe=_e.__lookupGetter__,Te=_e.__lookupSetter__;we=function(){try{return he({},"x",{}),!0}catch(t){return!1}}()?je:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Oe.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===Oe.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(xe.call(t,e)||Te.call(t,e)?(n=t.__proto__,t.__proto__=_e,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Se&&Se.call(t,e,r.get),u&&Ee&&Ee.call(t,e,r.set),t};var Ie=we;function Pe(t,e,r){Ie(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function Ae(t){return"string"==typeof t}var ke=String.prototype.valueOf;var Ve=fe();function Ne(t){return"object"==typeof t&&(t instanceof String||(Ve?function(t){try{return ke.call(t),!0}catch(t){return!1}}(t):"[object String]"===ve(t)))}function Fe(t){return Ae(t)||Ne(t)}function Be(t){return"number"==typeof t}Pe(Fe,"isPrimitive",Ae),Pe(Fe,"isObject",Ne);var Le=Number,Ce=Le.prototype.toString;var Ge=fe();function Ye(t){return"object"==typeof t&&(t instanceof Le||(Ge?function(t){try{return Ce.call(t),!0}catch(t){return!1}}(t):"[object Number]"===ve(t)))}function Xe(t){return Be(t)||Ye(t)}function Me(t){return t!=t}function We(t){return Be(t)&&Me(t)}function $e(t){return Ye(t)&&Me(t.valueOf())}function Re(t){return We(t)||$e(t)}Pe(Xe,"isPrimitive",Be),Pe(Xe,"isObject",Ye),Pe(Re,"isPrimitive",We),Pe(Re,"isObject",$e);var He=Number.POSITIVE_INFINITY,Ue=Le.NEGATIVE_INFINITY,Ze=Math.floor;function De(t){return Ze(t)===t}function ze(t){return t<He&&t>Ue&&De(t)}function qe(t){return Be(t)&&ze(t)}function Je(t){return Ye(t)&&ze(t.valueOf())}function Ke(t){return qe(t)||Je(t)}Pe(Ke,"isPrimitive",qe),Pe(Ke,"isObject",Je);var Qe=Object.prototype.propertyIsEnumerable;var tr=!Qe.call("beep","0");function er(t,e){var r;return null!=t&&(!(r=Qe.call(t,e))&&tr&&Fe(t)?!We(e=+e)&&qe(e)&&e>=0&&e<t.length:r)}var rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===ve(t)};var nr=me?de:function(t){return null!==t&&"object"==typeof t&&!rr(t)&&"number"==typeof t.length&&De(t.length)&&t.length>=0&&t.length<=4294967295&&ye(t,"callee")&&!er(t,"callee")},or=Array.prototype.slice;function ir(t){return null!==t&&"object"==typeof t}Pe(ir,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!rr(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ir));var ur=er((function(){}),"prototype"),cr=!er({toString:null},"toString");function ar(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&De(t.length)&&t.length>=0&&t.length<=9007199254740991}function lr(t,e,r){var n,o;if(!ar(t)&&!Ae(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!qe(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(Re(e)){for(;o<n;o++)if(Re(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var fr=/./,pr="function"==typeof Object.defineProperty?Object.defineProperty:null;var sr,yr=Object.defineProperty,gr=Object.prototype,br=gr.toString,vr=gr.__defineGetter__,dr=gr.__defineSetter__,mr=gr.__lookupGetter__,hr=gr.__lookupSetter__;sr=function(){try{return pr({},"x",{}),!0}catch(t){return!1}}()?yr:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===br.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===br.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(mr.call(t,e)||hr.call(t,e)?(n=t.__proto__,t.__proto__=gr,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&vr&&vr.call(t,e,r.get),u&&dr&&dr.call(t,e,r.set),t};var wr=sr;function jr(t,e,r){wr(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function _r(t){return"boolean"==typeof t}var Or="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Sr(){return Or&&"symbol"==typeof Symbol.toStringTag}var Er=Object.prototype.toString;var xr=Object.prototype.hasOwnProperty;var Tr="function"==typeof Symbol?Symbol.toStringTag:"";var Ir=Sr()?function(t){var e,r,n,o,i;if(null==t)return Er.call(t);r=t[Tr],i=Tr,e=null!=(o=t)&&xr.call(o,i);try{t[Tr]=void 0}catch(e){return Er.call(t)}return n=Er.call(t),e?t[Tr]=r:delete t[Tr],n}:function(t){return Er.call(t)},Pr=Boolean.prototype.toString;var Ar=Sr();function kr(t){return"object"==typeof t&&(t instanceof Boolean||(Ar?function(t){try{return Pr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Ir(t)))}function Vr(t){return _r(t)||kr(t)}function Nr(){return new Function("return this;")()}jr(Vr,"isPrimitive",_r),jr(Vr,"isObject",kr);var Fr="object"==typeof self?self:null,Br="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Cr="object"==typeof Lr?Lr:null;var Gr=function(t){if(arguments.length){if(!_r(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Nr()}if(Fr)return Fr;if(Br)return Br;if(Cr)return Cr;throw new Error("unexpected error. Unable to resolve global object.")}(),Yr=Gr.document&&Gr.document.childNodes,Xr=Int8Array;function Mr(){return/^\s*function\s*([^(]*)/i}var Wr=/^\s*function\s*([^(]*)/i;function $r(t){var e,r,n,o;if(("Object"===(r=ve(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Wr.exec(n.toString()))return e[1]}return ir(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}Pe(Mr,"REGEXP",Wr);var Rr="function"==typeof fr||"object"==typeof Xr||"function"==typeof Yr?function(t){return $r(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?$r(t).toLowerCase():e};function Hr(t){return t.constructor&&t.constructor.prototype===t}var Ur=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Zr="undefined"==typeof window?void 0:window;var Dr=function(){var t;if("undefined"===Rr(Zr))return!1;for(t in Zr)try{-1===lr(Ur,t)&&ye(Zr,t)&&null!==Zr[t]&&"object"===Rr(Zr[t])&&Hr(Zr[t])}catch(t){return!0}return!1}(),zr="undefined"!=typeof window;var qr,Jr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];qr=ae?function(){return 2!==(ce(arguments)||"").length}(1,2)?function(t){return nr(t)?ce(or.call(t)):ce(t)}:ce:function(t){var e,r,n,o,i,u,c;if(o=[],nr(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!ye(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!ir(t))return o;r=ur&&n}for(i in t)r&&"prototype"===i||!ye(t,i)||o.push(String(i));if(cr)for(e=function(t){if(!1===zr&&!Dr)return Hr(t);try{return Hr(t)}catch(t){return!1}}(t),c=0;c<Jr.length;c++)u=Jr[c],e&&"constructor"===u||!ye(t,u)||o.push(String(u));return o};var Kr=qr;function Qr(t){return"function"===Rr(t)}var tn,en=Object.getPrototypeOf;tn=Qr(Object.getPrototypeOf)?en:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===ve(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var rn=tn;var nn=Object.prototype;function on(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!rr(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),rn(t))}(t),!e||!ye(t,"constructor")&&ye(e,"constructor")&&Qr(e.constructor)&&"[object Function]"===ve(e.constructor)&&ye(e,"isPrototypeOf")&&Qr(e.isPrototypeOf)&&(e===nn||function(t){var e;for(e in t)if(!ye(t,e))return!1;return!0}(t)))}var un="function"==typeof Object.defineProperty?Object.defineProperty:null;var cn,an=Object.defineProperty,ln=Object.prototype,fn=ln.toString,pn=ln.__defineGetter__,sn=ln.__defineSetter__,yn=ln.__lookupGetter__,gn=ln.__lookupSetter__;cn=function(){try{return un({},"x",{}),!0}catch(t){return!1}}()?an:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===fn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===fn.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(yn.call(t,e)||gn.call(t,e)?(n=t.__proto__,t.__proto__=ln,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&pn&&pn.call(t,e,r.get),u&&sn&&sn.call(t,e,r.set),t};var bn=cn;function vn(t,e,r){bn(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var dn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function mn(){return dn.slice()}var hn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function wn(){return hn.slice()}function jn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function _n(t,e,r){bn(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function On(t){return Object.keys(Object(t))}var Sn=void 0!==Object.keys;var En="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function xn(){return En&&"symbol"==typeof Symbol.toStringTag}var Tn=Object.prototype.toString;var In=Object.prototype.hasOwnProperty;function Pn(t,e){return null!=t&&In.call(t,e)}var An="function"==typeof Symbol?Symbol.toStringTag:"";var kn,Vn=xn()?function(t){var e,r,n;if(null==t)return Tn.call(t);r=t[An],e=Pn(t,An);try{t[An]=void 0}catch(e){return Tn.call(t)}return n=Tn.call(t),e?t[An]=r:delete t[An],n}:function(t){return Tn.call(t)};function Nn(t){return"[object Arguments]"===Vn(t)}kn=function(){return Nn(arguments)}();var Fn=kn;function Bn(t){return"string"==typeof t}var Ln=String.prototype.valueOf;var Cn=xn();function Gn(t){return"object"==typeof t&&(t instanceof String||(Cn?function(t){try{return Ln.call(t),!0}catch(t){return!1}}(t):"[object String]"===Vn(t)))}function Yn(t){return Bn(t)||Gn(t)}function Xn(t){return"number"==typeof t}vn(Yn,"isPrimitive",Bn),vn(Yn,"isObject",Gn);var Mn=Number,Wn=Mn.prototype.toString;var $n=xn();function Rn(t){return"object"==typeof t&&(t instanceof Mn||($n?function(t){try{return Wn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Vn(t)))}function Hn(t){return Xn(t)||Rn(t)}function Un(t){return t!=t}function Zn(t){return Xn(t)&&Un(t)}function Dn(t){return Rn(t)&&Un(t.valueOf())}function zn(t){return Zn(t)||Dn(t)}vn(Hn,"isPrimitive",Xn),vn(Hn,"isObject",Rn),vn(zn,"isPrimitive",Zn),vn(zn,"isObject",Dn);var qn=Number.POSITIVE_INFINITY,Jn=Mn.NEGATIVE_INFINITY,Kn=Math.floor;function Qn(t){return Kn(t)===t}function to(t){return t<qn&&t>Jn&&Qn(t)}function eo(t){return Xn(t)&&to(t)}function ro(t){return Rn(t)&&to(t.valueOf())}function no(t){return eo(t)||ro(t)}vn(no,"isPrimitive",eo),vn(no,"isObject",ro);var oo=Object.prototype.propertyIsEnumerable;var io=!oo.call("beep","0");function uo(t,e){var r;return null!=t&&(!(r=oo.call(t,e))&&io&&Yn(t)?!Zn(e=+e)&&eo(e)&&e>=0&&e<t.length:r)}var co=Array.isArray?Array.isArray:function(t){return"[object Array]"===Vn(t)};var ao=Fn?Nn:function(t){return null!==t&&"object"==typeof t&&!co(t)&&"number"==typeof t.length&&Qn(t.length)&&t.length>=0&&t.length<=4294967295&&Pn(t,"callee")&&!uo(t,"callee")},lo=Array.prototype.slice;function fo(t){return null!==t&&"object"==typeof t}vn(fo,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!co(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(fo));var po=uo((function(){}),"prototype"),so=!uo({toString:null},"toString");function yo(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Qn(t.length)&&t.length>=0&&t.length<=9007199254740991}function go(t,e,r){var n,o;if(!yo(t)&&!Bn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!eo(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(zn(e)){for(;o<n;o++)if(zn(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var bo=/./;function vo(){return new Function("return this;")()}var mo="object"==typeof self?self:null,ho="object"==typeof window?window:null,wo="object"==typeof Lr?Lr:null;var jo=function(t){if(arguments.length){if(!_r(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return vo()}if(mo)return mo;if(ho)return ho;if(wo)return wo;throw new Error("unexpected error. Unable to resolve global object.")}(),_o=jo.document&&jo.document.childNodes,Oo=Int8Array;function So(){return/^\s*function\s*([^(]*)/i}var Eo=/^\s*function\s*([^(]*)/i;function xo(t){var e,r,n,o;if(("Object"===(r=Vn(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Eo.exec(n.toString()))return e[1]}return fo(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}vn(So,"REGEXP",Eo);var To="function"==typeof bo||"object"==typeof Oo||"function"==typeof _o?function(t){return xo(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?xo(t).toLowerCase():e};function Io(t){return t.constructor&&t.constructor.prototype===t}var Po=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ao="undefined"==typeof window?void 0:window;var ko=function(){var t;if("undefined"===To(Ao))return!1;for(t in Ao)try{-1===go(Po,t)&&Pn(Ao,t)&&null!==Ao[t]&&"object"===To(Ao[t])&&Io(Ao[t])}catch(t){return!0}return!1}(),Vo="undefined"!=typeof window;var No,Fo=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];No=Sn?function(){return 2!==(On(arguments)||"").length}(1,2)?function(t){return ao(t)?On(lo.call(t)):On(t)}:On:function(t){var e,r,n,o,i,u,c;if(o=[],ao(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Pn(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!fo(t))return o;r=po&&n}for(i in t)r&&"prototype"===i||!Pn(t,i)||o.push(String(i));if(so)for(e=function(t){if(!1===Vo&&!ko)return Io(t);try{return Io(t)}catch(t){return!1}}(t),c=0;c<Fo.length;c++)u=Fo[c],e&&"constructor"===u||!Pn(t,u)||o.push(String(u));return o};var Bo=No;vn(wn,"enum",jn),function(t,e){var r,n,o;for(r=Bo(e),o=0;o<r.length;o++)_n(t,n=r[o],e[n])}(wn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Lo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Co(){return{bool:Lo.bool,int8:Lo.int8,uint8:Lo.uint8,uint8c:Lo.uint8c,int16:Lo.int16,uint16:Lo.uint16,int32:Lo.int32,uint32:Lo.uint32,int64:Lo.int64,uint64:Lo.uint64,float32:Lo.float32,float64:Lo.float64,complex64:Lo.complex64,complex128:Lo.complex128,binary:Lo.binary,generic:Lo.generic,notype:Lo.notype,userdefined_type:Lo.userdefined_type}}vn(mn,"enum",Co),function(t,e){var r,n,o;for(r=Bo(e),o=0;o<r.length;o++)_n(t,n=r[o],e[n])}(mn,Co());var Go=function(t,e){var r,n,o,i,u,c,a,l=!0;if(!ir(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!on(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(ye(e,"duplicates")&&!_r(l=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(n=(r=Kr(t)).length,u={},l)for(a=0;a<n;a++)ye(u,i=t[o=r[a]])?(c=u[i],rr(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(a=0;a<n;a++)u[t[o=r[a]]]=o;return u}(Co(),{duplicates:!1});var Yo={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Xo(){var t;return 0===arguments.length?Yo.all.slice():(t=Yo[arguments[0]])?t.slice():[]}function Mo(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Wo(t,e,r){Q(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}tt(Xo,"enum",Mo),function(t,e){var r,n,o;for(r=ue(e),o=0;o<r.length;o++)Wo(t,n=r[o],e[n])}(Xo,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var $o={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ro(t){var e=typeof t;return"string"===e?null===function(t){var e=$o[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=Go[t];return"string"==typeof e?e:null}(t):null}var Ho={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1};function Uo(){var t,e,r,n;for(r={},e=(t=ue(Ho)).length,n=0;n<e;n++)r[t[n]]=Ho[t[n]];return r}return function(t){return 0===arguments.length?Uo():(t=Ro(t),u(Ho,t)?Ho[t]:null)}}));
//# sourceMappingURL=browser.js.map
