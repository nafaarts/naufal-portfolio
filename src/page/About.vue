<template>
  <Navbar />
  <section class="flex md:flex-row flex-col container">
    <div class="flex items-center justify-center md:w-2/5">
      <img src="../assets/about-image.png" alt="" class="md:h-4/5" />
    </div>
    <div class="md:p-10 mt-5 md:w-3/5 text-justify">
      <h4 class="text-cream text-4xl md:text-left text-center mb-5">
        ABOUT ME
      </h4>
      <hr class="border-cream" />
      <p class="dark:text-white text-grey-dark my-5 text-lg">
        &emsp; At currently 17 years old, i have had the pleasure to turn my
        passion for mobile and web engineering into a job. I believe in learning
        through practically and gained experiences in web development early on
        my teenage years. i am creative open-minded developer.
      </p>
      <p class="dark:text-white text-grey-dark text-lg">
        &emsp;I start a small company called "Nafaarts" beside my freelance job.
        with all my experiences i hope i can make Nafaarts bigger hehe.
      </p>
      <br />
      <router-link class="text-cream hover:text-orange" to="/experience"
        ><a>See My Work</a>
      </router-link>
    </div>
  </section>
  <section class="mt-10 md:p-10 container">
    <h1 class="text-cream text-3xl md:text-left text-center mb-5">
      WHAT CAN I DO?
    </h1>
    <hr class="border-cream mb-5" />
    <div class="flex md:flex-row flex-col">
      <div class="border-cream border-4 rounded-lg p-5 md:m-2 my-2 flex-1">
        <div class="w-24 h-24 m-auto my-8">
          <img src="../assets/fa-solid_code.png" alt="" />
        </div>
        <h1 class="dark:text-white text-grey-dark text-2xl text-center mb-7">
          WEB<br />DEVELOPMENT
        </h1>
      </div>
      <div class="border-cream border-4 rounded-lg p-5 md:m-2 my-2 flex-1">
        <div class="w-24 h-24 m-auto my-8">
          <img src="../assets/akar-icons_mobile-device.png" alt="" />
        </div>
        <h1 class="dark:text-white text-grey-dark text-2xl text-center mb-7">
          MOBILE<br />DEVELOPMENT
        </h1>
      </div>
      <div class="border-cream border-4 rounded-lg p-5 md:m-2 my-2 flex-1">
        <div class="w-24 h-24 m-auto my-8">
          <img src="../assets/bx_bx-video.png" alt="" />
        </div>
        <h1 class="dark:text-white text-grey-dark text-2xl text-center mb-7">
          VIDEO / MUSIC<br />EDITS
        </h1>
      </div>
    </div>
  </section>
  <section class="mt-10 md:p-10 container">
    <h1 class="text-cream text-3xl mb-5 md:text-left text-center">
      TOOLS THAT I USE
    </h1>
    <hr class="border-cream mb-5" />
    <div class="flex flex-col text-grey-dark dark:text-white">
      <div id="programming" class="mb-5">
        <h6 class="md:text-left text-center">PROGRAMMING LANGUAGE</h6>
        <div class="flex flex-wrap">
          <img
            v-for="programming in skill.programmingLanguage"
            :key="programming.name"
            :src="programming.link"
            alt="programming.name"
            class="h-8 md:mr-10 mx-auto md:mx-0 my-5"
          />
        </div>
      </div>
      <div id="frameworks" class="mb-5">
        <h6 class="md:text-left text-center">FRAMEWORKS</h6>
        <div class="flex flex-wrap">
          <img
            v-for="frameworks in skill.frameworks"
            :key="frameworks.name"
            :src="frameworks.link"
            alt="frameworks.name"
            :class="frameworks.class"
            class="h-8 md:mr-10 mx-auto md:mx-0 my-5"
          />
        </div>
      </div>
      <div id="videoMusic" class="mb-5">
        <h6 class="md:text-left text-center">VIDEO / MUSIC EDITS TOOLS</h6>
        <div class="flex flex-wrap">
          <img
            v-for="videoMusic in skill.videoMusic"
            :key="videoMusic.name"
            :src="videoMusic.link"
            alt="videoMusic.name"
            class="h-8 md:mr-10 mx-auto md:mx-0 my-5"
          />
        </div>
      </div>
      <div id="designTool">
        <h6 class="md:text-left text-center">DESIGN TOOLS</h6>
        <div class="flex flex-wrap">
          <img
            v-for="design in skill.design"
            :key="design.name"
            :src="design.link"
            alt="design.name"
            class="h-8 md:mr-10 mx-auto md:mx-0 my-5"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mt-10 md:p-10 container">
    <h1 class="text-cream text-3xl mb-5 md:text-left text-center">EDUCATION</h1>
    <hr class="border-cream mb-5" />
    <div class="flex flex-col dark:text-white text-grey-dark">
      <ul>
        <li
          class="
            my-5
            border-l-4 border-cream
            pl-3
            rounded-l-lg
            md:text-base
            text-sm
          "
          v-for="education in educations.education"
          :key="education.name"
        >
          {{ education.name }} <br class="md:hidden" />
          ( {{ education.year }} )
        </li>
      </ul>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

import skill from "../dataset/skills.json";
import educations from "../dataset/education.json";

export default {
  data() {
    return {
      skill,
      educations,
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.skillsLogo {
  /* height: 40px; */
}
</style>