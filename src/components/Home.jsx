import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/getArticles";
import { Box } from "@mui/system";
import { Button, Card, CardActions, NativeSelect } from "@mui/material";
import { InputLabel } from "@mui/material";



const Home = () => {

    const [sortBy, setSortBy] = useState("")
    const [order, setOrder] = useState("")
    const [articles, setArticles] = useState([])
    

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
        <Box sx={{ minWidth: 120 }}>
            
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Filter
            </InputLabel>

            <NativeSelect onChange={handleChange}>
                <option value={"Date"}>Date</option>
                <option value={"Title"}>Title</option>
                <option value={"Topic"}>Topic</option>
                <option value={"Votes"}>Votes</option>
                <option value={"Comment_count"}>Comment count</option>
                <option value={"Author"}>Author</option>
            </NativeSelect>
            
        </Box>
            <Button className="ascButton" style={{
                        borderRadius: "20",
                        maxHeight: "30px",
                        marginTop: "20px",
                        marginLeft: "20px",
                        marginBottom: "15px",
                        marginRight: "10px",
                        background: "#40c4ff",
                        color: "white"
                     }}  
                     onClick={()=>{
                    setOrder("ASC")     
            }}> ASC </Button> 
            <Button className="ascButton" style={{
                        borderRadius: "20",
                        maxHeight: "30px",
                        marginBottom: "15px",
                        marginTop: "20px",
                        marginRight: "10px",
                        background: "#40c4ff",
                        color: "white"
                     }}  
                     onClick={()=>{
                setOrder("DESC")
            }} > DESC </Button>
        </div>
        
        <br></br>

        {/* articles body */}
        <div className="articlesPage">

            {articles.map((article)=>{
                return (
                    <Card variant="outlined" style={{margin: "10px", background:"whitesmoke" }}>
                    <ul className="articlesCards">

                        {/*Header and title for each article card*/}
                        <li key={article.article_id}> 
                            <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <h2 className="articleTitle" key={article.article_id}> 
                                    {article.title}                                         
                                </h2> 
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
                            <div className="articleBottom" key={article.created_at}>
                                {`${article.author} `}
                                Votes:{`${article.votes} `}
                                {`${article.created_at.slice(0, 10)} `}
                                <CardActions>
                                    <Link to={`/articles/${article.article_id}`} style={{ textDecoration: 'none', color: 'blue' }}>
                                    <Button size="small" style={{marginTop: "15px", marginLeft: "-10px", background: "#40c4ff", color: "white"}}>Comments</Button> 
                                    </Link>
                                </CardActions>      
                            </div>
                        </li>   
                
                    </ul>
                    </Card>          
                )
            })}
        </div>
    </div>
    )
}

export default Home