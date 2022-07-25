import React, { useEffect, useState } from "react";
import "../../css/home-css/cart.css";
import { Link } from "react-router-dom";
import { formatMoney } from "../../../money";
import { AiOutlineDelete } from "react-icons/ai";

function Cart() {
  const [first, setfirst] = useState([]);
  const [loading, setloading] = useState("");
  const [loadDelete, setloadDelete] = useState(1);

  useEffect(() => {
    let TempListCart = localStorage.getItem("Cart");
    if (TempListCart !== undefined) {
      let ListCart = [];
      ListCart = JSON.parse(TempListCart);
      setfirst(ListCart);
      
    }
  }, [loading, loadDelete]);

  let sum = 0;
  if (first != undefined) {
    first.map((item, index) => {
      sum += Number(item.price) * Number(item.quantity);
    });
  }

  const onQuantity = (quantity, id) => {
    for (let i = 0; i < first.length; i++) {
      let ListCart = first;
      if (ListCart[i].id === id) {
        ListCart[i].quantity = quantity;
        setloading(quantity);
        localStorage.setItem("Cart", JSON.stringify(ListCart));
        setfirst(ListCart);
      }
    }
  };

  const onhandleDelete = (id) => {
    let arr = JSON.parse(localStorage.getItem("Cart"));
    arr.splice(id, 1);
    setloadDelete(loadDelete + 1);
    localStorage.setItem("Cart", JSON.stringify(arr));
    console.log("xoa");
  };
  console.log(first);

  return (
    <div className="cartContainer">
      <section className="menu">
        <nav className="nav-bar">
          <ul className="menu-1">
            <li className="item-menu-1">
              <a href className="title-item-menu-1">
                GIỚI THIỆU
              </a>
            </li>
            <li className="item-menu-1">
              <a href className="title-item-menu-1">
                BÀN GHẾ
              </a>
            </li>
            <li className="item-menu-1">
              <a href className="title-item-menu-1">
                BÀN GHẾ SOFA
              </a>
            </li>
            <li className="item-menu-1">
              <a href className="title-item-menu-1">
                KỆ TIVI
              </a>
            </li>
            <li className="item-menu-1">
              <a href className="title-item-menu-1">
                TIN TỨC
              </a>
            </li>
            <li className="item-menu-1">
              <a href className="title-item-menu-1">
                LIÊN HỆ
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="container-left">
        <div className="titleGioHang">
          <p className="titleSanPham item-title">Sản phẩm</p>
          <p className="titleSanPham item-title">Tên</p>
          <p className="titleGia item-title">GIÁ</p>
          <p className="titleSoLuong item-title">SỐ LƯỢNG</p>
          <p className="titleTongTien item-title">TỔNG CỘNG</p>
          <p className="thaoTac item-title">Thao Tác</p>
        </div>
        <div id="dssp">
          {first &&
            first.map((item, index) => (
              <div className="sanPham">
                <div className="hinhAnh itemSanPham">
                  <img src={item.images} alt />
                </div>
                <p className="ten itemSanPham">{item.name}</p>
                
                <p className="gia itemSanPham">{item.price}</p>
                <div className="itemSanPham">
                  <input
                    onChange={(e) => onQuantity(e.target.value, item.id)}
                    id=""
                    className="soLuong"
                    type="number"
                    defaultValue={item.quantity}
                    min={1}
                  />
                </div>
                <p className="tongTien itemSanPham">
                  <h3>
                    {formatMoney(Number(item.price) * Number(item.quantity))}
                  </h3>
                </p>
                <div className="itemSanPham">
                  <AiOutlineDelete onClick={() => onhandleDelete(index)} />
                </div>
              </div>
            ))}
        </div>
        <Link to={"/"}>
          <button className="btnXem btn btn-primary">
            TIẾP TỤC XEM SẢN PHẨM
          </button>
        </Link>
      </div>
      <div className="container-right">
        <div className="titleRight">
          <p className="tongSoLuong">TỔNG TIỀN THANH TOÁN</p>
        </div>
        <div className="itemTongSoLuong">
          <p className="tongCong">Tổng Cộng</p>
          <div id="tong">
            <h3>{formatMoney(Number(sum))}</h3>
          </div>
        </div>
        <div className="itemTongSoLuong">
          <p className="giaoHang">Giao Hàng 1</p>
          <p className="dichVuGiaoHang">Giao hàng miễn phí</p>
        </div>
        <div className="button">
          <button className="btn btn-primary">TIẾN HÀNH THANH TOÁN</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
