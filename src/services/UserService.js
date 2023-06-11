import { apiRequest } from "./ApiRequest";

export const GetUserById = async (userId) => {

    const url = `/users/getByUserId?userId=${userId}`;
    const method = 'GET';
    
    return await apiRequest(url, method);
}