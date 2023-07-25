import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import ExternalRoutes from "./externalRoutes";
import RouteNames from "./routeNames";

export const routes: RouteRecordRaw[] = [
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
    component: () => import("../views/AboutMeView.vue"),
  },
  {
    path: "/#pricing",
    name: RouteNames.PRICING,
    component: HomeView,
  },
  ...ExternalRoutes,
];
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
