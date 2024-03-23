(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const Je=(e,t)=>e===t,Te=Symbol("solid-proxy"),et=Symbol("solid-track"),ce={equals:Je};let Ve=Ye;const q=1,ue=2,Ze={owned:null,cleanups:null,context:null,owner:null};var _=null;let _e=null,tt=null,b=null,w=null,D=null,he=0;function xe(e,t){const n=b,o=_,s=e.length===0,r=t===void 0?o:t,l=s?Ze:{owned:null,cleanups:null,context:r?r.context:null,owner:r},i=s?e:()=>e(()=>F(()=>pe(l)));_=l,b=null;try{return ie(i,!0)}finally{b=n,_=o}}function C(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=s=>(typeof s=="function"&&(s=s(n.value)),We(n,s));return[Ge.bind(n),o]}function A(e,t,n){const o=Ae(e,t,!1,q);se(o)}function me(e,t,n){Ve=st;const o=Ae(e,t,!1,q);(!n||!n.render)&&(o.user=!0),D?D.push(o):se(o)}function N(e,t,n){n=n?Object.assign({},ce,n):ce;const o=Ae(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,se(o),Ge.bind(o)}function F(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function nt(e){me(()=>F(e))}function Se(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function Ge(){if(this.sources&&this.state)if(this.state===q)se(this);else{const e=w;w=null,ie(()=>de(this),!1),w=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function We(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&ie(()=>{for(let s=0;s<e.observers.length;s+=1){const r=e.observers[s],l=_e&&_e.running;l&&_e.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?w.push(r):D.push(r),r.observers&&He(r)),l||(r.state=q)}if(w.length>1e6)throw w=[],new Error},!1)),t}function se(e){if(!e.fn)return;pe(e);const t=he;rt(e,e.value,t)}function rt(e,t,n){let o;const s=_,r=b;b=_=e;try{o=e.fn(t)}catch(l){return e.pure&&(e.state=q,e.owned&&e.owned.forEach(pe),e.owned=null),e.updatedAt=n+1,Ke(l)}finally{b=r,_=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?We(e,o):e.value=o,e.updatedAt=n)}function Ae(e,t,n,o=q,s){const r={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:_?_.context:null,pure:n};return _===null||_!==Ze&&(_.owned?_.owned.push(r):_.owned=[r]),r}function fe(e){if(e.state===0)return;if(e.state===ue)return de(e);if(e.suspense&&F(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===q)se(e);else if(e.state===ue){const o=w;w=null,ie(()=>de(e,t[0]),!1),w=o}}function ie(e,t){if(w)return e();let n=!1;t||(w=[]),D?n=!0:D=[],he++;try{const o=e();return ot(n),o}catch(o){n||(D=null),w=null,Ke(o)}}function ot(e){if(w&&(Ye(w),w=null),e)return;const t=D;D=null,t.length&&ie(()=>Ve(t),!1)}function Ye(e){for(let t=0;t<e.length;t++)fe(e[t])}function st(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:fe(o)}for(t=0;t<n;t++)fe(e[t])}function de(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const s=o.state;s===q?o!==t&&(!o.updatedAt||o.updatedAt<he)&&fe(o):s===ue&&de(o,t)}}}function He(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ue,n.pure?w.push(n):D.push(n),n.observers&&He(n))}}function pe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),l=n.observerSlots.pop();o<s.length&&(r.sourceSlots[l]=o,s[o]=r,n.observerSlots[o]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)pe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function it(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Ke(e,t=_){throw it(e)}const De=Symbol("fallback");function Fe(e){for(let t=0;t<e.length;t++)e[t]()}function lt(e,t,n={}){let o=[],s=[],r=[],l=[],i=0,a;return Se(()=>Fe(r)),()=>{const c=e()||[];return c[et],F(()=>{if(c.length===0)return i!==0&&(Fe(r),r=[],o=[],s=[],i=0,l=[]),n.fallback&&(o=[De],s[0]=xe(g=>(r[0]=g,n.fallback())),i=1),s;for(o[0]===De&&(r[0](),r=[],o=[],s=[],i=0),a=0;a<c.length;a++)a<o.length&&o[a]!==c[a]?l[a](()=>c[a]):a>=o.length&&(s[a]=xe(u));for(;a<o.length;a++)r[a]();return i=l.length=r.length=c.length,o=c.slice(0),s=s.slice(0,i)});function u(g){r[a]=g;const[p,v]=C(c[a]);return l[a]=v,t(p,a)}}}function k(e,t){return F(()=>e(t||{}))}function ae(){return!0}const at={get(e,t,n){return t===Te?n:e.get(t)},has(e,t){return t===Te?!0:e.has(t)},set:ae,deleteProperty:ae,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ae,deleteProperty:ae}},ownKeys(e){return e.keys()}};function ke(e){return(e=typeof e=="function"?e():e)?e:{}}function ct(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function ut(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&Te in i,e[l]=typeof i=="function"?(t=!0,N(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=ke(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in ke(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(ke(e[i])));return[...new Set(l)]}},at);const n={},o=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const g=Object.getOwnPropertyDescriptor(i,u);if(!o[u])o[u]=g.get?{enumerable:!0,configurable:!0,get:ct.bind(n[u]=[g.get.bind(i)])}:g.value!==void 0?g:void 0;else{const p=n[u];p&&(g.get?p.push(g.get.bind(i)):g.value!==void 0&&p.push(()=>g.value))}}}const s={},r=Object.keys(o);for(let l=r.length-1;l>=0;l--){const i=r[l],a=o[i];a&&a.get?Object.defineProperty(s,i,a):s[i]=a?a.value:void 0}return s}const ft=e=>`Stale read from <${e}>.`;function dt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(lt(()=>e.each,e.children,t||void 0))}function Xe(e){const t=e.keyed,n=N(()=>e.when,void 0,{equals:(o,s)=>t?o===s:!o==!s});return N(()=>{const o=n();if(o){const s=e.children;return typeof s=="function"&&s.length>0?F(()=>s(t?o:()=>{if(!F(n))throw ft("Show");return e.when})):s}return e.fallback},void 0,void 0)}function gt(e,t,n){let o=n.length,s=t.length,r=o,l=0,i=0,a=t[s-1].nextSibling,c=null;for(;l<s||i<r;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[r-1];)s--,r--;if(s===l){const u=r<o?i?n[i-1].nextSibling:n[r-i]:a;for(;i<r;)e.insertBefore(n[i++],u)}else if(r===i)for(;l<s;)(!c||!c.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[i]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--r],u),t[s]=n[r]}else{if(!c){c=new Map;let g=i;for(;g<r;)c.set(n[g],g++)}const u=c.get(t[l]);if(u!=null)if(i<u&&u<r){let g=l,p=1,v;for(;++g<s&&g<r&&!((v=c.get(t[g]))==null||v!==u+p);)p++;if(p>u-i){const y=t[l];for(;i<u;)e.insertBefore(n[i++],y)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Be="_$DX_DELEGATE";function vt(e,t,n,o={}){let s;return xe(r=>{s=r,t===document?e():m(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{s(),t.textContent=""}}function O(e,t,n){let o;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>F(()=>document.importNode(o||(o=s()),!0)):()=>(o||(o=s())).cloneNode(!0);return r.cloneNode=r,r}function ye(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let o=0,s=e.length;o<s;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,pt))}}function ht(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function f(e,t){t==null?e.removeAttribute("class"):e.className=t}function ge(e,t,n,o){if(o)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=r=>s.call(e,n[1],r))}else e.addEventListener(t,n)}function re(e,t,n){if(!t)return n?ht(e,"style"):t;const o=e.style;if(typeof t=="string")return o.cssText=t;typeof n=="string"&&(o.cssText=n=void 0),n||(n={}),t||(t={});let s,r;for(r in n)t[r]==null&&o.removeProperty(r),delete n[r];for(r in t)s=t[r],s!==n[r]&&(o.setProperty(r,s),n[r]=s);return n}function mt(e,t,n){return F(()=>e(t,n))}function m(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return ve(e,t,o,n);A(s=>ve(e,t(),s,n),o)}function pt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?o.call(n,s,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function ve(e,t,n,o,s){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data!==t&&(i.data=t):i=document.createTextNode(t),n=z(e,n,o,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=z(e,n,o);else{if(r==="function")return A(()=>{let i=t();for(;typeof i=="function";)i=i();n=ve(e,i,n,o)}),()=>n;if(Array.isArray(t)){const i=[],a=n&&Array.isArray(n);if(Ce(i,t,n,s))return A(()=>n=ve(e,i,n,o,!0)),()=>n;if(i.length===0){if(n=z(e,n,o),l)return n}else a?n.length===0?je(e,i,o):gt(e,n,i):(n&&z(e),je(e,i));n=i}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=z(e,n,o,t);z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ce(e,t,n,o){let s=!1;for(let r=0,l=t.length;r<l;r++){let i=t[r],a=n&&n[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=Ce(e,i,a)||s;else if(c==="function")if(o){for(;typeof i=="function";)i=i();s=Ce(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||s}else e.push(i),s=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function je(e,t,n=null){for(let o=0,s=t.length;o<s;o++)e.insertBefore(t[o],n)}function z(e,t,n,o){if(n===void 0)return e.textContent="";const s=o||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const a=i.parentNode===e;!r&&!l?a?e.replaceChild(s,i):e.insertBefore(s,n):a&&i.remove()}else r=!0}}else e.insertBefore(s,n);return[s]}const yt=[{value:"våtvaror och benbuljong i kupade händer / här hamstrar vi i silverfasadernas myr",previousValue:"",removed:"",added:"våtvaror och benbuljong i kupade händer / här hamstrar vi i silverfasadernas myr",previousFrom:0,previousTo:0,currentFrom:0,currentTo:80,timestamp:"2024-03-17T13:24:45.385Z"},{value:"skållhet varovurm och benbuljong / smaka vår uppkastning i kromfasadernas myr",previousValue:"våtvaror och benbuljong i kupade händer / här hamstrar vi i silverfasadernas myr",removed:"våtvaror och benbuljong i kupade händer / här hamstrar vi i silver",added:"skållhet varovurm och benbuljong / smaka vår uppkastning i krom",previousFrom:0,previousTo:66,currentFrom:0,currentTo:63,timestamp:"2024-03-17T14:58:40.953Z"},{value:"skållhet varovurm i stora slevar / kapade drönare som kaskadspyr över kromfasadernas myr",previousValue:"skållhet varovurm och benbuljong / smaka vår uppkastning i kromfasadernas myr",removed:"och benbuljong / smaka vår uppkastning i",added:"i stora slevar / kapade drönare som kaskadspyr över",previousFrom:18,previousTo:58,currentFrom:18,currentTo:69,timestamp:"2024-03-17T15:01:42.797Z"},{value:"skavsår mot monoliternas glödande krom / här förbereder våra drönares en nakenfotad mosse",previousValue:"skållhet varovurm i stora slevar / kapade drönare som kaskadspyr över kromfasadernas myr",removed:"ållhet varovurm i stora slevar / kapade drönare som kaskadspyr över kromfasadernas myr",added:"avsår mot monoliternas glödande krom / här förbereder våra drönares en nakenfotad mosse",previousFrom:2,previousTo:88,currentFrom:2,currentTo:89,timestamp:"2024-03-18T15:32:28.375Z"},{value:"skavsår vid berg och grus av krom / av med skorna tugga kretskort och avfall",previousValue:"skavsår mot monoliternas glödande krom / här förbereder våra drönares en nakenfotad mosse",removed:"mot monoliternas glödande krom / här förbereder våra drönares en nakenfotad mosse",added:"vid berg och grus av krom / av med skorna tugga kretskort och avfall",previousFrom:8,previousTo:89,currentFrom:8,currentTo:76,timestamp:"2024-03-19T13:33:39.930Z"},{value:"snavar du i snår av törnspolar och koppartråd? / släng av skorna, klampa vidare mot avfall",previousValue:"skavsår vid berg och grus av krom / av med skorna tugga kretskort och avfall",removed:"kavsår vid berg och grus av krom / av med skorna tugga kretskort och",added:"navar du i snår av törnspolar och koppartråd? / släng av skorna, klampa vidare mot",previousFrom:1,previousTo:69,currentFrom:1,currentTo:83,timestamp:"2024-03-20T15:20:32.274Z"},{value:"snavar du slackar du kärnar du ditt hjärnsmör? / dumpa alla skor och delta i ett avfall",previousValue:"snavar du i snår av törnspolar och koppartråd? / släng av skorna, klampa vidare mot avfall",removed:"i snår av törnspolar och koppartråd? / släng av skorna, klampa vidare mo",added:"slackar du kärnar du ditt hjärnsmör? / dumpa alla skor och delta i et",previousFrom:10,previousTo:82,currentFrom:10,currentTo:79,timestamp:"2024-03-21T15:58:44.851Z"}],bt="snavar du slackar du kärnar du ditt hjärnsmör? / dumpa alla skor och delta i ett avfall",_t={log:yt,value:bt},kt="_container_1eqx9_36",$t="_paragraph_1eqx9_48",wt="_character_1eqx9_68",Tt="_previous_1eqx9_72",xt="_current_1eqx9_76",Ct="_fadeIn_1eqx9_80",St="_fadeOut_1eqx9_84",At="_line_1eqx9_88",Et="_change_1eqx9_94",T={container:kt,paragraph:$t,character:wt,previous:Tt,current:xt,fadeIn:Ct,fadeOut:St,line:At,change:Et},oe=1e3,be=2500,Lt=.9,Pt=3,Ot=2,Re=.3,It=1,Nt=be,Dt=1e3;var Ft=O(`<svg id=filters style=position:absolute><defs><filter id=threshold><feColorMatrix in=SourceGraphic type=matrix values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -50">`);const Bt=()=>Ft();var jt=O("<main><p><span><span style=visibility:hidden;position:absolute></span><span></span><span></span><span></span></span><span><span></span><span>");const Rt=e=>{let t,n,o,s;return t=e.currentFrom,n=e.currentTo,o=e.previousFrom,s=e.previousTo,{from:t,to:n,previousFrom:o,previousTo:s}},Mt=e=>{const[t,n]=C(""),[o,s]=C(""),[r,l]=C(""),[i,a]=C(""),[c,u]=C(""),[g,p]=C(""),[v,y]=C(!1),[B,S]=C(0),[U,X]=C(),V=P=>{const E=U();return E?(E.innerText=P,`${E.offsetWidth}px`):"0"};return me(()=>{const{action:P,delay:E,index:d}=e,x=P.value;if(x===t())return;const j=Math.min(E,Dt)*.9;if(y(!0),S(j),setTimeout(()=>{y(!1)},j),d===0){n(x),s(x),a(""),l(""),p(""),u("0");return}const{from:I,to:R,previousFrom:Z,previousTo:M}=Rt(P);let L=x.slice(I,R);const h=L.at(0)===" ",G=L.at(-1)===" ",W=x.slice(0,I+(h?1:0)),Q=x.slice(R-(G?1:0));L=L.trim();const Y=V(L),H=t().slice(Z,M);s(W),a(L),u(Y),p(H),l(Q),n(x)}),(()=>{var P=jt(),E=P.firstChild,d=E.firstChild,x=d.firstChild,j=x.nextSibling,I=j.nextSibling,R=I.nextSibling,Z=d.nextSibling,M=Z.firstChild,L=M.nextSibling;return m(P,k(Bt,{}),E),mt(X,x),m(j,o),m(I,i),m(R,r),m(M,o),m(L,g),A(h=>{var G=T.container,W=T.paragraph,Q=`--animation-time: ${B()}ms;`,Y=`${T.line} ${e.index===0?T.fadeIn:""}`,H=T.current,ee=T.current,le=`/*--change-width: ${c()};*/`,Le=`${T.current} ${T.change} ${v()?T.fadeIn:""}`,Pe=T.current,Oe=T.line,Ie=T.previous,Ne=`${T.previous} ${T.change} ${v()?T.fadeOut:""}`;return G!==h.e&&f(P,h.e=G),W!==h.t&&f(E,h.t=W),h.a=re(E,Q,h.a),Y!==h.o&&f(d,h.o=Y),H!==h.i&&f(x,h.i=H),ee!==h.n&&f(j,h.n=ee),h.s=re(I,le,h.s),Le!==h.h&&f(I,h.h=Le),Pe!==h.r&&f(R,h.r=Pe),Oe!==h.d&&f(Z,h.d=Oe),Ie!==h.l&&f(M,h.l=Ie),Ne!==h.u&&f(L,h.u=Ne),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),P})()},Qe=(e,t,n)=>Math.min(Math.max(e,t),n),ze=e=>(e-oe)/(be-oe),qt=e=>{const t=ze(e);let n;return t<Lt?n=t**Pt:n=t**(1/Ot),n*(be-oe)+oe},Ee=(e,t)=>{const n=e[t],o=new Date(n.timestamp).getTime(),s=e[t+1];if(!s)return Nt;const r=Qe(new Date(s.timestamp).getTime()-o,oe,be);return qt(r)},Ut=(e,t,n=!0)=>{let o,s=n,r=0;const l=()=>{r>=e.length&&(r=0);const g=e[r],p=Ee(e,r);t(g,p,r),r++,s&&(o=setTimeout(l,p))};return n&&l(),{play:()=>{s||(s=!0,l())},stop:()=>{s&&(clearTimeout(o),s=!1)},isPlaying:()=>s,setIndex:g=>{r=Qe(g,0,e.length-1),s&&(clearTimeout(o),l())},once:l}},Vt="_wrapper_uharw_1",Zt={wrapper:Vt},Gt="_controller_8vr4z_1",Wt="_controllerButton_8vr4z_12",K={controller:Gt,controllerButton:Wt},Yt="_arrow_xpfhi_1",Ht="_down_xpfhi_13",Kt="_up_xpfhi_17",Xt="_left_xpfhi_21",Qt="_right_xpfhi_25",Me={arrow:Yt,down:Ht,up:Kt,left:Xt,right:Qt};var zt=O("<span>\\/");const ne=e=>(()=>{var t=zt();return A(()=>f(t,`${Me.arrow} ${Me[e.orientation]}`)),t})();var Jt=O("<div><button></button><button></button><button>");const en=e=>(()=>{var t=Jt(),n=t.firstChild,o=n.nextSibling,s=o.nextSibling;return n.addEventListener("keypress",r=>r.stopPropagation()),n.$$click=()=>e.onTimestepClick(0),m(n,k(ne,{orientation:"left"})),o.addEventListener("keypress",r=>r.stopPropagation()),ge(o,"click",e.onTogglePlayClick,!0),m(o,()=>e.playing?"pause":"play"),s.addEventListener("keypress",r=>r.stopPropagation()),s.$$click=()=>e.onTimestepClick(e.log.length-1),m(s,k(ne,{orientation:"right"})),A(r=>{var l=K.controller,i=`hoverable-shadow ${K.controllerButton} ${K.toStartButton}`,a=`hoverable ${K.controllerButton}`,c=`hoverable-shadow ${K.controllerButton} ${K.jumpButton} ${K.toEndButton}`;return l!==r.e&&f(t,r.e=l),i!==r.t&&f(n,r.t=i),a!==r.a&&f(o,r.a=a),c!==r.o&&f(s,r.o=c),r},{e:void 0,t:void 0,a:void 0,o:void 0}),t})();ye(["click"]);const tn="_info_qt1pp_1",nn="_infoLeft_qt1pp_17",rn="_infoRight_qt1pp_22",$e={info:tn,infoLeft:nn,infoRight:rn};var on=O("<div><span></span><span>.</span><span>");const sn=e=>(()=>{var t=on(),n=t.firstChild,o=n.nextSibling,s=o.firstChild,r=o.nextSibling;return m(n,()=>e.date),m(o,()=>e.index+1,s),m(r,()=>e.time),A(l=>{var i=$e.info,a=$e.infoLeft,c=$e.infoRight;return i!==l.e&&f(t,l.e=i),a!==l.t&&f(n,l.t=a),c!==l.a&&f(r,l.a=c),l},{e:void 0,t:void 0,a:void 0}),t})(),ln="_progress_19kk8_1",an="_orbContainer_19kk8_25",cn="_orb_19kk8_25",un="_orbContents_19kk8_68",fn="_orbActive_19kk8_97",te={progress:ln,orbContainer:an,orb:cn,orbContents:un,orbActive:fn};var dn=O("<div><div>"),gn=O("<button><div>");const vn=e=>(()=>{var t=dn(),n=t.firstChild;return m(n,k(dt,{get each(){return e.log},children:(o,s)=>(()=>{var r=gn(),l=r.firstChild;return r.$$click=()=>e.onTimestepClick(s),r.addEventListener("keypress",i=>i.stopPropagation()),A(i=>{var a=`${te.orb} ${s===e.index?te.orbActive:""}`,c=`
                --size: ${ze(Ee(e.log,s))*(It-Re)+Re};
              `,u=`${te.orbContents}`;return a!==i.e&&f(r,i.e=a),i.t=re(r,c,i.t),u!==i.a&&f(l,i.a=u),i},{e:void 0,t:void 0,a:void 0}),r})()})),A(o=>{var s=te.progress,r=te.orbContainer;return s!==o.e&&f(t,o.e=s),r!==o.t&&f(n,o.t=r),o},{e:void 0,t:void 0}),t})();ye(["click"]);var hn=O("<div>");const qe=.01,mn=e=>{const t=N(()=>{let a=0;return e.log.map((c,u)=>{const g=a;return a+=Ee(e.log,u),g})}),n=N(()=>t().at(-1)),o=(a,c=!1)=>{const u=t()[a]/n();return c?a===0?qe+u:a===e.log.length-1?u-qe:u:u},s=N(()=>o(e.index)),r=N(()=>e.log[e.index]),l=N(()=>new Date(r().timestamp).toISOString().slice(0,10)),i=N(()=>new Date(r().timestamp).toISOString().slice(11));return(()=>{var a=hn();return m(a,k(sn,{get date(){return l()},get time(){return i()},get index(){return e.index}}),null),m(a,k(vn,{get log(){return e.log},get index(){return e.index},get onTimestepClick(){return e.onTimestepClick}}),null),m(a,k(en,{get onTimestepClick(){return e.onTimestepClick},get onTogglePlayClick(){return e.onTogglePlayClick},get playing(){return e.playing},get log(){return e.log}}),null),A(c=>{var u=Zt.wrapper,g=`
        --progress: ${s()};
        --linear-progress: ${e.index/e.log.length};
        --delay: ${e.delay}ms;
        --orbs: ${e.log.length};
      `;return u!==c.e&&f(a,c.e=u),c.t=re(a,g,c.t),c},{e:void 0,t:void 0}),a})()},pn="_footer_ig0vs_1",yn="_link_ig0vs_12",bn="_rightLink_ig0vs_18",_n="_by_ig0vs_22",J={footer:pn,link:yn,rightLink:bn,by:_n};var kn=O('<footer><button>goo poem (?)</button><span>by</span><a href=https://palmdrop.site/nodes/about target=_blank rel="noreferrer noopener">palmdrop (!)');const $n=e=>(()=>{var t=kn(),n=t.firstChild,o=n.nextSibling,s=o.nextSibling;return n.addEventListener("keypress",r=>r.stopPropagation()),ge(n,"click",e.onToggleInfo,!0),A(r=>{var l=J.footer,i=`hoverable ${J.link} ${J.leftLink}`,a=J.by,c=`hoverable ${J.link} ${J.rightLink}`;return l!==r.e&&f(t,r.e=l),i!==r.t&&f(n,r.t=i),a!==r.a&&f(o,r.a=a),c!==r.o&&f(s,r.o=c),r},{e:void 0,t:void 0,a:void 0,o:void 0}),t})();ye(["click"]);const wn="_container_1rgy8_1",Tn="_open_1rgy8_20",xn="_opening_1rgy8_20",Cn="_info_1rgy8_34",Sn="_heading_1rgy8_43",An="_paragraph_1rgy8_58",En="_closeButton_1rgy8_62",Ln="_link_1rgy8_85",Pn="_alternativeLink_1rgy8_89",On="_section_1rgy8_95",$={container:wn,open:Tn,opening:xn,info:Cn,heading:Sn,paragraph:An,closeButton:En,link:Ln,alternativeLink:Pn,section:On};var In=O('<div><div><button></button><section><h1>goo poem (?)</h1><p>Telephone whisper game,</p><p>a placid association chain,</p><p>or evergreen web experiment.</p></section><section><p><span>by: </span><a href=https://palmdrop.site/ target=_blank rel="noopener noreferrer">PALMDROP !</a></p><p><span>font: </span><a href=https://www.clemencefontaine.fr/page/wonder.html target=_blank rel="noopener noreferrer">WONDERTYPE !</a><br><a href=https://gitlab.com/bonjour-monde/fonderie/syne-typeface target=_blank rel="noopener noreferrer">(and Syne Mono)');const Nn=e=>{const[t,n]=C(e.opened?"open":"closed");let o,s;return me(()=>{e.opened&&["open","opening"].includes(t())||!e.opened&&["closed","closing"].includes(t())||(clearTimeout(s),o=setTimeout(()=>{e.opened?(n("opening"),s=setTimeout(()=>{n("open")},e.transitionTime)):(n("closing"),s=setTimeout(()=>{n("closed")},e.transitionTime))},0))}),Se(()=>{clearTimeout(o),clearTimeout(s)}),k(Xe,{get when(){return e.opened||t()!=="closed"},get children(){var r=In(),l=r.firstChild,i=l.firstChild,a=i.nextSibling,c=a.firstChild,u=c.nextSibling,g=u.nextSibling,p=g.nextSibling,v=a.nextSibling,y=v.firstChild,B=y.firstChild,S=B.nextSibling,U=y.nextSibling,X=U.firstChild,V=X.nextSibling,P=V.nextSibling,E=P.nextSibling;return ge(r,"click",e.onClose,!0),l.$$click=d=>d.stopPropagation(),i.addEventListener("keypress",d=>d.stopPropagation()),ge(i,"click",e.onClose,!0),m(i,k(ne,{orientation:"left"}),null),m(i,k(ne,{orientation:"left"}),null),m(i,k(ne,{orientation:"left"}),null),A(d=>{var x=`${$.container} ${$[t()]}`,j=`
          --transition-time: ${e.transitionTime}ms;
        `,I=$.info,R=`hoverable-shadow ${$.closeButton}`,Z=$.section,M=$.heading,L=$.paragraph,h=$.paragraph,G=$.paragraph,W=$.section,Q=$.paragraph,Y=`hoverable ${$.link}`,H=$.paragraph,ee=`hoverable ${$.link}`,le=`hoverable ${$.link} ${$.alternativeLink}`;return x!==d.e&&f(r,d.e=x),d.t=re(r,j,d.t),I!==d.a&&f(l,d.a=I),R!==d.o&&f(i,d.o=R),Z!==d.i&&f(a,d.i=Z),M!==d.n&&f(c,d.n=M),L!==d.s&&f(u,d.s=L),h!==d.h&&f(g,d.h=h),G!==d.r&&f(p,d.r=G),W!==d.d&&f(v,d.d=W),Q!==d.l&&f(y,d.l=Q),Y!==d.u&&f(S,d.u=Y),H!==d.c&&f(U,d.c=H),ee!==d.w&&f(V,d.w=ee),le!==d.m&&f(E,d.m=le),d},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0}),r}})};ye(["click"]);const Dn="_root_1y78r_1",Fn="_gooPoem_1y78r_22",Bn="_container_1y78r_29",we={root:Dn,gooPoem:Fn,container:Bn};var jn=O("<div><div><div>");const{log:Ue}=_t,Rn=()=>{const[e,t]=C(),[n,o]=C(!0),[s,r]=C(!1),{stop:l,play:i,once:a,setIndex:c}=Ut(Ue,(v,y,B)=>{t({action:v,delay:y,index:B})}),u=v=>{if(c(v),v===e()?.index&&!n()){g();return}n()?(o(!1),l()):a()},g=()=>{o(v=>{const y=!v;return y?i():l(),y})},p=v=>{switch(v.key){case"c":case"x":case"Enter":case"Escape":s()&&r(!1);break;case" ":g()}};return nt(()=>{window.addEventListener("keypress",p);const v=window.location.hash.slice(1),y=isNaN(Number(v))?1:Number(v);y>1&&c(y-1)}),Se(()=>{l(),window.removeEventListener("keypress",p)}),me(()=>{const v=(e()?.index??0)+1;document.title=`(${v}) ${e()?.action?.value.slice(0,25)??"Goo poem"}... | Goo Poem`,window.location.hash=`${v}`}),(()=>{var v=jn(),y=v.firstChild,B=y.firstChild;return m(v,k(Nn,{get opened(){return s()},onClose:()=>r(!1),transitionTime:500}),y),m(B,k(Xe,{get when(){return e()},get fallback(){return"loading..."},get children(){return[k(Mt,ut(()=>e())),k(mn,{get delay(){return e().delay},get index(){return e().index},log:Ue,onTimestepClick:u,onTogglePlayClick:g,get playing(){return n()}}),k($n,{onToggleInfo:()=>r(S=>!S)})]}})),A(S=>{var U=we.root,X=we.gooPoem,V=we.container;return U!==S.e&&f(v,S.e=U),X!==S.t&&f(y,S.t=X),V!==S.a&&f(B,S.a=V),S},{e:void 0,t:void 0,a:void 0}),v})()},Mn=document.getElementById("root");vt(()=>k(Rn,{}),Mn);