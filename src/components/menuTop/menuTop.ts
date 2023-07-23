import { computed, defineAsyncComponent, ref } from "vue";
import RouteNames from "@/router/routeNames";

export interface MenuItem {
  text: string;
  route?: string;
}
const showMenu = ref(false);
const menuItems: Array<MenuItem> = [
  {
    text: "About me",
    route: RouteNames.ABOUT_ME,
  },
  {
    text: "Pricing",
    route: "twitter",
  },
  {
    text: "Plugins",
    route: RouteNames.HOME,
  },
  {
    text: "Resources",
    route: RouteNames.HOME,
  },
];

const iconComponent = computed(() => {
  const icon = showMenu.value ? "IconXMark" : "IconBars3BottomRight";
  return defineAsyncComponent(async () => await import(`../icons/${icon}.vue`));
});
const showHidenMenu = () => {
  showMenu.value = !showMenu.value;
};

export const useMenuTop = () => {
  return {
    showMenu,
    menuItems,
    iconComponent,
    showHidenMenu,
  };
};
