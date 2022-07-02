// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).nextDataType=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var n=function(){return r.apply(this,arguments)};n.prototype=r.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})})),n}var r=function(t){return Object.keys(Object(t))},n=r;var e=function(){return function(){return 2!==(n(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,f=c;var a=function(t){return f.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=c;var g=a,m=function(t){var r,n,e;if(null==t)return b.call(t);n=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return b.call(t)}return e=b.call(t),r?t[y]=n:delete t[y],e},d=u()?m:g,h=d;var j,w=function(t){return"[object Arguments]"===h(t)},O=w;j=function(){return O(arguments)}();var _=j,P="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return P({},"x",{}),!0}catch(t){return!1}},x=Object.defineProperty,E=Object.prototype,T=E.toString,I=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,V=E.__lookupSetter__;var N=function(t,r,n){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(k.call(t,r)||V.call(t,r)?(e=t.__proto__,t.__proto__=E,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(t,r,n.get),u&&A&&A.call(t,r,n.set),t},B=x,F=N,G=S()?B:F,L=G;var M=function(t,r,n){L(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},X=M;var Y=function(t){return"string"==typeof t},C=String.prototype.valueOf;var D=d,H=function(t){try{return C.call(t),!0}catch(t){return!1}},R=u();var W=function(t){return"object"==typeof t&&(t instanceof String||(R?H(t):"[object String]"===D(t)))},z=Y,U=W;var q=X,J=function(t){return z(t)||U(t)},K=W;q(J,"isPrimitive",Y),q(J,"isObject",K);var Q=J;var Z=function(t){return"number"==typeof t},$=Number,tt=$.prototype.toString;var rt=d,nt=$,et=function(t){try{return tt.call(t),!0}catch(t){return!1}},ot=u();var it=function(t){return"object"==typeof t&&(t instanceof nt||(ot?et(t):"[object Number]"===rt(t)))},ut=Z,ct=it;var ft=X,at=function(t){return ut(t)||ct(t)},lt=it;ft(at,"isPrimitive",Z),ft(at,"isObject",lt);var pt=at;var vt=function(t){return t!=t},st=pt.isPrimitive,yt=vt;var bt=function(t){return st(t)&&yt(t)},gt=pt.isObject,mt=vt;var dt=function(t){return gt(t)&&mt(t.valueOf())},ht=bt,jt=dt;var wt=X,Ot=function(t){return ht(t)||jt(t)},_t=dt;wt(Ot,"isPrimitive",bt),wt(Ot,"isObject",_t);var Pt=Ot,St=Number.POSITIVE_INFINITY,xt=$.NEGATIVE_INFINITY,Et=Math.floor;var Tt=function(t){return Et(t)===t},It=St,At=xt,kt=Tt;var Vt=function(t){return t<It&&t>At&&kt(t)},Nt=pt.isPrimitive,Bt=Vt;var Ft=function(t){return Nt(t)&&Bt(t)},Gt=pt.isObject,Lt=Vt;var Mt=function(t){return Gt(t)&&Lt(t.valueOf())},Xt=Ft,Yt=Mt;var Ct=X,Dt=function(t){return Xt(t)||Yt(t)},Ht=Mt;Ct(Dt,"isPrimitive",Ft),Ct(Dt,"isObject",Ht);var Rt,Wt=Dt,zt=Object.prototype.propertyIsEnumerable;Rt=!zt.call("beep","0");var Ut=Q,qt=Pt.isPrimitive,Jt=Wt.isPrimitive,Kt=zt,Qt=Rt;var Zt=function(t,r){var n;return null!=t&&(!(n=Kt.call(t,r))&&Qt&&Ut(t)?!qt(r=+r)&&Jt(r)&&r>=0&&r<t.length:n)},$t=Zt,tr=d;var rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===tr(t)},nr=p,er=$t,or=rr,ir=Tt;var ur=_?w:function(t){return null!==t&&"object"==typeof t&&!or(t)&&"number"==typeof t.length&&ir(t.length)&&t.length>=0&&t.length<=4294967295&&nr(t,"callee")&&!er(t,"callee")},cr=ur,fr=r,ar=Array.prototype.slice;var lr=function(t){return cr(t)?fr(ar.call(t)):fr(t)},pr=rr;var vr=function(t){return null!==t&&"object"==typeof t};X(vr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!pr(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(vr));var sr=vr;var yr=$t((function(){}),"prototype"),br=!$t({toString:null},"toString"),gr=Tt;var mr=Pt,dr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&gr(t.length)&&t.length>=0&&t.length<=9007199254740991},hr=Q.isPrimitive,jr=Wt.isPrimitive;var wr=function(t,r,n){var e,o;if(!dr(t)&&!hr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!jr(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(mr(r)){for(;o<e;o++)if(mr(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1},Or=wr,_r=/./;var Pr=function(t){return"boolean"==typeof t},Sr=Boolean.prototype.toString;var xr=d,Er=function(t){try{return Sr.call(t),!0}catch(t){return!1}},Tr=u();var Ir=function(t){return"object"==typeof t&&(t instanceof Boolean||(Tr?Er(t):"[object Boolean]"===xr(t)))},Ar=Pr,kr=Ir;var Vr=X,Nr=function(t){return Ar(t)||kr(t)},Br=Ir;Vr(Nr,"isPrimitive",Pr),Vr(Nr,"isObject",Br);var Fr=Nr;var Gr=function(){return new Function("return this;")()},Lr="object"==typeof self?self:null,Mr="object"==typeof window?window:null,Xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yr="object"==typeof Xr?Xr:null;module.exports=Yr;var Cr=Fr.isPrimitive,Dr=Gr,Hr=Lr,Rr=Mr,Wr=t(Object.freeze({__proto__:null}));var zr=function(t){if(arguments.length){if(!Cr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Dr()}if(Hr)return Hr;if(Rr)return Rr;if(Wr)return Wr;throw new Error("unexpected error. Unable to resolve global object.")},Ur=zr(),qr=Ur.document&&Ur.document.childNodes,Jr=Int8Array,Kr=_r,Qr=qr,Zr=Jr;var $r=function(){return"function"==typeof Kr||"object"==typeof Zr||"function"==typeof Qr};var tn=function(){return/^\s*function\s*([^(]*)/i},rn=tn;X(rn,"REGEXP",tn());var nn=sr;var en=d,on=rn.REGEXP,un=function(t){return nn(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var cn=function(t){var r,n,e;if(("Object"===(n=en(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=on.exec(e.toString()))return r[1]}return un(t)?"Buffer":n},fn=cn;var an=cn;var ln=function(t){var r;return null===t?"null":"object"===(r=typeof t)?fn(t).toLowerCase():r},pn=function(t){return an(t).toLowerCase()},vn=$r()?pn:ln;var sn,yn=function(t){return t.constructor&&t.constructor.prototype===t},bn="undefined"==typeof window?void 0:window,gn=p,mn=Or,dn=vn,hn=yn,jn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wn=bn;sn=function(){var t;if("undefined"===dn(wn))return!1;for(t in wn)try{-1===mn(jn,t)&&gn(wn,t)&&null!==wn[t]&&"object"===dn(wn[t])&&hn(wn[t])}catch(t){return!0}return!1}();var On="undefined"!=typeof window,_n=sn,Pn=yn,Sn=On;var xn=sr,En=p,Tn=ur,In=yr,An=br,kn=function(t){if(!1===Sn&&!_n)return Pn(t);try{return Pn(t)}catch(t){return!1}},Vn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Nn=r,Bn=lr,Fn=function(t){var r,n,e,o,i,u,c;if(o=[],Tn(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!En(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1===(e="function"==typeof t)&&!xn(t))return o;n=In&&e}for(i in t)n&&"prototype"===i||!En(t,i)||o.push(String(i));if(An)for(r=kn(t),c=0;c<Vn.length;c++)u=Vn[c],r&&"constructor"===u||!En(t,u)||o.push(String(u));return o},Gn=o?e()?Bn:Nn:Fn,Ln=rr;var Mn=function(t){return"object"==typeof t&&null!==t&&!Ln(t)},Xn=vn;var Yn=function(t){return"function"===Xn(t)},Cn=Object.getPrototypeOf;var Dn=function(t){return t.__proto__},Hn=d,Rn=Dn;var Wn=function(t){var r=Rn(t);return r||null===r?r:"[object Function]"===Hn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},zn=Cn,Un=Wn,qn=Yn(Object.getPrototypeOf)?zn:Un;var Jn=Mn,Kn=Yn,Qn=function(t){return null==t?null:(t=Object(t),qn(t))},Zn=p,$n=d,te=Object.prototype;var re=function(t){var r;return!!Jn(t)&&(!(r=Qn(t))||!Zn(t,"constructor")&&Zn(r,"constructor")&&Kn(r.constructor)&&"[object Function]"===$n(r.constructor)&&Zn(r,"isPrototypeOf")&&Kn(r.isPrototypeOf)&&(r===te||function(t){var r;for(r in t)if(!Zn(t,r))return!1;return!0}(t)))},ne=Gn,ee=rr,oe=re,ie=sr,ue=Fr.isPrimitive,ce=p;var fe=function(t,r){var n,e,o,i,u,c,f,a=!0;if(!ie(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!oe(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(ce(r,"duplicates")&&(a=r.duplicates,!ue(a)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(e=(n=ne(t)).length,u={},a)for(f=0;f<e;f++)i=t[o=n[f]],ce(u,i)?(c=u[i],ee(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(f=0;f<e;f++)u[t[o=n[f]]]=o;return u},ae=fe,le=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pe=function(){return le.slice()},ve=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var se=G;var ye=function(t,r,n){se(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})},be=ye,ge=be,me=Gn;var de=function(t,r){var n,e,o;for(n=me(r),o=0;o<n.length;o++)e=n[o],ge(t,e,r[e]);return t},he=function(){return ve.slice()},je=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},we=de;X(he,"enum",je),we(he,je());var Oe=he,_e=(0,Oe.enum)();var Pe=be,Se=Gn;var xe=function(t,r){var n,e,o;for(n=Se(r),o=0;o<n.length;o++)e=n[o],Pe(t,e,r[e]);return t},Ee=pe,Te=function(){return{bool:_e.bool,int8:_e.int8,uint8:_e.uint8,uint8c:_e.uint8c,int16:_e.int16,uint16:_e.uint16,int32:_e.int32,uint32:_e.uint32,int64:_e.int64,uint64:_e.uint64,float32:_e.float32,float64:_e.float64,complex64:_e.complex64,complex128:_e.complex128,binary:_e.binary,generic:_e.generic,notype:_e.notype,userdefined_type:_e.userdefined_type}},Ie=xe;X(Ee,"enum",Te),Ie(Ee,Te());var Ae=ae((0,Ee.enum)(),{duplicates:!1});var ke=function(t){var r=Ae[t];return"string"==typeof r?r:null},Ve=(0,Oe.enum)();var Ne=ke,Be=function(t){var r=Ve[t];return"number"==typeof r?r:null};var Fe=function(t){var r=typeof t;return"string"===r?null===Be(t)?null:t:"number"===r?Ne(t):null},Ge={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1};function Le(){var t,r,n,e;for(n={},r=(t=Gn(Ge)).length,e=0;e<r;e++)n[t[e]]=Ge[t[e]];return n}return function(t){return 0===arguments.length?Le():(t=Fe(t),p(Ge,t)?Ge[t]:null)}}));
//# sourceMappingURL=browser.js.map
