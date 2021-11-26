import { Card } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import { getAllTopics } from "../utils/getAllTopics"

const AllTopics = () => {

    const [topics, setTopics] = useState([])

    useEffect(()=>{
        getAllTopics()
        .then((response)=>{
            setTopics(response)
        })
    }, [])

    return (
        <div>
            {topics.map((topic)=>{
                return (
                    <Card variant="outlined" style={{margin: "10px", background:"whitesmoke" }}>
                    <Link to={`/topics/${topic.slug}`} style={{ textDecoration: 'none', color: 'white' }}>
                    <ul className="articlesCards" key="1">
                        <li>
                            <h2 className="articleTitle" key={topic.slug}> {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)} </h2>
                        </li>
                        <li>
                            <p className="articleBody" key={topic.description}> {topic.description} </p>
                        </li>
                        <li>
                            <p style={{color: "black", textAlign: "left", marginBottom: "-5px"}} key="1"> Click for more.. </p>
                        </li>
                    </ul>
                    </Link>
                    </Card>
                )
            })}
        </div>
    )
}

export default AllTopics