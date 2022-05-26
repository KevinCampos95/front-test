import axios from 'axios';
import { get } from 'lodash';
import { API_BASE_URL } from './AppConfig';

const service = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});

axios.interceptors.request.use(function (config) {
    const token = get(JSON.parse(localStorage.getItem('user')), 'token', '');
    config.headers.Authorization =  token;

    return config;
});

export default service;