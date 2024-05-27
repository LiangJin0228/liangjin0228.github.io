import{V as H,a as B}from"./VRow-9c5b880f.js";import{m as S,u as j}from"./scopeId-b952f69d.js";import{p as F,g as N,B as $,q as I,n as _,r as T,o as c,i as f,a as e,w as t,F as g,j as z,c as y,C as L,h as r,l as d,x,z as M}from"./index-1d2db783.js";import{V as h,a as V,b as w,c as C}from"./VCard-7cedf590.js";import{j as O,V as k}from"./VImg-fb614492.js";import{V as W}from"./forwardRefs-ca977b54.js";import{V as v}from"./VBtn-170e1722.js";import{V as E}from"./VDialog-b35b92f7.js";const G="/assets/National_Taiwan_Normal_University_logo.svg-c8ea965b.png",R="/assets/foonyewlogo-fec8ab2e.png",U="/assets/ocsaLogo-5cd49fe9.png",Y="/assets/GraduationPromParty-41ac0172.png",q="/assets/msa-bfdca77e.png",A=F({disabled:Boolean,modelValue:{type:Boolean,default:null},...S()},"VHover"),J=N()({name:"VHover",props:A(),emits:{"update:modelValue":a=>!0},setup(a,i){let{slots:o}=i;const s=$(a,"modelValue"),{runOpenDelay:u,runCloseDelay:p}=j(a,l=>!a.disabled&&(s.value=l));return()=>{var l;return(l=o.default)==null?void 0:l.call(o,{isHovering:s.value,props:{onMouseenter:u,onMouseleave:p}})}}}),K=["href"],Q={methods:{changeScrollDirections(a){a.preventDefault();const i=a.deltaY,o=this.$refs.info.$el;o&&o.scrollBy({left:i})}}},X=Object.assign(Q,{__name:"HomeCard",props:{my_cards:Array},setup(a){const i=a,{mobile:o}=I(),s=_(!1),u=_({});function p(l){s.value=!0,u.value=l}return(l,m)=>{const D=T("v-card-action");return c(),f(g,null,[e(k,{style:{"max-width":"1280px"}},{default:t(()=>[e(H,{ref:"info",class:"flex-nowrap overflow-x-auto hide-scrollbar mt-15 justify-start",onWheel:l.changeScrollDirections},{default:t(()=>[(c(!0),f(g,null,z(i.my_cards,n=>(c(),y(B,{key:n.title},{default:t(()=>[e(J,null,{default:t(({isHovering:b,props:P})=>[e(h,L({class:"mx-auto pa-5 rounded-xl","max-width":"344",width:"23rem",height:"35rem",ref_for:!0},P),{default:t(()=>[e(O,{src:n.img_path,"aspect-ratio":"1",height:"15rem",class:"ma-15 elevation"},null,8,["src"]),e(V,{class:"text-h5 text-primary text-wrap",style:{"line-height":"1.5"}},{default:t(()=>[r(d(n.unit),1)]),_:2},1024),e(w,{class:"text-h5 text-primary text-wrap",style:{"line-height":"1.5"}},{default:t(()=>[r(d(n.title),1)]),_:2},1024),e(W,{"model-value":b,contained:"",scrim:"#7986CB",class:"align-center justify-center"},{default:t(()=>[e(v,{color:"success",onClick:Z=>p(n)},{default:t(()=>[r("See more info")]),_:2},1032,["onClick"])]),_:2},1032,["model-value"])]),_:2},1040)]),_:2},1024)]),_:2},1024))),128))]),_:1},8,["onWheel"])]),_:1}),e(E,{modelValue:s.value,"onUpdate:modelValue":m[1]||(m[1]=n=>s.value=n),transition:"dialog-top-transition",persistent:""},{default:t(()=>[e(h,{width:x(o)?"80vw":"50vw",class:"ma-auto pa-5 rounded-lg",style:{"max-width":"720px"}},{default:t(()=>[e(C,{class:"text-h5 h-75"},{default:t(()=>[r(d(u.value.content)+" ",1),u.value.link?(c(),f("a",{key:0,href:u.value.link},d(u.value.link),9,K)):M("",!0)]),_:1}),e(D,{class:"d-flex justify-center"},{default:t(()=>[e(v,{size:"x-large",rounded:"xl",color:"primary",onClick:m[0]||(m[0]=n=>s.value=!1)},{default:t(()=>[r("close")]),_:1})]),_:1})]),_:1},8,["width"])]),_:1},8,["modelValue"])],64)}}}),ie={__name:"Home",setup(a){const i=_([{img_path:G,unit:"國立臺灣師範大學教育政策與行政研究所",title:"全端工程師",content:"使用現代前後端框架Laravel及Vue,建制及維護教育支持系統。 專任助理(資訊類約用人員)網頁程式開發及研究、功能開發、資料庫維護、定期開發進度報告"},{img_path:R,unit:"Foon Yew High School",title:"Information Resources Department staff",content:"資訊助理,技術支援：負責協助教職員解決軟體、硬體、網際網路、使用或設置（系統/軟件）等相關問題。軟體相關：負責電腦還原系統設置（使用 Faronics Deep Freeze),進行 Windows 及各軟體重大補丁更新，維護電腦系統及軟體。硬體相關：負責電腦組裝、各類多媒體教學設備等的檢查及維修工作，並進行弱電整合安裝施工。    網路相關：負責解決網路（有綫/ 無綫）無法連接問題、進行 Network switch 檢查維護、進行 IP 分配及檢查(當時全校電腦要從本來的固定IP轉爲DHCP)"},{img_path:U,unit:"國立臺灣科技大學僑生聯誼社",title:"副會長",content:"109、110屆副社長,任職期間策劃及舉辦超過10次中大型活動、創建資訊部門、建立形象網站與活動網站設計、與組員協作開發新功能。同時也是111年度應届畢業僑外籍生畢業晚會活動共同負責人"},{img_path:Y,unit:"僑外籍生畢業晚會活動",title:"負責人",content:"僑外籍生畢業晚會活動 活動策劃人。 負責公關組、資訊開發組、活動策劃。 台科大首次舉辦【僑外籍生畢業晚會】，當天活動氣氛十分熱鬧，活動圓滿結束。",link:"https://sites.google.com/view/2023-ntust-osgp/home"},{img_path:q,unit:"國立臺灣科技大學馬來西亞同學會",title:"公關組組長、活動組員",content:"108屆歡送會公關應届畢業生資料搜集及聯係對外廠商聯係。109屆新生輔導小組公關、迎新活動游戲策劃組統整來臺資訊,持續更新注意事項負責迎活動内容策劃及場控"}]);return(o,s)=>(c(),y(k,null,{default:t(()=>[e(h,{color:"rgba(0,0,0,0)",class:"elevation-15 rounded-xl",style:{"backdrop-filter":"blur(4px)"}},{default:t(()=>[e(V,{class:"text-h2 ma-2",style:{"line-height":"1.5"}},{default:t(()=>[r("陳亮憬")]),_:1}),e(w,{class:"text-h5 ma-2",style:{"line-height":"1.3"}},{default:t(()=>[r("全端工程師")]),_:1}),e(C,{class:"text-h5 ma-2",style:{"line-height":"1.3"}},{default:t(()=>[r(" 大家好，我是一名全端開發人員，熱衷於編碼和批判性思維。我樂於解決覆雜的問題，並將抽象的想法轉化為實際的現實應用。我的適應能力和創造力促使我不斷提高自己的技能，為我所在的任何團隊貢獻價值。 ")]),_:1})]),_:1}),e(x(X),{my_cards:i.value},null,8,["my_cards"])]),_:1}))}};export{ie as default};
