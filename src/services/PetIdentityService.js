import { apiRequest } from "./ApiRequest";

export const CreatePetIdentityService = async (model) => {
    const url = '/petIdentities/add';
    const method = 'POST';
    const payload = {
        ...model
    }
    
    return await apiRequest(url, method, payload);
}

export const GetFullPetIdentityByUserIdService = async (userId) => {
    const url = `/petIdentities/getFullIdentityByUserId?userId=${userId}`;
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const GetPetFullIdentitiesByUserId = async (userId) => {
    const url = `/petIdentities/getFullIdentityByUserId?userId=${userId}`
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const GetPetIdentitiesSelectListByUserIdService = async (userId) => {
    const url = `/petIdentities/petIdentitiesSelectListByUserId?userId=${userId}`
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const CreatePetVaccine = async (model) => {
    const url = '/petVaccines/add';
    const method = 'POST';
    const payload = {
        ...model
    }
    
    return await apiRequest(url, method, payload);
}

export const CreatePetDisease = async (model) => {
    const url = '/petDiseases/add';
    const method = 'POST';
    const payload = {
        ...model
    };

    return await apiRequest(url, method, payload);
}