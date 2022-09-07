import { getField, updateField } from "vuex-map-fields";
const state = () => ({
  items: [],
  voucher: "",
  shipping: {
    country: "",
    province: "",
    postalCode: "",
  },
  shippingFee: 0,
  discount: 0,
});
const mutations = {
  addItemToCart(state, newItem) {
    const existIndex = state.items.findIndex((item) => item.id === newItem.id);

    if (existIndex !== -1) {
      const updatedItem = state.items[existIndex];

      Object.assign(state.items[existIndex], {
        ...updatedItem,
        quantity: updatedItem.quantity + 1,
      });
    } else {
      state.items = [...state.items, newItem];
    }
  },
  removeItemFormCart(state, itemId) {
    state.items = state.items.filter((item) => item.id !== itemId);
  },
  estimateShippingFee(state) {
    state.shippingFee = 15;
  },
  applyVoucher(state) {
    state.discount = 10;
  },
  RESET_CART(state) {
    Object.assign(state, {
      ...state,
      items: [],
      voucher: "",
      shipping: {
        country: "",
        province: "",
        postalCode: "",
      },
      shippingFee: 0,
      discount: 0,
    });
  },
  updateField,
};
const getters = {
  totalPrice(state) {
    let price = 0;
    state.items.forEach((item) => {
      price += item.quantity * item.price;
    });
    return price;
  },
  totalQuantity(state) {
    let quantity = 0;

    state.items.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  },
  getField,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
};
