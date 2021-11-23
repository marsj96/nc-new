import React from 'react'
import { useState } from 'react';

export const UserContext = React.createContext();

export const UserProidver = ({children}) => {
    const [user, setUser] = useState({})

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}