import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import cursorDot from "cursor-dot";

const cursor = cursorDot({
  diameter: 250,
  borderWidth: 1,
  borderColor: "#fff",
  easing: 8,
  background: "white",
});

Vue.use(cursor);

cursor.over(".landing-hello", {
  background: "#fff",
});

AOS.init({
  duration: 2000,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
