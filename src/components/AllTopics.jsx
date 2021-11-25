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
                    <ul className="articlesCards">
                        <Link to={`/topics/${topic.slug}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <li>
                            <h2 className="articleTitle"> {topic.slug} </h2>
                        </li>
                        <li>
                            <p className="articleBody"> {topic.description} </p>
                        </li>
                        </Link>
                    </ul>
                )
            })}
        </div>
    )
}

export default AllTopics