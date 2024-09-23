import React from 'react'
import { Navigate } from 'react-router-dom';
import { useLoginContext } from './LoginContext';

const RouteGuard = ({children}) => {
  const {loggedIn,setLoggedIn} = useLoginContext();
  if(loggedIn){
    return children;
  }
  return <Navigate to="/login" />
}

export default RouteGuard