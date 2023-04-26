<script setup lang="ts">
import CallOutFront from "./components/callOutFront/CallOutFront.vue";
import FeatureCardCollection from "./components/featureCard/FeatureCardCollection.vue";
import HeaderMain from "./components/header/HeaderMain.vue";
import SalesCardCollection from "./components/salesCard/SalesCardCollection.vue";
import ContactForm from "./components/forms/forms/ContactForm.vue";
import FooterWeb from "./components/footer/FooterWeb.vue";
</script>

<template>
  <div>
    <header-main />
    <div class="mx-2">
      <call-out-front />
      <feature-card-collection />
      <sales-card-collection />
    </div>
    <div>
      <contact-form />
      <footer-web />
    </div>
  </div>
</template>
