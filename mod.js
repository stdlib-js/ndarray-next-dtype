// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[a],r=u(t,a);try{t[a]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[a]=e:delete t[a],n}:function(t){return o.call(t)};function f(t){return"[object Arguments]"===l(t)}var p=function(){return f(arguments)}(),s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function g(t){return"number"==typeof t}function b(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function v(t,r,e){var n=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+b(o):b(o)+t,n&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function m(t){var r,e,n;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,n=parseInt(e,10),!isFinite(n)){if(!g(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===t.specifier||10!==r)&&(n=4294967295+n+1),n<0?(e=(-n).toString(r),t.precision&&(e=v(e,t.precision,t.padRight)),e="-"+e):(e=n.toString(r),n||t.precision?t.precision&&(e=v(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):d.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function w(t){return"string"==typeof t}var j=Math.abs,_=String.prototype.toLowerCase,O=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,x=/e-(\d)$/,I=/^(\d+)$/,T=/^(\d+)e/,P=/\.0$/,A=/\.0*e/,k=/(\..*[^0])0*e/;function V(t){var r,e,n=parseFloat(t.arg);if(!isFinite(n)){if(!g(t.arg))throw new Error("invalid floating-point number. Value: "+e);n=t.arg}switch(t.specifier){case"e":case"E":e=n.toExponential(t.precision);break;case"f":case"F":e=n.toFixed(t.precision);break;case"g":case"G":j(n)<1e-4?((r=t.precision)>0&&(r-=1),e=n.toExponential(r)):e=n.toPrecision(t.precision),t.alternate||(e=S.call(e,k,"$1e"),e=S.call(e,A,"e"),e=S.call(e,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=S.call(e,E,"e+0$1"),e=S.call(e,x,"e-0$1"),t.alternate&&(e=S.call(e,I,"$1."),e=S.call(e,T,"$1.e")),n>=0&&t.sign&&(e=t.sign+e),e=t.specifier===O.call(t.specifier)?O.call(e):_.call(e)}function N(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function F(t,r,e){var n=r-t.length;return n<0?t:t=e?t+N(n):N(n)+t}var B=String.fromCharCode,L=isNaN,C=Array.isArray;function G(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function Y(t){var r,e,n,o,i,u,c,a,l;if(!C(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(w(n=t[a]))u+=n;else{if(r=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(o=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,L(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,L(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!L(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=L(i)?String(n.arg):B(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=F(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function W(t){var r,e,n,o;for(e=[],o=0,n=X.exec(t);n;)(r=t.slice(o,X.lastIndex-n[0].length)).length&&e.push(r),e.push(M(n)),o=X.lastIndex,n=X.exec(t);return(r=t.slice(o)).length&&e.push(r),e}function $(t){return"string"==typeof t}function R(t){var r,e,n;if(!$(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=W(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return Y.apply(null,e)}var H,U=Object.prototype,Z=U.toString,D=U.__defineGetter__,z=U.__defineSetter__,q=U.__lookupGetter__,J=U.__lookupSetter__;H=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(q.call(t,r)||J.call(t,r)?(n=t.__proto__,t.__proto__=U,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(t,r,e.get),u&&z&&z.call(t,r,e.set),t};var K=H;function Q(t,r,e){K(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function tt(t){return"string"==typeof t}var rt=String.prototype.valueOf;var et=n();function nt(t){return"object"==typeof t&&(t instanceof String||(et?function(t){try{return rt.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function ot(t){return tt(t)||nt(t)}function it(t){return"number"==typeof t}Q(ot,"isPrimitive",tt),Q(ot,"isObject",nt);var ut=Number,ct=ut.prototype.toString;var at=n();function lt(t){return"object"==typeof t&&(t instanceof ut||(at?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function ft(t){return it(t)||lt(t)}function pt(t){return t!=t}function st(t){return it(t)&&pt(t)}function yt(t){return lt(t)&&pt(t.valueOf())}function gt(t){return st(t)||yt(t)}Q(ft,"isPrimitive",it),Q(ft,"isObject",lt),Q(gt,"isPrimitive",st),Q(gt,"isObject",yt);var bt=Number.POSITIVE_INFINITY,vt=ut.NEGATIVE_INFINITY,dt=Math.floor;function ht(t){return dt(t)===t}function mt(t){return t<bt&&t>vt&&ht(t)}function wt(t){return it(t)&&mt(t)}function jt(t){return lt(t)&&mt(t.valueOf())}function _t(t){return wt(t)||jt(t)}Q(_t,"isPrimitive",wt),Q(_t,"isObject",jt);var Ot=Object.prototype.propertyIsEnumerable;var St=!Ot.call("beep","0");function Et(t,r){var e;return null!=t&&(!(e=Ot.call(t,r))&&St&&ot(t)?!st(r=+r)&&wt(r)&&r>=0&&r<t.length:e)}var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var It=p?f:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Et(t,"callee")},Tt=Array.prototype.slice;function Pt(t){return null!==t&&"object"==typeof t}Q(Pt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!xt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Pt));var At=Et((function(){}),"prototype"),kt=!Et({toString:null},"toString");function Vt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,r,e){var n,o;if(!Vt(t)&&!tt(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!wt(e))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(gt(r)){for(;o<n;o++)if(gt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var Ft=/./;function Bt(t){return"boolean"==typeof t}var Lt=Boolean,Ct=Boolean.prototype.toString;var Gt=n();function Yt(t){return"object"==typeof t&&(t instanceof Lt||(Gt?function(t){try{return Ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function Xt(t){return Bt(t)||Yt(t)}function Mt(){return new Function("return this;")()}Q(Xt,"isPrimitive",Bt),Q(Xt,"isObject",Yt);var Wt="object"==typeof self?self:null,$t="object"==typeof window?window:null,Rt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ht="object"==typeof Rt?Rt:null,Ut="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Bt(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Mt()}if(Ut)return Ut;if(Wt)return Wt;if($t)return $t;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=Zt.document&&Zt.document.childNodes,zt=Int8Array;function qt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(t){var r,e,n,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Jt.exec(n.toString()))return r[1]}return Pt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Q(qt,"REGEXP",Jt);var Qt="function"==typeof Ft||"object"==typeof zt||"function"==typeof Dt?function(t){return Kt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Kt(t).toLowerCase():r};function tr(t){return t.constructor&&t.constructor.prototype===t}var rr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],er="undefined"==typeof window?void 0:window;var nr=function(){var t;if("undefined"===Qt(er))return!1;for(t in er)try{-1===Nt(rr,t)&&u(er,t)&&null!==er[t]&&"object"===Qt(er[t])&&tr(er[t])}catch(t){return!0}return!1}(),or="undefined"!=typeof window;var ir=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ur=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return It(r)?t(Tt.call(r)):t(r)}:t:function(t){var r,e,n,o,i,c,a;if(o=[],It(t)){for(a=0;a<t.length;a++)o.push(a.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)o.push(a.toString())}else{if(!1==(n="function"==typeof t)&&!Pt(t))return o;e=At&&n}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(kt)for(r=function(t){if(!1===or&&!nr)return tr(t);try{return tr(t)}catch(t){return!1}}(t),a=0;a<ir.length;a++)c=ir[a],r&&"constructor"===c||!u(t,c)||o.push(String(c));return o};function cr(t){return Object.keys(Object(t))}var ar=void 0!==Object.keys;var lr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function fr(){return lr&&"symbol"==typeof Symbol.toStringTag}var pr=Object.prototype.toString;var sr=Object.prototype.hasOwnProperty;function yr(t,r){return null!=t&&sr.call(t,r)}var gr="function"==typeof Symbol?Symbol.toStringTag:"";var br=fr()?function(t){var r,e,n;if(null==t)return pr.call(t);e=t[gr],r=yr(t,gr);try{t[gr]=void 0}catch(r){return pr.call(t)}return n=pr.call(t),r?t[gr]=e:delete t[gr],n}:function(t){return pr.call(t)};function vr(t){return"[object Arguments]"===br(t)}var dr=function(){return vr(arguments)}(),hr="function"==typeof Object.defineProperty?Object.defineProperty:null;var mr,wr=Object.defineProperty,jr=Object.prototype,_r=jr.toString,Or=jr.__defineGetter__,Sr=jr.__defineSetter__,Er=jr.__lookupGetter__,xr=jr.__lookupSetter__;mr=function(){try{return hr({},"x",{}),!0}catch(t){return!1}}()?wr:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===_r.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===_r.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(Er.call(t,r)||xr.call(t,r)?(n=t.__proto__,t.__proto__=jr,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Or&&Or.call(t,r,e.get),u&&Sr&&Sr.call(t,r,e.set),t};var Ir=mr;function Tr(t,r,e){Ir(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Pr(t){return"string"==typeof t}var Ar=String.prototype.valueOf;var kr=fr();function Vr(t){return"object"==typeof t&&(t instanceof String||(kr?function(t){try{return Ar.call(t),!0}catch(t){return!1}}(t):"[object String]"===br(t)))}function Nr(t){return Pr(t)||Vr(t)}function Fr(t){return"number"==typeof t}Tr(Nr,"isPrimitive",Pr),Tr(Nr,"isObject",Vr);var Br=Number,Lr=Br.prototype.toString;var Cr=fr();function Gr(t){return"object"==typeof t&&(t instanceof Br||(Cr?function(t){try{return Lr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===br(t)))}function Yr(t){return Fr(t)||Gr(t)}function Xr(t){return t!=t}function Mr(t){return Fr(t)&&Xr(t)}function Wr(t){return Gr(t)&&Xr(t.valueOf())}function $r(t){return Mr(t)||Wr(t)}Tr(Yr,"isPrimitive",Fr),Tr(Yr,"isObject",Gr),Tr($r,"isPrimitive",Mr),Tr($r,"isObject",Wr);var Rr=Number.POSITIVE_INFINITY,Hr=Br.NEGATIVE_INFINITY,Ur=Math.floor;function Zr(t){return Ur(t)===t}function Dr(t){return t<Rr&&t>Hr&&Zr(t)}function zr(t){return Fr(t)&&Dr(t)}function qr(t){return Gr(t)&&Dr(t.valueOf())}function Jr(t){return zr(t)||qr(t)}Tr(Jr,"isPrimitive",zr),Tr(Jr,"isObject",qr);var Kr=Object.prototype.propertyIsEnumerable;var Qr=!Kr.call("beep","0");function te(t,r){var e;return null!=t&&(!(e=Kr.call(t,r))&&Qr&&Nr(t)?!Mr(r=+r)&&zr(r)&&r>=0&&r<t.length:e)}var re=Array.isArray?Array.isArray:function(t){return"[object Array]"===br(t)};var ee=dr?vr:function(t){return null!==t&&"object"==typeof t&&!re(t)&&"number"==typeof t.length&&Zr(t.length)&&t.length>=0&&t.length<=4294967295&&yr(t,"callee")&&!te(t,"callee")},ne=Array.prototype.slice;function oe(t){return null!==t&&"object"==typeof t}Tr(oe,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!re(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(oe));var ie=te((function(){}),"prototype"),ue=!te({toString:null},"toString");function ce(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Zr(t.length)&&t.length>=0&&t.length<=9007199254740991}function ae(t,r,e){var n,o;if(!ce(t)&&!Pr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!zr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if($r(r)){for(;o<n;o++)if($r(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var le=/./;function fe(t){return"boolean"==typeof t}var pe=Boolean.prototype.toString;var se=fr();function ye(t){return"object"==typeof t&&(t instanceof Boolean||(se?function(t){try{return pe.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===br(t)))}function ge(t){return fe(t)||ye(t)}function be(){return new Function("return this;")()}Tr(ge,"isPrimitive",fe),Tr(ge,"isObject",ye);var ve="object"==typeof self?self:null,de="object"==typeof window?window:null,he="object"==typeof Rt?Rt:null;var me=function(t){if(arguments.length){if(!fe(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return be()}if(ve)return ve;if(de)return de;if(he)return he;throw new Error("unexpected error. Unable to resolve global object.")}(),we=me.document&&me.document.childNodes,je=Int8Array;function _e(){return/^\s*function\s*([^(]*)/i}var Oe=/^\s*function\s*([^(]*)/i;function Se(t){var r,e,n,o;if(("Object"===(e=br(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Oe.exec(n.toString()))return r[1]}return oe(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Tr(_e,"REGEXP",Oe);var Ee="function"==typeof le||"object"==typeof je||"function"==typeof we?function(t){return Se(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Se(t).toLowerCase():r};function xe(t){return t.constructor&&t.constructor.prototype===t}var Ie=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Te="undefined"==typeof window?void 0:window;var Pe=function(){var t;if("undefined"===Ee(Te))return!1;for(t in Te)try{-1===ae(Ie,t)&&yr(Te,t)&&null!==Te[t]&&"object"===Ee(Te[t])&&xe(Te[t])}catch(t){return!0}return!1}(),Ae="undefined"!=typeof window;var ke=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ve=ar?function(){return 2!==(cr(arguments)||"").length}(1,2)?function(t){return ee(t)?cr(ne.call(t)):cr(t)}:cr:function(t){var r,e,n,o,i,u,c;if(o=[],ee(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!yr(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!oe(t))return o;e=ie&&n}for(i in t)e&&"prototype"===i||!yr(t,i)||o.push(String(i));if(ue)for(r=function(t){if(!1===Ae&&!Pe)return xe(t);try{return xe(t)}catch(t){return!1}}(t),c=0;c<ke.length;c++)u=ke[c],r&&"constructor"===u||!yr(t,u)||o.push(String(u));return o};function Ne(t){return"function"===Ee(t)}var Fe,Be=Object.getPrototypeOf;Fe=Ne(Object.getPrototypeOf)?Be:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===br(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Le=Fe;var Ce=Object.prototype;function Ge(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!re(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Le(t))}(t),!r||!yr(t,"constructor")&&yr(r,"constructor")&&Ne(r.constructor)&&"[object Function]"===br(r.constructor)&&yr(r,"isPrototypeOf")&&Ne(r.isPrototypeOf)&&(r===Ce||function(t){var r;for(r in t)if(!yr(t,r))return!1;return!0}(t)))}var Ye="function"==typeof Object.defineProperty?Object.defineProperty:null;var Xe,Me=Object.defineProperty,We=Object.prototype,$e=We.toString,Re=We.__defineGetter__,He=We.__defineSetter__,Ue=We.__lookupGetter__,Ze=We.__lookupSetter__;Xe=function(){try{return Ye({},"x",{}),!0}catch(t){return!1}}()?Me:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===$e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===$e.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(Ue.call(t,r)||Ze.call(t,r)?(n=t.__proto__,t.__proto__=We,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Re&&Re.call(t,r,e.get),u&&He&&He.call(t,r,e.set),t};var De=Xe;function ze(t,r,e){De(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var qe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Je(){return qe.slice()}var Ke=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Qe(){return Ke.slice()}function tn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function rn(t,r,e){De(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function en(t){return Object.keys(Object(t))}var nn=void 0!==Object.keys;var on="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function un(){return on&&"symbol"==typeof Symbol.toStringTag}var cn=Object.prototype.toString;var an=Object.prototype.hasOwnProperty;function ln(t,r){return null!=t&&an.call(t,r)}var fn="function"==typeof Symbol?Symbol.toStringTag:"";var pn=un()?function(t){var r,e,n;if(null==t)return cn.call(t);e=t[fn],r=ln(t,fn);try{t[fn]=void 0}catch(r){return cn.call(t)}return n=cn.call(t),r?t[fn]=e:delete t[fn],n}:function(t){return cn.call(t)};function sn(t){return"[object Arguments]"===pn(t)}var yn=function(){return sn(arguments)}();function gn(t){return"string"==typeof t}var bn=String.prototype.valueOf;var vn=un();function dn(t){return"object"==typeof t&&(t instanceof String||(vn?function(t){try{return bn.call(t),!0}catch(t){return!1}}(t):"[object String]"===pn(t)))}function hn(t){return gn(t)||dn(t)}function mn(t){return"number"==typeof t}ze(hn,"isPrimitive",gn),ze(hn,"isObject",dn);var wn=Number,jn=wn.prototype.toString;var _n=un();function On(t){return"object"==typeof t&&(t instanceof wn||(_n?function(t){try{return jn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===pn(t)))}function Sn(t){return mn(t)||On(t)}function En(t){return t!=t}function xn(t){return mn(t)&&En(t)}function In(t){return On(t)&&En(t.valueOf())}function Tn(t){return xn(t)||In(t)}ze(Sn,"isPrimitive",mn),ze(Sn,"isObject",On),ze(Tn,"isPrimitive",xn),ze(Tn,"isObject",In);var Pn=Number.POSITIVE_INFINITY,An=wn.NEGATIVE_INFINITY,kn=Math.floor;function Vn(t){return kn(t)===t}function Nn(t){return t<Pn&&t>An&&Vn(t)}function Fn(t){return mn(t)&&Nn(t)}function Bn(t){return On(t)&&Nn(t.valueOf())}function Ln(t){return Fn(t)||Bn(t)}ze(Ln,"isPrimitive",Fn),ze(Ln,"isObject",Bn);var Cn=Object.prototype.propertyIsEnumerable;var Gn=!Cn.call("beep","0");function Yn(t,r){var e;return null!=t&&(!(e=Cn.call(t,r))&&Gn&&hn(t)?!xn(r=+r)&&Fn(r)&&r>=0&&r<t.length:e)}var Xn=Array.isArray?Array.isArray:function(t){return"[object Array]"===pn(t)};var Mn=yn?sn:function(t){return null!==t&&"object"==typeof t&&!Xn(t)&&"number"==typeof t.length&&Vn(t.length)&&t.length>=0&&t.length<=4294967295&&ln(t,"callee")&&!Yn(t,"callee")},Wn=Array.prototype.slice;function $n(t){return null!==t&&"object"==typeof t}ze($n,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Xn(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}($n));var Rn=Yn((function(){}),"prototype"),Hn=!Yn({toString:null},"toString");function Un(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Vn(t.length)&&t.length>=0&&t.length<=9007199254740991}function Zn(t,r,e){var n,o;if(!Un(t)&&!gn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Fn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Tn(r)){for(;o<n;o++)if(Tn(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var Dn=/./;function zn(t){return"boolean"==typeof t}var qn=Boolean.prototype.toString;var Jn=un();function Kn(t){return"object"==typeof t&&(t instanceof Boolean||(Jn?function(t){try{return qn.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===pn(t)))}function Qn(t){return zn(t)||Kn(t)}function to(){return new Function("return this;")()}ze(Qn,"isPrimitive",zn),ze(Qn,"isObject",Kn);var ro="object"==typeof self?self:null,eo="object"==typeof window?window:null,no="object"==typeof Rt?Rt:null;var oo=function(t){if(arguments.length){if(!zn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return to()}if(ro)return ro;if(eo)return eo;if(no)return no;throw new Error("unexpected error. Unable to resolve global object.")}(),io=oo.document&&oo.document.childNodes,uo=Int8Array;function co(){return/^\s*function\s*([^(]*)/i}var ao=/^\s*function\s*([^(]*)/i;function lo(t){var r,e,n,o;if(("Object"===(e=pn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ao.exec(n.toString()))return r[1]}return $n(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ze(co,"REGEXP",ao);var fo="function"==typeof Dn||"object"==typeof uo||"function"==typeof io?function(t){return lo(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?lo(t).toLowerCase():r};function po(t){return t.constructor&&t.constructor.prototype===t}var so=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yo="undefined"==typeof window?void 0:window;var go=function(){var t;if("undefined"===fo(yo))return!1;for(t in yo)try{-1===Zn(so,t)&&ln(yo,t)&&null!==yo[t]&&"object"===fo(yo[t])&&po(yo[t])}catch(t){return!0}return!1}(),bo="undefined"!=typeof window;var vo=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ho=nn?function(){return 2!==(en(arguments)||"").length}(1,2)?function(t){return Mn(t)?en(Wn.call(t)):en(t)}:en:function(t){var r,e,n,o,i,u,c;if(o=[],Mn(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!ln(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!$n(t))return o;e=Rn&&n}for(i in t)e&&"prototype"===i||!ln(t,i)||o.push(String(i));if(Hn)for(r=function(t){if(!1===bo&&!go)return po(t);try{return po(t)}catch(t){return!1}}(t),c=0;c<vo.length;c++)u=vo[c],r&&"constructor"===u||!ln(t,u)||o.push(String(u));return o};ze(Qe,"enum",tn),function(t,r){var e,n,o;for(e=ho(r),o=0;o<e.length;o++)rn(t,n=e[o],r[n])}(Qe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var mo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function wo(){return{bool:mo.bool,int8:mo.int8,uint8:mo.uint8,uint8c:mo.uint8c,int16:mo.int16,uint16:mo.uint16,int32:mo.int32,uint32:mo.uint32,int64:mo.int64,uint64:mo.uint64,float32:mo.float32,float64:mo.float64,complex64:mo.complex64,complex128:mo.complex128,binary:mo.binary,generic:mo.generic,notype:mo.notype,userdefined_type:mo.userdefined_type}}ze(Je,"enum",wo),function(t,r){var e,n,o;for(e=ho(r),o=0;o<e.length;o++)rn(t,n=e[o],r[n])}(Je,wo());var jo=function(t,r){var e,n,o,i,u,c,a,l=!0;if(!oe(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Ge(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(yr(r,"duplicates")&&!fe(l=r.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(n=(e=Ve(t)).length,u={},l)for(a=0;a<n;a++)yr(u,i=t[o=e[a]])?(c=u[i],re(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(a=0;a<n;a++)u[t[o=e[a]]]=o;return u}(wo(),{duplicates:!1});var _o={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Oo(){var t;return 0===arguments.length?_o.all.slice():(t=_o[arguments[0]])?t.slice():[]}function So(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Eo(t,r,e){K(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}Q(Oo,"enum",So),function(t,r){var e,n,o;for(e=ur(r),o=0;o<e.length;o++)Eo(t,n=e[o],r[n])}(Oo,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var xo={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Io(t){var r=typeof t;return"string"===r?null===function(t){var r=xo[t];return"number"==typeof r?r:null}(t)?null:t:"number"===r?function(t){var r=jo[t];return"string"==typeof r?r:null}(t):null}var To={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1};function Po(){var t,r,e,n;for(e={},r=(t=ur(To)).length,n=0;n<r;n++)e[t[n]]=To[t[n]];return e}function Ao(t){return 0===arguments.length?Po():(t=Io(t),u(To,t)?To[t]:null)}export{Ao as default};
//# sourceMappingURL=mod.js.map
