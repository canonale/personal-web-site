<script setup lang="ts">
defineProps<{
  title: string;
  emoji: string;
}>();
</script>
<template>
  <div>
    <div class="emoji">{{ emoji }}</div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>
