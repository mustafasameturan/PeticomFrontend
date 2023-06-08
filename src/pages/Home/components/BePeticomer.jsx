import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Input, Button, Select } from "../../../components"

const BePeticomer = () => {

    const staticCities = [
        { id: 6, name: "Ankara" },
        { id: 35, name: "İzmir" },
        { id: 16, name: "Bursa" },
        { id: 34, name: "İstanbul" }
    ];

    const [selectedCity, setSelectedCity] = useState(0);
    return(
        <div>
                <div className="border-b border-gray-200">
                    <div className="p-8">
                        <h1 className="font-semibold text-xl">PETICOMER OL</h1>
                    </div>
                </div>
                <div>
                    <div className="settingrightsizes">
                            <div className="flex flex-row items-center justify-between pb-4">
                                    <label htmlFor="name" className='mr-[218px] mb-1 text-lg font-medium'>İl</label>
                                    <div className="petinfoselect">
                                        <Select 
                                        options={staticCities}
                                        selectedData={selectedCity}
                                        setSelectedData={setSelectedCity}
                                        />
                                    </div>
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="ptcmradress" className='mr-[218px] mb-1 text-lg font-medium'>Adres</label>
                                <Input
                                    id="ptcmradress" 
                                    text="Adres"
                                    placeholder="Adresinizi Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="ptcmrphone" className='mr-[218px] mb-1 text-lg font-medium'>Telefon Numarası</label>
                                <Input
                                    id="ptcmrphone" 
                                    text="Telefon Numarası"
                                    placeholder="Telefon Numaranızı Girin"
                                    type="tel"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="ptcmrdesc" className='mr-[218px] mb-1 text-lg font-medium'>Açıklama</label>
                                <textarea 
                                className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
                                placeholder="Kendinizden bahsedin"
                                >
                                </textarea>
                            </div>
                            <div className="text-center mb-5">
                                    <Button 
                                        type="submit"
                                        text="Başvur"
                                        classnames="mt-5 UserSettingsButton"
                                        // action={() => setLoading(loading => true)}
                                    />
                                </div>

                    </div>
                </div>
        </div>
    )
}
export default BePeticomer