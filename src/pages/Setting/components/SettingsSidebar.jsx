import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { url } from '../../../routes/Utility';

const SettingsSidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  console.log(location.pathname);

  return (
    <>
        <div className="grid grid-rows-5 settingsleft sticky top-36">
            <div className="row-span-1 bgdef">
                <div className="pl-16 text-white">
                    <h6>Merhaba</h6>
                    <h1 className=" font-bold textname">*UserName*</h1>
                </div>
            </div>
            <div className="row-span-1">
                <div 
                    className={`p-5 cursor-pointer hover:bg-stone-200 ${location.pathname === '/settings/user' ? 'bg-stone-100' : ''}`} 
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
            <div 
                className={`row-span-1 cursor-pointer hover:bg-stone-200 ${location.pathname === '/settings/application' ? 'bg-stone-100' : ''}`}
                onClick={() => navigate(url("settings.application"))}
            >
                <div className="p-5">
                    <h2>Peticomer Ol</h2>
                    {/* <h2>İlan Ver</h2> */}
                </div>
            </div>
            <div className="row-span-1 cursor-pointer hover:bg-stone-200">
                <div className="p-5">
                    <h2>Geçmiş Bakımlar</h2>
                </div>
            </div>
            <div className="row-span-1 cursor-pointer hover:bg-stone-200">
                <div className="p-5">
                    <h2>Çıkış Yap</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default SettingsSidebar