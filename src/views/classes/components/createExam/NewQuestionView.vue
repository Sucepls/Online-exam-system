<script setup lang="ts">
import { ref, reactive } from 'vue';
import Delete from '@/assets/Icons/delete.svg?component'
import type {Exam} from "@/models/exams.interface";
import {toast} from "vue3-toastify";
import {useQuestionStore} from "@/stores/QuestionsStore";
import {type Question, QuestionType} from "@/models/questions.interface";
import {useAuthStore} from "@/stores/AuthStore";
import type {Choice} from "@/models/choices.interface";


const props = defineProps(["examId"])

const questionStore = useQuestionStore()
defineEmits(['close'])

const questionInfo = ref({choices:[] as Choice[],text:''} as Question)

function createQuestion (){
  questionInfo.value.examId=Number(props.examId)
  questionStore.createQuestion(questionInfo.value).then((data)=>{
    resetForm();
    toast('سوال با موفقیت ایجاد شد', {
      autoClose: 1500,
      rtl: true,
      type: 'success'
    })
  }).catch(()=>{
    toast('سوال ایجاد نشد!', {
      autoClose: 1500,
      rtl: true,
      type: 'error'
    })
  })
}



const addOption = () => {
  console.log(questionInfo.value)
  questionInfo.value.choices.push({ text: '', isCorrect: false,questionId:questionInfo.value.id });
};

const removeOption = (index: number) => {
  questionInfo.value.choices.splice(index, 1);
};

const resetForm = () => {
  questionInfo.value.text = '';
  questionInfo.value.type = '';
  questionInfo.value.choices = [];
};
</script>


<template>
  <div>

    <!-- پاپاپ -->
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-[#c6adac] p-6 rounded-lg shadow-lg w-1/3">
        <h2 class="text-xl mb-4">ایجاد سوال جدید</h2>

        <!-- فرم سوال -->
        <form @submit.prevent="createQuestion">
          <div class="mb-4">
            <label for="questionText" class="block text-sm font-medium text-gray-700">متن سوال</label>
            <textarea id="questionText" v-model="questionInfo.text" class="mt-1 block w-full border border-gray-300 p-2 rounded-md"></textarea>
          </div>

          <div class="mb-4">
            <label for="questionType" class="block text-sm font-medium text-gray-700">نوع پاسخ سوال</label>
            <select id="questionType" v-model="questionInfo.type" class="mt-1 block w-full border border-gray-300 p-2 rounded-md">
              <option :value="QuestionType.MULTIPLE_CHOICE">چهار گزینه‌ای</option>
              <option :value="QuestionType.TRUE_FALSE">صحیح غلط</option>
              <option :value="QuestionType.ESSAY">تشریحی</option>
            </select>
          </div>

          <!-- گزینه‌ها برای سوالات چهار گزینه‌ای یا صحیح غلط -->
          <div v-if="questionInfo.type === QuestionType.MULTIPLE_CHOICE || questionInfo.type ===QuestionType.TRUE_FALSE" class="mb-4">
            <label class="block text-sm font-medium text-gray-700">گزینه‌ها</label>
            <div v-for="(choice, index) in questionInfo.choices" :key="index" class="flex items-center mt-2">
              <input type="text" v-model="choice.text" class="border border-gray-300 p-2 rounded-md flex-grow" placeholder="گزینه"/>
              <input type="checkbox" v-model="choice.isCorrect"  class="ml-2 mr-2" />
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
        <button type="button" @click="$emit('close')" class="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
          بستن
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>