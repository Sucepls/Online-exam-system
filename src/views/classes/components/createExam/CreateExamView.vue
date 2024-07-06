<script setup lang="ts">
import {ref} from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import NewQuestionView from "@/views/classes/components/createExam/NewQuestionView.vue";

const showPopup = ref(false)
const examInfo = ref({
  examName: '',
  time: '',
  number: '',
  date:'',

})
function openModal(){
  showPopup.value = !showPopup.value
}
function createClass (){
}
</script>

<template>
  <div class="flex-col flex items-center">
    <div class="bg-[#c6adac] p-6 shadow-lg text-right mt-10 border rounded-lg">
      <form>
        <div class="mb-4">
          <label for="className" class="block text-sm font-medium text-gray-700">نام آزمون</label>
          <input v-model="examInfo.examName" type="text" id="className" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class=" mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">تاریخ آزمون</label>
          <Datepicker class="mt-1 p-2 border border-gray-300 rounded-md w-full" v-model="examInfo.date" time-picker-inline/>
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">زمان آزمون (دقیقه) </label>
          <input v-model="examInfo.time" type="text" id="description" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700">تعداد دفعات مجاز شرکت </label>
          <select v-model="examInfo.number" type="role" id="role" class="text-right mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="flex items-center">
          <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="checked-checkbox" class="ms-2 text-sm font-medium text-gray-700 dark:text-gray-700">مرور دارد</label>
        </div>
        <button type="button" @click="openModal" class="w-full bg-[#523946] text-white py-2 rounded-md hover:bg-blue-600 mt-4">
          ایجاد آزمون
        </button>
        <NewQuestionView v-if="showPopup" close=""/>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>