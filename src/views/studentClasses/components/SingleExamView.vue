<script setup lang="ts">

import QuizView from "@/views/studentClasses/components/ExamDetailsView.vue"
import {ref, watch} from "vue";
import {useExamStore} from "@/stores/ExamStore";
import Loading from "vue-loading-overlay";
import type {Question} from "@/models/questions.interface";


const props = defineProps(['exam'])
const examStore= useExamStore()
const isLoading=ref(true)

const questions = ref([] as Question[])

watch(()=>props.exam, (current) => {
  isLoading.value=true
  examStore.getQuestions(current.id).then((data)=>{
    questions.value=data
    isLoading.value=false
  })
})
</script>

<template>
  <div v-if="exam" class="bg-[#c6adac] flex flex-col p-2 mt-10 rounded-lg border vl-parent">
    <loading v-model:active="isLoading"
             :is-full-page="false"/>
    <div class="flex justify-center rounded  mt-2">
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">نام آزمون: <span>
        {{exam.title}}
      </span></p>
      </div>
      <div class="px-2 border-e flex-col">
        <p class="text-left block text-sm font-medium text-gray-700">تاریخ آزمون:<span class="ps-1">
        {{ new Date(exam.startTime).toLocaleString('fa') }}
      </span></p>
      </div>
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">زمان آزمون:<span class="ps-1">
        {{(new Date(exam.endTime).valueOf() - new Date(exam.startTime).valueOf())/1000/60}} دقیقه
      </span></p>
      </div>
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">تعداد دفعات شرکت مجاز: <span>
        {{ exam.attemptsAllowed }}
      </span></p>
      </div>
      <div class="flex items-center px-1">
        <label for="checked-checkbox" class="ms-1 text-sm font-medium text-gray-700 dark:text-gray-700">مرور دارد</label>
      </div>
    </div>
    <QuizView :questions="questions" class="my-10"/>
  </div>
  <h3 v-else> ابتدا یک آزمون را انتخاب کنید </h3>
</template>

<style scoped>

</style>