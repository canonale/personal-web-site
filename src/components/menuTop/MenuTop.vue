<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { computed, defineAsyncComponent, ref } from "vue";


const menuItems = ["About me", "Pricing", "Plugins", "Resources"];
const showMenu = ref(false);
const iconComponent = computed(() => {
  const icon = showMenu.value ? "IconXMark" : "IconBars3BottomRight";
  return defineAsyncComponent(async () => await import(`../icons/${icon}.vue`));
});
const showHidenMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="relative">
    <div class="flex flex-row-reverse">
      <button @click="showHidenMenu" class="show-menu">
        <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
          <component :is="iconComponent" />
        </transition>
      </button>
    </div>
    <menu class="p-4 inset-x-0 fixed bg-gray-800" v-if="showMenu">
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
