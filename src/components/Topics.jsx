import { Card } from "@mui/material"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTopics } from "../utils/getTopic"

const Topics = () => {

    const filter = useParams()
    
    const [topics, setTopics] = useState([])

    useEffect(()=>{
        getTopics(filter.topic).then((response)=>{
            setTopics(response)
        })
    }, [filter.topic])

    return (
        <div>
            {topics.length > 0 ? <h2> {topics[0].topic.charAt(0).toUpperCase() + topics[0].topic.slice(1)} Articles </h2> : " "}
        {topics.map((topic)=>{
            return (
                <div key={topic.article_id}>
                    <Card variant="outlined" style={{margin: "10px", background:"whitesmoke" }}>
                    <ul className="articlesCards">
                        <Link to={`/articles/${topic.article_id}`} style={{ textDecoration: 'none'}}>
                            <li>                               
                                <h2 className="articleTitle"> {topic.title} </h2>                              
                            </li>
                            <li className="articleBody">
                                <p>
                                    {topic.body.slice(0,100)}...
                                </p>
                            </li>
                            <li>
                                <p className="articleBottom" style={{ textDecoration: 'none', color: "black"}}>
                                    {topic.author} Votes:{topic.votes}
                                </p>
                            </li>
                        </Link>
                    </ul>
                    </Card>
                </div>
            )
           
        })}</div>
    )
}

export default Topics