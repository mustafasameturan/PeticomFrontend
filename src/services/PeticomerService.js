import { apiRequest } from "./ApiRequest";

export const GetPeticomerBadgesByUserId = async (userId) => {

    const url = `/peticomerBadges/getPeticomerBadgeByUserId?userId=${userId}`;
    const method = 'GET';
    
    return await apiRequest(url, method);
}