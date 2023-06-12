import { apiRequest } from "./ApiRequest";

export const UpdatePasswordService = async (model) => {
    const url = '/users/updatePassword';
    const method = 'POST';
    const payload = {
        ...model
    };

    return await apiRequest(url, method, payload);
}

export const ResetPasswordService = async (model) => {
    const url = '/users/resetPassword';
    const method = 'POST';
    const payload = {
        ...model
    };

    return await apiRequest(url, method, payload);
}

export const SendVerificationCodeForResetPassword = async (email) => {
    const url = '/users/sendVerificationCodeForResetPassword';
    const method = 'POST';
    const payload = email;

    return await apiRequest(url, method, email);
}

export const ConfirmVerificationCodeForResetPassword = async (model) => {
    const url = '/users/confirmVerificationCodeForResetPassword';
    const method = 'POST';
    const payload = {
        ...model
    };

    return await apiRequest(url, method, payload);
}