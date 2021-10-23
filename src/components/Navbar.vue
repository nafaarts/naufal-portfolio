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
      <div class="flex h-full">
        <div
          class="
            toggleDark
            pt-1
            flex
            items-center
            text-grey-dark
            dark:text-white
          "
          @click="toggleDark"
        >
          <font-awesome-icon
            class="pl-1 text-3xl mr-6 mt-1 transition-all"
            :icon="['fas', dark ? 'sun' : 'moon']"
          />
        </div>
        <Menu />
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  data() {
    return {
      dark: false,
    };
  },
  mounted() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.dark = true;
      this.setDark(true);
    } else {
      this.dark = false;
      this.setDark(false);
    }
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "F2") {
        this.dark = !this.dark;
        this.setDark(this.dark);
        localStorage.theme = this.dark ? "dark" : "light";
      }
    });
  },
  methods: {
    toggleDark() {
      this.dark = !this.dark;
      localStorage.theme = this.dark ? "dark" : "light";
      this.setDark(this.dark);
    },
    setDark(mode) {
      let body = document.querySelector("body");
      body.classList.toggle("dark", mode);
      body.classList.toggle("bg-white-soft", !mode);
      body.classList.toggle("bg-grey-dark", mode);
    },
  },
  components: {
    Menu,
  },
};
</script>
