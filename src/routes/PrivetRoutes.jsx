import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../context api/AuthProvider';
import { Navigate } from 'react-router-dom';

// if children spelling mistek its not be works
const PrivetRoutes = ({ children }) => {

const {user,loading} = useContext(FirebaseContext)

if(loading){
    return <span className="loading loading-ring loading-lg"></span>
}else{

}





   if(user){
       return children;
   }


    return (
         <Navigate to="/login"></Navigate>
    );
};

export default PrivetRoutes;

