//#region 
//引入客户端控制器

//引入用户控制器
const user = require("./client/user");
//引入网站信息控制器
const message = require("./client/message")
//引入商品控制器
const shop = require("./client/shop")
//引入购物车控制器
const shopCart = require("./client/shopCart")
//引入订单控制器
const order = require("./client/order")
//#endregion

//#region 
//引入管理端控制器

//引入管理员控制器
const admin = require('./admin/admin');
//引入品牌管理控制器
const trademark = require("./admin/trademark");
//引入商品分类控制器
const shopCategory = require("./admin/shopCategory");
//引入角色管理控制器
const role = require("./admin/role");
//引入属性管理控制器
const attribute = require("./admin/attribute")
//引入sku管理控制器
const sku = require("./admin/sku")
//引入spu管理控制器
const spu = require("./admin/spu")
//引入权限管理控制器
const permission = require("./admin/permission")
//#endregion



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
    message,
    shop,
    shopCart,
    order
}



// 常见的属性
// console.log(ctx.request.body);
// { username: '叶敏', password: 'laborum sint non in mollit' }

