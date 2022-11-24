var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function h(){return f("")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function b(t){v=t}function g(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}const m=[],_=[],w=[],$=[],x=Promise.resolve();let S=!1;function k(t){w.push(t)}const E=new Set;let T=0;function O(){const t=v;do{for(;T<m.length;){const t=m[T];T++,b(t),P(t.$$)}for(b(null),m.length=0,T=0;_.length;)_.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];E.has(e)||(E.add(e),e())}w.length=0}while(m.length);for(;$.length;)$.pop()();S=!1,E.clear(),b(t)}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const j=new Set;let A;function C(t,e){t&&t.i&&(j.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),A.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function M(t,e){t.d(1),e.delete(t.key)}function I(t,e){D(t,1,1,(()=>{e.delete(t.key)}))}function N(t,e,n,r,o,i,s,c,u,a,l,f){let p=t.length,h=i.length,d=p;const y={};for(;d--;)y[t[d].key]=d;const v=[],b=new Map,g=new Map;for(d=h;d--;){const t=f(o,i,d),c=n(t);let u=s.get(c);u?r&&u.p(t,e):(u=a(c,t),u.c()),b.set(c,v[d]=u),c in y&&g.set(c,Math.abs(d-y[c]))}const m=new Set,_=new Set;function w(t){C(t,1),t.m(c,l),s.set(t.key,t),l=t.first,h--}for(;p&&h;){const e=v[h-1],n=t[p-1],r=e.key,o=n.key;e===n?(l=e.first,p--,h--):b.has(o)?!s.has(r)||m.has(r)?w(e):_.has(o)?p--:g.get(r)>g.get(o)?(_.add(r),w(e)):(m.add(o),p--):(u(n,s),p--)}for(;p--;){const e=t[p];b.has(e.key)||u(e,s)}for(;h;)w(v[h-1]);return v}function q(t){t&&t.c()}function L(t,n,i,s){const{fragment:c,on_mount:u,on_destroy:a,after_update:l}=t.$$;c&&c.m(n,i),s||k((()=>{const n=u.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(k)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(m.push(t),S||(S=!0,x.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,o,i,s,c,u,l,f=[-1]){const p=v;b(e);const h=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||p.$$.root};l&&l(h.root);let d=!1;if(h.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&F(e,t)),n})):[],h.update(),d=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();o.intro&&C(e.$$.fragment),L(e,o.target,o.anchor,o.customElement),O()}b(p)}class z{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var U=function(t,e){return U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},U(t,e)};function Y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}U(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function B(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function G(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}function K(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function J(t){return"function"==typeof t}function Q(t){var e=t((function(t){Error.call(t),t.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var R=Q((function(t){return function(e){t(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e}}));function W(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var X=function(){function t(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return t.prototype.unsubscribe=function(){var t,e,n,r,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var s=B(i),c=s.next();!c.done;c=s.next()){c.value.remove(this)}}catch(e){t={error:e}}finally{try{c&&!c.done&&(e=s.return)&&e.call(s)}finally{if(t)throw t.error}}else i.remove(this);var u=this.initialTeardown;if(J(u))try{u()}catch(t){o=t instanceof R?t.errors:[t]}var a=this._teardowns;if(a){this._teardowns=null;try{for(var l=B(a),f=l.next();!f.done;f=l.next()){var p=f.value;try{et(p)}catch(t){o=null!=o?o:[],t instanceof R?o=K(K([],G(o)),G(t.errors)):o.push(t)}}}catch(t){n={error:t}}finally{try{f&&!f.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}}if(o)throw new R(o)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)et(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(e)}},t.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},t.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},t.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&W(e,t)},t.prototype.remove=function(e){var n=this._teardowns;n&&W(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}(),Z=X.EMPTY;function tt(t){return t instanceof X||t&&"closed"in t&&J(t.remove)&&J(t.add)&&J(t.unsubscribe)}function et(t){J(t)?t():t.unsubscribe()}var nt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},rt={setTimeout:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=rt.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,K([],G(t)))},clearTimeout:function(t){var e=rt.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function ot(){}var it=null;function st(t){if(nt.useDeprecatedSynchronousErrorHandling){var e=!it;if(e&&(it={errorThrown:!1,error:null}),t(),e){var n=it,r=n.errorThrown,o=n.error;if(it=null,r)throw o}}else t()}var ct=function(t){function e(e){var n=t.call(this)||this;return n.isStopped=!1,e?(n.destination=e,tt(e)&&e.add(n)):n.destination=ht,n}return Y(e,t),e.create=function(t,e,n){return new ft(t,e,n)},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(X),ut=Function.prototype.bind;function at(t,e){return ut.call(t,e)}var lt=function(){function t(t){this.partialObserver=t}return t.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(t){pt(t)}},t.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(t){pt(t)}else pt(t)},t.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(t){pt(t)}},t}(),ft=function(t){function e(e,n,r){var o,i,s=t.call(this)||this;J(e)||!e?o={next:null!=e?e:void 0,error:null!=n?n:void 0,complete:null!=r?r:void 0}:s&&nt.useDeprecatedNextContext?((i=Object.create(e)).unsubscribe=function(){return s.unsubscribe()},o={next:e.next&&at(e.next,i),error:e.error&&at(e.error,i),complete:e.complete&&at(e.complete,i)}):o=e;return s.destination=new lt(o),s}return Y(e,t),e}(ct);function pt(t){var e;e=t,rt.setTimeout((function(){throw e}))}var ht={closed:!0,next:ot,error:function(t){throw t},complete:ot},dt="function"==typeof Symbol&&Symbol.observable||"@@observable";function yt(t){return t}function vt(t){return 0===t.length?yt:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var bt=function(){function t(t){t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r,o=this,i=(r=t)&&r instanceof ct||function(t){return t&&J(t.next)&&J(t.error)&&J(t.complete)}(r)&&tt(r)?t:new ft(t,e,n);return st((function(){var t=o,e=t.operator,n=t.source;i.add(e?e.call(i,n):n?o._subscribe(i):o._trySubscribe(i))})),i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=gt(e))((function(e,r){var o=new ft({next:function(e){try{t(e)}catch(t){r(t),o.unsubscribe()}},error:r,complete:e});n.subscribe(o)}))},t.prototype._subscribe=function(t){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(t)},t.prototype[dt]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return vt(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=gt(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function gt(t){var e;return null!==(e=null!=t?t:nt.Promise)&&void 0!==e?e:Promise}var mt=Q((function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),_t=function(t){function e(){var e=t.call(this)||this;return e.closed=!1,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return Y(e,t),e.prototype.lift=function(t){var e=new wt(this,this);return e.operator=t,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new mt},e.prototype.next=function(t){var e=this;st((function(){var n,r;if(e._throwIfClosed(),!e.isStopped){var o=e.observers.slice();try{for(var i=B(o),s=i.next();!s.done;s=i.next()){s.value.next(t)}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}}))},e.prototype.error=function(t){var e=this;st((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=t;for(var n=e.observers;n.length;)n.shift().error(t)}}))},e.prototype.complete=function(){var t=this;st((function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var e=t.observers;e.length;)e.shift().complete()}}))},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var t;return(null===(t=this.observers)||void 0===t?void 0:t.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},e.prototype._innerSubscribe=function(t){var e=this,n=e.hasError,r=e.isStopped,o=e.observers;return n||r?Z:(o.push(t),new X((function(){return W(o,t)})))},e.prototype._checkFinalizedStatuses=function(t){var e=this,n=e.hasError,r=e.thrownError,o=e.isStopped;n?t.error(r):o&&t.complete()},e.prototype.asObservable=function(){var t=new bt;return t.source=this,t},e.create=function(t,e){return new wt(t,e)},e}(bt),wt=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return Y(e,t),e.prototype.next=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===n||n.call(e,t)},e.prototype.error=function(t){var e,n;null===(n=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===n||n.call(e,t)},e.prototype.complete=function(){var t,e;null===(e=null===(t=this.destination)||void 0===t?void 0:t.complete)||void 0===e||e.call(t)},e.prototype._subscribe=function(t){var e,n;return null!==(n=null===(e=this.source)||void 0===e?void 0:e.subscribe(t))&&void 0!==n?n:Z},e}(_t),$t=function(t){function e(e){var n=t.call(this)||this;return n._value=e,n}return Y(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),e.prototype._subscribe=function(e){var n=t.prototype._subscribe.call(this,e);return!n.closed&&e.next(this._value),n},e.prototype.getValue=function(){var t=this,e=t.hasError,n=t.thrownError,r=t._value;if(e)throw n;return this._throwIfClosed(),r},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(_t);class xt extends $t{set(t){super.next(t)}lift(t){const e=new xt(super.getValue());return e.operator=t,e}}const St=new xt("pending"),kt=new xt(0),Et=new xt([]),Tt=async()=>{const t=async()=>{try{St.next("fetching");const{cacheTTL:t,retryTimeout:e,guys:n}=await(async()=>{const t=await fetch("https://palmdrop.site/api/guys"),{cacheStatus:e,cacheTTL:n,data:r,retryTimeout:o}=await t.json();return{cacheStatus:e,cacheTTL:n,retryTimeout:o,guys:[].concat.apply([],[...r.pages])}})();St.next("succeeded"),Et.next(n),kt.next(1e3*(e||t||60))}catch(t){St.next("failed"),kt.next(2*kt.getValue())}finally{St.next("pending")}};await t(),kt.subscribe((e=>{e&&setTimeout(t,e)}))};function Ot(e){let n;return{c(){n=l("header"),n.innerHTML='<p class="svelte-uuogqc">by the entirety of <em class="svelte-uuogqc">KEVIN</em></p> \n  <p class="svelte-uuogqc">shamelessly ripping of \n    <a href="https://twitter.com/makeupaguy" target="_blank" rel="noreferrer" class="svelte-uuogqc">make up a guy</a></p>',d(n,"class","svelte-uuogqc")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class Pt extends z{constructor(t){super(),H(this,t,null,Ot,i,{})}}function jt(t,e,n){const r=t.slice();return r[5]=e[n],r[7]=n,r}function At(t){let e,n=[],r=new Map,o=t[2];const i=t=>t[7];for(let e=0;e<o.length;e+=1){let s=jt(t,o,e),c=i(s);r.set(c,n[e]=Ct(c,s))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=h()},m(t,r){for(let e=0;e<n.length;e+=1)n[e].m(t,r);u(t,e,r)},p(t,s){4&s&&(o=t[2],n=N(n,s,i,1,t,o,r,e.parentNode,M,Ct,e,jt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&a(e)}}}function Ct(t,e){let n,r,o,i=e[5]+"";return{key:t,first:null,c(){n=l("p"),r=f(i),o=p(),d(n,"class","svelte-1d46ic6"),this.first=n},m(t,e){u(t,n,e),c(n,r),c(n,o)},p(t,n){e=t,4&n&&i!==(i=e[5]+"")&&y(r,i)},d(t){t&&a(n)}}}function Dt(e){let n,r,o,i,s,h,v,b,g,m,_,w=e[2].length&&At(e);return{c(){n=l("li"),r=l("a"),o=l("div"),i=l("p"),s=f(e[3]),h=p(),w&&w.c(),v=p(),b=l("time"),g=f(e[1]),d(i,"class","svelte-1d46ic6"),d(o,"class","guy svelte-1d46ic6"),d(b,"class","date svelte-1d46ic6"),d(r,"class","guy-entry svelte-1d46ic6"),d(r,"id",m=""+e[0]),d(r,"href",_="#"+e[0]),d(r,"draggable","false"),d(n,"class","svelte-1d46ic6")},m(t,e){u(t,n,e),c(n,r),c(r,o),c(o,i),c(i,s),c(o,h),w&&w.m(o,null),c(r,v),c(r,b),c(b,g)},p(t,[e]){8&e&&y(s,t[3]),t[2].length?w?w.p(t,e):(w=At(t),w.c(),w.m(o,null)):w&&(w.d(1),w=null),2&e&&y(g,t[1]),1&e&&m!==(m=""+t[0])&&d(r,"id",m),1&e&&_!==(_="#"+t[0])&&d(r,"href",_)},i:t,o:t,d(t){t&&a(n),w&&w.d()}}}function Mt(t,e,n){let r,o,i,{guyData:s}=e,{index:c}=e;return t.$$set=t=>{"guyData"in t&&n(4,s=t.guyData),"index"in t&&n(0,c=t.index)},t.$$.update=()=>{16&t.$$.dirty&&n(3,r=s.content[0]),16&t.$$.dirty&&n(2,o=s.content.slice(1).filter((t=>!!t))),16&t.$$.dirty&&n(1,i=new Date(Date.parse(s.date)).toLocaleString("en-uk",{dateStyle:"short"}))},[c,i,o,r,s]}class It extends z{constructor(t){super(),H(this,t,Mt,Dt,i,{guyData:4,index:0})}}function Nt(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function qt(t,e){let n,r,o;return r=new It({props:{guyData:e[2],index:e[0].length-e[4]}}),{key:t,first:null,c(){n=h(),q(r.$$.fragment),this.first=n},m(t,e){u(t,n,e),L(r,t,e),o=!0},p(t,n){e=t;const o={};2&n&&(o.guyData=e[2]),3&n&&(o.index=e[0].length-e[4]),r.$set(o)},i(t){o||(C(r.$$.fragment,t),o=!0)},o(t){D(r.$$.fragment,t),o=!1},d(t){t&&a(n),V(r,t)}}}function Lt(t){let e,n,o=[],i=new Map,s=t[1];const c=t=>t[4]+t[2].date;for(let e=0;e<s.length;e+=1){let n=Nt(t,s,e),r=c(n);i.set(r,o[e]=qt(r,n))}return{c(){e=l("ol");for(let t=0;t<o.length;t+=1)o[t].c();e.reversed=!0,d(e,"class","guy-list svelte-94wa4k")},m(t,r){u(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){3&n&&(s=t[1],A={r:0,c:[],p:A},o=N(o,n,c,1,t,s,i,e,I,qt,null,Nt),A.r||r(A.c),A=A.p)},i(t){if(!n){for(let t=0;t<s.length;t+=1)C(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)D(o[t]);n=!1},d(t){t&&a(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function Vt(t,e,n){let r,o;return s(t,Et,(t=>n(0,o=t))),t.$$.update=()=>{1&t.$$.dirty&&n(1,r=o.reverse())},[o,r]}class Ft extends z{constructor(t){super(),H(this,t,Vt,Lt,i,{})}}function Ht(t){let e;return{c(){e=l("div"),e.innerHTML="<p>guys are loading...</p>",d(e,"class","loading svelte-a5kv8c")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function zt(t){let e;return{c(){e=l("p"),e.textContent="...",d(e,"class","no-guys svelte-a5kv8c")},m(t,n){u(t,e,n)},d(t){t&&a(e)}}}function Ut(t){let e,n,r,o,i,s,f,h,y,v,b;r=new Pt({});let g="fetching"===t[0]&&Ht();y=new Ft({});let m=!t[1].length&&zt();return{c(){e=p(),n=l("div"),q(r.$$.fragment),o=p(),i=l("main"),s=l("h1"),s.textContent="guys",f=p(),g&&g.c(),h=p(),q(y.$$.fragment),v=p(),m&&m.c(),document.title="Guys",d(s,"class","svelte-a5kv8c"),d(i,"class","svelte-a5kv8c"),d(n,"class","app svelte-a5kv8c")},m(t,a){u(t,e,a),u(t,n,a),L(r,n,null),c(n,o),c(n,i),c(i,s),c(i,f),g&&g.m(i,null),c(i,h),L(y,i,null),c(i,v),m&&m.m(i,null),b=!0},p(t,[e]){"fetching"===t[0]?g||(g=Ht(),g.c(),g.m(i,h)):g&&(g.d(1),g=null),t[1].length?m&&(m.d(1),m=null):m||(m=zt(),m.c(),m.m(i,null))},i(t){b||(C(r.$$.fragment,t),C(y.$$.fragment,t),b=!0)},o(t){D(r.$$.fragment,t),D(y.$$.fragment,t),b=!1},d(t){t&&a(e),t&&a(n),V(r),g&&g.d(),V(y),m&&m.d()}}}function Yt(t,e,n){let r,o;return s(t,St,(t=>n(0,r=t))),s(t,Et,(t=>n(1,o=t))),g((async()=>{await Tt()})),[r,o]}return new class extends z{constructor(t){super(),H(this,t,Yt,Ut,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
