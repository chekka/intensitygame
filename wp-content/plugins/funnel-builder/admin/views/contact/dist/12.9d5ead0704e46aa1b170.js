(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{367:function(e,t,n){"use strict";var r=n(67),a=n(35),o=n(0);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.icon,n=e.size,l=void 0===n?24:n,i=Object(a.a)(e,["icon","size"]);return Object(o.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:l,height:l},i))}},375:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n(6),o=n(9),c=n.n(o),l=n(62),i=n(5),u=["label","className","selected","help","onChange","hideLabelFromVision","options"];function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e){var t=e.label,n=e.className,o=e.selected,f=e.help,p=e.onChange,d=e.hideLabelFromVision,m=e.options,y=void 0===m?[]:m,O=(s(e,u),Object(l.useInstanceId)(b)),v="inspector-radio-control-".concat(O),j=function(e){return p(e.target.value)};return!Object(a.isEmpty)(y)&&Object(r.createElement)(i.BaseControl,{label:t,id:v,hideLabelFromVision:d,help:f,className:c()(n,"components-radio-control")},y.map((function(e,t){return Object(r.createElement)("div",{key:"".concat(v,"-").concat(t),className:"components-radio-control__option"},Object(r.createElement)("input",{id:"".concat(v,"-").concat(t),className:"components-radio-control__input",type:"radio",name:v,value:e.value,onChange:j,checked:e.value===o,"aria-describedby":f?"".concat(v,"__help"):void 0}),Object(r.createElement)("label",{htmlFor:"".concat(v,"-").concat(t)},e.label))})))}},409:function(e,t,n){},421:function(e,t,n){"use strict";var r=n(0),a=(n(13),n(3),n(5)),o=n(9),c=n.n(o),l=n(6);n(422);t.a=function(e){var t=e.menuItems,n=e.activeClass,o=void 0===n?"active-tab":n,i=e.activeTab,u=void 0===i?"":i,s=e.setActiveTab,b=void 0===s?l.noop:s;return Object(r.createElement)("div",{className:"wtfb-tab-item-wrapper"},t.map((function(e){return Object(r.createElement)("div",{className:c()("wtfb-tab-item",(t={},n=o,l=e.key===u,n in t?Object.defineProperty(t,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[n]=l,t)),key:e.key,onClick:function(t){return b(e.key)}},e.icon&&Object(r.createElement)(a.Icon,{icon:e.icon}),e.label);var t,n,l})))}},422:function(e,t,n){},423:function(e,t,n){},559:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n(5),o=n(367),c=n(64),l=Object(r.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(c.Path,{d:"M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"})),i=n(62),u=n(6),s=n(9),b=n.n(s),f=(n(423),["label","className","value","help","options","onBlur","onChange","onFocus"]);function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function d(e){var t=e.label,n=e.className,c=e.value,s=e.help,m=e.options,y=void 0===m?[]:m,O=e.onBlur,v=(void 0===O&&u.noop,e.onChange),j=void 0===v?u.noop:v,g=e.onFocus;void 0===g&&u.noop,p(e,f);if(Object(u.isEmpty)(y))return null;var h=Object(i.useInstanceId)(d),E="inspector-checklist-".concat(h);c=null!=c&&c?c:[];var w=b()("components-checklist",n),_=function(e){!0===e.target.checked?c.includes(e.target.value)||c.push(e.target.value):c=c.filter((function(t){return t!==e.target.value})),j(c,{event:e})};return Object(r.createElement)(a.BaseControl,{label:t,className:w,id:E,help:s},Object(r.createElement)("div",{className:"component-checklist-wrap"},y.map((function(e,t){return Object(r.createElement)("div",{key:"".concat(E,"-").concat(t),className:"components-checklist__option"},Object(r.createElement)("span",{className:"components-checklist__input-container"},Object(r.createElement)("input",{id:"".concat(E,"-").concat(t),className:"components-checklist__input",type:"checkbox",value:e.value,onChange:_,checked:(n=c,a=e.value,!!Array.isArray(n)&&n.includes(a)),"aria-describedby":s?"".concat(E,"__help"):void 0}),c.includes(e.value)?Object(r.createElement)(o.a,{icon:l,className:"components-checklist__checked",role:"presentation"}):null),Object(r.createElement)("label",{htmlFor:"".concat(E,"-").concat(t)},e.label));var n,a}))))}},886:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(3),o=n(135),c=n(5),l=n(421),i=n(6),u=n(9),s=n.n(u),b=n(15),f=n.n(b),p=n(8),d=n(78),m=n(244),y=n(559),O=["label","checkboxlabel"];function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=n(160),h=["ajax_cb","options"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S=n(10),x=function(e){var t=e.label,n=e.copy_text;return Object(r.createElement)("div",{className:s()("components-copier")},t&&Object(r.createElement)("label",{className:"components-label"},t),n&&Object(r.createElement)("div",{className:"bwf-display-flex"},Object(r.createElement)("span",{className:"bwf-copier-text"},n," "),Object(r.createElement)(c.Button,{className:"bwf-copier-icon",isSecondary:!0,onClick:function(){return e=n,(t=document.createElement("textarea")).value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),void document.body.removeChild(t);var e,t}},Object(r.createElement)(S.a,{icon:"duplicate",size:20}),"Copy")))},P=n(375);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T={checkbox:function(e){var t=e.label,n=e.checkboxlabel,a=j(e,O);return Object(r.createElement)(c.CheckboxControl,v({heading:t,label:n},a))},radio:P.a,select:g.a,textarea:c.TextareaControl,text:c.TextControl,input:c.TextControl,checklist:y.a,ajax:function(e){var t=e.ajax_cb,n=e.options,a=void 0===n?[]:n,o=k(e,h),c=w(Object(r.useState)(a),2),l=c[0],u=c[1],s=w(Object(r.useState)(!1),2),b=s[0],f=s[1];Object(r.useEffect)((function(){Object(i.isEmpty)(l)&&p()}),[l]);var p=function(){return new Promise((function(e){jQuery.ajax({type:"POST",url:ajaxurl,data:{action:t,dataType:"json",contentType:"application/json"},success:function(e){var t=Array.isArray(e.results)?e.results:[];t=t.map((function(e){return"object"!==e.value&&(e.key||"object"===e.value||(e.key=e.value),e.value={id:e.value}),e})),u(t),f(!0)}})}))};return Object(r.createElement)(r.Fragment,null,b?Object(r.createElement)(g.a,E({options:l},o)):Object(r.createElement)("div",{className:"setting-form-field"},Object(r.createElement)("div",{className:"is-placeholder long"})))},copier:x},D=function(e){var t=e.input,n=e.formProps,a=e.values,o=T.text;if(t.type.toLowerCase()in T&&(o=T[t.type.toLowerCase()]),t.ajax_cb&&(o=T.ajax),"select"===t.type&&t.multiple&&!Object(i.isEmpty)(a)){var l=a[t.id];if(Object(i.isEmpty)(l))a[t.id]=[];else if(!Object(i.isEmpty)(t.options)&&"string"==typeof l[0]){var u=[];t.options.forEach((function(e){if(void 0===e.key)if("string"==typeof e.value&&l.includes(e.value)){var t={};t.key=e.value,t.label=e.label,t.value={id:e.value},u.push(t)}else if("string"==typeof e.value.id&&l.includes(e.value.id)){var n={};n.key=e.value,n.label=e.label,n.value={id:e.value},u.push(n)}})),a[t.id]=u}}var b,f;return Object(r.createElement)("div",{className:s()("form-group",t.class,"text"!==t.type&&"field--"+t.type,{"inline-group":!t.label})},"disabled"===t.type?Object(r.createElement)(c.TextControl,{disabled:!0,value:t.value,label:t.label}):Object(r.createElement)(o,C(C({label:t.label},(b=t,f=Object.assign({},b.props),b.type.toLowerCase()in T||(f.type=b.type.toLowerCase()),f.placeholder=b.placeholder,f.options=b.options,b.checkboxlabel&&(f.checkboxlabel=b.checkboxlabel),b.multiple&&(f.multiple=b.multiple),b.ajax_cb&&(f.ajax_cb=b.ajax_cb),"copier"===b.type&&(f=b),"select"===b.type&&(f.excludeSelectedOptions=!1,f.options&&(f.options=f.options.map((function(e){return"object"!==A(e.value)&&(e.key="object"!==A(e.value)?e.value:e.key,e.value={id:e.value}),e}))),b.multiple&&(f.excludeSelectedOptions=!0,f.inlineTags=!0)),"richeditor"===b.type&&(f.id=b.id),"text"===b.type&&b.disabled&&(f.disabled=b.disabled),f)),n)),t.hint&&Object(r.createElement)("div",{className:"hint",dangerouslySetInnerHTML:{__html:t.hint}}))},F=["override_tracking_ids"];function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=function(e){var t=M(Object(r.useState)(!1),2),n=t[0],o=t[1],l=e.funnelID,u=void 0===l?0:l,b=e.validationNotice,y=Object(r.useContext)(p.a),O=M(Object(r.useState)(!1),2),v=O[0],j=O[1],g=M(Object(r.useState)(!0),2),h=g[0],E=g[1],w=M(Object(r.useState)({}),2),_=w[0],k=w[1],x=wffn.settings_texts.override_tracking_ids,N=void 0===x?[]:x,C=Object(r.useRef)(new AbortController);Object(r.useEffect)((function(){return I(),function(){C.current.abort()}}),[]);var I=function(){try{f()({path:"/woofunnels-admin/funnels/".concat(u,"/settings"),method:"GET",signal:C.current.signal}).then((function(e){k(e),E(!1)})).catch((function(e){"AbortError"===e.name?console.log(e):E(!1)}))}catch(e){console.log(e),E(!1)}};N=N.map((function(e){return e.id||(e.id=e.key),!e.label&&e.text&&""!=e.text&&(e.label=e.text),e.type||(e.type="text"),e}));return Object(r.createElement)(r.Fragment,null,!Object(p.t)()&&Object(r.createElement)("span",{style:{marginRight:5,float:"left",cursor:"pointer"},onClick:function(){j(!0)}},Object(r.createElement)(S.a,{icon:"lock",size:"20"})),Object(r.createElement)("h2",{className:"tab--title"},Object(a.__)("Tracking IDs","funnel-builder")),Object(r.createElement)("p",{className:"description"},Object(a.__)("Use this setting to override the global tracking IDs for this funnel","funnel-builder")),Object(r.createElement)(m.a,{isOpen:v,onRequestClose:function(){return j(!1)},modalContent:{title:Object(a.__)("Overriding Tracking IDs is a Pro feature","funnel-builder"),feature:Object(a.__)("Overriding Tracking IDs","funnel-builder"),proLink:Object(p.o)(["Tracking","ID","Upgrade","Modal"])}}),h?Object(r.createElement)("div",null,Object(r.createElement)("br",null),Object(r.createElement)("span",{className:"wffn-is-placeholder"}),Object(r.createElement)("br",null),Object(r.createElement)("span",{className:"wffn-is-placeholder small-strip"})):Object(r.createElement)(d.a,{onSubmitCallback:function(e){Object(p.t)()?function(e){o(!0),b("");try{f()({path:"/woofunnels-admin/funnels/".concat(u,"/settings"),method:"POST",data:{settings:JSON.stringify(e)}}).then((function(e){e.success?y(Object(a.__)("Setting Saved","funnel-builder")):y(e.msg),o(!1),Object(i.delay)(y,5e3,"")}))}catch(e){console.log(e),y(Object(a.__)("There are some technical difficulties while updating settings. Contact Support","funnel-builder")),o(!1),Object(i.delay)(y,5e3,"")}}(e):j(!0)},initialValues:_,validate:function(e){var t={};if(e.override_tracking_ids){e.override_tracking_ids;var n=B(e,F);Object.values(n).every((function(e){return""===e}))&&(t.fields=Object(a.__)("Error: Please add at least one Tracking ID to override Global Settings.","funnel-builder"))}return t}},(function(e){var t=e.getInputProps,o=e.values,l=e.errors,i=e.handleSubmit;return Object(r.createElement)("div",{className:s()("wtfb-tab-form squeezy--wrapper",{"funnel-lite-form":!Object(p.t)()})},o.override_tracking_ids="true"===o.override_tracking_ids||"false"!==o.override_tracking_ids&&o.override_tracking_ids,Object(r.createElement)("div",{className:"form-group"},Object(r.createElement)(P.a,L({label:Object(a.__)("Override Tracking IDs","funnel-builder"),options:[{label:Object(a.__)("Yes","funnel-builder"),value:!0},{label:Object(a.__)("No","funnel-builder"),value:!1}]},t("override_tracking_ids")))),o.override_tracking_ids&&Object(p.t)()&&N.map((function(e){return Object(r.createElement)(r.Fragment,{key:e.id},!e.toggler||function(e,t){try{var n,r=!1;if(!e[t.key])return r;if(n=e[t.key],Array.isArray(t.value)&&Array.isArray(n)){for(var a=0;a<n.length;a++)if(t.value.indexOf(n[a])>-1){r=!0;break}}else n==t.value&&(r=!0)}catch(e){console.log(e),r=!1}return r}(o,e.toggler)?Object(r.createElement)(D,{input:e,formProps:t(e.id),values:o}):null)})),Object(p.t)()&&Object(r.createElement)(c.Button,{isPrimary:!0,onClick:Object.keys(l).length?function(){b(l)}:i,disabled:n,isBusy:n},n?Object(a.__)("Saving","funnel-builder")+"...":Object(a.__)("Save Changes","funnel-builder")))})))};n(409);function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(e){var t=Object(o.d)(),n=t.tabId,i=t.id,u=e.funnelId,s=void 0===u?i:u,b=G(Object(r.useState)(""),2),f=b[0],p=b[1];return Object(r.createElement)(r.Fragment,null,f&&Object(r.createElement)(c.Notice,{status:"error",className:"bwf_components_notice",isDismissible:!1},Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:f}})),Object(r.createElement)("div",{className:"wtfb-widget-tabs"},Object(r.createElement)(l.a,{menuItems:[{key:"general",label:Object(a.__)("Tracking IDs","funnel-builder")}],activeTab:"general"}),Object(r.createElement)("div",{className:"wtfb-tab-content-wrapper"},(null==n||"tracking-ids"===n)&&Object(r.createElement)(V,{funnelID:s,validationNotice:function(e){if(e){var t="";"object"==U(e)&&Object.values(e).forEach((function(e){t+="<p>"+e+"</p>"})),p(t),jQuery("#wpbody").length&&jQuery("#wpbody")[0].scrollIntoView()}else p("")}}))))}}}]);