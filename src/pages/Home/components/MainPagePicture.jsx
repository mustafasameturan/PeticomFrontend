import React from 'react'
import { MainPicture } from '../../../assets/img';
import "../../../assets/css/mainpagepic.css";

const MainPagePicture = () => {
  return (
    <div className='fixed pic'>
        <img src={MainPicture} className='mainpic'/>
    </div>
  )
}

export default MainPagePicture;