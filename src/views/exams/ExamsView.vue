<script setup lang="ts">
import SingleExamView from "@/views/exams/components/SingleExamView.vue";
import UsersView from "@/views/exams/components/UsersView.vue";
import ExamsListView from "@/views/exams/components/ExamsListView.vue";
</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">لیست آزمون ها</h2>
      <ExamsListView/>
    </div>
    <div class="w-2/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات آزمون</h2>
      <SingleExamView/>
    </div>
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">کاربران آزمون</h2>
      <UsersView/>
    </div>
  </div>
</template>

<style scoped>

</style>