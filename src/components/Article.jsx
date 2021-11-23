import { useEffect } from "react"
import { useParams } from "react-router"
import { useContext, useState } from "react/cjs/react.development"
import { UserContext } from "../contexts/User"
import { getSingleArticle } from "../utils/getArticles"
import { getComments } from "../utils/getComments"
import { postSingleComment } from "../utils/postComment"

const Article = () => {

    const [singleArticle, setSingleArticle] = useState([])
    const [postComment, setPostComment] = useState(false)
    const [cancelPost, setCancelPost] = useState(false)
    const [commentContent, setCommentContent] = useState("")
    const [userInput, setUsersInput] = useState("")
    const [comments, setComment] = useState([])


    let { article_id } = useParams()
    const { loggedIn, user } = useContext(UserContext)

    const handleChange = (event) => {
        const comment = event.target.value
        setUsersInput(comment)
        handleSubmit(event, comment)
      }

    const handleSubmit = (event, comment) => {
        event.preventDefault()
        setCommentContent(comment)
    }

    useEffect(() => {
        getSingleArticle(article_id).then((returnedArticle) => {
            setSingleArticle(returnedArticle)
        })
    }, [article_id])

    useEffect(() => {
        getComments(article_id).then((comments)=>{
            setComment(comments)
        })
    }, [article_id, postComment])

    const sendComment = () => {
        postSingleComment(article_id, {username: user.username, body: commentContent})
    }

    console.log(comments)

    return (
    <div>
        <div className="articlesCards" key={singleArticle.article_id}>
            <h4 className="articlesTitle" key={singleArticle.title}>  {singleArticle.title} {`(${singleArticle.topic})`} </h4>
            <p className="articleBody"> {singleArticle.body} </p>
            <div> <p className="articleBottom"> {singleArticle.author} Votes:{singleArticle.votes} {singleArticle.created_at} </p>  </div>
        </div>     
        <div>

            {loggedIn ? 
            <div> 
                <button className="postCommentButton" onClick={()=>{
                    setPostComment(true)
                    setCancelPost(true)
                    }}>
                Post a comment 
                </button>

            {cancelPost ? <button onClick={()=>{
                setPostComment(false)
                setCancelPost(false)
                }}>
                X 
                </button> : ""}
            </div> : <p> Please log in to post a comment. </p>}  

            {postComment ? 
            <form onSubmit={handleSubmit}>
            <label> 
                <textarea className="commentPost" type="text" value={userInput} onChange={handleChange}/>
            </label>
            <br></br>
                <input className="loginButton" type="submit" value="Post" onClick={()=>{
                    sendComment()
                    setPostComment(false)
                    setCancelPost(false)
                }}/> 
            </form>
            : ""}         
        </div>
        <br></br>
        <div>
            {comments.map((comment)=>{
                return (
                    <div className="commentCard" key={comment.comment_id}>
                    <h3 className="commentAuthor"> {comment.author} </h3>
                    <p className="commentBody"> {comment.body} </p>
                    <p className="votesComment"> {comment.votes} </p>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Article