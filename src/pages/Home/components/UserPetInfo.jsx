import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Input, Button, Select } from "../../../components"

const UserPetInfo = () => {

    const staticGender = [
        {id: 0, name: "Erkek"},
        {id: 1, name: "Dişi"}
    ];

    const staticType = [
        {id: 0, name: "Kedi"},
        {id: 1, name: "Köpek"}
    ]
    
    const [selectedGender, setSelectedGender] = useState(0);
    const [selectedType, setSelectedType] = useState(0);
    return(
        <div>
                <div className="border-b border-gray-200">
                    <div className="p-8">
                        <h3 className="font-semibold text-xl">PET BİLGİLERİ</h3>
                    </div>
                </div>
                <div className="">
                    <div className="settingrightsizes">
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petname" className='mr-[218px] mb-1 text-lg font-medium'>Pet Adı</label>
                                <Input
                                    id="petname" 
                                    text="Pet Adı"
                                    placeholder="Petinizin Adını Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petgender" className='mr-[218px] mb-1 text-lg font-medium'>Pet Türü</label>
                            <div className="petinfoselect">
                                <Select 
                                    options={staticType}
                                    selectedData={selectedType}
                                    setSelectedData={setSelectedType}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petkind" className='mr-[218px] mb-1 text-lg font-medium'>Pet Cinsi</label>
                                <Input
                                    id="petkind" 
                                    text="Pet Cinsi"
                                    placeholder="Petinizin Cinsini Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petcolor" className='mr-[218px] mb-1 text-lg font-medium'>Pet Rengi</label>
                                <Input
                                    id="petcolor" 
                                    text="Pet Rengi"
                                    placeholder="Petinizin Rengini Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petbday" className='mr-[218px] mb-1 text-lg font-medium'>Pet Doğum Tarihi</label>
                                <Input
                                    id="petbday" 
                                    text="Pet Doğum Tarihi"
                                    placeholder="Petinizin Doğum Tarihini Girin"
                                    type="date"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petgender" className='mr-[218px] mb-1 text-lg font-medium'>Pet Cinsiyet</label>
                            <div className="petinfoselect">
                                <Select 
                                    options={staticGender}
                                    selectedData={selectedGender}
                                    setSelectedData={setSelectedGender}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petfood" className='mr-[218px] mb-1 text-lg font-medium'>Pet Yemek</label>
                                <Input
                                    id="petfood" 
                                    text="Pet Yemek"
                                    placeholder="Petinizin Yediği Yemekleri Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petlit" className='mr-[218px] mb-1 text-lg font-medium'>Pet Kum</label>
                                <Input
                                    id="petlit" 
                                    text="Pet Kum"
                                    placeholder="Petinizin Kum Türünü Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="flex flex-row items-center justify-between pb-4">
                        <   label htmlFor="petlastinst" className='mr-[218px] mb-1 text-lg font-medium'>Pet LastInstDate</label>
                                <Input
                                    id="petlastinst" 
                                    text="Pet LastInstDate"
                                    placeholder="Petinizin LastInstDate Girin"
                                    type="date"
                                    // setState={setEmail}
                                />
                        </div>
                        <div className="text-center mb-5">
                                    <Button 
                                        type="submit"
                                        text="Pet Ekle"
                                        classnames="mt-5 UserSettingsButton"
                                        // action={() => setLoading(loading => true)}
                                    />
                        </div>
                        
                    </div>
                </div>
                <div className="">
                    <div className="border-b border-t border-gray-200">
                        <div className="p-8">
                            <h3 className="font-semibold text-xl">AŞI BİLGİLERİ</h3>
                        </div>
                    </div>
                    <div>
                        <div className="settingrightsizes">
                            <div className="flex flex-row items-center justify-between pb-4">
                            <   label htmlFor="petchoose" className='mr-[218px] mb-1 text-lg font-medium'>Pet Seçin</label>
                                <div className="petinfoselect">
                                    <Select 
                                        options={staticType}
                                        selectedData={selectedType}
                                        setSelectedData={setSelectedType}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="vacname" className='mr-[218px] mb-1 text-lg font-medium'>Aşı Adı</label>
                                <Input
                                    id="vacname" 
                                    text="Aşı Adı"
                                    placeholder="Aşının Adını Girin"
                                    type="text"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="vacdate" className='mr-[218px] mb-1 text-lg font-medium'>Aşı Tarihi</label>
                                <Input
                                    id="vacdate" 
                                    text="Aşı Tarihi"
                                    placeholder="Aşının Tarihini Girin"
                                    type="date"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="vacperiod" className='mr-[218px] mb-1 text-lg font-medium'>Aşı Periodu - Ay</label>
                                <Input
                                    id="vacperiod" 
                                    text="Aşı Periodu (Ay)"
                                    placeholder="Aşının Sıklığını Girin"
                                    type="number"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="text-center mb-5">
                                    <Button 
                                        type="submit"
                                        text="Aşı Ekle"
                                        classnames="mt-5 UserSettingsButton"
                                        // action={() => setLoading(loading => true)}
                                    />
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-b border-t border-gray-200">
                        <div className="p-8">
                            <h3 className="font-semibold text-lg">HASTALIK BİLGİLERİ</h3>
                        </div>
                    </div>    
                        <div className="settingrightsizes">
                            <div className="flex flex-row items-center justify-between pb-4">
                            <   label htmlFor="petchoose" className='mr-[218px] mb-1 text-lg font-medium'>Pet Seçin</label>
                                <div className="petinfoselect">
                                    <Select 
                                        options={staticType}
                                        selectedData={selectedType}
                                        setSelectedData={setSelectedType}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="disname" className='mr-[218px] mb-1 text-lg font-medium'>Hastalık Adı</label>
                                <Input
                                    id="disname" 
                                    text="Hastalık Adı"
                                    placeholder="Hastalığın Adını Girin (Varsa)"
                                    type="text"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="flex flex-row items-center justify-between pb-4">
                                <label htmlFor="disdesc" className='mr-[218px] mb-1 text-lg font-medium'>Hastalık Açıklaması</label>
                                <Input
                                    id="disdesc" 
                                    text="Hastalık Açıklaması"
                                    placeholder="Hastalığı Açıklayın (Varsa)"
                                    type="text"
                                    // setState={setEmail}
                                />
                            </div>
                            <div className="text-center mb-5">
                                    <Button 
                                        type="submit"
                                        text="Hastalık Ekle"
                                        classnames="mt-5 UserSettingsButton"
                                        // action={() => setLoading(loading => true)}
                                    />
                            </div>
                        </div>
                    
                </div>
        </div>

    )
}

export default UserPetInfo