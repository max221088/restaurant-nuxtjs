export const state = () => ({
	cart: []
})

export const mutations = {
	delProductFromCart(state, index) {
		state.cart.splice(index, 1)
	},
	incrementAmount (state, index) {
		let newValue = state.cart[index];
		newValue.amount++;
		state.cart.splice(index, 1, newValue)
		window.localStorage.setItem('cart', JSON.stringify(state.cart));
	},
	decrementAmount(state, index) {
		if (state.cart[index].amount > 1) {
			let newValue = state.cart[index];
			newValue.amount--;
			state.cart.splice(index, 1, newValue)
		}
		window.localStorage.setItem('cart', JSON.stringify(state.cart));
	},
	addProductToCard (state, prod) {
		let copy = 0;
		for (let i = 0; i < state.cart.length; i++) {
			if (state.cart[i].id === prod.id) {
				copy++
			}
		} 
		if (copy === 0) {
			state.cart.push(prod);
		}
		window.localStorage.setItem('cart', JSON.stringify(state.cart));
	},
	getCartFromSession (state, cart) {
		state.cart = cart
	}
}

export const getters = {
	getCartProducts: state => state.cart
}
