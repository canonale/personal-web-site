<script setup lang="ts">
import useCookies from "./components/cookieBanner/useCookies";
import HeaderMain from "@/components/header/HeaderMain.vue";
import FooterWeb from "@/components/footer/FooterWeb.vue";
const { showBanner, okClicked } = useCookies();
</script>

<template>
  <div>
    <header-main />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <div>
      <footer-web />
    </div>
    <transition name="slide">
      <div v-if="showBanner" class="banner-container">
        <p>We use 🍪 for more details check our policy
          <router-link to="cookiesPolicy">here</router-link>
        </p>
        <button @click="okClicked">OK</button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.banner-container {
  @apply fixed bg-white p-8 w-80 right-10 bottom-10 rounded-lg z-20 drop-shadow-lg;
  @apply dark:bg-gray-800 dark:text-gray-100;
}
</style>