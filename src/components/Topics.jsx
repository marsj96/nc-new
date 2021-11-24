import { useEffect, useState } from "react/cjs/react.development"

const Topics = () => {

    const [topics, setTopics] = useState([])

    useEffect(()=>{
        
    })

    return (
        <div>{topics.map((topic)=>{
            {topic.title}
            {topic.body}
        })}</div>
    )
}

export default Topics