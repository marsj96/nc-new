import React from 'react'
import { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {

    const [user, setUser] = useState("")
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <UserContext.Provider value={{user, setUser, loggedIn, setLoggedIn}}>
            {children}
        </UserContext.Provider>
    )
}