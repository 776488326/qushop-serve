const { shopCartModel } = require("../../models/index");

//获取购物车信息   
const getshopCartInfo = async (ctx)=>{
    try {
        const doc = await shopCartModel.findById(ctx.params.cartId);
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:doc
            }
        }else
        {
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
            msg: "filed",
            data:{}
        }
    }
}


//{
//     skuId:String,
//     skuName:String,
//     attrList:Array,
//     count:Number,
//     price:Number,
//     isChecked:Boolean    
// }
//添加到购物车
const addToshopCart = async (ctx)=>{
    try {
        const { shopInfo,cartId } = ctx.request.body;
        const doc = await shopCartModel.updateOne({"_id":cartId},{
            "$push":{"shopList":shopInfo}
        });
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:doc
            }
        }else
        {
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
            msg: "filed",
            data:{}
        }
    }
}


//删除购物车商品
const delShop = async (ctx)=>{
    try {
        const {cartId,skuIds} = ctx.request.body;
        const doc = await shopCartModel.updateOne({"_id":cartId},{"$pull":{"shopList":{"_id":{"$in":skuIds}}}});
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:doc
            }
        }else
        {
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
            msg: "filed",
            data:{}
        }
    }
}


//修改购物车状态
const updateState = async (ctx)=>{
    try {
        const {cartId,skuId,isChecked} = ctx.request.body;
        const doc = await shopCartModel.updateOne({"_id":cartId,"shopList.skuId":skuId},{"$set":{"shopList.$.isChecked":isChecked}});
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:doc
            }
        }else
        {
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
            msg: "filed",
            data:{}
        }
    }
}


module.exports = {
    getshopCartInfo,
    addToshopCart,
    delShop,
    updateState
}