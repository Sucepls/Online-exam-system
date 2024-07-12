<script setup lang="ts">
import QuizView from "@/views/studentClasses/components/ExamDetailsView.vue"
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useExamStore } from "@/stores/ExamStore";
import Loading from "vue-loading-overlay";
import type { Question } from "@/models/questions.interface";

const props = defineProps(['exam'])
const examStore = useExamStore()
const isLoading = ref(true)
const questions = ref([] as Question[])
const timeRemaining = ref('00:00:00')
let timerInterval: number | undefined

watch(() => props.exam, (current) => {
  isLoading.value = true
  examStore.getQuestions(current.id).then((data) => {
    questions.value = data
    isLoading.value = false
    startTimer(new Date(current.endTime))
  })
})

function startTimer(endTime: Date) {
  if (timerInterval) {
    clearInterval(timerInterval)
  }

  function updateTime() {
    const now = new Date().getTime()
    const distance = endTime.getTime() - now

    if (distance < 0) {
      clearInterval(timerInterval)
      timeRemaining.value = '00:00:00'
    } else {
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      timeRemaining.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }
  }

  updateTime()
  timerInterval = setInterval(updateTime, 1000) as unknown as number
}

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>


<template>
  <div v-if="exam" class="bg-[#c6adac] flex flex-col p-2 mt-10 rounded-lg border vl-parent">
    <loading v-model:active="isLoading" :is-full-page="false" />
    <div class="flex justify-center rounded mt-2">
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">نام آزمون: <span>{{ exam.title }}</span></p>
      </div>
      <div class="px-2 border-e flex-col">
        <p class="text-left block text-sm font-medium text-gray-700">تاریخ آزمون:<span class="ps-1">{{ new Date(exam.startTime).toLocaleString('fa') }}</span></p>
      </div>
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">زمان آزمون:<span class="ps-1">{{ (new Date(exam.endTime).valueOf() - new Date(exam.startTime).valueOf()) / 1000 / 60 }} دقیقه</span></p>
      </div>
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">تعداد دفعات شرکت مجاز: <span>{{ exam.attemptsAllowed }}</span></p>
      </div>
      <div class="flex items-center px-1">
        <label for="checked-checkbox" class="ms-1 text-sm font-medium text-gray-700 dark:text-gray-700">مرور دارد</label>
      </div>
    </div>
    <div class="flex justify-center text-gray-700 mt-7">
      <p class="text-xl font-bold">زمان باقی‌مانده: {{ timeRemaining }}</p>
    </div>
    <QuizView :questions="questions" class="my-5" />
  </div>
  <h3 v-else>ابتدا یک آزمون را انتخاب کنید</h3>
</template>


<style scoped>
.text-xl {
  font-size: 1.25rem;
}

.font-bold {
  font-weight: 700;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.mt-4 {
  margin-top: 1rem;
}
</style>
