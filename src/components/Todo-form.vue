<template>
    <div class="container">
        <form @submit.prevent="onSubmitted">

            <div class="row">
                <div class="col-sm-9">
                    <label for="content">Content</label>
                    <input  type="text" 
                            id="content" 
                            ref="content"
                            class="form-control" 
                            placeholder="I want to do..."
                            @keydown.enter.prevent="onSubmitted"
                            v-model="content">
                </div>
                
                <div class="col-sm-3">
                    <label for="priority">Priority</label>
                    <select v-model="priority" id="priority" class="form-control">
                        <option disabled value="">Priority</option>
                        <option value=4>Very high</option>
                        <option value=3>High</option>
                        <option value=2>Normal</option>
                        <option value=1>Low</option>
                        <option value=0>Very low</option>
                    </select>

                </div>
            </div>

            <div class="row">
                <div class="col-sm-3 offset-sm-9 text-right delete-button-container">
                    <button class="btn btn-link" @click.prevent="onCancel()">Cancel</button>
                    <button class="btn btn-primary"  @click.prevent="onSubmitted" type="submit" v-bind:disabled="content.length==0">
                        <span v-if="editing">Save</span>
                        <span v-else>Add new</span>
                    </button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>

export default {
    props: [ 'todoToEdit' ],
    data() {
        return {
            emptyTodo: {
                content: '',
                priority: 2,
                done: false
            },
            editing: false,
            content: '',
            priority: 2,
        };
    },
    computed: {
        toEdit() {
            if (this.editing) {
                return {
                    id: this.todoToEdit.id,
                    content: this.todoToEdit.content,
                    priority: this.todoToEdit.priority,
                    done: this.todoToEdit.done
                }
            } else {
                return {
                    content: this.emptyTodo.content,
                    priority: this.emptyTodo.priority,
                    done: this.emptyTodo.done,
                }
            }
        }
    },
    watch: {
        todoToEdit(val) {
            if (val != null) {
                this.editing = true;
                this.content = val.content;
                this.priority = val.priority;
                this.$refs.content.focus();
            } else {
                this.editing = false;
                this.resetForm();
            }
        }
    },

    methods: {
        onSubmitted(event) {

            console.log('submitted');
            console.log('editing:', this.editing);
            if (!this.editing) {
                this.$axios.post('todos', {content:this.content, priority:this.priority, done:this.emptyTodo.done})
                    .then(response => this.$emit('addedTodo', response.data))
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                this.$axios.put('todos/' + this.toEdit.id, {content:this.content, priority:this.priority, done:this.toEdit.done})
                    .then(response => this.$emit('editedTodo', response.data))
                    .catch(error => {
                        console.log(error);
                    });
            }
            this.resetForm();
        },
        onEdited(todo) {
            ;
        },
        onCancel() {
            this.editing = false;
            this.resetForm();
        },
        resetForm() {
            this.editing = false;
            this.content = this.emptyTodo.content;
            this.priority = this.emptyTodo.priority;
        }
    }
}
</script>

<style>
    .new-todo-container {
        padding: 2%;
        margin: 0px;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .content-container {
        display: inline-block;
        width: 70%;
    }
    .priority-container {
        display: inline-block;
        width: 30%;
    }
    .delete-button-container {
        margin-top: 20px;
    }
</style>
