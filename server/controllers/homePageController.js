exports.index = async (req, res) => {
    const news = req.news
    return res.render('index', { news: news })
}