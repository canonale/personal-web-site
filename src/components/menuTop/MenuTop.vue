<script setup lang="ts">
import { useMenuTop } from "./menuTop";
import MenuItem from "./MenuItem.vue";
import SocialNetworks from "../menuTop/SocialNetworks.vue";

const { menuItems, showHidenMenu, showMenu, iconComponent } = useMenuTop();
</script>

<template>
  <div class="relative">
    <div class="hidden lg:flex">
      <menu class="flex flex-row items-center">
        <ul class="flex flex-row gap-4 mr-4">
          <MenuItem
            v-for="(item, index) in menuItems"
            :key="index"
            :text="item.text"
            :route="item.route"
          />
        </ul>
        <social-networks />
      </menu>
    </div>
    <div class="flex flex-row-reverse lg:hidden">
      <button @click="showHidenMenu" class="show-menu">
        <transition enter-from-class="opacity-0" leave-to-class="opacity-0">
          <component :is="iconComponent" />
        </transition>
      </button>
    </div>
    <menu
      class="mobile p-4 inset-x-0 fixed bg-white mt-[13px] dark:bg-gray-800 lg:hidden"
      v-if="showMenu"
    >
      <ul>
        <MenuItem
          v-for="(item, index) in menuItems"
          :key="index"
          :text="item.text"
          :route="item.route"
        />
      </ul>
      <social-networks />
    </menu>
  </div>
</template>
