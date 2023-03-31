const db = require('../../config/mongoose')
const urlModel = require('../urlModel')

const seederData = [
  {
    originalUrl: 'http://www.google.com',
    shortUrl: 'aaaaa'
  },
  {
    originalUrl: 'https://tw.yahoo.com/',
    shortUrl: 'bbbbb'
  },
  {
    originalUrl: 'https://www.youtube.com/',
    shortUrl: 'ccccc'
  },
]

console.log('please wait, creating seed...')

db.once('open', () => {
  urlModel.create(seederData)
  console.log('seed created!')
})
