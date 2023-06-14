import React from "react";
import { ISOStringToDate2 } from "../../../../components/Utility";

const PetInformationModal = ({ identity }) => {

  console.log(identity);

  return (
    <div>
      <div className="border-b border-gray-200">
        <div className="p-8  text-center mx-20">
          {/* <h1 className='font-semibold text-xl'>*Pet Name*</h1>
        <h1 className='font-bold text-xl'>PET KİMLİĞİ</h1> */}
          <h1 className="font-bold text-xl">{identity.name} ({identity.type === 0 ? 'Kedi' : 'Köpek'})</h1>
        </div>
      </div>
      <div className="grid grid-rows-6 p-5">
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Türü:</h4>
          <h4 className="font-semibold text-lg">{identity.petBreed ? identity.petBreed : 'Belirtilmedi'}</h4>
        </div>
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Rengi:</h4>
          <h4 className="font-semibold text-lg">{identity.color}</h4>
        </div>
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Doğum Tarihi:</h4>
          <h4 className="font-semibold text-lg">{ISOStringToDate2(identity.birthDate)}</h4>
        </div>
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Cinsiyeti:</h4>
          <h4 className="font-semibold text-lg">{identity.gender === 0 ? 'Erkek' : 'Dişi'}</h4>
        </div>
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">
            Pet'in Yediği - Sevdiği Yemekler:
          </h4>
          <h4 className="font-semibold text-lg">{identity.food}</h4>
        </div>
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Son Muayne Tarihi:</h4>
          <h4 className="font-semibold text-lg">{ISOStringToDate2(identity.lastInsDate)}</h4>
        </div>
        {identity.petDiseases.length > 0 && (
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Hastalıklar:</h4>
          <h4 className="font-semibold text-lg">
            {identity.petDiseases.map((disease, index) => (
              <span key={index}>{disease.name}{index+1 === identity.petDiseases.length ? '' : ','}</span>
            ))}
          </h4>
        </div>
        )}
        {identity.petVaccines.length > 0 && (
        <div className="row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1">
          <h4 className="font-bold text-lg">Pet'in Aşıları:</h4>
          <h4 className="font-semibold text-lg">
            {identity.petVaccines.map((disease, index) => (
              <span key={index}>{disease.name} ({ISOStringToDate2(disease.vaccineDate)}){index+1 === identity.petVaccines.length ? '' : ','}</span>
            ))}
          </h4>
        </div>
        )}
      </div>
    </div>
  );
};

export default PetInformationModal;
