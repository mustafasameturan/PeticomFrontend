import React, { useEffect, useState } from "react";
import { AdInformation, CreateAdComponent } from "./components";
import { GetAdsByUserId } from "../../services/AdService";
import useAuth from "../../hooks/useAuth";
import { Loading } from "../../components";

const CreateAd = () => {

  const { user } = useAuth();  

  const [isHaveAd, setIsHaveAd] = useState(false);  
  const [loading, setLoading] = useState(true);

  const getAdsByUserId = async (userId) => {

    const response = await GetAdsByUserId(userId);

    if(response.statusCode === 200){
        setIsHaveAd(isHaveAd => response.data.length > 0 ? true : false);
        setLoading(loading => false);
    } else {
      setLoading(loading => false);
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

      {loading ? (
        <div className="m-8">
          <Loading />
        </div>
      ) : (

        isHaveAd ? (
          <AdInformation />
        ) : (
          <CreateAdComponent />
        )
        
      )}

    </>
  );
};

export default CreateAd;
