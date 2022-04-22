const attrModel = require("../models/attribute");

//属性添加更新


const attrAdd = async (ctx)=>{
    const _id = ctx.request.body._id;
    var doc = {};
    if(_id){
        doc = await attrModel.replaceOne({"_id":_id},ctx.request.body,{upsert:true});
    }else{
        console.log(ctx.request.body);
        doc = await attrModel.create(ctx.request.body);
    }
    console.log(doc);
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg:"添加成功！",
            data: {}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg:"添加失败！",
            data: {}
        }
    }
}

//属性删除


const attrDel = async (ctx)=>{
    console.log(ctx.request.body);
    const doc = await attrModel.deleteOne({"_id": ctx.request.body});
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg: "success!",
            data:{}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg: "filed!",
            data:{}
        }
    }
}
//属性查看


const attrInfo = async (ctx)=>{
    const doc = await attrModel.find();
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg: "success!",
            data:doc
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg: "filed!",
            data:{}
        }
    }
}
//属性page列表


const attrList = async (ctx)=>{
    console.log(ctx.query.category3Id);
    const doc = await attrModel.find({"categoryId":ctx.query.category3Id});
    // console.log(doc);
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg: "success!",
            data:doc
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg: "filed!",
            data:{}
        }
    }
}


// list
const List = async (ctx)=>{
    const doc = await attrModel.aggregate([
        {"$project":{"id":"$_id","_id":0,"name":"$attrName","categoryId":1,"categoryLevel":1,"attrValueList":1}},
    ])
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg: "success!",
            data:doc
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code:400,
            msg: "filed!",
            data:{}
        }
    }
}


module.exports = {
    attrAdd,
    attrDel,
    attrInfo,
    attrList,
    List
}