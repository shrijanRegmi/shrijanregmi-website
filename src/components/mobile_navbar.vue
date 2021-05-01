<template>
  <div
    class="mobile-navbar d-flex flex-column justify-content-between align-items-center"
  >
    <div></div>
    <div class="content">
      <a
        href="#about"
        class="item item1 d-flex align-items-center"
        @click="onLinkClicked"
      >
        <p>(01)</p>
        <div class="mx-4"></div>
        <h2>ABOUT US</h2>
      </a>
      <a
        href="#services"
        class="item item2 d-flex align-items-center"
        @click="onLinkClicked"
      >
        <p>(02)</p>
        <div class="mx-4"></div>
        <h2>SERVICES</h2>
      </a>
      <a
        href="#partners"
        class="item item3 d-flex align-items-center"
        @click="onLinkClicked"
      >
        <p>(03)</p>
        <div class="mx-4"></div>
        <h2>PARTNERS</h2>
      </a>
      <a
        href="#contact"
        class="item item4 d-flex align-items-center"
        @click="onLinkClicked"
      >
        <p>(04)</p>
        <div class="mx-4"></div>
        <h2>CONTACT</h2>
      </a>
    </div>
    <div
      class="px-5 d-flex flex-column flex-md-row justify-content-between align-items-center w-100"
    >
      <p class="d-flex">
        &#169; 2020
      </p>
      <p class="ml-5">MADE BY SR</p>
      <p>ALL RIGHTS RESERVED</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNav",
  methods: {
    onLinkClicked() {
      const mobileNav = document.querySelector(".mobile-navbar");
      const menu = document.querySelector(".menu");

      mobileNav.classList.remove("mobile-navbar-show");
      menu.classList.remove("white-menu");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/navbar.scss";
</style>
