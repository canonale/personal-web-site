<script setup lang="ts">
import SalesCard from "./SalesCard.vue";
import { salesCardData } from "./SalesCardData";

const data = salesCardData[0];
</script>

<template>
  <div>
    <div>Title</div>
    <div>
      <sales-card
        :name="data.name"
        :featured="data.featured"
        :price="data.price"
        :bullets="data.bullets"
      />
    </div>
  </div>
</template>
