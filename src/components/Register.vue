<template>
    <div class="col-sm-6 offset-sm-3">
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input  type="text" 
                        id="name" 
                        class="form-control" 
                        v-model="name">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input  type="email" 
                        id="email" 
                        class="form-control" 
                        v-model="email">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input  type="password" 
                        id="password" 
                        class="form-control" 
                        v-model="password">
            </div>

            <button class="btn btn-primary" type="submit" @click.prevent="register">Sign up</button>

        </form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register() {
            this.usersService.register(this.email, this.password, this.name)
                .then(response => console.log(response))
                .catch(error => console.log(error.response));
        }
    }
}
</script>
