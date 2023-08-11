import { computed, defineAsyncComponent, ref } from "vue";
import RouteNames from "@/router/routeNames";

export interface MenuItem {
  text: string;
  route?: string;
  hash?: string;
}
const showMenu = ref(false);
const menuItems: Array<MenuItem> = [
  {
    text: "About me",
    route: RouteNames.ABOUT_ME,
  },
  {
    text: "Pricing",
    route: RouteNames.PRICING,
    hash: "#pricing",
  },
  {
    text: "Resources",
    route: RouteNames.RESOURCES,
    hash: "#resources",
  },
  {
    text: "Contact me",
    route: RouteNames.CONTACT,
    hash: "#contact",
  },
];

const iconComponent = computed(() => {
  const icon = showMenu.value ? "IconXMark" : "IconBars3BottomRight";
  return defineAsyncComponent(async () => await import(`../icons/${icon}.vue`));
});
const showHidenMenu = () => {
  showMenu.value = !showMenu.value;
};

const itemWasClicked = () => {
  showHidenMenu();
};

export const useMenuTop = () => {
  return {
    showMenu,
    menuItems,
    iconComponent,
    showHidenMenu,
    itemWasClicked,
  };
};
