import React from 'react'
import SearchProvider from './SearchContext'
import UserProvider from './UserContext'


const MainProvider = ({ children }) => {
    return (
        <SearchProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </SearchProvider>
    )
}

export default MainProvider