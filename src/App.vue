<template lang="pug">
  #app
    img(src="./assets/logo.png")
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
//https://medium.com/@BjornKrols/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e
@import './assets/styles/vendor/bootstrap/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
