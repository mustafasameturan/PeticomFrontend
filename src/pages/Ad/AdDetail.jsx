import React, { useEffect, useState } from "react";
import '../../assets/css/resultdetail.css';
import { CatPhoto, Picture1, Picture2 } from "../../assets/img";
import { useNavigate, useParams } from "react-router-dom";
import { url } from "../../routes/Utility";
import useAuth from "../../hooks/useAuth";
import { PetIdentityModal } from "./components";
import { Modal } from "../../components/Modal";
import { GetAdById } from "../../services/AdService";
import { GetUserById } from "../../services/UserService";
import { Input, Button, Loading } from "../../components"

const AdDetail = () => {
 
  const navigate = useNavigate();
  const { adId } = useParams();

  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [adInformation, setAdInformation] = useState({});
  const [userInformation, setUserInformation] = useState({});

  const getAdById = async (adId) => {

    const response = await GetAdById(adId);

    if(response.statusCode === 200){
      setAdInformation(adInformation => response.data);
    }
  }

  const getUserById = async (userId) => {

    const response = await GetUserById(userId);
    console.log(response);
    if(response.statusCode === 200){
      setUserInformation(userInformation => response.data);
    }
  }

  console.log(userInformation);
  console.log(adInformation);

  useEffect(() => {
    if(adId){
      getAdById(adId);
    }
  }, [adId])

  useEffect(() => {
    if(Object.keys(adInformation).length > 0){
      getUserById(adInformation.userId);
    }
  }, [adInformation])

  return (
    <>
      <div className="container mx-auto">
        <div className="flex mt-8 mb-2 cursor-pointer items-center hover:text-orange" onClick={() => navigate(url("ad"))}>
          <span className="material-symbols-outlined ">
              arrow_back
          </span>
          <h1 className="my-auto text-xl">Önceki İlanlar</h1>
        </div>
        <div className="resultdetail mb-40">
          <div className="md:grid md:grid-cols-3 md:gap-4 p-5">
            <div className="col-span-1 md:mx-auto addetailleft ">
              <div className="p-5 grid grid-rows-3">
                <div className="row-span-2 text-center">
                <img
                  className="border-r-50 mx-auto !h-[200px] !w-[200px]"
                  src={userInformation.imageUrl}
                  alt=""
                />
              <h2 className="peticomer-name">{userInformation.fullName}</h2>
              <p className="text-lg">*Köpek Bakıcısı*</p>
                </div>
                <div className="row-span-1">
                  <div className="flex badges-detail justify-center mt-4">
                    {/* badges */}
                  </div>
                </div>
              </div>
              <img className="w-60 mx-auto" src="../assets/stars/5.svg" alt="" />
              <div className="flex badges-detail justify-center mt-4">
                <img className="badge" src="../assets/badges/cat.svg" alt="" />
                <img
                  className="badge"
                  src="../assets/badges/handshake-with-heart.svg"
                  alt=""
                />
                <img
                  className="badge"
                  src="../assets/badges/smiley-face.svg"
                  alt=""
                />
              </div>
             
            </div>

            <div className="col-span-2 grid grid-rows-4 gap-5">
              <div className="row-span-1">
                  <div className="text-center">
                    <h2 className="font-semibold text-xl">*Kendini Tanıtma Kısmı*</h2>
                    <p className="text-sm">
                    {adInformation.about}
                    </p>
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
                <div className="flex peticomer-pets-pic gap-4 justify-start">
                  <img src={CatPhoto} alt="" className="cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }} />
                  <img src={CatPhoto} alt="" className="cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }} />
                  <img src={CatPhoto} alt="" className="cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }} />
                  <img src={CatPhoto} alt="" className="cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }} />
                </div>
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
              <Button
                type="button"
                text="Rezervasyon Yap"
                classnames="mt-5 UserSettingsButton !w-36"
                loading={updateLoading}
                // action={() => {
                //   setUpdateLoading(updateLoading => true);
                //   updateUser();
                // }}
              />
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>


      {(Object.keys(modalContent).length !== 0) && (
        <Modal modal={modal} setModal={setModal} classes={ {modal: 'h-[90vh] max-w-[1140px]'} }>
            {modalContent.element === "identity" && <PetIdentityModal classes="!h-[80vh]" /> }
            
        </Modal>
      )}
    </>
  );
};

export default AdDetail;
