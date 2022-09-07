<template>
  <tr class="text-center">
    <td class="product-remove">
      <a href="#" @click.prevent="() => removeItemFormCart(id)"
        ><span class="ion-ios-close"></span
      ></a>
    </td>

    <td class="image-prod">
      <div class="img" :style="`background-image:url(${thumbnail})`"></div>
    </td>

    <td class="product-name">
      <h3 class="text-capitalize">{{ title }}</h3>
      <p>Far far away, behind the word mountains, far from the countries</p>
    </td>

    <td class="price">${{ price }}</td>

    <td class="quantity">
      <div class="input-group mb-3">
        <input
          type="text"
          name="quantity"
          class="quantity form-control input-number"
          :value="quantity"
          min="1"
          max="100"
        />
      </div>
    </td>

    <td class="total">${{ totalPrice }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: {
    id: String,
    title: String,
    quantity: Number,
    thumbnail: String,
    price: Number,
  },
  setup() {
    const store = useStore();
    return {
      removeItemFormCart: (itemId) =>
        store.commit("cart/removeItemFormCart", itemId),
    };
  },
  computed: {
    totalPrice() {
      return this.price * this.quantity;
    },
  },
};
</script>

<style></style>
