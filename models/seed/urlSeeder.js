const db = require('../../config/mongoose')
const urlModel = require('../urlModel')
const generateLink = require('../../tools/generateLink')

const seederData = [
  {
    originalUrl: 'http://www.google.com'
  },
  {
    originalUrl: 'https://tw.yahoo.com'
  },
  {
    originalUrl: 'https://www.youtube.com'
  }
]

db.once('open', async () => {
  // generate short url
  await Promise.all(seederData.map(async object => {
    object.shortUrl = await generateLink()
  }))

  // create seed
  await urlModel.create(seederData)
  console.log('seed created!')
})
