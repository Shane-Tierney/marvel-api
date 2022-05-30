const express = require('express')
const { indexRender, isRunning, catchAll } = require('./controllers/marvel')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/documentation', indexRender)


app.all('*', catchAll)

app.listen(1337, isRunning)
