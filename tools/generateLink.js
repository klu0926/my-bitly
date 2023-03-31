const urlModel = require('../models/urlModel')
const dataExist = require('../tools/dataExist')

const linkLength = 5

const linkStrings = {
  lowerCaseLetters: 'abcdefghijklmnopqrstuvwxyz',
  upperCaseLetters: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(),
  numbers: '1234567890',
  // symbols: '`~!@$%^&*()-_+={}[]|;:"<>,.?/',
}


function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

async function generateLink() {
  // define possible password string
  const collection = []

  // push all strings to collection
  for (const key in linkStrings) {
    collection.push(...linkStrings[key])
  }

  // generate short link
  let shortLink = ""
  for (let i = 0; i < linkLength; i++) {
    shortLink += sample(collection)
  }

  const exist = await dataExist("shortUrl", shortLink)
  if (exist) {
    console.log('link already exist, regenerate link')
    generateLink()
  } else {
    console.log('link generated complete:', shortLink)
    return shortLink
  }
}

module.exports = generateLink