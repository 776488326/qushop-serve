const {spuModel} = require("../models/index");


const spuList = async (ctx)=>{
    var {page,limit,category3Id} = ctx.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const count = await spuModel.estimatedDocumentCount();
    const docs = await spuModel.aggregate([
        {"$sort":{"spuName":1}},
        {"$match":{"category3Id":category3Id}},
        {"$project":{"id":"$_id","_id":0,"spuName":1,"description":1,"category3Id":1,"tmId":1}},
        {"$skip":Math.floor((page-1)*limit)},
        {"$limit":limit}
    ])
    if(docs.length){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data: {
                total:count,
                records:docs,
                size:limit,
                current:page,
                searchCount:true,
                pages:Math.floor(count/limit)
            }
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"",
            data: {}
        }
    }
}


const spuAdd = async (ctx)=>{
    const _id = ctx.request.body._id;
    var doc = await spuModel.findById(_id);
    if(!doc){
        doc = await spuModel.create(ctx.request.body);
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code:200,
                msg:"success",
                data: {}
            }
        }else{
            ctx.status = 200;
            ctx.body = {
                code:400,
                msg:"filed",
                data: {}
            }
        }
    }else{
        doc = await spuModel.replaceOne({"_id":_id},ctx.request.body);
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code:200,
                msg:"success",
                data: {}
            }
        }else{
            ctx.status = 200;
            ctx.body = {
                code:400,
                msg:"filed",
                data: {}
            }
        }
    }
}

const spuDel = async (ctx)=>{
    const doc = await spuModel.deleteOne({"_id":ctx.params.spuId});
    console.log(ctx.params.spuId);
    if(doc.deletedCount){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"filed",
            data: {}
        }
    }
}

const spuInfo = async (ctx)=>{
    const docs = await spuModel.findById(ctx.params.spuId)
    if(docs){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"success",
            data: docs
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg:"filed",
            data: {}
        }
    }
}

const uploadImg = async (ctx)=>{
    ctx.body = {
        code: 200,
        msg: "",
        data: "http://localhost:3000/"+ctx.request.file.filename
    }
}

module.exports = {
    spuAdd,
    spuDel,
    spuInfo,
    spuList,
    uploadImg
}