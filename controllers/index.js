const admin = require('./admin');
const user = require("./user");
const trademark = require("./trademark");
const shopCategory = require("./shopCategory");
const role = require("./role");
const attribute = require("./attribute")
const sku = require("./sku")
const spu = require("./spu")
module.exports = {
    admin,
    user,
    trademark,
    shopCategory,
    role,
    attribute,
    spu,
    sku
}

// 常见的属性
// console.log(ctx.request.body);
// { username: '叶敏', password: 'laborum sint non in mollit' }

