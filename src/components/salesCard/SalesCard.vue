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
  <div class="text-neutral-300 bg-neutral-900 p-9">
    <div>
      <h1 class="name text-2xl uppercase">{{ name }}</h1>
      <h2 class="price text-5xl font-semibold">
        <span>
          {{ pricing }}
        </span>
        <span v-if="!isFree">
          {{ PRINCING_TEXT }}
        </span>
      </h2>
      <ul class="bullets">
        <li v-for="(text, key) in bullets" :key="key">{{ text }}</li>
      </ul>
    </div>
    <div v-if="featured" class="featured">
      <div>{{ FEATURED_TEXT }}</div>
      <div>{{ FEATURED_PRECENTAGE }}</div>
    </div>
  </div>
</template>
