(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1159:function(e,t,r){},1160:function(e,t,r){},1170:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),c=r(250),i=r(278),o=function(){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card",key:"1"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status is-preview"})," ",Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle"},Object(a.createElement)("span",{className:"is-placeholder long"})))),Object(a.createElement)("section",{className:"bwf-crm-card",key:"2"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status is-preview"})," ",Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle"},Object(a.createElement)("span",{className:"is-placeholder long"})))))},s=r(5),l=(r(4),r(73)),m=r(12),u=r.n(m),b=r(3);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function o(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(e){o=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var n=t&&t.prototype instanceof u?t:u,c=Object.create(n.prototype),i=new _(a||[]);return c._invoke=function(e,t,r){var a="suspendedStart";return function(n,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw c;return x()}for(r.method=n,r.arg=c;;){var i=r.delegate;if(i){var o=g(i,r);if(o){if(o===m)continue;return o}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var s=l(e,t,r);if("normal"===s.type){if(a=r.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),c}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var m={};function u(){}function b(){}function p(){}var v={};o(v,n,(function(){return this}));var w=Object.getPrototypeOf,O=w&&w(w(k([])));O&&O!==t&&r.call(O,n)&&(v=O);var h=p.prototype=u.prototype=Object.create(v);function j(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var a;this._invoke=function(n,c){function i(){return new t((function(a,i){!function a(n,c,i,o){var s=l(e[n],e,c);if("throw"!==s.type){var m=s.arg,u=m.value;return u&&"object"==f(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,i,o)}),(function(e){a("throw",e,i,o)})):t.resolve(u).then((function(e){m.value=e,i(m)}),(function(e){return a("throw",e,i,o)}))}o(s.arg)}(n,c,a,i)}))}return a=a?a.then(i,i):i()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:x}}function x(){return{value:void 0,done:!0}}return b.prototype=p,o(h,"constructor",p),o(p,"constructor",b),b.displayName=o(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,o(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},j(y.prototype),o(y.prototype,c,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,a,n,c){void 0===c&&(c=Promise);var i=new y(s(t,r,a,n),c);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(h),o(h,i,"Generator"),o(h,n,(function(){return this})),o(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var o=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(o&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(o){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=e,i.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function p(e,t,r,a,n,c,i){try{var o=e[c](i),s=o.value}catch(e){return void r(e)}o.done?t(s):Promise.resolve(s).then(a,n)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,c=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(c.push(a.value),!t||c.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var O=Object(l.a)(Object(s.U)()).formatAmount,h=function(e){var t=e.contact,r=e.campaignId,c=v(Object(a.useState)(!0),2),i=c[0],l=c[1],m=v(Object(a.useState)([]),2),f=m[0],w=m[1],h=function(){var e,a=(e=d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u()({method:"GET",path:Object(s.k)("/broadcasts/".concat(r,"/recipients/").concat(t.conversation_id,"/timeline"))}).then((function(e){200==e.code&&e.hasOwnProperty("result")&&!Object(b.isEmpty)(e.result)?w(e.result):w([]),l(!1)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),l(!1);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var t=this,r=arguments;return new Promise((function(a,n){var c=e.apply(t,r);function i(e){p(c,a,n,i,o,"next",e)}function o(e){p(c,a,n,i,o,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();Object(a.useEffect)((function(){l(!0),Object(b.isEmpty)(t.conversation_id)||h()}),[t]);return i?Object(a.createElement)(o,null):Object(a.createElement)(a.Fragment,null,Object(b.isEmpty)(f)?Object(a.createElement)("p",null,Object(n.__)("No timeline found","wp-marketing-automations")):f.map((function(e){switch(e.type){case"conversion":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"orderConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l",key:"1"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Converted","wp-marketing-automations"),Object(a.createElement)("a",{href:"post.php?post="+e.order_id+"&action=edit"},Object(n.__)("Order","wp-marketing-automations")+" #"+e.order_id))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.J)(e.date,!0)},Object(s.M)(e.date).fromNow())),Object(a.createElement)("div",{className:"bwf-crm-card-r",key:"2"},Object(a.createElement)("div",{className:"bwf-crm-card-date"},O(parseFloat(e.revenue)))))}(e);case"open":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"openConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Opened","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.J)(e.date,!0)},Object(s.M)(e.date).fromNow())))}(e);case"click":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"clickConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Clicked","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.J)(e.date,!0)},Object(s.M)(e.date).fromNow())))}(e);case"failed":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"failedConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-failed"}),Object(a.createElement)("span",null,Object(n.__)("Failed","wp-marketing-automations"))),e.hasOwnProperty("err_message")&&!Object(b.isEmpty)(e.err_message)&&Object(a.createElement)("div",{className:"bwf-crm-card-title bwf-ml-20"},e.err_message),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.J)(e.date,!0)},Object(s.M)(e.date).fromNow())))}(e);case"sent":return function(e){return Object(a.createElement)("section",{className:"bwf-crm-card",key:"sentConversion"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(n.__)("Sent","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.J)(e.date,!0)},Object(s.M)(e.date).fromNow())))}(e)}})))},j=(r(1159),r(144)),y=r(170),g=r.n(y),E=r(37),N=Object(l.a)(Object(s.U)()).formatAmount,_=function(e){var t=e.isOpen,r=e.campaignId,c=e.onRequestClose,o=e.contact;return Object(a.createElement)(i.a,{size:400,isOpen:t,onRequestClose:c},Object(a.createElement)("div",{className:"bwf-crm-body"},Object(a.createElement)("div",{className:"bwf-crm-details"},Object(a.createElement)("div",{className:"bwf-crm-d-head bwf-crm-gap-border"},Object(a.createElement)("div",{className:"bwf-gravatar-wrapper"},o.send_to&&Object(a.createElement)(j.a,{user:o.send_to,size:60}),Object(a.createElement)("div",{className:"bwf-crm-gravatar"},Object(a.createElement)("span",null,Object(b.isEmpty)(g()(o.f_name+" "+o.l_name))?"-":Object(s.N)(o.f_name,o.l_name)))),Object(a.createElement)("div",{className:"bwf-crm-name"},o&&o.f_name&&o.l_name&&o.f_name.charAt(0).toUpperCase()+o.f_name.slice(1)+" "+(o.l_name.charAt(0).toUpperCase()+o.l_name.slice(1))),Object(a.createElement)("div",{className:"bwf-crm-email"},o.send_to),Object(a.createElement)("div",{className:"bwf-t-center bwf-pt-15"},Object(a.createElement)(E.a,{href:"admin.php?page=autonami&path=/contact/"+o.cid,type:"bwf-crm",className:"components-button is-secondary"},Object(n.__)("View Contact")))),Object(a.createElement)("div",{className:"bwf-crm-d-data bwf-crm-gap-border"},Object(a.createElement)("div",{className:"bwf-crm-head"},Object(n.__)("Details","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-col2",key:1},Object(a.createElement)("div",{className:"bwf-crm-list",key:1},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Sent","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},Object(s.J)(o.sent_time))),o.is_unsubscribe&&!Object(b.isEmpty)(o.unsubscribe)&&Object(a.createElement)("div",{className:"bwf-crm-list",key:2},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Unsubscribe","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},Object(s.J)(o.unsubscribe)))),Object(a.createElement)("div",{className:"bwf-crm-col2",key:3},Object(a.createElement)("div",{className:"bwf-crm-list",key:2},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Total Click","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},o.click&&parseInt(o.click))),Object(a.createElement)("div",{className:"bwf-crm-list",key:1},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Total Open","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},o.open&&parseInt(o.open)))),Object(a.createElement)("div",{className:"bwf-crm-col2",key:4},Object(a.createElement)("div",{className:"bwf-crm-list",key:1},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Is Converted","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},parseInt(o.conversions)>0?Object(n.__)("Yes","wp-marketing-automations"):Object(n.__)("No","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-list",key:2},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(n.__)("Total Revenue","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},N(parseInt(o.revenue))))))),Object(a.createElement)("div",{className:"bwf-crm-timeline"},Object(a.createElement)("div",{className:"bwf-crm-head"},Object(n.__)("Timeline","wp-marketing-automations")),Object(a.createElement)(h,{contact:o,campaignId:r}))))},k=r(252),x=r(16),C=r(838),L=r(830),S=(r(1160),r(857)),I=r(72),A=r(8);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,c=[],i=!0,o=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(c.push(a.value),!t||c.length!==t);i=!0);}catch(e){o=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(o)throw n}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(e){var t=e.campaignId,r=e.campaignType,i=L.a.getCampaignData(),o=(i||{}).type,m=T(Object(a.useState)(!1),2),u=m[0],b=m[1],f=T(Object(a.useState)({}),2),d=f[0],p=f[1],v=L.a.getRecipientData(),w=L.a.getRecipientLoading(),O=L.a.getRecipientLimit(),h=L.a.getRecipientOffset(),j=L.a.getRecipientTotal(),y=Object(C.a)(),g=y.fetchRecipient,N=y.setRecipientsValues,P=Object(l.a)(Object(s.U)()).formatAmount;Object(S.a)("recipient","",!0,!0,!1,r),Object(a.useEffect)((function(){g(t,O,h)}),[O,h]);var R=[{key:"contact",label:Object(n.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact"},{key:"contact_details",label:Object(n.__)("Details","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details"},{key:"sent",label:Object(n.__)("Sent","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"},1===parseInt(o)?{key:"open",label:Object(n.__)("Open","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"}:{},{key:"click",label:Object(n.__)("Click","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"},{key:"unsubscribe",label:Object(n.__)("Unsubscribe","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"},Object(s.qb)()?{key:"converted",label:Object(n.__)("Converted","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center"}:{},Object(s.qb)()?{key:"revenue",label:Object(n.__)("Revenue","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m"}:{}],F=L.a.getRecipientPage(),q=function(e){e!==O&&(N("limit",e),N("offset",0))},G=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="";switch(e){case"null":case null:r="";break;case!0:case"yes":r=t?" bwf-crm-status-failed":" bwf-crm-status-success";break;case!1:case"no":r=t?" bwf-crm-status-success":""}return Object(a.createElement)("div",{className:"bwf-crm-status bwf-crm-status-s"+r})},J=function(e){var t=e;return t.email=e.send_to,Object(a.createElement)("div",{onClick:function(){return function(e){p(e),b(!0)}(e)}},Object(a.createElement)(k.a,{contact:t,dateText:Object(n.__)("Sent","wp-marketing-automations"),date:e.sent_time}))},M=function(e){return Object(a.createElement)("div",{className:"bwf-crm-contact-details-cell"},e.send_to?Object(a.createElement)(x.a,{justify:"start"},Object(a.createElement)(x.c,null,Object(a.createElement)(A.a,{icon:"mail"})),Object(a.createElement)(x.c,null,0!=e.cid?Object(a.createElement)(E.a,{className:"bwf-a-no-underline",href:"mailto:"+e.send_to,type:"external"},e.send_to):e.send_to)):"-")},U=v.map((function(e){return[{display:J(e),value:e.f_name+" "+e.l_name},{display:M(e),value:e.email},{display:G(!parseInt(e.sent)>0,!0),value:e.sent},1===parseInt(o)?{display:G(parseInt(e.open)>0),value:e.open}:{},{display:G(parseInt(e.click)>0),value:e.click},{display:G(0!=parseInt(e.unsubscribed)||null,!0),value:e.unsubscribe},Object(s.qb)()?{display:G(parseInt(e.conversions)>0),value:e.is_converted}:{},Object(s.qb)()?{display:P(parseFloat(e.revenue)),value:e.revenue}:{}]}));return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(I.a,null),Object(a.createElement)(c.a,{className:"bwf-crm-campaign-report-recipients",rows:U,headers:R,query:{paged:F},rowsPerPage:O,totalRows:j,isLoading:w,onPageChange:function(e,t){N("offset",(e-1)*O)},onQueryChange:function(e){return"per_page"!==e?function(){}:q},emptyMessage:Object(n.__)("No engagements found","wp-marketing-automations"),rowHeader:!0,showMenu:!1,hideHeader:"yes"}),Object(a.createElement)(_,{funnelId:1,contact:d,size:400,campaignId:parseInt(t),isOpen:u,onRequestClose:function(){return b(!1)}}))}}}]);