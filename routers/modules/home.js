// home
const Router = require('express').Router()


Router.get('/', (req, res) => {
  res.send('<h1>This is working!</h1>')
})

module.exports = Router