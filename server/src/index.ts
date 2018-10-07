import Koa from 'koa'
import middlewares from './middleware'
import constants from './config/constants'

// 连接数据库
import './config/db'

const app = module.exports = new Koa()

middlewares(app)

app.listen(constants.PORT, (err: any) => {
  if (err) {
    console.error(err)
  }
  console.log(`server is running at http://localhost:${constants.PORT}`)
})
