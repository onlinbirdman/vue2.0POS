webpackJsonp([1],{102:function(t,o,s){function e(t){s(97)}var a=s(16)(s(76),s(104),e,"data-v-1ebf66d0",null);t.exports=a.exports},103:function(t,o,s){function e(t){s(99)}var a=s(16)(s(77),s(106),e,null,null);t.exports=a.exports},104:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),s("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),s("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),s("el-table-column",{attrs:{label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n    \t\t\t\t\t挂单\n    \t\t\t\t")]),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n    \t\t\t\t\t外卖\n    \t\t\t\t")])],1),t._v(" "),s("div",{staticClass:"totalDiv"},[s("p",[s("small",[t._v("数量：")]),t._v(t._s(t.totalCount))]),t._v(" "),s("p",[s("small",[t._v("金额：")]),t._v(t._s(t.totalMoney))])]),t._v(" "),s("div",{staticClass:"btns"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"},on:{click:function(o){t.delAllGoods()}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"},on:{click:function(o){t.checkout()}}},[t._v("结账")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v(t._s(o.price))])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("div",[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])])],1)],1)])],1)],1)},staticRenderFns:[]}},105:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{attrs:{id:"app"}},[s("leftNav"),t._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},staticRenderFns:[]}},106:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-zuanshi"}),t._v(" "),s("div",[t._v("统计")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),s("div",[t._v("设置")])])])])}]}},31:function(t,o,s){"use strict";var e=s(2),a=s(107),n=s(102),i=s.n(n);e.default.use(a.a),o.a=new a.a({routes:[{path:"/",name:"Pos",component:i.a}]})},33:function(t,o){},34:function(t,o,s){function e(t){s(98)}var a=s(16)(s(75),s(105),e,null,null);t.exports=a.exports},75:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(103),a=s.n(e);o.default={name:"app",components:{leftNav:a.a}}},76:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(56),a=s.n(e);o.default={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;a.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(o){console.log(o),t.oftenGoods=o.data}).catch(function(t){console.log(t)}),a.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(o){console.log(o),t.type0Goods=o.data[0],t.type1Goods=o.data[1],t.type2Goods=o.data[2],t.type3Goods=o.data[3]}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;console.log(t),document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){this.tableData.filter(function(o){return o.goodsId==t.goodsId})[0].count++}else{var e={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(e)}this.getAllMoney()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(o){t.totalCount+=o.count,t.totalMoney=t.totalMoney+o.price*o.count})},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢您的支持！",type:"success"})):this.$message.error("订单不能为空！")},delAllGoods:function(){this.totalCount=0,this.totalMoney=0,this.tableData=[]}}}},77:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"leftNav"}},78:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(2),a=s(34),n=s.n(a),i=s(31),l=s(32),c=s.n(l),d=s(33);s.n(d);e.default.config.productionTip=!1,e.default.use(c.a),new e.default({el:"#app",router:i.a,template:"<App/>",components:{App:n.a}})},97:function(t,o){},98:function(t,o){},99:function(t,o){}},[78]);
//# sourceMappingURL=app.52d218c06eb9290a4cfe.js.map