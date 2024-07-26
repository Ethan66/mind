const e="logicalStructure",r={data:{text:"绑卡",expand:!0,isActive:!1,uid:"cf049080-8d6e-4865-8312-1f07c6404983"},children:[{data:{text:"添加卡",uid:"a21b98fd-f051-4d35-a3ea-e4e961451cb4",expand:!0,richText:!1,isActive:!1},children:[{data:{text:"init",uid:"ff44e3bb-aa09-4f5b-830b-1f0413b3feeb",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`获取历史卡和资方协议：
接口：/userAuth/otherBindingCardList
参数：
currentMode、category
响应字段：
otherBindingCardList：历史卡
protocolRespList：协议
`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"2cf4c001-ec2d-4135-ad28-52e4bcfac9fc"},children:[]},{data:{text:`获取用户姓名：
接口：/user/getUserInfo`,expand:!0,richText:!1,isActive:!1,uid:"99b23eda-b25a-442f-bd5a-6f278ea27686",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"填写卡号 / 小图标选历史卡",expand:!0,richText:!1,isActive:!1,uid:"8661320d-ae0c-4c5c-8314-77807c51d0f0",borderWidth:1,borderColor:"#549688",fillColor:"#fff",generalization:[{text:`接口：/userAuth/checkBankCard
响应数据：
bankCode，缓存住，最后提交校验用
注：这是辅助接口，大不了用户手动选择银行名称`,range:[0,1],uid:"95666099-e28e-4f00-8667-e8ea6edeb4ec",expand:!0,isActive:!1,borderColor:"#000000",borderDasharray:"5,5"}]},children:[{data:{text:`填卡：
请求接口——自动填充银行名称、获取bankCode
`,uid:"7b48375a-9230-4beb-9d68-3232e98e3259",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]},{data:{text:`小图标选历史卡：
1. 自动填充信息：bankCode、bankName、cardNumber、mobile
2. 请求接口——自动填充银行名称、获取bankCode（注：感觉多余）`,expand:!0,richText:!1,isActive:!1,uid:"7a2e00ab-3b6c-4d83-a29a-05d34aec72fc",borderWidth:1,borderColor:"#549688",fillColor:"#fff",note:""},children:[]}]},{data:{text:"提交",expand:!0,richText:!1,isActive:!1,uid:"1f54f78d-44e2-4308-8018-d1c803f5af05",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`校验：
1. 正常非空校验
2. 手机号校验
3. 缓存的bankCode和用户手动选择的bankCode校验一致性，防止用户乱选银行名称`,uid:"8d5dd528-c0d0-40ad-8a74-a5243ad55fb3",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`公共方法：handleGetVerify()
请求接口判断是否需要获取验证码：
/userAuth/smsVerification

响应数据：
0. requestId、bankId：验证码流水号和银行卡id，校验用的
1. smsNeedStatus == 1（未绑定我方支付通道，需要申请我方支付通道绑卡申请）：
   验证码发送、弹出验证码弹窗
2. smsNeedStatus == 2（已绑定我方支付通道，未绑定资方支付通道，需要申请资方支付通道绑卡申请）：
   直接再请求一遍/userAuth/smsVerification，传参一样。
   响应数据：
   1. smsNeedStatus == 1（未绑定资方支付通道，需要申请资方支付通道绑卡申请）：
    验证码发送、弹出验证码弹窗
    2. smsNeedStatus == 2（已绑定资方支付通道，绑卡成功）：返回上一页——end`,uid:"4cfd6dbc-3e79-4244-99f0-3e42b7e1ccf0",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#0C797D",fillColor:"#0C797D",color:"#FFFFFF"},children:[{data:{text:`校验验证码：
接口：/userAuth/checkSmsVerification
传参：
requestId、currentMode、bankId、mobile、smscode

响应逻辑：
if (isRepeatSend)（未绑定资方支付通道）：继续handleGetVerify()
else（已绑定资方支付通道）：
    if (this.mainCardStatus = true)：切换主卡：接口（/userAuth/changeMainCard）`,uid:"33e88b71-2630-46f9-a051-679b882b3cad",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"返回上一页——end",uid:"03650051-f74c-411d-b399-d21bc8311095",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]}]}]},{data:{text:"选卡",expand:!0,richText:!1,isActive:!1,uid:"677c84b7-1dae-4820-8a69-19a20c36314b"},children:[{data:{text:"init",uid:"a8c3cb34-31fe-4767-8fb7-42b30bea68a6",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`获取当前资方绑定的银行卡：
接口：/userAuth/wpayBindCardList

响应逻辑：
遍历响应数据：route.query.bankCard == item.cardNumber，默认勾选上`,uid:"69c70c13-cfa0-4e17-abf5-8fb65c4c48a7",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"提交",expand:!0,richText:!1,isActive:!1,uid:"5438c5a9-1e8d-4c64-aa48-022790403d1f",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`mainCardStatus == 1：
原卡是主卡：调切换主卡接口：/userAuth/changeMainCard

!mainCardStatus：
原卡是非主卡：调换切卡接口：/userAuth/chooseCard`,uid:"6cfc8b09-8cc4-4e04-a581-88ccf498be40",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"返回上一页——end",uid:"6a0786cb-527b-4462-ab06-6e7d5a879c67",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]}]},t={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},a={transform:{scaleX:.4573308657207485,scaleY:.45733086572074844,shear:0,rotate:0,translateX:389.9999999999998,translateY:222.44015502929688,originX:0,originY:0,a:.4573308657207485,b:0,c:0,d:.4573308657207485,e:389.9999999999998,f:222.44015502929688},state:{scale:.4573308657207485,x:389.9999999999998,y:222.44015502929688,sx:389.9999999999998,sy:222.44015502929688}},d={layout:e,root:r,theme:t,view:a};export{d as default,e as layout,r as root,t as theme,a as view};
