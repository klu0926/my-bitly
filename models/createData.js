const urlModel = require('./urlModel')
const db = require('../config/mongoose')



function createData(originalUrl, shortUrl) {

  const dataObject = { originalUrl, shortUrl }

  console.log('creating single data...')

  db.once('open', () => {
    urlModel.create(dataObject)
      .then(() => {
        console.log('data created!', dataObject)
      })
      .catch(error => {
        console.log(error)
      })
  })
}

createData('https://www.w3schools.com/', 'wdioj')
