<script setup lang="ts">
import HeaderMain from "@/components/header/HeaderMain.vue";
import FooterWeb from "@/components/footer/FooterWeb.vue";
</script>

<template>
  <div>
    <header-main />
    <router-view />
    <div>
      <footer-web />
    </div>
  </div>
</template>
