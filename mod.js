// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,u=n.__lookupGetter__,i=n.__lookupSetter__;function c(e,r,t){var n,o,a,l,u;for(n=e.length,o=t,a=t,u=0;u<n;u++){if(0===e[u])return[t,t];(l=r[u])>0?a+=l*(e[u]-1):l<0&&(o+=l*(e[u]-1))}return[o,a]}function _(e,r,t){var n,o;return n=function(e){var r,t,n;if(0===(r=e.length))return 0;for(t=1,n=0;n<r;n++)t*=e[n];return t}(e),0!==n&&n===(o=c(e,r,t))[1]-o[0]+1}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(u.call(e,r)||i.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},r(c,"assign",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,l,u,i;for(o=e.length,a=t,l=t,i=0;i<o;i++){if(0===e[i])return n[0]=t,n[1]=t,n;(u=r[i])>0?l+=u*(e[i]-1):u<0&&(a+=u*(e[i]-1))}return n[0]=a,n[1]=l,n}});export{_ as default};
//# sourceMappingURL=mod.js.map
