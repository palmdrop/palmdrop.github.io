(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Tt(){}function Bn(r,e){for(const t in e)r[t]=e[t];return r}function Qu(r){return r()}function Ko(){return Object.create(null)}function tr(r){r.forEach(Qu)}function _o(r){return typeof r=="function"}function ct(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}let Zr;function Qo(r,e){return Zr||(Zr=document.createElement("a")),Zr.href=e,r===Zr.href}function Sf(r){return Object.keys(r).length===0}function xt(r,e,t,n){if(r){const i=eh(r,e,t,n);return r[0](i)}}function eh(r,e,t,n){return r[1]&&n?Bn(t.ctx.slice(),r[1](n(e))):t.ctx}function bt(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function wt(r,e,t,n,i,s){if(i){const a=eh(e,t,n,s);r.p(a,i)}}function Mt(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Tf(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function el(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function tl(r){return r&&_o(r.destroy)?r.destroy:Tt}function Oe(r,e){r.appendChild(e)}function ge(r,e,t){r.insertBefore(e,t||null)}function pe(r){r.parentNode&&r.parentNode.removeChild(r)}function nr(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function be(r){return document.createElement(r)}function Ef(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function Qt(r){return document.createTextNode(r)}function Ot(){return Qt(" ")}function gt(){return Qt("")}function Af(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function fe(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function Cf(r){return Array.from(r.childNodes)}function cn(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function Rf(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function nl(r,e,t){r.classList[t?"add":"remove"](e)}function Lf(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}class kf{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=Ef(t.nodeName):this.e=be(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)ge(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(pe)}}function mt(r,e){return new r(e)}let Pr;function Rr(r){Pr=r}function Hr(){if(!Pr)throw new Error("Function called outside component initialization");return Pr}function Xs(r){Hr().$$.on_mount.push(r)}function Pf(r){Hr().$$.on_destroy.push(r)}function If(){const r=Hr();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=Lf(e,t,{cancelable:n});return i.slice().forEach(a=>{a.call(r,s)}),!s.defaultPrevented}return!0}}function Df(r,e){return Hr().$$.context.set(r,e),e}function zf(r){return Hr().$$.context.get(r)}const Tr=[],eo=[],ks=[],il=[],Nf=Promise.resolve();let to=!1;function Ff(){to||(to=!0,Nf.then(th))}function no(r){ks.push(r)}const ua=new Set;let Yr=0;function th(){const r=Pr;do{for(;Yr<Tr.length;){const e=Tr[Yr];Yr++,Rr(e),Bf(e.$$)}for(Rr(null),Tr.length=0,Yr=0;eo.length;)eo.pop()();for(let e=0;e<ks.length;e+=1){const t=ks[e];ua.has(t)||(ua.add(t),t())}ks.length=0}while(Tr.length);for(;il.length;)il.pop()();to=!1,ua.clear(),Rr(r)}function Bf(r){if(r.fragment!==null){r.update(),tr(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(no)}}const Ps=new Set;let ci;function ot(){ci={r:0,c:[],p:ci}}function lt(){ci.r||tr(ci.c),ci=ci.p}function Y(r,e){r&&r.i&&(Ps.delete(r),r.i(e))}function te(r,e,t,n){if(r&&r.o){if(Ps.has(r))return;Ps.add(r),ci.c.push(()=>{Ps.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}const Of=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Uf(r,e){te(r,1,1,()=>{e.delete(r.key)})}function Vf(r,e,t,n,i,s,a,o,l,c,u,h){let f=r.length,d=s.length,g=f;const m={};for(;g--;)m[r[g].key]=g;const p=[],y=new Map,v=new Map;for(g=d;g--;){const A=h(i,s,g),k=t(A);let z=a.get(k);z?n&&z.p(A,e):(z=c(k,A),z.c()),y.set(k,p[g]=z),k in m&&v.set(k,Math.abs(g-m[k]))}const E=new Set,T=new Set;function b(A){Y(A,1),A.m(o,u),a.set(A.key,A),u=A.first,d--}for(;f&&d;){const A=p[d-1],k=r[f-1],z=A.key,ie=k.key;A===k?(u=A.first,f--,d--):y.has(ie)?!a.has(z)||E.has(z)?b(A):T.has(ie)?f--:v.get(z)>v.get(ie)?(T.add(z),b(A)):(E.add(ie),f--):(l(k,a),f--)}for(;f--;){const A=r[f];y.has(A.key)||l(A,a)}for(;d;)b(p[d-1]);return p}function ir(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const a=r[s],o=e[s];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)i[l]||(t[l]=o[l],i[l]=1);r[s]=o}else for(const l in a)i[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function rr(r){return typeof r=="object"&&r!==null?r:{}}function Je(r){r&&r.c()}function qe(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||no(()=>{const a=r.$$.on_mount.map(Qu).filter(_o);r.$$.on_destroy?r.$$.on_destroy.push(...a):tr(a),r.$$.on_mount=[]}),s.forEach(no)}function Xe(r,e){const t=r.$$;t.fragment!==null&&(tr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Hf(r,e){r.$$.dirty[0]===-1&&(Tr.push(r),Ff(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function ut(r,e,t,n,i,s,a,o=[-1]){const l=Pr;Rr(r);const c=r.$$={fragment:null,ctx:[],props:s,update:Tt,not_equal:i,bound:Ko(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Ko(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(h,f,...d)=>{const g=d.length?d[0]:f;return c.ctx&&i(c.ctx[h],c.ctx[h]=g)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](g),u&&Hf(r,h)),f}):[],c.update(),u=!0,tr(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const h=Cf(e.target);c.fragment&&c.fragment.l(h),h.forEach(pe)}else c.fragment&&c.fragment.c();e.intro&&Y(r.$$.fragment),qe(r,e.target,e.anchor,e.customElement),th()}Rr(l)}class ht{$destroy(){Xe(this,1),this.$destroy=Tt}$on(e,t){if(!_o(t))return Tt;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Sf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nh="Expected a function",rl=0/0,Gf="[object Symbol]",Wf=/^\s+|\s+$/g,$f=/^[-+]0x[0-9a-f]+$/i,qf=/^0b[01]+$/i,Xf=/^0o[0-7]+$/i,jf=parseInt,Jf=typeof Jn=="object"&&Jn&&Jn.Object===Object&&Jn,Zf=typeof self=="object"&&self&&self.Object===Object&&self,Yf=Jf||Zf||Function("return this")(),Kf=Object.prototype,Qf=Kf.toString,ed=Math.max,td=Math.min,ha=function(){return Yf.Date.now()};function nd(r,e,t){var n,i,s,a,o,l,c=0,u=!1,h=!1,f=!0;if(typeof r!="function")throw new TypeError(nh);e=sl(e)||0,Ns(t)&&(u=!!t.leading,h="maxWait"in t,s=h?ed(sl(t.maxWait)||0,e):s,f="trailing"in t?!!t.trailing:f);function d(A){var k=n,z=i;return n=i=void 0,c=A,a=r.apply(z,k),a}function g(A){return c=A,o=setTimeout(y,e),u?d(A):a}function m(A){var k=A-l,z=A-c,ie=e-k;return h?td(ie,s-z):ie}function p(A){var k=A-l,z=A-c;return l===void 0||k>=e||k<0||h&&z>=s}function y(){var A=ha();if(p(A))return v(A);o=setTimeout(y,m(A))}function v(A){return o=void 0,f&&n?d(A):(n=i=void 0,a)}function E(){o!==void 0&&clearTimeout(o),c=0,n=l=i=o=void 0}function T(){return o===void 0?a:v(ha())}function b(){var A=ha(),k=p(A);if(n=arguments,i=this,l=A,k){if(o===void 0)return g(l);if(h)return o=setTimeout(y,e),d(l)}return o===void 0&&(o=setTimeout(y,e)),a}return b.cancel=E,b.flush=T,b}function id(r,e,t){var n=!0,i=!0;if(typeof r!="function")throw new TypeError(nh);return Ns(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),nd(r,e,{leading:n,maxWait:e,trailing:i})}function Ns(r){var e=typeof r;return!!r&&(e=="object"||e=="function")}function rd(r){return!!r&&typeof r=="object"}function sd(r){return typeof r=="symbol"||rd(r)&&Qf.call(r)==Gf}function sl(r){if(typeof r=="number")return r;if(sd(r))return rl;if(Ns(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Ns(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=r.replace(Wf,"");var t=qf.test(r);return t||Xf.test(r)?jf(r.slice(2),t?2:8):$f.test(r)?rl:+r}var ad=id;function od(){const r=console.warn;console.warn=e=>{e.includes("unknown prop")||e.includes("unexpected slot")||r(e)},Xs(()=>{console.warn=r})}function al(r,e,t){const n=r.slice();return n[18]=e[t],n}function ol(r,e,t){const n=r.slice();return n[18]=e[t],n}function ll(r,e,t){const n=r.slice();return n[10]=e[t],n}function cl(r,e,t){const n=r.slice();return n[13]=e[t],n[15]=t,n}function ul(r,e,t){const n=r.slice();return n[16]=e[t],n[15]=t,n}function hl(r,e,t){const n=r.slice();return n[7]=e[t],n}function ld(r){let e,t,n,i;const s=[fd,hd,ud],a=[];function o(l,c){return l[0]==="table"?0:l[0]==="list"?1:2}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=gt()},m(l,c){a[e].m(l,c),ge(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ot(),te(a[u],1,1,()=>{a[u]=null}),lt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n))},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){a[e].d(l),l&&pe(n)}}}function cd(r){let e,t,n=r[1],i=[];for(let a=0;a<n.length;a+=1)i[a]=yl(hl(r,n,a));const s=a=>te(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=gt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);ge(a,e,o),t=!0},p(a,o){if(o&34){n=a[1];let l;for(l=0;l<n.length;l+=1){const c=hl(a,n,l);i[l]?(i[l].p(c,o),Y(i[l],1)):(i[l]=yl(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(ot(),l=n.length;l<i.length;l+=1)s(l);lt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Y(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)te(i[o]);t=!1},d(a){nr(i,a),a&&pe(e)}}}function ud(r){let e,t,n;const i=[r[6]];var s=r[5][r[0]];function a(o){let l={$$slots:{default:[md]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Bn(l,i[c]);return{props:l}}return s&&(e=mt(s,a(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(o,l){e&&qe(e,o,l),ge(o,t,l),n=!0},p(o,l){const c=l&64?ir(i,[rr(o[6])]):{};if(l&8388706&&(c.$$scope={dirty:l,ctx:o}),s!==(s=o[5][o[0]])){if(e){ot();const u=e;te(u.$$.fragment,1,0,()=>{Xe(u,1)}),lt()}s?(e=mt(s,a(o)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&Y(e.$$.fragment,o),n=!0)},o(o){e&&te(e.$$.fragment,o),n=!1},d(o){o&&pe(t),e&&Xe(e,o)}}}function hd(r){let e,t,n,i;const s=[yd,gd],a=[];function o(l,c){return l[4]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=gt()},m(l,c){a[e].m(l,c),ge(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ot(),te(a[u],1,1,()=>{a[u]=null}),lt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n))},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){a[e].d(l),l&&pe(n)}}}function fd(r){let e,t,n;var i=r[5].table;function s(a){return{props:{$$slots:{default:[Cd]},$$scope:{ctx:a}}}}return i&&(e=mt(i,s(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(a,o){e&&qe(e,a,o),ge(a,t,o),n=!0},p(a,o){const l={};if(o&8388716&&(l.$$scope={dirty:o,ctx:a}),i!==(i=a[5].table)){if(e){ot();const c=e;te(c.$$.fragment,1,0,()=>{Xe(c,1)}),lt()}i?(e=mt(i,s(a)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(a){n||(e&&Y(e.$$.fragment,a),n=!0)},o(a){e&&te(e.$$.fragment,a),n=!1},d(a){a&&pe(t),e&&Xe(e,a)}}}function dd(r){let e=r[6].raw+"",t;return{c(){t=Qt(e)},m(n,i){ge(n,t,i)},p(n,i){i&64&&e!==(e=n[6].raw+"")&&cn(t,e)},i:Tt,o:Tt,d(n){n&&pe(t)}}}function pd(r){let e,t;return e=new mi({props:{tokens:r[1],renderers:r[5]}}),{c(){Je(e.$$.fragment)},m(n,i){qe(e,n,i),t=!0},p(n,i){const s={};i&2&&(s.tokens=n[1]),i&32&&(s.renderers=n[5]),e.$set(s)},i(n){t||(Y(e.$$.fragment,n),t=!0)},o(n){te(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function md(r){let e,t,n,i;const s=[pd,dd],a=[];function o(l,c){return l[1]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=gt()},m(l,c){a[e].m(l,c),ge(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ot(),te(a[u],1,1,()=>{a[u]=null}),lt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n))},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){a[e].d(l),l&&pe(n)}}}function gd(r){let e,t,n;const i=[{ordered:r[4]},r[6]];var s=r[5].list;function a(o){let l={$$slots:{default:[_d]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Bn(l,i[c]);return{props:l}}return s&&(e=mt(s,a(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(o,l){e&&qe(e,o,l),ge(o,t,l),n=!0},p(o,l){const c=l&80?ir(i,[l&16&&{ordered:o[4]},l&64&&rr(o[6])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:o}),s!==(s=o[5].list)){if(e){ot();const u=e;te(u.$$.fragment,1,0,()=>{Xe(u,1)}),lt()}s?(e=mt(s,a(o)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&Y(e.$$.fragment,o),n=!0)},o(o){e&&te(e.$$.fragment,o),n=!1},d(o){o&&pe(t),e&&Xe(e,o)}}}function yd(r){let e,t,n;const i=[{ordered:r[4]},r[6]];var s=r[5].list;function a(o){let l={$$slots:{default:[bd]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Bn(l,i[c]);return{props:l}}return s&&(e=mt(s,a(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(o,l){e&&qe(e,o,l),ge(o,t,l),n=!0},p(o,l){const c=l&80?ir(i,[l&16&&{ordered:o[4]},l&64&&rr(o[6])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:o}),s!==(s=o[5].list)){if(e){ot();const u=e;te(u.$$.fragment,1,0,()=>{Xe(u,1)}),lt()}s?(e=mt(s,a(o)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&Y(e.$$.fragment,o),n=!0)},o(o){e&&te(e.$$.fragment,o),n=!1},d(o){o&&pe(t),e&&Xe(e,o)}}}function vd(r){let e,t,n;return e=new mi({props:{tokens:r[18].tokens,renderers:r[5]}}),{c(){Je(e.$$.fragment),t=Ot()},m(i,s){qe(e,i,s),ge(i,t,s),n=!0},p(i,s){const a={};s&64&&(a.tokens=i[18].tokens),s&32&&(a.renderers=i[5]),e.$set(a)},i(i){n||(Y(e.$$.fragment,i),n=!0)},o(i){te(e.$$.fragment,i),n=!1},d(i){Xe(e,i),i&&pe(t)}}}function fl(r){let e,t,n;const i=[r[18]];var s=r[5].unorderedlistitem||r[5].listitem;function a(o){let l={$$slots:{default:[vd]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Bn(l,i[c]);return{props:l}}return s&&(e=mt(s,a(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(o,l){e&&qe(e,o,l),ge(o,t,l),n=!0},p(o,l){const c=l&64?ir(i,[rr(o[18])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:o}),s!==(s=o[5].unorderedlistitem||o[5].listitem)){if(e){ot();const u=e;te(u.$$.fragment,1,0,()=>{Xe(u,1)}),lt()}s?(e=mt(s,a(o)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&Y(e.$$.fragment,o),n=!0)},o(o){e&&te(e.$$.fragment,o),n=!1},d(o){o&&pe(t),e&&Xe(e,o)}}}function _d(r){let e,t,n=r[6].items,i=[];for(let a=0;a<n.length;a+=1)i[a]=fl(al(r,n,a));const s=a=>te(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=gt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);ge(a,e,o),t=!0},p(a,o){if(o&96){n=a[6].items;let l;for(l=0;l<n.length;l+=1){const c=al(a,n,l);i[l]?(i[l].p(c,o),Y(i[l],1)):(i[l]=fl(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(ot(),l=n.length;l<i.length;l+=1)s(l);lt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Y(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)te(i[o]);t=!1},d(a){nr(i,a),a&&pe(e)}}}function xd(r){let e,t,n;return e=new mi({props:{tokens:r[18].tokens,renderers:r[5]}}),{c(){Je(e.$$.fragment),t=Ot()},m(i,s){qe(e,i,s),ge(i,t,s),n=!0},p(i,s){const a={};s&64&&(a.tokens=i[18].tokens),s&32&&(a.renderers=i[5]),e.$set(a)},i(i){n||(Y(e.$$.fragment,i),n=!0)},o(i){te(e.$$.fragment,i),n=!1},d(i){Xe(e,i),i&&pe(t)}}}function dl(r){let e,t,n;const i=[r[18]];var s=r[5].orderedlistitem||r[5].listitem;function a(o){let l={$$slots:{default:[xd]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Bn(l,i[c]);return{props:l}}return s&&(e=mt(s,a(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(o,l){e&&qe(e,o,l),ge(o,t,l),n=!0},p(o,l){const c=l&64?ir(i,[rr(o[18])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:o}),s!==(s=o[5].orderedlistitem||o[5].listitem)){if(e){ot();const u=e;te(u.$$.fragment,1,0,()=>{Xe(u,1)}),lt()}s?(e=mt(s,a(o)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(o){n||(e&&Y(e.$$.fragment,o),n=!0)},o(o){e&&te(e.$$.fragment,o),n=!1},d(o){o&&pe(t),e&&Xe(e,o)}}}function bd(r){let e,t,n=r[6].items,i=[];for(let a=0;a<n.length;a+=1)i[a]=dl(ol(r,n,a));const s=a=>te(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=gt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);ge(a,e,o),t=!0},p(a,o){if(o&96){n=a[6].items;let l;for(l=0;l<n.length;l+=1){const c=ol(a,n,l);i[l]?(i[l].p(c,o),Y(i[l],1)):(i[l]=dl(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(ot(),l=n.length;l<i.length;l+=1)s(l);lt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Y(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)te(i[o]);t=!1},d(a){nr(i,a),a&&pe(e)}}}function wd(r){let e,t,n;return e=new mi({props:{tokens:r[16].tokens,renderers:r[5]}}),{c(){Je(e.$$.fragment),t=Ot()},m(i,s){qe(e,i,s),ge(i,t,s),n=!0},p(i,s){const a={};s&4&&(a.tokens=i[16].tokens),s&32&&(a.renderers=i[5]),e.$set(a)},i(i){n||(Y(e.$$.fragment,i),n=!0)},o(i){te(e.$$.fragment,i),n=!1},d(i){Xe(e,i),i&&pe(t)}}}function pl(r){let e,t,n;var i=r[5].tablecell;function s(a){return{props:{header:!0,align:a[6].align[a[15]]||"center",$$slots:{default:[wd]},$$scope:{ctx:a}}}}return i&&(e=mt(i,s(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(a,o){e&&qe(e,a,o),ge(a,t,o),n=!0},p(a,o){const l={};if(o&64&&(l.align=a[6].align[a[15]]||"center"),o&8388644&&(l.$$scope={dirty:o,ctx:a}),i!==(i=a[5].tablecell)){if(e){ot();const c=e;te(c.$$.fragment,1,0,()=>{Xe(c,1)}),lt()}i?(e=mt(i,s(a)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(a){n||(e&&Y(e.$$.fragment,a),n=!0)},o(a){e&&te(e.$$.fragment,a),n=!1},d(a){a&&pe(t),e&&Xe(e,a)}}}function Md(r){let e,t,n=r[2],i=[];for(let a=0;a<n.length;a+=1)i[a]=pl(ul(r,n,a));const s=a=>te(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=gt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);ge(a,e,o),t=!0},p(a,o){if(o&100){n=a[2];let l;for(l=0;l<n.length;l+=1){const c=ul(a,n,l);i[l]?(i[l].p(c,o),Y(i[l],1)):(i[l]=pl(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(ot(),l=n.length;l<i.length;l+=1)s(l);lt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Y(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)te(i[o]);t=!1},d(a){nr(i,a),a&&pe(e)}}}function Sd(r){let e,t,n;var i=r[5].tablerow;function s(a){return{props:{$$slots:{default:[Md]},$$scope:{ctx:a}}}}return i&&(e=mt(i,s(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(a,o){e&&qe(e,a,o),ge(a,t,o),n=!0},p(a,o){const l={};if(o&8388708&&(l.$$scope={dirty:o,ctx:a}),i!==(i=a[5].tablerow)){if(e){ot();const c=e;te(c.$$.fragment,1,0,()=>{Xe(c,1)}),lt()}i?(e=mt(i,s(a)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(a){n||(e&&Y(e.$$.fragment,a),n=!0)},o(a){e&&te(e.$$.fragment,a),n=!1},d(a){a&&pe(t),e&&Xe(e,a)}}}function Td(r){let e,t;return e=new mi({props:{tokens:r[13].tokens,renderers:r[5]}}),{c(){Je(e.$$.fragment)},m(n,i){qe(e,n,i),t=!0},p(n,i){const s={};i&8&&(s.tokens=n[13].tokens),i&32&&(s.renderers=n[5]),e.$set(s)},i(n){t||(Y(e.$$.fragment,n),t=!0)},o(n){te(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function ml(r){let e,t,n;var i=r[5].tablecell;function s(a){return{props:{header:!1,align:a[6].align[a[15]]||"center",$$slots:{default:[Td]},$$scope:{ctx:a}}}}return i&&(e=mt(i,s(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(a,o){e&&qe(e,a,o),ge(a,t,o),n=!0},p(a,o){const l={};if(o&64&&(l.align=a[6].align[a[15]]||"center"),o&8388648&&(l.$$scope={dirty:o,ctx:a}),i!==(i=a[5].tablecell)){if(e){ot();const c=e;te(c.$$.fragment,1,0,()=>{Xe(c,1)}),lt()}i?(e=mt(i,s(a)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(a){n||(e&&Y(e.$$.fragment,a),n=!0)},o(a){e&&te(e.$$.fragment,a),n=!1},d(a){a&&pe(t),e&&Xe(e,a)}}}function Ed(r){let e,t,n=r[10],i=[];for(let a=0;a<n.length;a+=1)i[a]=ml(cl(r,n,a));const s=a=>te(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ot()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);ge(a,e,o),t=!0},p(a,o){if(o&104){n=a[10];let l;for(l=0;l<n.length;l+=1){const c=cl(a,n,l);i[l]?(i[l].p(c,o),Y(i[l],1)):(i[l]=ml(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(ot(),l=n.length;l<i.length;l+=1)s(l);lt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Y(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)te(i[o]);t=!1},d(a){nr(i,a),a&&pe(e)}}}function gl(r){let e,t,n;var i=r[5].tablerow;function s(a){return{props:{$$slots:{default:[Ed]},$$scope:{ctx:a}}}}return i&&(e=mt(i,s(r))),{c(){e&&Je(e.$$.fragment),t=gt()},m(a,o){e&&qe(e,a,o),ge(a,t,o),n=!0},p(a,o){const l={};if(o&8388712&&(l.$$scope={dirty:o,ctx:a}),i!==(i=a[5].tablerow)){if(e){ot();const c=e;te(c.$$.fragment,1,0,()=>{Xe(c,1)}),lt()}i?(e=mt(i,s(a)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else i&&e.$set(l)},i(a){n||(e&&Y(e.$$.fragment,a),n=!0)},o(a){e&&te(e.$$.fragment,a),n=!1},d(a){a&&pe(t),e&&Xe(e,a)}}}function Ad(r){let e,t,n=r[3],i=[];for(let a=0;a<n.length;a+=1)i[a]=gl(ll(r,n,a));const s=a=>te(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=gt()},m(a,o){for(let l=0;l<i.length;l+=1)i[l].m(a,o);ge(a,e,o),t=!0},p(a,o){if(o&104){n=a[3];let l;for(l=0;l<n.length;l+=1){const c=ll(a,n,l);i[l]?(i[l].p(c,o),Y(i[l],1)):(i[l]=gl(c),i[l].c(),Y(i[l],1),i[l].m(e.parentNode,e))}for(ot(),l=n.length;l<i.length;l+=1)s(l);lt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)Y(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)te(i[o]);t=!1},d(a){nr(i,a),a&&pe(e)}}}function Cd(r){let e,t,n,i,s;var a=r[5].tablehead;function o(u){return{props:{$$slots:{default:[Sd]},$$scope:{ctx:u}}}}a&&(e=mt(a,o(r)));var l=r[5].tablebody;function c(u){return{props:{$$slots:{default:[Ad]},$$scope:{ctx:u}}}}return l&&(n=mt(l,c(r))),{c(){e&&Je(e.$$.fragment),t=Ot(),n&&Je(n.$$.fragment),i=gt()},m(u,h){e&&qe(e,u,h),ge(u,t,h),n&&qe(n,u,h),ge(u,i,h),s=!0},p(u,h){const f={};if(h&8388708&&(f.$$scope={dirty:h,ctx:u}),a!==(a=u[5].tablehead)){if(e){ot();const g=e;te(g.$$.fragment,1,0,()=>{Xe(g,1)}),lt()}a?(e=mt(a,o(u)),Je(e.$$.fragment),Y(e.$$.fragment,1),qe(e,t.parentNode,t)):e=null}else a&&e.$set(f);const d={};if(h&8388712&&(d.$$scope={dirty:h,ctx:u}),l!==(l=u[5].tablebody)){if(n){ot();const g=n;te(g.$$.fragment,1,0,()=>{Xe(g,1)}),lt()}l?(n=mt(l,c(u)),Je(n.$$.fragment),Y(n.$$.fragment,1),qe(n,i.parentNode,i)):n=null}else l&&n.$set(d)},i(u){s||(e&&Y(e.$$.fragment,u),n&&Y(n.$$.fragment,u),s=!0)},o(u){e&&te(e.$$.fragment,u),n&&te(n.$$.fragment,u),s=!1},d(u){e&&Xe(e,u),u&&pe(t),u&&pe(i),n&&Xe(n,u)}}}function yl(r){let e,t;const n=[r[7],{renderers:r[5]}];let i={};for(let s=0;s<n.length;s+=1)i=Bn(i,n[s]);return e=new mi({props:i}),{c(){Je(e.$$.fragment)},m(s,a){qe(e,s,a),t=!0},p(s,a){const o=a&34?ir(n,[a&2&&rr(s[7]),a&32&&{renderers:s[5]}]):{};e.$set(o)},i(s){t||(Y(e.$$.fragment,s),t=!0)},o(s){te(e.$$.fragment,s),t=!1},d(s){Xe(e,s)}}}function Rd(r){let e,t,n,i;const s=[cd,ld],a=[];function o(l,c){return l[0]?l[5][l[0]]?1:-1:0}return~(e=o(r))&&(t=a[e]=s[e](r)),{c(){t&&t.c(),n=gt()},m(l,c){~e&&a[e].m(l,c),ge(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(t&&(ot(),te(a[u],1,1,()=>{a[u]=null}),lt()),~e?(t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n)):t=null)},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){~e&&a[e].d(l),l&&pe(n)}}}function Ld(r,e,t){const n=["type","tokens","header","rows","ordered","renderers"];let i=el(e,n),{type:s=void 0}=e,{tokens:a=void 0}=e,{header:o=void 0}=e,{rows:l=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return od(),r.$$set=h=>{e=Bn(Bn({},e),Tf(h)),t(6,i=el(e,n)),"type"in h&&t(0,s=h.type),"tokens"in h&&t(1,a=h.tokens),"header"in h&&t(2,o=h.header),"rows"in h&&t(3,l=h.rows),"ordered"in h&&t(4,c=h.ordered),"renderers"in h&&t(5,u=h.renderers)},[s,a,o,l,c,u,i]}let mi=class extends ht{constructor(e){super(),ut(this,e,Ld,Rd,ct,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}};function ih(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let sr=ih();function kd(r){sr=r}const rh=/[&<>"']/,Pd=new RegExp(rh.source,"g"),sh=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Id=new RegExp(sh.source,"g"),Dd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vl=r=>Dd[r];function Bt(r,e){if(e){if(rh.test(r))return r.replace(Pd,vl)}else if(sh.test(r))return r.replace(Id,vl);return r}const zd=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function ah(r){return r.replace(zd,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Nd=/(^|[^\[])\^/g;function at(r,e){r=typeof r=="string"?r:r.source,e=e||"";const t={replace:(n,i)=>(i=i.source||i,i=i.replace(Nd,"$1"),r=r.replace(n,i),t),getRegex:()=>new RegExp(r,e)};return t}const Fd=/[^\w:]/g,Bd=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function _l(r,e,t){if(r){let n;try{n=decodeURIComponent(ah(t)).replace(Fd,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}e&&!Bd.test(t)&&(t=Hd(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Kr={},Od=/^[^:]+:\/*[^/]*$/,Ud=/^([^:]+:)[\s\S]*$/,Vd=/^([^:]+:\/*[^/]*)[\s\S]*$/;function Hd(r,e){Kr[" "+r]||(Od.test(r)?Kr[" "+r]=r+"/":Kr[" "+r]=Is(r,"/",!0)),r=Kr[" "+r];const t=r.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:r.replace(Ud,"$1")+e:e.charAt(0)==="/"?t?e:r.replace(Vd,"$1")+e:r+e}const Fs={exec:function(){}};function dn(r){let e=1,t,n;for(;e<arguments.length;e++){t=arguments[e];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}function xl(r,e){const t=r.replace(/\|/g,(s,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/);let i=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;i<n.length;i++)n[i]=n[i].trim().replace(/\\\|/g,"|");return n}function Is(r,e,t){const n=r.length;if(n===0)return"";let i=0;for(;i<n;){const s=r.charAt(n-i-1);if(s===e&&!t)i++;else if(s!==e&&t)i++;else break}return r.slice(0,n-i)}function Gd(r,e){if(r.indexOf(e[1])===-1)return-1;const t=r.length;let n=0,i=0;for(;i<t;i++)if(r[i]==="\\")i++;else if(r[i]===e[0])n++;else if(r[i]===e[1]&&(n--,n<0))return i;return-1}function oh(r){r&&r.sanitize&&!r.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function bl(r,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=r),e>>=1,r+=r;return t+r}function wl(r,e,t,n){const i=e.href,s=e.title?Bt(e.title):null,a=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;const o={type:"link",raw:t,href:i,title:s,text:a,tokens:n.inlineTokens(a)};return n.state.inLink=!1,o}return{type:"image",raw:t,href:i,title:s,text:Bt(a)}}function Wd(r,e){const t=r.match(/^(\s+)(?:```)/);if(t===null)return e;const n=t[1];return e.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[a]=s;return a.length>=n.length?i.slice(n.length):i}).join(`
`)}class xo{constructor(e){this.options=e||sr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Is(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=Wd(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=Is(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,s,a,o,l,c,u,h,f,d,g,m=t[1].trim();const p=m.length>1,y={type:"list",raw:"",ordered:p,start:p?+m.slice(0,-1):"",loose:!1,items:[]};m=p?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=p?m:"[*+-]");const v=new RegExp(`^( {0,3}${m})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(g=!1,!(!(t=v.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,T=>" ".repeat(3*T.length)),h=e.split(`
`,1)[0],this.options.pedantic?(a=2,d=u.trimLeft()):(a=t[2].search(/[^ ]/),a=a>4?1:a,d=u.slice(a),a+=t[1].length),l=!1,!u&&/^ *$/.test(h)&&(n+=h+`
`,e=e.substring(h.length+1),g=!0),!g){const T=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),b=new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),k=new RegExp(`^ {0,${Math.min(3,a-1)}}#`);for(;e&&(f=e.split(`
`,1)[0],h=f,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(A.test(h)||k.test(h)||T.test(h)||b.test(e)));){if(h.search(/[^ ]/)>=a||!h.trim())d+=`
`+h.slice(a);else{if(l||u.search(/[^ ]/)>=4||A.test(u)||k.test(u)||b.test(u))break;d+=`
`+h}!l&&!h.trim()&&(l=!0),n+=f+`
`,e=e.substring(f.length+1),u=h.slice(a)}}y.loose||(c?y.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(d),i&&(s=i[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),y.items.push({type:"list_item",raw:n,task:!!i,checked:s,loose:!1,text:d}),y.raw+=n}y.items[y.items.length-1].raw=n.trimRight(),y.items[y.items.length-1].text=d.trimRight(),y.raw=y.raw.trimRight();const E=y.items.length;for(o=0;o<E;o++)if(this.lexer.state.top=!1,y.items[o].tokens=this.lexer.blockTokens(y.items[o].text,[]),!y.loose){const T=y.items[o].tokens.filter(A=>A.type==="space"),b=T.length>0&&T.some(A=>/\n.*\n/.test(A.raw));y.loose=b}if(y.loose)for(o=0;o<E;o++)y.items[o].loose=!0;return y}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):Bt(t[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:xl(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,s,a,o,l;for(s=0;s<i;s++)/^ *-+: *$/.test(n.align[s])?n.align[s]="right":/^ *:-+: *$/.test(n.align[s])?n.align[s]="center":/^ *:-+ *$/.test(n.align[s])?n.align[s]="left":n.align[s]=null;for(i=n.rows.length,s=0;s<i;s++)n.rows[s]=xl(n.rows[s],n.header.length).map(c=>({text:c}));for(i=n.header.length,a=0;a<i;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(i=n.rows.length,a=0;a<i;a++)for(l=n.rows[a],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:Bt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Bt(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const a=Is(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=Gd(t[2],"()");if(a>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let i=t[2],s="";if(this.options.pedantic){const a=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);a&&(i=a[1],s=a[3])}else s=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),wl(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const s=n[0].charAt(0);return{type:"text",raw:s,text:s}}return wl(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const s=i[1]||i[2]||"";if(!s||s&&(n===""||this.rules.inline.punctuation.exec(n))){const a=i[0].length-1;let o,l,c=a,u=0;const h=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+a);(i=h.exec(t))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=o.length,i[3]||i[4]){c+=l;continue}else if((i[5]||i[6])&&a%3&&!((a+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const f=e.slice(0,a+i.index+(i[0].length-o.length)+l);if(Math.min(a,l)%2){const g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}const d=f.slice(2,-2);return{type:"strong",raw:f,text:d,tokens:this.lexer.inlineTokens(d)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),s=/^ /.test(n)&&/ $/.test(n);return i&&s&&(n=n.substring(1,n.length-1)),n=Bt(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,s;return n[2]==="@"?(i=Bt(this.options.mangle?t(n[1]):n[1]),s="mailto:"+i):(i=Bt(n[1]),s=i),{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,s;if(n[2]==="@")i=Bt(this.options.mangle?t(n[0]):n[0]),s="mailto:"+i;else{let a;do a=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(a!==n[0]);i=Bt(n[0]),n[1]==="www."?s="http://"+n[0]:s=n[0]}return{type:"link",raw:n[0],text:i,href:s,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Bt(n[0]):n[0]:i=Bt(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const we={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Fs,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};we._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;we._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;we.def=at(we.def).replace("label",we._label).replace("title",we._title).getRegex();we.bullet=/(?:[*+-]|\d{1,9}[.)])/;we.listItemStart=at(/^( *)(bull) */).replace("bull",we.bullet).getRegex();we.list=at(we.list).replace(/bull/g,we.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+we.def.source+")").getRegex();we._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";we._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;we.html=at(we.html,"i").replace("comment",we._comment).replace("tag",we._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();we.paragraph=at(we._paragraph).replace("hr",we.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",we._tag).getRegex();we.blockquote=at(we.blockquote).replace("paragraph",we.paragraph).getRegex();we.normal=dn({},we);we.gfm=dn({},we.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});we.gfm.table=at(we.gfm.table).replace("hr",we.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",we._tag).getRegex();we.gfm.paragraph=at(we._paragraph).replace("hr",we.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",we.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",we._tag).getRegex();we.pedantic=dn({},we.normal,{html:at(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",we._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Fs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:at(we.normal._paragraph).replace("hr",we.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",we.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const de={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Fs,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Fs,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};de._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";de.punctuation=at(de.punctuation).replace(/punctuation/g,de._punctuation).getRegex();de.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;de.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;de._comment=at(we._comment).replace("(?:-->|$)","-->").getRegex();de.emStrong.lDelim=at(de.emStrong.lDelim).replace(/punct/g,de._punctuation).getRegex();de.emStrong.rDelimAst=at(de.emStrong.rDelimAst,"g").replace(/punct/g,de._punctuation).getRegex();de.emStrong.rDelimUnd=at(de.emStrong.rDelimUnd,"g").replace(/punct/g,de._punctuation).getRegex();de._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;de._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;de._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;de.autolink=at(de.autolink).replace("scheme",de._scheme).replace("email",de._email).getRegex();de._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;de.tag=at(de.tag).replace("comment",de._comment).replace("attribute",de._attribute).getRegex();de._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;de._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;de._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;de.link=at(de.link).replace("label",de._label).replace("href",de._href).replace("title",de._title).getRegex();de.reflink=at(de.reflink).replace("label",de._label).replace("ref",we._label).getRegex();de.nolink=at(de.nolink).replace("ref",we._label).getRegex();de.reflinkSearch=at(de.reflinkSearch,"g").replace("reflink",de.reflink).replace("nolink",de.nolink).getRegex();de.normal=dn({},de);de.pedantic=dn({},de.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:at(/^!?\[(label)\]\((.*?)\)/).replace("label",de._label).getRegex(),reflink:at(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",de._label).getRegex()});de.gfm=dn({},de.normal,{escape:at(de.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});de.gfm.url=at(de.gfm.url,"i").replace("email",de.gfm._extended_email).getRegex();de.breaks=dn({},de.gfm,{br:at(de.br).replace("{2,}","*").getRegex(),text:at(de.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function $d(r){return r.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ml(r){let e="",t,n;const i=r.length;for(t=0;t<i;t++)n=r.charCodeAt(t),Math.random()>.5&&(n="x"+n.toString(16)),e+="&#"+n+";";return e}class Tn{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||sr,this.options.tokenizer=this.options.tokenizer||new xo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:we.normal,inline:de.normal};this.options.pedantic?(t.block=we.pedantic,t.inline=de.pedantic):this.options.gfm&&(t.block=we.gfm,this.options.breaks?t.inline=de.breaks:t.inline=de.gfm),this.tokenizer.rules=t}static get rules(){return{block:we,inline:de}}static lex(e,t){return new Tn(t).lex(e)}static lexInline(e,t){return new Tn(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(o,l,c)=>l+"    ".repeat(c.length));let n,i,s,a;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(n=o.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(s=e.substring(0,o+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){i=t[t.length-1],a&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),a=s.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const o="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,s,a=e,o,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(a))!=null;)u.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(a=a.slice(0,o.index)+"["+bl("a",o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(a))!=null;)a=a.slice(0,o.index)+"["+bl("a",o[0].length-2)+"]"+a.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.escapedEmSt.exec(a))!=null;)a=a.slice(0,o.index+o[0].length-2)+"++"+a.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,a,c)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,Ml)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,Ml))){e=e.substring(n.raw.length),t.push(n);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let f;this.options.extensions.startInline.forEach(function(d){f=d.call({lexer:this},h),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(s,$d)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(c=n.raw.slice(-1)),l=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class bo{constructor(e){this.options=e||sr}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,i);s!=null&&s!==e&&(n=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+Bt(i)+'">'+(n?e:Bt(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:Bt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,n,i){if(this.options.headerIds){const s=this.options.headerPrefix+i.slug(n);return`<h${t} id="${s}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul",s=t&&n!==1?' start="'+n+'"':"";return"<"+i+s+`>
`+e+"</"+i+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=_l(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=_l(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}}class lh{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}class wo{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}}class Mn{constructor(e){this.options=e||sr,this.options.renderer=this.options.renderer||new bo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new lh,this.slugger=new wo}static parse(e,t){return new Mn(t).parse(e)}static parseInline(e,t){return new Mn(t).parseInline(e)}parse(e,t=!0){let n="",i,s,a,o,l,c,u,h,f,d,g,m,p,y,v,E,T,b,A;const k=e.length;for(i=0;i<k;i++){if(d=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(A=this.options.extensions.renderers[d.type].call({parser:this},d),A!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){n+=A||"";continue}switch(d.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(d.tokens),d.depth,ah(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",u="",o=d.header.length,s=0;s<o;s++)u+=this.renderer.tablecell(this.parseInline(d.header[s].tokens),{header:!0,align:d.align[s]});for(h+=this.renderer.tablerow(u),f="",o=d.rows.length,s=0;s<o;s++){for(c=d.rows[s],u="",l=c.length,a=0;a<l;a++)u+=this.renderer.tablecell(this.parseInline(c[a].tokens),{header:!1,align:d.align[a]});f+=this.renderer.tablerow(u)}n+=this.renderer.table(h,f);continue}case"blockquote":{f=this.parse(d.tokens),n+=this.renderer.blockquote(f);continue}case"list":{for(g=d.ordered,m=d.start,p=d.loose,o=d.items.length,f="",s=0;s<o;s++)v=d.items[s],E=v.checked,T=v.task,y="",v.task&&(b=this.renderer.checkbox(E),p?v.tokens.length>0&&v.tokens[0].type==="paragraph"?(v.tokens[0].text=b+" "+v.tokens[0].text,v.tokens[0].tokens&&v.tokens[0].tokens.length>0&&v.tokens[0].tokens[0].type==="text"&&(v.tokens[0].tokens[0].text=b+" "+v.tokens[0].tokens[0].text)):v.tokens.unshift({type:"text",text:b}):y+=b),y+=this.parse(v.tokens,p),f+=this.renderer.listitem(y,T,E);n+=this.renderer.list(f,g,m);continue}case"html":{n+=this.renderer.html(d.text);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(f=d.tokens?this.parseInline(d.tokens):d.text;i+1<k&&e[i+1].type==="text";)d=e[++i],f+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);n+=t?this.renderer.paragraph(f):f;continue}default:{const z='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(z);return}else throw new Error(z)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,s,a;const o=e.length;for(i=0;i<o;i++){if(s=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(a=this.options.extensions.renderers[s.type].call({parser:this},s),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){n+=a||"";continue}switch(s.type){case"escape":{n+=t.text(s.text);break}case"html":{n+=t.html(s.text);break}case"link":{n+=t.link(s.href,s.title,this.parseInline(s.tokens,t));break}case"image":{n+=t.image(s.href,s.title,s.text);break}case"strong":{n+=t.strong(this.parseInline(s.tokens,t));break}case"em":{n+=t.em(this.parseInline(s.tokens,t));break}case"codespan":{n+=t.codespan(s.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(s.tokens,t));break}case"text":{n+=t.text(s.text);break}default:{const l='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return n}}function Ee(r,e,t){if(typeof r>"u"||r===null)throw new Error("marked(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");if(typeof e=="function"&&(t=e,e=null),e=dn({},Ee.defaults,e||{}),oh(e),t){const i=e.highlight;let s;try{s=Tn.lex(r,e)}catch(l){return t(l)}const a=function(l){let c;if(!l)try{e.walkTokens&&Ee.walkTokens(s,e.walkTokens),c=Mn.parse(s,e)}catch(u){l=u}return e.highlight=i,l?t(l):t(null,c)};if(!i||i.length<3||(delete e.highlight,!s.length))return a();let o=0;Ee.walkTokens(s,function(l){l.type==="code"&&(o++,setTimeout(()=>{i(l.text,l.lang,function(c,u){if(c)return a(c);u!=null&&u!==l.text&&(l.text=u,l.escaped=!0),o--,o===0&&a()})},0))}),o===0&&a();return}function n(i){if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Bt(i.message+"",!0)+"</pre>";throw i}try{const i=Tn.lex(r,e);if(e.walkTokens){if(e.async)return Promise.all(Ee.walkTokens(i,e.walkTokens)).then(()=>Mn.parse(i,e)).catch(n);Ee.walkTokens(i,e.walkTokens)}return Mn.parse(i,e)}catch(i){n(i)}}Ee.options=Ee.setOptions=function(r){return dn(Ee.defaults,r),kd(Ee.defaults),Ee};Ee.getDefaults=ih;Ee.defaults=sr;Ee.use=function(...r){const e=Ee.defaults.extensions||{renderers:{},childTokens:{}};r.forEach(t=>{const n=dn({},t);if(n.async=Ee.defaults.async||n.async,t.extensions&&(t.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const s=e.renderers[i.name];s?e.renderers[i.name]=function(...a){let o=i.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)}),n.extensions=e),t.renderer){const i=Ee.defaults.renderer||new bo;for(const s in t.renderer){const a=i[s];i[s]=(...o)=>{let l=t.renderer[s].apply(i,o);return l===!1&&(l=a.apply(i,o)),l}}n.renderer=i}if(t.tokenizer){const i=Ee.defaults.tokenizer||new xo;for(const s in t.tokenizer){const a=i[s];i[s]=(...o)=>{let l=t.tokenizer[s].apply(i,o);return l===!1&&(l=a.apply(i,o)),l}}n.tokenizer=i}if(t.walkTokens){const i=Ee.defaults.walkTokens;n.walkTokens=function(s){let a=[];return a.push(t.walkTokens.call(this,s)),i&&(a=a.concat(i.call(this,s))),a}}Ee.setOptions(n)})};Ee.walkTokens=function(r,e){let t=[];for(const n of r)switch(t=t.concat(e.call(Ee,n)),n.type){case"table":{for(const i of n.header)t=t.concat(Ee.walkTokens(i.tokens,e));for(const i of n.rows)for(const s of i)t=t.concat(Ee.walkTokens(s.tokens,e));break}case"list":{t=t.concat(Ee.walkTokens(n.items,e));break}default:Ee.defaults.extensions&&Ee.defaults.extensions.childTokens&&Ee.defaults.extensions.childTokens[n.type]?Ee.defaults.extensions.childTokens[n.type].forEach(function(i){t=t.concat(Ee.walkTokens(n[i],e))}):n.tokens&&(t=t.concat(Ee.walkTokens(n.tokens,e)))}return t};Ee.parseInline=function(r,e){if(typeof r>"u"||r===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof r!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected");e=dn({},Ee.defaults,e||{}),oh(e);try{const t=Tn.lexInline(r,e);return e.walkTokens&&Ee.walkTokens(t,e.walkTokens),Mn.parseInline(t,e)}catch(t){if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e.silent)return"<p>An error occurred:</p><pre>"+Bt(t.message+"",!0)+"</pre>";throw t}};Ee.Parser=Mn;Ee.parser=Mn.parse;Ee.Renderer=bo;Ee.TextRenderer=lh;Ee.Lexer=Tn;Ee.lexer=Tn.lex;Ee.Tokenizer=xo;Ee.Slugger=wo;Ee.parse=Ee;Ee.options;Ee.setOptions;Ee.use;Ee.walkTokens;Ee.parseInline;Mn.parse;Tn.lex;const ch={};function qd(r){let e;return{c(){e=Qt(r[1])},m(t,n){ge(t,e,n)},p(t,n){n&2&&cn(e,t[1])},i:Tt,o:Tt,d(t){t&&pe(e)}}}function Xd(r){let e,t;const n=r[5].default,i=xt(n,r,r[4],null);return{c(){e=be("h6"),i&&i.c(),fe(e,"id",r[2])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&16)&&wt(i,n,s,s[4],t?bt(n,s[4],a,null):Mt(s[4]),null),(!t||a&4)&&fe(e,"id",s[2])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function jd(r){let e,t;const n=r[5].default,i=xt(n,r,r[4],null);return{c(){e=be("h5"),i&&i.c(),fe(e,"id",r[2])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&16)&&wt(i,n,s,s[4],t?bt(n,s[4],a,null):Mt(s[4]),null),(!t||a&4)&&fe(e,"id",s[2])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Jd(r){let e,t;const n=r[5].default,i=xt(n,r,r[4],null);return{c(){e=be("h4"),i&&i.c(),fe(e,"id",r[2])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&16)&&wt(i,n,s,s[4],t?bt(n,s[4],a,null):Mt(s[4]),null),(!t||a&4)&&fe(e,"id",s[2])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Zd(r){let e,t;const n=r[5].default,i=xt(n,r,r[4],null);return{c(){e=be("h3"),i&&i.c(),fe(e,"id",r[2])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&16)&&wt(i,n,s,s[4],t?bt(n,s[4],a,null):Mt(s[4]),null),(!t||a&4)&&fe(e,"id",s[2])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Yd(r){let e,t;const n=r[5].default,i=xt(n,r,r[4],null);return{c(){e=be("h2"),i&&i.c(),fe(e,"id",r[2])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&16)&&wt(i,n,s,s[4],t?bt(n,s[4],a,null):Mt(s[4]),null),(!t||a&4)&&fe(e,"id",s[2])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Kd(r){let e,t;const n=r[5].default,i=xt(n,r,r[4],null);return{c(){e=be("h1"),i&&i.c(),fe(e,"id",r[2])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&16)&&wt(i,n,s,s[4],t?bt(n,s[4],a,null):Mt(s[4]),null),(!t||a&4)&&fe(e,"id",s[2])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Qd(r){let e,t,n,i;const s=[Kd,Yd,Zd,Jd,jd,Xd,qd],a=[];function o(l,c){return l[0]===1?0:l[0]===2?1:l[0]===3?2:l[0]===4?3:l[0]===5?4:l[0]===6?5:6}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=gt()},m(l,c){a[e].m(l,c),ge(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ot(),te(a[u],1,1,()=>{a[u]=null}),lt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n))},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){a[e].d(l),l&&pe(n)}}}function ep(r,e,t){let n,{$$slots:i={},$$scope:s}=e,{depth:a}=e,{raw:o}=e,{text:l}=e;const{slug:c,getOptions:u}=zf(ch),h=u();return r.$$set=f=>{"depth"in f&&t(0,a=f.depth),"raw"in f&&t(1,o=f.raw),"text"in f&&t(3,l=f.text),"$$scope"in f&&t(4,s=f.$$scope)},r.$$.update=()=>{r.$$.dirty&8&&t(2,n=h.headerIds?h.headerPrefix+c(l):void 0)},[a,o,n,l,s,i]}class tp extends ht{constructor(e){super(),ut(this,e,ep,Qd,ct,{depth:0,raw:1,text:3})}}function np(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("p"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function ip(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class rp extends ht{constructor(e){super(),ut(this,e,ip,np,ct,{})}}function sp(r){let e;const t=r[3].default,n=xt(t,r,r[2],null);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,[s]){n&&n.p&&(!e||s&4)&&wt(n,t,i,i[2],e?bt(t,i[2],s,null):Mt(i[2]),null)},i(i){e||(Y(n,i),e=!0)},o(i){te(n,i),e=!1},d(i){n&&n.d(i)}}}function ap(r,e,t){let{$$slots:n={},$$scope:i}=e,{text:s}=e,{raw:a}=e;return r.$$set=o=>{"text"in o&&t(0,s=o.text),"raw"in o&&t(1,a=o.raw),"$$scope"in o&&t(2,i=o.$$scope)},[s,a,i,n]}class op extends ht{constructor(e){super(),ut(this,e,ap,sp,ct,{text:0,raw:1})}}function lp(r){let e,t;return{c(){e=be("img"),Qo(e.src,t=r[0])||fe(e,"src",t),fe(e,"title",r[1]),fe(e,"alt",r[2])},m(n,i){ge(n,e,i)},p(n,[i]){i&1&&!Qo(e.src,t=n[0])&&fe(e,"src",t),i&2&&fe(e,"title",n[1]),i&4&&fe(e,"alt",n[2])},i:Tt,o:Tt,d(n){n&&pe(e)}}}function cp(r,e,t){let{href:n=""}=e,{title:i=void 0}=e,{text:s=""}=e;return r.$$set=a=>{"href"in a&&t(0,n=a.href),"title"in a&&t(1,i=a.title),"text"in a&&t(2,s=a.text)},[n,i,s]}let up=class extends ht{constructor(e){super(),ut(this,e,cp,lp,ct,{href:0,title:1,text:2})}};function hp(r){let e,t;const n=r[3].default,i=xt(n,r,r[2],null);return{c(){e=be("a"),i&&i.c(),fe(e,"href",r[0]),fe(e,"title",r[1])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&4)&&wt(i,n,s,s[2],t?bt(n,s[2],a,null):Mt(s[2]),null),(!t||a&1)&&fe(e,"href",s[0]),(!t||a&2)&&fe(e,"title",s[1])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function fp(r,e,t){let{$$slots:n={},$$scope:i}=e,{href:s=""}=e,{title:a=void 0}=e;return r.$$set=o=>{"href"in o&&t(0,s=o.href),"title"in o&&t(1,a=o.title),"$$scope"in o&&t(2,i=o.$$scope)},[s,a,i,n]}class dp extends ht{constructor(e){super(),ut(this,e,fp,hp,ct,{href:0,title:1})}}function pp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("em"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function mp(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class gp extends ht{constructor(e){super(),ut(this,e,mp,pp,ct,{})}}function yp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("del"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function vp(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class _p extends ht{constructor(e){super(),ut(this,e,vp,yp,ct,{})}}function xp(r){let e,t=r[0].replace(/`/g,"")+"",n;return{c(){e=be("code"),n=Qt(t)},m(i,s){ge(i,e,s),Oe(e,n)},p(i,[s]){s&1&&t!==(t=i[0].replace(/`/g,"")+"")&&cn(n,t)},i:Tt,o:Tt,d(i){i&&pe(e)}}}function bp(r,e,t){let{raw:n}=e;return r.$$set=i=>{"raw"in i&&t(0,n=i.raw)},[n]}class wp extends ht{constructor(e){super(),ut(this,e,bp,xp,ct,{raw:0})}}function Mp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("strong"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Sp(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Tp extends ht{constructor(e){super(),ut(this,e,Sp,Mp,ct,{})}}function Ep(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("table"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Ap(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Cp extends ht{constructor(e){super(),ut(this,e,Ap,Ep,ct,{})}}function Rp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("thead"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Lp(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class kp extends ht{constructor(e){super(),ut(this,e,Lp,Rp,ct,{})}}function Pp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("tbody"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Ip(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Dp extends ht{constructor(e){super(),ut(this,e,Ip,Pp,ct,{})}}function zp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("tr"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Np(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Fp extends ht{constructor(e){super(),ut(this,e,Np,zp,ct,{})}}function Bp(r){let e,t;const n=r[3].default,i=xt(n,r,r[2],null);return{c(){e=be("td"),i&&i.c(),fe(e,"align",r[1])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&4)&&wt(i,n,s,s[2],t?bt(n,s[2],a,null):Mt(s[2]),null),(!t||a&2)&&fe(e,"align",s[1])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Op(r){let e,t;const n=r[3].default,i=xt(n,r,r[2],null);return{c(){e=be("th"),i&&i.c(),fe(e,"align",r[1])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&4)&&wt(i,n,s,s[2],t?bt(n,s[2],a,null):Mt(s[2]),null),(!t||a&2)&&fe(e,"align",s[1])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Up(r){let e,t,n,i;const s=[Op,Bp],a=[];function o(l,c){return l[0]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=gt()},m(l,c){a[e].m(l,c),ge(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ot(),te(a[u],1,1,()=>{a[u]=null}),lt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n))},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){a[e].d(l),l&&pe(n)}}}function Vp(r,e,t){let{$$slots:n={},$$scope:i}=e,{header:s}=e,{align:a}=e;return r.$$set=o=>{"header"in o&&t(0,s=o.header),"align"in o&&t(1,a=o.align),"$$scope"in o&&t(2,i=o.$$scope)},[s,a,i,n]}class Hp extends ht{constructor(e){super(),ut(this,e,Vp,Up,ct,{header:0,align:1})}}function Gp(r){let e,t;const n=r[3].default,i=xt(n,r,r[2],null);return{c(){e=be("ul"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&4)&&wt(i,n,s,s[2],t?bt(n,s[2],a,null):Mt(s[2]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Wp(r){let e,t;const n=r[3].default,i=xt(n,r,r[2],null);return{c(){e=be("ol"),i&&i.c(),fe(e,"start",r[1])},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,a){i&&i.p&&(!t||a&4)&&wt(i,n,s,s[2],t?bt(n,s[2],a,null):Mt(s[2]),null),(!t||a&2)&&fe(e,"start",s[1])},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function $p(r){let e,t,n,i;const s=[Wp,Gp],a=[];function o(l,c){return l[0]?0:1}return e=o(r),t=a[e]=s[e](r),{c(){t.c(),n=gt()},m(l,c){a[e].m(l,c),ge(l,n,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ot(),te(a[u],1,1,()=>{a[u]=null}),lt(),t=a[e],t?t.p(l,c):(t=a[e]=s[e](l),t.c()),Y(t,1),t.m(n.parentNode,n))},i(l){i||(Y(t),i=!0)},o(l){te(t),i=!1},d(l){a[e].d(l),l&&pe(n)}}}function qp(r,e,t){let{$$slots:n={},$$scope:i}=e,{ordered:s}=e,{start:a}=e;return r.$$set=o=>{"ordered"in o&&t(0,s=o.ordered),"start"in o&&t(1,a=o.start),"$$scope"in o&&t(2,i=o.$$scope)},[s,a,i,n]}class Xp extends ht{constructor(e){super(),ut(this,e,qp,$p,ct,{ordered:0,start:1})}}function jp(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("li"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function Jp(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class Zp extends ht{constructor(e){super(),ut(this,e,Jp,jp,ct,{})}}function Yp(r){let e;return{c(){e=be("hr")},m(t,n){ge(t,e,n)},p:Tt,i:Tt,o:Tt,d(t){t&&pe(e)}}}class Kp extends ht{constructor(e){super(),ut(this,e,null,Yp,ct,{})}}function Qp(r){let e,t;return{c(){e=new kf(!1),t=gt(),e.a=t},m(n,i){e.m(r[0],n,i),ge(n,t,i)},p(n,[i]){i&1&&e.p(n[0])},i:Tt,o:Tt,d(n){n&&pe(t),n&&e.d()}}}function em(r,e,t){let{text:n}=e;return r.$$set=i=>{"text"in i&&t(0,n=i.text)},[n]}class tm extends ht{constructor(e){super(),ut(this,e,em,Qp,ct,{text:0})}}function nm(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("blockquote"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(e,null),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function im(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class rm extends ht{constructor(e){super(),ut(this,e,im,nm,ct,{})}}function sm(r){let e,t,n;return{c(){e=be("pre"),t=be("code"),n=Qt(r[1]),fe(e,"class",r[0])},m(i,s){ge(i,e,s),Oe(e,t),Oe(t,n)},p(i,[s]){s&2&&cn(n,i[1]),s&1&&fe(e,"class",i[0])},i:Tt,o:Tt,d(i){i&&pe(e)}}}function am(r,e,t){let{lang:n}=e,{text:i}=e;return r.$$set=s=>{"lang"in s&&t(0,n=s.lang),"text"in s&&t(1,i=s.text)},[n,i]}class om extends ht{constructor(e){super(),ut(this,e,am,sm,ct,{lang:0,text:1})}}function lm(r){let e,t;const n=r[1].default,i=xt(n,r,r[0],null);return{c(){e=be("br"),i&&i.c()},m(s,a){ge(s,e,a),i&&i.m(s,a),t=!0},p(s,[a]){i&&i.p&&(!t||a&1)&&wt(i,n,s,s[0],t?bt(n,s[0],a,null):Mt(s[0]),null)},i(s){t||(Y(i,s),t=!0)},o(s){te(i,s),t=!1},d(s){s&&pe(e),i&&i.d(s)}}}function cm(r,e,t){let{$$slots:n={},$$scope:i}=e;return r.$$set=s=>{"$$scope"in s&&t(0,i=s.$$scope)},[i,n]}class um extends ht{constructor(e){super(),ut(this,e,cm,lm,ct,{})}}const hm={heading:tp,paragraph:rp,text:op,image:up,link:dp,em:gp,strong:Tp,codespan:wp,del:_p,table:Cp,tablehead:kp,tablebody:Dp,tablerow:Fp,tablecell:Hp,list:Xp,orderedlistitem:null,unorderedlistitem:null,listitem:Zp,hr:Kp,html:tm,blockquote:rm,code:om,br:um},fm={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function dm(r){let e,t;return e=new mi({props:{tokens:r[0],renderers:r[1]}}),{c(){Je(e.$$.fragment)},m(n,i){qe(e,n,i),t=!0},p(n,[i]){const s={};i&1&&(s.tokens=n[0]),i&2&&(s.renderers=n[1]),e.$set(s)},i(n){t||(Y(e.$$.fragment,n),t=!0)},o(n){te(e.$$.fragment,n),t=!1},d(n){Xe(e,n)}}}function pm(r,e,t){let n,i,s,a,{source:o=[]}=e,{renderers:l={}}=e,{options:c={}}=e,{isInline:u=!1}=e;const h=If();let f,d,g;return Df(ch,{slug:m=>i?i.slug(m):"",getOptions:()=>s}),Xs(()=>{t(7,g=!0)}),r.$$set=m=>{"source"in m&&t(2,o=m.source),"renderers"in m&&t(3,l=m.renderers),"options"in m&&t(4,c=m.options),"isInline"in m&&t(5,u=m.isInline)},r.$$.update=()=>{r.$$.dirty&4&&t(8,n=Array.isArray(o)),r.$$.dirty&4&&(i=o?new wo:void 0),r.$$.dirty&16&&t(9,s={...fm,...c}),r.$$.dirty&869&&(n?t(0,f=o):(t(6,d=new Tn(s)),t(0,f=u?d.inlineTokens(o):d.lex(o)),h("parsed",{tokens:f}))),r.$$.dirty&8&&t(1,a={...hm,...l}),r.$$.dirty&385&&g&&!n&&h("parsed",{tokens:f})},[f,a,o,l,c,u,d,g,n,s]}class mm extends ht{constructor(e){super(),ut(this,e,pm,dm,ct,{source:2,renderers:3,options:4,isInline:5})}}function gm(r){let e,t,n,i,s=r[2].year+"",a,o,l,c=r[2].month+"",u,h=r[2].day+"",f,d,g,m=r[2].hour+"",p,y=r[2].minute+"",v,E,T,b,A,k,z,ie,O,_=r[0].note+"",L,G;return k=new mm({props:{source:r[0].content}}),{c(){e=be("section"),t=be("div"),n=be("time"),i=be("span"),a=Qt(s),o=Ot(),l=be("span"),u=Qt(c),f=Qt(h),d=Ot(),g=be("span"),p=Qt(m),v=Qt(y),b=Ot(),A=be("div"),Je(k.$$.fragment),z=Ot(),ie=be("div"),O=be("p"),L=Qt(_),fe(i,"class","year"),fe(l,"class","month-day"),fe(g,"class","hour-minute"),fe(n,"datetime",E=r[2].datetime),fe(n,"title",T=r[2].formattedDate),fe(n,"class","svelte-1jqisbm"),fe(t,"class","datetime svelte-1jqisbm"),fe(A,"class","content svelte-1jqisbm"),fe(ie,"class","note svelte-1jqisbm"),fe(e,"class","svelte-1jqisbm"),nl(e,"selected",r[1])},m(C,I){ge(C,e,I),Oe(e,t),Oe(t,n),Oe(n,i),Oe(i,a),Oe(n,o),Oe(n,l),Oe(l,u),Oe(l,f),Oe(n,d),Oe(n,g),Oe(g,p),Oe(g,v),Oe(e,b),Oe(e,A),qe(k,A,null),Oe(e,z),Oe(e,ie),Oe(ie,O),Oe(O,L),G=!0},p(C,[I]){(!G||I&4)&&s!==(s=C[2].year+"")&&cn(a,s),(!G||I&4)&&c!==(c=C[2].month+"")&&cn(u,c),(!G||I&4)&&h!==(h=C[2].day+"")&&cn(f,h),(!G||I&4)&&m!==(m=C[2].hour+"")&&cn(p,m),(!G||I&4)&&y!==(y=C[2].minute+"")&&cn(v,y),(!G||I&4&&E!==(E=C[2].datetime))&&fe(n,"datetime",E),(!G||I&4&&T!==(T=C[2].formattedDate))&&fe(n,"title",T);const N={};I&1&&(N.source=C[0].content),k.$set(N),(!G||I&1)&&_!==(_=C[0].note+"")&&cn(L,_),(!G||I&2)&&nl(e,"selected",C[1])},i(C){G||(Y(k.$$.fragment,C),G=!0)},o(C){te(k.$$.fragment,C),G=!1},d(C){C&&pe(e),Xe(k)}}}function ym(r,e,t){let n,{entry:i}=e,{selected:s}=e;return r.$$set=a=>{"entry"in a&&t(0,i=a.entry),"selected"in a&&t(1,s=a.selected)},r.$$.update=()=>{r.$$.dirty&1&&t(2,n=i.metadata)},[i,s,n]}class vm extends ht{constructor(e){super(),ut(this,e,ym,gm,ct,{entry:0,selected:1})}}const _m={milliseconds:1,seconds:1e3,minutes:1e3*60,hours:1e3*60*60,days:1e3*60*60*24},Sl=r=>typeof r=="string"?Date.parse(r):r.valueOf(),Tl=(r,e,t)=>{const n=Sl(e)-Sl(r),i=_m[t];return Math.round(n/i)},xm=`
# 2022-11-21T17:12
tide comes in, and moves away
[in work meeting, at home]

# 2022-11-22T10:49
romantic about programming 
[slacking, at home] 

# 2022-11-22T15:34
rubato ritual
[slacking, at home] 

# 2022-11-23T12:06
release the diagonals 
[lunch, at work] 

# 2022-11-23T21:10
that sounds cool but... 
[tram ride, on my way home] 

# 2022-11-24T14:07
meta-programming
[working, at home] 

# 2022-11-24T20:17
danish poetry dada
[listening, at reading] 

# 2022-11-25T18:58
exaggerated surprise reaction
[discord, at home] 

# 2022-11-26T13:00
computer insecurity 
[discussion, at gallery] 

# 2022-11-26T14:27
secret military art
[tangent, at gallery] 

# 2022-11-26T22:29
sincerius
[vibing, with the boys] 

# 2022-11-27T12:13
pointless automation 
[vibing, at home]

# 2022-11-28T16:20
no time for reading
[journaling, at home]

# 2022-11-28T21:29
revisited codes
[coding, at home] 

# 2022-11-29T15:00
sampling trees and sampling webs
[working, at the office]

# 2022-11-29T16:52
reroute, detour, side-track
[commuting, on the tram]

# 2022-11-30T16:47
Sleepy sleepless sleeplessness 
[all day, at work]

# 2022-11-30T23:20
Hyper-referential
[in bed, at home] 

# 2022-12-01T09:27
Pretending to be sick again
["Working", at home]

# 2022-12-01T17:05
It's all real
[grocery shopping, at the store]

# 2022-12-02T14:06
"I can be your monkey in a tie" 
[from The Drop, by Sports Team]

# 2022-12-03T19:55
Wine with the family, and the ventilation is broken 
[playing cards, at home]

# 2022-12-04T15:19
Last-episode-disorientation 
[on my way, outside]

# 2022-12-04T15:20
*I need to get there, somewhere, and fast*
[moving slowly, outside]

# 2022-12-05T16:32
the classic loosing-all-your-teeth-kind-of-nightmare
[irrational worry, at home]

# 2022-12-06T16:32
He's not known for his acting abilities
[moving, in mind]

# 2022-12-06T16:35
Strangers as props
[alienated? commuting]

# 2022-12-07T16:52
Droning
[tired, commuting]

# 2022-12-08T14:43
Persistent, flashing lights
[looking at screens, working]

# 2022-12-09T11:59
He has lost the ability to be bored
[slightly sick, at home]

# 2022-12-10T16:09
Wine at four
[drinking, at a restaurant]

# 2022-12-11T13:02
New clothes, sore throat, green round car
[observing, outside]

# 2022-12-12T18:25
Hidden clauses, ghost notifications, etc
[surfing, on the web]

# 2022-12-13T17:06
Accepting involuntary detours
[commuting, the wrong way] 

# 2022-12-14T10:50
Never-ending problem-solution graph, software is nightmare
[developing, at work] 

# 2022-12-14T14:46
Revisiting old pieces and puzzles and finding new ways
[making art, at home]

# 2022-12-14T21:48
Moist knees
[memory, at home]

# 2022-12-14T22:47
Internet archives, documentation, restoration and exploration 
[surfing, on the web]

# 2022-12-16T14:45
He's pissing in the hallway
[threatening aura, in the hallway]

# 2022-12-17T01:38
Late night car wash vibes
[traveling home after a party, on the bus]

# 2022-12-20T15:54
library books probably overdue
[remembering things, on the toilet]

# 2022-12-20T18:11
Interface pool
[abstract musing, at home]

# 2022-12-21T10:25
Chaotic, unordered links
[looking through notes, at home]

# 2022-12-21T21:46
11 minutes of buildup 
[listening to music, on the tram]

# 2022-12-22T14:37
Same song and place, as ritual
[making something more, on my way]

# 2022-12-22T17:43
Disintegration craft
[combining words, on the train]

# 2022-12-22T23:11
Childhood bed has been moved to the home office
[in bed, at the parents place]

# 2022-12-23T14:59
Everything's a list
[extracting mind goo, staring]

# 2022-12-24T11:09
Everyone loves Lain 
[paraphrasing a tune, in the car]

# 2022-12-25T08:23
"my brain is an ad campaign" 
[quote from nowhere, just woke up]

# 2022-12-26T11:17
Longing looking looming 
[can't wait, on the toilet]

# 2022-12-26T23:04
Chaotic yoga 
[reflecting, on the phone]

# 2022-12-26T23:31
Useless creation! useless creation! useless creation! 
[making things, on the computer]

# 2022-12-27T14:22
distract extract 
[thinking of words, on the computer]

# 2022-12-28T09:48
AI fudge
[musings, by a friend]

# 2022-12-28T12:31
"I haven't said anything ever" 
[reading, I love you but I've chosen darkness]

# 2022-12-28T13:27
*gestalt*
[reading, on the train]

# 2022-12-28T15:15
Moodboard maximalism 
[vibe, bathing in vibe]

# 2022-12-28T17:35
"the sun is people" 
[from Yeshua at 12, by Human Behavior]

# 2022-12-29T16:22
The forest eating itself
[stringing words together, on the computer]

# 2022-12-30T09:44
Neologism party
[associating, in bed]

# 2022-12-30T21:13
Kairos
[a book, by Tichy]

# 2022-12-31T11:53
Defocusing on spirits
[pondering, at the liquor store]

# 2022-12-31T14:41
Relocating desire
[thoughts, on a run]

# 2023-01-02T15:57
work
[working, at work]

# 2023-01-02T17:06
Abstract anxiety
[stuck, outside]

# 2023-01-03T18:28
lost notebooks lost songs
[sifting through, at home]

# 2023-01-03T20:02
He had a good run
[still sifting, at home]

# 2023-01-03T20:03
Hoping for emergence 
[no more sifting, at home]

# 2023-01-03T21:30
Curation, list and vibe
[vibing, at the vibe store]

# 2023-01-04T17:10
No strange cults in the dark woods in the rain
[remembering fear, on a run] 

# 2023-01-05T16:51
Shameful
[indulging, at home]

# 2023-01-05T22:58
Sampled
[drunk, on the toilet]

# 2023-01-06T15:36
Torn, torn
[repeating words, ah home]

# 2023-01-06T18:16
Aimless in a good way. Aimless in a bad way
[anxious, walking around]

# 2023-01-07T20:20
**Vibe is bliss**
[vibign, in bliss]
`,bm=/(([\d]{4})-([\d]{2})-([\d]{2})T([\d]{2}):([\d]{2}))([^\[]*)\[([^\]]*)\]/g,wm=async()=>{try{return Mm(xm)}catch(r){console.log(r)}},Mm=r=>{const e=[...r.matchAll(bm)].map(a=>Sm(a)),t=e.at(0).metadata.datetime,n=e.at(-1).metadata.datetime,i=1+Tl(t,n,"days"),s=[];for(let a=0;a<i;a++)s.push({count:0,entryIndices:[],datetime:""});return e.forEach((a,o)=>{const l=Tl(a.metadata.datetime,n,"days");a.dayIndex=l;const c=s[l];c.count++,c.entryIndices.push(o),c.datetime===""&&(c.datetime=a.metadata.datetime.split("T")[0])}),{entries:e,timeline:s,numberOfDays:i}},Sm=r=>{const[,e,t,n,i,s,a,o,l]=r,c=e.replace("T"," ");return{metadata:{datetime:e,formattedDate:c,year:t,month:n,day:i,hour:s,minute:a},content:o,note:l,dayIndex:-1}},Tm="1695",Em={1695:{type:"root",name:"output",x:2742.5909653573085,y:-390.3802695686727,width:200,height:212,layer:1745,fields:{point:{kind:"static",type:"vec3",value:{x:0,y:0,z:0},internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},color:{kind:"dynamic",type:"vec3",value:{nodeId:"1751"},inputLocked:!0,anchor:{size:16,x:0,y:45.035714285714285,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},dithering:{kind:"dynamic",type:"float",value:0,anchor:{size:16,x:0,y:75.32142857142857,type:"field",active:!1,hovered:!1}},scale:{kind:"static",type:"float",value:.0020098,min:1e-5,max:.1,excludeFromFunction:!0,anchor:{size:16,x:0,y:105.60714285714286,type:"field",active:!1,hovered:!1}},speedX:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:135.89285714285714,type:"field",active:!1,hovered:!1}},speedY:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:166.17857142857142,type:"field",active:!1,hovered:!1}},speedZ:{kind:"static",type:"float",value:.44,min:-1,max:1,excludeFromFunction:!0,anchor:{size:16,x:0,y:196.46428571428572,type:"field",active:!1,hovered:!1}},ditheringTextureDimensions:{kind:"static",type:"vec2",value:{x:128,y:128},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tDithering:{kind:"static",type:"sampler2D",value:{metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:"13ecc519-88da-42c4-a171-e4b40a68df34",name:"",image:"6eabd10e-2fd2-49d5-84f9-889d4362d3ef",mapping:300,repeat:[1,1],offset:[0,0],center:[0,0],rotation:0,wrap:[1e3,1e3],format:1023,type:1009,encoding:3e3,minFilter:1003,magFilter:1003,anisotropy:1,flipY:!0,premultiplyAlpha:!1,unpackAlignment:4},hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"1695",hovered:!1,active:!1,elevated:!1},1696:{type:"hsvToRgb",x:1119.245456955802,y:-14.315296019997717,width:200.4,height:134,anchor:{size:16,x:200.4,y:67,type:"node",active:!1,hovered:!1},layer:2135,fields:{hue:{kind:"dynamic",type:"float",value:{nodeId:"1750"},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1},previousStaticValue:0},saturation:{kind:"dynamic",type:"float",value:{nodeId:"2139"},anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:.38},value:{kind:"dynamic",type:"float",value:{nodeId:"1704"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:.5}},returnType:"vec3",id:"1696",hovered:!1,active:!1,elevated:!1},1699:{type:"wave",x:-205.89617829910142,y:-224.26921446726578,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:1694,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1702"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:200,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",active:!1,hovered:!1}},xAmount:{kind:"dynamic",type:"float",value:.02,min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",active:!1,hovered:!1}},yAmount:{kind:"dynamic",type:"float",value:-1,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",active:!1,hovered:!1}},zAmount:{kind:"dynamic",type:"float",value:.46,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",active:!1,hovered:!1}},min:{kind:"dynamic",type:"float",value:.1,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:.15,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:.5095,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1699",elevated:!1,active:!1,hovered:!1},1701:{type:"combine",x:109.52,y:22.459999999999994,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1706,fields:{operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"1699"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"1699_1699"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"1701",elevated:!1,active:!1,hovered:!1},1702:{type:"displace",x:-547.6866999999999,y:-78.7575,width:200,height:186,anchor:{size:16,x:200,y:93,type:"node",hovered:!1,active:!1},layer:1747,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1705"},internalOptional:!0,anchor:{size:16,x:0,y:45.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},x:{kind:"dynamic",type:"float",value:.1,min:-5,max:5,anchor:{size:16,x:0,y:76.75,type:"field",active:!1,hovered:!1}},y:{kind:"dynamic",type:"float",value:4.4,min:-5,max:5,anchor:{size:16,x:0,y:107.75,type:"field",active:!1,hovered:!1}},z:{kind:"dynamic",type:"float",value:-4.1,min:-5,max:5,anchor:{size:16,x:0,y:138.75,type:"field",hovered:!1,active:!1}},amount:{kind:"dynamic",type:"float",value:.05,anchor:{size:16,x:0,y:169.75,type:"field",hovered:!1,active:!1},previousStaticValue:1}},returnType:"vec3",id:"1702",elevated:!1,active:!1,hovered:!1},1703:{type:"simplex",x:-1496.7820621836727,y:409.0824001755353,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:2487,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1706"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:.6,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:20,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1},previousStaticValue:20},persistance:{kind:"dynamic",type:"float",value:.5,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",active:!1,hovered:!1}},lacunarity:{kind:"dynamic",type:"float",value:1.4,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1}},octaves:{kind:"static",type:"int",value:3,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:4.4056,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1},previousStaticValue:4.4056},ridge:{kind:"dynamic",type:"float",value:1,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1703",elevated:!1,active:!0,hovered:!1},1704:{type:"remap",x:432.27455509689264,y:134.55541938582627,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:2136,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1701"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:{nodeId:"2136"},min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:3.6},mult:{kind:"dynamic",type:"float",value:-2,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1704",elevated:!1,active:!1,hovered:!1},1705:{type:"polarDisplace",x:-872.0301480608517,y:-165.23726589361274,width:238.79999999999998,height:160,anchor:{size:16,x:238.79999999999998,y:80,type:"node",hovered:!1,active:!1},layer:1771,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},angle1:{kind:"dynamic",type:"float",value:{nodeId:"1742_1742"},min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:-1.75929188601028},angle2:{kind:"dynamic",type:"float",value:.816814089933347,min:-3.141592653589793,max:3.141592653589793,anchor:{size:16,x:0,y:110.75,type:"field",active:!1,hovered:!1}},radius:{kind:"dynamic",type:"float",value:{nodeId:"1707"},min:-5,max:5,anchor:{size:16,x:0,y:142.75,type:"field",hovered:!1,active:!1},previousStaticValue:5}},returnType:"vec3",id:"1705",elevated:!1,active:!1,hovered:!1},1706:{type:"pixelate",x:-1883.7693041838254,y:-181.1596803608415,width:200,height:160,anchor:{size:16,x:200,y:80,type:"node",hovered:!1,active:!1},layer:2482,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"2483"},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",active:!1,hovered:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},stepsX:{kind:"dynamic",type:"int",value:{nodeId:"1714"},min:1,max:20,anchor:{size:16,x:0,y:78.75,type:"field",hovered:!1,active:!1},previousStaticValue:15},stepsY:{kind:"dynamic",type:"int",value:{nodeId:"1714"},min:1,max:20,anchor:{size:16,x:0,y:110.75,type:"field",active:!1,hovered:!1},previousStaticValue:15},stepsZ:{kind:"dynamic",type:"int",value:450,min:1,max:1e3,anchor:{size:16,x:0,y:142.75,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"1706",elevated:!1,active:!1,hovered:!1},1707:{type:"quantize",x:-966.3115589882295,y:82.41847496220493,width:200,height:108,anchor:{size:16,x:200,y:54,type:"node",hovered:!1,active:!1},layer:1713,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1742"},anchor:{size:16,x:0,y:50.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},steps:{kind:"dynamic",type:"int",value:10,min:1,max:10,anchor:{size:16,x:0,y:86.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1707",elevated:!1,active:!1,hovered:!1},1710:{type:"feedback",x:-459.0084575780159,y:-642.8111977228415,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:1750,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1706"},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"1710",elevated:!1,active:!1,hovered:!1},1711:{type:"lerp",x:1882.8760030065096,y:-397.3548411958591,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1703,fields:{value1:{kind:"dynamic",type:"vec3",value:{nodeId:"1710"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},value2:{kind:"dynamic",type:"vec3",value:{nodeId:"1745"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},amount:{kind:"dynamic",type:"float",value:.02,min:0,max:1,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"vec3",id:"1711",elevated:!1,active:!1,hovered:!1},1712:{type:"simplex",x:-2780.6621041165768,y:-154.80188072992237,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:1774,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1713"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:.4,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:20,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:.5,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",active:!1,hovered:!1}},lacunarity:{kind:"dynamic",type:"float",value:2,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1}},octaves:{kind:"static",type:"int",value:2,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:1.4086,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1}},ridge:{kind:"dynamic",type:"float",value:.18082,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1712",elevated:!1,active:!1,hovered:!1},1713:{type:"pixelate",x:-3074.393557485011,y:-90.86912199636555,width:200,height:160,anchor:{size:16,x:200,y:80,type:"node",hovered:!1,active:!1},layer:1697,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:46.75,type:"field",active:!1,hovered:!1}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},stepsX:{kind:"dynamic",type:"int",value:{nodeId:"1773"},min:1,max:20,anchor:{size:16,x:0,y:78.75,type:"field",active:!1,hovered:!1},previousStaticValue:3},stepsY:{kind:"dynamic",type:"int",value:{nodeId:"1773"},min:1,max:20,anchor:{size:16,x:0,y:110.75,type:"field",active:!1,hovered:!1},previousStaticValue:3},stepsZ:{kind:"dynamic",type:"int",value:472,min:1,max:1e3,anchor:{size:16,x:0,y:142.75,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"1713",elevated:!1,active:!1,hovered:!1},1714:{type:"floatToInt",x:-2184.893578640664,y:-94.16251976940688,width:219.6,height:82,anchor:{size:16,x:219.6,y:41,type:"node",hovered:!1,active:!1},layer:1741,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1746"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"int",id:"1714",elevated:!1,active:!1,hovered:!1},1741:{type:"voronoi",x:-1512.7983380292212,y:-95.96859540206144,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:1712,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1706"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:.2,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:20,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:.36,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",hovered:!1,active:!1}},lacunarity:{kind:"dynamic",type:"float",value:2,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",hovered:!1,active:!1}},octaves:{kind:"static",type:"int",value:5,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:.5095,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",hovered:!1,active:!1},previousStaticValue:.7093},ridge:{kind:"dynamic",type:"float",value:.3007,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1741",elevated:!1,active:!1,hovered:!1},1742:{type:"combine",x:-1270.101152469741,y:223.2831975223652,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1701,fields:{operation:{kind:"choice",type:"int",value:2,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"1703"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"1741"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"1742",elevated:!1,active:!1,hovered:!1},1744:{type:"brightness",x:218.26664905030754,y:-202.36375693772698,width:200.4,height:82,anchor:{size:16,x:200.4,y:41,type:"node",hovered:!1,active:!1},layer:1697,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"1710"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}}},returnType:"float",id:"1744",elevated:!1,active:!1,hovered:!1},1745:{type:"contrast",x:1557.6585825698196,y:-143.78264246147378,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1772,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"1696"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},contrast:{kind:"dynamic",type:"float",value:1.48,min:0,max:2,anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1}},brightness:{kind:"dynamic",type:"float",value:.14,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"vec3",id:"1745",elevated:!1,active:!1,hovered:!1},1746:{type:"remap",x:-2476.478419900412,y:-207.21335385164508,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1743,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1712"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:-10,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:10,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1746",elevated:!1,active:!1,hovered:!1},1748:{type:"remap",x:317.40672157759036,y:405.46850831520806,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1749,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1707"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:0,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1}},mult:{kind:"dynamic",type:"float",value:.2,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1748",elevated:!1,active:!1,hovered:!1},1749:{type:"clamp",x:796.3492443594757,y:308.8918146123376,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1702,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1748"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},min:{kind:"dynamic",type:"float",value:-1,min:-1,max:1,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1},previousStaticValue:-1},max:{kind:"dynamic",type:"float",value:1.078,min:-1,max:1,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1},previousStaticValue:1.078}},returnType:"float",id:"1749",elevated:!1,active:!1,hovered:!1},1750:{type:"remap",x:654.5423654203736,y:-193.97388489597094,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:2137,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1744"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:1.6,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:-6.2,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1750",elevated:!1,active:!1,hovered:!1},1751:{type:"colorCombine",x:2129.820664700224,y:-153.89743401064058,width:219.6,height:134,anchor:{size:16,x:219.6,y:67,type:"node",hovered:!1,active:!1},layer:1705,fields:{value1:{kind:"dynamic",type:"vec3",value:{nodeId:"1711"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},value2:{kind:"dynamic",type:"vec3",value:{nodeId:"1745"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},operation:{kind:"choice",type:"int",value:4,choices:{add:0,mult:1,pow:2,avg:3,mod:4,brightest:5,darkest:6},anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"1751",elevated:!1,active:!1,hovered:!1},1772:{type:"brightness",x:-4264.719572322616,y:42.13314591162256,width:200.4,height:82,anchor:{size:16,x:200.4,y:41,type:"node",hovered:!1,active:!1},layer:1700,fields:{source:{kind:"dynamic",type:"vec3",value:{nodeId:"1710_1770"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}}},returnType:"float",id:"1772",elevated:!1,active:!1,hovered:!1},1773:{type:"floatToInt",x:-3383.613474234804,y:12.482223953410376,width:219.6,height:82,anchor:{size:16,x:219.6,y:41,type:"node",hovered:!1,active:!1},layer:1740,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1774"},anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"int",id:"1773",elevated:!1,active:!1,hovered:!1},1774:{type:"remap",x:-3624.9661581562214,y:-93.36512352940677,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1773,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1775"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:10,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},mult:{kind:"dynamic",type:"float",value:8.6,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1774",elevated:!1,active:!1,hovered:!1},1775:{type:"quantize",x:-3970.401847916303,y:19.05592797273266,width:200,height:108,anchor:{size:16,x:200,y:54,type:"node",hovered:!1,active:!1},layer:1750,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1772"},anchor:{size:16,x:0,y:50.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},steps:{kind:"dynamic",type:"int",value:100,min:1,max:10,anchor:{size:16,x:0,y:86.75,type:"field",hovered:!1,active:!1}}},returnType:"float",id:"1775",elevated:!1,active:!1,hovered:!1},2136:{type:"static",x:-366.39131836990873,y:710.969664275018,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1709,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},min:{kind:"dynamic",type:"float",value:3.6,min:0,max:1,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:3,min:0,max:1,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"float",id:"2136",elevated:!1,active:!1,hovered:!1},2137:{type:"clamp",x:566.829340695958,y:655.7615984868874,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1704,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1704"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},min:{kind:"dynamic",type:"float",value:0,min:-1,max:1,anchor:{size:16,x:0,y:81.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"2137",elevated:!1,active:!1,hovered:!1},2138:{type:"remap",x:893.3214854666693,y:617.5647198110092,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1695,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"2137"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:1.6,min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1}},mult:{kind:"dynamic",type:"float",value:-1.6,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"2138",elevated:!1,active:!1,hovered:!1},2139:{type:"remap",x:1074.7719751174204,y:310.83171519346604,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1711,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"1749"},anchor:{size:16,x:0,y:48.25,type:"field",hovered:!1,active:!1},previousStaticValue:0},add:{kind:"dynamic",type:"float",value:{nodeId:"2138"},min:-10,max:10,anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},mult:{kind:"dynamic",type:"float",value:1,min:-10,max:10,anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1}}},returnType:"float",id:"2139",elevated:!1,active:!1,hovered:!1},2483:{type:"displace",x:-2115.779763044407,y:-498.0067699745251,width:200,height:186,anchor:{size:16,x:200,y:93,type:"node",hovered:!1,active:!1},layer:1710,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:45.75,type:"field",active:!1,hovered:!1}},x:{kind:"dynamic",type:"float",value:0,min:-5,max:5,anchor:{size:16,x:0,y:76.75,type:"field",active:!1,hovered:!1}},y:{kind:"dynamic",type:"float",value:0,min:-5,max:5,anchor:{size:16,x:0,y:107.75,type:"field",active:!1,hovered:!1}},z:{kind:"dynamic",type:"float",value:-2.5,min:-5,max:5,anchor:{size:16,x:0,y:138.75,type:"field",hovered:!1,active:!1}},amount:{kind:"dynamic",type:"float",value:{nodeId:"2484"},anchor:{size:16,x:0,y:169.75,type:"field",hovered:!1,active:!1},previousStaticValue:1}},returnType:"vec3",id:"2483",elevated:!1,active:!1,hovered:!1},2484:{type:"sin",x:-2654.5491424086563,y:-508.31378906812813,width:200,height:108,anchor:{size:16,x:200,y:54,type:"node",hovered:!1,active:!1},layer:2138,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"2485"},anchor:{size:16,x:0,y:50.75,type:"field",hovered:!1,active:!1},previousStaticValue:.25},multiplier:{kind:"dynamic",type:"float",value:.8,min:-10,max:10,anchor:{size:16,x:0,y:86.75,type:"field",hovered:!1,active:!1}}},returnType:"float",id:"2484",elevated:!1,active:!1,hovered:!1},2485:{type:"time",x:-3164.4558764498256,y:-485.6929072937662,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:2138,fields:{speed:{kind:"dynamic",type:"float",value:1,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:1},time:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"2485",elevated:!1,active:!1,hovered:!1},2487:{type:"sin",x:-597.9028054040748,y:325.67730263262195,width:200,height:108,anchor:{size:16,x:200,y:54,type:"node",hovered:!1,active:!1},layer:1713,fields:{value:{kind:"dynamic",type:"float",value:{nodeId:"2488"},anchor:{size:16,x:0,y:50.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},multiplier:{kind:"dynamic",type:"float",value:.2,min:-10,max:10,anchor:{size:16,x:0,y:86.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"2487",elevated:!1,active:!1,hovered:!1},2488:{type:"time",x:-892.1678377912552,y:423.34790157421617,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:2483,fields:{speed:{kind:"dynamic",type:"float",value:.49,anchor:{size:16,x:0,y:55.75,type:"field",active:!1,hovered:!1}},time:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"2488",elevated:!1,active:!1,hovered:!1},"1742_1742":{type:"combine",x:-1127.6058538753841,y:-238.07858634711107,width:200,height:134,anchor:{size:16,x:200,y:67,type:"node",hovered:!1,active:!1},layer:1706,fields:{operation:{kind:"choice",type:"int",value:2,choices:{add:0,mult:1,pow:2,avg:3,mod:4},anchor:{size:16,x:0,y:48.25,type:"field",active:!1,hovered:!1}},value1:{kind:"dynamic",type:"float",value:{nodeId:"1703_1708"},anchor:{size:16,x:0,y:81.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},value2:{kind:"dynamic",type:"float",value:{nodeId:"1741"},anchor:{size:16,x:0,y:115.25,type:"field",hovered:!1,active:!1},previousStaticValue:0}},returnType:"float",id:"1742_1742",elevated:!1,active:!1,hovered:!1},"1710_1770":{type:"feedback",x:-4288.797959201908,y:-163.65746043142892,width:200,height:82,anchor:{size:16,x:200,y:41,type:"node",hovered:!1,active:!1},layer:1744,fields:{point:{kind:"dynamic",type:"vec3",value:{x:0,y:0,z:0},internalOptional:!0,anchor:{size:16,x:0,y:55.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},scale:{kind:"static",type:"float",value:1,internal:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}},tFeedback:{kind:"static",type:"sampler2D",hidden:!0,anchor:{size:16,x:0,y:-4,type:"field",active:!1,hovered:!1}}},returnType:"vec3",id:"1710_1770",elevated:!1,active:!1,hovered:!1},"1703_1708":{type:"simplex",x:-1389.5347661811156,y:-529.7736973692118,width:200,height:290,anchor:{size:16,x:200,y:145,type:"node",hovered:!1,active:!1},layer:1748,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1706"},internalOptional:!0,anchor:{size:16,x:0,y:43.75,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:.5,min:0,max:10,anchor:{size:16,x:0,y:72.75,type:"field",active:!1,hovered:!1}},amplitude:{kind:"dynamic",type:"float",value:10,min:0,max:10,anchor:{size:16,x:0,y:101.75,type:"field",active:!1,hovered:!1}},persistance:{kind:"dynamic",type:"float",value:.5,min:0,max:1,anchor:{size:16,x:0,y:130.75,type:"field",active:!1,hovered:!1}},lacunarity:{kind:"dynamic",type:"float",value:1.4,min:0,max:10,anchor:{size:16,x:0,y:159.75,type:"field",active:!1,hovered:!1}},octaves:{kind:"static",type:"int",value:3,min:1,max:5,restricted:!0,anchor:{size:16,x:0,y:188.75,type:"field",active:!1,hovered:!1}},exponent:{kind:"dynamic",type:"float",value:4.4056,min:.01,max:10,anchor:{size:16,x:0,y:217.75,type:"field",active:!1,hovered:!1}},ridge:{kind:"dynamic",type:"float",value:1,min:.001,max:1,restricted:!0,anchor:{size:16,x:0,y:246.75,type:"field",active:!1,hovered:!1}},normalize:{kind:"static",type:"bool",value:!0,anchor:{size:16,x:0,y:275.75,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1703_1708",elevated:!1,active:!1,hovered:!1},"1699_1699":{type:"wave",x:-217.62000000000035,y:74.08658737917342,width:200,height:264,anchor:{size:16,x:200,y:132,type:"node",hovered:!1,active:!1},layer:2486,fields:{point:{kind:"dynamic",type:"vec3",value:{nodeId:"1702"},internalOptional:!0,anchor:{size:16,x:0,y:44.08333333333333,type:"field",hovered:!1,active:!1},previousStaticValue:{x:0,y:0,z:0}},frequency:{kind:"dynamic",type:"float",value:200,min:0,max:100,anchor:{size:16,x:0,y:73.41666666666666,type:"field",hovered:!1,active:!1}},xAmount:{kind:"dynamic",type:"float",value:{nodeId:"2487"},min:-1,max:1,anchor:{size:16,x:0,y:102.75,type:"field",hovered:!1,active:!1},previousStaticValue:0},yAmount:{kind:"dynamic",type:"float",value:-.02,min:-1,max:1,anchor:{size:16,x:0,y:132.08333333333331,type:"field",hovered:!1,active:!1}},zAmount:{kind:"dynamic",type:"float",value:0,min:-1,max:1,anchor:{size:16,x:0,y:161.41666666666666,type:"field",active:!1,hovered:!1}},min:{kind:"dynamic",type:"float",value:-1,min:-1,max:1,anchor:{size:16,x:0,y:190.75,type:"field",active:!1,hovered:!1}},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1,anchor:{size:16,x:0,y:220.08333333333334,type:"field",active:!1,hovered:!1}},power:{kind:"dynamic",type:"float",value:.2098,min:.01,max:10,anchor:{size:16,x:0,y:249.41666666666666,type:"field",active:!1,hovered:!1}}},returnType:"float",id:"1699_1699",elevated:!1,active:!1,hovered:!1}},Am={x:490.96259237607563,y:-83.33020633704191},Cm=1.3880426055999067,Rm={rootId:Tm,nodes:Em,position:Am,zoom:Cm};var Lm=1/0,km=9007199254740991,Pm="[object Arguments]",Im="[object Function]",Dm="[object GeneratorFunction]",zm="[object Symbol]",Nm=typeof Jn=="object"&&Jn&&Jn.Object===Object&&Jn,Fm=typeof self=="object"&&self&&self.Object===Object&&self,Bm=Nm||Fm||Function("return this")();function Om(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}function Um(r,e){for(var t=-1,n=r?r.length:0,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}function Vm(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Mo=Object.prototype,Hm=Mo.hasOwnProperty,So=Mo.toString,El=Bm.Symbol,Gm=Mo.propertyIsEnumerable,Al=El?El.isConcatSpreadable:void 0,Cl=Math.max;function uh(r,e,t,n,i){var s=-1,a=r.length;for(t||(t=Xm),i||(i=[]);++s<a;){var o=r[s];e>0&&t(o)?e>1?uh(o,e-1,t,n,i):Vm(i,o):n||(i[i.length]=o)}return i}function Wm(r,e){return r=Object(r),$m(r,e,function(t,n){return n in r})}function $m(r,e,t){for(var n=-1,i=e.length,s={};++n<i;){var a=e[n],o=r[a];t(o,a)&&(s[a]=o)}return s}function qm(r,e){return e=Cl(e===void 0?r.length-1:e,0),function(){for(var t=arguments,n=-1,i=Cl(t.length-e,0),s=Array(i);++n<i;)s[n]=t[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=t[n];return a[e]=s,Om(r,this,a)}}function Xm(r){return Zm(r)||Jm(r)||!!(Al&&r&&r[Al])}function jm(r){if(typeof r=="string"||ng(r))return r;var e=r+"";return e=="0"&&1/r==-Lm?"-0":e}function Jm(r){return Km(r)&&Hm.call(r,"callee")&&(!Gm.call(r,"callee")||So.call(r)==Pm)}var Zm=Array.isArray;function Ym(r){return r!=null&&eg(r.length)&&!Qm(r)}function Km(r){return hh(r)&&Ym(r)}function Qm(r){var e=tg(r)?So.call(r):"";return e==Im||e==Dm}function eg(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=km}function tg(r){var e=typeof r;return!!r&&(e=="object"||e=="function")}function hh(r){return!!r&&typeof r=="object"}function ng(r){return typeof r=="symbol"||hh(r)&&So.call(r)==zm}qm(function(r,e){return r==null?{}:Wm(r,Um(uh(e,1),jm))});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="139",ig=0,Rl=1,rg=2,fh=1,sg=2,Er=3,Ir=0,fn=1,Ji=2,dh=1,Yn=0,qi=1,Ll=2,kl=3,Pl=4,ag=5,Ui=100,og=101,lg=102,Il=103,Dl=104,cg=200,ug=201,hg=202,fg=203,ph=204,mh=205,dg=206,pg=207,mg=208,gg=209,yg=210,vg=0,_g=1,xg=2,io=3,bg=4,wg=5,Mg=6,Sg=7,js=0,Tg=1,Eg=2,Fn=0,Ag=1,Cg=2,Rg=3,Lg=4,kg=5,gh=300,Zi=301,Yi=302,ro=303,so=304,Js=306,Dr=1e3,un=1001,Nn=1002,Ct=1003,zl=1004,Nl=1005,zt=1006,Pg=1007,Zs=1008,pi=1009,Ig=1010,Dg=1011,zr=1012,zg=1013,Ds=1014,ui=1015,Xi=1016,Ng=1017,Fg=1018,ji=1020,Bg=1021,Og=1022,hn=1023,Ug=1024,Vg=1025,fi=1026,Ki=1027,Hg=1028,Gg=1029,Wg=1030,$g=1031,qg=1033,fa=33776,da=33777,pa=33778,ma=33779,Fl=35840,Bl=35841,Ol=35842,Ul=35843,Xg=36196,Vl=37492,Hl=37496,Gl=37808,Wl=37809,$l=37810,ql=37811,Xl=37812,jl=37813,Jl=37814,Zl=37815,Yl=37816,Kl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,jg=2200,Jg=2201,Zg=2202,Bs=2300,Os=2301,ga=2302,Vi=2400,Hi=2401,Us=2402,Eo=2500,yh=2501,Yg=0,On=3e3,dt=3001,Kg=3200,Qg=3201,ar=0,e0=1,Dn="srgb",hi="srgb-linear",ya=7680,t0=519,Nr=35044,Vs=35048,rc="300 es",ao=1035;class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ft=[];for(let r=0;r<256;r++)Ft[r]=(r<16?"0":"")+r.toString(16);const va=Math.PI/180,oo=180/Math.PI;function Sn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[r&255]+Ft[r>>8&255]+Ft[r>>16&255]+Ft[r>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function Gt(r,e,t){return Math.max(e,Math.min(t,r))}function n0(r,e){return(r%e+e)%e}function _a(r,e,t){return(1-t)*r+t*e}function sc(r){return(r&r-1)===0&&r!==0}function lo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class J{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}J.prototype.isVector2=!0;class Ut{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=i[0],p=i[3],y=i[6],v=i[1],E=i[4],T=i[7],b=i[2],A=i[5],k=i[8];return s[0]=a*m+o*v+l*b,s[3]=a*p+o*E+l*A,s[6]=a*y+o*T+l*k,s[1]=c*m+u*v+h*b,s[4]=c*p+u*E+h*A,s[7]=c*y+u*T+h*k,s[2]=f*m+d*v+g*b,s[5]=f*p+d*E+g*A,s[8]=f*y+d*T+g*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(i*c-u*n)*m,e[2]=(o*n-i*a)*m,e[3]=f*m,e[4]=(u*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*s+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}Ut.prototype.isMatrix3=!0;function vh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Fr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const xa={[Dn]:{[hi]:di},[hi]:{[Dn]:zs}},sn={legacyMode:!0,get workingColorSpace(){return hi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(xa[e]&&xa[e][t]!==void 0){const n=xa[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},an={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function es(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class xe{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=hi){return this.r=e,this.g=t,this.b=n,sn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=hi){if(e=n0(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ba(a,s,e+1/3),this.g=ba(a,s,e),this.b=ba(a,s,e-1/3)}return sn.toWorkingColorSpace(this,i),this}setStyle(e,t=Dn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,sn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,sn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,sn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,sn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Dn){const n=_h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return sn.fromWorkingColorSpace(es(this,Lt),e),Gt(Lt.r*255,0,255)<<16^Gt(Lt.g*255,0,255)<<8^Gt(Lt.b*255,0,255)<<0}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hi){sn.fromWorkingColorSpace(es(this,Lt),t);const n=Lt.r,i=Lt.g,s=Lt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=hi){return sn.fromWorkingColorSpace(es(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Dn){return sn.fromWorkingColorSpace(es(this,Lt),e),e!==Dn?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Qr);const n=_a(an.h,Qr.h,t),i=_a(an.s,Qr.s,t),s=_a(an.l,Qr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}xe.NAMES=_h;xe.prototype.isColor=!0;xe.prototype.r=1;xe.prototype.g=1;xe.prototype.b=1;let wi;class yi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=Fr("canvas")),wi.width=e.width,wi.height=e.height;const n=wi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=di(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xh{constructor(e=null){this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(wa(i[a].image)):s.push(wa(i[a]))}else s=wa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yi.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}xh.prototype.isSource=!0;let i0=0;class Pt extends gi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=un,i=un,s=zt,a=Zs,o=hn,l=pi,c=1,u=On){super(),Object.defineProperty(this,"id",{value:i0++}),this.uuid=Sn(),this.name="",this.source=new xh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case Nn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case Nn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=gh;Pt.prototype.isTexture=!0;class rt{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],y=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,T=(d+1)/2,b=(y+1)/2,A=(u+f)/4,k=(h+m)/4,z=(g+p)/4;return E>T&&E>b?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=k/n):T>b?T<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(T),n=A/i,s=z/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=k/s,i=z/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(h-m)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}rt.prototype.isVector4=!0;class Xt extends gi{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Xt.prototype.isWebGLRenderTarget=!0;class Ys extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ys.prototype.isDataArrayTexture=!0;class r0 extends Xt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Ys(null,e,t,n),this.texture.isRenderTargetTexture=!0}}r0.prototype.isWebGLArrayRenderTarget=!0;class Ao extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ao.prototype.isData3DTexture=!0;class s0 extends Xt{constructor(e,t,n){super(e,t),this.depth=n,this.texture=new Ao(null,e,t,n),this.texture.isRenderTargetTexture=!0}}s0.prototype.isWebGL3DRenderTarget=!0;class a0 extends Xt{constructor(e,t,n,i={}){super(e,t,i);const s=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}a0.prototype.isWebGLMultipleRenderTargets=!0;class Zt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-o;const y=l*f+c*d+u*g+h*m,v=y>=0?1:-1,E=1-y*y;if(E>Number.EPSILON){const b=Math.sqrt(E),A=Math.atan2(b,y*v);p=Math.sin(p*A)/b,o=Math.sin(o*A)/b}const T=o*v;if(l=l*p+f*T,c=c*p+d*T,u=u*p+g*T,h=h*p+m*T,p===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Zt.prototype.isQuaternion=!0;class M{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}M.prototype.isVector3=!0;const Ma=new M,ac=new Zt;class pn{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)ri.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox),Sa.applyMatrix4(e.matrixWorld),this.union(Sa);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),ts.subVectors(this.max,yr),Mi.subVectors(e.a,yr),Si.subVectors(e.b,yr),Ti.subVectors(e.c,yr),Vn.subVectors(Si,Mi),Hn.subVectors(Ti,Si),si.subVectors(Mi,Ti);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-si.z,si.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,si.z,0,-si.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-si.y,si.x,0];return!Ta(t,Mi,Si,Ti,ts)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Mi,Si,Ti,ts))?!1:(ns.crossVectors(Vn,Hn),t=[ns.x,ns.y,ns.z],Ta(t,Mi,Si,Ti,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}pn.prototype.isBox3=!0;const Cn=[new M,new M,new M,new M,new M,new M,new M,new M],ri=new M,Sa=new pn,Mi=new M,Si=new M,Ti=new M,Vn=new M,Hn=new M,si=new M,yr=new M,ts=new M,ns=new M,ai=new M;function Ta(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ai.fromArray(r,s);const o=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const o0=new pn,oc=new M,is=new M,Ea=new M;class or{constructor(e=new M,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):o0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ea.subVectors(e,this.center);const t=Ea.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Ea.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?is.set(0,0,1).multiplyScalar(e.radius):is.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(oc.copy(e.center).add(is)),this.expandByPoint(oc.copy(e.center).sub(is)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new M,Aa=new M,rs=new M,Gn=new M,Ca=new M,ss=new M,Ra=new M;class lr{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.direction).multiplyScalar(t).add(this.origin),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Aa.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rs),o=Gn.dot(this.direction),l=-Gn.dot(rs),c=Gn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(rs).multiplyScalar(f).add(Aa),d}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||n!==n)&&(n=s),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,i,s){Ca.subVectors(t,e),ss.subVectors(n,e),Ra.crossVectors(Ca,ss);let a=this.direction.dot(Ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const l=o*this.direction.dot(ss.crossVectors(Gn,ss));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(Gn));if(c<0||l+c>a)return null;const u=-o*Gn.dot(Ra);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,a,o,l,c,u,h,f,d,g,m,p){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=h,y[14]=f,y[3]=d,y[7]=g,y[11]=m,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ei.setFromMatrixColumn(e,0).length(),s=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,c0)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Wn.crossVectors(n,Yt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Wn.crossVectors(n,Yt)),Wn.normalize(),as.crossVectors(Yt,Wn),i[0]=Wn.x,i[4]=as.x,i[8]=Yt.x,i[1]=Wn.y,i[5]=as.y,i[9]=Yt.y,i[2]=Wn.z,i[6]=as.z,i[10]=Yt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],y=n[14],v=n[3],E=n[7],T=n[11],b=n[15],A=i[0],k=i[4],z=i[8],ie=i[12],O=i[1],_=i[5],L=i[9],G=i[13],C=i[2],I=i[6],N=i[10],U=i[14],P=i[3],q=i[7],K=i[11],Q=i[15];return s[0]=a*A+o*O+l*C+c*P,s[4]=a*k+o*_+l*I+c*q,s[8]=a*z+o*L+l*N+c*K,s[12]=a*ie+o*G+l*U+c*Q,s[1]=u*A+h*O+f*C+d*P,s[5]=u*k+h*_+f*I+d*q,s[9]=u*z+h*L+f*N+d*K,s[13]=u*ie+h*G+f*U+d*Q,s[2]=g*A+m*O+p*C+y*P,s[6]=g*k+m*_+p*I+y*q,s[10]=g*z+m*L+p*N+y*K,s[14]=g*ie+m*G+p*U+y*Q,s[3]=v*A+E*O+T*C+b*P,s[7]=v*k+E*_+T*I+b*q,s[11]=v*z+E*L+T*N+b*K,s[15]=v*ie+E*G+T*U+b*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],y=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+m*(+t*l*d-t*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+p*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+y*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],y=e[15],v=h*p*c-m*f*c+m*l*d-o*p*d-h*l*y+o*f*y,E=g*f*c-u*p*c-g*l*d+a*p*d+u*l*y-a*f*y,T=u*m*c-g*h*c+g*o*d-a*m*d-u*o*y+a*h*y,b=g*h*l-u*m*l-g*o*f+a*m*f+u*o*p-a*h*p,A=t*v+n*E+i*T+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/A;return e[0]=v*k,e[1]=(m*f*s-h*p*s-m*i*d+n*p*d+h*i*y-n*f*y)*k,e[2]=(o*p*s-m*l*s+m*i*c-n*p*c-o*i*y+n*l*y)*k,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*k,e[4]=E*k,e[5]=(u*p*s-g*f*s+g*i*d-t*p*d-u*i*y+t*f*y)*k,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*y-t*l*y)*k,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*d+t*l*d)*k,e[8]=T*k,e[9]=(g*h*s-u*m*s-g*n*d+t*m*d+u*n*y-t*h*y)*k,e[10]=(a*m*s-g*o*s+g*n*c-t*m*c-a*n*y+t*o*y)*k,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*k,e[12]=b*k,e[13]=(u*m*i-g*h*i+g*n*f-t*m*f-u*n*p+t*h*p)*k,e[14]=(g*o*i-a*m*i-g*n*l+t*m*l+a*n*p-t*o*p)*k,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*k,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,m=a*u,p=a*h,y=o*h,v=l*c,E=l*u,T=l*h,b=n.x,A=n.y,k=n.z;return i[0]=(1-(m+y))*b,i[1]=(d+T)*b,i[2]=(g-E)*b,i[3]=0,i[4]=(d-T)*A,i[5]=(1-(f+y))*A,i[6]=(p+v)*A,i[7]=0,i[8]=(g+E)*k,i[9]=(p-v)*k,i[10]=(1-(f+m))*k,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/s,u=1/a,h=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,f=(n+i)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}Se.prototype.isMatrix4=!0;const Ei=new M,on=new Se,l0=new M(0,0,0),c0=new M(1,1,1),Wn=new M,as=new M,Yt=new M,lc=new Se,cc=new Zt;class vi{constructor(e=0,t=0,n=0,i=vi.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}vi.prototype.isEuler=!0;vi.DefaultOrder="XYZ";vi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u0=0;const uc=new M,Ai=new Zt,Ln=new Se,os=new M,vr=new M,h0=new M,f0=new Zt,hc=new M(1,0,0),fc=new M(0,1,0),dc=new M(0,0,1),d0={type:"added"},pc={type:"removed"};class nt extends gi{constructor(){super(),Object.defineProperty(this,"id",{value:u0++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DefaultUp.clone();const e=new M,t=new vi,n=new Zt,i=new M(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new Ut}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(vr,os,this.up):Ln.lookAt(os,vr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(d0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DefaultUp=new M(0,1,0);nt.DefaultMatrixAutoUpdate=!0;nt.prototype.isObject3D=!0;const ln=new M,kn=new M,La=new M,Pn=new M,Ci=new M,Ri=new M,mc=new M,ka=new M,Pa=new M,Ia=new M;class Rt{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),kn.subVectors(n,t),La.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(kn),l=ln.dot(La),c=kn.dot(kn),u=kn.dot(La),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Pn),l.set(0,0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),kn.subVectors(e,t),ln.cross(kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),ln.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Rt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ci.subVectors(i,n),Ri.subVectors(s,n),ka.subVectors(e,n);const l=Ci.dot(ka),c=Ri.dot(ka);if(l<=0&&c<=0)return t.copy(n);Pa.subVectors(e,i);const u=Ci.dot(Pa),h=Ri.dot(Pa);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ci,a);Ia.subVectors(e,s);const d=Ci.dot(Ia),g=Ri.dot(Ia);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ri,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return mc.subVectors(s,i),o=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(mc,o);const y=1/(p+m+f);return a=m*y,o=f*y,t.copy(n).addScaledVector(Ci,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let p0=0;class It extends gi{constructor(){super(),Object.defineProperty(this,"id",{value:p0++}),this.uuid=Sn(),this.name="",this.type="Material",this.fog=!0,this.blending=qi,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===dh;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}It.prototype.isMaterial=!0;It.fromType=function(){return null};class Gr extends It{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Gr.prototype.isMeshBasicMaterial=!0;const At=new M,ls=new J;class kt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Nr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new xe),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new J),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new M),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new rt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}kt.prototype.isBufferAttribute=!0;class wh extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mh extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class m0 extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}m0.prototype.isFloat16BufferAttribute=!0;class Nt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let g0=0;const en=new Se,Da=new nt,Li=new M,Kt=new pn,_r=new pn,Dt=new M;class yt extends gi{constructor(){super(),Object.defineProperty(this,"id",{value:g0++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vh(e)?Mh:wh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ut().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(Kt.min,_r.min),Kt.expandByPoint(Dt),Dt.addVectors(Kt.max,_r.max),Kt.expandByPoint(Dt)):(Kt.expandByPoint(_r.min),Kt.expandByPoint(_r.max))}Kt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Dt.add(Li)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<o;O++)c[O]=new M,u[O]=new M;const h=new M,f=new M,d=new M,g=new J,m=new J,p=new J,y=new M,v=new M;function E(O,_,L){h.fromArray(i,O*3),f.fromArray(i,_*3),d.fromArray(i,L*3),g.fromArray(a,O*2),m.fromArray(a,_*2),p.fromArray(a,L*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const G=1/(m.x*p.y-p.x*m.y);isFinite(G)&&(y.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(G),v.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(G),c[O].add(y),c[_].add(y),c[L].add(y),u[O].add(v),u[_].add(v),u[L].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let O=0,_=T.length;O<_;++O){const L=T[O],G=L.start,C=L.count;for(let I=G,N=G+C;I<N;I+=3)E(n[I+0],n[I+1],n[I+2])}const b=new M,A=new M,k=new M,z=new M;function ie(O){k.fromArray(s,O*3),z.copy(k);const _=c[O];b.copy(_),b.sub(k.multiplyScalar(k.dot(_))).normalize(),A.crossVectors(z,_);const G=A.dot(u[O])<0?-1:1;l[O*4]=b.x,l[O*4+1]=b.y,l[O*4+2]=b.z,l[O*4+3]=G}for(let O=0,_=T.length;O<_;++O){const L=T[O],G=L.start,C=L.count;for(let I=G,N=G+C;I<N;I+=3)ie(n[I+0]),ie(n[I+1]),ie(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new M,s=new M,a=new M,o=new M,l=new M,c=new M,u=new M,h=new M;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,f=c;h<u;h++,f++)a[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let y=0;y<u;y++)f[g++]=c[d++]}return new kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}yt.prototype.isBufferGeometry=!0;const gc=new Se,ki=new lr,za=new or,$n=new M,qn=new M,Xn=new M,Na=new M,Fa=new M,Ba=new M,cs=new M,us=new M,hs=new M,fs=new J,ds=new J,ps=new J,Oa=new M,ms=new M;class qt extends nt{constructor(e=new yt,t=new Gr){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),e.ray.intersectsSphere(za)===!1)||(gc.copy(s).invert(),ki.copy(e.ray).applyMatrix4(gc),n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1))return;let a;if(n.isBufferGeometry){const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const y=d[m],v=i[y.materialIndex],E=Math.max(y.start,g.start),T=Math.min(o.count,Math.min(y.start+y.count,g.start+g.count));for(let b=E,A=T;b<A;b+=3){const k=o.getX(b),z=o.getX(b+1),ie=o.getX(b+2);a=gs(this,v,e,ki,l,c,u,h,f,k,z,ie),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let y=m,v=p;y<v;y+=3){const E=o.getX(y),T=o.getX(y+1),b=o.getX(y+2);a=gs(this,i,e,ki,l,c,u,h,f,E,T,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,p=d.length;m<p;m++){const y=d[m],v=i[y.materialIndex],E=Math.max(y.start,g.start),T=Math.min(l.count,Math.min(y.start+y.count,g.start+g.count));for(let b=E,A=T;b<A;b+=3){const k=b,z=b+1,ie=b+2;a=gs(this,v,e,ki,l,c,u,h,f,k,z,ie),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let y=m,v=p;y<v;y+=3){const E=y,T=y+1,b=y+2;a=gs(this,i,e,ki,l,c,u,h,f,E,T,b),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}qt.prototype.isMesh=!0;function y0(r,e,t,n,i,s,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side!==Ji,o),l===null)return null;ms.copy(o),ms.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:r}}function gs(r,e,t,n,i,s,a,o,l,c,u,h){$n.fromBufferAttribute(i,c),qn.fromBufferAttribute(i,u),Xn.fromBufferAttribute(i,h);const f=r.morphTargetInfluences;if(s&&f){cs.set(0,0,0),us.set(0,0,0),hs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],y=s[g];p!==0&&(Na.fromBufferAttribute(y,c),Fa.fromBufferAttribute(y,u),Ba.fromBufferAttribute(y,h),a?(cs.addScaledVector(Na,p),us.addScaledVector(Fa,p),hs.addScaledVector(Ba,p)):(cs.addScaledVector(Na.sub($n),p),us.addScaledVector(Fa.sub(qn),p),hs.addScaledVector(Ba.sub(Xn),p)))}$n.add(cs),qn.add(us),Xn.add(hs)}r.isSkinnedMesh&&(r.boneTransform(c,$n),r.boneTransform(u,qn),r.boneTransform(h,Xn));const d=y0(r,e,t,n,$n,qn,Xn,Oa);if(d){o&&(fs.fromBufferAttribute(o,c),ds.fromBufferAttribute(o,u),ps.fromBufferAttribute(o,h),d.uv=Rt.getUV(Oa,$n,qn,Xn,fs,ds,ps,new J)),l&&(fs.fromBufferAttribute(l,c),ds.fromBufferAttribute(l,u),ps.fromBufferAttribute(l,h),d.uv2=Rt.getUV(Oa,$n,qn,Xn,fs,ds,ps,new J));const g={a:c,b:u,c:h,normal:new M,materialIndex:0};Rt.getNormal($n,qn,Xn,g.normal),d.face=g}return d}class Wr extends yt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(u,3)),this.setAttribute("uv",new Nt(h,2));function g(m,p,y,v,E,T,b,A,k,z,ie){const O=T/k,_=b/z,L=T/2,G=b/2,C=A/2,I=k+1,N=z+1;let U=0,P=0;const q=new M;for(let K=0;K<N;K++){const Q=K*_-G;for(let ee=0;ee<I;ee++){const he=ee*O-L;q[m]=he*v,q[p]=Q*E,q[y]=C,c.push(q.x,q.y,q.z),q[m]=0,q[p]=0,q[y]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(ee/k),h.push(1-K/z),U+=1}}for(let K=0;K<z;K++)for(let Q=0;Q<k;Q++){const ee=f+Q+I*K,he=f+Q+I*(K+1),$e=f+(Q+1)+I*(K+1),Pe=f+(Q+1)+I*K;l.push(ee,he,Pe),l.push(he,$e,Pe),P+=6}o.addGroup(d,P,ie),d+=P,f+=U}}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=Qi(r[t]);for(const i in n)e[i]=n[i]}return e}const v0={clone:Qi,merge:Ht};var _0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends It{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=_0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}tn.prototype.isShaderMaterial=!0;class Co extends nt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Co.prototype.isCamera=!0;class Jt extends Co{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Jt.prototype.isPerspectiveCamera=!0;const Pi=90,Ii=1;class Ro extends nt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Jt(Pi,Ii,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new M(1,0,0)),this.add(i);const s=new Jt(Pi,Ii,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new M(-1,0,0)),this.add(s);const a=new Jt(Pi,Ii,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new M(0,1,0)),this.add(a);const o=new Jt(Pi,Ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new M(0,-1,0)),this.add(o);const l=new Jt(Pi,Ii,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new M(0,0,1)),this.add(l);const c=new Jt(Pi,Ii,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new M(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.outputEncoding,f=e.toneMapping,d=e.xr.enabled;e.outputEncoding=On,e.toneMapping=Fn,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.outputEncoding=h,e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ks extends Pt{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zi,super(e,t,n,i,s,a,o,l,c,u),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ks.prototype.isCubeTexture=!0;class Sh extends Xt{constructor(e,t={}){super(e,e,t);const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ks(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Yn});s.uniforms.tEquirect.value=t;const a=new qt(i,s),o=t.minFilter;return t.minFilter===Zs&&(t.minFilter=zt),new Ro(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}Sh.prototype.isWebGLCubeRenderTarget=!0;const Ua=new M,b0=new M,w0=new Ut;class zn{constructor(e=new M(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ua.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||w0.getNormalMatrix(e),i=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}zn.prototype.isPlane=!0;const Di=new or,ys=new M;class Qs{constructor(e=new zn,t=new zn,n=new zn,i=new zn,s=new zn,a=new zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],y=n[13],v=n[14],E=n[15];return t[0].setComponents(o-i,h-l,m-f,E-p).normalize(),t[1].setComponents(o+i,h+l,m+f,E+p).normalize(),t[2].setComponents(o+s,h+c,m+d,E+y).normalize(),t[3].setComponents(o-s,h-c,m-d,E-y).normalize(),t[4].setComponents(o-a,h-u,m-g,E-v).normalize(),t[5].setComponents(o+a,h+u,m+g,E+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ys.x=i.normal.x>0?e.max.x:e.min.x,ys.y=i.normal.y>0?e.max.y:e.min.y,ys.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function M0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;r.bindBuffer(h,c),d.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):r.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ea extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],m=[],p=[];for(let y=0;y<u;y++){const v=y*f-a;for(let E=0;E<c;E++){const T=E*h-s;g.push(T,-v,0),m.push(0,0,1),p.push(E/o),p.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){const E=v+c*y,T=v+c*(y+1),b=v+1+c*(y+1),A=v+1+c*y;d.push(E,T,A),d.push(T,b,A)}this.setIndex(d),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(m,3)),this.setAttribute("uv",new Nt(p,2))}static fromJSON(e){return new ea(e.width,e.height,e.widthSegments,e.heightSegments)}}var S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0="vec3 transformed = vec3( position );",k0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,I0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,G0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,oy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,yy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,by=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Py=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Iy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Ny=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$y=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ky=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ev=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,hv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,fv=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,dv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,pv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,mv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,gv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,vv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ev=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kv=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ov=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$v=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,We={alphamap_fragment:S0,alphamap_pars_fragment:T0,alphatest_fragment:E0,alphatest_pars_fragment:A0,aomap_fragment:C0,aomap_pars_fragment:R0,begin_vertex:L0,beginnormal_vertex:k0,bsdfs:P0,bumpmap_pars_fragment:I0,clipping_planes_fragment:D0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:F0,color_fragment:B0,color_pars_fragment:O0,color_pars_vertex:U0,color_vertex:V0,common:H0,cube_uv_reflection_fragment:G0,defaultnormal_vertex:W0,displacementmap_pars_vertex:$0,displacementmap_vertex:q0,emissivemap_fragment:X0,emissivemap_pars_fragment:j0,encodings_fragment:J0,encodings_pars_fragment:Z0,envmap_fragment:Y0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Q0,envmap_pars_vertex:ey,envmap_physical_pars_fragment:hy,envmap_vertex:ty,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:ry,fog_pars_fragment:sy,gradientmap_pars_fragment:ay,lightmap_fragment:oy,lightmap_pars_fragment:ly,lights_lambert_vertex:cy,lights_pars_begin:uy,lights_toon_fragment:fy,lights_toon_pars_fragment:dy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:gy,lights_physical_pars_fragment:yy,lights_fragment_begin:vy,lights_fragment_maps:_y,lights_fragment_end:xy,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:wy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:Sy,map_fragment:Ty,map_pars_fragment:Ey,map_particle_fragment:Ay,map_particle_pars_fragment:Cy,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:Ly,morphcolor_vertex:ky,morphnormal_vertex:Py,morphtarget_pars_vertex:Iy,morphtarget_vertex:Dy,normal_fragment_begin:zy,normal_fragment_maps:Ny,normal_pars_fragment:Fy,normal_pars_vertex:By,normal_vertex:Oy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Gy,output_fragment:Wy,packing:$y,premultiplied_alpha_fragment:qy,project_vertex:Xy,dithering_fragment:jy,dithering_pars_fragment:Jy,roughnessmap_fragment:Zy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:Ky,shadowmap_pars_vertex:Qy,shadowmap_vertex:ev,shadowmask_pars_fragment:tv,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:rv,skinnormal_vertex:sv,specularmap_fragment:av,specularmap_pars_fragment:ov,tonemapping_fragment:lv,tonemapping_pars_fragment:cv,transmission_fragment:uv,transmission_pars_fragment:hv,uv_pars_fragment:fv,uv_pars_vertex:dv,uv_vertex:pv,uv2_pars_fragment:mv,uv2_pars_vertex:gv,uv2_vertex:yv,worldpos_vertex:vv,background_vert:_v,background_frag:xv,cube_vert:bv,cube_frag:wv,depth_vert:Mv,depth_frag:Sv,distanceRGBA_vert:Tv,distanceRGBA_frag:Ev,equirect_vert:Av,equirect_frag:Cv,linedashed_vert:Rv,linedashed_frag:Lv,meshbasic_vert:kv,meshbasic_frag:Pv,meshlambert_vert:Iv,meshlambert_frag:Dv,meshmatcap_vert:zv,meshmatcap_frag:Nv,meshnormal_vert:Fv,meshnormal_frag:Bv,meshphong_vert:Ov,meshphong_frag:Uv,meshphysical_vert:Vv,meshphysical_frag:Hv,meshtoon_vert:Gv,meshtoon_frag:Wv,points_vert:$v,points_frag:qv,shadow_vert:Xv,shadow_frag:jv,sprite_vert:Jv,sprite_frag:Zv},oe={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},wn={basic:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new xe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ht([oe.points,oe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ht([oe.common,oe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ht([oe.sprite,oe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null}},vertexShader:We.background_vert,fragmentShader:We.background_frag},cube:{uniforms:Ht([oe.envmap,{opacity:{value:1}}]),vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ht([oe.common,oe.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ht([oe.lights,oe.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wn.physical={uniforms:Ht([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new J(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};function Yv(r,e,t,n,i,s){const a=new xe(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function d(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const E=r.xr,T=E.getSession&&E.getSession();T&&T.environmentBlendMode==="additive"&&(v=null),v===null?g(a,o):v&&v.isColor&&(g(v,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Js)?(c===void 0&&(c=new qt(new Wr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Qi(wn.cube.uniforms),vertexShader:wn.cube.vertexShader,fragmentShader:wn.cube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qt(new ea(2,2),new tn({name:"BackgroundMaterial",uniforms:Qi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){t.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),o=p,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:d}}function Kv(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(C,I,N,U,P){let q=!1;if(a){const K=m(U,N,I);c!==K&&(c=K,d(c.object)),q=y(U,P),q&&v(U,P)}else{const K=I.wireframe===!0;(c.geometry!==U.id||c.program!==N.id||c.wireframe!==K)&&(c.geometry=U.id,c.program=N.id,c.wireframe=K,q=!0)}C.isInstancedMesh===!0&&(q=!0),P!==null&&t.update(P,34963),(q||u)&&(u=!1,z(C,I,N,U),P!==null&&r.bindBuffer(34963,t.get(P).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(C){return n.isWebGL2?r.bindVertexArray(C):s.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?r.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function m(C,I,N){const U=N.wireframe===!0;let P=o[C.id];P===void 0&&(P={},o[C.id]=P);let q=P[I.id];q===void 0&&(q={},P[I.id]=q);let K=q[U];return K===void 0&&(K=p(f()),q[U]=K),K}function p(C){const I=[],N=[],U=[];for(let P=0;P<i;P++)I[P]=0,N[P]=0,U[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:C,attributes:{},index:null}}function y(C,I){const N=c.attributes,U=C.attributes;let P=0;for(const q in U){const K=N[q],Q=U[q];if(K===void 0||K.attribute!==Q||K.data!==Q.data)return!0;P++}return c.attributesNum!==P||c.index!==I}function v(C,I){const N={},U=C.attributes;let P=0;for(const q in U){const K=U[q],Q={};Q.attribute=K,K.data&&(Q.data=K.data),N[q]=Q,P++}c.attributes=N,c.attributesNum=P,c.index=I}function E(){const C=c.newAttributes;for(let I=0,N=C.length;I<N;I++)C[I]=0}function T(C){b(C,0)}function b(C,I){const N=c.newAttributes,U=c.enabledAttributes,P=c.attributeDivisors;N[C]=1,U[C]===0&&(r.enableVertexAttribArray(C),U[C]=1),P[C]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,I),P[C]=I)}function A(){const C=c.newAttributes,I=c.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==C[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function k(C,I,N,U,P,q){n.isWebGL2===!0&&(N===5124||N===5125)?r.vertexAttribIPointer(C,I,N,P,q):r.vertexAttribPointer(C,I,N,U,P,q)}function z(C,I,N,U){if(n.isWebGL2===!1&&(C.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const P=U.attributes,q=N.getAttributes(),K=I.defaultAttributeValues;for(const Q in q){const ee=q[Q];if(ee.location>=0){let he=P[Q];if(he===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),he!==void 0){const $e=he.normalized,Pe=he.itemSize,$=t.get(he);if($===void 0)continue;const Ke=$.buffer,Ne=$.type,Fe=$.bytesPerElement;if(he.isInterleavedBufferAttribute){const re=he.data,Ge=re.stride,W=he.offset;if(re.isInstancedInterleavedBuffer){for(let j=0;j<ee.locationSize;j++)b(ee.location+j,re.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let j=0;j<ee.locationSize;j++)T(ee.location+j);r.bindBuffer(34962,Ke);for(let j=0;j<ee.locationSize;j++)k(ee.location+j,Pe/ee.locationSize,Ne,$e,Ge*Fe,(W+Pe/ee.locationSize*j)*Fe)}else{if(he.isInstancedBufferAttribute){for(let re=0;re<ee.locationSize;re++)b(ee.location+re,he.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let re=0;re<ee.locationSize;re++)T(ee.location+re);r.bindBuffer(34962,Ke);for(let re=0;re<ee.locationSize;re++)k(ee.location+re,Pe/ee.locationSize,Ne,$e,Pe*Fe,Pe/ee.locationSize*re*Fe)}}else if(K!==void 0){const $e=K[Q];if($e!==void 0)switch($e.length){case 2:r.vertexAttrib2fv(ee.location,$e);break;case 3:r.vertexAttrib3fv(ee.location,$e);break;case 4:r.vertexAttrib4fv(ee.location,$e);break;default:r.vertexAttrib1fv(ee.location,$e)}}}}A()}function ie(){L();for(const C in o){const I=o[C];for(const N in I){const U=I[N];for(const P in U)g(U[P].object),delete U[P];delete I[N]}delete o[C]}}function O(C){if(o[C.id]===void 0)return;const I=o[C.id];for(const N in I){const U=I[N];for(const P in U)g(U[P].object),delete U[P];delete I[N]}delete o[C.id]}function _(C){for(const I in o){const N=o[I];if(N[C.id]===void 0)continue;const U=N[C.id];for(const P in U)g(U[P].object),delete U[P];delete N[C.id]}}function L(){G(),u=!0,c!==l&&(c=l,d(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:G,dispose:ie,releaseStatesOfGeometry:O,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:T,disableUnusedAttributes:A}}function Qv(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(i)f=r,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function e_(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(k){if(k==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),y=r.getParameter(36348),v=r.getParameter(36349),E=f>0,T=a||e.has("OES_texture_float"),b=E&&T,A=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,floatFragmentTextures:T,floatVertexTextures:b,maxSamples:A}}function t_(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,y=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,E=v*4;let T=y.clippingState||null;l.value=T,T=u(g,f,E,d);for(let b=0;b!==E;++b)T[b]=t[b];y.clippingState=T,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const y=d+m*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<y)&&(p=new Float32Array(y));for(let E=0,T=d;E!==m;++E,T+=4)a.copy(h[E]).applyMatrix4(v,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function n_(r){let e=new WeakMap;function t(a,o){return o===ro?a.mapping=Zi:o===so&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ro||o===so)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Sh(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ta extends Co{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}ta.prototype.isOrthographicCamera=!0;const Gi=4,yc=[.125,.215,.35,.446,.526,.582],li=20,Va=new ta,vc=new xe;let Ha=null;const oi=(1+Math.sqrt(5))/2,zi=1/oi,_c=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,oi,zi),new M(0,oi,-zi),new M(zi,0,oi),new M(-zi,0,oi),new M(oi,zi,0),new M(-oi,zi,0)];class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ha=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ha),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ha=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Xi,format:hn,encoding:On,depthBuffer:!1},i=bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i_(s)),this._blurMaterial=r_(s,e,t)}return i}_compileMaterial(e){const t=new qt(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,i){const o=new Jt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(vc),u.toneMapping=Fn,u.autoClear=!1;const d=new Gr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new qt(new Wr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(vc),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(o.up.set(0,l[y],0),o.lookAt(c[y],0,0)):v===1?(o.up.set(0,0,l[y]),o.lookAt(0,c[y],0)):(o.up.set(0,l[y],0),o.lookAt(0,0,c[y]));const E=this._cubeSize;vs(i,v*E,y>2?E:0,E,E),u.setRenderTarget(i),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zi||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new qt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_c[(i-1)%_c.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new qt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*li-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):li;p>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const y=[];let v=0;for(let k=0;k<li;++k){const z=k/m,ie=Math.exp(-z*z/2);y.push(ie),k===0?v+=ie:k<p&&(v+=2*ie)}for(let k=0;k<y.length;k++)y[k]=y[k]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=y,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const T=this._sizeLods[i],b=3*T*(i>E-Gi?i-E+Gi:0),A=4*(this._cubeSize-T);vs(t,b,A,3*T,2*T),l.setRenderTarget(t),l.render(h,Va)}}function i_(r){const e=[],t=[],n=[];let i=r;const s=r-Gi+1+yc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Gi?l=yc[a-r+Gi-1]:a===0&&(l=0),n.push(l);const c=1/(o-1),u=-c/2,h=1+c/2,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,y=1,v=new Float32Array(m*g*d),E=new Float32Array(p*g*d),T=new Float32Array(y*g*d);for(let A=0;A<d;A++){const k=A%3*2/3-1,z=A>2?0:-1,ie=[k,z,0,k+2/3,z,0,k+2/3,z+1,0,k,z,0,k+2/3,z+1,0,k,z+1,0];v.set(ie,m*g*A),E.set(f,p*g*A);const O=[A,A,A,A,A,A];T.set(O,y*g*A)}const b=new yt;b.setAttribute("position",new kt(v,m)),b.setAttribute("uv",new kt(E,p)),b.setAttribute("faceIndex",new kt(T,y)),e.push(b),i>Gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bc(r,e,t){const n=new Xt(r,e,t);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function r_(r,e,t){const n=new Float32Array(li),i=new M(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function wc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Mc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function s_(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ro||l===so,u=l===Zi||l===Yi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new xc(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new xc(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function a_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function o_(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,y=m.length;p<y;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let E=0,T=v.length;E<T;E+=3){const b=v[E+0],A=v[E+1],k=v[E+2];f.push(b,A,A,k,k,b)}}else{const v=g.array;m=g.version;for(let E=0,T=v.length/3-1;E<T;E+=3){const b=E+0,A=E+1,k=E+2;f.push(b,A,A,k,k,b)}}const p=new(vh(f)?Mh:wh)(f,1);p.version=m;const y=s.get(h);y&&e.remove(y),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function l_(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){r.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function c_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function u_(r,e){return r[0]-e[0]}function h_(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Ga(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function f_(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new rt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let y=s.get(u);if(y===void 0||y.count!==p){let N=function(){C.dispose(),s.delete(u),u.removeEventListener("dispose",N)};var g=N;y!==void 0&&y.texture.dispose();const T=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,k=u.morphAttributes.position||[],z=u.morphAttributes.normal||[],ie=u.morphAttributes.color||[];let O=0;T===!0&&(O=1),b===!0&&(O=2),A===!0&&(O=3);let _=u.attributes.position.count*O,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const G=new Float32Array(_*L*4*p),C=new Ys(G,_,L,p);C.type=ui,C.needsUpdate=!0;const I=O*4;for(let U=0;U<p;U++){const P=k[U],q=z[U],K=ie[U],Q=_*L*4*U;for(let ee=0;ee<P.count;ee++){const he=ee*I;T===!0&&(a.fromBufferAttribute(P,ee),P.normalized===!0&&Ga(a,P),G[Q+he+0]=a.x,G[Q+he+1]=a.y,G[Q+he+2]=a.z,G[Q+he+3]=0),b===!0&&(a.fromBufferAttribute(q,ee),q.normalized===!0&&Ga(a,q),G[Q+he+4]=a.x,G[Q+he+5]=a.y,G[Q+he+6]=a.z,G[Q+he+7]=0),A===!0&&(a.fromBufferAttribute(K,ee),K.normalized===!0&&Ga(a,K),G[Q+he+8]=a.x,G[Q+he+9]=a.y,G[Q+he+10]=a.z,G[Q+he+11]=K.itemSize===4?a.w:1)}}y={count:p,texture:C,size:new J(_,L)},s.set(u,y),u.addEventListener("dispose",N)}let v=0;for(let T=0;T<d.length;T++)v+=d[T];const E=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(r,"morphTargetBaseInfluence",E),f.getUniforms().setValue(r,"morphTargetInfluences",d),f.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let b=0;b<m;b++)p[b]=[b,0];n[u.id]=p}for(let b=0;b<m;b++){const A=p[b];A[0]=b,A[1]=d[b]}p.sort(h_);for(let b=0;b<8;b++)b<m&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(u_);const y=u.morphAttributes.position,v=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const A=o[b],k=A[0],z=A[1];k!==Number.MAX_SAFE_INTEGER&&z?(y&&u.getAttribute("morphTarget"+b)!==y[k]&&u.setAttribute("morphTarget"+b,y[k]),v&&u.getAttribute("morphNormal"+b)!==v[k]&&u.setAttribute("morphNormal"+b,v[k]),i[b]=z,E+=z):(y&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),v&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const T=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(r,"morphTargetBaseInfluence",T),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function d_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Eh=new Pt,Ah=new Ys,Ch=new Ao,Rh=new Ks,Sc=[],Tc=[],Ec=new Float32Array(16),Ac=new Float32Array(9),Cc=new Float32Array(4);function cr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Sc[i];if(s===void 0&&(s=new Float32Array(i),Sc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function na(r,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function p_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function m_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function g_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function y_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function v_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,n))return;Cc.set(n),r.uniformMatrix2fv(this.addr,!1,Cc),Wt(t,n)}}function __(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,n))return;Ac.set(n),r.uniformMatrix3fv(this.addr,!1,Ac),Wt(t,n)}}function x_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,n))return;Ec.set(n),r.uniformMatrix4fv(this.addr,!1,Ec),Wt(t,n)}}function b_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function w_(r,e){const t=this.cache;jt(t,e)||(r.uniform2iv(this.addr,e),Wt(t,e))}function M_(r,e){const t=this.cache;jt(t,e)||(r.uniform3iv(this.addr,e),Wt(t,e))}function S_(r,e){const t=this.cache;jt(t,e)||(r.uniform4iv(this.addr,e),Wt(t,e))}function T_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function E_(r,e){const t=this.cache;jt(t,e)||(r.uniform2uiv(this.addr,e),Wt(t,e))}function A_(r,e){const t=this.cache;jt(t,e)||(r.uniform3uiv(this.addr,e),Wt(t,e))}function C_(r,e){const t=this.cache;jt(t,e)||(r.uniform4uiv(this.addr,e),Wt(t,e))}function R_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Eh,i)}function L_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ch,i)}function k_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rh,i)}function P_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ah,i)}function I_(r){switch(r){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return y_;case 35674:return v_;case 35675:return __;case 35676:return x_;case 5124:case 35670:return b_;case 35667:case 35671:return w_;case 35668:case 35672:return M_;case 35669:case 35673:return S_;case 5125:return T_;case 36294:return E_;case 36295:return A_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return R_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return k_;case 36289:case 36303:case 36311:case 36292:return P_}}function D_(r,e){r.uniform1fv(this.addr,e)}function z_(r,e){const t=cr(e,this.size,2);r.uniform2fv(this.addr,t)}function N_(r,e){const t=cr(e,this.size,3);r.uniform3fv(this.addr,t)}function F_(r,e){const t=cr(e,this.size,4);r.uniform4fv(this.addr,t)}function B_(r,e){const t=cr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function O_(r,e){const t=cr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function U_(r,e){const t=cr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function V_(r,e){r.uniform1iv(this.addr,e)}function H_(r,e){r.uniform2iv(this.addr,e)}function G_(r,e){r.uniform3iv(this.addr,e)}function W_(r,e){r.uniform4iv(this.addr,e)}function $_(r,e){r.uniform1uiv(this.addr,e)}function q_(r,e){r.uniform2uiv(this.addr,e)}function X_(r,e){r.uniform3uiv(this.addr,e)}function j_(r,e){r.uniform4uiv(this.addr,e)}function J_(r,e,t){const n=e.length,i=na(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Eh,i[s])}function Z_(r,e,t){const n=e.length,i=na(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Ch,i[s])}function Y_(r,e,t){const n=e.length,i=na(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Rh,i[s])}function K_(r,e,t){const n=e.length,i=na(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ah,i[s])}function Q_(r){switch(r){case 5126:return D_;case 35664:return z_;case 35665:return N_;case 35666:return F_;case 35674:return B_;case 35675:return O_;case 35676:return U_;case 5124:case 35670:return V_;case 35667:case 35671:return H_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return $_;case 36294:return q_;case 36295:return X_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return K_}}function ex(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=I_(e.type)}function Lh(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=Q_(e.type)}Lh.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Wt(e,r)};function kh(r){this.id=r,this.seq=[],this.map={}}kh.prototype.setValue=function(r,e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.setValue(r,e[a.id],t)}};const Wa=/(\w+)(\])?(\[|\.)?/g;function Rc(r,e){r.seq.push(e),r.map[e.id]=e}function tx(r,e,t){const n=r.name,i=n.length;for(Wa.lastIndex=0;;){const s=Wa.exec(n),a=Wa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Rc(t,c===void 0?new ex(o,r,e):new Lh(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new kh(o),Rc(t,h)),t=h}}}function Kn(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=r.getActiveUniform(e,n),s=r.getUniformLocation(e,i.name);tx(i,s,this)}}Kn.prototype.setValue=function(r,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(r,t,n)};Kn.prototype.setOptional=function(r,e,t){const n=e[t];n!==void 0&&this.setValue(r,t,n)};Kn.upload=function(r,e,t,n){for(let i=0,s=e.length;i!==s;++i){const a=e[i],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,n)}};Kn.seqWithValue=function(r,e){const t=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in e&&t.push(s)}return t};function Lc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let nx=0;function ix(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++)n.push(a+1+": "+t[a]);return n.join(`
`)}function rx(r){switch(r){case On:return["Linear","( value )"];case dt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function kc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return t.toUpperCase()+`

`+i+`

`+ix(r.getShaderSource(e),s)}function sx(r,e){const t=rx(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ax(r,e){let t;switch(e){case Ag:t="Linear";break;case Cg:t="Reinhard";break;case Rg:t="OptimizedCineon";break;case Lg:t="ACESFilmic";break;case kg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ox(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function lx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cx(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ar(r){return r!==""}function Pc(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(r){return r.replace(ux,hx)}function hx(r,e){const t=We[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return co(t)}const fx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,dx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(r){return r.replace(dx,Ph).replace(fx,px)}function px(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ph(r,e,t,n)}function Ph(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===sg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Er&&(e="SHADOWMAP_TYPE_VSM"),e}function gx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function vx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case js:e="ENVMAP_BLENDING_MULTIPLY";break;case Tg:e="ENVMAP_BLENDING_MIX";break;case Eg:e="ENVMAP_BLENDING_ADD";break}return e}function _x(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mx(t),c=gx(t),u=yx(t),h=vx(t),f=_x(t),d=t.isWebGL2?"":ox(t),g=lx(s),m=i.createProgram();let p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ar).join(`
`),p.length>0&&(p+=`
`),y=[d,g].filter(Ar).join(`
`),y.length>0&&(y+=`
`)):(p=[zc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),y=[d,zc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?We.tonemapping_pars_fragment:"",t.toneMapping!==Fn?ax("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.encodings_pars_fragment,sx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),a=co(a),a=Pc(a,t),a=Ic(a,t),o=co(o),o=Pc(o,t),o=Ic(o,t),a=Dc(a),o=Dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["#define varying in",t.glslVersion===rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const E=v+p+a,T=v+y+o,b=Lc(i,35633,E),A=Lc(i,35632,T);if(i.attachShader(m,b),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const ie=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(b).trim(),_=i.getShaderInfoLog(A).trim();let L=!0,G=!0;if(i.getProgramParameter(m,35714)===!1){L=!1;const C=kc(i,b,"vertex"),I=kc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+ie+`
`+C+`
`+I)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(O===""||_==="")&&(G=!1);G&&(this.diagnostics={runnable:L,programLog:ie,vertexShader:{log:O,prefix:p},fragmentShader:{log:_,prefix:y}})}i.deleteShader(b),i.deleteShader(A);let k;this.getUniforms=function(){return k===void 0&&(k=new Kn(i,m)),k};let z;return this.getAttributes=function(){return z===void 0&&(z=cx(i,m)),z},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=A,this}let bx=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Mx(e);t.set(e,n)}return t.get(e)}}class Mx{constructor(e){this.id=bx++,this.code=e,this.usedTimes=0}}function Sx(r,e,t,n,i,s,a){const o=new bh,l=new wx,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.floatVertexTextures,d=i.maxVertexUniforms,g=i.vertexTextures;let m=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(_){const G=_.skeleton.bones;if(f)return 1024;{const I=Math.floor((d-20)/4),N=Math.min(I,G.length);return N<G.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+G.length+" bones. This GPU supports "+N+"."),0):N}}function v(_,L,G,C,I){const N=C.fog,U=I.geometry,P=_.isMeshStandardMaterial?C.environment:null,q=(_.isMeshStandardMaterial?t:e).get(_.envMap||P),K=q&&q.mapping===Js?q.image.height:null,Q=p[_.type],ee=I.isSkinnedMesh?y(I):0;_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const he=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$e=he!==void 0?he.length:0;let Pe=0;U.morphAttributes.position!==void 0&&(Pe=1),U.morphAttributes.normal!==void 0&&(Pe=2),U.morphAttributes.color!==void 0&&(Pe=3);let $,Ke,Ne,Fe;if(Q){const ne=wn[Q];$=ne.vertexShader,Ke=ne.fragmentShader}else $=_.vertexShader,Ke=_.fragmentShader,l.update(_),Ne=l.getVertexShaderID(_),Fe=l.getFragmentShaderID(_);const re=r.getRenderTarget(),Ge=_.alphaTest>0,W=_.clearcoat>0;return{isWebGL2:u,shaderID:Q,shaderName:_.type,vertexShader:$,fragmentShader:Ke,defines:_.defines,customVertexShaderID:Ne,customFragmentShaderID:Fe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:g,outputEncoding:re===null?r.outputEncoding:re.isXRRenderTarget===!0?re.texture.encoding:On,map:!!_.map,matcap:!!_.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:K,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===e0,tangentSpaceNormalMap:_.normalMapType===ar,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===dt,clearcoat:W,clearcoatMap:W&&!!_.clearcoatMap,clearcoatRoughnessMap:W&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:W&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===qi,alphaMap:!!_.alphaMap,alphaTest:Ge,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!U.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!N,useFog:_.fog,fogExp2:N&&N.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0&&ee>0,maxBones:ee,useVertexTexture:f,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$e,morphTextureStride:Pe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:Fn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ji,flipSided:_.side===fn,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function E(_){const L=[];if(_.shaderID?L.push(_.shaderID):(L.push(_.customVertexShaderID),L.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)L.push(G),L.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(T(L,_),b(L,_),L.push(r.outputEncoding)),L.push(_.customProgramCacheKey),L.join()}function T(_,L){_.push(L.precision),_.push(L.outputEncoding),_.push(L.envMapMode),_.push(L.envMapCubeUVHeight),_.push(L.combine),_.push(L.vertexUvs),_.push(L.fogExp2),_.push(L.sizeAttenuation),_.push(L.maxBones),_.push(L.morphTargetsCount),_.push(L.morphAttributeCount),_.push(L.numDirLights),_.push(L.numPointLights),_.push(L.numSpotLights),_.push(L.numHemiLights),_.push(L.numRectAreaLights),_.push(L.numDirLightShadows),_.push(L.numPointLightShadows),_.push(L.numSpotLightShadows),_.push(L.shadowMapType),_.push(L.toneMapping),_.push(L.numClippingPlanes),_.push(L.numClipIntersection)}function b(_,L){o.disableAll(),L.isWebGL2&&o.enable(0),L.supportsVertexTextures&&o.enable(1),L.instancing&&o.enable(2),L.instancingColor&&o.enable(3),L.map&&o.enable(4),L.matcap&&o.enable(5),L.envMap&&o.enable(6),L.lightMap&&o.enable(7),L.aoMap&&o.enable(8),L.emissiveMap&&o.enable(9),L.bumpMap&&o.enable(10),L.normalMap&&o.enable(11),L.objectSpaceNormalMap&&o.enable(12),L.tangentSpaceNormalMap&&o.enable(13),L.clearcoat&&o.enable(14),L.clearcoatMap&&o.enable(15),L.clearcoatRoughnessMap&&o.enable(16),L.clearcoatNormalMap&&o.enable(17),L.displacementMap&&o.enable(18),L.specularMap&&o.enable(19),L.roughnessMap&&o.enable(20),L.metalnessMap&&o.enable(21),L.gradientMap&&o.enable(22),L.alphaMap&&o.enable(23),L.alphaTest&&o.enable(24),L.vertexColors&&o.enable(25),L.vertexAlphas&&o.enable(26),L.vertexUvs&&o.enable(27),L.vertexTangents&&o.enable(28),L.uvsVertexOnly&&o.enable(29),L.fog&&o.enable(30),_.push(o.mask),o.disableAll(),L.useFog&&o.enable(0),L.flatShading&&o.enable(1),L.logarithmicDepthBuffer&&o.enable(2),L.skinning&&o.enable(3),L.useVertexTexture&&o.enable(4),L.morphTargets&&o.enable(5),L.morphNormals&&o.enable(6),L.morphColors&&o.enable(7),L.premultipliedAlpha&&o.enable(8),L.shadowMapEnabled&&o.enable(9),L.physicallyCorrectLights&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.depthPacking&&o.enable(13),L.dithering&&o.enable(14),L.specularIntensityMap&&o.enable(15),L.specularColorMap&&o.enable(16),L.transmission&&o.enable(17),L.transmissionMap&&o.enable(18),L.thicknessMap&&o.enable(19),L.sheen&&o.enable(20),L.sheenColorMap&&o.enable(21),L.sheenRoughnessMap&&o.enable(22),L.decodeVideoTexture&&o.enable(23),L.opaque&&o.enable(24),_.push(o.mask)}function A(_){const L=p[_.type];let G;if(L){const C=wn[L];G=v0.clone(C.uniforms)}else G=_.uniforms;return G}function k(_,L){let G;for(let C=0,I=c.length;C<I;C++){const N=c[C];if(N.cacheKey===L){G=N,++G.usedTimes;break}}return G===void 0&&(G=new xx(r,L,_,s),c.push(G)),G}function z(_){if(--_.usedTimes===0){const L=c.indexOf(_);c[L]=c[c.length-1],c.pop(),_.destroy()}}function ie(_){l.remove(_)}function O(){l.dispose()}return{getParameters:v,getProgramCacheKey:E,getUniforms:A,acquireProgram:k,releaseProgram:z,releaseShaderCache:ie,programs:c,dispose:O}}function Tx(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ex(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Nc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,g,m,p){let y=r[e];return y===void 0?(y={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},r[e]=y):(y.id=h.id,y.object=h,y.geometry=f,y.material=d,y.groupOrder=g,y.renderOrder=h.renderOrder,y.z=m,y.group=p),e++,y}function o(h,f,d,g,m,p){const y=a(h,f,d,g,m,p);d.transmission>0?n.push(y):d.transparent===!0?i.push(y):t.push(y)}function l(h,f,d,g,m,p){const y=a(h,f,d,g,m,p);d.transmission>0?n.unshift(y):d.transparent===!0?i.unshift(y):t.unshift(y)}function c(h,f){t.length>1&&t.sort(h||Ex),n.length>1&&n.sort(f||Nc),i.length>1&&i.sort(f||Nc)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function Ax(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Fc,r.set(n,[s])):i>=r.get(n).length?(s=new Fc,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new xe};break;case"SpotLight":t={position:new M,direction:new M,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new M,halfWidth:new M,halfHeight:new M};break}return r[e.id]=t,t}}}function Rx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Lx=0;function kx(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Px(r,e){const t=new Cx,n=Rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new M);const s=new M,a=new Se,o=new Se;function l(u,h){let f=0,d=0,g=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let m=0,p=0,y=0,v=0,E=0,T=0,b=0,A=0;u.sort(kx);const k=h!==!0?Math.PI:1;for(let ie=0,O=u.length;ie<O;ie++){const _=u[ie],L=_.color,G=_.intensity,C=_.distance,I=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)f+=L.r*G*k,d+=L.g*G*k,g+=L.b*G*k;else if(_.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(_.sh.coefficients[N],G);else if(_.isDirectionalLight){const N=t.get(_);if(N.color.copy(_.color).multiplyScalar(_.intensity*k),_.castShadow){const U=_.shadow,P=n.get(_);P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,i.directionalShadow[m]=P,i.directionalShadowMap[m]=I,i.directionalShadowMatrix[m]=_.shadow.matrix,T++}i.directional[m]=N,m++}else if(_.isSpotLight){const N=t.get(_);if(N.position.setFromMatrixPosition(_.matrixWorld),N.color.copy(L).multiplyScalar(G*k),N.distance=C,N.coneCos=Math.cos(_.angle),N.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),N.decay=_.decay,_.castShadow){const U=_.shadow,P=n.get(_);P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=I,i.spotShadowMatrix[y]=_.shadow.matrix,A++}i.spot[y]=N,y++}else if(_.isRectAreaLight){const N=t.get(_);N.color.copy(L).multiplyScalar(G),N.halfWidth.set(_.width*.5,0,0),N.halfHeight.set(0,_.height*.5,0),i.rectArea[v]=N,v++}else if(_.isPointLight){const N=t.get(_);if(N.color.copy(_.color).multiplyScalar(_.intensity*k),N.distance=_.distance,N.decay=_.decay,_.castShadow){const U=_.shadow,P=n.get(_);P.shadowBias=U.bias,P.shadowNormalBias=U.normalBias,P.shadowRadius=U.radius,P.shadowMapSize=U.mapSize,P.shadowCameraNear=U.camera.near,P.shadowCameraFar=U.camera.far,i.pointShadow[p]=P,i.pointShadowMap[p]=I,i.pointShadowMatrix[p]=_.shadow.matrix,b++}i.point[p]=N,p++}else if(_.isHemisphereLight){const N=t.get(_);N.skyColor.copy(_.color).multiplyScalar(G*k),N.groundColor.copy(_.groundColor).multiplyScalar(G*k),i.hemi[E]=N,E++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const z=i.hash;(z.directionalLength!==m||z.pointLength!==p||z.spotLength!==y||z.rectAreaLength!==v||z.hemiLength!==E||z.numDirectionalShadows!==T||z.numPointShadows!==b||z.numSpotShadows!==A)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=v,i.point.length=p,i.hemi.length=E,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotShadowMatrix.length=A,z.directionalLength=m,z.pointLength=p,z.spotLength=y,z.rectAreaLength=v,z.hemiLength=E,z.numDirectionalShadows=T,z.numPointShadows=b,z.numSpotShadows=A,i.version=Lx++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const y=h.matrixWorldInverse;for(let v=0,E=u.length;v<E;v++){const T=u[v];if(T.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),f++}else if(T.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(y),g++}else if(T.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(y),o.identity(),a.copy(T.matrixWorld),a.premultiply(y),o.extractRotation(a),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(T.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(y),d++}else if(T.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(y),b.direction.normalize(),p++}}}return{setup:l,setupView:c,state:i}}function Bc(r,e){const t=new Px(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ix(r,e){let t=new WeakMap;function n(s,a=0){let o;return t.has(s)===!1?(o=new Bc(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new Bc(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class ko extends It{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}ko.prototype.isMeshDepthMaterial=!0;class Po extends It{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new M,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Po.prototype.isMeshDistanceMaterial=!0;const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ih(r,e,t){let n=new Qs;const i=new J,s=new J,a=new rt,o=new ko({depthPacking:Qg}),l=new Po,c={},u=t.maxTextureSize,h={0:fn,1:Ir,2:Ji},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Dx,fragmentShader:zx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new qt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh,this.render=function(T,b,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const k=r.getRenderTarget(),z=r.getActiveCubeFace(),ie=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Yn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let _=0,L=T.length;_<L;_++){const G=T[_],C=G.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;i.copy(C.mapSize);const I=C.getFrameExtents();if(i.multiply(I),s.copy(C.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/I.x),i.x=s.x*I.x,C.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/I.y),i.y=s.y*I.y,C.mapSize.y=s.y)),C.map===null&&!C.isPointLightShadow&&this.type===Er&&(C.map=new Xt(i.x,i.y),C.map.texture.name=G.name+".shadowMap",C.mapPass=new Xt(i.x,i.y),C.camera.updateProjectionMatrix()),C.map===null){const U={minFilter:Ct,magFilter:Ct,format:hn};C.map=new Xt(i.x,i.y,U),C.map.texture.name=G.name+".shadowMap",C.camera.updateProjectionMatrix()}r.setRenderTarget(C.map),r.clear();const N=C.getViewportCount();for(let U=0;U<N;U++){const P=C.getViewport(U);a.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),O.viewport(a),C.updateMatrices(G,U),n=C.getFrustum(),E(b,A,C.camera,G,this.type)}!C.isPointLightShadow&&this.type===Er&&y(C,A),C.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(k,z,ie)};function y(T,b){const A=e.update(m);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(b,null,A,f,m,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(b,null,A,d,m,null)}function v(T,b,A,k,z,ie){let O=null;const _=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(_!==void 0?O=_:O=A.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0){const L=O.uuid,G=b.uuid;let C=c[L];C===void 0&&(C={},c[L]=C);let I=C[G];I===void 0&&(I=O.clone(),C[G]=I),O=I}return O.visible=b.visible,O.wireframe=b.wireframe,ie===Er?O.side=b.shadowSide!==null?b.shadowSide:b.side:O.side=b.shadowSide!==null?b.shadowSide:h[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaTest,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(A.matrixWorld),O.nearDistance=k,O.farDistance=z),O}function E(T,b,A,k,z){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&z===Er)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const _=e.update(T),L=T.material;if(Array.isArray(L)){const G=_.groups;for(let C=0,I=G.length;C<I;C++){const N=G[C],U=L[N.materialIndex];if(U&&U.visible){const P=v(T,U,k,A.near,A.far,z);r.renderBufferDirect(A,null,_,P,T,N)}}}else if(L.visible){const G=v(T,L,k,A.near,A.far,z);r.renderBufferDirect(A,null,_,G,T,null)}}const O=T.children;for(let _=0,L=O.length;_<L;_++)E(O[_],b,A,k,z)}}function Nx(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const le=new rt;let ae=null;const Ce=new rt(0,0,0,0);return{setMask:function(ye){ae!==ye&&!R&&(r.colorMask(ye,ye,ye,ye),ae=ye)},setLocked:function(ye){R=ye},setClear:function(ye,Re,se,Ie,ft){ft===!0&&(ye*=Ie,Re*=Ie,se*=Ie),le.set(ye,Re,se,Ie),Ce.equals(le)===!1&&(r.clearColor(ye,Re,se,Ie),Ce.copy(le))},reset:function(){R=!1,ae=null,Ce.set(-1,0,0,0)}}}function s(){let R=!1,le=null,ae=null,Ce=null;return{setTest:function(ye){ye?Pe(2929):$(2929)},setMask:function(ye){le!==ye&&!R&&(r.depthMask(ye),le=ye)},setFunc:function(ye){if(ae!==ye){if(ye)switch(ye){case vg:r.depthFunc(512);break;case _g:r.depthFunc(519);break;case xg:r.depthFunc(513);break;case io:r.depthFunc(515);break;case bg:r.depthFunc(514);break;case wg:r.depthFunc(518);break;case Mg:r.depthFunc(516);break;case Sg:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);ae=ye}},setLocked:function(ye){R=ye},setClear:function(ye){Ce!==ye&&(r.clearDepth(ye),Ce=ye)},reset:function(){R=!1,le=null,ae=null,Ce=null}}}function a(){let R=!1,le=null,ae=null,Ce=null,ye=null,Re=null,se=null,Ie=null,ft=null;return{setTest:function(je){R||(je?Pe(2960):$(2960))},setMask:function(je){le!==je&&!R&&(r.stencilMask(je),le=je)},setFunc:function(je,mn,gn){(ae!==je||Ce!==mn||ye!==gn)&&(r.stencilFunc(je,mn,gn),ae=je,Ce=mn,ye=gn)},setOp:function(je,mn,gn){(Re!==je||se!==mn||Ie!==gn)&&(r.stencilOp(je,mn,gn),Re=je,se=mn,Ie=gn)},setLocked:function(je){R=je},setClear:function(je){ft!==je&&(r.clearStencil(je),ft=je)},reset:function(){R=!1,le=null,ae=null,Ce=null,ye=null,Re=null,se=null,Ie=null,ft=null}}}const o=new i,l=new s,c=new a;let u={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,y=null,v=null,E=null,T=null,b=null,A=null,k=!1,z=null,ie=null,O=null,_=null,L=null;const G=r.getParameter(35661);let C=!1,I=0;const N=r.getParameter(7938);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),C=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),C=I>=2);let U=null,P={};const q=r.getParameter(3088),K=r.getParameter(2978),Q=new rt().fromArray(q),ee=new rt().fromArray(K);function he(R,le,ae){const Ce=new Uint8Array(4),ye=r.createTexture();r.bindTexture(R,ye),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Re=0;Re<ae;Re++)r.texImage2D(le+Re,0,6408,1,1,0,6408,5121,Ce);return ye}const $e={};$e[3553]=he(3553,3553,1),$e[34067]=he(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(io),ne(!1),ve(Rl),Pe(2884),W(Yn);function Pe(R){u[R]!==!0&&(r.enable(R),u[R]=!0)}function $(R){u[R]!==!1&&(r.disable(R),u[R]=!1)}function Ke(R,le){return h[R]!==le?(r.bindFramebuffer(R,le),h[R]=le,n&&(R===36009&&(h[36160]=le),R===36160&&(h[36009]=le)),!0):!1}function Ne(R,le){let ae=d,Ce=!1;if(R)if(ae=f.get(le),ae===void 0&&(ae=[],f.set(le,ae)),R.isWebGLMultipleRenderTargets){const ye=R.texture;if(ae.length!==ye.length||ae[0]!==36064){for(let Re=0,se=ye.length;Re<se;Re++)ae[Re]=36064+Re;ae.length=ye.length,Ce=!0}}else ae[0]!==36064&&(ae[0]=36064,Ce=!0);else ae[0]!==1029&&(ae[0]=1029,Ce=!0);Ce&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Fe(R){return g!==R?(r.useProgram(R),g=R,!0):!1}const re={[Ui]:32774,[og]:32778,[lg]:32779};if(n)re[Il]=32775,re[Dl]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(re[Il]=R.MIN_EXT,re[Dl]=R.MAX_EXT)}const Ge={[cg]:0,[ug]:1,[hg]:768,[ph]:770,[yg]:776,[mg]:774,[dg]:772,[fg]:769,[mh]:771,[gg]:775,[pg]:773};function W(R,le,ae,Ce,ye,Re,se,Ie){if(R===Yn){m===!0&&($(3042),m=!1);return}if(m===!1&&(Pe(3042),m=!0),R!==ag){if(R!==p||Ie!==k){if((y!==Ui||T!==Ui)&&(r.blendEquation(32774),y=Ui,T=Ui),Ie)switch(R){case qi:r.blendFuncSeparate(1,771,1,771);break;case Ll:r.blendFunc(1,1);break;case kl:r.blendFuncSeparate(0,769,0,1);break;case Pl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case qi:r.blendFuncSeparate(770,771,1,771);break;case Ll:r.blendFunc(770,1);break;case kl:r.blendFuncSeparate(0,769,0,1);break;case Pl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,E=null,b=null,A=null,p=R,k=Ie}return}ye=ye||le,Re=Re||ae,se=se||Ce,(le!==y||ye!==T)&&(r.blendEquationSeparate(re[le],re[ye]),y=le,T=ye),(ae!==v||Ce!==E||Re!==b||se!==A)&&(r.blendFuncSeparate(Ge[ae],Ge[Ce],Ge[Re],Ge[se]),v=ae,E=Ce,b=Re,A=se),p=R,k=null}function j(R,le){R.side===Ji?$(2884):Pe(2884);let ae=R.side===fn;le&&(ae=!ae),ne(ae),R.blending===qi&&R.transparent===!1?W(Yn):W(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const Ce=R.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),De(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Pe(32926):$(32926)}function ne(R){z!==R&&(R?r.frontFace(2304):r.frontFace(2305),z=R)}function ve(R){R!==ig?(Pe(2884),R!==ie&&(R===Rl?r.cullFace(1029):R===rg?r.cullFace(1028):r.cullFace(1032))):$(2884),ie=R}function ue(R){R!==O&&(C&&r.lineWidth(R),O=R)}function De(R,le,ae){R?(Pe(32823),(_!==le||L!==ae)&&(r.polygonOffset(le,ae),_=le,L=ae)):$(32823)}function Ae(R){R?Pe(3089):$(3089)}function Me(R){R===void 0&&(R=33984+G-1),U!==R&&(r.activeTexture(R),U=R)}function vt(R,le){U===null&&Me();let ae=P[U];ae===void 0&&(ae={type:void 0,texture:void 0},P[U]=ae),(ae.type!==R||ae.texture!==le)&&(r.bindTexture(R,le||$e[R]),ae.type=R,ae.texture=le)}function st(){const R=P[U];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function x(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function H(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Be(R){Q.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),Q.copy(R))}function Ve(R){ee.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),ee.copy(R))}function _e(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},U=null,P={},h={},f=new WeakMap,d=[],g=null,m=!1,p=null,y=null,v=null,E=null,T=null,b=null,A=null,k=!1,z=null,ie=null,O=null,_=null,L=null,Q.set(0,0,r.canvas.width,r.canvas.height),ee.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Pe,disable:$,bindFramebuffer:Ke,drawBuffers:Ne,useProgram:Fe,setBlending:W,setMaterial:j,setFlipSided:ne,setCullFace:ve,setLineWidth:ue,setPolygonOffset:De,setScissorTest:Ae,activeTexture:Me,bindTexture:vt,unbindTexture:st,compressedTexImage2D:S,texImage2D:Te,texImage3D:H,texStorage2D:ce,texStorage3D:me,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:Z,scissor:Be,viewport:Ve,reset:_e}}function Fx(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,x){return y?new OffscreenCanvas(S,x):Fr("canvas")}function E(S,x,V,Z){let ce=1;if((S.width>Z||S.height>Z)&&(ce=Z/Math.max(S.width,S.height)),ce<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const me=x?lo:Math.floor,Te=me(ce*S.width),H=me(ce*S.height);m===void 0&&(m=v(Te,H));const Be=V?v(Te,H):m;return Be.width=Te,Be.height=H,Be.getContext("2d").drawImage(S,0,0,Te,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Te+"x"+H+")."),Be}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function T(S){return sc(S.width)&&sc(S.height)}function b(S){return o?!1:S.wrapS!==un||S.wrapT!==un||S.minFilter!==Ct&&S.minFilter!==zt}function A(S,x){return S.generateMipmaps&&x&&S.minFilter!==Ct&&S.minFilter!==zt}function k(S){r.generateMipmap(S)}function z(S,x,V,Z,ce=!1){if(o===!1)return x;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let me=x;return x===6403&&(V===5126&&(me=33326),V===5131&&(me=33325),V===5121&&(me=33321)),x===33319&&(V===5126&&(me=33328),V===5131&&(me=33327),V===5121&&(me=33323)),x===6408&&(V===5126&&(me=34836),V===5131&&(me=34842),V===5121&&(me=Z===dt&&ce===!1?35907:32856),V===32819&&(me=32854),V===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function ie(S,x,V){return A(S,V)===!0||S.isFramebufferTexture&&S.minFilter!==Ct&&S.minFilter!==zt?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function O(S){return S===Ct||S===zl||S===Nl?9728:9729}function _(S){const x=S.target;x.removeEventListener("dispose",_),G(x),x.isVideoTexture&&g.delete(x)}function L(S){const x=S.target;x.removeEventListener("dispose",L),I(x)}function G(S){const x=n.get(S);if(x.__webglInit===void 0)return;const V=S.source,Z=p.get(V);if(Z){const ce=Z[x.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&C(S),Object.keys(Z).length===0&&p.delete(V)}n.remove(S)}function C(S){const x=n.get(S);r.deleteTexture(x.__webglTexture);const V=S.source,Z=p.get(V);delete Z[x.__cacheKey],a.memory.textures--}function I(S){const x=S.texture,V=n.get(S),Z=n.get(x);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)r.deleteFramebuffer(V.__webglFramebuffer[ce]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ce]);else r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer&&r.deleteRenderbuffer(V.__webglColorRenderbuffer),V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer);if(S.isWebGLMultipleRenderTargets)for(let ce=0,me=x.length;ce<me;ce++){const Te=n.get(x[ce]);Te.__webglTexture&&(r.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(x[ce])}n.remove(x),n.remove(S)}let N=0;function U(){N=0}function P(){const S=N;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),N+=1,S}function q(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.encoding),x.join()}function K(S,x){const V=n.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.version>0&&V.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(V,S,x);return}}t.activeTexture(33984+x),t.bindTexture(3553,V.__webglTexture)}function Q(S,x){const V=n.get(S);if(S.version>0&&V.__version!==S.version){Ne(V,S,x);return}t.activeTexture(33984+x),t.bindTexture(35866,V.__webglTexture)}function ee(S,x){const V=n.get(S);if(S.version>0&&V.__version!==S.version){Ne(V,S,x);return}t.activeTexture(33984+x),t.bindTexture(32879,V.__webglTexture)}function he(S,x){const V=n.get(S);if(S.version>0&&V.__version!==S.version){Fe(V,S,x);return}t.activeTexture(33984+x),t.bindTexture(34067,V.__webglTexture)}const $e={[Dr]:10497,[un]:33071,[Nn]:33648},Pe={[Ct]:9728,[zl]:9984,[Nl]:9986,[zt]:9729,[Pg]:9985,[Zs]:9987};function $(S,x,V){if(V?(r.texParameteri(S,10242,$e[x.wrapS]),r.texParameteri(S,10243,$e[x.wrapT]),(S===32879||S===35866)&&r.texParameteri(S,32882,$e[x.wrapR]),r.texParameteri(S,10240,Pe[x.magFilter]),r.texParameteri(S,10241,Pe[x.minFilter])):(r.texParameteri(S,10242,33071),r.texParameteri(S,10243,33071),(S===32879||S===35866)&&r.texParameteri(S,32882,33071),(x.wrapS!==un||x.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,10240,O(x.magFilter)),r.texParameteri(S,10241,O(x.minFilter)),x.minFilter!==Ct&&x.minFilter!==zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(x.type===ui&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Xi&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function Ke(S,x){let V=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",_));const Z=x.source;let ce=p.get(Z);ce===void 0&&(ce={},p.set(Z,ce));const me=q(x);if(me!==S.__cacheKey){ce[me]===void 0&&(ce[me]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ce[me].usedTimes++;const Te=ce[S.__cacheKey];Te!==void 0&&(ce[S.__cacheKey].usedTimes--,Te.usedTimes===0&&C(x)),S.__cacheKey=me,S.__webglTexture=ce[me].texture}return V}function Ne(S,x,V){let Z=3553;x.isDataArrayTexture&&(Z=35866),x.isData3DTexture&&(Z=32879);const ce=Ke(S,x),me=x.source;if(t.activeTexture(33984+V),t.bindTexture(Z,S.__webglTexture),me.version!==me.__currentVersion||ce===!0){r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const Te=b(x)&&T(x.image)===!1;let H=E(x.image,Te,!1,u);H=st(x,H);const Be=T(H)||o,Ve=s.convert(x.format,x.encoding);let _e=s.convert(x.type),R=z(x.internalFormat,Ve,_e,x.encoding,x.isVideoTexture);$(Z,x,Be);let le;const ae=x.mipmaps,Ce=o&&x.isVideoTexture!==!0,ye=S.__version===void 0,Re=ie(x,H,Be);if(x.isDepthTexture)R=6402,o?x.type===ui?R=36012:x.type===Ds?R=33190:x.type===ji?R=35056:R=33189:x.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===fi&&R===6402&&x.type!==zr&&x.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=zr,_e=s.convert(x.type)),x.format===Ki&&R===6402&&(R=34041,x.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ji,_e=s.convert(x.type))),Ce&&ye?t.texStorage2D(3553,1,R,H.width,H.height):t.texImage2D(3553,0,R,H.width,H.height,0,Ve,_e,null);else if(x.isDataTexture)if(ae.length>0&&Be){Ce&&ye&&t.texStorage2D(3553,Re,R,ae[0].width,ae[0].height);for(let se=0,Ie=ae.length;se<Ie;se++)le=ae[se],Ce?t.texSubImage2D(3553,se,0,0,le.width,le.height,Ve,_e,le.data):t.texImage2D(3553,se,R,le.width,le.height,0,Ve,_e,le.data);x.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(3553,Re,R,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,Ve,_e,H.data)):t.texImage2D(3553,0,R,H.width,H.height,0,Ve,_e,H.data);else if(x.isCompressedTexture){Ce&&ye&&t.texStorage2D(3553,Re,R,ae[0].width,ae[0].height);for(let se=0,Ie=ae.length;se<Ie;se++)le=ae[se],x.format!==hn?Ve!==null?Ce?t.compressedTexSubImage2D(3553,se,0,0,le.width,le.height,Ve,le.data):t.compressedTexImage2D(3553,se,R,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,se,0,0,le.width,le.height,Ve,_e,le.data):t.texImage2D(3553,se,R,le.width,le.height,0,Ve,_e,le.data)}else if(x.isDataArrayTexture)Ce?(ye&&t.texStorage3D(35866,Re,R,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,Ve,_e,H.data)):t.texImage3D(35866,0,R,H.width,H.height,H.depth,0,Ve,_e,H.data);else if(x.isData3DTexture)Ce?(ye&&t.texStorage3D(32879,Re,R,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,Ve,_e,H.data)):t.texImage3D(32879,0,R,H.width,H.height,H.depth,0,Ve,_e,H.data);else if(x.isFramebufferTexture)Ce&&ye?t.texStorage2D(3553,Re,R,H.width,H.height):t.texImage2D(3553,0,R,H.width,H.height,0,Ve,_e,null);else if(ae.length>0&&Be){Ce&&ye&&t.texStorage2D(3553,Re,R,ae[0].width,ae[0].height);for(let se=0,Ie=ae.length;se<Ie;se++)le=ae[se],Ce?t.texSubImage2D(3553,se,0,0,Ve,_e,le):t.texImage2D(3553,se,R,Ve,_e,le);x.generateMipmaps=!1}else Ce?(ye&&t.texStorage2D(3553,Re,R,H.width,H.height),t.texSubImage2D(3553,0,0,0,Ve,_e,H)):t.texImage2D(3553,0,R,Ve,_e,H);A(x,Be)&&k(Z),me.__currentVersion=me.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function Fe(S,x,V){if(x.image.length!==6)return;const Z=Ke(S,x),ce=x.source;if(t.activeTexture(33984+V),t.bindTexture(34067,S.__webglTexture),ce.version!==ce.__currentVersion||Z===!0){r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,H=[];for(let se=0;se<6;se++)!me&&!Te?H[se]=E(x.image[se],!1,!0,c):H[se]=Te?x.image[se].image:x.image[se],H[se]=st(x,H[se]);const Be=H[0],Ve=T(Be)||o,_e=s.convert(x.format,x.encoding),R=s.convert(x.type),le=z(x.internalFormat,_e,R,x.encoding),ae=o&&x.isVideoTexture!==!0,Ce=S.__version===void 0;let ye=ie(x,Be,Ve);$(34067,x,Ve);let Re;if(me){ae&&Ce&&t.texStorage2D(34067,ye,le,Be.width,Be.height);for(let se=0;se<6;se++){Re=H[se].mipmaps;for(let Ie=0;Ie<Re.length;Ie++){const ft=Re[Ie];x.format!==hn?_e!==null?ae?t.compressedTexSubImage2D(34069+se,Ie,0,0,ft.width,ft.height,_e,ft.data):t.compressedTexImage2D(34069+se,Ie,le,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?t.texSubImage2D(34069+se,Ie,0,0,ft.width,ft.height,_e,R,ft.data):t.texImage2D(34069+se,Ie,le,ft.width,ft.height,0,_e,R,ft.data)}}}else{Re=x.mipmaps,ae&&Ce&&(Re.length>0&&ye++,t.texStorage2D(34067,ye,le,H[0].width,H[0].height));for(let se=0;se<6;se++)if(Te){ae?t.texSubImage2D(34069+se,0,0,0,H[se].width,H[se].height,_e,R,H[se].data):t.texImage2D(34069+se,0,le,H[se].width,H[se].height,0,_e,R,H[se].data);for(let Ie=0;Ie<Re.length;Ie++){const je=Re[Ie].image[se].image;ae?t.texSubImage2D(34069+se,Ie+1,0,0,je.width,je.height,_e,R,je.data):t.texImage2D(34069+se,Ie+1,le,je.width,je.height,0,_e,R,je.data)}}else{ae?t.texSubImage2D(34069+se,0,0,0,_e,R,H[se]):t.texImage2D(34069+se,0,le,_e,R,H[se]);for(let Ie=0;Ie<Re.length;Ie++){const ft=Re[Ie];ae?t.texSubImage2D(34069+se,Ie+1,0,0,_e,R,ft.image[se]):t.texImage2D(34069+se,Ie+1,le,_e,R,ft.image[se])}}}A(x,Ve)&&k(34067),ce.__currentVersion=ce.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function re(S,x,V,Z,ce){const me=s.convert(V.format,V.encoding),Te=s.convert(V.type),H=z(V.internalFormat,me,Te,V.encoding);n.get(x).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,H,x.width,x.height,x.depth,0,me,Te,null):t.texImage2D(ce,0,H,x.width,x.height,0,me,Te,null)),t.bindFramebuffer(36160,S),Me(x)?f.framebufferTexture2DMultisampleEXT(36160,Z,ce,n.get(V).__webglTexture,0,Ae(x)):r.framebufferTexture2D(36160,Z,ce,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(S,x,V){if(r.bindRenderbuffer(36161,S),x.depthBuffer&&!x.stencilBuffer){let Z=33189;if(V||Me(x)){const ce=x.depthTexture;ce&&ce.isDepthTexture&&(ce.type===ui?Z=36012:ce.type===Ds&&(Z=33190));const me=Ae(x);Me(x)?f.renderbufferStorageMultisampleEXT(36161,me,Z,x.width,x.height):r.renderbufferStorageMultisample(36161,me,Z,x.width,x.height)}else r.renderbufferStorage(36161,Z,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,S)}else if(x.depthBuffer&&x.stencilBuffer){const Z=Ae(x);V&&Me(x)===!1?r.renderbufferStorageMultisample(36161,Z,35056,x.width,x.height):Me(x)?f.renderbufferStorageMultisampleEXT(36161,Z,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,S)}else{const Z=x.isWebGLMultipleRenderTargets===!0?x.texture[0]:x.texture,ce=s.convert(Z.format,Z.encoding),me=s.convert(Z.type),Te=z(Z.internalFormat,ce,me,Z.encoding),H=Ae(x);V&&Me(x)===!1?r.renderbufferStorageMultisample(36161,H,Te,x.width,x.height):Me(x)?f.renderbufferStorageMultisampleEXT(36161,H,Te,x.width,x.height):r.renderbufferStorage(36161,Te,x.width,x.height)}r.bindRenderbuffer(36161,null)}function W(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,ce=Ae(x);if(x.depthTexture.format===fi)Me(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Z,0,ce):r.framebufferTexture2D(36160,36096,3553,Z,0);else if(x.depthTexture.format===Ki)Me(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Z,0,ce):r.framebufferTexture2D(36160,33306,3553,Z,0);else throw new Error("Unknown depthTexture format")}function j(S){const x=n.get(S),V=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");W(x.__webglFramebuffer,S)}else if(V){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(36160,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]=r.createRenderbuffer(),Ge(x.__webglDepthbuffer[Z],S,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Ge(x.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function ne(S,x,V){const Z=n.get(S);x!==void 0&&re(Z.__webglFramebuffer,S,S.texture,36064,3553),V!==void 0&&j(S)}function ve(S){const x=S.texture,V=n.get(S),Z=n.get(x);S.addEventListener("dispose",L),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=x.version,a.memory.textures++);const ce=S.isWebGLCubeRenderTarget===!0,me=S.isWebGLMultipleRenderTargets===!0,Te=T(S)||o;if(ce){V.__webglFramebuffer=[];for(let H=0;H<6;H++)V.__webglFramebuffer[H]=r.createFramebuffer()}else if(V.__webglFramebuffer=r.createFramebuffer(),me)if(i.drawBuffers){const H=S.texture;for(let Be=0,Ve=H.length;Be<Ve;Be++){const _e=n.get(H[Be]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(o&&S.samples>0&&Me(S)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer);const H=s.convert(x.format,x.encoding),Be=s.convert(x.type),Ve=z(x.internalFormat,H,Be,x.encoding),_e=Ae(S);r.renderbufferStorageMultisample(36161,_e,Ve,S.width,S.height),t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,V.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),S.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(V.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}if(ce){t.bindTexture(34067,Z.__webglTexture),$(34067,x,Te);for(let H=0;H<6;H++)re(V.__webglFramebuffer[H],S,x,36064,34069+H);A(x,Te)&&k(34067),t.unbindTexture()}else if(me){const H=S.texture;for(let Be=0,Ve=H.length;Be<Ve;Be++){const _e=H[Be],R=n.get(_e);t.bindTexture(3553,R.__webglTexture),$(3553,_e,Te),re(V.__webglFramebuffer,S,_e,36064+Be,3553),A(_e,Te)&&k(3553)}t.unbindTexture()}else{let H=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?H=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,Z.__webglTexture),$(H,x,Te),re(V.__webglFramebuffer,S,x,36064,H),A(x,Te)&&k(H),t.unbindTexture()}S.depthBuffer&&j(S)}function ue(S){const x=T(S)||o,V=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,ce=V.length;Z<ce;Z++){const me=V[Z];if(A(me,x)){const Te=S.isWebGLCubeRenderTarget?34067:3553,H=n.get(me).__webglTexture;t.bindTexture(Te,H),k(Te),t.unbindTexture()}}}function De(S){if(o&&S.samples>0&&Me(S)===!1){const x=S.width,V=S.height;let Z=16384;const ce=[36064],me=S.stencilBuffer?33306:36096;S.depthBuffer&&ce.push(me);const Te=n.get(S),H=Te.__ignoreDepthValues!==void 0?Te.__ignoreDepthValues:!1;H===!1&&(S.depthBuffer&&(Z|=256),S.stencilBuffer&&(Z|=1024)),t.bindFramebuffer(36008,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Te.__webglFramebuffer),H===!0&&(r.invalidateFramebuffer(36008,[me]),r.invalidateFramebuffer(36009,[me])),r.blitFramebuffer(0,0,x,V,0,0,x,V,Z,9728),d&&r.invalidateFramebuffer(36008,ce),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Te.__webglMultisampledFramebuffer)}}function Ae(S){return Math.min(h,S.samples)}function Me(S){const x=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function vt(S){const x=a.render.frame;g.get(S)!==x&&(g.set(S,x),S.update())}function st(S,x){const V=S.encoding,Z=S.format,ce=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===ao||V!==On&&(V===dt?o===!1?e.has("EXT_sRGB")===!0&&Z===hn?(S.format=ao,S.minFilter=zt,S.generateMipmaps=!1):x=yi.sRGBToLinear(x):(Z!==hn||ce!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),x}this.allocateTextureUnit=P,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=ee,this.setTextureCube=he,this.rebindTextures=ne,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Me}function Bx(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===pi)return 5121;if(s===Ng)return 32819;if(s===Fg)return 32820;if(s===Ig)return 5120;if(s===Dg)return 5122;if(s===zr)return 5123;if(s===zg)return 5124;if(s===Ds)return 5125;if(s===ui)return 5126;if(s===Xi)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Bg)return 6406;if(s===hn)return 6408;if(s===Ug)return 6409;if(s===Vg)return 6410;if(s===fi)return 6402;if(s===Ki)return 34041;if(s===Hg)return 6403;if(s===Og)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ao)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gg)return 36244;if(s===Wg)return 33319;if(s===$g)return 33320;if(s===qg)return 36249;if(s===fa||s===da||s===pa||s===ma)if(a===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fl||s===Bl||s===Ol||s===Ul)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ol)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ul)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vl||s===Hl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Vl)return a===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Hl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gl||s===Wl||s===$l||s===ql||s===Xl||s===jl||s===Jl||s===Zl||s===Yl||s===Kl||s===Ql||s===ec||s===tc||s===nc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$l)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ql)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Kl)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ql)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ec)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tc)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nc)return a===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ic)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ic)return a===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ji)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Dh extends Jt{constructor(e=[]){super(),this.cameras=e}}Dh.prototype.isArrayCamera=!0;class Cr extends nt{constructor(){super(),this.type="Group"}}Cr.prototype.isGroup=!0;const Ox={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ox))),c&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const v=new Cr;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[m.jointName]=v,c.add(v)}const y=c.joints[m.jointName];p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=p.radius),y.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class zh extends Pt{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:fi,u!==fi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fi&&(n=zr),n===void 0&&u===Ki&&(n=ji),super(null,i,s,a,o,l,u,n,c),this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}zh.prototype.isDepthTexture=!0;class Ux extends gi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null;const d=t.getContextAttributes();let g=null,m=null;const p=[],y=new Map,v=new Jt;v.layers.enable(1),v.viewport=new rt;const E=new Jt;E.layers.enable(2),E.viewport=new rt;const T=[v,E],b=new Dh;b.layers.enable(1),b.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let q=p[P];return q===void 0&&(q=new $a,p[P]=q),q.getTargetRaySpace()},this.getControllerGrip=function(P){let q=p[P];return q===void 0&&(q=new $a,p[P]=q),q.getGripSpace()},this.getHand=function(P){let q=p[P];return q===void 0&&(q=new $a,p[P]=q),q.getHandSpace()};function z(P){const q=y.get(P.inputSource);q&&q.dispatchEvent({type:P.type,data:P.inputSource})}function ie(){y.forEach(function(P,q){P.disconnect(q)}),y.clear(),A=null,k=null,e.setRenderTarget(g),h=null,u=null,c=null,i=null,m=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){o=P,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(P){if(i=P,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",ie),i.addEventListener("inputsourceschange",O),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:h}),m=new Xt(h.framebufferWidth,h.framebufferHeight,{format:hn,type:pi,encoding:e.outputEncoding})}else{let q=null,K=null,Q=null;d.depth&&(Q=d.stencil?35056:33190,q=d.stencil?Ki:fi,K=d.stencil?ji:zr);const ee={colorFormat:e.outputEncoding===dt?35907:32856,depthFormat:Q,scaleFactor:s};c=new XRWebGLBinding(i,t),u=c.createProjectionLayer(ee),i.updateRenderState({layers:[u]}),m=new Xt(u.textureWidth,u.textureHeight,{format:hn,type:pi,depthTexture:new zh(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const he=e.properties.get(m);he.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),a=await i.requestReferenceSpace(o),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(P){const q=i.inputSources;for(let K=0;K<p.length;K++)y.set(q[K],p[K]);for(let K=0;K<P.removed.length;K++){const Q=P.removed[K],ee=y.get(Q);ee&&(ee.dispatchEvent({type:"disconnected",data:Q}),y.delete(Q))}for(let K=0;K<P.added.length;K++){const Q=P.added[K],ee=y.get(Q);ee&&ee.dispatchEvent({type:"connected",data:Q})}}const _=new M,L=new M;function G(P,q,K){_.setFromMatrixPosition(q.matrixWorld),L.setFromMatrixPosition(K.matrixWorld);const Q=_.distanceTo(L),ee=q.projectionMatrix.elements,he=K.projectionMatrix.elements,$e=ee[14]/(ee[10]-1),Pe=ee[14]/(ee[10]+1),$=(ee[9]+1)/ee[5],Ke=(ee[9]-1)/ee[5],Ne=(ee[8]-1)/ee[0],Fe=(he[8]+1)/he[0],re=$e*Ne,Ge=$e*Fe,W=Q/(-Ne+Fe),j=W*-Ne;q.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(j),P.translateZ(W),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert();const ne=$e+W,ve=Pe+W,ue=re-j,De=Ge+(Q-j),Ae=$*Pe/ve*ne,Me=Ke*Pe/ve*ne;P.projectionMatrix.makePerspective(ue,De,Ae,Me,ne,ve)}function C(P,q){q===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(q.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(i===null)return;b.near=E.near=v.near=P.near,b.far=E.far=v.far=P.far,(A!==b.near||k!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,k=b.far);const q=P.parent,K=b.cameras;C(b,q);for(let ee=0;ee<K.length;ee++)C(K[ee],q);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),P.position.copy(b.position),P.quaternion.copy(b.quaternion),P.scale.copy(b.scale),P.matrix.copy(b.matrix),P.matrixWorld.copy(b.matrixWorld);const Q=P.children;for(let ee=0,he=Q.length;ee<he;ee++)Q[ee].updateMatrixWorld(!0);K.length===2?G(b,v,E):b.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(P){u!==null&&(u.fixedFoveation=P),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=P)};let I=null;function N(P,q){if(l=q.getViewerPose(a),f=q,l!==null){const Q=l.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let ee=!1;Q.length!==b.cameras.length&&(b.cameras.length=0,ee=!0);for(let he=0;he<Q.length;he++){const $e=Q[he];let Pe=null;if(h!==null)Pe=h.getViewport($e);else{const Ke=c.getViewSubImage(u,$e);Pe=Ke.viewport,he===0&&(e.setRenderTargetTextures(m,Ke.colorTexture,u.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(m))}const $=T[he];$.matrix.fromArray($e.transform.matrix),$.projectionMatrix.fromArray($e.projectionMatrix),$.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),he===0&&b.matrix.copy($.matrix),ee===!0&&b.cameras.push($)}}const K=i.inputSources;for(let Q=0;Q<p.length;Q++){const ee=p[Q],he=K[Q];ee.update(he,q,a)}I&&I(P,q),f=null}const U=new Th;U.setAnimationLoop(N),this.setAnimationLoop=function(P){I=P},this.dispose=function(){}}}function Vx(r,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,v,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,y,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===fn&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Hx(){const r=Fr("canvas");return r.style.display="block",r}function it(r={}){const e=r.canvas!==void 0?r.canvas:Hx(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;r.context!==void 0?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=On,this.physicallyCorrectLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const m=this;let p=!1,y=0,v=0,E=null,T=-1,b=null;const A=new rt,k=new rt;let z=null,ie=e.width,O=e.height,_=1,L=null,G=null;const C=new rt(0,0,ie,O),I=new rt(0,0,ie,O);let N=!1;const U=new Qs;let P=!1,q=!1,K=null;const Q=new Se,ee=new J,he=new M,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return E===null?_:1}let $=t;function Ke(w,D){for(let B=0;B<w.length;B++){const F=w[B],X=e.getContext(F,D);if(X!==null)return X}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${To}`),e.addEventListener("webglcontextlost",R,!1),e.addEventListener("webglcontextrestored",le,!1),$===null){const D=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&D.shift(),$=Ke(D,w),$===null)throw Ke(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ne,Fe,re,Ge,W,j,ne,ve,ue,De,Ae,Me,vt,st,S,x,V,Z,ce,me,Te,H,Be;function Ve(){Ne=new a_($),Fe=new e_($,Ne,r),Ne.init(Fe),H=new Bx($,Ne,Fe),re=new Nx($,Ne,Fe),Ge=new c_,W=new Tx,j=new Fx($,Ne,re,W,Fe,H,Ge),ne=new n_(m),ve=new s_(m),ue=new M0($,Fe),Be=new Kv($,Ne,ue,Fe),De=new o_($,ue,Ge,Be),Ae=new d_($,De,ue,Ge),ce=new f_($,Fe,j),x=new t_(W),Me=new Sx(m,ne,ve,Ne,Fe,Be,x),vt=new Vx(m,W),st=new Ax,S=new Ix(Ne,Fe),Z=new Yv(m,ne,re,Ae,u,a),V=new Ih(m,Ae,Fe),me=new Qv($,Ne,Ge,Fe),Te=new l_($,Ne,Ge,Fe),Ge.programs=Me.programs,m.capabilities=Fe,m.extensions=Ne,m.properties=W,m.renderLists=st,m.shadowMap=V,m.state=re,m.info=Ge}Ve();const _e=new Ux(m,$);this.xr=_e,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const w=Ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(w){w!==void 0&&(_=w,this.setSize(ie,O,!1))},this.getSize=function(w){return w.set(ie,O)},this.setSize=function(w,D,B){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=w,O=D,e.width=Math.floor(w*_),e.height=Math.floor(D*_),B!==!1&&(e.style.width=w+"px",e.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(ie*_,O*_).floor()},this.setDrawingBufferSize=function(w,D,B){ie=w,O=D,_=B,e.width=Math.floor(w*B),e.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(A)},this.getViewport=function(w){return w.copy(C)},this.setViewport=function(w,D,B,F){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,D,B,F),re.viewport(A.copy(C).multiplyScalar(_).floor())},this.getScissor=function(w){return w.copy(I)},this.setScissor=function(w,D,B,F){w.isVector4?I.set(w.x,w.y,w.z,w.w):I.set(w,D,B,F),re.scissor(k.copy(I).multiplyScalar(_).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(w){re.setScissorTest(N=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){G=w},this.getClearColor=function(w){return w.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(w=!0,D=!0,B=!0){let F=0;w&&(F|=16384),D&&(F|=256),B&&(F|=1024),$.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",R,!1),e.removeEventListener("webglcontextrestored",le,!1),st.dispose(),S.dispose(),W.dispose(),ne.dispose(),ve.dispose(),Ae.dispose(),Be.dispose(),Me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Ie),_e.removeEventListener("sessionend",ft),K&&(K.dispose(),K=null),je.stop()};function R(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=Ge.autoReset,D=V.enabled,B=V.autoUpdate,F=V.needsUpdate,X=V.type;Ve(),Ge.autoReset=w,V.enabled=D,V.autoUpdate=B,V.needsUpdate=F,V.type=X}function ae(w){const D=w.target;D.removeEventListener("dispose",ae),Ce(D)}function Ce(w){ye(w),W.remove(w)}function ye(w){const D=W.get(w).programs;D!==void 0&&(D.forEach(function(B){Me.releaseProgram(B)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,F,X,Le){D===null&&(D=$e);const ze=X.isMesh&&X.matrixWorld.determinant()<0,He=bf(w,D,B,F,X);re.setMaterial(F,ze);let Ue=B.index;const et=B.attributes.position;if(Ue===null){if(et===void 0||et.count===0)return}else if(Ue.count===0)return;let Ze=1;F.wireframe===!0&&(Ue=De.getWireframeAttribute(B),Ze=2),Be.setup(X,F,He,B,Ue);let Ye,St=me;Ue!==null&&(Ye=ue.get(Ue),St=Te,St.setIndex(Ye));const ii=Ue!==null?Ue.count:et.count,_i=B.drawRange.start*Ze,xi=B.drawRange.count*Ze,yn=Le!==null?Le.start*Ze:0,Qe=Le!==null?Le.count*Ze:1/0,bi=Math.max(_i,yn),Et=Math.min(ii,_i+xi,yn+Qe)-1,vn=Math.max(0,Et-bi+1);if(vn!==0){if(X.isMesh)F.wireframe===!0?(re.setLineWidth(F.wireframeLinewidth*Pe()),St.setMode(1)):St.setMode(4);else if(X.isLine){let Un=F.linewidth;Un===void 0&&(Un=1),re.setLineWidth(Un*Pe()),X.isLineSegments?St.setMode(1):X.isLineLoop?St.setMode(2):St.setMode(3)}else X.isPoints?St.setMode(0):X.isSprite&&St.setMode(4);if(X.isInstancedMesh)St.renderInstances(bi,vn,X.count);else if(B.isInstancedBufferGeometry){const Un=Math.min(B.instanceCount,B._maxInstanceCount);St.renderInstances(bi,vn,Un)}else St.render(bi,vn)}},this.compile=function(w,D){f=S.get(w),f.init(),g.push(f),w.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(m.physicallyCorrectLights),w.traverse(function(B){const F=B.material;if(F)if(Array.isArray(F))for(let X=0;X<F.length;X++){const Le=F[X];oa(Le,w,B)}else oa(F,w,B)}),g.pop(),f=null};let Re=null;function se(w){Re&&Re(w)}function Ie(){je.stop()}function ft(){je.start()}const je=new Th;je.setAnimationLoop(se),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(w){Re=w,_e.setAnimationLoop(w),w===null?je.stop():je.start()},_e.addEventListener("sessionstart",Ie),_e.addEventListener("sessionend",ft),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(D),D=_e.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,D,E),f=S.get(w,g.length),f.init(),g.push(f),Q.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),U.setFromProjectionMatrix(Q),q=this.localClippingEnabled,P=x.init(this.clippingPlanes,q,D),h=st.get(w,d.length),h.init(),d.push(h),mn(w,D,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(L,G),P===!0&&x.beginShadows();const B=f.state.shadowsArray;if(V.render(B,w,D),P===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(h,w),f.setupLights(m.physicallyCorrectLights),D.isArrayCamera){const F=D.cameras;for(let X=0,Le=F.length;X<Le;X++){const ze=F[X];gn(h,w,ze,ze.viewport)}}else gn(h,w,D);E!==null&&(j.updateMultisampleRenderTarget(E),j.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(m,w,D),Be.resetDefaultState(),T=-1,b=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function mn(w,D,B,F){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||U.intersectsSprite(w)){F&&he.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const ze=Ae.update(w),He=w.material;He.visible&&h.push(w,ze,He,B,he.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==Ge.render.frame&&(w.skeleton.update(),w.skeleton.frame=Ge.render.frame),!w.frustumCulled||U.intersectsObject(w))){F&&he.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);const ze=Ae.update(w),He=w.material;if(Array.isArray(He)){const Ue=ze.groups;for(let et=0,Ze=Ue.length;et<Ze;et++){const Ye=Ue[et],St=He[Ye.materialIndex];St&&St.visible&&h.push(w,ze,St,B,he.z,Ye)}}else He.visible&&h.push(w,ze,He,B,he.z,null)}}const Le=w.children;for(let ze=0,He=Le.length;ze<He;ze++)mn(Le[ze],D,B,F)}function gn(w,D,B,F){const X=w.opaque,Le=w.transmissive,ze=w.transparent;f.setupLightsView(B),Le.length>0&&_f(X,D,B),F&&re.viewport(A.copy(F)),X.length>0&&Jr(X,D,B),Le.length>0&&Jr(Le,D,B),ze.length>0&&Jr(ze,D,B),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function _f(w,D,B){const F=Fe.isWebGL2;K===null&&(K=new Xt(1,1,{generateMipmaps:!0,type:H.convert(Xi)!==null?Xi:pi,minFilter:Zs,samples:F&&s===!0?4:0})),m.getDrawingBufferSize(ee),F?K.setSize(ee.x,ee.y):K.setSize(lo(ee.x),lo(ee.y));const X=m.getRenderTarget();m.setRenderTarget(K),m.clear();const Le=m.toneMapping;m.toneMapping=Fn,Jr(w,D,B),m.toneMapping=Le,j.updateMultisampleRenderTarget(K),j.updateRenderTargetMipmap(K),m.setRenderTarget(X)}function Jr(w,D,B){const F=D.isScene===!0?D.overrideMaterial:null;for(let X=0,Le=w.length;X<Le;X++){const ze=w[X],He=ze.object,Ue=ze.geometry,et=F===null?ze.material:F,Ze=ze.group;He.layers.test(B.layers)&&xf(He,D,B,Ue,et,Ze)}}function xf(w,D,B,F,X,Le){w.onBeforeRender(m,D,B,F,X,Le),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(m,D,B,F,w,Le),X.transparent===!0&&X.side===Ji?(X.side=fn,X.needsUpdate=!0,m.renderBufferDirect(B,D,F,X,w,Le),X.side=Ir,X.needsUpdate=!0,m.renderBufferDirect(B,D,F,X,w,Le),X.side=Ji):m.renderBufferDirect(B,D,F,X,w,Le),w.onAfterRender(m,D,B,F,X,Le)}function oa(w,D,B){D.isScene!==!0&&(D=$e);const F=W.get(w),X=f.state.lights,Le=f.state.shadowsArray,ze=X.state.version,He=Me.getParameters(w,X.state,Le,D,B),Ue=Me.getProgramCacheKey(He);let et=F.programs;F.environment=w.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(w.isMeshStandardMaterial?ve:ne).get(w.envMap||F.environment),et===void 0&&(w.addEventListener("dispose",ae),et=new Map,F.programs=et);let Ze=et.get(Ue);if(Ze!==void 0){if(F.currentProgram===Ze&&F.lightsStateVersion===ze)return Yo(w,He),Ze}else He.uniforms=Me.getUniforms(w),w.onBuild(B,He,m),w.onBeforeCompile(He,m),Ze=Me.acquireProgram(He,Ue),et.set(Ue,Ze),F.uniforms=He.uniforms;const Ye=F.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=x.uniform),Yo(w,He),F.needsLights=Mf(w),F.lightsStateVersion=ze,F.needsLights&&(Ye.ambientLightColor.value=X.state.ambient,Ye.lightProbe.value=X.state.probe,Ye.directionalLights.value=X.state.directional,Ye.directionalLightShadows.value=X.state.directionalShadow,Ye.spotLights.value=X.state.spot,Ye.spotLightShadows.value=X.state.spotShadow,Ye.rectAreaLights.value=X.state.rectArea,Ye.ltc_1.value=X.state.rectAreaLTC1,Ye.ltc_2.value=X.state.rectAreaLTC2,Ye.pointLights.value=X.state.point,Ye.pointLightShadows.value=X.state.pointShadow,Ye.hemisphereLights.value=X.state.hemi,Ye.directionalShadowMap.value=X.state.directionalShadowMap,Ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ye.spotShadowMap.value=X.state.spotShadowMap,Ye.spotShadowMatrix.value=X.state.spotShadowMatrix,Ye.pointShadowMap.value=X.state.pointShadowMap,Ye.pointShadowMatrix.value=X.state.pointShadowMatrix);const St=Ze.getUniforms(),ii=Kn.seqWithValue(St.seq,Ye);return F.currentProgram=Ze,F.uniformsList=ii,Ze}function Yo(w,D){const B=W.get(w);B.outputEncoding=D.outputEncoding,B.instancing=D.instancing,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function bf(w,D,B,F,X){D.isScene!==!0&&(D=$e),j.resetTextureUnits();const Le=D.fog,ze=F.isMeshStandardMaterial?D.environment:null,He=E===null?m.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:On,Ue=(F.isMeshStandardMaterial?ve:ne).get(F.envMap||ze),et=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ze=!!F.normalMap&&!!B.attributes.tangent,Ye=!!B.morphAttributes.position,St=!!B.morphAttributes.normal,ii=!!B.morphAttributes.color,_i=F.toneMapped?m.toneMapping:Fn,xi=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,yn=xi!==void 0?xi.length:0,Qe=W.get(F),bi=f.state.lights;if(P===!0&&(q===!0||w!==b)){const rn=w===b&&F.id===T;x.setState(F,w,rn)}let Et=!1;F.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bi.state.version||Qe.outputEncoding!==He||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==Ue||F.fog&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==x.numPlanes||Qe.numIntersection!==x.numIntersection)||Qe.vertexAlphas!==et||Qe.vertexTangents!==Ze||Qe.morphTargets!==Ye||Qe.morphNormals!==St||Qe.morphColors!==ii||Qe.toneMapping!==_i||Fe.isWebGL2===!0&&Qe.morphTargetsCount!==yn)&&(Et=!0):(Et=!0,Qe.__version=F.version);let vn=Qe.currentProgram;Et===!0&&(vn=oa(F,D,X));let Un=!1,mr=!1,la=!1;const Vt=vn.getUniforms(),gr=Qe.uniforms;if(re.useProgram(vn.program)&&(Un=!0,mr=!0,la=!0),F.id!==T&&(T=F.id,mr=!0),Un||b!==w){if(Vt.setValue($,"projectionMatrix",w.projectionMatrix),Fe.logarithmicDepthBuffer&&Vt.setValue($,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),b!==w&&(b=w,mr=!0,la=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const rn=Vt.map.cameraPosition;rn!==void 0&&rn.setValue($,he.setFromMatrixPosition(w.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Vt.setValue($,"isOrthographic",w.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||X.isSkinnedMesh)&&Vt.setValue($,"viewMatrix",w.matrixWorldInverse)}if(X.isSkinnedMesh){Vt.setOptional($,X,"bindMatrix"),Vt.setOptional($,X,"bindMatrixInverse");const rn=X.skeleton;rn&&(Fe.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Vt.setValue($,"boneTexture",rn.boneTexture,j),Vt.setValue($,"boneTextureSize",rn.boneTextureSize)):Vt.setOptional($,rn,"boneMatrices"))}const ca=B.morphAttributes;return(ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0&&Fe.isWebGL2===!0)&&ce.update(X,B,F,vn),(mr||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,Vt.setValue($,"receiveShadow",X.receiveShadow)),mr&&(Vt.setValue($,"toneMappingExposure",m.toneMappingExposure),Qe.needsLights&&wf(gr,la),Le&&F.fog&&vt.refreshFogUniforms(gr,Le),vt.refreshMaterialUniforms(gr,F,_,O,K),Kn.upload($,Qe.uniformsList,gr,j)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Kn.upload($,Qe.uniformsList,gr,j),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Vt.setValue($,"center",X.center),Vt.setValue($,"modelViewMatrix",X.modelViewMatrix),Vt.setValue($,"normalMatrix",X.normalMatrix),Vt.setValue($,"modelMatrix",X.matrixWorld),vn}function wf(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Mf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,D,B){W.get(w.texture).__webglTexture=D,W.get(w.depthTexture).__webglTexture=B;const F=W.get(w);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){const B=W.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){E=w,y=D,v=B;let F=!0;if(w){const Ue=W.get(w);Ue.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(36160,null),F=!1):Ue.__webglFramebuffer===void 0?j.setupRenderTarget(w):Ue.__hasExternalTextures&&j.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture)}let X=null,Le=!1,ze=!1;if(w){const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture)&&(ze=!0);const et=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(X=et[D],Le=!0):Fe.isWebGL2&&w.samples>0&&j.useMultisampledRTT(w)===!1?X=W.get(w).__webglMultisampledFramebuffer:X=et,A.copy(w.viewport),k.copy(w.scissor),z=w.scissorTest}else A.copy(C).multiplyScalar(_).floor(),k.copy(I).multiplyScalar(_).floor(),z=N;if(re.bindFramebuffer(36160,X)&&Fe.drawBuffers&&F&&re.drawBuffers(w,X),re.viewport(A),re.scissor(k),re.setScissorTest(z),Le){const Ue=W.get(w.texture);$.framebufferTexture2D(36160,36064,34069+D,Ue.__webglTexture,B)}else if(ze){const Ue=W.get(w.texture),et=D||0;$.framebufferTextureLayer(36160,36064,Ue.__webglTexture,B||0,et)}T=-1},this.readRenderTargetPixels=function(w,D,B,F,X,Le,ze){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){re.bindFramebuffer(36160,He);try{const Ue=w.texture,et=Ue.format,Ze=Ue.type;if(et!==hn&&H.convert(et)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Ze===Xi&&(Ne.has("EXT_color_buffer_half_float")||Fe.isWebGL2&&Ne.has("EXT_color_buffer_float"));if(Ze!==pi&&H.convert(Ze)!==$.getParameter(35738)&&!(Ze===ui&&(Fe.isWebGL2||Ne.has("OES_texture_float")||Ne.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-F&&B>=0&&B<=w.height-X&&$.readPixels(D,B,F,X,H.convert(et),H.convert(Ze),Le)}finally{const Ue=E!==null?W.get(E).__webglFramebuffer:null;re.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(w,D,B=0){if(D.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const F=Math.pow(2,-B),X=Math.floor(D.image.width*F),Le=Math.floor(D.image.height*F);j.setTexture2D(D,0),$.copyTexSubImage2D(3553,B,0,0,w.x,w.y,X,Le),re.unbindTexture()},this.copyTextureToTexture=function(w,D,B,F=0){const X=D.image.width,Le=D.image.height,ze=H.convert(B.format),He=H.convert(B.type);j.setTexture2D(B,0),$.pixelStorei(37440,B.flipY),$.pixelStorei(37441,B.premultiplyAlpha),$.pixelStorei(3317,B.unpackAlignment),D.isDataTexture?$.texSubImage2D(3553,F,w.x,w.y,X,Le,ze,He,D.image.data):D.isCompressedTexture?$.compressedTexSubImage2D(3553,F,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,ze,D.mipmaps[0].data):$.texSubImage2D(3553,F,w.x,w.y,ze,He,D.image),F===0&&B.generateMipmaps&&$.generateMipmap(3553),re.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B,F,X=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=w.max.x-w.min.x+1,ze=w.max.y-w.min.y+1,He=w.max.z-w.min.z+1,Ue=H.convert(F.format),et=H.convert(F.type);let Ze;if(F.isData3DTexture)j.setTexture3D(F,0),Ze=32879;else if(F.isDataArrayTexture)j.setTexture2DArray(F,0),Ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,F.flipY),$.pixelStorei(37441,F.premultiplyAlpha),$.pixelStorei(3317,F.unpackAlignment);const Ye=$.getParameter(3314),St=$.getParameter(32878),ii=$.getParameter(3316),_i=$.getParameter(3315),xi=$.getParameter(32877),yn=B.isCompressedTexture?B.mipmaps[0]:B.image;$.pixelStorei(3314,yn.width),$.pixelStorei(32878,yn.height),$.pixelStorei(3316,w.min.x),$.pixelStorei(3315,w.min.y),$.pixelStorei(32877,w.min.z),B.isDataTexture||B.isData3DTexture?$.texSubImage3D(Ze,X,D.x,D.y,D.z,Le,ze,He,Ue,et,yn.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ze,X,D.x,D.y,D.z,Le,ze,He,Ue,yn.data)):$.texSubImage3D(Ze,X,D.x,D.y,D.z,Le,ze,He,Ue,et,yn),$.pixelStorei(3314,Ye),$.pixelStorei(32878,St),$.pixelStorei(3316,ii),$.pixelStorei(3315,_i),$.pixelStorei(32877,xi),X===0&&F.generateMipmaps&&$.generateMipmap(Ze),re.unbindTexture()},this.initTexture=function(w){j.setTexture2D(w,0),re.unbindTexture()},this.resetState=function(){y=0,v=0,E=null,re.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}it.prototype.isWebGLRenderer=!0;class Gx extends it{}Gx.prototype.isWebGL1Renderer=!0;class Hs extends nt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Hs.prototype.isScene=!0;class $r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}$r.prototype.isInterleavedBuffer=!0;const $t=new M;class Br{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Br(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Br.prototype.isInterleavedBufferAttribute=!0;class Io extends It{constructor(e){super(),this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Io.prototype.isSpriteMaterial=!0;let Ni;const xr=new M,Fi=new M,Bi=new M,Oi=new J,br=new J,Nh=new Se,_s=new M,wr=new M,xs=new M,Oc=new J,qa=new J,Uc=new J;class Wx extends nt{constructor(e){if(super(),this.type="Sprite",Ni===void 0){Ni=new yt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $r(t,5);Ni.setIndex([0,1,2,0,2,3]),Ni.setAttribute("position",new Br(n,3,0,!1)),Ni.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Ni,this.material=e!==void 0?e:new Io,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fi.setFromMatrixScale(this.matrixWorld),Nh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fi.multiplyScalar(-Bi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;bs(_s.set(-.5,-.5,0),Bi,a,Fi,i,s),bs(wr.set(.5,-.5,0),Bi,a,Fi,i,s),bs(xs.set(.5,.5,0),Bi,a,Fi,i,s),Oc.set(0,0),qa.set(1,0),Uc.set(1,1);let o=e.ray.intersectTriangle(_s,wr,xs,!1,xr);if(o===null&&(bs(wr.set(-.5,.5,0),Bi,a,Fi,i,s),qa.set(0,1),o=e.ray.intersectTriangle(_s,xs,wr,!1,xr),o===null))return;const l=e.ray.origin.distanceTo(xr);l<e.near||l>e.far||t.push({distance:l,point:xr.clone(),uv:Rt.getUV(xr,_s,wr,xs,Oc,qa,Uc,new J),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Wx.prototype.isSprite=!0;function bs(r,e,t,n,i,s){Oi.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(br.x=s*Oi.x-i*Oi.y,br.y=i*Oi.x+s*Oi.y):br.copy(Oi),r.copy(e),r.x+=br.x,r.y+=br.y,r.applyMatrix4(Nh)}const Vc=new M,Hc=new rt,Gc=new rt,$x=new M,Wc=new Se;class Fh extends qt{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Se,this.bindMatrixInverse=new Se}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Hc.fromBufferAttribute(i.attributes.skinIndex,e),Gc.fromBufferAttribute(i.attributes.skinWeight,e),Vc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Gc.getComponent(s);if(a!==0){const o=Hc.getComponent(s);Wc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($x.copy(Vc).applyMatrix4(Wc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}Fh.prototype.isSkinnedMesh=!0;class qx extends nt{constructor(){super(),this.type="Bone"}}qx.prototype.isBone=!0;class Xx extends Pt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Ct,u=Ct,h,f){super(null,a,o,l,c,u,i,s,h,f),this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Xx.prototype.isDataTexture=!0;class uo extends kt{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}uo.prototype.isInstancedBufferAttribute=!0;const $c=new Se,qc=new Se,ws=[],Mr=new qt;class jx extends qt{constructor(e,t,n){super(e,t),this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Mr.geometry=this.geometry,Mr.material=this.material,Mr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,$c),qc.multiplyMatrices(n,$c),Mr.matrixWorld=qc,Mr.raycast(e,ws);for(let a=0,o=ws.length;a<o;a++){const l=ws[a];l.instanceId=s,l.object=this,t.push(l)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}jx.prototype.isInstancedMesh=!0;class ur extends It{constructor(e){super(),this.type="LineBasicMaterial",this.color=new xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}ur.prototype.isLineBasicMaterial=!0;const Xc=new M,jc=new M,Jc=new Se,Xa=new lr,Ms=new or;class Do extends nt{constructor(e=new yt,t=new ur){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Xc.fromBufferAttribute(t,i-1),jc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xc.distanceTo(jc);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=s,e.ray.intersectsSphere(Ms)===!1)return;Jc.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Jc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new M,u=new M,h=new M,f=new M,d=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,p=n.attributes.position;if(g!==null){const y=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let E=y,T=v-1;E<T;E+=d){const b=g.getX(E),A=g.getX(E+1);if(c.fromBufferAttribute(p,b),u.fromBufferAttribute(p,A),Xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(f);z<e.near||z>e.far||t.push({distance:z,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,a.start),v=Math.min(p.count,a.start+a.count);for(let E=y,T=v-1;E<T;E+=d){if(c.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),Xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Do.prototype.isLine=!0;const Zc=new M,Yc=new M;class zo extends Do{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zc.fromBufferAttribute(t,i),Yc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zc.distanceTo(Yc);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}zo.prototype.isLineSegments=!0;class Jx extends Do{constructor(e,t){super(e,t),this.type="LineLoop"}}Jx.prototype.isLineLoop=!0;class No extends It{constructor(e){super(),this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}No.prototype.isPointsMaterial=!0;const Kc=new Se,ho=new lr,Ss=new or,Ts=new M;class Zx extends nt{constructor(e=new yt,t=new No){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(i),Ss.radius+=s,e.ray.intersectsSphere(Ss)===!1)return;Kc.copy(i).invert(),ho.copy(e.ray).applyMatrix4(Kc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(n.isBufferGeometry){const c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);Ts.fromBufferAttribute(h,p),Qc(Ts,p,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,m=d;g<m;g++)Ts.fromBufferAttribute(h,g),Qc(Ts,g,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Zx.prototype.isPoints=!0;function Qc(r,e,t,n,i,s,a){const o=ho.distanceSqToPoint(r);if(o<t){const l=new M;ho.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Yx extends Pt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.minFilter=a!==void 0?a:zt,this.magFilter=s!==void 0?s:zt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Yx.prototype.isVideoTexture=!0;class Kx extends Pt{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=Ct,this.minFilter=Ct,this.generateMipmaps=!1,this.needsUpdate=!0}}Kx.prototype.isFramebufferTexture=!0;class Qx extends Pt{constructor(e,t,n,i,s,a,o,l,c,u,h,f){super(null,a,o,l,c,u,i,s,h,f),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}Qx.prototype.isCompressedTexture=!0;class e1 extends Pt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.needsUpdate=!0}}e1.prototype.isCanvasTexture=!0;class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(a-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new J:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new M,i=[],s=[],a=[],o=new M,l=new Se;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Gt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Gt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ia extends nn{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const n=t||new J,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}ia.prototype.isEllipseCurve=!0;class Bh extends ia{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.type="ArcCurve"}}Bh.prototype.isArcCurve=!0;function Fo(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let f=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,d*=u,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const Es=new M,ja=new Fo,Ja=new Fo,Za=new Fo;class Oh extends nn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Es.subVectors(i[0],i[1]).add(i[0]),c=Es);const h=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Es.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Es),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),ja.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),Ja.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),Za.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ja.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Za.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ja.calc(l),Ja.calc(l),Za.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Oh.prototype.isCatmullRomCurve3=!0;function eu(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function t1(r,e){const t=1-r;return t*t*e}function n1(r,e){return 2*(1-r)*r*e}function i1(r,e){return r*r*e}function Lr(r,e,t,n){return t1(r,e)+n1(r,t)+i1(r,n)}function r1(r,e){const t=1-r;return t*t*t*e}function s1(r,e){const t=1-r;return 3*t*t*r*e}function a1(r,e){return 3*(1-r)*r*r*e}function o1(r,e){return r*r*r*e}function kr(r,e,t,n,i){return r1(r,e)+s1(r,t)+a1(r,n)+o1(r,i)}class Bo extends nn{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,i.x,s.x,a.x,o.x),kr(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Bo.prototype.isCubicBezierCurve=!0;class Uh extends nn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,i.x,s.x,a.x,o.x),kr(e,i.y,s.y,a.y,o.y),kr(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Uh.prototype.isCubicBezierCurve3=!0;class ra extends nn{constructor(e=new J,t=new J){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new J;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ra.prototype.isLineCurve=!0;class l1 extends nn{constructor(e=new M,t=new M){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new M){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oo extends nn{constructor(e=new J,t=new J,n=new J){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Lr(e,i.x,s.x,a.x),Lr(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Oo.prototype.isQuadraticBezierCurve=!0;class Vh extends nn{constructor(e=new M,t=new M,n=new M){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Lr(e,i.x,s.x,a.x),Lr(e,i.y,s.y,a.y),Lr(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Vh.prototype.isQuadraticBezierCurve3=!0;class Uo extends nn{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(eu(o,l.x,c.x,u.x,h.x),eu(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}Uo.prototype.isSplineCurve=!0;var Hh=Object.freeze({__proto__:null,ArcCurve:Bh,CatmullRomCurve3:Oh,CubicBezierCurve:Bo,CubicBezierCurve3:Uh,EllipseCurve:ia,LineCurve:ra,LineCurve3:l1,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Vh,SplineCurve:Uo});class c1 extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ra(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Hh[i.type]().fromJSON(i))}return this}}class fo extends c1{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ra(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Oo(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Bo(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Uo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new ia(e,t,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}new M;new M;new M;new Rt;class qr extends fo{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new fo().fromJSON(i))}return this}}const u1={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Gh(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,f,d;if(n&&(s=m1(r,e,s,t)),r.length>80*t){o=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],f=r[g+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);d=Math.max(c-o,u-l),d=d!==0?1/d:0}return Or(s,a,t,o,l,d),a}};function Gh(r,e,t,n,i){let s,a;if(i===E1(r,e,t,n)>0)for(s=e;s<t;s+=n)a=tu(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=tu(s,r[s],r[s+1],a);return a&&sa(a,a.next)&&(Vr(a),a=a.next),a}function ei(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(sa(t,t.next)||_t(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Or(r,e,t,n,i,s,a){if(!r)return;!a&&s&&x1(r,n,i,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?f1(r,n,i,s):h1(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Vr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=d1(ei(r),e,t),Or(r,e,t,n,i,s,2)):a===2&&p1(r,e,t,n,i,s):Or(ei(r),e,t,n,i,s,1);break}}}function h1(r){const e=r.prev,t=r,n=r.next;if(_t(e,t,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Wi(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&_t(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function f1(r,e,t,n){const i=r.prev,s=r,a=r.next;if(_t(i,s,a)>=0)return!1;const o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,l=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,c=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,u=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=po(o,l,e,t,n),f=po(c,u,e,t,n);let d=r.prevZ,g=r.nextZ;for(;d&&d.z>=h&&g&&g.z<=f;){if(d!==r.prev&&d!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,d.x,d.y)&&_t(d.prev,d,d.next)>=0||(d=d.prevZ,g!==r.prev&&g!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&_t(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=h;){if(d!==r.prev&&d!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,d.x,d.y)&&_t(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=f;){if(g!==r.prev&&g!==r.next&&Wi(i.x,i.y,s.x,s.y,a.x,a.y,g.x,g.y)&&_t(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function d1(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!sa(i,s)&&Wh(i,n,n.next,s)&&Ur(i,s)&&Ur(s,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(s.i/t),Vr(n),Vr(n.next),n=r=s),n=n.next}while(n!==r);return ei(n)}function p1(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&M1(a,o)){let l=$h(a,o);a=ei(a,a.next),l=ei(l,l.next),Or(a,e,t,n,i,s),Or(l,e,t,n,i,s);return}o=o.next}a=a.next}while(a!==r)}function m1(r,e,t,n){const i=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Gh(r,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(w1(c));for(i.sort(g1),s=0;s<i.length;s++)y1(i[s],t),t=ei(t,t.next);return t}function g1(r,e){return r.x-e.x}function y1(r,e){if(e=v1(r,e),e){const t=$h(e,r);ei(e,e.next),ei(t,t.next)}}function v1(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s){if(s=f,f===n){if(i===t.y)return t;if(i===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(n===s)return a;const o=a,l=a.x,c=a.y;let u=1/0,h;t=a;do n>=t.x&&t.x>=l&&n!==t.x&&Wi(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)&&(h=Math.abs(i-t.y)/(n-t.x),Ur(t,r)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&_1(a,t)))&&(a=t,u=h)),t=t.next;while(t!==o);return a}function _1(r,e){return _t(r.prev,r,e.prev)<0&&_t(e.next,r,r.next)<0}function x1(r,e,t,n){let i=r;do i.z===null&&(i.z=po(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,b1(i)}function b1(r){let e,t,n,i,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(a>1);return r}function po(r,e,t,n,i){return r=32767*(r-t)*i,e=32767*(e-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function w1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Wi(r,e,t,n,i,s,a,o){return(i-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(n-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(i-a)*(n-o)>=0}function M1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!S1(r,e)&&(Ur(r,e)&&Ur(e,r)&&T1(r,e)&&(_t(r.prev,r,e.prev)||_t(r,e.prev,e))||sa(r,e)&&_t(r.prev,r,r.next)>0&&_t(e.prev,e,e.next)>0)}function _t(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function sa(r,e){return r.x===e.x&&r.y===e.y}function Wh(r,e,t,n){const i=Cs(_t(r,e,t)),s=Cs(_t(r,e,n)),a=Cs(_t(t,n,r)),o=Cs(_t(t,n,e));return!!(i!==s&&a!==o||i===0&&As(r,t,e)||s===0&&As(r,n,e)||a===0&&As(t,r,n)||o===0&&As(t,e,n))}function As(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Cs(r){return r>0?1:r<0?-1:0}function S1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Wh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ur(r,e){return _t(r.prev,r,r.next)<0?_t(r,e,r.next)>=0&&_t(r,r.prev,e)>=0:_t(r,e,r.prev)<0||_t(r,r.next,e)<0}function T1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function $h(r,e){const t=new mo(r.i,r.x,r.y),n=new mo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function tu(r,e,t,n){const i=new mo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E1(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class Qn{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];nu(e),iu(n,e);let a=e.length;t.forEach(nu);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,iu(n,t[l]);const o=u1.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function nu(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function iu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class hr extends yt{constructor(e=new qr([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Nt(i,3)),this.setAttribute("uv",new Nt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:A1;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),h=t.amount);let E,T=!1,b,A,k,z;y&&(E=y.getSpacedPoints(u),T=!0,f=!1,b=y.computeFrenetFrames(u,!1),A=new M,k=new M,z=new M),f||(p=0,d=0,g=0,m=0);const ie=o.extractPoints(c);let O=ie.shape;const _=ie.holes;if(!Qn.isClockWise(O)){O=O.reverse();for(let W=0,j=_.length;W<j;W++){const ne=_[W];Qn.isClockWise(ne)&&(_[W]=ne.reverse())}}const G=Qn.triangulateShape(O,_),C=O;for(let W=0,j=_.length;W<j;W++){const ne=_[W];O=O.concat(ne)}function I(W,j,ne){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().multiplyScalar(ne).add(W)}const N=O.length,U=G.length;function P(W,j,ne){let ve,ue,De;const Ae=W.x-j.x,Me=W.y-j.y,vt=ne.x-W.x,st=ne.y-W.y,S=Ae*Ae+Me*Me,x=Ae*st-Me*vt;if(Math.abs(x)>Number.EPSILON){const V=Math.sqrt(S),Z=Math.sqrt(vt*vt+st*st),ce=j.x-Me/V,me=j.y+Ae/V,Te=ne.x-st/Z,H=ne.y+vt/Z,Be=((Te-ce)*st-(H-me)*vt)/(Ae*st-Me*vt);ve=ce+Ae*Be-W.x,ue=me+Me*Be-W.y;const Ve=ve*ve+ue*ue;if(Ve<=2)return new J(ve,ue);De=Math.sqrt(Ve/2)}else{let V=!1;Ae>Number.EPSILON?vt>Number.EPSILON&&(V=!0):Ae<-Number.EPSILON?vt<-Number.EPSILON&&(V=!0):Math.sign(Me)===Math.sign(st)&&(V=!0),V?(ve=-Me,ue=Ae,De=Math.sqrt(S)):(ve=Ae,ue=Me,De=Math.sqrt(S/2))}return new J(ve/De,ue/De)}const q=[];for(let W=0,j=C.length,ne=j-1,ve=W+1;W<j;W++,ne++,ve++)ne===j&&(ne=0),ve===j&&(ve=0),q[W]=P(C[W],C[ne],C[ve]);const K=[];let Q,ee=q.concat();for(let W=0,j=_.length;W<j;W++){const ne=_[W];Q=[];for(let ve=0,ue=ne.length,De=ue-1,Ae=ve+1;ve<ue;ve++,De++,Ae++)De===ue&&(De=0),Ae===ue&&(Ae=0),Q[ve]=P(ne[ve],ne[De],ne[Ae]);K.push(Q),ee=ee.concat(Q)}for(let W=0;W<p;W++){const j=W/p,ne=d*Math.cos(j*Math.PI/2),ve=g*Math.sin(j*Math.PI/2)+m;for(let ue=0,De=C.length;ue<De;ue++){const Ae=I(C[ue],q[ue],ve);Ke(Ae.x,Ae.y,-ne)}for(let ue=0,De=_.length;ue<De;ue++){const Ae=_[ue];Q=K[ue];for(let Me=0,vt=Ae.length;Me<vt;Me++){const st=I(Ae[Me],Q[Me],ve);Ke(st.x,st.y,-ne)}}}const he=g+m;for(let W=0;W<N;W++){const j=f?I(O[W],ee[W],he):O[W];T?(k.copy(b.normals[0]).multiplyScalar(j.x),A.copy(b.binormals[0]).multiplyScalar(j.y),z.copy(E[0]).add(k).add(A),Ke(z.x,z.y,z.z)):Ke(j.x,j.y,0)}for(let W=1;W<=u;W++)for(let j=0;j<N;j++){const ne=f?I(O[j],ee[j],he):O[j];T?(k.copy(b.normals[W]).multiplyScalar(ne.x),A.copy(b.binormals[W]).multiplyScalar(ne.y),z.copy(E[W]).add(k).add(A),Ke(z.x,z.y,z.z)):Ke(ne.x,ne.y,h/u*W)}for(let W=p-1;W>=0;W--){const j=W/p,ne=d*Math.cos(j*Math.PI/2),ve=g*Math.sin(j*Math.PI/2)+m;for(let ue=0,De=C.length;ue<De;ue++){const Ae=I(C[ue],q[ue],ve);Ke(Ae.x,Ae.y,h+ne)}for(let ue=0,De=_.length;ue<De;ue++){const Ae=_[ue];Q=K[ue];for(let Me=0,vt=Ae.length;Me<vt;Me++){const st=I(Ae[Me],Q[Me],ve);T?Ke(st.x,st.y+E[u-1].y,E[u-1].x+ne):Ke(st.x,st.y,h+ne)}}}$e(),Pe();function $e(){const W=i.length/3;if(f){let j=0,ne=N*j;for(let ve=0;ve<U;ve++){const ue=G[ve];Ne(ue[2]+ne,ue[1]+ne,ue[0]+ne)}j=u+p*2,ne=N*j;for(let ve=0;ve<U;ve++){const ue=G[ve];Ne(ue[0]+ne,ue[1]+ne,ue[2]+ne)}}else{for(let j=0;j<U;j++){const ne=G[j];Ne(ne[2],ne[1],ne[0])}for(let j=0;j<U;j++){const ne=G[j];Ne(ne[0]+N*u,ne[1]+N*u,ne[2]+N*u)}}n.addGroup(W,i.length/3-W,0)}function Pe(){const W=i.length/3;let j=0;$(C,j),j+=C.length;for(let ne=0,ve=_.length;ne<ve;ne++){const ue=_[ne];$(ue,j),j+=ue.length}n.addGroup(W,i.length/3-W,1)}function $(W,j){let ne=W.length;for(;--ne>=0;){const ve=ne;let ue=ne-1;ue<0&&(ue=W.length-1);for(let De=0,Ae=u+p*2;De<Ae;De++){const Me=N*De,vt=N*(De+1),st=j+ve+Me,S=j+ue+Me,x=j+ue+vt,V=j+ve+vt;Fe(st,S,x,V)}}}function Ke(W,j,ne){l.push(W),l.push(j),l.push(ne)}function Ne(W,j,ne){re(W),re(j),re(ne);const ve=i.length/3,ue=v.generateTopUV(n,i,ve-3,ve-2,ve-1);Ge(ue[0]),Ge(ue[1]),Ge(ue[2])}function Fe(W,j,ne,ve){re(W),re(j),re(ve),re(j),re(ne),re(ve);const ue=i.length/3,De=v.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);Ge(De[0]),Ge(De[1]),Ge(De[3]),Ge(De[1]),Ge(De[2]),Ge(De[3])}function re(W){i.push(l[W*3+0]),i.push(l[W*3+1]),i.push(l[W*3+2])}function Ge(W){s.push(W.x),s.push(W.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Hh[i.type]().fromJSON(i)),new hr(n,e.options)}}const A1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new J(s,a),new J(o,l),new J(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],m=e[s*3],p=e[s*3+1],y=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-h),new J(f,1-g),new J(m,1-y)]:[new J(o,1-l),new J(u,1-h),new J(d,1-g),new J(p,1-y)]}};function C1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Vo extends yt{constructor(e=new qr([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Nt(i,3)),this.setAttribute("normal",new Nt(s,3)),this.setAttribute("uv",new Nt(a,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;Qn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,y=g.length;p<y;p++){const v=g[p];Qn.isClockWise(v)===!0&&(g[p]=v.reverse())}const m=Qn.triangulateShape(d,g);for(let p=0,y=g.length;p<y;p++){const v=g[p];d=d.concat(v)}for(let p=0,y=d.length;p<y;p++){const v=d[p];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let p=0,y=m.length;p<y;p++){const v=m[p],E=v[0]+h,T=v[1]+h,b=v[2]+h;n.push(E,T,b),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return R1(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Vo(n,e.curveSegments)}}function R1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class qh extends It{constructor(e){super(),this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}qh.prototype.isShadowMaterial=!0;class Xh extends tn{constructor(e){super(e),this.type="RawShaderMaterial"}}Xh.prototype.isRawShaderMaterial=!0;class Ho extends It{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ho.prototype.isMeshStandardMaterial=!0;class jh extends Ho{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}jh.prototype.isMeshPhysicalMaterial=!0;class Jh extends It{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Jh.prototype.isMeshPhongMaterial=!0;class Zh extends It{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Zh.prototype.isMeshToonMaterial=!0;class Yh extends It{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Yh.prototype.isMeshNormalMaterial=!0;class Kh extends It{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=js,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Kh.prototype.isMeshLambertMaterial=!0;class Qh extends It{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ar,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Qh.prototype.isMeshMatcapMaterial=!0;class ef extends ur{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}ef.prototype.isLineDashedMaterial=!0;const L1={ShadowMaterial:qh,SpriteMaterial:Io,RawShaderMaterial:Xh,ShaderMaterial:tn,PointsMaterial:No,MeshPhysicalMaterial:jh,MeshStandardMaterial:Ho,MeshPhongMaterial:Jh,MeshToonMaterial:Zh,MeshNormalMaterial:Yh,MeshLambertMaterial:Kh,MeshDepthMaterial:ko,MeshDistanceMaterial:Po,MeshBasicMaterial:Gr,MeshMatcapMaterial:Qh,LineDashedMaterial:ef,LineBasicMaterial:ur,Material:It};It.fromType=function(r){return new L1[r]};const pt={arraySlice:function(r,e,t){return pt.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i},flattenJSON:function(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)},subclip:function(r,e,t,n,i=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],f=[];for(let d=0;d<c.times.length;++d){const g=c.times[d]*i;if(!(g<t||g>=n)){h.push(c.times[d]);for(let m=0;m<u;++m)f.push(c.values[d*u+m])}}h.length!==0&&(c.times=pt.convertArray(h,c.times.constructor),c.values=pt.convertArray(f,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,n=30){n<=0&&(n=30);const i=t.tracks.length,s=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(y){return y.name===o.name&&y.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const g=o.times.length-1;let m;if(s<=o.times[0]){const y=u,v=h-u;m=pt.arraySlice(o.values,y,v)}else if(s>=o.times[g]){const y=g*h+u,v=y+h-u;m=pt.arraySlice(o.values,y,v)}else{const y=o.createInterpolant(),v=u,E=h-u;y.evaluate(s),m=pt.arraySlice(y.resultBuffer,v,E)}l==="quaternion"&&new Zt().fromArray(m).normalize().conjugate().toArray(m);const p=c.times.length;for(let y=0;y<p;++y){const v=y*d+f;if(l==="quaternion")Zt.multiplyQuaternionsFlat(c.values,v,m,0,c.values,v);else{const E=d-f*2;for(let T=0;T<E;++T)c.values[v+T]-=m[T]}}}return r.blendMode=yh,r}};class ti{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,s)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,s,e)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}ti.prototype.beforeStart_=ti.prototype.copySampleValue_;ti.prototype.afterEnd_=ti.prototype.copySampleValue_;class k1 extends ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vi,endingEnd:Vi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hi:s=e,o=2*t-n;break;case Us:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Hi:a=e,l=2*n-t;break;case Us:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,y=-f*p+2*f*m-f*g,v=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,E=(-1-d)*p+(1.5+d)*m+.5*g,T=d*p-d*m;for(let b=0;b!==o;++b)s[b]=y*a[u+b]+v*a[c+b]+E*a[l+b]+T*a[h+b];return s}}class tf extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class P1 extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class An{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pt.convertArray(t,this.TimeBufferType),this.values=pt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pt.convertArray(e.times,Array),values:pt.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new k1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case Os:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Os;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=pt.arraySlice(n,s,a),this.values=pt.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pt.isTypedArray(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=pt.arraySlice(this.times),t=pt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===ga,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=pt.arraySlice(e,0,a),this.values=pt.arraySlice(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=pt.arraySlice(this.times,0),t=pt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Os;class fr extends An{}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Bs;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class nf extends An{}nf.prototype.ValueTypeName="color";class Gs extends An{}Gs.prototype.ValueTypeName="number";class I1 extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Zt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Xr extends An{InterpolantFactoryMethodLinear(e){return new I1(this.times,this.values,this.getValueSize(),e)}}Xr.prototype.ValueTypeName="quaternion";Xr.prototype.DefaultInterpolation=Os;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends An{}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Bs;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends An{}Ws.prototype.ValueTypeName="vector";class ru{constructor(e,t=-1,n,i=Eo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(z1(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(An.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=pt.getKeyframeOrder(l);l=pt.sortedArray(l,1,u),c=pt.sortedArray(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Gs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],y=[];pt.flattenJSON(d,p,y,g),p.length!==0&&m.push(new h(f,p,y))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],y=[];for(let v=0;v!==f[g].morphTargets.length;++v){const E=f[g];p.push(E.time),y.push(E.morphTarget===m?1:0)}i.push(new Gs(".morphTargetInfluence["+m+"]",p,y))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(Ws,d+".position",f,"pos",i),n(Xr,d+".quaternion",f,"rot",i),n(Ws,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function D1(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gs;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return nf;case"quaternion":return Xr;case"bool":case"boolean":return fr;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function z1(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=D1(r.type);if(r.times===void 0){const t=[],n=[];pt.flattenJSON(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const er={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class N1{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const F1=new N1;class ni{constructor(e){this.manager=e!==void 0?e:F1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const In={};class B1 extends ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=er.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:n,onError:i});return}In[e]=[],In[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=In[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(y){v();function v(){h.read().then(({done:E,value:T})=>{if(E)y.close();else{m+=T.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let A=0,k=u.length;A<k;A++){const z=u[A];z.onProgress&&z.onProgress(b)}y.enqueue(T),v()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{er.add(e,c);const u=In[e];delete In[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=In[e];if(u===void 0)throw this.manager.itemError(e),c;delete In[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rf extends ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=er.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Fr("img");function l(){u(),er.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class O1 extends ni{constructor(e){super(e)}load(e,t,n,i){const s=new Ks,a=new rf(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class sf extends ni{constructor(e){super(e)}load(e,t,n,i){const s=new Pt,a=new rf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class En extends nt{constructor(e,t=1){super(),this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}En.prototype.isLight=!0;class U1 extends En{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.groundColor=new xe(t)}copy(e){return En.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}U1.prototype.isHemisphereLight=!0;const su=new Se,au=new M,ou=new M;class Go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;au.setFromMatrixPosition(e.matrixWorld),t.position.copy(au),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class af extends Go{constructor(){super(new Jt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=oo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}af.prototype.isSpotLightShadow=!0;class V1 extends En{constructor(e,t,n=0,i=Math.PI/3,s=0,a=1){super(e,t),this.type="SpotLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.shadow=new af}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}V1.prototype.isSpotLight=!0;const lu=new Se,Sr=new M,Ya=new M;class of extends Go{constructor(){super(new Jt(90,1,.5,500)),this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),i.makeTranslation(-Sr.x,-Sr.y,-Sr.z),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu)}}of.prototype.isPointLightShadow=!0;class H1 extends En{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new of}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}H1.prototype.isPointLight=!0;class lf extends Go{constructor(){super(new ta(-5,5,5,-5,.5,500))}}lf.prototype.isDirectionalLightShadow=!0;class G1 extends En{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(nt.DefaultUp),this.updateMatrix(),this.target=new nt,this.shadow=new lf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}G1.prototype.isDirectionalLight=!0;class W1 extends En{constructor(e,t){super(e,t),this.type="AmbientLight"}}W1.prototype.isAmbientLight=!0;class $1 extends En{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}$1.prototype.isRectAreaLight=!0;class cf{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new M)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}cf.prototype.isSphericalHarmonics3=!0;class Wo extends En{constructor(e=new cf,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}Wo.prototype.isLightProbe=!0;class q1{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class X1 extends yt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}X1.prototype.isInstancedBufferGeometry=!0;class j1 extends ni{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=er.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){er.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}j1.prototype.isImageBitmapLoader=!0;let Rs;const J1={getContext:function(){return Rs===void 0&&(Rs=new(window.AudioContext||window.webkitAudioContext)),Rs},setContext:function(r){Rs=r}};class Z1 extends ni{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new B1(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);J1.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}}class Y1 extends Wo{constructor(e,t,n=1){super(void 0,n);const i=new xe().set(e),s=new xe().set(t),a=new M(i.r,i.g,i.b),o=new M(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Y1.prototype.isHemisphereLightProbe=!0;class K1 extends Wo{constructor(e,t=1){super(void 0,t);const n=new xe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}K1.prototype.isAmbientLightProbe=!0;class Q1 extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class eb{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Zt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Zt.multiplyQuaternionsFlat(e,a,e,t,e,n),Zt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const $o="\\[\\]\\.:\\/",tb=new RegExp("["+$o+"]","g"),qo="[^"+$o+"]",nb="[^"+$o.replace("\\.","")+"]",ib=/((?:WC+[\/:])*)/.source.replace("WC",qo),rb=/(WCOD+)?/.source.replace("WCOD",nb),sb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),ob=new RegExp("^"+ib+rb+sb+ab+"$"),lb=["material","materials","bones"];class cb{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tb,"")}static parseTrackName(e){const t=ob.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);lb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=cb;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ub{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Vi,endingEnd:Vi};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Eo:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Zg;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===jg){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Hi,i.endingEnd=Hi):(e?i.endingStart=this.zeroSlopeAtStart?Hi:Vi:i.endingStart=Us,t?i.endingEnd=this.zeroSlopeAtEnd?Hi:Vi:i.endingEnd=Us)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}class hb extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const f=i[h],d=f.name;let g=u[d];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,d));continue}const m=t&&t._propertyBindings[h].binding.parsedPath;g=new eb(tt.create(n,d,m),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,d),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new tf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?ru.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Eo),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new ub(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?ru.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}hb.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class fb extends $r{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}fb.prototype.isInstancedInterleavedBuffer=!0;const jn=new M,Ls=new Se,Ka=new Se;class db extends zo{constructor(e){const t=uf(e),n=new yt,i=[],s=[],a=new xe(0,0,1),o=new xe(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Nt(i,3)),n.setAttribute("color",new Nt(s,3));const l=new ur({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");Ka.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Ls.multiplyMatrices(Ka,o.matrixWorld),jn.setFromMatrixPosition(Ls),i.setXYZ(a,jn.x,jn.y,jn.z),Ls.multiplyMatrices(Ka,o.parent.matrixWorld),jn.setFromMatrixPosition(Ls),i.setXYZ(a+1,jn.x,jn.y,jn.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function uf(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,uf(r.children[t]));return e}class pb extends zo{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const m=f===s?n:i;m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3,m.toArray(c,d),d+=3}const u=new yt;u.setAttribute("position",new Nt(l,3)),u.setAttribute("color",new Nt(c,3));const h=new ur({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}}const _n=new Uint32Array(512),xn=new Uint32Array(512);for(let r=0;r<256;++r){const e=r-127;e<-27?(_n[r]=0,_n[r|256]=32768,xn[r]=24,xn[r|256]=24):e<-14?(_n[r]=1024>>-e-14,_n[r|256]=1024>>-e-14|32768,xn[r]=-e-1,xn[r|256]=-e-1):e<=15?(_n[r]=e+15<<10,_n[r|256]=e+15<<10|32768,xn[r]=13,xn[r|256]=13):e<128?(_n[r]=31744,_n[r|256]=64512,xn[r]=24,xn[r|256]=24):(_n[r]=31744,_n[r|256]=64512,xn[r]=13,xn[r|256]=13)}const hf=new Uint32Array(2048),jr=new Uint32Array(64),mb=new Uint32Array(64);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,hf[r]=e|t}for(let r=1024;r<2048;++r)hf[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)jr[r]=r<<23;jr[31]=1199570944;jr[32]=2147483648;for(let r=33;r<63;++r)jr[r]=2147483648+(r-32<<23);jr[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(mb[r]=1024);nn.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(nn.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};fo.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};pb.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};db.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};ni.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),q1.extractUrlBase(r)};ni.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};pn.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};pn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};pn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};pn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};pn.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};vi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};or.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Qs.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};Ut.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Ut.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Ut.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};Ut.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};Ut.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};Ut.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};Se.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};Se.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};Se.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new M().setFromMatrixColumn(this,3)};Se.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};Se.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Se.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Se.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Se.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Se.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};Se.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Se.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Se.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Se.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Se.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Se.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Se.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};Se.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Se.prototype.makeFrustum=function(r,e,t,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,n,t,i,s)};Se.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};zn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Zt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Zt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};lr.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};lr.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};lr.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Rt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Rt.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};Rt.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};Rt.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};Rt.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};Rt.barycoordFromPoint=function(r,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Rt.getBarycoord(r,e,t,n,i)};Rt.normal=function(r,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Rt.getNormal(r,e,t,n)};qr.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};qr.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new hr(this,r)};qr.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Vo(this,r)};J.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};J.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};J.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};M.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};M.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};M.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};M.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};M.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};M.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};M.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};M.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};M.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};rt.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};rt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};nt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};nt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};nt.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};nt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};nt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(nt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});qt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(qt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Yg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Fh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Jt.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(En.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(kt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Vs},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Vs)}}});kt.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Vs:Nr),this};kt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},kt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};yt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};yt.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new kt(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};yt.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};yt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};yt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};yt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};yt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(yt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});$r.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Vs:Nr),this};$r.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};hr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};hr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};hr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hs.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(It.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new xe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===dh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(tn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});it.prototype.clearTarget=function(r,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,n)};it.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};it.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};it.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};it.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};it.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};it.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};it.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};it.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};it.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};it.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};it.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};it.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};it.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};it.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};it.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};it.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};it.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};it.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};it.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};it.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};it.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};it.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};it.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};it.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(it.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?dt:On}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Ih.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Xt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Q1.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Z1().load(r,function(n){e.setBuffer(n)}),this};Ro.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Ro.prototype.clear=function(r,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,n)};yi.crossOrigin=void 0;yi.loadTexture=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new sf;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};yi.loadTextureCube=function(r,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new O1;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,t,void 0,n);return e&&(s.mapping=e),s};yi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};yi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);function ke(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var n=Array.from(typeof r=="string"?[r]:r);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var i=n.reduce(function(o,l){var c=l.match(/\n([\t ]+|(?!\s).)/g);return c?o.concat(c.map(function(u){var h,f;return(f=(h=u.match(/[\t ]/g))===null||h===void 0?void 0:h.length)!==null&&f!==void 0?f:0})):o},[]);if(i.length){var s=new RegExp(`
[	 ]{`+Math.min.apply(Math,i)+"}","g");n=n.map(function(o){return o.replace(s,`
`)})}n[0]=n[0].replace(/^\r?\n/,"");var a=n[0];return e.forEach(function(o,l){var c=a.match(/(?:^|\n)( *)$/),u=c?c[1]:"",h=o;typeof o=="string"&&o.includes(`
`)&&(h=String(o).split(`
`).map(function(f,d){return d===0?f:""+u+f}).join(`
`)),a+=h+n[l+1]}),a}const ff={glsl:ke`
    vec3 hsvToRgb(vec3 hsv) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(hsv.xxx + K.xyz) * 6.0 - K.www);
      return hsv.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), hsv.y);
    }
  `,functionSignatures:{hsvToRgb:{parameters:[["vec3","color"]],returnType:"vec3"}}},Xo={glsl:ke`
    vec3 rgbToHsv(vec3 rgb) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
      vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));
  
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
  `,functionSignatures:{rgbToHsv:{parameters:[["vec3","color"]],returnType:"vec3"}}},cu={name:"hsvToRgb",returnType:"vec3",group:"color",imports:[ff],fields:{hue:{kind:"dynamic",type:"float",value:0},saturation:{kind:"dynamic",type:"float",value:0},value:{kind:"dynamic",type:"float",value:0}},glsl:ke`
    return hsvToRgb(vec3(hue, saturation, value));
  `},uu={name:"hue",returnType:"float",group:"color",imports:[Xo],fields:{source:{kind:"dynamic",type:"vec3",value:new M}},glsl:ke`
    return rgbToHsv(source).x;
  `},hu={name:"saturation",returnType:"float",group:"color",imports:[Xo],fields:{source:{kind:"dynamic",type:"vec3",value:new M}},glsl:ke`
    return rgbToHsv(source).y;
  `},fu={name:"brightness",returnType:"float",group:"color",imports:[Xo],fields:{source:{kind:"dynamic",type:"vec3",value:new M}},glsl:ke`
    return rgbToHsv(source).z;
  `},du={name:"contrast",returnType:"vec3",group:"color",imports:[],fields:{source:{kind:"dynamic",type:"vec3",value:new M},contrast:{kind:"dynamic",type:"float",value:1,min:0,max:2},brightness:{kind:"dynamic",type:"float",value:0}},glsl:ke`
    return (source - 0.5) * contrast + 0.5 + brightness;
  `},pu={name:"lerp",returnType:"vec3",group:"color",fields:{value1:{kind:"dynamic",type:"vec3",value:new M},value2:{kind:"dynamic",type:"vec3",value:new M},amount:{kind:"dynamic",type:"float",value:.5,min:0,max:1}},glsl:ke`
    return mix(value1, value2, amount);
  `},mu={name:"colorCombine",returnType:"vec3",group:"color",imports:[ff],fields:{value1:{kind:"dynamic",type:"vec3",value:new M},value2:{kind:"dynamic",type:"vec3",value:new M},operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4,brightest:5,darkest:6}}},glsl:ke`
    if(operation == 0) {
      return value1 + value2;
    } else if(operation == 1) {
      return value1 * value2;
    } else if(operation == 2) {
      return pow(value1, value2);
    } else if(operation == 3) {
      return (value1 + value2) / 2.0;
    } else if(operation == 4) {
      return mod(value1, value2);
    } else if(operation == 5) {
      return hsvToRgb(value1).z > hsvToRgb(value2).z ? value1 : value2;
    } else {
      return hsvToRgb(value1).z < hsvToRgb(value2).z ? value1 : value2;
    }
  `},gu={name:"checkers",returnType:"float",group:"generator",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},cellsX:{kind:"dynamic",type:"float",value:1,min:0,max:10},cellsY:{kind:"dynamic",type:"float",value:1,min:0,max:10},cellsZ:{kind:"dynamic",type:"float",value:0,min:0,max:10},value1:{kind:"dynamic",type:"float",value:0,min:0,max:1},value2:{kind:"dynamic",type:"float",value:1,min:0,max:1}},glsl:ke`
    float total = (
      floor(point.x * cellsX) + 
      floor(point.y * cellsY) + 
      floor(point.z * cellsZ)
    );

    bool even = mod(total, 2.0) == 0.0;
    return even ? value1 : value2;
  `},jo={glsl:ke`
    const float defaultViewportWidth = 1920.0;
    const float defaultViewportHeight = 1080.0;

    float getSizeScale() {
      return min(
        viewport.x / defaultViewportWidth,
        viewport.y / defaultViewportHeight
      );
    }

    float scaleByViewportSize(float value) {
      return getSizeScale() * value;
    }
  `,functionSignatures:{getSizeScale:{parameters:[],returnType:"float"},scaleByViewportSize:{parameters:[["float","value"]],returnType:"float"}}},yu={name:"circle",returnType:"float",group:"generator",imports:[jo],fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},radius:{kind:"dynamic",type:"float",value:300,min:0,max:1e3},x:{kind:"dynamic",type:"float",value:0,min:-1e3,max:1e3},y:{kind:"dynamic",type:"float",value:0,min:-1e3,max:1e3},outsideBrightness:{kind:"dynamic",type:"float",value:0,min:0,max:1},insideBrightness:{kind:"dynamic",type:"float",value:1,min:0,max:1},softness:{kind:"dynamic",type:"float",value:0,min:0,max:1}},glsl:ke`
    float cx = scale * (scaleByViewportSize(x) + viewport.x / 2.0);
    float cy = scale * (scaleByViewportSize(y) + viewport.y / 2.0);

    float dx = (point.x - cx);
    float dy = (point.y - cy);
    float distSq = dx * dx + dy * dy;

    float r = scaleByViewportSize(radius * scale);

    if(distSq < (r * r)) {
      float dist = sqrt(distSq);
      float n = 1.0 - dist / r;

      if(n > softness) return insideBrightness;

      float d = smoothstep(softness, 0.0, n);
      return mix(insideBrightness, outsideBrightness, d);
    } else {
      return outsideBrightness;
    }
  `},vu={name:"circles",returnType:"float",group:"generator",imports:[jo],fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},radius:{kind:"dynamic",type:"float",value:300,min:0,max:1e3},padding:{kind:"dynamic",type:"float",value:0,min:0,max:1},outsideBrightness:{kind:"dynamic",type:"float",value:0,min:0,max:1},insideBrightness:{kind:"dynamic",type:"float",value:1,min:0,max:1},softness:{kind:"dynamic",type:"float",value:0,min:0,max:1}},glsl:ke`
    float r = scaleByViewportSize(radius * scale);

    float cx = scale * (viewport.x / 2.0);
    float cy = scale * (viewport.y / 2.0);

    float dx = mod(point.x - cx, (r + padding) * 2.0) - r - padding;
    float dy = mod(point.y - cy, (r + padding) * 2.0) - r - padding;

    float distSq = dx * dx + dy * dy;

    if(distSq < (r * r)) {
      float dist = sqrt(distSq);
      float n = 1.0 - dist / r;

      if(n > softness) return insideBrightness;

      float d = smoothstep(softness, 0.0, n);
      return mix(insideBrightness, outsideBrightness, d);
    } else {
      return outsideBrightness;
    }
  `},_u={glsl:`
void FAST32_hash_3D( 	vec3 gridcell,
                        out vec4 lowz_hash_0,
                        out vec4 lowz_hash_1,
                        out vec4 lowz_hash_2,
                        out vec4 highz_hash_0,
                        out vec4 highz_hash_1,
                        out vec4 highz_hash_2	)		//	generates 3 random numbers for each of the 8 cell corners
{
    //    gridcell is assumed to be an integer coordinate

    //	TODO: 	these constants need tweaked to find the best possible noise.
    //			probably requires some kind of brute force computational searching or something....
    const vec2 OFFSET = vec2( 50.0, 161.0 );
    const float DOMAIN = 69.0;
    const vec3 SOMELARGEFLOATS = vec3( 635.298681, 682.357502, 668.926525 );
    const vec3 ZINC = vec3( 48.500388, 65.294118, 63.934599 );

    //	truncate the domain
    gridcell.xyz = gridcell.xyz - floor(gridcell.xyz * ( 1.0 / DOMAIN )) * DOMAIN;
    vec3 gridcell_inc1 = step( gridcell, vec3( DOMAIN - 1.5 ) ) * ( gridcell + 1.0 );

    //	calculate the noise
    vec4 P = vec4( gridcell.xy, gridcell_inc1.xy ) + OFFSET.xyxy;
    P *= P;
    P = P.xzxz * P.yyww;
    vec3 lowz_mod = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell.zzz * ZINC.xyz ) );
    vec3 highz_mod = vec3( 1.0 / ( SOMELARGEFLOATS.xyz + gridcell_inc1.zzz * ZINC.xyz ) );
    lowz_hash_0 = fract( P * lowz_mod.xxxx );
    highz_hash_0 = fract( P * highz_mod.xxxx );
    lowz_hash_1 = fract( P * lowz_mod.yyyy );
    highz_hash_1 = fract( P * highz_mod.yyyy );
    lowz_hash_2 = fract( P * lowz_mod.zzzz );
    highz_hash_2 = fract( P * highz_mod.zzzz );
}

  //	convert a 0.0->1.0 sample to a -1.0->1.0 sample weighted towards the extremes
vec4 Cellular_weight_samples( vec4 samples )
{
    samples = samples * 2.0 - 1.0;
    //return (1.0 - samples * samples) * sign(samples);	// square
    return (samples * samples * samples) - sign(samples);	// cubic (even more variance)
}

//
//	Cellular Noise 3D
//	Based off Stefan Gustavson's work at http://www.itn.liu.se/~stegu/GLSL-cellular
//	http://briansharpe.files.wordpress.com/2011/12/cellularsample.jpg
//
//	Speed up by using 2x2x2 search window instead of 3x3x3
//	produces range of 0.0->1.0
//
float fastVoronoi3d(vec3 P)
{
    //	establish our grid cell and unit position
    vec3 Pi = floor(P);
    vec3 Pf = P - Pi;

    //	calculate the hash.
    //	( various hashing methods listed in order of speed )
    vec4 hash_x0, hash_y0, hash_z0, hash_x1, hash_y1, hash_z1;
    FAST32_hash_3D( Pi, hash_x0, hash_y0, hash_z0, hash_x1, hash_y1, hash_z1 );
    //SGPP_hash_3D( Pi, hash_x0, hash_y0, hash_z0, hash_x1, hash_y1, hash_z1 );

    //	generate the 8 random points
#if 1
    //	restrict the random point offset to eliminate artifacts
    //	we'll improve the variance of the noise by pushing the points to the extremes of the jitter window
    const float JITTER_WINDOW = 0.166666666;	// 0.166666666 will guarentee no artifacts. It is the intersection on x of graphs f(x)=( (0.5 + (0.5-x))^2 + 2*((0.5-x)^2) ) and f(x)=( 2 * (( 0.5 + x )^2) + x * x )
    hash_x0 = Cellular_weight_samples( hash_x0 ) * JITTER_WINDOW + vec4(0.0, 1.0, 0.0, 1.0);
    hash_y0 = Cellular_weight_samples( hash_y0 ) * JITTER_WINDOW + vec4(0.0, 0.0, 1.0, 1.0);
    hash_x1 = Cellular_weight_samples( hash_x1 ) * JITTER_WINDOW + vec4(0.0, 1.0, 0.0, 1.0);
    hash_y1 = Cellular_weight_samples( hash_y1 ) * JITTER_WINDOW + vec4(0.0, 0.0, 1.0, 1.0);
    hash_z0 = Cellular_weight_samples( hash_z0 ) * JITTER_WINDOW + vec4(0.0, 0.0, 0.0, 0.0);
    hash_z1 = Cellular_weight_samples( hash_z1 ) * JITTER_WINDOW + vec4(1.0, 1.0, 1.0, 1.0);
#else
    //	non-weighted jitter window.  jitter window of 0.4 will give results similar to Stefans original implementation
    //	nicer looking, faster, but has minor artifacts.  ( discontinuities in signal )
    const float JITTER_WINDOW = 0.4;
    hash_x0 = hash_x0 * JITTER_WINDOW * 2.0 + vec4(-JITTER_WINDOW, 1.0-JITTER_WINDOW, -JITTER_WINDOW, 1.0-JITTER_WINDOW);
    hash_y0 = hash_y0 * JITTER_WINDOW * 2.0 + vec4(-JITTER_WINDOW, -JITTER_WINDOW, 1.0-JITTER_WINDOW, 1.0-JITTER_WINDOW);
    hash_x1 = hash_x1 * JITTER_WINDOW * 2.0 + vec4(-JITTER_WINDOW, 1.0-JITTER_WINDOW, -JITTER_WINDOW, 1.0-JITTER_WINDOW);
    hash_y1 = hash_y1 * JITTER_WINDOW * 2.0 + vec4(-JITTER_WINDOW, -JITTER_WINDOW, 1.0-JITTER_WINDOW, 1.0-JITTER_WINDOW);
    hash_z0 = hash_z0 * JITTER_WINDOW * 2.0 + vec4(-JITTER_WINDOW, -JITTER_WINDOW, -JITTER_WINDOW, -JITTER_WINDOW);
    hash_z1 = hash_z1 * JITTER_WINDOW * 2.0 + vec4(1.0-JITTER_WINDOW, 1.0-JITTER_WINDOW, 1.0-JITTER_WINDOW, 1.0-JITTER_WINDOW);
#endif

    //	return the closest squared distance
    vec4 dx1 = Pf.xxxx - hash_x0;
    vec4 dy1 = Pf.yyyy - hash_y0;
    vec4 dz1 = Pf.zzzz - hash_z0;
    vec4 dx2 = Pf.xxxx - hash_x1;
    vec4 dy2 = Pf.yyyy - hash_y1;
    vec4 dz2 = Pf.zzzz - hash_z1;
    vec4 d1 = dx1 * dx1 + dy1 * dy1 + dz1 * dz1;
    vec4 d2 = dx2 * dx2 + dy2 * dy2 + dz2 * dz2;
    d1 = min(d1, d2);
    d1.xy = min(d1.xy, d1.wz);
    return 2.0 * min(d1.x, d1.y) * ( 9.0 / 12.0 );	//	scale return value from 0.0->1.333333 to 0.0->1.0  	(2/3)^2 * 3  == (12/9) == 1.333333
}
    
  `,functionSignatures:{fastVoronoi3d:{parameters:[["vec3","P"]],returnType:"float"}}},xu={glsl:ke`
    //	Simplex 3D Noise 
    //	by Ian McEwan, Ashima Arts
    //
    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
    vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

    float simplex3d(vec3 v){ 
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      //  x0 = x0 - 0. + 0.0 * C 
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    // Permutations
      i = mod(i, 289.0 ); 
      vec4 p = permute( permute( permute( 
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients
    // ( N*N points uniformly over a square, mapped onto an octahedron.)
      float n_ = 1.0/7.0; // N=7
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

    // Mix final noise value
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      float n = 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                    dot(p2,x2), dot(p3,x3) ) );

      n = ( n + 1.0 ) / 2.0;
      return clamp( n, 0.0, 1.0 );
    }
  `,functionSignatures:{simplex3d:{parameters:[["vec3","v"]],returnType:"float"}}},df=5,pf=()=>({point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},frequency:{kind:"dynamic",type:"float",value:1,min:0,max:10},amplitude:{kind:"dynamic",type:"float",value:1,min:0,max:10},persistance:{kind:"dynamic",type:"float",value:.5,min:0,max:1},lacunarity:{kind:"dynamic",type:"float",value:2,min:0,max:10},octaves:{kind:"static",type:"int",value:3,min:1,max:5,restricted:!0},exponent:{kind:"dynamic",type:"float",value:1,min:.01,max:10},ridge:{kind:"dynamic",type:"float",value:1,min:.001,max:1,restricted:!0},normalize:{kind:"static",type:"bool",value:!0}}),mf=(r,e)=>ke`
    float n = 0.0;
    float f = frequency;
    float a = amplitude;
    float divider = 0.0;

    for(int i = 0; i < min(${Math.floor(e)}, octaves); i++) {
      vec3 p = point * f;
      float on = pow(${r}(p), exponent);

      if(on > ridge) on = ridge - (on - ridge);
      on /= ridge;

      n += a * on;

      divider += a;

      a *= persistance;
      f *= lacunarity;
    }

    if(normalize && divider != 0.0) { 
      n /= divider; 
    }

    return amplitude * n;
  `,bu={name:"simplex",returnType:"float",group:"generator",imports:[xu],fields:pf(),glsl:mf(Object.keys(xu.functionSignatures)[0],df)},wu={name:"voronoi",returnType:"float",group:"generator",imports:[_u],fields:pf(),glsl:mf(Object.keys(_u.functionSignatures)[0],df)},Mu={name:"rect",returnType:"float",group:"generator",imports:[jo],fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},width:{kind:"dynamic",type:"float",value:300,min:0,max:500},height:{kind:"dynamic",type:"float",value:300,min:0,max:500},radius:{kind:"dynamic",type:"float",value:.3,min:0,max:1},x:{kind:"dynamic",type:"float",value:0,min:-1e3,max:1e3},y:{kind:"dynamic",type:"float",value:0,min:-1e3,max:1e3},outsideBrightness:{kind:"dynamic",type:"float",value:0,min:0,max:1},insideBrightness:{kind:"dynamic",type:"float",value:1,min:0,max:1},softness:{kind:"dynamic",type:"float",value:0,min:0,max:1}},glsl:ke`
    float cx = scale * (scaleByViewportSize(x) + viewport.x / 2.0);
    float cy = scale * (scaleByViewportSize(y) + viewport.y / 2.0);

    float w = scaleByViewportSize(width * scale);
    float h = scaleByViewportSize(height * scale);

    vec2 pos = vec2(cx, cy);
    vec2 size = vec2(w, h);

    float d = length(max(abs(point.xy - pos) - size, 0.0)) - radius;
    d = smoothstep(0.0, 1.0, pow(clamp(d, 0.0, 1.0), max(softness, 0.0001)));

    return mix(insideBrightness, outsideBrightness, d);
  `},Su={name:"static",returnType:"float",group:"generator",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},min:{kind:"dynamic",type:"float",value:0,min:0,max:1},max:{kind:"dynamic",type:"float",value:1,min:0,max:1}},glsl:ke`
    float s = fract(sin(dot(point.xy, vec2(12.9898 + point.z, 78.233))) * 43758.5453);
    return s * (max - min) + min;
  `},Tu={name:"time",returnType:"float",group:"generator",fields:{speed:{kind:"dynamic",type:"float",value:1},time:{kind:"static",type:"float",value:1,internal:!0}},glsl:ke`
    return time * speed;
  `},Eu={name:"wave",returnType:"float",group:"generator",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},frequency:{kind:"dynamic",type:"float",value:1,min:0,max:100},xAmount:{kind:"dynamic",type:"float",value:1,min:-1,max:1},yAmount:{kind:"dynamic",type:"float",value:0,min:-1,max:1},zAmount:{kind:"dynamic",type:"float",value:0,min:-1,max:1},min:{kind:"dynamic",type:"float",value:0,min:-1,max:1},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1},power:{kind:"dynamic",type:"float",value:1,min:.01,max:10}},glsl:`
    if(xAmount == 0.0 && yAmount == 0.0) return 0.0;

    float x = point.x * xAmount; 
    float y = point.y * yAmount;
    float s = frequency * (x + y) / (abs(xAmount) + abs(yAmount));

    float v = sin(s);
    v = (v + 1.0) / 2.0;
    v = pow(v, power);

    return (max - min) * v + min;
  `},Au={name:"feedback",returnType:"vec3",group:"input",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},tFeedback:{kind:"static",type:"sampler2D",value:void 0,hidden:!0}},glsl:ke`
    return texture2D(tFeedback, point.xy / (viewport * scale)).rgb;
  `},Cu={name:"image",returnType:"vec3",group:"input",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},source:{kind:"static",type:"sampler2D",value:void 0},scaleX:{kind:"dynamic",type:"float",min:-1,value:1,max:1},scaleY:{kind:"dynamic",type:"float",min:-1,value:1,max:1},translateX:{kind:"dynamic",type:"float",min:-2,value:0,max:2},translateY:{kind:"dynamic",type:"float",min:-2,value:0,max:2}},glsl:ke`
    vec2 samplePoint = (point.xy + vec2(translateX, translateY)) * vec2(scaleX, scaleY);
    return texture2D(source, samplePoint).rgb;
  `},Ru={name:"combine",returnType:"float",group:"math",fields:{operation:{kind:"choice",type:"int",value:0,choices:{add:0,mult:1,pow:2,avg:3,mod:4}},value1:{kind:"dynamic",type:"float",value:0},value2:{kind:"dynamic",type:"float",value:0}},glsl:ke`
    if(operation == 0) {
      return value1 + value2;
    } else if(operation == 1) {
      return value1 * value2;
    } else if(operation == 2) {
      return pow(value1, value2);
    } else if(operation == 3) {
      return (value1 + value2) / 2.0;
    } else if(operation == 4) {
      return mod(value1, value2);
    }
  `},Lu={name:"clamp",returnType:"float",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0},min:{kind:"dynamic",type:"float",value:0,min:-1,max:1},max:{kind:"dynamic",type:"float",value:1,min:-1,max:1}},glsl:ke`
    return clamp(value, min, max);
  `},ku={name:"remap",returnType:"float",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0},add:{kind:"dynamic",type:"float",value:0,min:-10,max:10},mult:{kind:"dynamic",type:"float",value:1,min:-10,max:10}},glsl:ke`
    return mult * value + add;
  `},Pu={name:"mix",returnType:"float",group:"math",fields:{value1:{kind:"dynamic",type:"float",value:0},value2:{kind:"dynamic",type:"float",value:0},amount:{kind:"dynamic",type:"float",value:.5,min:0,max:1}},glsl:ke`
    return mix(value1, value2, amount);
  `},Iu={name:"quantize",returnType:"float",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0},steps:{kind:"dynamic",type:"int",value:2,min:1,max:10}},glsl:ke`
    return round(value * float(steps)) / float(steps);
  `},Du={name:"floatToInt",returnType:"int",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0}},glsl:ke`
    return int(value);
  `},zu={name:"heightmap",returnType:"float",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0},frequency:{kind:"dynamic",type:"float",value:2,min:1e-4,max:10},thickness:{kind:"dynamic",type:"float",value:.01,min:1e-4,max:1},lineValue:{kind:"dynamic",type:"float",value:1,min:0,max:1},bodyValue:{kind:"dynamic",type:"float",value:0,min:0,max:1}},glsl:ke`
    // TODO: add threshold! let this control thickness, and nothing below!
    float d = 1.0 / frequency;
    float t = d * thickness;
    float offset = abs(d - mod(value, d));
    if(offset <= t) {
      return lineValue;
    }

    return bodyValue;
  `},Nu={name:"sin",returnType:"float",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0},multiplier:{kind:"dynamic",type:"float",value:1,min:-10,max:10}},glsl:ke`
    return sin(value) * multiplier;
  `},Fu={name:"cos",returnType:"float",group:"math",fields:{value:{kind:"dynamic",type:"float",value:0},multiplier:{kind:"dynamic",type:"float",value:1,min:-10,max:10}},glsl:ke`
    return cos(value) * multiplier;
  `},gb="/assets/LDR_RGBA_7-3f4d9c5b.png",yb=(r,e)=>{const t=new sf().load(r,e);return t.wrapS=Dr,t.wrapT=Dr,t.minFilter=Ct,t.magFilter=Ct,t},vb=yb(gb),_b=new J(128,128),Bu={name:"root",displayName:"output",returnType:"vec3",group:"system",fields:{point:{kind:"static",type:"vec3",value:new M,internal:!0},color:{kind:"dynamic",type:"vec3",value:new M,inputLocked:!0},dithering:{kind:"dynamic",type:"float",value:0},scale:{kind:"static",type:"float",value:.005,min:1e-5,max:.1,excludeFromFunction:!0},speedX:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0},speedY:{kind:"static",type:"float",value:0,min:-1,max:1,excludeFromFunction:!0},speedZ:{kind:"static",type:"float",value:.1,min:-1,max:1,excludeFromFunction:!0},ditheringTextureDimensions:{kind:"static",type:"vec2",value:_b,hidden:!0},tDithering:{kind:"static",type:"sampler2D",value:vb,hidden:!0}},glsl:ke`
    vec2 ditheringCoord = gl_FragCoord.xy / ditheringTextureDimensions + vec2(fract(time * 13.41), fract(time * 3.451));
    vec3 ditheringValue = dithering * texture(tDithering, ditheringCoord).rgb - dithering / 2.0;
    return color + ditheringValue;
  `},Ou={name:"displace",returnType:"vec3",group:"warp",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},x:{kind:"dynamic",type:"float",value:0,min:-5,max:5},y:{kind:"dynamic",type:"float",value:0,min:-5,max:5},z:{kind:"dynamic",type:"float",value:0,min:-5,max:5},amount:{kind:"dynamic",type:"float",value:1}},glsl:ke`
    return point + vec3(x, y, z) * amount;
  `},Uu={name:"polarDisplace",returnType:"vec3",group:"warp",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},angle1:{kind:"dynamic",type:"float",value:0,min:-Math.PI,max:Math.PI},angle2:{kind:"dynamic",type:"float",value:0,min:-Math.PI,max:Math.PI},radius:{kind:"dynamic",type:"float",value:1,min:-5,max:5}},glsl:ke`
    float dx = radius * cos(angle1) * sin(angle2);
    float dy = radius * sin(angle1) * cos(angle2);
    float dz = radius * cos(angle2);
    return point + vec3(dx, dy, dz);
  `},Vu={name:"perspective",returnType:"vec3",group:"warp",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},pointOffset:{kind:"static",type:"vec3",value:new M,internal:!0},horizonDistortion:{kind:"dynamic",type:"float",value:0,min:-1,max:1},depthDistortion:{kind:"dynamic",type:"float",value:0,min:-1,max:1}},glsl:ke`
    float width = viewport.x;
    float height = viewport.y;

    float cX = 0.5 * width * scale;

    float xMultiplier = mix(1.0, point.y - pointOffset.y, horizonDistortion);
    float zOffset = mix(1.0, point.y - pointOffset.y, depthDistortion);

    return (point - vec3(cX + pointOffset.x, 0.0, 0.0)) * vec3(xMultiplier, 1.0, 1.0) + vec3(cX + pointOffset.x, 0.0, zOffset);
  `},Hu={name:"pixelate",returnType:"vec3",group:"warp",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},stepsX:{kind:"dynamic",type:"int",value:10,min:1,max:20},stepsY:{kind:"dynamic",type:"int",value:10,min:1,max:20},stepsZ:{kind:"dynamic",type:"int",value:1e3,min:1,max:1e3}},glsl:ke`
    float x = floor(point.x * float(stepsX)) / float(stepsX);
    float y = floor(point.y * float(stepsY)) / float(stepsY);
    float z = floor(point.z * float(stepsZ)) / float(stepsZ);

    return vec3(x, y, z);
  `},Gu={name:"scale",returnType:"vec3",group:"warp",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},x:{kind:"dynamic",type:"float",value:1,min:-5,max:5},y:{kind:"dynamic",type:"float",value:1,min:-5,max:5},z:{kind:"dynamic",type:"float",value:1,min:-5,max:5}},glsl:ke`
    return point * vec3(x, y, z);
  `},Wu={name:"vortex",returnType:"vec3",group:"warp",fields:{point:{kind:"dynamic",type:"vec3",value:new M,internalOptional:!0},scale:{kind:"static",type:"float",value:1,internal:!0},amount:{kind:"dynamic",type:"float",value:1,min:-Math.PI,max:Math.PI},multiplier:{kind:"dynamic",type:"float",value:0,min:-2,max:2},radius:{kind:"dynamic",type:"float",value:1e3,min:0,max:2e3},falloff:{kind:"dynamic",type:"float",value:1,min:.001,max:10},centerX:{kind:"dynamic",type:"float",value:0,min:-1e3,max:1e3},centerY:{kind:"dynamic",type:"float",value:0,min:-1e3,max:1e3}},glsl:ke`
    float cx = scale * (centerX + viewport.x / 2.0);
    float cy = scale * (centerY + viewport.y / 2.0);
    float r = scale * radius;

    vec3 v = point - vec3(cx, cy, point.z);
    float dist = min(sqrt(dot(v, v)), r);

    float f = pow(max(1.0 - dist / r, 0.0), falloff);

    float strength = (dist * multiplier + amount) * f;

    point -= vec3(cx, cy, 0.0);
    point = vec3(
      point.x * cos(strength) - point.y * sin(strength),
      point.y * cos(strength) + point.x * sin(strength),
      point.z
    );
    point += vec3(cx, cy, 0.0);

    return point;
  `},aa={[Bu.name]:Bu,[bu.name]:bu,[wu.name]:wu,[Eu.name]:Eu,[yu.name]:yu,[vu.name]:vu,[gu.name]:gu,[Su.name]:Su,[Mu.name]:Mu,[Tu.name]:Tu,[Cu.name]:Cu,[Au.name]:Au,[Ru.name]:Ru,[Lu.name]:Lu,[ku.name]:ku,[Pu.name]:Pu,[Iu.name]:Iu,[Nu.name]:Nu,[Fu.name]:Fu,[Du.name]:Du,[zu.name]:zu,[cu.name]:cu,[uu.name]:uu,[hu.name]:hu,[fu.name]:fu,[du.name]:du,[pu.name]:pu,[mu.name]:mu,[Ou.name]:Ou,[Uu.name]:Uu,[Gu.name]:Gu,[Wu.name]:Wu,[Vu.name]:Vu,[Hu.name]:Hu},xb=r=>{const e=aa[r];return{parameters:Object.entries(e.fields).filter(n=>!n[1].excludeFromFunction).map(([n,i])=>[i.type,n]),returnType:e.returnType,body:e.glsl}},Jo=r=>r.charAt(0).toUpperCase()+r.slice(1),$u=(r,e=!1)=>{const t=r.replace(/([A-Z])/g," $1"),n=t.charAt(0).toUpperCase()+t.slice(1);return e?n.toLocaleLowerCase():n},bb=(r,e)=>{r.includes(e)||r.push(e)},$s=16,go=15,gf=10,yo=1,wb=50,Mb=200,Qa=$s,pr=(r,e,t=`
`)=>r.map(e).join(t),bn=r=>Number.isInteger(r)?r+".0":r+"",Sb={float:r=>r?""+bn(r):"0.0",int:r=>r?""+Math.floor(r):"0",vec2:r=>r?`vec2(${bn(r.x)}, ${bn(r.y)})`:"vec2()",vec3:r=>r?`vec3(${bn(r.x)}, ${bn(r.y)}, ${bn(r.z)})`:"vec3()",vec4:r=>r?`vec4(${bn(r.x)}, ${bn(r.y)}, ${bn(r.z)}, ${bn(r.w)})`:"vec4()",bool:r=>r?"1":"0",sampler2D:()=>{throw new Error("Cannot convert texture to value")}},Tb=r=>Sb[r.type](r.value),qu=r=>r?pr(r,e=>`${e.glsl}
`):"",Xu=r=>r?pr(Object.entries(r),([e,{type:t,value:n}])=>`const ${t} ${e} = ${Tb({type:t,value:n})};`):"",Eb=r=>r?pr(Object.entries(r),([e,{type:t,ignore:n}])=>n?"":`uniform ${t} ${e};`):"",Ab=r=>r?pr(Object.entries(r),([e,{type:t}])=>`varying ${t} ${e};`):"",Cb=(r,e)=>ke`
    ${e.returnType} ${r}( 
      ${pr(e.parameters,t=>`${t[0]} ${t[1]}`,", ")}
    ) {
      ${e.body}
    }\n`,ju=r=>r?pr(Object.entries(r),([e,t])=>Cb(e,t),`

`):"",yf=r=>{const e=typeof r=="object"?r.type:r;return`get${Jo(e)}`},Zn=(r,e)=>`u${Jo(e)}_${r.id}`,vo=r=>`r${Jo(r.type)}_${r.id}`,$i=(r,e,t)=>{if(!(!t||!t.uniforms||!t.uniforms[r]))return typeof e<"u"&&(t.uniforms[r].value=e),t.uniforms[r].value},Rb=r=>typeof r=="object"&&typeof r.type=="string"&&typeof r.fields=="object",qs=r=>Rb(r)&&Array.prototype.includes.call(Ib,r.type),vf=(r,e=new Set,t=new Set)=>{if(!e.has(r)){e.add(r),t.add(r);const n=Object.values(r.fields).filter(i=>qs(i.value)).map(i=>i.value);for(let i=0;i<n.length;i++){const s=n[i];if(!e.has(s)&&vf(s,e,t)||t.has(s))return!0}}return t.delete(r),!1},Lb=r=>{const e=new Set,t=new Set;for(let n=0;n<r.nodes.length;n++){const i=r.nodes[n];if(vf(i,e,t))return!0}return!1},kb=r=>Lb(r),Zo=(r,e)=>{Object.values(r.fields).forEach(t=>{qs(t.value)&&Zo(t.value,e)}),e(r)},Pb=r=>Math.max(go*2+(gf+$s)*(r+yo),wb),Ju={count:0,set(r){this.count=r},next(){return this.count++},current(){return this.count}},Ib=Object.values(aa).map(r=>r.name),Db=(r,e=0,t=0)=>{const n=r.name,i=r.fields,s=r.returnType,a=Ju.next();let o=$u(r.displayName??r.name).length+2,l=r.returnType.length;Object.keys(i).forEach(p=>{const y=i[p];y.internal||y.hidden||(o=Math.max($u(p).length,o),l=Math.max(i[p].type.length,l))});const c=o+l+2,u=Math.max(c*(.6*$s)+1.2*go,Mb),h=Object.values(i).filter(p=>!p.internal&&!p.hidden).length,f=Pb(h);let d=yo;const g=Object.entries(i).reduce((p,[y,v])=>{const E=d*f/(h+yo);let T=0;!v.internal&&!v.hidden&&(T=1.25*go+Math.max((gf+$s)*d,E),d++);const b={...v,anchor:{size:Qa,x:0,y:T-Qa/4,type:"field"}};return p[y]=b,p},{}),m=n!=="root"?{size:Qa,x:u,y:f/2,type:"node"}:void 0;return{type:n,name:r.displayName,x:e,y:t,width:u,height:f,anchor:m,layer:a,fields:g,returnType:s,id:""+Ju.current()}},zb=r=>(e=0,t=0)=>Db(r,e,t),Nb=Object.values(aa).map(r=>zb(r)),Fb=Nb.reduce((r,e)=>(r[e().type]=e,r),{}),Bb=(r,e,t)=>new Promise((n,i)=>{const s=new Image;s.onload=()=>{const a=new Pt;a.image=s,a.needsUpdate=!0,a.wrapS=Nn,a.wrapT=Nn,a.name=e,t&&(t.value=a),n(a)},s.onerror=()=>{i(`${e} is not a valid image`)},s.src=r}),Ob=(r,e,t,n)=>{const i=Ab(r),s=Eb(e),a=ke`
    ${i}
    ${s}

    ${qu(t.imports)}
    ${Xu(n.constants)}
    ${ju(t.functions)}

    void main() {
      ${t.main}
    }
  `,o=ke`
    ${i}
    ${s}

    ${qu(n.imports)}
    ${Xu(n.constants)}
    ${ju(n.functions)}

    void main() {
      ${n.main}
    }
  `;return{uniforms:e,vertexShader:a,fragmentShader:o}},Ub=()=>[],Vb=()=>({vUv:{type:"vec2"}}),Hb=()=>({viewport:{value:new J(1,1),type:"vec2"},time:{value:0,type:"float"}}),Gb=()=>{const r=ke`
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  `;return{imports:[],main:r}},Wb=(r,e)=>{const t=[],n=[];return Object.entries(r.fields).forEach(i=>{const[s,a]=i,o=a.value;if(a.internal&&!a.excludeFromFunction)t.push(s);else if(a.internalOptional&&!qs(o))t.push(s);else if(qs(o)&&!a.excludeFromFunction)t.push(vo(o));else{const l=Zn(r,s);e[l]={type:a.type,value:a.value},n.push(l),a.excludeFromFunction||t.push(l)}}),{args:t,addedUniforms:n}},$b=(r,e,t,n,i="vec4")=>{const s=Zn(r.rootNode,"scale"),a=Zn(r.rootNode,"speedX"),o=Zn(r.rootNode,"speedY"),l=Zn(r.rootNode,"speedZ");let c=ke`
    float scale = ${s};
    vec3 pointOffset = vec3(${a}, ${o}, ${l}) * time;
    point += pointOffset;
  `;const u=new Set,h=[];Zo(r.rootNode,m=>{if(u.has(m))return;u.add(m);const{args:p,addedUniforms:y}=Wb(m,n);m.type==="feedback"&&y.forEach(T=>{T.startsWith("uTFeedback")&&h.push(T)});const v=yf(m),E=vo(m);c+=ke`\n
        ${t[v].returnType} ${E} = ${v}(${p.join(", ")});
      `});const f=vo(r.rootNode);return i==="vec4"?c+=ke`\n
      vec4 result = vec4(${f}, 1.0);
    `:c+=ke`\n
      float result = ${f}.x;
    `,{shaderData:{imports:e,functions:t,main:c},additionalData:{feedbackTextureUniforms:h}}},qb=(r,e,t,n)=>{const{shaderData:i,additionalData:s}=$b(r,e,t,n),a=Zn(r.rootNode,"scale");return i.main=ke`
    vec3 point = vec3(gl_FragCoord.xy * ${a}, 0.0);
    ${i.main}
    gl_FragColor = result;
  `,{shaderData:i,additionalData:s}},Xb=r=>{if(kb(r))throw new Error("Invalid program");const e=Ub(),t=Hb(),n=Vb(),i={},s=new Set;return Zo(r.rootNode,a=>{s.add(a.type)}),s.forEach(a=>{var c;const o=yf(a);i[o]=xb(a);const l=aa[a];l.imports&&l.imports.length&&((c=l.imports)==null||c.forEach(u=>bb(e,u)))}),{imports:e,uniforms:t,attributes:n,functions:i}},jb=r=>{const{imports:e,attributes:t,functions:n,uniforms:i}=Xb(r),s=Gb(),{shaderData:a,additionalData:o}=qb(r,e,n,i);return{shader:Ob(t,i,s,a),additionalData:o}},Jb=(r,e=!0)=>{const{shader:t,additionalData:n}=jb(r);return new tn(t)},Zb=async r=>{const e=new Map;let t;if(typeof r=="string")try{t=JSON.parse(r)}catch{return}else t=r;if(!t.rootId||!t.nodes)return;const n=t.nodes;try{for(const s of Object.values(n)){for(const o of Object.values(s.fields))if(o.value&&o.value.nodeId){const l=o.value.nodeId,c=n[l];if(!c)throw new Error(l);o.value=c}else if(s.type==="image"&&s.fields.source.value){const l=s.fields.source;if(l.value.userData){const{name:c,data:u}=l.value.userData;c&&u&&await Bb(u,c,l)}}e.has(s.type)||e.set(s.type,Fb[s.type](0,0));const a=e.get(s.type);s.fields={...a.fields,...s.fields}}}catch(s){console.error(s);return}return{openConnection:void 0,position:t.position,zoom:t.zoom,rootNode:n[t.rootId],nodes:Object.values(n)}},Yb=r=>{const e=r.getSize(new J),t=new Xt(e.x,e.y,{minFilter:zt,magFilter:zt,wrapS:Nn,wrapT:Nn}),n=new Xt(e.x,e.y,{minFilter:zt,magFilter:zt,wrapS:Nn,wrapT:Nn}),i=new Hs;i.background=new xe("black");const s=new ta(-.5,.5,.5,-.5,0,1e3),a=new qt(new ea(1,1),new Gr({color:"black"}));i.add(a);const o=new Hs,l=(d,g)=>{d.forEach(m=>{const p=a.material;p.uniforms&&p.uniforms[m]&&(p.uniforms[m].value=g.texture)})},c={currentRenderTarget:t,previousRenderTarget:n};return{render:d=>{if(d.length){l(d,c.previousRenderTarget),r.setRenderTarget(c.currentRenderTarget),r.render(i,s),r.setRenderTarget(null),r.clear(),o.background=c.previousRenderTarget.texture,r.render(o,s);const g=c.currentRenderTarget;c.currentRenderTarget=c.previousRenderTarget,c.previousRenderTarget=g}else r.setRenderTarget(null),r.clear(),r.render(i,s)},updateMaterial:d=>{a.material=d},setSize:(d,g,m=1)=>{r.setPixelRatio(m),r.setSize(d,g),t.setSize(d,g),n.setSize(d,g)}}};class Kb{constructor(e,t){this.canvas=e,this.postRenderCallback=t,this.additionalData={},this.captureNext=!1,this.initialScale=1,this.captureFrameResolutionMultiplier=2,this.timeScale=1,this.adaptProgramScale=()=>{if(!this.program)return;const n=Zn(this.program.rootNode,"scale"),i=this.program.rootNode.fields.scale.value;this.initialScale=i,$i(n,i/this.captureFrameResolutionMultiplier,this.shaderMaterial)},this.restoreProgramScale=()=>{if(!this.program)return;const n=Zn(this.program.rootNode,"scale");$i(n,this.initialScale,this.shaderMaterial)},this.running=!1,this.time=0,this.frame=0,this.animationFrameId=-1,this.renderer=new it({canvas:e,antialias:!0,alpha:!1}),this.renderer.setClearColor(new xe("black"),0),this.renderer.setPixelRatio(window.devicePixelRatio),this.feedbackPipeline=Yb(this.renderer),this.resize()}setShaderMaterial(e,t,n){var i,s;e?(this.shaderMaterial=e,this.program=t,this.time=((s=(i=this.shaderMaterial.uniforms)==null?void 0:i.time)==null?void 0:s.value)??0,this.feedbackPipeline.updateMaterial(e),this.resize()):(this.shaderMaterial=void 0,this.program=void 0),this.additionalData=n??{}}render(){this.feedbackPipeline.render(this.additionalData.feedbackTextureUniforms??[])}beforeRender(){var e;this.captureNext&&this.dataCallback&&this.captureFrameResolutionMultiplier!==1&&!((e=this.additionalData.feedbackTextureUniforms)!=null&&e.length)&&(this.canvas.width*=this.captureFrameResolutionMultiplier,this.canvas.height*=this.captureFrameResolutionMultiplier,this.resize(this.canvas.width,this.canvas.height),this.adaptProgramScale())}afterRender(){var e,t;this.captureNext&&this.dataCallback&&(this.render(),this.dataCallback(this.canvas.toDataURL("image/url")),this.captureNext=!1,this.captureFrameResolutionMultiplier!==1&&!((e=this.additionalData.feedbackTextureUniforms)!=null&&e.length)&&(this.canvas.width/=this.captureFrameResolutionMultiplier,this.canvas.height/=this.captureFrameResolutionMultiplier,this.resize(this.canvas.width,this.canvas.height),this.restoreProgramScale())),(t=this.postRenderCallback)==null||t.call(this,this)}update(){this.shaderMaterial&&$i("time",this.time,this.shaderMaterial)}start(e){if(this.postRenderCallback=e,this.running)return;this.running=!0;let t;const n=i=>{i/=1e3,typeof t>"u"&&(t=i);const s=i-t;this.time+=s*this.timeScale,t=i,this.animationFrameId=requestAnimationFrame(n),this.beforeRender(),this.render(),this.afterRender(),this.update(),this.frame++};requestAnimationFrame(n)}stop(){cancelAnimationFrame(this.animationFrameId),this.running=!1}resize(e,t){e=e??window.innerWidth,t=t??window.innerHeight;const n=window.devicePixelRatio;this.renderer.setPixelRatio(n),this.feedbackPipeline.setSize(e,t,n),$i("viewport",new J(e,t),this.shaderMaterial)}captureFrame(e){this.captureNext=!0,this.dataCallback=e}setCaptureFrameResolutionMultiplier(e){this.captureFrameResolutionMultiplier=e}getShaderMaterial(){return this.shaderMaterial}setTime(e){this.time=e}getFrame(){return this.frame}setTimeScale(e){this.timeScale=e}}function Qb(r){let e,t,n,i;return{c(){e=be("div"),t=be("canvas"),fe(t,"class","svelte-kr18wb"),fe(e,"class","canvas-container svelte-kr18wb"),fe(e,"style",r[0])},m(s,a){ge(s,e,a),Oe(e,t),n||(i=[tl(r[2].call(null,t)),tl(r[1].call(null,e))],n=!0)},p(s,[a]){a&1&&fe(e,"style",s[0])},i:Tt,o:Tt,d(s){s&&pe(e),n=!1,tr(i)}}}function ew(r,e,t){let{programData:n}=e,{animate:i=!0}=e,{uniformOverrides:s={}}=e,{scale:a=void 0}=e,{style:o=void 0}=e,{active:l=!!i}=e,c,u,h,f,d;const g=v=>{f=v},m=v=>{d=v},p=v=>{t(8,c=new Kb(d)),t(9,u=Jb(v,!1));const E=[];Object.keys(u.uniforms).forEach(T=>{T.startsWith("uTFeedback")&&E.push(T)}),c.setShaderMaterial(u,v,{feedbackTextureUniforms:E}),c.resize(f.clientWidth,f.clientHeight)};let y;return Xs(()=>{Zb(n).then(v=>{if(!v)throw new Error("Program did not compile");p(v),new ResizeObserver(()=>{c==null||c.resize(f.clientWidth,f.clientHeight),i||setTimeout(()=>{c.update(),c.render(),c.render()},0)}).observe(f)})}),Pf(()=>{c==null||c.stop(),h==null||h.unsubscribe()}),r.$$set=v=>{"programData"in v&&t(4,n=v.programData),"animate"in v&&t(5,i=v.animate),"uniformOverrides"in v&&t(6,s=v.uniformOverrides),"scale"in v&&t(7,a=v.scale),"style"in v&&t(0,o=v.style),"active"in v&&t(3,l=v.active)},r.$$.update=()=>{if(r.$$.dirty&32&&t(3,l=!!i),r.$$.dirty&832&&u&&(Object.keys(s).forEach(v=>$i(v,s[v],u)),typeof s.time<"u"&&c.setTime(s.time),typeof s.timeScale<"u"&&c.setTimeScale(s.timeScale)),r.$$.dirty&1664&&typeof a<"u"&&u){const v=Object.keys(u.uniforms).find(E=>E.includes("uScale_"));if(v){typeof y>"u"&&t(10,y=u.uniforms[v].value);const E=typeof a=="number"?a:a(y);$i(v,E,u)}}if(r.$$.dirty&288&&c)if(i)if(typeof i=="number"){const v=c.getFrame();c.start(()=>{c.getFrame()-v>i&&(t(3,l=!1),c.stop())})}else c.start();else c.stop(),c.update(),c.render(),c.render()},[o,g,m,l,n,i,s,a,c,u,y]}class tw extends ht{constructor(e){super(),ut(this,e,ew,Qb,ct,{programData:4,animate:5,uniformOverrides:6,scale:7,style:0,active:3})}}const{window:nw}=Of;function Zu(r,e,t){const n=r.slice();return n[15]=e[t],n[16]=e,n[17]=t,n}function Yu(r){let e,t=r[2][r[0]].metadata.datetime.replace("T"," ")+"",n,i;return{c(){e=be("time"),n=Qt(t),fe(e,"datetime",i=r[2][r[0]].metadata.datetime)},m(s,a){ge(s,e,a),Oe(e,n)},p(s,a){a&5&&t!==(t=s[2][s[0]].metadata.datetime.replace("T"," ")+"")&&cn(n,t),a&5&&i!==(i=s[2][s[0]].metadata.datetime)&&fe(e,"datetime",i)},d(s){s&&pe(e)}}}function iw(r){let e;return{c(){e=be("span"),e.textContent="[Failed loading. Refresh to try again.]",fe(e,"class","message svelte-1yxsbnn")},m(t,n){ge(t,e,n)},d(t){t&&pe(e)}}}function rw(r){let e;return{c(){e=be("span"),e.textContent="[Loading...]",fe(e,"class","message svelte-1yxsbnn")},m(t,n){ge(t,e,n)},d(t){t&&pe(e)}}}function Ku(r,e){let t,n,i,s,a,o,l=e[17],c;i=new vm({props:{entry:e[15],selected:e[0]===e[17]}});const u=()=>e[10](t,l),h=()=>e[10](null,l);return{key:r,first:null,c(){t=be("li"),n=be("a"),Je(i.$$.fragment),a=Ot(),fe(n,"href",s="#"+e[17]),fe(n,"draggable","false"),fe(n,"class","svelte-1yxsbnn"),fe(t,"id",o=""+e[17]),fe(t,"class","offset svelte-1yxsbnn"),this.first=t},m(f,d){ge(f,t,d),Oe(t,n),qe(i,n,null),Oe(t,a),u(),c=!0},p(f,d){e=f;const g={};d&4&&(g.entry=e[15]),d&5&&(g.selected=e[0]===e[17]),i.$set(g),(!c||d&4&&s!==(s="#"+e[17]))&&fe(n,"href",s),(!c||d&4&&o!==(o=""+e[17]))&&fe(t,"id",o),l!==e[17]&&(h(),l=e[17],u())},i(f){c||(Y(i.$$.fragment,f),c=!0)},o(f){te(i.$$.fragment,f),c=!1},d(f){f&&pe(t),Xe(i),h()}}}function sw(r){let e,t,n,i,s,a,o,l,c,u,h,f,d,g,m=[],p=new Map,y,v,E,T,b,A,k,z=r[0]!==-1&&Yu(r);l=new tw({props:{programData:r[5],animate:!0,uniformOverrides:{time:r[1],timeScale:0}}});function ie(C,I){if(I&16&&(f=null),f==null&&(f=!!["idle","pending"].includes(C[4])),f)return rw;if(C[4]==="failed")return iw}let O=ie(r,-1),_=O&&O(r),L=r[2];const G=C=>C[15].metadata.datetime;for(let C=0;C<L.length;C+=1){let I=Zu(r,L,C),N=G(I);p.set(N,m[C]=Ku(N,I))}return{c(){e=be("div"),t=be("aside"),z&&z.c(),n=Ot(),i=be("header"),i.innerHTML='<h1 class="svelte-1yxsbnn">Journal artifacts</h1>',s=Ot(),a=be("main"),o=be("div"),Je(l.$$.fragment),c=Ot(),u=be("span"),u.textContent="***",h=Ot(),_&&_.c(),d=Ot(),g=be("ol");for(let C=0;C<m.length;C+=1)m[C].c();y=Ot(),v=be("span"),v.textContent="***",E=Ot(),T=be("footer"),T.innerHTML=`<span>by:</span>  
    <a href="https://palmdrop.site" target="_blank" rel="noreferrer noopener" draggable="${!1}" class="svelte-1yxsbnn">palmdrop</a> 
    <span>font:</span> 
    <a href="https://velvetyne.fr/fonts/sligoil/" target="_blank" rel="noreferrer noopener" draggable="${!1}" class="svelte-1yxsbnn">Sligoil by Ariel Martín Pérez (Velvetyne Type Foundry)</a>`,fe(t,"class","svelte-1yxsbnn"),fe(i,"class","svelte-1yxsbnn"),fe(o,"class","render-core svelte-1yxsbnn"),fe(u,"class","continued svelte-1yxsbnn"),fe(g,"class","svelte-1yxsbnn"),fe(v,"class","continued svelte-1yxsbnn"),Rf(a,"--anchorOffset",100*aw+"vh"),fe(a,"class","svelte-1yxsbnn"),fe(T,"class","svelte-1yxsbnn"),fe(e,"class","app svelte-1yxsbnn")},m(C,I){ge(C,e,I),Oe(e,t),z&&z.m(t,null),Oe(e,n),Oe(e,i),Oe(e,s),Oe(e,a),Oe(a,o),qe(l,o,null),Oe(a,c),Oe(a,u),Oe(a,h),_&&_.m(a,null),Oe(a,d),Oe(a,g);for(let N=0;N<m.length;N+=1)m[N].m(g,null);Oe(a,y),Oe(a,v),Oe(e,E),Oe(e,T),b=!0,A||(k=Af(nw,"scroll",r[6]),A=!0)},p(C,[I]){C[0]!==-1?z?z.p(C,I):(z=Yu(C),z.c(),z.m(t,null)):z&&(z.d(1),z=null);const N={};I&2&&(N.uniformOverrides={time:C[1],timeScale:0}),l.$set(N),O!==(O=ie(C,I))&&(_&&_.d(1),_=O&&O(C),_&&(_.c(),_.m(a,d))),I&13&&(L=C[2],ot(),m=Vf(m,I,G,1,C,L,p,g,Uf,Ku,null,Zu),lt())},i(C){if(!b){Y(l.$$.fragment,C);for(let I=0;I<L.length;I+=1)Y(m[I]);b=!0}},o(C){te(l.$$.fragment,C);for(let I=0;I<m.length;I+=1)te(m[I]);b=!1},d(C){C&&pe(e),z&&z.d(),Xe(l),_&&_.d();for(let I=0;I<m.length;I+=1)m[I].d();A=!1,k()}}}const aw=.4,ow=20,lw=2e-8,cw=.07,uw=.001;function hw(r,e,t){let n;const i=Rm;let s=[];const a=Array(s.length);let o=-1;const l=y=>y<0||y>=s.length?0:new Date(s[y].metadata.datetime).getTime()*lw;let c=-1,u=n,h="idle";Xs(()=>{t(4,h="pending"),wm().then(v=>{t(2,s=v.entries),v.timeline,t(4,h="successful")}).then(()=>{const v=Number(location.hash.slice(1));t(0,o=v)}).catch(()=>{t(0,o=s.length-1),s||t(4,h="failed")}).finally(()=>{t(1,c=l(o)),t(9,n=c)});const y=()=>{try{const v=Number(location.hash.slice(1));t(0,o=v)}catch{return}};return window.addEventListener("hashchange",y),()=>{window.removeEventListener("hashchange",y)}});let f=0;const d=ad(()=>{const y=window.pageYOffset,v=y-f>0;for(let E=v?0:a.length-1;v?E<a.length:E>=0;v?E++:E--){const T=a[E];if(Math.abs(y-T.offsetTop)<ow&&o!==E){t(0,o=E);break}}f=y},5),g=(y,v,E)=>y*(1-E)+v*E;let m;function p(y,v){eo[y?"unshift":"push"](()=>{a[v]=y,t(3,a)})}return r.$$.update=()=>{if(r.$$.dirty&1&&t(9,n=l(o)),r.$$.dirty&899&&n!==u&&o!==-1){typeof m=="number"&&cancelAnimationFrame(m);const y=()=>{const v=c;if(t(1,c=g(c,n,cw)),Math.abs(c-v)<uw){cancelAnimationFrame(m);return}t(8,m=requestAnimationFrame(y))};t(8,m=requestAnimationFrame(y)),t(7,u=n)}},[o,c,s,a,h,i,d,u,m,n,p]}class fw extends ht{constructor(e){super(),ut(this,e,hw,sw,ct,{})}}new fw({target:document.getElementById("app")});
