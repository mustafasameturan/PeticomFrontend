import React from 'react'
import "../../assets/css/searchresults.css"
import { Cat, Dog, Handshake, NoneDog, SmokeFree } from '../../assets/svg'
import { useNavigate } from 'react-router-dom'
import { url } from '../../routes/Utility'

const Ad = () => {
  
  const navigate = useNavigate();

  return (
    <div className="container mx-auto grid grid-cols-1 gap-12 mt-16">
        <div id="filterside" className="grid grid-cols-2 justify-between mx-9">
            <h3 className="result-text">Arama Sonuçları</h3>
            <div className="text-end my-auto">
                <select className="search-filter" name="search-filter">
                    <option value="111">En iyi sonuçlar</option>
                    <option value="112">Yeni Peticomerlar</option>
                    <option value="113">Adresime yakın olanlar</option>
                    </select>
            </div>
        </div>
        <div className="resultbox grid grid-cols-3 gap-10 mx-9">
            <div className="img-side ml-10 my-auto">
                <img src="https://i.pravatar.cc/300" className="ml-10"alt="Profil fotoğrafı" />
            </div>
            <div className="peticomer-name ">
                <h2>*Peticomer Name*</h2>
                <p>*Why you see this profile up?*</p>
                <div className="badges flex gap-5 ml-20 mt-7">
                    {/* <!-- Başlangıçta bütün badgeler hidden olacak fakat kişi o badge ye sahipse dblock classNameı eklenecek
                    böylece bagde svg görünecek --> */}
                    <div className='group relative'>
                      <img className="dblock" src={SmokeFree} alt="Sigara Kullanmıyor" />  
                      <div className="tooltip-top">
                        <p className=''>deneme</p>
                      </div>
                    </div>                    
                    <img className="dblock" src={Handshake} alt="Sevilen Ev Sahibi" />
                    <img className="dblock" src={Cat} alt="Kedi Sahibi" />
                    <img className="hidden dblock" src={NoneDog} alt="Köpek Bakamaz" />
                    <img className="" src={Dog} alt="Köpek Bakamaz" />
                </div>
            </div>
            <div className="peticomer-star flex flex-col justify-between">
              {/* Yıldız eklenecek */}
              <img className="stars mt-4 mx-auto" alt="" />
              <div className="text-end mx-auto peticomer-more-button-div">
                <button 
                  type="submit" 
                  className="peticomer-more-button bg-orange hover:bg-orange-hover"
                  onClick={() => navigate(url("home.detail"))}
                >
                  Detaylı İnceleme
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ad