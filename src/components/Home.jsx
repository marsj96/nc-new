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
                    <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <div className="articlesCards" key={article.title}>
                    <h4 className="articleTitle" key={article.title}>  {article.title} {`(${article.topic})`} </h4>
                    <p className="articleBody"> {article.body.slice(0, 100)}... </p>
                    <div> <p className="articleBottom"> {article.author} Votes:{article.votes} <button>Comments</button>  {article.created_at.slice(0, 10)} </p>  </div>
                    </div>
                    </Link>
                )
            })}

        </div>
        </div>
    )
}

export default Home