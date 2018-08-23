import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://todos.loc/api/',
  })
  
export default {
    register(email, password, name) {
        return axios.post('users', {email, password, name},
                            {headers: {'X-Requested-With': 'XMLHttpRequest'}});
    },

    login(email, password) {
        return axios.post('login', {email, password});
    },

    logout() {
        localStorage.setItem('jwt', undefined);
    }
}