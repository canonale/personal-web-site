<script setup lang="ts">
import FeatureCard from "./FeatureCard.vue";
import { data } from "./FeatureCardData";
</script>
<template>
  <div
    class="flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 container"
  >
    <FeatureCard
      v-for="(card, key) in data"
      :key="key"
      :title="card.title"
      :emoji="card.emoji"
      :sub-title="card.subTitle"
    />
  </div>
</template>
