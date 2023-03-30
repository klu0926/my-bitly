// home
const Router = require('express').Router()


// home
Router.get('/', (req, res) => {
  res.render('index')
})

module.exports = Router