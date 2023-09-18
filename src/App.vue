<script setup lang="ts">
import HeaderMain from "@/components/header/HeaderMain.vue";
import FooterWeb from "@/components/footer/FooterWeb.vue";
import CookieBanner from "@/components/cookieBanner/CookieBanner.vue";
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
    <transition name="fade">
      <cookie-banner />
    </transition>
  </div>
</template>
