import { ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { categoriesController } from "../../../controller/CategoriesController";
import AddCotegory from "./AddCategory";
import AddUsers from "./AddCategory";
import CategoryData from "./CategoryData";

// import "../../css/admin-css/ListProduct.css";

export default function ListCategory() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    nameCate: "",
  });
  const navigate = useNavigate();

  const onSetdata = (id, nameCate) => {
    setSelectedCategory({id, nameCate})
  };

  useEffect(() => {
    getCategories(); 
    if(localStorage.getItem("userInfo") != null ? JSON.parse(localStorage.getItem("userInfo")).role=="user":''){
      navigate("/")
    }
  }, []);

  const getCategories = () => {
    categoriesController.getCategories().then((res) => {
      setData(res);
    });
  };

  console.log(data);

  const onAdd = (nameCate) => {
    if (selectedCategory.id == "") {
      categoriesController.addCategories(nameCate).then((res) => {
        getCategories();
      });
      toast.success('Thêm thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })
    } else {
      categoriesController.upDateCategories(selectedCategory.id, nameCate).then((res) => {
        getCategories();
      });
      toast.success('sửa thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })
    }
    setSelectedCategory({
      id: "",
      nameCate: "",
    });
  };

  const onRemove = (id) => {
    console.log(id);
    categoriesController.removeCategories(id).then((res) => {
      getCategories();
    });
    toast.success('xoá thành công', {
      position: 'bottom-left',
      autoClose: 3000
  })
  };

  return (
    <div className="editDesign">
      <div className="container-left">
        <AddCotegory
          name={selectedCategory.nameCate}
          key={Date.now()}
          onAdd={onAdd}
        />
      </div>
      <div className="container-right">
        <div id="dssp">
          <CategoryData onRemove={onRemove} data={data} onSetdata={onSetdata} />
        </div>
      </div>
    </div>
  );
}
