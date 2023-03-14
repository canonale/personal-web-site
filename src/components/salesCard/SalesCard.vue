<script setup lang="ts">
import { computed } from "vue";
import {
  FREE_TEXT,
  PRINCING_TEXT,
  FEATURED_TEXT,
  FEATURED_PRECENTAGE,
} from "./SalesCardData";
export interface SalesCardData {
  name: string;
  bullets: Array<string>;
  price: number;
  featured: boolean;
}

const props = defineProps<SalesCardData>();
const isFree = computed((): boolean => props.price == 0);
const pricing = computed((): string =>
  isFree.value ? FREE_TEXT : String(props.price)
);
</script>
<template>
  <div class="sales-card">
    <div class="flex flex-col gap-4">
      <h1 class="name text-2xl uppercase">{{ name }}</h1>
      <h2 class="price text-5xl font-semibold">
        <span>
          {{ pricing }}
        </span>
        <span v-if="!isFree" class="text-3xl">
          {{ PRINCING_TEXT }}
        </span>
      </h2>
      <ul class="bullets list-disc">
        <li v-for="(text, key) in bullets" :key="key" class="text-sm leading-9">
          {{ text }}
        </li>
      </ul>
    </div>
    <div v-if="featured" class="featured">
      <div>{{ FEATURED_TEXT }}</div>
      <div>{{ FEATURED_PRECENTAGE }}</div>
    </div>
  </div>
</template>

<style scoped>
.sales-card {
  @apply text-neutral-300;
  @apply duration-700 transition-all hover:bg-neutral-900 hover:scale-105;
  @apply border border-neutral-600 rounded-md;
  @apply p-9 h-[33.5rem];
}
</style>
