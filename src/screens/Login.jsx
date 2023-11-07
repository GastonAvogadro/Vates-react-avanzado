import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    const onLine = true

    useEffect(()=> {
        onLine && navigate('/')
    }, [])
  return (
    <div>Login</div>
  )
}

export default Login