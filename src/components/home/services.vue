<template>
  <div id="services" class="services text-center">
    <h6 class="d-flex justify-content-center">
      (02)
      <div class="mx-4"></div>
      SERVICES
    </h6>
    <h1>EXPERTISE</h1>
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
        },
        {
          id: 2,
          title: "WEB DEVELOPMENT",
        },
        {
          id: 3,
          title: "GIT",
        },
      ],
    };
  },
};
</script>

<style></style>
