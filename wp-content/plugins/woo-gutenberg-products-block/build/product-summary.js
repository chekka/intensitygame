(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[35],{121:function(t,e,c){"use strict";var n=c(0),o=c(91),s=c(60);const r=t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},a=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),u=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e,l=function(t,e){let c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;";const n=a(t),o=n.split(" ").splice(0,e).join(" ");return Object(s.autop)(u(o,c))},i=function(t,e){let c=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;";const o=a(t),r=o.slice(0,e);if(c)return Object(s.autop)(u(r,n));const l=r.match(/([\s]+)/g),i=l?l.length:0,p=o.slice(0,e+i);return Object(s.autop)(u(p,n))};e.a=t=>{let{source:e,maxLength:c=15,countType:a="words",className:u="",style:p={}}=t;const d=Object(n.useMemo)(()=>function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words";const n=Object(s.autop)(t),a=Object(o.count)(n,c);if(a<=e)return n;const u=r(n),p=Object(o.count)(u,c);return p<=e?u:"words"===c?l(u,e):i(u,e,"characters_including_spaces"===c)}(e,c,a),[e,c,a]);return Object(n.createElement)(n.RawHTML,{style:p,className:u},d)}},327:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c(4),s=c.n(o),r=c(121),a=c(22),u=c(23),l=c(99),i=c(82),p=c(42);c(354),e.default=Object(p.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:c}=Object(u.useInnerBlockLayoutContext)(),{product:o}=Object(u.useProductDataContext)(),p=Object(l.a)(t),d=Object(i.a)(t);if(!o)return Object(n.createElement)("div",{className:s()(e,"wc-block-components-product-summary",{[c+"__product-summary"]:c})});const m=o.short_description?o.short_description:o.description;return m?Object(n.createElement)(r.a,{className:s()(e,p.className,"wc-block-components-product-summary",{[c+"__product-summary"]:c}),source:m,maxLength:150,countType:a.o.wordCountType||"words",style:{...p.style,...d.style}}):null})},354:function(t,e){}}]);