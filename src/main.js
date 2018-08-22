import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueResource from 'vue-resource';

const axionsInstance = axios.create({
  baseURL: 'http://todos.loc/api/'
})
Vue.prototype.$axios = axionsInstance;

Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
