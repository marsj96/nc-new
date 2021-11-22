import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const getArticles = (query) => {
    return newsAPI.get('/articles')
    .then((res) => {
        return res.data.articles
    })
}