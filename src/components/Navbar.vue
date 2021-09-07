<template>
  <nav class="py-8">
    <div class="container flex items-center justify-between flex-wrap">
      <a href="/" class="z-50">
        <img
          src="../assets/logo-n-black.png"
          alt="Logo N"
          class="h-10 w-10 m-2"
        />
      </a>
      <div class="flex">
        <div class="menu-bar absolute top-12 right-20 hidden md:block">
          <small id="infoKeyTools" class="dark:text-white">
            <code
              ><v-typical
                class="blink opacity-50"
                :steps="[
                  'Open Menu (Press [Esc])',
                  5000,
                  'Dark Mode (Press [F2])',
                  5000,
                  'or You can Triple click on window to enter dark mode :)',
                  5000,
                ]"
                :loop="Infinity"
                :wrapper="'h2'"
              ></v-typical></code
          ></small>
        </div>
        <Menu />
      </div>
      <!-- <img src="../assets/menu.png" alt="Logo N" class="h-10 w-10"> -->
    </div>
  </nav>
</template>

<script>
import Menu from "./Menu.vue";
import VTypical from "vue-typical";

export default {
  components: {
    Menu,
    VTypical,
  },
};
</script>

<style>
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
