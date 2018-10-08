import koaBody from 'koa-body'
import KoaLogger from 'koa-logger'
import Router from 'koa-router'
import routes from '../routes'

const router = new Router()

export default app => {
  app.use(KoaLogger())
  app.use(koaBody())
  app.use(routes(router).routes())
}
