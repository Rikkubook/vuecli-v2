<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Home</a> -->
            <!-- <router-link class="nav-link" to="/index">Home</router-link> -->
            <router-link class="nav-link" :to="{name: '首頁'}">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/page">Page</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <router-view name="menu"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    this.$http.get('https://randomuser.me/api/').then((response) => {
    console.log(response.data);
    })
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
//路徑為～ 為node-modules

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

$color-red: red;
h1{
  color: $color-red;
}

</style>
