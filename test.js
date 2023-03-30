const validUrl = require('valid-url')

const url1 = 'www.google.com'
const url2 = 'http://www.google.com'

if (validUrl.isWebUri(url1)) {
  console.log('url 1 is true')
} else {
  console.log('url 1 is false')
}

if (validUrl.isWebUri(url2)) {
  console.log('url 2 is true')
} else {
  console.log('url 2 is false')
}

