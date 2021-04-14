<template>
    <aside>
        <h3>Sign in Anonymously</h3>
        <button @click="auth.signInAnonymously()" class="button is-dark">Sign In</button>

        <div v-if="newUser">
            <h3>Sign Up for a New Account</h3>
            <a href="#" @click="newUser = false">Returning User?</a>
        </div>

        <div v-else>
            <h3>Sign In with Email</h3>
            <a href="#" @click="newUser = true"></a>
        </div>

        <label for="email">Email</label><br>
        <input v-model="email" placeholder="email" type="email" class="input">

        <label for="password">Password</label><br>
        <input v-model="password" type="password" class="input">

        <br>

        <button>
            {{ newUser ? 'Sign Up' : 'Login' }}
        </button>

    </aside>
</template>

<script>
import { auth } from '../firebase'

export default ({
    data() {
        return {
            newUser: false,
            email: '',
            password: '',
        }
    },
})
</script>

<style>
aside {
  text-align: center;
  margin-top: 50px;
}
button, input {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
