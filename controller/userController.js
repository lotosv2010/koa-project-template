class UserController {
  async get(ctx, next) {
    await ctx.render('user/list.html', {
      name: 'koa',
      age: 10
    })
  }
  
  async add(ctx, next) {
    ctx.body = 'add user'
  }
  
  async del(ctx, next) {
    ctx.body = 'delete user'
  }
}

module.exports = UserController