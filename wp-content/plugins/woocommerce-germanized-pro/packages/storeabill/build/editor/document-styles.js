this.sab=this.sab||{},this.sab.blocks=this.sab.blocks||{},this.sab.blocks["document-styles"]=function(t){function e(e){for(var r,i,a=e[0],s=e[1],u=e[2],f=0,d=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(l&&l(e);d.length;)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={10:0,39:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackStoreaBillJsonp=window.webpackStoreaBillJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;return c.push([109,1,0]),n()}({0:function(t,e){t.exports=window.wp.element},1:function(t,e){t.exports=window.wp.components},109:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(15),c=n(32),i=n.n(c),a=n(33),s=n.n(a),u=n(34),l=n.n(u),f=n(35),d=n.n(f),p=n(27),b=n.n(p),g=n(19),h=n(6),m=n(2),y=n(0),v=n(8),O=n(7);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b()(t);if(e){var o=b()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d()(this,n)}}var S=function(t){l()(n,t);var e=j(n);function n(){var t;return i()(this,n),(t=e.apply(this,arguments)).state={fontsFacetsCSS:"",fontsInlineCSS:""},t}return s()(n,[{key:"componentDidMount",value:function(){this.updateFontsCSS(),this.applyWrapperStyles()}},{key:"updateFontsCSS",value:function(){var t=this;Object(m.isEmpty)(this.props.fonts)||Object(v.getSetting)("isFirstPage")?this.setState({fontsFacetsCSS:"",fontsInlineCSS:""}):Object(v.getFontsCSS)(this.props.fonts).then((function(e){t.setState({fontsFacetsCSS:e.facets,fontsInlineCSS:e.inline})})).catch((function(){t.setState({fontsFacetsCSS:"",fontsInlineCSS:""})}))}},{key:"componentDidUpdate",value:function(t,e){Object(m.isEqual)(this.props.fonts,t.fonts)||this.updateFontsCSS(),this.state.fontsFacetsCSS!==e.fontsFacetsCSS&&this.addFonts(),Object(m.isEqual)(this.props.fonts,t.fonts)&&Object(m.isEqual)(this.props.pdfAttachment,t.pdfAttachment)&&Object(m.isEqual)(this.props.margins,t.margins)&&Object(m.isEqual)(this.props.fontSize,t.fontSize)&&Object(m.isEqual)(this.props.color,t.color)||this.applyWrapperStyles()}},{key:"addFonts",value:function(){var t=this.state,e=t.fontsFacetsCSS,n=t.fontsInlineCSS;jQuery("style#sab-block-editor-inline-css")<=0&&jQuery('<style id="sab-block-editor-inline-css">').appendTo("head");var r=jQuery("style#sab-block-editor-inline-css");r.html().trim()!==e&&r.html(e),jQuery("body").find(".sab-font-inline").remove(),jQuery("body").append('<style type="text/css" class="sab-font-inline">'+n+"</style>")}},{key:"getAttachmentThumb",value:function(t,e,n){return Object(m.get)(t,["media_details","sizes",e,n])}},{key:"applyWrapperStyles",value:function(){var t=jQuery(".editor-styles-wrapper").find(".block-editor-block-list__layout:first"),e=this.props,n=e.pdfAttachment,r=e.margins,o=(e.fonts,e.fontSize),c=e.color;o&&t.css("font-size",Object(O.c)(o)),c&&t.css("color",c),Object(v.getSetting)("isFirstPage")&&t.addClass("sab-is-first-page");var i=!1;if(n){var a=this.getAttachmentThumb(n,"full","source_url");a&&(t.css("background-image","linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url("+a+")"),t.addClass("has-background-image"),i=!0)}i||(t.css("background-image","none"),t.removeClass("has-background-image")),t.css("padding-left",r.left+"cm"),t.css("padding-right",r.right+"cm"),t.css("padding-top",r.top+"cm"),t.css("padding-bottom",r.bottom+"cm")}},{key:"render",value:function(){return null}}]),n}(y.Component),C=Object(g.compose)(Object(h.withSelect)((function(t,e){e.attributes;var n=t("core").getMedia,r=(0,t("core/editor").getEditedPostAttribute)("meta"),o=r._pdf_template_id,c=r._margins,i=Object(v.getSetting)("defaultMargins"),a=r._font_size,s=Object(v.getSetting)("defaultFontSize"),u=r._color,l=Object(v.getSetting)("defaultColor"),f=Object(v.getCurrentFonts)(),d=Object(v.formatMargins)(c,i);return{pdfAttachment:o?n(o):null,margins:d,fonts:f,fontSize:a||s,color:u||l}})))(S),w=(n(72),{title:Object(r._x)("Document Styles","storeabill-core","woocommerce-germanized-pro"),description:Object(r._x)("Watches for changes within the document and adjusts preview styles.","storeabill-core","woocommerce-germanized-pro"),category:"storeabill",supports:{html:!1,inserter:!1},example:{},attributes:{},edit:C});Object(o.registerBlockType)("storeabill/document-styles",w)},11:function(t,e){t.exports=window.wp.apiFetch},12:function(t,e){t.exports=window.wp.url},15:function(t,e){t.exports=window.wp.blocks},19:function(t,e){t.exports=window.wp.compose},2:function(t,e){t.exports=window.lodash},3:function(t,e){t.exports=window.wp.blockEditor},4:function(t,e){t.exports=window.wp.i18n},6:function(t,e){t.exports=window.wp.data},7:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(18),i=n.n(c),a=n(17),s=n.n(a),u=n(5),l=n.n(u),f=n(0),d=n(20),p=n.n(d),b=n(9),g=n.n(b),h=n(4),m=n(6),y=n(13),v=n.n(y),O=n(16),j=n.n(O),S=["backgroundColor","textColor"],C=function(t,e,n){return"function"==typeof t?t(e):!0===t?n:t};function w(t){var e=t.title,n=t.colorSettings,c=t.colorPanelProps,i=t.contrastCheckers,a=t.detectedBackgroundColor,s=t.detectedColor,u=t.panelChildren,l=t.initialOpen;return Object(f.createElement)(o.PanelColorSettings,v()({title:e,initialOpen:l,colorSettings:Object.values(n)},c),i&&(Array.isArray(i)?i.map((function(t){var e=t.backgroundColor,r=t.textColor,c=j()(t,S);return e=C(e,n,a),r=C(r,n,s),Object(f.createElement)(o.ContrastChecker,v()({key:"".concat(e,"-").concat(r),backgroundColor:e,textColor:r},c))})):Object(r.map)(n,(function(t){var e=t.value,r=i.backgroundColor,c=i.textColor;return r=C(r||e,n,a),c=C(c||e,n,s),Object(f.createElement)(o.ContrastChecker,v()({},i,{key:"".concat(r,"-").concat(c),backgroundColor:r,textColor:c}))}))),"function"==typeof u?u(n):u)}function T(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,c=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw c}}}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t){return t.ownerDocument.defaultView.getComputedStyle(t)}var E=[],F={textColor:Object(h.__)("Text color"),backgroundColor:Object(h.__)("Background color")},A=function(t){return Object(f.createElement)(o.InspectorControls,null,Object(f.createElement)(w,t))};n.d(e,"g",(function(){return D})),n.d(e,"b",(function(){return M})),n.d(e,"a",(function(){return B})),n.d(e,"c",(function(){return N})),n.d(e,"e",(function(){return I})),n.d(e,"d",(function(){return z})),n.d(e,"f",(function(){return L}));var D=void 0===o.__experimentalUseColors?function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{panelTitle:Object(h.__)("Color")},n=e.panelTitle,c=void 0===n?Object(h.__)("Color"):n,a=e.colorPanelProps,u=e.contrastCheckers,d=e.panelChildren,b=e.colorDetector,y=(b=void 0===b?{}:b).targetRef,v=b.backgroundColorTargetRef,O=void 0===v?y:v,j=b.textColorTargetRef,S=void 0===j?y:j,C=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],_=Object(o.useBlockEditContext)(),k=_.clientId,D=Object(o.useSetting)("color.palette")||E,M=Object(m.useSelect)((function(t){return{attributes:(0,t(o.store).getBlockAttributes)(k)}}),[k]),B=M.attributes,N=Object(m.useDispatch)(o.store),I=N.updateBlockAttributes,z=Object(f.useCallback)((function(t){return I(k,t)}),[I,k]),L=Object(f.useMemo)((function(){return p()((function(t,e,n,o,c,i){return function(a){var s,u=a.children,d=a.className,p=void 0===d?"":d,b=a.style,h=void 0===b?{}:b,m={};o?m=l()({},e,c):i&&(m=l()({},e,i));var y={className:g()(p,(s={},l()(s,"has-".concat(Object(r.kebabCase)(o),"-").concat(Object(r.kebabCase)(e)),o),l()(s,n||"has-".concat(Object(r.kebabCase)(t)),o||i),s)),style:P(P({},m),h)};return Object(r.isFunction)(u)?u(y):f.Children.map(u,(function(t){return Object(f.cloneElement)(t,{className:g()(t.props.className,y.className),style:P(P({},y.style),t.props.style||{})})}))}}),{maxSize:t.length})}),[t.length]),R=Object(f.useMemo)((function(){return p()((function(t,e){return function(n){var o=e.find((function(t){return t.color===n}));z(l()({},o?Object(r.camelCase)("custom ".concat(t)):t,void 0)),z(l()({},o?t:Object(r.camelCase)("custom ".concat(t)),o?o.slug:n))}}),{maxSize:t.length})}),[z,t.length]),q=Object(f.useState)(),Q=s()(q,2),U=Q[0],Y=Q[1],H=Object(f.useState)(),W=s()(H,2),$=W[0],J=W[1];return Object(f.useEffect)((function(){if(u){var t,e=!1,n=!1,o=T(Object(r.castArray)(u));try{for(o.s();!(t=o.n()).done;){var c=t.value,i=c.backgroundColor,a=c.textColor;if(e||(e=!0===i),n||(n=!0===a),e&&n)break}}catch(t){o.e(t)}finally{o.f()}if(n&&J(x(S.current).color),e){for(var s=O.current,l=x(s).backgroundColor;"rgba(0, 0, 0, 0)"===l&&s.parentNode&&s.parentNode.nodeType===s.parentNode.ELEMENT_NODE;)l=x(s=s.parentNode).backgroundColor;Y(l)}}}),[t.reduce((function(t,e){return"".concat(t," | ").concat(B[e.name]," | ").concat(B[Object(r.camelCase)("custom ".concat(e.name))])}),"")].concat(i()(C))),Object(f.useMemo)((function(){var e={},n=t.reduce((function(t,n){"string"==typeof n&&(n={name:n});var o=P(P({},n),{},{color:B[n.name]}),c=o.name,i=o.property,a=void 0===i?c:i,s=o.className,u=o.panelLabel,l=void 0===u?n.label||F[c]||Object(r.startCase)(c):u,f=o.componentName,d=void 0===f?Object(r.startCase)(c).replace(/\s/g,""):f,p=o.color,b=void 0===p?n.color:p,g=o.colors,h=void 0===g?D:g,m=B[Object(r.camelCase)("custom ".concat(c))],y=m?void 0:h.find((function(t){return t.slug===b}));return t[d]=L(c,a,s,b,y&&y.color,m),t[d].displayName=d,t[d].color=m||y&&y.color,t[d].slug=b,t[d].setColor=R(c,h),e[d]={value:y?y.color:B[Object(r.camelCase)("custom ".concat(c))],onChange:t[d].setColor,label:l,colors:h},h||delete e[d].colors,t}),{}),o={title:c,initialOpen:!1,colorSettings:e,colorPanelProps:a,contrastCheckers:u,detectedBackgroundColor:U,detectedColor:$,panelChildren:d};return P(P({},n),{},{ColorPanel:Object(f.createElement)(w,o),InspectorControlsColorPanel:Object(f.createElement)(A,o)})}),[B,z,$,U].concat(i()(C)))}:o.__experimentalUseColors;function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<span class="placeholder-content '+(Object(r.isEmpty)(e)?"":"sab-tooltip")+'" contenteditable="false" '+(Object(r.isEmpty)(e)?"":'data-tooltip="'+e+'"')+'><span class="editor-placeholder"></span>'+t+"</span>"}function B(t){return"string"==typeof t&&/^\d+$/.test(t)&&(t=parseInt(t)),t}function N(t){var e,n=t;return t&&t.hasOwnProperty("size")&&(n=t.size),n?(e=n,isNaN(parseFloat(e))||isNaN(e-0)?n:n+"px"):void 0}function I(t,e,n,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return t&&Object(r.includes)(t,n)||(t=Object(r.includes)(t,"{default}")?t.replace("{default}",o||M(n,c)):o||M(n,c)),t.replace(n,e)}function z(t,e,n){return t.replace(n,e)}function L(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"placeholder-content",r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=(new DOMParser).parseFromString(t,"text/html"),c=!1;if((c=r?o.querySelectorAll("[data-shortcode='"+n+"']"):o.getElementsByClassName(n)).length>0){var i=c[0].getElementsByClassName("editor-placeholder");if(i.length>0){for(var a=i[0].nextSibling,s=[];a;)a!==i[0]&&s.push(a),a=a.nextSibling;s.forEach((function(t){i[0].parentNode.removeChild(t)})),i[0].insertAdjacentHTML("afterEnd",e)}else c[0].innerHTML='<span class="editor-placeholder"></span>'+e;c[0].classList.remove("document-shortcode-needs-refresh"),t=o.body.innerHTML}return t}},72:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),c=n(21);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s="object"===("undefined"==typeof sabSettings?"undefined":n.n(c)()(sabSettings))?sabSettings:{},u=a(a({},{itemTotalTypes:[],itemMetaTypes:[],itemTableBlockTypes:[],discountTotalTypes:{}}),s);function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t},r=u.hasOwnProperty(t)?u[t]:e;return n(r,e)}var f=n(4),d=u.itemTotalTypes,p=u.itemMetaTypes,b=u.itemTableBlockTypes,g=u.discountTotalTypes,h=["core/bold","core/italic","core/text-color","core/underline","storeabill/document-shortcode","storeabill/font-size"],m=n(6),y=n(2),v=n(11),O=n.n(v),j=n(12);n(1);function S(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};u[t]=n(e)}function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";return p.hasOwnProperty(t)?p[t]:[]}function w(t,e){Array.isArray(e)||(e=[e]);var n=Object(m.select)("core/block-editor").getBlockParents(t);if(n.length>0){var r=Object(m.select)("core/block-editor").getBlock(n[0]);if(Object(y.includes)(e,r.name))return!0}return!1}function T(t){var e=l("supports");return Object(y.includes)(e,t)}function _(t){var e=l("defaultInnerBlocks");return e.hasOwnProperty(t)?e[t]:[]}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product",n=C(e),r=n.filter((function(e){if(t===e.type)return!0})),o=r.length>0?r[0].preview:"",c=x(e),i=c.meta_data.filter((function(e){if(t===e.key)return!0}));return i.length>0?i[0].value:o}function P(){return l("preview",{})}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"product";t=""===t?"product":t;var e=P();return e[t+"_items"][0]}function E(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].default:""}function F(t){var e=d.filter((function(e){if(t===e.type)return!0}));return e&&e[0]?e[0].title:""}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"total",e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=P(),r=n.totals,o=r.filter((function(e){return e.type===t}));return o.length>0?e?o[0].total_formatted:o[0].total:0}function D(){var t=P().tax_items;return t.length>0?t[0].rate.percent:"{rate}"}function M(){return P().formatted_discount_notice}function B(){var t=P().voucher_items;return t.length>0?t[0].code:"{code}"}function N(){var t=P().fee_items;return t.length>0?t[0].name:"{name}"}function I(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"read",r={top:t.top?t.top:e.top,left:t.left?t.left:e.left,right:t.right?t.right:e.right,bottom:t.bottom?t.bottom:e.bottom};if("edit"===n){var o=l("marginTypesSupported"),c={};return o.forEach((function(t){c[t]=r[t]})),c}return r}function z(){return"document_template"===Object(m.select)("core/editor").getCurrentPostType()}function L(){return l("allowedBlockTypes")}function R(){var t=void 0,e=(0,Object(m.select)("core/block-editor").getBlocks)().filter((function(t){if("storeabill/document-styles"===t.name)return t}));return e.length>0&&(t=e[0]),t}function q(){return l("fonts")}function Q(t){var e=q().filter((function(e){if(e.name===t)return!0}));if(!Object(y.isEmpty)(e))return e[0]}function U(){var t=(0,Object(m.select)("core/editor").getEditedPostAttribute)("meta");return t._fonts?t._fonts:void 0}function Y(t){t=t||U();var e=Object(j.addQueryArgs)("/sab/v1/preview_fonts/css",{fonts:t,display_types:l("fontDisplayTypes")});return O()({path:e})}function H(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=t;return"before_discounts"===n&&(r+="_subtotal",Object(y.includes)(t,"total")&&(r=t.replace("total","")),"total"===t?r="subtotal":"total_tax"===t&&(r="subtotal_tax")),!1!==e||Object(y.includes)(t,"_tax")||(Object(y.includes)(t,"_total")&&(r=r.replace("_total","")),r+="_net"),r+"_formatted"}function W(t){var e="";return"document"===t?e=Object(f._x)("Document","storeabill-core","woocommerce-germanized-pro"):"document_item"===t?e=Object(f._x)("Document Item","storeabill-core","woocommerce-germanized-pro"):"document_total"===t?e=Object(f._x)("Document Total","storeabill-core","woocommerce-germanized-pro"):"setting"===t&&(e=Object(f._x)("Settings","storeabill-core","woocommerce-germanized-pro")),e}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=l("shortcodes"),o=Object.entries(r),c=["blocks","setting","document"],i={};o.forEach((function(r,o){var a=r[0];if((!(t.length>0&&t!==a)||Object(y.includes)(c,a))&&("blocks"!==a||0!==e.length)){var s=[],u=W(a);if(Object(y.isArray)(r[1]))s=r[1].flat();else if(e.length>0){s=r[1].hasOwnProperty(e)?r[1][e]:[];var l=Object(m.select)("core/blocks").getBlockType(e);u=l?l.title:e}i.hasOwnProperty(a)||(i[a]={label:u,value:a,children:{}}),s.map((function(t){if(!i[a].children.hasOwnProperty(t.shortcode)){if(!n&&t.hasOwnProperty("headerFooterOnly")&&t.headerFooterOnly)return;i[a].children[t.shortcode]={value:t.shortcode,label:t.title}}}))}}));var a=[];return Object.entries(i).map((function(t){var e=Object.values(t[1].children).flat();Object(y.isEmpty)(e)||a.push({value:t[1].value,label:t[1].label,children:e})})),a}function J(t){var e=l("shortcodes"),n=Object.entries(e),r={};return n.forEach((function(t,e){(Object(y.isArray)(t[1])?t[1].flat():Object.values(t[1]).flat()).map((function(t){r.hasOwnProperty(t.shortcode)||(r[t.shortcode]=t)}))})),!!r.hasOwnProperty(t)&&r[t]}function K(t){var e=J(t);return e?e.title:""}function V(){return l("dateTypes")}function G(){return l("barcodeTypes")}function X(){return l("barcodeCodeTypes")}function Z(t){var e=l("dateTypes"),n=Object(f._x)("Date","storeabill-core","woocommerce-germanized-pro");return Object.entries(e).map((function(e){e[0]===t&&(n=e[1])})),n}function tt(t){try{t=parseFloat(t),"invoice_cancellation"===l("documentType")&&(t*=-1);var e=l("priceFormat").decimals,n=l("priceFormat").decimal_separator,r=l("priceFormat").thousand_separator,o=l("priceFormat").currency,c=l("priceFormat").format;e=Math.abs(e),e=isNaN(e)?2:e;var i=t<0?"-":"",a=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),s=a.length>3?a.length%3:0,u=i+(s?a.substr(0,s)+r:"")+a.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?n+Math.abs(t-a).toFixed(e).slice(2):"");return c.replace("%s",o).replace("%v",u)}catch(e){return t}}function et(t){var e=Object(j.addQueryArgs)("/sab/v1/preview_shortcodes",{query:t,document_type:l("documentType")});return O()({path:e})}n.d(e,"getItemMetaTypes",(function(){return C})),n.d(e,"blockHasParent",(function(){return w})),n.d(e,"documentTypeSupports",(function(){return T})),n.d(e,"getDefaultInnerBlocks",(function(){return _})),n.d(e,"getItemMetaTypePreview",(function(){return k})),n.d(e,"getPreview",(function(){return P})),n.d(e,"getPreviewItem",(function(){return x})),n.d(e,"getItemTotalTypeDefaultTitle",(function(){return E})),n.d(e,"getItemTotalTypeTitle",(function(){return F})),n.d(e,"getPreviewTotal",(function(){return A})),n.d(e,"getPreviewTaxRate",(function(){return D})),n.d(e,"getPreviewDiscountNotice",(function(){return M})),n.d(e,"getPreviewVoucherNotice",(function(){return B})),n.d(e,"getPreviewFeeName",(function(){return N})),n.d(e,"formatMargins",(function(){return I})),n.d(e,"isDocumentTemplate",(function(){return z})),n.d(e,"getAllowedBlockTypes",(function(){return L})),n.d(e,"getDocumentStylesBlock",(function(){return R})),n.d(e,"getFonts",(function(){return q})),n.d(e,"getFont",(function(){return Q})),n.d(e,"getCurrentFonts",(function(){return U})),n.d(e,"getFontsCSS",(function(){return Y})),n.d(e,"getItemTotalKey",(function(){return H})),n.d(e,"getShortcodeCategoryTitle",(function(){return W})),n.d(e,"getAvailableShortcodeTree",(function(){return $})),n.d(e,"getShortcodeData",(function(){return J})),n.d(e,"getShortcodeTitle",(function(){return K})),n.d(e,"getDateTypes",(function(){return V})),n.d(e,"getBarcodeTypes",(function(){return G})),n.d(e,"getBarcodeCodeTypes",(function(){return X})),n.d(e,"getDateTypeTitle",(function(){return Z})),n.d(e,"formatPrice",(function(){return tt})),n.d(e,"getShortcodePreview",(function(){return et})),n.d(e,"ITEM_TOTAL_TYPES",(function(){return d})),n.d(e,"ITEM_META_TYPES",(function(){return p})),n.d(e,"ITEM_TABLE_BLOCK_TYPES",(function(){return b})),n.d(e,"DISCOUNT_TOTAL_TYPES",(function(){return g})),n.d(e,"FORMAT_TYPES",(function(){return h})),n.d(e,"setSetting",(function(){return S})),n.d(e,"getSetting",(function(){return l}))}});