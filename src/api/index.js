import axios from 'axios';

const API_URL = 'https://api.example.com'; // 替换为你的API地址

// 创建一个axios实例
const instance = axios.create({
    baseURL: API_URL,
    timeout: 5000, // 设置超时时间
    headers: {
        'Content-Type': 'application/json',
        // 可以在这里添加其他公共头部信息
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 封装获取用户信息的方法
// export const getUserInfo = () => instance.get('/user');

// 封装登录方法
// export const login = (username, password) => instance.post('/login', { username, password });