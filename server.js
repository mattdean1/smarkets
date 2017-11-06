const express = require('express')
// const path = require('path')

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

app.use('/api', router)

app.listen(9000)
