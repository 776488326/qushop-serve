const { userModel , shopCartModel} = require("../../models/index")
const jsonwebtoken = require("jsonwebtoken")
//用户注册
const userReg = async (ctx)=>{
    try {
        const shopcart = await shopCartModel.create({"totalPrice":0,"shopList":[]});
        ctx.request.body.cartList = shopcart._id;
        const doc = await userModel.create(ctx.request.body);
        console.log(doc);
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: "success",
                data: doc
            }
        }else{
            ctx.status = 200;
            ctx.body = {
                code: 400,
                msg: "filed",
                data: {}
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg: "filed",
            data:error
        }
    }
}


//用户登录
const userLogin = async (ctx)=>{
    try {
        var doc = await userModel.findOne(ctx.request.body,{"_id":1});
        if (doc) {
            const token = jsonwebtoken.sign({doc}, "feng-liang-jwt", {
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
                "code": 400,
                "msg": "用户不存在",
                "data": {}
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            "code": 500,
            "msg": "服务器异常",
            "data": error
        }
    }
}

const userInfo = async (ctx)=>{
    try {
        const token = ctx.header.token;
        const res = jsonwebtoken.verify(token, "feng-liang-jwt");
        const doc = await userModel.findById(res.doc._id);
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "success",
            data:doc
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg: "filed",
            data:error
        }
    }
}

const userUpdate = async (ctx)=>{
    try {
        const userInfo = ctx.request.body;
        const doc = await userModel.findByIdAndUpdate(userInfo._id,userInfo)
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:doc
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                code: 400,
                msg:"filed",
                data:{}
            }
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg:"filed",
            data:{}
        }
    }
}

const userAvatar = async (ctx)=>{
    ctx.body = {
        code: 200,
        msg: "",
        data: "http://localhost:3000/"+ctx.request.file.filename
    }
}

module.exports = {
    userLogin,
    userReg,
    userInfo,
    userUpdate,
    userAvatar
}
