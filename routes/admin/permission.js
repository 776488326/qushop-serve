const {permission} = require("../../controllers/index")

const Router = require("koa-router")

const permissionRouter = new Router();

permissionRouter.prefix("/admin/auth");

permissionRouter.get("/list",permission.permissionList)

permissionRouter.delete("/del",permission.permissionDel)

permissionRouter.post("/add",permission.permissionAdd)

permissionRouter.put("/update",permission.permissionUpdate)

module.exports = permissionRouter;
