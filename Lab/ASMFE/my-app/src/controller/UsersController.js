import axios from "axios";
import React, { useEffect, useState } from "react";

class UsersController {
  getUser = async () => {
    return await axios.get("http://localhost:8080/admin/users").then((res) => {
      return res.data;
    });
  };

  update = async (id,userName,passWord,email,role) => {
    return await axios.put(`http://localhost:8080/admin/users/update/${id}`,{userName,passWord,email,role}).then((res) => {
      return res.data;
    });
  };

  onRemove = async (id) => {
    return await axios.delete(`http://localhost:8080/admin/users/delete/${id}`,).then((res) => {
      return res.data;
    });
  };

  login = async (email,passWord) => {
    return await axios.post("http://localhost:8080/login", {email, passWord })
      .then((res) => {
        return res.data;
      });
  };

  register = async (userName, passWord, email) => {
    const role = "user";
    return await axios
      .post("http://localhost:8080/register", {
        userName,
        passWord,
        email,
        role,
      })
      .then((res) => {
        return res.data;
      });
  };
  forgot = async (email) => {
    return await axios.get(`http://localhost:8080/forgot/${email}` )
      .then((res) => {
        return res.data;
      });
  };


}

export const usersController = new UsersController();
