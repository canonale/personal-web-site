<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import { computed } from "vue";
import Input from "../input/Input.vue";
import { useContactForm } from "./contactForm";

const { fields, getIsSubmitable } = useContactForm();
const isSubmitable = computed(() => getIsSubmitable(fields));
</script>
<template>
  <div class="bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-800">
    <div class="flex flex-col gap-4">
      <div>
        <h1 class="text-5xl text-neutral-400 text-center">
          We are really thankful for contacting us
        </h1>
      </div>
      <div v-for="field in fields" :key="field.name">
        <Input
          v-model:model-value="field.model"
          :required="field.require"
          :placeholder="field.name"
          :type="field.type"
        />
      </div>
      <div>
        <Button class="w-full" :cta="true" :disabled="!isSubmitable"
          >Send</Button
        >
      </div>
    </div>
  </div>
</template>
