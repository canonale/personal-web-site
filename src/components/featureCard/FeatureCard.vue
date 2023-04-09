<script setup lang="ts">
defineProps<{
  title: string;
  emoji: string;
  subTitle: string;
}>();
</script>
<template>
  <div class="hover:bg-zinc-600 bg-zinc-700 p-6 flex flex-col gap-4 rounded-lg">
    <div class="emoji">
      {{ emoji }}
    </div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
  </div>
</template>
<style scoped>
.emoji {
  @apply  bg-zinc-800 p-3 w-fit text-3xl rounded-lg;
}
.title {
  @apply text-base font-medium text-white;
}
.subTitle {
  @apply text-sm text-white font-normal;
}
</style>
