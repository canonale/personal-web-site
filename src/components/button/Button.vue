<script setup lang="ts">
import { computed } from "vue";
const props = defineProps<{
  cta?: boolean;
}>();

const buttonType = computed((): string => {
  const type = props.cta ?? false;
  const indigoClasses = "bg-indigo-500 hover:bg-indigo-400 border-indigo-400";
  const slateClasses = "bg-slate-700 hover:bg-slate-600 border-slate-600";
  return type ? indigoClasses : slateClasses;
});
</script>
<template>
  <button
    class="border rounded-full text-sm px-5 leading-10"
    :class="buttonType"
  >
    <slot></slot>
  </button>
</template>
