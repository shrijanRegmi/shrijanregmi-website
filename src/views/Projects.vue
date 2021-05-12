<template>
  <div class="projects-page">
    <ProjectItem
      :item="landingItem"
      :isHorizontal="true"
      class="project-landing"
    />
    <div v-for="item in items" :key="item.svg">
      <ProjectItem :item="item" :isHorizontal="isHorizontal" />
    </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/project/project_item";

export default {
  components: {
    ProjectItem,
  },
  data: function() {
    return {
      landingItem: {},
      items: [],
      isHorizontal: this.$route.params.id == "mobile",
      mobileLandingItem: {
        svg: "mobile_img",
        title: "mobile",
        description:
          "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
        gitHub: "https://github.com/shrijanRegmi?tab=repositories",
      },
      mobileItems: [
        {
          svg: "peaman",
          title: "peaman",
          description:
            "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
          gitHub: "https://github.com/shrijanregmi/flutter-peaman",
        },
        {
          svg: "spottup",
          title: "spottup",
          description:
            "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
          gitHub: "https://github.com/shrijanregmi/flutter-spottup",
        },
        {
          svg: "nova",
          title: "nova<br/>esports",
          description:
            "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
          gitHub: "https://github.com/shrijanregmi/flutter-nova-esports",
        },
      ],
      webLandingItem: {
        svg: "mobile_img",
        title: "web",
        description:
          "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
        gitHub: "https://github.com/shrijanRegmi?tab=repositories",
      },
      webItems: [
        {
          svg: "portfolio",
          title: "shrijanregmi official",
          description:
            "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
          gitHub: "https://github.com/shrijanregmi/shrijanregmi-website",
        },
        {
          svg: "gunasochautari",
          title: "gunasochautari",
          description:
            "We have a wealth of experience working with corporate and personal clients. Many of those clients have been working with us for more than two decades.",
          gitHub: "https://github.com/shrijanregmi/gunasochautari",
        },
      ],
    };
  },
  created() {
    const { id } = this.$route.params;

    if (id == "mobile") {
      this.landingItem = this.mobileLandingItem;
      this.items = this.mobileItems;
    } else {
      this.landingItem = this.webLandingItem;
      this.items = this.webItems;
    }
  },
};
</script>

<style>
.project-landing {
  height: 100%;
  margin-top: 50px;
  padding: 0px;
  border: none;
}

.project-landing img {
  margin-bottom: 24px;
}
</style>
