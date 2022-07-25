import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usersController } from "../../../controller/UsersController";
import '../auth/Register.css'

export default function RegisterForn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [passWord,setPassword] = useState("") 

  
  useEffect(() => {

    if(localStorage.getItem("userInfo") != null ? JSON.parse(localStorage.getItem("userInfo")).role==null:''){
      navigate("/login")
    }
  }, []);

  const onRegister = (e)=>{
    e.preventDefault()
    usersController.register("", passWord, email, "").then((res) => {
      console.log(res);
      if(res){
        console.log(123);
          navigate('/login')
        toast.success('Đăng kí thành công', {
          position: 'bottom-left',
          autoClose: 3000
      })
      }else{
        console.log(456);
        alert('email da ton tai')
      }

    })

  }


  return (
    <div className="formRegister">
      <form action className="formTao">
      <h2 className="titleForm">Đăng kí</h2>
      
        <label htmlFor="email">Email</label>
        <input onChange={(e)=> setEmail(e.target.value)} id="email" type="text" />
        <label htmlFor="password">Mật khẩu</label>
        <input onChange={(e)=> setPassword(e.target.value)} id="password" type="password" />
        
        <input
          className="dangKy dangKy1"
          type="submit"
          value={"Đăng Kí"} onClick={e=>onRegister(e)}
        />
      </form>
      <p className="hasAccout">
        Đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
      </p>
    </div>
  );
}
