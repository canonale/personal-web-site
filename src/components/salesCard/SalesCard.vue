<script setup lang="ts">
import { computed } from "vue";
import ButtonCta from "../button/ButtonCta.vue";
import {
  BUTTON_TEXT,
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
    <div v-if="featured" class="featured">
      <div class="-rotate-45 text-bold">
        <div class="text-xs leading-none drop-shadow">
          {{ FEATURED_TEXT }}
        </div>
        <div class="text-lg leading-none drop-shadow">
          {{ FEATURED_PRECENTAGE }}
        </div>
      </div>
    </div>
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
    <div>
      <button-cta class="w-full">{{ BUTTON_TEXT }}</button-cta>
    </div>
  </div>
</template>

<style scoped>
.sales-card {
  @apply relative;
  @apply text-neutral-300;
  @apply bg-gray-800 hover:bg-neutral-900;
  @apply duration-700 transition-all hover:scale-105;
  @apply border border-neutral-600 rounded-md;
  @apply p-9 h-[33.5rem] overflow-hidden;
  @apply flex flex-col justify-between;
  @apply md:w-[26rem];
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.36);
}
.sales-card:hover {
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.6);
}
.featured {
  @apply text-white;
  @apply rotate-45 absolute -right-14 -top-14 w-28 h-28;
  @apply flex items-end justify-center pb-1.5;
  @apply transition-all hover:-right-16 hover:w-[140px];
  background: linear-gradient(136.57deg, #9747ff 20.31%, #47caff 100%);
  box-shadow: inset 0px 0px 4px rgba(71, 202, 255, 0.62);
}
</style>
