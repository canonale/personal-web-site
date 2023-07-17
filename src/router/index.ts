import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const RouteNames = {
  HOME: "home",
  ABOUT: "about",
  ABOUT_ME: "about-me",
};

export const routes = [
  {
    path: "/",
    name: RouteNames.HOME,
    component: HomeView,
  },
  {
    path: "/about",
    name: RouteNames.ABOUT,
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/about-me",
    name: RouteNames.ABOUT_ME,
    component: () => import("../views/AboutView.vue"),
  },
];
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
