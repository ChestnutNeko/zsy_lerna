<template>
  <div id="app">
    <HelloWorld />
    <cat />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import cat from 'vuepress-plugin-cat/cat'

export default {
  name: 'App',
  components: {
    HelloWorld,
    cat
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
