import { apiRequest } from "./ApiRequest";

export const GetPeticomerBadgesByUserId = async (userId) => {
    const url = `/peticomerBadges/getPeticomerBadgeByUserId?userId=${userId}`;
    const method = 'GET';

    return await apiRequest(url, method);
}

export const AddPeticomerBadges = async (model) => {
    const url = "/peticomerBadges/add";
    const method = 'POST';
    const payload = {
        ...model
    }

    return await apiRequest(url, method, payload);    
}

export const UpdatePeticomerBadges = async (model) => {
    const url = "/peticomerBadges/update";
    const method = 'PUT';
    const payload = {
        ...model
    }

    return await apiRequest(url, method, payload);
}