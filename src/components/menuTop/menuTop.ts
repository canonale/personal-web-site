import { computed, defineAsyncComponent, ref } from "vue";

const showMenu = ref(false);
const menuItems = ["About me", "Pricing", "Plugins", "Resources"];

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
