"use strict";(self.webpackChunkrealCookieBanner_name_=self.webpackChunkrealCookieBanner_name_||[]).push([[3],{4542:(e,t,a)=>{a.d(t,{r:()=>c});var n=a(6107),r=a(7088),o=a(5773);const c=({url:e,style:t,label:a})=>{const{__:c}=(0,o.Q)(),l={cursor:"pointer",...t};return React.createElement(n.Z,{style:l,onClick:()=>window.open(e,"_blank")},React.createElement(r.Z,null)," ",a||c("Learn more"))}},3549:(e,t,a)=>{a.d(t,{Y:()=>c});var n=a(7363),r=a(5998),o=a.n(r);const c=({settings:e={},value:t="",onChange:a})=>{const r=(0,n.useRef)(),{codeEditor:c}=o();(0,n.useEffect)((()=>{if(c){const{codemirror:t}=c.initialize(r.current,e);t.on("change",(e=>{null==a||a(e.getValue())}))}}),[]);const l=(0,n.useCallback)((()=>{}),[]);return React.createElement("textarea",{ref:r,value:t,onChange:c?l:({target:{value:e}})=>a(e),style:{width:"100%"}})}},2786:(e,t,a)=>{a.d(t,{X:()=>c});var n=a(3554),r=a(6340),o=a(9028);const c=(0,n.Pi)((({style:e})=>{const{optionStore:{blockerActive:t,allBlockerCount:a}}=(0,o.m)();return!t&&a>0&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:e},React.createElement("p",null,(0,r.__)("Content Blockers are globally deactivated in the settings and are therefore not displayed on your website.")," ","• ",React.createElement("a",{href:"#/settings"},(0,r.__)("Enable now"))))}))},6766:(e,t,a)=>{a.d(t,{f:()=>n});const n=({children:e,maxWidth:t="auto",style:a={}})=>React.createElement("div",{className:"rcb-config-content",style:{maxWidth:"fixed"===t?1300:t,...a}},e)},6419:(e,t,a)=>{a.d(t,{K:()=>d});var n=a(6069),r=a(7363),o=a(3554),c=a(6340),l=a(5406),s=a(6836),i=a(9028);const d=(0,o.Pi)((({identifier:e,width:t,title:a})=>{const{optionStore:o}=(0,i.m)(),{others:{modalHints:d}}=o,[u,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{m(-1===d.indexOf(e))}),[d.length,e]);const p=(0,s.v)(e),h="string"==typeof p&&p.indexOf("?")>-1?p.split("?")[0]:"",f=a||(h?"".concat(h,"?"):(0,c.__)("What you should definitely know!")),y="string"==typeof p&&"string"==typeof f&&h?p.replace(f,"").trim():p,g=(0,r.useCallback)((()=>{o.setModalHintSeen(e)}),[e,o]);return React.createElement(n.Z,{visible:u,title:React.createElement("span",null,React.createElement(l.Z,{style:{color:"#1890ff"}})," ",f),closable:!1,onOk:g,width:t,okText:(0,c.__)("Okay, I got it"),cancelButtonProps:{style:{display:"none"}}},y)}))},8480:(e,t,a)=>{a.d(t,{j:()=>R});var n=a(4741),r=a(9591),o=a(3306),c=a(2519),l=a(3735),s=a(7363),i=a(3554),d=a(4522),u=a(6340),m=a(1857),p=a(6107),h=a(5599),f=a(9028);const{Meta:y}=l.Z,g=(0,i.Pi)((function(e){const{identifier:t,version:a,name:n,description:r,logoUrl:o,disabled:c,created:i,attributes_name:d,tier:g,tags:b,onSelect:R,renderActions:_}=e,{optionStore:{others:{isDemoEnv:E}}}=(0,f.m)(),{isPro:k,open:w,modal:v}=(0,h.t)({title:(0,u.__)("Want to use %s template?",n),feature:"preset",description:"".concat((0,u.__)("Only a limited number of templates for services and content blockers are available in the %s version of Real Cookie Banner. Get the PRO version now and create a service or content blocker from this template with just one click!",(E?(0,u.__)("Demo"):(0,u.__)("Free")).toLowerCase())).concat(E?"":"\n\n".concat((0,u.__)("You can create this service yourself in the free version without any restrictions and research the necessary information.")))},!E&&void 0),x=(0,u.__)("Disabled"),C="pro"===g&&!k;return React.createElement(s.Fragment,{key:t},v,React.createElement(m.Z,{title:c?React.createElement("span",{dangerouslySetInnerHTML:{__html:b[x]}}):void 0},React.createElement(l.Z,{className:"rcb-antd-preset-card",hoverable:!c,style:{opacity:c||i?.6:1},onClick:e=>{e.target.closest(".rcb-antd-card")&&(C?w():c||R({identifier:t,version:a,attributes_name:d},e))},cover:React.createElement("img",{style:{width:"90%"},src:o}),actions:_?_(e):[]},React.createElement(y,{title:React.createElement("span",null,C&&React.createElement(p.Z,{color:h.k},"PRO"),!!b&&Object.keys(b).map((e=>React.createElement(m.Z,{title:e===x?void 0:React.createElement("span",{dangerouslySetInnerHTML:{__html:b[e]}}),key:e},React.createElement(p.Z,null,e)))),React.createElement("br",null),n),description:r||React.createElement("i",null,(0,u.__)("No description"))}))))})),{Meta:b}=l.Z,R=(0,i.Pi)((function({fetchingPresets:e,presets:t,onSelect:a,renderActions:i,quickLinks:m=[],children:p,showSearch:h=!0,showDisabled:f=!0,showHidden:y=!1}){const{isPro:R}=(0,d.u)(),[_,E]=(0,s.useState)(""),[k,w]=(0,s.useState)(!1),v=(0,s.useMemo)((()=>t.filter((({tier:e})=>!!R||!k||"pro"!==e)).filter((({name:e,description:t})=>!_.trim().length||_.split(" ").filter(Boolean).filter((a=>"".concat(e," ").concat(t||"").toLowerCase().indexOf(a.trim().toLowerCase())>-1)).length>0)).filter((({hidden:e})=>!!y||!e)).filter((({disabled:e})=>!!f||!e))),[t,_,k]);return React.createElement("div",{className:"column-posts"},m.map((({id:e,cover:t,description:a,onClick:n,title:r})=>React.createElement(l.Z,{key:e,hoverable:!0,style:{margin:5,width:240,display:"inline-block"},onClick:n,cover:t},React.createElement(b,{title:r,description:a})))),React.createElement(r.Z,{spinning:e},p,h&&React.createElement("div",{style:{marginBottom:20}},React.createElement(c.Z.Search,{autoFocus:!0,style:{maxWidth:400},placeholder:(0,u.__)("Search template by name..."),onChange:e=>E(e.target.value)}),React.createElement("br",null),!R&&React.createElement(o.Z,{onChange:()=>w(!k),style:{marginTop:10}},(0,u.__)("Show only free templates")))),0===v.length&&_.length>0&&React.createElement("div",{className:"notice notice-warning inline below-h2 notice-alt",style:{margin:"10px 0 0 0",maxWidth:400,display:"inline-block"}},React.createElement("p",null,(0,u._i)((0,u.__)("{{strong}}No template found{{/strong}}. Please try to create the service yourself or {{a}}contact us{{/a}} and let us know for which service you need a template."),{strong:React.createElement("strong",null),a:React.createElement("a",{href:(0,u.__)("https://devowl.io/support/"),target:"_blank",rel:"noreferrer"})}))),v.map((e=>React.createElement(g,(0,n.Z)({key:e.id,onSelect:a,renderActions:i},e)))))}))},6781:(e,t,a)=>{a.r(t),a.d(t,{ScannerRouter:()=>te});var n=a(3554),r=a(6711),o=a(6419),c=a(6766),l=a(9455),s=a(2841),i=a(7363),d=a(1944),u=a(5193),m=a(9591),p=a(6340),h=a(6069),f=a(6),y=a(9028),g=a(6857);const b=/.+?:\/\/.+?(\/.+?)(?:#|\?(.*)|$)/;function R(e,t,a=""){var n;const r=(null===(n=e.match(b))||void 0===n?void 0:n[1])||"/",o=t.match(b);if(o){const[,t,n]=o,c=n?"?".concat(n).concat(a?"?".concat(a):""):a?"?".concat(a):"";return"".concat(e).concat(t.substr(r.length)).concat(c)}return!1}async function _(e,t){try{const a=t?"".concat(t,"=1"):"",n=await fetch("".concat(e).concat("robots.txt").concat(a?"?".concat(a):""));if(!n.ok)return!1;const r=R(e,(await n.text()).match(/^sitemap:(.*)$/im)[1].trim(),a);if(r){const e=await fetch(r);if(!e.ok)return!1;const t=await e.text();return!!/<(?:sitemap|urlset)/gm.test(t)&&r}return!1}catch(e){return!1}}const E=["sitemap.xml","sitemap_index.xml","sitemap-index.xml","sitemap/","post-sitemap.xml","sitemap/sitemap.xml","sitemap/index.xml","sitemapindex.xml","sitemap.php","sitemap.txt","index.php/sitemap_index.xml","glossar/sitemap.xml"];async function k(e,t=E){const a=t.map((t=>fetch("".concat(e).concat(t),{mode:"no-cors"})));for(const e of a)try{const t=await e,a=await t.text();if(a.indexOf("<sitemapindex")>-1||a.indexOf("<urlset")>-1)return t.url}catch(e){}return!1}async function w(e,t,a){if(a)try{const n=await async function(e){const t=await fetch(e),a=await t.text();return(new DOMParser).parseFromString(a.trim(),"application/xml")}(t),r=n.querySelector("sitemapindex");if(r){const t=Array.from(r.children).map((e=>e.querySelector("loc").textContent));for(const n of t){const t=R(e,n)||n;await w(e,t,a)}}const o=n.querySelector("urlset");if(o){const e=Array.from(o.children).map((e=>e.querySelector("loc").textContent));a.push(...e)}}catch(e){console.error("Error occurred during \"crawl('".concat(t,"')\":\n\r Error: ").concat(e))}else try{return(await w(e,t,[])).sort(((e,t)=>e.length-t.length))}catch(e){return console.error(e),[]}return a}async function v(e){var t;const a=(0,p.__)('If you think a sitemap exists but you get this error, please <a href="%s" target="_blank" />contact our support</a> and we will look individually where the problem is in your WordPress installation.',(0,p.__)("https://devowl.io/support/"));let n=(null===(t=document.querySelector("#wp-admin-bar-view-site-original > a"))||void 0===t?void 0:t.href)||window.location.href.replace(/\/wp-admin\/.*/,"/");n=n.split("?",2)[0],null==e||e("find-sitemap");const r=await function(e,t,a){return new Promise(((n,r)=>{const o=e=>setTimeout((()=>n(e)),100);(async()=>{try{const n=await _(e);if(n)return void o(n);const r=await k(e);if(r)return void o(r);{const a=await _(e,t);if(a)return void o(a)}if(a){const t=await k(e,a);if(t)return void o(t)}o(!1)}catch(e){r(e)}})()}))}(n,"rcb-force-sitemap",["?sitemap=index&rcb-force-sitemap=1"]);if(!1===r)throw new Error("".concat((0,p.__)("We didn't find a sitemap on your website. We need it to scan all the subpages of your website. Do you have this feature disabled in your WordPress?")," ").concat(a));null==e||e("collect-sitemap");let o=[];try{o=await w(n,r)}catch(e){throw new Error("".concat((0,p.__)("The sitemap could not be parsed. Therefore, we cannot check for services on your website.")," ").concat(a))}if(0===o.length)throw new Error("".concat((0,p.__)("The sitemap is empty. So, we could not add any URLs to the scanner.")," ").concat(a));return o}var x=a(7330),C=a(2572);const S=(0,n.Pi)((()=>{const{scannerStore:{canShowResults:e,foundScanResultsCount:t,needsAttentionCount:a}}=(0,y.m)(),[n,r]=(0,i.useState)(void 0),{status:o,currentJob:c,total:l,percent:s,remaining:b,cancelling:R,handleStart:_,handleCancel:E,step:k,stepText:w}=function(e,t){const[a,n]=(0,i.useState)("idle"),{remaining:r,...o}=(0,g.p)(e,"rcb-scan-list",(0,i.useCallback)((()=>{n("idle")}),[])),{scannerStore:c,checklistStore:l}=(0,y.m)(),s=(0,i.useCallback)((async()=>{try{const e=await v(n);n("add-to-queue"),await c.addUrlsToQueue({urls:e,purgeUnused:!0}),await Promise.all([c.fetchResultExternals(),c.fetchResultPresets(),(0,f.refreshQueue)()]),n("done"),l.fetchChecklist()}catch(e){e instanceof Error&&h.Z.error({title:(0,p.__)("Whoops!"),content:React.createElement("span",{dangerouslySetInnerHTML:{__html:e.message}})}),n("idle")}}),[]);(0,i.useEffect)((()=>{(0,f.fetchStatus)(!0)}),[]);const d=(0,i.useMemo)((()=>{switch(a){case"idle":return(0,p.__)("Scan complete website");case"find-sitemap":return(0,p.__)("Find your website sitemap...");case"collect-sitemap":return(0,p.__)("Collect all scannable URLs...");case"add-to-queue":case"done":return(0,p.__)("Add URLs to queue...")}return""}),[a]);return{handleStart:s,step:a,stepText:d,setStep:n,remaining:r,...o}}(n),S="idle"!==k;return(0,i.useEffect)((()=>{r(b>0||"done"===k?5e3:void 0)}),[b,k]),void 0===b?React.createElement(m.Z,{style:{display:"block"}}):React.createElement("div",{className:"wp-clearfix"},e&&React.createElement("div",{style:{float:"left",margin:"5px 10px"}},0===a?React.createElement(React.Fragment,null,React.createElement(x.Z,{twoToneColor:"#52c41a"})," ",(0,p.__)("All recommendations applied")):React.createElement(React.Fragment,null,React.createElement(C.Z,{style:{color:"#dba617"}})," ",(0,p.__)("%d of %d recommendations applied",t-a,t))),"failed"===o?React.createElement(d.Z,{style:{clear:"both"},description:(0,p.__)("Scan failed"),image:React.createElement(u.Z,{type:"circle",width:100,percent:100,status:"exception"})}):"done"===o?React.createElement(d.Z,{style:{clear:"both"},description:(0,p.__)("Scan completed"),image:React.createElement(u.Z,{type:"circle",width:100,percent:100})}):b>0&&c&&l?React.createElement(d.Z,{style:{clear:"both"},description:React.createElement(React.Fragment,null,React.createElement("div",null,(0,p._i)((0,p.__)("Currently scanning {{code}}%s{{/code}} (%d of %d pages scanned)...",c.data.url,l-b,l),{code:React.createElement("code",null)})),React.createElement("div",{className:"notice notice-info inline below-h2 notice-alt",style:{margin:"10px 0 0 0",display:"inline-block"}},React.createElement("p",null,(0,p.__)("You can add already found services, edit your website or have a coffee in the meantime. The scanner runs in the background.")))),image:React.createElement(u.Z,{type:"circle",width:100,percent:s})},React.createElement("button",{className:"button button-primary",onClick:E,disabled:R},(0,p.__)("Cancel scan"))):e?React.createElement("button",{id:"rcb-btn-scan-start",className:"button button-primary alignright",onClick:_,disabled:S,style:{marginBottom:10,display:"done"!==k?void 0:"none"}},w):React.createElement(d.Z,{description:(0,p.__)("Scan your website for services that may set cookies or process personal data to obtain consent.")},React.createElement("button",{className:"button button-primary",onClick:_,disabled:S},w)))}));var Z=a(4741),T=a(8480),P=a(1857),N=a(6107),U=a(3368),A=a(6795),I=a(1320),L=a(8603),F=a(3549),W=a(5998),D=a.n(W);const B=(0,n.Pi)((({record:e})=>{const[t,a]=(0,i.useState)(!1),{data:{id:n},markup:r,store:o}=e,c=(0,i.useMemo)((()=>r?{...window.cm_settings,codemirror:{...D().codeEditor.defaultSettings.codemirror,mode:r.mime,lint:!1,readOnly:!0}}:{}),[r]),l=(0,i.useCallback)((()=>{t?a(!1):(a(!0),o.fetchMarkup(n))}),[t]);return React.createElement(React.Fragment,null,React.createElement(h.Z,{title:(0,p.__)("Element found by markup"),visible:t,width:700,bodyStyle:{paddingBottom:0},okButtonProps:{style:{display:"none"}},onCancel:l,cancelText:(0,p.__)("Close")},React.createElement(m.Z,{spinning:!r},r&&React.createElement(F.Y,{settings:c,value:r.markup}))),React.createElement("button",{className:"button",onClick:l},(0,p.__)("Open markup")))})),{Column:O}=A.Z,q=(0,n.Pi)((({instance:e,style:t,reloadDependencies:a=[],reload:n=!0})=>{const{scannerStore:r}=(0,y.m)(),{identifier:o,busy:c}=e,l=r.resultAllExternalUrls.get(o),s=(0,i.useCallback)((({data:{id:e}})=>e),[]),{remaining:u}=(0,g.p)(),[m,h]=(0,i.useState)("");return(0,i.useEffect)((()=>{!async function(){if(n)try{await r.fetchResultAllExternals(e),h("")}catch(e){var t;h((null===(t=e.responseJSON)||void 0===t?void 0:t.message)||e.message)}}()}),[e,n,...a]),React.createElement(React.Fragment,null,u>0&&React.createElement("div",{className:"notice notice-info below-h2 notice-alt",style:{margin:"0 0 10px"}},React.createElement("p",null,(0,p.__)("Since the scanner is currently still running, the table may be refreshed."))),React.createElement(A.Z,{locale:{emptyText:m?React.createElement(U.ZP,{title:(0,p.__)("Something went wrong."),subTitle:m,status:"500"}):React.createElement(d.Z,{description:(0,p.__)("No external URL found")})},dataSource:Array.from(l?l.values():[]),rowKey:s,size:"small",bordered:!0,style:t,loading:(!l||0===l.size)&&c},React.createElement(O,{title:(0,p.__)("Last scanned"),defaultSortOrder:"descend",sorter:(e,t)=>new Date(e.data.lastScanned).getTime()-new Date(t.data.lastScanned).getTime(),dataIndex:["data","lastScanned"],key:"created",render:(e,{data:{lastScanned:t}})=>new Date(t).toLocaleString(document.documentElement.lang)}),React.createElement(O,{title:(0,p.__)("HTML Tag"),dataIndex:["data","tag"],key:"tag",render:(e,{data:{tag:t}})=>React.createElement(N.Z,null,"<".concat(t," />"))}),React.createElement(O,{title:React.createElement(P.Z,{title:(0,p.__)("This status shows you if the URL was blocked by a content blocker you defined.")},React.createElement("span",null,(0,p.__)("Blocked?")," ",React.createElement(I.Z,{style:{color:"#9a9a9a"}}))),sorter:(e,t)=>e.data.blocked===t.data.blocked?0:e.data.blocked?-1:1,dataIndex:["data","blocked"],key:"blocked",render:(e,{data:{blocked:t}})=>t?React.createElement(x.Z,{twoToneColor:"#52c41a"}):React.createElement(L.Z,{twoToneColor:"#eb2f96"})}),React.createElement(O,{title:(0,p.__)("Blocked URL"),dataIndex:["data","blockedUrl"],key:"blockedUrl",render:(e,{blockedUrlTruncate:t,data:{blockedUrl:a}})=>React.createElement("a",{href:a,target:"_blank",rel:"noreferrer",title:a},t)}),React.createElement(O,{title:(0,p.__)("Found on this URL"),sorter:(e,t)=>e.data.sourceUrl.localeCompare(t.data.sourceUrl),dataIndex:["data","sourceUrl"],key:"sourceUrl",render:(e,{sourceUrlTruncate:t,data:{sourceUrl:a}})=>React.createElement("a",{href:a,target:"_blank",rel:"noreferrer"},t)}),React.createElement(O,{title:(0,p.__)("Actions"),dataIndex:["data","markup"],key:"markup",render:(e,t)=>t.data.markup?React.createElement(B,{record:t}):""})))})),Y=(0,n.Pi)((({identifier:e,scanned:t,onVisibleChange:a})=>{const{scannerStore:n}=(0,y.m)(),{resultPresets:r}=n,o=r.get(e),{data:{name:c}}=o,[l,s]=(0,i.useState)(!1),d=(0,i.useCallback)((()=>{null==a||a(!l),s(!l)}),[e,l]),u=!1===t?0:t.foundOnSitesCount;return React.createElement(React.Fragment,null,React.createElement(h.Z,{title:c,visible:l,width:1400,bodyStyle:{paddingBottom:0},okButtonProps:{style:{display:"none"}},onCancel:d,cancelText:(0,p.__)("Close")},React.createElement(q,{instance:o,reload:l&&u>0,reloadDependencies:[l,u]})),React.createElement("a",{onClick:e=>{e.preventDefault(),e.stopPropagation(),d()}},(0,p._n)("On %d page","On %d pages",u,u)))})),M=(0,n.Pi)((()=>{const[e,t]=(0,i.useState)(!1),{scannerStore:a,cookieStore:n}=(0,y.m)(),{resultPresets:r,busyResultPresets:o}=a,{remaining:l}=(0,g.p)(),{essentialGroup:d}=n,[u,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{n.fetchGroups()}),[]);const h=(0,i.useCallback)((async n=>{if(u||!n||e)return;t(!0);const{identifier:r}=n,o=a.resultPresets.get(r),c="navigateAfterCreation=".concat(encodeURIComponent("#scanner"));try{await o.fetchAttributes()}catch(e){return setTimeout((()=>window.location.href="#/cookies/".concat(null==d?void 0:d.key,"/new?force=").concat(r,"&").concat(c)),0),void t(!1)}const{data:{hidden:l},attributes:{serviceTemplates:[s]}}=o;if(s){if("number"!=typeof s||l){if(l)setTimeout((()=>window.location.href="#/cookies/".concat(null==d?void 0:d.key,"/new?force=").concat(r,"&").concat(c)),0);else if("number"!=typeof s){const{identifier:e}=s;setTimeout((()=>{var t;return window.location.href="#/cookies/".concat(null==d?void 0:d.key,"/new?force=").concat(e,"&attributes=").concat(JSON.stringify({createContentBlocker:(null===(t=s.attributes.group)||void 0===t?void 0:t.toLowerCase())!==(null==d?void 0:d.data.name.toLowerCase()),createContentBlockerId:r}),"&").concat(c)}),0)}}else setTimeout((()=>window.location.href="#/blocker/new?force=".concat(r,"&").concat(c)),0);t(!1)}}),[e,u,d]);return React.createElement(c.f,null,React.createElement(s.Z,null,(0,p.__)("Services, for which you should obtain consent")),React.createElement(T.j,{type:"contentBlocker",presets:Array.from(r.values()).map((({data:{logoFile:e,...t},fullLogoUrl:a})=>({...t,logoUrl:a}))),fetchingPresets:o&&!l||e,onSelect:h,renderActions:(0,i.useCallback)((e=>{const{identifier:t,version:a,attributes_name:n,scanned:r,tier:o}=e;return[React.createElement("a",{key:"create-now",onClick:()=>"pro"!==o&&h({identifier:t,version:a,attributes_name:n})},(0,p.__)("Create now")),r&&React.createElement(Y,(0,Z.Z)({},e,{key:"table",onVisibleChange:m}))].filter(Boolean)}),[]),showSearch:!1,showDisabled:!1,showHidden:!0}))}));var G=a(6142);const H=({count:e})=>{const t=(0,i.useMemo)((()=>{const t=[];for(let a=0;a<e;a++)t.push({key:a});return t}),[e]);return React.createElement(l.ZP,{dataSource:t,renderItem:()=>React.createElement(l.ZP.Item,null,React.createElement(G.Z,{loading:!0,active:!0,avatar:!1,paragraph:{rows:1}}))})};var j=a(9943),z=a(7109),J=a(8726),V=a(5020);const K=(0,n.Pi)((({item:e})=>{const[t,a]=(0,i.useState)(!1),{cookieStore:{essentialGroup:n}}=(0,y.m)(),{openDialog:r}=(0,J.u)(),{data:{host:o}}=e,{addLink:c}=(0,V.w)(),l=(0,i.useCallback)((()=>{a(!t)}),[t]),s=(0,i.useCallback)((()=>{a(!1),r()}),[r]),d="navigateAfterCreation=".concat(encodeURIComponent(window.location.href));return React.createElement(z.Z,{visible:t,content:React.createElement(React.Fragment,null,React.createElement("p",null,React.createElement("strong",null,(0,p._i)((0,p.__)("Does {{i}}%s{{/i}} belong to an essential service without which your website would technically no longer work?",o),{i:React.createElement("i",null)}))),React.createElement("p",null,React.createElement("a",{className:"button button-primary",href:"".concat(c,"?force=scratch&attributes=").concat(JSON.stringify({rules:["*".concat(o,"*")]}),"&").concat(d)},(0,p.__)("No"))," ",React.createElement("a",{className:"button",href:"#/cookies/".concat(null==n?void 0:n.key,"/new?force=scratch&").concat(d)},(0,p.__)("Yes"))," ",React.createElement("button",{className:"button",onClick:s},(0,p.__)("I do not know"))),React.createElement("p",{className:"description"},(0,p._i)((0,p.__)("{{strong}}No:{{/strong}} Non-essential services that process personal data (e.g. IP address in some countries) or set cookies may only be loaded after consent. You should block them using a content blocker until consent is given. {{i}}Examples would be iframes, YouTube and similar embeddings or tracking tools.{{/i}}"),{strong:React.createElement("strong",null),i:React.createElement("i",null)})),React.createElement("p",{className:"description"},(0,p._i)((0,p.__)("{{strong}}Yes (rare cases):{{/strong}} You should inform your users about the use of the service in the essential services group. You do not need to create a content blocker, as the service can be loaded without consent. {{i}}Examples are CDNs, privacy-friendly spam protection tools or security tools.{{/i}}"),{strong:React.createElement("strong",null),i:React.createElement("i",null)})),React.createElement("p",null,React.createElement("button",{className:"button",onClick:l},(0,p.__)("Close")))),placement:"right",overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"},onClick:l},(0,p.__)("Handle external URL")))})),Q=(0,n.Pi)((({item:e})=>{const[t,a]=(0,i.useState)(!1),{data:{host:n,foundOnSitesCount:r,tags:o,ignored:c},inactive:s,blockedStatus:d,blockedStatusText:u,busy:h}=e,f=(0,i.useCallback)((()=>{a(!t)}),[n,t]);return React.createElement(React.Fragment,null,React.createElement(l.ZP.Item,{itemID:n,actions:[React.createElement(K,{key:"handle",item:e}),!s&&React.createElement(j.Z,{key:"delete",title:(0,p.__)("Are you sure that you want to ignore this entry?"),placement:"bottomRight",onConfirm:()=>{e.ignore(),a(!1)},okText:(0,p.__)("Ignore"),cancelText:(0,p.__)("Cancel"),overlayStyle:{maxWidth:350}},React.createElement("a",{style:{cursor:"pointer"}},(0,p.__)("Ignore")))].filter(Boolean),style:{opacity:s&&!t?.6:1}},React.createElement(m.Z,{spinning:h},React.createElement(l.ZP.Item.Meta,{title:React.createElement("span",null,n," ",o.map((e=>React.createElement(N.Z,{key:e},"<".concat(e," />")))),c&&React.createElement(N.Z,null,(0,p.__)("Ignored")),"none"!==d&&React.createElement(N.Z,{color:"partial"===d?"warning":"success"},u)),description:React.createElement("button",{className:"button-link",onClick:f},t?(0,p.__)("Close"):(0,p._n)("Embeds found on %d page","Embeds found on %d pages",r,r))}))),t&&React.createElement(q,{instance:e,reload:t&&r>0,reloadDependencies:[t,r],style:{marginTop:"-6px"}}))})),X=(0,n.Pi)((()=>{const{scannerStore:e}=(0,y.m)(),{currentJob:t}=(0,g.p)(),{presetsCount:a,externalUrlsCount:n,busyExternalUrls:r,sortedExternalUrls:o,canShowResults:c}=e;return(0,i.useEffect)((()=>{e.fetchResultPresets(),e.fetchResultExternals()}),[]),React.createElement(React.Fragment,null,React.createElement(S,null),c&&a>0&&React.createElement(M,null),c&&n>0&&(r&&void 0===t?React.createElement(H,{count:n}):React.createElement("div",null,React.createElement(s.Z,null,(0,p.__)("Embeds of external URLs to be checked")),React.createElement("div",{style:{maxWidth:800,margin:"0px auto 20px",textAlign:"center"}},React.createElement("p",{className:"description"},(0,p.__)("You are embedding scripts, styles, iframes or similar from the following third-party servers. We currently do not have service templates for these. Therefore, you may have to create a service and/or content blocker yourself after you have assessed the situation."))),React.createElement(l.ZP,null,o.map((e=>React.createElement(Q,{item:e,key:e.data.host})))))))}));var $=a(6836),ee=a(2786);const te=(0,n.Pi)((()=>{const{path:e}=(0,r.useRouteMatch)(),t=(0,$.v)("scanner");return React.createElement(React.Fragment,null,React.createElement(ee.X,{style:{margin:"10px 0 0 0"}}),React.createElement(r.Switch,null,React.createElement(React.Fragment,null,React.createElement(o.K,{identifier:"scanner",title:(0,p.__)("What does the scanner find?"),width:900}),React.createElement(r.Route,{path:e,exact:!0},React.createElement(c.f,null,React.createElement(X,null),React.createElement("div",{style:{maxWidth:800,margin:"30px auto 0",textAlign:"center"}},t))))))}))},6836:(e,t,a)=>{a.d(t,{v:()=>m});var n=a(5489),r=a(8503),o=a(2841),c=a(7330),l=a(8603),s=a(4542),i=a(9028),d=a(6340),u=a(8726);function m(e){const{optionStore:{tcf:t}}=(0,i.m)();switch(e){case"scanner":{const{openDialog:e}=(0,u.u)();return React.createElement(React.Fragment,null,React.createElement("p",{className:"description"},(0,d.__)("The scanner finds services that you use on your website that might set/read cookies or process personal data. This is e.g. Google Analytics, YouTube or Elementor. If there is no template for a service, you will see from which external URLs content, scripts etc. are embedded. This allows you to set up your cookie banner quickly and easily.")),React.createElement("p",{className:"description"},(0,d._i)((0,d.__)("We explicitly do not find cookies because that would not work reliably. {{a}}We explained why in our knowledge base.{{/a}}"),{a:React.createElement("a",{rel:"noreferrer",href:(0,d.__)("https://devowl.io/knowledge-base/real-cookie-banner-cookie-scanner-finds-cookies-automatically/"),target:"_blank"})})),React.createElement(n.Z,{style:{margin:"10px 0"}},React.createElement(r.Z,{span:11},React.createElement("div",{style:{paddingRight:10}},React.createElement(o.Z,null,(0,d.__)("What the scanner finds ...")),[(0,d.__)("External services (with and without template)"),(0,d.__)("WordPress plugins with templates that require consent"),(0,d.__)("Automatic check of all subpages of your website")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(c.Z,{twoToneColor:"#52c41a"}),"  ",e))))),React.createElement(r.Z,{span:2,style:{textAlign:"center"}},React.createElement(o.Z,{type:"vertical",style:{height:"100%"}})),React.createElement(r.Z,{span:11},React.createElement("div",null,React.createElement(o.Z,null,(0,d.__)("... and what it does not")),[(0,d.__)("Cookies from unknown WordPress plugins"),(0,d.__)("Services embedded after the page load via JavaScript"),(0,d.__)("Complete coverage of your individual use case")].map(((e,t)=>React.createElement("div",{key:t,style:{marginBottom:10}},React.createElement(l.Z,{twoToneColor:"#eb2f96"}),"  ",e)))))),React.createElement("p",{className:"description"},(0,d._i)((0,d.__)("Just by using the scanner, you will not set up your cookie banner one hundred percent correctly. If it is too complex or time-consuming for you to set up the cookie banner yourself, just let one of our {{a}}cookie experts{{/a}} set it up for you!"),{a:React.createElement("a",{style:{textDecoration:"underline",cursor:"pointer"},onClick:e})})))}case"cookie":return React.createElement(React.Fragment,null,(0,d.__)("What are services? Services can be external applications such as Google Analytics or WordPress plugins or themes that process personal data (e.g. IP address) and/or set cookies. Cookies (and similar technologies) are small text files that are stored on the device of visitors to your website. You can store information about the visitor in cookies, such as the website's language, or unique advertising IDs to display personalized advertising. You, as the site owner, must ensure that cookies are only placed on your visitors' devices and personal data are only processed if they have given their explicit consent. Unless you have a legitimate interest in the legal sense to do so even without consent. You can define here all the services you use and their cookies with their legal and technical information.")," ",React.createElement(s.r,{url:(0,d.__)("https://devowl.io/2021/web-cookies-overview/")}));case"blocker":return(0,d.__)("What is a content blocker? Imagine that a user of your website does not accept all services. At the same time, you have integrated e.g. a YouTube video that sets cookies that the visitor has not agreed to. According to the ePrivacy Directive, this is prohibited. Content blockers automatically replace iframes, script and link tags like YouTube videos for such users and offer them to watch the video as soon as they agree to load it.");case"list-of-consents":return(0,d._i)((0,d.__)("Consents are automatically documented in order to be able to prove compliance with the legal requirements according to {{a}}Art. 5 GDPR{{/a}} and, in case of dispute, to prove how the consent was obtained."),{a:React.createElement("a",{href:(0,d.__)("https://gdpr-info.eu/art-5-gdpr/"),target:"_blank",rel:"noreferrer"})});case"shortcodes":return React.createElement(React.Fragment,null,(0,d._i)((0,d.__)("Your website visitors must be able to view their consent history, change their consent, or withdraw their consent at any time. This must be as easy as giving consent. Therefore, the legal links must be included on every subpage of the website (e.g. in the footer)."),{strong:React.createElement("strong",null)}),React.createElement("br",null),React.createElement("br",null),(0,d._i)((0,d.__)("Hiding these options, e.g. in the privacy policy, is in the opinion of multiple data protection authorities in the EU a violation of the GDPR."),{a:React.createElement("a",{href:(0,d.__)("https://www.datenschutzkonferenz-online.de/media/oh/20211220_oh_telemedien.pdf"),target:"_blank",rel:"noreferrer"})}),t?React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement("br",null),(0,d.__)("To meet the requirements of the TCF standard, the shortcodes should be placed near the link to the privacy policy.")):null);case"tcf-vendor":return(0,d._i)((0,d.__)("What is a TCF vendor? According to the IAB Europe Transparency and Consent Framework (TCF), any service (e.g. Google for Google Ads) that wants to use consents according to the TCF standard must register as a vendor in the {{a}}Global Vendor List (GVL){{/a}}. All TCF vendors specify for which purposes they need consent to process data and set cookies and which features they can offer with these consents. They also provide a link to their privacy policy for further information. You, as a website operator, must obtain consent in your cookie banner for all vendors you work with. You can limit the requested purposes of vendors to keep consents as privacy-friendly as possible."),{a:React.createElement("a",{href:(0,d.__)("https://iabeurope.eu/vendor-list-tcf-v2-0/"),target:"_blank",rel:"noreferrer"})});default:return""}}},8726:(e,t,a)=>{a.d(t,{u:()=>i});var n=a(2841),r=a(5235),o=a(6069),c=a(7363),l=a(9028),s=a(6340);function i(){const{optionStore:{others:{assetsUrl:e}}}=(0,l.m)(),t="".concat(e,"cookie-experts.svg"),a=(0,c.useCallback)((()=>{o.Z.info({icon:void 0,width:500,closable:!0,okButtonProps:{style:{display:"none"}},content:React.createElement("div",{style:{textAlign:"center"}},React.createElement("img",{src:t,style:{display:"block",paddingTop:15,margin:"auto",height:176}}),React.createElement("h3",{style:{margin:"10px 0 0"}},"Cookie Experts"),React.createElement("p",{style:{marginTop:0}},(0,s.__)("Let our team help you with the setup")),React.createElement(n.Z,null,React.createElement(r.C.Group,{size:"large"},React.createElement(r.C,{src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/cookie-experts-faces/jan.karres.jpeg"}),React.createElement(r.C,{src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/cookie-experts-faces/mario.guenter.jpeg"}),React.createElement(r.C,{src:"https://assets.devowl.io/in-app/wp-real-cookie-banner/cookie-experts-faces/matthias.guenter.jpeg"}))),React.createElement("a",{href:(0,s.__)("https://devowl.io/wordpress-real-cookie-banner/cookie-experts/"),target:"_blank",rel:"noreferrer",className:"button button-large button-primary"},(0,s.__)("Get help from Cookie Experts")),React.createElement("p",null,(0,s.__)("We admit, it is not easy to find all the services, cookies, etc. The legal requirements in the EU are quite complex for many website operators. We can understand if you feel overwhelmed – if this goes far beyond what you can technically do. After you know what all has to be considered, the question of how to make your website privacy compliant does not let you sleep peacefully either.")),React.createElement("p",null,(0,s.__)("Don’t worry, we have a solution for you! Our Cookie Experts have already set up many cookie banners and know exactly what they are doing. They can also set up your cookie banner quickly and easily. So, we can simply take this worry away from you.")),React.createElement("a",{style:{marginTop:10,textDecoration:"underline",display:"inline-block",cursor:"pointer"},onClick:()=>o.Z.destroyAll()},(0,s.__)("Close")))})}),[]);return{logoUrl:t,openDialog:a}}},5020:(e,t,a)=>{a.d(t,{w:()=>l});var n=a(6711),r=a(9028),o=a(7363),c=a(2835);const l=()=>{const{params:e}=(0,n.useRouteMatch)(),{cookieStore:t}=(0,r.m)(),a=+e.blocker,l=isNaN(+a)?0:+a,s=!!a,i=t.blockers.entries.get(l)||new c.p(t.blockers,{id:0}),d=(0,o.useCallback)((({key:e})=>"#/blocker/edit/".concat(e)),[i]);return{blocker:i,id:l,queried:s,fetched:0!==i.key,link:"#/blocker",editLink:d,addLink:"#/blocker/new"}}}}]);
//# sourceMappingURL=chunk-config-tab-scanner.pro.js.map?ver=10ae316920a44bf8149e