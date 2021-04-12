<template>
    <aside>
        <h3>Sign in Anonymously</h3>
        <button @click="auth.signInAnonymously()" class="button is-dark">Sign In</button>
    </aside>
</template>

<script>
import { auth } from '../firebase'

export default ({
    data() {
        return {
            auth,
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
