import React, { useEffect, useState } from "react";
import { handleCheckbox } from "../../components/Utility";
import classNames from "classnames";
import { Input, Button } from "../../components";
import useAuth from "../../hooks/useAuth";
import { GetPeticomerBadgesByUserId } from "../../services/PeticomerService";
import { AddPeticomerBadges, UpdatePeticomerBadges } from "../../services/PeticomerBadgesService";
import { ToastError, ToastInfo, ToastSuccess } from "../../components/Toastr";
import { IsPeticomerHavePetService } from "../../services/PetIdentityService";

const BadgeSelector = () => {

  const { user } = useAuth();

  const [nonCigaratte, setNonCigaratte] = useState(false);
  const [carOwner, setCarOwner] = useState(false);
  const [petOwner, setPetOwner] = useState(false);
  const [garden, setGarden] = useState(false);
  const [carDistance, setCarDistance] = useState(0);
  const [badgeInformations, setBadgeInformations] = useState({});
  const [isBadgeCreated, setIsBadgeCreated] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [isPeticomerHavePetState, setIsPeticomerHavePetState] = useState(false);


  const getPeticomerBadgesByUserId = async (userId) => {

    const result = await GetPeticomerBadgesByUserId(userId);

    if(result.statusCode === 200){
      setBadgeInformations(badgeInformations => result.data[0]);
    }
  }

  const isPeticomerHavePet = async (userId) => {

    const result = await IsPeticomerHavePetService(userId);

    if(result.statusCode === 200){
      setIsPeticomerHavePetState(isPeticomerHavePetState => result.data);
    }
  }

  const addPeticomerBadges = async () => {

    let valid = true;

    if(carOwner && (carDistance.length === 0 || carDistance === 0)){
      valid = false;
      ToastInfo("Lütfen tüm bilgileri eksiksiz giriniz!");
    }
    if(petOwner && !isPeticomerHavePetState){
      valid = false;
      ToastInfo("'Pet Sahibiyim' rozetini işaretlemeden önce sisteme pet bilgilerinizi kaydetmeniz gerekmektedir!")
    }

    if(valid){
      let model = {
        userId: user.UserId,
        cigaret: nonCigaratte,
        car: carOwner,
        carDistance: carOwner ? +carDistance : null,
        pet: petOwner,
        garden: garden
      };
      console.log(model);
      const result = await (isBadgeCreated ? UpdatePeticomerBadges(model) : AddPeticomerBadges(model));
      console.log(result);
      if(result.statusCode === 200){
        setLoading(loading => false);
        ToastSuccess(isBadgeCreated ? "Rozetler başarıyla güncellendi!" : "Rozetler başarıyla oluşturuldu!");
      } else {
        ToastError("İşlem sırasında bir hata oluştu!");
      }
    } 

    setLoading(loading => false);
  }

  useEffect(() => {
    if(user.UserId){
      getPeticomerBadgesByUserId(user.UserId);
      isPeticomerHavePet(user.UserId);
    }
  }, [])

  useEffect(() => {
    if(Object.keys(badgeInformations).length > 0){
      setIsBadgeCreated(isBadgeCreated => true);
      setNonCigaratte(nonCigaratte => badgeInformations.cigaret);
      setCarOwner(carOwner => badgeInformations.car);
      setCarDistance(carDistance => badgeInformations.carDistance);
      setPetOwner(petOwner => badgeInformations.pet);
      setGarden(garden => badgeInformations.garden);
    }
  }, [badgeInformations])
  
  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="p-8">
          <p className="font-semibold text-xl">BADGE EKLE</p>
        </div>
      </div>
      <div className="settingrightsizes">
        <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
          <label
            htmlFor="noncigaratte"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Sigara Kullanmıyor
          </label>
          <input
            id="noncigaratte"
            type="checkbox"
            className="hidden peer"
            value={nonCigaratte}
            onChange={() => setNonCigaratte(!nonCigaratte)}
          />
          <label
            htmlFor="noncigaratte"
            className={`${handleCheckbox(
              nonCigaratte
            )} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
          >
            <span
              className={classNames(
                "text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold",
                { hidden: !nonCigaratte }
              )}
            >
              done
            </span>
          </label>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
          <label
            htmlFor="petowner"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Pet Sahibi
          </label>
          <input
            id="petowner"
            type="checkbox"
            className="hidden peer"
            value={petOwner}
            onChange={() => setPetOwner(!petOwner)}
          />
          <label
            htmlFor="petowner"
            className={`${handleCheckbox(
              petOwner
            )} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
          >
            <span
              className={classNames(
                "text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold",
                { hidden: !petOwner }
              )}
            >
              done
            </span>
          </label>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
          <label
            htmlFor="garden"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Bahçe Sahibi
          </label>
          <input
            id="garden"
            type="checkbox"
            className="hidden peer"
            value={garden}
            onChange={() => setGarden(!garden)}
          />
          <label
            htmlFor="garden"
            className={`${handleCheckbox(
              garden
            )} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
          >
            <span
              className={classNames(
                "text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold",
                { hidden: !garden }
              )}
            >
              done
            </span>
          </label>
        </div>
        <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
          <label
            htmlFor="carowner"
            className="mr-[218px] mb-1 text-lg font-medium"
          >
            Araç Sahibi
          </label>
          <input
            id="carowner"
            type="checkbox"
            className="hidden peer"
            value={carOwner}
            onChange={() => setCarOwner(!carOwner)}
          />
          <label
            htmlFor="carowner"
            className={`${handleCheckbox(
              carOwner
            )} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
          >
            <span
              className={classNames(
                "text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold",
                { hidden: !carOwner }
              )}
            >
              done
            </span>
          </label>
        </div>
        {carOwner && (
          <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
            <label
              htmlFor="cardistance"
              className="mr-[218px] mb-1 text-lg font-medium"
            >
              Araç Mesafesi <span className="text-red-500">*</span>
            </label>
            <Input
              id="cardistance"
              placeholder="Araçla Gidebileceğiniz Mesafe (KM)"
              type="number"
              value={carDistance}
              setState={setCarDistance}
            />
          </div>
        )}
        <div className="text-center mb-5">
          <Button
            type="submit"
            text={!isBadgeCreated ? 'Rozet Ekle' : 'Rozet Güncelle'}
            loading={loading}
            classnames="mt-5 UserSettingsButton !w-36"
            action={() => {
              setLoading((loading) => true);
              addPeticomerBadges();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BadgeSelector;
