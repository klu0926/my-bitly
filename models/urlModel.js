const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UrlSchema = new Schema({
  originalUrl: {
    type: String,
    require: true
  },
  shortUrl: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Url', UrlSchema)
