import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { routes } from "./src/route";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  sitemap: {
    baseURL: "https://n.nafaarts.com",
    routes,
  },
});
