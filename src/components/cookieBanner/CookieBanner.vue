<script setup lang="ts">
import ButtonCta from "@/components/button/ButtonCta.vue";
import useCookies from "./useCookies";
import RouteNames from "@/router/routeNames";
const { showBanner, okClicked } = useCookies();
</script>

<template>
  <div v-if="showBanner" class="banner-container">
    <div class="grid gap-10">
      <div>
        <p class="my-4 text-2xl text-indigo-300">We value your privacy</p>
        <p>
          We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept All", you
          consent to our use of cookies. Visit our
          <router-link
            class="text-purple-300 hover:text-purple-500"
            :to="RouteNames.ABOUT_ME"
            >Cookie Policy</router-link
          >
          more info.
        </p>
      </div>
      <div class="flex justify-center">
        <button-cta cta size="small" @click="okClicked">
          <span class="mx-4">Accept All</span>
        </button-cta>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  @apply fixed p-8 mx-4 bottom-10 rounded-lg z-20 drop-shadow-lg border;
  @apply bg-white text-gray-500;
  @apply sm:right-10 sm:w-80;
  @apply dark:bg-gray-800 dark:text-indigo-100 dark:border-slate-700;
}
</style>
