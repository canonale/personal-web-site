<script setup lang="ts">
export interface Props {
  modelValue: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}
withDefaults(defineProps<Props>(), {
  required: false,
  type: "text",
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    :required="required"
    :type="type"
    class="input"
    @input="$emit('update:modelValue', $event.target.value ?? '')"
  />
</template>
