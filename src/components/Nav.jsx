
import { AppBar, Button, IconButton, NativeSelect, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import { UserContext } from "../contexts/User"
import { getUsers } from "../utils/getUsers"


const Nav = () => {

    const [users, setUsers] = useState([])

    const { setLoggedIn, user, setUser, loggedIn } = useContext(UserContext)


    useEffect(()=>{
        getUsers()
        .then((res)=>{
            setUsers(res)
        })
    }, [])
    
    useEffect(() => {
        if(user === "User" || user.length === 0) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
        
      }, [user, setLoggedIn]);

    const handleChange = (e) => {
        let {value} = e.target;
        handleSubmit(value)
    }

    const handleSubmit = (value) => {
        setUser(value)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar style={{maxHeight: "1px", fontFamily: 'Roboto sans-serif'}}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>

                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <h5 style={{textAlign: "left", wordSpacing: "25px"}}> 
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            {`Home `}
                        </Link>   
                        <Link to="/topics" style={{ textDecoration: 'none', color: 'white' }}>
                            {`Topics `}
                        </Link>   
                    </h5>
                </Typography>
                <Box sx={{ marginRight:"30px", background: loggedIn ? "none" : "white", borderRadius: "3px", width: loggedIn ? "115px" : "150px", borderStyle: loggedIn ? "none" : "solid"}}>
                {loggedIn ? 
                <Typography style={{color: "white"}}>
                    {user} {}
                </Typography>
                :
                <NativeSelect onChange={handleChange}>
                    <option value="null"> Select user </option>
                    {users.map((user)=>{
                        return (
                            <option key={user.username} value={user.username}> {user.name} </option>
                        )
                    })}
                </NativeSelect>
                }
                </Box>
                {loggedIn ?
                <Button size={"small"} style={{color: "white", background: "red", marginLeft: "-20px", width: "100px"}} onClick={()=>{
                    setUser([])
                    setLoggedIn(false)
                }}>
                    Log out
                </Button>
                : ""
                }
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Nav
