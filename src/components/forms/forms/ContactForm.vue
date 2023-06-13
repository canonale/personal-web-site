<script setup lang="ts">
import ButtonCta from "@/components/button/ButtonCta.vue";
import { computed } from "vue";
import InputText from "../input/InputText.vue";
import TextArea from "../input/textarea/TextArea.vue";
import { useContactForm } from "./contactForm";

const { inputFields, textFields, getIsSubmitable, sendEmail } =
  useContactForm();
const isSubmitable = computed(() => getIsSubmitable(inputFields));
const submitForm = async () => {
  try {
    await sendEmail();
    alert("Thanks for contacting me");
  } catch (e) {
    alert(e);
  }
};
</script>
<template>
  <div class="contact-form-div">
    <form ref="form" @submit.prevent="submitForm">
      <div class="mt-4 mb-8">
        <h1 class="text-5xl text-neutral-400 text-center">
          We are really thankful for contacting us
        </h1>
      </div>
      <div
        class="flex flex-col gap-4 md:grid md:grid-cols-2 xl:w-[53rem] xl:m-auto"
      >
        <div v-for="field in inputFields" :key="field.name">
          <input-text
            v-model:model-value="field.model"
            :required="field.require"
            :placeholder="field.name"
            :type="field.type"
          />
        </div>
        <div
          v-for="field in textFields"
          :key="field.name"
          class="md:col-span-2"
        >
          <TextArea
            v-model:model-value="field.model"
            :placeholder="field.name"
          />
        </div>
        <div class="md:col-span-2 md:flex md:justify-center">
          <button-cta
            class="w-full md:w-2/4"
            :cta="true"
            :disabled="!isSubmitable"
            type="submit"
            >Send</button-cta
          >
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.contact-form-div {
  @apply px-2 py-16;
  @apply md:px-4;
  @apply dark:bg-gradient-to-t dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-800;
  box-shadow: inset 0px 0px 80px #eee;
}

@media (prefers-color-scheme: dark) {
  .contact-form-div {
    box-shadow: inset 0px 0px 40px #000000;
  }
}
</style>
