import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { url } from '../../../routes/Utility';
import useAuth from '../../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../store/UserSlice';
import useUserRole from '../../../hooks/useIsPeticomer';

const SettingsSidebar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useAuth();
  const isPeticomer = useUserRole();
  
  return (
    <>
        <div className="grid grid-rows-5 settingsleft sticky top-36">
            <div className="row-span-1 bgdef">
                <div className="pl-1 text-white text-center">
                    <h6>Merhaba,</h6>
                    <h1 className=" font-bold textname">{user.UserFullName}</h1>
                </div>
            </div>
            <div className="row-span-1">
                <div 
                    className={`p-5 cursor-pointer hover:bg-stone-200 ${(location.pathname === '/settings/user' || location.pathname === '/settings') ? 'bg-stone-100' : ''}`} 
                    onClick={() => navigate(url("settings.user"))}
                >
                    {/* <img src={UserPicture} className=''/> */}
                    <h2>Kullanıcı Bilgilerim</h2>
                </div>
            </div>
            <div 
                className={`row-span-1 cursor-pointer hover:bg-stone-200 ${location.pathname === '/settings/petinformation' ? 'bg-stone-100' : ''}`} 
                onClick={() => navigate(url("settings.petinformation"))}
            >
                <div className="p-5 ">
                    <h2>Pet Bilgilerim</h2>
                </div>    
            </div>
            {!isPeticomer && (
                <div 
                    className={`row-span-1 cursor-pointer hover:bg-stone-200 ${location.pathname === '/settings/application' ? 'bg-stone-100' : ''}`}
                    onClick={() => navigate(url("settings.application"))}
                >
                    <div className="p-5">
                        <h2>Peticomer Ol</h2>
                    </div>
                </div>
            )}
            <div className={`row-span-1 cursor-pointer hover:bg-stone-200 ${location.pathname === '/settings/passupdate' ? 'bg-stone-100' : ''}`}
                onClick={() => navigate(url("settings.passupdate"))}
            >
                <div className="p-5">
                    <h2>Şifre İşlemleri</h2>
                </div>
            </div>
            <div className="row-span-1 cursor-pointer hover:bg-stone-200" onClick={() => {dispatch(userLogout())}}>
                <div className="p-5">
                    <h2>Çıkış Yap</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default SettingsSidebar