"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=o(function(l,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/math-base-assert-is-infinite/dist'),v=require('@stdlib/math-base-special-pow/dist'),E=require('@stdlib/math-base-special-abs/dist'),f=require('@stdlib/math-base-special-floor/dist'),_=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/constants-float64-max-base10-exponent/dist'),I=require('@stdlib/constants-float64-min-base10-exponent/dist'),M=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),X=require('@stdlib/constants-float64-ninf/dist'),A=_+1,s=1e308;function c(e,r){var i,u;return t(e)||t(r)||a(r)?NaN:a(e)||e===0||r<M||E(e)>A&&r<=0?e:r>q?e>=0?0:X:r<I?(i=v(10,-(r+q)),u=e*s*i,a(u)?e:f(u)/s/i):(i=v(10,-r),u=e*i,a(u)?e:f(u)/i)}n.exports=c
});var p=N();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
