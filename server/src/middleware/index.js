import koaBody from 'koa-body'
import koaLogger from 'koa-logger'

export default app => {
  app.use(koaLogger())
  app.use(koaBody())
}
