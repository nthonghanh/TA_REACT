import fetch from 'isomorphic-fetch';
import CryptoJS from 'crypto-js';
import { Exception } from 'utils';
import configuration from '../config';

const config = configuration[ENV];
const basedUrl = config['API_URL'];
const credentials = config['AUTHORIZATION'] ? 'include' : 'omit';
const baseHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
const getUuidv4 = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};

const getHmacString = (data) => {
    const APP_ID = 'XCVgXE6+fA8wql7Es3DDJzZuxpOP1G9t';
    const SECRET_KEY = 'z8lzJFtnCzNL1M9UvuDD3DbzozZ7rNK9LcV3CEmBV56=';

    let bodyEncrypt = '';
    let bodyContent = '';
    if (data) {
        bodyContent = JSON.stringify(data);
        const cutBodyContent = bodyContent.substring(0, 128);
        const wordArray = CryptoJS.enc.Utf8.parse(cutBodyContent);
        bodyEncrypt = CryptoJS.enc.Base64.stringify(wordArray);
    }
    const unixTime = Math.round(new Date().getTime() / 1000.0);
    const uuid = getUuidv4();
    const encrypt = APP_ID + bodyEncrypt + uuid + unixTime;
    const signature = CryptoJS.HmacSHA256(encrypt, SECRET_KEY);
    const base64sign = CryptoJS.enc.Base64.stringify(signature);
    const author = APP_ID + ":" + base64sign + ":" + uuid + ":" + unixTime;
    return 'sign:' + author;
};

const addAuthorizeHeader = (headers) => {
    if (ENV === 'development') {
        const devUser = '4d9189ad-52f7-446e-82bd-e72b0f5d3618';
        const devController = '289d10cb-639b-43f3-9fc1-b232e5ae3371';
        // Add header name 'guid' in development mode
        const isController = config['CONTROLLER_USER'] || false;
        const guid = isController ? devController : devUser;
        headers.guid = guid;
    }
};
addAuthorizeHeader(baseHeaders);
const getUrl = (url) => `${ basedUrl }/${ url }`;
const createRequest = (method, url, requestHeaders = {}, data) => {
    const headers = Object.assign({}, baseHeaders, { hmac: getHmacString(data) }, requestHeaders);
    const options = { headers, method, credentials };
    if (data) {
        options.body = JSON.stringify(data);
    }
    const apiUrl = getUrl(url);
    return new Request(apiUrl, options);
};
const responseHandler = async(response) => {
    if (response.ok) {
        const jsonData = await response.json();
        if (!jsonData.success && jsonData.error) {
            const error = new Error();
            error.message = jsonData.error.message;
            error.code = jsonData.error.code;
            throw error;
        }
        return jsonData.payload;
    } else {
        const error = new Error();
        error.message = response.statusText;
        error.code = response.status;
        throw error;
    }
};

class ApiClient {
    static getUrl = getUrl;
    static getData = async(url, headers) => {
        const request = createRequest('GET', url, headers);
        const result = await fetch(request)
            .then(responseHandler)
            .catch(e => { throw new Exception(Exception.TYPES.API, e.message, e.code); });
        return result;
    }
    static postData = async(url, headers, data) => {
        const request = createRequest('POST', url, headers, data);
        const result = await fetch(request)
            .then(responseHandler)
            .catch(e => { throw new Exception(Exception.TYPES.API, e.message, e.code); });
        return result;
    }
    static putData = async(url, headers, data) => {
        const request = createRequest('PUT', url, headers, data);
        const result = await fetch(request)
            .then(responseHandler)
            .catch(e => { throw new Exception(Exception.TYPES.API, e.message, e.code); });
        return result;
    }
    static deleteData = async(url, headers, data) => {
        const request = createRequest('DELETE', url, headers, data);
        const result = await fetch(request)
            .then(responseHandler)
            .catch(e => { throw new Exception(Exception.TYPES.API, e.message, e.code); });
        return result;
    }
    static sendData = async(url, data, method = 'POST', headers = {}) => {
        const headerData = Object.assign({ hmac: getHmacString(data) }, headers);
        addAuthorizeHeader(headerData);
        const apiUrl = getUrl(url);
        const options = { body: data, headers: headerData, method, credentials };
        const request = new Request(apiUrl, options);
        const result = await fetch(request)
            .then(responseHandler)
            .catch(e => { throw new Exception(Exception.TYPES.API, e.message, e.code); });
        return result;
    }
}

export default ApiClient;
