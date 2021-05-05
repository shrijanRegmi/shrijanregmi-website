<template>
  <div class="navbar">
    <div class="mNav d-flex justify-content-between align-items-center w-100">
      <p class="d-none d-md-block">GET IN TOUCH</p>
      <h6 class="d-flex align-items-center">
        SHRIJAN
        <div class="circle"></div>
        REGMI
      </h6>
      <div></div>
      <div class="menu" @click.exact="onMenuClick">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    onMenuClick() {
      const body = document.querySelector("body");
      const menu = document.querySelector(".menu");
      const mobileNav = document.querySelector(".mobile-navbar");

      mobileNav.classList.toggle("mobile-navbar-show");
      menu.classList.toggle("white-menu");
      body.classList.toggle("disable-scroll");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/navbar.scss";
</style>
