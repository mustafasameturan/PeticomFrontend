import React, { useEffect, useState } from "react";
import { AdInformation, CreateAdComponent } from "./components";
import { GetAdsByUserId } from "../../services/AdService";
import useAuth from "../../hooks/useAuth";

const CreateAd = () => {

  const { user } = useAuth();  

  const [isHaveAd, setIsHaveAd] = useState(false);  

  const getAdsByUserId = async (userId) => {

    const response = await GetAdsByUserId(userId);

    if(response.statusCode === 204){
        setIsHaveAd(isHaveAd => response.data.length > 0 ? true : false);
    }
  }

  useEffect(() => {
    if(user.UserId){
        getAdsByUserId(user.UserId);
    }
  }, [])

  return (
    <>
      <div className="border-b border-gray-200">
        <div className="p-8">
          <h3 className="font-semibold text-xl">
            {isHaveAd ? 'İLAN BİLGİLERİM' : 'İLAN EKLE'}
          </h3>
        </div>
      </div>

      {isHaveAd ? (
        <AdInformation />
      ) : (
        <CreateAdComponent />
      )}

    </>
  );
};

export default CreateAd;
