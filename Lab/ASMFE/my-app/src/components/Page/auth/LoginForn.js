import React , { useContext, useEffect, useState} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserCreateContext } from "../../../context/userContext";
import { usersController } from "../../../controller/UsersController";
import "../auth/Login.css";

export default function LoginForn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("") 
  const { changeUserInfo } = useContext(UserCreateContext);
  const [check , setCheck] = useState(false)


  useEffect(() => {

    if(!localStorage.getItem("userInfo")){
      navigate("/login")
    }
  }, []);

  const forgot = ()=>{
    usersController.forgot(email).then(()=>{
      toast.success('Moi ban xem mail', {
        position: 'bottom-left',
        autoClose: 3000
    })  
    })
  }

  const onLogin = (e)=>{
    e.preventDefault()
    console.log(password,email);
    usersController.login(email,password).then((res) => {
      console.log(res);
      if(res!=undefined){
        localStorage.setItem("userInfo", JSON.stringify(res));
        changeUserInfo()
        navigate('/')
        toast.success('Đăng nhập thành công', {
          position: 'bottom-left',
          autoClose: 3000
      })  
      
      }
     
    }).catch(err => {
      alert("sai email hoac mat khau")
    })

  }
  
  return (


    <div className="formRegister">
      
    <form className="formTao">
    <h2 className="titleForm">Đăng nhập</h2>
      <label  htmlFor="email" >Tên Đăng Nhập</label>
      <input onChange={(e)=> setEmail(e.target.value)} id="email" type="text" />
      <label  htmlFor="password">Mật khẩu</label>
      <input onChange={(e)=> setPassword(e.target.value)} id="password" type="password" />
      <input
            className="dangKy dangKy1"
            type="submit" onClick={e => onLogin(e)}
            value={"Đăng Nhập"}
          />

{
      check && (
        <>
        <label  htmlFor="email" >Tên Đăng Nhập</label>
        <input onChange={(e)=> setEmail(e.target.value)} id="email" type="text" />
        <button onClick={forgot}>SendMail</button>
        </>
      )
    }
    </form>


    <p className="hasAccout">
      Chưa có tài khoản ? <Link to="/register">Đăng kí</Link>
    </p>
    <p onClick={()=> setCheck(true)} className="hasAccout">
     Quên Mật khẩu
    </p>
  </div>
  )
 
}
