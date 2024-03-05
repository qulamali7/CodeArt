import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";
export const UserContext = createContext();

function UserProvider({ children }) {
    const [token, setToken] = useState(Cookies.get("token") ? Cookies.get("token") : null);
    const [decode, setDecode] = useState(token ? jwtDecode(token) : null);
    function addToken(value) {
        setToken(value);
        console.log(value);
        const decoded = jwtDecode(value)
        setDecode(decoded)
        Cookies.set("token", value, { expires: 7, secure: true });
    }
    return (
        <UserContext.Provider value={{ setDecode, setToken, token, addToken, decode }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;
