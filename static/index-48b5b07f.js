import{ap as V,r as g,a9 as M,V as R,g as s,c as p,e as E,k as y,a2 as P,Y as L,as as k,at as C,d as $,aq as z,av as S,D as B,o as q,bD as Y,I as w,w as D,bE as N,bF as X,bB as n,bz as F,N as U,$ as Z,an as G,l as H,am as I,by as J}from"./index-cea39767.js";import{b as v,m as O,c as K,l as j}from"./mind-map-1a260c51.js";import"./index-eff5d367.js";const T=c=>(k("data-v-b67d5951"),c=c(),C(),c),Q=T(()=>y("span",{class:"name"},"适应画布",-1)),W=T(()=>y("span",{class:"desc"},"Ctrl + i",-1)),ee=[Q,W],oe={__name:"detail-context-menu",setup(c){const i=g(!1),a=M({left:0,top:0,mosuedownX:0,mosuedownY:0});let d=!1;const e=([o]=[])=>{o.which===3&&(a.mosuedownX=o.clientX,a.mosuedownY=o.clientY,d=!0)},r=([o]=[])=>{if(d){if(d=!1,Math.abs(a.mosuedownX-o.clientX)>3||Math.abs(a.mosuedownY-o.clientY)>3){l();return}f([o])}},f=([o]=[])=>{a.left=o.clientX+10,a.top=o.clientY+10,i.value=!0},l=()=>{i.value=!1,a.left=0,a.top=0};return v.on("svg_mousedown",e),v.on("mouseup",r),R(()=>{v.off("svg_mousedown",e),v.off("mouseup",r)}),(o,m)=>s(i)?(p(),E("div",{key:0,class:"contextmenuContainer listBox",style:P({left:s(a).left+"px",top:s(a).top+"px"})},[y("div",{class:"item",onClick:m[0]||(m[0]=()=>{s(O).v.view.fit(),l()})},[...ee])],4)):L("",!0)}},te=V(oe,[["__scopeId","data-v-b67d5951"],["__file","D:/Ethan/myCode/my-work/unicom-mind-map/src/views/detail/detail-context-menu.vue"]]),ne={class:"detail-page"},ae={style:{position:"absolute",right:"10px",display:"flex"}},se=$({__name:"index",setup(c){const i=z(),a=S(),d=i.path.replace(/^\/(([a-zA-Z-]+?\/)+)([a-z-A-Z]+)$/g,"$3"),e=M({current:i.query.commitId||"",options:[]});(()=>{const _=Object.assign({"/src/mindData/aa.json":()=>n(()=>import("./aa-d923ee77.js"),[]),"/src/mindData/adv-borrow-money.json":()=>n(()=>import("./adv-borrow-money-3c3810eb.js"),[]),"/src/mindData/borrow-bindbankcard_zyapi.json":()=>n(()=>import("./borrow-bindbankcard_zyapi-728730f5.js"),[]),"/src/mindData/borrow-money.json":()=>n(()=>import("./borrow-money-00d3d38a.js"),[]),"/src/mindData/borrow-money_aaaa.json":()=>n(()=>import("./borrow-money_aaaa-92bf782d.js"),[]),"/src/mindData/borrow-money_abc.json":()=>n(()=>import("./borrow-money_abc-f5d27344.js"),[]),"/src/mindData/borrow-money_xianxianghoufu.json":()=>n(()=>import("./borrow-money_xianxianghoufu-b3414409.js"),[])});e.options=Object.keys(_).filter(t=>t.includes(`/${d}_`)).map(t=>t.replace(new RegExp(`.+${d}_(\\w+)\\.json`),"$1")),i.query.commitId||(e.options.length&&(e.current=e.options[0]),a.push({path:i.path,query:{commitId:e.current}}))})(),B(()=>e.current,()=>{l()}),q(()=>{l()});const r=g(!1);let f={json:null};const l=()=>{clearTimeout(o);const _=Object.assign({"../../mindData/aa.json":()=>n(()=>import("./aa-d923ee77.js"),[]),"../../mindData/adv-borrow-money.json":()=>n(()=>import("./adv-borrow-money-3c3810eb.js"),[]),"../../mindData/borrow-bindbankcard_zyapi.json":()=>n(()=>import("./borrow-bindbankcard_zyapi-728730f5.js"),[]),"../../mindData/borrow-money.json":()=>n(()=>import("./borrow-money-00d3d38a.js"),[]),"../../mindData/borrow-money_aaaa.json":()=>n(()=>import("./borrow-money_aaaa-92bf782d.js"),[]),"../../mindData/borrow-money_abc.json":()=>n(()=>import("./borrow-money_abc-f5d27344.js"),[]),"../../mindData/borrow-money_xianxianghoufu.json":()=>n(()=>import("./borrow-money_xianxianghoufu-b3414409.js"),[])}),t=`../../mindData/${d+(e.current?"_"+e.current:"")}.json`;_[t]().then(b=>{r.value=!0,f.json=b.default})};Y(()=>{r.value&&(K({el:document.querySelector("#mindMapContainer")}),O.v.setFullData(f.json))});let o=null;const m=()=>{r.value&&(r.value=!1,o=setTimeout(l,300))};v.on("renderMindMap",m),window.addEventListener("resize",m),R(()=>{window.removeEventListener("resize",m)});const h=_=>{j.remove("data"),j.remove("editing"),a.push({name:"edit",query:{operateType:_,pageName:d,commitId:e.current}})};return(_,t)=>{const b=J,A=F,x=U;return p(),E("div",ne,[y("div",ae,[w(A,{modelValue:s(e).current,"onUpdate:modelValue":t[0]||(t[0]=u=>s(e).current=u),style:{"margin-right":"10px",width:"150px"},placeholder:"commitId",onChange:t[1]||(t[1]=()=>{r.value=!1,_.$router.push({path:_.$route.path,query:{commitId:s(e).current}})})},{default:D(()=>[(p(!0),E(Z,null,G(s(e).options,u=>(p(),H(b,{key:u,label:u,value:u},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),w(x,{type:"primary",icon:s(N),onClick:t[2]||(t[2]=u=>h("add"))},{default:D(()=>[I("新 增")]),_:1},8,["icon"]),w(x,{type:"warning",icon:s(X),onClick:t[3]||(t[3]=u=>h("edit"))},{default:D(()=>[I("编 辑")]),_:1},8,["icon"])]),w(te),s(r)?(p(),E("div",{id:"mindMapContainer",key:s(e).current})):L("",!0)])}}});const _e=V(se,[["__file","D:/Ethan/myCode/my-work/unicom-mind-map/src/views/detail/index.vue"]]);export{_e as default};
