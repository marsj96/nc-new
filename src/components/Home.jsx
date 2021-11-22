import { useEffect, useState } from "react";

const Home = () => {

    const [sortBy, setSortBy] = useState()
    const [articles, setArticles] = useState()

    const handleChange = (e) => {
        let {value} = e.target;
        setSortBy(value)
    }

    useEffect(() => {
        getArticles().then((returnedArticles) => {
            setArticles(returnedArticles)
        })
    }, [])

    return (
        <div>
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
        <div className="articlesPage">
            Hello
        </div>
        </div>
    )
}

export default Home