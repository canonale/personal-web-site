<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import useButtonCta from "./buttonCta";

export interface ButtonCtaProps {
  cta?: boolean;
  disabled?: boolean;
  type?: ButtonHTMLAttributes["type"];
  route?: string;
  hash?: string;
}

const props = withDefaults(defineProps<ButtonCtaProps>(), {
  cta: false,
  disabled: false,
  type: "button",
});

const { buttonType, goToRoute } = useButtonCta(props);
</script>
<template>
  <button
    class="border rounded-full text-sm px-5 leading-10 text-white"
    :disabled="disabled"
    :class="buttonType"
    :type="type"
    @click="goToRoute"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.cta-type {
  @apply bg-indigo-500 hover:bg-indigo-400 border-indigo-400;
}
.no-cta-type {
  @apply hover:bg-slate-600 border-slate-600;
}
</style>
