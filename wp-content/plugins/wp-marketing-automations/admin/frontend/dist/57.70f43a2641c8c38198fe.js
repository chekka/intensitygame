(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1124:function(t,e,r){},1180:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return j}));var n=r(0),o=r(851),a=r(4),i=r(2),c=(r(1124),r(12)),l=r.n(c),u=r(5),s=(r(133),r(47)),f=r(8),h=r(6),d=r.n(h);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var s={};function f(){}function h(){}function d(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(_([])));b&&b!==e&&r.call(b,o)&&(v=b);var g=d.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==p(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=d,c(g,"constructor",d),c(d,"constructor",h),h.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(g),c(g,i,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return O(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(){Object(o.a)("tools",!1,""),Object(u.f)("Tools");var t=w(Object(n.useState)({loading:!1,status:!1}),2),e=t[0],r=t[1],c=w(Object(n.useState)([]),2),h=c[0],p=c[1],v=w(Object(n.useState)(!0),2),b=v[0],O=v[1],j=Object(n.useContext)(u.d),E=Object(n.useRef)(new AbortController);Object(n.useEffect)((function(){return l()({path:Object(u.k)("/settings/tools"),method:"GET",signal:E.current.signal}).then((function(t){200===t.code&&(p(t.result),O(!1))})).catch((function(t){return console.log(t)})),function(){E.current.abort()}}),[]);var x=function(){var t,n=(t=m().mark((function t(n){var o,a,i,c,s;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({status:!0,loading:!0,modalTitle:n.task_text,content:n.hasOwnProperty("processingText")?n.processingText:"Processing"}),t.prev=1,t.next=4,l()({path:Object(u.k)("/settings/tools/"),method:"POST",data:{action_type:n.task}});case 4:if(200!=(null==(o=t.sent)?void 0:o.code)){t.next=14;break}if(0!=(null==o||null===(a=o.result)||void 0===a?void 0:a.status)){t.next=10;break}throw Error(Object(u.i)(null==o||null===(i=o.result)||void 0===i?void 0:i.msg));case 10:j((null==o?void 0:o.message)||(null==o||null===(c=o.result)||void 0===c?void 0:c.msg)),r({status:!1});case 12:t.next=15;break;case 14:throw Error(Object(u.i)((null==o?void 0:o.message)||(null==o||null===(s=o.result)||void 0===s?void 0:s.msg)));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),r(y(y({},e),{},{modalTitle:n.task_text,status:!0,error:!0,content:t.t0.message}));case 20:Object(u.Z)(j,5e3);case 21:case"end":return t.stop()}}),t,null,[[1,17]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){g(a,n,o,i,c,"next",t)}function c(t){g(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return n.apply(this,arguments)}}();return b?Object(n.createElement)("div",{className:"bwfan--setting-tools"},[1,2,3,4,5].map((function(t,e){return Object(n.createElement)(a.Flex,{key:e,style:{paddingBottom:"20px"}},Object(n.createElement)(a.FlexBlock,null,Object(n.createElement)("h5",{className:"task--title"},Object(n.createElement)("div",{className:" bwf-placeholder-temp bwf-w-210 bwf-h-15"})),Object(n.createElement)("div",{className:"task--desc"},Object(n.createElement)("div",{className:" bwf-placeholder-temp bwf-w-300 bwf-h-15"}))),Object(n.createElement)(a.FlexItem,null,Object(n.createElement)("div",{className:" bwf-placeholder-temp bwf-w-90 bwf-h-30"})))}))):Object(n.createElement)("div",{className:"bwfan--setting-tools"},h.map((function(t,e){return Object(n.createElement)(a.Flex,{key:e,style:{paddingBottom:"20px"}},Object(n.createElement)(a.FlexBlock,null,Object(n.createElement)("h5",{className:"task--title"},t.title),Object(n.createElement)("p",{className:"task--desc"},t.description)),Object(n.createElement)(a.FlexItem,null,Object(n.createElement)(a.Button,{isPrimary:!0,onClick:function(){return x(t)}},t.task_text)))})),e.status&&Object(n.createElement)(a.Modal,{onRequestClose:function(){return r({status:!1})},className:"bwf-c-s-delete-model bwf-admin-modal bwf-admin-modal-squeezy bwf-admin-modal-no-header"},e.modalTitle&&Object(n.createElement)("div",{className:"bwf-modal-header"},Object(n.createElement)("div",{className:"bwf-modal-heading"},e.modalTitle),Object(n.createElement)("span",{onClick:function(){return onRequestClose()},className:"bwf-modal-close"},Object(n.createElement)(f.a,{icon:"close",color:"#353030"}))),!e.error&&Object(n.createElement)(s.a,{size:"xl",spaceClass:"0"}),Object(n.createElement)("div",{className:d()("bwf-modal-content",{bwf_text_center:!e.error})},!e.error&&Object(n.createElement)("div",{style:{fontSize:"18px",lineHeight:"30px",fontWeight:700,marginBottom:"4px",color:"#000"}},Object(i.__)("Please wait…","wp-marketing-automations")),e.content),e.error&&Object(n.createElement)("div",{className:"bwf_text_right"},Object(n.createElement)(a.Button,{isPrimary:!0,onClick:function(){return r({status:!1})}},Object(i.__)("OK","wp-marketing-automations")))))}},851:function(t,e,r){"use strict";var n=r(132),o=r(0);e.a=function(t,e,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},c=Object(n.a)(),l=c.setActiveMultiple,u=c.resetHeaderMenu,s=c.setL2NavType,f=c.setL2Nav,h=c.setBackLink,d=c.setL2Title,p=c.setPageHeader,m=c.setL2Content;return Object(o.useEffect)((function(){u(),!e&&s("menu"),!e&&f(i.settings_nav),l({leftNav:"settings",rightNav:t}),e&&h(e),r&&d(r),p("Settings"),m(a)}),[t,r]),!0}}}]);