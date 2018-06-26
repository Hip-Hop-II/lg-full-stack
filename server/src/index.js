import Koa from 'koa'
import middlewares from './middleware'
import constants from './config/constants'
const app = module.exports = new Koa()

middlewares(app)

app.listen(constants.PORT, (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`server is running at http://localhost:${constants.PORT}`)
})
