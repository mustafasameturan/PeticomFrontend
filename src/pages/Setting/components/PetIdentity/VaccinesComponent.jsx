import React, { useEffect, useState } from "react";
import { Input, Button, Select } from "../../../../components";
import { CreatePetVaccine, GetPetIdentitiesSelectListByUserIdService } from "../../../../services/PetIdentityService";
import { Genders, PetTypes } from "../../../../components/Constants";
import useAuth from "../../../../hooks/useAuth";
import { ToastError, ToastInfo, ToastSuccess } from "../../../../components/Toastr";
import { checkNumber } from "../../../../components/Utility";

const VaccinesComponent = () => {

  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [petList, setPetList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [name, setName] = useState("");
  const [vaccineDate, setVaccineDate] = useState(null);
  const [period, setPeriod] = useState(0);

  const getPetListByUserId = async (userId) => {

    const response = await GetPetIdentitiesSelectListByUserIdService(userId);

    if(response.statusCode === 200){
      setPetList(petList => response.data);
    }
  }

  const createVaccine = async () => {

    let valid = true;

    if(selectedPet.length === 0){
      valid = false;
    }
    if(name.length === 0){
      valid = false;
    }
    if(vaccineDate === null){
      valid = false;
    }
    if(period === 0 || period.length === 0){
      valid = false;
    }

    if(valid){

      let model = {
        petId: selectedPet,
        name: name,
        vaccineDate: vaccineDate,
        period: +period
      };

      const response = await CreatePetVaccine(model);
      console.log(response);
      if(response.statusCode === 200){
        ToastSuccess(`Pet için aşı bilgisi başarıyla eklendi!`);
        setTimeout(() => { window.location.reload(); }, 2000);
      } else {
        ToastError(`İşlem sırasında bir hata oluştu!`);
      }

    } else {
      ToastInfo("Lütfen bilgileri eksiksiz giriniz!");
    }

    setLoading(loading => false);
  }

  useEffect(() => {
    if(user.UserId){
      getPetListByUserId(user.UserId);
    }
  }, [])
  
  return (
    <div className="">
      <div className="border-b border-t border-gray-200">
        <div className="p-8">
          <h3 className="font-semibold text-xl">AŞI BİLGİSİ EKLE</h3>
        </div>
      </div>
      <div>
        <div className="settingrightsizes">
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
            <label
              htmlFor="petchoose"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Pet Seçin
            </label>
            <div className="petinfoselect">
              <select name="" id="" onChange={(e) => setSelectedPet(e.target.value)}>
                <option value="">Seçiniz</option>
                {petList.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
            <label
              htmlFor="vacname"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Aşı Adı
            </label>
            <Input
              id="vacname"
              text="Aşı Adı"
              placeholder="Aşının Adını Girin"
              type="text"
              setState={setName}
            />
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
            <label
              htmlFor="vacdate"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Aşı Tarihi
            </label>
            <Input
              id="vacdate"
              text="Aşı Tarihi"
              placeholder="Aşının Tarihini Girin"
              type="date"
              setState={setVaccineDate}
            />
          </div>
          <div className="flex md:flex-row flex-col md:items-center items-start justify-between pb-4">
            <label
              htmlFor="vacperiod"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Aşı Periodu - Ay
            </label>
            <Input
              id="vacperiod"
              text="Aşı Periodu (Ay)"
              placeholder="Aşının Sıklığını Girin"
              type="text"
              onKeyDown={(e) => !checkNumber(e) && e.preventDefault()}
              setState={setPeriod}
            />
          </div>
          <div className="text-center mb-5">
            <Button
              type="submit"
              text="Aşı Ekle"
              classnames="mt-5 UserSettingsButton"
              loading={loading}
              action={() => {
                setLoading(loading => true);
                createVaccine();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinesComponent;
