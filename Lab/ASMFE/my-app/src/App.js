import React from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Page/home-page/Header";
import Index from "./components/Page/home-page/Index";
import Footer from "./components/Page/home-page/Footer";
import DetailProduct from "./components/Page/home-page/DetailProduct";
import Cart from "./components/Page/home-page/Cart";
import ListProduct from "./components/Page/admin-page/ListProduct";
import FooterDetail from "./components/Page/home-page/FooterDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForn from "./components/Page/auth/LoginForn";
import RegisterForn from "./components/Page/auth/RegisterForn";
import ListUsers from "./components/Page/admin-page/user-admin/ListUsers";
import ListCategory from "./components/Page/category/ListCategory";


export default function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
        
          <Routes>
              <Route path="/" element={<> <Header /><Index /> <Footer /></>} />
          </Routes>
          <Routes>
              <Route path="/cart" element={<> <Header /><Cart /> <FooterDetail /></>} />
          </Routes>
          <Routes>
              <Route path="/detailProduct/:id" element={<> <Header /><DetailProduct /> <FooterDetail /> </>}/> 
          </Routes>
          <Routes>
              <Route path="/admin" element={<> <Header /> <ListProduct /> <Footer /> </>} />
          </Routes>
          <Routes>
              <Route path="/admin/users" element={<> <Header /><ListUsers /><Footer /> </>} />
          </Routes>
          <Routes>
              <Route path="/login" element={<> <Header /><LoginForn /><Footer /> </>} />
          </Routes>
          <Routes>
              <Route path="/register" element={<> <Header /><RegisterForn /><Footer /> </>} />
          </Routes>

          <Routes>
              <Route path="/admin/categories" element={<> <Header /><ListCategory /><Footer /> </>} />
          </Routes>
          

        
    </BrowserRouter>
  );
}
