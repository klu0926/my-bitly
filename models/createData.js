const urlModel = require('./urlModel')

function createData (originalUrl, shortUrl) {
  const dataObject = { originalUrl, shortUrl }

  console.log('creating single data...')

  return urlModel.create(dataObject)
    .then(() => {
      return console.log('data created!', dataObject)
    })
    .catch(error => {
      return console.log(error)
    })
}

module.exports = createData
