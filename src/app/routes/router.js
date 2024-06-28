import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "home",
      component: HomePage,
    },
    {
      path: "/statistic",
      name: "statistic",
      component: () => import("@/pages/StatisticPage.vue"),
    },
  ],
});

export default router;
