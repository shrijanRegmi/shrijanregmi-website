<template>
  <div id="app">
    <Navbar />
    <router-view />
    <MobileNav />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile_navbar";

export default {
  components: {
    Navbar,
    MobileNav,
  },
};
</script>

<style>
html {
  background-color: #f7f3f0;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  overflow-x: hidden !important;
  scrollbar-width: thin;
}

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  background-color: #f7f3f0;
  overflow-x: hidden !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
