import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Loading } from "../../components";
import useAuth from "../../hooks/useAuth";
import { GetUserById, UpdateUser } from "../../services/UserService";
import { checkNumber } from "../../components/Utility";
import { ToastError, ToastSuccess } from "../../components/Toastr";
import { url } from "../../routes/Utility";
import { DefaultProfile } from "../../assets/img";

const UserProfileSettings = () => {

  const { user } = useAuth();
  const navigate = useNavigate();

  const [userInformation, setUserInformation] = useState({});
  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [city, setCity] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const getUserById = async (userId) => {
    
    const result = await GetUserById(userId);
    
    if(result.statusCode === 200){
      setLoading(loading => false);
      setUserInformation(userInformation => result.data);
    }
  }

  const updateUser = async () => {
    let model = {
      id: userInformation.id,
      fullName: fullName,
      city: city,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
      imageUrl: imageUrl
    }

    const result = await UpdateUser(model);

    if(result.statusCode === 200){
      ToastSuccess("Kullanıcı başarıyla güncellendi!");
      window.location.reload();
    } else {
      ToastError("İşlem sırasında bir hata oluştu!");
    }

    setUpdateLoading(updateLoading => false);
  }

  useEffect(() => {
    if(user.UserId){
      getUserById(user.UserId);
    }
  }, [])

  useEffect(() => {
    if(Object.keys(userInformation).length !== 0){
      userInformation.fullName && setFullName(fullName => userInformation.fullName);
      userInformation.email && setEmail(email => userInformation.email);
      userInformation.phoneNumber && setPhoneNumber(phoneNumber => userInformation.phoneNumber);
      userInformation.birthDate && setBirthDate(birthDate => userInformation.birthDate.split("T")[0]);
      userInformation.city && setCity(city => userInformation.city);
      userInformation.imageUrl && setImageUrl(imageUrl => userInformation.imageUrl);
    }
  }, [userInformation])

  return (
    <div>
      <div className=" border-b border-gray-200">
        <div className="p-8">
          <h1 className="font-semibold text-xl">PROFİL BİLGİLERİ</h1>
        </div>
      </div>
      {loading ? (
        <div className="m-7">
          <Loading />
        </div>
      ) : (
        <div className="">
          <div className="settingrightsizes">
            <div className="h-[100px] rounded-md mb-12">
              <div className="flex justify-center">
                <div className="relative flex flex-col items-center">
                  <img
                    className="w-[100px] h-[100px] shadow-profilePhoto rounded-full border-[2px]"
                    src={imageUrl !== "" ? imageUrl : DefaultProfile}
                    alt=""
                  />
                  <p className="text-lg font-bold text-center">{fullName}</p>
                </div>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-[10px] pb-4">
              <label
                htmlFor="name"
                className="mr-[218px] mb-1 text-lg font-medium"
              >
                Ad / Soyad 
              </label>
              <Input
                id="name"
                text="Ad Soyad"
                placeholder="Adınızı Soyadınızı Girin"
                type="text"
                value={fullName}
                setState={setFullName}
              />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-[10px] pb-4">
              <label
                htmlFor="email"
                className="mr-[218px] mb-1 text-lg font-medium"
              >
                E-Posta
              </label>
              <Input
                id="email"
                text="E-mail"
                placeholder="E-Mail Adresini Girin"
                type="email"
                value={email}
                setState={setEmail}
              />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-[10px] pb-4">
              <label
                htmlFor="phone"
                className="mr-[218px] mb-1 text-lg font-medium "
              >
                Telefon Numarası
              </label>
              <Input
                id="phone"
                text="Telefon Numarası"
                placeholder="Telefon Numaranızı Girin"
                type="text"
                onKeyDown={(e) => !checkNumber(e) && e.preventDefault()}
                value={phoneNumber}
                setState={setPhoneNumber}
              />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-[10px] pb-4">
              <label
                htmlFor="birthdate"
                className="mr-[218px] mb-1 text-lg font-medium"
              >
                Doğum Tarihi
              </label>
              <Input
                id="birthdate"
                text="Doğum Tarihi"
                placeholder="Doğum Tarihinizi Girin"
                type="date"
                value={birthDate ? birthDate : ""}
                setState={setBirthDate}
              />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-[10px] pb-4">
              <label
                htmlFor="city"
                className="mr-[218px] mb-1 text-lg font-medium"
              >
                Şehir
              </label>
              <Input
                id="city"
                text="Şehir"
                placeholder="Şehrinizi giriniz"
                type="text"
                value={city}
                setState={setCity}
              />
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start justify-between px-[10px] pb-4">
              <label
                htmlFor="city"
                className="mr-[218px] mb-1 text-lg font-medium"
              >
                Profil Fotoğrafı
              </label>
              <Input
                id="city"
                text="Profil Fotoğrafı URL"
                placeholder="Profil fotoğrafı URL giriniz"
                type="text"
                value={imageUrl}
                setState={setImageUrl}
              />
            </div>
            <div className="text-center mb-5">
              <Button
                type="button"
                text="Güncelle"
                classnames="mt-5 UserSettingsButton"
                loading={updateLoading}
                action={() => {
                  setUpdateLoading(updateLoading => true);
                  updateUser();
                }}
              />
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default UserProfileSettings;
