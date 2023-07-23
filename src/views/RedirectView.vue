<script setup lang="ts">
const props = defineProps<{
  url?: string;
}>();
</script>
<template>
  <div class="my-20 py-20 container">
    <h1>Redirecting . . .</h1>
    <p class="animate-bounce">Going to {{ props.url ?? "there!!" }}</p>
  </div>
</template>
