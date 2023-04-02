<script setup lang="ts">
import Button from "../button/Button.vue";
</script>
<template>
  <div
    class="grid grid-cols-2 gap-8 justify-items-center md:flex md:flex-row md:justify-center"
  >
    <Button :cta="true">Get Started</Button>
    <Button>Why Canonale?</Button>
    <Button class="col-span-2">View on GitHub</Button>
  </div>
</template>
