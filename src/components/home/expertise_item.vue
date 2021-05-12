<template>
  <div class="expertise-item">
    <div class="d-flex justify-content-between align-items-center w-100">
      <h2 class="index">(0{{ expertise.id }})</h2>
      <div class="d-flex align-items-center justify-content-end w-100">
        <h3>
          {{ expertise.title }}
        </h3>
        <router-link :to="expertise.route" @click.native="scrollToTop">
          <div class="plus">
            <div class="line line1"></div>
            <div class="line line2"></div>
          </div>
        </router-link>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "ExpertiseItem",
  props: {
    expertise: Object,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
