// home
const Router = require('express').Router()
const validUrl = require('valid-url')
const fetchCheck = require('../../tools/fetchCheck')
const dataExist = require('../../tools/dataExist')
const generateLink = require('../../tools/generateLink')
const createData = require('../../models/createData')

// GET
Router.get('/', (req, res) => {
  res.render('index')
})

// PORTAL
Router.get('/:url', async (req, res) => {
  const shortUrl = req.params.url
  console.log(shortUrl)

  // check input
  if (!shortUrl) {
    console.log('short link error', shortUrl)
    return res.render('error')
  }

  // check for data
  const exist = await dataExist('shortUrl', shortUrl)
  if (exist) {
    res.redirect(exist.originalUrl)
  } else {
    console.log('can not find data with this short link')
    res.render('error')
  }
})

// POST
Router.post('/', async (req, res) => {
  const inputUrl = req.body.url
  const url = inputUrl.trim().toLowerCase()
  let errorMessage = ""
  // req.headers.origin
  let shorterLink = req.headers.origin + "/"

  // check input
  if (url === "") {
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
  if (response === false) {
    errorMessage = `Fail to connect to your URL, please check if URL is working correctly`
    return res.render('index', { errorMessage })
  }

  // check data if already exist
  const exist = await dataExist('originalUrl', url)
  // return shorter url
  if (exist) {
    // return data short link
    shorterLink += exist.shortUrl
    console.log('Return exist data short URL, All done')
    return res.render('index', { url, shorterLink })

  } else {
    // create a new link, save to data
    const link = await generateLink()
    shorterLink += link
    const newData = await createData(url, link)

    console.log('Create new short url to return, All done')
    return res.render('index', { url, shorterLink })

  }
})

module.exports = Router