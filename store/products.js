
export const actions = {
	fetchProductsByRestourant ({}, puth) {
		let data = require(`@/static/db/${puth}`)
		return data
	}
}