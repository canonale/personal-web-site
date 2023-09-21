<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";
import useButtonCta from "./buttonCta";

export interface ButtonCtaProps {
  cta?: boolean;
  disabled?: boolean;
  size?: "normal" | "small";
  type?: ButtonHTMLAttributes["type"];
  route?: string;
  hash?: string;
}

const props = withDefaults(defineProps<ButtonCtaProps>(), {
  cta: false,
  disabled: false,
  type: "button",
  size: "normal",
});

const { buttonType, buttonSize, goToRoute } = useButtonCta(props);
</script>
<template>
  <button
    class="border rounded-full text-sm text-white"
    :disabled="disabled"
    :class="[buttonType, buttonSize]"
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
