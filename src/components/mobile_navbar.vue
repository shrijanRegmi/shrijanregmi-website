<template>
  <div
    class="mobile-navbar d-flex flex-column justify-content-between align-items-center"
  >
    <div class="d-flex w-100">
      <SocialLinks
        :icons="icons"
        class="m-4 m-md-5"
        :style="{
          width: '200px !important',
          marginBottom: '0px !important',
        }"
      />
    </div>
    <div class="content mb-5">
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
    <div></div>
    <div
      class="mobile-nav-footer px-5 d-flex flex-column flex-md-row justify-content-between align-items-center w-100 mb-4 mt-4"
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
import SocialLinks from "@/components/home/social_links";

export default {
  name: "MobileNav",
  components: {
    SocialLinks,
  },
  methods: {
    onLinkClicked() {
      const mobileNav = document.querySelector(".mobile-navbar");
      const menu = document.querySelector(".menu");

      mobileNav.classList.remove("mobile-navbar-show");
      menu.classList.remove("white-menu");
    },
  },
  data: function() {
    return {
      icons: [
        {
          url: "https://www.facebook.com/ilyyhs52/",
          svg: "facebook_white",
        },
        {
          url: "https://www.github.com/shrijanRegmi/",
          svg: "github_white",
        },
        {
          url: "https://www.linkedin.com/in/shrijan-regmi-3ab7301aa/",
          svg: "linkedin_white",
        },
        {
          url: "https://www.instagram.com/shrijan_regmi/",
          svg: "instagram_white",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/navbar.scss";
</style>
