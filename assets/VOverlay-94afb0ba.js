import{m as X,a as fe,b as Z,I as ve,s as me,e as Le,C as et,y as Be,D as Me,t as Fe,i as Re,E as tt,l as _e,p as nt,H as De,n as ce,c as at,J as Ne,d as ot,L as it,Q as lt,S as st,B as rt,R as ct,g as ut,K as He,h as dt,N as ft,T as vt,U as mt,G as yt,O as gt,W as we,X as ie,Y as le,Z as xe,_ as Ce,w as ht,f as bt,$ as kt,M as St,a0 as wt}from"./VImg-dafe7aa1.js";import{ac as We,am as ze,p as _,l as J,D as $e,m as v,E as xt,S as Q,u as ye,v as ge,c as A,O as qe,X as je,ag as j,r as q,J as he,V as R,H as L,an as Ct,_ as oe,d as F,G as Ee,L as be,ao as Ye,i as Ge,ap as Et,g as ke,K as $,Z as Pt,s as G,N as Ot,o as At,a as Ke,b as pt,ai as Vt,a4 as It,I as Tt,x as Lt,aq as Bt,P as Mt,F as Ft,T as Rt}from"./index-2614a9c2.js";class K{constructor(n){let{x:t,y:a,width:o,height:i}=n;this.x=t,this.y=a,this.width=o,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Pe(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function _t(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let o,i,l,s,c;if(a.startsWith("matrix3d("))o=a.slice(9,-1).split(/, /),i=+o[0],l=+o[5],s=+o[12],c=+o[13];else if(a.startsWith("matrix("))o=a.slice(7,-1).split(/, /),i=+o[0],l=+o[3],s=+o[4],c=+o[5];else return new K(n);const d=t.transformOrigin,u=n.x-s-(1-i)*parseFloat(d),m=n.y-c-(1-l)*parseFloat(d.slice(d.indexOf(" ")+1)),h=i?n.width/i:e.offsetWidth+1,P=l?n.height/l:e.offsetHeight+1;return new K({x:u,y:m,width:h,height:P})}else return new K(n)}function Dt(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(o=>{a.onfinish=()=>{o(a)}})),a}const ee=new WeakMap;function Nt(e,n){Object.keys(n).forEach(t=>{if(We(t)){const a=ze(t),o=ee.get(e);if(n[t]==null)o==null||o.forEach(i=>{const[l,s]=i;l===a&&(e.removeEventListener(a,s),o.delete(i))});else if(!o||![...o].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=o||new Set;i.add([a,n[t]]),ee.has(e)||ee.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Ht(e,n){Object.keys(n).forEach(t=>{if(We(t)){const a=ze(t),o=ee.get(e);o==null||o.forEach(i=>{const[l,s]=i;l===a&&(e.removeEventListener(a,s),o.delete(i))})}else e.removeAttribute(t)})}function Xe(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Wt="cubic-bezier(0.4, 0, 0.2, 1)",Ln="cubic-bezier(0.0, 0, 0.2, 1)",Bn="cubic-bezier(0.4, 0, 1, 1)";function zt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?$t(e):Se(e))return e;e=e.parentElement}return document.scrollingElement}function ne(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Se(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Se(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function $t(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function qt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const jt=_({fluid:{type:Boolean,default:!1},...X(),...fe()},"VContainer"),Mn=J()({name:"VContainer",props:jt(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=$e();return Z(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}});const Yt=J()({name:"VCardActions",props:X(),setup(e,n){let{slots:t}=n;return xt({VBtn:{variant:"text"}}),Z(()=>{var a;return v("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Gt=ve("v-card-subtitle"),Kt=ve("v-card-title");const Xt=_({start:Boolean,end:Boolean,icon:Q,image:String,...X(),...me(),...Le(),...et(),...fe(),...ye(),...Be({variant:"flat"})},"VAvatar"),Oe=J()({name:"VAvatar",props:Xt(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=ge(e),{colorClasses:o,colorStyles:i,variantClasses:l}=Me(e),{densityClasses:s}=Fe(e),{roundedClasses:c}=Re(e),{sizeClasses:d,sizeStyles:u}=tt(e);return Z(()=>v(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,o.value,s.value,c.value,d.value,l.value,e.class],style:[i.value,u.value,e.style]},{default:()=>{var m;return[e.image?v(_e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?v(nt,{key:"icon",icon:e.icon},null):(m=t.default)==null?void 0:m.call(t),De(!1,"v-avatar")]}})),{}}}),Zt=_({appendAvatar:String,appendIcon:Q,prependAvatar:String,prependIcon:Q,subtitle:String,title:String,...X(),...me()},"VCardItem"),Jt=J()({name:"VCardItem",props:Zt(),setup(e,n){let{slots:t}=n;return Z(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),l=!!(i||t.append),s=!!(e.title||t.title),c=!!(e.subtitle||t.subtitle);return v("div",{class:["v-card-item",e.class],style:e.style},[o&&v("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?v(ce,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&v(Oe,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),v("div",{class:"v-card-item__content"},[s&&v(Kt,{key:"title"},{default:()=>{var u;return[((u=t.title)==null?void 0:u.call(t))??e.title]}}),c&&v(Gt,{key:"subtitle"},{default:()=>{var u;return[((u=t.subtitle)==null?void 0:u.call(t))??e.subtitle]}}),(d=t.default)==null?void 0:d.call(t)]),l&&v("div",{key:"append",class:"v-card-item__append"},[t.append?v(ce,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):i&&v(Oe,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ut=ve("v-card-text"),Qt=_({appendAvatar:String,appendIcon:Q,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Q,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...at(),...X(),...me(),...Ne(),...ot(),...it(),...lt(),...st(),...Le(),...rt(),...fe(),...ye(),...Be({variant:"elevated"})},"VCard"),Fn=J()({name:"VCard",directives:{Ripple:ct},props:Qt(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:o}=ge(e),{borderClasses:i}=ut(e),{colorClasses:l,colorStyles:s,variantClasses:c}=Me(e),{densityClasses:d}=Fe(e),{dimensionStyles:u}=He(e),{elevationClasses:m}=dt(e),{loaderClasses:h}=ft(e),{locationStyles:P}=vt(e),{positionClasses:g}=mt(e),{roundedClasses:f}=Re(e),x=yt(e,t),E=A(()=>e.link!==!1&&x.isLink.value),b=A(()=>!e.disabled&&e.link!==!1&&(e.link||x.isClickable.value));return Z(()=>{const r=E.value?"a":e.tag,p=!!(a.title||e.title),B=!!(a.subtitle||e.subtitle),D=p||B,N=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),W=!!(a.image||e.image),I=D||H||N,C=!!(a.text||e.text);return qe(v(r,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},o.value,i.value,l.value,d.value,m.value,h.value,g.value,f.value,c.value,e.class],style:[s.value,u.value,P.value,e.style],href:x.href.value,onClick:b.value&&x.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var S;return[W&&v("div",{key:"image",class:"v-card__image"},[a.image?v(ce,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):v(_e,{key:"image-img",cover:!0,src:e.image},null)]),v(gt,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),I&&v(Jt,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),C&&v(Ut,{key:"text"},{default:()=>{var y;return[((y=a.text)==null?void 0:y.call(a))??e.text]}}),(S=a.default)==null?void 0:S.call(a),a.actions&&v(Yt,null,{default:a.actions}),De(b.value,"v-card")]}}),[[je("ripple"),b.value&&e.ripple]])}),{}}}),en=_({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function tn(e,n){const t={},a=o=>()=>{if(!j)return Promise.resolve(!0);const i=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(l=>{const s=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(i),l(i)},s)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}function se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function nn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ae(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return se({x:o,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return se({x:o,y:i},n)}return se({x:n.width/2,y:n.height/2},n)}const Ze={static:ln,connected:rn},an=_({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ze},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function on(e,n){const t=q({}),a=q();j&&(he(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,s;L(()=>e.locationStrategy,i),R(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:a.value=(s=Ze[e.locationStrategy](n,e,t))==null?void 0:s.updateLocation}),window.addEventListener("resize",o,{passive:!0}),R(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(i){var l;(l=a.value)==null||l.call(a,i)}return{contentStyles:t,updateLocation:a}}function ln(){}function sn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=_t(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function rn(e,n,t){qt(e.activatorEl.value)&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:i}=Ct(()=>{const g=we(n.location,e.isRtl.value),f=n.origin==="overlap"?g:n.origin==="auto"?ie(g):we(n.origin,e.isRtl.value);return g.side===f.side&&g.align===le(f).align?{preferredAnchor:xe(g),preferredOrigin:xe(f)}:{preferredAnchor:g,preferredOrigin:f}}),[l,s,c,d]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>A(()=>{const f=parseFloat(n[g]);return isNaN(f)?1/0:f})),u=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let m=!1;const h=new ResizeObserver(()=>{m&&P()});L([e.activatorEl,e.contentEl],(g,f)=>{let[x,E]=g,[b,r]=f;b&&h.unobserve(b),x&&h.observe(x),r&&h.unobserve(r),E&&h.observe(E)},{immediate:!0}),R(()=>{h.disconnect()});function P(){if(m=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>m=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const g=e.activatorEl.value.getBoundingClientRect(),f=sn(e.contentEl.value,e.isRtl.value),x=ne(e.contentEl.value),E=12;x.length||(x.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const b=x.reduce((C,S)=>{const y=S.getBoundingClientRect(),w=new K({x:S===document.documentElement?0:y.x,y:S===document.documentElement?0:y.y,width:S.clientWidth,height:S.clientHeight});return C?new K({x:Math.max(C.left,w.left),y:Math.max(C.top,w.top),width:Math.min(C.right,w.right)-Math.max(C.left,w.left),height:Math.min(C.bottom,w.bottom)-Math.max(C.top,w.top)}):w},void 0);b.x+=E,b.y+=E,b.width-=E*2,b.height-=E*2;let r={anchor:o.value,origin:i.value};function p(C){const S=new K(f),y=Ae(C.anchor,g),w=Ae(C.origin,S);let{x:T,y:M}=nn(y,w);switch(C.anchor.side){case"top":M-=u.value[0];break;case"bottom":M+=u.value[0];break;case"left":T-=u.value[0];break;case"right":T+=u.value[0];break}switch(C.anchor.align){case"top":M-=u.value[1];break;case"bottom":M+=u.value[1];break;case"left":T-=u.value[1];break;case"right":T+=u.value[1];break}return S.x+=T,S.y+=M,S.width=Math.min(S.width,c.value),S.height=Math.min(S.height,d.value),{overflows:Pe(S,b),x:T,y:M}}let B=0,D=0;const N={x:0,y:0},H={x:!1,y:!1};let W=-1;for(;!(W++>10);){const{x:C,y:S,overflows:y}=p(r);B+=C,D+=S,f.x+=C,f.y+=S;{const w=Ce(r.anchor),T=y.x.before||y.x.after,M=y.y.before||y.y.after;let Y=!1;if(["x","y"].forEach(O=>{if(O==="x"&&T&&!H.x||O==="y"&&M&&!H.y){const k={anchor:{...r.anchor},origin:{...r.origin}},V=O==="x"?w==="y"?le:ie:w==="y"?ie:le;k.anchor=V(k.anchor),k.origin=V(k.origin);const{overflows:z}=p(k);(z[O].before<=y[O].before&&z[O].after<=y[O].after||z[O].before+z[O].after<(y[O].before+y[O].after)/2)&&(r=k,Y=H[O]=!0)}}),Y)continue}y.x.before&&(B+=y.x.before,f.x+=y.x.before),y.x.after&&(B-=y.x.after,f.x-=y.x.after),y.y.before&&(D+=y.y.before,f.y+=y.y.before),y.y.after&&(D-=y.y.after,f.y-=y.y.after);{const w=Pe(f,b);N.x=b.width-w.x.before-w.x.after,N.y=b.height-w.y.before-w.y.after,B+=w.x.before,f.x+=w.x.before,D+=w.y.before,f.y+=w.y.before}break}const I=Ce(r.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${r.anchor.side} ${r.anchor.align}`,transformOrigin:`${r.origin.side} ${r.origin.align}`,top:F(re(D)),left:e.isRtl.value?void 0:F(re(B)),right:e.isRtl.value?F(re(-B)):void 0,minWidth:F(I==="y"?Math.min(l.value,g.width):l.value),maxWidth:F(pe(Ee(N.x,l.value===1/0?0:l.value,c.value))),maxHeight:F(pe(Ee(N.y,s.value===1/0?0:s.value,d.value)))}),{available:N,contentBox:f}}return L(()=>[o.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>P()),oe(()=>{const g=P();if(!g)return;const{available:f,contentBox:x}=g;x.height>f.y&&requestAnimationFrame(()=>{P(),requestAnimationFrame(()=>{P()})})}),{updateLocation:P}}function re(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function pe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const ae=[];function cn(e){!ue||ae.length?(ae.push(e),de()):(ue=!1,e(),de())}let Ve=-1;function de(){cancelAnimationFrame(Ve),Ve=requestAnimationFrame(()=>{const e=ae.shift();e&&e(),ae.length?de():ue=!0})}const te={none:null,close:fn,block:vn,reposition:mn},un=_({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in te}},"VOverlay-scroll-strategies");function dn(e,n){if(!j)return;let t;be(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ye(),await oe(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=te[e.scrollStrategy])==null||a.call(te,n,e,t)}))}),R(()=>{t==null||t.stop()})}function fn(e){function n(t){e.isActive.value=!1}Je(e.activatorEl.value??e.contentEl.value,n)}function vn(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,a=[...new Set([...ne(e.activatorEl.value,n.contained?t:void 0),...ne(e.contentEl.value,n.contained?t:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,i=(s=>Se(s)&&s)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((s,c)=>{s.style.setProperty("--v-body-scroll-x",F(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",F(-s.scrollTop)),s!==document.documentElement&&s.style.setProperty("--v-scrollbar-offset",F(o)),s.classList.add("v-overlay-scroll-blocked")}),R(()=>{a.forEach((s,c)=>{const d=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),u=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-d,s.scrollTop=-u}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function mn(e,n,t){let a=!1,o=-1,i=-1;function l(s){cn(()=>{var u,m;const c=performance.now();(m=(u=e.updateLocation).value)==null||m.call(u,s),a=(performance.now()-c)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{t.run(()=>{Je(e.activatorEl.value??e.contentEl.value,s=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{l(s)})})):l(s)})})}),R(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(o)})}function Je(e,n){const t=[document,...ne(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),R(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const yn=Symbol.for("vuetify:v-menu"),gn=_({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...en()},"VOverlay-activator");function hn(e,n){let{isActive:t,isTop:a}=n;const o=q();let i=!1,l=!1,s=!0;const c=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:u,runCloseDelay:m}=tn(e,r=>{r===(e.openOnHover&&i||c.value&&l)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==r&&(s=!0),t.value=r)}),h={onClick:r=>{r.stopPropagation(),o.value=r.currentTarget||r.target,t.value=!t.value},onMouseenter:r=>{var p;(p=r.sourceCapabilities)!=null&&p.firesTouchEvents||(i=!0,o.value=r.currentTarget||r.target,u())},onMouseleave:r=>{i=!1,m()},onFocus:r=>{Pt(r.target,":focus-visible")!==!1&&(l=!0,r.stopPropagation(),o.value=r.currentTarget||r.target,u())},onBlur:r=>{l=!1,r.stopPropagation(),m()}},P=A(()=>{const r={};return d.value&&(r.onClick=h.onClick),e.openOnHover&&(r.onMouseenter=h.onMouseenter,r.onMouseleave=h.onMouseleave),c.value&&(r.onFocus=h.onFocus,r.onBlur=h.onBlur),r}),g=A(()=>{const r={};if(e.openOnHover&&(r.onMouseenter=()=>{i=!0,u()},r.onMouseleave=()=>{i=!1,m()}),c.value&&(r.onFocusin=()=>{l=!0,u()},r.onFocusout=()=>{l=!1,m()}),e.closeOnContentClick){const p=Ge(yn,null);r.onClick=()=>{t.value=!1,p==null||p.closeParents()}}return r}),f=A(()=>{const r={};return e.openOnHover&&(r.onMouseenter=()=>{s&&(i=!0,s=!1,u())},r.onMouseleave=()=>{i=!1,m()}),r});L(a,r=>{r&&(e.openOnHover&&!i&&(!c.value||!l)||c.value&&!l&&(!e.openOnHover||!i))&&(t.value=!1)});const x=q();be(()=>{x.value&&oe(()=>{o.value=Et(x.value)})});const E=ke("useActivator");let b;return L(()=>!!e.activator,r=>{r&&j?(b=Ye(),b.run(()=>{bn(e,E,{activatorEl:o,activatorEvents:P})})):b&&b.stop()},{flush:"post",immediate:!0}),R(()=>{b==null||b.stop()}),{activatorEl:o,activatorRef:x,activatorEvents:P,contentEvents:g,scrimEvents:f}}function bn(e,n,t){let{activatorEl:a,activatorEvents:o}=t;L(()=>e.activator,(c,d)=>{if(d&&c!==d){const u=s(d);u&&l(u)}c&&oe(()=>i())},{immediate:!0}),L(()=>e.activatorProps,()=>{i()}),R(()=>{l()});function i(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Nt(c,$(o.value,d))}function l(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;c&&Ht(c,$(o.value,d))}function s(){var u,m;let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,d;if(c)if(c==="parent"){let h=(m=(u=n==null?void 0:n.proxy)==null?void 0:u.$el)==null?void 0:m.parentNode;for(;h!=null&&h.hasAttribute("data-no-activator");)h=h.parentNode;d=h}else typeof c=="string"?d=document.querySelector(c):"$el"in c?d=c.$el:d=c;return a.value=(d==null?void 0:d.nodeType)===Node.ELEMENT_NODE?d:null,a.value}}function kn(){if(!j)return G(!1);const{ssr:e}=Ot();if(e){const n=G(!1);return At(()=>{n.value=!0}),n}else return G(!0)}const Sn=_({eager:Boolean},"lazy");function wn(e,n){const t=G(!1),a=A(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}function xn(){const n=ke("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Ie=Symbol.for("vuetify:stack"),U=Ke([]);function Cn(e,n,t){const a=ke("useStack"),o=!t,i=Ge(Ie,void 0),l=Ke({activeChildren:new Set});pt(Ie,l);const s=G(+n.value);he(e,()=>{var m;const u=(m=U.at(-1))==null?void 0:m[1];s.value=u?u+10:+n.value,o&&U.push([a.uid,s.value]),i==null||i.activeChildren.add(a.uid),R(()=>{if(o){const h=It(U).findIndex(P=>P[0]===a.uid);U.splice(h,1)}i==null||i.activeChildren.delete(a.uid)})});const c=G(!0);o&&be(()=>{var m;const u=((m=U.at(-1))==null?void 0:m[0])===a.uid;setTimeout(()=>c.value=u)});const d=A(()=>!l.activeChildren.size);return{globalTop:Vt(c),localTop:d,stackStyles:A(()=>({zIndex:s.value}))}}function En(e){return{teleportTarget:A(()=>{const t=e.value;if(t===!0||!j)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function Pn(){return!0}function Ue(e,n,t){if(!e||Qe(e,t)===!1)return!1;const a=Xe(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(i=>i==null?void 0:i.contains(e.target))}function Qe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Pn)(e)}function On(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Ue(e,n,t)&&setTimeout(()=>{Qe(e,t)&&a&&a(e)},0)}function Te(e,n){const t=Xe(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const An={mounted(e,n){const t=o=>On(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=Ue(o,e,n)};Te(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(Te(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function pn(e){const{modelValue:n,color:t,...a}=e;return v(Rt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&v("div",$({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const Vn=_({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...gn(),...X(),...Ne(),...Sn(),...an(),...un(),...ye(),...ht()},"VOverlay"),Rn=J()({name:"VOverlay",directives:{ClickOutside:An},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Vn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const i=Tt(e,"modelValue"),l=A({get:()=>i.value,set:k=>{k&&e.disabled||(i.value=k)}}),{teleportTarget:s}=En(A(()=>e.attach||e.contained)),{themeClasses:c}=ge(e),{rtlClasses:d,isRtl:u}=$e(),{hasContent:m,onAfterLeave:h}=wn(e,l),P=bt(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:f,stackStyles:x}=Cn(l,Lt(e,"zIndex"),e._disableGlobalStack),{activatorEl:E,activatorRef:b,activatorEvents:r,contentEvents:p,scrimEvents:B}=hn(e,{isActive:l,isTop:f}),{dimensionStyles:D}=He(e),N=kn(),{scopeId:H}=xn();L(()=>e.disabled,k=>{k&&(l.value=!1)});const W=q(),I=q(),{contentStyles:C,updateLocation:S}=on(e,{isRtl:u,contentEl:I,activatorEl:E,isActive:l});dn(e,{root:W,contentEl:I,activatorEl:E,isActive:l,updateLocation:S});function y(k){o("click:outside",k),e.persistent?O():l.value=!1}function w(){return l.value&&g.value}j&&L(l,k=>{k?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(k){var V,z;k.key==="Escape"&&g.value&&(e.persistent?O():(l.value=!1,(V=I.value)!=null&&V.contains(document.activeElement)&&((z=E.value)==null||z.focus())))}const M=kt();he(()=>e.closeOnBack,()=>{wt(M,k=>{g.value&&l.value?(k(!1),e.persistent?O():l.value=!1):k()})});const Y=q();L(()=>l.value&&(e.absolute||e.contained)&&s.value==null,k=>{if(k){const V=zt(W.value);V&&V!==document.scrollingElement&&(Y.value=V.scrollTop)}});function O(){e.noClickAnimation||I.value&&Dt(I.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Wt})}return Z(()=>{var k;return v(Ft,null,[(k=t.activator)==null?void 0:k.call(t,{isActive:l.value,props:$({ref:b},r.value,e.activatorProps)}),N.value&&m.value&&v(Bt,{disabled:!s.value,to:s.value},{default:()=>[v("div",$({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},c.value,d.value,e.class],style:[x.value,{top:F(Y.value)},e.style],ref:W},H,a),[v(pn,$({color:P,modelValue:l.value&&!!e.scrim},B.value),null),v(St,{appear:!0,persisted:!0,transition:e.transition,target:E.value,onAfterLeave:()=>{h(),o("afterLeave")}},{default:()=>{var V;return[qe(v("div",$({ref:I,class:["v-overlay__content",e.contentClass],style:[D.value,C.value]},p.value,e.contentProps),[(V=t.default)==null?void 0:V.call(t,{isActive:l})]),[[Mt,l.value],[je("click-outside"),{handler:y,closeConditional:w,include:()=>[E.value]}]])]}})])]})])}),{activatorEl:E,animateClick:O,contentEl:I,globalTop:g,localTop:f,updateLocation:S}}});export{Mn as V,Fn as a,Kt as b,Gt as c,Ut as d,Rn as e,Dt as f,zt as g,Ln as h,Bn as i,Oe as j,Vn as k,xn as l,en as m,_t as n,yn as o,Yt as p,Wt as s,tn as u};