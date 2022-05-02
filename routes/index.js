//#region 
//引入客户端路由
//引入用户路由
const userRouter = require("./client/users");
//引入网站信息路由
const msgRouter = require("./client/message");
//引入商品路由
const clientShopRouter = require("./client/shop");
//引入购物车路由
const shopCartRouter = require("./client/shopCart");
//引入订单路由
const orderRouter = require("./client/order");
//#endregion



//#region 
//引入管理端路由

//引入管理员路由
const adminRouter = require("./admin/admin");
//引入品牌管理路由
const tradeRouter = require("./admin/trademark");
//引入商品分类路由
const shopCategoryRouter = require("./admin/shopCategory");
//引入角色管理路由
const roleRouter = require("./admin/role");
//引入属性管理路由
const attrRouter = require("./admin/attribute");
//引入spu管理
const spuRouter = require("./admin/spu");
//引入sku管理
const skuRouter = require("./admin/sku");
//引入权限管理
const permissionRouter = require("./admin/permission")
//#endregion

module.exports = {
  adminRouter,
  userRouter,
  tradeRouter,
  shopCategoryRouter,
  roleRouter,
  attrRouter,
  spuRouter,
  skuRouter,
  permissionRouter,
  msgRouter,
  clientShopRouter,
  shopCartRouter,
  orderRouter
}
