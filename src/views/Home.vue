<template>
  <div class="home">
    <Landing />
    <p class="scroll-text d-none d-md-block">SCROLL</p>
    <p class="based-text text-end d-none d-md-block">
      BASED IN<br />NEPAL, KATHMANDU
    </p>
    <About />
    <ScrollText />
    <Services />
    <Partners />
    <Contact />
  </div>
</template>

<script>
import Landing from "@/components/home/landing";
import About from "@/components/home/about";
import ScrollText from "@/components/home/scroll_text";
import Services from "@/components/home/services";
import Partners from "@/components/home/partners";
import Contact from "@/components/home/contact";

export default {
  name: "Home",
  components: {
    Landing,
    About,
    ScrollText,
    Services,
    Partners,
    Contact,
  },
  mounted() {
    const partnerSection = document.querySelector(".partners");
    const contact = document.querySelector(".contact");

    const app = document.querySelector("#app");
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
        console.log("e");
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
};
</script>
