const e="logicalStructure",a={data:{text:"推广",expand:!0,isActive:!1,uid:"63a877b0-03a7-4b43-9008-400257c47072"},children:[{data:{text:"mixins",expand:!0,richText:!1,isActive:!1,uid:"6478e3f9-86a9-40cf-aa5d-6162341fc14f"},children:[{data:{text:`created:
接口：/mini/program/half/jump/channel

响应：
1. if (data.ios == '1' || data.and == '1')：handleGetSchemeUrl()（跳小程序）
2. else if (andChannel.includes(query.channelCode) || iosChannel.includes(query.channelCode))：handleGetSchemeUrl()（跳小程序）
3. else 跳app utils/openOrdownloadApp()

handleGetSchemeUrl()：
获取小程序链接
接口：/mini/program/getSchemeUrl
返回SchemeUrl，进行跳转`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#73D8FF",fillColor:"#009CE0",fontWeight:"normal",color:"#FFFFFF",uid:"866b0a5e-75b6-4ddb-949b-bebe8f5f895f"},children:[]}]},{data:{text:"易花花",expand:!0,richText:!1,isActive:!1,uid:"f091aefa-3093-4b73-87f0-1d240a858a45"},children:[{data:{text:`app、小程序推广落地页

1. 短信推广：
地址：https://lth5.yijiesudai.com/unicom/yhh/download/sms?channelCode=XXX\uFEFF
注：H5可以直接进入小程序、app。但是在微信浏览器上打开H5页面，展示遮罩层 (防止H5地址被封)
`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"e59daac1-f690-410d-a1fe-d584d5b65638",generalization:[{text:"mixins",range:null,uid:"7432f129-0d1c-4ff4-ba6f-6bb685878d39",expand:!0,isActive:!1,fillColor:"#009CE0",borderColor:"#73D8FF",color:"#FFFFFF"}]},children:[]}]},{data:{text:"易借速贷",expand:!0,richText:!1,isActive:!1,uid:"403c73f9-53b9-4519-91a2-412fb0adbbff",generalization:[{text:"mixins",range:[0,1],uid:"dad772c9-cc2d-4bcf-a501-de09c80246fe",expand:!0,isActive:!1,fillColor:"#009CE0",borderColor:"#73D8FF",color:"#FFFFFF"}]},children:[{data:{text:`微信下载落地页
地址：https://lth5.yijiesudai.com/unicom/wxtemplate/download?style=XXXX
注：在微信浏览器上打开H5页面，展示遮罩层 (防止H5地址被封)`,uid:"11cbc028-d74d-4ce6-9c1b-639d0fe99fff",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`app短信推广：
地址：https://lth5.yijiesudai.com/unicom/download/sms`,expand:!0,richText:!1,isActive:!1,uid:"39096bde-37ed-440e-8f3e-80235b80d91e",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},t={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},i={transform:{scaleX:1,scaleY:1,shear:0,rotate:0,translateX:242,translateY:-119,originX:0,originY:0,a:1,b:0,c:0,d:1,e:242,f:-119},state:{scale:1,x:242,y:-119,sx:271,sy:-10}},d={layout:e,root:a,theme:t,view:i};export{d as default,e as layout,a as root,t as theme,i as view};
