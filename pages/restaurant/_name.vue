<template>
  <main class="main">
		<div class="container">
			<section class="menu">
				<div class="section-heading">
					<SectionHeadingInfo :name="name" />
					<!-- /.card-info --> 
					<div class="filter-section">
							<select @change="sortByPrice()" v-model="sortParam" class="select">
								<option value="1">Сначала дорогие</option>
								<option value="2">Сначала дешевые</option>
							</select>
						</div>
				</div>
				<div class="cards cards-menu" v-if="products">
					<div class="card" v-for="product in products" :key="product.id">
						<ProductCard :product="product"></ProductCard>
					</div>
					<!-- /.card -->
				</div>
				<!-- /.cards -->
			</section>
		</div>
		<!-- /.container -->
	</main>
	
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import SectionHeadingInfo from '@/components/SectionHeadingInfo.vue'

	export default {
		name: 'restorantViev',
		components: {
			ProductCard,
			SectionHeadingInfo
		},
		async asyncData({params, error, store}) {
			try {
				if (!store.getters.getPartners.length) {
					await store.dispatch('fetchPartners')
				}
				const name = params.name;
				const products = await store.dispatch('products/fetchProductsByRestourant', params.name)
				return {products, name}
			} catch (e) {
				error(e)
			}
		},
		data () {
			return {
				sortParam: '1'
			}
		},
		methods: {
			sortByPrice() {
				this.products.sort(function(a,b) {
					if (this.sortParam == '1') {
						return (b.price - a.price)
					} else {
						return (a.price - b.price)
					}
				}.bind(this))
			}
		}
	}
</script>