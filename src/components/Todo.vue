<template>
    <div class="todo-container" v-bind:class="{ 'done': todo.done}">

        <div class="done-container">
            <a class="btn btn-link" @click="toggleDone">
                <i v-if="todo.done" class="far fa-check-square" style="font-size:24px;"></i>
                <i v-else class="far fa-square" style="font-size:24px;"></i>
            </a>
        </div>
        <div class="content-container">
            {{todo.content}}
        </div>
        <div class="priority-container">
            <i v-if="todo.priority==4" class="fa fa-angle-double-up" style="font-size:28px;color:red"></i>
            <i v-else-if="todo.priority==3" class="fa fa-angle-up" style="font-size:24px;color:orange"></i>
            <i v-else-if="todo.priority==2" class="fas fa-minus" style="font-size:20px;"></i>
            <i v-else-if="todo.priority==1" class="fa fa-angle-down" style="font-size:22px;color:green"></i>
            <i v-else class="fa fa-angle-double-down" style="font-size:20px;color:blue"></i>
        </div>
        <div class="priority-text-container">
            <span v-if="todo.priority==4">Very high</span>
            <span v-else-if="todo.priority==3">High</span>
            <span v-else-if="todo.priority==2">Normal</span>
            <span v-else-if="todo.priority==1">Low</span>
            <span v-else>Very low</span>
        </div>

        <div class="buttons-container text-right">
            <a id='edit-button'
                 @click="onEdit" class="btn btn-link">
                <i class="fas fa-pen"></i>
            </a>
            <a id='delete-button' @click="onDelete" class="btn btn-link">
                <i class="far fa-trash-alt"></i>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods: {
        onEdit() {
            this.$emit('edit', this.todo);
        },
        toggleDone() {
            const temp = {
                id: this.todo.id,
                content: this.todo.content,
                priority: this.todo.priority,
                done: !this.todo.done
            }
            this.todosService.editTodo(temp)
                .then(response => this.$emit('doneChanged', response.data))
                .catch(err => console.log(err));
        },  
        onDelete() {
            this.$emit('delete', this.todo);
        }
    }
}
</script>

<style lang="scss">
    .todo-container {
        align-items: center;
        padding: 10px;
        margin: 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .done-container {
        display: inline-block;
        width: 5%;
    }

    .content-container {
        display: inline-block;    
        padding-left:30px;
        width:70%;
    }

    .priority-container {
        display: inline-block;
        width:5%;
    }
    .priority-text-container {
        display: inline-block;
        width:10%;
    }

    .buttons-container {
        display: inline-block;
        width: 10%;
    }
    
    .done {
        background-color: #e5e8eb;
    }
    .done > .content-container {
        color: #666;
        text-decoration: line-through;
    }
</style>
