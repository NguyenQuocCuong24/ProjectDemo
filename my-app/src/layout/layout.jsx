import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Components/Content/content';
import Header from '../Components/Header/header';
import "../Components/assets/dist/css/bootstrap.min.css";
import Footer from '../Components/Footer/footer';
import Content from '../Components/Content/content';


const Layout = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>

      <Header />

      <Content />

      <aside>
        <Outlet />
      </aside>

      <Footer />
    </div>
  );
};

export default Layout;
