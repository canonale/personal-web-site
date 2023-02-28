<script setup lang="ts">
import MenuTop from "./menuTop/MenuTop.vue";
import { computed, ref } from "vue";
import type { Ref } from "vue";

const props = defineProps<{
  msg: string;
}>();

const incremental: Ref<number> = ref(0);

const doIncrement = (): void => {
  incremental.value++;
};

const comp = computed(() => `Do: ${props.msg} ${incremental.value}`);
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <menu-top />
    <button @click="doIncrement">{{ incremental }}</button>
    <h2>{{ comp }}</h2>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
