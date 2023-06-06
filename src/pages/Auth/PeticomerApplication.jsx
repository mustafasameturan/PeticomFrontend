import React, { useState } from "react";
import { Button, Input, Select } from "../../components";
import "../../assets/css/peticomer-application.css";

const PeticomerApplication = () => {

  const [selectedCity, setSelectedCity] = useState(0);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const staticCities = [
    { id: 6, name: "Ankara" },
    { id: 35, name: "İzmir" },
    { id: 16, name: "Bursa" },
    { id: 34, name: "İstanbul" }
  ];

  return (
    <>
      <div className="container mx-auto w-[500px]">
        <div
          id="signupsections"
          className="grid grid-cols-1 md:grid-cols-1 mt-20 "
        >
          <div className="application-section left">
            <h3 id="afterline">Peticomer Ol</h3>
            <div className="bepeticomer inputarea">
              <form action="#">
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label className='mr-[260px] mb-1 text-lg font-medium'>İl</label>
                  <div className="select-application">
                    <Select 
                      options={staticCities}
                      selectedData={selectedCity}
                      setSelectedData={setSelectedCity}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="address" className='mr-[230px] mb-1 text-lg font-medium'>Adres</label>
                  <Input
                    id="address" 
                    placeholder="Adresinizi giriniz"
                    type="text"
                    setState={setAddress}
                  />
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="phone-number" className='mr-[136px] mb-1 text-lg font-medium'>Telefon Numarası</label>
                  <Input
                    id="phone-number" 
                    placeholder="Telefon numaranızı giriniz"
                    type="text"
                    setState={setPhoneNumber}
                  />
                </div>
                <div className="flex flex-col items-center justify-center px-[10px] pb-4">
                  <label htmlFor="description" className='mr-[215px] mb-1 text-lg font-medium'>Açıklama</label>
                  <textarea 
                    className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg"
                    placeholder="Kendinizden bahsedin"
                  >
                  </textarea>
                </div>
                <Button
                  type="submit"
                  text="Başvur"
                  classnames="mt-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeticomerApplication;
