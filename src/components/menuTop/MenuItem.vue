<script setup lang="ts">
export interface MenuItemProps {
  text: string;
  route?: string;
  hash?: string;
}
defineProps<MenuItemProps>();
</script>

<template>
  <li class="my-4">
    <router-link class="menu-item" :to="{ name: route, hash: hash }">{{
      text
    }}</router-link>
  </li>
</template>

<style scoped>
.menu-item {
  @apply text-gray-700 hover:text-indigo-600;
  @apply dark:text-gray-300;
  @apply transition-colors duration-500;
}
</style>
