const e="logicalStructure",t={data:{text:"半流程",expand:!0,isActive:!1,uid:"50fc324b-a968-41c8-a282-bfaf368cdd7f"},children:[{data:{text:`聚量宝登录页面：
页面：/guide/login?jumpData=eyJjaGFubmVsQ29kZSI6IkFQUF9MWl9KTEI4In0%3D
jumpData: { channelCode: 'APP_LZ_JLB8' }`,uid:"5fff3948-8326-4b62-b45f-b5dbe724ba0a",expand:!0,richText:!1,isActive:!1},children:[{data:{text:`登录成功到首页：
页面：/home/yjsd

进入和下拉刷新逻辑：
调接口：/user/getUserPushStatus
1. 获取授信额度data.amount || 200000，反显页面
2. data.pushStatus == 2，按钮变成授信中，按钮不可点
3. data.pushStatus == -1，授信失败，去失败页/auth/getAmountFail

点击立即借款按钮：
调接口：/user/getUserPushStatus
1. data.realStats == 0，去ocr
2. data.pushStatus
    -1：去失败页：/auth/getAmountFail
    0：一推：/auth/loading
    1：下载落地页：/auth/requireResult?amount=data.amount
    2：审核中，toast
`,uid:"16b524b4-a280-4a31-8c1c-5392241c7d90",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`下一页总结：
1. 一进页面：授信失败页 || 停留当前页
2. 点击借款按钮：授信失败页 || 一推 || 下载落地页 || ocr页`,uid:"607fc437-37f8-46a0-92b2-3d172bea55d6",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`一推页：
获取：this.result = localStorage.getItem('channel_router_fromPage')，'home_yjsd'：H5半流程, 'home_index': 全流程

下一页逻辑：
this.result == 'home_yjsd'：H5半流程
1. 接口没返回：从哪首页来回哪首页去
2. 有结果：
    1. 一推被拒，授信成功：/user/getUserPushStatus，去失败页 || 下载页
     2. 其他（一推维护、授信中等）：回首页`,expand:!0,richText:!1,isActive:!1,uid:"eaec9906-68bc-4f7b-a9c7-576a0fe323e0",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:`其他登录页面：
页面：/channelLogin?jumpData=eyJjaGFubmVsQ29kZSI6ICJBUFBfTFpfV1hGV0gifQ%3D%3D`,expand:!0,richText:!1,isActive:!1,uid:"17d8e4cc-cd5f-4370-8f8c-6e105396e4c1"},children:[]}]},a={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},n={transform:{scaleX:1,scaleY:1,shear:0,rotate:0,translateX:49,translateY:-31,originX:0,originY:0,a:1,b:0,c:0,d:1,e:49,f:-31},state:{scale:1,x:49,y:-31,sx:49,sy:-31}},o={layout:e,root:t,theme:a,view:n};export{o as default,e as layout,t as root,a as theme,n as view};
