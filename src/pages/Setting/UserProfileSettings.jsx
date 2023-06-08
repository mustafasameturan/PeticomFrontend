import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../components";

const UserProfileSettings = () => {
  return (
    <div>
      <div className=" border-b border-gray-200">
        <div className="p-8">
          <h1 className="font-semibold text-xl">PROFİL BİLGİLERİ</h1>
        </div>
      </div>
      <div className="">
        <div className="settingrightsizes">
          <div className="flex flex-row items-center justify-between px-[10px] pb-4">
            <label
              htmlFor="name"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Ad
            </label>
            <Input
              id="name"
              text="Ad"
              placeholder="Adınızı Girin"
              type="text"
              // setState={setEmail}
            />
          </div>
          <div className="flex flex-row items-center justify-between px-[10px] pb-4">
            <label
              htmlFor="surnmame"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Soyad
            </label>
            <Input
              id="surname"
              text="Soyad"
              placeholder="Soyadınızı Girin"
              type="text"
              // setState={setEmail}
            />
          </div>
          <div className="flex flex-row items-center justify-between px-[10px] pb-4">
            <label
              htmlFor="email"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              E-mail
            </label>
            <Input
              id="email"
              text="E-mail"
              placeholder="E-Mail Adresini Girin"
              type="email"
              // setState={setEmail}
            />
          </div>
          <div className="flex flex-row items-center justify-between px-[10px] pb-4">
            <label
              htmlFor="phone"
              className="mr-[218px] mb-1 text-lg font-medium min-w-max "
            >
              Telefon Numarası
            </label>
            <Input
              id="phone"
              text="Telefon Numarası"
              placeholder="Telefon Numaranızı Girin"
              type="num"
              // setState={setEmail}
            />
          </div>
          <div className="flex flex-row items-center justify-between px-[10px] pb-4">
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
              // setState={setEmail}
            />
          </div>
          <div className="flex flex-row items-center justify-between px-[10px] pb-4">
            <label
              htmlFor="adress"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Adres
            </label>
            <Input
              id="address"
              text="Adres"
              placeholder="Adresinizi Girin"
              type="text"
              // setState={setEmail}
            />
          </div>
          <div className="text-center mb-5">
            <Button
              type="submit"
              text="Güncelle"
              classnames="mt-5 UserSettingsButton"
              // action={() => setLoading(loading => true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
