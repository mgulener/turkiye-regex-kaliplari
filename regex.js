// Cep Telefonu Numarası
function mobilePhoneRegEx(val) {
    return /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/.test(val);
    /*
    05231231212
    0523 123 12 12
    */
}

// Sabit Telefon Numarası
function phoneRegEx(val) {
    return /^(0)([0-9]{3})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/.test(val);
    /*
    01231231212
    0123 123 12 12
    */
}

// TC Kimlik No
function IdNumberRegEx(val) {
    return /^[1-9]{1}[0-9]{9}[02468]{1}$/.test(val);
    /*
    12345678901
    */
}

// Vergi No
function taxNoRegEx(val) {
    return /^[0-9]{10}$/.test(val);
    /*
    1234567890
    */
}

// Kredi Kartı No
function creditCardRegEx(val) {
    return /^([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})\s?([0-9]{4})$/.test(val);
    /*
    1111222233334444
    1111 2222 3333 4444
    */
}

// Araç Plaka
function carPlateRegEx(val) {
    return /^(0[1-9]|[1-7][0-9]|8[01])(([A-Z])(\d{4,5})|([A-Z]{2})(\d{3,4})|([A-Z]{3})(\d{2,3}))$/.test(val);
    /*
    34A2344
    36A23415
    06BK123
    08JK1234
    81ABC75
    */
}

// Doğum Tarihi
function birthdayRegEx(val) {
    return /^([1-9]|[12][0-9]|3[01])(|\/|\.|\-|\s)?(0[1-9]|1[12])\2(19[0-9]{2}|200[0-9]|201[0-8])$/.test(val);
    /*
    13.08.1987
    13081987
    13/08/1987
    13-08-1987
    13 08 1987
    */
}

/* Button Clicks */
var clicks = function (button, input, regex) {
    document.querySelector(button).onclick = function () {
        if (regex(document.querySelector(input).value)) {
            document.querySelector(button).nextElementSibling.innerHTML = "Başarılı";
        } else {
            document.querySelector(button).nextElementSibling.innerHTML = "Başarısız";
        }
    }
}

window.onload = function () {
    clicks("#btnMobilePhone", "#txtMobilePhone", mobilePhoneRegEx);
    clicks("#btnPhone", "#txtPhone", phoneRegEx);
    clicks("#btnIDNumber", "#txtIDNumber", IdNumberRegEx);
    clicks("#btnTaxNumber", "#txtTaxNumber", taxNoRegEx);
    clicks("#btnCreditCardNumber", "#txtCreditCardNumber", creditCardRegEx);
    clicks("#btnCarPlate", "#txtCarPlate", carPlateRegEx);
    clicks("#btnBirthday", "#txtBirthday", birthdayRegEx);
}
