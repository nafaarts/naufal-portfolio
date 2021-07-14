<template>
  <div class="menu-wrap" :class="{ active: isMenuActive }">
    <div id="toggle" @click="toggle">
      <div class="bar bar1 bg-white"></div>
      <div class="bar bar2 bg-white"></div>
      <div class="bar bar3 bg-white"></div>
    </div>

    <div class="menu-list overflow-hidden">
      <div
        class="
          menus
          mx-auto
          flex
          md:flex-row
          flex-col
          items-center
          justify-center
          bg-grey-dark bg-opacity-95
          border-white border-t-4
          rounded-lg
        "
      >
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <router-link to="/">
            <div
              class="
                w-20
                h-20
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-25 bg-cream
                duration-200
                hover:bg-opacity-75
                text-cream
                mb-5
                flex-shrink-0
              "
            >
              <img src="../assets/logo-n.png" alt="" class="h-10 w-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-white text-lg title-font font-medium mb-3">
                Home
              </h2>
            </div>
          </router-link>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <router-link to="/about">
            <div
              class="
                w-20
                h-20
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-25 bg-cream
                duration-200
                hover:bg-opacity-75
                text-cream
                mb-5
                flex-shrink-0
              "
            >
              <img src="../assets/bx_bxs-user.png" alt="" class="h-10 w-10" />
            </div>
            <div class="flex-grow">
              <h2 class="text-white text-lg title-font font-medium mb-3">
                About
              </h2>
            </div>
          </router-link>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <router-link to="/experience">
            <div
              class="
                w-20
                h-20
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-25 bg-cream
                duration-200
                hover:bg-opacity-75
                text-cream
                mb-5
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
              <h2 class="text-white text-lg title-font font-medium mb-3">
                Experience
              </h2>
            </div>
          </router-link>
        </div>
        <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
          <router-link to="/contact">
            <div
              class="
                w-20
                h-20
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-opacity-25 bg-cream
                duration-200
                hover:bg-opacity-75
                text-cream
                mb-5
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
              <h2 class="text-white text-lg title-font font-medium mb-3">
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
    };
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        this.isMenuActive = !this.isMenuActive;
      }
    });
  },
  methods: {
    toggle: function (event) {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style>
.menu-wrap {
  z-index: 9999;
}
.bar {
  height: 5px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50px;
  transition: 0.5s;
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
  height: 0;
  width: 100%;
  transition: 1s;
  opacity: 0;
}

.menus {
  width: 80%;
  height: 100%;
}

.active .menu-list {
  height: 80vh;
  opacity: 1;
}
</style>