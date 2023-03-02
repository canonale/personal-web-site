<script setup lang="ts">
interface MenuItemProps {
  text: string
}
defineProps<MenuItemProps>();
</script>

<template>
  <li class="my-4">{{ text }}</li>
</template>
