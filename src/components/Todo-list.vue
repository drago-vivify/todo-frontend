<template>
    <div>
        <app-todo-form v-bind:todoToEdit="todoToEdit" 
            @addedTodo="onAddedTodo" @editedTodo="onEditedTodo"></app-todo-form>

        <div class="list-group">
            <div v-for="todo in todos"
                v-bind:key="todo.id"
                class="list-group-item">

                <app-todo v-bind:todo="todo" @edit='onEdit' @delete='onDelete' @doneChanged='onEditedTodo'></app-todo>

            </div>

        </div>
    </div>
</template>


<script>
import TodoForm from './Todo-form.vue'
import Todo from './Todo.vue'

export default {
    data() {
        return {
            todos: [],
            todoToEdit: null
        }
    },
    components : {
        'app-todo-form': TodoForm,
        'app-todo': Todo
    },
    methods: {
        fetchTodos() {
            // using axios api
            this.todosService.getTodos()
                .then(response => this.todos = response.data)
                .catch(error => console.log(error.response));

            // using browser's fetch api
            // fetch('http://localhost:8000/api/todos')
            //     .then(response => response.json())
            //     .then(data => this.todos=data)
            //     .catch(err => console.log(err));

            // using vue-resource api
            // this.$http.get("http://localhost:8000/api/todos")
            //     .then(response => this.todos = response.body)
            //     .catch(error => console.error(error));
        },
        onDelete(todo) {
            this.todosService.deleteTodo(todo)
                .then(response => this.todos.splice(this.todos.findIndex(element => element.id == response.data.id), 1))
                .catch(err => console.log(err));
        },

        onAddedTodo(newTodo) {
            this.fetchTodos();
        },

        onEdit(todo) {
            console.log('I want to edit:', todo);
            this.todoToEdit = todo;
        },
        onEditedTodo(todo) {
            let index = this.todos.findIndex(el => el.id==todo.id);
            this.todos[index].content = todo.content;
            this.todos[index].priority = todo.priority;
            this.todos[index].done = todo.done;
            this.todoToEdit = null;
        }
    },
    mounted() {
        this.fetchTodos();
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
