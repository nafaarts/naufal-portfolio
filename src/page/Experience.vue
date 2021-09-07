<template>
  <Navbar />
  <div class="h-50 flex items-center justify-center">
    <h1 class="text-white text-4xl">EXPERIENCE</h1>
  </div>

  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 md:px-40 py-16 mx-auto">
      <div class="-my-8 divide-y-2 divide-gray-100 text-white">
        <div
          v-for="experience in experiences.experience"
          :key="experience.place"
          class="py-16 flex flex-wrap md:flex-nowrap"
        >
          <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span class="font-semibold title-font text-gray-700">{{
              experience.position
            }}</span>
            <span class="mt-1 text-gray-500 text-sm">{{
              experience.year
            }}</span>
          </div>
          <div class="md:flex-grow">
            <h2 class="text-2xl font-medium text-cream title-font mb-2">
              {{ experience.place }}
            </h2>
            <p class="leading-relaxed z-50">
              {{ experience.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import experiences from "../dataset/experience.json";

export default {
  data() {
    return {
      experiences,
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script> 
