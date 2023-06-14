import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select } from "../../components";
import { Cities } from "../../components/Constants";
import useAuth from "../../hooks/useAuth";
import { validateEmail } from "../../components/Utility";
import { ToastError, ToastInfo, ToastSuccess } from "../../components/Toastr";
import { CreateApplicationService } from "../../services/PeticomerApplicationService";

const PeticomerApplication = () => {

  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [selectedCity, setSelectedCity] = useState(1);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const createApplication = async () => {

    let valid = true;

    if(!validateEmail(email)){
      valid = false;
    }
    if(address.length === 0){
      valid = false;
    }
    if(description.length === 0){
      valid = false;
    }

    if(valid){

      let model = {
        userId: user.UserId,
        email: email,
        city: selectedCity === 1 ? 'Ankara' : selectedCity === 2 ? 'İstanbul' : 'Belirtilmedi',
        address: address,
        description: description
      };

      const response = await CreateApplicationService(model);
      console.log(response);
      if(response.statusCode === 200){
        ToastSuccess("Peticomer başvurunuz başarıyla alındı. En kısa sürede e-posta yoluyla bilgilendirileceksiniz!");
        setTimeout(() => { window.location.reload()}, 5000);
      } else {
        ToastError(response.error.errors[0] === 'You have already applicaton!' ? 'Devam eden bir başvurunuz bulunmaktadır!' : 'İşlem sırasında bir hata oluştu!');
      }

    } else {
      ToastInfo("Lütfen bilgileri eksiksiz ve doğru formatta giriniz!");
    }

    setLoading(loading => false);
  }
  
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="p-8">
          <h1 className="font-semibold text-xl">PETICOMER OL</h1>
        </div>
      </div>
      <div>
        <div className="settingrightsizes">
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="email"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              E-Posta
            </label>
            <Input
              id="email"
              placeholder="E-Posta Adresinizi Girin"
              type="text"
              setState={setEmail}
            />
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="name"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              İl
            </label>
            <div className="petinfoselect">
              <Select
                options={Cities}
                selectedData={selectedCity}
                setSelectedData={setSelectedCity}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="ptcmradress"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Adres
            </label>
            <textarea
              id="ptcmradress"
              placeholder="Adresinizi Girin"
              type="text"
              className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="ptcmrdesc"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Açıklama
            </label>
            <textarea
              id="ptcmrdesc"
              placeholder="Kendinizden Bahsedin"
              type="text"
              className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="text-center mb-5">
            <Button
              type="submit"
              text="Başvur"
              loading={loading}
              classnames="mt-5 UserSettingsButton"
              action={() => {
                setLoading(loading => true);
                createApplication();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeticomerApplication;
