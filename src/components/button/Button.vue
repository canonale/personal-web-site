<script setup lang="ts">
import { computed } from "vue";
export interface Props {
  cta?: boolean;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  cta: false,
  disabled: false,
});

const buttonType = computed((): string => {
  const type = props.cta ?? false;
  const isDisabled = props.disabled ?? false;
  const indigoClasses = `bg-indigo-${
    isDisabled ? "300" : "500"
  } hover:bg-indigo-400 border-indigo-400`;
  const slateClasses = `bg-slate-${
    isDisabled ? "400" : "700"
  } hover:bg-slate-600 border-slate-600`;
  return type ? indigoClasses : slateClasses;
});
</script>
<template>
  <button
    class="border rounded-full text-sm px-5 leading-10"
    :disabled="disabled"
    :class="buttonType"
  >
    <slot></slot>
  </button>
</template>
