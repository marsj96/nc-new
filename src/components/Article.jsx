import { useEffect } from "react"
import { useParams } from "react-router"
import { useContext, useState } from "react/cjs/react.development"
import { UserContext } from "../contexts/User"
import { getSingleArticle } from "../utils/getArticles"
import { getComments } from "../utils/getComments"
import { patchArticleVote } from "../utils/patchArticleVotes"
import { postSingleComment } from "../utils/postComment"
import { TextField, Button, Card } from "@mui/material"
import { deleteComment } from "../utils/deleteComment"

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
        <div key={singleArticle.article_id}>
        <Card variant="outlined" style={{margin: "10px", background:"whitesmoke" }}>
            <ul className="articlesCards">

                {/* article title */}
                <li>
                    <h2 className="articleTitle" key={singleArticle.title}>  
                        {singleArticle.title} 
                    </h2>
                </li>

                {/* article body */}
                <li>
                    <p className="articleBody"> {singleArticle.body} </p>
                </li>

                {/* article bottom (votes, author) */}
                <li>
                    <div className="articleBottom">
                        <h4  className="articleBottom">
                            {singleArticle.author} Votes:{`${singleArticle.votes + votes} `} 
                        </h4>
                        {loggedIn ?
                        <p className="upvoteButton">
                            <button onClick={()=>{
                                patchArticleVote(article_id, 1)
                                setPostComment(false)
                                setVotes((prevVote)=>{
                                    const newVote = prevVote
                                    return newVote+1
                                })
                                }}> 
                                    + 
                            </button> 
                        </p> : ""}

                        {loggedIn ?
                        <p className="upvoteButton">
                            <button onClick={()=>{
                                patchArticleVote(article_id, -1)
                                setVotes((prevVote)=>{
                                const newVote = prevVote
                                return newVote-1
                                })}}> 
                                    <span> - </span>
                            </button> 
                        </p> : ""} 
                    </div>
                </li>
            </ul>
            </Card>
            
            {/* Post a comment box (only renders if logged in) */}
            {loggedIn ? 
            <div> 
                <Button variant="contained" style={{
                        borderRadius: 20,
                        marginBottom: "15px",
                        marginRight: "10px",
                        background: "#40c4ff",
                        color: "white"
                     }}  
                     onClick={()=>{
                    setPostComment(true)
                    setCancelPost(true)
                    }}>
                        Post a comment 
                </Button>

            {/* Button to cancel post (only appears if post box has been opened) */}
                {cancelPost ? 
                     <Button variant="contained" style={{
                        borderRadius: 20,
                        marginBottom: "15px",
                        background: "#D22B2B",
                        color: "white"
                     }} 
                     onClick={()=>{
                        setPostComment(false)
                        setCancelPost(false)
                        }}>
                            X 
                    </Button> : ""}
                </div> 
                    : 
                <p> Please log in to post a comment. </p>}  


             {/* If postcomment is true, re-renders to display a text area in which user can post comment */}
                {postComment ? 
                <form onSubmit={handleSubmit}>
                    <label> 
                        <TextField fullWidth id="standard-basic" className="commentPost" style= {{border: "white"}}label="Press enter to send comment" variant="outlined" value={userInput} onChange={handleChange} />
                        {/* <textarea className="commentPost" type="text"  /> */}
                    </label>

                    
                {/* Post comment button that resets the state to close the comment box and sends a post request. Temporarliy updates state of comments to show comment when posted. */}
                    <Button className="loginButton" type="submit" value="Send" onClick={()=>{
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
        
        <div>
            {comments.map((comment)=>{
                return (
                    <Card key={comment.comment_id} variant="outlined" style={{margin: "10px", background:"whitesmoke" }}>
                    <div>
                    <h3 className="commentAuthor"> {comment.author} </h3>
                    <p className="commentBody"> {comment.body} </p>
                    <p className="votesComment"> {comment.created_at.slice(0,10)}</p>
                    {loggedIn && user.username === comment.author ? 
                    <Button size="small" onClick={()=>{
                        deleteComment(comment.comment_id)
                        setComment((prevComments)=>{
                        let commentCopy = [...prevComments]
                        
                        const newComments = commentCopy.filter((singleComment)=>{
                            return singleComment.comment_id !== comment.comment_id
                        })

                        return newComments
                        })
                    }}>
                    Delete
                    </Button>   
                    : ""}   
                    </div>
                    </Card>
                )
            })}
        
        </div>
        
    </div>
    )
}

export default Article