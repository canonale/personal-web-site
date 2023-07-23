<script setup lang="ts">
import IconTwitter from "../icons/IconTwitter.vue";
import IconDiscord from "../icons/IconDiscord.vue";
import IconGithub from "../icons/IconGithub.vue";
import routeNames from "@/router/routeNames";
import { router } from "@/router";

const goTo = (routeName: string) => {
  router.push({
    name: routeName,
  });
};
</script>
<template>
  <div class="flex">
    <icon-twitter @click="goTo(routeNames.TWITTER)" class="mr-2 network-icon" />
    <icon-discord class="mr-2 network-icon" />
    <icon-github @click="goTo(routeNames.GITHUB)" class="network-icon" />
  </div>
</template>

<style>
.network-icon {
  @apply transition text-slate-600 hover:text-slate-400 cursor-pointer;
}
</style>
