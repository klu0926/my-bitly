const db = require('../../config/mongoose')
const urlModel = require('../urlModel')

console.log('deleing all data wait...')

db.once('open', () => {
  urlModel.deleteMany({})
    .then(() => {
      console.log('all data deleted!')
    })
    .catch(error => {
      console.log(error)
    })
})
