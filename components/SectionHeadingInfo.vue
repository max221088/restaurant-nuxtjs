<template>
	<div class="section-heading-info">
		<h2 class="section-title restaurant-title">{{ getPartnerInfo.name }}</h2>
		<div class="card-info">
			<div class="rating">
				{{ getPartnerInfo.stars }}
			</div>
			<div class="price">От {{ getPartnerInfo.price }} ₽</div>
			<div class="category">{{ getPartnerInfo.kitchen }}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SectionHeadingInfo',
	props: {
		name: String
	},
	computed: {
		getPartnerInfo () {
			let partners = this.$store.getters['getPartners'];
			return partners.find(obj => obj.products.includes(this.name))
			//return partners[this.index]
		}
	}
}
</script>