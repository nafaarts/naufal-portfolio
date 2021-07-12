import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../page/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../page/About.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../page/Experience.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../page/Contact.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
