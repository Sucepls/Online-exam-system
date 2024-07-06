<script setup lang="ts">
import {ref} from "vue";
import CreateClass from "@/views/professor/components/CreateClassView.vue";
import UserInformation from "@/views/professor/components/UserInformationView.vue";
import ClassesList from "@/views/professor/components/ClassesListView.vue";
</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات کاربری</h2>
      <UserInformation/>
    </div>
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">ساخت کلاس جدید</h2>
      <CreateClass/>
    </div>
    <div class="w-1/3 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">لیست کلاس ها</h2>
      <ClassesList/>
    </div>
  </div>
</template>

<style scoped>

</style>