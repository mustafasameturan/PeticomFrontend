import { apiRequest } from "./ApiRequest";

export const CreateReservationService = async (model) => {

    const url = '/reservations/create';
    const method = 'POST';
    const payload = {
        ...model
    };
    
    return await apiRequest(url, method, payload);
}