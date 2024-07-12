<script setup lang="ts">


import ExamsView from "@/views/studentClasses/components/ExamsView.vue";
import UserInformationView from "@/views/studentClasses/components/UserInformationView.vue";
import SingleExamView from "@/views/studentClasses/components/SingleExamView.vue";
import {onMounted, ref} from "vue";
import type {Exam} from "@/models/exams.interface";
import {useRoute} from "vue-router";


const route= useRoute()
const classId= ref(route.params.id)
const selectedExam= ref(null as Exam|null)


</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">اطلاعات کلاس</h2>
      <UserInformationView :class-id="classId"/>
    </div>
    <div class="w-2/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">آزمون</h2>
      <SingleExamView :exam="selectedExam" />
    </div>
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">آزمون ها</h2>
      <ExamsView :classId="classId" @select-exam="(exam)=>{selectedExam=exam}"/>
    </div>
  </div>
</template>

<style scoped>

</style>