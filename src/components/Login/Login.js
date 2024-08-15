import React from 'react'

import './Login.css'
import GitHub from '../../Images/Github.png'
import GitLab from '../../Images/gitlab.png'
import BitBucket from '../../Images/bitbucket.png'
import logo from '../../Images/Logo.jpeg'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="login-container">
            <Link to="/"><img id='logoImg' src={logo} alt="" /></Link>
            <ul>
                <li className="items border"><img src={GitHub} alt="" /><p>Login with GitHub</p></li>
                <li className="items border"><img src={GitLab} alt="" /><p>Login with GitLab</p></li>
                <li className="items border"><img src={BitBucket} alt="" /><p>Login with BitBucket</p></li>
                <li className="items "><Link className='color-blue' to="/login">Login with Gmail</Link></li>
                <li className="items "><Link className='color-blue' to="/login">Login with SSO</Link></li>
                <li className="items "><Link className='color-blue' to="/login">Login with Simplify Create SSO</Link></li>
            </ul>
            <div className='sign-up-div'>
                <p>No account yet?</p>
                <Link className=' color-blue' to="/login">Sign up</Link>
            </div>
            <div id='terms'>
                <p>By logging in to Netlify, you agree to our terms of service.</p>
            </div>
        </div>
    </>
  )
}

export default Login
