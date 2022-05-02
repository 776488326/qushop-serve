//#region 
//引入客户端数据模型

//引入用户数据模型
const userModel = require("./client/user")
//引入网站信息模型
const msgModel = require("./client/message")
//引入购物车模型
const shopCartModel = require("./client/shopCart")
//引入订单模型
const orderModel = require("./client/order")
//#endregion


//#region 
//引入管理端数据模型

//引入管理员数据模型
const adminModel = require("./admin/admin")
//引入商品分类数据模型
const shopCategoryModel = require("./admin/shopCategory")
//引入品牌管理数据模型
const traMarkModel = require("./admin/trademark")
//引入角色管理数据模型
const roleModel = require("./admin/roles")
//引入属性管理数据模型
const attrModel = require("./admin/attribute")
//引入spu管理数据模型
const spuModel = require("./admin/spu")
//引入sku管理数据模型
const skuModel = require("./admin/sku")
//引入权限管理数据模型
const permissionModel = require("./admin/permission")
//#endregion


module.exports = {
    adminModel,
    userModel,
    traMarkModel,
    shopCategoryModel,
    roleModel,
    attrModel,
    spuModel,
    skuModel,
    permissionModel,
    msgModel,
    shopCartModel,
    orderModel
}