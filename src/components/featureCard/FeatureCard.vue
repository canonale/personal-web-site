<script setup lang="ts">
defineProps<{
  title: string;
  emoji: string;
  subTitle: string;
}>();
</script>
<template>
  <div class="feature-card">
    <div class="emoji">
      {{ emoji }}
    </div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
  </div>
</template>
<style scoped>
.feature-card {
  @apply bg-gray-100 hover:bg-gray-200;
  @apply dark:hover:bg-zinc-600 dark:bg-zinc-700;
  @apply p-6 flex flex-col gap-4 rounded-lg;
}
.emoji {
  @apply dark:bg-zinc-800 bg-gray-300 p-3 w-fit text-3xl rounded-lg;
}
.title {
  @apply text-base font-medium dark:text-white text-gray-600;
}
.subTitle {
  @apply text-sm dark:text-white text-gray-400 font-normal;
}
</style>
