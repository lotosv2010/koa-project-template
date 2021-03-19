const Koa = require('koa')
const views = require('koa-views');

const app = new Koa()
const router = require('./routes/index')

// 在ctx 上扩展一个 render 方法
const render = views(__dirname + '/views', {
  map: {
    html: 'ejs'
  }
})

app.use(render)
app.use(router())

app.listen(3000, () => {
  console.log(`start port 3000`)
})