import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const postSingleComment = (id, comment) => {
    return newsAPI.post(`/articles/${id}/comments`, comment)
        .then((res) => {
        return res.data
        })
}