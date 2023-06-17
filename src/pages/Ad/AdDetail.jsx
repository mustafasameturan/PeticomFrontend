import React, { useEffect, useState } from "react";
import "../../assets/css/resultdetail.css";
import { CatPhoto, Picture1, Picture2 } from "../../assets/img";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../routes/Utility";
import useAuth from "../../hooks/useAuth";
import { PetIdentityModal, PetPictureComponent, StarComponent } from "./components";
import { Modal } from "../../components/Modal";
import { GetAdById } from "../../services/AdService";
import { GetUserById } from "../../services/UserService";
import { Input, Button, Loading } from "../../components";
import { Car, CarDistance, Garden, Handshake, SmokeFree } from "../../assets/svg";
import { GetPeticomerBadgesByUserId } from "../../services/PeticomerBadgesService";
import { GetPetFullIdentitiesByUserId } from "../../services/PetIdentityService";
import ReservationModal from "./components/ReservationModal";

const AdDetail = () => {
  const navigate = useNavigate();
  const { adId } = useParams();
  const { token } = useAuth();

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const [adInformation, setAdInformation] = useState({});
  const [userInformation, setUserInformation] = useState({});
  const [peticomerBadges, setPeticomerBadges] = useState({});
  const [petIdentities, setPetIdentities] = useState([]);

  const getAdById = async (adId) => {
    const response = await GetAdById(adId);

    if (response.statusCode === 200) {
      setAdInformation((adInformation) => response.data);
    }
  };

  const getUserById = async (userId) => {
    const response = await GetUserById(userId);
    
    if (response.statusCode === 200) {
      setUserInformation((userInformation) => response.data);
    }
  };

  const getPeticomerBadgesByUserId = async (userId) => {
    const result = await GetPeticomerBadgesByUserId(userId);

    if(result.statusCode === 200){
      setPeticomerBadges(peticomerBadges => result.data[0]);
    }
  }

  const getPetIdentitiesByUserId = async (userId) => {

      const response = await GetPetFullIdentitiesByUserId(userId);

      if(response.statusCode === 200){
          setPetIdentities(petIdentities => response.data);
      }
  }

  const closeButton = () => {
    setModal(modal => false);
  }

  useEffect(() => {
    if (adId) {
      getAdById(adId);
    }
  }, [adId]);

  useEffect(() => {
    if (Object.keys(adInformation).length > 0) {
      getUserById(adInformation.userId);
      getPeticomerBadgesByUserId(adInformation.userId);
      getPetIdentitiesByUserId(adInformation.userId);
    }
  }, [adInformation]);

  return (
    <>
      <div className="container mx-auto">
        <div
          className="flex mt-8 mb-2 cursor-pointer items-center hover:text-orange"
          onClick={() => navigate(url("ad"))}
        >
          <span className="material-symbols-outlined ">arrow_back</span>
          <h1 className="my-auto text-xl">Önceki İlanlar</h1>
        </div>
        <div className="resultdetail mb-40">
          <div className="md:grid md:grid-cols-3 md:gap-4 p-5">
            <div className="col-span-1 md:mx-auto addetailleft ">
              <div className="p-5 grid grid-rows-3">
                <div className="row-span-3 text-center">
                  <img
                    className="border-r-50 mx-auto !h-[200px] !w-[200px]"
                    src={userInformation.imageUrl}
                    alt=""
                  />
                  <h2 className="peticomer-name">{userInformation.fullName}</h2>
                  <p className="text-lg">*Köpek Bakıcısı*</p>
                </div>
                <div className="row-span-1">
                  {" "}
                  <div className="badges flex gap-5 mt-7 justify-center">

                    <div className="group relative">
                      <img
                        className={`dblock ${
                          !peticomerBadges.cigaret ? "" : "hidden"
                        }`}
                        src={SmokeFree}
                        alt="Sigara Kullanmıyor"
                      />
                      <div className="tooltip-top">
                        <p className="">Sigara Kullanmıyor</p>
                      </div>
                    </div>

                    <div className="group relative">
                      <img
                        className={`dblock ${
                          peticomerBadges.pet ? "" : "hidden h-0"
                        }`}
                        src={Handshake}
                        alt="Hayvanı Var"
                      />
                      <div className="tooltip-top">
                        <p className="">Pet'i Var</p>
                      </div>
                    </div>

                    <div className="group relative">
                      <img
                        className={`dblock ${
                          peticomerBadges.car ? "" : "hidden h-0"
                        }`}
                        src={Car}
                        alt="Arabası Var"
                      />
                      <div className="tooltip-top">
                        <p className="">Arabam Var</p>
                      </div>
                    </div>

                    <div className="group relative">
                      <img
                        className={`dblock ${
                          peticomerBadges.carDistance !== 0 ? "" : "hidden"
                        }`}
                        src={CarDistance}
                        alt="Arabası Var"
                      />
                      <div className="tooltip-top">
                        <p className="">
                          {peticomerBadges.carDistance} KM Kadar Uzağa
                          Gelebilirim
                        </p>
                      </div>
                    </div>

                    <div className="group relative">
                      <img
                        className={`dblock ${
                          peticomerBadges.garden ? "" : "hidden"
                        }`}
                        src={Garden}
                        alt="Bahçem Var"
                      />
                      <div className="tooltip-top">
                        <p className="">Bahçem Var</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center row-span-1">
                  <StarComponent adId={adId} />
                </div>
              </div>
            </div>

            <div className="col-span-2 grid grid-rows-4 gap-5">
              <div className="row-span-1">
                <div className="text-center">
                  <h2 className="font-semibold text-xl">
                    {adInformation.slogan}
                  </h2>
                  <p className="text-sm">{adInformation.about}</p>
                </div>
              </div>
              <div className="row-span-3">
                <div className="grid xl:grid-cols-2">
                  <div className="peticomer-home-pic col-span-1">
                    <h2>Fotoğraflar</h2>
                    <div className="flex peticomer-home-pics gap-6 pt-4">
                      <img src={Picture1} alt="" />
                      <img src={Picture2} alt="" />
                    </div>
                  </div>
                  <div className="pets col-span-1 ">
                    <h2 className="text-[25px] mb-4 ">Petleri</h2>
                    {petIdentities.length > 0 ? (
                      <div className="flex peticomer-pets-pic gap-4 justify-start">
                        {petIdentities.map((identity, index) => (
                          <PetPictureComponent key={index} identity={identity} />
                        ))}
                      </div>
                    ) : (
                      <p className="text-center">Herhangi bir pet bulunamadı!</p>
                    )}
                  </div>
                </div>
                {/* <div className="price text-end">
                <div className="text-center">
                  Gecelik
                  <br />
                  ₺{adInformation.price}
                </div>
              </div>
              <div className="rezervation">
                <button className="items-center">
                  Rezervasyon
                  <br />
                  Yap
                </button>
              </div> */}
              </div>
              <div className="row-span-1 price">
                <h2 className="text-[25px] mb-4">Fiyatlar</h2>
                <div className="my-auto">
                  <h3>Günlük ₺{adInformation.price}</h3>
                  <div className="text-center mb-5">
                    <div className={`${token.length === 0 ? "relative group" : ""}`}>
                      <Button
                        type="button"
                        text="Rezervasyon Yap"
                        classnames={`UserSettingsButton !w-36 ${token.length === 0 ? "cursor-not-allowed" : ""}`}
                        isDisabled={token.length === 0 ? true : false}
                        action={() => { setModal(true); setModalContent( { element: "reservation" } ); }}
                      />
                      {token.length === 0 && (
                        <div className="tooltip-top top-[200px]">
                          <p>Giriş yapmanız gerekmektedir!</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {(Object.keys(modalContent).length !== 0) && (
        <Modal modal={modal} setModal={setModal} classes={ {modal: '!h-[75vh] max-w-[600px]'} }>
            {modalContent.element === "reservation" && 
              <ReservationModal 
                adId={adId} 
                peticomerId={adInformation.userId}
                price={adInformation.price}
                closeButton={closeButton}
              /> 
            }    
        </Modal>
      )}
    </>
  );
};

export default AdDetail;
