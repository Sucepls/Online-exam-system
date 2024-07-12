<script setup lang="ts">
import SingleExamView from "@/views/exams/components/SingleExamView.vue";
import UsersView from "@/views/exams/components/UsersView.vue";
import ExamsListView from "@/views/exams/components/ExamsListView.vue";
import {ref} from "vue";
import type {Exam} from "@/models/exams.interface";
import {useRoute} from "vue-router";

const route= useRoute()
const classId= ref(route.params.id)
const selectedExam= ref(null as Exam|null)

</script>

<template>
  <div class="bg-[#395253] flex">
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">لیست آزمون ها</h2>
      <ExamsListView :classId="classId" @select-exam="(exam)=>{selectedExam=exam}"/>
    </div>
    <div class="w-2/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5" >اطلاعات آزمون</h2>
      <SingleExamView :exam="selectedExam"/>
    </div>
    <div class="w-1/4 flex-col flex items-center pt-10">
      <h2 class="text-4xl font-bold pb-5">کاربران آزمون</h2>
      <UsersView/>
    </div>
  </div>
</template>

<style scoped>

</style>