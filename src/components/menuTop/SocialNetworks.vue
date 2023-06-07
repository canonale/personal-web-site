<script setup lang="ts">
import IconTwitter from "../icons/IconTwitter.vue";
import IconDiscord from "../icons/IconDiscord.vue";
import IconGithub from "../icons/IconGithub.vue";

const goToGitHub = () => {
  window.location.href = "https://github.com/canonale";
};
</script>
<template>
  <div class="flex">
    <icon-twitter class="mr-2 network-icon" />
    <icon-discord class="mr-2 network-icon" />
    <icon-github @click="goToGitHub" class="network-icon" />
  </div>
</template>

<style>
.network-icon {
  @apply transition text-slate-600 hover:text-slate-400 cursor-pointer;
}
</style>
