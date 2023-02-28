<script setup lang="ts">
interface MenuItemProps {
  text: string
}
defineProps<MenuItemProps>();
</script>

<template>
  <li>{{ text }}</li>
</template>
