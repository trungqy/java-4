import React, { useState } from "react";
import '../../../css/admin-css/AddProduct.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function  AddUsers({onAdd, userName, passWord,email,role,id}) {
  const [userNames,setUserName]=useState(userName)
  const [passWords,setPassWord]=useState(passWord)
  const [emails,setEmail]=useState(email)
  const [roles,setRole]=useState(role)

  return (
    <div className="form-them-sp">
      <h2 className="title-them">Thêm User</h2>
      <label htmlFor>UserName</label>
      <input defaultValue={userNames} onChange={(e)=> setUserName(e.target.value)} type="text" id="ten-sp" />
      <label htmlFor>PassWord</label>
      <input defaultValue={passWords} onChange={(e)=> setPassWord(e.target.value)} type="text" id="hang-sp" />
      <label htmlFor>Email  </label>
      <input defaultValue={emails} onChange={(e)=> setEmail(e.target.value)} type="text" id="gia-sp" />

    
      <FormControl className="formRole" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Role</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Role"
          onChange={(e)=> setRole(e.target.value)}
        >
          
          <MenuItem value={'admin'}>Admin</MenuItem>
          <MenuItem value={'user'}>User</MenuItem>
        </Select>
      </FormControl>
     

      <button onClick={()=>onAdd(userNames,passWords,emails,roles,id)}>Thêm user</button>
    </div>
  );
}


