import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { GetPetFullIdentitiesByUserId } from "../../services/PetIdentityService";
import { PetInformationComponent } from "./components";
import { Loading } from "../../components";

const PetInformations = () => {

    const { user } = useAuth();

    const [petIdentities, setPetIdentities] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPetIdentitiesByUserId = async (userId) => {

        const response = await GetPetFullIdentitiesByUserId(userId);

        if(response.statusCode === 200){
            setPetIdentities(petIdentities => response.data);
            setLoading(loading => false);
        }
    }

    useEffect(() => {
        if(user.UserId){
            getPetIdentitiesByUserId(user.UserId);
        }
    }, [])

    return (

        <div>
            <div className="border-b border-gray-200">
                <div className="p-8">
                    <h3 className="font-semibold text-xl"> PET BİLGİLERİ </h3>
                </div>
            </div>
            {loading ? (
                <div className="my-8">
                    <Loading />
                </div>
            ) : (
                <div>
                    <div className="settingrightsizes">
                        <div className="flex md:flex-row flex-col md:items-center items-start justify-around pb-4">

                            {petIdentities.length > 0 ? (
                                petIdentities.map((identity, index) => (
                                    <PetInformationComponent key={index} identity={identity}/>
                                ))
                            ) : (
                                <>
                                    <p>Herhangi bir kayıt bulunamadı!</p>
                                    <p>Pet eklemek için tıklayın!</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PetInformations