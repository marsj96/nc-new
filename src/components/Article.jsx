import { useEffect } from "react"
import { useParams } from "react-router"
import { useContext, useState } from "react/cjs/react.development"
import { UserContext } from "../contexts/User"
import { getSingleArticle } from "../utils/getArticles"

const Article = () => {

    const [singleArticle, setSingleArticle] = useState([])
    const [postComment, setPostComment] = useState(false)
    const { article_id } = useParams()
    const { loggedIn } = useContext(UserContext)

    useEffect(() => {
        getSingleArticle(article_id).then((returnedArticle) => {
            setSingleArticle(returnedArticle)
        })
    }, [article_id])

    return (
    <div>
        <div className="articlesCards" key={singleArticle.article_id}>
            <h4 className="sTitle" key={singleArticle.title}>  {singleArticle.title} {`(${singleArticle.topic})`} </h4>
            <p className="articleBody"> {singleArticle.body} </p>
            <div> <p className="articleBottom"> {singleArticle.author} Votes:{singleArticle.votes} {singleArticle.created_at} </p>  </div>
        </div>     
        <div>

            {loggedIn ? <div> <button className="postCommentButton" onClick={()=>{
                setPostComment(true)
            }}> Post a comment </button> <button onClick={()=>{
                setPostComment(false)
            }}> X </button> </div>: <p> Please log in to post a comment. </p>}  

            {postComment ? 
            <form >
            <label> 
                <textarea className="commentPost" type="text"/>
            </label>
            <br></br>
                <input className="loginButton" type="submit" value="Post"/> 
            </form>
            : ""}         
        </div>
        <br></br>
        <div>
            Comments
        </div>
    </div>
    )
}

export default Article