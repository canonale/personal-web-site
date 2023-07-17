<script setup lang="ts">
import CallOutFront from "@/components/callOutFront/CallOutFront.vue";
import FeatureCardCollection from "@/components/featureCard/FeatureCardCollection.vue";
import SalesCardCollection from "@/components/salesCard/SalesCardCollection.vue";
import ContactForm from "@/components/forms/forms/ContactForm.vue";
</script>

<template>
  <div>
    <div class="mx-2">
      <call-out-front />
      <feature-card-collection />
      <sales-card-collection />
    </div>
    <div>
      <contact-form />
    </div>
  </div>
</template>
