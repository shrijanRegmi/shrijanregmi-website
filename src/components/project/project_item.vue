<template>
  <div class="project-item">
    <div class="row" v-if="horizonalView">
      <div class="col-12 col-xl-6 text-center text-xl-end">
        <img
          :src="require(`@/assets/svgs/projects/${item.svg}.svg`)"
          alt=""
          class="img img-fluid"
        />
      </div>

      <div class="col-12 col-xl-6 d-flex flex-column justify-content-center">
        <div
          class="content text-start m-3 mb-5"
        >
          <h1 class="display-4" v-html="item.title"></h1>
          <p>
            {{ item.description }}
          </p>
          <a
            :href="item.gitHub"
            target="_blank"
            rel="noopener noreferrer"
            class="d-flex justify-content-center align-items-center"
          >
            <img
              src="@/assets/svgs/social_links/github_white.svg"
              alt=""
              width="25px"
              height="25px"
            />
            GITHUB
          </a>
        </div>
      </div>
    </div>

    <div class="container text-start" v-else>
      <img
        :src="require(`@/assets/svgs/projects/${item.svg}.svg`)"
        alt=""
        :style="{
          marginRight: '20px',
        }"
        class="img img-fluid mb-5"
      />

      <div class="d-flex flex-column justify-content-center">
        <div
          class="content text-start"
        >
          <h1 class="display-4" v-html="item.title"></h1>
          <p>
            {{ item.description }}
          </p>
          <a
            :href="item.gitHub"
            target="_blank"
            rel="noopener noreferrer"
            class="d-flex justify-content-center align-items-center"
          >
            <img
              src="@/assets/svgs/social_links/github_white.svg"
              alt=""
              width="25px"
              height="25px"
            />
            GITHUB
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    item: Object,
    isHorizontal: Boolean,
  },
  data: function() {
    console.log(this.isHorizontal);
    return {
      horizonalView: this.isHorizontal,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/projects.scss";
</style>
