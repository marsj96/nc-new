import { useEffect, useState } from "react";
import { getArticles } from "../utils/getArticles";

const Home = () => {

    const [sortBy, setSortBy] = useState("")
    const [articles, setArticles] = useState([])

    const handleChange = (e) => {
        let {value} = e.target;
        setSortBy(value)
    }

    useEffect(() => {
        getArticles(sortBy).then((returnedArticles) => {
            setArticles(returnedArticles)
        })
    }, [sortBy])

    console.log(articles)

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
                    Comment count
                </option>
                <option>
                    Author
                </option>
            </select>
        </div>

        <br></br>

        {/* articles body */}
        <div className="articlesPage">

            {articles.map((article)=>{
                return (
                    <div>
                    <h4 className="articleTitle" key={article.title}>  {article.title} {`(${article.topic})`} </h4>
                    <p className="articleBody"> {article.body.slice(0, 75)}... </p>
                    <div> <p className="articleBottom"> {article.author} Votes:{article.votes} <button>Comments</button> </p>  </div>
                    </div>
                )
            })}

        </div>
        </div>
    )
}

export default Home