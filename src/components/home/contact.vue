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
    <div class="content content2 d-flex justify-content-between">
      <div class="circle d-flex justify-content-center align-items-center">
        SAY HELLO
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <h4 class="text-end">
          <div class="mb-4">SHRIJAN REGMI<br /></div>
          GOLFUTAR, BUDANILKANTHA,<br />
          KATHMANDU 44600,<br />
          <div class="mt-4">ILYYHS9@GMAIL.COM</div>
        </h4>
      </div>
    </div>
    <hr />
    <div class="content content3 d-flex justify-content-between">
      <h4 class="d-flex">
        &#169; 2020
        <div class="mx-4">MADE BY SR</div>
      </h4>
      <h4 class="ml-5 backToTop" @click="onBackToTopClicked">(BACK TO TOP)</h4>
      <h4>ALL RIGHTS RESERVED</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    onBackToTopClicked() {
      scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
