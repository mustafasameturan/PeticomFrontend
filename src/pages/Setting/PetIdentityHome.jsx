import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select, Loading } from "../../components";
import { CreatePetComponent, VaccinesComponent, DiseasesComponent } from "./components";
import useAuth from "../../hooks/useAuth";
import { GetFullPetIdentityByUserIdService } from "../../services/PetIdentityService";

const PetIdentityHome = () => {

  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isHavePet, setIsHavePet] = useState(false);
  
  const getPetIdentityByUserId = async (userId) => {

    const response = await GetFullPetIdentityByUserIdService(userId);

    if(response.statusCode === 200){
      setIsHavePet(isHavePet => true);
    } else {
      setIsHavePet(isHavePet => false);
    }

    setLoading(loading => false);
  }

  useEffect(() => {
    if(user.UserId){
      getPetIdentityByUserId(user.UserId);
    }
  }, [])
  
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="p-8">
          <h3 className="font-semibold text-xl">PET BİLGİSİ EKLE</h3>
        </div>
      </div>
      {loading ? (
        <div className="m-8">
          <Loading />
        </div>
      ) : (
        <>
          <CreatePetComponent />

          {isHavePet && (
            <>
              <VaccinesComponent />
              <DiseasesComponent />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PetIdentityHome;
