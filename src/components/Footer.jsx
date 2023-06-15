import React, { useState} from "react";
import { Instagram, PeticomLogo } from "../assets/svg";

const Footer = () => {

    return(

        <div className="relative mt-auto">
            <div className="bg-[#ff9e66] bottom-0">
                <div className="container mx-auto">
                    <div className="grid grid-rows-2 ">
                    <div className="row-span-1 border-b border-gray-200">
                        <div className="grid grid-cols-3 my-3">
                            <div className="col-span-1">
                                <div className="brand ">
                                    <img src={PeticomLogo} alt="" className="h-16 mx-auto"/>
                                </div>
                            </div>
                            <div className="col-span-1 mx-auto my-auto">
                                <h2 className="font-semibold md:text-xl text-sm text-center text-white">Petleriniz İçin Güvenli Adres</h2>
                            </div>
                            <div className="col-span-1 mx-auto my-auto">
                                <a href="https://www.instagram.com/peticom.tr/" target="_blank">
                                <div>
                                    <img src={Instagram}  alt="" className="h-8"  />
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 mx-auto my-auto">
                        <div>
                            <h1 className="font-semibold md:text-lg text-sm text-white">2022 - Copyright - All Rights Reserved</h1>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Footer