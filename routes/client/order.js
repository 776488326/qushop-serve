const { order } = require("../../controllers/index");

const Router = require("koa-router");

const orderRouter = new Router();

orderRouter.prefix("/client/order");

orderRouter.get("/list/:userId",order.getOrderList);

orderRouter.delete("/del",order.delOrder);

orderRouter.post("/create",order.createOrder);

module.exports = orderRouter
