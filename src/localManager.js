

export const localManager = {
	changeCurrentCurrency(currency) {
		localStorage.setItem('currentCurrency', currency)
	},

	getCurrentCurrency() {
		return localStorage.getItem('currentCurrency')
	}

}


