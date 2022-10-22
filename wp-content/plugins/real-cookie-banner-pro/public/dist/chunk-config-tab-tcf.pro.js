"use strict";(self.webpackChunkrealCookieBanner_name_=self.webpackChunkrealCookieBanner_name_||[]).push([[184],{114:(e,t,a)=>{a.d(t,{a:()=>r});var n=a(9040);function r(e,t,a,{id:r,legIntPurposes:l}){var c;const o=e.publisherRestrictions.getRestrictions(r);if(o.map((({purposeId:e,restrictionType:a})=>e===t&&a===n.RestrictionType.NOT_ALLOWED&&e)).filter(Boolean).indexOf(t)>-1)return!1;let i=null===(c=o.filter((({purposeId:e,restrictionType:a})=>e===t&&a!==n.RestrictionType.NOT_ALLOWED))[0])||void 0===c?void 0:c.restrictionType;return i||(i=l.indexOf(t)>-1?n.RestrictionType.REQUIRE_LI:n.RestrictionType.REQUIRE_CONSENT),!(a&&i===n.RestrictionType.REQUIRE_CONSENT||!a&&i===n.RestrictionType.REQUIRE_LI)}},7195:(e,t,a)=>{a.d(t,{D:()=>d,d:()=>u});var n=a(7363),r=a(114),l=a(2950),c=a(5171),o=a(3208),i=a(4656),s=a(5709);const d=({id:e})=>{var t;const[a,d]=(0,n.useState)(!1),m=(0,l.S)(),{ePrivacyUSA:p,tcfFilterBy:R,tcf:{gvl:v,model:f,original:{vendorConfigurations:E}}}=m,{vendors:{[e]:h},purposes:g,specialPurposes:b,features:_,specialFeatures:y}=v,{name:k,policyUrl:C,["consent"===R?"purposes":"legIntPurposes"]:S,flexiblePurposes:P,specialPurposes:Z,features:w,specialFeatures:T,usesCookies:I,cookieMaxAgeSeconds:x,cookieRefresh:A,usesNonCookieAccess:F,...N}=h,{ePrivacyUSA:D}=(0,n.useMemo)((()=>Object.values(E).filter((({vendorId:t})=>t===e))[0]),[e]),B=(0,n.useMemo)((()=>[...S,...P.filter((e=>-1===S.indexOf(e)))].filter((e=>(0,r.a)(f,e,"legInt"===R,h)))),[e,R]),{group:{descriptionFontSize:L},i18n:{tcf:{declarations:U,...M},...O},activeAction:V}=m,j=N.deviceStorageDisclosure,z=N.additionalInformation,q=null==z?void 0:z.legalAddress,G=!(null==z||!z.internationalTransfers),W=f["consent"===R?"vendorConsents":"vendorLegitimateInterests"],Y="history"===V,H=W.has(e),[Q,J]=(0,n.useState)(H);(0,n.useEffect)((()=>{J(H)}),[H]);const K=(0,n.useCallback)((()=>{if(!Y){const t=!Q;try{W[t?"set":"unset"](e),J(t)}catch(e){}}}),[Y,e,Q,W,J]);return React.createElement("div",(0,c.z)(m),React.createElement("div",{style:{marginBottom:10}},React.createElement(o.P,{isChecked:Q,isDisabled:Y,fontSize:L,onClick:K,after:React.createElement(i.x,{onToggle:d,showMore:M.showMore,hideMore:M.hideMore})},React.createElement("strong",null,k))),a&&React.createElement(n.Fragment,null,!!q&&React.createElement(s.l,{label:O.provider,value:q.split(";").join(", ")}),React.createElement(s.l,{label:O.providerPrivacyPolicyUrl,value:C}),!!p&&React.createElement(s.l,{label:O.ePrivacyUSA,value:G?O.yes:2===D?O.unknown:1===D?O.yes:O.no}),B.length>0&&React.createElement(s.l,{label:U.purposes.title,value:B.map((e=>g[e].name)).join(", ")}),Z.length>0&&React.createElement(s.l,{label:U.specialPurposes.title,value:Z.map((e=>b[e].name)).join(", ")}),w.length>0&&React.createElement(s.l,{label:U.features.title,value:w.map((e=>_[e].name)).join(", ")}),T.length>0&&React.createElement(s.l,{label:U.specialFeatures.title,value:T.map((e=>y[e].name)).join(", ")}),React.createElement(s.l,{label:O.usesCookies,value:I,printValueAs:"boolean"}),I&&React.createElement(s.l,{label:O.duration,value:x<=0?"Session":"".concat(x," ").concat(O.durationUnit.s)}),React.createElement(s.l,{label:O.cookieRefresh,value:A,printValueAs:"boolean"}),React.createElement(s.l,{label:O.usesNonCookieAccess,value:F,printValueAs:"boolean"}),null==j||null===(t=j.disclosures)||void 0===t?void 0:t.map((({type:e,identifier:t,domain:a,maxAgeSeconds:n,cookieRefresh:r,purposes:l})=>React.createElement(s.l,{key:k,label:O.technicalCookieDefinition,value:React.createElement("span",{style:{fontFamily:"monospace"}},t)},React.createElement(s.l,{label:O.type,value:u(e)}),!!a&&React.createElement(s.l,{label:O.host,value:React.createElement("span",{style:{fontFamily:"monospace"}},a)}),null!==n&&React.createElement(s.l,{label:O.duration,value:n<=0?"Session":"".concat(n," ").concat(O.durationUnit.s)}),React.createElement(s.l,{label:O.cookieRefresh,value:r,printValueAs:"boolean"}),!(null==l||!l.length)&&React.createElement(s.l,{label:U.purposes.title,value:l.map((e=>g[e].name)).join(", ")}))))))};function u(e){switch(e){case"cookie":return"HTTP Cookie";case"web":return"LocalStorage, Session Storage, IndexDB";case"app":return"App";default:return e}}},3208:(e,t,a)=>{a.d(t,{P:()=>d});var n=a(4741),r=a(7363),l=a(9024),c=a(1986),o=a(2214),i=a(3282),s=a(9927);const d=({hideCheckbox:e,isPartial:t,isChecked:a,isDisabled:d,fontSize:u,onClick:m,children:p,after:R,...v})=>{const f=t?o.Z:i.Z,E=(0,s.w)(),[h,g]=(0,r.useState)(!1);return(0,r.useLayoutEffect)((()=>{g(!0)}),[]),React.createElement(r.Fragment,null,!e&&React.createElement(c.p,(0,n.Z)({icon:f,onClick:m},(0,l.z)(E,h,a,d,u),v)),p&&React.createElement("span",{style:{verticalAlign:"middle",cursor:"pointer"}},React.createElement("span",{onClick:m},p),R))}},4656:(e,t,a)=>{a.d(t,{x:()=>o});var n=a(4741),r=a(7363),l=a(1648),c=a(9927);const o=({onToggle:e,children:t,showMore:a,hideMore:o,...i})=>{const s=(0,c.w)(),[d,u]=(0,r.useState)(!1),[m,p]=(0,r.useState)(!1);return React.createElement(r.Fragment,null,"  •  ",React.createElement("a",(0,n.Z)({href:"#"},(0,l.c)(s,d),{onClick:t=>{const a=!m;p(a),null==e||e(a),t.preventDefault()},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)},i),m?o:a),m&&t)}},1986:(e,t,a)=>{a.d(t,{p:()=>c});var n=a(4741),r=a(7363),l=a(1680);const c=({icon:e,...t})=>{const a=(0,r.useMemo)((()=>(0,l.x)(e,{extraSVGAttrs:{style:"width:auto;height:100%;",fill:"currentColor"}})),[e]);return React.createElement("div",(0,n.Z)({},t,{dangerouslySetInnerHTML:{__html:a}}))}},9024:(e,t,a)=>{a.d(t,{z:()=>r});var n=a(5657);function r({layout:{borderRadius:e},group:{headlineFontSize:t,checkboxBg:a,checkboxBorderWidth:r,checkboxBorderColor:l,checkboxActiveBg:c,checkboxActiveBorderColor:o,checkboxActiveColor:i},customCss:{antiAdBlocker:s},mobile:d,pageRequestUuid4:u},m,p,R,v){let f=v||t;f=u?(0,n.D)(d,u,f):f;const E=u?(0,n.D)(d,u,+r):+r,h=+f+2*E+6;return{className:"y"===s?void 0:"rcb-checkbox",style:{cursor:R?"not-allowed":"pointer",opacity:R?.5:void 0,color:p?i:a,display:m?"inline-block":"none",background:p?c:a,border:"".concat(E,"px solid ").concat(p?o:l),padding:3,height:h,width:h,marginRight:10,borderRadius:+e,verticalAlign:"middle",lineHeight:0,boxSizing:"border-box"}}}},5171:(e,t,a)=>{function n({customCss:{antiAdBlocker:e}}){return{className:"y"===e?void 0:"rcb-cookie",style:{marginTop:10}}}a.d(t,{z:()=>n})},8064:(e,t,a)=>{a.r(t),a.d(t,{TcfRouter:()=>te});var n=a(9591),r=a(7363),l=a(3554),c=a(6711),o=a(6836),i=a(9028),s=a(9455),d=a(905),u=a(6340),m=a(6142);const p=({count:e})=>{const t=(0,r.useMemo)((()=>{const t=[];for(let a=0;a<e;a++)t.push({key:a});return t}),[e]);return React.createElement(s.ZP,{dataSource:t,renderItem:()=>React.createElement(s.ZP.Item,null,React.createElement(m.Z,{loading:!0,active:!0,paragraph:{rows:1}}))})};var R=a(1857),v=a(6107),f=a(9943),E=a(2835),h=a(5020);const g=(0,l.Pi)((({item:e})=>{const{editLink:t}=(0,d.g)(),{addLink:a,editLink:l}=(0,h.w)(),{key:c,busy:o,data:m,stats:{activeFeatures:p,activePurposes:g},hasVendor:b}=e;let _,y;if(b){const t=e.vendorModel.data;_=t.name,y=t.policyUrl}const{status:k,meta:{ePrivacyUSA:C,vendorId:S},blocker:P}=m,{optionStore:{ePrivacyUSA:Z}}=(0,i.m)(),w=(0,r.useMemo)((()=>P?l(new E.p(void 0,{id:P})):"".concat(a,"?force=scratch&attributes=").concat(JSON.stringify({name:_,tcfVendors:[c],criteria:"tcfVendors"}))),[P,_,c]);return React.createElement(s.ZP.Item,{itemID:c.toString(),actions:[b&&React.createElement("a",{key:"contentBlocker",href:w,style:{textDecoration:"none"}},P?(0,u.__)("Edit Content Blocker"):(0,u.__)("Create Content Blocker")),b&&React.createElement("a",{key:"edit",href:t(e),style:{textDecoration:"none"}},(0,u.__)("Edit")),React.createElement(f.Z,{key:"delete",title:(0,u.__)("Are you sure you want to delete this vendor?"),placement:"bottomRight",onConfirm:()=>e.delete({force:!0}),okText:(0,u.__)("Delete"),cancelText:(0,u.__)("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},(0,u.__)("Delete")))].filter(Boolean)},React.createElement(n.Z,{spinning:o},React.createElement(s.ZP.Item.Meta,{title:React.createElement("span",null,_," ",React.createElement(v.Z,null,(0,u.__)("Vendor ID: %d",S)),"draft"===k?React.createElement(v.Z,{color:"orange"},(0,u.__)("Draft")):"private"===k?React.createElement(v.Z,{color:"red"},(0,u.__)("Disabled")):null,!!C&&Z&&React.createElement(v.Z,null,(0,u.__)("US data processing")),!b&&React.createElement(R.Z,{title:(0,u.__)("This vendor is no longer available and/or has been removed from the list of available vendors by the GVL. For this vendor, you can no longer request a consent from your visitors.")},React.createElement(v.Z,{color:"error"},(0,u.__)("Abandoned")))),description:React.createElement("div",null,React.createElement("div",null,(0,u.__)("Privacy policy"),":"," ",React.createElement("a",{href:y,target:"_blank",rel:"noreferrer"},y)),React.createElement("div",{style:{paddingTop:5}},React.createElement(v.Z,null,(0,u._n)("%d purpose enabled","%d purposes enabled",g,g)),p>0&&React.createElement(v.Z,null,(0,u._n)("%d feature enabled","%d features enabled",p,p))))})))}));var b=a(1944);const _=(0,l.Pi)((()=>{const{addLink:e}=(0,d.g)();return React.createElement(b.Z,{description:(0,u.__)("You have not yet created a TCF vendor configuration.")},React.createElement("a",{className:"button button-primary",href:e},(0,u.__)("Create TCF vendor configuration")))})),y=(0,l.Pi)((()=>{const[e,t]=(0,r.useState)(!1),{addLink:a}=(0,d.g)(),{tcfStore:n}=(0,i.m)(),{vendorConfigurations:l,vendorConfigurationCount:c}=n,{busy:o,entries:m}=l;return(0,r.useEffect)((()=>{c>0&&!e&&(n.fetchVendorConfigurations(),t(!0))}),[c,e]),c?React.createElement(React.Fragment,null,React.createElement("div",{className:"wp-clearfix"},React.createElement("a",{href:a,className:"button button-primary right",style:{marginBottom:10}},(0,u.__)("Add TCF vendor"))),o?React.createElement(p,{count:c}):React.createElement("div",null,React.createElement(s.ZP,null,Array.from(m.values()).sort(((e,t)=>{if(!e.hasVendor||!t.hasVendor)return 1;const a=e.vendorModel.data.name,n=t.vendorModel.data.name;return a<n?-1:a>n?1:0})).map((e=>React.createElement(g,{item:e,key:e.key})))))):React.createElement(_,null)}));var k=a(6766),C=a(2519);const S=(0,l.Pi)((({item:e,onSelect:t})=>{const{vendorConfiguration:a,data:{id:n,name:r,policyUrl:l}}=e;return React.createElement(s.ZP.Item,{itemID:n.toString(),actions:[t&&!a&&React.createElement("a",{className:"button",key:"select",style:{textDecoration:"none",cursor:"pointer"},onClick:()=>t(e)},(0,u.__)("Add vendor"))].filter(Boolean),style:a?{opacity:.7}:{}},React.createElement(s.ZP.Item.Meta,{title:React.createElement("span",null,r," ",!!a&&React.createElement(v.Z,null,(0,u.__)("Already created")),React.createElement(v.Z,null,(0,u.__)("Vendor ID: %d",n))),description:React.createElement("div",null,React.createElement("div",null,(0,u.__)("Privacy policy"),":"," ",React.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},l)))}))}));var P=a(449);const Z=(0,l.Pi)((({onSelect:e})=>{const{tcfStore:t}=(0,i.m)(),{busyVendors:a,vendors:n}=t,[l,c]=(0,r.useState)(""),[o,d]=(0,r.useState)([]),m=(0,r.useCallback)((e=>Array.from(n.values()).filter((({data:{id:t,name:a,policyUrl:n}})=>!e.trim().length||e.split(" ").filter(Boolean).filter((e=>"".concat(a," ").concat(n," ").concat(t).toLowerCase().indexOf(e.trim().toLowerCase())>-1)).length>0)).sort((({data:{name:e}},{data:{name:t}})=>e<t?-1:e>t?1:0))),[]);return(0,r.useEffect)((()=>{t.fetchedAllVendorConfigurations||t.fetchVendorConfigurations(),t.fetchVendors().then((()=>{d(m(""))}))}),[]),(0,P.N)(l,""===l?0:800,(e=>{d(m(e))})),React.createElement("div",null,React.createElement("div",{className:"wp-clearfix",style:{marginBottom:15}},React.createElement(C.Z.Search,{autoFocus:!0,style:{maxWidth:400,float:"right"},placeholder:(0,u.__)("Search vendor by name or ID..."),onChange:e=>c(e.target.value)})),a?React.createElement(p,{count:10}):React.createElement(s.ZP,null,o.map((t=>React.createElement(S,{item:t,key:"".concat(t.data.id),onSelect:e})))))}));var w=a(4741),T=a(3306),I=a(8782),x=a(6315),A=a(7321),F=a(5086),N=a(8920),D=a(6587);const B=(0,l.Pi)((({vendor:{data:{id:e,name:t,policyUrl:a,additionalInformation:{legalAddress:n,territorialScope:r}}}})=>{const{optionStore:{ePrivacyUSA:l,others:{iso3166OneAlpha2:c}}}=(0,i.m)();return React.createElement(React.Fragment,null,React.createElement(D.C,{offset:K.labelCol.span},(0,u.__)("General vendor configuration")),React.createElement(x.Z.Item,{label:(0,u.__)("Provider")},React.createElement(C.Z,{value:t,readOnly:!0,addonAfter:(0,u.__)("Vendor ID: %d",e)})),React.createElement(x.Z.Item,{label:(0,u.__)("Status"),required:!0},React.createElement(x.Z.Item,{name:"status",noStyle:!0,rules:[{required:!0,message:(0,u.__)("Please choose a status!")}]},React.createElement(N.ZP.Group,null,React.createElement(N.ZP.Button,{value:"publish"},(0,u.__)("Enabled")),React.createElement(N.ZP.Button,{value:"private"},(0,u.__)("Disabled")),React.createElement(N.ZP.Button,{value:"draft"},(0,u.__)("Draft")))),React.createElement("p",{className:"description"},(0,u.__)('Vendor configurations with the status "Draft" or "Disabled" are not visible to the public. In addition, a draft is highlighted in the table of vendor configurations so that you do not forget to complete it.'))),React.createElement(x.Z.Item,{label:(0,u.__)("Legal address")},React.createElement(C.Z.TextArea,{value:n.split(";").join("\n"),readOnly:!0,autoSize:!0})),React.createElement(x.Z.Item,{label:(0,u.__)("Privacy policy of the provider")},React.createElement(C.Z,{value:a,readOnly:!0})),React.createElement(x.Z.Item,{label:(0,u.__)("US data processing"),style:{display:l?void 0:"none"}},React.createElement(x.Z.Item,{name:"ePrivacyUSA",noStyle:!0},React.createElement(N.ZP.Group,null,React.createElement(N.ZP.Button,{value:2},(0,u.__)("Unknown")),React.createElement(N.ZP.Button,{value:1},(0,u.__)("Yes")),React.createElement(N.ZP.Button,{value:0},(0,u.__)("No")))),React.createElement("p",{className:"description"},(0,u.__)("This vendor processes data in the USA or transfers data to US companies or servers."))),React.createElement(x.Z.Item,{label:(0,u.__)("Territorial scope")},r.map((e=>React.createElement(v.Z,{key:e},c[e])))))})),L={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"};var U=a(3751),M=function(e,t){return r.createElement(U.Z,Object.assign({},e,{ref:t,icon:L}))};M.displayName="ReloadOutlined";const O=r.forwardRef(M);var V=a(7195);const j=(0,l.Pi)((({vendor:{deviceStorageDisclosure:e}})=>{const{tcfStore:{purposes:t}}=(0,i.m)();return React.createElement(React.Fragment,null,React.createElement(D.C,{offset:K.labelCol.span,description:(0,u._i)((0,u.__)("It should be specified all cookies, which are used by using a service of a TCF vendor. There are several types of cookies and that the {{aEprivacy}}ePrivacy Directive (Directive 2009/136/EC) Art. 66{{/aEprivacy}} requires that you inform your visitors not only about (HTTP) cookies, but also about cookie-like information. This data, if specified, is given by the TCF Vendor and is not mutable. If the information is incomplete, you will need to contact the TCF vendor to request the information be completed."),{aEprivacy:React.createElement("a",{href:(0,u.__)("https://devowl.io/go/eu-directive-2009-136-ec"),target:"_blank",rel:"noreferrer"})})},(0,u.__)("Device Storage Disclosure")," (",(0,u.__)("Technical cookie information"),")"),React.createElement("table",{className:"wp-list-table widefat fixed striped table-view-list",style:{marginBottom:25}},React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",null,(0,u.__)("Cookie type")),React.createElement("td",null,(0,u.__)("Identifier")),React.createElement("td",null,(0,u.__)("Domain")),React.createElement("td",null,(0,u.__)("Duration")),React.createElement("td",null,(0,u.__)("Purposes")))),React.createElement("tbody",null,e.length?e.map((({type:e,identifier:a,domain:n,maxAgeSeconds:r,cookieRefresh:l,purposes:c})=>React.createElement("tr",{key:"".concat(e).concat(a)},React.createElement("td",null,(0,V.d)(e)),React.createElement("td",null,a?React.createElement("code",null,a):(0,u.__)("Not defined")),React.createElement("td",null,n?React.createElement("code",null,n):(0,u.__)("Not defined")),React.createElement("td",null,null!==r?React.createElement(React.Fragment,null,r<=0?React.createElement(R.Z,{title:(0,u.__)("This cookie is active as long as the session is active")},React.createElement("span",null,(0,u.__)("Session"))):React.createElement("span",null,r," ",(0,u.__)("second(s)")),l&&React.createElement(v.Z,{icon:React.createElement(O,null)},(0,u.__)("Refresh"))):(0,u.__)("Not defined")),React.createElement("td",null,c?c.length?React.createElement(R.Z,{title:React.createElement("ul",{style:{margin:0,padding:0}},c.map((e=>React.createElement("li",{key:e},t.get("".concat(e)).data.name))))},React.createElement(v.Z,null,(0,u._n)("%d purpose","%d purposes",c.length,c.length))):(0,u.__)("None"):(0,u.__)("Unknown"))))):React.createElement("tr",null,React.createElement("td",{colSpan:5},(0,u.__)("This vendor does not provide any device storage disclosure."))))))}));var z=a(3828),q=a(6478),G=a(5648);const W={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},Y=(0,l.Pi)((({vendor:{allPurposes:e,flexiblePurposes:t}})=>{const{optionStore:{tcfScopeOfConsent:a}}=(0,i.m)(),n="global"===a;return React.createElement(React.Fragment,null,React.createElement(D.C,{offset:K.labelCol.span,description:(0,u._i)((0,u.__)('The vendor specifies for which defined purposes he wants to process (personal) data of your visitors and use cookies. These can be deselected if consent should not be obtained for certain purposes. The vendor specifies the legal basis for data processing in according to  {{aGdpr}}Art. 6 GDPR{{/aGdpr}} and whether you as the website operator can change this. "Legitimate Interest" means that this purpose is pre-selected on the basis of a legally designated legitimate interest, and the visitor to your website must actively object to it, if an objection is possible. "Consent" means that your visitors must explicitly agree to this purpose. The default settings are provided by the vendor, but do not have to match how you use the vendor on your website. In particular, you may need to make adjustments, if possible, in the "Legal basis" column. {{strong}}A legitimate interest exists only in a very few cases. If you are not sure, it is better to obtain consent.{{/strong}}'),{strong:React.createElement("strong",null),aGdpr:React.createElement("a",{href:(0,u.__)("https://gdpr-info.eu/art-6-gdpr/"),target:"_blank",rel:"noreferrer"})})},(0,u.__)("Purposes and special purposes")),n&&React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"0 0 10px 0"}},React.createElement("p",null,(0,u.__)('You are using the TCF integration in the "Global Scope". Therefore, according to the TCF specification, it is not possible to deselect purposes.'))),React.createElement("table",{className:"wp-list-table widefat fixed striped table-view-list",style:{marginBottom:25}},React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",{width:100},(0,u.__)("Enabled")),React.createElement("td",null,(0,u.__)("Description")),React.createElement("td",{width:210,align:"right"},(0,u.__)("Legal basis")))),React.createElement("tbody",null,e.map((e=>{const{data:{id:a,description:r,descriptionLegal:l},special:c}=e,o=t.indexOf(e)>-1,i=c?"special":"normal",s=a.toString(),d=["restrictivePurposes",i,s],m=d.join(".");return React.createElement("tr",{key:m,"data-key":m},React.createElement("td",null,React.createElement(x.Z.Item,(0,w.Z)({},W,{name:"special"===i?void 0:[...d,"enabled"],valuePropName:"checked"}),React.createElement(q.Z,{disabled:n||"normal"!==i,defaultChecked:"special"===i||void 0}))),React.createElement("td",null,React.createElement("strong",null,r," ",c&&React.createElement(v.Z,{color:"warning"},(0,u.__)("Special purpose"))),React.createElement("br",null),(0,G.E)(l)),React.createElement("td",null,React.createElement(x.Z.Item,{noStyle:!0,shouldUpdate:(e,t)=>{var a,n;return(null===(a=e.restrictivePurposes[i])||void 0===a?void 0:a[+s].enabled)!==(null===(n=t.restrictivePurposes[i])||void 0===n?void 0:n[+s].enabled)}},(({getFieldValue:e})=>React.createElement(x.Z.Item,(0,w.Z)({},W,{name:"special"===i?void 0:[...d,"legInt"]}),React.createElement(z.Z,{disabled:!o||n||!e([...d,"enabled"]),defaultValue:"special"===i?"no":void 0},React.createElement(z.Z.Option,{value:"yes"},(0,u.__)("Legitimate interest")),React.createElement(z.Z.Option,{value:"no"},(0,u.__)("Consent"))))))))})))))})),H={labelCol:{span:0},wrapperCol:{span:24},style:{margin:0}},Q=(0,l.Pi)((({vendor:{allFeatures:e}})=>React.createElement(React.Fragment,null,React.createElement(D.C,{offset:K.labelCol.span,description:(0,u.__)("Features are specified by the vendor and are immutable. They describe the characteristics of how personal data is processed in order to achieve one or more purposes.")},(0,u.__)("Features and special features")),React.createElement("table",{className:"wp-list-table widefat fixed striped table-view-list",style:{marginBottom:25}},React.createElement("thead",null,React.createElement("tr",null,React.createElement("td",{width:100},(0,u.__)("Enabled")),React.createElement("td",null,(0,u.__)("Description")))),React.createElement("tbody",null,e.map((e=>{const{data:{id:t,description:a,descriptionLegal:n},special:r}=e;return React.createElement("tr",{key:"".concat(r?"special":"normal","-").concat(t)},React.createElement("td",null,React.createElement(x.Z.Item,H,React.createElement(q.Z,{disabled:!0,defaultChecked:!0}))),React.createElement("td",null,React.createElement("strong",null,a," ",r&&React.createElement(v.Z,{color:"warning"},(0,u.__)("Special feature"))),React.createElement("br",null),(0,G.E)(n)))})),0===e.length&&React.createElement("tr",null,React.createElement("td",{colSpan:2,style:{textAlign:"center"}},(0,u.__)("This vendor has not listed any used features."))))))));var J=a(4542);const K={labelCol:{span:6},wrapperCol:{span:16}},X=(0,l.Pi)((({vendor:e,navigateAfterCreation:t=!0})=>{const{vendorConfiguration:a,id:l,queried:o,fetched:s,link:p}=(0,d.g)(),R=(0,c.useHistory)(),[v]=x.Z.useForm(),[f,E]=(0,r.useState)(!1),[h,g]=(0,r.useState)(!1),{tcfStore:b,optionStore:{tcfScopeOfConsent:_}}=(0,i.m)(),{vendorConfigurations:y}=b,[k,C]=(0,r.useState)(e),S=s?{status:a.data.status,restrictivePurposes:a.restrictivePurposes,ePrivacyUSA:a.data.meta.ePrivacyUSA,presetCheck:!0}:{status:"publish",restrictivePurposes:null==k?void 0:k.restrictivePurposes,ePrivacyUSA:2,presetCheck:!1};(0,r.useEffect)((()=>{a.vendorModel&&C(a.vendorModel)}),[a]),(0,r.useEffect)((()=>{o&&!s&&y.getSingle({params:{id:l,context:"edit"}})}),[o,s]),(0,r.useEffect)((()=>{(0,A.X)(0)}),[]);const P=(0,r.useCallback)((async e=>{const{status:n,restrictivePurposes:r,...l}=e;if(0===Object.values(r.normal).filter((({enabled:e})=>e)).length+k.specialPurposes.length)throw I.ZP.error("You need to enable at least one purpose!"),new Error;try{const e={...l,vendorId:k.data.id,restrictivePurposes:JSON.stringify(r)};if(delete e.presetCheck,o)"global"===_&&(e.restrictivePurposes=a.data.meta.restrictivePurposes),a.setStatus(n),a.setMeta(e),await a.patch();else{const t=new F.S(y,{status:n,meta:{...e}});await t.persist()}g(!1),I.ZP.success((0,u.__)("You successfully saved the TCF vendor configuration.")),t&&setTimeout((()=>R.push(p.slice(1))),0)}catch(e){throw I.ZP.error(e.responseJSON.message),e}}),[o,a,b,k,_]),Z=(0,r.useCallback)((async e=>{E(!0);try{await P(e)}catch(e){}finally{E(!1)}}),[v,P]),N=(0,r.useCallback)((e=>{I.ZP.error((0,u.__)("The TCF vendor configuration could not be saved due to missing/invalid form values.")),e.errorFields.length&&v.getFieldInstance(e.errorFields[0].name).parentElement.scrollIntoView({behavior:"smooth",block:"center"})}),[]),D=(0,r.useCallback)((()=>!h||(0,u.__)('You have unsaved changes. If you click on "confirm", your changes will be discarded.')),[v,S]);return o&&!s||!k?React.createElement(m.Z,{active:!0,paragraph:{rows:8}}):React.createElement(n.Z,{spinning:f},React.createElement(c.Prompt,{message:D}),React.createElement(x.Z,(0,w.Z)({name:"blocker-".concat(l),form:v},K,{initialValues:S,onFinish:Z,onFinishFailed:N,onValuesChange:()=>g(!0)}),React.createElement(B,{vendor:k}),React.createElement(j,{vendor:k}),React.createElement(Y,{vendor:k}),React.createElement(Q,{vendor:k}),!o&&React.createElement(x.Z.Item,{name:"presetCheck",valuePropName:"checked",required:!0,rules:[{type:"boolean",required:!0,transform:e=>e||void 0,message:(0,u.__)("Please confirm that you have checked the information.")}],wrapperCol:{offset:K.labelCol.span}},React.createElement(T.Z,null,(0,u.__)("I have checked the information in the TCF vendor configuration myself and corrected any information that does not fit to my use case.")," ",React.createElement(J.r,{url:(0,u.__)("https://devowl.io/knowledge-base/is-real-cookie-banner-legally-compliant/")}))),React.createElement(x.Z.Item,{className:"rcb-form-sticky-submit"},React.createElement("span",null,React.createElement("input",{type:"submit",className:"button button-primary right",value:(0,u.__)("Save")})))))})),$=(0,l.Pi)((()=>{const[e,t]=(0,r.useState)();return void 0===e?React.createElement(k.f,null,React.createElement(Z,{onSelect:t})):React.createElement(k.f,{maxWidth:"fixed"},React.createElement(X,{vendor:e}))}));var ee=a(6419);const te=(0,l.Pi)((()=>{const{path:e}=(0,c.useRouteMatch)(),{tcfStore:t}=(0,i.m)(),{purposes:a}=t;(0,r.useEffect)((()=>{t.fetchDeclarations()}),[]);const l=(0,o.v)("tcf-vendor");return 0===a.size?React.createElement(n.Z,{style:{margin:"auto",marginTop:15}}):React.createElement(React.Fragment,null,React.createElement(ee.K,{identifier:"tcf-vendor"}),React.createElement(c.Switch,null,React.createElement(c.Route,{path:e,exact:!0},React.createElement(y,null),React.createElement("p",{className:"description",style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},l)),React.createElement(c.Route,{path:"".concat(e,"/new")},React.createElement($,null)),React.createElement(c.Route,{path:"".concat(e,"/edit/:vendorConfiguration")},React.createElement(k.f,{maxWidth:"fixed"},React.createElement(X,null)))))}))},449:(e,t,a)=>{a.d(t,{N:()=>r});var n=a(7363);function r(e,t,a,r){const[l,c]=(0,n.useState)(e);return(0,n.useEffect)((()=>{const a=setTimeout((()=>{c(e)}),t);return null==r||r(e),()=>{clearTimeout(a)}}),[e]),(0,n.useEffect)((()=>{a(l)}),[l]),l}},5020:(e,t,a)=>{a.d(t,{w:()=>o});var n=a(6711),r=a(9028),l=a(7363),c=a(2835);const o=()=>{const{params:e}=(0,n.useRouteMatch)(),{cookieStore:t}=(0,r.m)(),a=+e.blocker,o=isNaN(+a)?0:+a,i=!!a,s=t.blockers.entries.get(o)||new c.p(t.blockers,{id:0}),d=(0,l.useCallback)((({key:e})=>"#/blocker/edit/".concat(e)),[s]);return{blocker:s,id:o,queried:i,fetched:0!==s.key,link:"#/blocker",editLink:d,addLink:"#/blocker/new"}}},905:(e,t,a)=>{a.d(t,{g:()=>o});var n=a(6711),r=a(9028),l=a(7363),c=a(5086);const o=()=>{const{params:e}=(0,n.useRouteMatch)(),{tcfStore:t}=(0,r.m)(),a=+e.vendorConfiguration,o=isNaN(+a)?0:+a,i=!!a,s=t.vendorConfigurations.entries.get(o)||new c.S(t.vendorConfigurations,{id:0}),d=(0,l.useCallback)((({key:e})=>"#/cookies/tcf-vendors/edit/".concat(e)),[s]);return{vendorConfiguration:s,id:o,queried:i,fetched:0!==s.key,link:"#/cookies/tcf-vendors",editLink:d,addLink:"#/cookies/tcf-vendors/new"}}}}]);
//# sourceMappingURL=chunk-config-tab-tcf.pro.js.map?ver=b31455657013d737052e