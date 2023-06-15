import React, { useState } from "react";
import { handleCheckbox } from "../../components/Utility";
import classNames from "classnames";
import { Input, Button } from "../../components";

const BadgeSelector = () => {

    const [NonCigaratte, setNonCigaratte] = useState(false);
    const [carOwner, setCarOwner] = useState(false);
    const [petOwner, setPetOwner] = useState(false);
    const [garden, setGarden] = useState(false);
    const [carDistance, setCarDistance] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <div>
            <div className="border-b border-gray-200">
                <p className="p-8">
                    <h3 className="font-semibold text-xl">BADGE EKLE</h3>
                </p>
            </div>
            <div className="settingrightsizes">
                <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
                        <label
                            htmlFor="noncigaratte"
                            className="mr-[218px] mb-1 text-lg font-medium"
                        >
                        Sigara Kullanmıyor
                        </label>
                        <input
                      id="noncigaratte"
                      type="checkbox"
                      className="hidden peer"
                      onChange={() => setNonCigaratte(!NonCigaratte)}
                    />
                    <label
                      htmlFor="noncigaratte" 
                      className={`${handleCheckbox(NonCigaratte)} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                    >
                      <span className={classNames('text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden' : !NonCigaratte})}>
                        done
                      </span>
                    </label>
                    
                </div>
                <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
                        <label
                            htmlFor="petowner"
                            className="mr-[218px] mb-1 text-lg font-medium"
                        >
                        Pet Sahibi
                        </label>
                        <input
                      id="petowner"
                      type="checkbox"
                      className="hidden peer"
                      onChange={() => setPetOwner(!petOwner)}
                    />
                    <label
                      htmlFor="petowner" 
                      className={`${handleCheckbox(petOwner)} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                    >
                      <span className={classNames('text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden' : !petOwner})}>
                        done
                      </span>
                    </label>
                    
                </div>
                <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
                        <label
                            htmlFor="garden"
                            className="mr-[218px] mb-1 text-lg font-medium"
                        >
                        Bahçe Sahibi
                        </label>
                        <input
                      id="garden"
                      type="checkbox"
                      className="hidden peer"
                      onChange={() => setGarden(!garden)}
                    />
                    <label
                      htmlFor="garden" 
                      className={`${handleCheckbox(garden)} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                    >
                      <span className={classNames('text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden' : !garden})}>
                        done
                      </span>
                    </label>
                    
                </div>
                <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
                        <label
                            htmlFor="carowner"
                            className="mr-[218px] mb-1 text-lg font-medium"
                        >
                        Araç Sahibi
                        </label>
                        <input
                      id="carowner"
                      type="checkbox"
                      className="hidden peer"
                      onChange={() => setCarOwner(!carOwner)}
                    />
                    <label
                      htmlFor="carowner" 
                      className={`${handleCheckbox(carOwner)} mr-2 w-5 h-5 flex-shrink-0 rounded-[3px] cursor-pointer duration-500 flex items-center justify-center`}
                    >
                      <span className={classNames('text-inherit text-[20px] material-symbols-outlined animate-fadeIn font-bold', { 'hidden' : !carOwner})}>
                        done
                      </span>
                    </label>
                    
                </div>
                <div className="flex md:flex-row flex-col md:justify-between items-start justify-around pb-4">
                    <label
                        htmlFor="cardistance"
                        className="mr-[218px] mb-1 text-lg font-medium"
                    >
                        Araç Mesafesi
                    </label>
                    <Input
                        id="cardistance"
                        placeholder="Araçla Gidebileceğiniz Mesafe (KM)"
                        type="number"
                        setState={setCarDistance}
                    />
                </div>
                <div className="text-center mb-5">
                    <Button
                        type="submit"
                        text="Badge Ekle"
                        loading={loading}
                        classnames="mt-5 UserSettingsButton"
                        action={() => {
                            setLoading(loading => true);
                            // createBadgeIdentity();
                        }}
                    />
                </div>
            </div>
            
        </div>
    )

    
}

export default BadgeSelector