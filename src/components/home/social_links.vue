<template>
  <div class="social-network d-flex justify-content-between">
    <a
      :href="socialLink.url"
      target="_blank"
      rel="noopener noreferrer"
      v-for="socialLink in socialLinks"
      :key="socialLink.url"
    >
      <img
        :src="require(`@/assets/svgs/social_links/${socialLink.svg}.svg`)"
        alt=""
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  props: {
    icons: Array,
  },
  data: function() {
    console.log(this.icons);
    return {
      socialLinks: this.icons,
    };
  },
};
</script>

<style lang="scss">
.social-network {
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
