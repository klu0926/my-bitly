const urlModel = require('../models/urlModel')


function dataExist(urlType, url) {
  const findObject = {}
  findObject[urlType] = url

  console.log('checking if data exist: ', findObject, '...')
  return urlModel.findOne(findObject)
    .lean()
    .then(URL => {
      if (URL !== null) {
        return URL
      } else {
        return false
      }
    })
    .catch(error => {
      console.log(error)
      return false
    })
}

module.exports = dataExist
