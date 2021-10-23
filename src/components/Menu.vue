<template>
  <div class="menu-wrap" :class="{ active: isMenuActive }">
    <div class="toggleBtn" id="toggle" @click="toggle">
      <div class="bar bar1 bg-grey-dark dark:bg-white"></div>
      <div class="bar bar2 bg-grey-dark dark:bg-white"></div>
      <div class="bar bar3 bg-grey-dark dark:bg-white"></div>
    </div>

    <div class="menu-list shadow-2xl overflow-hidden">
      <div
        class="
          menus
          mx-auto
          flex
          md:flex-row
          flex-col
          items-center
          justify-center
          dark:bg-grey-dark
          bg-white-soft
          dark:border-white
          border-cream border-t-4
          rounded-lg
        "
      >
        <div
          class="
            md:p-4 md:w-1/3
            h-1/4
            flex
            md:flex-col
            flex-wrap
            text-center
            content-center
          "
        >
          <router-link to="/">
            <div
              class="
                md:w-20 md:h-20
                w-14
                h-14
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-75
                dark:bg-opacity-25
                bg-cream
                duration-200
                hover:bg-opacity-100
                text-cream
                md:mb-5
                mb-3
                flex-shrink-0
              "
            >
              <img
                src="../assets/logo-n.png"
                alt=""
                class="md:h-10 md:w-10 h-7"
              />
            </div>
            <div>
              <h2
                class="
                  dark:text-white
                  text-lg
                  title-font
                  text-sm
                  md:text-base md:font-medium md:mb-3
                "
              >
                Home
              </h2>
            </div>
          </router-link>
        </div>
        <div
          class="
            md:p-4 md:w-1/3
            h-1/4
            flex
            md:flex-col
            flex-wrap
            text-center
            content-center
          "
        >
          <router-link to="/about">
            <div
              class="
                md:w-20 md:h-20
                w-14
                h-14
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-75
                dark:bg-opacity-25
                bg-cream
                duration-200
                hover:bg-opacity-100
                text-cream
                md:mb-5
                mb-3
                flex-shrink-0
              "
            >
              <img src="../assets/bx_bxs-user.png" alt="" class="h-10 w-10" />
            </div>
            <div class="flex-grow">
              <h2
                class="
                  dark:text-white
                  text-lg
                  title-font
                  text-sm
                  md:text-base md:font-medium
                  mb-3
                "
              >
                About
              </h2>
            </div>
          </router-link>
        </div>
        <div
          class="
            md:p-4 md:w-1/3
            h-1/4
            flex
            md:flex-col
            flex-wrap
            text-center
            content-center
          "
        >
          <router-link to="/experience">
            <div
              class="
                md:w-20 md:h-20
                w-14
                h-14
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-75
                dark:bg-opacity-25
                bg-cream
                duration-200
                hover:bg-opacity-100
                text-cream
                md:mb-5
                mb-3
                flex-shrink-0
              "
            >
              <img
                src="../assets/ic_outline-work.png"
                alt=""
                class="h-10 w-10"
              />
            </div>
            <div class="flex-grow">
              <h2
                class="
                  dark:text-white
                  text-lg
                  title-font
                  text-base text-sm
                  md: md:font-medium
                  mb-3
                "
              >
                Experience
              </h2>
            </div>
          </router-link>
        </div>
        <div
          class="
            md:p-4 md:w-1/3
            h-1/4
            flex
            md:flex-col
            flex-wrap
            text-center
            content-center
          "
        >
          <router-link to="/contact">
            <div
              class="
                md:w-20 md:h-20
                w-14
                h-14
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-75
                dark:bg-opacity-25
                bg-cream
                duration-200
                hover:bg-opacity-100
                text-cream
                md:mb-5
                mb-3
                flex-shrink-0
              "
            >
              <img
                src="../assets/ic_sharp-connect-without-contact.png"
                alt=""
                class="h-10 w-10"
              />
            </div>
            <div class="flex-grow">
              <h2
                class="
                  dark:text-white
                  text-lg
                  title-font
                  text-base text-sm
                  md: md:font-medium
                  mb-3
                "
              >
                Contact
              </h2>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
      delay: 700,
      clicks: 0,
      timer: null,
    };
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.isMenuActive = !this.isMenuActive;
      }
    });
    window.addEventListener("click", (e) => {});
  },
  methods: {
    toggle: function (event) {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style>
.toggleBtn {
  height: 31px;
}

.menu-wrap {
  z-index: 9999;
}
.bar {
  height: 5px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50px;
  transition: 0.4s;
}

.bar1 {
  width: 40px;
}

.bar2 {
  width: 20px;
  margin-left: 20px;
}

.bar3 {
  width: 30px;
  margin-left: 10px;
}

.active .bar {
  margin: 0%;
}

.active .bar1 {
  transform: translateY(5px) rotate(45deg);
  margin: 0;
  margin-top: 22px;
}

.active .bar2 {
  transform: rotate(-45deg);
  width: 40px;
  margin: 0;
}

.active .bar3 {
  transform: translateY(50px) translateX(10px);
  opacity: 0;
}

.menu-list {
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  height: 0;
  width: 100%;
  transition: 0.5s;
  opacity: 0;
  animation-timing-function: linear;
}

.menus {
  width: 100%;
  height: 100%;
}

.active .menu-list {
  height: 84vh;
  opacity: 1;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .menu-list {
    width: 70%;
    height: 100vh;
    left: -80%;
    opacity: 0;
  }

  .active .menu-list {
    height: 100%;
    width: 70%;
    left: 0;
    opacity: 1;
  }
}
</style>