import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const getComments = (id) => {

        return newsAPI.get(`/articles/${id}/comments`)
        .then((res) => {
            return res.data.comments
        })

}