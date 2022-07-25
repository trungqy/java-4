import React , {useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Product({id,name, images, price, brand}) {


  const onAddCart = (id,name, images, price) => {
    console.log("sqajghshjag");
    let ListCart = [];
    let check = true;
    let ListCarTemp = localStorage.getItem("Cart");
    if (ListCarTemp != undefined) {
      ListCart = JSON.parse(ListCarTemp);
      toast.success('Đăng nhập thành công', {
        position: 'bottom-left',
        autoClose: 3000
    })  
    }
    for (let i = 0; i < ListCart.length; i++) {
      if (ListCart[i].id == id) {
        ListCart[i].quantity = ListCart[i].quantity += 1;
        localStorage.setItem("Cart", JSON.stringify(ListCart));
        check = false;
        
      }
      
    }
    if (check == true) {
      let cartItem = {
        quantity: 1,
        name: name,
        images: images,
        price:price,
        id:id,
      };
      
      console.log(ListCart);
      ListCart.push(cartItem);
      localStorage.setItem("Cart", JSON.stringify(ListCart));
    }
  };

  return (
    <div className="san-pham">
          <div className="hinh-anh">
            <Link to={`/detailProduct/${id}`}  >
              <img
                src={images}
                alt=""
              />
           </Link>
          </div>
          <p className="ten">
              {name}
          </p>
          <p className="hang">{brand}</p>
          <p className="gia">{price}</p>
          <button onClick={()=>onAddCart(id,name,images,price)} className="btn btn-primary">
            Thêm vào giỏ hàng
          </button>
        </div>
  )
}
