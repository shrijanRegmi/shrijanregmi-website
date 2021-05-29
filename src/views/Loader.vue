<template>
  <div class="loader-page">
    <lottie-animation
      path="counter.json"
      :loop="false"
      :autoPlay="true"
      :speed="1"
      @AnimControl="onJsonLoad"
    />
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

export default {
  name: "Loader",
  components: {
    LottieAnimation,
  },
  mounted() {
    const requiredLoader = this.$route.hash == "";
    const loaderPage = document.querySelector(".loader-page");
    const body = document.querySelector("body");

    if (requiredLoader) {
      body.style.overflow = "hidden";
    } else {
      loaderPage.style.display = "none";
    }
  },
  methods: {
    startTimer() {
      const requiredLoader = this.$route.hash == "";
      const body = document.querySelector("body");
      const loaderPage = document.querySelector(".loader-page");

      if (requiredLoader) {
        setTimeout(() => {
          loaderPage.style.display = "none";
          body.style.overflow = "auto";
        }, 4700);
      }
    },
    onJsonLoad(e) {
      if (e.isLoaded) {
        console.log("LOaded");
        this.startTimer();
      }
    },
  },
};
</script>

<style @scoped lang="scss">
.loader-page {
  z-index: 6;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #f7f3f0;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
