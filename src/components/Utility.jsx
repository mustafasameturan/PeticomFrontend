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

//girilen değerin number olup olmadığını kontrol eden fonksiyon
export const checkNumber = e => {

    let keypressed = e.keyCode;

    if ((keypressed >= 48 && keypressed <= 57) ||
        (keypressed >= 96 && keypressed <= 105)
        || keypressed === 8
        || keypressed === 27
        || keypressed === 46
        || keypressed === 9
        || (keypressed >= 35 && keypressed <= 40)) {
        return true;
    }

    return false;
}

//ISO Formatlı datetime içerikleri formatlamak için kullanılıyor. TimeZone ihtiyacı duyulmuyor
export const ISOStringToDate2 = date => {
    let tmpDate = new Date(date);
    let returnDate = ("0" + tmpDate.getDate()).slice(-2) + "." + ("0" + (tmpDate.getMonth() + 1)).slice(-2) + '.' + tmpDate.getFullYear()
    return returnDate
}

export const calculateDateDiff = (startDate, endDate) => {
    const oneDayMilliseconds = 24 * 60 * 60 * 1000; // Value of one day in milliseconds
  
    // Convert the start and end dates to Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Calculate the number of days between the two dates
    const days = Math.round(Math.abs((end - start) / oneDayMilliseconds));
  
    return days;
}

export const formatCurrency = (price) => {
    const floatPrice = parseFloat(price);
    const formattedAmount = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
        minimumFractionDigits: 2,
    }).format(floatPrice);
    return formattedAmount;
}