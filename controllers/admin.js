//引入管理员集合
const { adminModel, roleModel } = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
//对管理员集合进行操作

//添加管理员
const adminReg = async (ctx) => {
    try {
        const { username, password } = ctx.request.body;
        const exit = await adminModel.findOne({ username });
        if (!exit) {
            let admin = ctx.request.body;
            if (admin.username == 'admin') {
                admin = {
                    "username": username,
                    "password": password,
                    "routes": [
                        "ActivityEdit",
                        "Product",
                        "Activity",
                        "Attr",
                        "Permission",
                        "Spu",
                        "Order",
                        "ActivityRule",
                        "Role",
                        "RoleAuth",
                        "Refund",
                        "User",
                        "Category",
                        "Discount",
                        "string",
                        "CouponRule",
                        "CouponAdd",
                        "Trademark",
                        "ActivityAdd",
                        "CouponEdit",
                        "OrderShow",
                        "UserList",
                        "ClientUser",
                        "Acl",
                        "OrderList",
                        "Sku"
                    ],
                    "buttons": [
                        "cuser.detail",
                        "cuser.update",
                        "cuser.delete",
                        "btn.User.add",
                        "btn.User.remove",
                        "btn.User.update",
                        "btn.User.assgin",
                        "btn.Role.assgin",
                        "btn.Role.add",
                        "btn.Role.update",
                        "btn.Role.remove",
                        "btn.Permission.add",
                        "btn.Permission.update",
                        "btn.Permission.remove",
                        "btn.Activity.add",
                        "btn.Activity.update",
                        "btn.Activity.rule",
                        "btn.Coupon.add",
                        "btn.Coupon.update",
                        "btn.Coupon.rule",
                        "btn.OrderList.detail",
                        "btn.OrderList.Refund",
                        "btn.UserList.lock",
                        "btn.Category.add",
                        "btn.Category.update",
                        "btn.Category.remove",
                        "btn.Trademark.add",
                        "btn.Trademark.update",
                        "btn.Trademark.remove",
                        "btn.Attr.add",
                        "btn.Attr.update",
                        "btn.Attr.remove",
                        "btn.Spu.add",
                        "btn.Spu.addsku",
                        "btn.Spu.update",
                        "btn.Spu.skus",
                        "btn.Spu.delete",
                        "btn.Sku.updown",
                        "btn.Sku.update",
                        "btn.Sku.detail",
                        "btn.Sku.remove",
                        "role.remove",
                        "btn.deltest"
                    ],
                    "roles": [
                        "超级管理员"
                    ]
                };
            }
            await adminModel.create(admin)
            ctx.status = 200;
            ctx.body = {
                'code': 200,
                "msg": "添加成功",
                "data": ctx.request.body
            }
        } else {
            ctx.status = 200;
            ctx.body = {
                "code": 400,
                "msg": "用户已存在，请更换用户名！",
                "data": { username }
            }
        }
    } catch (error) {
        ctx.status = 400;
        ctx.body = {
            "code": 500,
            "msg": "服务器异常",
            "data": {}
        }
    }
}

//管理员登录
const adminLogin = async (ctx) => {
    try {
        const doc = await adminModel.findOne(ctx.request.body);
        if (doc) {
            const token = jsonwebtoken.sign(ctx.request.body, "feng-liang-jwt", {
                expiresIn: "168h"
            })
            ctx.status = 200;
            ctx.body = {
                "code": 200,
                "msg": "登录成功",
                "data": {
                    token
                }
            }
        } else {
            ctx.status = 200;
            ctx.body = {
                "code": 200,
                "msg": "用户不存在",
                "data": {}
            }
        }
    } catch (error) {
        ctx.status = 400;
        ctx.body = {
            "code": 400,
            "msg": "服务器异常",
            "data": {}
        }
    }
}

//管理员信息
const adminInfo = async (ctx) => {

    const token = ctx.request.query.token;
    const res = await verify(token);
    if (res) {
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "获取信息成功！",
            data: res
        }
    } else {
        ctx.status = 401;
        ctx.body = {
            code: 401,
            msg: "权限禁止或者服务器出错",
            data: {}
        }
    }
}

//管理员退出
const adminLogout = async (ctx) => {
    const token = ctx.cookies.get("token");
    const res = await verify(token);
    if (res) {
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "退出成功！",
            data: {}
        }
    } else {
        ctx.status = 401;
        ctx.body = {
            code: 401,
            msg: "退出失败！",
            data: {}
        }
    }
}

//鉴权
const verify = async (token) => {
    try {
        const admin = jsonwebtoken.verify(token, "feng-liang-jwt")
        const doc = await adminModel.findOne(admin);
        if (doc) {
            return doc;
        }
        else {
            return false;
        }
    } catch (error) {
        return false;
    }

}

// 删除
const adminDel = async (ctx) => {
    try {
        var ids = ctx.request.body;
        ids.forEach(async (item) => {
            await adminModel.findByIdAndDelete(item);
        })
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "",
            data: {}
        }

    } catch (error) {
        ctx.status = 400;
        ctx.body = {
            code: 400,
            msg: "",
            data: {}
            
        }
    }
}

//更新
const adminUpdate = async (ctx) => {
    const doc = await adminModel.findByIdAndUpdate(ctx.request.body.id, ctx.request.body);
    console.log(JSON.stringify(ctx.request.body));
    if (doc) {
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "",
            data: {}
        }
    } else {
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "",
            data: {}
        }
    }
}

//列表
const adminList = async (ctx) => {
    const admin = "624c4230fb3d24decb3dbae4";
    var { page, limit } = ctx.params;
    var username = ctx.query.username;
    var docs = null, count = 0;
    skip = Math.floor(limit * (page - 1));
    skip = skip>0?skip:0;
    try {
        if (username) {
            docs = await adminModel.find({ "username": username },
            {"id":"$_id","_id":0,"gmtCreate": 1, "gmtModified": 1, "username": 1, "password": 1, "nickName": 1, "roles": 1,"buttons":1,"routes":1});
            count = docs.length;
        } else {
            page = parseInt(page);
            limit = parseInt(limit);
            docs = await adminModel.aggregate([
                { "$match": { "gmtCreate": { $ne: null } } },
                { "$project": { "id": "$_id", "_id": 0, "gmtCreate": 1, "gmtModified": 1, "username": 1, "password": 1, "nickName": 1, "roles": 1,"buttons":1,"routes":1 } },
                { "$sort": { "createTime": 1 } },
                { "$skip":  skip},
                { "$limit": limit }
            ])
            count = await adminModel.estimatedDocumentCount() - 1;
        }
        var res = docs.reduce((prev, cur) => {
            let roleName = [];
            cur.roles.forEach((item, index) => {
                roleName.push(item.roleName);
            })
            roleName = roleName.join(",");
            cur.roleName = roleName;
            prev = [...prev, cur];
            return prev;
        }, [])
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "success",
            data: {
                total: count,
                items: res,

            }
        }
    } catch (error) {
        console.log(error);
        ctx.status = 500;
        ctx.body = {
            code: 200,
            msg: "filed",
            data: {}
        }
    }
}

//获取角色
const adminRoles = async (ctx) => {
    const allRolesList = await roleModel.aggregate([
        { "$project": { "id": "$_id", "_id": 0, "roleName": 1 } }
    ])
    const assignRoles = await adminModel.findById(ctx.params.id, { "id": "$_id", "_id": 0, "roles": 1 })
    ctx.status = 200;
    ctx.body = {
        code: 200,
        msg: "",
        data: {
            allRolesList,
            assignRoles
        }
    }
}

//设置角色

const adminSetRoles = async (ctx) => {
    var { userId, roleId } = ctx.request.body;
    const docs = await roleModel.find({ "_id": { "$in": roleId } }, { "_id": 1, "roleName": 1 ,"buttons":1,"routes":1});
    let buttons = new Set(), routes= new Set();
    docs.forEach((item)=>{
        buttons = [...buttons,...(item.buttons)];
        routes = [...routes,...(item.routes)];
    })
    const doc = await adminModel.findByIdAndUpdate(userId, { "roles": docs ,"buttons": buttons,"routes": routes});

    if (doc) {
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "",
            data: {}
        }
    } else {
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "",
            data: {
            }
        }
    }
}

module.exports = {
    adminInfo,
    adminLogin,
    adminReg,
    adminLogout,
    adminDel,
    adminUpdate,
    adminList,
    adminRoles,
    adminSetRoles
};
