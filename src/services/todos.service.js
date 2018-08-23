import axios from './service'

export default {

    getTodos() {
        return axios.get('todos');
    },

    postTodo(content, priority) {
        return axios.post('todos', {content, priority});
    },

    deleteTodo(todo) {
        return axios.delete('todos/' + todo.id);
    },

    editTodo(todo) {
        return axios.put('todos/' + todo.id, todo);
    },
}