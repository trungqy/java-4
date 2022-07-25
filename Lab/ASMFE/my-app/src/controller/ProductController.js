import axios from "axios";
import React, { useEffect, useState } from "react";

class ProductController {

  getProductList = async () => {
    return await axios.get("http://localhost:8080/products").then((res) => {
      return res.data;
    });
  };

  addProduct = async ( images,nameProduct , categoryId, price) => {
    return await axios
      .post("http://localhost:8080/product/add", {images,nameProduct, categoryId, price})
      .then((res) => {
        return res.data;
      });
  };

   onRemove = async (id) => {
    return await axios.delete(`http://localhost:8080/product/delete/${id}`).then((res) => {
      return res.data;
     });
  }

  update = async( images ,nameProduct , categoryId , price  , id) => {
    console.log(id);
    return await axios.put(`http://localhost:8080/product/update/${id}`, { images ,nameProduct, categoryId , price}).then((res) => {
      return res.data;
     });
  }

  getDetail = async (id) => {
    return await axios.get(`http://localhost:8080/products/${id}`).then((res) => {
      return res.data;
     });
  }

  search = async (nameProduct) => {
    return await axios.post(`http://localhost:8080/product/search/${nameProduct}`).then((res) => {
      return res.data;
     });
  }


}

export const productController = new ProductController();
