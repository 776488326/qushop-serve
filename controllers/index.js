//引入管理员控制器
const admin = require('./admin');
//引入用户控制器
const user = require("./user");
//引入品牌管理控制器
const trademark = require("./trademark");
//引入商品分类控制器
const shopCategory = require("./shopCategory");
//引入角色管理控制器
const role = require("./role");
//引入属性管理控制器
const attribute = require("./attribute")
//引入sku管理控制器
const sku = require("./sku")
//引入spu管理控制器
const spu = require("./spu")
//引入权限管理控制器
const permission = require("./permission")

const message = require("./message")
module.exports = {
    admin,
    user,
    trademark,
    shopCategory,
    role,
    attribute,
    spu,
    sku,
    permission,
    message
}

// 常见的属性
// console.log(ctx.request.body);
// { username: '叶敏', password: 'laborum sint non in mollit' }

