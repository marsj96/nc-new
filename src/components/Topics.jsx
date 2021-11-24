import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development"
import { getTopics } from "../utils/getTopic"

const Topics = () => {

    const filter = useParams()
    
    const [topics, setTopics] = useState([])

    useEffect(()=>{
        getTopics(filter.topic).then((response)=>{
            console.log(response)
            setTopics(response)
        })
    }, [filter.topic])

    return (
        <div>{topics.map((topic)=>{
            return (
                <div key={topic.article_id}>
                    <Link to={`/articles/${topic.article_id}`}>
                        {topic.title}
                    </Link>  
                </div>
            )
           
        })}</div>
    )
}

export default Topics