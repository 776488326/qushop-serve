const {sku} = require("../../controllers/index")
const Router = require("koa-router")

const skuRouter = new Router();

skuRouter.prefix("/admin/product/sku")

skuRouter.get("/list/:page/:limit",sku.skuList)

skuRouter.post("/add",sku.skuAdd)

skuRouter.delete("/del/:skuId",sku.skuDel)

skuRouter.put("/update",sku.skuUpdate)

skuRouter.get("/lists/:spuId",sku.List)

skuRouter.get("/cancelSale/:skuId",sku.cancelSale)

skuRouter.get("/onSale/:skuId",sku.onSale)

skuRouter.get("/info/:skuId",sku.skuInfo)

module.exports = skuRouter