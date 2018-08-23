<template>
    <form>
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

        <button class="btn btn-primary" type="submit" @click.prevent="login">Sign in</button>

    </form>
</template>


<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            this.usersService.login(this.email, this.password)
                .then(response => {
                    alert('You have successfully signed in');
                    localStorage.setItem('jwt', response.data.token);
                })
                .catch(error => alert('Invalid username or password'));
        }
    }
}
</script>
