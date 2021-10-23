<template>
  <main>
    <div class="fixed h-full w-full" id="particles-js"></div>

    <div class="overflow-hidden px-5 absolute top-0 w-full md:px-12 z-0">
      <div class="context">
        <!-- <button @click="klik()">klik</button> -->
        <router-view :toggle="toggleDark"></router-view>
        <!-- <Home /> -->
      </div>
    </div>
  </main>
</template>

<script>
import "./tailwind.css";

export default {};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

.context {
  position: relative;
}
</style>
