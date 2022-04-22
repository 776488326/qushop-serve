const { default: mongoose } = require("mongoose");
const { shopCategoryModel } = require("../models/index");

//添加一级分类

const addCategory = async (ctx)=>{
    
    const doc = await shopCategoryModel.create(ctx.request.body);
    if(doc){
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg:"",
            data:{}
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg:"",
            data:{}
        }
    }
}




//获取一级列表

const getCategory1 = async (ctx)=>{
    const categoryList = await shopCategoryModel.aggregate([
        {
            //必须将重命名写在第一个
            "$project":{"id":"$_id","_id":0,'name':1}
        }
    ])
    
    if(categoryList){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "一级分类获取成功！",
            data: categoryList
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "一级分类获取失败！",
            data: {}
        }
    }
}

//获取二级分类
const getCategory2 = async (ctx)=>{
    const doc = await shopCategoryModel.findById(ctx.query.category1Id);
    const res = [];
    doc.category2.forEach(item => {
        res.push({
            "name":item.name,
            "id":item._id
        })
    });
    if(res){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "二级分类获取成功！",
            data: res
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "二级分类获取失败！",
            data: {}
        }
    }
}

//获取三级分类
const getCategory3 = async (ctx)=>{
    const doc = await shopCategoryModel.aggregate([
        {"$project":{"_id":0,"name":0}},
        {"$unwind":"$category2"},
        {"$match":{"category2._id":mongoose.Types.ObjectId(ctx.query.category2Id)}},
    ]);
    const res = [];
    doc[0].category2.category3.forEach(item => {
        res.push({
            "name":item.name,
            "id":item._id
        })
    });
    if(res){
        ctx.status = 200;
        ctx.body = {
            code: 200,
            msg: "二级分类获取成功！",
            data: res
        }
    }else{
        ctx.status = 200;
        ctx.body = {
            code: 400,
            msg: "二级分类获取失败！",
            data: {}
        }
    }
}


module.exports = {
    addCategory,
    getCategory1,
    getCategory2,
    getCategory3
}