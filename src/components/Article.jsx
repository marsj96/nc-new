import { useEffect } from "react"
import { useParams } from "react-router"
import { useContext, useState } from "react/cjs/react.development"
import { UserContext } from "../contexts/User"
import { getSingleArticle } from "../utils/getArticles"
import { getComments } from "../utils/getComments"
import { patchArticleVote } from "../utils/patchArticleVotes"
import { postSingleComment } from "../utils/postComment"

const Article = () => {

    const [singleArticle, setSingleArticle] = useState([])
    const [postComment, setPostComment] = useState(false)
    const [cancelPost, setCancelPost] = useState(false)
    const [commentContent, setCommentContent] = useState("")
    const [userInput, setUsersInput] = useState("")
    const [comments, setComment] = useState([])
    const [votes, setVotes] = useState(0)

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
    }, [article_id])

    return (
    <div>
        <div className="articlesCards" key={singleArticle.article_id}>
            <h4 className="articlesTitle" key={singleArticle.title}>  {singleArticle.title} {`(${singleArticle.topic})`} </h4>
            <p className="articleBody"> {singleArticle.body} </p>
            <div> <div className="articleBottom"> {singleArticle.author} 
            {loggedIn ? 
            <div>
                Votes: {singleArticle.votes + votes} <button onClick={()=>{
                patchArticleVote(article_id, 1)
                setPostComment(false)
                setVotes((prevVote)=>{
                    const newVote = prevVote
                    return newVote+1
                })
            }}> up </button> <button onClick={()=>{
                patchArticleVote(article_id, -1)
                setVotes((prevVote)=>{
                    const newVote = prevVote
                    return newVote-1
                })
            }}> down </button>
            </div>: ""} 
               {singleArticle.created_at} </div>  </div>
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
                    postSingleComment(article_id, {username: user.username, body: commentContent})
                    setPostComment(false)
                    setCancelPost(false)
                    setComment((prevValue)=>{
                        const newComments = [...prevValue]
                        newComments.unshift({author: user.username, body: commentContent, votes: 0, created_at: "Just now..", comment_id: 500})
                        return newComments
                    })
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
                    <p className="votesComment"> Votes:{comment.votes} {comment.created_at}</p>   
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Article