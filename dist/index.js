"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=u(function(q,s){s.exports={float64:-1,float32:"float64",int32:-1,int16:"int32",int8:"int16",uint32:-1,uint16:"uint32",uint8:"uint16",uint8c:"uint16",complex64:"complex128",complex128:-1,generic:-1,binary:-1,bool:-1}});var l=u(function(b,o){
var c=require('@stdlib/utils-keys/dist'),v=require('@stdlib/assert-has-own-property/dist'),f=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),n=a();function p(){var r,e,i,t;for(i={},r=c(n),e=r.length,t=0;t<e;t++)i[r[t]]=n[r[t]];return i}function x(r){return arguments.length===0?p():(r=f(r),v(n,r)?n[r]:null)}o.exports=x
});var g=l();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
