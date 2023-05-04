import React, { useContext } from 'react';
import { AuthContex } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex);
    const location = useLocation()
    if(loading){
        return 
    }

    if(user){
        return children
    }
    return <Navigate state={{from: location.pathname}} to='/login'></Navigate>
};

export default PrivateRoute;