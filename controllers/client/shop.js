const { skuModel } = require("../../models/index")

const getSearchResult = async (ctx) => {
    var { searchWord,
        category3IdList,
        limit,
        curPage,
        tradeMarkId,
        sort } = ctx.request.body;
        limit = parseInt(limit);
        sort = parseInt(sort);
        curPage = parseInt(curPage);
        var docs = [],count = 0;
        if(searchWord!=''){
            count = await skuModel.countDocuments({"skuName":{"$regex":`/${searchWord}/`}})
            docs = await skuModel.aggregate([
                {"$match":{"skuName":{"$regex":`/${searchWord}/`}}},
                {"$skip":Math.floor((curPage-1)*limit)},
                {"$limit":limit},
                {"$sort":{"price":sort}},
            ])
        }else{
            if(tradeMarkId == ''){
                count = await skuModel.countDocuments({"category3Id":{"$in":category3IdList}});
    
                docs = await skuModel.aggregate([
                    {"$match":{"category3Id":{"$in":category3IdList}}},
                    {"$skip":Math.floor((curPage-1)*limit)},
                    {"$limit":limit},
                    {"$sort":{"price":sort}},
                ])
            }else{
                if(category3IdList==''){
                    count = await skuModel.countDocuments({"tmId":tradeMarkId});
                    docs = await skuModel.aggregate([
                        {"$match":{"tmId":tradeMarkId}},
                        {"$sort":{"price":sort}},
                        {"$skip":Math.floor((curPage-1)*limit)},
                        {"$limit":limit}
                    ])
                }else{
                    count = await skuModel.countDocuments({"category3Id":{"$in": category3IdList},"tmId":tradeMarkId});
                    
                    docs = await skuModel.aggregate([
                        {"$match":{"category3Id":{"$in":category3IdList}}},
                        {"$match":{"tmId":tradeMarkId}},
                        {"$sort":{"price":sort}},
                        {"$skip":Math.floor((curPage-1)*limit)},
                        {"$limit":limit}
                    ])
                }
            }
        }
        
        if(docs){
            ctx.status = 200;
            ctx.body = {
                code: 200,
                msg:count,
                data:docs
            }
        }else{
            ctx.status = 400;
            ctx.body = {
                code: 400,
                msg:"filed",
                data:[]
            }
        }
}

module.exports = {
    getSearchResult
}