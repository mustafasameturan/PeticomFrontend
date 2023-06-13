import React from 'react'
import { Navbar } from '../../components';
import { SettingsSidebar } from "./components";
import { Outlet } from 'react-router-dom';
import "../../assets/css/usersettings.css"

const Settings = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto settingsdetail mt-10 ">
        <div className="grid grid-cols-4 gap-5">
            <div className="col-span-1"> 
              <SettingsSidebar />
            </div>
            <div  className="col-span-3 settingsright mb-20"> 
                <div className="">
                  {/* <button className="bg-red-500" onClick={() => { setModal(true); setModalContent( { element: "try" } ); }}>Deneme</button> */}
                  {/* <UserProfileSettings/> */}
                  {/* <UserPetInfo/> */}
                  {/* <PeticomerApplication/> */}
                  <Outlet />  
                </div>
            </div>

        </div>
      </div>  

    </>
  )
};

export default Settings