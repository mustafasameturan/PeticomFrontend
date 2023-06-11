import React, { useEffect } from 'react'
import { MainPagePicture, MainSearchBar, FAQ } from "./components";

const Home = () => {

  return (
    <>
      <MainPagePicture />

      <MainSearchBar />
      
      <FAQ/>
    </>
  )
}

export default Home