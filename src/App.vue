<template>
  <div id="app">
    <div class="container">
      <app-new-todo></app-new-todo>
    </div>
  </div>
</template>

<script>
import NewTodo from './components/New-todo.vue'


export default {
  data () {
    return {
    }
  },
  components: {
    'app-new-todo': NewTodo
  }
}
</script>

<style lang="scss">
</style>
