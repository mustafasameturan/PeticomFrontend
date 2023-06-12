import { apiRequest } from "./ApiRequest";

export const GetUserById = async (userId) => {

    const url = `/users/getByUserId?userId=${userId}`;
    const method = 'GET';
    
    return await apiRequest(url, method);
}

export const UpdateUser = async (model) => {

    const url = "/users/updateUser";
    const method = 'POST';
    const payload = {
        ...model
    }

    return await apiRequest(url, method, payload);
}