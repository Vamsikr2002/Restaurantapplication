import React from 'react'

const NavBar = ({showLoginHandler,showRegisterHandler}) => {

  return (
    <div className="navSection">
        <div className="company">
            VendorDashboard
        </div>
        <div className="userAuth">
            <span onClick={showLoginHandler}>Login / </span>
            <span onClick={showRegisterHandler}>Registe</span>
        </div>
    </div>
  )
}

export default NavBar