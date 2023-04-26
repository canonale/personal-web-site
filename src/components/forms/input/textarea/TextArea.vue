<script setup lang="ts">
export interface Props {
  modelValue: string;
  placeholder: string;
}
defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const onInput = (event: Event) => {
  const { target } = event;
  if (target) {
    const value = (target as HTMLTextAreaElement).value;
    emit("update:modelValue", value);
  }
};
</script>

<template>
  <textarea
    :placeholder="placeholder"
    :value="modelValue"
    class="input h-32"
    @input="onInput($event)"
  />
</template>
