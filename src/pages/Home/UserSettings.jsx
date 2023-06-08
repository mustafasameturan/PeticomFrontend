import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { url } from '../../routes/Utility'
import "../../assets/css/usersettings.css"
import { UserPicture } from '../../assets/img/others/userpic.png';
import { Input, Button } from "../../components";
import {UserProfileSettings, UserPetInfo, BePeticomer} from "./components"

const UserSettings = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    return (
        <div className="container mx-auto settingsdetail mt-10 ">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1"> 
                    <div className="grid grid-rows-5 settingsleft sticky top-36">
                        <div className="row-span-1 bgdef">
                            <div className="pl-16 text-white">
                                <h6>Merhaba</h6>
                                <h1 className=" font-bold textname">*UserName*</h1>
                            </div>
                        </div>
                        <div className="row-span-1">
                            <div className="p-5 cursor-pointer hover:bg-stone-100">
                                {/* <img src={UserPicture} className=''/> */}
                                <h2>Kullanıcı Bilgilerim</h2>
                            </div>
                        </div>
                        <div className="row-span-1 cursor-pointer hover:bg-stone-100">
                            <div className="p-5 ">
                                <h2>Pet Bilgilerim</h2>
                            </div>    
                        </div>
                        <div className="row-span-1 cursor-pointer hover:bg-stone-100">
                            <div className="p-5">
                                <h2>Peticomer Ol</h2>
                                {/* <h2>İlan Ver</h2> */}
                            </div>
                        </div>
                        <div className="row-span-1 cursor-pointer hover:bg-stone-100">
                            <div className="p-5">
                                <h2>Geçmiş Bakımlar</h2>
                            </div>
                        </div>
                        <div className="row-span-1 cursor-pointer hover:bg-stone-100">
                            <div className="p-5">
                                <h2>Çıkış Yap</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="col-span-3 settingsright mb-20"> 
                    <div className="">
                        {/* <UserProfileSettings/> */}
                        {/* <UserPetInfo/> */}
                        <BePeticomer/>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default UserSettings