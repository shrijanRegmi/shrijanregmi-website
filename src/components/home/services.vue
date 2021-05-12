<template>
  <div id="services" class="services text-center">
    <h6 class="d-flex justify-content-center">
      (02)
      <div class="mx-4"></div>
      SERVICES
    </h6>
    <h1>EXPERTISE</h1>
    <div
      class="container services-icons d-flex w-100 justify-content-around align-items-center"
    >
      <a href="http://dart.dev" target="_blank" rel="noopener noreferrer"
        ><img
          src="@/assets/images/expertise/dart.png"
          class="img-fluid"
          alt="Dart"
      /></a>
      <a href="http://flutter.dev" target="_blank" rel="noopener noreferrer">
        <img
          src="@/assets/images/expertise/flutter.png"
          alt="Flutter"
          class="img-fluid"
      /></a>
      <a
        href="http://www.javascript.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="@/assets/images/expertise/javascript.png"
          alt="Javascript"
          class="img-fluid"
      /></a>
      <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img
          src="@/assets/images/expertise/react.png"
          alt="ReactJs"
          class="img-fluid"
      /></a>
      <a href="http://vuejs.org" target="_blank" rel="noopener noreferrer">
        <img
          src="@/assets/images/expertise/vue.png"
          alt="VueJs"
          class="img-fluid"
      /></a>
    </div>
    <hr />
    <ExpertiseItem v-for="item in expertise" :key="item.id" :expertise="item" />
  </div>
</template>

<script>
import ExpertiseItem from "@/components/home/expertise_item";

export default {
  name: "Services",
  components: {
    ExpertiseItem,
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
    };
  },
};
</script>

<style></style>
