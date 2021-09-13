const express = require('express')
const { render } = require('../app')
const nunjucks = require('nunjucks')
const app = require('../app')

const router = express.Router()

app.set('view engine', 'html')
nunjucks.configure('views', {
  autoescape: true,
  express: app
})

router.get('/', async (req, res, next) => {
  return render('correlation')
})

module.exports = router