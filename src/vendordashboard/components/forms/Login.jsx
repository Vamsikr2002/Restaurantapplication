import React from 'react'

const Login = () => {
  return (
    <div className="loginSection">
        <form className='authForm'>
            <h3>Vendor Login</h3>
            <label>Email</label>
            <input type="text"placeholder='enter your email'/><br/>
            <label>password</label>
            <input type="text"placeholder='enter your password'/><br/>
        <div className="btnSubmit">
            <button>Submit</button>
        </div>

        </form>
    </div>
  )
}

export default Login