import React from 'react'
import "../styles/Login.css"

const Login = () => {
  return (
    <div className='Login_Whole'>
      <div className="Login">
          <h1 className='Login_text'>Login</h1>
          <input type="email" placeholder='Email...' className='byuser'/><br/>
          <input type="password" placeholder='Password...'className='byuser' /><br />
          <div className='btn'>
          <button className='SignIn'>Sign In</button>
          </div>
          <h3 className='Login_text'>or Login with:</h3>
      </div>
    </div>
  )
}

export default Login
