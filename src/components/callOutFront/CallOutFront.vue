<script setup lang="ts">
import GradientTitle from "./GradientTitle.vue";
import CanonaleLogotype from "./CanonaleLogotype.vue";
import ButtonLine from "./ButtonLine.vue";
</script>
<template>
  <div class="my-20 xl:flex xl:flex-row-reverse container">
    <div class="flex justify-center xl:w-2/4">
      <canonale-logotype />
    </div>
    <div class="mt-10 flex flex-col gap-y-11 xl:gap-y-4 xl:w-2/4">
      <gradient-title>Canonale</gradient-title>
      <h1
        class="md:text-center xl:text-left text-5xl dark:text-slate-200 text-slate-500 leading-tight"
      >
        Next Generation Management Tooling
      </h1>
      <h2 class="md:text-center xl:text-left text-slate-400 text-2xl">
        Get ready for a full-stack engineer so that you can finally catch up
        with your limits.
      </h2>
      <button-line />
    </div>
  </div>
</template>
