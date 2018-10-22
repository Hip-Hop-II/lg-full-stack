import * as express from 'express'
import * as next from 'next'

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/_next/*', (req, res) => {
    handle(req, res);
  })

  server.get('/static/*', (req, res) => {
    handle(req, res);
  })
  server.get('/zhaopin/:id', (req, res) => {
    const actualPage = '/position-detail'
    console.log(req.params)
    const queryParams = {title: req.params.id}
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(8888, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:5000')
  })
})
