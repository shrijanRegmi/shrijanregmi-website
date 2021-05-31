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
            "A complete social media app that has features like Post / React / Comment / Chat / Follow  / Stories and much more.",
          gitHub: "https://github.com/shrijanregmi/flutter-peaman",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "Flutter",
              url: "http://flutter.dev",
              img: "flutter",
            },
            {
              name: "Firebase",
              url: "https://firebase.google.com",
              img: "firebase",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
            },
          ],
        },
        {
          svg: "spottup",
          title: "spottup",
          description:
            "A complete Hotel / Tour / Vehicle booking app where user can register as a partner or as a customer.",
          gitHub: "https://github.com/shrijanregmi/flutter-spottup",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "Flutter",
              url: "http://flutter.dev",
              img: "flutter",
            },
            {
              name: "Firebase",
              url: "https://firebase.google.com",
              img: "firebase",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
            },
          ],
        },
        {
          svg: "nova",
          title: "nova<br/>esports",
          description:
            "A pubg / freefire tournament hosting app where you can host solo, duo or squad tournament between the users. Chat with your teammates on real time. Share team codes to invite friends and more other features.",
          gitHub: "https://github.com/shrijanregmi/flutter-nova-esports",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "Flutter",
              url: "http://flutter.dev",
              img: "flutter",
            },
            {
              name: "Firebase",
              url: "https://firebase.google.com",
              img: "firebase",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
            },
          ],
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
            "My portfolio website made using VueJs to showcase my skills.",
          gitHub: "https://github.com/shrijanregmi/shrijanregmi-website",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "VueJs",
              url: "http://vuejs.org",
              img: "vue",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
            },
          ],
        },
        {
          svg: "gunasochautari",
          title: "gunasochautari",
          description:
            "A Server Side Rendered (SSR) news portal website made using NuxtJs where you can post news daily that can be shared on different platforms like facebook, twitter etc.",
          gitHub: "https://github.com/shrijanregmi/gunasochautari",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "VueJs",
              url: "http://vuejs.org",
              img: "vue",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
            },
            {
              name: "NuxtJs",
              url: "https://nuxtjs.org/",
              img: "nuxt",
            },
          ],
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
