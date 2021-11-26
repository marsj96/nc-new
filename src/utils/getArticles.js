import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const getArticles = (query, order) => {

    if(order) {
        return newsAPI.get(`/articles?order=${order}`)
        .then((res) => {
        return res.data.articles
        })
    }

    if(query !== "" && query !== "Date") {
        const queryValue = query.toLowerCase()
        console.log(queryValue)
        return newsAPI.get(`/articles?sort_by=${queryValue}`)
        .then((res) => {
        return res.data.articles
        })
    } else {
        return newsAPI.get('/articles')
        .then((res) => {
        return res.data.articles
    })
    }

    
}

export const getSingleArticle = (id) => {

        return newsAPI.get(`/articles/${id}`)
        .then((res) => {
            return res.data.articles
        })

}