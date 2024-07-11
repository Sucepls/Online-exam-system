<script setup lang="ts">
import {ref} from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import NewQuestionView from "@/views/classes/components/createExam/NewQuestionView.vue";
import {toast} from "vue3-toastify";
import {useExamStore} from "@/stores/ExamStore";

import type {Question} from "@/models/questions.interface";
import type {Exam} from "@/models/exams.interface";

const props=defineProps(['classId'])

const showPopup = ref(false)

const examStore = useExamStore()

const examInfo = ref({} as Exam)

function createExam (){
  examInfo.value.classId=Number(props.classId)
  examInfo.value.id = undefined
  examStore.createExam(examInfo.value).then((data)=>{
    examInfo.value=data
    openModal()

    toast(' آژمون با موفقیت ایجاد شد', {
      autoClose: 1500,
      rtl: true,
      type: 'success'
    })
  }).catch(()=>{
    toast('آزمون ایجاد نشد!', {
      autoClose: 1500,
      rtl: true,
      type: 'error'
    })
  })
}
function openModal(){
  showPopup.value = !showPopup.value
}
function createClass (){
}
</script>

<template>
  <div class="flex-col flex items-center">
    <div class="bg-[#c6adac] p-6 shadow-lg text-right mt-10 border rounded-lg">
      <form @submit.prevent="createExam">
        <div class="mb-4">
          <label for="className" class="block text-sm font-medium text-gray-700">نام آزمون</label>
          <input v-model="examInfo.title" type="text" id="className" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class=" mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">زمان شروع آزمون</label>
          <Datepicker class="mt-1 p-2 border border-gray-300 rounded-md w-full" v-model="examInfo.startTime" time-picker-inline/>
        </div>
        <div class=" mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">زمان پایان آژمون</label>
          <Datepicker class="mt-1 p-2 border border-gray-300 rounded-md w-full" v-model="examInfo.endTime" time-picker-inline/>
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">تعداد دفعات مجاز شرکت </label>
          <select v-model="examInfo.attemptsAllowed" type="role" id="role" class="text-right mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="flex items-center">
          <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-700 dark:text-gray-700">مرور دارد</label>
        </div>
        <button class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          ایجاد آزمون
        </button>
        <NewQuestionView :examId="examInfo.id" v-if="showPopup" @close="openModal"/>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>