import { Card } from "@mui/material"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import { getAllTopics } from "../utils/getAllTopics"
import { getTopics } from "../utils/getTopic"

const AllTopics = () => {

    const [topics, setTopics] = useState([])
    const [articlePrev, setArticlePreview] = useState([])

    useEffect(()=>{
        getAllTopics()
        .then((response)=>{
            setTopics(response)
        })
    }, [])

    useEffect(()=>{
        getTopics()
        .then((response)=>{
            setArticlePreview(response)
        })
    }, [])

    return (
        <div>
            {topics.map((topic)=>{
                return (
                <Card variant="outlined" style={{margin: "10px", background:"whitesmoke" }} key={topic.slug}>
                    <Link to={`/topics/${topic.slug}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <ul className="articlesCards" key="test">
                            <li>
                                <h2 className="articleTitle" key={topic.slug}> {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)} </h2>
                            </li>
                            <li>
                                <p className="articleBody" key={topic.description}> {topic.description} </p>
                            </li>
                            <li>
                                <Card>
                                    {articlePrev.map((article)=>{
                                        return article.title === topic.slug
                                    })}
                                </Card>
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