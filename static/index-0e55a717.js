import{ap as g,r as V,a9 as R,V as L,g as i,c as p,e as w,k as D,a2 as P,Y as O,as as k,at as C,d as $,aq as z,av as S,D as B,o as q,bE as Y,I as E,w as h,bF as N,ay as X,az as e,bB as F,N as U,$ as Z,an as G,l as H,am as I,bA as J}from"./index-3ba13f9c.js";import{b as v,m as A,c as K,l as j}from"./mind-map-2d3c97ca.js";const T=c=>(k("data-v-b67d5951"),c=c(),C(),c),Q=T(()=>D("span",{class:"name"},"适应画布",-1)),W=T(()=>D("span",{class:"desc"},"Ctrl + i",-1)),ee=[Q,W],te={__name:"detail-context-menu",setup(c){const d=V(!1),a=R({left:0,top:0,mosuedownX:0,mosuedownY:0});let s=!1;const t=([o]=[])=>{o.which===3&&(a.mosuedownX=o.clientX,a.mosuedownY=o.clientY,s=!0)},r=([o]=[])=>{if(s){if(s=!1,Math.abs(a.mosuedownX-o.clientX)>3||Math.abs(a.mosuedownY-o.clientY)>3){l();return}f([o])}},f=([o]=[])=>{a.left=o.clientX+10,a.top=o.clientY+10,d.value=!0},l=()=>{d.value=!1,a.left=0,a.top=0};return v.on("svg_mousedown",t),v.on("mouseup",r),L(()=>{v.off("svg_mousedown",t),v.off("mouseup",r)}),(o,m)=>i(d)?(p(),w("div",{key:0,class:"contextmenuContainer listBox",style:P({left:i(a).left+"px",top:i(a).top+"px"})},[D("div",{class:"item",onClick:m[0]||(m[0]=()=>{i(A).v.view.fit(),l()})},[...ee])],4)):O("",!0)}},oe=g(te,[["__scopeId","data-v-b67d5951"],["__file","D:/Ethan/myCode/my-work/unicom-mind-map/src/views/detail/detail-context-menu.vue"]]),ne={class:"detail-page"},ae={style:{position:"absolute",right:"10px",display:"flex","z-index":"100"}},ie=$({__name:"index",setup(c){const d=z(),a=S();let s=d.path.replace(/^\/(([a-zA-Z-]+?\/)+)([a-z-A-Z]+)$/g,"$3");s=s.replace("/","");const t=R({current:d.query.commitId||"",options:[]});(()=>{const _=Object.assign({"/src/mindData/adv-borrow-money.json":()=>e(()=>import("./adv-borrow-money-67d84412.js"),[]),"/src/mindData/borrow-bindbankcard_zyapi.json":()=>e(()=>import("./borrow-bindbankcard_zyapi-728730f5.js"),[]),"/src/mindData/borrow-money_xianxianghoufu.json":()=>e(()=>import("./borrow-money_xianxianghoufu-b7fd9469.js"),[]),"/src/mindData/borrow-money_xxdxianxianghoufu.json":()=>e(()=>import("./borrow-money_xxdxianxianghoufu-95e3a933.js"),[]),"/src/mindData/guide_juliangbao.json":()=>e(()=>import("./guide_juliangbao-3399ed88.js"),[]),"/src/mindData/home.json":()=>e(()=>import("./home-514ac9fb.js"),[]),"/src/mindData/multiple-accounts.json":()=>e(()=>import("./multiple-accounts-afb3bc50.js"),[]),"/src/mindData/operation-download.json":()=>e(()=>import("./operation-download-c5ce4e34.js"),[]),"/src/mindData/wx-min.json":()=>e(()=>import("./wx-min-9740c300.js"),[])});t.options=Object.keys(_).filter(n=>n.includes(`/${s}_`)).map(n=>n.replace(new RegExp(`.+${s}_(\\w+)\\.json`),"$1")),d.query.commitId||(t.options.length&&(t.current=t.options[0]),a.push({path:d.path,query:{commitId:t.current}}))})(),B(()=>t.current,()=>{l()}),q(()=>{l()});const r=V(!1);let f={json:null};const l=()=>{clearTimeout(o);const _=Object.assign({"../../mindData/adv-borrow-money.json":()=>e(()=>import("./adv-borrow-money-67d84412.js"),[]),"../../mindData/borrow-bindbankcard_zyapi.json":()=>e(()=>import("./borrow-bindbankcard_zyapi-728730f5.js"),[]),"../../mindData/borrow-money_xianxianghoufu.json":()=>e(()=>import("./borrow-money_xianxianghoufu-b7fd9469.js"),[]),"../../mindData/borrow-money_xxdxianxianghoufu.json":()=>e(()=>import("./borrow-money_xxdxianxianghoufu-95e3a933.js"),[]),"../../mindData/guide_juliangbao.json":()=>e(()=>import("./guide_juliangbao-3399ed88.js"),[]),"../../mindData/home.json":()=>e(()=>import("./home-514ac9fb.js"),[]),"../../mindData/multiple-accounts.json":()=>e(()=>import("./multiple-accounts-afb3bc50.js"),[]),"../../mindData/operation-download.json":()=>e(()=>import("./operation-download-c5ce4e34.js"),[]),"../../mindData/wx-min.json":()=>e(()=>import("./wx-min-9740c300.js"),[])}),n=`../../mindData/${s+(t.current?"_"+t.current:"")}.json`;_[n]().then(x=>{r.value=!0,f.json=x.default})};Y(()=>{r.value&&(K({el:document.querySelector("#mindMapContainer")}),A.v.setFullData(f.json))});let o=null;const m=()=>{r.value&&(r.value=!1,o=setTimeout(l,300))};v.on("renderMindMap",m),window.addEventListener("resize",m),L(()=>{window.removeEventListener("resize",m)});const y=_=>{j.remove("data"),j.remove("editing"),a.push({name:"edit",query:{operateType:_,pageName:s,commitId:t.current}})};return(_,n)=>{const x=J,M=F,b=U;return p(),w("div",ne,[D("div",ae,[E(M,{modelValue:i(t).current,"onUpdate:modelValue":n[0]||(n[0]=u=>i(t).current=u),style:{"margin-right":"10px",width:"150px"},placeholder:"commitId",onChange:n[1]||(n[1]=()=>{r.value=!1,_.$router.push({path:_.$route.path,query:{commitId:i(t).current}})})},{default:h(()=>[(p(!0),w(Z,null,G(i(t).options,u=>(p(),H(x,{key:u,label:u,value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),E(b,{type:"primary",icon:i(N),onClick:n[2]||(n[2]=u=>y("add"))},{default:h(()=>[I("新 增")]),_:1},8,["icon"]),E(b,{type:"warning",icon:i(X),onClick:n[3]||(n[3]=u=>y("edit"))},{default:h(()=>[I("编 辑")]),_:1},8,["icon"])]),E(oe),i(r)?(p(),w("div",{id:"mindMapContainer",key:i(t).current})):O("",!0)])}}});const de=g(ie,[["__file","D:/Ethan/myCode/my-work/unicom-mind-map/src/views/detail/index.vue"]]);export{de as default};