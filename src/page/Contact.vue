<template>
  <Navbar />
  <!-- <div class="h-50 flex items-center justify-center">
    <h1 class="text-white text-4xl">CONTACT</h1>
  </div> -->
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 mx-auto md:my-8">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="text-3xl font-medium title-font mb-4 text-cream">
          CONTACT ME
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-white">
          would be very happy to be your partner
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto text-white">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-600"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-600"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-600"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border border-gray-300
                  focus:border-indigo-500
                  focus:bg-white
                  focus:ring-2 focus:ring-indigo-200
                  h-32
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  resize-none
                  leading-6
                  transition-colors
                  duration-200
                  ease-in-out
                "
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              class="
                flex
                mx-auto
                text-grey-dark
                bg-cream
                border-0
                py-2
                mt-5
                px-8
                focus:outline-none
                rounded
                text-lg
              "
            >
              Button
            </button>
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

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>