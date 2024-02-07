import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

function NotFound() {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },2000)
    },[])
  return (
    
    
    
    
    // we will less often use this
    // <Navigate to='/'/>
<h1>Not found</h1>
    
  )
}

export default NotFound