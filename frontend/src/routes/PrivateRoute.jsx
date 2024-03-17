import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

function PrivateRoute({ roles }) {
    const { decode } = useContext(UserContext)
    const Admin = decode && decode.role === "admin";

    return Admin ? <Outlet></Outlet> : <Navigate to={"/"} />
}

export default PrivateRoute