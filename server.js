const express = require('express')
// const path = require('path')
const fetch = require('node-fetch')

const app = express()

// for use in prod
// app.use(express.static(path.join(__dirname, 'build')))
//
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

const router = express.Router()
router.get('/test', (req, res) => {
  res.json({ msg: 'success' })
})
router.get('/events/popular', (req, res) => {
  fetch('https://fe-api.smarkets.com/v0/events/popular/')
    .then(response => response.json())
    .then(json => res.json(json))
})

app.use('/api', router)

app.listen(9000)
