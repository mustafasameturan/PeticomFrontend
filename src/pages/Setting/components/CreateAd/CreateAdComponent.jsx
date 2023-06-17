import React, { useState } from "react";
import { Button, Input, Select } from "../../../../components";
import { checkNumber } from "../../../../components/Utility";
import { Cities, PetTypes } from "../../../../components/Constants";
import useAuth from "../../../../hooks/useAuth";
import { ToastInfo, ToastSuccess } from "../../../../components/Toastr";
import { CreateAd } from "../..";
import { CreateAdService } from "../../../../services/AdService";

const CreateAdComponent = () => {

  const { user } = useAuth();  

  const [loading, setLoading] = useState(false);
  const [slogan, setSlogan] = useState("");
  const [selectedType, setSelectedType] = useState(1);
  const [selectedCity, setSelectedCity] = useState(1);
  const [price, setPrice] = useState(0);
  const [about, setAbout] = useState("");

  const createAd = async () => {

    let valid = true;

    if(price === 0 || price === ""){
      valid = false;
    }
    if(slogan.length === 0){
      valid = false;
    }
    if(about.length === 0){
      valid = false;
    }

    if(valid){

      let model = {
        userId: user.UserId,
        cityId: selectedCity,
        petType: selectedType,
        slogan: slogan,
        about: about,
        price: +price
      };

      const response = await CreateAdService(model);
      
      if(response.statusCode === 200){
        ToastSuccess("İlan başarıyla oluşturuldu!");
        setTimeout(() => { window.location.reload(); }, 2000);
      }

    } else {
      ToastInfo("Lütfen bilgileri eksiksiz giriniz!");
    }
    
    setLoading(loading => false);
  }

  return (
    <div className="">
      <div className="settingrightsizes">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petgender"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Türü
          </label>
          <div className="petinfoselect">
            <Select
              options={PetTypes}
              selectedData={selectedType}
              setSelectedData={setSelectedType}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label htmlFor="city" className="mr-[218px] mb-1 text-lg font-medium">
            Şehir
          </label>
          <div className="petinfoselect">
            <Select
              options={Cities}
              selectedData={selectedCity}
              setSelectedData={setSelectedCity}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petkind"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Fiyat
          </label>
          <Input
            id="petkind"
            placeholder="Fiyat Girin"
            onKeyDown={(e) => !checkNumber(e) && e.preventDefault()}
            setState={setPrice}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="slogan"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Slogan
          </label>
          <textarea
            id="slogan"
            placeholder="Slogan Girin"
            type="text"
            className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
            onChange={(e) => {
              setSlogan(e.target.value);
            }}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="about"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            İlan Hakkında
          </label>
          <textarea
            id="about"
            placeholder="İlan Hakkında Bir Şeyler Girin"
            type="text"
            className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          />
        </div>
        <div className="text-center mb-5">
          <Button
            type="button"
            text="İlan Ekle"
            classnames="mt-5 UserSettingsButton"
            loading={loading}
            action={() => {
              setLoading(loading => true);
              createAd();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAdComponent;
