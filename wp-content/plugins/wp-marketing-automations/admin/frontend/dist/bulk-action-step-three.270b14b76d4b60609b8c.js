(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1198:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(264),a=r(2),i=r(4),c=r(12),u=r.n(c),l=r(5),s=r(3),f=r(854),v=r(15),b=r(853),m=r(848),p=r(72);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function v(){}function b(){}var m={};c(m,o,(function(){return this}));var p=Object.getPrototypeOf,d=p&&p(p(x([])));d&&d!==e&&r.call(d,o)&&(m=d);var w=b.prototype=f.prototype=Object.create(m);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=b,c(w,"constructor",b),c(b,"constructor",v),v.displayName=c(b,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,i,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},y(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(w),c(w,i,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function O(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){O(a,n,o,i,c,"next",t)}function c(t){O(a,n,o,i,c,"throw",t)}i(void 0)}))}}function E(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.default=function(t){var e=Object(v.i)(),r=Object(n.useContext)(l.d),c=t.bulkActionId,h=E(Object(n.useState)(!1),2),d=h[0],y=h[1],O=E(Object(n.useState)(!0),2),k=O[0],_=O[1],x=E(Object(n.useState)({}),2),N=x[0],L=x[1],P=E(Object(n.useState)(0),2),S=P[0],I=P[1],A=Object(b.a)().getSingleBulkActionData,C=Object(m.a)().setSingleBulkActionValue,G=A(),T=G.status,F=G.offset,D=void 0===F?0:F,B=G.count,U=void 0===B?0:B;Object(n.useEffect)((function(){G.hasOwnProperty("offset")&&G.hasOwnProperty("count")&&I(parseInt(parseInt(G.offset)/parseInt(G.count)*100))}),[G]);var Y=function(){var t=j(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!1),t.next=4,u()({method:"GET",path:Object(l.k)("/bulk-action/status/".concat(c))}).then((function(t){200==t.code&&L(t.result)}));case 4:_(!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),_(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){Object(s.isEmpty)(N)||(2==N.status||parseInt(N.percent)>=100?(y(!0),I(100),N.hasOwnProperty("offset")&&C("data",w(w({},G),{},{offset:N.offset}))):(I(parseInt(N.percent)<100?parseInt(N.percent):100),N.hasOwnProperty("offset")&&C("data",w(w({},G),{},{offset:N.offset}))))}),[N]),Object(f.a)((function(){!d&&1===parseInt(T)&&k&&Y()}),5e3);var H=function(){var t=j(g().mark((function t(){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(Object(a.__)("Pausing bulk action status …","wp-marketing-automations-crm")),t.next=4,u()({path:Object(l.k)("/bulk-action/".concat(c)),method:"POST",data:w(w({},G),{},{status:3,stop_bulk_action:!0})}).then((function(t){200===t.code?t.hasOwnProperty("result")&&!Object(s.isEmpty)(t.result)&&(C("data",t.result),r("Updated")):r(t.message)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),r(t.t0.message);case 9:Object(l.Z)(r,1e3);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(p.a,null),Object(n.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(n.createElement)("div",{className:"bwf-bulk-action-wrapper bwf-bulk-action-progress-wrap"},Object(n.createElement)("div",{className:"bwf-bulk-action-progress-title"},Object(a.__)("Bulk Action Progress","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-progress-desc"},Object(a.__)("The actions are being processing in the background. We will let you know when it completes.","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-progress-bar"},Object(n.createElement)(o.a,{noStriped:!0,size:"sm",progress:parseInt(S)}),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)("div",{className:"bwf-display-flex"},Object(a.__)("Contact Processed","wp-marketing-automations-crm")," ",":"," ",parseInt(D)!==parseInt(U)?parseInt(D)+" / "+parseInt(U):parseInt(U))),Object(n.createElement)("div",{className:"bwf-display-flex gap-12"},1===parseInt(T)&&!d&&Object(n.createElement)(i.Button,{isSecondary:!0,onClick:function(){H()}},Object(a.__)("Pause Action","wp-marketing-automations-crm")),Object(n.createElement)(i.Button,{isPrimary:!0,onClick:function(){Object(v.k)({path:"/bulk-actions"},"/",e)}},Object(a.__)("Go to Bulk Action List","wp-marketing-automations-crm"))))))}},1199:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(2),a=r(4),i=r(853),c=r(848),u=r(277),l=r(92),s=r(16),f=r(62),v=r(12),b=r.n(v),m=r(5),p=r(3),h=r(864),d=r(72);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function v(){}function b(){}var m={};c(m,o,(function(){return this}));var p=Object.getPrototypeOf,h=p&&p(p(x([])));h&&h!==e&&r.call(h,o)&&(m=h);var d=b.prototype=f.prototype=Object.create(m);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==w(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=b,c(d,"constructor",b),c(b,"constructor",v),v.displayName=c(b,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,i,"GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},g(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(d),c(d,i,"Generator"),c(d,o,(function(){return this})),c(d,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function E(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}e.default=function(t){var e=t.bulkActionId,r=t.isLoading,v=Object(n.useContext)(m.d),w=Object(i.a)(),g=w.getSingleBulkActionData,j=w.getActionList,k=w.getActionSchemaList,_=Object(c.a)().setSingleBulkActionValue,x=g(),N=x.title,L=void 0===N?"-":N,P=x.status,S=x.count,I=void 0===S?0:S,A=x.actions,C=x.contactFilters,G=x.created_on,T=x.log_file,F=x.offset,D=void 0===F?0:F,B=x.enable_automation_run,U=void 0!==B&&B,Y=k(),H=j(),J={0:"Draft",1:"Ongoing",2:"Completed",3:"Paused"},R=function(){var t,r=(t=y().mark((function t(){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(Object(o.__)("Updating bulk action status …","wp-marketing-automations-crm")),t.next=4,b()({path:Object(m.k)("/bulk-action/".concat(e)),method:"POST",data:O(O({},x),{},{start_bulk_action:!0})}).then((function(t){200===t.code?t.hasOwnProperty("result")&&!Object(p.isEmpty)(t.result)&&(_("data",t.result),v("Updated")):v(t.message)}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),v(t.t0.message);case 9:Object(m.Z)(v,1e3);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){E(a,n,o,i,c,"next",t)}function c(t){E(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return r?Object(n.createElement)("div",{className:"bwf-crm-bulk-action-init"},Object(n.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(n.createElement)(a.Card,{className:"bwf-bulk-action-overview-wrap"},Object(n.createElement)(a.CardHeader,{className:"bwf-bulk-action-overview-header"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-header-title"},Object(o.__)("Overview","wp-marketing-automations-crm"))),Object(n.createElement)(a.CardBody,null,[1,2,3,4,5,6,7,8,9].map((function(t){return Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list",key:t},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-150"})),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(n.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-300"})))})))))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(d.a,null),Object(n.createElement)("div",{className:"bwfcrm-overview-wrap"},Object(n.createElement)(a.Card,{className:"bwf-bulk-action-overview-wrap"},Object(n.createElement)(a.CardHeader,{className:"bwf-bulk-action-overview-header"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-header-title"},Object(o.__)("Overview","wp-marketing-automations-crm")),3===parseInt(P)&&Object(n.createElement)("div",{className:"bwf-bulk-action-overview-header-menu"},Object(n.createElement)("span",{className:"bwf-mr-10"},"Paused "),Object(n.createElement)(f.a,{label:Object(o.__)("Quick Actions","wp-marketing-automations-crm"),menuPosition:"bottom right",renderContent:function(t){var e=t.onToggle;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(l.a,{isClickable:!0,onInvoke:function(){R(),e()}},Object(n.createElement)(s.a,{justify:"flex-start"},Object(n.createElement)(s.c,null,"Resume"))))}}))),Object(n.createElement)(a.CardBody,null,Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Title","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},L)),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Created On","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(m.K)(G))),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Status","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},J.hasOwnProperty(P)?J[P]:"-")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Actions","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(n.createElement)(u.a,{actions:H,actionSchema:Y,value:A}))),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Contact Filters","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(p.isEmpty)(C)?"-":Object(h.b)(C))),3===parseInt(P)&&parseInt(D)!==parseInt(I)&&Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Contact Processed","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},parseInt(D))),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Contact Count","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},I)),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Trigger automations","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},U?"Enable":"Disable")),!Object(p.isEmpty)(T)&&Object(n.createElement)("div",{className:"bwf-bulk-action-overview-list"},Object(n.createElement)("div",{className:"bwf-bulk-action-overview-label"},Object(o.__)("Download Log file","wp-marketing-automations-crm")),Object(n.createElement)("div",{className:"bwf-bulk-action-overview-value"},Object(n.createElement)("a",{target:"_blank",href:"/wp-json"+Object(m.k)("/bulk-action/download/".concat(e,"?bwf-nonce=").concat(Object(m.n)())),title:"Download",className:"bwf-a-no-underline",rel:"noreferrer"},Object(n.createElement)(a.Button,{isSecondary:!0},Object(p.isEmpty)(T)?"-":T))))))))}},854:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(0);var o=function(t,e){var r=Object(n.useRef)();Object(n.useEffect)((function(){r.current=t}),[t]),Object(n.useEffect)((function(){if(null!==e){var t=setInterval((function(){r.current()}),e);return function(){return clearInterval(t)}}}),[e])}}}]);