const getFetchedNews = require('../models/getFetchedNews')

exports.index = async (req, res) => {
    const searchTerm = req.query.q
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")

    const fetchedNews = getFetchedNews(req.news, searchTerm)
    
    return res.render('index', { news: fetchedNews })
}