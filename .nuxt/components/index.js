export { default as ProductCard } from '../../components/ProductCard.vue'
export { default as RestaurantCard } from '../../components/RestaurantCard.vue'
export { default as SectionHeadingInfo } from '../../components/SectionHeadingInfo.vue'
export { default as SiteFooter } from '../../components/SiteFooter.vue'
export { default as SiteHeader } from '../../components/SiteHeader.vue'
export { default as ModalAuth } from '../../components/modal/modalAuth.vue'
export { default as ModalCart } from '../../components/modal/modalCart.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
