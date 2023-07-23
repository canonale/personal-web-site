<script setup lang="ts">
import RouteNames from "@/router/routeNames";
import ButtonCta from "../button/ButtonCta.vue";
</script>
<template>
  <div
    class="grid grid-cols-2 gap-8 justify-items-center md:flex md:flex-row md:justify-center xl:justify-start"
  >
    <button-cta :cta="true">Get Started</button-cta>
    <button-cta :route="RouteNames.ABOUT_ME">Why Canonale?</button-cta>
    <button-cta class="col-span-2" :route="RouteNames.GITHUB"
      >View on GitHub</button-cta
    >
  </div>
</template>
