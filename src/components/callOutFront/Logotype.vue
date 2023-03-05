<script setup lang="ts">
import IconLogo from "../icons/IconLogo.vue";
</script>
<template>
  <div class="relative w-80 h-80">
    <div class="w-full h-full z-10 absolute">
      <IconLogo :small="false" class="w-full h-full" />
    </div>
    <div class="w-full h-full absolute rounded-full blur-3xl logo-background" />
  </div>
</template>

<style scoped>
.logo-background {
  background: linear-gradient(135deg, #47caff 49.48%, #9747ff 49.49%);
}
</style>
