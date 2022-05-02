const tradeRouter = require("koa-router")()
const { trademark } = require('../../controllers/index');
const upload = require("../../utils/uploadFile");
// 设置路由前缀
tradeRouter.prefix("/admin/product/baseTrademark")
// 添加
tradeRouter.post("/save",trademark.addTraMark)

// 修改
tradeRouter.put("/update",trademark.updateTraMark)

// 删除
tradeRouter.delete("/remove",trademark.delTraMark)

// pagelist
tradeRouter.get("/list",trademark.listTraMark)

// 上传
tradeRouter.post("/upload",upload.single("file"),trademark.uploadImg)

// list
tradeRouter.get("/lists",trademark.list)

module.exports = tradeRouter;
