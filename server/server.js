require('dotenv').config()
const router = require('./router')
const cors = require('cors')
const path = require('path')
const express = require('express')
const app = express()

const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(router)
app.use(express.static(path.resolve(__dirname, '..', 'public')))

// Setando views
app.set('view engine', 'ejs')
app.set('views', './views')

app.listen(port, () => console.log('Rodando em http://localhost:' + port))