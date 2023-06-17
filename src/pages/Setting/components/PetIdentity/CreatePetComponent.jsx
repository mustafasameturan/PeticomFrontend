import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select } from "../../../../components";
import { Genders, PetTypes } from "../../../../components/Constants";
import { CreatePetIdentityService } from "../../../../services/PetIdentityService";
import useAuth from "../../../../hooks/useAuth";
import { ToastError, ToastInfo, ToastSuccess } from "../../../../components/Toastr";

const CreatePetComponent = () => {

  const { user } = useAuth();  

  const [loading, setLoading] = useState(false);
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [selectedType, setSelectedType] = useState(0);
  const [color, setColor] = useState("");
  const [birthDate, setBirthDate] = useState(null);
  const [selectedGender, setSelectedGender] = useState(0);
  const [food, setFood] = useState("");
  const [litter, setLitter] = useState("");
  const [lastInsDate, setLastInsDate] = useState(null);

  const createPetIdentity = async () => {

    let valid = true;

    if(petName.length === 0){
        valid = false;
    }
    if(petBreed.length === 0){
        valid = false;
    }
    if(color.length === 0){
        valid = false;
    }
    if(food.length === 0){
        valid = false;
    }
    if(lastInsDate === null){
        valid = false;
    }

    if(valid){

        let model = {
            userId: user.UserId,
            name: petName,
            petBreed: petBreed,
            type: selectedType,
            color: color,
            birthDate: birthDate,
            gender: selectedGender,
            food: food,
            petLitter: litter,
            lastInsDate: lastInsDate,
        };

        
        const response = await CreatePetIdentityService(model);

        if(response.statusCode === 200){
            ToastSuccess("Pet başarıyla oluşturuldu!");
            setTimeout(() => window.location.reload() ,2000);
        } else {
            ToastError("İşlem sırasında bir hata oluştu!")
        }

    } else {
        ToastInfo("Lütfen tüm bilgileri eksiksiz giriniz!");
    }

    setLoading(loading => false);
  }

  return (
    <div className="">
      <div className="settingrightsizes">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petname"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Adı <span className="text-red-500">*</span>
          </label>
          <Input
            id="petname"
            placeholder="Petinizin Adını Girin"
            type="text"
            setState={setPetName}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petgender"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Türü <span className="text-red-500">*</span>
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
          <label
            htmlFor="petkind"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Cinsi <span className="text-red-500">*</span>
          </label>
          <Input
            id="petkind"
            placeholder="Petinizin Cinsini Girin"
            type="text"
            setState={setPetBreed}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petcolor"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Rengi <span className="text-red-500">*</span>
          </label>
          <Input
            id="petcolor"
            placeholder="Petinizin Rengini Girin"
            type="text"
            setState={setColor}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petbday"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Doğum Tarihi 
          </label>
          <Input
            id="petbday"
            placeholder="Petinizin Doğum Tarihini Girin"
            type="date"
            setState={setBirthDate}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petgender"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Cinsiyet <span className="text-red-500">*</span>
          </label>
          <div className="petinfoselect">
            <Select
              options={Genders}
              selectedData={selectedGender}
              setSelectedData={setSelectedGender}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petfood"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Yemek <span className="text-red-500">*</span>
          </label>
          <Input
            id="petfood"
            placeholder="Petinizin Yediği Yemekleri Girin"
            type="text"
            setState={setFood}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petlit"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Kum
          </label>
          <Input
            id="petlit"
            placeholder="Petinizin Kum Türünü Girin"
            type="text"
            setState={setLitter}
          />
        </div>
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
          <label
            htmlFor="petlastinst"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Son Muayne Tarihi<span className="text-red-500">*</span>
          </label>
          <Input
            id="petlastinst"
            placeholder="Petinizin LastInstDate Girin"
            type="date"
            setState={setLastInsDate}
          />
        </div>
        <div className="text-center mb-5">
          <Button
            type="submit"
            text="Pet Ekle"
            loading={loading}
            classnames="mt-5 UserSettingsButton"
            action={() => {
                setLoading(loading => true);
                createPetIdentity();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePetComponent;
