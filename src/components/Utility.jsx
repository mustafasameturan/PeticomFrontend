//Checkbox css'ini kontrol eden fonksiyon
export const handleCheckbox = (status) => {
    if (status) {
        return 'bg-green border border-green text-white'
    } else {
        return 'border border-black'
    }
}

export const validateEmail = mail => {
    if (mail === null || mail === '')
        return false;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return mail.match(mailFormat) ? true : false;
}

export const decodeToken = token => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}