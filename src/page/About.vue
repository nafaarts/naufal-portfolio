<template>
  <Navbar />
  <section class="flex md:flex-row flex-col">
    <div class="flex items-center justify-center md:w-2/5">
      <img src="../assets/about-image.png" alt="" class="md:h-4/5" />
    </div>
    <div class="p-10 md:w-3/5 text-justify md:text-left">
      <h4 class="text-cream text-4xl mb-5">ABOUT ME</h4>
      <hr class="border-cream" />
      <p class="text-white my-5 text-lg">
        At currently 17 years old, i have had the pleasure to turn my passion
        for mobile and web engineering into a job. I believe in learning through
        practically and gained experiences in web development early on my
        teenage years. i am creative open-minded developer.
      </p>
      <p class="text-white text-lg">
        I start a small company called "Nafaarts" beside my freelance job. with
        all my experiences i hope i can make Nafaarts bigger hehe.
      </p>
      <br />
      <router-link class="text-cream hover:text-orange" to="/experience"
        ><a>See My Work</a>
      </router-link>
    </div>
  </section>
  <section class="mt-10 p-10">
    <h1 class="text-cream text-3xl mb-5">WHAT CAN I DO?</h1>
    <hr class="border-cream mb-5" />
    <div class="flex md:flex-row flex-col">
      <div class="border-cream border-4 rounded-lg p-5 md:m-2 my-2 flex-1">
        <div class="w-24 h-24 m-auto my-8">
          <img src="../assets/fa-solid_code.png" alt="" />
        </div>
        <h1 class="text-white text-2xl text-center mb-7">
          WEB<br />DEVELOPMENT
        </h1>
      </div>
      <div class="border-cream border-4 rounded-lg p-5 md:m-2 my-2 flex-1">
        <div class="w-24 h-24 m-auto my-8">
          <img src="../assets/akar-icons_mobile-device.png" alt="" />
        </div>
        <h1 class="text-white text-2xl text-center mb-7">
          MOBILE<br />DEVELOPMENT
        </h1>
      </div>
      <div class="border-cream border-4 rounded-lg p-5 md:m-2 my-2 flex-1">
        <div class="w-24 h-24 m-auto my-8">
          <img src="../assets/bx_bx-video.png" alt="" />
        </div>
        <h1 class="text-white text-2xl text-center mb-7">
          VIDEO / MUSIC<br />EDITS
        </h1>
      </div>
    </div>
  </section>

  <section class="mt-10 p-10">
    <h1 class="text-cream text-3xl mb-5">TOOLS THAT I USE</h1>
    <hr class="border-cream mb-5" />
    <div class="flex flex-col text-white">
      <div id="programming">
        <h6>PROGRAMMING LANGUAGE</h6>
      </div>
    </div>
  </section>
  <!-- <Footer /> -->
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