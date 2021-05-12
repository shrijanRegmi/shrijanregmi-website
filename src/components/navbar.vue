<template>
  <div class="navbar">
    <div
      class="mNav d-flex justify-content-between align-items-center w-100 mb-1"
    >
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
    <SocialLinks
      :icons="icons"
      class="d-none d-md-flex"
      :style="{
        width: '120px !important',
      }"
    />
  </div>
</template>

<script>
import SocialLinks from "@/components/home/social_links";

export default {
  name: "Navbar",
  components: { SocialLinks },
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
  data: function() {
    return {
      icons: [
        {
          url: "https://www.facebook.com/ilyyhs52/",
          svg: "facebook",
        },
        {
          url: "https://github.com/shrijanRegmi?tab=repositories",
          svg: "github",
        },
        {
          url: "https://www.linkedin.com/in/shrijan-regmi-3ab7301aa/",
          svg: "linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/navbar.scss";
</style>
