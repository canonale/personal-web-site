<script setup lang="ts">
import SalesCard from "./SalesCard.vue";
import { salesCardData, PRICING_TITLE } from "./SalesCardData";
</script>

<template>
  <div class="mt-16 pt-16 border-t border-neutral-600">
    <div class="py-4 px-2">
      <h1 class="main-title text-center">{{ PRICING_TITLE }}</h1>
    </div>
    <div class="flex flex-col gap-4 my-8 md:items-center">
      <sales-card
        v-for="(salesCard, key) in salesCardData"
        :key="key"
        :name="salesCard.name"
        :featured="salesCard.featured"
        :price="salesCard.price"
        :bullets="salesCard.bullets"
      />
    </div>
  </div>
</template>
