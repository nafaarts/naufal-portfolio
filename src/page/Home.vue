<template>
  <div class="container h-screen mx-auto">
    <Navbar />
    <section class="body-font">
      <div class="mx-auto flex md:flex-row flex-col-reverse items-center">
        <div
          class="
            lg:flex-grow
            md:w-1/2
            lg:pr-24
            md:pr-16
            flex flex-col
            mb-16
            md:mb-0
            items-center
            text-center
            md:items-start
            md:text-left
            md:ml-7
            w-full
          "
        >
          <h1
            class="
              md:text-6xl
              text-3xl
              mb-4
              font-light
              text-white
              md:mt-0
              mt-10
            "
          >
            FULL-STACK <br />
            <span class="text-cream font-medium">WEB DEVELOPER</span>
            <br />
            BY <span class="text-cream font-medium">NAUFAL</span>
          </h1>
          <div class="bg-white h-1 w-40 mb-5"></div>
          <p class="mb-8 text-sm text-white tracking-wide">
            CODE WITH LOVE AND SANGER
            <font-awesome-icon
              class="pl-1 text-3xl text-cream"
              :icon="['fas', 'mug-hot']"
            />
          </p>
        </div>
        <div
          class="lg:max-w-lg mb-5 md:mb-0 lg:w-full md:w-1/2 w-5/6 sm:w-full"
        >
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../assets/hero.gif"
          />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>