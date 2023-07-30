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
