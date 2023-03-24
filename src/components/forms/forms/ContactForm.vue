<script setup lang="ts">
import { ref } from "vue";
import Input from "../input/Input.vue";
const name = ref("");
</script>
<template>
  <Input v-model="name" placeholder="Name"/>
</template>
