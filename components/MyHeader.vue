<template>
	<div class="container">
		<header class="header">
			<a class="logo">
				<img src="@/assets/img/icon/logo.svg" alt="Logo" />
			</a>
			<label class="address">
				<input type="text" class="input input-address" placeholder="Адрес доставки" />
			</label>
			<div class="buttons">
				<span class="user-name"></span>
				<button @click="openAuthModal()" class="button button-primary button-auth">
					<span class="button-auth-svg"></span>
					<span class="button-text">Войти</span>
				</button>
				<button @click="openModalCart()" class="button button-cart" id="cart-button">
					<span class="button-cart-svg"></span>
					<span class="button-text">Корзина</span>
					<span class="button-cart-quantiti" v-if="productForCart.length">
            {{ productForCart.length }}
          </span>
				</button>
				<button class="button button-primary button-out">
					<span class="button-text">Выйти</span>
					<span class="button-out-svg"></span>
				</button>
			</div>
		</header>
	</div>
</template>

<script>

	export default {
		name: 'HeaderComponenet',
		methods: {
			openAuthModal() {
				this.$emit('openModalAuth')
			},
			openModalCart () {
				this.$emit('openModalCart')
			}
		},
		computed: {
			productForCart () {
        return this.$store.getters['cart/getCartProducts'];
      },
		},
		mounted () {
			if(!process.client) return;
			if (sessionStorage.cart) {
        this.$store.commit('cart/getCartFromSession', JSON.parse(window.sessionStorage.cart))
      }
		}
	}

</script>