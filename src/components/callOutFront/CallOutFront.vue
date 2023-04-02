<script setup lang="ts">
import GradientTitle from "./GradientTitle.vue";
import Logotype from "./Logotype.vue";
import ButtonLine from "./ButtonLine.vue";
</script>
<template>
  <div class="my-20">
    <div class="flex justify-center">
      <Logotype />
    </div>
    <div class="mt-10 flex flex-col gap-y-11">
      <gradient-title>Canonale</gradient-title>
      <h1 class="md:text-center text-5xl text-slate-200 leading-tight">
        Next Generation Management Tooling
      </h1>
      <h2 class="md:text-center text-slate-400 text-2xl">
        Get ready for a full-stack engineer so that you can finally catch up
        with your limits.
      </h2>
      <button-line />
    </div>
  </div>
</template>
