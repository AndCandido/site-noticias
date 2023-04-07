const connect = require('./connectMysql')

const getAllNews = async () => {
    const [response] = await connect.execute('SELECT * FROM news')
    return response
}

module.exports = getAllNews