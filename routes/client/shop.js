const { shopCategory , shop, sku} = require("../../controllers/index")
const Router = require("koa-router")

const clientShopRouter = new Router();

clientShopRouter.prefix("/client/shop")

clientShopRouter.get("/category",shopCategory.getCategoryList);

clientShopRouter.post("/search",shop.getSearchResult);

clientShopRouter.get("/detail/:skuId",sku.skuInfo);

module.exports = clientShopRouter;