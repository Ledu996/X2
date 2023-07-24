export function emailValidation (email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
}

export function isEmpty (value) { // return a boolean value
    return !value.trim().length ? true : false;
}