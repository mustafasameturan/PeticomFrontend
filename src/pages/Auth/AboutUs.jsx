import React from "react";
import { Footer } from "../../components";

const AboutUs = () => {

    return(
        <div>
            <div className="container mx-auto md:p-20 p-5 px-16 md:mx-auto md:mb-60" >
                <div className="border-b border-gray-200">
                    <h3 className="font-semibold text-xl">HAKKIMIZDA</h3>
                </div>
                <div className="p-5">
                    <p>PETICOM projesi fikri,Uni4Society Girişimcilik yarışmasında ortaya çıkmış ve geliştirilmiştir.Fikrimiz yarışmada birincilik kazanmıştır.
                        PETICOM firması olarak ilk hedefimiz,seyahat ederken evcil hayvanlarını emanet edebilecek bakıcılar arayan aileler 
                        ile Peticomer adını verdiğimiz evcil hayvan bakıcıları arasında köprü kurmaktır.
                    </p><br/>
                </div>
                <div className="border-b border-gray-200">
                    <h3 className="font-semibold text-xl">İLETİŞİM</h3>
                </div>
                    <div className="p-5">
                        <ul>
                            <li>Peticom Adres: Mebusevleri Ayten Sokak</li>
                            <li>Telefon: 444 2023</li>
                            <li>E-Posta: peticomcodebase@gmail.com</li>
                        </ul>
                    </div>  
            </div>  
            <Footer/>
        </div>
    )
}

export default AboutUs