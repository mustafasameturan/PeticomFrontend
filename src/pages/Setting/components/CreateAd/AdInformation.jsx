import React, { useEffect, useState } from "react";
import { Button, Input, Loading, Select } from "../../../../components";
import { checkNumber } from "../../../../components/Utility";
import { Cities, PetTypes } from "../../../../components/Constants";
import useAuth from "../../../../hooks/useAuth";
import { DeleteAd, GetAdsByUserId } from "../../../../services/AdService";
import { ToastError, ToastSuccess } from "../../../../components/Toastr";

const AdInformation = () => {
  const { user } = useAuth();

  const [adsInformations, setAdsInformations] = useState({});
  const [loading, setLoading] = useState(true);

  const getAdsByUserId = async (userId) => {
    const response = await GetAdsByUserId(userId);

    if (response.statusCode === 200) {
      setAdsInformations((adsInformations) => response.data[0]);
      setLoading((loading) => false);
    }
  };

  const deleteAd = async (adId) => {
    const response = await DeleteAd(adId);

    console.log(response);
    if (response.statusCode === 200) {
      ToastSuccess("İlan başarıyla silindi!");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (user.UserId) {
      getAdsByUserId(user.UserId);
    }
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="m-8">
          <Loading />
        </div>
      ) : (
        <div className="settingrightsizes">
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="petgender"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Pet Türü
            </label>
            <div className="petinfoselect">
              <Select
                options={PetTypes}
                selectedData={adsInformations.petType}
                isDisabled={true}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="city"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Şehir
            </label>
            <div className="petinfoselect">
              <Select
                options={Cities}
                selectedData={adsInformations.cityId}
                isDisabled={true}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="petkind"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Fiyat
            </label>
            <input
              disabled={true}
              value={adsInformations.price ? adsInformations.price : ""}
              className="border rounded-full w-80 outline-none pl-5 text-lg h-9"
            />
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
            <label
              htmlFor="slogan"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Slogan
            </label>
            <textarea
              id="slogan"
              placeholder="İlan Hakkında Bir Şeyler Girin"
              type="text"
              className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
              disabled={true}
              value={adsInformations.slogan ? adsInformations.slogan : ""}
            />
          </div>
          <div className="flex flex-row items-center justify-between pb-4">
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
              disabled={true}
              value={adsInformations.about ? adsInformations.about : ""}
            />
          </div>
          <div className="text-center mb-5">
            <Button
              type="submit"
              text="İlan Sil"
              classnames="mt-5 UserSettingsButton !bg-red-500 !border-red-500 hover:!bg-red-600 hover:!text-white"
              action={() => deleteAd(adsInformations.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdInformation;
