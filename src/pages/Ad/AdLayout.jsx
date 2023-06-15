import React from 'react';
import { Navbar } from "../../components";
import { Outlet } from 'react-router-dom';

const AdLayout = () => {
  return (
    <>
        <Navbar />

        <Outlet />
    </>
  )
}

export default AdLayout