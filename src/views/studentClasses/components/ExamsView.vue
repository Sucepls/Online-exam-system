<script setup lang="ts">
import Loading from 'vue-loading-overlay';
import router from "@/router";
import {onMounted, ref} from "vue";
import {useClassStore} from "@/stores/ClassStore";
import type {Exam} from "@/models/exams.interface";

const classStore= useClassStore()

const props=defineProps(['classId'])
defineEmits(['selectExam'])

const isLoading=ref(true)
const exams = ref([] as Exam[])
onMounted(()=>{
  classStore.getExams(props.classId).then((data)=>{
    isLoading.value=false
    exams.value=data
  })
})
</script>

<template>
  <div class="shadow border rounded-lg bg-[#c6adac] m-10 w-3/4 vl-parent">
    <loading v-model:active="isLoading"
             :is-full-page="false"/>
    <div v-for="exam in exams" :key="exam.id" class=" border-b rounded-lg border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200 ">
        <div class="flex-col sm:py-5 sm:gap-4 sm:px-6">
          <div class="flex justify-between pb-3">
            <dt class=" text-sm font-medium text-gray-700">
              {{exam.title}}
            </dt>
            <button @click="$emit('selectExam',exam.id)" class="bg-[#523946] text-sm w-1/2  sm:col-span-2 text-white rounded-md hover:bg-blue-600">
              شروع آزمون
            </button>
          </div>
          <div class="ps-4">
            <dt class="text-xs flex w-full text-gray-700">این آزمون توضیحات ندارد.</dt>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>

</style>