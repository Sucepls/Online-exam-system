<script setup lang="ts">


import ExamsView from "@/views/studentClasses/components/ExamsView.vue";
import UserInformationView from "@/views/studentClasses/components/UserInformationView.vue";
import SingleExamView from "@/views/studentClasses/components/SingleExamView.vue";
</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات کلاس</h2>
      <UserInformationView/>
    </div>
    <div class="w-2/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">آزمون مبانی کامپیوتر</h2>
      <SingleExamView/>
    </div>
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">آزمون ها</h2>
      <ExamsView/>
    </div>
  </div>
</template>

<style scoped>

</style>