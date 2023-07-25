<script setup lang="ts">
import RouteNames from "@/router/routeNames";
import ButtonCta from "../button/ButtonCta.vue";
const CONTACT_HASH = "#contact";
</script>
<template>
  <div
    class="grid grid-cols-2 gap-8 justify-items-center md:flex md:flex-row md:justify-center xl:justify-start"
  >
    <button-cta :route="RouteNames.CONTACT" :hash="CONTACT_HASH" :cta="true"
      >Get Started</button-cta
    >
    <button-cta :route="RouteNames.ABOUT_ME">Why Canonale?</button-cta>
    <button-cta class="col-span-2" :route="RouteNames.GITHUB"
      >View on GitHub</button-cta
    >
  </div>
</template>
