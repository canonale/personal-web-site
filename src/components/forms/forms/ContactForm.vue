<script setup lang="ts">
import Button from "@/components/button/Button.vue";
import { computed } from "vue";
import Input from "../input/Input.vue";
import TextArea from "../input/textarea/TextArea.vue";
import { useContactForm } from "./contactForm";

const { inputFields, textFields, getIsSubmitable, sendEmail } =
  useContactForm();
const isSubmitable = computed(() => getIsSubmitable(inputFields));
const submitForm = async () => {
  try {
    await sendEmail();
  } catch (e) {
    alert(e);
  }
};
</script>
<template>
  <div class="contact-form-div">
    <form ref="form" @submit.prevent="submitForm">
      <div class="flex flex-col gap-4">
        <div>
          <h1 class="text-5xl text-neutral-400 text-center">
            We are really thankful for contacting us
          </h1>
        </div>
        <div v-for="field in inputFields" :key="field.name">
          <Input
            v-model:model-value="field.model"
            :required="field.require"
            :placeholder="field.name"
            :type="field.type"
          />
        </div>
        <div v-for="field in textFields" :key="field.name">
          <TextArea
            v-model:model-value="field.model"
            :placeholder="field.name"
          />
        </div>
        <div>
          <Button
            class="w-full"
            :cta="true"
            :disabled="!isSubmitable"
            type="submit"
            >Send</Button
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.contact-form-div {
  @apply px-2 py-16;
  @apply bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-800;
  box-shadow: inset 0px 0px 40px #000000;
}
</style>
