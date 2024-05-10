import React from 'react'
import './CSS/Login.css';

const Login = () => {
  return (
    <div className='login'>
       <div className="login-container">
          <h1>Login</h1>
          <div className="login-fields">
            <intput type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Email Address'/>
            <input type="password" placeholder='Password'/>

          </div>
          <button>Continue</button>
          <p className='login-login'>Already have an account?<span>Login Here</span></p>
          <div className='login-agree'>
              <input type="checkbox" name='' id=''/>
              <p>By continueing,I agree to the terms of use & privacy policy</p>
          </div>


       </div>
    </div>
  )
}

export default Login