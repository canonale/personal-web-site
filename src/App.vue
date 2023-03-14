<script setup lang="ts">
import CallOutFront from "./components/callOutFront/CallOutFront.vue";
import FeatureCardCollection from "./components/featureCard/FeatureCardCollection.vue";
import HeaderMain from "./components/header/HeaderMain.vue";
import SalesCard from "./components/salesCard/SalesCard.vue";
import { salesCardData } from "./components/salesCard/SalesCardData";

const data = salesCardData[0];
</script>

<template>
  <div>
    <header-main />
    <div class="mx-2">
      <call-out-front />
      <feature-card-collection />
      <div class="my-6">xxx</div>
      <sales-card
        :name="data.name"
        :featured="data.featured"
        :price="data.price"
        :bullets="data.bullets"
      />
      <div>Pricing component</div>
      <div>Contact component</div>
      <footer>Footer component</footer>
    </div>
  </div>
</template>
