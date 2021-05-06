<template>
  <div class="social-network d-flex">
    <a
      href="https://www.facebook.com/ilyyhs52/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="@/assets/svgs/social_links/facebook.svg" alt="" />
    </a>
    <a
      href="https://www.linkedin.com/in/shrijan-regmi-3ab7301aa/"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-3"
    >
      <img src="@/assets/svgs/social_links/linkedin.svg" alt="" />
    </a>
    <a
      href="https://www.instagram.com/shrijan_regmi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="@/assets/svgs/social_links/instagram.svg" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
};
</script>

<style lang="scss">
.social-network {
  img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 756px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
