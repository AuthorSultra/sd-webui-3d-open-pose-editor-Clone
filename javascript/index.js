(function(){"use strict";var st=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof{}<"u"?{}:typeof self<"u"?self:{},G={},at={get exports(){return G},set exports(t){G=t}};(function(t,e){(function(i,r){t.exports=r()})(st,function(){var i=1e3,r=6e4,f=36e5,u="millisecond",a="second",y="minute",w="hour",v="day",b="week",h="month",_="quarter",m="year",O="date",I="Invalid Date",Pt=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Tt=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,xt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var s=["th","st","nd","rd"],n=c%100;return"["+c+(s[(n-20)%10]||s[n]||s[0])+"]"}},Q=function(c,s,n){var l=String(c);return!l||l.length>=s?c:""+Array(s+1-l.length).join(n)+c},Et={s:Q,z:function(c){var s=-c.utcOffset(),n=Math.abs(s),l=Math.floor(n/60),o=n%60;return(s<=0?"+":"-")+Q(l,2,"0")+":"+Q(o,2,"0")},m:function c(s,n){if(s.date()<n.date())return-c(n,s);var l=12*(n.year()-s.year())+(n.month()-s.month()),o=s.clone().add(l,h),p=n-o<0,d=s.clone().add(l+(p?-1:1),h);return+(-(l+(n-o)/(p?o-d:d-o))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:h,y:m,w:b,d:v,D:O,h:w,m:y,s:a,ms:u,Q:_}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},C="en",E={};E[C]=xt;var K=function(c){return c instanceof W},R=function c(s,n,l){var o;if(!s)return C;if(typeof s=="string"){var p=s.toLowerCase();E[p]&&(o=p),n&&(E[p]=n,o=p);var d=s.split("-");if(!o&&d.length>1)return c(d[0])}else{var g=s.name;E[g]=s,o=g}return!l&&o&&(C=o),o||!l&&C},D=function(c,s){if(K(c))return c.clone();var n=typeof s=="object"?s:{};return n.date=c,n.args=arguments,new W(n)},$=Et;$.l=R,$.i=K,$.w=function(c,s){return D(c,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var W=function(){function c(n){this.$L=R(n.locale,null,!0),this.parse(n)}var s=c.prototype;return s.parse=function(n){this.$d=function(l){var o=l.date,p=l.utc;if(o===null)return new Date(NaN);if($.u(o))return new Date;if(o instanceof Date)return new Date(o);if(typeof o=="string"&&!/Z$/i.test(o)){var d=o.match(Pt);if(d){var g=d[2]-1||0,S=(d[7]||"0").substring(0,3);return p?new Date(Date.UTC(d[1],g,d[3]||1,d[4]||0,d[5]||0,d[6]||0,S)):new Date(d[1],g,d[3]||1,d[4]||0,d[5]||0,d[6]||0,S)}}return new Date(o)}(n),this.$x=n.x||{},this.init()},s.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},s.$utils=function(){return $},s.isValid=function(){return this.$d.toString()!==I},s.isSame=function(n,l){var o=D(n);return this.startOf(l)<=o&&o<=this.endOf(l)},s.isAfter=function(n,l){return D(n)<this.startOf(l)},s.isBefore=function(n,l){return this.endOf(l)<D(n)},s.$g=function(n,l,o){return $.u(n)?this[l]:this.set(o,n)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(n,l){var o=this,p=!!$.u(l)||l,d=$.p(n),g=function(H,k){var x=$.w(o.$u?Date.UTC(o.$y,k,H):new Date(o.$y,k,H),o);return p?x:x.endOf(v)},S=function(H,k){return $.w(o.toDate()[H].apply(o.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(k)),o)},M=this.$W,A=this.$M,T=this.$D,P="set"+(this.$u?"UTC":"");switch(d){case m:return p?g(1,0):g(31,11);case h:return p?g(1,A):g(0,A+1);case b:var N=this.$locale().weekStart||0,Y=(M<N?M+7:M)-N;return g(p?T-Y:T+(6-Y),A);case v:case O:return S(P+"Hours",0);case w:return S(P+"Minutes",1);case y:return S(P+"Seconds",2);case a:return S(P+"Milliseconds",3);default:return this.clone()}},s.endOf=function(n){return this.startOf(n,!1)},s.$set=function(n,l){var o,p=$.p(n),d="set"+(this.$u?"UTC":""),g=(o={},o[v]=d+"Date",o[O]=d+"Date",o[h]=d+"Month",o[m]=d+"FullYear",o[w]=d+"Hours",o[y]=d+"Minutes",o[a]=d+"Seconds",o[u]=d+"Milliseconds",o)[p],S=p===v?this.$D+(l-this.$W):l;if(p===h||p===m){var M=this.clone().set(O,1);M.$d[g](S),M.init(),this.$d=M.set(O,Math.min(this.$D,M.daysInMonth())).$d}else g&&this.$d[g](S);return this.init(),this},s.set=function(n,l){return this.clone().$set(n,l)},s.get=function(n){return this[$.p(n)]()},s.add=function(n,l){var o,p=this;n=Number(n);var d=$.p(l),g=function(A){var T=D(p);return $.w(T.date(T.date()+Math.round(A*n)),p)};if(d===h)return this.set(h,this.$M+n);if(d===m)return this.set(m,this.$y+n);if(d===v)return g(1);if(d===b)return g(7);var S=(o={},o[y]=r,o[w]=f,o[a]=i,o)[d]||1,M=this.$d.getTime()+n*S;return $.w(M,this)},s.subtract=function(n,l){return this.add(-1*n,l)},s.format=function(n){var l=this,o=this.$locale();if(!this.isValid())return o.invalidDate||I;var p=n||"YYYY-MM-DDTHH:mm:ssZ",d=$.z(this),g=this.$H,S=this.$m,M=this.$M,A=o.weekdays,T=o.months,P=function(k,x,X,B){return k&&(k[x]||k(l,p))||X[x].slice(0,B)},N=function(k){return $.s(g%12||12,k,"0")},Y=o.meridiem||function(k,x,X){var B=k<12?"AM":"PM";return X?B.toLowerCase():B},H={YY:String(this.$y).slice(-2),YYYY:this.$y,M:M+1,MM:$.s(M+1,2,"0"),MMM:P(o.monthsShort,M,T,3),MMMM:P(T,M),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:P(o.weekdaysMin,this.$W,A,2),ddd:P(o.weekdaysShort,this.$W,A,3),dddd:A[this.$W],H:String(g),HH:$.s(g,2,"0"),h:N(1),hh:N(2),a:Y(g,S,!0),A:Y(g,S,!1),m:String(S),mm:$.s(S,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:d};return p.replace(Tt,function(k,x){return x||H[k]||d.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(n,l,o){var p,d=$.p(l),g=D(n),S=(g.utcOffset()-this.utcOffset())*r,M=this-g,A=$.m(this,g);return A=(p={},p[m]=A/12,p[h]=A,p[_]=A/3,p[b]=(M-S)/6048e5,p[v]=(M-S)/864e5,p[w]=M/f,p[y]=M/r,p[a]=M/i,p)[d]||M,o?A:$.a(A)},s.daysInMonth=function(){return this.endOf(h).$D},s.$locale=function(){return E[this.$L]},s.locale=function(n,l){if(!n)return this.$L;var o=this.clone(),p=R(n,l,!0);return p&&(o.$L=p),o},s.clone=function(){return $.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},c}(),ot=W.prototype;return D.prototype=ot,[["$ms",u],["$s",a],["$m",y],["$H",w],["$W",v],["$M",h],["$y",m],["$D",O]].forEach(function(c){ot[c[1]]=function(s){return this.$g(s,c[0],c[1])}}),D.extend=function(c,s){return c.$i||(c(s,W,D),c.$i=!0),D},D.locale=R,D.isDayjs=K,D.unix=function(c){return D(1e3*c)},D.en=E[C],D.Ls=E,D.p={},D})})(at);const ut=G;function ct(t="YYYY_MM_DD_HH_mm_ss"){return ut(new Date).format(t)}const z=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{}catch{return!1}return"showOpenFilePicker"in self})();z?Promise.resolve().then(function(){return ft}):Promise.resolve().then(function(){return vt}),z?Promise.resolve().then(function(){return ht}):Promise.resolve().then(function(){return $t}),z?Promise.resolve().then(function(){return yt}):Promise.resolve().then(function(){return _t});const lt=async t=>{const e=await t.getFile();return e.handle=t,e};var dt=async(t=[{}])=>{Array.isArray(t)||(t=[t]);const e=[];t.forEach((f,u)=>{e[u]={description:f.description||"Files",accept:{}},f.mimeTypes?f.mimeTypes.map(a=>{e[u].accept[a]=f.extensions||[]}):e[u].accept["*/*"]=f.extensions||[]});const i=await window.showOpenFilePicker({id:t[0].id,startIn:t[0].startIn,types:e,multiple:t[0].multiple||!1,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1}),r=await Promise.all(i.map(lt));return t[0].multiple?r:r[0]},ft={__proto__:null,default:dt};function F(t){function e(i){if(Object(i)!==i)return Promise.reject(new TypeError(i+" is not an object."));var r=i.done;return Promise.resolve(i.value).then(function(f){return{value:f,done:r}})}return F=function(i){this.s=i,this.n=i.next},F.prototype={s:null,n:null,next:function(){return e(this.n.apply(this.s,arguments))},return:function(i){var r=this.s.return;return r===void 0?Promise.resolve({value:i,done:!0}):e(r.apply(this.s,arguments))},throw:function(i){var r=this.s.return;return r===void 0?Promise.reject(i):e(r.apply(this.s,arguments))}},new F(t)}const tt=async(t,e,i=t.name,r)=>{const f=[],u=[];var a,y=!1,w=!1;try{for(var v,b=function(h){var _,m,O,I=2;for(typeof Symbol<"u"&&(m=Symbol.asyncIterator,O=Symbol.iterator);I--;){if(m&&(_=h[m])!=null)return _.call(h);if(O&&(_=h[O])!=null)return new F(_.call(h));m="@@asyncIterator",O="@@iterator"}throw new TypeError("Object is not async iterable")}(t.values());y=!(v=await b.next()).done;y=!1){const h=v.value,_=`${i}/${h.name}`;h.kind==="file"?u.push(h.getFile().then(m=>(m.directoryHandle=t,m.handle=h,Object.defineProperty(m,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>_})))):h.kind!=="directory"||!e||r&&r(h)||f.push(tt(h,e,_,r))}}catch(h){w=!0,a=h}finally{try{y&&b.return!=null&&await b.return()}finally{if(w)throw a}}return[...(await Promise.all(f)).flat(),...await Promise.all(u)]};var pt=async(t={})=>{t.recursive=t.recursive||!1,t.mode=t.mode||"read";const e=await window.showDirectoryPicker({id:t.id,startIn:t.startIn,mode:t.mode});return(await(await e.values()).next()).done?[e]:tt(e,t.recursive,void 0,t.skipDirectory)},ht={__proto__:null,default:pt},mt=async(t,e=[{}],i=null,r=!1,f=null)=>{Array.isArray(e)||(e=[e]),e[0].fileName=e[0].fileName||"Untitled";const u=[];let a=null;if(t instanceof Blob&&t.type?a=t.type:t.headers&&t.headers.get("content-type")&&(a=t.headers.get("content-type")),e.forEach((v,b)=>{u[b]={description:v.description||"Files",accept:{}},v.mimeTypes?(b===0&&a&&v.mimeTypes.push(a),v.mimeTypes.map(h=>{u[b].accept[h]=v.extensions||[]})):a?u[b].accept[a]=v.extensions||[]:u[b].accept["*/*"]=v.extensions||[]}),i)try{await i.getFile()}catch(v){if(i=null,r)throw v}const y=i||await window.showSaveFilePicker({suggestedName:e[0].fileName,id:e[0].id,startIn:e[0].startIn,types:u,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1});!i&&f&&f(y);const w=await y.createWritable();return"stream"in t?(await t.stream().pipeTo(w),y):"body"in t?(await t.body.pipeTo(w),y):(await w.write(await t),await w.close(),y)},yt={__proto__:null,default:mt},wt=async(t=[{}])=>(Array.isArray(t)||(t=[t]),new Promise((e,i)=>{const r=document.createElement("input");r.type="file";const f=[...t.map(w=>w.mimeTypes||[]),...t.map(w=>w.extensions||[])].join();r.multiple=t[0].multiple||!1,r.accept=f||"",r.style.display="none",document.body.append(r);const u=w=>{typeof a=="function"&&a(),e(w)},a=t[0].legacySetup&&t[0].legacySetup(u,()=>a(i),r),y=()=>{window.removeEventListener("focus",y),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",y)}),r.addEventListener("change",()=>{window.removeEventListener("focus",y),r.remove(),u(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()})),vt={__proto__:null,default:wt},gt=async(t=[{}])=>(Array.isArray(t)||(t=[t]),t[0].recursive=t[0].recursive||!1,new Promise((e,i)=>{const r=document.createElement("input");r.type="file",r.webkitdirectory=!0;const f=a=>{typeof u=="function"&&u(),e(a)},u=t[0].legacySetup&&t[0].legacySetup(f,()=>u(i),r);r.addEventListener("change",()=>{let a=Array.from(r.files);t[0].recursive?t[0].recursive&&t[0].skipDirectory&&(a=a.filter(y=>y.webkitRelativePath.split("/").every(w=>!t[0].skipDirectory({name:w,kind:"directory"})))):a=a.filter(y=>y.webkitRelativePath.split("/").length===2),f(a)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()})),$t={__proto__:null,default:gt},bt=async(t,e={})=>{Array.isArray(e)&&(e=e[0]);const i=document.createElement("a");let r=t;"body"in t&&(r=await async function(a,y){const w=a.getReader(),v=new ReadableStream({start:_=>async function m(){return w.read().then(({done:O,value:I})=>{if(!O)return _.enqueue(I),m();_.close()})}()}),b=new Response(v),h=await b.blob();return w.releaseLock(),new Blob([h],{type:y})}(t.body,t.headers.get("content-type"))),i.download=e.fileName||"Untitled",i.href=URL.createObjectURL(await r);const f=()=>{typeof u=="function"&&u()},u=e.legacySetup&&e.legacySetup(f,()=>u(),i);return i.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(i.href),3e4),f()}),i.click(),null},_t={__proto__:null,default:bt};function Mt(t,e){const i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("download",e),i.click()}const et=async(t,e,i)=>new Promise(r=>{const f=new MutationObserver(()=>{!!t.querySelector(e)==i&&(f.disconnect(),r(void 0))});f.observe(t,{childList:!0,subtree:!0}),!!t.querySelector(e)==i&&r(void 0)}),nt=t=>new Promise(function(e,i){setTimeout(()=>i("Timeout"),t)}),rt=(t,e)=>Promise.race([et(t,e,!0),nt(1e4)]),St=(t,e)=>Promise.race([et(t,e,!1),nt(1e4)]),j=async(t,e,i)=>{const r=await(await fetch(e)).blob(),f=new File([r],i),u=new DataTransfer;u.items.add(f),t.querySelector("button[aria-label='Clear']")?.click(),await St(t,"button[aria-label='Clear']");const a=t.querySelector("input[type='file']");a.value="",a.files=u.files,a.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),await rt(t,"button[aria-label='Clear']")},q=(t,e)=>{t.querySelectorAll("button")[e].click()},Dt=t=>{const e=t.querySelector(":scope > .label-wrap");e&&(e.classList.contains("open")||e.click())},At=t=>{gradioApp().querySelector("#openpose3d_iframe").contentWindow.postMessage(t,"*")},J={},V={},kt=()=>{window.addEventListener("message",t=>{const{data:e}=t;if(e&&e.cmd&&e.cmd=="openpose-3d"&&e.method){const i=e.method;console.log("Method",i,t),e.type=="return"?J[i]?.(e.payload):e.type=="event"&&(console.log(V),V[i]?.(e.payload))}})},Ot=t=>{Object.assign(V,t)};function L(t,...e){return new Promise((i,r)=>{const f=setTimeout(()=>{delete J[t],r({method:t,status:"Timeout"})},1e3),u=a=>{clearTimeout(f),i(a)};J[t]=u,At({cmd:"openpose-3d",method:t,type:"call",payload:e})})}const it=()=>{const t=gradioApp().querySelector("#tab_threedopenpose");return t&&t.style.display!="none"};let Z=!1,U=!1;onUiLoaded(async()=>{console.log("sd-webui-3d-open-pose-editor: onUiLoaded");const t=async(e,i,r,f,u,a,y,w,v)=>{let b=e.querySelector("#controlnet");if(b)Dt(b);else{for(const m of e.querySelectorAll(".cursor-pointer > span"))m.textContent?.includes("ControlNet")&&(m.textContent?.includes("M2M")||(b=m.parentElement?.parentElement));if(!b){console.error("ControlNet element not found");return}}await rt(b,'div[data-testid="image"]');const h=b.querySelectorAll('div[data-testid="image"]'),_=b.querySelector(".tab-nav");if(i&&r!=""&&r!="-"){const m=Number(r);_&&q(_,m),await j(h[m],i,"pose.png")}if(f&&u!=""&&u!="-"){const m=Number(u);_&&q(_,m),await j(h[m],f,"depth.png")}if(a&&y!=""&&y!="-"){const m=Number(y);_&&q(_,m),await j(h[m],a,"normal.png")}if(w&&v!=""&&v!="-"){const m=Number(v);_&&q(_,m),await j(h[m],w,"canny.png")}};window.openpose3d={sendTxt2img:async(e,i,r,f,u,a,y,w)=>{const v=gradioApp().querySelector("#txt2img_script_container");switch_to_txt2img(),await t(v,e,i,r,f,u,a,y,w)},sendImg2img:async(e,i,r,f,u,a,y,w)=>{const v=gradioApp().querySelector("#img2img_script_container");switch_to_img2img(),await t(v,e,i,r,f,u,a,y,w)},downloadImage:(e,i)=>{if(!e)return;const r=i+"_"+ct()+".png";Mt(e,r)}},kt(),Ot({MakeImages:async e=>{for(const[r,f]of Object.entries(e)){const u=gradioApp().querySelector(`#openpose3d_${r}_image`);await j(u,f,r+".png")}const i=gradioApp().querySelector("#openpose3d_main");q(i,1)}});for(let e=0;e<30;++e)try{await L("GetAppVersion"),Z=!0;break}catch(i){if(i.status!="Timeout")throw i}if(!Z){console.error("sd-webui-3d-open-pose-editor: Timeout");return}await L("OutputWidth",512),await L("OutputHeight",512),it()||await L("Pause")}),onUiUpdate(async()=>{Z&&(it()?U&&(U=!1,await L("Resume")):U||(U=!0,await L("Pause")))})})();