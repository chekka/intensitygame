(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1220:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r(844),i=r(2),o=r(143),c=r(36),l=r(28),u=(r(436),r(15));function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m=function(t){var e=t.query;return Object(n.createElement)("div",{className:"bwf-crm-contacts-report-filter"},Object(n.createElement)(c.a,{className:"screen-reader-text"},Object(i.__)("Filters","wp-marketing-automations")),Object(n.createElement)(c.b,{component:"div",className:"bwf-filters"},Object(n.createElement)("div",{className:"bwfcrm-filters-basic-filters"},Object(n.createElement)(o.a,{key:JSON.stringify(e),onRangeSelect:function(t){var r=f(f({},e),t);delete r.compare,Object(u.k)(r,"/",{})},dateQuery:function(t){t.compare="previous_year";var e=Object(l.e)(t),r=e.period,n=e.compare,a=e.before,i=e.after,o=Object(l.c)(t);return{period:r,compare:n,before:a,after:i,primaryDate:o.primary,secondaryDate:o.secondary}}(e),isoDateFormat:l.g,hideCompare:!0}))))},b=(r(260),r(250)),y=r(37),h=r(252),d=r(5),g=r(8),v=r(4),O=r(843),j=r(832),w=r(3),E=r(865);function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){c=!0,a=t}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var T=function(t){var e=t.query,r=e.period,a=e.compare,o=e.interval,c=e.after,u=e.before,s=e.id,f=e.filter,p=L(Object(n.useState)({}),2),m=p[0],_=p[1],T=L(Object(n.useState)(""),2),k=T[0],S=T[1],A=L(Object(n.useState)(!1),2),P=A[0],D=A[1],x=Object(O.a)(),I=x.fetchDirectEmailTable,N=x.setDirectEmailTableData,C=j.a.getDirectEmailTableList,G=j.a.getDirectEmailTableLimit,M=j.a.getDirectEmailTableLoading,Y=j.a.getDirectEmailTableOffset,F=j.a.getDirectEmailTablePage,q=j.a.getDirectEmailTableTotal,H=function(t){return t.compare="previous_year",Object(l.c)(t).primary};e.hasOwnProperty("period")||(e.period="month");var R=function(t,e){var r=arguments.length>3?arguments[3]:void 0,n=arguments.length>4?arguments[4]:void 0,a=H(t),i="",o="";a&&(Object(w.isEmpty)(a.after)||(i=a.after.format("YYYY-MM-DD HH:mm:ss")),Object(w.isEmpty)(a.before)||(o=a.before.format("YYYY-MM-DD 23:59:59")),Object(w.isEmpty)(i)||Object(w.isEmpty)(o)||I(r,n,i,o,e))};Object(n.useEffect)((function(){if(Object(d.gb)()){var t=e.hasOwnProperty("interval")?e.interval:"day";R(e,t,!0,K,Q)}}),[r,a,o,c,u,s,f]);var J,B=C(),U=M(),Q=Y(),$=q(),K=G(),z=F(),V=[{key:"contact",label:Object(i.__)("Contact","wp-marketing-automations"),isLeftAligned:!1},{key:"subject",label:Object(i.__)("Subject","wp-marketing-automations"),isLeftAligned:!1},{key:"sentby",label:Object(i.__)("Sent By","wp-marketing-automations"),isLeftAligned:!0},{key:"last_activity",label:Object(i.__)("Last Activity","wp-marketing-automations"),isLeftAligned:!0},{key:"opens",label:Object(i.__)("Opens","wp-marketing-automations"),isLeftAligned:!0},{key:"clicks",label:Object(i.__)("Clicks","wp-marketing-automations"),isLeftAligned:!0},{key:"view",label:"",isLeftAligned:!0,cellClassName:"bwf-w-60"}],W=function(t){return Object(n.createElement)(y.a,{href:"admin.php?page=autonami&path=/contact/"+t.cid,type:"bwf-crm",className:"bwf-a-no-underline"},Object(n.createElement)(h.a,{contact:t,dateText:Object(i.__)("Sent","wp-marketing-automations"),date:t.date}))};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(b.a,{headers:V,rows:(J=[],Object(w.isEmpty)(B)||(J=B.map((function(t){return[{display:W(t),value:"sadsa"},{display:t.sub?t.sub:"-",value:t.sub},{display:t.author?(a=t.author,i="-",o="",a.hasOwnProperty("name")&&!Object(w.isEmpty)(a.name)&&(i=a.name[0].toUpperCase()+a.name.slice(1,a.name.length)),a.hasOwnProperty("contact")&&!Object(w.isEmpty)(a.contact)&&parseInt(a.contact)>0&&(o=a.contact),o?Object(n.createElement)(y.a,{href:"admin.php?page=autonami&path=/contact/"+o,type:"bwf-crm",className:"bwf-a-no-underline"},i):i):"-",value:t.sub},{display:t.o_interaction?(e=JSON.parse(t.o_interaction),r=e[e.length-1],Object(d.K)(r)):"-",value:""},{display:parseInt(t.open)>0?parseInt(t.open):"-",value:parseInt(t.open)},{display:parseInt(t.click)>0?parseInt(t.click):"-",value:parseInt(t.click)},{display:Object(n.createElement)(v.Button,{className:"bwf-w-60 bwf-display-flex",onClick:function(){_({ID:t.track_id,mode:1,type:4}),S({id:parseInt(t.cid)}),D(!0)}},Object(n.createElement)(g.a,{icon:"view"})),value:""}];var e,r,a,i,o}))),J),query:{paged:z},totalRows:$,rowsPerPage:K,isLoading:U,showMenu:!1,onPageChange:function(t,r){var n=(t-1)*K;N("offset",n);var a=e.hasOwnProperty("interval")?e.interval:"day";R(e,a,!0,K,n)},onQueryChange:function(t){return"per_page"===t?function(t){if(t!==K){N("limit",t);var r=e.hasOwnProperty("interval")?e.interval:"day";R(e,r,!0,t,Q)}}:function(){return{}}},emptyMessage:Object(i.__)("No emails found","wp-marketing-automations")}),Object(n.createElement)(E.a,{onRequestClose:function(){return D(!1)},conversation:m,contact:k,isOpen:P}))},k=r(72);e.default=function(){Object(a.a)("direct-emails",!1,"");var t=Object(u.i)();return Object(n.useEffect)((function(){Object(d.f)("Direct Email Analytics")}),[]),Object(n.createElement)(n.Fragment,null,Object(n.createElement)(k.a,null),Object(n.createElement)("div",{className:"bwf-crm-analytics-wrap bwf-crm-emails-report-wrap"},Object(n.createElement)(m,{query:t}),Object(n.createElement)("div",{className:"bwf_clear_10"}),Object(n.createElement)(T,{query:t})))}},832:function(t,e,r){"use strict";var n=r(135),a=r(257),i=Object(n.a)(a.b.cartAnalytics).getStateProp,o=Object(n.a)(a.b.contactAnalytics).getStateProp,c=Object(n.a)(a.b.emailAnalytics).getStateProp,l=Object(n.a)(a.b.emailTable).getStateProp,u=Object(n.a)(a.b.engagementAnalytics).getStateProp,s=Object(n.a)(a.b.directEmailTable).getStateProp,f={getCartAnalytics:function(){return i("data")},getCartAnalyticsLoading:function(){return i("isLoading")},getContactAnalytics:function(){return o("data")},getContactAnalyticsLoading:function(){return o("isLoading")},getEmailAnalytics:function(){return c("data")},getEmailAnalyticsLoading:function(){return c("isLoading")},getEmailTableList:function(){return l("data")},getEmailTableTotal:function(){return l("total")},getEmailTableOffset:function(){return l("offset")},getEmailTableLimit:function(){return l("limit")},getEmailTableLoading:function(){return l("isLoading")},getEmailTablePage:function(){return parseInt(l("offset"))/parseInt(l("limit"))+1},getEngagementAnalytics:function(){return u("data")},getEngagementAnalyticsLoading:function(){return u("isLoading")},getDirectEmailTableList:function(){return s("data")},getDirectEmailTableTotal:function(){return s("total")},getDirectEmailTableOffset:function(){return s("offset")},getDirectEmailTableLimit:function(){return s("limit")},getDirectEmailTableLoading:function(){return s("isLoading")},getDirectEmailTablePage:function(){return parseInt(s("offset"))/parseInt(s("limit"))+1}};e.a=f},843:function(t,e,r){"use strict";var n=r(134),a=r(5),i=r(257),o=r(17),c=function(t){var e=0;return"automation"===t?e=1:"broadcast"===t&&(e=2),e};e.a=function(){var t=Object(n.a)(i.b.cartAnalytics).fetch,e=Object(n.a)(i.b.contactAnalytics),r=e.fetch,l=e.setStateProp,u=Object(n.a)(i.b.emailAnalytics),s=u.fetch,f=u.setStateProp,p=Object(n.a)(i.b.emailTable),m=p.fetch,b=p.setStateProp,y=Object(n.a)(i.b.engagementAnalytics),h=y.fetch,d=y.setStateProp,g=Object(n.a)(i.b.directEmailTable),v=g.fetch,O=g.setStateProp;return{fetchCartAnalytics:function(e,r,n){t("GET",Object(a.k)("/analytics/carts/")+"?"+Object(o.stringify)({after:e,before:r,interval:n}))},fetchContactAnalytics:function(t,e,n){r("GET",Object(a.k)("/analytics/contacts/")+"?"+Object(o.stringify)({after:t,before:e,interval:n}))},fetchEmailAnalytics:function(t,e,r,n,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;s("GET",Object(a.k)("/analytics/emails/chart/")+"?"+Object(o.stringify)({after:t,before:e,interval:r,oid:n,type:c(i),mode:l}))},fetchEmailTable:function(t,e,r,n,i,l,u){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1;m("GET",Object(a.k)("/analytics/emails/tabular/")+"?"+Object(o.stringify)({after:r,before:n,interval:i,oid:l,type:c(u),limit:t,offset:e,mode:s}))},setEmailTableData:function(t,e){b(t,e)},fetchEngagementData:function(t,e){h("GET",Object(a.k)("/analytics/engagement")+"?"+Object(o.stringify)({after:t,before:e}))},setContactAnalyticsData:function(t,e){l(t,e)},setEmailAnalyticsData:function(t,e){f(t,e)},setEngagementData:function(t,e){d(t,e)},fetchDirectEmailTable:function(t,e,r,n,i){v("GET",Object(a.k)("/analytics/direct-emails/tabular/")+"?"+Object(o.stringify)({after:r,before:n,interval:i,limit:t,offset:e}))},setDirectEmailTableData:function(t,e){O(t,e)}}}},844:function(t,e,r){"use strict";var n=r(132),a=r(0);e.a=function(t,e,r){var i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},o=Object(n.a)(),c=o.setActiveMultiple,l=o.resetHeaderMenu,u=o.setL2NavType,s=o.setL2Nav,f=o.setBackLink,p=o.setL2Title,m=o.setPageHeader;return Object(a.useEffect)((function(){l(),!e&&u("menu"),!e&&s(i.reports_nav),c({leftNav:"analytics-"+t,rightNav:t+"-analytics"}),e&&f(e),r&&p(r),m("Analytics")}),[t,r]),!0}},865:function(t,e,r){"use strict";var n=r(0),a=r(2),i=r(12),o=r.n(i),c=r(5),l=r(265);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return k()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=w(o,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,o),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function m(){}function b(){}function y(){}var h={};c(h,a,(function(){return this}));var d=Object.getPrototypeOf,g=d&&d(d(T([])));g&&g!==e&&r.call(g,a)&&(h=g);var v=y.prototype=m.prototype=Object.create(h);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){var n;this._invoke=function(a,i){function o(){return new e((function(n,o){!function n(a,i,o,c){var l=f(t[a],t,i);if("throw"!==l.type){var s=l.arg,p=s.value;return p&&"object"==u(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(p).then((function(t){s.value=t,o(s)}),(function(t){return n("throw",t,o,c)}))}c(l.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return b.prototype=y,c(v,"constructor",y),c(y,"constructor",b),b.displayName=c(y,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,o,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},O(j.prototype),c(j.prototype,i,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new j(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(v),c(v,o,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function f(t,e,r,n,a,i,o){try{var c=t[i](o),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,a)}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(t){c=!0,a=t}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}e.a=function(t){var e=t.conversation,r=(e=void 0===e?{}:e).ID,i=e.mode,u=e.type,m=t.onRequestClose,b=t.isOpen,y=t.contact,h=void 0===y?{}:y,d=p(Object(n.useState)(null),2),g=d[0],v=d[1],O=p(Object(n.useState)(!1),2),j=O[0],w=O[1],E=p(Object(n.useState)(null),2),L=E[0],_=E[1],T=function(){var t,e=(t=s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&!(!parseInt(r)>0)){t.next=2;break}return t.abrupt("return");case 2:return w(!0),t.prev=3,t.next=6,o()({method:"GET",path:Object(c.k)("/contacts/".concat(h.id,"/engagement/").concat(parseInt(r),"?mode=1"))});case 6:"result"in(e=t.sent)&&v(e.result),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0),t.t0&&"message"in t.t0?_(t.t0.message):Object(a.__)("There are some technical difficulties while getting emails. Please contact support.","wp-marketing-automations");case 14:w(!1);case 15:case"end":return t.stop()}}),t,null,[[3,10]])})),function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){f(i,n,a,o,c,"next",t)}function c(t){f(i,n,a,o,c,"throw",t)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b&&T()}),[b]);return Object(n.createElement)(l.a,{isOpen:b,isLoading:j,onRequestClose:function(){m(),v(null),_(null)},error:L,subject:parseInt(i)<2&&g&&g.subject,body:g&&Object(n.createElement)("div",{dangerouslySetInnerHTML:{__html:g.body}}),sourceType:u,mode:i,contact:t.contact,conversation:t.conversation,template:g})}}}]);