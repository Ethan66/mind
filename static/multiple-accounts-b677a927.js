const e="logicalStructure",a={data:{text:"多账号",expand:!0,isActive:!1,uid:"99f5fe2d-eeae-4dc7-a799-25e60f5d1885"},children:[{data:{text:"H5",uid:"13fe70f0-6b9c-4711-b6f3-c3b29dd40d61",expand:!0,richText:!1,isActive:!1},children:[{data:{text:`H5首页：
接口：/app/act/isMulPhones
`,uid:"5925fbf6-de8d-4d94-8ca7-49dcd6ea9b7a",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"1. 选择非当前号（current == 0）：提示退出登录",uid:"6111dd5e-8039-4fa3-ae16-767f85ec150a",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[]},children:[]},{data:{text:`2. 选择当前号&是主号（isMain == 1）：
  调接口/app/act/changeAccount，通知后端清空其他账号数据，刷新页面`,expand:!0,richText:!1,isActive:!1,uid:"e70c92bc-7278-468e-89a8-e8459e96b1c0",borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[]},children:[]},{data:{text:`3. 选择当前号&非主号：
   跳页面：/auth/validateuser
   query.user：/app/act/isMulPhones接口的响应数据
`,expand:!0,richText:!1,isActive:!1,uid:"0d394dfa-778c-4983-95c0-f241bc883f8a",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`页面：/auth/validateuser
1. 人脸认证
2. 短信认证：有主号才展示，发送验证码到主号的手机上`,uid:"c4e957d3-137f-4f59-9d1b-a9ccf8670d8c",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#009CE0",fillColor:"#009CE0",color:"#FFFFFF"},children:[{data:{text:"回首页",uid:"ed3736e6-4bc1-4cf1-a107-c24b586bd9cb",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[]},children:[]}]}]}]}]},{data:{text:"小程序",expand:!0,richText:!1,isActive:!1,uid:"fc3100a6-1268-468c-8c87-e92b896c98b3"},children:[{data:{text:`小程序首页：
接口：/app/act/isMulPhones`,uid:"c513c54c-3b75-402d-8640-12a30aa61764",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`1. 选择当前号&是主号（isMain == 1）：
   调接口/app/act/changeAccount，通知后端清空其他账号数据，刷新页面`,uid:"75c7fd9d-3f25-41e1-a82d-abfcfa0be679",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`2. 其他：
   跳页面：/auth/validateuser
   query.chooseUserId`,expand:!0,richText:!1,isActive:!1,uid:"cf1dcba9-45b6-4ba9-84e0-51230e0f6f87",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`页面：/auth/validateuser
调接口：/app/act/isMulPhones，通过query.chooseUserId找到账号信息，用户姓名和主号手机号码
1. 人脸认证
2. 短信认证：有主号才展示，发送验证码到主号的手机上`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#009CE0",fillColor:"#009CE0",color:"#FFFFFF",uid:"68c368a7-38d5-4657-8142-bef2f898533b"},children:[{data:{text:"回首页",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[],uid:"55cee55f-6dab-474b-aa9a-d184331c41bf"},children:[]}]}]}]}]}]},t={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},r={transform:{scaleX:1,scaleY:1,shear:0,rotate:0,translateX:87,translateY:-71,originX:0,originY:0,a:1,b:0,c:0,d:1,e:87,f:-71},state:{scale:1,x:87,y:-71,sx:87,sy:-71}},i={layout:e,root:a,theme:t,view:r};export{i as default,e as layout,a as root,t as theme,r as view};
