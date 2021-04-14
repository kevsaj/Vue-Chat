<template>
    <div>
        <h3>Home</h3>

        <User v-slot:user="{ user }">

          <div v-if="user">
              <UserProfile :user="user" />
          </div>
          <Login v-else />

        </User>
    </div>
</template>

<script>
import Login from './Login'
import User from './User'
import UserProfile from './UserProfile'

export default ({
    components: {
        Login,
        User,
        UserProfile
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