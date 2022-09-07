<template>
  <div class="col-md-6 col-lg-3 ftco-animate">
    <div class="product">
      <a href="#" class="img-prod"
        ><img class="img-fluid" :src="thumbnail" alt="Colorlib Template" />
        <span v-if="discount" class="status">{{ discount.value }}%</span>
        <div class="overlay"></div>
      </a>
      <div class="text py-3 pb-4 px-3 text-center">
        <h3>
          <a href="#">{{ title }}</a>
        </h3>
        <div class="d-flex">
          <div class="pricing">
            <p class="price">
              <span v-if="price" class="mr-2 price-dc">${{ price }}</span>
              <span class="price-sale">${{ salePrice }}</span>
            </p>
          </div>
        </div>
        <div class="bottom-area d-flex px-3">
          <div class="m-auto d-flex">
            <a
              href="#"
              class="add-to-cart d-flex justify-content-center align-items-center text-center"
            >
              <span><i class="ion-ios-menu"></i></span>
            </a>
            <a
              href="#"
              id="buy-now-btn"
              @click.prevent="addProductToCart()"
              class="buy-now d-flex justify-content-center align-items-center mx-1"
            >
              <span><i class="ion-ios-cart"></i></span>
            </a>
            <a
              href="#"
              class="heart d-flex justify-content-center align-items-center"
            >
              <span><i class="ion-ios-heart"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    id: String,
    thumbnail: String,
    title: String,
    price: Number,
    salePrice: Number,
    discount: { type: Object, required: false },
    slug: String,
  },
  setup() {
    const store = useStore();
    return {
      addItemToCart: (item) => store.commit("cart/addItemToCart", item),
    };
  },
  methods: {
    addProductToCart() {
      this.addItemToCart({
        id: this.id,
        thumbnail: this.thumbnail,
        title: this.title,
        price: this.salePrice,
        slug: this.slug,
        quantity: 1,
      });
    },
  },
};
</script>

<style></style>
