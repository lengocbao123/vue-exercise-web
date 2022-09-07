import productService from "@/services/product.service";
const state = () => ({
  list: [],
});
const mutations = {
  SET_LIST(state, list) {
    state.list = list;
  },
};
const getters = {};
const actions = {
  async fetchProducts({ commit }) {
    const response = await productService.getAll();
    commit("SET_LIST", response);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
