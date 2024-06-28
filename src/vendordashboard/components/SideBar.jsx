import React from 'react'

const SideBar = ({showFirmHandler,showProductHandler}) => {
  return (
    <div className="sideBarSection">
        <ul>
            <li onClick={showFirmHandler}>Add firm</li>
            <li on onClick={showProductHandler}>Add product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar