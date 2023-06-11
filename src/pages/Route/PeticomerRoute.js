import React from 'react'
import useIsPeticomer from '../../hooks/useIsPeticomer';
import { url } from '../../routes/Utility';
import { Navigate } from 'react-router-dom';

const PeticomerRoute = ({ children }) => {
    const isPeticomer = useIsPeticomer();
    
    if (isPeticomer) return <Navigate to={url("settings")} />

    return children;
}

export default PeticomerRoute