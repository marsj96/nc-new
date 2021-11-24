import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { UserContext } from "../contexts/User"
import { getUsers } from "../utils/getUsers"


const Nav = () => {

    const [users, setUsers] = useState([])
    const [userInput, setUsersInput] = useState("")
    const [inputError, setInputError] = useState(false)

    const { setLoggedIn, user, setUser, loggedIn } = useContext(UserContext)


    useEffect(()=>{
        getUsers()
        .then((res)=>{
            setUsers(res)
        })
    }, [])
    

    const handleChange = (event) => {
        const currentUser = event.target.value
        setUsersInput(currentUser)
        handleSubmit(event, currentUser)
      }

    const handleSubmit = (event, currentUser) => {
        event.preventDefault()
        setUser(currentUser)

        users.forEach(singleUser => {
            if(singleUser.username === user) {
                setUser(singleUser)
                setLoggedIn(true)
            } else {
                setInputError(true)
            }
        });
    }

    // returns navBar with login avatar
    if(loggedIn) {
        return (
            <nav className="bar">
                <nav className="navBar"> 
                    <img src={user.avatar_url} alt={user.username} className="avatarIMG"/>
                    <h4 className="usernameNav"> {user.username} </h4>
                    <h4 className="navBarButtons">
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> Topics
                    </h4>
                </nav>
            </nav>
        )
    }

    // returns navBar with no login 
    return (
        <nav className="bar">
            <nav className="navBar"> 
            <form className="loginBox" onSubmit={handleSubmit}>
            <label> 
                <input className={inputError ? 'error' : ''} type="text" value={userInput} style={{ width:"90px" }} onChange={handleChange}/>
            </label>
                <input className="loginButton" type="submit" value="Login"/>
            </form>
            <h4 className="navBarButtons">
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> Topics
            </h4>
            </nav>
        </nav>
    )
}

export default Nav
