const {msgModel} = require("../models/index")

const msgList = async (ctx)=>{
    const docs = await msgModel.find();
    ctx.status = 200;
    ctx.body = {
        code:200,
        msg:"",
        data:docs[0]
    }
}
// 更新访问量
const visitUpdate = async (ctx)=>{
    const doc = await msgModel.updateOne({},{"$inc":{"totalVisit":1}});
} 

module.exports = {
    msgList,
    visitUpdate
}