import React from 'react'

const AddProduct = () => {
  return (
    <div className="firmSection">
        <form className="tableForm">
            <h2>Add Product</h2>
            <label>Product Name</label>
            <input type="text"/>
            <label>Price</label>
            <input type="text"/>
            <label>Category</label>
            <input type="text"/>
            <label>Bestseller</label>
            <input type="text"/>
            <label>Description</label>
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

export default AddProduct