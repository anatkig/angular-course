function md(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function fd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ll={exports:{}},Co={},Ul={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),hd=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),Cd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),kd=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),da=Symbol.iterator;function Td(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Fl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,zl={};function vn(e,t,n){this.props=e,this.context=t,this.refs=zl,this.updater=n||Fl}vn.prototype.isReactComponent={};vn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hl(){}Hl.prototype=vn.prototype;function fs(e,t,n){this.props=e,this.context=t,this.refs=zl,this.updater=n||Fl}var hs=fs.prototype=new Hl;hs.constructor=fs;_l(hs,vn.prototype);hs.isPureReactComponent=!0;var pa=Array.isArray,Bl=Object.prototype.hasOwnProperty,gs={current:null},Wl={key:!0,ref:!0,__self:!0,__source:!0};function $l(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Bl.call(t,r)&&!Wl.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:lr,type:e,key:i,ref:s,props:o,_owner:gs.current}}function bd(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ma=/\/+/g;function Wo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jd(""+e.key):t.toString(36)}function Mr(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lr:case hd:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Wo(s,0):r,pa(o)?(n="",e!=null&&(n=e.replace(ma,"$&/")+"/"),Mr(o,t,n,"",function(u){return u})):o!=null&&(vs(o)&&(o=bd(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(ma,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",pa(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+Wo(i,a);s+=Mr(i,t,n,l,o)}else if(l=Td(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+Wo(i,a++),s+=Mr(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vr(e,t,n){if(e==null)return e;var r=[],o=0;return Mr(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Id(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},qr={transition:null},Ed={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:qr,ReactCurrentOwner:gs};function Vl(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=vn;R.Fragment=gd;R.Profiler=yd;R.PureComponent=fs;R.StrictMode=vd;R.Suspense=Sd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;R.act=Vl;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_l({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=gs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Bl.call(t,l)&&!Wl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:lr,type:e.type,key:o,ref:i,props:r,_owner:s}};R.createContext=function(e){return e={$$typeof:xd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wd,_context:e},e.Consumer=e};R.createElement=$l;R.createFactory=function(e){var t=$l.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Cd,render:e}};R.isValidElement=vs;R.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Id}};R.memo=function(e,t){return{$$typeof:kd,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};R.unstable_act=Vl;R.useCallback=function(e,t){return ce.current.useCallback(e,t)};R.useContext=function(e){return ce.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};R.useEffect=function(e,t){return ce.current.useEffect(e,t)};R.useId=function(){return ce.current.useId()};R.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ce.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};R.useRef=function(e){return ce.current.useRef(e)};R.useState=function(e){return ce.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ce.current.useTransition()};R.version="18.3.1";Ul.exports=R;var C=Ul.exports;const Ql=fd(C),Pd=md({__proto__:null,default:Ql},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=C,Nd=Symbol.for("react.element"),Rd=Symbol.for("react.fragment"),Dd=Object.prototype.hasOwnProperty,Md=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function Gl(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Dd.call(t,r)&&!qd.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Nd,type:e,key:i,ref:s,props:o,_owner:Md.current}}Co.Fragment=Rd;Co.jsx=Gl;Co.jsxs=Gl;Ll.exports=Co;var c=Ll.exports,vi={},Kl={exports:{}},Se={},Jl={exports:{}},Xl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,P){var N=j.length;j.push(P);e:for(;0<N;){var V=N-1>>>1,Y=j[V];if(0<o(Y,P))j[V]=P,j[N]=Y,N=V;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var P=j[0],N=j.pop();if(N!==P){j[0]=N;e:for(var V=0,Y=j.length,hr=Y>>>1;V<hr;){var At=2*(V+1)-1,Bo=j[At],Tt=At+1,gr=j[Tt];if(0>o(Bo,N))Tt<Y&&0>o(gr,Bo)?(j[V]=gr,j[Tt]=N,V=Tt):(j[V]=Bo,j[At]=N,V=At);else if(Tt<Y&&0>o(gr,N))j[V]=gr,j[Tt]=N,V=Tt;else break e}}return P}function o(j,P){var N=j.sortIndex-P.sortIndex;return N!==0?N:j.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,m=null,g=3,y=!1,v=!1,x=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(j){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=j)r(u),P.sortIndex=P.expirationTime,t(l,P);else break;P=n(u)}}function w(j){if(x=!1,h(j),!v)if(n(l)!==null)v=!0,zo(A);else{var P=n(u);P!==null&&Ho(w,P.startTime-j)}}function A(j,P){v=!1,x&&(x=!1,p(E),E=-1),y=!0;var N=g;try{for(h(P),m=n(l);m!==null&&(!(m.expirationTime>P)||j&&!ve());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var Y=V(m.expirationTime<=P);P=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===n(l)&&r(l),h(P)}else r(l);m=n(l)}if(m!==null)var hr=!0;else{var At=n(u);At!==null&&Ho(w,At.startTime-P),hr=!1}return hr}finally{m=null,g=N,y=!1}}var T=!1,I=null,E=-1,_=5,O=-1;function ve(){return!(e.unstable_now()-O<_)}function xn(){if(I!==null){var j=e.unstable_now();O=j;var P=!0;try{P=I(!0,j)}finally{P?Cn():(T=!1,I=null)}}else T=!1}var Cn;if(typeof d=="function")Cn=function(){d(xn)};else if(typeof MessageChannel<"u"){var ca=new MessageChannel,pd=ca.port2;ca.port1.onmessage=xn,Cn=function(){pd.postMessage(null)}}else Cn=function(){S(xn,0)};function zo(j){I=j,T||(T=!0,Cn())}function Ho(j,P){E=S(function(){j(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,zo(A))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var N=g;g=P;try{return j()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,P){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var N=g;g=j;try{return P()}finally{g=N}},e.unstable_scheduleCallback=function(j,P,N){var V=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,j){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,j={id:f++,callback:P,priorityLevel:j,startTime:N,expirationTime:Y,sortIndex:-1},N>V?(j.sortIndex=N,t(u,j),n(l)===null&&j===n(u)&&(x?(p(E),E=-1):x=!0,Ho(w,N-V))):(j.sortIndex=Y,t(l,j),v||y||(v=!0,zo(A))),j},e.unstable_shouldYield=ve,e.unstable_wrapCallback=function(j){var P=g;return function(){var N=g;g=P;try{return j.apply(this,arguments)}finally{g=N}}}})(Xl);Jl.exports=Xl;var Ld=Jl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud=C,Ce=Ld;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yl=new Set,Bn={};function Ft(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Bn[e]=t,e=0;e<t.length;e++)Yl.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,Fd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fa={},ha={};function _d(e){return yi.call(ha,e)?!0:yi.call(fa,e)?!1:Fd.test(e)?ha[e]=!0:(fa[e]=!0,!1)}function zd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hd(e,t,n,r){if(t===null||typeof t>"u"||zd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var ys=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ys,ws);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ys,ws);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ys,ws);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function xs(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hd(t,n,o,r)&&(n=null),r||o===null?_d(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ye=Ud.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),Cs=Symbol.for("react.strict_mode"),wi=Symbol.for("react.profiler"),Zl=Symbol.for("react.provider"),eu=Symbol.for("react.context"),Ss=Symbol.for("react.forward_ref"),xi=Symbol.for("react.suspense"),Ci=Symbol.for("react.suspense_list"),ks=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),tu=Symbol.for("react.offscreen"),ga=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,$o;function Pn(e){if($o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$o=t&&t[1]||""}return`
`+$o+e}var Vo=!1;function Qo(e,t){if(!e||Vo)return"";Vo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Vo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Bd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Qo(e.type,!1),e;case 11:return e=Qo(e.type.render,!1),e;case 1:return e=Qo(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Wt:return"Portal";case wi:return"Profiler";case Cs:return"StrictMode";case xi:return"Suspense";case Ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case eu:return(e.displayName||"Context")+".Consumer";case Zl:return(e._context.displayName||"Context")+".Provider";case Ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ks:return t=e.displayName||null,t!==null?t:Si(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return Si(e(t))}catch{}}return null}function Wd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(t);case 8:return t===Cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e){var t=nu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=$d(e))}function ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ki(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ou(e,t){t=t.checked,t!=null&&xs(e,"checked",t,!1)}function Ai(e,t){ou(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ti(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ya(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ti(e,t,n){(t!=="number"||Qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(On(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function iu(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function su(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?su(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function lu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function uu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=lu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Qd=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Qd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Ei(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oi=null,rn=null,on=null;function Ca(e){if(e=dr(e)){if(typeof Oi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=bo(t),Oi(e.stateNode,e.type,t))}}function cu(e){rn?on?on.push(e):on=[e]:rn=e}function du(){if(rn){var e=rn,t=on;if(on=rn=null,Ca(e),t)for(e=0;e<t.length;e++)Ca(t[e])}}function pu(e,t){return e(t)}function mu(){}var Go=!1;function fu(e,t,n){if(Go)return e(t,n);Go=!0;try{return pu(e,t,n)}finally{Go=!1,(rn!==null||on!==null)&&(mu(),du())}}function $n(e,t){var n=e.stateNode;if(n===null)return null;var r=bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ni=!1;if(Ge)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){Ni=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{Ni=!1}function Gd(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Mn=!1,Gr=null,Kr=!1,Ri=null,Kd={onError:function(e){Mn=!0,Gr=e}};function Jd(e,t,n,r,o,i,s,a,l){Mn=!1,Gr=null,Gd.apply(Kd,arguments)}function Xd(e,t,n,r,o,i,s,a,l){if(Jd.apply(this,arguments),Mn){if(Mn){var u=Gr;Mn=!1,Gr=null}else throw Error(k(198));Kr||(Kr=!0,Ri=u)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sa(e){if(_t(e)!==e)throw Error(k(188))}function Yd(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Sa(o),e;if(i===r)return Sa(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function gu(e){return e=Yd(e),e!==null?vu(e):null}function vu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vu(e);if(t!==null)return t;e=e.sibling}return null}var yu=Ce.unstable_scheduleCallback,ka=Ce.unstable_cancelCallback,Zd=Ce.unstable_shouldYield,ep=Ce.unstable_requestPaint,Q=Ce.unstable_now,tp=Ce.unstable_getCurrentPriorityLevel,Ts=Ce.unstable_ImmediatePriority,wu=Ce.unstable_UserBlockingPriority,Jr=Ce.unstable_NormalPriority,np=Ce.unstable_LowPriority,xu=Ce.unstable_IdlePriority,So=null,_e=null;function rp(e){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(So,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:sp,op=Math.log,ip=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(op(e)/ip|0)|0}var Cr=64,Sr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Nn(a):(i&=s,i!==0&&(r=Nn(i)))}else s=n&~o,s!==0?r=Nn(s):i!==0&&(r=Nn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),o=1<<n,r|=e[n],t&=~o;return r}function ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-De(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=ap(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function Di(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=Cr;return Cr<<=1,!(Cr&4194240)&&(Cr=64),e}function Ko(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ur(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function up(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-De(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function bs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var M=0;function Su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ku,js,Au,Tu,bu,Mi=!1,kr=[],at=null,lt=null,ut=null,Vn=new Map,Qn=new Map,nt=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Aa(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function An(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=dr(t),t!==null&&js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function dp(e,t,n,r,o){switch(t){case"focusin":return at=An(at,e,t,n,r,o),!0;case"dragenter":return lt=An(lt,e,t,n,r,o),!0;case"mouseover":return ut=An(ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Vn.set(i,An(Vn.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qn.set(i,An(Qn.get(i)||null,e,t,n,r,o)),!0}return!1}function ju(e){var t=Et(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=hu(n),t!==null){e.blockedOn=t,bu(e.priority,function(){Au(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pi=r,n.target.dispatchEvent(r),Pi=null}else return t=dr(n),t!==null&&js(t),e.blockedOn=n,!1;t.shift()}return!0}function Ta(e,t,n){Lr(e)&&n.delete(t)}function pp(){Mi=!1,at!==null&&Lr(at)&&(at=null),lt!==null&&Lr(lt)&&(lt=null),ut!==null&&Lr(ut)&&(ut=null),Vn.forEach(Ta),Qn.forEach(Ta)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Mi||(Mi=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,pp)))}function Gn(e){function t(o){return Tn(o,e)}if(0<kr.length){Tn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&Tn(at,e),lt!==null&&Tn(lt,e),ut!==null&&Tn(ut,e),Vn.forEach(t),Qn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)ju(n),n.blockedOn===null&&nt.shift()}var sn=Ye.ReactCurrentBatchConfig,Yr=!0;function mp(e,t,n,r){var o=M,i=sn.transition;sn.transition=null;try{M=1,Is(e,t,n,r)}finally{M=o,sn.transition=i}}function fp(e,t,n,r){var o=M,i=sn.transition;sn.transition=null;try{M=4,Is(e,t,n,r)}finally{M=o,sn.transition=i}}function Is(e,t,n,r){if(Yr){var o=qi(e,t,n,r);if(o===null)ii(e,t,r,Zr,n),Aa(e,r);else if(dp(o,e,t,n,r))r.stopPropagation();else if(Aa(e,r),t&4&&-1<cp.indexOf(e)){for(;o!==null;){var i=dr(o);if(i!==null&&ku(i),i=qi(e,t,n,r),i===null&&ii(e,t,r,Zr,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ii(e,t,r,null,n)}}var Zr=null;function qi(e,t,n,r){if(Zr=null,e=As(r),e=Et(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function Iu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tp()){case Ts:return 1;case wu:return 4;case Jr:case np:return 16;case xu:return 536870912;default:return 16}default:return 16}}var ot=null,Es=null,Ur=null;function Eu(){if(Ur)return Ur;var e,t=Es,n=t.length,r,o="value"in ot?ot.value:ot.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Ur=o.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function ba(){return!1}function ke(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ar:ba,this.isPropagationStopped=ba,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=ke(yn),cr=B({},yn,{view:0,detail:0}),hp=ke(cr),Jo,Xo,bn,ko=B({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bn&&(bn&&e.type==="mousemove"?(Jo=e.screenX-bn.screenX,Xo=e.screenY-bn.screenY):Xo=Jo=0,bn=e),Jo)},movementY:function(e){return"movementY"in e?e.movementY:Xo}}),ja=ke(ko),gp=B({},ko,{dataTransfer:0}),vp=ke(gp),yp=B({},cr,{relatedTarget:0}),Yo=ke(yp),wp=B({},yn,{animationName:0,elapsedTime:0,pseudoElement:0}),xp=ke(wp),Cp=B({},yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=ke(Cp),kp=B({},yn,{data:0}),Ia=ke(kp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bp[e])?!!t[e]:!1}function Os(){return jp}var Ip=B({},cr,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ep=ke(Ip),Pp=B({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=ke(Pp),Op=B({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),Np=ke(Op),Rp=B({},yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dp=ke(Rp),Mp=B({},ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=ke(Mp),Lp=[9,13,27,32],Ns=Ge&&"CompositionEvent"in window,qn=null;Ge&&"documentMode"in document&&(qn=document.documentMode);var Up=Ge&&"TextEvent"in window&&!qn,Pu=Ge&&(!Ns||qn&&8<qn&&11>=qn),Pa=" ",Oa=!1;function Ou(e,t){switch(e){case"keyup":return Lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Fp(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(Oa=!0,Pa);case"textInput":return e=t.data,e===Pa&&Oa?null:e;default:return null}}function _p(e,t){if(Vt)return e==="compositionend"||!Ns&&Ou(e,t)?(e=Eu(),Ur=Es=ot=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pu&&t.locale!=="ko"?null:t.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zp[e.type]:t==="textarea"}function Ru(e,t,n,r){cu(r),t=eo(t,"onChange"),0<t.length&&(n=new Ps("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,Kn=null;function Hp(e){Wu(e,0)}function Ao(e){var t=Kt(e);if(ru(t))return e}function Bp(e,t){if(e==="change")return t}var Du=!1;if(Ge){var Zo;if(Ge){var ei="oninput"in document;if(!ei){var Ra=document.createElement("div");Ra.setAttribute("oninput","return;"),ei=typeof Ra.oninput=="function"}Zo=ei}else Zo=!1;Du=Zo&&(!document.documentMode||9<document.documentMode)}function Da(){Ln&&(Ln.detachEvent("onpropertychange",Mu),Kn=Ln=null)}function Mu(e){if(e.propertyName==="value"&&Ao(Kn)){var t=[];Ru(t,Kn,e,As(e)),fu(Hp,t)}}function Wp(e,t,n){e==="focusin"?(Da(),Ln=t,Kn=n,Ln.attachEvent("onpropertychange",Mu)):e==="focusout"&&Da()}function $p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Kn)}function Vp(e,t){if(e==="click")return Ao(t)}function Qp(e,t){if(e==="input"||e==="change")return Ao(t)}function Gp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Gp;function Jn(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!yi.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function Ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qa(e,t){var n=Ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ma(n)}}function qu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lu(){for(var e=window,t=Qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qr(e.document)}return t}function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kp(e){var t=Lu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qu(n.ownerDocument.documentElement,n)){if(r!==null&&Rs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=qa(n,i);var s=qa(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jp=Ge&&"documentMode"in document&&11>=document.documentMode,Qt=null,Li=null,Un=null,Ui=!1;function La(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ui||Qt==null||Qt!==Qr(r)||(r=Qt,"selectionStart"in r&&Rs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Un&&Jn(Un,r)||(Un=r,r=eo(Li,"onSelect"),0<r.length&&(t=new Ps("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gt={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionend:Tr("Transition","TransitionEnd")},ti={},Uu={};Ge&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function To(e){if(ti[e])return ti[e];if(!Gt[e])return e;var t=Gt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uu)return ti[e]=t[n];return e}var Fu=To("animationend"),_u=To("animationiteration"),zu=To("animationstart"),Hu=To("transitionend"),Bu=new Map,Ua="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Bu.set(e,t),Ft(t,[e])}for(var ni=0;ni<Ua.length;ni++){var ri=Ua[ni],Xp=ri.toLowerCase(),Yp=ri[0].toUpperCase()+ri.slice(1);yt(Xp,"on"+Yp)}yt(Fu,"onAnimationEnd");yt(_u,"onAnimationIteration");yt(zu,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Hu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xd(r,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Fa(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Fa(o,a,u),i=l}}}if(Kr)throw e=Ri,Kr=!1,Ri=null,e}function L(e,t){var n=t[Bi];n===void 0&&(n=t[Bi]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function oi(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function Xn(e){if(!e[br]){e[br]=!0,Yl.forEach(function(n){n!=="selectionchange"&&(Zp.has(n)||oi(n,!1,e),oi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,oi("selectionchange",!1,t))}}function $u(e,t,n,r){switch(Iu(t)){case 1:var o=mp;break;case 4:o=fp;break;default:o=Is}n=o.bind(null,t,n,e),o=void 0,!Ni||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ii(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Et(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}fu(function(){var u=i,f=As(n),m=[];e:{var g=Bu.get(e);if(g!==void 0){var y=Ps,v=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":y=Ep;break;case"focusin":v="focus",y=Yo;break;case"focusout":v="blur",y=Yo;break;case"beforeblur":case"afterblur":y=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Np;break;case Fu:case _u:case zu:y=xp;break;case Hu:y=Dp;break;case"scroll":y=hp;break;case"wheel":y=qp;break;case"copy":case"cut":case"paste":y=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ea}var x=(t&4)!==0,S=!x&&e==="scroll",p=x?g!==null?g+"Capture":null:g;x=[];for(var d=u,h;d!==null;){h=d;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=$n(d,p),w!=null&&x.push(Yn(d,w,h)))),S)break;d=d.return}0<x.length&&(g=new y(g,v,null,n,f),m.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Pi&&(v=n.relatedTarget||n.fromElement)&&(Et(v)||v[Ke]))break e;if((y||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Et(v):null,v!==null&&(S=_t(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=ja,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ea,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=y==null?g:Kt(y),h=v==null?g:Kt(v),g=new x(w,d+"leave",y,n,f),g.target=S,g.relatedTarget=h,w=null,Et(f)===u&&(x=new x(p,d+"enter",v,n,f),x.target=h,x.relatedTarget=S,w=x),S=w,y&&v)t:{for(x=y,p=v,d=0,h=x;h;h=Ht(h))d++;for(h=0,w=p;w;w=Ht(w))h++;for(;0<d-h;)x=Ht(x),d--;for(;0<h-d;)p=Ht(p),h--;for(;d--;){if(x===p||p!==null&&x===p.alternate)break t;x=Ht(x),p=Ht(p)}x=null}else x=null;y!==null&&_a(m,g,y,x,!1),v!==null&&S!==null&&_a(m,S,v,x,!0)}}e:{if(g=u?Kt(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var A=Bp;else if(Na(g))if(Du)A=Qp;else{A=$p;var T=Wp}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=Vp);if(A&&(A=A(e,u))){Ru(m,A,n,f);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&Ti(g,"number",g.value)}switch(T=u?Kt(u):window,e){case"focusin":(Na(T)||T.contentEditable==="true")&&(Qt=T,Li=u,Un=null);break;case"focusout":Un=Li=Qt=null;break;case"mousedown":Ui=!0;break;case"contextmenu":case"mouseup":case"dragend":Ui=!1,La(m,n,f);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":La(m,n,f)}var I;if(Ns)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Vt?Ou(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Pu&&n.locale!=="ko"&&(Vt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Vt&&(I=Eu()):(ot=f,Es="value"in ot?ot.value:ot.textContent,Vt=!0)),T=eo(u,E),0<T.length&&(E=new Ia(E,e,null,n,f),m.push({event:E,listeners:T}),I?E.data=I:(I=Nu(n),I!==null&&(E.data=I)))),(I=Up?Fp(e,n):_p(e,n))&&(u=eo(u,"onBeforeInput"),0<u.length&&(f=new Ia("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=I))}Wu(m,t)})}function Yn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=$n(e,n),i!=null&&r.unshift(Yn(e,i,o)),i=$n(e,t),i!=null&&r.push(Yn(e,i,o))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _a(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=$n(n,i),l!=null&&s.unshift(Yn(n,l,a))):o||(l=$n(n,i),l!=null&&s.push(Yn(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function jr(e,t,n){if(t=za(t),za(e)!==t&&n)throw Error(k(425))}function to(){}var Fi=null,_i=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Hi=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Ha=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ha<"u"?function(e){return Ha.resolve(null).then(e).catch(om)}:Hi;function om(e){setTimeout(function(){throw e})}function si(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Gn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Gn(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+wn,Zn="__reactProps$"+wn,Ke="__reactContainer$"+wn,Bi="__reactEvents$"+wn,im="__reactListeners$"+wn,sm="__reactHandles$"+wn;function Et(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[Fe])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function bo(e){return e[Zn]||null}var Wi=[],Jt=-1;function wt(e){return{current:e}}function U(e){0>Jt||(e.current=Wi[Jt],Wi[Jt]=null,Jt--)}function q(e,t){Jt++,Wi[Jt]=e.current,e.current=t}var vt={},ae=wt(vt),fe=wt(!1),Dt=vt;function cn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function he(e){return e=e.childContextTypes,e!=null}function no(){U(fe),U(ae)}function Wa(e,t,n){if(ae.current!==vt)throw Error(k(168));q(ae,t),q(fe,n)}function Vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Wd(e)||"Unknown",o));return B({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Dt=ae.current,q(ae,e),q(fe,fe.current),!0}function $a(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Vu(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,U(fe),U(ae),q(ae,e)):U(fe),q(fe,n)}var Be=null,jo=!1,ai=!1;function Qu(e){Be===null?Be=[e]:Be.push(e)}function am(e){jo=!0,Qu(e)}function xt(){if(!ai&&Be!==null){ai=!0;var e=0,t=M;try{var n=Be;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,jo=!1}catch(o){throw Be!==null&&(Be=Be.slice(e+1)),yu(Ts,xt),o}finally{M=t,ai=!1}}return null}var Xt=[],Yt=0,oo=null,io=0,Ae=[],Te=0,Mt=null,We=1,$e="";function bt(e,t){Xt[Yt++]=io,Xt[Yt++]=oo,oo=e,io=t}function Gu(e,t,n){Ae[Te++]=We,Ae[Te++]=$e,Ae[Te++]=Mt,Mt=e;var r=We;e=$e;var o=32-De(r)-1;r&=~(1<<o),n+=1;var i=32-De(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,We=1<<32-De(t)+o|n<<o|r,$e=i+e}else We=1<<i|n<<o|r,$e=e}function Ds(e){e.return!==null&&(bt(e,1),Gu(e,1,0))}function Ms(e){for(;e===oo;)oo=Xt[--Yt],Xt[Yt]=null,io=Xt[--Yt],Xt[Yt]=null;for(;e===Mt;)Mt=Ae[--Te],Ae[Te]=null,$e=Ae[--Te],Ae[Te]=null,We=Ae[--Te],Ae[Te]=null}var xe=null,we=null,F=!1,Re=null;function Ku(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,we=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,we=null,!0):!1;default:return!1}}function $i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vi(e){if(F){var t=we;if(t){var n=t;if(!Va(e,t)){if($i(e))throw Error(k(418));t=ct(n.nextSibling);var r=xe;t&&Va(e,t)?Ku(r,n):(e.flags=e.flags&-4097|2,F=!1,xe=e)}}else{if($i(e))throw Error(k(418));e.flags=e.flags&-4097|2,F=!1,xe=e}}}function Qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Ir(e){if(e!==xe)return!1;if(!F)return Qa(e),F=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=we)){if($i(e))throw Ju(),Error(k(418));for(;t;)Ku(e,t),t=ct(t.nextSibling)}if(Qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=xe?ct(e.stateNode.nextSibling):null;return!0}function Ju(){for(var e=we;e;)e=ct(e.nextSibling)}function dn(){we=xe=null,F=!1}function qs(e){Re===null?Re=[e]:Re.push(e)}var lm=Ye.ReactCurrentBatchConfig;function jn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ga(e){var t=e._init;return t(e._payload)}function Xu(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=ft(p,d),p.index=0,p.sibling=null,p}function i(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,h,w){return d===null||d.tag!==6?(d=fi(h,p.mode,w),d.return=p,d):(d=o(d,h),d.return=p,d)}function l(p,d,h,w){var A=h.type;return A===$t?f(p,d,h.props.children,w,h.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===et&&Ga(A)===d.type)?(w=o(d,h.props),w.ref=jn(p,d,h),w.return=p,w):(w=Vr(h.type,h.key,h.props,null,p.mode,w),w.ref=jn(p,d,h),w.return=p,w)}function u(p,d,h,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=hi(h,p.mode,w),d.return=p,d):(d=o(d,h.children||[]),d.return=p,d)}function f(p,d,h,w,A){return d===null||d.tag!==7?(d=Rt(h,p.mode,w,A),d.return=p,d):(d=o(d,h),d.return=p,d)}function m(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fi(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yr:return h=Vr(d.type,d.key,d.props,null,p.mode,h),h.ref=jn(p,null,d),h.return=p,h;case Wt:return d=hi(d,p.mode,h),d.return=p,d;case et:var w=d._init;return m(p,w(d._payload),h)}if(On(d)||Sn(d))return d=Rt(d,p.mode,h,null),d.return=p,d;Er(p,d)}return null}function g(p,d,h,w){var A=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return A!==null?null:a(p,d,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yr:return h.key===A?l(p,d,h,w):null;case Wt:return h.key===A?u(p,d,h,w):null;case et:return A=h._init,g(p,d,A(h._payload),w)}if(On(h)||Sn(h))return A!==null?null:f(p,d,h,w,null);Er(p,h)}return null}function y(p,d,h,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,a(d,p,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yr:return p=p.get(w.key===null?h:w.key)||null,l(d,p,w,A);case Wt:return p=p.get(w.key===null?h:w.key)||null,u(d,p,w,A);case et:var T=w._init;return y(p,d,h,T(w._payload),A)}if(On(w)||Sn(w))return p=p.get(h)||null,f(d,p,w,A,null);Er(d,w)}return null}function v(p,d,h,w){for(var A=null,T=null,I=d,E=d=0,_=null;I!==null&&E<h.length;E++){I.index>E?(_=I,I=null):_=I.sibling;var O=g(p,I,h[E],w);if(O===null){I===null&&(I=_);break}e&&I&&O.alternate===null&&t(p,I),d=i(O,d,E),T===null?A=O:T.sibling=O,T=O,I=_}if(E===h.length)return n(p,I),F&&bt(p,E),A;if(I===null){for(;E<h.length;E++)I=m(p,h[E],w),I!==null&&(d=i(I,d,E),T===null?A=I:T.sibling=I,T=I);return F&&bt(p,E),A}for(I=r(p,I);E<h.length;E++)_=y(I,p,E,h[E],w),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?E:_.key),d=i(_,d,E),T===null?A=_:T.sibling=_,T=_);return e&&I.forEach(function(ve){return t(p,ve)}),F&&bt(p,E),A}function x(p,d,h,w){var A=Sn(h);if(typeof A!="function")throw Error(k(150));if(h=A.call(h),h==null)throw Error(k(151));for(var T=A=null,I=d,E=d=0,_=null,O=h.next();I!==null&&!O.done;E++,O=h.next()){I.index>E?(_=I,I=null):_=I.sibling;var ve=g(p,I,O.value,w);if(ve===null){I===null&&(I=_);break}e&&I&&ve.alternate===null&&t(p,I),d=i(ve,d,E),T===null?A=ve:T.sibling=ve,T=ve,I=_}if(O.done)return n(p,I),F&&bt(p,E),A;if(I===null){for(;!O.done;E++,O=h.next())O=m(p,O.value,w),O!==null&&(d=i(O,d,E),T===null?A=O:T.sibling=O,T=O);return F&&bt(p,E),A}for(I=r(p,I);!O.done;E++,O=h.next())O=y(I,p,E,O.value,w),O!==null&&(e&&O.alternate!==null&&I.delete(O.key===null?E:O.key),d=i(O,d,E),T===null?A=O:T.sibling=O,T=O);return e&&I.forEach(function(xn){return t(p,xn)}),F&&bt(p,E),A}function S(p,d,h,w){if(typeof h=="object"&&h!==null&&h.type===$t&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yr:e:{for(var A=h.key,T=d;T!==null;){if(T.key===A){if(A=h.type,A===$t){if(T.tag===7){n(p,T.sibling),d=o(T,h.props.children),d.return=p,p=d;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===et&&Ga(A)===T.type){n(p,T.sibling),d=o(T,h.props),d.ref=jn(p,T,h),d.return=p,p=d;break e}n(p,T);break}else t(p,T);T=T.sibling}h.type===$t?(d=Rt(h.props.children,p.mode,w,h.key),d.return=p,p=d):(w=Vr(h.type,h.key,h.props,null,p.mode,w),w.ref=jn(p,d,h),w.return=p,p=w)}return s(p);case Wt:e:{for(T=h.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=o(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=hi(h,p.mode,w),d.return=p,p=d}return s(p);case et:return T=h._init,S(p,d,T(h._payload),w)}if(On(h))return v(p,d,h,w);if(Sn(h))return x(p,d,h,w);Er(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=o(d,h),d.return=p,p=d):(n(p,d),d=fi(h,p.mode,w),d.return=p,p=d),s(p)):n(p,d)}return S}var pn=Xu(!0),Yu=Xu(!1),so=wt(null),ao=null,Zt=null,Ls=null;function Us(){Ls=Zt=ao=null}function Fs(e){var t=so.current;U(so),e._currentValue=t}function Qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ao=e,Ls=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Ie(e){var t=e._currentValue;if(Ls!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(ao===null)throw Error(k(308));Zt=e,ao.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Pt=null;function _s(e){Pt===null?Pt=[e]:Pt.push(e)}function Zu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,_s(t)):(n.next=o.next,o.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function zs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Je(e,n)}return o=r.interleaved,o===null?(t.next=t,_s(r)):(t.next=o.next,o.next=t),r.interleaved=t,Je(e,n)}function _r(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function lo(e,t,n,r){var o=e.updateQueue;tt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(i!==null){var m=o.baseState;s=0,f=u=l=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(g=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){m=v.call(y,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,g=typeof v=="function"?v.call(y,m,g):v,g==null)break e;m=B({},m,g);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=y,l=m):f=f.next=y,s|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(l=m),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Lt|=s,e.lanes=s,e.memoizedState=m}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var pr={},ze=wt(pr),er=wt(pr),tr=wt(pr);function Ot(e){if(e===pr)throw Error(k(174));return e}function Hs(e,t){switch(q(tr,t),q(er,e),q(ze,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ji(t,e)}U(ze),q(ze,t)}function mn(){U(ze),U(er),U(tr)}function tc(e){Ot(tr.current);var t=Ot(ze.current),n=ji(t,e.type);t!==n&&(q(er,e),q(ze,n))}function Bs(e){er.current===e&&(U(ze),U(er))}var z=wt(0);function uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var li=[];function Ws(){for(var e=0;e<li.length;e++)li[e]._workInProgressVersionPrimary=null;li.length=0}var zr=Ye.ReactCurrentDispatcher,ui=Ye.ReactCurrentBatchConfig,qt=0,H=null,J=null,Z=null,co=!1,Fn=!1,nr=0,um=0;function oe(){throw Error(k(321))}function $s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Vs(e,t,n,r,o,i){if(qt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?mm:fm,e=n(r,o),Fn){i=0;do{if(Fn=!1,nr=0,25<=i)throw Error(k(301));i+=1,Z=J=null,t.updateQueue=null,zr.current=hm,e=n(r,o)}while(Fn)}if(zr.current=po,t=J!==null&&J.next!==null,qt=0,Z=J=H=null,co=!1,t)throw Error(k(300));return e}function Qs(){var e=nr!==0;return nr=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(J===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function rr(e,t){return typeof t=="function"?t(e):t}function ci(e){var t=Ee(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=J,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var f=u.lane;if((qt&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,H.lanes|=f,Lt|=f}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,qe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,H.lanes|=i,Lt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function di(e){var t=Ee(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);qe(i,t.memoizedState)||(me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nc(){}function rc(e,t){var n=H,r=Ee(),o=t(),i=!qe(r.memoizedState,o);if(i&&(r.memoizedState=o,me=!0),r=r.queue,Gs(sc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,or(9,ic.bind(null,n,r,o,t),void 0,null),ee===null)throw Error(k(349));qt&30||oc(n,t,o)}return o}function oc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ic(e,t,n,r){t.value=n,t.getSnapshot=r,ac(t)&&lc(e)}function sc(e,t,n){return n(function(){ac(t)&&lc(e)})}function ac(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function lc(e){var t=Je(e,1);t!==null&&Me(t,e,1,-1)}function Xa(e){var t=Ue();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,H,e),[t.memoizedState,e]}function or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function uc(){return Ee().memoizedState}function Hr(e,t,n,r){var o=Ue();H.flags|=e,o.memoizedState=or(1|t,n,void 0,r===void 0?null:r)}function Io(e,t,n,r){var o=Ee();r=r===void 0?null:r;var i=void 0;if(J!==null){var s=J.memoizedState;if(i=s.destroy,r!==null&&$s(r,s.deps)){o.memoizedState=or(t,n,i,r);return}}H.flags|=e,o.memoizedState=or(1|t,n,i,r)}function Ya(e,t){return Hr(8390656,8,e,t)}function Gs(e,t){return Io(2048,8,e,t)}function cc(e,t){return Io(4,2,e,t)}function dc(e,t){return Io(4,4,e,t)}function pc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mc(e,t,n){return n=n!=null?n.concat([e]):null,Io(4,4,pc.bind(null,t,e),n)}function Ks(){}function fc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hc(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&$s(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gc(e,t,n){return qt&21?(qe(n,t)||(n=Cu(),H.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function cm(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=ui.transition;ui.transition={};try{e(!1),t()}finally{M=n,ui.transition=r}}function vc(){return Ee().memoizedState}function dm(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yc(e))wc(t,n);else if(n=Zu(e,t,n,r),n!==null){var o=ue();Me(n,e,r,o),xc(n,t,r)}}function pm(e,t,n){var r=mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yc(e))wc(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,s)){var l=t.interleaved;l===null?(o.next=o,_s(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Zu(e,t,o,r),n!==null&&(o=ue(),Me(n,e,r,o),xc(n,t,r))}}function yc(e){var t=e.alternate;return e===H||t!==null&&t===H}function wc(e,t){Fn=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bs(e,n)}}var po={readContext:Ie,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},mm={readContext:Ie,useCallback:function(e,t){return Ue().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:Ya,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hr(4194308,4,pc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hr(4,2,e,t)},useMemo:function(e,t){var n=Ue();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ue();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ue();return e={current:e},t.memoizedState=e},useState:Xa,useDebugValue:Ks,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Xa(!1),t=e[0];return e=cm.bind(null,e[1]),Ue().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,o=Ue();if(F){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));qt&30||oc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Ya(sc.bind(null,r,i,e),[e]),r.flags|=2048,or(9,ic.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ue(),t=ee.identifierPrefix;if(F){var n=$e,r=We;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fm={readContext:Ie,useCallback:fc,useContext:Ie,useEffect:Gs,useImperativeHandle:mc,useInsertionEffect:cc,useLayoutEffect:dc,useMemo:hc,useReducer:ci,useRef:uc,useState:function(){return ci(rr)},useDebugValue:Ks,useDeferredValue:function(e){var t=Ee();return gc(t,J.memoizedState,e)},useTransition:function(){var e=ci(rr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:nc,useSyncExternalStore:rc,useId:vc,unstable_isNewReconciler:!1},hm={readContext:Ie,useCallback:fc,useContext:Ie,useEffect:Gs,useImperativeHandle:mc,useInsertionEffect:cc,useLayoutEffect:dc,useMemo:hc,useReducer:di,useRef:uc,useState:function(){return di(rr)},useDebugValue:Ks,useDeferredValue:function(e){var t=Ee();return J===null?t.memoizedState=e:gc(t,J.memoizedState,e)},useTransition:function(){var e=di(rr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:nc,useSyncExternalStore:rc,useId:vc,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Eo={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),o=mt(e),i=Qe(r,o);i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,o),t!==null&&(Me(t,e,o,r),_r(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),o=mt(e),i=Qe(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dt(e,i,o),t!==null&&(Me(t,e,o,r),_r(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=mt(e),o=Qe(n,r);o.tag=2,t!=null&&(o.callback=t),t=dt(e,o,r),t!==null&&(Me(t,e,r,n),_r(t,e,r))}};function Za(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,i):!0}function Cc(e,t,n){var r=!1,o=vt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ie(i):(o=he(t)?Dt:ae.current,r=t.contextTypes,i=(r=r!=null)?cn(e,o):vt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Eo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function el(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Eo.enqueueReplaceState(t,t.state,null)}function Ki(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},zs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ie(i):(i=he(t)?Dt:ae.current,o.context=cn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Gi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Eo.enqueueReplaceState(o,o.state,null),lo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fn(e,t){try{var n="",r=t;do n+=Bd(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function Sc(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fo||(fo=!0,ss=r),Ji(e,t)},n}function kc(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ji(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ji(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function tl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pm.bind(null,e,t,n),t.then(e,e))}function nl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rl(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var vm=Ye.ReactCurrentOwner,me=!1;function le(e,t,n,r){t.child=e===null?Yu(t,null,n,r):pn(t,e.child,n,r)}function ol(e,t,n,r,o){n=n.render;var i=t.ref;return an(t,o),r=Vs(e,t,n,r,i,o),n=Qs(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xe(e,t,o)):(F&&n&&Ds(t),t.flags|=1,le(e,t,r,o),t.child)}function il(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ra(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ac(e,t,i,r,o)):(e=Vr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(s,r)&&e.ref===t.ref)return Xe(e,t,o)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Jn(i,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Xe(e,t,o)}return Xi(e,t,n,r,o)}function Tc(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(tn,ye),ye|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(tn,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,q(tn,ye),ye|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,q(tn,ye),ye|=r;return le(e,t,o,n),t.child}function bc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xi(e,t,n,r,o){var i=he(n)?Dt:ae.current;return i=cn(t,i),an(t,o),n=Vs(e,t,n,r,i,o),r=Qs(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Xe(e,t,o)):(F&&r&&Ds(t),t.flags|=1,le(e,t,n,o),t.child)}function sl(e,t,n,r,o){if(he(n)){var i=!0;ro(t)}else i=!1;if(an(t,o),t.stateNode===null)Br(e,t),Cc(t,n,r),Ki(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ie(u):(u=he(n)?Dt:ae.current,u=cn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&el(t,s,r,u),tt=!1;var g=t.memoizedState;s.state=g,lo(t,r,s,o),l=t.memoizedState,a!==r||g!==l||fe.current||tt?(typeof f=="function"&&(Gi(t,n,f,r),l=t.memoizedState),(a=tt||Za(t,n,a,r,g,l,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ec(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Oe(t.type,a),s.props=u,m=t.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ie(l):(l=he(n)?Dt:ae.current,l=cn(t,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||g!==l)&&el(t,s,r,l),tt=!1,g=t.memoizedState,s.state=g,lo(t,r,s,o);var v=t.memoizedState;a!==m||g!==v||fe.current||tt?(typeof y=="function"&&(Gi(t,n,y,r),v=t.memoizedState),(u=tt||Za(t,n,u,r,g,v,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Yi(e,t,n,r,i,o)}function Yi(e,t,n,r,o,i){bc(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&$a(t,n,!1),Xe(e,t,i);r=t.stateNode,vm.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pn(t,e.child,null,i),t.child=pn(t,null,a,i)):le(e,t,a,i),t.memoizedState=r.state,o&&$a(t,n,!0),t.child}function jc(e){var t=e.stateNode;t.pendingContext?Wa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wa(e,t.context,!1),Hs(e,t.containerInfo)}function al(e,t,n,r,o){return dn(),qs(o),t.flags|=256,le(e,t,n,r),t.child}var Zi={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ic(e,t,n){var r=t.pendingProps,o=z.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(z,o&1),e===null)return Vi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=No(s,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=es(n),t.memoizedState=Zi,e):Js(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return ym(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ft(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=ft(a,i):(i=Rt(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?es(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Zi,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=No({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&qs(r),pn(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=pi(Error(k(422))),Pr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=No({mode:"visible",children:r.children},o,0,null),i=Rt(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&pn(t,e.child,null,s),t.child.memoizedState=es(s),t.memoizedState=Zi,i);if(!(t.mode&1))return Pr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=pi(i,r,void 0),Pr(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Je(e,o),Me(r,e,o,-1))}return na(),r=pi(Error(k(421))),Pr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,we=ct(o.nextSibling),xe=t,F=!0,Re=null,e!==null&&(Ae[Te++]=We,Ae[Te++]=$e,Ae[Te++]=Mt,We=e.id,$e=e.overflow,Mt=t),t=Js(t,r.children),t.flags|=4096,t)}function ll(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Qi(e.return,t,n)}function mi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ec(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(le(e,t,r.children,n),r=z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ll(e,n,t);else if(e.tag===19)ll(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&uo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),mi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&uo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}mi(t,!0,n,null,i);break;case"together":mi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wm(e,t,n){switch(t.tag){case 3:jc(t),dn();break;case 5:tc(t);break;case 1:he(t.type)&&ro(t);break;case 4:Hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?Ic(e,t,n):(q(z,z.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);q(z,z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ec(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(z,z.current),r)break;return null;case 22:case 23:return t.lanes=0,Tc(e,t,n)}return Xe(e,t,n)}var Pc,ts,Oc,Nc;Pc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ts=function(){};Oc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ot(ze.current);var i=null;switch(n){case"input":o=ki(e,o),r=ki(e,r),i=[];break;case"select":o=B({},o,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":o=bi(e,o),r=bi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}Ii(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&L("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Nc=function(e,t,n,r){n!==r&&(t.flags|=4)};function In(e,t){if(!F)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xm(e,t,n){var r=t.pendingProps;switch(Ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&no(),ie(t),null;case 3:return r=t.stateNode,mn(),U(fe),U(ae),Ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(us(Re),Re=null))),ts(e,t),ie(t),null;case 5:Bs(t);var o=Ot(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Oc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ie(t),null}if(e=Ot(ze.current),Ir(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Fe]=t,r[Zn]=i,e=(t.mode&1)!==0,n){case"dialog":L("cancel",r),L("close",r);break;case"iframe":case"object":case"embed":L("load",r);break;case"video":case"audio":for(o=0;o<Rn.length;o++)L(Rn[o],r);break;case"source":L("error",r);break;case"img":case"image":case"link":L("error",r),L("load",r);break;case"details":L("toggle",r);break;case"input":va(r,i),L("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},L("invalid",r);break;case"textarea":wa(r,i),L("invalid",r)}Ii(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,a,e),o=["children",""+a]):Bn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&L("scroll",r)}switch(n){case"input":wr(r),ya(r,i,!0);break;case"textarea":wr(r),xa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=su(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Fe]=t,e[Zn]=r,Pc(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ei(n,r),n){case"dialog":L("cancel",e),L("close",e),o=r;break;case"iframe":case"object":case"embed":L("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rn.length;o++)L(Rn[o],e);o=r;break;case"source":L("error",e),o=r;break;case"img":case"image":case"link":L("error",e),L("load",e),o=r;break;case"details":L("toggle",e),o=r;break;case"input":va(e,r),o=ki(e,r),L("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=B({},r,{value:void 0}),L("invalid",e);break;case"textarea":wa(e,r),o=bi(e,r),L("invalid",e);break;default:o=r}Ii(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?uu(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&au(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wn(e,l):typeof l=="number"&&Wn(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bn.hasOwnProperty(i)?l!=null&&i==="onScroll"&&L("scroll",e):l!=null&&xs(e,i,l,s))}switch(n){case"input":wr(e),ya(e,r,!1);break;case"textarea":wr(e),xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?nn(e,!!r.multiple,i,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Nc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Ot(tr.current),Ot(ze.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return ie(t),null;case 13:if(U(z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(F&&we!==null&&t.mode&1&&!(t.flags&128))Ju(),dn(),t.flags|=98560,i=!1;else if(i=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Fe]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Re!==null&&(us(Re),Re=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?X===0&&(X=3):na())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return mn(),ts(e,t),e===null&&Xn(t.stateNode.containerInfo),ie(t),null;case 10:return Fs(t.type._context),ie(t),null;case 17:return he(t.type)&&no(),ie(t),null;case 19:if(U(z),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)In(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=uo(e),s!==null){for(t.flags|=128,In(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(z,z.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>hn&&(t.flags|=128,r=!0,In(i,!1),t.lanes=4194304)}else{if(!r)if(e=uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!F)return ie(t),null}else 2*Q()-i.renderingStartTime>hn&&n!==1073741824&&(t.flags|=128,r=!0,In(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=z.current,q(z,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Cm(e,t){switch(Ms(t),t.tag){case 1:return he(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),U(fe),U(ae),Ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bs(t),null;case 13:if(U(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(z),null;case 4:return mn(),null;case 10:return Fs(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var Or=!1,se=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,b=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function ns(e,t,n){try{n()}catch(r){W(e,t,r)}}var ul=!1;function km(e,t){if(Fi=Yr,e=Lu(),Rs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,m=e,g=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(a=s+o),m!==i||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++u===o&&(a=s),g===i&&++f===r&&(l=s),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},Yr=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,S=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Oe(t.type,x),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){W(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return v=ul,ul=!1,v}function _n(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ns(t,n,i)}o=o.next}while(o!==r)}}function Po(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rc(e){var t=e.alternate;t!==null&&(e.alternate=null,Rc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Zn],delete t[Bi],delete t[im],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function cl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}var te=null,Ne=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(So,n)}catch{}switch(n.tag){case 5:se||en(n,t);case 6:var r=te,o=Ne;te=null,Ze(e,t,n),te=r,Ne=o,te!==null&&(Ne?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ne?(e=te,n=n.stateNode,e.nodeType===8?si(e.parentNode,n):e.nodeType===1&&si(e,n),Gn(e)):si(te,n.stateNode));break;case 4:r=te,o=Ne,te=n.stateNode.containerInfo,Ne=!0,Ze(e,t,n),te=r,Ne=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&ns(n,t,s),o=o.next}while(o!==r)}Ze(e,t,n);break;case 1:if(!se&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){W(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,Ze(e,t,n),se=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function dl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var o=Nm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Pe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Ne=!1;break e;case 3:te=a.stateNode.containerInfo,Ne=!0;break e;case 4:te=a.stateNode.containerInfo,Ne=!0;break e}a=a.return}if(te===null)throw Error(k(160));Mc(i,s,o),te=null,Ne=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){W(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qc(t,e),t=t.sibling}function qc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pe(t,e),Le(e),r&4){try{_n(3,e,e.return),Po(3,e)}catch(x){W(e,e.return,x)}try{_n(5,e,e.return)}catch(x){W(e,e.return,x)}}break;case 1:Pe(t,e),Le(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Pe(t,e),Le(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var o=e.stateNode;try{Wn(o,"")}catch(x){W(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ou(o,i),Ei(a,s);var u=Ei(a,i);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?uu(o,m):f==="dangerouslySetInnerHTML"?au(o,m):f==="children"?Wn(o,m):xs(o,f,m,u)}switch(a){case"input":Ai(o,i);break;case"textarea":iu(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?nn(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?nn(o,!!i.multiple,i.defaultValue,!0):nn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Zn]=i}catch(x){W(e,e.return,x)}}break;case 6:if(Pe(t,e),Le(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){W(e,e.return,x)}}break;case 3:if(Pe(t,e),Le(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gn(t.containerInfo)}catch(x){W(e,e.return,x)}break;case 4:Pe(t,e),Le(e);break;case 13:Pe(t,e),Le(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Zs=Q())),r&4&&dl(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||f,Pe(t,e),se=u):Pe(t,e),Le(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(b=e,f=e.child;f!==null;){for(m=b=f;b!==null;){switch(g=b,y=g.child,g.tag){case 0:case 11:case 14:case 15:_n(4,g,g.return);break;case 1:en(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){W(r,n,x)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){ml(m);continue}}y!==null?(y.return=g,b=y):ml(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lu("display",s))}catch(x){W(e,e.return,x)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(x){W(e,e.return,x)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pe(t,e),Le(e),r&4&&dl(e);break;case 21:break;default:Pe(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wn(o,""),r.flags&=-33);var i=cl(e);is(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=cl(e);os(e,a,s);break;default:throw Error(k(161))}}catch(l){W(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,n){b=e,Lc(e)}function Lc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Or;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||se;a=Or;var u=se;if(Or=s,(se=l)&&!u)for(b=o;b!==null;)s=b,l=s.child,s.tag===22&&s.memoizedState!==null?fl(o):l!==null?(l.return=s,b=l):fl(o);for(;i!==null;)b=i,Lc(i),i=i.sibling;b=o,Or=a,se=u}pl(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,b=i):pl(e)}}function pl(e){for(;b!==null;){var t=b;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Po(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ja(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Gn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}se||t.flags&512&&rs(t)}catch(g){W(t,t.return,g)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function ml(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function fl(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Po(4,t)}catch(l){W(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){W(t,o,l)}}var i=t.return;try{rs(t)}catch(l){W(t,i,l)}break;case 5:var s=t.return;try{rs(t)}catch(l){W(t,s,l)}}}catch(l){W(t,t.return,l)}if(t===e){b=null;break}var a=t.sibling;if(a!==null){a.return=t.return,b=a;break}b=t.return}}var Tm=Math.ceil,mo=Ye.ReactCurrentDispatcher,Xs=Ye.ReactCurrentOwner,je=Ye.ReactCurrentBatchConfig,D=0,ee=null,G=null,ne=0,ye=0,tn=wt(0),X=0,ir=null,Lt=0,Oo=0,Ys=0,zn=null,pe=null,Zs=0,hn=1/0,He=null,fo=!1,ss=null,pt=null,Nr=!1,it=null,ho=0,Hn=0,as=null,Wr=-1,$r=0;function ue(){return D&6?Q():Wr!==-1?Wr:Wr=Q()}function mt(e){return e.mode&1?D&2&&ne!==0?ne&-ne:lm.transition!==null?($r===0&&($r=Cu()),$r):(e=M,e!==0||(e=window.event,e=e===void 0?16:Iu(e.type)),e):1}function Me(e,t,n,r){if(50<Hn)throw Hn=0,as=null,Error(k(185));ur(e,n,r),(!(D&2)||e!==ee)&&(e===ee&&(!(D&2)&&(Oo|=n),X===4&&rt(e,ne)),ge(e,r),n===1&&D===0&&!(t.mode&1)&&(hn=Q()+500,jo&&xt()))}function ge(e,t){var n=e.callbackNode;lp(e,t);var r=Xr(e,e===ee?ne:0);if(r===0)n!==null&&ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ka(n),t===1)e.tag===0?am(hl.bind(null,e)):Qu(hl.bind(null,e)),rm(function(){!(D&6)&&xt()}),n=null;else{switch(Su(r)){case 1:n=Ts;break;case 4:n=wu;break;case 16:n=Jr;break;case 536870912:n=xu;break;default:n=Jr}n=$c(n,Uc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Uc(e,t){if(Wr=-1,$r=0,D&6)throw Error(k(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Xr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=go(e,r);else{t=r;var o=D;D|=2;var i=_c();(ee!==e||ne!==t)&&(He=null,hn=Q()+500,Nt(e,t));do try{Im();break}catch(a){Fc(e,a)}while(!0);Us(),mo.current=i,D=o,G!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(o=Di(e),o!==0&&(r=o,t=ls(e,o))),t===1)throw n=ir,Nt(e,0),rt(e,r),ge(e,Q()),n;if(t===6)rt(e,r);else{if(o=e.current.alternate,!(r&30)&&!bm(o)&&(t=go(e,r),t===2&&(i=Di(e),i!==0&&(r=i,t=ls(e,i))),t===1))throw n=ir,Nt(e,0),rt(e,r),ge(e,Q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:jt(e,pe,He);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Zs+500-Q(),10<t)){if(Xr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Hi(jt.bind(null,e,pe,He),t);break}jt(e,pe,He);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-De(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tm(r/1960))-r,10<r){e.timeoutHandle=Hi(jt.bind(null,e,pe,He),r);break}jt(e,pe,He);break;case 5:jt(e,pe,He);break;default:throw Error(k(329))}}}return ge(e,Q()),e.callbackNode===n?Uc.bind(null,e):null}function ls(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=go(e,t),e!==2&&(t=pe,pe=n,t!==null&&us(t)),e}function us(e){pe===null?pe=e:pe.push.apply(pe,e)}function bm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ys,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function hl(e){if(D&6)throw Error(k(327));ln();var t=Xr(e,0);if(!(t&1))return ge(e,Q()),null;var n=go(e,t);if(e.tag!==0&&n===2){var r=Di(e);r!==0&&(t=r,n=ls(e,r))}if(n===1)throw n=ir,Nt(e,0),rt(e,t),ge(e,Q()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jt(e,pe,He),ge(e,Q()),null}function ea(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(hn=Q()+500,jo&&xt())}}function Ut(e){it!==null&&it.tag===0&&!(D&6)&&ln();var t=D;D|=1;var n=je.transition,r=M;try{if(je.transition=null,M=1,e)return e()}finally{M=r,je.transition=n,D=t,!(D&6)&&xt()}}function ta(){ye=tn.current,U(tn)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),G!==null)for(n=G.return;n!==null;){var r=n;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:mn(),U(fe),U(ae),Ws();break;case 5:Bs(r);break;case 4:mn();break;case 13:U(z);break;case 19:U(z);break;case 10:Fs(r.type._context);break;case 22:case 23:ta()}n=n.return}if(ee=e,G=e=ft(e.current,null),ne=ye=t,X=0,ir=null,Ys=Oo=Lt=0,pe=zn=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}Pt=null}return e}function Fc(e,t){do{var n=G;try{if(Us(),zr.current=po,co){for(var r=H.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if(qt=0,Z=J=H=null,Fn=!1,nr=0,Xs.current=null,n===null||n.return===null){X=1,ir=t,G=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=nl(s);if(y!==null){y.flags&=-257,rl(y,s,a,i,t),y.mode&1&&tl(i,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){tl(i,u,t),na();break e}l=Error(k(426))}}else if(F&&a.mode&1){var S=nl(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),rl(S,s,a,i,t),qs(fn(l,a));break e}}i=l=fn(l,a),X!==4&&(X=2),zn===null?zn=[i]:zn.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Sc(i,l,t);Ka(i,p);break e;case 1:a=l;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(pt===null||!pt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=kc(i,a,t);Ka(i,w);break e}}i=i.return}while(i!==null)}Hc(n)}catch(A){t=A,G===n&&n!==null&&(G=n=n.return);continue}break}while(!0)}function _c(){var e=mo.current;return mo.current=po,e===null?po:e}function na(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Lt&268435455)&&!(Oo&268435455)||rt(ee,ne)}function go(e,t){var n=D;D|=2;var r=_c();(ee!==e||ne!==t)&&(He=null,Nt(e,t));do try{jm();break}catch(o){Fc(e,o)}while(!0);if(Us(),D=n,mo.current=r,G!==null)throw Error(k(261));return ee=null,ne=0,X}function jm(){for(;G!==null;)zc(G)}function Im(){for(;G!==null&&!Zd();)zc(G)}function zc(e){var t=Wc(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Hc(e):G=t,Xs.current=null}function Hc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cm(n,t),n!==null){n.flags&=32767,G=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,G=null;return}}else if(n=xm(n,t,ye),n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);X===0&&(X=5)}function jt(e,t,n){var r=M,o=je.transition;try{je.transition=null,M=1,Em(e,t,n,r)}finally{je.transition=o,M=r}return null}function Em(e,t,n,r){do ln();while(it!==null);if(D&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(up(e,i),e===ee&&(G=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,$c(Jr,function(){return ln(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=je.transition,je.transition=null;var s=M;M=1;var a=D;D|=4,Xs.current=null,km(e,n),qc(n,e),Kp(_i),Yr=!!Fi,_i=Fi=null,e.current=n,Am(n),ep(),D=a,M=s,je.transition=i}else e.current=n;if(Nr&&(Nr=!1,it=e,ho=o),i=e.pendingLanes,i===0&&(pt=null),rp(n.stateNode),ge(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fo)throw fo=!1,e=ss,ss=null,e;return ho&1&&e.tag!==0&&ln(),i=e.pendingLanes,i&1?e===as?Hn++:(Hn=0,as=e):Hn=0,xt(),null}function ln(){if(it!==null){var e=Su(ho),t=je.transition,n=M;try{if(je.transition=null,M=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ho=0,D&6)throw Error(k(331));var o=D;for(D|=4,b=e.current;b!==null;){var i=b,s=i.child;if(b.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var f=b;switch(f.tag){case 0:case 11:case 15:_n(8,f,i)}var m=f.child;if(m!==null)m.return=f,b=m;else for(;b!==null;){f=b;var g=f.sibling,y=f.return;if(Rc(f),f===u){b=null;break}if(g!==null){g.return=y,b=g;break}b=y}}}var v=i.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var S=x.sibling;x.sibling=null,x=S}while(x!==null)}}b=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,b=s;else e:for(;b!==null;){if(i=b,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_n(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,b=p;break e}b=i.return}}var d=e.current;for(b=d;b!==null;){s=b;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,b=h;else e:for(s=d;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Po(9,a)}}catch(A){W(a,a.return,A)}if(a===s){b=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,b=w;break e}b=a.return}}if(D=o,xt(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(So,e)}catch{}r=!0}return r}finally{M=n,je.transition=t}}return!1}function gl(e,t,n){t=fn(n,t),t=Sc(e,t,1),e=dt(e,t,1),t=ue(),e!==null&&(ur(e,1,t),ge(e,t))}function W(e,t,n){if(e.tag===3)gl(e,e,n);else for(;t!==null;){if(t.tag===3){gl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=fn(n,e),e=kc(t,e,1),t=dt(t,e,1),e=ue(),t!==null&&(ur(t,1,e),ge(t,e));break}}t=t.return}}function Pm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-Zs?Nt(e,0):Ys|=n),ge(e,t)}function Bc(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ue();e=Je(e,t),e!==null&&(ur(e,t,n),ge(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bc(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Bc(e,n)}var Wc;Wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,wm(e,t,n);me=!!(e.flags&131072)}else me=!1,F&&t.flags&1048576&&Gu(t,io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Br(e,t),e=t.pendingProps;var o=cn(t,ae.current);an(t,n),o=Vs(null,t,r,e,o,n);var i=Qs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,ro(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,zs(t),o.updater=Eo,t.stateNode=o,o._reactInternals=t,Ki(t,r,e,n),t=Yi(null,t,r,!0,i,n)):(t.tag=0,F&&i&&Ds(t),le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Br(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Dm(r),e=Oe(r,e),o){case 0:t=Xi(null,t,r,e,n);break e;case 1:t=sl(null,t,r,e,n);break e;case 11:t=ol(null,t,r,e,n);break e;case 14:t=il(null,t,r,Oe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Xi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),sl(e,t,r,o,n);case 3:e:{if(jc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ec(e,t),lo(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=fn(Error(k(423)),t),t=al(e,t,r,n,o);break e}else if(r!==o){o=fn(Error(k(424)),t),t=al(e,t,r,n,o);break e}else for(we=ct(t.stateNode.containerInfo.firstChild),xe=t,F=!0,Re=null,n=Yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===o){t=Xe(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return tc(t),e===null&&Vi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,zi(r,o)?s=null:i!==null&&zi(r,i)&&(t.flags|=32),bc(e,t),le(e,t,s,n),t.child;case 6:return e===null&&Vi(t),null;case 13:return Ic(e,t,n);case 4:return Hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),ol(e,t,r,o,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,q(so,r._currentValue),r._currentValue=s,i!==null)if(qe(i.value,s)){if(i.children===o.children&&!fe.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Qe(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Qi(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(k(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Qi(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,an(t,n),o=Ie(o),r=r(o),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,o=Oe(r,t.pendingProps),o=Oe(r.type,o),il(e,t,r,o,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Oe(r,o),Br(e,t),t.tag=1,he(r)?(e=!0,ro(t)):e=!1,an(t,n),Cc(t,r,o),Ki(t,r,o,n),Yi(null,t,r,!0,e,n);case 19:return Ec(e,t,n);case 22:return Tc(e,t,n)}throw Error(k(156,t.tag))};function $c(e,t){return yu(e,t)}function Rm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Rm(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dm(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ss)return 11;if(e===ks)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")ra(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return Rt(n.children,o,i,t);case Cs:s=8,o|=8;break;case wi:return e=be(12,n,t,o|2),e.elementType=wi,e.lanes=i,e;case xi:return e=be(13,n,t,o),e.elementType=xi,e.lanes=i,e;case Ci:return e=be(19,n,t,o),e.elementType=Ci,e.lanes=i,e;case tu:return No(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zl:s=10;break e;case eu:s=9;break e;case Ss:s=11;break e;case ks:s=14;break e;case et:s=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=be(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function No(e,t,n,r){return e=be(22,e,r,t),e.elementType=tu,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function hi(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ko(0),this.expirationTimes=Ko(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ko(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,o,i,s,a,l){return e=new Mm(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zs(i),e}function qm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vc(e){if(!e)return vt;e=e._reactInternals;e:{if(_t(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(he(n))return Vu(e,n,t)}return t}function Qc(e,t,n,r,o,i,s,a,l){return e=oa(n,r,!0,e,o,i,s,a,l),e.context=Vc(null),n=e.current,r=ue(),o=mt(n),i=Qe(r,o),i.callback=t??null,dt(n,i,o),e.current.lanes=o,ur(e,o,r),ge(e,r),e}function Ro(e,t,n,r){var o=t.current,i=ue(),s=mt(o);return n=Vc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(o,t,s),e!==null&&(Me(e,o,s,i),_r(e,o,s)),s}function vo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ia(e,t){vl(e,t),(e=e.alternate)&&vl(e,t)}function Lm(){return null}var Gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Do.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ro(e,t,null,null)};Do.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ut(function(){Ro(null,e,null,null)}),t[Ke]=null}};function Do(e){this._internalRoot=e}Do.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&ju(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yl(){}function Um(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=vo(s);i.call(u)}}var s=Qc(t,r,e,0,null,!1,!1,"",yl);return e._reactRootContainer=s,e[Ke]=s.current,Xn(e.nodeType===8?e.parentNode:e),Ut(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=vo(l);a.call(u)}}var l=oa(e,0,!1,null,null,!1,!1,"",yl);return e._reactRootContainer=l,e[Ke]=l.current,Xn(e.nodeType===8?e.parentNode:e),Ut(function(){Ro(t,l,n,r)}),l}function qo(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=vo(s);a.call(l)}}Ro(t,s,e,o)}else s=Um(n,t,e,o,r);return vo(s)}ku=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(bs(t,n|1),ge(t,Q()),!(D&6)&&(hn=Q()+500,xt()))}break;case 13:Ut(function(){var r=Je(e,1);if(r!==null){var o=ue();Me(r,e,1,o)}}),ia(e,1)}};js=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ue();Me(t,e,134217728,n)}ia(e,134217728)}};Au=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=ue();Me(n,e,t,r)}ia(e,t)}};Tu=function(){return M};bu=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};Oi=function(e,t,n){switch(t){case"input":if(Ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=bo(r);if(!o)throw Error(k(90));ru(r),Ai(r,o)}}}break;case"textarea":iu(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};pu=ea;mu=Ut;var Fm={usingClientEntryPoint:!1,Events:[dr,Kt,bo,cu,du,ea]},En={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_m={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gu(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||Lm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{So=Rr.inject(_m),_e=Rr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(k(200));return qm(e,t,null,n)};Se.createRoot=function(e,t){if(!aa(e))throw Error(k(299));var n=!1,r="",o=Gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,o),e[Ke]=t.current,Xn(e.nodeType===8?e.parentNode:e),new sa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=gu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ut(e)};Se.hydrate=function(e,t,n){if(!Mo(t))throw Error(k(200));return qo(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Gc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Qc(t,null,e,1,n??null,o,!1,i,s),e[Ke]=t.current,Xn(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Do(t)};Se.render=function(e,t,n){if(!Mo(t))throw Error(k(200));return qo(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Mo(e))throw Error(k(40));return e._reactRootContainer?(Ut(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Se.unstable_batchedUpdates=ea;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return qo(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)}catch(e){console.error(e)}}Kc(),Kl.exports=Se;var zm=Kl.exports,wl=zm;vi.createRoot=wl.createRoot,vi.hydrateRoot=wl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const xl="popstate";function Hm(e){e===void 0&&(e={});function t(o,i){let{pathname:s="/",search:a="",hash:l=""}=zt(o.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),cs("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(o,i){let s=o.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=o.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof i=="string"?i:yo(i))}function r(o,i){Lo(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Wm(t,n,r,e)}function $(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Lo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bm(){return Math.random().toString(36).substr(2,8)}function Cl(e,t){return{usr:e.state,key:e.key,idx:t}}function cs(e,t,n,r){return n===void 0&&(n=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zt(t):t,{state:n,key:t&&t.key||r||Bm()})}function yo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Wm(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=st.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(sr({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=st.Pop;let S=f(),p=S==null?null:S-u;u=S,l&&l({action:a,location:x.location,delta:p})}function g(S,p){a=st.Push;let d=cs(x.location,S,p);n&&n(d,S),u=f()+1;let h=Cl(d,u),w=x.createHref(d);try{s.pushState(h,"",w)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(w)}i&&l&&l({action:a,location:x.location,delta:1})}function y(S,p){a=st.Replace;let d=cs(x.location,S,p);n&&n(d,S),u=f();let h=Cl(d,u),w=x.createHref(d);s.replaceState(h,"",w),i&&l&&l({action:a,location:x.location,delta:0})}function v(S){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof S=="string"?S:yo(S);return d=d.replace(/ $/,"%20"),$(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let x={get action(){return a},get location(){return e(o,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(xl,m),l=S,()=>{o.removeEventListener(xl,m),l=null}},createHref(S){return t(o,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(S){return s.go(S)}};return x}var Sl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sl||(Sl={}));function $m(e,t,n){return n===void 0&&(n="/"),Vm(e,t,n)}function Vm(e,t,n,r){let o=typeof t=="string"?zt(t):t,i=gn(o.pathname||"/",n);if(i==null)return null;let s=Jc(e);Qm(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=of(i);a=nf(s[l],u)}return a}function Jc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&($(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ht([r,l.relativePath]),f=n.concat(l);i.children&&i.children.length>0&&($(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Jc(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:ef(u,i.index),routesMeta:f})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Xc(i.path))o(i,s,l)}),t}function Xc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Xc(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Qm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:tf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gm=/^:[\w-]+$/,Km=3,Jm=2,Xm=1,Ym=10,Zm=-2,kl=e=>e==="*";function ef(e,t){let n=e.split("/"),r=n.length;return n.some(kl)&&(r+=Zm),t&&(r+=Jm),n.filter(o=>!kl(o)).reduce((o,i)=>o+(Gm.test(i)?Km:i===""?Xm:Ym),r)}function tf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function nf(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=ds({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),g=l.route;if(!m)return null;Object.assign(o,m.params),s.push({params:o,pathname:ht([i,m.pathname]),pathnameBase:cf(ht([i,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(i=ht([i,m.pathnameBase]))}return s}function ds(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rf(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:g,isOptional:y}=f;if(g==="*"){let x=a[m]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}const v=a[m];return y&&!v?u[g]=void 0:u[g]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function rf(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Lo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function of(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Lo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const sf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,af=e=>sf.test(e);function lf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?zt(e):e,i;if(n)if(af(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Lo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Al(n.substring(1),"/"):i=Al(n,t)}else i=t;return{pathname:i,search:df(r),hash:pf(o)}}function Al(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function gi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Yc(e,t){let n=uf(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=zt(e):(o=sr({},e),$(!o.pathname||!o.pathname.includes("?"),gi("?","pathname","search",o)),$(!o.pathname||!o.pathname.includes("#"),gi("#","pathname","hash",o)),$(!o.search||!o.search.includes("#"),gi("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}a=m>=0?t[m]:"/"}let l=lf(o,a),u=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const ht=e=>e.join("/").replace(/\/\/+/g,"/"),cf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),df=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function mf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ed=["post","put","patch","delete"];new Set(ed);const ff=["get",...ed];new Set(ff);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}const Uo=C.createContext(null),td=C.createContext(null),Ct=C.createContext(null),Fo=C.createContext(null),St=C.createContext({outlet:null,matches:[],isDataRoute:!1}),nd=C.createContext(null);function hf(e,t){let{relative:n}=t===void 0?{}:t;mr()||$(!1);let{basename:r,navigator:o}=C.useContext(Ct),{hash:i,pathname:s,search:a}=_o(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:ht([r,s])),o.createHref({pathname:l,search:a,hash:i})}function mr(){return C.useContext(Fo)!=null}function fr(){return mr()||$(!1),C.useContext(Fo).location}function rd(e){C.useContext(Ct).static||C.useLayoutEffect(e)}function la(){let{isDataRoute:e}=C.useContext(St);return e?If():gf()}function gf(){mr()||$(!1);let e=C.useContext(Uo),{basename:t,future:n,navigator:r}=C.useContext(Ct),{matches:o}=C.useContext(St),{pathname:i}=fr(),s=JSON.stringify(Yc(o,n.v7_relativeSplatPath)),a=C.useRef(!1);return rd(()=>{a.current=!0}),C.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let m=Zc(u,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ht([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,s,i,e])}function od(){let{matches:e}=C.useContext(St),t=e[e.length-1];return t?t.params:{}}function _o(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Ct),{matches:o}=C.useContext(St),{pathname:i}=fr(),s=JSON.stringify(Yc(o,r.v7_relativeSplatPath));return C.useMemo(()=>Zc(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function vf(e,t){return yf(e,t)}function yf(e,t,n,r){mr()||$(!1);let{navigator:o}=C.useContext(Ct),{matches:i}=C.useContext(St),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=fr(),f;if(t){var m;let S=typeof t=="string"?zt(t):t;l==="/"||(m=S.pathname)!=null&&m.startsWith(l)||$(!1),f=S}else f=u;let g=f.pathname||"/",y=g;if(l!=="/"){let S=l.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=$m(e,{pathname:y}),x=kf(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:ht([l,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:ht([l,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&x?C.createElement(Fo.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:st.Pop}},x):x}function wf(){let e=jf(),t=mf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,null)}const xf=C.createElement(wf,null);class Cf extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(St.Provider,{value:this.props.routeContext},C.createElement(nd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sf(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Uo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(St.Provider,{value:t},r)}function kf(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||$(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:g,errors:y}=n,v=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,m,g)=>{let y,v=!1,x=null,S=null;n&&(y=a&&m.route.id?a[m.route.id]:void 0,x=m.route.errorElement||xf,l&&(u<0&&g===0?(Ef("route-fallback"),v=!0,S=null):u===g&&(v=!0,S=m.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),d=()=>{let h;return y?h=x:v?h=S:m.route.Component?h=C.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=f,C.createElement(Sf,{match:m,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:h})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?C.createElement(Cf,{location:n.location,revalidation:n.revalidation,component:x,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var id=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(id||{}),sd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sd||{});function Af(e){let t=C.useContext(Uo);return t||$(!1),t}function Tf(e){let t=C.useContext(td);return t||$(!1),t}function bf(e){let t=C.useContext(St);return t||$(!1),t}function ad(e){let t=bf(),n=t.matches[t.matches.length-1];return n.route.id||$(!1),n.route.id}function jf(){var e;let t=C.useContext(nd),n=Tf(),r=ad();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function If(){let{router:e}=Af(id.UseNavigateStable),t=ad(sd.UseNavigateStable),n=C.useRef(!1);return rd(()=>{n.current=!0}),C.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,ar({fromRouteId:t},i)))},[e,t])}const Tl={};function Ef(e,t,n){Tl[e]||(Tl[e]=!0)}function Pf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function It(e){$(!1)}function Of(e){let{basename:t="/",children:n=null,location:r,navigationType:o=st.Pop,navigator:i,static:s=!1,future:a}=e;mr()&&$(!1);let l=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:i,static:s,future:ar({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=zt(r));let{pathname:f="/",search:m="",hash:g="",state:y=null,key:v="default"}=r,x=C.useMemo(()=>{let S=gn(f,l);return S==null?null:{location:{pathname:S,search:m,hash:g,state:y,key:v},navigationType:o}},[l,f,m,g,y,v,o]);return x==null?null:C.createElement(Ct.Provider,{value:u},C.createElement(Fo.Provider,{children:n,value:x}))}function Nf(e){let{children:t,location:n}=e;return vf(ps(t),n)}new Promise(()=>{});function ps(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;let i=[...t,o];if(r.type===C.Fragment){n.push.apply(n,ps(r.props.children,i));return}r.type!==It&&$(!1),!r.props.index||!r.props.children||$(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ps(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wo.apply(this,arguments)}function ld(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Rf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Df(e,t){return e.button===0&&(!t||t==="_self")&&!Rf(e)}const Mf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qf=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Lf="6";try{window.__reactRouterVersion=Lf}catch{}const Uf=C.createContext({isTransitioning:!1}),Ff="startTransition",bl=Pd[Ff];function _f(e){let{basename:t,children:n,future:r,window:o}=e,i=C.useRef();i.current==null&&(i.current=Hm({window:o,v5Compat:!0}));let s=i.current,[a,l]=C.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=C.useCallback(m=>{u&&bl?bl(()=>l(m)):l(m)},[l,u]);return C.useLayoutEffect(()=>s.listen(f),[s,f]),C.useEffect(()=>Pf(r),[r]),C.createElement(Of,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=C.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:f,viewTransition:m}=t,g=ld(t,Mf),{basename:y}=C.useContext(Ct),v,x=!1;if(typeof u=="string"&&Hf.test(u)&&(v=u,zf))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),A=gn(w.pathname,y);w.origin===h.origin&&A!=null?u=A+w.search+w.hash:x=!0}catch{}let S=hf(u,{relative:o}),p=Wf(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:o,viewTransition:m});function d(h){r&&r(h),h.defaultPrevented||p(h)}return C.createElement("a",wo({},g,{href:v||S,onClick:x||i?r:d,ref:n,target:l}))}),Dr=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:s=!1,style:a,to:l,viewTransition:u,children:f}=t,m=ld(t,qf),g=_o(l,{relative:m.relative}),y=fr(),v=C.useContext(td),{navigator:x,basename:S}=C.useContext(Ct),p=v!=null&&$f(g)&&u===!0,d=x.encodeLocation?x.encodeLocation(g).pathname:g.pathname,h=y.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(h=h.toLowerCase(),w=w?w.toLowerCase():null,d=d.toLowerCase()),w&&S&&(w=gn(w,S)||w);const A=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=h===d||!s&&h.startsWith(d)&&h.charAt(A)==="/",I=w!=null&&(w===d||!s&&w.startsWith(d)&&w.charAt(d.length)==="/"),E={isActive:T,isPending:I,isTransitioning:p},_=T?r:void 0,O;typeof i=="function"?O=i(E):O=[i,T?"active":null,I?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ve=typeof a=="function"?a(E):a;return C.createElement(Ve,wo({},m,{"aria-current":_,className:O,ref:n,style:ve,to:l,viewTransition:u}),typeof f=="function"?f(E):f)});var ms;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ms||(ms={}));var jl;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jl||(jl={}));function Bf(e){let t=C.useContext(Uo);return t||$(!1),t}function Wf(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,l=la(),u=fr(),f=_o(e,{relative:s});return C.useCallback(m=>{if(Df(m,n)){m.preventDefault();let g=r!==void 0?r:yo(u)===yo(f);l(e,{replace:g,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,l,f,r,o,n,e,i,s,a])}function $f(e,t){t===void 0&&(t={});let n=C.useContext(Uf);n==null&&$(!1);let{basename:r}=Bf(ms.useViewTransitionState),o=_o(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ds(o.pathname,s)!=null||ds(o.pathname,i)!=null}const ud="angular-course-progress",xo={attempts:0,correct:0,bestStreak:0},cd={levelTestResult:null,topicProgress:{},moduleTestResults:{},finalTestResult:null,randomQuestionStats:{...xo},quickLineStats:{...xo}};function Vf(e,t){switch(t.type){case"SET_LEVEL_TEST":return{...e,levelTestResult:t.payload};case"RESET_LEVEL_TEST":return{...e,levelTestResult:null};case"COMPLETE_TASK":{const n=e.topicProgress[t.payload.topicId],r=n!=null&&n.tasksCompleted?[...n.tasksCompleted]:[];r[t.payload.taskIndex]=!0;const o=r.filter(Boolean).length>=t.payload.totalTasks;return{...e,topicProgress:{...e.topicProgress,[t.payload.topicId]:{completed:o,tasksCompleted:r}}}}case"SET_MODULE_TEST":return{...e,moduleTestResults:{...e.moduleTestResults,[t.payload.moduleId]:t.payload.result}};case"SET_FINAL_TEST":return{...e,finalTestResult:t.payload};case"RECORD_RANDOM_QUESTION":{const n=e.randomQuestionStats??xo;return{...e,randomQuestionStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RECORD_QUICK_LINE":{const n=e.quickLineStats??xo;return{...e,quickLineStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RESET":return cd;default:return e}}function Qf(){try{const e=localStorage.getItem(ud);if(e)return JSON.parse(e)}catch{}return cd}const dd=C.createContext(null);function Gf({children:e}){const[t,n]=C.useReducer(Vf,void 0,Qf);return C.useEffect(()=>{localStorage.setItem(ud,JSON.stringify(t))},[t]),c.jsx(dd.Provider,{value:{progress:t,dispatch:n},children:e})}function kt(){const e=C.useContext(dd);if(!e)throw new Error("useProgress must be used within ProgressProvider");return e}const Kf={id:"mod-1",title:"TypeScript & Angular Fundamentals",description:"Learn the core building blocks: TypeScript essentials, Angular CLI, project structure, and your first component.",topics:[{id:"mod1-t1",title:"TypeScript Essentials for Angular",explanation:`## TypeScript Essentials

Angular is built with **TypeScript**, a superset of JavaScript that adds static types.

### Basic Types

\`\`\`typescript
let name: string = 'Alice';
let age: number = 30;
let isActive: boolean = true;
let items: string[] = ['a', 'b', 'c'];
let tuple: [string, number] = ['hello', 42];
\`\`\`

### Interfaces & Types

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

type Status = 'active' | 'inactive' | 'pending';

const user: User = { id: 1, name: 'Alice' };
\`\`\`

### Classes & Decorators

\`\`\`typescript
class Animal {
  constructor(public name: string, private age: number) {}

  greet(): string {
    return \`Hi, I'm \${this.name}\`;
  }
}

// Decorators are crucial in Angular
function Log(target: any, key: string) {
  console.log(\`\${key} was accessed\`);
}
\`\`\`

### Generics

\`\`\`typescript
function identity<T>(value: T): T {
  return value;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}
\`\`\`

### Enums

\`\`\`typescript
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
\`\`\``,tasks:[{description:"Create a TypeScript interface for a Product with id (number), name (string), price (number), and an optional description (string). Then create a generic function that filters an array by a predicate.",starterCode:`// TODO: Create Product interface

// TODO: Create generic filter function
// function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[]`,solution:`interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

function filterItems<T>(items: T[], predicate: (item: T) => boolean): T[] {
  return items.filter(predicate);
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25, description: 'Wireless' },
];

const expensive = filterItems(products, p => p.price > 100);`,hints:["Use ? after a property name to make it optional","Generics use <T> syntax for type parameters","The predicate is a function that returns a boolean"]}]},{id:"mod1-t2",title:"Angular CLI & Project Structure",explanation:`## Angular CLI

The **Angular CLI** is the official tool for creating and managing Angular projects.

### Creating a Project

\`\`\`bash
npm install -g @angular/cli
ng new my-app
cd my-app
ng serve
\`\`\`

### Project Structure

\`\`\`
my-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts      # Root component
│   │   ├── app.component.html    # Root template
│   │   ├── app.component.css     # Root styles
│   │   ├── app.component.spec.ts # Root tests
│   │   ├── app.module.ts         # Root module (NgModule)
│   │   └── app.config.ts         # Standalone config (v17+)
│   ├── assets/                   # Static files
│   ├── index.html                # Main HTML
│   ├── main.ts                   # Entry point
│   └── styles.css                # Global styles
├── angular.json                  # CLI configuration
├── tsconfig.json                 # TypeScript config
└── package.json
\`\`\`

### Common CLI Commands

| Command | Description |
|---------|-------------|
| \`ng generate component name\` | Create a component |
| \`ng generate service name\` | Create a service |
| \`ng generate module name\` | Create a module |
| \`ng build\` | Build for production |
| \`ng test\` | Run unit tests |
| \`ng e2e\` | Run end-to-end tests |

### Standalone vs NgModule

Angular 17+ defaults to **standalone components**:

\`\`\`typescript
// Standalone (modern)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: '<h1>Hello Angular!</h1>',
})
export class AppComponent {}
\`\`\``,tasks:[{description:'Write the Angular CLI commands to: 1) Create a new project called "task-manager", 2) Generate a component called "task-list", 3) Generate a service called "task".',starterCode:`// Write the CLI commands as comments:
// 1. Create project:
// 2. Generate component:
// 3. Generate service:`,solution:`// 1. Create project:
// ng new task-manager --standalone

// 2. Generate component:
// ng generate component task-list
// or: ng g c task-list

// 3. Generate service:
// ng generate service task
// or: ng g s task`,hints:["ng new <name> creates a new project","ng generate (or ng g) creates new files","Use shorthand: c for component, s for service"]}]},{id:"mod1-t3",title:"Your First Component",explanation:`## Angular Components

A **component** controls a portion of the screen (a *view*). It consists of:

1. **TypeScript class** — the logic
2. **HTML template** — the view
3. **CSS styles** — the appearance
4. **Metadata** — the @Component decorator

### Anatomy of a Component

\`\`\`typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  template: \\\`
    <h1>Hello, {{ name }}!</h1>
    <p>Welcome to Angular</p>
  \\\`,
  styles: [\\\`
    h1 { color: #dd0031; }
  \\\`],
})
export class HelloComponent {
  name = 'World';
}
\`\`\`

### Using Templates & Styles from Files

\`\`\`typescript
@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  name = 'World';
}
\`\`\`

### Interpolation

Use **double curly braces** to display component data:

\`\`\`html
<h1>{{ title }}</h1>
<p>{{ 1 + 1 }}</p>
<p>{{ user.name.toUpperCase() }}</p>
\`\`\``,tasks:[{description:"Create a standalone Angular component called UserCardComponent that displays a user's name, email, and role using interpolation.",starterCode:`import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`
    <!-- TODO: Display name, email, and role -->
  \`,
})
export class UserCardComponent {
  // TODO: Add properties
}`,solution:`import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: \`
    <div class="user-card">
      <h2>{{ name }}</h2>
      <p>Email: {{ email }}</p>
      <p>Role: {{ role }}</p>
    </div>
  \`,
  styles: [\`
    .user-card {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  \`],
})
export class UserCardComponent {
  name = 'Alice Johnson';
  email = 'alice@example.com';
  role = 'Developer';
}`,hints:["Use {{ propertyName }} for interpolation","Define properties directly in the class","The @Component decorator configures the component"]}]},{id:"mod1-t4",title:"Data Binding Basics",explanation:`## Data Binding in Angular

Angular provides four types of data binding:

### 1. Interpolation (One-way: Component → View)

\`\`\`html
<h1>{{ title }}</h1>
\`\`\`

### 2. Property Binding (One-way: Component → View)

\`\`\`html
<img [src]="imageUrl" />
<button [disabled]="isLoading">Submit</button>
<div [class.active]="isActive">Content</div>
<div [style.color]="textColor">Styled</div>
\`\`\`

### 3. Event Binding (One-way: View → Component)

\`\`\`html
<button (click)="onClick()">Click Me</button>
<input (input)="onInput($event)" />
<form (submit)="onSubmit()">...</form>
\`\`\`

### 4. Two-Way Binding

\`\`\`html
<input [(ngModel)]="username" />
\`\`\`

This is shorthand for:

\`\`\`html
<input [ngModel]="username" (ngModelChange)="username = $event" />
\`\`\`

> **Note:** To use \`ngModel\`, import \`FormsModule\` in your component's imports array.

### Example Component

\`\`\`typescript
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  template: \\\`
    <h2>Count: {{ count }}</h2>
    <button (click)="increment()">+1</button>
    <button (click)="decrement()">-1</button>
    <input [(ngModel)]="count" type="number" />
  \\\`,
})
export class CounterComponent {
  count = 0;

  increment() { this.count++; }
  decrement() { this.count--; }
}
\`\`\``,tasks:[{description:"Create a component with a text input that uses two-way binding to update a greeting message displayed below it. Add a button that resets the input to empty.",starterCode:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <!-- TODO: Add two-way bound input -->
    <!-- TODO: Display greeting message -->
    <!-- TODO: Add reset button -->
  \`,
})
export class GreetingComponent {
  // TODO: Add properties and methods
}`,solution:`import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [FormsModule],
  template: \`
    <input [(ngModel)]="name" placeholder="Enter your name" />
    <p>Hello, {{ name || 'stranger' }}!</p>
    <button (click)="reset()">Reset</button>
  \`,
})
export class GreetingComponent {
  name = '';

  reset() {
    this.name = '';
  }
}`,hints:['Use [(ngModel)]="property" for two-way binding',"Import FormsModule to use ngModel",'Use (click)="method()" for event binding']}]}],test:[{id:"mod1-q1",question:"What is the purpose of the @Component decorator?",options:["To create a module","To attach metadata that defines a component's selector, template, and styles","To inject dependencies","To define routes"],correctAnswer:1,explanation:"The @Component decorator attaches metadata to a class, telling Angular how to process it as a component — including its selector, template, and styles."},{id:"mod1-q2",question:"What syntax is used for two-way data binding in Angular?",options:["{{value}}","[value]","(value)","[(ngModel)]"],correctAnswer:3,explanation:"[(ngModel)] is the banana-in-a-box syntax for two-way binding, combining property binding [] and event binding ()."},{id:"mod1-q3",question:"Which Angular CLI command generates a new component?",options:["ng create component","ng generate component","ng add component","ng new component"],correctAnswer:1,explanation:"ng generate component (or ng g c) is the CLI command to scaffold a new component."},{id:"mod1-q4",question:'What does "standalone: true" in @Component mean?',options:["The component runs independently of Angular","The component doesn't need to be declared in an NgModule","The component has no dependencies","The component can't be imported"],correctAnswer:1,explanation:"Standalone components don't need to be declared in an NgModule. They declare their own imports directly in the @Component decorator."},{id:"mod1-q5",question:"Which property binding syntax sets an HTML attribute?",options:["{{attr}}",'(attr)="value"','[attr]="value"',"attr={{value}}"],correctAnswer:2,explanation:'Square brackets [attr]="expression" binds to an element property. For HTML attributes, use [attr.name]="expression".'}]},Jf={id:"mod-2",title:"Templates & Directives",description:"Master Angular template syntax, built-in directives, and control flow.",topics:[{id:"mod2-t1",title:"Built-in Control Flow (@if, @for, @switch)",explanation:`## Modern Control Flow (Angular 17+)

Angular 17 introduced **built-in control flow** syntax that replaces structural directives.

### @if / @else

\`\`\`html
@if (isLoggedIn) {
  <p>Welcome back, {{ user.name }}!</p>
} @else {
  <p>Please log in.</p>
}
\`\`\`

### @for / @empty

\`\`\`html
@for (item of items; track item.id) {
  <div>{{ item.name }}</div>
} @empty {
  <p>No items found.</p>
}
\`\`\`

> **Important:** The \`track\` expression is required for performance optimization.

### @switch

\`\`\`html
@switch (status) {
  @case ('active') {
    <span class="badge green">Active</span>
  }
  @case ('inactive') {
    <span class="badge red">Inactive</span>
  }
  @default {
    <span class="badge gray">Unknown</span>
  }
}
\`\`\`

### @let (Angular 18+)

\`\`\`html
@let fullName = user.firstName + ' ' + user.lastName;
<h2>{{ fullName }}</h2>
\`\`\``,tasks:[{description:"Create a template that uses @if to show/hide a message, @for to iterate over a list of users with track, and @switch for a status badge.",starterCode:`<!-- users: { id: number, name: string, status: string }[] -->

<!-- TODO: Show "No users" if list is empty, otherwise iterate -->
<!-- TODO: For each user, display name and a status badge using @switch -->`,solution:`@if (users.length === 0) {
  <p>No users found.</p>
} @else {
  @for (user of users; track user.id) {
    <div class="user-row">
      <span>{{ user.name }}</span>
      @switch (user.status) {
        @case ('active') {
          <span class="badge green">Active</span>
        }
        @case ('inactive') {
          <span class="badge red">Inactive</span>
        }
        @default {
          <span class="badge gray">Unknown</span>
        }
      }
    </div>
  }
}`,hints:["@for requires a track expression for performance","@if / @else replaces *ngIf with else template","@switch replaces ngSwitch directive"]}]},{id:"mod2-t2",title:"Structural Directives (*ngIf, *ngFor, *ngSwitch)",explanation:`## Structural Directives (Legacy/NgModule approach)

These directives change the DOM structure by adding or removing elements.

### *ngIf

\`\`\`html
<div *ngIf="isVisible">Visible content</div>

<div *ngIf="user; else noUser">
  Hello, {{ user.name }}
</div>
<ng-template #noUser>
  <p>No user found.</p>
</ng-template>
\`\`\`

### *ngFor

\`\`\`html
<ul>
  <li *ngFor="let item of items; let i = index; trackBy: trackById">
    {{ i + 1 }}. {{ item.name }}
  </li>
</ul>
\`\`\`

### *ngSwitch

\`\`\`html
<div [ngSwitch]="color">
  <p *ngSwitchCase="'red'">Red selected</p>
  <p *ngSwitchCase="'blue'">Blue selected</p>
  <p *ngSwitchDefault>Other color</p>
</div>
\`\`\`

### ng-template & ng-container

\`\`\`html
<!-- ng-container doesn't render a DOM element -->
<ng-container *ngIf="isLoading; else content">
  <p>Loading...</p>
</ng-container>
<ng-template #content>
  <p>Content loaded!</p>
</ng-template>
\`\`\``,tasks:[{description:'Create a product list using *ngFor with index and trackBy. Show a "no products" message with *ngIf when the list is empty.',starterCode:`<!-- products: { id: number, name: string, price: number }[] -->

<!-- TODO: Use *ngIf to check if products exist -->
<!-- TODO: Use *ngFor with index and trackBy -->`,solution:`<div *ngIf="products.length > 0; else emptyList">
  <div *ngFor="let product of products; let i = index; trackBy: trackById" class="product">
    <span>{{ i + 1 }}. {{ product.name }} - \${{ product.price }}</span>
  </div>
</div>
<ng-template #emptyList>
  <p>No products available.</p>
</ng-template>

<!-- In component: -->
<!-- trackById(index: number, item: Product) { return item.id; } -->`,hints:['*ngFor supports "let i = index" for the current index',"trackBy improves performance by tracking items by a unique key","*ngIf with else uses a template reference variable"]}]},{id:"mod2-t3",title:"Attribute Directives (ngClass, ngStyle)",explanation:`## Attribute Directives

These directives change the appearance or behavior of elements.

### ngClass

\`\`\`html
<!-- Single class toggle -->
<div [class.active]="isActive">Toggle class</div>

<!-- Multiple classes with ngClass -->
<div [ngClass]="{
  'active': isActive,
  'disabled': isDisabled,
  'highlight': isHighlighted
}">Styled div</div>

<!-- Array syntax -->
<div [ngClass]="['base', isActive ? 'active' : 'inactive']">Array classes</div>
\`\`\`

### ngStyle

\`\`\`html
<div [ngStyle]="{
  'color': textColor,
  'font-size': fontSize + 'px',
  'background-color': isHighlighted ? 'yellow' : 'transparent'
}">
  Dynamic styles
</div>

<!-- Single style binding -->
<div [style.color]="textColor">Single style</div>
<div [style.fontSize.px]="fontSize">With unit</div>
\`\`\`

### Template Reference Variables

\`\`\`html
<input #nameInput type="text" />
<button (click)="greet(nameInput.value)">Greet</button>
\`\`\``,tasks:[{description:"Create a component with a list of items. Use [ngClass] to apply different CSS classes based on item status (active, pending, completed). Add a button that toggles an item's status.",starterCode:`<!-- items: { name: string, status: 'active' | 'pending' | 'completed' }[] -->

<!-- TODO: Display items with dynamic classes based on status -->
<!-- TODO: Add a button to cycle through statuses -->`,solution:`@for (item of items; track item.name) {
  <div [ngClass]="{
    'item': true,
    'item-active': item.status === 'active',
    'item-pending': item.status === 'pending',
    'item-completed': item.status === 'completed'
  }">
    <span>{{ item.name }} ({{ item.status }})</span>
    <button (click)="cycleStatus(item)">Toggle</button>
  </div>
}

<!-- In component: -->
<!-- cycleStatus(item: Item) {
  const statuses = ['active', 'pending', 'completed'];
  const idx = statuses.indexOf(item.status);
  item.status = statuses[(idx + 1) % 3];
} -->`,hints:["ngClass takes an object where keys are class names and values are booleans","Use modulo (%) to cycle through values","Each class condition is evaluated independently"]}]}],test:[{id:"mod2-q1",question:"What is required when using @for in Angular 17+?",options:["An index variable","A trackBy function","A track expression","An ngForOf directive"],correctAnswer:2,explanation:"The @for syntax requires a track expression (e.g., track item.id) for change detection optimization."},{id:"mod2-q2",question:"What does ng-container do?",options:["Creates a div element","Groups elements without adding a DOM node","Defines a component","Applies styles"],correctAnswer:1,explanation:"ng-container is a grouping element that doesn't render in the DOM, useful for applying structural directives without extra markup."},{id:"mod2-q3",question:"How do you conditionally apply a CSS class?",options:['class="active"','[class.active]="condition"',"ngClass=active",'(class)="active"'],correctAnswer:1,explanation:'[class.active]="condition" conditionally adds the "active" class when the condition is true.'},{id:"mod2-q4",question:"What is the purpose of trackBy in *ngFor?",options:["To sort items","To filter items","To help Angular identify items for efficient DOM updates","To add indexes to items"],correctAnswer:2,explanation:"trackBy helps Angular identify which items have changed, been added, or removed, so it can minimally update the DOM."},{id:"mod2-q5",question:"How do you reference a template element in Angular?",options:['Using id="ref"',"Using #ref syntax","Using @ref syntax",'Using ref="ref"'],correctAnswer:1,explanation:"Template reference variables use the # syntax (e.g., #myInput) to get a reference to a DOM element or directive."}]},Xf={id:"mod-3",title:"Component Communication",description:"Master @Input, @Output, EventEmitter, content projection, and ViewChild.",topics:[{id:"mod3-t1",title:"@Input — Parent to Child",explanation:`## Passing Data with @Input

The \`@Input()\` decorator lets a parent component pass data to a child component.

### Basic Usage

\`\`\`typescript
// child.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: '<p>Hello, {{ name }}!</p>',
})
export class ChildComponent {
  @Input() name = '';
}
\`\`\`

\`\`\`html
<!-- parent template -->
<app-child [name]="userName"></app-child>
\`\`\`

### Required Inputs (Angular 16+)

\`\`\`typescript
@Input({ required: true }) title!: string;
\`\`\`

### Input Transform

\`\`\`typescript
@Input({ transform: booleanAttribute }) disabled = false;
@Input({ transform: numberAttribute }) count = 0;
\`\`\`

### Signal Inputs (Angular 17+)

\`\`\`typescript
import { input } from '@angular/core';

export class MyComponent {
  name = input<string>('');           // optional with default
  id = input.required<number>();      // required
  label = input('default');           // inferred type
}
\`\`\``,tasks:[{description:"Create a child ProductCard component that receives a product object via @Input and displays its name and price.",starterCode:`import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <!-- TODO: Display product name and price -->
  \`,
})
export class ProductCardComponent {
  // TODO: Add @Input for product
}`,solution:`import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  template: \`
    <div class="product-card">
      <h3>{{ product.name }}</h3>
      <p>\${{ product.price }}</p>
    </div>
  \`,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}`,hints:["@Input() decorates a property to receive data from parent","Use { required: true } for mandatory inputs","The ! (non-null assertion) tells TS the value will be set"]}]},{id:"mod3-t2",title:"@Output & EventEmitter",explanation:`## Emitting Events with @Output

The \`@Output()\` decorator lets a child notify the parent of events.

### Basic Usage

\`\`\`typescript
// child.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: '<button (click)="onDelete()">Delete</button>',
})
export class ChildComponent {
  @Output() deleted = new EventEmitter<void>();

  onDelete() {
    this.deleted.emit();
  }
}
\`\`\`

\`\`\`html
<!-- parent template -->
<app-child (deleted)="handleDelete()"></app-child>
\`\`\`

### Emitting Data

\`\`\`typescript
@Output() itemSelected = new EventEmitter<Item>();

selectItem(item: Item) {
  this.itemSelected.emit(item);
}
\`\`\`

### Output Function (Angular 17+)

\`\`\`typescript
import { output } from '@angular/core';

export class MyComponent {
  closed = output<void>();
  selected = output<Item>();

  onClose() { this.closed.emit(); }
  onSelect(item: Item) { this.selected.emit(item); }
}
\`\`\``,tasks:[{description:"Create a RatingComponent that shows 5 stars. When a star is clicked, emit the rating value (1-5) to the parent using @Output.",starterCode:`import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  template: \`
    <!-- TODO: Display 5 clickable stars -->
    <!-- TODO: Emit rating on click -->
  \`,
})
export class RatingComponent {
  // TODO: Add @Output and methods
}`,solution:`import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  template: \`
    @for (star of stars; track star) {
      <span
        (click)="rate(star)"
        [style.cursor]="'pointer'"
        [style.color]="star <= currentRating ? 'gold' : 'gray'"
      >★</span>
    }
  \`,
})
export class RatingComponent {
  @Input() currentRating = 0;
  @Output() ratingChange = new EventEmitter<number>();
  stars = [1, 2, 3, 4, 5];

  rate(value: number) {
    this.currentRating = value;
    this.ratingChange.emit(value);
  }
}`,hints:["@Output() creates an EventEmitter that emits events","Use .emit(value) to send data to the parent",'The parent listens with (eventName)="handler($event)"']}]},{id:"mod3-t3",title:"Content Projection (ng-content)",explanation:`## Content Projection

\`<ng-content>\` lets you project content from a parent into a child component's template.

### Single-Slot Projection

\`\`\`typescript
// card.component.ts
@Component({
  selector: 'app-card',
  template: \\\`
    <div class="card">
      <ng-content></ng-content>
    </div>
  \\\`,
})
export class CardComponent {}
\`\`\`

\`\`\`html
<app-card>
  <h2>Title</h2>
  <p>This content is projected!</p>
</app-card>
\`\`\`

### Multi-Slot Projection

\`\`\`typescript
@Component({
  selector: 'app-layout',
  template: \\\`
    <header><ng-content select="[header]"></ng-content></header>
    <main><ng-content></ng-content></main>
    <footer><ng-content select="[footer]"></ng-content></footer>
  \\\`,
})
export class LayoutComponent {}
\`\`\`

\`\`\`html
<app-layout>
  <div header>Header Content</div>
  <p>Main body content</p>
  <div footer>Footer Content</div>
</app-layout>
\`\`\``,tasks:[{description:"Create a reusable DialogComponent with multi-slot content projection for a title, body, and actions area.",starterCode:`@Component({
  selector: 'app-dialog',
  standalone: true,
  template: \`
    <!-- TODO: Create dialog with slots for title, body, and actions -->
  \`,
})
export class DialogComponent {}`,solution:`@Component({
  selector: 'app-dialog',
  standalone: true,
  template: \`
    <div class="dialog-overlay">
      <div class="dialog">
        <div class="dialog-title">
          <ng-content select="[dialog-title]"></ng-content>
        </div>
        <div class="dialog-body">
          <ng-content></ng-content>
        </div>
        <div class="dialog-actions">
          <ng-content select="[dialog-actions]"></ng-content>
        </div>
      </div>
    </div>
  \`,
})
export class DialogComponent {}

// Usage:
// <app-dialog>
//   <h2 dialog-title>Confirm</h2>
//   <p>Are you sure?</p>
//   <div dialog-actions>
//     <button>Cancel</button>
//     <button>OK</button>
//   </div>
// </app-dialog>`,hints:['ng-content select="[attr]" matches elements with that attribute',"Default ng-content (no select) catches unmatched content","Use descriptive attribute names for clarity"]}]}],test:[{id:"mod3-q1",question:"What decorator is used to pass data from parent to child?",options:["@Output","@Input","@Inject","@Host"],correctAnswer:1,explanation:"@Input() allows a parent component to bind a value to a child component's property."},{id:"mod3-q2",question:"How does a child component notify its parent of an event?",options:["Using @Input","Using @Output with EventEmitter","Using a shared service","Using localStorage"],correctAnswer:1,explanation:"@Output() with EventEmitter lets the child emit custom events that the parent can listen to."},{id:"mod3-q3",question:"What does ng-content do?",options:["Creates new DOM content","Projects content from the parent into the child template","Generates a template dynamically","Loads content lazily"],correctAnswer:1,explanation:"ng-content acts as a placeholder that projects the content placed between the child component's tags in the parent template."},{id:"mod3-q4",question:"How do you make an @Input required in Angular 16+?",options:["@Input() required title","@Required() title","@Input({ required: true }) title","It is always required"],correctAnswer:2,explanation:"The { required: true } option in the @Input decorator makes the input mandatory — Angular throws an error if not provided."},{id:"mod3-q5",question:"What is the signal-based input API?",options:["@Signal() input","input() / input.required()","@Input.signal()","signal.input()"],correctAnswer:1,explanation:"Angular 17+ provides input() and input.required() functions for signal-based inputs that integrate with the new reactive system."}]},Yf={id:"mod-4",title:"Services & Dependency Injection",description:"Understand Angular's DI system, creating services, and provider scopes.",topics:[{id:"mod4-t1",title:"Creating Services",explanation:`## Angular Services

A **service** is a class that encapsulates reusable logic — data fetching, business rules, state management.

### Creating a Service

\`\`\`typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // singleton, available app-wide
})
export class UserService {
  private users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
\`\`\`

### Injecting a Service

\`\`\`typescript
@Component({
  selector: 'app-user-list',
  standalone: true,
  template: \\\`
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  \\\`,
})
export class UserListComponent {
  users: User[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
}
\`\`\`

### inject() Function (Modern Approach)

\`\`\`typescript
import { inject } from '@angular/core';

export class UserListComponent {
  private userService = inject(UserService);
  users = this.userService.getUsers();
}
\`\`\``,tasks:[{description:"Create a TodoService with methods to get all todos, add a todo, and toggle a todo's completed status. Use providedIn: root.",starterCode:`import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  // TODO: Implement getAll, add, and toggle methods
}`,solution:`import { Injectable } from '@angular/core';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getAll(): Todo[] {
    return this.todos;
  }

  add(text: string): void {
    this.todos.push({ id: this.nextId++, text, completed: false });
  }

  toggle(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}`,hints:['@Injectable({ providedIn: "root" }) makes a singleton service',"Use private arrays to store state in the service","The inject() function is the modern alternative to constructor injection"]}]},{id:"mod4-t2",title:"Dependency Injection Deep Dive",explanation:`## DI Provider Scopes

### providedIn Options

\`\`\`typescript
// App-wide singleton
@Injectable({ providedIn: 'root' })

// Per-module instance
@Injectable({ providedIn: SomeModule })

// Not provided automatically — must register manually
@Injectable()
\`\`\`

### Providing in Components

\`\`\`typescript
@Component({
  providers: [MyService], // new instance per component
})
\`\`\`

### Injection Tokens

\`\`\`typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');

// In providers:
{ provide: API_URL, useValue: 'https://api.example.com' }

// In component:
private apiUrl = inject(API_URL);
\`\`\`

### useClass, useValue, useFactory

\`\`\`typescript
providers: [
  { provide: Logger, useClass: ConsoleLogger },
  { provide: API_URL, useValue: 'https://api.example.com' },
  {
    provide: DataService,
    useFactory: (http: HttpClient) => new DataService(http),
    deps: [HttpClient],
  },
]
\`\`\``,tasks:[{description:"Create an InjectionToken for an API configuration object and provide it at the app level. Inject it in a service.",starterCode:`import { InjectionToken, Injectable, inject } from '@angular/core';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

// TODO: Create InjectionToken
// TODO: Create service that uses it`,solution:`import { InjectionToken, Injectable, inject } from '@angular/core';

interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export const API_CONFIG = new InjectionToken<ApiConfig>('API_CONFIG');

// In app config:
// providers: [
//   { provide: API_CONFIG, useValue: { baseUrl: 'https://api.example.com', timeout: 5000 } }
// ]

@Injectable({ providedIn: 'root' })
export class ApiService {
  private config = inject(API_CONFIG);

  getBaseUrl(): string {
    return this.config.baseUrl;
  }
}`,hints:["InjectionToken takes a description string and optional type parameter","Use useValue to provide a constant object","inject() works inside constructors and field initializers"]}]},{id:"mod4-t3",title:"Hierarchical Injectors",explanation:`## Hierarchical Injector System

Angular's DI system is hierarchical. Each component can have its own injector.

### Injector Tree

\`\`\`
Platform Injector
  └── Root Injector (providedIn: 'root')
        └── Module Injector
              └── Component Injector (providers: [...])
                    └── Child Component Injector
\`\`\`

### Resolution Modifiers

\`\`\`typescript
// @Optional — don't throw if not found
constructor(@Optional() private logger: Logger) {}

// @Self — only look in this component's injector
constructor(@Self() private service: MyService) {}

// @SkipSelf — skip this component, look in parent
constructor(@SkipSelf() private service: MyService) {}

// @Host — look up to the host component only
constructor(@Host() private service: MyService) {}
\`\`\`

### Providing Different Instances

\`\`\`typescript
@Component({
  selector: 'app-editor',
  providers: [EditorState], // each editor gets its own state
  template: '...',
})
export class EditorComponent {
  constructor(private state: EditorState) {}
}
\`\`\``,tasks:[{description:"Create a LoggerService and provide it at different levels. Use @Optional and @SkipSelf to control resolution.",starterCode:`import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable()
export class LoggerService {
  prefix = 'DEFAULT';
  // TODO: Add log method
}

// TODO: Create a component that uses @Optional and @SkipSelf`,solution:`import { Injectable, Optional, SkipSelf, Component } from '@angular/core';

@Injectable()
export class LoggerService {
  prefix = 'DEFAULT';

  log(message: string): void {
    console.log(\`[\${this.prefix}] \${message}\`);
  }
}

@Component({
  selector: 'app-feature',
  providers: [{ provide: LoggerService, useFactory: () => {
    const logger = new LoggerService();
    logger.prefix = 'FEATURE';
    return logger;
  }}],
  template: '<p>Feature Component</p>',
})
export class FeatureComponent {
  constructor(
    private logger: LoggerService,
    @Optional() @SkipSelf() private parentLogger?: LoggerService,
  ) {
    this.logger.log('Feature initialized');
    this.parentLogger?.log('Parent notified');
  }
}`,hints:["@Optional prevents errors when a provider is missing","@SkipSelf looks at the parent injector, not the current one","Component-level providers create unique instances per component"]}]}],test:[{id:"mod4-q1",question:'What does providedIn: "root" do?',options:["Creates a new instance per component","Registers the service as a singleton available app-wide","Makes the service available only in the root component","Provides the service lazily"],correctAnswer:1,explanation:'providedIn: "root" registers the service in the root injector as a singleton — one instance shared across the entire application.'},{id:"mod4-q2",question:"What is the modern way to inject a service in Angular?",options:["Using the constructor only","Using the inject() function","Using @Inject decorator only","Using providers array only"],correctAnswer:1,explanation:"The inject() function (Angular 14+) allows injecting dependencies in field initializers and constructors, and is the modern preferred approach."},{id:"mod4-q3",question:"What does @Optional() do in DI?",options:["Makes the service optional to provide","Returns null instead of throwing if the dependency is not found","Provides a default value","Skips the service registration"],correctAnswer:1,explanation:"@Optional() tells Angular to return null instead of throwing an error if the requested dependency cannot be found."},{id:"mod4-q4",question:"When would you provide a service at the component level?",options:["Always","When you need a new instance per component","When you need a singleton","When using lazy loading"],correctAnswer:1,explanation:"Component-level providers create a new service instance for each component instance, useful for component-scoped state."},{id:"mod4-q5",question:"What is an InjectionToken used for?",options:["Token-based authentication","Providing non-class dependencies (strings, objects, configs) via DI","Creating HTTP tokens","Generating unique IDs"],correctAnswer:1,explanation:"InjectionToken creates a unique token for injecting non-class values like configuration objects, strings, or factory functions."}]},Zf={id:"mod-5",title:"Routing & Navigation",description:"Configure the Angular Router, route guards, lazy loading, and advanced navigation patterns.",topics:[{id:"mod5-t1",title:"Basic Routing Setup",explanation:`## Angular Router

The Angular Router enables navigation between views.

### Configuring Routes

\`\`\`typescript
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '**', component: NotFoundComponent },
];
\`\`\`

### Router Outlet

\`\`\`html
<nav>
  <a routerLink="/" routerLinkActive="active">Home</a>
  <a routerLink="/about" routerLinkActive="active">About</a>
</nav>
<router-outlet></router-outlet>
\`\`\`

### Reading Route Parameters

\`\`\`typescript
import { ActivatedRoute } from '@angular/router';

export class UserDetailComponent {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
}
\`\`\``,tasks:[{description:"Set up routes for a Home, Products list, and Product detail page with an :id parameter.",starterCode:`import { Routes } from '@angular/router';

// TODO: Define routes`,solution:`import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: '**', component: NotFoundComponent },
];`,hints:["Use :id for dynamic route parameters","The ** wildcard matches any unmatched route","Order matters — more specific routes first"]}]},{id:"mod5-t2",title:"Route Guards",explanation:`## Route Guards

Guards protect routes from unauthorized access.

### Functional Guards (Modern)

\`\`\`typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};
\`\`\`

### Using Guards

\`\`\`typescript
{ path: 'admin', component: AdminComponent, canActivate: [authGuard] }
\`\`\`

### Guard Types

| Guard | Purpose |
|-------|---------|
| canActivate | Controls route access |
| canActivateChild | Controls child route access |
| canDeactivate | Confirms leaving a route |
| canMatch | Controls if route can be matched |
| resolve | Pre-fetches data before activation |`,tasks:[{description:"Create a functional auth guard that checks if a user is logged in and redirects to /login if not.",starterCode:`import { CanActivateFn } from '@angular/router';

// TODO: Create authGuard`,solution:`import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  }
  return router.createUrlTree(['/login']);
};`,hints:["inject() works inside functional guards","Return true to allow, UrlTree to redirect","Guards can be async and return Observables or Promises"]}]},{id:"mod5-t3",title:"Lazy Loading Modules",explanation:`## Lazy Loading

Lazy loading loads feature modules on demand, reducing initial bundle size.

### Route-Based Lazy Loading

\`\`\`typescript
export const routes: Routes = [
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then(m => m.AdminComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/routes').then(m => m.DASHBOARD_ROUTES),
  },
];
\`\`\`

### Preloading Strategies

\`\`\`typescript
import { PreloadAllModules } from '@angular/router';

provideRouter(routes, withPreloading(PreloadAllModules))
\`\`\``,tasks:[{description:"Configure lazy loading for an admin section and a reports section using loadComponent and loadChildren.",starterCode:`export const routes: Routes = [
  { path: '', component: HomeComponent },
  // TODO: Lazy load admin and reports
];`,solution:`export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then(m => m.AdminComponent),
    canActivate: [authGuard],
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/routes').then(m => m.REPORT_ROUTES),
  },
];`,hints:["loadComponent lazy-loads a single component","loadChildren lazy-loads a set of child routes","Dynamic import() returns a Promise"]}]}],test:[{id:"mod5-q1",question:"What does routerLink do?",options:["Styles the link","Creates a navigation link to a route","Defines a route","Loads a module"],correctAnswer:1,explanation:"routerLink is a directive that creates navigation links. It tells the router to navigate to the specified path when clicked."},{id:"mod5-q2",question:"What is the purpose of the ** wildcard route?",options:["Matches the root path","Matches any path not matched by other routes","Matches all routes","Matches empty paths"],correctAnswer:1,explanation:"The ** wildcard route catches all unmatched URLs, typically used for 404 pages. It should be the last route defined."},{id:"mod5-q3",question:"How does lazy loading reduce bundle size?",options:["By compressing files","By loading feature modules only when their route is navigated to","By removing unused code","By minifying JavaScript"],correctAnswer:1,explanation:"Lazy loading splits code into separate bundles that are loaded on demand when the user navigates to the corresponding route."},{id:"mod5-q4",question:"What is the modern way to create route guards?",options:["Class-based guards with CanActivate interface","Functional guards using CanActivateFn","Decorators on components","Middleware functions"],correctAnswer:1,explanation:"Functional guards (CanActivateFn) are the modern approach, replacing class-based guards. They use inject() for dependency access."},{id:"mod5-q5",question:"What does <router-outlet> do?",options:["Defines routes","Acts as a placeholder where the routed component is displayed","Creates navigation links","Guards routes"],correctAnswer:1,explanation:"router-outlet is a placeholder directive that marks where the Router should display the component for the current route."}]},eh={id:"mod-6",title:"Reactive Forms",description:"Build complex forms with FormGroup, FormControl, FormArray, validators, and dynamic forms.",topics:[{id:"mod6-t1",title:"FormControl & FormGroup",explanation:`## Reactive Forms

Reactive forms provide a model-driven approach to handling form inputs.

### Setup

\`\`\`typescript
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \\\`
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input formControlName="email" />
      <input formControlName="password" type="password" />
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
    </form>
  \\\`,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
\`\`\`

### FormBuilder

\`\`\`typescript
private fb = inject(FormBuilder);

loginForm = this.fb.group({
  email: [''],
  password: [''],
});
\`\`\``,tasks:[{description:"Create a registration form with email, password, and confirmPassword fields using FormBuilder.",starterCode:`import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// TODO: Create RegistrationComponent with FormBuilder`,solution:`import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \\\`
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="Email" />
      <input formControlName="password" type="password" placeholder="Password" />
      <input formControlName="confirmPassword" type="password" placeholder="Confirm" />
      <button [disabled]="form.invalid">Register</button>
    </form>
  \\\`,
})
export class RegistrationComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}`,hints:["FormBuilder.group() creates a FormGroup from a config object","Validators are passed as the second element in the array",'Use [disabled]="form.invalid" to disable submit']}]},{id:"mod6-t2",title:"Validators & Error Messages",explanation:`## Form Validation

### Built-in Validators

\`\`\`typescript
import { Validators } from '@angular/forms';

this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2)]],
  email: ['', [Validators.required, Validators.email]],
  age: [null, [Validators.required, Validators.min(18), Validators.max(120)]],
});
\`\`\`

### Displaying Errors

\`\`\`html
<input formControlName="email" />
@if (form.get('email')?.hasError('required') && form.get('email')?.touched) {
  <span class="error">Email is required</span>
}
@if (form.get('email')?.hasError('email')) {
  <span class="error">Invalid email format</span>
}
\`\`\`

### Custom Validators

\`\`\`typescript
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenName(name: string): ValidatorFn {
  return (control: AbstractControl) => {
    const forbidden = control.value === name;
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
\`\`\``,tasks:[{description:"Create a custom validator that checks if password and confirmPassword match. Show appropriate error messages.",starterCode:`import { AbstractControl, ValidatorFn } from '@angular/forms';

// TODO: Create passwordMatch validator`,solution:`import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function passwordMatch(passwordField: string, confirmField: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordField)?.value;
    const confirm = group.get(confirmField)?.value;
    return password === confirm ? null : { passwordMismatch: true };
  };
}

// Usage in FormBuilder:
// form = this.fb.group({
//   password: ['', Validators.required],
//   confirmPassword: ['', Validators.required],
// }, { validators: passwordMatch('password', 'confirmPassword') });`,hints:["Group-level validators receive the entire FormGroup","Return null for valid, an error object for invalid","Apply group validators via the second argument of fb.group()"]}]},{id:"mod6-t3",title:"FormArray & Dynamic Forms",explanation:`## FormArray

FormArray manages a dynamic list of form controls.

\`\`\`typescript
form = this.fb.group({
  name: [''],
  phones: this.fb.array([
    this.fb.control('')
  ]),
});

get phones() {
  return this.form.get('phones') as FormArray;
}

addPhone() {
  this.phones.push(this.fb.control(''));
}

removePhone(index: number) {
  this.phones.removeAt(index);
}
\`\`\`

### Template

\`\`\`html
<div formArrayName="phones">
  @for (phone of phones.controls; let i = $index; track i) {
    <div>
      <input [formControlName]="i" />
      <button (click)="removePhone(i)">Remove</button>
    </div>
  }
</div>
<button (click)="addPhone()">Add Phone</button>
\`\`\``,tasks:[{description:"Create a form with a dynamic list of skills using FormArray. Allow adding and removing skills.",starterCode:"// TODO: Create a form with dynamic skills list using FormArray",solution:`import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \\\`
    <form [formGroup]="form">
      <div formArrayName="skills">
        @for (skill of skills.controls; let i = $index; track i) {
          <div>
            <input [formControlName]="i" placeholder="Skill" />
            <button (click)="removeSkill(i)">✕</button>
          </div>
        }
      </div>
      <button type="button" (click)="addSkill()">+ Add Skill</button>
    </form>
  \\\`,
})
export class SkillsComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({ skills: this.fb.array(['']) });

  get skills() { return this.form.get('skills') as FormArray; }
  addSkill() { this.skills.push(this.fb.control('')); }
  removeSkill(i: number) { this.skills.removeAt(i); }
}`,hints:["FormArray holds a dynamic collection of controls","Use a getter to cast the control to FormArray","push() adds controls, removeAt() removes them"]}]}],test:[{id:"mod6-q1",question:"What is the difference between template-driven and reactive forms?",options:["No difference","Template-driven uses directives in HTML; reactive uses FormGroup/FormControl in TypeScript","Reactive forms are slower","Template-driven is more powerful"],correctAnswer:1,explanation:"Template-driven forms use NgModel directives, while reactive forms use FormGroup/FormControl objects in the component class for more programmatic control."},{id:"mod6-q2",question:"What does FormBuilder simplify?",options:["Template creation","Creating FormGroup, FormControl, and FormArray instances","HTTP requests","Routing"],correctAnswer:1,explanation:"FormBuilder provides syntactic sugar for creating form model instances, reducing boilerplate when creating complex forms."},{id:"mod6-q3",question:"How do you add a custom validator to a FormGroup?",options:["As a pipe","As the second argument when creating the group","As a directive","As middleware"],correctAnswer:1,explanation:"Group-level validators are passed as the second argument to fb.group({...}, { validators: myValidator })."},{id:"mod6-q4",question:"What is FormArray used for?",options:["Storing arrays in the database","Managing a dynamic list of form controls","Creating array-like templates","Parallel form validation"],correctAnswer:1,explanation:"FormArray manages a dynamic collection of AbstractControls, useful for lists that users can add to or remove from."},{id:"mod6-q5",question:'What does form.get("email")?.touched indicate?',options:["The field has been modified","The field has been focused and blurred","The field has errors","The field is valid"],correctAnswer:1,explanation:"touched is true when the user has focused on and then left (blurred) the control, useful for showing validation errors only after interaction."}]},th={id:"mod-7",title:"RxJS & Observables",description:"Master RxJS operators, Subjects, and reactive programming patterns in Angular.",topics:[{id:"mod7-t1",title:"Observables & Subscriptions",explanation:`## RxJS in Angular

Angular uses **RxJS** (Reactive Extensions for JavaScript) extensively for handling async operations.

### Creating Observables

\`\`\`typescript
import { Observable, of, from, interval } from 'rxjs';

// From values
const obs$ = of(1, 2, 3);

// From array
const arr$ = from([1, 2, 3]);

// Timer
const timer$ = interval(1000);

// Custom Observable
const custom$ = new Observable<number>(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.complete();
});
\`\`\`

### Subscribing

\`\`\`typescript
obs$.subscribe({
  next: value => console.log(value),
  error: err => console.error(err),
  complete: () => console.log('Done'),
});
\`\`\`

### Unsubscribing

\`\`\`typescript
export class MyComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.data = data);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
\`\`\``,tasks:[{description:"Create a component that subscribes to an interval observable showing elapsed seconds and properly unsubscribes on destroy.",starterCode:"// TODO: Create timer component with proper cleanup",solution:`import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  template: '<p>Elapsed: {{ seconds }}s</p>',
})
export class TimerComponent implements OnInit, OnDestroy {
  seconds = 0;
  private destroy$ = new Subject<void>();

  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(n => this.seconds = n + 1);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}`,hints:["Use takeUntil(destroy$) to auto-unsubscribe","Subject.next() in ngOnDestroy triggers takeUntil","interval(1000) emits 0, 1, 2... every second"]}]},{id:"mod7-t2",title:"Common RxJS Operators",explanation:`## Essential Operators

### Transformation

\`\`\`typescript
import { map, switchMap, mergeMap, concatMap } from 'rxjs';

// map — transform each value
obs$.pipe(map(x => x * 2));

// switchMap — switch to new inner observable (cancels previous)
searchTerm$.pipe(
  switchMap(term => this.http.get(\\\`/api/search?q=\\\${term}\\\`))
);

// mergeMap — merge inner observables (concurrent)
ids$.pipe(mergeMap(id => this.http.get(\\\`/api/item/\\\${id}\\\`)));

// concatMap — queue inner observables (sequential)
files$.pipe(concatMap(file => this.uploadService.upload(file)));
\`\`\`

### Filtering

\`\`\`typescript
import { filter, distinctUntilChanged, debounceTime, take } from 'rxjs';

search$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  filter(term => term.length > 2),
);
\`\`\`

### Combination

\`\`\`typescript
import { combineLatest, forkJoin, merge } from 'rxjs';

// All latest values
combineLatest([obs1$, obs2$]).subscribe(([v1, v2]) => {});

// Wait for all to complete
forkJoin([req1$, req2$]).subscribe(([r1, r2]) => {});
\`\`\``,tasks:[{description:"Create a search input that debounces input, filters short queries, and uses switchMap to fetch results.",starterCode:"// TODO: Implement debounced search with switchMap",solution:`import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { SearchService } from './search.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  template: \\\`
    <input [formControl]="searchControl" placeholder="Search..." />
    @for (result of results$ | async; track result.id) {
      <div>{{ result.name }}</div>
    }
  \\\`,
})
export class SearchComponent {
  private searchService = inject(SearchService);
  searchControl = new FormControl('');

  results$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    filter((term): term is string => !!term && term.length > 2),
    switchMap(term => this.searchService.search(term)),
  );
}`,hints:["debounceTime waits for a pause in typing","distinctUntilChanged skips duplicate consecutive values","switchMap cancels the previous request when a new term arrives"]}]},{id:"mod7-t3",title:"Subjects & BehaviorSubject",explanation:`## Subjects

Subjects are both Observables and Observers — they can emit and be subscribed to.

### Types

\`\`\`typescript
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';

// Subject — no initial value, late subscribers miss past emissions
const subject = new Subject<string>();

// BehaviorSubject — has initial value, new subscribers get latest
const behavior = new BehaviorSubject<string>('initial');
behavior.getValue(); // 'initial'

// ReplaySubject — replays N past emissions to new subscribers
const replay = new ReplaySubject<string>(3); // buffer 3

// AsyncSubject — emits only the last value on complete
const async = new AsyncSubject<string>();
\`\`\`

### Common Pattern: State Service

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class AuthStore {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }
}
\`\`\``,tasks:[{description:"Create a notification service using BehaviorSubject that components can subscribe to for real-time notifications.",starterCode:"// TODO: Create NotificationService with BehaviorSubject",solution:`import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications$ = new BehaviorSubject<Notification[]>([]);
  notifications = this.notifications$.asObservable();

  add(message: string, type: Notification['type'] = 'info') {
    const current = this.notifications$.getValue();
    const notification: Notification = {
      id: Date.now(),
      message,
      type,
    };
    this.notifications$.next([...current, notification]);
  }

  remove(id: number) {
    const current = this.notifications$.getValue();
    this.notifications$.next(current.filter(n => n.id !== id));
  }
}`,hints:["BehaviorSubject requires an initial value","Use asObservable() to expose a read-only stream","getValue() returns the current value synchronously"]}]}],test:[{id:"mod7-q1",question:"What is the difference between switchMap and mergeMap?",options:["No difference","switchMap cancels the previous inner observable; mergeMap runs them concurrently","mergeMap is faster","switchMap runs sequentially"],correctAnswer:1,explanation:"switchMap unsubscribes from the previous inner observable when a new value arrives, while mergeMap keeps all inner observables active concurrently."},{id:"mod7-q2",question:"What does BehaviorSubject do that Subject does not?",options:["Emits multiple values","Has an initial value and emits the latest value to new subscribers","Handles errors better","Supports async operations"],correctAnswer:1,explanation:"BehaviorSubject stores the current value and immediately emits it to new subscribers, plus requires an initial value."},{id:"mod7-q3",question:"Why use takeUntil for subscriptions?",options:["To take the first value","To automatically unsubscribe when a signal observable emits","To filter values","To combine observables"],correctAnswer:1,explanation:"takeUntil completes the subscription when the notifier observable emits, preventing memory leaks from lingering subscriptions."},{id:"mod7-q4",question:"What does debounceTime(300) do?",options:["Delays the first emission by 300ms","Waits 300ms of silence before emitting the latest value","Emits every 300ms","Takes the first value after 300ms"],correctAnswer:1,explanation:"debounceTime waits until the source stops emitting for the specified duration, then emits the most recent value."},{id:"mod7-q5",question:"What does forkJoin do?",options:["Merges observables","Waits for all source observables to complete, then emits their last values","Races observables","Switches between observables"],correctAnswer:1,explanation:"forkJoin waits for all input observables to complete, then emits an array of each observable's last emitted value."}]},nh={id:"mod-8",title:"HTTP Client & API Integration",description:"Make HTTP requests, handle errors, use interceptors, and work with REST APIs.",topics:[{id:"mod8-t1",title:"HttpClient Basics",explanation:`## HttpClient

Angular's HttpClient provides a typed API for HTTP requests.

### Setup

\`\`\`typescript
// app.config.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideHttpClient()],
};
\`\`\`

### GET Requests

\`\`\`typescript
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(\\\`/api/users/\\\${id}\\\`);
  }
}
\`\`\`

### POST, PUT, DELETE

\`\`\`typescript
createUser(user: CreateUserDto): Observable<User> {
  return this.http.post<User>('/api/users', user);
}

updateUser(id: number, user: UpdateUserDto): Observable<User> {
  return this.http.put<User>(\\\`/api/users/\\\${id}\\\`, user);
}

deleteUser(id: number): Observable<void> {
  return this.http.delete<void>(\\\`/api/users/\\\${id}\\\`);
}
\`\`\`

### Query Parameters

\`\`\`typescript
const params = new HttpParams()
  .set('page', '1')
  .set('limit', '10');

this.http.get<User[]>('/api/users', { params });
\`\`\``,tasks:[{description:"Create a ProductService with CRUD methods using HttpClient — getAll, getById, create, update, and delete.",starterCode:`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// TODO: Create ProductService`,solution:`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = '/api/products';

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(\\\`\\\${this.apiUrl}/\\\${id}\\\`);
  }

  create(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(id: number, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(\\\`\\\${this.apiUrl}/\\\${id}\\\`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(\\\`\\\${this.apiUrl}/\\\${id}\\\`);
  }
}`,hints:["HttpClient methods return Observables","Use generics to type the response: http.get<User[]>(...)","POST and PUT take the body as the second argument"]}]},{id:"mod8-t2",title:"Error Handling & Retry",explanation:`## Handling HTTP Errors

### catchError Operator

\`\`\`typescript
import { catchError, retry, throwError } from 'rxjs';

getUsers(): Observable<User[]> {
  return this.http.get<User[]>('/api/users').pipe(
    retry(2),
    catchError(error => {
      console.error('Error:', error);
      return throwError(() => new Error('Failed to fetch users'));
    }),
  );
}
\`\`\`

### Global Error Handling

\`\`\`typescript
import { HttpErrorResponse } from '@angular/common/http';

private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('Network error:', error.error);
  } else {
    console.error(\\\`Server returned \\\${error.status}: \\\${error.message}\\\`);
  }
  return throwError(() => new Error('Something went wrong'));
}
\`\`\``,tasks:[{description:"Add error handling to the ProductService with retry logic and proper error messages.",starterCode:"// TODO: Add error handling with retry and catchError",solution:`import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products').pipe(
      retry(2),
      catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'An error occurred';
    if (error.status === 0) {
      message = 'Unable to connect to server';
    } else if (error.status === 404) {
      message = 'Resource not found';
    } else if (error.status >= 500) {
      message = 'Server error';
    }
    return throwError(() => new Error(message));
  }
}`,hints:["retry(n) retries the request n times before failing","catchError intercepts errors in the observable stream","throwError creates an error observable"]}]},{id:"mod8-t3",title:"HTTP Interceptors",explanation:`## Interceptors

Interceptors modify HTTP requests and responses globally.

### Functional Interceptor (Modern)

\`\`\`typescript
import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: { Authorization: \\\`Bearer \\\${token}\\\` },
    });
    return next(cloned);
  }
  return next(req);
};
\`\`\`

### Registration

\`\`\`typescript
provideHttpClient(withInterceptors([authInterceptor, loggingInterceptor]))
\`\`\`

### Logging Interceptor

\`\`\`typescript
export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const started = Date.now();
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        const elapsed = Date.now() - started;
        console.log(\\\`\\\${req.method} \\\${req.url} — \\\${elapsed}ms\\\`);
      }
    }),
  );
};
\`\`\``,tasks:[{description:"Create an auth interceptor that adds a Bearer token and a logging interceptor that logs request duration.",starterCode:`import { HttpInterceptorFn } from '@angular/common/http';

// TODO: Create authInterceptor and loggingInterceptor`,solution:`import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: \\\`Bearer \\\${token}\\\` },
    });
  }
  return next(req);
};

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const started = Date.now();
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        console.log(\\\`\\\${req.method} \\\${req.url} — \\\${Date.now() - started}ms\\\`);
      }
    }),
  );
};`,hints:["Interceptors get req and next as parameters","Use req.clone() to modify the request immutably","Register with provideHttpClient(withInterceptors([...]))"]}]}],test:[{id:"mod8-q1",question:"How do you provide HttpClient in a standalone Angular app?",options:["Import HttpClientModule","Use provideHttpClient() in app config","Call new HttpClient()","Import it in each component"],correctAnswer:1,explanation:"provideHttpClient() is the modern way to configure HttpClient in standalone applications, replacing HttpClientModule."},{id:"mod8-q2",question:"What does HttpClient.get() return?",options:["A Promise","An Observable","A Response object","JSON data directly"],correctAnswer:1,explanation:"All HttpClient methods return Observables. The request is only made when subscribed to."},{id:"mod8-q3",question:"What is the purpose of withInterceptors()?",options:["To create interceptors","To register functional interceptors with provideHttpClient","To intercept route changes","To handle errors"],correctAnswer:1,explanation:"withInterceptors() registers functional interceptors that modify HTTP requests and responses globally."},{id:"mod8-q4",question:"Why use req.clone() in an interceptor?",options:["For performance","Because HTTP requests are immutable — you must clone to modify","To create a backup","It's optional"],correctAnswer:1,explanation:"HttpRequest objects are immutable. clone() creates a copy with the desired modifications (headers, body, etc.)."},{id:"mod8-q5",question:"What operator retries a failed HTTP request?",options:["retryWhen","retry(n)","catchError","repeat"],correctAnswer:1,explanation:"retry(n) resubscribes to the source observable up to n times when it errors, effectively retrying the HTTP request."}]},rh={id:"mod-9",title:"Pipes",description:"Use built-in pipes, create custom pipes, and understand pure vs impure pipes.",topics:[{id:"mod9-t1",title:"Built-in Pipes",explanation:`## Angular Pipes

Pipes transform data for display in templates.

### Common Built-in Pipes

\`\`\`html
{{ birthday | date:'longDate' }}
{{ price | currency:'USD' }}
{{ name | uppercase }}
{{ name | lowercase }}
{{ amount | number:'1.2-2' }}
{{ ratio | percent }}
{{ data | json }}
{{ items | slice:0:5 }}
{{ observable$ | async }}
\`\`\`

### AsyncPipe

\`\`\`html
@if (user$ | async; as user) {
  <p>{{ user.name }}</p>
}
\`\`\`

AsyncPipe subscribes and unsubscribes automatically, preventing memory leaks.

### Chaining Pipes

\`\`\`html
{{ birthday | date:'short' | uppercase }}
\`\`\``,tasks:[{description:"Display a list of products using currency, date, and uppercase pipes. Use AsyncPipe with an Observable.",starterCode:"<!-- TODO: Display products with pipes -->",solution:`<!-- products$ is Observable<Product[]> -->
@if (products$ | async; as products) {
  @for (product of products; track product.id) {
    <div class="product">
      <h3>{{ product.name | uppercase }}</h3>
      <p>{{ product.price | currency:'USD':'symbol':'1.2-2' }}</p>
      <small>Added: {{ product.createdAt | date:'mediumDate' }}</small>
    </div>
  }
} @else {
  <p>Loading products...</p>
}`,hints:["AsyncPipe manages subscription lifecycle",'Use "as" alias to access the unwrapped value',"Pipes can be chained with the | operator"]}]},{id:"mod9-t2",title:"Custom Pipes",explanation:`## Creating Custom Pipes

\`\`\`typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, trail = '...'): string {
    return value.length > limit
      ? value.substring(0, limit) + trail
      : value;
  }
}
\`\`\`

\`\`\`html
{{ longText | truncate:100:'…' }}
\`\`\`

### Pure vs Impure Pipes

- **Pure (default):** Re-evaluated only when input reference changes
- **Impure:** Re-evaluated on every change detection cycle

\`\`\`typescript
@Pipe({ name: 'filter', pure: false }) // impure — use sparingly
\`\`\``,tasks:[{description:'Create a custom timeAgo pipe that converts a Date to a human-readable string like "5 minutes ago".',starterCode:`import { Pipe, PipeTransform } from '@angular/core';

// TODO: Create timeAgo pipe`,solution:`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo', standalone: true })
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
    if (seconds < 2592000) return Math.floor(seconds / 86400) + ' days ago';
    return Math.floor(seconds / 2592000) + ' months ago';
  }
}`,hints:["Implement PipeTransform interface with transform()","The first argument is the piped value, rest are parameters","Pure pipes only recalculate when input reference changes"]}]}],test:[{id:"mod9-q1",question:"What does the async pipe do?",options:["Converts async to sync","Subscribes to an Observable/Promise and returns the latest value, auto-unsubscribing","Makes pipes asynchronous","Delays pipe execution"],correctAnswer:1,explanation:"AsyncPipe subscribes to an Observable or Promise, returns the latest emitted value, and automatically unsubscribes on component destroy."},{id:"mod9-q2",question:"What is the difference between pure and impure pipes?",options:["Pure pipes are faster","Pure pipes re-run only on input reference change; impure pipes re-run on every change detection","No difference","Impure pipes are deprecated"],correctAnswer:1,explanation:"Pure pipes only re-evaluate when the input reference changes. Impure pipes run on every change detection cycle, which can impact performance."},{id:"mod9-q3",question:"How do you pass parameters to a pipe?",options:["pipe(param)","{{ value | pipe:param1:param2 }}","{{ value | pipe(param) }}","{{ value.pipe(param) }}"],correctAnswer:1,explanation:"Pipe parameters are passed using colon syntax: {{ value | pipeName:arg1:arg2 }}."},{id:"mod9-q4",question:"Which pipe formats a number as currency?",options:["number","money","currency","format"],correctAnswer:2,explanation:'The currency pipe formats a number as currency: {{ price | currency:"USD" }}.'},{id:"mod9-q5",question:"What interface must a custom pipe implement?",options:["PipeInterface","PipeTransform","Transformable","PipeHandler"],correctAnswer:1,explanation:"Custom pipes must implement the PipeTransform interface, which requires a transform() method."}]},oh={id:"mod-10",title:"Signals & Reactivity",description:"Master Angular Signals — signal(), computed(), effect(), and signal-based components.",topics:[{id:"mod10-t1",title:"Signal Basics",explanation:`## Angular Signals

Signals (Angular 16+) are a new reactive primitive for fine-grained reactivity.

### Creating Signals

\`\`\`typescript
import { signal, computed, effect } from '@angular/core';

// Writable signal
const count = signal(0);

// Read
console.log(count()); // 0

// Update
count.set(5);
count.update(v => v + 1);
\`\`\`

### Computed Signals

\`\`\`typescript
const firstName = signal('John');
const lastName = signal('Doe');
const fullName = computed(() => \\\`\\\${firstName()} \\\${lastName()}\\\`);
// fullName() === 'John Doe'
// Automatically recalculated when dependencies change
\`\`\`

### Effects

\`\`\`typescript
effect(() => {
  console.log('Count changed:', count());
  // Runs when count changes
});
\`\`\`

### In Components

\`\`\`typescript
@Component({
  template: \\\`
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">+1</button>
  \\\`,
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update(v => v + 1);
  }
}
\`\`\``,tasks:[{description:"Create a shopping cart component using signals — items signal, computed total, and effect to log changes.",starterCode:`import { Component, signal, computed, effect } from '@angular/core';

// TODO: Create CartComponent with signals`,solution:`import { Component, signal, computed, effect } from '@angular/core';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  template: \\\`
    @for (item of items(); track item.name) {
      <div>{{ item.name }} x{{ item.quantity }} — \\\${{ item.price * item.quantity }}</div>
    }
    <p>Total: \\\${{ total() }}</p>
    <button (click)="addItem()">Add Sample Item</button>
  \\\`,
})
export class CartComponent {
  items = signal<CartItem[]>([]);
  total = computed(() =>
    this.items().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  constructor() {
    effect(() => console.log('Cart total:', this.total()));
  }

  addItem() {
    this.items.update(items => [...items, { name: 'Widget', price: 9.99, quantity: 1 }]);
  }
}`,hints:["signal() creates a writable signal","computed() auto-tracks dependencies","effect() runs side effects when signals change"]}]},{id:"mod10-t2",title:"Signal Inputs & Model",explanation:`## Signal-Based Component APIs

### Signal Inputs (Angular 17+)

\`\`\`typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<p>Hello, {{ name() }}</p>',
})
export class UserComponent {
  name = input.required<string>();
  role = input('user'); // default value
}
\`\`\`

### Model Inputs (Two-Way Binding)

\`\`\`typescript
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: \\\`
    <button (click)="toggle()">{{ checked() ? 'ON' : 'OFF' }}</button>
  \\\`,
})
export class ToggleComponent {
  checked = model(false);

  toggle() {
    this.checked.update(v => !v);
  }
}
\`\`\`

\`\`\`html
<!-- Parent: two-way binding with signals -->
<app-toggle [(checked)]="isEnabled" />
\`\`\`

### Signal Queries

\`\`\`typescript
import { viewChild, viewChildren, contentChild } from '@angular/core';

export class MyComponent {
  input = viewChild<ElementRef>('myInput');
  items = viewChildren(ItemComponent);
}
\`\`\``,tasks:[{description:"Create a slider component using model() for two-way binding of the value. Use computed() for a percentage display.",starterCode:`import { Component, model, computed } from '@angular/core';

// TODO: Create SliderComponent with model input`,solution:`import { Component, model, computed } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  template: \\\`
    <input type="range" [min]="0" [max]="100"
      [value]="value()"
      (input)="value.set(+$any($event.target).value)" />
    <span>{{ percentage() }}</span>
  \\\`,
})
export class SliderComponent {
  value = model(50);
  percentage = computed(() => this.value() + '%');
}

// Usage: <app-slider [(value)]="volume" />`,hints:["model() creates a two-way bindable signal","Use [(propName)] in parent for two-way binding","computed() reacts to signal changes automatically"]}]}],test:[{id:"mod10-q1",question:"How do you read a signal's value?",options:["signal.value","signal()","$signal","signal.get()"],correctAnswer:1,explanation:"Signals are called as functions: count() reads the current value. This also registers the read for dependency tracking."},{id:"mod10-q2",question:"What does computed() do?",options:["Creates a writable signal","Creates a read-only signal that auto-updates when its dependencies change","Computes a value once","Creates an effect"],correctAnswer:1,explanation:"computed() creates a derived signal that automatically recalculates when any signal it reads changes."},{id:"mod10-q3",question:"What is model() used for?",options:["3D modeling","Creating signals that support two-way binding with parent components","Database models","Form models"],correctAnswer:1,explanation:"model() creates a writable signal input that supports two-way binding via [(propName)] syntax in the parent template."},{id:"mod10-q4",question:"When does an effect() callback run?",options:["Once on creation","When any signal it reads changes","Every change detection cycle","Only when explicitly called"],correctAnswer:1,explanation:"effect() tracks which signals are read during execution and re-runs whenever any of those signals change."},{id:"mod10-q5",question:"How do you update a signal's value based on the current value?",options:["signal.value++","signal.update(v => v + 1)","signal = signal + 1","signal.set(signal + 1)"],correctAnswer:1,explanation:"signal.update(fn) takes a function that receives the current value and returns the new value."}]},ih={id:"mod-11",title:"Lifecycle Hooks",description:"Understand component lifecycle hooks, their order, and when to use each one.",topics:[{id:"mod11-t1",title:"Component Lifecycle",explanation:`## Lifecycle Hooks

Angular calls lifecycle hooks at specific stages of a component's life.

### Hook Order

1. **constructor** — DI injection
2. **ngOnChanges** — when input bindings change
3. **ngOnInit** — after first ngOnChanges
4. **ngDoCheck** — every change detection run
5. **ngAfterContentInit** — after content projection
6. **ngAfterContentChecked** — after projected content checked
7. **ngAfterViewInit** — after view and child views init
8. **ngAfterViewChecked** — after view and child views checked
9. **ngOnDestroy** — before component is destroyed

### Common Hooks

\`\`\`typescript
@Component({ ... })
export class MyComponent implements OnInit, OnDestroy, OnChanges {
  @Input() data!: string;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log('Previous:', changes['data'].previousValue);
      console.log('Current:', changes['data'].currentValue);
    }
  }

  ngOnInit() {
    // Fetch data, set up subscriptions
  }

  ngOnDestroy() {
    // Clean up subscriptions, timers
  }
}
\`\`\`

### afterRender & afterNextRender (Angular 16+)

\`\`\`typescript
constructor() {
  afterNextRender(() => {
    // Runs once after the next render — safe for DOM access
    this.chart = new Chart(this.canvas.nativeElement);
  });
}
\`\`\``,tasks:[{description:"Create a component that logs each lifecycle hook as it fires. Use ngOnInit to load data and ngOnDestroy to clean up.",starterCode:`import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';

// TODO: Implement all lifecycle hooks`,solution:`import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  template: '<p>Ticks: {{ ticks }}</p>',
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges {
  @Input() label = '';
  ticks = 0;
  private destroy$ = new Subject<void>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
    interval(1000).pipe(takeUntil(this.destroy$))
      .subscribe(() => this.ticks++);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    this.destroy$.next();
    this.destroy$.complete();
  }
}`,hints:["ngOnInit runs once after the first ngOnChanges","ngOnDestroy is the place to clean up subscriptions","ngOnChanges receives a SimpleChanges object with previous/current values"]}]}],test:[{id:"mod11-q1",question:"Which hook runs first: ngOnInit or ngOnChanges?",options:["ngOnInit","ngOnChanges","They run simultaneously","It depends on the component"],correctAnswer:1,explanation:"ngOnChanges runs before ngOnInit. It fires whenever input properties change, including the initial set."},{id:"mod11-q2",question:"When should you use ngOnDestroy?",options:["To initialize data","To clean up subscriptions, timers, and event listeners","To render the template","To validate inputs"],correctAnswer:1,explanation:"ngOnDestroy is called before Angular destroys the component. Use it to prevent memory leaks by unsubscribing and cleaning up."},{id:"mod11-q3",question:"What does afterNextRender do?",options:["Runs before rendering","Runs a callback once after the next render, safe for DOM manipulation","Renders the template again","Triggers change detection"],correctAnswer:1,explanation:"afterNextRender schedules a one-time callback after the next render, safe for DOM manipulation like initializing charts or measuring elements."},{id:"mod11-q4",question:"What parameter does ngOnChanges receive?",options:["The component instance","A SimpleChanges object with previous and current values","The changed property name","An event"],correctAnswer:1,explanation:"ngOnChanges receives a SimpleChanges object where each key is an input property name, containing previousValue and currentValue."},{id:"mod11-q5",question:"Can ngOnInit access @ViewChild elements?",options:["Yes, always","No — use ngAfterViewInit for view queries","Only with static: true","Only in standalone components"],correctAnswer:1,explanation:"View queries are resolved after the view initializes. Use ngAfterViewInit to safely access @ViewChild elements."}]},sh={id:"mod-12",title:"Custom Directives",description:"Create custom attribute and structural directives to extend HTML behavior.",topics:[{id:"mod12-t1",title:"Attribute Directives",explanation:`## Custom Attribute Directives

Attribute directives change the appearance or behavior of an element.

\`\`\`typescript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
\`\`\`

\`\`\`html
<p [appHighlight]="'lightblue'">Hover me!</p>
\`\`\`

### Host Binding

\`\`\`typescript
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[appDropdown]', standalone: true })
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click')
  toggle() { this.isOpen = !this.isOpen; }
}
\`\`\``,tasks:[{description:"Create a tooltip directive that shows a tooltip on hover using HostListener and ElementRef.",starterCode:`import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// TODO: Create appTooltip directive`,solution:`import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[appTooltip]', standalone: true })
export class TooltipDirective {
  @Input() appTooltip = '';
  private tooltipEl: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  show() {
    this.tooltipEl = this.renderer.createElement('span');
    this.renderer.appendChild(this.tooltipEl, this.renderer.createText(this.appTooltip));
    this.renderer.setStyle(this.tooltipEl, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipEl, 'background', '#333');
    this.renderer.setStyle(this.tooltipEl, 'color', '#fff');
    this.renderer.setStyle(this.tooltipEl, 'padding', '4px 8px');
    this.renderer.setStyle(this.tooltipEl, 'borderRadius', '4px');
    this.renderer.setStyle(this.tooltipEl, 'fontSize', '12px');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipEl);
  }

  @HostListener('mouseleave')
  hide() {
    if (this.tooltipEl) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipEl);
      this.tooltipEl = null;
    }
  }
}`,hints:["Use @HostListener to react to DOM events","Use Renderer2 for safe DOM manipulation","@HostBinding binds to host element properties"]}]}],test:[{id:"mod12-q1",question:"What is the selector syntax for an attribute directive?",options:['selector: "appDirective"','selector: "[appDirective]"','selector: ".appDirective"','selector: "#appDirective"'],correctAnswer:1,explanation:"Attribute directive selectors use square brackets: [appDirective] to match elements with that attribute."},{id:"mod12-q2",question:"What does @HostListener do?",options:["Listens to component events","Subscribes to a method on the host element's events","Listens to service events","Listens to route changes"],correctAnswer:1,explanation:"@HostListener subscribes to events on the host element (the element the directive is placed on)."},{id:"mod12-q3",question:"Why prefer Renderer2 over direct DOM access?",options:["It's faster","It provides platform-independent DOM manipulation (works with SSR)","It's simpler","It's required"],correctAnswer:1,explanation:"Renderer2 abstracts DOM operations, making directives work across platforms including server-side rendering (Angular Universal)."},{id:"mod12-q4",question:"What does @HostBinding do?",options:["Binds to parent component","Binds a property or class to the host element","Creates a template binding","Binds to a form control"],correctAnswer:1,explanation:"@HostBinding binds a directive property to a host element property (class, style, attribute, etc.)."},{id:"mod12-q5",question:"Can a directive have @Input and @Output?",options:["No, only components can","Yes, directives can have inputs and outputs","Only @Input","Only @Output"],correctAnswer:1,explanation:"Directives can have @Input and @Output decorators, allowing configuration and event emission just like components."}]},ah={id:"mod-13",title:"State Management",description:"Manage application state with services, NgRx, and signal-based stores.",topics:[{id:"mod13-t1",title:"Service-Based State",explanation:`## State Management with Services

A simple pattern using BehaviorSubject or Signals.

### BehaviorSubject Store

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class TodoStore {
  private state = new BehaviorSubject<Todo[]>([]);
  todos$ = this.state.asObservable();

  add(todo: Todo) {
    this.state.next([...this.state.getValue(), todo]);
  }

  remove(id: number) {
    this.state.next(this.state.getValue().filter(t => t.id !== id));
  }
}
\`\`\`

### Signal Store

\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class TodoStore {
  todos = signal<Todo[]>([]);
  completedCount = computed(() => this.todos().filter(t => t.done).length);

  add(todo: Todo) { this.todos.update(t => [...t, todo]); }
  remove(id: number) { this.todos.update(t => t.filter(x => x.id !== id)); }
  toggle(id: number) {
    this.todos.update(t => t.map(x => x.id === id ? { ...x, done: !x.done } : x));
  }
}
\`\`\``,tasks:[{description:"Create a signal-based CartStore with add, remove, and clear methods plus a computed total.",starterCode:`import { Injectable, signal, computed } from '@angular/core';

// TODO: Create CartStore`,solution:`import { Injectable, signal, computed } from '@angular/core';

interface CartItem { id: number; name: string; price: number; qty: number; }

@Injectable({ providedIn: 'root' })
export class CartStore {
  items = signal<CartItem[]>([]);
  total = computed(() => this.items().reduce((sum, i) => sum + i.price * i.qty, 0));
  count = computed(() => this.items().reduce((sum, i) => sum + i.qty, 0));

  add(item: Omit<CartItem, 'qty'>) {
    this.items.update(items => {
      const existing = items.find(i => i.id === item.id);
      if (existing) return items.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...items, { ...item, qty: 1 }];
    });
  }

  remove(id: number) { this.items.update(items => items.filter(i => i.id !== id)); }
  clear() { this.items.set([]); }
}`,hints:["signal() stores mutable state","computed() derives values from signals","update() receives the current value and returns the new one"]}]},{id:"mod13-t2",title:"NgRx Basics",explanation:`## NgRx — Redux for Angular

### Core Concepts

1. **Store** — centralized state
2. **Actions** — describe events
3. **Reducers** — pure functions that update state
4. **Selectors** — extract data from state
5. **Effects** — handle side effects

### Actions

\`\`\`typescript
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[Users] Load');
export const loadUsersSuccess = createAction('[Users] Load Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[Users] Load Failure', props<{ error: string }>());
\`\`\`

### Reducer

\`\`\`typescript
import { createReducer, on } from '@ngrx/store';

const initialState: UserState = { users: [], loading: false, error: null };

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
\`\`\`

### Selectors

\`\`\`typescript
export const selectUsers = (state: AppState) => state.users.users;
export const selectLoading = (state: AppState) => state.users.loading;
\`\`\``,tasks:[{description:"Define NgRx actions and a reducer for a simple counter with increment, decrement, and reset.",starterCode:`import { createAction, createReducer, on } from '@ngrx/store';

// TODO: Define actions and reducer`,solution:`import { createAction, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');

export interface CounterState { count: number; }

const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 })),
  on(decrement, state => ({ count: state.count - 1 })),
  on(reset, () => initialState),
);`,hints:["createAction defines what happened, not how to handle it","Reducers are pure functions — no side effects","on() maps actions to state transformations"]}]}],test:[{id:"mod13-q1",question:"What is the simplest state management approach in Angular?",options:["NgRx","A shared service with BehaviorSubject or signals","localStorage","Global variables"],correctAnswer:1,explanation:"For simple apps, a shared injectable service with BehaviorSubject or signals provides effective state management without extra libraries."},{id:"mod13-q2",question:"In NgRx, what are reducers?",options:["Functions that perform API calls","Pure functions that take state + action and return new state","Classes that manage subscriptions","Components that display state"],correctAnswer:1,explanation:"Reducers are pure functions that receive the current state and an action, then return a new state. They contain no side effects."},{id:"mod13-q3",question:"What are NgRx Effects used for?",options:["CSS effects","Handling side effects like API calls triggered by actions","Animating components","Testing reducers"],correctAnswer:1,explanation:"Effects listen for actions, perform side effects (HTTP calls, timers), and dispatch new actions with the results."},{id:"mod13-q4",question:"What is a selector in NgRx?",options:["A CSS selector","A pure function that extracts specific data from the store","A way to select components","A query for the DOM"],correctAnswer:1,explanation:"Selectors are pure functions that compute derived data from the store state, with memoization for performance."},{id:"mod13-q5",question:"When should you use NgRx over a simple service?",options:["Always","When you have complex shared state with many components and async flows","For small apps","Only with SSR"],correctAnswer:1,explanation:"NgRx adds value for apps with complex state, many components sharing data, and numerous async operations that benefit from explicit action/reducer patterns."}]},lh={id:"mod-14",title:"Testing Angular Applications",description:"Write unit tests with Jasmine/Jest, test components, services, and use TestBed.",topics:[{id:"mod14-t1",title:"Unit Testing with TestBed",explanation:`## Testing in Angular

Angular uses **TestBed** to configure a testing module.

### Component Testing

\`\`\`typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent], // standalone
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should display count in template', () => {
    component.count = 5;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('span');
    expect(el.textContent).toContain('5');
  });
});
\`\`\`

### Service Testing

\`\`\`typescript
describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should add numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });
});
\`\`\``,tasks:[{description:"Write unit tests for a TodoService that tests add, toggle, and getAll methods.",starterCode:`import { TestBed } from '@angular/core/testing';

// TODO: Write tests for TodoService`,solution:`import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should start with empty todos', () => {
    expect(service.getAll()).toEqual([]);
  });

  it('should add a todo', () => {
    service.add('Test task');
    expect(service.getAll().length).toBe(1);
    expect(service.getAll()[0].text).toBe('Test task');
    expect(service.getAll()[0].completed).toBe(false);
  });

  it('should toggle a todo', () => {
    service.add('Task');
    const id = service.getAll()[0].id;
    service.toggle(id);
    expect(service.getAll()[0].completed).toBe(true);
    service.toggle(id);
    expect(service.getAll()[0].completed).toBe(false);
  });
});`,hints:["Use TestBed.inject() to get a service instance","Each test should be independent — beforeEach resets state","Test behavior, not implementation details"]}]},{id:"mod14-t2",title:"Mocking Dependencies",explanation:`## Mocking in Tests

### Using jasmine.createSpyObj

\`\`\`typescript
let httpSpy: jasmine.SpyObj<HttpClient>;

beforeEach(() => {
  httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  TestBed.configureTestingModule({
    providers: [UserService, { provide: HttpClient, useValue: httpSpy }],
  });
});

it('should fetch users', () => {
  httpSpy.get.and.returnValue(of([{ id: 1, name: 'Alice' }]));
  const service = TestBed.inject(UserService);
  service.getUsers().subscribe(users => {
    expect(users.length).toBe(1);
  });
});
\`\`\`

### HttpTestingController

\`\`\`typescript
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()],
  });
  httpMock = TestBed.inject(HttpTestingController);
});

it('should call GET /api/users', () => {
  service.getUsers().subscribe(users => expect(users.length).toBe(1));
  const req = httpMock.expectOne('/api/users');
  expect(req.request.method).toBe('GET');
  req.flush([{ id: 1, name: 'Alice' }]);
});
\`\`\``,tasks:[{description:"Write a test for a UserService that mocks HttpClient using HttpTestingController.",starterCode:"// TODO: Test UserService with HttpTestingController",solution:`import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'Alice' }];
    service.getAll().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});`,hints:["provideHttpClientTesting replaces the real HTTP backend","httpMock.expectOne asserts a request was made","req.flush sends a mock response"]}]}],test:[{id:"mod14-q1",question:"What does TestBed do?",options:["Runs the application","Configures a testing module with components, services, and mocks","Creates a test database","Generates test cases"],correctAnswer:1,explanation:"TestBed configures a testing module environment, allowing you to declare components, provide services, and set up mocks for isolated testing."},{id:"mod14-q2",question:"How do you trigger change detection in a test?",options:["detectChanges()","fixture.detectChanges()","TestBed.detectChanges()","component.detectChanges()"],correctAnswer:1,explanation:"fixture.detectChanges() triggers change detection for the component, updating the template with current data."},{id:"mod14-q3",question:"What does HttpTestingController do?",options:["Makes real HTTP calls","Intercepts HTTP requests and lets you flush mock responses","Tests WebSocket connections","Mocks the browser"],correctAnswer:1,explanation:"HttpTestingController intercepts all HttpClient requests, allowing you to verify and control responses in tests without real HTTP calls."},{id:"mod14-q4",question:"What does jasmine.createSpyObj do?",options:["Creates a real service","Creates a mock object with spy methods","Spies on the DOM","Creates test fixtures"],correctAnswer:1,explanation:"createSpyObj creates a mock object with the specified methods as jasmine spies that you can configure with return values."},{id:"mod14-q5",question:"Why call httpMock.verify() in afterEach?",options:["To clean up","To ensure no unexpected HTTP requests were made","To close the connection","To reset the mock"],correctAnswer:1,explanation:"verify() ensures no unmatched requests remain, catching unexpected HTTP calls that might indicate bugs."}]},uh={id:"mod-15",title:"Performance Optimization",description:"Optimize Angular apps with OnPush, lazy loading, trackBy, deferrable views, and profiling.",topics:[{id:"mod15-t1",title:"Change Detection & OnPush",explanation:`## Change Detection Strategies

Angular checks the component tree for changes to update the DOM.

### Default Strategy

Checks the entire component tree on every event, timer, or HTTP response.

### OnPush Strategy

\`\`\`typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '...',
})
export class MyComponent {
  @Input() data!: Data;
}
\`\`\`

With OnPush, Angular only checks when:
- An @Input reference changes
- An event originates from the component
- An Observable emits (via async pipe)
- Manually triggered via ChangeDetectorRef

### Deferrable Views (Angular 17+)

\`\`\`html
@defer (on viewport) {
  <app-heavy-chart />
} @placeholder {
  <div>Chart loading...</div>
} @loading (minimum 500ms) {
  <app-spinner />
}
\`\`\`

### Triggers
- \`on viewport\` — when element enters viewport
- \`on idle\` — when browser is idle
- \`on interaction\` — on user interaction
- \`on hover\` — on mouse hover
- \`on timer(5s)\` — after delay
- \`when condition\` — when expression is true`,tasks:[{description:"Convert a component to OnPush change detection and use @defer for a heavy child component.",starterCode:"// TODO: Apply OnPush strategy and @defer",solution:`import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \\\`
    <h1>{{ title }}</h1>
    @defer (on viewport) {
      <app-analytics-chart [data]="chartData" />
    } @placeholder {
      <div class="placeholder">📊 Chart will load when visible</div>
    } @loading (minimum 300ms) {
      <div class="loading">Loading chart...</div>
    }
  \\\`,
})
export class DashboardComponent {
  @Input() title = 'Dashboard';
  @Input() chartData: number[] = [];
}`,hints:["OnPush skips checks unless inputs change by reference","Use immutable data patterns with OnPush","@defer delays loading until triggered"]}]}],test:[{id:"mod15-q1",question:"What does ChangeDetectionStrategy.OnPush do?",options:["Disables change detection","Only checks when inputs change by reference, events fire, or async pipe emits","Pushes changes to the server","Runs change detection more frequently"],correctAnswer:1,explanation:"OnPush optimizes change detection by skipping the component unless its input references change, an event fires from it, or an Observable emits via async pipe."},{id:"mod15-q2",question:"What is @defer used for?",options:["Deferring errors","Lazy loading parts of a template with configurable triggers","Delaying HTTP requests","Postponing navigation"],correctAnswer:1,explanation:"@defer lazily loads template blocks based on triggers (viewport, idle, interaction, timer), reducing initial bundle size and improving performance."},{id:"mod15-q3",question:"Why is trackBy important in @for / *ngFor?",options:["For animation","It helps Angular identify unchanged items to minimize DOM manipulation","For sorting","For filtering"],correctAnswer:1,explanation:"trackBy (or track expression in @for) provides a unique identity for each item, so Angular can reuse existing DOM elements instead of recreating them."},{id:"mod15-q4",question:"What does the async pipe help with performance?",options:["It makes code asynchronous","It auto-subscribes/unsubscribes and works with OnPush change detection","It caches responses","It parallelizes rendering"],correctAnswer:1,explanation:"AsyncPipe automatically subscribes, triggers change detection on emission, and unsubscribes on destroy — ideal with OnPush."},{id:"mod15-q5",question:"What tool helps profile Angular performance?",options:["Chrome DevTools Performance tab","Angular DevTools browser extension","Both A and B","ng test"],correctAnswer:2,explanation:"Both Chrome DevTools Performance tab and the Angular DevTools browser extension help profile change detection cycles and component rendering."}]},ch={id:"mod-16",title:"Animations",description:"Add smooth animations using Angular's animation module with triggers, states, and transitions.",topics:[{id:"mod16-t1",title:"Angular Animations Basics",explanation:`## Angular Animations

### Setup

\`\`\`typescript
import { provideAnimations } from '@angular/platform-browser/animations';

// In app config:
providers: [provideAnimations()]
\`\`\`

### Defining Animations

\`\`\`typescript
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms ease-in')]),
      transition(':leave', [animate('300ms ease-out')]),
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class MyComponent {}
\`\`\`

\`\`\`html
<div @fadeInOut>This fades in and out</div>

@if (isVisible) {
  <div @slideIn>Slides in from left</div>
}
\`\`\`

### Query & Stagger

\`\`\`typescript
trigger('listAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      stagger(50, [
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
])
\`\`\``,tasks:[{description:"Create a list component with staggered animation when items enter and a fade animation when items leave.",starterCode:`import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

// TODO: Create animated list component`,solution:`import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-animated-list',
  standalone: true,
  animations: [
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(60, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true }),
        query(':leave', [
          animate('200ms ease-in', style({ opacity: 0, transform: 'translateX(100px)' })),
        ], { optional: true }),
      ]),
    ]),
  ],
  template: \\\`
    <button (click)="addItem()">Add Item</button>
    <div [@listAnim]="items.length">
      @for (item of items; track item) {
        <div class="item">
          {{ item }}
          <button (click)="remove(item)">✕</button>
        </div>
      }
    </div>
  \\\`,
})
export class AnimatedListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  private counter = 4;

  addItem() { this.items.push('Item ' + this.counter++); }
  remove(item: string) { this.items = this.items.filter(i => i !== item); }
}`,hints:["Use :enter and :leave aliases for void => * and * => void","stagger delays each element's animation","Use { optional: true } for queries that may match nothing"]}]}],test:[{id:"mod16-q1",question:"What does provideAnimations() do?",options:["Adds CSS animations","Enables Angular's animation module for the application","Provides animation data","Imports AnimateModule"],correctAnswer:1,explanation:"provideAnimations() enables Angular's animation DSL, providing the necessary animation services to the application."},{id:"mod16-q2",question:"What does :enter mean in an animation transition?",options:["Enter key pressed","An element being added to the DOM (void => *)","Entering a route","Focus event"],correctAnswer:1,explanation:":enter is an alias for void => *, matching when an element is being inserted into the DOM."},{id:"mod16-q3",question:"What does stagger do in Angular animations?",options:["Pauses the animation","Delays each matched element's animation by a given interval","Runs animations in reverse","Loops animations"],correctAnswer:1,explanation:"stagger applies a timing delay between each element matched by a query, creating a cascading animation effect."},{id:"mod16-q4",question:"How do you bind an animation trigger to an element?",options:['[animation]="trigger"','[@triggerName]="expression"','(animate)="trigger"',"#trigger"],correctAnswer:1,explanation:'The @ prefix binds an animation trigger: <div [@triggerName]="stateExpression">.'},{id:"mod16-q5",question:"What is provideAnimationsAsync() used for?",options:["Async animation loading","Lazy loading the animation module to reduce initial bundle size","Running animations asynchronously","Parallel animations"],correctAnswer:1,explanation:"provideAnimationsAsync() lazy-loads the animation module, reducing the initial JavaScript bundle for better load performance."}]},dh={id:"mod-17",title:"Server-Side Rendering & SSR",description:"Implement Angular Universal/SSR, hydration, and SEO optimization techniques.",topics:[{id:"mod17-t1",title:"Angular SSR Setup",explanation:`## Angular SSR (Server-Side Rendering)

SSR renders Angular apps on the server for better performance and SEO.

### Adding SSR

\`\`\`bash
ng add @angular/ssr
\`\`\`

This generates:
- \`server.ts\` — Express server
- \`src/app/app.config.server.ts\` — Server-specific config

### Key Concepts

1. **Server Rendering** — HTML generated on server
2. **Client Hydration** — Angular takes over on browser
3. **Transfer State** — Avoids duplicate API calls

### Hydration

\`\`\`typescript
// app.config.ts
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideClientHydration(),
  ],
};
\`\`\`

### Platform Detection

\`\`\`typescript
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

export class MyComponent {
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-only code (localStorage, window, etc.)
    }
  }
}
\`\`\`

### afterNextRender for DOM Access

\`\`\`typescript
constructor() {
  afterNextRender(() => {
    // Safe — only runs in browser after render
    this.initChart();
  });
}
\`\`\``,tasks:[{description:"Create a component that safely accesses localStorage in SSR by checking the platform first.",starterCode:`import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// TODO: Create SSR-safe component`,solution:`import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: \\\`
    <button (click)="toggle()">Theme: {{ theme }}</button>
  \\\`,
})
export class ThemeToggleComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  theme = 'light';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.theme = localStorage.getItem('theme') ?? 'light';
    }
  }

  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.theme);
    }
  }
}`,hints:["isPlatformBrowser checks if code runs in the browser","localStorage is not available during server rendering","afterNextRender is another safe alternative for browser-only code"]}]}],test:[{id:"mod17-q1",question:"What is the main benefit of SSR?",options:["Faster development","Better SEO and faster initial page load (First Contentful Paint)","Smaller bundle size","Better TypeScript support"],correctAnswer:1,explanation:"SSR pre-renders HTML on the server, giving search engines content to index and users a faster initial page load."},{id:"mod17-q2",question:"What is hydration in Angular SSR?",options:["Adding water to the DOM","The process where Angular takes over the server-rendered DOM in the browser","Caching server responses","Lazy loading on the server"],correctAnswer:1,explanation:"Hydration is the process where Angular attaches event listeners and takes control of the server-rendered static HTML in the browser."},{id:"mod17-q3",question:"Why can't you use window or localStorage directly in SSR?",options:["They are deprecated","They don't exist in the Node.js server environment","They are too slow","They conflict with Angular"],correctAnswer:1,explanation:"Browser APIs like window, document, and localStorage don't exist in the Node.js environment where server rendering runs."},{id:"mod17-q4",question:"What does provideClientHydration() do?",options:["Provides water to the client","Enables client-side hydration to reuse server-rendered DOM","Provides hydration data","Runs hydration tests"],correctAnswer:1,explanation:"provideClientHydration() configures Angular to reuse server-rendered DOM instead of destroying and re-creating it."},{id:"mod17-q5",question:"When should you use afterNextRender?",options:["For server-side code","For browser-only code that needs DOM access after rendering","For animation triggers","For API calls"],correctAnswer:1,explanation:"afterNextRender schedules a one-time callback that only runs in the browser after rendering, safe for DOM manipulation."}]},ph={id:"mod-18",title:"Security & Deployment",description:"Secure your Angular apps and deploy them to production using modern hosting platforms.",topics:[{id:"mod18-t1",title:"Security Best Practices",explanation:`## Angular Security

Angular provides built-in protection against common web vulnerabilities.

### Built-in XSS Protection

Angular automatically sanitizes values bound in templates:

\`\`\`typescript
// Angular auto-sanitizes this
@Component({
  template: \\\`<div [innerHTML]="userContent"></div>\\\`,
})
export class SafeComponent {
  userContent = '<script>alert("xss")<\/script><b>Safe</b>';
  // Only <b>Safe</b> renders — script tag is stripped
}
\`\`\`

### DomSanitizer for Trusted Content

\`\`\`typescript
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export class VideoComponent {
  trustedHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    // Only bypass if you fully trust the source!
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(
      '<iframe src="https://trusted-site.com"></iframe>'
    );
  }
}
\`\`\`

### HTTP Security

\`\`\`typescript
// Always use HttpClient — it handles XSRF protection
// Configure XSRF token
provideHttpClient(withXsrfConfiguration({
  cookieName: 'XSRF-TOKEN',
  headerName: 'X-XSRF-TOKEN',
}));
\`\`\`

### Route Guards for Authorization

\`\`\`typescript
export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) return true;
  return router.createUrlTree(['/login']);
};
\`\`\``,tasks:[{description:"Create a route guard that checks authentication before allowing access to a protected route.",starterCode:`import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// TODO: Create an auth guard`,solution:`import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url },
  });
};`,hints:["Use inject() to get AuthService and Router","Return true for allowed or a UrlTree for redirect","Save the returnUrl so you can redirect back after login"]}]},{id:"mod18-t2",title:"Production Build & Deployment",explanation:`## Building & Deploying Angular Apps

### Production Build

\`\`\`bash
ng build
\`\`\`

This generates optimized files in \`dist/\` with:
- Tree-shaking (dead code removal)
- Minification
- AOT compilation
- Code splitting for lazy routes

### Environment Configuration

\`\`\`typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.myapp.com',
};
\`\`\`

### Deploy to Vercel

1. Push to GitHub
2. Import project on Vercel
3. Set build command: \`ng build\`
4. Set output directory: \`dist/my-app/browser\`

### Deploy to Firebase

\`\`\`bash
ng add @angular/fire
ng deploy
\`\`\`

### Deploy to GitHub Pages

\`\`\`bash
ng add angular-cli-ghpages
ng deploy --base-href=/my-repo/
\`\`\`

### Docker Deployment

\`\`\`dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx ng build

FROM nginx:alpine
COPY --from=build /app/dist/my-app/browser /usr/share/nginx/html
\`\`\``,tasks:[{description:"Create environment files for development and production with different API URLs.",starterCode:`// TODO: Create environment.ts and environment.prod.ts
// with apiUrl and production flag`,solution:`// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  enableDebug: true,
};

// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.production.com',
  enableDebug: false,
};

// Usage in a service:
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = environment.apiUrl;

  getItems() {
    return this.http.get(\\\`\\\${this.baseUrl}/items\\\`);
  }
}`,hints:["Keep the same shape for both environment files","Angular CLI replaces the file at build time based on the configuration","Never store secrets in environment files — they are part of the client bundle"]}]}],test:[{id:"mod18-q1",question:"How does Angular protect against XSS by default?",options:["It blocks all HTTP requests","It automatically sanitizes values bound in templates","It encrypts all data","It uses a Web Application Firewall"],correctAnswer:1,explanation:"Angular treats all values as untrusted by default and sanitizes them before inserting into the DOM."},{id:"mod18-q2",question:"When should you use bypassSecurityTrustHtml?",options:["Always, for performance","Only when content comes from a fully trusted source","For all user input","For component templates"],correctAnswer:1,explanation:"bypassSecurityTrustHtml disables Angular's built-in sanitization, so it should only be used with content you fully trust."},{id:"mod18-q3",question:"What does ng build produce for production?",options:["Source TypeScript files","Optimized, tree-shaken, minified, AOT-compiled bundles","A Docker container","Server-side Node.js code"],correctAnswer:1,explanation:"ng build produces optimized static assets with tree-shaking, minification, and ahead-of-time compilation."},{id:"mod18-q4",question:"How does Angular handle XSRF protection?",options:["It blocks all POST requests","HttpClient automatically reads XSRF-TOKEN cookies and sends the X-XSRF-TOKEN header","It requires manual token injection","It uses JWT tokens"],correctAnswer:1,explanation:"Angular HttpClient has built-in XSRF protection that reads the token from a cookie and sends it as a header."},{id:"mod18-q5",question:"Why should you never store secrets in Angular environment files?",options:["They get deleted at build time","They are part of the client bundle and visible to anyone","Angular does not allow strings in environment files","They conflict with .env files"],correctAnswer:1,explanation:"Environment files are compiled into the client JavaScript bundle, which anyone can inspect in the browser."}]},mh=[{id:"ft-1",question:"What is the difference between a component and a directive in Angular?",options:["They are identical","Components have templates; directives modify existing DOM elements","Directives have templates; components do not","Components cannot have inputs"],correctAnswer:1,explanation:"Components are directives with templates — they define views. Attribute and structural directives modify behavior or structure of existing DOM elements without their own template."},{id:"ft-2",question:"What is the purpose of the @Injectable decorator?",options:["To create components","To mark a class as available for dependency injection","To inject CSS styles","To make a class abstract"],correctAnswer:1,explanation:`@Injectable marks a class so Angular's DI system can create and deliver instances of it. providedIn: "root" registers it as a singleton.`},{id:"ft-3",question:"What is the difference between @Input() and @Output()?",options:["No difference","@Input receives data from the parent; @Output emits events to the parent","@Input is for services; @Output is for components","@Output receives data from the parent"],correctAnswer:1,explanation:"@Input() creates a one-way data binding from parent to child. @Output() creates an EventEmitter that sends data from child to parent via custom events."},{id:"ft-4",question:"What is the Angular change detection mechanism?",options:["A CSS detection system","A system that checks for data changes and updates the DOM accordingly","A security scanning mechanism","A build optimization tool"],correctAnswer:1,explanation:"Change detection traverses the component tree checking for data changes. Default strategy checks everything; OnPush only checks when inputs change or events fire."},{id:"ft-5",question:"What is the purpose of ngOnInit vs the constructor?",options:["They do the same thing","The constructor handles DI; ngOnInit handles initialization logic after inputs are set","ngOnInit runs before the constructor","The constructor should contain all initialization"],correctAnswer:1,explanation:"The constructor should only be used for DI. ngOnInit runs after Angular initializes input properties, making it the right place for initialization logic."},{id:"ft-6",question:"What is lazy loading and how is it configured?",options:["Loading CSS lazily","Loading modules on demand using loadComponent/loadChildren in route configuration","Slow rendering on purpose","Deferred API calls"],correctAnswer:1,explanation:"Lazy loading uses dynamic imports in route config (loadComponent: () => import(...)) to defer loading until the route is accessed, reducing initial bundle size."},{id:"ft-7",question:"What is the async pipe and why is it recommended?",options:["A pipe for async/await only","A pipe that subscribes to Observables and auto-unsubscribes on component destruction","A pipe for HTTP requests","A pipe that makes synchronous code async"],correctAnswer:1,explanation:"The async pipe subscribes to Observables/Promises in the template, displays emitted values, and automatically unsubscribes when the component is destroyed — preventing memory leaks."},{id:"ft-8",question:"What is the difference between switchMap, mergeMap, and concatMap?",options:["No difference","switchMap cancels previous; mergeMap runs concurrently; concatMap queues sequentially","mergeMap cancels previous","concatMap runs concurrently"],correctAnswer:1,explanation:"switchMap cancels the previous inner Observable on new emissions. mergeMap maintains all subscriptions concurrently. concatMap queues and processes them one at a time in order."},{id:"ft-9",question:"What is the purpose of route guards?",options:["To guard CSS routes","To control navigation by allowing, denying, or redirecting access to routes","To protect API endpoints","To guard database queries"],correctAnswer:1,explanation:"Route guards (canActivate, canDeactivate, resolve, canMatch) run before navigation to check conditions like authentication, permissions, or data availability."},{id:"ft-10",question:"What is Reactive Forms vs Template-Driven Forms?",options:["They are identical","Reactive: model-driven in TypeScript; Template-driven: directive-driven in templates","Template-driven is more powerful","Reactive only works with RxJS"],correctAnswer:1,explanation:"Reactive Forms define the form model in TypeScript (FormGroup, FormControl) for explicit control. Template-driven forms use ngModel directives for simpler two-way binding."},{id:"ft-11",question:"What is Angular Signals and how do they differ from RxJS?",options:["Signals replace RxJS completely","Signals provide synchronous fine-grained reactivity; RxJS handles async streams and complex operators","Signals are only for templates","RxJS is deprecated in favor of Signals"],correctAnswer:1,explanation:"Signals provide synchronous, fine-grained reactivity for UI state. RxJS handles complex async operations, streams, and operators. They complement each other."},{id:"ft-12",question:"What are HTTP interceptors used for?",options:["Intercepting CSS requests","Adding headers, handling errors, caching, and logging for all HTTP requests globally","Intercepting route changes","Intercepting form submissions"],correctAnswer:1,explanation:"Interceptors sit in the HTTP pipeline to add auth headers, handle errors globally, implement caching, log requests, and more — without modifying individual service calls."},{id:"ft-13",question:"What is content projection in Angular?",options:["Projecting 3D content","Using <ng-content> to let parent components pass content into child component templates","Projecting services","Projecting routes"],correctAnswer:1,explanation:"Content projection uses <ng-content> slots in child components, allowing parents to insert custom HTML/components into the child's template at designated locations."},{id:"ft-14",question:"What is the difference between ViewChild and ContentChild?",options:["No difference","ViewChild queries the component's own template; ContentChild queries projected (ng-content) elements","ContentChild is deprecated","ViewChild queries services"],correctAnswer:1,explanation:"ViewChild accesses elements defined in the component's own template. ContentChild accesses elements projected from the parent via <ng-content>."},{id:"ft-15",question:"What is the purpose of ChangeDetectionStrategy.OnPush?",options:["To push changes to the server","To optimize performance by only checking for changes when inputs change or events fire","To push CSS updates","To enable real-time updates"],correctAnswer:1,explanation:"OnPush limits change detection to run only when @Input references change, DOM events fire within the component, or the async pipe receives a new value."},{id:"ft-16",question:"What is NgRx and when should you use it?",options:["Always use it","A Redux-based state management library for complex apps with shared state across many components","A routing library","A testing framework"],correctAnswer:1,explanation:"NgRx provides centralized state management using Store, Actions, Reducers, and Effects. Best for complex apps where many components share and modify state."},{id:"ft-17",question:"What is TestBed and how does it help in testing?",options:["A physical testing device","Angular's testing utility that configures a test module for creating and testing components with DI","A bed for sleeping during tests","A database testing tool"],correctAnswer:1,explanation:"TestBed creates an isolated testing module with configurable providers, declarations, and imports, allowing you to test components and services with dependency injection."},{id:"ft-18",question:"What is AOT compilation and why is it used?",options:["Compiles at runtime for flexibility","Compiles templates at build time for faster startup, smaller bundles, and early error detection","Only compiles TypeScript","A testing compilation mode"],correctAnswer:1,explanation:"Ahead-of-Time compilation compiles Angular templates during the build process, resulting in faster rendering, smaller bundles, and compile-time template error detection."},{id:"ft-19",question:"What is the purpose of provideHttpClient() in standalone apps?",options:["Creates HTTP servers","Configures HttpClient for dependency injection without HttpClientModule","Provides HTTP interceptors only","Creates REST APIs"],correctAnswer:1,explanation:"provideHttpClient() is the standalone API for configuring Angular's HttpClient, replacing HttpClientModule. It supports withInterceptors() and withXsrfConfiguration()."},{id:"ft-20",question:"What is SSR and client hydration in Angular?",options:["Static site rendering","SSR renders HTML on the server; hydration attaches Angular to that DOM in the browser","Client-side only rendering","Caching mechanism"],correctAnswer:1,explanation:"Server-Side Rendering generates HTML on the server for fast initial load and SEO. Client hydration then attaches Angular's logic to the existing DOM without recreating it."},{id:"ft-21",question:"What is the @defer block in Angular 17+?",options:["A try-catch block","A template block that defers loading of content until a trigger condition like viewport visibility","A CSS defer block","A routing defer"],correctAnswer:1,explanation:"@defer lazily loads template sections based on triggers (on viewport, on idle, on interaction), with @placeholder, @loading, and @error fallback blocks."},{id:"ft-22",question:"What is the purpose of the inject() function?",options:["SQL injection","To retrieve a dependency from the Angular injector in constructor or functional contexts","To inject HTML into templates","To inject CSS styles"],correctAnswer:1,explanation:"inject() retrieves a dependency from Angular's DI system. It works in constructors, initial field assignments, and functional contexts like guards and interceptors."},{id:"ft-23",question:"How does Angular handle XSS protection?",options:["It doesn't","Angular automatically sanitizes all values bound in templates to prevent XSS attacks","It uses a WAF","It blocks all scripts"],correctAnswer:1,explanation:"Angular treats all template-bound values as untrusted and sanitizes them. Script tags, dangerous URLs, and unsafe HTML are stripped to prevent cross-site scripting."},{id:"ft-24",question:"What is the purpose of the trackBy function in *ngFor?",options:["Tracking user behavior","Providing identity for list items so Angular can efficiently reuse DOM elements","Tracking API calls","Tracking form changes"],correctAnswer:1,explanation:"trackBy gives each item a unique identity, allowing Angular to track which items changed, were added, or removed — reusing existing DOM elements for performance."},{id:"ft-25",question:"What is the difference between template-driven validation and reactive validation?",options:["No difference","Template uses directives (required, minlength); Reactive uses Validators class in TypeScript","Template is more powerful","Reactive only supports custom validators"],correctAnswer:1,explanation:"Template-driven validation uses HTML attributes (required, minlength). Reactive validation uses Validators.required, Validators.minLength() in TypeScript, enabling dynamic and testable validation."},{id:"ft-26",question:"What is the Angular animation trigger/state/transition model?",options:["CSS animations only","A declarative API where triggers define states and transitions define how to animate between them","jQuery animation model","SVG animations"],correctAnswer:1,explanation:"Angular animations define triggers (named animation targets), states (style snapshots), and transitions (how to animate between states using animate() and keyframes)."},{id:"ft-27",question:"What is the purpose of environment files in Angular?",options:["To set Node.js environment variables","To provide environment-specific configuration values swapped at build time","To configure the Angular CLI","To define CSS variables"],correctAnswer:1,explanation:"Environment files (environment.ts, environment.prod.ts) provide build-time configuration. Angular replaces the file based on the build target configuration."},{id:"ft-28",question:"What is the purpose of the effect() function with signals?",options:["To create visual effects","To perform side effects that automatically re-run when their tracked signals change","To handle errors","To create animations"],correctAnswer:1,explanation:"effect() creates a reactive side effect that tracks signal reads and re-executes when any tracked signal changes. Used for logging, storage sync, or analytics."},{id:"ft-29",question:"What is tree-shaking and how does Angular optimize for it?",options:["Removing DOM nodes",'Removing unused code from bundles; Angular enables it with providedIn: "root" and standalone components',"Shaking the component tree","A testing optimization"],correctAnswer:1,explanation:'Tree-shaking eliminates unused code during the build. providedIn: "root" makes services tree-shakable. Standalone components avoid module-level side effects.'},{id:"ft-30",question:"What is the new control flow syntax (@if, @for, @switch) in Angular 17+?",options:["JavaScript control flow statements","Built-in template syntax replacing *ngIf, *ngFor, *ngSwitch with better performance and type checking","CSS control flow","Server-side control flow"],correctAnswer:1,explanation:"The new control flow syntax (@if, @for, @switch) replaces structural directives with a more readable, performant, and type-safe template syntax built into the Angular compiler."}],fh=[{id:"lt-1",question:"What is Angular?",options:["A CSS framework","A platform for building web applications using TypeScript","A database engine","A Node.js runtime"],correctAnswer:1,explanation:"Angular is a platform and framework for building single-page client applications using TypeScript, maintained by Google."},{id:"lt-2",question:"What is a component in Angular?",options:["A CSS class","The basic building block of an Angular UI — a class with a template and metadata","A database table","A server module"],correctAnswer:1,explanation:"Components are the fundamental building blocks in Angular. Each component has a TypeScript class, an HTML template, and optional styles."},{id:"lt-3",question:"What decorator is used to define a component?",options:["@Injectable","@NgModule","@Component","@Directive"],correctAnswer:2,explanation:"@Component decorator marks a class as an Angular component, providing metadata like selector, template, and styles."},{id:"lt-4",question:"What is the purpose of NgModule?",options:["To define CSS modules","To organize application code into cohesive blocks of functionality","To create database modules","To compile TypeScript"],correctAnswer:1,explanation:"NgModule groups related components, directives, pipes, and services into cohesive units. Standalone components are an alternative in modern Angular."},{id:"lt-5",question:"What is a standalone component?",options:["A component without styles","A component that declares its own dependencies without needing an NgModule","A component without a template","A component that runs independently"],correctAnswer:1,explanation:"Standalone components set standalone: true and import their dependencies directly, eliminating the need for NgModule declarations."},{id:"lt-6",question:"What is interpolation in Angular templates?",options:["A CSS technique","Embedding expressions in the template using {{ expression }} syntax","A routing method","A testing technique"],correctAnswer:1,explanation:"Interpolation uses double curly braces {{ }} to render component property values or expressions in the template."},{id:"lt-7",question:"What is property binding in Angular?",options:["Binding CSS properties",'One-way binding from component to template using [property]="expression"',"Binding to route parameters","Binding to services"],correctAnswer:1,explanation:'Property binding uses [property]="expression" to set DOM element properties or component inputs from the component class.'},{id:"lt-8",question:"What is event binding in Angular?",options:["CSS event listeners",'Listening to template events using (event)="handler()" syntax',"Server-side events","Database triggers"],correctAnswer:1,explanation:'Event binding uses (event)="handler()" syntax to respond to user actions like clicks, key presses, and other DOM events.'},{id:"lt-9",question:"What is two-way binding in Angular?",options:["Binding between two components","Combining property and event binding using [(ngModel)]","Binding to two services","Binding two templates"],correctAnswer:1,explanation:"Two-way binding [(ngModel)] combines [ngModel] property binding and (ngModelChange) event binding, keeping the view and model in sync."},{id:"lt-10",question:"What is the purpose of @Input() decorator?",options:["To read user keyboard input","To allow a parent component to pass data to a child component","To input data into a database","To import modules"],correctAnswer:1,explanation:"@Input() marks a property as an input binding, allowing parent components to set its value through property binding."},{id:"lt-11",question:"What is the purpose of @Output() decorator?",options:["To write console output","To emit events from a child component to its parent","To output data to a file","To export modules"],correctAnswer:1,explanation:"@Output() marks an EventEmitter property that child components use to emit custom events to parent components."},{id:"lt-12",question:"What is a service in Angular?",options:["A web server","A class decorated with @Injectable used for business logic and data sharing","A CSS service worker","A database service"],correctAnswer:1,explanation:"Services are @Injectable classes that encapsulate reusable logic, data access, and shared state, provided via dependency injection."},{id:"lt-13",question:'What does @Injectable({ providedIn: "root" }) do?',options:["Makes the class available globally in CSS","Registers the service as a singleton available application-wide","Injects CSS into the root component","Creates a root module"],correctAnswer:1,explanation:'providedIn: "root" registers the service as a singleton in the root injector, making it available throughout the application and tree-shakable.'},{id:"lt-14",question:"What is the Angular Router?",options:["A hardware router","A module that maps URL paths to components for navigation","A CSS grid system","A database query router"],correctAnswer:1,explanation:"The Angular Router maps URL paths to components, enabling navigation between views without full page reloads."},{id:"lt-15",question:"What is a route guard?",options:["A security firewall","A function that controls navigation by allowing or denying access to routes","A CSS guard clause","A database constraint"],correctAnswer:1,explanation:"Route guards (CanActivate, CanDeactivate, etc.) control navigation by checking conditions before allowing access to routes."},{id:"lt-16",question:"What is lazy loading in Angular?",options:["Loading CSS lazily","Loading feature modules on demand when their route is accessed","Slow rendering","Loading data from cache"],correctAnswer:1,explanation:"Lazy loading defers loading of feature modules until their route is navigated to, reducing the initial bundle size."},{id:"lt-17",question:"What is a directive in Angular?",options:["A CSS directive","A class that modifies the behavior or appearance of DOM elements","A compiler directive","A server command"],correctAnswer:1,explanation:"Directives are classes that add behavior to DOM elements. Angular has structural (*ngIf, *ngFor), attribute, and component directives."},{id:"lt-18",question:"What is the difference between *ngIf and @if?",options:["No difference","*ngIf is the traditional directive syntax; @if is the new control flow syntax in Angular 17+","*ngIf is newer","@if only works in services"],correctAnswer:1,explanation:"*ngIf is the structural directive syntax. @if is the new built-in control flow syntax in Angular 17+ that is more performant and readable."},{id:"lt-19",question:"What is a pipe in Angular?",options:["A Unix pipe","A class that transforms data for display in templates using the | syntax","A data pipeline","A logging pipe"],correctAnswer:1,explanation:"Pipes transform data in templates. Built-in pipes include DatePipe, CurrencyPipe, UpperCasePipe. Custom pipes implement PipeTransform."},{id:"lt-20",question:"What is RxJS?",options:["A CSS library","A library for reactive programming using Observables","A testing framework","A database driver"],correctAnswer:1,explanation:"RxJS (Reactive Extensions for JavaScript) provides Observables and operators for composing asynchronous and event-based programs."},{id:"lt-21",question:"What is an Observable?",options:["A design pattern","A lazy push-based collection representing a stream of values over time","A type of array","A CSS animation"],correctAnswer:1,explanation:"Observables represent a stream of values delivered over time. They are lazy — they don't emit until subscribed to."},{id:"lt-22",question:"What is the difference between Observable and Promise?",options:["No difference","Observables are lazy and can emit multiple values; Promises are eager and resolve once","Promises can emit multiple values","Observables cannot be cancelled"],correctAnswer:1,explanation:"Observables are lazy (start on subscribe), can emit multiple values, and are cancellable. Promises are eager and resolve once."},{id:"lt-23",question:"What does the subscribe() method do?",options:["Subscribes to a newsletter","Activates an Observable and registers handlers for emitted values, errors, and completion","Creates a new Observable","Pauses an Observable"],correctAnswer:1,explanation:"subscribe() activates an Observable and provides callback functions for next values, errors, and the completion signal."},{id:"lt-24",question:"What is the async pipe?",options:["A pipe for async/await","A template pipe that subscribes to an Observable and automatically unsubscribes","An HTTP pipe","A logging pipe"],correctAnswer:1,explanation:"The async pipe subscribes to an Observable or Promise in the template, displays emitted values, and automatically unsubscribes on destroy."},{id:"lt-25",question:"What is HttpClient in Angular?",options:["A native browser API","An Angular service for making HTTP requests that returns Observables","A Node.js module","A WebSocket client"],correctAnswer:1,explanation:"HttpClient is Angular's built-in service for communicating with backend APIs. Methods like get(), post() return Observables."},{id:"lt-26",question:"What is an HTTP interceptor?",options:["A firewall","A class that intercepts HTTP requests/responses for cross-cutting concerns","A proxy server","A testing tool"],correctAnswer:1,explanation:"Interceptors sit between HttpClient and the server, allowing you to modify requests (add auth headers) or handle responses (error handling) globally."},{id:"lt-27",question:"What is Reactive Forms in Angular?",options:["Forms that react to clicks","A model-driven approach to building forms using FormControl, FormGroup, and FormArray","Forms with CSS animations","Server-side forms"],correctAnswer:1,explanation:"Reactive Forms provide a model-driven approach where form controls are created in the component class, enabling programmatic control and testing."},{id:"lt-28",question:"What is the difference between Reactive Forms and Template-Driven Forms?",options:["No difference","Reactive Forms are model-driven with explicit control; Template-Driven Forms use directives like ngModel","Template-driven is more powerful","Reactive forms only work with RxJS"],correctAnswer:1,explanation:"Reactive Forms define the form model in TypeScript (explicit, testable). Template-driven forms use ngModel directives (simpler but less control)."},{id:"lt-29",question:"What is FormGroup?",options:["A CSS class group","A collection of FormControls that tracks the value and validity of the group","A group of templates","A module group"],correctAnswer:1,explanation:"FormGroup groups multiple FormControls. It tracks the aggregate value and validity status of all child controls."},{id:"lt-30",question:"What is the purpose of Validators in Angular?",options:["To validate CSS","To provide built-in and custom validation rules for form controls","To validate routes","To validate services"],correctAnswer:1,explanation:"Validators (Validators.required, Validators.minLength, etc.) enforce validation rules on form controls, with support for custom validators."},{id:"lt-31",question:"What is Angular Signals?",options:["Signal handling in Node.js","A reactive primitive in Angular for tracking state changes","WebSocket signals","Event signals"],correctAnswer:1,explanation:"Signals are a reactive primitive introduced in Angular 16+ for fine-grained reactivity. They track dependencies and update only affected parts of the UI."},{id:"lt-32",question:"What is the difference between signal() and computed()?",options:["No difference","signal() holds a writable value; computed() derives a read-only value from other signals","computed() is writable","signal() is read-only"],correctAnswer:1,explanation:"signal() creates a writable reactive value. computed() creates a derived, read-only value that automatically updates when its dependencies change."},{id:"lt-33",question:"What is the effect() function?",options:["A CSS effect","A function that runs side effects when tracked signals change","An animation function","A testing utility"],correctAnswer:1,explanation:"effect() creates a reactive side effect that re-runs whenever any signal read inside it changes. Used for logging, analytics, or syncing."},{id:"lt-34",question:"What is the OnInit lifecycle hook?",options:["Called when CSS initializes","Called once after Angular initializes the component's inputs","Called when the server starts","Called when the module loads"],correctAnswer:1,explanation:"ngOnInit is called once after Angular sets up the component's inputs. Use it for initialization logic that depends on input properties."},{id:"lt-35",question:"What is the OnDestroy lifecycle hook?",options:["Called when CSS is unloaded","Called just before Angular destroys the component — used for cleanup","Called when the server stops","Called when an error occurs"],correctAnswer:1,explanation:"ngOnDestroy is called before Angular destroys the component. Use it to unsubscribe from Observables and clean up resources."},{id:"lt-36",question:"What is dependency injection in Angular?",options:["Injecting SQL queries","A design pattern where dependencies are provided by the framework rather than created manually","Injecting CSS styles","Importing modules"],correctAnswer:1,explanation:"Angular's DI system provides instances of services to components and other services, promoting loose coupling and testability."},{id:"lt-37",question:"What is the inject() function?",options:["A security vulnerability","A function to inject dependencies inside constructors, fields, or functional contexts","A SQL function","A template function"],correctAnswer:1,explanation:"inject() retrieves a dependency from the injector. It works in constructors, initial field assignments, and functional guards/interceptors."},{id:"lt-38",question:"What is NgRx?",options:["A CSS library","A state management library for Angular based on Redux and RxJS","A router extension","A testing framework"],correctAnswer:1,explanation:"NgRx provides reactive state management using a Store (single source of truth), Actions, Reducers, and Effects (for side effects)."},{id:"lt-39",question:"What is a selector in NgRx?",options:["A CSS selector","A pure function that extracts specific slices of state from the Store","A DOM selector","A route selector"],correctAnswer:1,explanation:"Selectors are memoized pure functions that select and derive specific pieces of state from the NgRx Store."},{id:"lt-40",question:"What is TestBed in Angular?",options:["A physical test bed","Angular's primary testing utility for configuring and creating component test environments","A CSS testing tool","A server testing framework"],correctAnswer:1,explanation:"TestBed configures a testing module to create components and services in an isolated test environment with dependency injection."},{id:"lt-41",question:"What is the purpose of ComponentFixture?",options:["To fix broken components","To provide access to a component instance and its DOM for testing","To configure CSS fixtures","To mock HTTP requests"],correctAnswer:1,explanation:"ComponentFixture wraps a component instance, providing access to the component, its template (DebugElement), and change detection."},{id:"lt-42",question:"What is the ChangeDetectionStrategy.OnPush?",options:["Pushes changes to the server","Limits change detection to only run when inputs change or events fire","Pushes CSS updates","A deployment strategy"],correctAnswer:1,explanation:"OnPush change detection only runs when @Input references change, events fire within the component, or the async pipe receives a value."},{id:"lt-43",question:"What is trackBy in *ngFor?",options:["A debugging tool","A function that helps Angular track list items efficiently to minimize DOM updates","A CSS tracking feature","A logging utility"],correctAnswer:1,explanation:"trackBy provides a unique identity for each item in *ngFor, allowing Angular to reuse existing DOM elements instead of recreating them."},{id:"lt-44",question:"What is the Angular CLI?",options:["A CSS compiler","A command-line tool for creating, building, and managing Angular projects","A database CLI","A text editor"],correctAnswer:1,explanation:"The Angular CLI (ng) scaffolds projects, generates components/services, runs dev servers, builds for production, and runs tests."},{id:"lt-45",question:"What is the purpose of angular.json?",options:["To configure JavaScript","The workspace configuration file that defines project settings, build options, and architect targets","To configure CSS","To define routes"],correctAnswer:1,explanation:"angular.json configures project settings including build targets, file replacements, budgets, and architect configurations."},{id:"lt-46",question:"What is AOT compilation?",options:["A runtime compiler","Ahead-of-Time compilation that compiles templates at build time for faster startup","A CSS preprocessor","A testing compiler"],correctAnswer:1,explanation:"AOT compiles Angular templates and TypeScript during the build phase, resulting in faster rendering and smaller bundles."},{id:"lt-47",question:"What is the difference between ViewChild and ContentChild?",options:["No difference","ViewChild queries the component's own template; ContentChild queries projected content","ContentChild is deprecated","ViewChild queries services"],correctAnswer:1,explanation:"ViewChild queries elements in the component's own template. ContentChild queries elements projected via <ng-content> from the parent."},{id:"lt-48",question:"What is content projection (ng-content)?",options:["Projecting images","A way for a parent component to insert content into a child component's template","A CSS projection","A server-side technique"],correctAnswer:1,explanation:"Content projection uses <ng-content> to let parent components pass HTML/components into a child component's template slots."},{id:"lt-49",question:"What is the Angular animation system based on?",options:["CSS-only animations","The Web Animations API with a declarative DSL using trigger, state, transition, and animate","jQuery animations","SVG animations"],correctAnswer:1,explanation:"Angular animations use a declarative API built on the Web Animations API, defining triggers, states, transitions, and keyframes."},{id:"lt-50",question:"What is SSR in Angular?",options:["Server-Side Rendering — generating HTML on the server for better SEO and performance","Static Site Rendering","Server-Side Routing","Single Source Rendering"],correctAnswer:0,explanation:"Server-Side Rendering generates HTML on the server, giving users faster initial page loads and search engines content to crawl."},{id:"lt-51",question:"What is hydration in Angular SSR?",options:["Adding water to the DOM","The process where Angular takes control of server-rendered DOM in the browser","A caching mechanism","A build optimization"],correctAnswer:1,explanation:"Hydration attaches event listeners and Angular logic to the static HTML rendered by the server, making it interactive."},{id:"lt-52",question:"What is the switchMap operator?",options:["Switches between CSS maps","Cancels previous inner Observables and switches to a new one on each emission","Switches routes","Maps arrays"],correctAnswer:1,explanation:"switchMap maps each source emission to an inner Observable, cancelling the previous subscription. Ideal for search-as-you-type."},{id:"lt-53",question:"What is the difference between mergeMap and switchMap?",options:["No difference","switchMap cancels previous inner Observables; mergeMap runs them all concurrently","mergeMap cancels previous","switchMap is synchronous"],correctAnswer:1,explanation:"switchMap unsubscribes from the previous inner Observable on new emissions. mergeMap maintains all inner subscriptions concurrently."},{id:"lt-54",question:"What is a custom pipe in Angular?",options:["A plumber's tool","A class implementing PipeTransform that defines a custom data transformation for templates","A CSS filter","A router pipe"],correctAnswer:1,explanation:"Custom pipes implement the PipeTransform interface with a transform() method, creating reusable data transformations for templates."},{id:"lt-55",question:"What is the environment files pattern in Angular?",options:["Setting up Node environment","Using separate environment.ts files for dev/prod with different configuration values","Environment variables on the server","CSS environment queries"],correctAnswer:1,explanation:"Angular supports environment files (environment.ts, environment.prod.ts) that are swapped at build time for environment-specific configuration."},{id:"lt-56",question:"What is the purpose of the resolve guard?",options:["To resolve CSS conflicts","To pre-fetch data before a route is activated","To resolve module conflicts","To resolve service conflicts"],correctAnswer:1,explanation:"Resolve guards fetch data before activating a route, ensuring the component has the required data before rendering."},{id:"lt-57",question:"What is the purpose of the canDeactivate guard?",options:["To deactivate a service","To prevent navigation away from a route, e.g., for unsaved changes confirmation","To deactivate a module","To deactivate animations"],correctAnswer:1,explanation:'canDeactivate guards prevent leaving a route until conditions are met, commonly used for "unsaved changes" dialogs.'},{id:"lt-58",question:"What is tree-shaking?",options:["Shaking a tree data structure","A build optimization that removes unused code from the final bundle","A sorting algorithm","A DOM manipulation technique"],correctAnswer:1,explanation:'Tree-shaking removes unreferenced code during the build process, reducing the final bundle size. providedIn: "root" enables it for services.'},{id:"lt-59",question:"What does the @defer block do in Angular 17+?",options:["Defers CSS loading","Defers the loading and rendering of template blocks until a trigger condition","Defers API calls","Defers service initialization"],correctAnswer:1,explanation:"@defer lazily loads parts of a template based on triggers like viewport visibility, idle time, or interaction, improving initial load performance."},{id:"lt-60",question:"What is the purpose of provideRouter() in Angular?",options:["Provides CSS routing","Configures the Angular Router for standalone applications without RouterModule","Provides server routing","Provides API routing"],correctAnswer:1,explanation:"provideRouter() is the standalone API for configuring routing, replacing RouterModule.forRoot() in module-based apps."}];function Il(e=30){const t=[...fh];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t.slice(0,e).map((n,r)=>({...n,id:`lt-r-${r}`}))}const K={title:"Angular Mastery",description:"A comprehensive course covering everything from TypeScript fundamentals to Angular components, services, routing, RxJS, state management, testing, and deployment best practices.",modules:[Kf,Jf,Xf,Yf,Zf,eh,th,nh,rh,oh,ih,sh,ah,lh,uh,ch,dh,ph],finalTest:mh};function hh(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}function gh({onRandomQuestion:e,onQuickLine:t,isOpen:n,onClose:r}){const{progress:o}=kt(),i=s=>{const a=K.modules.find(u=>u.id===s);if(!a)return 0;const l=a.topics.filter(u=>{var f;return(f=o.topicProgress[u.id])==null?void 0:f.completed}).length;return Math.round(l/a.topics.length*100)};return c.jsxs("aside",{className:`sidebar ${n?"open":""}`,children:[c.jsx("div",{className:"sidebar-header",children:c.jsxs("h2",{children:["🔺 ",K.title]})}),c.jsxs("nav",{className:"sidebar-nav",children:[c.jsx(Dr,{to:"/",end:!0,className:"nav-item",onClick:r,children:"🏠 Dashboard"}),c.jsxs(Dr,{to:"/level-test",className:"nav-item",onClick:r,children:["📋 Level Evaluation",o.levelTestResult&&c.jsx("span",{className:"badge",children:hh(Math.round(o.levelTestResult.score/o.levelTestResult.total*100))})]}),e&&c.jsx("button",{className:"nav-item random-q-btn",onClick:()=>{e(),r()},children:"🎲 Random Question"}),t&&c.jsx("button",{className:"nav-item random-q-btn",onClick:()=>{t(),r()},children:"⚡ Quick Line"}),c.jsx("div",{className:"nav-section",children:c.jsx("span",{className:"nav-section-title",children:"Modules"})}),K.modules.map((s,a)=>c.jsx("div",{className:"module-nav",children:c.jsxs(Dr,{to:`/module/${s.id}`,className:"nav-item module-link",onClick:r,children:[c.jsxs("span",{children:[a+1,". ",s.title]}),c.jsxs("span",{className:"progress-badge",children:[i(s.id),"%"]})]})},s.id)),c.jsx("div",{className:"nav-section",children:c.jsx("span",{className:"nav-section-title",children:"Assessment"})}),c.jsxs(Dr,{to:"/final-test",className:"nav-item",onClick:r,children:["🏆 Final Test",o.finalTestResult&&c.jsxs("span",{className:"badge",children:[o.finalTestResult.score,"/",o.finalTestResult.total]})]})]})]})}function vh(){const e=[];for(const t of K.modules)e.push(...t.test);return e.push(...K.finalTest),e}function yh(){const e=new Map;for(const t of K.modules)for(const n of t.test)e.set(n.id,{moduleId:t.id,moduleTitle:t.title});return e}const El=vh(),Bt=yh();function Pl(){return El[Math.floor(Math.random()*El.length)]}function wh({onClose:e}){const{dispatch:t}=kt(),[n,r]=C.useState(Pl),[o,i]=C.useState(null),[s,a]=C.useState(!1),[l,u]=C.useState(0),[f,m]=C.useState(!1),[g,y]=C.useState(0),v=C.useCallback(()=>{r(Pl()),i(null),a(!1),m(!1)},[]),x=S=>{if(!s)if(i(S),a(!0),S===n.correctAnswer){const p=l+1;u(p),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!0,streak:p}})}else y(l),m(!0),u(0),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!1,streak:0}})};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[c.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),c.jsx("h3",{className:"rq-question",children:n.question}),!f&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"rq-options",children:n.options.map((S,p)=>{let d="option";return o===p&&(d+=" selected"),s&&(p===n.correctAnswer?d+=" correct":o===p&&(d+=" incorrect")),c.jsx("button",{className:d,onClick:()=>x(p),children:S},p)})}),s&&o===n.correctAnswer&&c.jsxs(c.Fragment,{children:[c.jsx("p",{className:"rq-explanation",children:n.explanation}),Bt.has(n.id)&&c.jsxs("a",{className:"module-ref-link",href:`#/module/${Bt.get(n.id).moduleId}`,onClick:e,children:["📖 Learn more: ",Bt.get(n.id).moduleTitle]})]}),s&&o===n.correctAnswer&&c.jsxs("div",{className:"rq-actions",children:[c.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",l]}),c.jsx("button",{className:"btn btn-primary",onClick:v,children:"Next Random Question →"})]})]}),f&&c.jsxs("div",{className:"rq-streak-end",children:[c.jsxs("p",{children:["OK. This one is incorrect. However, that was ",c.jsx("strong",{children:g})," correct answer",g!==1?"s":""," in a row. Congrats!"]}),c.jsx("p",{className:"rq-explanation",children:n.explanation}),Bt.has(n.id)&&c.jsxs("a",{className:"module-ref-link",href:`#/module/${Bt.get(n.id).moduleId}`,onClick:e,children:["📖 Learn more: ",Bt.get(n.id).moduleTitle]}),c.jsx("button",{className:"btn btn-primary",onClick:v,children:"Continue →"})]})]})})}const Ol=[{id:"ql-1",prompt:'Define a standalone component with a selector "app-hello".',codeBefore:[],codeAfter:["export class HelloComponent {}"],answer:"@Component({ selector: 'app-hello', standalone: true, template: '<h1>Hello</h1>' })",hint:"Use @Component with selector, standalone, and template properties.",moduleId:"mod-1",explanation:"@Component decorator defines metadata for an Angular component including its selector and template."},{id:"ql-2",prompt:"Declare an interface for a User with id (number) and name (string).",codeBefore:[],codeAfter:['const user: User = { id: 1, name: "Alice" };'],answer:"export interface User { id: number; name: string; }",hint:"Use the interface keyword with typed properties.",moduleId:"mod-1",explanation:"TypeScript interfaces define the shape of objects for type checking without generating any runtime code."},{id:"ql-3",prompt:"Use string interpolation in a template to display the user's name.",codeBefore:["<div>"],codeAfter:["</div>"],answer:"  <p>Hello, {{ user.name }}!</p>",hint:"Angular interpolation uses double curly braces: {{ expression }}.",moduleId:"mod-2",explanation:"Interpolation {{ }} evaluates the expression and renders the result as text inside the template."},{id:"ql-4",prompt:"Use property binding to set the disabled attribute on a button.",codeBefore:[],codeAfter:["  Submit","</button>"],answer:'<button [disabled]="isLoading">',hint:'Property binding uses [property]="expression" syntax.',moduleId:"mod-2",explanation:'Property binding [disabled]="expr" sets the DOM property to the value of the component expression.'},{id:"ql-5",prompt:"Use event binding to call a method when a button is clicked.",codeBefore:[],codeAfter:[],answer:'<button (click)="onSave()">Save</button>',hint:'Event binding uses (event)="handler()" syntax.',moduleId:"mod-2",explanation:'Event binding (click)="handler()" listens for DOM events and calls the specified component method.'},{id:"ql-6",prompt:"Use the new @if control flow to conditionally show an element.",codeBefore:[],codeAfter:["  <p>Welcome, {{ user.name }}!</p>","}"],answer:"@if (user) {",hint:"The new @if block replaces *ngIf in Angular 17+.",moduleId:"mod-2",explanation:"@if is the new built-in control flow that checks a condition and renders content conditionally."},{id:"ql-7",prompt:"Use @for to loop through a list of items with a track expression.",codeBefore:[],codeAfter:["  <li>{{ item.name }}</li>","}"],answer:"@for (item of items; track item.id) {",hint:"@for requires a track expression for efficient list rendering.",moduleId:"mod-2",explanation:"@for replaces *ngFor and requires a track expression that provides unique identity for each item."},{id:"ql-8",prompt:"Declare an Input property for a title string.",codeBefore:["export class CardComponent {"],codeAfter:["}"],answer:'  @Input() title = "";',hint:"@Input() marks a property that can be set by the parent component.",moduleId:"mod-3",explanation:"@Input() creates a one-way data binding from parent to child, allowing external configuration of the component."},{id:"ql-9",prompt:"Declare an Output event emitter for a close event.",codeBefore:["export class ModalComponent {"],codeAfter:["}"],answer:"  @Output() close = new EventEmitter<void>();",hint:"@Output() with EventEmitter sends events to the parent.",moduleId:"mod-3",explanation:'@Output() creates a custom event that the child can emit and the parent can listen to with (close)="handler()".'},{id:"ql-10",prompt:"Emit an event from a child component when a button is clicked.",codeBefore:["@Output() save = new EventEmitter<string>();","","onSave() {"],codeAfter:["}"],answer:"  this.save.emit(this.data);",hint:"Use .emit(value) on the EventEmitter to send data upward.",moduleId:"mod-3",explanation:"emit() dispatches the custom event with an optional payload that the parent receives in the event handler."},{id:"ql-11",prompt:"Create a service that is provided at the root level.",codeBefore:[],codeAfter:["export class UserService {",'  getUsers() { return this.http.get<User[]>("/api/users"); }',"}"],answer:"@Injectable({ providedIn: 'root' })",hint:'providedIn: "root" makes the service a singleton available app-wide.',moduleId:"mod-4",explanation:'providedIn: "root" registers the service in the root injector as a singleton, making it tree-shakable.'},{id:"ql-12",prompt:"Inject a service using the inject() function.",codeBefore:["export class UserComponent {"],codeAfter:["}"],answer:"  private userService = inject(UserService);",hint:"inject() retrieves a dependency from the Angular injector.",moduleId:"mod-4",explanation:"The inject() function is the modern way to inject dependencies, usable in constructors and field initializers."},{id:"ql-13",prompt:'Define a lazy-loaded route for the "admin" path.',codeBefore:["export const routes: Routes = ["],codeAfter:["];"],answer:"  { path: 'admin', loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent) },",hint:"Use loadComponent with a dynamic import for lazy loading.",moduleId:"mod-5",explanation:"loadComponent with a dynamic import() defers loading the component's code until the route is accessed."},{id:"ql-14",prompt:"Read a route parameter in a component.",codeBefore:["export class UserDetailComponent {","  private route = inject(ActivatedRoute);"],codeAfter:["  }","}"],answer:"  id = this.route.snapshot.paramMap.get('id');",hint:"ActivatedRoute.snapshot.paramMap.get() reads route parameters.",moduleId:"mod-5",explanation:"ActivatedRoute provides access to route parameters. snapshot gives a one-time read; paramMap observable provides updates."},{id:"ql-15",prompt:"Create a FormGroup with name (required) and email (required, email) controls.",codeBefore:["export class SignupComponent {"],codeAfter:["}"],answer:"  form = new FormGroup({ name: new FormControl('', Validators.required), email: new FormControl('', [Validators.required, Validators.email]) });",hint:"new FormGroup({ key: new FormControl(default, validators) }).",moduleId:"mod-6",explanation:"FormGroup aggregates FormControls. Each control has an initial value and optional validators."},{id:"ql-16",prompt:"Display a validation error message in a template.",codeBefore:[],codeAfter:[],answer:"@if (form.controls.email.hasError('required')) { <span>Email is required</span> }",hint:"Use control.hasError('validatorName') to check specific errors.",moduleId:"mod-6",explanation:"hasError() checks if a specific validation error exists on the control, enabling targeted error messages."},{id:"ql-17",prompt:"Use the async pipe to subscribe to an Observable in a template.",codeBefore:[],codeAfter:["  <li>{{ user.name }}</li>","}"],answer:"@for (user of users$ | async; track user.id) {",hint:"The | async pipe subscribes to an Observable and auto-unsubscribes.",moduleId:"mod-7",explanation:"The async pipe handles subscribing and unsubscribing automatically, preventing memory leaks."},{id:"ql-18",prompt:"Use switchMap to cancel previous search requests.",codeBefore:["this.searchControl.valueChanges.pipe(","  debounceTime(300),"],codeAfter:[");"],answer:"  switchMap(term => this.searchService.search(term))",hint:"switchMap cancels the previous inner Observable on each new emission.",moduleId:"mod-7",explanation:"switchMap is ideal for search-as-you-type: it cancels the previous HTTP request when a new search term arrives."},{id:"ql-19",prompt:"Create an Observable using the of() function.",codeBefore:['import { of } from "rxjs";'],codeAfter:["numbers$.subscribe(n => console.log(n)); // 1, 2, 3"],answer:"const numbers$ = of(1, 2, 3);",hint:"of() creates an Observable from a set of values.",moduleId:"mod-7",explanation:"of() creates a synchronous Observable that emits each provided value and then completes."},{id:"ql-20",prompt:"Make a GET request using HttpClient.",codeBefore:["export class ProductService {","  private http = inject(HttpClient);"],codeAfter:["  }","}"],answer:"  getProducts() { return this.http.get<Product[]>('/api/products'); }",hint:"this.http.get<T>(url) returns an Observable<T>.",moduleId:"mod-8",explanation:"HttpClient.get<T>() returns a typed Observable. The request fires only when subscribed to."},{id:"ql-21",prompt:"Create a functional HTTP interceptor that adds an auth header.",codeBefore:["export const authInterceptor: HttpInterceptorFn = (req, next) => {"],codeAfter:["  return next(cloned);","};"],answer:"  const cloned = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });",hint:"Clone the request and set headers using req.clone().",moduleId:"mod-8",explanation:"HTTP requests are immutable. req.clone() creates a modified copy with the new auth header."},{id:"ql-22",prompt:"Use the date pipe to format a date in a template.",codeBefore:[],codeAfter:[],answer:"<p>{{ createdAt | date:'mediumDate' }}</p>",hint:"The date pipe uses | date:'format' syntax.",moduleId:"mod-9",explanation:"The date pipe formats Date values. 'mediumDate' outputs like 'Sep 15, 2024'."},{id:"ql-23",prompt:"Create a custom pipe that reverses a string.",codeBefore:["@Pipe({ name: 'reverse', standalone: true })"],codeAfter:["  transform(value: string): string {",'    return value.split("").reverse().join("");',"  }","}"],answer:"export class ReversePipe implements PipeTransform {",hint:"Custom pipes implement the PipeTransform interface.",moduleId:"mod-9",explanation:"Custom pipes implement PipeTransform with a transform() method, creating reusable template transformations."},{id:"ql-24",prompt:"Create a writable signal with an initial value of 0.",codeBefore:['import { signal } from "@angular/core";'],codeAfter:["count.set(5);"],answer:"const count = signal(0);",hint:"signal(initialValue) creates a writable reactive signal.",moduleId:"mod-10",explanation:"signal() creates a reactive value that notifies dependents when changed via .set(), .update(), or .mutate()."},{id:"ql-25",prompt:"Create a computed signal that doubles the count.",codeBefore:["const count = signal(5);"],codeAfter:["console.log(doubled()); // 10"],answer:"const doubled = computed(() => count() * 2);",hint:"computed() derives a read-only signal from other signals.",moduleId:"mod-10",explanation:"computed() creates a derived signal that automatically recalculates when its dependencies change."},{id:"ql-26",prompt:"Implement OnInit to fetch data when the component initializes.",codeBefore:["export class UserListComponent implements OnInit {","  private userService = inject(UserService);","  users: User[] = [];"],codeAfter:["  }","}"],answer:"  ngOnInit() { this.userService.getUsers().subscribe(u => this.users = u);",hint:"ngOnInit runs after Angular initializes the component.",moduleId:"mod-11",explanation:"ngOnInit is the standard lifecycle hook for initialization logic that depends on input properties being set."},{id:"ql-27",prompt:"Implement OnDestroy to unsubscribe from an Observable.",codeBefore:["private sub!: Subscription;"],codeAfter:["}"],answer:"ngOnDestroy() { this.sub.unsubscribe(); }",hint:"ngOnDestroy is called before Angular destroys the component.",moduleId:"mod-11",explanation:"ngOnDestroy is used for cleanup — unsubscribing Observables, removing event listeners, and releasing resources."},{id:"ql-28",prompt:"Configure TestBed for a component test.",codeBefore:["beforeEach(async () => {"],codeAfter:["  fixture = TestBed.createComponent(UserComponent);","});"],answer:"  await TestBed.configureTestingModule({ imports: [UserComponent] }).compileComponents();",hint:"TestBed.configureTestingModule() sets up the test module.",moduleId:"mod-14",explanation:"configureTestingModule creates an isolated testing module. Standalone components go in imports, not declarations."},{id:"ql-29",prompt:"Write a service test that verifies an HTTP GET call.",codeBefore:['it("should fetch users", () => {',"  service.getUsers().subscribe(users => {","    expect(users.length).toBe(2);","  });"],codeAfter:["  req.flush([{ id: 1 }, { id: 2 }]);","});"],answer:"  const req = httpMock.expectOne('/api/users');",hint:"HttpTestingController.expectOne() verifies and captures HTTP requests.",moduleId:"mod-14",explanation:"expectOne() asserts that exactly one request was made to the given URL and returns a handle to flush a response."},{id:"ql-30",prompt:"Set the change detection strategy to OnPush.",codeBefore:["@Component({","  selector: 'app-fast',","  template: '<p>{{ data }}</p>',"],codeAfter:["})","export class FastComponent {",'  @Input() data = "";',"}"],answer:"  changeDetection: ChangeDetectionStrategy.OnPush,",hint:"OnPush limits change detection to input changes and events.",moduleId:"mod-15",explanation:"OnPush change detection skips the component unless its @Input references change, improving performance."}];function Nl(){return Ol[Math.floor(Math.random()*Ol.length)]}function xh({onClose:e}){var h,w;const{dispatch:t}=kt(),[n,r]=C.useState(Nl),[o,i]=C.useState(""),[s,a]=C.useState(null),[l,u]=C.useState(!1),[f,m]=C.useState(0),[g,y]=C.useState(!1),[v,x]=C.useState(0),S=C.useCallback(()=>{r(Nl()),i(""),a(null),u(!1),y(!1)},[]),p=()=>{if(s)return;const A=o.trim();if(A)if(A.replace(/\s+/g,"")===n.answer.trim().replace(/\s+/g,"")){a("correct");const T=f+1;m(T),t({type:"RECORD_QUICK_LINE",payload:{correct:!0,streak:T}})}else a("incorrect"),x(f),y(!0),m(0),t({type:"RECORD_QUICK_LINE",payload:{correct:!1,streak:0}})},d=A=>{A.key==="Enter"&&p()};return c.jsx("div",{className:"modal-backdrop",onClick:e,children:c.jsxs("div",{className:"modal-content ql-modal",onClick:A=>A.stopPropagation(),children:[c.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),c.jsx("h3",{className:"ql-prompt",children:n.prompt}),!g&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"ql-code-block",children:[n.codeBefore.map((A,T)=>c.jsx("div",{className:"ql-code-line",children:A||" "},"b"+T)),c.jsxs("div",{className:"ql-code-input-row",children:[c.jsx("span",{className:"ql-blank-marker",children:"→"}),c.jsx("input",{className:"ql-input"+(s==="correct"?" correct":s==="incorrect"?" incorrect":""),value:o,onChange:A=>i(A.target.value),onKeyDown:d,placeholder:"Type your one line here...",disabled:s!==null,autoFocus:!0})]}),n.codeAfter.map((A,T)=>c.jsx("div",{className:"ql-code-line",children:A||" "},"a"+T))]}),!s&&c.jsxs("div",{className:"ql-actions",children:[!l&&c.jsx("button",{className:"btn btn-secondary",onClick:()=>u(!0),children:"💡 Hint"}),c.jsx("button",{className:"btn btn-primary",onClick:p,children:"Check ✓"})]}),l&&!s&&c.jsxs("p",{className:"ql-hint",children:["💡 ",n.hint]}),s==="correct"&&c.jsxs("div",{className:"ql-result correct",children:[c.jsx("p",{children:"✅ Correct!"}),c.jsx("p",{className:"rq-explanation",children:n.explanation}),c.jsxs("a",{className:"module-ref-link",href:`#/module/${n.moduleId}`,onClick:e,children:["📖 Learn more: ",(h=K.modules.find(A=>A.id===n.moduleId))==null?void 0:h.title]}),c.jsxs("div",{className:"ql-actions",children:[c.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",f]}),c.jsx("button",{className:"btn btn-primary",onClick:S,children:"Next Quick Line →"})]})]})]}),g&&c.jsxs("div",{className:"ql-streak-end",children:[c.jsx("p",{children:"❌ Not quite. The correct line was:"}),c.jsx("div",{className:"ql-answer-reveal",children:c.jsx("code",{children:n.answer})}),c.jsx("p",{className:"rq-explanation",children:n.explanation}),c.jsxs("a",{className:"module-ref-link",href:`#/module/${n.moduleId}`,onClick:e,children:["📖 Learn more: ",(w=K.modules.find(A=>A.id===n.moduleId))==null?void 0:w.title]}),c.jsxs("p",{className:"ql-streak-msg",children:["That was ",c.jsx("strong",{children:v})," correct answer",v!==1?"s":""," in a row. Keep going!"]}),c.jsx("button",{className:"btn btn-primary",onClick:S,children:"Continue →"})]})]})})}function Ch(){const{progress:e,dispatch:t}=kt(),n=K.modules.reduce((y,v)=>y+v.topics.length,0),r=Object.values(e.topicProgress).filter(y=>y.completed).length,o=n>0?Math.round(r/n*100):0,i=Object.values(e.moduleTestResults).filter(y=>y.passed).length,s=e.randomQuestionStats??{attempts:0,correct:0,bestStreak:0},a=e.quickLineStats??{attempts:0,correct:0,bestStreak:0},l=s.attempts>0?Math.round(s.correct/s.attempts*100):0,u=a.attempts>0?Math.round(a.correct/a.attempts*100):0,f=e.levelTestResult,m=f?Math.round(f.score/f.total*100):0;function g(y){return y>=90?"Highly Proficient":y>=75?"Proficient":y>=55?"Advanced":y>=35?"Intermediate":"Beginner"}return c.jsxs("div",{className:"page dashboard",children:[c.jsx("h1",{children:K.title}),c.jsx("p",{className:"subtitle",children:K.description}),c.jsxs("div",{className:"stats-grid",children:[c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[o,"%"]}),c.jsx("div",{className:"stat-label",children:"Overall Progress"}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${o}%`}})})]}),c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[r,"/",n]}),c.jsx("div",{className:"stat-label",children:"Topics Completed"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsxs("div",{className:"stat-value",children:[i,"/",K.modules.length]}),c.jsx("div",{className:"stat-label",children:"Module Tests Passed"})]}),c.jsxs("div",{className:"stat-card",children:[c.jsx("div",{className:"stat-value",children:e.finalTestResult?`${e.finalTestResult.score}/${e.finalTestResult.total}`:"—"}),c.jsx("div",{className:"stat-label",children:"Final Test"})]})]}),c.jsx("h2",{children:"Activity Stats"}),c.jsxs("div",{className:"stats-grid",children:[f&&c.jsxs("div",{className:"stat-card activity-card level-card",children:[c.jsx("div",{className:"activity-icon",children:"📋"}),c.jsx("div",{className:"stat-value",children:g(m)}),c.jsx("div",{className:"stat-label",children:"Level Test Result"}),c.jsxs("div",{className:"activity-detail",children:[f.score,"/",f.total," (",m,"%)"]})]}),c.jsxs("div",{className:"stat-card activity-card rq-card",children:[c.jsx("div",{className:"activity-icon",children:"🎲"}),c.jsx("div",{className:"stat-value",children:s.attempts>0?`${l}%`:"—"}),c.jsx("div",{className:"stat-label",children:"Random Questions"}),s.attempts>0&&c.jsxs("div",{className:"activity-details",children:[c.jsxs("span",{children:[s.correct,"/",s.attempts," correct"]}),c.jsxs("span",{children:["🔥 Best streak: ",s.bestStreak]})]}),s.attempts===0&&c.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]}),c.jsxs("div",{className:"stat-card activity-card ql-card",children:[c.jsx("div",{className:"activity-icon",children:"⚡"}),c.jsx("div",{className:"stat-value",children:a.attempts>0?`${u}%`:"—"}),c.jsx("div",{className:"stat-label",children:"Quick Lines"}),a.attempts>0&&c.jsxs("div",{className:"activity-details",children:[c.jsxs("span",{children:[a.correct,"/",a.attempts," correct"]}),c.jsxs("span",{children:["🔥 Best streak: ",a.bestStreak]})]}),a.attempts===0&&c.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]})]}),!e.levelTestResult&&c.jsxs("div",{className:"cta-card",children:[c.jsx("h2",{children:"Start Here"}),c.jsx("p",{children:"Take the level evaluation test to assess your current Angular knowledge."}),c.jsx(Ve,{to:"/level-test",className:"btn btn-primary",children:"Take Level Test →"})]}),c.jsx("h2",{children:"Course Modules"}),c.jsx("div",{className:"modules-grid",children:K.modules.map((y,v)=>{const x=y.topics.length,S=y.topics.filter(h=>{var w;return(w=e.topicProgress[h.id])==null?void 0:w.completed}).length,p=Math.round(S/x*100),d=e.moduleTestResults[y.id];return c.jsxs(Ve,{to:`/module/${y.id}`,className:"module-card",children:[c.jsx("div",{className:"module-number",children:v+1}),c.jsx("h3",{children:y.title}),c.jsx("p",{children:y.description}),c.jsxs("div",{className:"module-meta",children:[c.jsxs("span",{children:[x," topics"]}),c.jsxs("span",{children:[p,"% done"]}),d&&c.jsxs("span",{className:d.passed?"pass":"fail",children:["Test: ",d.score,"/",d.total]})]}),c.jsx("div",{className:"progress-bar",children:c.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})})]},y.id)})}),r>0&&c.jsx("div",{className:"reset-section",children:c.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Reset all progress? This cannot be undone.")&&t({type:"RESET"})},children:"Reset All Progress"})})]})}function ua({title:e,questions:t,onComplete:n,previousResult:r,renderResult:o}){const[i,s]=C.useState({}),[a,l]=C.useState(!1),[u,f]=C.useState(r??null);if(u&&!a){const v=c.jsx("div",{className:"result-banner",children:c.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]})});return c.jsxs("div",{className:"quiz completed-quiz",children:[c.jsx("h2",{children:e}),o?o(u):v,c.jsx("button",{className:"btn",onClick:()=>{f(null),s({})},children:"Retake Test"})]})}const m=(v,x)=>{a||s(S=>({...S,[v]:x}))},g=()=>{let v=0;for(const S of t)i[S.id]===S.correctAnswer&&v++;const x={score:v,total:t.length,passed:v>=Math.ceil(t.length*.7),answers:i};f(x),l(!0),n(x)},y=t.every(v=>i[v.id]!==void 0);return c.jsxs("div",{className:"quiz",children:[c.jsx("h2",{children:e}),c.jsxs("p",{className:"quiz-progress",children:[Object.keys(i).length," of ",t.length," answered"]}),c.jsx("div",{className:"questions",children:t.map((v,x)=>c.jsxs("div",{className:`question ${a?"revealed":""}`,children:[c.jsxs("h3",{children:[x+1,". ",v.question]}),c.jsx("div",{className:"options",children:v.options.map((S,p)=>{let d="option";return i[v.id]===p&&(d+=" selected"),a&&(p===v.correctAnswer?d+=" correct":i[v.id]===p&&(d+=" incorrect")),c.jsx("button",{className:d,onClick:()=>m(v.id,p),disabled:a,children:S},p)})}),a&&c.jsx("p",{className:"explanation",children:v.explanation})]},v.id))}),!a&&c.jsx("button",{className:"btn btn-primary submit-btn",onClick:g,disabled:!y,children:"Submit Answers"}),a&&u&&(o?o(u):c.jsxs("div",{className:"result-banner",children:[c.jsxs("p",{className:u.passed?"pass":"fail",children:[u.passed?"✓ Passed":"✗ Failed"," — ",u.score,"/",u.total," (",Math.round(u.score/u.total*100),"%)"]}),!u.passed&&c.jsx("button",{className:"btn btn-primary",onClick:()=>{f(null),s({}),l(!1)},children:"🔄 Try Again"})]}))]})}function Sh(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}const kh={Beginner:"You're just getting started with Angular. We recommend beginning from Module 1 and working through the entire course.",Intermediate:"You know the basics! Focus on Modules 4–7 to strengthen your understanding of services, dependency injection, and routing.",Advanced:"Solid foundation! Check out Modules 8–12 covering reactive forms, RxJS, state management, and HTTP interceptors.",Proficient:"You have strong Angular skills. Review Modules 13–16 for advanced patterns like lazy loading, custom directives, testing, and performance optimization.","Highly Proficient":"Excellent Angular knowledge! You can go straight to the final test, or browse specific topics for a refresher."},Rl={Beginner:"#ef4444",Intermediate:"#f59e0b",Advanced:"#3b82f6",Proficient:"#22c55e","Highly Proficient":"#a855f7"};function Dl({result:e}){const t=Math.round(e.score/e.total*100),n=Sh(t),r=Rl[n];return c.jsxs("div",{className:"level-result",children:[c.jsx("div",{className:"level-badge",style:{borderColor:r,color:r},children:n}),c.jsxs("p",{className:"level-score",children:[e.score,"/",e.total," (",t,"%)"]}),c.jsx("p",{className:"level-description",children:kh[n]}),c.jsx("div",{className:"level-scale",children:["Beginner","Intermediate","Advanced","Proficient","Highly Proficient"].map(o=>c.jsx("div",{className:`level-dot ${o===n?"active":""}`,style:o===n?{background:Rl[o]}:{},children:c.jsx("span",{className:"level-dot-label",children:o})},o))})]})}function Ah(){var s;const{progress:e,dispatch:t}=kt(),[n,r]=C.useState(()=>Il()),o=a=>{t({type:"SET_LEVEL_TEST",payload:a})},i=()=>{t({type:"RESET_LEVEL_TEST"}),r(Il())};return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Level Evaluation Test"}),c.jsx("p",{className:"subtitle",children:"30 randomly selected questions to evaluate your Angular proficiency level. Each attempt gives you a different set of questions."}),e.levelTestResult&&c.jsxs(c.Fragment,{children:[c.jsx(Dl,{result:e.levelTestResult}),c.jsx("div",{className:"retake-section",children:c.jsx("button",{className:"btn",onClick:i,children:"Retake with New Questions"})})]}),!e.levelTestResult&&c.jsx(ua,{title:"Angular Knowledge Assessment",questions:n,onComplete:o,renderResult:a=>c.jsx(Dl,{result:a})},(s=n[0])==null?void 0:s.id)]})}function Th(){const{moduleId:e}=od(),t=la(),{progress:n,dispatch:r}=kt(),o=K.modules.findIndex(u=>u.id===e),i=K.modules[o];if(!i)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Module Not Found"}),c.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const s=u=>{r({type:"SET_MODULE_TEST",payload:{moduleId:i.id,result:u}})},a=K.modules[o+1],l=K.modules[o-1];return c.jsxs("div",{className:"page module-page",children:[c.jsxs("div",{className:"module-header",children:[c.jsxs("span",{className:"module-badge",children:["Module ",o+1]}),c.jsx("h1",{children:i.title}),c.jsx("p",{className:"subtitle",children:i.description})]}),c.jsxs("div",{className:"topics-list",children:[c.jsx("h2",{children:"Topics"}),i.topics.map((u,f)=>{const m=n.topicProgress[u.id];return c.jsxs(Ve,{to:`/module/${i.id}/topic/${u.id}`,className:`topic-card ${m!=null&&m.completed?"completed":""}`,children:[c.jsx("span",{className:"topic-number",children:f+1}),c.jsx("span",{className:"topic-title",children:u.title}),(m==null?void 0:m.completed)&&c.jsx("span",{className:"check",children:"✓"})]},u.id)})]}),c.jsxs("div",{className:"module-test-section",children:[c.jsx("h2",{children:"Module Test"}),i.topics.every(u=>{var f;return(f=n.topicProgress[u.id])==null?void 0:f.completed})?c.jsx(ua,{title:`${i.title} — Test`,questions:i.test,onComplete:s,previousResult:n.moduleTestResults[i.id]}):c.jsx("p",{className:"test-locked",children:"🔒 Complete all practice tasks above to unlock the module test."})]}),c.jsxs("div",{className:"module-navigation",children:[l&&c.jsxs("button",{className:"btn",onClick:()=>t(`/module/${l.id}`),children:["← ",l.title]}),a&&c.jsxs("button",{className:"btn btn-primary",onClick:()=>t(`/module/${a.id}`),children:[a.title," →"]})]})]})}function bh({content:e}){const t=jh(e);return c.jsx("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}function jh(e){let t=e;return t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,r,o)=>{const i=Ml(o.trim());return`<div class="code-block"><div class="code-header"><span class="code-lang">${r||"code"}</span></div><pre><code>${i}</code></pre></div>`}),t=t.replace(/`([^`]+)`/g,(n,r)=>`<code class="inline-code">${Ml(r)}</code>`),t=t.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,(n,r,o,i)=>{const s=r.split("|").filter(l=>l.trim()).map(l=>`<th>${l.trim()}</th>`).join(""),a=i.trim().split(`
`).map(l=>`<tr>${l.split("|").filter(f=>f.trim()).map(f=>`<td>${f.trim()}</td>`).join("")}</tr>`).join("");return`<table><thead><tr>${s}</tr></thead><tbody>${a}</tbody></table>`}),t=t.replace(/^### (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.+)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.+)$/gm,"<h1>$1</h1>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^(\d+)\. (.+)$/gm,"<oli>$2</oli>"),t=t.replace(/((?:<oli>.+<\/oli>\n?)+)/g,n=>`<ol>${n.replace(/<\/?oli>/g,o=>o==="<oli>"?"<li>":"</li>")}</ol>`),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.+<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm,"<p>$1</p>"),t=t.replace(/<p>\s*<\/p>/g,""),t}function Ml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Ih({code:e,language:t="typescript"}){const[n,r]=C.useState(!1),o=()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return c.jsxs("div",{className:"code-block",children:[c.jsxs("div",{className:"code-header",children:[c.jsx("span",{className:"code-lang",children:t}),c.jsx("button",{className:"copy-btn",onClick:o,children:n?"✓ Copied":"Copy"})]}),c.jsx("pre",{children:c.jsx("code",{children:e})})]})}function ql(e){return e.replace(/\s+/g,"")}function Eh({task:e,taskIndex:t,onComplete:n,completed:r}){const[o,i]=C.useState(!1),[s,a]=C.useState(!1),[l,u]=C.useState(e.starterCode),[f,m]=C.useState(!!r),[g,y]=C.useState(null),v=()=>{const x=ql(l)===ql(e.solution);y(x?"correct":"incorrect"),x&&!f&&(m(!0),n())};return c.jsxs("div",{className:`task-view ${f?"task-solved":""}`,children:[c.jsxs("h3",{children:["📝 Task ",t+1]}),c.jsx("p",{className:"task-description",children:e.description}),c.jsxs("div",{className:"task-code",children:[c.jsx("h4",{children:"Your Code"}),c.jsx("textarea",{className:"code-editor",value:l,onChange:x=>{u(x.target.value),y(null)},rows:l.split(`
`).length+2,spellCheck:!1})]}),g==="correct"&&c.jsx("div",{className:"task-feedback correct",children:"✅ Correct! Well done."}),g==="incorrect"&&c.jsx("div",{className:"task-feedback incorrect",children:"❌ Not quite right. Check your code and try again."}),c.jsxs("div",{className:"task-actions",children:[c.jsx("button",{className:"btn btn-primary",onClick:v,disabled:f,children:f?"✓ Solved":"Check Solution"}),c.jsx("button",{className:"btn",onClick:()=>i(!o),children:o?"Hide Hints":"Show Hints"}),c.jsx("button",{className:"btn",onClick:()=>a(!s),children:s?"Hide Correct Code":"Show Correct Code"})]}),o&&c.jsxs("div",{className:"hints",children:[c.jsx("h4",{children:"Hints"}),c.jsx("ul",{children:e.hints.map((x,S)=>c.jsx("li",{children:x},S))})]}),s&&c.jsxs("div",{className:"solution",children:[c.jsx("h4",{children:"Correct Code"}),c.jsx(Ih,{code:e.solution,language:"typescript"})]})]})}function Ph(e){var t;return e.length>=2?e:[...e,{description:"Now implement the same solution from scratch, without any starter code provided.",starterCode:`// Write your complete solution here
`,solution:((t=e[0])==null?void 0:t.solution)||"",hints:["Try to recall the key concepts from the explanation above.","The solution should match what you built in the previous task."]}]}function Oh(){const{moduleId:e,topicId:t}=od(),n=la(),{progress:r,dispatch:o}=kt(),i=K.modules.find(y=>y.id===e);if(!i)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Module Not Found"}),c.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const s=i.topics.findIndex(y=>y.id===t),a=i.topics[s];if(!a)return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"Topic Not Found"}),c.jsx(Ve,{to:`/module/${i.id}`,className:"btn",children:"Back to Module"})]});const l=Ph(a.tasks),u=y=>{o({type:"COMPLETE_TASK",payload:{topicId:a.id,taskIndex:y,totalTasks:l.length}})},f=r.topicProgress[a.id],m=i.topics[s+1],g=i.topics[s-1];return c.jsxs("div",{className:"page topic-page",children:[c.jsxs("div",{className:"breadcrumb",children:[c.jsx(Ve,{to:"/",children:"Dashboard"}),c.jsx("span",{children:" / "}),c.jsx(Ve,{to:`/module/${i.id}`,children:i.title}),c.jsx("span",{children:" / "}),c.jsx("span",{children:a.title})]}),c.jsx("h1",{children:a.title}),c.jsx("div",{className:"topic-content",children:c.jsx(bh,{content:a.explanation})}),c.jsx("hr",{}),l.map((y,v)=>{var x;return c.jsx(Eh,{task:y,taskIndex:v,onComplete:()=>u(v),completed:!!((x=f==null?void 0:f.tasksCompleted)!=null&&x[v])},`${a.id}-task-${v}`)}),c.jsxs("div",{className:"topic-navigation",children:[g&&c.jsxs("button",{className:"btn",onClick:()=>n(`/module/${i.id}/topic/${g.id}`),children:["← ",g.title]}),m?c.jsxs("button",{className:"btn btn-primary",onClick:()=>n(`/module/${i.id}/topic/${m.id}`),children:[m.title," →"]}):c.jsx("button",{className:"btn btn-primary",onClick:()=>n(`/module/${i.id}`),children:"Back to Module →"})]})]})}function Nh(){const{progress:e,dispatch:t}=kt(),n=r=>{t({type:"SET_FINAL_TEST",payload:r})};return c.jsxs("div",{className:"page",children:[c.jsx("h1",{children:"🏆 Final Test"}),c.jsxs("p",{className:"subtitle",children:["This comprehensive test covers all ",K.modules.length," modules. You need 70% to pass and earn your certificate. Take your time!"]}),c.jsx(ua,{title:"Angular Mastery — Final Assessment",questions:K.finalTest,onComplete:n,previousResult:e.finalTestResult})]})}function Rh(){const[e,t]=C.useState(!1),[n,r]=C.useState(!1),[o,i]=C.useState(!1),s=C.useCallback(()=>i(!1),[]);return c.jsxs("div",{className:"app-layout",children:[c.jsx("button",{className:"mobile-menu-btn",onClick:()=>i(!0),"aria-label":"Open menu",children:"☰"}),o&&c.jsx("div",{className:"sidebar-overlay",onClick:s}),c.jsx(gh,{onRandomQuestion:()=>{t(!0),s()},onQuickLine:()=>{r(!0),s()},isOpen:o,onClose:s}),e&&c.jsx(wh,{onClose:()=>t(!1)}),n&&c.jsx(xh,{onClose:()=>r(!1)}),c.jsx("main",{className:"main-content",children:c.jsxs(Nf,{children:[c.jsx(It,{path:"/",element:c.jsx(Ch,{})}),c.jsx(It,{path:"/level-test",element:c.jsx(Ah,{})}),c.jsx(It,{path:"/module/:moduleId",element:c.jsx(Th,{})}),c.jsx(It,{path:"/module/:moduleId/topic/:topicId",element:c.jsx(Oh,{})}),c.jsx(It,{path:"/final-test",element:c.jsx(Nh,{})}),c.jsx(It,{path:"*",element:c.jsx("div",{className:"page",children:c.jsx("h1",{children:"404 — Page Not Found"})})})]})})]})}function Dh(){return c.jsx(_f,{children:c.jsx(Gf,{children:c.jsx(Rh,{})})})}vi.createRoot(document.getElementById("root")).render(c.jsx(Ql.StrictMode,{children:c.jsx(Dh,{})}));
