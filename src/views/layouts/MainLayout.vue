<script setup lang="ts">
import HeaderView from "@/views/layouts/components/HeaderView.vue";
import SidebarView from "@/views/layouts/components/SidebarView.vue";
import { ref } from 'vue'
const isCollapsed = ref(false)
</script>

<template>
<!--  <HeaderView @menu-toggle="isCollapsed = !isCollapsed" />-->
<!--  <div class="flex h-full">-->
<!--    <SidebarView class="w-2/12" :is-collapsed="isCollapsed" />-->
    <RouterView class="bg-gray-bg" :class="{ 'flex-grow': isCollapsed }" />
<!--  </div>-->
</template>

<style scoped></style>
