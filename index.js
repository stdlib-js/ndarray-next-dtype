// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).nextDataType=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l,f=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[a],r=u(t,a);try{t[a]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[a]=e:delete t[a],n}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function d(t,r,e){var n=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+v(o):v(o)+t,n&&(t="-"+t)),t}var h=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function w(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!isFinite(n)){if(!b(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=d(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=d(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===m.call(t.specifier)?m.call(e):h.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function j(t){return"string"==typeof t}var _=Math.abs,O=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,x=/e\+(\d)$/,T=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var r,e,n=parseFloat(t.arg);if(!isFinite(n)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":_(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=E.call(e,V,"$1e"),e=E.call(e,k,"e"),e=E.call(e,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=E.call(e,x,"e+0$1"),e=E.call(e,T,"e-0$1"),t.alternate&&(e=E.call(e,I,"$1."),e=E.call(e,P,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=t.specifier===S.call(t.specifier)?S.call(e):O.call(e)}function F(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function B(t,r,e){var n=r-t.length;return n<0?t:t=e?t+F(n):F(n)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function X(t){var r,e,n,o,i,u,c,a,l;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(j(n=t[a]))u+=n;else{if(r=void 0!==n.precision,!(n=Y(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,C(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):L(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=N(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=B(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function $(t){var r,e,n,o;for(e=[],o=0,n=M.exec(t);n;)(r=t.slice(o,M.lastIndex-n[0].length)).length&&e.push(r),e.push(W(n)),o=M.lastIndex,n=M.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function R(t){return"string"==typeof t}function H(t){var r,e,n;if(!R(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=$(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return X.apply(null,e)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,q=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(J.call(t,r)||K.call(t,r)?(n=t.__proto__,t.__proto__=Z,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,r,e.get),u&&q&&q.call(t,r,e.set),t};var Q=U;function tt(t,r,e){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function rt(t){return"string"==typeof t}var et=String.prototype.valueOf;var nt=n();function ot(t){return"object"==typeof t&&(t instanceof String||(nt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function it(t){return rt(t)||ot(t)}function ut(t){return"number"==typeof t}tt(it,"isPrimitive",rt),tt(it,"isObject",ot);var ct=Number,at=ct.prototype.toString;var lt=n();function ft(t){return"object"==typeof t&&(t instanceof ct||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function gt(t){return ft(t)&&st(t.valueOf())}function bt(t){return yt(t)||gt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",yt),tt(bt,"isObject",gt);var vt=Number.POSITIVE_INFINITY,dt=ct.NEGATIVE_INFINITY,ht=Math.floor;function mt(t){return ht(t)===t}function wt(t){return t<vt&&t>dt&&mt(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function Ot(t){return jt(t)||_t(t)}tt(Ot,"isPrimitive",jt),tt(Ot,"isObject",_t);var St=Object.prototype.propertyIsEnumerable;var Et=!St.call("beep","0");function xt(t,r){var e;return null!=t&&(!(e=St.call(t,r))&&Et&&it(t)?!yt(r=+r)&&jt(r)&&r>=0&&r<t.length:e)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var It=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&mt(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!xt(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Tt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(At));var kt=xt((function(){}),"prototype"),Vt=!xt({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&mt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,r,e){var n,o;if(!Nt(t)&&!rt(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!jt(e))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(bt(r)){for(;o<n;o++)if(bt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=n();function Xt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Mt(t){return Lt(t)||Xt(t)}function Wt(){return new Function("return this;")()}tt(Mt,"isPrimitive",Lt),tt(Mt,"isObject",Xt);var $t="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Ht="object"==typeof global?global:null,Ut="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Ut)return Ut;if($t)return $t;if(Rt)return Rt;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=Zt.document&&Zt.document.childNodes,zt=Int8Array;function qt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(t){var r,e,n,o;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Jt.exec(n.toString()))return r[1]}return At(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}tt(qt,"REGEXP",Jt);var Qt="function"==typeof Bt||"object"==typeof zt||"function"==typeof Dt?function(t){return Kt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Kt(t).toLowerCase():r};function tr(t){return t.constructor&&t.constructor.prototype===t}var rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],er="undefined"==typeof window?void 0:window;var nr=function(){var t;if("undefined"===Qt(er))return!1;for(t in er)try{-1===Ft(rr,t)&&u(er,t)&&null!==er[t]&&"object"===Qt(er[t])&&tr(er[t])}catch(t){return!0}return!1}(),or="undefined"!=typeof window;var ir,ur=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ir=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return It(r)?t(Pt.call(r)):t(r)}:t:function(t){var r,e,n,o,i,c,a;if(o=[],It(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!At(t))return o;e=kt&&n}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(Vt)for(r=function(t){if(!1===or&&!nr)return tr(t);try{return tr(t)}catch(t){return!1}}(t),a=0;a<ur.length;a++)c=ur[a],r&&"constructor"===c||!u(t,c)||o.push(String(c));return o};var cr=ir;function ar(t){return Object.keys(Object(t))}var lr=void 0!==Object.keys;var fr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function pr(){return fr&&"symbol"==typeof Symbol.toStringTag}var sr=Object.prototype.toString;var yr=Object.prototype.hasOwnProperty;function gr(t,r){return null!=t&&yr.call(t,r)}var br="function"==typeof Symbol?Symbol.toStringTag:"";var vr,dr=pr()?function(t){var r,e,n;if(null==t)return sr.call(t);e=t[br],r=gr(t,br);try{t[br]=void 0}catch(r){return sr.call(t)}return n=sr.call(t),r?t[br]=e:delete t[br],n}:function(t){return sr.call(t)};function hr(t){return"[object Arguments]"===dr(t)}vr=function(){return hr(arguments)}();var mr=vr,wr="function"==typeof Object.defineProperty?Object.defineProperty:null;var jr,_r=Object.defineProperty,Or=Object.prototype,Sr=Or.toString,Er=Or.__defineGetter__,xr=Or.__defineSetter__,Tr=Or.__lookupGetter__,Ir=Or.__lookupSetter__;jr=function(){try{return wr({},"x",{}),!0}catch(t){return!1}}()?_r:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Sr.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Sr.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(Tr.call(t,r)||Ir.call(t,r)?(n=t.__proto__,t.__proto__=Or,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Er&&Er.call(t,r,e.get),u&&xr&&xr.call(t,r,e.set),t};var Pr=jr;function Ar(t,r,e){Pr(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function kr(t){return"string"==typeof t}var Vr=String.prototype.valueOf;var Nr=pr();function Fr(t){return"object"==typeof t&&(t instanceof String||(Nr?function(t){try{return Vr.call(t),!0}catch(t){return!1}}(t):"[object String]"===dr(t)))}function Br(t){return kr(t)||Fr(t)}function Lr(t){return"number"==typeof t}Ar(Br,"isPrimitive",kr),Ar(Br,"isObject",Fr);var Cr=Number,Gr=Cr.prototype.toString;var Yr=pr();function Xr(t){return"object"==typeof t&&(t instanceof Cr||(Yr?function(t){try{return Gr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===dr(t)))}function Mr(t){return Lr(t)||Xr(t)}function Wr(t){return t!=t}function $r(t){return Lr(t)&&Wr(t)}function Rr(t){return Xr(t)&&Wr(t.valueOf())}function Hr(t){return $r(t)||Rr(t)}Ar(Mr,"isPrimitive",Lr),Ar(Mr,"isObject",Xr),Ar(Hr,"isPrimitive",$r),Ar(Hr,"isObject",Rr);var Ur=Number.POSITIVE_INFINITY,Zr=Cr.NEGATIVE_INFINITY,Dr=Math.floor;function zr(t){return Dr(t)===t}function qr(t){return t<Ur&&t>Zr&&zr(t)}function Jr(t){return Lr(t)&&qr(t)}function Kr(t){return Xr(t)&&qr(t.valueOf())}function Qr(t){return Jr(t)||Kr(t)}Ar(Qr,"isPrimitive",Jr),Ar(Qr,"isObject",Kr);var te=Object.prototype.propertyIsEnumerable;var re=!te.call("beep","0");function ee(t,r){var e;return null!=t&&(!(e=te.call(t,r))&&re&&Br(t)?!$r(r=+r)&&Jr(r)&&r>=0&&r<t.length:e)}var ne=Array.isArray?Array.isArray:function(t){return"[object Array]"===dr(t)};var oe=mr?hr:function(t){return null!==t&&"object"==typeof t&&!ne(t)&&"number"==typeof t.length&&zr(t.length)&&t.length>=0&&t.length<=4294967295&&gr(t,"callee")&&!ee(t,"callee")},ie=Array.prototype.slice;function ue(t){return null!==t&&"object"==typeof t}Ar(ue,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!ne(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ue));var ce=ee((function(){}),"prototype"),ae=!ee({toString:null},"toString");function le(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&zr(t.length)&&t.length>=0&&t.length<=9007199254740991}function fe(t,r,e){var n,o;if(!le(t)&&!kr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Jr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Hr(r)){for(;o<n;o++)if(Hr(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var pe=/./;function se(t){return"boolean"==typeof t}var ye=Boolean.prototype.toString;var ge=pr();function be(t){return"object"==typeof t&&(t instanceof Boolean||(ge?function(t){try{return ye.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===dr(t)))}function ve(t){return se(t)||be(t)}function de(){return new Function("return this;")()}Ar(ve,"isPrimitive",se),Ar(ve,"isObject",be);var he="object"==typeof self?self:null,me="object"==typeof window?window:null,we="object"==typeof global?global:null;var je=function(t){if(arguments.length){if(!se(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return de()}if(he)return he;if(me)return me;if(we)return we;throw new Error("unexpected error. Unable to resolve global object.")}(),_e=je.document&&je.document.childNodes,Oe=Int8Array;function Se(){return/^\s*function\s*([^(]*)/i}var Ee=/^\s*function\s*([^(]*)/i;function xe(t){var r,e,n,o;if(("Object"===(e=dr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Ee.exec(n.toString()))return r[1]}return ue(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ar(Se,"REGEXP",Ee);var Te="function"==typeof pe||"object"==typeof Oe||"function"==typeof _e?function(t){return xe(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?xe(t).toLowerCase():r};function Ie(t){return t.constructor&&t.constructor.prototype===t}var Pe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Ae="undefined"==typeof window?void 0:window;var ke=function(){var t;if("undefined"===Te(Ae))return!1;for(t in Ae)try{-1===fe(Pe,t)&&gr(Ae,t)&&null!==Ae[t]&&"object"===Te(Ae[t])&&Ie(Ae[t])}catch(t){return!0}return!1}(),Ve="undefined"!=typeof window;var Ne,Fe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ne=lr?function(){return 2!==(ar(arguments)||"").length}(1,2)?function(t){return oe(t)?ar(ie.call(t)):ar(t)}:ar:function(t){var r,e,n,o,i,u,c;if(o=[],oe(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!gr(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!ue(t))return o;e=ce&&n}for(i in t)e&&"prototype"===i||!gr(t,i)||o.push(String(i));if(ae)for(r=function(t){if(!1===Ve&&!ke)return Ie(t);try{return Ie(t)}catch(t){return!1}}(t),c=0;c<Fe.length;c++)u=Fe[c],r&&"constructor"===u||!gr(t,u)||o.push(String(u));return o};var Be=Ne;function Le(t){return"function"===Te(t)}var Ce,Ge=Object.getPrototypeOf;Ce=Le(Object.getPrototypeOf)?Ge:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===dr(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ye=Ce;var Xe=Object.prototype;function Me(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!ne(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Ye(t))}(t),!r||!gr(t,"constructor")&&gr(r,"constructor")&&Le(r.constructor)&&"[object Function]"===dr(r.constructor)&&gr(r,"isPrototypeOf")&&Le(r.isPrototypeOf)&&(r===Xe||function(t){var r;for(r in t)if(!gr(t,r))return!1;return!0}(t)))}var We="function"==typeof Object.defineProperty?Object.defineProperty:null;var $e,Re=Object.defineProperty,He=Object.prototype,Ue=He.toString,Ze=He.__defineGetter__,De=He.__defineSetter__,ze=He.__lookupGetter__,qe=He.__lookupSetter__;$e=function(){try{return We({},"x",{}),!0}catch(t){return!1}}()?Re:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Ue.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Ue.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(ze.call(t,r)||qe.call(t,r)?(n=t.__proto__,t.__proto__=He,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Ze&&Ze.call(t,r,e.get),u&&De&&De.call(t,r,e.set),t};var Je=$e;function Ke(t,r,e){Je(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Qe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function tn(){return Qe.slice()}var rn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function en(){return rn.slice()}function nn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function on(t,r,e){Je(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function un(t){return Object.keys(Object(t))}var cn=void 0!==Object.keys;var an="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function ln(){return an&&"symbol"==typeof Symbol.toStringTag}var fn=Object.prototype.toString;var pn=Object.prototype.hasOwnProperty;function sn(t,r){return null!=t&&pn.call(t,r)}var yn="function"==typeof Symbol?Symbol.toStringTag:"";var gn,bn=ln()?function(t){var r,e,n;if(null==t)return fn.call(t);e=t[yn],r=sn(t,yn);try{t[yn]=void 0}catch(r){return fn.call(t)}return n=fn.call(t),r?t[yn]=e:delete t[yn],n}:function(t){return fn.call(t)};function vn(t){return"[object Arguments]"===bn(t)}gn=function(){return vn(arguments)}();var dn=gn;function hn(t){return"string"==typeof t}var mn=String.prototype.valueOf;var wn=ln();function jn(t){return"object"==typeof t&&(t instanceof String||(wn?function(t){try{return mn.call(t),!0}catch(t){return!1}}(t):"[object String]"===bn(t)))}function _n(t){return hn(t)||jn(t)}function On(t){return"number"==typeof t}Ke(_n,"isPrimitive",hn),Ke(_n,"isObject",jn);var Sn=Number,En=Sn.prototype.toString;var xn=ln();function Tn(t){return"object"==typeof t&&(t instanceof Sn||(xn?function(t){try{return En.call(t),!0}catch(t){return!1}}(t):"[object Number]"===bn(t)))}function In(t){return On(t)||Tn(t)}function Pn(t){return t!=t}function An(t){return On(t)&&Pn(t)}function kn(t){return Tn(t)&&Pn(t.valueOf())}function Vn(t){return An(t)||kn(t)}Ke(In,"isPrimitive",On),Ke(In,"isObject",Tn),Ke(Vn,"isPrimitive",An),Ke(Vn,"isObject",kn);var Nn=Number.POSITIVE_INFINITY,Fn=Sn.NEGATIVE_INFINITY,Bn=Math.floor;function Ln(t){return Bn(t)===t}function Cn(t){return t<Nn&&t>Fn&&Ln(t)}function Gn(t){return On(t)&&Cn(t)}function Yn(t){return Tn(t)&&Cn(t.valueOf())}function Xn(t){return Gn(t)||Yn(t)}Ke(Xn,"isPrimitive",Gn),Ke(Xn,"isObject",Yn);var Mn=Object.prototype.propertyIsEnumerable;var Wn=!Mn.call("beep","0");function $n(t,r){var e;return null!=t&&(!(e=Mn.call(t,r))&&Wn&&_n(t)?!An(r=+r)&&Gn(r)&&r>=0&&r<t.length:e)}var Rn=Array.isArray?Array.isArray:function(t){return"[object Array]"===bn(t)};var Hn=dn?vn:function(t){return null!==t&&"object"==typeof t&&!Rn(t)&&"number"==typeof t.length&&Ln(t.length)&&t.length>=0&&t.length<=4294967295&&sn(t,"callee")&&!$n(t,"callee")},Un=Array.prototype.slice;function Zn(t){return null!==t&&"object"==typeof t}Ke(Zn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Rn(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Zn));var Dn=$n((function(){}),"prototype"),zn=!$n({toString:null},"toString");function qn(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Ln(t.length)&&t.length>=0&&t.length<=9007199254740991}function Jn(t,r,e){var n,o;if(!qn(t)&&!hn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Gn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Vn(r)){for(;o<n;o++)if(Vn(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var Kn=/./;function Qn(t){return"boolean"==typeof t}var to=Boolean.prototype.toString;var ro=ln();function eo(t){return"object"==typeof t&&(t instanceof Boolean||(ro?function(t){try{return to.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===bn(t)))}function no(t){return Qn(t)||eo(t)}function oo(){return new Function("return this;")()}Ke(no,"isPrimitive",Qn),Ke(no,"isObject",eo);var io="object"==typeof self?self:null,uo="object"==typeof window?window:null,co="object"==typeof global?global:null;var ao=function(t){if(arguments.length){if(!Qn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return oo()}if(io)return io;if(uo)return uo;if(co)return co;throw new Error("unexpected error. Unable to resolve global object.")}(),lo=ao.document&&ao.document.childNodes,fo=Int8Array;function po(){return/^\s*function\s*([^(]*)/i}var so=/^\s*function\s*([^(]*)/i;function yo(t){var r,e,n,o;if(("Object"===(e=bn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=so.exec(n.toString()))return r[1]}return Zn(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ke(po,"REGEXP",so);var go="function"==typeof Kn||"object"==typeof fo||"function"==typeof lo?function(t){return yo(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?yo(t).toLowerCase():r};function bo(t){return t.constructor&&t.constructor.prototype===t}var vo=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ho="undefined"==typeof window?void 0:window;var mo=function(){var t;if("undefined"===go(ho))return!1;for(t in ho)try{-1===Jn(vo,t)&&sn(ho,t)&&null!==ho[t]&&"object"===go(ho[t])&&bo(ho[t])}catch(t){return!0}return!1}(),wo="undefined"!=typeof window;var jo,_o=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];jo=cn?function(){return 2!==(un(arguments)||"").length}(1,2)?function(t){return Hn(t)?un(Un.call(t)):un(t)}:un:function(t){var r,e,n,o,i,u,c;if(o=[],Hn(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!sn(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Zn(t))return o;e=Dn&&n}for(i in t)e&&"prototype"===i||!sn(t,i)||o.push(String(i));if(zn)for(r=function(t){if(!1===wo&&!mo)return bo(t);try{return bo(t)}catch(t){return!1}}(t),c=0;c<_o.length;c++)u=_o[c],r&&"constructor"===u||!sn(t,u)||o.push(String(u));return o};var Oo=jo;Ke(en,"enum",nn),function(t,r){var e,n,o;for(e=Oo(r),o=0;o<e.length;o++)on(t,n=e[o],r[n])}(en,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var So={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Eo(){return{bool:So.bool,int8:So.int8,uint8:So.uint8,uint8c:So.uint8c,int16:So.int16,uint16:So.uint16,int32:So.int32,uint32:So.uint32,int64:So.int64,uint64:So.uint64,float32:So.float32,float64:So.float64,complex64:So.complex64,complex128:So.complex128,binary:So.binary,generic:So.generic,notype:So.notype,userdefined_type:So.userdefined_type}}Ke(tn,"enum",Eo),function(t,r){var e,n,o;for(e=Oo(r),o=0;o<e.length;o++)on(t,n=e[o],r[n])}(tn,Eo());var xo=function(t,r){var e,n,o,i,u,c,a,l=!0;if(!ue(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Me(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(gr(r,"duplicates")&&!se(l=r.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(n=(e=Be(t)).length,u={},l)for(a=0;a<n;a++)gr(u,i=t[o=e[a]])?(c=u[i],ne(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(a=0;a<n;a++)u[t[o=e[a]]]=o;return u}(Eo(),{duplicates:!1});var To={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Io(){var t;return 0===arguments.length?To.all.slice():(t=To[arguments[0]])?t.slice():[]}function Po(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ao(t,r,e){Q(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}tt(Io,"enum",Po),function(t,r){var e,n,o;for(e=cr(r),o=0;o<e.length;o++)Ao(t,n=e[o],r[n])}(Io,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var ko={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Vo(t){var r=typeof t;return"string"===r?null===function(t){var r=ko[t];return"number"==typeof r?r:null}(t)?null:t:"number"===r?function(t){var r=xo[t];return"string"==typeof r?r:null}(t):null}var No={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1};function Fo(){var t,r,e,n;for(e={},r=(t=cr(No)).length,n=0;n<r;n++)e[t[n]]=No[t[n]];return e}return function(t){return 0===arguments.length?Fo():(t=Vo(t),u(No,t)?No[t]:null)}}));
//# sourceMappingURL=index.js.map