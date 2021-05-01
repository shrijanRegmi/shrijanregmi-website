<template>
  <div class="home">
    <Landing />
    <p class="scroll-text">SCROLL</p>
    <p class="based-text text-end">BASED IN<br />SPRUCE GROVE & LEDUC</p>
    <About />
    <Services />
    <Partners />
    <Contact />
  </div>
</template>

<script>
import Landing from "@/components/home/landing";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Partners from "@/components/home/partners";
import Contact from "@/components/home/contact";

export default {
  name: "Home",
  components: {
    Landing,
    About,
    Services,
    Partners,
    Contact,
  },
  mounted() {
    const partnerSection = document.querySelector(".partners");
    const contact = document.querySelector(".contact");

    const app = document.querySelector("#app");
    const hrs = document.querySelectorAll(".contact hr");

    window.onscroll = function() {
      const fadePos = partnerSection.offsetTop - (window.innerHeight / 2 - 100);
      const fadePosContact = contact.offsetTop - (window.innerHeight / 2 - 300);
      const scrollPos = window.scrollY;

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
