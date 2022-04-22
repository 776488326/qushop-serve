//引入管理员数据模型
const adminModel = require("./admin")
//引入用户数据模型
const userModel = require("./user")
//引入商品分类数据模型
const shopCategoryModel = require("./shopCategory")
//引入品牌管理数据模型
const traMarkModel = require("./trademark")
//引入角色管理数据模型
const roleModel = require("./roles")
//引入属性管理数据模型
const attrModel = require("./attribute")
//引入spu管理数据模型
const spuModel = require("./spu")
//引入sku管理数据模型
const skuModel = require("./sku")
//引入权限管理数据模型
const permissionModel = require("./permission")

const msgModel = require("./message")
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
    msgModel
}