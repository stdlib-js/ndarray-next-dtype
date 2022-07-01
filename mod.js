// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){var r=t.default;if("function"==typeof r){var n=function(){return r.apply(this,arguments)};n.prototype=r.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})})),n}var r=function(t){return Object.keys(Object(t))},n=r;var e=function(){return function(){return 2!==(n(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,a=c;var f=function(t){return a.call(t)},l=Object.prototype.hasOwnProperty;var p=function(t,r){return null!=t&&l.call(t,r)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=c;var g=f,m=function(t){var r,n,e;if(null==t)return b.call(t);n=t[y],r=s(t,y);try{t[y]=void 0}catch(r){return b.call(t)}return e=b.call(t),r?t[y]=n:delete t[y],e},d=u()?m:g,j=d;var h=function(t){return"[object Arguments]"===j(t)},w=h;var O=function(){return w(arguments)}(),_="function"==typeof Object.defineProperty?Object.defineProperty:null;var P=function(){try{return _({},"x",{}),!0}catch(t){return!1}},S=Object.defineProperty,E=Object.prototype,x=E.toString,T=E.__defineGetter__,I=E.__defineSetter__,A=E.__lookupGetter__,k=E.__lookupSetter__;var V=function(t,r,n){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===x.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===x.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(A.call(t,r)||k.call(t,r)?(e=t.__proto__,t.__proto__=E,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&T&&T.call(t,r,n.get),u&&I&&I.call(t,r,n.set),t},N=S,B=V,F=P()?N:B,G=F;var L=function(t,r,n){G(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},M=L;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var C=d,D=function(t){try{return Y.call(t),!0}catch(t){return!1}},H=u();var R=function(t){return"object"==typeof t&&(t instanceof String||(H?D(t):"[object String]"===C(t)))},W=X,z=R;var U=M,q=function(t){return W(t)||z(t)},J=R;U(q,"isPrimitive",X),U(q,"isObject",J);var K=q;var Q=function(t){return"number"==typeof t},Z=Number,$=Z.prototype.toString;var tt=d,rt=Z,nt=function(t){try{return $.call(t),!0}catch(t){return!1}},et=u();var ot=function(t){return"object"==typeof t&&(t instanceof rt||(et?nt(t):"[object Number]"===tt(t)))},it=Q,ut=ot;var ct=M,at=function(t){return it(t)||ut(t)},ft=ot;ct(at,"isPrimitive",Q),ct(at,"isObject",ft);var lt=at;var pt=function(t){return t!=t},vt=lt.isPrimitive,st=pt;var yt=function(t){return vt(t)&&st(t)},bt=lt.isObject,gt=pt;var mt=function(t){return bt(t)&&gt(t.valueOf())},dt=yt,jt=mt;var ht=M,wt=function(t){return dt(t)||jt(t)},Ot=mt;ht(wt,"isPrimitive",yt),ht(wt,"isObject",Ot);var _t=wt,Pt=Number.POSITIVE_INFINITY,St=Z.NEGATIVE_INFINITY,Et=Math.floor;var xt=function(t){return Et(t)===t},Tt=Pt,It=St,At=xt;var kt=function(t){return t<Tt&&t>It&&At(t)},Vt=lt.isPrimitive,Nt=kt;var Bt=function(t){return Vt(t)&&Nt(t)},Ft=lt.isObject,Gt=kt;var Lt=function(t){return Ft(t)&&Gt(t.valueOf())},Mt=Bt,Xt=Lt;var Yt=M,Ct=function(t){return Mt(t)||Xt(t)},Dt=Lt;Yt(Ct,"isPrimitive",Bt),Yt(Ct,"isObject",Dt);var Ht,Rt=Ct,Wt=Object.prototype.propertyIsEnumerable;Ht=!Wt.call("beep","0");var zt=K,Ut=_t.isPrimitive,qt=Rt.isPrimitive,Jt=Wt,Kt=Ht;var Qt=function(t,r){var n;return null!=t&&(!(n=Jt.call(t,r))&&Kt&&zt(t)?!Ut(r=+r)&&qt(r)&&r>=0&&r<t.length:n)},Zt=Qt,$t=d;var tr=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},rr=p,nr=Zt,er=tr,or=xt;var ir=O?h:function(t){return null!==t&&"object"==typeof t&&!er(t)&&"number"==typeof t.length&&or(t.length)&&t.length>=0&&t.length<=4294967295&&rr(t,"callee")&&!nr(t,"callee")},ur=ir,cr=r,ar=Array.prototype.slice;var fr=function(t){return ur(t)?cr(ar.call(t)):cr(t)},lr=tr;var pr=function(t){return null!==t&&"object"==typeof t};M(pr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!lr(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(pr));var vr=pr;var sr=Zt((function(){}),"prototype"),yr=!Zt({toString:null},"toString"),br=xt;var gr=_t,mr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&br(t.length)&&t.length>=0&&t.length<=9007199254740991},dr=K.isPrimitive,jr=Rt.isPrimitive;var hr=function(t,r,n){var e,o;if(!mr(t)&&!dr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!jr(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(gr(r)){for(;o<e;o++)if(gr(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1},wr=/./;var Or=function(t){return"boolean"==typeof t},_r=Boolean.prototype.toString;var Pr=d,Sr=function(t){try{return _r.call(t),!0}catch(t){return!1}},Er=u();var xr=function(t){return"object"==typeof t&&(t instanceof Boolean||(Er?Sr(t):"[object Boolean]"===Pr(t)))},Tr=Or,Ir=xr;var Ar=M,kr=function(t){return Tr(t)||Ir(t)},Vr=xr;Ar(kr,"isPrimitive",Or),Ar(kr,"isObject",Vr);var Nr=kr;var Br=function(){return new Function("return this;")()},Fr="object"==typeof self?self:null,Gr="object"==typeof window?window:null,Lr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Mr="object"==typeof Lr?Lr:null;module.exports=Mr;var Xr=Nr.isPrimitive,Yr=Br,Cr=Fr,Dr=Gr,Hr=t(Object.freeze({__proto__:null}));var Rr=function(t){if(arguments.length){if(!Xr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Yr()}if(Cr)return Cr;if(Dr)return Dr;if(Hr)return Hr;throw new Error("unexpected error. Unable to resolve global object.")},Wr=Rr(),zr=Wr.document&&Wr.document.childNodes,Ur=Int8Array,qr=wr,Jr=zr,Kr=Ur;var Qr=function(){return"function"==typeof qr||"object"==typeof Kr||"function"==typeof Jr};var Zr=function(){return/^\s*function\s*([^(]*)/i},$r=Zr;M($r,"REGEXP",Zr());var tn=vr;var rn=d,nn=$r.REGEXP,en=function(t){return tn(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var on=function(t){var r,n,e;if(("Object"===(n=rn(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=nn.exec(e.toString()))return r[1]}return en(t)?"Buffer":n},un=on;var cn=on;var an=function(t){var r;return null===t?"null":"object"===(r=typeof t)?un(t).toLowerCase():r},fn=function(t){return cn(t).toLowerCase()},ln=Qr()?fn:an;var pn,vn=function(t){return t.constructor&&t.constructor.prototype===t},sn="undefined"==typeof window?void 0:window,yn=p,bn=hr,gn=ln,mn=vn,dn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],jn=sn;pn=function(){var t;if("undefined"===gn(jn))return!1;for(t in jn)try{-1===bn(dn,t)&&yn(jn,t)&&null!==jn[t]&&"object"===gn(jn[t])&&mn(jn[t])}catch(t){return!0}return!1}();var hn="undefined"!=typeof window,wn=pn,On=vn,_n=hn;var Pn=vr,Sn=p,En=ir,xn=sr,Tn=yr,In=function(t){if(!1===_n&&!wn)return On(t);try{return On(t)}catch(t){return!1}},An=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var kn=r,Vn=fr,Nn=function(t){var r,n,e,o,i,u,c;if(o=[],En(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!Sn(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1===(e="function"==typeof t)&&!Pn(t))return o;n=xn&&e}for(i in t)n&&"prototype"===i||!Sn(t,i)||o.push(String(i));if(Tn)for(r=In(t),c=0;c<An.length;c++)u=An[c],r&&"constructor"===u||!Sn(t,u)||o.push(String(u));return o},Bn=o?e()?Vn:kn:Nn,Fn=tr;var Gn=function(t){return"object"==typeof t&&null!==t&&!Fn(t)},Ln=ln;var Mn=function(t){return"function"===Ln(t)},Xn=Object.getPrototypeOf;var Yn=function(t){return t.__proto__},Cn=d,Dn=Yn;var Hn=function(t){var r=Dn(t);return r||null===r?r:"[object Function]"===Cn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Rn=Xn,Wn=Hn,zn=Mn(Object.getPrototypeOf)?Rn:Wn;var Un=Gn,qn=Mn,Jn=function(t){return null==t?null:(t=Object(t),zn(t))},Kn=p,Qn=d,Zn=Object.prototype;var $n=function(t){var r;return!!Un(t)&&(!(r=Jn(t))||!Kn(t,"constructor")&&Kn(r,"constructor")&&qn(r.constructor)&&"[object Function]"===Qn(r.constructor)&&Kn(r,"isPrototypeOf")&&qn(r.isPrototypeOf)&&(r===Zn||function(t){var r;for(r in t)if(!Kn(t,r))return!1;return!0}(t)))},te=Bn,re=tr,ne=$n,ee=vr,oe=Nr.isPrimitive,ie=p;var ue=function(t,r){var n,e,o,i,u,c,a,f=!0;if(!ee(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!ne(r))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+r+"`.");if(ie(r,"duplicates")&&(f=r.duplicates,!oe(f)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(e=(n=te(t)).length,u={},f)for(a=0;a<e;a++)i=t[o=n[a]],ie(u,i)?(c=u[i],re(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(a=0;a<e;a++)u[t[o=n[a]]]=o;return u},ce=ue,ae=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var fe=function(){return ae.slice()},le=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pe=F;var ve=function(t,r,n){pe(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})},se=ve,ye=se,be=Bn;var ge=function(t,r){var n,e,o;for(n=be(r),o=0;o<n.length;o++)e=n[o],ye(t,e,r[e]);return t},me=function(){return le.slice()},de=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},je=ge;M(me,"enum",de),je(me,de());var he=me,we=(0,he.enum)();var Oe=se,_e=Bn;var Pe=function(t,r){var n,e,o;for(n=_e(r),o=0;o<n.length;o++)e=n[o],Oe(t,e,r[e]);return t},Se=fe,Ee=function(){return{bool:we.bool,int8:we.int8,uint8:we.uint8,uint8c:we.uint8c,int16:we.int16,uint16:we.uint16,int32:we.int32,uint32:we.uint32,int64:we.int64,uint64:we.uint64,float32:we.float32,float64:we.float64,complex64:we.complex64,complex128:we.complex128,binary:we.binary,generic:we.generic,notype:we.notype,userdefined_type:we.userdefined_type}},xe=Pe;M(Se,"enum",Ee),xe(Se,Ee());var Te=ce((0,Se.enum)(),{duplicates:!1});var Ie=function(t){var r=Te[t];return"string"==typeof r?r:null},Ae=(0,he.enum)();var ke=Ie,Ve=function(t){var r=Ae[t];return"number"==typeof r?r:null};var Ne=function(t){var r=typeof t;return"string"===r?null===Ve(t)?null:t:"number"===r?ke(t):null},Be={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1};function Fe(){var t,r,n,e;for(n={},r=(t=Bn(Be)).length,e=0;e<r;e++)n[t[e]]=Be[t[e]];return n}function Ge(t){return 0===arguments.length?Fe():(t=Ne(t),p(Be,t)?Be[t]:null)}export{Ge as default};
//# sourceMappingURL=mod.js.map
