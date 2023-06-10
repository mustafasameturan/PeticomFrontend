import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select } from "../../components";

const UpdatePassword = () => {

    return(

        <div>
            <div className="border-b border-gray-200">
                <div className="p-8">
                    <h3 className="font-semibold text-xl">ŞİFRE GÜNCELLE</h3>
                </div>
            </div>
            <div>
                <div className="settingrightsizes">
                <div className="flex flex-row items-center justify-between pb-4">
                    <label htmlFor="currentPassword" className="mr-[218px] mb-1 text-lg font-medium">Şifre</label>
                    <Input
                    id="currentPassword"
                    text="Şifre"
                    placeholder="Güncel Şİfrenizi Girin"
                    type="text"
                    // setState={setEmail}
            />
                </div>
                <div className="flex flex-row items-center justify-between pb-4">
                    <label htmlFor="NewPassword" className="mr-[218px] mb-1 text-lg font-medium">Yeni Şifre</label>
                    <Input
                    id="NewPassword"
                    text="Yeni Şifre"
                    placeholder="Yeni Şifrenizi Girin"
                    type="text"
                    // setState={setEmail}
            />
                </div>
                <div className="flex flex-row items-center justify-between pb-4">
                    <label htmlFor="NewPasswordConf" className="mr-[218px] mb-1 text-lg font-medium">Yeni Şifre Onayı</label>
                    <Input
                    id="NewPasswordConf"
                    text="Yeni Şifre Onayı"
                    placeholder="Yeni Şifrenizi Onaylayın"
                    type="text"
                    // setState={setEmail}
            />
                </div>
                <div className="text-center mb-5">
                    <Button
                    type="submit"
                    text="Güncelle"
                    classnames="mt-5 UserSettingsButton"
                    // action={() => setLoading(loading => true)}
                    />
                </div>
                </div>
            </div>
            <div className="border-b border-t border-gray-200">
                <div className="p-8">
                    <h3 className="font-semibold text-xl">ŞİFRE SIFIRLA</h3>
                </div>
            </div>
            <div>
                <div className="settingrightsizes">
                    <div className="flex flex-row items-center justify-between pb-4">
                        <label htmlFor="passreset" className="mr-[218px] mb-1 text-lg font-medium">E-Posta</label>
                        <Input
                        id="passreset"
                        text="E-Posta"
                        placeholder="E-postanızı Girin"
                        type="email"
                        // setState={setEmail}
                        />
                    </div>
                    <div className="text-center mb-5">
                    <Button
                    type="submit"
                    text="Sıfırla"
                    classnames="mt-5 UserSettingsButton"
                    // action={() => setLoading(loading => true)}
                    />
                </div>
                </div>
            </div>
            
            
        </div>
    )
    
}

export default UpdatePassword