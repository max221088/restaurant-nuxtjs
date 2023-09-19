
export const actions = {
	fetchProductsByRestourant ({}, puth) {
		//console.log(puth)
		let data = require(`@/static/db/${puth}.json`)
		return data
	}
}