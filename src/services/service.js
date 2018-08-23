import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://todos.loc/api/',
})
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default axios;