const e="logicalStructure",t={data:{text:"小程序首页",expand:!0,isActive:!1,uid:"82745926-0fa2-41be-ab60-ecc5a33f4727"},children:[{data:{text:"立即借款按钮",uid:"56b1fa3c-896d-4969-84e2-98bdd472c54e",expand:!0,richText:!1,isActive:!1},children:[{data:{text:"额度失效",uid:"01906df8-1d6b-4b1e-a2ff-30b918fa28b5",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`重走一推
（首页不用给弹窗，直接进）`,uid:"a0ac17e9-62bd-4b0f-8713-33638e2e8788",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`征信协议（/unicom/auth/loading）：
created：一推页面调接口判断要不要展示征信协议（接口：/app/show/agree）：
   1. data.needShow == 1：是新用户 || 老客征信开关打开，要展示协议
   2. data.needShow == 0：是老用户(借款笔数>=1) && 老客征信开关关闭，不要展示协议
`,expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff",uid:"1f8cb796-6c83-4943-bbb6-c8dcd0faa8b7"},children:[]},{data:{text:`一推：
1. 安卓调获取最新的环境参数，再走一推
2. 其他直接走一推

一推接口：/userAuth/realNameAuthentication 
全流程：
  1. if (data.firstPushStatus == 1) 回首页 
     else 去获取额度页面（/auth/getAmount）
   2. data.code == [1602, 1700]，一推被拒，去拒绝页（/auth/getAmountFail，全流程查贷超，半流程直接被拒）
   3. data.code == [10004, 1030]，一推维护中，回首页
   4. data.code == 1800，命中智选借款，去智选借款授信页`,expand:!0,richText:!1,isActive:!1,uid:"70c9c472-a7a1-4194-a0c0-9754d7b80f71",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]},{data:{text:"有在贷",uid:"479090f3-8a3c-474d-9c7c-b0ae0f916cb2",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:"当前资方在贷，进暂不可借页面",uid:"92f87adb-cc2b-4793-9979-87a6dca8f7f5",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[{data:{text:`暂不可借页面：（/auth/getAmountFail）
会调贷超页面，但是会返回空list
        

        
        
        `,uid:"69e57bbb-caae-41b9-9c27-55a5b01245dd",expand:!0,richText:!1,isActive:!1,borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]},{data:{text:"当前资方无在贷，去正常流程",expand:!0,richText:!1,isActive:!1,uid:"c5ec8e1f-8465-4a58-a3be-03b701597ed0",borderWidth:1,borderColor:"#549688",fillColor:"#fff"},children:[]}]}]}]},a={template:"default",config:{associativeLineTextFontSize:13,root:{fontSize:14},node:{fontSize:13},generalization:{fontSize:13},second:{fontSize:13}}},d={transform:{scaleX:1.2,scaleY:1.2,shear:0,rotate:0,translateX:-150.9714285714287,translateY:-.6857142857143401,originX:0,originY:0,a:1.2,b:0,c:0,d:1.2,e:-150.9714285714287,f:-.6857142857143401},state:{scale:1.2,x:-150.9714285714287,y:-.6857142857143401,sx:-150.9714285714287,sy:-.6857142857143401}},r={layout:e,root:t,theme:a,view:d};export{r as default,e as layout,t as root,a as theme,d as view};
