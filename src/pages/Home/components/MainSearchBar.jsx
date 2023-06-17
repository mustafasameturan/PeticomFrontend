import React, { useEffect, useState } from "react";
import "../../../assets/css/mainsearch.css";
import { Select } from "../../../components";
import { Cities } from "../../../components/Constants";
import { useNavigate } from "react-router-dom";
import { url } from "../../../routes/Utility";

const MainSearchBar = () => {

  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState(-1);

  useEffect(() => {
    localStorage.removeItem("filter");
  }, [])

  return (
    <div className="mainsearch md:p-16 relative md:mx-80 mx-auto ">
      <div className="main-upper-multi-button flex justify-between mx search">
        <div className="flex">
          <button 
            className={`major-button xl:block hidden cat ${selectedType === 0 ? 'border-2 border-orange bg-white text-orange' : 'hover:bg-[#f9a26c]'}`}
            onClick={() => setSelectedType(selectedType => 0)}
          >
            Kedi
          </button>
          <button 
            className={`major-button xl:block hidden ${selectedType === 1 ? 'border-2 border-orange bg-white text-orange' : 'hover:bg-[#f9a26c]'}`}
            onClick={() => setSelectedType(selectedType => 1)}>
            Köpek
          </button>
        </div>
        <div>
          <button className="major-button petlogger xl:block hidden hover:bg-[#f9a26c]" onClick={() => {navigate(url("auth.soon"))}}>Petlogger</button>
        </div>
      </div>
      <div className="search-selector flex  flex-col xl:flex-row ">
        <div className="dropdown city pd md:block hidden">
          <Select 
            options={Cities}
            selectedData={selectedCity}
            setSelectedData={setSelectedCity}
          />
        </div>
        <div className="searcharea mx-auto">
          <form action="search" method="get" className="flex ">
            <input className="md:ml-8" type="text" id="search" placeholder="Ara..." onChange={(e) => setSearchText(e.target.value)} />
            <button 
              type="submit" 
              className="searchbutton"
              onClick={() => { 
                navigate(url("ad"));
                localStorage.setItem("filter", JSON.stringify({ city: selectedCity, searchText: searchText, type: selectedType }))
              }}
            >
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSearchBar;
