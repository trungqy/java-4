import React, { createContext, ReactNode, useEffect, useState } from "react";

const userDefault = {
  userInfo: {
    id: 0,
    userName: "",
    passWord: "",
    email: "",
    role: "",
  },
  changeUserInfo: () => {},
};

export const UserCreateContext = createContext(userDefault);

export default function UserContext({ children }) {
  const [userInfo, setUserInfo] = useState({
    id: 0,
    userName: "",
    passWord: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    changeUserInfo();
  }, [userInfo]);

  const changeUserInfo = () => {
    let userInformation;
    let userLocal = localStorage.getItem("userInfo");
    if (userLocal != undefined) {
      userInformation = JSON.parse(userLocal);      
    }   
    if (userInformation !== undefined) {
      setUserInfo(userInformation);
    } else {
      setUserInfo({
        id: 0,
        userName: "",
        passWord: "",
        email: "",
        role: "",
      });
    }
  };

  const data = { userInfo, changeUserInfo };

  return <UserCreateContext.Provider value={data}>{children}</UserCreateContext.Provider>;
}