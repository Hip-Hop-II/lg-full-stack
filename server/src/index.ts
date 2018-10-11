import Koa from 'koa'
import middlewares from './middleware'
import constants from './config/constants'
import mock from './mock'

// 连接数据库
import './config/db'

const app = module.exports = new Koa()

middlewares(app)
// mock().then(() => {
  app.listen(constants.PORT, (err: any): any => {
    if (err) {
      console.error(err)
    }
    console.log(`server is running at http://localhost:${constants.PORT}`)
  })
// })
