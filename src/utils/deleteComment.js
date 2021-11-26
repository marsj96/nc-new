import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://nc-news-reddit.herokuapp.com/api/',
})

export const deleteComment = (comment_id) => {

        return newsAPI.delete(`/comments/${comment_id}`)

}