// modules
const express = require('express')
const handlebars = require('express-handlebars')
const Router = require('./routers')


// app 
const app = express()
const port = 3000

// app view engine
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// app use
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(Router)


// app route


// app start
app.listen(port, () => {
  console.log(`server live on http://localhost:${port}`)
})
