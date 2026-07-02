var vt=Object.defineProperty;var xt=(e,t,o)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var Ye=(e,t,o)=>xt(e,typeof t!="symbol"?t+"":t,o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}})();function bt(e,t={}){const{onResize:o,maxDpr:r=2,minDpr:a=1}=t,l=e.getContext("2d");if(!l)throw new Error("Unable to acquire a 2D rendering context.");const i={canvas:e,ctx:l,width:0,height:0},u=()=>{const h=Math.min(Math.max(window.devicePixelRatio||1,a),r),p=window.innerWidth,x=window.innerHeight;e.width=Math.floor(p*h),e.height=Math.floor(x*h),i.width=p,i.height=x,l.setTransform(h,0,0,h,0,0),o==null||o(i)};return u(),window.addEventListener("resize",u),i}function wt(e){let t=0,o=!1,r=0,a=0,l=0;const i=u=>{const h=(u-r)/1e3,p=(u-a)/1e3,x=Math.min(p,1/30);a=u,e({time:h,delta:x,rawDelta:p,frame:l}),l+=1,t=requestAnimationFrame(i)};return{start(){o||(o=!0,r=performance.now(),a=r,l=0,t=requestAnimationFrame(i))},stop(){o&&(o=!1,cancelAnimationFrame(t))},get running(){return o}}}const yt=(e=120,t=.05)=>{const o=new Float64Array(e),r=new Float64Array(e);let a=0,l=0,i=0,u=0;return{record(h){o[l]=h,l=(l+1)%e,a<e&&(a+=1),i=u===0?h:i+t*(h-i),u+=1},get ema(){return i},p75(){return a===0?0:(r.set(o.subarray(0,a)),r.subarray(0,a).sort()[Math.min(a-1,Math.floor(a*.75))]??0)},worst(){let h=0;for(let p=0;p<a;p++){const x=o[p]??0;x>h&&(h=x)}return h},get count(){return u}}};function $e(e=Date.now()){let t=e>>>0;const o=()=>{t|=0,t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296},r=(a,l)=>a+o()*(l-a);return{next:o,range:r,int:(a,l)=>Math.floor(r(a,l+1)),pick:a=>a[Math.floor(o()*a.length)]}}const Tt="#1b160f",Et=1/60,rt=(e,t)=>{for(let o=t.length-1;o>0;o--){const r=e.int(0,o),a=t[o];t[o]=t[r],t[r]=a}return t};function Mt(e,t){var d,k,C,n,A,J,U;const o=typeof location<"u"?new URLSearchParams(location.search):null,r=o==null?void 0:o.get("seed"),a=r!=null&&Number.isFinite(Number(r))?Math.floor(Number(r)):t.seed??Math.floor(Math.random()*2147483647),l=(o==null?void 0:o.has("stats"))??!1,i=Math.floor(Number((o==null?void 0:o.get("frames"))??0))||0;console.info(`[${t.name}] seed: ${a}`);const u=t.stepsPerFrame??4,h=((d=t.scale)==null?void 0:d.reference)??900,p=((k=t.scale)==null?void 0:k.min)??.35,x=((C=t.scale)==null?void 0:C.max)??1,b=t.continuous??null,T=((n=t.layers)==null?void 0:n.count)??1,D=((A=t.layers)==null?void 0:A.fade)??.2;let R=null,w=null,v=!0,E=!1;const M={time:0},G=(c,f,m,g)=>{const _=$e(a),q=c>0?m/c:1,Q=Math.min(Math.max(Math.min(c,f)/h,p),x),Z={rng:_,width:c,height:f,clock:M,pixelRatio:q,scale:Q},oe=t.substrate(Z),K=t.spawner(Z),Y=t.renderer(Z),se={...Z,substrate:oe},ae=t.growth(se),ee=t.paint?t.paint(Z):null,fe=t.color?t.color({...Z,substrate:oe}):null,he=t.brush?t.brush(Z):null;ee&&!b&&console.warn(`[${t.name}] paint is ignored outside continuous mode.`);const pe=[];b?pe.push(...rt(_,K.spawn())):ae.init(K.spawn());let ne=null;if(!b){const te=document.createElement("canvas");te.width=m,te.height=g;const ce=te.getContext("2d");if(!ce)throw new Error("Unable to acquire a 2D context for the layer buffer.");ce.setTransform(m/c,0,0,g/f,0,0),Y.clear(ce,c,f),ne={canvas:te,ctx:ce}}return{rng:_,substrate:oe,spawner:K,renderer:Y,growthCtx:se,growth:ae,layer:0,finished:!b&&T<1,baked:ne,spawnQueue:pe,lastAdvance:0,paint:b?ee:null,color:fe,brush:he,paintSince:0}},L=c=>{var m;const f=(m=c.paint)==null?void 0:m.canvas;f&&(f.style.position="fixed",f.style.inset="0",f.style.width="100vw",f.style.height="100vh",f.style.display="block",f.style.pointerEvents="none",e.insertAdjacentElement("afterend",f),w=f)},y=bt(e,{maxDpr:(J=t.pixelRatio)==null?void 0:J.max,minDpr:(U=t.pixelRatio)==null?void 0:U.min,onResize:({width:c,height:f,canvas:m})=>{var g,_;w&&(w.remove(),w=null),(_=(g=R==null?void 0:R.paint)==null?void 0:g.dispose)==null||_.call(g),R=G(c,f,m.width,m.height),L(R),v=!0}}),I=c=>{const f=c.paint;if(!f)return;const{color:m,brush:g}=c,_=c.growth.scene.nodes,q=c.paintSince;let Q=0,Z=_.length;for(;Q<Z;){const oe=Q+Z>>>1;_[oe].age<q?Q=oe+1:Z=oe}for(let oe=Q;oe<_.length;oe++){const K=_[oe];if(K.parentIndex===-2)continue;const Y=m?m({x:K.x,y:K.y,value:K.value,depth:K.depth,age:K.age,armIndex:K.armIndex}):Tt,se=K.parentIndex>=0?_[K.parentIndex]??null:null;if(g){g.mark(f,K,se,Y);continue}if(!se){f.deposit(K.x,K.y,Y,.8);continue}const ae=K.x-se.x,ee=K.y-se.y,fe=Math.max(1,Math.ceil(Math.hypot(ae,ee)));for(let he=1;he<=fe;he++){const pe=he/fe;f.deposit(se.x+ae*pe,se.y+ee*pe,Y,.45)}}c.paintSince=c.growth.scene.age+1},V=(c,f,m)=>{var se;const{growth:g,renderer:_,substrate:q,spawner:Q,rng:Z}=c,oe=b;if(!m){for(let he=0;he<u;he++)g.step();const ae=oe.targetTips??64,ee=oe.spawnBatch??2;g.scene.tipCount<ae&&(c.spawnQueue.length===0&&(c.spawnQueue=rt(Z,Q.spawn())),g.init(c.spawnQueue.splice(0,ee)));const fe=oe.advanceEvery??0;fe>0&&g.scene.age-c.lastAdvance>=fe&&((se=q.advance)==null||se.call(q),c.lastAdvance=g.scene.age)}const{width:K,height:Y}=y;if(c.paint){m||I(c),c.paint.step(1),c.paint.canvas&&c.paint.present&&w?c.paint.present():c.paint.composite(y.ctx,K,Y);return}_.clear(y.ctx,K,Y),_.render({ctx:y.ctx,width:K,height:Y,scene:g.scene,substrate:q,time:f,layer:0,horizon:oe.horizon})},F=(c,f,m)=>{var oe;const{renderer:g,substrate:_}=c,q=c.baked,{width:Q,height:Z}=y;if(!m&&!c.finished){for(let K=0;K<u;K++)if(v=!0,!c.growth.step()){if(g.fade(q.ctx,Q,Z,D),g.render({ctx:q.ctx,width:Q,height:Z,scene:c.growth.scene,substrate:_,time:f,layer:c.layer}),(oe=_.advance)==null||oe.call(_),_.deposit){const Y=_.deposit.bind(_);for(const se of c.growth.scene.nodes)Y(se.x,se.y,1)}c.layer+=1,c.layer>=T?c.finished=!0:(c.growth=t.growth(c.growthCtx),c.growth.init(c.spawner.spawn()));break}}v&&(v=!1,y.ctx.drawImage(q.canvas,0,0,Q,Z),c.finished||g.render({ctx:y.ctx,width:Q,height:Z,scene:c.growth.scene,substrate:_,time:f,layer:c.layer}))},X=()=>{const c=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19),f=`${t.name}-${a}-${c}.png`;R!=null&&R.paint&&R.paint.composite(y.ctx,y.width,y.height);const m=document.createElement("a");m.href=e.toDataURL("image/png"),m.download=f,m.click(),console.info(`[${t.name}] captured ${f}`)};console.info("[keys] space = pause (let the paint settle), c = capture PNG"),window.addEventListener("keydown",c=>{c.code==="Space"?(c.preventDefault(),E=!E,console.info(`[${t.name}] ${E?"paused — paint still settling, press space to resume":"resumed"}`)):(c.key==="c"||c.key==="C")&&X()});const P=yt();let S=0;const $=wt(c=>{if(R){if(c.frame>0&&P.record(c.rawDelta),l&&c.time-S>=1){S=c.time;const f=g=>(g*1e3).toFixed(1),m=R.growth.scene;console.info(`[stats] ema ${f(P.ema)}ms  p75 ${f(P.p75())}ms  worst ${f(P.worst())}ms  | nodes ${m.nodes.length}  tips ${m.tipCount}  age ${m.age}${m.done?"  DONE":""}`)}E||(M.time+=Et),b?V(R,M.time,E):F(R,M.time,E),i>0&&c.frame+1>=i&&$.stop()}});$.start()}const Fe=Math.PI*2,H=(e,t,o)=>Math.min(Math.max(e,t),o),we=(e,t,o)=>e+(t-e)*o,at=(e,t)=>{let o=(t-e)%Fe;return o>Math.PI?o-=Fe:o<-Math.PI&&(o+=Fe),o},St=(e,t,o=.5)=>r=>{const a=e(r),l=t(r),i={sample(u,h){const p=a.sample(u,h),x=l.sample(u,h),b=p.influence*(1-o),T=x.influence*o;let D=0,R=0;p.direction!==void 0&&(D+=Math.cos(p.direction)*b,R+=Math.sin(p.direction)*b),x.direction!==void 0&&(D+=Math.cos(x.direction)*T,R+=Math.sin(x.direction)*T);const w=Math.hypot(D,R);return{direction:w>1e-6?Math.atan2(R,D):void 0,influence:Math.min(1,w),value:we(p.value,x.value,o)}}};return(a.deposit||l.deposit)&&(i.deposit=(u,h,p)=>{var x,b;(x=a.deposit)==null||x.call(a,u,h,p),(b=l.deposit)==null||b.call(l,u,h,p)}),(a.advance||l.advance)&&(i.advance=()=>{var u,h;(u=a.advance)==null||u.call(a),(h=l.advance)==null||h.call(l)}),i},Rt=(e,t={})=>{const{cell:o=8,decay:r=.5,saturation:a=5,valueShift:l=.3,repel:i=.25}=t;return u=>{const h=e(u),p=Math.max(2,Math.ceil(u.width/o)),x=Math.max(2,Math.ceil(u.height/o)),b=new Float32Array(p*x),T=(w,v)=>{const E=H(Math.floor(w),0,p-1),M=H(Math.floor(v),0,x-1);return b[M*p+E]??0},D=(w,v)=>Math.min(1,T(w/o,v/o)/a);return{sample(w,v){const E=h.sample(w,v),M=D(w,v),G=H(E.value-l*M,0,1);if(i<=0||M<=0)return{...E,value:G};const L=D(w+o,v)-D(w-o,v),y=D(w,v+o)-D(w,v-o),I=Math.hypot(L,y);if(I<1e-4)return{...E,value:G};const V=i*M;let F=-L/I*V,X=-y/I*V;E.direction!==void 0&&(F+=Math.cos(E.direction)*E.influence,X+=Math.sin(E.direction)*E.influence);const P=Math.hypot(F,X);return{direction:P>1e-6?Math.atan2(X,F):E.direction,influence:Math.min(1,P),value:G}},deposit(w,v,E){var L;const M=Math.floor(w/o),G=Math.floor(v/o);for(let y=-1;y<=1;y++)for(let I=-1;I<=1;I++){const V=M+I,F=G+y;if(V<0||F<0||V>=p||F>=x)continue;const X=I===0&&y===0?1:.35;b[F*p+V]=(b[F*p+V]??0)+E*X}(L=h.deposit)==null||L.call(h,w,v,E)},advance(){var w;for(let v=0;v<b.length;v++){const E=b[v]??0;b[v]=E*r}(w=h.advance)==null||w.call(h)}}}},kt=(e,t,o={})=>{const{mix:r=1,combine:a="lerp",contrast:l=0,bias:i=.5}=o;return u=>{const h=e(u),p=t(u),x={sample(b,T){const D=h.sample(b,T),R=p.sample(b,T).value;let w=a==="multiply"?D.value*we(1,R,r):we(D.value,R,r);return l>0&&(w=(w-i)*(1+l)+.5),{direction:D.direction,influence:D.influence,value:H(w,0,1)}}};return h.deposit&&(x.deposit=h.deposit.bind(h)),(h.advance||p.advance)&&(x.advance=()=>{var b,T;(b=h.advance)==null||b.call(h),(T=p.advance)==null||T.call(p)}),x}},ft=Math.sqrt(3),At=.5*(ft-1),je=(3-ft)/6,st=e=>Math.floor(e)|0,it=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Pe(e=Math.random){const t=Ut(e),o=new Float64Array(t).map(a=>it[a%12*2]),r=new Float64Array(t).map(a=>it[a%12*2+1]);return function(l,i){let u=0,h=0,p=0;const x=(l+i)*At,b=st(l+x),T=st(i+x),D=(b+T)*je,R=b-D,w=T-D,v=l-R,E=i-w;let M,G;v>E?(M=1,G=0):(M=0,G=1);const L=v-M+je,y=E-G+je,I=v-1+2*je,V=E-1+2*je,F=b&255,X=T&255;let P=.5-v*v-E*E;if(P>=0){const d=F+t[X],k=o[d],C=r[d];P*=P,u=P*P*(k*v+C*E)}let S=.5-L*L-y*y;if(S>=0){const d=F+M+t[X+G],k=o[d],C=r[d];S*=S,h=S*S*(k*L+C*y)}let $=.5-I*I-V*V;if($>=0){const d=F+1+t[X+1],k=o[d],C=r[d];$*=$,p=$*$*(k*I+C*V)}return 70*(u+h+p)}}function Ut(e){const o=new Uint8Array(512);for(let r=0;r<512/2;r++)o[r]=r;for(let r=0;r<512/2-1;r++){const a=r+~~(e()*(256-r)),l=o[r];o[r]=o[a],o[a]=l}for(let r=256;r<512;r++)o[r]=o[r-256];return o}const ct=(e={})=>{const{scale:t=.003,influence:o=.6,rotations:r=2,octaves:a=1,lacunarity:l=2,gain:i=.5,warp:u=0,warpScale:h=t,driftX:p=0,driftY:x=0,vectorField:b=!1}=e;return T=>{const{rng:D,clock:R}=T,w=Pe(D.next),v=Pe(D.next),E=Pe(D.next),M=Pe(D.next),G=b?Pe(D.next):null,L=(y,I,V)=>{let F=0,X=1,P=1,S=0;for(let $=0;$<a;$++)F+=y(I*P,V*P)*X,S+=X,X*=i,P*=l;return F/S};return{sample(y,I){if(p!==0||x!==0){const $=(R==null?void 0:R.time)??0;y+=p*$,I+=x*$}let V=y,F=I;u>0&&(V+=E(y*h,I*h)*u,F+=M(y*h,I*h)*u);const X=V*t,P=F*t;return{direction:G?Math.atan2(L(G,X,P),L(w,X,P)):L(w,X,P)*r*Math.PI,influence:o,value:(L(v,X,P)+1)/2}}}}},Pt=(e,t={})=>{const{scale:o=.0024,octaves:r=2,lacunarity:a=2,gain:l=.5,bias:i=.35,outwardScale:u=.7,rimContain:h=.65,driftX:p=0,driftY:x=0}=t;return b=>{const T=e(b),D=Pe(b.rng.next),R=b.width/2,w=b.height/2,v=Math.max(1,Math.min(b.width,b.height)/2),E=(G,L)=>{let y=0,I=1,V=1,F=0;for(let X=0;X<r;X++)y+=D(G*V,L*V)*I,F+=I,I*=l,V*=a;return y/F},M={sample(G,L){var P;const y=T.sample(G,L);if(y.direction===void 0)return y;const I=((P=b.clock)==null?void 0:P.time)??0,V=E((G+p*I)*o,(L+x*I)*o);let F=H(V+i,-1,1);if(h<1){const S=Math.hypot(G-R,L-w)/v,$=H((S-h)/(1-h),0,1);F=we(F,1,$*$*(3-2*$))}const X=F>=0;return{direction:X?y.direction:y.direction+Math.PI,influence:y.influence*(X?F:-F*u),value:y.value}}};return T.deposit&&(M.deposit=T.deposit.bind(T)),T.advance&&(M.advance=T.advance.bind(T)),M}},_t=e=>{const{sinks:t,influence:o=.9,falloff:r=1,core:a=8,valueRadius:l=120}=e;return({width:i,height:u})=>{const h=i/2,p=u/2,x=Math.min(i,u),b=t.map(T=>({x:h+(T.x-.5)*x,y:p+(T.y-.5)*x,weight:T.weight??1,swirl:T.swirl??0}));return{sample(T,D){let R=0,w=0,v=1/0;for(const M of b){const G=M.x-T,L=M.y-D,y=Math.hypot(G,L)||1e-6;y<v&&(v=y);const I=M.weight/Math.pow(Math.max(y,a),r),V=G/y,F=L/y;R+=(V-F*M.swirl)*I,w+=(F+V*M.swirl)*I}return{direction:Math.hypot(R,w)>1e-9?Math.atan2(w,R):void 0,influence:o,value:H(1-v/l,0,1)}}}}};class Dt{constructor(t,o,r){Ye(this,"cols");Ye(this,"rows");Ye(this,"invCell");Ye(this,"buckets");this.cols=Math.max(1,Math.ceil(o/t)),this.rows=Math.max(1,Math.ceil(r/t)),this.invCell=1/t,this.buckets=new Array(this.cols*this.rows)}colOf(t){const o=t*this.invCell|0;return o<0?0:o>=this.cols?this.cols-1:o}rowOf(t){const o=t*this.invCell|0;return o<0?0:o>=this.rows?this.rows-1:o}add(t){const o=this.rowOf(t.y)*this.cols+this.colOf(t.x);let r=this.buckets[o];r===void 0&&(r=[],this.buckets[o]=r),t.gridBucket=r,t.gridSlot=r.length,r.push(t)}remove(t){const o=t.gridBucket,r=t.gridSlot;if(o===void 0||r===void 0)return;const a=o.length-1,l=o[a];l!==void 0&&r!==a&&(o[r]=l,l.gridSlot=r),o.pop(),t.gridBucket=void 0,t.gridSlot=void 0}forEachWithin(t,o,r,a){const l=r*r,i=this.colOf(t-r),u=this.colOf(t+r),h=this.rowOf(o-r),p=this.rowOf(o+r);for(let x=h;x<=p;x++){const b=x*this.cols;for(let T=i;T<=u;T++){const D=this.buckets[b+T];if(D!==void 0)for(let R=0;R<D.length;R++){const w=D[R];if(w===void 0)continue;const v=w.x-t,E=w.y-o;v*v+E*E<=l&&a(w)}}}}within(t,o,r){const a=[],l=r*r,i=this.colOf(t-r),u=this.colOf(t+r),h=this.rowOf(o-r),p=this.rowOf(o+r);for(let x=h;x<=p;x++){const b=x*this.cols;for(let T=i;T<=u;T++){const D=this.buckets[b+T];if(D!==void 0)for(let R=0;R<D.length;R++){const w=D[R];if(w===void 0)continue;const v=w.x-t,E=w.y-o;v*v+E*E<=l&&a.push(w)}}}return a}}const It=(e={})=>{const{stepLength:t=2,stepValueInfluence:o=0,stepDepthFalloff:r=1,branchStepScale:a=1,minStep:l=(e.stepLength??2)*.4,wander:i=.22,substrateWeight:u=.6,branchProbability:h=.02,branchAngle:p=.6,branchAngleJitter:x=.4,branchValueInfluence:b=.5,branchMinDepth:T=0,branchDecay:D=1,pressureRadius:R=14,pressureWeight:w=.6,pressureValueFalloff:v=0,pressureCap:E=1,collisionRadius:M=2.2,vigorJitter:G=.45,overtake:L=.5,passOnLoss:y=.4,bloomOnLoss:I=.25,bloomTips:V=5,bloomStepsMin:F=3,bloomStepsMax:X=8,bloomJitter:P=.75,burstProbability:S=0,burstArms:$=16,burstStepsMin:d=4,burstStepsMax:k=16,burstValueFalloff:C=0,lifeMin:n=0,lifeMax:A=0,maxTips:J=1/0,maxNodes:U=12e4,margin:c=8,horizon:f=0,depositOnGrow:m=!1,girthVar:g=0,girthSwell:_=0,girthRate:q=.06,girthRadius:Q=10,girthSaturation:Z=14}=e,oe=128,K=g>0||_!==0;return({substrate:Y,width:se,height:ae})=>{const ee=Math.ceil(M/Math.max(l,.1))+2,fe=N=>A>0?N.int(n,A):void 0,he=N=>g>0?H(1+N.range(-g,g),.2,2):1,pe=(N,s)=>H(N*(1+_*(s*2-1)),.25,3);let ne=[];const te=new Dt(Math.max(R,Q,M,4),se,ae);let ce=[],ye=0,_e=0,be=!1,Ce=1;const De=new Set;let Ie=0,Ee=0,Me=0,Se=0,Re=0;const Je=N=>{if(N.owner===Ie)return;const s=Ee-N.x,O=Me-N.y,W=s*s+O*O;if(W<.001)return;const z=1/W;Se+=s*z,Re+=O*z};let Le=0;const ge=()=>{Le+=1};let ze=[],Be=null,Ge=1/0;const Qe=N=>{if(N.owner===Ie||ze.includes(N.index))return;const s=N.x-Ee,O=N.y-Me,W=s*s+O*O;W<Ge&&(Ge=W,Be=N)},Ne=(N,s,O,W,z,B,j,re,de=1)=>{var xe;const ue={index:ne.length,x:N,y:s,parentIndex:O,depth:W,armIndex:z,age:ye,value:B,owner:j,vigor:re};return K&&(ue.width=de),ne.push(ue),te.add(ue),W>_e&&(_e=W),m&&((xe=Y.deposit)==null||xe.call(Y,N,s,1)),ue},Xe=()=>{const N=ye-f;if(N<=0)return;const s=new Uint8Array(ne.length);let O=0;for(const B of ne)B.age>=N?s[B.index]=1:O+=1;if(O===0)return;for(const B of ne)(s[B.index]??0)===1&&B.parentIndex>=0&&(s[B.parentIndex]??0)===0&&(s[B.parentIndex]=2);for(const B of ne)(s[B.index]??0)!==1&&te.remove(B);const W=new Int32Array(ne.length).fill(-1),z=[];for(const B of ne)(s[B.index]??0)!==0&&(W[B.index]=z.length,z.push(B));for(const B of z)(s[B.index]??0)===2?B.parentIndex=-2:B.parentIndex>=0&&(B.parentIndex=W[B.parentIndex]??-2),B.index=W[B.index]??0;ne=z;for(const B of ce)B.nodeIndex=W[B.nodeIndex]??0,B.recent=B.recent.map(j=>W[j]??-1).filter(j=>j>=0)};return{init(N){N.length>0&&(f>0||ne.length<U)&&(be=!1);for(const s of N){if(ne.length>=U)break;if(te.within(s.x,s.y,M).length>0)continue;const O=Y.sample(s.x,s.y),W=Ce++,z=$e(s.seed),B=(.5+O.value)*(1+z.range(-G,G)),j=he(z),re=Ne(s.x,s.y,-1,0,s.armIndex,O.value,W,B,j);ce.push({id:W,x:s.x,y:s.y,heading:s.heading,depth:0,spawnDepth:0,armIndex:s.armIndex,nodeIndex:re.index,rng:z,recent:[re.index],grace:ee,generation:0,vigor:B,life:fe(z),girthBias:j,girth:.5})}},step(){if(be)return!1;const N=[];for(const s of ce){if(ne.length>=U){if(f===0)break;N.push(s);continue}if(De.has(s.id))continue;if(s.life!==void 0){if(s.life<=0)continue;s.life-=1}const O=Y.sample(s.x,s.y),W=s.bloom?P:i;let z=s.heading+s.rng.range(-W,W);if(!s.bloom&&O.direction!==void 0){const ie=Math.min(1,O.influence*u);z+=at(z,O.direction)*ie}if(!s.bloom&&w>0){const ie=w*(1-v*O.value);if(ie>1e-4){Ie=s.id,Ee=s.x,Me=s.y,Se=0,Re=0,te.forEachWithin(s.x,s.y,R,Je);const me=Math.hypot(Se,Re);if(me>1e-6){const ve=Math.min(E,ie*me);z+=at(z,Math.atan2(Re,Se))*ve}}}const B=Math.max(l,t*Math.pow(r,s.depth)*Math.pow(a,s.generation)*(1+o*(O.value*2-1))),j=s.x+Math.cos(z)*B,re=s.y+Math.sin(z)*B;if(j<c||re<c||j>se-c||re>ae-c)continue;if(s.grace>0)s.grace-=1;else{Ie=s.id,Ee=s.x,Me=s.y,ze=s.recent,Be=null,Ge=1/0,te.forEachWithin(j,re,M,Qe);const ie=Be;if(ie){const me=s.vigor/(s.vigor+ie.vigor);if(s.rng.next()<me)s.rng.next()<L&&De.add(ie.owner),s.grace=ee;else if(s.rng.next()<y)s.grace=ee;else{if(s.rng.next()<I&&ne.length<U)for(let ve=0;ve<V;ve++){const ke=s.rng.int(F,X);N.push({id:s.id,x:s.x,y:s.y,heading:s.rng.range(0,Fe),depth:s.depth,spawnDepth:s.spawnDepth,armIndex:s.armIndex,nodeIndex:s.nodeIndex,rng:$e(s.rng.int(0,2**31-1)),recent:[...s.recent],grace:ke+1,generation:s.generation+1,vigor:s.vigor,life:ke,bloom:!0,girthBias:s.girthBias,girth:s.girth})}continue}}}let de=1;if(K){if(_!==0){Le=0,te.forEachWithin(j,re,Q,ge);const ie=H(Le/Z,0,1);s.girth+=q*(ie-s.girth)}de=pe(s.girthBias,s.girth)}const ue=Ne(j,re,s.nodeIndex,s.depth+1,s.armIndex,O.value,s.id,s.vigor,de);s.x=j,s.y=re,s.heading=z,s.depth=ue.depth,s.nodeIndex=ue.index,s.recent.push(ue.index),s.recent.length>ee&&s.recent.shift(),N.push(s);const xe=s.bloom||ue.depth<T?0:h*we(1,O.value*2,b)*(D===1?1:Math.pow(D,ue.depth-s.spawnDepth));if(s.rng.next()<xe&&ne.length<U&&ce.length<J){const ie=s.rng.next()<.5?-1:1,me=p+(x>0?s.rng.range(-x,x):0),ve=$e(s.rng.int(0,2**31-1)),ke=s.vigor*(1+ve.range(-G,G)),gt=g>0?H(s.girthBias*(1+ve.range(-g,g)*.5),.2,2):1;N.push({id:Ce++,x:j,y:re,heading:z+ie*me,depth:ue.depth,spawnDepth:ue.depth,armIndex:s.armIndex,nodeIndex:ue.index,rng:ve,recent:[...s.recent],grace:ee,generation:s.generation+1,vigor:ke,life:fe(ve),girthBias:gt,girth:s.girth})}if(!s.bloom&&S>0&&ne.length<U&&s.rng.next()<S*(1-C*O.value))for(let ie=0;ie<$;ie++){const me=s.rng.int(d,k);N.push({id:s.id,x:j,y:re,heading:s.rng.range(0,Fe),depth:s.depth,spawnDepth:s.spawnDepth,armIndex:s.armIndex,nodeIndex:s.nodeIndex,rng:$e(s.rng.int(0,2**31-1)),recent:[...s.recent],grace:me+1,generation:s.generation+1,vigor:s.vigor,life:me,bloom:!0,girthBias:s.girthBias,girth:s.girth})}}return ce=De.size?N.filter(s=>!De.has(s.id)):N,De.clear(),ye+=1,f>0&&ye%oe===0&&Xe(),(ce.length===0||f===0&&ne.length>=U)&&(be=!0),!be},get scene(){return{nodes:ne,maxDepth:_e,tipCount:ce.length,age:ye,done:be}}}}},Te=(e,t,o)=>{const r=Math.sin(e*127.1+t*311.7+o*74.7)*43758.5453;return r-Math.floor(r)},Lt=(e={})=>{const{background:t="#efe7d6",ink:o="#1b160f",baseWidth:r=1.1,minWidth:a=.3,valueWidth:l=.6,widthJitter:i=.6,gapProbability:u=.06,tremor:h=.9,knotProbability:p=.045,knotScale:x=1.8,blotProbability:b=.0035,coreRadius:T=1.8,speckCount:D=1600,speckRadius:R=.65,speckBias:w=.8,fadeBands:v=28,fadeGamma:E=1.5,refreshEvery:M=1}=e;return()=>{let G=null;const L=new Map;let y=null,I=0;const V=(d,k,C)=>{const n=$e(11),A=[];for(let J=0;J<D;J++){const U=n.next()*d,c=n.next()*k,f=C.sample(U,c).value;n.next()<1-w*f&&A.push({x:U,y:c,r:R*(.5+n.next())})}return A},F=d=>d.x+(Te(d.x,d.y,2)-.5)*2*h,X=d=>d.y+(Te(d.x,d.y,3)-.5)*2*h,P=(d,k)=>{const C=new Map,n=new Path2D;for(const A of d){if(A.parentIndex===-1){T>0&&(n.moveTo(A.x+T,A.y),n.arc(A.x,A.y,T,0,Math.PI*2));continue}if(A.parentIndex<0)continue;const J=k[A.parentIndex];if(!J)continue;const U=1+l*(A.value*2-1),c=Math.max(a,r*U*(1-i/2+i*Te(A.x,A.y,4)));if(Te(A.x,A.y,5)<p){const g=Math.max(c*x*(.6+Te(A.x,A.y,6)),.5);n.moveTo(A.x+g,A.y),n.arc(A.x,A.y,g,0,Math.PI*2)}if(Te(A.x,A.y,7)<b)for(let g=0;g<3;g++){const _=A.x+(Te(A.x,A.y,8+g)-.5)*4,q=A.y+(Te(A.x,A.y,11+g)-.5)*4,Q=1+Te(A.x,A.y,14+g)*2.2;n.moveTo(_+Q,q),n.arc(_,q,Q,0,Math.PI*2)}if(Te(A.x,A.y,1)<u)continue;const f=Math.round(c*4)/4;let m=C.get(f);m||(m=new Path2D,C.set(f,m)),m.moveTo(F(J),X(J)),m.lineTo(F(A),X(A))}return{strokes:C,dots:n}},S=(d,k,C)=>{d.globalAlpha=C,d.strokeStyle=o,d.lineCap="round";for(const[n,A]of k.strokes)d.lineWidth=n,d.stroke(A);d.fillStyle=o,d.fill(k.dots),d.globalAlpha=1},$=(d,k)=>{const{ctx:C,scene:n}=d,A=Math.max(1,Math.round(k/v)),J=Math.floor(n.age/A),U=new Map;for(const f of n.nodes){const m=Math.floor(f.age/A);if(J-m>v+1||m!==J&&L.has(m))continue;const g=U.get(m);g?g.push(f):U.set(m,[f])}for(const[f,m]of U)L.set(f,P(m,n.nodes));for(const f of L.keys())J-f>v+1&&L.delete(f);const c=[...L.keys()].sort((f,m)=>f-m);for(const f of c){const m=(f+1)*A,g=Math.max(0,n.age-m)/k,_=Math.pow(Math.max(0,1-g),E);if(_<.004)continue;const q=L.get(f);q&&S(C,q,_)}};return{clear(d,k,C){d.fillStyle=t,d.fillRect(0,0,k,C)},fade(d,k,C,n){d.save(),d.globalAlpha=n,d.fillStyle=t,d.fillRect(0,0,k,C),d.restore()},render(d){const{ctx:k,width:C,height:n,substrate:A}=d;if(!G){const J=new Path2D;for(const U of V(C,n,A))J.moveTo(U.x+U.r,U.y),J.arc(U.x,U.y,U.r,0,Math.PI*2);G=J}if(k.fillStyle=o,k.fill(G),d.horizon!==void 0){$(d,d.horizon);return}(!y||I%Math.max(1,M)===0)&&(y=P(d.scene.nodes,d.scene.nodes)),I+=1,S(k,y,1)}}}},We=e=>{if(typeof e!="string")return[e[0],e[1],e[2]];let t=e.trim();if(t[0]==="#"&&(t=t.slice(1)),t.length===3){const l=parseInt(t[0]+t[0],16),i=parseInt(t[1]+t[1],16),u=parseInt(t[2]+t[2],16);return[l/255,i/255,u/255]}const o=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);return[o/255,r/255,a/255]},Ue=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4),Ze=e=>e<=.0031308?e*12.92:1.055*Math.pow(e,1/2.4)-.055,qe=1024;let Oe=null;const Ve=e=>{if(!Oe){Oe=new Uint8ClampedArray(qe+1);for(let t=0;t<=qe;t++)Oe[t]=Ze(t/qe)*255}return e<=0?Oe[0]:e>=1?Oe[qe]:Oe[e*qe|0]},Ft=(e,t,o)=>{const r=.4122214708*e+.5363325363*t+.0514459929*o,a=.2119034982*e+.6806995451*t+.1073969566*o,l=.0883024619*e+.2817188376*t+.6299787005*o,i=Math.cbrt(r),u=Math.cbrt(a),h=Math.cbrt(l);return[.2104542553*i+.793617785*u-.0040720468*h,1.9779984951*i-2.428592205*u+.4505937099*h,.0259040371*i+.7827717662*u-.808675766*h]},ht=(e,t,o)=>{const r=e+.3963377774*t+.2158037573*o,a=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,i=r*r*r,u=a*a*a,h=l*l*l;return[4.0767416621*i-3.3077115913*u+.2309699292*h,-1.2684380046*i+2.6097574011*u-.3413193965*h,-.0041960863*i-.7034186147*u+1.707614701*h]},dt=e=>{const[t,o,r]=We(e);return Ft(Ue(t),Ue(o),Ue(r))},Ct=(e,t,o)=>{const r=ht(e,t,o);return[H(Ze(H(r[0],0,1)),0,1),H(Ze(H(r[1],0,1)),0,1),H(Ze(H(r[2],0,1)),0,1)]},et=1e-4,tt=.001,Bt={combine:`
    vec3 lin = srgbToLinear(deltaColor);
    vec3 absorb = -log(max(lin, vec3(1e-4)));
    accum.rgb = accum.rgb * fade + absorb * deltaAlpha * uGain;
  `,resolve:`
    vec3 lin = srgbToLinear(bg) * exp(-accum.rgb);
    color = linearToSrgb(lin);
  `},mt=()=>{let e=[0,0,0];const t=2048,o=16,r=new Float32Array(t+1);for(let i=0;i<=t;i++)r[i]=Math.exp(-(i/t)*o);const a=i=>i<=0?1:i>=o?0:r[i/o*t|0],l=new Float32Array(3);return{channels:3,gl:Bt,prepare(i){e=[Ue(i[0]),Ue(i[1]),Ue(i[2])]},encode(i){const[u,h,p]=We(i);return l[0]=-Math.log(H(Ue(u),et,1)),l[1]=-Math.log(H(Ue(h),et,1)),l[2]=-Math.log(H(Ue(p),et,1)),l},mix(i,u,h,p){i[u]=i[u]+h[0]*p,i[u+1]=i[u+1]+h[1]*p,i[u+2]=i[u+2]+h[2]*p},fade(i,u,h){i[u]=i[u]*h,i[u+1]=i[u+1]*h,i[u+2]=i[u+2]*h},isEmpty(i,u){return i[u]<tt&&i[u+1]<tt&&i[u+2]<tt},resolve(i,u,h){h[0]=Ve(e[0]*a(i[u])),h[1]=Ve(e[1]*a(i[u+1])),h[2]=Ve(e[2]*a(i[u+2]))}}},Gt={combine:`
    vec3 srcLab = rgbToOklab(srgbToLinear(deltaColor));
    float t = clamp(deltaAlpha * uGain, 0.0, 1.0);
    float cov = accum.a * fade;
    accum.rgb = mix(accum.rgb, srcLab, t);
    accum.a = cov + t * (1.0 - cov);
  `,resolve:`
    vec3 lin = oklabToLinear(accum.rgb);
    vec3 c = linearToSrgb(clamp(lin, 0.0, 1.0));
    color = mix(bg, c, accum.a);
  `},Xt=()=>{const e=[0,0,0],t=new Float32Array(4);return{channels:4,gl:Gt,prepare(o){e[0]=o[0]*255,e[1]=o[1]*255,e[2]=o[2]*255},encode(o){const[r,a,l]=dt(o);return t[0]=r,t[1]=a,t[2]=l,t[3]=0,t},mix(o,r,a,l){const i=H(l,0,1);o[r]=we(o[r],a[0],i),o[r+1]=we(o[r+1],a[1],i),o[r+2]=we(o[r+2],a[2],i);const u=o[r+3];o[r+3]=u+i*(1-u)},fade(o,r,a){o[r+3]=o[r+3]*a},isEmpty(o,r){return o[r+3]<tt},resolve(o,r,a){const l=o[r+3];if(l<=et){a[0]=e[0],a[1]=e[1],a[2]=e[2];return}const i=ht(o[r],o[r+1],o[r+2]),u=Ve(H(i[0],0,1)),h=Ve(H(i[1],0,1)),p=Ve(H(i[2],0,1));a[0]=we(e[0],u,l),a[1]=we(e[1],h,l),a[2]=we(e[2],p,l)}}},le=e=>{const t=e.toString();return t.includes(".")||t.includes("e")?t:`${t}.0`},Nt=(e={})=>{const{massGain:t=.6,massInertia:o=.7,mixFloor:r=.12,chromaPop:a=.04,hueSpin:l=.08,massCap:i=3,massDecay:u=.004,targetL:h=.62,brightRegulate:p=.04,targetC:x=.11,chromaRegulate:b=.03,lVar:T=0,cVar:D=0,varScale:R=.02,varSpeed:w=.003,hueDrift:v=.05,hueDriftScale:E=.01,grain:M=.01,show:G=1.2}=e,L=R*1.7;return{...Xt(),gl:{combine:`
        if (deltaAlpha > 0.001) {
          vec3 srcLab = rgbToOklab(srgbToLinear(deltaColor));
          float w = deltaAlpha * uGain;
          float m = accum.a;
          // Influence: more where empty; resisted by mass; floored so fresh
          // paint never fully disappears on dense ground.
          float k = max(${le(r)},
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
            float c = mix(oc, nc, k) + ${le(a)} * abs(sin(dh)) * k;
            accum.yz = vec2(cos(h), sin(h)) * c;
          } else {
            accum.yz = mix(ov, nv, k);
          }
          accum.a = min(m + w * ${le(t)}, ${le(i)});
        }
      `,evolve:`
        float m = max(0.0, accum.a - ${le(u)});
        // Targets vary across the field and evolve in TIME (z axis of the noise,
        // so the pattern churns in place instead of sliding diagonally), with
        // octaves so it doesn't read as one obvious blob field.
        float tL = ${le(h)} + ${le(T)} *
          (fbm3(vec3(gl_FragCoord.xy * ${le(R)}, uTime * ${le(w)})) - 0.5);
        float tC = ${le(x)} + ${le(D)} *
          (fbm3(vec3(gl_FragCoord.xy * ${le(L)}, uTime * ${le(w)} + 50.0)) - 0.5);
        // Brightness homeostasis toward the (varying) target — fresh dark marks
        // get lifted slowly, so new growth stands out before settling in.
        accum.x += ${le(p)} * (tL - accum.x);
        // Chroma homeostasis toward the (varying) target.
        float c = length(accum.yz);
        if (c > 1e-4) {
          accum.yz *= max(0.0, c + ${le(b)} * (tC - c)) / c;
        }
        // Gentle hue drift (kept small — brightness/chroma carry the evolution).
        float ang = ${le(v)} *
          (valueNoise3(vec3(gl_FragCoord.xy * ${le(E)}, uTime * 0.01)) - 0.5);
        float cs = cos(ang); float sn = sin(ang);
        accum.yz = mat2(cs, -sn, sn, cs) * accum.yz;
        // Per-cell brightness grain — spatiotemporal blue noise (.a channel,
        // golden-ratio rotated per frame): even, non-repeating, no diagonal
        // structure, and mean-zero over time so the cumulative add doesn't drift.
        accum.x += ${le(M)} * (fract(
          texture(uBlue, gl_FragCoord.xy / uBlueSize).a + uTime * 0.61803399) - 0.5);
        accum.x = clamp(accum.x, 0.0, 1.0);
        accum.a = m;
      `,resolve:`
        float m = clamp(accum.a * ${le(G)}, 0.0, 1.0);
        vec3 lin = oklabToLinear(accum.rgb);
        vec3 cc = linearToSrgb(clamp(lin, 0.0, 1.0));
        color = mix(bg, cc, m);
      `}}},Ot=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5].map(e=>(e+.5)/16),ot=(e={})=>{var T;const{pigment:t=mt(),background:o="#efe7d6",resolution:r=1,radius:a=1.3,fade:l=.997,fadeGrace:i,stateCell:u=16,dither:h=0}=e,p=We(o),x=[Math.round(p[0]*255),Math.round(p[1]*255),Math.round(p[2]*255)];(T=t.prepare)==null||T.call(t,p);const b=t.channels;return D=>{const{width:R,height:w}=D,v=Math.max(1,Math.round(R*r)),E=Math.max(1,Math.round(w*r)),M=v/R,G=E/w,L=new Float32Array(v*E*b),y=new Uint8Array(v*E);let I=[],V=[];const F=Math.max(1,Math.ceil(R/u)),X=Math.max(1,Math.ceil(w/u)),P=new Float32Array(F*X).fill(-1e9);let S=0,$=null,d=null,k=null;const C=new Float32Array(3),n=(U,c)=>{const f=H(Math.floor(U/u),0,F-1);return H(Math.floor(c/u),0,X-1)*F+f},A=()=>{if($)return;$=document.createElement("canvas"),$.width=v,$.height=E;const U=$.getContext("2d");if(!U)throw new Error("Unable to acquire paint composite context.");d=U,k=U.createImageData(v,E);const c=k.data;for(let f=0;f<v*E;f++)c[f*4]=x[0],c[f*4+1]=x[1],c[f*4+2]=x[2],c[f*4+3]=255},J=U=>{const c=k.data;t.resolve(L,U*b,C);const f=U*4;let m=0;if(h>0){const g=U%v,_=U/v|0;m=(Ot[(_&3)*4+(g&3)]-.5)*h}c[f]=C[0]+m,c[f+1]=C[1]+m,c[f+2]=C[2]+m};return{deposit(U,c,f,m,g){const _=t.encode(f),q=U*M,Q=c*G,Z=(g??a)*M,oe=Math.max(0,Math.floor(q-Z)),K=Math.min(v-1,Math.ceil(q+Z)),Y=Math.max(0,Math.floor(Q-Z)),se=Math.min(E-1,Math.ceil(Q+Z)),ae=Z*Z;for(let ee=Y;ee<=se;ee++)for(let fe=oe;fe<=K;fe++){const he=fe+.5-q,pe=ee+.5-Q,ne=he*he+pe*pe;if(ne>ae)continue;const te=Math.min(1,(1-ne/ae)*1.8),ce=ee*v+fe;t.mix(L,ce*b,_,m*te),y[ce]||(y[ce]=1,I.push(ce))}P[n(U,c)]=S},step(U){S+=1;const c=Math.pow(l,U);if(c>=1||I.length===0)return;const f=i!==void 0,m=[];for(let g=0;g<I.length;g++){const _=I[g];if(f){const q=_%v/M,Q=(_/v|0)/G;if(S-P[n(q,Q)]<=i){m.push(_);continue}}t.fade(L,_*b,c),t.isEmpty(L,_*b)?(y[_]=0,V.push(_)):m.push(_)}I=m},composite(U,c,f){A();for(let m=0;m<V.length;m++){const g=V[m]*4,_=k.data;_[g]=x[0],_[g+1]=x[1],_[g+2]=x[2]}V=[];for(let m=0;m<I.length;m++)J(I[m]);d.putImageData(k,0,0),U.drawImage($,0,0,c,f)},sample(U,c){const f=H(Math.floor(U*M),0,v-1),m=H(Math.floor(c*G),0,E-1);return t.resolve(L,(m*v+f)*b,C),[C[0]/255,C[1]/255,C[2]/255]}}}},$t=(e,t)=>{if(typeof document>"u")return null;const o=document.createElement("canvas");o.width=e,o.height=t;const r=o.getContext("webgl2",{premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1});return!r||!r.getExtension("EXT_color_buffer_float")?null:{gl:r,canvas:o}},Vt=e=>{var t;(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()},lt=(e,t,o)=>{const r=e.createShader(t);if(!r)throw new Error("Failed to create shader.");if(e.shaderSource(r,o),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){const a=e.getShaderInfoLog(r);throw e.deleteShader(r),new Error(`Shader compile error: ${a}`)}return r},Ke=(e,t,o)=>{const r=lt(e,e.VERTEX_SHADER,t),a=lt(e,e.FRAGMENT_SHADER,o),l=e.createProgram();if(!l)throw new Error("Failed to create program.");if(e.attachShader(l,r),e.attachShader(l,a),e.linkProgram(l),e.deleteShader(r),e.deleteShader(a),!e.getProgramParameter(l,e.LINK_STATUS)){const i=e.getProgramInfoLog(l);throw e.deleteProgram(l),new Error(`Program link error: ${i}`)}return l},Wt=e=>{const t=e.createVertexArray();return()=>{e.bindVertexArray(t),e.drawArrays(e.TRIANGLES,0,3),e.bindVertexArray(null)}},ut=(e,t,o)=>{const r=e.createTexture();if(!r)throw new Error("Failed to create accumulation texture.");return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA16F,t,o,0,e.RGBA,e.HALF_FLOAT,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r},zt=(e,t,o)=>{let r=ut(e,t,o),a=ut(e,t,o);const l=e.createFramebuffer();if(!l)throw new Error("Failed to create framebuffer.");e.bindFramebuffer(e.FRAMEBUFFER,l);for(const i of[r,a])e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT);return e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&console.warn("[paint] accumulation framebuffer incomplete."),e.bindFramebuffer(e.FRAMEBUFFER,null),{srcTexture:()=>r,bindDst(){e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),e.viewport(0,0,t,o)},swap(){const i=r;r=a,a=i},dispose(){e.deleteTexture(r),e.deleteTexture(a),e.deleteFramebuffer(l)}}},He=`#version 300 es
out vec2 vUv;
void main() {
  float x = (gl_VertexID == 1) ? 3.0 : -1.0;
  float y = (gl_VertexID == 2) ? 3.0 : -1.0;
  vUv = vec2((x + 1.0) * 0.5, (y + 1.0) * 0.5);
  gl_Position = vec4(x, y, 0.0, 1.0);
}`,nt=`#version 300 es
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
`,Yt=e=>`${nt}
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
}`,jt=`${nt}
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
  outColor = mix(c, avg, rate);
}`,qt=`#version 300 es
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
  c.x += uSharpen * band.x * mask;                   // lightness contrast
  c.yz += uSharpen * uSharpenChroma * band.yz * mask; // colour edges (gentler)
  c.x = clamp(c.x, 0.0, 1.0);
  outColor = c;
}`,Kt=e=>`${nt}
uniform sampler2D uAccum;
uniform float uTime;
uniform sampler2D uBlue;
uniform float uBlueSize;
void main() {
  vec4 accum = texture(uAccum, vUv);
  ${e.evolve??""}
  outColor = accum;
}`,Ht=e=>`${nt}
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
}`,Jt="/fveld2/assets/blue_noise_LDR_RGBA_0-DEb-wTjH.png",Qt=(e={})=>{const t=e.pigment??mt(),o=e.background??"#efe7d6",r=e.radius??1.3,a=e.fade??.997,l=e.dither??0,i=e.depositGain??2.5,u=e.diffuse??0,h=e.tooth??0,p=e.toothScale??.3,x=e.diffuseEdge??0,b=e.diffuseVar??0,T=e.diffuseVarScale??.008,D=e.diffuseVarSpeed??.002,R=e.grain??0,w=e.grainScale??.6,v=e.sharpen??0,E=e.sharpenChroma??.1,M=e.sharpenRadius??3,G=e.paperGrain??0,L=e.paperGrainScale??.5,y=e.paperSpeck??0,I=e.paperSpeckScale??.7,V=e.paperChroma??0,F=We(o);return X=>{const{width:P,height:S}=X,$=e.resolution??X.pixelRatio??1,d=Math.max(1,Math.round(P*$)),k=Math.max(1,Math.round(S*$)),C=t.gl?$t(d,k):null;if(!C)return console.info("[paint] WebGL2 unavailable — CPU fallback."),ot(e)(X);console.info("[paint] GPU backend active.");const{gl:n,canvas:A}=C,J=d/P,U=k/S,c=Ke(n,He,Yt(t.gl)),f=Ke(n,He,Ht(t.gl)),m=Wt(n),g=zt(n,d,k),_=n.getUniformLocation(c,"uFade"),q=n.getUniformLocation(c,"uGain");n.useProgram(c),n.uniform1i(n.getUniformLocation(c,"uSrc"),0),n.uniform1i(n.getUniformLocation(c,"uDelta"),1),n.uniform1f(q,i),n.uniform1f(n.getUniformLocation(c,"uTooth"),h),n.uniform1f(n.getUniformLocation(c,"uToothScale"),p);const Q=n.getUniformLocation(f,"uBg"),Z=n.getUniformLocation(f,"uDither");n.useProgram(f),n.uniform1i(n.getUniformLocation(f,"uAccum"),0),n.uniform3f(Q,F[0],F[1],F[2]),n.uniform1f(Z,l),n.uniform1f(n.getUniformLocation(f,"uGrain"),R),n.uniform1f(n.getUniformLocation(f,"uGrainScale"),w),n.uniform1f(n.getUniformLocation(f,"uPaperGrain"),G),n.uniform1f(n.getUniformLocation(f,"uPaperGrainScale"),L),n.uniform1f(n.getUniformLocation(f,"uPaperSpeck"),y),n.uniform1f(n.getUniformLocation(f,"uPaperSpeckScale"),I),n.uniform1f(n.getUniformLocation(f,"uPaperChroma"),V),n.uniform1i(n.getUniformLocation(f,"uBlue"),2);const oe=n.getUniformLocation(f,"uBlueSize"),K=n.getUniformLocation(f,"uTime");n.uniform1f(oe,256);const Y=u>0?Ke(n,He,jt):null;let se=null;Y&&(n.useProgram(Y),n.uniform1i(n.getUniformLocation(Y,"uAccum"),0),n.uniform1f(n.getUniformLocation(Y,"uDiffuse"),u),n.uniform2f(n.getUniformLocation(Y,"uTexel"),1/d,1/k),n.uniform1f(n.getUniformLocation(Y,"uEdge"),x),n.uniform1f(n.getUniformLocation(Y,"uVar"),b),n.uniform1f(n.getUniformLocation(Y,"uVarScale"),T),n.uniform1f(n.getUniformLocation(Y,"uVarSpeed"),D),se=n.getUniformLocation(Y,"uTime"));const ae=v>0?Ke(n,He,qt):null;ae&&(n.useProgram(ae),n.uniform1i(n.getUniformLocation(ae,"uAccum"),0),n.uniform1f(n.getUniformLocation(ae,"uSharpen"),v),n.uniform1f(n.getUniformLocation(ae,"uSharpenChroma"),E),n.uniform1f(n.getUniformLocation(ae,"uRadius"),M),n.uniform2f(n.getUniformLocation(ae,"uTexel"),1/d,1/k));const ee=t.gl.evolve?Ke(n,He,Kt(t.gl)):null;let fe=null,he=null;ee&&(fe=n.getUniformLocation(ee,"uTime"),he=n.getUniformLocation(ee,"uBlueSize"),n.useProgram(ee),n.uniform1i(n.getUniformLocation(ee,"uAccum"),0),n.uniform1i(n.getUniformLocation(ee,"uBlue"),2),n.uniform1f(he,256));let pe=0;const ne=document.createElement("canvas");ne.width=d,ne.height=k;const te=ne.getContext("2d");if(!te)return ot(e)(X);te.lineCap="round",te.lineJoin="round",te.clearRect(0,0,d,k);let ce=!1,ye=0,_e=0,be=0,Ce=0;const De=(N,s,O,W)=>{if(!ce){ce=!0,ye=N,_e=s,be=O,Ce=W;return}N<ye&&(ye=N),s<_e&&(_e=s),O>be&&(be=O),W>Ce&&(Ce=W)};let Ie=!1,Ee=0,Me=0,Se=0,Re=0;const Je=N=>{const[s,O,W]=We(N);return`rgb(${s*255|0},${O*255|0},${W*255|0})`},Le=document.createElement("canvas");Le.width=d,Le.height=k;const ge=Le.getContext("2d");if(!ge)return ot(e)(X);ge.lineCap="round",ge.lineJoin="round";let ze=0,Be=!1;const Ge=n.createTexture();n.bindTexture(n.TEXTURE_2D,Ge),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,d,k,0,n.RGBA,n.UNSIGNED_BYTE,null);let Qe=!1;const Ne=n.createTexture();n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,Ne),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,new Uint8Array([128,128,128,255])),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.activeTexture(n.TEXTURE0);const Xe=new Image;return Xe.onload=()=>{Qe||(n.activeTexture(n.TEXTURE2),n.bindTexture(n.TEXTURE_2D,Ne),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,Xe),n.activeTexture(n.TEXTURE0),n.useProgram(f),n.uniform1f(oe,Xe.width),he&&(n.useProgram(ee),n.uniform1f(he,Xe.width)))},Xe.src=Jt,{deposit(N,s,O,W,z){const B=H(W/i,0,1);if(B<=0)return;te.globalAlpha=B,te.fillStyle=Je(O);const j=(z??r)*J,re=N*J,de=s*U;te.beginPath(),te.arc(re,de,j,0,Fe),te.fill(),De(re-j,de-j,re+j,de+j)},stroke(N,s,O,W,z,B,j,re){const de=H(B/i,0,1);if(de<=0)return;ze=de,Be=!0,ge.globalCompositeOperation=re?"destination-over":"source-over",ge.globalAlpha=1,ge.strokeStyle=Je(z);const ue=Math.max(.5,j*J);ge.lineWidth=ue;const xe=N*J,ie=s*U,me=O*J,ve=W*U;ge.beginPath(),ge.moveTo(xe,ie),ge.lineTo(me,ve),ge.stroke(),re&&(ge.globalCompositeOperation="source-over");const ke=ue/2;De(Math.min(xe,me)-ke,Math.min(ie,ve)-ke,Math.max(xe,me)+ke,Math.max(ie,ve)+ke)},step(N){pe+=1;const s=2;let O=!1,W=0,z=0,B=0,j=0;if(ce&&(W=Math.max(0,Math.floor(ye-s)),z=Math.max(0,Math.floor(_e-s)),B=Math.min(d,Math.ceil(be+s)),j=Math.min(k,Math.ceil(Ce+s)),O=B>W&&j>z),Be){if(O){const ie=B-W,me=j-z;te.globalAlpha=ze,te.globalCompositeOperation="destination-over",te.drawImage(Le,W,z,ie,me,W,z,ie,me),te.globalCompositeOperation="source-over",te.globalAlpha=1,ge.clearRect(W,z,ie,me)}Be=!1}let re=O?W:Ee,de=O?z:Me,ue=O?B:Se,xe=O?j:Re;O&&Ie&&(Ee<re&&(re=Ee),Me<de&&(de=Me),Se>ue&&(ue=Se),Re>xe&&(xe=Re)),(O||Ie)&&(n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,Ge),n.pixelStorei(n.UNPACK_ROW_LENGTH,d),n.pixelStorei(n.UNPACK_SKIP_PIXELS,re),n.pixelStorei(n.UNPACK_SKIP_ROWS,de),n.texSubImage2D(n.TEXTURE_2D,0,re,de,ue-re,xe-de,n.RGBA,n.UNSIGNED_BYTE,ne),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0)),O&&te.clearRect(W,z,B-W,j-z),ce=!1,Ie=O,Ee=W,Me=z,Se=B,Re=j,n.useProgram(c),n.uniform1f(_,Math.pow(a,N)),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),m(),g.swap(),ee&&(n.useProgram(ee),n.uniform1f(fe,pe),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),m(),g.swap()),Y&&(n.useProgram(Y),n.uniform1f(se,pe),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),m(),g.swap()),ae&&(n.useProgram(ae),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),g.bindDst(),m(),g.swap()),n.bindFramebuffer(n.FRAMEBUFFER,null)},canvas:A,present(){n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,d,k),n.useProgram(f),n.uniform1f(K,pe),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g.srcTexture()),m()},composite(N,s,O){this.present(),N.drawImage(A,0,0,s,O)},dispose(){Qe=!0,g.dispose(),n.deleteTexture(Ge),n.deleteTexture(Ne),n.deleteProgram(c),n.deleteProgram(f),Y&&n.deleteProgram(Y),ae&&n.deleteProgram(ae),ee&&n.deleteProgram(ee),Vt(n)}}}},Ae=(e,t,o)=>{const r=Math.sin(e*127.1+t*311.7+o*74.7)*43758.5453;return r-Math.floor(r)},Zt=(e={})=>{const{strokeWeight:t=.45,strokeRadius:o=1.4,valueWidth:r=.6,widthJitter:a=.4,minRadius:l=.6,spacing:i=.5,tremor:u=0,shadowOffset:h=0,shadowOffsetWidth:p=0,shadowAngle:x=.79,shadowDarken:b=.5,knotProbability:T=.04,knotRadius:D=2.2,knotWeight:R=1.4,blotProbability:w=.003,blotRadius:v=2.4,blotWeight:E=1.8,coreRadius:M=3,coreWeight:G=2.2}=e,L=(P,S)=>P+(Ae(P,S,2)-.5)*2*u,y=(P,S)=>S+(Ae(P,S,3)-.5)*2*u,I=Math.cos(x),V=Math.sin(x),F=b>0&&(h>0||p>0),X=P=>{const[S,$,d]=We(P),k=1-b;return[S*k,$*k,d*k]};return()=>({mark(P,S,$,d){const k=L(S.x,S.y),C=y(S.x,S.y);if(!$){M>0&&P.deposit(k,C,d,G,M);return}const n=L($.x,$.y),A=y($.x,$.y),J=(1+r*(S.value*2-1))*(1-a/2+a*Ae(S.x,S.y,4))*(S.width??1),U=Math.max(l,o*Math.max(0,J));if(P.stroke){if(F){const c=h+p*U,f=I*c,m=V*c;P.stroke(n+f,A+m,k+f,C+m,X(d),t,U*2,!0)}P.stroke(n,A,k,C,d,t,U*2)}else{const c=k-n,f=C-A,m=Math.hypot(c,f),g=Math.max(1,Math.ceil(m/i)),_=t*Math.min(1,i/(2*U));for(let q=1;q<=g;q++){const Q=q/g;P.deposit(n+c*Q,A+f*Q,d,_,U)}}if(Ae(S.x,S.y,5)<T){const c=D*H(J,.4,2)*(.6+Ae(S.x,S.y,6));P.deposit(k,C,d,R,c)}if(Ae(S.x,S.y,7)<w)for(let c=0;c<3;c++){const f=k+(Ae(S.x,S.y,8+c)-.5)*4,m=C+(Ae(S.x,S.y,11+c)-.5)*4,g=v*(.5+Ae(S.x,S.y,14+c));P.deposit(f,m,d,E,g)}}})},en=(e,t)=>{const o=Math.sin(e*12.9898+t*78.233)*43758.5453;return o-Math.floor(o)},tn=e=>{const{anchors:t,scale:o=.0022,warp:r=0,warpScale:a=o,valueLightness:l=0,fieldInfluence:i=1,armInfluence:u=0,ageInfluence:h=0,jitter:p=0,depthLightness:x=0}=e;return b=>{const{rng:T}=b,D=Pe(T.next),R=Pe(T.next),w=Pe(T.next),v=t.map(M=>dt(M)),E=v.length;return M=>{let G=M.x,L=M.y;r>0&&(G+=R(M.x*a,M.y*a)*r,L+=w(M.x*a,M.y*a)*r);let y=i*((D(G*o,L*o)+1)/2);y+=u*(M.armIndex*.61803%1),y+=h*(M.age*4e-4),p!==0&&(y+=p*(en(M.x,M.y)-.5)),y-=Math.floor(y);const I=y*E,V=Math.floor(I)%E,F=(V+1)%E,X=I-Math.floor(I),P=X*X*(3-2*X),S=v[V],$=v[F];let d=S[0]+($[0]-S[0])*P;const k=S[1]+($[1]-S[1])*P,C=S[2]+($[2]-S[2])*P;return l!==0&&(d+=l*(M.value-.5)),x!==0&&(d+=x*(Math.min(M.depth*.02,1)-.5)),Ct(H(d,0,1),k,C)}}},nn=(e,t,o)=>({rng:r,width:a,height:l})=>({spawn(){const i=a/2,u=l/2,h=Math.min(a,l)/2,p=[];for(let x=0;x<e;x++){const b=h*t*Math.pow(r.next(),o),T=r.range(0,Fe);p.push({x:i+Math.cos(T)*b,y:u+Math.sin(T)*b,heading:r.range(0,Fe),armIndex:x,seed:r.int(0,2**31-1)})}return p}}),on={name:"lichen",stepsPerFrame:3,continuous:{horizon:800,targetTips:60,spawnBatch:8,advanceEvery:20},substrate:e=>{const t=e.scale??1;return Rt(kt(St(ct({scale:.0042/t,influence:.6,vectorField:!0,octaves:3,warp:120*t,warpScale:.0016/t,driftX:1.5*t,driftY:1*t}),Pt(_t({sinks:[{x:.5,y:.5}],influence:.15,falloff:1,core:30*t,valueRadius:1}),{scale:.0045/t,octaves:2,bias:-.5,outwardScale:5.4,rimContain:3.1,driftX:6*t,driftY:6*t}),.58),ct({scale:.0016/t,octaves:2,driftX:1.5*t,driftY:1*t}),{mix:.85,contrast:1.5}),{cell:8,decay:.6,saturation:50,valueShift:.2,repel:.3})(e)},spawner:e=>{const t=Math.min(e.width,e.height)/900;return nn(Math.round(80*t),.5,1)(e)},growth:e=>{const t=Math.min(e.width,e.height)/900,o=e.scale??1;return It({stepLength:1.7*o,stepValueInfluence:.3,stepDepthFalloff:.999,branchStepScale:.88,minStep:.85*o,wander:.13,substrateWeight:.68,branchProbability:.085,branchAngle:.7,branchAngleJitter:.5,branchValueInfluence:.35,branchMinDepth:Math.round(5*t),branchDecay:.99,pressureRadius:11*o,pressureWeight:.16,pressureValueFalloff:1,pressureCap:.35,collisionRadius:2*o,vigorJitter:.5,overtake:.58,passOnLoss:.45,bloomOnLoss:.06,bloomTips:6,bloomStepsMin:1,bloomStepsMax:10,bloomJitter:.85,burstProbability:3e-4,burstArms:20,burstStepsMin:0,burstStepsMax:200,burstValueFalloff:.5,girthVar:.65,girthSwell:.35,girthRate:.05,girthRadius:11*o,girthSaturation:20,lifeMin:900,lifeMax:3200,maxTips:64,horizon:1900,depositOnGrow:!0,maxNodes:Math.max(15e4,Math.round(22e4*t*t))})(e)},renderer:Lt({background:"#f3ecdc",ink:"#1b160f",baseWidth:1.5,minWidth:.6,valueWidth:.55,gapProbability:.05,tremor:.6,knotProbability:.01,knotScale:1.8,blotProbability:.008,coreRadius:3,speckCount:1500,speckRadius:.65,speckBias:.8,fadeBands:48,fadeGamma:1.2}),paint:e=>{const t=e.scale??1;return Qt({pigment:Nt({massGain:5,massCap:2.6,massDecay:13e-5,mixFloor:.2,chromaPop:.15,hueSpin:.5,targetL:.9,brightRegulate:5e-4,lVar:.2,cVar:.6,varScale:.01,varSpeed:.001,targetC:.55,chromaRegulate:1e-5,hueDrift:.0045,hueDriftScale:.012,grain:.05,show:.93}),background:"#f3ecdc",radius:1.4*t,diffuse:.015*t,diffuseEdge:.5,diffuseVar:1.5,diffuseVarScale:.04,diffuseVarSpeed:.003,sharpen:1e-5,sharpenChroma:.8,sharpenRadius:2*t,tooth:1,toothScale:1,grain:.1,grainScale:1,dither:1.2,paperGrain:.03,paperGrainScale:.5,paperSpeck:.08,paperSpeckScale:2.7,paperChroma:.002})(e)},color:e=>{const t=e.scale??1;return tn({anchors:["b3c089","8a9c63","6f854a","d6c055","4f5f34","94a86d","a85940"],scale:.0026/t,warp:120*t,warpScale:.16/t,fieldInfluence:.35,armInfluence:.45,ageInfluence:.2,jitter:0,valueLightness:-.6,depthLightness:.42})(e)},brush:e=>{const t=e.scale??1;return Zt({strokeWeight:.95,strokeRadius:1.3*t,minRadius:.9*t,valueWidth:1.4,widthJitter:.3,tremor:.1*t,shadowOffset:2.5*t,shadowOffsetWidth:.5,shadowAngle:.79,shadowDarken:.46,knotProbability:.22,knotRadius:2*t,knotWeight:1,blotProbability:.01,blotRadius:2.2*t,blotWeight:1.3,coreRadius:1*t,coreWeight:10})(e)}},pt=document.querySelector("#sketch");if(!pt)throw new Error('Missing <canvas id="sketch"> in the document.');Mt(pt,on);
