<template>
  <div :class="{ fade: isLoading }">
    <div class="loading dark:bg-grey-dark bg-white-soft">
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_nf2medha.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px"
        loop
        autoplay
      ></lottie-player>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    setInterval(() => {
      this.isLoading = true;
    }, 2000);
  },
};
</script>

<style>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 99999;
}

.fade .loading {
  display: none;
}
</style>