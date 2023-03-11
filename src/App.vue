<script setup lang="ts">
import CallOutFront from "./components/callOutFront/CallOutFront.vue";
import FeatureCardCollection from "./components/featureCard/FeatureCardCollection.vue";
import HeaderMain from "./components/header/HeaderMain.vue";
</script>

<template>
  <div>
    <header-main />
    <div class="mx-2">
      <call-out-front />
      <feature-card-collection />
      <div>Pricing component</div>
      <div>Contact component</div>
      <footer>Footer component</footer>
    </div>
  </div>
</template>
