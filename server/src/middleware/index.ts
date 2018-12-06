import koaBody from 'koa-body'
import KoaLogger from 'koa-logger'
import Router from 'koa-router'
import routes from '../routes'
import cors from 'koa2-cors'

const router = new Router()

export default app => {
  app.use(cors({
    'Access-Control-Allow-Origin': 'http://localhost:8888',
    credentials: true
  }))
  app.use(KoaLogger())
  app.use(koaBody())
  app.use(routes(router).routes())
}
