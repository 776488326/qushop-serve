const { skuModel } = require("../models/index");


const skuList = async (ctx)=>{
    var {page,limit} = ctx.params;
    page = parseInt(page);
    limit = parseInt(limit);
    const count = await skuModel.estimatedDocumentCount();
    const docs = await skuModel.aggregate([
        {"$sort":{"price":1}},
        {"$skip":Math.floor(limit*(page-1))},
        {"$limit":limit}
    ])

    if(docs.length){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:{
                records:docs,
                total: count,
                size: limit,
                current: page,
                pages: Math.ceil(count/limit)
            }
        }
    }
}

const List = async (ctx)=>{
    console.log(ctx.params.spuId);
    const docs = await skuModel.find({"spuId":ctx.params.spuId});
    if(docs){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:docs
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"filed",
            data:{}
        }
    }
}

const skuAdd = async (ctx)=>{
    const doc = await skuModel.create(ctx.request.body);
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:{}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"filed",
            data:{}
        }
    }
}

const skuDel = async (ctx)=>{
    const doc = await skuModel.deleteOne({"_id":ctx.params.skuId});
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:doc
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"failed",
            data:{}
        }
    }
}

const skuUpdate = async (ctx)=>{}

const skuInfo = async (ctx)=>{
    const doc = await skuModel.findById(ctx.params.skuId);
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:doc
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"failed",
            data:{}
        }
    }
}

const cancelSale = async (ctx)=>{
    const doc = await skuModel.updateOne({"_id":ctx.params.skuId},{"$set":{"isSale":false}})
    if(doc.modifiedCount){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:{}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"failed",
            data:{}
        }
    }
}

const onSale = async (ctx)=>{
    const doc = await skuModel.updateOne({"_id":ctx.params.skuId},{"$set":{"isSale":true}})
    if(doc.modifiedCount){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data:{}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"failed",
            data:{}
        }
    }
}

module.exports = {
    skuAdd,
    skuDel,
    skuInfo,
    skuList,
    skuUpdate,
    List,
    cancelSale,
    onSale
}