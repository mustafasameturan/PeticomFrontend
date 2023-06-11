import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { url } from '../../routes/Utility';

const AuthRoute = ({ children }) => {

    const token = useSelector(state => state.userStore.token);

    if (!token) return <Navigate to={url("auth.login")} />

    return children;

}

export default AuthRoute