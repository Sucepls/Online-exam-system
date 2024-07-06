<script setup lang="ts">
import User from "@/views/classes/components/UserView.vue";
import CreateExam from "@/views/classes/components/createExam/CreateExamView.vue";
import Details from "@/views/classes/components/DetailsView.vue";
</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">لیست کاربران</h2>
      <User/>
    </div>
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">ساخت آزمون جدید</h2>
      <CreateExam/>
    </div>
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات کلاس</h2>
      <Details/>
    </div>
  </div>
</template>

<style scoped>

</style>