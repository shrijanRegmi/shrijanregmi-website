<template>
  <div id="services" class="services text-center">
    <h6 class="d-flex justify-content-center">
      (02)
      <div class="mx-4"></div>
      SERVICES
    </h6>
    <h1>EXPERTISE</h1>
    <div class="container services-icons px-3">
      <Tools :items="tools1" class="justify-content-between" />
      <Tools :items="tools2" class="justify-content-around px-5" />
    </div>
    <hr />
    <ExpertiseItem v-for="item in expertise" :key="item.id" :expertise="item" />
  </div>
</template>

<script>
import ExpertiseItem from "@/components/home/expertise_item";
import Tools from "@/components/common/tools";

export default {
  name: "Services",
  components: {
    ExpertiseItem,
    Tools,
  },
  data() {
    return {
      expertise: [
        {
          id: 1,
          title: "MOBILE APP DEVELOPMENT",
          route: "/projects/mobile",
        },
        {
          id: 2,
          title: "WEB DEVELOPMENT",
          route: "/projects/web",
        },
      ],
      tools1: [
        {
          name: "Dart",
          url: "http://dart.dev",
          img: "dart",
        },
        {
          name: "Flutter",
          url: "http://flutter.dev",
          img: "flutter",
        },
        {
          name: "Firebase",
          url: "https://firebase.google.com",
          img: "firebase",
        },
        {
          name: "Javascript",
          url: "http://www.javascript.com",
          img: "javascript",
        },
        {
          name: "ReactJs",
          url: "http://reactjs.org",
          img: "react",
        },
        {
          name: "VueJs",
          url: "http://vuejs.org",
          img: "vue",
        },
        {
          name: "Adobe XD",
          url: "https://www.adobe.com/products/xd.html",
          img: "adobe_xd",
        },
      ],
      tools2: [
        {
          name: "Algolia",
          url: "https://www.algolia.com/",
          img: "algolia",
        },
        {
          name: "Figma",
          url: "https://www.figma.com/",
          img: "figma",
        },
        {
          name: "Get Stream",
          url: "https://getstream.io/",
          img: "getstream",
        },
        {
          name: "Mixpanel",
          url: "https://mixpanel.com/",
          img: "mixpanel",
        },
        {
          name: "Rudderstack",
          url: "https://rudderstack.com/",
          img: "rudderstack",
        },
      ],
    };
  },
};
</script>

<style></style>
