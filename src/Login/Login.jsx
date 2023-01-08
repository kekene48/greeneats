import React from 'react'
import logo from '../../src/assets/logo.png'
import './login.css'

const Login = () => {
  return (
    <header className='login__container'>
        <div className="login">
          <div className="login__top">
            <img src={logo} alt="logo" className='login__logo'/>
            <h1 className="login__h1">Login</h1>
            <img src={logo} alt="logo" className='login__logo'/>
          </div>
          <form action="/" method="post" className='login__form'>
            <input type="text" placeholder='Username' name='username' className='login__input-username login__input'/>
            <input type="text" placeholder='Password' name='password' className='login__input-password login__input'/>
          </form>
          <a href="https://google.com" className='btn login__btn' target='__blank'>Login</a>
          <div className="signup">New?
            <a href="https://google.com" target='__blank' className='signup__a'>  SignUp</a>
          </div>
        </div>
    </header>
  )
}

export default Login