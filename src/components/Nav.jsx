import { useContext, useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { UserContext } from "../contexts/User"
import { getUsers } from "../utils/getUsers"


const Nav = () => {

    const [users, setUsers] = useState([])
    const [userInput, setUsersInput] = useState("")

    const { setLoggedIn, user, setUser, loggedIn } = useContext(UserContext)


    useEffect(()=>{
        getUsers()
        .then((res)=>{
            setUsers(res)
        })
    }, [])
    

    const handleChange = (event) => {
        console.log(userInput)
        setUsersInput(event.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser(userInput)

        users.forEach(singleUser => {
            if(singleUser.username === user) {
                setUser(singleUser)
                setLoggedIn(true)
            }
        });
    }
    
    console.log(loggedIn)

    if(loggedIn) {

        return (
            <nav className="bar">
                <nav className="navBar"> 
                    <img src={user.avatar_url} alt={user.username} className="avatarIMG"/>
                    <h4 className="usernameNav"> {user.username} </h4>
                    <h4 className="navBarButtons">
                    Home Topics
                    </h4>
                </nav>
            </nav>
        )
    }

    return (
        <nav className="bar">
            <nav className="navBar"> 
            <form className="loginBox" onSubmit={handleSubmit}>
            <label> 
                <input className="inputBox" type="text" value={userInput} onChange={handleChange}/>
            </label>
                <input className="loginButton" type="submit" value="Login"/>
            </form>
            <h4 className="navBarButtons">
            Home Topics
            </h4>
            </nav>
        </nav>
    )
}

export default Nav
