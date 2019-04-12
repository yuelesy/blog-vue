//#创建http.js文件
import axios from 'axios'
import router from '@/router'
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://localhost:3000/';
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers.authorization = localStorage.authorization;
        return config;
    },
    err => {
        return Promise.reject(err);
    });
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // 401 清除token信息并跳转到登录页面
        if (error.response.status == 401) {
            alert('您还没有登录，请先登录')
            localStorage.removeItem('authorization');
            localStorage.removeItem('isLogin');
            router.replace({
                name: 'login'
            })
        }
        return Promise.reject(error.response.data)
    });
export default axios;
