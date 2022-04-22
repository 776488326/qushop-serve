const userRouter = require('koa-router')();
const {user} = require("../controllers/index");
userRouter.prefix('/user')

userRouter.post("/login",user.userLogin)

userRouter.post("./reg",user.userReg)




module.exports = userRouter
