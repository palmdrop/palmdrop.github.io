var hn=Object.defineProperty;var mn=(t,n,o)=>n in t?hn(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o;var yt=(t,n,o)=>mn(t,typeof n!="symbol"?n+"":n,o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function pn(t,n={}){const{onResize:o,maxDpr:a=2,minDpr:r=1}=n,l=t.getContext("2d");if(!l)throw new Error("Unable to acquire a 2D rendering context.");const i={canvas:t,ctx:l,width:0,height:0},c=()=>{const m=t.clientWidth||window.innerWidth,v=t.clientHeight||window.innerHeight;return{width:m,height:v}},u=()=>Math.min(Math.max(window.devicePixelRatio||1,r),a);let f=0;const h=()=>{const m=u(),{width:v,height:b}=c();t.width=Math.floor(v*m),t.height=Math.floor(b*m),i.width=v,i.height=b,f=m,l.setTransform(m,0,0,m,0,0),o==null||o(i)},E=.15,M=250;let _=0;const p=()=>{const{width:m,height:v}=c(),b=u()===f;m===i.width&&v===i.height&&b||m===i.width&&b&&Math.abs(v-i.height)<i.height*E||(clearTimeout(_),_=window.setTimeout(h,M))};return h(),window.addEventListener("resize",p),window.addEventListener("orientationchange",p),window.addEventListener("load",p,{once:!0}),i}function gn(t){let n=0,o=!1,a=0,r=0,l=0;const i=c=>{const u=(c-a)/1e3,f=(c-r)/1e3,h=Math.min(f,1/30);r=c,t({time:u,delta:h,rawDelta:f,frame:l}),l+=1,o&&(n=requestAnimationFrame(i))};return{start(){o||(o=!0,a=performance.now(),r=a,l=0,n=requestAnimationFrame(i))},stop(){o&&(o=!1,cancelAnimationFrame(n))},get running(){return o}}}const Ot=["static","low","medium","high"],ot=t=>Ot.indexOf(t),rn={high:{fpsCap:60,resScale:1,maxPaintPixels:1/0,settleScale:1,sharpen:!0,shadow:!0,tipScale:1,horizonScale:1,simScale:1},medium:{fpsCap:30,resScale:1,maxPaintPixels:3e6,settleScale:2,sharpen:!0,shadow:!0,tipScale:.85,horizonScale:.85,simScale:1.5},low:{fpsCap:30,resScale:1,maxPaintPixels:2e6,settleScale:3,sharpen:!0,shadow:!0,tipScale:.6,horizonScale:.6,simScale:1.5},static:{fpsCap:30,resScale:1,maxPaintPixels:2e6,settleScale:3,sharpen:!0,shadow:!0,tipScale:.6,horizonScale:.6,simScale:1.5}},sn=t=>Ot.includes(t),vn=(t,n)=>ot(t)<=ot(n)?t:n,xn=(t,n)=>({tier:t,...rn[t],...n}),Rt=(t,n,o)=>{t.tier=n,Object.assign(t,rn[n],o)},bn=()=>{var r;if(typeof window>"u")return"high";const t=navigator,n=((r=t.userAgentData)==null?void 0:r.mobile)??(typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches),o=t.deviceMemory!=null&&(t.deviceMemory<=4||t.hardwareConcurrency>0&&t.hardwareConcurrency<=4);let a=ot("high");return n&&(a-=1),o&&(a-=1),Ot[Math.max(a,ot("low"))]},cn="fveld:quality-tier:v3",Tn=()=>{try{const t=localStorage.getItem(cn);return t&&sn(t)?t:null}catch{return null}},wn=t=>{if(t!=="static")try{localStorage.setItem(cn,t)}catch{}},En=1.3,qt=1.1,yn=5,Sn=1,Mn=3,Rn=8,Pn=45,An=60,Un=15,_n=120,Dn=60,kn=30,Fn=(t,n,{ceiling:o,overrides:a,onChange:r})=>{const l=ot(o);let i=-1,c=-1,u=0,f=-1/0,h=!1,E=!1,M=!1;const _=(p,m)=>{const v=t.tier,b=Ot[ot(v)+m];b&&(m===1?f=p:p-f<_n&&(h=!0),Rt(t,b,a),n.reset(),i=-1,c=-1,u=p,E=!1,M=!0,console.info(`[quality] ${v} → ${b} (measured)`),r(v,b))};return{update(p){if(t.tier==="static"||n.count<kn)return;const m=1/t.fpsCap,v=n.p75(),b=p<yn;if(v>m*En){c=-1,i<0&&(i=p);const O=b?Sn:Mn,F=b||p-u>=Rn;p-i>=O&&F&&ot(t.tier)>ot("low")&&_(p,-1);return}i=-1;const B=!M||p-u>=An,G=M?Pn:Un;v<m*qt&&!h&&ot(t.tier)<l&&B?(c<0&&(c=p),p-c>=G&&_(p,1)):v>=m*qt&&(c=-1),!E&&p-u>=Dn&&(E=!0,wn(t.tier))}}},Ln=(t=120,n=.05)=>{const o=new Float64Array(t),a=new Float64Array(t);let r=0,l=0,i=0,c=0;return{record(u){o[l]=u,l=(l+1)%t,r<t&&(r+=1),i=c===0?u:i+n*(u-i),c+=1},get ema(){return i},p75(){return r===0?0:(a.set(o.subarray(0,r)),a.subarray(0,r).sort()[Math.min(r-1,Math.floor(r*.75))]??0)},worst(){let u=0;for(let f=0;f<r;f++){const h=o[f]??0;h>u&&(u=h)}return u},get count(){return c},reset(){r=0,l=0,i=0,c=0}}},st=Math.PI*2,Z=(t,n,o)=>Math.min(Math.max(t,n),o),We=(t,n,o)=>t+(n-t)*o,Kt=(t,n)=>{let o=(n-t)%st;return o>Math.PI?o-=st:o<-Math.PI&&(o+=st),o};function Tt(t=Date.now()){let n=t>>>0;const o=()=>{n|=0,n=n+1831565813|0;let r=Math.imul(n^n>>>15,1|n);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296},a=(r,l)=>r+o()*(l-r);return{next:o,range:a,int:(r,l)=>Math.floor(a(r,l+1)),pick:r=>r[Math.floor(o()*r.length)]}}const In="#1b160f",Jt=1/60,jt=3,Qt=(t,n)=>{for(let o=n.length-1;o>0;o--){const a=t.int(0,o),r=n[o];n[o]=n[a],n[a]=r}return n};function Cn(t,n){var ze,$e,Ke,me,Ce,Ve,Je,it,je,He;const o=typeof location<"u"?new URLSearchParams(location.search):null,a=o==null?void 0:o.get("seed"),r=a!=null&&Number.isFinite(Number(a))?Math.floor(Number(a)):n.seed??Math.floor(Math.random()*2147483647),l=(o==null?void 0:o.has("stats"))??!1,i=Math.floor(Number((o==null?void 0:o.get("frames"))??0))||0;console.info(`[${n.name}] seed: ${r}`);const c=o==null?void 0:o.get("quality"),u=c==="full",f=u?"high":c!=null&&sn(c)?c:null,h=n.quality??{},E=u?{...h.overrides,fpsCap:1/0}:h.overrides,M=f??h.ceiling??"high",_=f??vn(Tn()??h.initial??bn(),M),p=xn(_,E);console.info(`[${n.name}] quality: ${_}`+(u?" (full — pinned, adaptations off)":f?" (pinned)":` (ceiling ${M})`));const m=n.stepsPerFrame??4,v=((ze=n.scale)==null?void 0:ze.reference)??900,b=(($e=n.scale)==null?void 0:$e.min)??.35,B=((Ke=n.scale)==null?void 0:Ke.max)??1,G=((me=n.scale)==null?void 0:me.zoomMax)??1,O=((Ce=n.scale)==null?void 0:Ce.zoomReference)??v,F=(d,S)=>Z(Math.min(d,S)/O,1,G),I=n.continuous??null,X=((Ve=n.layers)==null?void 0:Ve.count)??1,D=((Je=n.layers)==null?void 0:Je.fade)??.2;let x=null,R=null,z=!0,C=!1,T=!1,N=typeof document<"u"?!document.hidden:!0,q=!0,k=!1,U=0,J=0,Y=0,$=0,g=-1/0,w=0,A=0;const K={time:0},e=(d,S,se,ae,y=null)=>{const s=Tt(r),V=d>0?se/d:1,H=F(d,S),L=d/H,P=S/H,ne=Math.min(Math.max(Math.min(L,P)/v,b),B),re=L*P/(v*ne)**2,Me=u?1:Z(re/2.56,.6,1),ee={rng:s,width:L,height:P,clock:K,pixelRatio:V,scale:ne,zoom:H,colonyScale:Me,quality:p},ke=n.substrate(ee),fe=n.spawner(ee),ce=n.renderer(ee),Re={...ee,substrate:ke},Le=n.growth(Re),Xe=y??(n.paint?n.paint(ee):null),at=n.color?n.color({...ee,substrate:ke}):null,Ee=n.brush?n.brush(ee):null;Xe&&!I&&console.warn(`[${n.name}] paint is ignored outside continuous mode.`);const rt=[];I?rt.push(...Qt(s,fe.spawn())):Le.init(fe.spawn());let ct=null;if(!I){const Qe=document.createElement("canvas");Qe.width=se,Qe.height=ae;const Ze=Qe.getContext("2d");if(!Ze)throw new Error("Unable to acquire a 2D context for the layer buffer.");Ze.setTransform(se/L,0,0,ae/P,0,0),ce.clear(Ze,L,P),ct={canvas:Qe,ctx:Ze}}return{rng:s,substrate:ke,spawner:fe,renderer:ce,growthCtx:Re,growth:Le,layer:0,finished:!I&&X<1,baked:ct,spawnQueue:rt,lastAdvance:0,paint:I?Xe:null,color:at,brush:Ee,paintSince:0,colonyScale:Me,zoom:H}},de=d=>{var se;const S=(se=d.paint)==null?void 0:se.canvas;if(S){S.style.position="fixed",S.style.inset="0",S.style.width="100vw",S.style.height="100vh";try{S.style.width="100lvw",S.style.height="100lvh"}catch{}S.style.display="block",S.style.pointerEvents="none",S.setAttribute("aria-hidden","true"),t.insertAdjacentElement("afterend",S),R=S,S.addEventListener("webglcontextlost",ae=>{S===R&&(ae.preventDefault(),k=!0,U=performance.now()/1e3,console.warn(`[${n.name}] WebGL context lost — paint suspended.`))}),S.addEventListener("webglcontextrestored",()=>{S===R&&(k=!1,console.info(`[${n.name}] WebGL context restored — rebuilding paint.`),xe())})}},xe=()=>{var d,S;if(!(!x||!n.paint||!I)){if(A+=1,A>jt){R&&(R.remove(),R=null),Rt(p,"static",E),k=!0,console.warn(`[${n.name}] WebGL context lost repeatedly (${jt} rebuilds exhausted) — giving up on GPU paint; settling to a static still.`);return}R&&(R.remove(),R=null),(S=(d=x.paint)==null?void 0:d.dispose)==null||S.call(d),x.paint=n.paint(x.growthCtx),x.paintSince=0,k=!1,de(x),W()}},W=()=>{!n.paint||!I||!(x!=null&&x.paint)||x.paint.canvas||p.tier==="static"||(console.info(`[${n.name}] CPU paint fallback — static quality floor engaged.`),Rt(p,"static",E))},Pe=d=>{R&&(d.canvas.width=d.width,d.canvas.height=d.height,d.ctx.setTransform(1,0,0,1,0,0))},j=pn(t,{maxDpr:(it=n.pixelRatio)==null?void 0:it.max,minDpr:(je=n.pixelRatio)==null?void 0:je.min,onResize:d=>{var y,s,V;const{width:S,height:se,canvas:ae}=d;if((y=x==null?void 0:x.paint)!=null&&y.rescale&&R&&!k){const H=F(S,se);x.paint.rescale(S/H,se/H,S>0?ae.width/S:1,H),x=e(S,se,ae.width,ae.height,x.paint),Pe(d),z=!0;return}R&&(R.remove(),R=null),(V=(s=x==null?void 0:x.paint)==null?void 0:s.dispose)==null||V.call(s),k=!1,x=e(S,se,ae.width,ae.height),de(x),W(),Pe(d),z=!0}}),Ge=d=>{const S=d.paint;if(!S)return;const{color:se,brush:ae}=d,y=d.growth.scene.nodes,s=d.paintSince;let V=0,H=y.length;for(;V<H;){const L=V+H>>>1;y[L].age<s?V=L+1:H=L}for(let L=V;L<y.length;L++){const P=y[L];if(P.parentIndex===-2)continue;const ne=se?se({x:P.x,y:P.y,value:P.value,depth:P.depth,age:P.age,armIndex:P.armIndex}):In,re=P.parentIndex>=0?y[P.parentIndex]??null:null;if(ae){ae.mark(S,P,re,ne);continue}if(!re){S.deposit(P.x,P.y,ne,.8);continue}const Me=P.x-re.x,ee=P.y-re.y,ke=Math.max(1,Math.ceil(Math.hypot(Me,ee)));for(let fe=1;fe<=ke;fe++){const ce=fe/ke;S.deposit(re.x+Me*ce,re.y+ee*ce,ne,.45)}}d.paintSince=d.growth.scene.age+1},Te=(d,S,se,ae)=>{var ke;const{growth:y,renderer:s,substrate:V,spawner:H,rng:L}=d,P=I;{for(let Le=0;Le<ae;Le++)y.step();const fe=Math.max(2,Math.round((P.targetTips??64)*p.tipScale*d.colonyScale)),ce=P.spawnBatch??2;y.scene.tipCount<fe&&(d.spawnQueue.length===0&&(d.spawnQueue=Qt(L,H.spawn())),y.init(d.spawnQueue.splice(0,ce)));const Re=P.advanceEvery??0;Re>0&&y.scene.age-d.lastAdvance>=Re&&((ke=V.advance)==null||ke.call(V),d.lastAdvance=y.scene.age)}const{width:ne,height:re}=j;if(d.paint){if(k)return;Ge(d),d.paint.step(1),d.paint.canvas&&d.paint.present&&R?d.paint.present():d.paint.composite(j.ctx,ne,re);return}const Me=ne/d.zoom,ee=re/d.zoom;j.ctx.save(),j.ctx.scale(d.zoom,d.zoom),s.clear(j.ctx,Me,ee),s.render({ctx:j.ctx,width:Me,height:ee,scene:y.scene,substrate:V,time:S,layer:0,horizon:P.horizon}),j.ctx.restore()},we=(d,S,se)=>{var ne;const{renderer:ae,substrate:y}=d,s=d.baked,{width:V,height:H}=j,L=V/d.zoom,P=H/d.zoom;if(!d.finished){for(let re=0;re<m;re++)if(z=!0,!d.growth.step()){if(ae.fade(s.ctx,L,P,D),ae.render({ctx:s.ctx,width:L,height:P,scene:d.growth.scene,substrate:y,time:S,layer:d.layer}),(ne=y.advance)==null||ne.call(y),y.deposit){const Me=y.deposit.bind(y);for(const ee of d.growth.scene.nodes)Me(ee.x,ee.y,1)}d.layer+=1,d.layer>=X?d.finished=!0:(d.growth=n.growth(d.growthCtx),d.growth.init(d.spawner.spawn()));break}}z&&(z=!1,j.ctx.drawImage(s.canvas,0,0,V,H),d.finished||(j.ctx.save(),j.ctx.scale(d.zoom,d.zoom),ae.render({ctx:j.ctx,width:L,height:P,scene:d.growth.scene,substrate:y,time:S,layer:d.layer}),j.ctx.restore()))},Q=Ln();let ve=0;const te=f||h.adaptive===!1?null:Fn(p,Q,{ceiling:M,overrides:E,onChange:()=>{var S,se;if(!x)return;const d=x.zoom;(se=(S=x.paint)==null?void 0:S.rescale)==null||se.call(S,j.width/d,j.height/d,void 0,d)}});let oe=0,Ae=0;const _e=()=>{let d=Math.max(1,Math.round(m*p.simScale));return performance.now()-g<300&&(d=Math.max(1,Math.floor(d/2))),d},ge=gn(d=>{if(!x)return;d.frame>0&&(oe+=d.rawDelta);const S=1/p.fpsCap;if(d.frame>0&&oe<S-.004){if(I&&x&&!C&&!k&&p.tier!=="static"&&w===0){const ae=Math.floor(_e()/2);for(let y=0;y<ae;y++)x.growth.step();w=ae}return}oe>0&&Q.record(oe),oe=0,$+=1;const se=performance.now()/1e3;if(k||te==null||te.update(se),k&&se-U>=4&&p.tier!=="static"&&(console.warn(`[${n.name}] no context restore — rebuilding paint.`),xe()),l&&d.time-ve>=1){ve=d.time;const ae=s=>(s*1e3).toFixed(1),y=x.growth.scene;console.info(`[stats] ema ${ae(Q.ema)}ms  p75 ${ae(Q.p75())}ms  worst ${ae(Q.worst())}ms  | nodes ${y.nodes.length}  tips ${y.tipCount}  age ${y.age}  | ${p.tier}${y.done?"  DONE":""}`)}if(p.tier==="static"){if(Y===0&&(Y=$<120?300:150,J=0),J+=1,J>Y){T=!0,console.info(`[${n.name}] static tier settled — frozen.`),ge.stop();return}}else Y=0;if(I){const ae=_e(),y=Math.max(0,ae-w),s=w+y;K.time+=Jt*(s/m),Te(x,K.time,C,y),w=0}else K.time+=Jt,we(x,K.time);R&&x.paint&&!k&&se-Ae>=30&&(Ae=se,x.paint.composite(j.ctx,j.width,j.height)),i>0&&$>=i&&ge.stop()}),Ue=()=>{const d=N&&q&&!T;d&&!ge.running?ge.start():!d&&ge.running&&ge.stop()};if(document.addEventListener("visibilitychange",()=>{N=!document.hidden,N&&k&&(U=performance.now()/1e3),Ue()}),document.addEventListener("freeze",()=>{N=!1,Ue()}),document.addEventListener("resume",()=>{N=!document.hidden,Ue()}),typeof IntersectionObserver<"u"&&new IntersectionObserver(d=>{const S=d[d.length-1];q=S?S.isIntersecting:!0,Ue()}).observe(t),!u&&typeof window<"u"){const d=()=>{g=performance.now()};window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("wheel",d,{passive:!0}),window.addEventListener("touchmove",d,{passive:!0})}const De=typeof matchMedia<"u"?matchMedia("(prefers-reduced-motion: reduce)"):null;let qe=_;const Ne=d=>{d?(console.info(`[${n.name}] reduced motion — settling to a still.`),p.tier!=="static"&&(qe=p.tier),Rt(p,"static",E)):(Rt(p,f??qe,E),Q.reset(),T=!1,W()),Y=0,J=0,Ue()};De&&(De.matches&&Ne(!0),(He=De.addEventListener)==null||He.call(De,"change",d=>Ne(d.matches))),Ue()}const Bn=(t,n,o=.5)=>a=>{const r=t(a),l=n(a),i={sample(c,u){const f=r.sample(c,u),h=l.sample(c,u),E=f.influence*(1-o),M=h.influence*o;let _=0,p=0;f.direction!==void 0&&(_+=Math.cos(f.direction)*E,p+=Math.sin(f.direction)*E),h.direction!==void 0&&(_+=Math.cos(h.direction)*M,p+=Math.sin(h.direction)*M);const m=Math.hypot(_,p);return{direction:m>1e-6?Math.atan2(p,_):void 0,influence:Math.min(1,m),value:We(f.value,h.value,o)}}};return(r.deposit||l.deposit)&&(i.deposit=(c,u,f)=>{var h,E;(h=r.deposit)==null||h.call(r,c,u,f),(E=l.deposit)==null||E.call(l,c,u,f)}),(r.advance||l.advance)&&(i.advance=()=>{var c,u;(c=r.advance)==null||c.call(r),(u=l.advance)==null||u.call(l)}),i},Nn=(t,n={})=>{const{cell:o=8,decay:a=.5,saturation:r=5,valueShift:l=.3,repel:i=.25}=n;return c=>{const u=t(c),f=Math.max(2,Math.ceil(c.width/o)),h=Math.max(2,Math.ceil(c.height/o)),E=new Float32Array(f*h),M=(m,v)=>{const b=Z(Math.floor(m),0,f-1),B=Z(Math.floor(v),0,h-1);return E[B*f+b]??0},_=(m,v)=>Math.min(1,M(m/o,v/o)/r);return{sample(m,v){const b=u.sample(m,v),B=_(m,v),G=Z(b.value-l*B,0,1);if(i<=0||B<=0)return{...b,value:G};const O=_(m+o,v)-_(m-o,v),F=_(m,v+o)-_(m,v-o),I=Math.hypot(O,F);if(I<1e-4)return{...b,value:G};const X=i*B;let D=-O/I*X,x=-F/I*X;b.direction!==void 0&&(D+=Math.cos(b.direction)*b.influence,x+=Math.sin(b.direction)*b.influence);const R=Math.hypot(D,x);return{direction:R>1e-6?Math.atan2(x,D):b.direction,influence:Math.min(1,R),value:G}},deposit(m,v,b){var O;const B=Math.floor(m/o),G=Math.floor(v/o);for(let F=-1;F<=1;F++)for(let I=-1;I<=1;I++){const X=B+I,D=G+F;if(X<0||D<0||X>=f||D>=h)continue;const x=I===0&&F===0?1:.35;E[D*f+X]=(E[D*f+X]??0)+b*x}(O=u.deposit)==null||O.call(u,m,v,b)},advance(){var m;for(let v=0;v<E.length;v++){const b=E[v]??0;E[v]=b*a}(m=u.advance)==null||m.call(u)}}}},On=(t,n,o={})=>{const{mix:a=1,combine:r="lerp",contrast:l=0,bias:i=.5}=o;return c=>{const u=t(c),f=n(c),h={sample(E,M){const _=u.sample(E,M),p=f.sample(E,M).value;let m=r==="multiply"?_.value*We(1,p,a):We(_.value,p,a);return l>0&&(m=(m-i)*(1+l)+.5),{direction:_.direction,influence:_.influence,value:Z(m,0,1)}}};return u.deposit&&(h.deposit=u.deposit.bind(u)),(u.advance||f.advance)&&(h.advance=()=>{var E,M;(E=u.advance)==null||E.call(u),(M=f.advance)==null||M.call(f)}),h}},ln=Math.sqrt(3),Gn=.5*(ln-1),St=(3-ln)/6,Zt=t=>Math.floor(t)|0,en=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Be(t=Math.random){const n=Xn(t),o=new Float64Array(n).map(r=>en[r%12*2]),a=new Float64Array(n).map(r=>en[r%12*2+1]);return function(l,i){let c=0,u=0,f=0;const h=(l+i)*Gn,E=Zt(l+h),M=Zt(i+h),_=(E+M)*St,p=E-_,m=M-_,v=l-p,b=i-m;let B,G;v>b?(B=1,G=0):(B=0,G=1);const O=v-B+St,F=b-G+St,I=v-1+2*St,X=b-1+2*St,D=E&255,x=M&255;let R=.5-v*v-b*b;if(R>=0){const T=D+n[x],N=o[T],q=a[T];R*=R,c=R*R*(N*v+q*b)}let z=.5-O*O-F*F;if(z>=0){const T=D+B+n[x+G],N=o[T],q=a[T];z*=z,u=z*z*(N*O+q*F)}let C=.5-I*I-X*X;if(C>=0){const T=D+1+n[x+1],N=o[T],q=a[T];C*=C,f=C*C*(N*I+q*X)}return 70*(c+u+f)}}function Xn(t){const o=new Uint8Array(512);for(let a=0;a<512/2;a++)o[a]=a;for(let a=0;a<512/2-1;a++){const r=a+~~(t()*(256-a)),l=o[a];o[a]=o[r],o[r]=l}for(let a=256;a<512;a++)o[a]=o[a-256];return o}const tn=(t={})=>{const{scale:n=.003,influence:o=.6,rotations:a=2,octaves:r=1,lacunarity:l=2,gain:i=.5,warp:c=0,warpScale:u=n,driftX:f=0,driftY:h=0,vectorField:E=!1}=t;return M=>{const{rng:_,clock:p}=M,m=Be(_.next),v=Be(_.next),b=Be(_.next),B=Be(_.next),G=E?Be(_.next):null,O=(F,I,X)=>{let D=0,x=1,R=1,z=0;for(let C=0;C<r;C++)D+=F(I*R,X*R)*x,z+=x,x*=i,R*=l;return D/z};return{sample(F,I){if(f!==0||h!==0){const C=(p==null?void 0:p.time)??0;F+=f*C,I+=h*C}let X=F,D=I;c>0&&(X+=b(F*u,I*u)*c,D+=B(F*u,I*u)*c);const x=X*n,R=D*n;return{direction:G?Math.atan2(O(G,x,R),O(m,x,R)):O(m,x,R)*a*Math.PI,influence:o,value:(O(v,x,R)+1)/2}}}}},zn=(t,n={})=>{const{scale:o=.0024,octaves:a=2,lacunarity:r=2,gain:l=.5,bias:i=.35,outwardScale:c=.7,rimContain:u=.65,driftX:f=0,driftY:h=0}=n;return E=>{const M=t(E),_=Be(E.rng.next),p=E.width/2,m=E.height/2,v=Math.max(1,Math.min(E.width,E.height)/2),b=(G,O)=>{let F=0,I=1,X=1,D=0;for(let x=0;x<a;x++)F+=_(G*X,O*X)*I,D+=I,I*=l,X*=r;return F/D},B={sample(G,O){var R;const F=M.sample(G,O);if(F.direction===void 0)return F;const I=((R=E.clock)==null?void 0:R.time)??0,X=b((G+f*I)*o,(O+h*I)*o);let D=Z(X+i,-1,1);if(u<1){const z=Math.hypot(G-p,O-m)/v,C=Z((z-u)/(1-u),0,1);D=We(D,1,C*C*(3-2*C))}const x=D>=0;return{direction:x?F.direction:F.direction+Math.PI,influence:F.influence*(x?D:-D*c),value:F.value}}};return M.deposit&&(B.deposit=M.deposit.bind(M)),M.advance&&(B.advance=M.advance.bind(M)),B}},Wn=t=>{const{sinks:n,influence:o=.9,falloff:a=1,core:r=8,valueRadius:l=120}=t;return({width:i,height:c})=>{const u=i/2,f=c/2,h=Math.min(i,c),E=n.map(M=>({x:u+(M.x-.5)*h,y:f+(M.y-.5)*h,weight:M.weight??1,swirl:M.swirl??0}));return{sample(M,_){let p=0,m=0,v=1/0;for(const B of E){const G=B.x-M,O=B.y-_,F=Math.hypot(G,O)||1e-6;F<v&&(v=F);const I=B.weight/Math.pow(Math.max(F,r),a),X=G/F,D=O/F;p+=(X-D*B.swirl)*I,m+=(D+X*B.swirl)*I}return{direction:Math.hypot(p,m)>1e-9?Math.atan2(m,p):void 0,influence:o,value:Z(1-v/l,0,1)}}}}};class $n{constructor(n,o,a){yt(this,"cols");yt(this,"rows");yt(this,"invCell");yt(this,"buckets");this.cols=Math.max(1,Math.ceil(o/n)),this.rows=Math.max(1,Math.ceil(a/n)),this.invCell=1/n,this.buckets=new Array(this.cols*this.rows)}colOf(n){const o=n*this.invCell|0;return o<0?0:o>=this.cols?this.cols-1:o}rowOf(n){const o=n*this.invCell|0;return o<0?0:o>=this.rows?this.rows-1:o}add(n){const o=this.rowOf(n.y)*this.cols+this.colOf(n.x);let a=this.buckets[o];a===void 0&&(a=[],this.buckets[o]=a),n.gridBucket=a,n.gridSlot=a.length,a.push(n)}remove(n){const o=n.gridBucket,a=n.gridSlot;if(o===void 0||a===void 0)return;const r=o.length-1,l=o[r];l!==void 0&&a!==r&&(o[a]=l,l.gridSlot=a),o.pop(),n.gridBucket=void 0,n.gridSlot=void 0}forEachWithin(n,o,a,r){const l=a*a,i=this.colOf(n-a),c=this.colOf(n+a),u=this.rowOf(o-a),f=this.rowOf(o+a);for(let h=u;h<=f;h++){const E=h*this.cols;for(let M=i;M<=c;M++){const _=this.buckets[E+M];if(_!==void 0)for(let p=0;p<_.length;p++){const m=_[p];if(m===void 0)continue;const v=m.x-n,b=m.y-o;v*v+b*b<=l&&r(m)}}}}within(n,o,a){const r=[],l=a*a,i=this.colOf(n-a),c=this.colOf(n+a),u=this.rowOf(o-a),f=this.rowOf(o+a);for(let h=u;h<=f;h++){const E=h*this.cols;for(let M=i;M<=c;M++){const _=this.buckets[E+M];if(_!==void 0)for(let p=0;p<_.length;p++){const m=_[p];if(m===void 0)continue;const v=m.x-n,b=m.y-o;v*v+b*b<=l&&r.push(m)}}}return r}}const Vn=(t={})=>{const{stepLength:n=2,stepValueInfluence:o=0,stepDepthFalloff:a=1,branchStepScale:r=1,minStep:l=(t.stepLength??2)*.4,wander:i=.22,substrateWeight:c=.6,branchProbability:u=.02,branchAngle:f=.6,branchAngleJitter:h=.4,branchValueInfluence:E=.5,branchMinDepth:M=0,branchDecay:_=1,pressureRadius:p=14,pressureWeight:m=.6,pressureValueFalloff:v=0,pressureCap:b=1,collisionRadius:B=2.2,vigorJitter:G=.45,overtake:O=.5,passOnLoss:F=.4,bloomOnLoss:I=.25,bloomTips:X=5,bloomStepsMin:D=3,bloomStepsMax:x=8,bloomJitter:R=.75,burstProbability:z=0,burstArms:C=16,burstStepsMin:T=4,burstStepsMax:N=16,burstValueFalloff:q=0,lifeMin:k=0,lifeMax:U=0,maxTips:J=1/0,maxNodes:Y=12e4,margin:$=8,horizon:g=0,depositOnGrow:w=!1,girthVar:A=0,girthSwell:K=0,girthRate:e=.06,girthRadius:de=10,girthSaturation:xe=14}=t,W=128,Pe=A>0||K!==0;return({substrate:j,width:Ge,height:Te})=>{const we=Math.ceil(B/Math.max(l,.1))+2,Q=y=>U>0?y.int(k,U):void 0,ve=y=>A>0?Z(1+y.range(-A,A),.2,2):1,te=(y,s)=>Z(y*(1+K*(s*2-1)),.25,3);let oe=[];const Ae=new $n(Math.max(p,de,B,4),Ge,Te);let _e=[],ge=0,Ue=0,De=!1,qe=1;const Ne=new Set;let ze=0,$e=0,Ke=0,me=0,Ce=0;const Ve=y=>{if(y.owner===ze)return;const s=$e-y.x,V=Ke-y.y,H=s*s+V*V;if(H<.001)return;const L=1/H;me+=s*L,Ce+=V*L};let Je=0;const it=()=>{Je+=1};let je=[],He=null,d=1/0;const S=y=>{if(y.owner===ze||je.includes(y.index))return;const s=y.x-$e,V=y.y-Ke,H=s*s+V*V;H<d&&(d=H,He=y)},se=(y,s,V,H,L,P,ne,re,Me=1)=>{var ke;const ee={index:oe.length,x:y,y:s,parentIndex:V,depth:H,armIndex:L,age:ge,value:P,owner:ne,vigor:re};return Pe&&(ee.width=Me),oe.push(ee),Ae.add(ee),H>Ue&&(Ue=H),w&&((ke=j.deposit)==null||ke.call(j,y,s,1)),ee},ae=()=>{const y=ge-g;if(y<=0)return;const s=new Uint8Array(oe.length);let V=0;for(const P of oe)P.age>=y?s[P.index]=1:V+=1;if(V===0)return;for(const P of oe)(s[P.index]??0)===1&&P.parentIndex>=0&&(s[P.parentIndex]??0)===0&&(s[P.parentIndex]=2);for(const P of oe)(s[P.index]??0)!==1&&Ae.remove(P);const H=new Int32Array(oe.length).fill(-1),L=[];for(const P of oe)(s[P.index]??0)!==0&&(H[P.index]=L.length,L.push(P));for(const P of L)(s[P.index]??0)===2?P.parentIndex=-2:P.parentIndex>=0&&(P.parentIndex=H[P.parentIndex]??-2),P.index=H[P.index]??0;oe=L;for(const P of _e)P.nodeIndex=H[P.nodeIndex]??0,P.recent=P.recent.map(ne=>H[ne]??-1).filter(ne=>ne>=0)};return{init(y){y.length>0&&(g>0||oe.length<Y)&&(De=!1);for(const s of y){if(oe.length>=Y)break;if(Ae.within(s.x,s.y,B).length>0)continue;const V=j.sample(s.x,s.y),H=qe++,L=Tt(s.seed),P=(.5+V.value)*(1+L.range(-G,G)),ne=ve(L),re=se(s.x,s.y,-1,0,s.armIndex,V.value,H,P,ne);_e.push({id:H,x:s.x,y:s.y,heading:s.heading,depth:0,spawnDepth:0,armIndex:s.armIndex,nodeIndex:re.index,rng:L,recent:[re.index],grace:we,generation:0,vigor:P,life:Q(L),girthBias:ne,girth:.5})}},step(){if(De)return!1;const y=[];for(const s of _e){if(oe.length>=Y){if(g===0)break;y.push(s);continue}if(Ne.has(s.id))continue;if(s.life!==void 0){if(s.life<=0)continue;s.life-=1}const V=j.sample(s.x,s.y),H=s.bloom?R:i;let L=s.heading+s.rng.range(-H,H);if(!s.bloom&&V.direction!==void 0){const fe=Math.min(1,V.influence*c);L+=Kt(L,V.direction)*fe}if(!s.bloom&&m>0){const fe=m*(1-v*V.value);if(fe>1e-4){ze=s.id,$e=s.x,Ke=s.y,me=0,Ce=0,Ae.forEachWithin(s.x,s.y,p,Ve);const ce=Math.hypot(me,Ce);if(ce>1e-6){const Re=Math.min(b,fe*ce);L+=Kt(L,Math.atan2(Ce,me))*Re}}}const P=Math.max(l,n*Math.pow(a,s.depth)*Math.pow(r,s.generation)*(1+o*(V.value*2-1))),ne=s.x+Math.cos(L)*P,re=s.y+Math.sin(L)*P;if(ne<$||re<$||ne>Ge-$||re>Te-$)continue;if(s.grace>0)s.grace-=1;else{ze=s.id,$e=s.x,Ke=s.y,je=s.recent,He=null,d=1/0,Ae.forEachWithin(ne,re,B,S);const fe=He;if(fe){const ce=s.vigor/(s.vigor+fe.vigor);if(s.rng.next()<ce)s.rng.next()<O&&Ne.add(fe.owner),s.grace=we;else if(s.rng.next()<F)s.grace=we;else{if(s.rng.next()<I&&oe.length<Y)for(let Re=0;Re<X;Re++){const Le=s.rng.int(D,x);y.push({id:s.id,x:s.x,y:s.y,heading:s.rng.range(0,st),depth:s.depth,spawnDepth:s.spawnDepth,armIndex:s.armIndex,nodeIndex:s.nodeIndex,rng:Tt(s.rng.int(0,2**31-1)),recent:[...s.recent],grace:Le+1,generation:s.generation+1,vigor:s.vigor,life:Le,bloom:!0,girthBias:s.girthBias,girth:s.girth})}continue}}}let Me=1;if(Pe){if(K!==0){Je=0,Ae.forEachWithin(ne,re,de,it);const fe=Z(Je/xe,0,1);s.girth+=e*(fe-s.girth)}Me=te(s.girthBias,s.girth)}const ee=se(ne,re,s.nodeIndex,s.depth+1,s.armIndex,V.value,s.id,s.vigor,Me);s.x=ne,s.y=re,s.heading=L,s.depth=ee.depth,s.nodeIndex=ee.index,s.recent.push(ee.index),s.recent.length>we&&s.recent.shift(),y.push(s);const ke=s.bloom||ee.depth<M?0:u*We(1,V.value*2,E)*(_===1?1:Math.pow(_,ee.depth-s.spawnDepth));if(s.rng.next()<ke&&oe.length<Y&&_e.length<J){const fe=s.rng.next()<.5?-1:1,ce=f+(h>0?s.rng.range(-h,h):0),Re=Tt(s.rng.int(0,2**31-1)),Le=s.vigor*(1+Re.range(-G,G)),Xe=A>0?Z(s.girthBias*(1+Re.range(-A,A)*.5),.2,2):1;y.push({id:qe++,x:ne,y:re,heading:L+fe*ce,depth:ee.depth,spawnDepth:ee.depth,armIndex:s.armIndex,nodeIndex:ee.index,rng:Re,recent:[...s.recent],grace:we,generation:s.generation+1,vigor:Le,life:Q(Re),girthBias:Xe,girth:s.girth})}if(!s.bloom&&z>0&&oe.length<Y&&s.rng.next()<z*(1-q*V.value))for(let fe=0;fe<C;fe++){const ce=s.rng.int(T,N);y.push({id:s.id,x:ne,y:re,heading:s.rng.range(0,st),depth:s.depth,spawnDepth:s.spawnDepth,armIndex:s.armIndex,nodeIndex:s.nodeIndex,rng:Tt(s.rng.int(0,2**31-1)),recent:[...s.recent],grace:ce+1,generation:s.generation+1,vigor:s.vigor,life:ce,bloom:!0,girthBias:s.girthBias,girth:s.girth})}}return _e=Ne.size?y.filter(s=>!Ne.has(s.id)):y,Ne.clear(),ge+=1,g>0&&ge%W===0&&ae(),(_e.length===0||g===0&&oe.length>=Y)&&(De=!0),!De},get scene(){return{nodes:oe,maxDepth:Ue,tipCount:_e.length,age:ge,done:De}}}}},Ye=(t,n,o)=>{const a=Math.sin(t*127.1+n*311.7+o*74.7)*43758.5453;return a-Math.floor(a)},Hn=(t={})=>{const{background:n="#efe7d6",ink:o="#1b160f",baseWidth:a=1.1,minWidth:r=.3,valueWidth:l=.6,widthJitter:i=.6,gapProbability:c=.06,tremor:u=.9,knotProbability:f=.045,knotScale:h=1.8,blotProbability:E=.0035,coreRadius:M=1.8,speckCount:_=1600,speckRadius:p=.65,speckBias:m=.8,fadeBands:v=28,fadeGamma:b=1.5,refreshEvery:B=1}=t;return()=>{let G=null;const O=new Map;let F=null,I=0;const X=(T,N,q)=>{const k=Tt(11),U=[];for(let J=0;J<_;J++){const Y=k.next()*T,$=k.next()*N,g=q.sample(Y,$).value;k.next()<1-m*g&&U.push({x:Y,y:$,r:p*(.5+k.next())})}return U},D=T=>T.x+(Ye(T.x,T.y,2)-.5)*2*u,x=T=>T.y+(Ye(T.x,T.y,3)-.5)*2*u,R=(T,N)=>{const q=new Map,k=new Path2D;for(const U of T){if(U.parentIndex===-1){M>0&&(k.moveTo(U.x+M,U.y),k.arc(U.x,U.y,M,0,Math.PI*2));continue}if(U.parentIndex<0)continue;const J=N[U.parentIndex];if(!J)continue;const Y=1+l*(U.value*2-1),$=Math.max(r,a*Y*(1-i/2+i*Ye(U.x,U.y,4)));if(Ye(U.x,U.y,5)<f){const A=Math.max($*h*(.6+Ye(U.x,U.y,6)),.5);k.moveTo(U.x+A,U.y),k.arc(U.x,U.y,A,0,Math.PI*2)}if(Ye(U.x,U.y,7)<E)for(let A=0;A<3;A++){const K=U.x+(Ye(U.x,U.y,8+A)-.5)*4,e=U.y+(Ye(U.x,U.y,11+A)-.5)*4,de=1+Ye(U.x,U.y,14+A)*2.2;k.moveTo(K+de,e),k.arc(K,e,de,0,Math.PI*2)}if(Ye(U.x,U.y,1)<c)continue;const g=Math.round($*4)/4;let w=q.get(g);w||(w=new Path2D,q.set(g,w)),w.moveTo(D(J),x(J)),w.lineTo(D(U),x(U))}return{strokes:q,dots:k}},z=(T,N,q)=>{T.globalAlpha=q,T.strokeStyle=o,T.lineCap="round";for(const[k,U]of N.strokes)T.lineWidth=k,T.stroke(U);T.fillStyle=o,T.fill(N.dots),T.globalAlpha=1},C=(T,N)=>{const{ctx:q,scene:k}=T,U=Math.max(1,Math.round(N/v)),J=Math.floor(k.age/U),Y=new Map;for(const g of k.nodes){const w=Math.floor(g.age/U);if(J-w>v+1||w!==J&&O.has(w))continue;const A=Y.get(w);A?A.push(g):Y.set(w,[g])}for(const[g,w]of Y)O.set(g,R(w,k.nodes));for(const g of O.keys())J-g>v+1&&O.delete(g);const $=[...O.keys()].sort((g,w)=>g-w);for(const g of $){const w=(g+1)*U,A=Math.max(0,k.age-w)/N,K=Math.pow(Math.max(0,1-A),b);if(K<.004)continue;const e=O.get(g);e&&z(q,e,K)}};return{clear(T,N,q){T.fillStyle=n,T.fillRect(0,0,N,q)},fade(T,N,q,k){T.save(),T.globalAlpha=k,T.fillStyle=n,T.fillRect(0,0,N,q),T.restore()},render(T){const{ctx:N,width:q,height:k,substrate:U}=T;if(!G){const J=new Path2D;for(const Y of X(q,k,U))J.moveTo(Y.x+Y.r,Y.y),J.arc(Y.x,Y.y,Y.r,0,Math.PI*2);G=J}if(N.fillStyle=o,N.fill(G),T.horizon!==void 0){C(T,T.horizon);return}(!F||I%Math.max(1,B)===0)&&(F=R(T.scene.nodes,T.scene.nodes)),I+=1,z(N,F,1)}}}},Et=t=>{if(typeof t!="string")return[t[0],t[1],t[2]];let n=t.trim();if(n[0]==="#"&&(n=n.slice(1)),n.length===3){const l=parseInt(n[0]+n[0],16),i=parseInt(n[1]+n[1],16),c=parseInt(n[2]+n[2],16);return[l/255,i/255,c/255]}const o=parseInt(n.slice(0,2),16),a=parseInt(n.slice(2,4),16),r=parseInt(n.slice(4,6),16);return[o/255,a/255,r/255]},nt=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4),Ct=t=>t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055,Mt=1024;let bt=null;const wt=t=>{if(!bt){bt=new Uint8ClampedArray(Mt+1);for(let n=0;n<=Mt;n++)bt[n]=Ct(n/Mt)*255}return t<=0?bt[0]:t>=1?bt[Mt]:bt[t*Mt|0]},Yn=(t,n,o)=>{const a=.4122214708*t+.5363325363*n+.0514459929*o,r=.2119034982*t+.6806995451*n+.1073969566*o,l=.0883024619*t+.2817188376*n+.6299787005*o,i=Math.cbrt(a),c=Math.cbrt(r),u=Math.cbrt(l);return[.2104542553*i+.793617785*c-.0040720468*u,1.9779984951*i-2.428592205*c+.4505937099*u,.0259040371*i+.7827717662*c-.808675766*u]},un=(t,n,o)=>{const a=t+.3963377774*n+.2158037573*o,r=t-.1055613458*n-.0638541728*o,l=t-.0894841775*n-1.291485548*o,i=a*a*a,c=r*r*r,u=l*l*l;return[4.0767416621*i-3.3077115913*c+.2309699292*u,-1.2684380046*i+2.6097574011*c-.3413193965*u,-.0041960863*i-.7034186147*c+1.707614701*u]},qn=t=>{const[n,o,a]=Et(t);return Yn(nt(n),nt(o),nt(a))},Kn=(t,n,o)=>{const a=un(t,n,o);return[Z(Ct(Z(a[0],0,1)),0,1),Z(Ct(Z(a[1],0,1)),0,1),Z(Ct(Z(a[2],0,1)),0,1)]},Bt=1e-4,Nt=.001,Jn={combine:`
    vec3 lin = srgbToLinear(deltaColor);
    vec3 absorb = -log(max(lin, vec3(1e-4)));
    accum.rgb = accum.rgb * fade + absorb * deltaAlpha * uGain;
  `,resolve:`
    vec3 lin = srgbToLinear(bg) * exp(-accum.rgb);
    color = linearToSrgb(lin);
  `},dn=()=>{let t=[0,0,0];const n=2048,o=16,a=new Float32Array(n+1);for(let i=0;i<=n;i++)a[i]=Math.exp(-(i/n)*o);const r=i=>i<=0?1:i>=o?0:a[i/o*n|0],l=new Float32Array(3);return{channels:3,gl:Jn,prepare(i){t=[nt(i[0]),nt(i[1]),nt(i[2])]},encode(i){const[c,u,f]=Et(i);return l[0]=-Math.log(Z(nt(c),Bt,1)),l[1]=-Math.log(Z(nt(u),Bt,1)),l[2]=-Math.log(Z(nt(f),Bt,1)),l},mix(i,c,u,f){i[c]=i[c]+u[0]*f,i[c+1]=i[c+1]+u[1]*f,i[c+2]=i[c+2]+u[2]*f},fade(i,c,u){i[c]=i[c]*u,i[c+1]=i[c+1]*u,i[c+2]=i[c+2]*u},isEmpty(i,c){return i[c]<Nt&&i[c+1]<Nt&&i[c+2]<Nt},resolve(i,c,u){u[0]=wt(t[0]*r(i[c])),u[1]=wt(t[1]*r(i[c+1])),u[2]=wt(t[2]*r(i[c+2]))}}},jn={combine:`
    vec3 srcLab = rgbToOklab(srgbToLinear(deltaColor));
    float t = clamp(deltaAlpha * uGain, 0.0, 1.0);
    float cov = accum.a * fade;
    accum.rgb = mix(accum.rgb, srcLab, t);
    accum.a = cov + t * (1.0 - cov);
  `,resolve:`
    vec3 lin = oklabToLinear(accum.rgb);
    vec3 c = linearToSrgb(clamp(lin, 0.0, 1.0));
    color = mix(bg, c, accum.a);
  `},Qn=()=>{const t=[0,0,0],n=new Float32Array(4);return{channels:4,gl:jn,prepare(o){t[0]=o[0]*255,t[1]=o[1]*255,t[2]=o[2]*255},encode(o){const[a,r,l]=qn(o);return n[0]=a,n[1]=r,n[2]=l,n[3]=0,n},mix(o,a,r,l){const i=Z(l,0,1);o[a]=We(o[a],r[0],i),o[a+1]=We(o[a+1],r[1],i),o[a+2]=We(o[a+2],r[2],i);const c=o[a+3];o[a+3]=c+i*(1-c)},fade(o,a,r){o[a+3]=o[a+3]*r},isEmpty(o,a){return o[a+3]<Nt},resolve(o,a,r){const l=o[a+3];if(l<=Bt){r[0]=t[0],r[1]=t[1],r[2]=t[2];return}const i=un(o[a],o[a+1],o[a+2]),c=wt(Z(i[0],0,1)),u=wt(Z(i[1],0,1)),f=wt(Z(i[2],0,1));r[0]=We(t[0],c,l),r[1]=We(t[1],u,l),r[2]=We(t[2],f,l)}}},he=t=>{const n=t.toString();return n.includes(".")||n.includes("e")?n:`${n}.0`},Zn=(t={})=>{const{massGain:n=.6,massInertia:o=.7,mixFloor:a=.12,chromaPop:r=.04,hueSpin:l=.08,massCap:i=3,massDecay:c=.004,massDecayPow:u=0,lightnessDecay:f=0,chromaDecay:h=0,targetL:E=.62,brightRegulate:M=.04,targetC:_=.11,chromaRegulate:p=.03,lVar:m=0,cVar:v=0,varScale:b=.02,varSpeed:B=.003,hueDrift:G=.05,hueDriftScale:O=.01,grain:F=.01,show:I=1.2}=t,X=b*1.7,D=Z(Math.ceil(Math.max(c>0?(u>0?.001*i:.002)/c:1,f>0?.001/f:1,h>0?.001/h:1)),1,16);return{...Qn(),gl:{fadeInert:!0,combine:`
        if (deltaAlpha > 0.001) {
          vec3 srcLab = rgbToOklab(srgbToLinear(deltaColor));
          float w = deltaAlpha * uGain;
          float m = accum.a;
          // Influence: more where empty; resisted by mass; floored so fresh
          // paint never fully disappears on dense ground.
          float k = max(${he(a)},
            clamp(w / (m * ${he(o)} + w + 1e-3), 0.0, 1.0));
          accum.x = mix(accum.x, srcLab.x, k);
          // Hue-aware blend: rotate old (a,b) toward new AROUND the wheel (not
          // through grey), then add surprise — a chroma pop where the hues clash
          // (over-painting a different colour stands out) and a small per-paint
          // spin (repainting an area keeps shifting it into new colours).
          vec2 ov = accum.yz;
          vec2 nv = srcLab.yz;
          float oc = length(ov);
          float nc = length(nv);
          if (oc > 1e-4 && nc > 1e-4) {
            float oh = atan(ov.y, ov.x);
            float dh = atan(sin(atan(nv.y, nv.x) - oh), cos(atan(nv.y, nv.x) - oh));
            float h = oh + k * dh + ${he(l)} * k;
            float c = mix(oc, nc, k) + ${he(r)} * abs(sin(dh)) * k;
            accum.yz = vec2(cos(h), sin(h)) * c;
          } else {
            accum.yz = mix(ov, nv, k);
          }
          accum.a = min(m + w * ${he(n)}, ${he(i)});
        }
      `,evolveEvery:D,evolve:`
        // NOTE: this pass runs every ${D} frame(s) (evolveEvery), so
        // every accumulative rate below is pre-multiplied by that N — a
        // super-ulp step per application that survives fp16 storage on every
        // rounding mode (see the decayEvery comment). Grain is re-rolled
        // noise, not a rate, so its amplitude stays as authored.
        ${c>0&&u>0?`// Density-relative decay: loss ∝ (m/cap)^pow, so pooled mass
        // sheds fast while faint marks linger (see massDecayPow). The max()
        // floor keeps the faint tail moving in fp16: for pow > 1 the step
        // shrinks RELATIVE to m as m drops, and below ~half a relative ulp
        // (2.4e-4) round-to-nearest drivers would freeze the fade at a
        // still-visible mass — 6e-4/write clears a full ulp on every driver,
        // an exponential tail slow enough to read as lingering, not loss.
        float mm = max(accum.a, 0.0);
        float m = max(0.0, mm - max(
          ${he(c*D)} * ${u===1?`(mm * ${he(1/i)})`:`pow(mm * ${he(1/i)}, ${he(u)})`},
          mm * 6.0e-4));`:`float m = max(0.0, accum.a - ${he(c*D)});`}
        ${f>0?`// Ageing: L sinks toward black (multiplicative — contrast-keeping).
        accum.x *= ${he(1-f*D)};`:""}
        ${h>0?`// Ageing: chroma dulls toward grey.
        accum.yz *= ${he(1-h*D)};`:""}
        // Targets vary across the field and evolve in TIME (z axis of the noise,
        // so the pattern churns in place instead of sliding diagonally), with
        // octaves so it doesn't read as one obvious blob field. uTime is the
        // real frame counter, so the drift speed is cadence-independent.
        float tL = ${he(E)} + ${he(m)} *
          (fbm3(vec3(gl_FragCoord.xy * ${he(b)}, uTime * ${he(B)})) - 0.5);
        float tC = ${he(_)} + ${he(v)} *
          (fbm3(vec3(gl_FragCoord.xy * ${he(X)}, uTime * ${he(B)} + 50.0)) - 0.5);
        // Brightness homeostasis toward the (varying) target — fresh dark marks
        // get lifted slowly, so new growth stands out before settling in.
        accum.x += ${he(M*D)} * (tL - accum.x);
        // Chroma homeostasis toward the (varying) target.
        float c = length(accum.yz);
        if (c > 1e-4) {
          accum.yz *= max(0.0, c + ${he(p*D)} * (tC - c)) / c;
        }
        // Gentle hue drift (kept small — brightness/chroma carry the evolution).
        float ang = ${he(G*D)} *
          (valueNoise3(vec3(gl_FragCoord.xy * ${he(O)}, uTime * 0.01)) - 0.5);
        float cs = cos(ang); float sn = sin(ang);
        accum.yz = mat2(cs, -sn, sn, cs) * accum.yz;
        // Per-cell brightness grain — spatiotemporal blue noise (.a channel,
        // golden-ratio rotated per application): even, non-repeating, no
        // diagonal structure, and mean-zero over time so it doesn't drift.
        accum.x += ${he(F)} * (fract(
          texture(uBlue, gl_FragCoord.xy / uBlueSize).a + uTime * 0.61803399) - 0.5);
        accum.x = clamp(accum.x, 0.0, 1.0);
        accum.a = m;
      `,resolve:`
        float m = clamp(accum.a * ${he(I)}, 0.0, 1.0);
        vec3 lin = oklabToLinear(accum.rgb);
        vec3 cc = linearToSrgb(clamp(lin, 0.0, 1.0));
        color = mix(bg, cc, m);
      `}}},eo=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(t=>(t+.5)/16),zt=(t={})=>{var M;const{pigment:n=dn(),background:o="#efe7d6",resolution:a=1,radius:r=1.3,fade:l=.997,fadeGrace:i,stateCell:c=16,dither:u=0}=t,f=Et(o),h=[Math.round(f[0]*255),Math.round(f[1]*255),Math.round(f[2]*255)];(M=n.prepare)==null||M.call(n,f);const E=n.channels;return _=>{const p=_.width,m=_.height,v=_.zoom??1,b=Math.max(1,Math.round(p*v*a)),B=Math.max(1,Math.round(m*v*a)),G=b/p,O=B/m,F=new Float32Array(b*B*E),I=new Uint8Array(b*B);let X=[],D=[];const x=Math.max(1,Math.ceil(p/c)),R=Math.max(1,Math.ceil(m/c)),z=new Float32Array(x*R).fill(-1e9);let C=0,T=null,N=null,q=null;const k=new Float32Array(3),U=($,g)=>{const w=Z(Math.floor($/c),0,x-1);return Z(Math.floor(g/c),0,R-1)*x+w},J=()=>{if(T)return;T=document.createElement("canvas"),T.width=b,T.height=B;const $=T.getContext("2d");if(!$)throw new Error("Unable to acquire paint composite context.");N=$,q=$.createImageData(b,B);const g=q.data;for(let w=0;w<b*B;w++)g[w*4]=h[0],g[w*4+1]=h[1],g[w*4+2]=h[2],g[w*4+3]=255},Y=$=>{const g=q.data;n.resolve(F,$*E,k);const w=$*4;let A=0;if(u>0){const K=$%b,e=$/b|0;A=(eo[(e&3)*4+(K&3)]-.5)*u}g[w]=k[0]+A,g[w+1]=k[1]+A,g[w+2]=k[2]+A};return{deposit($,g,w,A,K){const e=n.encode(w),de=$*G,xe=g*O,W=(K??r)*G,Pe=Math.max(0,Math.floor(de-W)),j=Math.min(b-1,Math.ceil(de+W)),Ge=Math.max(0,Math.floor(xe-W)),Te=Math.min(B-1,Math.ceil(xe+W)),we=W*W;for(let Q=Ge;Q<=Te;Q++)for(let ve=Pe;ve<=j;ve++){const te=ve+.5-de,oe=Q+.5-xe,Ae=te*te+oe*oe;if(Ae>we)continue;const _e=Math.min(1,(1-Ae/we)*1.8),ge=Q*b+ve;n.mix(F,ge*E,e,A*_e),I[ge]||(I[ge]=1,X.push(ge))}z[U($,g)]=C},step($){C+=1;const g=Math.pow(l,$);if(g>=1||X.length===0)return;const w=i!==void 0,A=[];for(let K=0;K<X.length;K++){const e=X[K];if(w){const de=e%b/G,xe=(e/b|0)/O;if(C-z[U(de,xe)]<=i){A.push(e);continue}}n.fade(F,e*E,g),n.isEmpty(F,e*E)?(I[e]=0,D.push(e)):A.push(e)}X=A},composite($,g,w){J();for(let A=0;A<D.length;A++){const K=D[A]*4,e=q.data;e[K]=h[0],e[K+1]=h[1],e[K+2]=h[2]}D=[];for(let A=0;A<X.length;A++)Y(X[A]);N.putImageData(q,0,0),$.drawImage(T,0,0,g,w)},sample($,g){const w=Z(Math.floor($*G),0,b-1),A=Z(Math.floor(g*O),0,B-1);return n.resolve(F,(A*b+w)*E,k),[k[0]/255,k[1]/255,k[2]/255]}}}},to=(t,n)=>{if(typeof document>"u")return null;const o=document.createElement("canvas");o.width=t,o.height=n;const a=o.getContext("webgl2",{premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1});return!a||!a.getExtension("EXT_color_buffer_float")?null:{gl:a,canvas:o}},no=t=>{var n;(n=t.getExtension("WEBGL_lose_context"))==null||n.loseContext()},nn=(t,n,o)=>{const a=t.createShader(n);if(!a)throw new Error("Failed to create shader.");if(t.shaderSource(a,o),t.compileShader(a),!t.getShaderParameter(a,t.COMPILE_STATUS)){const r=t.getShaderInfoLog(a);throw t.deleteShader(a),new Error(`Shader compile error: ${r}`)}return a},ht=(t,n,o)=>{const a=nn(t,t.VERTEX_SHADER,n),r=nn(t,t.FRAGMENT_SHADER,o),l=t.createProgram();if(!l)throw new Error("Failed to create program.");if(t.attachShader(l,a),t.attachShader(l,r),t.linkProgram(l),t.deleteShader(a),t.deleteShader(r),!t.getProgramParameter(l,t.LINK_STATUS)){const i=t.getProgramInfoLog(l);throw t.deleteProgram(l),new Error(`Program link error: ${i}`)}return l},oo=t=>{const n=t.createVertexArray();return()=>{t.bindVertexArray(n),t.drawArrays(t.TRIANGLES,0,3),t.bindVertexArray(null)}},on=(t,n,o)=>{const a=t.createTexture();if(!a)throw new Error("Failed to create accumulation texture.");return t.bindTexture(t.TEXTURE_2D,a),t.texImage2D(t.TEXTURE_2D,0,t.RGBA16F,n,o,0,t.RGBA,t.HALF_FLOAT,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),a},an=(t,n,o)=>{let a=on(t,n,o),r=on(t,n,o);const l=t.createFramebuffer();if(!l)throw new Error("Failed to create framebuffer.");let i=null;t.bindFramebuffer(t.FRAMEBUFFER,l);for(const c of[a,r])t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT);return t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE&&console.warn("[paint] accumulation framebuffer incomplete."),t.bindFramebuffer(t.FRAMEBUFFER,null),{srcTexture:()=>a,bindDst(){t.bindFramebuffer(t.FRAMEBUFFER,l),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.viewport(0,0,n,o)},blitDstToSrc(c,u,f,h){if(!i&&(i=t.createFramebuffer(),!i))throw new Error("Failed to create blit framebuffer.");t.bindFramebuffer(t.READ_FRAMEBUFFER,l),t.framebufferTexture2D(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,i),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,a,0),t.blitFramebuffer(c,u,c+f,u+h,c,u,c+f,u+h,t.COLOR_BUFFER_BIT,t.NEAREST),t.bindFramebuffer(t.FRAMEBUFFER,null)},swap(){const c=a;a=r,r=c},dispose(){t.deleteTexture(a),t.deleteTexture(r),t.deleteFramebuffer(l),i&&t.deleteFramebuffer(i)}}},mt=`#version 300 es
out vec2 vUv;
void main() {
  float x = (gl_VertexID == 1) ? 3.0 : -1.0;
  float y = (gl_VertexID == 2) ? 3.0 : -1.0;
  vUv = vec2((x + 1.0) * 0.5, (y + 1.0) * 0.5);
  gl_Position = vec4(x, y, 0.0, 1.0);
}`,Pt=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

vec3 srgbToLinear(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
}
vec3 linearToSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}
vec3 rgbToOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  float l_ = pow(l, 1.0 / 3.0);
  float m_ = pow(m, 1.0 / 3.0);
  float s_ = pow(s, 1.0 / 3.0);
  return vec3(
    0.2104542553 * l_ + 0.7936177850 * m_ - 0.0040720468 * s_,
    1.9779984951 * l_ - 2.4285922050 * m_ + 0.4505937099 * s_,
    0.0259040371 * l_ + 0.7827717662 * m_ - 0.8086757660 * s_
  );
}
vec3 oklabToLinear(vec3 lab) {
  float l_ = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m_ = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s_ = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  float l = l_ * l_ * l_;
  float m = m_ * m_ * m_;
  float s = s_ * s_ * s_;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}
// Bit-mixing hashes (Dave Hoskins, hash without sine, https://www.shadertoy.com
// /view/4djSRW). Uniform in [0,1), mean ≈ 0.5 — important because grain/hue-drift
// add them cumulatively every frame, so a biased hash would slowly drag the
// field dark/off-hue. Crucially they have NO grid moire: a sin-based hash
// sampled on the regular pixel lattice beats into a visible periodic pattern
// (worst when the noise scale is integer, so valueNoise lands on exact lattice
// points and its smoothing is bypassed -- e.g. the paper tooth). These don't.
float hash21(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float hash31(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
// Smooth value noise (0..1), 2-D and 3-D (z = animate in place, no drift).
float valueNoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1, 0)), u.x),
             mix(hash21(i + vec2(0, 1)), hash21(i + vec2(1, 1)), u.x), u.y);
}
float valueNoise3(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(hash31(i + vec3(0,0,0)), hash31(i + vec3(1,0,0)), u.x),
                mix(hash31(i + vec3(0,1,0)), hash31(i + vec3(1,1,0)), u.x), u.y);
  float b = mix(mix(hash31(i + vec3(0,0,1)), hash31(i + vec3(1,0,1)), u.x),
                mix(hash31(i + vec3(0,1,1)), hash31(i + vec3(1,1,1)), u.x), u.y);
  return mix(a, b, u.z);
}
// 3 octaves of 3-D value noise — breaks up the obvious single-scale pattern.
float fbm3(vec3 p) {
  float s = 0.0; float amp = 0.5; float norm = 0.0;
  for (int o = 0; o < 3; o++) { s += amp * valueNoise3(p); norm += amp; p *= 2.0; amp *= 0.5; }
  return s / norm;
}
// Interleaved-gradient noise (-0.5..0.5): cheap blue-noise-ish dither, no
// repeating diagonal lines like a white-noise hash.
float ditherNoise(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))) - 0.5;
}
`,ao=t=>`${Pt}
uniform sampler2D uSrc;
uniform sampler2D uDelta;
uniform float uFade;
uniform float uGain;
uniform float uTooth;
uniform float uToothScale;
void main() {
  vec4 accum = texture(uSrc, vUv);
  // uDelta is uploaded y-down straight from the 2D canvas (no FLIP_Y — that
  // pixel-store path forces a slow CPU-side conversion in several browsers),
  // so flip V here instead.
  vec4 d = texture(uDelta, vec2(vUv.x, 1.0 - vUv.y));
  vec3 deltaColor = d.rgb;
  float deltaAlpha = d.a;
  // Paper tooth: pigment catches on the raised grain and skips the pits, so
  // every deposit lands through the same static texture (a fixed noise field).
  float tooth = 1.0 - uTooth * (1.0 - valueNoise(gl_FragCoord.xy * uToothScale));
  deltaAlpha *= tooth;
  float fade = uFade;
  ${t.combine}
  outColor = accum;
}`,ro=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uSrc;
void main() {
  outColor = texture(uSrc, vUv);
}`,so=`${Pt}
uniform sampler2D uAccum;
uniform vec2 uTexel;
uniform float uDiffuse;
uniform float uEdge;
uniform float uVar;
uniform float uVarScale;
uniform float uVarSpeed;
uniform float uTime;
void main() {
  vec4 c = texture(uAccum, vUv);
  vec4 n = texture(uAccum, vUv + vec2(0.0, uTexel.y));
  vec4 s = texture(uAccum, vUv - vec2(0.0, uTexel.y));
  vec4 e = texture(uAccum, vUv + vec2(uTexel.x, 0.0));
  vec4 w = texture(uAccum, vUv - vec2(uTexel.x, 0.0));
  // Edge-aware weights: similar neighbours (in L + mass) bleed; edges resist.
  float kn = exp(-uEdge * (abs(c.x - n.x) * 3.0 + abs(c.a - n.a)));
  float ks = exp(-uEdge * (abs(c.x - s.x) * 3.0 + abs(c.a - s.a)));
  float ke = exp(-uEdge * (abs(c.x - e.x) * 3.0 + abs(c.a - e.a)));
  float kw = exp(-uEdge * (abs(c.x - w.x) * 3.0 + abs(c.a - w.a)));
  float ksum = kn + ks + ke + kw + 1e-5;
  // Mass diffuses plainly (the spread of pigment outward is legitimate)...
  float massAvg = (kn * n.a + ks * s.a + ke * e.a + kw * w.a) / ksum;
  // ...but colour is averaged PREMULTIPLIED by each neighbour's mass, so empty
  // (mass-0, L-0) cells add nothing to the colour — no pull toward black.
  vec3 colSum = kn * n.a * n.rgb + ks * s.a * s.rgb
              + ke * e.a * e.rgb + kw * w.a * w.rgb;
  float massSum = kn * n.a + ks * s.a + ke * e.a + kw * w.a + 1e-5;
  vec3 colAvg = colSum / massSum;
  // Below a hair of neighbour mass the premultiplied colour is undefined noise;
  // keep our own colour there (resolve hides it anyway since mass ~ 0).
  colAvg = mix(c.rgb, colAvg, step(1e-4, massSum - 1e-5));
  vec4 avg = vec4(colAvg, massAvg);
  // Wet/dry: a low-freq fbm (mean ~0.5) scales the rate around its base, so the
  // bleed speed varies organically across the body and drifts slowly in time.
  float wet = fbm3(vec3(gl_FragCoord.xy * uVarScale, uTime * uVarSpeed));
  float rate = clamp(uDiffuse * (1.0 - uVar + uVar * 2.0 * wet), 0.0, 1.0);
  // Sub-ulp write guard: where a channel's update is below ~half an fp16
  // storage step (ulp ≈ |value|·2^-11), write the INPUT value bit-exactly
  // instead. The target is RGBA16F, and a sub-ulp write is pure rounding
  // lottery: round-to-nearest discards it (the change was dead anyway), while
  // truncating drivers drop a full ulp on ~half of such writes — a slow
  // un-authored darkening/desaturation of every smooth painted region (per
  // frame, forever). Passing c through exactly costs nothing on either.
  // Both rounding modes now stop at the SAME tiny floor instead of diverging.
  vec4 delta = (avg - c) * rate;
  vec4 guard = vec4(greaterThan(abs(delta), abs(c) * 2.4e-4));
  outColor = c + delta * guard;
}`,io=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uAccum;
uniform vec2 uTexel;
uniform float uSharpen;
uniform float uSharpenChroma;
uniform float uRadius;
void main() {
  vec4 c = texture(uAccum, vUv);
  // Near ring: the immediate 4-neighbours (one texel out).
  vec4 near = (
    texture(uAccum, vUv + vec2(0.0, uTexel.y)) +
    texture(uAccum, vUv - vec2(0.0, uTexel.y)) +
    texture(uAccum, vUv + vec2(uTexel.x, 0.0)) +
    texture(uAccum, vUv - vec2(uTexel.x, 0.0))
  ) * 0.25;
  // Far ring: 4-neighbours uRadius texels out (the coarser reference).
  vec2 r = uTexel * uRadius;
  vec4 far = (
    texture(uAccum, vUv + vec2(0.0, r.y)) +
    texture(uAccum, vUv - vec2(0.0, r.y)) +
    texture(uAccum, vUv + vec2(r.x, 0.0)) +
    texture(uAccum, vUv - vec2(r.x, 0.0))
  ) * 0.25;
  vec4 band = near - far; // mid-scale detail, center cell excluded
  // Only sharpen where there's pigment.
  float mask = clamp(max(c.a, far.a) * 4.0, 0.0, 1.0);
  // NOTE: mass (alpha) is deliberately left untouched. Sharpening coverage
  // punches holes and shreds the fibres into specks; the roughness we want is
  // TONAL — contrast along the strands — so only lightness (and a touch of
  // chroma) is band-boosted, while the body stays cohesive.
  vec3 d = uSharpen * vec3(band.x, uSharpenChroma * band.yz) * mask;
  // ULP-FLOORED stepping — the fp16-safe form of micro-sharpening. A nudge
  // below one fp16 storage step can't be stored faithfully: round-to-nearest
  // discards it (the pass does nothing — old phone behaviour) and truncation
  // turns it into a full-ulp DOWNWARD carve on negative-band cells only (the
  // accidental desktop etch this replaces). So every nonzero nudge is floored
  // to ~one ulp of the channel, in the band's direction: it carves texture
  // out of FLAT regions too — that's the point of a compounding band-pass —
  // and a ≥1-ulp step is stored EXACTLY under both rounding modes, so the
  // etch is identical on every driver. Perfectly flat cells (band == 0) have
  // sign(d) == 0 and stay untouched; the carve rate is set by the pass
  // cadence (see sharpenEvery), not by driver rounding luck.
  vec3 stepUlp = max(abs(c.xyz) * 5.4e-4, vec3(1e-6));
  d = sign(d) * max(abs(d), stepUlp);
  c.xyz += d;
  c.x = clamp(c.x, 0.0, 1.0);
  outColor = c;
}`,co=t=>`${Pt}
uniform sampler2D uAccum;
uniform float uTime;
uniform sampler2D uBlue;
uniform float uBlueSize;
void main() {
  vec4 accum = texture(uAccum, vUv);
  ${t.evolve??""}
  outColor = accum;
}`,lo=`  vec3 bg = uBg;
  bg += uPaperGrain * ((valueNoise(fc * uPaperGrainScale) - 0.5)
        + 0.5 * (valueNoise(fc * uPaperGrainScale * 0.27 + 7.0) - 0.5));
  float warm = valueNoise(fc * uPaperGrainScale * 0.13 + 19.0) - 0.5;
  bg += uPaperChroma * warm * vec3(1.0, 0.0, -1.0);
  float speck = smoothstep(0.86, 0.97,
    texture(uBlue, fc * uPaperSpeckScale / uBlueSize).g);
  bg -= uPaperSpeck * speck * vec3(0.7, 0.85, 1.0); // browner-dark dirt`,uo=`uniform vec3 uBg;
uniform float uPaperGrain;
uniform float uPaperGrainScale;
uniform float uPaperSpeck;
uniform float uPaperSpeckScale;
uniform float uPaperChroma;
uniform sampler2D uBlue;
uniform float uBlueSize;`,fo=`${Pt}
${uo}
void main() {
  vec2 fc = gl_FragCoord.xy;
${lo}
  outColor = vec4((bg - uBg) * 4.0 + 0.5, 1.0);
}`,ho=(t,n)=>`${Pt}
uniform sampler2D uAccum;
uniform float uDither;
uniform float uGrain;
uniform float uGrainScale;
uniform vec3 uBg;
uniform sampler2D uPaper;
uniform sampler2D uBlue;
uniform float uBlueSize;
// Blue-noise mask (RGBA, four decorrelated channels): .r dither, .g specks,
// .b grain. Tiled in screen space; seamless so the repeat is invisible.
uniform float uTime;
void main() {
  vec4 accum = texture(uAccum, vUv);
  vec2 fc = gl_FragCoord.xy;
  // Paper ground pre-baked (see PAPER_BAKE_FRAG): decode the stored
  // deviation from uBg. The whole grain/chroma/speck computation ran once at
  // bake time instead of every resolved frame.
  vec3 bg = uBg + (texture(uPaper, vUv).rgb - 0.5) * 0.25;
  vec3 color;
  ${t.resolve}
  // Grain re-roughens smooth (diffused) regions, scaled by pigment presence so
  // bare paper stays clean. Blue noise .b — even, non-repeating.
  float ink = clamp(distance(color, bg) * 3.0, 0.0, 1.0);
  color += uGrain * (texture(uBlue, fc * uGrainScale / uBlueSize).b - 0.5) * ink;
  // Spatiotemporal blue-noise dither: blue noise .r rotated by the golden ratio
  // each frame, so over time it integrates to clean (anti-banding) with no
  // visible structure or tile.
  float bd = fract(texture(uBlue, fc / uBlueSize).r + uTime * 0.61803399) - 0.5;
  color += uDither * bd / 255.0;
  outColor = vec4(color, 1.0);
}`,mo="/fveld2/assets/blue_noise_LDR_RGBA_0-DEb-wTjH.png",po=(t={})=>{const n=t.pigment??dn(),o=t.background??"#efe7d6",a=t.radius??1.3,r=t.fade??.997,l=t.dither??0,i=t.depositGain??2.5,c=t.diffuse??0,u=t.tooth??0,f=t.toothScale??.3,h=t.diffuseEdge??0,E=t.diffuseVar??0,M=t.diffuseVarScale??.008,_=t.diffuseVarSpeed??.002,p=t.grain??0,m=t.grainScale??.6,v=t.sharpen??0,b=t.sharpenChroma??.1,B=t.sharpenRadius??3,G=t.paperGrain??0,O=t.paperGrainScale??.5,F=t.paperSpeck??0,I=t.paperSpeckScale??.7,X=t.paperChroma??0,D=Et(o);return x=>{const R=x.quality??null;let z=x.width,C=x.height,T=x.zoom??1,N=x.pixelRatio??1,q=z*T,k=C*T;const U=.7,J=2,Y=()=>{const le=(t.resolution??Math.min(N,J))*((R==null?void 0:R.resScale)??1),ue=(R==null?void 0:R.maxPaintPixels)??1/0,pe=Number.isFinite(ue)?Math.sqrt(ue/(q*k)):1/0;return Math.min(le,Math.max(U,pe))},$=Y();let g=Math.max(1,Math.round(q*$)),w=Math.max(1,Math.round(k*$));const A={...t,resolution:Math.min(t.resolution??1,1)},K=n.gl?to(g,w):null;if(!K)return console.info("[paint] WebGL2 unavailable — CPU fallback."),zt(A)(x);console.info("[paint] GPU backend active.");const{gl:e,canvas:de}=K;let xe=g/z,W=w/C,Pe=$,j=Pe*T,Ge=c*j*j;const Te=ht(e,mt,ao(n.gl)),we=n.gl.fadeInert===!0,Q=ht(e,mt,ho(n.gl)),ve=oo(e);let te=an(e,g,w),oe=null;const Ae=e.getUniformLocation(Te,"uFade"),_e=e.getUniformLocation(Te,"uGain");e.useProgram(Te),e.uniform1i(e.getUniformLocation(Te,"uSrc"),0),e.uniform1i(e.getUniformLocation(Te,"uDelta"),1),e.uniform1f(_e,i),e.uniform1f(e.getUniformLocation(Te,"uTooth"),u);const ge=e.getUniformLocation(Te,"uToothScale"),Ue=e.getUniformLocation(Q,"uBg"),De=e.getUniformLocation(Q,"uDither");e.useProgram(Q),e.uniform1i(e.getUniformLocation(Q,"uAccum"),0),e.uniform3f(Ue,D[0],D[1],D[2]),e.uniform1f(De,l),e.uniform1f(e.getUniformLocation(Q,"uGrain"),p);const qe=e.getUniformLocation(Q,"uGrainScale");e.uniform1f(e.getUniformLocation(Q,"uPaperGrain"),G);const Ne=e.getUniformLocation(Q,"uPaperGrainScale");e.uniform1f(e.getUniformLocation(Q,"uPaperSpeck"),F);const ze=e.getUniformLocation(Q,"uPaperSpeckScale");e.uniform1f(e.getUniformLocation(Q,"uPaperChroma"),X),e.uniform1i(e.getUniformLocation(Q,"uBlue"),2);const $e=e.getUniformLocation(Q,"uBlueSize"),Ke=e.getUniformLocation(Q,"uTime");e.uniform1f($e,256);const me=ht(e,mt,fo);let Ce=null,Ve=null,Je=null,it=null,je=null;if(me){const ie=e.getUniformLocation(me,"uBg");e.useProgram(me),e.uniform3f(ie,D[0],D[1],D[2]),e.uniform1f(e.getUniformLocation(me,"uPaperGrain"),G),e.uniform1f(e.getUniformLocation(me,"uPaperSpeck"),F),e.uniform1f(e.getUniformLocation(me,"uPaperChroma"),X),e.uniform1i(e.getUniformLocation(me,"uBlue"),2),Je=e.getUniformLocation(me,"uPaperGrainScale"),it=e.getUniformLocation(me,"uPaperSpeckScale"),je=e.getUniformLocation(me,"uBlueSize"),e.uniform1f(je,256),e.useProgram(Q),e.uniform1i(e.getUniformLocation(Q,"uPaper"),3),Ce=e.createTexture(),Ve=e.createFramebuffer()}const He=()=>{!me||!Ce||!Ve||(e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,Ce),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,g,w,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,Ve),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Ce,0),e.viewport(0,0,g,w),e.useProgram(me),ve(),e.bindFramebuffer(e.FRAMEBUFFER,null),e.activeTexture(e.TEXTURE0))},d=c>0?Math.min(16,Math.max(1,Math.round(.1/Ge))):1,S=c>0?ht(e,mt,so):null;let se=null,ae=null,y=null,s=!1;const V=ie=>{if(!S||ae==null)return;const le=Ge*d*ie;le>1&&!s&&(s=!0,console.warn(`[paint] diffusion rate-limited at worldScale ${j.toFixed(2)} (effective rate ${le.toFixed(2)} > 1, clamped) — the world-space bleed is slower than authored at this resolution.`)),e.useProgram(S),e.uniform1f(ae,Math.min(le,1))};S&&(e.useProgram(S),e.uniform1i(e.getUniformLocation(S,"uAccum"),0),ae=e.getUniformLocation(S,"uDiffuse"),y=e.getUniformLocation(S,"uTexel"),e.uniform2f(y,1/g,1/w),e.uniform1f(e.getUniformLocation(S,"uEdge"),h),e.uniform1f(e.getUniformLocation(S,"uVar"),E),e.uniform1f(e.getUniformLocation(S,"uVarScale"),M),e.uniform1f(e.getUniformLocation(S,"uVarSpeed"),_),se=e.getUniformLocation(S,"uTime"),V(1));const H=v>0?Math.min(512,Math.max(1,Math.round(.004/v))):1,L=v>0?ht(e,mt,io):null;let P=null,ne=null,re=null;L&&(e.useProgram(L),e.uniform1i(e.getUniformLocation(L,"uAccum"),0),P=e.getUniformLocation(L,"uSharpen"),e.uniform1f(P,v*H),e.uniform1f(e.getUniformLocation(L,"uSharpenChroma"),b),re=e.getUniformLocation(L,"uRadius"),ne=e.getUniformLocation(L,"uTexel"),e.uniform2f(ne,1/g,1/w));const Me=(ie,le)=>{e.useProgram(Te),e.uniform1f(ge,f/le),e.useProgram(Q),e.uniform1f(qe,m/le),e.uniform1f(Ne,O/ie),e.uniform1f(ze,I/ie),me&&(e.useProgram(me),e.uniform1f(Je,O/ie),e.uniform1f(it,I/ie)),L&&(e.useProgram(L),e.uniform1f(re,Math.max(B*le,1.5)))};Me(Pe,j);let ee=1;const ke=()=>{const ie=Math.max(1,Math.round((R==null?void 0:R.settleScale)??1));ie!==ee&&(ee=ie,V(ie),L&&(e.useProgram(L),e.uniform1f(P,v*H*ie)))},fe=n.gl.evolveEvery??1,ce=n.gl.evolve?ht(e,mt,co(n.gl)):null;let Re=null,Le=null;ce&&(Re=e.getUniformLocation(ce,"uTime"),Le=e.getUniformLocation(ce,"uBlueSize"),e.useProgram(ce),e.uniform1i(e.getUniformLocation(ce,"uAccum"),0),e.uniform1i(e.getUniformLocation(ce,"uBlue"),2),e.uniform1f(Le,256));let Xe=0;const at=document.createElement("canvas");at.width=g,at.height=w;const Ee=at.getContext("2d");if(!Ee)return zt(A)(x);Ee.lineCap="round",Ee.lineJoin="round",Ee.clearRect(0,0,g,w);let rt=!1,ct=0,Qe=0,Ze=0,At=0;const Wt=(ie,le,ue,pe)=>{if(!rt){rt=!0,ct=ie,Qe=le,Ze=ue,At=pe;return}ie<ct&&(ct=ie),le<Qe&&(Qe=le),ue>Ze&&(Ze=ue),pe>At&&(At=pe)};let Ut=!1,_t=0,Dt=0,kt=0,Ft=0;const $t=ie=>{const[le,ue,pe]=Et(ie);return`rgb(${le*255|0},${ue*255|0},${pe*255|0})`},pt=document.createElement("canvas");pt.width=g,pt.height=w;const Ie=pt.getContext("2d");if(!Ie)return zt(A)(x);Ie.lineCap="round",Ie.lineJoin="round";let Vt=0,Lt=!1;const It=e.createTexture();e.bindTexture(e.TEXTURE_2D,It),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,g,w,0,e.RGBA,e.UNSIGNED_BYTE,null);let Ht=!1;de.addEventListener("webglcontextlost",()=>{Ht=!0});let Yt=!1;const Gt=e.createTexture();e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,Gt),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.activeTexture(e.TEXTURE0);const gt=new Image;return gt.onload=()=>{Yt||(e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,Gt),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,gt),e.activeTexture(e.TEXTURE0),e.useProgram(Q),e.uniform1f($e,gt.width),Le&&(e.useProgram(ce),e.uniform1f(Le,gt.width)),me&&(e.useProgram(me),e.uniform1f(je,gt.width),He()))},gt.src=mo,He(),{deposit(ie,le,ue,pe,be){const Fe=Z(pe/i,0,1);if(Fe<=0)return;Ee.globalAlpha=Fe,Ee.fillStyle=$t(ue);const ye=(be??a)*xe,Se=ie*xe,Oe=le*W;Ee.beginPath(),Ee.arc(Se,Oe,ye,0,st),Ee.fill(),Wt(Se-ye,Oe-ye,Se+ye,Oe+ye)},stroke(ie,le,ue,pe,be,Fe,ye,Se){const Oe=Z(Fe/i,0,1);if(Oe<=0)return;Vt=Oe,Lt=!0,Ie.globalCompositeOperation=Se?"destination-over":"source-over",Ie.globalAlpha=1,Ie.strokeStyle=$t(be);const lt=Math.max(Math.max(1,xe),ye*xe);Ie.lineWidth=lt;const et=ie*xe,ut=le*W,dt=ue*xe,ft=pe*W;Ie.beginPath(),Ie.moveTo(et,ut),Ie.lineTo(dt,ft),Ie.stroke(),Se&&(Ie.globalCompositeOperation="source-over");const vt=lt/2;Wt(Math.min(et,dt)-vt,Math.min(ut,ft)-vt,Math.max(et,dt)+vt,Math.max(ut,ft)+vt)},step(ie){Xe+=1,ke();const le=2;let ue=!1,pe=0,be=0,Fe=0,ye=0;if(rt&&(pe=Math.max(0,Math.floor(ct-le)),be=Math.max(0,Math.floor(Qe-le)),Fe=Math.min(g,Math.ceil(Ze+le)),ye=Math.min(w,Math.ceil(At+le)),ue=Fe>pe&&ye>be),Lt){if(ue){const xt=Fe-pe,Xt=ye-be;Ee.globalAlpha=Vt,Ee.globalCompositeOperation="destination-over",Ee.drawImage(pt,pe,be,xt,Xt,pe,be,xt,Xt),Ee.globalCompositeOperation="source-over",Ee.globalAlpha=1,Ie.clearRect(pe,be,xt,Xt)}Lt=!1}let Se=ue?pe:_t,Oe=ue?be:Dt,lt=ue?Fe:kt,et=ue?ye:Ft;ue&&Ut&&(_t<Se&&(Se=_t),Dt<Oe&&(Oe=Dt),kt>lt&&(lt=kt),Ft>et&&(et=Ft));const ut=ue||Ut;ut&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,It),e.pixelStorei(e.UNPACK_ROW_LENGTH,g),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Se),e.pixelStorei(e.UNPACK_SKIP_ROWS,Oe),e.texSubImage2D(e.TEXTURE_2D,0,Se,Oe,lt-Se,et-Oe,e.RGBA,e.UNSIGNED_BYTE,at),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0)),ue&&Ee.clearRect(pe,be,Fe-pe,ye-be),rt=!1,Ut=ue,_t=pe,Dt=be,kt=Fe,Ft=ye;const dt=lt-Se,ft=et-Oe,vt=we&&ut&&dt*ft<=.45*g*w;if(!we||ut)if(e.useProgram(Te),e.uniform1f(Ae,Math.pow(r,ie)),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.srcTexture()),te.bindDst(),vt){const xt=w-et;e.enable(e.SCISSOR_TEST),e.scissor(Se,xt,dt,ft),ve(),e.disable(e.SCISSOR_TEST),te.blitDstToSrc(Se,xt,dt,ft)}else ve(),te.swap();ce&&Xe%fe===0&&(e.useProgram(ce),e.uniform1f(Re,Xe),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.srcTexture()),te.bindDst(),ve(),te.swap()),S&&Xe%(d*ee)===0&&(e.useProgram(S),e.uniform1f(se,Xe),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.srcTexture()),te.bindDst(),ve(),te.swap()),L&&(R==null?void 0:R.sharpen)!==!1&&Xe%(H*ee)===0&&(e.useProgram(L),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.srcTexture()),te.bindDst(),ve(),te.swap()),e.bindFramebuffer(e.FRAMEBUFFER,null)},canvas:de,rescale(ie,le,ue,pe){z=Math.max(1,ie),C=Math.max(1,le),ue!=null&&(N=ue),pe!=null&&(T=pe),q=z*T,k=C*T;const be=Y(),Fe=Math.max(1,Math.round(q*be)),ye=Math.max(1,Math.round(k*be));if(xe=Fe/z,W=ye/C,Pe=be,j=be*T,Ge=c*j*j,V(ee),Me(be,j),Fe===g&&ye===w)return;oe??(oe=ht(e,mt,ro));const Se=an(e,Fe,ye);e.useProgram(oe),e.uniform1i(e.getUniformLocation(oe,"uSrc"),0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.srcTexture()),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),Se.bindDst(),ve(),Se.swap(),te.dispose(),te=Se,g=Fe,w=ye,de.width=g,de.height=w,at.width=g,at.height=w,Ee.lineCap="round",Ee.lineJoin="round",pt.width=g,pt.height=w,Ie.lineCap="round",Ie.lineJoin="round",Lt=!1,rt=!1,Ut=!1,e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,It),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,g,w,0,e.RGBA,e.UNSIGNED_BYTE,null),e.activeTexture(e.TEXTURE0),S&&(e.useProgram(S),e.uniform2f(y,1/g,1/w)),L&&(e.useProgram(L),e.uniform2f(ne,1/g,1/w)),He(),console.info(`[paint] buffer rescaled to ${g}×${w} (res ${be.toFixed(2)}).`)},present(){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,g,w),e.useProgram(Q),e.uniform1f(Ke,Xe),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,te.srcTexture()),ve()},composite(ie,le,ue){this.present(),ie.drawImage(de,0,0,le,ue)},dispose(){Yt=!0,!e.isContextLost()&&!Ht&&(te.dispose(),e.deleteTexture(It),e.deleteTexture(Gt),e.deleteProgram(Te),e.deleteProgram(Q),S&&e.deleteProgram(S),L&&e.deleteProgram(L),ce&&e.deleteProgram(ce),oe&&e.deleteProgram(oe),me&&e.deleteProgram(me),Ce&&e.deleteTexture(Ce),Ve&&e.deleteFramebuffer(Ve)),no(e)}}}},tt=(t,n,o)=>{const a=Math.sin(t*127.1+n*311.7+o*74.7)*43758.5453;return a-Math.floor(a)},go=(t={})=>{const{strokeWeight:n=.45,strokeRadius:o=1.4,valueWidth:a=.6,widthJitter:r=.4,minRadius:l=.6,spacing:i=.5,tremor:c=0,shadowOffset:u=0,shadowOffsetWidth:f=0,shadowAngle:h=.79,shadowDarken:E=.5,knotProbability:M=.04,knotRadius:_=2.2,knotWeight:p=1.4,blotProbability:m=.003,blotRadius:v=2.4,blotWeight:b=1.8,coreRadius:B=3,coreWeight:G=2.2}=t,O=(R,z)=>R+(tt(R,z,2)-.5)*2*c,F=(R,z)=>z+(tt(R,z,3)-.5)*2*c,I=Math.cos(h),X=Math.sin(h),D=E>0&&(u>0||f>0),x=R=>{const[z,C,T]=Et(R),N=1-E;return[z*N,C*N,T*N]};return R=>({mark(z,C,T,N){var w;const q=D&&((w=R.quality)==null?void 0:w.shadow)!==!1,k=O(C.x,C.y),U=F(C.x,C.y);if(!T){B>0&&z.deposit(k,U,N,G,B);return}const J=O(T.x,T.y),Y=F(T.x,T.y),$=(1+a*(C.value*2-1))*(1-r/2+r*tt(C.x,C.y,4))*(C.width??1),g=Math.max(l,o*Math.max(0,$));if(z.stroke){if(q){const A=u+f*g,K=I*A,e=X*A;z.stroke(J+K,Y+e,k+K,U+e,x(N),n,g*2,!0)}z.stroke(J,Y,k,U,N,n,g*2)}else{const A=k-J,K=U-Y,e=Math.hypot(A,K),de=Math.max(1,Math.ceil(e/i)),xe=n*Math.min(1,i/(2*g));for(let W=1;W<=de;W++){const Pe=W/de;z.deposit(J+A*Pe,Y+K*Pe,N,xe,g)}}if(tt(C.x,C.y,5)<M){const A=_*Z($,.4,2)*(.6+tt(C.x,C.y,6));z.deposit(k,U,N,p,A)}if(tt(C.x,C.y,7)<m)for(let A=0;A<3;A++){const K=k+(tt(C.x,C.y,8+A)-.5)*4,e=U+(tt(C.x,C.y,11+A)-.5)*4,de=v*(.5+tt(C.x,C.y,14+A));z.deposit(K,e,N,b,de)}}})},vo=(t,n)=>{const o=Math.sin(t*12.9898+n*78.233)*43758.5453;return o-Math.floor(o)},xo=(t,n)=>{const o=Math.sin(t*39.3468+n*11.135)*24634.6345;return o-Math.floor(o)},bo=t=>{const{hueCenter:n=1.8,hueSpread:o=.7,zoneScale:a=.0022,zoneWarp:r=0,zoneWarpScale:l=a,subScale:i=.012,subInfluence:c=.35,armInfluence:u=.25,ageInfluence:f=.15,hueDrift:h=0,hueDriftScale:E=.02,chromaBase:M=.045,chromaVar:_=.05,chromaScale:p=.006,chromaValue:m=0,speckField:v=.15,speckScale:b=.004,speckArm:B=.3,speckDepthBias:G=.35,speckDepthFull:O=60,speckJitter:F=.1,speckBias:I=0,speckThreshold:X=.78,speckSoftness:D=.22,speckHue:x=.6,speckHueSpread:R=.35,speckChroma:z=.14,baseLightness:C=.62,valueLightness:T=0,depthLightness:N=0,lightnessVar:q=.06,lightnessScale:k=.006}=t;return U=>{const{rng:J,clock:Y}=U,$=Be(J.next),g=Be(J.next),w=Be(J.next),A=Be(J.next),K=Be(J.next),e=Be(J.next),de=Be(J.next),xe=Be(J.next);return W=>{let Pe=W.x,j=W.y;r>0&&(Pe+=g(W.x*l,W.y*l)*r,j+=w(W.x*l,W.y*l)*r);const Ge=($(Pe*a,j*a)+1)/2,Te=(A(W.x*i,W.y*i)+1)/2;let we=Ge*(1-c)+Te*c;we+=u*(W.armIndex*.61803%1-.5),we+=f*(Math.min(W.age*4e-4,1)-.5),we=Z(we,0,1);let Q=n;h!==0&&Y&&(Q+=h*de(Y.time*E,0));let ve=Q+(we-.5)*2*o,te=M+_*((K(W.x*p,W.y*p)+1)/2);m!==0&&(te+=m*(W.value-.5));const oe=Z(W.depth/O,0,1),Ae=W.armIndex*.7548%1,_e=.5+v*xe(W.x*b,W.y*b)+B*(Ae-.5)*2+G*oe*Ae+F*(vo(W.x,W.y)-.5)*2+I,ge=Z((_e-X)/Math.max(D,1e-4),0,1);if(ge>0){const Ne=ge*ge*(3-2*ge),ze=x+(W.armIndex*.383%1-.5)*2*R+(xo(W.x,W.y)-.5)*.1;ve+=(ze-ve)*Ne,te+=(z-te)*Ne}te=Math.max(te,0);let Ue=C;T!==0&&(Ue+=T*(W.value-.5)),N!==0&&(Ue+=N*(Math.min(W.depth*.02,1)-.5)),Ue+=q*e(W.x*k,W.y*k);const De=te*Math.cos(ve),qe=te*Math.sin(ve);return Kn(Z(Ue,0,1),De,qe)}}},To=(t,n,o)=>({rng:a,width:r,height:l})=>({spawn(){const i=r/2,c=l/2,u=Math.min(r,l)/2,f=[];for(let h=0;h<t;h++){const E=u*n*Math.pow(a.next(),o),M=a.range(0,st);f.push({x:i+Math.cos(M)*E,y:c+Math.sin(M)*E,heading:a.range(0,st),armIndex:h,seed:a.int(0,2**31-1)})}return f}}),wo={name:"lichen",stepsPerFrame:3,scale:{reference:900,min:.45,max:1,zoomMax:3,zoomReference:1900},continuous:{horizon:800,targetTips:60,spawnBatch:8,advanceEvery:20},substrate:t=>{const n=t.scale??1;return Nn(On(Bn(tn({scale:.0042/n,influence:.6,vectorField:!0,octaves:3,warp:120*n,warpScale:.0016/n,driftX:1.5*n,driftY:1*n}),zn(Wn({sinks:[{x:.5,y:.5}],influence:.15,falloff:1,core:30*n,valueRadius:1}),{scale:.0045/n,octaves:2,bias:-.5,outwardScale:5.4,rimContain:3.1,driftX:6*n,driftY:6*n}),.58),tn({scale:.0016/n,octaves:2,driftX:1.5*n,driftY:1*n}),{mix:.85,contrast:1.5}),{cell:8,decay:.6,saturation:50,valueShift:.2,repel:.3})(t)},spawner:t=>{const n=Math.min(t.width,t.height)/900;return To(Math.round(80*n),.5,1)(t)},growth:t=>{var r,l;const n=Math.min(t.width,t.height)/900,o=t.scale??1,a=((r=t.quality)==null?void 0:r.horizonScale)??1;return Vn({stepLength:1.7*o,stepValueInfluence:.3,stepDepthFalloff:.999,branchStepScale:.88,minStep:.85*o,wander:.13,substrateWeight:.68,branchProbability:.085,branchAngle:.7,branchAngleJitter:.5,branchValueInfluence:.35,branchMinDepth:Math.round(5*n),branchDecay:.99,pressureRadius:11*o,pressureWeight:.16,pressureValueFalloff:1,pressureCap:.35,collisionRadius:2*o,vigorJitter:.5,overtake:.58,passOnLoss:.45,bloomOnLoss:.06,bloomTips:6,bloomStepsMin:1,bloomStepsMax:10,bloomJitter:.85,burstProbability:2e-4,burstArms:20,burstStepsMin:0,burstStepsMax:200,burstValueFalloff:.5,girthVar:.65,girthSwell:.35,girthRate:.05,girthRadius:11*o,girthSaturation:20,lifeMin:900,lifeMax:3200,maxTips:Math.max(8,Math.round(64*(((l=t.quality)==null?void 0:l.tipScale)??1)*(t.colonyScale??1))),horizon:Math.round(1900*a),depositOnGrow:!0,maxNodes:Math.round(Math.max(15e4,22e4*n*n)*a)})(t)},renderer:Hn({background:"#f3ecdc",ink:"#1b160f",baseWidth:1.5,minWidth:.6,valueWidth:.55,gapProbability:.05,tremor:.6,knotProbability:.01,knotScale:1.8,blotProbability:.008,coreRadius:3,speckCount:1500,speckRadius:.65,speckBias:.8,fadeBands:48,fadeGamma:1.2}),paint:t=>{const n=t.scale??1;return po({pigment:Zn({massGain:5,massCap:3,massDecay:.002,massDecayPow:1,lightnessDecay:1e-4,chromaDecay:5e-4,mixFloor:.2,chromaPop:.15,hueSpin:.5,targetL:.9,brightRegulate:1e-4,lVar:.2,cVar:.6,varScale:.01,varSpeed:.001,targetC:.55,chromaRegulate:1e-5,hueDrift:.0045,hueDriftScale:.012,grain:.05,show:.93}),background:"#f3ecdc",radius:1.4*n,diffuse:.018*n,diffuseEdge:.5,diffuseVar:1.5,diffuseVarScale:.04,diffuseVarSpeed:.003,sharpen:.001,sharpenChroma:.8,sharpenRadius:2*n,tooth:1,toothScale:1/n,grain:.1,grainScale:1/n,dither:1.2,paperGrain:.03,paperGrainScale:.5,paperSpeck:.08,paperSpeckScale:2.7,paperChroma:.002})(t)},color:t=>{const n=t.scale??1;return bo({hueCenter:1.85,hueSpread:.72,zoneScale:.0026/n,zoneWarp:120*n,zoneWarpScale:.16/n,subScale:.011/n,subInfluence:.35,armInfluence:.28,ageInfluence:.15,hueDrift:.25,hueDriftScale:.02,chromaBase:.03,chromaVar:.1,chromaScale:.006/n,speckField:.08,speckScale:.005/n,speckArm:.2,speckDepthBias:.42,speckDepthFull:60,speckJitter:.1,speckThreshold:.82,speckSoftness:.24,speckHue:.5,speckHueSpread:-.22,speckChroma:.115,baseLightness:.66,valueLightness:-.6,depthLightness:.42,lightnessVar:.06,lightnessScale:.006/n})(t)},brush:t=>{const n=t.scale??1;return go({strokeWeight:.95,strokeRadius:1.3*n,minRadius:.9*n,valueWidth:1.4,widthJitter:.3,tremor:.1*n,shadowOffset:2.5*n,shadowOffsetWidth:.5,shadowAngle:.79,shadowDarken:.46,knotProbability:.22,knotRadius:2*n,knotWeight:1,blotProbability:.02,blotRadius:2.2*n,blotWeight:1.3,coreRadius:1*n,coreWeight:10})(t)}},fn=document.querySelector("#sketch");if(!fn)throw new Error('Missing <canvas id="sketch"> in the document.');Cn(fn,wo);
