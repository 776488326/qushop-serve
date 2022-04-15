const categoryRouter = require("koa-router")();
const {shopCategory} = require("../controllers/index")

categoryRouter.prefix("/admin/product");

categoryRouter.get("/getCategory1",shopCategory.getCategory1);
categoryRouter.get("/getCategory2",shopCategory.getCategory2);
categoryRouter.get("/getCategory3",shopCategory.getCategory3);

module.exports = categoryRouter;