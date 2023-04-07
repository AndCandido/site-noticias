const connect = require('./connectMysql')

const addNews = async (body) => {
    if(!isValidFields(body)) return false

    const currentData = new Date().toLocaleString('pt-br',{ dateStyle: 'short' })
    const query = 'INSERT INTO news (news, category, content, created_date) VALUES (?, ?, ?, ?)'
    const res = await connect.execute(
        query,
        [ body.news, body.category, body.content, currentData]
    )
    return res
}

function isValidFields(body) {
    const verification = 
        !body.news ||
        !body.category ||
        !body.content ||
        body.news.length < 1 || body.news.length > 70 ||
        body.category.length < 1 || body.category.length > 30 ||
        body.content.length < 1 || body.content.length > 800
    
    if(verification) return false
    return true
}

module.exports = addNews