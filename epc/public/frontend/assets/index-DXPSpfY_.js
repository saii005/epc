var tt=Object.defineProperty,ht=Object.defineProperties;var et=Object.getOwnPropertyDescriptors;var rn=Object.getOwnPropertySymbols;var dt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var cn=(n,a,t)=>a in n?tt(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,D2=(n,a)=>{for(var t in a||(a={}))dt.call(a,t)&&cn(n,t,a[t]);if(rn)for(var t of rn(a))ot.call(a,t)&&cn(n,t,a[t]);return n},v0=(n,a)=>ht(n,et(a));var E1=(n,a,t)=>new Promise((h,e)=>{var d=s=>{try{l(t.next(s))}catch(m){e(m)}},o=s=>{try{l(t.throw(s))}catch(m){e(m)}},l=s=>s.done?h(s.value):Promise.resolve(s.value).then(d,o);l((t=t.apply(n,a)).next())});(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const d of e)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&h(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const d={};return e.integrity&&(d.integrity=e.integrity),e.referrerPolicy&&(d.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?d.credentials="include":e.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function h(e){if(e.ep)return;e.ep=!0;const d=t(e);fetch(e.href,d)}})();function I0(n){const a=Object.create(null);for(const t of n.split(","))a[t]=1;return t=>t in a}const G={},v2=[],k1=()=>{},Kn=()=>!1,e0=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),F0=n=>n.startsWith("onUpdate:"),d1=Object.assign,N0=(n,a)=>{const t=n.indexOf(a);t>-1&&n.splice(t,1)},lt=Object.prototype.hasOwnProperty,$=(n,a)=>lt.call(n,a),E=Array.isArray,b2=n=>d0(n)==="[object Map]",Gn=n=>d0(n)==="[object Set]",P=n=>typeof n=="function",a1=n=>typeof n=="string",Q1=n=>typeof n=="symbol",X=n=>n!==null&&typeof n=="object",Jn=n=>(X(n)||P(n))&&P(n.then)&&P(n.catch),Yn=Object.prototype.toString,d0=n=>Yn.call(n),it=n=>d0(n).slice(8,-1),Qn=n=>d0(n)==="[object Object]",D0=n=>a1(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,L2=I0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),o0=n=>{const a=Object.create(null);return(t=>a[t]||(a[t]=n(t)))},st=/-\w/g,J1=o0(n=>n.replace(st,a=>a.slice(1).toUpperCase())),pt=/\B([A-Z])/g,i2=o0(n=>n.replace(pt,"-$1").toLowerCase()),Xn=o0(n=>n.charAt(0).toUpperCase()+n.slice(1)),b0=o0(n=>n?`on${Xn(n)}`:""),G1=(n,a)=>!Object.is(n,a),K2=(n,...a)=>{for(let t=0;t<n.length;t++)n[t](...a)},na=(n,a,t,h=!1)=>{Object.defineProperty(n,a,{configurable:!0,enumerable:!1,writable:h,value:t})},$0=n=>{const a=parseFloat(n);return isNaN(a)?n:a};let mn;const l0=()=>mn||(mn=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function i0(n){if(E(n)){const a={};for(let t=0;t<n.length;t++){const h=n[t],e=a1(h)?yt(h):i0(h);if(e)for(const d in e)a[d]=e[d]}return a}else if(a1(n)||X(n))return n}const rt=/;(?![^(]*\))/g,ct=/:([^]+)/,mt=/\/\*[^]*?\*\//g;function yt(n){const a={};return n.replace(mt,"").split(rt).forEach(t=>{if(t){const h=t.split(ct);h.length>1&&(a[h[0].trim()]=h[1].trim())}}),a}function O1(n){let a="";if(a1(n))a=n;else if(E(n))for(let t=0;t<n.length;t++){const h=O1(n[t]);h&&(a+=h+" ")}else if(X(n))for(const t in n)n[t]&&(a+=t+" ");return a.trim()}const Mt="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vt=I0(Mt);function aa(n){return!!n||n===""}const ta=n=>!!(n&&n.__v_isRef===!0),C=n=>a1(n)?n:n==null?"":E(n)||X(n)&&(n.toString===Yn||!P(n.toString))?ta(n)?C(n.value):JSON.stringify(n,ha,2):String(n),ha=(n,a)=>ta(a)?ha(n,a.value):b2(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((t,[h,e],d)=>(t[x0(h,d)+" =>"]=e,t),{})}:Gn(a)?{[`Set(${a.size})`]:[...a.values()].map(t=>x0(t))}:Q1(a)?x0(a):X(a)&&!E(a)&&!Qn(a)?String(a):a,x0=(n,a="")=>{var t;return Q1(n)?`Symbol(${(t=n.description)!=null?t:a})`:n};let c1;class bt{constructor(a=!1){this.detached=a,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=c1,!a&&c1&&(this.index=(c1.scopes||(c1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let a,t;if(this.scopes)for(a=0,t=this.scopes.length;a<t;a++)this.scopes[a].pause();for(a=0,t=this.effects.length;a<t;a++)this.effects[a].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let a,t;if(this.scopes)for(a=0,t=this.scopes.length;a<t;a++)this.scopes[a].resume();for(a=0,t=this.effects.length;a<t;a++)this.effects[a].resume()}}run(a){if(this._active){const t=c1;try{return c1=this,a()}finally{c1=t}}}on(){++this._on===1&&(this.prevScope=c1,c1=this)}off(){this._on>0&&--this._on===0&&(c1=this.prevScope,this.prevScope=void 0)}stop(a){if(this._active){this._active=!1;let t,h;for(t=0,h=this.effects.length;t<h;t++)this.effects[t].stop();for(this.effects.length=0,t=0,h=this.cleanups.length;t<h;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,h=this.scopes.length;t<h;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!a){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function xt(){return c1}let Y;const w0=new WeakSet;class ea{constructor(a){this.fn=a,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,c1&&c1.active&&c1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,w0.has(this)&&(w0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||oa(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yn(this),la(this);const a=Y,t=f1;Y=this,f1=!0;try{return this.fn()}finally{ia(this),Y=a,f1=t,this.flags&=-3}}stop(){if(this.flags&1){for(let a=this.deps;a;a=a.nextDep)K0(a);this.deps=this.depsTail=void 0,yn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?w0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){k0(this)&&this.run()}get dirty(){return k0(this)}}let da=0,z2,k2;function oa(n,a=!1){if(n.flags|=8,a){n.next=k2,k2=n;return}n.next=z2,z2=n}function U0(){da++}function W0(){if(--da>0)return;if(k2){let a=k2;for(k2=void 0;a;){const t=a.next;a.next=void 0,a.flags&=-9,a=t}}let n;for(;z2;){let a=z2;for(z2=void 0;a;){const t=a.next;if(a.next=void 0,a.flags&=-9,a.flags&1)try{a.trigger()}catch(h){n||(n=h)}a=t}}if(n)throw n}function la(n){for(let a=n.deps;a;a=a.nextDep)a.version=-1,a.prevActiveLink=a.dep.activeLink,a.dep.activeLink=a}function ia(n){let a,t=n.depsTail,h=t;for(;h;){const e=h.prevDep;h.version===-1?(h===t&&(t=e),K0(h),wt(h)):a=h,h.dep.activeLink=h.prevActiveLink,h.prevActiveLink=void 0,h=e}n.deps=a,n.depsTail=t}function k0(n){for(let a=n.deps;a;a=a.nextDep)if(a.dep.version!==a.version||a.dep.computed&&(sa(a.dep.computed)||a.dep.version!==a.version))return!0;return!!n._dirty}function sa(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===T2)||(n.globalVersion=T2,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!k0(n))))return;n.flags|=2;const a=n.dep,t=Y,h=f1;Y=n,f1=!0;try{la(n);const e=n.fn(n._value);(a.version===0||G1(e,n._value))&&(n.flags|=128,n._value=e,a.version++)}catch(e){throw a.version++,e}finally{Y=t,f1=h,ia(n),n.flags&=-3}}function K0(n,a=!1){const{dep:t,prevSub:h,nextSub:e}=n;if(h&&(h.nextSub=e,n.prevSub=void 0),e&&(e.prevSub=h,n.nextSub=void 0),t.subs===n&&(t.subs=h,!h&&t.computed)){t.computed.flags&=-5;for(let d=t.computed.deps;d;d=d.nextDep)K0(d,!0)}!a&&!--t.sc&&t.map&&t.map.delete(t.key)}function wt(n){const{prevDep:a,nextDep:t}=n;a&&(a.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=a,n.nextDep=void 0)}let f1=!0;const pa=[];function R1(){pa.push(f1),f1=!1}function I1(){const n=pa.pop();f1=n===void 0?!0:n}function yn(n){const{cleanup:a}=n;if(n.cleanup=void 0,a){const t=Y;Y=void 0;try{a()}finally{Y=t}}}let T2=0;class ut{constructor(a,t){this.sub=a,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class G0{constructor(a){this.computed=a,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(a){if(!Y||!f1||Y===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Y)t=this.activeLink=new ut(Y,this),Y.deps?(t.prevDep=Y.depsTail,Y.depsTail.nextDep=t,Y.depsTail=t):Y.deps=Y.depsTail=t,ra(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const h=t.nextDep;h.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=h),t.prevDep=Y.depsTail,t.nextDep=void 0,Y.depsTail.nextDep=t,Y.depsTail=t,Y.deps===t&&(Y.deps=h)}return t}trigger(a){this.version++,T2++,this.notify(a)}notify(a){U0();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{W0()}}}function ra(n){if(n.dep.sc++,n.sub.flags&4){const a=n.dep.computed;if(a&&!n.dep.subs){a.flags|=20;for(let h=a.deps;h;h=h.nextDep)ra(h)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const C0=new WeakMap,o2=Symbol(""),S0=Symbol(""),P2=Symbol("");function t1(n,a,t){if(f1&&Y){let h=C0.get(n);h||C0.set(n,h=new Map);let e=h.get(t);e||(h.set(t,e=new G0),e.map=h,e.key=t),e.track()}}function Z1(n,a,t,h,e,d){const o=C0.get(n);if(!o){T2++;return}const l=s=>{s&&s.trigger()};if(U0(),a==="clear")o.forEach(l);else{const s=E(n),m=s&&D0(t);if(s&&t==="length"){const c=Number(h);o.forEach((M,_)=>{(_==="length"||_===P2||!Q1(_)&&_>=c)&&l(M)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),m&&l(o.get(P2)),a){case"add":s?m&&l(o.get("length")):(l(o.get(o2)),b2(n)&&l(o.get(S0)));break;case"delete":s||(l(o.get(o2)),b2(n)&&l(o.get(S0)));break;case"set":b2(n)&&l(o.get(o2));break}}W0()}function p2(n){const a=D(n);return a===n?a:(t1(a,"iterate",P2),u1(n)?a:a.map(B1))}function s0(n){return t1(n=D(n),"iterate",P2),n}function U1(n,a){return F1(n)?u2(l2(n)?B1(a):a):B1(a)}const ft={__proto__:null,[Symbol.iterator](){return u0(this,Symbol.iterator,n=>U1(this,n))},concat(...n){return p2(this).concat(...n.map(a=>E(a)?p2(a):a))},entries(){return u0(this,"entries",n=>(n[1]=U1(this,n[1]),n))},every(n,a){return T1(this,"every",n,a,void 0,arguments)},filter(n,a){return T1(this,"filter",n,a,t=>t.map(h=>U1(this,h)),arguments)},find(n,a){return T1(this,"find",n,a,t=>U1(this,t),arguments)},findIndex(n,a){return T1(this,"findIndex",n,a,void 0,arguments)},findLast(n,a){return T1(this,"findLast",n,a,t=>U1(this,t),arguments)},findLastIndex(n,a){return T1(this,"findLastIndex",n,a,void 0,arguments)},forEach(n,a){return T1(this,"forEach",n,a,void 0,arguments)},includes(...n){return f0(this,"includes",n)},indexOf(...n){return f0(this,"indexOf",n)},join(n){return p2(this).join(n)},lastIndexOf(...n){return f0(this,"lastIndexOf",n)},map(n,a){return T1(this,"map",n,a,void 0,arguments)},pop(){return V2(this,"pop")},push(...n){return V2(this,"push",n)},reduce(n,...a){return Mn(this,"reduce",n,a)},reduceRight(n,...a){return Mn(this,"reduceRight",n,a)},shift(){return V2(this,"shift")},some(n,a){return T1(this,"some",n,a,void 0,arguments)},splice(...n){return V2(this,"splice",n)},toReversed(){return p2(this).toReversed()},toSorted(n){return p2(this).toSorted(n)},toSpliced(...n){return p2(this).toSpliced(...n)},unshift(...n){return V2(this,"unshift",n)},values(){return u0(this,"values",n=>U1(this,n))}};function u0(n,a,t){const h=s0(n),e=h[a]();return h!==n&&!u1(n)&&(e._next=e.next,e.next=()=>{const d=e._next();return d.done||(d.value=t(d.value)),d}),e}const Bt=Array.prototype;function T1(n,a,t,h,e,d){const o=s0(n),l=o!==n&&!u1(n),s=o[a];if(s!==Bt[a]){const M=s.apply(n,d);return l?B1(M):M}let m=t;o!==n&&(l?m=function(M,_){return t.call(this,U1(n,M),_,n)}:t.length>2&&(m=function(M,_){return t.call(this,M,_,n)}));const c=s.call(o,m,h);return l&&e?e(c):c}function Mn(n,a,t,h){const e=s0(n);let d=t;return e!==n&&(u1(n)?t.length>3&&(d=function(o,l,s){return t.call(this,o,l,s,n)}):d=function(o,l,s){return t.call(this,o,U1(n,l),s,n)}),e[a](d,...h)}function f0(n,a,t){const h=D(n);t1(h,"iterate",P2);const e=h[a](...t);return(e===-1||e===!1)&&X0(t[0])?(t[0]=D(t[0]),h[a](...t)):e}function V2(n,a,t=[]){R1(),U0();const h=D(n)[a].apply(n,t);return W0(),I1(),h}const gt=I0("__proto__,__v_isRef,__isVue"),ca=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Q1));function Ht(n){Q1(n)||(n=String(n));const a=D(this);return t1(a,"has",n),a.hasOwnProperty(n)}class ma{constructor(a=!1,t=!1){this._isReadonly=a,this._isShallow=t}get(a,t,h){if(t==="__v_skip")return a.__v_skip;const e=this._isReadonly,d=this._isShallow;if(t==="__v_isReactive")return!e;if(t==="__v_isReadonly")return e;if(t==="__v_isShallow")return d;if(t==="__v_raw")return h===(e?d?Et:ba:d?va:Ma).get(a)||Object.getPrototypeOf(a)===Object.getPrototypeOf(h)?a:void 0;const o=E(a);if(!e){let s;if(o&&(s=ft[t]))return s;if(t==="hasOwnProperty")return Ht}const l=Reflect.get(a,t,e1(a)?a:h);if((Q1(t)?ca.has(t):gt(t))||(e||t1(a,"get",t),d))return l;if(e1(l)){const s=o&&D0(t)?l:l.value;return e&&X(s)?E0(s):s}return X(l)?e?E0(l):Y0(l):l}}class ya extends ma{constructor(a=!1){super(!1,a)}set(a,t,h,e){let d=a[t];const o=E(a)&&D0(t);if(!this._isShallow){const m=F1(d);if(!u1(h)&&!F1(h)&&(d=D(d),h=D(h)),!o&&e1(d)&&!e1(h))return m||(d.value=h),!0}const l=o?Number(t)<a.length:$(a,t),s=Reflect.set(a,t,h,e1(a)?a:e);return a===D(e)&&(l?G1(h,d)&&Z1(a,"set",t,h):Z1(a,"add",t,h)),s}deleteProperty(a,t){const h=$(a,t);a[t];const e=Reflect.deleteProperty(a,t);return e&&h&&Z1(a,"delete",t,void 0),e}has(a,t){const h=Reflect.has(a,t);return(!Q1(t)||!ca.has(t))&&t1(a,"has",t),h}ownKeys(a){return t1(a,"iterate",E(a)?"length":o2),Reflect.ownKeys(a)}}class Vt extends ma{constructor(a=!1){super(!0,a)}set(a,t){return!0}deleteProperty(a,t){return!0}}const At=new ya,_t=new Vt,Lt=new ya(!0);const q0=n=>n,$2=n=>Reflect.getPrototypeOf(n);function zt(n,a,t){return function(...h){const e=this.__v_raw,d=D(e),o=b2(d),l=n==="entries"||n===Symbol.iterator&&o,s=n==="keys"&&o,m=e[n](...h),c=t?q0:a?u2:B1;return!a&&t1(d,"iterate",s?S0:o2),d1(Object.create(m),{next(){const{value:M,done:_}=m.next();return _?{value:M,done:_}:{value:l?[c(M[0]),c(M[1])]:c(M),done:_}}})}}function U2(n){return function(...a){return n==="delete"?!1:n==="clear"?void 0:this}}function kt(n,a){const t={get(e){const d=this.__v_raw,o=D(d),l=D(e);n||(G1(e,l)&&t1(o,"get",e),t1(o,"get",l));const{has:s}=$2(o),m=a?q0:n?u2:B1;if(s.call(o,e))return m(d.get(e));if(s.call(o,l))return m(d.get(l));d!==o&&d.get(e)},get size(){const e=this.__v_raw;return!n&&t1(D(e),"iterate",o2),e.size},has(e){const d=this.__v_raw,o=D(d),l=D(e);return n||(G1(e,l)&&t1(o,"has",e),t1(o,"has",l)),e===l?d.has(e):d.has(e)||d.has(l)},forEach(e,d){const o=this,l=o.__v_raw,s=D(l),m=a?q0:n?u2:B1;return!n&&t1(s,"iterate",o2),l.forEach((c,M)=>e.call(d,m(c),m(M),o))}};return d1(t,n?{add:U2("add"),set:U2("set"),delete:U2("delete"),clear:U2("clear")}:{add(e){!a&&!u1(e)&&!F1(e)&&(e=D(e));const d=D(this);return $2(d).has.call(d,e)||(d.add(e),Z1(d,"add",e,e)),this},set(e,d){!a&&!u1(d)&&!F1(d)&&(d=D(d));const o=D(this),{has:l,get:s}=$2(o);let m=l.call(o,e);m||(e=D(e),m=l.call(o,e));const c=s.call(o,e);return o.set(e,d),m?G1(d,c)&&Z1(o,"set",e,d):Z1(o,"add",e,d),this},delete(e){const d=D(this),{has:o,get:l}=$2(d);let s=o.call(d,e);s||(e=D(e),s=o.call(d,e)),l&&l.call(d,e);const m=d.delete(e);return s&&Z1(d,"delete",e,void 0),m},clear(){const e=D(this),d=e.size!==0,o=e.clear();return d&&Z1(e,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(e=>{t[e]=zt(e,n,a)}),t}function J0(n,a){const t=kt(n,a);return(h,e,d)=>e==="__v_isReactive"?!n:e==="__v_isReadonly"?n:e==="__v_raw"?h:Reflect.get($(t,e)&&e in h?t:h,e,d)}const Ct={get:J0(!1,!1)},St={get:J0(!1,!0)},qt={get:J0(!0,!1)};const Ma=new WeakMap,va=new WeakMap,ba=new WeakMap,Et=new WeakMap;function Tt(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pt(n){return n.__v_skip||!Object.isExtensible(n)?0:Tt(it(n))}function Y0(n){return F1(n)?n:Q0(n,!1,At,Ct,Ma)}function Ot(n){return Q0(n,!1,Lt,St,va)}function E0(n){return Q0(n,!0,_t,qt,ba)}function Q0(n,a,t,h,e){if(!X(n)||n.__v_raw&&!(a&&n.__v_isReactive))return n;const d=Pt(n);if(d===0)return n;const o=e.get(n);if(o)return o;const l=new Proxy(n,d===2?h:t);return e.set(n,l),l}function l2(n){return F1(n)?l2(n.__v_raw):!!(n&&n.__v_isReactive)}function F1(n){return!!(n&&n.__v_isReadonly)}function u1(n){return!!(n&&n.__v_isShallow)}function X0(n){return n?!!n.__v_raw:!1}function D(n){const a=n&&n.__v_raw;return a?D(a):n}function Zt(n){return!$(n,"__v_skip")&&Object.isExtensible(n)&&na(n,"__v_skip",!0),n}const B1=n=>X(n)?Y0(n):n,u2=n=>X(n)?E0(n):n;function e1(n){return n?n.__v_isRef===!0:!1}function n1(n){return jt(n,!1)}function jt(n,a){return e1(n)?n:new Rt(n,a)}class Rt{constructor(a,t){this.dep=new G0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?a:D(a),this._value=t?a:B1(a),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(a){const t=this._rawValue,h=this.__v_isShallow||u1(a)||F1(a);a=h?a:D(a),G1(a,t)&&(this._rawValue=a,this._value=h?a:B1(a),this.dep.trigger())}}function It(n){return e1(n)?n.value:n}const Ft={get:(n,a,t)=>a==="__v_raw"?n:It(Reflect.get(n,a,t)),set:(n,a,t,h)=>{const e=n[a];return e1(e)&&!e1(t)?(e.value=t,!0):Reflect.set(n,a,t,h)}};function xa(n){return l2(n)?n:new Proxy(n,Ft)}class Nt{constructor(a,t,h){this.fn=a,this.setter=t,this._value=void 0,this.dep=new G0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=T2-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=h}notify(){if(this.flags|=16,!(this.flags&8)&&Y!==this)return oa(this,!0),!0}get value(){const a=this.dep.track();return sa(this),a&&(a.version=this.dep.version),this._value}set value(a){this.setter&&this.setter(a)}}function Dt(n,a,t=!1){let h,e;return P(n)?h=n:(h=n.get,e=n.set),new Nt(h,e,t)}const W2={},Q2=new WeakMap;let d2;function $t(n,a=!1,t=d2){if(t){let h=Q2.get(t);h||Q2.set(t,h=[]),h.push(n)}}function Ut(n,a,t=G){const{immediate:h,deep:e,once:d,scheduler:o,augmentJob:l,call:s}=t,m=z=>e?z:u1(z)||e===!1||e===0?j1(z,1):j1(z);let c,M,_,V,O=!1,Z=!1;if(e1(n)?(M=()=>n.value,O=u1(n)):l2(n)?(M=()=>m(n),O=!0):E(n)?(Z=!0,O=n.some(z=>l2(z)||u1(z)),M=()=>n.map(z=>{if(e1(z))return z.value;if(l2(z))return m(z);if(P(z))return s?s(z,2):z()})):P(n)?a?M=s?()=>s(n,2):n:M=()=>{if(_){R1();try{_()}finally{I1()}}const z=d2;d2=c;try{return s?s(n,3,[V]):n(V)}finally{d2=z}}:M=k1,a&&e){const z=M,I=e===!0?1/0:e;M=()=>j1(z(),I)}const Q=xt(),j=()=>{c.stop(),Q&&Q.active&&N0(Q.effects,c)};if(d&&a){const z=a;a=(...I)=>{z(...I),j()}}let F=Z?new Array(n.length).fill(W2):W2;const K=z=>{if(!(!(c.flags&1)||!c.dirty&&!z))if(a){const I=c.run();if(e||O||(Z?I.some((v1,s1)=>G1(v1,F[s1])):G1(I,F))){_&&_();const v1=d2;d2=c;try{const s1=[I,F===W2?void 0:Z&&F[0]===W2?[]:F,V];F=I,s?s(a,3,s1):a(...s1)}finally{d2=v1}}}else c.run()};return l&&l(K),c=new ea(M),c.scheduler=o?()=>o(K,!1):K,V=z=>$t(z,!1,c),_=c.onStop=()=>{const z=Q2.get(c);if(z){if(s)s(z,4);else for(const I of z)I();Q2.delete(c)}},a?h?K(!0):F=c.run():o?o(K.bind(null,!0),!0):c.run(),j.pause=c.pause.bind(c),j.resume=c.resume.bind(c),j.stop=j,j}function j1(n,a=1/0,t){if(a<=0||!X(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=a))return n;if(t.set(n,a),a--,e1(n))j1(n.value,a,t);else if(E(n))for(let h=0;h<n.length;h++)j1(n[h],a,t);else if(Gn(n)||b2(n))n.forEach(h=>{j1(h,a,t)});else if(Qn(n)){for(const h in n)j1(n[h],a,t);for(const h of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,h)&&j1(n[h],a,t)}return n}function R2(n,a,t,h){try{return h?n(...h):n()}catch(e){p0(e,a,t)}}function S1(n,a,t,h){if(P(n)){const e=R2(n,a,t,h);return e&&Jn(e)&&e.catch(d=>{p0(d,a,t)}),e}if(E(n)){const e=[];for(let d=0;d<n.length;d++)e.push(S1(n[d],a,t,h));return e}}function p0(n,a,t,h=!0){const e=a?a.vnode:null,{errorHandler:d,throwUnhandledErrorInProduction:o}=a&&a.appContext.config||G;if(a){let l=a.parent;const s=a.proxy,m=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const c=l.ec;if(c){for(let M=0;M<c.length;M++)if(c[M](n,s,m)===!1)return}l=l.parent}if(d){R1(),R2(d,null,10,[n,s,m]),I1();return}}Wt(n,t,e,h,o)}function Wt(n,a,t,h=!0,e=!1){if(e)throw n;console.error(n)}const l1=[];let L1=-1;const x2=[];let W1=null,y2=0;const wa=Promise.resolve();let X2=null;function Kt(n){const a=X2||wa;return n?a.then(this?n.bind(this):n):a}function Gt(n){let a=L1+1,t=l1.length;for(;a<t;){const h=a+t>>>1,e=l1[h],d=O2(e);d<n||d===n&&e.flags&2?a=h+1:t=h}return a}function nn(n){if(!(n.flags&1)){const a=O2(n),t=l1[l1.length-1];!t||!(n.flags&2)&&a>=O2(t)?l1.push(n):l1.splice(Gt(a),0,n),n.flags|=1,ua()}}function ua(){X2||(X2=wa.then(Ba))}function Jt(n){E(n)?x2.push(...n):W1&&n.id===-1?W1.splice(y2+1,0,n):n.flags&1||(x2.push(n),n.flags|=1),ua()}function vn(n,a,t=L1+1){for(;t<l1.length;t++){const h=l1[t];if(h&&h.flags&2){if(n&&h.id!==n.uid)continue;l1.splice(t,1),t--,h.flags&4&&(h.flags&=-2),h(),h.flags&4||(h.flags&=-2)}}}function fa(n){if(x2.length){const a=[...new Set(x2)].sort((t,h)=>O2(t)-O2(h));if(x2.length=0,W1){W1.push(...a);return}for(W1=a,y2=0;y2<W1.length;y2++){const t=W1[y2];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}W1=null,y2=0}}const O2=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ba(n){try{for(L1=0;L1<l1.length;L1++){const a=l1[L1];a&&!(a.flags&8)&&(a.flags&4&&(a.flags&=-2),R2(a,a.i,a.i?15:14),a.flags&4||(a.flags&=-2))}}finally{for(;L1<l1.length;L1++){const a=l1[L1];a&&(a.flags&=-2)}L1=-1,l1.length=0,fa(),X2=null,(l1.length||x2.length)&&Ba()}}let w1=null,ga=null;function n0(n){const a=w1;return w1=n,ga=n&&n.type.__scopeId||null,a}function Yt(n,a=w1,t){if(!a||n._n)return n;const h=(...e)=>{h._d&&_n(-1);const d=n0(a);let o;try{o=n(...e)}finally{n0(d),h._d&&_n(1)}return o};return h._n=!0,h._c=!0,h._d=!0,h}function bn(n,a){if(w1===null)return n;const t=y0(w1),h=n.dirs||(n.dirs=[]);for(let e=0;e<a.length;e++){let[d,o,l,s=G]=a[e];d&&(P(d)&&(d={mounted:d,updated:d}),d.deep&&j1(o),h.push({dir:d,instance:t,value:o,oldValue:void 0,arg:l,modifiers:s}))}return n}function h2(n,a,t,h){const e=n.dirs,d=a&&a.dirs;for(let o=0;o<e.length;o++){const l=e[o];d&&(l.oldValue=d[o].value);let s=l.dir[h];s&&(R1(),S1(s,t,8,[n.el,l,n,a]),I1())}}function Qt(n,a){if(i1){let t=i1.provides;const h=i1.parent&&i1.parent.provides;h===t&&(t=i1.provides=Object.create(h)),t[n]=a}}function G2(n,a,t=!1){const h=Q4();if(h||w2){let e=w2?w2._context.provides:h?h.parent==null||h.ce?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides:void 0;if(e&&n in e)return e[n];if(arguments.length>1)return t&&P(a)?a.call(h&&h.proxy):a}}const Xt=Symbol.for("v-scx"),n4=()=>G2(Xt);function B0(n,a,t){return Ha(n,a,t)}function Ha(n,a,t=G){const{immediate:h,deep:e,flush:d,once:o}=t,l=d1({},t),s=a&&h||!a&&d!=="post";let m;if(j2){if(d==="sync"){const V=n4();m=V.__watcherHandles||(V.__watcherHandles=[])}else if(!s){const V=()=>{};return V.stop=k1,V.resume=k1,V.pause=k1,V}}const c=i1;l.call=(V,O,Z)=>S1(V,c,O,Z);let M=!1;d==="post"?l.scheduler=V=>{y1(V,c&&c.suspense)}:d!=="sync"&&(M=!0,l.scheduler=(V,O)=>{O?V():nn(V)}),l.augmentJob=V=>{a&&(V.flags|=4),M&&(V.flags|=2,c&&(V.id=c.uid,V.i=c))};const _=Ut(n,a,l);return j2&&(m?m.push(_):s&&_()),_}function a4(n,a,t){const h=this.proxy,e=a1(n)?n.includes(".")?Va(h,n):()=>h[n]:n.bind(h,h);let d;P(a)?d=a:(d=a.handler,t=a);const o=I2(this),l=Ha(e,d.bind(h),t);return o(),l}function Va(n,a){const t=a.split(".");return()=>{let h=n;for(let e=0;e<t.length&&h;e++)h=h[t[e]];return h}}const t4=Symbol("_vte"),h4=n=>n.__isTeleport,e4=Symbol("_leaveCb");function an(n,a){n.shapeFlag&6&&n.component?(n.transition=a,an(n.component.subTree,a)):n.shapeFlag&128?(n.ssContent.transition=a.clone(n.ssContent),n.ssFallback.transition=a.clone(n.ssFallback)):n.transition=a}function Aa(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const a0=new WeakMap;function C2(n,a,t,h,e=!1){if(E(n)){n.forEach((O,Z)=>C2(O,a&&(E(a)?a[Z]:a),t,h,e));return}if(S2(h)&&!e){h.shapeFlag&512&&h.type.__asyncResolved&&h.component.subTree.component&&C2(n,a,t,h.component.subTree);return}const d=h.shapeFlag&4?y0(h.component):h.el,o=e?null:d,{i:l,r:s}=n,m=a&&a.r,c=l.refs===G?l.refs={}:l.refs,M=l.setupState,_=D(M),V=M===G?Kn:O=>$(_,O);if(m!=null&&m!==s){if(xn(a),a1(m))c[m]=null,V(m)&&(M[m]=null);else if(e1(m)){m.value=null;const O=a;O.k&&(c[O.k]=null)}}if(P(s))R2(s,l,12,[o,c]);else{const O=a1(s),Z=e1(s);if(O||Z){const Q=()=>{if(n.f){const j=O?V(s)?M[s]:c[s]:s.value;if(e)E(j)&&N0(j,d);else if(E(j))j.includes(d)||j.push(d);else if(O)c[s]=[d],V(s)&&(M[s]=c[s]);else{const F=[d];s.value=F,n.k&&(c[n.k]=F)}}else O?(c[s]=o,V(s)&&(M[s]=o)):Z&&(s.value=o,n.k&&(c[n.k]=o))};if(o){const j=()=>{Q(),a0.delete(n)};j.id=-1,a0.set(n,j),y1(j,t)}else xn(n),Q()}}}function xn(n){const a=a0.get(n);a&&(a.flags|=8,a0.delete(n))}l0().requestIdleCallback;l0().cancelIdleCallback;const S2=n=>!!n.type.__asyncLoader,_a=n=>n.type.__isKeepAlive;function d4(n,a){La(n,"a",a)}function o4(n,a){La(n,"da",a)}function La(n,a,t=i1){const h=n.__wdc||(n.__wdc=()=>{let e=t;for(;e;){if(e.isDeactivated)return;e=e.parent}return n()});if(r0(a,h,t),t){let e=t.parent;for(;e&&e.parent;)_a(e.parent.vnode)&&l4(h,a,t,e),e=e.parent}}function l4(n,a,t,h){const e=r0(a,n,h,!0);ka(()=>{N0(h[a],e)},t)}function r0(n,a,t=i1,h=!1){if(t){const e=t[n]||(t[n]=[]),d=a.__weh||(a.__weh=(...o)=>{R1();const l=I2(t),s=S1(a,t,n,o);return l(),I1(),s});return h?e.unshift(d):e.push(d),d}}const N1=n=>(a,t=i1)=>{(!j2||n==="sp")&&r0(n,(...h)=>a(...h),t)},i4=N1("bm"),za=N1("m"),s4=N1("bu"),p4=N1("u"),r4=N1("bum"),ka=N1("um"),c4=N1("sp"),m4=N1("rtg"),y4=N1("rtc");function M4(n,a=i1){r0("ec",n,a)}const v4=Symbol.for("v-ndc");function r2(n,a,t,h){let e;const d=t,o=E(n);if(o||a1(n)){const l=o&&l2(n);let s=!1,m=!1;l&&(s=!u1(n),m=F1(n),n=s0(n)),e=new Array(n.length);for(let c=0,M=n.length;c<M;c++)e[c]=a(s?m?u2(B1(n[c])):B1(n[c]):n[c],c,void 0,d)}else if(typeof n=="number"){e=new Array(n);for(let l=0;l<n;l++)e[l]=a(l+1,l,void 0,d)}else if(X(n))if(n[Symbol.iterator])e=Array.from(n,(l,s)=>a(l,s,void 0,d));else{const l=Object.keys(n);e=new Array(l.length);for(let s=0,m=l.length;s<m;s++){const c=l[s];e[s]=a(n[c],c,s,d)}}else e=[];return e}const T0=n=>n?Ja(n)?y0(n):T0(n.parent):null,q2=d1(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>T0(n.parent),$root:n=>T0(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sa(n),$forceUpdate:n=>n.f||(n.f=()=>{nn(n.update)}),$nextTick:n=>n.n||(n.n=Kt.bind(n.proxy)),$watch:n=>a4.bind(n)}),g0=(n,a)=>n!==G&&!n.__isScriptSetup&&$(n,a),b4={get({_:n},a){if(a==="__v_skip")return!0;const{ctx:t,setupState:h,data:e,props:d,accessCache:o,type:l,appContext:s}=n;if(a[0]!=="$"){const _=o[a];if(_!==void 0)switch(_){case 1:return h[a];case 2:return e[a];case 4:return t[a];case 3:return d[a]}else{if(g0(h,a))return o[a]=1,h[a];if(e!==G&&$(e,a))return o[a]=2,e[a];if($(d,a))return o[a]=3,d[a];if(t!==G&&$(t,a))return o[a]=4,t[a];P0&&(o[a]=0)}}const m=q2[a];let c,M;if(m)return a==="$attrs"&&t1(n.attrs,"get",""),m(n);if((c=l.__cssModules)&&(c=c[a]))return c;if(t!==G&&$(t,a))return o[a]=4,t[a];if(M=s.config.globalProperties,$(M,a))return M[a]},set({_:n},a,t){const{data:h,setupState:e,ctx:d}=n;return g0(e,a)?(e[a]=t,!0):h!==G&&$(h,a)?(h[a]=t,!0):$(n.props,a)||a[0]==="$"&&a.slice(1)in n?!1:(d[a]=t,!0)},has({_:{data:n,setupState:a,accessCache:t,ctx:h,appContext:e,props:d,type:o}},l){let s;return!!(t[l]||n!==G&&l[0]!=="$"&&$(n,l)||g0(a,l)||$(d,l)||$(h,l)||$(q2,l)||$(e.config.globalProperties,l)||(s=o.__cssModules)&&s[l])},defineProperty(n,a,t){return t.get!=null?n._.accessCache[a]=0:$(t,"value")&&this.set(n,a,t.value,null),Reflect.defineProperty(n,a,t)}};function wn(n){return E(n)?n.reduce((a,t)=>(a[t]=null,a),{}):n}let P0=!0;function x4(n){const a=Sa(n),t=n.proxy,h=n.ctx;P0=!1,a.beforeCreate&&un(a.beforeCreate,n,"bc");const{data:e,computed:d,methods:o,watch:l,provide:s,inject:m,created:c,beforeMount:M,mounted:_,beforeUpdate:V,updated:O,activated:Z,deactivated:Q,beforeDestroy:j,beforeUnmount:F,destroyed:K,unmounted:z,render:I,renderTracked:v1,renderTriggered:s1,errorCaptured:b1,serverPrefetch:s2,expose:q1,inheritAttrs:D1,components:X1,directives:$1,filters:n2}=a;if(m&&w4(m,h,null),o)for(const B in o){const N=o[B];P(N)&&(h[B]=N.bind(t))}if(e){const B=e.call(t,t);X(B)&&(n.data=Y0(B))}if(P0=!0,d)for(const B in d){const N=d[B],a2=P(N)?N.bind(t,t):P(N.get)?N.get.bind(t,t):k1,F2=!P(N)&&P(N.set)?N.set.bind(t):k1,t2=eh({get:a2,set:F2});Object.defineProperty(h,B,{enumerable:!0,configurable:!0,get:()=>t2.value,set:g1=>t2.value=g1})}if(l)for(const B in l)Ca(l[B],h,t,B);if(s){const B=P(s)?s.call(t):s;Reflect.ownKeys(B).forEach(N=>{Qt(N,B[N])})}c&&un(c,n,"c");function v(B,N){E(N)?N.forEach(a2=>B(a2.bind(t))):N&&B(N.bind(t))}if(v(i4,M),v(za,_),v(s4,V),v(p4,O),v(d4,Z),v(o4,Q),v(M4,b1),v(y4,v1),v(m4,s1),v(r4,F),v(ka,z),v(c4,s2),E(q1))if(q1.length){const B=n.exposed||(n.exposed={});q1.forEach(N=>{Object.defineProperty(B,N,{get:()=>t[N],set:a2=>t[N]=a2,enumerable:!0})})}else n.exposed||(n.exposed={});I&&n.render===k1&&(n.render=I),D1!=null&&(n.inheritAttrs=D1),X1&&(n.components=X1),$1&&(n.directives=$1),s2&&Aa(n)}function w4(n,a,t=k1){E(n)&&(n=O0(n));for(const h in n){const e=n[h];let d;X(e)?"default"in e?d=G2(e.from||h,e.default,!0):d=G2(e.from||h):d=G2(e),e1(d)?Object.defineProperty(a,h,{enumerable:!0,configurable:!0,get:()=>d.value,set:o=>d.value=o}):a[h]=d}}function un(n,a,t){S1(E(n)?n.map(h=>h.bind(a.proxy)):n.bind(a.proxy),a,t)}function Ca(n,a,t,h){let e=h.includes(".")?Va(t,h):()=>t[h];if(a1(n)){const d=a[n];P(d)&&B0(e,d)}else if(P(n))B0(e,n.bind(t));else if(X(n))if(E(n))n.forEach(d=>Ca(d,a,t,h));else{const d=P(n.handler)?n.handler.bind(t):a[n.handler];P(d)&&B0(e,d,n)}}function Sa(n){const a=n.type,{mixins:t,extends:h}=a,{mixins:e,optionsCache:d,config:{optionMergeStrategies:o}}=n.appContext,l=d.get(a);let s;return l?s=l:!e.length&&!t&&!h?s=a:(s={},e.length&&e.forEach(m=>t0(s,m,o,!0)),t0(s,a,o)),X(a)&&d.set(a,s),s}function t0(n,a,t,h=!1){const{mixins:e,extends:d}=a;d&&t0(n,d,t,!0),e&&e.forEach(o=>t0(n,o,t,!0));for(const o in a)if(!(h&&o==="expose")){const l=u4[o]||t&&t[o];n[o]=l?l(n[o],a[o]):a[o]}return n}const u4={data:fn,props:Bn,emits:Bn,methods:_2,computed:_2,beforeCreate:o1,created:o1,beforeMount:o1,mounted:o1,beforeUpdate:o1,updated:o1,beforeDestroy:o1,beforeUnmount:o1,destroyed:o1,unmounted:o1,activated:o1,deactivated:o1,errorCaptured:o1,serverPrefetch:o1,components:_2,directives:_2,watch:B4,provide:fn,inject:f4};function fn(n,a){return a?n?function(){return d1(P(n)?n.call(this,this):n,P(a)?a.call(this,this):a)}:a:n}function f4(n,a){return _2(O0(n),O0(a))}function O0(n){if(E(n)){const a={};for(let t=0;t<n.length;t++)a[n[t]]=n[t];return a}return n}function o1(n,a){return n?[...new Set([].concat(n,a))]:a}function _2(n,a){return n?d1(Object.create(null),n,a):a}function Bn(n,a){return n?E(n)&&E(a)?[...new Set([...n,...a])]:d1(Object.create(null),wn(n),wn(a!=null?a:{})):a}function B4(n,a){if(!n)return a;if(!a)return n;const t=d1(Object.create(null),n);for(const h in a)t[h]=o1(n[h],a[h]);return t}function qa(){return{app:null,config:{isNativeTag:Kn,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g4=0;function H4(n,a){return function(h,e=null){P(h)||(h=d1({},h)),e!=null&&!X(e)&&(e=null);const d=qa(),o=new WeakSet,l=[];let s=!1;const m=d.app={_uid:g4++,_component:h,_props:e,_container:null,_context:d,_instance:null,version:dh,get config(){return d.config},set config(c){},use(c,...M){return o.has(c)||(c&&P(c.install)?(o.add(c),c.install(m,...M)):P(c)&&(o.add(c),c(m,...M))),m},mixin(c){return d.mixins.includes(c)||d.mixins.push(c),m},component(c,M){return M?(d.components[c]=M,m):d.components[c]},directive(c,M){return M?(d.directives[c]=M,m):d.directives[c]},mount(c,M,_){if(!s){const V=m._ceVNode||C1(h,e);return V.appContext=d,_===!0?_="svg":_===!1&&(_=void 0),n(V,c,_),s=!0,m._container=c,c.__vue_app__=m,y0(V.component)}},onUnmount(c){l.push(c)},unmount(){s&&(S1(l,m._instance,16),n(null,m._container),delete m._container.__vue_app__)},provide(c,M){return d.provides[c]=M,m},runWithContext(c){const M=w2;w2=m;try{return c()}finally{w2=M}}};return m}}let w2=null;const V4=(n,a)=>a==="modelValue"||a==="model-value"?n.modelModifiers:n[`${a}Modifiers`]||n[`${J1(a)}Modifiers`]||n[`${i2(a)}Modifiers`];function A4(n,a,...t){if(n.isUnmounted)return;const h=n.vnode.props||G;let e=t;const d=a.startsWith("update:"),o=d&&V4(h,a.slice(7));o&&(o.trim&&(e=t.map(c=>a1(c)?c.trim():c)),o.number&&(e=t.map($0)));let l,s=h[l=b0(a)]||h[l=b0(J1(a))];!s&&d&&(s=h[l=b0(i2(a))]),s&&S1(s,n,6,e);const m=h[l+"Once"];if(m){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,S1(m,n,6,e)}}const _4=new WeakMap;function Ea(n,a,t=!1){const h=t?_4:a.emitsCache,e=h.get(n);if(e!==void 0)return e;const d=n.emits;let o={},l=!1;if(!P(n)){const s=m=>{const c=Ea(m,a,!0);c&&(l=!0,d1(o,c))};!t&&a.mixins.length&&a.mixins.forEach(s),n.extends&&s(n.extends),n.mixins&&n.mixins.forEach(s)}return!d&&!l?(X(n)&&h.set(n,null),null):(E(d)?d.forEach(s=>o[s]=null):d1(o,d),X(n)&&h.set(n,o),o)}function c0(n,a){return!n||!e0(a)?!1:(a=a.slice(2).replace(/Once$/,""),$(n,a[0].toLowerCase()+a.slice(1))||$(n,i2(a))||$(n,a))}function gn(n){const{type:a,vnode:t,proxy:h,withProxy:e,propsOptions:[d],slots:o,attrs:l,emit:s,render:m,renderCache:c,props:M,data:_,setupState:V,ctx:O,inheritAttrs:Z}=n,Q=n0(n);let j,F;try{if(t.shapeFlag&4){const z=e||h,I=z;j=z1(m.call(I,z,c,M,V,_,O)),F=l}else{const z=a;j=z1(z.length>1?z(M,{attrs:l,slots:o,emit:s}):z(M,null)),F=a.props?l:L4(l)}}catch(z){E2.length=0,p0(z,n,1),j=C1(Y1)}let K=j;if(F&&Z!==!1){const z=Object.keys(F),{shapeFlag:I}=K;z.length&&I&7&&(d&&z.some(F0)&&(F=z4(F,d)),K=f2(K,F,!1,!0))}return t.dirs&&(K=f2(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&an(K,t.transition),j=K,n0(Q),j}const L4=n=>{let a;for(const t in n)(t==="class"||t==="style"||e0(t))&&((a||(a={}))[t]=n[t]);return a},z4=(n,a)=>{const t={};for(const h in n)(!F0(h)||!(h.slice(9)in a))&&(t[h]=n[h]);return t};function k4(n,a,t){const{props:h,children:e,component:d}=n,{props:o,children:l,patchFlag:s}=a,m=d.emitsOptions;if(a.dirs||a.transition)return!0;if(t&&s>=0){if(s&1024)return!0;if(s&16)return h?Hn(h,o,m):!!o;if(s&8){const c=a.dynamicProps;for(let M=0;M<c.length;M++){const _=c[M];if(o[_]!==h[_]&&!c0(m,_))return!0}}}else return(e||l)&&(!l||!l.$stable)?!0:h===o?!1:h?o?Hn(h,o,m):!0:!!o;return!1}function Hn(n,a,t){const h=Object.keys(a);if(h.length!==Object.keys(n).length)return!0;for(let e=0;e<h.length;e++){const d=h[e];if(a[d]!==n[d]&&!c0(t,d))return!0}return!1}function C4({vnode:n,parent:a},t){for(;a;){const h=a.subTree;if(h.suspense&&h.suspense.activeBranch===n&&(h.el=n.el),h===n)(n=a.vnode).el=t,a=a.parent;else break}}const Ta={},Pa=()=>Object.create(Ta),Oa=n=>Object.getPrototypeOf(n)===Ta;function S4(n,a,t,h=!1){const e={},d=Pa();n.propsDefaults=Object.create(null),Za(n,a,e,d);for(const o in n.propsOptions[0])o in e||(e[o]=void 0);t?n.props=h?e:Ot(e):n.type.props?n.props=e:n.props=d,n.attrs=d}function q4(n,a,t,h){const{props:e,attrs:d,vnode:{patchFlag:o}}=n,l=D(e),[s]=n.propsOptions;let m=!1;if((h||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let M=0;M<c.length;M++){let _=c[M];if(c0(n.emitsOptions,_))continue;const V=a[_];if(s)if($(d,_))V!==d[_]&&(d[_]=V,m=!0);else{const O=J1(_);e[O]=Z0(s,l,O,V,n,!1)}else V!==d[_]&&(d[_]=V,m=!0)}}}else{Za(n,a,e,d)&&(m=!0);let c;for(const M in l)(!a||!$(a,M)&&((c=i2(M))===M||!$(a,c)))&&(s?t&&(t[M]!==void 0||t[c]!==void 0)&&(e[M]=Z0(s,l,M,void 0,n,!0)):delete e[M]);if(d!==l)for(const M in d)(!a||!$(a,M))&&(delete d[M],m=!0)}m&&Z1(n.attrs,"set","")}function Za(n,a,t,h){const[e,d]=n.propsOptions;let o=!1,l;if(a)for(let s in a){if(L2(s))continue;const m=a[s];let c;e&&$(e,c=J1(s))?!d||!d.includes(c)?t[c]=m:(l||(l={}))[c]=m:c0(n.emitsOptions,s)||(!(s in h)||m!==h[s])&&(h[s]=m,o=!0)}if(d){const s=D(t),m=l||G;for(let c=0;c<d.length;c++){const M=d[c];t[M]=Z0(e,s,M,m[M],n,!$(m,M))}}return o}function Z0(n,a,t,h,e,d){const o=n[t];if(o!=null){const l=$(o,"default");if(l&&h===void 0){const s=o.default;if(o.type!==Function&&!o.skipFactory&&P(s)){const{propsDefaults:m}=e;if(t in m)h=m[t];else{const c=I2(e);h=m[t]=s.call(null,a),c()}}else h=s;e.ce&&e.ce._setProp(t,h)}o[0]&&(d&&!l?h=!1:o[1]&&(h===""||h===i2(t))&&(h=!0))}return h}const E4=new WeakMap;function ja(n,a,t=!1){const h=t?E4:a.propsCache,e=h.get(n);if(e)return e;const d=n.props,o={},l=[];let s=!1;if(!P(n)){const c=M=>{s=!0;const[_,V]=ja(M,a,!0);d1(o,_),V&&l.push(...V)};!t&&a.mixins.length&&a.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!d&&!s)return X(n)&&h.set(n,v2),v2;if(E(d))for(let c=0;c<d.length;c++){const M=J1(d[c]);Vn(M)&&(o[M]=G)}else if(d)for(const c in d){const M=J1(c);if(Vn(M)){const _=d[c],V=o[M]=E(_)||P(_)?{type:_}:d1({},_),O=V.type;let Z=!1,Q=!0;if(E(O))for(let j=0;j<O.length;++j){const F=O[j],K=P(F)&&F.name;if(K==="Boolean"){Z=!0;break}else K==="String"&&(Q=!1)}else Z=P(O)&&O.name==="Boolean";V[0]=Z,V[1]=Q,(Z||$(V,"default"))&&l.push(M)}}const m=[o,l];return X(n)&&h.set(n,m),m}function Vn(n){return n[0]!=="$"&&!L2(n)}const tn=n=>n==="_"||n==="_ctx"||n==="$stable",hn=n=>E(n)?n.map(z1):[z1(n)],T4=(n,a,t)=>{if(a._n)return a;const h=Yt((...e)=>hn(a(...e)),t);return h._c=!1,h},Ra=(n,a,t)=>{const h=n._ctx;for(const e in n){if(tn(e))continue;const d=n[e];if(P(d))a[e]=T4(e,d,h);else if(d!=null){const o=hn(d);a[e]=()=>o}}},Ia=(n,a)=>{const t=hn(a);n.slots.default=()=>t},Fa=(n,a,t)=>{for(const h in a)(t||!tn(h))&&(n[h]=a[h])},P4=(n,a,t)=>{const h=n.slots=Pa();if(n.vnode.shapeFlag&32){const e=a._;e?(Fa(h,a,t),t&&na(h,"_",e,!0)):Ra(a,h)}else a&&Ia(n,a)},O4=(n,a,t)=>{const{vnode:h,slots:e}=n;let d=!0,o=G;if(h.shapeFlag&32){const l=a._;l?t&&l===1?d=!1:Fa(e,a,t):(d=!a.$stable,Ra(a,e)),o=a}else a&&(Ia(n,a),o={default:1});if(d)for(const l in e)!tn(l)&&o[l]==null&&delete e[l]},y1=F4;function Z4(n){return j4(n)}function j4(n,a){const t=l0();t.__VUE__=!0;const{insert:h,remove:e,patchProp:d,createElement:o,createText:l,createComment:s,setText:m,setElementText:c,parentNode:M,nextSibling:_,setScopeId:V=k1,insertStaticContent:O}=n,Z=(i,p,y,u=null,b=null,x=null,H=void 0,g=null,f=!!p.dynamicChildren)=>{if(i===p)return;i&&!A2(i,p)&&(u=N2(i),g1(i,b,x,!0),i=null),p.patchFlag===-2&&(f=!1,p.dynamicChildren=null);const{type:w,ref:k,shapeFlag:A}=p;switch(w){case m0:Q(i,p,y,u);break;case Y1:j(i,p,y,u);break;case V0:i==null&&F(p,y,u,H);break;case h1:X1(i,p,y,u,b,x,H,g,f);break;default:A&1?I(i,p,y,u,b,x,H,g,f):A&6?$1(i,p,y,u,b,x,H,g,f):(A&64||A&128)&&w.process(i,p,y,u,b,x,H,g,f,g2)}k!=null&&b?C2(k,i&&i.ref,x,p||i,!p):k==null&&i&&i.ref!=null&&C2(i.ref,null,x,i,!0)},Q=(i,p,y,u)=>{if(i==null)h(p.el=l(p.children),y,u);else{const b=p.el=i.el;p.children!==i.children&&m(b,p.children)}},j=(i,p,y,u)=>{i==null?h(p.el=s(p.children||""),y,u):p.el=i.el},F=(i,p,y,u)=>{[i.el,i.anchor]=O(i.children,p,y,u,i.el,i.anchor)},K=({el:i,anchor:p},y,u)=>{let b;for(;i&&i!==p;)b=_(i),h(i,y,u),i=b;h(p,y,u)},z=({el:i,anchor:p})=>{let y;for(;i&&i!==p;)y=_(i),e(i),i=y;e(p)},I=(i,p,y,u,b,x,H,g,f)=>{if(p.type==="svg"?H="svg":p.type==="math"&&(H="mathml"),i==null)v1(p,y,u,b,x,H,g,f);else{const w=i.el&&i.el._isVueCE?i.el:null;try{w&&w._beginPatch(),s2(i,p,b,x,H,g,f)}finally{w&&w._endPatch()}}},v1=(i,p,y,u,b,x,H,g)=>{let f,w;const{props:k,shapeFlag:A,transition:L,dirs:S}=i;if(f=i.el=o(i.type,x,k&&k.is,k),A&8?c(f,i.children):A&16&&b1(i.children,f,null,u,b,H0(i,x),H,g),S&&h2(i,null,u,"created"),s1(f,i,i.scopeId,H,u),k){for(const J in k)J!=="value"&&!L2(J)&&d(f,J,null,k[J],x,u);"value"in k&&d(f,"value",null,k.value,x),(w=k.onVnodeBeforeMount)&&_1(w,u,i)}S&&h2(i,null,u,"beforeMount");const R=R4(b,L);R&&L.beforeEnter(f),h(f,p,y),((w=k&&k.onVnodeMounted)||R||S)&&y1(()=>{w&&_1(w,u,i),R&&L.enter(f),S&&h2(i,null,u,"mounted")},b)},s1=(i,p,y,u,b)=>{if(y&&V(i,y),u)for(let x=0;x<u.length;x++)V(i,u[x]);if(b){let x=b.subTree;if(p===x||Ua(x.type)&&(x.ssContent===p||x.ssFallback===p)){const H=b.vnode;s1(i,H,H.scopeId,H.slotScopeIds,b.parent)}}},b1=(i,p,y,u,b,x,H,g,f=0)=>{for(let w=f;w<i.length;w++){const k=i[w]=g?K1(i[w]):z1(i[w]);Z(null,k,p,y,u,b,x,H,g)}},s2=(i,p,y,u,b,x,H)=>{const g=p.el=i.el;let{patchFlag:f,dynamicChildren:w,dirs:k}=p;f|=i.patchFlag&16;const A=i.props||G,L=p.props||G;let S;if(y&&e2(y,!1),(S=L.onVnodeBeforeUpdate)&&_1(S,y,p,i),k&&h2(p,i,y,"beforeUpdate"),y&&e2(y,!0),(A.innerHTML&&L.innerHTML==null||A.textContent&&L.textContent==null)&&c(g,""),w?q1(i.dynamicChildren,w,g,y,u,H0(p,b),x):H||N(i,p,g,null,y,u,H0(p,b),x,!1),f>0){if(f&16)D1(g,A,L,y,b);else if(f&2&&A.class!==L.class&&d(g,"class",null,L.class,b),f&4&&d(g,"style",A.style,L.style,b),f&8){const R=p.dynamicProps;for(let J=0;J<R.length;J++){const U=R[J],p1=A[U],r1=L[U];(r1!==p1||U==="value")&&d(g,U,p1,r1,b,y)}}f&1&&i.children!==p.children&&c(g,p.children)}else!H&&w==null&&D1(g,A,L,y,b);((S=L.onVnodeUpdated)||k)&&y1(()=>{S&&_1(S,y,p,i),k&&h2(p,i,y,"updated")},u)},q1=(i,p,y,u,b,x,H)=>{for(let g=0;g<p.length;g++){const f=i[g],w=p[g],k=f.el&&(f.type===h1||!A2(f,w)||f.shapeFlag&198)?M(f.el):y;Z(f,w,k,null,u,b,x,H,!0)}},D1=(i,p,y,u,b)=>{if(p!==y){if(p!==G)for(const x in p)!L2(x)&&!(x in y)&&d(i,x,p[x],null,b,u);for(const x in y){if(L2(x))continue;const H=y[x],g=p[x];H!==g&&x!=="value"&&d(i,x,g,H,b,u)}"value"in y&&d(i,"value",p.value,y.value,b)}},X1=(i,p,y,u,b,x,H,g,f)=>{const w=p.el=i?i.el:l(""),k=p.anchor=i?i.anchor:l("");let{patchFlag:A,dynamicChildren:L,slotScopeIds:S}=p;S&&(g=g?g.concat(S):S),i==null?(h(w,y,u),h(k,y,u),b1(p.children||[],y,k,b,x,H,g,f)):A>0&&A&64&&L&&i.dynamicChildren&&i.dynamicChildren.length===L.length?(q1(i.dynamicChildren,L,y,b,x,H,g),(p.key!=null||b&&p===b.subTree)&&Na(i,p,!0)):N(i,p,y,k,b,x,H,g,f)},$1=(i,p,y,u,b,x,H,g,f)=>{p.slotScopeIds=g,i==null?p.shapeFlag&512?b.ctx.activate(p,y,u,H,f):n2(p,y,u,b,x,H,f):W(i,p,f)},n2=(i,p,y,u,b,x,H)=>{const g=i.component=Y4(i,u,b);if(_a(i)&&(g.ctx.renderer=g2),X4(g,!1,H),g.asyncDep){if(b&&b.registerDep(g,v,H),!i.el){const f=g.subTree=C1(Y1);j(null,f,p,y),i.placeholder=f.el}}else v(g,i,p,y,b,x,H)},W=(i,p,y)=>{const u=p.component=i.component;if(k4(i,p,y))if(u.asyncDep&&!u.asyncResolved){B(u,p,y);return}else u.next=p,u.update();else p.el=i.el,u.vnode=p},v=(i,p,y,u,b,x,H)=>{const g=()=>{if(i.isMounted){let{next:A,bu:L,u:S,parent:R,vnode:J}=i;{const V1=Da(i);if(V1){A&&(A.el=J.el,B(i,A,H)),V1.asyncDep.then(()=>{i.isUnmounted||g()});return}}let U=A,p1;e2(i,!1),A?(A.el=J.el,B(i,A,H)):A=J,L&&K2(L),(p1=A.props&&A.props.onVnodeBeforeUpdate)&&_1(p1,R,A,J),e2(i,!0);const r1=gn(i),H1=i.subTree;i.subTree=r1,Z(H1,r1,M(H1.el),N2(H1),i,b,x),A.el=r1.el,U===null&&C4(i,r1.el),S&&y1(S,b),(p1=A.props&&A.props.onVnodeUpdated)&&y1(()=>_1(p1,R,A,J),b)}else{let A;const{el:L,props:S}=p,{bm:R,m:J,parent:U,root:p1,type:r1}=i,H1=S2(p);e2(i,!1),R&&K2(R),!H1&&(A=S&&S.onVnodeBeforeMount)&&_1(A,U,p),e2(i,!0);{p1.ce&&p1.ce._def.shadowRoot!==!1&&p1.ce._injectChildStyle(r1);const V1=i.subTree=gn(i);Z(null,V1,y,u,i,b,x),p.el=V1.el}if(J&&y1(J,b),!H1&&(A=S&&S.onVnodeMounted)){const V1=p;y1(()=>_1(A,U,V1),b)}(p.shapeFlag&256||U&&S2(U.vnode)&&U.vnode.shapeFlag&256)&&i.a&&y1(i.a,b),i.isMounted=!0,p=y=u=null}};i.scope.on();const f=i.effect=new ea(g);i.scope.off();const w=i.update=f.run.bind(f),k=i.job=f.runIfDirty.bind(f);k.i=i,k.id=i.uid,f.scheduler=()=>nn(k),e2(i,!0),w()},B=(i,p,y)=>{p.component=i;const u=i.vnode.props;i.vnode=p,i.next=null,q4(i,p.props,u,y),O4(i,p.children,y),R1(),vn(i),I1()},N=(i,p,y,u,b,x,H,g,f=!1)=>{const w=i&&i.children,k=i?i.shapeFlag:0,A=p.children,{patchFlag:L,shapeFlag:S}=p;if(L>0){if(L&128){F2(w,A,y,u,b,x,H,g,f);return}else if(L&256){a2(w,A,y,u,b,x,H,g,f);return}}S&8?(k&16&&B2(w,b,x),A!==w&&c(y,A)):k&16?S&16?F2(w,A,y,u,b,x,H,g,f):B2(w,b,x,!0):(k&8&&c(y,""),S&16&&b1(A,y,u,b,x,H,g,f))},a2=(i,p,y,u,b,x,H,g,f)=>{i=i||v2,p=p||v2;const w=i.length,k=p.length,A=Math.min(w,k);let L;for(L=0;L<A;L++){const S=p[L]=f?K1(p[L]):z1(p[L]);Z(i[L],S,y,null,b,x,H,g,f)}w>k?B2(i,b,x,!0,!1,A):b1(p,y,u,b,x,H,g,f,A)},F2=(i,p,y,u,b,x,H,g,f)=>{let w=0;const k=p.length;let A=i.length-1,L=k-1;for(;w<=A&&w<=L;){const S=i[w],R=p[w]=f?K1(p[w]):z1(p[w]);if(A2(S,R))Z(S,R,y,null,b,x,H,g,f);else break;w++}for(;w<=A&&w<=L;){const S=i[A],R=p[L]=f?K1(p[L]):z1(p[L]);if(A2(S,R))Z(S,R,y,null,b,x,H,g,f);else break;A--,L--}if(w>A){if(w<=L){const S=L+1,R=S<k?p[S].el:u;for(;w<=L;)Z(null,p[w]=f?K1(p[w]):z1(p[w]),y,R,b,x,H,g,f),w++}}else if(w>L)for(;w<=A;)g1(i[w],b,x,!0),w++;else{const S=w,R=w,J=new Map;for(w=R;w<=L;w++){const m1=p[w]=f?K1(p[w]):z1(p[w]);m1.key!=null&&J.set(m1.key,w)}let U,p1=0;const r1=L-R+1;let H1=!1,V1=0;const H2=new Array(r1);for(w=0;w<r1;w++)H2[w]=0;for(w=S;w<=A;w++){const m1=i[w];if(p1>=r1){g1(m1,b,x,!0);continue}let A1;if(m1.key!=null)A1=J.get(m1.key);else for(U=R;U<=L;U++)if(H2[U-R]===0&&A2(m1,p[U])){A1=U;break}A1===void 0?g1(m1,b,x,!0):(H2[A1-R]=w+1,A1>=V1?V1=A1:H1=!0,Z(m1,p[A1],y,null,b,x,H,g,f),p1++)}const ln=H1?I4(H2):v2;for(U=ln.length-1,w=r1-1;w>=0;w--){const m1=R+w,A1=p[m1],sn=p[m1+1],pn=m1+1<k?sn.el||$a(sn):u;H2[w]===0?Z(null,A1,y,pn,b,x,H,g,f):H1&&(U<0||w!==ln[U]?t2(A1,y,pn,2):U--)}}},t2=(i,p,y,u,b=null)=>{const{el:x,type:H,transition:g,children:f,shapeFlag:w}=i;if(w&6){t2(i.component.subTree,p,y,u);return}if(w&128){i.suspense.move(p,y,u);return}if(w&64){H.move(i,p,y,g2);return}if(H===h1){h(x,p,y);for(let A=0;A<f.length;A++)t2(f[A],p,y,u);h(i.anchor,p,y);return}if(H===V0){K(i,p,y);return}if(u!==2&&w&1&&g)if(u===0)g.beforeEnter(x),h(x,p,y),y1(()=>g.enter(x),b);else{const{leave:A,delayLeave:L,afterLeave:S}=g,R=()=>{i.ctx.isUnmounted?e(x):h(x,p,y)},J=()=>{x._isLeaving&&x[e4](!0),A(x,()=>{R(),S&&S()})};L?L(x,R,J):J()}else h(x,p,y)},g1=(i,p,y,u=!1,b=!1)=>{const{type:x,props:H,ref:g,children:f,dynamicChildren:w,shapeFlag:k,patchFlag:A,dirs:L,cacheIndex:S}=i;if(A===-2&&(b=!1),g!=null&&(R1(),C2(g,null,y,i,!0),I1()),S!=null&&(p.renderCache[S]=void 0),k&256){p.ctx.deactivate(i);return}const R=k&1&&L,J=!S2(i);let U;if(J&&(U=H&&H.onVnodeBeforeUnmount)&&_1(U,p,i),k&6)at(i.component,y,u);else{if(k&128){i.suspense.unmount(y,u);return}R&&h2(i,null,p,"beforeUnmount"),k&64?i.type.remove(i,p,y,g2,u):w&&!w.hasOnce&&(x!==h1||A>0&&A&64)?B2(w,p,y,!1,!0):(x===h1&&A&384||!b&&k&16)&&B2(f,p,y),u&&dn(i)}(J&&(U=H&&H.onVnodeUnmounted)||R)&&y1(()=>{U&&_1(U,p,i),R&&h2(i,null,p,"unmounted")},y)},dn=i=>{const{type:p,el:y,anchor:u,transition:b}=i;if(p===h1){nt(y,u);return}if(p===V0){z(i);return}const x=()=>{e(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(i.shapeFlag&1&&b&&!b.persisted){const{leave:H,delayLeave:g}=b,f=()=>H(y,x);g?g(i.el,x,f):f()}else x()},nt=(i,p)=>{let y;for(;i!==p;)y=_(i),e(i),i=y;e(p)},at=(i,p,y)=>{const{bum:u,scope:b,job:x,subTree:H,um:g,m:f,a:w}=i;An(f),An(w),u&&K2(u),b.stop(),x&&(x.flags|=8,g1(H,i,p,y)),g&&y1(g,p),y1(()=>{i.isUnmounted=!0},p)},B2=(i,p,y,u=!1,b=!1,x=0)=>{for(let H=x;H<i.length;H++)g1(i[H],p,y,u,b)},N2=i=>{if(i.shapeFlag&6)return N2(i.component.subTree);if(i.shapeFlag&128)return i.suspense.next();const p=_(i.anchor||i.el),y=p&&p[t4];return y?_(y):p};let M0=!1;const on=(i,p,y)=>{let u;i==null?p._vnode&&(g1(p._vnode,null,null,!0),u=p._vnode.component):Z(p._vnode||null,i,p,null,null,null,y),p._vnode=i,M0||(M0=!0,vn(u),fa(),M0=!1)},g2={p:Z,um:g1,m:t2,r:dn,mt:n2,mc:b1,pc:N,pbc:q1,n:N2,o:n};return{render:on,hydrate:void 0,createApp:H4(on)}}function H0({type:n,props:a},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&a&&a.encoding&&a.encoding.includes("html")?void 0:t}function e2({effect:n,job:a},t){t?(n.flags|=32,a.flags|=4):(n.flags&=-33,a.flags&=-5)}function R4(n,a){return(!n||n&&!n.pendingBranch)&&a&&!a.persisted}function Na(n,a,t=!1){const h=n.children,e=a.children;if(E(h)&&E(e))for(let d=0;d<h.length;d++){const o=h[d];let l=e[d];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=e[d]=K1(e[d]),l.el=o.el),!t&&l.patchFlag!==-2&&Na(o,l)),l.type===m0&&(l.patchFlag!==-1?l.el=o.el:l.__elIndex=d+(n.type===h1?1:0)),l.type===Y1&&!l.el&&(l.el=o.el)}}function I4(n){const a=n.slice(),t=[0];let h,e,d,o,l;const s=n.length;for(h=0;h<s;h++){const m=n[h];if(m!==0){if(e=t[t.length-1],n[e]<m){a[h]=e,t.push(h);continue}for(d=0,o=t.length-1;d<o;)l=d+o>>1,n[t[l]]<m?d=l+1:o=l;m<n[t[d]]&&(d>0&&(a[h]=t[d-1]),t[d]=h)}}for(d=t.length,o=t[d-1];d-- >0;)t[d]=o,o=a[o];return t}function Da(n){const a=n.subTree.component;if(a)return a.asyncDep&&!a.asyncResolved?a:Da(a)}function An(n){if(n)for(let a=0;a<n.length;a++)n[a].flags|=8}function $a(n){if(n.placeholder)return n.placeholder;const a=n.component;return a?$a(a.subTree):null}const Ua=n=>n.__isSuspense;function F4(n,a){a&&a.pendingBranch?E(n)?a.effects.push(...n):a.effects.push(n):Jt(n)}const h1=Symbol.for("v-fgt"),m0=Symbol.for("v-txt"),Y1=Symbol.for("v-cmt"),V0=Symbol.for("v-stc"),E2=[];let M1=null;function q(n=!1){E2.push(M1=n?null:[])}function N4(){E2.pop(),M1=E2[E2.length-1]||null}let Z2=1;function _n(n,a=!1){Z2+=n,n<0&&M1&&a&&(M1.hasOnce=!0)}function Wa(n){return n.dynamicChildren=Z2>0?M1||v2:null,N4(),Z2>0&&M1&&M1.push(n),n}function T(n,a,t,h,e,d){return Wa(r(n,a,t,h,e,d,!0))}function D4(n,a,t,h,e){return Wa(C1(n,a,t,h,e,!0))}function Ka(n){return n?n.__v_isVNode===!0:!1}function A2(n,a){return n.type===a.type&&n.key===a.key}const Ga=({key:n})=>n!=null?n:null,J2=({ref:n,ref_key:a,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?a1(n)||e1(n)||P(n)?{i:w1,r:n,k:a,f:!!t}:n:null);function r(n,a=null,t=null,h=0,e=null,d=n===h1?0:1,o=!1,l=!1){const s={__v_isVNode:!0,__v_skip:!0,type:n,props:a,key:a&&Ga(a),ref:a&&J2(a),scopeId:ga,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:d,patchFlag:h,dynamicProps:e,dynamicChildren:null,appContext:null,ctx:w1};return l?(en(s,t),d&128&&n.normalize(s)):t&&(s.shapeFlag|=a1(t)?8:16),Z2>0&&!o&&M1&&(s.patchFlag>0||d&6)&&s.patchFlag!==32&&M1.push(s),s}const C1=$4;function $4(n,a=null,t=null,h=0,e=null,d=!1){if((!n||n===v4)&&(n=Y1),Ka(n)){const l=f2(n,a,!0);return t&&en(l,t),Z2>0&&!d&&M1&&(l.shapeFlag&6?M1[M1.indexOf(n)]=l:M1.push(l)),l.patchFlag=-2,l}if(hh(n)&&(n=n.__vccOpts),a){a=U4(a);let{class:l,style:s}=a;l&&!a1(l)&&(a.class=O1(l)),X(s)&&(X0(s)&&!E(s)&&(s=d1({},s)),a.style=i0(s))}const o=a1(n)?1:Ua(n)?128:h4(n)?64:X(n)?4:P(n)?2:0;return r(n,a,t,h,e,o,d,!0)}function U4(n){return n?X0(n)||Oa(n)?d1({},n):n:null}function f2(n,a,t=!1,h=!1){const{props:e,ref:d,patchFlag:o,children:l,transition:s}=n,m=a?K4(e||{},a):e,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:m,key:m&&Ga(m),ref:a&&a.ref?t&&d?E(d)?d.concat(J2(a)):[d,J2(a)]:J2(a):d,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:a&&n.type!==h1?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:s,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&f2(n.ssContent),ssFallback:n.ssFallback&&f2(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return s&&h&&an(c,s.clone(c)),c}function W4(n=" ",a=0){return C1(m0,null,n,a)}function x1(n="",a=!1){return a?(q(),D4(Y1,null,n)):C1(Y1,null,n)}function z1(n){return n==null||typeof n=="boolean"?C1(Y1):E(n)?C1(h1,null,n.slice()):Ka(n)?K1(n):C1(m0,null,String(n))}function K1(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:f2(n)}function en(n,a){let t=0;const{shapeFlag:h}=n;if(a==null)a=null;else if(E(a))t=16;else if(typeof a=="object")if(h&65){const e=a.default;e&&(e._c&&(e._d=!1),en(n,e()),e._c&&(e._d=!0));return}else{t=32;const e=a._;!e&&!Oa(a)?a._ctx=w1:e===3&&w1&&(w1.slots._===1?a._=1:(a._=2,n.patchFlag|=1024))}else P(a)?(a={default:a,_ctx:w1},t=32):(a=String(a),h&64?(t=16,a=[W4(a)]):t=8);n.children=a,n.shapeFlag|=t}function K4(...n){const a={};for(let t=0;t<n.length;t++){const h=n[t];for(const e in h)if(e==="class")a.class!==h.class&&(a.class=O1([a.class,h.class]));else if(e==="style")a.style=i0([a.style,h.style]);else if(e0(e)){const d=a[e],o=h[e];o&&d!==o&&!(E(d)&&d.includes(o))&&(a[e]=d?[].concat(d,o):o)}else e!==""&&(a[e]=h[e])}return a}function _1(n,a,t,h=null){S1(n,a,7,[t,h])}const G4=qa();let J4=0;function Y4(n,a,t){const h=n.type,e=(a?a.appContext:n.appContext)||G4,d={uid:J4++,vnode:n,type:h,parent:a,appContext:e,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bt(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(e.provides),ids:a?a.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ja(h,e),emitsOptions:Ea(h,e),emit:null,emitted:null,propsDefaults:G,inheritAttrs:h.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return d.ctx={_:d},d.root=a?a.root:d,d.emit=A4.bind(null,d),n.ce&&n.ce(d),d}let i1=null;const Q4=()=>i1||w1;let h0,j0;{const n=l0(),a=(t,h)=>{let e;return(e=n[t])||(e=n[t]=[]),e.push(h),d=>{e.length>1?e.forEach(o=>o(d)):e[0](d)}};h0=a("__VUE_INSTANCE_SETTERS__",t=>i1=t),j0=a("__VUE_SSR_SETTERS__",t=>j2=t)}const I2=n=>{const a=i1;return h0(n),n.scope.on(),()=>{n.scope.off(),h0(a)}},Ln=()=>{i1&&i1.scope.off(),h0(null)};function Ja(n){return n.vnode.shapeFlag&4}let j2=!1;function X4(n,a=!1,t=!1){a&&j0(a);const{props:h,children:e}=n.vnode,d=Ja(n);S4(n,h,d,a),P4(n,e,t||a);const o=d?nh(n,a):void 0;return a&&j0(!1),o}function nh(n,a){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,b4);const{setup:h}=t;if(h){R1();const e=n.setupContext=h.length>1?th(n):null,d=I2(n),o=R2(h,n,0,[n.props,e]),l=Jn(o);if(I1(),d(),(l||n.sp)&&!S2(n)&&Aa(n),l){if(o.then(Ln,Ln),a)return o.then(s=>{zn(n,s)}).catch(s=>{p0(s,n,0)});n.asyncDep=o}else zn(n,o)}else Ya(n)}function zn(n,a,t){P(a)?n.type.__ssrInlineRender?n.ssrRender=a:n.render=a:X(a)&&(n.setupState=xa(a)),Ya(n)}function Ya(n,a,t){const h=n.type;n.render||(n.render=h.render||k1);{const e=I2(n);R1();try{x4(n)}finally{I1(),e()}}}const ah={get(n,a){return t1(n,"get",""),n[a]}};function th(n){const a=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,ah),slots:n.slots,emit:n.emit,expose:a}}function y0(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xa(Zt(n.exposed)),{get(a,t){if(t in a)return a[t];if(t in q2)return q2[t](n)},has(a,t){return t in a||t in q2}})):n.proxy}function hh(n){return P(n)&&"__vccOpts"in n}const eh=(n,a)=>Dt(n,a,j2),dh="3.5.27";let R0;const kn=typeof window!="undefined"&&window.trustedTypes;if(kn)try{R0=kn.createPolicy("vue",{createHTML:n=>n})}catch(n){}const Qa=R0?n=>R0.createHTML(n):n=>n,oh="http://www.w3.org/2000/svg",lh="http://www.w3.org/1998/Math/MathML",P1=typeof document!="undefined"?document:null,Cn=P1&&P1.createElement("template"),ih={insert:(n,a,t)=>{a.insertBefore(n,t||null)},remove:n=>{const a=n.parentNode;a&&a.removeChild(n)},createElement:(n,a,t,h)=>{const e=a==="svg"?P1.createElementNS(oh,n):a==="mathml"?P1.createElementNS(lh,n):t?P1.createElement(n,{is:t}):P1.createElement(n);return n==="select"&&h&&h.multiple!=null&&e.setAttribute("multiple",h.multiple),e},createText:n=>P1.createTextNode(n),createComment:n=>P1.createComment(n),setText:(n,a)=>{n.nodeValue=a},setElementText:(n,a)=>{n.textContent=a},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>P1.querySelector(n),setScopeId(n,a){n.setAttribute(a,"")},insertStaticContent(n,a,t,h,e,d){const o=t?t.previousSibling:a.lastChild;if(e&&(e===d||e.nextSibling))for(;a.insertBefore(e.cloneNode(!0),t),!(e===d||!(e=e.nextSibling)););else{Cn.innerHTML=Qa(h==="svg"?`<svg>${n}</svg>`:h==="mathml"?`<math>${n}</math>`:n);const l=Cn.content;if(h==="svg"||h==="mathml"){const s=l.firstChild;for(;s.firstChild;)l.appendChild(s.firstChild);l.removeChild(s)}a.insertBefore(l,t)}return[o?o.nextSibling:a.firstChild,t?t.previousSibling:a.lastChild]}},sh=Symbol("_vtc");function ph(n,a,t){const h=n[sh];h&&(a=(a?[a,...h]:[...h]).join(" ")),a==null?n.removeAttribute("class"):t?n.setAttribute("class",a):n.className=a}const Sn=Symbol("_vod"),rh=Symbol("_vsh"),ch=Symbol(""),mh=/(?:^|;)\s*display\s*:/;function yh(n,a,t){const h=n.style,e=a1(t);let d=!1;if(t&&!e){if(a)if(a1(a))for(const o of a.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Y2(h,l,"")}else for(const o in a)t[o]==null&&Y2(h,o,"");for(const o in t)o==="display"&&(d=!0),Y2(h,o,t[o])}else if(e){if(a!==t){const o=h[ch];o&&(t+=";"+o),h.cssText=t,d=mh.test(t)}}else a&&n.removeAttribute("style");Sn in n&&(n[Sn]=d?h.display:"",n[rh]&&(h.display="none"))}const qn=/\s*!important$/;function Y2(n,a,t){if(E(t))t.forEach(h=>Y2(n,a,h));else if(t==null&&(t=""),a.startsWith("--"))n.setProperty(a,t);else{const h=Mh(n,a);qn.test(t)?n.setProperty(i2(h),t.replace(qn,""),"important"):n[h]=t}}const En=["Webkit","Moz","ms"],A0={};function Mh(n,a){const t=A0[a];if(t)return t;let h=J1(a);if(h!=="filter"&&h in n)return A0[a]=h;h=Xn(h);for(let e=0;e<En.length;e++){const d=En[e]+h;if(d in n)return A0[a]=d}return a}const Tn="http://www.w3.org/1999/xlink";function Pn(n,a,t,h,e,d=vt(a)){h&&a.startsWith("xlink:")?t==null?n.removeAttributeNS(Tn,a.slice(6,a.length)):n.setAttributeNS(Tn,a,t):t==null||d&&!aa(t)?n.removeAttribute(a):n.setAttribute(a,d?"":Q1(t)?String(t):t)}function On(n,a,t,h,e){if(a==="innerHTML"||a==="textContent"){t!=null&&(n[a]=a==="innerHTML"?Qa(t):t);return}const d=n.tagName;if(a==="value"&&d!=="PROGRESS"&&!d.includes("-")){const l=d==="OPTION"?n.getAttribute("value")||"":n.value,s=t==null?n.type==="checkbox"?"on":"":String(t);(l!==s||!("_value"in n))&&(n.value=s),t==null&&n.removeAttribute(a),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[a];l==="boolean"?t=aa(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[a]=t}catch(l){}o&&n.removeAttribute(e||a)}function M2(n,a,t,h){n.addEventListener(a,t,h)}function vh(n,a,t,h){n.removeEventListener(a,t,h)}const Zn=Symbol("_vei");function bh(n,a,t,h,e=null){const d=n[Zn]||(n[Zn]={}),o=d[a];if(h&&o)o.value=h;else{const[l,s]=xh(a);if(h){const m=d[a]=fh(h,e);M2(n,l,m,s)}else o&&(vh(n,l,o,s),d[a]=void 0)}}const jn=/(?:Once|Passive|Capture)$/;function xh(n){let a;if(jn.test(n)){a={};let h;for(;h=n.match(jn);)n=n.slice(0,n.length-h[0].length),a[h[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):i2(n.slice(2)),a]}let _0=0;const wh=Promise.resolve(),uh=()=>_0||(wh.then(()=>_0=0),_0=Date.now());function fh(n,a){const t=h=>{if(!h._vts)h._vts=Date.now();else if(h._vts<=t.attached)return;S1(Bh(h,t.value),a,5,[h])};return t.value=n,t.attached=uh(),t}function Bh(n,a){if(E(a)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},a.map(h=>e=>!e._stopped&&h&&h(e))}else return a}const Rn=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gh=(n,a,t,h,e,d)=>{const o=e==="svg";a==="class"?ph(n,h,o):a==="style"?yh(n,t,h):e0(a)?F0(a)||bh(n,a,t,h,d):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Hh(n,a,h,o))?(On(n,a,h),!n.tagName.includes("-")&&(a==="value"||a==="checked"||a==="selected")&&Pn(n,a,h,o,d,a!=="value")):n._isVueCE&&(/[A-Z]/.test(a)||!a1(h))?On(n,J1(a),h,d,a):(a==="true-value"?n._trueValue=h:a==="false-value"&&(n._falseValue=h),Pn(n,a,h,o))};function Hh(n,a,t,h){if(h)return!!(a==="innerHTML"||a==="textContent"||a in n&&Rn(a)&&P(t));if(a==="spellcheck"||a==="draggable"||a==="translate"||a==="autocorrect"||a==="sandbox"&&n.tagName==="IFRAME"||a==="form"||a==="list"&&n.tagName==="INPUT"||a==="type"&&n.tagName==="TEXTAREA")return!1;if(a==="width"||a==="height"){const e=n.tagName;if(e==="IMG"||e==="VIDEO"||e==="CANVAS"||e==="SOURCE")return!1}return Rn(a)&&a1(t)?!1:a in n}const In=n=>{const a=n.props["onUpdate:modelValue"]||!1;return E(a)?t=>K2(a,t):a};function Vh(n){n.target.composing=!0}function Fn(n){const a=n.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const L0=Symbol("_assign");function Nn(n,a,t){return a&&(n=n.trim()),t&&(n=$0(n)),n}const Dn={created(n,{modifiers:{lazy:a,trim:t,number:h}},e){n[L0]=In(e);const d=h||e.props&&e.props.type==="number";M2(n,a?"change":"input",o=>{o.target.composing||n[L0](Nn(n.value,t,d))}),(t||d)&&M2(n,"change",()=>{n.value=Nn(n.value,t,d)}),a||(M2(n,"compositionstart",Vh),M2(n,"compositionend",Fn),M2(n,"change",Fn))},mounted(n,{value:a}){n.value=a==null?"":a},beforeUpdate(n,{value:a,oldValue:t,modifiers:{lazy:h,trim:e,number:d}},o){if(n[L0]=In(o),n.composing)return;const l=(d||n.type==="number")&&!/^0\d/.test(n.value)?$0(n.value):n.value,s=a==null?"":a;l!==s&&(document.activeElement===n&&n.type!=="range"&&(h&&a===t||e&&n.value.trim()===s)||(n.value=s))}},Ah=["ctrl","shift","alt","meta"],_h={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,a)=>Ah.some(t=>n[`${t}Key`]&&!a.includes(t))},c2=(n,a)=>{const t=n._withMods||(n._withMods={}),h=a.join(".");return t[h]||(t[h]=((e,...d)=>{for(let o=0;o<a.length;o++){const l=_h[a[o]];if(l&&l(e,a))return}return n(e,...d)}))},Lh=d1({patchProp:gh},ih);let $n;function zh(){return $n||($n=Z4(Lh))}const kh=((...n)=>{const a=zh().createApp(...n),{mount:t}=a;return a.mount=h=>{const e=Sh(h);if(!e)return;const d=a._component;!P(d)&&!d.render&&!d.template&&(d.template=e.innerHTML),e.nodeType===1&&(e.textContent="");const o=t(e,!1,Ch(e));return e instanceof Element&&(e.removeAttribute("v-cloak"),e.setAttribute("data-v-app","")),o},a});function Ch(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sh(n){return a1(n)?document.querySelector(n):n}function qh(n){let a=Object.assign({},n);if(!a.url)throw new Error("[request] options.url is required");a.transformRequest&&(a=a.transformRequest(n)),a.responseType||(a.responseType="json"),a.method||(a.method="GET");let t=a.url,h;if(a.params)if(a.method==="GET"){let e=new URLSearchParams;for(let d in a.params)e.append(d,String(a.params[d]));t=a.url+"?"+e.toString()}else h=JSON.stringify(a.params);return fetch(t,D2({method:a.method||"GET",headers:a.headers,body:h,signal:a.signal},a.credentials?{credentials:a.credentials}:{})).then(e=>{if(a.transformResponse)return a.transformResponse(e,a);if(e.status>=200&&e.status<300)return a.responseType==="json"?e.json():e;{let d=new Error(e.statusText);throw d.response=e,d}}).catch(e=>{if(a.transformError)return a.transformError(e);throw e})}function Eh(n,a){const t=Symbol.for(`frappe-ui.${n}`),h=globalThis;return t in h||(h[t]=a()),h[t]}const Th=Eh("config",()=>({}));function z0(n){var a;return(a=Th[n])!=null?a:null}const Un=Symbol("frappe-ui.onErrorReported");function Wn(n,a){if(a){if(n&&typeof n=="object"){const t=n;if(t[Un])return;t[Un]=!0}a(n)}}function Ph(n){if(!n)return!1;const a=n.split(/[?#]/)[0].replace(/\/+$/,"");return a==="/api/method/login"||a.endsWith("/api/method/login")}function Oh(n){const a=n;return qh(v0(D2({},n),{transformRequest:t=>{if(!t.url)throw new Error("[frappeRequest] options.url is required");let h=z0("requestHeaders")||{};typeof h=="function"&&(h=h());let e=Object.assign({Accept:"application/json","Content-Type":"application/json; charset=utf-8","X-Frappe-Site-Name":window.location.hostname},h,t.headers||{});window.csrf_token&&window.csrf_token!=="{{ csrf_token }}"&&(e["X-Frappe-CSRF-Token"]=window.csrf_token),!t.url.startsWith("/")&&!/^https?:\/\//i.test(t.url)&&(t.url="/api/method/"+t.url);let d=z0("requestBaseUrl"),o=t.credentials;return d&&t.url.startsWith("/")&&(t.url=d.replace(/\/$/,"")+t.url,o=o||"include"),v0(D2({},t),{method:t.method||"POST",headers:e,credentials:o})},transformResponse:(t,h)=>E1(null,null,function*(){let e=h.url;if(t.ok){const d=yield t.json();if(d.docs||Ph(e))return d;if(d.exc)try{console.groupCollapsed(e),console.log(h);let o=JSON.parse(d.exc);for(let l of o)console.log(l);console.groupEnd()}catch(o){console.warn("Error printing debug messages",o)}if(d._server_messages){let o=z0("serverMessagesHandler")||a.onServerMessages||null;o&&o(JSON.parse(d==null?void 0:d._server_messages)||[])}return d.message}else{let d=yield t.text(),o={},l;try{o=JSON.parse(d)}catch(c){}let s=[[h.url,o==null?void 0:o.exc_type,o==null?void 0:o._error_message].filter(Boolean).join(" ")];if(o.exc){l=o.exc;try{l=JSON.parse(l)[0],console.log(l)}catch(c){}}let m=new Error(s.join(`
`));throw m.exc_type=o.exc_type,m.exc=l,m.response=t,m.status=t.status,m.messages=o._server_messages?JSON.parse(o._server_messages):[],o.message!==void 0&&(m.messages=m.messages.concat(o.message)),m.messages=m.messages.map(c=>{try{return JSON.parse(c).message}catch(M){return c}}),m.messages=m.messages.filter(Boolean),m.messages.length||(m.messages=o._error_message?[o._error_message]:["Internal Server Error"]),Wn(m,a.onError),m}}),transformError:t=>{throw Wn(t,a.onError),t}}))}function m2(n,a={},t={}){return Oh({url:n,method:"POST",params:a!=null?a:{},headers:t.headers,onError:h=>{var e;t.onError&&h.response&&t.onError({response:h.response,status:(e=h.status)!=null?e:h.response.status,error:h})}})}const Zh={class:"min-h-screen bg-gray-50 pb-12"},jh={class:"bg-gray-900 text-white shadow-md"},Rh={class:"max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"},Ih={class:"flex items-center space-x-4"},Fh={class:"flex items-center space-x-2 text-sm bg-gray-800 px-3 py-1.5 rounded-full"},Nh={class:"font-medium text-gray-200"},Dh={class:"p-6 max-w-7xl mx-auto space-y-6 mt-2"},$h={key:0,class:"text-sm text-gray-500"},Uh={key:1,class:"space-y-6"},Wh={class:"grid grid-cols-1 md:grid-cols-3 gap-4"},Kh={class:"p-4 bg-white border rounded-lg shadow-sm"},Gh={class:"text-3xl font-bold text-blue-600 mt-2"},Jh={class:"p-4 bg-white border rounded-lg shadow-sm"},Yh={class:"text-3xl font-bold text-amber-600 mt-2"},Qh={class:"bg-white border rounded-lg shadow-sm overflow-hidden"},Xh={class:"min-w-full divide-y divide-gray-200"},ne={class:"bg-white divide-y divide-gray-200"},ae=["onClick"],te={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600"},he={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-600"},ee={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-600"},de={class:"px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600"},oe={class:"px-6 py-4 whitespace-nowrap text-right text-sm"},le=["onClick"],ie={key:0},se={class:"bg-white border rounded-lg shadow-sm overflow-hidden"},pe={class:"min-w-full divide-y divide-gray-200"},re={class:"bg-white divide-y divide-gray-200"},ce=["onClick"],me={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700"},ye={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},Me={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500"},ve={class:"px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"},be={class:"px-6 py-4 whitespace-nowrap text-right text-sm"},xe=["onClick"],we={key:0},ue={class:"bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-200"},fe={key:0,class:"p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-600"},Be=["disabled"],ge={key:0},He={key:1},Ve={class:"mt-4 text-center"},Ae={class:"bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"},_e={class:"px-6 py-4 bg-gray-900 text-white flex justify-between items-center"},Le={class:"text-lg font-bold"},ze={class:"text-xs text-gray-300"},ke={class:"p-6"},Ce={key:0,class:"text-center py-8 text-gray-500"},Se={key:1,class:"space-y-6"},qe={class:"grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border text-sm"},Ee={class:"font-semibold text-gray-900"},Te={class:"font-semibold text-gray-900"},Pe={class:"border rounded-lg overflow-hidden divide-y divide-gray-200 text-sm"},Oe={class:"flex justify-between p-3 bg-white"},Ze={class:"font-medium text-gray-900"},je={class:"flex justify-between p-3 bg-white"},Re={class:"text-gray-600"},Ie={class:"text-red-500 font-medium"},Fe={class:"flex justify-between p-3 bg-white"},Ne={class:"text-gray-600"},De={class:"text-blue-600 font-medium"},$e={class:"flex justify-between p-4 bg-gray-100 font-bold text-base"},Ue={class:"text-green-700"},We={class:"bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"},Ke={class:"px-6 py-4 bg-gray-900 text-white flex justify-between items-center flex-shrink-0"},Ge={class:"text-xl font-bold"},Je={class:"text-xs text-gray-300"},Ye={class:"flex border-b bg-gray-50 px-6 gap-6 text-sm font-semibold flex-shrink-0"},Qe={class:"p-6 overflow-y-auto flex-1"},Xe={key:0,class:"text-center py-12 text-gray-500"},nd={key:1,class:"space-y-6"},ad={key:0,class:"space-y-4"},td={key:0,class:"space-y-3"},hd={class:"flex justify-between items-center mb-3"},ed={class:"font-bold text-gray-900 text-base"},dd={class:"text-xs bg-blue-100 text-blue-900 font-semibold px-2.5 py-1 rounded-full"},od={class:"grid grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-white p-3 rounded-md border"},ld={class:"font-semibold text-gray-800"},id={class:"font-bold text-blue-700 text-sm"},sd={class:"font-semibold text-gray-800"},pd={key:1,class:"text-center py-8 text-gray-500 border-2 border-dashed rounded-lg"},rd={key:1,class:"space-y-4"},cd={key:0,class:"space-y-3"},md={class:"flex justify-between items-start mb-2"},yd={class:"text-xs font-bold text-blue-600 uppercase"},Md={class:"font-bold text-gray-900 text-base"},vd={class:"px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800"},bd={class:"mt-3"},xd={class:"flex justify-between text-xs text-gray-600 mb-1"},wd={class:"font-bold text-gray-900"},ud={class:"w-full bg-gray-200 rounded-full h-2.5"},fd={key:1,class:"text-center py-8 text-gray-500 border-2 border-dashed rounded-lg"},Bd={key:2,class:"space-y-4"},gd={key:0,class:"space-y-3"},Hd={class:"font-bold text-gray-900 text-base"},Vd={class:"text-xs text-gray-500"},Ad={class:"text-right"},_d={class:"text-lg font-bold text-blue-700"},Ld={key:1,class:"text-center py-8 text-gray-500 border-2 border-dashed rounded-lg"},zd={key:3,class:"space-y-4"},kd={key:0,class:"space-y-3"},Cd={class:"flex justify-between items-start"},Sd={class:"text-xs font-bold text-red-600 uppercase"},qd={class:"font-bold text-gray-900 text-base"},Ed={class:"text-xs text-gray-600 mt-1"},Td={class:"px-2 py-1 text-xs font-semibold rounded bg-amber-100 text-amber-800"},Pd={key:1,class:"text-center py-8 text-gray-500 border-2 border-dashed rounded-lg"},Od={__name:"ClientPortalView",setup(n){const a=n1({logged_in:!1,full_name:"Guest User",user:"Guest"}),t=n1(!1),h=n1(""),e=n1(""),d=n1(""),o=n1(!1),l=n1(0),s=n1(0),m=n1([]),c=n1([]),M=n1(!0),_=n1(!1),V=n1(null),O=n1(!1),Z=n1(!1),Q=n1(null),j=n1([]),F=n1([]),K=n1([]),z=n1([]),I=n1("dpr"),v1=n1(!1);za(()=>E1(null,null,function*(){yield s1(),yield b1()}));function s1(){return E1(this,null,function*(){try{let W=yield m2("frappe.auth.get_logged_user");W&&W!=="Guest"?a.value={logged_in:!0,user:W,full_name:W==="Administrator"?"Administrator":W}:a.value={logged_in:!1,full_name:"Guest User",user:"Guest"}}catch(W){console.error("Session check error:",W),a.value={logged_in:!1,full_name:"Guest User",user:"Guest"}}})}function b1(){return E1(this,null,function*(){M.value=!0;try{let W=yield m2("epc.api.get_client_portal_data");W&&(l.value=W.active_projects||0,s.value=W.pending_bills||0,m.value=W.projects_list||[],c.value=W.bills_list||[])}catch(W){console.error("Failed to fetch client portal data:",W)}finally{M.value=!1}})}function s2(){return E1(this,null,function*(){d.value="",o.value=!0;try{(yield m2("login",{usr:h.value,pwd:e.value}))&&(t.value=!1,h.value="",e.value="",yield s1(),yield b1())}catch(W){console.error("Login error:",W),d.value="Invalid Email or Password. Please try again."}finally{o.value=!1}})}function q1(){return E1(this,null,function*(){try{yield m2("logout"),a.value={logged_in:!1,full_name:"Guest User",user:"Guest"},yield s1(),yield b1()}catch(W){console.error("Logout error:",W)}})}function D1(W){return E1(this,null,function*(){_.value=!0,O.value=!0,V.value=null;try{let v=yield m2("epc.api.get_bill_details",{bill_name:W});v&&v.success&&(V.value=v.bill)}catch(v){console.error("Failed to fetch bill details:",v)}finally{O.value=!1}})}function X1(W){return E1(this,null,function*(){Z.value=!0,v1.value=!0,Q.value=null,I.value="dpr";try{let v=yield m2("epc.api.get_project_details",{project_name:W});v&&v.success&&(Q.value=v.project,j.value=v.dpr_list||[],F.value=v.wbs_list||[],K.value=v.boq_list||[],z.value=v.ncr_list||[])}catch(v){console.error("Failed to fetch project details:",v)}finally{v1.value=!1}})}function $1(){_.value=!1,V.value=null}function n2(){Z.value=!1,Q.value=null}return(W,v)=>(q(),T("div",Zh,[r("nav",jh,[r("div",Rh,[v[9]||(v[9]=r("div",{class:"flex items-center space-x-3"},[r("span",{class:"text-2xl"},"⚡"),r("span",{class:"font-bold text-lg tracking-wide"},"EPC Client Portal")],-1)),r("div",Ih,[r("div",Fh,[r("span",{class:O1(["w-2.5 h-2.5 rounded-full",a.value.logged_in?"bg-green-400":"bg-amber-400"])},null,2),r("span",Nh,C(a.value.full_name),1)]),a.value.logged_in?(q(),T("button",{key:1,onClick:q1,class:"px-3 py-1.5 bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white text-xs font-semibold rounded-md transition-colors"}," Logout ")):(q(),T("button",{key:0,onClick:v[0]||(v[0]=B=>t.value=!0),class:"px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md shadow transition-colors"}," Login "))])])]),r("div",Dh,[v[19]||(v[19]=r("div",null,[r("h1",{class:"text-2xl font-bold text-gray-900"},"Project Overview"),r("p",{class:"text-sm text-gray-600"},"Real-time progress, daily reports, and financial status of your engineering projects.")],-1)),M.value?(q(),T("div",$h," Loading live data from backend... ")):(q(),T("div",Uh,[r("div",Wh,[r("div",Kh,[v[10]||(v[10]=r("h3",{class:"text-sm font-medium text-gray-500"},"Active Projects",-1)),r("p",Gh,C(l.value),1)]),r("div",Jh,[v[11]||(v[11]=r("h3",{class:"text-sm font-medium text-gray-500"},"Pending Bills (RA)",-1)),r("p",Yh,C(s.value),1)]),v[12]||(v[12]=r("div",{class:"p-4 bg-white border rounded-lg shadow-sm"},[r("h3",{class:"text-sm font-medium text-gray-500"},"Site DPR Status"),r("p",{class:"text-xl font-bold text-green-600 mt-2"},"Updated Today")],-1))]),r("div",Qh,[v[15]||(v[15]=r("div",{class:"px-6 py-4 border-b bg-gray-50 flex justify-between items-center"},[r("h3",{class:"text-lg font-medium text-gray-900"},"Running Account Bills"),r("span",{class:"text-xs text-gray-500"},"Click row for breakdown")],-1)),r("table",Xh,[v[14]||(v[14]=r("thead",{class:"bg-gray-50"},[r("tr",null,[r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Bill ID"),r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Project"),r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Posting Date"),r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Net Payable"),r("th",{class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1)),r("tbody",ne,[(q(!0),T(h1,null,r2(c.value,B=>(q(),T("tr",{key:B.name,onClick:N=>D1(B.name),class:"hover:bg-blue-50 cursor-pointer transition-colors"},[r("td",te,C(B.name),1),r("td",he,C(B.project),1),r("td",ee,C(B.posting_date),1),r("td",de,"₹"+C((B.net_payable||0).toLocaleString()),1),r("td",oe,[r("button",{onClick:c2(N=>D1(B.name),["stop"]),class:"px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md text-xs font-semibold"}," View Details ",8,le)])],8,ae))),128)),c.value.length===0?(q(),T("tr",ie,[...v[13]||(v[13]=[r("td",{colspan:"5",class:"px-6 py-4 text-center text-sm text-gray-500"},"No running account bills found.",-1)])])):x1("",!0)])])]),r("div",se,[v[18]||(v[18]=r("div",{class:"px-6 py-4 border-b bg-gray-50 flex justify-between items-center"},[r("h3",{class:"text-lg font-medium text-gray-900"},"Recent Active Projects"),r("span",{class:"text-xs text-gray-500"},"Click row for DPR, WBS & Quality")],-1)),r("table",pe,[v[17]||(v[17]=r("thead",{class:"bg-gray-50"},[r("tr",null,[r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Project ID"),r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Project Name"),r("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},"Status"),r("th",{class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"},"Action")])],-1)),r("tbody",re,[(q(!0),T(h1,null,r2(m.value,B=>(q(),T("tr",{key:B.name,onClick:N=>X1(B.name),class:"hover:bg-blue-50 cursor-pointer transition-colors"},[r("td",me,C(B.name),1),r("td",ye,C(B.project_name||B.name),1),r("td",Me,[r("span",ve,C(B.status||"Active"),1)]),r("td",be,[r("button",{onClick:c2(N=>X1(B.name),["stop"]),class:"px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-md text-xs font-semibold"}," View Details ",8,xe)])],8,ce))),128)),m.value.length===0?(q(),T("tr",we,[...v[16]||(v[16]=[r("td",{colspan:"4",class:"px-6 py-4 text-center text-sm text-gray-500"},"No projects found.",-1)])])):x1("",!0)])])])]))]),t.value?(q(),T("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",onClick:v[4]||(v[4]=c2(B=>t.value=!1,["self"]))},[r("div",ue,[v[22]||(v[22]=r("div",{class:"text-center mb-6"},[r("span",{class:"text-3xl"},"🔒"),r("h3",{class:"text-xl font-bold text-gray-900 mt-2"},"Client Portal Login"),r("p",{class:"text-xs text-gray-500 mt-1"},"Enter your Frappe credentials to access your EPC projects.")],-1)),r("form",{onSubmit:c2(s2,["prevent"]),class:"space-y-4"},[r("div",null,[v[20]||(v[20]=r("label",{class:"block text-xs font-medium text-gray-700 mb-1"},"Email / Username",-1)),bn(r("input",{"onUpdate:modelValue":v[1]||(v[1]=B=>h.value=B),type:"text",required:"",placeholder:"e.g. Administrator",class:"w-full px-3 py-2 border rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[Dn,h.value]])]),r("div",null,[v[21]||(v[21]=r("label",{class:"block text-xs font-medium text-gray-700 mb-1"},"Password",-1)),bn(r("input",{"onUpdate:modelValue":v[2]||(v[2]=B=>e.value=B),type:"password",required:"",placeholder:"••••••••",class:"w-full px-3 py-2 border rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"},null,512),[[Dn,e.value]])]),d.value?(q(),T("div",fe,C(d.value),1)):x1("",!0),r("button",{type:"submit",disabled:o.value,class:"w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-md shadow transition-colors flex justify-center items-center cursor-pointer"},[o.value?(q(),T("span",ge,"Signing in...")):(q(),T("span",He,"Sign In"))],8,Be)],32),r("div",Ve,[r("button",{onClick:v[3]||(v[3]=B=>t.value=!1),class:"text-xs text-gray-500 hover:text-gray-800"},"Cancel")])])])):x1("",!0),_.value?(q(),T("div",{key:1,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",onClick:c2($1,["self"])},[r("div",Ae,[r("div",_e,[r("div",null,[r("h3",Le,"Bill Breakdown: "+C(V.value?V.value.name:"Loading..."),1),r("p",ze,"Project: "+C(V.value?V.value.project:""),1)]),r("button",{onClick:$1,class:"text-gray-400 hover:text-white text-2xl font-bold"},"×")]),r("div",ke,[O.value?(q(),T("div",Ce,"Fetching bill details...")):V.value?(q(),T("div",Se,[r("div",qe,[r("div",null,[v[23]||(v[23]=r("span",{class:"text-gray-500"},"Bill Title:",-1)),r("p",Ee,C(V.value.bill_title||"N/A"),1)]),r("div",null,[v[24]||(v[24]=r("span",{class:"text-gray-500"},"Posting Date:",-1)),r("p",Te,C(V.value.posting_date||"N/A"),1)])]),r("div",null,[v[27]||(v[27]=r("h4",{class:"text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide"},"Financial Summary",-1)),r("div",Pe,[r("div",Oe,[v[25]||(v[25]=r("span",{class:"text-gray-600"},"Gross Amount",-1)),r("span",Ze,"₹"+C((V.value.gross_amount||0).toLocaleString()),1)]),r("div",je,[r("span",Re,"Retention ("+C(V.value.retention_percent||0)+"%)",1),r("span",Ie,"- ₹"+C((V.value.retention_amount||0).toLocaleString()),1)]),r("div",Fe,[r("span",Ne,"Tax / GST ("+C(V.value.tax_percent||0)+"%)",1),r("span",De,"+ ₹"+C((V.value.tax_amount||0).toLocaleString()),1)]),r("div",$e,[v[26]||(v[26]=r("span",{class:"text-gray-900"},"Net Payable Amount",-1)),r("span",Ue,"₹"+C((V.value.net_payable||0).toLocaleString()),1)])])])])):x1("",!0)]),r("div",{class:"px-6 py-3 bg-gray-50 border-t flex justify-end"},[r("button",{onClick:$1,class:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"},"Close")])])])):x1("",!0),Z.value?(q(),T("div",{key:2,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",onClick:c2(n2,["self"])},[r("div",We,[r("div",Ke,[r("div",null,[r("h3",Ge,C(Q.value?Q.value.project_name||Q.value.name:"Loading..."),1),r("p",Je,"Project ID: "+C(Q.value?Q.value.name:""),1)]),r("button",{onClick:n2,class:"text-gray-400 hover:text-white text-2xl font-bold"},"×")]),r("div",Ye,[r("button",{onClick:v[5]||(v[5]=B=>I.value="dpr"),class:O1(I.value==="dpr"?"border-b-2 border-blue-600 text-blue-700 py-3":"text-gray-500 hover:text-gray-900 py-3")}," 📋 Site DPR ("+C(j.value.length)+") ",3),r("button",{onClick:v[6]||(v[6]=B=>I.value="wbs"),class:O1(I.value==="wbs"?"border-b-2 border-blue-600 text-blue-700 py-3":"text-gray-500 hover:text-gray-900 py-3")}," 🧱 WBS Milestones ("+C(F.value.length)+") ",3),r("button",{onClick:v[7]||(v[7]=B=>I.value="boq"),class:O1(I.value==="boq"?"border-b-2 border-blue-600 text-blue-700 py-3":"text-gray-500 hover:text-gray-900 py-3")}," 📑 BOQ Estimates ("+C(K.value.length)+") ",3),r("button",{onClick:v[8]||(v[8]=B=>I.value="ncr"),class:O1(I.value==="ncr"?"border-b-2 border-blue-600 text-blue-700 py-3":"text-gray-500 hover:text-gray-900 py-3")}," ⚠️ Quality & NCR ("+C(z.value.length)+") ",3)]),r("div",Qe,[v1.value?(q(),T("div",Xe," Fetching project details... ")):Q.value?(q(),T("div",nd,[I.value==="dpr"?(q(),T("div",ad,[j.value.length>0?(q(),T("div",td,[(q(!0),T(h1,null,r2(j.value,B=>(q(),T("div",{key:B.name,class:"p-4 border rounded-lg bg-blue-50/40 border-blue-100 shadow-sm"},[r("div",hd,[r("span",ed,C(B.name),1),r("span",dd,C(B.report_date),1)]),r("div",od,[r("div",null,[v[28]||(v[28]=r("span",{class:"text-gray-500"},"Weather:",-1)),r("p",ld,C(B.weather||"Normal"),1)]),r("div",null,[v[29]||(v[29]=r("span",{class:"text-gray-500"},"Total Manpower:",-1)),r("p",id,C(B.total_staff||0)+" Persons",1)]),r("div",null,[v[30]||(v[30]=r("span",{class:"text-gray-500"},"Skilled / Unskilled:",-1)),r("p",sd,C(B.skilled_labor||0)+" / "+C(B.unskilled_labor||0),1)]),r("div",null,[v[31]||(v[31]=r("span",{class:"text-gray-500"},"Safety Incident:",-1)),r("p",{class:O1(["font-semibold",B.safety_incident?"text-red-600":"text-green-600"])},C(B.safety_incident?"⚠️ Yes":"✅ None"),3)])])]))),128))])):(q(),T("div",pd," No Daily Progress Reports recorded for this project yet. "))])):x1("",!0),I.value==="wbs"?(q(),T("div",rd,[F.value.length>0?(q(),T("div",cd,[(q(!0),T(h1,null,r2(F.value,B=>(q(),T("div",{key:B.name,class:"p-4 border rounded-lg bg-white shadow-sm"},[r("div",md,[r("div",null,[r("span",yd,C(B.discipline||"General")+" ("+C(B.wbs_code)+")",1),r("h4",Md,C(B.activity_name),1)]),r("span",vd,C(B.status),1)]),r("div",bd,[r("div",xd,[v[32]||(v[32]=r("span",null,"Progress",-1)),r("span",wd,C(B.progress_percent||0)+"%",1)]),r("div",ud,[r("div",{class:"bg-blue-600 h-2.5 rounded-full",style:i0({width:(B.progress_percent||0)+"%"})},null,4)])])]))),128))])):(q(),T("div",fd," No WBS elements configured for this project. "))])):x1("",!0),I.value==="boq"?(q(),T("div",Bd,[K.value.length>0?(q(),T("div",gd,[(q(!0),T(h1,null,r2(K.value,B=>(q(),T("div",{key:B.name,class:"p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center"},[r("div",null,[r("h4",Hd,C(B.boq_title),1),r("p",Vd,C(B.name)+" | Rev: "+C(B.revision_no),1)]),r("div",Ad,[v[33]||(v[33]=r("span",{class:"text-xs text-gray-500 block"},"Total Estimate",-1)),r("span",_d,"₹"+C((B.total_amount||0).toLocaleString()),1)])]))),128))])):(q(),T("div",Ld," No BOQ estimates available. "))])):x1("",!0),I.value==="ncr"?(q(),T("div",zd,[z.value.length>0?(q(),T("div",kd,[(q(!0),T(h1,null,r2(z.value,B=>(q(),T("div",{key:B.name,class:"p-4 border border-red-200 rounded-lg bg-red-50/40 shadow-sm"},[r("div",Cd,[r("div",null,[r("span",Sd,C(B.severity||"NCR"),1),r("h4",qd,C(B.name),1),r("p",Ed,"Target Closure: "+C(B.target_closure_date||"Pending"),1)]),r("span",Td,C(B.select||"Active"),1)])]))),128))])):(q(),T("div",Pd," No active Non-Conformance Reports. Site quality standards are met! 🎉 "))])):x1("",!0)])):x1("",!0)]),r("div",{class:"px-6 py-3 bg-gray-50 border-t flex justify-end flex-shrink-0"},[r("button",{onClick:n2,class:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"},"Close")])])])):x1("",!0)]))}},Zd={class:"min-h-screen bg-gray-50"},jd={__name:"App",setup(n){return(a,t)=>(q(),T("main",Zd,[C1(Od)]))}},Rd=`<?xml version="1.0" encoding="utf-8"?>
<!-- @license lucide-static v1.31.0 - ISC -->
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <symbol id="a-arrow-down" viewBox="0 0 24 24">
      <path d="m14 12 4 4 4-4" />
      <path d="M18 16V7" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="a-arrow-up" viewBox="0 0 24 24">
      <path d="m14 11 4-4 4 4" />
      <path d="M18 16V7" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="a-large-small" viewBox="0 0 24 24">
      <path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" />
      <path d="M15.697 14h5.606" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="accessibility" viewBox="0 0 24 24">
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </symbol>
    <symbol id="activity" viewBox="0 0 24 24">
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </symbol>
    <symbol id="ad" viewBox="0 0 24 24">
      <path d="M10 13H6" />
      <path d="M10 15v-4a2 2 0 0 0-4 0v4" />
      <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="air-vent" viewBox="0 0 24 24">
      <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
    </symbol>
    <symbol id="airplay" viewBox="0 0 24 24">
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
    </symbol>
    <symbol id="alarm-clock-check" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <path d="m9 13 2 2 4-4" />
    </symbol>
    <symbol id="alarm-clock-minus" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <path d="M9 13h6" />
    </symbol>
    <symbol id="alarm-clock-off" viewBox="0 0 24 24">
      <path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
      <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
      <path d="m22 6-3-3" />
      <path d="M6.26 18.67 4 21" />
      <path d="m2 2 20 20" />
      <path d="M4 4 2 6" />
    </symbol>
    <symbol id="alarm-clock-plus" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
      <path d="M12 10v6" />
      <path d="M9 13h6" />
    </symbol>
    <symbol id="alarm-clock" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </symbol>
    <symbol id="alarm-smoke" viewBox="0 0 24 24">
      <path d="M11 21c0-2.5 2-2.5 2-5" />
      <path d="M16 21c0-2.5 2-2.5 2-5" />
      <path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
      <path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
      <path d="M6 21c0-2.5 2-2.5 2-5" />
    </symbol>
    <symbol id="album" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <polyline points="11 3 11 11 14 8 17 11 17 3" />
    </symbol>
    <symbol id="align-center-horizontal" viewBox="0 0 24 24">
      <path d="M2 12h20" />
      <path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="align-center-vertical" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" />
      <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" />
      <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" />
      <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
    </symbol>
    <symbol id="align-end-horizontal" viewBox="0 0 24 24">
      <rect width="6" height="16" x="4" y="2" rx="2" />
      <rect width="6" height="9" x="14" y="9" rx="2" />
      <path d="M22 22H2" />
    </symbol>
    <symbol id="align-end-vertical" viewBox="0 0 24 24">
      <rect width="16" height="6" x="2" y="4" rx="2" />
      <rect width="9" height="6" x="9" y="14" rx="2" />
      <path d="M22 22V2" />
    </symbol>
    <symbol id="align-horizontal-distribute-center" viewBox="0 0 24 24">
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M17 22v-5" />
      <path d="M17 7V2" />
      <path d="M7 22v-3" />
      <path d="M7 5V2" />
    </symbol>
    <symbol id="align-horizontal-distribute-end" viewBox="0 0 24 24">
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M10 2v20" />
      <path d="M20 2v20" />
    </symbol>
    <symbol id="align-horizontal-distribute-start" viewBox="0 0 24 24">
      <rect width="6" height="14" x="4" y="5" rx="2" />
      <rect width="6" height="10" x="14" y="7" rx="2" />
      <path d="M4 2v20" />
      <path d="M14 2v20" />
    </symbol>
    <symbol id="align-horizontal-justify-center" viewBox="0 0 24 24">
      <rect width="6" height="14" x="2" y="5" rx="2" />
      <rect width="6" height="10" x="16" y="7" rx="2" />
      <path d="M12 2v20" />
    </symbol>
    <symbol id="align-horizontal-justify-end" viewBox="0 0 24 24">
      <rect width="6" height="14" x="2" y="5" rx="2" />
      <rect width="6" height="10" x="12" y="7" rx="2" />
      <path d="M22 2v20" />
    </symbol>
    <symbol id="align-horizontal-justify-start" viewBox="0 0 24 24">
      <rect width="6" height="14" x="6" y="5" rx="2" />
      <rect width="6" height="10" x="16" y="7" rx="2" />
      <path d="M2 2v20" />
    </symbol>
    <symbol id="align-horizontal-space-around" viewBox="0 0 24 24">
      <rect width="6" height="10" x="9" y="7" rx="2" />
      <path d="M4 22V2" />
      <path d="M20 22V2" />
    </symbol>
    <symbol id="align-horizontal-space-between" viewBox="0 0 24 24">
      <rect width="6" height="14" x="3" y="5" rx="2" />
      <rect width="6" height="10" x="15" y="7" rx="2" />
      <path d="M3 2v20" />
      <path d="M21 2v20" />
    </symbol>
    <symbol id="align-start-horizontal" viewBox="0 0 24 24">
      <rect width="6" height="16" x="4" y="6" rx="2" />
      <rect width="6" height="9" x="14" y="6" rx="2" />
      <path d="M22 2H2" />
    </symbol>
    <symbol id="align-start-vertical" viewBox="0 0 24 24">
      <rect width="9" height="6" x="6" y="14" rx="2" />
      <rect width="16" height="6" x="6" y="4" rx="2" />
      <path d="M2 2v20" />
    </symbol>
    <symbol id="align-vertical-distribute-center" viewBox="0 0 24 24">
      <path d="M22 17h-3" />
      <path d="M22 7h-5" />
      <path d="M5 17H2" />
      <path d="M7 7H2" />
      <rect x="5" y="14" width="14" height="6" rx="2" />
      <rect x="7" y="4" width="10" height="6" rx="2" />
    </symbol>
    <symbol id="align-vertical-distribute-end" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="14" rx="2" />
      <rect width="10" height="6" x="7" y="4" rx="2" />
      <path d="M2 20h20" />
      <path d="M2 10h20" />
    </symbol>
    <symbol id="align-vertical-distribute-start" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="14" rx="2" />
      <rect width="10" height="6" x="7" y="4" rx="2" />
      <path d="M2 14h20" />
      <path d="M2 4h20" />
    </symbol>
    <symbol id="align-vertical-justify-center" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="16" rx="2" />
      <rect width="10" height="6" x="7" y="2" rx="2" />
      <path d="M2 12h20" />
    </symbol>
    <symbol id="align-vertical-justify-end" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="12" rx="2" />
      <rect width="10" height="6" x="7" y="2" rx="2" />
      <path d="M2 22h20" />
    </symbol>
    <symbol id="align-vertical-justify-start" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="16" rx="2" />
      <rect width="10" height="6" x="7" y="6" rx="2" />
      <path d="M2 2h20" />
    </symbol>
    <symbol id="align-vertical-space-around" viewBox="0 0 24 24">
      <rect width="10" height="6" x="7" y="9" rx="2" />
      <path d="M22 20H2" />
      <path d="M22 4H2" />
    </symbol>
    <symbol id="align-vertical-space-between" viewBox="0 0 24 24">
      <rect width="14" height="6" x="5" y="15" rx="2" />
      <rect width="10" height="6" x="7" y="3" rx="2" />
      <path d="M2 21h20" />
      <path d="M2 3h20" />
    </symbol>
    <symbol id="ambulance" viewBox="0 0 24 24">
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18h6" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </symbol>
    <symbol id="ampersand" viewBox="0 0 24 24">
      <path d="M16 12h3" />
      <path d="M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" />
    </symbol>
    <symbol id="ampersands" viewBox="0 0 24 24">
      <path d="M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
      <path d="M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" />
    </symbol>
    <symbol id="amphora" viewBox="0 0 24 24">
      <path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
      <path d="M10 5H8a2 2 0 0 0 0 4h.68" />
      <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
      <path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
      <path d="M18 22H6" />
      <path d="M9 2h6" />
    </symbol>
    <symbol id="anchor" viewBox="0 0 24 24">
      <path d="M12 6v16" />
      <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" />
      <path d="M9 11h6" />
      <circle cx="12" cy="4" r="2" />
    </symbol>
    <symbol id="angle" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M3 11a10 10 0 0 1 10 10" />
    </symbol>
    <symbol id="antenna" viewBox="0 0 24 24">
      <path d="M2 12 7 2" />
      <path d="m7 12 5-10" />
      <path d="m12 12 5-10" />
      <path d="m17 12 5-10" />
      <path d="M4.5 7h15" />
      <path d="M12 16v6" />
    </symbol>
    <symbol id="anvil" viewBox="0 0 24 24">
      <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
      <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
    </symbol>
    <symbol id="aperture" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m14.31 8 5.74 9.94" />
      <path d="M9.69 8h11.48" />
      <path d="m7.38 12 5.74-9.94" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="m16.62 12-5.74 9.94" />
    </symbol>
    <symbol id="app-window-mac" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </symbol>
    <symbol id="app-window" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </symbol>
    <symbol id="apple" viewBox="0 0 24 24">
      <path d="M12 6.528V3a1 1 0 0 1 1-1h0" />
      <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" />
    </symbol>
    <symbol id="archive-restore" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h2" />
      <path d="M20 8v11a2 2 0 0 1-2 2h-2" />
      <path d="m9 15 3-3 3 3" />
      <path d="M12 12v9" />
    </symbol>
    <symbol id="archive-x" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="m9.5 17 5-5" />
      <path d="m9.5 12 5 5" />
    </symbol>
    <symbol id="archive" viewBox="0 0 24 24">
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </symbol>
    <symbol id="armchair" viewBox="0 0 24 24">
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
      <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </symbol>
    <symbol id="arrow-big-down-dash" viewBox="0 0 24 24">
      <path d="M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z" />
      <path d="M9 4h6" />
    </symbol>
    <symbol id="arrow-big-down" viewBox="0 0 24 24">
      <path d="M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="arrow-big-left-dash" viewBox="0 0 24 24">
      <path d="M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
      <path d="M20 9v6" />
    </symbol>
    <symbol id="arrow-big-left" viewBox="0 0 24 24">
      <path d="M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z" />
    </symbol>
    <symbol id="arrow-big-right-dash" viewBox="0 0 24 24">
      <path d="M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <path d="M4 9v6" />
    </symbol>
    <symbol id="arrow-big-right" viewBox="0 0 24 24">
      <path d="M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z" />
    </symbol>
    <symbol id="arrow-big-up-dash" viewBox="0 0 24 24">
      <path d="M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z" />
      <path d="M9 20h6" />
    </symbol>
    <symbol id="arrow-big-up" viewBox="0 0 24 24">
      <path d="M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z" />
    </symbol>
    <symbol id="arrow-down-0-1" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <rect x="15" y="4" width="4" height="6" ry="2" />
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
    </symbol>
    <symbol id="arrow-down-1-0" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M17 10V4h-2" />
      <path d="M15 10h4" />
      <rect x="15" y="14" width="4" height="6" ry="2" />
    </symbol>
    <symbol id="arrow-down-a-z" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M20 8h-5" />
      <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
      <path d="M15 14h5l-5 6h5" />
    </symbol>
    <symbol id="arrow-down-from-line" viewBox="0 0 24 24">
      <path d="M19 3H5" />
      <path d="M12 21V7" />
      <path d="m6 15 6 6 6-6" />
    </symbol>
    <symbol id="arrow-down-left" viewBox="0 0 24 24">
      <path d="M17 7 7 17" />
      <path d="M17 17H7V7" />
    </symbol>
    <symbol id="arrow-down-narrow-wide" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h4" />
      <path d="M11 8h7" />
      <path d="M11 12h10" />
    </symbol>
    <symbol id="arrow-down-right" viewBox="0 0 24 24">
      <path d="m7 7 10 10" />
      <path d="M17 7v10H7" />
    </symbol>
    <symbol id="arrow-down-to-dot" viewBox="0 0 24 24">
      <path d="M12 2v14" />
      <path d="m19 9-7 7-7-7" />
      <circle cx="12" cy="21" r="1" />
    </symbol>
    <symbol id="arrow-down-to-line" viewBox="0 0 24 24">
      <path d="M12 17V3" />
      <path d="m6 11 6 6 6-6" />
      <path d="M19 21H5" />
    </symbol>
    <symbol id="arrow-down-up" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="m21 8-4-4-4 4" />
      <path d="M17 4v16" />
    </symbol>
    <symbol id="arrow-down-wide-narrow" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 20V4" />
      <path d="M11 4h10" />
      <path d="M11 8h7" />
      <path d="M11 12h4" />
    </symbol>
    <symbol id="arrow-down-z-a" viewBox="0 0 24 24">
      <path d="m3 16 4 4 4-4" />
      <path d="M7 4v16" />
      <path d="M15 4h5l-5 6h5" />
      <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
      <path d="M20 18h-5" />
    </symbol>
    <symbol id="arrow-down" viewBox="0 0 24 24">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </symbol>
    <symbol id="arrow-left-from-line" viewBox="0 0 24 24">
      <path d="m9 6-6 6 6 6" />
      <path d="M3 12h14" />
      <path d="M21 19V5" />
    </symbol>
    <symbol id="arrow-left-right" viewBox="0 0 24 24">
      <path d="M8 3 4 7l4 4" />
      <path d="M4 7h16" />
      <path d="m16 21 4-4-4-4" />
      <path d="M20 17H4" />
    </symbol>
    <symbol id="arrow-left-to-line" viewBox="0 0 24 24">
      <path d="M3 19V5" />
      <path d="m13 6-6 6 6 6" />
      <path d="M7 12h14" />
    </symbol>
    <symbol id="arrow-left" viewBox="0 0 24 24">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </symbol>
    <symbol id="arrow-right-from-line" viewBox="0 0 24 24">
      <path d="M3 5v14" />
      <path d="M21 12H7" />
      <path d="m15 18 6-6-6-6" />
    </symbol>
    <symbol id="arrow-right-left" viewBox="0 0 24 24">
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </symbol>
    <symbol id="arrow-right-to-line" viewBox="0 0 24 24">
      <path d="M17 12H3" />
      <path d="m11 18 6-6-6-6" />
      <path d="M21 5v14" />
    </symbol>
    <symbol id="arrow-right" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </symbol>
    <symbol id="arrow-up-0-1" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <rect x="15" y="4" width="4" height="6" ry="2" />
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
    </symbol>
    <symbol id="arrow-up-1-0" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M17 10V4h-2" />
      <path d="M15 10h4" />
      <rect x="15" y="14" width="4" height="6" ry="2" />
    </symbol>
    <symbol id="arrow-up-a-z" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M20 8h-5" />
      <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
      <path d="M15 14h5l-5 6h5" />
    </symbol>
    <symbol id="arrow-up-down" viewBox="0 0 24 24">
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </symbol>
    <symbol id="arrow-up-from-dot" viewBox="0 0 24 24">
      <path d="m5 9 7-7 7 7" />
      <path d="M12 16V2" />
      <circle cx="12" cy="21" r="1" />
    </symbol>
    <symbol id="arrow-up-from-line" viewBox="0 0 24 24">
      <path d="m18 9-6-6-6 6" />
      <path d="M12 3v14" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="arrow-up-left" viewBox="0 0 24 24">
      <path d="M7 17V7h10" />
      <path d="M17 17 7 7" />
    </symbol>
    <symbol id="arrow-up-narrow-wide" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M11 12h4" />
      <path d="M11 16h7" />
      <path d="M11 20h10" />
    </symbol>
    <symbol id="arrow-up-right" viewBox="0 0 24 24">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </symbol>
    <symbol id="arrow-up-to-line" viewBox="0 0 24 24">
      <path d="M5 3h14" />
      <path d="m18 13-6-6-6 6" />
      <path d="M12 7v14" />
    </symbol>
    <symbol id="arrow-up-wide-narrow" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M11 12h10" />
      <path d="M11 16h7" />
      <path d="M11 20h4" />
    </symbol>
    <symbol id="arrow-up-z-a" viewBox="0 0 24 24">
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <path d="M15 4h5l-5 6h5" />
      <path d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
      <path d="M20 18h-5" />
    </symbol>
    <symbol id="arrow-up" viewBox="0 0 24 24">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </symbol>
    <symbol id="arrows-up-from-line" viewBox="0 0 24 24">
      <path d="m4 6 3-3 3 3" />
      <path d="M7 17V3" />
      <path d="m14 6 3-3 3 3" />
      <path d="M17 17V3" />
      <path d="M4 21h16" />
    </symbol>
    <symbol id="asterisk" viewBox="0 0 24 24">
      <path d="M12 6v12" />
      <path d="M17.196 9 6.804 15" />
      <path d="m6.804 9 10.392 6" />
    </symbol>
    <symbol id="astroid" viewBox="0 0 24 24">
      <path d="M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203" />
    </symbol>
    <symbol id="at-sign" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </symbol>
    <symbol id="atom" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </symbol>
    <symbol id="audio-lines-x" viewBox="0 0 24 24">
      <path d="M10 3v18" />
      <path d="M14 8v6.35" />
      <path d="m17 17 5 5" />
      <path d="M18 5v8.1" />
      <path d="M2 10v3" />
      <path d="M22 10v3" />
      <path d="m22 17-5 5" />
      <path d="M6 6v11" />
    </symbol>
    <symbol id="audio-lines" viewBox="0 0 24 24">
      <path d="M2 10v3" />
      <path d="M6 6v11" />
      <path d="M10 3v18" />
      <path d="M14 8v7" />
      <path d="M18 5v13" />
      <path d="M22 10v3" />
    </symbol>
    <symbol id="audio-waveform" viewBox="0 0 24 24">
      <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
    </symbol>
    <symbol id="award" viewBox="0 0 24 24">
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </symbol>
    <symbol id="axe" viewBox="0 0 24 24">
      <path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" />
      <path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" />
    </symbol>
    <symbol id="axis-3d" viewBox="0 0 24 24">
      <path d="M13.5 10.5 15 9" />
      <path d="M4 4v15a1 1 0 0 0 1 1h15" />
      <path d="M4.293 19.707 6 18" />
      <path d="m9 15 1.5-1.5" />
    </symbol>
    <symbol id="baby" viewBox="0 0 24 24">
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M15 12h.01" />
      <path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      <path d="M9 12h.01" />
    </symbol>
    <symbol id="backpack" viewBox="0 0 24 24">
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
      <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="badge-alert" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </symbol>
    <symbol id="badge-cent" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M12 7v10" />
      <path d="M15.4 10a4 4 0 1 0 0 4" />
    </symbol>
    <symbol id="badge-check" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="badge-dollar-sign" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </symbol>
    <symbol id="badge-euro" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M7 12h5" />
      <path d="M15 9.4a4 4 0 1 0 0 5.2" />
    </symbol>
    <symbol id="badge-indian-rupee" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="m13 17-5-1h1a4 4 0 0 0 0-8" />
    </symbol>
    <symbol id="badge-info" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="16" y2="12" />
      <line x1="12" x2="12.01" y1="8" y2="8" />
    </symbol>
    <symbol id="badge-japanese-yen" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 8 3 3v7" />
      <path d="m12 11 3-3" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </symbol>
    <symbol id="badge-minus" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </symbol>
    <symbol id="badge-percent" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="badge-plus" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="16" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </symbol>
    <symbol id="badge-pound-sterling" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M8 12h4" />
      <path d="M10 16V9.5a2.5 2.5 0 0 1 5 0" />
      <path d="M8 16h7" />
    </symbol>
    <symbol id="badge-question-mark" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </symbol>
    <symbol id="badge-russian-ruble" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M9 16h5" />
      <path d="M9 12h5a2 2 0 1 0 0-4h-3v9" />
    </symbol>
    <symbol id="badge-swiss-franc" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="M11 17V8h4" />
      <path d="M11 12h3" />
      <path d="M9 16h4" />
    </symbol>
    <symbol id="badge-turkish-lira" viewBox="0 0 24 24">
      <path d="M11 7v10a5 5 0 0 0 5-5" />
      <path d="m15 8-6 3" />
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76" />
    </symbol>
    <symbol id="badge-x" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
    </symbol>
    <symbol id="badge" viewBox="0 0 24 24">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </symbol>
    <symbol id="baggage-claim" viewBox="0 0 24 24">
      <path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
      <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
      <rect width="13" height="8" x="8" y="6" rx="1" />
      <circle cx="18" cy="20" r="2" />
      <circle cx="9" cy="20" r="2" />
    </symbol>
    <symbol id="balloon" viewBox="0 0 24 24">
      <path d="M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" />
      <path d="M12 6a2 2 0 0 1 2 2" />
      <path d="M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" />
    </symbol>
    <symbol id="ban" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M4.929 4.929 19.07 19.071" />
    </symbol>
    <symbol id="banana" viewBox="0 0 24 24">
      <path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
      <path d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
    </symbol>
    <symbol id="bandage" viewBox="0 0 24 24">
      <path d="M10 10.01h.01" />
      <path d="M10 14.01h.01" />
      <path d="M14 10.01h.01" />
      <path d="M14 14.01h.01" />
      <path d="M18 6v12" />
      <path d="M6 6v12" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
    </symbol>
    <symbol id="banknote-arrow-down" viewBox="0 0 24 24">
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="m16 19 3 3 3-3" />
      <path d="M18 12h.01" />
      <path d="M19 16v6" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote-arrow-up" viewBox="0 0 24 24">
      <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="M18 12h.01" />
      <path d="M19 22v-6" />
      <path d="m22 19-3-3-3 3" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote-check" viewBox="0 0 24 24">
      <path d="M11.748 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4.875" />
      <path d="m16 19 2 2 4-4" />
      <path d="M18 12h.01" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote-x" viewBox="0 0 24 24">
      <path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
      <path d="m17 17 5 5" />
      <path d="M18 12h.01" />
      <path d="m22 17-5 5" />
      <path d="M6 12h.01" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="banknote" viewBox="0 0 24 24">
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </symbol>
    <symbol id="barcode" viewBox="0 0 24 24">
      <path d="M3 5v14" />
      <path d="M8 5v14" />
      <path d="M12 5v14" />
      <path d="M17 5v14" />
      <path d="M21 5v14" />
    </symbol>
    <symbol id="barrel" viewBox="0 0 24 24">
      <path d="M10 3a41 41 0 000 18" />
      <path d="M14 3a41 41 0 010 18" />
      <path d="M16.997 21a2 2 0 001.68-.92 15.25 15.25 0 000-16.16 2 2 0 00-1.68-.92h-10a2 2 0 00-1.681.92 15.25 15.25 0 000 16.16 2 2 0 001.681.92z" />
      <path d="M3.54 16h16.914" />
      <path d="M3.54 8h16.914" />
    </symbol>
    <symbol id="baseline" viewBox="0 0 24 24">
      <path d="M4 20h16" />
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="bath" viewBox="0 0 24 24">
      <path d="M10 4 8 6" />
      <path d="M17 19v2" />
      <path d="M2 12h20" />
      <path d="M7 19v2" />
      <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
    </symbol>
    <symbol id="battery-charging" viewBox="0 0 24 24">
      <path d="m11 7-3 5h4l-3 5" />
      <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
      <path d="M22 14v-4" />
      <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
    </symbol>
    <symbol id="battery-full" viewBox="0 0 24 24">
      <path d="M10 10v4" />
      <path d="M14 10v4" />
      <path d="M22 14v-4" />
      <path d="M6 10v4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="battery-low" viewBox="0 0 24 24">
      <path d="M22 14v-4" />
      <path d="M6 14v-4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="battery-medium" viewBox="0 0 24 24">
      <path d="M10 14v-4" />
      <path d="M22 14v-4" />
      <path d="M6 14v-4" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="battery-plus" viewBox="0 0 24 24">
      <path d="M10 9v6" />
      <path d="M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" />
      <path d="M22 14v-4" />
      <path d="M7 12h6" />
      <path d="M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" />
    </symbol>
    <symbol id="battery-warning" viewBox="0 0 24 24">
      <path d="M10 17h.01" />
      <path d="M10 7v6" />
      <path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
      <path d="M22 14v-4" />
      <path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
    </symbol>
    <symbol id="battery" viewBox="0 0 24 24">
      <path d="M 22 14 L 22 10" />
      <rect x="2" y="6" width="16" height="12" rx="2" />
    </symbol>
    <symbol id="beaker" viewBox="0 0 24 24">
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </symbol>
    <symbol id="bean-off" viewBox="0 0 24 24">
      <path d="M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" />
      <path d="M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" />
      <path d="M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="bean" viewBox="0 0 24 24">
      <path d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" />
      <path d="M5.341 10.62a4 4 0 1 0 5.279-5.28" />
    </symbol>
    <symbol id="bed-double" viewBox="0 0 24 24">
      <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
      <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M12 4v6" />
      <path d="M2 18h20" />
    </symbol>
    <symbol id="bed-single" viewBox="0 0 24 24">
      <path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
      <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3 18h18" />
    </symbol>
    <symbol id="bed" viewBox="0 0 24 24">
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </symbol>
    <symbol id="beef-off" viewBox="0 0 24 24">
      <path d="M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12" />
      <path d="M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04" />
      <path d="M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393" />
      <path d="m2 2 20 20" />
      <path d="M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151" />
    </symbol>
    <symbol id="beef" viewBox="0 0 24 24">
      <path d="M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
      <circle cx="12.5" cy="8.5" r="2.5" />
    </symbol>
    <symbol id="beer-off" viewBox="0 0 24 24">
      <path d="M13 13v5" />
      <path d="M17 11.47V8" />
      <path d="M17 11h1a3 3 0 0 1 2.745 4.211" />
      <path d="m2 2 20 20" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" />
      <path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" />
      <path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" />
      <path d="M9 14.6V18" />
    </symbol>
    <symbol id="beer" viewBox="0 0 24 24">
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M9 12v6" />
      <path d="M13 12v6" />
      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </symbol>
    <symbol id="bell-check" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="m15 8 2 2 4-4" />
      <path d="M16.8607 4.4824A6 6 0 0 0 6 8C6 12.499 4.589 13.956 3.262 15.326" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17H20A1 1 0 0 0 20.74 15.327C20.209 14.779 19.665 14.218 19.203 13.454" />
    </symbol>
    <symbol id="bell-dot" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" />
      <circle cx="18" cy="5" r="3" />
    </symbol>
    <symbol id="bell-electric" viewBox="0 0 24 24">
      <path d="M18.518 17.347A7 7 0 0 1 14 19" />
      <path d="M18.8 4A11 11 0 0 1 20 9" />
      <path d="M9 9h.01" />
      <circle cx="20" cy="16" r="2" />
      <circle cx="9" cy="9" r="7" />
      <rect x="4" y="16" width="10" height="6" rx="2" />
    </symbol>
    <symbol id="bell-minus" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M15 8h6" />
      <path d="M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" />
    </symbol>
    <symbol id="bell-off" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
      <path d="m2 2 20 20" />
      <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
    </symbol>
    <symbol id="bell-plus" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M15 8h6" />
      <path d="M18 5v6" />
      <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" />
    </symbol>
    <symbol id="bell-ring" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M22 8c0-2.3-.8-4.3-2-6" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
    </symbol>
    <symbol id="bell" viewBox="0 0 24 24">
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </symbol>
    <symbol id="between-horizontal-end" viewBox="0 0 24 24">
      <rect width="13" height="7" x="3" y="3" rx="1" />
      <path d="m22 15-3-3 3-3" />
      <rect width="13" height="7" x="3" y="14" rx="1" />
    </symbol>
    <symbol id="between-horizontal-start" viewBox="0 0 24 24">
      <rect width="13" height="7" x="8" y="3" rx="1" />
      <path d="m2 9 3 3-3 3" />
      <rect width="13" height="7" x="8" y="14" rx="1" />
    </symbol>
    <symbol id="between-vertical-end" viewBox="0 0 24 24">
      <rect width="7" height="13" x="3" y="3" rx="1" />
      <path d="m9 22 3-3 3 3" />
      <rect width="7" height="13" x="14" y="3" rx="1" />
    </symbol>
    <symbol id="between-vertical-start" viewBox="0 0 24 24">
      <rect width="7" height="13" x="3" y="8" rx="1" />
      <path d="m15 2-3 3-3-3" />
      <rect width="7" height="13" x="14" y="8" rx="1" />
    </symbol>
    <symbol id="biceps-flexed" viewBox="0 0 24 24">
      <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
      <path d="M15 14a5 5 0 0 0-7.584 2" />
      <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
    </symbol>
    <symbol id="bike" viewBox="0 0 24 24">
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </symbol>
    <symbol id="binary" viewBox="0 0 24 24">
      <rect x="14" y="14" width="4" height="6" rx="2" />
      <rect x="6" y="4" width="4" height="6" rx="2" />
      <path d="M6 20h4" />
      <path d="M14 10h4" />
      <path d="M6 14h2v6" />
      <path d="M14 4h2v6" />
    </symbol>
    <symbol id="binoculars" viewBox="0 0 24 24">
      <path d="M10 10h4" />
      <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
      <path d="M 22 16 L 2 16" />
      <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
      <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="biohazard" viewBox="0 0 24 24">
      <circle cx="12" cy="11.9" r="2" />
      <path d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
      <path d="m8.9 10.1 1.4.8" />
      <path d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
      <path d="m15.1 10.1-1.4.8" />
      <path d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
      <path d="M12 13.9v1.6" />
      <path d="M13.5 5.4c-1-.2-2-.2-3 0" />
      <path d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
      <path d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
    </symbol>
    <symbol id="bird" viewBox="0 0 24 24">
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </symbol>
    <symbol id="birdhouse" viewBox="0 0 24 24">
      <path d="M12 18v4" />
      <path d="m17 18 1.956-11.468" />
      <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
      <path d="M4 18h16" />
      <path d="M7 18 5.044 6.532" />
      <circle cx="12" cy="10" r="2" />
    </symbol>
    <symbol id="bitcoin" viewBox="0 0 24 24">
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </symbol>
    <symbol id="blend" viewBox="0 0 24 24">
      <circle cx="9" cy="9" r="7" />
      <circle cx="15" cy="15" r="7" />
    </symbol>
    <symbol id="blender" viewBox="0 0 24 24">
      <path d="M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z" />
      <path d="m17 2-1 12" />
      <path d="M8.006 14 7 2" />
      <path d="M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75" />
      <path d="M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5" />
      <path d="M12 18h.01" />
    </symbol>
    <symbol id="blinds" viewBox="0 0 24 24">
      <path d="M3 3h18" />
      <path d="M20 7H8" />
      <path d="M20 11H8" />
      <path d="M10 19h10" />
      <path d="M8 15h12" />
      <path d="M4 3v14" />
      <circle cx="4" cy="19" r="2" />
    </symbol>
    <symbol id="blocks" viewBox="0 0 24 24">
      <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
      <rect x="14" y="2" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="bluetooth-connected" viewBox="0 0 24 24">
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <line x1="18" x2="21" y1="12" y2="12" />
      <line x1="3" x2="6" y1="12" y2="12" />
    </symbol>
    <symbol id="bluetooth-off" viewBox="0 0 24 24">
      <path d="m17 17-5 5V12l-5 5" />
      <path d="m2 2 20 20" />
      <path d="M14.5 9.5 17 7l-5-5v4.5" />
    </symbol>
    <symbol id="bluetooth-searching" viewBox="0 0 24 24">
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
      <path d="M18 12h.01" />
    </symbol>
    <symbol id="bluetooth" viewBox="0 0 24 24">
      <path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </symbol>
    <symbol id="bold" viewBox="0 0 24 24">
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
    </symbol>
    <symbol id="bolt" viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </symbol>
    <symbol id="bomb" viewBox="0 0 24 24">
      <circle cx="11" cy="13" r="9" />
      <path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
      <path d="m22 2-1.5 1.5" />
    </symbol>
    <symbol id="bone-fracture" viewBox="0 0 24 24">
      <path d="M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5" />
      <path d="m16 20-1-2" />
      <path d="m20 16-2-1" />
      <path d="m4 8 2 1" />
      <path d="m8 4 1 2" />
      <path d="M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z" />
    </symbol>
    <symbol id="bone" viewBox="0 0 24 24">
      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
    </symbol>
    <symbol id="book-a" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m8 13 4-7 4 7" />
      <path d="M9.1 11h5.7" />
    </symbol>
    <symbol id="book-alert" viewBox="0 0 24 24">
      <path d="M12 13h.01" />
      <path d="M12 6v3" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="book-audio" viewBox="0 0 24 24">
      <path d="M12 6v7" />
      <path d="M16 8v3" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8 8v3" />
    </symbol>
    <symbol id="book-check" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 9.5 2 2 4-4" />
    </symbol>
    <symbol id="book-copy" viewBox="0 0 24 24">
      <path d="M5 7a2 2 0 0 0-2 2v11" />
      <path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" />
      <path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" />
    </symbol>
    <symbol id="book-dashed" viewBox="0 0 24 24">
      <path d="M12 17h1.5" />
      <path d="M12 22h1.5" />
      <path d="M12 2h1.5" />
      <path d="M17.5 22H19a1 1 0 0 0 1-1" />
      <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
      <path d="M20 14v3h-2.5" />
      <path d="M20 8.5V10" />
      <path d="M4 10V8.5" />
      <path d="M4 19.5V14" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
      <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
    </symbol>
    <symbol id="book-down" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 10 3 3 3-3" />
    </symbol>
    <symbol id="book-headphones" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8 12v-2a4 4 0 0 1 8 0v2" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="9" cy="12" r="1" />
    </symbol>
    <symbol id="book-heart" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
    </symbol>
    <symbol id="book-image" viewBox="0 0 24 24">
      <path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="10" cy="8" r="2" />
    </symbol>
    <symbol id="book-key" viewBox="0 0 24 24">
      <path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" />
      <path d="M17 2v6" />
      <path d="M17 4h2" />
      <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="17" cy="10" r="2" />
    </symbol>
    <symbol id="book-lock" viewBox="0 0 24 24">
      <path d="M18 6V4a2 2 0 1 0-4 0v2" />
      <path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
      <rect x="12" y="6" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="book-marked" viewBox="0 0 24 24">
      <path d="M10 2v8l3-3 3 3V2" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="book-minus" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="book-open-check" viewBox="0 0 24 24">
      <path d="M12 5v16" />
      <path d="m16 12 2 2 4-4" />
      <path d="M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344" />
    </symbol>
    <symbol id="book-open-text" viewBox="0 0 24 24">
      <path d="M12 5v16" />
      <path d="M16 13h2" />
      <path d="M16 9h2" />
      <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
      <path d="M6 13h2" />
      <path d="M6 9h2" />
    </symbol>
    <symbol id="book-open" viewBox="0 0 24 24">
      <path d="M12 5v16" />
      <path d="M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z" />
    </symbol>
    <symbol id="book-plus" viewBox="0 0 24 24">
      <path d="M12 7v6" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="book-search" viewBox="0 0 24 24">
      <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
      <path d="m21 22-1.879-1.878" />
      <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
      <circle cx="17" cy="18" r="3" />
    </symbol>
    <symbol id="book-text" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M8 11h8" />
      <path d="M8 7h6" />
    </symbol>
    <symbol id="book-type" viewBox="0 0 24 24">
      <path d="M10 13h4" />
      <path d="M12 6v7" />
      <path d="M16 8V6H8v2" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="book-up-2" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
      <path d="m9 10 3-3 3 3" />
      <path d="m9 5 3-3 3 3" />
    </symbol>
    <symbol id="book-up" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9 10 3-3 3 3" />
    </symbol>
    <symbol id="book-user" viewBox="0 0 24 24">
      <path d="M15 13a3 3 0 1 0-6 0" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <circle cx="12" cy="8" r="2" />
    </symbol>
    <symbol id="book-x" viewBox="0 0 24 24">
      <path d="m14.5 7-5 5" />
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
      <path d="m9.5 7 5 5" />
    </symbol>
    <symbol id="book" viewBox="0 0 24 24">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </symbol>
    <symbol id="bookmark-check" viewBox="0 0 24 24">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
      <path d="m9 10 2 2 4-4" />
    </symbol>
    <symbol id="bookmark-minus" viewBox="0 0 24 24">
      <path d="M15 10H9" />
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="bookmark-off" viewBox="0 0 24 24">
      <path d="M19 19v1a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H17a2 2 0 0 1 2 2v8.344" />
    </symbol>
    <symbol id="bookmark-plus" viewBox="0 0 24 24">
      <path d="M12 7v6" />
      <path d="M15 10H9" />
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="bookmark-x" viewBox="0 0 24 24">
      <path d="m14.5 7.5-5 5" />
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
      <path d="m9.5 7.5 5 5" />
    </symbol>
    <symbol id="bookmark" viewBox="0 0 24 24">
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="boom-box" viewBox="0 0 24 24">
      <path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M8 8v1" />
      <path d="M12 8v1" />
      <path d="M16 8v1" />
      <rect width="20" height="12" x="2" y="9" rx="2" />
      <circle cx="8" cy="15" r="2" />
      <circle cx="16" cy="15" r="2" />
    </symbol>
    <symbol id="bot-message-square" viewBox="0 0 24 24">
      <path d="M12 6V2H8" />
      <path d="M15 11v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
      <path d="M9 11v2" />
    </symbol>
    <symbol id="bot-off" viewBox="0 0 24 24">
      <path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M22 22 2 2" />
      <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
      <path d="M9 13v2" />
      <path d="M9.67 4H12v2.33" />
    </symbol>
    <symbol id="bot" viewBox="0 0 24 24">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </symbol>
    <symbol id="bottle-wine" viewBox="0 0 24 24">
      <path d="M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" />
      <path d="M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" />
    </symbol>
    <symbol id="bow-arrow" viewBox="0 0 24 24">
      <path d="M17 3h4v4" />
      <path d="M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" />
      <path d="M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" />
      <path d="M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z" />
      <path d="M9.707 14.293 21 3" />
    </symbol>
    <symbol id="box" viewBox="0 0 24 24">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </symbol>
    <symbol id="boxes" viewBox="0 0 24 24">
      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
      <path d="m7 16.5-4.74-2.85" />
      <path d="m7 16.5 5-3" />
      <path d="M7 16.5v5.17" />
      <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" />
      <path d="m17 16.5-5-3" />
      <path d="m17 16.5 4.74-2.85" />
      <path d="M17 16.5v5.17" />
      <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" />
      <path d="M12 8 7.26 5.15" />
      <path d="m12 8 4.74-2.85" />
      <path d="M12 13.5V8" />
    </symbol>
    <symbol id="braces" viewBox="0 0 24 24">
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </symbol>
    <symbol id="brackets" viewBox="0 0 24 24">
      <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" />
      <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" />
    </symbol>
    <symbol id="brain-circuit" viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
      <path d="M16 8V5a2 2 0 0 1 2-2" />
      <circle cx="16" cy="13" r=".5" />
      <circle cx="18" cy="3" r=".5" />
      <circle cx="20" cy="21" r=".5" />
      <circle cx="20" cy="8" r=".5" />
    </symbol>
    <symbol id="brain-cog" viewBox="0 0 24 24">
      <path d="m10.852 14.772-.383.923" />
      <path d="m10.852 9.228-.383-.923" />
      <path d="m13.148 14.772.382.924" />
      <path d="m13.531 8.305-.383.923" />
      <path d="m14.772 10.852.923-.383" />
      <path d="m14.772 13.148.923.383" />
      <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" />
      <path d="M17.998 5.125a4 4 0 0 1 2.525 5.771" />
      <path d="M19.505 10.294a4 4 0 0 1-1.5 7.706" />
      <path d="M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" />
      <path d="M4.5 10.291A4 4 0 0 0 6 18" />
      <path d="M6.002 5.125a3 3 0 0 0 .4 1.375" />
      <path d="m9.228 10.852-.923-.383" />
      <path d="m9.228 13.148-.923.383" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="brain" viewBox="0 0 24 24">
      <path d="M12 18V5" />
      <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" />
      <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" />
      <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" />
      <path d="M18 18a4 4 0 0 0 2-7.464" />
      <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" />
      <path d="M6 18a4 4 0 0 1-2-7.464" />
      <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" />
    </symbol>
    <symbol id="brick-wall-fire" viewBox="0 0 24 24">
      <path d="M16 3v2.107" />
      <path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" />
      <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" />
      <path d="M3 15h5.253" />
      <path d="M3 9h8.228" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
    </symbol>
    <symbol id="brick-wall-shield" viewBox="0 0 24 24">
      <path d="M12 9v1.258" />
      <path d="M16 3v5.46" />
      <path d="M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" />
      <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" />
      <path d="M3 15h7" />
      <path d="M3 9h12.142" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
    </symbol>
    <symbol id="brick-wall" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 9v6" />
      <path d="M16 15v6" />
      <path d="M16 3v6" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <path d="M8 15v6" />
      <path d="M8 3v6" />
    </symbol>
    <symbol id="briefcase-business" viewBox="0 0 24 24">
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="briefcase-conveyor-belt" viewBox="0 0 24 24">
      <path d="M10 20v2" />
      <path d="M14 20v2" />
      <path d="M18 20v2" />
      <path d="M21 20H3" />
      <path d="M6 20v2" />
      <path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" />
      <rect x="4" y="6" width="16" height="10" rx="2" />
    </symbol>
    <symbol id="briefcase-medical" viewBox="0 0 24 24">
      <path d="M12 11v4" />
      <path d="M14 13h-4" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M18 6v14" />
      <path d="M6 6v14" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="briefcase" viewBox="0 0 24 24">
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="bring-to-front" viewBox="0 0 24 24">
      <rect x="8" y="8" width="8" height="8" rx="2" />
      <path d="M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
      <path d="M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />
    </symbol>
    <symbol id="broccoli" viewBox="0 0 24 24">
      <path d="M10 13a3 3 0 0 1-2.121-5.121" />
      <path d="M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 0 1 6 22c-2 0-4-2-4-4a1 1 0 0 1 .293-.707c1.911-1.911 3.823-3.578 5.347-5.441" />
      <path d="M16.573 14.737A4 4 0 0 1 14 11" />
      <path d="M7.14 10.907a4 4 0 1 1 2.756-7.43A4 4 0 0 1 16.7 4.48a2 2 0 0 1 2.82 2.82 4 4 0 0 1 1.002 6.805A4 4 0 1 1 13 16" />
    </symbol>
    <symbol id="broom-sparkles" viewBox="0 0 24 24">
      <path d="M11 2v2" />
      <path d="M12 3h-2" />
      <path d="M13.5 10.5 22 2" />
      <path d="M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z" />
      <path d="M20 15v4" />
      <path d="M22 17h-4" />
      <path d="M4 4v4" />
      <path d="m5 18 2-2" />
      <path d="M6 6H2" />
      <path d="m7.699 10.7 5.602 5.601" />
    </symbol>
    <symbol id="broom" viewBox="0 0 24 24">
      <path d="M13.5 10.5 22 2" />
      <path d="M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z" />
      <path d="m5 18 2-2" />
      <path d="m7.699 10.7 5.602 5.601" />
    </symbol>
    <symbol id="brush-cleaning" viewBox="0 0 24 24">
      <path d="m16 22-1-4" />
      <path d="M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" />
      <path d="M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" />
      <path d="m8 22 1-4" />
    </symbol>
    <symbol id="brush" viewBox="0 0 24 24">
      <path d="m11 10 3 3" />
      <path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" />
      <path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" />
    </symbol>
    <symbol id="bubbles" viewBox="0 0 24 24">
      <path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" />
      <circle cx="18.5" cy="8.5" r="3.5" />
      <circle cx="7.5" cy="16.5" r="5.5" />
      <circle cx="7.5" cy="4.5" r="2.5" />
    </symbol>
    <symbol id="bug-off" viewBox="0 0 24 24">
      <path d="M12 20v-8" />
      <path d="M12.656 7H14a4 4 0 0 1 4 4v1.344" />
      <path d="M14.12 3.88 16 2" />
      <path d="M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" />
      <path d="m2 2 20 20" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M22 13h-3.344" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <path d="M6 13H2" />
      <path d="m8 2 1.88 1.88" />
      <path d="M9.712 4.06A3 3 0 0 1 15 6v1.13" />
    </symbol>
    <symbol id="bug-play" viewBox="0 0 24 24">
      <path d="M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" />
      <path d="M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
      <path d="M14.12 3.88 16 2" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <path d="M6 13H2" />
      <path d="m8 2 1.88 1.88" />
      <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </symbol>
    <symbol id="bug" viewBox="0 0 24 24">
      <path d="M12 20v-9" />
      <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
      <path d="M14.12 3.88 16 2" />
      <path d="M21 21a4 4 0 0 0-3.81-4" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M22 13h-4" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M3 5a4 4 0 0 0 3.55 3.97" />
      <path d="M6 13H2" />
      <path d="m8 2 1.88 1.88" />
      <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
    </symbol>
    <symbol id="building-2" viewBox="0 0 24 24">
      <path d="M10 12h4" />
      <path d="M10 8h4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
      <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
    </symbol>
    <symbol id="building" viewBox="0 0 24 24">
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M12 6h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
      <path d="M8 6h.01" />
      <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </symbol>
    <symbol id="bus-front" viewBox="0 0 24 24">
      <path d="M4 6 2 7" />
      <path d="M10 6h4" />
      <path d="m22 7-2-1" />
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
      <path d="M6 19v2" />
      <path d="M18 21v-2" />
    </symbol>
    <symbol id="bus" viewBox="0 0 24 24">
      <path d="M8 6v6" />
      <path d="M15 6v6" />
      <path d="M2 12h19.6" />
      <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
      <circle cx="7" cy="18" r="2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
    </symbol>
    <symbol id="cable-car" viewBox="0 0 24 24">
      <path d="M10 3h.01" />
      <path d="M14 2h.01" />
      <path d="m2 9 20-5" />
      <path d="M12 12V6.5" />
      <rect width="16" height="10" x="4" y="12" rx="3" />
      <path d="M9 12v5" />
      <path d="M15 12v5" />
      <path d="M4 17h16" />
    </symbol>
    <symbol id="cable" viewBox="0 0 24 24">
      <path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" />
      <path d="M17 21v-2" />
      <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" />
      <path d="M21 21v-2" />
      <path d="M3 5V3" />
      <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" />
      <path d="M7 5V3" />
    </symbol>
    <symbol id="cake-slice" viewBox="0 0 24 24">
      <path d="M16 13H3" />
      <path d="M16 17H3" />
      <path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" />
      <circle cx="9" cy="7" r="2" />
    </symbol>
    <symbol id="cake" viewBox="0 0 24 24">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h.01" />
      <path d="M12 4h.01" />
      <path d="M17 4h.01" />
    </symbol>
    <symbol id="calculator" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <line x1="16" x2="16" y1="14" y2="18" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </symbol>
    <symbol id="calendar-1" viewBox="0 0 24 24">
      <path d="M11 13h1v4" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="calendar-arrow-down" viewBox="0 0 24 24">
      <path d="m14 17 4 4 4-4" />
      <path d="M16 2v3" />
      <path d="M18 13v8" />
      <path d="M21 10.354V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.343" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-arrow-up" viewBox="0 0 24 24">
      <path d="m14 17 4-4 4 4" />
      <path d="M16 2v3" />
      <path d="M18 21v-8" />
      <path d="M21 10.343V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h9" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-check-2" viewBox="0 0 24 24">
      <path d="M 19 3 L 5 3" />
      <path d="M 21 13 L 21 5" />
      <path d="M 21 5 A2 2 0 0 0 19 3" />
      <path d="M 3 19 A2 2 0 0 0 5 21" />
      <path d="M 3 5 L 3 19" />
      <path d="M 5 3 A2 2 0 0 0 3 5" />
      <path d="m16 19 2 2 4-4" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M5 21 L12.5 21" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-check" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 15 2 2 4-4" />
    </symbol>
    <symbol id="calendar-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="M16 2v3" />
      <path d="M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338" />
      <path d="M3 9h5.859" />
      <path d="M8 2v3" />
      <circle cx="16" cy="16" r="6" />
    </symbol>
    <symbol id="calendar-cog" viewBox="0 0 24 24">
      <path d="m15.228 16.852-.923-.383" />
      <path d="m15.228 19.148-.923.383" />
      <path d="M16 2v3" />
      <path d="m16.47 14.305.382.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.773 16.852.924-.383" />
      <path d="m20.773 19.148.924.383" />
      <path d="M21 10.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h5.5" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="calendar-days" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 13h.01" />
      <path d="M12 13h.01" />
      <path d="M16 13h.01" />
      <path d="M8 17h.01" />
      <path d="M12 17h.01" />
      <path d="M16 17h.01" />
    </symbol>
    <symbol id="calendar-fold" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="M21 15V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10v-5a1 1 0 011-1za2.4 2.4 0 01-.706 1.706l-3.588 3.588A2.4 2.4 0 0115 21" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-heart" viewBox="0 0 24 24">
      <path d="M12.127 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.125" />
      <path d="M14.62 17.8A2.25 2.25 0 1118 14.836a2.25 2.25 0 113.38 2.966l-2.626 2.856a.998.998 0 01-1.507 0z" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-minus-2" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M10 15h4" />
    </symbol>
    <symbol id="calendar-minus" viewBox="0 0 24 24">
      <path d="M16 18h6" />
      <path d="M16 2v3" />
      <path d="M21 14V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-off" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="m2 2 20 20" />
      <path d="M21 9h-5.5" />
      <path d="M3 9h6" />
      <path d="M3.586 3.586A2 2 0 003 5v14a2 2 0 002 2h14a2 2 0 001.414-.586" />
      <path d="M8.656 3H19a2 2 0 012 2v10.344" />
    </symbol>
    <symbol id="calendar-plus-2" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M10 15h4" />
      <path d="M12 13v4" />
    </symbol>
    <symbol id="calendar-plus" viewBox="0 0 24 24">
      <path d="M16 18h6" />
      <path d="M16 2v3" />
      <path d="M19 15v6" />
      <path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-range" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M16 2v3" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <path d="M17 13h-6" />
      <path d="M13 17H7" />
      <path d="M7 13h.01" />
      <path d="M17 17h.01" />
    </symbol>
    <symbol id="calendar-search" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="M21 10.69V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h7.25" />
      <path d="m22 21-1.875-1.875" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
      <circle cx="18" cy="17" r="3" />
    </symbol>
    <symbol id="calendar-sync" viewBox="0 0 24 24">
      <path d="M11 10v4h4" />
      <path d="m11 14 1.535-1.605a5 5 0 018 1.5" />
      <path d="M16 2v3" />
      <path d="m21 18-1.535 1.605a5 5 0 01-8-1.5" />
      <path d="M21 22v-4h-4" />
      <path d="M21 8.517V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h3.517" />
      <path d="M3 9h4" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-x-2" viewBox="0 0 24 24">
      <path d="M16 2v3" />
      <path d="m17 16 5 5" />
      <path d="m17 21 5-5" />
      <path d="M21 12V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8" />
      <path d="M3 9h18" />
      <path d="M8 2v3" />
    </symbol>
    <symbol id="calendar-x" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="m14 13-4 4" />
      <path d="m10 13 4 4" />
    </symbol>
    <symbol id="calendar" viewBox="0 0 24 24">
      <path d="M8 2v3" />
      <path d="M16 2v3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
    </symbol>
    <symbol id="calendars" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" />
      <path d="M18 2v2" />
      <path d="M2 13h2" />
      <path d="M8 8h14" />
      <rect x="8" y="3" width="14" height="14" rx="2" />
    </symbol>
    <symbol id="camera-off" viewBox="0 0 24 24">
      <path d="M14.564 14.558a3 3 0 1 1-4.122-4.121" />
      <path d="m2 2 20 20" />
      <path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" />
      <path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" />
    </symbol>
    <symbol id="camera" viewBox="0 0 24 24">
      <path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
      <circle cx="12" cy="13" r="3" />
    </symbol>
    <symbol id="candy-cane" viewBox="0 0 24 24">
      <path d="m10.8 5 2.111 4.223" />
      <path d="M17.75 7 15 2.1" />
      <path d="m4.874 14.647 2.12 4.24" />
      <path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z" />
      <path d="m7.906 9.712 2.005 4.411" />
    </symbol>
    <symbol id="candy-off" viewBox="0 0 24 24">
      <path d="M10 10v7.9" />
      <path d="M11.802 6.145a5 5 0 0 1 6.053 6.053" />
      <path d="M14 6.1v2.243" />
      <path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" />
      <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" />
      <path d="m2 2 20 20" />
      <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />
    </symbol>
    <symbol id="candy" viewBox="0 0 24 24">
      <path d="M10 7v10.9" />
      <path d="M14 6.1V17" />
      <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" />
      <path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" />
      <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" />
    </symbol>
    <symbol id="cannabis-off" viewBox="0 0 24 24">
      <path d="M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" />
      <path d="M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" />
      <path d="M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" />
      <path d="m2 2 20 20" />
      <path d="M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" />
      <path d="M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3" />
    </symbol>
    <symbol id="cannabis" viewBox="0 0 24 24">
      <path d="M12 22v-4" />
      <path d="M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" />
    </symbol>
    <symbol id="captions-off" viewBox="0 0 24 24">
      <path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
      <path d="M17 11h-.5" />
      <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
      <path d="m2 2 20 20" />
      <path d="M7 11h4" />
      <path d="M7 15h2.5" />
    </symbol>
    <symbol id="captions" viewBox="0 0 24 24">
      <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
      <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
    </symbol>
    <symbol id="car-front" viewBox="0 0 24 24">
      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
      <rect width="18" height="8" x="3" y="10" rx="2" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </symbol>
    <symbol id="car-taxi-front" viewBox="0 0 24 24">
      <path d="M10 2h4" />
      <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
      <path d="M7 14h.01" />
      <path d="M17 14h.01" />
      <rect width="18" height="8" x="3" y="10" rx="2" />
      <path d="M5 18v2" />
      <path d="M19 18v2" />
    </symbol>
    <symbol id="car" viewBox="0 0 24 24">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </symbol>
    <symbol id="caravan" viewBox="0 0 24 24">
      <path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
      <path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
      <path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" />
      <circle cx="8" cy="19" r="2" />
    </symbol>
    <symbol id="card-sim" viewBox="0 0 24 24">
      <path d="M12 14v4" />
      <path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
      <path d="M8 14h8" />
      <rect x="8" y="10" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="carrot" viewBox="0 0 24 24">
      <path d="M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3" />
      <path d="M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7" />
      <path d="m8 15-2.58-2.58" />
    </symbol>
    <symbol id="case-lower" viewBox="0 0 24 24">
      <path d="M10 9v7" />
      <path d="M14 6v10" />
      <circle cx="17.5" cy="12.5" r="3.5" />
      <circle cx="6.5" cy="12.5" r="3.5" />
    </symbol>
    <symbol id="case-sensitive" viewBox="0 0 24 24">
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M22 9v7" />
      <path d="M3.304 13h6.392" />
      <circle cx="18.5" cy="12.5" r="3.5" />
    </symbol>
    <symbol id="case-upper" viewBox="0 0 24 24">
      <path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" />
      <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
      <path d="M3.304 13h6.392" />
    </symbol>
    <symbol id="cassette-tape" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <circle cx="8" cy="10" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="10" r="2" />
      <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
    </symbol>
    <symbol id="cast" viewBox="0 0 24 24">
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <path d="M2 12a9 9 0 0 1 8 8" />
      <path d="M2 16a5 5 0 0 1 4 4" />
      <line x1="2" x2="2.01" y1="20" y2="20" />
    </symbol>
    <symbol id="castle" viewBox="0 0 24 24">
      <path d="M10 5V3" />
      <path d="M14 5V3" />
      <path d="M15 21v-3a3 3 0 0 0-6 0v3" />
      <path d="M18 3v8" />
      <path d="M18 5H6" />
      <path d="M22 11H2" />
      <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" />
      <path d="M6 3v8" />
    </symbol>
    <symbol id="cat" viewBox="0 0 24 24">
      <path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
    </symbol>
    <symbol id="cctv-off" viewBox="0 0 24 24">
      <path d="m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448" />
      <path d="m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037" />
      <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902" />
      <path d="m2 2 20 20" />
      <path d="M2 21v-4" />
      <path d="M7 9h.01" />
    </symbol>
    <symbol id="cctv" viewBox="0 0 24 24">
      <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
      <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
      <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
      <path d="M2 21v-4" />
      <path d="M7 9h.01" />
    </symbol>
    <symbol id="chart-area" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="chart-bar-big" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
    </symbol>
    <symbol id="chart-bar-decreasing" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11h8" />
      <path d="M7 16h3" />
      <path d="M7 6h12" />
    </symbol>
    <symbol id="chart-bar-increasing" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 11h8" />
      <path d="M7 16h12" />
      <path d="M7 6h3" />
    </symbol>
    <symbol id="chart-bar-stacked" viewBox="0 0 24 24">
      <path d="M11 13v4" />
      <path d="M15 5v4" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="7" y="13" width="9" height="4" rx="1" />
      <rect x="7" y="5" width="12" height="4" rx="1" />
    </symbol>
    <symbol id="chart-bar" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16h8" />
      <path d="M7 11h12" />
      <path d="M7 6h3" />
    </symbol>
    <symbol id="chart-candlestick" viewBox="0 0 24 24">
      <path d="M9 5v4" />
      <rect width="4" height="6" x="7" y="9" rx="1" />
      <path d="M9 15v2" />
      <path d="M17 3v2" />
      <rect width="4" height="8" x="15" y="5" rx="1" />
      <path d="M17 13v3" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </symbol>
    <symbol id="chart-column-big" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="15" y="5" width="4" height="12" rx="1" />
      <rect x="7" y="8" width="4" height="9" rx="1" />
    </symbol>
    <symbol id="chart-column-decreasing" viewBox="0 0 24 24">
      <path d="M13 17V9" />
      <path d="M18 17v-3" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 17V5" />
    </symbol>
    <symbol id="chart-column-increasing" viewBox="0 0 24 24">
      <path d="M13 17V9" />
      <path d="M18 17V5" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 17v-3" />
    </symbol>
    <symbol id="chart-column-stacked" viewBox="0 0 24 24">
      <path d="M11 13H7" />
      <path d="M19 9h-4" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <rect x="15" y="5" width="4" height="12" rx="1" />
      <rect x="7" y="8" width="4" height="9" rx="1" />
    </symbol>
    <symbol id="chart-column" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </symbol>
    <symbol id="chart-gantt" viewBox="0 0 24 24">
      <path d="M10 6h8" />
      <path d="M12 16h6" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M8 11h7" />
    </symbol>
    <symbol id="chart-line" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="m19 9-5 5-4-4-3 3" />
    </symbol>
    <symbol id="chart-network" viewBox="0 0 24 24">
      <path d="m13.11 7.664 1.78 2.672" />
      <path d="m14.162 12.788-3.324 1.424" />
      <path d="m20 4-6.06 1.515" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="9" cy="15" r="2" />
    </symbol>
    <symbol id="chart-no-axes-column-decreasing" viewBox="0 0 24 24">
      <path d="M5 21V3" />
      <path d="M12 21V9" />
      <path d="M19 21v-6" />
    </symbol>
    <symbol id="chart-no-axes-column-increasing" viewBox="0 0 24 24">
      <path d="M5 21v-6" />
      <path d="M12 21V9" />
      <path d="M19 21V3" />
    </symbol>
    <symbol id="chart-no-axes-column" viewBox="0 0 24 24">
      <path d="M5 21v-6" />
      <path d="M12 21V3" />
      <path d="M19 21V9" />
    </symbol>
    <symbol id="chart-no-axes-combined" viewBox="0 0 24 24">
      <path d="M12 16v5" />
      <path d="M16 14.639V21" />
      <path d="M20 10.656V21" />
      <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
      <path d="M4 18.463V21" />
      <path d="M8 14.656V21" />
    </symbol>
    <symbol id="chart-no-axes-gantt" viewBox="0 0 24 24">
      <path d="M6 5h12" />
      <path d="M4 12h10" />
      <path d="M12 19h8" />
    </symbol>
    <symbol id="chart-pie" viewBox="0 0 24 24">
      <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" />
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
    </symbol>
    <symbol id="chart-scatter" viewBox="0 0 24 24">
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
      <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </symbol>
    <symbol id="chart-spline" viewBox="0 0 24 24">
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
    </symbol>
    <symbol id="check-check" viewBox="0 0 24 24">
      <path d="M18 6 7 17l-5-5" />
      <path d="m22 10-7.5 7.5L13 16" />
    </symbol>
    <symbol id="check-line" viewBox="0 0 24 24">
      <path d="M20 4L9 15" />
      <path d="M21 19L3 19" />
      <path d="M9 15L4 10" />
    </symbol>
    <symbol id="check" viewBox="0 0 24 24">
      <path d="M20 6 9 17l-5-5" />
    </symbol>
    <symbol id="chef-hat" viewBox="0 0 24 24">
      <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
      <path d="M6 17h12" />
    </symbol>
    <symbol id="cherry" viewBox="0 0 24 24">
      <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
      <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
      <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
      <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
    </symbol>
    <symbol id="chess-bishop" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" />
      <path d="m16 7-2.5 2.5" />
      <path d="M9 2h6" />
    </symbol>
    <symbol id="chess-king" viewBox="0 0 24 24">
      <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1" />
      <path d="M10 4h4" />
      <path d="M12 2v6.818" />
    </symbol>
    <symbol id="chess-knight" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" />
      <path d="m15 5 1.425-1.425" />
      <path d="m17 8 1.53-1.53" />
      <path d="M9.713 12.185 7 18" />
    </symbol>
    <symbol id="chess-pawn" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="m14.5 10 1.5 8" />
      <path d="M7 10h10" />
      <path d="m8 18 1.5-8" />
      <circle cx="12" cy="6" r="4" />
    </symbol>
    <symbol id="chess-queen" viewBox="0 0 24 24">
      <path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" />
      <path d="m20 9-3 9" />
      <path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" />
      <path d="M7 18 4 9" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="20" cy="7" r="2" />
      <circle cx="4" cy="7" r="2" />
    </symbol>
    <symbol id="chess-rook" viewBox="0 0 24 24">
      <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="m17 18-1-9" />
      <path d="M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" />
      <path d="M6 4h12" />
      <path d="m7 18 1-9" />
    </symbol>
    <symbol id="chevron-down" viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" />
    </symbol>
    <symbol id="chevron-first" viewBox="0 0 24 24">
      <path d="m17 18-6-6 6-6" />
      <path d="M7 6v12" />
    </symbol>
    <symbol id="chevron-last" viewBox="0 0 24 24">
      <path d="m7 18 6-6-6-6" />
      <path d="M17 6v12" />
    </symbol>
    <symbol id="chevron-left" viewBox="0 0 24 24">
      <path d="m15 18-6-6 6-6" />
    </symbol>
    <symbol id="chevron-right" viewBox="0 0 24 24">
      <path d="m9 18 6-6-6-6" />
    </symbol>
    <symbol id="chevron-up" viewBox="0 0 24 24">
      <path d="m18 15-6-6-6 6" />
    </symbol>
    <symbol id="chevrons-down-up" viewBox="0 0 24 24">
      <path d="m7 20 5-5 5 5" />
      <path d="m7 4 5 5 5-5" />
    </symbol>
    <symbol id="chevrons-down" viewBox="0 0 24 24">
      <path d="m7 6 5 5 5-5" />
      <path d="m7 13 5 5 5-5" />
    </symbol>
    <symbol id="chevrons-left-right-ellipsis" viewBox="0 0 24 24">
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="m17 7 5 5-5 5" />
      <path d="m7 7-5 5 5 5" />
      <path d="M8 12h.01" />
    </symbol>
    <symbol id="chevrons-left-right" viewBox="0 0 24 24">
      <path d="m9 7-5 5 5 5" />
      <path d="m15 7 5 5-5 5" />
    </symbol>
    <symbol id="chevrons-left" viewBox="0 0 24 24">
      <path d="m11 17-5-5 5-5" />
      <path d="m18 17-5-5 5-5" />
    </symbol>
    <symbol id="chevrons-right-left" viewBox="0 0 24 24">
      <path d="m20 17-5-5 5-5" />
      <path d="m4 17 5-5-5-5" />
    </symbol>
    <symbol id="chevrons-right" viewBox="0 0 24 24">
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </symbol>
    <symbol id="chevrons-up-down" viewBox="0 0 24 24">
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </symbol>
    <symbol id="chevrons-up" viewBox="0 0 24 24">
      <path d="m17 11-5-5-5 5" />
      <path d="m17 18-5-5-5 5" />
    </symbol>
    <symbol id="church" viewBox="0 0 24 24">
      <path d="M10 9h4" />
      <path d="M12 7v5" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" />
      <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" />
    </symbol>
    <symbol id="cigarette-off" viewBox="0 0 24 24">
      <path d="M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="m2 2 20 20" />
      <path d="M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
      <path d="M7 12v4" />
    </symbol>
    <symbol id="cigarette" viewBox="0 0 24 24">
      <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
      <path d="M7 12v4" />
    </symbol>
    <symbol id="circle-alert" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </symbol>
    <symbol id="circle-arrow-down" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8" />
      <path d="m8 12 4 4 4-4" />
    </symbol>
    <symbol id="circle-arrow-left" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m12 8-4 4 4 4" />
      <path d="M16 12H8" />
    </symbol>
    <symbol id="circle-arrow-out-down-left" viewBox="0 0 24 24">
      <path d="M2 12a10 10 0 1 1 10 10" />
      <path d="m2 22 10-10" />
      <path d="M8 22H2v-6" />
    </symbol>
    <symbol id="circle-arrow-out-down-right" viewBox="0 0 24 24">
      <path d="M12 22a10 10 0 1 1 10-10" />
      <path d="M22 22 12 12" />
      <path d="M22 16v6h-6" />
    </symbol>
    <symbol id="circle-arrow-out-up-left" viewBox="0 0 24 24">
      <path d="M2 8V2h6" />
      <path d="m2 2 10 10" />
      <path d="M12 2A10 10 0 1 1 2 12" />
    </symbol>
    <symbol id="circle-arrow-out-up-right" viewBox="0 0 24 24">
      <path d="M22 12A10 10 0 1 1 12 2" />
      <path d="M22 2 12 12" />
      <path d="M16 2h6v6" />
    </symbol>
    <symbol id="circle-arrow-right" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m12 16 4-4-4-4" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="circle-arrow-up" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
    </symbol>
    <symbol id="circle-check-big" viewBox="0 0 24 24">
      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
      <path d="m9 11 3 3L22 4" />
    </symbol>
    <symbol id="circle-check" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="circle-chevron-down" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 10-4 4-4-4" />
    </symbol>
    <symbol id="circle-chevron-left" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m14 16-4-4 4-4" />
    </symbol>
    <symbol id="circle-chevron-right" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m10 8 4 4-4 4" />
    </symbol>
    <symbol id="circle-chevron-up" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m8 14 4-4 4 4" />
    </symbol>
    <symbol id="circle-dashed" viewBox="0 0 24 24">
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />
    </symbol>
    <symbol id="circle-divide" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
    </symbol>
    <symbol id="circle-dollar-sign" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </symbol>
    <symbol id="circle-dot-dashed" viewBox="0 0 24 24">
      <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
      <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
      <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
      <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
      <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
      <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
      <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
      <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="circle-dot" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="circle-ellipsis" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </symbol>
    <symbol id="circle-equal" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M7 10h10" />
      <path d="M7 14h10" />
    </symbol>
    <symbol id="circle-euro" viewBox="0 0 24 24">
      <path d="M15 9.4a4 4 0 1 0 0 5.2" />
      <path d="M7 12h5" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-fading-arrow-up" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="circle-fading-plus" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="M12 8v8" />
      <path d="M16 12H8" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="circle-gauge" viewBox="0 0 24 24">
      <path d="M15.6 2.7a10 10 0 1 0 5.7 5.7" />
      <circle cx="12" cy="12" r="2" />
      <path d="M13.4 10.6 19 5" />
    </symbol>
    <symbol id="circle-minus" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="circle-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
      <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
    </symbol>
    <symbol id="circle-parking-off" viewBox="0 0 24 24">
      <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" />
      <path d="M13 13H9" />
      <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" />
      <path d="m2 2 20 20" />
      <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" />
      <path d="M9 17V9" />
    </symbol>
    <symbol id="circle-parking" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </symbol>
    <symbol id="circle-pause" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </symbol>
    <symbol id="circle-percent" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="circle-pile" viewBox="0 0 24 24">
      <circle cx="12" cy="19" r="2" />
      <circle cx="12" cy="5" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="20" cy="19" r="2" />
      <circle cx="4" cy="19" r="2" />
      <circle cx="8" cy="12" r="2" />
    </symbol>
    <symbol id="circle-play" viewBox="0 0 24 24">
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-plus" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="circle-pound-sterling" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M10 16V9.5a1 1 0 0 1 5 0" />
      <path d="M8 12h4" />
      <path d="M8 16h7" />
    </symbol>
    <symbol id="circle-power" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 7v4" />
      <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
    </symbol>
    <symbol id="circle-question-mark" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="circle-slash-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M22 2 2 22" />
    </symbol>
    <symbol id="circle-slash" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="9" x2="15" y1="15" y2="9" />
    </symbol>
    <symbol id="circle-small" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" />
    </symbol>
    <symbol id="circle-star" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
    </symbol>
    <symbol id="circle-stop" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="circle-user-round" viewBox="0 0 24 24">
      <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
      <circle cx="12" cy="11" r="4" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circle-user" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </symbol>
    <symbol id="circle-x" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="circle" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="circuit-board" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </symbol>
    <symbol id="citrus" viewBox="0 0 24 24">
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </symbol>
    <symbol id="clapperboard" viewBox="0 0 24 24">
      <path d="m12.296 3.464 3.02 3.956" />
      <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
      <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="m6.18 5.276 3.1 3.899" />
    </symbol>
    <symbol id="clipboard-check" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </symbol>
    <symbol id="clipboard-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v.832" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <circle cx="16" cy="16" r="6" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </symbol>
    <symbol id="clipboard-copy" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v4" />
      <path d="M21 14H11" />
      <path d="m15 10-4 4 4 4" />
    </symbol>
    <symbol id="clipboard-list" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="clipboard-minus" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 14h6" />
    </symbol>
    <symbol id="clipboard-paste" viewBox="0 0 24 24">
      <path d="M11 14h10" />
      <path d="M16 4h2a2 2 0 0 1 2 2v1.344" />
      <path d="m17 18 4-4-4-4" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </symbol>
    <symbol id="clipboard-pen-line" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
      <path d="M16 4h2a2 2 0 0 1 1.73 1" />
      <path d="M8 18h1" />
      <path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </symbol>
    <symbol id="clipboard-pen" viewBox="0 0 24 24">
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
    </symbol>
    <symbol id="clipboard-plus" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 14h6" />
      <path d="M12 17v-6" />
    </symbol>
    <symbol id="clipboard-type" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 12v-1h6v1" />
      <path d="M11 17h2" />
      <path d="M12 11v6" />
    </symbol>
    <symbol id="clipboard-x" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m15 11-6 6" />
      <path d="m9 11 6 6" />
    </symbol>
    <symbol id="clipboard" viewBox="0 0 24 24">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </symbol>
    <symbol id="clock-1" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l2-4" />
    </symbol>
    <symbol id="clock-10" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-4-2" />
    </symbol>
    <symbol id="clock-11" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-2-4" />
    </symbol>
    <symbol id="clock-12" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6" />
    </symbol>
    <symbol id="clock-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4-2" />
    </symbol>
    <symbol id="clock-3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6h4" />
    </symbol>
    <symbol id="clock-4" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </symbol>
    <symbol id="clock-5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l2 4" />
    </symbol>
    <symbol id="clock-6" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v10" />
    </symbol>
    <symbol id="clock-7" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-2 4" />
    </symbol>
    <symbol id="clock-8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l-4 2" />
    </symbol>
    <symbol id="clock-9" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6H8" />
    </symbol>
    <symbol id="clock-alert" viewBox="0 0 24 24">
      <path d="M12 6v6l4 2" />
      <path d="M20 12v5" />
      <path d="M20 21h.01" />
      <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
    </symbol>
    <symbol id="clock-arrow-down" viewBox="0 0 24 24">
      <path d="M12 6v6l2 1" />
      <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
      <path d="m14 18 4 4 4-4" />
      <path d="M18 14v8" />
    </symbol>
    <symbol id="clock-arrow-left" viewBox="0 0 24 24">
      <path d="M12 6v6l1.5.8" />
      <path d="M12.338 21.994a10 10 0 1 1 9.587-8.767" />
      <path d="M14 18h8" />
      <path d="m18 22-4-4 4-4" />
    </symbol>
    <symbol id="clock-arrow-right" viewBox="0 0 24 24">
      <path d="M12 6v6l2 1" />
      <path d="M13.5 21.885A10 10 0 1 1 22 12" />
      <path d="M14 18h8" />
      <path d="m18 22 4-4-4-4" />
    </symbol>
    <symbol id="clock-arrow-up" viewBox="0 0 24 24">
      <path d="M12 6v6l1.56.78" />
      <path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
      <path d="m14 18 4-4 4 4" />
      <path d="M18 22v-8" />
    </symbol>
    <symbol id="clock-check" viewBox="0 0 24 24">
      <path d="M12 6v6l4 2" />
      <path d="M22 12a10 10 0 1 0-11 9.95" />
      <path d="m22 16-5.5 5.5L14 19" />
    </symbol>
    <symbol id="clock-fading" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 1 7.38 16.75" />
      <path d="M12 6v6l4 2" />
      <path d="M2.5 8.875a10 10 0 0 0-.5 3" />
      <path d="M2.83 16a10 10 0 0 0 2.43 3.4" />
      <path d="M4.636 5.235a10 10 0 0 1 .891-.857" />
      <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" />
    </symbol>
    <symbol id="clock-plus" viewBox="0 0 24 24">
      <path d="M12 6v6l3.644 1.822" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" />
    </symbol>
    <symbol id="clock" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </symbol>
    <symbol id="closed-caption" viewBox="0 0 24 24">
      <path d="M10 9.17a3 3 0 1 0 0 5.66" />
      <path d="M17 9.17a3 3 0 1 0 0 5.66" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="cloud-alert" viewBox="0 0 24 24">
      <path d="M12 12v4" />
      <path d="M12 20h.01" />
      <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />
    </symbol>
    <symbol id="cloud-backup" viewBox="0 0 24 24">
      <path d="M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" />
      <path d="M7 11v4h4" />
      <path d="M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" />
    </symbol>
    <symbol id="cloud-check" viewBox="0 0 24 24">
      <path d="m17 15-5.5 5.5L9 18" />
      <path d="M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" />
    </symbol>
    <symbol id="cloud-cog" viewBox="0 0 24 24">
      <path d="m10.852 19.772-.383.924" />
      <path d="m13.148 14.228.383-.923" />
      <path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
      <path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" />
      <path d="m14.772 15.852.923-.383" />
      <path d="m14.772 18.148.923.383" />
      <path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" />
      <path d="m9.228 15.852-.923-.383" />
      <path d="m9.228 18.148-.923.383" />
    </symbol>
    <symbol id="cloud-download" viewBox="0 0 24 24">
      <path d="M12 13v8l-4-4" />
      <path d="m12 21 4-4" />
      <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
    </symbol>
    <symbol id="cloud-drizzle" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 19v1" />
      <path d="M8 14v1" />
      <path d="M16 19v1" />
      <path d="M16 14v1" />
      <path d="M12 21v1" />
      <path d="M12 16v1" />
    </symbol>
    <symbol id="cloud-fog" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 17H7" />
      <path d="M17 21H9" />
    </symbol>
    <symbol id="cloud-hail" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v2" />
      <path d="M8 14v2" />
      <path d="M16 20h.01" />
      <path d="M8 20h.01" />
      <path d="M12 16v2" />
      <path d="M12 22h.01" />
    </symbol>
    <symbol id="cloud-lightning" viewBox="0 0 24 24">
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </symbol>
    <symbol id="cloud-moon-rain" viewBox="0 0 24 24">
      <path d="M11 20v2" />
      <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" />
      <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
      <path d="M7 19v2" />
    </symbol>
    <symbol id="cloud-moon" viewBox="0 0 24 24">
      <path d="M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" />
      <path d="M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" />
    </symbol>
    <symbol id="cloud-off" viewBox="0 0 24 24">
      <path d="M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" />
      <path d="M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="cloud-rain-wind" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m9.2 22 3-7" />
      <path d="m9 13-3 7" />
      <path d="m17 13-3 7" />
    </symbol>
    <symbol id="cloud-rain" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M16 14v6" />
      <path d="M8 14v6" />
      <path d="M12 16v6" />
    </symbol>
    <symbol id="cloud-snow" viewBox="0 0 24 24">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M8 15h.01" />
      <path d="M8 19h.01" />
      <path d="M12 17h.01" />
      <path d="M12 21h.01" />
      <path d="M16 15h.01" />
      <path d="M16 19h.01" />
    </symbol>
    <symbol id="cloud-sun-rain" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
      <path d="M11 20v2" />
      <path d="M7 19v2" />
    </symbol>
    <symbol id="cloud-sun" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="M20 12h2" />
      <path d="m19.07 4.93-1.41 1.41" />
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </symbol>
    <symbol id="cloud-sync" viewBox="0 0 24 24">
      <path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" />
      <path d="M17 22v-4h-4" />
      <path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" />
      <path d="M7 10v4h4" />
      <path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />
    </symbol>
    <symbol id="cloud-upload" viewBox="0 0 24 24">
      <path d="M12 13v8" />
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m8 17 4-4 4 4" />
    </symbol>
    <symbol id="cloud" viewBox="0 0 24 24">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </symbol>
    <symbol id="cloudy" viewBox="0 0 24 24">
      <path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" />
      <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />
    </symbol>
    <symbol id="clover" viewBox="0 0 24 24">
      <path d="M16.17 7.83 2 22" />
      <path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
      <path d="m7.83 7.83 8.34 8.34" />
    </symbol>
    <symbol id="club" viewBox="0 0 24 24">
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </symbol>
    <symbol id="code-xml" viewBox="0 0 24 24">
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </symbol>
    <symbol id="code" viewBox="0 0 24 24">
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </symbol>
    <symbol id="coffee" viewBox="0 0 24 24">
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </symbol>
    <symbol id="cog" viewBox="0 0 24 24">
      <path d="M11 10.27 7 3.34" />
      <path d="m11 13.73-4 6.93" />
      <path d="M12 22v-2" />
      <path d="M12 2v2" />
      <path d="M14 12h8" />
      <path d="m17 20.66-1-1.73" />
      <path d="m17 3.34-1 1.73" />
      <path d="M2 12h2" />
      <path d="m20.66 17-1.73-1" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="12" r="8" />
    </symbol>
    <symbol id="coins" viewBox="0 0 24 24">
      <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
      <path d="M15 6h1v4" />
      <path d="m6.134 14.768.866-.5 2 3.464" />
      <circle cx="16" cy="8" r="6" />
    </symbol>
    <symbol id="columns-2" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 3v18" />
    </symbol>
    <symbol id="columns-3-cog" viewBox="0 0 24 24">
      <path d="M10.6 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v5.6" />
      <path d="m14.305 19.53.923-.382" />
      <path d="M15 3v7.6" />
      <path d="m15.229 16.852-.924-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.773 16.852.922-.383" />
      <path d="m20.773 19.148.922.383" />
      <path d="M9 3v18" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="columns-3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="columns-4" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7.5 3v18" />
      <path d="M12 3v18" />
      <path d="M16.5 3v18" />
    </symbol>
    <symbol id="combine" viewBox="0 0 24 24">
      <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="m7 15 3 3" />
      <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="3" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="command" viewBox="0 0 24 24">
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </symbol>
    <symbol id="compass" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    </symbol>
    <symbol id="component" viewBox="0 0 24 24">
      <path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
      <path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" />
      <path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" />
      <path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" />
    </symbol>
    <symbol id="computer" viewBox="0 0 24 24">
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </symbol>
    <symbol id="concierge-bell" viewBox="0 0 24 24">
      <path d="M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" />
      <path d="M20 16a8 8 0 1 0-16 0" />
      <path d="M12 4v4" />
      <path d="M10 4h4" />
    </symbol>
    <symbol id="cone" viewBox="0 0 24 24">
      <path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" />
      <ellipse cx="12" cy="19" rx="9" ry="3" />
    </symbol>
    <symbol id="construction" viewBox="0 0 24 24">
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </symbol>
    <symbol id="contact-round" viewBox="0 0 24 24">
      <path d="M16 2v2" />
      <path d="M17.915 21a6 6 0 10-12 0" />
      <path d="M8 2v2" />
      <circle cx="12" cy="11" r="4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="contact" viewBox="0 0 24 24">
      <path d="M16 2v2" />
      <path d="M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2" />
      <path d="M8 2v2" />
      <circle cx="12" cy="10" r="3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="container" viewBox="0 0 24 24">
      <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
      <path d="M10 21.9V14L2.1 9.1" />
      <path d="m10 14 11.9-6.9" />
      <path d="M14 19.8v-8.1" />
      <path d="M18 17.5V9.4" />
    </symbol>
    <symbol id="contrast" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 18a6 6 0 0 0 0-12v12z" />
    </symbol>
    <symbol id="cookie" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </symbol>
    <symbol id="cooking-pot" viewBox="0 0 24 24">
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </symbol>
    <symbol id="copy-check" viewBox="0 0 24 24">
      <path d="m12 15 2 2 4-4" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-minus" viewBox="0 0 24 24">
      <line x1="12" x2="18" y1="15" y2="15" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-plus" viewBox="0 0 24 24">
      <line x1="15" x2="15" y1="12" y2="18" />
      <line x1="12" x2="18" y1="15" y2="15" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-slash" viewBox="0 0 24 24">
      <line x1="12" x2="18" y1="18" y2="12" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy-x" viewBox="0 0 24 24">
      <line x1="12" x2="18" y1="12" y2="18" />
      <line x1="12" x2="18" y1="18" y2="12" />
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copy" viewBox="0 0 24 24">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </symbol>
    <symbol id="copyleft" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.17 14.83a4 4 0 1 0 0-5.66" />
    </symbol>
    <symbol id="copyright" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </symbol>
    <symbol id="corner-down-left" viewBox="0 0 24 24">
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
      <path d="m9 10-5 5 5 5" />
    </symbol>
    <symbol id="corner-down-right" viewBox="0 0 24 24">
      <path d="m15 10 5 5-5 5" />
      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </symbol>
    <symbol id="corner-left-down" viewBox="0 0 24 24">
      <path d="m14 15-5 5-5-5" />
      <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </symbol>
    <symbol id="corner-left-up" viewBox="0 0 24 24">
      <path d="M14 9 9 4 4 9" />
      <path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </symbol>
    <symbol id="corner-right-down" viewBox="0 0 24 24">
      <path d="m10 15 5 5 5-5" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </symbol>
    <symbol id="corner-right-up" viewBox="0 0 24 24">
      <path d="m10 9 5-5 5 5" />
      <path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </symbol>
    <symbol id="corner-up-left" viewBox="0 0 24 24">
      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
      <path d="M9 14 4 9l5-5" />
    </symbol>
    <symbol id="corner-up-right" viewBox="0 0 24 24">
      <path d="m15 14 5-5-5-5" />
      <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </symbol>
    <symbol id="cpu" viewBox="0 0 24 24">
      <path d="M12 20v2" />
      <path d="M12 2v2" />
      <path d="M17 20v2" />
      <path d="M17 2v2" />
      <path d="M2 12h2" />
      <path d="M2 17h2" />
      <path d="M2 7h2" />
      <path d="M20 12h2" />
      <path d="M20 17h2" />
      <path d="M20 7h2" />
      <path d="M7 20v2" />
      <path d="M7 2v2" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="creative-commons" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
      <path d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" />
    </symbol>
    <symbol id="credit-card" viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </symbol>
    <symbol id="croissant" viewBox="0 0 24 24">
      <path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" />
      <path d="M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" />
      <path d="M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" />
      <path d="M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" />
      <path d="M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" />
    </symbol>
    <symbol id="crop" viewBox="0 0 24 24">
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </symbol>
    <symbol id="cross" viewBox="0 0 24 24">
      <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
    </symbol>
    <symbol id="crosshair" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" x2="18" y1="12" y2="12" />
      <line x1="6" x2="2" y1="12" y2="12" />
      <line x1="12" x2="12" y1="6" y2="2" />
      <line x1="12" x2="12" y1="22" y2="18" />
    </symbol>
    <symbol id="crown" viewBox="0 0 24 24">
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="cuboid" viewBox="0 0 24 24">
      <path d="M10 22v-8" />
      <path d="M2.336 8.89 10 14l11.715-7.029" />
      <path d="M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z" />
    </symbol>
    <symbol id="cup-soda" viewBox="0 0 24 24">
      <path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" />
      <path d="M5 8h14" />
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
      <path d="m12 8 1-6h2" />
    </symbol>
    <symbol id="currency" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </symbol>
    <symbol id="cylinder" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </symbol>
    <symbol id="dam" viewBox="0 0 24 24">
      <path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <path d="M2 6h4" />
      <path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" />
    </symbol>
    <symbol id="database-arrow-down" viewBox="0 0 24 24">
      <path d="m16 19 3 3 3-3" />
      <path d="M19 16v6" />
      <path d="M21 12.536V5" />
      <path d="M3 12A9 3 0 0 0 15.182 14.806" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-arrow-up" viewBox="0 0 24 24">
      <path d="M19 22v-6" />
      <path d="M21 12.536V5" />
      <path d="m22 19-3-3-3 3" />
      <path d="M3 12A9 3 0 0 0 14.457 14.886" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-backup" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 12a9 3 0 0 0 5 2.69" />
      <path d="M21 9.3V5" />
      <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
      <path d="M12 12v4h4" />
      <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
    </symbol>
    <symbol id="database-check" viewBox="0 0 24 24">
      <path d="m16 19 2 2 4-4" />
      <path d="M21 13.127V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-minus" viewBox="0 0 24 24">
      <path d="M21 15V5" />
      <path d="M22 19h-6" />
      <path d="M3 12A9 3 0 0 0 21 12" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-plus" viewBox="0 0 24 24">
      <path d="M19 16v6" />
      <path d="M21 12.536V5" />
      <path d="M22 19h-6" />
      <path d="M3 12A9 3 0 0 0 15.1824 14.8061" />
      <path d="M3 5V19A9 3 0 0 0 13.318 21.968" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-search" viewBox="0 0 24 24">
      <path d="M21 11.693V5" />
      <path d="m22 22-1.875-1.875" />
      <path d="M3 12a9 3 0 0 0 8.697 2.998" />
      <path d="M3 5v14a9 3 0 0 0 9.28 2.999" />
      <circle cx="18" cy="18" r="3" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-x" viewBox="0 0 24 24">
      <path d="m17 17 5 5" />
      <path d="M19.323 13.744A9 3 0 0 0 21 12" />
      <path d="M21 13.127V5" />
      <path d="m22 17-5 5" />
      <path d="M3 12A9 3 0 0 0 13.563 14.954" />
      <path d="M3 5V19A9 3 0 0 0 13 21.981" />
      <ellipse cx="12" cy="5" rx="9" ry="3" />
    </symbol>
    <symbol id="database-zap" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 15 21.84" />
      <path d="M21 5V8" />
      <path d="M21 12L18 17H22L19 22" />
      <path d="M3 12A9 3 0 0 0 14.59 14.87" />
    </symbol>
    <symbol id="database" viewBox="0 0 24 24">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </symbol>
    <symbol id="decimals-arrow-left" viewBox="0 0 24 24">
      <path d="m13 21-3-3 3-3" />
      <path d="M20 18H10" />
      <path d="M3 11h.01" />
      <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </symbol>
    <symbol id="decimals-arrow-right" viewBox="0 0 24 24">
      <path d="M10 18h10" />
      <path d="m17 21 3-3-3-3" />
      <path d="M3 11h.01" />
      <rect x="15" y="3" width="5" height="8" rx="2.5" />
      <rect x="6" y="3" width="5" height="8" rx="2.5" />
    </symbol>
    <symbol id="delete" viewBox="0 0 24 24">
      <path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
      <path d="m12 9 6 6" />
      <path d="m18 9-6 6" />
    </symbol>
    <symbol id="dessert" viewBox="0 0 24 24">
      <path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" />
      <path d="M20.804 14.869a9 9 0 0 1-17.608 0" />
      <circle cx="12" cy="4" r="2" />
    </symbol>
    <symbol id="diameter" viewBox="0 0 24 24">
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
      <path d="M6.48 3.66a10 10 0 0 1 13.86 13.86" />
      <path d="m6.41 6.41 11.18 11.18" />
      <path d="M3.66 6.48a10 10 0 0 0 13.86 13.86" />
    </symbol>
    <symbol id="diamond-minus" viewBox="0 0 24 24">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="diamond-percent" viewBox="0 0 24 24">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
      <path d="M9.2 9.2h.01" />
      <path d="m14.5 9.5-5 5" />
      <path d="M14.7 14.8h.01" />
    </symbol>
    <symbol id="diamond-plus" viewBox="0 0 24 24">
      <path d="M12 8v8" />
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="diamond" viewBox="0 0 24 24">
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </symbol>
    <symbol id="dice-1" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="dice-2" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M15 9h.01" />
      <path d="M9 15h.01" />
    </symbol>
    <symbol id="dice-3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M12 12h.01" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="dice-4" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M8 8h.01" />
      <path d="M8 16h.01" />
      <path d="M16 16h.01" />
    </symbol>
    <symbol id="dice-5" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M8 8h.01" />
      <path d="M8 16h.01" />
      <path d="M16 16h.01" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="dice-6" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M16 8h.01" />
      <path d="M16 12h.01" />
      <path d="M16 16h.01" />
      <path d="M8 8h.01" />
      <path d="M8 12h.01" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="dices" viewBox="0 0 24 24">
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
      <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <path d="M6 18h.01" />
      <path d="M10 14h.01" />
      <path d="M15 6h.01" />
      <path d="M18 9h.01" />
    </symbol>
    <symbol id="diff" viewBox="0 0 24 24">
      <path d="M12 3v14" />
      <path d="M5 10h14" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="disc-2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="disc-3" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
    </symbol>
    <symbol id="disc-album" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 12h.01" />
    </symbol>
    <symbol id="disc" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="divide" viewBox="0 0 24 24">
      <circle cx="12" cy="6" r="1" />
      <line x1="5" x2="19" y1="12" y2="12" />
      <circle cx="12" cy="18" r="1" />
    </symbol>
    <symbol id="dna-off" viewBox="0 0 24 24">
      <path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
      <path d="m17 6-2.891-2.891" />
      <path d="M2 15c3.333-3 6.667-3 10-3" />
      <path d="m2 2 20 20" />
      <path d="m20 9 .891.891" />
      <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
      <path d="M3.109 14.109 4 15" />
      <path d="m6.5 12.5 1 1" />
      <path d="m7 18 2.891 2.891" />
      <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
    </symbol>
    <symbol id="dna" viewBox="0 0 24 24">
      <path d="m10 16 1.5 1.5" />
      <path d="m14 8-1.5-1.5" />
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <path d="m16.5 10.5 1 1" />
      <path d="m17 6-2.891-2.891" />
      <path d="M2 15c6.667-6 13.333 0 20-6" />
      <path d="m20 9 .891.891" />
      <path d="M3.109 14.109 4 15" />
      <path d="m6.5 12.5 1 1" />
      <path d="m7 18 2.891 2.891" />
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
    </symbol>
    <symbol id="dock" viewBox="0 0 24 24">
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </symbol>
    <symbol id="dog" viewBox="0 0 24 24">
      <path d="M11.25 16.25h1.5L12 17z" />
      <path d="M16 14v.5" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" />
      <path d="M8 14v.5" />
      <path d="M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
    </symbol>
    <symbol id="dollar-sign" viewBox="0 0 24 24">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </symbol>
    <symbol id="donut" viewBox="0 0 24 24">
      <path d="M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="door-closed-locked" viewBox="0 0 24 24">
      <path d="M10 12h.01" />
      <path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h8" />
      <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
      <rect x="14" y="17" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="door-closed" viewBox="0 0 24 24">
      <path d="M10 12h.01" />
      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
      <path d="M2 20h20" />
    </symbol>
    <symbol id="door-open" viewBox="0 0 24 24">
      <path d="M11 20H2" />
      <path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" />
      <path d="M11 4H8a2 2 0 0 0-2 2v14" />
      <path d="M14 12h.01" />
      <path d="M22 20h-3" />
    </symbol>
    <symbol id="dot" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="download" viewBox="0 0 24 24">
      <path d="M12 15V3" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
    </symbol>
    <symbol id="drafting-compass" viewBox="0 0 24 24">
      <path d="m12.99 6.74 1.93 3.44" />
      <path d="M19.136 12a10 10 0 0 1-14.271 0" />
      <path d="m21 21-2.16-3.84" />
      <path d="m3 21 8.02-14.26" />
      <circle cx="12" cy="5" r="2" />
    </symbol>
    <symbol id="drama" viewBox="0 0 24 24">
      <path d="M10 11h.01" />
      <path d="M14 6h.01" />
      <path d="M18 6h.01" />
      <path d="M6.5 13.1h.01" />
      <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
      <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
      <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
      <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
    </symbol>
    <symbol id="drill" viewBox="0 0 24 24">
      <path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" />
      <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" />
      <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
      <path d="M18 6h4" />
      <path d="m5 10-2 8" />
      <path d="m7 18 2-8" />
    </symbol>
    <symbol id="drone" viewBox="0 0 24 24">
      <path d="M10 10 7 7" />
      <path d="m10 14-3 3" />
      <path d="m14 10 3-3" />
      <path d="m14 14 3 3" />
      <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
      <path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
      <path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
      <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
      <rect x="10" y="8" width="4" height="8" rx="1" />
    </symbol>
    <symbol id="droplet-off" viewBox="0 0 24 24">
      <path d="M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" />
      <path d="m2 2 20 20" />
      <path d="M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" />
    </symbol>
    <symbol id="droplet" viewBox="0 0 24 24">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </symbol>
    <symbol id="droplets" viewBox="0 0 24 24">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </symbol>
    <symbol id="drum" viewBox="0 0 24 24">
      <path d="m2 2 8 8" />
      <path d="m22 2-8 8" />
      <ellipse cx="12" cy="9" rx="10" ry="5" />
      <path d="M7 13.4v7.9" />
      <path d="M12 14v8" />
      <path d="M17 13.4v7.9" />
      <path d="M2 9v8a10 5 0 0 0 20 0V9" />
    </symbol>
    <symbol id="drumstick" viewBox="0 0 24 24">
      <path d="M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" />
      <path d="m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" />
    </symbol>
    <symbol id="dumbbell" viewBox="0 0 24 24">
      <path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" />
      <path d="m2.5 21.5 1.4-1.4" />
      <path d="m20.1 3.9 1.4-1.4" />
      <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" />
      <path d="m9.6 14.4 4.8-4.8" />
    </symbol>
    <symbol id="ear-off" viewBox="0 0 24 24">
      <path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" />
      <path d="M6 8.5c0-.75.13-1.47.36-2.14" />
      <path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" />
      <path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="ear" viewBox="0 0 24 24">
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
    </symbol>
    <symbol id="earth-lock" viewBox="0 0 24 24">
      <path d="M7 3.34V5a3 3 0 0 0 3 3" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M12 2a10 10 0 1 0 9.54 13" />
      <path d="M20 6V4a2 2 0 1 0-4 0v2" />
      <rect width="8" height="5" x="14" y="6" rx="1" />
    </symbol>
    <symbol id="earth" viewBox="0 0 24 24">
      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
      <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
      <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="eclipse" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </symbol>
    <symbol id="egg-fried" viewBox="0 0 24 24">
      <circle cx="11.5" cy="12.5" r="3.5" />
      <path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" />
    </symbol>
    <symbol id="egg-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" />
      <path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" />
    </symbol>
    <symbol id="egg" viewBox="0 0 24 24">
      <path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" />
    </symbol>
    <symbol id="eject" viewBox="0 0 24 24">
      <path d="M4 13a1 1 0 0 1-.72-1.695l7.257-7.668a2 2 0 0 1 2.926 0l7.256 7.668A1 1 0 0 1 20 13z" />
      <rect x="3" y="17" width="18" height="4" rx="1" />
    </symbol>
    <symbol id="ellipse" viewBox="0 0 24 24">
      <ellipse cx="12" cy="12" rx="10" ry="6" />
    </symbol>
    <symbol id="ellipsis-vertical" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </symbol>
    <symbol id="ellipsis" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </symbol>
    <symbol id="equal-approximately" viewBox="0 0 24 24">
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
      <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
    </symbol>
    <symbol id="equal-not" viewBox="0 0 24 24">
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
      <line x1="19" x2="5" y1="5" y2="19" />
    </symbol>
    <symbol id="equal" viewBox="0 0 24 24">
      <line x1="5" x2="19" y1="9" y2="9" />
      <line x1="5" x2="19" y1="15" y2="15" />
    </symbol>
    <symbol id="eraser" viewBox="0 0 24 24">
      <path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
      <path d="m5.082 11.09 8.828 8.828" />
    </symbol>
    <symbol id="ethernet-port" viewBox="0 0 24 24">
      <path d="M10 8v1" />
      <path d="M14 8v1" />
      <path d="M18 8v1" />
      <path d="M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z" />
      <path d="M6 8v1" />
    </symbol>
    <symbol id="euro" viewBox="0 0 24 24">
      <path d="M4 10h12" />
      <path d="M4 14h9" />
      <path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" />
    </symbol>
    <symbol id="ev-charger" viewBox="0 0 24 24">
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
      <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
      <path d="M2 21h13" />
      <path d="M3 7h11" />
      <path d="m9 11-2 3h3l-2 3" />
    </symbol>
    <symbol id="expand" viewBox="0 0 24 24">
      <path d="m15 15 6 6" />
      <path d="m15 9 6-6" />
      <path d="M21 16v5h-5" />
      <path d="M21 8V3h-5" />
      <path d="M3 16v5h5" />
      <path d="m3 21 6-6" />
      <path d="M3 8V3h5" />
      <path d="M9 9 3 3" />
    </symbol>
    <symbol id="external-link" viewBox="0 0 24 24">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </symbol>
    <symbol id="eye-closed" viewBox="0 0 24 24">
      <path d="m15 18-.722-3.25" />
      <path d="M2 8a10.645 10.645 0 0 0 20 0" />
      <path d="m20 15-1.726-2.05" />
      <path d="m4 15 1.726-2.05" />
      <path d="m9 18 .722-3.25" />
    </symbol>
    <symbol id="eye-dashed" viewBox="0 0 24 24">
      <path d="M13.054 18.946a11 11 0 0 1-2.11 0" />
      <path d="M13.054 5.054a11 11 0 0 0-2.11-.001" />
      <path d="M17.072 6.274a11 11 0 0 1 1.753 1.173" />
      <path d="M18.825 16.552a11 11 0 0 1-1.753 1.174" />
      <path d="M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955" />
      <path d="M21.485 10.697a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954" />
      <path d="M5.173 7.448a11 11 0 0 1 1.753-1.174" />
      <path d="M6.926 17.726a11 11 0 0 1-1.753-1.174" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="eye-off" viewBox="0 0 24 24">
      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="eye" viewBox="0 0 24 24">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="face-angry" viewBox="0 0 24 24">
      <path d="M15 11V9.416" />
      <path d="M17 9a5 5 0 00-3 1" />
      <path d="M7 9a5 5 0 013 1" />
      <path d="M9 11V9.416" />
      <path d="M9 16a5 5 0 016.001 0" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-expressionless" viewBox="0 0 24 24">
      <path d="M14 10h2" />
      <path d="M8 10h2" />
      <path d="M8 16h8" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-grinning" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302" />
      <path d="M9 10V9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-neutral" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M8 16h8" />
      <path d="M9 10V9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-slightly-frowning" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M9 10V9" />
      <path d="M9 16a5 5 0 016 0" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="face-slightly-smiling-plus" viewBox="0 0 24 24">
      <path d="M13.267 2.08a10 10 0 108.653 8.653" />
      <path d="M15 10V9" />
      <path d="M16 5h6" />
      <path d="M16.472 15a6 6 0 01-8.943 0" />
      <path d="M19 2v6" />
      <path d="M9 10V9" />
    </symbol>
    <symbol id="face-slightly-smiling" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M16.472 15a6 6 0 01-8.943 0" />
      <path d="M9 10V9" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="factory" viewBox="0 0 24 24">
      <path d="M12 16h.01" />
      <path d="M16 16h.01" />
      <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      <path d="M8 16h.01" />
    </symbol>
    <symbol id="fan" viewBox="0 0 24 24">
      <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
      <path d="M12 12v.01" />
    </symbol>
    <symbol id="fast-forward" viewBox="0 0 24 24">
      <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
      <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
    </symbol>
    <symbol id="feather" viewBox="0 0 24 24">
      <path d="M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z" />
      <path d="M16 8 2 22" />
      <path d="M17.488 15H9" />
    </symbol>
    <symbol id="fence" viewBox="0 0 24 24">
      <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <path d="M6 8h4" />
      <path d="M6 18h4" />
      <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <path d="M14 8h4" />
      <path d="M14 18h4" />
      <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    </symbol>
    <symbol id="ferris-wheel" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v4" />
      <path d="m6.8 15-3.5 2" />
      <path d="m20.7 7-3.5 2" />
      <path d="M6.8 9 3.3 7" />
      <path d="m20.7 17-3.5-2" />
      <path d="m9 22 3-8 3 8" />
      <path d="M8 22h8" />
      <path d="M18 18.7a9 9 0 1 0-12 0" />
    </symbol>
    <symbol id="file-archive" viewBox="0 0 24 24">
      <path d="M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 12v-1" />
      <path d="M8 18v-2" />
      <path d="M8 7V6" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="file-axis-3d" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m8 18 4-4" />
      <path d="M8 10v8h8" />
    </symbol>
    <symbol id="file-badge" viewBox="0 0 24 24">
      <path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" />
      <circle cx="6" cy="14" r="3" />
    </symbol>
    <symbol id="file-box" viewBox="0 0 24 24">
      <path d="M14 2v5a1 1 0 001 1h5" />
      <path d="M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804" />
      <path d="M2.264 13.752 7 16.5l4.737-2.748" />
      <path d="M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z" />
      <path d="M7 16.5V22" />
    </symbol>
    <symbol id="file-braces-corner" viewBox="0 0 24 24">
      <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" />
      <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" />
    </symbol>
    <symbol id="file-braces" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" />
      <path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
    </symbol>
    <symbol id="file-chart-column-increasing" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 18v-2" />
      <path d="M12 18v-4" />
      <path d="M16 18v-6" />
    </symbol>
    <symbol id="file-chart-column" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 18v-1" />
      <path d="M12 18v-6" />
      <path d="M16 18v-3" />
    </symbol>
    <symbol id="file-chart-line" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m16 13-3.5 3.5-2-2L8 17" />
    </symbol>
    <symbol id="file-chart-pie" viewBox="0 0 24 24">
      <path d="M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M4.017 11.512a6 6 0 1 0 8.466 8.475" />
      <path d="M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" />
    </symbol>
    <symbol id="file-check-corner" viewBox="0 0 24 24">
      <path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m14 20 2 2 4-4" />
    </symbol>
    <symbol id="file-check" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m9 15 2 2 4-4" />
    </symbol>
    <symbol id="file-clock" viewBox="0 0 24 24">
      <path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 14v2.2l1.6 1" />
      <circle cx="8" cy="16" r="6" />
    </symbol>
    <symbol id="file-code-corner" viewBox="0 0 24 24">
      <path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m5 16-3 3 3 3" />
      <path d="m9 22 3-3-3-3" />
    </symbol>
    <symbol id="file-code" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 12.5 8 15l2 2.5" />
      <path d="m14 12.5 2 2.5-2 2.5" />
    </symbol>
    <symbol id="file-cog" viewBox="0 0 24 24">
      <path d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" />
      <path d="M20 8v12a2 2 0 0 1-2 2h-4.182" />
      <path d="m3.305 19.53.923-.382" />
      <path d="M4 10.592V4a2 2 0 0 1 2-2h8" />
      <path d="m4.228 16.852-.924-.383" />
      <path d="m5.852 15.228-.383-.923" />
      <path d="m5.852 20.772-.383.924" />
      <path d="m8.148 15.228.383-.923" />
      <path d="m8.53 21.696-.382-.924" />
      <path d="m9.773 16.852.922-.383" />
      <path d="m9.773 19.148.922.383" />
      <circle cx="7" cy="18" r="3" />
    </symbol>
    <symbol id="file-diff" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M9 10h6" />
      <path d="M12 13V7" />
      <path d="M9 17h6" />
    </symbol>
    <symbol id="file-digit" viewBox="0 0 24 24">
      <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 16h2v6" />
      <path d="M10 22h4" />
      <rect x="2" y="16" width="4" height="6" rx="2" />
    </symbol>
    <symbol id="file-down" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M12 18v-6" />
      <path d="m9 15 3 3 3-3" />
    </symbol>
    <symbol id="file-exclamation-point" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="file-headphone" viewBox="0 0 24 24">
      <path d="M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" />
    </symbol>
    <symbol id="file-heart" viewBox="0 0 24 24">
      <path d="M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z" />
    </symbol>
    <symbol id="file-image" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <circle cx="10" cy="12" r="2" />
      <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" />
    </symbol>
    <symbol id="file-input" viewBox="0 0 24 24">
      <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M2 15h10" />
      <path d="m9 18 3-3-3-3" />
    </symbol>
    <symbol id="file-key" viewBox="0 0 24 24">
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M4 12v6" />
      <path d="M4 14h2" />
      <path d="M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" />
      <circle cx="4" cy="20" r="2" />
    </symbol>
    <symbol id="file-lock" viewBox="0 0 24 24">
      <path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 17v-2a2 2 0 0 0-4 0v2" />
      <rect width="8" height="5" x="3" y="17" rx="1" />
    </symbol>
    <symbol id="file-minus-corner" viewBox="0 0 24 24">
      <path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M14 18h6" />
    </symbol>
    <symbol id="file-minus" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 15h6" />
    </symbol>
    <symbol id="file-music" viewBox="0 0 24 24">
      <path d="M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 20v-7l3 1.474" />
      <circle cx="6" cy="20" r="2" />
    </symbol>
    <symbol id="file-output" viewBox="0 0 24 24">
      <path d="M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m5 11-3 3" />
      <path d="m5 17-3-3h10" />
    </symbol>
    <symbol id="file-pen-line" viewBox="0 0 24 24">
      <path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z" />
      <path d="M14.487 7.858A1 1 0 0 1 14 7V2" />
      <path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516" />
      <path d="M8 18h1" />
    </symbol>
    <symbol id="file-pen" viewBox="0 0 24 24">
      <path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z" />
    </symbol>
    <symbol id="file-play" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" />
    </symbol>
    <symbol id="file-plus-corner" viewBox="0 0 24 24">
      <path d="M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M14 19h6" />
      <path d="M17 16v6" />
    </symbol>
    <symbol id="file-plus" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M9 15h6" />
      <path d="M12 18v-6" />
    </symbol>
    <symbol id="file-question-mark" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M12 17h.01" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </symbol>
    <symbol id="file-scan" viewBox="0 0 24 24">
      <path d="M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M16 14a2 2 0 0 0-2 2" />
      <path d="M16 22a2 2 0 0 1-2-2" />
      <path d="M20 14a2 2 0 0 1 2 2" />
      <path d="M20 22a2 2 0 0 0 2-2" />
    </symbol>
    <symbol id="file-search-corner" viewBox="0 0 24 24">
      <path d="M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m21 22-2.88-2.88" />
      <circle cx="16" cy="17" r="3" />
    </symbol>
    <symbol id="file-search" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <circle cx="11.5" cy="14.5" r="2.5" />
      <path d="M13.3 16.3 15 18" />
    </symbol>
    <symbol id="file-signal" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 15h.01" />
      <path d="M11.5 13.5a2.5 2.5 0 0 1 0 3" />
      <path d="M15 12a5 5 0 0 1 0 6" />
    </symbol>
    <symbol id="file-sliders" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 12h8" />
      <path d="M10 11v2" />
      <path d="M8 17h8" />
      <path d="M14 16v2" />
    </symbol>
    <symbol id="file-spreadsheet" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
      <path d="M8 17h2" />
      <path d="M14 17h2" />
    </symbol>
    <symbol id="file-stack" viewBox="0 0 24 24">
      <path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" />
      <path d="M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" />
      <path d="M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="file-symlink" viewBox="0 0 24 24">
      <path d="M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m10 18 3-3-3-3" />
    </symbol>
    <symbol id="file-terminal" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m8 16 2-2-2-2" />
      <path d="M12 18h4" />
    </symbol>
    <symbol id="file-text" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </symbol>
    <symbol id="file-type-corner" viewBox="0 0 24 24">
      <path d="M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" />
      <path d="M6 22h2" />
      <path d="M7 14v8" />
    </symbol>
    <symbol id="file-type" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M11 18h2" />
      <path d="M12 12v6" />
      <path d="M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" />
    </symbol>
    <symbol id="file-up" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M12 12v6" />
      <path d="m15 15-3-3-3 3" />
    </symbol>
    <symbol id="file-user" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M16 22a4 4 0 0 0-8 0" />
      <circle cx="12" cy="15" r="3" />
    </symbol>
    <symbol id="file-video-camera" viewBox="0 0 24 24">
      <path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" />
      <rect width="7" height="6" x="3" y="16" rx="1" />
    </symbol>
    <symbol id="file-volume" viewBox="0 0 24 24">
      <path d="M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M12 15a5 5 0 0 1 0 6" />
      <path d="M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z" />
    </symbol>
    <symbol id="file-x-corner" viewBox="0 0 24 24">
      <path d="M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m15 17 5 5" />
      <path d="m20 17-5 5" />
    </symbol>
    <symbol id="file-x" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="m14.5 12.5-5 5" />
      <path d="m9.5 12.5 5 5" />
    </symbol>
    <symbol id="file" viewBox="0 0 24 24">
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    </symbol>
    <symbol id="files" viewBox="0 0 24 24">
      <path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
      <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" />
      <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" />
    </symbol>
    <symbol id="film" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </symbol>
    <symbol id="fingerprint-pattern" viewBox="0 0 24 24">
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </symbol>
    <symbol id="fire-extinguisher" viewBox="0 0 24 24">
      <path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
      <path d="M9 18h8" />
      <path d="M18 3h-3" />
      <path d="M11 3a6 6 0 0 0-6 6v11" />
      <path d="M5 13h4" />
      <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
    </symbol>
    <symbol id="fish-off" viewBox="0 0 24 24">
      <path d="M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" />
    </symbol>
    <symbol id="fish-symbol" viewBox="0 0 24 24">
      <path d="M2 16s9-15 20-4C11 23 2 8 2 8" />
    </symbol>
    <symbol id="fish" viewBox="0 0 24 24">
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </symbol>
    <symbol id="fishing-hook" viewBox="0 0 24 24">
      <path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" />
      <path d="M20.414 8.586 22 7" />
      <circle cx="19" cy="10" r="2" />
    </symbol>
    <symbol id="fishing-rod" viewBox="0 0 24 24">
      <path d="M4 11h1" />
      <path d="M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" />
      <circle cx="18" cy="18" r="2" />
    </symbol>
    <symbol id="flag-off" viewBox="0 0 24 24">
      <path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
      <path d="m2 2 20 20" />
      <path d="M4 22V4" />
      <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
    </symbol>
    <symbol id="flag-triangle-left" viewBox="0 0 24 24">
      <path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" />
    </symbol>
    <symbol id="flag-triangle-right" viewBox="0 0 24 24">
      <path d="M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" />
    </symbol>
    <symbol id="flag" viewBox="0 0 24 24">
      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
    </symbol>
    <symbol id="flame-kindling" viewBox="0 0 24 24">
      <path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" />
      <path d="m5 22 14-4" />
      <path d="m5 18 14 4" />
    </symbol>
    <symbol id="flame" viewBox="0 0 24 24">
      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
    </symbol>
    <symbol id="flashlight-off" viewBox="0 0 24 24">
      <path d="M11.652 6H18" />
      <path d="M12 13v1" />
      <path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" />
      <path d="m2 2 20 20" />
      <path d="M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" />
    </symbol>
    <symbol id="flashlight" viewBox="0 0 24 24">
      <path d="M12 13v1" />
      <path d="M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z" />
      <path d="M6 6h12" />
    </symbol>
    <symbol id="flask-conical-off" viewBox="0 0 24 24">
      <path d="M10 2v2.343" />
      <path d="M14 2v6.343" />
      <path d="m2 2 20 20" />
      <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" />
      <path d="M6.453 15H15" />
      <path d="M8.5 2h7" />
    </symbol>
    <symbol id="flask-conical" viewBox="0 0 24 24">
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
      <path d="M6.453 15h11.094" />
      <path d="M8.5 2h7" />
    </symbol>
    <symbol id="flask-round" viewBox="0 0 24 24">
      <path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
      <path d="M5 15h14" />
      <path d="M8.5 2h7" />
    </symbol>
    <symbol id="flip-horizontal-2" viewBox="0 0 24 24">
      <path d="m3 7 5 5-5 5V7" />
      <path d="m21 7-5 5 5 5V7" />
      <path d="M12 20v2" />
      <path d="M12 14v2" />
      <path d="M12 8v2" />
      <path d="M12 2v2" />
    </symbol>
    <symbol id="flip-vertical-2" viewBox="0 0 24 24">
      <path d="m17 3-5 5-5-5h10" />
      <path d="m17 21-5-5-5 5h10" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </symbol>
    <symbol id="flower-2" viewBox="0 0 24 24">
      <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
      <circle cx="12" cy="8" r="2" />
      <path d="M12 10v12" />
      <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
      <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    </symbol>
    <symbol id="flower" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </symbol>
    <symbol id="focus" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </symbol>
    <symbol id="fold-horizontal" viewBox="0 0 24 24">
      <path d="M2 12h6" />
      <path d="M22 12h-6" />
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="m19 9-3 3 3 3" />
      <path d="m5 15 3-3-3-3" />
    </symbol>
    <symbol id="fold-vertical" viewBox="0 0 24 24">
      <path d="M12 22v-6" />
      <path d="M12 8V2" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="m15 19-3-3-3 3" />
      <path d="m15 5-3 3-3-3" />
    </symbol>
    <symbol id="folder-archive" viewBox="0 0 24 24">
      <circle cx="15" cy="19" r="2" />
      <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" />
      <path d="M15 11v-1" />
      <path d="M15 17v-2" />
    </symbol>
    <symbol id="folder-bookmark" viewBox="0 0 24 24">
      <path d="M12 6v8l3-3 3 3V6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
    </symbol>
    <symbol id="folder-check" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="m9 13 2 2 4-4" />
    </symbol>
    <symbol id="folder-clock" viewBox="0 0 24 24">
      <path d="M16 14v2.2l1.6 1" />
      <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" />
      <circle cx="16" cy="16" r="6" />
    </symbol>
    <symbol id="folder-closed" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M2 10h20" />
    </symbol>
    <symbol id="folder-code" viewBox="0 0 24 24">
      <path d="M10 10.5 8 13l2 2.5" />
      <path d="m14 10.5 2 2.5-2 2.5" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
    </symbol>
    <symbol id="folder-cog" viewBox="0 0 24 24">
      <path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" />
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="folder-dot" viewBox="0 0 24 24">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="1" />
    </symbol>
    <symbol id="folder-down" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M12 10v6" />
      <path d="m15 13-3 3-3-3" />
    </symbol>
    <symbol id="folder-git-2" viewBox="0 0 24 24">
      <path d="M18 19a5 5 0 0 1-5-5v8" />
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
      <circle cx="13" cy="12" r="2" />
      <circle cx="20" cy="19" r="2" />
    </symbol>
    <symbol id="folder-git" viewBox="0 0 24 24">
      <circle cx="12" cy="13" r="2" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M14 13h3" />
      <path d="M7 13h3" />
    </symbol>
    <symbol id="folder-heart" viewBox="0 0 24 24">
      <path d="M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417" />
      <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
    </symbol>
    <symbol id="folder-input" viewBox="0 0 24 24">
      <path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
      <path d="M2 13h10" />
      <path d="m9 16 3-3-3-3" />
    </symbol>
    <symbol id="folder-kanban" viewBox="0 0 24 24">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <path d="M8 10v4" />
      <path d="M12 10v2" />
      <path d="M16 10v6" />
    </symbol>
    <symbol id="folder-key" viewBox="0 0 24 24">
      <path d="M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" />
      <path d="M19 12v6" />
      <path d="M19 14h2" />
      <circle cx="19" cy="20" r="2" />
    </symbol>
    <symbol id="folder-lock" viewBox="0 0 24 24">
      <rect width="8" height="5" x="14" y="17" rx="1" />
      <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" />
      <path d="M20 17v-2a2 2 0 1 0-4 0v2" />
    </symbol>
    <symbol id="folder-minus" viewBox="0 0 24 24">
      <path d="M9 13h6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </symbol>
    <symbol id="folder-open-dot" viewBox="0 0 24 24">
      <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
      <circle cx="14" cy="15" r="1" />
    </symbol>
    <symbol id="folder-open" viewBox="0 0 24 24">
      <path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="folder-output" viewBox="0 0 24 24">
      <path d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" />
      <path d="M2 13h10" />
      <path d="m5 10-3 3 3 3" />
    </symbol>
    <symbol id="folder-pen" viewBox="0 0 24 24">
      <path d="M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" />
      <path d="M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </symbol>
    <symbol id="folder-plus" viewBox="0 0 24 24">
      <path d="M12 10v6" />
      <path d="M9 13h6" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </symbol>
    <symbol id="folder-root" viewBox="0 0 24 24">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      <circle cx="12" cy="13" r="2" />
      <path d="M12 15v5" />
    </symbol>
    <symbol id="folder-search-2" viewBox="0 0 24 24">
      <circle cx="11.5" cy="12.5" r="2.5" />
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M13.3 14.3 15 16" />
    </symbol>
    <symbol id="folder-search" viewBox="0 0 24 24">
      <path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" />
      <path d="m21 21-1.9-1.9" />
      <circle cx="17" cy="17" r="3" />
    </symbol>
    <symbol id="folder-symlink" viewBox="0 0 24 24">
      <path d="M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" />
      <path d="m8 16 3-3-3-3" />
    </symbol>
    <symbol id="folder-sync" viewBox="0 0 24 24">
      <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
      <path d="M12 10v4h4" />
      <path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
      <path d="M22 22v-4h-4" />
      <path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
    </symbol>
    <symbol id="folder-tree" viewBox="0 0 24 24">
      <path d="M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
      <path d="M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" />
      <path d="M3 5a2 2 0 0 0 2 2h3" />
      <path d="M3 3v13a2 2 0 0 0 2 2h3" />
    </symbol>
    <symbol id="folder-up" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="M12 10v6" />
      <path d="m9 13 3-3 3 3" />
    </symbol>
    <symbol id="folder-x" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
      <path d="m9.5 10.5 5 5" />
      <path d="m14.5 10.5-5 5" />
    </symbol>
    <symbol id="folder" viewBox="0 0 24 24">
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </symbol>
    <symbol id="folders" viewBox="0 0 24 24">
      <path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" />
      <path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" />
    </symbol>
    <symbol id="footprints" viewBox="0 0 24 24">
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </symbol>
    <symbol id="forklift" viewBox="0 0 24 24">
      <path d="M12 12H5a2 2 0 0 0-2 2v5" />
      <path d="M15 19h7" />
      <path d="M16 19V2" />
      <path d="M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" />
      <path d="M7 19h4" />
      <circle cx="13" cy="19" r="2" />
      <circle cx="5" cy="19" r="2" />
    </symbol>
    <symbol id="form" viewBox="0 0 24 24">
      <path d="M4 14h6" />
      <path d="M4 2h10" />
      <rect x="4" y="18" width="16" height="4" rx="1" />
      <rect x="4" y="6" width="16" height="4" rx="1" />
    </symbol>
    <symbol id="forward" viewBox="0 0 24 24">
      <path d="m15 17 5-5-5-5" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </symbol>
    <symbol id="frame" viewBox="0 0 24 24">
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </symbol>
    <symbol id="fuel" viewBox="0 0 24 24">
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" />
      <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" />
      <path d="M2 21h13" />
      <path d="M3 9h11" />
    </symbol>
    <symbol id="fullscreen" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="10" height="8" x="7" y="8" rx="1" />
    </symbol>
    <symbol id="funnel-plus" viewBox="0 0 24 24">
      <path d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" />
      <path d="M16 6h6" />
      <path d="M19 3v6" />
    </symbol>
    <symbol id="funnel-x" viewBox="0 0 24 24">
      <path d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" />
      <path d="m16.5 3.5 5 5" />
      <path d="m21.5 3.5-5 5" />
    </symbol>
    <symbol id="funnel" viewBox="0 0 24 24">
      <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
    </symbol>
    <symbol id="gallery-horizontal-end" viewBox="0 0 24 24">
      <path d="M2 7v10" />
      <path d="M6 5v14" />
      <rect width="12" height="18" x="10" y="3" rx="2" />
    </symbol>
    <symbol id="gallery-horizontal" viewBox="0 0 24 24">
      <path d="M2 3v18" />
      <rect width="12" height="18" x="6" y="3" rx="2" />
      <path d="M22 3v18" />
    </symbol>
    <symbol id="gallery-thumbnails" viewBox="0 0 24 24">
      <rect width="18" height="14" x="3" y="3" rx="2" />
      <path d="M4 21h1" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
      <path d="M19 21h1" />
    </symbol>
    <symbol id="gallery-vertical-end" viewBox="0 0 24 24">
      <path d="M7 2h10" />
      <path d="M5 6h14" />
      <rect width="18" height="12" x="3" y="10" rx="2" />
    </symbol>
    <symbol id="gallery-vertical" viewBox="0 0 24 24">
      <path d="M3 2h18" />
      <rect width="18" height="12" x="3" y="6" rx="2" />
      <path d="M3 22h18" />
    </symbol>
    <symbol id="gamepad-2" viewBox="0 0 24 24">
      <line x1="6" x2="10" y1="11" y2="11" />
      <line x1="8" x2="8" y1="9" y2="13" />
      <line x1="15" x2="15.01" y1="12" y2="12" />
      <line x1="18" x2="18.01" y1="10" y2="10" />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </symbol>
    <symbol id="gamepad-directional" viewBox="0 0 24 24">
      <path d="M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z" />
      <path d="M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" />
      <path d="M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z" />
      <path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z" />
    </symbol>
    <symbol id="gamepad" viewBox="0 0 24 24">
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="gauge" viewBox="0 0 24 24">
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </symbol>
    <symbol id="gavel" viewBox="0 0 24 24">
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" />
      <path d="m16 16 6-6" />
      <path d="m21.5 10.5-8-8" />
      <path d="m8 8 6-6" />
      <path d="m8.5 7.5 8 8" />
    </symbol>
    <symbol id="gem" viewBox="0 0 24 24">
      <path d="M10.5 3 8 9l4 13 4-13-2.5-6" />
      <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" />
      <path d="M2 9h20" />
    </symbol>
    <symbol id="georgian-lari" viewBox="0 0 24 24">
      <path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
      <path d="M13 12V3" />
      <path d="M4 21h16" />
      <path d="M9 12V3" />
    </symbol>
    <symbol id="ghost" viewBox="0 0 24 24">
      <path d="M9 10h.01" />
      <path d="M15 10h.01" />
      <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
    </symbol>
    <symbol id="gift" viewBox="0 0 24 24">
      <path d="M12 7v14" />
      <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" />
      <rect x="3" y="7" width="18" height="4" rx="1" />
    </symbol>
    <symbol id="git-branch-minus" viewBox="0 0 24 24">
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <path d="M21 18h-6" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
    </symbol>
    <symbol id="git-branch-plus" viewBox="0 0 24 24">
      <path d="M6 3v12" />
      <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M15 6a9 9 0 0 0-9 9" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="git-branch" viewBox="0 0 24 24">
      <path d="M15 6a9 9 0 0 0-9 9V3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
    </symbol>
    <symbol id="git-commit-horizontal" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <line x1="3" x2="9" y1="12" y2="12" />
      <line x1="15" x2="21" y1="12" y2="12" />
    </symbol>
    <symbol id="git-commit-vertical" viewBox="0 0 24 24">
      <path d="M12 3v6" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 15v6" />
    </symbol>
    <symbol id="git-compare-arrows" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M12 6h5a2 2 0 0 1 2 2v7" />
      <path d="m15 9-3-3 3-3" />
      <circle cx="19" cy="18" r="3" />
      <path d="M12 18H7a2 2 0 0 1-2-2V9" />
      <path d="m9 15 3 3-3 3" />
    </symbol>
    <symbol id="git-compare" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <path d="M11 18H8a2 2 0 0 1-2-2V9" />
    </symbol>
    <symbol id="git-fork" viewBox="0 0 24 24">
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
      <path d="M12 12v3" />
    </symbol>
    <symbol id="git-graph" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </symbol>
    <symbol id="git-merge-conflict" viewBox="0 0 24 24">
      <path d="M12 6h4a2 2 0 0 1 2 2v7" />
      <path d="M6 12v9" />
      <path d="M9 3 3 9" />
      <path d="M9 9 3 3" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="git-merge" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M6 21V9a9 9 0 0 0 9 9" />
    </symbol>
    <symbol id="git-pull-request-arrow" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v12" />
      <circle cx="19" cy="18" r="3" />
      <path d="m15 9-3-3 3-3" />
      <path d="M12 6h5a2 2 0 0 1 2 2v7" />
    </symbol>
    <symbol id="git-pull-request-closed" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v12" />
      <path d="m21 3-6 6" />
      <path d="m21 9-6-6" />
      <path d="M18 11.5V15" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="git-pull-request-create-arrow" viewBox="0 0 24 24">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v12" />
      <path d="m15 9-3-3 3-3" />
      <path d="M12 6h5a2 2 0 0 1 2 2v3" />
      <path d="M19 15v6" />
      <path d="M22 18h-6" />
    </symbol>
    <symbol id="git-pull-request-create" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <path d="M6 9v12" />
      <path d="M13 6h3a2 2 0 0 1 2 2v3" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="git-pull-request-draft" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M18 6V5" />
      <path d="M18 11v-1" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </symbol>
    <symbol id="git-pull-request" viewBox="0 0 24 24">
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </symbol>
    <symbol id="glass-water" viewBox="0 0 24 24">
      <path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </symbol>
    <symbol id="glasses" viewBox="0 0 24 24">
      <circle cx="6" cy="15" r="4" />
      <circle cx="18" cy="15" r="4" />
      <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
      <path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
      <path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
    </symbol>
    <symbol id="globe-check" viewBox="0 0 24 24">
      <path d="m15 6 2 2 4-4" />
      <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
    </symbol>
    <symbol id="globe-lock" viewBox="0 0 24 24">
      <path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
      <path d="M2 12h8.5" />
      <path d="M20 6V4a2 2 0 1 0-4 0v2" />
      <rect width="8" height="5" x="14" y="6" rx="1" />
    </symbol>
    <symbol id="globe-off" viewBox="0 0 24 24">
      <path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" />
      <path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" />
      <path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" />
      <path d="M17.656 12H22" />
      <path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" />
      <path d="M2 12h10" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="globe-x" viewBox="0 0 24 24">
      <path d="m16 3 5 5" />
      <path d="M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" />
      <path d="m21 3-5 5" />
    </symbol>
    <symbol id="globe" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </symbol>
    <symbol id="goal" viewBox="0 0 24 24">
      <path d="M12 13V2l8 4-8 4" />
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
    </symbol>
    <symbol id="gpu" viewBox="0 0 24 24">
      <path d="M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" />
      <path d="M2 21V3" />
      <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" />
      <circle cx="16" cy="11" r="2" />
      <circle cx="8" cy="11" r="2" />
    </symbol>
    <symbol id="graduation-cap" viewBox="0 0 24 24">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </symbol>
    <symbol id="grape" viewBox="0 0 24 24">
      <path d="M22 5V2l-5.89 5.89" />
      <circle cx="16.6" cy="15.89" r="3" />
      <circle cx="8.11" cy="7.4" r="3" />
      <circle cx="12.35" cy="11.65" r="3" />
      <circle cx="13.91" cy="5.85" r="3" />
      <circle cx="18.15" cy="10.09" r="3" />
      <circle cx="6.56" cy="13.2" r="3" />
      <circle cx="10.8" cy="17.44" r="3" />
      <circle cx="5" cy="19" r="3" />
    </symbol>
    <symbol id="grid-2x2-check" viewBox="0 0 24 24">
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="grid-2x2-plus" viewBox="0 0 24 24">
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="M16 19h6" />
      <path d="M19 22v-6" />
    </symbol>
    <symbol id="grid-2x2-x" viewBox="0 0 24 24">
      <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" />
      <path d="m16 16 5 5" />
      <path d="m16 21 5-5" />
    </symbol>
    <symbol id="grid-2x2" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="grid-3x2" viewBox="0 0 24 24">
      <path d="M15 3v18" />
      <path d="M3 12h18" />
      <path d="M9 3v18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="grid-3x3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="grip-horizontal" viewBox="0 0 24 24">
      <circle cx="12" cy="9" r="1" />
      <circle cx="19" cy="9" r="1" />
      <circle cx="5" cy="9" r="1" />
      <circle cx="12" cy="15" r="1" />
      <circle cx="19" cy="15" r="1" />
      <circle cx="5" cy="15" r="1" />
    </symbol>
    <symbol id="grip-vertical" viewBox="0 0 24 24">
      <circle cx="9" cy="12" r="1" />
      <circle cx="9" cy="5" r="1" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="15" cy="5" r="1" />
      <circle cx="15" cy="19" r="1" />
    </symbol>
    <symbol id="grip" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="1" />
      <circle cx="19" cy="5" r="1" />
      <circle cx="5" cy="5" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="19" r="1" />
      <circle cx="19" cy="19" r="1" />
      <circle cx="5" cy="19" r="1" />
    </symbol>
    <symbol id="group" viewBox="0 0 24 24">
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </symbol>
    <symbol id="guitar" viewBox="0 0 24 24">
      <path d="m11.9 12.1 4.514-4.514" />
      <path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" />
      <path d="m6 16 2 2" />
      <path d="M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" />
    </symbol>
    <symbol id="ham" viewBox="0 0 24 24">
      <path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" />
      <path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" />
      <path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" />
      <path d="m8.5 16.5-1-1" />
    </symbol>
    <symbol id="hamburger" viewBox="0 0 24 24">
      <path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" />
      <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" />
      <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" />
      <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
    </symbol>
    <symbol id="hammer" viewBox="0 0 24 24">
      <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
      <path d="m18 15 4-4" />
      <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
    </symbol>
    <symbol id="hand-coins" viewBox="0 0 24 24">
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
      <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 16 6 6" />
      <circle cx="16" cy="9" r="2.9" />
      <circle cx="6" cy="5" r="3" />
    </symbol>
    <symbol id="hand-fist" viewBox="0 0 24 24">
      <path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" />
      <path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" />
      <path d="M9 5A2 2 0 1 0 5 5V10" />
      <path d="M9 7V4A2 2 0 1 1 13 4V7.268" />
    </symbol>
    <symbol id="hand-grab" viewBox="0 0 24 24">
      <path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
      <path d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
      <path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
    </symbol>
    <symbol id="hand-heart" viewBox="0 0 24 24">
      <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" />
      <path d="m2 15 6 6" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
    </symbol>
    <symbol id="hand-helping" viewBox="0 0 24 24">
      <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
      <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 13 6 6" />
    </symbol>
    <symbol id="hand-metal" viewBox="0 0 24 24">
      <path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
      <path d="M14 11V9a2 2 0 1 0-4 0v2" />
      <path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
      <path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
    </symbol>
    <symbol id="hand-platter" viewBox="0 0 24 24">
      <path d="M12 3V2" />
      <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" />
      <path d="M2 14h12a2 2 0 0 1 0 4h-2" />
      <path d="M4 10h16" />
      <path d="M5 10a7 7 0 0 1 14 0" />
      <path d="M5 14v6a1 1 0 0 1-1 1H2" />
    </symbol>
    <symbol id="hand" viewBox="0 0 24 24">
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </symbol>
    <symbol id="handbag" viewBox="0 0 24 24">
      <path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" />
      <path d="M8 11V6a4 4 0 0 1 8 0v5" />
    </symbol>
    <symbol id="handshake" viewBox="0 0 24 24">
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </symbol>
    <symbol id="hard-drive-download" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="m16 6-4 4-4-4" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h.01" />
      <path d="M10 18h.01" />
    </symbol>
    <symbol id="hard-drive-upload" viewBox="0 0 24 24">
      <path d="m16 6-4-4-4 4" />
      <path d="M12 2v8" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h.01" />
      <path d="M10 18h.01" />
    </symbol>
    <symbol id="hard-drive" viewBox="0 0 24 24">
      <path d="M10 16h.01" />
      <path d="M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      <path d="M21.946 12.013H2.054" />
      <path d="M6 16h.01" />
    </symbol>
    <symbol id="hard-hat" viewBox="0 0 24 24">
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <rect x="2" y="15" width="20" height="4" rx="1" />
    </symbol>
    <symbol id="hash" viewBox="0 0 24 24">
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </symbol>
    <symbol id="hat-glasses" viewBox="0 0 24 24">
      <path d="M14 18a2 2 0 0 0-4 0" />
      <path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" />
      <path d="M2 11h20" />
      <circle cx="17" cy="18" r="3" />
      <circle cx="7" cy="18" r="3" />
    </symbol>
    <symbol id="haze" viewBox="0 0 24 24">
      <path d="m5.2 6.2 1.4 1.4" />
      <path d="M2 13h2" />
      <path d="M20 13h2" />
      <path d="m17.4 7.6 1.4-1.4" />
      <path d="M22 17H2" />
      <path d="M22 21H2" />
      <path d="M16 13a4 4 0 0 0-8 0" />
      <path d="M12 5V2.5" />
    </symbol>
    <symbol id="hd" viewBox="0 0 24 24">
      <path d="M10 12H6" />
      <path d="M10 15V9" />
      <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" />
      <path d="M6 15V9" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="hdmi-port" viewBox="0 0 24 24">
      <path d="M22 9a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h.5a2 2 0 011.6.8l.3.4A2 2 0 007 16h10a2 2 0 001.6-.8l.3-.4a2 2 0 011.6-.8h.5a1 1 0 001-1z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="heading-1" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="m17 12 3-2v8" />
    </symbol>
    <symbol id="heading-2" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </symbol>
    <symbol id="heading-3" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
      <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </symbol>
    <symbol id="heading-4" viewBox="0 0 24 24">
      <path d="M12 18V6" />
      <path d="M17 10v3a1 1 0 0 0 1 1h3" />
      <path d="M21 10v8" />
      <path d="M4 12h8" />
      <path d="M4 18V6" />
    </symbol>
    <symbol id="heading-5" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <path d="M17 13v-3h4" />
      <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
    </symbol>
    <symbol id="heading-6" viewBox="0 0 24 24">
      <path d="M4 12h8" />
      <path d="M4 18V6" />
      <path d="M12 18V6" />
      <circle cx="19" cy="16" r="2" />
      <path d="M20 10c-2 2-3 3.5-3 6" />
    </symbol>
    <symbol id="heading" viewBox="0 0 24 24">
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </symbol>
    <symbol id="headphone-off" viewBox="0 0 24 24">
      <path d="M21 14h-1.343" />
      <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
      <path d="m2 2 20 20" />
      <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
    </symbol>
    <symbol id="headphones" viewBox="0 0 24 24">
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </symbol>
    <symbol id="headset" viewBox="0 0 24 24">
      <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
      <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
    </symbol>
    <symbol id="heart-crack" viewBox="0 0 24 24">
      <path d="M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15" />
      <path d="M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z" />
    </symbol>
    <symbol id="heart-handshake" viewBox="0 0 24 24">
      <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" />
    </symbol>
    <symbol id="heart-minus" viewBox="0 0 24 24">
      <path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" />
      <path d="M15 15h6" />
    </symbol>
    <symbol id="heart-off" viewBox="0 0 24 24">
      <path d="M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" />
      <path d="m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="heart-plus" viewBox="0 0 24 24">
      <path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
      <path d="M15 15h6" />
      <path d="M18 12v6" />
    </symbol>
    <symbol id="heart-pulse" viewBox="0 0 24 24">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      <path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </symbol>
    <symbol id="heart-x" viewBox="0 0 24 24">
      <path d="m15.5 12.5 5 5" />
      <path d="m20.5 12.5-5 5" />
      <path d="M21.955 8.774a5.5 5.5 0 0 0-9.546-2.95.6.6 0 0 1-.818 0A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.508 5.332a2 2 0 0 0 2.57.352" />
    </symbol>
    <symbol id="heart" viewBox="0 0 24 24">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </symbol>
    <symbol id="heater" viewBox="0 0 24 24">
      <path d="M11 8c2-3-2-3 0-6" />
      <path d="M15.5 8c2-3-2-3 0-6" />
      <path d="M6 10h.01" />
      <path d="M6 14h.01" />
      <path d="M10 16v-4" />
      <path d="M14 16v-4" />
      <path d="M18 16v-4" />
      <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
      <path d="M5 20v2" />
      <path d="M19 20v2" />
    </symbol>
    <symbol id="helicopter" viewBox="0 0 24 24">
      <path d="M11 17v4" />
      <path d="M14 3v8a2 2 0 0 0 2 2h5.865" />
      <path d="M17 17v4" />
      <path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" />
      <path d="M2 10v5" />
      <path d="M6 3h16" />
      <path d="M7 21h14" />
      <path d="M8 13H2" />
    </symbol>
    <symbol id="hexagon" viewBox="0 0 24 24">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </symbol>
    <symbol id="highlighter" viewBox="0 0 24 24">
      <path d="m9 11-6 6v3h9l3-3" />
      <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
    </symbol>
    <symbol id="hop-off" viewBox="0 0 24 24">
      <path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" />
      <path d="M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" />
      <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" />
      <path d="M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" />
      <path d="M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" />
      <path d="M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" />
      <path d="M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" />
      <path d="M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="hop" viewBox="0 0 24 24">
      <path d="M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" />
      <path d="M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" />
      <path d="M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" />
      <path d="M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" />
      <path d="M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" />
      <path d="M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" />
      <path d="M4.93 4.93 3 3a.7.7 0 0 1 0-1" />
      <path d="M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" />
    </symbol>
    <symbol id="hospital" viewBox="0 0 24 24">
      <path d="M12 7v4" />
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M14 9h-4" />
      <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
    </symbol>
    <symbol id="hotel" viewBox="0 0 24 24">
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </symbol>
    <symbol id="hourglass" viewBox="0 0 24 24">
      <path d="M5 22h14" />
      <path d="M5 2h14" />
      <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
      <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
    </symbol>
    <symbol id="house-heart" viewBox="0 0 24 24">
      <path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </symbol>
    <symbol id="house-plug" viewBox="0 0 24 24">
      <path d="M10 12V8.964" />
      <path d="M14 12V8.964" />
      <path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
      <path d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" />
    </symbol>
    <symbol id="house-plus" viewBox="0 0 24 24">
      <path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" />
      <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" />
      <path d="M15 18h6" />
      <path d="M18 15v6" />
    </symbol>
    <symbol id="house-wifi" viewBox="0 0 24 24">
      <path d="M9.5 13.866a4 4 0 0 1 5 .01" />
      <path d="M12 17h.01" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M7 10.754a8 8 0 0 1 10 0" />
    </symbol>
    <symbol id="house" viewBox="0 0 24 24">
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </symbol>
    <symbol id="ice-cream-bowl" viewBox="0 0 24 24">
      <path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" />
      <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" />
      <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" />
    </symbol>
    <symbol id="ice-cream-cone" viewBox="0 0 24 24">
      <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
      <path d="M17 7A5 5 0 0 0 7 7" />
      <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
    </symbol>
    <symbol id="id-card-lanyard" viewBox="0 0 24 24">
      <path d="M13.5 8h-3" />
      <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
      <path d="M16.899 22A5 5 0 0 0 7.1 22" />
      <path d="m9 2 3 6" />
      <circle cx="12" cy="15" r="3" />
    </symbol>
    <symbol id="id-card" viewBox="0 0 24 24">
      <path d="M16 10h2" />
      <path d="M16 14h2" />
      <path d="M6.17 15a3 3 0 0 1 5.66 0" />
      <circle cx="9" cy="11" r="2" />
      <rect x="2" y="5" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="image-down" viewBox="0 0 24 24">
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19 3 3v-5.5" />
      <path d="m17 22 3-3" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-minus" viewBox="0 0 24 24">
      <path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <line x1="16" x2="22" y1="5" y2="5" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </symbol>
    <symbol id="image-off" viewBox="0 0 24 24">
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
      <line x1="13.5" x2="6" y1="13.5" y2="21" />
      <line x1="18" x2="21" y1="12" y2="15" />
      <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
      <path d="M21 15V5a2 2 0 0 0-2-2H9" />
    </symbol>
    <symbol id="image-play" viewBox="0 0 24 24">
      <path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
      <path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="m6 21 5-5" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-plus" viewBox="0 0 24 24">
      <path d="M16 5h6" />
      <path d="M19 2v6" />
      <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-up" viewBox="0 0 24 24">
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
      <path d="m14 19.5 3-3 3 3" />
      <path d="M17 22v-5.5" />
      <circle cx="9" cy="9" r="2" />
    </symbol>
    <symbol id="image-upscale" viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="M17 21h2a2 2 0 0 0 2-2" />
      <path d="M21 12v3" />
      <path d="m21 3-5 5" />
      <path d="M3 7V5a2 2 0 0 1 2-2" />
      <path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
      <path d="M9 3h3" />
      <rect x="3" y="11" width="10" height="10" rx="1" />
    </symbol>
    <symbol id="image" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </symbol>
    <symbol id="images" viewBox="0 0 24 24">
      <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" />
      <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
      <circle cx="13" cy="7" r="1" fill="currentColor" />
      <rect x="8" y="2" width="14" height="14" rx="2" />
    </symbol>
    <symbol id="import" viewBox="0 0 24 24">
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </symbol>
    <symbol id="inbox" viewBox="0 0 24 24">
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </symbol>
    <symbol id="indian-rupee" viewBox="0 0 24 24">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 8.5 8" />
      <path d="M6 13h3" />
      <path d="M9 13c6.667 0 6.667-10 0-10" />
    </symbol>
    <symbol id="infinity" viewBox="0 0 24 24">
      <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
    </symbol>
    <symbol id="info" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </symbol>
    <symbol id="inspection-panel" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h.01" />
      <path d="M17 7h.01" />
      <path d="M7 17h.01" />
      <path d="M17 17h.01" />
    </symbol>
    <symbol id="italic" viewBox="0 0 24 24">
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </symbol>
    <symbol id="iteration-ccw" viewBox="0 0 24 24">
      <path d="m16 14 4 4-4 4" />
      <path d="M20 10a8 8 0 1 0-8 8h8" />
    </symbol>
    <symbol id="iteration-cw" viewBox="0 0 24 24">
      <path d="M4 10a8 8 0 1 1 8 8H4" />
      <path d="m8 22-4-4 4-4" />
    </symbol>
    <symbol id="japanese-yen" viewBox="0 0 24 24">
      <path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
      <path d="M6 15h12" />
      <path d="M6 11h12" />
    </symbol>
    <symbol id="joystick" viewBox="0 0 24 24">
      <path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" />
      <path d="M6 15v-2" />
      <path d="M12 15V9" />
      <circle cx="12" cy="6" r="3" />
    </symbol>
    <symbol id="kanban" viewBox="0 0 24 24">
      <path d="M5 3v14" />
      <path d="M12 3v8" />
      <path d="M19 3v18" />
    </symbol>
    <symbol id="kayak" viewBox="0 0 24 24">
      <path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" />
      <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" />
      <path d="m6.707 6.707 10.586 10.586" />
      <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />
    </symbol>
    <symbol id="key-round" viewBox="0 0 24 24">
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="key-square" viewBox="0 0 24 24">
      <path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" />
      <path d="m14 7 3 3" />
      <path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" />
    </symbol>
    <symbol id="key" viewBox="0 0 24 24">
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </symbol>
    <symbol id="keyboard-music" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h4" />
      <path d="M14 8h.01" />
      <path d="M18 8h.01" />
      <path d="M2 12h20" />
      <path d="M6 12v4" />
      <path d="M10 12v4" />
      <path d="M14 12v4" />
      <path d="M18 12v4" />
    </symbol>
    <symbol id="keyboard-off" viewBox="0 0 24 24">
      <path d="M 20 4 A2 2 0 0 1 22 6" />
      <path d="M 22 6 L 22 16.41" />
      <path d="M 7 16 L 16 16" />
      <path d="M 9.69 4 L 20 4" />
      <path d="M14 8h.01" />
      <path d="M18 8h.01" />
      <path d="m2 2 20 20" />
      <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
      <path d="M6 8h.01" />
      <path d="M8 12h.01" />
    </symbol>
    <symbol id="keyboard" viewBox="0 0 24 24">
      <path d="M10 8h.01" />
      <path d="M12 12h.01" />
      <path d="M14 8h.01" />
      <path d="M16 12h.01" />
      <path d="M18 8h.01" />
      <path d="M6 8h.01" />
      <path d="M7 16h10" />
      <path d="M8 12h.01" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
    </symbol>
    <symbol id="lamp-ceiling" viewBox="0 0 24 24">
      <path d="M12 2v5" />
      <path d="M14.829 15.998a3 3 0 1 1-5.658 0" />
      <path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />
    </symbol>
    <symbol id="lamp-desk" viewBox="0 0 24 24">
      <path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" />
      <path d="m14.207 4.793-3.414 3.414" />
      <path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />
    </symbol>
    <symbol id="lamp-floor" viewBox="0 0 24 24">
      <path d="M12 10v12" />
      <path d="M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" />
      <path d="M9 22h6" />
    </symbol>
    <symbol id="lamp-wall-down" viewBox="0 0 24 24">
      <path d="M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z" />
      <path d="M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M8 6h4a2 2 0 0 1 2 2v5" />
    </symbol>
    <symbol id="lamp-wall-up" viewBox="0 0 24 24">
      <path d="M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z" />
      <path d="M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <path d="M8 18h4a2 2 0 0 0 2-2v-5" />
    </symbol>
    <symbol id="lamp" viewBox="0 0 24 24">
      <path d="M12 12v6" />
      <path d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" />
      <path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="land-plot" viewBox="0 0 24 24">
      <path d="m12 8 6-3-6-3v10" />
      <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" />
      <path d="m6.49 12.85 11.02 6.3" />
      <path d="M17.51 12.85 6.5 19.15" />
    </symbol>
    <symbol id="landmark" viewBox="0 0 24 24">
      <path d="M10 18v-7" />
      <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" />
      <path d="M14 18v-7" />
      <path d="M18 18v-7" />
      <path d="M3 22h18" />
      <path d="M6 18v-7" />
    </symbol>
    <symbol id="languages" viewBox="0 0 24 24">
      <path d="m5 8 6 6" />
      <path d="m4 14 6-6 2-3" />
      <path d="M2 5h12" />
      <path d="M7 2h1" />
      <path d="m22 22-5-10-5 10" />
      <path d="M14 18h6" />
    </symbol>
    <symbol id="laptop-minimal-check" viewBox="0 0 24 24">
      <path d="M2 20h20" />
      <path d="m9 10 2 2 4-4" />
      <rect x="3" y="4" width="18" height="12" rx="2" />
    </symbol>
    <symbol id="laptop-minimal" viewBox="0 0 24 24">
      <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </symbol>
    <symbol id="laptop" viewBox="0 0 24 24">
      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" />
      <path d="M20.054 15.987H3.946" />
    </symbol>
    <symbol id="lasso-select" viewBox="0 0 24 24">
      <path d="M7 22a5 5 0 0 1-2-4" />
      <path d="M7 16.93c.96.43 1.96.74 2.99.91" />
      <path d="M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" />
      <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      <path d="M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" />
    </symbol>
    <symbol id="lasso" viewBox="0 0 24 24">
      <path d="M3.704 14.467a10 8 0 1 1 3.115 2.375" />
      <path d="M7 22a5 5 0 0 1-2-3.994" />
      <circle cx="5" cy="16" r="2" />
    </symbol>
    <symbol id="layer-arrow-down" viewBox="0 0 24 24">
      <path d="M12 10v10" />
      <path d="M22 10a1 1 0 01-.59.92l-5.077 2.308" />
      <path d="M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316" />
      <path d="m9 17 3 3 3-3" />
    </symbol>
    <symbol id="layer-arrow-up" viewBox="0 0 24 24">
      <path d="M12 14V4" />
      <path d="M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308" />
      <path d="m9 7 3-3 3 3" />
    </symbol>
    <symbol id="layers-2" viewBox="0 0 24 24">
      <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" />
      <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />
    </symbol>
    <symbol id="layers-arrow-down" viewBox="0 0 24 24">
      <path d="M12 7v15" />
      <path d="M2 12a1 1 0 00.58.91l5.093 2.316" />
      <path d="M22 12a1 1 0 01-.59.92l-5.077 2.308" />
      <path d="M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45" />
      <path d="m9 19 3 3 3-3" />
    </symbol>
    <symbol id="layers-arrow-up" viewBox="0 0 24 24">
      <path d="M12 12V2" />
      <path d="M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92" />
      <path d="M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308" />
      <path d="m9 5 3-3 3 3" />
    </symbol>
    <symbol id="layers-minus" viewBox="0 0 24 24">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z" />
      <path d="M16 17h6" />
      <path d="M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18" />
      <path d="M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96" />
      <path d="M22.018 12.004a1 1 0 0 1-.598.916l-.177.08" />
    </symbol>
    <symbol id="layers-plus" viewBox="0 0 24 24">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" />
      <path d="M16 17h6" />
      <path d="M19 14v6" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" />
    </symbol>
    <symbol id="layers" viewBox="0 0 24 24">
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </symbol>
    <symbol id="layout-dashboard" viewBox="0 0 24 24">
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </symbol>
    <symbol id="layout-freeform" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="4" rx="1" />
      <rect width="7" height="7" x="4" y="14" rx="1" />
    </symbol>
    <symbol id="layout-grid" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </symbol>
    <symbol id="layout-list" viewBox="0 0 24 24">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <path d="M14 4h7" />
      <path d="M14 9h7" />
      <path d="M14 15h7" />
      <path d="M14 20h7" />
    </symbol>
    <symbol id="layout-panel-left" viewBox="0 0 24 24">
      <rect width="7" height="18" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </symbol>
    <symbol id="layout-panel-top" viewBox="0 0 24 24">
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
    </symbol>
    <symbol id="layout-template" viewBox="0 0 24 24">
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </symbol>
    <symbol id="leaf" viewBox="0 0 24 24">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </symbol>
    <symbol id="leafy-green" viewBox="0 0 24 24">
      <path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" />
      <path d="M2 22 17 7" />
    </symbol>
    <symbol id="lectern" viewBox="0 0 24 24">
      <path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" />
      <path d="M18 6V3a1 1 0 0 0-1-1h-3" />
      <rect width="8" height="12" x="8" y="10" rx="1" />
    </symbol>
    <symbol id="lens-concave" viewBox="0 0 24 24">
      <path d="M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" />
    </symbol>
    <symbol id="lens-convex" viewBox="0 0 24 24">
      <path d="M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z" />
    </symbol>
    <symbol id="library-big" viewBox="0 0 24 24">
      <rect width="8" height="18" x="3" y="3" rx="1" />
      <path d="M7 3v18" />
      <path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" />
    </symbol>
    <symbol id="library" viewBox="0 0 24 24">
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </symbol>
    <symbol id="life-buoy" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="m4.93 4.93 4.24 4.24" />
      <path d="m14.83 9.17 4.24-4.24" />
      <path d="m14.83 14.83 4.24 4.24" />
      <path d="m9.17 14.83-4.24 4.24" />
      <circle cx="12" cy="12" r="4" />
    </symbol>
    <symbol id="ligature" viewBox="0 0 24 24">
      <path d="M14 12h2v8" />
      <path d="M14 20h4" />
      <path d="M6 12h4" />
      <path d="M6 20h4" />
      <path d="M8 20V8a4 4 0 0 1 7.464-2" />
    </symbol>
    <symbol id="lightbulb-off" viewBox="0 0 24 24">
      <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
      <path d="m2 2 20 20" />
      <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </symbol>
    <symbol id="lightbulb" viewBox="0 0 24 24">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </symbol>
    <symbol id="line-dot-right-horizontal" viewBox="0 0 24 24">
      <path d="M 3 12 L 15 12" />
      <circle cx="18" cy="12" r="3" />
    </symbol>
    <symbol id="line-squiggle" viewBox="0 0 24 24">
      <path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" />
    </symbol>
    <symbol id="line-style" viewBox="0 0 24 24">
      <path d="M11 5h2" />
      <path d="M15 12h6" />
      <path d="M19 5h2" />
      <path d="M3 12h6" />
      <path d="M3 19h18" />
      <path d="M3 5h2" />
    </symbol>
    <symbol id="link-2-off" viewBox="0 0 24 24">
      <path d="M9 17H7A5 5 0 0 1 7 7" />
      <path d="M15 7h2a5 5 0 0 1 4 8" />
      <line x1="8" x2="12" y1="12" y2="12" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="link-2" viewBox="0 0 24 24">
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </symbol>
    <symbol id="link" viewBox="0 0 24 24">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </symbol>
    <symbol id="list-check" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M11 19H3" />
      <path d="m15 18 2 2 4-4" />
    </symbol>
    <symbol id="list-checks" viewBox="0 0 24 24">
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
      <path d="m3 17 2 2 4-4" />
      <path d="m3 7 2 2 4-4" />
    </symbol>
    <symbol id="list-chevrons-down-up" viewBox="0 0 24 24">
      <path d="M3 5h8" />
      <path d="M3 12h8" />
      <path d="M3 19h8" />
      <path d="m15 5 3 3 3-3" />
      <path d="m15 19 3-3 3 3" />
    </symbol>
    <symbol id="list-chevrons-up-down" viewBox="0 0 24 24">
      <path d="M3 5h8" />
      <path d="M3 12h8" />
      <path d="M3 19h8" />
      <path d="m15 8 3-3 3 3" />
      <path d="m15 16 3 3 3-3" />
    </symbol>
    <symbol id="list-collapse" viewBox="0 0 24 24">
      <path d="M10 5h11" />
      <path d="M10 12h11" />
      <path d="M10 19h11" />
      <path d="m3 10 3-3-3-3" />
      <path d="m3 20 3-3-3-3" />
    </symbol>
    <symbol id="list-end" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M9 19H3" />
      <path d="m16 16-3 3 3 3" />
      <path d="M21 5v12a2 2 0 0 1-2 2h-6" />
    </symbol>
    <symbol id="list-filter-plus" viewBox="0 0 24 24">
      <path d="M12 5H2" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
      <path d="M16 5h6" />
      <path d="M19 8V2" />
    </symbol>
    <symbol id="list-filter" viewBox="0 0 24 24">
      <path d="M2 5h20" />
      <path d="M6 12h12" />
      <path d="M9 19h6" />
    </symbol>
    <symbol id="list-indent-decrease" viewBox="0 0 24 24">
      <path d="M21 5H11" />
      <path d="M21 12H11" />
      <path d="M21 19H11" />
      <path d="m7 8-4 4 4 4" />
    </symbol>
    <symbol id="list-indent-increase" viewBox="0 0 24 24">
      <path d="M21 5H11" />
      <path d="M21 12H11" />
      <path d="M21 19H11" />
      <path d="m3 8 4 4-4 4" />
    </symbol>
    <symbol id="list-minus" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="M21 12h-6" />
    </symbol>
    <symbol id="list-music" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M11 19H3" />
      <path d="M21 16V5" />
      <circle cx="18" cy="16" r="3" />
    </symbol>
    <symbol id="list-ordered" viewBox="0 0 24 24">
      <path d="M11 5h10" />
      <path d="M11 12h10" />
      <path d="M11 19h10" />
      <path d="M4 4h1v5" />
      <path d="M4 9h2" />
      <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" />
    </symbol>
    <symbol id="list-plus" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="M18 9v6" />
      <path d="M21 12h-6" />
    </symbol>
    <symbol id="list-restart" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M7 12H3" />
      <path d="M7 19H3" />
      <path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
      <path d="M11 10v4h4" />
    </symbol>
    <symbol id="list-sort-ascending" viewBox="0 0 24 24">
      <path d="M3 19h18" />
      <path d="M15 12H3" />
      <path d="M9 5H3" />
    </symbol>
    <symbol id="list-sort-descending" viewBox="0 0 24 24">
      <path d="M15 12H3" />
      <path d="M3 5h18" />
      <path d="M9 19H3" />
    </symbol>
    <symbol id="list-start" viewBox="0 0 24 24">
      <path d="M3 5h6" />
      <path d="M3 12h13" />
      <path d="M3 19h13" />
      <path d="m16 8-3-3 3-3" />
      <path d="M21 19V7a2 2 0 0 0-2-2h-6" />
    </symbol>
    <symbol id="list-todo" viewBox="0 0 24 24">
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
      <path d="m3 17 2 2 4-4" />
      <rect x="3" y="4" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="list-tree" viewBox="0 0 24 24">
      <path d="M8 5h13" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
      <path d="M3 10a2 2 0 0 0 2 2h3" />
      <path d="M3 5v12a2 2 0 0 0 2 2h3" />
    </symbol>
    <symbol id="list-video" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M10 12H3" />
      <path d="M10 19H3" />
      <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
    </symbol>
    <symbol id="list-x" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M11 12H3" />
      <path d="M16 19H3" />
      <path d="m15.5 9.5 5 5" />
      <path d="m20.5 9.5-5 5" />
    </symbol>
    <symbol id="list" viewBox="0 0 24 24">
      <path d="M3 5h.01" />
      <path d="M3 12h.01" />
      <path d="M3 19h.01" />
      <path d="M8 5h13" />
      <path d="M8 12h13" />
      <path d="M8 19h13" />
    </symbol>
    <symbol id="loader-circle" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </symbol>
    <symbol id="loader-pinwheel" viewBox="0 0 24 24">
      <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
      <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
      <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="loader" viewBox="0 0 24 24">
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </symbol>
    <symbol id="locate-fixed" viewBox="0 0 24 24">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="locate-off" viewBox="0 0 24 24">
      <path d="M12 19v3" />
      <path d="M12 2v3" />
      <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
      <path d="M19 12h3" />
      <path d="M2 12h3" />
      <path d="m2 2 20 20" />
      <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
    </symbol>
    <symbol id="locate" viewBox="0 0 24 24">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </symbol>
    <symbol id="lock-keyhole-open" viewBox="0 0 24 24">
      <circle cx="12" cy="16" r="1" />
      <rect width="18" height="12" x="3" y="10" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 9.33-2.5" />
    </symbol>
    <symbol id="lock-keyhole" viewBox="0 0 24 24">
      <circle cx="12" cy="16" r="1" />
      <rect x="3" y="10" width="18" height="12" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </symbol>
    <symbol id="lock-open" viewBox="0 0 24 24">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </symbol>
    <symbol id="lock" viewBox="0 0 24 24">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </symbol>
    <symbol id="log-in" viewBox="0 0 24 24">
      <path d="m10 17 5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    </symbol>
    <symbol id="log-out" viewBox="0 0 24 24">
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </symbol>
    <symbol id="logs" viewBox="0 0 24 24">
      <path d="M3 5h1" />
      <path d="M3 12h1" />
      <path d="M3 19h1" />
      <path d="M8 5h1" />
      <path d="M8 12h1" />
      <path d="M8 19h1" />
      <path d="M13 5h8" />
      <path d="M13 12h8" />
      <path d="M13 19h8" />
    </symbol>
    <symbol id="lollipop" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" />
    </symbol>
    <symbol id="luggage" viewBox="0 0 24 24">
      <path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </symbol>
    <symbol id="magnet" viewBox="0 0 24 24">
      <path d="m12 15 4 4" />
      <path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" />
      <path d="m5 8 4 4" />
    </symbol>
    <symbol id="mail-badge" viewBox="0 0 24 24">
      <path d="M22 7.7V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8.25" />
      <path d="M12 12.996a1.94 1.94 0 0 1-1.03-.296L2 7" />
      <path d="m20.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" />
      <circle cx="19" cy="14" r="3" />
    </symbol>
    <symbol id="mail-check" viewBox="0 0 24 24">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="mail-minus" viewBox="0 0 24 24">
      <path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M16 19h6" />
    </symbol>
    <symbol id="mail-open" viewBox="0 0 24 24">
      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
    </symbol>
    <symbol id="mail-plus" viewBox="0 0 24 24">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M19 16v6" />
      <path d="M16 19h6" />
    </symbol>
    <symbol id="mail-question-mark" viewBox="0 0 24 24">
      <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
      <path d="M20 22v.01" />
    </symbol>
    <symbol id="mail-search" viewBox="0 0 24 24">
      <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <circle cx="18" cy="18" r="3" />
      <path d="m22 22-1.5-1.5" />
    </symbol>
    <symbol id="mail-warning" viewBox="0 0 24 24">
      <path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="M20 14v4" />
      <path d="M20 22v.01" />
    </symbol>
    <symbol id="mail-x" viewBox="0 0 24 24">
      <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <path d="m17 17 4 4" />
      <path d="m21 17-4 4" />
    </symbol>
    <symbol id="mail" viewBox="0 0 24 24">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </symbol>
    <symbol id="mailbox" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </symbol>
    <symbol id="mails" viewBox="0 0 24 24">
      <path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" />
      <path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" />
      <rect x="7" y="3" width="15" height="12" rx="2" />
    </symbol>
    <symbol id="map-minus" viewBox="0 0 24 24">
      <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" />
      <path d="M15 5.764V14" />
      <path d="M21 18h-6" />
      <path d="M9 3.236v15" />
    </symbol>
    <symbol id="map-pin-check-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="m9 10 2 2 4-4" />
    </symbol>
    <symbol id="map-pin-check" viewBox="0 0 24 24">
      <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
      <circle cx="12" cy="10" r="3" />
      <path d="m16 18 2 2 4-4" />
    </symbol>
    <symbol id="map-pin-house" viewBox="0 0 24 24">
      <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
      <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
      <path d="M18 22v-3" />
      <circle cx="10" cy="10" r="3" />
    </symbol>
    <symbol id="map-pin-minus-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="map-pin-minus" viewBox="0 0 24 24">
      <path d="M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
      <circle cx="12" cy="10" r="3" />
      <path d="M16 18h6" />
    </symbol>
    <symbol id="map-pin-off" viewBox="0 0 24 24">
      <path d="M12.75 7.09a3 3 0 0 1 2.16 2.16" />
      <path d="M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" />
      <path d="m2 2 20 20" />
      <path d="M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" />
      <path d="M9.13 9.13a3 3 0 0 0 3.74 3.74" />
    </symbol>
    <symbol id="map-pin-pen" viewBox="0 0 24 24">
      <path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <circle cx="10" cy="10" r="3" />
    </symbol>
    <symbol id="map-pin-plus-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="M12 7v6" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="map-pin-plus" viewBox="0 0 24 24">
      <path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
      <circle cx="12" cy="10" r="3" />
      <path d="M16 18h6" />
      <path d="M19 15v6" />
    </symbol>
    <symbol id="map-pin-search" viewBox="0 0 24 24">
      <path d="M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262" />
      <path d="m22 22-1.88-1.88" />
      <circle cx="12" cy="10" r="3" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="map-pin-x-inside" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <path d="m14.5 7.5-5 5" />
      <path d="m9.5 7.5 5 5" />
    </symbol>
    <symbol id="map-pin-x" viewBox="0 0 24 24">
      <path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" />
      <circle cx="12" cy="10" r="3" />
      <path d="m21.5 15.5-5 5" />
      <path d="m21.5 20.5-5-5" />
    </symbol>
    <symbol id="map-pin" viewBox="0 0 24 24">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </symbol>
    <symbol id="map-pinned" viewBox="0 0 24 24">
      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" />
      <circle cx="12" cy="8" r="2" />
      <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" />
    </symbol>
    <symbol id="map-plus" viewBox="0 0 24 24">
      <path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" />
      <path d="M15 5.764V12" />
      <path d="M18 15v6" />
      <path d="M21 18h-6" />
      <path d="M9 3.236v15" />
    </symbol>
    <symbol id="map" viewBox="0 0 24 24">
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </symbol>
    <symbol id="mars-stroke" viewBox="0 0 24 24">
      <path d="m14 6 4 4" />
      <path d="M17 3h4v4" />
      <path d="m21 3-7.75 7.75" />
      <circle cx="9" cy="15" r="6" />
    </symbol>
    <symbol id="mars" viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="m21 3-6.75 6.75" />
      <circle cx="10" cy="14" r="6" />
    </symbol>
    <symbol id="martini" viewBox="0 0 24 24">
      <path d="M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z" />
      <path d="M12 12v10" />
      <path d="M7 22h10" />
    </symbol>
    <symbol id="maximize-2" viewBox="0 0 24 24">
      <path d="M15 3h6v6" />
      <path d="m21 3-7 7" />
      <path d="m3 21 7-7" />
      <path d="M9 21H3v-6" />
    </symbol>
    <symbol id="maximize" viewBox="0 0 24 24">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </symbol>
    <symbol id="medal" viewBox="0 0 24 24">
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </symbol>
    <symbol id="megaphone-off" viewBox="0 0 24 24">
      <path d="M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" />
      <path d="M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
      <path d="m2 2 20 20" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 8v6" />
    </symbol>
    <symbol id="megaphone" viewBox="0 0 24 24">
      <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
      <path d="M8 6v8" />
    </symbol>
    <symbol id="memory-stick" viewBox="0 0 24 24">
      <path d="M12 12v-2" />
      <path d="M12 18v-2" />
      <path d="M16 12v-2" />
      <path d="M16 18v-2" />
      <path d="M2 11h1.5" />
      <path d="M20 18v-2" />
      <path d="M20.5 11H22" />
      <path d="M4 18v-2" />
      <path d="M8 12v-2" />
      <path d="M8 18v-2" />
      <rect x="2" y="6" width="20" height="10" rx="2" />
    </symbol>
    <symbol id="menu" viewBox="0 0 24 24">
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </symbol>
    <symbol id="merge" viewBox="0 0 24 24">
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </symbol>
    <symbol id="message-circle-check" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="message-circle-code" viewBox="0 0 24 24">
      <path d="m10 9-3 3 3 3" />
      <path d="m14 15 3-3-3-3" />
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </symbol>
    <symbol id="message-circle-dashed" viewBox="0 0 24 24">
      <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
      <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
      <path d="M17.609 3.72a10 10 0 0 1 2.69 2.7" />
      <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
      <path d="M20.28 17.61a10 10 0 0 1-2.7 2.69" />
      <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
      <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
      <path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" />
    </symbol>
    <symbol id="message-circle-heart" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" />
    </symbol>
    <symbol id="message-circle-more" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </symbol>
    <symbol id="message-circle-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" />
      <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
    </symbol>
    <symbol id="message-circle-plus" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="message-circle-question-mark" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="message-circle-reply" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="m10 15-3-3 3-3" />
      <path d="M7 12h8a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="message-circle-warning" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </symbol>
    <symbol id="message-circle-x" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="message-circle" viewBox="0 0 24 24">
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </symbol>
    <symbol id="message-square-check" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m9 11 2 2 4-4" />
    </symbol>
    <symbol id="message-square-code" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m10 8-3 3 3 3" />
      <path d="m14 14 3-3-3-3" />
    </symbol>
    <symbol id="message-square-dashed" viewBox="0 0 24 24">
      <path d="M14 3h2" />
      <path d="M16 19h-2" />
      <path d="M2 12v-2" />
      <path d="M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" />
      <path d="M20 19a2 2 0 0 0 2-2v-1" />
      <path d="M22 10v2" />
      <path d="M22 6V5a2 2 0 0 0-2-2" />
      <path d="M4 3a2 2 0 0 0-2 2v1" />
      <path d="M8 19h2" />
      <path d="M8 3h2" />
    </symbol>
    <symbol id="message-square-diff" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M10 15h4" />
      <path d="M10 9h4" />
      <path d="M12 7v4" />
    </symbol>
    <symbol id="message-square-dot" viewBox="0 0 24 24">
      <path d="M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" />
      <circle cx="19" cy="6" r="3" />
    </symbol>
    <symbol id="message-square-heart" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5" />
    </symbol>
    <symbol id="message-square-lock" viewBox="0 0 24 24">
      <path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" />
      <path d="M20 15v-2a2 2 0 0 0-4 0v2" />
      <rect x="14" y="15" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="message-square-more" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 11h.01" />
      <path d="M16 11h.01" />
      <path d="M8 11h.01" />
    </symbol>
    <symbol id="message-square-off" viewBox="0 0 24 24">
      <path d="M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" />
      <path d="m2 2 20 20" />
      <path d="M8.656 3H20a2 2 0 0 1 2 2v11.344" />
    </symbol>
    <symbol id="message-square-plus" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 8v6" />
      <path d="M9 11h6" />
    </symbol>
    <symbol id="message-square-quote" viewBox="0 0 24 24">
      <path d="M14 14a2 2 0 0 0 2-2V8h-2" />
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M8 14a2 2 0 0 0 2-2V8H8" />
    </symbol>
    <symbol id="message-square-reply" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m10 8-3 3 3 3" />
      <path d="M17 14v-1a2 2 0 0 0-2-2H7" />
    </symbol>
    <symbol id="message-square-share" viewBox="0 0 24 24">
      <path d="M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" />
      <path d="M16 3h6v6" />
      <path d="m16 9 6-6" />
    </symbol>
    <symbol id="message-square-text" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M7 11h10" />
      <path d="M7 15h6" />
      <path d="M7 7h8" />
    </symbol>
    <symbol id="message-square-warning" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="M12 15h.01" />
      <path d="M12 7v4" />
    </symbol>
    <symbol id="message-square-x" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      <path d="m14.5 8.5-5 5" />
      <path d="m9.5 8.5 5 5" />
    </symbol>
    <symbol id="message-square" viewBox="0 0 24 24">
      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
    </symbol>
    <symbol id="messages-square" viewBox="0 0 24 24">
      <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
    </symbol>
    <symbol id="metronome" viewBox="0 0 24 24">
      <path d="M12 11.4V9.1" />
      <path d="m12 17 6.59-6.59" />
      <path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" />
      <circle cx="20" cy="9" r="2" />
    </symbol>
    <symbol id="mic-audio-lines" viewBox="0 0 24 24">
      <path d="M10 3v2.341" />
      <path d="M12 17v4" />
      <path d="M14 5v.341" />
      <path d="M18 5v13" />
      <path d="M2 10v3" />
      <path d="M22 10v3" />
      <path d="M6 6v11" />
      <path d="M9 21h6" />
      <rect width="4" height="8" x="10" y="9" rx="2" />
    </symbol>
    <symbol id="mic-off" viewBox="0 0 24 24">
      <path d="M12 19v3" />
      <path d="M15 9.34V5a3 3 0 0 0-5.68-1.33" />
      <path d="M16.95 16.95A7 7 0 0 1 5 12v-2" />
      <path d="M18.89 13.23A7 7 0 0 0 19 12v-2" />
      <path d="m2 2 20 20" />
      <path d="M9 9v3a3 3 0 0 0 5.12 2.12" />
    </symbol>
    <symbol id="mic-signal" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M18 11a6 6 0 00-3-5.197" />
      <path d="M2 11a10 10 0 015-8.662" />
      <path d="M22 11a10 10 0 00-5-8.662" />
      <path d="M6 11a6 6 0 013-5.197" />
      <path d="M9 21h6" />
      <rect x="10" y="9" width="4" height="8" rx="2" />
    </symbol>
    <symbol id="mic-vocal" viewBox="0 0 24 24">
      <path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" />
      <path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" />
      <circle cx="16" cy="7" r="5" />
    </symbol>
    <symbol id="mic" viewBox="0 0 24 24">
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="2" width="6" height="13" rx="3" />
    </symbol>
    <symbol id="microchip" viewBox="0 0 24 24">
      <path d="M10 12h4" />
      <path d="M10 17h4" />
      <path d="M10 7h4" />
      <path d="M18 12h2" />
      <path d="M18 18h2" />
      <path d="M18 6h2" />
      <path d="M4 12h2" />
      <path d="M4 18h2" />
      <path d="M4 6h2" />
      <rect x="6" y="2" width="12" height="20" rx="2" />
    </symbol>
    <symbol id="microscope" viewBox="0 0 24 24">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="microwave" viewBox="0 0 24 24">
      <rect width="20" height="15" x="2" y="4" rx="2" />
      <rect width="8" height="7" x="6" y="8" rx="1" />
      <path d="M18 8v7" />
      <path d="M6 19v2" />
      <path d="M18 19v2" />
    </symbol>
    <symbol id="milestone" viewBox="0 0 24 24">
      <path d="M12 13v8" />
      <path d="M12 3v3" />
      <path d="M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" />
    </symbol>
    <symbol id="milk-off" viewBox="0 0 24 24">
      <path d="M8 2h8" />
      <path d="M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" />
      <path d="M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="milk" viewBox="0 0 24 24">
      <path d="M8 2h8" />
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </symbol>
    <symbol id="minimize-2" viewBox="0 0 24 24">
      <path d="m14 10 7-7" />
      <path d="M20 10h-6V4" />
      <path d="m3 21 7-7" />
      <path d="M4 14h6v6" />
    </symbol>
    <symbol id="minimize" viewBox="0 0 24 24">
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </symbol>
    <symbol id="minus" viewBox="0 0 24 24">
      <path d="M5 12h14" />
    </symbol>
    <symbol id="mirror-rectangular" viewBox="0 0 24 24">
      <path d="M11 6 8 9" />
      <path d="m16 7-8 8" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </symbol>
    <symbol id="mirror-round" viewBox="0 0 24 24">
      <path d="M10 6.6 8.6 8" />
      <path d="M12 18v4" />
      <path d="M15 7.5 9.5 13" />
      <path d="M7 22h10" />
      <circle cx="12" cy="10" r="8" />
    </symbol>
    <symbol id="monitor-check" viewBox="0 0 24 24">
      <path d="m9 10 2 2 4-4" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-cloud" viewBox="0 0 24 24">
      <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="monitor-cog" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="m14.305 7.53.923-.382" />
      <path d="m15.228 4.852-.923-.383" />
      <path d="m16.852 3.228-.383-.924" />
      <path d="m16.852 8.772-.383.923" />
      <path d="m19.148 3.228.383-.924" />
      <path d="m19.53 9.696-.382-.924" />
      <path d="m20.772 4.852.924-.383" />
      <path d="m20.772 7.148.924.383" />
      <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
      <path d="M8 21h8" />
      <circle cx="18" cy="6" r="3" />
    </symbol>
    <symbol id="monitor-dot" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" />
      <path d="M8 21h8" />
      <circle cx="19" cy="6" r="3" />
    </symbol>
    <symbol id="monitor-down" viewBox="0 0 24 24">
      <path d="M12 13V7" />
      <path d="m15 10-3 3-3-3" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-off" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" />
      <path d="m2 2 20 20" />
      <path d="M8 21h8" />
      <path d="M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" />
    </symbol>
    <symbol id="monitor-pause" viewBox="0 0 24 24">
      <path d="M10 13V7" />
      <path d="M14 13V7" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-play" viewBox="0 0 24 24">
      <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="monitor-smartphone" viewBox="0 0 24 24">
      <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <path d="M10 19v-3.96 3.15" />
      <path d="M7 19h5" />
      <rect width="6" height="10" x="16" y="12" rx="2" />
    </symbol>
    <symbol id="monitor-speaker" viewBox="0 0 24 24">
      <path d="M5.5 20H8" />
      <path d="M17 9h.01" />
      <rect width="10" height="16" x="12" y="4" rx="2" />
      <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <circle cx="17" cy="15" r="1" />
    </symbol>
    <symbol id="monitor-stop" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <rect x="9" y="7" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="monitor-up" viewBox="0 0 24 24">
      <path d="m9 10 3-3 3 3" />
      <path d="M12 13V7" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor-x" viewBox="0 0 24 24">
      <path d="m14.5 12.5-5-5" />
      <path d="m9.5 12.5 5-5" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <path d="M12 17v4" />
      <path d="M8 21h8" />
    </symbol>
    <symbol id="monitor" viewBox="0 0 24 24">
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </symbol>
    <symbol id="moon-star" viewBox="0 0 24 24">
      <path d="M18 5h4" />
      <path d="M20 3v4" />
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </symbol>
    <symbol id="moon" viewBox="0 0 24 24">
      <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
    </symbol>
    <symbol id="mosque" viewBox="0 0 24 24">
      <path d="M12.268 2a2 2 0 003.465 2" />
      <path d="M14 5 L14 8" />
      <path d="M16 22v-3a2 2 0 00-4 0v3" />
      <path d="M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13z" />
      <path d="M3 9h4" />
      <path d="M7 22V6a5 5 0 00-2-4 5 5 0 00-2 4v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    </symbol>
    <symbol id="motorbike" viewBox="0 0 24 24">
      <path d="m18 14-1-3" />
      <path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" />
      <path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" />
      <circle cx="19" cy="17" r="3" />
      <circle cx="5" cy="17" r="3" />
    </symbol>
    <symbol id="mountain-snow" viewBox="0 0 24 24">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      <path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" />
    </symbol>
    <symbol id="mountain" viewBox="0 0 24 24">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </symbol>
    <symbol id="mouse-left" viewBox="0 0 24 24">
      <path d="M12 7.318V10" />
      <path d="M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" />
      <circle cx="7" cy="4" r="2" />
    </symbol>
    <symbol id="mouse-off" viewBox="0 0 24 24">
      <path d="M12 6v.343" />
      <path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" />
      <path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" />
      <path d="M22 22 2 2" />
    </symbol>
    <symbol id="mouse-pointer-2-off" viewBox="0 0 24 24">
      <path d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" />
      <path d="M22 2 2 22" />
      <path d="m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" />
    </symbol>
    <symbol id="mouse-pointer-2" viewBox="0 0 24 24">
      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
    </symbol>
    <symbol id="mouse-pointer-ban" viewBox="0 0 24 24">
      <path d="M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" />
      <circle cx="16" cy="16" r="6" />
      <path d="m11.8 11.8 8.4 8.4" />
    </symbol>
    <symbol id="mouse-pointer-click" viewBox="0 0 24 24">
      <path d="M14 4.1 12 6" />
      <path d="m5.1 8-2.9-.8" />
      <path d="m6 12-1.9 2" />
      <path d="M7.2 2.2 8 5.1" />
      <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
    </symbol>
    <symbol id="mouse-pointer" viewBox="0 0 24 24">
      <path d="M12.586 12.586 19 19" />
      <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" />
    </symbol>
    <symbol id="mouse-right" viewBox="0 0 24 24">
      <path d="M12 7.318V10" />
      <path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" />
      <circle cx="17" cy="4" r="2" />
    </symbol>
    <symbol id="mouse" viewBox="0 0 24 24">
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </symbol>
    <symbol id="move-3d" viewBox="0 0 24 24">
      <path d="M5 3v16h16" />
      <path d="m5 19 6-6" />
      <path d="m2 6 3-3 3 3" />
      <path d="m18 16 3 3-3 3" />
    </symbol>
    <symbol id="move-diagonal-2" viewBox="0 0 24 24">
      <path d="M19 13v6h-6" />
      <path d="M5 11V5h6" />
      <path d="m5 5 14 14" />
    </symbol>
    <symbol id="move-diagonal" viewBox="0 0 24 24">
      <path d="M11 19H5v-6" />
      <path d="M13 5h6v6" />
      <path d="M19 5 5 19" />
    </symbol>
    <symbol id="move-down-left" viewBox="0 0 24 24">
      <path d="M11 19H5V13" />
      <path d="M19 5L5 19" />
    </symbol>
    <symbol id="move-down-right" viewBox="0 0 24 24">
      <path d="M19 13V19H13" />
      <path d="M5 5L19 19" />
    </symbol>
    <symbol id="move-down" viewBox="0 0 24 24">
      <path d="M8 18L12 22L16 18" />
      <path d="M12 2V22" />
    </symbol>
    <symbol id="move-horizontal" viewBox="0 0 24 24">
      <path d="m18 8 4 4-4 4" />
      <path d="M2 12h20" />
      <path d="m6 8-4 4 4 4" />
    </symbol>
    <symbol id="move-left" viewBox="0 0 24 24">
      <path d="M6 8L2 12L6 16" />
      <path d="M2 12H22" />
    </symbol>
    <symbol id="move-right" viewBox="0 0 24 24">
      <path d="M18 8L22 12L18 16" />
      <path d="M2 12H22" />
    </symbol>
    <symbol id="move-up-left" viewBox="0 0 24 24">
      <path d="M5 11V5H11" />
      <path d="M5 5L19 19" />
    </symbol>
    <symbol id="move-up-right" viewBox="0 0 24 24">
      <path d="M13 5H19V11" />
      <path d="M19 5L5 19" />
    </symbol>
    <symbol id="move-up" viewBox="0 0 24 24">
      <path d="M8 6L12 2L16 6" />
      <path d="M12 2V22" />
    </symbol>
    <symbol id="move-vertical" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="m8 18 4 4 4-4" />
      <path d="m8 6 4-4 4 4" />
    </symbol>
    <symbol id="move" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="m15 19-3 3-3-3" />
      <path d="m19 9 3 3-3 3" />
      <path d="M2 12h20" />
      <path d="m5 9-3 3 3 3" />
      <path d="m9 5 3-3 3 3" />
    </symbol>
    <symbol id="music-2" viewBox="0 0 24 24">
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </symbol>
    <symbol id="music-3" viewBox="0 0 24 24">
      <circle cx="12" cy="18" r="4" />
      <path d="M16 18V2" />
    </symbol>
    <symbol id="music-4" viewBox="0 0 24 24">
      <path d="M9 18V5l12-2v13" />
      <path d="m9 9 12-2" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </symbol>
    <symbol id="music" viewBox="0 0 24 24">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </symbol>
    <symbol id="navigation-2-off" viewBox="0 0 24 24">
      <path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
      <path d="M14.53 8.88 12 2l-1.17 3.17" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="navigation-2" viewBox="0 0 24 24">
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </symbol>
    <symbol id="navigation-off" viewBox="0 0 24 24">
      <path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
      <path d="M17.39 11.73 22 2l-9.73 4.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="navigation" viewBox="0 0 24 24">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </symbol>
    <symbol id="network" viewBox="0 0 24 24">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </symbol>
    <symbol id="newspaper" viewBox="0 0 24 24">
      <path d="M15 18h-5" />
      <path d="M18 14h-8" />
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
      <rect width="8" height="4" x="10" y="6" rx="1" />
    </symbol>
    <symbol id="nfc" viewBox="0 0 24 24">
      <path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
      <path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
    </symbol>
    <symbol id="non-binary" viewBox="0 0 24 24">
      <path d="M12 2v10" />
      <path d="m8.5 4 7 4" />
      <path d="m8.5 8 7-4" />
      <circle cx="12" cy="17" r="5" />
    </symbol>
    <symbol id="notebook-pen" viewBox="0 0 24 24">
      <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    </symbol>
    <symbol id="notebook-tabs" viewBox="0 0 24 24">
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M15 2v20" />
      <path d="M15 7h5" />
      <path d="M15 12h5" />
      <path d="M15 17h5" />
    </symbol>
    <symbol id="notebook-text" viewBox="0 0 24 24">
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M9.5 8h5" />
      <path d="M9.5 12H16" />
      <path d="M9.5 16H14" />
    </symbol>
    <symbol id="notebook" viewBox="0 0 24 24">
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </symbol>
    <symbol id="notepad-text-dashed" viewBox="0 0 24 24">
      <path d="M8 2v4" />
      <path d="M12 2v4" />
      <path d="M16 2v4" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 12v2" />
      <path d="M20 18v2a2 2 0 0 1-2 2h-1" />
      <path d="M13 22h-2" />
      <path d="M7 22H6a2 2 0 0 1-2-2v-2" />
      <path d="M4 14v-2" />
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M8 10h6" />
      <path d="M8 14h8" />
      <path d="M8 18h5" />
    </symbol>
    <symbol id="notepad-text" viewBox="0 0 24 24">
      <path d="M8 2v4" />
      <path d="M12 2v4" />
      <path d="M16 2v4" />
      <rect width="16" height="18" x="4" y="4" rx="2" />
      <path d="M8 10h6" />
      <path d="M8 14h8" />
      <path d="M8 18h5" />
    </symbol>
    <symbol id="nut-off" viewBox="0 0 24 24">
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" />
      <path d="M19 10v3.343" />
      <path d="M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="nut" viewBox="0 0 24 24">
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </symbol>
    <symbol id="octagon-alert" viewBox="0 0 24 24">
      <path d="M12 16h.01" />
      <path d="M12 8v4" />
      <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" />
    </symbol>
    <symbol id="octagon-minus" viewBox="0 0 24 24">
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="octagon-pause" viewBox="0 0 24 24">
      <path d="M10 15V9" />
      <path d="M14 15V9" />
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
    </symbol>
    <symbol id="octagon-x" viewBox="0 0 24 24">
      <path d="m15 9-6 6" />
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="octagon" viewBox="0 0 24 24">
      <path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
    </symbol>
    <symbol id="omega" viewBox="0 0 24 24">
      <path d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" />
    </symbol>
    <symbol id="option" viewBox="0 0 24 24">
      <path d="M14 3h7" />
      <path d="M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21" />
    </symbol>
    <symbol id="orbit" viewBox="0 0 24 24">
      <path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" />
      <path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </symbol>
    <symbol id="origami" viewBox="0 0 24 24">
      <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
      <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
      <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
    </symbol>
    <symbol id="package-2" viewBox="0 0 24 24">
      <path d="M12 3v6" />
      <path d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" />
      <path d="M3.054 9.013h17.893" />
    </symbol>
    <symbol id="package-check" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="m16 17 2 2 4-4" />
      <path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package-minus" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M16 17h6" />
      <path d="M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package-open" viewBox="0 0 24 24">
      <path d="M12 22v-9" />
      <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
      <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
      <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
    </symbol>
    <symbol id="package-plus" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M16 17h6" />
      <path d="M19 14v6" />
      <path d="M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package-search" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="M20.27 18.27 22 20" />
      <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
      <circle cx="18.5" cy="16.5" r="2.5" />
    </symbol>
    <symbol id="package-x" viewBox="0 0 24 24">
      <path d="M12 22V12" />
      <path d="m16.5 14.5 5 5" />
      <path d="m16.5 19.5 5-5" />
      <path d="M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" />
      <path d="M3.29 7 12 12l8.71-5" />
      <path d="m7.5 4.27 8.997 5.148" />
    </symbol>
    <symbol id="package" viewBox="0 0 24 24">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
      <path d="M12 22V12" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <path d="m7.5 4.27 9 5.15" />
    </symbol>
    <symbol id="paint-bucket" viewBox="0 0 24 24">
      <path d="M11 7 6 2" />
      <path d="M18.992 12H2.041" />
      <path d="M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595" />
      <path d="m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33" />
    </symbol>
    <symbol id="paint-roller" viewBox="0 0 24 24">
      <rect width="16" height="6" x="2" y="2" rx="2" />
      <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect width="4" height="6" x="8" y="16" rx="1" />
    </symbol>
    <symbol id="paintbrush-vertical" viewBox="0 0 24 24">
      <path d="M10 2v2" />
      <path d="M14 2v4" />
      <path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
      <path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" />
    </symbol>
    <symbol id="paintbrush" viewBox="0 0 24 24">
      <path d="m14.622 17.897-10.68-2.913" />
      <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
      <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
    </symbol>
    <symbol id="palette" viewBox="0 0 24 24">
      <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="panda" viewBox="0 0 24 24">
      <path d="M11.25 17.25h1.5L12 18z" />
      <path d="m15 12 2 2" />
      <path d="M18 6.5a.5.5 0 0 0-.5-.5" />
      <path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" />
      <path d="M6 6.5a.495.495 0 0 1 .5-.5" />
      <path d="m9 12-2 2" />
    </symbol>
    <symbol id="panel-bottom-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
      <path d="m15 8-3 3-3-3" />
    </symbol>
    <symbol id="panel-bottom-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M14 15h1" />
      <path d="M19 15h2" />
      <path d="M3 15h2" />
      <path d="M9 15h1" />
    </symbol>
    <symbol id="panel-bottom-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
      <path d="m9 10 3-3 3 3" />
    </symbol>
    <symbol id="panel-bottom" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h18" />
    </symbol>
    <symbol id="panel-left-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="m16 15-3-3 3-3" />
    </symbol>
    <symbol id="panel-left-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 14v1" />
      <path d="M9 19v2" />
      <path d="M9 3v2" />
      <path d="M9 9v1" />
    </symbol>
    <symbol id="panel-left-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="m14 9 3 3-3 3" />
    </symbol>
    <symbol id="panel-left-right-dashed" viewBox="0 0 24 24">
      <path d="M15 10V9" />
      <path d="M15 15v-1" />
      <path d="M15 21v-2" />
      <path d="M15 5V3" />
      <path d="M9 10V9" />
      <path d="M9 15v-1" />
      <path d="M9 21v-2" />
      <path d="M9 5V3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="panel-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </symbol>
    <symbol id="panel-right-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m8 9 3 3-3 3" />
    </symbol>
    <symbol id="panel-right-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 14v1" />
      <path d="M15 19v2" />
      <path d="M15 3v2" />
      <path d="M15 9v1" />
    </symbol>
    <symbol id="panel-right-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
      <path d="m10 15-3-3 3-3" />
    </symbol>
    <symbol id="panel-right" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="panel-top-bottom-dashed" viewBox="0 0 24 24">
      <path d="M14 15h1" />
      <path d="M14 9h1" />
      <path d="M19 15h2" />
      <path d="M19 9h2" />
      <path d="M3 15h2" />
      <path d="M3 9h2" />
      <path d="M9 15h1" />
      <path d="M9 9h1" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="panel-top-close" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 16 3-3 3 3" />
    </symbol>
    <symbol id="panel-top-dashed" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M14 9h1" />
      <path d="M19 9h2" />
      <path d="M3 9h2" />
      <path d="M9 9h1" />
    </symbol>
    <symbol id="panel-top-open" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="m15 14-3 3-3-3" />
    </symbol>
    <symbol id="panel-top" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
    </symbol>
    <symbol id="panels-left-bottom" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="M9 15h12" />
    </symbol>
    <symbol id="panels-right-bottom" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 15h12" />
      <path d="M15 3v18" />
    </symbol>
    <symbol id="panels-top-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </symbol>
    <symbol id="paper-bag" viewBox="0 0 24 24">
      <path d="M5.364 3.848C4 6 3 9.652 3 12.652V19a2 2 0 002 2h14a2 2 0 002-2v-5c0-2.334-1.816-4.668-2.622-7.002" />
      <path d="M7 3h11.379a2 2 0 011.789 1.106l.723 1.447A1 1 0 0119.997 7h-8.525a2 2 0 01-1.789-1.106L8.79 4.105a2 2 0 10-3.579 1.789l2.261 4.522A5 5 0 018 12.652V21" />
    </symbol>
    <symbol id="paperclip" viewBox="0 0 24 24">
      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
    </symbol>
    <symbol id="parasol" viewBox="0 0 24 24">
      <path d="M12.5 11.134 18.196 21" />
      <path d="M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413" />
      <path d="M21 21H3" />
    </symbol>
    <symbol id="parentheses" viewBox="0 0 24 24">
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
      <path d="M16 3s4 3 4 9-4 9-4 9" />
    </symbol>
    <symbol id="parking-meter" viewBox="0 0 24 24">
      <path d="M11 15h2" />
      <path d="M12 12v3" />
      <path d="M12 19v3" />
      <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
      <path d="M9 9a3 3 0 1 1 6 0" />
    </symbol>
    <symbol id="party-popper" viewBox="0 0 24 24">
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
    </symbol>
    <symbol id="pause" viewBox="0 0 24 24">
      <rect x="14" y="3" width="5" height="18" rx="1" />
      <rect x="5" y="3" width="5" height="18" rx="1" />
    </symbol>
    <symbol id="paw-print" viewBox="0 0 24 24">
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </symbol>
    <symbol id="pc-case" viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" />
      <path d="M15 14h.01" />
      <path d="M9 6h6" />
      <path d="M9 10h6" />
    </symbol>
    <symbol id="pen-line" viewBox="0 0 24 24">
      <path d="M13 21h8" />
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </symbol>
    <symbol id="pen-off" viewBox="0 0 24 24">
      <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
      <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="pen-tool" viewBox="0 0 24 24">
      <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
      <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
      <path d="m2.3 2.3 7.286 7.286" />
      <circle cx="11" cy="11" r="2" />
    </symbol>
    <symbol id="pen" viewBox="0 0 24 24">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </symbol>
    <symbol id="pencil-line" viewBox="0 0 24 24">
      <path d="M13 21h8" />
      <path d="m15 5 4 4" />
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </symbol>
    <symbol id="pencil-off" viewBox="0 0 24 24">
      <path d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" />
      <path d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" />
      <path d="m15 5 4 4" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="pencil-ruler" viewBox="0 0 24 24">
      <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
      <path d="m8 6 2-2" />
      <path d="m18 16 2-2" />
      <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </symbol>
    <symbol id="pencil-sparkles" viewBox="0 0 24 24">
      <path d="M10 3H8" />
      <path d="m15.007 5.008 3.987 3.986" />
      <path d="M20 15v4" />
      <path d="M21.174 6.813a2.82 2.82 0 0 0-3.986-3.987L3.842 16.175a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="M22 17h-4" />
      <path d="M4 5v4" />
      <path d="M6 7H2" />
      <path d="M9 2v2" />
    </symbol>
    <symbol id="pencil" viewBox="0 0 24 24">
      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
      <path d="m15 5 4 4" />
    </symbol>
    <symbol id="pentagon" viewBox="0 0 24 24">
      <path d="M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" />
    </symbol>
    <symbol id="percent" viewBox="0 0 24 24">
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </symbol>
    <symbol id="person-standing" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </symbol>
    <symbol id="phi" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <circle cx="12" cy="12" r="7" />
    </symbol>
    <symbol id="philippine-peso" viewBox="0 0 24 24">
      <path d="M20 11H4" />
      <path d="M20 7H4" />
      <path d="M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" />
    </symbol>
    <symbol id="phone-call" viewBox="0 0 24 24">
      <path d="M13 2a9 9 0 0 1 9 9" />
      <path d="M13 6a5 5 0 0 1 5 5" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-forwarded" viewBox="0 0 24 24">
      <path d="M14 6h8" />
      <path d="m18 2 4 4-4 4" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-incoming" viewBox="0 0 24 24">
      <path d="M16 2v6h6" />
      <path d="m22 2-6 6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-missed" viewBox="0 0 24 24">
      <path d="m16 2 6 6" />
      <path d="m22 2-6 6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone-off" viewBox="0 0 24 24">
      <path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
      <path d="M22 2 2 22" />
      <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
    </symbol>
    <symbol id="phone-outgoing" viewBox="0 0 24 24">
      <path d="m16 8 6-6" />
      <path d="M22 8V2h-6" />
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="phone" viewBox="0 0 24 24">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </symbol>
    <symbol id="pi" viewBox="0 0 24 24">
      <line x1="9" x2="9" y1="4" y2="20" />
      <path d="M4 7c0-1.7 1.3-3 3-3h13" />
      <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
    </symbol>
    <symbol id="piano" viewBox="0 0 24 24">
      <path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" />
      <path d="M2 14h20" />
      <path d="M6 14v4" />
      <path d="M10 14v4" />
      <path d="M14 14v4" />
      <path d="M18 14v4" />
    </symbol>
    <symbol id="pickaxe" viewBox="0 0 24 24">
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
      <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
      <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
      <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
    </symbol>
    <symbol id="picture-in-picture-2" viewBox="0 0 24 24">
      <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
      <rect width="10" height="7" x="12" y="13" rx="2" />
    </symbol>
    <symbol id="picture-in-picture" viewBox="0 0 24 24">
      <path d="M2 10h6V4" />
      <path d="m2 4 6 6" />
      <path d="M21 10V7a2 2 0 0 0-2-2h-7" />
      <path d="M3 14v2a2 2 0 0 0 2 2h3" />
      <rect x="12" y="14" width="10" height="7" rx="1" />
    </symbol>
    <symbol id="piggy-bank" viewBox="0 0 24 24">
      <path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" />
      <path d="M16 10h.01" />
      <path d="M2 8v1a2 2 0 0 0 2 2h1" />
    </symbol>
    <symbol id="pilcrow-left" viewBox="0 0 24 24">
      <path d="M14 3v11" />
      <path d="M14 9h-3a3 3 0 0 1 0-6h9" />
      <path d="M18 3v11" />
      <path d="M22 18H2l4-4" />
      <path d="m6 22-4-4" />
    </symbol>
    <symbol id="pilcrow-right" viewBox="0 0 24 24">
      <path d="M10 3v11" />
      <path d="M10 9H7a1 1 0 0 1 0-6h8" />
      <path d="M14 3v11" />
      <path d="m18 14 4 4H2" />
      <path d="m22 18-4 4" />
    </symbol>
    <symbol id="pilcrow" viewBox="0 0 24 24">
      <path d="M13 4v16" />
      <path d="M17 4v16" />
      <path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </symbol>
    <symbol id="pill-bottle" viewBox="0 0 24 24">
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
      <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <rect width="16" height="5" x="4" y="2" rx="1" />
    </symbol>
    <symbol id="pill" viewBox="0 0 24 24">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </symbol>
    <symbol id="pin-off" viewBox="0 0 24 24">
      <path d="M12 17v5" />
      <path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" />
      <path d="m2 2 20 20" />
      <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" />
    </symbol>
    <symbol id="pin" viewBox="0 0 24 24">
      <path d="M12 17v5" />
      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </symbol>
    <symbol id="pipette" viewBox="0 0 24 24">
      <path d="m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" />
      <path d="m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" />
      <path d="m2 22 .414-.414" />
    </symbol>
    <symbol id="pizza" viewBox="0 0 24 24">
      <path d="m12 14-1 1" />
      <path d="m13.75 18.25-1.25 1.42" />
      <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
      <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
      <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
    </symbol>
    <symbol id="plane-landing" viewBox="0 0 24 24">
      <path d="M2 22h20" />
      <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
    </symbol>
    <symbol id="plane-takeoff" viewBox="0 0 24 24">
      <path d="M2 22h20" />
      <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </symbol>
    <symbol id="plane" viewBox="0 0 24 24">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </symbol>
    <symbol id="play-off" viewBox="0 0 24 24">
      <path d="m10.215 4.56 9.79 5.71a2 2 0 0 1 .003 3.458l-.393.23" />
      <path d="m16.042 16.042-8.034 4.686A2 2 0 0 1 5 19V5" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="play" viewBox="0 0 24 24">
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </symbol>
    <symbol id="plug-2" viewBox="0 0 24 24">
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M12 17v5" />
      <path d="M5 8h14" />
      <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
    </symbol>
    <symbol id="plug-zap" viewBox="0 0 24 24">
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
      <path d="m2 22 3-3" />
      <path d="M7.5 13.5 10 11" />
      <path d="M10.5 16.5 13 14" />
      <path d="m18 3-4 4h6l-4 4" />
    </symbol>
    <symbol id="plug" viewBox="0 0 24 24">
      <path d="M12 22v-5" />
      <path d="M15 8V2" />
      <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
      <path d="M9 8V2" />
    </symbol>
    <symbol id="plus" viewBox="0 0 24 24">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </symbol>
    <symbol id="pocket-knife" viewBox="0 0 24 24">
      <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
      <path d="M18 6h.01" />
      <path d="M6 18h.01" />
      <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
      <path d="M18 11.66V22a4 4 0 0 0 4-4V6" />
    </symbol>
    <symbol id="podium" viewBox="0 0 24 24">
      <path d="M12 6V2h-1" />
      <path d="M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1" />
      <path d="M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10" />
    </symbol>
    <symbol id="pointer-off" viewBox="0 0 24 24">
      <path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" />
      <path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" />
      <path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" />
      <path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" />
      <path d="M6 6v8" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="pointer" viewBox="0 0 24 24">
      <path d="M22 14a8 8 0 0 1-8 8" />
      <path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
      <path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </symbol>
    <symbol id="popcorn" viewBox="0 0 24 24">
      <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" />
      <path d="M10 22 9 8" />
      <path d="m14 22 1-14" />
      <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" />
    </symbol>
    <symbol id="popsicle" viewBox="0 0 24 24">
      <path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" />
      <path d="m22 22-5.5-5.5" />
    </symbol>
    <symbol id="pound-sterling" viewBox="0 0 24 24">
      <path d="M18 7c0-5.333-8-5.333-8 0" />
      <path d="M10 7v14" />
      <path d="M6 21h12" />
      <path d="M6 13h10" />
    </symbol>
    <symbol id="power-off" viewBox="0 0 24 24">
      <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
      <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
      <path d="M12 2v4" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="power" viewBox="0 0 24 24">
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </symbol>
    <symbol id="presentation" viewBox="0 0 24 24">
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </symbol>
    <symbol id="printer-check" viewBox="0 0 24 24">
      <path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" />
      <path d="m16 19 2 2 4-4" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    </symbol>
    <symbol id="printer-x" viewBox="0 0 24 24">
      <path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" />
      <path d="m16.5 16.5 5 5" />
      <path d="m16.5 21.5 5-5" />
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
    </symbol>
    <symbol id="printer" viewBox="0 0 24 24">
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </symbol>
    <symbol id="projector" viewBox="0 0 24 24">
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </symbol>
    <symbol id="proportions" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M12 9v11" />
      <path d="M2 9h13a2 2 0 0 1 2 2v9" />
    </symbol>
    <symbol id="puzzle" viewBox="0 0 24 24">
      <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
    </symbol>
    <symbol id="pyramid" viewBox="0 0 24 24">
      <path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" />
      <path d="M12 2v20" />
    </symbol>
    <symbol id="qr-code" viewBox="0 0 24 24">
      <rect width="5" height="5" x="3" y="3" rx="1" />
      <rect width="5" height="5" x="16" y="3" rx="1" />
      <rect width="5" height="5" x="3" y="16" rx="1" />
      <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <path d="M21 21v.01" />
      <path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <path d="M3 12h.01" />
      <path d="M12 3h.01" />
      <path d="M12 16v.01" />
      <path d="M16 12h1" />
      <path d="M21 12v.01" />
      <path d="M12 21v-1" />
    </symbol>
    <symbol id="quote" viewBox="0 0 24 24">
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </symbol>
    <symbol id="rabbit" viewBox="0 0 24 24">
      <path d="M13 16a3 3 0 0 1 2.24 5" />
      <path d="M18 12h.01" />
      <path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" />
      <path d="M20 8.54V4a2 2 0 1 0-4 0v3" />
      <path d="M7.612 12.524a3 3 0 1 0-1.6 4.3" />
    </symbol>
    <symbol id="radar" viewBox="0 0 24 24">
      <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
      <path d="M4 6h.01" />
      <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
      <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
      <path d="M12 18h.01" />
      <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
      <circle cx="12" cy="12" r="2" />
      <path d="m13.41 10.59 5.66-5.66" />
    </symbol>
    <symbol id="radiation" viewBox="0 0 24 24">
      <path d="M12 12h.01" />
      <path d="M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z" />
      <path d="M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z" />
      <path d="M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" />
    </symbol>
    <symbol id="radical" viewBox="0 0 24 24">
      <path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" />
    </symbol>
    <symbol id="radio-off" viewBox="0 0 24 24">
      <path d="M13.414 13.414a2 2 0 1 1-2.828-2.828" />
      <path d="M16.247 7.761a6 6 0 0 1 1.744 4.572" />
      <path d="M19.075 4.933a10 10 0 0 1 2.234 10.72" />
      <path d="m2 2 20 20" />
      <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
      <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
    </symbol>
    <symbol id="radio-receiver" viewBox="0 0 24 24">
      <path d="M5 16v2" />
      <path d="M19 16v2" />
      <rect width="20" height="8" x="2" y="8" rx="2" />
      <path d="M18 12h.01" />
    </symbol>
    <symbol id="radio-tower" viewBox="0 0 24 24">
      <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
      <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
      <circle cx="12" cy="9" r="2" />
      <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
      <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
      <path d="M9.5 18h5" />
      <path d="m8 22 4-11 4 11" />
    </symbol>
    <symbol id="radio" viewBox="0 0 24 24">
      <path d="M16.247 7.761a6 6 0 0 1 0 8.478" />
      <path d="M19.075 4.933a10 10 0 0 1 0 14.134" />
      <path d="M4.925 19.067a10 10 0 0 1 0-14.134" />
      <path d="M7.753 16.239a6 6 0 0 1 0-8.478" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="radius" viewBox="0 0 24 24">
      <path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
      <circle cx="19" cy="19" r="2" />
      <path d="m13.41 13.41 4.18 4.18" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="rainbow" viewBox="0 0 24 24">
      <path d="M22 17a10 10 0 0 0-20 0" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M10 17a2 2 0 0 1 4 0" />
    </symbol>
    <symbol id="rat" viewBox="0 0 24 24">
      <path d="M13 22H4a2 2 0 0 1 0-4h12" />
      <path d="M13.236 18a3 3 0 0 0-2.2-5" />
      <path d="M16 9h.01" />
      <path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" />
      <path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" />
    </symbol>
    <symbol id="ratio" viewBox="0 0 24 24">
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="receipt-cent" viewBox="0 0 24 24">
      <path d="M12 7v10" />
      <path d="M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="receipt-euro" viewBox="0 0 24 24">
      <path d="M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 12h5" />
    </symbol>
    <symbol id="receipt-indian-rupee" viewBox="0 0 24 24">
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 11h8" />
      <path d="M8 7h8" />
      <path d="M9 7a4 4 0 0 1 0 8H8l3 2" />
    </symbol>
    <symbol id="receipt-japanese-yen" viewBox="0 0 24 24">
      <path d="m12 10 3-3" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="m9 7 3 3v7" />
    </symbol>
    <symbol id="receipt-pound-sterling" viewBox="0 0 24 24">
      <path d="M10 17V9.5a1 1 0 0 1 5 0" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 13h5" />
      <path d="M8 17h7" />
    </symbol>
    <symbol id="receipt-russian-ruble" viewBox="0 0 24 24">
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 11h5a2 2 0 0 0 0-4h-3v10" />
      <path d="M8 15h5" />
    </symbol>
    <symbol id="receipt-swiss-franc" viewBox="0 0 24 24">
      <path d="M10 11h4" />
      <path d="M10 17V7h5" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
      <path d="M8 15h5" />
    </symbol>
    <symbol id="receipt-text" viewBox="0 0 24 24">
      <path d="M13 16H8" />
      <path d="M14 8H8" />
      <path d="M16 12H8" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="receipt-turkish-lira" viewBox="0 0 24 24">
      <path d="M10 7v10a5 5 0 0 0 5-5" />
      <path d="m14 8-6 3" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="receipt" viewBox="0 0 24 24">
      <path d="M12 17V7" />
      <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
      <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" />
    </symbol>
    <symbol id="rectangle-circle" viewBox="0 0 24 24">
      <path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
      <circle cx="14" cy="12" r="8" />
    </symbol>
    <symbol id="rectangle-ellipsis" viewBox="0 0 24 24">
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <path d="M12 12h.01" />
      <path d="M17 12h.01" />
      <path d="M7 12h.01" />
    </symbol>
    <symbol id="rectangle-goggles" viewBox="0 0 24 24">
      <path d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
    </symbol>
    <symbol id="rectangle-horizontal" viewBox="0 0 24 24">
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </symbol>
    <symbol id="rectangle-vertical" viewBox="0 0 24 24">
      <rect width="12" height="20" x="6" y="2" rx="2" />
    </symbol>
    <symbol id="recycle" viewBox="0 0 24 24">
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </symbol>
    <symbol id="redo-2" viewBox="0 0 24 24">
      <path d="m15 14 5-5-5-5" />
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" />
    </symbol>
    <symbol id="redo-dot" viewBox="0 0 24 24">
      <circle cx="12" cy="17" r="1" />
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </symbol>
    <symbol id="redo" viewBox="0 0 24 24">
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </symbol>
    <symbol id="refresh-ccw-dot" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="refresh-ccw" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </symbol>
    <symbol id="refresh-cw-off" viewBox="0 0 24 24">
      <path d="M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" />
      <path d="M8 16H3v5" />
      <path d="M3 12C3 9.51 4 7.26 5.64 5.64" />
      <path d="m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" />
      <path d="M21 12c0 1-.16 1.97-.47 2.87" />
      <path d="M21 3v5h-5" />
      <path d="M22 22 2 2" />
    </symbol>
    <symbol id="refresh-cw" viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </symbol>
    <symbol id="refrigerator" viewBox="0 0 24 24">
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <path d="M5 10h14" />
      <path d="M15 7v6" />
    </symbol>
    <symbol id="regex" viewBox="0 0 24 24">
      <path d="M17 3v10" />
      <path d="m12.67 5.5 8.66 5" />
      <path d="m12.67 10.5 8.66-5" />
      <path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
    </symbol>
    <symbol id="remove-formatting" viewBox="0 0 24 24">
      <path d="M4 7V4h16v3" />
      <path d="M5 20h6" />
      <path d="M13 4 8 20" />
      <path d="m15 15 5 5" />
      <path d="m20 15-5 5" />
    </symbol>
    <symbol id="repeat-1" viewBox="0 0 24 24">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      <path d="M11 10h1v4" />
    </symbol>
    <symbol id="repeat-2" viewBox="0 0 24 24">
      <path d="m2 9 3-3 3 3" />
      <path d="M13 18H7a2 2 0 0 1-2-2V6" />
      <path d="m22 15-3 3-3-3" />
      <path d="M11 6h6a2 2 0 0 1 2 2v10" />
    </symbol>
    <symbol id="repeat-off" viewBox="0 0 24 24">
      <path d="M11.656 6H21l-4-4" />
      <path d="M17.898 17.898A4 4 0 0 1 17 18H3l4-4" />
      <path d="m2 2 20 20" />
      <path d="M21 13v1a4 4 0 0 1-.171 1.159" />
      <path d="m21 6-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 3.102-3.898" />
      <path d="m7 22-4-4" />
    </symbol>
    <symbol id="repeat" viewBox="0 0 24 24">
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </symbol>
    <symbol id="replace-all" viewBox="0 0 24 24">
      <path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M14 4a1 1 0 0 1 1-1" />
      <path d="M15 10a1 1 0 0 1-1-1" />
      <path d="M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M21 4a1 1 0 0 0-1-1" />
      <path d="M21 9a1 1 0 0 1-1 1" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5a2 2 0 0 1 2-2h2" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="replace" viewBox="0 0 24 24">
      <path d="M14 4a1 1 0 0 1 1-1" />
      <path d="M15 10a1 1 0 0 1-1-1" />
      <path d="M21 4a1 1 0 0 0-1-1" />
      <path d="M21 9a1 1 0 0 1-1 1" />
      <path d="m3 7 3 3 3-3" />
      <path d="M6 10V5a2 2 0 0 1 2-2h2" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </symbol>
    <symbol id="reply-all" viewBox="0 0 24 24">
      <path d="m12 17-5-5 5-5" />
      <path d="M22 18v-2a4 4 0 0 0-4-4H7" />
      <path d="m7 17-5-5 5-5" />
    </symbol>
    <symbol id="reply" viewBox="0 0 24 24">
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
      <path d="m9 17-5-5 5-5" />
    </symbol>
    <symbol id="rewind" viewBox="0 0 24 24">
      <path d="M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" />
      <path d="M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" />
    </symbol>
    <symbol id="ribbon" viewBox="0 0 24 24">
      <path d="M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" />
      <path d="m12 18 2.57-3.5" />
      <path d="M6.243 9.016a7 7 0 0 1 11.507-.009" />
      <path d="M9.35 14.53 12 11.22" />
      <path d="M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" />
    </symbol>
    <symbol id="road" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M12 5V3" />
      <path d="M12 9v3" />
      <path d="M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z" />
    </symbol>
    <symbol id="rocket" viewBox="0 0 24 24">
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
    </symbol>
    <symbol id="rocking-chair" viewBox="0 0 24 24">
      <path d="m15 13 3.708 7.416" />
      <path d="M3 19a15 15 0 0 0 18 0" />
      <path d="m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" />
      <path d="m9 13-3.708 7.416" />
    </symbol>
    <symbol id="roller-coaster" viewBox="0 0 24 24">
      <path d="M6 19V5" />
      <path d="M10 19V6.8" />
      <path d="M14 19v-7.8" />
      <path d="M18 5v4" />
      <path d="M18 19v-6" />
      <path d="M22 19V9" />
      <path d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" />
    </symbol>
    <symbol id="rose" viewBox="0 0 24 24">
      <path d="M17 10h-1a4 4 0 1 1 4-4v.534" />
      <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" />
      <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" />
      <path d="M9.77 12C4 15 2 22 2 22" />
      <circle cx="17" cy="8" r="2" />
    </symbol>
    <symbol id="rotate-3d" viewBox="0 0 24 24">
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
      <path d="M16.47214 7.52786 A 5 10 0 1 0 13 21.79796" />
      <path d="M21.79796 11 A 10 5 0 1 0 19 15.57071" />
    </symbol>
    <symbol id="rotate-ccw-clock" viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </symbol>
    <symbol id="rotate-ccw-key" viewBox="0 0 24 24">
      <path d="M12 7v6" />
      <path d="M12 9h2" />
      <path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <circle cx="12" cy="15" r="2" />
    </symbol>
    <symbol id="rotate-ccw-square" viewBox="0 0 24 24">
      <path d="M20 9V7a2 2 0 0 0-2-2h-6" />
      <path d="m15 2-3 3 3 3" />
      <path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
    </symbol>
    <symbol id="rotate-ccw" viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </symbol>
    <symbol id="rotate-cw-fading-clock" viewBox="0 0 24 24">
      <path d="M12 3a9.75 9.75 0 0 1 6.74 2.74" />
      <path d="M18.74 5.74 21 8" />
      <path d="M21 8V3" />
      <path d="M7.5 19.794c-6-3.464-6-12.124 0-15.588" />
      <path d="M7.5 4.206A9 9 0 0 1 12 3" />
      <path d="M12 7v5l4 2" />
      <path d="M14 20.775A9 9 0 0 1 12 21" />
      <path d="M19 17.656a9 9 0 0 1-1.5 1.456" />
      <path d="M21 12a9 9 0 0 1-.228 2" />
      <path d="M21 8h-5" />
    </symbol>
    <symbol id="rotate-cw-square" viewBox="0 0 24 24">
      <path d="M12 5H6a2 2 0 0 0-2 2v3" />
      <path d="m9 8 3-3-3-3" />
      <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
    </symbol>
    <symbol id="rotate-cw" viewBox="0 0 24 24">
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </symbol>
    <symbol id="route-off" viewBox="0 0 24 24">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
      <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
      <path d="m2 2 20 20" />
      <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
      <path d="M15 5h-4.3" />
      <circle cx="18" cy="5" r="3" />
    </symbol>
    <symbol id="route" viewBox="0 0 24 24">
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
      <circle cx="18" cy="5" r="3" />
    </symbol>
    <symbol id="router" viewBox="0 0 24 24">
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6.01 18H6" />
      <path d="M10.01 18H10" />
      <path d="M15 10v4" />
      <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
      <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
    </symbol>
    <symbol id="rows-2" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 12h18" />
    </symbol>
    <symbol id="rows-3" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 9H3" />
      <path d="M21 15H3" />
    </symbol>
    <symbol id="rows-4" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 7.5H3" />
      <path d="M21 12H3" />
      <path d="M21 16.5H3" />
    </symbol>
    <symbol id="rss" viewBox="0 0 24 24">
      <path d="M4 11a9 9 0 0 1 9 9" />
      <path d="M4 4a16 16 0 0 1 16 16" />
      <circle cx="5" cy="19" r="1" />
    </symbol>
    <symbol id="ruler-dimension-line" viewBox="0 0 24 24">
      <path d="M10 15v-3" />
      <path d="M14 15v-3" />
      <path d="M18 15v-3" />
      <path d="M2 8V4" />
      <path d="M22 6H2" />
      <path d="M22 8V4" />
      <path d="M6 15v-3" />
      <rect x="2" y="12" width="20" height="8" rx="2" />
    </symbol>
    <symbol id="ruler" viewBox="0 0 24 24">
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
      <path d="m14.5 12.5 2-2" />
      <path d="m11.5 9.5 2-2" />
      <path d="m8.5 6.5 2-2" />
      <path d="m17.5 15.5 2-2" />
    </symbol>
    <symbol id="russian-ruble" viewBox="0 0 24 24">
      <path d="M6 11h8a4 4 0 0 0 0-8H9v18" />
      <path d="M6 15h8" />
    </symbol>
    <symbol id="sailboat" viewBox="0 0 24 24">
      <path d="M10 2v15" />
      <path d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" />
      <path d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" />
    </symbol>
    <symbol id="salad" viewBox="0 0 24 24">
      <path d="M7 21h10" />
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
      <path d="m13 12 4-4" />
      <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
    </symbol>
    <symbol id="sandwich" viewBox="0 0 24 24">
      <path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
      <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
      <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
      <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
      <rect width="20" height="4" x="2" y="11" rx="1" />
    </symbol>
    <symbol id="satellite-dish" viewBox="0 0 24 24">
      <path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
      <path d="m9 15 3-3" />
      <path d="M17 13a6 6 0 0 0-6-6" />
      <path d="M21 13A10 10 0 0 0 11 3" />
    </symbol>
    <symbol id="satellite" viewBox="0 0 24 24">
      <path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" />
      <path d="M16.5 7.5 19 5" />
      <path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" />
      <path d="M9 21a6 6 0 0 0-6-6" />
      <path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" />
    </symbol>
    <symbol id="saudi-riyal" viewBox="0 0 24 24">
      <path d="m20 19.5-5.5 1.2" />
      <path d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" />
      <path d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" />
      <path d="M20 10 4 13.5" />
    </symbol>
    <symbol id="save-all" viewBox="0 0 24 24">
      <path d="M10 2v3a1 1 0 0 0 1 1h5" />
      <path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" />
      <path d="M18 22H4a2 2 0 0 1-2-2V6" />
      <path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />
    </symbol>
    <symbol id="save-check" viewBox="0 0 24 24">
      <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35" />
      <path d="m16 19 2 2 4-4" />
      <path d="M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </symbol>
    <symbol id="save-off" viewBox="0 0 24 24">
      <path d="M13 13H8a1 1 0 0 0-1 1v7" />
      <path d="M14 8h1" />
      <path d="M17 21v-4" />
      <path d="m2 2 20 20" />
      <path d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" />
      <path d="M29.5 11.5s5 5 4 5" />
      <path d="M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" />
    </symbol>
    <symbol id="save-pen" viewBox="0 0 24 24">
      <path d="M13.33 13H8a1 1 0 00-1 1v7" />
      <path d="M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z" />
      <path d="M7 3v4a1 1 0 001 1h7" />
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3" />
    </symbol>
    <symbol id="save-plus" viewBox="0 0 24 24">
      <path d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12" />
      <path d="M16 13H8a1 1 0 0 0-1 1v7" />
      <path d="M19 22v-6" />
      <path d="M22 19h-6" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </symbol>
    <symbol id="save" viewBox="0 0 24 24">
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </symbol>
    <symbol id="scale-3d" viewBox="0 0 24 24">
      <path d="M5 7v11a1 1 0 0 0 1 1h11" />
      <path d="M5.293 18.707 11 13" />
      <circle cx="19" cy="19" r="2" />
      <circle cx="5" cy="5" r="2" />
    </symbol>
    <symbol id="scale" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
      <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
      <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
      <path d="M7 21h10" />
    </symbol>
    <symbol id="scaling" viewBox="0 0 24 24">
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </symbol>
    <symbol id="scan-barcode" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 7v10" />
      <path d="M12 7v10" />
      <path d="M17 7v10" />
    </symbol>
    <symbol id="scan-box" viewBox="0 0 24 24">
      <path d="M12 12v5.5" />
      <path d="M17 3h2a2 2 0 012 2v2" />
      <path d="M21 17v2a2 2 0 01-2 2h-2" />
      <path d="M3 7V5a2 2 0 012-2h2" />
      <path d="M7 21H5a2 2 0 01-2-2v-2" />
      <path d="M7.264 9.252 12 12l4.737-2.748" />
      <path d="M7.995 8.514A2 2 0 007 10.244v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0017 13.76v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z" />
    </symbol>
    <symbol id="scan-eye" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
    </symbol>
    <symbol id="scan-face" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </symbol>
    <symbol id="scan-heart" viewBox="0 0 24 24">
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" />
    </symbol>
    <symbol id="scan-line" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 12h10" />
    </symbol>
    <symbol id="scan-qr-code" viewBox="0 0 24 24">
      <path d="M17 12v4a1 1 0 0 1-1 1h-4" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M17 8V7" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M7 17h.01" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect x="7" y="7" width="5" height="5" rx="1" />
    </symbol>
    <symbol id="scan-search" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <circle cx="12" cy="12" r="3" />
      <path d="m16 16-1.9-1.9" />
    </symbol>
    <symbol id="scan-square" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect width="8" height="8" x="8" y="8" rx="1" />
    </symbol>
    <symbol id="scan-text" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M7 8h8" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
    </symbol>
    <symbol id="scan" viewBox="0 0 24 24">
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </symbol>
    <symbol id="school" viewBox="0 0 24 24">
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M18 4.933V21" />
      <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
      <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
      <path d="M6 4.933V21" />
      <circle cx="12" cy="9" r="2" />
    </symbol>
    <symbol id="scissors-line-dashed" viewBox="0 0 24 24">
      <path d="M5.42 9.42 8 12" />
      <circle cx="4" cy="8" r="2" />
      <path d="m14 6-8.58 8.58" />
      <circle cx="4" cy="16" r="2" />
      <path d="M10.8 14.8 14 18" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </symbol>
    <symbol id="scissors" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </symbol>
    <symbol id="scooter" viewBox="0 0 24 24">
      <path d="M21 4h-3.5l2 11.05" />
      <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" />
      <circle cx="19.5" cy="17.5" r="2.5" />
      <circle cx="4.5" cy="17.5" r="2.5" />
    </symbol>
    <symbol id="screen-share-off" viewBox="0 0 24 24">
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m22 3-5 5" />
      <path d="m17 3 5 5" />
    </symbol>
    <symbol id="screen-share" viewBox="0 0 24 24">
      <path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="m17 8 5-5" />
      <path d="M17 3h5v5" />
    </symbol>
    <symbol id="scroll-text" viewBox="0 0 24 24">
      <path d="M15 12h-5" />
      <path d="M15 8h-5" />
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </symbol>
    <symbol id="scroll" viewBox="0 0 24 24">
      <path d="M19 17V5a2 2 0 0 0-2-2H4" />
      <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
    </symbol>
    <symbol id="search-alert" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 7v4" />
      <path d="M11 15h.01" />
    </symbol>
    <symbol id="search-check" viewBox="0 0 24 24">
      <path d="m8 11 2 2 4-4" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </symbol>
    <symbol id="search-code" viewBox="0 0 24 24">
      <path d="m13 13.5 2-2.5-2-2.5" />
      <path d="m21 21-4.3-4.3" />
      <path d="M9 8.5 7 11l2 2.5" />
      <circle cx="11" cy="11" r="8" />
    </symbol>
    <symbol id="search-slash" viewBox="0 0 24 24">
      <path d="m13.5 8.5-5 5" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </symbol>
    <symbol id="search-x" viewBox="0 0 24 24">
      <path d="m13.5 8.5-5 5" />
      <path d="m8.5 8.5 5 5" />
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </symbol>
    <symbol id="search" viewBox="0 0 24 24">
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </symbol>
    <symbol id="section" viewBox="0 0 24 24">
      <path d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
      <path d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
    </symbol>
    <symbol id="send-horizontal" viewBox="0 0 24 24">
      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
      <path d="M6 12h16" />
    </symbol>
    <symbol id="send-to-back" viewBox="0 0 24 24">
      <rect x="14" y="14" width="8" height="8" rx="2" />
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <path d="M7 14v1a2 2 0 0 0 2 2h1" />
      <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="send" viewBox="0 0 24 24">
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </symbol>
    <symbol id="separator-horizontal" viewBox="0 0 24 24">
      <path d="m16 16-4 4-4-4" />
      <path d="M3 12h18" />
      <path d="m8 8 4-4 4 4" />
    </symbol>
    <symbol id="separator-vertical" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <path d="m16 16 4-4-4-4" />
      <path d="m8 8-4 4 4 4" />
    </symbol>
    <symbol id="server-cog" viewBox="0 0 24 24">
      <path d="m10.852 14.772-.383.923" />
      <path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
      <path d="m13.148 9.228.383-.923" />
      <path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" />
      <path d="m14.772 10.852.923-.383" />
      <path d="m14.772 13.148.923.383" />
      <path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
      <path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
      <path d="M6 18h.01" />
      <path d="M6 6h.01" />
      <path d="m9.228 10.852-.923-.383" />
      <path d="m9.228 13.148-.923.383" />
    </symbol>
    <symbol id="server-crash" viewBox="0 0 24 24">
      <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
      <path d="m13 6-4 6h6l-4 6" />
    </symbol>
    <symbol id="server-off" viewBox="0 0 24 24">
      <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
      <path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
      <path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
      <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
      <path d="M6 18h.01" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="server-plus" viewBox="0 0 24 24">
      <path d="M12.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" />
      <path d="M16 12h6" />
      <path d="M19 9v6" />
      <path d="M22 18v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8.5" />
      <path d="M6 18h.01" />
      <path d="M6 6h.01" />
    </symbol>
    <symbol id="server" viewBox="0 0 24 24">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </symbol>
    <symbol id="settings-2" viewBox="0 0 24 24">
      <path d="M14 17H5" />
      <path d="M19 7h-9" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </symbol>
    <symbol id="settings" viewBox="0 0 24 24">
      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" />
      <circle cx="12" cy="12" r="3" />
    </symbol>
    <symbol id="shapes" viewBox="0 0 24 24">
      <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <circle cx="17.5" cy="17.5" r="3.5" />
    </symbol>
    <symbol id="share-2" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </symbol>
    <symbol id="share" viewBox="0 0 24 24">
      <path d="M12 2v13" />
      <path d="m16 6-4-4-4 4" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    </symbol>
    <symbol id="sheet" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <line x1="9" x2="9" y1="9" y2="21" />
      <line x1="15" x2="15" y1="9" y2="21" />
    </symbol>
    <symbol id="shell" viewBox="0 0 24 24">
      <path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
    </symbol>
    <symbol id="shelving-unit" viewBox="0 0 24 24">
      <path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      <path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
      <path d="M20 22V2" />
      <path d="M4 12h16" />
      <path d="M4 20h16" />
      <path d="M4 2v20" />
      <path d="M4 4h16" />
    </symbol>
    <symbol id="shield-alert" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </symbol>
    <symbol id="shield-ban" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m4.243 5.21 14.39 12.472" />
    </symbol>
    <symbol id="shield-check" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="shield-cog-corner" viewBox="0 0 24 24">
      <path d="M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4" />
      <path d="M14.923 16.547 14 16.164" />
      <path d="m14.923 18.843-.923.383" />
      <path d="M16.547 14.923 16.164 14" />
      <path d="m16.547 20.467-.383.924" />
      <path d="m18.843 14.923.383-.923" />
      <path d="m19.225 21.391-.382-.924" />
      <path d="m20.467 16.547.923-.383" />
      <path d="m20.467 18.843.923.383" />
      <circle cx="17.695" cy="17.695" r="3" />
    </symbol>
    <symbol id="shield-cog" viewBox="0 0 24 24">
      <path d="m10.929 14.467-.383.924" />
      <path d="M10.929 8.923 10.546 8" />
      <path d="M13.225 8.923 13.608 8" />
      <path d="m13.607 15.391-.382-.924" />
      <path d="m14.849 10.547.923-.383" />
      <path d="m14.849 12.843.923.383" />
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9.305 10.547-.923-.383" />
      <path d="m9.305 12.843-.923.383" />
      <circle cx="12.077" cy="11.695" r="3" />
    </symbol>
    <symbol id="shield-ellipsis" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </symbol>
    <symbol id="shield-half" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 22V2" />
    </symbol>
    <symbol id="shield-keyhole" viewBox="0 0 24 24">
      <path d="M12 13v3" />
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1z" />
      <circle cx="12" cy="11" r="2" />
    </symbol>
    <symbol id="shield-lock" viewBox="0 0 24 24">
      <path d="M20 9.807V6a1 1 0 00-1-1c-2 0-4.49-1.19-6.24-2.72a1.17 1.17 0 00-1.52 0C9.5 3.8 7 5 5 5a1 1 0 00-1 1v7c0 3.88 2.107 6.254 5 7.796" />
      <path d="M19 17v-2a2 2 0 00-4 0v2" />
      <rect x="13" y="17" width="8" height="5" rx="1" />
    </symbol>
    <symbol id="shield-minus" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M9 12h6" />
    </symbol>
    <symbol id="shield-off" viewBox="0 0 24 24">
      <path d="m2 2 20 20" />
      <path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" />
      <path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" />
    </symbol>
    <symbol id="shield-plus" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </symbol>
    <symbol id="shield-question-mark" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="shield-user" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M6.376 18.91a6 6 0 0 1 11.249.003" />
      <circle cx="12" cy="11" r="4" />
    </symbol>
    <symbol id="shield-x" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m14.5 9.5-5 5" />
      <path d="m9.5 9.5 5 5" />
    </symbol>
    <symbol id="shield" viewBox="0 0 24 24">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </symbol>
    <symbol id="ship-wheel" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 2v7.5" />
      <path d="m19 5-5.23 5.23" />
      <path d="M22 12h-7.5" />
      <path d="m19 19-5.23-5.23" />
      <path d="M12 14.5V22" />
      <path d="M10.23 13.77 5 19" />
      <path d="M9.5 12H2" />
      <path d="M10.23 10.23 5 5" />
      <circle cx="12" cy="12" r="2.5" />
    </symbol>
    <symbol id="ship" viewBox="0 0 24 24">
      <path d="M12 10.189V14" />
      <path d="M12 2v3" />
      <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
    </symbol>
    <symbol id="shirt" viewBox="0 0 24 24">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </symbol>
    <symbol id="shopping-bag" viewBox="0 0 24 24">
      <path d="M16 10a4 4 0 0 1-8 0" />
      <path d="M3.103 6.034h17.794" />
      <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
    </symbol>
    <symbol id="shopping-basket" viewBox="0 0 24 24">
      <path d="m15 11-1 9" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="M4.5 15.5h15" />
      <path d="m5 11 4-7" />
      <path d="m9 11 1 9" />
    </symbol>
    <symbol id="shopping-cart" viewBox="0 0 24 24">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </symbol>
    <symbol id="shovel" viewBox="0 0 24 24">
      <path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z" />
      <path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z" />
      <path d="m9 15 7.879-7.878" />
    </symbol>
    <symbol id="shower-head" viewBox="0 0 24 24">
      <path d="m4 4 2.5 2.5" />
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
      <path d="M15 5 5 15" />
      <path d="M14 17v.01" />
      <path d="M10 16v.01" />
      <path d="M13 13v.01" />
      <path d="M16 10v.01" />
      <path d="M11 20v.01" />
      <path d="M17 14v.01" />
      <path d="M20 11v.01" />
    </symbol>
    <symbol id="shredder" viewBox="0 0 24 24">
      <path d="M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 22v-5" />
      <path d="M14 19v-2" />
      <path d="M18 20v-3" />
      <path d="M2 13h20" />
      <path d="M6 20v-3" />
    </symbol>
    <symbol id="shrimp" viewBox="0 0 24 24">
      <path d="M11 12h.01" />
      <path d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" />
      <path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" />
      <path d="M14 8a8.5 8.5 0 0 1 0 8" />
      <path d="M16 16c2 0 4.5-4 4-6" />
    </symbol>
    <symbol id="shrink" viewBox="0 0 24 24">
      <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
      <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
      <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
      <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
    </symbol>
    <symbol id="shrub" viewBox="0 0 24 24">
      <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" />
      <path d="M14.5 14.5 12 17" />
      <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />
    </symbol>
    <symbol id="shuffle" viewBox="0 0 24 24">
      <path d="m18 14 4 4-4 4" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
      <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
      <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
    </symbol>
    <symbol id="sigma" viewBox="0 0 24 24">
      <path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" />
    </symbol>
    <symbol id="signal-high" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
    </symbol>
    <symbol id="signal-low" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
    </symbol>
    <symbol id="signal-medium" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
    </symbol>
    <symbol id="signal-zero" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
    </symbol>
    <symbol id="signal" viewBox="0 0 24 24">
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </symbol>
    <symbol id="signature" viewBox="0 0 24 24">
      <path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" />
      <path d="M3 21h18" />
    </symbol>
    <symbol id="signpost-big" viewBox="0 0 24 24">
      <path d="M10 9H4L2 7l2-2h6" />
      <path d="M14 5h6l2 2-2 2h-6" />
      <path d="M10 22V4a2 2 0 1 1 4 0v18" />
      <path d="M8 22h8" />
    </symbol>
    <symbol id="signpost" viewBox="0 0 24 24">
      <path d="M12 13v8" />
      <path d="M12 3v3" />
      <path d="M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z" />
    </symbol>
    <symbol id="siren" viewBox="0 0 24 24">
      <path d="M7 18v-6a5 5 0 1 1 10 0v6" />
      <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
      <path d="M21 12h1" />
      <path d="M18.5 4.5 18 5" />
      <path d="M2 12h1" />
      <path d="M12 2v1" />
      <path d="m4.929 4.929.707.707" />
      <path d="M12 12v6" />
    </symbol>
    <symbol id="skip-back" viewBox="0 0 24 24">
      <path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
      <path d="M3 20V4" />
    </symbol>
    <symbol id="skip-forward" viewBox="0 0 24 24">
      <path d="M21 4v16" />
      <path d="M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
    </symbol>
    <symbol id="skull" viewBox="0 0 24 24">
      <path d="m12.5 17-.5-1-.5 1h1z" />
      <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="9" cy="12" r="1" />
    </symbol>
    <symbol id="slash" viewBox="0 0 24 24">
      <path d="M22 2 2 22" />
    </symbol>
    <symbol id="slice" viewBox="0 0 24 24">
      <path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" />
    </symbol>
    <symbol id="sliders-horizontal" viewBox="0 0 24 24">
      <path d="M10 5H3" />
      <path d="M12 19H3" />
      <path d="M14 3v4" />
      <path d="M16 17v4" />
      <path d="M21 12h-9" />
      <path d="M21 19h-5" />
      <path d="M21 5h-7" />
      <path d="M8 10v4" />
      <path d="M8 12H3" />
    </symbol>
    <symbol id="sliders-vertical" viewBox="0 0 24 24">
      <path d="M10 8h4" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M17 16h4" />
      <path d="M19 12V3" />
      <path d="M19 21v-5" />
      <path d="M3 14h4" />
      <path d="M5 10V3" />
      <path d="M5 21v-7" />
    </symbol>
    <symbol id="smartphone-charging" viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12.667 8 10 12h4l-2.667 4" />
    </symbol>
    <symbol id="smartphone-nfc" viewBox="0 0 24 24">
      <rect width="7" height="12" x="2" y="6" rx="1" />
      <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
      <path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
      <path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
    </symbol>
    <symbol id="smartphone" viewBox="0 0 24 24">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </symbol>
    <symbol id="snail" viewBox="0 0 24 24">
      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
      <circle cx="10" cy="13" r="8" />
      <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
      <path d="M18 3 19.1 5.2" />
      <path d="M22 3 20.9 5.2" />
    </symbol>
    <symbol id="snowflake" viewBox="0 0 24 24">
      <path d="m10 20-1.25-2.5L6 18" />
      <path d="M10 4 8.75 6.5 6 6" />
      <path d="m14 20 1.25-2.5L18 18" />
      <path d="m14 4 1.25 2.5L18 6" />
      <path d="m17 21-3-6h-4" />
      <path d="m17 3-3 6 1.5 3" />
      <path d="M2 12h6.5L10 9" />
      <path d="m20 10-1.5 2 1.5 2" />
      <path d="M22 12h-6.5L14 15" />
      <path d="m4 10 1.5 2L4 14" />
      <path d="m7 21 3-6-1.5-3" />
      <path d="m7 3 3 6h4" />
    </symbol>
    <symbol id="soap-dispenser-droplet" viewBox="0 0 24 24">
      <path d="M10.5 2v4" />
      <path d="M14 2H7a2 2 0 0 0-2 2" />
      <path d="M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" />
      <path d="M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="sofa" viewBox="0 0 24 24">
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </symbol>
    <symbol id="solar-panel" viewBox="0 0 24 24">
      <path d="M11 2h2" />
      <path d="m14.28 14-4.56 8" />
      <path d="m21 22-1.558-4H4.558" />
      <path d="M3 10v2" />
      <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" />
      <path d="M7 2a4 4 0 0 1-4 4" />
      <path d="m8.66 7.66 1.41 1.41" />
    </symbol>
    <symbol id="soup" viewBox="0 0 24 24">
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M7 21h10" />
      <path d="M19.5 12 22 6" />
      <path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" />
      <path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" />
      <path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" />
    </symbol>
    <symbol id="space" viewBox="0 0 24 24">
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </symbol>
    <symbol id="spade" viewBox="0 0 24 24">
      <path d="M12 18v4" />
      <path d="M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5" />
    </symbol>
    <symbol id="sparkle" viewBox="0 0 24 24">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
    </symbol>
    <symbol id="sparkles" viewBox="0 0 24 24">
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" />
      <path d="M22 4h-4" />
      <circle cx="4" cy="20" r="2" />
    </symbol>
    <symbol id="speaker" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M12 6h.01" />
      <circle cx="12" cy="14" r="4" />
      <path d="M12 14h.01" />
    </symbol>
    <symbol id="speech" viewBox="0 0 24 24">
      <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
      <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" />
      <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" />
    </symbol>
    <symbol id="spell-check-2" viewBox="0 0 24 24">
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
      <path d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" />
    </symbol>
    <symbol id="spell-check" viewBox="0 0 24 24">
      <path d="m6 16 6-12 6 12" />
      <path d="M8 12h8" />
      <path d="m16 20 2 2 4-4" />
    </symbol>
    <symbol id="spline-pointer" viewBox="0 0 24 24">
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M5 17A12 12 0 0 1 17 5" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
    </symbol>
    <symbol id="spline" viewBox="0 0 24 24">
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <path d="M5 17A12 12 0 0 1 17 5" />
    </symbol>
    <symbol id="split" viewBox="0 0 24 24">
      <path d="M16 3h5v5" />
      <path d="M8 3H3v5" />
      <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
      <path d="m15 9 6-6" />
    </symbol>
    <symbol id="spool" viewBox="0 0 24 24">
      <path d="M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" />
      <path d="m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" />
    </symbol>
    <symbol id="sport-shoe" viewBox="0 0 24 24">
      <path d="m15 10.42 4.8-5.07" />
      <path d="M19 18h3" />
      <path d="M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14" />
    </symbol>
    <symbol id="spotlight" viewBox="0 0 24 24">
      <path d="M15.295 19.562 16 22" />
      <path d="m17 16 3.758 2.098" />
      <path d="m19 12.5 3.026-.598" />
      <path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" />
      <path d="M8 9V2" />
    </symbol>
    <symbol id="spray-can" viewBox="0 0 24 24">
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <path d="M3 11h.01" />
      <rect width="4" height="4" x="15" y="5" />
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
      <path d="m13 14 8-2" />
      <path d="m13 19 8-2" />
    </symbol>
    <symbol id="sprout" viewBox="0 0 24 24">
      <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
      <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
      <path d="M5 21h14" />
    </symbol>
    <symbol id="square-activity" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M17 12h-2l-2 5-2-10-2 5H7" />
    </symbol>
    <symbol id="square-arrow-down-left" viewBox="0 0 24 24">
      <path d="M15 15H9l6-6" />
      <path d="M9 15V9" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-down-right" viewBox="0 0 24 24">
      <path d="M15 15 9 9" />
      <path d="M9 15h6V9" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-down" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 8v8" />
      <path d="m8 12 4 4 4-4" />
    </symbol>
    <symbol id="square-arrow-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m12 8-4 4 4 4" />
      <path d="M16 12H8" />
    </symbol>
    <symbol id="square-arrow-out-down-left" viewBox="0 0 24 24">
      <path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" />
      <path d="m3 21 9-9" />
      <path d="M9 21H3v-6" />
    </symbol>
    <symbol id="square-arrow-out-down-right" viewBox="0 0 24 24">
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="m21 21-9-9" />
      <path d="M21 15v6h-6" />
    </symbol>
    <symbol id="square-arrow-out-up-left" viewBox="0 0 24 24">
      <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
      <path d="m3 3 9 9" />
      <path d="M3 9V3h6" />
    </symbol>
    <symbol id="square-arrow-out-up-right" viewBox="0 0 24 24">
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
      <path d="m21 3-9 9" />
      <path d="M15 3h6v6" />
    </symbol>
    <symbol id="square-arrow-right-enter" viewBox="0 0 24 24">
      <path d="m10 16 4-4-4-4" />
      <path d="M3 12h11" />
      <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
    </symbol>
    <symbol id="square-arrow-right-exit" viewBox="0 0 24 24">
      <path d="M10 12h11" />
      <path d="m17 16 4-4-4-4" />
      <path d="M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" />
    </symbol>
    <symbol id="square-arrow-right" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="m12 16 4-4-4-4" />
    </symbol>
    <symbol id="square-arrow-up-left" viewBox="0 0 24 24">
      <path d="M15 15 9 9" />
      <path d="M9 15V9h6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-up-right" viewBox="0 0 24 24">
      <path d="M15 15V9H9" />
      <path d="m9 15 6-6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-arrow-up" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 12-4-4-4 4" />
      <path d="M12 16V8" />
    </symbol>
    <symbol id="square-asterisk" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 8v8" />
      <path d="m8.5 14 7-4" />
      <path d="m8.5 10 7 4" />
    </symbol>
    <symbol id="square-bottom-dashed-scissors" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="m17 17-2.18-2.18" />
      <path d="M5 21a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2" />
      <path d="M9 21h1" />
      <path d="M9.56 14.44 17 7" />
      <path d="M9.56 9.56 12 12" />
      <circle cx="8.5" cy="15.5" r="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" />
    </symbol>
    <symbol id="square-centerline-dashed-horizontal" viewBox="0 0 24 24">
      <path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" />
      <path d="M12 20v2" />
      <path d="M12 14v2" />
      <path d="M12 8v2" />
      <path d="M12 2v2" />
    </symbol>
    <symbol id="square-centerline-dashed-vertical" viewBox="0 0 24 24">
      <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
    </symbol>
    <symbol id="square-chart-gantt" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 8h7" />
      <path d="M8 12h6" />
      <path d="M11 16h5" />
    </symbol>
    <symbol id="square-check-big" viewBox="0 0 24 24">
      <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
      <path d="m9 11 3 3L22 4" />
    </symbol>
    <symbol id="square-check" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="square-chevron-down" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m16 10-4 4-4-4" />
    </symbol>
    <symbol id="square-chevron-left" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m14 16-4-4 4-4" />
    </symbol>
    <symbol id="square-chevron-right" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m10 8 4 4-4 4" />
    </symbol>
    <symbol id="square-chevron-up" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m8 14 4-4 4 4" />
    </symbol>
    <symbol id="square-code" viewBox="0 0 24 24">
      <path d="m10 9-3 3 3 3" />
      <path d="m14 15 3-3-3-3" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-dashed-bottom-code" viewBox="0 0 24 24">
      <path d="M10 9.5 8 12l2 2.5" />
      <path d="M14 21h1" />
      <path d="m14 9.5 2 2.5-2 2.5" />
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
      <path d="M9 21h1" />
    </symbol>
    <symbol id="square-dashed-bottom" viewBox="0 0 24 24">
      <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" />
      <path d="M9 21h1" />
      <path d="M14 21h1" />
    </symbol>
    <symbol id="square-dashed-kanban" viewBox="0 0 24 24">
      <path d="M8 7v7" />
      <path d="M12 7v4" />
      <path d="M16 7v9" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M9 3h1" />
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 9v1" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M14 21h1" />
      <path d="M9 21h1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
    </symbol>
    <symbol id="square-dashed-mouse-pointer" viewBox="0 0 24 24">
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" />
      <path d="M9 21h2" />
      <path d="M14 3h1" />
      <path d="M3 9v1" />
      <path d="M21 9v2" />
      <path d="M3 14v1" />
    </symbol>
    <symbol id="square-dashed-text" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="M14 3h1" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M7 12h10" />
      <path d="M7 16h6" />
      <path d="M7 8h8" />
      <path d="M9 21h1" />
      <path d="M9 3h1" />
    </symbol>
    <symbol id="square-dashed-top-solid" viewBox="0 0 24 24">
      <path d="M14 21h1" />
      <path d="M21 14v1" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" />
      <path d="M3 9v1" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 21h1" />
    </symbol>
    <symbol id="square-dashed" viewBox="0 0 24 24">
      <path d="M5 3a2 2 0 0 0-2 2" />
      <path d="M19 3a2 2 0 0 1 2 2" />
      <path d="M21 19a2 2 0 0 1-2 2" />
      <path d="M5 21a2 2 0 0 1-2-2" />
      <path d="M9 3h1" />
      <path d="M9 21h1" />
      <path d="M14 3h1" />
      <path d="M14 21h1" />
      <path d="M3 9v1" />
      <path d="M21 9v1" />
      <path d="M3 14v1" />
      <path d="M21 14v1" />
    </symbol>
    <symbol id="square-divide" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="8" x2="16" y1="12" y2="12" />
      <line x1="12" x2="12" y1="16" y2="16" />
      <line x1="12" x2="12" y1="8" y2="8" />
    </symbol>
    <symbol id="square-dot" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="12" r="1" />
    </symbol>
    <symbol id="square-equal" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 10h10" />
      <path d="M7 14h10" />
    </symbol>
    <symbol id="square-function" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" />
      <path d="M9 11.2h5.7" />
    </symbol>
    <symbol id="square-kanban" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 7v7" />
      <path d="M12 7v4" />
      <path d="M16 7v9" />
    </symbol>
    <symbol id="square-library" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7v10" />
      <path d="M11 7v10" />
      <path d="m15 7 2 10" />
    </symbol>
    <symbol id="square-m" viewBox="0 0 24 24">
      <path d="M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-menu" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 8h10" />
      <path d="M7 12h10" />
      <path d="M7 16h10" />
    </symbol>
    <symbol id="square-minus" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
    </symbol>
    <symbol id="square-mouse-pointer" viewBox="0 0 24 24">
      <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" />
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
    </symbol>
    <symbol id="square-off" viewBox="0 0 24 24">
      <path d="M20.4 20.4a2 2 0 01-1.4.6H5a2 2 0 01-2-2V5a2 2 0 01.59-1.41" />
      <path d="M21 15.3V5a2 2 0 00-2-2H8.7" />
      <path d="M22 22 2 2" />
    </symbol>
    <symbol id="square-parking-off" viewBox="0 0 24 24">
      <path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" />
      <path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" />
      <path d="m2 2 20 20" />
      <path d="M13 13a3 3 0 1 0 0-6H9v2" />
      <path d="M9 17v-2.3" />
    </symbol>
    <symbol id="square-parking" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </symbol>
    <symbol id="square-pause" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <line x1="10" x2="10" y1="15" y2="9" />
      <line x1="14" x2="14" y1="15" y2="9" />
    </symbol>
    <symbol id="square-pen" viewBox="0 0 24 24">
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
    </symbol>
    <symbol id="square-percent" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="m15 9-6 6" />
      <path d="M9 9h.01" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="square-pi" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 7h10" />
      <path d="M10 7v10" />
      <path d="M16 17a2 2 0 0 1-2-2V7" />
    </symbol>
    <symbol id="square-pilcrow" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
      <path d="M12 7v10" />
      <path d="M16 7v10" />
    </symbol>
    <symbol id="square-play" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" />
    </symbol>
    <symbol id="square-plus" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </symbol>
    <symbol id="square-power" viewBox="0 0 24 24">
      <path d="M12 7v4" />
      <path d="M7.998 9.003a5 5 0 1 0 8-.005" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-radical" viewBox="0 0 24 24">
      <path d="M7 12h2l2 5 2-10h4" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-round-corner" viewBox="0 0 24 24">
      <path d="M21 11a8 8 0 0 0-8-8" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    </symbol>
    <symbol id="square-scissors" viewBox="0 0 24 24">
      <path d="m17 17-2.18-2.18" />
      <path d="M9.56 14.44 17 7" />
      <path d="M9.56 9.56 12 12" />
      <circle cx="8.5" cy="15.5" r="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-sigma" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
    </symbol>
    <symbol id="square-slash" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <line x1="9" x2="15" y1="15" y2="9" />
    </symbol>
    <symbol id="square-split-horizontal" viewBox="0 0 24 24">
      <path d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
      <path d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </symbol>
    <symbol id="square-split-vertical" viewBox="0 0 24 24">
      <path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
      <path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </symbol>
    <symbol id="square-square" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <rect x="8" y="8" width="8" height="8" rx="1" />
    </symbol>
    <symbol id="square-stack" viewBox="0 0 24 24">
      <path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </symbol>
    <symbol id="square-star" viewBox="0 0 24 24">
      <path d="M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="square-stop" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </symbol>
    <symbol id="square-terminal" viewBox="0 0 24 24">
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    </symbol>
    <symbol id="square-user-round" viewBox="0 0 24 24">
      <path d="M18 21a6 6 0 0 0-12 0" />
      <circle cx="12" cy="11" r="4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="square-user" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="square-x" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="square" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="squares-exclude" viewBox="0 0 24 24">
      <path d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" />
      <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" />
    </symbol>
    <symbol id="squares-intersect" viewBox="0 0 24 24">
      <path d="M10 22a2 2 0 0 1-2-2" />
      <path d="M14 2a2 2 0 0 1 2 2" />
      <path d="M16 22h-2" />
      <path d="M2 10V8" />
      <path d="M2 4a2 2 0 0 1 2-2" />
      <path d="M20 8a2 2 0 0 1 2 2" />
      <path d="M22 14v2" />
      <path d="M22 20a2 2 0 0 1-2 2" />
      <path d="M4 16a2 2 0 0 1-2-2" />
      <path d="M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" />
      <path d="M8 2h2" />
    </symbol>
    <symbol id="squares-subtract" viewBox="0 0 24 24">
      <path d="M10 22a2 2 0 0 1-2-2" />
      <path d="M16 22h-2" />
      <path d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" />
      <path d="M20 8a2 2 0 0 1 2 2" />
      <path d="M22 14v2" />
      <path d="M22 20a2 2 0 0 1-2 2" />
    </symbol>
    <symbol id="squares-unite" viewBox="0 0 24 24">
      <path d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z" />
    </symbol>
    <symbol id="squircle-dashed" viewBox="0 0 24 24">
      <path d="M13.77 3.043a34 34 0 0 0-3.54 0" />
      <path d="M13.771 20.956a33 33 0 0 1-3.541.001" />
      <path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" />
      <path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" />
      <path d="M20.957 10.23a33 33 0 0 1 0 3.54" />
      <path d="M3.043 10.23a34 34 0 0 0 .001 3.541" />
      <path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" />
      <path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
    </symbol>
    <symbol id="squircle" viewBox="0 0 24 24">
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
    </symbol>
    <symbol id="squirrel" viewBox="0 0 24 24">
      <path d="M15.236 22a3 3 0 0 0-2.2-5" />
      <path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
      <path d="M18 13h.01" />
      <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
    </symbol>
    <symbol id="stamp" viewBox="0 0 24 24">
      <path d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" />
      <path d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" />
      <path d="M5 22h14" />
    </symbol>
    <symbol id="star-check" viewBox="0 0 24 24">
      <path d="m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014" />
      <path d="m15 18 2 2 4-4" />
    </symbol>
    <symbol id="star-half" viewBox="0 0 24 24">
      <path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" />
    </symbol>
    <symbol id="star-minus" viewBox="0 0 24 24">
      <path d="M15 18h6" />
      <path d="M17.688 14a2.1 2.1 0 0 1 .416-.568l3.736-3.638a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428.027-.014" />
    </symbol>
    <symbol id="star-off" viewBox="0 0 24 24">
      <path d="m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" />
      <path d="m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="star-plus" viewBox="0 0 24 24">
      <path d="M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5" />
      <path d="M15 18h6" />
      <path d="M18 15v6" />
    </symbol>
    <symbol id="star-x" viewBox="0 0 24 24">
      <path d="m15.5 15.5 5 5" />
      <path d="m20.063 11.525 1.777-1.731a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001L9.216 6.974a2.1 2.1 0 0 1-1.597 1.16l-5.165.755a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.879l-.88 5.139a.53.53 0 0 0 .769.56l4.617-2.428a2.1 2.1 0 0 1 .987-.243 2 2 0 0 1 .132.004" />
      <path d="m20.5 15.5-5 5" />
    </symbol>
    <symbol id="star" viewBox="0 0 24 24">
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </symbol>
    <symbol id="step-back" viewBox="0 0 24 24">
      <path d="M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" />
      <path d="M21 20V4" />
    </symbol>
    <symbol id="step-forward" viewBox="0 0 24 24">
      <path d="M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" />
      <path d="M3 4v16" />
    </symbol>
    <symbol id="stethoscope" viewBox="0 0 24 24">
      <path d="M11 2v2" />
      <path d="M5 2v2" />
      <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
      <path d="M8 15a6 6 0 0 0 12 0v-3" />
      <circle cx="20" cy="10" r="2" />
    </symbol>
    <symbol id="sticker" viewBox="0 0 24 24">
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M8 13h.01" />
      <path d="M16 13h.01" />
      <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
    </symbol>
    <symbol id="sticky-note-check" viewBox="0 0 24 24">
      <path d="m15 19 2 2 4-4" />
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5" />
    </symbol>
    <symbol id="sticky-note-minus" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="sticky-note-off" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="m2 2 20 20" />
      <path d="M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586" />
      <path d="M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344" />
    </symbol>
    <symbol id="sticky-note-plus" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="M18 15v6" />
      <path d="M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355" />
      <path d="M21 18h-6" />
    </symbol>
    <symbol id="sticky-note-x" viewBox="0 0 24 24">
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
      <path d="m16 16 5 5" />
      <path d="M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
      <path d="m21 16-5 5" />
    </symbol>
    <symbol id="sticky-note" viewBox="0 0 24 24">
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
      <path d="M15 3v5a1 1 0 0 0 1 1h5" />
    </symbol>
    <symbol id="sticky-notes" viewBox="0 0 24 24">
      <path d="M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z" />
      <path d="M10 8v5a1 1 0 0 0 1 1h5" />
      <path d="M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2" />
      <path d="M16 2v5a1 1 0 0 0 1 1h5" />
    </symbol>
    <symbol id="stone" viewBox="0 0 24 24">
      <path d="M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" />
      <path d="M11.99 22 14 12l7.822 3.184" />
      <path d="M14 12 8.47 2.302" />
    </symbol>
    <symbol id="store" viewBox="0 0 24 24">
      <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
      <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
      <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
    </symbol>
    <symbol id="stretch-horizontal" viewBox="0 0 24 24">
      <rect width="20" height="6" x="2" y="4" rx="2" />
      <rect width="20" height="6" x="2" y="14" rx="2" />
    </symbol>
    <symbol id="stretch-vertical" viewBox="0 0 24 24">
      <rect width="6" height="20" x="4" y="2" rx="2" />
      <rect width="6" height="20" x="14" y="2" rx="2" />
    </symbol>
    <symbol id="strikethrough" viewBox="0 0 24 24">
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <path d="M14 12a4 4 0 0 1 0 8H6" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </symbol>
    <symbol id="subscript" viewBox="0 0 24 24">
      <path d="m4 5 8 8" />
      <path d="m12 5-8 8" />
      <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
    </symbol>
    <symbol id="summary" viewBox="0 0 24 24">
      <path d="M15 4H7" />
      <path d="m18 16 3 3-3 3" />
      <path d="M3 4v13a2 2 0 0 0 2 2h16" />
      <path d="M7 14h7" />
      <path d="M7 9h12" />
    </symbol>
    <symbol id="sun-dim" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4h.01" />
      <path d="M20 12h.01" />
      <path d="M12 20h.01" />
      <path d="M4 12h.01" />
      <path d="M17.657 6.343h.01" />
      <path d="M17.657 17.657h.01" />
      <path d="M6.343 17.657h.01" />
      <path d="M6.343 6.343h.01" />
    </symbol>
    <symbol id="sun-medium" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1" />
      <path d="M12 20v1" />
      <path d="M3 12h1" />
      <path d="M20 12h1" />
      <path d="m18.364 5.636-.707.707" />
      <path d="m6.343 17.657-.707.707" />
      <path d="m5.636 5.636.707.707" />
      <path d="m17.657 17.657.707.707" />
    </symbol>
    <symbol id="sun-moon" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" />
      <path d="M16 12a4 4 0 0 0-4-4" />
      <path d="m19 5-1.256 1.256" />
      <path d="M20 12h2" />
    </symbol>
    <symbol id="sun-snow" viewBox="0 0 24 24">
      <path d="M10 21v-1" />
      <path d="M10 4V3" />
      <path d="M10 9a3 3 0 0 0 0 6" />
      <path d="m14 20 1.25-2.5L18 18" />
      <path d="m14 4 1.25 2.5L18 6" />
      <path d="m17 21-3-6 1.5-3H22" />
      <path d="m17 3-3 6 1.5 3" />
      <path d="M2 12h1" />
      <path d="m20 10-1.5 2 1.5 2" />
      <path d="m3.64 18.36.7-.7" />
      <path d="m4.34 6.34-.7-.7" />
    </symbol>
    <symbol id="sun" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </symbol>
    <symbol id="sunrise" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m8 6 4-4 4 4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </symbol>
    <symbol id="sunset" viewBox="0 0 24 24">
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </symbol>
    <symbol id="superscript" viewBox="0 0 24 24">
      <path d="m4 19 8-8" />
      <path d="m12 19-8-8" />
      <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
    </symbol>
    <symbol id="swatch-book" viewBox="0 0 24 24">
      <path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" />
      <path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" />
      <path d="M 7 17h.01" />
      <path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" />
    </symbol>
    <symbol id="swiss-franc" viewBox="0 0 24 24">
      <path d="M10 21V3h8" />
      <path d="M6 16h9" />
      <path d="M10 9.5h7" />
    </symbol>
    <symbol id="switch-camera" viewBox="0 0 24 24">
      <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
      <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
      <circle cx="12" cy="12" r="3" />
      <path d="m18 22-3-3 3-3" />
      <path d="m6 2 3 3-3 3" />
    </symbol>
    <symbol id="sword" viewBox="0 0 24 24">
      <path d="m11 19-6-6" />
      <path d="m5 21-2-2" />
      <path d="m8 16-4 4" />
      <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" />
    </symbol>
    <symbol id="swords" viewBox="0 0 24 24">
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <line x1="13" x2="19" y1="19" y2="13" />
      <line x1="16" x2="20" y1="16" y2="20" />
      <line x1="19" x2="21" y1="21" y2="19" />
      <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
      <line x1="5" x2="9" y1="14" y2="18" />
      <line x1="7" x2="4" y1="17" y2="20" />
      <line x1="3" x2="5" y1="19" y2="21" />
    </symbol>
    <symbol id="syringe" viewBox="0 0 24 24">
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </symbol>
    <symbol id="table-2" viewBox="0 0 24 24">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
    </symbol>
    <symbol id="table-cells-merge" viewBox="0 0 24 24">
      <path d="M12 21v-6" />
      <path d="M12 9V3" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="table-cells-split" viewBox="0 0 24 24">
      <path d="M12 15V9" />
      <path d="M3 15h18" />
      <path d="M3 9h18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </symbol>
    <symbol id="table-columns-split" viewBox="0 0 24 24">
      <path d="M14 14v2" />
      <path d="M14 20v2" />
      <path d="M14 2v2" />
      <path d="M14 8v2" />
      <path d="M2 15h8" />
      <path d="M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" />
      <path d="M2 9h8" />
      <path d="M22 15h-4" />
      <path d="M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" />
      <path d="M22 9h-4" />
      <path d="M5 3v18" />
    </symbol>
    <symbol id="table-of-contents" viewBox="0 0 24 24">
      <path d="M16 5H3" />
      <path d="M16 12H3" />
      <path d="M16 19H3" />
      <path d="M21 5h.01" />
      <path d="M21 12h.01" />
      <path d="M21 19h.01" />
    </symbol>
    <symbol id="table-properties" viewBox="0 0 24 24">
      <path d="M15 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M21 9H3" />
      <path d="M21 15H3" />
    </symbol>
    <symbol id="table-rows-split" viewBox="0 0 24 24">
      <path d="M14 10h2" />
      <path d="M15 22v-8" />
      <path d="M15 2v4" />
      <path d="M2 10h2" />
      <path d="M20 10h2" />
      <path d="M3 19h18" />
      <path d="M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" />
      <path d="M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" />
      <path d="M8 10h2" />
      <path d="M9 22v-8" />
      <path d="M9 2v4" />
    </symbol>
    <symbol id="table" viewBox="0 0 24 24">
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </symbol>
    <symbol id="tablet-smartphone" viewBox="0 0 24 24">
      <rect width="10" height="14" x="3" y="8" rx="2" />
      <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
      <path d="M8 18h.01" />
    </symbol>
    <symbol id="tablet" viewBox="0 0 24 24">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </symbol>
    <symbol id="tablets" viewBox="0 0 24 24">
      <circle cx="7" cy="7" r="5" />
      <circle cx="17" cy="17" r="5" />
      <path d="M12 17h10" />
      <path d="m3.46 10.54 7.08-7.08" />
    </symbol>
    <symbol id="tag-plus" viewBox="0 0 24 24">
      <path d="M16 13h6" />
      <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l1.79-1.79" />
      <path d="M19 10v6" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tag-x" viewBox="0 0 24 24">
      <path d="m16.5 6.5-3.914-3.914A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.43 2.43 0 0 0 3.42 0l1.79-1.79" />
      <path d="m16.5 10.5 5 5" />
      <path d="m21.5 10.5-5 5" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tag" viewBox="0 0 24 24">
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tags" viewBox="0 0 24 24">
      <path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" />
      <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" />
      <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />
    </symbol>
    <symbol id="tally-1" viewBox="0 0 24 24">
      <path d="M4 4v16" />
    </symbol>
    <symbol id="tally-2" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
    </symbol>
    <symbol id="tally-3" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
    </symbol>
    <symbol id="tally-4" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
      <path d="M19 4v16" />
    </symbol>
    <symbol id="tally-5" viewBox="0 0 24 24">
      <path d="M4 4v16" />
      <path d="M9 4v16" />
      <path d="M14 4v16" />
      <path d="M19 4v16" />
      <path d="M22 6 2 18" />
    </symbol>
    <symbol id="tangent" viewBox="0 0 24 24">
      <circle cx="17" cy="4" r="2" />
      <path d="M15.59 5.41 5.41 15.59" />
      <circle cx="4" cy="17" r="2" />
      <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" />
    </symbol>
    <symbol id="target" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="telescope" viewBox="0 0 24 24">
      <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" />
      <path d="m13.56 11.747 4.332-.924" />
      <path d="m16 21-3.105-6.21" />
      <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" />
      <path d="m6.158 8.633 1.114 4.456" />
      <path d="m8 21 3.105-6.21" />
      <circle cx="12" cy="13" r="2" />
    </symbol>
    <symbol id="tent-tree" viewBox="0 0 24 24">
      <circle cx="4" cy="4" r="2" />
      <path d="m14 5 3-3 3 3" />
      <path d="m14 10 3-3 3 3" />
      <path d="M17 14V2" />
      <path d="M17 14H7l-5 8h20Z" />
      <path d="M8 14v8" />
      <path d="m9 14 5 8" />
    </symbol>
    <symbol id="tent" viewBox="0 0 24 24">
      <path d="M3.5 21 14 3" />
      <path d="M20.5 21 10 3" />
      <path d="M15.5 21 12 15l-3.5 6" />
      <path d="M2 21h20" />
    </symbol>
    <symbol id="terminal" viewBox="0 0 24 24">
      <path d="M12 19h8" />
      <path d="m4 17 6-6-6-6" />
    </symbol>
    <symbol id="test-tube-diagonal" viewBox="0 0 24 24">
      <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
      <path d="m16 2 6 6" />
      <path d="M12 16H4" />
    </symbol>
    <symbol id="test-tube" viewBox="0 0 24 24">
      <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" />
      <path d="M8.5 2h7" />
      <path d="M14.5 16h-5" />
    </symbol>
    <symbol id="test-tubes" viewBox="0 0 24 24">
      <path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" />
      <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" />
      <path d="M3 2h7" />
      <path d="M14 2h7" />
      <path d="M9 16H4" />
      <path d="M20 16h-5" />
    </symbol>
    <symbol id="text-align-center" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M17 12H7" />
      <path d="M19 19H5" />
    </symbol>
    <symbol id="text-align-end" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M21 12H9" />
      <path d="M21 19H7" />
    </symbol>
    <symbol id="text-align-justify" viewBox="0 0 24 24">
      <path d="M3 5h18" />
      <path d="M3 12h18" />
      <path d="M3 19h18" />
    </symbol>
    <symbol id="text-align-start" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M15 12H3" />
      <path d="M17 19H3" />
    </symbol>
    <symbol id="text-cursor-input" viewBox="0 0 24 24">
      <path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
      <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
      <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
      <path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
      <path d="M9 6v12" />
    </symbol>
    <symbol id="text-cursor" viewBox="0 0 24 24">
      <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
      <path d="M7 22h1a4 4 0 0 0 4-4" />
      <path d="M7 2h1a4 4 0 0 1 4 4" />
    </symbol>
    <symbol id="text-initial" viewBox="0 0 24 24">
      <path d="M15 5h6" />
      <path d="M15 12h6" />
      <path d="M3 19h18" />
      <path d="m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" />
      <path d="M3.92 10h6.16" />
    </symbol>
    <symbol id="text-quote" viewBox="0 0 24 24">
      <path d="M17 5H3" />
      <path d="M21 12H8" />
      <path d="M21 19H8" />
      <path d="M3 12v7" />
    </symbol>
    <symbol id="text-search" viewBox="0 0 24 24">
      <path d="M21 5H3" />
      <path d="M10 12H3" />
      <path d="M10 19H3" />
      <circle cx="17" cy="15" r="3" />
      <path d="m21 19-1.9-1.9" />
    </symbol>
    <symbol id="text-wrap" viewBox="0 0 24 24">
      <path d="m16 16-3 3 3 3" />
      <path d="M3 12h14.5a1 1 0 0 1 0 7H13" />
      <path d="M3 19h6" />
      <path d="M3 5h18" />
    </symbol>
    <symbol id="theater" viewBox="0 0 24 24">
      <path d="M2 10s3-3 3-8" />
      <path d="M22 10s-3-3-3-8" />
      <path d="M10 2c0 4.4-3.6 8-8 8" />
      <path d="M14 2c0 4.4 3.6 8 8 8" />
      <path d="M2 10s2 2 2 5" />
      <path d="M22 10s-2 2-2 5" />
      <path d="M8 15h8" />
      <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
      <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    </symbol>
    <symbol id="thermometer-snowflake" viewBox="0 0 24 24">
      <path d="m10 20-1.25-2.5L6 18" />
      <path d="M10 4 8.75 6.5 6 6" />
      <path d="M10.585 15H10" />
      <path d="M2 12h6.5L10 9" />
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      <path d="m4 10 1.5 2L4 14" />
      <path d="m7 21 3-6-1.5-3" />
      <path d="m7 3 3 6h2" />
    </symbol>
    <symbol id="thermometer-sun" viewBox="0 0 24 24">
      <path d="M12 2v2" />
      <path d="M12 8a4 4 0 0 0-1.645 7.647" />
      <path d="M2 12h2" />
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m6.34 17.66-1.41 1.41" />
    </symbol>
    <symbol id="thermometer" viewBox="0 0 24 24">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </symbol>
    <symbol id="thumbs-down" viewBox="0 0 24 24">
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
      <path d="M17 14V2" />
    </symbol>
    <symbol id="thumbs-up" viewBox="0 0 24 24">
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
      <path d="M7 10v12" />
    </symbol>
    <symbol id="ticket-check" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="m9 12 2 2 4-4" />
    </symbol>
    <symbol id="ticket-minus" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M9 12h6" />
    </symbol>
    <symbol id="ticket-percent" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M9 9h.01" />
      <path d="m15 9-6 6" />
      <path d="M15 15h.01" />
    </symbol>
    <symbol id="ticket-plus" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M9 12h6" />
      <path d="M12 9v6" />
    </symbol>
    <symbol id="ticket-slash" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="m9.5 14.5 5-5" />
    </symbol>
    <symbol id="ticket-x" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="m9.5 14.5 5-5" />
      <path d="m9.5 9.5 5 5" />
    </symbol>
    <symbol id="ticket" viewBox="0 0 24 24">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </symbol>
    <symbol id="tickets-plane" viewBox="0 0 24 24">
      <path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
      <path d="m12 13.5 3.794.506" />
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
      <path d="M6 10V8" />
      <path d="M6 14v1" />
      <path d="M6 19v2" />
      <rect x="2" y="8" width="20" height="13" rx="2" />
    </symbol>
    <symbol id="tickets" viewBox="0 0 24 24">
      <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
      <path d="M6 10V8" />
      <path d="M6 14v1" />
      <path d="M6 19v2" />
      <rect x="2" y="8" width="20" height="13" rx="2" />
    </symbol>
    <symbol id="timeline" viewBox="0 0 24 24">
      <path d="M4 12h.01" />
      <path d="M4 16h.01" />
      <path d="M4 20h.01" />
      <path d="M4 4h.01" />
      <path d="M4 8h.01" />
      <path d="M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z" />
      <path d="M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z" />
      <path d="M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z" />
    </symbol>
    <symbol id="timer-off" viewBox="0 0 24 24">
      <path d="M10 2h4" />
      <path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
      <path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
      <path d="m2 2 20 20" />
      <path d="M12 12v-2" />
    </symbol>
    <symbol id="timer-reset" viewBox="0 0 24 24">
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
      <path d="M9 17H4v5" />
    </symbol>
    <symbol id="timer" viewBox="0 0 24 24">
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </symbol>
    <symbol id="toggle-left" viewBox="0 0 24 24">
      <circle cx="9" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
    </symbol>
    <symbol id="toggle-right" viewBox="0 0 24 24">
      <circle cx="15" cy="12" r="3" />
      <rect width="20" height="14" x="2" y="5" rx="7" />
    </symbol>
    <symbol id="toilet" viewBox="0 0 24 24">
      <path d="M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" />
      <path d="M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" />
    </symbol>
    <symbol id="tool-case" viewBox="0 0 24 24">
      <path d="M10 15h4" />
      <path d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" />
      <path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" />
      <path d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </symbol>
    <symbol id="toolbox" viewBox="0 0 24 24">
      <path d="M16 12v4" />
      <path d="M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <path d="M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z" />
      <path d="M2 14h20" />
      <path d="M8 12v4" />
    </symbol>
    <symbol id="tornado" viewBox="0 0 24 24">
      <path d="M21 4H3" />
      <path d="M18 8H6" />
      <path d="M19 12H9" />
      <path d="M16 16h-6" />
      <path d="M11 20H9" />
    </symbol>
    <symbol id="torus" viewBox="0 0 24 24">
      <ellipse cx="12" cy="11" rx="3" ry="2" />
      <ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
    </symbol>
    <symbol id="touchpad-off" viewBox="0 0 24 24">
      <path d="M12 20v-6" />
      <path d="M19.656 14H22" />
      <path d="M2 14h12" />
      <path d="m2 2 20 20" />
      <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
      <path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" />
    </symbol>
    <symbol id="touchpad" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 14h20" />
      <path d="M12 20v-6" />
    </symbol>
    <symbol id="towel-rack" viewBox="0 0 24 24">
      <path d="M22 7h-2" />
      <path d="M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" />
      <path d="M9 7H2" />
    </symbol>
    <symbol id="tower-control" viewBox="0 0 24 24">
      <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
      <path d="M8 13v9" />
      <path d="M16 22v-9" />
      <path d="m9 6 1 7" />
      <path d="m15 6-1 7" />
      <path d="M12 6V2" />
      <path d="M13 2h-2" />
    </symbol>
    <symbol id="toy-brick" viewBox="0 0 24 24">
      <rect width="18" height="12" x="3" y="8" rx="1" />
      <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </symbol>
    <symbol id="tractor" viewBox="0 0 24 24">
      <path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
      <path d="M16 18h-5" />
      <path d="M18 5a1 1 0 0 0-1 1v5.573" />
      <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
      <path d="M4 11V4" />
      <path d="M7 15h.01" />
      <path d="M8 10.1V4" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="7" cy="15" r="5" />
    </symbol>
    <symbol id="traffic-cone" viewBox="0 0 24 24">
      <path d="M16.05 10.966a5 2.5 0 0 1-8.1 0" />
      <path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" />
      <path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" />
      <path d="M9.194 6.57a5 2.5 0 0 0 5.61 0" />
    </symbol>
    <symbol id="train-front-tunnel" viewBox="0 0 24 24">
      <path d="M2 22V12a10 10 0 1 1 20 0v10" />
      <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
      <path d="M10 15h.01" />
      <path d="M14 15h.01" />
      <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
      <path d="m9 19-2 3" />
      <path d="m15 19 2 3" />
    </symbol>
    <symbol id="train-front" viewBox="0 0 24 24">
      <path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" />
      <path d="m9 15-1-1" />
      <path d="m15 15 1-1" />
      <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" />
      <path d="m8 19-2 3" />
      <path d="m16 19 2 3" />
    </symbol>
    <symbol id="train-track" viewBox="0 0 24 24">
      <path d="M2 17 17 2" />
      <path d="m2 14 8 8" />
      <path d="m5 11 8 8" />
      <path d="m8 8 8 8" />
      <path d="m11 5 8 8" />
      <path d="m14 2 8 8" />
      <path d="M7 22 22 7" />
    </symbol>
    <symbol id="tram-front" viewBox="0 0 24 24">
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v8" />
      <path d="m8 19-2 3" />
      <path d="m18 22-2-3" />
      <path d="M8 15h.01" />
      <path d="M16 15h.01" />
    </symbol>
    <symbol id="transgender" viewBox="0 0 24 24">
      <path d="M12 16v6" />
      <path d="M14 20h-4" />
      <path d="M18 2h4v4" />
      <path d="m2 2 7.17 7.17" />
      <path d="M2 5.355V2h3.357" />
      <path d="m22 2-7.17 7.17" />
      <path d="M8 5 5 8" />
      <circle cx="12" cy="12" r="4" />
    </symbol>
    <symbol id="trash-2" viewBox="0 0 24 24">
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="trash" viewBox="0 0 24 24">
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </symbol>
    <symbol id="tree-deciduous" viewBox="0 0 24 24">
      <path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" />
      <path d="M12 19v3" />
    </symbol>
    <symbol id="tree-palm" viewBox="0 0 24 24">
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" />
      <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" />
      <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" />
      <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
    </symbol>
    <symbol id="tree-pine" viewBox="0 0 24 24">
      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" />
      <path d="M12 22v-3" />
    </symbol>
    <symbol id="trees" viewBox="0 0 24 24">
      <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </symbol>
    <symbol id="trending-down" viewBox="0 0 24 24">
      <path d="M16 17h6v-6" />
      <path d="m22 17-8.5-8.5-5 5L2 7" />
    </symbol>
    <symbol id="trending-up-down" viewBox="0 0 24 24">
      <path d="M14.828 14.828 21 21" />
      <path d="M21 16v5h-5" />
      <path d="m21 3-9 9-4-4-6 6" />
      <path d="M21 8V3h-5" />
    </symbol>
    <symbol id="trending-up" viewBox="0 0 24 24">
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </symbol>
    <symbol id="triangle-alert" viewBox="0 0 24 24">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </symbol>
    <symbol id="triangle-dashed" viewBox="0 0 24 24">
      <path d="M10.17 4.193a2 2 0 0 1 3.666.013" />
      <path d="M14 21h2" />
      <path d="m15.874 7.743 1 1.732" />
      <path d="m18.849 12.952 1 1.732" />
      <path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" />
      <path d="M4.024 21a2 2 0 0 1-1.839-2.839" />
      <path d="m5.136 12.952-1 1.732" />
      <path d="M8 21h2" />
      <path d="m8.102 7.743-1 1.732" />
    </symbol>
    <symbol id="triangle-right" viewBox="0 0 24 24">
      <path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" />
    </symbol>
    <symbol id="triangle" viewBox="0 0 24 24">
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </symbol>
    <symbol id="trophy" viewBox="0 0 24 24">
      <path d="M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2" />
      <path d="M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2" />
      <path d="M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3" />
      <path d="M4 22h16" />
      <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" />
      <path d="M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3" />
    </symbol>
    <symbol id="truck-electric" viewBox="0 0 24 24">
      <path d="M14 19V7a2 2 0 0 0-2-2H9" />
      <path d="M15 19H9" />
      <path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" />
      <path d="M2 13v5a1 1 0 0 0 1 1h2" />
      <path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" />
      <circle cx="17" cy="19" r="2" />
      <circle cx="7" cy="19" r="2" />
    </symbol>
    <symbol id="truck" viewBox="0 0 24 24">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </symbol>
    <symbol id="turkish-lira" viewBox="0 0 24 24">
      <path d="M15 4 5 9" />
      <path d="m15 8.5-10 5" />
      <path d="M18 12a9 9 0 0 1-9 9V3" />
    </symbol>
    <symbol id="turntable" viewBox="0 0 24 24">
      <path d="M10 12.01h.01" />
      <path d="M18 8v4a8 8 0 0 1-1.07 4" />
      <circle cx="10" cy="12" r="4" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </symbol>
    <symbol id="turtle" viewBox="0 0 24 24">
      <path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" />
      <path d="M4.82 7.9 8 10" />
      <path d="M15.18 7.9 12 10" />
      <path d="M16.93 10H20a2 2 0 0 1 0 4H2" />
    </symbol>
    <symbol id="tv-minimal-play" viewBox="0 0 24 24">
      <path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" />
      <path d="M7 21h10" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
    </symbol>
    <symbol id="tv-minimal" viewBox="0 0 24 24">
      <path d="M7 21h10" />
      <rect width="20" height="14" x="2" y="3" rx="2" />
    </symbol>
    <symbol id="tv" viewBox="0 0 24 24">
      <path d="m17 2-5 5-5-5" />
      <rect width="20" height="15" x="2" y="7" rx="2" />
    </symbol>
    <symbol id="type-outline" viewBox="0 0 24 24">
      <path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" />
    </symbol>
    <symbol id="type" viewBox="0 0 24 24">
      <path d="M12 4v16" />
      <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
      <path d="M9 20h6" />
    </symbol>
    <symbol id="umbrella-off" viewBox="0 0 24 24">
      <path d="M12 13v7a2 2 0 0 0 4 0" />
      <path d="M12 2v2" />
      <path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" />
      <path d="m2 2 20 20" />
      <path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" />
    </symbol>
    <symbol id="umbrella" viewBox="0 0 24 24">
      <path d="M12 13v7a2 2 0 0 0 4 0" />
      <path d="M12 2v2" />
      <path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" />
    </symbol>
    <symbol id="underline" viewBox="0 0 24 24">
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </symbol>
    <symbol id="undo-2" viewBox="0 0 24 24">
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
    </symbol>
    <symbol id="undo-dot" viewBox="0 0 24 24">
      <path d="M21 17a9 9 0 0 0-15-6.7L3 13" />
      <path d="M3 7v6h6" />
      <circle cx="12" cy="17" r="1" />
    </symbol>
    <symbol id="undo" viewBox="0 0 24 24">
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </symbol>
    <symbol id="unfold-horizontal" viewBox="0 0 24 24">
      <path d="M16 12h6" />
      <path d="M8 12H2" />
      <path d="M12 2v2" />
      <path d="M12 8v2" />
      <path d="M12 14v2" />
      <path d="M12 20v2" />
      <path d="m19 15 3-3-3-3" />
      <path d="m5 9-3 3 3 3" />
    </symbol>
    <symbol id="unfold-vertical" viewBox="0 0 24 24">
      <path d="M12 22v-6" />
      <path d="M12 8V2" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="m15 19-3 3-3-3" />
      <path d="m15 5-3-3-3 3" />
    </symbol>
    <symbol id="ungroup" viewBox="0 0 24 24">
      <rect x="11" y="14" width="10" height="7" rx="2" />
      <rect x="3" y="3" width="10" height="7" rx="2" />
    </symbol>
    <symbol id="university" viewBox="0 0 24 24">
      <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
      <path d="M18 12h.01" />
      <path d="M18 16h.01" />
      <path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
      <path d="M6 12h.01" />
      <path d="M6 16h.01" />
      <circle cx="12" cy="10" r="2" />
    </symbol>
    <symbol id="unlink-2" viewBox="0 0 24 24">
      <path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
    </symbol>
    <symbol id="unlink" viewBox="0 0 24 24">
      <path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
      <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
      <line x1="8" x2="8" y1="2" y2="5" />
      <line x1="2" x2="5" y1="8" y2="8" />
      <line x1="16" x2="16" y1="19" y2="22" />
      <line x1="19" x2="22" y1="16" y2="16" />
    </symbol>
    <symbol id="unplug" viewBox="0 0 24 24">
      <path d="m19 5 3-3" />
      <path d="m2 22 3-3" />
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
      <path d="M7.5 13.5 10 11" />
      <path d="M10.5 16.5 13 14" />
      <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
    </symbol>
    <symbol id="upload" viewBox="0 0 24 24">
      <path d="M12 3v12" />
      <path d="m17 8-5-5-5 5" />
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </symbol>
    <symbol id="usb" viewBox="0 0 24 24">
      <circle cx="10" cy="7" r="1" />
      <circle cx="4" cy="20" r="1" />
      <path d="M4.7 19.3 19 5" />
      <path d="m21 3-3 1 2 2Z" />
      <path d="M9.26 7.68 5 12l2 5" />
      <path d="m10 14 5 2 3.5-3.5" />
      <path d="m18 12 1-1 1 1-1 1Z" />
    </symbol>
    <symbol id="user-check" viewBox="0 0 24 24">
      <path d="m16 11 2 2 4-4" />
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="user-cog" viewBox="0 0 24 24">
      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
      <path d="m14.305 16.53.923-.382" />
      <path d="m15.228 13.852-.923-.383" />
      <path d="m16.852 12.228-.383-.923" />
      <path d="m16.852 17.772-.383.924" />
      <path d="m19.148 12.228.383-.923" />
      <path d="m19.53 18.696-.382-.924" />
      <path d="m20.772 13.852.924-.383" />
      <path d="m20.772 16.148.924.383" />
      <circle cx="18" cy="15" r="3" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="user-key" viewBox="0 0 24 24">
      <path d="M20 11v6" />
      <path d="M20 13h2" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
      <circle cx="10" cy="7" r="4" />
      <circle cx="20" cy="19" r="2" />
    </symbol>
    <symbol id="user-lock" viewBox="0 0 24 24">
      <path d="M19 16v-2a2 2 0 0 0-4 0v2" />
      <path d="M9.5 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <rect x="13" y="16" width="8" height="5" rx=".899" />
    </symbol>
    <symbol id="user-minus" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </symbol>
    <symbol id="user-pen" viewBox="0 0 24 24">
      <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <circle cx="10" cy="7" r="4" />
    </symbol>
    <symbol id="user-plus" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </symbol>
    <symbol id="user-round-arrow-left" viewBox="0 0 24 24">
      <path d="m19 16-3 3" />
      <path d="M2 21a8 8 0 0 1 12.664-6.5" />
      <path d="M22 19h-6l3 3" />
      <circle cx="10" cy="8" r="5" />
    </symbol>
    <symbol id="user-round-check" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="m16 19 2 2 4-4" />
    </symbol>
    <symbol id="user-round-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="user-round-key" viewBox="0 0 24 24">
      <path d="M19 11v6" />
      <path d="M19 13h2" />
      <path d="M2 21a8 8 0 0 1 12.868-6.349" />
      <circle cx="10" cy="8" r="5" />
      <circle cx="19" cy="19" r="2" />
    </symbol>
    <symbol id="user-round-minus" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 19h-6" />
    </symbol>
    <symbol id="user-round-pen" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 10.821-7.487" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <circle cx="10" cy="8" r="5" />
    </symbol>
    <symbol id="user-round-plus" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 13.292-6" />
      <circle cx="10" cy="8" r="5" />
      <path d="M19 16v6" />
      <path d="M22 19h-6" />
    </symbol>
    <symbol id="user-round-search" viewBox="0 0 24 24">
      <circle cx="10" cy="8" r="5" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <circle cx="18" cy="18" r="3" />
      <path d="m22 22-1.9-1.9" />
    </symbol>
    <symbol id="user-round-x" viewBox="0 0 24 24">
      <path d="M2 21a8 8 0 0 1 11.873-7" />
      <circle cx="10" cy="8" r="5" />
      <path d="m17 17 5 5" />
      <path d="m22 17-5 5" />
    </symbol>
    <symbol id="user-round" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </symbol>
    <symbol id="user-search" viewBox="0 0 24 24">
      <circle cx="10" cy="7" r="4" />
      <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="17" cy="17" r="3" />
      <path d="m21 21-1.9-1.9" />
    </symbol>
    <symbol id="user-shield" viewBox="0 0 24 24">
      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
      <path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="user-star" viewBox="0 0 24 24">
      <path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" />
      <path d="M8 15H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
    </symbol>
    <symbol id="user-x" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="17" x2="22" y1="8" y2="13" />
      <line x1="22" x2="17" y1="8" y2="13" />
    </symbol>
    <symbol id="user" viewBox="0 0 24 24">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </symbol>
    <symbol id="users-round" viewBox="0 0 24 24">
      <path d="M18 21a8 8 0 0 0-16 0" />
      <circle cx="10" cy="8" r="5" />
      <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
    </symbol>
    <symbol id="users" viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <path d="M16 3.128a4 4 0 0 1 0 7.744" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <circle cx="9" cy="7" r="4" />
    </symbol>
    <symbol id="utensils-crossed" viewBox="0 0 24 24">
      <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
      <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
      <path d="m2.1 21.8 6.4-6.3" />
      <path d="m19 5-7 7" />
    </symbol>
    <symbol id="utensils" viewBox="0 0 24 24">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </symbol>
    <symbol id="utility-pole" viewBox="0 0 24 24">
      <path d="M12 2v20" />
      <path d="M2 5h20" />
      <path d="M3 3v2" />
      <path d="M7 3v2" />
      <path d="M17 3v2" />
      <path d="M21 3v2" />
      <path d="m19 5-7 7-7-7" />
    </symbol>
    <symbol id="van" viewBox="0 0 24 24">
      <path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" />
      <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" />
      <path d="M9 18h5" />
      <circle cx="16" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </symbol>
    <symbol id="variable" viewBox="0 0 24 24">
      <path d="M8 21s-4-3-4-9 4-9 4-9" />
      <path d="M16 3s4 3 4 9-4 9-4 9" />
      <line x1="15" x2="9" y1="9" y2="15" />
      <line x1="9" x2="15" y1="9" y2="15" />
    </symbol>
    <symbol id="vault" viewBox="0 0 24 24">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <path d="m7.9 7.9 2.7 2.7" />
      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
      <path d="m13.4 10.6 2.7-2.7" />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <path d="m7.9 16.1 2.7-2.7" />
      <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />
      <path d="m13.4 13.4 2.7 2.7" />
      <circle cx="12" cy="12" r="2" />
    </symbol>
    <symbol id="vector-square" viewBox="0 0 24 24">
      <path d="M19.5 7a24 24 0 0 1 0 10" />
      <path d="M4.5 7a24 24 0 0 0 0 10" />
      <path d="M7 19.5a24 24 0 0 0 10 0" />
      <path d="M7 4.5a24 24 0 0 1 10 0" />
      <rect x="17" y="17" width="5" height="5" rx="1" />
      <rect x="17" y="2" width="5" height="5" rx="1" />
      <rect x="2" y="17" width="5" height="5" rx="1" />
      <rect x="2" y="2" width="5" height="5" rx="1" />
    </symbol>
    <symbol id="vegan" viewBox="0 0 24 24">
      <path d="M16 8q6 0 6-6-6 0-6 6" />
      <path d="M17.41 3.59a10 10 0 1 0 3 3" />
      <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
    </symbol>
    <symbol id="venetian-mask" viewBox="0 0 24 24">
      <path d="M18 11c-1.5 0-2.5.5-3 2" />
      <path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" />
      <path d="M6 11c1.5 0 2.5.5 3 2" />
    </symbol>
    <symbol id="venus-and-mars" viewBox="0 0 24 24">
      <path d="M10 20h4" />
      <path d="M12 16v6" />
      <path d="M17 2h4v4" />
      <path d="m21 2-5.46 5.46" />
      <circle cx="12" cy="11" r="5" />
    </symbol>
    <symbol id="venus" viewBox="0 0 24 24">
      <path d="M12 15v7" />
      <path d="M9 19h6" />
      <circle cx="12" cy="9" r="6" />
    </symbol>
    <symbol id="vibrate-off" viewBox="0 0 24 24">
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" />
      <path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="vibrate" viewBox="0 0 24 24">
      <path d="m2 8 2 2-2 2 2 2-2 2" />
      <path d="m22 8-2 2 2 2-2 2 2 2" />
      <rect width="8" height="14" x="8" y="5" rx="1" />
    </symbol>
    <symbol id="video-off" viewBox="0 0 24 24">
      <path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" />
      <path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="video" viewBox="0 0 24 24">
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </symbol>
    <symbol id="videotape" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M2 8h20" />
      <circle cx="8" cy="14" r="2" />
      <path d="M8 12h8" />
      <circle cx="16" cy="14" r="2" />
    </symbol>
    <symbol id="view" viewBox="0 0 24 24">
      <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
      <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
      <circle cx="12" cy="12" r="1" />
      <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
    </symbol>
    <symbol id="voicemail" viewBox="0 0 24 24">
      <circle cx="6" cy="12" r="4" />
      <circle cx="18" cy="12" r="4" />
      <line x1="6" x2="18" y1="16" y2="16" />
    </symbol>
    <symbol id="volleyball" viewBox="0 0 24 24">
      <path d="M11 7a16 16 20 0 1 10.98 4.362" />
      <path d="M12 12a13 13 0 0 1-8.66 5" />
      <path d="M16.83 13.634a16 16 0 0 1-9.267 7.328" />
      <path d="M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10" />
      <path d="M8.17 15.366a16 16 0 0 1-1.713-11.69" />
      <circle cx="12" cy="12" r="10" />
    </symbol>
    <symbol id="volume-1" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
    </symbol>
    <symbol id="volume-2" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
    </symbol>
    <symbol id="volume-off" viewBox="0 0 24 24">
      <path d="M16 9a5 5 0 0 1 .95 2.293" />
      <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
      <path d="m2 2 20 20" />
      <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
      <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
    </symbol>
    <symbol id="volume-x" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <line x1="22" x2="16" y1="9" y2="15" />
      <line x1="16" x2="22" y1="9" y2="15" />
    </symbol>
    <symbol id="volume" viewBox="0 0 24 24">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
    </symbol>
    <symbol id="vote" viewBox="0 0 24 24">
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </symbol>
    <symbol id="wallet-cards" viewBox="0 0 24 24">
      <path d="M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21" />
      <path d="M3 7h18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </symbol>
    <symbol id="wallet-minimal" viewBox="0 0 24 24">
      <path d="M17 14h.01" />
      <path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" />
    </symbol>
    <symbol id="wallet" viewBox="0 0 24 24">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </symbol>
    <symbol id="wallpaper" viewBox="0 0 24 24">
      <path d="M12 17v4" />
      <path d="M8 21h8" />
      <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" />
      <circle cx="8" cy="9" r="2" />
      <rect x="2" y="3" width="20" height="14" rx="2" />
    </symbol>
    <symbol id="wand-sparkles" viewBox="0 0 24 24">
      <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
      <path d="m14 7 3 3" />
      <path d="M5 6v4" />
      <path d="M19 14v4" />
      <path d="M10 2v2" />
      <path d="M7 8H3" />
      <path d="M21 16h-4" />
      <path d="M11 3H9" />
    </symbol>
    <symbol id="wand" viewBox="0 0 24 24">
      <path d="M15 4V2" />
      <path d="M15 16v-2" />
      <path d="M8 9h2" />
      <path d="M20 9h2" />
      <path d="M17.8 11.8 19 13" />
      <path d="M15 9h.01" />
      <path d="M17.8 6.2 19 5" />
      <path d="m3 21 9-9" />
      <path d="M12.2 6.2 11 5" />
    </symbol>
    <symbol id="warehouse" viewBox="0 0 24 24">
      <path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" />
      <path d="M6 13h12" />
      <path d="M6 17h12" />
    </symbol>
    <symbol id="washing-machine" viewBox="0 0 24 24">
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </symbol>
    <symbol id="watch" viewBox="0 0 24 24">
      <path d="M12 10v2.2l1.6 1" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
      <circle cx="12" cy="12" r="6" />
    </symbol>
    <symbol id="waves-arrow-down" viewBox="0 0 24 24">
      <path d="M12 10L12 2" />
      <path d="M16 6L12 10L8 6" />
      <path d="M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15" />
      <path d="M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21" />
    </symbol>
    <symbol id="waves-arrow-up" viewBox="0 0 24 24">
      <path d="M12 2v8" />
      <path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="m8 6 4-4 4 4" />
    </symbol>
    <symbol id="waves-horizontal" viewBox="0 0 24 24">
      <path d="M2 12q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 19q2.5 2 5 0t5 0 5 0 5 0" />
      <path d="M2 5q2.5 2 5 0t5 0 5 0 5 0" />
    </symbol>
    <symbol id="waves-ladder" viewBox="0 0 24 24">
      <path d="M19 5a2 2 0 0 0-2 2v11" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M7 13h10" />
      <path d="M7 9h10" />
      <path d="M9 5a2 2 0 0 0-2 2v11" />
    </symbol>
    <symbol id="waves-vertical" viewBox="0 0 24 24">
      <path d="M12 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M19 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M5 2q2 2.5 0 5t0 5 0 5 0 5" />
    </symbol>
    <symbol id="waypoints" viewBox="0 0 24 24">
      <path d="m10.586 5.414-5.172 5.172" />
      <path d="m18.586 13.414-5.172 5.172" />
      <path d="M6 12h12" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="4" cy="12" r="2" />
    </symbol>
    <symbol id="webcam-off" viewBox="0 0 24 24">
      <path d="M12 22v-4" />
      <path d="M12.754 7.096a3 3 0 0 1 2.15 2.15" />
      <path d="M12.863 12.873a3 3 0 0 1-3.736-3.735" />
      <path d="M16.566 16.57A8 8 0 0 1 5.43 5.433" />
      <path d="m2 2 20 20" />
      <path d="M7 22h10" />
      <path d="M8.478 2.817a8 8 0 0 1 10.705 10.705" />
    </symbol>
    <symbol id="webcam" viewBox="0 0 24 24">
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </symbol>
    <symbol id="webhook-off" viewBox="0 0 24 24">
      <path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" />
      <path d="M9 3.4a4 4 0 0 1 6.52.66" />
      <path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" />
      <path d="M20.3 20.3a4 4 0 0 1-2.3.7" />
      <path d="M18.6 13a4 4 0 0 1 3.357 3.414" />
      <path d="m12 6 .6 1" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="webhook" viewBox="0 0 24 24">
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" />
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" />
    </symbol>
    <symbol id="weight-tilde" viewBox="0 0 24 24">
      <path d="M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" />
      <path d="M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" />
      <circle cx="12" cy="5" r="3" />
    </symbol>
    <symbol id="weight" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="3" />
      <path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" />
    </symbol>
    <symbol id="wheat-off" viewBox="0 0 24 24">
      <path d="m2 22 10-10" />
      <path d="m16 8-1.17 1.17" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" />
      <path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" />
      <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" />
      <path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="wheat" viewBox="0 0 24 24">
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
    </symbol>
    <symbol id="whole-word" viewBox="0 0 24 24">
      <circle cx="7" cy="12" r="3" />
      <path d="M10 9v6" />
      <circle cx="17" cy="12" r="3" />
      <path d="M14 7v8" />
      <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
    </symbol>
    <symbol id="wifi-cog" viewBox="0 0 24 24">
      <path d="m14.305 19.53.923-.382" />
      <path d="m15.228 16.852-.923-.383" />
      <path d="m16.852 15.228-.383-.923" />
      <path d="m16.852 20.772-.383.924" />
      <path d="m19.148 15.228.383-.923" />
      <path d="m19.53 21.696-.382-.924" />
      <path d="M2 7.82a15 15 0 0 1 20 0" />
      <path d="m20.772 16.852.924-.383" />
      <path d="m20.772 19.148.924.383" />
      <path d="M5 11.858a10 10 0 0 1 11.5-1.785" />
      <path d="M8.5 15.429a5 5 0 0 1 2.413-1.31" />
      <circle cx="18" cy="18" r="3" />
    </symbol>
    <symbol id="wifi-high" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </symbol>
    <symbol id="wifi-low" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </symbol>
    <symbol id="wifi-off" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      <path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
      <path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
      <path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
      <path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="wifi-pen" viewBox="0 0 24 24">
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
      <path d="M5 12.859a10 10 0 0 1 10.5-2.222" />
      <path d="M8.5 16.429a5 5 0 0 1 3-1.406" />
    </symbol>
    <symbol id="wifi-sync" viewBox="0 0 24 24">
      <path d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
      <path d="M11.965 14.105h4" />
      <path d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M21.965 22.105v-4" />
      <path d="M5 12.86a10 10 0 0 1 3-2.032" />
      <path d="M8.5 16.429h.01" />
    </symbol>
    <symbol id="wifi-zero" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
    </symbol>
    <symbol id="wifi" viewBox="0 0 24 24">
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </symbol>
    <symbol id="wind-arrow-down" viewBox="0 0 24 24">
      <path d="M10 2v8" />
      <path d="M12.8 21.6A2 2 0 1 0 14 18H2" />
      <path d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
      <path d="m6 6 4 4 4-4" />
    </symbol>
    <symbol id="wind" viewBox="0 0 24 24">
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </symbol>
    <symbol id="wine-off" viewBox="0 0 24 24">
      <path d="M8 22h8" />
      <path d="M7 10h3m7 0h-1.343" />
      <path d="M12 15v7" />
      <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </symbol>
    <symbol id="wine" viewBox="0 0 24 24">
      <path d="M8 22h8" />
      <path d="M7 10h10" />
      <path d="M12 15v7" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
    </symbol>
    <symbol id="workflow" viewBox="0 0 24 24">
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </symbol>
    <symbol id="worm" viewBox="0 0 24 24">
      <path d="m19 12-1.5 3" />
      <path d="M19.63 18.81 22 20" />
      <path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" />
    </symbol>
    <symbol id="wrench-off" viewBox="0 0 24 24">
      <path d="M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842" />
      <path d="m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88" />
      <path d="m2 2 20 20" />
    </symbol>
    <symbol id="wrench" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </symbol>
    <symbol id="x-line-top" viewBox="0 0 24 24">
      <path d="M18 4H6" />
      <path d="M18 8 6 20" />
      <path d="m6 8 12 12" />
    </symbol>
    <symbol id="x" viewBox="0 0 24 24">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </symbol>
    <symbol id="zap-off" viewBox="0 0 24 24">
      <path d="M10.768 5.111 13.44 2.44a1.5 1.5 0 012.474 1.561l-1.633 4.625" />
      <path d="m18.889 13.232.672-.672A1.5 1.5 0 0018.5 10h-2.844" />
      <path d="m2 2 20 20" />
      <path d="m7.94 7.94-3.5 3.499A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l5.5-5.5" />
    </symbol>
    <symbol id="zap" viewBox="0 0 24 24">
      <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
    </symbol>
    <symbol id="zodiac-aquarius" viewBox="0 0 24 24">
      <path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" />
      <path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" />
    </symbol>
    <symbol id="zodiac-aries" viewBox="0 0 24 24">
      <path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" />
      <path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" />
    </symbol>
    <symbol id="zodiac-cancer" viewBox="0 0 24 24">
      <path d="M21 14.5A9 6.5 0 0 1 5.5 19" />
      <path d="M3 9.5A9 6.5 0 0 1 18.5 5" />
      <circle cx="17.5" cy="14.5" r="3.5" />
      <circle cx="6.5" cy="9.5" r="3.5" />
    </symbol>
    <symbol id="zodiac-capricorn" viewBox="0 0 24 24">
      <path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" />
      <path d="M7 19V6a3 3 0 0 0-3-3h0" />
      <circle cx="17" cy="17" r="3" />
    </symbol>
    <symbol id="zodiac-gemini" viewBox="0 0 24 24">
      <path d="M16 4.525v14.948" />
      <path d="M20 3A17 17 0 0 1 4 3" />
      <path d="M4 21a17 17 0 0 1 16 0" />
      <path d="M8 4.525v14.948" />
    </symbol>
    <symbol id="zodiac-leo" viewBox="0 0 24 24">
      <path d="M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" />
      <circle cx="7" cy="16" r="3" />
    </symbol>
    <symbol id="zodiac-libra" viewBox="0 0 24 24">
      <path d="M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" />
      <path d="M3 20h18" />
    </symbol>
    <symbol id="zodiac-ophiuchus" viewBox="0 0 24 24">
      <path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" />
      <path d="M6 3v12a6 6 0 0 0 12 0V3" />
    </symbol>
    <symbol id="zodiac-pisces" viewBox="0 0 24 24">
      <path d="M19 21a15 15 0 0 1 0-18" />
      <path d="M20 12H4" />
      <path d="M5 3a15 15 0 0 1 0 18" />
    </symbol>
    <symbol id="zodiac-sagittarius" viewBox="0 0 24 24">
      <path d="M15 3h6v6" />
      <path d="M21 3 3 21" />
      <path d="m9 9 6 6" />
    </symbol>
    <symbol id="zodiac-scorpio" viewBox="0 0 24 24">
      <path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" />
      <path d="m22 19-3 3" />
      <path d="M5 19V5.5a1 1 0 0 1 5 0" />
      <path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" />
    </symbol>
    <symbol id="zodiac-taurus" viewBox="0 0 24 24">
      <circle cx="12" cy="15" r="6" />
      <path d="M18 3A6 6 0 0 1 6 3" />
    </symbol>
    <symbol id="zodiac-virgo" viewBox="0 0 24 24">
      <path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" />
      <path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" />
      <path d="M6 19V6a3 3 0 0 0-3-3h0" />
      <path d="M6 5.5a1 1 0 0 1 5 0V19" />
    </symbol>
    <symbol id="zoom-in" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="11" x2="11" y1="8" y2="14" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </symbol>
    <symbol id="zoom-out" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" x2="16.65" y1="21" y2="16.65" />
      <line x1="8" x2="14" y1="11" y2="11" />
    </symbol>
  </defs>
</svg>
`,Id={install(n){const a=document.createElement("div");a.id="lucide-sprite",a.style.display="none",a.innerHTML=Rd,document.body.prepend(a)}},Xa=kh(jd);Xa.use(Id);Xa.mount("#app");
