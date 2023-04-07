const getAllNews = require('../models/getNews')

const getAllNewsMidd = async (req, res, next) => {
    req.news = await getAllNews()
    next()
}

module.exports = getAllNewsMidd