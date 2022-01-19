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
          "I have been responsible for translating code into user-friendly applications. I have been collaborating with internal teams to develop functional mobile applications while working in a fast-paced environment. Essentially, I am contributing to the design, testing, releasing and support of the application.",
        gitHub: "https://github.com/shrijanRegmi?tab=repositories",
      },
      mobileItems: [
        {
          svg: "food_with_love",
          title: "food with<br/>love",
          description:
            "Food with love is a shopping app dedicated for food lovers. It is an application that is created using food_with_love flutter package.",
          gitHub: "https://github.com/shrijanregmi/flutter-food-with-love",
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
          svg: "sendman",
          title: "sendman",
          description:
            "Send Man allows you to share high quality disappearing images. Just upload the image, set disappearing date and time and share the link to the images.",
          gitHub: "https://github.com/shrijanregmi/flutter-sendman",
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
          svg: "roottwo",
          title: "root two",
          description:
            "An interactive flutter math game to test your math skills with the leaderboard feature to see your score among various other players. It is the extended version of Mathy app.",
          gitHub: "https://github.com/shrijanRegmi/flutter-root-two",
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
        {
          svg: "mathy",
          title: "mathy",
          description:
            "An interactive flutter math game to test your math skills with the leaderboard feature to see your score among various other players",
          gitHub: "https://github.com/shrijanRegmi/Mathy-Flutter-App",
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
          ],
        },
        {
          svg: "quizy",
          title: "quizy",
          description:
            "A quiz app with the admin panel where you can host various types of quiz and post upto 2000 quiz questions.",
          gitHub: "https://github.com/shrijanRegmi/Quizy-Wizy-Flutter-App",
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
          ],
        },
        {
          svg: "workup",
          title: "work up",
          description:
            "A basic fitness app which will help you to engineer your body during lockdown. Contains almost 30 different exercises to match your goals.",
          gitHub: "https://github.com/shrijanRegmi/Work-my-life-app",
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
          svg: "iprecious",
          title: "iprecious",
          description:
            "A flutter app where you can chat and play realtime game with your friends, buy coins, sell coins etc.",
          gitHub: "https://github.com/shrijanRegmi/iPrecious-app",
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
          ],
        },
      ],
      webLandingItem: {
        svg: "mobile_img",
        title: "web",
        description:
          "My role is responsible for designing, coding and modifying websites, from layout to function and according to a client’s specifications. I strive to create visually appealing sites that feature user-friendly design and clear navigation.",
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
            {
              name: "Firebase",
              url: "https://firebase.google.com",
              img: "firebase",
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
            {
              name: "Firebase",
              url: "https://firebase.google.com",
              img: "firebase",
            },
          ],
        },
        {
          svg: "sendman_web",
          title: "sendman",
          description:
            "Sendman allows you to share high quality disappearing images. This web app is responsible for viewing the images shared using sendman app.",
          gitHub: "https://github.com/shrijanregmi",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "ReactJs",
              url: "http://reactjs.org",
              img: "react",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
            },
            {
              name: "Firebase",
              url: "https://firebase.google.com",
              img: "firebase",
            },
          ],
        },
        {
          svg: "ioeman",
          title: "ioeman",
          description:
            "Syllabus, Books, Notes, Question Collections for TU Affiliated Engineering Colleges, Nepal",
          gitHub: "https://github.com/shrijanRegmi/ioeman-website",
          tools: [
            {
              name: "Adobe XD",
              url: "https://www.adobe.com/products/xd.html",
              img: "adobe_xd",
            },
            {
              name: "ReactJs",
              url: "http://reactjs.org",
              img: "react",
            },
            {
              name: "Javascript",
              url: "http://www.javascript.com",
              img: "javascript",
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
