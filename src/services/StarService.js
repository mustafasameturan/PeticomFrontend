import { apiRequest } from "./ApiRequest";

export const GetStarByUserIdAndAdId = async (userId, adId) => {

    const url = `/stars/getStarsByUserIdAndAdId?userId=${userId}&adId=${adId}`;
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const CalculateStarAverageByAdId = async (adId) => {

    const url = `/stars/calculateStarAverageByAdId?adId=${adId}`;
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const AddStar = async (model) => {

    const url = `/stars/add`;
    const method = 'POST';
    const payload = {
        ...model
    };
    
    return await apiRequest(url, method, payload);
}