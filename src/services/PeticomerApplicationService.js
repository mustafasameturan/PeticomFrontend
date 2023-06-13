import { apiRequest } from "./ApiRequest";

export const CreateApplicationService = async (model) => {
    const url = '/peticomerApplications/createApplication';
    const method = 'POST';
    const payload = {
        ...model
    }
    
    return await apiRequest(url, method, payload);
}