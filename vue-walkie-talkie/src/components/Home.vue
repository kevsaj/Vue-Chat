<template>
    <div>
        <h3>Home</h3>

        <User v-slot:user="{ user }">

          <div v-if="user">
              Welcome {{ user.uid }}!
          </div>
          <Login v-else />

        </User>
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