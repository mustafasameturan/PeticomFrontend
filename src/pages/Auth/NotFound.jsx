import React, { useState } from 'react';
import { NotFoundPic} from '../../assets/img';

const  NotFound = () => {

    return(
        <div>
            <div className='flex flex-col items-center my-16'>
                <h1 className='font-semibold text-3xl'>SAYFA BULUNAMADI</h1>
                <img className='w-1/3' src={NotFoundPic} alt="" />

            </div>
        </div>
    )
}

export default NotFound