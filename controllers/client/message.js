const { count } = require("../../models/client/user");
const {msgModel,skuModel,traMarkModel} = require("../../models/index")
// 获取站点信息
const msgList = async (ctx)=>{
    try {
        let docs = await msgModel.find();
        const brand = await traMarkModel.find();
        ctx.status = 200;
        ctx.body = {
            code:200,
            msg: brand,
            data:docs[0]
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            code:500,
            msg:"filed",
            data:error
        }
    }
}


// 更新访问量
const visitUpdate = async (ctx)=>{
    try {
        const doc = await msgModel.updateOne({},{"$inc":{"totalVisit":1}});
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:{}
            }
        }else{
            ctx.status = 200;
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

// 更新站点信息
const msgUpdate = async (ctx)=>{
    try {
        const { swiperList, advertisment, hotTop, followMe,bestSelectList} = ctx.request.body;
        const doc = await msgModel.updateOne({},{swiperList,advertisment,hotTop,followMe,bestSelectList});
        if(doc){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:"success",
                data:{}
            }
        }else{
            ctx.status = 200;
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

// 站点热榜
const hotList = async (ctx)=>{
    try {
        const skip = ctx.params.skip;
        const docs = await skuModel.aggregate([
            {"$match":{"ishot":true}},
            {"$skip":parseInt(skip)},
            {"$limit": 4}
        ]);
        if(skip==0){
            const res = await skuModel.find({"ishot":true});
            var count = res.length;
        }
        if(docs.length){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: count,
                data:docs
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                code: 400,
                msg: "filed",
                data:{}
            }
        }
    } catch (error) {
        console.log(error);
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg: "filed",
            data:error
        }
    }
}



// 站点精选
const bestSelectList = async (ctx)=>{
    try {
        const docs = await skuModel.aggregate([
            {"$match":{"isSelect":true}},
            {"$limit": 6}
        ]);
        if(docs.length){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg: "success",
                data:docs
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                code: 400,
                msg: "filed",
                data:{}
            }
        }
    } catch (error) {
        console.log(error);
        ctx.status = 500;
        ctx.body = {
            code: 500,
            msg: "filed",
            data:error
        }
    }
}


module.exports = {
    msgList,
    visitUpdate,
    msgUpdate,
    hotList,
    bestSelectList
}