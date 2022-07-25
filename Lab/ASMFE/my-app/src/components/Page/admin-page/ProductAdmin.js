import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { MdEditOff } from "react-icons/md";

export default function Product({name, images,nameCate, categoryId, price ,id ,onRemove,update, onSetdata}) {
  
  const navigate = useNavigate();
  

  React.useEffect(()=>{
    console.log();
    if(localStorage.getItem("userInfo") != null ? JSON.parse(localStorage.getItem("userInfo")).role=="user":''){
      navigate("/")
    }

   
  },[])
  return (


    <div className="san-pham">
          <div className="hinh-anh">
            <Link to={"/detailProduct"}  >
              <img
                src={images}
                alt=""
              />
           </Link>
          </div>
          <p className="ten">
              {name}
          </p>
          <p className="hang">{nameCate}</p>
          <p className="gia">{price}</p>
          <AiOutlineDelete onClick={()=>onRemove(id)} />
          <MdEditOff onClick={()=>onSetdata(name,price,categoryId,images,id)}  />
        </div>
  )
}
