const Router = require("koa-router")

const {message} = require("../../controllers/index")

const msgRouter = new Router();

// 获取站点信息
msgRouter.get("/client/site/msg",message.msgList)
msgRouter.get("/admin/site/msg",message.msgList)

// 设置站点访问量
msgRouter.get("/client/site/visit",message.visitUpdate)
msgRouter.put("/admin/site/update",message.msgUpdate)

// 获取站点热榜
msgRouter.get("/client/site/hot/:skip",message.hotList)
msgRouter.get("/client/site/best",message.bestSelectList)



module.exports = msgRouter;

