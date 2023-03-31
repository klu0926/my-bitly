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

// POST
Router.post('/', async (req, res) => {
  const inputUrl = req.body.url
  const url = inputUrl.trim().toLowerCase()
  let errorMessage = ""
  let shorterLink = "http://localhost/"

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
    errorMessage = `Fail to connect to your url, please check if url is working correctly`
    return res.render('index', { errorMessage })
  }

  // Warning user status code is out of 200-299
  if (!response.ok) {
    errorMessage = `Your url return status code out of 200-299, status code: ${response.status}`
  }

  // check data if already exist
  const exist = await dataExist('originalUrl', url)
  // return shorter url
  if (exist) {
    // return data short link
    shorterLink += exist.shortUrl
    console.log('Return exist data short url, All done')
    return res.render('index', { url, shorterLink })

  } else {
    // create a new link, save to data
    shorterLink += await generateLink()
    const newData = await createData(url, shorterLink)

    console.log('Create new short url to return, All done')
    return res.render('index', { url, shorterLink })

  }
})

module.exports = Router