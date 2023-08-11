<script setup lang="ts">
import { router } from "@/router";

export interface MenuItemProps {
  text: string;
  route?: string;
  hash?: string;
}
const props = defineProps<MenuItemProps>();
const emit = defineEmits(["clicked"]);

const onClick = () => {
  emit("clicked");
  router.push({
    name: props.route,
    hash: props.hash,
  });
};
</script>

<template>
  <li class="my-4">
    <div class="menu-item" @click="onClick">{{ text }}</div>
  </li>
</template>

<style scoped>
.menu-item {
  @apply text-gray-700 hover:text-indigo-600;
  @apply dark:text-gray-300;
  @apply transition-colors duration-500;
  @apply cursor-pointer;
}
</style>
