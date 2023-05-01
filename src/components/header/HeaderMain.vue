<script setup lang="ts">
import MenuTop from "@/components/menuTop/MenuTop.vue";
import LogoType from "@/components/logotype/LogoType.vue";
</script>

<template>
  <div class="flex p-2 justify-between items-center bg-gray-800 z-20 relative">
    <div>
      <logo-type />
    </div>
    <div>
      <menu-top />
    </div>
  </div>
</template>
