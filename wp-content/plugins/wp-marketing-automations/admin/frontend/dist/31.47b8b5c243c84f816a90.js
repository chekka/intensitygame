(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1129:function(t,e,n){},1130:function(t,e,n){},1221:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),c=n(250),o=n(278),i=function(){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status is-preview"})," ",Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle"},Object(a.createElement)("span",{className:"is-placeholder long"})))),Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status is-preview"})," ",Object(a.createElement)("span",{className:"is-placeholder"})),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle"},Object(a.createElement)("span",{className:"is-placeholder long"})))))},s=n(5),l=(n(4),n(73)),u=n(12),m=n.n(u),f=n(3);function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){p=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function s(t,e,n,a){var r=e&&e.prototype instanceof m?e:m,c=Object.create(r.prototype),o=new N(a||[]);return c._invoke=function(t,e,n){var a="suspendedStart";return function(r,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw c;return C()}for(n.method=r,n.arg=c;;){var o=n.delegate;if(o){var i=y(o,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=l(t,e,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}(t,n,o),c}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function m(){}function f(){}function d(){}var O={};i(O,r,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&n.call(g,r)&&(O=g);var h=d.prototype=m.prototype=Object.create(O);function j(t){["next","throw","return"].forEach((function(e){i(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;this._invoke=function(r,c){function o(){return new e((function(a,o){!function a(r,c,o,i){var s=l(t[r],t,c);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==b(m)&&n.call(m,"__await")?e.resolve(m.__await).then((function(t){a("next",t,o,i)}),(function(t){a("throw",t,o,i)})):e.resolve(m).then((function(t){u.value=t,o(u)}),(function(t){return a("throw",t,o,i)}))}i(s.arg)}(r,c,a,o)}))}return a=a?a.then(o,o):o()}}function y(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,y(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,u;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,c=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return c.next=c}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=d,i(h,"constructor",d),i(d,"constructor",f),f.displayName=i(d,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,i(t,o,"GeneratorFunction")),t.prototype=Object.create(h),t},t.awrap=function(t){return{__await:t}},j(w.prototype),i(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,a,r,c){void 0===c&&(c=Promise);var o=new w(s(e,n,a,r),c);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(h),i(h,o,"Generator"),i(h,r,(function(){return this})),i(h,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(i&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=t,o.arg=e,c?(this.method="next",this.next=c.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}function d(t,e,n,a,r,c,o){try{var i=t[c](o),s=i.value}catch(t){return void n(t)}i.done?e(s):Promise.resolve(s).then(a,r)}function O(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var a,r,c=[],o=!0,i=!1;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(c.push(a.value),!e||c.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var g=Object(l.a)(Object(s.U)()).formatAmount,h=function(t){var e=t.contact,n=t.automationId,c=O(Object(a.useState)(!0),2),o=c[0],l=c[1],u=O(Object(a.useState)([]),2),b=u[0],v=u[1],h=function(){var t,a=(t=p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m()({method:"GET",path:Object(s.k)("/automation/".concat(n,"/recipients/").concat(e.cid,"/timeline?mode=").concat(e.mode))}).then((function(t){200===t.code&&t.hasOwnProperty("result")&&!Object(f.isEmpty)(t.result)?v(t.result):v([]),l(!1)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),l(!1);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})),function(){var e=this,n=arguments;return new Promise((function(a,r){var c=t.apply(e,n);function o(t){d(c,a,r,o,i,"next",t)}function i(t){d(c,a,r,o,i,"throw",t)}o(void 0)}))});return function(){return a.apply(this,arguments)}}();Object(a.useEffect)((function(){l(!0),Object(f.isEmpty)(e.cid)||h()}),[e]);return o?Object(a.createElement)(i,null):Object(a.createElement)(a.Fragment,null,Object(f.isEmpty)(b)?Object(a.createElement)("p",null,Object(r.__)("No timeline found","wp-marketing-automations")):b.map((function(t){switch(t.type){case"conversion":return function(t){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(r.__)("Conversion Recorded","wp-marketing-automations"),Object(a.createElement)("a",{href:"post.php?post="+t.order_id+"&action=edit",className:"bwf-a-no-underline"}," (#".concat(t.order_id,")")))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.K)(t.date,!0)},Object(s.M)(t.date).fromNow())),Object(a.createElement)("div",{className:"bwf-crm-card-r"},Object(a.createElement)("div",{className:"bwf-crm-card-date"},g(parseFloat(t.revenue))))))}(t);case"open":return function(t){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,Object(r.__)("Email Opened","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.K)(t.date,!0)},Object(s.M)(t.date).fromNow()))))}(t);case"click":return function(t){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,1===parseInt(t.mode)?Object(r.__)("Email Clicked","wp-marketing-automations"):Object(r.__)("SMS Clicked","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.K)(t.date,!0)},Object(s.M)(t.date).fromNow()))))}(t);case"sent":return function(t){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-success"}),Object(a.createElement)("span",null,1===parseInt(t.mode)?Object(r.__)("Email Sent","wp-marketing-automations"):Object(r.__)("SMS Sent","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.K)(t.date,!0)},Object(s.M)(t.date).fromNow()))))}(t);case"failed":return function(t){return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("section",{className:"bwf-crm-card"},Object(a.createElement)("div",{className:"bwf-crm-card-l"},Object(a.createElement)("div",{className:"bwf-crm-card-title"},Object(a.createElement)("span",{className:"bwf-crm-status bwf-crm-status-failed"}),Object(a.createElement)("span",null,1===parseInt(t.mode)?Object(r.__)("Sent Failed","wp-marketing-automations"):Object(r.__)("SMS Sent Failed","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-card-subtitle",title:Object(s.K)(t.date,!0)},Object(s.M)(t.date).fromNow()))))}(t)}})))},j=(n(1129),n(144)),w=n(170),y=n.n(w),E=n(37),_=Object(l.a)(Object(s.U)()).formatAmount,N=function(t){var e=t.isOpen,n=t.automationId,c=t.onRequestClose,i=t.contact;return Object(a.createElement)(o.a,{size:400,isOpen:e,onRequestClose:c},Object(a.createElement)("div",{className:"bwf-crm-body"},Object(a.createElement)("div",{className:"bwf-crm-details"},Object(a.createElement)("div",{className:"bwf-crm-d-head bwf-crm-gap-border"},Object(a.createElement)("div",{className:"bwf-gravatar-wrapper"},i.send_to&&Object(a.createElement)(j.a,{user:i.send_to,size:60}),Object(a.createElement)("div",{className:"bwf-crm-gravatar"},Object(a.createElement)("span",null,Object(f.isEmpty)(y()(i.f_name+" "+i.l_name))?"-":Object(s.N)(i.f_name,i.l_name)))),Object(a.createElement)("div",{className:"bwf-crm-name"},i&&i.f_name&&i.l_name&&i.f_name.charAt(0).toUpperCase()+i.f_name.slice(1)+" "+(i.l_name.charAt(0).toUpperCase()+i.l_name.slice(1))),Object(a.createElement)("div",{className:"bwf-crm-email"},i.send_to),Object(a.createElement)("div",{className:"bwf-t-center bwf-pt-15"},Object(a.createElement)(E.a,{href:"admin.php?page=autonami&path=/contact/"+i.cid,type:"bwf-crm",className:"bwf-a-no-underline button is-secondary"},Object(r.__)("View Contact")))),Object(a.createElement)("div",{className:"bwf-crm-d-data bwf-crm-gap-border"},Object(a.createElement)("div",{className:"bwf-crm-head"},Object(r.__)("Details","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-col2",key:1},i.is_unsubscribe&&!Object(f.isEmpty)(i.unsubscribe)&&Object(a.createElement)("div",{className:"bwf-crm-list",key:11},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(r.__)("Unsubscribe","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},Object(s.J)(i.unsubscribe)))),Object(a.createElement)("div",{className:"bwf-crm-col2",key:2},Object(a.createElement)("div",{className:"bwf-crm-list",key:22},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(r.__)("Total Click","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},parseInt(i.click)>0?parseInt(i.click):0)),Object(a.createElement)("div",{className:"bwf-crm-list",key:23},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(r.__)("Total Open","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},parseInt(i.open)>0?parseInt(i.open):0))),Object(a.createElement)("div",{className:"bwf-crm-col2",key:3},Object(a.createElement)("div",{className:"bwf-crm-list",key:31},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(r.__)("Is Converted","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},parseInt(i.conversions)>0?Object(r.__)("Yes","wp-marketing-automations"):Object(r.__)("No","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-crm-list",key:32},Object(a.createElement)("div",{className:"bwf-crm-label"},Object(r.__)("Total Revenue","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-value"},parseInt(i.revenue)?_(parseInt(i.revenue)):"-"))))),Object(a.createElement)("div",{className:"bwf-crm-timeline"},Object(a.createElement)("div",{className:"bwf-crm-head"},Object(r.__)("Timeline","wp-marketing-automations")),Object(a.createElement)(h,{contact:i,automationId:n}))))},k=n(252),C=n(16),S=n(852),L=n(839),P=n(136),I=(n(1130),n(72)),A=n(8),x=n(837),T=n(132),R=n(93),D=n(9),F=n.n(D);function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var a,r,c=[],o=!0,i=!1;try{for(n=n.call(t);!(o=(a=n.next()).done)&&(c.push(a.value),!e||c.length!==e);o=!0);}catch(t){i=!0,r=t}finally{try{o||null==n.return||n.return()}finally{if(i)throw r}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.default=function(t){var e=t.match.params.automationId,n=t.isV2,o=void 0===n||n;Object(s.f)("Automation #"+e);var i=G(Object(a.useState)(!1),2),u=i[0],m=i[1],f=G(Object(a.useState)({}),2),b=f[0],p=f[1],d=G(Object(a.useState)(!0),2),O=d[0],v=d[1],g=Object(L.a)(),h=g.getRecipientData(),j=g.getRecipientLoading(),w=g.getRecipientLimit(),y=g.getRecipientOffset(),_=g.getRecipientTotal(),D=Object(S.a)(),M=D.fetchRecipient,q=D.setRecipientsValues;Object(a.useEffect)((function(){Object(s.gb)()&&M(e,w,y)}),[w,y]);var U=g.getRecipientAutomation(),V=(U.v,U.title),H=void 0===V?"":V,K=Object(T.a)().setL2NavAlign,J=Object(P.a)(),z=J.getAutomationData,Y=J.getAutomationId,B=z().title,$=void 0===B?"":B,Q=Y();Object(x.a)("engagement",parseInt(e)===parseInt(Q)&&""!==$&&""===H?$:""!==H?H:Object(a.createElement)("div",{className:"bwf-placeholder-temp bwf-h-15 bwf-w-90"}),!0,!1,null,e,!1,o),Object(a.useEffect)((function(){K("left"),Object(s.f)("Automation #"+e)}),[j]);var W=Object(l.a)(Object(s.U)()).formatAmount,X=[{key:"contact",label:Object(r.__)("Contact","wp-marketing-automations"),required:!0,cellClassName:"bwf-crm-col-contact bwf-w-210"},{key:"contact_details",label:Object(r.__)("Details","wp-marketing-automations"),cellClassName:"bwf-crm-col-contact-details"},{key:"sent",label:Object(r.__)("Sent","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center bwf-w-120"},{key:"open",label:Object(r.__)("Open","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center bwf-w-120"},{key:"click",label:Object(r.__)("Click","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center bwf-w-120"},{key:"unsubscribe",label:Object(r.__)("Unsubscribe","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center bwf-w-150"},Object(s.qb)()?{key:"converted",label:Object(r.__)("Converted","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-t-center bwf-w-150"}:{},Object(s.qb)()?{key:"revenue",label:Object(r.__)("Revenue","wp-marketing-automations"),cellClassName:"bwf-crm-col-stats-m bwf-w-150"}:{}],Z=g.getRecipientPage(),tt=function(t){t!==w&&(q("limit",t),q("offset",0))},et=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="";switch(t){case"null":case null:n="";break;case!0:case"yes":n=e?" bwf-crm-status-failed":" bwf-crm-status-success";break;case!1:case"no":n=e?" bwf-crm-status-success":""}return Object(a.createElement)("div",{className:"bwf-crm-status bwf-crm-status-s"+n})},nt=function(t){var e=t;return e.email=t.send_to,Object(a.createElement)("div",{onClick:function(){return Object(s.gb)()?function(t){p(t),m(!0)}(t):v(!1)}},Object(a.createElement)(k.a,{contact:e,dateText:Object(r.__)("Sent","wp-marketing-automations"),date:t.sent_time}))},at=function(t){return Object(a.createElement)("div",{className:"bwf-crm-contact-details-cell"},t.send_to&&Object(a.createElement)(C.a,{justify:"start"},Object(a.createElement)(C.c,null,Object(a.createElement)(A.a,{icon:1===parseInt(t.mode)?"mail":"phone"})),Object(a.createElement)(C.c,null,0!==t.cid?Object(a.createElement)(E.a,{className:"bwf-a-no-underline",href:"mailto:"+t.send_to,type:"external"},t.send_to):t.send_to)))},rt=[{track_ids:"1",cid:"1",send_to:"johndoe@gmail.com",open:"0",mode:"1",click:"0",total:"4",sent:"4",sent_time:F()().format(),f_name:"John",l_name:"Doe",revenue:"12.00",conversions:0,unsubscribed:0,contact_deleted:!1}];return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:"<style>#bwfcrm-page{ overflow: auto !important; }</style>"}}),Object(a.createElement)(I.a,null),Object(a.createElement)(c.a,{className:"bwf-crm-campaign-report-recipients",rows:(Object(s.gb)()?h:rt).map((function(t){return[{display:nt(t),value:t.f_name+" "+t.l_name},{display:at(t),value:t.email},{display:et(parseInt(t.sent)>0),value:t.open},{display:et(parseInt(t.open)>0),value:t.open},{display:et(parseInt(t.click)>0),value:t.click},{display:et(0!=parseInt(t.unsubscribed)||null,!0),value:t.unsubscribe},Object(s.qb)()?{display:et(parseInt(t.conversions)>0),value:t.is_converted}:{},Object(s.qb)()?{display:W(parseFloat(t.revenue)),value:t.revenue}:{}]})),headers:X,query:{paged:Z},rowsPerPage:w,totalRows:Object(s.gb)()?_:1,isLoading:!!Object(s.gb)()&&j,onPageChange:function(t){q("offset",(t-1)*w)},onQueryChange:function(t){return"per_page"!==t?function(){}:tt},emptyMessage:Object(r.__)("No engagements found","wp-marketing-automations"),rowHeader:!0,showMenu:!1,hideHeader:"yes"}),Object(a.createElement)(N,{contact:b,size:400,automationId:e,isOpen:u,onRequestClose:function(){return m(!1)}}),!Object(s.gb)()&&Object(a.createElement)(R.a,{isOpen:O,onRequestClose:function(){return v(!1)},closeOnClickOut:!1,modalContent:{demoLabel:Object(r.__)("Try Demo","wp-marketing-automations")}}))}},837:function(t,e,n){"use strict";var a=n(0),r=n(132),c=n(2),o=n(5),i=n(55),s=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={workflow:{name:Object(c.__)("Workflow","wp-marketing-automations"),link:e?"admin.php?page=autonami&path=/automation/".concat(t):"admin.php?page=autonami-automations&edit=".concat(t)}};return e&&(n.analytics={name:Object(c.__)("Analytics","wp-marketing-automations"),link:e?"admin.php?page=autonami&path=/automation/".concat(t,"/analytics"):"admin.php?page=autonami&path=/automation-v1/".concat(t,"/analytics"),isProFeature:!0,showOnClick:!0},n.contacts={name:Object(c.__)("Contacts","wp-marketing-automations"),link:"admin.php?page=autonami&path=/automation/".concat(t,"/contacts"),isProFeature:!0,showOnClick:!0}),n.engagement={name:Object(c.__)("Engagements","wp-marketing-automations"),link:e?"admin.php?page=autonami&path=/automation/".concat(t,"/engagements"):"admin.php?page=autonami&path=/automation-v1/".concat(t,"/engagements"),isProFeature:!0,showOnClick:!0},Object(o.qb)()&&(n.orders={name:Object(c.__)("Orders","wp-marketing-automations"),link:e?"admin.php?page=autonami&path=/automation/".concat(t,"/orders"):"admin.php?page=autonami&path=/automation-v1/".concat(t,"/orders"),isProFeature:!0,showOnClick:!0}),n};e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,m=arguments.length>6&&void 0!==arguments[6]&&arguments[6],f=arguments.length>7&&void 0!==arguments[7]&&arguments[7],b=arguments.length>8&&void 0!==arguments[8]&&arguments[8],p=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},d=p.automation_nav,O=p.automationv2_nav,v=Object(r.a)(),g=v.setActiveMultiple,h=v.resetHeaderMenu,j=v.setL2NavType,w=v.setL2Nav,y=v.setBackLink,E=v.setL2Title,_=v.setL2Content,N=v.setBackLinkLabel,k=v.setL2NavAlign,C=v.setPageHeader;return Object(a.useEffect)((function(){h(),!o&&j("menu"),b||w(u?s(u,f):f?O:d),g({leftNav:f?"automations-v2":"automations-v1",rightNav:t}),n&&y(n),u&&y(n&&!f?"admin.php?page=autonami&path=/automations-v1":"admin.php?page=autonami&path=/automations"),o||f&&u&&N(Object(c.__)("All Automations","wp-marketing-automations-crm")),!f&&u&&N(Object(c.__)("All Automations","wp-marketing-automations")),u&&k("left"),e&&E(e),!n&&l&&_(l),C("Automations"),f&&C(Object(a.createElement)(a.Fragment,null,"Automations",Object(a.createElement)(i.a,{label:"Next Gen"}))),m&&w({})}),[t,f,e,b]),!0}},839:function(t,e,n){"use strict";var a=n(135),r=n(95),c=["getStateProp"];function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}e.a=function(){var t=Object(a.a)("automationList"),e=t.getStateProp,n=l(t,c),o=Object(a.a)(r.a.recipient).getStateProp,s=Object(a.a)(r.a.conversion).getStateProp,u=Object(a.a)(r.a.contacts).getStateProp,m=Object(a.a)(r.a.analytics).getStateProp;return i(i({},n),{},{getAutomations:function(){return e("automations")},getPageNumber:function(){return parseInt(e("offset"))/parseInt(e("limit"))+1},getPerPageCount:function(){return parseInt(e("limit"))},getOffset:function(){return parseInt(e("offset"))},getTotalCount:function(){return parseInt(e("total"))},getLoadingStatus:function(){return e("isLoading")},getRecipientData:function(){return o("data")},getRecipientLoading:function(){return o("isLoading")},getRecipientOffset:function(){return o("offset")},getRecipientAutomationId:function(){return o("automationId")},getRecipientTotal:function(){return o("total")},getRecipientAutomation:function(){return o("automation")},getRecipientPage:function(){return parseInt(o("offset"))/parseInt(o("limit"))+1},getRecipientLimit:function(){return o("limit")},getConversionData:function(){return s("data")},getConversionLoading:function(){return s("isLoading")},getConversionOffset:function(){return s("offset")},getConversionAutomationId:function(){return s("automationId")},getConversionTotal:function(){return s("total")},getConversionAutomation:function(){return s("automation")},getConversionPage:function(){return parseInt(s("offset"))/parseInt(s("limit"))+1},getConversionLimit:function(){return s("limit")},getCountData:function(){return e("countData")},getContactData:function(){return u("data")},getContactLoading:function(){return u("isLoading")},getContactOffset:function(){return u("offset")},getContactAutomationId:function(){return u("automationId")},getContactTotal:function(){return u("total")},getContactAutomation:function(){return u("automation")},getContactPage:function(){return parseInt(u("offset"))/parseInt(u("limit"))+1},getContactLimit:function(){return u("limit")},getContactCountData:function(){return u("contactCount")},getAnalyticsData:function(){return m("analytics")},getAnalyticsTileData:function(){return m("tiles")},getAnalyticsTableData:function(){return m("tableData")},getAnalyticsLoading:function(){return m("isLoading")},getAnalyticsType:function(){return m("type")},getAnalyticsAutomationData:function(){return m("automation")}})}},852:function(t,e,n){"use strict";var a=n(134),r=n(5),c=n(95),o=n(17),i=["fetch","setStateProp"],s=["s","page","filter","path"];function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}e.a=function(){var t=Object(a.a)("automationList"),e=t.fetch,n=t.setStateProp,l=f(t,i),m=Object(a.a)(c.a.recipient),b=m.fetch,p=m.setStateProp,d=Object(a.a)(c.a.conversion),O=d.fetch,v=d.setStateProp,g=Object(a.a)(c.a.contacts),h=g.fetch,j=g.setStateProp,w=Object(a.a)(c.a.analytics),y=w.fetch,E=w.setStateProp;return u(u({},l),{},{fetch:function(t,a,c,o){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];n("automation",{});var l=a.s,u=(a.page,a.filter,a.path,f(a,s)),m={offset:c,limit:o,status:t,search:l,filters:u,version:i?2:1};e("GET",Object(r.k)("/automations"),m)},setAutomationListValues:function(t,e){n(t,e)},fetchRecipient:function(t,e,n){b("GET",Object(r.k)("/automation/".concat(t,"/recipients?limit=").concat(e,"&offset=").concat(n)))},setRecipientsValues:function(t,e){p(t,e)},fetchConversion:function(t,e,n){v("automation",{}),O("GET",Object(r.k)("/automation/".concat(t,"/conversions?limit=").concat(e,"&offset=").concat(n)))},setConversionValues:function(t,e){v(t,e)},fetchContacts:function(t,e,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";j("automation",{}),h("GET",Object(r.k)("/automation/".concat(t,"/contacts?limit=").concat(e,"&offset=").concat(n,"&type=").concat(a,"&search=").concat(c)))},setContactValues:function(t,e){j(t,e)},fetchAnalytics:function(t,e,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=0;4===parseInt(i)&&(s=1),y("GET",Object(r.k)("/analytics/emails/chart/")+"?"+Object(o.stringify)({after:e,before:n,interval:a,oid:t,type:c,mode:i,contact:s}))},setAnalyticsValues:function(t,e){E(t,e)}})}}}]);