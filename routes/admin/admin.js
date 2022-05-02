const Router = require('koa-router');
const { admin } = require("../../controllers/index");
const adminRouter = new Router();

adminRouter.prefix('/admin/user');

adminRouter.post("/add",admin.adminReg);

adminRouter.post("/login",admin.adminLogin);

adminRouter.get("/info",admin.adminInfo);

adminRouter.post("/logout",admin.adminLogout);

adminRouter.delete("/del",admin.adminDel);

adminRouter.put("/update",admin.adminUpdate);

adminRouter.get("/list/:page/:limit",admin.adminList);

adminRouter.get("/toAssign/:id",admin.adminRoles);

adminRouter.post("/doAssign",admin.adminSetRoles);


module.exports = adminRouter;

