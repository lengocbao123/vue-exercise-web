<template>
  <div v-if="cartItems.length === 0"></div>
  <div v-else class="row justify-content-end">
    <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
      <div class="cart-total mb-3">
        <h3>Coupon Code</h3>
        <p>Enter your coupon code if you have one</p>
        <form @submit.prevent="() => applyVoucher()" class="info">
          <div class="form-group">
            <label for="">Coupon code</label>
            <input
              type="text"
              class="form-control text-left px-3"
              v-model="voucher"
              required
            />
          </div>
          <button class="btn btn-primary py-3 px-4">Apply Coupon</button>
        </form>
      </div>
    </div>
    <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
      <div class="cart-total mb-3">
        <h3>Estimate shipping and tax</h3>
        <p>Enter your destination to get a shipping estimate</p>
        <form @submit.prevent="() => estimateShippingFee()" class="info">
          <div class="form-group">
            <label for="">Country</label>
            <input
              type="text"
              class="form-control text-left px-3"
              required
              v-model="country"
            />
          </div>
          <div class="form-group">
            <label for="country">State/Province</label>
            <input
              type="text"
              required
              class="form-control text-left px-3"
              v-model="province"
            />
          </div>
          <div class="form-group">
            <label for="country">Zip/Postal Code</label>
            <input
              type="text"
              required
              class="form-control text-left px-3"
              v-model="postalCode"
            />
          </div>

          <button class="btn btn-primary py-3 px-4">Estimate</button>
        </form>
      </div>
    </div>
    <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
      <div class="cart-total mb-3">
        <h3>Cart Totals</h3>
        <p class="d-flex">
          <span>Subtotal</span>
          <span>${{ subtotal }}</span>
        </p>
        <p class="d-flex">
          <span>Delivery</span>
          <span>${{ shippingFee }}</span>
        </p>
        <p class="d-flex">
          <span>Discount</span>
          <span>${{ discount }}</span>
        </p>
        <hr />
        <p class="d-flex total-price">
          <span>Total</span>
          <span>${{ total }}</span>
        </p>
      </div>
      <button @click="checkout" class="btn btn-primary py-3 px-4">
        Proceed to Checkout
      </button>
      <p v-if="errorMessage !== ''" class="text-danger">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { mapFields } from "vuex-map-fields";
import { useRouter } from "vue-router";
export default {
  computed: {
    ...mapFields("cart", [
      "shipping.country",
      "shipping.province",
      "shipping.postalCode",
    ]),
    ...mapFields("cart", ["voucher"]),
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const items = computed(() => store.state.cart.items);
    const shippingFee = computed(() => store.state.cart.shippingFee);
    const subtotal = computed(() => store.getters["cart/totalPrice"]);
    const discount = computed(() => store.state.cart.discount);
    const total = computed(() =>
      Math.max(shippingFee.value + subtotal.value - discount.value, 0)
    );
    const errorMessage = ref("");
    return {
      router,
      cartItems: items,
      shippingFee: shippingFee,
      subtotal: subtotal,
      discount: discount,
      total: total,
      estimateShippingFee: () => store.commit("cart/estimateShippingFee"),
      applyVoucher: () => store.commit("cart/applyVoucher"),
      RESET_CART: () => store.commit("cart/RESET_CART"),
      errorMessage,
    };
  },
  methods: {
    checkout() {
      if (this.cartItems.length === 0) {
        return;
      }
      if (
        this.country === "" ||
        this.province === "" ||
        this.postalCode == ""
      ) {
        this.errorMessage = "Please fill in shipping address";
        return;
      }
      this.RESET_CART();
      this.router.push("/completed");
    },
  },
};
</script>

<style></style>
