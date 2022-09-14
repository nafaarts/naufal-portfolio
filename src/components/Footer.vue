<template>
  <footer
    class="text-white body-font footer"
    :class="{ 'md:isFixed': isFixed }"
  >
    <div class="relative">
      <div
        class="
          container
          py-8
          mx-auto
          flex
          items-center
          justify-between
          flex-wrap
          md:flex-row
          flex-col flex-col-reverse
        "
      >
        <p class="text-sm dark:text-white text-grey-dark md:my-0 my-5">
          Copyright ©
          <!-- <span class="md:inline hidden"> - </span> -->
          <a
            href="https://www.instagram.com/nfalldh"
            class="dark:text-white"
            rel="noopener noreferrer"
            target="_blank"
            >nfalldh</a
          >
          2022
        </p>
        <span
          class="
            inline-flex
            sm:ml-auto
            sm:mt-0
            mt-4
            justify-center
            sm:justify-start
          "
        >
          <a
            class="ml-3 dark:text-white text-grey-dark"
            href="https://twitter.com/nfalldh_"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              ></path>
            </svg>
          </a>
          <a
            class="ml-3 dark:text-white text-grey-dark"
            href="https://www.instagram.com/nfalldh"
            target="_blank"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
              ></path>
            </svg>
          </a>
          <a
            class="ml-3 dark:text-white text-grey-dark"
            href="https://www.linkedin.com/in/nfalldh/"
            target="_blank"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isFixed: this.isFixed,
    };
  },
  props: {
    isFixed: Boolean,
  },
};
</script>

<style>
.footer {
  width: 100%;
}

.isFixed {
  position: fixed;
  bottom: 5px;
  left: 0px;
}
</style>
