this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks.blocks=function(e){function t(t){for(var n,i,a=t[0],l=t[1],u=t[2],d=0,f=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);f.length;)f.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={4:0,39:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;return c.push([54,1,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.components},11:function(e,t){e.exports=window.wp.apiFetch},12:function(e,t){e.exports=window.wp.url},15:function(e,t){e.exports=window.wp.blocks},2:function(e,t){e.exports=window.lodash},28:function(e,t){e.exports=window.wp.domReady},3:function(e,t){e.exports=window.wp.blockEditor},37:function(e,t){e.exports=window.wp.hooks},4:function(e,t){e.exports=window.wp.i18n},54:function(e,t,r){"use strict";r.r(t);var n=r(18),o=r.n(n),c=r(15),i=r(6),a=r(28),l=r.n(a),u=r(4),s=r(8),d=r(7),f=r(37),b=r(2);r(55);function p(e){var t=e.length;e.map((function(e){"storeabill/footer"===e.name&&(0,Object(i.dispatch)("core/block-editor").moveBlockToPosition)(e.clientId,"","",t)}))}l()((function(){setTimeout((function(){if(Object(s.isDocumentTemplate)()){var e=Object(s.getDocumentStylesBlock)();if(e)jQuery("body").find(".sab-block-hider").remove(),jQuery("body").append('<style type="text/css" class="sab-block-hider">tr#block-navigation-block-'+e.clientId+" { display: none !important }</style>");else{var t=Object(c.createBlock)("storeabill/document-styles",{});Object(i.dispatch)("core/block-editor").insertBlock(t,null,"",!1),jQuery("body").find(".sab-block-hider").remove(),jQuery("body").append('<style type="text/css" class="sab-block-hider">tr#block-navigation-block-'+t.clientId+" { display: none !important }</style>")}var r=Object(i.select)("core/block-editor").getBlocks,n=r();p(n);Object(i.subscribe)((function(){var e=r();e.length!==n.length&&(n=e,p(e))}));var o=jQuery(".document-shortcode-needs-refresh");o.length>0&&o.each((function(){var e=jQuery(this);e.hide();var t=e.data("shortcode");Object(s.getShortcodePreview)(e.data("shortcode")).then((function(r){var n=r.content,o=r.shortcode,c=e.parents(".wp-block").data("block"),a=Object(i.select)("core/block-editor").getBlockAttributes(c);if(a.length>0)for(var l=0,u=Object.keys(a);l<u.length;l++){var s=u[l],f=a[s];("string"==typeof f||f instanceof String)&&f.includes(t)&&(f=Object(d.f)(f,Object(b.isEmpty)(n)?o:n,t,!0),a[s]=f,Object(i.dispatch)("core/block-editor").updateBlockAttributes(c,{key:f}))}e.show()}))}))}}),0)}));var g=["storeabill/header","storeabill/footer","storeabill/document-styles"];Object(f.addFilter)("blocks.registerBlockType","storeabill/show-hide-blocks",(function(e,t){return!Object(s.getSetting)("isFirstPage")||-1!==g.indexOf(t)||e.hasOwnProperty("parent")&&e.parent.toString()!==["core/post-content"].toString()?e:Object.assign({},e,{parent:["storeabill/header","storeabill/footer","core/column"]})})),Object(c.setCategories)([].concat(o()(Object(c.getCategories)().filter((function(e){return"storeabill"!==e.slug}))),[{slug:"storeabill",title:Object(u._x)("StoreaBill","storeabill-core","woocommerce-germanized-pro")}]))},55:function(e,t,r){},6:function(e,t){e.exports=window.wp.data},7:function(e,t,r){"use strict";var n=r(2),o=r(3),c=r(18),i=r.n(c),a=r(17),l=r.n(a),u=r(5),s=r.n(u),d=r(0),f=r(20),b=r.n(f),p=r(9),g=r.n(p),h=r(4),v=r(6),y=r(13),m=r.n(y),O=r(16),j=r.n(O),w=["backgroundColor","textColor"],k=function(e,t,r){return"function"==typeof e?e(t):!0===e?r:e};function T(e){var t=e.title,r=e.colorSettings,c=e.colorPanelProps,i=e.contrastCheckers,a=e.detectedBackgroundColor,l=e.detectedColor,u=e.panelChildren,s=e.initialOpen;return Object(d.createElement)(o.PanelColorSettings,m()({title:t,initialOpen:s,colorSettings:Object.values(r)},c),i&&(Array.isArray(i)?i.map((function(e){var t=e.backgroundColor,n=e.textColor,c=j()(e,w);return t=k(t,r,a),n=k(n,r,l),Object(d.createElement)(o.ContrastChecker,m()({key:"".concat(t,"-").concat(n),backgroundColor:t,textColor:n},c))})):Object(n.map)(r,(function(e){var t=e.value,n=i.backgroundColor,c=i.textColor;return n=k(n||t,r,a),c=k(c||t,r,l),Object(d.createElement)(o.ContrastChecker,m()({},i,{key:"".concat(n,"-").concat(c),backgroundColor:n,textColor:c}))}))),"function"==typeof u?u(r):u)}function C(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw c}}}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e){return e.ownerDocument.defaultView.getComputedStyle(e)}var E=[],B={textColor:Object(h.__)("Text color"),backgroundColor:Object(h.__)("Background color")},A=function(e){return Object(d.createElement)(o.InspectorControls,null,Object(d.createElement)(T,e))};r.d(t,"g",(function(){return D})),r.d(t,"b",(function(){return N})),r.d(t,"a",(function(){return M})),r.d(t,"c",(function(){return I})),r.d(t,"e",(function(){return F})),r.d(t,"d",(function(){return L})),r.d(t,"f",(function(){return Q}));var D=void 0===o.__experimentalUseColors?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{panelTitle:Object(h.__)("Color")},r=t.panelTitle,c=void 0===r?Object(h.__)("Color"):r,a=t.colorPanelProps,u=t.contrastCheckers,f=t.panelChildren,p=t.colorDetector,y=(p=void 0===p?{}:p).targetRef,m=p.backgroundColorTargetRef,O=void 0===m?y:m,j=p.textColorTargetRef,w=void 0===j?y:j,k=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],P=Object(o.useBlockEditContext)(),_=P.clientId,D=Object(o.useSetting)("color.palette")||E,N=Object(v.useSelect)((function(e){return{attributes:(0,e(o.store).getBlockAttributes)(_)}}),[_]),M=N.attributes,I=Object(v.useDispatch)(o.store),F=I.updateBlockAttributes,L=Object(d.useCallback)((function(e){return F(_,e)}),[F,_]),Q=Object(d.useMemo)((function(){return b()((function(e,t,r,o,c,i){return function(a){var l,u=a.children,f=a.className,b=void 0===f?"":f,p=a.style,h=void 0===p?{}:p,v={};o?v=s()({},t,c):i&&(v=s()({},t,i));var y={className:g()(b,(l={},s()(l,"has-".concat(Object(n.kebabCase)(o),"-").concat(Object(n.kebabCase)(t)),o),s()(l,r||"has-".concat(Object(n.kebabCase)(e)),o||i),l)),style:S(S({},v),h)};return Object(n.isFunction)(u)?u(y):d.Children.map(u,(function(e){return Object(d.cloneElement)(e,{className:g()(e.props.className,y.className),style:S(S({},y.style),e.props.style||{})})}))}}),{maxSize:e.length})}),[e.length]),R=Object(d.useMemo)((function(){return b()((function(e,t){return function(r){var o=t.find((function(e){return e.color===r}));L(s()({},o?Object(n.camelCase)("custom ".concat(e)):e,void 0)),L(s()({},o?e:Object(n.camelCase)("custom ".concat(e)),o?o.slug:r))}}),{maxSize:e.length})}),[L,e.length]),z=Object(d.useState)(),Y=l()(z,2),H=Y[0],U=Y[1],$=Object(d.useState)(),q=l()($,2),J=q[0],K=q[1];return Object(d.useEffect)((function(){if(u){var e,t=!1,r=!1,o=C(Object(n.castArray)(u));try{for(o.s();!(e=o.n()).done;){var c=e.value,i=c.backgroundColor,a=c.textColor;if(t||(t=!0===i),r||(r=!0===a),t&&r)break}}catch(e){o.e(e)}finally{o.f()}if(r&&K(x(w.current).color),t){for(var l=O.current,s=x(l).backgroundColor;"rgba(0, 0, 0, 0)"===s&&l.parentNode&&l.parentNode.nodeType===l.parentNode.ELEMENT_NODE;)s=x(l=l.parentNode).backgroundColor;U(s)}}}),[e.reduce((function(e,t){return"".concat(e," | ").concat(M[t.name]," | ").concat(M[Object(n.camelCase)("custom ".concat(t.name))])}),"")].concat(i()(k))),Object(d.useMemo)((function(){var t={},r=e.reduce((function(e,r){"string"==typeof r&&(r={name:r});var o=S(S({},r),{},{color:M[r.name]}),c=o.name,i=o.property,a=void 0===i?c:i,l=o.className,u=o.panelLabel,s=void 0===u?r.label||B[c]||Object(n.startCase)(c):u,d=o.componentName,f=void 0===d?Object(n.startCase)(c).replace(/\s/g,""):d,b=o.color,p=void 0===b?r.color:b,g=o.colors,h=void 0===g?D:g,v=M[Object(n.camelCase)("custom ".concat(c))],y=v?void 0:h.find((function(e){return e.slug===p}));return e[f]=Q(c,a,l,p,y&&y.color,v),e[f].displayName=f,e[f].color=v||y&&y.color,e[f].slug=p,e[f].setColor=R(c,h),t[f]={value:y?y.color:M[Object(n.camelCase)("custom ".concat(c))],onChange:e[f].setColor,label:s,colors:h},h||delete t[f].colors,e}),{}),o={title:c,initialOpen:!1,colorSettings:t,colorPanelProps:a,contrastCheckers:u,detectedBackgroundColor:H,detectedColor:J,panelChildren:f};return S(S({},r),{},{ColorPanel:Object(d.createElement)(T,o),InspectorControlsColorPanel:Object(d.createElement)(A,o)})}),[M,L,J,H].concat(i()(k)))}:o.__experimentalUseColors;function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<span class="placeholder-content '+(Object(n.isEmpty)(t)?"":"sab-tooltip")+'" contenteditable="false" '+(Object(n.isEmpty)(t)?"":'data-tooltip="'+t+'"')+'><span class="editor-placeholder"></span>'+e+"</span>"}function M(e){return"string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e)),e}function I(e){var t,r=e;return e&&e.hasOwnProperty("size")&&(r=e.size),r?(t=r,isNaN(parseFloat(t))||isNaN(t-0)?r:r+"px"):void 0}function F(e,t,r,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return e&&Object(n.includes)(e,r)||(e=Object(n.includes)(e,"{default}")?e.replace("{default}",o||N(r,c)):o||N(r,c)),e.replace(r,t)}function L(e,t,r){return e.replace(r,t)}function Q(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"placeholder-content",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=(new DOMParser).parseFromString(e,"text/html"),c=!1;if((c=n?o.querySelectorAll("[data-shortcode='"+r+"']"):o.getElementsByClassName(r)).length>0){var i=c[0].getElementsByClassName("editor-placeholder");if(i.length>0){for(var a=i[0].nextSibling,l=[];a;)a!==i[0]&&l.push(a),a=a.nextSibling;l.forEach((function(e){i[0].parentNode.removeChild(e)})),i[0].insertAdjacentHTML("afterEnd",t)}else c[0].innerHTML='<span class="editor-placeholder"></span>'+t;c[0].classList.remove("document-shortcode-needs-refresh"),e=o.body.innerHTML}return e}},8:function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),c=r(21);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l="object"===("undefined"==typeof sabSettings?"undefined":r.n(c)()(sabSettings))?sabSettings:{},u=a(a({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),l);function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},n=u.hasOwnProperty(e)?u[e]:t;return r(n,t)}var d=r(4),f=u.itemTotalTypes,b=u.itemMetaTypes,p=u.itemTableBlockTypes,g=u.discountTotalTypes,h=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],v=r(6),y=r(2),m=r(11),O=r.n(m),j=r(12);r(1);function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};u[e]=r(t)}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return b.hasOwnProperty(e)?b[e]:[]}function T(e,t){Array.isArray(t)||(t=[t]);var r=Object(v.select)("core/block-editor").getBlockParents(e);if(r.length>0){var n=Object(v.select)("core/block-editor").getBlock(r[0]);if(Object(y.includes)(t,n.name))return!0}return!1}function C(e){var t=s("supports");return Object(y.includes)(t,e)}function P(e){var t=s("defaultInnerBlocks");return t.hasOwnProperty(e)?t[e]:[]}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",r=k(t),n=r.filter((function(t){if(e===t.type)return!0})),o=n.length>0?n[0].preview:"",c=x(t),i=c.meta_data.filter((function(t){if(e===t.key)return!0}));return i.length>0?i[0].value:o}function S(){return s("preview",{})}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";e=""===e?"product":e;var t=S();return t[e+"_items"][0]}function E(e){var t=f.filter((function(t){if(e===t.type)return!0}));return t&&t[0]?t[0].default:""}function B(e){var t=f.filter((function(t){if(e===t.type)return!0}));return t&&t[0]?t[0].title:""}function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=S(),n=r.totals,o=n.filter((function(t){return t.type===e}));return o.length>0?t?o[0].total_formatted:o[0].total:0}function D(){var e=S().tax_items;return e.length>0?e[0].rate.percent:"{rate}"}function N(){return S().formatted_discount_notice}function M(){var e=S().voucher_items;return e.length>0?e[0].code:"{code}"}function I(){var e=S().fee_items;return e.length>0?e[0].name:"{name}"}function F(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",n={top:e.top?e.top:t.top,left:e.left?e.left:t.left,right:e.right?e.right:t.right,bottom:e.bottom?e.bottom:t.bottom};if("edit"===r){var o=s("marginTypesSupported"),c={};return o.forEach((function(e){c[e]=n[e]})),c}return n}function L(){return"document_template"===Object(v.select)("core/editor").getCurrentPostType()}function Q(){return s("allowedBlockTypes")}function R(){var e=void 0,t=(0,Object(v.select)("core/block-editor").getBlocks)().filter((function(e){if("storeabill/document-styles"===e.name)return e}));return t.length>0&&(e=t[0]),e}function z(){return s("fonts")}function Y(e){var t=z().filter((function(t){if(t.name===e)return!0}));if(!Object(y.isEmpty)(t))return t[0]}function H(){var e=(0,Object(v.select)("core/editor").getEditedPostAttribute)("meta");return e._fonts?e._fonts:void 0}function U(e){e=e||H();var t=Object(j.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:e,display_types:s("fontDisplayTypes")});return O()({path:t})}function $(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=e;return"before_discounts"===r&&(n+="_subtotal",Object(y.includes)(e,"total")&&(n=e.replace("total","")),"total"===e?n="subtotal":"total_tax"===e&&(n="subtotal_tax")),!1!==t||Object(y.includes)(e,"_tax")||(Object(y.includes)(e,"_total")&&(n=n.replace("_total","")),n+="_net"),n+"_formatted"}function q(e){var t="";return"document"===e?t=Object(d._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===e?t=Object(d._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===e?t=Object(d._x)("Document Total","storeabill-core","woocommerce-germanized-pro"):"setting"===e&&(t=Object(d._x)("Settings","storeabill-core","woocommerce-germanized-pro")),t}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=s("shortcodes"),o=Object.entries(n),c=["blocks","setting","document"],i={};o.forEach((function(n,o){var a=n[0];if((!(e.length>0&&e!==a)||Object(y.includes)(c,a))&&("blocks"!==a||0!==t.length)){var l=[],u=q(a);if(Object(y.isArray)(n[1]))l=n[1].flat();else if(t.length>0){l=n[1].hasOwnProperty(t)?n[1][t]:[];var s=Object(v.select)("core/blocks").getBlockType(t);u=s?s.title:t}i.hasOwnProperty(a)||(i[a]={label:u,value:a,children:{}}),l.map((function(e){if(!i[a].children.hasOwnProperty(e.shortcode)){if(!r&&e.hasOwnProperty("headerFooterOnly")&&e.headerFooterOnly)return;i[a].children[e.shortcode]={value:e.shortcode,label:e.title}}}))}}));var a=[];return Object.entries(i).map((function(e){var t=Object.values(e[1].children).flat();Object(y.isEmpty)(t)||a.push({value:e[1].value,label:e[1].label,children:t})})),a}function K(e){var t=s("shortcodes"),r=Object.entries(t),n={};return r.forEach((function(e,t){(Object(y.isArray)(e[1])?e[1].flat():Object.values(e[1]).flat()).map((function(e){n.hasOwnProperty(e.shortcode)||(n[e.shortcode]=e)}))})),!!n.hasOwnProperty(e)&&n[e]}function V(e){var t=K(e);return t?t.title:""}function G(){return s("dateTypes")}function W(){return s("barcodeTypes")}function X(){return s("barcodeCodeTypes")}function Z(e){var t=s("dateTypes"),r=Object(d._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(t).map((function(t){t[0]===e&&(r=t[1])})),r}function ee(e){try{e=parseFloat(e),"invoice_cancellation"===s("documentType")&&(e*=-1);var t=s("priceFormat").decimals,r=s("priceFormat").decimal_separator,n=s("priceFormat").thousand_separator,o=s("priceFormat").currency,c=s("priceFormat").format;t=Math.abs(t),t=isNaN(t)?2:t;var i=e<0?"-":"",a=parseInt(e=Math.abs(Number(e)||0).toFixed(t)).toString(),l=a.length>3?a.length%3:0,u=i+(l?a.substr(0,l)+n:"")+a.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+n)+(t?r+Math.abs(e-a).toFixed(t).slice(2):"");return c.replace("%s",o).replace("%v",u)}catch(t){return e}}function te(e){var t=Object(j.addQueryArgs)("/sab/v1/preview_shortcodes",{query:e,document_type:s("documentType")});return O()({path:t})}r.d(t,"getItemMetaTypes",(function(){return k})),r.d(t,"blockHasParent",(function(){return T})),r.d(t,"documentTypeSupports",(function(){return C})),r.d(t,"getDefaultInnerBlocks",(function(){return P})),r.d(t,"getItemMetaTypePreview",(function(){return _})),r.d(t,"getPreview",(function(){return S})),r.d(t,"getPreviewItem",(function(){return x})),r.d(t,"getItemTotalTypeDefaultTitle",(function(){return E})),r.d(t,"getItemTotalTypeTitle",(function(){return B})),r.d(t,"getPreviewTotal",(function(){return A})),r.d(t,"getPreviewTaxRate",(function(){return D})),r.d(t,"getPreviewDiscountNotice",(function(){return N})),r.d(t,"getPreviewVoucherNotice",(function(){return M})),r.d(t,"getPreviewFeeName",(function(){return I})),r.d(t,"formatMargins",(function(){return F})),r.d(t,"isDocumentTemplate",(function(){return L})),r.d(t,"getAllowedBlockTypes",(function(){return Q})),r.d(t,"getDocumentStylesBlock",(function(){return R})),r.d(t,"getFonts",(function(){return z})),r.d(t,"getFont",(function(){return Y})),r.d(t,"getCurrentFonts",(function(){return H})),r.d(t,"getFontsCSS",(function(){return U})),r.d(t,"getItemTotalKey",(function(){return $})),r.d(t,"getShortcodeCategoryTitle",(function(){return q})),r.d(t,"getAvailableShortcodeTree",(function(){return J})),r.d(t,"getShortcodeData",(function(){return K})),r.d(t,"getShortcodeTitle",(function(){return V})),r.d(t,"getDateTypes",(function(){return G})),r.d(t,"getBarcodeTypes",(function(){return W})),r.d(t,"getBarcodeCodeTypes",(function(){return X})),r.d(t,"getDateTypeTitle",(function(){return Z})),r.d(t,"formatPrice",(function(){return ee})),r.d(t,"getShortcodePreview",(function(){return te})),r.d(t,"ITEM_TOTAL_TYPES",(function(){return f})),r.d(t,"ITEM_META_TYPES",(function(){return b})),r.d(t,"ITEM_TABLE_BLOCK_TYPES",(function(){return p})),r.d(t,"DISCOUNT_TOTAL_TYPES",(function(){return g})),r.d(t,"FORMAT_TYPES",(function(){return h})),r.d(t,"setSetting",(function(){return w})),r.d(t,"getSetting",(function(){return s}))}});