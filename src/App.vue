<template>
  <div id="app">
    <div id="cursor"></div>
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
  mounted() {
    const cursor = document.querySelector("#cursor");
    cursor.style.display = "none";

    if (window.innerWidth > 700) {
      onmousemove = (e) => {
        this.assignPositionToCursor(e);
      };

      onmousewheel = (e) => {
        this.assignPositionToCursor(e);
      };
    }
  },
  methods: {
    assignPositionToCursor(e) {
      const cursor = document.querySelector("#cursor");
      cursor.style.display = "block";

      const leftPos = e.pageX + 15;
      const topPos = e.pageY + 15;

      cursor.style.left = leftPos + "px";
      cursor.style.top = topPos + "px";
    },
  },
};
</script>

<style>
html {
  background-color: #f7f3f0;
}

::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ffffff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #2b2b2b;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
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

#cursor {
  position: absolute;
  z-index: 6;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e94d1a;
}

body > :last-child {
  z-index: 5;
}
</style>
