export const state = () => ({
	partners: []
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
	}
}