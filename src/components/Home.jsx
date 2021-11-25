import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/getArticles";
import { Select } from "@mui/material";
import { Box } from "@mui/system";
import { NativeSelect } from "@mui/material";
import { InputLabel } from "@mui/material";

const Home = () => {

    const [sortBy, setSortBy] = useState("")
    const [order, setOrder] = useState("")
    const [articles, setArticles] = useState([])
    

    const handleChange = (e) => {
        let {value} = e.target;
        console.log("-------->", value)
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
        <Box sx={{ minWidth: 120 }}>
            
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Filter
            </InputLabel>

            <NativeSelect onChange={handleChange}>
                <option value={"Title"}>Title</option>
                <option value={"Topic"}>Topic</option>
                <option value={"Votes"}>Votes</option>
                <option value={"Comment_count"}>Comment count</option>
                <option value={"Author"}>Author</option>
            </NativeSelect>
            
        </Box>
                {/* </option>
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
                </option> */}
            <button className="ascButton" onClick={()=>{
                setOrder("ASC")     
            }}> ↑ </button> 
            <button className="ascButton" onClick={()=>{
                setOrder("DESC")
            }} > ↓ </button>
        </div>
        
        <br></br>

        {/* articles body */}
        <div className="articlesPage">

            {articles.map((article)=>{
                return (
                    <ul className="articlesCards">

                        {/*Header and title for each article card*/}
                        <li key={article.article_id}> 
                            <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <h2 className="articleTitle" key={article.article_id}> 
                                    {article.title}                                         
                                </h2> 
                            </Link>                           
                            <Link to={`/topics/${article.topic}`} style={{ textDecoration: 'none', color: 'blue' }} className="articleTitle">
                                <p>
                                    {` (${article.topic})`}
                                </p>  
                            </Link> 
                        </li>

                        {/*Body of article card*/}
                        <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <li className="articleBody" key={article.body}> 
                                <p key={article.body}> {article.body.slice(0, 200)}... </p>
                            </li>
                        </Link>    
                        
                        {/*Bottom of article card, includes the author, votes, created_at and the link to comments*/}
                        <li key={article.created_at}>
                            <p className="articleBottom" key={article.created_at}>
                                {`${article.author} `}
                                Votes:{`${article.votes} `}
                                {`${article.created_at.slice(0, 10)} `}
                                <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                                Comments 
                                </Link>
                                {` (${article.comment_count})`}
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