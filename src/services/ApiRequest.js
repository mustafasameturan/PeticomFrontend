import axios from "axios"

export const apiRequest = (endpoint, method, payload = null) => {
    return axios({
        url: `${process.env.REACT_APP_API_URL}${endpoint}`,
        method,
        data: payload,
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.REACT_APP_API_KEY
        }
    })
    .then(response => response.data)
    .catch(error => {
        
    });
};