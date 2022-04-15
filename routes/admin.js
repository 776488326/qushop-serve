const adminRouter = require('koa-router')()
const { admin } = require("../controllers/index");

adminRouter.prefix('/admin');

adminRouter.post("/add",admin.adminReg);

adminRouter.post("/login",admin.adminLogin);

adminRouter.get("/info",admin.adminInfo);

adminRouter.post("/logout",admin.adminLogout);

module.exports = adminRouter;

