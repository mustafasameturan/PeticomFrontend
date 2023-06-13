import React, { useEffect, useState } from "react";
import { Car, CarDistance, Cat, Dog, Garden, Handshake, NoneDog, SmokeFree } from '../../../assets/svg'
import { useNavigate } from "react-router-dom";
import { url } from "../../../routes/Utility";
import { GetUserById } from "../../../services/UserService";
import { GetPeticomerBadgesByUserId } from "../../../services/PeticomerService";
import { DefaultProfile } from "../../../assets/img";

const AdTableRow = (props) => {

  const { ad, index, adsLength } = props;

  const navigate = useNavigate();
  const [userInformations, setUserInformations] = useState({});
  const [peticomerBadges, setPeticomerBadges] = useState({});

  const getUserById = async (userId) => {
    const result = await GetUserById(userId);

    if(result.statusCode === 200){
      setUserInformations(userInformations => result.data);
    }
  }

  const getPeticomerBadgesByUserId = async (userId) => {
    const result = await GetPeticomerBadgesByUserId(userId);

    if(result.statusCode === 200){
      setPeticomerBadges(peticomerBadges => result.data[0]);
    }
  }

  useEffect(() => {
    if(ad.userId){
      getUserById(ad.userId);
      getPeticomerBadgesByUserId(ad.userId);
    }
  }, [ad])

  return (
    <div className={`resultbox grid grid-cols-3 gap-10 mx-9 ${((adsLength < 5) && (index+1 === adsLength)) ? 'mb-12' : ''}`}>
      <div className="img-side ml-10 my-auto">
        <img
          src={userInformations.imageUrl ? userInformations.imageUrl : DefaultProfile}
          className="ml-10"
          alt="Profil fotoğrafı"
        />
      </div>
      <div className="peticomer-name justify-center">
        <h2>{userInformations.fullName}</h2>
        <p>{ad.slogan}</p>
        <div className="badges flex gap-5 mt-7 justify-center">
          {/* <!-- Başlangıçta bütün badgeler hidden olacak fakat kişi o badge ye sahipse dblock classNameı eklenecek
            böylece bagde svg görünecek --> */}
          <div className="group relative">
            <img className={`dblock ${!peticomerBadges.cigaret ? '' : 'hidden'}`} src={SmokeFree} alt="Sigara Kullanmıyor" />
            <div className="tooltip-top">
              <p className="">Sigara Kullanmıyor</p>
            </div>
          </div>

          <div className="group relative">
            <img className={`dblock ${peticomerBadges.pet ? '' : 'hidden h-0'}`} src={Handshake} alt="Hayvanı Var" />
            <div className="tooltip-top">
              <p className="">Pet'i Var</p>
            </div>
          </div>

          <div className="group relative">
            <img className={`dblock ${peticomerBadges.car ? '' : 'hidden h-0'}`} src={Car} alt="Arabası Var" />
            <div className="tooltip-top">
              <p className="">Arabam Var</p>
            </div>
          </div>

          <div className="group relative">
            <img className={`dblock ${peticomerBadges.carDistance !== 0 ? '' : 'hidden'}`} src={CarDistance} alt="Arabası Var" />
            <div className="tooltip-top">
              <p className="">{peticomerBadges.carDistance} KM Kadar Uzağa Gelebilirim</p>
            </div>
          </div>

          <div className="group relative">
            <img className={`dblock ${peticomerBadges.garden ? '' : 'hidden'}`} src={Garden} alt="Bahçem Var" />
            <div className="tooltip-top">
              <p className="">Bahçem Var</p>
            </div>
          </div>
        </div>
      </div>
      <div className="peticomer-star flex flex-col justify-between">
        {/* Yıldız eklenecek */}
        <img className="stars mt-4 mx-auto" alt="" />
        <div className="text-end mx-auto peticomer-more-button-div">
          <button
            type="submit"
            className="peticomer-more-button bg-orange hover:bg-orange-hover"
            onClick={() => navigate(url("home.detail"))}
          >
            <div className="flex items-center gap-2">
              <p>₺{ad.price}</p>
              <span className="material-symbols-outlined ">
                search
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdTableRow;
