<script setup lang="ts">
import IconLogo from "../icons/IconLogo.vue";
</script>

<template>
  <div>
    <router-link class="flex items-center" to="/">
      <icon-logo />
      <p class="ml-2 font-bold dark:text-gray-300 text-slate-500">Canonale</p>
    </router-link>
  </div>
</template>
