<script setup lang="ts">
import ButtonCta from "@/components/button/ButtonCta.vue";
import useCookies from "./useCookies";
import RouteNames from "@/router/routeNames";
const { showBanner, okClicked } = useCookies();
</script>

<template>
  <div v-if="showBanner" class="banner-container">
    <p>
      We use 🍪 for more details check our policy
      <router-link :to="RouteNames.ABOUT_ME">here</router-link>
    </p>
    <div class="flex flex-row-reverse">
      <button-cta cta @click="okClicked">OK</button-cta>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  @apply fixed bg-white p-8 mx-4 bottom-10 rounded-lg z-20 drop-shadow-lg;
  @apply sm:right-10 sm:w-80;
  @apply dark:bg-gray-800 dark:text-gray-100;
}
</style>
