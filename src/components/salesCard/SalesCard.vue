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

const pricing = computed((): string =>
  props.price == 0 ? FREE_TEXT : `${props.price}${PRINCING_TEXT}`
);
</script>
<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <h2 class="price">{{ pricing }}</h2>
    <ul class="bullets">
      <li v-for="(text, key) in bullets" :key="key">{{ text }}</li>
    </ul>
    <div v-if="featured" class="featured">
      <div>{{ FEATURED_TEXT }}</div>
      <div>{{ FEATURED_PRECENTAGE }}</div>
    </div>
  </div>
</template>
