import { createRouter, createWebHistory } from "vue-router";
import StoreView from "../views/StoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "store",
      component: StoreView,
    },
    {
      path: "/group-android",
      name: "android",
      component: () => import("../views/AView.vue"),
    },
    {
      path: "/group-apple",
      name: "apple",
      component: () => import("../views/AView.vue"),
    },
  ],
});

export default router;
