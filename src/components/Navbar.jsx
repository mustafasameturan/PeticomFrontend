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
    <div className='def-nav-main h-28 sticky top-0'>
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
            <>
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
            </>
          )}
      
        </div>
      </div>
    </div>
  )
}

export default Navbar;