const fetch = require('node-fetch')

function fetchCheck (url) {
  return fetch(url)
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
      return false
    })
}

module.exports = fetchCheck
