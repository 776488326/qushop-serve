//引入管理员集合
const {adminModel} = require("../models/index");
const jsonwebtoken = require("jsonwebtoken");
//对管理员集合进行操作

//添加管理员
const adminReg = async (ctx)=>{
    try {
        const {username,password} = ctx.request.body;
        const exit = await adminModel.findOne({username});
        if(!exit){
            let admin = ctx.request.body;
            if(admin.username == 'admin'){
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
        }else{
            ctx.status = 200;
            ctx.body = {
                "code": 400,
                "msg": "用户已注册，请更换用户名！",
                "data": {username}
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
const adminLogin = async (ctx)=>{
    try {
        const doc = await adminModel.findOne(ctx.request.body);
        if(doc){
            const token = jsonwebtoken.sign(ctx.request.body,"feng-liang-jwt",{
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
        }else{
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
const adminInfo = async (ctx)=>{
    
    const token = ctx.request.query.token;
    const res = await verify(token);
    if(res){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "获取信息成功！",
            data: res
        }
    }else{
        ctx.status = 401;
        ctx.body = {
            code: 401,
            msg: "权限禁止或者服务器出错",
            data: {}
        }
    }
}

//管理员退出
const adminLogout = async (ctx)=>{
    const token = ctx.cookies.get("token");
    const res = await verify(token);
    if(res){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "退出成功！",
            data: {}
        }
    }else{
        ctx.status = 401;
        ctx.body = {
            code: 401,
            msg: "退出失败！",
            data: {}
        }
    }
}

//鉴权
const verify = async (token)=>{
    try {
        const admin = jsonwebtoken.verify(token,"feng-liang-jwt")
        const doc = await adminModel.findOne(admin);
        if(doc){
            return doc;
        }
        else{
            return false;
        }
    } catch (error) {
        return false;
    }
    
}


module.exports = {
    adminInfo,
    adminLogin,
    adminReg,
    adminLogout
};
