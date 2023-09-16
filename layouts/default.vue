<template>
	<div>
		<MyHeader />
		<nuxt />
		<MyFooter />
	</div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'

export default {
	components: {
		MyHeader,
		MyFooter
	}
}
</script>

<style>

</style>