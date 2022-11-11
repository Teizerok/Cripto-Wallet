<template>
  <div @click.stop="closeBlocks" class="wrapper">
    <header-block ref="header" />
    <wallet-body />
    <footer-block ref="footer" />
  </div>
</template>

<script>
import { API } from "../api";
import { localManager } from "../localManager";

import footerBlock from "../components/footerBlock.vue";
import walletBody from "../components/walletBody.vue";
import headerBlock from "../components/headerBlock.vue";

import { useWallet } from "../stores/wallet";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    footerBlock,
    walletBody,
    headerBlock,
  },

  methods: {
    ...mapActions(useWallet, [
      "setCurrencies",
      "changeCurrencies",
      "changeCurrency",
      "updateRates",
      "subscribeOnUpdateRates",
    ]),

    closeBlocks(event) {
      //закрытие открытых меню
      if (!event.target.closest(".open")) {
        this.$refs.footer.closeFooter();
        this.$refs.header.closeSettings();
      }
    },
  },

  computed: {
    ...mapState(useWallet, ["currencies", "currentCurrency"]),
  },

  created() {
    //получение имени кошелька из LC
    this.changeCurrency(localManager.getCurrentCurrency());

    //подписка на обновление курсов и force обновление
    this.updateRates();
    this.subscribeOnUpdateRates();
    //установка всех валют
    this.setCurrencies(API.getCurrencies());

    //установка конкретного валютного кошелька
    this.changeCurrencies();
  },
  watch: {
    //перезагрузка курсов валют, изменение кошелька, сохранение имени кошелька в LC
    currentCurrency() {
      this.changeCurrencies();
      this.updateRates();
      localManager.changeCurrentCurrency(this.currentCurrency);
    },
  },
};
</script>



<style lang="scss">
.wrapper {
  height: 100%;
  width: 100%;

  position: relative;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", "Arial";
  font-weight: 400;
}

.wrapper__header {
  width: 100%;
  min-height: 50px;
  display: flex;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  background: linear-gradient(
    270deg,
    #2d4d70 11.98%,
    #213b57 44.89%,
    #14273c 100%
  );
  box-shadow: 0px 18px 21px rgba(34, 39, 47, 0.34);
}

.wrapper__body {
  min-width: 100%;
  width: 100%;
  flex: 1 1 100%;
  padding: 20px 40px 0;
  background: #0c223c;

  mix-blend-mode: normal;
  box-shadow: 0px 18px 34px rgba(34, 39, 47, 0.55);
}

.header__title {
  width: 60px;
  height: 21px;
  font-family: "Raleway";

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: #24a0f5;
  text-shadow: 0px 0px 10px #102032;
}
</style>