class RoleController {
  async get(ctx, next) {
    ctx.body = 'role list'
  }
  
  async add(ctx, next) {
    ctx.body = 'add role'
  }
  
  async del(ctx, next) {
    ctx.body = 'delete role'
  }
}

module.exports = RoleController