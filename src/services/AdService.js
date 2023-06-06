import { apiRequest } from "./ApiRequest";

export const GetAds = async () => {

    const url = '/advertisements/getAll';
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const GetAdsById = async (id) => {

    const url = `/advertisements/getById?id=${id}`;
    const method = 'GET';

    return await apiRequest(url, method);
}