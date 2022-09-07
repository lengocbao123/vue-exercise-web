<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center mb-3 pb-3">
        <div class="col-md-12 heading-section text-center ftco-animate">
          <span class="subheading">Featured Products</span>
          <h2 class="mb-4">Our Products</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <ProductCart
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :thumbnail="product.thumbnail"
          :title="product.title"
          :price="product.price"
          :salePrice="product.salePrice"
          :discount="product.discount"
          :slug="product.slug"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import ProductCart from "../product/ProductCard.vue";
export default {
  components: { ProductCart },

  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("product/fetchProducts");
    });
    return {
      products: computed(() => store.state.product.list),
    };
  },
};
</script>

<style></style>
