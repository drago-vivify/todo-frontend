<template>
    <div class="list-group">

        <div v-for="todo in todos"
            v-bind:key="todo.id"
            class="list-group-item">

            <app-todo v-bind:todo="todo"></app-todo>

        </div>

    </div>
</template>


<script>
import Todo from './Todo.vue'

export default {
    data() {
        return {
            todos: [{id:1, content: 'Learn Laravel', priority:4, done:false}, 
                    {id:2, content: 'Play table tennis', priority:0, done:true}, 
                    {id:4, content: 'Learn MySql', priority:2, done:false}, 
                    {id:3, content: 'Learn VueJS', priority:3, done:false}, 
                    {id:5, content: 'Have a break', priority:1, done:true}]
        }
    },
    components : {
        'app-todo': Todo
    }    
}
</script>


<style>
    .list-group {
        margin:40px 15px;
    }
    .list-group-item {
        padding: 0;
    }
</style>
