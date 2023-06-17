import React, { useEffect, useState } from "react";
import { Car, CarDistance, Cat, Dog, Garden, Handshake, NoneDog, SmokeFree } from '../../../assets/svg'
import { useNavigate } from "react-router-dom";
import { url } from "../../../routes/Utility";
import { GetUserById } from "../../../services/UserService";
import { GetPeticomerBadgesByUserId } from "../../../services/PeticomerService";
import { DefaultProfile } from "../../../assets/img";
import { AddStar, CalculateStarAverageByAdId, GetStarByUserIdAndAdId } from "../../../services/StarService";
import "../../../assets/css/star.css"
import useAuth from "../../../hooks/useAuth";
import StarComponent from "./StarComponent";

const AdTableRow = (props) => {

  const { ad, index, adsLength } = props;

  const navigate = useNavigate();
  const { user } = useAuth();

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
    <div className={`resultbox grid md:grid-cols-3 gap-10 md:mx-9 mx-auto  ${((adsLength < 5) && (index+1 === adsLength)) ? 'mb-12' : ''}`}>
      <div className="img-side md:ml-10 md:my-auto mx-auto">
        <img
          src={userInformations.imageUrl ? userInformations.imageUrl : DefaultProfile}
          className="ml-10"
          height={30}
          width={200}
          alt="Profil fotoğrafı"
        />
      </div>
      <div className="peticomer-name justify-center">
        <h2 className="">{userInformations.fullName}</h2>
        <p className="">{ad.slogan}</p>
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
      <div className="peticomer-star flex flex-col items-center justify-between">
        
        <div className="my-auto">
          <StarComponent adId={ad.id} />
        </div>
 
        <div className="text-end mx-auto peticomer-more-button-div">
          <button
            type="submit"
            className="peticomer-more-button bg-orange hover:bg-orange-hover"
            onClick={() => navigate(url("ad.detail", { adId: ad.id }))}
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
