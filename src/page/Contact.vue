<template>
  <Navbar />
  <section
    class="dark:text-white text-grey-dark body-font container flex h-5/6"
  >
    <div class="container px-5 mx-auto items-center">
      <div class="flex flex-col text-center w-full mb-2">
        <h1 class="text-3xl font-medium title-font mb-4 text-cream">
          CONTACT ME
        </h1>
        <small
          class="
            lg:w-2/3
            mx-auto
            leading-relaxed
            text-grey-dark
            dark:text-white
          "
        >
          would be very happy to be your partner
        </small>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto text-white">
        <form @submit.prevent="sendMe()">
          <div class="flex flex-wrap m-2">
            <div class="p-2 md:w-1/2 w-full">
              <div class="relative">
                <label
                  for="name"
                  class="leading-7 text-sm dark:text-white text-grey-dark"
                  >Name</label
                >
                <input
                  autocomplete="off"
                  placeholder="enter your name"
                  type="text"
                  id="name"
                  v-model="state.name"
                  :class="{ error: v$.name.$errors.length }"
                  class="
                    text-grey-dark
                    w-full
                    border border-cream
                    bg-gray-100 bg-opacity-50
                    rounded
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
                <div
                  class="input-errors mt-1"
                  v-for="error of v$.name.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/2 w-full">
              <div class="relative">
                <label
                  for="email"
                  class="leading-7 text-sm dark:text-white text-grey-dark"
                  >Email</label
                >
                <input
                  autocomplete="off"
                  placeholder="enter your email"
                  type="text"
                  id="email"
                  v-model="state.email"
                  :class="{ error: v$.email.$errors.length }"
                  class="
                    border-cream
                    w-full
                    text-grey-dark
                    bg-gray-100 bg-opacity-50
                    rounded
                    border
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
                <div
                  class="input-errors mt-1"
                  v-for="error of v$.email.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label
                  for="message"
                  class="leading-7 text-sm dark:text-white text-grey-dark"
                  >Message</label
                >
                <textarea
                  placeholder="enter your awesome message :)"
                  id="message"
                  v-model="state.message"
                  :class="{ error: v$.message.$errors.length }"
                  class="
                    w-full
                    border border-cream
                    text-grey-dark
                    bg-gray-100 bg-opacity-50
                    rounded
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
                <div
                  class="input-errors"
                  v-for="error of v$.message.$errors"
                  :key="error.$uid"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="p-2 w-full flex justify-center">
              <vue-recaptcha
                v-if="showRecaptcha"
                siteKey="6LeBk7UbAAAAAPNbY8DBRouehIEr18dK9CC8cbRi"
                size="normal"
                theme="{{localStorage.theme}}"
                :tabindex="0"
                @verify="recaptchaVerified"
                @expire="recaptchaExpired"
                @fail="recaptchaFailed"
                ref="vueRecaptcha"
              >
              </vue-recaptcha>
            </div>
            <div
              class="input-errors mt-1 text-center w-full"
              v-for="error of v$.recaptcha.$errors"
              :key="error.$uid"
            >
              <div class="error-msg">{{ error.$message }}</div>
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
                @click="sendMe()"
                type="submit"
              >
                Send me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import { reactive } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import vueRecaptcha from "vue3-recaptcha2";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

export default {
  mounted() {
    console.log(localStorage.theme);
  },
  setup() {
    const state = reactive({
      name: "",
      email: "",
      message: "",
      recaptcha: "",
    });

    const rules = {
      name: {
        required: helpers.withMessage(
          "This name field cannot be empty 😕",
          required
        ),
      }, // Matches state.firstName
      email: {
        required: helpers.withMessage(
          "This email field cannot be empty 😕",
          required
        ),
        email: helpers.withMessage(
          "This email doesn't look like an email 🤔",
          email
        ),
      }, // Matches state.lastName
      message: {
        required: helpers.withMessage(
          "This message field cannot be empty 😕",
          required
        ),
        minLength: helpers.withMessage(
          "Don't be too short, sir. at least 40 letters 😁",
          minLength(40)
        ),
      }, // Matches state.contact.email},
      recaptcha: {
        required: helpers.withMessage(
          "Make sure you're not a robot!",
          required
        ),
      },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
  components: {
    Navbar,
    Footer,
    vueRecaptcha,
  },
  data() {
    return {
      showRecaptcha: true,
    };
  },
  methods: {
    sendMe() {
      this.v$.$validate();
      if (!this.v$.$error) {
        Swal.fire({
          title: "Please wait!",
          html: "Sending your message..",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            this.postData("https://api.nafaarts.com/contact", {
              captcha: this.state.recaptcha,
              name: this.state.name,
              email: this.state.email,
              message: this.state.message,
            });
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              icon: "success",
              title: `Thankyouu :)`,
              html: "I'll be reply you soon!",
              confirmButtonColor: "#E9B783",
              confirmButtonText: "Okey",
            }).then((result) => {
              if (result.isConfirmed) {
                router.push("/");
                console.log("redirect...");
              }
            });
          }
        });
      }
    },
    recaptchaVerified(response) {
      this.state.recaptcha = response;
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {},
    async postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    },
  },
};
</script>

<style>
.error {
  border: 2px solid red;
}

.error-msg {
  font-size: 0.75rem;
  color: red;
}
</style>