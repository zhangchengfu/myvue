<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1 class="page-title"><a href="#">开发组件库</a></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  @import './assets/css/App.css'
</style>
