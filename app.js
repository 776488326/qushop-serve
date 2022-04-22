const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koajwt = require("koa-jwt")

// 引入全部路由实例
const {userRouter,adminRouter,tradeRouter,shopCategoryRouter,
      roleRouter,attrRouter,spuRouter,skuRouter,permissionRouter,
      msgRouter} = require('./routes/index')

// 错误处理
onerror(app)

// 请求体解析
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))

// JSON支持
app.use(json())

// 日志生成
app.use(logger())

// 静态目录访问支持
app.use(require('koa-static')(__dirname + '/static'))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 使用路由
app.use(adminRouter.routes(), adminRouter.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())
app.use(tradeRouter.routes(), tradeRouter.allowedMethods())
app.use(shopCategoryRouter.routes(), shopCategoryRouter.allowedMethods())
app.use(roleRouter.routes(), roleRouter.allowedMethods())
app.use(roleRouter.routes(), roleRouter.allowedMethods())
app.use(spuRouter.routes(), spuRouter.allowedMethods())
app.use(skuRouter.routes(),skuRouter.allowedMethods())
app.use(attrRouter.routes(),attrRouter.allowedMethods())
app.use(msgRouter.routes(),msgRouter.allowedMethods())
app.use(permissionRouter.routes(),permissionRouter.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(3000,()=>{
  console.log("正在监听3000端口！")
})

module.exports = app
