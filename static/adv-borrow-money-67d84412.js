const e="logicalStructure",a={data:{text:"根节点",expand:!0,isActive:!1,uid:"3d55f05f-7828-43de-97be-c98c07ecd1d3"},children:[{data:{text:`默认值调整：
1. 还款方式选项默认隐藏
2. 还款计划选项默认隐藏
3. hasCategory=true`,uid:"cda6cce4-ba11-4ff8-a0df-3720535cd186",expand:!0,richText:!1,isActive:!1},children:[]},{data:{text:`created钩子：
1. 资方是YQH：展示还款方式，隐藏借多久，hasCategory=false（因为有钱花还要选择子资方）
2. this.$data = localStorage.getItem('adv_borrow_data') // 跳转到其他页面要缓存数据
3. 调用init()`,expand:!0,richText:!1,isActive:!1,uid:"cb5a5e57-e945-458f-b330-de2939d6fdc9"},children:[]},{data:{text:`init函数
接口：/adv/borrow/goBorrow：
传参：
selectCardNumber：localStorage.getItem('') || this.$route.query.cardNumber // 因为智选绑卡支持三方页面
selectBankCardId：localStorage.getItem('') // 只有自有页面的id才有用，所以不用router

响应：
1. data.maintainStatus：系统维护中
2. minAvailableQuota：最小金额、availableQuota：最大可借金额、productName：资方（中文）
3. data.bankcard：null表示没有银行卡
4. data.bindBankcardNeedRedirect && data.bindBankcardUrl：绑卡需要跳转三方链接
5. data.popData：会员弹窗数据
if(有钱花)：
    1. data.productInfo：数组集合：repayMethod：还款方式，loanPeriods：期数，rate：利息（只有一个还款方式默认选上）
    2. 有还款方式，执行handleGetRateAndLoanPeriod(this.productInfo[this.formData.repayMethod])
    3. 有借款期限，调用handleGetPlanData()，获取借款计划
    4. hasCategory===true调用协议接口
else {
    执行handleGetRateAndLoanPeriod(data)
}
执行handleGetOptions()方法：
接口：/adv/auth/getPageDiction
目的：获取贷款用途
if (选择了期数)：this.handleGetPlanData(money || this.maxAmount)，得到还款计划

6. 自动提交：if (money && this.$route.query.isFinishVideo) onSubmit()`,expand:!0,richText:!1,isActive:!1,uid:"0b8daa74-4567-48bd-bd1d-0f8bbca2ea76"},children:[]},{data:{text:`handleGetRateAndLoanPeriod(data, isReset):
1. 展示利率选项、期数选项
2. 期数设置options
3. isReset：修改还款方式，将期数设置为最大值
调用钩子：init()中选择还款方式、修改还款方式`,expand:!0,richText:!1,isActive:!1,uid:"57416f69-cc35-415b-ba6f-23faf2dd9908"},children:[]},{data:{text:`handleGetPlanData()：
展示还款计划
接口：/adv/borrow/loanCalculation
传参：资方，期数，借款金额，还款方式

调用钩子：init()中选择了期数，修改借款金额，修改了期数、修改还款方式`,expand:!0,richText:!1,isActive:!1,uid:"28fc9345-9120-4907-9147-e3c620960e50"},children:[]},{data:{text:`事件：修改借款金额onChangeAmount：
借款期数存在 && handleGetPlanData()`,expand:!0,richText:!1,isActive:!1,uid:"845b48d0-80c1-412d-a027-78c95fdbf92e"},children:[]},{data:{text:`事件：修改期数onConfirmPicker：
handleGetPlanData()`,expand:!0,richText:!1,isActive:!1,uid:"f1a13e6b-eb2b-481c-88e2-596f89ca15f2"},children:[]},{data:{text:`事件：修改还款方式：
1. 重新获取利率、期数、还款计划handleGetRateAndLoanPeriod、handleGetPlanData`,expand:!0,richText:!1,isActive:!1,uid:"4ada691c-339d-4ecb-8d84-e0d92eac10f9"},children:[]},{data:{text:`事件：绑卡
1. 没有bankcardNumber，所以用bankcardId代替`,expand:!0,richText:!1,isActive:!1,uid:"9269cf80-d654-40f6-870f-f83e8ed341fa"},children:[]},{data:{text:`事件：提交
方法：onSubmit()
1. 没绑卡先跳绑卡
2. 校验选项
3. if (有钱花 & !hasCategory) {
    // 开始匹配资方
     return handleGetCategory()
   3.1：接口：/adv/borrow/match/fund
       if (data.result === 'WAIT')：展示弹窗，轮询10s，调/adv/borrow/match/result接口，有值执行handleFinishGetCategory(res.data)
       else if ( data.verifyList)：handleFinishGetCategory(res.data)

    3.2. handleFinishGetCategory(data)
       handleGetProtocols()：获取协议：接口：/adv/protocol/advProtocolList
       this.hasCategory = true
       this.borrowApplyCategoryParams = data.verifyList
} else {
    // 真正提交借款
    4. 是否需要做人脸：if (this.borrowApplyCategoryParams.includes('FACE_CHECK') && !this.$route.query.isFinishVideo) {
        return switchAction('video', \`extraParams=\${extra}&next=no\`, { product: 'adv' })
    }
    5. 调短信验证码：/adv/borrow/sendBorrowSms：判断是否需要输入验证码
    6. 发送短信验证码：handleApplyBorrow(ob)：接口：/adv/borrow/submitBorrow
}
`,expand:!0,richText:!1,isActive:!1,uid:"f30ea2d0-9b9a-46c3-9293-551fab91bbae"},children:[]},{data:{text:"YQH第一次提交：匹配资方",expand:!0,richText:!1,isActive:!1,uid:"d14a329c-75c8-4f51-98ed-03d81c619da0"},children:[{data:{text:`事件：提交onSubmit:
1. handleGetCategory(): 根据接口判断是否需要倒计时
`,uid:"bc2aecbd-e7d6-422d-9259-2d85d6952ded",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`1. 需要倒计时：
    展示倒计时弹窗：match-loading-dialog.vue，轮询调用/adv/borrow/match/result，res.data.result=true表示有结果，emit('handleFinishGetCategory')回调数据，完成资方匹配

2. 不需要倒计时：完成资方匹配`,uid:"3e5eb027-8575-4437-9259-8cffa68b1f11",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:"YQH同意协议（不能修改任何数据），第二次提交",expand:!0,richText:!1,isActive:!1,uid:"4b61459c-0471-4664-826e-3eaa451efa97"},children:[{data:{text:`事件：提交onSubmit:
1. 判断this.borrowApplyCategoryParams是否有face_check且route.isFinishVideo=false`,uid:"702d68c7-7349-4450-b70c-7818a3328c52",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"是：走人脸。",uid:"7727dd24-4bb7-4bef-8add-f71f64a2b5f9",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"extraParams新增creditH5Url字段，后端判断有creditH5Url直接返回给客户端，客户端再打开新webview跳回到当前页面，route后+了isFinishVideo，走init(money)逻辑",uid:"23096e1c-ca77-450f-ace7-3ad93498bf2e",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"否：请求apiAdvSendBorrowSms接口判断是否需要短信验证，完成借款",expand:!0,richText:!1,isActive:!1,uid:"ca8926f9-b56d-4e25-9271-6830cd3c0ad9",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]},t={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},d={transform:{scaleX:.6000000000000001,scaleY:.6000000000000001,shear:0,rotate:0,translateX:251.7499999999999,translateY:613.4999999999995,originX:0,originY:0,a:.6000000000000001,b:0,c:0,d:.6000000000000001,e:251.7499999999999,f:613.4999999999995},state:{scale:.6000000000000001,x:251.7499999999999,y:613.4999999999995,sx:251.7499999999999,sy:613.4999999999995}},r={layout:e,root:a,theme:t,view:d};export{r as default,e as layout,a as root,t as theme,d as view};
