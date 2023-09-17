export const state = () => ({
	partners: [],
	products: []
})

export const mutations = {
	setPartners (state, data) {
		state.partners = data
	}	
}

export const getters = {
	getPartners: state => state.partners
}

export const actions = {
	fetchPartners ({commit}) {
		let data = require('@/static/db/partners')
		commit('setPartners', data)
	},
	fetchProductsByRestourant ({}, puth) {
		let data = require(`@/static/db/${puth}`)
		return data
	}
}