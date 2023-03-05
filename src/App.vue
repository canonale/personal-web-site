<script setup lang="ts">
import CallOutFront from "./components/callOutFront/CallOutFront.vue";
import HeaderMain from "./components/header/HeaderMain.vue";
</script>

<template>
  <div>
    <header-main />
    <div class="mx-2">
      <call-out-front />
      <div>Features component</div>
      <div>Pricing component</div>
      <div>Contant component</div>
      <footer>Footer component</footer>
    </div>
  </div>
</template>
