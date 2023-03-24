<script setup lang="ts">
import CallOutFront from "./components/callOutFront/CallOutFront.vue";
import FeatureCardCollection from "./components/featureCard/FeatureCardCollection.vue";
import HeaderMain from "./components/header/HeaderMain.vue";
import SalesCardCollection from "./components/salesCard/SalesCardCollection.vue";
import ContactForm from "./components/forms/forms/ContactForm.vue";
</script>

<template>
  <div>
    <header-main />
    <div class="mx-2">
      <call-out-front />
      <feature-card-collection />
      <sales-card-collection />
      <contact-form />
      <div>Contact component</div>
      <footer>Footer component</footer>
    </div>
  </div>
</template>
