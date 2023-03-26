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
/*const emit = defineEmits<{
  (e: 'assessedCheckpoint', checkpointId: number, assessmentId: number): void
  (e: 'assessmentValues', assessmentResult: Nullable<number>, assessmentValues: number[]): void
}>()*/

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

<style scoped>
.input {
  @apply px-6 py-3 rounded;
  @apply bg-neutral-800 border border-neutral-700 w-full;
  @apply placeholder:italic placeholder:text-neutral-700;
  @apply text-sm leading-6 text-neutral-400;
  @apply focus:outline-none focus:ring-0;
}

.input:focus {
  border-image-source: linear-gradient(to bottom right, #38bdf8, #9333ea);
  border-image-slice: 1;
  border-radius: 0.25rem;
}
</style>
