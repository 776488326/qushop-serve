const Router = require("koa-router")

const {message} = require("../controllers/index")

const msgRouter = new Router();

msgRouter.prefix("/admin/msg")

msgRouter.get("/list",message.msgList)

msgRouter.get("/visit",message.visitUpdate)

module.exports = msgRouter;

