<script setup lang="ts">
import { ref } from 'vue';
import QuizView from "@/views/exams/components/QuizView.vue";
import editIcon from '@/assets/Icons/Edit-icon.svg?component'

const showModal = ref(false);

const quiz = ref({
  name: 'آزمون مبانی کامپیوتر',
  date: '1403/4/15',
  time: '20',
  attempts: '5',
  hasReview: true,
});

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const saveChanges = () => {
  // Add logic to save changes if needed
  closeModal();
};
</script>

<template>
  <div class="bg-[#c6adac] flex flex-col p-2 mt-10 rounded-lg border">
    <div class="flex justify-center rounded mt-2">
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">نام آزمون: <span>{{ quiz.name }}</span></p>
      </div>
      <div class="px-2 border-e flex-col">
        <p class="block text-sm font-medium text-gray-700">تاریخ آزمون:<span>{{ quiz.date }}</span></p>
      </div>
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">زمان آزمون:<span>{{ quiz.time }}</span></p>
      </div>
      <div class="px-2 border-e">
        <p class="block text-sm font-medium text-gray-700">تعداد دفعات شرکت مجاز: <span>{{ quiz.attempts }}</span></p>
      </div>
      <div class="flex items-center px-2 border-e pb-2">
        <input v-model="quiz.hasReview" id="checked-checkbox" type="checkbox" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="checked-checkbox" class="ms-1 text-sm font-medium text-gray-700 dark:text-gray-700">مرور دارد</label>
      </div>
      <button @click="openModal" class="edit-button bg-[#adacc6] p-2 rounded hover:bg-gray-400 ms-2">
        <editIcon />
      </button>
    </div>
    <QuizView class="my-10" />
  </div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="bg-[#c6adac] rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">ویرایش اطلاعات آزمون</h3>
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">نام آزمون</label>
            <input type="text" v-model="quiz.name" class="p-2 mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">تاریخ آزمون</label>
            <input type="text" v-model="quiz.date" class="p-2 mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">زمان آزمون</label>
            <input type="text" v-model="quiz.time" class="p-2 mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">تعداد دفعات شرکت مجاز</label>
            <input type="text" v-model="quiz.attempts" class="p-2 mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
          <div class="flex items-center">
            <input v-model="quiz.hasReview" id="edit-checked-checkbox" type="checkbox" class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="edit-checked-checkbox" class="p-2 ms-1 text-sm font-medium text-gray-700 dark:text-gray-700">مرور دارد</label>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:justify-between">
        <button @click="saveChanges" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#523946] text-base font-medium text-white hover:bg-blue-600  sm:w-auto sm:text-sm">
          ذخیره
        </button>
        <button @click="closeModal" class=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-5 py-2 bg-gray-300 text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm">
          لغو
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styling here */
</style>
