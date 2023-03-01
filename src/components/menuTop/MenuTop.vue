<script setup lang="ts">
import IconBars3BottomRight from "../icons/IconBars3BottomRight.vue";
import MenuItem from "./MenuItem.vue";
import { /*computed, defineAsyncComponent, */ref } from "vue";

const menuItems = ["About me", "Pricing", "Plugins", "Resources"];
const showMenu = ref(false);
/*const iconComponent = computed(() => {
  return defineAsyncComponent(() => import(../icons/IconBars3BottomRight.vue))
})*/
const showHidenMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="border">
    <div class="flex flex-row-reverse">
      <button @click="showHidenMenu" class="show-menu">
        <icon-bars-3-bottom-right />
      </button>
    </div>
    <menu v-if="showMenu">
      <ul>
        <MenuItem
          v-for="(item, index) in menuItems"
          :key="index"
          :text="item"
        />
      </ul>
    </menu>
  </div>
</template>
