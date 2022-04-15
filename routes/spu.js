const {spu} = require("../controllers/index")
const Router = require("koa-router")
const upload = require("../utils/uploadFile");

const spuRouter = new Router();

spuRouter.prefix("/admin/product/spu")

spuRouter.get("/list",spu.spuList)

spuRouter.post("/add",spu.spuAdd)

spuRouter.delete("/del/:spuId",spu.spuDel)

spuRouter.get("/info/:spuId",spu.spuInfo)

// 上传
spuRouter.post("/upload",upload.single("file"),spu.uploadImg)

module.exports = spuRouter