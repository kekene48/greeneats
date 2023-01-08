import React from 'react'
import logo from '../../src/assets/logo.png'
import './login.css'

const Login = () => {
  return (
    <body>
    <header className='login__container'>
      <div class="wrapper">
        <a href="#" class="home"><span>GreenEats</span></a>
      </div>
        <div className="login">
          <form action="/login" method="post" className="login__form">
            <div className="login__top">
              <img src={logo} alt="logo" className='login__logo'/>
              <h1 className="login__h1">Log in!</h1>
              <img src={logo} alt="logo" className='login__logo'/>
            </div>
            <input type="text" placeholder="Username" name="username" className="login__input-username login__input form-control fader"/>
            <input type="text" placeholder="Password" name='password' className='login__input-password login__input form-control fader'/>
            <button type="submit"  class="btn btn-success login__btn fader">Log in</button>
            <div className="signup fader">
              New?<a href="https://google.com" target='__blank' className='signup__a '> Create your account</a>
            </div>
    
          </form> 
        </div>
    </header>
    </body>

  )
}

export default Login
