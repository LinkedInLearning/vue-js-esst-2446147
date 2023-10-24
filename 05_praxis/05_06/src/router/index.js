import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import ProductListView from "@/views/ProductListView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import ProductListItemView from "@/views/ProductListItemView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },

    {
      path: "/",
      name: "products",
      component: ProductListView,
    },
    {
      path: "/products/:productId",
      name: "productDetail",
      component: ProductListItemView,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
