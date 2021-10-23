<template>
  <main :class="{ dark: dark }">
    <div
      class="bg-white-soft dark:bg-grey-dark overflow-hidden px-5 md:px-12"
      @click="klik"
    >
      <div class="area">
        <!-- <ul class="circles">
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
          <li class="dark:bg-white bg-cream"></li>
        </ul> -->
      </div>
      <div class="context">
        <!-- <button @click="klik()">klik</button> -->
        <router-view></router-view>
        <!-- <Home /> -->
      </div>
    </div>
  </main>
</template>

<script>
import "./tailwind.css";

export default {
  data() {
    return {
      delay: 700,
      clicks: 0,
      timer: null,
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
    } else {
      this.dark = false;
    }
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "F2") {
        this.dark = !this.dark;
        localStorage.theme = this.dark ? "dark" : "light";
      }
    });
  },
  methods: {
    klik(event) {
      this.clicks++;
      if (this.clicks <= 2) {
        this.timer = setTimeout(() => {
          this.clicks = 0;
        }, this.delay);
      } else {
        clearTimeout(this.timer);
        console.log("Triple Clicks");
        this.dark = !this.dark;
        localStorage.theme = this.dark ? "dark" : "light";

        this.clicks = 0;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.context {
  position: relative;
  /* width: 100%; */
  /* z-index: 999; */
}

.area {
  top: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

/* .circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
} */

.circles li:nth-child(7) {
  left: 35%;
  width: 80px;
  height: 80px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.5;
    border-radius: 20%;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 100%;
  }
}
</style>
