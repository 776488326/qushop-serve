const userRouter = require('koa-router')();
const {user} = require("../../controllers/index");
const upload = require("../../utils/uploadFile");

userRouter.prefix('/client/user')

userRouter.post("/login",user.userLogin)

userRouter.post("/reg",user.userReg)

userRouter.get("/info",user.userInfo)

userRouter.put("/update",user.userUpdate)
// 上传
userRouter.post("/upload",upload.single("file"),user.userAvatar)



module.exports = userRouter
