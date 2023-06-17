import React, { useState } from 'react';
import { NotFoundPic} from '../../assets/img';
import { useNavigate } from 'react-router-dom';
import { url } from '../../routes/Utility';

const  NotFound = () => {

    const navigate = useNavigate();

    return(
        <div>
            <div className='flex flex-col items-center my-16'>
                <h1 className='font-semibold text-3xl'>SAYFA BULUNAMADI</h1>
                <img className='w-1/3' src={NotFoundPic} alt="" />
                <p 
                    className='text-2xl -mt-4 hover:text-orange cursor-pointer'
                    onClick={() => navigate(url("home"))}
                >
                    Ana Sayfaya Dön
                </p>
            </div>
        </div>
    )
}

export default NotFound