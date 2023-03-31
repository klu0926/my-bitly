const fetch = require('node-fetch')

function fetchCheck(url) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return true
      } else {
        return false
      }
    })
    .catch(error => {
      console.log(error)
      return false
    })
}

module.exports = fetchCheck
