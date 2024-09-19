const e="logicalStructure",t={data:{text:"小程序首页",expand:!0,isActive:!1,uid:"82745926-0fa2-41be-ab60-ecc5a33f4727"},children:[{data:{text:`调首页接口：
小易金选：/mini/program/wxUser/index
易花花：/xcx/yhh/wxUser/index

1. token有传是登录状态，返回1004登录失效，删除storage_user_info重新请求一遍
2. 无token不传，获取未登录的数据`,expand:!0,richText:!1,isActive:!1,uid:"5e28ccc5-abc7-4e8e-be53-365bde942841"},children:[{data:{text:`响应数据：
loginStatus：1:是登录
multiple: 是否是多账号
authAmount：额度
homeTip：年化利息
`,uid:"cb2c6214-e48e-4322-9855-77c1c770c5b6",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`loginStatus == 1：
获取地理位置`,uid:"38c1d18e-08b8-4706-9439-e69fa339243d",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:`获取地理位置
（登录状态才执行）`,expand:!0,richText:!1,isActive:!1,uid:"24d91f1d-a109-4688-9cb1-edc6fb252534"},children:[{data:{text:`1. 没有授权不用获取
2. 未超过24小时不用获取`,uid:"b09a0df6-cbc2-4948-9cdf-a3b46a5a831d",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:`立即借款按钮
1. 页面：
    ocr页面(未授信)、授信失败页、
    借还记录(即将放款)、二推被拒页、一推页面
2. 下载页
3. 提示文案：
   一推维护中、二推维护中、借款维护中、登录失效`,expand:!0,richText:!1,isActive:!1,uid:"9b605d56-782a-411f-81f6-9d09583f8da2"},children:[{data:{text:`接口：/mini/program/wxUser/goBorrow

响应数据：
if (data.canNext) // 可以往下走
  data.url：// 跳转地址（ocr页面(未授信)、授信失败页、借还记录(即将放款)、二推被拒页）
else if (data.noNextType) // 去下载页面
else // 报错弹窗（一推维护中、二推维护中、借款维护中）

code码字典：
1. 重新获取首页接口：
   1636：二推审核中&待放款
   10004：一推审核中
2. 身份证失效，去做OCR：
    1641：OCR即将过期
    1643：OCR已过期
3. 做一推：
   1642：已授信（一推）且额度已失效
4. 重新登录：
   1001：登录失效`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#009CE0",color:"#FFFFFF",uid:"d7917391-0742-4410-996d-f64cb49fb293"},children:[{data:{text:"新用户",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"78d81154-3a55-44d7-8a86-24b31a8a7612"},children:[{data:{text:"ocr——> 一推——> 申请借款",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"57b1bbff-2720-4219-99b0-e773ee21b66e"},children:[]}]},{data:{text:"额度失效",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"365e218d-f3b3-401f-9f0d-c91158f2a646"},children:[{data:{text:`重走一推
（首页不用给弹窗，直接进页面：/unicom/auth/loading）`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"4fa94116-5b3a-4e35-badd-83d80aad7f05"},children:[{data:{text:`征信协议：
created：一推页面调接口判断要不要展示征信协议（接口：/app/show/agree）：
   1. data.needShow == 1：是新用户 || 老客征信开关打开，要展示协议
   2. data.needShow == 0：是老用户(借款笔数>=1) && 老客征信开关关闭，不要展示协议
`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"709b35e6-1ee6-4ad2-b1de-d5e1178ba629"},children:[]},{data:{text:`一推：
1. 安卓调获取最新的环境参数，再走一推
2. 其他直接走一推

一推接口：/userAuth/realNameAuthentication 
全流程：
  1. if (data.firstPushStatus == 1) 回首页 
     else 去获取额度页面（/auth/getAmount）
   2. data.code == [1602, 1700]，一推被拒，去拒绝页（/auth/getAmountFail，全流程查贷超，半流程直接被拒）
   3. data.code == [10004, 1030]，一推维护中，回首页
   4. data.code == 1800，命中智选借款，去智选借款授信页`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"4131ecc2-32bd-4e4c-94dc-c63ade1c38e9"},children:[]}]}]},{data:{text:"有在贷",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"9082a495-1db4-4480-854f-b6ec08ccde0e"},children:[{data:{text:"当前资方在贷",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"6df5cfb0-ab68-4328-b155-e0d493e819c5"},children:[{data:{text:`1. 无智选借款，进暂不可借页面：（/auth/getAmountFail）
会调贷超页面，但是会返回空list
`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"6c373429-09ac-4660-9bee-2f29b57c730b"},children:[]},{data:{text:"2. 有智选借款，进智选借款页",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"19ebd919-43ab-47d7-bcde-48af8a58d85c"},children:[]}]},{data:{text:"当前资方无在贷，去正常流程",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"1d167af4-1606-4924-a7a4-ce4043e9c90c"},children:[{data:{text:`1. 中原H5、长银H5：ios：提示暂不支持，and：app下载引导页引导下载
2. 中原API，大兴API，杭金投：允许进入
3. 锡锡贷：1）额度失效，判断人脸是否认证，未认证先做人脸，已认证则进入锡商个人信息页；
                 2）额度有效，直接进入锡锡贷借款申请页面
3. 锡商网贷：允许进入`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"80200388-f714-4af1-a798-c5d75faa8c7c"},children:[]}]}]}]}]},{data:{text:"首页所有按钮",expand:!0,richText:!1,isActive:!1,uid:"e0543925-8f69-4cb1-8b75-94f5f3060c84"},children:[{data:{text:"都要先登录才能执行",uid:"1d178a6d-046e-4b19-b6c7-1a8dac11b9da",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},a={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},d={transform:{scaleX:1,scaleY:1,shear:0,rotate:0,translateX:-534,translateY:-172,originX:0,originY:0,a:1,b:0,c:0,d:1,e:-534,f:-172},state:{scale:1,x:-534,y:-172,sx:-193,sy:-142}},r={layout:e,root:t,theme:a,view:d};export{r as default,e as layout,t as root,a as theme,d as view};
