const Router = require("koa-router");
const {role} = require("../controllers/index");

const roleRouter = new Router();

roleRouter.prefix('/admin/roles/');

// 获取角色列表
roleRouter.get('/list',role.roleList);

// 获取角色信息
roleRouter.get("/info",role.roleInfo);

// 删除角色
roleRouter.delete("/delete",role.roleDel);

// 添加角色
roleRouter.post("/add",role.roleAdd);

// 修改角色
roleRouter.put("/update",role.roleUpdate);

//
roleRouter.get("/clear",role.dropSet);

module.exports = roleRouter;