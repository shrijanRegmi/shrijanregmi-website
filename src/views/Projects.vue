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
      isHorizontal: this.$route.params.id != "web",
      mobileLandingItem: {
        svg: "mobile_img",
        title: "mobile",
        description:
          "I have been responsible for translating code into user-friendly applications. I have been collaborating with internal teams to develop functional mobile applications while working in a fast-paced environment. Essentially, I am contributing to the design, testing, releasing and support of the application.",
        gitHub: "https://github.com/shrijanRegmi?tab=repositories",
      },
      mobileItems: [
        {
          svg: "gopasal",
          title: "gopasal",
          description:
            "Shop groceries online & get fresh food, drinks, snacks & alcohol delivered directly to your door in as little as 2 hours with same day delivery. This is online grocery shopping made easy, it's safe—contactless delivery is available.",
          gitHub: "https://github.com/shrijanregmi/flutter-gopasal",
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
          svg: "pickert",
          title: "pickert",
          description:
            "Pickert is the place where people come together to have the most authentic and interesting conversations on the internet—Where gaming communities, nostalgic internet forums, bloggers, meme-makers, and fandoms mingle alongside video streamers, support groups, news junkies, armchair experts, seasoned professionals, and artists and creators of all types.",
          gitHub: "https://github.com/shrijanregmi/flutter-pickert",
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
      packagesLandingItem: {
        svg: "mobile_img",
        title: "packages",
        description:
          "Packages, can be explained as, the shared parts contributed by other developers to a certain framework (Eg. Flutter) ecosystems. This allows developers to quickly build an app without having to develop everything from scratch. Most of my packages are created for Flutter.",
        gitHub: "https://github.com/shrijanRegmi?tab=repositories",
      },
      packagesItems: [
        {
          svg: "peaman",
          title: "peaman",
          description:
            "A service for building social media applications with ease that helps to create a intermediate social media application within weeks.",
          gitHub: "https://github.com/shrijanregmi/peaman",
          tools: [
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
          svg: "food_with_love",
          title: "food with<br/>love",
          description:
            "A service for building food ordering and delivering applications with ease that helps to create a complete application within weeks.",
          gitHub: "https://github.com/shrijanregmi/flutter-food-with-love",
          tools: [
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
          svg: "gopasal",
          title: "flutter<br/>feed reaction",
          description:
            "A flutter package that helps us to create a facebook-like reaction experience that can be used to show your reaction on post, comment or message.",
          gitHub: "https://github.com/shrijanregmi/flutter_feed_reaction",
          tools: [
            {
              name: "Flutter",
              url: "http://flutter.dev",
              img: "flutter",
            },
          ],
        },
        {
          svg: "gopasal",
          title: "progress<br/>value button",
          description:
            "A flutter package that creates a progress button with smooth animation with the supplied value in percentage.",
          gitHub: "https://github.com/shrijanregmi/progress_value_button",
          tools: [
            {
              name: "Flutter",
              url: "http://flutter.dev",
              img: "flutter",
            },
          ],
        },
        {
          svg: "gopasal",
          title: "always<br/>scroll list",
          description:
            "A flutter package that can create an infinite list which can auto-scroll forever.",
          gitHub: "https://github.com/shrijanregmi/always_scroll_list",
          tools: [
            {
              name: "Flutter",
              url: "http://flutter.dev",
              img: "flutter",
            },
          ],
        },
      ],
    };
  },
  created() {
    const { id } = this.$route.params;

    if (id === "mobile") {
      this.landingItem = this.mobileLandingItem;
      this.items = this.mobileItems;
    } else if (id === "packages") {
      this.landingItem = this.packagesLandingItem;
      this.items = this.packagesItems;
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
