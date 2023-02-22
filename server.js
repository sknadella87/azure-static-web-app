const { createServer } = require('http')
const { server } = require('./config/index.js')
const next = require('next')

const port = process.env.PORT || 3000
const dev = false
const hostname = server.hostname
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on ${server}:${port}`)
  })
})