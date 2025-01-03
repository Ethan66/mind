const e="logicalStructure",r={data:{text:"申请借款页",expand:!0,isActive:!1,uid:"fb45168e-b854-4aaf-99a2-6cf0578b5548"},children:[{data:{text:"beforeRouteEnter",uid:"440cc8a0-d6fc-4ee5-89d3-147adcf9c89c",expand:!0,richText:!1,isActive:!1},children:[{data:{text:`fromPageStatus属性：
1. isFromConfirm：from.path == '/borrow/confirm'
2. finishBorrow：(fromPageStatus.isFromConfirm && from.query.isSubmit) || from.path == '/borrow/result'
3. hasCache：!(vm.showEnterLoading && fromPageStatus.isFromConfirm) // 确认借款进入客户端人脸，返回reload，数据丢失`,uid:"1da96cd1-0901-4797-af1e-253e55afc5cc",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#FA28FF",fillColor:"#fff",borderDasharray:"5,5",lineDasharray:"5,5",lineColor:"#FA28FF"},children:[]},{data:{text:`逻辑1：
fromPageStatus.finishBorrow == true：回app首页或回上一页
`,expand:!0,richText:!1,isActive:!1,uid:"561428e8-aee3-4f75-8f2e-3e6876254a27",borderWidth:1,borderColor:"#549688",fillColor:"#fff",icon:[],generalization:[{text:"return",range:null,uid:"2572a389-072d-467d-beb1-2cee086556f7",expand:!0,isActive:!1}]},children:[]},{data:{text:`逻辑2：
1. 判断from.name：
    1. if (from.name != '协议页、还款计划页、确认借款页') || (缓存数据已被清除)，页面重走handleInitGetInfo()
    2. else (from.name == '绑卡页面')，调用handleInitGetInfo(true)，获取最新的res.data，其他不走
    3. from.name == 会员绑卡，重新获取是否有卡，判断宝付支付弹窗的 绑卡有礼 是否显示
`,expand:!0,richText:!1,isActive:!1,uid:"622c3e7a-dde0-4e36-90f6-77ff61ab3a73",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`先享后付：
 1. firstEnjoy.showConfirmDialog = false // bug修复，从立即借款--先享后付挽留弹窗--放弃，到确认借款页，返回上一页，
     以上操作重复2次以上后，返回申请借款页莫名弹窗挽留弹窗 
  2. firstEnjoy.isFinishBind = false // 从确认借款页返回后，再提交，没有开启先享后付，还是要挽留一下`,expand:!0,richText:!1,isActive:!1,uid:"4b00150e-69d6-4c23-b863-a29c2ff88c93",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"主线",expand:!0,richText:!1,isActive:!1,uid:"b6a7c2e3-b81b-453c-9cee-87c1b2e12518",generalization:[{text:`handleGetBorrowAmountInfo（逻辑同上）

目标用户：多请求一个接口，获取利率列表：/borrow/rate/type
`,range:[2,3],uid:"5cf0dc47-b4a7-4820-9445-82e2ec7c03c5",expand:!0,isActive:!1,borderColor:"#AB149E",fillColor:"#AB149E",color:"#FFFFFF"}]},children:[{data:{text:`handleInitGetInfo (hasCache)
接口：borrow/getApplyBorrowInfo
`,uid:"0990be05-e1a5-4e39-b342-8bb0fe60fa10",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`hasCache == true：
  1. this.initData = res.data
   2. handleSaveCategory(this.initData)`,uid:"3e3766cb-73a2-4eb9-8695-daae4b5c87a5",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[{text:"return",range:null,uid:"91b77dd6-ab06-4d72-9d44-fc0253caac8a",expand:!0,isActive:!1}]},children:[]},{data:{text:`handleSetInterceptBack() // 设置返回拦截
handleGetBorrowNperAndUseOptions() // 获取借款期限和借款用途
handleInitBorrowNperAndUseValue() // 设置借款期限和借款用途
handleCapitalSetBorrowUseValue(this.category) // 特殊资方设置借款期限和借款用途
handleGetCurrentMode() // 获取模式：双融担|会员|先享后付
handleSetModeStatus(this.currentMode) // 根据模式设置对应状态
this.showMember && this.handleMemberGetResource() // 获取会员资源位
`,expand:!0,richText:!1,isActive:!1,uid:"680bc23c-d9d0-4aad-a1ed-6bf9df35e8ef",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`handleGetCurrentMode()
接口：/borrow/getFirstApplyInfo

this.currentMode = res.data.currentMode
this.handleFirstEnjoyInit(res.data.payUseInfo) // 初始化先享后付

响应字段：
  "currentMode": 2双融担、1||null正常, 
   "payUseInfo": 
      {            "status": 运营后台先享后付开关, data.status && !!data.interestImage才是真正的开启
         "imageUrl": "运营后台先享后付图片配置",
         "interestImage": "老后台资源位配置", 
          "payCardPrice": 价格,
          "payCardInfo": "卡说明"        }
`,uid:"7269f225-ac29-4cf6-b87a-96e726c6e682",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`handleSetModeStatus(this.currentMode)
1. 输入满额度金额
2. 改变showMember状态（是否请求会员的资源位接口）：
   只有先享后付开启后，showMember = false，其他情况都为true
`,expand:!0,richText:!1,isActive:!1,uid:"76c754b6-5655-4ec5-a5d5-63c689f7195c",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`code === 1815
页面：/rollback`,expand:!0,richText:!1,isActive:!1,uid:"9e5a7989-470b-4b44-a561-f8c3e357d2ac",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"输入金额",expand:!0,richText:!1,isActive:!1,uid:"71647d35-09c7-4398-9c00-260242737169",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`校验金额：
1. 替换非数字的值
2. 校验输入金额是否满足条件：
   1. 剩余可借 >= 最小金额(initData.creditAmount >= initData.minAmount)
   2. 100倍数
   3. amount >= initData.minAmount
   4. amount <= initData.minAmount`,uid:"7ef23317-e82e-4ad0-b474-7ab30de5d93c",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[{text:`handleGetBorrowAmountInfo
借款金额试算接口：/borrow/getBorrowAmountInfo

展示：列表内容、先享后付banner

响应数据：
1. monthRepay：首月应还金额
2. irr：综合年化利率
3. 其他字段：中原api协议合同需要展示
`,range:null,uid:"525171c6-ec12-443d-a224-18d280b26019",expand:!0,isActive:!1,borderColor:"#FA28FF",fillColor:"#AB149E",color:"#FFFFFF"}]},children:[]}]},{data:{text:"选择借款期限",expand:!0,richText:!1,isActive:!1,uid:"0af8f0df-17cf-4995-b869-4682166e2d6e",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:"选择综合年化费率（仅目标用户展示）",expand:!0,richText:!1,isActive:!1,uid:"1f72eaeb-e751-4b7a-aa87-741725197d08",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:"绑卡",expand:!0,richText:!1,isActive:!1,uid:"0db5fbfd-1dab-4b4d-9846-a7d207e9768e",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`新页面：
/borrow/bindbankcard
query.bankStatus：主卡标识，是主卡切卡成功要调换主卡接口
query.bankCard
query.currentMode：双融担`,uid:"1c0162a1-3572-4c21-b163-03774a96ba06",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"首期还款",expand:!0,richText:!1,isActive:!1,uid:"3ebf51c1-6093-4594-8ee6-f6ed613b618e",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`新页面（还款计划页）：
/repayment/plan
`,uid:"3722236d-68ec-40ab-97c2-524b3fb80b38",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"提交按钮",expand:!0,richText:!1,isActive:!1,uid:"32f74f71-dc60-448d-9308-e76e39dee702",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`提交去确认借款页：/borrow/confirm
query.currentMode
quey.repay：最后提交借款用的，包含amount、borrowNper、bankCard、repayDay、borrowUse、经纬度`,uid:"9a4d86d9-a6bb-42c8-b0a0-2eb8a79379ba",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"协议合同",expand:!0,richText:!1,isActive:!1,uid:"35372a2e-410c-4a78-b3f1-112b6d8adef3",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`1. 易借好贷审核版协议
2. 一般协议——《借款相关协议》——去列表/borrow/protocolList
3. 100000282协议——《个人信息承诺书》`,uid:"c1daace7-ea7b-4482-b463-d8f8bdb4d34a",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:"会员正常模式",expand:!0,richText:!1,isActive:!1,uid:"ba68dcaa-0616-4924-b55e-98b36fb6256a"},children:[{data:{text:"init",uid:"017eb078-d622-4eef-8f1d-688807cd8cd1",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"this.showMember && this.handleMemberGetResource() // 获取会员资源位",uid:"fb6b0939-18a5-4e3a-9280-34d8574f5bb2",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`handleMemberGetResource()
获取资源位接口：/app/getApplyBorrowPage
作用：
1. 易橙卡信息（根据this.showMember==true展示）
2. 获取非会员弹窗(中间弹窗)资源位（图片和跳转地址）、banner资源位信息（图片和跳转地址）、展示非会员弹窗

响应数据：
1. memberLevel：当前用户等级，0是非会员
2. list：
   1. code：applyBannerList（banner资源位）this.memberData = res.data.list[applyBannerList].list[0]
   2. code：on_vip_borrow_apply（非会员弹窗资源位）this.memberDialogData =res.data.list[on_vip_borrow_apply].list[0] 

memberLevel == 0 & this.memberDialogData.imageUrl，展示非会员弹窗(中间弹窗)

this.handleMemberBorrowTargetUser(true)
`,uid:"94d226ae-1860-4d0b-8ff0-33e51b5d4e07",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`handleMemberBorrowTargetUser()
目标用户接口：/borrow/target/user
作用：
1. 金尊卡信息（锡商网贷专用）
2. 展示可以选择的综合年化费率、展示卡信息入口、展示从下往上的金尊卡popup

响应数据：
1. isTarget：this.isMemberTarget，展示可以选择的综合年化费率（24|35）
2. showMemberContent：isShow & isTarget & isVisible & unSupProvice（运营后台助贷卡展示 & 目标用户 & 运营后台渠道可见 & 运营后台支持省份）：展示卡信息入口（协议上方）
3. isTargetUser：showMemberContent & !data.isHaveCard
4. if(data.isTarget & !data.showMemberContent) this.memberRateType = 1（选择的利率：1表示35,0表示24）
5. this.showMemberCardPopup = data.isTargetUser：展示从下往上的金尊卡popup（详情和金额从handleMemberBorrowTargetUserCard()获取）

this.handleMemberBorrowTargetUserCard()
`,expand:!0,richText:!1,isActive:!1,uid:"72fb942a-a333-4c4a-94db-e8a6cdace021",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`handleMemberBorrowTargetUserCard()
接口：/borrow/target/user/card
作用：
1. 金尊卡信息（锡商网贷专用）
2. 获取助贷卡金额和详情

响应数据：
1. this.memberDetail = res.data
2. saveInterest：节省金额（展示在协议上方）
3. 其他字段：展示在从下往上的金尊卡popup`,expand:!0,richText:!1,isActive:!1,uid:"e1e6c7fe-ac78-4948-a86f-34e2a39e843b",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]},{data:{text:"先享后付",expand:!0,richText:!1,isActive:!1,uid:"99f79983-57b1-4ad6-944d-ab26f0436ecd"},children:[{data:{text:`switch开关关闭：
1. 请求关闭接口：通知后端用户不要先享后付了
2. 提交借款：二次挽留弹窗`,uid:"0931132b-f2e0-4674-b3bd-bde0dc371994",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`先享后付绑卡
申请借款、首页进入`,expand:!0,richText:!1,isActive:!1,uid:"8e5a2ec2-b530-49ac-82ba-599539c7519d",borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[{text:`公共逻辑：
/borrow/mixins/first-enjoy.js

1. init请求/member/prepay/signModel接口：
   传参：borrowNo、cardNo、pageType:‘BORROW_APPLY_PAGE’
   响应参数：
    1. data.cardProtocols：委托扣款协议列表，存入localStorage中，/protocol/bindBankcardList页面使用
    2. data.memberProtocols：会员协议列表，展示在弹窗中
    3. data.bindCardNo：签约号，已签约才返回
    4. data.modelType: 0 || 1 || 2，未签约 || 已签约 || 相当于已签约（提交使用）
    5. data.bindUserCardId: （提交使用）
2. 发送短信验证码接口：/member/prepay/sign/apply
   传参：borrowNo, pageType: reqPageType, cardNo: this.cardNumber, bindCardNo: this.bindCardNo 
   响应参数：
    1. data.respDesc：三方返回错我数据
    2. data.bindCardNo：签约号
3. 提交接口：/member/prepay/sign/confirm
   传参：   borrowNo, pageType: reqPageType, modelType, bindUserCardId, bindCardNo, cardNo: bankcardNumber, validCode
   响应参数：   1. data.respDesc：三方返回错误数据
`,range:[0,2],uid:"ae47d7c3-9ead-47d4-8d9a-81b81d8e7eb1",expand:!0,isActive:!1}]},children:[{data:{text:`申请借款：
1. props: bankcardNumber、pageType
2. 用pageType换reqPageType =‘BORROW_APPLY_PAGE’

3. 提交接口完成后：firstEnjoy.isFinishBind = true; handleApplyMoney()
`,uid:"de59fcdc-4a08-4f48-a6d9-4b37aa839117",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`
`,expand:!0,richText:!1,isActive:!1,uid:"a63cf7a5-4b18-4966-bef7-52b378e7dbae",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`首页进入先享后付页面：
/unicom/member/fist-enjoy-bindcard

1. route.query: borrowNo
2. 请求接口用borrowNo，换bankcardNumber
3.提交完成：关闭webview `,expand:!0,richText:!1,isActive:!1,uid:"af608bee-5443-4683-91ab-9a320a194b2b",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`先享后付绑卡
提交结果页面`,expand:!0,richText:!1,isActive:!1,uid:"4f87fc61-4dee-4dfd-9302-3f5cc2db32b9",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`loading页面：（虽然是loading，其实没有倒计时）
1. 地址：/unicom/borrow/result/loading
2. query.code、query.borrowNo
3. 上一页面：借款确认页、认证页、中原api活体提交loading页
4. 上一页面最后提交/borrow/borrowPay接口：返回1000，统一进入/unicom/borrow/result/loading?code&borrowNo

created：
接口：/borrow/borrowConfirm/all/banner
响应参数：
  1. if (!data.isSign && data.isUsePay == 1)(未签约 & 先享后付开启)：展示先享后付广告位 (组件：dialog-first-enjoy-config.vue)
      else 去借款结果页
  2. data.payAfterBean.amount：先享后付金额
  3. data.payAfterBean.imageUrl：资源位图片
  4. data.payAfterBean.content：会员详情html
  5. data.popBanner.imageUrl：放弃挽留弹窗图片`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"38f6d555-c236-4d4f-8038-d036d4e1d20f"},children:[{data:{text:`组件：dialog-first-enjoy-config.vue
1. props.pageType：埋点使用
2. props.payAfterConfig：{          borrowNo,          payAfterBean,          popBanner }

确认按钮：
  1. 展示first-enjoy-bind-card.vue组件
放弃按钮：
   1. 出现挽留弹窗

终态：回借款结果页`,uid:"309146f3-5fb6-42d7-9566-b4e0f8505627",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`锡锡贷loading页：
1. 地址：/xxdborrow/loading
2. 每5s调接口/borrow/xsH5/isHaveXsH5Borrow，判断是否有data.isHave == true，true表示有借据号了
3. 有借据号调handleGetBanner()：
   请求/borrow/xsH5/afterPay/banner接口：
   1. if (!data.isSign && data.isShowPayAfter)（未签约 & 先享后付展示）：展示先享后付(组件：dialog-first-enjoy-config.vue)
      else 回首页
   2. data里有borrowNo和资源位信息

返回拦截：
1. 没有借据号：提示借款提交中
2. 有借据号：调handleGetBanner()
`,expand:!0,richText:!1,isActive:!1,uid:"3ece09d4-c903-424b-ae26-cc6a073f6174",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`借款结果页的banner
接口：borrowConfirm/banner

响应字段：
1. isVip: 是会员 == 不用进排队
2. isUsePay: 1，先享后付状态开启（等价于运营后台开关开启 && 资源位可见）
3. bannerList：需要展示的banner图片资源位
`,expand:!0,richText:!1,isActive:!1,uid:"88270a56-8477-40e2-aec3-288c13e1bed0",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`点击banner：（banner: 先享后付签约成功 | 先享后付购买入口 | 会员购买入口）
1. 点击埋点区分：购买先享后付和购买会员
2. 先享后付签约成功banner（isVip）：先享后付购买成功，不触发
3. 先享后付购买入口banner（isUsePay == 1 & !isVip）：可以购买先享后付，点击去弹窗
4. 会员购买入口banner（isUsePay == 0 & !isVip）：因为有banner，所以一定是会员购买流程，直接跳链接`,uid:"1fa655db-8a81-4859-987c-6aa6b29111c2",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`先享后付后台开关：
1. 运营后台-系统配置-会员卡快捷支付
2. 模式：
   1. 先付后享(金尊卡)（等于借款前置营销页）：杭金投、中原H5、长银H5、锡商网贷
   2. 先享后付(易橙卡)（申请借款页绑卡签约）：杭金投、中原api、长银api、大兴api、锡商网贷、兰州api
   3. 金尊卡：锡商网贷（申请借款页从下往上弹Popup）、其他api资方（先享后付不开启，展示中间banner弹窗）
   4. 杭金投：有先享后付和先付后享模式，所以杭金投的模式是二选一，因为先享后付和先付后享是互斥关系，假如开关状态选择暂停，进入申请维护页
   5. 小程序：没有会员&&没有先享后付，先享后付通过资源位渠道不可见来控制`,expand:!0,richText:!1,isActive:!1,uid:"db92564f-be6d-4510-8d43-8359b44722ac",borderWidth:1,borderColor:"#333333",fillColor:"#666666",fontWeight:"normal",color:"#FFFFFF"},children:[]}]},{data:{text:"双融担模式",expand:!0,richText:!1,isActive:!1,uid:"f4d7d84f-6207-4cb9-b359-e418dad07165"},children:[{data:{text:`双融担模式：
1. 资方：中原api，长银api、兰州api
2. 双融担和先付后享互斥（不过因为先付后享是营销前置页，不会进入申请借款页，所以没事），和先享后付可共存
3. 中原api、兰州api的所有合同（包括融资合同）需要填充，长银api的合同不需要填充
4. resource表里配置：配置关，对应资方直接进入申请维护页`,uid:"43782fd8-34a9-44b7-b351-8f93432903c6",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#000000",fillColor:"#666666",color:"#FFFFFF"},children:[]},{data:{text:`首期还款进入还款计划页面：/repayment/plan
query.currentMode

请求还款计划接口：/repay/getRepayPlan，新增currentMode
currentMode === 2：页面展示融资咨询服务费
`,expand:!0,richText:!1,isActive:!1,uid:"cabfe02e-37d5-4074-ac14-cac978fe149c",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`currentMode == 2：
1. 输入金额：可修改，不 默认填充
2. this.showMember = !this.firstEnjoy.status
`,expand:!0,richText:!1,isActive:!1,uid:"0b312f34-c001-4b94-9a22-ae75f90d0b87",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`输完金额请求借款金额试算接口：/borrow/getBorrowAmountInfo
新增字段：
currentMode：告诉后端是双融担模式，利率是融担费+利率`,expand:!0,richText:!1,isActive:!1,uid:"aa9ead18-f916-49fc-9017-0db96ee1c607",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`提交去确认借款页：/borrow/confirm
query.currentMode
`,expand:!0,richText:!1,isActive:!1,uid:"a96e3cc4-393d-4676-a5b5-ed51e15c68a0",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`确认借款页新增逻辑：
1. 请求还款计划接口：/repay/getRepayPlan：新增currentMode
2. 去账单详情页：query.currentModecurrentMode === 2：页面展示融资咨询服务费
3. 最后提交，发送验证码接口：/borrow/sendBorrowSms
   请求参数：
   borrowApply：借款数据，这样最后一步就不需要再提交借款数据
   if (extraParams.serialId) 人脸序列号，需要跳转活体页面
   else 弹出验证码弹窗`,uid:"b02728e7-9257-43bc-9872-558606da1ab0",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`活体页面
query.extraParams = { serialId、borrowNper、amount }
这些字段，/borrow/video-loading页面的/borrow/borrowPay接口需要用到，
所以要带到活体页面，活体页面在带到/borrow/video-loading页面`,uid:"362a6a29-c02a-4a16-bfbf-b5124a4091c4",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:`进入协议列表页面：/borrow/protocolList
1. query.currentMode == 2：当前是双融担模式，新增《融资咨询合同》`,expand:!0,richText:!1,isActive:!1,uid:"e3f7b07a-42f4-4006-9854-243072e10f29",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`进入协议模版页面：/borrow/protocolTemplate
query.isField = true
query.fieldData // 自动填充字段`,uid:"b1732786-e4b4-463f-9552-8f3024918aeb",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:"拦截页",expand:!0,richText:!1,isActive:!1,uid:"25c6cba4-c517-4245-aa39-8a2b05e047be"},children:[{data:{text:`查看结果页(/auth/getAmountFail)

状态：1. 授信被拒 2. 借款被拒 3. 当前资方有在贷
`,uid:"c1e4c956-328f-4f73-a041-42c457451e6b",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`点击button：
去贷超产品页借款`,uid:"ae2896db-cc86-4067-96a7-8ba38db1d56e",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`放款失败页（/borrow/withdraw）

状态：银行放款失败`,expand:!0,richText:!1,isActive:!1,uid:"a5c2f183-010e-40fc-8b36-d4e5bdf57562",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`点击button（/borrow/goBorrowPage接口）：
res.data.type、res.data.url字段：
1. type == 1 & url：三方url
2. type == 2 & url：自有H5
3. type == 3 & url：原生url
4. type == 4：回首页
5. 其他：/borrow/money`,uid:"ac7597e8-e793-4939-96ba-bb8ccb063c92",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]},a={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},t={transform:{scaleX:1,scaleY:1,shear:0,rotate:0,translateX:0,translateY:0,originX:0,originY:0,a:1,b:0,c:0,d:1,e:0,f:0},state:{scale:1,x:0,y:0,sx:0,sy:0}},o={layout:e,root:r,theme:a,view:t};export{o as default,e as layout,r as root,a as theme,t as view};
