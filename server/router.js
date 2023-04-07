const express = require('express')
const router = express.Router()

// Controllers
const homePageController = require('./controllers/homePageController') 
const addNewsController = require('./controllers/addNewsController') 
const searchController = require('./controllers/searchController') 

// Middlewares
const getAllNewsMid = require('./middlewares/getAllNews')

// Home
router.get('/', getAllNewsMid, homePageController.index)

// Search
router.get('/search', getAllNewsMid, searchController.index)

// Add news
router.get('/addNews', addNewsController.index)
router.post('/addNews/register', addNewsController.register)

module.exports = router