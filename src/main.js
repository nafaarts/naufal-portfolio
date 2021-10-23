import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./route";

particlesJS.load("particles-js", "public/particles.json", function () {
  console.log("callback - particles-js config loaded");
});

library.add(faMugHot);

var Vue = createApp(App);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(router);

Vue.mount("#app");
