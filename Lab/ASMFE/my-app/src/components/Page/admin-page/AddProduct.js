import React, { useState } from "react";
import '../../css/admin-css/AddProduct.css'

function  AddProduct({onAdd ,names,prices,categoryIds,imagess,id,listCate}) {
  const [images,setImg]=useState(imagess)
  const [name,setNameProduct]=useState(names)
  const [categoryId,setCategoryId]=useState(categoryIds)
  const [price,setPriceProduct]=useState(prices)

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  return (
    <form className="form-them-sp" onSubmit={(e) =>{handleSubmit(e); onAdd(images,name,categoryId,price,id)}}>
      <h2 className="title-them">Thêm Sản Phẩm</h2>
      <label htmlFor>Link ảnh</label>
      <input defaultValue={images} onChange={(e)=> setImg(e.target.value)} type="text" id="hinh-anh" required />
      <label htmlFor>Tên</label>
      <input defaultValue={name} onChange={(e)=> setNameProduct(e.target.value)} type="text" id="ten-sp" required />
      <label htmlFor>Hãng</label>
      <select name="brand" onChange={(e)=> setCategoryId(e.target.value)} value={categoryId}>
        {listCate.map(item => (
           <option value={item.id}>{item.nameCate}</option>
        ))}
      </select>
      <label htmlFor>Giá</label>
      <input defaultValue={price} onChange={(e)=> setPriceProduct(Number(e.target.value))} type="number" id="gia-sp" required />
      <button>Thêm sản phẩm</button>
    </form>
  );
}

export default AddProduct;
