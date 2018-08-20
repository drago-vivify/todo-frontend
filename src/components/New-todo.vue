<template>
    <form @submit.prevent="onSubmitted">
        <div class="form-group">
            <label for="content">Content</label>
            <input  type="text" 
                    id="content" 
                    class="form-control" 
                    v-model="content">
            <label for="priority">Priority</label>
            <select v-model="priority" id="priority" class="form-control">
                <option disabled value="">Please select priority</option>
                <option value=0>Very low</option>
                <option value=1>Low</option>
                <option value=2>Medium</option>
                <option value=3>High</option>
                <option value=4>Very high</option>
            </select>
            
            <button class="btn btn-primary" type="submit">Add</button>
        </div>
    </form>
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
