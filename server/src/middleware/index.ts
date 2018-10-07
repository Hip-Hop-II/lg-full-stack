import koaBody from 'koa-body'
import KoaLogger from 'koa-logger'

export default app => {
  app.use(KoaLogger())
  app.use(koaBody())
}
