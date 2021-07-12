<template>
  <nav class="py-8">
    <div class="container flex items-center justify-between flex-wrap">
      <a href="/" class="z-50"
        ><img src="../assets/logo-n.png" alt="Logo N" class="h-10 w-10 m-2"
      /></a>
      <Menu />
      <!-- <img src="../assets/menu.png" alt="Logo N" class="h-10 w-10"> -->
    </div>
  </nav>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>
