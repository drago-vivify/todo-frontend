<template>
    <div class="container">
        <form @submit.prevent="onSubmitted">

            <div class="row">
                <div class="col-sm-9">
                    <label for="content">Content</label>
                    <input  type="text" 
                            id="content" 
                            class="form-control" 
                            placeholder="I want to do..."
                            v-model="content">
                </div>
                
                <div class="col-sm-3">
                    <label for="priority">Priority</label>
                    <select v-model="priority" id="priority" class="form-control">
                        <option disabled selected value="">Priority</option>
                        <option value=0>Very low</option>
                        <option value=1>Low</option>
                        <option value=2>Normal</option>
                        <option value=3>High</option>
                        <option value=4>Very high</option>
                    </select>

                </div>
            </div>

            <div class="row">
                <div class="col-sm-2 offset-sm-10 text-right delete-button-container">
                    <button class="btn btn-primary" type="submit">Add new</button>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            content: '',
            priority: 0
        };
    },

    methods: {
        onSubmitted() {
            console.log(this.priority, this.content);
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
