import Request from './request';
import { API_BASE_URL, SERIAL, IS_DEV } from '../config.js';

const http = new Request();

http.setConfig((config) => {
    config.baseUrl = API_BASE_URL;
    return config
})
var token = uni.getStorageSync('USER_INFO').token;
http.interceptor.request((config, cancel) => {
    if (global.token || token) {
        config.header = {
            ...config.header,
            // 'token': global.token || token,
            // 'Accept-Language': global.locale ,
            // 'Accept-Serial': SERIAL,
            'Authorization': global.token || token,
        }
    } else {
        config.header = {
            ...config.header,
            // 'token': global.token || token,
            // 'Accept-Language': global.locale ,
            // 'Accept-Serial': SERIAL,
        }
    }

    if (IS_DEV == 2) {
        config.data = {
            ...config.data,
            ismock: 0,
        }
    }
    return config;
})

http.interceptor.response((response) => {
    return response;
})

export {
    http
};