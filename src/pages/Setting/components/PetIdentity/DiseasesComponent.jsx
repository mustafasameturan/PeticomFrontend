import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select } from "../../../../components";
import { CreatePetDisease, GetPetIdentitiesSelectListByUserIdService } from "../../../../services/PetIdentityService";
import useAuth from "../../../../hooks/useAuth";
import { ToastError, ToastInfo, ToastSuccess } from "../../../../components/Toastr";

const DiseasesComponent = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [petList, setPetList] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const getPetListByUserId = async (userId) => {
    const response = await GetPetIdentitiesSelectListByUserIdService(userId);

    if (response.statusCode === 200) {
      setPetList((petList) => response.data);
    }
  };

  const createVaccine = async () => {
    let valid = true;

    if (selectedPet.length === 0) {
      valid = false;
    }
    if (name.length === 0) {
      valid = false;
    }
    if (description.length === 0) {
      valid = false;
    }

    if (valid) {
      let model = {
        petId: selectedPet,
        name: name,
        description: description
      };

      const response = await CreatePetDisease(model);
      console.log(response);
      if (response.statusCode === 200) {
        ToastSuccess(`Pet için hastalık bilgisi başarıyla eklendi!`);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        ToastError(`İşlem sırasında bir hata oluştu!`);
      }
    } else {
      ToastInfo("Lütfen bilgileri eksiksiz giriniz!");
    }

    setLoading((loading) => false);
  };

  useEffect(() => {
    if (user.UserId) {
      getPetListByUserId(user.UserId);
    }
  }, []);

  return (
    <div>
      <div className="border-b border-t border-gray-200">
        <div className="p-8">
          <h3 className="font-semibold text-lg">HASTALIK BİLGİSİ EKLE</h3>
        </div>
      </div>
      <div className="settingrightsizes">
        <div className="flex flex-row items-center justify-between pb-4">
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
        <div className="flex flex-row items-center justify-between pb-4">
          <label
            htmlFor="disname"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Hastalık Adı
          </label>
          <Input
            id="disname"
            text="Hastalık Adı"
            placeholder="Hastalığın Adını Girin (Varsa)"
            type="text"
            setState={setName}
          />
        </div>
        <div className="flex flex-row items-center justify-between pb-4">
          <label
            htmlFor="disdesc"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Hastalık Açıklaması
          </label>
          <textarea
            id="disdesc"
            placeholder="Hastalık Hakkında Bir Şeyler Girin"
            type="text"
            className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="text-center mb-5">
          <Button
            type="submit"
            text="Hastalık Ekle"
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
  );
};

export default DiseasesComponent;
