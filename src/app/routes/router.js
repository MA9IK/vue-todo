import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
// import StatisticPage from "@/pages/StatisticPage.vue";

const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode for cleaner URLs
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
