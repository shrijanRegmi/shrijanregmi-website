import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

Vue.use(LottieAnimation);

AOS.init({
  duration: 2000,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
