const Router = require('@koa/router')
const router = new Router({
  prefix: '/user'
})

const UserController = require('../controller/userController')
const controller = new UserController()

// 命中路由后调用对应的controller
router.get('/get', controller.get)

router.post('/add', controller.add)

router.post('/delete', controller.del)

module.exports = router