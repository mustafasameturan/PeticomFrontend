import React, { useEffect } from 'react'
import { MainPagePicture, MainSearchBar } from "./components";
import { apiRequest } from '../../services/ApiRequest';
import { GetAds, GetAdsById } from '../../services/AdService';

const Home = () => {

  const getAds = async () => {
    const response = await GetAds();

    console.log(response);
  }

  const getAdsById = async () => {
    const response = await GetAdsById("52a2f0f2-81b5-4eed-a08e-3240d49cd745");

    console.log(response.data);
  }

  useEffect(() => {
    //getAds();

    getAdsById();
  }, [])

  return (
    <>
      <MainPagePicture />

      <MainSearchBar />
    </>
  )
}

export default Home