const express = require('express')
const addDays = require('date-fns')
const app = express()

app.get('/', (request, response) => {
  const prdate = new Date()
  const newdate = addDays(prdate, 100)
  response.send(
    `${newdate.getDate()}/${newdate.getMonth()}/${newdate.getFullYear()}`,
  )
})
module.exports = app
