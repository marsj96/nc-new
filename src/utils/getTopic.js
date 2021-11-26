import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const getTopics = (topic) => {

        return newsAPI.get(`/articles?topic=${topic}`)
        .then((res) => {
            return res.data.articles
        })

}