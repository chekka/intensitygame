(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1157:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(4),c=r(2),o=r(5),i=r(12),s=r.n(i),l=r(830),m=r(838),u=r(96),b=r.n(u),p=r(3),f=r(864),d=r(140),w=r(72),v=r(8),h=r(133),O=r(132);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(e){i=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var n=t&&t.prototype instanceof u?t:u,c=Object.create(n.prototype),o=new N(a||[]);return c._invoke=function(e,t,r){var a="suspendedStart";return function(n,c){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw c;return x()}for(r.method=n,r.arg=c;;){var o=r.delegate;if(o){var i=j(o,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var s=l(e,t,r);if("normal"===s.type){if(a=r.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(a="completed",r.method="throw",r.arg=s.arg)}}}(e,r,o),c}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var m={};function u(){}function b(){}function p(){}var f={};i(f,n,(function(){return this}));var d=Object.getPrototypeOf,w=d&&d(d(k([])));w&&w!==t&&r.call(w,n)&&(f=w);var v=p.prototype=u.prototype=Object.create(f);function h(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){var a;this._invoke=function(n,c){function o(){return new t((function(a,o){!function a(n,c,o,i){var s=l(e[n],e,c);if("throw"!==s.type){var m=s.arg,u=m.value;return u&&"object"==g(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(u).then((function(e){m.value=e,o(m)}),(function(e){return a("throw",e,o,i)}))}i(s.arg)}(n,c,a,o)}))}return a=a?a.then(o,o):o()}}function j(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return c.next=c}}return{next:x}}function x(){return{value:void 0,done:!0}}return b.prototype=p,i(v,"constructor",p),i(p,"constructor",b),b.displayName=i(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,o,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},h(O.prototype),i(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,a,n,c){void 0===c&&(c=Promise);var o=new O(s(t,r,a,n),c);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},h(v),i(v,o,"Generator"),i(v,n,(function(){return this})),i(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return o.type="throw",o.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n],o=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var i=r.call(c,"catchLoc"),s=r.call(c,"finallyLoc");if(i&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(i){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var c=n;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;_(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}function E(e,t,r,a,n,c,o){try{var i=e[c](o),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(a,n)}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,c=[],o=!0,i=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(c.push(a.value),!t||c.length!==t);o=!0);}catch(e){i=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(i)throw n}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}t.default=function(e){var t=Object(a.useContext)(o.d),r=_(Object(a.useState)(!1),2),i=r[0],u=r[1],g=_(Object(a.useState)(1),2),N=g[0],k=g[1],x=_(Object(a.useState)(""),2),S=x[0],C=x[1],L=_(Object(a.useState)({loading:!1,error:!1,success:!1,message:""}),2),P=L[0],T=L[1],I=_(Object(a.useState)(!1),2),M=I[0],D=I[1],A=_(Object(a.useState)(!1),2),Y=A[0],H=A[1],B=_(Object(a.useState)({}),2),F=B[0],G=B[1],R={rich:Object(c.__)("Rich Text","wp-marketing-automations"),wc:Object(c.__)("WooCommerce","wp-marketing-automations"),html:Object(c.__)("HTML","wp-marketing-automations"),editor:Object(c.__)("Editor","wp-marketing-automations")},U=_(Object(a.useState)({message:"",type:1}),2),q=U[0],K=U[1],J=Object(m.a)().setCampaignValues,V=Object(o.q)(),z=l.a.getCampaignData(),W=l.a.getCampaignId(),Z=(l.a.getEditableMode(),parseInt(z.type));Object(a.useEffect)((function(){if(z)if(z.hasOwnProperty("execution_time")&&!Object(p.isNull)(z.execution_time))k(2),C(b()(Object(o.K)(z.execution_time,!0,!0)).format("YYYY-MM-DDTHH:mm:ss"));else{var e=Object(o.w)(b()(new Date)).format("YYYY-MM-DDTHH:mm:ss");C(e)}}),[]),Object(a.useEffect)((function(){document.addEventListener("click",(function(e){var t=document.getElementsByClassName("bwf-crm-campaign-schedule-popover")[0],r=!0;void 0!==t&&t.contains(e.target)&&(r=!1),i&&"bwf-crm-campaign-review-schedule-text-box"!=e.target.id&&r&&u(!1)}))}));var $=Object(O.a)().setL2Title;Object(a.useEffect)((function(){$("title"in z?Object(a.createElement)(a.Fragment,null,z.title):"")}),[z]);var Q,X,ee,te=z?z.count:0,re=[{value:1,className:"bwf-crm-campaign-schedule bwf-crm-campaign-schedule-now",label:Object(c.__)("Broadcast Now","wp-marketing-automations")},{value:2,className:"bwf-crm-campaign-schedule bwf-crm-campaign-schedule-later",label:Object(c.__)("Schedule For Later","wp-marketing-automations")}],ae=function(){var r,a=(r=y().mark((function r(){var a,n;return y().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.setPending(!0),!(te<=0)){r.next=5;break}return T({status:!0,error:Object(c.__)("No Contacts are selected.","wp-marketing-automations")}),e.setPending(!1),r.abrupt("return");case 5:if(a=Object(o.w)(b()(new Date)).format("YYYY-MM-DDTHH:mm:ss"),n=Object(o.w)(b()(S)),2!=N||n.isAfter(a)||n.isSame(a,"minute")){r.next=11;break}return T({status:!0,error:Object(c.__)("Given time should exceeds the current time.","wp-marketing-automations")}),e.setPending(!1),r.abrupt("return");case 11:return r.prev=11,r.next=14,s()({path:Object(o.k)("/broadcast/".concat(W)),method:"POST",data:{data:{schedule_time:2==N?Object(o.y)(S).utc().format():"",modified_by:Object(o.u)()},step:4},headers:{"Content-Type":"application/json"}}).then((function(e){200==e.code?(t(e.message),Object(o.Z)(t,2e3),setTimeout((function(){J("data",e.result),J("editableMode",!1)}),2e3)):T({status:!0,error:e.message})}));case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(11),T({status:!0,error:r.t0.message});case 19:e.setPending(!1);case 20:case"end":return r.stop()}}),r,null,[[11,16]])})),function(){var e=this,t=arguments;return new Promise((function(a,n){var c=r.apply(e,t);function o(e){E(c,a,n,o,i,"next",e)}function i(e){E(c,a,n,o,i,"throw",e)}o(void 0)}))});return function(){return a.apply(this,arguments)}}();return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(w.a,null),Object(a.createElement)("div",{className:"bwf-campaign-step-div bwf-card-wrap bwf-campaign-step-4"},Object(a.createElement)("div",{className:"bwf-card-header"},Object(a.createElement)("span",{className:"bwf-form-title"},Object(c.__)("Review & Schedule","wp-marketing-automations"))),Object(a.createElement)("div",{className:""},Object(a.createElement)("div",{className:"bwf-p-gap bwf-top-gap"},Object(a.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(a.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Information","wp-marketing-automations")),Object(a.createElement)(n.CardBody,{className:"bwf-crm-overview-report-body"},Object(a.createElement)("div",{className:"bwf-report-row",key:1},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Title","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},z.title)),Object(a.createElement)("div",{className:"bwf-report-row",key:2},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Type","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},V[Z].label)),!!z.description&&Object(a.createElement)("div",{className:"bwf-report-row",key:3},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Description","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},z.description)))))),Object(a.createElement)("div",{className:"bwf-pt-0"},Object(a.createElement)("div",{className:"bwf-p-gap "},Object(a.createElement)(a.Fragment,null,Object(a.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(a.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Contacts","wp-marketing-automations")),Object(a.createElement)(n.CardBody,{className:"bwf-crm-overview-report-body"},Object(a.createElement)("div",{className:"bwf-report-row",key:1},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Total","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},Object(a.createElement)("b",null,te))),z.data.hasOwnProperty("filters")&&!Object(p.isEmpty)(z.data.filters)&&Object(a.createElement)("div",{className:"bwf-report-row",key:2},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Segments","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},Object(f.b)(z.data.filters)))))))),Object(a.createElement)("div",{className:" bwf-pt-0"},Object(a.createElement)("div",{className:"bwf-p-gap "},Object(a.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(a.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Content","wp-marketing-automations")),Object(a.createElement)(n.CardBody,{className:"bwf-crm-overview-report-body"},Z&&1==Z&&z.data.hasOwnProperty("senders_name")&&!Object(p.isEmpty)(z.data.senders_name)&&Object(a.createElement)("div",{className:"bwf-report-row",key:1},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("From Name","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},z.data.senders_name)),Z&&1==Z&&z.data.hasOwnProperty("senders_email")&&!Object(p.isEmpty)(z.data.senders_email)&&Object(a.createElement)("div",{className:"bwf-report-row",key:2},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("From Email","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},z.data.senders_email)),Z&&1==Z&&z.data.hasOwnProperty("replyto")&&!Object(p.isEmpty)(z.data.replyto)&&Object(a.createElement)("div",{className:"bwf-report-row",key:3},Object(a.createElement)("div",{className:"bwf-report-row-label"},Object(c.__)("Reply-To Email","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value"},z.data.replyto)),z.data&&z.data.content&&z.data.content.map((function(e,t){return Object(a.createElement)("div",{className:"bwf-report-row",key:t},Object(a.createElement)("div",{className:"bwf-report-row-label"},z.data.content.length>1?Object(c.__)("Content #","wp-marketing-automations")+(parseInt(t)+1):Object(c.__)("Content","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-report-row-value bwf-report-value-modal"},Z&&e.subject&&Object(a.createElement)("span",null,e.subject),Object(a.createElement)(n.Button,{isSecondary:!0,className:"bwf-a-no-underline",style:{height:"auto",padding:"10px 20px"},onClick:function(){H(!0),[2,3].includes(parseInt(Z))?D(!0):D(!1),G(e)}},Object(c.__)("View details","wp-marketing-automations"))))})),Y&&Object(a.createElement)(n.Modal,{onRequestClose:function(){return H(!1)},className:"bwf-message-preview-modal bwf-admin-modal bwf-admin-modal-large bwf-h--core-header"},Object(a.createElement)("div",{className:"bwf-modal-header"},Object(a.createElement)("div",{className:"bwf-modal-heading"},Object(c.__)("Details","wp-marketing-automations")),Object(a.createElement)("span",{onClick:function(){return H(!1)},className:"bwf-modal-close"},Object(a.createElement)(v.a,{icon:"close",color:"#353030"}))),(Q=F,X="",ee=!0,3==Z&&Q.hasOwnProperty("whatsAppImage")&&Q.whatsAppImage&&Q.hasOwnProperty("whatsAppImageSetting")&&Q.whatsAppImageSetting.hasOwnProperty("position")&&!Object(p.isEmpty)(Q.whatsAppImageSetting.position)&&Q.whatsAppImageSetting.hasOwnProperty("imageURL")&&!Object(p.isEmpty)(Q.whatsAppImageSetting.imageURL)&&(X="before"===Q.whatsAppImageSetting.position?Object(a.createElement)(a.Fragment,null,Object(a.createElement)("img",{src:Q.whatsAppImageSetting.imageURL,width:50,height:50}),Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:Q.body}})):Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:Q.body}}),Object(a.createElement)("img",{src:Q.whatsAppImageSetting.imageURL,width:50,height:50})),ee=!1),ee&&(X=Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:"editor"===Q.type?Q.editor.body:Q.body}})),Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-message-wrap"},Object(a.createElement)("div",{className:"bwf-section"},1==Z&&Object(a.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(a.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("Subject","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf_align_center"},Q.subject)),1==Z&&Q.hasOwnProperty("preheader")&&!Object(p.isEmpty)(Q.preheader)&&Object(a.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(a.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("Mail Pre-header","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf_align_center"},Q.preheader)),1==Z&&Q.hasOwnProperty("type")&&!Object(p.isEmpty)(Q.type)&&Object(a.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(a.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("Mail Type","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf_align_center"},R[Q.type])),Q.hasOwnProperty("utm")&&!Object(p.isEmpty)(Q.utm)&&function(e){var t=[];return t.push(Object(c.__)("Source","wp-marketing-automations")+": "+e.source),t.push(Object(c.__)("Medium","wp-marketing-automations")+": "+e.medium),e.hasOwnProperty("name")&&!Object(p.isEmpty)(e.name)&&t.push(Object(c.__)("Name","wp-marketing-automations")+": "+e.name),e.hasOwnProperty("content")&&!Object(p.isEmpty)(e.content)&&t.push(Object(c.__)("Content","wp-marketing-automations")+": "+e.content),e.hasOwnProperty("term")&&!Object(p.isEmpty)(e.term)&&t.push(Object(c.__)("Term","wp-marketing-automations")+": "+e.term),Object(a.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(a.createElement)("div",{className:"bwf-w-210 bwf_bold bwf_align_center"},Object(c.__)("UTM Details","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf_align_center"},Object(a.createElement)("div",{className:"bwf-p"},t.join(" | "))))}(Q.utm),M&&Object(a.createElement)("div",{className:"bwf-p-15 bwf-bb-grey"},Object(a.createElement)("div",{className:"bwf-report-row-value"},X)),Object(a.createElement)("div",{className:"bwf-p-15 bwf-t-center"},Object(a.createElement)("a",{className:"bwf-model-link",onClick:function(){return D(!M)}},M?Object(c.__)("Less Details","wp-marketing-automations"):Object(c.__)("More Details","wp-marketing-automations")))))))))))),Object(a.createElement)("div",{className:"bwf-pt-0"},Object(a.createElement)("div",{className:"bwf-p-gap "},Object(a.createElement)(n.Card,{className:"bwf-crm-overview-detail-wrap"},Object(a.createElement)(n.CardHeader,{className:"bwf-crm-overview-report-header"},Object(c.__)("Schedule","wp-marketing-automations")),Object(a.createElement)(n.CardBody,{className:"bwf-crm-overview-schedule-section"},Object(a.createElement)("div",{className:"bwf-campaign-review-broadcast-wrap",onClick:function(){u(!1)}},Object(a.createElement)(n.ButtonGroup,{className:"bwf-crm-campaign-schedule-btn-grp bwf-alter-button"},re.map((function(e,t){var r=e.value===N?{isPrimary:!0}:{isSecondary:!0};return Object(a.createElement)(n.Button,j({onClick:function(){k(e.value)}},r,{className:e.className,key:t}),1==e.value?Object(a.createElement)(v.a,{icon:"broadcasts",color:e.value===N?"#fff":"#000"}):Object(a.createElement)(v.a,{icon:"timer",color:e.value===N?"#fff":"#000"}),e.label)}))),2==N&&Object(a.createElement)("div",{className:"bwf-crm-campaign-review-date-wrap"},Object(a.createElement)("div",null,Object(a.createElement)("span",{className:"bwf-mr-5"},Object(a.createElement)(v.a,{icon:"calender"})),Object(c.__)("Pick Date and Time","wp-marketing-automations")),Object(a.createElement)("div",{className:"bwf-crm-campaign-review-schedule-text-box",id:"bwf-crm-campaign-review-schedule-text-box",onClick:function(e){e.stopPropagation(),u(!i)}},Object(o.K)(b()(S),!1,!1)),i&&Object(a.createElement)("div",{className:"bwf-crm-campaign-schedule-popover",onClick:function(e){return e.stopPropagation()}},Object(a.createElement)(n.DateTimePicker,{currentDate:S,isInvalidDate:function(e){return Object(o.w)(e).isBefore(Object(o.w)(b()()),"day")},onChange:function(e,t){var r=Object(o.w)(b()(new Date)).format("YYYY-MM-DDTHH:mm:ss"),a=Object(o.w)(b()(e));a.isAfter(r)||a.isSame(r,"minute")?C(e):K({message:Object(c.__)("Given time should exceeds the current time.","wp-marketing-automations"),type:0})},is12Hour:!0}),Object(a.createElement)("div",{className:"bwf-p bwf-display-flex"},"Current Store Time: ",Object(o.K)(b()().tz("UTC")))))))))),Object(a.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(a.createElement)("div",{className:"bwf-crm-campaign-navigation"},Object(a.createElement)(n.Button,{isSecondary:!0,className:"bwf-crm-navigation-previous",onClick:function(){J("step",3)}},Object(c.__)("Previous","wp-marketing-automations")),Object(a.createElement)(n.Button,{className:"bwf-crm-navigation-next",isPrimary:!0,onClick:function(){ae()},isBusy:e.isPending},1===N?Object(c.__)("Send Now","wp-marketing-automations"):Object(c.__)("Schedule","wp-marketing-automations")))),Object(a.createElement)(h.a,{modalTitle:Object(c.__)("Update Broadcast"),confirmText:P.confirmText,deleteEntityName:P.deleteEntityName,confirmButtonText:P.buttonConfirm,cancelButtonText:P.buttonCancel,onConfirm:P.onConfirm,isLoading:P.loading,successMessage:P.success,errorMessage:P.error,onRequestClose:function(){return T({status:!1})},isOpen:P.status,isDelete:!0}),Object(a.createElement)(d.a,{message:q.message,type:q.type,removeMessage:function(){return K({message:"",type:1})}})))}}}]);