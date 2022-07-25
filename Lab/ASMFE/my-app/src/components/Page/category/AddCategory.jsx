import React, { useState } from "react";
import '../../css/admin-css/AddProduct.css'

export default function  AddCotegory({onAdd,name,}) {
  const [names,setName]=useState(name)
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <form className="form-them-sp" onSubmit={(e) =>{handleSubmit(e); onAdd(names) }}>
      <h2 className="title-them">Thêm danh mục</h2>
      <label htmlFor>Name</label>
      <input defaultValue={names} onChange={(e)=> setName(e.target.value)} type="text" id="hinh-anh" required />


      <button >Thêm danh mục</button>
    </form>
  );
}


