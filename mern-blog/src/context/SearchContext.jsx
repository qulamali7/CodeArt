import React, { createContext, useState } from 'react'
export const SerachContext = createContext()
const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("")
    function handleSearch(e) {
        setSearch(e.target.value)

    }
    return (
        <SerachContext.Provider value={{ search, handleSearch }}>{children}</SerachContext.Provider>
    )
}

export default SearchProvider