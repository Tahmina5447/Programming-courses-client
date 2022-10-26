import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../Components/MainContext/MainContext';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
   const location=useLocation();

    if(loading){
        return <p>Loading....</p>
    }

    if(!user){
        return <Navigate to='/registration' state={{from:location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;