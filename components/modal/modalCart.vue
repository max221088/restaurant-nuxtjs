<template>
	<div class="modal modal-cart" v-bind:class="{'is-open': isOpen}">
		<div class="modal-dialog">
			<div class="modal-header">
				<h3 class="modal-title">Корзина</h3>
				<button class="close" @click="openModalCart()">&times;</button>
			</div>
			<!-- /.modal-header -->
			<div class="modal-body" v-for="product, index in productForCart" :key="index">
				<div class="food-row">
					<button class="counter-del-button" @click="delProductFromCart(index)">X</button>
					<span class="food-name">{{ product.name }}</span>
					<strong class="food-price">{{ product.price }} ₽</strong>
					<div class="food-counter">
						<button class="counter-button" @click="decrement(index)">-</button>
						<span class="counter">{{ product.amount }}</span>
						<button class="counter-button" @click="increment(index)">+</button>
					</div>
				</div>
				<!-- /.foods-row -->
			</div>
			<span class="food-name" v-if="!productForCart.length">КОРЗИНА ПУСТАЯ</span>
			<!-- /.modal-body -->
			<div class="modal-footer">
				<span class="modal-pricetag">{{sumOrder}} ₽</span>
				<div class="footer-buttons">
					<button class="button button-primary">Оформить заказ</button>
					<button class="button clear-cart" @click="openModalCart()">Отмена</button>
				</div>
			</div>
			<!-- /.modal-footer -->
		</div>
		<!-- /.modal-dialog -->
	</div>
</template>

<script>
export default {
		name: 'modalAuth',
		data: () => {
			return {
				isOpen: false
			}
		},
		computed: {
			sumOrder () {
        let sum = 0;
        this.productForCart.forEach(prod => {
          sum = sum +(prod.price * prod.amount) 
        })
        return sum
      },
			productForCart () {
        return this.$store.getters['cart/getCartProducts'];
      },
		},
		methods: {
			delProductFromCart(index) {
				this.$store.commit('cart/delProductFromCart', index)
			},
			increment(index) {
        this.$store.commit('cart/incrementAmount', index)
      },
      decrement(index) {
        this.$store.commit('cart/decrementAmount', index) 
      },
			openModalCart () {
				this.isOpen = !this.isOpen
			}
		}
	}
</script>