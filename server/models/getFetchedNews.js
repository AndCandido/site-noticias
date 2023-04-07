const getFetchedNews = (news, searchTerm) => {
    const fetchedNews = news.filter(objNews => {
        let newsItems = [ objNews.news, objNews.category, objNews.content ]
        
        newsItems = newsItems.map(newItem => {
            return newItem = String(newItem)
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
        })

        const includeSearchTerm = newsItems.map(item => item.includes(searchTerm))

        return includeSearchTerm.includes(true)
    })
    return fetchedNews
}

module.exports = getFetchedNews