import React, { useEffect, useState } from "react";
import { calculateDateDiff, checkNumber, formatCurrency } from "../../../components/Utility";
import { Button, Input } from "../../../components";
import { ToastError, ToastInfo, ToastSuccess } from "../../../components/Toastr";
import useAuth from "../../../hooks/useAuth";
import { CreateReservationService } from "../../../services/ReservationService";

const ReservationModal = ({ adId, peticomerId, price, closeButton }) => {

  const { user } = useAuth();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [readableTotalPrice, setReadableTotalPrice] = useState("");
  const [description, setDescription] = useState(0);

  const [loading, setLoading] = useState(false);

  const createReservation = async () => {
    let valid = true;

    if(startDate === null){
      valid = false;
    }
    if(endDate === null){
      valid = false;
    }
    if(description.length === 0){
      valid = false;
    }

    if(valid){

      let model = {
        userId: user.UserId,
        peticomerId: peticomerId,
        adId: adId,
        beginTime: startDate,
        endTime: endDate,
        totalPrice: calculateDateDiff(startDate, endDate) * price,
        description: description
      }

      const result = await CreateReservationService(model);

      if(result.statusCode === 200){
        ToastSuccess("Rezervasyon başarıyla oluşturuldu! E-Posta yoluyla bilgilendirileceksiniz!");
        setTimeout(() => closeButton(), 2000);
      } else {
        ToastError("Rezervasyon oluşturulurken bir hata oluştu!");
      }

    } else {
      ToastInfo("Lütfen tüm bilgileri eksiksiz giriniz!");
    }

    setLoading(loading => false);
  }

  useEffect(() => {
    if(startDate !== null && endDate !== null){
      setReadableTotalPrice(readableTotalPrice => formatCurrency(calculateDateDiff(startDate, endDate) * price))
    }
  }, [startDate, endDate])
  
  return (
    <>
      <div className="border-b border-gray-200">
        <h1 className="text-semibold text-xl p-2 text-center">
          Rezervasyon Yap
        </h1>
      </div>

      <div className="p-2">
        <div className="flex md:flex-col flex-col md:items-center items-start justify-between px-[10px] pb-4">
          <label htmlFor="start-date" className="mr-[155px] mb-1 text-lg font-medium">
            Başlangıç Tarihi <span className="text-red-500">*</span>
          </label>
          <Input
            id="start-date"
            type="date"
            setState={setStartDate}
          />
        </div>
        <div className="flex md:flex-col flex-col md:items-center items-start justify-between px-[10px] pb-4">
          <label
            htmlFor="end-date"
            className="mr-[195px] mb-1 text-lg font-medium"
          >
            Bitiş Tarihi <span className="text-red-500">*</span>
          </label>
          <Input
            id="end-date"
            type="date"
            setState={setEndDate}
          />
        </div>
        <div className="flex md:flex-col flex-col md:items-center items-start justify-between px-[10px] pb-4">
          <label
            htmlFor="total-price"
            className="mr-[180px] mb-1 text-lg font-medium "
          >
            Toplam Fiyat
          </label>
          <Input
            id="total-price"
            isDisabled={true}
            type="text"
            value={readableTotalPrice}
          />
        </div>
        <div className="flex md:flex-col flex-col md:items-center items-start justify-between px-[10px] pb-4">
          <label
            htmlFor="description"
            className="mr-[210px] mb-1 text-lg font-medium"
          >
            Açıklama <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            placeholder="Rezervasyon Hakkında"
            type="text"
            className="rounded-lg w-[320px] h-24 outline-none pl-4 pt-1 placeholder:text-lg border border-gray-200"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="text-center mb-5">
          <Button
            type="button"
            text="Rezervasyon Yap"
            classnames="mt-5 UserSettingsButton !w-40"
            loading={loading}
            action={() => { 
              setLoading(loading => true);
              createReservation();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ReservationModal;
