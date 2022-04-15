const { traMarkModel } = require("../models/index");

//上传品牌图片
const uploadImg = async (ctx)=>{
    ctx.body = {
        code: 200,
        msg: "",
        data: "http://localhost:3000/"+ctx.request.file.filename
    }
}

//增加品牌

const addTraMark = async (ctx)=>{
    const docs = await traMarkModel.create(ctx.request.body);
    if(docs){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "添加成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "添加失败！",
            data: {}
        }
    }
}

//删除品牌

const delTraMark = async (ctx)=>{
    const doc = await traMarkModel.deleteOne({"_id":ctx.query._id});
    if(doc.deletedCount){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "删除成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "删除失败！",
            data: {}
        }
    }
}

//修改品牌

const updateTraMark = async (ctx)=>{
    const {_id,tnName,logoUrl} = ctx.request.body;
    console.log(_id);
    const doc = await traMarkModel.findByIdAndUpdate(_id,{$set:{"tnName":tnName},logoUrl});
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "修改成功！",
            data: {}
        }
    }else{
        ctx.status = 500;
        ctx.body = {
            code: 200,
            msg: "修改失败！",
            data: {}
        }
    }
}

//品牌列表分页

const listTraMark = async (ctx)=>{
    var {limit,page} = ctx.query;
    limit = parseInt(limit);
    page = parseInt(page)
    console.log(limit,page);
    const list = await traMarkModel.aggregate(
        [{
            "$sort":{"tmName":1}
        },{
            "$skip":limit*(page-1)
        },{
            "$limit":limit
        }]
    )
    
    const total = await traMarkModel.estimatedDocumentCount()

    if(list){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "获取成功！",
            data: {
                total,
                pages:Math.floor(total/limit),
                records:list,
                size:limit,
                current:page,
                searchCount:true
            }
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "获取失败！",
            data: {}
        }
    }
}

//品牌列表
const list = async (ctx)=>{
    const list = await traMarkModel.aggregate([
        {"$project":{"id":"$_id","_id":0,"tmName":1,"logoUrl":1}}
    ]);
    console.log(list);
    if(list){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "获取成功！",
            data: list
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "获取失败！",
            data: {}
        }
    }
}


module.exports = {
    addTraMark,
    delTraMark,
    updateTraMark,
    listTraMark,
    uploadImg,
    list
}