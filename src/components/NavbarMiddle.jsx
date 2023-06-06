import React from 'react'
import { PeticomLogo } from '../assets/svg'
import { useNavigate } from 'react-router-dom'
import { url } from '../routes/Utility';

const NavbarMiddle = () => {

  const navigate = useNavigate();

  return (
    <div className='def-nav-main h-28 '>
        <div className='container h-28 mx-auto px-4 flex items-center'>
            <div className='brand login'>
                <img src={PeticomLogo} className='logo' onClick={() => {navigate(url("home"))}}/>
            </div>
        </div>
    </div>
  )
}

export default NavbarMiddle