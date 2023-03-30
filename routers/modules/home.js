// home
const Router = require('express').Router()
const validUrl = require('valid-url')



// GET
Router.get('/', (req, res) => {
  res.render('index')
})

// POST
Router.post('/', (req, res) => {
  const url = req.body.url
  let errorMessage = ""

  // check input
  if (url.trim() === "") {
    errorMessage = "Please enter your url"
    return res.render('index', { errorMessage })
  }

  // check valid url
  if (!(validUrl.isWebUri(url))) {
    errorMessage = 'Please enter a valid URL like : "http://www.google.com" '
    return res.render('index', { errorMessage })
  }

  console.log(url)

  res.render('index')
})

module.exports = Router