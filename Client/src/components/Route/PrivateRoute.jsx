import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

 const isAuth = useSelector((state)=>state.AuthReducer.isAuth)
 
const location = useLocation()

 if(!isAuth){
return <Navigate to='/login' state={{from:location}} replace/>
 }

  return children;
 

}

export default PrivateRoute