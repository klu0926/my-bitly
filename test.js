const dataExist = require('./tools/dataExist')
const db = require('./config/mongoose')
const { on } = require('./models/urlModel')

const linkLength = 5

const linkStrings = {
  lowerCaseLetters: 'abcdefghijklmnopqrstuvwxyz',
  upperCaseLetters: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
  numbers: '1234567890',
  symbols: '`~!@$%^&*()-_+={}[]|;:"<>,.?/',
}


function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

async function generateLink() {
  // // define possible password string
  // const collection = []

  // // push all strings to collection
  // for (const key in linkStrings) {
  //   collection.push(...linkStrings[key])
  // }

  // // generate short link
  // let shortLink = ""
  // for (let i = 0; i < linkLength; i++) {
  //   shortLink += sample(collection)
  // }
  const shortLink = "v7Qsy"

  console.log('shortLink: ', shortLink)
  const exist = await dataExist("shortUrl", shortLink)

  console.log(exist)

  if (exist) {
    console.log('data already exist, regenerate link...')
    //generateLink()
    return
  } else {
    console.log('link generated complete:', shortLink)
    return shortLink
  }
}

db.once('open', generateLink)