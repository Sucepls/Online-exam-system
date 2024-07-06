<script setup lang="ts">
import { ref, reactive } from 'vue';
import Delete from '@/assets/Icons/delete.svg?component'


defineProps(["newQuestion"])
interface Option {
  text: string;
  correct: boolean;
}

interface Question {
  text: string;
  type: string;
  options: Option[];
}

const question = reactive<Question>({
  text: '',
  type: '',
  options: []
});
const questions = ref<Question[]>([]);



const addOption = () => {
  question.options.push({ text: '', correct: false });
};

const removeOption = (index: number) => {
  question.options.splice(index, 1);
};

const addQuestion = () => {
  questions.value.push({ ...question });
  resetForm();
};

const resetForm = () => {
  question.text = '';
  question.type = '';
  question.options = [];
};
</script>


<template>
  <div>

    <!-- پاپاپ -->
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg w-1/3">
        <h2 class="text-xl mb-4">ایجاد سوال جدید</h2>

        <!-- فرم سوال -->
        <form @submit.prevent="addQuestion">
          <div class="mb-4">
            <label for="questionText" class="block text-sm font-medium text-gray-700">متن سوال</label>
            <textarea id="questionText" v-model="question.text" class="mt-1 block w-full border border-gray-300 p-2 rounded-md"></textarea>
          </div>

          <div class="mb-4">
            <label for="questionType" class="block text-sm font-medium text-gray-700">نوع پاسخ سوال</label>
            <select id="questionType" v-model="question.type" class="mt-1 block w-full border border-gray-300 p-2 rounded-md">
              <option value="multipleChoice">چهار گزینه‌ای</option>
              <option value="trueFalse">صحیح غلط</option>
              <option value="descriptive">تشریحی</option>
            </select>
          </div>

          <!-- گزینه‌ها برای سوالات چهار گزینه‌ای یا صحیح غلط -->
          <div v-if="question.type === 'multipleChoice' || question.type === 'trueFalse'" class="mb-4">
            <label class="block text-sm font-medium text-gray-700">گزینه‌ها</label>
            <div v-for="(option, index) in question.options" :key="index" class="flex items-center mt-2">
              <input type="text" v-model="option.text" class="border border-gray-300 p-2 rounded-md flex-grow" placeholder="گزینه"/>
              <input type="checkbox" v-model="option.correct" class="ml-2 mr-2" />
              <button type="button" @click="removeOption(index)" class="bg-red-200 rounded-lg p-1 ml-2 mr-2 text-red-500"><span>
                <Delete/>
              </span></button>
            </div>
            <button type="button" @click="addOption" class="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded">افزودن گزینه</button>
          </div>

          <div class="mt-4">
            <button type="submit" class="w-full bg-[#523946] text-white py-2 px-4 rounded hover:bg-blue-600">اضافه کردن سوال</button>
          </div>
        </form>
        <button type="submit" class="w-full mt-4 bg-[#523946] text-white py-2 px-4 rounded hover:bg-red-700">
          ایجاد آزمون
        </button>
        <button class="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          بستن
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>