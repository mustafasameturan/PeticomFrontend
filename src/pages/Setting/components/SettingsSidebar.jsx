import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { url } from "../../../routes/Utility";
import useAuth from "../../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { userLogout } from "../../../store/UserSlice";
import { GetUserById } from "../../../services/UserService";
import useIsPeticomer from "../../../hooks/useIsPeticomer";

const SettingsSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const isPeticomer = useIsPeticomer();
  const { user } = useAuth();

  const [userInformation, setUserInformation] = useState({});

  const getUserById = async (userId) => {
    const result = await GetUserById(userId);

    if (result.statusCode === 200) {
      setUserInformation((userInformation) => result.data);
    }
  };

  useEffect(() => {
    if (user.UserId) {
      getUserById(user.UserId);
    }
  }, []);

  return (
    <>
      <div className="grid grid-rows-5 settingsleft sticky top-36">
        <div className="row-span-1 bgdef">
          <div className="pl-1 text-white text-center">
            <h6>Merhaba,</h6>
            <h1 className=" font-bold textname">{userInformation.fullName}</h1>
          </div>
        </div>
        <div className={`row-span-1 cursor-pointer hover:bg-stone-200 ${
            location.pathname === "/settings/user" ||
            location.pathname === "/settings"
              ? "bg-stone-100"
              : ""
          }`}
          onClick={() => navigate(url("settings.user"))}
        >
          <div
            className="p-5"
          >
            {/* <img src={UserPicture} className=''/> */}
            <h2>Kullanıcı Bilgilerim</h2>
          </div>
        </div>
        {/* peticomer application sayfası bekleyen başvuru varsa ona göre düzenlenecek */}
        {/* Petleri olunca gözükecek */}
        <div
          className={`row-span-1 cursor-pointer hover:bg-stone-200 ${
            location.pathname === "/settings/petinformations" ? "bg-stone-100" : ""
          }`}
          onClick={() => navigate(url("settings.petinformations"))}
        >
          <div className="p-5 ">
            <h2>Petlerim</h2>
          </div>
        </div>
        <div
          className={`row-span-1 cursor-pointer hover:bg-stone-200 ${
            location.pathname === "/settings/petidentity" ? "bg-stone-100" : ""
          }`}
          onClick={() => navigate(url("settings.petidentity"))}
        >
          <div className="p-5 ">
            <h2>Pet Bilgisi Ekle</h2>
          </div>
        </div>
        {isPeticomer && (
          <div
            className={`row-span-1 cursor-pointer hover:bg-stone-200 ${
              location.pathname === "/settings/createad" ? "bg-stone-100" : ""
            }`}
            onClick={() => navigate(url("settings.createad"))}
          >
            <div className="p-5 ">
              <h2>İlanlarım</h2>
            </div>
          </div>
        )}
        {!isPeticomer && (
          <div
            className={`row-span-1 cursor-pointer hover:bg-stone-200 ${
              location.pathname === "/settings/application"
                ? "bg-stone-100"
                : ""
            }`}
            onClick={() => navigate(url("settings.application"))}
          >
            <div className="p-5">
              <h2>Peticomer Ol</h2>
            </div>
          </div>
        )}
        <div
          className={`row-span-1 cursor-pointer hover:bg-stone-200 ${
            location.pathname === "/settings/passupdate" ? "bg-stone-100" : ""
          }`}
          onClick={() => navigate(url("settings.passupdate"))}
        >
          <div className="p-5">
            <h2>Şifre İşlemleri</h2>
          </div>
        </div>
        <div
          className="row-span-1 cursor-pointer hover:bg-stone-200"
          onClick={() => {
            dispatch(userLogout());
          }}
        >
          <div className="p-5">
            <h2>Çıkış Yap</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSidebar;
