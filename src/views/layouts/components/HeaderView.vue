<script setup lang="ts">
import MenuIcon from '@/assets/Icons/menu-icon.svg?component'
import IranIcon from '@/assets/Icons/iran-icon.svg?component'
import NotificationIcon from '@/assets/Icons/notification-icon.svg?component'
import SunIcon from '@/assets/Icons/sun-icon.svg?component'
import DropDown from '@/assets/Icons/drop-icon.svg?component'

defineEmits(['menuToggle'])
</script>

<template>
  <div class="flex justify-between items-center py-3">
    <div class="flex items-center w-2/12 justify-center">
      <div class="flex items-center flex-row-reverse w-11/12 justify-center">
        <img class="w-[87px]" src="@/assets/logo.png" alt="logo" />
      </div>
      <button class="items-center justify-start flex w-1/12" @click.prevent="$emit('menuToggle')">
<!--        <MenuIcon />-->
      </button>
    </div>
    <div class="pl-14 flex flex-row-reverse items-center w-10/12">
      <IranIcon class="ms-4" />
      <NotificationIcon class="ms-4" />
      <SunIcon class="ms-14" />
      <div class="flex items-center">
        <img class="rounded-full w-10" src="@/assets/profile.png" alt="profile" />
        <p class="text-xs ms-3 text-[#464359">محمدامین افشاریان شاندیز</p>
        <drop-down class="ms-3" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
