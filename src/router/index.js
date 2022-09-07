import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Completed from "../views/Completed.vue";
import Cart from "../views/Cart.vue";

import loadScript from "../helper/loadScript";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/completed",
    name: "Completed",
    component: Completed,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(() => {
  loadScript();
});
export default router;
