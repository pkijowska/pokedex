import React from "react";
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
