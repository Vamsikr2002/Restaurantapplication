import React from 'react'

const Register = () => {
  return (
    <div className="registerSection">
        <form className='authForm'>
            <h3>Vendor Register</h3>
            <label>Username</label>
            <input type="text"placeholder='enter your name'/><br/>
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

export default Register