<template>
  <div id="contact" class="contact">
    <div class="content content1">
      <h6 class="d-flex">
        (04)
        <div class="mx-4"></div>
        GET IN TOUCH
      </h6>
      <h1 class="text-start">CONTACT</h1>
    </div>
    <hr />
    <div class="content content2 d-flex flex-column flex-md-row align-items-center justify-content-between">
      <a href="mailto:ilyyhs9@gmail.com"
       class="circle d-flex justify-content-center align-items-center mb-5 mb-md-0 mr-0 mr-4">
        SAY HELLO
      </a>
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <h4 class="text-end">
          <div class="mb-4">SHRIJAN REGMI<br /></div>
          GOLFUTAR, BUDANILKANTHA,<br />
          KATHMANDU 44600,<br />
          <div class="mt-4">ILYYHS9@GMAIL.COM</div>
        </h4>
      </div>
    </div>
    <hr />
    <div class="content content3 d-flex flex-column flex-lg-row justify-content-between align-items-center">
      <h4 class="ml-5 backToTop d-block d-lg-none" @click="onBackToTopClicked">
        (BACK TO TOP)
      </h4>
      <h4 class="d-flex">
        &#169; {{date}}
        <div class="mx-2 mx-lg-4">MADE BY SR</div>
      </h4>
      <h4 class="ml-5 backToTop d-none d-lg-block" @click="onBackToTopClicked">
        (BACK TO TOP)
      </h4>
      <h4>ALL RIGHTS RESERVED</h4>
    </div>
    <div class="d-flex justify-content-center w-100">
      <SocialLinks :icons="icons" class="mt-5" :style="{
          width: '200px !important',
        }" />
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/components/home/social_links";

export default {
  name: "Contact",
  components: {
    SocialLinks,
  },
  mounted() {
    const partnerSection = document.querySelector(".partners");
    const contact = document.querySelector(".contact");

    const app = document.querySelector(".home");
    const hrs = document.querySelectorAll(".contact hr");

    const horizontalTextSection = document.querySelector(
      ".horizontal-scroll-text"
    );
    const horizontalText1 = document.querySelector(
      ".horizontal-scroll-text .text1"
    );
    const horizontalText2 = document.querySelector(
      ".horizontal-scroll-text .text2"
    );

    window.onscroll = function() {
      const fadePos = partnerSection.offsetTop - (window.innerHeight / 2 - 100);
      const fadePosContact = contact.offsetTop - (window.innerHeight / 2 - 300);

      const horizontalTextSectionPos =
        horizontalTextSection.offsetTop - (window.innerHeight / 2 + 500);

      const scrollPos = window.scrollY;
      const horizontalTextPos = (window.scrollY - horizontalTextSectionPos) / 3;

      if (scrollPos >= horizontalTextSectionPos) {
        horizontalText1.style.transform = `translateX(-${horizontalTextPos}px)`;
        horizontalText2.style.transform = `translateX(${horizontalTextPos}px)`;
      }

      if (scrollPos >= fadePos) {
        app.classList.add("black-bg");
      } else {
        app.classList.remove("black-bg");
      }

      hrs.forEach((hr) => {
        if (scrollPos >= fadePosContact) {
          hr.style.width = window.innerWidth - 120 + "px";
        } else {
          hr.style.width = "0px";
        }
      });
    };
  },
  methods: {
    onBackToTopClicked() {
      scrollTo(0, 0);
    },
  },
  data: function() {
    return {
      date: new Date().getFullYear(),
      icons: [
        {
          url: "https://www.facebook.com/ilyyhs52/",
          svg: "facebook_white",
        },
        {
          url: "https://github.com/shrijanRegmi?tab=repositories",
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

<style></style>
