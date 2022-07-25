import React, { useState } from "react";
import "../../css/home-css/header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  React.useEffect(() => {
    

    console.log();
    if (localStorage.getItem("userInfo") != null) {
      setEmail(JSON.parse(localStorage.getItem("userInfo")).email);
    }
  }, []);
  return (
    <div>
      <section className="logo">
        <div className="content-logo">
          <div className="img-logo">
            <Link to = {"/"}>
            <img
              src="http://mauweb.monamedia.net/noithatbanghe/wp-content/uploads/2018/04/logo-mona-furniture-14.png"
              alt=""
            />
            </Link>
          </div>
          <div className="flex-right">
            <div>
              <span className="dangNhap">
                <Link to={"/login"}>
                  {localStorage.getItem("userInfo") != null
                    ? email
                    : "ĐĂNG NHẬP"}{" "}
                </Link>
              </span>
              {localStorage.getItem("userInfo") != null && (
                <span
                  onClick={() => {
                    localStorage.removeItem("userInfo");
                    navigate('/login')
                  }}
                  style={{
                    textAlign: "flex-end",
                    cursor: "pointer",
                    color: "red",
                  }}
                  className="dangNhap"
                >
                  Logout
                </span>
              )}
            </div>

            <div className="border-space" />
            <span className="gioHang">
              <Link to={"/cart"}>GIỎ HÀNG</Link>
            </span>

            <i className="fas fa-shopping-cart" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
