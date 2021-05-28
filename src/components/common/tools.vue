<template>
  <div
    class="tools d-flex w-100 justify-content-between align-items-center"
  >
    <a
      v-for="item in items"
      :key="item.name"
      :href="item.url"
      target="_blank"
      rel="noopener noreferrer"
      :title="item.name"
    >
      <img
        :src="require(`@/assets/images/expertise/${item.img}.png`)"
        alt="Adobe Xd"
        class="img-fluid"
    /></a>
  </div>
</template>

<script>
export default {
  name: "Tools",
  props: {
    items: Array,
  },
};
</script>

<style @scoped lang="scss">
img {
  cursor: pointer;
}
</style>
