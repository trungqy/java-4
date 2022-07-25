import axios from "axios";
import React, { useEffect, useState } from "react";

class CategoriesController {
  getCategories = async () => {
    return await axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        return res.data;
      });
  };

  addCategories = async (nameCate) => {
    return await axios
      .post("http://localhost:8080/category/add", {nameCate})
      .then((res) => {
        return res.data;
      });
  };
  upDateCategories = async (id, nameCate) => {
    return await axios
      .put(`http://localhost:8080/category/update/${id}`, { nameCate })
      .then((res) => {
        return res.data;
      });
  };
 removeCategories = async (id) => {
    return await axios
      .delete(`http://localhost:8080/category/delete/${id}`)
      .then((res) => {
        return res.data;
      });
  };


}

export const categoriesController = new CategoriesController();
