import React, { useContext, useEffect, useState } from "react";
import "../../css/home-css/index.css";
import { Link } from "react-router-dom";
import { productController } from "../../../controller/ProductController";
import Product from "./Product";
import ImageSlider from "./slide/ImageSlider";
import { SliderData } from "./slide/SliderData";
import { UserCreateContext } from "../../../context/userContext";

export default function Index() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("")
  const { userInfo } = useContext(UserCreateContext);
  console.log(userInfo);
  
  useEffect(() => {
    getProductListItem();
  }, []);

  const getProductListItem = () => {
    productController.getProductList().then((res) => {
      setData(res);
    });
  };

  const search = (e)=> {
    setSearchValue(e.target.value)
    e.target.value != "" ?
    productController.search(e.target.value).then((res)=>{
      setData(res);
      console.log(res);
    }) : getProductListItem()
  }
  
  console.log(data);

  return (
    <div className="indexCss">
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
      <section className="banner">
        <div className="text-banner">
          <h2 className="uppercase">Sofa Set with Lounger</h2>
          <h4>
            Reveal Yourself <span>THROUGH YOUR CHOICE</span>
          </h4>
          <span>
            <a href className="btn btn-primary">
              Mua Ngay
            </a>
          </span>
        </div>

        {/* <ImageSlider slides={SliderData}></ImageSlider> */}
      </section>

      <input className="search" type="text" onChange={e  => search(e)} placeholder="tìm kiếm" />

      <div className="title-san-pham">
        <h1>Bàn Ghế Sofa</h1>
      </div>
      <section id="dsspsf">
        {data.map(item => (<Product id={item.id} name={item.nameProduct} images={item.images} price={item.price} brand={item.brand} />))}
      </section>
      <section className="showCase">
        <div className="mask">
          <div className="itemShowCase">
            <i className="fas fa-truck fa-3x" />
            <h1 className="titleItemShowCase">Miễn Phí Giao Hàng</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
          <div className="itemShowCase">
            <i className="fas fa-gifts fa-3x" />
            <h1 className="titleItemShowCase">Quà Tặng Đặc Biệt</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
          <div className="itemShowCase">
            <i className="fas fa-piggy-bank fa-3x" />
            <h1 className="titleItemShowCase">Tiết Kiệm Khi Mua Ở Mona</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer</p>
          </div>
        </div>
      </section>
      <div className="title-san-pham">
        <h1>Kệ TiVi</h1>
      </div>
      <section id="dsspkt">
        {data.map(item =>  (<Product id={item.id} name={item.nameProduct} images={item.images} price={item.price} brand={item.brand} />)) }
        
      </section>
      <section className="event">
        <div id="img-event1" className="img-event">
          <img src={require("../../img/img4-1024x512.jpg")} alt="" />
        </div>
        <div id="img-event2" className="img-event">
          <img src={require("../../img/img5-1024x512.jpg")} alt="" />
        </div>
      </section>
    </div>
  );
}
