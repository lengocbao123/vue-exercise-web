<template>
  <EmptyCart v-if="cartItems.length === 0" />
  <div v-else class="row">
    <div class="col-md-12 ftco-animate">
      <div class="cart-list">
        <table class="table">
          <thead class="thead-primary">
            <tr class="text-center">
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>Product name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              v-for="item in cartItems"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :quantity="item.quantity"
              :thumbnail="item.thumbnail"
              :price="item.price"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import CartItem from "./CartItem.vue";
import EmptyCart from "./EmptyCart.vue";
export default {
  components: { CartItem, EmptyCart },
  setup() {
    const store = useStore();
    return {
      cartItems: computed(() => store.state.cart.items),
    };
  },
};
</script>

<style></style>
