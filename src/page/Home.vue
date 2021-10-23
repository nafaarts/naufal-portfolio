<template>
  <!-- <Loading /> -->
  <div class="container md:h-screen mx-auto">
    <Navbar />
    <section class="body-font flex h-4/6">
      <div
        class="mx-auto flex md:flex-row flex-col-reverse items-center w-full"
      >
        <div
          class="
            md:w-1/2
            flex flex-col
            mb-16
            md:mb-0
            items-center
            text-center
            md:items-start md:text-left md:ml-7
            w-full
          "
        >
          <h1
            class="md:text-6xl text-3xl mb-4 font-light dark:text-white md:mt-0"
          >
            <span class="text-cream font-medium">
              <v-typical
                class="blink"
                :steps="[
                  'HELLO',
                  5000,
                  'HAI',
                  5000,
                  'KONNICHIWA',
                  5000,
                  'ANNYEONG HASEYO',
                  5000,
                  'OLá',
                  5000,
                  'BONJOUR',
                  5000,
                  'HOLA',
                  5000,
                  'GUTEN TAG',
                  5000,
                ]"
                :loop="Infinity"
                :wrapper="'span'"
              ></v-typical></span
            >,
            <br />
            I'M A FULL-STACK
            <br />
            <span class="text-cream font-medium">DEVELOPER</span>
          </h1>
          <div class="dark:bg-white bg-grey-dark h-1 w-40 mb-5"></div>
          <p class="text-sm dark:text-white tracking-wide">
            CODE WITH LOVE AND SANGER
            <font-awesome-icon
              class="pl-1 text-3xl text-cream"
              :icon="['fas', 'mug-hot']"
            />
          </p>
          <div class="flex mt-10 sm:bg-none">
            <router-link
              to="/about"
              class="
                dark:border-white dark:hover:border-cream
                border
                py-2
                px-4
                dark:text-white
                rounded-md
              "
              >About Me</router-link
            >
            <router-link
              to="/contact"
              class="
                dark:border-white dark:hover:border-cream
                border
                py-2
                px-4
                ml-3
                dark:text-white
                rounded-md
              "
              >Contact Me</router-link
            >
          </div>
        </div>
        <div class="mb-5 md:mb-0 md:w-1/2 w-5/6 sm:w-full">
          <lottie-player
            src="https://assets4.lottiefiles.com/private_files/lf30_WdTEui.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          <!-- <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../assets/hero.gif"
          /> -->
        </div>
      </div>
    </section>
    <!-- <Footer /> -->
    <Footer is-fixed />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Loading from "../components/Loading.vue";
import VTypical from "vue-typical";

export default {
  components: {
    VTypical,
    Navbar,
    Footer,
    Loading,
  },
};
</script>