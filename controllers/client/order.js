const { orderModel, userModel} = require("../../models/index");

// 创建订单
const createOrder = async(ctx)=>{
    try {
        const tradeInfo = ctx.request.body;
        const doc = await orderModel.create(tradeInfo);
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
            data:error
        }
    }
}

// 获取订单列表
const getOrderList = async(ctx)=>{
    try {
        const userId = ctx.params.userId;
        const docs = await orderModel.find({userId})
        if(docs){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:docs
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
            data:error
        }
    }
}

// 删除订单
const delOrder = async (ctx)=>{
    try {
        const doc = await orderModel.deleteOne({"_id":ctx.params.orderId})
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:{}
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

module.exports = {
    createOrder,
    getOrderList,
    delOrder
}