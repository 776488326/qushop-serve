const { shopCart } = require("../../controllers/index");
const Router = require("koa-router")

const shopCartRouter = new Router();

shopCartRouter.prefix("/client/cart")

shopCartRouter.get("/list/:cartId",shopCart.getshopCartInfo);

shopCartRouter.post("/add",shopCart.addToshopCart);

shopCartRouter.delete("/del",shopCart.delShop);

shopCartRouter.put("/update",shopCart.updateState);

module.exports = shopCartRouter;