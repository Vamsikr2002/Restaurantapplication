import React from 'react'

const AddFirm = () => {
  return (
    <div className="firmSection">

        <form className="tableForm">
            <h2>Add Firm</h2>
            <label>Firm Name</label>
            <input type="text"/>
            <label>Area</label>
            <input type="text"/>
            <label>Category</label>
            <input type="text"/>
            <label>Region</label>
            <input type="text"/>
            <label>Offer</label>
            <input type="text"/>
            <label>Firm Image</label>
            <input type="file"/><br/>
        <div className="btnSubmit">
            <button>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default AddFirm