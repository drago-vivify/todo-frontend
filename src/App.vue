<template>
  <div id="app">
    <div class="container">
      <p class="title">MyTodo</p>
      <div>
        <router-link class="btn btn-link" :to="'/'">Home</router-link> |
        <router-link class="btn btn-link" :to="'/login'">Sign in</router-link> |
        <router-link class="btn btn-link" :to="'/register'">Sign up</router-link> |
        <button class="btn btn-link" @click="logout">Log out </button> |
      </div>
      <hr>
      <br>
      <router-view></router-view>
    </div>
  </div>  
</template>

<script>

export default {
  methods: {
    logout() {
      this.usersService.logout();
    }
  }
}
</script>

<style>
  .title {
    background-color: #fff;
    color: #636b6f;
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    font-size:84px;
    text-align: center;
    width: 100%;
  }
</style>
