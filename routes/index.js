//引入管理员路由
const adminRouter = require("./admin");
//引入用户路由
const userRouter = require("./users");
//引入品牌管理路由
const tradeRouter = require("./trademark");
//引入商品分类路由
const shopCategoryRouter = require("./shopCategory");
//引入角色管理路由
const roleRouter = require("./role");
//引入属性管理路由
const attrRouter = require("./attribute");
//引入spu管理
const spuRouter = require("./spu");
//引入sku管理
const skuRouter = require("./sku");
//引入权限管理
const permissionRouter = require("./permission")

const msgRouter = require("./message")

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
  msgRouter
}
