<template>
  <header class="wrapper__header">
    <h1 class="header__title">Wallet</h1>
    <settings-block ref="settings" />
  </header>
</template>

<script>
import settingsBlock from "./settingsBlock.vue";
export default {
  components: {
    settingsBlock,
  },

  methods: {
    closeSettings() {
      this.$refs.settings.closeSettings();
    },
  },
};
</script>