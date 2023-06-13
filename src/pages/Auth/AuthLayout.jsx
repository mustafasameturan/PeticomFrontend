import React from 'react';
import { NavbarMiddle } from "../../components";
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