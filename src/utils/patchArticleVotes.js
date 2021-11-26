import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const patchArticleVote = (article, amount) => {

    return newsAPI.patch(`/articles/${article}`, { inc_votes: amount })
        .then((res) => {
        return res.data
        })
}