<script setup lang="ts">

import UserInformation from "@/views/student/components/UserInformation.vue";
import ClassesList from "@/views/student/components/ClassesList.vue";
import ExamsList from "@/views/student/components/ExamsList.vue";
</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات کاربری</h2>
      <UserInformation/>
    </div>
    <div class="w-2/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">کلاس ها</h2>
      <ClassesList/>
    </div>
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">آزمون ها</h2>
      <ExamsList/>
    </div>
  </div>
</template>

<style scoped>

</style>