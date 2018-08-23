import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import TodoList from './components/Todo-list.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import UsersService from './services/users.service.js'
import TodosService from './services/todos.service.js'

Vue.prototype.usersService = UsersService;
Vue.prototype.todosService = TodosService;

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes: [
    {path:'/register', component:Register},
    {path:'/login', component:Login},
    {path:'/home', component:TodoList},
    {path:'/', component:TodoList}
  ]
});









new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
