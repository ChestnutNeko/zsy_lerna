<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <cat /> -->
    <virtual-guide :type="type" :redPacketNum="redPacketNum" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import cat from './cat-packet/cat.vue'
import VirtualGuide from './virtualGuide'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // cat,
    VirtualGuide
  },
  data() {
    return {
      type: 'heng',
      redPacketNum: 1,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
