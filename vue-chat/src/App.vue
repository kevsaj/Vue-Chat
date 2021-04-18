<template>
  <div id="app" class="bg-pink-300">
    <header>
      <h1>Vue-Chat</h1>
      <p>Realtime Messages/Voice App using Vue and Firebase</p>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

import { auth } from './firebase'

console.log(auth)

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
header {
  text-align: center;
}
button, input {
  margin-bottom: 10px;
}
</style>