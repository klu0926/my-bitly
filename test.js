const dataExist = require('./tools/dataExist')
const db = require('./config/mongoose')



db.once('open', async () => {
  const exist = await dataExist('originalUrl', 'https://tw.yahoo.com')

  console.log(exist)
  console.log(exist.shortUrl)

})
