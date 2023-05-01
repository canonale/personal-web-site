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
const emit = defineEmits(["update:modelValue"]);
const onInput = (event: Event) => {
  const { target } = event;
  if (target) {
    const value = (target as HTMLInputElement).value;
    emit("update:modelValue", value);
  }
};
</script>

<template>
  <input
    :placeholder="placeholder"
    :value="modelValue"
    :required="required"
    :type="type"
    class="input"
    @input="onInput($event)"
  />
</template>
