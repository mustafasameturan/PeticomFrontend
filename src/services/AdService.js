import { apiRequest } from "./ApiRequest";

export const GetAds = async () => {

    const url = '/advertisements/getAll';
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const GetAdById = async (id) => {

    const url = `/advertisements/getById?id=${id}`;
    const method = 'GET';

    return await apiRequest(url, method);
}

export const GetAdsByFilter = async (model) => {
    const url = '/advertisements/getAdsByFilter';
    const method = 'POST';
    const payload = {
        ...model
    };

    return await apiRequest(url, method, payload);
}

