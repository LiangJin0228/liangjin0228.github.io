import{p as I,i as oe,c as u,r as Q,a as E,g as he,s as B,o as ne,b as pe,d as L,f as Ye,e as Ze,h as Xe,j as Ge,k as be,l as A,m as o,n as Qe,q as H,t as J,w as b,u as se,v as ue,x as K,y as U,z as xe,F as Ve,A as _e,B as Se,C as we,D as Ie,E as We,G as et,H as Y,I as tt,J as at,K as ie,L as lt,M as ot,N as nt,O as Z,P as X,Q as q,R as st}from"./index-2614a9c2.js";import{u as ke,m as F,a as W,b as R,c as Te,d as Be,e as Ce,f as Le,g as Ae,h as Re,i as Pe,V as ut,j as N,k as de,l as it,n as le,o as rt,p as me,q as ct}from"./VImg-dafe7aa1.js";import{u as $e,V as vt,a as fe}from"./index-8d38f285.js";const G=Symbol.for("vuetify:layout"),ze=Symbol.for("vuetify:layout-item"),ge=1e3,Me=I({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ne=I({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function dt(){const e=oe(G);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function He(e){const s=oe(G);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Ze()}`,n=he("useLayoutItem");pe(ze,{id:t});const a=B(!1);Xe(()=>a.value=!0),Ge(()=>a.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:i}=s.register(n,{...e,active:u(()=>a.value?!1:e.active.value),id:t});return be(()=>s.unregister(t)),{layoutItemStyles:l,layoutRect:s.layoutRect,layoutItemScrimStyles:i}}const mt=(e,s,t,n)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const i of e){const c=s.get(i),r=t.get(i),h=n.get(i);if(!c||!r||!h)continue;const v={...a,[c.value]:parseInt(a[c.value],10)+(h.value?parseInt(r.value,10):0)};l.push({id:i,layer:v}),a=v}return l};function Ee(e){const s=oe(G,null),t=u(()=>s?s.rootZIndex.value-100:ge),n=Q([]),a=E(new Map),l=E(new Map),i=E(new Map),c=E(new Map),r=E(new Map),{resizeRef:h,contentRect:v}=ke(),_=u(()=>{const g=new Map,S=e.overlaps??[];for(const d of S.filter(x=>x.includes(":"))){const[x,p]=d.split(":");if(!n.value.includes(x)||!n.value.includes(p))continue;const C=a.get(x),M=a.get(p),D=l.get(x),j=l.get(p);!C||!M||!D||!j||(g.set(p,{position:C.value,amount:parseInt(D.value,10)}),g.set(x,{position:M.value,amount:-parseInt(j.value,10)}))}return g}),y=u(()=>{const g=[...new Set([...i.values()].map(d=>d.value))].sort((d,x)=>d-x),S=[];for(const d of g){const x=n.value.filter(p=>{var C;return((C=i.get(p))==null?void 0:C.value)===d});S.push(...x)}return mt(S,a,l,c)}),m=u(()=>!Array.from(r.values()).some(g=>g.value)),V=u(()=>y.value[y.value.length-1].layer),P=u(()=>({"--v-layout-left":L(V.value.left),"--v-layout-right":L(V.value.right),"--v-layout-top":L(V.value.top),"--v-layout-bottom":L(V.value.bottom),...m.value?void 0:{transition:"none"}})),k=u(()=>y.value.slice(1).map((g,S)=>{let{id:d}=g;const{layer:x}=y.value[S],p=l.get(d),C=a.get(d);return{id:d,...x,size:Number(p.value),position:C.value}})),f=g=>k.value.find(S=>S.id===g),w=he("createLayout"),$=B(!1);ne(()=>{$.value=!0}),pe(G,{register:(g,S)=>{let{id:d,order:x,position:p,layoutSize:C,elementSize:M,active:D,disableTransitions:j,absolute:Ue}=S;i.set(d,x),a.set(d,p),l.set(d,C),c.set(d,D),j&&r.set(d,j);const re=Ye(ze,w==null?void 0:w.vnode).indexOf(g);re>-1?n.value.splice(re,0,d):n.value.push(d);const ce=u(()=>k.value.findIndex(O=>O.id===d)),ee=u(()=>t.value+y.value.length*2-ce.value*2),qe=u(()=>{const O=p.value==="left"||p.value==="right",te=p.value==="right",Ke=p.value==="bottom",ve={[p.value]:0,zIndex:ee.value,transform:`translate${O?"X":"Y"}(${(D.value?0:-110)*(te||Ke?-1:1)}%)`,position:Ue.value||t.value!==ge?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!$.value)return ve;const T=k.value[ce.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${d}"`);const ae=_.value.get(d);return ae&&(T[ae.position]+=ae.amount),{...ve,height:O?`calc(100% - ${T.top}px - ${T.bottom}px)`:M.value?`${M.value}px`:void 0,left:te?void 0:`${T.left}px`,right:te?`${T.right}px`:void 0,top:p.value!=="bottom"?`${T.top}px`:void 0,bottom:p.value!=="top"?`${T.bottom}px`:void 0,width:O?M.value?`${M.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),Je=u(()=>({zIndex:ee.value-1}));return{layoutItemStyles:qe,layoutItemScrimStyles:Je,zIndex:ee}},unregister:g=>{i.delete(g),a.delete(g),l.delete(g),c.delete(g),r.delete(g),n.value=n.value.filter(S=>S!==g)},mainRect:V,mainStyles:P,getLayoutItem:f,items:k,layoutRect:v,rootZIndex:t});const z=u(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),Oe=u(()=>({zIndex:t.value,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:z,layoutStyles:Oe,getLayoutItem:f,items:k,layoutRect:v,layoutRef:h}}const ft=I({scrollable:Boolean,...F(),...W({tag:"main"})},"VMain"),gt=A()({name:"VMain",props:ft(),setup(e,s){let{slots:t}=s;const{mainStyles:n}=dt(),{ssrBootStyles:a}=$e();return R(()=>o(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[n.value,a.value,e.style]},{default:()=>{var l,i;return[e.scrollable?o("div",{class:"v-main__scroller"},[(l=t.default)==null?void 0:l.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),yt={__name:"View",setup(e){return(s,t)=>{const n=Qe("router-view");return H(),J(gt,{class:"bg-grey-lighten-3"},{default:b(()=>[o(n)]),_:1})}}};const ht=I({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Te(),...F(),...Be(),...Ne(),...Ce(),...W({tag:"footer"}),...se()},"VFooter"),pt=A()({name:"VFooter",props:ht(),setup(e,s){let{slots:t}=s;const{themeClasses:n}=ue(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Le(K(e,"color")),{borderClasses:i}=Ae(e),{elevationClasses:c}=Re(e),{roundedClasses:r}=Pe(e),h=B(32),{resizeRef:v}=ke(m=>{m.length&&(h.value=m[0].target.clientHeight)}),_=u(()=>e.height==="auto"?h.value:parseInt(e.height,10)),{layoutItemStyles:y}=He({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:_,elementSize:u(()=>e.height==="auto"?void 0:_.value),active:u(()=>e.app),absolute:K(e,"absolute")});return R(()=>o(e.tag,{ref:v,class:["v-footer",n.value,a.value,i.value,c.value,r.value,e.class],style:[l.value,e.app?y.value:{height:L(e.height)},e.style]},t)),{}}}),bt={__name:"Footer",setup(e){const s=E([{icon:"mdi-facebook",link:"https://www.facebook.com/liangjin0228/"},{icon:"mdi-twitter",link:"https://twitter.com/TanLiangJin0228"},{icon:"mdi-linkedin",link:"https://www.linkedin.com/in/liangjin0228/"},{icon:"mdi-instagram",link:"https://www.instagram.com/liangjin_tan"}]);return(t,n)=>(H(),J(pt,{rounded:"",class:"bg-grey-lighten-1"},{default:b(()=>[o(ut,{justify:"center","no-gutters":""},{default:b(()=>[o(N,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/index"},{default:b(()=>[U("Home")]),_:1}),o(N,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/resume"},{default:b(()=>[U("Resume")]),_:1}),o(N,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/about"},{default:b(()=>[U("About Me")]),_:1}),o(N,{color:"white",variant:"text",class:"mx-2",rounded:"xl",to:"/contact"},{default:b(()=>[U("Contact Me")]),_:1}),o(de,{class:"text-center mt-4",cols:"12"},{default:b(()=>[(H(!0),xe(Ve,null,_e(s,a=>(H(),J(N,{key:a,class:"mx-4",icon:a.icon,href:a.link,variant:"text"},null,8,["icon","href"]))),128))]),_:1}),o(de,{class:"text-center mt-4",cols:"12"},{default:b(()=>[Se("strong",null,"All contents of this site, unless otherwise noted, are ©2000-"+we(new Date().getFullYear())+" Tan Liang Jin. All Rights Reserved.",1)]),_:1})]),_:1})]),_:1}))}};const Fe=I({text:String,...F(),...W()},"VToolbarTitle"),De=A()({name:"VToolbarTitle",props:Fe(),setup(e,s){let{slots:t}=s;return R(()=>{const n=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[n&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),xt=[null,"prominent","default","comfortable","compact"],je=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>xt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Te(),...F(),...Be(),...Ce(),...W({tag:"header"}),...se()},"VToolbar"),ye=A()({name:"VToolbar",props:je(),setup(e,s){var m;let{slots:t}=s;const{backgroundColorClasses:n,backgroundColorStyles:a}=Le(K(e,"color")),{borderClasses:l}=Ae(e),{elevationClasses:i}=Re(e),{roundedClasses:c}=Pe(e),{themeClasses:r}=ue(e),{rtlClasses:h}=Ie(),v=B(!!(e.extended||(m=t.extension)!=null&&m.call(t))),_=u(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=u(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return We({VBtn:{variant:"text"}}),R(()=>{var f;const V=!!(e.title||t.title),P=!!(t.image||e.image),k=(f=t.extension)==null?void 0:f.call(t);return v.value=!!(e.extended||k),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,l.value,i.value,c.value,r.value,h.value,e.class],style:[a.value,e.style]},{default:()=>[P&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(le,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(it,{key:"image-img",cover:!0,src:e.image},null)]),o(le,{defaults:{VTabs:{height:L(_.value)}}},{default:()=>{var w,$,z;return[o("div",{class:"v-toolbar__content",style:{height:L(_.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(w=t.prepend)==null?void 0:w.call(t)]),V&&o(De,{key:"title",text:e.title},{text:t.title}),($=t.default)==null?void 0:$.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(z=t.append)==null?void 0:z.call(t)])])]}}),o(le,{defaults:{VTabs:{height:L(y.value)}}},{default:()=>[o(vt,null,{default:()=>[v.value&&o("div",{class:"v-toolbar__extension",style:{height:L(y.value)}},[k])]})]})]})}),{contentHeight:_,extensionHeight:y}}}),Vt=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function _t(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let n=0;const a=Q(null),l=B(0),i=B(0),c=B(0),r=B(!1),h=B(!1),v=u(()=>Number(e.scrollThreshold)),_=u(()=>et((v.value-l.value)/v.value||0)),y=()=>{const m=a.value;!m||t&&!t.value||(n=l.value,l.value="window"in m?m.pageYOffset:m.scrollTop,h.value=l.value<n,c.value=Math.abs(l.value-v.value))};return Y(h,()=>{i.value=i.value||l.value}),Y(r,()=>{i.value=0}),ne(()=>{Y(()=>e.scrollTarget,m=>{var P;const V=m?document.querySelector(m):window;V&&V!==a.value&&((P=a.value)==null||P.removeEventListener("scroll",y),a.value=V,a.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),be(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",y)}),t&&Y(t,y,{immediate:!0}),{scrollThreshold:v,currentScroll:l,currentThreshold:c,isScrollActive:r,scrollRatio:_,isScrollingUp:h,savedScroll:i}}const St=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...je(),...Ne(),...Vt(),height:{type:[Number,String],default:64}},"VAppBar"),wt=A()({name:"VAppBar",props:St(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const n=Q(),a=tt(e,"modelValue"),l=u(()=>{var w;const f=new Set(((w=e.scrollBehavior)==null?void 0:w.split(" "))??[]);return{hide:f.has("hide"),inverted:f.has("inverted"),collapse:f.has("collapse"),elevate:f.has("elevate"),fadeImage:f.has("fade-image")}}),i=u(()=>{const f=l.value;return f.hide||f.inverted||f.collapse||f.elevate||f.fadeImage||!a.value}),{currentScroll:c,scrollThreshold:r,isScrollingUp:h,scrollRatio:v}=_t(e,{canScroll:i}),_=u(()=>e.collapse||l.value.collapse&&(l.value.inverted?v.value>0:v.value===0)),y=u(()=>e.flat||l.value.elevate&&(l.value.inverted?c.value>0:c.value===0)),m=u(()=>l.value.fadeImage?l.value.inverted?1-v.value:v.value:void 0),V=u(()=>{var $,z;if(l.value.hide&&l.value.inverted)return 0;const f=(($=n.value)==null?void 0:$.contentHeight)??0,w=((z=n.value)==null?void 0:z.extensionHeight)??0;return f+w});at(u(()=>!!e.scrollBehavior),()=>{lt(()=>{l.value.hide?l.value.inverted?a.value=c.value>r.value:a.value=h.value||c.value<r.value:a.value=!0})});const{ssrBootStyles:P}=$e(),{layoutItemStyles:k}=He({id:e.name,order:u(()=>parseInt(e.order,10)),position:K(e,"location"),layoutSize:V,elementSize:B(void 0),active:a,absolute:K(e,"absolute")});return R(()=>{const[f]=ye.filterProps(e);return o(ye,ie({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...k.value,"--v-toolbar-image-opacity":m.value,height:void 0,...P.value},e.style]},f,{collapse:_.value,flat:y.value}),t)}),{}}}),It=I({...rt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),kt=A()({name:"VAppBarNavIcon",props:It(),setup(e,s){let{slots:t}=s;return R(()=>o(N,ie(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),Tt=A()({name:"VAppBarTitle",props:Fe(),setup(e,s){let{slots:t}=s;return R(()=>o(De,ie(e,{class:"v-app-bar-title"}),t)),{}}}),Bt={__name:"Header",setup(e){const s=ot(),t=u(()=>s.path.replace("/","")),n=Q(""),{mobile:a}=nt();ne(()=>{n.value=t.value});const l=[{value:"index",text:"Home",icon:"mdi-home",textClass:"text-green",to:"/index"},{value:"resume",text:"Resume",icon:"mdi-file-account",textClass:"text-brown-darken-1",to:"/resume"},{value:"about",text:"About Me",icon:"mdi-information",textClass:"text-blue",to:"/about"},{value:"contact",text:"Contact Me",icon:"mdi-phone-incoming",textClass:"text-yellow-darken-4",to:"/contact"}];return(i,c)=>(H(),J(wt,{app:"",elevation:5},{default:b(()=>[Z(o(kt,null,{default:b(()=>[o(me,{icon:"mdi-human-greeting",color:"green-darken-4"})]),_:1},512),[[X,!q(a)]]),Z(o(Tt,{class:"text-deep-purple-lighten-2"},{default:b(()=>[U(" Hi, I'am LiangJin! A Full-Stack Developer. ")]),_:1},512),[[X,!q(a)]]),Z(o(fe,null,null,512),[[X,q(a)]]),o(ct,{modelValue:n.value,"onUpdate:modelValue":c[0]||(c[0]=r=>n.value=r)},{default:b(()=>[(H(),xe(Ve,null,_e(l,r=>o(N,{key:r.value,rounded:"xl",size:"large",class:st(r.textClass),value:r.value,to:r.to},{default:b(()=>[o(me,{icon:r.icon},null,8,["icon"]),Z(Se("span",null,we(r.text),513),[[X,!q(a)]])]),_:2},1032,["class","value","to"])),64))]),_:1},8,["modelValue"]),o(fe)]),_:1}))}};const Ct=I({...F(),...Me({fullHeight:!0}),...se()},"VApp"),Lt=A()({name:"VApp",props:Ct(),setup(e,s){let{slots:t}=s;const n=ue(e),{layoutClasses:a,layoutStyles:l,getLayoutItem:i,items:c,layoutRef:r}=Ee(e),{rtlClasses:h}=Ie();return R(()=>{var v;return o("div",{ref:r,class:["v-application",n.themeClasses.value,a.value,h.value,e.class],style:[l.value,e.style]},[o("div",{class:"v-application__wrap"},[(v=t.default)==null?void 0:v.call(t)])])}),{getLayoutItem:i,items:c,theme:n}}});const At=I({...F(),...Me()},"VLayout"),Rt=A()({name:"VLayout",props:At(),setup(e,s){let{slots:t}=s;const{layoutClasses:n,layoutStyles:a,getLayoutItem:l,items:i,layoutRef:c}=Ee(e);return R(()=>{var r;return o("div",{ref:c,class:[n.value,e.class],style:[a.value,e.style]},[(r=t.default)==null?void 0:r.call(t)])}),{getLayoutItem:l,items:i}}}),Nt={__name:"SandwichLayout",setup(e){return(s,t)=>(H(),J(Lt,null,{default:b(()=>[o(Rt,{class:"rounded rounded-md"},{default:b(()=>[o(Bt),o(q(yt))]),_:1}),o(bt)]),_:1}))}};export{Nt as default};