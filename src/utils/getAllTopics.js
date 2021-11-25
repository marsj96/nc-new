import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const getAllTopics = () => {

        return newsAPI.get(`/topics`)
        .then((res) => {
            console.log(res)
            return res.data.topics
        })

}