<script setup lang="ts">
import MenuTop from "../menuTop/MenuTop.vue";
import Logotype from "../logotype/Logotype.vue";
</script>

<template>
  <div class="flex p-2 justify-between items-center bg-gray-800 z-20 relative">
    <div>
      <Logotype />
    </div>
    <div>
      <menu-top />
    </div>
  </div>
</template>
