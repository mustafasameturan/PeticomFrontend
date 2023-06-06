import React from 'react';
import { Navbar, NavbarMiddle } from "../../components";
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <>
        <NavbarMiddle />

        <Outlet />
    </>
  )
}

export default AuthLayout;