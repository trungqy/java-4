import React, { useEffect, useState } from "react";
import "../../css/home-css/detailProduct.css";
import { useParams } from "react-router-dom";
import { productController } from "../../../controller/ProductController";
import { toast } from "react-toastify";

function DetailProduct() {
  const { id } = useParams();

  const [Count, setCount] = useState(1);
  const [loading, setloading] = useState("");
  const [loadDelete, setloadDelete] = useState(1);

  const [product, setProduct] = useState({});
  useEffect(() => {
    getDetail();
  }, [id]);

  const getDetail = () => {
    window.scroll({ top: 0 });
    productController.getDetail(id).then((res) => {
      setProduct(res);
    });
  };

  const onAddCart = () => {
    let ListCart = [];
    let check = true;
    let ListCarTemp = localStorage.getItem("Cart");
    if (ListCarTemp != undefined) {
      ListCart = JSON.parse(ListCarTemp);
    }
    for (let i = 0; i < ListCart.length; i++) {
      if (ListCart[i].id == product.id) {
        ListCart[i].quantity = ListCart[i].quantity += Count;
        localStorage.setItem("Cart", JSON.stringify(ListCart));
        check = false;
      }
    }
    if (check == true) {
      let cartItem = {
        quantity: Count,
        name: product.nameProduct,
        images: product.images,
        price: product.price,
        id: product.id,
      };
      console.log(ListCart);
      ListCart.push(cartItem);
      localStorage.setItem("Cart", JSON.stringify(ListCart));
    }
    toast.success('Đăng nhập thành công', {
      position: 'bottom-left',
      autoClose: 3000
  })  

  };
  console.log(product);

  return (
    <section>
      <header className="headerDetail">
        <h1>PRODUCT DETAIL PAGE</h1>
        <h3>
          Covered AAA standard <br /> of accessibility
        </h3>
      </header>
      <div data-product-detail>
        <div className="img-card">
          <div className="img">
            <i className="far fa-heart" />
            <img src={product.images} />
          </div>
          <div className="img-options">
            <div>
              <img src={product.images} />
            </div>
            <div>
              <img src={product.images} />
            </div>
            <div>
              <img src={product.images} />
            </div>
            <div>
              <img src={product.images} />
            </div>
          </div>
        </div>
        <div className="product-details">
          <h2>{product.nameProduct}</h2>
          <p>{product.brand}</p>
          <p>
            <i className="fas fa-star" />
            4.5 | <span>2.5k reviews</span>
          </p>
          <p>Price</p>
          <p>
            <span>{product.price}</span> <span>{product.price*2}</span>
            <span>(50% OFF)</span>
          </p>
          <p>Available in 5 colors</p>
          <div className="sample-colors">
            <div>
              <div id="circle" />
            </div>
          </div>
          <button onClick={() => onAddCart()}>Add To Bag</button>
        </div>
      </div>
    </section>
  );
}

export default DetailProduct;
