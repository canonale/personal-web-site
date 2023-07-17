import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const RouteNames = {
  HOME: "home",
  ABOUT: "about",
  ABOUT_ME: "about-me",
};
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNames.HOME,
      component: HomeView,
    },
    {
      path: "/about",
      name: RouteNames.ABOUT,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
