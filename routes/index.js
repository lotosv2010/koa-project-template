// 路由整合
const combineRouters = require('koa-combine-routers')
const userRouter = require('./userRouter')
const roleRouter = require('./roleRouter')

const router = combineRouters(userRouter, roleRouter)

module.exports = router