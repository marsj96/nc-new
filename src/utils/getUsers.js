import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const getUsers = () => {
    return newsAPI.get(`/users`)
        .then((res) => {
        return res.data.users
        })
}