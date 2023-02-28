<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { ref } from "vue";

const menuItems = ["About me", "Pricing", "Plugins", "Resources"];
const showMenu = ref(false);
const showHidenMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div class="border">
    <div class="flex flex-row-reverse">
      <button @click="showHidenMenu" class="show-menu">X</button>
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
