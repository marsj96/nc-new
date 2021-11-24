import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/getArticles";

const Home = () => {

    const [sortBy, setSortBy] = useState("")
    const [articles, setArticles] = useState([])
    const [order, setOrder] = useState("")

    const handleChange = (e) => {
        let {value} = e.target;
        setSortBy(value)
        setOrder("")
    }

    useEffect(() => {
        getArticles(sortBy, order).then((returnedArticles) => {
            setArticles(returnedArticles)
        })
    }, [sortBy, order])

    return (
        <div>
        {/* filter box */}
        <div className="filterBy">
            Filter:  
            <select onChange={handleChange}>
                <option>
                    Date
                </option>
                <option>
                    Title
                </option>
                <option>
                    Topic
                </option>
                <option>
                    Votes
                </option>
                <option>
                    Comment_count
                </option>
                <option>
                    Author
                </option>
            </select>
            <button className="ascButton" onClick={()=>{
                setOrder("ASC")     
            }}> ↑ </button> <button onClick={()=>{
                setOrder("DESC")
            }} > ↓ </button>
        </div>
        
        <br></br>

        {/* articles body */}
        <div className="articlesPage">

            {articles.map((article)=>{
                return (
                    <ul className="articlesCards">

                        <li  key={article.title}> 
                            <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <h2 className="articleTitle"> 
                                    {article.title}                                         
                                </h2> 
                            </Link>                           
                            <Link to={`/topics/${article.topic}`} style={{ textDecoration: 'none', color: 'blue' }} className="articleTitle">
                                <p>
                                    {` (${article.topic})`}
                                </p>  
                            </Link> 
                        </li>

                        <li className="articleBody" key={article.body}> 
                            <p> {article.body.slice(0, 200)}... </p>
                        </li>
                        
                        <li className="articleBottom">
                            <p key={article.author}>
                                {article.author} Votes:{article.votes} {article.created_at.slice(0, 10)} ->
                                <button>
                                    <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                    Comments
                                    </Link>
                                </button>
                            </p>
                        </li>                   
                    </ul>          
                )
            })}
        </div>
        </div>
    )
}

export default Home