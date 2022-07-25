import React, { useEffect, useState } from "react";
import "../../css/admin-css/ListProduct.css";

import AddProduct from "./AddProduct";
import { productController } from "../../../controller/ProductController";
import ProductAdmin from "./ProductAdmin";
import { categoriesController } from "../../../controller/CategoriesController";
import { toast } from "react-toastify";



function ListProduct() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState({
    nameProduct: "",
    price: "",
    categoryId:0,
    images: "",
    id: "",
  });

  const onSetdata = (nameProduct, price, categoryId, images, id) => {
    console.log(nameProduct, price, categoryId, images, id);
    setSelectedProduct({ nameProduct, price, categoryId, images, id });
  };
  

  console.log(selectedProduct);

  useEffect(() => {
    getProductListItem();
    getCategories()
  }, []);



  const getProductListItem = () => {
    productController.getProductList().then((res) => {
      setData(res);
    });
  };

  const onAdd = (img, nameProduct, categoryId, price, id) => {
    
    if (id === "") {
      productController.addProduct(img, nameProduct, categoryId, price).then((res) => {
        getProductListItem();
      });
      toast.success('thêm thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })
    } else {
      productController.update(img, nameProduct, categoryId, price, id).then((res) => {
        getProductListItem();
      });
      toast.success('sửa thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })
    }
    setSelectedProduct({
      nameProduct: "",
      price: "",
      categoryId: categoryId,
      images: "",
      id: "",
    });
  };



const getCategories = () => {
  categoriesController.getCategories().then((res) => {
    setSelectedCategory(res);
    setSelectedProduct({
      nameProduct: "",
      price: "",
      categoryId: res[0].id,
      images: "",
      id: "",
    });
  
  });
};


  const onRemove = (id) => {
    productController.onRemove(id).then((res) => {
      getProductListItem();
    });
    toast.success('xáo thành công', {
      position: 'bottom-left',
      autoClose: 3000
  })
  };

  return (
    <div className="editDesign">
      <div className="container-left">
        <AddProduct
          names={selectedProduct.nameProduct}
          id={selectedProduct.id}
          prices={selectedProduct.price}
          categoryIds={selectedProduct.categoryId}
          imagess={selectedProduct.images}
          key={Date.now()}
          onAdd={onAdd}
          listCate={selectedCategory}
        />
      </div>
      <div className="container-right">
        <div id="dssp">
          {data.map((item) => (
            <ProductAdmin
              name={item.nameProduct}
              images={item.images}
              price={item.price}
              nameCate={item.nameCate}
              categoryId={item.categoryId}
              id={item.id}
              onRemove={onRemove}
              onSetdata={onSetdata}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
