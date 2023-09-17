<template>
	<div>
		<MyHeader @openModalAuth="openModalAuth()" @openModalCart="openModalCart()"/>
		<nuxt />
		<MyFooter />
		<ModalAuth ref="modalAuth" />
		<ModalCart ref="modalCart" />
	</div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import ModalAuth from '../components/modal/modalAuth.vue';
import ModalCart from '../components/modal/modalCart.vue';

export default {
	components: {
		MyHeader,
		MyFooter,
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