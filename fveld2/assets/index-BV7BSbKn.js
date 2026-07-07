var xt=Object.defineProperty;var bt=(e,t,o)=>t in e?xt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var qe=(e,t,o)=>bt(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function yt(e,t={}){const{onResize:o,maxDpr:a=2,minDpr:r=1}=t,l=e.getContext("2d");if(!l)throw new Error("Unable to acquire a 2D rendering context.");const i={canvas:e,ctx:l,width:0,height:0},u=()=>{const h=Math.min(Math.max(window.devicePixelRatio||1,r),a),p=window.innerWidth,x=window.innerHeight;e.width=Math.floor(p*h),e.height=Math.floor(x*h),i.width=p,i.height=x,l.setTransform(h,0,0,h,0,0),o==null||o(i)};return u(),window.addEventListener("resize",u),i}function wt(e){let t=0,o=!1,a=0,r=0,l=0;const i=u=>{const h=(u-a)/1e3,p=(u-r)/1e3,x=Math.min(p,1/30);r=u,e({time:h,delta:x,rawDelta:p,frame:l}),l+=1,t=requestAnimationFrame(i)};return{start(){o||(o=!0,a=performance.now(),r=a,l=0,t=requestAnimationFrame(i))},stop(){o&&(o=!1,cancelAnimationFrame(t))},get running(){return o}}}const Tt=(e=120,t=.05)=>{const o=new Float64Array(e),a=new Float64Array(e);let r=0,l=0,i=0,u=0;return{record(h){o[l]=h,l=(l+1)%e,r<e&&(r+=1),i=u===0?h:i+t*(h-i),u+=1},get ema(){return i},p75(){return r===0?0:(a.set(o.subarray(0,r)),a.subarray(0,r).sort()[Math.min(r-1,Math.floor(r*.75))]??0)},worst(){let h=0;for(let p=0;p<r;p++){const x=o[p]??0;x>h&&(h=x)}return h},get count(){return u}}};function Ve(e=Date.now()){let t=e>>>0;const o=()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296},a=(r,l)=>r+o()*(l-r);return{next:o,range:a,int:(r,l)=>Math.floor(a(r,l+1)),pick:r=>r[Math.floor(o()*r.length)]}}const Et="#1b160f",Mt=1/60,it=(e,t)=>{for(let o=t.length-1;o>0;o--){const a=e.int(0,o),r=t[o];t[o]=t[a],t[a]=r}return t};function St(e,t){var m,R,G,n,M,z,A;const o=typeof location<"u"?new URLSearchParams(location.search):null,a=o==null?void 0:o.get("seed"),r=a!=null&&Number.isFinite(Number(a))?Math.floor(Number(a)):t.seed??Math.floor(Math.random()*2147483647),l=(o==null?void 0:o.has("stats"))??!1,i=Math.floor(Number((o==null?void 0:o.get("frames"))??0))||0;console.info(`[${t.name}] seed: ${r}`);const u=t.stepsPerFrame??4,h=((m=t.scale)==null?void 0:m.reference)??900,p=((R=t.scale)==null?void 0:R.min)??.35,x=((G=t.scale)==null?void 0:G.max)??1,b=t.continuous??null,E=((n=t.layers)==null?void 0:n.count)??1,_=((M=t.layers)==null?void 0:M.fade)??.2;let S=null,y=null,v=!0,w=!1;const C={time:0},N=(c,d,f,g)=>{const D=Ve(r),j=c>0?f/c:1,Q=Math.min(Math.max(Math.min(c,d)/h,p),x),Z={rng:D,width:c,height:d,clock:C,pixelRatio:j,scale:Q},I=t.substrate(Z),q=t.spawner(Z),ue=t.renderer(Z),Y={...Z,substrate:I},me=t.growth(Y),ie=t.paint?t.paint(Z):null,ee=t.color?t.color({...Z,substrate:I}):null,fe=t.brush?t.brush(Z):null;ie&&!b&&console.warn(`[${t.name}] paint is ignored outside continuous mode.`);const te=[];b?te.push(...it(D,q.spawn())):me.init(q.spawn());let oe=null;if(!b){const de=document.createElement("canvas");de.width=f,de.height=g;const ce=de.getContext("2d");if(!ce)throw new Error("Unable to acquire a 2D context for the layer buffer.");ce.setTransform(f/c,0,0,g/d,0,0),ue.clear(ce,c,d),oe={canvas:de,ctx:ce}}return{rng:D,substrate:I,spawner:q,renderer:ue,growthCtx:Y,growth:me,layer:0,finished:!b&&E<1,baked:oe,spawnQueue:te,lastAdvance:0,paint:b?ie:null,color:ee,brush:fe,paintSince:0}},B=c=>{var f;const d=(f=c.paint)==null?void 0:f.canvas;d&&(d.style.position="fixed",d.style.inset="0",d.style.width="100vw",d.style.height="100vh",d.style.display="block",d.style.pointerEvents="none",e.insertAdjacentElement("afterend",d),y=d)},T=yt(e,{maxDpr:(z=t.pixelRatio)==null?void 0:z.max,minDpr:(A=t.pixelRatio)==null?void 0:A.min,onResize:({width:c,height:d,canvas:f})=>{var g,D;y&&(y.remove(),y=null),(D=(g=S==null?void 0:S.paint)==null?void 0:g.dispose)==null||D.call(g),S=N(c,d,f.width,f.height),B(S),v=!0}}),F=c=>{const d=c.paint;if(!d)return;const{color:f,brush:g}=c,D=c.growth.scene.nodes,j=c.paintSince;let Q=0,Z=D.length;for(;Q<Z;){const I=Q+Z>>>1;D[I].age<j?Q=I+1:Z=I}for(let I=Q;I<D.length;I++){const q=D[I];if(q.parentIndex===-2)continue;const ue=f?f({x:q.x,y:q.y,value:q.value,depth:q.depth,age:q.age,armIndex:q.armIndex}):Et,Y=q.parentIndex>=0?D[q.parentIndex]??null:null;if(g){g.mark(d,q,Y,ue);continue}if(!Y){d.deposit(q.x,q.y,ue,.8);continue}const me=q.x-Y.x,ie=q.y-Y.y,ee=Math.max(1,Math.ceil(Math.hypot(me,ie)));for(let fe=1;fe<=ee;fe++){const te=fe/ee;d.deposit(Y.x+me*te,Y.y+ie*te,ue,.45)}}c.paintSince=c.growth.scene.age+1},O=(c,d,f)=>{var Y;const{growth:g,renderer:D,substrate:j,spawner:Q,rng:Z}=c,I=b;if(!f){for(let fe=0;fe<u;fe++)g.step();const me=I.targetTips??64,ie=I.spawnBatch??2;g.scene.tipCount<me&&(c.spawnQueue.length===0&&(c.spawnQueue=it(Z,Q.spawn())),g.init(c.spawnQueue.splice(0,ie)));const ee=I.advanceEvery??0;ee>0&&g.scene.age-c.lastAdvance>=ee&&((Y=j.advance)==null||Y.call(j),c.lastAdvance=g.scene.age)}const{width:q,height:ue}=T;if(c.paint){f||F(c),c.paint.step(1),c.paint.canvas&&c.paint.present&&y?c.paint.present():c.paint.composite(T.ctx,q,ue);return}D.clear(T.ctx,q,ue),D.render({ctx:T.ctx,width:q,height:ue,scene:g.scene,substrate:j,time:d,layer:0,horizon:I.horizon})},k=(c,d,f)=>{var I;const{renderer:g,substrate:D}=c,j=c.baked,{width:Q,height:Z}=T;if(!f&&!c.finished){for(let q=0;q<u;q++)if(v=!0,!c.growth.step()){if(g.fade(j.ctx,Q,Z,_),g.render({ctx:j.ctx,width:Q,height:Z,scene:c.growth.scene,substrate:D,time:d,layer:c.layer}),(I=D.advance)==null||I.call(D),D.deposit){const ue=D.deposit.bind(D);for(const Y of c.growth.scene.nodes)ue(Y.x,Y.y,1)}c.layer+=1,c.layer>=E?c.finished=!0:(c.growth=t.growth(c.growthCtx),c.growth.init(c.spawner.spawn()));break}}v&&(v=!1,T.ctx.drawImage(j.canvas,0,0,Q,Z),c.finished||g.render({ctx:T.ctx,width:Q,height:Z,scene:c.growth.scene,substrate:D,time:d,layer:c.layer}))},X=()=>{const c=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),d=`${t.name}-${r}-${c}.png`;S!=null&&S.paint&&S.paint.composite(T.ctx,T.width,T.height);const f=document.createElement("a");f.href=e.toDataURL("image/png"),f.download=d,f.click(),console.info(`[${t.name}] captured ${d}`)};console.info("[keys] space = pause (let the paint settle), c = capture PNG"),window.addEventListener("keydown",c=>{c.code==="Space"?(c.preventDefault(),w=!w,console.info(`[${t.name}] ${w?"paused — paint still settling, press space to resume":"resumed"}`)):(c.key==="c"||c.key==="C")&&X()});const L=Tt();let U=0;const $=wt(c=>{if(S){if(c.frame>0&&L.record(c.rawDelta),l&&c.time-U>=1){U=c.time;const d=g=>(g*1e3).toFixed(1),f=S.growth.scene;console.info(`[stats] ema ${d(L.ema)}ms  p75 ${d(L.p75())}ms  worst ${d(L.worst())}ms  | nodes ${f.nodes.length}  tips ${f.tipCount}  age ${f.age}${f.done?"  DONE":""}`)}w||(C.time+=Mt),b?O(S,C.time,w):k(S,C.time,w),i>0&&c.frame+1>=i&&$.stop()}});$.start()}const Be=Math.PI*2,H=(e,t,o)=>Math.min(Math.max(e,t),o),Re=(e,t,o)=>e+(t-e)*o,ct=(e,t)=>{let o=(t-e)%Be;return o>Math.PI?o-=Be:o<-Math.PI&&(o+=Be),o},Rt=(e,t,o=.5)=>a=>{const r=e(a),l=t(a),i={sample(u,h){const p=r.sample(u,h),x=l.sample(u,h),b=p.influence*(1-o),E=x.influence*o;let _=0,S=0;p.direction!==void 0&&(_+=Math.cos(p.direction)*b,S+=Math.sin(p.direction)*b),x.direction!==void 0&&(_+=Math.cos(x.direction)*E,S+=Math.sin(x.direction)*E);const y=Math.hypot(_,S);return{direction:y>1e-6?Math.atan2(S,_):void 0,influence:Math.min(1,y),value:Re(p.value,x.value,o)}}};return(r.deposit||l.deposit)&&(i.deposit=(u,h,p)=>{var x,b;(x=r.deposit)==null||x.call(r,u,h,p),(b=l.deposit)==null||b.call(l,u,h,p)}),(r.advance||l.advance)&&(i.advance=()=>{var u,h;(u=r.advance)==null||u.call(r),(h=l.advance)==null||h.call(l)}),i},kt=(e,t={})=>{const{cell:o=8,decay:a=.5,saturation:r=5,valueShift:l=.3,repel:i=.25}=t;return u=>{const h=e(u),p=Math.max(2,Math.ceil(u.width/o)),x=Math.max(2,Math.ceil(u.height/o)),b=new Float32Array(p*x),E=(y,v)=>{const w=H(Math.floor(y),0,p-1),C=H(Math.floor(v),0,x-1);return b[C*p+w]??0},_=(y,v)=>Math.min(1,E(y/o,v/o)/r);return{sample(y,v){const w=h.sample(y,v),C=_(y,v),N=H(w.value-l*C,0,1);if(i<=0||C<=0)return{...w,value:N};const B=_(y+o,v)-_(y-o,v),T=_(y,v+o)-_(y,v-o),F=Math.hypot(B,T);if(F<1e-4)return{...w,value:N};const O=i*C;let k=-B/F*O,X=-T/F*O;w.direction!==void 0&&(k+=Math.cos(w.direction)*w.influence,X+=Math.sin(w.direction)*w.influence);const L=Math.hypot(k,X);return{direction:L>1e-6?Math.atan2(X,k):w.direction,influence:Math.min(1,L),value:N}},deposit(y,v,w){var B;const C=Math.floor(y/o),N=Math.floor(v/o);for(let T=-1;T<=1;T++)for(let F=-1;F<=1;F++){const O=C+F,k=N+T;if(O<0||k<0||O>=p||k>=x)continue;const X=F===0&&T===0?1:.35;b[k*p+O]=(b[k*p+O]??0)+w*X}(B=h.deposit)==null||B.call(h,y,v,w)},advance(){var y;for(let v=0;v<b.length;v++){const w=b[v]??0;b[v]=w*a}(y=h.advance)==null||y.call(h)}}}},At=(e,t,o={})=>{const{mix:a=1,combine:r="lerp",contrast:l=0,bias:i=.5}=o;return u=>{const h=e(u),p=t(u),x={sample(b,E){const _=h.sample(b,E),S=p.sample(b,E).value;let y=r==="multiply"?_.value*Re(1,S,a):Re(_.value,S,a);return l>0&&(y=(y-i)*(1+l)+.5),{direction:_.direction,influence:_.influence,value:H(y,0,1)}}};return h.deposit&&(x.deposit=h.deposit.bind(h)),(h.advance||p.advance)&&(x.advance=()=>{var b,E;(b=h.advance)==null||b.call(h),(E=p.advance)==null||E.call(p)}),x}},mt=Math.sqrt(3),Pt=.5*(mt-1),Ke=(3-mt)/6,lt=e=>Math.floor(e)|0,ut=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function we(e=Math.random){const t=Ut(e),o=new Float64Array(t).map(r=>ut[r%12*2]),a=new Float64Array(t).map(r=>ut[r%12*2+1]);return function(l,i){let u=0,h=0,p=0;const x=(l+i)*Pt,b=lt(l+x),E=lt(i+x),_=(b+E)*Ke,S=b-_,y=E-_,v=l-S,w=i-y;let C,N;v>w?(C=1,N=0):(C=0,N=1);const B=v-C+Ke,T=w-N+Ke,F=v-1+2*Ke,O=w-1+2*Ke,k=b&255,X=E&255;let L=.5-v*v-w*w;if(L>=0){const m=k+t[X],R=o[m],G=a[m];L*=L,u=L*L*(R*v+G*w)}let U=.5-B*B-T*T;if(U>=0){const m=k+C+t[X+N],R=o[m],G=a[m];U*=U,h=U*U*(R*B+G*T)}let $=.5-F*F-O*O;if($>=0){const m=k+1+t[X+1],R=o[m],G=a[m];$*=$,p=$*$*(R*F+G*O)}return 70*(u+h+p)}}function Ut(e){const o=new Uint8Array(512);for(let a=0;a<512/2;a++)o[a]=a;for(let a=0;a<512/2-1;a++){const r=a+~~(e()*(256-a)),l=o[a];o[a]=o[r],o[r]=l}for(let a=256;a<512;a++)o[a]=o[a-256];return o}const ht=(e={})=>{const{scale:t=.003,influence:o=.6,rotations:a=2,octaves:r=1,lacunarity:l=2,gain:i=.5,warp:u=0,warpScale:h=t,driftX:p=0,driftY:x=0,vectorField:b=!1}=e;return E=>{const{rng:_,clock:S}=E,y=we(_.next),v=we(_.next),w=we(_.next),C=we(_.next),N=b?we(_.next):null,B=(T,F,O)=>{let k=0,X=1,L=1,U=0;for(let $=0;$<r;$++)k+=T(F*L,O*L)*X,U+=X,X*=i,L*=l;return k/U};return{sample(T,F){if(p!==0||x!==0){const $=(S==null?void 0:S.time)??0;T+=p*$,F+=x*$}let O=T,k=F;u>0&&(O+=w(T*h,F*h)*u,k+=C(T*h,F*h)*u);const X=O*t,L=k*t;return{direction:N?Math.atan2(B(N,X,L),B(y,X,L)):B(y,X,L)*a*Math.PI,influence:o,value:(B(v,X,L)+1)/2}}}}},Dt=(e,t={})=>{const{scale:o=.0024,octaves:a=2,lacunarity:r=2,gain:l=.5,bias:i=.35,outwardScale:u=.7,rimContain:h=.65,driftX:p=0,driftY:x=0}=t;return b=>{const E=e(b),_=we(b.rng.next),S=b.width/2,y=b.height/2,v=Math.max(1,Math.min(b.width,b.height)/2),w=(N,B)=>{let T=0,F=1,O=1,k=0;for(let X=0;X<a;X++)T+=_(N*O,B*O)*F,k+=F,F*=l,O*=r;return T/k},C={sample(N,B){var L;const T=E.sample(N,B);if(T.direction===void 0)return T;const F=((L=b.clock)==null?void 0:L.time)??0,O=w((N+p*F)*o,(B+x*F)*o);let k=H(O+i,-1,1);if(h<1){const U=Math.hypot(N-S,B-y)/v,$=H((U-h)/(1-h),0,1);k=Re(k,1,$*$*(3-2*$))}const X=k>=0;return{direction:X?T.direction:T.direction+Math.PI,influence:T.influence*(X?k:-k*u),value:T.value}}};return E.deposit&&(C.deposit=E.deposit.bind(E)),E.advance&&(C.advance=E.advance.bind(E)),C}},_t=e=>{const{sinks:t,influence:o=.9,falloff:a=1,core:r=8,valueRadius:l=120}=e;return({width:i,height:u})=>{const h=i/2,p=u/2,x=Math.min(i,u),b=t.map(E=>({x:h+(E.x-.5)*x,y:p+(E.y-.5)*x,weight:E.weight??1,swirl:E.swirl??0}));return{sample(E,_){let S=0,y=0,v=1/0;for(const C of b){const N=C.x-E,B=C.y-_,T=Math.hypot(N,B)||1e-6;T<v&&(v=T);const F=C.weight/Math.pow(Math.max(T,r),a),O=N/T,k=B/T;S+=(O-k*C.swirl)*F,y+=(k+O*C.swirl)*F}return{direction:Math.hypot(S,y)>1e-9?Math.atan2(y,S):void 0,influence:o,value:H(1-v/l,0,1)}}}}};class Lt{constructor(t,o,a){qe(this,"cols");qe(this,"rows");qe(this,"invCell");qe(this,"buckets");this.cols=Math.max(1,Math.ceil(o/t)),this.rows=Math.max(1,Math.ceil(a/t)),this.invCell=1/t,this.buckets=new Array(this.cols*this.rows)}colOf(t){const o=t*this.invCell|0;return o<0?0:o>=this.cols?this.cols-1:o}rowOf(t){const o=t*this.invCell|0;return o<0?0:o>=this.rows?this.rows-1:o}add(t){const o=this.rowOf(t.y)*this.cols+this.colOf(t.x);let a=this.buckets[o];a===void 0&&(a=[],this.buckets[o]=a),t.gridBucket=a,t.gridSlot=a.length,a.push(t)}remove(t){const o=t.gridBucket,a=t.gridSlot;if(o===void 0||a===void 0)return;const r=o.length-1,l=o[r];l!==void 0&&a!==r&&(o[a]=l,l.gridSlot=a),o.pop(),t.gridBucket=void 0,t.gridSlot=void 0}forEachWithin(t,o,a,r){const l=a*a,i=this.colOf(t-a),u=this.colOf(t+a),h=this.rowOf(o-a),p=this.rowOf(o+a);for(let x=h;x<=p;x++){const b=x*this.cols;for(let E=i;E<=u;E++){const _=this.buckets[b+E];if(_!==void 0)for(let S=0;S<_.length;S++){const y=_[S];if(y===void 0)continue;const v=y.x-t,w=y.y-o;v*v+w*w<=l&&r(y)}}}}within(t,o,a){const r=[],l=a*a,i=this.colOf(t-a),u=this.colOf(t+a),h=this.rowOf(o-a),p=this.rowOf(o+a);for(let x=h;x<=p;x++){const b=x*this.cols;for(let E=i;E<=u;E++){const _=this.buckets[b+E];if(_!==void 0)for(let S=0;S<_.length;S++){const y=_[S];if(y===void 0)continue;const v=y.x-t,w=y.y-o;v*v+w*w<=l&&r.push(y)}}}return r}}const It=(e={})=>{const{stepLength:t=2,stepValueInfluence:o=0,stepDepthFalloff:a=1,branchStepScale:r=1,minStep:l=(e.stepLength??2)*.4,wander:i=.22,substrateWeight:u=.6,branchProbability:h=.02,branchAngle:p=.6,branchAngleJitter:x=.4,branchValueInfluence:b=.5,branchMinDepth:E=0,branchDecay:_=1,pressureRadius:S=14,pressureWeight:y=.6,pressureValueFalloff:v=0,pressureCap:w=1,collisionRadius:C=2.2,vigorJitter:N=.45,overtake:B=.5,passOnLoss:T=.4,bloomOnLoss:F=.25,bloomTips:O=5,bloomStepsMin:k=3,bloomStepsMax:X=8,bloomJitter:L=.75,burstProbability:U=0,burstArms:$=16,burstStepsMin:m=4,burstStepsMax:R=16,burstValueFalloff:G=0,lifeMin:n=0,lifeMax:M=0,maxTips:z=1/0,maxNodes:A=12e4,margin:c=8,horizon:d=0,depositOnGrow:f=!1,girthVar:g=0,girthSwell:D=0,girthRate:j=.06,girthRadius:Q=10,girthSaturation:Z=14}=e,I=128,q=g>0||D!==0;return({substrate:ue,width:Y,height:me})=>{const ie=Math.ceil(C/Math.max(l,.1))+2,ee=K=>M>0?K.int(n,M):void 0,fe=K=>g>0?H(1+K.range(-g,g),.2,2):1,te=(K,s)=>H(K*(1+D*(s*2-1)),.25,3);let oe=[];const de=new Lt(Math.max(S,Q,C,4),Y,me);let ce=[],ye=0,he=0,Te=!1,Ae=1;const Ee=new Set;let Se=0,Pe=0,Ge=0,Ie=0,Ue=0;const Ne=K=>{if(K.owner===Se)return;const s=Pe-K.x,ne=Ge-K.y,J=s*s+ne*ne;if(J<.001)return;const V=1/J;Ie+=s*V,Ue+=ne*V};let Fe=0;const Xe=()=>{Fe+=1};let Ye=[],Ce=null,pe=1/0;const Ze=K=>{if(K.owner===Se||Ye.includes(K.index))return;const s=K.x-Pe,ne=K.y-Ge,J=s*s+ne*ne;J<pe&&(pe=J,Ce=K)},Oe=(K,s,ne,J,V,P,W,ae,xe=1)=>{var ge;const re={index:oe.length,x:K,y:s,parentIndex:ne,depth:J,armIndex:V,age:ye,value:P,owner:W,vigor:ae};return q&&(re.width=xe),oe.push(re),de.add(re),J>he&&(he=J),f&&((ge=ue.deposit)==null||ge.call(ue,K,s,1)),re},He=()=>{const K=ye-d;if(K<=0)return;const s=new Uint8Array(oe.length);let ne=0;for(const P of oe)P.age>=K?s[P.index]=1:ne+=1;if(ne===0)return;for(const P of oe)(s[P.index]??0)===1&&P.parentIndex>=0&&(s[P.parentIndex]??0)===0&&(s[P.parentIndex]=2);for(const P of oe)(s[P.index]??0)!==1&&de.remove(P);const J=new Int32Array(oe.length).fill(-1),V=[];for(const P of oe)(s[P.index]??0)!==0&&(J[P.index]=V.length,V.push(P));for(const P of V)(s[P.index]??0)===2?P.parentIndex=-2:P.parentIndex>=0&&(P.parentIndex=J[P.parentIndex]??-2),P.index=J[P.index]??0;oe=V;for(const P of ce)P.nodeIndex=J[P.nodeIndex]??0,P.recent=P.recent.map(W=>J[W]??-1).filter(W=>W>=0)};return{init(K){K.length>0&&(d>0||oe.length<A)&&(Te=!1);for(const s of K){if(oe.length>=A)break;if(de.within(s.x,s.y,C).length>0)continue;const ne=ue.sample(s.x,s.y),J=Ae++,V=Ve(s.seed),P=(.5+ne.value)*(1+V.range(-N,N)),W=fe(V),ae=Oe(s.x,s.y,-1,0,s.armIndex,ne.value,J,P,W);ce.push({id:J,x:s.x,y:s.y,heading:s.heading,depth:0,spawnDepth:0,armIndex:s.armIndex,nodeIndex:ae.index,rng:V,recent:[ae.index],grace:ie,generation:0,vigor:P,life:ee(V),girthBias:W,girth:.5})}},step(){if(Te)return!1;const K=[];for(const s of ce){if(oe.length>=A){if(d===0)break;K.push(s);continue}if(Ee.has(s.id))continue;if(s.life!==void 0){if(s.life<=0)continue;s.life-=1}const ne=ue.sample(s.x,s.y),J=s.bloom?L:i;let V=s.heading+s.rng.range(-J,J);if(!s.bloom&&ne.direction!==void 0){const se=Math.min(1,ne.influence*u);V+=ct(V,ne.direction)*se}if(!s.bloom&&y>0){const se=y*(1-v*ne.value);if(se>1e-4){Se=s.id,Pe=s.x,Ge=s.y,Ie=0,Ue=0,de.forEachWithin(s.x,s.y,S,Ne);const be=Math.hypot(Ie,Ue);if(be>1e-6){const ve=Math.min(w,se*be);V+=ct(V,Math.atan2(Ue,Ie))*ve}}}const P=Math.max(l,t*Math.pow(a,s.depth)*Math.pow(r,s.generation)*(1+o*(ne.value*2-1))),W=s.x+Math.cos(V)*P,ae=s.y+Math.sin(V)*P;if(W<c||ae<c||W>Y-c||ae>me-c)continue;if(s.grace>0)s.grace-=1;else{Se=s.id,Pe=s.x,Ge=s.y,Ye=s.recent,Ce=null,pe=1/0,de.forEachWithin(W,ae,C,Ze);const se=Ce;if(se){const be=s.vigor/(s.vigor+se.vigor);if(s.rng.next()<be)s.rng.next()<B&&Ee.add(se.owner),s.grace=ie;else if(s.rng.next()<T)s.grace=ie;else{if(s.rng.next()<F&&oe.length<A)for(let ve=0;ve<O;ve++){const Me=s.rng.int(k,X);K.push({id:s.id,x:s.x,y:s.y,heading:s.rng.range(0,Be),depth:s.depth,spawnDepth:s.spawnDepth,armIndex:s.armIndex,nodeIndex:s.nodeIndex,rng:Ve(s.rng.int(0,2**31-1)),recent:[...s.recent],grace:Me+1,generation:s.generation+1,vigor:s.vigor,life:Me,bloom:!0,girthBias:s.girthBias,girth:s.girth})}continue}}}let xe=1;if(q){if(D!==0){Fe=0,de.forEachWithin(W,ae,Q,Xe);const se=H(Fe/Z,0,1);s.girth+=j*(se-s.girth)}xe=te(s.girthBias,s.girth)}const re=Oe(W,ae,s.nodeIndex,s.depth+1,s.armIndex,ne.value,s.id,s.vigor,xe);s.x=W,s.y=ae,s.heading=V,s.depth=re.depth,s.nodeIndex=re.index,s.recent.push(re.index),s.recent.length>ie&&s.recent.shift(),K.push(s);const ge=s.bloom||re.depth<E?0:h*Re(1,ne.value*2,b)*(_===1?1:Math.pow(_,re.depth-s.spawnDepth));if(s.rng.next()<ge&&oe.length<A&&ce.length<z){const se=s.rng.next()<.5?-1:1,be=p+(x>0?s.rng.range(-x,x):0),ve=Ve(s.rng.int(0,2**31-1)),Me=s.vigor*(1+ve.range(-N,N)),De=g>0?H(s.girthBias*(1+ve.range(-g,g)*.5),.2,2):1;K.push({id:Ae++,x:W,y:ae,heading:V+se*be,depth:re.depth,spawnDepth:re.depth,armIndex:s.armIndex,nodeIndex:re.index,rng:ve,recent:[...s.recent],grace:ie,generation:s.generation+1,vigor:Me,life:ee(ve),girthBias:De,girth:s.girth})}if(!s.bloom&&U>0&&oe.length<A&&s.rng.next()<U*(1-G*ne.value))for(let se=0;se<$;se++){const be=s.rng.int(m,R);K.push({id:s.id,x:W,y:ae,heading:s.rng.range(0,Be),depth:s.depth,spawnDepth:s.spawnDepth,armIndex:s.armIndex,nodeIndex:s.nodeIndex,rng:Ve(s.rng.int(0,2**31-1)),recent:[...s.recent],grace:be+1,generation:s.generation+1,vigor:s.vigor,life:be,bloom:!0,girthBias:s.girthBias,girth:s.girth})}}return ce=Ee.size?K.filter(s=>!Ee.has(s.id)):K,Ee.clear(),ye+=1,d>0&&ye%I===0&&He(),(ce.length===0||d===0&&oe.length>=A)&&(Te=!0),!Te},get scene(){return{nodes:oe,maxDepth:he,tipCount:ce.length,age:ye,done:Te}}}}},ke=(e,t,o)=>{const a=Math.sin(e*127.1+t*311.7+o*74.7)*43758.5453;return a-Math.floor(a)},Ft=(e={})=>{const{background:t="#efe7d6",ink:o="#1b160f",baseWidth:a=1.1,minWidth:r=.3,valueWidth:l=.6,widthJitter:i=.6,gapProbability:u=.06,tremor:h=.9,knotProbability:p=.045,knotScale:x=1.8,blotProbability:b=.0035,coreRadius:E=1.8,speckCount:_=1600,speckRadius:S=.65,speckBias:y=.8,fadeBands:v=28,fadeGamma:w=1.5,refreshEvery:C=1}=e;return()=>{let N=null;const B=new Map;let T=null,F=0;const O=(m,R,G)=>{const n=Ve(11),M=[];for(let z=0;z<_;z++){const A=n.next()*m,c=n.next()*R,d=G.sample(A,c).value;n.next()<1-y*d&&M.push({x:A,y:c,r:S*(.5+n.next())})}return M},k=m=>m.x+(ke(m.x,m.y,2)-.5)*2*h,X=m=>m.y+(ke(m.x,m.y,3)-.5)*2*h,L=(m,R)=>{const G=new Map,n=new Path2D;for(const M of m){if(M.parentIndex===-1){E>0&&(n.moveTo(M.x+E,M.y),n.arc(M.x,M.y,E,0,Math.PI*2));continue}if(M.parentIndex<0)continue;const z=R[M.parentIndex];if(!z)continue;const A=1+l*(M.value*2-1),c=Math.max(r,a*A*(1-i/2+i*ke(M.x,M.y,4)));if(ke(M.x,M.y,5)<p){const g=Math.max(c*x*(.6+ke(M.x,M.y,6)),.5);n.moveTo(M.x+g,M.y),n.arc(M.x,M.y,g,0,Math.PI*2)}if(ke(M.x,M.y,7)<b)for(let g=0;g<3;g++){const D=M.x+(ke(M.x,M.y,8+g)-.5)*4,j=M.y+(ke(M.x,M.y,11+g)-.5)*4,Q=1+ke(M.x,M.y,14+g)*2.2;n.moveTo(D+Q,j),n.arc(D,j,Q,0,Math.PI*2)}if(ke(M.x,M.y,1)<u)continue;const d=Math.round(c*4)/4;let f=G.get(d);f||(f=new Path2D,G.set(d,f)),f.moveTo(k(z),X(z)),f.lineTo(k(M),X(M))}return{strokes:G,dots:n}},U=(m,R,G)=>{m.globalAlpha=G,m.strokeStyle=o,m.lineCap="round";for(const[n,M]of R.strokes)m.lineWidth=n,m.stroke(M);m.fillStyle=o,m.fill(R.dots),m.globalAlpha=1},$=(m,R)=>{const{ctx:G,scene:n}=m,M=Math.max(1,Math.round(R/v)),z=Math.floor(n.age/M),A=new Map;for(const d of n.nodes){const f=Math.floor(d.age/M);if(z-f>v+1||f!==z&&B.has(f))continue;const g=A.get(f);g?g.push(d):A.set(f,[d])}for(const[d,f]of A)B.set(d,L(f,n.nodes));for(const d of B.keys())z-d>v+1&&B.delete(d);const c=[...B.keys()].sort((d,f)=>d-f);for(const d of c){const f=(d+1)*M,g=Math.max(0,n.age-f)/R,D=Math.pow(Math.max(0,1-g),w);if(D<.004)continue;const j=B.get(d);j&&U(G,j,D)}};return{clear(m,R,G){m.fillStyle=t,m.fillRect(0,0,R,G)},fade(m,R,G,n){m.save(),m.globalAlpha=n,m.fillStyle=t,m.fillRect(0,0,R,G),m.restore()},render(m){const{ctx:R,width:G,height:n,substrate:M}=m;if(!N){const z=new Path2D;for(const A of O(G,n,M))z.moveTo(A.x+A.r,A.y),z.arc(A.x,A.y,A.r,0,Math.PI*2);N=z}if(R.fillStyle=o,R.fill(N),m.horizon!==void 0){$(m,m.horizon);return}(!T||F%Math.max(1,C)===0)&&(T=L(m.scene.nodes,m.scene.nodes)),F+=1,U(R,T,1)}}}},We=e=>{if(typeof e!="string")return[e[0],e[1],e[2]];let t=e.trim();if(t[0]==="#"&&(t=t.slice(1)),t.length===3){const l=parseInt(t[0]+t[0],16),i=parseInt(t[1]+t[1],16),u=parseInt(t[2]+t[2],16);return[l/255,i/255,u/255]}const o=parseInt(t.slice(0,2),16),a=parseInt(t.slice(2,4),16),r=parseInt(t.slice(4,6),16);return[o/255,a/255,r/255]},Le=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),tt=e=>e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055,Je=1024;let $e=null;const ze=e=>{if(!$e){$e=new Uint8ClampedArray(Je+1);for(let t=0;t<=Je;t++)$e[t]=tt(t/Je)*255}return e<=0?$e[0]:e>=1?$e[Je]:$e[e*Je|0]},Ct=(e,t,o)=>{const a=.4122214708*e+.5363325363*t+.0514459929*o,r=.2119034982*e+.6806995451*t+.1073969566*o,l=.0883024619*e+.2817188376*t+.6299787005*o,i=Math.cbrt(a),u=Math.cbrt(r),h=Math.cbrt(l);return[.2104542553*i+.793617785*u-.0040720468*h,1.9779984951*i-2.428592205*u+.4505937099*h,.0259040371*i+.7827717662*u-.808675766*h]},pt=(e,t,o)=>{const a=e+.3963377774*t+.2158037573*o,r=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,i=a*a*a,u=r*r*r,h=l*l*l;return[4.0767416621*i-3.3077115913*u+.2309699292*h,-1.2684380046*i+2.6097574011*u-.3413193965*h,-.0041960863*i-.7034186147*u+1.707614701*h]},Bt=e=>{const[t,o,a]=We(e);return Ct(Le(t),Le(o),Le(a))},Gt=(e,t,o)=>{const a=pt(e,t,o);return[H(tt(H(a[0],0,1)),0,1),H(tt(H(a[1],0,1)),0,1),H(tt(H(a[2],0,1)),0,1)]},nt=1e-4,ot=.001,Nt={combine:`
    vec3 lin = srgbToLinear(deltaColor);
    vec3 absorb = -log(max(lin, vec3(1e-4)));
    accum.rgb = accum.rgb * fade + absorb * deltaAlpha * uGain;
  `,resolve:`
    vec3 lin = srgbToLinear(bg) * exp(-accum.rgb);
    color = linearToSrgb(lin);
  `},gt=()=>{let e=[0,0,0];const t=2048,o=16,a=new Float32Array(t+1);for(let i=0;i<=t;i++)a[i]=Math.exp(-(i/t)*o);const r=i=>i<=0?1:i>=o?0:a[i/o*t|0],l=new Float32Array(3);return{channels:3,gl:Nt,prepare(i){e=[Le(i[0]),Le(i[1]),Le(i[2])]},encode(i){const[u,h,p]=We(i);return l[0]=-Math.log(H(Le(u),nt,1)),l[1]=-Math.log(H(Le(h),nt,1)),l[2]=-Math.log(H(Le(p),nt,1)),l},mix(i,u,h,p){i[u]=i[u]+h[0]*p,i[u+1]=i[u+1]+h[1]*p,i[u+2]=i[u+2]+h[2]*p},fade(i,u,h){i[u]=i[u]*h,i[u+1]=i[u+1]*h,i[u+2]=i[u+2]*h},isEmpty(i,u){return i[u]<ot&&i[u+1]<ot&&i[u+2]<ot},resolve(i,u,h){h[0]=ze(e[0]*r(i[u])),h[1]=ze(e[1]*r(i[u+1])),h[2]=ze(e[2]*r(i[u+2]))}}},Xt={combine:`
    vec3 srcLab = rgbToOklab(srgbToLinear(deltaColor));
    float t = clamp(deltaAlpha * uGain, 0.0, 1.0);
    float cov = accum.a * fade;
    accum.rgb = mix(accum.rgb, srcLab, t);
    accum.a = cov + t * (1.0 - cov);
  `,resolve:`
    vec3 lin = oklabToLinear(accum.rgb);
    vec3 c = linearToSrgb(clamp(lin, 0.0, 1.0));
    color = mix(bg, c, accum.a);
  `},Ot=()=>{const e=[0,0,0],t=new Float32Array(4);return{channels:4,gl:Xt,prepare(o){e[0]=o[0]*255,e[1]=o[1]*255,e[2]=o[2]*255},encode(o){const[a,r,l]=Bt(o);return t[0]=a,t[1]=r,t[2]=l,t[3]=0,t},mix(o,a,r,l){const i=H(l,0,1);o[a]=Re(o[a],r[0],i),o[a+1]=Re(o[a+1],r[1],i),o[a+2]=Re(o[a+2],r[2],i);const u=o[a+3];o[a+3]=u+i*(1-u)},fade(o,a,r){o[a+3]=o[a+3]*r},isEmpty(o,a){return o[a+3]<ot},resolve(o,a,r){const l=o[a+3];if(l<=nt){r[0]=e[0],r[1]=e[1],r[2]=e[2];return}const i=pt(o[a],o[a+1],o[a+2]),u=ze(H(i[0],0,1)),h=ze(H(i[1],0,1)),p=ze(H(i[2],0,1));r[0]=Re(e[0],u,l),r[1]=Re(e[1],h,l),r[2]=Re(e[2],p,l)}}},le=e=>{const t=e.toString();return t.includes(".")||t.includes("e")?t:`${t}.0`},$t=(e={})=>{const{massGain:t=.6,massInertia:o=.7,mixFloor:a=.12,chromaPop:r=.04,hueSpin:l=.08,massCap:i=3,massDecay:u=.004,massDecayPow:h=0,lightnessDecay:p=0,chromaDecay:x=0,targetL:b=.62,brightRegulate:E=.04,targetC:_=.11,chromaRegulate:S=.03,lVar:y=0,cVar:v=0,varScale:w=.02,varSpeed:C=.003,hueDrift:N=.05,hueDriftScale:B=.01,grain:T=.01,show:F=1.2}=e,O=w*1.7,k=H(Math.ceil(Math.max(u>0?(h>0?.001*i:.002)/u:1,p>0?.001/p:1,x>0?.001/x:1)),1,16);return{...Ot(),gl:{combine:`
        if (deltaAlpha > 0.001) {
          vec3 srcLab = rgbToOklab(srgbToLinear(deltaColor));
          float w = deltaAlpha * uGain;
          float m = accum.a;
          // Influence: more where empty; resisted by mass; floored so fresh
          // paint never fully disappears on dense ground.
          float k = max(${le(a)},
            clamp(w / (m * ${le(o)} + w + 1e-3), 0.0, 1.0));
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
            float h = oh + k * dh + ${le(l)} * k;
            float c = mix(oc, nc, k) + ${le(r)} * abs(sin(dh)) * k;
            accum.yz = vec2(cos(h), sin(h)) * c;
          } else {
            accum.yz = mix(ov, nv, k);
          }
          accum.a = min(m + w * ${le(t)}, ${le(i)});
        }
      `,evolveEvery:k,evolve:`
        // NOTE: this pass runs every ${k} frame(s) (evolveEvery), so
        // every accumulative rate below is pre-multiplied by that N — a
        // super-ulp step per application that survives fp16 storage on every
        // rounding mode (see the decayEvery comment). Grain is re-rolled
        // noise, not a rate, so its amplitude stays as authored.
        ${u>0&&h>0?`// Density-relative decay: loss ∝ (m/cap)^pow, so pooled mass
        // sheds fast while faint marks linger (see massDecayPow). The max()
        // floor keeps the faint tail moving in fp16: for pow > 1 the step
        // shrinks RELATIVE to m as m drops, and below ~half a relative ulp
        // (2.4e-4) round-to-nearest drivers would freeze the fade at a
        // still-visible mass — 6e-4/write clears a full ulp on every driver,
        // an exponential tail slow enough to read as lingering, not loss.
        float mm = max(accum.a, 0.0);
        float m = max(0.0, mm - max(
          ${le(u*k)} * ${h===1?`(mm * ${le(1/i)})`:`pow(mm * ${le(1/i)}, ${le(h)})`},
          mm * 6.0e-4));`:`float m = max(0.0, accum.a - ${le(u*k)});`}
        ${p>0?`// Ageing: L sinks toward black (multiplicative — contrast-keeping).
        accum.x *= ${le(1-p*k)};`:""}
        ${x>0?`// Ageing: chroma dulls toward grey.
        accum.yz *= ${le(1-x*k)};`:""}
        // Targets vary across the field and evolve in TIME (z axis of the noise,
        // so the pattern churns in place instead of sliding diagonally), with
        // octaves so it doesn't read as one obvious blob field. uTime is the
        // real frame counter, so the drift speed is cadence-independent.
        float tL = ${le(b)} + ${le(y)} *
          (fbm3(vec3(gl_FragCoord.xy * ${le(w)}, uTime * ${le(C)})) - 0.5);
        float tC = ${le(_)} + ${le(v)} *
          (fbm3(vec3(gl_FragCoord.xy * ${le(O)}, uTime * ${le(C)} + 50.0)) - 0.5);
        // Brightness homeostasis toward the (varying) target — fresh dark marks
        // get lifted slowly, so new growth stands out before settling in.
        accum.x += ${le(E*k)} * (tL - accum.x);
        // Chroma homeostasis toward the (varying) target.
        float c = length(accum.yz);
        if (c > 1e-4) {
          accum.yz *= max(0.0, c + ${le(S*k)} * (tC - c)) / c;
        }
        // Gentle hue drift (kept small — brightness/chroma carry the evolution).
        float ang = ${le(N*k)} *
          (valueNoise3(vec3(gl_FragCoord.xy * ${le(B)}, uTime * 0.01)) - 0.5);
        float cs = cos(ang); float sn = sin(ang);
        accum.yz = mat2(cs, -sn, sn, cs) * accum.yz;
        // Per-cell brightness grain — spatiotemporal blue noise (.a channel,
        // golden-ratio rotated per application): even, non-repeating, no
        // diagonal structure, and mean-zero over time so it doesn't drift.
        accum.x += ${le(T)} * (fract(
          texture(uBlue, gl_FragCoord.xy / uBlueSize).a + uTime * 0.61803399) - 0.5);
        accum.x = clamp(accum.x, 0.0, 1.0);
        accum.a = m;
      `,resolve:`
        float m = clamp(accum.a * ${le(F)}, 0.0, 1.0);
        vec3 lin = oklabToLinear(accum.rgb);
        vec3 cc = linearToSrgb(clamp(lin, 0.0, 1.0));
        color = mix(bg, cc, m);
      `}}},Vt=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(e=>(e+.5)/16),st=(e={})=>{var E;const{pigment:t=gt(),background:o="#efe7d6",resolution:a=1,radius:r=1.3,fade:l=.997,fadeGrace:i,stateCell:u=16,dither:h=0}=e,p=We(o),x=[Math.round(p[0]*255),Math.round(p[1]*255),Math.round(p[2]*255)];(E=t.prepare)==null||E.call(t,p);const b=t.channels;return _=>{const{width:S,height:y}=_,v=Math.max(1,Math.round(S*a)),w=Math.max(1,Math.round(y*a)),C=v/S,N=w/y,B=new Float32Array(v*w*b),T=new Uint8Array(v*w);let F=[],O=[];const k=Math.max(1,Math.ceil(S/u)),X=Math.max(1,Math.ceil(y/u)),L=new Float32Array(k*X).fill(-1e9);let U=0,$=null,m=null,R=null;const G=new Float32Array(3),n=(A,c)=>{const d=H(Math.floor(A/u),0,k-1);return H(Math.floor(c/u),0,X-1)*k+d},M=()=>{if($)return;$=document.createElement("canvas"),$.width=v,$.height=w;const A=$.getContext("2d");if(!A)throw new Error("Unable to acquire paint composite context.");m=A,R=A.createImageData(v,w);const c=R.data;for(let d=0;d<v*w;d++)c[d*4]=x[0],c[d*4+1]=x[1],c[d*4+2]=x[2],c[d*4+3]=255},z=A=>{const c=R.data;t.resolve(B,A*b,G);const d=A*4;let f=0;if(h>0){const g=A%v,D=A/v|0;f=(Vt[(D&3)*4+(g&3)]-.5)*h}c[d]=G[0]+f,c[d+1]=G[1]+f,c[d+2]=G[2]+f};return{deposit(A,c,d,f,g){const D=t.encode(d),j=A*C,Q=c*N,Z=(g??r)*C,I=Math.max(0,Math.floor(j-Z)),q=Math.min(v-1,Math.ceil(j+Z)),ue=Math.max(0,Math.floor(Q-Z)),Y=Math.min(w-1,Math.ceil(Q+Z)),me=Z*Z;for(let ie=ue;ie<=Y;ie++)for(let ee=I;ee<=q;ee++){const fe=ee+.5-j,te=ie+.5-Q,oe=fe*fe+te*te;if(oe>me)continue;const de=Math.min(1,(1-oe/me)*1.8),ce=ie*v+ee;t.mix(B,ce*b,D,f*de),T[ce]||(T[ce]=1,F.push(ce))}L[n(A,c)]=U},step(A){U+=1;const c=Math.pow(l,A);if(c>=1||F.length===0)return;const d=i!==void 0,f=[];for(let g=0;g<F.length;g++){const D=F[g];if(d){const j=D%v/C,Q=(D/v|0)/N;if(U-L[n(j,Q)]<=i){f.push(D);continue}}t.fade(B,D*b,c),t.isEmpty(B,D*b)?(T[D]=0,O.push(D)):f.push(D)}F=f},composite(A,c,d){M();for(let f=0;f<O.length;f++){const g=O[f]*4,D=R.data;D[g]=x[0],D[g+1]=x[1],D[g+2]=x[2]}O=[];for(let f=0;f<F.length;f++)z(F[f]);m.putImageData(R,0,0),A.drawImage($,0,0,c,d)},sample(A,c){const d=H(Math.floor(A*C),0,v-1),f=H(Math.floor(c*N),0,w-1);return t.resolve(B,(f*v+d)*b,G),[G[0]/255,G[1]/255,G[2]/255]}}}},zt=(e,t)=>{if(typeof document>"u")return null;const o=document.createElement("canvas");o.width=e,o.height=t;const a=o.getContext("webgl2",{premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1});return!a||!a.getExtension("EXT_color_buffer_float")?null:{gl:a,canvas:o}},Wt=e=>{var t;(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()},dt=(e,t,o)=>{const a=e.createShader(t);if(!a)throw new Error("Failed to create shader.");if(e.shaderSource(a,o),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const r=e.getShaderInfoLog(a);throw e.deleteShader(a),new Error(`Shader compile error: ${r}`)}return a},je=(e,t,o)=>{const a=dt(e,e.VERTEX_SHADER,t),r=dt(e,e.FRAGMENT_SHADER,o),l=e.createProgram();if(!l)throw new Error("Failed to create program.");if(e.attachShader(l,a),e.attachShader(l,r),e.linkProgram(l),e.deleteShader(a),e.deleteShader(r),!e.getProgramParameter(l,e.LINK_STATUS)){const i=e.getProgramInfoLog(l);throw e.deleteProgram(l),new Error(`Program link error: ${i}`)}return l},Yt=e=>{const t=e.createVertexArray();return()=>{e.bindVertexArray(t),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null)}},ft=(e,t,o)=>{const a=e.createTexture();if(!a)throw new Error("Failed to create accumulation texture.");return e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,o,0,e.RGBA,e.HALF_FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),a},Ht=(e,t,o)=>{let a=ft(e,t,o),r=ft(e,t,o);const l=e.createFramebuffer();if(!l)throw new Error("Failed to create framebuffer.");e.bindFramebuffer(e.FRAMEBUFFER,l);for(const i of[a,r])e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);return e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.warn("[paint] accumulation framebuffer incomplete."),e.bindFramebuffer(e.FRAMEBUFFER,null),{srcTexture:()=>a,bindDst(){e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.viewport(0,0,t,o)},swap(){const i=a;a=r,r=i},dispose(){e.deleteTexture(a),e.deleteTexture(r),e.deleteFramebuffer(l)}}},Qe=`#version 300 es
out vec2 vUv;
void main() {
  float x = (gl_VertexID == 1) ? 3.0 : -1.0;
  float y = (gl_VertexID == 2) ? 3.0 : -1.0;
  vUv = vec2((x + 1.0) * 0.5, (y + 1.0) * 0.5);
  gl_Position = vec4(x, y, 0.0, 1.0);
}`,at=`#version 300 es
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
`,qt=e=>`${at}
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
  ${e.combine}
  outColor = accum;
}`,Kt=`${at}
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
}`,Jt=`#version 300 es
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
}`,jt=e=>`${at}
uniform sampler2D uAccum;
uniform float uTime;
uniform sampler2D uBlue;
uniform float uBlueSize;
void main() {
  vec4 accum = texture(uAccum, vUv);
  ${e.evolve??""}
  outColor = accum;
}`,Qt=e=>`${at}
uniform sampler2D uAccum;
uniform vec3 uBg;
uniform float uDither;
uniform float uGrain;
uniform float uGrainScale;
uniform float uPaperGrain;
uniform float uPaperGrainScale;
uniform float uPaperSpeck;
uniform float uPaperSpeckScale;
uniform float uPaperChroma;
// Blue-noise mask (RGBA, four decorrelated channels): .r dither, .g specks,
// .b grain. Tiled in screen space; seamless so the repeat is invisible.
uniform sampler2D uBlue;
uniform float uBlueSize;
uniform float uTime;
void main() {
  vec4 accum = texture(uAccum, vUv);
  vec2 fc = gl_FragCoord.xy;
  // Textured paper ground: a bright surface with fine fibre grain (two octaves,
  // smooth value noise — blue noise is wrong for low-freq mottle), a faint
  // warm/cool chroma drift, and sparse dark dirt specks placed by BLUE noise so
  // they spread evenly with no clumps. The pigment composites OVER this.
  vec3 bg = uBg;
  bg += uPaperGrain * ((valueNoise(fc * uPaperGrainScale) - 0.5)
        + 0.5 * (valueNoise(fc * uPaperGrainScale * 0.27 + 7.0) - 0.5));
  float warm = valueNoise(fc * uPaperGrainScale * 0.13 + 19.0) - 0.5;
  bg += uPaperChroma * warm * vec3(1.0, 0.0, -1.0);
  float speck = smoothstep(0.86, 0.97,
    texture(uBlue, fc * uPaperSpeckScale / uBlueSize).g);
  bg -= uPaperSpeck * speck * vec3(0.7, 0.85, 1.0); // browner-dark dirt
  vec3 color;
  ${e.resolve}
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
}`,Zt="/fveld2/assets/blue_noise_LDR_RGBA_0-DEb-wTjH.png",en=(e={})=>{const t=e.pigment??gt(),o=e.background??"#efe7d6",a=e.radius??1.3,r=e.fade??.997,l=e.dither??0,i=e.depositGain??2.5,u=e.diffuse??0,h=e.tooth??0,p=e.toothScale??.3,x=e.diffuseEdge??0,b=e.diffuseVar??0,E=e.diffuseVarScale??.008,_=e.diffuseVarSpeed??.002,S=e.grain??0,y=e.grainScale??.6,v=e.sharpen??0,w=e.sharpenChroma??.1,C=e.sharpenRadius??3,N=e.paperGrain??0,B=e.paperGrainScale??.5,T=e.paperSpeck??0,F=e.paperSpeckScale??.7,O=e.paperChroma??0,k=We(o);return X=>{const{width:L,height:U}=X,$=e.resolution??X.pixelRatio??1,m=Math.max(1,Math.round(L*$)),R=Math.max(1,Math.round(U*$)),G=t.gl?zt(m,R):null;if(!G)return console.info("[paint] WebGL2 unavailable — CPU fallback."),st(e)(X);console.info("[paint] GPU backend active.");const{gl:n,canvas:M}=G,z=m/L,A=R/U,c=je(n,Qe,qt(t.gl)),d=je(n,Qe,Qt(t.gl)),f=Yt(n),g=Ht(n,m,R),D=n.getUniformLocation(c,"uFade"),j=n.getUniformLocation(c,"uGain");n.useProgram(c),n.uniform1i(n.getUniformLocation(c,"uSrc"),0),n.uniform1i(n.getUniformLocation(c,"uDelta"),1),n.uniform1f(j,i),n.uniform1f(n.getUniformLocation(c,"uTooth"),h),n.uniform1f(n.getUniformLocation(c,"uToothScale"),p);const Q=n.getUniformLocation(d,"uBg"),Z=n.getUniformLocation(d,"uDither");n.useProgram(d),n.uniform1i(n.getUniformLocation(d,"uAccum"),0),n.uniform3f(Q,k[0],k[1],k[2]),n.uniform1f(Z,l),n.uniform1f(n.getUniformLocation(d,"uGrain"),S),n.uniform1f(n.getUniformLocation(d,"uGrainScale"),y),n.uniform1f(n.getUniformLocation(d,"uPaperGrain"),N),n.uniform1f(n.getUniformLocation(d,"uPaperGrainScale"),B),n.uniform1f(n.getUniformLocation(d,"uPaperSpeck"),T),n.uniform1f(n.getUniformLocation(d,"uPaperSpeckScale"),F),n.uniform1f(n.getUniformLocation(d,"uPaperChroma"),O),n.uniform1i(n.getUniformLocation(d,"uBlue"),2);const I=n.getUniformLocation(d,"uBlueSize"),q=n.getUniformLocation(d,"uTime");n.uniform1f(I,256);const ue=u>0?Math.min(16,Math.max(1,Math.round(.1/u))):1,Y=u>0?je(n,Qe,Kt):null;let me=null;Y&&(n.useProgram(Y),n.uniform1i(n.getUniformLocation(Y,"uAccum"),0),n.uniform1f(n.getUniformLocation(Y,"uDiffuse"),u*ue),n.uniform2f(n.getUniformLocation(Y,"uTexel"),1/m,1/R),n.uniform1f(n.getUniformLocation(Y,"uEdge"),x),n.uniform1f(n.getUniformLocation(Y,"uVar"),b),n.uniform1f(n.getUniformLocation(Y,"uVarScale"),E),n.uniform1f(n.getUniformLocation(Y,"uVarSpeed"),_),me=n.getUniformLocation(Y,"uTime"));const ie=v>0?Math.min(512,Math.max(1,Math.round(.004/v))):1,ee=v>0?je(n,Qe,Jt):null;ee&&(n.useProgram(ee),n.uniform1i(n.getUniformLocation(ee,"uAccum"),0),n.uniform1f(n.getUniformLocation(ee,"uSharpen"),v*ie),n.uniform1f(n.getUniformLocation(ee,"uSharpenChroma"),w),n.uniform1f(n.getUniformLocation(ee,"uRadius"),C),n.uniform2f(n.getUniformLocation(ee,"uTexel"),1/m,1/R));const fe=t.gl.evolveEvery??1,te=t.gl.evolve?je(n,Qe,jt(t.gl)):null;let oe=null,de=null;te&&(oe=n.getUniformLocation(te,"uTime"),de=n.getUniformLocation(te,"uBlueSize"),n.useProgram(te),n.uniform1i(n.getUniformLocation(te,"uAccum"),0),n.uniform1i(n.getUniformLocation(te,"uBlue"),2),n.uniform1f(de,256));let ce=0;const ye=document.createElement("canvas");ye.width=m,ye.height=R;const he=ye.getContext("2d");if(!he)return st(e)(X);he.lineCap="round",he.lineJoin="round",he.clearRect(0,0,m,R);let Te=!1,Ae=0,Ee=0,Se=0,Pe=0;const Ge=(J,V,P,W)=>{if(!Te){Te=!0,Ae=J,Ee=V,Se=P,Pe=W;return}J<Ae&&(Ae=J),V<Ee&&(Ee=V),P>Se&&(Se=P),W>Pe&&(Pe=W)};let Ie=!1,Ue=0,Ne=0,Fe=0,Xe=0;const Ye=J=>{const[V,P,W]=We(J);return`rgb(${V*255|0},${P*255|0},${W*255|0})`},Ce=document.createElement("canvas");Ce.width=m,Ce.height=R;const pe=Ce.getContext("2d");if(!pe)return st(e)(X);pe.lineCap="round",pe.lineJoin="round";let Ze=0,Oe=!1;const He=n.createTexture();n.bindTexture(n.TEXTURE_2D,He),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,m,R,0,n.RGBA,n.UNSIGNED_BYTE,null);let K=!1;const s=n.createTexture();n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.activeTexture(n.TEXTURE0);const ne=new Image;return ne.onload=()=>{K||(n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,s),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,ne),n.activeTexture(n.TEXTURE0),n.useProgram(d),n.uniform1f(I,ne.width),de&&(n.useProgram(te),n.uniform1f(de,ne.width)))},ne.src=Zt,{deposit(J,V,P,W,ae){const xe=H(W/i,0,1);if(xe<=0)return;he.globalAlpha=xe,he.fillStyle=Ye(P);const re=(ae??a)*z,ge=J*z,se=V*A;he.beginPath(),he.arc(ge,se,re,0,Be),he.fill(),Ge(ge-re,se-re,ge+re,se+re)},stroke(J,V,P,W,ae,xe,re,ge){const se=H(xe/i,0,1);if(se<=0)return;Ze=se,Oe=!0,pe.globalCompositeOperation=ge?"destination-over":"source-over",pe.globalAlpha=1,pe.strokeStyle=Ye(ae);const be=Math.max(.5,re*z);pe.lineWidth=be;const ve=J*z,Me=V*A,De=P*z,rt=W*A;pe.beginPath(),pe.moveTo(ve,Me),pe.lineTo(De,rt),pe.stroke(),ge&&(pe.globalCompositeOperation="source-over");const et=be/2;Ge(Math.min(ve,De)-et,Math.min(Me,rt)-et,Math.max(ve,De)+et,Math.max(Me,rt)+et)},step(J){ce+=1;const V=2;let P=!1,W=0,ae=0,xe=0,re=0;if(Te&&(W=Math.max(0,Math.floor(Ae-V)),ae=Math.max(0,Math.floor(Ee-V)),xe=Math.min(m,Math.ceil(Se+V)),re=Math.min(R,Math.ceil(Pe+V)),P=xe>W&&re>ae),Oe){if(P){const Me=xe-W,De=re-ae;he.globalAlpha=Ze,he.globalCompositeOperation="destination-over",he.drawImage(Ce,W,ae,Me,De,W,ae,Me,De),he.globalCompositeOperation="source-over",he.globalAlpha=1,pe.clearRect(W,ae,Me,De)}Oe=!1}let ge=P?W:Ue,se=P?ae:Ne,be=P?xe:Fe,ve=P?re:Xe;P&&Ie&&(Ue<ge&&(ge=Ue),Ne<se&&(se=Ne),Fe>be&&(be=Fe),Xe>ve&&(ve=Xe)),(P||Ie)&&(n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,He),n.pixelStorei(n.UNPACK_ROW_LENGTH,m),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,se),n.texSubImage2D(n.TEXTURE_2D,0,ge,se,be-ge,ve-se,n.RGBA,n.UNSIGNED_BYTE,ye),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0)),P&&he.clearRect(W,ae,xe-W,re-ae),Te=!1,Ie=P,Ue=W,Ne=ae,Fe=xe,Xe=re,n.useProgram(c),n.uniform1f(D,Math.pow(r,J)),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),f(),g.swap(),te&&ce%fe===0&&(n.useProgram(te),n.uniform1f(oe,ce),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),f(),g.swap()),Y&&ce%ue===0&&(n.useProgram(Y),n.uniform1f(me,ce),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),f(),g.swap()),ee&&ce%ie===0&&(n.useProgram(ee),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),f(),g.swap()),n.bindFramebuffer(n.FRAMEBUFFER,null)},canvas:M,present(){n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,m,R),n.useProgram(d),n.uniform1f(q,ce),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),f()},composite(J,V,P){this.present(),J.drawImage(M,0,0,V,P)},dispose(){K=!0,g.dispose(),n.deleteTexture(He),n.deleteTexture(s),n.deleteProgram(c),n.deleteProgram(d),Y&&n.deleteProgram(Y),ee&&n.deleteProgram(ee),te&&n.deleteProgram(te),Wt(n)}}}},_e=(e,t,o)=>{const a=Math.sin(e*127.1+t*311.7+o*74.7)*43758.5453;return a-Math.floor(a)},tn=(e={})=>{const{strokeWeight:t=.45,strokeRadius:o=1.4,valueWidth:a=.6,widthJitter:r=.4,minRadius:l=.6,spacing:i=.5,tremor:u=0,shadowOffset:h=0,shadowOffsetWidth:p=0,shadowAngle:x=.79,shadowDarken:b=.5,knotProbability:E=.04,knotRadius:_=2.2,knotWeight:S=1.4,blotProbability:y=.003,blotRadius:v=2.4,blotWeight:w=1.8,coreRadius:C=3,coreWeight:N=2.2}=e,B=(L,U)=>L+(_e(L,U,2)-.5)*2*u,T=(L,U)=>U+(_e(L,U,3)-.5)*2*u,F=Math.cos(x),O=Math.sin(x),k=b>0&&(h>0||p>0),X=L=>{const[U,$,m]=We(L),R=1-b;return[U*R,$*R,m*R]};return()=>({mark(L,U,$,m){const R=B(U.x,U.y),G=T(U.x,U.y);if(!$){C>0&&L.deposit(R,G,m,N,C);return}const n=B($.x,$.y),M=T($.x,$.y),z=(1+a*(U.value*2-1))*(1-r/2+r*_e(U.x,U.y,4))*(U.width??1),A=Math.max(l,o*Math.max(0,z));if(L.stroke){if(k){const c=h+p*A,d=F*c,f=O*c;L.stroke(n+d,M+f,R+d,G+f,X(m),t,A*2,!0)}L.stroke(n,M,R,G,m,t,A*2)}else{const c=R-n,d=G-M,f=Math.hypot(c,d),g=Math.max(1,Math.ceil(f/i)),D=t*Math.min(1,i/(2*A));for(let j=1;j<=g;j++){const Q=j/g;L.deposit(n+c*Q,M+d*Q,m,D,A)}}if(_e(U.x,U.y,5)<E){const c=_*H(z,.4,2)*(.6+_e(U.x,U.y,6));L.deposit(R,G,m,S,c)}if(_e(U.x,U.y,7)<y)for(let c=0;c<3;c++){const d=R+(_e(U.x,U.y,8+c)-.5)*4,f=G+(_e(U.x,U.y,11+c)-.5)*4,g=v*(.5+_e(U.x,U.y,14+c));L.deposit(d,f,m,w,g)}}})},nn=(e,t)=>{const o=Math.sin(e*12.9898+t*78.233)*43758.5453;return o-Math.floor(o)},on=(e,t)=>{const o=Math.sin(e*39.3468+t*11.135)*24634.6345;return o-Math.floor(o)},an=e=>{const{hueCenter:t=1.8,hueSpread:o=.7,zoneScale:a=.0022,zoneWarp:r=0,zoneWarpScale:l=a,subScale:i=.012,subInfluence:u=.35,armInfluence:h=.25,ageInfluence:p=.15,hueDrift:x=0,hueDriftScale:b=.02,chromaBase:E=.045,chromaVar:_=.05,chromaScale:S=.006,chromaValue:y=0,speckField:v=.15,speckScale:w=.004,speckArm:C=.3,speckDepthBias:N=.35,speckDepthFull:B=60,speckJitter:T=.1,speckBias:F=0,speckThreshold:O=.78,speckSoftness:k=.22,speckHue:X=.6,speckHueSpread:L=.35,speckChroma:U=.14,baseLightness:$=.62,valueLightness:m=0,depthLightness:R=0,lightnessVar:G=.06,lightnessScale:n=.006}=e;return M=>{const{rng:z,clock:A}=M,c=we(z.next),d=we(z.next),f=we(z.next),g=we(z.next),D=we(z.next),j=we(z.next),Q=we(z.next),Z=we(z.next);return I=>{let q=I.x,ue=I.y;r>0&&(q+=d(I.x*l,I.y*l)*r,ue+=f(I.x*l,I.y*l)*r);const Y=(c(q*a,ue*a)+1)/2,me=(g(I.x*i,I.y*i)+1)/2;let ie=Y*(1-u)+me*u;ie+=h*(I.armIndex*.61803%1-.5),ie+=p*(Math.min(I.age*4e-4,1)-.5),ie=H(ie,0,1);let ee=t;x!==0&&A&&(ee+=x*Q(A.time*b,0));let fe=ee+(ie-.5)*2*o,te=E+_*((D(I.x*S,I.y*S)+1)/2);y!==0&&(te+=y*(I.value-.5));const oe=H(I.depth/B,0,1),de=I.armIndex*.7548%1,ce=.5+v*Z(I.x*w,I.y*w)+C*(de-.5)*2+N*oe*de+T*(nn(I.x,I.y)-.5)*2+F,ye=H((ce-O)/Math.max(k,1e-4),0,1);if(ye>0){const Ee=ye*ye*(3-2*ye),Se=X+(I.armIndex*.383%1-.5)*2*L+(on(I.x,I.y)-.5)*.1;fe+=(Se-fe)*Ee,te+=(U-te)*Ee}te=Math.max(te,0);let he=$;m!==0&&(he+=m*(I.value-.5)),R!==0&&(he+=R*(Math.min(I.depth*.02,1)-.5)),he+=G*j(I.x*n,I.y*n);const Te=te*Math.cos(fe),Ae=te*Math.sin(fe);return Gt(H(he,0,1),Te,Ae)}}},rn=(e,t,o)=>({rng:a,width:r,height:l})=>({spawn(){const i=r/2,u=l/2,h=Math.min(r,l)/2,p=[];for(let x=0;x<e;x++){const b=h*t*Math.pow(a.next(),o),E=a.range(0,Be);p.push({x:i+Math.cos(E)*b,y:u+Math.sin(E)*b,heading:a.range(0,Be),armIndex:x,seed:a.int(0,2**31-1)})}return p}}),sn={name:"lichen",stepsPerFrame:3,continuous:{horizon:800,targetTips:60,spawnBatch:8,advanceEvery:20},substrate:e=>{const t=e.scale??1;return kt(At(Rt(ht({scale:.0042/t,influence:.6,vectorField:!0,octaves:3,warp:120*t,warpScale:.0016/t,driftX:1.5*t,driftY:1*t}),Dt(_t({sinks:[{x:.5,y:.5}],influence:.15,falloff:1,core:30*t,valueRadius:1}),{scale:.0045/t,octaves:2,bias:-.5,outwardScale:5.4,rimContain:3.1,driftX:6*t,driftY:6*t}),.58),ht({scale:.0016/t,octaves:2,driftX:1.5*t,driftY:1*t}),{mix:.85,contrast:1.5}),{cell:8,decay:.6,saturation:50,valueShift:.2,repel:.3})(e)},spawner:e=>{const t=Math.min(e.width,e.height)/900;return rn(Math.round(80*t),.5,1)(e)},growth:e=>{const t=Math.min(e.width,e.height)/900,o=e.scale??1;return It({stepLength:1.7*o,stepValueInfluence:.3,stepDepthFalloff:.999,branchStepScale:.88,minStep:.85*o,wander:.13,substrateWeight:.68,branchProbability:.085,branchAngle:.7,branchAngleJitter:.5,branchValueInfluence:.35,branchMinDepth:Math.round(5*t),branchDecay:.99,pressureRadius:11*o,pressureWeight:.16,pressureValueFalloff:1,pressureCap:.35,collisionRadius:2*o,vigorJitter:.5,overtake:.58,passOnLoss:.45,bloomOnLoss:.06,bloomTips:6,bloomStepsMin:1,bloomStepsMax:10,bloomJitter:.85,burstProbability:2e-4,burstArms:20,burstStepsMin:0,burstStepsMax:200,burstValueFalloff:.5,girthVar:.65,girthSwell:.35,girthRate:.05,girthRadius:11*o,girthSaturation:20,lifeMin:900,lifeMax:3200,maxTips:64,horizon:1900,depositOnGrow:!0,maxNodes:Math.max(15e4,Math.round(22e4*t*t))})(e)},renderer:Ft({background:"#f3ecdc",ink:"#1b160f",baseWidth:1.5,minWidth:.6,valueWidth:.55,gapProbability:.05,tremor:.6,knotProbability:.01,knotScale:1.8,blotProbability:.008,coreRadius:3,speckCount:1500,speckRadius:.65,speckBias:.8,fadeBands:48,fadeGamma:1.2}),paint:e=>{const t=e.scale??1;return en({pigment:$t({massGain:5,massCap:2.4,massDecay:.0016,massDecayPow:1,lightnessDecay:37e-5,chromaDecay:5e-4,mixFloor:.2,chromaPop:.15,hueSpin:.5,targetL:.9,brightRegulate:1e-4,lVar:.2,cVar:.6,varScale:.01,varSpeed:.001,targetC:.55,chromaRegulate:1e-5,hueDrift:.0045,hueDriftScale:.012,grain:.05,show:.93}),background:"#f3ecdc",radius:1.4*t,diffuse:.018*t,diffuseEdge:.5,diffuseVar:1.5,diffuseVarScale:.04,diffuseVarSpeed:.003,sharpen:.002,sharpenChroma:.8,sharpenRadius:2*t,tooth:1,toothScale:1,grain:.1,grainScale:1,dither:1.2,paperGrain:.03,paperGrainScale:.5,paperSpeck:.08,paperSpeckScale:2.7,paperChroma:.002})(e)},color:e=>{const t=e.scale??1;return an({hueCenter:1.85,hueSpread:.72,zoneScale:.0026/t,zoneWarp:120*t,zoneWarpScale:.16/t,subScale:.011/t,subInfluence:.35,armInfluence:.28,ageInfluence:.15,hueDrift:.25,hueDriftScale:.02,chromaBase:.03,chromaVar:.1,chromaScale:.006/t,speckField:.08,speckScale:.005/t,speckArm:.2,speckDepthBias:.42,speckDepthFull:60,speckJitter:.1,speckThreshold:.82,speckSoftness:.24,speckHue:.5,speckHueSpread:-.22,speckChroma:.115,baseLightness:.66,valueLightness:-.6,depthLightness:.42,lightnessVar:.06,lightnessScale:.006/t})(e)},brush:e=>{const t=e.scale??1;return tn({strokeWeight:.95,strokeRadius:1.3*t,minRadius:.9*t,valueWidth:1.4,widthJitter:.3,tremor:.1*t,shadowOffset:2.5*t,shadowOffsetWidth:.5,shadowAngle:.79,shadowDarken:.46,knotProbability:.22,knotRadius:2*t,knotWeight:1,blotProbability:.02,blotRadius:2.2*t,blotWeight:1.3,coreRadius:1*t,coreWeight:10})(e)}},vt=document.querySelector("#sketch");if(!vt)throw new Error('Missing <canvas id="sketch"> in the document.');St(vt,sn);
