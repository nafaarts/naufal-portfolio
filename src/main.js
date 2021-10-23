import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMugHot, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./route";

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles-js config loaded");
});

library.add(faMugHot);
library.add(faMoon);
library.add(faSun);

var Vue = createApp(App);

Vue.config.globalProperties.darkTest = true;

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(router);

Vue.mount("#app");
