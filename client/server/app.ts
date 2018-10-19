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

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(5000, err => {
    if (err) {
      throw err
    }
    console.log('> Ready on http://localhost:5000')
  })
})
