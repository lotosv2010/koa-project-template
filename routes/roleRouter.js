const Router = require('@koa/router')
const router = new Router({
  prefix: '/role'
})

const RoleController = require('../controller/roleController')
const controller = new RoleController()

router.get('/get', controller.get)

router.post('/add', controller.add)

router.post('/delete', controller.del)

module.exports = router