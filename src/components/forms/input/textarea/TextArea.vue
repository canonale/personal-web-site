<script setup lang="ts">
export interface Props {
  modelValue: string;
  placeholder: string;
}
defineProps<Props>();
defineEmits(["update:modelValue"]);
</script>

<template>
  <textarea
    :placeholder="placeholder"
    :value="modelValue"
    class="input h-32"
    @input="$emit('update:modelValue', $event.target.value ?? '')"
  />
</template>
