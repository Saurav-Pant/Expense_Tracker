import React, { useState } from 'react'
import "../styles/Login.css"
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import {signInWithGoogle} from '../config/firebase.js'
import Header from './Header';

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
    console.log(email)
  }

  const handlePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
    console.log(password)
  }

  return (
    <div className='Login_Whole'>
      <Header/>
      <div className="Login">
          <h1 className='Login_text'>Login</h1>
          <div className="input_password">
          <input type="email" placeholder='Email...' className='byuser' onChange={handleEmail}/><br/>
          <input type="password" placeholder='Password...'className='byuser' onChange={handlePassword} /><br />
          </div>
          <div className='btn'>
          <button className='SignIn'>Sign In</button>
          </div>
          <h3 className='Login_text_2'>Or login with:</h3>
          <div className="btns">
            <button onClick={signInWithGoogle}><BsGoogle/></button>
            <button><BsTwitter/></button>
            <button><BsGithub/></button>
          </div>
      </div>
    </div>
  )
}

export default Login
