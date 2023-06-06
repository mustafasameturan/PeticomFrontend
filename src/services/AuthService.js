import { apiRequest } from "./ApiRequest";

export const RegisterService = async (model) => {

    const url = '/users/register';
    const method = 'POST';
    const payload = {
        ...model
    };
        
    return await apiRequest(url, method, payload);
}

export const SendVerificationCode = async (userId) => {

    const url = `/users/sendVerificationCode/${userId}`;
    const method = 'POST';

    return await apiRequest(url, method);
}

export const VerificateEmailService = async (userId, verificationCode) => {

    const url = '/users/confirmVerificationCode';
    const method = 'POST';
    const payload = {
        userId: userId,
        verificationCode: verificationCode
    };

    return await apiRequest(url, method, payload);
}
