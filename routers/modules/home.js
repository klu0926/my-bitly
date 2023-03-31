// home
const Router = require('express').Router()
const validUrl = require('valid-url')
const fetchCheck = require('../../config/fetchCheck')

// GET
Router.get('/', (req, res) => {
  res.render('index')
})

// POST
Router.post('/', async (req, res) => {
  const url = req.body.url
  let errorMessage = ""

  // check input
  if (url.trim() === "") {
    errorMessage = "Please enter your url"
    return res.render('index', { errorMessage })
  }

  // check if including HTTP string
  if (!(validUrl.isWebUri(url))) {
    errorMessage = 'Please enter a valid URL like : "http://www.google.com" '
    return res.render('index', { errorMessage })
  }

  // check with fetch
  const response = await fetchCheck(url)
  console.log('response: ', response)
  if (response === false) {
    errorMessage = `Fail to connect to your url, please check if url is working correctly`
    return res.render('index', { errorMessage })
  }

  // check data if already exist
  res.render('index')
  console.log('working!')
})

module.exports = Router