<script setup lang="ts">
// import type { SalesCardData } from "./SalesCardData";
export interface SalesCardData {
  name: string;
  bullets: Array<string>;
  price: number;
  featured: boolean;
}

defineProps<SalesCardData>();
</script>
<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <ul class="bullets">
      <li v-for="(text, key) in bullets" :key="key">{{ text }}</li>
    </ul>
    <div v-if="featured" class="featured">8%</div>
  </div>
</template>
