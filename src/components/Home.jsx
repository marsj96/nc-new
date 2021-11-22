import { useState } from "react";

const Home = () => {

    const [sortBy, setSortBy] = useState()

    const handleChange = (e) => {
        let {value} = e.target;
        setSortBy(value)
    }   

    return (
        <div>
            Filter 
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
    )
}

export default Home