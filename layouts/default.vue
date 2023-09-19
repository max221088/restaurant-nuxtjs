<template>
	<div>
		<SiteHeader @openModalAuth="openModalAuth()" @openModalCart="openModalCart()"/>
		<nuxt />
		<SiteFooter />
		<ModalAuth ref="modalAuth" />
		<ModalCart ref="modalCart" />
	</div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import ModalAuth from '../components/modal/modalAuth.vue';
import ModalCart from '../components/modal/modalCart.vue';

export default {
	components: {
		SiteHeader,
		SiteFooter,
		ModalAuth,
		ModalCart
	},
	methods: {
		openModalAuth () {
			this.$refs.modalAuth.openModalAuth()
		},
		openModalCart () {
			this.$refs.modalCart.openModalCart()
		}
	}
}
</script>

<style>

</style>