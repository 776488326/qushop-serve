const { attribute } = require("../../controllers/index");

const Router = require("koa-router");

const attrRouter = new Router();

attrRouter.prefix("/admin/product/attr");

//属性添加更新

attrRouter.post("/add",attribute.attrAdd);

//属性删除

attrRouter.delete("/del",attribute.attrDel);

//属性查看

attrRouter.get("/info",attribute.attrInfo);

//属性列表

attrRouter.get("/list",attribute.attrList);

attrRouter.get("/lists",attribute.List);

module.exports = attrRouter;