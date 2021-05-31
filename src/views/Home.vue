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
};
</script>
