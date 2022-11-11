import { defineStore } from 'pinia'
import { createPinia } from "pinia";
import { API } from "../api";


const pinia = createPinia();

export const useWallet = defineStore('wallet', {
	state: () => {
		return {
			currentCurrency: "EUR",
			currentCurrencies: [],
			currencies: [],
			filterFiat: false,
			currentRates: {}
		}
	},

	actions: {
		changeTypeFiat() {
			this.filterFiat = !this.filterFiat
		},
		changeCurrency(name) {
			this.currentCurrency = name

		},
		setCurrencies(currencies) {
			this.currencies = currencies
		},
		changeCurrencies() {
			//очистка объекта от мусора
			this.currentCurrencies = Object.fromEntries(
				Object.entries(this.currencies[this.currentCurrency]).filter(
					([, obj]) => {
						if (typeof obj === "object") return true;
						return false;
					}
				)
			)
		},
		//обновление курсов
		async updateRates() {
			this.currentRates = await API.getActualyRates(this.currentCurrency)
		},
		//подписка на обновление курсов
		subscribeOnUpdateRates() {
			setInterval(() => {
				this.updateRates()
			}, 1000);
		}
	},

	getters: {
		//фильтр для фиатных валют
		fiatedFilter() {
			if (this.filterFiat) {
				return Object.fromEntries(
					Object.entries(this.currentCurrencies).filter(([, data]) => {
						if (data.fiat) return true;
					})
				);
			}
			return this.currentCurrencies;
		},
		//получение имени валют всех кошельков 
		currencyNames() {
			return Object.keys(this.currencies);
		},

		//подсчет суммы всех валют
		allBallance() {
			let allBallance = 0;


			Object.keys(this.currentCurrencies).forEach((currency) => {
				//если n валюта есть и также курс для нее, то она идет в общий счет
				if (this.currentCurrencies[currency].total && this.currentRates[currency]) {
					allBallance += this.currentCurrencies[currency].total / this.currentRates[currency];
				}
			});

			return allBallance;
		},
	}
})

export default pinia;