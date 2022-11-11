<template>
  <div class="wrapper__body">
    <div class="currencies">
      <div class="currency" v-for="(currency, i) in fiatedFilter" :key="i">
        <div class="currency__info">
          <div class="currency__name">
            <icon-block :currency="currency.shortName" />
            <p>
              {{ currency.fullName }}
              <span class="currency__name_teaser">
                ({{ currency.shortName }})
              </span>
            </p>
          </div>
          <div class="currency__buttons">
            <button class="currency__button">
              <p>withdraw</p>
            </button>
            <button class="currency__button">
              <p>deposit</p>
            </button>
          </div>
        </div>
        <div class="currency__check">
          <p>Всего: {{ currency.total }} {{ currency.shortName }}</p>
          <p>В заявках: {{ currency.reserved }} {{ currency.shortName }}</p>
          <p class="currency__check_current-currency">
            {{
              normalizeCurrency(
                actualExchange(currency.total, currency.shortName)
              )
            }}
            {{ currentCurrency }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useWallet } from "../stores/wallet";
import { mapState } from "pinia";
import iconBlock from "./iconBlock.vue";

export default {
  components: {
    iconBlock,
  },

  computed: {
    ...mapState(useWallet, [
      "currentCurrency",
      "fiatedFilter",
      "currencies",
      "currentRates",
    ]),
  },

  methods: {
    //нормализация отображения актуальноготкурса для конкретной валюты
    actualExchange(value, name) {
      return value / this.currentRates[name];
    },

    //нормализация отображения валюты
    normalizeCurrency(value) {
      // если валюта равна 0 или с ней что то не так будет возращен 0
      if (!value) return 0;

      if (this.currencies[this.currentCurrency].fiat) {
        return value.toFixed(2);
      }
      return value.toFixed(6);
    },
  },
};
</script>

<style scoped lang="scss">
.currencies {
  & div:last-child {
    margin: 0;
  }
}

.currency {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 0 15px 0;
  margin: 0 0 10px 0;

  &::before {
    content: "";
    bottom: 0px;
    left: 0;
    position: absolute;
    color: #fff;
    width: 100%;
    height: 1px;
    opacity: 0.21;
    background-image: linear-gradient(
      to right,
      rgba(36, 160, 245) 50%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 10px 2px;
    background-repeat: repeat-x;
  }

  &:last-child::before {
    background-image: none;
  }

  &:last-child {
    margin: 0;
    padding: 0;
  }
}

.currency__info {
  padding: 5px 0 0 0;
}

.currency__name {
  display: flex;
  margin: 0 0 20px 0;
  font-size: 16px;
  padding: 0 0 0 20px;
  position: relative;
  color: #ffffff;
  font-family: "Raleway";

  .currency__name_teaser {
    color: rgba(166, 174, 191, 1);
  }

  p {
    padding: 0 0 0 4px;
  }
}

.currency__buttons button:last-child {
  margin: 0;
}

.currency__button {
  width: 130px;
  height: 30px;
  text-transform: uppercase;
  margin: 0 15px 0 0;
  position: relative;
  background: rgba(36, 160, 245, 0.2);
  border-radius: 1.6px;
  transition: 500ms;
  &:hover {
    p {
      color: #0d1c47;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 30px;
    background: rgba(36, 160, 245, 1);
    border-radius: 5px;
    transition: all 1s ease;
  }

  &:hover:before {
    width: 100%;
  }

  p {
    position: relative;
    z-index: 10;
    font-style: normal;
    font-family: "Raleway";
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #24a0f5;
    transition: all 1s ease;
  }
}

.currency__check {
  text-align: right;
  p {
    color: #ffffff;
    margin: 0 0 10px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .currency__check_current-currency {
    text-transform: uppercase;
    color: #24a0f5;
    margin: 0;
  }
}
</style>