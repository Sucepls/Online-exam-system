<script setup lang="ts">
import Loading from 'vue-loading-overlay';
import { onMounted, ref, computed } from "vue";
import { useClassStore } from "@/stores/ClassStore";
import type { Exam } from "@/models/exams.interface";

const classStore = useClassStore();

const props = defineProps(['classId']);
const emit = defineEmits(['selectExam']);

const isLoading = ref(true);
const exams = ref([] as Exam[]);
const examAttempts = ref({} as Record<string, number>);

const sortExams = (exams: Exam[]) => {
  const now = new Date().getTime();
  return exams.slice().sort((a, b) => {
    const aStart = new Date(a.startTime).getTime();
    const aEnd = new Date(a.endTime).getTime();
    const bStart = new Date(b.startTime).getTime();
    const bEnd = new Date(b.endTime).getTime();

    if (aEnd < now && bEnd < now) {
      return aEnd - bEnd;
    } else if (aStart > now && bStart > now) {
      return aStart - bStart;
    } else if (aStart <= now && aEnd >= now) {
      return -1;
    } else if (bStart <= now && bEnd >= now) {
      return 1;
    } else if (aStart > now && bEnd < now) {
      return -1;
    } else if (bStart > now && aEnd < now) {
      return 1;
    } else {
      return 0;
    }
  });
};

onMounted(() => {
  classStore.getExams(props.classId).then((data) => {
    isLoading.value = false;
    exams.value = sortExams(data);
    exams.value.forEach((exam) => {
      examAttempts.value[exam.id] = exam.attemptsAllowed;
    });
  });
});

const isExamAvailable = (exam: Exam) => {
  const now = new Date().getTime();
  const startTime = new Date(exam.startTime).getTime();
  const endTime = new Date(exam.endTime).getTime();
  return now >= startTime && now <= endTime && examAttempts.value[exam.id] > 0;
};

const getTimeRemaining = (endTime: string) => {
  const total = new Date(endTime).getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};

const formatTime = (timeObj: { days: number, hours: number, minutes: number, seconds: number }) => {
  return `${timeObj.days > 0 ? timeObj.days + ' روز ' : ''}${timeObj.hours} ساعت ${timeObj.minutes} دقیقه ${timeObj.seconds} ثانیه`;
};

const getTimeToStart = (startTime: string) => {
  const total = new Date(startTime).getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
};

const handleStartExam = (exam: Exam) => {
  if (confirm('آیا مطمئن هستید که می‌خواهید آزمون را شروع کنید؟')) {
    examAttempts.value[exam.id]--;
    emit('selectExam', exam);
  }
};
</script>

<template>
  <div class="shadow border rounded-lg bg-[#c6adac] m-10 w-3/4 vl-parent">
    <loading v-model:active="isLoading" :is-full-page="false"/>
    <div class="max-h-screen overflow-y-auto">
      <div v-for="exam in exams" :key="exam.id" class="border-b rounded-lg border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="flex-col sm:py-5 sm:gap-4 sm:px-6">
            <div class="flex justify-between pb-3">
              <dt class="text-sm font-medium text-gray-700">
                {{ exam.title }}
              </dt>
              <button
                  :disabled="!isExamAvailable(exam)"
                  @click="handleStartExam(exam)"
                  class="bg-[#523946] text-sm w-1/2 sm:col-span-2 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
              >
                شروع آزمون
              </button>
            </div>
            <div class="flex">
              <dt v-if="!isExamAvailable(exam)" class="text-xs flex w-full text-gray-700">
                {{ new Date().getTime() < new Date(exam.startTime).getTime()
                  ? ` ${formatTime(getTimeToStart(exam.startTime))} مانده به شروع آزمون`
                  : `آزمون به پایان رسیده.`
                }}
              </dt>
              <dt v-else class="text-xs flex w-full text-gray-700">
                {{ formatTime(getTimeRemaining(exam.endTime)) }} مانده به پایان آزمون
              </dt>
              <dt class="text-xs w-full text-gray-700">
                نمره: {{exam.id}}
              </dt>
            </div>
            <div class="text-xs flex w-full text-gray-700">
              تعداد دفعات باقی‌مانده: {{ examAttempts[exam.id] }}
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max-h-screen {
  max-height: 70vh; /* Adjust according to your preference */
}
.overflow-y-auto {
  overflow-y: auto;
}
.text-xs {
  font-size: 0.75rem;
}
.font-medium {
  font-weight: 500;
}
.rounded-md {
  border-radius: 0.375rem;
}
.disabled\:opacity-50:disabled {
  opacity: 0.5;
}
.hover\:bg-blue-600:hover {
  background-color: #3b82f6;
}
</style>
