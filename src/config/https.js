import axios from 'axios';
import { get } from 'lodash';
import { API_BASE_URL } from './AppConfig';

const service = axios.create({
    baseURL: API_BASE_URL,
    timeout: 60000
});

service.interceptors.request.use(function (config) {
    const tokenString = localStorage.getItem("user") || '{}';
    const token = get(JSON.parse(tokenString), 'token', '');
    config.headers.Authorization =  token;

    return config;
});

export default service;