<template>
    <div>
        <h3>Home</h3>

        <Login />
    </div>
</template>

<script>
import Login from './Login'

export default ({
    components: {
        Login
    }
})
</script>

<style>
div {
  text-align: center;
  margin-top: 30px;
}
button, input {
  margin-bottom: 10px;
}
</style>