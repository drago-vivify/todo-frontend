<template>
  <div id="app">
    <div class="container">
      <p class="title">MyTodo</p>
      <hr>
      <br>
      <app-todo-list></app-todo-list>
    </div>
  </div>  
</template>

<script>
import TodoList from './components/Todo-list.vue'


export default {
  components: {
    'app-todo-list': TodoList
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
