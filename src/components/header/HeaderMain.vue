<script setup lang="ts">
import MenuTop from "@/components/menuTop/MenuTop.vue";
import LogoType from "@/components/logotype/LogoType.vue";
import { ref } from "vue";

const headerHeightLimit = 0;
const defaultClass = "header";
const effectClass = "fixed-header";
const headerClasses = ref<string[]>([defaultClass]);

const handleScroll = () => {
  headerClasses.value =
    window.scrollY > headerHeightLimit
      ? [defaultClass, effectClass]
      : [defaultClass];
};

window.addEventListener("scroll", handleScroll);
</script>

<template>
  <div :class="headerClasses" id="header">
    <div class="header-container">
      <div>
        <logo-type />
      </div>
      <div>
        <menu-top />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  @apply fixed top-0 left-0 right-0 z-20;
  @apply transition-colors duration-500;
  @apply lg:bg-transparent dark:bg-gray-800 bg-white;
  @apply border-b lg:border-none dark:border-none;
}
.header-container {
 @apply flex p-2 justify-between items-center;
 @apply max-w-[1376px] m-auto;
}
.fixed-header {
  @apply bg-white lg:border-b lg:border-solid border-gray-200;
  @apply dark:bg-gray-800 dark:border-gray-900;
}
</style>
