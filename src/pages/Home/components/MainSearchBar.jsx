import React, { useState } from "react";
import "../../../assets/css/mainsearch.css";
import { Select } from "../../../components";

const MainSearchBar = () => {

  const staticCities = [
    { id: 6, name: "Ankara" },
    { id: 35, name: "İzmir" },
    { id: 16, name: "Bursa" },
    { id: 34, name: "İstanbul" }
  ];

  const [selectedCity, setSelectedCity] = useState(0);

  return (
    <div className="mainsearch relative">
      <div className="main-upper-multi-button flex justify-between search">
        <div>
          <button className="major-button cat">Kedi</button>
          <button className="major-button">Köpek</button>
        </div>
        <div>
          <button className="major-button petlogger">Petlogger</button>
        </div>
      </div>
      <div className="search-selector flex  ">
        <div className="dropdown city pd">
          <Select 
            options={staticCities}
            selectedData={selectedCity}
            setSelectedData={setSelectedCity}
          />
        </div>
        <div className="searcharea">
          <form action="search" method="get">
            <input type="text" id="search" placeholder="Adresiniz girin..." />
            <button type="submit" className="searchbutton">
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSearchBar;
