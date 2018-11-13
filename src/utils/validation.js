import { isWebUri } from 'valid-url';

export const requiredNumber = (number) => {
    const regex = RegExp('^\\d+(\\.\\d+)*$');
    if(regex.test(number) === false) {
        return 'Please enter a number';
    }
    return null;
};

class Validation {
    /**
     * Limit 0 to 100
     * @param {Integer} number
     * @return {String}
     */
    static validateLimitOfNumber = (number, begin = 0, end = 100, isRequired = true) => {
        if (Number(number) < begin || Number(number) > end
            || !Number.isInteger(Number(number)) || (number === '' && isRequired)) {
            return `Please enter a number ${ begin } to ${ end }`;
        }
        return requiredNumber(number);
    };
    static validateValueExist = (value) => {
        if (!value) {
            return 'Required';
        }
    }
    static validateMinLength = (value = '', minLength) => {
        if (value.length < minLength) {
            return `Enter at least ${ minLength } chars`;
        }
    }
    static validateUrl = (url) => {
        return !isWebUri(url) ? 'Invalid URL' : '';
    }
    static validateIsDecimal = (number, begin = 0, end = 100, decimalPlace, isRequired = true) => {
        if (number && number.indexOf('.') > -1) {
            const parts = number.split('.');
            if (parts[1].length > decimalPlace)
                return `Please enter valid integer or decimal number with ${ decimalPlace } decimal places`;
        }
        if (Number(number) < begin || Number(number) > end || (isRequired && number === '')) {
            return `Please enter a number ${ begin } to ${ end }`;
        }
        return requiredNumber(number);
    }
    /**
     * Check the root user has permission to edit the table
     * @param { User } currentUser
     * @param { Object } params
     * @return { Boolean }
     */
    static isUserCanEdit = (user, params) => {
        const { samName } = params;
        return samName === user.samName;
    }

    // Check IE browser
    static checkIEBrowser = () => {
        return /*@cc_on!@*/false || !!document.documentMode;
    }
}

export default Validation;
