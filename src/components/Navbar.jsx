import React from 'react';
import { PeticomLogo } from '../assets/svg';
import { UserPicture } from '../assets/img';
import '../assets/css/navbar.css';
import { useNavigate } from 'react-router-dom';
import { url } from "../routes/Utility";
import useAuth from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { userLogout } from '../store/UserSlice';


const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useAuth();

  return (
    <div className='def-nav-main h-28 sticky top-0 z-10'>
      <div className='container h-28 mx-auto px-4 flex items-center place-content-between m-nav'>
        <div className='brand '>
          <img src={PeticomLogo} className='logo' onClick={() => {navigate(url("home"))}} />
        </div>
        <div className='r-multi-button'>
          {token ? (
            <>
              <img src={UserPicture} className='cursor-pointer' onClick={() => {navigate(url("settings"))}}/>
            </>
          ) : (
            <div>
              <div className='grid grid-col-2 gap1 block md:hidden'>
                <div className='border-b border-gray-200 col-span-1' onClick={() => navigate(url("auth.login"))}>
                  <h2 className='font-semibold text-xl text-white '>Giriş Yap</h2>
                </div>
                <div className='col-span-1' onClick={() => navigate(url("auth.register"))}>
                  <h2 className='font-semibold text-xl text-white ' >Kayıt Ol</h2>
                </div>
              </div>
            <div className='hidden md:block'>
              <button onClick={() => navigate(url("auth.register"))}>
                <div className='button left'>
                  <p className='hover:text-orange'>Kayıt Ol</p>
                </div>
              </button>
              <button onClick={() => navigate(url("auth.login"))}>
                <div className='button right'>
                  <p className='hover:text-orange'>Giriş Yap</p>
                </div>
              </button>          
            </div>
            </div>
          )}
      
        </div>
      </div>
    </div>
  )
}

export default Navbar;