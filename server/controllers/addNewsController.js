const addNewsModel = require('../models/addNews')

exports.index = (req, res) => {
    return res.render('addNews')
}

exports.register = async (req, res) => {
    await addNewsModel(req.body)
    return res.redirect('/')
}