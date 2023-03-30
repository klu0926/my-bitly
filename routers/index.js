// Router
const Router = require('express').Router()
const homeRouter = require('./modules/home')

Router.use('/', homeRouter)


module.exports = Router