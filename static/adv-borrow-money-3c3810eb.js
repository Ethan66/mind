const e="logicalStructure",a={data:{text:"根节点",expand:!0,isActive:!1,uid:"3d55f05f-7828-43de-97be-c98c07ecd1d3"},children:[{data:{text:`默认值调整：
1. 还款方式选项默认隐藏
2. 还款计划选项默认隐藏
3. hasCategory=true`,uid:"cda6cce4-ba11-4ff8-a0df-3720535cd186",expand:!0,richText:!1,isActive:!1},children:[]},{data:{text:`created钩子：
1.资方是ADV_API_YQH：hasCategory=false，展示还款方式`,expand:!0,richText:!1,isActive:!1,uid:"cb5a5e57-e945-458f-b330-de2939d6fdc9"},children:[]},{data:{text:`init函数apiAdvGetBorrowInfo：
1.YQH: res.data.productInfo根据还款方式维度展示对应的利率和期数（只有一个还款方式会默认选择还款方式）
2. YQH: 有还款方式会调handleGetRateAndLoanPeriod，显示期数选项（默认选择最大期数），显示还款计划选项
3. YQH: 有借款期限，调用handleGetPlanData，获取借款计划
4. hasCategory===true调用协议接口

5. 自动提交：route上自带isFinishVideo会自动走onSubmit`,expand:!0,richText:!1,isActive:!1,uid:"0b8daa74-4567-48bd-bd1d-0f8bbca2ea76"},children:[]},{data:{text:`事件：修改借款金额onChangeAmount：
1. 只有借款期数存在存在的时候才会获取还款计划handleGetPlanData`,expand:!0,richText:!1,isActive:!1,uid:"845b48d0-80c1-412d-a027-78c95fdbf92e"},children:[]},{data:{text:`事件：修改还款方式：
1. 重新获取利率、期数、还款计划handleGetRateAndLoanPeriod、handleGetPlanData`,expand:!0,richText:!1,isActive:!1,uid:"4ada691c-339d-4ecb-8d84-e0d92eac10f9"},children:[]},{data:{text:`事件：绑卡
1. 没有bankcardNumber，所以用bankcardId代替`,expand:!0,richText:!1,isActive:!1,uid:"9269cf80-d654-40f6-870f-f83e8ed341fa"},children:[]},{data:{text:"YQH第一次提交：匹配资方",expand:!0,richText:!1,isActive:!1,uid:"d14a329c-75c8-4f51-98ed-03d81c619da0"},children:[{data:{text:`事件：提交onSubmit:
1. handleGetCategory(): 调用apiAdvMatchCategory，根据接口判断是否需要倒计时
`,uid:"bc2aecbd-e7d6-422d-9259-2d85d6952ded",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`1. 需要倒计时：展示倒计时弹窗：match-loading-dialog.vue，轮询调用apiAdvMatchCategoryResult获取结果，res.data.result=true表示有结果，emit('handleFinishGetCategory')回调数据，进入匹配到资方流程

2. 不需要倒计时：直接进入匹配到资方流程`,uid:"3e5eb027-8575-4437-9259-8cffa68b1f11",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:" 匹配到资方流程：回调数据存入this.borrowApplyCategoryParams，调协议接口、hasCategory = true",uid:"af19cdf5-2226-48ee-aa3a-24f542461393",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]},{data:{text:"YQH同意协议（不能修改任何数据），第二次提交",expand:!0,richText:!1,isActive:!1,uid:"4b61459c-0471-4664-826e-3eaa451efa97"},children:[{data:{text:`事件：提交onSubmit:
1. 判断this.borrowApplyCategoryParams是否有face_check且route.isFinishVideo=false`,uid:"702d68c7-7349-4450-b70c-7818a3328c52",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"是：走人脸。",uid:"7727dd24-4bb7-4bef-8add-f71f64a2b5f9",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"extraParams新增creditH5Url字段，后端判断有creditH5Url直接返回给客户端，客户端再打开新webview跳回到当前页面，route后+了isFinishVideo，走init(money)逻辑",uid:"23096e1c-ca77-450f-ace7-3ad93498bf2e",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"否：请求apiAdvSendBorrowSms接口判断是否需要短信验证，完成借款",expand:!0,richText:!1,isActive:!1,uid:"ca8926f9-b56d-4e25-9271-6830cd3c0ad9",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]},t={template:"default",config:{}},d={transform:{scaleX:.7,scaleY:.7,shear:0,rotate:0,translateX:81.72777777777671,translateY:264.0444444444444,originX:0,originY:0,a:.7,b:0,c:0,d:.7,e:81.72777777777671,f:264.0444444444444},state:{scale:.7,x:81.72777777777671,y:264.0444444444444,sx:-140.2722222222233,sy:80.04444444444442}},r={layout:e,root:a,theme:t,view:d};export{r as default,e as layout,a as root,t as theme,d as view};
