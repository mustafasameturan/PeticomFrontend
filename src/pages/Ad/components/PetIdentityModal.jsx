import React from 'react'

const PetIdentityModal = () => {
  return (
    <div>
      <div className='border-b border-gray-200'>
        <div className='p-8  text-center mx-20'>

          {/* <h1 className='font-semibold text-xl'>*Pet Name*</h1>
          <h1 className='font-bold text-xl'>PET KİMLİĞİ</h1> */}
          <h1 className='font-bold text-xl'>*PetName*</h1>
        </div>
      </div>
      <div className='grid grid-rows-6 p-5'>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Rengi:</h2>
          <h2 className='font-semibold text-lg'>*PetColor*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Türü:</h2>
          <h2 className='font-semibold text-lg'>*PetType*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Doğum Tarihi:</h2>
          <h2 className='font-semibold text-lg'>*PetBDay*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Cinsiyeti:</h2>
          <h2 className='font-semibold text-lg'>*PetGender*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Yediği - Sevdiği Yemekler:</h2>
          <h2 className='font-semibold text-lg'>*PetFood*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Son Muayne Tarihi:</h2>
          <h2 className='font-semibold text-lg'>*PetLastIntDate*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Hastalıklar:</h2>
          <h2 className='font-semibold text-lg'>*PetDisease*</h2>
        </div>
        <div className='row-span-1 flex flex-row p-7 border-b border-gray-200 gap-1'>
          <h2 className='font-bold text-lg'>Pet'in Aşıları:</h2>
          <h2 className='font-semibold text-lg'>*PetVaccine*</h2>
        </div>
      </div>
    </div>
  )
}

export default PetIdentityModal