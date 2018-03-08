<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background: rgba(0,0,0,.05);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  padding:0;
  margin:0 auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1100px;
  }
}
.el-card__header{
  background: #00cccc;
}
ul {
  padding: 0;
  margin: 0;
}
ul li{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
