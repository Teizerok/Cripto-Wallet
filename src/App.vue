<template>
  <wallet-block />
</template>

<script>
import walletBlock from "./components/walletBlock.vue";

export default {
  name: "App",
  components: {
    walletBlock,
  },
};
</script>

<style lang="scss">
@import "./scss/nullstyle.scss";
</style>
