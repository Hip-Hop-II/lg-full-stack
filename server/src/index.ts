import Koa from 'koa'
import middlewares from './middleware'
import constants from './config/constants'

// 连接数据库
import './config/db'

const app = module.exports = new Koa()

middlewares(app)
// mock().then(() => {
  app.listen(constants.PORT)
// })
